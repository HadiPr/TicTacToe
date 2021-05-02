const winStates = [
  [0, 1, 2], [3, 4, 5], [6, 7, 8],
  [0, 3, 6], [1, 4, 7], [2, 5, 8],
  [0, 4, 8], [2, 4, 6]
]
const tiles = document.querySelectorAll('.tile')
const board = document.querySelector('.board')
var temp;
var counter = 0;
function go_on(event) {
  if (!this.classList.contains('filled')) {
      this.classList.add("filled")
      this.classList.add(counter++ % 2 ? "fill-o" : "fill-x")
      //check winner
      if (checkWinner().winner) {
          board.className +=
              checkWinner().winner == "tile filled fill-x" ?
                  " game-over x-wins" : " game-over o-wins"
          checkWinner().winline.forEach(item =>
              document.querySelector(`div[line="${winStates.indexOf(item)}"]`)
                  .style.display = "block"
          )
      }
      if (counter == 9) board.className += " game-over draw"
  }
}
function checkWinner() {
  let winnerObj = { winline: [] }
  winStates.forEach(state => {
      if (
          tiles[state[0]].className == tiles[state[1]].className &&
          tiles[state[2]].className == tiles[state[1]].className &&
          tiles[state[0]].className != "tile"
      ) {
          winnerObj.winline.push(state)
          winnerObj.winner = tiles[state[0]].className
      }
  })
  return winnerObj
}
tiles.forEach(tile => tile.onclick = go_on)
//reset function
document.body.onclick = function () {
  if (event.target == document.body && board.className!= "board") {
      board.className = "board"
      counter = 0
      tiles.forEach(tile => tile.className = "tile")
      document.querySelectorAll('.winline').forEach(line=> line.style.display= "none")
  }
}