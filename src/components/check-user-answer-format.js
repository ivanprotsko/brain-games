function checkUserAnswerFormat(gameType, userAnswer, userAnswerFormat) {
  if (gameType === 'game-type-yes-or-no') {
    if (userAnswer === 'yes' || userAnswer === 'no') {
      userAnswerFormat = true;
    } else {
      userAnswerFormat = false;
    }
  }
  if (gameType === 'game-type-number') {
    if (!isNaN(userAnswer)) {
      userAnswerFormat = true;
    } else {
      userAnswerFormat = false;
    }
  }
  return userAnswerFormat;
}

export default checkUserAnswerFormat;
