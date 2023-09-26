import styled from '@emotion/styled'

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
  padding-bottom: 20px;
  word-break: break-all;

  // Markdown Style
  line-height: 1.8;
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
  }

  * + h1,
  * + h2,
  * + h3 {
    margin-top: 30px;
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
    border: 1px solid #c2c2c2;
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
    border: 1px solid #c2c2c2;
    padding: 3px;
  }

  // Adjust Quotation Element Style
  blockquote {
    margin: 20px 0;
    padding: 5px 15px;
    border-left: 2px solid #000000;
    font-weight: 800;
  }

  // Adjust List Element Style
  ol,
  ul {
    margin-left: 20px;
  }

  // Adjust Horizontal Rule style
  hr {
    border: 1px solid #000000;
    margin: 100px 0;
  }

  // Adjust Link Element Style
  a {
    color: #554edd;
  }

  *:not(pre) > code {
    color: #eb5a5a;
    background-color: #f7f6f3;
    //background-color: #2d2d2d;
    font-size: 14px;
    padding: 5px;
  }

  // Adjust Code Style
  pre[class*='language-'] {
    margin: 15px 0;
    padding: 15px;
    font-size: 15px;
    //background-color: #f7f6f3;
    background-color: #2d2d2d;

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
    background: #f1f1ef;
    padding: 10px;
    border-radius: 10px;
  }

  ol > li {
    padding: 5px 0;
  }

  // Markdown Responsive Design
  @media (max-width: 768px) {
    width: 100%;
    padding: 20px;
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
  return <MarkdownRenderer dangerouslySetInnerHTML={{ __html: html }} />
}

export default PostContent
