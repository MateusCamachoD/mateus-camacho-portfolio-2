import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Mateus Camacho — Portfolio",
    short_name: "Mateus Camacho",
    description:
      "Software engineer, product builder, and founder working across engineering, AI, UX/UI, and business strategy.",
    start_url: "/",
    display: "standalone",
    background_color: "#09090b",
    theme_color: "#09090b",
  };
}
