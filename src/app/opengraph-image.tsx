import { ImageResponse } from "next/og";
import { getIconDataUri } from "@/lib/icon-data";

export const alt = "RoketAd — advertising for indie hackers";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
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
        <div style={{ display: "flex", alignItems: "center" }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={getIconDataUri()}
            width={48}
            height={48}
            alt=""
            style={{ marginRight: 14, borderRadius: 10 }}
          />
          <div style={{ fontSize: 30, fontWeight: 700 }}>RoketAd</div>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              display: "flex",
              fontSize: 76,
              lineHeight: 1.05,
              fontWeight: 700,
              letterSpacing: "-2.5px",
              maxWidth: 980,
            }}
          >
            Advertising for indie hackers.
          </div>
          <div
            style={{
              display: "flex",
              marginTop: 28,
              fontSize: 30,
              color: "rgba(255,255,255,0.6)",
            }}
          >
            Reach founders, developers and early adopters.
          </div>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            fontSize: 22,
            color: "rgba(255,255,255,0.45)",
          }}
        >
          <div>roketad.com</div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              background: "#F44000",
              color: "#ffffff",
              borderRadius: 999,
              padding: "10px 22px",
              fontSize: 20,
              fontWeight: 600,
            }}
          >
            Join the waitlist
          </div>
        </div>
      </div>
    ),
    { ...size },
  );
}
