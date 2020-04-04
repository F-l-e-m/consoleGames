import readlineSync from 'readline-sync';

const welcomeMessage = () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name?: ');
  console.log(`Hello, ${name}!`);
  return name;
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
  const name = welcomeMessage();
  console.log(description);
  runGame(game, name, step);
};

export default initGame;
