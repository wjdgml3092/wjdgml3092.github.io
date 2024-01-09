import styled from '@emotion/styled'
import Toc from './Toc'

interface PostContentProps {
  html: string
}

const MarkdownRenderer = styled.div`
  // Renderer Style
  display: flex;
  flex-direction: column;
  width: 768px;
  min-height: 550px;
  margin: 0 auto;
  padding: 0px 0px 20px;
  word-break: break-all;

  // Markdown Style
  line-height: 2;
  font-size: 16px;
  font-weight: 400;

  p {
    padding: 5px 0;
  }

  // Adjust Heading Element Style
  h1,
  h2,
  h3 {
    font-weight: 800;
    margin-bottom: 10px;
    padding-top: 55px;
  }

  h3:nth-of-type(1) {
    padding-top: 70px;
  }

  * + h1,
  * + h2,
  * + h3 {
    margin-top: 30px;
    scroll-margin-top: 60px;
  }

  hr + h1,
  hr + h2,
  hr + h3 {
    margin-top: 0;
  }

  h1 {
    font-size: 30px;
  }

  h2 {
    font-size: 25px;
  }

  h3 {
    font-size: 20px;
  }

  table {
    border: 1px solid var(--gray2);
    border-collapse: collapse;
    text-align: center;
    margin-top: 10px;
  }

  tr td:first-of-type {
    text-align: left;
    padding-left: 5px;
  }

  tr,
  td,
  th {
    border: 1px solid var(--gray2);
    padding: 3px;
  }

  // Adjust Quotation Element Style
  blockquote {
    margin: 10px 0;
    padding: 5px 10px;
    border-left: 2px solid var(--gray3);
    font-weight: 800;
  }

  // Adjust List Element Style
  ol,
  ul {
    margin-left: 20px;
  }

  // Adjust Horizontal Rule style
  hr {
    border: 1px solid var(--black);
    margin: 100px 0;
  }

  // Adjust Link Element Style
  a {
    color: #554edd;
  }

  *:not(pre) > code {
    color: var(--code-color);
    background-color: var(--code-bg);

    font-size: 14px;
    padding: 5px;
  }

  // Adjust Code Style
  pre[class*='language-'] {
    margin: 15px 0;
    padding: 15px;
    font-size: 15px;
    background-color: var(--code-default);

    ::-webkit-scrollbar-thumb {
      background: rgba(255, 255, 255, 0.5);
      border-radius: 3px;
    }
  }

  code[class*='language-'],
  pre[class*='language-'] {
    tab-size: 2;
  }

  aside {
    border: 3px solid #f1f1ef;
    margin-top: 10px;
    padding: 10px;
    border-radius: 10px;
  }

  ol > li {
    padding: 5px 0;
  }

  // Markdown Responsive Design
  @media (max-width: 768px) {
    width: 100%;
    padding: 15px;
    line-height: 1.6;
    font-size: 14px;

    h1 {
      font-size: 23px;
    }

    h2 {
      font-size: 20px;
    }

    h3 {
      font-size: 17px;
    }

    h3:nth-of-type(1) {
      padding-top: 0px;
    }

    img {
      width: 100%;
    }

    hr {
      margin: 50px 0;
    }

    *:not(pre) > code {
      font-size: 13px;
    }
  }
`

const PostContent = ({ html }: PostContentProps) => {
  return (
    <div>
      <Toc />
      <MarkdownRenderer dangerouslySetInnerHTML={{ __html: html }} />
    </div>
  )
}

export default PostContent
