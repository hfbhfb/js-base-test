
## 操作步骤
``` bash
#npm登录要切换到官方源
npm config set registry https://registry.npmjs.org/

npm config get registry

# 查看包信息，看不否运用了新的registry
npm info express

# 实际登录
npm login

# 查看当前登录npm用户:   随着时间的推移，这会随着用户的凭据过期而失效( cat ~/.npmrc )
npm whoami

# 搜索一下自己的
npm search firsttonpm

```




## 实际登录的打印
``` bash
[root@161 ~]# npm login 
npm WARN adduser `adduser` will be split into `login` and `register` in a future version. `adduser` will become an alias of `register`. `login` (currently an alias) will become its own command.
npm notice Log in on https://registry.npmjs.org/
Username: hefabao
Password: 
Email: (this IS public) 602963123@qq.com
npm notice Please check your email for a one-time password (OTP)
Enter one-time password: 71980522
Logged in as hefabao on https://registry.npmjs.org/.
```


