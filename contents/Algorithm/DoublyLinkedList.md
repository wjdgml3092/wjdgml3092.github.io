---
date: '2023-09-07'
title: '이중 연결 리스트(Doubly Linked List)'
categories: ['Algorithm', 'JS']
---

### 1. 이중 연결 리스트(Doubly Linked List)란?

앞서 작성한 [단일 연결 리스트](https://wjdgml3092.github.io/Algorithm/SinglyLinkedList/) 자료구조와 유사하기 때문에 다른점을 중점으로 작성하였다. <br/>
`이전의 노드를 가리키는 포인터`가 생겼다. 즉, 노드에 이전, 다음 노드를 가리키는 2개의 포인터가 있다. <br/>
이중 연결 리스트는 단일 연결 리스트와 다르게 이전 포인터가 생겨 성능상 유연하고, 탐색 시 편하지만, 더 많은 메모리가 필요하게 되었다.

### 2. 기본 구조

```javaScript
class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.prev = null; //추가! 이전 포인터에 대한 값
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null; // 리스트의 맨앞
    this.tail = null; // 리스트의 맨뒤
    this.length = 0; // 리스트의 길이
  }
}
```

### 3. push(val) / pop()

```javaScript
//마지막 노드 추가
push(val) {
    const newNode = new Node(val);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail; //이전 포인터도 신경쓰기
      this.tail = newNode;
    }
    this.length++;
    return this;
}

//단일 연결 리스트와는 다름.
//마지막 노드 삭제
pop() {
    if (!this.head) return undefined;

    const poppedNode = this.tail;

    //리스트 길이가 1이라면, head, tail 모두 null처리
    if (this.length === 1) {
        this.head = null;
        this.tail = null;
    } else {
        //리스트 길이가 1 이상이라면,
        //tail의 이전을 tail로 만들고
        this.tail = poppedNode.prev;

        //tail의 next는 당연히 null
        this.tail.next = null;

        //기존 tail의 prev도 null로 만든다
        //이렇게 하지 않고, pop된 node return시 prev가 살아있다.
        poppedNode.prev = null;
    }
    this.length--;
    return poppedNode;
  }
```

### 4. unshift(val) / shift()

```javaScript
//첫번째 노드 추가
unshift(val) {
    const newNode = new Node(val);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.head.prev = newNode; //이전 포인터도 신경쓰기
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
    return this;
}

//첫번째 노드 삭제
shift() {
    if (!this.head) return undefined;

    const oldHead = this.head;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = oldHead.next;
      this.head.prev = null;
      oldHead.next = null;
    }
    this.length--;
    return oldHead;
}
```

### 5. get(idx)

- 특정 위치에 속한 노드를 반환한다.
- 단일 연결 리스트와 다른점 <br/>
  효율적으로 루프롤 돌기 위해, <span style="background: #fff5b1; font-weight: 700;">찾는 idx가 해당 리스트의 중앙을 기준으로 어디에 있는지 확인</span>하고, 그 결과에 따라 앞(head)에서부터 루프를 시작할지, 뒤(tail)에서부터 루프를 시작할지 결정한다.

```javaScript
get(idx) {
    if (idx < 0 || idx >= this.length) return null;

    let count;
    let current;
    // 입력된 idx가 중앙을 기준으로 리스트의 앞 부분에 있으면
    if (idx <= this.length / 2) {
        count = 0;
        current = this.head;
        // head로 시작!
        while (count !== idx) {
            current = current.next; //next로 할당
            count++;
        }
    }
    else {
    // 입력된 idx가 중앙을 기준으로 리스트의 앞 부분에 있으면
        count = this.length - 1;
        current = this.tail;
        // tail로 시작
        while (count !== idx) {
            current = current.prev; //prev로 할당
            count--;
        }
    }
    return current;
}
```

### 6. set(idx, val)

```javaScript
//단일 연결 리스트와 로직 동일
set(idx, val) {
    const findNode = this.get(idx);

    if (findNode != null) {
      findNode.val = val;
      return true;
    }
    return false;
}
```

### 7. insert(idx, val)

```javaScript
insert(idx, val) {
    if (idx < 0 || idx > this.length){
        return false;
    }

    if (idx === this.length){
        return !!this.push(val);
    }

    if (idx === 0){
        return !!this.unshift(val);
    }

    const newNode = new Node(val);

    const beforeNode = this.get(idx - 1); //이전 노드
    const afterNode = beforeNode.next;

    // beforeNode의 next가 새 노드를 가리키게 하고,
    // 새 노드의 prev는 beforeNode를 가리키게 한다.
    beforeNode.next = newNode;
    newNode.prev = beforeNode;

    // 새 노드의 next가 afterNode를 가리키게 하고,
    // afterNode의 prev는 새 노드를 가리키게 한다.
    newNode.next = afterNode;
    afterNode.prev = newNode;

    this.length++;
    return true;
  }
```

### 8. remove(idx)

```javaScript
remove(idx) {
    if (idx < 0 || idx > this.length){
        return undefined;
    }

    if (idx === 0){
        return this.shift();
    }
    if (idx === this.length - 1) {
        return this.pop();
    }

    const removedNode = this.get(idx);
    const beforeNode = removedNode.prev;
    const afterNode = removedNode.next;

  // 삭제할 노드의 이전 노드의 next가 삭제할 노드의 next 노드를 가리키게 한다.
    beforeNode.next = afterNode;
  // 삭제할 노드의 다음 노드의 prev가 삭제할 노드의 prev 노드를 가리키게 한다.
    afterNode.prev = beforeNode;

  // 삭제할 노드의 next와 prev를 모두 null로 재할당하여, 연결을 끊는다.
    removedNode.next = null;
    removedNode.prev = null;
    this.length--;
    return removedNode;
}

```

### 9. 시간복잡도

- 삽입 : `O(1)`
- 제거 : `O(1)`
- 탐색 : `O(N)`
  - 정확하게는 탐색의 시간복잡도는 O(N/2)이지만, 빅오에 의해 O(N)으로 표현한다.
- 접근 : `O(N)`

### 요약

- 이중 연결 리스트가 단일 연결 리스트와 다른점은 이전 노드를 가리키는 포인터가 추가됐다는 점만 빼면 동일하다.
- 노드를 찾을 때는 이중 연결 리스트가 단일 연결 리스트보다 시간을 절반으로 줄일 수 있으므로 더 좋다. 이 외의 이중 연결 리스트의 시간복잡도는 단일 연결 리스트의 성능과 같다.
- 추가된 이전 노드를 가리키는 포인터 때문에 더 많은 메모리가 필요하다는 점이 단점이다.

<br/>

[단일 연결 리스트 포스팅 바로가기](https://wjdgml3092.github.io/Algorithm/SinglyLinkedList/)
