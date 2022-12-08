import OutputMessage from '../../../ui/OutputMessage.js';
import InputQuestion from '../../../ui/InputQuestion.js';
import AnswerFeedback from './AnswerFeedback.js';

import AnswerChecker from '../controllers/AnswerChecker.js';

const QuestionAnswer = (name, question, answer) => {
  const userName = name;
  OutputMessage(question);
  const correctAnswer = answer;
  let userAnswer = InputQuestion();

  userAnswer = AnswerChecker(correctAnswer, userAnswer);

  AnswerFeedback(userAnswer, userName, answer);

  return userAnswer;
};

export default QuestionAnswer;
