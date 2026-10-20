import { db } from "@/lib/db";
import { publisherProfiles, websites, adUnits, payouts } from "@/lib/db/schema";
import { eq } from "drizzle-orm";

// Create publisher profile
async function createPublisherProfile(userId: string, website: string) {
  const [publisherProfile] = await db
    .insert(publisherProfiles)
    .values({
      userId,
      website,
    })
    .returning();

  return publisherProfile;
}

// Create website
async function createWebsite(
  publisherId: string,
  name: string,
  url: string,
  description: string,
  category: string,
  estimatedVisitors: number
) {
  const [website] = await db
    .insert(websites)
    .values({
      publisherId,
      name,
      url,
      description,
      category,
      estimatedVisitors,
    })
    .returning();

  return website;
}

// Create ad unit
async function createAdUnit(websiteId: string, name: string, format: string) {
  const [adUnit] = await db
    .insert(adUnits)
    .values({
      websiteId,
      name,
      format,
    })
    .returning();

  return adUnit;
}

// Update website status
async function updateWebsiteStatus(websiteId: string, status: string) {
  const [updatedWebsite] = await db
    .update(websites)
    .set({ status })
    .where(eq(websites.id, websiteId))
    .returning();

  return updatedWebsite;
}

// Request payout
async function requestPayout(publisherId: string, amount: number, paymentMethod: string) {
  const [payout] = await db
    .insert(payouts)
    .values({
      publisherId,
      amount,
      paymentMethod,
    })
    .returning();

  return payout;
}

// Update payout status
async function updatePayoutStatus(payoutId: string, status: string) {
  const [updatedPayout] = await db
    .update(payouts)
    .set({ status })
    .where(eq(payouts.id, payoutId))
    .returning();

  return updatedPayout;
}

export {
  createPublisherProfile,
  createWebsite,
  createAdUnit,
  updateWebsiteStatus,
  requestPayout,
  updatePayoutStatus,
};