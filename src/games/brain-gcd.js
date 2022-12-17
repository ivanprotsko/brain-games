import readlineSync from 'readline-sync';
import getRandom from '../components/get-random.js';
import GetGCDOfTwoNumbers from '../components/get-gcd-two-numbers.js';
import cli from '../cli.js';
import getFeedback from '../components/get-feedback.js';

const BrainGCD = (gameRounds) => {
  const userName = cli();
  console.log('What is greatest common divisor of these two numbers');
  for (let correctAnswerSum = 0; correctAnswerSum < gameRounds; correctAnswerSum += 1) {
    const numberOne = getRandom();
    const numberTwo = getRandom();
    const correctAnswer = GetGCDOfTwoNumbers(numberOne, numberTwo);
    console.log(`${numberOne}, ${numberTwo}`);
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

export default BrainGCD;
