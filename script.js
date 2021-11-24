const parag = document.getElementById('carta-gerada');
const createButton = document.getElementById('criar-carta');

function generateLetter() {
  createButton.addEventListener('click', () => {
    while (parag.firstChild) {
      parag.removeChild(parag.firstChild);
    }
    const inputedText = document.getElementById('carta-texto').value;
    const wordsArray = inputedText.split(' ');
    for (let i = 0; i < wordsArray.length; i += 1) {
      const word = document.createElement('span');
      word.innerHTML = wordsArray[i];
      parag.appendChild(word);
    }
  });
}

generateLetter();
