import styled from '@emotion/styled'
import PostItem from 'components/Main/PostItem'
import { PostListItemType } from 'types/Post'
import useInfiniteScroll, {
  useInfiniteScrollType,
} from 'hooks/useInfiniteScroll'
import { useState } from 'react'

type PostListProps = {
  selectedCategory: string
  posts: PostListItemType[]
}

const PostListWrapper = styled.div`
  width: 768px;
  margin: 0 auto;
  padding: 30px 0 100px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    width: 100%;
    padding: 30px 15px;
  }
`
const PostList = ({ selectedCategory, posts }: PostListProps) => {
  const { containerRef, postList }: useInfiniteScrollType = useInfiniteScroll(
    selectedCategory,
    posts,
  )

  return (
    <PostListWrapper ref={containerRef}>
      {postList.map(
        ({
          node: {
            excerpt,
            id,
            fields: { slug },
            frontmatter,
          },
        }: PostListItemType) => (
          <PostItem excerpt={excerpt} {...frontmatter} link={slug} key={id} />
        ),
      )}
    </PostListWrapper>
  )
}

export default PostList
