const readline=require(readline).createInterface(
    {
    input:process.stdin,
    output:process.stdout
 }
)

// ask for input from the user
let userInput =prompt("enter a nmuber:");
//validate the input
if(isNall(number)|| number <=0) {
    comsole.log("enter a valid positve number" );}
else {
    console.log("multiple of 3 and 5 up to 100");
for(let i=1;i<= 100;i++) {
    if (i % 3==0 || i % 5==0){
        console.log(i);
    }
}
}