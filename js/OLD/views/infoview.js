class Infoview {
  constructor() {
 
  }


 ShowPlayer1Info(){
 

    nameplayer1.innerHTML = Player1.name;
    pointsplayerOne.innerHTML = ` - ${Player1.puntos}`
    
    this.esmiTurno(Player1.turno);
   }

   
    ShowPlayer2Info(){
  
      
      nameplayer2.innerHTML = Player2.name;
      pointsplayertwo.innerHTML = ` - ${Player2.puntos}`
      
    
    this.esmiTurno(Player2.turno);
   } 
   ShowPlayer3Info(){
    nameplayer3.innerHTML = Player3.name;
    pointsplayerthree.innerHTML = ` - ${Player3.puntos}`
    
  
  this.esmiTurno(Player3.turno);
   }
   ShowPlayer4Info(){
    nameplayer4.innerHTML = Player4.name;
    pointsplayerfour.innerHTML = ` - ${Player4.puntos}`
    
  
  this.esmiTurno(Player4.turno);
  
   } 
   esmiTurno(player){

    if (player.turno == "Su turno") {

    playerturno.innerHTML = player.name;
    }

    
   }

   dado6(){
     let res;
     res = Math.floor(Math.random() * 6) + 1 
    diceresult.value = res;

   }
   
}

