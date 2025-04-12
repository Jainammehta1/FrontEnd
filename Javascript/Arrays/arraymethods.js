//Array methods
//Push():Adds an item to end with example
let numbers = [1, 2, 3];
numbers.push(4);
console.log(numbers); // [1, 2, 3, 4]

//Pop():Removes the last item with example
let numbers1 = [1, 2, 3];
numbers1.pop();
console.log(numbers1); // [1, 2]

//Shift():Removes the first item with example
let numbers2 = [1, 2, 3];
numbers2.shift();
console.log(numbers2); // [2, 3]

//Unshift():Adds an item to the beginning with example
let numbers3 = [1, 2, 3];
numbers3.unshift(0);
console.log(numbers3); // [0, 1, 2, 3]

//tostring()
let numbers4 = [1, 2, 3];
console.log(numbers4.toString()); // "1,2,3"

//concat
let numbers5 = [1, 2, 3];
let numbers6 = [4, 5, 6];
console.log(numbers5.concat(numbers6)); // [1, 2, 3, 4,5,6]

//slice()
let numbers7 = [1, 2, 3, 4, 5];
console.log(numbers7.slice(1, 3)); // [2, 3]

//splice() add remove and replace
let numbers8 = [1, 2, 3, 4, 5];
console.log(numbers8.splice(1, 2)); // [2, 3]
console.log(numbers8); // [1, 4, 5]

//replace eleement
let numbers9 = [1, 2, 3, 4, 5];
numbers9.splice(1, 1, 10);
console.log(numbers9); // [1, 10, 3, 4, 5]


