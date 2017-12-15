# FE-Cookbook

[![GitHub contributors](https://img.shields.io/github/contributors/hijiangtao/FE-Cookbook.svg)]() [![GitHub issues](https://img.shields.io/github/issues/hijiangtao/FE-Cookbook.svg)]() [![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](#contribute) [![license](https://img.shields.io/github/license/hijiangtao/FE-Cookbook.svg)]() [![Travis](https://img.shields.io/travis/hijiangtao/FE-Cookbook/master.svg)]()

这一年里，由于校招（实习 & 应届生招聘）以及在实验室做项目的缘故，一直在做前端开发/可视化研发相关的工作，并不断的为校招做准备，从日常大牛的博客、动态中能零零散散看到不少好的技术文章，同时在整个校招准备期间也看了不少前端书籍，包括《JavaScript 高级程序设计》、《JavaScript 语言精粹》、《HTML5高级程序设计》、《You Don't Know JS》系列、《CSS揭秘》等等，也针对很多方面的问题进行了细致的探索和查漏补缺，比如 CSS3 弹性盒布局、Hybrid App 唤起实现、Web 加载渲染性能、WebAssembly 等等，因此想通过这个项目把个人持续关注的前端相关内容汇总收集，一方面方便自己和其他同学日后查看、另一方面希望与有同样兴趣的同学一起将该项目完善壮大。

本项目持续更新中，如果觉得有用欢迎给项目添加 Star；如果觉得有任何需要改进或者需要完善的地方，欢迎贡献代码提请 PR，针对无冲突的内容我会快速合并。希望为前端圈贡献一些自己的力量。

根据个人理解，本项目分为以下六个部分，见目录

## Outline / 目录

* [JavaScript](#javascript) - JavaScript 相关的知识汇总，包括读书笔记、知识点整理和语言实现细节等；
* [HTML](#html) - HTML 语言规范、读书笔记与新兴 API 介绍；
* [CSS](#css) - CSS 语言规范、读书笔记与专题讲解等；
* [Node.js](#nodejs) - NodeJS 相关技术细节与实现、读书笔记等；
* [Tools & Codes](#tools--codes) - Web 开发前沿技术与工程打包细节等内容整理；
* [QA](#qa) - 校招/社招前端笔试面试题汇总，计划纳入上百道题，正在持续更新中；

----

## JavaScript

* [JavaScript 高级程序设计笔记](./JavaScript.md): 根据《JavaScript 高级程序设计》一书整理的知识点，将 JavaScript 及浏览器等相关内容梳理了一遍。
* [You Don't Know JS 章节要点整理](./YDKJS.md): 《You Don't Know JS》一书共六本，根据每个章节总结的知识点进行罗列，可以快速阅览 JavaScript 不为人知的一些设计细节。

## HTML

* [HTML5高级程序设计读书笔记](./HTML.md): 根据《HTML5高级程序设计》一书整理的有关 HTML5 新兴 API 相关的知识点。

### 关键概念

* [World Wide Web](https://en.wikipedia.org/wiki/World_Wide_Web)
* [渲染性能](https://developers.google.com/web/fundamentals/performance/rendering/)

## CSS

### CSS3

* [CSS3 知识点整理](./CSS3.md)

### 关键概念

* [学习 CSS 布局](http://zh.learnlayout.com/)
* [深入理解 CSS3 弹性盒布局模型](https://www.ibm.com/developerworks/cn/web/1409_chengfu_css3flexbox/)
* [Color](https://developer.mozilla.org/en-US/docs/Web/CSS/color_value) - MDN
* [移动端 1px 细线解决方案总结](http://www.cnblogs.com/lunarorbitx/p/5287309.html)
* [CSS像素、物理像素、逻辑像素、设备像素比、PPI、Viewport](https://github.com/jawil/blog/issues/21)
* [学习使用：before和：after伪元素](http://www.w3cplus.com/css3/learning-to-use-the-before-and-after-pseudo-elements-in-css.html)
* [Android 浏览器文本垂直居中问题](http://imweb.io/topic/5848d0fc9be501ba17b10a94)

## Node.js

* [深入浅出 NodeJs 读书笔记](./Node.md)：完善中

## Tools & Codes

### 前端相关基础技术文章

1. [Understanding JavaScript’s async await](https://ponyfoo.com/articles/understanding-javascript-async-await)
2. [6 Reasons Why JavaScript’s Async/Await Blows Promises Away](https://hackernoon.com/6-reasons-why-javascripts-async-await-blows-promises-away-tutorial-c7ec10518dd9)
3. [An Introduction to Source Maps](http://blog.teamtreehouse.com/introduction-source-maps)
4. [Babel 入门教程](http://www.ruanyifeng.com/blog/2016/01/babel.html)
5. [How to use SVG as a Placeholder, and Other Image Loading Techniques](https://medium.freecodecamp.org/using-svg-as-placeholders-more-image-loading-techniques-bed1b810ab2c)
6. [Understanding Node.js Event-Driven Architecture](https://medium.freecodecamp.org/understanding-node-js-event-driven-architecture-223292fcbc2d)
7. [Comparing JavaScript Templating Engines: Jade, Mustache, Dust and More](https://developer.ibm.com/node/2014/11/11/compare-javascript-templates-jade-mustache-dust/)
8. [JSON Web Tokens vs. Session Cookies In Practice](https://ponyfoo.com/articles/json-web-tokens-vs-session-cookies)
9. [ES6 In Depth: Modules](https://hacks.mozilla.org/2015/08/es6-in-depth-modules/)
10. [Why (and how) to use eslint in your project](https://medium.com/the-node-js-collection/why-and-how-to-use-eslint-in-your-project-742d0bc61ed7)
11. [Speed up Your Node.js App with Native Addons](https://medium.com/the-node-js-collection/speed-up-your-node-js-app-with-native-addons-5e76a06f4a40)

### Web 开发教程与最佳实践

* [HTTP协议入门](http://www.ruanyifeng.com/blog/2016/08/http.html)
* [How to center in CSS](http://howtocenterincss.com/)
* [正则表达式30分钟入门教程](https://deerchao.net/tutorials/regex/regex.htm)
* [在安卓设备上使用 Chrome 远程调试功能](http://wiki.jikexueyuan.com/project/chrome-devtools/remote-debugging-on-android.html)
* [关于通过H5页面唤Native户端的介绍](https://github.com/AlanZhang001/H5CallUpNative)
* [前端性能优化最佳实践](https://csspod.com/frontend-performance-best-practices/)
* [The Cost Of JavaScript](https://medium.com/dev-channel/the-cost-of-javascript-84009f51e99e)

### Web 开发利器

* [The birth and death of JavaScript](https://www.destroyallsoftware.com/talks/the-birth-and-death-of-javascript)
* [cssreference.io](http://cssreference.io/) - A free visual guide to CSS.
* [JavaScript equality table](http://dorey.github.io/JavaScript-Equality-Table/)
* [Color Picker](http://colorizer.org/)
* [Simple Icons](https://simpleicons.org/), SVG icons for popular brands
* [Web Page Test](https://www.webpagetest.org/) - Test a website's performance
* [Web Manifest Validator](https://manifest-validator.appspot.com/) - Test the validity of a Web Manifest

### Web 开发打包与未来技术

* [webpack](http://webpack.github.io/) | [webpack 学习与起步教程](./config/webpack.md) | [webpack 配置文件样例](./config/webpack.config.js)
* [JSLint](http://www.jslint.com/) - The JavaScript Code Quality Tool
* [WebAssembly](http://webassembly.org/) - A new portable, size- and load-time-efficient format suitable for compilation to the web.

### 示例代码

* [Google 官方 PWA 天气预报程序代码](./PWA/) - 根据 Google 官方教程指导实现的天气预报 PWA 程序代码

## QA

* [校招/社招前端笔试面试百题汇总](./Tricks.md)：由于从校招实习到校招提前批，一直在学习前端相关的基础知识并针对具体遇到的细节进行查漏补缺，零零散散发现很多内容值得反复回顾，所以将自己看到过认为还比较经典的题目汇总到这里，供大家参考。

## 计算机生态技术文章

* [Docker 核心技术与实现原理](https://draveness.me/docker)

## Contribute

非常欢迎为该项目增加内容，共同完善前端技术整理。请 Fork 之后提交代码后发起 PR。

## LICENSE

Apache 2.0

## Contact

Joe Jiang, [Email](mailto:hijiangtao@gmail.com)
