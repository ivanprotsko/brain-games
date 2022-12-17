function checkUserAnswerFormat(gameType, userAnswer) {
  let result;
  if (gameType === 'game-type-yes-or-no') {
    result = userAnswer === 'yes' || userAnswer === 'no';
  }
  if (gameType === 'game-type-number') {
    result = !isNaN(userAnswer);
  }
  return result;
}

export default checkUserAnswerFormat;
