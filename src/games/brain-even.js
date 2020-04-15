import readlineSync from 'readline-sync';
import { initRandomNum } from '../utils.js';

const brainEven = () => {
  const num = initRandomNum(100);
  console.log(`Question: ${num}`);
  const answer = readlineSync.question('Your answer: ');
  let serverAnswer = '';
  let isSuccess = true;
  if (num % 2 === 0) {
    if (answer === 'no') {
      serverAnswer = 'yes';
      isSuccess = false;
    }
  } else if (num % 2 !== 0) {
    if (answer === 'yes') {
      serverAnswer = 'no';
      isSuccess = false;
    }
  }
  return {
    userAnswer: answer,
    correctAnswer: serverAnswer,
    isSuccess: isSuccess
  };
};

export default brainEven;
