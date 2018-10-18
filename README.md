这个是测试webpack+react的例子
主要用于测试webpack的一些配置流程和属性，以及结合在react工程中如何打包使用
同时，该项目可以用于分析webpack的源码，便于断点跟踪

package.json文件内容说明
```
    //本地开发使用，直接读取webpack.config.js配置文件，支持热更新
    "start": "webpack-dev-server --open --mode development",
    //线上打包发布
    "build": "webpack --mode production --config webpack.prods.js",
    //测试环境打包发布
    "build-dev": "webpack --mode development --config webpack.dev.js",
    //本地调试webpack源码
    "debugger":"node-nightly --inspect-brk ./node_modules/webpack/bin/webpack.js"
```