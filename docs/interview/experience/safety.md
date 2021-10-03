# 安全篇

## 同源策略
**同源策略（Same-origin policy）**：如果两个 URL 的协议、域名和端口都相同，我们就称这两个 URL 同源。

具体来讲，同源策略主要表现在 DOM、Web 数据和网络这三个层面:
1. **DOM 层面**: 同源策略限制了来自不同源的 JavaScript 脚本对当前 DOM 对象读和写的操作。
2. **数据层面**: 同源策略限制了不同源的站点读取当前站点的 Cookie、IndexDB、LocalStorage 等数据。
3. **网络层面**: 同源策略限制了通过 XMLHttpRequest 等方式将站点的数据发送给不同源的站点。

同源策略保证了 Web 页面的安全性，但为了便利性，浏览器出让了同源策略的某些安全性：
1. 页面中可以嵌入第三方资源，为了防止 XSS 攻击，浏览器中引入了内容安全策略，称为 CSP。
2. **跨域资源共享(CORS)**，使用该机制可以进行跨域访问控制，从而使跨域数据传输得以安全进行。
3. 跨文档消息机制，可以通过 window.postMessage 的 JavaScript 接口来和不同源的 DOM 进行通信。


## CSP
**内容安全策略**的核心思想是让服务器决定浏览器能够加载哪些资源，让服务器决定浏览器是否能够执行内联 JavaScript 代码。
它是一个额外的安全层，用于检测并削弱某些特定类型的攻击，包括跨站脚本 (XSS) 和数据注入攻击等。

为使CSP可用, 你需要配置你的网络服务器返回 `Content-Security-Policy` 的 HTTP 头部(有时你会看到一些关于X-Content-Security-Policy头部的提法, 那是旧版本，你无须再如此指定它)。
除此之外,  `<meta>` 元素也可以被用来配置该策略, 例如

```html
<meta http-equiv="Content-Security-Policy" content="default-src 'self'; img-src *; media-src media1.com media2.com; script-src *.userscripts.example.com;">
```

在这个示例中，各种内容默认仅允许从文档所在的源获取, 但存在如下例外:
- 图片可以从任何地方加载(注意 "*" 通配符)。
- 多媒体文件仅允许从 media1.com 和 media2.com 加载(不允许从这些站点的子域名)。
- 可运行脚本仅允许来自于userscripts.example.com及其子域名。


## 跨域问题
协议、域名、端口有一项不同即构成跨域，二级域名不同也会构成跨域。
同源策略只是浏览器客户端的防护机制，当发现非同源HTTP请求时会拦截响应，但服务器依然处理了这个请求。

解决跨域有以下几种方式：
1. API跨域可以通过服务器上nginx反向代理。
2. 本地webpack dev server可以设置 proxy。
3. cors需要后台配合设置HTTP响应头，如果请求不是简单请求（1. method：get，post，2. content-type：三种表单自带的content-type，3. 没有自定义的HTTP header），
  浏览器会先发送option预检请求，后端需要响应option请求（返回204 no-content），然后浏览器才会发送正式请求，cors通过白名单的形式允许指定的域发送请求。
4. jsonp是浏览器会放过 img script标签引入资源的方式。所以可以通过后端返回一段执行js函数的脚本，将数据作为参数传入。然后在前端执行这段脚本。双方约定一个函数的名称。
  资源请求是get类型，请求参数长度有限制，也不能进行post请求。

::: warning 
1. 如果使用跨域的资源画到 canvas 中，并且资源没有使用 CORS 去请求，canvas 会被认为是被污染了, canvas 可以正常展示，但是没办法使用 `toDataURL()` 或者 `toBlob()` 导出数据，
   见 [Allowing cross-origin use of images and canvas](https://developer.mozilla.org/en-US/docs/Web/HTML/CORS_enabled_image)。 
   所以通过在img标签上设置 crossorigin，启用 CORS，属性值为 anonymous，在 CORS 请求时不会发送认证信息，见[HTML attribute: crossorigin](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/crossorigin)。
2. 在启用 CORS 请求跨域资源时，资源必须允许跨域，才能正常返回，最简单的方式设置响应头 Access-Control-Allow-Origin。
3. 图片已经通过img标签加载过，浏览器默认会缓存下来，下次使用js方式再去请求，直接返回缓存的图片，如果缓存中的图片不是通过 CORS 请求或者响应头中不存在 Access-Control-Allow-Origin，都会导致报错。
:::


## SameSite
`eTLD + 1` 相同的站点可称为同站，eTLD 表示有效顶级域名：
- eTLD：com.cn
- eTLD+1：example.com.cn


## Cookie
Cookie，有时也用其复数形式 Cookies，指网站为了辨别用户身份、进行 session 跟踪而储存在用户本地终端上的数据（通常经过加密）。
定义于 RFC2109 和 2965 中的都已废弃，最新取代的规范是 [RFC6265](https://datatracker.ietf.org/doc/html/rfc6265)。

在浏览网站的过程中，若是一个网站设置了Cookie，那么在浏览器进程的生命周期内，即使浏览器新打开了Tab页，Cookie 也都是有效的， Cookie保存在浏览器进程的内存空间中。

与当前站点的域相匹配的 Cookie，即浏览器地址栏中显示的内容，称为第一方 cookie。类似地，来自当前站点以外的域的 Cookie 被称为第三方 Cookie。
当访问第三方域时，浏览器会自动带上第三方的 Cookie，这也为 CSRF 攻击提供了机会，可通过 Cookie 的 SameSite 属性限制。

::: tip SameSite cookies
- **Lax**：Cookies允许与顶级导航一起发送，并将与第三方网站发起的GET请求一起发送。这是浏览器中的默认值。
- **Strict**：Cookies只会在第一方上下文中发送，不会与第三方网站发起的请求一起发送。
- **None**：Cookie将在所有上下文中发送，即允许跨域发送。
:::

### Cookie的一些属性

| 属性名      | 属性说明   |
| :--------- | :-------  |
| maxAge     | Cookie有效期，单位秒。如果为整数，则该Cookie在maxAge秒后失效。如果为负数，该Cookie为临时Cookie，关闭浏览器即失效，浏览器也不会以任何形式保存该Cookie。如果为0，表示删除该Cookie。默认为-1 |
| Expires    | Cookie的失效时间，如果Cookie没有设置过期时间，那么 cookie 的生命周期只是在当前的会话中，关闭浏览器意味着这次会话的结束，此时 cookie 随之失效， 现在已经被maxAge属性所取代 | 
| secure     | 它是一个布尔值，指定在网络上如何传输Cookie，默认为false，通过一个普通的http连接传输，标记为true的Cookie只应通过被 HTTPS 协议加密过的请求发送给服务端 | 
| path       | Cookie的使用路径,path标识指定了主机下的哪些路径可以接受 Cookie（该 URL 路径必须存在于请求 URL 中）, 例如：如果设置为“/sessionWeb/”，则只有contextPath为“/sessionWeb”的程序可以访问该Cookie，如果设置为“/”，则本域名下contextPath都可以访问该Cookie。注意最后一个字符必须为“/” |
| domain     | domain标识指定了哪些主机可以访问该Cookie的域名。如果设置为“.google.com”，则所有以“google.com”结尾的域名都可以访问该Cookie。注意第一个字符必须为“.” |


## XSS
**跨站脚本攻击**，英文全称是Cross Site Script。XSS攻击，通常是指黑客通过“HTML注入”篡改了网页，插入了恶意的脚本，
从而在用户浏览网页时，控制用户浏览器的一种攻击。在一开始，这种攻击的演示案例是跨域的，所以叫“跨站脚本”。但是发展到今天，由于
JavaScript的强大功能以及网站前端应用的复杂化，是否跨域已经不重要。

XSS攻击有以下分类：
- **反射型XSS**只是简单地把用户输入地数据“反射”给浏览器。也就是说，黑客往往需要诱使用户“点击”一个恶意链接，才能成功。
- **存储型XSS**会把用户输入地数据“存储”在服务器端。这种XSS具有很强地稳定性。
- **DOM Based XSS**是通过修改页面的DOM节点形成的XSS。

DOM型XSS跟前面两种XSS的区别：DOM型XSS攻击中，取出和执行恶意代码由浏览器端完成，属于前端Javascript自身的漏洞，
而其他两种都属于服务端的安全漏洞。

XSS注入的方法：
- 在HTML中内嵌的文本中，恶意内容以script标签形式注入
- 在内联的Javascript中，拼接的数据突破了原本的限制
- 在标签属性中，恶意内容包含引号，从而突破属性的限制，注入其它属性或标签
- 在标签的href、src等属性中，包含javascript: 等可执行代码
- 在onload、onerror、onclick等事件中，注入不受控制代码
- 在style属性和标签中，包含类似`background-image: url("javascript:...");`的代码 (新版本浏览器已经可以防范) 
- 在style属性和标签中，包含类似`expression(...);`的代码 (新版本浏览器已经可以防范) 

XSS攻击的危害：
- Cookie劫持，可以通过document.cookie获取用户的cookie信息
- 构造GET与POST请求
- 识别用户的浏览器
- 识别用户安装的软件
- 获取用户曾经访问过的网站
- XSS Worm

XSS的防御
- 服务器发送Set-Cookie头，设置**HttpOnly**
- 输入检查和长度限制，（对<、>、'、"等特殊字符转义，假如要输出到多个端就不适用了）
- 输出检查，json数据要采取特殊的转义
- 富文本禁止事件，过滤危险标签`<iframe>`,`script`,`base`,`form`，建议使用白名单。
- 对于链接跳转，如`<a href="xxx"` 或 `location.href="xxx"`，要禁止以javascript开头的链接和其他非法的scheme。
- 避免拼接HTML，使用createElement.setAttribute的方法实现

**HtmlEncode:**
| 原字符      | 转义字符   |
| :--------- | :-------  |
| &          | \&amp;    |
| <          | \&lt;     | 
| >          | \&gt;     | 
| "          | \&quot;   |
| '          | \&#x27;   | 
| /          | \&#x2F;   | 


## CSRF
CSRF的全名是Cross Site Request Forgery，翻译成中文就是跨站点请求伪造。
攻击者诱导受害者进入第三方网站，在第三方网站中，向被攻击网站发送跨站请求。利用受害者在被攻击网站已经获取的注册凭证，
绕过后台的用户验证，达到冒充用户对被攻击的网站执行某项操作的目的。

CSRF通常是跨域的，因为外域通常更容易被攻击者掌控。但是如果本域下有容易被利用的功能，比如可以发图和链接的论坛和评论区，攻击
可以直接在本域进行，而且这种攻击更加危险。

CSRF的特点：
- 攻击一般发起在第三方网站，而不是被攻击的网站。被攻击的网站无法防止攻击发生。
- 攻击利用受害者在被攻击网站的登录凭证，冒充受害者提交操作；而不是直接窃取数据。
- 跨站请求可以用各种方式：图片URL、超链接、CORS、Form提交等等。

CSRF的防御：
- 验证码
- 充分利用好 Cookie 的 SameSite 属性
- 验证请求的来源站点，Referer 是 HTTP 请求头中的一个字段，记录了该 HTTP 请求的来源地址，但在服务器端验证请求头中的 Referer 并不是太可靠，
    因此标准委员会又制定了 Origin 属性，在一些重要的场合，比如通过 XMLHttpRequest、Fecth 发起跨站请求或者通过 Post 方法发送请求时，都会带上 Origin 属性
- CSRF Token


## ClickJacking
点击劫持是一种视觉上的欺骗手段。攻击者使用一个透明的、不可见的iframe，覆盖在一个网页上，然后诱使用户在该网页上进行操作，
此时用户将在不知情的情况下点击透明的iframe页面。


## DDOS
DDOS又称分布式拒绝服务，全程是Distributed Denial of Service。DDOS本是利用合理的请求造成资源过载，导致服务不可用。


## 运营商劫持
一般情况下，运营商劫持指http劫持
在用户的客户端与其要访问的服务器经过网络协议协调后，二者之间建立了一条专用的数据通道，用户端程序在系统中开放指定网络端口用于接收数据报文，服务器端将全部数据按指定网络协议规则进行分解打包，形成连续数据报文。
HTTP劫持是在使用者与其目的网络服务所建立的专用数据通道中，监视特定数据信息，提示当满足设定的条件时，就会在正常的数据流中插入精心设计的网络数据报文，目的是让用户端程序解释“错误”的数据，并以弹出新窗口的形式在使用者界面展示宣传性广告或者直接显示某网站的内容。
这是目前各大运营商向用户访问的页面中注入广告的主要途径，用于谋取额外的利益。
