import readlineSync from 'readline-sync';
import getRandom from '../components/get-random.js';
import cli from '../cli.js';
import getGreeting from '../components/get-greeting.js';
import getFeedbackYesOrNo from '../components/get-feedback-yes-or-no.js';

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
    let gameProps = {
      userName: userName,
      userAnswer: userAnswer,
      correctAnswer: correctAnswer,
      correctAnswerSum: correctAnswerSum,
      gameType: 'game-type-yes-or-no',
      gameRounds: gameRounds,
    };
    correctAnswerSum = getFeedbackYesOrNo(gameProps);
  }
};
export default BrainEven;
