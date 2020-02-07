class GameController {

  constructor(numplayer, valorcasilla, primero, segundo, pause, playernow, typeq, actual, nameplayer, map) {
    this.numplayer = numplayer;
    this.primero = primero;
    this.segundo = segundo;
    this.tiradaspl1 = 0;
    this.tiradaspl2 = 0;
    this.pause = pause;
    this.valorcasilla = valorcasilla;
    this.playerow = playernow;
    this.actual = actual;
    this.typeq = typeq;
    this.nameplayer = nameplayer;
    this.map = map;
    this.maxtowin = 0;
  }
  move(playerName, boxrnd) {

    if (playerName.pos == this.maxtowin && this.numplayer == 1) {
      this.winshow(1);
    } else if (this.numplayer == 2 && Player2.pos == this.maxtowin) {
      this.winshow(2);
    }
    if (playerName.pos < this.maxtowin) {


      this.showquestion(playerName)
      this.locateplayer(playerName, `P${playerName.id}`, playerName.id, playerName.pos)

      this.actual = playerName.puntos;

      // console.log(`puntos ${playerName.name} tiene ${playerName.puntos}`)
      this.playernow = document.querySelector(`#${this.map}${playerName.pos} .box${playerName.id}`);


      console.log(`${this.maxtowin} max to win -- ${playerName.pos}`)

      playerName.pos += 1;
    }



  }

  winshow(playersnumber) {
    let ganador = undefined;
    if (playersnumber == 1) {
      ganador = Player1;
      document.getElementById('r1win').innerHTML = Player1.name;
      document.getElementById('r2win').innerHTML = 'NP';


    }


    if (playersnumber == 2) {

      if (Player1.puntos > Player2.puntos) {
        ganador = Player1;
        document.getElementById('r1win').innerHTML = Player1.name;
        document.getElementById('r2win').innerHTML = Player2.name;
      } else if (Player2.puntos > Player1.puntos) {
        ganador = Player2
        document.getElementById('r1win').innerHTML = Player2.name;
        document.getElementById('r2win').innerHTML = Player1.name;
      }
    }

    document.getElementById('float3').classList.remove('displaynone')
    document.getElementById('qwin').innerHTML = `Ganador ${ganador.name}`;

    document.getElementById('valorreturnwin').innerHTML = "";

    document.getElementById('r1').innerHTML = "";

    document.getElementById('r2').innerHTML = "";

    document.getElementById('r3').innerHTML = "";

    document.getElementById('r4').innerHTML = "";
  }
  showquestion(player) {

    PreguntasList.getquestion();

    // document.getElementById('floatplayer').innerHTML = player.name;
    let diceto = document.getElementById('typequestion').innerHTML;
    this.typeq = Controlador.dado3();
    document.getElementById('dadoon').classList.add('displaynone')

    document.getElementById('float2').classList.remove('displaynone')

    document.getElementById('q').innerHTML = PreguntasList.pregunta;

    document.getElementById('valorreturn').innerHTML = PreguntasList.valorreturn;

    document.getElementById('r1').innerHTML = PreguntasList.r1;

    document.getElementById('r2').innerHTML = PreguntasList.r2;

    document.getElementById('r3').innerHTML = PreguntasList.r3;

    document.getElementById('r4').innerHTML = PreguntasList.r4;

  }

  reset1() {
    document.getElementById('q').innerHTML = "";
    document.getElementById('valorreturn').innerHTML = "";
    document.getElementById('r1').innerHTML = "";
    document.getElementById('r2').innerHTML = "";
    document.getElementById('r3').innerHTML = "";
    document.getElementById('r4').innerHTML = "";
  }
  getanswer(id, cq) {
    if (id == cq) {


      document.getElementById('float2').classList.add('displaynone')
      // document.getElementById('float1').classList.add('displaynone')
      document.getElementById('dadoon').classList.remove('displaynone')
      this.playernow.classList.add('verde');
      this.actual += 1;

      this.nameplayer.puntos += 1;
      Controlador.puntos()
      Controlador.reset1();
    } else if (id != cq) {

      console.log(`id${id} cq${cq}`)
      document.getElementById('float2').classList.add('displaynone')
      // document.getElementById('float1').classList.add('displaynone')
      document.getElementById('dadoon').classList.remove('displaynone')
      this.playernow.classList.add('red');

      Controlador.puntos()
      Controlador.reset1();
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
    // document.getElementById('settings').classList.add('displaynone')
    // document.getElementById('containergame').classList.remove('displaynone')
    // // document.getElementById('containertablero').classList.add('displaynone')
    // document.getElementById('containertablerosmall').classList.remove('displaynone')

  }
  mapaS() {
    document.getElementById('settings').classList.add('displaynone')
    document.getElementById('containergame').classList.remove('displaynone')
    // document.getElementById('containertablero').classList.add('displaynone')
    document.getElementById('containertablerosmall').classList.remove('displaynone')
    this.maxtowin = 6;
  }
  mapaXL() {
    document.getElementById('settings').classList.add('displaynone')
    document.getElementById('containergame').classList.remove('displaynone')
    // document.getElementById('containertablero').classList.add('displaynone')
    document.getElementById('containertablero2').classList.remove('displaynone')
    this.maxtowin = 16;
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
        typequestions = " 1 P";
        break;
      case 2:
        typequestions = " 1 P";
        break;
      case 3:
        typequestions = " 2 P";
        break;
    }
    diceresult.value = typequestions;

    return typequestions;

  }
  turnotirar() {
    Controlador.move(Player1, Controlador.dado4());
    console.log(`- - -  1: ${this.tiradaspl1}`)
    playerturno.innerHTML = Player1.name;
    this.nameplayer = Player1;

  }


  turnotirar2() {
    if (this.primero == 1) {
      playerturno.innerHTML = Player2.name;
      Controlador.move(Player1, Controlador.dado4());
      this.tiradaspl1++;
      this.primero = 2;
      this.segundo = 1;
      this.nameplayer = Player1;
      console.log(`- - -  1: ${this.tiradaspl1}`)

    } else if (this.segundo == 1) {
      playerturno.innerHTML = Player1.name;
      Controlador.move(Player2, Controlador.dado4());
      this.tiradaspl2++;
      this.primero = 1;
      this.segundo = 2;
      console.log(`- - -  2: ${this.tiradaspl2}`)
      this.nameplayer = Player2;

    }
  }

  puntos(player) {
    if (Controlador.numplayer == 1) {
      pointsplayerOne.innerHTML = Player1.puntos;

    }


    if (Controlador.numplayer == 2) {

      pointsplayerOne.innerHTML = Player1.puntos;
      pointsplayertwo.innerHTML = Player2.puntos;


    }
  }
  locateplayer(PlayerNum, stringname, positionbox, ubicacion) {



    // let posboxold = document.querySelector(`#pos${this.map}${ubicacion} .box${positionbox}`);

    let posbox = document.querySelector(`#${this.map}${ubicacion} .box${positionbox}`);
    // posbox.innerHTML += stringname;


    if (posbox.style.backgroundColor == "lightgreen") {
      console.log('esta lleno')

      PlayerNum.pos -= 1;
      Controlador.move(PlayerNum, Controlador.dado4())
      PlayerNum.last = positionbox;

      posbox.innerHTML = `P${PlayerNum.id - 1}`;
    } else {
      posbox.innerHTML = stringname;
    }





    // posbox.style.backgroundColor = PlayerNum.color;
  }

}
Controlador = new GameController(0, 0, 1, 2, 0, "Player1", 'return', undefined, undefined, 'pos1')

PreguntasList = new Pregu();

window.addEventListener('load', () => {



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
document.getElementById('mapsettingssmall').addEventListener('click', () => {
  if (document.getElementById('mapsettingsbig').style.backgroundColor == "lightgreen") {
    document.getElementById('mapsettingsbig').style.backgroundColor = "rgb(114, 185, 185)"
    document.getElementById('mapsettingssmall').style.backgroundColor = "lightgreen";

  } else {
    document.getElementById('mapsettingssmall').style.backgroundColor = "lightgreen";
    Controlador.map = 'pos1';
  }

})
document.getElementById('mapsettingsbig').addEventListener('click', () => {
  if (document.getElementById('mapsettingssmall').style.backgroundColor == "lightgreen") {
    document.getElementById('mapsettingssmall').style.backgroundColor = "rgb(114, 185, 185)"
    document.getElementById('mapsettingsbig').style.backgroundColor = "lightgreen";

  } else {
    document.getElementById('mapsettingsbig').style.backgroundColor = "lightgreen";
    Controlador.map = 'pos2';
  }

})
document.getElementById('btnLoadGame').addEventListener('click', () => {


  if (Controlador.map == 'pos1') {
    Controlador.mapaS()
  } else if (Controlador.map == 'pos2') {
    Controlador.mapaXL()

  }




  if (Controlador.numplayer == 2) {
    playerturno.innerHTML = Player1.name;

    Controlador.locateplayer(Player1, "P1", 1, 1, 0)
    Controlador.locateplayer(Player2, "P2", 2, 1, 0)
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
document.getElementById('r1').addEventListener('click', () => {
  Controlador.getanswer('r1', PreguntasList.cq)

})

document.getElementById('r2').addEventListener('click', () => {
  Controlador.getanswer('r2', PreguntasList.cq)

})
document.getElementById('r3').addEventListener('click', () => {
  Controlador.getanswer('r3', PreguntasList.cq)

})
document.getElementById('r4').addEventListener('click', () => {
  Controlador.getanswer('r4', PreguntasList.cq)

})
document.getElementById('dadoon').addEventListener('click', function a() {
  if (Controlador.numplayer == 1) {
    Controlador.turnotirar();
  } else if (Controlador.numplayer == 2) {
    Controlador.turnotirar2();
  }
  if (this.pause == 1) {
    this.removeEventListener('click', a)
  }



})

