import readlineSync from 'readline-sync';
import { initRandomNum } from '../utils.js';
import initGame from '../engine.js';
import { initAnswer } from '../engine.js';

const searchGcd = (num1, num2) => (num1 !== 0 ? searchGcd(num2 % num1, num1) : num2);
const description = 'Find the greatest common divisor of given numbers.';

const brainGcd = () => {
  let isSuccess = true;
  const num = initRandomNum(10);
  const num2 = initRandomNum(10);
  const nod = searchGcd(num, num2);
  const userAnswer = Number(initAnswer(`${num} ${num2}`));
  if (userAnswer !== nod) isSuccess = false;
  return {
    userAnswer: userAnswer,
    correctAnswer: nod,
    isSuccess: isSuccess
  };
};

const run = () => {
  initGame(brainGcd, description);
}

export default run;
