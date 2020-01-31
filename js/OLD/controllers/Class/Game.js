class Game {
  constructor() {




  }

  StartGame() {
    newPlayers.CreatePlayers();

    // alert(sessionStorage.getItem("PlayerNum"))

    if (TotalPlayers.numplayers == 1) {

      infoplayer1box.classList.remove('displaynone')

    }
    if (TotalPlayers.numplayers == 2) {
      infoplayer1box.classList.remove('displaynone')
      infoplayer2box.classList.remove('displaynone')
    }
    if (TotalPlayers.numplayers == 3) {
      infoplayer1box.classList.remove('displaynone')
      infoplayer2box.classList.remove('displaynone')
      infoplayer3box.classList.remove('displaynone')
    }
    if (TotalPlayers.numplayers == 4) {
      infoplayer1box.classList.remove('displaynone')
      infoplayer2box.classList.remove('displaynone')
      infoplayer3box.classList.remove('displaynone')
      infoplayer4box.classList.remove('displaynone')
    }

  }

}
let newGame = new Game;
newGame.StartGame();

