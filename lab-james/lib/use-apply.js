'use strict';

module.exports = exports = {};

let ff9 = ['Final Fantasy 9', 'RPG'];
let valhalla = ['VA-11 Hall-A', 'RPG'];

exports.ApplyGame = function(title, genre) {
  this.title = title;
  this.genre = genre;
};

exports.ApplyPcGame = function(title, genre) {
  exports.ApplyGame.apply(this, [title, genre]);
  this.isForPc = true;
};
