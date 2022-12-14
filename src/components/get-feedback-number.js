function GetFeedbackNumber(userName, userAnswer, correctAnswer, correctAnswerSum, questionQuantityNumber) {
  switch (userAnswer) {
    case (!isNaN(userAnswer)):
      if (userAnswer === correctAnswer) {
        console.log('Correct!');
      } else {
        // Exit game
        console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'`);
        console.log(`Let's try again, ${userName}`);
        correctAnswerSum = -1;
      }
      break;
    default:
      console.log('Please, answer using only number symbols "0—9999"');
      correctAnswerSum = -1;
      break;
  }
  if (correctAnswerSum === questionQuantityNumber - 1) {
    console.log(`Contratulations, ${userName}!`);
  }
  return correctAnswerSum;
}

export default GetFeedbackNumber;
