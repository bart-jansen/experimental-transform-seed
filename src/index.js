'use strict';

var DOMElement = require('famous/dom-renderables/DOMElement');
var FamousEngine = require('famous/core/FamousEngine');
var Rotation = require('famous/components/rotation');
var paddingSize = 5;
var rows = 30;
var cols = 30;

var container = FamousEngine.createScene();

var els = [];

for (let c = 0; c < cols; c++) {
    for (let r = 0; r < rows; r++) {
        var el = container.addChild();

        new DOMElement(el)
            .setProperty('backgroundColor', 'hsl(' + (((c*cols + r) * 360) / (cols * rows)) + ', 100%, 50%)');

        el.setAlign(c / cols, r / rows)
            .setProportionalSize(1 / cols, 1 /rows)
            // .setDifferentialSize(-paddingSize, -paddingSize)

        els.push(el);
    }
}

var spinner = container.addComponent({
    onUpdate: function(time) {
        els.forEach(function(el) {
            el.setRotation(0, 0, time / 1000);
        });

        container.requestUpdateOnNextTick(spinner);
    }
});

container.requestUpdate(spinner);
FamousEngine.init();
