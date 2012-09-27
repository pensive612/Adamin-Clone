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
      cloneValue = (parseInt(cloneValue, 10) - 1);


      if ( cloneValue ) {
        this.cloneItem(this.$el, cloneValue);
      } else {
        return false;
      }
    },

    cloneItem: function(elem, value) {
      var elemClone;

      for (var i = value; i >= 0; i--) {
        elemClone = elem.clone(true);
        elemClone.removeAttr('data-clone');
        elemClone.addClass('clone-' + (i + 1));
        elemClone.insertAfter(elem);
      }
    }

  };

  $.fn.adaminClone = function(config) {
    var obj = Object.create(adaminClone);
    return this.each(function() {
      obj.init(this, config);
    });
  };

}(jQuery));
