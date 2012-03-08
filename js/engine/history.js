var AN_History = (function () {
    var hist = {}, History = window.History;

    hist.isForward = false;


    if (!History.enabled) {
        return false;
    }

    History.Adapter.bind(window, 'statechange', function () {
        var State;
        if (!hist.isForward) {
            State = History.getState();
            mediator.back(State);

        }
        hist.isForward = false;
    });
    hist.getState = function () {
        return History.getState();
    }
    hist.forward = function (result) {
        hist.isForward = true;
        History.pushState(result.state, "", result.url);
    }
    return hist;

})();