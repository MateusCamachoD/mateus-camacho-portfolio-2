/* eslint-disable @next/next/no-img-element */
import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const alt =
  "Mateus Camacho — Software Engineer, Product Builder, and Founder";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default async function OpenGraphImage() {
  const profileBuffer = await readFile(
    join(process.cwd(), "public", "profile.jpg")
  );

  const base64Profile = `data:image/jpeg;base64,${Buffer.from(profileBuffer).toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          width: "100%",
          height: "100%",
          padding: "54px 64px",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          background:
            "radial-gradient(circle at 75% 50%, rgba(155, 140, 255, 0.25), rgba(132, 201, 155, 0.08) 45%, #09090b 80%), #09090b",
          color: "#f4f4f5",
          fontFamily: "Arial, sans-serif",
        }}
      >
        {/* Left Column - Hero Copy */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            width: 580,
            height: "100%",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              gap: 10,
              padding: "8px 18px",
              borderRadius: 20,
              background: "rgba(255, 255, 255, 0.08)",
              border: "1px solid rgba(255, 255, 255, 0.15)",
              color: "#84c99b",
              fontSize: 16,
              fontWeight: 700,
            }}
          >
            <div
              style={{
                width: 8,
                height: 8,
                borderRadius: 4,
                background: "#84c99b",
              }}
            />
            Open to remote & relocation
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              marginTop: 32,
              fontSize: 68,
              fontWeight: 800,
              lineHeight: 1.02,
              letterSpacing: "-3px",
            }}
          >
            <div style={{ display: "flex", color: "#f4f4f5" }}>
              I turn Ideas.
            </div>
            <div style={{ display: "flex", color: "#f4f4f5", marginTop: 10 }}>
              Systems.
            </div>
            <div style={{ display: "flex", color: "#9b8cff", marginTop: 10 }}>
              Products.
            </div>
          </div>

          <div
            style={{
              display: "flex",
              marginTop: 24,
              fontSize: 22,
              color: "#a0a0ab",
              lineHeight: 1.4,
            }}
          >
            Mateus D. Camacho — Software Engineer, Product Builder & Founder.
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              gap: 14,
              marginTop: 38,
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: 42,
                height: 42,
                borderRadius: 12,
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
                fontSize: 22,
                color: "#f4f4f5",
                fontWeight: 700,
              }}
            >
              mateuscamacho.dev
            </div>
          </div>
        </div>

        {/* Right Column - Product Window with Photo */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            width: 440,
            height: 500,
            background: "#121216",
            border: "2px solid rgba(155, 140, 255, 0.4)",
            borderRadius: 32,
            padding: 24,
            justifyContent: "space-between",
            boxShadow: "0 30px 80px rgba(0, 0, 0, 0.6)",
          }}
        >
          {/* Top Bar */}
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              borderBottom: "1px solid rgba(255, 255, 255, 0.1)",
              paddingBottom: 14,
            }}
          >
            <div style={{ display: "flex", flexDirection: "row", gap: 8 }}>
              <div
                style={{
                  width: 12,
                  height: 12,
                  borderRadius: 6,
                  background: "#ff5f56",
                }}
              />
              <div
                style={{
                  width: 12,
                  height: 12,
                  borderRadius: 6,
                  background: "#ffbd2e",
                }}
              />
              <div
                style={{
                  width: 12,
                  height: 12,
                  borderRadius: 6,
                  background: "#27c93f",
                }}
              />
            </div>
            <div
              style={{
                display: "flex",
                color: "#8d8d96",
                fontSize: 13,
                fontWeight: 700,
                letterSpacing: "2px",
              }}
            >
              PRODUCT SYSTEM / 01
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 6,
                color: "#84c99b",
                fontSize: 13,
                fontWeight: 700,
              }}
            >
              <div
                style={{
                  width: 8,
                  height: 8,
                  borderRadius: 4,
                  background: "#84c99b",
                }}
              />
              LIVE
            </div>
          </div>

          {/* Canvas area with Profile Photo and Floating Cards */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              flex: 1,
              position: "relative",
              padding: "20px 0",
            }}
          >
            {/* Top Left Floating Chip */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                position: "absolute",
                top: 10,
                left: 0,
                background: "rgba(23, 23, 27, 0.95)",
                border: "1px solid rgba(155, 140, 255, 0.5)",
                borderRadius: 16,
                padding: "10px 16px",
              }}
            >
              <div
                style={{
                  display: "flex",
                  fontSize: 12,
                  color: "#9b8cff",
                  fontWeight: 700,
                  marginBottom: 4,
                }}
              >
                01 / STRATEGY
              </div>
              <div
                style={{
                  display: "flex",
                  fontSize: 14,
                  color: "#f4f4f5",
                  fontWeight: 700,
                }}
              >
                Find the right problem
              </div>
            </div>

            {/* Bottom Right Floating Chip */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                position: "absolute",
                bottom: 10,
                right: 0,
                background: "rgba(23, 23, 27, 0.95)",
                border: "1px solid rgba(132, 201, 155, 0.5)",
                borderRadius: 16,
                padding: "10px 16px",
              }}
            >
              <div
                style={{
                  display: "flex",
                  fontSize: 12,
                  color: "#84c99b",
                  fontWeight: 700,
                  marginBottom: 4,
                }}
              >
                03 / BUILD & SCALE
              </div>
              <div
                style={{
                  display: "flex",
                  fontSize: 14,
                  color: "#f4f4f5",
                  fontWeight: 700,
                }}
              >
                Ship with confidence
              </div>
            </div>

            {/* Center Profile Photo */}
            <img
              src={base64Profile}
              alt="Mateus Camacho"
              style={{
                width: 210,
                height: 210,
                borderRadius: 36,
                objectFit: "cover",
                border: "3px solid #9b8cff",
              }}
            />
          </div>

          {/* Bottom Bar */}
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              borderTop: "1px solid rgba(255, 255, 255, 0.1)",
              paddingTop: 14,
              color: "#8d8d96",
              fontSize: 13,
              fontWeight: 700,
              letterSpacing: "1px",
            }}
          >
            Think → Design → Build → Grow
          </div>
        </div>
      </div>
    ),
    size
  );
}
