import styled from '@emotion/styled'
import { Color } from 'assets/styles/color'
import { useThemeContext } from 'components/Context/ThemeContext'
import { Tag, TagItem } from 'components/Post/emotionComponents'
import { ThemeProps } from 'types/Post'
export type PostHeadInfoProps = {
  title: string
  date: string
  category: string
  tag: string[]
}
const PostHeadInfoWrapper = styled.div<ThemeProps>`
  display: flex;
  flex-direction: column;
  width: 768px;
  height: 100%;
  margin: 0 auto;
  padding: 30px 0;
  color: ${({ theme }) => (theme === 'dark' ? Color.white : Color.black)}
  border-bottom: 1px solid  ${Color.borderGray};

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

const DateTxt = styled.div<ThemeProps>`
  margin-top: 10px;
  color: ${({ theme }) => (theme === 'dark' ? Color.white : Color.lightGray)};
`

const PostHeadInfo = ({ title, date, category, tag }: PostHeadInfoProps) => {
  const { theme } = useThemeContext()

  return (
    <PostHeadInfoWrapper theme={theme}>
      {category}
      <Title>{title}</Title>

      <div>
        <Tag>
          {tag.map(item => (
            <TagItem key={item} theme={theme}>
              {item}
            </TagItem>
          ))}
        </Tag>

        <DateTxt theme={theme}>{date}</DateTxt>
      </div>
    </PostHeadInfoWrapper>
  )
}

export default PostHeadInfo
