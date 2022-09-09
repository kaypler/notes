# 常用工程配置

## .editorconfig
```
# http://editorconfig.org
root = true

[*]
#缩进风格：空格
indent_style = space
#缩进大小2
indent_size = 2
#换行符lf
end_of_line = lf
#字符集utf-8
charset = utf-8
#是否删除行尾的空格
trim_trailing_whitespace = true
#是否在文件的最后插入一个空行
insert_final_newline = true

[*.md]
trim_trailing_whitespace = false

[Makefile]
indent_style = tab
```

## webpack
```bash
yarn add -D webpack webpack-cli webpack-dev-server html-webpack-plugin
```

## babel
```bash
yarn add -D yarn add -D @babel/core @babel/plugin-transform-runtime @babel/plugin-transform-typescript @babel/preset-env @babel/preset-react babel-loader
```
