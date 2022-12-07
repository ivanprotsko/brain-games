import OutputMessage from "../UI/OutputMessage.js";
import InputQuestion from "../UI/InputQuestion.js";

const EvenOddGame = () => {
  const nameQuestionOutputMessage = () => {
    OutputMessage('May I have your name?');
    const userName = InputQuestion();
    helloUsernameOutputMessage(userName);
    return userName;
  };

  const helloUsernameOutputMessage = (userName) => {
    OutputMessage(`Hello, ${userName}`);
  };

  const answerCheckerOutputMessage = (answer, userName) => {
    switch (answer) {
      case true:
        OutputMessage('Correct!');
        break;
      case false:
        OutputMessage('Wrong! Correct answer is "no"');
        OutputMessage(`Let's try again, ${userName}`);
        break;
      case 'out-of-rules':
        OutputMessage('Please, answer only "yes" or "no"');
        break;
      default:
        OutputMessage('Answer undifined');
        break;
    }
  };

  const answerChecker = (correctAnswer, userAnswer) => {
    if (correctAnswer === userAnswer) {
      userAnswer = true;
    } else if (userAnswer !== 'no' && userAnswer !== 'yes') {
      userAnswer = 'out-of-rules';
    } else {
      userAnswer = false;
    }
    return userAnswer;
  };

  const GameQuestion = (name, question, answer) => {
    let userName = name;
    OutputMessage(question);
    const correctAnswer = answer;
    let userAnswer = InputQuestion();

    userAnswer = answerChecker(correctAnswer, userAnswer);

    answerCheckerOutputMessage(userAnswer, userName);

    return userAnswer;
  };

  const userName = nameQuestionOutputMessage();
  OutputMessage('Answer "yes" if the number is even, otherwise answer "no"');
  let userAnswer = GameQuestion(
    userName,
    'Question: is number "15" even?',
    'no',
  );
  if (userAnswer === true) {
    userAnswer = GameQuestion(userName, 'Question: is number "6" even?', 'yes');
  }
  if (userAnswer === true) {
    userAnswer = GameQuestion(userName, 'Question: is number "7" even?', 'no');
  }
  if (userAnswer === true) {
    OutputMessage(`Congratulations, ${userName}!`);
  }
};

export default EvenOddGame;
