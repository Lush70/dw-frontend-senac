function somar () {
    var num1 = Number(document.getElementById(`num1`).value)
    var num2 = Number(document.getElementById(`num2`).value)

    
    var soma = num1 + num2;

    console.log(`O número ${num1} + ${num2} é ${soma}.`)
    
    var resultado = document.getElementById(`resultado`)

    resultado.innerHTML = `A soma dos números é ${soma}.`
}