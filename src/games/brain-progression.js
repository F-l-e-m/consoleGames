import readlineSync from 'readline-sync';

const buildProgressionList = (progressionLength) => {
  const progressionList = [];
  const stepProgression = Math.round(Math.random() * 10);
  let numberInProgressionList = Math.round(Math.random() * 100);
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
  const progressionList = buildProgressionList(10);
  const hideNumber = hideRandomNumberInList(progressionList);
  console.log(`Question: ${progressionList.join(' ')}`);
  const userAnswer = Number(readlineSync.question('Your answer: '));
  if (userAnswer === hideNumber) {
    console.log('Correct!');
  } else {
    console.log(`${userAnswer} is wrong answer ;(. Correct answer was ${hideNumber}`);
    isSuccess = false;
  }
  return isSuccess;
};

export default brainProgression;
