// Knock out binding for CHAP Timeline

// Binding creates the timeline based on the properties of the
// model bound to:
// - 'events' = [] or observableArray of {start, end?, content, ...}
// - 'range' = null or observable of {start, end}
// - 'renderOptions' = null or options object to pass to timeline.draw(...)
ko.bindingHandlers.chaptimeline = {
    init: function(element, valueAccessor) {
        // Extend default config with supplied values
        var defaults = {
            events: [],
            range: null,
            renderOptions: {
                width:  "100%",
                cluster: true
            }
        };
        var config = ko.utils.extend(defaults, valueAccessor());
        // TODO: Allow editing of events once observables are updated
        config.renderOptions.editable = false;

        // Create and populate the timeline control
        var timeline = new links.Timeline(element);
        timeline.draw(ko.unwrap(config.events), config.renderOptions);

        // Set init range if it is specified
        var initRange = ko.unwrap(config.range);
        if (initRange) {
            timeline.setVisibleChartRange(initRange.start, initRange.end);
        }

        // Set some flags about update behaviour
        var observableEvents = ko.isObservable(config.events);
        var observableRange = ko.isObservable(config.range);

        // Subscribe to changes in observables
        if (observableEvents) {
            config.events.subscribe(function(events) {
                timeline.setData(events);
                timeline.redraw();
            });
        }
        if (observableRange) {
            config.range.subscribe(function(newRange) {
                timeline.setVisibleChartRange(newRange.start, newRange.end);
            });
        }

        // Change observables on user events
        if (observableRange) {
            google.visualization.events.addListener(timeline, 'rangechange', function() {
                config.range(timeline.getVisibleChartRange());
            });
        }
        // TODO: Allow editing of events

        // TODO: Handle DOM node removal to stop leaking memory
    }
};
