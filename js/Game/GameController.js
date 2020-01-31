class GameController {

  constructor(numplayer) {
    this.numplayer = numplayer;

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

  generateMap1(numerofila, cuadroancho, canti) {
    let x = 0;
    let y = 0;


    for (let count = 0; count < canti; count++) {

      for (let ind = 0; ind < numerofila; ind++) {
        let js = 0;
        let html = 1;
        let css = 2;



        y = ind;

        const cont1 = document.getElementById('containertablero');
        let cuadro = document.createElement('div');
        let player = document.createElement('span');
        player.innerHTML = "1"

        cuadro.className = "boxv1";

        //  cuadro.innerHTML = `x${x} y${y} `; 

        cuadro.id = `box-x${x}-y${y}`;
        /*       
            cuadro.innerHTML = count +1 ;
               */
        cont1.style.width = cuadroancho * numerofila + cuadroancho + "px"
        cont1.appendChild(cuadro);
        cuadro.style.width = `${cuadroancho}px`;
        cuadro.style.height = `${cuadroancho}px`;

        /* 
                cuadro.innerHTML += Math.floor(Math.random() * 3) + 1  ; */


        if (cuadro.id == `box-x${x}-y${0}`) {
          cuadro.style.backgroundColor = ""
          cuadro.setAttribute('data-box', '4');
          cuadro.setAttribute('data-border', 'border');

        } else if (cuadro.id == `box-x${count}-y${canti - 1}`) {


          cuadro.setAttribute('data-box', '2');
          cuadro.setAttribute('data-border', 'border');
        } else if (cuadro.id == `box-x${0}-y${y}`) {


          cuadro.setAttribute('data-box', '1');
          cuadro.setAttribute('data-border', 'border');
        } else if (cuadro.id == `box-x${canti - 1}-y${ind}`) {


          cuadro.setAttribute('data-box', '3');
          cuadro.setAttribute('data-border', 'border');
        } else {
          cuadro.style.backgroundColor = "white"
          cuadro.innerHTML = "";

        }


      }
      x = x + 1;

    }

  }

  dado6() {
    let res;
    res = Math.floor(Math.random() * 6) + 1
    diceresult.value = res;

  }

  locateplayer(PlayerNum, stringname) {




    let ubip1 = document.querySelector(`#containertablero #box-x${PlayerNum.x}-y${PlayerNum.y}`);

    let posbox = document.createElement('span');

    posbox.innerHTML = stringname;

    ubip1.appendChild(posbox)



  }

}
Controlador = new GameController(0)

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
  Controlador.generateMap1(6, 60, 6)






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