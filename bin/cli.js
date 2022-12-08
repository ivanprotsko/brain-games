import readlineSync from 'readline-sync';
import EvenOddGame from './games/even-odd/even-odd.js';
import SumOfNumberGame from './games/sum-of-num/number-sum.js';

import OutputMessage from './ui/OutputMessage.js';

const Bot = () => {
  const frameworks = ['Even or Odd', 'Sum of number'];
  const index = readlineSync.keyInSelect(frameworks, 'Select a game:');

  if (index === 0) { EvenOddGame(); }
  if (index === 1) { SumOfNumberGame(); }
};

export default Bot;
