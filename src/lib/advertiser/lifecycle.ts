import { db } from "@/lib/db";
import { advertiserProfiles, campaigns, ads, campaignTargeting, payments } from "@/lib/db/schema";
import { eq } from "drizzle-orm";

// Create advertiser profile
async function createAdvertiserProfile(userId: string, companyName: string, website: string) {
  const [advertiserProfile] = await db
    .insert(advertiserProfiles)
    .values({
      userId,
      companyName,
      website,
    })
    .returning();

  return advertiserProfile;
}

// Create campaign
async function createCampaign(
  advertiserId: string,
  name: string,
  budget: number,
  impressions: number,
  startDate: Date,
  endDate: Date
) {
  const [campaign] = await db
    .insert(campaigns)
    .values({
      advertiserId,
      name,
      budget,
      impressions,
      startDate,
      endDate,
    })
    .returning();

  return campaign;
}

// Create ad
async function createAd(
  campaignId: string,
  headline: string,
  description: string,
  cta: string,
  destinationUrl: string
) {
  const [ad] = await db
    .insert(ads)
    .values({
      campaignId,
      headline,
      description,
      cta,
      destinationUrl,
    })
    .returning();

  return ad;
}

// Set campaign targeting
async function setCampaignTargeting(
  campaignId: string,
  category: string,
  audience: string
) {
  const [targeting] = await db
    .insert(campaignTargeting)
    .values({
      campaignId,
      category,
      audience,
    })
    .returning();

  return targeting;
}

// Process payment
async function processPayment(campaignId: string, amount: number, stripePaymentId: string) {
  const [payment] = await db
    .insert(payments)
    .values({
      campaignId,
      amount,
      stripePaymentId,
    })
    .returning();

  return payment;
}

// Update campaign status
async function updateCampaignStatus(campaignId: string, status: string) {
  const [updatedCampaign] = await db
    .update(campaigns)
    .set({ status })
    .where(eq(campaigns.id, campaignId))
    .returning();

  return updatedCampaign;
}

export {
  createAdvertiserProfile,
  createCampaign,
  createAd,
  setCampaignTargeting,
  processPayment,
  updateCampaignStatus,
};