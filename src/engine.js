import readlineSync from 'readline-sync';

const runGame = (game, name, step) => {
  if (step === 0) {
    console.log(`Congratulations, ${name}`);
    return;
  }
  const data = game();
  if(data.isSuccess) {
    console.log('Correct!');
  } else {
    console.log(`"${data.userAnswer}" is wrong answer ;(. Correct answer was "${data.correctAnswer}"`);
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

export const initAnswer = (data) => {
  console.log(`Question: ${data}`);
  const answer = readlineSync.question('Your answer: ');
  return answer;
};

export default initGame;
