# FE-Cookbook

## JavaScript

### Language Standard Internal

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

* 在函数内部可以通过 arguments 对象来访问参数数组;
* ECMAScript 中没有函数重载的概念;
* 

### 变量,作用域和内存问题

* 访问变量有按值和按引用两种方式,而参数只能按值传递;实际上,当在函数内部重写传入的对象时,这个变量引用的就是一个局部变量了;
* instanceof 操作符: 用于检测引用类型值 (与 typeof 区分);

> Using typeof, you get a string representation of the object type. Using instanceof, you are comparing the type, specifically if the property of a constructor is in the objects prototype chain.

* 用 with 语句或者 try-catch 的 catch 块延长作用域链;
* JavaScript 具有自动垃圾收集机制,垃圾收集策略包括标记清除和引用计数两种方式;

### 引用类型

* Object 类型
* Array 类型: 数组的 length 属性并不是只读的; 数组的栈方法和队列方法: push() / pop() / shift() / unshift(); slice() 方法并不会影响原始数组;
* Date 类型
* RegExp 类型
* Function 类型: 由于函数是对象,因此函数名称实际上也是一个指向函数对象的指针,不会与某个函数绑定; 函数声明与函数表达式; 作为值的函数; this 尹永德是函数据以执行的环境对象;
* 基本包装类型
* 单体内置对象

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

### Ideas

### Bundle

* webpack

## LICENSE

Apache 2.0

## Contact

Joe Jiang, [Email](mailto:hijiangtao@gmail.com)
