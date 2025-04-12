//Conditional statement

let age=25;
if(age>18)
    {
        console.log("You are an adult");
    }
 
 //if else
        let mode="dark";
        let color;
    
        if(mode=="dark"){
        color="black";
        console.log(color);
       
        }
            else{
            color="white";
            console.log(color);
          }
//oddeven program
let num=10;
if(num%2==0){
    console.log(+num,"Number is even");
    }
    else{
        console.log(+num,"Number is odd");
        }

//else if statement

let number=10;
if(number>10)
    {
    console.log("Number is greater than 10");
    }
    else if(number==10)
        {
        console.log("Number is equal to 10");
        }

        else{
            console.log("Number is less than 10");
            }
            //switch statement
            let day="sunday";
            switch(day){
                case "sunday":
                    console.log("Today is sunday");
                    break;
                    case "monday":
                        console.log("Today is monday");
                        break;
                        case "tuesday":
                            console.log("Today is tuesday");
                            break;
                            case "wednesday":
                                console.log("Today is wednesday");
                                break;
                                case "thursday":
                                    console.log("Today is thursday");
                                    break;
                                    case "friday":
                                        console.log("Today is friday");
                                        break;
                                        case "saturday":
                                            console.log("Today is saturday");
                                            break;
                                            default:
                                                console.log("Invalid day");
                                                break;
                                                }
                            
