
## npm淘宝镜像设置 国内代理
https://www.cnblogs.com/liuyangjava/p/16090661.html


``` bash
#单次使用
npm install --registry=https://registry.npm.taobao.org

#永久使用
npm config set registry https://registry.npm.taobao.org
npm config get registry

# 查看包信息，看不否运用了新的registry
npm info express

```
