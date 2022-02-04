// what will happen when the user clicks?
// document.getElementById("box").addEventListener("click", myFunction);
  // slection of X or O (who's turn is it?)

  let playerOne = "X";
  let playerTwo = "O";
  let currentUser = playerOne;
  let turnCounter = 0
  let isGameOver = false;

  function playerChange(event) {
    if (!isGameOver) {
    if (currentUser == playerOne && gameBoard[event.target.id]=='') {
      console.log(event)
      event.target.innerText = "X"
      gameBoard[event.target.id] = currentUser
        currentUser = playerTwo;
        turnCounter++
    } else if (gameBoard[event.target.id]==''){
      event.target.innerText = "O"
      gameBoard[event.target.id] = currentUser
        currentUser = playerOne;
        turnCounter++
    }
    console.log(gameBoard)
    checkForWinners()
  }
}


function cellClick(event) {
  console.log(event.target)
}

  // should determine who the current player is x or o then insert 
  // insert inner text based on who the current player is
  // push into active players array the id 
  // puch into all moves whoever current player or id
  // change the current player to next


  let box = document.querySelectorAll(".box")
    box.forEach(function(box) {
      box.addEventListener('click', playerChange)
    })

// data container (array) to hold who has gone where (on the gameboard) 
// (this would contain player choices)
// whose turn it is? -- state of player
// winning combinations to check (data container?)
// (cats option 1) board is full = draw

// make three different array variable one for playerOne moves
// 2nd for playerTwo moves
//  for all moves made by either; all set and checked at end to check for tie
let gameBoard = ['', '', '', '', '', '', '', '', ''] 



// check winning combos

const checkForWinners = () => {
  if (gameBoard[0] == 'X'  && gameBoard[1] == 'X' && gameBoard[2] == 'X')  {
    isGameOver = true
    console.log('winner row1')
} else if (gameBoard[3] == 'X'  && gameBoard[4] == 'X' && gameBoard[5] == 'X') {
    console.log('winner row2')
} else if (gameBoard[6] == 'X'  && gameBoard[7] == 'X' && gameBoard[8] == 'X') {
  console.log('winner row3')
  isGameOver = true
} else if (gameBoard[0] == 'X'  && gameBoard[3] == 'X' && gameBoard[6] == 'X') {
  console.log('winner column1')
  isGameOver = true
} else if (gameBoard[1] == 'X'  && gameBoard[4] == 'X' && gameBoard[7] == 'X') {
  console.log('winner column2')
  isGameOver = true
} else if (gameBoard[2] == 'X'  && gameBoard[5] == 'X' && gameBoard[8] == 'X') {
  console.log('winner column3')
  isGameOver = true
} else if (gameBoard[0] == 'X'  && gameBoard[4] == 'X' && gameBoard[8] == 'X') {
  console.log('winner diagonal1')
  isGameOver = true
} else if (gameBoard[2] == 'X'  && gameBoard[4] == 'X' && gameBoard[6] == 'X') {
  console.log('winner diagonal2')
  isGameOver = true
} else if (gameBoard[0] == 'O'  && gameBoard[1] == 'O' && gameBoard[2] == 'O')  {
    console.log('winner row1')
    isGameOver = true
} else if (gameBoard[3] == 'O'  && gameBoard[4] == 'O' && gameBoard[5] == 'O') {
    console.log('winner row2')
    isGameOver = true
} else if (gameBoard[6] == 'O'  && gameBoard[7] == 'O' && gameBoard[8] == 'O') {
  console.log('winner row3')
  isGameOver = true
} else if (gameBoard[0] == 'O'  && gameBoard[3] == 'O' && gameBoard[6] == 'O') {
  console.log('winner column1')
  isGameOver = true
} else if (gameBoard[1] == 'O'  && gameBoard[4] == 'O' && gameBoard[7] == 'O') {
  console.log('winner column2')
  isGameOver = true
} else if (gameBoard[2] == 'O'  && gameBoard[5] == 'O' && gameBoard[8] == 'O') {
  console.log('winner column3')
  isGameOver = true
} else if (gameBoard[0] == 'O'  && gameBoard[4] == 'O' && gameBoard[8] == 'O') {
  console.log('winner diagonal1')
  isGameOver = true
} else if (gameBoard[2] == 'O'  && gameBoard[4] == 'O' && gameBoard[6] == 'O') {
  console.log('winner diagonal2')
  isGameOver = true
} else if (turnCounter==9) {
  console.log("drawGame")
}
}

let gridBox = document.querySelectorAll(".box");
  console.log("everything selected", gridBox)

const gridContainer = document.querySelector(".grid-container");

for (let i = 0; i < gridBox.length; i++) {
  gridBox[i].addEventListener('click', cellClick)
}

function displayWinner() {
    let winnerBox = document.querySelector('.win');
    if (currentUser == playerOne) {
        scoreboard.user1 = scoreboard.playerOne + 1
    } else {
        scoreboard.user2 = scoreboard.playerTwo + 1
    }
    winnerBox.textContent = `${currentUser} is the winner!`;
    alert('You have won!')
    const grid = document.querySelector(`.grid`);
    grid.removeEventListener('click', cellClick);
    updateScoreboard();
}; console.log("grid")
  // if there is a winner -- stop gameplay and show who won
  // if not -- let gameplay continue

let gameDisplay = {
  playerOne: 0,
  playerTwo: 0,
  draw: 0,
}

function updateScoreboard() {
    let xScore = document.getElementById("X-Wins")
    xScore.textContent = scoreboard.playerOne;
    let oScore = document.getElementById("O-Wins")
    oScore.textContent = scoreboard.playerTwo;
    let tieScore = document.getElementById("Ties")
    tieScore.textContent = scoreboard.ties;
}
  // RESET GAME

let resetGame = document.querySelector(".reset")
 
  resetGame.addEventListener('click', () => {
    for(let i = 0; i < selectAllBoxes.length; i++) {
        selectAllBoxes[i].innerHTML = '';
        selectAllBoxes[i].style.backgroundColor = 'light-blue'
    }
    document.getElementById('firstMoveX').textContent = "Choose it or loose it"
    location.reload();
})
