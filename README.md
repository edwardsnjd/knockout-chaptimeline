knockout-chaptimeline
=====================

A simple [KnockoutJS][knockout] binding for the [CHAP timeline visualisation][timeline].

Usage
-----

**Example: Plain old javascript objects**

```html
<div data-bind="chaptimeline: {events: someEvents, range: visibleRange}"></div>
```

```js
var vm = {
    someEvents: [{
        start: new Date(),
        content: "Event happening now"
    }, {
        start: new Date("2010-01-01"),
        end: new Date(),
        content: "Event from the past"
    }],
    visibleRange: {
        start: new Date("2009-01-01"),
        end: new Date()
    }
};

ko.applyBindings(vm);
```

(See this example in jsFiddle here: [http://jsfiddle.net/edwardsnjd/N6br8/](http://jsfiddle.net/edwardsnjd/N6br8/))

**Example: Observables**

```html
<a href="#" data-bind="click: addAnEvent">Add an event</a>

<div data-bind="chaptimeline: {events: someEvents, range: visibleRange}"></div>
```

```js
var vm = {
    someEvents: ko.observableArray([{
        start: new Date(),
        content: "Event happening now"
    }, {
        start: new Date("2010-01-01"),
        end: new Date(),
        content: "Event from the past"
    }]),
    visibleRange: ko.observable({
        start: new Date("2009-01-01"),
        end: new Date()
    })
};

vm.addAnEvent = function () {
    vm.someEvents.push({
        start: new Date(),
        content: "A newly added event"
    });
};

vm.visibleRange.subscribe(function (newRange) {
    console.log("Range changed: " + newRange.start);
});

ko.applyBindings(vm);
```

(See this example in jsFiddle here: [http://jsfiddle.net/edwardsnjd/UPcJF/](http://jsfiddle.net/edwardsnjd/UPcJF/))

Dependencies
------------

- [Knockout][knockout]
- [ChapTimeline][timeline]

License
-------

See LICENSE.

[knockout]: http://knockoutjs.com/
[timeline]: http://chap.almende.com/visualization/timeline/
