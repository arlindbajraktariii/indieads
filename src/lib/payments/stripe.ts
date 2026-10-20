import Stripe from "stripe";
import { db } from "@/lib/db";
import { payments } from "@/lib/db/schema";
import { eq } from "drizzle-orm";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: "2024-04-10",
});

// Create Stripe payment intent
async function createPaymentIntent(campaignId: string, amount: number) {
  const paymentIntent = await stripe.paymentIntents.create({
    amount: amount * 100, // Convert to cents
    currency: "usd",
    metadata: {
      campaignId,
    },
  });

  return paymentIntent;
}

// Handle successful payment
async function handleSuccessfulPayment(paymentIntentId: string) {
  const paymentIntent = await stripe.paymentIntents.retrieve(paymentIntentId);

  const [payment] = await db
    .update(payments)
    .set({
      status: "completed",
      stripePaymentId: paymentIntent.id,
    })
    .where(eq(payments.campaignId, paymentIntent.metadata.campaignId))
    .returning();

  return payment;
}

// Handle failed payment
async function handleFailedPayment(paymentIntentId: string) {
  const paymentIntent = await stripe.paymentIntents.retrieve(paymentIntentId);

  const [payment] = await db
    .update(payments)
    .set({
      status: "failed",
      stripePaymentId: paymentIntent.id,
    })
    .where(eq(payments.campaignId, paymentIntent.metadata.campaignId))
    .returning();

  return payment;
}

export {
  createPaymentIntent,
  handleSuccessfulPayment,
  handleFailedPayment,
};