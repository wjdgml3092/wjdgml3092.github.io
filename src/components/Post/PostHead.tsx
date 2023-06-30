import styled from '@emotion/styled'
import PostHeadInfo, { PostHeadInfoProps } from 'components/Post/PostHeadInfo'

type PostHeadProps = PostHeadInfoProps

const PostHeadWrapper = styled.div`
  position: relative;
  width: 100%;
`

const PostHead = ({ title, date, categories }: PostHeadProps) => {
  return (
    <PostHeadWrapper>
      <PostHeadInfo title={title} date={date} categories={categories} />
    </PostHeadWrapper>
  )
}

export default PostHead
