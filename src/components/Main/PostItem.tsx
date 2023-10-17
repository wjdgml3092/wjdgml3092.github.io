import styled from '@emotion/styled'
import { Category, CategoryItem } from 'components/Post/emotionComponents'
import { Link } from 'gatsby'
import { PostFrontmatterType } from 'types/Post'

type PostItemProps = PostFrontmatterType & { link: string } & {
  excerpt: string
}

const PostItemWrapper = styled(Link)`
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.15);
  transition: 0.3s box-shadow;
  cursor: pointer;
  margin-bottom: 10px;

  &:hover {
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
  }
`

const PostItemContent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 15px;
`

const Title = styled.div`
  display: -webkit-box;
  overflow: hidden;
  margin-bottom: 3px;
  text-overflow: ellipsis;
  white-space: normal;
  overflow-wrap: break-word;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  font-size: 1.25rem;
  font-weight: 700;

  @media (max-width: 480px) {
    font-size: 1.15rem;
  }
`

const Date = styled.div`
  font-size: 14px;
  font-weight: 400;
  opacity: 0.7;
`

const Excerpt = styled.div`
  display: -webkit-box;
  overflow: hidden;
  margin-top: auto;
  text-overflow: ellipsis;
  white-space: normal;
  overflow-wrap: break-word;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  font-size: 16px;
  opacity: 0.8;
`

const PostItem = ({
  title,
  date,
  categories,
  link,
  excerpt,
}: PostItemProps) => {
  return (
    <PostItemWrapper to={link}>
      <PostItemContent>
        <Title>{title}</Title>
        <Date>{date}</Date>
        <Category>
          {categories.map(category => (
            <CategoryItem key={category}>{category}</CategoryItem>
          ))}
        </Category>
        <Excerpt>{excerpt}</Excerpt>
      </PostItemContent>
    </PostItemWrapper>
  )
}

export default PostItem
