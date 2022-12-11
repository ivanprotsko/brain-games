import readlineSync from 'readline-sync';
import setRoundsNumber from '../components/set-rounds-number.js';

const NODGame = (questionQuantity, userName) => {
  // Set question quantity
  const questionQuantityNumber = setRoundsNumber();
  const getRandom = () => {
    const randomNumber = Math.random() * 100;
    const randomRoundedNumber = Math.floor(randomNumber);
    return randomRoundedNumber;
  };

  const getRoundedNumber = (number) => {
    const roundedNumber = Math.round(getRandom(number) / 5);
    return roundedNumber;
  };

  function gcd_two_numbers(x, y) {
    if ((typeof x !== 'number') || (typeof y !== 'number'))
      return false;
    x = Math.abs(x);
    y = Math.abs(y);
    while(y) {
      var t = y;
      y = x % y;
      x = t;
    }
    return x;
  }
  let numberOne;
  let numberTwo;
  let correctAnswer;
  let userAnswer;
  let correctAnswerSum;
  console.log('What is greatest common divisor of these two numbers');
  for (correctAnswerSum = 0; correctAnswerSum < questionQuantityNumber; correctAnswerSum += 1) {
    numberOne = getRoundedNumber();
    numberTwo = getRoundedNumber();
    correctAnswer = gcd_two_numbers(numberOne, numberTwo);
    console.log(`${numberOne}, ${numberTwo}`);
    console.log(`Answer for debug: ${correctAnswer}`);
    userAnswer = parseInt(readlineSync.question('Your answer:'));
    // Is asnwer type equal number?
    if (!isNaN(userAnswer)) {
      // Check user answer
      if (userAnswer === correctAnswer) {
        console.log('correct!');
      } else {
        // Exit game
        console.log(`Wrong! Correct answer is "${correctAnswer}"`);
        console.log(`Let's try again, ${userName}`);
        correctAnswerSum = -1;
      }
    } else {
      console.log('Please, answer using only number symbols "0—9999"');
      correctAnswerSum = -1;
    }
  }
  if (correctAnswerSum === questionQuantityNumber) {
    console.log(`Contratulations, ${userName}!`);
  }
};

export default NODGame;
