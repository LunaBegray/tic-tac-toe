const sq1 = document.querySelector(".sq1");
const sq2 = document.querySelector(".sq2");
const sq3 = document.querySelector(".sq3");
const sq4 = document.querySelector(".sq4");
const sq5 = document.querySelector(".sq5");
const sq6 = document.querySelector(".sq6");
const sq7 = document.querySelector(".sq7");
const sq8 = document.querySelector(".sq8");
const sq9 = document.querySelector(".sq9");
sqArr = [sq1,sq2,sq3,sq4,sq5,sq6,sq7,sq8,sq9];
sq1.textContent = "";
sq2.textContent = "";
sq3.textContent = "";
sq4.textContent = "";
sq5.textContent = "";
sq6.textContent = "";
sq7.textContent = "";
sq8.textContent = "";
sq9.textContent = "";
//object to store the game board
const gameBoard = (function(){
    let boardArr = ["","","",
                    "","","",
                    "","",""];
    return {boardArr};
})();
console.log(gameBoard.boardArr);

//count turns to find which player's turn it is.
const Turns = (function(){
    let count;
    if(count == null){
        let count = 1;
    } else {
        count += 1;
    }
    let dividedCount = count/2
    let whoseTurn;
    let player1x = 1;
    let player2o = 2;
    if(Number.isInteger(dividedCount) == true){
        console.log("player1x chosen");
        whoseTurn = player1x;
    } else{
        console.log("player2o chosen");
        whoseTurn = player2o;
    }
    return {whoseTurn: whoseTurn};
})();
console.log(Turns.whoseTurn);
//takes boardArr and renders it into html
const Render = function(){
    for(i = 0; i < gameBoard.boardArr.length; i++){
        gameBoard.boardArr[i] = sqArr[i].textContent;
    }
    return gameBoard.boardArr
};

//check if anyone won
const checkIfWon = (function(){
    let whoWon;
    let player1x = 1;
    let player2o = 2;
    //check if won from left to right section
    if(sq1.textContent == "x" && sq2.textContent == "x" && sq3.textContent == "x" ||
    sq1.textContent == "o" && sq2.textContent == "o" && sq3.textContent == "o"){
        if(sq1.textContent == "x"){
            whoWon = player1x;
        } else if(sq1.textContent == "o"){
            whoWon = player2o;
        }
    }
    if(sq4.textContent == "x" && sq5.textContent == "x" && sq6.textContent == "x" ||
    sq4.textContent == "o" && sq5.textContent == "o" && sq6.textContent == "o"){
        if(sq4.textContent == "x"){
            whoWon = player1x;
        } else if(sq4.textContent == "o"){
            whoWon = player2o;
        }
    }
    if(sq7.textContent == "x" && sq8.textContent == "x" && sq9.textContent == "x" ||
    sq7.textContent == "o" && sq8.textContent == "o" && sq9.textContent == "o"){
        if(sq7.textContent == "x"){
            whoWon = player1x;
        } else if(sq7.textContent == "o"){
            whoWon = player2o;
        }
    }
    //check if won from top to bottom section
    if(sq1.textContent == "x" && sq4.textContent == "x" && sq7.textContent == "x" ||
    sq1.textContent == "o" && sq4.textContent == "o" && sq7.textContent == "o"){
        if(sq1.textContent == "x"){
            whoWon = player1x;
        } else if(sq1.textContent == "o"){
            whoWon = player2o;
        }
    }
    if(sq2.textContent == "x" && sq5.textContent == "x" && sq8.textContent == "x" ||
    sq2.textContent == "o" && sq5.textContent == "o" && sq8.textContent == "o"){
        if(sq2.textContent == "x"){
            whoWon = player1x;
        } else if(sq2.textContent == "o"){
            whoWon = player2o;
        }
    }
    if(sq3.textContent == "x" && sq6.textContent == "x" && sq9.textContent == "x" ||
    sq3.textContent == "o" && sq6.textContent == "o" && sq9.textContent == "o"){
        if(sq3.textContent == "x"){
            whoWon = player1x;
        } else if(sq3.textContent == "o"){
            whoWon = player2o;
        }
    }
    //check if won by left to right and top to bottom lines section
    if(sq1.textContent == "x" && sq5.textContent == "x" && sq9.textContent == "x" ||
    sq1.textContent == "o" && sq5.textContent == "o" && sq9.textContent == "o"){
        if(sq1.textContent == "x"){
            whoWon = player1x;
        } else if(sq1.textContent == "o"){
            whoWon = player2o;
        }
    }
    if(sq3.textContent == "x" && sq5.textContent == "x" && sq7.textContent == "x" ||
    sq3.textContent == "o" && sq5.textContent == "o" && sq7.textContent == "o"){
        if(sq3.textContent == "x"){
            whoWon = player1x;
        } else if(sq3.textContent == "o"){
            whoWon = player2o;
        }
    }
    console.log(whoWon);
    return {whoWon: whoWon};
})();
//clear/restart button
const restartBtn = document.querySelector(".restartBtn");
restartBtn.addEventListener('click', function(){
    checkIfWon.whoWon = null;
    for(i = 0; i < sqArr.length; i++){
        sqArr[i].textContent = "";
    }
    boardArr = ["","","","","","","","",""]
    divMess.remove();
});
//congratulation message to the winnner
const congMess = function(whoWon){
    let messageO = "congrats player 2 with o! you won!";
    let messageX = "congrats player 1 with X! you won!";
    let messageF;
    if(whoWon == player1x){
        let messageF = messageX;
    } else {
        let messageF = messageO;
    }
    console.log(messageF);
    const divMess = document.createElement("div");
    divMess.textContent = messageF;
    divMess.classList.add("divMess");
    body.appendChild(divMess);
}
//allows player to place marks, not allows to place marks if there is already a mark.
for(let i = 0; i < sqArr.length; i++){
    sqArr[i].addEventListener('click',function(){
        console.log("clicked button");
        let currentTurn = Turns.whoseTurn;
        if(currentTurn == 1 && sqArr[i].textContent == ""){
            sqArr[i].textContent = "x";
        } else if(sqArr[i].textContent == ""){
            sqArr[i].textContent = "o";
        }
        Render();
        checkIfWon();
        if(checkIfWon.whoWon != null){
            congMess(checkIfWon.whoWon);
        }
        console.log(gameBoard.boardArr);
    });
}  
  
//factory function for creating players
const Player = function (name, side){
    return {name, side}
}