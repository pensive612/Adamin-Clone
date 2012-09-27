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

      this.getCloneValue(this.$el);
    },

    getCloneValue: function(elem) {

      var cloneValue = elem.data('clone');

      // remove anything but numbers in clone value
      cloneValue = parseInt( cloneValue, 10 );

      if ( cloneValue ) {
        this.cloneItem(this.$el, cloneValue);
      } else {
        return false;
      }
    },

    cloneItem: function(elem, value) {
      var elemClone = elem.clone(true);
      elemClone.removeAttr('data-clone');
      elemClone.insertAfter(elem);

    }

  };

  $.fn.adaminClone = function(config) {
    var obj = Object.create(adaminClone);
    return this.each(function() {
      obj.init(this, config);
    });
  };

}(jQuery));
