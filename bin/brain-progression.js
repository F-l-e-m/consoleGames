#!/usr/bin/env node
import brainProgression from '../src/games/brain-progression.js';
import initGame from '../src/engine.js';

initGame(brainProgression, 'Answer "yes" if the number is even, otherwise answer "no"');
