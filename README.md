# 网站信息无障碍
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](https://github.com/gemgin/AmblyopiaTool/pulls)
[![GitHub stars](https://img.shields.io/github/stars/gemgin/AmblyopiaTool.svg?style=social&label=Stars)](https://github.com/gemgin/AmblyopiaTool)
[![GitHub forks](https://img.shields.io/github/forks/gemgin/AmblyopiaTool.svg?style=social&label=Fork)](https://github.com/gemgin/AmblyopiaTool)

交流QQ群：26363996

## 前言

　　为了体现政府提供公共服务的公平、公正、均等化的要求，保障弱势群体获得政府公众服务的权利，我国政府近年一直致力于推动信息无障碍技术在各个领域的应用，先后制定《无障碍环境建设条例》、《网站设计无障碍技术要求》、《网站设计无障碍评级测试方法》等相关法规及行业标准。在建设服务型政府的大环境之下，信息无障碍服务成为政府主厅提高公众服务水平、扩大公众服务范围的新亮点。

## 项目介绍

　　TTS技术基于ScanSoft_MeiLing语音库，提供整套网站信息无障碍服务模块：十字光标、纯文本、文字放到专用阅读屏（简体，繁体和拼音）、高对比阅读配色器、文字放大缩小、网页放大缩小、全程语音实时朗读等，支持服务治理、监控和追踪，努力为政府网站无障碍改造解决方案。

## 网站信息无障碍解决方案
   
- 网站信息无障碍改造实施过程提供的服务 [https://www.rrbay.com/wza/wza-service](https://www.rrbay.com/wza/wza-service "网站信息无障碍改造实施过程提供的服务")  

### 信息无障碍工具条界面
![信息无障碍工具条界面](doc/%E6%97%A0%E9%9A%9C%E7%A2%8D%E5%B7%A5%E5%85%B7%E6%9D%A1%E7%95%8C%E9%9D%A2.png)

### 信息无障碍核心技术
![信息无障碍核心技术](doc/%E4%BF%A1%E6%81%AF%E6%97%A0%E9%9A%9C%E7%A2%8D%E6%A0%B8%E5%BF%83%E6%8A%80%E6%9C%AF.jpg)

### 信息无障碍改造流程
![信息无障碍改造流程](doc/%E6%97%A0%E9%9A%9C%E7%A2%8D%E6%9C%8D%E5%8A%A1%E6%B5%81%E7%A8%8B.jpg)

### 信息无障碍辅助工具部署步骤

> 以太阳湾信息无障碍公共服务平台为例，地址：http://www.qqqao.com/

- 1.将`canyou`文件夹放到 `http://www.qqqao.com` 站点指向的服务器目录下，保证`http://www.qqqao.com/canyou/`能够被访问到即可。

- 2.添加js.将下面一段js放在`http://www.qqqao.com`网站首页模板区间任意位置即可。一般网站头部和尾部都是模版区。建议放在网站每个页面的`</body>`之前
```
     <script type="text/javascript">
        function ShowDetail() {
           if (window.top.document.getElementById("rrbay_toolbar_div")) {
               return false;
           }
           var url = "?url=" + document.location.href;window.scrollTo(0, 0);
           location_href('canyou/default.html'  + url);
        }
        function location_href(url) { location.href = url }
    </script>
```
- 3.在首页位置添加链接，确保红色加粗的不变。可以使用任何html标签。确保该链接放在页面的易发现位置。链接代码如下：
```
   <a title="盲人朋友在线浏览按住Alt+g键"  onmousedown="ShowDetail()" accesskey="g">信息无障碍通道</a>。
```

> 测试部署是否成功

   在浏览器中输入地址或通过单击原网站头部无障碍操作条中的链接即可完成对网站的信息无障碍化访问。

> 申明:太阳湾信息无障碍公共服务平台工具条免费安装部署，要严格按照上面步骤部署安装修改,请保留太阳湾版权信息。


### 演示站点

- 工具条灰色模版 [http://www.qqqao.com/](http://www.qqqao.com/ "工具条灰色模版")

- 工具条蓝色模版 [http://www.qqqao.com/index2.html](http://www.qqqao.com/index2.html "工具条蓝色模版")

- 工具条纯蓝模版 [http://www.qqqao.com/index3.html](http://www.qqqao.com/index3.html "工具条纯蓝模版")

## 2019-09-20 信息无障碍工具条V1.6版本升级说明
- 修复 URL(/canyou/default.html?url=)存在基于DOM的跨站脚本漏洞
- 修复 URL(/canyou/default.html?url=)存在跳转漏洞

## 2019-12-31 信息无障碍工具条V1.6版本更新说明
- 修复 IE兼容模式下,工具条无法使用
- 修复 工具条下,F5刷新页面,音频失效问题
- 修复 音频守护进程问题

## 2020-07-06 信息无障碍工具条V1.6版本更新说明
- 新增两种工具条模板皮肤
- 详细查看 [https://www.rrbay.com/wza/wza-tool-three-themes](https://www.rrbay.com/wza/wza-tool-three-themes "详细查看")

## 2020-08-19 信息无障碍工具条V1.6版本更新说明
- 优化用户体验,第二种部署方式生成的js采用静态文件
- 新增video标签支持

## 2020-09-14 第二种无障碍工具条正式发布
- 一行代码部署无障碍工具条
- 新增无障碍功能快捷键支持
- 代码获取 [http://www.qqqao.com/index6.html](http://www.qqqao.com/index6.html "一行代码部署无障碍工具条")

## 2020-10-03 信息无障碍工具条V2.0版本更新说明
- 修复ajax异步加载标签指读显示问题
- 修复网页配色选项重音问题
- 修复声音选项显示问题
- 优化多处性能和安全问题
- 优化加载顺序问题

### License

GNU AFFERO GENERAL PUBLIC LICENSE Version 3, 19 November 2007
