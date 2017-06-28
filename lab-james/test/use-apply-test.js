'use strict';

const assert = require('assert');

const useApply = require('../lib/use-apply.js');

let deusEx = new useApply.ApplyPcGame('Deus Ex', 'RPG');

describe('use-apply.js', function() {
  describe('#ApplyGame', function() {
    it('should return an object', function() {
      assert.equal(typeof deusEx, 'object');
    });
  });
  
  describe('#ApplyPcGame', function() {
    it('should be a pc game', function() {
      assert.equal(deusEx.isForPc, true);
    });
  });
})