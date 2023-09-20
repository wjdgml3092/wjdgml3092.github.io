---
date: '2023-09-14'
title: '재귀(Recursion)'
categories: ['Algorithm', 'JS']
---

### 1. 재귀(Recursion)

재귀는 자기 자신을 호출하는 것이다. 재귀가 되기 위한 조건은 2가지가 있다. <br/>

1. <b>Base Case</b>: 재귀가 종료되는 시점
   ↳ base case가 없다면, 에러를 뱉는다. <br/>
   `Uncaught RangeError: Maximum call stack size exceeded` <br/> → 스택 오버플로 발생, 최대 호출 스택 크기를 초과한다.
2. <b>Different Input</b>: 다른 입력 값 &rarr; 함수를 호출할 때마다 다른 입력값으로 호출되어야한다.

### 2. 호출 스택(Call Stack)

재귀 함수가 자기를 계속 호출하면서 올바른 순서대로 실행이 되어야 한다. 이걸 담당하는 <span style='background-color: #fff5b1; font-weight: 700'> 데이터 구조가 JS의 경우 호출 스택(Call Stack)이다.</span> 호출 스택은 JS가 보이지 않는곳에서 작동하는 <u>정적 데이터 구조(static data structure)</u>다. <br/>스택이므로 LIFO, 마지막에 들어온게 먼저 나간다. JS가 함수 안에 더이상 실행할 코드가 없거나 return 할 것이 없다면, 컴파일러가 스택 제일 위에꺼를 제거해서 실행한다. (개발자도구를 열어서 디버깅으로 실행하면 오른쪽에 call stack이 어떻게 작동하는지 확인할 수 있다.)

### 3. 예제(example)

1. 모든 수 더하기
   간단한 예제로 인자로 받은 수부터 시작해서 출력하는 함수다.

```javaScript
//recursion
function countDown_recursion(n){
    if(n <= 0){
        console.log('출력 끝남')
        return
    }
    console.log(n);
    countDown_recursion(n-1)
}

//for loop
function countDown_loop(n){
    for(let i = n; i <= 1; i--){
        console.log(i)
    }
}
```

2. 팩토리얼 <br/>
   재귀함수의 고전적으로 설명되는 함수다. 수식으로 표현하자면 5! = 5 X 4 X 3 X 2 X 1

```javaScript
//recursion
function factorial_recursion(n){
    if(n === 1) return 1; //base case
    return n * factorial_recursion(n-1);
}

//for loop
function factorial_loop (n) {
  var result = 1;
  for (var i = n; i >= 1; i--) {
    result *= i;
  }
  return result;
}

```
