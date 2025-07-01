## 📘 JavaScript DSA Methods Cheat Sheet

### 🔷 1. Array Methods

| Method               | Description                                  |
|----------------------|----------------------------------------------|
| `map()`              | Transform every element → new array          |
| `filter()`           | Keep elements that satisfy condition         |
| `reduce()`           | Collapse array to single value               |
| `forEach()`          | Loop with side effects                       |
| `find()`             | First element that matches condition         |
| `some()`             | Any element passes condition?                |
| `every()`            | All elements pass condition?                 |
| `includes()`         | Check existence in array                     |
| `indexOf()`          | First index of element                       |
| `lastIndexOf()`      | Last index of element                        |
| `push()` / `pop()`   | Add/remove from end                          |
| `shift()` / `unshift()` | Add/remove from start                    |
| `slice()`            | Extract sub-array                            |
| `splice()`           | Insert/remove/replace in array               |
| `sort()`             | Sort array in-place                          |
| `reverse()`          | Reverse array in-place                       |
| `concat()`           | Merge arrays                                 |
| `join()`             | Convert array → string                       |
| `flat()` / `flatMap()`| Flatten nested arrays                      |
| `fill()`             | Fill with value                              |
| `Array.from()`       | Create array from iterable                   |
| `Array.isArray()`    | Check if value is an array                   |

---

### 🔷 2. String Methods

| Method               | Description                                  |
|----------------------|----------------------------------------------|
| `charAt()`           | Character at specific index                  |
| `slice()`            | Extract substring                            |
| `substring()`        | Similar to slice (no negative index)         |
| `includes()`         | Substring exists?                            |
| `startsWith()`       | Starts with prefix?                          |
| `endsWith()`         | Ends with suffix?                            |
| `indexOf()`          | First match index                            |
| `lastIndexOf()`      | Last match index                             |
| `toUpperCase()`      | Convert to uppercase                         |
| `toLowerCase()`      | Convert to lowercase                         |
| `trim()`             | Remove whitespace                            |
| `repeat()`           | Repeat string                                |
| `split()`            | Convert string → array                       |
| `replace()` / `replaceAll()` | Replace text                        |

---

### 🔷 3. Object Methods

| Method               | Description                                  |
|----------------------|----------------------------------------------|
| `Object.keys(obj)`   | Array of object keys                         |
| `Object.values(obj)` | Array of object values                       |
| `Object.entries(obj)`| Array of [key, value] pairs                  |
| `Object.assign()`    | Merge objects                                |
| `hasOwnProperty()`   | Check if key exists                          |
| Spread `...`         | Copy or merge objects                        |
| Destructuring        | Extract object properties                    |

---

### 🔷 4. Set Methods

| Method         | Description                                       |
|----------------|---------------------------------------------------|
| `new Set()`    | Create new Set                                    |
| `add()`        | Add element to Set                                |
| `has()`        | Check if value exists                             |
| `delete()`     | Remove value from Set                             |
| `size`         | Count of elements in Set                          |
| `Array.from()` | Convert Set → Array                               |

---

### 🔷 5. Map Methods

| Method           | Description                                     |
|------------------|-------------------------------------------------|
| `new Map()`      | Create new Map                                  |
| `set(key, val)`  | Add key-value pair                              |
| `get(key)`       | Get value by key                                |
| `has(key)`       | Key exists?                                     |
| `delete(key)`    | Remove key-value                                |
| `entries()`      | Loop through key-value pairs                    |

---

### 🔷 6. Math Methods

| Method             | Description                                    |
|--------------------|------------------------------------------------|
| `Math.max()`       | Largest number                                 |
| `Math.min()`       | Smallest number                                |
| `Math.floor()`     | Round down                                     |
| `Math.ceil()`      | Round up                                       |
| `Math.round()`     | Round to nearest                               |
| `Math.abs()`       | Absolute value                                 |
| `Math.pow(a, b)`   | a raised to b                                  |
| `Math.sqrt(x)`     | Square root                                    |
| `Math.random()`    | Random float between 0–1                       |

---

### 🔷 7. Number Methods

| Method               | Description                                  |
|----------------------|----------------------------------------------|
| `Number()`           | Convert to number                            |
| `parseInt()`         | Parse integer                                |
| `parseFloat()`       | Parse float                                  |
| `isNaN()`            | Not-a-number?                                |
| `toFixed(n)`         | Fix decimals (returns string)                |
| `Number.isInteger()` | Check if integer                             |

---

### 🔷 8. JSON Methods

| Method              | Description                                  |
|---------------------|----------------------------------------------|
| `JSON.stringify()`  | Convert object → JSON string                 |
| `JSON.parse()`      | Convert JSON string → object                 |

---

### 🔷 9. Date (Basic)

```js
const date = new Date();
date.getFullYear();       // e.g. 2025
date.getMonth();          // 0–11
date.getDate();           // 1–31
date.toISOString();       // 2025-06-30T...
date.toLocaleDateString(); // Localized string

### 🔷 10. Utility Functions




| Method            | Description                  |
| ----------------- | ---------------------------- |
| `typeof`          | Check data type              |
| `Array.isArray()` | Is value an array?           |
| `Boolean(val)`    | Convert to true/false        |
| `isNaN(val)`      | Is value NaN?                |
| `...spread`       | Copy/merge arrays or objects |
| `??` / `?.`       | Nullish & optional chaining  |
