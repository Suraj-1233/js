
# 📘 JavaScript Array Methods — Cheat Sheet with Syntax & Examples

---

## 🔁 Iteration & Transformation

### `map()`
**Syntax:** `array.map((element, index, array) => newElement)`  
**Example:** 
```js
const nums = [1, 2, 3];
const squares = nums.map(n => n * n); // [1, 4, 9]
```
**Explanation:**

- Creates a new array by applying the function to each element.
- Does NOT modify the original array.
- Each callback gets:
  - element: current item in the array
  - index: position of the item
  - array: the original array
  
**Notes 📝:**

-   If your callback doesn’t return a value, the result will be undefined
  ```js
[1, 2, 3].map(n => {}); // [undefined, undefined, undefined]
```
  


### `forEach()`
**Syntax:** `array.forEach((element, index, array) => { ... })`     
   
**🧠 Parameters:**    
| Parameter | Description                                         |
| --------- | --------------------------------------------------- |
| `element` | The current item in the array                       |
| `index`   | (Optional) The index of the current item            |
| `array`   | (Optional) The array that `forEach()` was called on |

**Example:**
```js
[1, 2, 3].forEach(n => console.log(n));
```
**Explanation:**  
- forEach() executes the function once for each element. 
- It does not return a value.
- It is used for side-effects only (e.g., logging, updating variables). 
- Cannot be chained
**Important Notes 📝:**    
 - You can’t use break, continue, or return to exit early from a forEach() loop (unlike for, while)     
 - Chainable:A method is chainable if it returns a value (usually a new array or object), so that you can call another method directly after it.    

**🆚 forEach() vs map()**      

| Feature         | `forEach()`       | `map()`               |
| --------------- | ----------------- | --------------------- |
| Purpose         | Side effects only | Transform data        |
| Returns         | `undefined`       | New transformed array |
| Chainable       | ❌ No              | ✅ Yes                |
| Modifies array? | ❌ No              | ❌ No                 |


### `filter()`
**Syntax:** `array.filter((element, index, array) => condition)`  
**Example:**
```js
const evens = [1, 2, 3, 4].filter(n => n % 2 === 0); // [2, 4]
```

### `reduce()`
**Syntax:** `array.reduce((accumulator, currentValue, index, array) => newAccumulator, initialValue)`  
**Example:**
```js
const sum = [1, 2, 3].reduce((acc, val) => acc + val, 0); // 6
```

### `flatMap()`
**Syntax:** `array.flatMap((element, index, array) => newArray)`  
**Example:**
```js
const nums = [1, 2];
const result = nums.flatMap(n => [n, n * 2]); // [1, 2, 2, 4]
```

---

## 🔍 Searching

### `find()`
**Syntax:** `array.find((element, index, array) => condition)`  
**Example:**
```js
const found = [5, 12, 8].find(n => n > 10); // 12
```

### `some()`
**Syntax:** `array.some((element, index, array) => condition)`  
**Example:**
```js
[1, 2, 3].some(n => n > 2); // true
```

### `every()`
**Syntax:** `array.every((element, index, array) => condition)`  
**Example:**
```js
[2, 4, 6].every(n => n % 2 === 0); // true
```

### `includes()`
**Syntax:** `array.includes(searchElement, fromIndex)`  
**Example:**
```js
[1, 2, 3].includes(2); // true
```

### `indexOf()`
**Syntax:** `array.indexOf(searchElement, fromIndex)`  
**Example:**
```js
[1, 2, 3, 2].indexOf(2); // 1
```

### `lastIndexOf()`
**Syntax:** `array.lastIndexOf(searchElement, fromIndex)`  
**Example:**
```js
[1, 2, 3, 2].lastIndexOf(2); // 3
```

---

## 🛠️ Modifying Arrays

### `push()`
**Syntax:** `array.push(element1, element2, ...)`  
**Example:**
```js
let arr = [1];
arr.push(2); // [1, 2]
```

### `pop()`
**Syntax:** `array.pop()`  
**Example:**
```js
let arr = [1, 2];
arr.pop(); // returns 2, arr is [1]
```

### `unshift()`
**Syntax:** `array.unshift(element1, element2, ...)`  
**Example:**
```js
let arr = [2];
arr.unshift(1); // [1, 2]
```

### `shift()`
**Syntax:** `array.shift()`  
**Example:**
```js
let arr = [1, 2];
arr.shift(); // returns 1, arr is [2]
```

### `splice()`
**Syntax:** `array.splice(start, deleteCount, item1, item2, ...)`  
**Example:**
```js
let arr = [1, 2, 3];
arr.splice(1, 1, 4); // [1, 4, 3]
```

### `sort()`
**Syntax:** `array.sort((a, b) => a - b)`  
**Example:**
```js
[3, 1, 2].sort((a, b) => a - b); // [1, 2, 3]
```
**Explanation:**

- `a - b > 0`: `b` comes before `a` (swap them)
- `a - b < 0`: `a` comes before `b`
- `a - b === 0`: keep original order
  
**Notes 📝:**

-  This method changes the original array
  


### `reverse()`
**Syntax:** `array.reverse()`  
**Example:**
```js
[1, 2, 3].reverse(); // [3, 2, 1]
```

### `fill()`
**Syntax:** `array.fill(value, start, end)`  
**Example:**
```js
[1, 2, 3].fill(0, 1, 3); // [1, 0, 0]
```

---

## 🧱 Copying & Slicing

### `slice()`
**Syntax:** `array.slice(start, end)`  
**Example:**
```js
[1, 2, 3, 4].slice(1, 3); // [2, 3]
```

### `concat()`
**Syntax:** `array.concat(array2, array3, ...)`  
**Example:**
```js
[1].concat([2, 3]); // [1, 2, 3]
```

### `flat()`
**Syntax:** `array.flat(depth)`  
**Example:**
```js
[1, [2, [3]]].flat(2); // [1, 2, 3]
```

---

## 🧪 Utility

### `Array.from()`
**Syntax:** `Array.from(iterable)`  
**Example:**
```js
Array.from('abc'); // ['a', 'b', 'c']
```

### `Array.isArray()`
**Syntax:** `Array.isArray(value)`  
**Example:**
```js
Array.isArray([1, 2]); // true
```

### `join()`
**Syntax:** `array.join(separator)`  
**Example:**
```js
[1, 2, 3].join('-'); // "1-2-3"
```

### `entries()`
**Syntax:** `array.entries()`  
**Example:**
```js
for (let [i, v] of ['a', 'b'].entries()) {
  console.log(i, v); // 0 'a', 1 'b'
}
```

### `keys()`
**Syntax:** `array.keys()`  
**Example:**
```js
for (let key of ['a', 'b'].keys()) {
  console.log(key); // 0, 1
}
```

### `values()`
**Syntax:** `array.values()`  
**Example:**
```js
for (let val of ['a', 'b'].values()) {
  console.log(val); // 'a', 'b'
}
```
