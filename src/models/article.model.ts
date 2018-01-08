export class Article {
  objectId?: string
  title: string
  url: string
  summary: string
  source: string
  createdAt: string
  updatedAt: string
}

export interface FetchArticleParams {
  skip: number
  limit: number
}

export interface FetchArticlesResp {
  results: Article[]
  count: number
}

