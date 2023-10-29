---
date: '2023-10-29'
title: '[Error] window is not available during server-side rendering 해결법'
tag: ['Build_Error']
category: 'Blog'
---

### 개요

블로그 개발을 하다가 글을 본 후 리스트로 돌아갔을 때 선택했던 카테고리와 태그로 링크를 세팅해서 보여주고 싶어 sessionStorage를 사용했다. <br/>
`gatsby develop`로 개발을 할 때는 문제가 없었지만, `yarn deploy`를 하니 아래와 같은 에러가 떴다. <br/>

<div style="text-align: center"> 
<span style="color: #eb5a5a;
    background-color: #f7f6f3;
    font-size: 14px;
    padding: 5px;
    border-radius: 0.3em;
    font-family: Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace;" >
    window is not available during server-side rendering </span> 
</div>
해당 에러의 원인과 어떻게 해결할 수 있는지에 대해 작성한 글이다.

### 원인

[공식문서](https://www.gatsbyjs.com/docs/debugging-html-builds/)와 서치를 통해 원인을 파악했다.

Gatsby는 React의 SSR 기능을 활용하여 빌드 프로세스 중에 정적 파일을 생성하는 SSG(Static Site Generate)다.

Gatsby는 애플리케이션을 빠르게 개발하기 위해 개발 환경에서 작업할 때 브라우저에서 실행되어 실시간 프리뷰와 같은 기능을 제공하여 빠른 개발이 가능하다. 그러나 <u>빌드 프로세스 중에 Node.js 환경에서 작동하여 최적화된 정적 파일을 생성하고 데이터를 가져와 처리한다.</u><br/>

> 개발 중에는 CSR과 동일한 환경에서 동작하기 때문에 window 객체가 존재하지만 빌드를 할 때는 <br/> Node 환경에서 동작하여 window 객체가 존재하지 않는다.

### 해결

1. typeof <br/>

Gatsby가 빌드하는 동안 코드가 실행되지 않도록 window 객체가 정의되어 있는지 확인하는 것이다.

```tsx
if (typeof window !== 'undefined') {
  historyLink = sessionStorage.getItem('selected_link')
}
```

위 코드는 sessionStorage를 사용하는 내 코드 일부다. if문으로 한번 감싸줘서 체크한다.

<br/>

2. useEffect <br/>

useEffect는 렌더링 시에 실행되기 때문에, 초기 서버 빌드 시 useEffect 내부 코드는 실행되지 않는다. useEffect 내부로 에러가 발생하는 코드를 옮겨주면 해결된다.

```tsx
useEffect(() => {
  if (typeof window !== 'undefined') {
    historyLink = sessionStorage.getItem('selected_link')
  }
}, [])
```

### 마무리

Gatsby가 SSG인 것을 알았지만 개발할 때는 평소 사용하던대로 스토리지를 사용하다가 빌드 시 에러가 났을 때는 당황했다. 생각보다는 단순한 방법으로 잘 해결할 수 있어서 다행이다. 오늘 만난 에러로 하나 더 깨닫고 간다 !🫡
