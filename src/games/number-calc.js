import readlineSync from 'readline-sync';
import GetFeedback from '../components/get-feedback.js';
import getRandom from '../components/get-random.js';
import Cli from '../cli.js';
import GetGreeting from '../components/get-greeting.js';
const BrainCalc = (gameRounds) => {
  const gameType = 'game-type-number';
  GetGreeting();
  const userName = Cli();
  for (let correctAnswerSum = 0; correctAnswerSum < gameRounds; correctAnswerSum += 1) {
    const numberOne = getRandom();
    const numberTwo = getRandom();
    const correctAnswer = numberOne + numberTwo;
    console.log(`What is sum of numbers: ${numberOne} + ${numberTwo}?`);
    const userAnswer = parseInt(readlineSync.question('Your answer: '));
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

export default BrainCalc;
