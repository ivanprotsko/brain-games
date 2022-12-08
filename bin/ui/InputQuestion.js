import readlineSync from "readline-sync";

const InputQuestion = () => {
  const result = readlineSync.question("Your answer: ");
  return result;
};

export default InputQuestion;
