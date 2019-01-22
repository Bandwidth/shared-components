'use strict';

if (typeof Promise === 'undefined') {
  // Rejection tracking prevents a common issue where React gets into an
  // inconsistent state due to an error, but it gets swallowed by a Promise,
  // and the user has no idea what causes React's erratic future behavior.
  require('promise/lib/rejection-tracking').enable();
  window.Promise = require('promise/lib/es6-extensions.js');
}

// Object.assign() is commonly used with React.
// It will use the native implementation if it's present and isn't buggy.
Object.assign = require('object-assign');

require('@babel/polyfill');

// ResizeObserver is a polyfill for a tool that subscribes to resize
// events on an element https://wicg.github.io/ResizeObserver/
require('resize-observer');

// IntersectionObserver is a polyfill for a tool that subscribes to
// events when an element intersects a bounding area https://wicg.github.io/IntersectionObserver/
require('intersection-observer');

// performance.now() and performance.timing.navigationStart polyfill
if (!window.performance) {
  window.performance = {};
}

if (!performance.now) {
  performance.now = function() {
    return Date.now() - this.timing.navigationStart;
  };
}

if (!performance.timing) {
  performance.timing = {};
}

if (!performance.timing.navigationStart) {
  performance.timing.navigationStart = Date.now();
}

console.debug('Polyfills loaded');
