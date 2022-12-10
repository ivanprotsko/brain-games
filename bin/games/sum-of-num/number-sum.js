import OutputMessage from '../../ui/OutputMessage.js';
import NameQuestDialog from '../../ui/NameQuest.js';
import QuestionAnswer from './components/QuestionAnswer.js';

const NumberSumGame = () => {
  const getRandom = (num) => {
    const randomNumber = Math.random() * num * 37;
    const randomRoundedNumber = Math.floor(randomNumber);
    return randomRoundedNumber;
  };

  const numberOne = getRandom(1);
  const numberTwo = getRandom(2);
  const numberThree = getRandom(3);
  const numberFour = getRandom(4);
  const numberFive = getRandom(5);
  const numberSix = getRandom(6);
  const sumOfNumOne = numberOne + numberTwo;
  const sumOfNumTwo = numberThree + numberFour;
  const sumOfNumThree = numberFive + numberSix;
  console.log(sumOfNumThree);

  const userName = NameQuestDialog();

  OutputMessage('What the sum of numbers?');
  let userAnswer = QuestionAnswer(
    userName,
    `${numberOne} + ${numberTwo}?`,
    sumOfNumOne,
  );

  if (userAnswer === true) {
    userAnswer = QuestionAnswer(
      userName,
      `${numberThree} + ${numberFour}?`,
      sumOfNumTwo);
  }
  if (userAnswer === true) {
    userAnswer = QuestionAnswer(userName,
      `${numberFive} + ${numberSix}?`,
      sumOfNumThree);
  }
  if (userAnswer === true) {
    OutputMessage(`Congratulations, ${userName}!`);
  }
};

export default NumberSumGame;
