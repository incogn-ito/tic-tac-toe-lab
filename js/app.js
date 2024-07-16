/*-------------------------------- Constants --------------------------------*/
// follow instructions along the way
// console.log it every step!


/*---------------------------- Variables (state) ----------------------------*/
let board
let turn
let winner
let tie

const winningCombos = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],                      // all the combinations of numbered squares on the grid that would be a tic tac toe
  ]    

/*------------------------ Cached Element References ------------------------*/
const squareEls = document.querySelectorAll('.sqr')
const messageEl = document.getElementById('message')

/*-------------------------------- Functions --------------------------------*/
init()

function init() {
    board = ['', '', '', '', 'o', '', 'x', '', '']  // array so use for...each
    turn = 'x'
    winner = false                  // changed this to "true" to test if meessages would come up.
    tie = false
    render()
}

function render() {
    updateBoard()
    updateMessage()
}

function updateBoard() {
    board.forEach((cell, idx) => {   // use current idx of the iteration to access corresponding square on the board
        if (cell === 'x') {
            squareEls[idx].textContent = 'x' 
        } else if (cell === 'o') {
            squareEls[idx].textContent = 'o'
        } else {
            squareEls[idx].textContent = '' // for future style updates
            }
        })
    }

function updateMessage() {
    if (winner === false && tie === false) {            // cleaner: (winner && !tie)
        messageEl.textContent = `It is ${turn}'s turn`
    } else if (winner === false && tie === true) {
        messageEl.textContent = "It's a tie!"
        } else {
            messageEl.textContent = `${turn} is the winner!`
        }
    }

 /*----------------------------- Event Listeners -----------------------------*/


 

//1) Define the required variables used to track the state of the game.

//2) Store cached element references.

//3) Upon loading, the game state should be initialized, and a function should 
//   be called to render this game state.

//4) The state of the game should be rendered to the user.

//5) Define the required constants.

//6) Handle a player clicking a square with a `handleClick` function.

//7) Create Reset functionality.
