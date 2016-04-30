var numPedras = document.getElementById("num_pedras");
var eNumPedras = document.getElementById("iconeErroNumPedras");

var nome = document.getElementById("nome");
var eNome = document.getElementById("iconeErroNome");

var form = document.getElementById("formulario");

var metodo = document.getElementById("metodo");

var tipoPedra = document.getElementById("tipo_pedras").value;

var sorteio = document.getElementById("checkbox1");

var AZUL = "0D15F1";
var AMARELO = "E6F10D";
var INDIGO = "9065AC";
var LARANJA = "E3921A";
var VERDE = "1BC31E";
var VERMELHO = "FB0622";
var VIOLETA = "B854B8";

function validarFormulario() {
	var corCeu1 = document.getElementById("corCeu1").value;
	var corCeu2 = document.getElementById("corCeu2").value;

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


	console.log(corCeu1);
	console.log(corCeu2);

	//Cor do Céu
	if (corCeu1 == "Azul")
		corCeu1 = AZUL;
	else if (corCeu1 == "Amarelo")
		corCeu1 = AMARELO;
	else if (corCeu1 == "Indigo")
		corCeu1 = INDIGO;
	else if (corCeu1 == "Laranja")
		corCeu1 = LARANJA;
	else if (corCeu1 == "Verde")
		corCeu1 = VERDE;
	else if (corCeu1 == "Vermelho")
		corCeu1 = VERMELHO;
	else
		corCeu1 = VIOLETA;

	if (corCeu2 == "Azul")
		corCeu2 = AZUL;
	else if (corCeu2 == "Amarelo")
		corCeu2 = AMARELO;
	else if (corCeu2 == "Indigo")
		corCeu2 = INDIGO;
	else if (corCeu2 == "Laranja")
		corCeu2 = LARANJA;
	else if (corCeu2 == "Verde")
		corCeu2 = VERDE;
	else if (corCeu2 == "Vermelho")
		corCeu2 = VERMELHO;
	else
		corCeu2 = VIOLETA;

	return true;
}