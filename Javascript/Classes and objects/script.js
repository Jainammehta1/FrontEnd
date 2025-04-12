//Object
const student={
    fullname:"Jainam mehta",
    age:20,
    printage:function(){
        console.log(this.age);
    }
};

const employee={
    calctax(){
        console.log("The tax rate is 20%");
    }
};
const karan={
    salary:50000,
}
karan.__proto__ =employee;//Set prototype
//Prototype is an reference to an object

//Classes-Class is a program code template for creating the objects
class car{
    constructor(color,year,brand){
        this.color=color;
        this.year=year;
        this.brand=brand;
}
}
//calling a class through object
const mycar=new car("red",2019,"Toyota");

//Inheritnce
class Animal{
    constructor(name){
        this.name=name;
    }
    speak(){
        console.log("Animal is speaking");
        }
        }
        class Dog extends Animal{
            constructor(name,breed){
                super(name);
                this.breed=breed;
            }
            speak(){
                console.log(`${this.name} says Woof!`);
                }
                }
        
let obj=new Dog("LION","Wild");

//Method overriding
class name{
    constructor(name){
        this.name=name;
    }
    speak(){
        console.log("Hello");
        }
    }
    class name2 extends name{
        speak(){
            console.log("Hi");
            }
            }
            let obj1=new name2("LION");
            //Method overloading
            class books{
                constructor(title,author,year){
                    this.title=title;
                    this.author=author;
                    this.year=year;
                    }
                    addBook(title,author,year){
                        this.title=title;
                        this.author=author;
                        this.year=year;
                        }
                        addBook(title,author){
                            this.title=title;
                            this.author=author;
                        }

            }
            let obj3=new books("Python","John",2020);
            let obj4=new books("Py","aa");








