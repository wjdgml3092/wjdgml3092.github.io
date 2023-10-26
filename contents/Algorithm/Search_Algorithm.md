---
date: '2023-09-23'
title: '검색 알고리즘(Search Algorithm)'
tag: ['search_algorithm']
category: 'Algorithm'
---

### 1. 선형 검색(Linear Search)

- 검색 방법
  <u>처음부터 해당 값을 찾기위해 맨 끝에 도달할 때까지 계속 확인</u>하는 방법이다.
- 자바스크립트에는 선형 검색 기능이 있다.
  - `indexOf`(찾는 값의 인덱스를 반환), `includes`(찾는 값이 존재하는지) 등 함수
  - 위 함수들도 내부에서는 모든 요소를 한 번에 하나씩 확인하면서 입력한 것이 있나 확인한다.
- 코드

```javaScript
function linearSearch(arr, val) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === val) return i;
  }
  return -1;
}
```

- Big O 성능
  - Best : O(1)
  - Worst : O(n)
  - Average : O(n)
- 선형 검색은 **데이터가 정렬되어 있지 않은 경우 할 수 있는 최선**이다. n 이 커지면 배열의 길이도 길어지고 시간도 늘어난다.

### 2. 이진 검색(Binary Search)

- 검색 방법
  - 기본적인 개념은 분할정복(dividing and conquering)이다.
    - 배열을 두 부분으로 나누고,
    - 중간에 있는 곳에서 찾는 값이 좌측인지 우측인지 확인한다.
- 분류된 배열을 대상으로만 작동하므로! 데이터가 분류되어있다는 것을 주의해야한다.
- 이진 검색이 선형 검색보다 훨씬 빠르다.
- 의사 코드
  - **정렬된 배열**과 **검색할 값을 인수**로 받는다.
    - `배열의 시작 부분에 왼쪽 포인터`, `배열의 끝 부분에 오른쪽 포인터,` `중간 포인터` 3가지 변수를 선언한다.
    - 검색한 값과 중앙 포인터의 값이 같지 않으며서 왼쪽 포인터가 오른쪽 포인터 앞에 오는 동안
      - 값이 크면 오른쪽 포인터를 중앙 포인터의 왼쪽으로 이동
      - 값이 작으면 왼쪽 포인터를 중앙 포인터의 오른쪽으로 이동
      - 좌우 포인터의 중간 인덱스로 중앙 포인터를 재설정
    - 검색한 값과 중앙 포인터 값이 같은 경우, 해당 중앙 포인터 반환하고 이외에는 -1 반환
- 코드

```javaScript
function binarySearch(arr, val) {
    let start = 0;
    let end = arr.length - 1;
    let middle = Math.floor((start + end) / 2);
    //floor 사용이유 : 딱 나눠떨어지지 않는 경우에 소수점 버리기 위해
    //예를 들어 길이가 start+end가 5라면 middle은 2.5라면?
    //2.5라는 인덱스는 존재하지 않는다.

    while (arr[middle] !== val && start <= end) {
        if (val < arr[middle]) end = middle - 1;
        else start = middle + 1;
        middle = Math.floor((start + end) / 2);
    }
    return arr[middle] === val ? middle : -1;
}
```

- Big O 성능
  - Worst / Average : O(logn)
  - Best : O(1)
- **정렬만 되어있는 배열이라면** 아주 성능 좋은 검색 알고리즘이다.
