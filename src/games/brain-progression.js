import readlineSync from 'readline-sync';
import cli from '../cli.js';
import getRandomArbitrary from '../components/get-random-arbitrary.js';
import getProgression from '../components/get-progression.js';
import getFeedback from '../components/get-feedback.js';

const FindAGapGame = (gameRounds) => {
  const userName = cli();
  console.log('What type-type-number was missing?');
  for (let correctAnswerSum = 0; correctAnswerSum < gameRounds; correctAnswerSum += 1) {
    const arrayLenght = 10;
    const randomNumber = getRandomArbitrary(1, 25);
    const progression = getProgression(randomNumber, (randomNumber * arrayLenght));
    const getArrayRandomGap = getRandomArbitrary(0, 9);
    const correctAnswer = progression[getArrayRandomGap];
    progression.splice(getArrayRandomGap, 1, '...');
    console.log(progression);
    const userAnswer = parseInt(readlineSync.question('Your answer:'));
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

export default FindAGapGame;
