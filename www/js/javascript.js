var numPedras = document.getElementById("numPedras");

$("#formulario").submit(function(e) {
    e.preventDefault();
});

function validarFormulario() {
	console.log(numPedras.parentNode.className);
	if (numPedras.value < 0)
	{
		numPedras.parentNode.classList.add("has-error");
		numPedras.parentNode.classList.add("has-feedback");
		numPedras.parentNode.classList.add("glyphicon");
	}
}