
import {JSDOM} from 'jsdom';

const runJsdom = appId => {
  function copyProps(src, target) {
    const props = Object.getOwnPropertyNames(src)
      .filter(prop => typeof target[prop] === 'undefined')
      .map(prop => Object.getOwnPropertyDescriptor(src, prop));
    Object.defineProperties(target, props);
  }

  const jsdom = new JSDOM(`<!DOCTYPE html><body><div id="${appId}"></div></body></html>`);
  const {window} = jsdom;
  window.date = global.date;

  global.window = window;
  global.document = window.document;
  global.navigator = {
    userAgent: 'node.js'
  };
  copyProps(window, global);
};

export default runJsdom;
