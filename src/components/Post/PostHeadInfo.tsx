import styled from '@emotion/styled'
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

const Category = styled.div`
  font-size: 14px;
  color: #747474;
`
const DateTxt = styled.div`
  margin-top: 10px;
  color: #4c4c4c;
`
const PostHeadInfo = ({ title, date, categories }: PostHeadInfoProps) => {
  return (
    <PostHeadInfoWrapper>
      <Category>{categories.join(' / ')}</Category>
      <Title>{title}</Title>

      <DateTxt>{date}</DateTxt>
    </PostHeadInfoWrapper>
  )
}

export default PostHeadInfo
