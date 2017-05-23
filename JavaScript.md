# JavaScript

## JavaScript 高级程序设计笔记

### JavaScript 实现

一个完整的 JavaScript 实现由下列三个不同的部分组成:

* 核心 (ECMAScript)
* 文档对象模型 (DOM, 由 DOM Core 和 DOM HTML 组成, 其他 DOM 标准还包括 SVG, MathML, SMIL 等)
* 浏览器对象模型 (BOM, 提供与浏览器交互的方法与接口)

### ECMAScript 数据类型,操作符,语句与函数

* typeof 操作符: 用于检测给定变量的数据类型;
* Undefined 类型: 声明变量但未对其初始化;尚未声明;
* Null 类型: 空对象指针;
* Boolean 类型: true/false;
* Number 类型: 使用 IEEE754 格式来表示整数或者浮点数值;
* String 类型;
* Object 类型;
* ES6 中的基本数据类型是: Number, String, Null, Undefined, Symbol, Boolean, 用 typeof 可以检测出变量的基本数据类型, 其中 null 的 typeof 返回是 object;
* 在函数内部可以通过 arguments 对象来访问参数数组
* ECMAScript 中没有函数重载的概念
* 求膜运算和求余运算需要被区分, JavaScript 中的 % 实现的是求余运算

### 变量,作用域和内存问题

* 访问变量有按值和按引用两种方式,而参数只能按值传递;实际上,当在函数内部重写传入的对象时,这个变量引用的就是一个局部变量了
* instanceof 操作符: 用于检测引用类型值 (与 typeof 区分)

> Using typeof, you get a string representation of the object type. Using instanceof, you are comparing the type, specifically if the property of a constructor is in the objects prototype chain.

* 用 with 语句或者 try-catch 的 catch 块延长作用域链
* JavaScript 具有自动垃圾收集机制,垃圾收集策略包括标记清除和引用计数两种方式

### 引用类型

* Object 类型
* Array 类型: 数组的 length 属性并不是只读的; 数组的栈方法和队列方法: push() / pop() / shift() / unshift(); slice() 方法并不会影响原始数组
* Date 类型
* RegExp 类型
* Function 类型: 由于函数是对象,因此函数名称实际上也是一个指向函数对象的指针,不会与某个函数绑定; 函数声明与函数表达式; 作为值的函数; this 尹永德是函数据以执行的环境对象
* 基本包装类型: 引用类型与基本包装类型的主要区别就是对象的生存期
* 单体内置对象: 在所有代码执行之前,作用域中就已经存在两个内置对象: Global 和 Math; 全局变量核函数都是 Global 对象的属性

### 面向对象的程序设计

* 访问器属性包含一对 getter 和 setter 函数
* 原型对象
* 属性的可枚举性和所有权

<table><thead><tr><th>&nbsp;</th><th>in</th><th>for..in</th><th>hasOwnProperty</th><th>propertyIsEnumerable</th><th>在 Object.keys 返回结果中</th><th>在 Object.getOwnPropertyNames 返回结果中</th><th>在 Object.getOwnPropertyDescriptors 返回结果中</th></tr></thead><tbody><tr><th>可枚举自身属性</th><td>true</td><td>true</td><td>true</td><td>true</td><td>true</td><td>true</td><td>true</td></tr><tr><th>不可枚举自身属性</th><td>true</td><td>false</td><td>true</td><td>false</td><td>false</td><td>true</td><td>true</td></tr><tr><th>可枚举继承属性</th><td>true</td><td>true</td><td>false</td><td>false</td><td>false</td><td>false</td><td>false</td></tr><tr><th>不可枚举继承属性</th><td>true</td><td>false</td><td>false</td><td>false</td><td>false</td><td>false</td><td>false</td></tr><tr><th>包含键为 Symbols &nbsp;类型的属性</th><td>true</td><td>false</td><td>true</td><td>true</td><td>false</td><td>false</td><td>true</td></tr></tbody></table>

* 用字面量重写原型对象的方法和 `.prototype` 相比,除 constructor 属性不再指向对象外,其余结果均相同
* 原型的动态性: 实例中的指针仅指向原型,而不指向构造函数

```
function Person() {
}

var friend = new Person();

Person.prototype = {
    constructor: Person,
    name: 'Nicholas',
    sayName: function() {
        alert(this.name);
    }
};

friend.sayName(); //error
```

* 稳妥对象
* 接口继承只继承方法签名,而实现继承则继承实际的方法. ECMAScript 只支持实现继承;
* 继承模式: 原型链; 借用构造函数(超类型构造函数); 组合继承; 原型式继承; 寄生式继承; 寄生组合式继承;
* 寄生组合式继承,集寄生式继承和组合继承的优点与一身,是实现基于类型继承的最有效的方法;
* 了解函数的 `apply, call, bind` 方法;

### Design Patterns

* Constructor Pattern
* Module Pattern
* Revealing Module Pattern
* Singleton Pattern
* Observer Pattern
* Mediator Pattern
* Prototype Pattern
* Command Pattern
* Facade Pattern
* Factory Pattern
* Mixin Pattern
* Decorator Pattern
* Flyweight Pattern

A detailed demonstration can be accesssed at [Design-Patterns-in-Javascript](https://github.com/tcorral/Design-Patterns-in-Javascript).

### 函数表达式

* 定义函数有两种方式: 函数声明(重要特征: 函数声明提升)或者函数表达式(匿名函数);
* 当在函数内部定义了其他函数时,就创建了闭包.闭包有权访问包含函数内部的所有变量;
* 使用闭包可以在 JavaScript 中模仿块级作用域;
* 创建闭包必须维护额外的作用域,过度使用可能会占用大量内存;
* 在 JavaScript 中一共有四种调用模式: 方法调用模式,函数调用模式,构造器调用模式和 apply 调用模式, 这些模式在如何初始化关键参数 this 上存在差异;

### BOM

* window 对象: 表示浏览器的一个实例. 全局变量不能通过 delete 操作符删除,而直接在 window 对象上的定义的属性可以; 一般认为,使用超时调用来模拟间歇调用是一种最佳模式,由于后一个间歇调用可能会在前一个间歇调用结束之前启动,所以最好不要使用间歇调用; 系统对话框 `alert(), confirm(), prompt()` 都是同步和模态的; 
* location 对象: 提供了与当前窗口中加载的文档有关的信息; 
* navigator 对象: 识别客户端浏览器的事实标准;
* screen 对象: 表明客户端的能力;
* history 对象: 保存着用户上网的历史记录;

### 客户端检测

* 能力检测: 在可能的情况下,要尽量使用 typeof 进行能力检测;
* 怪癖检测: 识别浏览器的特殊行为 (bug);
* 用户代理检测: 能够检测出浏览器所用的呈现引擎,所在平台,包括移动设备以及游戏系统; 识别程序引擎的顺序应该为 Opera, WebKit, KHTML, Gecko, IE;

### DOM 与 DOM 扩展

* 虽然可以通过方括号语法来访问 NodeList 的值,而且这个对象也有 length 属性,但是它并不是 Array 的实例;
* Document: nodeType 值为9, 表示文档;
* Element: nodeType 值为1, 用于表示 XML 或者 HTML 元素;
* Text: nodeType 值为3, 包含可以照字面解释的纯文本内容;
* Comment: nodeType 值为8, 表示注释;
* CDATASelection: nodeType 值为4, 表示 CDATA 区域;
* DocumentType: nodeType 值为10, 包含与文档的 doctype 有关的所有信息;
* DocumentFragment: nodeType 值为11;
* Attr: nodeType 值为2;
* NodeList 对象是动态的,这意味着每次访问 NodeList 对象,都会运行一次查询;
* Selectors API Level 1 的选择符核心两个方法: querySelector(), querySelectorAll();
* Selectors API Level 2 为 Element 新增的一个方法: matchesSelector(), 暂且只有实验性的实现; 
* HTML5 与 DOM 节点相关的内容: [getElementsByClassName()](https://developer.mozilla.org/en/docs/Web/API/Document/getElementsByClassName), [classList](https://developer.mozilla.org/en/docs/Web/API/Element/classList), 焦点管理, HTMLDocument 的变化, 字符集属性, 自定义数据属性, 插入标记, [scrollIntoVIew()](https://developer.mozilla.org/en/docs/Web/API/Element/scrollIntoView)
* 专有扩展包括: 文档模式

### DOM2 & DOM3

* 遍历: DOM2 级遍历和范围定义了两个用于辅助完成顺序遍历 DOM 结构的类型: NodeIterator(), TreeWalker()

### 事件

* 事件流的概念分为事件冒泡(IE)和事件捕获(Netscape Communicator), "DOM2 级事件"规定的事件流包括三个阶段:事件捕获阶段,处于目标阶段和事件冒泡阶段;
* DOM0 中每个元素都有自己的事件处理程序属性,但对每个事件只支持一个事件处理程序;
* DOM2 级事件中定义了两个方法: addEventListener(), removeEventListener();
* DOM3 级事件规定了以下几类事件: UI 事件, 焦点事件, 鼠标事件, 滚轮事件, 文本事件, 键盘事件, 合成事件, 变动事件, 变动名称事件;
* DOM2 级事件处理程序方法接收三个参数,最后一个值为布尔值参数,若为true表示在捕获阶段调用事件处理程序;如果是false表示在冒泡阶段调用事件处理程序;
* 键盘与文本事件: 对数字字母字符键,keyCode 属性的值与 ASCII 码中对应小写字母或者数字的编码相同;
* HTML5 事件: contextmenu 事件(上下文菜单,冒泡), beforeunload 事件, DOMContentLoaded 事件, readystatechange 事件, pageshow / pagehide 事件, hashchange 事件;
* 设备事件: orientationchange 事件, MozOrientation 事件(实验性 API), deviceorientation 事件, devicemotion 事件;
* 触摸与手势事件: 在触摸屏幕上的元素时,事件的发生顺序为: touchstart, mouseover, mousemove(一次), mousedown, mouseup, click, touchend;
* 事件委托利用了事件冒泡,只指定一个事件处理程序,就可以管理某一类型的所有事件;

### 表单脚本

* HTML5 为表单字段新增了一个 autofocus 属性; 在默认情况下,只有表单字段可以获得焦点;
* 不建议使用标准的 DOM 方法去操作文本框内的值,因为对 value 属性所做的修改不一定会反映在 DOM 中;
* 过滤输入, 自动切换焦点;
* HTML5 约束验证 API: 比如 required 属性, 其他输入类型(email, url), 数值范围(min属性, max属性), 输入模式, 检测有效性(checkValidity() 方法, validity 属性), 禁用验证;
* 选择框的 change 事件只要选中了选项就会被触发;
* readonly 和 disabled 的区别: 他们是用在表单中的两个属性,它们都能够做到使用户不能够更改表单域中的内容.但是它们之间有着微小的差别,readonly 只针对 input(text/password) 和 textarea 有效，而 disabled 对于所有的表单元素都有效,包括 select, radio, checkbox, button 等; 但是表单元素在使用了 disabled 后,当我们将表单以 POST 或 GET 的方式提交的话,这个元素的值不会被传递出去,而 readonly 会将该值传递出去;

### 使用 Canvas 绘图

* 2D 上下文的两种基本绘图操作是填充和描边 (fillStyle 和 strokeStyle), 这两个属性值可以是字符串,渐变对象或者模式对象,默认值均为"#000000";
* 矩形: fillRect(), strokeRect(), clearRect();
* 路径: beginPath();
* 文本: fillText(), strokeText(), measureText();
* 变换: 如果你知道将来还要返回某组属性和变换的组合,可以调用 save() 方法;
* 绘制图像: drawImage();
* 阴影
* 渐变: createLinearGradient(), addColorStop(), createRadialGradient();
* 模式: 重复的图像,可以用来填充或描边图形, createPattern();
* 使用图像数据: getImageData();
* 合成: globalAlpha 属性和 globalCompositionOperation 属性;
* WebGL 是针对 Canvas 的 3D 上下文, WebGL 涉及的复杂计算需要提前知道数值的精度,而标准的 JavaScript 数值无法满足需要,为此 typed arrays (类型化数组)被引入, 其核心是一个名为 ArrayBuffer 的类型;
* 类型化数组是 WebGL 项目中执行各项操作的重要基础;
* WebGL 上下文
    * 常量: 类似于 `gl.COLOR_BUFFER_BIT` 的形式进行访问;
    * 方法命名
    * 准备绘图
    * 视口与坐标: viewport(), 坐标原点的不同;
    * 缓冲区: gl.createBuffer(), gl.bindBuffer();
    * 错误: JavaScript 与 WebGL 之间最大的一个区别在于, WebGL 操作一般不会抛出错误; 循环使用 gl.getError() 至 gl.NO_ERROR 找出错误;
    * 着色器: WebGL 中有两种着色器,定点着色器和片段着色器;
    * 编写着色器 & 编写着色器程序: 使用着色器的关键在于要有字符串形式的 GLSL 程序;
    * 为着色器传入值 & 调试着色器和程序;
    * 绘图: WebGL 只能绘制三种形状: 点,线和三角 (gl.drawArrays());
    * 纹理: 创建纹理 gl.createTexture();
    * 读取像素: readPixels();

### HTML5 脚本编程

* 跨文档消息传递(XDM): 在来自不同域的页面间传递消息;
* 原生拖放: 为了实现拖放操作时数据交换,dataTransfer 对象有两个主要方法,getData() 和 setData();
* HTML5 为所有 HTML 元素规定了一个 draggable 属性,表示元素是否可以拖动;
* 媒体元素: `<audio>` 和 `<video>`,两个元素都有一个 canPlayType() 方法,该方法接受一种格式/编解码器字符串,返回"probably","maybe"或"";
* 历史状态管理相关函数: `hashchange()`, `pushState()`, `replaceState()`;

### 错误处理与调试

* try-catch 语句: finally 子句一经使用,其代码无论如何都会执行;如果提供 finally 子句,则catch子句就成了可选的;
* 在遇到 throw 操作符时,代码会立即停止执行;
* 常见的错误类型: 类型转换错误,数据类型错误,通信错误;
* 基本类型的值应该用 typeof 检测,对象的值应该用 instanceof 来检测;
* URL 中若要查询字符串,请记住要使用 `encodeURIComponent()` 方法;
* console 具有如下方法: console.log('hello'), console.info('信息'), console.error('错误'), console.warn('警告');
* 常见的 IE 错误: 在修改尚未加载完成的页面时,就会发生操作中止错误;

### JavaScript 与 XML, JSON

* DOMParser 类型: 用于将 XML 解析为 DOM 类型;
* XMLSerializer 类型: 将 DOM 文档序列转化为 XML 字符串;
* 跨浏览器使用 XPath 最好只考虑实现 selectNode() 以及 selectNodes() 两个方法;
* JavaScript 字符串与 JSON 字符串最大的区别在于: JSON 字符串必须使用双引号表示; 另外, JSON 的语法可以表示三种类型的值: 简单值,对象以及数组;
* JSON 对象有两个方法: stringify() 将 JavaScript 对象序列化为 JSON 字符串, parse() 把 JSON 字符串解析为原生 JavaScript 值;
* 在序列化 JavaScript 对象时,所有函数及原型成员都会被有意忽略,不体现在结果中.此外,值为 undefined 的任何属性也会被跳过.结果中最终都是值为有效 JSON 数据类型的实例属性;
* JSON.stringify() 接受另外两个参数来定义过滤器以及 JSON 字符串是否保留缩进,理解序列化内部顺序十分重要;
* JSON.parse() 接受另一个参数,该参数为函数在每个键值对上调用;

### Ajax 与 Comet

* 原生 XHR 对象: `new XMLHttpRequest()`;
* 只能向同一个域中使用相同端口和协议的 URL 发送请求,如果 URL 与启动请求的页面有任何差别,都会引发安全错误;
* XHR 对象的 readyState 属性表示请求/响应过程的当前活动阶段;
* 在 readystatechange 事件中,使用实际的 XHR 对象实例变量是较为可靠的一种方法;
* CORS, Cross-origin resource sharing (跨源资源共享),定义了在必须访问跨源资源时浏览器与服务器应该如何沟通;
* 跨域资源共享的解决方法包括以下几种:
    * IE 对 CORS 的实现 (XDR);
    * 其他浏览器对 CORS 的实现;
    * Preflighted Requests;
    * 带凭据的请求;
    * 其他跨域技术1: 图像 Ping; JSONP; Comet; 服务器发送事件(SSE); Web Sockets;
* CSRF: 跨站点请求伪造;

### 高级技巧

* 安全的类型检测;
* 作用域安全的构造函数;
* 惰性载入函数;
* 函数绑定;
* 函数柯里化;
* 不可扩展对象;
* 密封的对象;
* 冻结的对象;
* 重复的定时器;
* Yielding Processes;
* 函数节流;
* 自定义事件;
* 拖放;

### 离线应用与客户端存储

* Cookie;
* Web storage 定义了两种用于存储数据的对象: sessionStorage (在一个浏览器会话中存储数据)和 localStorage (用于跨对话持久化数据并遵循跨域安全策略);
* IndexedDB (将数据保存在对象存储空间中);
* 不要在客户端存储敏感数据,因为数据缓存不会加密;

### 最佳实践

* 让 JavaScript, HTML, CSS 各自完全定义其自己的目的非常重要, JavaScript 定义行为, HTML 定义内容, CSS定义外观;
* DOM 交互开销很大,需要限制 DOM 操作次数;
* 循环性能与使用上,建议使用 switch 语句替代 if 语句;
* 在部署前推荐使用压缩器将文件尽可能变小;
* 和 HTTP 压缩一起使用可以让 JavaScript 文件尽可能小,因此对整体页面性能的影响也会最小;

### 新兴的 API 与其他

* [window.requestAnimationFrame()](https://developer.mozilla.org/en-US/docs/Web/API/window/requestAnimationFrame) - MDN
* [Page Visibility API](https://developer.mozilla.org/en-US/docs/Web/API/Page_Visibility_API) - MDN
* [File API](https://www.w3.org/TR/FileAPI/) - W3C
* Web Timing
* Web Workers
* JavaScript异步编程的四种方法: 回调函数,事件监听,发布/订阅模式(观察者模式),Promise对象;
