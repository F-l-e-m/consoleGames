#!/usr/bin/env node
import brainGcd from '../src/games/brain-gcd.js';
import initGame from '../src/engine.js';

initGame(brainGcd, 'Answer "yes" if the number is even, otherwise answer "no"');