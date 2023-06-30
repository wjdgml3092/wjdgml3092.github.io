import styled from '@emotion/styled'
import { Category, CategoryItem } from 'components/Post/emotionComponents'
export type PostHeadInfoProps = {
  title: string
  date: string
  categories: string[]
}
const PostHeadInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 768px;
  height: 100%;
  margin: 0 auto;
  padding: 30px 0;
  color: #000;
  @media (max-width: 768px) {
    width: 100%;
    padding: 40px 20px;
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
  color: #4c4c4c;
`

const PostHeadInfo = ({ title, date, categories }: PostHeadInfoProps) => {
  return (
    <PostHeadInfoWrapper>
      <Title>{title}</Title>

      <div>
        <Category>
          {categories.map(category => (
            <CategoryItem key={category}>{category}</CategoryItem>
          ))}
        </Category>

        <DateTxt>{date}</DateTxt>
      </div>
    </PostHeadInfoWrapper>
  )
}

export default PostHeadInfo
