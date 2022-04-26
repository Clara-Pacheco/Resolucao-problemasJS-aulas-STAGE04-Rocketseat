/* 
  Crie uma lista de pacientes

  Cada paciente dentro da lista, deverá conter
    nome
    idade
    peso
    altura

  Escreva uma lista contendo o nome dos pacientes, suas idades, alturas e pesos.
*/

let patients = [
  {
    name: "Clara",
    age: 39,
    weight: 75,
    height: 1.75,
  },
  {
    name: "Carlos",
    age: 55,
    weight: 90,
    height: 1.85,
  },
  {
    name: "Emma",
    age: 8,
    weight: 25,
    height: 1.20,
  },
]

/*Mostrando o nome de cada paciente com template strings */
// alert(`
//       O primeiro nome é ${listPatients[0].name},
//       o segundo nome é ${listPatients[1].name} e 
//       o terceiro nome é ${listPatients[2].name}`)

/*Para exibir uma lista com somente os nomes dos pacientes, outra com suas idades,
outra com suas alturas e outra com seus pesos.*/

// let patientsNames = []
// let patientsAges = []
// let patientsWeight = []
// let patientsHeight = []

// for (let patient of patients){
//   patientsNames.push(patient.name)
//   patientsAges.push(patient.age)
//   patientsWeight.push(patient.weight)
//   patientsHeight.push(patient.height)
// }

/*Para exibir todas as informações de cada paciente, utilizandfo template strings
 */
for(let patient of patients){
  alert(`${patient.name} tem ${patient.age} anos, uma altura de ${patient.height} metro e pesa ${patient.weight} kilogramas.`)
}
