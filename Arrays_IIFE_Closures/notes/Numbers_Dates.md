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



