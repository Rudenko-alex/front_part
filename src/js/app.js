import * as flsFunctions from './modules/functions.js';
import * as Formula  from './modules/formula.js';
import data from '../../data.json' assert { type: 'JSON' };
import render  from './modules/render.js';

console.log(data);


flsFunctions.isWebp();
render(data);
Formula.formulaRender();
Formula.formulaFunc();
