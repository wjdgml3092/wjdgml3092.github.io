import styled from '@emotion/styled'
import { Tag, TagItem } from 'components/Post/emotionComponents'
import { Link } from 'gatsby'
import { PostFrontmatterType } from 'types/Post'

type PostItemProps = PostFrontmatterType & { link: string } & {
  excerpt: string
} & { selectedLink: string }

const PostItemWrapper = styled(Link)`
  display: flex;
  flex-direction: column;
  border-bottom: 1px solid var(--gray2);
  transition: 0.3s box-shadow;
  cursor: pointer;
  margin-bottom: 10px;

  &:hover {
    div:nth-of-type(1) span {
      background: linear-gradient(
        180deg,
        rgba(255, 255, 255, 0) 70%,
        var(--highlight) 50%
      );
    }
  }
`

const PostItemContent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 15px 0px;
`

const TitleWrapper = styled.div`
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
  margin-bottom: 10px;
`

const PostItem = ({
  title,
  date,
  category,
  tag,
  link,
  excerpt,
  selectedLink,
}: PostItemProps) => {
  return (
    <PostItemWrapper
      to={link}
      onClick={() => {
        sessionStorage.setItem('selected_link', selectedLink)
      }}
    >
      <PostItemContent>
        <TitleWrapper>
          <span>{title}</span>
        </TitleWrapper>
        <Date>{date}</Date>
        <Tag>
          <span>{category}</span>
          {tag.map(item => (
            <TagItem key={item}>{item}</TagItem>
          ))}
        </Tag>
        <Excerpt>{excerpt}</Excerpt>
      </PostItemContent>
    </PostItemWrapper>
  )
}

export default PostItem
