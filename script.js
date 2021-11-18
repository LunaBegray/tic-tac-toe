//object to store the game board
const gameBoard = (function(){
    let boardArr = ["x","o","o"
                    ,"x", "o","x"
                    ,"o","x","o"];
    return {boardArr: boardArr};
})();
console.log(gameBoard.boardArr);
//factory function for creating players
const Player = function (name, side){
    return {name, side}
}
//count turns to find which player's turn it is.
const countTurns = function(){

}
//takes boardArr and renders it into html
//allows player to place marks, not allows to place marks if there is already a mark.
//check if anyone won
//clear/restart button 
//congratulation message to the winnner
