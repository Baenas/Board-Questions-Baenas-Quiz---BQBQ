class TableView {
  constructor() {
 


  }
locateplayer(PlayerNum,stringname){

   let ubip1 = document.querySelector(`#gamepanel #box-x${PlayerNum.x}-y${PlayerNum.y}`);
   
   let posbox = document.createElement('span');
   posbox.innerHTML = stringname;
ubip1.appendChild(posbox)



}
  
moveplayer(Playernum){

  

}
   genearteMap(numerofila,cuadroancho,canti){
    let x = 0;
    let y = 0;
 

    for (let count = 0; count < canti; count++) {
    
        for (let ind = 0; ind < numerofila; ind++) {
          let js = 0;
          let html = 1;
          let css = 2;

         
          
                y = ind;
                
            const cont1 = document.getElementById('gamepanel');
            let cuadro = document.createElement('div');
            let player = document.createElement('span');
            player.innerHTML = "1"
        
            cuadro.className = "boxv1";
            
         //  cuadro.innerHTML = `x${x} y${y} `; 

            cuadro.id= `box-x${x}-y${y}`;
      /*       
          cuadro.innerHTML = count +1 ;
             */
            cont1.style.width = cuadroancho * numerofila + cuadroancho  +  "px"
            cont1.appendChild(cuadro);
            cuadro.style.width = `${cuadroancho}px`;
            cuadro.style.height = `${cuadroancho}px`;
            
    /* 
            cuadro.innerHTML += Math.floor(Math.random() * 3) + 1  ; */

            
            if (cuadro.id== `box-x${x}-y${0}`) {
              cuadro.style.backgroundColor  = ""
                cuadro.setAttribute('data-box','4');
                cuadro.setAttribute('data-border','border');
               
                        }else if( cuadro.id== `box-x${count}-y${canti -1}` ){
                           
                      
                            cuadro.setAttribute('data-box','2');
                            cuadro.setAttribute('data-border','border');
                        }else if(cuadro.id== `box-x${0}-y${y}`){
                         
                
                            cuadro.setAttribute('data-box','1');
                            cuadro.setAttribute('data-border','border');
                        }else if(cuadro.id== `box-x${canti -1}-y${ind}` ){
                
                            
                            cuadro.setAttribute('data-box','3');
                            cuadro.setAttribute('data-border','border');
                        }else{
                          cuadro.style.backgroundColor  = "white"
                          cuadro.innerHTML = "";
                          
                        }
                       
            /*
            if (cuadro.innerHTML ==  `x0 y${js} `) {
              cuadro.style.backgroundColor = "salmon"
              cuadro.innerHTML = "JS"
            }
            if (cuadro.innerHTML ==  `x0 y${html} `) {
              cuadro.style.backgroundColor = "#98FB98	"
              cuadro.innerHTML = "CSS"
            }
            if (cuadro.innerHTML ==  `x0 y${css} `) {
              cuadro.style.backgroundColor = "#87CEEB"
              cuadro.innerHTML = "HTML"
            }
*/
               } 
               x = x +1;
             
            }
          
          }
          
}
