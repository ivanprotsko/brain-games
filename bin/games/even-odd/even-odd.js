import OutputMessage from '../../ui/OutputMessage.js';
import NameQuestDialog from '../../ui/NameQuest.js';
import QuestionAnswer from './components/QuestionAnswer.js';

const EvenOddGame = () => {
  const userName = NameQuestDialog();

  OutputMessage('Answer "yes" if the number is even, otherwise answer "no"');
  let userAnswer = QuestionAnswer(
    userName,
    'Question: is number "15" even?',
    'no',
  );

  if (userAnswer === true) {
    userAnswer = QuestionAnswer(
      userName,
      'Question: is number "6" even?',
      'yes');
  }
  if (userAnswer === true) {
    userAnswer = QuestionAnswer(userName,
      'Question: is number "7" even?',
      'no');
  }
  if (userAnswer === true) {
    OutputMessage(`Congratulations, ${userName}!`);
  }
};

export default EvenOddGame;
