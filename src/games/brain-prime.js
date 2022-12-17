import readlineSync from 'readline-sync';
import cli from '../cli.js';
import getIsPrime from '../components/get-is-prime.js';
import getRandomArbitrary from '../components/get-random-arbitrary.js';
import getFeedback from '../components/get-feedback.js';

const BrainPrime = (gameRounds) => {
  const userName = cli();
  for (let correctAnswerSum = 0; correctAnswerSum < gameRounds; correctAnswerSum += 1) {
    const randomNumber = getRandomArbitrary(1, 50);
    const correctAnswer = getIsPrime(randomNumber) === true ? 'yes' : 'no';
    console.log('Is the number prime?');
    console.log(`${randomNumber}?`);
    const userAnswer = readlineSync.question('Your answer: ');
    const gameData = {
      gameType: 'game-type-yes-or-no',
      userName,
      userAnswer,
      correctAnswer,
      correctAnswerSum,
      gameRounds,
    };
    correctAnswerSum = getFeedback(gameData);
  }
};

export default BrainPrime;
