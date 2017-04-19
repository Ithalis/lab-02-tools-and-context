'use strict';

module.exports = exports = {};

exports.Game = function(title, genre) {
  this.title = title;
  this.genre = genre;
};

exports.PcGame = function(title, genre) {
  Game.call(this, title, genre);
  this.isForPc = true;
};

let mario64 = new exports.Game('Mario 64', 'Platformer');
let deusEx = new exports.PcGame('Deus Ex', 'RPG');

console.log(mario64);
console.log(deusEx);
