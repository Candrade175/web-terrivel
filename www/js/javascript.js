var numPedras = document.getElementById("num_pedras");
var eNumPedras = document.getElementById("iconeErroNumPedras");

var nome = document.getElementById("nome");
var eNome = document.getElementById("iconeErroNome");

var form = document.getElementById("formulario");

var metodo = document.getElementById("metodo");

var tipoPedra = document.getElementById("tipo_pedras").value;

var sorteio = document.getElementById("checkbox1");

function validarFormulario() {
	//Validação de número de pedras ([0, inf[)
	if (numPedras.value < 0 || isNaN(numPedras.value))
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

	//Método de envio
	form.method = metodo.value;

	//Sorteando o tipo de pedra caso a opção 'Sim' tenha sido marcada
	if (sorteio.checked)
	{
		var x = Math.floor((Math.random() * 4));

		if (x == 0)
			tipoPedra = "Marroada";
		else if (x == 1)
			tipoPedra = "Ametista";
		else if (x == 2)
			tipoPedra = "Topazio";
		else
			tipoPedra = "Espinela";
	}

	return true;
}