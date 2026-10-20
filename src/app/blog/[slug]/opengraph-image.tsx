import { ImageResponse } from "next/og";
import { getIconDataUri } from "@/lib/icon-data";
import { getPost } from "@/lib/blog";

export const alt = "RoketAd blog post";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPost(slug);
  const title = post?.title ?? "RoketAd Blog";
  const category = post?.category ?? "Blog";

  const titleSize = title.length > 90 ? 46 : title.length > 60 ? 54 : 62;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#201E1F",
          padding: "64px 72px",
          color: "#ffffff",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div style={{ display: "flex", alignItems: "center" }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={getIconDataUri()}
              width={44}
              height={44}
              alt=""
              style={{ marginRight: 14, borderRadius: 9 }}
            />
            <div style={{ fontSize: 28, fontWeight: 700 }}>RoketAd</div>
          </div>
          <div
            style={{
              fontSize: 20,
              letterSpacing: "2px",
              textTransform: "uppercase",
              color: "#FF6A33",
            }}
          >
            {category}
          </div>
        </div>

        <div
          style={{
            display: "flex",
            fontSize: titleSize,
            lineHeight: 1.12,
            fontWeight: 700,
            letterSpacing: "-1.5px",
            maxWidth: 1000,
          }}
        >
          {title}
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            fontSize: 22,
            color: "rgba(255,255,255,0.55)",
          }}
        >
          <div>roketad.com/blog</div>
          <div>{post ? `${post.readingTime} min read` : "Guides for indie builders"}</div>
        </div>
      </div>
    ),
    { ...size },
  );
}
