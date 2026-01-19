
---

# 📘 queue.md

```md
# Queue Data Structure (Using Array)

## 📌 What is Queue?
A Queue is a **Linear Data Structure** that follows **FIFO**
(First In, First Out).

Example:
Cinema ticket line 🎟  
First person → Served first

---

## 🧩 Operations
1. enqueue(x) → Insert at rear  
2. dequeue()  → Remove from front  
3. getFront()  
4. getRear()  
5. isEmpty()
6. isFull()

---

## ⏱ Time Complexity
| Operation | Time |
|---------|------|
| enqueue | O(1) |
| dequeue | O(1) |
| front/rear | O(1) |

---

## ✅ Queue Implementation (JavaScript)

```js
class MyQueue {
    constructor(n) {
        this.size = n;
        this.arr = [];
        this.front = 0;
        this.rear = -1;
        this.count = 0;
    }

    enqueue(x) {
        if (this.isFull()) return -1;
        this.rear++;
        this.arr[this.rear] = x;
        this.count++;
    }

    dequeue() {
        if (this.isEmpty()) return -1;
        let val = this.arr[this.front];
        this.front++;
        this.count--;
        return val;
    }

    getFront() {
        if (this.isEmpty()) return -1;
        return this.arr[this.front];
    }

    getRear() {
        if (this.isEmpty()) return -1;
        return this.arr[this.rear];
    }

    isEmpty() {
        return this.count === 0;
    }

    isFull() {
        return this.count === this.size;
    }
}
