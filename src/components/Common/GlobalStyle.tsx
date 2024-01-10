import { Global, css } from '@emotion/react'

const defaultStyle = css`
  @font-face {
    font-family: 'Pretendard-Regular';
    src: url('https://cdn.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-Regular.woff')
      format('woff');
    font-weight: 400;
    font-style: normal;
  }

  :root {
    --white: #ffffff;
    --black: #000000;
    --gray0: #eeeeee;
    --gray1: #d9d9d9;
    --gray2: #c2c2c2;
    --gray3: #757575;
    --gray4: #4c4c4c;
    --yellow: #f2cb61;

    --code-default: #2d2d2d;
  }

  [data-theme='dark'] {
    --primary-bg: #0e1117;
    --second-bg: #797979;

    --second-color: var(--white);
    --highlight: #cc99cd;
    --date-color: var(--white);

    --code-color: #cc99cd;
    --code-bg: #2d2d2d;

    --tag-selected-bg: #cc99cd;
    --tag-selected-color: var(--white);
    --tag-hover-bg: #4b4e53;
    --tag-hover-color: var(--white);
    --tag-color: var(--white);

    --toc-color: var(--white);

    background: var(--primary-bg);
    color: var(--white);

    .highlight {
      background: #cc99cd;
    }

    .darkIcon {
      display: block;
    }
  }

  [data-theme='light'] {
    --primary-bg: var(--white);
    --second-bg: var(--gray0);

    --second-color: var(--gray3);
    --highlight: #ffcccc;
    --date-color: var(--gray4);

    --code-color: #eb5a5a;
    --code-bg: #f7f6f3;

    --tag-selected-bg: var(--highlight);
    --tag-selected-color: var(--black);
    --tag-hover-bg: var(--gray3);
    --tag-hover-color: var(--gray0);
    --tag-color: var(--gray3);

    --toc-color: var(--gray3);

    background: var(--white);
    color: inherit;

    .highlight {
      background: var(--highlight);
    }

    .lightIcon {
      display: block;
    }
  }

  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: Pretendard-Regular, serif;

    .lightIcon,
    .darkIcon {
      display: none;
    }

    .clickIconAction {
      @keyframes rotateIcon {
        from {
          opacity: 1;
          transform: rotate(0deg);
        }
        to {
          opacity: 1;
          transform: rotate(720deg);
        }
      }

      padding: 5px;

      &:hover {
        border-radius: 6px;
      }

      &:active {
        animation: rotateIcon 1s linear forwards;
      }
    }
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
