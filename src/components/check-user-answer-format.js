function checkUserAnswerFormat(gameType, userAnswer) {
  switch (gameType) {
    case 'game-type-yes-or-no':
      if (userAnswer === 'yes') {
        return true;
      } if (userAnswer === 'no') {
        return true;
      }
      return false;
    case 'game-type-number':
      if (!isNaN(userAnswer)) {
        return true;
      }
      return false;
  }
}

export default checkUserAnswerFormat;
