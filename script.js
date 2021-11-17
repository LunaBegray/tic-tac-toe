//object to store the game board
const gameBoard = (function(){
    let boardArr = [1,2];
    return {boardArr: boardArr};
})();
console.log(gameBoard.boardArr);
//factory function for creating players
const Player = function (name, side){
    return {name, side}
}
