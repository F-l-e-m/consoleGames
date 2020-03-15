import readlineSync from 'readline-sync';

console.log('Welcome to the Brain Games!');

export const question = () => {
  const answer = readlineSync.question('May I have your name?: ');
  console.log(`Hello, ${answer}!`);
  return answer;
};

export const gameEven = () => {
  let steps = 0;
  const name = question();
  console.log('Answer "yes" if the number is even, otherwise answer "no"');
  for (let i = 0; i < 3; i++) {
    let num = Math.round(Math.random() * 10);
    console.log(`Question: ${num}`);
    const answer = readlineSync.question('Your answer: ');
    if (num % 2 === 0) {
      if (answer === 'yes') {
        console.log('Correct!');
        steps += 1;
        continue;
      } else {
        console.log(`${answer} is wrong answer ;(. Correct answer was "yes"`);
        console.log(`Let's try again, ${name}!`);
        break;
      }
    } else if (num % 2 !== 0) {
      if(answer === 'no') {
        console.log('Correct!');
        steps += 1;
        continue;
      } else {
        console.log(`${answer} is wrong answer ;(. Correct answer was "no"`);
        console.log(`Let's try again, ${name}!`);
        break;
      }
    }
  }
}
