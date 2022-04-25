/*
  ** Jogo da advinhação **

  Apresente a mensagem ao usuário:
  "Advinhe o número que estou pensando? Está entre 0 e 10"

  Crie um lógica para gerar um número aleatório 
  e verificar se o número digitado é o mesmo que o aleatório gerado pelo sistema.

  Enquanto o usuário não adivinhar o número, mostrar a mensagem:
  "Erro, tente novamente:"

  Caso o usuário acerte o número, apresentar a mensagem:
  "Parabéns! Você advinhou o número em x tentativas"

  Substitua o "x" da mensagem, pelo número de tentativas
*/

let result = Number(prompt('"Advinhe o número que estou pensando? Está entre 0 e 10"'))
const guess = Math.round(Math.random() *10)

let nAttempts = 1

while(result != guess){
  
  result = Number(prompt("Erro, tente novamente:"))
  nAttempts++
}

if (nAttempts == 1){
  alert(`Parabéns!Eu pensei no número ${guess} e você o advinhou em ${nAttempts} tentativa`)
}else{
  alert(`Parabéns!Eu pensei no número ${guess} e você o advinhou em ${nAttempts} tentativas`)
}
