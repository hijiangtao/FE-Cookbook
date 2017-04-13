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

### 函数表达式

* 定义函数有两种方式: 函数声明(重要特征: 函数声明提升)或者函数表达式(匿名函数);
* 当在函数内部定义了其他函数时,就创建了闭包.闭包有权访问包含函数内部的所有变量;
* 使用闭包可以在 JavaScript 中模仿块级作用域;
* 创建闭包必须维护额外的作用域,过度使用可能会占用大量内存;

### BOM



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
