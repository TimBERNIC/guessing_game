function guessNumber() {
  let playerGuess;
  let numberToGuess = Math.ceil(Math.random() * 10);

  prompt(`Devinez le nombre entre 1 et 10 Inclus`);

  while (playerGuess != numberToGuess) {
    playerGuess = prompt(
      "Echec, essai encore! le nombre était " + numberToGuess + " !"
    );
    numberToGuess = Math.ceil(Math.random() * 10);
  }

  alert(`Félicitation! le nombre était ${numberToGuess}!`);
}
