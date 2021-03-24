# Webpack

## webpack打包原理
1. 识别入口文件，逐级递归识别依赖，构建依赖图谱
2. 将代码转化为AST抽象语法树
3. 在AST阶段中去处理代码
4. 把AST抽象语法树变成浏览器可以识别的代码，然后输出

## webpack热更新原理
webpack-dev-server主要包含了三个部分： 
1. webpack: 负责编译代码 
2. webpack-dev-middleware: 主要负责构建内存文件系统，把webpack的 OutputFileSystem 替换成 InMemoryFileSystem。同时作为Express的中间件拦截请求，从内存文件系统中把结果拿出来。 
3. express：负责搭建请求路由服务。

热更新流程：
1. 启动dev-server，webpack开始构建，在编译期间会向 entry 文件注入热更新代码； 
2. Client 首次打开后，Server 和 Client 基于Socket建立通讯渠道； 
3. 修改文件，Server 端监听文件发送变动，webpack开始编译，直到编译完成会触发"Done"事件； 
4. Server通过socket 发送消息告知 Client； 
5. Client根据Server的消息（hash值和state状态），通过ajax请求获取 Server 的manifest描述文件； 
6. Client对比当前 modules tree ，再次发请求到 Server 端获取新的JS模块； 
7. Client获取到新的JS模块后，会更新modules tree并替换掉现有的模块； 
8. 最后调用 module.hot.accept() 完成热更新；

## webpack模块加载原理
- **同步模块**：ES6 module 在底层实际上被 webpack 转换成了类似于 CommonJS 的语法。[参考](https://zhuanlan.zhihu.com/p/88335687)
- **异步模块**：jsonp的方式。[参考](https://zhuanlan.zhihu.com/p/53044886)

## webpack的缺点
1. 缓慢的服务器启动。当冷启动开发服务器时，基于打包的方式是在提供服务前去急切地抓取和构建你地整个应用。
2. 使用地是node.js去实现。
3. 热更新效率低下。当基于打包器启动时，编辑文件后将重新构建文件本身。显然我们不应该重新构建整个包，
   因为这样更新速度会随着应用体积增长而直线下降。

## webpack4的splitChunks
splitChunks是webpack4推出的一个分包规则，它有一个默认的配置，这也符合webpack4开箱即用的特性，它的默认配置如下：
```js
module.exports = {
  //...
  optimization: {
    splitChunks: {
      chunks: 'async',
      minSize: 30000,
      minChunks: 1,
      maxAsyncRequests: 5,
      maxInitialRequests: 3,
      automaticNameDelimiter: '~',
      name: true,
      cacheGroups: {
        vendors: {
          test: /[\\/]node_modules[\\/]/,
          priority: -10
        },
        default: {
          minChunks: 2,
          priority: -20,
          reuseExistingChunk: true
        }
      }
    }
  }
};
```

### chunks
chunks的含义是拆分模块的范围，它有三个值async、initial和all。
- **async**表示只从异步加载得模块（动态加载import()）里面进行拆分
- **initial**表示只从入口模块进行拆分
- **all**表示以上两者都包括

### cacheGroups
splitChunks就是根据cacheGroups去拆分模块的，包括之前说的chunks属性和之后要介绍的种种属性其实都是对缓存组进行配置的。
splitChunks默认有两个缓存组：vender和default。

另外还需要说明一下，cacheGroups之外设置的约束条件比如说默认配置里面的chunks、minSize、minChunks等等都会作用于cacheGroups，
除了test, priority and reuseExistingChunk，这三个是只能定义在cacheGroup这一层的。cacheGroups也可以将上面的所有属性都重新定义，
就会覆盖外面的默认属性，比如default这个缓存组就设置了minChunks=2，他会覆盖掉默认值1。

priority的含义是权重，如果有一个模块满足了多个缓存组的条件就会去按照权重划分，谁的权重高就优先按照谁的规则处理。

### maxInitialRequests
maxInitialRequests是splitChunks里面比较难以理解的点之一，它表示允许入口并行加载的最大请求数，
之所以有这个配置也是为了对拆分数量进行限制，不至于拆分出太多模块导致请求数量过多而得不偿失。

这里需要注意几点：
- 入口文件本身算一个请求
- 如果入口里面有动态加载得模块这个不算在内
- 通过runtimeChunk拆分出的runtime不算在内
- 只算js文件的请求，css不算在内
- 如果同时又两个模块满足cacheGroup的规则要进行拆分，但是maxInitialRequests的值只能允许再拆分一个模块，那尺寸更大的模块会被拆分出来

### maxAsyncRequests
maxAsyncRequests和maxInitialRequests有相似之处，它俩都是用来限制拆分数量的，maxInitialRequests是用来限制入口的拆分数量
而maxAsyncRequests是用来限制异步模块内部的并行最大请求数的，说白了你可以理解为是每个import()它里面的最大并行请求数量。

这其中要注意以下几点：
- import()文件本身算一个请求
- 并不算js以外的公共资源请求比如css
- 如果同时有两个模块满足cacheGroup的规则要进行拆分，但是maxInitialRequests的值只能允许再拆分一个模块，那尺寸更大的模块会被拆分出来

**splitChunks之其余要点**
- splitChunks.cacheGroup必须同时满足各个条件才能生效，这个之前我理解错误，我以为比如minSize或是minChunks等条件只要满足一条就可以拆分，但是实际上必须同时满足才行
- splitChunks的配置项都是作用于cacheGroup上的，如果将cacheGroup的默认两个分组vendor和default设置为false，则splitChunks就不会起作用
- minChunks、maxAsyncRequests、maxInitialRequests的值必须设置为大于等于1的数
- 当chunk没有名字时，通过splitChunks分出的模块的名字用id替代，当然你也可以通过name属性自定义
- 当父chunk和子chunk同时引入相同的module时，并不会将其分割出来而是删除掉子chunk里面共同的module，保留父chunk的module，这个是因为 optimization.removeAvaliableModules 默认是true
- 当两个cacheGroup.priority相同时，先定义的会先命中
- 除了js，splitChunks也适用于css
 

## webpack中的Sourcemap
Sourcemap 本质上是一个信息文件，里面储存着代码转换前后的对应位置信息。 
Sourcemap 解决了在打包过程中，代码经过压缩，去空格以及 babel 编译转化后，由于代码之间差异性过大，造成无法debug的问题.

webpack中的sourcemap的基本类型包括：
1. **eval**: 将每一个module模块，执行eval，执行后不会生成sourcemap文件，仅仅是在每一个模块后，增加sourceURL来关联模块处理前后的对应关系
2. **soure-map**: 为每一个打包后的模块生成独立的soucemap文件
3. **inline**: 与source-map不同，增加inline属性后，不会生成独立的.map文件，而是将.map文件以dataURL的形式插入
4. **cheap**: cheap属性在打包后同样会为每一个模块生成.map文件，但是与source-map的区别在于cheap生成的.map文件会忽略原始代码中的列信息
5. **module**: 含了loader模块之间的sourcemap

**总结：**
- 在开发环境中我们使用：`cheap-module-eval-source-map`
- 在生产环境中我们使用：`cheap-module-source-map`

`eval-source-map`组合使用是指将.map以DataURL的形式引入到打包好的模块中，类似于inline属性的效果，我们在生产中，使用`eval-source-map`会使打包后的文件太大，
因此在生产环境中不会使用``eval-source-map`。但是因为eval的rebuild速度快，因此我们可以在本地环境中增加eval属性。

 

## 提升webpack打包速度
1. 使用`webpack-bundle-analyzer`对项目进行模块分析生成report，查看report后看看哪些模块体积过大，然后针对性优化；
2. 配置`externals`，防止将某些import的包(package)打包到 bundle 中，而是在运行时(runtime)再去从外部获取这些扩展依赖；
3. 缩小loader的查询范围，例如：rules中loader添加：`include: path.resolve(__dirname, 'src')`； 
4. `thread-loader`可以将非常消耗资源的loaders转存到worker pool中；
5. 使用`cache-loader`启用持久化缓存，使用 package.json 中的 postinstall 清除缓存目录；
6. 使用`alias`可以更快地找到对应文件；
7. 配置`extensions`，可以让webpack少做一点后缀匹配；
8. 生产环境不开启lint，使用pre-commit或者husky在提交前校验；
9. webpack提供的UglifyJS插件采用单线程压缩，速度很慢。所以将此插件替换为webpack-parallel-uglify-plugin插件，此插件可以并行运行UglifyJS插件，可有效减少构建时间；
```js
const ParallelUglifyPlugin = require('webpack-parallel-uglify-plugin')
new ParallelUglifyPlugin({
  cacheDir: '.cache/',
  uglifyJS:{
    output: {
      comments: false
    },
    compress: {
      warnings: false,
      drop_debugger: true,
      drop_console: false
    }
  }
}),
```
6. 使用dll plugin；
```js
//首先在build文件下创建一个js文件,webpack.dll.conf.js，并写入下方代码
const path = require("path")
const webpack = require("webpack")
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const pkg = require('../package')//引入package文件，目的就是找到依赖

module.exports = {
  // 想要打包的模块的数组
  entry: {
    // vendor: ['axios', 'vue-router', 'vue','weixin-js-sdk','element-ui','vuex']
    vendor:Object.keys(pkg.dependencies)//取出所有依赖单独打包
  },
  output: {
    path: path.join(__dirname, '../static/js'), // 打包后文件输出的位置
    filename: '[name].dll.js',//生成的文件名字 默认为vendor.dll.js
    library: '[name]_library'//生成文件的映射关系，与下面的DLLPlugin配置相对应
  },
  plugins: [
    new webpack.DllPlugin({//生成一个json文件 里面是关于dll.js的配置信息
      path: path.join(__dirname, '.', '[name]-manifest.json'),
      name: '[name]_library',//与上面output中的配置对应
      context: __dirname//上下文环境路径，必须填写，为了与DLLReferencePlugin存在于同一上下文中，否则undefined
    }),
    // 压缩打包的文件
    new UglifyJsPlugin({
      uglifyOptions: {
        compress: {
              warnings: false
        }
      },
    }),
  ]
}

//然后在webpack.prod.conf.js和webpack.dev.conf.js中加入当前插件
new webpack.DllReferencePlugin({
  context: __dirname,//与DllPlugin中的context保持一致
  /*这个地址对应webpack.dll.conf.js中生成的那个json文件的路径，这样webpack打包的时候
  会检测当前文件中的映射，不会把已经存在映射的包再次打包进bundle.js */
  manifest: require('./vendor-manifest.json')
}),

//在package.json中新加一条npm命令，执行webpack.dll.conf.js文件
"dll": "webpack --config ./build/webpack.dll.conf.js"
//tips：每次添加新依赖后，一定要运行npm run dll这个命令一次。

//最后在index.html中引入static/js/vendor.dll.js文件
<script src="static/js/vendor.dll.js"></script>
```
