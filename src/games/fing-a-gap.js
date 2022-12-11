import readlineSync from 'readline-sync';
import setRoundsNumber from '../components/set-rounds-number.js';

const FindAGapGame = (questionQuantity, userName) => {
  // Set question quantity
  const questionQuantityNumber = setRoundsNumber();
  const getRandomArbitrary = (min, max) => {
    return Math.round(Math.random() * (max - min) + min);
  };
  const getArithmeticProgression = (n, lim) =>
    Array.from({ length: Math.ceil(lim / n) }, (_, i) => (i + 1) * n);
  const arrayLenght = 10;

  let randomNumber;
  let arithmeticProgressionArray;
  let getArrayRandomGap;
  let missedNumberValue;
  let correctAnswerSum;
  console.log('What type-type-number was missing?');
  for (correctAnswerSum = 0; correctAnswerSum < questionQuantityNumber; correctAnswerSum += 1 ) {
    randomNumber = getRandomArbitrary(1, 25);
    arithmeticProgressionArray = getArithmeticProgression(randomNumber, (randomNumber * arrayLenght));
    getArrayRandomGap = getRandomArbitrary(0, 9);
    missedNumberValue = arithmeticProgressionArray[getArrayRandomGap];
    arithmeticProgressionArray.splice(getArrayRandomGap, 1,'...');
    console.log(arithmeticProgressionArray);
    const userAnswer = parseInt(readlineSync.question('Your answer:'));
    // Is asnwer type equal number?
    if (!isNaN(userAnswer)) {
      // Check user answer
      if (userAnswer === missedNumberValue) {
        console.log('Correct!');
      } else {
        // Exit game
        console.log(`Wrong! Correct answer is "${missedNumberValue}"`);
        console.log(`Let's try again, ${userName}`);
        correctAnswerSum = -1;
      }
    } else {
      console.log('Please, answer using only number symbols "0—9999"');
      correctAnswerSum = -1;
    }
  }
  if (correctAnswerSum === questionQuantityNumber) {
    console.log(`Contratulations, ${userName}!`);
  }
};

export default FindAGapGame;
