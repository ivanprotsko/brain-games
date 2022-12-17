import readlineSync from 'readline-sync';
import getRandom from '../components/get-random.js';
import Cli from '../cli.js';
import GetGreeting from '../components/get-greeting.js';
import getRandomArbitrary from '../components/get-random-arbitrary.js';
import getFormulaResult from '../components/get-formula-result.js';
import checkUserAnswerFormat from "../components/check-user-answer-format.js";
import {
  congratulationFeedback,
  correctAnswerFeedback,
  outOfRulesFeedback,
  wrongAnswerFeedback,
} from "../components/feedback-config.js";

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
    const userAnswerFormat = checkUserAnswerFormat(gameType, userAnswer);
    if (!userAnswerFormat) {
      correctAnswerSum = outOfRulesFeedback(gameType);
      correctAnswerSum = -1;
    }

    if (userAnswer === correctAnswer) {
      correctAnswerFeedback();
    }
    if (userAnswer !== correctAnswer) {
      correctAnswerSum = wrongAnswerFeedback(userName, userAnswer, correctAnswer);
      correctAnswerSum = -1;
    }

    if (correctAnswerSum === gameRounds - 1) {
      congratulationFeedback(userName);
    }

  }
};
export default BrainCalc;
