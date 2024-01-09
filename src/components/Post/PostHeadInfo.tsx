import styled from '@emotion/styled'
import { Tag, TagItem } from 'components/Post/emotionComponents'

export type PostHeadInfoProps = {
  title: string
  date: string
  category: string
  tag: string[]
}
const PostHeadInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 768px;
  height: 100%;
  margin: 0 auto;
  padding: 30px 0;
  border-bottom: 1px solid var(--gray2);

  @media (max-width: 768px) {
    width: 100%;
    padding: 40px 15px;
    border-bottom: none;
  }
`

const Title = styled.div`
  display: -webkit-box;
  overflow: hidden;
  overflow-wrap: break-word;
  margin-top: 10px;
  text-overflow: ellipsis;
  white-space: normal;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  font-size: 45px;
  font-weight: 700;

  @media (max-width: 768px) {
    font-size: 30px;
  }
`

const DateTxt = styled.div`
  margin-top: 10px;
  color: var(--date-color);
`

const PostHeadInfo = ({ title, date, category, tag }: PostHeadInfoProps) => {
  return (
    <PostHeadInfoWrapper>
      {category}
      <Title>{title}</Title>

      <div>
        <Tag>
          {tag.map(item => (
            <TagItem key={item}>{item}</TagItem>
          ))}
        </Tag>

        <DateTxt>{date}</DateTxt>
      </div>
    </PostHeadInfoWrapper>
  )
}

export default PostHeadInfo
