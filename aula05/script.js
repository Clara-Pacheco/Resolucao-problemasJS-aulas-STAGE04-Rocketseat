/*
  Capture 10 items para compor a lista de um supermercado.
  
  Após capturar os 10 items, imprima-os, separando por vírgula.
*/

lista_supermercado = []

for(let item = 0; item < 10; item++){
  let itemName = prompt("Digite o nome do " + (item+1) + "o item")
  lista_supermercado[item] = itemName
}

alert(lista_supermercado)