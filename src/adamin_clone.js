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
      var configCap = this.config.cloneCap;
      var cloneValue = elem.data('clone');

      cloneValue = (parseInt(cloneValue, 10) - 1);

      // if data-clone value is valid, send to clone function
      if ( cloneValue && (cloneValue < configCap) ) {
        this.cloneItem(this.$el, cloneValue);

      // otherwise, return false
      } else {

        if (cloneValue > configCap) {
          window.console.log('Your data-clone value is too high for the defaults.  Please check documentation to override cap in config.');
        }

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

  $.fn.adaminClone = function(config, callback) {
    var obj = Object.create(adaminClone);

    if (typeof callback == 'function') {
      callback.call(this);
    }

    return this.each(function() {
      obj.init(this, config);
    });

  };

  $.fn.adaminClone.defaults = {
    cloneCap: 100
  };

}(jQuery));
