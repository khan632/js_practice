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

forEach():
Definition: Executes a provided function once for each array element, will not create new array run over existing ir given array
Syntax: array.forEach(callback(currentValue [, index [, array]])[, thisArg])
Example:
let arr = [1, 2, 3];
arr.forEach(element => console.log(element * 2));
// Output:
// 2
// 4
// 6

map():
Definition: Creates a new array populated with the results of calling a provided function on every element in the calling array.
Syntax: array.map(callback(currentValue [, index [, array]])[, thisArg])
Example:
let arr = [1, 2, 3];
let newArr = arr.map(element => element * 2);
console.log(newArr); // Output: [2, 4, 6]

polyfill:
function myMap(array, callback) {
  const result = [];
  for (let i = 0; i < array.length; i++) {
    if (Object.hasOwn(array, i)) {
      result.push(callback(array[i], i, array));
    }
  }
  return result;
}

filter():
- **Definition:** Creates a new array with all elements that pass the test implemented by the provided function.
- **Syntax:** `array.filter(callback(element [, index [, array]])[, thisArg])`
- **Example:**
  ```javascript
  let arr = [1, 2, 3, 4, 5];
  let newArr = arr.filter(element => element % 2 === 0);
  console.log(newArr); // Output: [2, 4]

reduce():
Definition: Executes a reducer function on each element of the array, resulting in a single output value.
Syntax: array.reduce(callback(accumulator, currentValue[, index, array])[, initialValue])
Example:
let arr = [1, 2, 3, 4];
let sum = arr.reduce((acc, curr) => acc + curr);
console.log(sum); // Output: 10

reduceRight():
Definition: Similar to reduce(), but applies the function from right to left instead of left to right.
Syntax: array.reduceRight(callback(accumulator, currentValue[, index, array])[, initialValue])
Example:
let arr = ['a', 'b', 'c', 'd'];
let concat = arr.reduceRight((acc, curr) => acc + curr);
console.log(concat); // Output: 'dcba'

find():
- **Definition:** Returns the value of the first element in the array that satisfies the provided testing function. Otherwise, it returns undefined.
- **Syntax:** array.find(callback(element [, index [, array]])[, thisArg])
- **Example:**
let arr = [5, 12, 8, 130, 44];
let found = arr.find(element => element > 10);
console.log(found); // Output: 12

findIndex():
Definition: Returns the index of the first element in the array that satisfies the provided testing function. Otherwise, it returns -1.
Syntax: array.findIndex(callback(element [, index [, array]])[, thisArg])
Example:
let arr = [5, 12, 8, 130, 44];
let foundIndex = arr.findIndex(element => element > 10);
console.log(foundIndex); // Output: 1

every():
Definition: Tests whether all elements in the array pass the test implemented by the provided function. It returns a Boolean value.
Syntax: array.every(callback(element [, index [, array]])[, thisArg])
Example:
let arr = [30, 40, 50, 60];
let allOver20 = arr.every(element => element > 20);
console.log(allOver20); // Output: true

some();
Definition: Tests whether at least one element in the array passes the test implemented by the provided function. It returns a Boolean value.
Syntax: array.some(callback(element [, index [, array]])[, thisArg])
Example:
let arr = [10, 20, 30, 40, 50];
let someOver30 = arr.some(element => element > 30);
console.log(someOver30); // Output: true

include():
Definition: Determines whether an array includes a certain value among its entries, returning true or false as appropriate.
Syntax: array.includes(valueToFind [, fromIndex])
Example:
let arr = [1, 2, 3];
let includesTwo = arr.includes(2);
console.log(includesTwo); // Output: true

indexOf():
Definition: Returns the first index at which a given element can be found in the array, or -1 if it is not present.
Syntax: array.indexOf(searchElement [, fromIndex])
Example:
let arr = [2, 9, 9];
let index = arr.indexOf(9);
console.log(index); // Output: 1

join():
Definition: Creates and returns a new string by concatenating all of the elements in an array, separated by commas or a specified separator string.
Syntax: array.join(separator)
Example:
let arr = ['Hello', 'World'];
let str = arr.join(' ');
console.log(str); // Output: 'Hello World'

sort():
Definition: Sorts the elements of an array in place and returns the sorted array.
Syntax: array.sort([compareFunction])
Example:
let arr = [5, 2, 1, 4, 3];
arr.sort((a, b) => a - b);
console.log(arr); // Output: [1, 2, 3, 4, 5]

toString():
Definition: Returns a string representing the specified array and its elements.
Syntax: array.toString()
Example:
let arr = [1, 2, 3];
let str = arr.toString();
console.log(str); // Output: '1,2,3'

flat():
Definition: Creates a new array with all sub-array elements concatenated into it recursively up to the specified depth.
Syntax: array.flat([depth])
Example:
let arr = [1, 2, [3, 4, [5, 6]]];
let flatArr = arr.flat(2);
console.log(flatArr); // Output: [1, 2, 3, 4, 5, 6]

flatMap():
Definition: First maps each element using a mapping function, then flattens the result into a new array.
Syntax: array.flatMap(callback(currentValue[, index[, array]])[, thisArg])
Example:
let arr = [1, 2, 3];
let mappedArr = arr.flatMap(x => [x * 2]);
console.log(mappedArr); // Output: [2, 4, 6]

isArray():
Definition: Determines whether the passed value is an Array.
Syntax: Array.isArray(value)
Example:
let arr = [1, 2, 3];
console.log(Array.isArray(arr)); // Output: true

fill():
Definition: Fills all the elements of an array from a start index to an end index with a static value.
Syntax: array.fill(value[, start[, end]])
Example:
let arr = [1, 2, 3, 4, 5];
arr.fill(0, 2, 4);
console.log(arr); // Output: [1, 2, 0, 0, 5]

keys():
Definition: Returns a new Array Iterator object that contains the keys for each index in the array.
Syntax: array.keys()
Example:
let arr = ['a', 'b', 'c'];
let iterator = arr.keys();
for (let key of iterator) {
  console.log(key); // Output: 0, 1, 2
}

values():
the array.
Syntax: array.values()
Example:
let arr = ['a', 'b', 'c'];
let iterator = arr.values();
for (let value of iterator) {
  console.log(value); // Output: 'a', 'b', 'c'
}

from():
Definition: Creates a new, shallow-copied Array instance from an array-like or iterable object.
Syntax: Array.from(arrayLike[, mapFn[, thisArg]])
Example:
let arrLike = 'hello';
let newArr = Array.from(arrLike);
console.log(newArr); // Output: ['h', 'e', 'l', 'l', 'o']

lastIndexOf():
Definition: Returns the last index at which a given element can be found in the array, or -1 if it is not present. Searches the array from a specified index if provided.
Syntax: array.lastIndexOf(searchElement[, fromIndex])
Example:
let arr = [2, 9, 9, 4, 6];
let index = arr.lastIndexOf(9);
console.log(index); // Output: 2

groupBy():
Definition: The Object.groupBy() static method groups the elements of a given iterable according to the string values returned by a provided callback function. The returned object has separate properties for each group, containing arrays with the elements in the group.
Syntax: Object.groupBy(items, callbackFn)
Example:
const inventory = [
  { name: "asparagus", type: "vegetables", quantity: 9 },
  { name: "bananas", type: "fruit", quantity: 5 },
  { name: "goat", type: "meat", quantity: 23 },
  { name: "cherries", type: "fruit", quantity: 12 },
  { name: "fish", type: "meat", quantity: 22 },
];

const result = Object.groupBy(inventory, ({ quantity }) =>
  quantity < 6 ? "restock" : "sufficient",
);
console.log(result.restock);
// [{ name: "bananas", type: "fruit", quantity: 5 }]
