# Node 与构建

#### 1. 简述同步和异步之间的区别？

**答**：同步是阻塞模式，异步是非阻塞模式。 同步就是指一个进程在执行某个请求的时候，若该请求需要一段时间才能返回信息，那么这个进程将会一直等待下去，直到收到返回信息才继续执行下去； 异步是指进程不需要一直等下去，而是继续执行下面的操作，不管其他进程的状态。当有消息返回时系统会通知进程进行处理，这样可以提高执行的效率

#### 2. 在每个 package.json 的 dependency 中都会有很多软件名以及随之跟上的版本号，例如 `"d3": "^3.9.0"` 或者 `"d3": "~3.9.0"`，请问 "^" 和 "~" 的含义分别是什么？

**答**：根据 ["npm install --save" No Longer Using Tildes](http://fredkschott.com/post/2014/02/npm-no-longer-defaults-to-tildes/) 一文可知，形如波浪号的编号（例如：~1.2.3）会匹配对应软件所有的 1.2.x 版本，并最终使用最新的符合要求的版本；相比之下倒 V 型编号（例如：^1.2.3）有更松弛的规则，所有 1.x.x 版本均在匹配列表中，但匹配过程会在 2.0.0 停止并返回最新的符合要求的版本。

#### 3. 介绍下控制反转和依赖注入

1. 控制反转是一种在软件工程中解耦合的思想，调用类只依赖接口，而不依赖具体的实现类，减少了耦合。控制权交给了容器，在运行的时候才由容器决定将具体的实现动态的“注入”到调用类的对象中。
2. 依赖注入是一种设计模式，可以作为控制反转的一种实现方式。依赖注入就是将实例变量传入到一个对象中去。

#### 4. 简单介绍下洋葱模型与实现

中间件（可以理解为一个类或者函数模块）的执行方式就需要依据洋葱模型，洋葱的表皮我们可以思考为中间件：

1. 从外向内的过程是一个关键词 next()；
2. 从内向外则是每个中间件执行完毕后，进入原来的上一层中间件，一直到最外一层；

```js
function compose(middleware) {
  // 返回了一个函数,接受context和next参数,koa在调用koa-compose时只传入context,所以此处next即为undefined;
  return function(context, next) {
    // last called middleware #
    //  初始化index
    let index = -1;
    //  从第一个中间件开始执行～
    return dispatch(0);
    //  执行函数
    function dispatch(i) {
      //  在一个中间件执行两次next函数时,抛出异常.  
      if (i <= index) return Promise.reject(new Error('next() called multiple times'));
      //  设置index,作用是判断在同一个中间件中是否调用多次next函数.
      index = i;
      //  当前中间件函数
      let fn = middleware[i];
      //  跑完所有中间件时,fn = next ,即fn = undefined,可以理解为终止条件;
      if (i === middleware.length) fn = next;
      //  返回一个空值的promise对象.  
      if (!fn) return Promise.resolve();
      try {
        //  返回一个定值的promise对象.值为下一个中间件的返回值。
        //  这里是最核心的逻辑,递归调用下一个中间件,并将返回值返回给上一个中间件。 
        return Promise.resolve(fn(context, dispatch.bind(null, i + 1)));
      } catch (err) {
        return Promise.reject(err);
      }
    }
  };
}
```

#### 5. webpack 和 rollup 的区别

Webpack 的优势

* 代码分块（Code-splitting）
* 静态资源（Static assets）
* 模块热更新（Hot module replacement）
* 插件和生态圈（Plugins and ecosystem）

Rollup 的优势

* 代码优化（Tree shaking / live code inclusion / dead code elimination）
* ES 模块规范的原生支持和丰富的模块规范支持（ESNext native support and more）
* 简洁的 API （Simple API）

#### 6. 简单介绍下 webpack 的几个基础概念

* Entry：入口，webpack 执行构建的第一步将从 Entry 开始，可抽象成输入。
* Module：模块，在 webpack 里一切皆模块，一个模块对应着一个文件。webpack 会从配置的 Entry 开始递归找出所有依赖的模块。
* Chunk：代码块，一个 Chunk 由多个模块组合而成，用于代码合并与分割。
* Loader：模块转换器，用于把模块原内容按照需求转换成新内容。
* Plugin：扩展插件，在 webpack 构建流程中的特定时机注入扩展逻辑来改变构建结果或做你想要的事情。
* Output：输出结果，在 webpack 经过一系列处理并得出最终想要的代码后输出结果。

#### 7. 如果开发一个 webpack 插件

https://hijiangtao.github.io/2019/12/01/Introduction-of-webpack-plugin/

## 浏览器

#### 1. 如何识别网页是否正在iframe中加载或直接进入浏览器窗口？

**答**：由于same origin policy，浏览器可以阻止访问window.top。 IE也发生错误。以下是工作代码：

```js
function inIframe () {
    try {
        return window.self !== window.top;
    } catch (e) {
        return true;
    }
}
```

top 和 self 都是 window 对象(连同 parent )，所以能看到你的窗口是否是顶窗。
