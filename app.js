// Programme qui pose une question à l'utilisateur et affiche sa réponse dans la console

// Module readline fournit par le runtime node
const readline = require('readline');

// Création de l'interface
const interface = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
// Question posée au user
console.log('Est-ce que le nombre est 50 ?');

// Décrit quoi faire au user quand l'évent aura lieu
interface.on('line', () => {
  console.log('Vous-avez rentré une valeur');
});