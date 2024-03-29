import styled from '@emotion/styled'
import { useEffect, useState } from 'react'
import { IoIosArrowUp, IoIosArrowDown } from 'react-icons/io'

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

  width: 285px;
  height: 100%;
  margin: 20px 0px 0px 20px;
  line-height: 1.5;
  font-size: 0.875rem;
  color: var(--toc-color);

  ul {
    top: 10px;
    list-style: none;
    padding-left: 20px;
    border-left: 1px solid var(--gray0);
  }

  ul > li {
    padding: 0px 0px 5px;
    cursor: pointer;

    &:hover {
      transition: all 0.125s ease-in 0s;
      transform: scale(1.05);
    }
  }

  .selectedIndex {
    text-decoration: underline;
    display: block;
    transition: all 0.125s ease-in 0s;
    transform: scale(1.05);
  }

  a {
    width: 100%;
    display: block;
  }

  @media (max-width: 1365px) {
    display: ${props => (!props.mobileTocShow ? `none` : `block`)};

    border-top: 1px solid var(--gray2);
    margin: 10px 0px 0;
    position: inherit;
    width: 100%;
    padding-top: 10px;
    animation: none;

    ul {
      padding-left: 0px;
      border-left: none;
    }

    ul > li {
      padding: 0px 0px 5px;
      cursor: pointer;

      &:hover {
        transition: none;
        transform: none;
        text-decoration: underline;
      }
    }

    .selectedIndex {
      // text-decoration:
      transition: none;
      transform: none;
      // background:
    }
  }
`

const TocTotalWrapper = styled.div`
  @media (max-width: 1365px) {
    width: 100%;
    padding: 15px;
  }
`

const TocWrapper = styled.div`
  @media (max-width: 1365px) {
    font-size: 14px;
    background: var(--second-bg);
    width: 768px;
    margin: 20px auto;
    padding: 20px;
    border-radius: 10px;

    div {
      background: inherit;
    }
  }

  @media (max-width: 480px) {
    width: 100%;
    margin: 0 auto;
  }
`

const MobileTocWrapper = styled.div`
  display: none;
  cursor: pointer;

  @media (max-width: 1365px) {
    display: flex;

    span {
      width: 60px;
      color: var(--toc-color);
    }
  }
`

const MobileTocArrow = styled.div`
  display: flex;
  align-items: center;
  margin-left: 10px;
  color: var(--toc-color);
`

const Toc = () => {
  const [currentId, setCurrentId] = useState('')
  const [headingEls, setHeadingEls] = useState<Element[]>([])

  const [mobileTocShow, setMobileTocShow] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const { id } = entry.target
            setCurrentId(id)
          }
        })
      },
      {
        rootMargin: '0px 0px -80% 0px', //옵저버 영역
        threshold: 0,
      },
    )

    const headingEleArr = Array.from(document.querySelectorAll('h3'))

    setHeadingEls(headingEleArr)

    headingEleArr.forEach(heading => {
      observer.observe(heading)
    })

    return () => {
      headingEleArr.forEach(heading => {
        observer.unobserve(heading)
      })
    }
  }, [])

  return (
    <TocTotalWrapper>
      <TocWrapper>
        <MobileTocWrapper onClick={() => setMobileTocShow(!mobileTocShow)}>
          <span>{!mobileTocShow ? '목차보기' : '숨기기'}</span>
          <MobileTocArrow>
            {!mobileTocShow ? <IoIosArrowDown /> : <IoIosArrowUp />}
          </MobileTocArrow>
        </MobileTocWrapper>
        <TocMarkdown mobileTocShow={mobileTocShow}>
          <ul>
            {headingEls.map((heading, idx) => (
              <li
                key={idx}
                className={currentId === heading.id ? 'selectedIndex' : ''}
              >
                <a
                  href={`#${heading.id}`}
                  onClick={() => {
                    setCurrentId(heading.id)
                  }}
                >
                  {heading.textContent}
                </a>
              </li>
            ))}
          </ul>
        </TocMarkdown>
      </TocWrapper>
    </TocTotalWrapper>
  )
}

export default Toc
