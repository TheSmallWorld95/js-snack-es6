// Creare un array di oggetti:
// Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
// Stampare a schermo la bici con peso minore utilizzando destructuring e template literal

const bikes = [];


bikes.push({
  nome: "Fabio",
  peso: 12,
}),

bikes.push({
  nome: "Luca",
  peso: 21,
}),

bikes.push({
  nome: "Giorgio",
  peso: 6,
}),

bikes.push({
  nome: "Francesco",
  peso: 58,
});

let listaPesi = [];
let listaNomi = []

let [bike1, bike2, bike3, bike4] = bikes

listaPesi.push(bike1.peso, bike2.peso, bike3.peso, bike4.peso)
listaNomi.push(bike1.nome, bike2.nome, bike3.nome, bike4.nome)


let min = listaPesi[0]
let index = 0

for (var i = 1; i < listaPesi.length; i++) {
  if (listaPesi[i] < min) {
    min = listaPesi[i]
    index = i
  }
}

console.log(
  `
  ${listaNomi[index]}
  ${listaPesi[index]}
  `
);

// let min = bikes[0].peso
// let = index = 0
//
// for (let i = 1; i < bikes.length; i++) {
//   if (bikes[i].peso < min) {
//     min = bikes[i].peso
//     index = i
//   }
//
// }
//
// console.log(
//   `
//   ${bikes[index].nome}
//   `
// );
