import readlineSync from 'readline-sync';
import getRandom from '../components/get-random.js';
import cli from '../cli.js';
import getRandomArbitrary from '../components/get-random-arbitrary.js';
import getFormulaResult from '../components/get-formula-result.js';
import getFeedback from '../components/get-feedback.js';

const BrainCalc = (gameRounds) => {
  const userName = cli();
  for (let correctAnswerSum = 0; correctAnswerSum < gameRounds; correctAnswerSum += 1) {
    const numberOne = getRandom();
    const numberTwo = getRandom();
    const operators = ['+', '-', '*'];
    const randomOperator = operators[getRandomArbitrary(0, 2)];
    const correctAnswer = getFormulaResult(numberOne, numberTwo, randomOperator);
    console.log(correctAnswer);
    console.log(`What is sum of numbers: ${numberOne} ${randomOperator} ${numberTwo}?`);
    const userAnswer = parseInt(readlineSync.question('Your answer: '));
    const gameData = {
      gameType: 'game-type-number',
      userName,
      userAnswer,
      correctAnswer,
      correctAnswerSum,
      gameRounds,
    };
    correctAnswerSum = getFeedback(gameData);
  }
};
export default BrainCalc;
