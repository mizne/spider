export class News {
  id?: string
  title: string
  url: string
  summary: string
  source: string
  createdAt: string
}

export interface FetchNewsParams {
  pageIndex: number
  pageSize: number
}
