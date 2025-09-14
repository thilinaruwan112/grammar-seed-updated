import { MetadataRoute } from 'next'
import { classDetailsData } from '@/lib/class-data';

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = 'https://www.your-domain.com'; // Replace with your actual domain

  // Get dynamic class routes
  const classRoutes = Object.keys(classDetailsData.en).map((grade) => ({
    url: `${siteUrl}/classes/${grade}`,
    lastModified: new Date(),
  }));

  // Define static routes
  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: siteUrl,
      lastModified: new Date(),
    },
    {
      url: `${siteUrl}/about`,
      lastModified: new Date(),
    },
    {
      url: `${siteUrl}/checker`,
      lastModified: new Date(),
    },
    {
      url: `${siteUrl}/classes`,
      lastModified: new Date(),
    },
    {
      url: `${siteUrl}/contact`,
      lastModified: new Date(),
    },
    {
      url: `${siteUrl}/practice`,
      lastModified: new Date(),
    },
    {
      url: `${siteUrl}/register`,
      lastModified: new Date(),
    },
    {
      url: `${siteUrl}/reviews`,
      lastModified: new Date(),
    },
    {
      url: `${siteUrl}/reviews/add`,
      lastModified: new Date(),
    },
    {
      url: `${siteUrl}/sheets`,
      lastModified: new Date(),
    },
  ];

  return [...staticRoutes, ...classRoutes];
}
