import cli from './cli.js';
import readlineSync from 'readline-sync';

export const gameEngine = (description, gameRounds, getRoundData) => {
  const userName = cli();
  console.log(description);
  let i;
  for (i = 0; i < gameRounds; i += 1) {
    let roundData = getRoundData();
    let { question } = roundData;
    let { answer } = roundData;
    console.log(answer, typeof answer);
    console.log(`Question: ${question}?`);
    let userAnswer = readlineSync.question('Your answer: ');
    console.log(userAnswer, typeof userAnswer);
    if (!isNaN(userAnswer)) userAnswer = parseInt(userAnswer);
    if (userAnswer === answer) console.log('Correct!');
    if (userAnswer !== answer) {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${answer}'`);
      console.log(`Let's try again, ${userName}`);
      i = -1;
    }
    if (i === gameRounds - 1) console.log(`Congratulations, ${userName}!`);

  }
};
