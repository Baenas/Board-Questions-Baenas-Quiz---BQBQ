// aqui creo el hijo con el contenido del panel settings
function loadSettingsWindow() {



	startGamebtn.classList.remove('displaynone');


	let newChildSettings = document.createElement('div');
	newChildSettings.innerHTML = ``

	loader.appendChild(newChildSettings);
	gamestatus.innerHTML = "Configurando";

}
loadSettingsWindow()
let numberofplayers = 0;
function changecolorInput(settingsWindowsPlayerid, onemore) {
	if (settingsWindowsPlayerid.value != "") {
		numberofplayers = onemore;
		settingsWindowsPlayerid.style.backgroundColor = "lightgreen"
	} else {
		settingsWindowsPlayerid.style.backgroundColor = "salmon"
	}
	btncreategameonStartPlayers.value = ` ${numberofplayers} Jugadores`;
}

function changebuttonStartPlayersAdd(id, number) {
	id.disabled = false;
	id.value = `Player ${number}`;

	changecolorInput(settingsWindowPlayer1, 1)
	changecolorInput(settingsWindowPlayer2, 2)
	changecolorInput(settingsWindowPlayer3, 3)
	changecolorInput(settingsWindowPlayer4, 4)
}

function changeMapValue(map) {

	btncreategameonStart.value = `Mapa  ${map} `;

	btncreategameonStart.style.backgroundColor = "lightgreen";
	startGamebtn.classList.remove('displaynone')

}

function settingsWindowsResetParent() {

	location.reload();

}



startGamebtn.addEventListener('click', () => {
	/* if (settingsWindowPlayer1.value != "") {

	} */
	startGamebtn.classList.add('displaynone');
	settingsdiv.classList.add('displaynone');
	/* 	parentgame.classList.remove('displaynone');
		panelinfo.classList.remove('displaynone');
		gamepanel.classList.remove('displaynone'); */




})
savename(settingsWindowPlayer1, 'PlayerName1')
savename(settingsWindowPlayer2, 'PlayerName2')
savename(settingsWindowPlayer3, 'PlayerName3')
savename(settingsWindowPlayer4, 'PlayerName4')
clickTituloSettings(settingsWindowPlayer1title, 0, 'one', player1settings, settingsWindowPlayer1, 'PlayerName1');
clickTituloSettings(settingsWindowPlayer2title, 1, 'two', player2settings, settingsWindowPlayer2, 'PlayerName2');
clickTituloSettings(settingsWindowPlayer3title, 2, 'three', player3settings, settingsWindowPlayer3, 'PlayerName3');
clickTituloSettings(settingsWindowPlayer4title, 3, 'four', player4settings, settingsWindowPlayer4, 'PlayerName4');

function savename(objeto, key) {
	objeto.addEventListener('change', () => {

		sessionStorage.setItem(key, objeto.value)

	})

}



function clickTituloSettings(objeto, player, stringnumber, playersettings, value, key) {
	objeto.addEventListener('click', () => {

		if (totalplayernumber == player) {
			changebuttonStartPlayersAdd(playersettings, stringnumber)
			totalplayernumber += 1;
			sessionStorage.setItem("PlayerNum", totalplayernumber);

			sessionStorage.setItem(key, value.value)

		}

	})


}
