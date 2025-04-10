const { CLIENT_RENEG_LIMIT } = require("tls")

const readline =require("readline").createInterface({
    input:process.stdin,
    output:process.stdout

})
readline.question('enter a number to decide if it is even',(number)=>{
  //  if(number%2===0){
   //     console.log(number,"is an even number")}
   console.log(number%2===0? number+" is an even number":"not an even number,") 
})
