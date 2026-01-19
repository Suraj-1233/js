



---

````md
# ⭐ Special Stack (Get Minimum Element)

## 📌 Problem Statement
Design a data structure **SpecialStack** that supports all standard stack operations along with an additional operation:

- `push(x)`
- `pop()`
- `isEmpty()`
- `isFull()`
- `getMin()` → returns the **minimum element** in the stack

⚠️ Constraint:  
`getMin()` should work efficiently using a stack data structure.

---

## 🧩 Examples

### Example 1
**Input**
```txt
stack: 18 19 29 15 16
````

**Output**

```txt
15
```

**Explanation**

```txt
Minimum element in the stack is 15
```

---

### Example 2

**Input**

```txt
stack: 34 335 1814 86
```

**Output**

```txt
34
```

**Explanation**

```txt
Minimum element in the stack is 34
```

---

## ⚠️ Constraints

```txt
1 ≤ element ≤ 10^5
1 ≤ stack.size ≤ 10^4
```

---

## 🧠 Key Idea (IMPORTANT)

To get the minimum element in **O(1)** time:

* Use **two stacks**

  * One main stack for normal values
  * One auxiliary stack to track minimum values

---

## 🔄 Approach

```txt
1. Create two stacks:
   - mainStack
   - minStack

2. push(x):
   - Push x to mainStack
   - If minStack is empty OR x ≤ top of minStack:
       push x to minStack

3. pop():
   - Pop element from mainStack
   - If popped element == top of minStack:
       pop from minStack

4. getMin():
   - Return top of minStack

5. isEmpty():
   - Check if mainStack is empty

6. isFull():
   - Depends on implementation (generally false in dynamic stacks)
```

---

## 🧪 Dry Run

### Input

```txt
18 19 29 15 16
```

### Operations

```txt
Push 18 → minStack = [18]
Push 19 → minStack = [18]
Push 29 → minStack = [18]
Push 15 → minStack = [18, 15]
Push 16 → minStack = [18, 15]
```

### getMin

```txt
Top of minStack = 15
```

---

## ✅ JavaScript Implementation (GFG Compatible)

```js
class SpecialStack {
    constructor() {
        this.stack = [];
        this.minStack = [];
    }

    push(x) {
        this.stack.push(x);

        if (
            this.minStack.length === 0 ||
            x <= this.minStack[this.minStack.length - 1]
        ) {
            this.minStack.push(x);
        }
    }

    pop() {
        if (this.stack.length === 0) return -1;

        let removed = this.stack.pop();

        if (removed === this.minStack[this.minStack.length - 1]) {
            this.minStack.pop();
        }

        return removed;
    }

    isEmpty() {
        return this.stack.length === 0;
    }

    isFull() {
        return false;
    }

    getMin() {
        if (this.minStack.length === 0) return -1;
        return this.minStack[this.minStack.length - 1];
    }
}
```

---

## ⏱ Complexity Analysis

```txt
Operation   Time   Space
push        O(1)   O(1)
pop         O(1)   O(1)
getMin      O(1)   O(1)
```

Overall Space Complexity:

```txt
O(n)
```

---

## ❌ Common Mistakes

```txt
- Trying to compute min by iterating stack each time
- Forgetting to sync minStack during pop
- Not handling duplicate minimum values
```

---

## 🎯 Interview One-Liners

```txt
- A Special Stack maintains an auxiliary stack to track minimum elements
- This allows getMin() to work in O(1) time
```

---

## 📌 Key Takeaway

```txt
Using an extra stack to store minimum values allows us
to retrieve the minimum element in constant time
without affecting normal stack operations
```
