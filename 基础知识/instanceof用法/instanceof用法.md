
## JS之instanceof详解
https://blog.csdn.net/weixin_40013817/article/details/103182967

instanceof
用于检测构造函数的 prototype 属性是否出现在某个实例对象的原型链上。

语法：object instanceof constructor
object：某个实例对象
constructor：某个构造函数


``` js
// 定义构造函数
function C () {}
function D () {}
// 实例化一个 o 对象
var o = new C()
// true，true --> C.prototype 在 o 的原型链上
console.log(o instanceof C, o.__proto__ === C.prototype, '此时 o 的 __proto__：', o.__proto__, '此时 C 的 prototype：', C.prototype)
// false，false --> D.prototype 不在 o 的原型链上
console.log(o instanceof D, o.__proto__ === D.prototype)
// true true --> Object.prototype 在 o 的原型链上
console.log(o instanceof Object, o.__proto__.__proto__ === Object.prototype)
// 这时我们修改构造函数 C 的原型为一个空对象
C.prototype = {}
// 实例化一个 o2 对象
var o2 = new C()
// true --> C.prototype 在 o2 的原型链上
console.log(o2 instanceof C)
// false，C.prototype 指向了一个空对象,这个空对象不在 o 的原型链上.
console.log(o instanceof C, '此时 o 的 __proto__：', o.__proto__, '此时 C 的 prototype：', C.prototype)
console.log('此时 D 的 prototype：', D.prototype);
// 继承
D.prototype = new C()
console.log('此时 D 的 prototype：', D.prototype);
var o3 = new D()
// true, true --> 因为 o3 是 构造函数 D new 出来的实例对象，所以 D.prototype 一定在 o3 的原型链上
console.log(o3 instanceof D, o3.__proto__ === D.prototype)
// true --> 因为 C.prototype 现在在 o3 的原型链上
console.log(o3 instanceof C)
// true,true --> 上面的结果为什么为 true 呢，看如下代码，D.prototype 是 构造函数 C new 出来的实例对象，所以 C.prototype 一定在 D.prototype 的原型链上
console.log(o3.__proto__ === D.prototype, D.prototype.__proto__ === C.prototype);
// true 相当于如下代码
console.log(o3.__proto__.__proto__ === C.prototype);

```

## 手动实现一下instanceof的功能

``` js

function copyInstanceof (source, target) {
    // 基本数据类型以及 null 直接返回 false
    if (!['function', 'object'].includes(typeof source) || source === null) return false
    // getProtypeOf 是 Object 对象自带的一个方法，能够拿到参数的原型对象
    let proto = Object.getPrototypeOf(source)
    while (true) {
        // 查找到尽头，还没找到
        if (proto == null) return false
        // 找到相同的原型对象
        if (proto == target.prototype) return true
        proto = Object.getPrototypeOf(proto)
    }
}
console.log(copyInstanceof("111", String)); // false
console.log(copyInstanceof(new String("111"), String)); // true
console.log(copyInstanceof(Date, Function)); // true
console.log(copyInstanceof(null, Object)); // false


```


