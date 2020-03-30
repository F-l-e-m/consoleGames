import readlineSync from 'readline-sync';

const brainPrime = () => {
  let isSuccess = true;
  const number = initRandomNum(100);
  console.log(`Question: ${number}`);
  const userAnswer = readlineSync.question('Your answer: ');
  if (isPrime(number)) {
    if (userAnswer === 'yes') {
      console.log('Correct!');
    } else {
      console.log(`${userAnswer} is wrong answer ;(. Correct answer was no`);
      isSuccess = false;
    }
  } else if (userAnswer === 'no') {
    console.log('Correct!');
  } else {
    console.log(`${userAnswer} is wrong answer ;(. Correct answer was no`);
    isSuccess = false;
  }
  return isSuccess;
};

const initRandomNum = (maxValue) => Math.round(Math.random() * 100);

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


export default brainPrime;