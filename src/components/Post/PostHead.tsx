import styled from '@emotion/styled'
import PostHeadInfo, { PostHeadInfoProps } from 'components/Post/PostHeadInfo'

type PostHeadProps = PostHeadInfoProps

const PostHeadWrapper = styled.div`
  position: relative;
  width: 100%;

  padding-top: 55px;
`

const PostHead = ({ title, date, category, tag }: PostHeadProps) => {
  return (
    <PostHeadWrapper>
      <PostHeadInfo title={title} date={date} category={category} tag={tag} />
    </PostHeadWrapper>
  )
}

export default PostHead
