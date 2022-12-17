import getRandomArbitrary from './get-random-arbitrary.js';
import { gameEngine } from './game-engine.js';

const runProgression = (gameRounds) => {
  const description = 'What type-type-number was missing?';
  const getProgression = (n, lim) =>
    Array.from({ length: Math.ceil(lim / n) }, (_, i) => (i + 1) * n);
  const getRoundData = () => {
    const arrayLenght = 10;
    const randomNumber = getRandomArbitrary(1, 25);
    const question = getProgression(randomNumber, (randomNumber * arrayLenght));
    const getArrayRandomGap = getRandomArbitrary(0, 9);
    const answer = question[getArrayRandomGap];
    question.splice(getArrayRandomGap, 1, '...');
    return { question, answer };
  };
  gameEngine(description, gameRounds, getRoundData);
};

export default runProgression;

