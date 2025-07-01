
# 📘 JavaScript Array Methods — Cheat Sheet

## 🔁 Iteration & Transformation

| Method | Description | Example |
|--------|-------------|---------|
| `map()` | Transforms each element and returns a **new array** | `arr.map((e) => e * 2)` |
| `forEach()` | Executes a function for each element (**no return**) | `arr.forEach(e => console.log(e))` |
| `filter()` | Filters elements based on a condition → **new array** | `arr.filter(e => e > 5)` |
| `reduce()` | Reduces array to a single value | `arr.reduce((acc, e) => acc + e, 0)` |
| `flatMap()` | Map + Flatten (depth 1) | `arr.flatMap(e => [e * 2])` |

## 🔍 Searching

| Method | Description | Example |
|--------|-------------|---------|
| `find()` | Returns **first element** that matches condition | `arr.find(e => e > 10)` |
| `some()` | Returns `true` if **any** element matches | `arr.some(e => e > 10)` |
| `every()` | Returns `true` if **all** elements match | `arr.every(e => e > 10)` |
| `includes()` | Checks if element exists | `arr.includes(5)` |
| `indexOf()` | First index of element | `arr.indexOf(5)` |
| `lastIndexOf()` | Last index of element | `arr.lastIndexOf(5)` |

## 🛠️ Modifying Arrays (Mutates Original)

| Method | Description | Example |
|--------|-------------|---------|
| `push()` | Add to end, returns new length | `arr.push(4)` |
| `pop()` | Remove from end, returns element | `arr.pop()` |
| `unshift()` | Add to start, returns new length | `arr.unshift(1)` |
| `shift()` | Remove from start | `arr.shift()` |
| `splice()` | Add/remove elements at index | `arr.splice(1, 2, 'a')` |
| `sort()` | Sorts array in-place | `arr.sort((a, b) => a - b)` |
| `reverse()` | Reverses array in-place | `arr.reverse()` |
| `fill()` | Fills with static value | `arr.fill(0, 1, 3)` |

## 🧱 Copying & Slicing

| Method | Description | Example |
|--------|-------------|---------|
| `slice()` | Copies portion (non-mutating) | `arr.slice(1, 4)` |
| `concat()` | Combines arrays into new one | `arr.concat([4, 5])` |
| `flat()` | Flattens nested arrays | `arr.flat(2)` |

## 🧪 Utility

| Method | Description | Example |
|--------|-------------|---------|
| `Array.from()` | Converts iterable/array-like to array | `Array.from('abc')` |
| `Array.isArray()` | Checks if value is array | `Array.isArray([])` |
| `join()` | Converts array to string | `arr.join('-')` |
| `entries()` | Returns iterator [index, value] | `for (let [i, v] of arr.entries())` |
| `keys()` | Iterator of keys (indexes) | `for (let k of arr.keys())` |
| `values()` | Iterator of values | `for (let v of arr.values())` |
