/*
 * adamin_clone
 * https://github.com/pensive612/Adamin-Clone
 *
 * Copyright (c) 2012 Adam L.
 * Licensed under the MIT, GPL licenses.
 */

(function($) {

  var adaminClone = {
    init: function(el, config) {
      this.config = $.extend({}, $.fn.adaminClone.defaults, config);

      this.el = el;
      this.$el = $(el);
    }
  };

  $.fn.adaminClone = function(config) {
    var obj = Object.create(adaminClone);
    return this.each(function() {
      obj.init(this, config);
    });
  };

}(jQuery));
