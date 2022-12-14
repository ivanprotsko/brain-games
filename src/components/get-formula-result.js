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
export default getFormulaResult;
