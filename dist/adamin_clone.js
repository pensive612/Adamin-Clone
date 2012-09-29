/*! Adamin Clone - v0.1.0 - 2012-09-29
* https://github.com/pensive612/Adamin-Clone
* Copyright (c) 2012 Adam L.; Licensed MIT, GPL */

(function(window, document, $, undefined) {
  var Project = function(elem, options) {
    this.elem = elem;
    this.$elem = $(elem);
    this.options = options;
    this.metadata = this.$elem.data('clone-cap');
  };

  Project.prototype = {
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

      // parse data-clone value
      cloneValue = this.parseCloneValue(cloneValue);

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
    parseCloneValue: function(value) {
      var cloneValue = parseInt(value, 10);
      return cloneValue;
    },
    cloneItem: function(elem, value) {
      var elemClone;

      for (var i = value; i > 0; i--) {
        elemClone = elem.clone(true);
        elemClone.removeAttr('data-clone');
        elemClone.addClass('clone-' + i);
        elemClone.insertAfter(elem);
      }
    }
  };

  Project.defaults = Project.prototype.defaults;

  $.fn.adaminClone = function(options, callback) {

    if (typeof callback === 'function') {
      callback.call(this);
    }

    return this.each(function() {
      new Project(this, options).init();
    });
  };

  window.Project = Project;

}(window, document, jQuery));