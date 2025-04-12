let age=10;
typeof age;
console.log(age)//number

let name="Jainam";
console.log(name)//string

let isfollow=true;
console.log(isfollow);//boolean

let x=null;
console.log(x);//null

let y=undefined;
console.log(y);//undefined

let a=BigInt("123");
console.log(a);//BIGINT

let z=Symbol("Hello!!!");
console.log(z);//symbol

const student={
    name:"Jainam",
    age:10,
    isfollow:true,
};//object
console.log(student);
console.log(student["age"]);

student["name"]="Rahul Sharma";
console.log(student["name"]);
