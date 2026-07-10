import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://almagedy.com";

  const routes = ["", "/economic", "/vip", "/buses", "/contact"];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority:
      route === "" ? 1 : route === "/economic" || route === "/vip" ? 0.9 : 0.8,
  }));
}
