import OutputMessage from '../../ui/OutputMessage.js';
import NameQuestDialog from '../../ui/NameQuest.js';
import QuestionAnswer from './components/QuestionAnswer.js';

const NumberSumGame = () => {
  const getRandom = (num) => {
    const randomNumber = Math.random() * num * 37;
    console.log(randomNumber);
    const randomRoundedNumber = Math.floor(randomNumber);
    return randomRoundedNumber;
  };

  let numberOne = getRandom(1);
  let numberTwo = getRandom(2);
  let numberThree = getRandom(3);
  let numberFour = getRandom(4);
  let numberFive = getRandom(5);
  let numberSix = getRandom(6);
  let sumOfNumOne = numberOne + numberTwo;
  let sumOfNumTwo = numberThree + numberFour;
  let sumOfNumThree = numberFive + numberSix;

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
