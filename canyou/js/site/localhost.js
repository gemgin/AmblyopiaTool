var AriaSite = {};
AriaSite["selNav"] = [
        { "selector": ".rrbay_body > div#page.page > header#home.header8 > nav.navbar.navbar-default > div.container", "content": "顶部导航,按tab键浏览" },
           { "selector": ".rrbay_body > div#wrapper > div#header > div.wz2aColor", "content": "测试" },
       { "selector": ".rrbay_body > div.wrapper > ul.tab", "content": "通许要问、乡镇动态、部门动态和国务院" },
];
AriaSite["selInfoModel"] = [
{ "selector": ".rrbay_body > div#page.page > header#home.header8 > div.intro.center-content > div.container > div.row > a#logo", "content": "信息无障碍公共服务平台产品演示" },
{ "selector": ".rrbay_body > div#wrapper > div#footer", "content": "网站底部" },
  { "selector": ".rrbay_body > div.wrapper > ul.tab > li:nth-child(1)", "content": "通许要问", "tabEvent": "mouseover", "tabContentSelector": ".rrbay_body > div.wrapper > div.products > div:nth-child(1)" },
  { "selector": ".rrbay_body > div.wrapper > ul.tab > li:nth-child(2)", "content": "乡镇动态", "tabEvent": "mouseover", "tabContentSelector": ".rrbay_body > div.wrapper > div.products > div:nth-child(2)" },
  { "selector": ".rrbay_body > div.wrapper > ul.tab > li:nth-child(3)", "content": "部门动态", "tabEvent": "mouseover", "tabContentSelector": ".rrbay_body > div.wrapper > div.products > div:nth-child(3)" },
  { "selector": ".rrbay_body > div.wrapper > ul.tab > li:nth-child(4)", "content": "国务院", "tabEvent": "mouseover", "tabContentSelector": ".rrbay_body > div.wrapper > div.products > div:nth-child(4)" },
];
AriaSite["selService"] = [
 { "selector": ".rrbay_body > div#page.page > footer.footer8 > div.container", "content": "网站底部,按tab键浏览" },
];
AriaSite["selInteract"] = [
{ "selector": ".rrbay_body > div.main > div.head > div.head_content", "content": "搜索" },
];

AriaSite["selNewsList"] = [
{ "selector": ".rrbay_body > div#wrapper > div#main > div#sidebar> ul#nav", "content": "左侧列表" },
];
AriaSite["selNewsBody"] = [
	{ "selector": ".rrbay_body > div#page.page > header#home.header8 > div.intro.center-content > div.container > div.row > div#content", "content": "按tab键浏览" },
];


(function () {
    //智能解析方式改造网站
    $("img[src='res/logo.jpg']").attr("alt", "湖北太阳湾官方网站logo链接").attr("tabindex", "0");
})();

