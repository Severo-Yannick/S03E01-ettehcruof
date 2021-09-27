// Programme qui pose une question à l'utilisateur et affiche sa réponse dans la console

// Module readline fournit par le runtime node
const readline = require('readline');

// Création de l'interface
const interface = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Générer un nombre aléatoire
const getRandomInt = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min +1)) + min;
}
let proposition = (getRandomInt(1, 101));

// Question posée au user
console.log(`Est-ce que le nombre est ${proposition} ?`);

// Décrit quoi faire au user quand l'évent aura lieu
interface.on('line', (input) => {
  console.log(`Vous avez saisie la valeur ==> ${input}`);
  // Le nombre est trouvé
  // Le nombre est supérieur
  if(input == '+' || 'plus' || 'C\’est plus') {
    console.log(`On va proposer plus grand`);
  }
  // Le nombre est inférieur
  else if(input == '-' || 'moins' || 'C\’est moins') {
    console.log(`On va proposer plus petit`);
  }
  else if(parseInt(input) === proposition) {
    console.log('Gagné !');
    return
  }
  else {
    console.log('Désolé je ne comprends pas');
  }
});