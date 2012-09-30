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
      this.testLiBig = $('.test-li-big');
      this.testData = $('data-clone');
    }
  });

  test('is available on the jQuery object', 1, function() {
    ok($.fn.adaminClone);
  });

  test('is chainable', 1, function() {
    // Not a bad test to run on collection methods.
    strictEqual(this.testData.adaminClone(), this.testData, 'should be chainable');
  });

  test('it should not add items if there is no valid data-clone value', 1, function() {
    var parentContainer = this.testLiNone.parent();
    this.testLiNone.adaminClone();
    strictEqual(parentContainer.children('li').length, 1, 'should equal itself only');
  });

  test('it should return true if contains valid data-clone attribute', 1, function() {
    ok(this.testData.adaminClone());
  });

  test('it should add the correct number of items', 1, function() {
    var parentContainer = this.testLi.parent();
    this.testLi.adaminClone();
    strictEqual(parentContainer.children('li').length, 4, 'should equal 4 items');
  });

  test('it should add classes to the clones', 1, function() {
    this.testLi.adaminClone();
    ok(this.testLi.next().hasClass('clone-1'));
  });

  test('it should increment the classes of clones', 3, function() {
    var parentContainer = this.testLi.parent();
    this.testLi.adaminClone();
    ok($('li:eq(1)', parentContainer).hasClass('clone-1'));
    ok($('li:eq(2)', parentContainer).hasClass('clone-2'));
    ok($('li:eq(3)', parentContainer).hasClass('clone-3'));
  });

  test('it should not allow clone value over 100 by default', 1, function() {
    this.testLiBig.adaminClone();
    strictEqual(this.testLiBig.parent().children().length, 1, 'should equal 1');
  });

  test('should allow you to override clone value cap', 1, function() {
    this.testLiBig.adaminClone({
      cloneCap: 105
    });

    strictEqual(this.testLiBig.parent().children().length, 103, 'should equal 103 items');
  });

  test('callback should run after clone occurs', 1, function() {
    this.testLi.adaminClone({}, function() {
      $(this).siblings().remove();
    });

    strictEqual($(this).siblings().length, 0, 'there should be no elements');
  });

  test('it should allow cap to be overridden in data-clone-cap', 1, function() {
    this.testLiBig.attr('data-clone-cap', '{"cloneCap":"200"}');
    this.testLiBig.adaminClone();
    strictEqual(this.testLiBig.parent().children().length, 103, 'should equal 103');
  });
  

}(jQuery));
