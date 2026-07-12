import { MetadataRoute } from 'next'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://floridaroofingservice.vercel.app'

  // Add your static paths
  const routes = [
    '',
    '/about',
    '/contact',
    '/projects',
    '/architecture',
    '/roofing',
    '/service-areas',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: route === '' ? 1.0 : 0.8,
  }))

  // Optional: Fetch dynamic IDs from your CMS/DB for dynamic routes:
  // /architecture/[id] and /roofing/[id] and append them here.

  return [...routes]
}