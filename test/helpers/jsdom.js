import {JSDOM} from 'jsdom';

const runJsdom = (mountId = 'app') => {
  const dom = new JSDOM(`<!DOCTYPE html><head></head><body><div id="${mountId}"></div></body></html>`);
  const {window} = dom;
  window.Date = global.Date;

  function copyProps(src, target) {
    const props = Object.getOwnPropertyNames(src)
      .filter(prop => typeof target[prop] === 'undefined')
      .map(prop => Object.getOwnPropertyDescriptor(src, prop));
    Object.defineProperties(target, props);
  }
  global.window = window;
  global.document = window.document;
  global.navigator = {
    userAgent: 'node.js',
  };
  copyProps(window, global);
};

export default runJsdom;
