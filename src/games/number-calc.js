import readlineSync from 'readline-sync';
import GetFeedbackNumber from '../components/get-feedback-number.js';
import getRandom from '../components/get-random.js';
import Cli from '../cli.js';
import GetGreeting from '../components/get-greeting.js';
import getRandomArbitrary from '../components/get-random-arbitrary.js';
import getFormulaResult from '../components/get-formula-result.js';

const BrainCalc = (gameRounds) => {
  const gameType = 'game-type-number';
  GetGreeting();
  const userName = Cli();
  for (let correctAnswerSum = 0; correctAnswerSum < gameRounds; correctAnswerSum += 1) {
    const numberOne = getRandom();
    const numberTwo = getRandom();
    const operators = ['+', '-', '*'];
    const randomOperator = operators[getRandomArbitrary(0, 2)];
    let correctAnswer = getFormulaResult(numberOne, numberTwo, randomOperator);
    console.log(correctAnswer);
    console.log(`What is sum of numbers: ${numberOne} ${randomOperator} ${numberTwo}?`);
    const userAnswer = parseInt(readlineSync.question('Your answer: '));
    let gameProps = {
      userName: userName,
      userAnswer: userAnswer,
      correctAnswer: correctAnswer,
      correctAnswerSum: correctAnswerSum,
      gameType: 'game-type-number',
      gameRounds: gameRounds,
    };
    correctAnswerSum = GetFeedbackNumber(gameProps);
  }
};
export default BrainCalc;
