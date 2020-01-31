class ControllerTable {
  constructor(view) {

    this.view = view;
    this.show()


  }
  show() {

    this.view.genearteMap(6, 80, 6);

    switch (sessionStorage.getItem('PlayerNum')) {
      case 1:
        this.view.locateplayer(Player1, "P1");

      case 2:

        this.view.locateplayer(Player2, "P2");

      case 3:

        this.view.locateplayer(Player2, "P3");


      case 4:
        this.view.locateplayer(Player4, "P4");


    }





  }




}
window.addEventListener('load', (event) => {
  console.log('DOM Content loaded');

  const TableALl = new ControllerTable(new TableView);
})


