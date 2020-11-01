function calcular (valor1, valor1, operacao) {

    var valor1 = document.getElementById ('numero1').value  // tem que guardar o valor do 1º input
    var valor2 = document.getElementById('numero2').value // tem que guardar o valor do 2º input
    var operacao = document.getElementById('operacao').value; //monta a operação
    var resultado = document.querySelector('.texto') // tem que mostrar o resultado da operação
  

    switch (operacao)  {
    case "somar":
        var calculo = parseInt(valor1) + parseInt (valor2)
    return resultado.innerHTML=  `O resultado da operação: ${calculo}`
       break;
    case "subtrair":
        calculo = parseInt(valor1) - parseInt (valor2)
        return resultado.innerHTML = `O resultado da operação é: ${calculo}`
    case "multiplicar":
        calculo = parseInt(valor1) * parseInt (valor2)
        return resultado.innerHTML = `O resultado da operaçãoé: ${calculo}`
    case "dividir":
        calculo = parseInt(valor1) - parseInt (valor2)
        return resultado.innerHTML = `O resultado da operação é: ${calculo}`
    default:
        break

    }
} 
