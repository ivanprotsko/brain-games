import OutputMessage from '../../../ui/OutputMessage.js';

const YesOrNoAnswerCheckerOutputMessage = (answer, userName) => {
  switch (answer) {
    case true:
      OutputMessage('Correct!');
      break;
    case false:
      OutputMessage('Wrong! Correct answer is "no"');
      OutputMessage(`Let's try again, ${userName}`);
      break;
    case 'out-of-rules':
      OutputMessage('Please, answer only "yes" or "no"');
      break;
    default:
      OutputMessage('Answer undifined');
      break;
  }
};

export default YesOrNoAnswerCheckerOutputMessage;
