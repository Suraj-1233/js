
# JavaScript and CSS Interview Questions with Examples

## 1. Capitalize Words in a String
**Input:** `" hello world"`  
**Output:** `"Hello World"`

### Example:
```javascript
function capitalizeWords(str) {
  return str.trim().split(" ").map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(" ");
}

console.log(capitalizeWords(" hello world")); // "Hello World"
```

---

## 2. `this` in Object Methods and Arrow Functions
```javascript
const shape = {
  radius: 10,
  diameter() {
    return this.radius * 2;
  },
  perimeter: () => 2 * Math.PI * this.radius,
};

console.log(shape.diameter()); // 20
console.log(shape.perimeter()); // NaN (arrow function doesn't bind `this` to object)
```

**Explanation:**  
- `diameter()` is a normal function, `this` refers to `shape` object.  
- `perimeter` is an arrow function, `this` refers to outer lexical scope (not `shape`).

---

## 3. Object Reference
```javascript
let c = { greeting: "Hey!" };
let d;
d = c;
d.greeting = "Hello";
console.log(c.greeting); // "Hello"
```

**Explanation:** Objects are reference types. `d` points to the same memory as `c`.

---

## 4. Spread Operator with Objects Inside Arrays
```javascript
let obj1 = { a: 2 };
let arr1 = [1, obj1, 3];
let arr2 = [...arr1];
arr2[1].a = 100;
console.log(arr1[1].a); // 100
```

**Explanation:** Spread copies the array but not nested objects (shallow copy).

---

## 5. Hoisting with `var` and `let`
```javascript
function sayHi() {
  console.log(name);
  console.log(age);
  var name = "Lydia";
  let age = 21;
}

sayHi();
// Output:
// undefined
// ReferenceError: Cannot access 'age' before initialization
```

**Explanation:**  
- `var` is hoisted and initialized as `undefined`.  
- `let` is hoisted but in TDZ (Temporal Dead Zone).

---

## 6. CSS Specificity
```css
p.text-color {
  color: yellow;
}
#hello {
  color: green;
}
.text-color#hello {
  color: orange;
}
p#hello {
  color: red;
}
```
```html
<p id="hello" class="text-color">Hello</p>
```

**Output:** Text will be **red** because `p#hello` has highest specificity.

---

## 7. Closure Example
```javascript
function outer() {
  let count = 0;
  return function inner() {
    count++;
    console.log(count);
  };
}

const counter = outer();
counter(); // 1
counter(); // 2
```

**Explanation:** Inner function keeps access to variables of outer function even after outer finishes.

---

## 8. Difference between `defer` and `async` in `<script>`

- **async**: Script is downloaded in parallel and executed immediately when ready (doesn't wait for HTML parsing).  
- **defer**: Script is downloaded in parallel but executed after HTML parsing completes.

### Example:
```html
<script src="script.js" async></script>
<script src="script.js" defer></script>
```

---

## 9. Vendor Prefix in CSS
Used for experimental or non-standard CSS properties to ensure cross-browser support.

### Example:
```css
.box {
  -webkit-transform: rotate(45deg); /* Safari, Chrome */
  -moz-transform: rotate(45deg);    /* Firefox */
  -ms-transform: rotate(45deg);     /* IE */
  transform: rotate(45deg);         /* Standard */
}
```

---
