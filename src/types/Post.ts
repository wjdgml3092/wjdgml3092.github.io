export type PostFrontmatterType = {
  title: string
  date: string
  categories: string[]
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
