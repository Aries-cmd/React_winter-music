const path = require("path")

const resolve = dir => path.resolve(__dirname, dir)

module.exports = {
  webpack: {
    alias: {  // 配置别名
      "@": resolve("src"),
      "components": resolve("src/components")
    }
  }
}