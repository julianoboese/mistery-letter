const parag = document.getElementById('carta-gerada');
const createButton = document.getElementById('criar-carta');

function setRandomClasses(wordFromPhrase) {
  const styleGroup = ['newspaper', 'magazine1', 'magazine2'];
  const sizeGroup = ['medium', 'big', 'reallybig'];
  const rotateGroup = ['rotateleft', 'rotateright'];
  const skewGroup = ['skewleft', 'skewright'];
  const randomStyle = styleGroup[Math.floor(Math.random() * (styleGroup.length))];
  const randomSize = sizeGroup[Math.floor(Math.random() * (sizeGroup.length))];
  const randomRotate = rotateGroup[Math.floor(Math.random() * (rotateGroup.length))];
  const randomSkew = skewGroup[Math.floor(Math.random() * (skewGroup.length))];

  wordFromPhrase.classList.add(randomStyle, randomSize, randomRotate, randomSkew);

  return wordFromPhrase;
}

function generateLetter() {
  createButton.addEventListener('click', () => {
    parag.innerHTML = '';
    const inputedText = document.getElementById('carta-texto').value;
    if (!inputedText.trim()) {
      parag.innerHTML = 'Por favor, digite o conteúdo da carta.';
    } else {
      const wordsArray = inputedText.split(' ');
      for (let i = 0; i < wordsArray.length; i += 1) {
        const word = document.createElement('span');
        setRandomClasses(word);
        word.innerHTML = wordsArray[i];
        parag.appendChild(word);
      }
    }
  });
}

generateLetter();
