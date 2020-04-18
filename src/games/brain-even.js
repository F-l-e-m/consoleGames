import readlineSync from 'readline-sync';
import { initRandomNum } from '../utils.js';
import initGame from '../engine.js';
import { initAnswer } from '../engine.js';

const description = 'Answer "yes" if the number is even, otherwise answer "no"';

const brainEven = () => {
  const num = initRandomNum(100);
  let isSuccess = true;
  let serverAnswer = '';
  const answer = initAnswer(num);
  if(answer !== 'no' && answer !== 'yes') {
    serverAnswer = 'yes or no'
    isSuccess = false
  };
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

const run = () => {
  initGame(brainEven, description);
}

export default run;
