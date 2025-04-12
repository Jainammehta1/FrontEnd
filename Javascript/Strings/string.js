//Strings

//Creating the string
//Method 1

let str = "Hello, World!";
console.log(str); // Output: Hello, World!

//Method 2
//You can denote it in single quotes

let str2 = 'Hello, World!';
console.log(str2); // Output: Hello, World!


//String length

console.log(str.length); // Output: 13

//String accesing
console.log(str[0]); // Output: H
console.log(str[1]); // Output: e
console.log(str[2]); // Output: l
console.log(str[3]); // Output: l
console.log(str[4]); // Output: o
console.log(str[5]); // Output: ,
console.log(str[6]); // Output: ,
console.log(str[7]); // Output:
console.log(str[8]); // Output:
console.log(str[9]); // Output: W
console.log(str[10]); // Output: o
console.log(str[11]); // Output: r
console.log(str[12]); // Output: l
console.log(str[13]); // Output: d

//Indexing always starts with 0

//Template literals in string
//This is special type of string
//It is denoted in backticks form``

let obj=
{
    item:"pen",
    price:10,
};
console.log(`${obj.item} is cost is ${obj.price}`); // Output: pen is cost

//String methods :Built in functions to manipulate the string

//1. toUpperCase()
//Converts the string to uppercase
let s1="Hello world!!";
console.log(s1.toUpperCase()); // Output: HELLO WORLD!!

//2. toLowerCase()
//Converts the string to lowercase
let s2="Hello world!!";
console.log(s2.toLowerCase()); // Output: hello world!!

//3. trim()
//Removes the spaces from string
let s3="   Hello world!!   ";
console.log(s3.trim()); // Output: Hello world!!

//4. slice()
//returns the part of the string
let s4="Hello world!!";
console.log(s4.slice(0,5)); // Output: Hello

//5. Concat()
//Concatenates the string
let s5="Hello";
let s6="world!!";
console.log(s5.concat(s6)); // Output: Hello world!!

//6. replace()
//Replace the string with another string
let s7="Hello world!!";
console.log(s7.replace("world!!","India")); // Output: Hello India

//7. charAt()
//Returns the character at the specified index
let s8="Hello world!!";
console.log(s8.charAt(0)); // Output: H

//8. replaceAll()
//Replace all the occurrences of the string with another string
let s9="Hello world!! world!!";
console.log(s9.replaceAll("world!!","India")); // Output: Hello India India







