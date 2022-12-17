import readlineSync from 'readline-sync';
import getIsPrime from '../components/get-is-prime.js';
import getRandomArbitrary from '../components/get-random-arbitrary.js';
import Cli from '../cli.js';
import GetGreeting from '../components/get-greeting.js';
import GetFeedbackYesOrNo from '../components/get-feedback-yes-or-no.js';
import checkUserAnswerFormat from "../components/check-user-answer-format.js";
import {
  congratulationFeedback,
  correctAnswerFeedback,
  outOfRulesFeedback,
  wrongAnswerFeedback
} from "../components/feedback-config.js";

const BrainPrime = (gameRounds) => {
  const gameType = 'game-type-yes-or-no';
  GetGreeting();
  const userName = Cli();
  for (let correctAnswerSum = 0; correctAnswerSum < gameRounds; correctAnswerSum += 1) {
    const randomNumber = getRandomArbitrary(1, 50);
    const correctAnswer = getIsPrime(randomNumber) === true ? 'yes' : 'no';
    console.log('Is the number prime?');
    console.log(`${randomNumber}?`);
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

export default BrainPrime;


