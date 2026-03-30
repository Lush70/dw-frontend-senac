var num1 = Number.parseInt(prompt(`Digite um número: `))
var num2 = Number.parseInt(prompt(`Digite um outro número: `))

var soma = num1 + num2

console.log(`A soma dos números é: ${soma}`)

var resultado = document.getElementById(`area`)
console.log(resultado)

resultado.innerHTML = `<p>A soma dos números é ${soma}</p>`