/*
 * adamin_clone
 * https://github.com/pensive612/Adamin-Clone
 *
 * Copyright (c) 2012 Adam L.
 * Licensed under the MIT, GPL licenses.
 * Created: 2012-Sep
 */

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

      // Set config statements to override, all the way to data-attribute
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

        if (!cloneValue) {
          window.console.log('data-clone value does not appear to be valid.  Make sure it only contains a number.  ie.  data-clone="6" ');
        } else if (cloneValue > configCap) {
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
        elemClone
          .removeAttr('data-clone')
          .addClass('clone-' + i)
          .insertAfter(elem);
      }
    }
  };

  Project.defaults = Project.prototype.defaults;

  $.fn.adaminClone = function(options, callback) {


    // Get depth of the element in the DOM to allow recursive cloning
    return this.sort(function(a, b) {
      var va = $(a).parents('[data-clone]').length;
      var vb = $(b).parents('[data-clone]').length;
      return vb - va;
    }).each(function() {
      
      // Begin plugin
      new Project(this, options).init();

      // run optional callback on (this)
      if (typeof callback === 'function') {
        callback.call(this);
      }
    });

  };

  window.Project = Project;

}(window, document, jQuery));