#!/usr/bin/env node
import brainEven from '../src/games/brain-even.js';
import initGame from '../src/engine.js';

initGame(brainEven, 'Answer "yes" if the number is even, otherwise answer "no"');
