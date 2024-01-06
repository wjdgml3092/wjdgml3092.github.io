---
date: '2023-11-10'
title: 'React-Router'
tag: ['React', 'React-Router']
category: 'TIL'
---

### Routing?

라우팅은 기본적으로 url 입력 시 네트워크상에 요청하고 url에 해당하는 페이지를 받아와서 뿌려주는 것을 의미한다.

### React-Router 사용하는 이유(feat. CSR)

> anchor 태그가 있는데 라우터를 정의하는 이유는?

<span class='highlight'>SPA 사용자 경험 향상의 목적이다. </span>
<br/>
anchor 태그 사용 시 페이지 전체가 새로 로딩 되면서 <b>화면이 깜빡임이 발생하여</b> 사용자 경험을 떨어뜨린다.
<br/>
반면, 리액트 라우터에서는 새로운 경로 입력 시 서버에게 요청이 아닌 어플리케이션 내에서 <b>필요한 부분만 변경하면서 보여주고,</b> 필요한 데이터가 있을 때 동적으로 서버에게 요청한다 (페이지는 유지하되 필요한 부분만 해당 컴포넌트를 보여주고 하는 것) → <b>CSR(Client Side Routing)이 가능하다 </b>

<br/>

> 사용하는 이유는?

기본적으로 리액트는 <b>SPA(Single Page Application)</b>이다. 모든 컴포넌트의 변화가 하나의 페이지 안에서 일어난다. <br/>
다른 URL로 이동하면 페이지 전체가 교체되는 것이 아니라 한 페이지 내부에서 컴포넌트의 변화만 일어날 뿐이다. → SPA 하나의 url 하나의 !

이런 환경에서 <u>사용자는 원하는 페이지를 즐겨찾기 할 수도 없고, 히스토리가 생기지도 않아서 뒤로가기가 불가능하다. 또한 새로고침 시 사용자가 보던 페이지가 아닌 처음 페이지로 렌더링된다.</u>

<span class='highlight'>🔥 이러한 단점들이 리액트 라우터를 사용하면 보완될 수 있다. </span>

### Install & Using

- Install <br/>

  - React로 생성된 SPA 내부에서 페이지 이동이 가능하도록 만들어주는 라이브러리 설치
    <br>
    `npm install react-router-dom`

- Using <br/>

  - typeScript 적용, 함수형 컴포넌트로 작성
  - v6 기준

  ```javaScript
    import { BrowserRouter, Route, Routes } from 'react-router-dom'
    import Video from './pages/Video'
    import Home from './pages/Home'

    const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/video" element={<Video />}/>
            </Routes>
        </BrowserRouter>
    )
    }

    export default App
  ```

  1. <b>BrowserRouter</b>

  - history API를 활용해 history 객체를 생성한다.
  - history API는 <u>내부적으로 사용자가 방문한 url 기록들을 저장</u>한다.
  - <span class='highlight'>라우팅을 진행할 컴포넌트 상위에 BrowserRouter 컴포넌트를 생성하고 감싸주어야 한다.</span>

  2. <b>Routes</b>

  - <span class='highlight'>모든 Route의 상위 경로에 존재해야 한다.</span>
  - location 변경 시 하위에 있는 모든 Route를 조회해 현재 location과 맞는 Route를 찾아준다.

  3. <b>Route</b>

  - 현재 브라우저의 location(window.href.location 정보를 가져온다) 상태에 따라 맞는 element를 렌더링한다.
  - <b>props</b> : `path`(string, url 값), `element`(component)

### 페이지 이동

1. Link

   - <span class='highlight'>라우터 내에서 직접적으로 페이지 이동을 하고자 할 때 사용되는 컴포넌트.</span>

   ```javaScript
   import { Link } from 'react-router-dom'

   const Navbar = () => {
        return (
            <nav>
                <Link to='/'>Home</Link>
                <Link to='/video'>Video</Link>
            </nav>
        )
   }

   export default Navbar

   ```

2. useNavigate()

   - <span class='highlight'>일반 article 요소를 클릭해서 이동할 때 사용하는 훅.</span>

   ```javaScript
   import { useState } from 'react'
   import { useLocation, useNavigate } from 'react-router-dom'

   const Video = () => {
    const navigate = useNavigate()

    const handleChange = () => {
            navigate(`/`)
    }

    return (
        <div>
            <button onClick={handleClick}>go to home </button>
        </div>
    )
   }

   export default Video
   ```

   1. `navigate(to, { replace: true })`
      - default값은 false
      - true로 설정한다면 이동 후 뒤로가기가 불가능해진다.
   2. `navigate(to, { state })`
      - state 전달

### 중첩 라우팅

1. Outlet 컴포넌트 사용

   - 라우터 정의 시 <span class='highlight'>자식 태그로 중첩하는 라우터를 명시, 중첩 라우터에서 Outlet 컴포넌트 사용</span>

   ```javaScript
   import { BrowserRouter, Route, Routes } from 'react-router-dom'
   import VideoDetail from './pages/VideoDetail'
   import Video from './pages/Video'

   const App = () => {
        return (
            <BrowserRouter>
                <Routes>
                    <Route path='/video' element={<Video />}>
                        <Route path=':videoId' element={<VideoDetail />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        )
   }

   export default App

   //----------------//
   //Video.tsx
   import { Link, Outlet } from 'react-router-dom'

   const Video = () => {
       return (
           <div>
               <h1>This is Video List</h1>
               <ul>
                   <li>
                       <Link to='1'>Video #1</Link>
                   </li>
                   <li>
                       <Link to='2'>Video #2</Link>
                   </li>
                   <li>
                       <Link to='3'>Video #3</Link>
                   </li>
                   <li>
                       <Link to='4'>Video #4</Link>
                   </li>
               </ul>

               <Outlet />
           </div>
       )
   }

   export default Video
   ```

2. Outlet컴포넌트 사용하지 않고, 바로 작성

- 라우터에서 <span class='highlight'> 중첩 라우팅을 하고자 하는 주소에 \* 을 추가해주어 중첩 라우팅이 발생할 주소임을 명시</span>한다.

  ```javaScript
  import { BrowserRouter, Route, Routes } from 'react-router-dom'
  import Video from './pages/Video'
  import Home from './pages/Home'

  const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/video/*' element={<Video />} />
            </Routes>
        </BrowserRouter>
    )
  }

  export default App

  //----------------//
  //Video.tsx
  import { Link, Route, Routes } from 'react-router-dom'
  import VideoDetail from './VideoDetail'

  const Video = () => {
    return (
        <div>
            <h1>This is Video List</h1>
            <ul>
                <li>
                    <Link to='1'>Video #1</Link>
                </li>
                <li>
                    <Link to='2'>Video #2</Link>
                </li>
                <li>
                    <Link to='3'>Video #3</Link>
                </li>
                <li>
                    <Link to='4'>Video #4</Link>
                </li>
            </ul>

            <Routes>
                <Route path=':videoId' element={<VideoDetail />} />
            </Routes>
        </div>
    )
  }

  export default Video


  ```

### Params

> `http://localhost:3000/video/4` → 4를 얻어올려면?

`useParams()` 훅을 이용해서 경로에 있는 파라미터 얻어오면 된다

```javaScript
import { useParams } from 'react-router-dom'

const VideoDetail = () => {
  const { videoId } = useParams()

  return <div>detail : {videoId}</div>
}

export default VideoDetail
```

<br/>

[공식문서](!https://reactrouter.com/en/main/route/loader)
