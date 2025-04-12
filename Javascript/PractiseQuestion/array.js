let marks=[20,40,60,80,100];
let sum=0;
for(let i=0;i<marks.length;i++){
    sum=sum+marks[i];
    }
    console.log(sum);

    let avg=sum/marks.length;
    console.log("The average is",+avg);

    //all items have an offer of 10%

    let items=[250,645,700,800,900];
    let i=0;
    for(let val of items){
        console.log("value at index",+val);
        let offer=val/10;
        items[i]=items[i]-offer;
        console.log("after offer",+items[i]);
        i++
    }

    //with for loop
    let items2=[250,645,700,800,900];
    for(let i=0;i<items2.length;i++)
    {
        let offer=items2[i]/10;
        items2[i]=items2[i]-offer;
        console.log("after offer",+items2[i]);
        

    }

    //Practise question for creating adding and removing an array

    let companies=["Bloomberg","Microsoft","Uber","Google","IBM","Netflix"];
    companies.shift();
    console.log(companies);

    let companies1=["Bloomberg","Microsoft","Uber","Google","IBM","Netflix"];
    companies1.splice(2,1,"ola");
    console.log(companies1);

    companies1.push("Amazon");
    console.log(companies1);

        //we are given an array of marks of students filter out the marks of students that scored 90+
        let marks1=[80,90,70,95,85,98];
        let marks2=marks1.filter(function(val){
            return val>=90;
            });
            console.log(marks2);

            //take a number n as input from user create an array of numbers n to 10 use reduce method to add and reduce method to multiply

            let n=prompt("Enter a number");
            let array=[];
            for(let i=1;i<=n;i++){
                arr[i-1]=i;
            }
            console.log(array);
            let add=arr.reduce((res,curr)=>{
                return res+curr;
            });
            console.log(add);
            let mul=arr.reduce((res,curr)=>{
                return res*curr;
                });
                console.log(mul);

