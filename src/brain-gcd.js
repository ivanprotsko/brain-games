import getRandom from './get-random.js';
import { gameEngine } from './game-engine.js';

const runGCD = (gameRounds) => {
  const description = 'What is greatest common divisor of these two numbers';
  function getGCDOfTwoNumbers(x, y) {
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

  const getRoundData = () => {
    const numberOne = getRandom();
    const numberTwo = getRandom();
    const answer = getGCDOfTwoNumbers(numberOne, numberTwo);
    return {
      question: `${numberOne}, ${numberTwo}`,
      answer,
    };
  };
  gameEngine(description, gameRounds, getRoundData);
};
export default runGCD;
