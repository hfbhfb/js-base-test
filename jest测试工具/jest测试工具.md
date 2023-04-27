

## jest示例使用方法 测试js代码
本地目录： /Users/hfb/projects/js/vue-advanced-workshop
git链接地址：origin  git@github.com:hfbhfb/vue-advanced-workshop.git (fetch)
视频讲解：Vue.JS作者尤雨溪亲自讲解VUE源码和高级特 (  https://m.bilibili.com/video/BV1Nb411K7Fn?buvid=XUCE62DCE4D55BD9DEB72A5C43A6319922948&is_story_h5=false&mid=a68Q4GmC5KfIS4LQzJPSAA%3D%3D&p=1&plat_id=344&share_from=ugc&share_medium=android&share_plat=android&share_session_id=9e6ee0aa-256f-433a-ac4e-70175bc7014f&share_source=WEIXIN&share_tag=s_i&timestamp=1674707991&unique_k=0xGJa4t&up_id=346441475  )


``` bash
npm test -- -t 1.1  #自己会找到文件来，然后 尤雨溪 自己又设计了一层，让调用语法更高级和通用


```


## 程序员需要好的品味

``` js
jest.setTimeout(1000)

const fs = require('fs')
const path = require('path')
const { JSDOM } = require('jsdom')

function getFilename(file) {
  const dir = path.dirname(file)
  const base = path.basename(file)
  console.log(dir)
  console.log(dir)
  const files = fs.readdirSync(path.resolve(dir, '../'))
  const id = base.match(/^\d+\.\d+/)[0]
  return files.filter((f) => f.startsWith(id) && f.endsWith('.html'))[0]
}

exports.createTestCase = (file, fn, extra) => {
  const fileToTest = getFilename(file)
  console.log(fileToTest.replace(/\.html$/, ''))
  it(fileToTest.replace(/\.html$/, ''), (done) => {
    JSDOM.fromFile(path.resolve(file, `../../${fileToTest}`), {
      resources: 'usable',
      runScripts: 'dangerously',
    }).then(({ window }) => {
      // test helper
      window.$click = function (target) {
        var evt = window.document.createEvent('HTMLEvents')
        evt.initEvent('click', false, true)
        window.document.querySelector(target).dispatchEvent(evt)
      }

      if (extra) {
        extra(window)
      }

      window.addEventListener('load', () => {
        const log = (window.console.log = jest.fn(() => {}))
        if (window.Vue) {
          window.Vue.config.productionTip = false
        }
        fn(window, log.mock.calls, done)
      })
    })
  })
}

```
