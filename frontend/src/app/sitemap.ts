import { MetadataRoute } from 'next'
 
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: process.env.FRONTEND_URL + '/',
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: process.env.FRONTEND_URL + '/list',
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: process.env.FRONTEND_URL + '/about',
      changeFrequency: 'weekly',
      priority: 0.4,
    },
    {
      url: process.env.FRONTEND_URL + '/privacy',
      changeFrequency: 'weekly',
      priority: 0.0,
    },
  ]
}