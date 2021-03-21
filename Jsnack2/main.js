// Creare un array di oggetti di squadre di calcio.
// Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
// Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
// Generare numeri random al posto degli 0 nelle proprietà:
// Punti fatti e falli subiti.
// Infine usando la destrutturazione creiamo un nuovo array
// i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.

// Creo un array di squadre di calcio(oggetti) con proprietà:
// nome , punti , falli

const teams = [
  {
    name: "Inter",
    points: 0,
    fouls: 0,
  },

  {
    name: "Real Madrid",
    points: 0,
    fouls: 0,
  },

  {
    name: "Barcellona",
    points: 0,
    fouls: 0,
  },

  {
    name: "Milan",
    points: 0,
    fouls: 0,
  },

  {
    name: "PSG",
    points: 0,
    fouls: 0,
  },

  {
    name: "Ajax",
    points: 0,
    fouls: 0,
  },
]

// Creo un array vuoto che successivamente verrà riempito con le proprietà
// (nomi e falli subiti)

let newArray = [

]

// Assegno a punti e falli subiti un numero randomico

for (let i = 0; i < teams.length; i++) {
  teams[i].points = randomNumberInRange(0, 100);
  teams[i].fouls = randomNumberInRange(0, 100);
  // Pusho all'interno dell'array appena
  // creato solo il nome e i falli
  const {name, fouls} = teams[i]

  newArray.push({name, fouls});
}


console.log(newArray);

// FUNCTIONS

function randomNumberInRange(min, max) {
  if (isNaN(min) || isNaN(max)) {
    console.log("Non sono numeri");
  } else {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
}

console.log(teams);
