'use strict';

var DOMElement = require('famous/dom-renderables/DOMElement');
var FamousEngine = require('famous/core/FamousEngine');
var Rotation = require('famous/components/rotation');
var paddingSize = 5;
var rows = 20;
var cols = 20;

FamousEngine.init();

var container = FamousEngine.createScene();

var els = [];

for (let c = 0; c < cols; c++) {
    for (let r = 0; r < rows; r++) {
        var el = container.addChild();

        new DOMElement(el)
            .setProperty('backgroundColor', 'hsl(' + (((c*cols + r) * 360) / (cols * rows)) + ', 100%, 50%)');

        el.setAlign(c / cols, r / rows)
            .setProportionalSize(1 / cols, 1 /rows)
            .setDifferentialSize(-paddingSize, -paddingSize)

        el.rotation = new Rotation(el);
        el.rotation.setZ(Math.PI*40, {duration: 12e4});


        // els.push(el);
    }
}
