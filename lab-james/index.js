'use strict';

const useCall = require('./lib/use-call.js');
const useApply = require('./lib/use-apply.js');

let ff9 = ['Final Fantasy 9', 'RPG'];
let valhalla = ['VA-11 Hall-A'];

console.log(new useCall.Game('Mario 64', 'Platformer'));
console.log(new useCall.PcGame('Deus Ex', 'RPG'));

console.log(new useApply.ApplyGame('Final Fantasy', 'RPG'));
console.log(new useApply.ApplyPcGame('VA-11 Hall-A', 'RPG'));