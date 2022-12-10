import OutputMessage from '../../ui/OutputMessage.js';
import NameQuestDialog from '../../ui/NameQuest.js';
import QuestionAnswer from './components/QuestionAnswer.js';

const IsNumberPrimeGame = () => {
  function isPrime(n)
  {
    if (n===1)
    {
      return false;
    }
    else if (n === 2)
    {
      return true;
    } else
    {
      for(var x = 2; x < n; x++)
      {
        if(n % x === 0)
        {
          return false;
        }
      }
      return true;
    }
  }
  const getRandomArbitrary = (min, max) => {
    return Math.round(Math.random() * (max - min) + min);
  };
  // Question one values
  const numberOne = getRandomArbitrary(1, 50);
  let correctAnswerOne = '';
  if (isPrime(numberOne) === true) {
    correctAnswerOne = 'yes';
  } else {
    correctAnswerOne = 'no';
  }
  // Question two values
  const numberTwo = getRandomArbitrary(1, 50);
  let correctAnswerTwo = '';
  if (isPrime(numberTwo) === true) {
    correctAnswerTwo = 'yes';
  } else {
    correctAnswerTwo = 'no';
  }
  // Question three values
  const numberThree = getRandomArbitrary(1, 50);
  let correctAnswerThree = '';
  if (isPrime(numberThree) === true) {
    correctAnswerThree = 'yes';
  } else {
    correctAnswerThree = 'no';
  }
  const userName = NameQuestDialog();

  OutputMessage('Is number prime?');
  let userAnswer = QuestionAnswer(
    userName,
    `${numberOne} ?`,
    correctAnswerOne,
  );

  if (userAnswer === true) {
    userAnswer = QuestionAnswer(
      userName,
      `${numberTwo} ?`,
      correctAnswerTwo,
    );
  }
  if (userAnswer === true) {
    userAnswer = QuestionAnswer(userName,
      `${numberThree} ?`,
      correctAnswerThree,
    );
  }
  if (userAnswer === true) {
    OutputMessage(`Congratulations, ${userName}!`);
  }
};

export default IsNumberPrimeGame;
