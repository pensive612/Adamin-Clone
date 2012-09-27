/*global QUnit:false, module:false, test:false, asyncTest:false, expect:false*/
/*global start:false, stop:false ok:false, equal:false, notEqual:false, deepEqual:false*/
/*global notDeepEqual:false, strictEqual:false, notStrictEqual:false, raises:false*/
(function($) {

  /*
    ======== A Handy Little QUnit Reference ========
    http://docs.jquery.com/QUnit

    Test methods:
      expect(numAssertions)
      stop(increment)
      start(decrement)
    Test assertions:
      ok(value, [message])
      equal(actual, expected, [message])
      notEqual(actual, expected, [message])
      deepEqual(actual, expected, [message])
      notDeepEqual(actual, expected, [message])
      strictEqual(actual, expected, [message])
      notStrictEqual(actual, expected, [message])
      raises(block, [expected], [message])
  */

  module('$.fn.adaminClone()', {
    setup: function() {
      this.testUl = $('.test-li');
      this.testUl2 = $('.test-li-2');
    }
  });

  test('is available on the jQuery object', 1, function() {
    ok($.fn.adaminClone);
  });

  test('is chainable', 1, function() {
    // Not a bad test to run on collection methods.
    strictEqual(this.testUl.adaminClone(), this.testUl, 'should be chaninable');
  });

  test('it should return true if contains valid data-clone attribute', 1, function() {
    ok(this.testUl.adaminClone());
  });

  

}(jQuery));
