'use strict';

describe('mcHelper.version module', function() {
  beforeEach(module('mcHelper.version'));

  describe('version service', function() {
    it('should return current version', inject(function(version) {
      expect(version).toEqual('0.1');
    }));
  });
});
