import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  const baseUrl = "https://lux-browser.samcux.tech";

  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: []
      }
    ],
    sitemap: `${baseUrl}/sitemap.xml`
  };
}

