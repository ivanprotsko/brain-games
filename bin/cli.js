import readlineSync from 'readline-sync';

const Bot = () => {
  const OutputMessage = (messageText) => {
    console.log(messageText);
  };
  const InputQuestion = () => {
    const result = readlineSync.question('Your answer: ');
    return result;
  };
  // OutputMessage('May I have your name?');
  // const name = InputQuestion();
  // OutputMessage(`Hello, ${name}`);
  const name = 'Username';

  OutputMessage('Answer "yes" if the number is even, otherwise answer "no"');
  OutputMessage('Question: is number "15" even?');
  const answerOne = InputQuestion();
  switch (answerOne) {
    case 'no':
      OutputMessage('Correct!');
      break;
    case 'yes':
      OutputMessage('Wrong! Correct answer is "no"');
      OutputMessage(`Let's try again, ${name}`);
      break;
    default:
      OutputMessage('Please, answer only "yes" or "no"');
      break;
  }

  if (answerOne === 'no') {
    OutputMessage('6?');
    const answerTwo = InputQuestion();
    switch (answerTwo) {
      case 'no':
        OutputMessage('Wrong! Correct answer is "yes"');
        OutputMessage(`Let's try again, ${name}`);
        break;
      case 'yes':
        OutputMessage('Correct!');
        break;
      default:
        OutputMessage('Please, answer only "yes" or "no"');
        break;
    }
    if (answerTwo === 'yes') {
      OutputMessage('7?');
      const answerThree = InputQuestion();
      switch (answerThree) {
        case 'no':
          OutputMessage('Correct!');
          OutputMessage(`Congratulations, ${name}!`);
          break;
        case 'yes':
          OutputMessage('Wrong! Correct answer is "yes"');
          break;
        default:
          OutputMessage('Please, answer only "yes" or "no"');
          break;
      }
    }
  }
};

export default Bot;
