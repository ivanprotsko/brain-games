import OutputMessage from '../../ui/OutputMessage.js';
import NameQuestDialog from '../../ui/NameQuest.js';
import QuestionAnswer from './components/QuestionAnswer.js';

const NODGame = () => {
  const getRandom = (num) => {
    const randomNumber = Math.random() * num * 37;
    const randomRoundedNumber = Math.floor(randomNumber);
    return randomRoundedNumber;
  };

  const getRoundedNumber = (number) => {
    const roundedNumber = Math.round(getRandom(number) / 5);
    return roundedNumber;
  };

  function gcd_two_numbers(x, y) {
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

  const numberOne = getRoundedNumber(1);
  const numberTwo = getRoundedNumber(2);
  const numberThree = getRoundedNumber(3);
  const numberFour = getRoundedNumber(4);
  const numberFive = getRoundedNumber(5);
  const numberSix = getRoundedNumber(6);
  const GCDOne = gcd_two_numbers(numberOne, numberTwo);
  const GCDTwo = gcd_two_numbers(numberThree, numberFour);
  const GCDThree = gcd_two_numbers(numberFive, numberSix);

  const userName = NameQuestDialog();

  OutputMessage('What the sum of numbers?');
  let userAnswer = QuestionAnswer(
    userName,
    `${numberOne} & ${numberTwo}?`,
    GCDOne,
  );

  if (userAnswer === true) {
    userAnswer = QuestionAnswer(
      userName,
      `${numberThree} & ${numberFour}?`,
      GCDTwo);
  }
  if (userAnswer === true) {
    userAnswer = QuestionAnswer(userName,
      `${numberFive} & ${numberSix}?`,
      GCDThree);
  }
  if (userAnswer === true) {
    OutputMessage(`Congratulations, ${userName}!`);
  }
};

export default NODGame;
