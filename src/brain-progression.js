import getRandomArbitrary from './get-random-arbitrary.js';
import gameEngine from './game-engine.js';

const runProgression = (gameRounds) => {
  const description = 'What number is missing in the progression?';
  const getProgression = (n, lim) => {
    Array.from({ length: Math.ceil(lim / n) }, (_, i) => (i + 1) * n);
  };
  const getRoundData = () => {
    const arrayLenght = 5;
    const randomNumber = getRandomArbitrary(1, 25);
    const progression = getProgression(randomNumber, (randomNumber * arrayLenght));
    const getArrayRandomGap = getRandomArbitrary(0, 4);
    const answer = progression[getArrayRandomGap];
    progression.splice(getArrayRandomGap, 1, '..');
    const question = progression.join(' ');
    return { question, answer };
  };
  gameEngine(description, gameRounds, getRoundData);
};

export default runProgression;
