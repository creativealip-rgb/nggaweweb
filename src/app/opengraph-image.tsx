import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OGImage() {
  return new ImageResponse(
    <div
      style={{
        background: "linear-gradient(135deg, #020617 0%, #07111F 50%, #0F172A 100%)",
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: "80px",
      }}
    >
      <div
        style={{
          display: "flex",
          fontSize: 64,
          fontWeight: 900,
          color: "#F8FAFC",
          lineHeight: 1.1,
          fontFamily: "system-ui, sans-serif",
          maxWidth: 900,
        }}
      >
        {"Nggawe"}
        <span style={{ color: "#22D3EE" }}>{"Web"}</span>
      </div>
      <div
        style={{
          display: "flex",
          fontSize: 28,
          color: "#94A3B8",
          marginTop: 24,
          lineHeight: 1.5,
          maxWidth: 800,
        }}
      >
        {"Website premium, SEO-ready, dan automation buat bisnis yang mau tumbuh lebih rapi."}
      </div>
      <div style={{ display: "flex", gap: 12, marginTop: 40 }}>
        {["Website", "SEO", "Automation"].map((tag) => (
          <div
            key={tag}
            style={{
              display: "flex",
              padding: "8px 20px",
              borderRadius: 999,
              border: "1px solid rgba(148, 163, 184, 0.2)",
              color: "#CBD5E1",
              fontSize: 18,
              fontWeight: 600,
            }}
          >
            {tag}
          </div>
        ))}
      </div>
    </div>
  );
}
