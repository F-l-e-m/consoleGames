import readlineSync from 'readline-sync';

const welcomeMessage = () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name?: ');
  console.log(`Hello, ${name}!`);
  return name;
};

const runBrainGame = () => {
  welcomeMessage();
};

const runEvenGame = (steps = 0, description) => {
  if (steps <= 0) console.log('Min steps = 1');
  const name = welcomeMessage();
  console.log(description);
  let checkSteps = steps;
  while (checkSteps !== 0) {
    const num = Math.round(Math.random() * 100);
    console.log(`Question: ${num}`);
    const answer = readlineSync.question('Your answer: ');
    if (num % 2 === 0) {
      if (answer === 'yes') {
        console.log('Correct!');
        checkSteps -= 1;
      } else {
        console.log(`"${answer}" is wrong answer ;(. Correct answer was "yes"`);
        break;
      }
    } else if (num % 2 !== 0) {
      if (answer === 'no') {
        console.log('Correct!');
        checkSteps -= 1;
      } else {
        console.log(`"${answer}" is wrong answer ;(. Correct answer was "no"`);
        break;
      }
    }
  }
  return checkSteps === 0 ? console.log(`Congratulations, ${name}`) : console.log(console.log(`Let's try again, ${name}!`));
};

const operations = () => ['+', '-', '/', '*'];

const buildQuestion = (num1, num2, randomOperation) => {
  const operation = operations();
  return `${num1} ${operation[randomOperation]} ${num2}`;
};

const buildAnswer = (num1, num2, randomOperation) => {
  const operation = operations();
  let result = 0;
  switch (operation[randomOperation]) {
    case '+':
      result = num1 + num2;
      break;
    case '*':
      result = num1 * num2;
      break;
    case '-':
      result = num1 - num2;
      break;
    case '/':
      result = num1 / num2;
      result.toFixed(2);
      break;
    default:
      console.log('Ошибка вычисления');
      break;
  }
  return result;
};

const runCalcGame = (steps = 0, description) => {
  if (steps <= 0) console.log('Min steps = 1');
  const name = welcomeMessage();
  console.log(description);
  let checkSteps = steps;

  while (checkSteps !== 0) {
    const num = Math.round(Math.random() * 10);
    const num2 = Math.round(Math.random() * 10);
    const randomOperation = Math.floor(0 + Math.random() * (2 + 1 - 0));
    const question = buildQuestion(String(num), String(num2), randomOperation);
    console.log(`Question: ${question}`);
    const systemAnswer = buildAnswer(num, num2, randomOperation);
    const userAnswer = Number(readlineSync.question('Your answer: '));
    if (userAnswer === systemAnswer) {
      console.log('Correct!');
      checkSteps -= 1;
    } else {
      console.log(`${userAnswer} is wrong answer ;(. Correct answer was ${systemAnswer}`);
      break;
    }
  }
  return checkSteps === 0 ? console.log(`Congratulations, ${name}`) : console.log(console.log(`Let's try again, ${name}!`));
};

const searchGcd = (num1, num2) => (num1 !== 0 ? searchGcd(num2 % num1, num1) : num2);

const runGcd = (steps = 0, description) => {
  if (steps <= 0) console.log('Min steps = 1');
  const name = welcomeMessage();
  console.log(description);
  let checkSteps = steps;

  while (checkSteps !== 0) {
    const num = Math.round(Math.random() * 10);
    const num2 = Math.round(Math.random() * 10);
    console.log(`Question: ${num} ${num2}`);
    const nod = searchGcd(num, num2);
    const userAnswer = Number(readlineSync.question('Your answer: '));
    if (userAnswer === nod) {
      console.log('Correct!');
      checkSteps -= 1;
    } else {
      console.log(`${userAnswer} is wrong answer ;(. Correct answer was ${nod}`);
      break;
    }
  }
  return checkSteps === 0 ? console.log(`Congratulations, ${name}`) : console.log(console.log(`Let's try again, ${name}!`));
};

const buildProgressionList = (progressionLength) => {
  const progressionList = [];
  const stepProgression = Math.round(Math.random() * 10);
  const firstStep = Math.round(Math.random() * 100);
  let numberInProgressionList = firstStep;
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

const runProgression = (steps = 0, description) => {
  if (steps <= 0) console.log('Min steps = 1');
  const name = welcomeMessage();
  console.log(description);
  let checkSteps = steps;
  while (checkSteps !== 0) {
    const progressionList = buildProgressionList(10);
    const hideNumber = hideRandomNumberInList(progressionList);
    console.log(`Question: ${progressionList.join(' ')}`);
    const userAnswer = Number(readlineSync.question('Your answer: '));
    if (userAnswer === hideNumber) {
      console.log('Correct!');
      checkSteps -= 1;
    } else {
      console.log(`${userAnswer} is wrong answer ;(. Correct answer was ${hideNumber}`);
      break;
    }
  }
  return checkSteps === 0 ? console.log(`Congratulations, ${name}`) : console.log(console.log(`Let's try again, ${name}!`));
};

export const initGame = (typeGame) => {
  switch (typeGame) {
    case 'brainGame':
      runBrainGame();
      return;
    case 'brainEven':
      runEvenGame(3, 'Answer "yes" if the number is even, otherwise answer "no"');
      break;
    case 'brainCalc':
      runCalcGame(3, 'What is the result of the expression?');
      break;
    case 'brainGcd':
      runGcd(3, 'Find the greatest common divisor of given numbers.');
      break;
    case 'brainProgression':
      runProgression(3, 'What number is missing in the progression?');
      break;
    default:
      console.log('Ошибка');
      break;
  }
};

export default initGame;
