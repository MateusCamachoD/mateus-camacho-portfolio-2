import { ImageResponse } from "next/og";

export const alt =
  "Mateus Camacho — Software Engineer, Product Builder, and Founder";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          width: "100%",
          height: "100%",
          padding: 62,
          flexDirection: "column",
          justifyContent: "space-between",
          background:
            "radial-gradient(circle at 72% 40%, rgba(126,108,255,.28), transparent 30%), #09090b",
          color: "#f4f4f5",
          fontFamily: "Arial, sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div
            style={{
              display: "flex",
              width: 58,
              height: 58,
              alignItems: "center",
              justifyContent: "center",
              borderRadius: 17,
              background: "#f4f4f5",
              color: "#09090b",
              fontSize: 17,
              fontWeight: 800,
            }}
          >
            MC
          </div>
          <div
            style={{
              display: "flex",
              color: "#8d8d96",
              fontSize: 18,
            }}
          >
            Engineering · Product · Design · Business
          </div>
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ display: "flex", fontSize: 28, color: "#9b8cff" }}>
            Mateus Camacho
          </div>
          <div
            style={{
              display: "flex",
              maxWidth: 930,
              marginTop: 14,
              fontSize: 78,
              fontWeight: 600,
              letterSpacing: "-4px",
              lineHeight: 1,
            }}
          >
            I turn ideas into systems and products.
          </div>
        </div>
      </div>
    ),
    size,
  );
}
