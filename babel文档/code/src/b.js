// 通过function后面添加星号*来定义生成器函数
function* myGenerator() {
  yield "first";
  yield "second";
  yield "third";
}

let gen = myGenerator();
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());

// { value: 'first', done: false }
// { value: 'second', done: false }
// { value: 'third', done: false }
// { value: undefined, done: true }
// { value: undefined, done: true }
