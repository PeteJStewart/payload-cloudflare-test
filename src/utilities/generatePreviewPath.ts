import { PayloadRequest, CollectionSlug } from 'payload'

const collectionPrefixMap: Partial<Record<CollectionSlug, string>> = {
  articles: '/articles',
  pages: '',
}

type Props = {
  collection: keyof typeof collectionPrefixMap
  slug: string
  req: PayloadRequest
}

export const generatePreviewPath = ({ collection, slug }: Props) => {
  const encodedParams = new URLSearchParams({
    livePreview: 'true',
    previewSecret: process.env.PREVIEW_SECRET || '',
  })

  const url = `http://localhost:5173${collectionPrefixMap[collection]}/${slug}/preview?${encodedParams.toString()}`

  return url
}
