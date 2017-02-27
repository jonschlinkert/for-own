'use strict';

require('mocha');
var assert = require('assert');
var forOwn = require('./');

describe('forOwn', function() {
  it('should expose keys and values from the given object', function() {
    var obj = {a: 'foo', b: 'bar', c: 'baz'};
    var values = [];
    var keys = [];

    forOwn(obj, function(value, key, o) {
      assert.deepEqual(o, obj);
      keys.push(key);
      values.push(value);
    });

    assert.deepEqual(keys, ['a', 'b', 'c']);
    assert.deepEqual(values, ['foo', 'bar', 'baz']);
  });
});
