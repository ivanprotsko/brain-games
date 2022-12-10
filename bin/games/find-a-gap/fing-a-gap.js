import OutputMessage from '../../ui/OutputMessage.js';
import NameQuestDialog from '../../ui/NameQuest.js';
import QuestionAnswer from './components/QuestionAnswer.js';

const FindAGapGame = () => {
  const getRandomArbitrary = (min, max) => {
    return Math.round(Math.random() * (max - min) + min);
  };
  const arithmeticProgression = (n, lim) =>
    Array.from({ length: Math.ceil(lim / n) }, (_, i) => (i + 1) * n);
  const arrayLenght = 10;

  // Question one values
  const randomNumberOne = getRandomArbitrary(1, 25);
  const getArrayRandomGapOne = getRandomArbitrary(0, 9);
  const initialArrayOne = arithmeticProgression(randomNumberOne, (randomNumberOne * arrayLenght));
  const gameArrayOne = initialArrayOne;
  const missedNumberValueOne = gameArrayOne[getArrayRandomGapOne];
  gameArrayOne.splice(getArrayRandomGapOne, 1,'...');
  // Question two values
  const randomNumberTwo = getRandomArbitrary(1, 25);
  const getArrayRandomGapTwo = getRandomArbitrary(0, 9);
  const initialArrayTwo = arithmeticProgression(randomNumberTwo, (randomNumberTwo * arrayLenght));
  const gameArrayTwo = initialArrayTwo;
  const missedNumberValueTwo = gameArrayTwo[getArrayRandomGapTwo];
  gameArrayTwo.splice(getArrayRandomGapTwo, 1,'...');
  // Question three values
  const randomNumberThree = getRandomArbitrary(1, 25);
  const getArrayRandomGapThree = getRandomArbitrary(0, 9);
  const initialArrayThree = arithmeticProgression(randomNumberThree, (randomNumberThree * arrayLenght));
  const gameArrayThree = initialArrayThree;
  const missedNumberValueThree = gameArrayThree[getArrayRandomGapThree];
  gameArrayThree.splice(getArrayRandomGapThree, 1,'...');

  const userName = NameQuestDialog();

  OutputMessage('What number was missing?/');
  let userAnswer = QuestionAnswer(
    userName,
    `${gameArrayOne} ?`,
    missedNumberValueOne,
  );

  if (userAnswer === true) {
    userAnswer = QuestionAnswer(
      userName,
      `${gameArrayTwo} ?`,
      missedNumberValueTwo,
    );
  }
  if (userAnswer === true) {
    userAnswer = QuestionAnswer(userName,
      `${gameArrayThree} ?`,
      missedNumberValueThree,
    );
  }
  if (userAnswer === true) {
    OutputMessage(`Congratulations, ${userName}!`);
  }
};

export default FindAGapGame;
