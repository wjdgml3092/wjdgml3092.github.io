---
date: '2024-05-29'
title: '클로저 (feat. useState)'
tag: ['closure', 'JS']
category: 'TIL'
---

클로저는 와닿지 않는 개념 중 하나다. 하지만 우리가 사용하고있는 React hook 중 useState도 클로저를 적용했단 사실을 아는가? 난 이 사실을 알고 클로저가 좀 더 와닿았다. 전반적인 클로저에 정리, useState를 예시로 작성하고자 한다.

### 클로저에 대한 이해

우선, MDN에 정의된 클로저의 정의는 이렇다. [MDN 정의](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures)

<p style="text-align: center; color: var(--second-color); font-weight: 700 ">
 A closure is the combination of a function and the lexical environment within which that function was declared.
 <br/>
클로저는 함수와 그 함수가 선언된 렉시컬 환경과의 조합이다.

</p>
<br/>
클로저를 이해하기 전, 렉시컬 스코프와 실행 컨텍스트를 이해하는 것이 도움이 될 것이다. <br/>
짧게 설명하자면,

- <b>렉시컬 스코프(정적 스코프)</b>: 자바스크립트 엔진은 함수를 어디서 호출했는지가 아니라 <span class='highlight'>함수를 어디에 정의</span>했는지에 따라 상위 스코프를 결정한다.
- <b>실행 컨텍스트</b>: 자바스크립트에서 코드가 실행하는데 필요한 환경을 제공하고 이를 관리하는 영역이다.

  - <b>렉시컬 환경</b>: 식별자와 식별자에 대한 바인딩된 값(`환경 레코드`), 그리고 상위 스코프에 대한 참조를 기록(`외부 렉시컬 환경에 대한 참조`)하는 자료구조로 실행 컨텍스트를 구성하는 컴포넌트다. ([이전 정리했던 실행컨텍스트 글](<https://wjdgml3092.github.io/TIL/ExecutionContext(1)/>))

- <b> 함수 객체의 내부 슬롯 [[Environment]] </b> : 렉시컬 스코프가 가능하려면 함수 정의가 위치하는 스코프를 기억해야한다. 이를 위해 함수는 자신의 `내부 슬롯 [[Environment]]`에 상위 스코프의 참조를 저장한다.
  - 함수 정의가 평가되어 함수 객체를 생성할 때 <span class='highlight'> 상위 스코프의 참조를 함수 객체 자신의 내부 슬롯 [[Environment]]에 저장</span>하는데, 저장된 참조는 현재 실행 중인 실행 컨텍스트의 렉시컬 환경의 <span class='highlight'> 외부 렉시컬 환경에 대한 참조에 저장될 참조값</span>이다.

<br/>

```javaScript
const x = 1;

function outerFunc() {
  var x = 10; //외부함수 변수 x

  var innerFunc = function () {
    console.log(x); //상위 함수의 변수에 접근
  };

  return innerFunc;
}

var inner = outerFunc();
inner(); // 10
```

`outerFunc()`을 호출 후 지역변수 x와 변수값 10을 저장하고 있던 outerFunc 함수의 실행 컨텍스트는 실행컨텍스트에서 pop되면서, 생명주기는 마감한다. 생명주기가 마감했기 때문에 지역변수 x는 더이상 유효하지 않는 걸로 보이지만. `inner()`를 호출하면 10이 찍힌다.
<br/>

> 어째서?

위 코드의 `innerFunc()`가 평가될 때를 설명하자면, <br/>
`innerFunc()` 함수 표현식으로 정의했기 때문에 런타임에 평가된다. `innerFunc()`는 자신의 [[Environment]] 내부 슬롯에 <u>outerFunc 함수의 렉시컬 환경을 상위 스코프로 저장</u>한다. (현재 실행 중인 실행 컨텍스트의 렉시컬 환경 = outerFunc) <br/>
`outerFunc()`은 `innerFunc()`를 반환하고 생명주기는 종료되지만, `outerFunc`의 렉시컬 환경까지 소멸하는 것은 아니다. 해당 렉시컬 환경은 innerFunc 함수의 [[Environment]] 내부 슬롯에 의해 참조되고 있기 때문에 가비지 컬렉션의 대상이 되지 않는다 ! (가비지 컬렉터는 누군가가 참조하고 있는 메모리를 함부로 해제하지 않는다)
<span style="font-size: 12px;">뒷 이야기를 하자면, 전역 변수 inner를 호출하면 innerFunc 함수의 실행 컨텍스트가 생성되고 실행 컨텍스트 스택에 푸시되며, 렉시컬 환경의 외부 렉시컬 환경에 대한 참조에는 innerFunc 함수 객체의 [[Environment]] 내부 슬롯에 저장되어 있는 참조값이 할당되겠쥬? </span>

<span class='highlight'>이처럼 외부 함수보다 중첩 함수가 더 오래 유지되는 경우, 중첩 함수는 이미 생명 주기가 종료한 외부 함수의 변수를 참조할 수 있다. 중첩 함수를 <b>클로저</b></span>라고 한다. <br/>

### 클로저를 사용하는 이유는?

- <b>전역 변수 사용 최소화</b> <br/>
  전역변수가 많으면 의도치 않게 어디에서든 접근하는 상황이 발생할 수 있다. 클로저를 이용하여 전역변수를 최소한으로 사용함으로써 이러한 실수나 예외적인 상황을 방지할 수 있다.
- <b>상태 유지</b> (아래 useState로 보자.)
- <b>정보은닉</b> <br/>
  변수 값을 은닉하여, private 키워드를 흉내낼 수 있다. <br/>
  (기본적으로 자바스크립트는 접근제한자를 제공하지 않아 모든 프로퍼티와 메서드는 기본적으로 외부에 공개되어 있다.)

### 클로저를 적용한 useState 구현

리액트에서 컴포넌트의 렌더링 및 상태를 관리할 수 있도록 useState를 자주 사용했을 것이다.
상태관리를 하려면, 이전 값을 기억해야한다. 이때 클로저를 적용하여 간단한 구현을 할 수 있다. (원래 리액트 코드는 이보다 더 복잡하다.)

```javaScript
const React = (function () {
  let val;

  function useState(initVal) {
    const state = val || initVal
    const setState = (newVal) => {
      val = newVal
    }

    return [state, setState]
  }

  function render(Component) {
    const C = Component()
    C.render()

    return C
  }

  return { useState, render }
})()

```

모듈 패턴을 사용해서 React 모듈안에 있는 useState로 구현한 코드다.
화면에 렌더링 해주기 위해 render 메소드도 추가

```JavaScript
function Component() {
  const [count, setCount] = React.useState(1)

  return {
    render: () => console.log(count),
    add: (num) => setCount(num),
  }
}

const App = React.render(Component) // 1
App.add(5)
const App2 = React.render(Component) // 5
```

state가 유지되며 업데이트가 된다.
<br/>

---

<aside style="border-color: var(--highlight)">

💡 정리

<ul>
    <li> MDN 정의에 있는 <u>'그 함수가 선언된 렉시컬 환경'</u>이란 것은 상위 스코프를 의미하는 <u>실행 컨텍스트의 렉시컬 환경</u>을 말한다. 
    </li>
    <li>
        자바스크립트의 모든 함수는 렉시컬 스코프에 대한 참조값을 저장한다. 해당 참조값을 통해 외부 함수의 변수에도 접근할 수 있게되는 것이다. <br/>
        참조값을 어디에 저장하는가? → 자신의 내부 슬롯 [[Environment]]
    </li>
    <li> 
        자바스크립트의 모든 함수는 상위 스코프를 기억하므로 이론적으로는 모든 함수가 클로저지만, 중첩함수가 상위 스코프의 식별자를 참조하고 있고, 중첩함수가 외부함수보다 더 오래 유지되는 경우에 한정하는 것이 일반적이다. <br/>
        <span style="font-size: 12px;">번외) 상위 스코프를 기억해야하므로 불필요한 메모리의 점유를 걱정할 수 있지만, 모던 자바스크립트 엔진은 최적화가 잘되어 있어서 클로저가 참조하고 있지 않는 식별자는 기억하지 않는다. </span>
    </li>
   
</aside>
