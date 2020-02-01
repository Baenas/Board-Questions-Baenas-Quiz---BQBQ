class GameController {

  constructor(numplayer, valorcasilla, arraypositions) {
    this.numplayer = numplayer;
    this.arraypositions = [
      { name: 'casilla 1', x: 0, y: 0 }
    ]


    this.valorcasilla = valorcasilla;
  }
  move(playerName, steps) {
    playerName.pos += steps



    this.locateplayer(playerName, 'P1', 1, playerName.pos)
  }
  setPlayerOne() {


    document.getElementById('player1addsettings').style.backgroundColor = "lightgreen"
    document.getElementById('player1settings').style.backgroundColor = "lightgreen"
    this.numplayer += 1;

  }
  setPlayerTwo() {

    document.getElementById('player2addsettings').style.backgroundColor = "lightgreen"
    document.getElementById('player2settings').style.backgroundColor = "lightgreen"
    this.numplayer += 1;
  }
  gameLoad() {
    document.getElementById('settings').classList.add('displaynone')
    document.getElementById('containergame').classList.remove('displaynone')


  }

  generateMap1() {






  }

  dado6() {
    let res;
    res = Math.floor(Math.random() * 6) + 1
    diceresult.value = res;
    return res;
  }

  locateplayer(PlayerNum, stringname, positionbox, ubicacion) {



    let posboxold = document.querySelector(`#pos${ubicacion} .box${positionbox}`);

    let posbox = document.querySelector(`#pos${ubicacion} .box${positionbox}`);
    // posbox.innerHTML += stringname;




    posbox.innerHTML = stringname;
    posbox.style.backgroundColor = PlayerNum.color;
  }

}
Controlador = new GameController(0, 0)

window.addEventListener('load', () => {


  gamestatus.innerHTML = 'Selecciona Jugador';

})

document.getElementById('player1addsettings').addEventListener('click', () => {

  Controlador.setPlayerOne()
  let player1name = document.getElementById('player1settings');
  Player1 = new Players(1, player1name.value, 0, 1, 'lightgreen');


})
document.getElementById('player2addsettings').addEventListener('click', () => {

  Controlador.setPlayerTwo();
  let player2name = document.getElementById('player2settings');
  Player2 = new Players(2, player2name.value, 0, 1, 'salmon');

})

document.getElementById('btnLoadGame').addEventListener('click', () => {
  Controlador.gameLoad()
  Controlador.generateMap1()






  if (Controlador.numplayer == 2) {
    Controlador.locateplayer(Player1, "P1", 1, 1)
    Controlador.locateplayer(Player2, "P2", 2, 1)
    infoplayer2box.classList.remove('displaynone')
    infoplayer1box.classList.remove('displaynone')
    pointsplayerOne.innerHTML = Player1.puntos;
    pointsplayertwo.innerHTML = Player2.puntos;
    nameplayer2.innerHTML = player2settings.value;
    nameplayer1.innerHTML = player1settings.value;

  }
  if (Controlador.numplayer == 1) {
    pointsplayerOne.innerHTML = Player1.puntos;
    Controlador.locateplayer(Player1, "P1", 1, 1)
    infoplayer1box.classList.remove('displaynone')
    nameplayer1.innerHTML = player1settings.value;
  }

})
document.getElementById('dadoon').addEventListener('click', () => {


  Controlador.move(Player1, Controlador.dado6());

})