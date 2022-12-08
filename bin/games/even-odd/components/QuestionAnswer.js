import OutputMessage from '../../../ui/OutputMessage.js';
import InputQuestion from '../../../ui/InputQuestion.js';
import YesOrNoAnswerCheckerOutputMessage from './AnswerFeedback.js';

import YesOrNoAnswerChecker from '../controllers/AnswerChecker.js';

const QuestionAnswer = (name, question, answer) => {
  const userName = name;
  OutputMessage(question);
  const correctAnswer = answer;
  let userAnswer = InputQuestion();

  userAnswer = YesOrNoAnswerChecker(correctAnswer, userAnswer);

  YesOrNoAnswerCheckerOutputMessage(userAnswer, userName);

  return userAnswer;
};

export default QuestionAnswer;
