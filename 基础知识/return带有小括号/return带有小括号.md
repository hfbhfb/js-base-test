

## return带有小括号
``` js
      function aa() {
        return (
          (_b = () => {
            return 1
          }),
          _b(),
          (() => {
            return 2
          })(),
          _b()
        )
      }
      console.log(aa()) // 1  因为最后执行了  _b()
```


## 

