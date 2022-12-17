import readlineSync from 'readline-sync';
import getRandom from '../components/get-random.js';
import cli from '../cli.js';
import getFeedback from '../components/get-feedback.js';

const BrainEven = (gameRounds) => {
  const userName = cli();
  console.log('Answer "yes" if number is even, otherwise answer "no"');
  for (let correctAnswerSum = 0; correctAnswerSum < gameRounds; correctAnswerSum += 1) {
    const sum = getRandom() + getRandom();
    console.log(`Is "${sum}" even?`);
    const correctAnswer = (sum % 2 === 0) ? 'yes' : 'no';
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
  // console.log(correctAnswerSum);
};
export default BrainEven;
