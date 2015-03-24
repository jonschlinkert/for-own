/*!
 * for-own <https://github.com/jonschlinkert/for-own>
 *
 * Copyright (c) 2014-2015, Jon Schlinkert.
 * Licensed under the MIT License.
 */

'use strict';

/* deps:mocha */
var should = require('should');
var forOwn = require('./');

describe('.forOwn()', function () {
  it('should loop through all properties in the object.', function () {
    var obj = {a: 'foo', b: 'bar', c: 'baz'};
    var values = [];
    var keys = [];

    forOwn(obj, function (value, key, o) {
      o.should.eql(obj);
      keys.push(key);
      values.push(value);
    });

    keys.should.eql(['a', 'b', 'c']);
    values.should.eql(['foo', 'bar', 'baz']);
  });
});
