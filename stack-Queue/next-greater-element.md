# 📘 Next Greater Element (NGE)

## 🔹 Problem Statement
Given an array of integers, find the **Next Greater Element** for every element.  
The Next Greater Element of an element `x` is the **first element to the right of `x` that is greater than `x`**.

If no such element exists, return `-1` for that element.

---

## 🔹 Example

### Input
[4, 5, 2, 25]


### Output
[5, 25, 25, -1]


### Explanation
| Element | Next Greater Element |
|-------|----------------------|
| 4     | 5                    |
| 5     | 25                   |
| 2     | 25                   |
| 25    | -1                   |

---

## 🔹 Constraints
- `1 ≤ array.length ≤ 10⁴`
- `1 ≤ array[i] ≤ 10⁵`

---

## 🔹 Naive Approach (Brute Force)

### Idea
For each element, scan all elements to its right and find the first greater element.

### Complexity
- **Time Complexity:** `O(n²)`
- **Space Complexity:** `O(1)` (excluding output array)

❌ Inefficient for large inputs.

---

## 🔹 Optimal Approach (Using Stack)

### Key Concept
Use a **monotonic decreasing stack** to efficiently track potential next greater elements.

---

## 🔹 Algorithm
1. Initialize an empty stack.
2. Traverse the array from **right to left**.
3. While stack is not empty and stack top is **less than or equal to current element**, pop the stack.
4. If stack is empty, assign `-1` as the next greater element.
5. Otherwise, stack top is the next greater element.
6. Push the current element onto the stack.
7. Store the result for each index.

---

## 🔹 Pseudocode
stack = empty
result = array of size n

for i from n-1 to 0:
while stack not empty AND stack.top <= arr[i]:
stack.pop()

if stack empty:
    result[i] = -1
else:
    result[i] = stack.top

stack.push(arr[i])

---

## 🔹 JavaScript Implementation
```js
function nextGreaterElement(arr) {
    let n = arr.length;
    let stack = [];
    let result = new Array(n);

    for (let i = n - 1; i >= 0; i--) {
        while (stack.length && stack[stack.length - 1] <= arr[i]) {
            stack.pop();
        }

        result[i] = stack.length === 0 ? -1 : stack[stack.length - 1];
        stack.push(arr[i]);
    }

    return result;
}
🔹 Complexity Analysis
Time Complexity: O(n)

Space Complexity: O(n)

🔹 Important Variations
Next Greater Element to Left

Next Smaller Element

Circular Next Greater Element

Stock Span Problem

Daily Temperatures

🔹 Interview Notes
Classic Monotonic Stack problem

Optimizes brute force from O(n²) to O(n)

Frequently asked in DSA interviews

