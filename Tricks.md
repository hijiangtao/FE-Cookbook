# FE 答疑解惑

## HTML

## JavaScript

## CSS

* 在一些场景中文本内容不受控制过长超出，有哪些处理超长文本的方法？

**答**： 使用 CSS `word-break` 属性（CSS 属性 word-break 指定了怎样在单词内断行的规则）或者 CSS `text-overflow` 属性（text-overflow CSS 属性确定如何向用户发出未显示的溢出内容信号。它可以被剪切，显示一个省略号或显示一个自定义字符串）。

## Node 软件包管理

* 在每个 package.json 的 dependency 中都会有很多软件名以及随之跟上的版本号，例如 `"d3": "^3.9.0"` 或者 `"d3": "~3.9.0"`，请问 "^" 和 "~" 的含义分别是什么？

**答**： 根据 ["npm install --save" No Longer Using Tildes](http://fredkschott.com/post/2014/02/npm-no-longer-defaults-to-tildes/) 一文可知，形如波浪号的编号（例如：~1.2.3）会匹配对应软件所有的 1.2.x 版本，并最终使用最新的符合要求的版本；相比之下倒 V 型编号（例如：^1.2.3）有更松弛的规则，所有 1.x.x 版本均在匹配列表中，但匹配过程会在 2.0.0 停止并返回最新的符合要求的版本。
