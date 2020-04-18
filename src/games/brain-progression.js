import readlineSync from 'readline-sync';
import { initRandomNum } from '../utils.js';
import initGame from '../engine.js';
import { initAnswer } from '../engine.js';

const description = 'What number is missing in the progression?';

const buildProgressionList = (progressionLength) => {
  const progressionList = [];
  const stepProgression = initRandomNum(10);
  let numberInProgressionList = initRandomNum(100);
  for (let i = progressionLength; i > 0; i -= 1) {
    numberInProgressionList += stepProgression;
    progressionList.push(numberInProgressionList);
  }
  return progressionList;
};

const hideRandomNumberInList = (list) => {
  const randomHideNumPosition = Math.round(Math.random() * list.length);
  return Number(list.splice(randomHideNumPosition, 1, '..').join(''));
};

const brainProgression = () => {
  let isSuccess = true;
  let serverAnswer = '';
  const progressionLength = 10;
  const progressionList = buildProgressionList(progressionLength);
  const hideNumber = hideRandomNumberInList(progressionList);
  const userAnswer = Number(initAnswer(progressionList.join(' ')));
  if (userAnswer !== hideNumber) {
    serverAnswer = hideNumber;
    isSuccess = false;
  }
  return {
    userAnswer: userAnswer,
    correctAnswer: serverAnswer,
    isSuccess: isSuccess
  };
};

const run = () => {
  initGame(brainProgression, description);
}

export default run;
