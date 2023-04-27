

## 一、this原理

this是JavaScript的一个关键字，函数调用时才会出现；
因为函数是在一定的环境中运行的，调用函数时肯定需要知道是[谁调用的]？就用到了this进行指向；
那么this到底指向的是什么？
this 既不指向函数自身，也不指函数的词法作用域，而是调用函数时的对象！

https://blog.csdn.net/weixin_30980795/article/details/107448842


## 普通函数的调用，this指向的是Window
``` js
var name = '卡卡';
function cat(){
  var name = '有鱼';
  console.log(this.name);//卡卡
  console.log(this);//Window {frames: Window, postMessage: ƒ, blur: ƒ, focus: ƒ, close: ƒ, …}
}
cat();

```


## 一层作用域链时，this指的该对象
``` js

var name = '卡卡';
var cat = {
  name:'有鱼',
  eat:function(){
    console.log(this.name);//有鱼
  }
}
cat.eat();


```

## 多层作用域链时，this指的是距离方法最近的一层对象
``` js
var name = '卡卡';
var cat = {
  name:'有鱼',
  eat1:{
    name:'年年',
    eat2:function(){
      console.log(this.name);//年年
    }
  }
}
cat.eat1.eat2();

```

## apply方法和call方法相当于改变了显式的修改了prototype原型,apply和call调用时，this指向参数中的对象

``` js
var name = '有鱼';
function eat(){
  console.log(this.name);
}
var cat = {
  name:'年年',
}
var dog = {
  name:'高飞',
}

eat.call(cat);// 年年
eat.call(dog);// 高飞
```


## 匿名函数调用，指向的是全局对象

``` js
var name = '卡卡';
var cat = {
  name:'有鱼',
  eat:(function(){
    console.log(this.name);//卡卡
  })()
}
cat.eat;

```

## 如果箭头函数被非箭头函数包含，则this绑定的是最近一层非箭头函数的this，否则this的值则被设置为全局对象

``` js
var name = 'window';
var student = {
    name: '若川',
    doSth: function(){
        // var self = this;
        var arrowDoSth = () => {
            // console.log(self.name);
            console.log(this.name);
        }
        arrowDoSth();
    },
    arrowDoSth2: () => {
        console.log(this.name);
    }
}
student.doSth(); // '若川'
student.arrowDoSth2(); // 'window'


```

## 注意：对于ES6之前，箭头函数的替换版本是这样的
``` js
// es6
function foo(){ 
    return () => {
        console.log( this.a );
    }   
}

var a = 2;

var obj = { 
    a: 3,
    foo: foo 
};

var bar = obj.foo();
bar(); //3
```


