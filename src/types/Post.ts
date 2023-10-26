export type PostFrontmatterType = {
  title: string
  date: string
  tag: string[]
  category: string
}

export type PostListItemType = {
  node: {
    excerpt: string
    id: string
    fields: {
      slug: string
    }
    frontmatter: PostFrontmatterType
  }
}
