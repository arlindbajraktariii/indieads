import { db } from "@/lib/db";
import { publisherEarnings, impressions, adUnits, websites } from "@/lib/db/schema";
import { eq, sql } from "drizzle-orm";

// Calculate publisher earnings
async function calculatePublisherEarnings(impressionId: string) {
  // Get impression details
  const impression = await db.query.impressions.findFirst({
    where: eq(impressions.id, impressionId),
    with: {
      adUnit: true,
      website: true,
    },
  });

  if (!impression) {
    throw new Error("Impression not found");
  }

  // Calculate earnings (70% of $0.005 per impression)
  const earnings = 0.005 * 0.7;

  // Record publisher earnings
  const [earning] = await db
    .insert(publisherEarnings)
    .values({
      impressionId,
      amount: earnings,
    })
    .returning();

  return earning;
}

// Get pending balance for publisher
async function getPendingBalance(publisherId: string) {
  const result = await db
    .select({ total: sql`sum(${publisherEarnings.amount})` })
    .from(publisherEarnings)
    .innerJoin(impressions, eq(publisherEarnings.impressionId, impressions.id))
    .innerJoin(adUnits, eq(impressions.adUnitId, adUnits.id))
    .innerJoin(websites, eq(adUnits.websiteId, websites.id))
    .where(
      eq(websites.publisherId, publisherId),
      eq(publisherEarnings.status, "pending")
    );

  return result[0].total || 0;
}

// Get available balance for publisher
async function getAvailableBalance(publisherId: string) {
  const result = await db
    .select({ total: sql`sum(${publisherEarnings.amount})` })
    .from(publisherEarnings)
    .innerJoin(impressions, eq(publisherEarnings.impressionId, impressions.id))
    .innerJoin(adUnits, eq(impressions.adUnitId, adUnits.id))
    .innerJoin(websites, eq(adUnits.websiteId, websites.id))
    .where(
      eq(websites.publisherId, publisherId),
      eq(publisherEarnings.status, "paid")
    );

  return result[0].total || 0;
}

// Get lifetime earnings for publisher
async function getLifetimeEarnings(publisherId: string) {
  const result = await db
    .select({ total: sql`sum(${publisherEarnings.amount})` })
    .from(publisherEarnings)
    .innerJoin(impressions, eq(publisherEarnings.impressionId, impressions.id))
    .innerJoin(adUnits, eq(impressions.adUnitId, adUnits.id))
    .innerJoin(websites, eq(adUnits.websiteId, websites.id))
    .where(eq(websites.publisherId, publisherId));

  return result[0].total || 0;
}

export {
  calculatePublisherEarnings,
  getPendingBalance,
  getAvailableBalance,
  getLifetimeEarnings,
};