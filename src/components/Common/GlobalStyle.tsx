import { Global, css } from '@emotion/react'
import { useThemeContext } from 'components/Context/ThemeContext'

import { Color } from 'assets/styles/color'

const defaultStyle = css`
  @font-face {
    font-family: 'Pretendard-Regular';
    src: url('https://cdn.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-Regular.woff')
      format('woff');
    font-weight: 400;
    font-style: normal;
  }

  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: Pretendard-Regular, serif;
  }

  ul,
  li,
  div,
  span,
  svg {
    background: inherit;
  }

  a,
  a:hover {
    background: inherit;
    color: inherit;
    text-decoration: none;
    cursor: pointer;
  }

  main {
    min-height: calc(100vh - 100px);
  }
`

const GlobalStyle = () => {
  const { theme } = useThemeContext()

  const colorTheme = theme === 'dark' ? Color.dark : Color.light

  return (
    <Global
      styles={[
        defaultStyle,
        css`
          * {
            color: ${colorTheme.defaultColor};
            background: ${colorTheme.background};
          }

          .highlight {
            background-color: ${colorTheme.highlight};
          }

          // div {
          //   color: #fff;
          // }
        `,
      ]}
    />
  )
}

export default GlobalStyle
