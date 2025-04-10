const  readline = require("readline").createInterface({
    input:process.stdin,
    output:process.stdout
})
// readline.question("Showing the greates of 3 numbers (15,17,10)",(number)=>{
//     // const numbers = number.toString().split(',')
//     // /// 123,50,12 ==> 123 50 12
//     if(number)
// })

console.log( " Showing the greatest of 3 numbers ( 17,15,10)")
/// write out the logic to determine the greatest of these 3...
   console.log(17>15&&17>10 ? "17 is the greatest":"show 17 is not the greatest")

    // syntax
    // if(condition){
    //code to exec
    //}