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
      this.testLi = $('.test-li');
      this.testLiNone = $('.test-li-none');
      this.testData = $('data-clone');
    }
  });

  test('is available on the jQuery object', 1, function() {
    ok($.fn.adaminClone);
  });

  test('is chainable', 1, function() {
    // Not a bad test to run on collection methods.
    strictEqual(this.testData.adaminClone(), this.testData, 'should be chaninable');
  });

  test('it should return true if contains valid data-clone attribute', 1, function() {
    ok(this.testData.adaminClone());
  });

  test('it should add the correct number of items', 1, function() {
    var parentContainer = this.testLi.parent();
    this.testLi.adaminClone();
    strictEqual(parentContainer.children('li').length, 4, 'should equal 4 items');
  });

  test('it should not add items if there is no valid data-clone value', 1, function() {
    var parentContainer = this.testLiNone.parent();
    this.testLiNone.adaminClone();
    strictEqual(parentContainer.children('li').length, 1, 'should equal itself only');
  });

  test('it should add classes to the clones', 1, function() {
    this.testLi.adaminClone();
    ok(this.testLi.next().hasClass('clone-1'));
  });

  test('it should increment the classes of clones', 1, function() {
    var parentContainer = this.testLi.parent();
    this.testLi.adaminClone();
    ok($('li:eq(3)', parentContainer).hasClass('clone-3'));
  });

  

}(jQuery));
