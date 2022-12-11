import readlineSync from 'readline-sync';
import setRoundsNumber from '../components/set-rounds-number.js';

const IsNumberPrimeGame = (questionQuantity, userName) => {

  // Set question quantity
  const questionQuantityNumber = setRoundsNumber();
  function isPrime(n)
  {
    if (n===1)
    {
      return false;
    }
    else if (n === 2)
    {
      return true;
    } else
    {
      for(var x = 2; x < n; x++)
      {
        if(n % x === 0)
        {
          return false;
        }
      }
      return true;
    }
  }
  const getRandomArbitrary = (min, max) => {
    return Math.round(Math.random() * (max - min) + min);
  };
  // Question one values
  let randomNumber;
  let correctAnswer;
  let correctAnswerSum;
  for (correctAnswerSum = 0; correctAnswerSum < questionQuantityNumber; correctAnswerSum += 1) {
    randomNumber = getRandomArbitrary(1, 50);
    correctAnswer = isPrime(randomNumber) === true ? 'yes' : 'no';
    console.log('Is the number prime?');
    console.log(`${randomNumber}?`);
    // For debug: console.log(correctAnswer);
    // Set user answer
    const userAnswer = readlineSync.question('Your answer: ');
    // Check user answer and send feedback
    if (userAnswer === 'yes' || userAnswer === 'no') {
      if (userAnswer === correctAnswer) {
        console.log('Correct!');
      } else {
        // Exit game
        console.log(`Wrong! Correct answer is "${correctAnswer}"`);
        console.log(`Let's try again, ${userName}`);
        correctAnswerSum = -1;
      }
    } else {
      // Answer out of rules
      console.log('Please, answer only "yes" or "no"');
      correctAnswerSum = -1;
    }
  }
  if (correctAnswerSum === questionQuantityNumber) {
    console.log(`Contratulations, ${userName}!`);
  }
};

export default IsNumberPrimeGame;
