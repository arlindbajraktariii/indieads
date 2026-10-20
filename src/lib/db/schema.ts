import { sql } from "drizzle-orm";
import { integer, sqliteTable, text } from "drizzle-orm/sqlite-core";

// Users table
const users = sqliteTable("users", {
  id: text("id").primaryKey(),
  name: text("name"),
  email: text("email").notNull().unique(),
  emailVerified: integer("emailVerified", { mode: "timestamp" }),
  image: text("image"),
  password: text("password"),
  createdAt: integer("createdAt", { mode: "timestamp" }).default(sql`(strftime('%s', 'now'))`),
  updatedAt: integer("updatedAt", { mode: "timestamp" }).default(sql`(strftime('%s', 'now'))`),
});

// Advertiser profiles table
const advertiserProfiles = sqliteTable("advertiser_profiles", {
  id: text("id").primaryKey(),
  userId: text("userId").references(() => users.id),
  companyName: text("companyName"),
  website: text("website"),
  createdAt: integer("createdAt", { mode: "timestamp" }).default(sql`(strftime('%s', 'now'))`),
  updatedAt: integer("updatedAt", { mode: "timestamp" }).default(sql`(strftime('%s', 'now'))`),
});

// Publisher profiles table
const publisherProfiles = sqliteTable("publisher_profiles", {
  id: text("id").primaryKey(),
  userId: text("userId").references(() => users.id),
  website: text("website"),
  createdAt: integer("createdAt", { mode: "timestamp" }).default(sql`(strftime('%s', 'now'))`),
  updatedAt: integer("updatedAt", { mode: "timestamp" }).default(sql`(strftime('%s', 'now'))`),
});

// Websites table
const websites = sqliteTable("websites", {
  id: text("id").primaryKey(),
  publisherId: text("publisherId").references(() => publisherProfiles.id),
  name: text("name").notNull(),
  url: text("url").notNull().unique(),
  description: text("description"),
  category: text("category", { enum: ["developer_tools", "saas", "ai", "programming", "design", "marketing", "productivity", "business", "other"] }).notNull(),
  estimatedVisitors: integer("estimatedVisitors"),
  status: text("status", { enum: ["pending", "approved", "rejected", "suspended"] }).default("pending"),
  createdAt: integer("createdAt", { mode: "timestamp" }).default(sql`(strftime('%s', 'now'))`),
  updatedAt: integer("updatedAt", { mode: "timestamp" }).default(sql`(strftime('%s', 'now'))`),
});

// Ad units table
const adUnits = sqliteTable("ad_units", {
  id: text("id").primaryKey(),
  websiteId: text("websiteId").references(() => websites.id),
  name: text("name").notNull(),
  format: text("format", { enum: ["native_card"] }).default("native_card"),
  createdAt: integer("createdAt", { mode: "timestamp" }).default(sql`(strftime('%s', 'now'))`),
  updatedAt: integer("updatedAt", { mode: "timestamp" }).default(sql`(strftime('%s', 'now'))`),
});

// Campaigns table
const campaigns = sqliteTable("campaigns", {
  id: text("id").primaryKey(),
  advertiserId: text("advertiserId").references(() => advertiserProfiles.id),
  name: text("name").notNull(),
  status: text("status", { enum: ["draft", "pending_payment", "pending_review", "active", "paused", "rejected", "completed"] }).default("draft"),
  budget: integer("budget").notNull(),
  impressions: integer("impressions").notNull(),
  startDate: integer("startDate", { mode: "timestamp" }).notNull(),
  endDate: integer("endDate", { mode: "timestamp" }).notNull(),
  createdAt: integer("createdAt", { mode: "timestamp" }).default(sql`(strftime('%s', 'now'))`),
  updatedAt: integer("updatedAt", { mode: "timestamp" }).default(sql`(strftime('%s', 'now'))`),
});

// Ads table
const ads = sqliteTable("ads", {
  id: text("id").primaryKey(),
  campaignId: text("campaignId").references(() => campaigns.id),
  headline: text("headline").notNull(),
  description: text("description").notNull(),
  cta: text("cta", { enum: ["learn_more", "try_now", "start_free", "get_started", "view_product"] }).notNull(),
  destinationUrl: text("destinationUrl").notNull(),
  createdAt: integer("createdAt", { mode: "timestamp" }).default(sql`(strftime('%s', 'now'))`),
  updatedAt: integer("updatedAt", { mode: "timestamp" }).default(sql`(strftime('%s', 'now'))`),
});

// Campaign targeting table
const campaignTargeting = sqliteTable("campaign_targeting", {
  id: text("id").primaryKey(),
  campaignId: text("campaignId").references(() => campaigns.id),
  category: text("category", { enum: ["ai", "saas", "developer_tools", "productivity", "marketing", "design", "no_code", "analytics", "hosting", "api"] }).notNull(),
  audience: text("audience", { enum: ["developers", "founders", "designers", "marketers", "saas_teams", "ai_builders"] }).notNull(),
  createdAt: integer("createdAt", { mode: "timestamp" }).default(sql`(strftime('%s', 'now'))`),
  updatedAt: integer("updatedAt", { mode: "timestamp" }).default(sql`(strftime('%s', 'now'))`),
});

// Impressions table
const impressions = sqliteTable("impressions", {
  id: text("id").primaryKey(),
  campaignId: text("campaignId").references(() => campaigns.id),
  adUnitId: text("adUnitId").references(() => adUnits.id),
  websiteId: text("websiteId").references(() => websites.id),
  createdAt: integer("createdAt", { mode: "timestamp" }).default(sql`(strftime('%s', 'now'))`),
});

// Clicks table
const clicks = sqliteTable("clicks", {
  id: text("id").primaryKey(),
  impressionId: text("impressionId").references(() => impressions.id),
  createdAt: integer("createdAt", { mode: "timestamp" }).default(sql`(strftime('%s', 'now'))`),
});

// Payments table
const payments = sqliteTable("payments", {
  id: text("id").primaryKey(),
  campaignId: text("campaignId").references(() => campaigns.id),
  amount: integer("amount").notNull(),
  status: text("status", { enum: ["pending", "completed", "failed"] }).default("pending"),
  stripePaymentId: text("stripePaymentId"),
  createdAt: integer("createdAt", { mode: "timestamp" }).default(sql`(strftime('%s', 'now'))`),
  updatedAt: integer("updatedAt", { mode: "timestamp" }).default(sql`(strftime('%s', 'now'))`),
});

// Publisher earnings table
const publisherEarnings = sqliteTable("publisher_earnings", {
  id: text("id").primaryKey(),
  impressionId: text("impressionId").references(() => impressions.id),
  amount: integer("amount").notNull(),
  status: text("status", { enum: ["pending", "paid"] }).default("pending"),
  createdAt: integer("createdAt", { mode: "timestamp" }).default(sql`(strftime('%s', 'now'))`),
  updatedAt: integer("updatedAt", { mode: "timestamp" }).default(sql`(strftime('%s', 'now'))`),
});

// Payouts table
const payouts = sqliteTable("payouts", {
  id: text("id").primaryKey(),
  publisherId: text("publisherId").references(() => publisherProfiles.id),
  amount: integer("amount").notNull(),
  status: text("status", { enum: ["pending", "approved", "paid", "rejected"] }).default("pending"),
  paymentMethod: text("paymentMethod", { enum: ["paypal", "bank_transfer"] }).notNull(),
  createdAt: integer("createdAt", { mode: "timestamp" }).default(sql`(strftime('%s', 'now'))`),
  updatedAt: integer("updatedAt", { mode: "timestamp" }).default(sql`(strftime('%s', 'now'))`),
});

// Fraud flags table
const fraudFlags = sqliteTable("fraud_flags", {
  id: text("id").primaryKey(),
  impressionId: text("impressionId").references(() => impressions.id).notNull(),
  reason: text("reason").notNull(),
  status: text("status", { enum: ["open", "resolved"] }).default("open"),
  createdAt: integer("createdAt", { mode: "timestamp" }).default(sql`(strftime('%s', 'now'))`),
  updatedAt: integer("updatedAt", { mode: "timestamp" }).default(sql`(strftime('%s', 'now'))`),
});

// Admin actions table
const adminActions = sqliteTable("admin_actions", {
  id: text("id").primaryKey(),
  adminId: text("adminId").references(() => users.id),
  actionType: text("actionType").notNull(),
  targetId: text("targetId").notNull(),
  reason: text("reason"),
  createdAt: integer("createdAt", { mode: "timestamp" }).default(sql`(strftime('%s', 'now'))`),
});

// Settings table
const settings = sqliteTable("settings", {
  id: text("id").primaryKey(),
  key: text("key").notNull().unique(),
  value: text("value").notNull(),
  createdAt: integer("createdAt", { mode: "timestamp" }).default(sql`(strftime('%s', 'now'))`),
  updatedAt: integer("updatedAt", { mode: "timestamp" }).default(sql`(strftime('%s', 'now'))`),
});

export {
  users,
  advertiserProfiles,
  publisherProfiles,
  websites,
  adUnits,
  campaigns,
  ads,
  campaignTargeting,
  impressions,
  clicks,
  payments,
  publisherEarnings,
  payouts,
  fraudFlags,
  adminActions,
  settings,
};