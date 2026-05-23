import { ImageResponse } from "next/og";

export const alt = "Jan Michoin - Brand and UX/UI Designer";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          alignItems: "flex-start",
          background: "#f0f0f0",
          color: "#242425",
          display: "flex",
          flexDirection: "column",
          fontFamily: "Helvetica Neue, Arial, sans-serif",
          height: "100%",
          justifyContent: "space-between",
          padding: "56px",
          width: "100%",
        }}
      >
        <div
          style={{
            background: "#242425",
            borderRadius: "12px",
            color: "#f0f0f0",
            fontSize: 34,
            fontWeight: 700,
            padding: "14px 24px",
          }}
        >
          Jan Michoin
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 22 }}>
          <div
            style={{
              background: "#ccff00",
              boxDecorationBreak: "clone",
              fontSize: 82,
              fontWeight: 700,
              lineHeight: 1.05,
              padding: "8px 14px",
            }}
          >
            Brand + UX/UI design
          </div>
          <div style={{ fontSize: 38, lineHeight: 1.25, maxWidth: 880 }}>
            Senior strategy, digital product design, and visual systems without agency overhead.
          </div>
        </div>
      </div>
    ),
    size,
  );
}
