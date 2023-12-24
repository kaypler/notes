# Python 

## Mac 卸载 python

1. 删除第三方安装的3.11 版本：
```shell
sudo rm -rf /Library/Frameworks/Python.framework/Versions/3.11
```   

2. 再删除 directory
```shell
sudo rm -rf "/Application/Python 3.11"
```

3. 查看软链接
```shell
ls -l /usr/local/bin/py*
```

4. 删除软链接
```shell
cd /usr/local/bin/
ls -l /usr/local/bin | grep '../Library/Frameworks/Python.framework/Versions/3.11' | awk '{print $9}' | tr -d @ | xargs rm
```

## Mac 设置 python 环境变量

1. 查看 python 路径
```shell
which python3.11
``` 

2. `~/.zshrc` 文件中添加内容
```shell
alias python=/Users/***/anaconda3/bin/python3
```   

3. 重启终端生效
