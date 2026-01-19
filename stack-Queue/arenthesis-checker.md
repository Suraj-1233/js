
# ✅ Parenthesis Checker (Using Stack)

## 📌 Problem Statement
Given a string `s` consisting of parentheses:



( ) { } [ ]


Check whether the parentheses are **balanced**.

A string is **balanced** if:
- Every opening bracket has a matching closing bracket
- Brackets are closed in the **correct order**

---

## 🧩 Examples

### Example 1
**Input**


s = "{([])}"

**Output**


true


---

### Example 2
**Input**


s = "([)]"

**Output**


false


---

### Example 3
**Input**


s = "{[()]}[]"

**Output**


true


---

## ⚠️ Constraints
- `1 ≤ s.length ≤ 10^5`
- String contains only `()[]{}`

---

## 🧠 Key Insight (Why Stack?)
- Stack follows **LIFO (Last In First Out)**
- The **last opening bracket** must be closed **first**
- Hence, stack is the perfect data structure

---

## 🔑 Bracket Mapping (IMPORTANT)

Instead of hardcoding comparisons, we use a **mapping object**:

```js
let obj = {
    "{": "}",
    "[": "]",
    "(": ")"
};

🔄 Approach (Step-by-Step)

Initialize an empty stack

Traverse the string character by character

If character is an opening bracket (( { [):

Push it into the stack

If character is a closing bracket:

If stack is empty → return false

Pop top element from stack

Check if obj[top] === current bracket

After traversal:

If stack is empty → return true

Else → return false

🧪 Dry Run
Input
s = "{([])}"

Execution
{  → push
(  → push
[  → push
]  → pop [, match ✅
)  → pop (, match ✅
}  → pop {, match ✅


Stack empty → Balanced

❌ Invalid Case Dry Run
Input
s = "([)]"

( → push
[ → push
) → pop [, mismatch ❌


Return false

✅ JavaScript Implementation (GFG / Node.js Safe)
class Solution {
    ispar(s) {
        let stack = [];

        let obj = {
            "{": "}",
            "[": "]",
            "(": ")"
        };

        for (let ch of s) {

            // If opening bracket, push to stack
            if (obj[ch]) {
                stack.push(ch);
            }
            // If closing bracket
            else {
                if (stack.length === 0) return false;

                let top = stack.pop();

                // Check matching pair
                if (obj[top] !== ch) {
                    return false;
                }
            }
        }

        // Stack must be empty for balanced parentheses
        return stack.length === 0;
    }
}

⏱ Time & Space Complexity
Type	Complexity
Time	O(n)
Space	O(n)
❌ Common Mistakes

❌ Using while (let ch of s) instead of for...of

❌ Popping from empty stack

❌ Forgetting to check stack empty at the end

❌ Hardcoding bracket comparisons

🎯 Interview One-Liners

“Balanced parentheses can be checked using a stack because matching requires LIFO order.”

“A mapping object simplifies bracket matching and avoids multiple condition checks.”
