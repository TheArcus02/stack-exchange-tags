interface Tag {
  has_synonyms: boolean
  is_moderator_only: boolean
  is_required: boolean
  count: number
  name: string
  collectives?: Collective[]
}

interface Collective {
  tags: string[]
  external_links: ExternalLink[]
  description: string
  link: string
  name: string
  slug: string
}

interface ExternalLink {
  type: string
  link: string
}

interface StackExchangeResponse {
  items: Tag[]
  has_more: boolean
  quota_max: number
  quota_remaining: number
  page: number
  page_size: number
  total: number
}
