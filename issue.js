var sinon = require('sinon');
var jsdom = require('jsdom').jsdom;

global.document = jsdom('<html><body></body></html>');
console.log('global.document.parentWindow', global.document.parentWindow);

global.window = document.parentWindow;

var sinonSandbox = sinon.sandbox.create();
sinonSandbox.stub(global.window, 'confirm', function() { return true; });
