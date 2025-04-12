let modebtn=document.querySelector("#mode");
let currmode="light";

modebtn.addEventListener("click",()=>{
    if(currmode=="light"){
        document.body.style.backgroundColor="#1a1a1a";
        currmode="dark";
        }
        else{
            document.body.style.backgroundColor="#f2f2f2";
            currmode="light";
        }
        });

            
            
        