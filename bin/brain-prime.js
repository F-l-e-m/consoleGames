#!/usr/bin/env node
import brainPrime from '../src/games/brain-prime.js';
import initGame from '../src/engine.js';

initGame(brainPrime, 'Answer "yes" if the number is even, otherwise answer "no"');

