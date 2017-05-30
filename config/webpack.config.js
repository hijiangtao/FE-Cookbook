const { resolve } = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const webpack = require("webpack")

module.exports = (options = {}) => {
  return {
    /*
    配置页面入口js文件
    这里entry我们改用对象来定义
    属性名在下面的output.filename中使用, 值为文件路径
    */
    entry: {
      index: './src/app',
      vendor: './src/vendor'
    },

    // 配置打包输出相关
    output: {
      // 打包输出目录
      path: resolve(__dirname, 'dist'),

      /*
      entry字段配置的入口js的打包输出文件名
      [name]作为占位符, 在输出时会被替换为entry里定义的属性名, 比如这里会被替换为"index"
      [chunkhash]是打包后输出文件的hash值的占位符, 把?[chunkhash]跟在文件名后面可以防止浏览器使用缓存的过期内容,
      这里, webpack会生成以下代码插入到index.html中:
      <script type="text/javascript" src="/assets/index.js?d835352892e6aac768bf"></script>
      这里/assets/目录前缀是output.publicPath配置的

      options.dev是命令行传入的参数. 这里是由于使用webpack-dev-server启动开发环境时, 是没有[chunkhash]的, 用了会报错
      因此我们不得已在使用webpack-dev-server启动项目时, 命令行跟上--env.dev参数, 当有该参数时, 不在后面跟[chunkhash]
      */
      filename: options.dev ? '[name].js' : '[name].js?[chunkhash]',
    },

    module: {
      /*
      配置各种类型文件的加载器, 称之为loader
      webpack当遇到import ... 时, 会调用这里配置的loader对引用的文件进行编译
      */
      rules: [{
          /*
          使用babel编译ES6/ES7/ES8为ES5代码
          使用正则表达式匹配后缀名为.js的文件
          */
          test: /\.js$/,

          // 排除node_modules目录下的文件, npm安装的包不需要编译
          exclude: /node_modules/,

          /*
          use指定该文件的loader, 值可以是字符串或者数组.
          这里先使用eslint-loader处理, 返回的结果交给babel-loader处理. loader的处理顺序是从最后一个到第一个.
          eslint-loader用来检查代码, 如果有错误, 编译的时候会报错.
          babel-loader用来编译js文件.
          */
          use: ['babel-loader', 'eslint-loader']
        },

        {
          // 匹配.html文件
          test: /\.html$/,
          /*
          使用html-loader, 将html内容存为js字符串, 比如当遇到
          import htmlString from './template.html'
          template.html的文件内容会被转成一个js字符串, 合并到js文件里.
          */
          use: 'html-loader'
        },

        {
          // 匹配.css文件
          test: /\.css$/,

          /*
          先使用css-loader处理, 返回的结果交给style-loader处理.
          css-loader将css内容存为js字符串, 并且会把background, @font-face等引用的图片,
          字体文件交给指定的loader打包, 类似上面的html-loader, 用什么loader同样在loaders对象中定义, 等会下面就会看到.
          */
          use: ['style-loader', 'css-loader']
        },

        {
          /*
          匹配各种格式的图片和字体文件
          上面html-loader会把html中<img>标签的图片解析出来, 文件名匹配到这里的test的正则表达式,
          css-loader引用的图片和字体同样会匹配到这里的test条件
          */
          test: /\.(png|jpg|jpeg|gif|eot|ttf|woff|woff2|svg|svgz)(\?.+)?$/,

          /*
          使用url-loader, 它接受一个limit参数, 单位为字节(byte)

          当文件体积小于limit时, url-loader把文件转为Data URI的格式内联到引用的地方
          当文件大于limit时, url-loader会调用file-loader, 把文件储存到输出目录, 并把引用的文件路径改写成输出后的路径

          比如 views/foo/index.html中
          <img src="smallpic.png">
          会被编译成
          <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAA...">

          而
          <img src="largepic.png">
          会被编译成
          <img src="/f78661bef717cf2cc2c2e5158f196384.png">
          */
          use: [{
            loader: 'url-loader',
            options: {
              limit: 10000
            }
          }]
        }
      ]
    },

    /*
    配置webpack插件
    plugin和loader的区别是, loader是在import时根据不同的文件名, 匹配不同的loader对这个文件做处理,
    而plugin, 关注的不是文件的格式, 而是在编译的各个阶段, 会触发不同的事件, 让你可以干预每个编译阶段.
    */
    plugins: [
      /*
      html-webpack-plugin用来打包入口html文件
      entry配置的入口是js文件, webpack以js文件为入口, 遇到import, 用配置的loader加载引入文件
      但作为浏览器打开的入口html, 是引用入口js的文件, 它在整个编译过程的外面,
      所以, 我们需要html-webpack-plugin来打包作为入口的html文件
      */
      new HtmlWebpackPlugin({
        /*
        template参数指定入口html文件路径, 插件会把这个文件交给webpack去编译,
        webpack按照正常流程, 找到loaders中test条件匹配的loader来编译, 那么这里html-loader就是匹配的loader
        html-loader编译后产生的字符串, 会由html-webpack-plugin储存为html文件到输出目录, 默认文件名为index.html
        可以通过filename参数指定输出的文件名
        html-webpack-plugin也可以不指定template参数, 它会使用默认的html模板.
        */
        template: './index.html'
      }),
      /*
      使用CommonsChunkPlugin插件来处理重复代码
      因为vendor.js和index.js都引用了spa-history, 如果不处理的话, 两个文件里都会有spa-history包的代码,
      我们用CommonsChunkPlugin插件来使共同引用的文件只打包进vendor.js
      */
      new webpack.optimize.CommonsChunkPlugin({
        /*
        names: 将entry文件中引用的相同文件打包进指定的文件, 可以是新建文件, 也可以是entry中已存在的文件
        这里我们指定打包进vendor.js

        但这样还不够, 还记得那个chunkFilename参数吗? 这个参数指定了chunk的打包输出的名字,
        我们设置为 [id].js?[chunkhash] 的格式. 那么打包时这个文件名存在哪里的呢?
        它就存在引用它的文件中. 这就意味着被引用的文件发生改变, 会导致引用的它文件也发生改变.

        然后CommonsChunkPlugin有个附加效果, 会把所有chunk的文件名记录到names指定的文件中.
        那么这时当我们修改页面foo或者bar时, vendor.js也会跟着改变, 而index.js不会变.
        那么怎么处理这些chunk, 使得修改页面代码而不会导致entry文件改变呢?

        这里我们用了一点小技巧. names参数可以是一个数组, 意思相当于调用多次CommonsChunkPlugin,
        比如:

        plugins: [
          new webpack.optimize.CommonsChunkPlugin({
            names: ['vendor', 'manifest']
          })
        ]

        相当于

        plugins: [
          new webpack.optimize.CommonsChunkPlugin({
            names: 'vendor'
          }),

          new webpack.optimize.CommonsChunkPlugin({
            names: 'manifest'
          })
        ]

        首先把重复引用的库打包进vendor.js, 这时候我们的代码里已经没有重复引用了, chunk文件名存在vendor.js中,
        然后我们在执行一次CommonsChunkPlugin, 把所有chunk的文件名打包到manifest.js中.
        这样我们就实现了chunk文件名和代码的分离. 这样修改一个js文件不会导致其他js文件在打包时发生改变, 只有manifest.js会改变.
        */
        names: ['vendor', 'manifest']
      })
    ],

    /*
    配置开发时用的服务器, 让你可以用 http://127.0.0.1:8080/ 这样的url打开页面来调试
    并且带有热更新的功能, 打代码时保存一下文件, 浏览器会自动刷新. 比nginx方便很多
    如果是修改css, 甚至不需要刷新页面, 直接生效. 这让像弹框这种需要点击交互后才会出来的东西调试起来方便很多.
    */
    devServer: {
      // 配置监听端口, 因为8080很常用, 为了避免和其他程序冲突, 我们配个其他的端口号
      port: 8100,

      /*
      historyApiFallback用来配置页面的重定向

      SPA的入口是一个统一的html文件, 比如
      http://localhost:8010/foo
      我们要返回给它
      http://localhost:8010/index.html
      这个文件

      配置为true, 当访问的文件不存在时, 返回根目录下的index.html文件

      index 值指定index.html文件的url路径
      */
      historyApiFallback: {
        index: '/src/'
      }
    },

    // 性能提示
    performance: {
      hints: options.dev ? false : 'warning'
    }
  }
}
