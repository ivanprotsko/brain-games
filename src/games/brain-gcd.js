import readlineSync from 'readline-sync';
import getRandom from '../components/get-random.js';
import GetFeedback from '../components/get-feedback.js';
import GetGCDOfTwoNumbers from '../components/get-gcd-two-numbers.js';
import Cli from '../cli.js';
import GetGreeting from '../components/get-greeting.js';

const BrainGCD = (gameRounds) => {
  const gameType = 'game-type-number';
  GetGreeting();
  const userName = Cli();
  console.log('What is greatest common divisor of these two numbers');
  for (let correctAnswerSum = 0; correctAnswerSum < gameRounds; correctAnswerSum += 1) {
    const numberOne = getRandom();
    const numberTwo = getRandom();
    const correctAnswer = GetGCDOfTwoNumbers(numberOne, numberTwo);
    console.log(`${numberOne}, ${numberTwo}`);
    const userAnswer = parseInt(readlineSync.question('Your answer:'));
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

export default BrainGCD;
