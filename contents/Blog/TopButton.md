---
date: '2024-04-16'
title: '리액트 플로팅 탑 버튼 추가하기'
tag: ['react', 'css']
category: 'Blog'
---

오늘은 내 블로그에 탑버튼 추가를 해보았다. 글이 지금보다 많아진다면, 메인에서 위로 올라가는게 쉽지 않다고 생각해서 추가하게 되었다.
추가한 부분은 메인(글 리스트), 글 보는 곳 두 군데 추가했다.

### 스크롤 이동

```tsx
const handleClickTop = () => {
  window.scroll({
    top: 0,
    behavior: 'smooth',
  })
}
```

맨 위로 이동해야하니 당연히 top은 0으로 <br/>
`behavior = auto | smooth`
auto = 위치로 바로, smooth는 부드럽게 끌어올린다.

[궁금하다면, mdn 참고](https://developer.mozilla.org/ko/docs/Web/API/Window/scroll)

### 버튼 처리 - useState

```tsx
const [isShow, setIsShow] = useState(false)
```

```tsx
isShow && (
  <TopBtn onClick={handleClickTop}>
    <span>
      TOP
      <BsFillTriangleFill />
    </span>
  </TopBtn>
)
```

`&&` 논리연산자를 써서 탑버튼을 보여줬다.

### useEffect

```tsx
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
```

스크롤을 얼만큼 내렸을 때 top 버튼을 보여줄지 정해주면 된다.
나는 500을 내렸을 때 보여주게 했고, 이건 개발자 마음!
단, 렌더링이 되었을 때 스크롤은 맨 위에 위치하는데 바로 탑버튼이 보인다면 맞지 않으니 추가하면 좋다.

스크롤의 위치를 알기 위해 scroll 이벤트를 등록하고, 언마운트 시에 remove 될수 있게 clean-up 함수 추가해줬다.

### 버튼 만들기 - css

```tsx
const TopBtn = styled.button`
  position: fixed;
  right: 0;
  bottom: 5%;
  display: flex;
  column-gap: 10px;
  align-items: center;
  background-color: var(--primary-bg);
  border: none;
  cursor: pointer;

  span {
    font-size: 12px;
    font-weight: bold;
    border-left: 10px solid var(--highlight);
    padding: 10px;
    color: var(--second-color);
  }

  svg {
    width: 8px;
    height: 8px;
    margin-left: 10px;
  }
`
```

span을 사용해서 포스트잇 인덱스처럼 처리했다. <br/>
탑버튼의 css는 여러가지로 만드는사람 취향에 따라하면 된다.

### 전체코드

```tsx
import styled from '@emotion/styled'
import { Fragment, useEffect, useState } from 'react'
import { BsFillTriangleFill } from 'react-icons/bs'

const TopBtn = styled.button`
  position: fixed;
  right: 0;
  bottom: 5%;
  display: flex;
  column-gap: 10px;
  align-items: center;
  background-color: var(--primary-bg);
  border: none;
  cursor: pointer;

  span {
    font-size: 12px;
    font-weight: bold;
    border-left: 10px solid var(--highlight);
    padding: 10px;
    color: var(--second-color);
  }

  svg {
    width: 8px;
    height: 8px;
    margin-left: 10px;
  }
`

const TopButton = () => {
  const [isShow, setIsShow] = useState(false)

  const handleClickTop = () => {
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
        <TopBtn onClick={handleClickTop}>
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
```

언제, 어디에도 탑버튼을 추가할 수 있게 컴포넌트로 분리하기
<br/>불러주면 끝.
