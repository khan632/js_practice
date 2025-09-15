Push():
Definition: Adds one or more elements to the end of an array and returns the new length of the array.
Syntax: array.push(element1[, ...[, elementN]])
Example:
let arr = [1, 2, 3];
arr.push(4, 5);
console.log(arr); // Output: [1, 2, 3, 4, 5]

Pop():
Definition: Removes the last element from an array and returns that element.
Syntax: array.pop()
Example:
let arr = [1, 2, 3];
let removedElement = arr.pop();
console.log(removedElement); // Output: 3
console.log(arr); // Output: [1, 2]

shift():
Definition: Removes the first element from an array and returns that element, update the original array.
Syntax: array.shift()
Example:
let arr = [1, 2, 3];
let shiftedElement = arr.shift();
console.log(shiftedElement); // Output: 1
console.log(arr); // Output: [2, 3]


unshift():
Definition: Adds one or more elements to the beginning of an array and returns the new length of the array.
Syntax: array.unshift(element1[, ...[, elementN]])
Example:
let arr = [2, 3];
arr.unshift(0, 1);
console.log(arr); // Output: [0, 1, 2, 3]

concat():
Definition: Returns a new array comprised of the array on which it is called joined with the array(s) and/or value(s) provided as arguments.
Syntax: array.concat(value1[, value2[, ...[, valueN]]])
Example:
let arr1 = [1, 2];
let arr2 = [3, 4];
let newArr = arr1.concat(arr2);
console.log(newArr); // Output: [1, 2, 3, 4]

slice():
Definition: Returns a shallow copy of a portion of an array into a new array object selected from begin to end (end not included) where begin and end represent the index of items in that array.
Syntax: array.slice(begin[, end])
Example:
let arr = [1, 2, 3, 4, 5];
let newArr = arr.slice(1, 3);
console.log(newArr); // Output: [2, 3]
console.log(arr); // Output: [1, 2, 3, 4, 5]

splice();
Definition: Changes the contents of an array by removing or replacing existing elements and/or adding new elements in place.
Syntax: array.splice(start[, deleteCount[, item1[, item2[, ...]]]])
Example:
let arr = [1, 2, 3, 4, 5];
arr.splice(1, 2, 'a', 'b');
console.log(arr); // Output: [1, 'a', 'b', 4, 5]
console.log(arr.splice(-1)); // Output: [5]
console.log(arr); // Output: [1, 'a', 'b', 4];


