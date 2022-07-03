"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
exports.emit = emit;
exports.off = off;
exports.on = on;
exports.once = once;
exports.remove = remove;
exports.removeAll = removeAll;
var observer = {
  list: {},
  on: on,
  emit: emit,
  remove: remove,
  removeAll: removeAll,
  off: off,
  once: once
};

function on(key, fn) {
  if (!observer.list[key]) observer.list[key] = [];
  observer.list[key].push(fn);
}

function emit(key) {
  var useKey = Object.keys(observer.list).find(function (k) {
    return k === key;
  });
  if (!useKey) return;
  observer.list[key].forEach(function (fn) {
    return fn();
  });
}

function remove(key) {
  if (!isKeyExist(key)) return true;
  delete observer.list[key];
  return true;
}

function removeAll() {
  observer.list = {};
  return Boolean(Object.keys(observer.list).length);
}

function off(key, fn) {
  if (!isKeyExist(key)) return true;
  var index = observer.list[key].findIndex(function (f) {
    return f === fn;
  });
  observer.list[key].splice(index, 1);
  if (!observer.list[key].length) delete observer.list[key];
  return true;
}

function once(key, fn) {
  on(key, function () {
    fn();
    off(key, fn);
  });
}

function isKeyExist(key) {
  return Object.keys(observer.list).includes(key);
}

var _default = observer;
exports.default = _default;