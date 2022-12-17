import readlineSync from 'readline-sync';
import getRandomArbitrary from '../components/get-random-arbitrary.js';
import getProgression from '../components/get-progression.js';
import Cli from '../cli.js';
import GetGreeting from '../components/get-greeting.js';
import checkUserAnswerFormat from '../components/check-user-answer-format.js';
import {
  congratulationFeedback,
  correctAnswerFeedback,
  outOfRulesFeedback,
  wrongAnswerFeedback,
} from '../components/feedback-config.js';
const FindAGapGame = (gameRounds) => {
  const gameType = 'game-type-number';
  GetGreeting();
  const userName = Cli();
  console.log('What type-type-number was missing?');
  for (let correctAnswerSum = 0; correctAnswerSum < gameRounds; correctAnswerSum += 1) {
    const arrayLenght = 10;
    const randomNumber = getRandomArbitrary(1, 25);
    const progression = getProgression(randomNumber, (randomNumber * arrayLenght));
    const getArrayRandomGap = getRandomArbitrary(0, 9);
    const correctAnswer = progression[getArrayRandomGap];
    progression.splice(getArrayRandomGap, 1,'...');
    console.log(progression);
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

export default FindAGapGame;
