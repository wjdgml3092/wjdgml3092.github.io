---
date: '2024-01-11'
title: 'gatsby블로그에 다크모드 구현 시 화면 깜빡임 해결하기'
tag: ['darkMode']
category: 'Blog'
---

### 개요

이번 블로그에 다크 모드를 처음 도입해보게 되었다. 쉽게 생각했던 것과 다르게 과정 중 SSR환경으로 화면 깜빡임 해결에 애를 먹엇다. 그래서 과정 정리하면서 화면 깜빡임은 어떻게 해결했는지 작성하고자한다. <br/>
현재 블로그 기술 스택이다. 혹시 참고하실 분들은 아래 스택 확인해보세요 :) <br/>
구현은 `Gatsby.js` <br/>
스타일은 `Emotion`

### 깜빡임 원인

develop vs build의 차이점을 먼저 알아보자.

[gatsby docs](https://www.gatsbyjs.com/docs/conceptual/overview-of-the-gatsby-build-process/#build-time-vs-runtime) 요약하자면,

> runtime은 클릭을 통해 상호작용하는 웹브라우저에서 발생하는 프로세스라고 할 수 있다. 자바스크립트 코드는 브라우저와 상호작용할 수 있고, 브라우저가 제공하는 API를 이용할 수 있다.
> gatsby는 <span class='highlight'>초기 HTML을 로드하고, 브라우저에서 기본적으로 자바스크립트가 운영되는 런타임을 만든다.</span>
> 반면에 build time은 서버 프로세스를 사용하여 후에 <span class='highlight'>웹브라우저에 전달되는 파일로 사이트를 컴파일하는 과정을 말한다.</span> 그래서 window와 같은 브라우저 API를 이용할 수 없다.

develop 모드에서 다크모드를 개발할 때는 브라우저 API에 접근할 수 있으니, 깜빡임 없이 구현이 된 것 같다가 <br/> <span class='highlight'>배포 시 </span> 첫 페이지에서 테마 초기값으로 렌더링이 되었다가 클릭하여 상호작용(다음페이지 이동 등)이 일어나면서 localStorage에 저장된 값으로 테마를 적용시키게 된다.

<b>DOM이 구성 되기 전 테마에 대한 값을 읽어와 세팅해주는 코드가 필요하다.</b>

### 깜빡임 해결

gatsby에서는 `gatsby-ssr`파일에서 gatsby에서 제공하는 `onRenderBody API`를 이용하여 body 바로 다음 script를 붙여줘서 body 내부 엘리먼트들이 페인팅 되기 전에 실행하도록 한다.
이렇게 하면 스크립트는 DOM 파싱을 막아 스크립트가 실행된 후 페인팅 되는 것이 보장된다.

`onRenderBody API`는 `setPreBodyComponents`함수를 제공하는데 이 함수를 통해 body 바로 밑에 스크립트를 넣어줄 수 있다.

```tsx
const scriptElement = [
  createElement('script', {
    dangerouslySetInnerHTML: {
      __html: `
      (() => {
        try {
          preferredTheme = localStorage.getItem('theme');
        } catch (err) {}

        // 사용자가 dark모드인지
        let darkQuery = window.matchMedia('(prefers-color-scheme: dark)');
    
        var settingTheme = preferredTheme || (darkQuery.matches ? 'dark' : 'light');
        
        document.documentElement.dataset.theme = settingTheme;

        localStorage.setItem('theme', settingTheme);
      })();`,
    },
  }),
]

export const onRenderBody = ({ setPreBodyComponents }) => {
  setPreBodyComponents(scriptElement)
}
```

### 댓글 다크모드 적용 방법

<span class='highlight'>giscus 기준 적용 방법이다.</span> useEffect 안에서 데이터 초기화할 때 테마 값은 localStorage값을 이용해준다. <br/>
<b>로컬스토리지 변경 됐을 때 giscus 테마도 변경해야하는 부분이 포인트다.</b> 포인트라고 생각한 이유는 내 생각보다 이벤트 등록이 생각대로 적용되지 않았다. event를 강제로 실행시켜봤더니 이벤트 핸들러가 동작했고 giscus iframe에 postMessage 를 전송해 테마 설정을 변경하는 걸로 적용했다.

```tsx
const handleChangeStorage = (event: StorageEvent) => {
  if (event.key) {
    const theme = event.key

    const iframe = document.querySelector<HTMLIFrameElement>(
      'iframe.giscus-frame',
    )
    iframe?.contentWindow?.postMessage(
      {
        giscus: {
          setConfig: {
            theme: `${theme}_tritanopia`,
          },
        },
      },
      'https://giscus.app',
    )
  }
}
```

```tsx
//댓글 컴포넌트 파일에서
useEffect(() => {
  window.addEventListener('storage', handleChangeStorage)

  return () => {
    window.removeEventListener('storage', () => {})
  }
}, [])

//테마 토글 메소드 안에서
const toggleTheme = () => {
  const newTheme = localStorage.getItem('theme') === 'light' ? 'dark' : 'light'
  localStorage.setItem('theme', newTheme)
  document.documentElement.dataset.theme = newTheme
  window.dispatchEvent(new StorageEvent('storage', { key: newTheme }))
}
```

개발 다 하고 보니 좋다. :3
