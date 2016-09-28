require('babel-register')();
let jsdom = require('jsdom').jsdom;
let exposedProperties = ['window', 'navigator', 'document'];

global.document = jsdom('');
global.window = document.defaultView;

Object.keys(document.defaultView).forEach((property) => {
  if (typeof global[property] === 'undefined') {
    exposedProperties.push(property);
    global[property] = document.defaultView[property];
  }
});

function ignore() {
  return null;
}

require.extensions['.css'] = ignore;
require.extensions['.less'] = ignore;
require.extensions['.scss'] = ignore;

global.navigator = {
  userAgent: 'node.js'
};

documentRef = document;
