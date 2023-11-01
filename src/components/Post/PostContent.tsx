import styled from '@emotion/styled'
import { useEffect, useRef, useState } from 'react'
import { IoIosArrowUp, IoIosArrowDown } from 'react-icons/io'

interface PostContentProps {
  html: string
  toc: string
}

const MarkdownRenderer = styled.div`
  // Renderer Style
  display: flex;
  flex-direction: column;
  width: 768px;
  min-height: 550px;
  margin: 0 auto;
  padding: 20px 0px;
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
const TocMarkdown = styled.div<{ mobileTocShow: boolean }>`
  @keyframes fadeInDown {
    from {
      opacity: 0;
      transform: translate3d(0, -100%, 0);
    }
    to {
      opacity: 1;
      transform: translateZ(0);
    }
  }
  animation: fadeInDown 1.5s;

  position: fixed;
  left: calc(50% + 380px);

  height: 100%;
  margin: 20px 0px 0px 20px;
  line-height: 1.5;
  font-size: 0.875rem;
  width: 285px;

  ul {
    top: 10px;
    list-style: none;
    padding-left: 20px;
    color: #757575;
    border-left: 1px solid #eeeeee;
  }

  ul > li {
    padding: 0px 0px 5px;

    &:hover {
      transition: all 0.125s ease-in 0s;
      color: #757575;
      transform: scale(1.05);
    }
  }

  .highlight {
    text-decoration: underline;
    display: block;
    transition: all 0.125s ease-in 0s;
    color: #757575;
    transform: scale(1.05);
  }

  @media (max-width: 1365px) {
    display: ${props => (!props.mobileTocShow ? `none` : `block`)};

    border-top: 1px solid #c2c2c2;
    margin: 10px 0px 0;
    position: inherit;
    width: 100%;
    padding-top: 10px;
    animation: none;

    ul {
      padding-left: 0px;
    }
  }
`

const TocWrapper = styled.div`
  @media (max-width: 1365px) {
    background: #eeeeee;
    width: 768px;
    margin: 20px auto;
    padding: 20px;
    border-radius: 10px;
    color: #757575;
  }
`

const MobileTocWrapper = styled.div`
  display: none;

  @media (max-width: 1365px) {
    display: flex;
  }
`

const PostContent = ({ html, toc }: PostContentProps) => {
  // 마크다운 컨텐츠 컨테이너의 ref
  const ref = useRef<HTMLDivElement>()
  const ref2 = useRef<HTMLDivElement>()

  const [mobileTocShow, setMobileTocShow] = useState(false)

  useEffect(() => {
    const headingElements = ref.current?.querySelectorAll<HTMLElement>('h3')

    ref2.current
      ?.querySelectorAll('.highlight')
      .forEach(element => element.classList.remove('highlight'))

    const observer = new IntersectionObserver(
      () => {
        if (!headingElements) {
          return
        }

        const offset = 120
        const scrollTop = document.documentElement.scrollTop + offset

        let targetHeading
        for (let i = 0; i < headingElements.length; i++) {
          // scrollTop보다 더 아래에 있는 엘리먼트를 발견한 순간,
          if (headingElements[i].offsetTop > scrollTop) {
            // 바로 그 직전의 헤딩 엘리먼트를 targetHeading 변수에 저장한다.
            // 화면 최상단의 표시되는 컨텐츠의 제목이 바로 이 엘리먼트다.
            // 만약 없다면 `null` 을 넣어줘서 제일 위 제목보다도 윗 영역에
            // 스크롤되었다는 것을 표시한다.
            targetHeading = headingElements[i - 1] ?? null
            break
          }
        }

        if (targetHeading === undefined) {
          targetHeading = headingElements[headingElements.length - 1]
        }

        ref2.current
          ?.querySelectorAll('.highlight')
          .forEach(element => element.classList.remove('highlight'))

        // targetHeading와 연결된 목차의 링크를 하이라이팅 해준다.
        if (targetHeading) {
          const targetId = targetHeading.getAttribute('id')
          const linkSelector = `a[href='#${encodeURI(targetId ?? '')}']`

          const linkElement = ref2.current?.querySelector(linkSelector)
          linkElement?.classList.add('highlight')
        }
      },
      {
        rootMargin: '-55px 0px -50% 0px', //옵저버 영역
        threshold: [0, 1.0],
      },
    )

    headingElements?.forEach(element => {
      return observer.observe(element)
    })

    return () => {
      headingElements?.forEach(element => {
        observer.unobserve(element)
      })
    }
  }, [])

  return (
    <div>
      <div>
        <TocWrapper>
          <MobileTocWrapper onClick={() => setMobileTocShow(!mobileTocShow)}>
            <span>{!mobileTocShow ? '목차보기' : '숨기기'}</span>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                marginLeft: '10px',
              }}
            >
              {!mobileTocShow ? <IoIosArrowDown /> : <IoIosArrowUp />}
            </div>
          </MobileTocWrapper>
          <TocMarkdown
            mobileTocShow={mobileTocShow}
            ref={ref2 as React.RefObject<HTMLDivElement>}
            dangerouslySetInnerHTML={{ __html: toc }}
          ></TocMarkdown>
        </TocWrapper>
      </div>
      <MarkdownRenderer
        ref={ref as React.RefObject<HTMLDivElement>}
        dangerouslySetInnerHTML={{ __html: html }}
      />
    </div>
  )
}

export default PostContent
