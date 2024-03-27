import { MetadataRoute } from 'next'
import { FRONTEND_URL } from "@/next.constants.mjs"
 
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/'
    },
    sitemap: FRONTEND_URL + '/sitemap.xml',
  }
}