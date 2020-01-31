

function includeJS(src)
{

  var script = document.createElement('script');

script.src = src  ;

document.head.appendChild(script); //or something of the likes


}
includeJS('js/Class/Players.js')
includeJS('js/Class/Game.js')
//includeJS('js/Class/Table.js')
includeJS('js/views/Tableview.js')
//includeJS('js/models/TableModel.js')
includeJS('js/controllers/controllerTable.js')
includeJS('js/views/infoview.js')
//includeJS('js/views/playersview.js')
//includeJS('js/controllers/asignarPlayers.js')
includeJS('js/controllers/controllerInfo.js')
//includeJS('js/models/modelInfo.js')


includeJS('js/ui.js')


  


