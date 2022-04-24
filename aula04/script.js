// Solicitar o nome do aluno e as 3 notas
//   do bimestre calcular a média daquele aluno.

//   A média positiva deverá ser maior que 6

//   Se o aluno passou no bimestre, dar os 
//   parabéns.

//   Se o aluno não passou no bimestre, 
//   motivar o aluno a dar seu melhor na prova
//   de recuperação.

//   Em ambos os casos, mostre uma mensagem com o nome do aluno e a nota

let nome = prompt("Informe o nome do aluno ")
let n1 = Number(prompt("Digite a primeira nota do aluno: "))
let n2 = Number(prompt("Digite a segunda nota do aluno: "))
let n3 = Number(prompt("Digite a terceira nota do aluno: "))
let media = (n1 + n2 + n3)/3
if (media > 6) {
  alert("Parabéns " + nome + "!Sua média é " + media + " e você está aprovado!")
}else {
  alert("Infelizmente sua média de " +media+ " não foi necessária para aprovação, " + nome + ".Estude um pouco mais para a avaliação de recuperação")

}
