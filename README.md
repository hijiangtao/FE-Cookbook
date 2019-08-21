# FE-Cookbook

[![GitHub contributors](https://img.shields.io/github/contributors/hijiangtao/FE-Cookbook.svg)]() [![GitHub issues](https://img.shields.io/github/issues/hijiangtao/FE-Cookbook.svg)]() [![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](#contribute) [![license](https://img.shields.io/github/license/hijiangtao/FE-Cookbook.svg)]() [![Travis](https://img.shields.io/travis/hijiangtao/FE-Cookbook/master.svg)]()

在从事前端开发的时光中，从日常大牛的博客、动态中能零零散散看到不少好的技术文章，同时也看了不少前端书籍，包括《JavaScript 高级程序设计》、《JavaScript 语言精粹》、《HTML5高级程序设计》、《You Don't Know JS》系列、《CSS揭秘》等等，也针对很多方面的问题进行了细致的探索和查漏补缺，比如 CSS3 弹性盒布局、Hybrid App 唤起实现、Web 加载渲染性能、WebAssembly 等等，因此想通过这个项目把个人持续关注的前端相关内容汇总收集，一方面方便自己和其他同学日后查看、另一方面希望与有同样兴趣的同学一起将该项目完善壮大。

本项目持续更新中，如果觉得有用欢迎给项目添加 Star；如果觉得有任何需要改进或者需要完善的地方，欢迎贡献代码提请 PR，针对无冲突的内容我会快速合并。希望为前端圈贡献一些自己的力量。

根据个人理解，本项目分为以下六个部分，见目录

## Outline / 目录

* [JavaScript](#javascript) - JavaScript 相关的知识汇总，包括读书笔记、知识点整理和语言实现细节等；
* [HTML](#html) - HTML 语言规范、读书笔记与新兴 API 介绍；
* [CSS](#css) - CSS 语言规范、读书笔记与专题讲解等；
* [Node.js](#nodejs) - NodeJS 相关技术细节与实现、读书笔记等；
* [Tools & Codes](#tools--codes) - Web 开发前沿技术与工程打包细节等内容整理；
* [QA](#qa) - 校招/社招前端笔试面试题汇总，计划纳入上百道题，正在持续更新中；
* [LeetCodeOJ](https://github.com/hijiangtao/LeetCodeOJ) - 用 JavaScript 刷算法题的一个项目集锦；

----

## JavaScript

* [JavaScript 高级程序设计笔记](./JavaScript.md): 根据《JavaScript 高级程序设计》一书整理的知识点，将 JavaScript 及浏览器等相关内容梳理了一遍。
* [You Don't Know JS 章节要点整理](./YDKJS.md): 《You Don't Know JS》一书共六本，根据每个章节总结的知识点进行罗列，可以快速阅览 JavaScript 不为人知的一些设计细节，中文书籍见 [GitBook](https://hijiangtao.gitbook.io/ydkjs/)。

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
* [深入理解 Node.js：核心思想与源码分析](https://yjhjstz.gitbooks.io/deep-into-node/content/)

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
12. [Ten Things A Serious JavaScript Developer Should Learn](https://benmccormick.org/2017/07/19/ten-things-javascript/)
13. [Await and Async Explained with Diagrams and Examples](http://nikgrozev.com/2017/10/01/async-await/)
14. [But really, what is a JavaScript test?](https://blog.kentcdodds.com/but-really-what-is-a-javascript-test-46fe5f3fad77)
15. [What the Fu*k JavaScript: A list of funny and tricky JavaScript examples](https://github.com/denysdovhan/wtfjs?utm_source=mybridge&utm_medium=email&utm_campaign=read_more)
16. [Modern JavaScript Explained For Dinosaurs](https://medium.com/@peterxjang/modern-javascript-explained-for-dinosaurs-f695e9747b70?utm_source=mybridge&utm_medium=email&utm_campaign=read_more)
17. [Modern JavaScript for Ancient Web Developers](https://trackchanges.postlight.com/modern-javascript-for-ancient-web-developers-58e7cae050f9?utm_source=mybridge&utm_medium=email&utm_campaign=read_more)
18. [The Basics of DOM Manipulation in Vanilla JavaScript (No jQuery) — SitePoint](https://www.sitepoint.com/dom-manipulation-vanilla-javascript-no-jquery?utm_source=mybridge&utm_medium=email&utm_campaign=read_more)
19. [The Cost Of JavaScript - Addy Osmani](https://medium.com/dev-channel/the-cost-of-javascript-84009f51e99e?utm_source=mybridge&utm_medium=email&utm_campaign=read_more)
20. [JavaScript Start-up Performance - Addy Osmani](https://medium.com/@addyosmani/javascript-start-up-performance-69200f43b201?utm_source=mybridge&utm_medium=email&utm_campaign=read_more)
21. [How JavaScript works: memory management + how to handle 4 common memory leaks](https://blog.sessionstack.com/how-javascript-works-memory-management-how-to-handle-4-common-memory-leaks-3f28b94cfbec?utm_source=mybridge&utm_medium=email&utm_campaign=read_more)
22. [How JavaScript works: Event loop and the rise of Async programming + 5 ways to better coding with async/await](https://blog.sessionstack.com/how-javascript-works-event-loop-and-the-rise-of-async-programming-5-ways-to-better-coding-with-2f077c4438b5?utm_source=mybridge&utm_medium=email&utm_campaign=read_more)
23. [How JavaScript works: inside the V8 engine + 5 tips on how to write optimized code](https://blog.sessionstack.com/how-javascript-works-inside-the-v8-engine-5-tips-on-how-to-write-optimized-code-ac089e62b12e?utm_source=mybridge&utm_medium=email&utm_campaign=read_more)
24. [Understanding V8’s Bytecode](https://medium.com/dailyjs/understanding-v8s-bytecode-317d46c94775?utm_source=mybridge&utm_medium=email&utm_campaign=read_more)
25. [How JavaScript works: an overview of the engine, the runtime, and the call stack](https://blog.sessionstack.com/how-does-javascript-actually-work-part-1-b0bacc073cf?utm_source=mybridge&utm_medium=email&utm_campaign=read_more)
26. [Build a state management system with vanilla JavaScript](https://css-tricks.com/build-a-state-management-system-with-vanilla-javascript/)
27. [Inside look at modern web browser (part 2)](https://developers.google.com/web/updates/2018/09/inside-browser-part2)
28. \[Paper\] [Measuring the User Experience on a Large Scale: User-Centered Metrics for Web Applications](./assets/pdf/36299.pdf)

### Web 开发教程与最佳实践

* [HTTP协议入门](http://www.ruanyifeng.com/blog/2016/08/http.html)
* [How to center in CSS](http://howtocenterincss.com/)
* [正则表达式30分钟入门教程](https://deerchao.net/tutorials/regex/regex.htm)
* [在安卓设备上使用 Chrome 远程调试功能](http://wiki.jikexueyuan.com/project/chrome-devtools/remote-debugging-on-android.html)
* [关于通过H5页面唤Native户端的介绍](https://github.com/AlanZhang001/H5CallUpNative)
* [前端性能优化最佳实践](https://csspod.com/frontend-performance-best-practices/)
* [The Cost Of JavaScript](https://medium.com/dev-channel/the-cost-of-javascript-84009f51e99e)
* [SSL/TLS协议运行机制的概述](http://www.ruanyifeng.com/blog/2014/02/ssl_tls.html) | [图解SSL/TLS协议](http://www.ruanyifeng.com/blog/2014/09/illustration-ssl.html)
* The 12-Factor App - [简体中文](https://12factor.net/zh_cn/) | [原版](https://12factor.net/)
* [JavaScript 运行机制详解：再谈Event Loop](http://www.ruanyifeng.com/blog/2014/10/event-loop.html)
* [web worker详解](http://xgfe.github.io/2017/05/03/LexHuang/web-worker/)
* [A simple interactive ES6 Feature list](https://codetower.github.io/es6-features?utm_source=mybridge&utm_medium=email&utm_campaign=read_more)
* [Airbnb Javascript Styleguide](https://github.com/airbnb/javascript?utm_source=mybridge&utm_medium=email&utm_campaign=read_more)
* [How I rediscovered my love for JavaScript after throwing 90% of it in the trash.](https://hackernoon.com/how-i-rediscovered-my-love-for-javascript-after-throwing-90-of-it-in-the-trash-f1baed075d1b?utm_source=mybridge&utm_medium=email&utm_campaign=read_more)
* [80 Linux Monitoring Tools](https://blog.serverdensity.com/80-linux-monitoring-tools-know/)
* [The Modern JavaScript Tutorial](http://javascript.info/)
* [Abortable fetch](https://developers.google.com/web/updates/2017/09/abortable-fetch)
* [Removing jQuery from GitHub.com frontend](https://githubengineering.com/removing-jquery-from-github-frontend/)

### Web 开发利器与书籍

* [The birth and death of JavaScript](https://www.destroyallsoftware.com/talks/the-birth-and-death-of-javascript)
* [cssreference.io](http://cssreference.io/) - A free visual guide to CSS.
* [JavaScript equality table](http://dorey.github.io/JavaScript-Equality-Table/)
* [Color Picker](http://colorizer.org/)
* [Simple Icons](https://simpleicons.org/), SVG icons for popular brands
* [Web Page Test](https://www.webpagetest.org/) - Test a website's performance
* [Web Manifest Validator](https://manifest-validator.appspot.com/) - Test the validity of a Web Manifest
* [Modern-js-cheatsheet: Cheatsheet for the JavaScript knowledge you will frequently encounter in modern projects.](https://github.com/mbeaudru/modern-js-cheatsheet?utm_source=mybridge&utm_medium=email&utm_campaign=read_more)
* [Exploring ES2018 and ES2019](http://exploringjs.com/es2018-es2019/index.html)
* [Git Cheat Sheet](./sheet/zt_git_cheat_sheet.pdf)
* [PreLoaders](https://icons8.com/preloaders/) - Loading 动画收集网站
* [Modernizr](https://github.com/Modernizr/Modernizr) - 针对浏览器中的 HTML5 和 CSS3 功能支持度检测库
* [Webpack Visualizer](https://chrisbateman.github.io/webpack-visualizer/)
* [Source Map Explorer](https://github.com/danvk/source-map-explorer)

### Web 开发打包与未来技术

* [webpack](http://webpack.github.io/) | [webpack 学习与起步教程](./config/webpack.md) | [webpack 配置文件样例](./config/webpack.config.js)
* [JSLint](http://www.jslint.com/) - The JavaScript Code Quality Tool
* [WebAssembly](http://webassembly.org/) - A new portable, size- and load-time-efficient format suitable for compilation to the web.
* [wasm-pack](https://github.com/rustwasm/wasm-pack) - rust -> wasm workflow tool!
* Dependency injection
  - [Dependency injection in JavaScript](https://krasimirtsonev.com/blog/article/Dependency-injection-in-JavaScript)
  - [控制反转](https://zh.wikipedia.org/wiki/%E6%8E%A7%E5%88%B6%E5%8F%8D%E8%BD%AC)

### 会议

* ELECTRON & DESKTOP JS <http://www.covalenceconf.com/>

#### WebAssembly 中文教程资源

* WebAssembly 系列（一）[生动形象地介绍 WebAssembly](https://zhuanlan.zhihu.com/p/25800318)
* WebAssembly 系列（二）[JavaScript Just-in-time (JIT) 工作原理](https://zhuanlan.zhihu.com/p/25669120)
* WebAssembly 系列（三）[编译器如何生成汇编](https://zhuanlan.zhihu.com/p/25718411)
* WebAssembly 系列（四）[WebAssembly 工作原理](https://zhuanlan.zhihu.com/p/25754084)
* WebAssembly 系列（五）[为什么 WebAssembly 更快](https://zhuanlan.zhihu.com/p/25773367)
* WebAssembly 系列（六）[WebAssembly 的现在与未来](https://zhuanlan.zhihu.com/p/25799683)

### 示例代码

* [Google 官方 PWA 天气预报程序代码](./PWA/) - 根据 Google 官方教程指导实现的天气预报 PWA 程序代码

## QA

* [校招/社招前端笔试面试百题汇总](./Tricks.md)：由于从校招实习到校招提前批，一直在学习前端相关的基础知识并针对具体遇到的细节进行查漏补缺，零零散散发现很多内容值得反复回顾，所以将自己看到过认为还比较经典的题目汇总到这里，供大家参考。
* [用 JavaScript 刷 LeetCode](https://github.com/hijiangtao/LeetCodeOJ)

## 计算机科学技术文章

* [Docker 核心技术与实现原理](https://draveness.me/docker)
* [关系型数据库工作原理](http://blog.jobbole.com/100349/)

## Contribute

非常欢迎为该项目增加内容，共同完善前端技术整理。请 Fork 之后提交代码后发起 PR。

## LICENSE

Apache 2.0

## Contact

Joe Jiang, [Email](mailto:hijiangtao@gmail.com)
