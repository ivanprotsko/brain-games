import readlineSync from 'readline-sync';
import getRandom from './get-random.js';
import { gameEngine } from './game-engine.js';

const runPrime = (gameRounds) => {
  const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';
  function getIsPrime(num) {
    for (let i = 2, s = Math.sqrt(num); i <= s; i++) {
      if (num % i === 0) return false;
    }
    return num > 1;
  }
  const getRoundData = () => {
    const question = getRandom();
    const answer = getIsPrime(question) === true ? 'yes' : 'no';
    return { question, answer };
  };
  gameEngine(description, gameRounds, getRoundData);
};

export default runPrime;
