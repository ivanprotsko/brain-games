import readlineSync from 'readline-sync';
import GetFeedback from '../components/get-feedback.js';
import getRandom from '../components/get-random.js';
import Cli from '../cli.js';
import GetGreeting from '../components/get-greeting.js';

const BrainEven = (questionQuantityNumber) => {
  const gameType = 'game-type-yes-or-no';
  GetGreeting();
  const userName = Cli();
  console.log('Answer "yes" if number is even, otherwise answer "no"');
  for (let correctAnswerSum = 0; correctAnswerSum < questionQuantityNumber; correctAnswerSum += 1) {
    const sum = getRandom() + getRandom();
    console.log(`Is "${sum}" even?`);
    const correctAnswer = (sum % 2 === 0) ? 'yes' : 'no';
    const userAnswer = readlineSync.question('Your answer: ');
    correctAnswerSum = GetFeedback(
      gameType,
      userName,
      userAnswer,
      correctAnswer,
      correctAnswerSum,
      questionQuantityNumber,
    );
  }
};
export default BrainEven;
