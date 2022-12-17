function checkUserAnswerFormat(gameType, userAnswer) {
  switch (gameType) {
    case 'game-type-yes-or-no':
      if (userAnswer === 'yes' || userAnswer === 'no') {
        return true;
      } else {
        return false;
      }
      break;
    case 'game-type-number':
      if (!isNaN(userAnswer)) {
        return true;
      } else {
        return false;
      }
  }
};

export default checkUserAnswerFormat;
