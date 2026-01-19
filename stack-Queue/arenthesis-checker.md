

```
parenthesis-checker.md
```

---

````md
# ✅ Parenthesis Checker (Using Stack)

## 📌 Problem Statement
Given a string `s` consisting only of the following characters:

```txt
( ) { } [ ]
````

Check whether the parentheses are **balanced**.

A string is considered **balanced** if:

* Every opening bracket has a corresponding closing bracket
* Brackets are closed in the correct order

---

## 🧩 Examples

### Example 1

**Input**

```txt
{([])}
```

**Output**

```txt
true
```

---

### Example 2

**Input**

```txt
([)]
```

**Output**

```txt
false
```

---

### Example 3

**Input**

```txt
{[()]}[]
```

**Output**

```txt
true
```

---

## ⚠️ Constraints

```txt
1 ≤ s.length ≤ 10^5
The string contains only parentheses characters
```

---

## 🧠 Why Stack?

```txt
- Stack follows LIFO (Last In First Out)
- The most recent opening bracket must be closed first
- Parenthesis matching naturally fits stack behavior
```

---

## 🔑 Bracket Mapping

```js
const obj = {
    "{": "}",
    "[": "]",
    "(": ")"
};
```

---

## 🔄 Approach

```txt
1. Create an empty stack
2. Traverse the string character by character
3. If the character is an opening bracket:
   - Push it onto the stack
4. If the character is a closing bracket:
   - If stack is empty → return false
   - Pop the top element from the stack
   - Check if it matches using the mapping object
5. After traversal:
   - If stack is empty → return true
   - Else → return false
```

---

## 🧪 Dry Run (Valid Case)

**Input**

```txt
{([])}
```

**Execution**

```txt
{  → push
(  → push
[  → push
]  → pop [, match
)  → pop (, match
}  → pop {, match
```

```txt
Stack empty → Balanced
```

---

## 🧪 Dry Run (Invalid Case)

**Input**

```txt
([)]
```

**Execution**

```txt
( → push
[ → push
) → pop [, mismatch
```

```txt
Return false
```

---

## ✅ JavaScript Implementation

```js
class Solution {
    ispar(s) {
        let stack = [];

        const obj = {
            "{": "}",
            "[": "]",
            "(": ")"
        };

        for (let ch of s) {
            if (obj[ch]) {
                stack.push(ch);
            } else {
                if (stack.length === 0) return false;

                let top = stack.pop();
                if (obj[top] !== ch) {
                    return false;
                }
            }
        }

        return stack.length === 0;
    }
}
```

---

## ⏱ Complexity Analysis

```txt
Time Complexity  : O(n)
Space Complexity : O(n)
```

---

## ❌ Common Mistakes

```txt
- Using while(let ch of s) instead of for...of
- Popping from an empty stack
- Forgetting to check stack empty at the end
```

---

## 🎯 Interview One-Liners

```txt
- Balanced parentheses is a classic stack problem due to LIFO behavior
- Mapping object simplifies bracket matching logic
```

---

## 📌 Key Takeaway

```txt
If every closing bracket matches the most recent opening bracket
and the stack is empty at the end, the parentheses are balanced
```

