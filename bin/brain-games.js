#!/usr/bin/env node

import readlineSync from 'readline-sync';
import EvenOddGame from '../src/games/even-odd.js';
import SumOfNumberGame from '../src/games/number-sum.js';
import NODGame from '../src/games/n-o-d.js';
import FindAGapGame from '../src/games/fing-a-gap.js';
import IsNumberPrimeGame from '../src/games/is-number-prime.js';

console.log('May I have your name?');
const userName = readlineSync.question('Your answer: ');
console.log(`Hello, ${userName}`);
const frameworks = ['Even or Odd', 'Sum of type-type-number', 'Greatest common divisor', 'Find a gap', 'Is type-type-number prime'];
const index = readlineSync.keyInSelect(frameworks, 'Select a game:');

const runGame = (userName) => {
  if (index === 0) { EvenOddGame(userName); }
  if (index === 1) { SumOfNumberGame(userName); }
  if (index === 2) { NODGame(userName); }
  if (index === 3) { FindAGapGame(userName); }
  if (index === 4) { IsNumberPrimeGame(userName); }
};

runGame(userName);

export default runGame;
