# FE-Cookbook

## JavaScript

### JavaScript 实现

一个完整的 JavaScript 实现由下列三个不同的部分组成:

* 核心 (ECMAScript)
* 文档对象模型 (DOM, 由 DOM Core 和 DOM HTML 组成, 其他 DOM 标准还包括 SVG, MathML, SMIL 等)
* 浏览器对象模型 (BOM, 提供与浏览器交互的方法与接口)

### ECMAScript 数据类型

* typeof 操作符: 用于检测给定变量的数据类型;
* Undefined 类型: 声明变量但未对其初始化;尚未声明;
* Null 类型: 空对象指针;
* Boolean 类型: true/false;
* Number 类型: 使用 IEEE754 格式来表示整数或者浮点数值;
* String 类型;
* Object 类型;

### ECMAScript 操作符, 语句与函数

* 在函数内部可以通过 arguments 对象来访问参数数组
* ECMAScript 中没有函数重载的概念
* 

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

<table>
 <thead>
  <tr>
   <th>&nbsp;</th>
   <th>in</th>
   <th>for..in</th>
   <th>hasOwnProperty</th>
   <th>propertyIsEnumerable</th>
   <th>在 Object.keys 返回结果中</th>
   <th>在 Object.getOwnPropertyNames 返回结果中</th>
   <th>在 Object.getOwnPropertyDescriptors 返回结果中</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <th>可枚举自身属性</th>
   <td>true</td>
   <td>true</td>
   <td>true</td>
   <td>true</td>
   <td>true</td>
   <td>true</td>
   <td>true</td>
  </tr>
  <tr>
   <th>不可枚举自身属性</th>
   <td>true</td>
   <td>false</td>
   <td>true</td>
   <td>false</td>
   <td>false</td>
   <td>true</td>
   <td>true</td>
  </tr>
  <tr>
   <th>可枚举继承属性</th>
   <td>true</td>
   <td>true</td>
   <td>false</td>
   <td>false</td>
   <td>false</td>
   <td>false</td>
   <td>false</td>
  </tr>
  <tr>
   <th>不可枚举继承属性</th>
   <td>true</td>
   <td>false</td>
   <td>false</td>
   <td>false</td>
   <td>false</td>
   <td>false</td>
   <td>false</td>
  </tr>
  <tr>
   <th>包含键为 Symbols &nbsp;类型的属性</th>
   <td>true</td>
   <td>false</td>
   <td>true</td>
   <td>true</td>
   <td>false</td>
   <td>false</td>
   <td>true</td>
  </tr>
 </tbody>
</table>

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

* 

## HTML

* [World Wide Web](https://en.wikipedia.org/wiki/World_Wide_Web)

## CSS

### Language Standard Internal

### Spots

* [Color](https://developer.mozilla.org/en-US/docs/Web/CSS/color_value)

## Tools

### Web Related

* [HTTP协议入门](http://www.ruanyifeng.com/blog/2016/08/http.html)
* [Color Picker](http://colorizer.org/)
* [Simple Icons](https://simpleicons.org/), SVG icons for popular brands

### Ideas

### Bundle

* webpack

## LICENSE

Apache 2.0

## Contact

Joe Jiang, [Email](mailto:hijiangtao@gmail.com)
