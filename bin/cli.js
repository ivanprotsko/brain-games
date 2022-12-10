import readlineSync from 'readline-sync';
import EvenOddGame from './games/even-odd/even-odd.js';
import SumOfNumberGame from './games/sum-of-num/number-sum.js';
import NODGame from './games/n-o-d/n-o-d.js';
import FindAGap from './games/find-a-gap/fing-a-gap.js';

const Bot = () => {
  const frameworks = ['Even or Odd', 'Sum of number', 'Greatest common divisor', 'find-a-gap'];
  const index = readlineSync.keyInSelect(frameworks, 'Select a game:');

  if (index === 0) { EvenOddGame(); }
  if (index === 1) { SumOfNumberGame(); }
  if (index === 2) { NODGame(); }
  if (index === 3) { FindAGap(); }
};

export default Bot;
