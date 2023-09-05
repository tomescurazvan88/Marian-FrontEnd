
function computeIncome(text, cursEuro, cursDolar) {
  const words = text.split(/\s+/);  

  let venitTotal = 0;

  for (let i = 0; i < words.length; i++) {
    const word = words[i];

    if (!isNaN(word)) {
      const nextWord = words[i + 1];

      if (nextWord) {
        if (nextWord.toLowerCase() === 'euro') {
          venitTotal += parseFloat(word) * cursEuro * 12; 

        } else if (nextWord.toLowerCase() === 'usd' || nextWord.toLowerCase() === 'dolari') {

          venitTotal += parseFloat(word) * cursDolar * 12; 

        } else if (nextWord.toLowerCase() === 'lei') {
          venitTotal += parseFloat(word); 
        }
      }
    }
  }

  return `Venitul total anual al lui Ion este de ${venitTotal.toFixed(2)} lei`;
}

const firstSentence = `Ion castiga 5000 lei/luna din salariu, 10000 lei/an bonus si 1500 lei/luna din freelancing.`;
const secondSentence = `Andrei are un salariu de 1000 euro/luna, un bonus de 9000 lei, si mai castiga suplimentar aproximativ 500 usd/luna din freelancing`;
const cursEuro = 4.95;
const cursDolar = 4.7;

const rezultat1 = computeIncome(firstSentence, cursEuro, cursDolar);
const rezultat2 = computeIncome(secondSentence, cursEuro, cursDolar);

console.log(rezultat1);
console.log(rezultat2);