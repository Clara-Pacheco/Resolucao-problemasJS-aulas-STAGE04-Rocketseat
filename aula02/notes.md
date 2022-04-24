### [] Tipos de dados: Number
  - Um número

### Operador matemático + 
  - Concatenação ou soma;


### Boas práticas na escrita de nomes de variáveis

- let- vem de "let it change"
- Em inglês;
- Não pode começar com número;
- Não pode ter espaço;
- Não pode usar - (traço), somente _ (underline) ,
- Não pode ter acentuação;
- Não pode ser palavra reservada da linguagem;

#### Boa prática: escrever o nome da variável utilizando camelCase

#### Podemos usar o ; no final de cada instrução - é facultativo;

#### alert(numberOne + numberTwo) irá somar variáveis?    

  alert('Iremos somar 2 números!')
  let numberOne = prompt('Digite o primeiro número: ')
  let numberTwo = prompt('Digite o segundo número: ')
  let result = numberOne + numberTwo
  alert('O resultado final é: ' + result)
##### Não! O prompt sempre devolve como valor uma string, ou seja, 'numberOne' e 'numberTwo' são strings.

  - O sinal de + serve para somar, quando os tipos são números:
    -- alert(2+2)
  - ou para concatenar, quando houver algum dado tipo string:
    -- alert("2" + 2)  

  - Para descobrir qual o tipo de dado:
    typeof: palavra reservada do JS que sempre retornará qual o tipo de dado; não retorna o conteúdo e sim, o tipo do dado dentro de uma variável;
    alert(typeof numberOne)

#### E como fazemos para somar os valores das variáveis numberOne e numberTwo?  

  - Os tipos de dados das variáveis, precisam ser numéricos, para que o + seja usado
    como operador matemático;

  ##### Podemos converter os tipos numéricos: (Manipulação de Dados)

    - type conversion (type casting)  
    - Existem algumas maneiras de fazermos isso no JS e uma delas é envolver o valor da variável
      do tipo string em uma função de nome Number()- no caso de conversão de 'string' para 'número';  

    - Number(): função CONSTRUTORA;
        -- Dentro dela, precisamos passar um argumento, ou seja, o valor que será convertido para número;
        -- Number(numberOne)
        -- Number(numberTwo)
        -- Essa função construtora devolverá o mesmo valor da variável, mas de tipo diferente, agora numérico;

#### [] Atençao na ordem de precedência dos operadores!  

  -- alert((Number(numberOne) + Number(numberTwo))/2)

#### alert("Resultado final: " + Number(numberOne) + Number(numberTwo)) vai funcionar?

    -- A caixa de alert exibirá "Resultado1010";
    -- Ele concatenou tudo, porque entre os dados, existe uma string;
    -- Se existe uma string entre os dados, ele irá concatenar;
    -- Para resolvermos esse problema, temos que usar o group operator, ou seja, os parágrafos
    envolvendo a soma das variáveis- ele entende que a soma das variáveis é uma ação isolada no
    código (isolada do +)
    -- O + agora irá concatenar com a string o resultado do que existe dentro dos parênteses;


