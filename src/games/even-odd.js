import readlineSync from 'readline-sync';
import setRoundsNumber from '../components/set-rounds-number.js';
const EvenOddGame = (userName) => {
  const questionQuantityNumber = setRoundsNumber();
  const getRandom = () => { return Math.floor(Math.random() * 150); };
  // Set game rules
  console.log('Answer "yes" if number is even, otherwise answer "no"');
  let correctAnswerSum;
  for (correctAnswerSum = 0; correctAnswerSum < questionQuantityNumber; correctAnswerSum += 1) {
    console.log(correctAnswerSum);
    // Set random numbers
    const sum = getRandom() + getRandom();
    // Set question
    console.log(`Is "${sum}" even?`);
    // Set answer
    let correctAnswer;
    correctAnswer = (sum % 2 === 0) ? 'yes' : 'no';
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
    }}
  // Game passed
  console.log(correctAnswerSum);
  if (correctAnswerSum === questionQuantityNumber) {
    console.log(`Contratulations, ${userName}!`);
  }
};
export default EvenOddGame;
