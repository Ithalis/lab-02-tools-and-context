'use strict';

const assert = require('assert');

const useCall = require('../lib/use-call.js');

let deusEx = new useCall.PcGame('Deus Ex', 'RPG');

describe('useCall.js', function() {
  describe('#Game', function() {
    it('should return an object', function() {
      assert.equal(typeof deusEx, 'object');
    });
    
    it('should have Deus Ex as its title', function() {
      assert.equal(deusEx.title, 'Deus Ex');
    });
  });
  
  describe('#PcGame', function() {
    if('should be a pc game', function() {
      assert.equal(deusEx.isForPc, true);
    });
  });
})