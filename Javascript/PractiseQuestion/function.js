function countvowel(str){
    let count = 0;
    for (const char of str) {
        if(char==="a"
            ||char==="e"
            ||char==="i"
            ||char==="o"
            ||char==="u"
            ||char==="A"
            ||char==="E"
            ||char==="I"
            ||char==="O"
            ||char==="U")
            {
                count++;
                console.log("It is a vowel");
                }
                else{
                    console.log("It is not a vowel");
                }
            }
            return count;
        }

        //same code using arrow function
        const countvowel = (str) => {
            let count = 0;
            for (const char of str) {
                if(char==="a"
                    ||char==="e"
                    ||char==="i"
                    ||char==="o"
                    ||char==="u"
                    ||char==="A"
                    ||char==="E"
                    ||char==="I"
                    ||char==="O"
                    ||char==="U")
                    {
                        count++;
                        console.log("It is a vowel");
                        }
                        else{
                            console.log("It is not a vowel");
                            }
                            }
                            return count;
                            }
        
        
