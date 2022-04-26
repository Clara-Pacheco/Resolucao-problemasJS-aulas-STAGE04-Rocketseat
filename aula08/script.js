/*

  Faça um programa que tenha um menu e apresente a seguinte mensagem:
  
  Olá usuário! Digite o número da opção desejada

    1. Cadastrar um item na lista
    2. Mostrar itens cadastrados
    3. Sair do programa
  
  --- 
  O programa deverá capturar o número digitado pelo usuário e mostrar o seguintes cenários:

  Caso o usuário digite 1, ele poderá cadastrar um item em uma lista
  Caso o usuário digite 2, ele poderá ver os itens cadastrados
    Se não houver nenhum item cadastrado, mostrar a mensagem: 
      "Não existem itens cadastrados"
  Caso o usuário digite 3, a aplicação deverá ser encerrada.

*/

let num_option;
let list = [];

while (num_option != 3) {
  num_option = Number(prompt(`
  Olá usuário! Digite o número da opção desejada

  1. Cadastrar um item na lista
  2. Mostrar itens cadastrados
  3. Sair do programa`))

  switch(num_option){
    case 1:
      let itemlist = prompt('Digite o nome de um item para lista: ')
      list.push(itemlist);
      break;
    
    case 2:
      if (list.length == 0){
        alert("Não existem itens cadastrados")
      }else {
        alert(list)
      }
      break;

    case 3:
      alert("Tchau!")
      break;
    
    default:
      alert("Opção inválida")
      break;
  }
}