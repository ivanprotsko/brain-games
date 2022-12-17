import readlineSync from 'readline-sync';
import getRandom from '../components/get-random.js';
import cli from '../cli.js';
import getGreeting from '../components/get-greeting.js';
import checkUserAnswerFormat from '../components/check-user-answer-format.js';
import {
  correctAnswerFeedback,
  wrongAnswerFeedback,
  outOfRulesFeedback,
  congratulationFeedback,
} from '../components/feedback-config.js';

const BrainEven = (gameRounds) => {
  const gameType = 'game-type-yes-or-no';
  getGreeting();
  const userName = cli();
  console.log('Answer "yes" if number is even, otherwise answer "no"');
  for (let correctAnswerSum = 0; correctAnswerSum < gameRounds; correctAnswerSum += 1) {
    const sum = getRandom() + getRandom();
    console.log(`Is "${sum}" even?`);
    const correctAnswer = (sum % 2 === 0) ? 'yes' : 'no';
    const userAnswer = readlineSync.question('Your answer: ');
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
export default BrainEven;
