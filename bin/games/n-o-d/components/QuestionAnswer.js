import OutputMessage from '../../../ui/OutputMessage.js';
import InputQuestion from '../../../ui/InputQuestion.js';

import SumOfNumAnswerChecker from '../controllers/AnswerChecker.js';
import AnswerFeedback from './AnswerFeedback.js';

const QuestionAnswer = (name, question, correctAnswer) => {
  const userName = name;
  OutputMessage(question);
  let userAnswer = InputQuestion();

  userAnswer = SumOfNumAnswerChecker(correctAnswer, userAnswer);

  AnswerFeedback(userAnswer, userName, correctAnswer);

  return userAnswer;
};

export default QuestionAnswer;
