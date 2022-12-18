import getRandomArbitrary from './get-random-arbitrary.js';
import gameEngine from './game-engine.js';

const runCalc = (gameRounds) => {
  const description = 'What is the result of the expression?';
  function getFormulaResult(numberOne, numberTwo, randomOperator) {
    let result;
    switch (randomOperator) {
      case '+':
        result = numberOne + numberTwo;
        break;
      case '-':
        result = numberOne - numberTwo;
        break;
      case '*':
        result = numberOne * numberTwo;
        break;
      default:
        console.log('Operator is undefined');
        break;
    }
    return result;
  }
  const getRoundData = () => {
    const numberOne = getRandomArbitrary();
    const numberTwo = getRandomArbitrary();
    const operators = ['+', '-', '*'];
    const randomOperator = operators[getRandomArbitrary(0, 2)];
    const question = `${numberOne} ${randomOperator} ${numberTwo}`;
    const answer = getFormulaResult(numberOne, numberTwo, randomOperator);
    return { question, answer };
  };
  gameEngine(description, gameRounds, getRoundData);
};
export default runCalc;
