const AnswerChecker = (correctAnswer, userAnswer) => {
  const answer = parseInt(userAnswer);
  if (isNaN(answer) === true) {
    userAnswer = 'out-of-rules';
  } else if (correctAnswer === answer) {
    userAnswer = true;
  } else {
    userAnswer = false;
  }
  return userAnswer;
};

export default AnswerChecker;
