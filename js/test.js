var changeStyle = function(selector, prop, value) {
    var style = document.styleSheets[0].cssRules || document.styleSheets[0].rules;
    for (var i = 0; i < style.length; i++) {
        if (style[i].selectorText == selector) {
            style[i].style[prop] = value;
        }
    }
}


document.addEventListener('keydown', function(event) {
    if (event.key == "t") {
        changeTextOpacity();
    }
    /*
    if (event.ctrlKey && event.which === 72) {
        // open help widget
    }
    */
});



function changeTextOpacity() {
    var elem = document.getElementsByClassName('text')[0];
    var op = window.getComputedStyle(elem, null).getPropertyValue("opacity");

    if (op == "1") {
        changeStyle(".text", "opacity", "0");
    } else {
        changeStyle(".text", "opacity", "1");
    }
}