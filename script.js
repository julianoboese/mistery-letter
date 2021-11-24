const parag = document.getElementById('carta-gerada');
const createButton = document.getElementById('criar-carta');

function generateLetter() {
  createButton.addEventListener('click', () => {
    // while (parag.firstChild) {
    //   parag.removeChild(parag.firstChild);
    // }
    parag.innerHTML = '';
    const inputedText = document.getElementById('carta-texto').value;
    if (!inputedText.trim()) {
      parag.innerHTML = 'Por favor, digite o conteúdo da carta.';
    } else {
      const wordsArray = inputedText.split(' ');
      for (let i = 0; i < wordsArray.length; i += 1) {
        const word = document.createElement('span');
        word.innerHTML = wordsArray[i];
        parag.appendChild(word);
      }
    }
  });
}

generateLetter();
