const AnswerChecker = (correctAnswer, userAnswer) => {
  const answer = Number(userAnswer);
  if (isNaN(answer)) {
    userAnswer = 'out-of-rules';
  }
  if (correctAnswer === answer) {
    userAnswer = true;
  } else {
    userAnswer = false;
  }
  console.log(userAnswer);
  return userAnswer;
};

export default AnswerChecker;
