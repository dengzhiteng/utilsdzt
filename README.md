### js-dzt 个人 npm，封装常见的方法

### 对所有的模块进行单位测试 jest

### 对模块进行打包

- rollup-plugin-node-resolve —帮助 Rollup 查找外部模块，然后导入
- rollup-plugin-commonjs —将 CommonJS 模块转换为 ES2015 供 Rollup 处理
- rollup-plugin-babel — 让我们可以使用 es6 新特性来编写代码
- rollup-plugin-terser — 压缩 js 代码，包括 es6 代码压缩
- rollup-plugin-eslint — js 代码检测

## npm 包管理

- npm login 或者 npm adduser // 登录
- npm publish // 发布
- npm unpublish js-dztt@1.0.1 //指定版本号
- npm unpublish --force //强制删除

## 说明

- 先进性单元测试，测试通过之后再进行打包发布

-yarn add jest babel-jest babel-core babel-preset-env regenerator-runtime -D
babel-jest、 babel-core、 regenerator-runtime、babel-preset-env 这几个依赖是为了让我们可以使用 ES6 的语法特性进行单元测试，ES6 提供的 import 来导入模块的方式，Jest 本身是不支持的。
