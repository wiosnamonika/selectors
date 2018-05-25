//return 1 correct solution
var $ = function (selector) {
    for (var i = 0; i <= selector.length; i++) {
        return selector[i];

        if (selector.indexOf('.') > 0) {
            return document.getElementsByClassName(selector);
        } else if (selector.indexOf('#') > 0) {
            return document.getElementsById(selector);

        } else {
            return document.getElementsByTagName(selector);
        };
    }
}

//return 2 correct solutions
var $ = function(selector) {
    var selectorTypeA = 'getElementsByTagName';
    // var selectorTypeA = document.all;
    // for (var i = 0; i < selectorTypeA.length; i += 1) {
    if (selector.indexOf('#') === 0) {
        selectorType = 'getElementById';

    }
    return document[selectorTypeA](selector);
}