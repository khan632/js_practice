IIFE(Immediately Invoked Function Expression):
An IIFE is a function in JavaScript that runs immediately after it is defined.

example: 
(function() {
  console.log("IIFE runs immediately!");
})();

(() => console.log("IIFE arrow fn run immediately))();

Why use an IIFE?

1. Avoid polluting the global scope
→ Variables inside an IIFE are private and can’t be accessed outside.

2. Execute code immediately
→ Useful for initialization logic.

3. Encapsulation
→ Helps in creating modules or protecting data.

