import readlineSync from "readline-sync";

const Bot = () => {
  console.log("Welcome to the Brain Games!");
  console.log("May I have your name?");
  const name = readlineSync.question("Your answer: ");
  console.log("Hello!" + " " + name);
};

export default Bot;
