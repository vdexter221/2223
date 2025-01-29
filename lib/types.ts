export interface TableOfContentsItem {
  id: string
  title: string
}

export interface Author {
  name: string
  role: string
  avatar: string
}

export interface BlogPost {
  id: number
  title: string
  content: string
  date: string
  readTime: string
  slug: string
  author: Author
  tableOfContents: TableOfContentsItem[]
}

