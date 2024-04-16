import styled from '@emotion/styled'
import { Fragment, useEffect, useState } from 'react'
import { BsFillTriangleFill } from 'react-icons/bs'

const TopBtn = styled.div`
  position: fixed;
  right: 0;
  bottom: 5%;
  display: flex;
  column-gap: 10px;
  align-items: center;

  font-weight: bold;

  span {
    border-left: 10px solid var(--highlight);
    padding: 10px;
  }

  svg {
    width: 10px;
    height: 10px;
    margin-left: 10px;
  }

  cursor: pointer;
`

const TopButton = () => {
  const [isShow, setIsShow] = useState(false)

  const scrollToTop = () => {
    window.scroll({
      top: 0,
      behavior: 'smooth',
    })
  }

  useEffect(() => {
    const handleTopButton = () => {
      if (window.scrollY > 500) {
        setIsShow(true)
      } else {
        setIsShow(false)
      }
    }

    window.addEventListener('scroll', handleTopButton)
    return () => {
      window.removeEventListener('scroll', handleTopButton)
    }
  }, [])

  return (
    <Fragment>
      {isShow && (
        <TopBtn onClick={scrollToTop}>
          <span>
            TOP
            <BsFillTriangleFill />
          </span>
        </TopBtn>
      )}
    </Fragment>
  )
}

export default TopButton