export function outOfRulesFeedback(gameType) {
  switch (gameType) {
    case 'game-type-yes-or-no':
      console.log('Please, answer only "yes" or "no"');
      break;
    case 'game-type-number':
      console.log('Please, answer using only number symbols "0—9999"');
      break;
    default:
      console.log('Game type is undefined.');
      break;
  }
}
export function correctAnswerFeedback() {
  console.log('Correct!');
}
export function wrongAnswerFeedback(userName, userAnswer, correctAnswer) {
  console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'`);
  console.log(`Let's try again, ${userName}`);
}
export function congratulationFeedback(userName) {
  console.log(`Congratulations, ${userName}!`);
}
