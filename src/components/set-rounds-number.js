import readlineSync from 'readline-sync';


const setRoundsNumber = () => {
  let questionQuantityNumber;
  let counter;

  for (counter = 0; counter < 2; counter += 1) {
    // Set question quantity
    const questionQuantity = parseInt(readlineSync.question('Set questions quantity: '));
    if (!isNaN(questionQuantity)) {
      if (questionQuantity !== 0) {
        return questionQuantity;
      } else {
        counter = 0;
        console.log('Please, set an integer.');
      }
    } else {
      counter = 0;
      console.log('Please, set a number.');
    }
  }
};

export default setRoundsNumber;
