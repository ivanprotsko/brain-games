import readlineSync from 'readline-sync';
import GetFeedback from '../components/get-feedback.js';
import getRandom from '../components/get-random.js';
import Cli from '../cli.js';
import GetGreeting from '../components/get-greeting.js';
import getRandomArbitrary from '../components/get-random-arbitrary.js';
const BrainCalc = (gameRounds) => {
  const gameType = 'game-type-number';
  GetGreeting();
  const userName = Cli();
  for (let correctAnswerSum = 0; correctAnswerSum < gameRounds; correctAnswerSum += 1) {
    let numberOne = getRandom();
    let numberTwo = getRandom();
    let correctAnswer;
    const mathOperators = ['+', '-', '*'];
    const operatorNum = getRandomArbitrary(0, 2);
    if (operatorNum === 0) {
      correctAnswer = numberOne + numberTwo;
    } else if (operatorNum === 1) {
      correctAnswer = numberOne - numberTwo;
    } else if (operatorNum === 2) {
      correctAnswer = numberOne * numberTwo;
    } else {
      console.log('Operator is undefined');
    }
    console.log(`What is sum of numbers: ${numberOne} ${mathOperators[operatorNum]} ${numberTwo}?`);
    console.log(correctAnswer);
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
