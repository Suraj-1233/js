
# JavaScript Full Revision Notes (Theory + Coding + Interview Questions)

## ✅ 1. var vs let vs const
- **var:** Function scoped, hoisted as undefined, can re-declare & reassign.
- **let:** Block scoped, hoisted in TDZ, can reassign but not re-declare.
- **const:** Block scoped, hoisted in TDZ, cannot reassign or re-declare.

```js
var a = 10;
let b = 20;
const c = 30;
```

---

## ✅ 2. Hoisting
- JS moves declarations to top of scope before execution.
- `var` → hoisted as undefined
- `let`/`const` → hoisted but in Temporal Dead Zone
- Functions declarations are fully hoisted.

```js
console.log(a); // undefined
var a = 5;

console.log(b); // ReferenceError
let b = 5;
```

---

## ✅ 3. Closures
- Function + its lexical scope bundle.
- Allows private variables.

```js
function outer() {
  let count = 0;
  return function inner() {
    count++;
    console.log(count);
  }
}
const counter = outer();
counter(); // 1
counter(); // 2
```

---

## ✅ 4. null vs undefined
- **undefined:** Variable declared but not assigned (JS default)
- **null:** Intentional absence of value (developer sets)
- Both are falsy.

```js
let a;
console.log(a); // undefined

let b = null;
console.log(b); // null
```

---

## ✅ 5. Type Coercion
- JS automatically converts types when needed.

```js
console.log(5 + "5"); // "55" (number -> string)
console.log("5" - 2); // 3   (string -> number)
console.log(Boolean("")); // false
```

---

## ✅ 6. Arrow Functions vs Normal Functions
- Short syntax
- No own `this`, takes from parent scope
- No `arguments` object
- Cannot be used as constructors

```js
const add = (a, b) => a + b;
```

---

## ✅ 7. Template Literals
- Backticks `` ` `` with `${}` interpolation and multi-line support.

```js
const name = "Suraj";
console.log(`Hello, ${name}!`);
```

---

## ✅ 8. Function Scope vs Block Scope
- **Function scope:** `var`
- **Block scope:** `let`, `const`

```js
if(true){
  var x = 10;
  let y = 20;
}
console.log(x); // 10
console.log(y); // ReferenceError
```

---

## ✅ 9. Higher-Order Functions
- Function that takes or returns another function.

```js
function greet(name) {
  return `Hello, ${name}`;
}

function processUser(name, callback) {
  console.log(callback(name));
}
processUser("Suraj", greet);
```

---

## ✅ 10. Callback Functions
- Function passed into another function to execute later.

```js
setTimeout(() => console.log("Callback!"), 1000);
```

---

## ✅ 11. Pure Functions
- Same input → same output, no side effects.

```js
function add(a,b){ return a+b; }
```

---

## ✅ 12. Clone an Object
- **Shallow:** `Object.assign({}, obj)` or `{ ...obj }`
- **Deep:** `structuredClone(obj)` or `JSON.parse(JSON.stringify(obj))`

---

## ✅ 13. Merge Arrays without Duplicates
```js
const arr1 = [1,2], arr2 = [2,3];
const merged = [...new Set([...arr1, ...arr2])];
```

---

## ✅ 14. Destructuring
```js
const [a,b] = [1,2];
const {name, age} = {name:"Suraj", age:25};
```

---

## ✅ 15. Synchronous vs Asynchronous
- **Sync:** Runs line by line, blocking.
- **Async:** Non-blocking, uses Event Loop.

```js
console.log("A");
setTimeout(()=>console.log("B"),0);
console.log("C");
// A C B
```

---

## ✅ 16. Event Loop & Call Stack
- Call Stack executes sync code.
- Event Loop moves callbacks from queues when stack is empty.

---

## ✅ 17. Promises & async/await
```js
new Promise((res) => res(10))
  .then(v => console.log(v));

async function test() {
  const data = await Promise.resolve(20);
  console.log(data);
}
```

---

## ✅ 18. setTimeout Internals
- Uses Web API & Callback Queue, executed after stack clears.

---

## ✅ 19. Microtask vs Macrotask
- **Microtasks:** Promise.then, queueMicrotask (higher priority)
- **Macrotasks:** setTimeout, setInterval

---

## ✅ 20. ES6 Modules
```js
// math.js
export const add = (a,b)=>a+b;

// app.js
import {add} from './math.js';
```

---

## ✅ 21. Spread vs Rest
- **Spread:** Unpack values
- **Rest:** Pack multiple values into array

```js
const arr = [1,2,3];
console.log([...arr]);

function sum(...nums){}
```

---

## ✅ 22. Map, Set, WeakMap, WeakSet
- **Map:** Key-value (any type key)
- **Set:** Unique values
- **WeakMap:** Object keys, GC safe
- **WeakSet:** Unique objects, GC safe

---

## ✅ 23. DOM Manipulation
- `querySelector`, `getElementById`
- `textContent`, `innerHTML`
- `createElement`, `appendChild`
- `addEventListener`

---

## ✅ 24. Event Delegation
- Attach listener to parent, use event bubbling.

```js
parent.addEventListener("click", e => {
  if(e.target.tagName==="LI"){}
});
```

---

## ✅ 25. localStorage vs sessionStorage vs Cookies
- **localStorage:** Persistent, ~5MB
- **sessionStorage:** Per tab, ~5MB
- **Cookies:** Small (~4KB), sent to server

---

## ✅ 26. Prototypal Inheritance
- Objects inherit via `__proto__` / prototype chain.

```js
const parent = { greet(){console.log("hi")} };
const child = Object.create(parent);
child.greet();
```

---

## ✅ 27. this Keyword Contexts
- Global, function, object, arrow, constructor, call/apply/bind.

---

## ✅ 28. Currying
```js
const add = a => b => c => a+b+c;
console.log(add(1)(2)(3));
```

---

## ✅ 29. Memoization
```js
function memo(fn){
  const cache={};
  return function(n){
    if(n in cache) return cache[n];
    return cache[n]=fn(n);
  }
}
```

---

## ✅ 30. Generators
```js
function* gen(){
  yield 1;
  yield 2;
}
const g = gen();
console.log(g.next().value);
```

---

## ✅ 31. Debouncing & Throttling
- **Debounce:** Run after user stops triggering.
- **Throttle:** Run at fixed intervals.

---

## ✅ 32. Garbage Collection
- JS uses reachability, Mark-and-Sweep algorithm.

---

## ✅ 33. Coding Problems
- Reverse array/string
- Flatten nested array/object
- Two sum problem
- First non-repeating char
- FizzBuzz
- Implement debounce/throttle
- Implement memoization
- Currying
- Match two strings (case-sensitive/insensitive)

---

## ✅ 34. CarWale Interview Notes
- Solved medium JS question using `reduce`
- Used `const arr=[]` and `const arr=new Array()`
- Answered React scroll question
- Possible rejection due to expected approach
