const readline=require(Readline).craeteInterface({
    input:process.stdin,
    output:process.stdin
})
//initialize 3*3 array for board game
let playboard=[
    ['', '','']
      ['','','']
        ['','','']
];
//track player X gose first
let currentPlayer='X';
//fun to print the curret board game
function toPrintBoard(){
    console.log('0 1 2');
    for(let row= 0; row<3; row++)
{
    let rowStr =row+'';
    for (let col=0;col<3;col++)
        { rowSrt+=board[row][col];
         if(col<2) rowStr+='1'
    }
    console.log(rowStr);
    if(row<2) console.log('----');
       }
    }
    //function to cheack if the move is vaild
    function ismovevalid(row,col){
      return row >=0 && row<3 && col>=0 &&
      col <3 && board[row][col]==='',
    }
    // funtion to check winner
    function checkwinner(){
        //check  row
    for(let row=0;row<3;row++)
    {
        if(board[row][0]!==''&& board[row][0]===board[row][1]
            && board[row][1]===board[row][2]){
                return board[row][0];
        }
      }
    }
    //check columns
    for(let col=0;col<3;col++)
        {
            if(board[col][0]!==''&& board[col][0]===board[col][1]
                && board[col][1]===board[col][2]){
                    return board[col][0];
            }
          }
          //check if tie
          for (let row=0;row<3;row++)
          {
          for (let col=0;col<3;col++){
            if(board[row][col]===''){
                return null;
                //game not finished
            }
          }
        }
        return T //tie 

        