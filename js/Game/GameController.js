class GameController {

  constructor(numplayer, valorcasilla, primero, segundo) {
    this.numplayer = numplayer;

    this.primero = primero;
    this.segundo = segundo;
    this.tiradaspl1 = 0;
    this.tiradaspl2 = 0;

    this.valorcasilla = valorcasilla;
  }
  move(playerName, boxrnd) {

    if (playerName.pos < 16) {
      playerName.pos += 1;
      document.getElementById('float1').classList.remove('displaynone')
      document.getElementById('float2').classList.remove('displaynone')

      this.locateplayer(playerName, `P${playerName.id}`, boxrnd, playerName.pos)
    }
    if (playerName.pos == 16) {
      console.log('ganador')

    }
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
  dado4() {
    let res;
    res = Math.floor(Math.random() * 4) + 1

    return res;
  }
  dado3() {

    let res = Math.floor(Math.random() * 3) + 1
    let typequestions;

    switch (res) {
      case 1:
        typequestions = "CSS";
        break;
      case 2:
        typequestions = "HTML";
        break;
      case 3:
        typequestions = "JS";
        break;
    }
    diceresult.value = typequestions;
  }
  turnotirar() {
    Controlador.move(Player1, Controlador.dado4());
    console.log(`- - -  1: ${this.tiradaspl1}`)
    playerturno.innerHTML = Player1.name;
  }


  turnotirar2() {
    if (this.primero == 1) {
      playerturno.innerHTML = Player2.name;
      Controlador.move(Player1, Controlador.dado4());
      this.tiradaspl1++;
      this.primero = 2;
      this.segundo = 1;
      console.log(`- - -  1: ${this.tiradaspl1}`)
    } else if (this.segundo == 1) {
      playerturno.innerHTML = Player1.name;
      Controlador.move(Player2, Controlador.dado4());
      this.tiradaspl2++;
      this.primero = 1;
      this.segundo = 2;
      console.log(`- - -  2: ${this.tiradaspl2}`)
    }
  }
  locateplayer(PlayerNum, stringname, positionbox, ubicacion) {



    let posboxold = document.querySelector(`#pos${ubicacion} .box${positionbox}`);

    let posbox = document.querySelector(`#pos${ubicacion} .box${positionbox}`);
    // posbox.innerHTML += stringname;


    if (posbox.innerHTML != "") {
      console.log('esta lleno')

      PlayerNum.pos -= 1;
      Controlador.move(PlayerNum, Controlador.dado4())


      posbox.innerHTML = `P${PlayerNum.id - 1}`;
    } else {
      posbox.innerHTML = stringname;
    }




    // posbox.style.backgroundColor = PlayerNum.color;
  }

}
Controlador = new GameController(0, 0, 1, 2)

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
    playerturno.innerHTML = Player1.name;

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
    playerturno.innerHTML = Player1.name;

    pointsplayerOne.innerHTML = Player1.puntos;
    Controlador.locateplayer(Player1, "P1", 1, 1)
    infoplayer1box.classList.remove('displaynone')
    nameplayer1.innerHTML = player1settings.value;
  }

})
document.getElementById('dadoon').addEventListener('click', () => {
  if (Controlador.numplayer == 1) {
    Controlador.turnotirar();
  } else if (Controlador.numplayer == 2) {
    Controlador.turnotirar2();
  }



})