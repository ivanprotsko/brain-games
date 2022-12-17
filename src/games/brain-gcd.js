import readlineSync from 'readline-sync';
import getRandom from '../components/get-random.js';
import GetGCDOfTwoNumbers from '../components/get-gcd-two-numbers.js';
import Cli from '../cli.js';
import GetGreeting from '../components/get-greeting.js';
import checkUserAnswerFormat from '../components/check-user-answer-format.js';
import {
  congratulationFeedback,
  correctAnswerFeedback,
  outOfRulesFeedback,
  wrongAnswerFeedback,
} from '../components/feedback-config.js';

const BrainGCD = (gameRounds) => {
  const gameType = 'game-type-number';
  GetGreeting();
  const userName = Cli();
  console.log('What is greatest common divisor of these two numbers');
  for (let correctAnswerSum = 0; correctAnswerSum < gameRounds; correctAnswerSum += 1) {
    const numberOne = getRandom();
    const numberTwo = getRandom();
    const correctAnswer = GetGCDOfTwoNumbers(numberOne, numberTwo);
    console.log(`${numberOne}, ${numberTwo}`);
    const userAnswer = parseInt(readlineSync.question('Your answer:'));
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

export default BrainGCD;
