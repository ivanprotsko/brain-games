const AnswerChecker = (correctAnswer, userAnswer) => {
  if (correctAnswer === userAnswer) {
    userAnswer = true;
  } else if (userAnswer !== 'no' && userAnswer !== 'yes') {
    userAnswer = 'out-of-rules';
  } else {
    userAnswer = false;
  }
  return userAnswer;
};

export default AnswerChecker;
