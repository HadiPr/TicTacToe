const board = document.querySelector(".board");
const tiles = document.querySelectorAll(".tile");
const clickfunc = (e) => {
  if (!e.srcElement.className.includes("filled")) {
    let counter = document.querySelectorAll(".filled").length;
    e.srcElement.classList.add("filled");
    if (counter % 2) e.srcElement.classList.add("fill-x");
    else e.srcElement.classList.add("fill-o");
    if (checkGame() == "tile filled fill-o") {
      board.className += " o-wins game-over";
    } else if (checkGame() == "tile filled fill-x") {
      winLine.forEach((tile) => tile.classList.add("winLine"));
      board.className += " x-wins game-over";
    } else if (counter == 8) board.className += " game-over draw";
  }
};
var winLine;
function checkGame() {
  for (let i = 0; i < 3; i++) {
    if (
      tiles[i].className == tiles[i + 3].className &&
      tiles[i + 3].className == tiles[i + 6].className
    ) {
      winLine = [tiles[i], tiles[i + 3], tiles[i + 6]];
      if (
        tiles[i].className == "tile filled fill-x" ||
        tiles[i].className == "tile filled fill-o"
      ) {
        winLine.forEach((item) => {
          item.querySelector("span").classList.add("vertical-line");
        });
      }
      return tiles[i].className;
    }
  }
  for (let i = 0; i < 7; i += 3) {
    if (
      tiles[i].className == tiles[i + 1].className &&
      tiles[i + 1].className == tiles[i + 2].className
    ) {
      winLine = [tiles[i], tiles[i + 1], tiles[i + 2]];
      if (
        tiles[i].className == "tile filled fill-x" ||
        tiles[i].className == "tile filled fill-o"
      ) {
        winLine.forEach((item) => {
          item.querySelector("span").classList.add("horizontal-line");
        });
      }
      return tiles[i].className;
    }
  }
  if (
    tiles[0].className == tiles[4].className &&
    tiles[4].className == tiles[8].className
  ) {
    winLine = [tiles[0], tiles[4], tiles[8]];
    if (
      tiles[4].className == "tile filled fill-x" ||
      tiles[4].className == "tile filled fill-o"
    ) {
      winLine.forEach((item) => {
        item.querySelector("span").classList.add("back-slash-like-line");
      });
    }

    return tiles[4].className;
  }
  if (
    tiles[2].className == tiles[4].className &&
    tiles[4].className == tiles[6].className
  ) {
    winLine = [tiles[2], tiles[4], tiles[6]];
    if (
      tiles[4].className == "tile filled fill-x" ||
      tiles[4].className == "tile filled fill-o"
    ) {
      winLine.forEach((item) => {
        item.querySelector("span").classList.add("slash-like-line");
      });
    }

    return tiles[4].className;
  }
}
tiles.forEach((tile) => (tile.onclick = clickfunc));
const reset = (e) => {
  if (
    e.srcElement == document.body &&
    document.querySelector(".board").className != "board"
  ) {
    tiles.forEach((tile) => (tile.className = "tile"));
    board.className = "board";
    document.querySelectorAll("span").forEach((item) => (item.className = ""));
  }
};
document.body.onclick = reset;
