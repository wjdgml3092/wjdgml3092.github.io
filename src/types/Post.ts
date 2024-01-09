import { ReactNode } from 'react'

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

export type ItemProps = {
  //카테고리, 태그 아이템 css props
  active: boolean
}

export type GatsbyLinkProps = {
  children: ReactNode
  className?: string
  to: string
} & ItemProps
