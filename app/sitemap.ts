import { MetadataRoute } from "next";
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: "https://www.reactrajasthan.com/", changeFrequency: "weekly", priority: 1 },
    { url: "https://www.reactrajasthan.com/speakers" },
    { url: "https://www.reactrajasthan.com/sponsors" },
    { url: "https://www.reactrajasthan.com/venue" },
    { url: "https://www.reactrajasthan.com/organizers" },
    { url: "https://www.reactrajasthan.com/volunteers" },
  ];
}
