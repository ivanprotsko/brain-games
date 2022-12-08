import OutputMessage from '../../../ui/OutputMessage.js';

const AnswerFeedback = (answer, userName, correctAnswer) => {
  switch (answer) {
    case true:
      OutputMessage('Correct!');
      break;
    case false:
      OutputMessage(`Wrong! Correct answer is "${correctAnswer}"`);
      OutputMessage(`Let's try again, ${userName}`);
      break;
    case 'out-of-rules':
      OutputMessage('Please, answer using only numbers: 0-999.');
      break;
    default:
      OutputMessage('Answer undifined');
      break;
  }
};

export default AnswerFeedback;
