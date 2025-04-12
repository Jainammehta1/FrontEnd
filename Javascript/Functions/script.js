//Functions in javascript
//Block of code that peforms a specific task and can be called whenever needed

//FUNCTION DEFINATION

//function functionName()
/*
{
    //code to be executed
}
    */

//FUNCTION CALL
//function functionName()

//FUNCTION WITH PARAMETERS:Function can take arguments and use them inside the function

//function FunctionName(para1,para2)

function myFunction()
{
    console.log("Hello, World!");

}
myFunction();

//Function with parameters

function myFunction(para1)
{
    console.log(para1);
    
}
myFunction("Hello, World!");

//Function->2 numbers ,sum
function sum(a,b)
{
    console.log(a+b);
}
sum(5,7);

//Function with return type
function sum1(a,b)
{
    s= a+b;
    return s;
}
    let val=sum1(10,11);
    console.log(val);



    //arrow function
    let sum2=(a,b)=>a+b;
    console.log(sum2(5,7));


    //foreach loop in ARRAYS
    //arr.forEach(callBackFunction)
    //A callback is a function passed as an arguement to another function
    let arr=[1,2,3,4,5];
    arr.forEach(function printval(val)//value at each index
    {
        console.log(val);

    }
);

//Using arrow function
let arr1=[1,2,3,4,5];
arr.forEach((val)=>{
    console.log(val);
}
);

//What are higher order functions/methods?

//A function that takes another function as an argument or returns a function as an output is called a higher order function

//Map
//map() is a built-in JavaScript function that creates a new array populated with the results of calling a provided function on every element in the calling array.
//map() does not change the original array.
let nums=[1,2,3,4,5];

nums.map((val)=>{
    console.log(val);
}
);
//storing in newarray
let newarr=nums.map((val)=>val*2);
console.log(newarr);
//filter()
//Creates a new array of elements that give true for a condition
let nums1=[1,2,3,4,5];
nums1.filter((val)=>{
    return val%2==0;
});
console.log(nums1);

//reduce()
//Reduces array to a single value and returns the single value
let nums2=[1,2,3,4,5];
nums2.reduce((res,curr)=>
    {
        return res+curr;
        });


