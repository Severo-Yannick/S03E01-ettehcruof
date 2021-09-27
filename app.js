// Programme qui pose une question à l'utilisateur et affiche sa réponse dans la console

// Module readline fournit par le runtime node
const readline = require('readline');

// Création de l'interface
const interface = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Nombre aléatoire mini
let minBoundary = 1;
// Nombre aléatoire maxi
let maxBoundary = 101;

// Générer un nombre aléatoire
const getRandomInt = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min +1)) + min;
}
let proposition = (getRandomInt(minBoundary, maxBoundary));

// Question posée au user
console.log(`Est-ce que le nombre est ${proposition} ?`);

// Décrit quoi faire au user quand l'évent aura lieu
interface.on('line', (input) => {
  console.log(`Vous avez saisie ==> ${input}`);
  // Le nombre est supérieur
  if(input === '+' || input === 'plus' || input === 'C\’est plus') {
    minBoundary = proposition ++;
    proposition = (getRandomInt(minBoundary, maxBoundary));
    console.log(`Vous dites plus peut-être ${proposition}`);
    return;
  }
  // Le nombre est inférieur
  else if(input == '-' || input === 'moins' || input === 'C\’est moins') {
    maxBoundary = proposition --;
    proposition = (getRandomInt(minBoundary, maxBoundary));
    console.log(`Vous dites moins peut-être ${proposition}`);
    return;
  }
  // Le nombre est trouvé
  else if(input == '=' || input === 'gagné' || input === 'oui') {
    console.log('Gagné ! ');
    console.log('Fermeture de l\'interface');
    interface.close();
  }
  // La saisie n'est pas conforme
  else {
    console.log('Désolé je ne comprends pas');
  }
});