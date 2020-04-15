import readlineSync from 'readline-sync';
import { initRandomNum } from '../utils.js';

const searchGcd = (num1, num2) => (num1 !== 0 ? searchGcd(num2 % num1, num1) : num2);

const brainGcd = () => {
  let isSuccess = true;
  const num = initRandomNum(10);
  const num2 = initRandomNum(10);
  console.log(`Question: ${num} ${num2}`);
  const nod = searchGcd(num, num2);
  const userAnswer = Number(readlineSync.question('Your answer: '));
  if (userAnswer !== nod) isSuccess = false;
  return {
    userAnswer: userAnswer,
    correctAnswer: nod,
    isSuccess: isSuccess
  };
};

export default brainGcd;
