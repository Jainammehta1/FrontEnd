//Callback-A callback is a function passed as an argument to another
function sum(a,b){
    console.log( a+b);
}
function calculator(a,b,sumCallback){
    sumCallback(a,b);
}
calculator(2,5,sum);

//Function Callback hell
function getPersonName(person){
    return person.name;
    }
    function getPersonAge(person){
        return person.age;
        }
        function getPersonAddress(person){
            return person.address;
            }
            function printPersonInfo(person){
                console.log(getPersonName(person));
               console.log( getPersonAge(person));
                console.log(getPersonAddress(person));
                }
                let person = {
                    name: 'John',
                    age: 30,
                    address: 'New York'
                    };
                    printPersonInfo(person);

//Promises-Promise is for eventual completion of task
let promise=new Promise((resolve,reject)=>{
    console.log("I am a promise");
    resolve("success");
    reject("Some error occured");
})
//.then() and .catch()
promise.then((message)=>{
    console.log(message);
    }).catch((error)=>{
        console.log(error);
        })
        //Async/Await-Async/Await is used for asynchronous operations
        let asyncFunction=async function(){
            try{
                let result=await new Promise((resolve,reject)=>{
                    setTimeout(() => {
                        resolve("I am a promise");
                        }, 2000);
                        });
                        console.log(result);
                        }
                        catch(error){
                            console.log(error);
                        }
                    }
                    asyncFunction();
                    



        


                    


