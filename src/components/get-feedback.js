function GetFeedback(gameType, userName, userAnswer, correctAnswer, correctAnswerSum, questionQuantityNumber) {
  const name = userName;
  if (gameType === 'game-type-yes-or-no') {
    if (userAnswer === 'yes' || userAnswer === 'no') {
      if (userAnswer === correctAnswer) {
        console.log('Correct!');
      } else {
        // Exit game
        console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was 'no'Wrong! Correct answer is "${correctAnswer}"`);
        console.log(`Let's try again, ${name}`);
        correctAnswerSum = -1;
      }
    } else {
      // Answer out of rules
      console.log('Please, answer only "yes" or "no"');
      correctAnswerSum = -1;
    }
  } else if (gameType === 'game-type-number') {
    if (!isNaN(userAnswer)) {
      // Check user answer
      if (userAnswer === correctAnswer) {
        console.log('Correct!');
      } else {
        // Exit game
        console.log(`Wrong! Correct answer is "${correctAnswer}"`);
        console.log(`Let's try again, ${userName}`);
        correctAnswerSum = -1;
      }
    } else {
      console.log('Please, answer using only number symbols "0—9999"');
      correctAnswerSum = -1;
    }
  } else {
    console.log('Game type is undefined.');
  }
  if (correctAnswerSum === questionQuantityNumber - 1) {
    console.log(`Contratulations, ${userName}!`);
  }
  return correctAnswerSum;
}

export default GetFeedback;
