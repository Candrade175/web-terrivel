var numPedras = document.getElementById("numPedras");
var eNumPedras = document.getElementById("iconeErroNumPedras");

var nome = document.getElementById("nomeMonstro");
var eNome = document.getElementById("iconeErroNome");

function validarFormulario() {
	//Validação de número de pedras ([0, inf[)
	if (numPedras.value < 0)
	{
		numPedras.parentNode.classList.add("has-error");
		eNumPedras.classList.add("glyphicon-remove");

		numPedras.parentNode.classList.remove("has-success");
		eNumPedras.classList.remove("glyphicon-ok");

		return false;
	}
	else
	{
		numPedras.parentNode.classList.add("has-success");
		eNumPedras.classList.add("glyphicon-ok");

		numPedras.parentNode.classList.remove("has-error");
		eNumPedras.classList.remove("glyphicon-remove");

	}

	//Validação de nome (somente letras)
	for (var i = 0; i < nome.value.length; i++)
		if ((nome.value[i] < 'a' || nome.value[i] > 'z') && (nome.value[i] < 'A' || nome.value[i] > 'Z'))
		{
			nome.parentNode.classList.add("has-error");
			eNome.classList.add("glyphicon-remove");

			nome.parentNode.classList.remove("has-success");
			eNome.classList.remove("glyphicon-ok");

			return false;
		}
		else
		{
			nome.parentNode.classList.add("has-success");
			eNome.classList.add("glyphicon-ok");

			nome.parentNode.classList.remove("has-error");
			eNome.classList.remove("glyphicon-remove");
		}

	return true;
}