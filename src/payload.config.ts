// storage-adapter-import-placeholder
import { sqliteAdapter } from '@payloadcms/db-sqlite'
import { payloadCloudPlugin } from '@payloadcms/payload-cloud'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import path from 'path'
import { buildConfig } from 'payload'
import { fileURLToPath } from 'url'
// import sharp from 'sharp'
import { s3Storage } from '@payloadcms/storage-s3'

import { Users } from './collections/Users'
import { Media } from './collections/Media'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

export default buildConfig({
  admin: {
    user: Users.slug,
    importMap: {
      baseDir: path.resolve(dirname),
    },
  },
  collections: [Users, Media],
  editor: lexicalEditor(),
  secret: process.env.PAYLOAD_SECRET || '',
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },
  db: sqliteAdapter({
    client: {
      url: process.env.DATABASE_URI || '',
      authToken: process.env.DATABASE_AUTH_TOKEN,
    },
    idType: 'uuid',
  }),
  localization: {
    locales: [
      {
        code: 'en-GB',
        label: 'English (GB)',
      },
      {
        code: 'de-CH',
        label: 'German (CH)',
      },
    ],
    defaultLocale: 'en', // required
  },
  //sharp,
  plugins: [
    payloadCloudPlugin(),
    s3Storage({
      bucket: process.env.S3_BUCKET!,
      clientUploads: true,
      collections: {
        media: true,
      },
      config: {
        endpoint: process.env.S3_ENDPOINT,
        region: process.env.S3_REGION!,
        forcePathStyle: true,
        credentials: {
          accessKeyId: process.env.S3_ACCESS_KEY_ID!,
          secretAccessKey: process.env.S3_SECRET_ACCESS_KEY!,
        },
      },
    }),
    // storage-adapter-placeholder
  ],
})
