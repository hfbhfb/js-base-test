

## gulp在ts中官方介绍 : 这篇快速上手指南将教你如何使用Gulp构建TypeScript，和如何在Gulp管道里添加Browserify， uglify或Watchify。 它还包涵了 Babel的功能，通过使用Babelify。
https://www.tslang.cn/docs/handbook/gulp.html


## Browserify
- 现在，让我们把这个工程由Node.js环境移到浏览器环境里。 因此，我们将把所有模块捆绑成一个JavaScript文件。 所幸，这正是Browserify要做的事情。 更方便的是，它支持Node.js的CommonJS模块，这也正是TypeScript默认生成的类型。 也就是说TypeScript和Node.js的设置不需要改变就可以移植到浏览器里。
- 首先，安装Browserify，tsify和vinyl-source-stream。 tsify是Browserify的一个插件，就像gulp-typescript一样，它能够访问TypeScript编译器。 vinyl-source-stream会将Browserify的输出文件适配成gulp能够解析的格式，它叫做 vinyl。







## Watchify，Babel和Uglify
现在代码已经用Browserify和tsify捆绑在一起了，我们可以使用Browserify插件为构建添加一些特性。
- Watchify启动Gulp并保持运行状态，当你保存文件时自动编译。 帮你进入到编辑-保存-刷新浏览器的循环中。
- Babel是个十分灵活的编译器，将ES2015及以上版本的代码转换成ES5和ES3。 你可以添加大量自定义的TypeScript目前不支持的转换器。
- Uglify帮你压缩代码，将花费更少的时间去下载它们。


## Watchify 操作步骤
``` bash
npm install --save-dev watchify gulp-util
# 1.将browserify实例包裹在watchify的调用里，控制生成的结果。
# 2.调用watchedBrowserify.on("update", bundle);，每次TypeScript文件改变时Browserify会执行bundle函数。
# 3.调用watchedBrowserify.on("log", gutil.log);将日志打印到控制台。

```


## 首先安装Uglify。 因为Uglify是用于混淆你的代码，所以我们还要安装vinyl-buffer和gulp-sourcemaps来支持sourcemaps。


## 首先安装Babelify和ES2015的Babel预置程序。 和Uglify一样，Babelify也会混淆代码，因此我们也需要vinyl-buffer和gulp-sourcemaps。 默认情况下Babelify只会处理扩展名为 .js，.es，.es6和.jsx的文件，因此我们需要添加.ts扩展名到Babelify选项
### !!!出问题了，不处理babel版本问题！！！专注其它内容的学习
https://blog.51cto.com/u_15328720/3428816

## 碰到的问题
``` sh
#1. 解决 Gulp AssertionError [ERR_ASSERTION]: Task function must be specified 错误
- https://blog.csdn.net/qq_26545503/article/details/123129566


#2. gulp项目中ReferenceError: primordials is not defined报错解决方法 (为什么每次都要重新来过？)
- https://blog.csdn.net/qq_22713201/article/details/122329418

```


