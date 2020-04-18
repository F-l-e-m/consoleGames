import readlineSync from 'readline-sync';
import { initRandomNum } from '../utils.js';
import initGame from '../engine.js';
import { initAnswer } from '../engine.js';

const buildRandomOperation = () => Math.floor(0 + Math.random() * (2 + 1 - 0));
const description = 'What is the result of the expression?';
const getOperations = () => ['+', '-', '*'];

const calc = (num1, num2, operation) => {
  let result = 0;
  switch (operation) {
    case '+':
      result = num1 + num2;
      break;
    case '*':
      result = num1 * num2;
      break;
    case '-':
      result = num1 - num2;
      break;
    default:
      console.log('Ошибка вычисления');
      break;
  }
  return result;
};

const brainCalc = () => {
  const operations = getOperations();
  let isSuccess = true;
  const num = initRandomNum(10);
  const num2 = initRandomNum(10);
  const randomOperation = buildRandomOperation();
  const question = `${String(num)} ${operations[randomOperation]} ${String(num2)}`;
  const serverAnswer = calc(num, num2, operations[randomOperation]);
  const userAnswer = Number(initAnswer(question));
  if (userAnswer !== serverAnswer) isSuccess = false;
  return {
    userAnswer: userAnswer,
    correctAnswer: serverAnswer,
    isSuccess: isSuccess
  };
};

const run = () => {
  initGame(brainCalc, description);
}

export default run;
