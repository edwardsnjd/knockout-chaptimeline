knockout-chaptimeline
=====================

A simple [knockout](http://knockoutjs.com/) binding for the [CHAP timeline](http://chap.almende.com/visualization/timeline/).

Usage
-----

```js
var vm = {
	someEvents: [{start: new Date(), content: "An event title"}],
	range: {start: new Date(), end: new Date()}
};
```

```html
<div data-bind="chaptimeline: {events: someEvents, range: visibleRange}"></div>
```

Or see this jsFiddle: [http://jsfiddle.net/edwardsnjd/N6br8/]()

Dependencies
------------

- [Knockout](http://knockoutjs.com/)
- [ChapTimeline](http://chap.almende.com/visualization/timeline/)

License
-------

See LICENSE.