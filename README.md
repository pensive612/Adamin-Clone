# Adamin Clone

A really easy way to clone elements for quick mocking.

Instead of creating 25 ```<li>``` elements in a ```<ul>```, I do this:

```html
<ul>
  <li data-clone="25">Test item</li>
</ul>
```


## Getting Started
Download the [production version][min] or the [development version][max].

[min]: https://raw.github.com/pensive612/adamin_clone/master/dist/adamin_clone.min.js
[max]: https://raw.github.com/pensive612/adamin_clone/master/dist/adamin_clone.js

In your web page:

```html
<!-- Load the source files -->
<script src="src/jquery.js"></script>
<script src="src/adamin_clone.min.js"></script>

<!-- Call the plugin -->
<script>
  jQuery(function($) {
    $('data-clone').adaminClone(); // "adds plugin to any element that has data-clone attribute"
  });
</script>

<!-- Then just add the data-clone attribute to any element in your html to clone it -->
<ul>
  <li data-clone="10"></li>
</ul>
```

## Examples
##### Standard Implementation
This will load the plugin and clone any element that has a ```data-clone``` attribute with a number value.

```html
<script>
  jQuery(function($) {
    $('data-clone').adaminClone(); // "adds plugin to any element that has data-clone attribute"
  });
</script>

<!-- now just add a data-clone attribute and number value -->
<ul class="list-container">
  <li data-clone="6"></li>
</ul>
```

##### Adding a Callback
You might want to add a callback after the items are cloned.  Here is how:

```javascript
$('data-clone').adaminClone({}, function() {
  // Put your callback logic inside the function
  window.console.log('My items were just cloned!');
});
```

##### Overriding the Data-Cap Option
If you want to clone more than a 100 items to an element.  You need to set a higher clone-cap value.  You can do this in a couple ways.

In the plugin call:
```javascript
$('data-clone').adaminClone({
  cloneCap: 500 // put your new number value here
});
```

Or you can do it in the html directly, if its only for 1 item:
```html
<li data-clone="120" data-clone-cap='{"cloneCap":"200"}'>My item</li>
```

## Documentation
This plugin is a utilization of the jquery [.clone()](http://api.jquery.com/clone/) method.  

Currently, the behavior of jQuery .clone() is to clone the element 1 time.  And should be separately prepended/appended to a specified container.

This plugin instead, allows you duplicate the element any number of times, and insert them directly after the cloned element.

You'll notice it also creates enumerated classes if you need to target any specific clones.  Each cloned element should have a class of 'clone-i'. 

It also passes the 'true' argument, so all clones retain any events bound to the original element.

For validation purposes, there is a default 'cap' of amount of times an element can be cloned.  It is set to ```'100'```. This is to prevent accidentally inserting a 1000 elements into the DOM.

However, you can easily override this 'cap' value by changing the defaults of the plugin, or within a data-attribute directly in the element.  

And lastly, you can utilize a callback function after the plugin is run.  

**See 'Examples' for all usage.**

Although you will most likely only be using this plugin in a mocking/development environment.  It is under 1k and 600 bytes gzipped.

It is tested using [qunit](http://qunitjs.com/) and built using [grunt](https://github.com/cowboy/grunt).

## License
Copyright (c) 2012 Adam L.  
Licensed under the MIT, GPL licenses.

## Contributing
Any pull requests will be happily reviewed.  Please make sure they are tested, documented and use [grunt](https://github.com/cowboy/grunt).