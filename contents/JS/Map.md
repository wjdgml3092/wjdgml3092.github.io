---
date: '2023-08-08'
title: 'Map'
categories: ['JS']
---

### 1. 소개

- Map 객체는 **key-value**로 이루어진 해시 테이블.
- 객체와 비슷하지만 차이점 있음.

|                        | 객체                    | Map 객체              |
| ---------------------- | ----------------------- | --------------------- |
| 키로 사용할 수 있는 값 | 문자열 심벌 값          | 객체를 포함한 모든 값 |
| 이터러블               | X                       | O                     |
| 요소 개수 확인         | Object.keys(obj).length | map.size              |

### 2. 생성

- 생성은 Map 생성자 함수로 생성.
- 파라미터를 전달하지 않으면 **빈 Map객체가 생성**.

```javaScript
const map = new Map();
```

- **이터러블을 파라미터로 전달받아** Map객체를 생성.

  - 파라미터로 전달되는 이터러블은 **key-value 쌍**으로 이루어진 요소로 구성.
  - 중복된 키를 갖는 요소가 존재하면 값 덮어씀 -> **중복된 키를 갖는 요소 존재 X**

```javaScript
const map1 = new Map([['key1', 'val1'], ['key2', 'val2']])

const map2 = new Map([1,2])
//TypeError: Iterator value 1 is not an entry object
```

### 3. 추가 / 가져오기

- 추가

  - `Map.prototype.set` 메서드 사용.
  - set 메서드는 새로운 요소가 추가된 Map 객체를 반환. <br/>
    ↳ 해당 메서드를 연속적으로 호출할 수 O

  ```JavaScript
  const map = new Map();
  map.set('name', 'jung');
  //로그 : Map(1) {"name" => "jung"}

  map.set('job', 'developer').set('age', '25');
  //로그 : Map(3) {'name' => 'jung', 'job' => 'developer', 'age' => '25'}
  ```

  - `NaN === NaN` 값은 false. ↔ Map객체에서는 true로 평가하여 중복 추가를 허용하지 않음.

  ```JavaScript
  const map = new Map();

  map.set(NaN, 'val').set(NaN, 'val2');
  //로그 : Map(1) {NaN => 'val2'} NaN이 같다고 판단하여 덮혀씀.
  map.set(0, 'val3').set(-0, 'val4');
  //로그 : Map(2) {NaN => 'val2', 0 => 'val4'} 0, -0로 마찬가지로 판단하여 덮혀씀.
  ```

  - 키 타입에 제한 없이 객체를 포함한 모든 값을 키로 사용할 수 있음.
    ↔ 객체는 문자열 혹은 심벌 값만 키로 사용 할 수 있음 <br/>
    ↳ **Map 객체와 일반 객체의 가장 큰 차이점!**
    <br/>

- 가져오기

  - `Map.prototype.get` 메서드 사용.
  - get 메서드는 파라미터로 키를 전달하면 Map객체에서 일치한 키를 갖는 값을 반환. <br/>(키를 갖는 요소가 존재하지 않으면 `undefined` 반환)

  ```JavaScript
  const map = new Map();

  map.set('name', 'jung').set('age', '25');

  console.log(map.get('name')); //jung
  console.log(map.get('job')); //undefined
  ```

### 4. 개수 확인 / 존재 여부 / 삭제

- 개수 확인

  - `Map.prototype.size` 프로퍼티 사용.
  - size 프로퍼티는 setter 함수 없이 getter함수만 존재하는 접근자 프로퍼티.<br/>
    ↳ size 프로퍼티에 숫자를 할당하여 Map 객체의 개수를 변경할 수 없음.
    <br/>
    <span style="font-size: 14px">
    (접근자 프로퍼티: 자체적으로는 값을 갖지 않고 다른 데이터 프로퍼티의 값을 읽거나 저장할 때 사용하는 접근자 함수로 구성된 프로퍼티다.)
    </span>

- 존재 여부
  - `Map.prototype.has` 메서드 사용.
  - 존재여부를 나타내는 Boolean값 반환.
- 삭제
  - 단일 삭제
    - `Map.prototype.delete` 메서드 사용.
    - 삭제 성공 여부를 나타내는 Boolean값 반환. <br/>
      ↳ 반환이 t/f이기 때문에 set 메서드처럼 연속적인 호출은 할 수 없음.
  - 일괄 삭제
    - `Map.prototype.clear` 메서드 사용.
    - 언제나 undefined 반환!

```JavaScript
const map = new Map([['name', 'jung'], ['age', '25']]);

/*<-----개수 size------>*/
console.log(map.size); // 2

const {size} = new Map([['name', 'jung'], ['age', '25'], ['job', 'developer']]);

console.log(size); // 3

/*<-----존재여부 has(key)------>*/
console.log(map.has('name')); //true
console.log(map.has('blog')) //false

/*<-----삭제 delete(key)------>*/
console.log(map.delete('name')); //true

map.delete('blog'); //에러 X, 무시
console.log(map); //Map(1) {'age' => '25'}

/*<-----일괄 삭제 clear()------>*/
map.clear();
```

### 5. 반복

- **forEach** 메서드 사용.

  - 첫번째 파라미터: 현재 순회 중인 요소값
  - 두번째 파라미터: 현재 순회 중인 요소키
  - 세번째 파라미터: Map 객체 자체

- Map 객체는 이터러블 👉🏻 **for...of** 가능.
  - 스프레드 문법, 배열 디스트럭처링 할당의 대상이 될 수 있음.
- Map 객체는 이터러블이면서 동시에 **이터레이터인 객체를 반환하는 메서드를 제공**함.

  - `Map.prototype.keys` `Map.prototype.values` `Map.prototype.entries`

  ```javaScript
  const lee = { name: 'Lee' };
  const kim = { name: 'Kim' };

  const map = new Map([[lee, 'designer'], [kim, 'developer']]);

  /*<-----forEach----->*/
  map.forEach((val, key, obj) => console.log(val, key, obj));
  /*
    designer {name: "Lee"} Map(2) {
    {name: "Lee"} => "designer",
    {name: "Kim"} => "developer"
    }
    developer {name: "Kim"} Map(2) {
    {name: "Lee"} => "designer",
    {name: "Kim"} => "developer"
    }
  */

  /*<-----for...of----->*/
  for (const entry of map) {
    console.log(entry);
    // [{name: "Lee"}, "designer"]  [{name: "Kim"}, "developer"]
  }

  // 스프레드 문법
  console.log([...map]);
  // [[{name: "Lee"}, "designer"], [{name: "Kim"}, "developer"]]

  // 배열 디스트럭처링 할당
  const [a, b] = map;
  console.log(a, b);
  // [{name: "Lee"}, "designer"]  [{name: "Kim"}, "developer"]

  /*<-----Map 메서드----->*/
  for (const key of map.keys()) {
    console.log(key);
    // {name: "Lee"} {name: "Kim"}
  }

  for (const value of map.values()) {
    console.log(value);
    // designer developer
  }

  for (const entry of map.entries()) {
    console.log(entry);
    // [{name: "Lee"}, "designer"]  [{name: "Kim"}, "developer"]
  }

  ```

### 6. 마무리

요약하자면, Map은 다음과 같습니다.

- **key-value**로 이루어진 해시 테이블.
- **key는** 고유값으로써, **단 한개만 존재**한다.
- key 가능 자료형 : **객체를 포함한 모든 값**
- 데이터를 **쉽게 접근하고 검사**할 수 있음 👉🏻 get(접근), set(삽입), has(여부) 등
- Object와 달리 **키의 순서를 유지**하고, iteration를 염두에 두고 구축되었다.
- **반복 혹은 요소 순서가 매우 중요한 경우 사용하면 안정적인 성능을 보장할 수 있다.**

<br/>

[더 알아보기 MDN](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Map)
