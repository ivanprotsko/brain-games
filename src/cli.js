import readlineSync from 'readline-sync';

function cli() {
  console.log('May I have your name?');
  const userName = readlineSync.question('Your answer: ');
  console.log(`Hello, ${userName}`);
  return userName;
}

export default cli;
