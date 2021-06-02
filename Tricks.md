# 前端笔试/面试答疑解惑汇总

由于从校招实习到校招提前批，一直在学习前端相关的基础知识并针对具体遇到的细节进行查漏补缺，零零散散发现很多内容值得反复回顾，所以将自己看到过认为还比较经典的题目汇总到这里，供大家参考。欢迎有兴趣的同学一起建设该部分，针对你擅长的部分添加问题与回答并提请 PR，每个问题编辑形式如下：

```
#### 编号. 问题

**答**：回答内容
```

本部分内容大致分为以下几个方面： HTML, CSS, JavaScript / TypeScript, Node 与构建、HTTP。

## HTML

#### 1. DOCTYPE 作用？有哪些模式？

**答**：DOCTYPE是用来声明文档类型和DTD规范的，一个主要的用途便是文件的合法性验证。 如果文件代码不合法，那么浏览器解析时便会出一些差错。为了能够很好地显示满足标准的页面，又能最大程度兼容不合法的HTML。 浏览器厂商一般会提供两种浏览器模式：

1. 标准模式（standards mode）：浏览器根据标准规约来渲染页面。
2. 混杂模式（quirks mode）：浏览器采用更加宽松的、向后兼容的方式来渲染页面。

混杂模式下，浏览器会模仿旧浏览器的行为，比如IE6，在此基础上兼容新的标准特性。 混杂模式又称兼容模式、怪异模式等。

#### 2. 常用的DOCTYPE声明有几种？

**答**：

1. HTML5 `<!DOCTYPE html>`
2. HTML 4.01 Strict `<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd">`
3. HTML 4.01 Transitional

```HTML
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" 
"http://www.w3.org/TR/html4/loose.dtd">
```

#### 3. 什么是 HTML 语义化，为什么要语义化？

**答**：语义化的含义就是用正确的标签做正确的事情，html语义化就是让页面的内容结构化，便于对浏览器、搜索引擎解析。语义化的好处包含

1. 有利于SEO，有助于爬虫抓取更多的有效信息，爬虫是依赖于标签来确定上下文和各个关键字的权重
2. 语义化的HTML在没有CSS的情况下也能呈现较好的内容结构与代码结构
3. 方便其他设备的解析
4. 便于团队开发和维护

#### 4. 行内元素、块级元素、空(void)元素都有那些？

**答**：

* 行内元素：a、b、span、img、input、strong、select、label、em、button、textarea
* 块级元素：div、ul、li、dl、dt、dd、p、h1-h6、blockquote 
* 空元素：即系没有内容的HTML元素，例如：br、meta、hr、link、input、img

#### 5. 简述一下 src 与 href 的区别？

**答**：

* href 是指向网络资源所在位置，建立和当前元素（锚点）或当前文档（链接）之间的链接，用于超链接
* src是指向外部资源的位置，指向的内容将会嵌入到文档中当前标签所在位置；在请求src资源时会将其指向的资源下载并应用到文档内，例如js脚本，img图片和frame等元素。当浏览器解析到该元素时，会暂停其他资源的下载和处理，直到将该资源加载、编译、执行完毕，图片和框架等元素也如此，类似于将所指向资源嵌入当前标签内。这也是为什么将js脚本放在底部而不是头部

#### 6. 请描述一下 HTML 本地化存储都有哪些方案，以及它们之间的区别？

**答**：Cookie, localStorage 和 sessionStorage.

1. Cookie是存储在客户端的小型文本文件，可以包含若干键值对，每个键值对可以设置过期时间（默认过期时间为关闭浏览器时）。 Cookie会在每次发送HTTP请求时附加到Cookie头字段，服务器以此得知用户所处的状态。 在HTTP标准中，规定Cookie至少要有4K，至少支持300项Cookie，每个域名至少支持20项。
2. LocalStorage/SessionStorage提供的存储也是基于字符串的键值对。可以通过setItem，getItem来访问其中的存储项，两者均为 HTML5 标准中新加入的技术，在存储时限上有差别。

以下为三者之间的区别：

<table>
	<thead>
		<tr>
			<th>特性</th>
			<th>Cookie</th>
			<th>localStorage</th>
			<th>sessionStorage</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>数据的生命期</td>
			<td>一般由服务器生成，可设置失效时间。如果在浏览器端生成Cookie，默认是关闭浏览器后失效</td>
			<td>除非被清除，否则永久保存</td>
			<td>仅在当前会话下有效，关闭页面或浏览器后被清除</td>
		</tr>
		<tr>
			<td>存放数据大小</td>
			<td>4K左右</td>
			<td colspan="2">一般为5MB</td>
		</tr>
		<tr>
			<td>与服务器端通信</td>
			<td>每次都会携带在HTTP头中，如果使用cookie保存过多数据会带来性能问题</td>
			<td colspan="2">仅在客户端（即浏览器）中保存，不参与和服务器的通信</td>
		</tr>
		<tr>
			<td>易用性</td>
			<td>需要程序员自己封装，源生的Cookie接口不友好</td>
			<td colspan="2">源生接口可以接受，亦可再次封装来对Object和Array有更好的支持</td>
		</tr>
	</tbody>
</table>

#### 7. 什么是跨域请求？其限制原因有哪些？

**答**：首先需要了解的是同源和跨源的概念。对于相同源，其定义为：如果协议、端口（如果指定了一个）和主机对于两个页面是相同的，则两个页面具有相同的源。只要三者之一任意一点有不同，那么就为不同源。当一个资源从与该资源本身所在的服务器的域或端口不同的域或不同的端口请求一个资源时，资源会发起一个跨域 HTTP 请求。

跨域不一定是浏览器限制了发起跨站请求，而也可能是跨站请求可以正常发起，但是返回结果被浏览器拦截了。

#### 8. 前端跨域请求解决方案都有哪些？

**答**：现主流的解决方案包括： document.domain, location.hash, window.name, window.postMessage, JSONP, WebSocket, CORS 等等。详细描述见 [前端跨域请求解决方案汇总](https://github.com/hijiangtao/hijiangtao.github.io/blob/master/_posts/2017-06-13-Cross-Origin-Resource-Sharing-Solutions.md) 或者 [Joe's Blog](https://hijiangtao.github.io/2017/06/13/Cross-Origin-Resource-Sharing-Solutions/).

#### 9. iframe 的优缺点？

**答**：

优点 

1. 程序调入静态页面比较方便
2. 页面和程序分离
3. 重载页面时不需要重载整个页面，只需要重载页面中的一个框架页(减少了数据的传输，增加了网页下载速度)
4. 能够原封不动的把嵌入的网页展现出来

缺点

1. 会产生很多页面，不容易管理
2. 不容易打印
3. 浏览器的后退按钮无效
4. 代码复杂，无法被一些搜索引擎索引到，这一点很关键，现在的搜索引擎爬虫还不能很好的处理iframe中的内容，所以使用
iframe会不利于搜索引擎优化
5. 多数小型的移动设备无法完全显示框架，设备兼容性差
6. 多框架的页面会增加服务器的http请求，对于大型网站是不可取的

#### 10. iframe 有哪些使用场景？

**答**：

1. 沙箱隔离。
2. 引用第三方内容。
3. 独立的带有交互的内容，比如幻灯片。
4. 需要保持独立焦点和历史管理的子窗口，如复杂的Web应用。

#### 11. HTML 的全局属性都有哪些？

**答**：全局属性是所有HTML元素共有的属性; 它们可以用于所有元素，尽管属性可能对某些元素没有影响。

- `accesskey`:设置快捷键，提供快速访问元素如<a href="#" accesskey="a">aaa</a>在windows下的firefox中按``alt + shift + a``可激活元素
- `class`:为元素设置类标识，多个类名用空格分开，CSS和javascript可通过class属性获取元素
- `contenteditable`: 指定元素内容是否可编辑
- `contextmenu`: 自定义鼠标右键弹出菜单内容
- `data-*`: 为元素增加自定义属性
- `dir`: 设置元素文本方向
- `draggable`: 设置元素是否可拖拽
- `dropzone`: 设置元素拖放类型： copy, move, link
- `hidden`: 表示一个元素是否与文档。样式上会导致元素不显示，但是不能用这个属性实现样式效果
- `id`: 元素id，文档内唯一
- `lang`: 元素内容的的语言
- `spellcheck`: 是否启动拼写和语法检查
- `style`: 行内css样式
- `tabindex`: 设置元素可以获得焦点，通过tab可以导航
- `title`: 元素相关的建议信息
- `translate`: 元素和子孙节点内容是否需要本地化

#### 12. 常见的浏览器内核有哪些？

**答**：浏览器内核又可以分成两部分：渲染引擎(layout engineer 或者 Rendering Engine)和 JS 引擎。常见的浏览器内核可以分这四种：Trident、Gecko、Blink、Webkit，此处指浏览器内核。

* Trident 为 IE 内核，又称 MSHTML
* Gecko 内核：Netscape6 开始采用的内核，后来的 Mozilla FireFox(火狐浏览器) 也采用了该内核
* Webkit 内核：Safari, Chrome 等
* Blink 内核：Blink 其实是 WebKit 的分支，如同 WebKit 是 KHTML 的分支
* Presto 内核：Presto 是挪威产浏览器 opera 的 “前任” 内核，最新的 opera 浏览器内核现为 Blink
* 移动端：目前移动设备浏览器上常用的内核有 Webkit，Blink，Trident，Gecko 等，其中 iPhone 和 iPad 等苹果 iOS 平台主要是 WebKit，Android 4.4 之前的 Android 系统浏览器内核是 WebKit，Android4.4 系统浏览器切换到了Chromium，内核是 Webkit 的分支 Blink，Windows Phone 8 系统浏览器内核是 Trident

#### 13. 如何避免浏览器回流与重绘？

**答**：

CSS 方面

* 避免使用 table 布局。
* 尽可能在 DOM 树的最末端改变 class。
* 避免设置多层内联样式。
* 将动画效果应用到 position 属性为 absolute 或 fixed 的元素上。
* 避免使用 CSS 表达式（例如：`calc()`）。

JavaScript 方面

* 避免频繁操作样式，最好一次性重写 style 属性，或者将样式列表定义为 class 并一次性更改 class 属性。
* 避免频繁操作 DOM，创建一个 documentFragment，在它上面应用所有 DOM 操作，最后再把它添加到文档中。
* 也可以先为元素设置 `display: none`，操作结束后再把它显示出来。因为在 display 属性为 none 的元素上进行的 DOM 操作不会引发回流和重绘。
* 避免频繁读取会引发回流/重绘的属性，如果确实需要多次使用，就用一个变量缓存起来。
* 对具有复杂动画的元素使用绝对定位，使它脱离文档流，否则会引起父元素及后续元素频繁回流。

#### 14. 介绍一下 React JSX

答：它是一个JavaScript 的语法扩充，基本上，JSX 单纯只是 `React.createElement(component, props, ...children)` function 的一个语法糖，它的工作原理基本可以用以下这个例子诠释

```jsx
// 1
const element = (
  <h1 className="greeting">
    Hello, World!
  </h1>
);

// 2
const element = {
  type: 'h1',
  props: {
    className: 'greeting',
    children: 'Hello, world!'
  }
};

// 3
const element = React.createElement(
  'h1',
  {className: 'greeting'},
  'Hello, World!'
);
```

#### 15. 介绍 Vue template

答：Vue template 模板编译的过程经过 parse() 生成抽象语法树，再经过 optimize 对静态节点优化，最后通过 generate() 生成 render 字符串
之后调用 new Watcher() 函数，用来监听数据的变化，render 函数就是数据监听的回调所调用的，其结果便是重新生成 Vnode。

当这个 render 函数字符串在第一次 mount、或者绑定的数据更新的时候，都会被调用，生成 Vnode。
如果是数据的更新，那么 Vnode 会与数据改变之前的 Vnode 做 diff，对内容做改动之后，就会更新到我们真正的 DOM。
## JavaScript

#### 1. ECMAScript/JavaScript 中都有那些数据类型？

**答**：ECMAScript中5种简单数据类型（基本数据类型）: Undefined、Null、Boolean、Number和String, 1种复杂数据类型: Object.

#### 2. 把非数值转化为数值的函数都有哪些？

**答**：Number()、parseInt()和parseFloat()，第一个函数，即转型函数Number()可以用于任何数据类型，而另两个函数则专门用于把字符串转换成数值。

#### 3. JavaScript 中的 new 关键词做了什么？

* **答**：他做了五件事

1. 他生成了一个新对象。这个对象的类型只是一个普通的对象；
2. 他将新对象内部、不可访问的原型属性（例如：`__proto__`）设置为构造器函数外在、可访问的 prototype 对象（每个函数对象都会自动拥有一个 `prototype` 属性）；
3. 他将 `this` 变量指向这个新生成的对象；
4. 他执行构造器函数，对于每个提及到 `this` 的地方使用新生成的对象执行；
5. 他返回这个新生成的对象，除非构造器函数返回了一个非空的对象引用。若是返回了一个非空对象，那么这个对象引用将会替代新生成的对象被返回；

#### 4. JavaScript 的六种继承类型？

* **答**：

* 简单原型链：这是实现继承最简单的方式了，核心在于用父类实例作为子类原型对象。优点是简单，缺点在于二 - 创建子类实例时，无法向父类构造函数传参；由于来自原型对象的引用属性是所有实例共享的，所以修改原型对象上的属性会在所有子类实例中体现出来；

```
function Super(){
    this.val = 1;
}
function Sub(){
    // ...
}
Sub.prototype = new Super();

let sub1 = new Sub();
```

* 借用构造函数：借父类的构造函数来增强子类实例，等于是把父类的实例属性复制了一份给子类实例装上了（完全没有用到原型）;缺点在于无法实现函数复用，每个子类实例都持有一个新的 `fun` 函数，太多了就会影响性能；

```
function Super(val){
    this.val = val;

    this.fun = function(){
        // ...
    }
}
function Sub(val){
    Super.call(this, val);   // 核心
}

let sub1 = new Sub(1);
```

* 组合继承（最常用）：把实例函数都放在原型对象上，以实现函数复用。同时还要保留借用构造函数方式的优点；子类原型上有一份多余的父类实例属性，因为父类构造函数被调用了两次，生成了两份，而子类实例上的那一份屏蔽了子类原型上的定义，属于内存浪费；

```
function Super(){
    // 只在此处声明基本属性和引用属性
    this.val = 1;
}
//  在此处声明函数
Super.prototype.fun1 = function(){};

function Sub(){
    Super.call(this);   // 核心
    // ...
}
Sub.prototype = new Super();    // 核心

let sub1 = new Sub(1);
```

* 原型式继承：从已有的对象中衍生出新对象，不需要创建自定义类型；但原型引用属性会被所有实例共享，因为用整个父类对象来充当子类原型对象；无法实现代码复用；

```
function beget(obj){   // 生孩子函数 beget
    let F = function(){};
    F.prototype = obj;
    return new F();
}
function Super(){
    this.val = 1;
    this.arr = [1];
}

// 拿到父类对象
let sup = new Super();
// 生孩子
let sub = beget(sup);
```

* 寄生式继承：寄生式继承的思路和寄生构造函数和工厂模式相似，即创建一个仅用于封装继承过程的函数，该函数在内部以某种形式来增强对象，最后像真的是它做了所有工作一样返回对象；但是这种形式依然不能复用函数；

```
function beget(obj){   // 生孩子函数
    let F = function(){};
    F.prototype = obj;
    return new F();
}
function Super(){
    this.val = 1;
    this.arr = [1];
}
function getSubObject(obj){
    // 创建新对象
    let clone = beget(obj); // 核心
    // 增强
    clone.attr1 = 1;
    clone.attr2 = 2;

    return clone;
}

var sub = getSubObject(new Super());
```

* 寄生组合继承（最佳方式）：用 beget(Super.prototype) 切掉了原型对象上多余的那份父类实例属性；

```
function beget(obj){   // 生孩子函数 beget
    let F = function(){};
    F.prototype = obj;
    return new F();
}
function Super(){
    // 只在此处声明基本属性和引用属性
    this.val = 1;
    this.arr = [1];
}
//  在此处声明函数
Super.prototype.fun1 = function(){};
Super.prototype.fun2 = function(){};

function Sub(){
    Super.call(this);   // 核心
    // ...
}
let proto = beget(Super.prototype); // 核心
proto.constructor = Sub;            // 核心
Sub.prototype = proto;              // 核心

let sub = new Sub();
```

#### 5. 箭头函数的适用规则？

* **答**：

* 如果你有一个简短的，单语句内联函数表达式，它唯一的语句是某个计算后的值的return语句，并且 这个函数没有在它内部制造一个this引用，并且没有自引用（递归，事件绑定/解除），并且 你合理地预期这个函数绝不会变得需要this引用或自引用，那么你就可能安全地将它重构为一个=>箭头函数。
* 如果你有一个内部函数表达式，它依赖于外围函数的 var self = this 黑科技或者.bind(this)调用来确保正确的this绑定，那么这个内部函数表达式就可能安全地变为一个=>箭头函数。
* 如果你有一个内部函数表达式，它依赖于外围函数的类似于 var args = Array.prototype.slice.call(arguments) 这样的东西来制造一个arguments的词法拷贝，那么这个内部函数就可能安全地变为一个=>箭头函数。
* 对于其他的所有东西 —— 普通函数声明，较长的多语句函数表达式，需要词法名称标识符进行自引用（递归等）的函数，和任何其他不符合前述性质的函数 —— 你就可能应当避免=>函数语法。

#### 6. 为什么我们区别 LHS 和 RHS 那么重要？

**答**：因为在变量还没有被声明（在所有被查询的 作用域 中都没找到）的情况下，这两种类型的查询的行为不同。如果 RHS 查询在嵌套的作用域的任何地方都找不到一个值，这会导致引擎抛出一个 ReferenceError。相比之下，如果引擎在进行一个 LHS 查询，但到达了顶层（全局 作用域）都没有找到它，而且如果程序没有运行在“Strict模式”下，那么这个全局作用域将会在全局作用域中创建一个同名的新变量，并把它交还给引擎。而如果一个 RHS 查询的变量被找到了，但是你试着去做一些这个值不可能做到的事，比如将一个非函数的值作为函数运行，或者引用 null 或者 undefined 值的属性，那么引擎就会抛出一个不同种类的错误，称为 TypeError。

#### 7. 如何区分声明和表达式？

**答**：区分声明与表达式的最简单的方法是，这个语句中（不仅仅是一行，而是一个独立的语句）“function”一词的位置。如果“function”是这个语句中的第一个东西，那么它就是一个函数声明。否则，它就是一个函数表达式。

#### 8. IIFE 方式与变种？

**答**：

```javascript
// 1
(function foo(){ .. })()

// 2
(function(){ .. }())

// 3，用于 UMD 项目
(function IIFE( def ){
	def( window );
})(function def( global ){
	let a = 3;
	console.log( a ); // 3
	console.log( global.a ); // 2
});
```

#### 9. 请解释如下代码执行的结果？

```
[] + {}; // "[object Object]"
{} + []; // 0
```

**答**：在第一行中，`{}`出现在+操作符的表达式中，因此被翻译为一个实际的值（一个空 object）。而`[]`被强制转换为`""`因此`{}`也会被强制转换为一个 string："[object Object]"。但在第二行中，`{}`被翻译为一个独立的`{}`空代码块儿（它什么也不做）。块儿不需要分号来终结它们，所以这里缺少分号不是一个问题。最终，`+ []` 是一个将 `[]` 明确强制转换为 number的表达式，而它的值是0。

#### 10. 什么是事件委托？

**答**：事件委托，通俗地来讲，就是把一个元素响应事件（click、keydown……）的函数委托到另一个元素；一般来讲，会把一个或者一组元素的事件委托到它的父层或者更外层元素上，真正绑定事件的是外层元素，当事件响应到需要绑定的元素上时，会通过事件冒泡机制从而触发它的外层元素的绑定事件上，然后在外层元素上去执行函数。事件委托的好处包括：动态绑定事件与减少内存消耗。

#### 11. JavaScript 与 HTML 之间交互的事件模型分为几个阶段？

**答**：

1. 捕获阶段：在事件冒泡的模型中，捕获阶段不会响应任何事件；
2. 目标阶段：目标阶段就是指事件响应到触发事件的最底层元素上；
3. 冒泡阶段：冒泡阶段就是事件的触发响应会从最底层目标一层层地向外到最外层（根节点），事件代理即是利用事件冒泡的机制把里层所需要响应的事件绑定到外层；

#### 12. 触摸事件都有哪些？

**答**：三种在规范中列出并获得跨移动设备广泛实现的基本触摸事件

1. touchstart事件：当手指触摸屏幕时候触发，即使已经有一个手指放在屏幕上也会触发。
2. touchmove事件：当手指在屏幕上滑动的时候连续地触发。在这个事件发生期间，调用preventDefault()事件可以阻止滚动。
3. touchend事件：当手指从屏幕上离开的时候触发。

#### 13. 事件对象的 clientX, offsetX, screenX, pageX 有什么区别？

**答**：

1. event.clientX、event.clientY: 鼠标相对于浏览器窗口可视区域的X, Y坐标（窗口坐标），可视区域不包括工具栏和滚动条。
2. event.pageX、event.pageY: 鼠标相对于整个页面的X/Y坐标。注意，整个页面的意思就是你整个网页的全部，比如说网页很宽很长，宽2000px，高3000px，那pageX, pageY的最大值就是它们了。**特别说明：IE不支持！**
3. screenX、screenY: 鼠标相对于用户显示器屏幕左上角的X, Y坐标。
4. event.offsetX、event.offsetY: 鼠标相对于事件父容器（srcElement）的X, Y坐标。**特别说明：只有IE支持！**

#### 14. 简单介绍下 `requestAnimationFrame` 和 `requestIdleCallback` API 及使用场景

`window.requestAnimationFrame()` 告诉浏览器——你希望执行一个动画，并且要求浏览器在下次重绘之前调用指定的回调函数更新动画。该方法需要传入一个回调函数作为参数，该回调函数会在浏览器下一次重绘之前执行。

回调函数会被传入 `DOMHighResTimeStamp` 参数，`DOMHighResTimeStamp` 指示当前被 `requestAnimationFrame()` 排序的回调函数被触发的时间，同一帧内多次调用时间参数相同。

`window.requestIdleCallback()` 方法将在浏览器的空闲时段内调用的函数排队，它维护一个队列，将在浏览器空闲时间内执行。它属于 Background Tasks API。可以使用 timeout 参数来强制指定“保证执行最晚时长”。

注意点1：在大多数遵循 W3C 建议的浏览器中，回调函数执行次数通常与浏览器屏幕刷新次数相匹配。为了提高性能和电池寿命，因此在大多数浏览器里，当 `requestAnimationFrame()` 运行在后台标签页或者隐藏的 `<iframe>` 里时，`requestAnimationFrame()` 会被暂停调用以提升性能和电池寿命。

注意点2：`requestIdleCallback` 在 safari 中暂未支持，在使用时有几点注意

1. 执行重计算而非紧急任务
2. 空闲回调执行时间应该小于 50ms，最好更少
3. 空闲回调中不要操作 DOM，因为它本来就是利用的重排重绘后的间隙空闲时间，重新操作 DOM 又会造成重排重绘

#### 15. 介绍下 generator

答：

Generator 函数是协程在 ES6 的实现，最大特点就是可以交出函数的执行权（即暂停执行）。

```
function* gen(x){
  var y = yield x + 2;
  return y;
}
```

上面代码就是一个 Generator 函数。它不同于普通函数，是可以暂停执行的，所以函数名之前要加星号，以示区别。

整个 Generator 函数就是一个封装的异步任务，或者说是异步任务的容器。异步操作需要暂停的地方，都用 yield 语句注明。Generator 函数的执行方法如下。

```
var g = gen(1);
g.next() // { value: 3, done: false }
g.next() // { value: undefined, done: true }
```

上面代码中，调用 Generator 函数，会返回一个内部指针（即遍历器 ）g 。这是 Generator 函数不同于普通函数的另一个地方，即执行它不会返回结果，返回的是指针对象。调用指针 g 的 next 方法，会移动内部指针（即执行异步任务的第一段），指向第一个遇到的 yield 语句，上例是执行到 x + 2 为止。

换言之，next 方法的作用是分阶段执行 Generator 函数。每次调用 next 方法，会返回一个对象，表示当前阶段的信息（ value 属性和 done 属性）。value 属性是 yield 语句后面表达式的值，表示当前阶段的值；done 属性是一个布尔值，表示 Generator 函数是否执行完毕，即是否还有下一个阶段。

#### 16. 各类模块化加载方案介绍

答：CommonJS、AMD、CMD、UMD、ES Modules，参考 [JavaScript 模块化方案总结](https://hijiangtao.github.io/2019/08/25/JavaScript-Module-Definitions-and-Webpack-Configurations-Notes/)

#### 17. 依据 CommonJS 和 ES Modules 的区别，简单介绍下 JavaScript 模块的循环加载

答：

CommonJS 加载原理。CommonJS 的一个模块，就是一个脚本文件。require 命令第一次加载该脚本，就会执行整个脚本，然后在内存生成一个对象。

```
{
  id: '...',
  exports: { ... },
  loaded: true,
  ...
}
```

上面代码中，该对象的 id 属性是模块名，exports 属性是模块输出的各个接口，loaded 属性是一个布尔值，表示该模块的脚本是否执行完毕。其他还有很多属性，这里省略。

以后需要用到这个模块的时候，就会到 exports 属性上面取值。即使再次执行 require 命令，也不会再次执行该模块，而是到缓存之中取值。

CommonJS 模块的重要特性是加载时执行，即脚本代码在 require 的时候，就会全部执行。CommonJS 的做法是，一旦出现某个模块被"循环加载"，就只输出已经执行的部分，还未执行的部分不会输出。

看一个示例：

```
// a.js:
console.log('a starting');
exports.done = false;
const b = require('./b.js');
console.log('in a, b.done = %j', b.done);
exports.done = true;
console.log('a done');

// b.js:
console.log('b starting');
exports.done = false;
const a = require('./a.js');
console.log('in b, a.done = %j', a.done);
exports.done = true;
console.log('b done');

// main.js:
console.log('main starting');
const a = require('./a.js');
const b = require('./b.js');
console.log('in main, a.done = %j, b.done = %j', a.done, b.done);
```

输出应该如下：

```
$ node main.js
main starting
a starting
b starting
in b, a.done = false
b done
in a, b.done = true
a done
in main, a.done = true, b.done = true
```

ES6 模块的运行机制与 CommonJS 不一样，它遇到模块加载命令 import 时，不会去执行模块，而是只生成一个引用。等到真的需要用到时，再到模块里面去取值。

因此，ES6模块是动态引用，不存在缓存值的问题，而且模块里面的变量，绑定其所在的模块。请看下面的例子。

```
// even.js
  import { odd } from './odd'

  export var counter = 0;

  export function even(n) {
    counter++;
    return n == 0 || odd(n - 1);
  }

// odd.js
  import { even } from './even';

  export function odd(n) {
    return n != 0 && even(n - 1);
  }

// Test
  System.import('even').then(function(m) {
    m.even(10);
    m.counter; // 6
    m.even(20);
    m.counter; // 17
  });
```

参考 <http://www.ruanyifeng.com/blog/2015/11/circular-dependency.html>，代码示例见 <https://nodejs.org/api/modules.html#modules_cycles>

#### 18. 什么是装饰器模式

TBD

## TypeScript

#### 1. interface 和 type 的区别

答：

**相同点**

1. 都可以描述一个对象或者函数；
2. 都允许拓展（extends）：interface 和 type 都可以拓展，并且两者并不是相互独立的，也就是说 interface 可以 extends type, type 也可以 extends interface 。 虽然效果差不多，但是两者语法不同。

interface extends interface

```
interface Name { 
  name: string; 
}
interface User extends Name { 
  age: number; 
}
```

type extends type

```
type Name = { 
  name: string; 
}
type User = Name & { age: number  };
```

interface extends type

```
type Name = { 
  name: string; 
}
interface User extends Name { 
  age: number; 
}
```

type extends interface

```
interface Name { 
  name: string; 
}
type User = Name & { 
  age: number; 
}
```

**不同点**

type 可以而 interface 不行
1. type 可以声明基本类型别名，联合类型，元组等类型
2. type 语句中还可以使用 typeof 获取实例的类型进行赋值

```typescript
// 基本类型别名
type Name = string

// 联合类型
interface Dog {
    wong();
}
interface Cat {
    miao();
}

type Pet = Dog | Cat

// 具体定义数组每个位置的类型
type PetList = [Dog, Pet]

// 当你想获取一个变量的类型时，使用 typeof
let div = document.createElement('div');
type B = typeof div
```

interface 可以而 type 不行
1. interface 能够声明合并

```typescript
interface User {
  name: string
  age: number
}

interface User {
  sex: string
}

/*
User 接口为 {
  name: string
  age: number
  sex: string 
}
*/
```

## CSS

#### 1. 什么是盒子模型？

**答**：在网页中，一个元素占有空间的大小由几个部分构成，其中包括元素的内容（content），元素的内边距（padding），元素的边框（border），元素的外边距（margin）四个部分。这四个部分占有的空间中，有的部分可以显示相应的内容，而有的部分只用来分隔相邻的区域或区域。4个部分一起构成了css中元素的盒模型。

#### 2. 在一些场景中文本内容不受控制过长超出，有哪些处理超长文本的方法？

**答**：使用 CSS `word-break` 属性（CSS 属性 word-break 指定了怎样在单词内断行的规则）或者 CSS `text-overflow` 属性（text-overflow CSS 属性确定如何向用户发出未显示的溢出内容信号。它可以被剪切，显示一个省略号或显示一个自定义字符串）。

#### 3. 什么是 Data URI？

**答**：Data URI 是一种提供让外置资源的直接内嵌在页面中的方案。这种技术允许我们只需单次 HTTP 请求即可获取所有需要引用的图片与样式资源，并因无需多次请求资源而变的高效。

#### 4. Data URI 的好处和缺点都有哪些？

**答**：在 img 方式引用图片时，img标记的src属性指定了一个远程服务器上的资源。当网页加载到浏览器中时，浏览器会针对每个外部资源都向服务器发送一次拉取资源请求，占用网络资源。大多数的浏览器都有一个并发请求数不能超过4个的限制。这意味着，如果一个网页里嵌入了过多的外部资源，这些请求会导致整个页面的加载延迟。而使用Data URL技术，图片数据以base64字符串格式嵌入到了页面中，其中好处包括：

* 当访问外部资源很麻烦或受限时。
* 当图片是在服务器端用程序动态生成，每个访问用户显示的都不同时。
* 当图片的体积太小，占用一个HTTP会话不是很值得时。

Data URL也有一些不适用的场合：

* Base64编码的数据体积通常是原数据的体积4/3，也就是Data URL形式的图片会比二进制格式的图片体积大1/3。
* Data URL形式的图片不会被浏览器缓存，这意味着每次访问这样页面时都被下载一次。这是一个使用效率方面的问题——尤其当这个图片被整个网站大量使用的时候。

#### 5. 内联元素和块级元素的区别？

**答**：块级元素和内联元素对于CSS调用的不同效果 - 块级元素默认独占一行，默认宽度为父元素的100%，可以设置宽度、高度，外边距、内边距；内联元素默认不独占一行，宽度随着内容自动撑，无法设置宽度、高度、外边距。可以设置内边距。内联元素要设置宽高必须用css设置块显示。

#### 6. CSS Transform / Transition / Animation 属性的区别？

**答**：

* transform属性是静态属性，一旦写到style里面，将会直接显示作用，无任何变化过程。transform的主要用途是用来做元素的特殊变形；
* transition关注的是CSS property的变化，property值和时间的关系是一个三次贝塞尔曲线；
* animation作用于元素本身而不是样式属性，可以使用关键帧的概念，应该说可以实现更自由的动画效果；

#### 7. position 布局方式都有哪些？

**答**：

* **static** - static 是默认值。任意 `position: static;` 的元素不会被特殊的定位。一个 static 元素表示它不会被“positioned”，一个 position 属性被设置为其他值的元素表示它会被“positioned”。
* **relative** - relative 表现的和 static 一样，除非你添加了一些额外的属性。在一个相对定位（position属性的值为relative）的元素上设置 top 、 right 、 bottom 和 left 属性会使其偏离其正常位置。其他的元素的位置则不会受该元素的影响发生位置改变来弥补它偏离后剩下的空隙。
* **fixed** - 一个固定定位（position属性的值为fixed）元素会相对于视窗来定位，这意味着即便页面滚动，它还是会停留在相同的位置。和 relative 一样， top 、 right 、 bottom 和 left 属性都可用。
* **absolute** - absolute 与 fixed 的表现类似，它相对于最近的“positioned”祖先元素。如果绝对定位（position属性的值为absolute）的元素没有“positioned”祖先元素，那么它是相对于文档的 body 元素，并且它会随着页面滚动而移动。

*记住一个“positioned”元素是指 position 值不是 static 的元素。*

#### 8. display 的属性都有哪些？

**答**：块级元素默认值为 block，而行内元素为 inline。

* **block** - div 是一个标准的块级元素。一个块级元素会新开始一行并且尽可能撑满容器。其他常用的块级元素包括 p 、 form 和HTML5中的新元素： header 、 footer 、 section 等等。
* **inline** - 一个行内元素可以在段落中包裹一些文字而不会打乱段落的布局。 a 元素是最常用的行内元素。
* **none** - 一些特殊元素的默认 display 值是它，例如 script 。 display:none 通常被 JavaScript 用来在不删除元素的情况下隐藏或显示元素。它和 visibility 属性不一样。把 display 设置成 none 元素不会占据它本来应该显示的空间，但是设置成 visibility: hidden; 还会占据空间。

其他 display 值，例如 inline-block, list-item, table 和 flex。

## Node 与构建

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

## HTTP

#### 1. HTTP/0.9 只有一个命令 `GET`, HTTP/1.0 引入了 `POST` 命令和 `HEAD` 命令，丰富了浏览器与服务器的互动手段。请问 HTTP/1.1 的请求方法有哪些？

**答**：HTTP/1.1 提供八种方法以不同的方式操作指定的资源。分别是

1. OPTIONS：这个方法可使服务器传回该资源所支持的所有HTTP请求方法。用'\*'来代替资源名称，向Web服务器发送OPTIONS请求，可以测试服务器功能是否正常运作。
2. HEAD：与GET方法一样，都是向服务器发出指定资源的请求。只不过服务器将不传回资源的本文部分。它的好处在于，使用这个方法可以在不必传输全部内容的情况下，就可以获取其中“关于该资源的信息”（元信息或称元数据）。
3. GET：向指定的资源发出“显示”请求。使用GET方法应该只用在读取数据，而不应当被用于产生“副作用”的操作中，例如在Web Application中。其中一个原因是GET可能会被网络蜘蛛等随意访问。参见安全方法
4. POST：向指定资源提交数据，请求服务器进行处理（例如提交表单或者上传文件）。数据被包含在请求本文中。这个请求可能会创建新的资源或修改现有资源，或二者皆有。
5. PUT：向指定资源位置上传其最新内容。
6. DELETE：请求服务器删除Request-URI所标识的资源。
7. TRACE：回显服务器收到的请求，主要用于测试或诊断。
8. CONNECT：HTTP/1.1协议中预留给能够将连接改为管道方式的代理服务器。通常用于SSL加密服务器的链接（经由非加密的HTTP代理服务器）。

#### 2. HTTP 状态码的主要类型有哪些？

**答**：状态代码的第一个数字代表当前响应的类型，主要为五类

1. 1xx消息——请求已被服务器接收，继续处理
2. 2xx成功——请求已成功被服务器接收、理解、并接受
3. 3xx重定向——需要后续操作才能完成这一请求
4. 4xx请求错误——请求含有词法错误或者无法被执行
5. 5xx服务器错误——服务器在处理某个正确请求时发生错误

详细情况见 [维基百科](https://zh.wikipedia.org/wiki/HTTP%E7%8A%B6%E6%80%81%E7%A0%81)。

#### 3. TCP 协议中为什么连接的时候是三次握手，关闭的时候却是四次握手？

**答**：因为当Server端收到Client端的SYN连接请求报文后，可以直接发送SYN+ACK报文。其中ACK报文是用来应答的，SYN报文是用来同步的。但是关闭连接时，当Server端收到FIN报文时，很可能并不会立即关闭SOCKET，所以只能先回复一个ACK报文，告诉Client端，"你发的FIN报文我收到了"。只有等到我Server端所有的报文都发送完了，我才能发送FIN报文，因此不能一起发送。故需要四步握手。

#### 4. HTTPS 建立连接的过程？

**答**：按照通信过程的收发端来划分，可以将整个过程分成四个部分-客户端请求、服务端回复、客户端回应以及服务器回应。

1. 客户端发出握手请求 (Client Hello)，包含以下信息：
	* 支持的协议版本，比如TLS 1.0
	* 一个客户端生成的随机数(random\_1)，这个随机数既需要客户端保存又需要发送给服务器
	* 支持的加密方法，比如RSA公钥加密
	* 支持的压缩方法
2. 服务器回复 (Server Hello)，包含以下信息：
	* 确认使用的加密通信协议版本，比如TLS 1.0。如果浏览器与服务器支持的版本不一致，服务器关闭加密通信
	* 一个服务器生成的随机数 (random\_2)
	* 确认使用的加密方法，比如RSA公钥加密
	* 服务器证书（其中包含服务器放入公钥）
	* 可选：如果服务器需要确认客户端的身份，就会再包含一项请求，要求客户端提供”客户端证书”。比如，金融机构往往只允许认证客户连入自己的网络，就会向正式客户提供USB密钥，里面就包含了一张客户端证书
3. 客户端回应，包含以下步骤：
	* 验证服务器证书的合法性，证书合法性包括：证书是否过期，发行服务器证书的 CA 是否可靠，发行者证书的公钥能否正确解开服务器证书的“发行者的数字签名”，服务器证书上的域名是否和服务器的实际域名相匹配。如果合法性验证没有通过，通讯将断开
	* 客户端使用一些加密算法 (例如：RSA, Diffie-Hellman)产生一个48个字节的 key，这个 key 叫 PreMaster Secret。该 PreMaster Secret 用服务器发来的公钥加密后随同相关内容（如果前一步，服务器要求客户端证书，客户端会在这一步发送证书及相关信息，即客户的证书以及含有签名的随机数）传送回服务器端，防止被窃听
	* 编码改变通知，表示随后的信息都将用双方商定的加密方法和密钥发送
	* 客户端握手结束通知，表示客户端的握手阶段已经结束。这一项同时也是前面发送的所有内容的hash值，用来供服务器校验
4. 服务器回应，服务器接收到浏览器送过来的消息，用自己的私钥解密，获得 PreMaster Secret。再结合另外两个随机数 random\_1 和 random\_2，计算出本次会话的会话密钥 (session secret)，然后向客户端发送下面信息：
	* 编码改变通知，表示随后的信息都将用双方商定的加密方法和密钥发送
	* 服务器握手结束通知，表示服务器的握手阶段已经结束。这一项同时也是前面发送的所有内容的hash值，用来供客户端校验

在四个过程结束之后，握手阶段结束。接下来，客户端和服务端进入加密通信阶段，该阶段的通信采用普通的 HTTP 协议，只不过双方都采用相同的会话密钥对会话内容进行对称加密和解密。

需要注意的是非对称加解密算法的效率要比对称加解密要低的多。所以 SSL 在握手过程中使用非对称密码算法来协商密钥，实际使用对称加解密的方法对 HTTP 内容加密传输。下图为 SSL 连接建立过程详解图。

![](/assets/img/SSL-Connection-Setup.png "SSL 连接建立过程详解图")

#### 4. OSI，TCP/IP，五层协议的体系结构，以及各层协议？

**答**：

* OSI分层 （7层）：物理层、数据链路层、网络层、传输层、会话层、表示层、应用层。 
* TCP/IP分层（4层）：网络接口层、 网际层、运输层、 应用层。 
* 五层协议 （5层）：物理层、数据链路层、网络层、运输层、 应用层。 
* 每一层的协议如下： 
	* 物理层：RJ45、CLOCK、IEEE802.3 （中继器，集线器） 
	* 数据链路：PPP、FR、HDLC、VLAN、MAC （网桥，交换机） 
	* 网络层：IP、ICMP、ARP、RARP、OSPF、IPX、RIP、IGRP、 （路由器） 
	* 传输层：TCP、UDP、SPX 
	* 会话层：NFS、SQL、NETBIOS、RPC 
	* 表示层：JPEG、MPEG、ASII 
	* 应用层：FTP、DNS、Telnet、SMTP、HTTP、WWW、NFS 
* 每一层的作用如下： 
	* 物理层：通过媒介传输比特,确定机械及电气规范（比特Bit） 
	* 数据链路层：将比特组装成帧和点到点的传递（帧Frame） 
	* 网络层：负责数据包从源到宿的传递和网际互连（包PackeT） 
	* 传输层：提供端到端的可靠报文传递和错误恢复（段Segment） 
	* 会话层：建立、管理和终止会话（会话协议数据单元SPDU） 
	* 表示层：对数据进行翻译、加密和压缩（表示协议数据单元PPDU） 
	* 应用层：允许访问OSI环境的手段（应用协议数据单元APDU）

#### 5. IP 地址的分类？

**答**：A 类地址：以0开头， 第一个字节范围：0~126（1.0.0.0 - 126.255.255.255）；B 类地址：以10开头， 第一个字节范围：128~191（128.0.0.0 - 191.255.255.255）；C 类地址：以110开头， 第一个字节范围：192~223（192.0.0.0 - 223.255.255.255）。其中，10.0.0.0—10.255.255.255，172.16.0.0—172.31.255.255，192.168.0.0— 
192.168.255.255 为 Internet 上保留地址用于内部。

#### 6. 互联网上各类协议的介绍？

**答**：

1. ICMP协议： 因特网控制报文协议。它是TCP/IP协议族的一个子协议，用于在IP主机、路由器之间传递控制消息。
2. TFTP协议： 是TCP/IP协议族中的一个用来在客户机与服务器之间进行简单文件传输的协议，提供不复杂、开销不大的文件传输服务。
3. HTTP协议： 超文本传输协议，是一个属于应用层的面向对象的协议，由于其简捷、快速的方式，适用于分布式超媒体信息系统。
4. DHCP协议： 动态主机配置协议，是一种让系统得以连接到网络上，并获取所需要的配置参数手段。 
NAT协议：网络地址转换属接入广域网(WAN)技术，是一种将私有（保留）地址转化为合法IP地址的转换技术。
5. DHCP协议：一个局域网的网络协议，使用UDP协议工作，用途：给内部网络或网络服务供应商自动分配IP地址，给用户或者内部网络管理员作为对所有计算机作中央管理的手段。

#### 7. TCP 和 UDP 的区别？

**答**：TCP 提供面向连接的、可靠的数据流传输，而 UDP 提供的是非面向连接的、不可靠的数据流传输；TCP 传输单位称为 TCP 报文段，UDP 传输单位称为用户数据报；TCP 注重数据安全性，UDP 数据传输快，因为不需要连接等待，少了许多操作，但是其安全性却一般；TCP 对应的协议和 UDP 对应的协议如下：

```
TCP 协议
（1） FTP：定义了文件传输协议，使用21端口。 
（2） Telnet：一种用于远程登陆的端口，使用23端口，用户可以以自己的身份远程连接到计算机上，可提供基于DOS模式下的通信服务。 
（3） SMTP：邮件传送协议，用于发送邮件。服务器开放的是25号端口。 
（4） POP3：它是和SMTP对应，POP3用于接收邮件。POP3协议所用的是110端口。 
（5）HTTP：是从Web服务器传输超文本到本地浏览器的传送协议。 

UDP协议
（1） DNS：用于域名解析服务，将域名地址转换为IP地址。DNS用的是53号端口。 
（2） SNMP：简单网络管理协议，使用161号端口，是用来管理网络设备的。由于网络设备很多，无连接的服务就体现出其优势。 
（3） TFTP(Trival File Tran敏感词er Protocal)，简单文件传输协议，该协议在熟知端口69上使用UDP服务。
```

## Linux

#### 1. `cp` 命令

* -a：此选项通常在复制目录时使用，它保留链接、文件属性，并复制目录下的所有内容。其作用等于dpR参数组合。
* -d：复制时保留链接。这里所说的链接相当于Windows系统中的快捷方式。
* -f：覆盖已经存在的目标文件而不给出提示。
* -i：与-f选项相反，在覆盖目标文件之前给出提示，要求用户确认是否覆盖，回答"y"时目标文件将被覆盖。
* -p：除复制文件的内容外，还把修改时间和访问权限也复制到新文件中。
* -r：若给出的源文件是一个目录文件，此时将复制该目录下所有的子目录和文件。
* -l：不复制文件，只是生成链接文件。

使用 -r 参数可以将 packageA 下的所有文件拷贝到 packageB 中：

```shell
cp -r /home/packageA/* /home/cp/packageB/
```

#### 2. `grep` 命令

Linux grep 命令用于查找文件里符合条件的字符串。

grep 指令用于查找内容包含指定的范本样式的文件，如果发现某文件的内容符合所指定的范本样式，预设 grep 指令会把含有范本样式的那一列显示出来。若不指定任何文件名称，或是所给予的文件名为 -，则 grep 指令会从标准输入设备读取数据。

在当前目录中，查找后缀有 file 字样的文件中包含 test 字符串的文件，并打印出该字符串的行。此时，可以使用如下命令：

```shell
grep test *file 
```

系统报警显示了时间，但是日志文件太大无法直接 cat 查看。(查询含有特定文本的文件，并拿到这些文本所在的行)

```shell
grep -n '2019-10-24 00:01:11' *.log
```

从当前目录开始查找所有扩展名为 .in 的文本文件，并找出包含 "thermcontact" 的行：

```shell
find . -name "*.in" | xargs grep "thermcontact"
```

## 参考

* <https://github.com/markyun/My-blog/tree/master/Front-end-Developer-Questions/Questions-and-Answers>
* <https://sites.google.com/site/amitsciscozone/home/security/ssl-connection-setup>
* <http://robertheaton.com/2014/03/27/how-does-https-actually-work/>
* <http://www.cnblogs.com/lixiansen/p/5618541.html>
* <http://harttle.com/2016/01/22/doctype.html>
* <http://jerryzou.com/posts/cookie-and-web-storage/>
* <https://www.zhihu.com/question/20653055/answer/17786008>
* <https://developer.mozilla.org/zh-CN/docs/Web/HTML/Global_attributes>
* <http://blog.csdn.net/NJUPT_T/article/details/50700209>
* <http://web.jobbole.com/84826/>
* <http://web.jobbole.com/85340/>
* <http://blog.csdn.net/i10630226/article/details/54880363>
* <http://www.ruanyifeng.com/blog/2015/04/generator.html>
* <https://hijiangtao.github.io/2019/08/31/Webpack-Basic-Concepts/>
* <https://hijiangtao.github.io/2019/12/01/Introduction-of-webpack-plugin/>
