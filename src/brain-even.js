import getRandom from './get-random.js';
import gameEngine from './game-engine.js';

const description = 'Answer "yes" if the number is even, otherwise answer "no".';
const isEven = (number) => number % 2 === 0;
const runEven = (gameRounds) => {
  const getRoundData = () => {
    const question = getRandom();
    const answer = isEven(question) ? 'yes' : 'no';
    return { question, answer };
  };
  gameEngine(description, gameRounds, getRoundData);
};
export default runEven;
