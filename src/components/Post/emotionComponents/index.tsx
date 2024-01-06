import styled from '@emotion/styled'
import { Color } from 'assets/styles/color'
import { ThemeProps } from 'types/Post'

export const Tag = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 10px;
  margin: 15px 0px;
  font-size: 12px;
  align-items: center;
  color: ${Color.light.secondColor};
  line-height: 20px;

  span {
    margin-right: 10px;
  }
`

export const TagItem = styled.div<ThemeProps>`
  margin-right: 5px;
  padding: 2px 10px;
  border-radius: 10px;
  font-weight: 700;

  background: ${({ theme }) =>
    theme === 'dark'
      ? Color.dark.secondBackground
      : Color.light.secondBackground};
`
