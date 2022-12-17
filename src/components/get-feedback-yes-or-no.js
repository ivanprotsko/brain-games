import {
  correctAnswerFeedback,
  wrongAnswerFeedback,
  outOfRulesFeedback,
  congratulationFeedback,
  resetCorrectAnswerSumCounter,
} from './config-feedback.js';

function getFeedbackYesOrNo(props) {
  const { userName } = props;
  const { userAnswer } = props;
  const { correctAnswer } = props;
  const { gameType } = props;
  const { gameRounds } = props;
  let { correctAnswerSum } = props;

  if (userAnswer === 'yes' || userAnswer === 'no') {
    if (userAnswer === correctAnswer) {
      correctAnswerFeedback();
    } else {
      wrongAnswerFeedback(correctAnswerSum);
      correctAnswerSum = resetCorrectAnswerSumCounter();
    }
  } else {
    outOfRulesFeedback(gameType);
    correctAnswerSum = resetCorrectAnswerSumCounter();
  }
  if (correctAnswerSum === gameRounds - 1) {
    congratulationFeedback(userName);
  }
  return correctAnswerSum;
}
export default getFeedbackYesOrNo;
