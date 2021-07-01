# HTML

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