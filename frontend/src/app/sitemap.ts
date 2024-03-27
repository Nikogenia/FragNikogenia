import { MetadataRoute } from 'next'
import { FRONTEND_URL, STATUS_URL } from '@/next.constants.mjs'
 
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: FRONTEND_URL + '/',
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: FRONTEND_URL + '/list',
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: FRONTEND_URL + '/about',
      changeFrequency: 'weekly',
      priority: 0.4,
    },
    {
      url: STATUS_URL,
      changeFrequency: 'weekly',
      priority: 0.4,
    },
    {
      url: FRONTEND_URL + '/imprint',
      changeFrequency: 'weekly',
      priority: 0.0,
    },
    {
      url: FRONTEND_URL + '/privacy',
      changeFrequency: 'weekly',
      priority: 0.0,
    },
    {
      url: FRONTEND_URL + '/contact',
      changeFrequency: 'weekly',
      priority: 0.0,
    },
  ]
}
