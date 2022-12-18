import gameEngine from './game-engine.js';
import getRandomArbitrary from './get-random-arbitrary.js';

const runGCD = (gameRounds) => {
  const description = 'Find the greatest common divisor of given numbers.';
  const getGCDOfTwoNumbers = (a, b) => {
    if (!b) return a;
    return getGCDOfTwoNumbers(b, a % b);
  };

  const getRoundData = () => {
    const numberOne = getRandomArbitrary();
    const numberTwo = getRandomArbitrary();
    const answer = getGCDOfTwoNumbers(numberOne, numberTwo);
    return {
      question: `${numberOne} ${numberTwo}`,
      answer,
    };
  };
  gameEngine(description, gameRounds, getRoundData);
};
export default runGCD;
