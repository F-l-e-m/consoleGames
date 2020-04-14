import readlineSync from 'readline-sync';
import brainEven from './games/brain-even.js';
import brainCalc from './games/brain-calc.js';
import brainGcd from './games/brain-gcd.js';
import brainProgression from './games/brain-progression.js';
import brainPrime from './games/brain-prime.js';

const gameConditions = {
  brainEven: 'Answer "yes" if the number is even, otherwise answer "no"',
  brainCalc: 'What is the result of the expression?',
  brainGcd: 'Find the greatest common divisor of given numbers.',
  brainProgression: 'What number is missing in the progression?',
  brainPrime: 'Answer "yes" if given number is prime. Otherwise answer "no".'
};

const runGame = (game, name, step = 3) => {
  if (step === 0) {
    console.log(`Congratulations, ${name}`);
    return;
  }
  const isSuccess = game();
  if (!isSuccess) {
    console.log(`Let's try again, ${name}!`);
    return;
  }
  runGame(game, name, step -= 1);
};

const initGame = (game, description, step = 3) => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name?: ');
  console.log(`Hello, ${name}!`);
  console.log(description);
  runGame(game, name, step);
};

export const startBrainEven = () => {
  initGame(brainEven, gameConditions.brainEven);
};

export const startBrainCalc = () => {
  initGame(brainCalc, gameConditions.brainCalc);
};

export const startBrainGcd = () => {
  initGame(brainGcd, gameConditions.brainGcd);
};

export const startBrainProgression = () => {
  initGame(brainProgression, gameConditions.brainGcd);
};

export const startBrainPrime = () => {
  initGame(brainPrime, gameConditions.brainGcd);
};
