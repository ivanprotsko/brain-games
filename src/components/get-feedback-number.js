function GetFeedbackNumber(userName, userAnswer, correctAnswer, correctAnswerSum, questionQuantityNumber) {
  if (!isNaN(userAnswer)) {
    // Check user answer
    if (userAnswer === correctAnswer) {
      console.log('Correct!');
    } else {
      // Exit game
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'`);
      console.log(`Let's try again, ${userName}`);
      correctAnswerSum = -1;
    }
  } else {
    console.log('Please, answer using only number symbols "0—9999"');
    correctAnswerSum = -1;
  }
  if (correctAnswerSum === questionQuantityNumber - 1) {
    console.log(`Contratulations, ${userName}!`);
  }
  return correctAnswerSum;
}

export default GetFeedbackNumber;
