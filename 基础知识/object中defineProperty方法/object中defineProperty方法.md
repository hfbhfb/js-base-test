


原文链接：https://blog.csdn.net/weixin_46726346/article/details/115913752


## 那我们Object.defineProperty这个方法有什么用呢? 这个方法接收三个参数:
1.属性所在的对象
2.属性的名字
3.一个描述符对象

## 这个描述符对象是个什么东西呢？ 他可以是 数据属性：

1.configurable:表示能否通过delete删除属性从而重新定义属性，能否修改属性的特性，或者能否把属性修改为访问器属性，默认值为false。
2.enumerable：表示能否通过for in循环访问属性，默认值为false
3.writable：表示能否修改属性的值。默认值为false。
4.value：包含这个属性的数据值。默认值为undefined。


## configurable
``` js
var p1 ={
    name:"lisi",
}
Object.defineProperty(p1,"name",{
    configurable : false,
})
console.log(p1); //{ name: 'lisi' }
delete p1.name;
console.log(p1); //{ name: 'lisi' }

```

## writeable
``` js
var p1 ={
    name:"lisi",
}
Object.defineProperty(p1,"age",{
    writable :false,
    value : 15,
})
console.log(p1.age); //15
p1.age = 20;
console.log(p1.age); //15

```

##  通过这个方法给enumerable设置为false，这样对象就不能通过迭代器遍历出age这个属性的值了。
``` js
var p1 ={
    name:"lisi",
}
Object.defineProperty(p1,"age",{
    enumerable:false
})
for(var i in p1){
    console.log(p1[i]);
} // lisi

```

## 1.get：在读取属性时调用的函数，默认值是undefined 2..set：在写入属性的时候调用的函数，默认值是undefined

``` js
var book = {
    _year : 2004,
    edition : 1
}

Object.defineProperty(book,"year",{
    get: function(){
        return this._year
    },
    set: function(newYear){
        if(newYear > 2004){
            this._year = newYear;
            this.edition += newYear - 2004
        }
    }
})

book.year = 2005;
console.log(book.edition); // 2
console.log(book._year); //2005

```


