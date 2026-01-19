# 🗑️ Delete Middle Element of a Stack

## 📌 Problem Statement
Given a stack `s`, delete the **middle element** of the stack **without using any additional data structure**.

- Middle element is calculated as:  
  **floor((size_of_stack + 1) / 2)** (1-based indexing from the **bottom**)
- Stack operations are allowed only from the **top**
- Use **recursion only**

---

## 🧠 Key Insight

- Stack elements can only be accessed from the **top**
- But the middle is defined from the **bottom**
- So we convert:
  
