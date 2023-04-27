

## Promise 对象在浏览器已经有了


[置顶]1. 项目地址：
https://github.com/ardor-zhang/magic-wheel/tree/main/01-promise-2021
2. Promises/A+ 规范中文翻译地址
https://blog.csdn.net/qq_41800366/article/details/120788569?spm=1001.2014.3001.5501
3. 手写 promise 文章地址：
https://blog.csdn.net/qq_41800366/article/details/120830777?spm=1001.2014.3001.5501
4. Promises/A+ 规范原文地址：
https://promisesaplus.com/ 


``` js

const PENDING = 'pending';
const FULFILLED = 'fulfilled';
const REJECTED = 'rejected';

function resolvePromise(promise, x, resolve, reject) {
  if (promise === x) {
    reject(new TypeError('Chaining cycle detected for promise'));
  } else if (typeof x === 'function' || (typeof x === 'object' && x !== null)) {
    let called = false;
    try {
      const then = x.then;
      if (typeof then === 'function') {
        then.call(x, y => {
          if (called) return;
          called = true;
          resolvePromise(promise, y, resolve, reject);
        }, r => {
          if (called) return;
          called = true;
          reject(r);
        });
      } else {
        resolve(x);
      };
    } catch (error) {
      if (called) return;
      called = true;
      reject(error);
    }
  } else {
    resolve(x);
  }
}; 

class FullPromise {
  state = PENDING;
  value = undefined;
  reason = undefined;
  onFulfilledCallback = [];
  onRejectedCallback = [];

  constructor(executor) {
    const resolve = value => {
      if (this.state === PENDING) {
        this.state = FULFILLED;
        this.value = value;
        this.onFulfilledCallback.forEach(onFulfilled => onFulfilled(value));
      }
    };

    const reject = reason => {
      if (this.state === PENDING) {
        this.state = REJECTED;
        this.reason = reason;
        this.onRejectedCallback.forEach(onRejected => onRejected(reason)); 
      }
    };

    try {
      executor(resolve, reject);
    } catch (error) {
      reject(error); 
    };
  };
  
  then(onFulfilled, onRejected) {
    const promise2 = new FullPromise((resolve, reject) => {
      if (this.state === FULFILLED) {
        if (typeof onFulfilled === 'function') {
          setTimeout(() => {
            try {
              const x = onFulfilled(this.value);
              resolvePromise(promise2, x, resolve, reject);
            } catch (error) {
              reject(error);
            };
          }, 0);
        } else {
          resolve(this.value);
        };
      } else if (this.state === REJECTED) {
        if (typeof onRejected === 'function') {
          setTimeout(() => {
            try {
              const x = onRejected(this.reason);
              resolvePromise(promise2, x, resolve, reject);
            } catch (error) {
              reject(error);
            };
          }, 0);
        } else {
          reject(this.reason);
        };
      } else {
        this.onFulfilledCallback.push(value => setTimeout(() => {
          if (typeof onFulfilled === 'function') {
            try {
              const x = onFulfilled(value);
              resolvePromise(promise2, x, resolve, reject);
            } catch (error) {
              reject(error);
            }
          } else {
            resolve(value);
          };
        }, 0));

        this.onRejectedCallback.push(reason => setTimeout(() => {
          if (typeof onRejected === 'function') {
            try {
              const x = onRejected(reason);
              resolvePromise(promise2, x, resolve, reject);
            } catch (error) {
              reject(error);
            }
          } else {
            reject(reason);
          };
        }, 0));
      }
    });

    return promise2;
  };
};

module.exports = FullPromise;


```

