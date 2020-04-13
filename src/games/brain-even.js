import readlineSync from 'readline-sync';
import { initRandomNum } from '../utils.js';

const brainEven = () => {
  const num = initRandomNum(100);
  console.log(`Question: ${num}`);
  const answer = readlineSync.question('Your answer: ');
  let isSuccess = true;
  if (num % 2 === 0) {
    if (answer === 'yes') {
      console.log('Correct!');
    } else {
      console.log(`"${answer}" is wrong answer ;(. Correct answer was "yes"`);
      isSuccess = false;
    }
  } else if (num % 2 !== 0) {
    if (answer === 'no') {
      console.log('Correct!');
    } else {
      console.log(`"${answer}" is wrong answer ;(. Correct answer was "no"`);
      isSuccess = false;
    }
  }
  return isSuccess;
};

export default brainEven;
