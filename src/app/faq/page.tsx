import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import { Faq } from "@/components/landing/faq";
import { PageShell } from "@/components/landing/page-shell";

export const metadata: Metadata = pageMetadata({
  title: "FAQ",
  description:
    "Answers about advertising on RoketAd: who it’s for, how campaigns work, budgets, publishers, quality control and launch timing.",
  path: "/faq",
});

export default function FaqPage() {
  return (
    <PageShell
      kicker="FAQ"
      title="Frequently Asked Questions"
      description="Everything you need to know about advertising and publishing on RoketAd."
    >
      <Faq />
    </PageShell>
  );
}
