"use strict";
var jsdom_1 = require('jsdom');
var fs = require('fs');
var App = (function () {
    function App() {
        this._logger = console;
    }
    App.prototype.log = function (message) {
        this._logger.log(message);
    };
    App.prototype.findDivTag = function () {
        var htmlContent = fs.readFileSync('names.html', 'utf8');
        var dom = new jsdom_1.JSDOM(htmlContent);
        this._logger.log(dom.window.document.querySelector("#me").textContent);
    };
    return App;
}());
exports.App = App;
;
var main = new App();
main.log('This is your app too.');
main.findDivTag();
