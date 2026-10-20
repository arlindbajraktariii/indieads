import { db } from "@/lib/db";
import { campaigns } from "@/lib/db/schema";
import { eq } from "drizzle-orm";

// Define campaign states
const CAMPAIGN_STATES = {
  DRAFT: "draft",
  PENDING_PAYMENT: "pending_payment",
  PENDING_REVIEW: "pending_review",
  ACTIVE: "active",
  PAUSED: "paused",
  REJECTED: "rejected",
  COMPLETED: "completed",
};

// Transition campaign to pending payment
async function transitionToPendingPayment(campaignId: string) {
  const [updatedCampaign] = await db
    .update(campaigns)
    .set({ status: CAMPAIGN_STATES.PENDING_PAYMENT })
    .where(eq(campaigns.id, campaignId))
    .returning();

  return updatedCampaign;
}

// Transition campaign to pending review
async function transitionToPendingReview(campaignId: string) {
  const [updatedCampaign] = await db
    .update(campaigns)
    .set({ status: CAMPAIGN_STATES.PENDING_REVIEW })
    .where(eq(campaigns.id, campaignId))
    .returning();

  return updatedCampaign;
}

// Transition campaign to active
async function transitionToActive(campaignId: string) {
  const [updatedCampaign] = await db
    .update(campaigns)
    .set({ status: CAMPAIGN_STATES.ACTIVE })
    .where(eq(campaigns.id, campaignId))
    .returning();

  return updatedCampaign;
}

// Transition campaign to paused
async function transitionToPaused(campaignId: string) {
  const [updatedCampaign] = await db
    .update(campaigns)
    .set({ status: CAMPAIGN_STATES.PAUSED })
    .where(eq(campaigns.id, campaignId))
    .returning();

  return updatedCampaign;
}

// Transition campaign to rejected
async function transitionToRejected(campaignId: string) {
  const [updatedCampaign] = await db
    .update(campaigns)
    .set({ status: CAMPAIGN_STATES.REJECTED })
    .where(eq(campaigns.id, campaignId))
    .returning();

  return updatedCampaign;
}

// Transition campaign to completed
async function transitionToCompleted(campaignId: string) {
  const [updatedCampaign] = await db
    .update(campaigns)
    .set({ status: CAMPAIGN_STATES.COMPLETED })
    .where(eq(campaigns.id, campaignId))
    .returning();

  return updatedCampaign;
}

export {
  CAMPAIGN_STATES,
  transitionToPendingPayment,
  transitionToPendingReview,
  transitionToActive,
  transitionToPaused,
  transitionToRejected,
  transitionToCompleted,
};