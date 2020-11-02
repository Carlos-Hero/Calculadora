function calcular () {

    var valor1 = parseFloat(document.getElementById ('numero1').value)  // tem que guardar o valor do 1º input
    var valor2 = parseFloat(document.getElementById('numero2').value) // tem que guardar o valor do 2º input
    var operacao = document.getElementById('operacao').value; //monta a operação
    var resultado = document.querySelector('.texto') // tem que mostrar o resultado da operação
    var num1 = document.querySelector('#numero1'); // Busca a tag com o id
    num1.focus();

    switch (operacao)  {
    case "somar":
        var calculo = valor1 + valor2
        return resultado.innerHTML=  `O resultado da operação: ${calculo.toFixed(2)}`
    case "subtrair":
        calculo = valor1 - valor2
        return resultado.innerHTML = `O resultado da operação é: ${calculo.toFixed(2)}`
    case "multiplicar":
        calculo = valor1 * valor2
        return resultado.innerHTML = `O resultado da operação é: ${calculo.toFixed(2)}`
    case "dividir":
        calculo = valor1 / valor2
        return resultado.innerHTML = `O resultado da operação é: ${calculo.toFixed(2)}`
    default:
        break
    }
} 


