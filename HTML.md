# HTML5

## 音频和视频

HTML5 的音频和视频元素 (audio/video) 使得在网页上不用插件即可使用媒体文件,此外 audio 和 video 元素还提供了通用的,集成化的,可脚本控制的 API; 需要了解 audio/video 的容器文件,编解码器以及如果让浏览器自动选择合适媒体类型进行播放的机制.

##  Geolocation API

HTML5 Geolocation API 返回坐标的格式为十进制格式. 位置信息由于采用不同数据源具有不同的特点:

* IP 地址获取定位数据的优点是在任何地方都可用,但是其定位精度不高且运算代价大;
* GPS 获取定位数据定位精确,但是定位时间长,需要额外硬件设备且室内效果不好;
* Wi-Fi 获取定位数据采用三角距离计算,定位精确,可简单快捷定位,但是在乡村等无线接入点较少的地区效果不好;
* 手机基站获取定位数据依据基站位置计算,优点与 Wi-Fi 定位相同,但缺点为需要能够访问手机的设备,且在基站较少的偏远地区效果不好;
* 用户自定义地理定位数据,如邮编等等;

在浏览器中实现请查阅 [Navigator.geolocation](https://developer.mozilla.org/en-US/docs/Web/API/Navigator/geolocation) API.

## Communication API

跨文档消息通信使用 `postMessage()` 实现, 详情见 [MDN](https://developer.mozilla.org/zh-CN/docs/Web/API/Window/postMessage).

XMLHttpRequest Level 2 主要有两方面的特点: 跨源 XMLHttpRequests  以及进度事件.其主要的改进为对 readystatechange 事件的改进.

## WebSockets API

通过换用 HTML5 WebSockets 来替代轮询实现可以减少不必要的网络流量

##  Forms API

HTML5 Forms API 新增的特性,海曙以及元素包括 `placeholder`, `autocomplete`, `autofocus`, list 特性和 [datalist](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/datalist) 元素 (Safari不支持), min 和 max, `step`, `valueAsNumber` 函数和 `required`.

## Web Workers API

## Web Storage API

* `sessionStorage`: 只要浏览器窗口(或标签)不关闭它们就会一直存在. 
* `localStorage`: 生命周期更长,数据可被同源的每个窗口或者标签页共享.
* Web SQL Database 是一个已经废弃的规范，但是鉴于除了IE和Firefox，其它浏览器都已经实现了 Web SQL Database,并且它还具有一些 HTML5 Storage 所不具有的特性，所以还是值得了解一下的.

## 构建离线 Web 应用

[application cache](https://developer.mozilla.org/en-US/docs/Web/HTML/Using_the_application_cache) 被废弃了，采用 [Service Workers](https://developer.mozilla.org/en-US/docs/Web/API/Service_Worker_API/Using_Service_Workers) 替代(目前仍为实验阶段)

## HTML5 未来展望

* WebGL
* 设备
* 音频数据 API
* 视频元素改进
* 触摸屏设备事件
* P2P 网络
