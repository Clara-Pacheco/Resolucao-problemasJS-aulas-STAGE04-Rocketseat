/*Capturar 2 números
  e fazer as operações matemáticas de
  soma,
  subtração,
  multiplicação,
  divisão e
  resto da divisão
  E para cada operação, mostrar um alerta com o resultado */

  let firstNumber = Number(prompt("Digite o primeiro número: "))
  let secondNumber = Number(prompt("Digite o segundo número: "))
  let result = firstNumber + secondNumber
  alert("Soma: " + result)
  result = firstNumber - secondNumber
  alert("Subtração: " + result)
  result = firstNumber * secondNumber
  alert("Multiplicação: " + result)
  result = firstNumber / secondNumber
  alert("Divisão: " + result)
  result = firstNumber % secondNumber
  alert("Módulo: " + result)