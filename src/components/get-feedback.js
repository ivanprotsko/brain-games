import {
  congratulationFeedback,
  correctAnswerFeedback,
  outOfRulesFeedback,
  wrongAnswerFeedback,
} from './feedback-config.js';
import checkUserAnswerFormat from './check-user-answer-format.js';

function getFeedback(props) {
  const { gameType } = props;
  const { userName } = props;
  const { userAnswer } = props;
  const { correctAnswer } = props;
  const { gameRounds } = props;
  let { correctAnswerSum } = props;

  const userAnswerFormat = checkUserAnswerFormat(gameType, userAnswer);
  if (!userAnswerFormat) {
    outOfRulesFeedback(gameType);
    return correctAnswerSum = -1;
  }
  if (userAnswer === correctAnswer) {
    correctAnswerFeedback();
  }
  if (userAnswer !== correctAnswer) {
    wrongAnswerFeedback(userName, userAnswer, correctAnswer);
    return correctAnswerSum = -1;
  }
  if (correctAnswerSum === gameRounds - 1) {
    congratulationFeedback(userName);
  }

  return correctAnswerSum;
}

export default getFeedback;
