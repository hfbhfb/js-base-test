

## js原型链的理解
https://blog.csdn.net/weixin_42693104/article/details/117672075


## 当读取实例的属性时，如果找不到，就会查找与对象关联的原型中的属性，如果还查不到，就去找原型的原型，一直找到最顶层为止。
``` js
function Person() {
}
Person.prototype.name = 'Kevin';

var person = new Person();
person.name = 'Daisy';
console.log(person.name) // Daisy
console.log(person)
delete person.name;
console.log(person.name) // Kevin
console.log(person)
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

