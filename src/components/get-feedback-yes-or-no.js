function GetFeedback(userName, userAnswer, correctAnswer, correctAnswerSum, questionQuantityNumber) {
  if (userAnswer === 'yes' || userAnswer === 'no') {
    if (userAnswer === correctAnswer) {
      console.log('Correct!');
    } else {
      // Exit game
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'`);
      console.log(`Let's try again, ${userName}`);
      correctAnswerSum = -1;
    }
  } else {
    // Answer out of rules
    console.log('Please, answer only "yes" or "no"');
    correctAnswerSum = -1;
  }
  if (correctAnswerSum === questionQuantityNumber - 1) {
    console.log(`Contratulations, ${userName}!`);
  }
  return correctAnswerSum;
}

export default GetFeedback;
