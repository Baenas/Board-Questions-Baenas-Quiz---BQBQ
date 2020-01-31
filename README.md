
### Tecnica
HTML 5 , Javascript Nativo y css

## Que es BQBQ?

BQBQ o tambien llamado BOARD-QUESTIONS-BAENAS-QUIZ  es un juego creado para el proyecto del modulo 1 de ironhack, creado por Daniel Baenas Gomez.

## En que consiste?

BQBQ es un juego de preguntas sobre Javascript , HTML y CSS en el cual el jugador tendra que responder una serie de preguntas , dependiendo en que casilla entra.  Este jugador  obtendra puntos basados en la dificultad de la pregunta , para asi conseguir un mayor numero de puntos  para determinar el ganador de la partida .

### Estados del Juego
* __Pantalla de  configuracion de los parametros del juego__
  * Numero de jugadores variando de 1 a 4.
  * Puntuacion requerida para que un jugador gane.
  * Duracion de la partida. (esto cambiara el tamaño del tablero en funcuion de la dificultad/duracion).
  * ...
* __Pantalla de asignacion de los jugadores__
  * Antes de empezar el juego se asiganara un color a cada jugador.
  * Aparecera un boton para  que se  genere el tablero y los jugadores
* __Pantalla Principal del juego__
  * Tablero
  * *  Donde se ejecuta la mayor parte del juego
  * Ventanas adicionales
  * * Seran las ventanas que se mostraran para mostrar informacion o generar acciones
  * Seccion LOG
  * * Registro del juego para cada accion
  * Seccion INFO 
  * * Mostrar informacion como botones , campos de texto y demas cosas.
* __Fin de la partida__
* Cuando un jugador cumpla las condiciones para ganar, se mostrara el ranking de los jugadores de la partida
y recompensara al ganador

### MVP
* Generar el tablero
* Poder determinar el numero de jugadores
* Tirar dado
* Mover jugador por el tablero

### CODE STRUCTURE


``` javascript
class Game(){
 constructor(size){
 this.size = size;
 
 }
}

class Dice(){
 constructor(sides){
 this.sides = sides;
 
 }
}
class Questions(){

 constructor(question){
 this.question = [[.
 {id:1, type: 1, questionsring : 'let num = 1;', question 'que retorna?', res1: 1, res2:10, red3:2, res4:0 },
  {id:2, type: 1, questionsring : 'let num =10;', question 'que retorna?', res1: 1, res2:10, red3:2, res4:0 }

 ]; 
 
 }
}


class Players(){
 constructor(numplayers,playerinfo){
 this.numplayers = numplayers;
 
 this.playerinfo = [.
 {id:1, pos : 0, name : 'Player One', active : 1,  color : 'red' , points : 1, correct : 1, fails : 3, turn 1 },
 {id:2, pos : 0,  name : 'Player Two', active : 1,  color : 'blue' , points : 4, correct : 4, fails : 0, turn 2},
 {id:3, pos : 0, name : 'Player Three', active : 0,  color : 'yellow' , points : 2, correct : 2, fails : 2, turn 3 },
 {id:4, pos : 0, name : 'Player Four ', active : 0,  color : 'green' , points : 1, correct : 1, fails : 0, turn 4 }

 ]; 
 }
}
``` 


## Links
* [BQBQ Trello](https://trello.com/b/2Klk5f8W/projecto-modulo-1)
* [Github](https://github.com/Baenas/Board-Questions-Baenas-Quiz---BQBQ)
