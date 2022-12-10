import readlineSync from 'readline-sync';
import EvenOddGame from './games/even-odd/even-odd.js';
import SumOfNumberGame from './games/sum-of-num/number-sum.js';
import NODGame from './games/n-o-d/n-o-d.js';
import FindAGapGame from './games/find-a-gap/fing-a-gap.js';
import IsNumberPrimeGame from './games/is-number-prime/is-number-prime.js';

const Bot = () => {
  const frameworks = ['Even or Odd', 'Sum of number', 'Greatest common divisor', 'Find a gap', 'Is number prime'];
  const index = readlineSync.keyInSelect(frameworks, 'Select a game:');

  if (index === 0) { EvenOddGame(); }
  if (index === 1) { SumOfNumberGame(); }
  if (index === 2) { NODGame(); }
  if (index === 3) { FindAGapGame(); }
  if (index === 4) { IsNumberPrimeGame(); }
};

export default Bot;
