import OutputMessage from './OutputMessage.js';
import InputQuestion from './InputQuestion.js';

const NameQuestDialog = () => {
  OutputMessage('May I have your name?');
  const userName = InputQuestion();
  OutputMessage(`Hello, ${userName}`);
  return userName;
};

export default NameQuestDialog;
