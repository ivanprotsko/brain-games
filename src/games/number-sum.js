import readlineSync from 'readline-sync';
import setRoundsNumber from '../components/set-rounds-number.js';

const SumOfNumberGame = (questionQuantity, userName) => {
  // Set question quantity
  const questionQuantityNumber = setRoundsNumber();

  const getRandom = () => {
    const randomNumber = Math.random() * 50;
    const randomRoundedNumber = Math.floor(randomNumber);
    return randomRoundedNumber;
  };

  let numberOne;
  let numberTwo;
  let correctAnswer;
  let correctAnswerSum;
  for (correctAnswerSum = 0; correctAnswerSum < questionQuantityNumber; correctAnswerSum += 1) {
    numberOne = getRandom();
    numberTwo = getRandom();
    correctAnswer = numberOne + numberTwo;
    console.log(`What is sum of numbers: ${numberOne} + ${numberTwo}?`);
    const userAnswer = parseInt(readlineSync.question('Your answer: '));
    if (!isNaN(userAnswer)) {
      // Check user answer
      if (userAnswer === correctAnswer) {
        console.log('Correct!');
      } else {
        // Exit game
        console.log(`Wrong! Correct answer is "${correctAnswer}"`);
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

export default SumOfNumberGame;
