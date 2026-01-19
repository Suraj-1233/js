# Stack Data Structure (Using Array)

## 📌 What is Stack?
A Stack is a **Linear Data Structure** that follows **LIFO**
(Last In, First Out).

Example:
Plate stack 🍽  
Last plate added → First plate removed

---

## 🧩 Operations
1. push(x)  → Insert element at top  
2. pop()    → Remove top element  
3. peek()   → Get top element  
4. isEmpty()
5. isFull()

---

## ⏱ Time Complexity
| Operation | Time |
|---------|------|
| push | O(1) |
| pop | O(1) |
| peek | O(1) |

---

## ✅ Stack Implementation (JavaScript)

```js
class MyStack {
    constructor(n) {
        this.size = n;
        this.arr = [];
        this.top = -1;
    }

    push(x) {
        if (this.isFull()) return;
        this.top++;
        this.arr[this.top] = x;
    }

    pop() {
        if (this.isEmpty()) return -1;
        return this.arr[this.top--];
    }

    peek() {
        if (this.isEmpty()) return -1;
        return this.arr[this.top];
    }

    isEmpty() {
        return this.top === -1;
    }

    isFull() {
        return this.top === this.size - 1;
    }
}
