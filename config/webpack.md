## webpack 起步与安装

### 介绍与起步

webpack 是一个用来构建我们应用程序中的 JavaScript 模块的工具。在按照安装说明安装 webpack 后，我们可以从 CLI 或 API 来开始使用 webpack。

对于单个文件，比如 index.js 来说，我们可以直接按照如下语法书写，然后利用命令 `./node_modules/.bin/webpack app/index.js dist/bundle.js` 来打包我们的代码到输出文件。

```javascript
// index.js
import something from 'somelibrary';

function component() {
    // codes
}
```

对于使用 webpack 打包的代码，需要注意的是如果使用了浏览器还未支持的语法（例如 ES2015+），webpack 会帮助我们将 import/export 替换为ES5兼容的代码，但是除此外其他语法需要一个转译器来替我们实现， 比如 [Babel](https://babeljs.io/)。

但在实际生产中，我们往往会拥有更复杂的配置，这个时候我们可以设置一个配置文件 `webpack.config.js` 来告诉 webpack 按照怎样的规则来打包代码。

```javascript
// webpack.config.js

var path = require('path');

module.exports = {
  entry: './app/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  }
};
```

此文件可以像下面这样被 webpack 执行。需要注意的是如果目录下存在 `webpack.config.js`，那么 webpack 命令默认会按照文件的配置来执行。

```
./node_modules/.bin/webpack --config webpack.config.js
```

生产中环境除了要处理更加复杂的配置，也需要更加方便的 webpack 运行方式，使用 CLI 这种方式运行 webpack 还是不太方便，所以配合 NPM
我们可以在 `package.json` 中调整 scripts，如下所示。

```javascript
// package.json
{
  ...
  "scripts": {
    "build": "webpack"
  },
  ...
}
```

### 安装

webpack 的 npm 标准配置：

```javascript
"scripts": {
    "start": "webpack --config mywebpack.config.js"
}
```

不推荐全局安装 webpack。这会锁定 webpack 到指定版本，并且在使用不同的 webpack 版本的项目中可能会导致构建失败。

https://webpack.js.org/guides/code-splitting-css/

https://doc.webpack-china.org/guides/code-splitting-css/
