# weex

## 抽取公共样式
```js
const vueFileReg = /weex-loader/
const cssFileReg = /\.css$/

class WebpackPluginExtractCss {
    constructor(options = {}) {
        this.options = options
        this.cssCommonModules = Object.create(null);
    }

    apply(compiler) { 
        // 编译(compilation)创建之后，执行插件
        compiler.plugin('compilation', (compilation) => {
            compilation.plugin('optimize-tree', (chunks, modules, cb) => {
                const t1 = Date.now();
                console.log('extract css start...');   

                // 抽取公共资源
                this.processAllModules(modules);

                // 开始处理资源
                chunks.forEach(chunk => {
                    this.processChunkModules(chunk.modules);
                })

                const t2 = Date.now()
                console.log('extract css finish in '+(t2-t1)+'ms.')

                cb();
            })
        }) 
    }

    processAllModules(modules) {
        const cssCommonModules = this.cssCommonModules;

        // 抽取公共css模块
        modules.forEach(module => {
            if (cssFileReg.test(module.request)) {
                let resource = this.getResource(module.request);

                if (!cssCommonModules[resource]) {
                    cssCommonModules[resource] = module;
                }
            }
        });

        // 处理重复css模块
        modules.forEach(module => {           
            // 替换css模块
            if (vueFileReg.test(module.request)) {
                module.dependencies.forEach(dep => {
                    if (dep.module && cssFileReg.test(dep.module.request)) {
                        let resource = this.getResource(dep.module.request);
                        dep.module = cssCommonModules[resource];
                    }
                })
            }
        });

        // 删除重复css模块
        this.delRepeatModules(modules);
    }

    processChunkModules(modules) {
        const cssCommonModules = this.cssCommonModules;
        let usedModuleReqs = [];

        // 替换vue文件里的公共css模块依赖
        modules.forEach(module => {
            if (vueFileReg.test(module.request)) {
                module.dependencies.forEach(dep => {
                    if (dep.module && cssFileReg.test(dep.module.request)) {
                        let resource = this.getResource(dep.module.request);
                        dep.module = cssCommonModules[resource];
                        usedModuleReqs.push(cssCommonModules[resource].request);
                    }
                })
            }
        });

        // 删除重复css模块
        this.delRepeatModules(modules)

        // 如果chunk里不包含新的依赖，则需要引进来
        usedModuleReqs = Array.from(new Set(usedModuleReqs));
        this.processNewModules(modules, usedModuleReqs);
    }

    getResource(request) {
        let elements = request.replace(/^-?!+/, "").replace(/!!+/g, "!").split("!");
        return elements.pop();
    }

    processNewModules(modules, usedModuleReqs) {
        const cssCommonModules = this.cssCommonModules;
        const moduleReqs = modules.map(mod => mod.request);

        usedModuleReqs.forEach(req => {
            if (!moduleReqs.includes(req)) {
                let resource = this.getResource(req);
                modules.push(cssCommonModules[resource]);
            }
        });
    }

    delRepeatModules(modules) {
        const cssCommonModules = this.cssCommonModules;
        const repeatCssModules = [];

        modules.forEach(module => {
            Object.keys(cssCommonModules).forEach(resource => {
                if (module.request.indexOf(resource) != -1 && 
                    module.request !== cssCommonModules[resource].request) {
                    repeatCssModules.push(module.request);
                }
            });
        });

        repeatCssModules.forEach(req => {
            let removeIndex = modules.findIndex(module => module.request === req);
            if (removeIndex != -1) {
                modules.splice(removeIndex, 1);
            }
        })
    }
}
module.exports = WebpackPluginExtractCss
```