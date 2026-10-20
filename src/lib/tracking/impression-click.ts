import { db } from "@/lib/db";
import { impressions, clicks } from "@/lib/db/schema";

// Record impression
async function recordImpression(campaignId: string, adUnitId: string, websiteId: string) {
  const [impression] = await db
    .insert(impressions)
    .values({
      campaignId,
      adUnitId,
      websiteId,
    })
    .returning();

  return impression;
}

// Record click
async function recordClick(impressionId: string) {
  const [click] = await db
    .insert(clicks)
    .values({
      impressionId,
    })
    .returning();

  return click;
}

// Get impression count for campaign
async function getImpressionCount(campaignId: string) {
  const result = await db
    .select({ count: sql`count(*)` })
    .from(impressions)
    .where(eq(impressions.campaignId, campaignId));

  return result[0].count;
}

// Get click count for campaign
async function getClickCount(campaignId: string) {
  const result = await db
    .select({ count: sql`count(*)` })
    .from(clicks)
    .innerJoin(impressions, eq(clicks.impressionId, impressions.id))
    .where(eq(impressions.campaignId, campaignId));

  return result[0].count;
}

export {
  recordImpression,
  recordClick,
  getImpressionCount,
  getClickCount,
};