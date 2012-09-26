/*! Adamin Clone - v0.1.0 - 2012-09-25
* https://github.com/pensive612/Adamin-Clone
* Copyright (c) 2012 Adam L.; Licensed MIT, GPL */

(function($) {

  // Collection method.
  $.fn.awesome = function() {
    return this.each(function() {
      $(this).html('awesome');
    });
  };

  // Static method.
  $.awesome = function() {
    return 'awesome';
  };

  // Custom selector.
  $.expr[':'].awesome = function(elem) {
    return elem.textContent.indexOf('awesome') >= 0;
  };

}(jQuery));
