import readlineSync from 'readline-sync';
import cli from './cli.js';

export default (description, gameRounds, getRoundData) => {
  const userName = cli();
  console.log(description);
  let i;
  for (i = 0; i < gameRounds; i += 1) {
    const { question, answer } = getRoundData();
    console.log(answer);
    console.log(`Question: ${question}?`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (userAnswer === answer.toString()) console.log('Correct!');
    if (userAnswer !== answer.toString()) {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${answer}'`);
      console.log(`Let's try again, ${userName}!`);
      break;
    }
    if (i === gameRounds - 1) console.log(`Congratulations, ${userName}!`);
  }
};
