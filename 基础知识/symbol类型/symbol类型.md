

## js symbol类型详解以及symbol的三大应用场景
https://blog.csdn.net/darabiuz/article/details/121962153


``` js
      //后面的括号可以给symbol做上标记便于识别
      let name = Symbol('name')
      let say = Symbol('say')
      console.log(name)
      console.log(say)
      let obj = {
        //如果想 使用变量作为对象属性的名称，必须加上中括号，.运算符后面跟着的都是字符串
        [name]: 'lnj',
        [say]: function () {
          console.log('say')
        },
      }
      obj.name = 'it666'
      obj[Symbol('name')] = 'it666'
      console.log(obj)

```


## 注意点
- Symbol是基本数据类型！！！！不要加new哦
- 后面括号可以传入一个字符串，只是一个标记，方便我们阅读，没有任何意义
- 类型转化的时候不可转化为数值


``` js
let name=Symbol('name');
console.log(name+111)
console.log(name+'ccc')
//全部报错

```





## 再来复习一下对象的遍历方法
- for (let xx in obj) :i代表key
- for (let xx of obj)：不是自带的哈
- Object.keys(obj) :返回包含key的数组
- Object.values(obj) :返回包含value的数组
- Object.getOwnPropertyNames() ：返回包含key的数组
上述的所有方法都是遍历不到symbol类型的（注意，是遍历时取不到symbol，并不是说我们访问不到对象的symbol类型）


``` js
      let _password = Symbol('password')
      const obj = {
        name: '小明',
        gender: 'male',
        [_password]: '11038',
      }
      for (let item in obj) {
        console.log(item)
      }
      console.log(Object.keys(obj))
      console.log(Object.values(obj))
      console.log(Object.getOwnPropertyNames(obj))
      console.log(Object.getOwnPropertySymbols(obj))
      console.log(Reflect.ownKeys(obj))
      // 输出11038，所以还是可以直接访问到symbol类型的属性，所以symbol并不能真正实现私有变量的设定，所以一般只用于定义一些非私有的、但又希望只用于内部的方法
      console.log(obj[_password])
      console.log(obj)
```
