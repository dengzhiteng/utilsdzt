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

## Git 贡献提交规范

- 参考 [vue](https://github.com/vuejs/vue/blob/dev/.github/COMMIT_CONVENTION.md) 规范 ([Angular](https://github.com/conventional-changelog/conventional-changelog/tree/master/packages/conventional-changelog-angular))

  - `feat` 增加新功能
  - `fix` 修复问题/BUG
  - `style` 代码风格相关无影响运行结果的
  - `perf` 优化/性能提升
  - `refactor` 重构
  - `revert` 撤销修改
  - `test` 测试相关
  - `docs` 文档/注释
  - `chore` 依赖更新/脚手架配置修改等
  - `workflow` 工作流改进
  - `ci` 持续集成
  - `types` 类型定义文件更改
  - `wip` 开发中
