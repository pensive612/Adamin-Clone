/*
 * adamin_clone
 * https://github.com/pensive612/Adamin-Clone
 *
 * Copyright (c) 2012 Adam L.
 * Licensed under the MIT, GPL licenses.
 * Created: 2012-Sep
 */

(function(window, document, $, undefined) {
  var AdaminClone = function(elem, options) {
    this.elem = elem;
    this.$elem = $(elem);
    this.options = options;
    this.metadata = this.$elem.data('adamin-options');
  };

  AdaminClone.prototype = {
    defaults: {
      cloneCap: 100
    },
    init: function() {
      this.config = $.extend({}, this.defaults, this.options, this.metadata);

      this.getCloneValue(this.$elem);

      return this;
    },
    getCloneValue: function(elem) {
      var configCap = this.config.cloneCap;
      var cloneValue = elem.data('clone');

      cloneValue = (parseInt(cloneValue, 10) - 1);

      // if data-clone value is valid, send to clone function
      if ( cloneValue && (cloneValue < configCap) ) {
        this.cloneItem(this.$elem, cloneValue);

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

  AdaminClone.defaults = AdaminClone.prototype.defaults;

  $.fn.adaminClone = function(options, callback) {

    if (typeof callback === 'function') {
      callback.call(this);
    }

    return this.each(function() {
      new AdaminClone(this, options).init();
    });
  };

  window.AdaminClone = AdaminClone;

})(window, document, jQuery);