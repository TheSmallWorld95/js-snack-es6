// Milestone 1
// Definire un array di oggetti;
// ogni oggetto rappresenta un gatto, che è caratterizzato da: nome, età, colore e sesso.
// Tramite la funzione .forEach(), stampare in pagina tutti i gattini,
// ciascuno con il proprio colore e il proprio nome.

const cattery = [
  {
    name: "Sirius",
    age: 12,
    color: "black",
    gender: "male"
  },
  {
    name: "Hermione",
    age: 25,
    color: "orange",
    gender: "female"
  },
  {
    name: "Voldy",
    age: 87,
    color: "white",
    gender: "male"
  },
  {
    name: "Neville",
    age: 6,
    color: "red",
    gender: "female"
  },
]

// cattery.forEach((item) => {
//   $("#cathouse").append
//   (
//     `
//     <li> Il gatto ${item.name} è di colore: ${item.color}
//     `
//   )
// });


// Milestone 2
// Dividere i gatti in due contenitori distinti in base al sesso
// e aggiungere a fianco di ogni gattino un fiocco colorato
// di rosa, se femmina, o di blu, se maschio.
// Il colore del fiocco deve essere più tenue se il gatto è più giovane,
// più scuro se il gatto è più vecchio.

const male = cattery.filter((item) => item.gender == "male")
const female = cattery.filter((item) => item.gender == "female")

newArray = []

cattery.forEach((item) => {
  if (item.age < 15) {
    newObj = {...item, opacity: 0.3}
  } else if (item.age > 15 && item.age < 50) {
    newObj = {...item, opacity: 0.6}
  } else {
    newObj = {...item, opacity: 1}
  }

newArray.push(newObj)



//   if (item.gender == "male") {
//     $("#cathouse").append
//     (
//       `
//       <li> Il gatto ${item.name} è di colore: ${item.color} <i class="fas fa-award lightblue"></i></li>
//       `
//     )
//
//   } else {
//     $("#cathouse").append
//     (
//       `
//       <li> Il gatto ${item.name} è di colore: ${item.color} <i class="fas fa-award pink"></i></li>
//       `
//     )
//
//   }
});

console.log(newArray);


// Milestone 3
// Creare un nuovo array con prima tutti i gattini femmina e poi tutti i gattini maschio,
// inserendo solamente nome e colore e colore e opacità del fiocco per ogni gatto.
