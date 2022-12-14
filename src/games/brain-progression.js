import readlineSync from 'readline-sync';
import GetFeedback from '../components/get-feedback.js';
import getRandomArbitrary from '../components/get-random-arbitrary.js';
import getProgression from '../components/get-progression.js';
import Cli from '../cli.js';
import GetGreeting from '../components/get-greeting.js';
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
    // Is asnwer type equal number?
    correctAnswerSum = GetFeedback(
      gameType,
      userName,
      userAnswer,
      correctAnswer,
      correctAnswerSum,
      gameRounds,
    );
  }
};

export default FindAGapGame;
