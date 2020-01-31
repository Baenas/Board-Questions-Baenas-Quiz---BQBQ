class ControllerInfo {
  constructor( view) {

    this.view = view;
    this.show()

  }

  show(){
   
        this.view.ShowPlayer1Info()
       
    
        this.view.ShowPlayer2Info()
       
 
        this.view.ShowPlayer3Info()
       
    
        this.view.ShowPlayer4Info()
       
 
   
   
   
    
  }

  tirardado(){
 
    this.view.dado6();



  }

setplayerturn1(player){
  
let playersnumber = sessionStorage.getItem('PlayerNum')

if (playersnumber == 1) {
    if (player.turno == "Su turno") {
  console.log(`el player ${player.name} acaba de tirar `)
     }
    }
  }
  setplayerturn2(player1,player2){
  
    let playersnumber = sessionStorage.getItem('PlayerNum')
    
    if (playersnumber == 2) {

        if (Player1.turno == "Su turno") {
      console.log(`el player ${player1.name} acaba de tirar `)

      Player1.turno = "Espera"
      Player2.turno = "Su turno"
      playerturno.innerHTML = `${player2.name}`
      
     
         }else if (Player2.turno == "Su turno") {
          console.log(`el player ${player2.name} acaba de tirar `)
  
          Player1.turno = "Su turno"
          Player2.turno = "Espera"
          playerturno.innerHTML = `${player1.name}`
         }
        
      }
      }
}



window.addEventListener('load', () => {
  console.log('DOM Content loaaaaaded');

  const myApp = new ControllerInfo(new Infoview );

  document.getElementById('dadoon').addEventListener('click',() => {
    myApp.tirardado();
    myApp.setplayerturn1(Player1);
    myApp.setplayerturn2(Player1,Player2);
   
   
})

})
