class GameController {

  constructor(numplayer,valorcasilla,arraypositions) {
    this.numplayer = numplayer;
    this.arraypositions = [
    {name:'casilla 1',x:0,y:0}
    ]
    
  
    this.valorcasilla = valorcasilla;
  }
  move(playerName) {



    if (playerName.x == 0 && playerName.x < 5 && playerName.y < 6) {
      playerName.y += 1;


      this.locateplayer(playerName, "P1");

    }

    if (playerName.x >= 1 || playerName.x < 5 && playerName.y == 5) {
      playerName.x += 1;


      this.locateplayer(playerName, "P1");

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

  generateMap1(cols, rows,size) {

    let parentgame = document.getElementById('board'); 
    parentgame.innerHTML = `
  <div class="square">1</div>
  <div class="square">2</div>
  <div class="square">3</div>
  <div class="square">4</div>
  <div class="square">5</div>
  <div class="square">6</div>
  <div class="square">7</div>
  <div class="square">8</div>
  <div class="square">9</div>
  <div class="square">10</div>
  <div class="square">11</div>
  <div class="square">12</div>
  <div class="square">13</div>
  <div class="square">14</div>
  <div class="square">15</div>
  <div class="square">16</div>
`;
    
    
    
  }
  
  dado6() {
    let res;
    res = Math.floor(Math.random() * 6) + 1
    diceresult.value = res;

  }

  locateplayer(PlayerNum, stringname) {




    // let ubip1 = document.querySelector(`#containertablero #box-x${PlayerNum.x}-y${PlayerNum.y}`);

    // let posbox = document.createElement('span');

    // posbox.innerHTML = stringname;

    // ubip1.appendChild(posbox)



  }

}
Controlador = new GameController(0,0)

window.addEventListener('load', () => {


  gamestatus.innerHTML = 'Selecciona Jugador';

})

document.getElementById('player1addsettings').addEventListener('click', () => {

  Controlador.setPlayerOne()
  let player1name = document.getElementById('player1settings');
  Player1 = new Players(1, player1name.value, 0, 0, 0);


})
document.getElementById('player2addsettings').addEventListener('click', () => {

  Controlador.setPlayerTwo();
  let player2name = document.getElementById('player2settings');
  Player2 = new Players(2, player2name.value, 0, 0, 0);

})

document.getElementById('btnLoadGame').addEventListener('click', () => {
  Controlador.gameLoad()
  Controlador.generateMap1(4,4,100)






  if (Controlador.numplayer == 2) {
    Controlador.locateplayer(Player1, "P1")
    Controlador.locateplayer(Player2, "P2")
    infoplayer2box.classList.remove('displaynone')
    infoplayer1box.classList.remove('displaynone')
    pointsplayerOne.innerHTML = Player1.puntos;
    pointsplayertwo.innerHTML = Player2.puntos;
    nameplayer2.innerHTML = player2settings.value;
    nameplayer1.innerHTML = player1settings.value;

  }
  if (Controlador.numplayer == 1) {
    pointsplayerOne.innerHTML = Player1.puntos;
    Controlador.locateplayer(Player1, "P1")
    infoplayer1box.classList.remove('displaynone')
    nameplayer1.innerHTML = player1settings.value;
  }

})
document.getElementById('dadoon').addEventListener('click', () => {
  Controlador.dado6();

  Controlador.move(Player1);

})