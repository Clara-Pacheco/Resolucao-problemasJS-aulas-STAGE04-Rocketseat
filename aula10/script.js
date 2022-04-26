/* 
  Dada uma lista de pacientes, descubra o IMC de cada paciente e imprima

  "Paciente X possui o IMC de: Y"

  Onde X é o nome do paciente e Y é o IMC desse paciente

  Crie uma função para fazer o cálculo de IMC
*/

/*CÁLCULO DO IMC:  peso / (altura * altura) */


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

/*IMC = Weight/(Height **2)- O imc é igual ao peso dividido por altura ao quadrado */


function IMC(weight,height){
    let IMC = Math.round(weight/(height ** 2).toFixed(2))
    return IMC
}
function printPatientIMC(patient){

 return `Paciente ${patient.name} possui o IMC de ${IMC(patient.weight, patient.height)}`
}

for(let patient of patients){
  let result_IMC = printPatientIMC(patient)
  alert(result_IMC)
}

