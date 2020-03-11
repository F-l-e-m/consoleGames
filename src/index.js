import readlineSync from 'readline-sync';

export default () => {
  const answer = readlineSync.question('May I have your name?: ');
  console.log(`Hello, ${answer}!`);
};
