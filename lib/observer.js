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
var emitter = {
  list: new Map(),
  on: on,
  emit: emit,
  remove: remove,
  removeAll: removeAll,
  off: off,
  once: once
};
var singleList = new Map();

function on(key, fn) {
  var _emitter$list$get;

  if (!emitter.list.has(key)) emitter.list.set(key, new Set());
  (_emitter$list$get = emitter.list.get(key)) === null || _emitter$list$get === void 0 ? void 0 : _emitter$list$get.add(fn);
}

function emit(key) {
  var _emitter$list$get2;

  if (!emitter.list.has(key)) return;
  (_emitter$list$get2 = emitter.list.get(key)) === null || _emitter$list$get2 === void 0 ? void 0 : _emitter$list$get2.forEach(function (fn) {
    return fn();
  });
  if (singleList.has(key)) singleRemoveEffect(key);
}

function remove(key) {
  if (!emitter.list.has(key)) return true;
  emitter.list.delete(key);
  return true;
}

function removeAll() {
  return Boolean(emitter.list.clear());
}

function off(key, fn) {
  var _emitter$list$get3, _emitter$list$get4;

  if (!emitter.list.has(key)) return true;
  (_emitter$list$get3 = emitter.list.get(key)) === null || _emitter$list$get3 === void 0 ? void 0 : _emitter$list$get3.delete(fn);
  if (!((_emitter$list$get4 = emitter.list.get(key)) !== null && _emitter$list$get4 !== void 0 && _emitter$list$get4.size)) emitter.list.delete(key);
  return true;
}

function once(key, fn) {
  var _singleList$get;

  on(key, fn);
  if (!singleList.has(key)) singleList.set(key, new Set());
  (_singleList$get = singleList.get(key)) === null || _singleList$get === void 0 ? void 0 : _singleList$get.add(fn);
}

function singleRemoveEffect(key) {
  var _emitter$list$get5, _singleList$get2;

  var fns = singleList.get(key);
  (_emitter$list$get5 = emitter.list.get(key)) === null || _emitter$list$get5 === void 0 ? void 0 : _emitter$list$get5.forEach(function (ret) {
    return fns === null || fns === void 0 ? void 0 : fns.forEach(function (f) {
      var _emitter$list$get6, _emitter$list$get7;

      if (f === ret) (_emitter$list$get6 = emitter.list.get(key)) === null || _emitter$list$get6 === void 0 ? void 0 : _emitter$list$get6.delete(ret);
      if (!((_emitter$list$get7 = emitter.list.get(key)) !== null && _emitter$list$get7 !== void 0 && _emitter$list$get7.size)) emitter.list.delete(key);
    });
  });
  (_singleList$get2 = singleList.get(key)) === null || _singleList$get2 === void 0 ? void 0 : _singleList$get2.clear();
}

var _default = emitter;
exports.default = _default;