import resolve from "rollup-plugin-node-resolve";
import commonjs from "rollup-plugin-commonjs";
import babel from "rollup-plugin-babel";

import { terser } from "rollup-plugin-terser";
import clear from "rollup-plugin-clear"; // 清空文件夹插件
import { uglify } from "rollup-plugin-uglify"; // 输出libary代码压缩

export default {
  input: "./index.js",
  output: {
    file: "./dist/bundle.js",
    format: "cjs",
    indent: false,
  },
  plugins: [
    resolve(),
    commonjs(),
    terser(),
    clear({
      targets: ["dist"],
    }),
    uglify(),
    babel({
      exclude: "node_modules/**", // 只编译我们的源代码
      runtimeHelpers: true,
    }),
  ],
  //告诉rollup不要将此dayjs打包，而作为外部依赖，
  external: ["dayjs"],
};
