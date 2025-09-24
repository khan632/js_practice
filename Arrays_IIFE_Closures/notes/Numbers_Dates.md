log(23 === 23.0) --> true

// Conversion 
log(Number('23')) --> 23
log(+('23')) --> 23

//Parsing: convert into number and remove extra jargons but it will only remove jargon when string start with number
log(Number.parseInt('23px')) --> 23
log(Number.parseInt('e23px')) --> NaN
log(Number.parseInt(' 23px  ')) --> 23
log(Number.parseInt('2.3rem')) --> 2
log(Number.parseFloat('2.3rem')) --> 2.3

// we can also write only parseInt or parseFloat without using Number object

// check for value is not a number
log(isNaN('23')) --> false
log(isNaN(23)) --> false
log(isNaN(+'23')) --> true
log(isNaN(23/0)) --> false

// Check for value is a number
log(isFinite(23/0)) --> false
log(isFinite(23)) --> true


// find square root or cubic root
log(Math.sqrt(25)) --> 5
log(25 ** (1/2)) --> 5
log(8 ** (1/3)) --> 2 for cubic root this is only method

//find max and min, this method work as type conversion but not as parsing
log(Math.max(1, 2, 3, 22, 12)) --> 22
log(Math.max(1, 2, 3, "22", 12)) --> 22
log(Math.max(1, 2, 3, "22px", 12)) --> NaN
log(Math.min(1, 2, 3, "22", 12)) --> 1

// find area of circle
log(Math.PI * Number.parseFloat('10px') ** 2) // ans

// generate random number between given range
const randomNumber = (min,max) => Math.floor(Math.random()) * (max - min + 1) + min;

// Rounding decimals --> it give output in string
log((2.5).toFixed(0)) --> "2"
log((2.555).toFixed(2)) --> "2.55"
log((2.555).toFixed(2)) --> "2.55"

//Number separator:
log(233_444_000_900) --> 233444000900
log(Number(233_444_111)) -->NaN only work with numbers and seprator should in between numbers

Maximum a js can save as number is (2 ** 53 - 1) === Number.MAX_SAFE_INTEGER

//bigInt
write n in the end of number will convert this into bigint
log(2637861329693123n) //2637861329693123n 
all mathematical operation valid on bigint as well

// Create date

1. using Date method

log(new Date()) --> gives you todays day with all time detail
log(new Date('Aug 02 2020 18:05:41)) // also give you date and day and month detail

log(new Date(2037, 10, 19, 15, 23, 5)) // Sept 19 2037 15:23:05
log(new Date(0)) --> current date
log(new Date(3 * 24 * 60 * 60 * 1000)) // give you date of third day from now on


// working with dates
const future = new Date(2037, 10, 19, 15, 23, 5)

log(future.getFullYear()) --> 2037
log(future.getMonth()) --> 10
log(future.getDate()) --> 19
log(future.getDay()) --> 4
log(future.getHours()) --> 15
log(future.getMinutes()) --> 23
log(future.getSeconds()) --> 0
log(future.toISOString()) --> standard International date: 2037-11-29T15:23:00.000Z
log(future.getTime()) --> get date in milisecond from 1970




