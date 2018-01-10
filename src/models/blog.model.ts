export class Blog {
  objectId?: string
  title: string
  url: string
  summary: string
  source: string
  createdAt: string
  updatedAt: string
  releaseAt: string
}

export interface FetchBlogParams {
  skip: number
  limit: number
}

export interface FetchBlogsResp {
  results: Blog[]
  count: number
}

