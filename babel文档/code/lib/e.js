"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
var PENDING = 'pending';
var FULFILLED = 'fulfilled';
var REJECTED = 'rejected';
function resolvePromise(promise, x, resolve, reject) {
  if (promise === x) {
    reject(new TypeError('Chaining cycle detected for promise'));
  } else if (typeof x === 'function' || _typeof(x) === 'object' && x !== null) {
    var called = false;
    try {
      var then = x.then;
      if (typeof then === 'function') {
        then.call(x, function (y) {
          if (called) return;
          called = true;
          resolvePromise(promise, y, resolve, reject);
        }, function (r) {
          if (called) return;
          called = true;
          reject(r);
        });
      } else {
        resolve(x);
      }
      ;
    } catch (error) {
      if (called) return;
      called = true;
      reject(error);
    }
  } else {
    resolve(x);
  }
}
;
var FullPromise = /*#__PURE__*/function () {
  function FullPromise(executor) {
    var _this = this;
    _classCallCheck(this, FullPromise);
    _defineProperty(this, "state", PENDING);
    _defineProperty(this, "value", undefined);
    _defineProperty(this, "reason", undefined);
    _defineProperty(this, "onFulfilledCallback", []);
    _defineProperty(this, "onRejectedCallback", []);
    var resolve = function resolve(value) {
      if (_this.state === PENDING) {
        _this.state = FULFILLED;
        _this.value = value;
        _this.onFulfilledCallback.forEach(function (onFulfilled) {
          return onFulfilled(value);
        });
      }
    };
    var reject = function reject(reason) {
      if (_this.state === PENDING) {
        _this.state = REJECTED;
        _this.reason = reason;
        _this.onRejectedCallback.forEach(function (onRejected) {
          return onRejected(reason);
        });
      }
    };
    try {
      executor(resolve, reject);
    } catch (error) {
      reject(error);
    }
    ;
  }
  _createClass(FullPromise, [{
    key: "then",
    value: function then(onFulfilled, onRejected) {
      var _this2 = this;
      var promise2 = new FullPromise(function (resolve, reject) {
        if (_this2.state === FULFILLED) {
          if (typeof onFulfilled === 'function') {
            setTimeout(function () {
              try {
                var x = onFulfilled(_this2.value);
                resolvePromise(promise2, x, resolve, reject);
              } catch (error) {
                reject(error);
              }
              ;
            }, 0);
          } else {
            resolve(_this2.value);
          }
          ;
        } else if (_this2.state === REJECTED) {
          if (typeof onRejected === 'function') {
            setTimeout(function () {
              try {
                var x = onRejected(_this2.reason);
                resolvePromise(promise2, x, resolve, reject);
              } catch (error) {
                reject(error);
              }
              ;
            }, 0);
          } else {
            reject(_this2.reason);
          }
          ;
        } else {
          _this2.onFulfilledCallback.push(function (value) {
            return setTimeout(function () {
              if (typeof onFulfilled === 'function') {
                try {
                  var x = onFulfilled(value);
                  resolvePromise(promise2, x, resolve, reject);
                } catch (error) {
                  reject(error);
                }
              } else {
                resolve(value);
              }
              ;
            }, 0);
          });
          _this2.onRejectedCallback.push(function (reason) {
            return setTimeout(function () {
              if (typeof onRejected === 'function') {
                try {
                  var x = onRejected(reason);
                  resolvePromise(promise2, x, resolve, reject);
                } catch (error) {
                  reject(error);
                }
              } else {
                reject(reason);
              }
              ;
            }, 0);
          });
        }
      });
      return promise2;
    }
  }]);
  return FullPromise;
}();
;
module.exports = FullPromise;