import type { CollectionConfig } from 'payload'

export const Users: CollectionConfig = {
  slug: 'users',
  admin: {
    useAsTitle: 'email',
  },
  auth: {
    cookies: {
      domain: process.env.ROOT_DOMAIN ? '.' + process.env.ROOT_DOMAIN : undefined,
      sameSite: 'None',
    },
  },
  fields: [
    // Email added by default
    // Add more fields as needed
  ],
}
