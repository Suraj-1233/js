# 🗑️ Delete Middle Element of a Stack (Without Extra Space)

## 📌 Problem Statement
Given a stack `s`, delete the **middle element** of the stack **without using any additional data structure**.

### Middle Element Definition
- Middle = `floor((size_of_stack + 1) / 2)`
- Indexing is **1-based from the bottom** of the stack.

> **Note:** Output is shown **from top to bottom**.

---

## 🧩 Examples

### Example 1
**Input:**  
`s = [10, 20, 30, 40, 50]`

**Explanation:**  
- Size = 5  
- Middle from bottom = `floor((5 + 1) / 2) = 3` → element `30`  
- After deletion: `{10, 20, 40, 50}`

**Output (top → bottom):**  
`[50, 40, 20, 10]`

---

### Example 2
**Input:**  
`s = [10, 20, 30, 40]`

**Explanation:**  
- Size = 4  
- Middle from bottom = `floor((4 + 1) / 2) = 2` → element `20`  
- After deletion: `{10, 30, 40}`

**Output (top → bottom):**  
`[40, 30, 10]`

---

## ⚠️ Constraints
- `2 ≤ s.size() ≤ 10^4`
- No extra data structure allowed

---

## 🧠 Core Insight (VERY IMPORTANT)

- Stack operations are **only from the top**
- But the **middle is defined from the bottom**
- So we **convert the middle index** from bottom → top

### ✅ Index Conversion Formula
