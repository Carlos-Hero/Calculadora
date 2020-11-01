function calcular () {

    var valor1 = document.getElementById ('numero1').value  // tem que guardar o valor do 1º input
    var valor2 = document.getElementById('numero2').value // tem que guardar o valor do 2º input
    var operacao = document.getElementById('operacao').value; //monta a operação
    var resultado = document.querySelector('.texto') // tem que mostrar o resultado da operação

    switch (operacao)  {
    case "somar":
        var calculo = parseFloat(valor1) + parseFloat(valor2)
    return resultado.innerHTML=  `O resultado da operação: ${calculo.toFixed(2)}`
       break;
    case "subtrair":
        calculo = parseFloat(valor1) - parseFloat(valor2)
        return resultado.innerHTML = `O resultado da operação é: ${calculo.toFixed(2)}`
    case "multiplicar":
        calculo = parseFloat(valor1) * parseFloat(valor2)
        return resultado.innerHTML = `O resultado da operaçãoé: ${calculo.toFixed(2)}`
    case "dividir":
        calculo = parseFloat(valor1) / parseFloat (valor2)
        return resultado.innerHTML = `O resultado da operação é: ${calculo.toFixed(2)}`
    default:
        break

    }
} 
