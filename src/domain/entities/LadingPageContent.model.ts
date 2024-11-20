export interface LadingPageContent {
  highlight: Highlight
  latest_news: News[]
  latest_posts: LatestPost[]
}

export interface Media {
  type: string
  url: string
  alt: string
}

export interface Highlight {
  id: string
  title: string
  author: Author
  read_time: number
  media: Media
  published_at: string
  tag: string
  summary: string
}

export interface Author {
  id: string
  name: string
}

export interface News {
  id: string
  title: string
  author: Author2
  read_time: number
  media: Media
  published_at: string
  tag: string
}

export interface Author2 {
  id: string
  name: string
}


export interface LatestPost {
  id: string
  title: string
  author: Author3
  read_time: number
  media: Media
  published_at: string
  tag: string
}

export interface Author3 {
  id: string
  name: string
}