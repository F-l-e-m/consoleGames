#!/usr/bin/env node
import brainCalc from '../src/games/brain-calc.js';
import initGame from '../src/engine.js';

initGame(brainCalc, 'Answer "yes" if the number is even, otherwise answer "no"');
