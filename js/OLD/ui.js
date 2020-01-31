document.getElementById('horanow').innerHTML = "00:00";
function addparpadeo(id) {
	setInterval(() => {
		id.style.backgroundColor = "lightgreen";

		setTimeout(() => {
			id.style.backgroundColor = "salmon";
		}, 200);


		id.style.backgroundColor = "lightgreen";


	}, 800);

}
