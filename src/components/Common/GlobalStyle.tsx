import { Global, css } from '@emotion/react'

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

  a,
  a:hover {
    color: inherit;
    text-decoration: none;
    cursor: pointer;
  }

  main {
    min-height: calc(100vh - 100px);
  }
`

const GlobalStyle = () => {
  return <Global styles={defaultStyle} />
}

export default GlobalStyle
