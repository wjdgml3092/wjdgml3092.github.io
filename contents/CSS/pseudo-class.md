---
date: '2023-08-09'
title: '의사 클래스(pseudo-classes)'
categories: ['CSS', 'pseudo-classes']
summary: '의사 클래스 종류와 사용법'
---

### 1. 의사 클래스(pseudo-classes)

선택하고자 하는 HTML 요소의 특별한 <span style="background: #fff5b1">상태(state)</span>를 명시할 때 사용합니다.

### 2. 의사 클래스 종류 및 예제

<span style="font-size: 14px; padding: 0">지금까지 제가 개발하면 자주 사용하던거 위주로 정리하였습니다.</span>

**1. 동적 의사 클래스(dynamic pseudo-classes)**

- **:hover** : <span style="background: #fff5b1">마우스 호버 시</span>(마우스로 가리킬 때) -**:active** : 마우스 버튼을 누를 때
  - <span style="background: #fff5b1">클릭하는 순간부터 떼는 순간까지</span>
  <iframe height="300" style="width: 100%; margin: 5px 0;" scrolling="no" title="Untitled" src="https://codepen.io/zlsoakpc-the-scripter/embed/mdQYOJG?default-tab=html%2Cresult" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/zlsoakpc-the-scripter/pen/mdQYOJG">
  Untitled</a> by 김정희 (<a href="https://codepen.io/zlsoakpc-the-scripter">@zlsoakpc-the-scripter</a>)
  on <a href="https://codepen.io">CodePen</a>.
  </iframe>
- **:focus** : 사용자가 요소를 클릭 또는 탭하거나 키보드 키로 요소를 선택할 때
  - <span style="background: #fff5b1">마우스가 해당 요소를 클릭해서 포커스가 아웃될 때까지</span>
  <iframe height="300" style="width: 100%;" scrolling="no" title="Untitled" src="https://codepen.io/zlsoakpc-the-scripter/embed/LYXobEO?default-tab=html%2Cresult" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/zlsoakpc-the-scripter/pen/LYXobEO">
  Untitled</a> by 김정희 (<a href="https://codepen.io/zlsoakpc-the-scripter">@zlsoakpc-the-scripter</a>)
  on <a href="https://codepen.io">CodePen</a>.
  </iframe>

<br/>

**2. 상태 의사 클래스(UI element states pseudo-classes)**

- **:enabled**: <span style="background: #fff5b1">입력, 클릭 등을 활성화거나 포커스를 수락할 수 있는 요소</span>
- **:disabled** : enabled과 반대 개념
  <iframe height="300" style="width: 100%; margin: 5px 0;" scrolling="no" title="Untitled" src="https://codepen.io/zlsoakpc-the-scripter/embed/YzRbpqv?default-tab=html%2Cresult" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  </iframe>
  <br/>

**3. 구조 의사 클래스(structural pseudo-classes)**

 <div style="border: 1px solid #c2c2c2; padding: 5px 10px; margin-bottom: 5px;">
 <b  style="background: #fff5b1">even</b>: 짝수 / 
 <b  style="background: #fff5b1">odd</b>: 홀수 <br/>
 <b  style="background: #fff5b1">An+B</b> 👉🏻
     A : 정수 단계 크기 /
     B : 정수 오프셋 /
     n : 0부터 시작하는 음이 아닌 정수
</div>

- **:first-child** : 형제 요소 중에 <span style="background: #fff5b1">첫번째 요소</span>
- **:nth-child**: <span style="background: #fff5b1">형제 그룹 사이의 위치</span>에 따라 요소를 일치
- **:first-of-type** : 형제 요소 중에 <b style="background: #fff5b1">자신의 유형과 일치하는</b> 첫번째 요소
  <iframe height="300" style="width: 100%; margin: 5px 0;" scrolling="no" title="Untitled" src="https://codepen.io/zlsoakpc-the-scripter/embed/OJaYXrg?default-tab=html%2Cresult" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">

  See the Pen <a href="https://codepen.io/zlsoakpc-the-scripter/pen/OJaYXrg">
  Untitled</a> by 김정희 (<a href="https://codepen.io/zlsoakpc-the-scripter">@zlsoakpc-the-scripter</a>)
  on <a href="https://codepen.io">CodePen</a>.
  </iframe>

- **:nth-of-type** : <b style="background: #fff5b1">동일한 유형의 형제 사이의 위치</b>를 ​​기준으로 일치하는 요소
  <iframe height="300" style="width: 100%; margin: 5px 0;" scrolling="no" title="Untitled" src="https://codepen.io/zlsoakpc-the-scripter/embed/PoxvzXm?default-tab=html%2Cresult" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
    See the Pen <a href="https://codepen.io/zlsoakpc-the-scripter/pen/PoxvzXm">
    Untitled</a> by 김정희 (<a href="https://codepen.io/zlsoakpc-the-scripter">@zlsoakpc-the-scripter</a>)
    on <a href="https://codepen.io">CodePen</a>.
  </iframe>
  <br/>

[더 알아보기 MDN](https://developer.mozilla.org/ko/docs/Web/CSS/Pseudo-classes)
