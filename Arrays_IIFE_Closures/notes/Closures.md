A closure gives a function access to all the variables of its patents function, even after parent function has returned. The function keeps a reference to its outer scope, which preserves the scope chain throughout time.
closure = [function + its lexical environment (scope)].


We do NOT have to manually create closures, this is a javascript feature that happens automatically. We can't even access closed-over variables explicitly. A closure is NOT a tangible JavaScript object

How Closures Work (Step by Step):
1. Function inside a function → Inner function has access to outer function’s variables.
2. Scope chain → JavaScript looks for variables from inner → outer → global.
3. Closure is created → When the inner function is returned or used outside, it still keeps a reference to the variables it needs.

BASIC EXAMPLE:

function outer() {
  let count = 0; // outer function variable
  function inner() {
    count++;
    return count;
  }
  return inner;
}

const counter = outer(); // outer is executed
console.log(counter()); // 1
console.log(counter()); // 2
console.log(counter()); // 3
console.log(counter()); // 4

✅ Here, counter still has access to count even though outer() already finished execution. That’s a closure

let f;

const g = function () {
    const a = 21;
    f = function() {
        console.log(a * 23);
    }
}

g()
f()
