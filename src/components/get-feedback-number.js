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

  if (!isNaN(userAnswer)) {
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



// function getFeedbackNumber(userName, userAnswer, correctAnswer, correctAnswerSum, questionQuantityNumber) {
//   switch (userAnswer) {
//     case (!isNaN(userAnswer)):
//       if (userAnswer === correctAnswer) {
//         console.log('Correct!');
//       } else {
//         console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'`);
//         console.log(`Let's try again, ${userName}`);
//         correctAnswerSum = -1;
//       }
//       break;
//     default:
//       console.log('Please, answer using only number symbols "0—9999"');
//       correctAnswerSum = -1;
//       break;
//   }
//   if (correctAnswerSum === questionQuantityNumber - 1) {
//     console.log(`Contratulations, ${userName}!`);
//   }
//   return correctAnswerSum;
// }
//
// export default getFeedbackNumber;
