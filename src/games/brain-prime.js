import readlineSync from 'readline-sync';
import { initRandomNum } from '../utils.js';
import initGame from '../engine.js';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (num) => {
  let i = 2;
  const limit = Math.sqrt(num);
  while (i <= limit) {
    if (num % i === 0) {
      return false;
    }
    i += 1;
  }
  return true;
};

const brainPrime = () => {
  let isSuccess = true;
  const number = initRandomNum(100);
  let serverAnswer = '';
  console.log(`Question: ${number}`);
  const userAnswer = readlineSync.question('Your answer: ');
  if (isPrime(number)) {
    if (userAnswer !== 'yes') {
      serverAnswer = 'yes';
      isSuccess = false;
    }
  } else {
    if (userAnswer !== 'no') {
      serverAnswer = 'no';
      isSuccess = false;
    }
  }
  return {
    userAnswer: userAnswer,
    correctAnswer: serverAnswer,
    isSuccess: isSuccess
  };
};

const run = () => {
  initGame(brainPrime, description);
}

export default run;
