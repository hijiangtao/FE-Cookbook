# CSS3

CSS3 笔记基于 [css3-tutorial](https://github.com/waylau/css3-tutorial) 整理得来。

### 介绍

* CSS 的三种引入方式

内联方式 Inline Styles: 内联定义即是在对象的标记内使用对象的 style 属性定义适用其的样式表属性。 

```
<p style="color:#f00">这一行的字体颜色将显示为红色</p>
```

内部样式块对象 Embedding a Style Block: 在 HTML 文档的 `<head>` 标记里插入一个 `<style>` 块对象。 

```
<style>
    .test2 {
        color: #000;
    }
</style>
```

外部样式表 Linking to a Style Sheet: 先建立外部样式表文件 `*.css`，然后使用 HTML 的 `link` 对象。或者使用 `@import` 来引入。

```
<!-- Use link elements -->
<link rel="stylesheet" href="core.css">

<!-- Use @imports -->
<style>
  @import url("more.css");
</style>
```

* 选择器权重

1. 第一等：代表内联样式，如: `style=""`，权值为1000
2. 第二等：代表ID选择器，如: `#content`，权值为100
3. 第三等：代表类，伪类和属性选择器，如 `.content`，权值为10
4. 第四等：代表类型选择器和伪元素选择器，如 `div p`，权值为1

* 优先级

1. 选择器都有一个权值，权值越大越优先；
2. 当权值相等时，后出现的样式表设置要优于先出现的样式表设置；
3. 创作者的规则高于浏览者：即网页编写者设置的 CSS 样式的优先权高于浏览器所设置的样式；
4. 继承的 CSS 样式不如后来指定的 CSS 样式；
5. 在同一组属性设置中标有!important规则的优先级最大

### 动画

* CSS3 `@keyframes` 规则是用来创建动画。 `@keyframes` 规则内指定一个 CSS样式和动画将逐步从目前的样式更改为新的样式。
* 常用属性如下：

<table class="reference"> <tbody><tr> <th style="width:30%;">属性</th> <th>描述</th> <th style="width:5%;">CSS</th> </tr> <tr> <td><a href="#" title="CSS3 @keyframes 规则">@keyframes</a></td> <td>规定动画。</td> <td>3</td> </tr> <tr> <td><a href="#" title="CSS3 animation 属性">animation</a></td> <td>所有动画属性的简写属性，除了 animation-play-state 属性。</td> <td>3</td> </tr> <tr> <td><a href="#" title="CSS3 animation-name 属性">animation-name</a></td> <td>规定 @keyframes 动画的名称。</td> <td>3</td> </tr> <tr> <td><a href="#" title="CSS3 animation-duration 属性">animation-duration</a></td> <td>规定动画完成一个周期所花费的秒或毫秒。默认是 0。</td> <td>3</td> </tr> <tr> <td><a href="#" title="CSS3 animation-timing-function 属性">animation-timing-function</a></td> <td>规定动画的速度曲线。默认是 "ease"。</td> <td>3</td> </tr> <tr> <td><a href="#" title="CSS3 animation-delay 属性">animation-delay</a></td> <td>规定动画何时开始。默认是 0。</td> <td>3</td> </tr> <tr> <td><a href="#" title="CSS3 animation-iteration-count 属性">animation-iteration-count</a></td> <td>规定动画被播放的次数。默认是 1。</td> <td>3</td> </tr> <tr> <td><a href="#" title="CSS3 animation-direction 属性">animation-direction</a></td> <td>规定动画是否在下一周期逆向地播放。默认是 "normal"。</td> <td>3</td> </tr> <tr> <td><a href="#" title="CSS3 animation-play-state 属性">animation-play-state</a></td> <td>规定动画是否正在运行或暂停。默认是 "running"。</td> <td>3</td> </tr> </tbody></table>

### 边框与背景

CSS3 边框主要包括以下三个属性：

* border-radius (圆角边框)
* box-shadow (边框阴影)
* border-image (边框图片)

CSS3 中背景新增的几个特性：

* background-size: 规定背景图片的尺寸
* background-origin: 指定了背景图像的位置区域，通过content-box, padding-box 和 border-box 来定义

### 字体

用 `@font-face` 规则来自定义网页字体：在 `@font-face` 规则中，您必须首先定义字体的名称（比如 FontAwesome ），然后指向该字体文件 fontawesome-webfont.woff 。

```css
@font-face {
    font-family: 'FontAwesome';
    src: url('fonts/fontawesome-webfont.woff');
}

.font6 {
    font-family: 'FontAwesome', sans-serif;
    font-size: 14px;
    color: pink;
    line-height: 1.3em;
}
```

### 布局

CSS3 多列布局中的主要属性为

1. column-count ： 指定元素的列数
2. column-rule ： 设置列之间的宽度，样式和颜色
3. column-gap ： 指定的列之间的差距

CSS3 增加了一些新的用户界面特性来调整元素尺寸，框尺寸和外边框。其中相关属性包括：

1. resize: 指定一个元素是否应该由用户去调整大小
2. box-sizing: 以特定的方式定义匹配某个区域的特定元素
3. outline-offset: 对轮廓进行偏移，并在超出边框边缘的位置绘制轮廓

过渡效果中涉及的转换属性包括：

1. transition:	简写属性，用于在一个属性中设置四个过渡属性
2. transition-property:	规定应用过渡的 CSS 属性的名称
3. transition-duration:	定义过渡效果花费的时间。默认是 0
4. transition-timing-function:	规定过渡效果的时间曲线。默认是 "ease"
5. transition-delay:	规定过渡效果何时开始。默认是 0

CSS3 中的文本效果相关属性包括：

1. text-shadow: 文本阴影
2. word-wrap: 换行

### 2D/3D 转换

* w3schools - [2D Transforms](https://www.w3schools.com/css/css3_2dtransforms.asp)
* w3schools - [3D Transforms](https://www.w3schools.com/css/css3_3dtransforms.asp)

```
# 2D 转换函数
translate()
rotate()
scale()
skewX()
skewY()
matrix()

# 3D 转换函数，更多请查看 w3schools 内容
rotateX()
rotateY()
rotateZ()
```

### 其他

* 通过使用 word-break 属性，可以让浏览器实现在任意位置的换行; white-space 属性设置如何处理元素内的空白。

> CSS 里，可替换元素（replaced element）的展现不是由CSS来控制的。这些元素是一类外观渲染独立于CSS的外部对象。典型的可替换元素有 `<img>, <object>, <video>` 和表单元素，如 `<textarea>, <input>`。 - [MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/Replaced_element)
