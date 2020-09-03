export const har = {
  log: {
    version: "1.2",
    creator: {
      name: "WebInspector",
      version: "537.36",
    },
    pages: [
      {
        startedDateTime: "2020-09-03T03:33:53.727Z",
        id: "page_1",
        title: "http://www.softwareishard.com/blog/har-12-spec/",
        pageTimings: {
          onContentLoad: 1405.0590000006196,
          onLoad: 1491.3960000003499,
        },
      },
    ],
    entries: [
      {
        _initiator: {
          type: "other",
        },
        _priority: "VeryHigh",
        _resourceType: "document",
        cache: {},
        connection: "4263",
        pageref: "page_1",
        request: {
          method: "GET",
          url: "http://www.softwareishard.com/blog/har-12-spec/",
          httpVersion: "HTTP/1.1",
          headers: [
            {
              name: "Host",
              value: "www.softwareishard.com",
            },
            {
              name: "Connection",
              value: "keep-alive",
            },
            {
              name: "Cache-Control",
              value: "max-age=0",
            },
            {
              name: "DNT",
              value: "1",
            },
            {
              name: "Upgrade-Insecure-Requests",
              value: "1",
            },
            {
              name: "User-Agent",
              value:
                "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/85.0.4183.83 Safari/537.36",
            },
            {
              name: "Accept",
              value:
                "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
            },
            {
              name: "Referer",
              value: "https://www.google.com/",
            },
            {
              name: "Accept-Encoding",
              value: "gzip, deflate",
            },
            {
              name: "Accept-Language",
              value: "en-US,en;q=0.9",
            },
          ],
          queryString: [],
          cookies: [],
          headersSize: 523,
          bodySize: 0,
        },
        response: {
          status: 200,
          statusText: "OK",
          httpVersion: "HTTP/1.1",
          headers: [
            {
              name: "Date",
              value: "Thu, 03 Sep 2020 03:33:53 GMT",
            },
            {
              name: "Server",
              value: "Apache/2.4.10 (Debian)",
            },
            {
              name: "X-Powered-By",
              value: "PHP/5.6.40-0+deb8u12",
            },
            {
              name: "X-Pingback",
              value: "http://www.softwareishard.com/blog/xmlrpc.php",
            },
            {
              name: "Link",
              value:
                '<http://www.softwareishard.com/blog/wp-json/>; rel="https://api.w.org/", <http://www.softwareishard.com/blog/?p=75>; rel=shortlink',
            },
            {
              name: "Vary",
              value: "User-Agent,Accept-Encoding",
            },
            {
              name: "Content-Encoding",
              value: "gzip",
            },
            {
              name: "Cache-Control",
              value: "max-age=7200",
            },
            {
              name: "Expires",
              value: "Thu, 03 Sep 2020 05:33:53 GMT",
            },
            {
              name: "Content-Length",
              value: "14024",
            },
            {
              name: "Keep-Alive",
              value: "timeout=5, max=100",
            },
            {
              name: "Connection",
              value: "Keep-Alive",
            },
            {
              name: "Content-Type",
              value: "text/html; charset=UTF-8",
            },
          ],
          cookies: [],
          content: {
            size: 69556,
            mimeType: "text/html",
            compression: 55532,
            text:
              '<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">\n<html xmlns="http://www.w3.org/1999/xhtml">\n\n<head profile="http://gmpg.org/xfn/11">\n\t<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />\n\n\t<title>HAR 1.2 Spec | Software is hard</title>\n\t\n\t<meta name="generator" content="WordPress 4.7.18" />\n\t<meta name="description" content="More musings on software development" />\n\n\n\t<style type="text/css" media="screen">\n\t\t@import url( http://www.softwareishard.com/blog/wp-content/themes/miniBits/miniBits/style.css );\n\t</style>\n\n\t<link rel="alternate" type="application/rss+xml" title="RSS 2.0" href="http://www.softwareishard.com/blog/feed/" />\n\t<link rel="alternate" type="text/xml" title="RSS .92" href="http://www.softwareishard.com/blog/feed/rss/" />\n\t<link rel="alternate" type="application/atom+xml" title="Atom 0.3" href="http://www.softwareishard.com/blog/feed/atom/" />\n\t<link rel="pingback" href="http://www.softwareishard.com/blog/xmlrpc.php" />\n    \t<link rel=\'archives\' title=\'June 2017\' href=\'http://www.softwareishard.com/blog/2017/06/\' />\n\t<link rel=\'archives\' title=\'February 2017\' href=\'http://www.softwareishard.com/blog/2017/02/\' />\n\t<link rel=\'archives\' title=\'April 2016\' href=\'http://www.softwareishard.com/blog/2016/04/\' />\n\t<link rel=\'archives\' title=\'March 2015\' href=\'http://www.softwareishard.com/blog/2015/03/\' />\n\t<link rel=\'archives\' title=\'June 2014\' href=\'http://www.softwareishard.com/blog/2014/06/\' />\n\t<link rel=\'archives\' title=\'March 2014\' href=\'http://www.softwareishard.com/blog/2014/03/\' />\n\t<link rel=\'archives\' title=\'September 2013\' href=\'http://www.softwareishard.com/blog/2013/09/\' />\n\t<link rel=\'archives\' title=\'August 2013\' href=\'http://www.softwareishard.com/blog/2013/08/\' />\n\t<link rel=\'archives\' title=\'July 2013\' href=\'http://www.softwareishard.com/blog/2013/07/\' />\n\t<link rel=\'archives\' title=\'June 2013\' href=\'http://www.softwareishard.com/blog/2013/06/\' />\n\t<link rel=\'archives\' title=\'May 2013\' href=\'http://www.softwareishard.com/blog/2013/05/\' />\n\t<link rel=\'archives\' title=\'February 2013\' href=\'http://www.softwareishard.com/blog/2013/02/\' />\n\t<link rel=\'archives\' title=\'January 2013\' href=\'http://www.softwareishard.com/blog/2013/01/\' />\n\t<link rel=\'archives\' title=\'December 2012\' href=\'http://www.softwareishard.com/blog/2012/12/\' />\n\t<link rel=\'archives\' title=\'November 2012\' href=\'http://www.softwareishard.com/blog/2012/11/\' />\n\t<link rel=\'archives\' title=\'October 2012\' href=\'http://www.softwareishard.com/blog/2012/10/\' />\n\t<link rel=\'archives\' title=\'August 2012\' href=\'http://www.softwareishard.com/blog/2012/08/\' />\n\t<link rel=\'archives\' title=\'July 2012\' href=\'http://www.softwareishard.com/blog/2012/07/\' />\n\t<link rel=\'archives\' title=\'June 2012\' href=\'http://www.softwareishard.com/blog/2012/06/\' />\n\t<link rel=\'archives\' title=\'May 2012\' href=\'http://www.softwareishard.com/blog/2012/05/\' />\n\t<link rel=\'archives\' title=\'March 2012\' href=\'http://www.softwareishard.com/blog/2012/03/\' />\n\t<link rel=\'archives\' title=\'February 2012\' href=\'http://www.softwareishard.com/blog/2012/02/\' />\n\t<link rel=\'archives\' title=\'July 2011\' href=\'http://www.softwareishard.com/blog/2011/07/\' />\n\t<link rel=\'archives\' title=\'June 2011\' href=\'http://www.softwareishard.com/blog/2011/06/\' />\n\t<link rel=\'archives\' title=\'May 2011\' href=\'http://www.softwareishard.com/blog/2011/05/\' />\n\t<link rel=\'archives\' title=\'March 2011\' href=\'http://www.softwareishard.com/blog/2011/03/\' />\n\t<link rel=\'archives\' title=\'February 2011\' href=\'http://www.softwareishard.com/blog/2011/02/\' />\n\t<link rel=\'archives\' title=\'January 2011\' href=\'http://www.softwareishard.com/blog/2011/01/\' />\n\t<link rel=\'archives\' title=\'December 2010\' href=\'http://www.softwareishard.com/blog/2010/12/\' />\n\t<link rel=\'archives\' title=\'November 2010\' href=\'http://www.softwareishard.com/blog/2010/11/\' />\n\t<link rel=\'archives\' title=\'October 2010\' href=\'http://www.softwareishard.com/blog/2010/10/\' />\n\t<link rel=\'archives\' title=\'September 2010\' href=\'http://www.softwareishard.com/blog/2010/09/\' />\n\t<link rel=\'archives\' title=\'August 2010\' href=\'http://www.softwareishard.com/blog/2010/08/\' />\n\t<link rel=\'archives\' title=\'July 2010\' href=\'http://www.softwareishard.com/blog/2010/07/\' />\n\t<link rel=\'archives\' title=\'June 2010\' href=\'http://www.softwareishard.com/blog/2010/06/\' />\n\t<link rel=\'archives\' title=\'May 2010\' href=\'http://www.softwareishard.com/blog/2010/05/\' />\n\t<link rel=\'archives\' title=\'March 2010\' href=\'http://www.softwareishard.com/blog/2010/03/\' />\n\t<link rel=\'archives\' title=\'February 2010\' href=\'http://www.softwareishard.com/blog/2010/02/\' />\n\t<link rel=\'archives\' title=\'January 2010\' href=\'http://www.softwareishard.com/blog/2010/01/\' />\n\t<link rel=\'archives\' title=\'November 2009\' href=\'http://www.softwareishard.com/blog/2009/11/\' />\n\t<link rel=\'archives\' title=\'October 2009\' href=\'http://www.softwareishard.com/blog/2009/10/\' />\n\t<link rel=\'archives\' title=\'September 2009\' href=\'http://www.softwareishard.com/blog/2009/09/\' />\n\t<link rel=\'archives\' title=\'July 2009\' href=\'http://www.softwareishard.com/blog/2009/07/\' />\n\t<link rel=\'archives\' title=\'May 2009\' href=\'http://www.softwareishard.com/blog/2009/05/\' />\n\t<link rel=\'archives\' title=\'April 2009\' href=\'http://www.softwareishard.com/blog/2009/04/\' />\n\t<link rel=\'archives\' title=\'March 2009\' href=\'http://www.softwareishard.com/blog/2009/03/\' />\n\t<link rel=\'archives\' title=\'January 2009\' href=\'http://www.softwareishard.com/blog/2009/01/\' />\n\t<link rel=\'archives\' title=\'December 2008\' href=\'http://www.softwareishard.com/blog/2008/12/\' />\n\t<link rel=\'archives\' title=\'November 2008\' href=\'http://www.softwareishard.com/blog/2008/11/\' />\n\t<link rel=\'archives\' title=\'October 2008\' href=\'http://www.softwareishard.com/blog/2008/10/\' />\n\t<link rel=\'archives\' title=\'September 2008\' href=\'http://www.softwareishard.com/blog/2008/09/\' />\n\t<link rel=\'archives\' title=\'August 2008\' href=\'http://www.softwareishard.com/blog/2008/08/\' />\n\t<link rel=\'archives\' title=\'July 2008\' href=\'http://www.softwareishard.com/blog/2008/07/\' />\n\t<link rel=\'archives\' title=\'June 2008\' href=\'http://www.softwareishard.com/blog/2008/06/\' />\n\t<link rel=\'archives\' title=\'May 2008\' href=\'http://www.softwareishard.com/blog/2008/05/\' />\n\t<link rel=\'archives\' title=\'April 2008\' href=\'http://www.softwareishard.com/blog/2008/04/\' />\n\t<link rel=\'archives\' title=\'March 2008\' href=\'http://www.softwareishard.com/blog/2008/03/\' />\n\t<link rel=\'archives\' title=\'February 2008\' href=\'http://www.softwareishard.com/blog/2008/02/\' />\n\t\r\n\t  \n<!-- All in One SEO Pack 2.3.12.2.1 by Michael Torbert of Semper Fi Web Design[280,318] -->\n<link rel="canonical" href="http://www.softwareishard.com/blog/har-12-spec/" />\n<!-- /all in one seo pack -->\n<link rel=\'dns-prefetch\' href=\'//s.w.org\' />\n<link rel="alternate" type="application/rss+xml" title="Software is hard &raquo; HAR 1.2 Spec Comments Feed" href="http://www.softwareishard.com/blog/har-12-spec/feed/" />\n\t\t<script type="text/javascript">\n\t\t\twindow._wpemojiSettings = {"baseUrl":"https:\\/\\/s.w.org\\/images\\/core\\/emoji\\/2.2.1\\/72x72\\/","ext":".png","svgUrl":"https:\\/\\/s.w.org\\/images\\/core\\/emoji\\/2.2.1\\/svg\\/","svgExt":".svg","source":{"concatemoji":"http:\\/\\/www.softwareishard.com\\/blog\\/wp-includes\\/js\\/wp-emoji-release.min.js?ver=4.7.18"}};\n\t\t\t!function(a,b,c){function d(a){var b,c,d,e,f=String.fromCharCode;if(!k||!k.fillText)return!1;switch(k.clearRect(0,0,j.width,j.height),k.textBaseline="top",k.font="600 32px Arial",a){case"flag":return k.fillText(f(55356,56826,55356,56819),0,0),!(j.toDataURL().length<3e3)&&(k.clearRect(0,0,j.width,j.height),k.fillText(f(55356,57331,65039,8205,55356,57096),0,0),b=j.toDataURL(),k.clearRect(0,0,j.width,j.height),k.fillText(f(55356,57331,55356,57096),0,0),c=j.toDataURL(),b!==c);case"emoji4":return k.fillText(f(55357,56425,55356,57341,8205,55357,56507),0,0),d=j.toDataURL(),k.clearRect(0,0,j.width,j.height),k.fillText(f(55357,56425,55356,57341,55357,56507),0,0),e=j.toDataURL(),d!==e}return!1}function e(a){var c=b.createElement("script");c.src=a,c.defer=c.type="text/javascript",b.getElementsByTagName("head")[0].appendChild(c)}var f,g,h,i,j=b.createElement("canvas"),k=j.getContext&&j.getContext("2d");for(i=Array("flag","emoji4"),c.supports={everything:!0,everythingExceptFlag:!0},h=0;h<i.length;h++)c.supports[i[h]]=d(i[h]),c.supports.everything=c.supports.everything&&c.supports[i[h]],"flag"!==i[h]&&(c.supports.everythingExceptFlag=c.supports.everythingExceptFlag&&c.supports[i[h]]);c.supports.everythingExceptFlag=c.supports.everythingExceptFlag&&!c.supports.flag,c.DOMReady=!1,c.readyCallback=function(){c.DOMReady=!0},c.supports.everything||(g=function(){c.readyCallback()},b.addEventListener?(b.addEventListener("DOMContentLoaded",g,!1),a.addEventListener("load",g,!1)):(a.attachEvent("onload",g),b.attachEvent("onreadystatechange",function(){"complete"===b.readyState&&c.readyCallback()})),f=c.source||{},f.concatemoji?e(f.concatemoji):f.wpemoji&&f.twemoji&&(e(f.twemoji),e(f.wpemoji)))}(window,document,window._wpemojiSettings);\n\t\t</script>\n\t\t<style type="text/css">\nimg.wp-smiley,\nimg.emoji {\n\tdisplay: inline !important;\n\tborder: none !important;\n\tbox-shadow: none !important;\n\theight: 1em !important;\n\twidth: 1em !important;\n\tmargin: 0 .07em !important;\n\tvertical-align: -0.1em !important;\n\tbackground: none !important;\n\tpadding: 0 !important;\n}\n</style>\n<link rel=\'stylesheet\' id=\'wp-lightbox-2.min.css-css\'  href=\'http://www.softwareishard.com/blog/wp-content/plugins/wp-lightbox-2/styles/lightbox.min.css?ver=1.3.4\' type=\'text/css\' media=\'all\' />\n<script type=\'text/javascript\' src=\'http://www.softwareishard.com/blog/wp-includes/js/jquery/jquery.js?ver=1.12.4\'></script>\n<script type=\'text/javascript\' src=\'http://www.softwareishard.com/blog/wp-includes/js/jquery/jquery-migrate.min.js?ver=1.4.1\'></script>\n<link rel=\'https://api.w.org/\' href=\'http://www.softwareishard.com/blog/wp-json/\' />\n<link rel="EditURI" type="application/rsd+xml" title="RSD" href="http://www.softwareishard.com/blog/xmlrpc.php?rsd" />\n<link rel="wlwmanifest" type="application/wlwmanifest+xml" href="http://www.softwareishard.com/blog/wp-includes/wlwmanifest.xml" /> \n<meta name="generator" content="WordPress 4.7.18" />\n<link rel=\'shortlink\' href=\'http://www.softwareishard.com/blog/?p=75\' />\n<link rel="alternate" type="application/json+oembed" href="http://www.softwareishard.com/blog/wp-json/oembed/1.0/embed?url=http%3A%2F%2Fwww.softwareishard.com%2Fblog%2Fhar-12-spec%2F" />\n<link rel="alternate" type="text/xml+oembed" href="http://www.softwareishard.com/blog/wp-json/oembed/1.0/embed?url=http%3A%2F%2Fwww.softwareishard.com%2Fblog%2Fhar-12-spec%2F&#038;format=xml" />\n<link rel="stylesheet" href="http://www.softwareishard.com/blog/wp-content/plugins/deans_code_highlighter/geshi.css"  type="text/css" /></head>\n\n<body>\n<script  type="text/javascript">\r\nfunction installXPI(href)\r\n{\r\n    if (typeof(InstallTrigger) != \'undefined\')\r\n    {\r\n        var xpi = {\'Firebug\': href};\r\n        InstallTrigger.install(xpi);\r\n    }\r\n    else\r\n    {\r\n        alert("You must be using Firefox to install this extension.");\r\n    }\r\n}\r\n\r\nfunction run(id) \r\n{\r\n    try \r\n    {\r\n        var form = document.createElement("form");\r\n        form.setAttribute("action", "http://www.softwareishard.com/domplate/runner/index.php");\r\n        form.setAttribute("method", "POST");\r\n        form.setAttribute("style", "display:none");\r\n\r\n        var parts = ["script", "data", "css"];\r\n        for (var i=0; i<parts.length; i++) \r\n        {\r\n            var part = document.getElementById(id+"-"+parts[i]);\r\n            if (!part)\r\n                continue;\r\n            var input = document.createElement("input");\r\n            input.setAttribute("name", parts[i]);          \r\n            input.setAttribute("value", part.innerHTML);\r\n            form.appendChild(input);\r\n        }\r\n\r\n        document.body.appendChild(form);\r\n        form.submit();     \r\n    } \r\n    catch (err) \r\n    {\r\n        alert("Error: " + err);\r\n    }  \r\n}\r\n</script>\r\n\n<div id="wrapper">\n\n<div id="main_header">\n    <div class="top"></div>\n\n    <div class="main_sidebar">\n        <a class="rss_posts" href="http://feeds.feedburner.com/SoftwareIsHard"\n            title="Subscribe to RSS Feed"><img border="0"\n                src="http://www.softwareishard.com/blog/wp-content/themes/miniBits/miniBits/img/rss.gif"\n                alt="Subscribe to RSS Feed"/></a>\n        <div id="header">\n            <h1><a href="http://www.softwareishard.com/blog/">Software is hard</a></h1>\n            <span class="desc">More musings on software development</span>\n            <div class="desc">Jan Odvarko</div>\n            <div class="desc">odvarko@gmail.com</div>\n        </div>\n    </div>\n\n    <div class="bottom"></div>\n</div>\n\t\n<div class="container">\n<hr />\n\n\n\n\n  \n <div class="post">\n   <h2>HAR 1.2 Spec</h2>\n\n  <div class="corpo">\n    <style type="text/css"> .harType {    font-family:courier new,monospace;    font-size:20px;    color:gray;    padding-top:20px; } .harType:before {    content: "<"; } .harType:after {    content: ">"; } </style>\n<p>This document is intended to describe a <strong>HTTP Archive 1.2</strong> (frozen) format that can be used by HTTP monitoring tools to export collected data.</p>\n<h3>HTTP Archive v1.2</h3>\n<p>One of the goals of the HTTP Archive format is to be flexible enough so, it can be adopted across projects and various tools. This should allow effective processing and analyzing data coming from various sources. Notice that resulting HAR file can contain privacy &amp; security sensitive data and user-agents should find some way to notify the user of this fact before they transfer the file to anyone else.</p>\n<ul>\n<li>The format described below is based on HTTP Archive 1.1.</li>\n<li>The format is based on <a href="http://www.ietf.org/rfc/rfc4627.txt">JSON</a>.</li>\n<li>Please follow-up in the <a href="http://groups.google.com/group/http-archive-specification?hl=en">newsgroup</a>.</li>\n<li>An online <a href="http://www.softwareishard.com/blog/har-viewer/">HAR viewer</a> is available.</li>\n<li>Report any problems in the <a href="http://code.google.com/p/http-archive-specification/issues/list">issue list</a>.</li>\n<li>See <a href="http://www.softwareishard.com/blog/har-adopters/">list of tools</a> supporting HAR.</li>\n</ul>\n<h3>HAR Data Structure</h3>\n<p>HAR files are required to be saved in UTF-8 encoding, other encodings are forbidden. The spec requires that tools support and ignore a BOM and allow them to emit one if they like.</p>\n<p>Summary of HAR object types:</p>\n<ul>\n<li><a href="#log">log</a></li>\n<li><a href="#creator">creator</a></li>\n<li><a href="#browser">browser</a></li>\n<li><a href="#pages">pages</a></li>\n<li><a href="#pageTimings">pageTimings</a></li>\n<li><a href="#entries">entries</a></li>\n<li><a href="#request">request</a></li>\n<li><a href="#response">response</a></li>\n<li><a href="#cookies">cookies</a></li>\n<li><a href="#headers">headers</a></li>\n<li><a href="#queryString">queryString</a></li>\n<li><a href="#postData">postData</a></li>\n<li><a href="#params">params</a></li>\n<li><a href="#content">content</a></li>\n<li><a href="#cache">cache</a></li>\n<li><a href="#timings">timings</a></li>\n</ul>\n<p id="log" class="harType">log</p>\n<p>This object represents the root of exported data.</p>\n<div class="dean_ch" style="white-space: wrap;"><span class="br0">&#123;</span><br />\n&nbsp; &nbsp; <span class="st0">&quot;log&quot;</span>: <span class="br0">&#123;</span><br />\n&nbsp; &nbsp; &nbsp; &nbsp; <span class="st0">&quot;version&quot;</span> : <span class="st0">&quot;1.2&quot;</span>,<br />\n&nbsp; &nbsp; &nbsp; &nbsp; <span class="st0">&quot;creator&quot;</span> : <span class="br0">&#123;</span><span class="br0">&#125;</span>,<br />\n&nbsp; &nbsp; &nbsp; &nbsp; <span class="st0">&quot;browser&quot;</span> : <span class="br0">&#123;</span><span class="br0">&#125;</span>,<br />\n&nbsp; &nbsp; &nbsp; &nbsp; <span class="st0">&quot;pages&quot;</span>: <span class="br0">&#91;</span><span class="br0">&#93;</span>,<br />\n&nbsp; &nbsp; &nbsp; &nbsp; <span class="st0">&quot;entries&quot;</span>: <span class="br0">&#91;</span><span class="br0">&#93;</span>,<br />\n&nbsp; &nbsp; &nbsp; &nbsp; <span class="st0">&quot;comment&quot;</span>: <span class="st0">&quot;&quot;</span><br />\n&nbsp; &nbsp; <span class="br0">&#125;</span><br />\n<span class="br0">&#125;</span></div>\n<ul>\n<li><em>version [string]</em> - Version number of the format. If empty, string "1.1" is assumed by default.</li>\n<li><em>creator [object]</em> - Name and version info of the log creator application.</li>\n<li><em>browser [object, optional]</em> - Name and version info of used browser.</li>\n<li><em>pages [array, optional]</em> - List of all exported (tracked) pages. Leave out this field if the application does not support grouping by pages.</li>\n<li><em>entries [array]</em> - List of all exported (tracked) requests.</li>\n<li><em>comment [string, optional]</em> (new in 1.2) - A comment provided by the user or the application.</li>\n</ul>\n<p>There is one &lt;page&gt; object for every exported web page and one &lt;entry&gt; object for every HTTP request. In case when an HTTP trace tool isn\'t able to group requests by a page, the &lt;pages&gt; object is empty and individual requests doesn\'t have a parent page.</p>\n<p id="creator" class="harType">creator</p>\n<p><em>Creator</em> and <em>browser</em> objects share the same structure.</p>\n<div class="dean_ch" style="white-space: wrap;"><span class="st0">&quot;creator&quot;</span>: <span class="br0">&#123;</span><br />\n&nbsp; &nbsp; <span class="st0">&quot;name&quot;</span>: <span class="st0">&quot;Firebug&quot;</span>,<br />\n&nbsp; &nbsp; <span class="st0">&quot;version&quot;</span>: <span class="st0">&quot;1.6&quot;</span>,<br />\n&nbsp; &nbsp; <span class="st0">&quot;comment&quot;</span>: <span class="st0">&quot;&quot;</span><br />\n<span class="br0">&#125;</span></div>\n<p id="browser" class="harType">browser</p>\n<div class="dean_ch" style="white-space: wrap;"><span class="st0">&quot;browser&quot;</span>: <span class="br0">&#123;</span><br />\n&nbsp; &nbsp; <span class="st0">&quot;name&quot;</span>: <span class="st0">&quot;Firefox&quot;</span>,<br />\n&nbsp; &nbsp; <span class="st0">&quot;version&quot;</span>: <span class="st0">&quot;3.6&quot;</span>,<br />\n&nbsp; &nbsp; <span class="st0">&quot;comment&quot;</span>: <span class="st0">&quot;&quot;</span><br />\n<span class="br0">&#125;</span></div>\n<ul>\n<li><em>name [string]</em> - Name of the application/browser used to export the log.</li>\n<li><em>version [string]</em> - Version of the application/browser used to export the log.</li>\n<li><em>comment [string, optional]</em> (new in 1.2) - A comment provided by the user or the application.</li>\n</ul>\n<p id="pages" class="harType">pages</p>\n<p>This object represents list of exported pages.</p>\n<div class="dean_ch" style="white-space: wrap;"><span class="st0">&quot;pages&quot;</span>: <span class="br0">&#91;</span><br />\n&nbsp; &nbsp; <span class="br0">&#123;</span><br />\n&nbsp; &nbsp; &nbsp; &nbsp; <span class="st0">&quot;startedDateTime&quot;</span>: <span class="st0">&quot;2009-04-16T12:07:25.123+01:00&quot;</span>,<br />\n&nbsp; &nbsp; &nbsp; &nbsp; <span class="st0">&quot;id&quot;</span>: <span class="st0">&quot;page_0&quot;</span>,<br />\n&nbsp; &nbsp; &nbsp; &nbsp; <span class="st0">&quot;title&quot;</span>: <span class="st0">&quot;Test Page&quot;</span>,<br />\n&nbsp; &nbsp; &nbsp; &nbsp; <span class="st0">&quot;pageTimings&quot;</span>: <span class="br0">&#123;</span>...<span class="br0">&#125;</span>,<br />\n&nbsp; &nbsp; &nbsp; &nbsp; <span class="st0">&quot;comment&quot;</span>: <span class="st0">&quot;&quot;</span><br />\n&nbsp; &nbsp; <span class="br0">&#125;</span><br />\n<span class="br0">&#93;</span></div>\n<ul>\n<li><em>startedDateTime [string]</em> - Date and time stamp for the beginning of the page load (<a href="http://www.w3.org/TR/NOTE-datetime">ISO 8601</a> - YYYY-MM-DDThh:mm:ss.sTZD, e.g. 2009-07-24T19:20:30.45+01:00).</li>\n<li><em>id [string]</em> - Unique identifier of a page within the <code>&lt;log&gt;</code>. Entries use it to refer the parent page.</log></li>\n<li><em>title [string]</em> - Page title.</li>\n<li><em>pageTimings[object]</em> - Detailed timing info about page load.</li>\n<li><em>comment [string, optional]</em> (new in 1.2) - A comment provided by the user or the application.</li>\n</ul>\n<p id="pageTimings" class="harType">pageTimings</p>\n<p>This object describes timings for various events (states) fired during the page load. All times are specified in milliseconds. If a time info is not available appropriate field is set to -1.</p>\n<div class="dean_ch" style="white-space: wrap;"><span class="st0">&quot;pageTimings&quot;</span>: <span class="br0">&#123;</span><br />\n&nbsp; &nbsp; <span class="st0">&quot;onContentLoad&quot;</span>: <span class="nu0">1720</span>,<br />\n&nbsp; &nbsp; <span class="st0">&quot;onLoad&quot;</span>: <span class="nu0">2500</span>,<br />\n&nbsp; &nbsp; <span class="st0">&quot;comment&quot;</span>: <span class="st0">&quot;&quot;</span><br />\n<span class="br0">&#125;</span></div>\n<ul>\n<li><em>onContentLoad [number, optional]</em> - Content of the page loaded. Number of milliseconds since page load started (page.startedDateTime). Use -1 if the timing does not apply to the current request.</li>\n<li><em>onLoad [number,optional]</em> - Page is loaded (onLoad event fired). Number of milliseconds since page load started (page.startedDateTime). Use -1 if the timing does not apply to the current request.</li>\n<li><em>comment [string, optional]</em> (new in 1.2) - A comment provided by the user or the application.</li>\n</ul>\n<p>Depeding on the browser, <em>onContentLoad</em> property represents <strong>DOMContentLoad</strong> event or <strong>document.readyState == interactive</strong>.</p>\n<p id="entries" class="harType">entries</p>\n<p>This object represents an array with all exported HTTP requests. Sorting entries by <em>startedDateTime</em> (starting from the oldest) is preferred way how to export data since it can make importing faster. However the reader application should always make sure the array is sorted (if required for the import).</p>\n<div class="dean_ch" style="white-space: wrap;"><span class="st0">&quot;entries&quot;</span>: <span class="br0">&#91;</span><br />\n&nbsp; &nbsp; <span class="br0">&#123;</span><br />\n&nbsp; &nbsp; &nbsp; &nbsp; <span class="st0">&quot;pageref&quot;</span>: <span class="st0">&quot;page_0&quot;</span>,<br />\n&nbsp; &nbsp; &nbsp; &nbsp; <span class="st0">&quot;startedDateTime&quot;</span>: <span class="st0">&quot;2009-04-16T12:07:23.596Z&quot;</span>,<br />\n&nbsp; &nbsp; &nbsp; &nbsp; <span class="st0">&quot;time&quot;</span>: <span class="nu0">50</span>,<br />\n&nbsp; &nbsp; &nbsp; &nbsp; <span class="st0">&quot;request&quot;</span>: <span class="br0">&#123;</span>...<span class="br0">&#125;</span>,<br />\n&nbsp; &nbsp; &nbsp; &nbsp; <span class="st0">&quot;response&quot;</span>: <span class="br0">&#123;</span>...<span class="br0">&#125;</span>,<br />\n&nbsp; &nbsp; &nbsp; &nbsp; <span class="st0">&quot;cache&quot;</span>: <span class="br0">&#123;</span>...<span class="br0">&#125;</span>,<br />\n&nbsp; &nbsp; &nbsp; &nbsp; <span class="st0">&quot;timings&quot;</span>: <span class="br0">&#123;</span><span class="br0">&#125;</span>,<br />\n&nbsp; &nbsp; &nbsp; &nbsp; <span class="st0">&quot;serverIPAddress&quot;</span>: <span class="st0">&quot;10.0.0.1&quot;</span>,<br />\n&nbsp; &nbsp; &nbsp; &nbsp; <span class="st0">&quot;connection&quot;</span>: <span class="st0">&quot;52492&quot;</span>,<br />\n&nbsp; &nbsp; &nbsp; &nbsp; <span class="st0">&quot;comment&quot;</span>: <span class="st0">&quot;&quot;</span><br />\n&nbsp; &nbsp; <span class="br0">&#125;</span><br />\n<span class="br0">&#93;</span></div>\n<ul>\n<li><em>pageref [string, unique, optional]</em> - Reference to the parent page. Leave out this field if the application does not support grouping by pages.</li>\n<li><em>startedDateTime [string]</em> - Date and time stamp of the request start (<a href="http://www.w3.org/TR/NOTE-datetime">ISO 8601</a> - YYYY-MM-DDThh:mm:ss.sTZD).</li>\n<li><em>time [number]</em> - Total elapsed time of the request in milliseconds. This is the sum of all timings available in the timings object (i.e. not including -1 values) .</li>\n<li><em>request [object]</em> - Detailed info about the request.</li>\n<li><em>response [object]</em> - Detailed info about the response.</li>\n<li><em>cache [object]</em> - Info about cache usage.</li>\n<li><em>timings [object]</em> - Detailed timing info about request/response round trip.</li>\n<li><em>serverIPAddress [string, optional]</em> (new in 1.2) - IP address of the server that was connected (result of DNS resolution).</li>\n<li><em>connection [string, optional]</em> (new in 1.2) - Unique ID of the parent TCP/IP connection, can be the client or server port number. Note that a port number doesn\'t have to be unique identifier in cases where the port is shared for more connections. If the port isn\'t available for the application, any other unique connection ID can be used instead (e.g. connection index). Leave out this field if the application doesn\'t support this info.</li>\n<li><em>comment [string, optional]</em> (new in 1.2) - A comment provided by the user or the application.</li>\n</ul>\n<p id="request" class="harType">request</p>\n<p>This object contains detailed info about performed request.</p>\n<div class="dean_ch" style="white-space: wrap;"><span class="st0">&quot;request&quot;</span>: <span class="br0">&#123;</span><br />\n&nbsp; &nbsp; <span class="st0">&quot;method&quot;</span>: <span class="st0">&quot;GET&quot;</span>,<br />\n&nbsp; &nbsp; <span class="st0">&quot;url&quot;</span>: <span class="st0">&quot;http://www.example.com/path/?param=value&quot;</span>,<br />\n&nbsp; &nbsp; <span class="st0">&quot;httpVersion&quot;</span>: <span class="st0">&quot;HTTP/1.1&quot;</span>,<br />\n&nbsp; &nbsp; <span class="st0">&quot;cookies&quot;</span>: <span class="br0">&#91;</span><span class="br0">&#93;</span>,<br />\n&nbsp; &nbsp; <span class="st0">&quot;headers&quot;</span>: <span class="br0">&#91;</span><span class="br0">&#93;</span>,<br />\n&nbsp; &nbsp; <span class="st0">&quot;queryString&quot;</span> : <span class="br0">&#91;</span><span class="br0">&#93;</span>,<br />\n&nbsp; &nbsp; <span class="st0">&quot;postData&quot;</span> : <span class="br0">&#123;</span><span class="br0">&#125;</span>,<br />\n&nbsp; &nbsp; <span class="st0">&quot;headersSize&quot;</span> : <span class="nu0">150</span>,<br />\n&nbsp; &nbsp; <span class="st0">&quot;bodySize&quot;</span> : <span class="nu0">0</span>,<br />\n&nbsp; &nbsp; <span class="st0">&quot;comment&quot;</span> : <span class="st0">&quot;&quot;</span><br />\n<span class="br0">&#125;</span></div>\n<ul>\n<li><em>method [string]</em> - Request method (GET, POST, ...).</li>\n<li><em>url [string]</em> - Absolute URL of the request (fragments are not included).</li>\n<li><em>httpVersion [string]</em> - Request HTTP Version.</li>\n<li><em>cookies [array]</em> - List of cookie objects.</li>\n<li><em>headers [array]</em> - List of header objects.</li>\n<li><em>queryString [array]</em> - List of query parameter objects.</li>\n<li><em>postData [object, optional]</em> - Posted data info.</li>\n<li><em>headersSize [number]</em> - Total number of bytes from the start of the HTTP request message until (and including) the double CRLF before the body. Set to -1 if the info is not available.</li>\n<li><em>bodySize [number]</em> - Size of the request body (POST data payload) in bytes. Set to -1 if the info is not available.</li>\n<li><em>comment [string, optional]</em> (new in 1.2) - A comment provided by the user or the application.</li>\n</ul>\n<p>The total request size sent can be computed as follows (if both values are available):</p>\n<div class="dean_ch" style="white-space: wrap;"><span class="kw2">var</span> totalSize = entry.<span class="me1">request</span>.<span class="me1">headersSize</span> + entry.<span class="me1">request</span>.<span class="me1">bodySize</span>;</div>\n<p id="response" class="harType">response</p>\n<p>This object contains detailed info about the response.</p>\n<div class="dean_ch" style="white-space: wrap;"><span class="st0">&quot;response&quot;</span>: <span class="br0">&#123;</span><br />\n&nbsp; &nbsp; <span class="st0">&quot;status&quot;</span>: <span class="nu0">200</span>,<br />\n&nbsp; &nbsp; <span class="st0">&quot;statusText&quot;</span>: <span class="st0">&quot;OK&quot;</span>,<br />\n&nbsp; &nbsp; <span class="st0">&quot;httpVersion&quot;</span>: <span class="st0">&quot;HTTP/1.1&quot;</span>,<br />\n&nbsp; &nbsp; <span class="st0">&quot;cookies&quot;</span>: <span class="br0">&#91;</span><span class="br0">&#93;</span>,<br />\n&nbsp; &nbsp; <span class="st0">&quot;headers&quot;</span>: <span class="br0">&#91;</span><span class="br0">&#93;</span>,<br />\n&nbsp; &nbsp; <span class="st0">&quot;content&quot;</span>: <span class="br0">&#123;</span><span class="br0">&#125;</span>,<br />\n&nbsp; &nbsp; <span class="st0">&quot;redirectURL&quot;</span>: <span class="st0">&quot;&quot;</span>,<br />\n&nbsp; &nbsp; <span class="st0">&quot;headersSize&quot;</span> : <span class="nu0">160</span>,<br />\n&nbsp; &nbsp; <span class="st0">&quot;bodySize&quot;</span> : <span class="nu0">850</span>,<br />\n&nbsp; &nbsp; <span class="st0">&quot;comment&quot;</span> : <span class="st0">&quot;&quot;</span><br />\n&nbsp;<span class="br0">&#125;</span></div>\n<ul>\n<li><em>status [number]</em> - Response status.</li>\n<li><em>statusText [string]</em> - Response status description.</li>\n<li><em>httpVersion [string]</em> - Response HTTP Version.</li>\n<li><em>cookies [array]</em> - List of cookie objects.</li>\n<li><em>headers [array]</em> - List of header objects.</li>\n<li><em>content [object]</em> - Details about the response body.</li>\n<li><em>redirectURL [string]</em> - Redirection target URL from the Location response header.</li>\n<li><em>headersSize [number]*</em> - Total number of bytes from the start of the HTTP response message until (and including) the double CRLF before the body. Set to -1 if the info is not available.</li>\n<li><em>bodySize [number]</em> - Size of the received response body in bytes. Set to zero in case of responses coming from the cache (304). Set to -1 if the info is not available.</li>\n<li><em>comment [string, optional]</em> (new in 1.2) - A comment provided by the user or the application.</li>\n</ul>\n<p><em>*headersSize</em> - The size of received response-headers is computed only from headers that are really received from the server. Additional headers appended by the browser are not included in this number, but they appear  in the list of header objects.</p>\n<p>The total response size received can be computed as follows (if both values are available):</p>\n<div class="dean_ch" style="white-space: wrap;"><span class="kw2">var</span> totalSize = entry.<span class="me1">response</span>.<span class="me1">headersSize</span> + entry.<span class="me1">response</span>.<span class="me1">bodySize</span>;</div>\n<p id="cookies" class="harType">cookies</p>\n<p>This object contains list of all cookies (used in &lt;request&gt; and &lt;response&gt; objects).</p>\n<div class="dean_ch" style="white-space: wrap;"><span class="st0">&quot;cookies&quot;</span>: <span class="br0">&#91;</span><br />\n&nbsp; &nbsp; <span class="br0">&#123;</span><br />\n&nbsp; &nbsp; &nbsp; &nbsp; <span class="st0">&quot;name&quot;</span>: <span class="st0">&quot;TestCookie&quot;</span>,<br />\n&nbsp; &nbsp; &nbsp; &nbsp; <span class="st0">&quot;value&quot;</span>: <span class="st0">&quot;Cookie Value&quot;</span>,<br />\n&nbsp; &nbsp; &nbsp; &nbsp; <span class="st0">&quot;path&quot;</span>: <span class="st0">&quot;/&quot;</span>,<br />\n&nbsp; &nbsp; &nbsp; &nbsp; <span class="st0">&quot;domain&quot;</span>: <span class="st0">&quot;www.janodvarko.cz&quot;</span>,<br />\n&nbsp; &nbsp; &nbsp; &nbsp; <span class="st0">&quot;expires&quot;</span>: <span class="st0">&quot;2009-07-24T19:20:30.123+02:00&quot;</span>,<br />\n&nbsp; &nbsp; &nbsp; &nbsp; <span class="st0">&quot;httpOnly&quot;</span>: <span class="kw2">false</span>,<br />\n&nbsp; &nbsp; &nbsp; &nbsp; <span class="st0">&quot;secure&quot;</span>: <span class="kw2">false</span>,<br />\n&nbsp; &nbsp; &nbsp; &nbsp; <span class="st0">&quot;comment&quot;</span>: <span class="st0">&quot;&quot;</span><br />\n&nbsp; &nbsp; <span class="br0">&#125;</span><br />\n<span class="br0">&#93;</span></div>\n<ul>\n<li><em>name [string]</em> - The name of the cookie.</li>\n<li><em>value [string]</em> - The cookie value.</li>\n<li><em>path [string, optional]</em> - The path pertaining to the cookie.</li>\n<li><em>domain [string, optional]</em> - The host of the cookie.</li>\n<li><em>expires [string, optional]</em> - Cookie expiration time. (<a href="http://www.w3.org/TR/NOTE-datetime">ISO 8601</a> - YYYY-MM-DDThh:mm:ss.sTZD, e.g. 2009-07-24T19:20:30.123+02:00).</li>\n<li><em>httpOnly [boolean, optional]</em> - Set to true if the cookie is HTTP only, false otherwise.</li>\n<li><em>secure [boolean, optional]</em> (new in 1.2) - True if the cookie was transmitted over ssl, false otherwise.</li>\n<li><em>comment [string, optional]</em> (new in 1.2) - A comment provided by the user or the application.</li>\n</ul>\n<p id="headers" class="harType">headers</p>\n<p>This object contains list of all headers (used in &lt;request&gt; and &lt;response&gt; objects).</p>\n<div class="dean_ch" style="white-space: wrap;"><span class="st0">&quot;headers&quot;</span>: <span class="br0">&#91;</span><br />\n&nbsp; &nbsp; <span class="br0">&#123;</span><br />\n&nbsp; &nbsp; &nbsp; &nbsp; <span class="st0">&quot;name&quot;</span>: <span class="st0">&quot;Accept-Encoding&quot;</span>,<br />\n&nbsp; &nbsp; &nbsp; &nbsp; <span class="st0">&quot;value&quot;</span>: <span class="st0">&quot;gzip,deflate&quot;</span>,<br />\n&nbsp; &nbsp; &nbsp; &nbsp; <span class="st0">&quot;comment&quot;</span>: <span class="st0">&quot;&quot;</span><br />\n&nbsp; &nbsp; <span class="br0">&#125;</span>,<br />\n&nbsp; &nbsp; <span class="br0">&#123;</span><br />\n&nbsp; &nbsp; &nbsp; &nbsp; <span class="st0">&quot;name&quot;</span>: <span class="st0">&quot;Accept-Language&quot;</span>,<br />\n&nbsp; &nbsp; &nbsp; &nbsp; <span class="st0">&quot;value&quot;</span>: <span class="st0">&quot;en-us,en;q=0.5&quot;</span>,<br />\n&nbsp; &nbsp; &nbsp; &nbsp; <span class="st0">&quot;comment&quot;</span>: <span class="st0">&quot;&quot;</span><br />\n&nbsp; &nbsp; <span class="br0">&#125;</span><br />\n<span class="br0">&#93;</span></div>\n<p id="queryString" class="harType">queryString</p>\n<p>This object contains list of all parameters &amp; values parsed from a query string, if any (embedded in &lt;request&gt; object).</p>\n<div class="dean_ch" style="white-space: wrap;"><span class="st0">&quot;queryString&quot;</span>: <span class="br0">&#91;</span><br />\n&nbsp; &nbsp; <span class="br0">&#123;</span><br />\n&nbsp; &nbsp; &nbsp; &nbsp; <span class="st0">&quot;name&quot;</span>: <span class="st0">&quot;param1&quot;</span>,<br />\n&nbsp; &nbsp; &nbsp; &nbsp; <span class="st0">&quot;value&quot;</span>: <span class="st0">&quot;value1&quot;</span>,<br />\n&nbsp; &nbsp; &nbsp; &nbsp; <span class="st0">&quot;comment&quot;</span>: <span class="st0">&quot;&quot;</span><br />\n&nbsp; &nbsp; <span class="br0">&#125;</span>,<br />\n&nbsp; &nbsp; <span class="br0">&#123;</span><br />\n&nbsp; &nbsp; &nbsp; &nbsp; <span class="st0">&quot;name&quot;</span>: <span class="st0">&quot;param1&quot;</span>,<br />\n&nbsp; &nbsp; &nbsp; &nbsp; <span class="st0">&quot;value&quot;</span>: <span class="st0">&quot;value1&quot;</span>,<br />\n&nbsp; &nbsp; &nbsp; &nbsp; <span class="st0">&quot;comment&quot;</span>: <span class="st0">&quot;&quot;</span><br />\n&nbsp; &nbsp; <span class="br0">&#125;</span><br />\n<span class="br0">&#93;</span></div>\n<p>HAR format expects NVP (name-value pairs) formatting of the query string.</p>\n<p id="postData" class="harType">postData</p>\n<p>This object describes posted data, if any (embedded in &lt;request&gt; object).</p>\n<div class="dean_ch" style="white-space: wrap;"><span class="st0">&quot;postData&quot;</span>: <span class="br0">&#123;</span><br />\n&nbsp; &nbsp; <span class="st0">&quot;mimeType&quot;</span>: <span class="st0">&quot;multipart/form-data&quot;</span>,<br />\n&nbsp; &nbsp; <span class="st0">&quot;params&quot;</span>: <span class="br0">&#91;</span><span class="br0">&#93;</span>,<br />\n&nbsp; &nbsp; <span class="st0">&quot;text&quot;</span> : <span class="st0">&quot;plain posted data&quot;</span>,<br />\n&nbsp; &nbsp; <span class="st0">&quot;comment&quot;</span>: <span class="st0">&quot;&quot;</span><br />\n<span class="br0">&#125;</span></div>\n<ul>\n<li><em>mimeType [string]</em> - Mime type of posted data.</li>\n<li><em>params [array]</em> - List of posted parameters (in case of URL encoded parameters).</li>\n<li><em>text [string]</em> - Plain text posted data</li>\n<li><em>comment [string, optional]</em> (new in 1.2) - A comment provided by the user or the application.</li>\n</ul>\n<p>Note that <em>text</em> and <em>params</em> fields are mutually exclusive.</p>\n<p id="params" class="harType">params</p>\n<p>List of posted parameters, if any (embedded in &lt;postData&gt; object).</p>\n<div class="dean_ch" style="white-space: wrap;"><span class="st0">&quot;params&quot;</span>: <span class="br0">&#91;</span><br />\n&nbsp; &nbsp; <span class="br0">&#123;</span><br />\n&nbsp; &nbsp; &nbsp; &nbsp; <span class="st0">&quot;name&quot;</span>: <span class="st0">&quot;paramName&quot;</span>,<br />\n&nbsp; &nbsp; &nbsp; &nbsp; <span class="st0">&quot;value&quot;</span>: <span class="st0">&quot;paramValue&quot;</span>,<br />\n&nbsp; &nbsp; &nbsp; &nbsp; <span class="st0">&quot;fileName&quot;</span>: <span class="st0">&quot;example.pdf&quot;</span>,<br />\n&nbsp; &nbsp; &nbsp; &nbsp; <span class="st0">&quot;contentType&quot;</span>: <span class="st0">&quot;application/pdf&quot;</span>,<br />\n&nbsp; &nbsp; &nbsp; &nbsp; <span class="st0">&quot;comment&quot;</span>: <span class="st0">&quot;&quot;</span><br />\n&nbsp; &nbsp; <span class="br0">&#125;</span><br />\n<span class="br0">&#93;</span></div>\n<ul>\n<li><em>name [string]</em> - name of a posted parameter.</li>\n<li><em>value [string, optional]</em> - value of a posted parameter or content of a posted file.</li>\n<li><em>fileName [string, optional]</em> - name of a posted file.</li>\n<li><em>contentType [string, optional]</em> - content type of a posted file.</li>\n<li><em>comment [string, optional] (new in 1.2)</em> - A comment provided by the user or the application.</li>\n</ul>\n<p id="content" class="harType">content</p>\n<p>This object describes details about response content (embedded in &lt;response&gt; object).</p>\n<div class="dean_ch" style="white-space: wrap;"><span class="st0">&quot;content&quot;</span>: <span class="br0">&#123;</span><br />\n&nbsp; &nbsp; <span class="st0">&quot;size&quot;</span>: <span class="nu0">33</span>,<br />\n&nbsp; &nbsp; <span class="st0">&quot;compression&quot;</span>: <span class="nu0">0</span>,<br />\n&nbsp; &nbsp; <span class="st0">&quot;mimeType&quot;</span>: <span class="st0">&quot;text/html; charset=utf-8&quot;</span>,<br />\n&nbsp; &nbsp; <span class="st0">&quot;text&quot;</span>: <span class="st0">&quot;<span class="es0">\\n</span>&quot;</span>,<br />\n&nbsp; &nbsp; <span class="st0">&quot;comment&quot;</span>: <span class="st0">&quot;&quot;</span><br />\n<span class="br0">&#125;</span></div>\n<ul>\n<li><em>size [number]</em> - Length of the returned content in bytes. Should be equal to response.bodySize if there is no compression and bigger when the content has been compressed.</li>\n<li><em>compression [number, optional]</em> - Number of bytes saved. Leave out this field if the information is not available.</li>\n<li><em>mimeType [string]</em> - MIME type of the response text (value of the Content-Type response header). The charset attribute of the MIME type is included (if available).</li>\n<li><em>text [string, optional]</em> - Response body sent from the server or loaded from the browser cache. This field is populated with textual content only. The text field is either HTTP decoded text or a encoded (e.g. "base64") representation of the response body. Leave out this field if the information is not available.</li>\n<li><em>encoding [string, optional]</em> (new in 1.2) - Encoding used for response text field e.g "base64". Leave out this field if the text field is HTTP decoded (decompressed &amp; unchunked), than trans-coded from its original character set into UTF-8.</li>\n<li><em>comment [string, optional]</em> (new in 1.2) - A comment provided by the user or the application.</li>\n</ul>\n<p>Before setting the text field, the HTTP response is decoded (decompressed &amp; unchunked), than trans-coded from its original character set into UTF-8. Additionally, it can be encoded using e.g. base64. Ideally, the application should be able to unencode a base64 blob and get a byte-for-byte identical resource to what the browser operated on.<br />\n<em><br />\nEncoding field is useful for including binary responses (e.g. images) into the HAR file.<br />\n</em><br />\nHere is another example with encoded response. The original response is:</p>\n<div class="dean_ch" style="white-space: wrap;"><span class="sc3"><span class="re1">&lt;html<span class="re2">&gt;</span></span></span><span class="sc3"><span class="re1">&lt;head<span class="re2">&gt;</span></span></span><span class="sc3"><span class="re1">&lt;/head<span class="re2">&gt;</span></span></span><span class="sc3"><span class="re1">&lt;body</span><span class="re2">/&gt;</span></span><span class="sc3"><span class="re1">&lt;/html<span class="re2">&gt;</span></span></span>\\n</div>\n<div class="dean_ch" style="white-space: wrap;"><span class="st0">&quot;content&quot;</span>: <span class="br0">&#123;</span><br />\n&nbsp; &nbsp; <span class="st0">&quot;size&quot;</span>: <span class="nu0">33</span>,<br />\n&nbsp; &nbsp; <span class="st0">&quot;compression&quot;</span>: <span class="nu0">0</span>,<br />\n&nbsp; &nbsp; <span class="st0">&quot;mimeType&quot;</span>: <span class="st0">&quot;text/html; charset=utf-8&quot;</span>,<br />\n&nbsp; &nbsp; <span class="st0">&quot;text&quot;</span>: <span class="st0">&quot;PGh0bWw+PGhlYWQ+PC9oZWFkPjxib2R5Lz48L2h0bWw+XG4=&quot;</span>,<br />\n&nbsp; &nbsp; <span class="st0">&quot;encoding&quot;</span>: <span class="st0">&quot;base64&quot;</span>,<br />\n&nbsp; &nbsp; <span class="st0">&quot;comment&quot;</span>: <span class="st0">&quot;&quot;</span><br />\n<span class="br0">&#125;</span></div>\n<p id="cache" class="harType">cache</p>\n<p>This objects contains info about a request coming from browser cache.</p>\n<div class="dean_ch" style="white-space: wrap;"><span class="st0">&quot;cache&quot;</span>: <span class="br0">&#123;</span><br />\n&nbsp; &nbsp; <span class="st0">&quot;beforeRequest&quot;</span>: <span class="br0">&#123;</span><span class="br0">&#125;</span>,<br />\n&nbsp; &nbsp; <span class="st0">&quot;afterRequest&quot;</span>: <span class="br0">&#123;</span><span class="br0">&#125;</span>,<br />\n&nbsp; &nbsp; <span class="st0">&quot;comment&quot;</span>: <span class="st0">&quot;&quot;</span><br />\n<span class="br0">&#125;</span></div>\n<ul>\n<li><em>beforeRequest [object, optional]</em> - State of a cache entry before the request. Leave out this field if the information is not available.</li>\n<li><em>afterRequest [object, optional]</em> - State of a cache entry after the request. Leave out this field if the information is not available.</li>\n<li><em>comment [string, optional]</em> (new in 1.2) - A comment provided by the user or the application.</li>\n</ul>\n<p>This is how the object should look like if no cache information are available (or you can just leave out the entire field).</p>\n<div class="dean_ch" style="white-space: wrap;"><span class="st0">&quot;cache&quot;</span>: <span class="br0">&#123;</span><span class="br0">&#125;</span></div>\n<p>This is how the object should look like if the the info about the cache entry before request is not available and there is no cache entry after the request.</p>\n<div class="dean_ch" style="white-space: wrap;"><span class="st0">&quot;cache&quot;</span>: <span class="br0">&#123;</span><br />\n&nbsp; &nbsp; <span class="st0">&quot;afterRequest&quot;</span>: <span class="kw2">null</span><br />\n<span class="br0">&#125;</span></div>\n<p>This is how the object should look like if there in no cache entry before nor after the request.</p>\n<div class="dean_ch" style="white-space: wrap;"><span class="st0">&quot;cache&quot;</span>: <span class="br0">&#123;</span><br />\n&nbsp; &nbsp; <span class="st0">&quot;beforeRequest&quot;</span>: <span class="kw2">null</span>,<br />\n&nbsp; &nbsp; <span class="st0">&quot;afterRequest&quot;</span>: <span class="kw2">null</span><br />\n<span class="br0">&#125;</span></div>\n<p>This is how the object should look like to indicate that the entry was not in the cache but was store after the content was downloaded by the request.</p>\n<div class="dean_ch" style="white-space: wrap;"><span class="st0">&quot;cache&quot;</span>: <span class="br0">&#123;</span><br />\n&nbsp; &nbsp; <span class="st0">&quot;beforeRequest&quot;</span>: <span class="kw2">null</span>,<br />\n&nbsp; &nbsp; <span class="st0">&quot;afterRequest&quot;</span>: <span class="br0">&#123;</span><br />\n&nbsp; &nbsp; &nbsp; &nbsp; <span class="st0">&quot;expires&quot;</span>: <span class="st0">&quot;2009-04-16T15:50:36&quot;</span>,<br />\n&nbsp; &nbsp; &nbsp; &nbsp; <span class="st0">&quot;lastAccess&quot;</span>: <span class="st0">&quot;2009-16-02T15:50:34&quot;</span>,<br />\n&nbsp; &nbsp; &nbsp; &nbsp; <span class="st0">&quot;eTag&quot;</span>: <span class="st0">&quot;&quot;</span>,<br />\n&nbsp; &nbsp; &nbsp; &nbsp; <span class="st0">&quot;hitCount&quot;</span>: <span class="nu0">0</span>,<br />\n&nbsp; &nbsp; &nbsp; &nbsp; <span class="st0">&quot;comment&quot;</span>: <span class="st0">&quot;&quot;</span><br />\n&nbsp; &nbsp; <span class="br0">&#125;</span><br />\n<span class="br0">&#125;</span></div>\n<p>Both <em>beforeRequest</em> and <em>afterRequest</em> object share the following structure.</p>\n<div class="dean_ch" style="white-space: wrap;"><span class="st0">&quot;beforeRequest&quot;</span>: <span class="br0">&#123;</span><br />\n&nbsp; &nbsp; <span class="st0">&quot;expires&quot;</span>: <span class="st0">&quot;2009-04-16T15:50:36&quot;</span>,<br />\n&nbsp; &nbsp; <span class="st0">&quot;lastAccess&quot;</span>: <span class="st0">&quot;2009-16-02T15:50:34&quot;</span>,<br />\n&nbsp; &nbsp; <span class="st0">&quot;eTag&quot;</span>: <span class="st0">&quot;&quot;</span>,<br />\n&nbsp; &nbsp; <span class="st0">&quot;hitCount&quot;</span>: <span class="nu0">0</span>,<br />\n&nbsp; &nbsp; <span class="st0">&quot;comment&quot;</span>: <span class="st0">&quot;&quot;</span><br />\n<span class="br0">&#125;</span></div>\n<ul>\n<li><em>expires [string, optional]</em> - Expiration time of the cache entry.</li>\n<li><em>lastAccess [string]</em> - The last time the cache entry was opened.</li>\n<li><em>eTag [string]</em> - Etag</li>\n<li><em>hitCount [number]</em> - The number of times the cache entry has been opened.</li>\n<li><em>comment [string, optional]</em> (new in 1.2) - A comment provided by the user or the application.</li>\n</ul>\n<p id="timings" class="harType">timings</p>\n<p>This object describes various phases within request-response round trip. All times are specified in milliseconds.</p>\n<div class="dean_ch" style="white-space: wrap;"><span class="st0">&quot;timings&quot;</span>: <span class="br0">&#123;</span><br />\n&nbsp; &nbsp; <span class="st0">&quot;blocked&quot;</span>: <span class="nu0">0</span>,<br />\n&nbsp; &nbsp; <span class="st0">&quot;dns&quot;</span>: <span class="nu0">-1</span>,<br />\n&nbsp; &nbsp; <span class="st0">&quot;connect&quot;</span>: <span class="nu0">15</span>,<br />\n&nbsp; &nbsp; <span class="st0">&quot;send&quot;</span>: <span class="nu0">20</span>,<br />\n&nbsp; &nbsp; <span class="st0">&quot;wait&quot;</span>: <span class="nu0">38</span>,<br />\n&nbsp; &nbsp; <span class="st0">&quot;receive&quot;</span>: <span class="nu0">12</span>,<br />\n&nbsp; &nbsp; <span class="st0">&quot;ssl&quot;</span>: <span class="nu0">-1</span>,<br />\n&nbsp; &nbsp; <span class="st0">&quot;comment&quot;</span>: <span class="st0">&quot;&quot;</span><br />\n<span class="br0">&#125;</span></div>\n<ul>\n<li>blocked [number, optional] - Time spent in a queue waiting for a network connection. Use -1 if the timing does not apply to the current request.</li>\n<li>dns [number, optional] - DNS resolution time. The time required to resolve a host name. Use -1 if the timing does not apply to the current request.</li>\n<li>connect [number, optional] - Time required to create TCP connection. Use -1 if the timing does not apply to the current request.</li>\n<li>send [number] - Time required to send HTTP request to the server.</li>\n<li>wait [number] - Waiting for a response from the server.</li>\n<li>receive [number] - Time required to read entire response from the server (or cache).</li>\n<li>ssl [number, optional] (new in 1.2) - Time required for SSL/TLS negotiation. If this field is defined then the time is also included in the connect field (to ensure backward compatibility with HAR 1.1). Use -1 if the timing does not apply to the current request.</li>\n<li>comment [string, optional] (new in 1.2) - A comment provided by the user or the application.</li>\n</ul>\n<p>The <em>send</em>, <em>wait</em> and <em>receive</em> timings are not optional and must have non-negative values.</p>\n<p>An exporting tool can omit the <em>blocked</em>, <em>dns</em>, <em>connect</em> and <em>ssl</em>, timings on every request if it is unable to provide them. Tools that can provide these timings can set their values to -1 if they don’t apply. For example, <em>connect</em> would be -1 for requests which re-use an existing connection.</p>\n<p>The <em>time</em> value for the request must be equal to the sum of the timings supplied in this section (excluding any -1 values).</p>\n<p>Following must be true in case there are no -1 values (<em>entry</em> is an object in <em>log.entries</em>) :</p>\n<div class="dean_ch" style="white-space: wrap;">entry.<span class="me1">time</span> == entry.<span class="me1">timings</span>.<span class="me1">blocked</span> + entry.<span class="me1">timings</span>.<span class="me1">dns</span> +<br />\n&nbsp; &nbsp; entry.<span class="me1">timings</span>.<span class="me1">connect</span> + entry.<span class="me1">timings</span>.<span class="me1">send</span> + entry.<span class="me1">timings</span>.<span class="me1">wait</span> +<br />\n&nbsp; &nbsp; entry.<span class="me1">timings</span>.<span class="me1">receive</span>;</div>\n<h3>Custom Fields</h3>\n<p>The specification allows adding new custom fields into the output format. Following rules must be applied:</p>\n<ul>\n<li>Custom fields and elements MUST start with an underscore (spec fields should never start with an underscore.</li>\n<li>Parsers MUST ignore all custom fields and elements if the file was not written by the same tool loading the file.</li>\n<li>Parsers MUST ignore all non-custom fields that they don\'t know how to parse because the minor version number is greater than the maximum minor version for which they were written.</li>\n<li>Parsers can reject files that contain non-custom fields that they know were not present in a specific version of the spec.</li>\n</ul>\n<h3>Versioning Scheme</h3>\n<p>The spec number has following syntax:</p>\n<div class="dean_ch" style="white-space: wrap;">&lt;major-version-number&gt;.&lt;minor-version-number&gt;</div>\n<p>Where the major version indicates overall backwards compatibility and the minor version indicates incremental changes. So, any backwardly compatible changes to the spec will result in an increase of the minor version. If an existing fields had to be broken then major version would increase (e.g. 2.0).</p>\n<p>Examples:<br />\n<code>1.2 -&gt; 1.3<br />\n1.111 -&gt; 1.112 (in case of 111 more changes)<br />\n1.5 -&gt; 2.0 (2.0 is not compatible with 1.5)<br />\n</code></p>\n<p>So following construct can be used to detect incompatible version if a tool supports HAR since 1.1.</p>\n<div class="dean_ch" style="white-space: wrap;"><span class="kw1">if</span> <span class="br0">&#40;</span>majorVersion != <span class="nu0">1</span> || minorVersion &lt; <span class="nu0">1</span><span class="br0">&#41;</span><br />\n<span class="br0">&#123;</span><br />\n&nbsp; &nbsp; <span class="kw1">throw</span> <span class="st0">&quot;Incompatible version&quot;</span>;<br />\n<span class="br0">&#125;</span></div>\n<p>In this example a tool throws an exception if the version is e.g.: 0.8, 0.9, 1.0, but works with 1.1, 1.2, 1.112 etc. Version 2.x would be rejected.</p>\n<h3>HAR With Padding</h3>\n<p>Support for <a href="http://en.wikipedia.org/wiki/JSON#JSONP">JSONP</a> (JSON with padding) is not part of the core HAR spec. However, it represents very good feature for consuming HAR files online.</p>\n<p>In order to server HAR files online the URL might include a callback URL parameter that should wrap HAR into a callback to a function (you might want to use *.harp extension for HAR files with padding).</p>\n<div class="dean_ch" style="white-space: wrap;">http://www.example.com/givememyhar.php?callback=onInputData</div>\n<p>Response for the URL above would be:</p>\n<div class="dean_ch" style="white-space: wrap;">onInputData<span class="br0">&#40;</span><span class="br0">&#123;</span><br />\n&nbsp; &nbsp; <span class="st0">&quot;log&quot;</span>: <span class="br0">&#123;</span> ... <span class="br0">&#125;</span><br />\n<span class="br0">&#125;</span><span class="br0">&#41;</span>;</div>\n<p>See live example:</p>\n<p><a href="http://www.softwareishard.com/har/viewer/?inputUrl=http://www.janodvarko.cz/har/viewer/examples/inline-scripts-block.harp&amp;callback=onInputData">http://www.softwareishard.com/har/viewer/?inputUrl=http://www.janodvarko.cz/har/viewer/examples/inline-scripts-block.harp&amp;callback=onInputData</a></p>\n<div class="dean_ch" style="white-space: wrap;"><span class="sc3"><span class="re1">&lt;a</span> <span class="re0">href</span>=<span class="st0">&quot;http://www.softwareishard.com/har/viewer/?inputUrl=http://www.janodvarko.cz/har/viewer/examples/inline-scripts-block.harp&amp;amp;callback=onInputData&quot;</span><span class="re2">&gt;</span></span>http://www.softwareishard.com/har/viewer/?inputUrl=http://www.janodvarko.cz/har/viewer/examples/inline-scripts-block.harp<span class="sc1">&amp;amp;</span>callback=onInputData<span class="sc3"><span class="re1">&lt;/a<span class="re2">&gt;</span></span></span></div>\n<ul>\n<li><em>inputUrl</em> specifies an URL of the target HAR file (doesn\'t have to come from the same domain)</li>\n<li><em>callback</em> species name of the function the HAR is wrapped in.</li>\n</ul>\n<h3>HAR Compression</h3>\n<p>Compression of the HAR file is not part of the core HAR spec. However, in order to store HAR files more efficiently, it is recommended that you compress HAR files on disk (you might want to use <em>*.zhar</em> extension for zipped HAR files).</p>\n<p>Anyway, an application supporting HAR, is not required to support compressed HAR files. If the application doesn\'t support compressed HAR then it\'s the responsibility of the user to decompress before passing the HAR file into it.</p>\n<p><a href="http://en.wikipedia.org/wiki/HTTP_compression">HTTP Compression</a> is one of the best practices how to speed up web applications and it\'s also recommended for HAR files.</p>\n<p class="bullet">\n<p align="center">\n<em>Doc translation to <a href="http://weizhifeng.net/2011/03/26/http-archive-specification-chinese/">Chinese</a> provided by Jeremy.</em></p>\n  </div>\n  \n </div>\n\n \n</div>\n<hr />\n\n<div id="sidebar">\n<div class="top"></div>\n<div class="main_sidebar">\n\n\t<div class="block">\n   <h3>Search:</h3>\n   <form id="searchform" method="get" action="http://www.softwareishard.com/blog">\n\t\t<input class="cerca_modulo" type="text" name="s" id="s" size="12" />\n\t\t<input class="cerca_invio" type="submit" value="Search" />\n\t</form>\n\t</div>\n<div class="block"><h3>About Jan Odvarko</h3>\n\t<ul class=\'xoxo blogroll\'>\n<li><a href="http://www.softwareishard.com/blog/about/" title="About Me">About Me</a></li>\n<li><a href="https://github.com/janodvarko">GitHub</a></li>\n<li><a href="https://plus.google.com/+JanOdvarko">Google+</a></li>\n<li><a href="http://www.linkedin.com/in/odvarko">LinkedIn</a></li>\n<li><a href="https://www.ohloh.net/p/firebug/contributors/20658792769607">Ohloh</a></li>\n<li><a href="http://www.quora.com/Jan-Odvarko">Quora</a></li>\n<li><a href="https://twitter.com/janodvarko">Twitter</a></li>\n\n\t</ul>\n</div>\n<div class="block"><h3>About My Projects</h3>\n\t<ul class=\'xoxo blogroll\'>\n<li><a href="http://www.softwareishard.com/domplate/runner/index.php" title="Check out Domplate templates online">Domplate Runner</a></li>\n<li><a href="http://getfirebug.com">Firebug</a></li>\n<li><a href="http://www.softwareishard.com/blog/firecookie/" title="Firebug extension for managing cookies">Firecookie</a></li>\n<li><a href="http://www.softwareishard.com/blog/har-adopters/" title="List of tools supporting HAR format">HAR Adopters</a></li>\n<li><a href="http://www.softwareishard.com/blog/har-export-trigger/" title="Automate HAR export in Firefox 42">HAR Export Trigger</a></li>\n<li><a href="http://www.softwareishard.com/blog/har-viewer/" title="HTTP Archive Viewer &#8211; preview HAR files online">HAR Viewer</a></li>\n<li><a href="http://www.softwareishard.com/blog/har-12-spec/" title="JSON based format for data collected by HTTP monitoring tools">HTTP Archive Spec 1.2 (HAR)</a></li>\n<li><a href="https://github.com/firebug/websocket-monitor">Web Socket Monitor</a></li>\n\n\t</ul>\n</div>\n<div class="block"><h3>Domplate Tutorial</h3>\n\t<ul class=\'xoxo blogroll\'>\n<li><a href="http://www.softwareishard.com/blog/planet-mozilla/domplate-examples-part-i/" title="Set of examples about Domplate.">Part I. Examples</a></li>\n<li><a href="http://www.softwareishard.com/blog/domplate/domplate-examples-part-ii/" title="Set of examples about Domplate.">Part II. Examples</a></li>\n\n\t</ul>\n</div>\n<div class="block"><h3>Extending Firebug Tutorial</h3>\n\t<ul class=\'xoxo blogroll\'>\n<li><a href="http://www.softwareishard.com/blog/?p=3">Part I. Hello World!</a></li>\n<li><a href="http://www.softwareishard.com/blog/?p=4">Part II. Toolbar</a></li>\n<li><a href="http://www.softwareishard.com/blog/?p=7">Part III. Options</a></li>\n<li><a href="http://www.softwareishard.com/blog/?p=10">Part IV. Localization</a></li>\n<li><a href="http://www.softwareishard.com/blog/firebug-tutorial/extending-firebug-activable-panel-part-ix/">Part IX. Activable Panel</a></li>\n<li><a href="http://www.softwareishard.com/blog/firebug-tutorial/extending-firebug-domplate-part-v/">Part V. Domplate</a></li>\n<li><a href="http://www.softwareishard.com/blog/firebug-tutorial/extending-firebug-yahoo-search-part-vi/">Part VI. Yahoo! Search</a></li>\n<li><a href="http://www.softwareishard.com/blog/firebug-tutorial/extending-firebug-customize-net-panel-part-vii/">Part VII. Customize Net Panel</a></li>\n<li><a href="http://www.softwareishard.com/blog/firebug-tutorial/extending-firebug-net-panel-listener-part-viii/">Part VIII. Net Panel Listener</a></li>\n<li><a href="http://www.softwareishard.com/blog/firebug-tutorial/extending-firebug-inspector-part-x/">Part X. Inspector</a></li>\n<li><a href="http://www.softwareishard.com/blog/firebug-tutorial/extending-firebug-infotip-part-xi/">Part XI. Infotip</a></li>\n<li><a href="http://www.softwareishard.com/blog/firebug-tutorial/extending-firebug-hello-amd-part-xii/">Part XII. Hello AMD!</a></li>\n\n\t</ul>\n</div>\n<div class="block"><h3>Miscellaneous</h3>\n\t<ul class=\'xoxo blogroll\'>\n<li><a href="http://www.softwareishard.com/blog/extending-firebug/" title="How to develop extension for Firebug">Extending Firebug</a></li>\n<li><a href="http://www.softwareishard.com/blog/category/firebug-extension/" title="Posts about existing Firebug extensions">Firebug Extensions</a></li>\n<li><a href="http://www.softwareishard.com/blog/firebug-tips/" title="Various Firebug features explained">Firebug Tips &amp; Tricks</a></li>\n\n\t</ul>\n</div>\n<div class="block"><h3>Subscribe</h3>\n\t<ul class=\'xoxo blogroll\'>\n<li><a href="http://feeds.feedburner.com/CommentsForSoftwareIsHard">Comments</a></li>\n<li><a href="http://onswipe.com/janodvarko" title="iPad enabled theme">iPad</a></li>\n<li><a href="http://feeds.feedburner.com/SoftwareIsHard">Posts</a></li>\n\n\t</ul>\n</div>\n<div class="block"><h3>Categories</h3>\t\t<ul>\n\t<li class="cat-item cat-item-174"><a href="http://www.softwareishard.com/blog/category/consoleexport/" >ConsoleExport</a>\n</li>\n\t<li class="cat-item cat-item-195"><a href="http://www.softwareishard.com/blog/category/design-pattern/" >Design Pattern</a>\n</li>\n\t<li class="cat-item cat-item-198"><a href="http://www.softwareishard.com/blog/category/developer-tools/" >Developer Tools</a>\n</li>\n\t<li class="cat-item cat-item-69"><a href="http://www.softwareishard.com/blog/category/documentation/" >Documentation</a>\n</li>\n\t<li class="cat-item cat-item-19"><a href="http://www.softwareishard.com/blog/category/domplate/" >Domplate</a>\n</li>\n\t<li class="cat-item cat-item-81"><a href="http://www.softwareishard.com/blog/category/eventbug/" >Eventbug</a>\n</li>\n\t<li class="cat-item cat-item-4"><a href="http://www.softwareishard.com/blog/category/firebug-tutorial/" >Extending Firebug Tutorial</a>\n</li>\n\t<li class="cat-item cat-item-45"><a href="http://www.softwareishard.com/blog/category/extension-architecture/" >Extension Architecture</a>\n</li>\n\t<li class="cat-item cat-item-5"><a href="http://www.softwareishard.com/blog/category/firebug/" >Firebug</a>\n</li>\n\t<li class="cat-item cat-item-175"><a href="http://www.softwareishard.com/blog/category/firebug-extension/" >Firebug Extension</a>\n</li>\n\t<li class="cat-item cat-item-189"><a href="http://www.softwareishard.com/blog/category/firebug-lite/" >Firebug Lite</a>\n</li>\n\t<li class="cat-item cat-item-122"><a href="http://www.softwareishard.com/blog/category/firebug-tip/" >Firebug Tip</a>\n</li>\n\t<li class="cat-item cat-item-8"><a href="http://www.softwareishard.com/blog/category/firecookie/" >Firecookie</a>\n</li>\n\t<li class="cat-item cat-item-86"><a href="http://www.softwareishard.com/blog/category/firestarter/" >Firestarter</a>\n</li>\n\t<li class="cat-item cat-item-41"><a href="http://www.softwareishard.com/blog/category/fireunit/" >Fireunit</a>\n</li>\n\t<li class="cat-item cat-item-75"><a href="http://www.softwareishard.com/blog/category/har/" >HAR</a>\n</li>\n\t<li class="cat-item cat-item-146"><a href="http://www.softwareishard.com/blog/category/http-monitor/" >HTTP Monitor</a>\n</li>\n\t<li class="cat-item cat-item-145"><a href="http://www.softwareishard.com/blog/category/memory-leaks/" >Memory Leaks</a>\n</li>\n\t<li class="cat-item cat-item-59"><a href="http://www.softwareishard.com/blog/category/netexport/" >NetExport</a>\n</li>\n\t<li class="cat-item cat-item-199"><a href="http://www.softwareishard.com/blog/category/page-load-performance/" >Page Load Performance</a>\n</li>\n\t<li class="cat-item cat-item-196"><a href="http://www.softwareishard.com/blog/category/pixel-perfect/" >Pixel Perfect</a>\n</li>\n\t<li class="cat-item cat-item-18"><a href="http://www.softwareishard.com/blog/category/planet-mozilla/" >Planet Mozilla</a>\n</li>\n\t<li class="cat-item cat-item-34"><a href="http://www.softwareishard.com/blog/category/prism/" >Prism</a>\n</li>\n\t<li class="cat-item cat-item-217"><a href="http://www.softwareishard.com/blog/category/react/" >React</a>\n</li>\n\t<li class="cat-item cat-item-110"><a href="http://www.softwareishard.com/blog/category/release/" >Release</a>\n</li>\n\t<li class="cat-item cat-item-147"><a href="http://www.softwareishard.com/blog/category/selenium/" >Selenium</a>\n</li>\n\t<li class="cat-item cat-item-43"><a href="http://www.softwareishard.com/blog/category/testing/" >Testing</a>\n</li>\n\t<li class="cat-item cat-item-1"><a href="http://www.softwareishard.com/blog/category/uncategorized/" >Uncategorized</a>\n</li>\n\t<li class="cat-item cat-item-197"><a href="http://www.softwareishard.com/blog/category/websockets/" >WebSockets</a>\n</li>\n\t\t</ul>\n</div><div class="block"><h3>Recent Tweets</h3><div id="widget_twitter_vjck" ><ul><div id="twitter_time_line"  style="width:100%; overflow:hidden;" ><script type="text/javascript">function flip_twitter_image(arg) {var targetTagID = window.document.getElementById(arg); var styleStr = (window.document.documentElement.getAttribute("style") == window.document.documentElement.style) ? targetTagID.style.cssText : targetTagID.getAttribute( "style" ); var nonString = styleStr.match( /display:.*?none;/g ); var nonPos = nonString ? styleStr.indexOf( nonString ) : -1; if( nonPos >= 0 ) { styleStr = styleStr.substring( 0, nonPos ) + styleStr.substring( nonPos + nonString.length, styleStr.length ); styleStr = styleStr + "display:block;"; }else{ var blkString = styleStr.match( /display:.*?block;/g ); var blkPos = blkString ? styleStr.indexOf( blkString ) : -1; if( blkPos >= 0 ) { styleStr = styleStr.substring( 0, blkPos ) + styleStr.substring( blkPos + blkString.length, styleStr.length ); } styleStr = styleStr + "display:none;"; } if( styleStr ) { if( window.document.documentElement.getAttribute("style") == window.document.documentElement.style ) { targetTagID.style.cssText = styleStr; }else{ targetTagID.setAttribute( "style", styleStr); }}}</script><li>The HAR Show: Capturing and Analyzing performance data with HTTP Archive format\n <br /><a href="http://t.co/q2N3U8zU" target="_blank" >http://t.co/q2N3U8zU</a></li><li>Firebug Tip: The Start Button <br /><a href="http://t.co/CY6IsFsg" target="_blank" >http://t.co/CY6IsFsg</a></li><li><a href="http://twitter.com/search?q=%23Firebug" target="_blank" >#Firebug</a> Tip: What the heck is BFCache? <br /><a href="http://t.co/OZNjSBkt" target="_blank" >http://t.co/OZNjSBkt</a></li><li><a href="http://twitter.com/search?q=%23Firebug" target="_blank" >#Firebug</a> Tip: Log Function Calls <br /><a href="http://t.co/WcdIVV8q" target="_blank" >http://t.co/WcdIVV8q</a></li><li><a href="http://twitter.com/search?q=%23Firebug" target="_blank" >#Firebug</a> Tip: Log DOM Events <br /><a href="http://t.co/dvrs5jdl" target="_blank" >http://t.co/dvrs5jdl</a></li></div></ul></div><!-- cached --></div></div>\n<div class="bottom"></div>\n</div><div class="clear"></div>\n\n<div id="footer">\n<a href="http://www.wordpress.org"><img src="http://www.softwareishard.com/blog/wp-content/themes/miniBits/miniBits/img/wordpress.gif" alt="Wordpress.org"/></a>\n<a href="http://www.creativebits.it/news/tema-wordpress-minibits/"><img src="http://www.softwareishard.com/blog/wp-content/themes/miniBits/miniBits/img/creativebits.gif" alt="clearPaper by CreativeBits.it"/></a>\n\t<span>Copyright &copy; 2007 Software is hard. All rights reserved.</span>\n\t<span><a href="http://validator.w3.org/check/referer" title="Pagina valida XHTML 1.0 Transitional">Xhtml</a>, <a href="http://jigsaw.w3.org/css-validator/check/referer" title="Pagina valida CSS v.1">Css</a>, <a href="http://www.softwareishard.com/blog/feed/">Rss</a>. Powered by <a href="http://www.creativebits.it/news/tema-wordpress-minibits/">miniBits</a> &amp; <a href="http://www.wordpress.org/">Wordpress</a>.</span></div>\n\n</div>\n\n<script type=\'text/javascript\'>\n/* <![CDATA[ */\nvar JQLBSettings = {"fitToScreen":"0","resizeSpeed":"400","displayDownloadLink":"0","navbarOnTop":"0","loopImages":"","resizeCenter":"","marginSize":"","linkTarget":"","help":"","prevLinkTitle":"previous image","nextLinkTitle":"next image","prevLinkText":"\\u00ab Previous","nextLinkText":"Next \\u00bb","closeTitle":"close image gallery","image":"Image ","of":" of ","download":"Download","jqlb_overlay_opacity":"80","jqlb_overlay_color":"#000000","jqlb_overlay_close":"1","jqlb_border_width":"10","jqlb_border_color":"#ffffff","jqlb_border_radius":"0","jqlb_image_info_background_transparency":"100","jqlb_image_info_bg_color":"#ffffff","jqlb_image_info_text_color":"#000000","jqlb_image_info_text_fontsize":"10","jqlb_show_text_for_image":"1","jqlb_next_image_title":"next image","jqlb_previous_image_title":"previous image","jqlb_next_button_image":"http:\\/\\/www.softwareishard.com\\/blog\\/wp-content\\/plugins\\/wp-lightbox-2\\/styles\\/images\\/next.gif","jqlb_previous_button_image":"http:\\/\\/www.softwareishard.com\\/blog\\/wp-content\\/plugins\\/wp-lightbox-2\\/styles\\/images\\/prev.gif","jqlb_maximum_width":"","jqlb_maximum_height":"","jqlb_show_close_button":"1","jqlb_close_image_title":"close image gallery","jqlb_close_image_max_heght":"22","jqlb_image_for_close_lightbox":"http:\\/\\/www.softwareishard.com\\/blog\\/wp-content\\/plugins\\/wp-lightbox-2\\/styles\\/images\\/closelabel.gif","jqlb_keyboard_navigation":"1","jqlb_popup_size_fix":"0"};\n/* ]]> */\n</script>\n<script type=\'text/javascript\' src=\'http://www.softwareishard.com/blog/wp-content/plugins/wp-lightbox-2/wp-lightbox-2.min.js?ver=1.3.4.1\'></script>\n<script type=\'text/javascript\' src=\'http://www.softwareishard.com/blog/wp-includes/js/wp-embed.min.js?ver=4.7.18\'></script>\n\n<script src="http://www.google-analytics.com/urchin.js" type="text/javascript">\r\n</script>\r\n<script type="text/javascript">\r\n_uacct = "UA-3586722-1";\r\nurchinTracker();\r\n</script>\n</body>\n</html>',
          },
          redirectURL: "",
          headersSize: 567,
          bodySize: 14024,
          _transferSize: 14591,
          _error: null,
        },
        serverIPAddress: "[2a00:1ed0:2:0:1:5bef:c83b:1]",
        startedDateTime: "2020-09-03T03:33:53.721Z",
        time: 1450.232000000585,
        timings: {
          blocked: 6.656000000049709,
          dns: 144.718,
          ssl: -1,
          connect: 279.452,
          send: 0.2740000000000009,
          wait: 876.2490000000971,
          receive: 142.8830000004382,
          _blocked_queueing: 5.744000000049709,
        },
      },
      {
        _fromCache: "memory",
        _initiator: {
          type: "parser",
          url: "http://www.softwareishard.com/blog/har-12-spec/",
          lineNumber: 104,
        },
        _priority: "High",
        _resourceType: "script",
        cache: {},
        connection: "2610",
        pageref: "page_1",
        request: {
          method: "GET",
          url:
            "http://www.softwareishard.com/blog/wp-includes/js/jquery/jquery.js?ver=1.12.4",
          httpVersion: "http/1.1",
          headers: [
            {
              name: "Referer",
              value: "http://www.softwareishard.com/blog/har-12-spec/",
            },
            {
              name: "User-Agent",
              value:
                "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/85.0.4183.83 Safari/537.36",
            },
            {
              name: "DNT",
              value: "1",
            },
          ],
          queryString: [
            {
              name: "ver",
              value: "1.12.4",
            },
          ],
          cookies: [],
          headersSize: -1,
          bodySize: 0,
        },
        response: {
          status: 200,
          statusText: "OK",
          httpVersion: "http/1.1",
          headers: [
            {
              name: "Date",
              value: "Thu, 03 Sep 2020 02:07:54 GMT",
            },
            {
              name: "Content-Encoding",
              value: "gzip",
            },
            {
              name: "Last-Modified",
              value: "Thu, 05 Sep 2019 01:32:16 GMT",
            },
            {
              name: "Server",
              value: "Apache/2.4.10 (Debian)",
            },
            {
              name: "ETag",
              value: '"17a6a-591c44ab55e67-gzip"',
            },
            {
              name: "Vary",
              value: "User-Agent,Accept-Encoding",
            },
            {
              name: "Content-Type",
              value: "application/javascript",
            },
            {
              name: "Cache-Control",
              value: "max-age=1209600",
            },
            {
              name: "Connection",
              value: "Keep-Alive",
            },
            {
              name: "Accept-Ranges",
              value: "bytes",
            },
            {
              name: "Keep-Alive",
              value: "timeout=5, max=100",
            },
            {
              name: "Content-Length",
              value: "33776",
            },
            {
              name: "Expires",
              value: "Thu, 17 Sep 2020 02:07:54 GMT",
            },
          ],
          cookies: [],
          content: {
            size: 96874,
            mimeType: "application/javascript",
            text:
              '/*! jQuery v1.12.4 | (c) jQuery Foundation | jquery.org/license | WordPress 2019-05-16 */\n!function(a,b){"object"==typeof module&&"object"==typeof module.exports?module.exports=a.document?b(a,!0):function(a){if(!a.document)throw new Error("jQuery requires a window with a document");return b(a)}:b(a)}("undefined"!=typeof window?window:this,function(a,b){var c=[],d=a.document,e=c.slice,f=c.concat,g=c.push,h=c.indexOf,i={},j=i.toString,k=i.hasOwnProperty,l={},m="1.12.4",n=function(a,b){return new n.fn.init(a,b)},o=/^[\\s\\uFEFF\\xA0]+|[\\s\\uFEFF\\xA0]+$/g,p=/^-ms-/,q=/-([\\da-z])/gi,r=function(a,b){return b.toUpperCase()};n.fn=n.prototype={jquery:m,constructor:n,selector:"",length:0,toArray:function(){return e.call(this)},get:function(a){return null!=a?a<0?this[a+this.length]:this[a]:e.call(this)},pushStack:function(a){var b=n.merge(this.constructor(),a);return b.prevObject=this,b.context=this.context,b},each:function(a){return n.each(this,a)},map:function(a){return this.pushStack(n.map(this,function(b,c){return a.call(b,c,b)}))},slice:function(){return this.pushStack(e.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(a){var b=this.length,c=+a+(a<0?b:0);return this.pushStack(c>=0&&c<b?[this[c]]:[])},end:function(){return this.prevObject||this.constructor()},push:g,sort:c.sort,splice:c.splice},n.extend=n.fn.extend=function(){var a,b,c,d,e,f,g=arguments[0]||{},h=1,i=arguments.length,j=!1;for("boolean"==typeof g&&(j=g,g=arguments[h]||{},h++),"object"==typeof g||n.isFunction(g)||(g={}),h===i&&(g=this,h--);h<i;h++)if(null!=(e=arguments[h]))for(d in e)a=g[d],c=e[d],"__proto__"!==d&&g!==c&&(j&&c&&(n.isPlainObject(c)||(b=n.isArray(c)))?(b?(b=!1,f=a&&n.isArray(a)?a:[]):f=a&&n.isPlainObject(a)?a:{},g[d]=n.extend(j,f,c)):void 0!==c&&(g[d]=c));return g},n.extend({expando:"jQuery"+(m+Math.random()).replace(/\\D/g,""),isReady:!0,error:function(a){throw new Error(a)},noop:function(){},isFunction:function(a){return"function"===n.type(a)},isArray:Array.isArray||function(a){return"array"===n.type(a)},isWindow:function(a){return null!=a&&a==a.window},isNumeric:function(a){var b=a&&a.toString();return!n.isArray(a)&&b-parseFloat(b)+1>=0},isEmptyObject:function(a){var b;for(b in a)return!1;return!0},isPlainObject:function(a){var b;if(!a||"object"!==n.type(a)||a.nodeType||n.isWindow(a))return!1;try{if(a.constructor&&!k.call(a,"constructor")&&!k.call(a.constructor.prototype,"isPrototypeOf"))return!1}catch(c){return!1}if(!l.ownFirst)for(b in a)return k.call(a,b);for(b in a);return void 0===b||k.call(a,b)},type:function(a){return null==a?a+"":"object"==typeof a||"function"==typeof a?i[j.call(a)]||"object":typeof a},globalEval:function(b){b&&n.trim(b)&&(a.execScript||function(b){a.eval.call(a,b)})(b)},camelCase:function(a){return a.replace(p,"ms-").replace(q,r)},nodeName:function(a,b){return a.nodeName&&a.nodeName.toLowerCase()===b.toLowerCase()},each:function(a,b){var c,d=0;if(s(a)){for(c=a.length;d<c;d++)if(!1===b.call(a[d],d,a[d]))break}else for(d in a)if(!1===b.call(a[d],d,a[d]))break;return a},trim:function(a){return null==a?"":(a+"").replace(o,"")},makeArray:function(a,b){var c=b||[];return null!=a&&(s(Object(a))?n.merge(c,"string"==typeof a?[a]:a):g.call(c,a)),c},inArray:function(a,b,c){var d;if(b){if(h)return h.call(b,a,c);for(d=b.length,c=c?c<0?Math.max(0,d+c):c:0;c<d;c++)if(c in b&&b[c]===a)return c}return-1},merge:function(a,b){var c=+b.length,d=0,e=a.length;while(d<c)a[e++]=b[d++];if(c!==c)while(void 0!==b[d])a[e++]=b[d++];return a.length=e,a},grep:function(a,b,c){for(var d,e=[],f=0,g=a.length,h=!c;f<g;f++)(d=!b(a[f],f))!==h&&e.push(a[f]);return e},map:function(a,b,c){var d,e,g=0,h=[];if(s(a))for(d=a.length;g<d;g++)null!=(e=b(a[g],g,c))&&h.push(e);else for(g in a)null!=(e=b(a[g],g,c))&&h.push(e);return f.apply([],h)},guid:1,proxy:function(a,b){var c,d,f;if("string"==typeof b&&(f=a[b],b=a,a=f),n.isFunction(a))return c=e.call(arguments,2),d=function(){return a.apply(b||this,c.concat(e.call(arguments)))},d.guid=a.guid=a.guid||n.guid++,d},now:function(){return+new Date},support:l}),"function"==typeof Symbol&&(n.fn[Symbol.iterator]=c[Symbol.iterator]),n.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(a,b){i["[object "+b+"]"]=b.toLowerCase()});function s(a){var b=!!a&&"length"in a&&a.length,c=n.type(a);return"function"!==c&&!n.isWindow(a)&&("array"===c||0===b||"number"==typeof b&&b>0&&b-1 in a)}var t=function(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u="sizzle"+1*new Date,v=a.document,w=0,x=0,y=fa(),z=fa(),A=fa(),B=function(a,b){return a===b&&(l=!0),0},C=1<<31,D={}.hasOwnProperty,E=[],F=E.pop,G=E.push,H=E.push,I=E.slice,J=function(a,b){for(var c=0,d=a.length;c<d;c++)if(a[c]===b)return c;return-1},K="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",L="[\\\\x20\\\\t\\\\r\\\\n\\\\f]",M="(?:\\\\\\\\.|[\\\\w-]|[^\\\\x00-\\\\xa0])+",N="\\\\["+L+"*("+M+")(?:"+L+"*([*^$|!~]?=)"+L+"*(?:\'((?:\\\\\\\\.|[^\\\\\\\\\'])*)\'|\\"((?:\\\\\\\\.|[^\\\\\\\\\\"])*)\\"|("+M+"))|)"+L+"*\\\\]",O=":("+M+")(?:\\\\(((\'((?:\\\\\\\\.|[^\\\\\\\\\'])*)\'|\\"((?:\\\\\\\\.|[^\\\\\\\\\\"])*)\\")|((?:\\\\\\\\.|[^\\\\\\\\()[\\\\]]|"+N+")*)|.*)\\\\)|)",P=new RegExp(L+"+","g"),Q=new RegExp("^"+L+"+|((?:^|[^\\\\\\\\])(?:\\\\\\\\.)*)"+L+"+$","g"),R=new RegExp("^"+L+"*,"+L+"*"),S=new RegExp("^"+L+"*([>+~]|"+L+")"+L+"*"),T=new RegExp("="+L+"*([^\\\\]\'\\"]*?)"+L+"*\\\\]","g"),U=new RegExp(O),V=new RegExp("^"+M+"$"),W={ID:new RegExp("^#("+M+")"),CLASS:new RegExp("^\\\\.("+M+")"),TAG:new RegExp("^("+M+"|[*])"),ATTR:new RegExp("^"+N),PSEUDO:new RegExp("^"+O),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\\\("+L+"*(even|odd|(([+-]|)(\\\\d*)n|)"+L+"*(?:([+-]|)"+L+"*(\\\\d+)|))"+L+"*\\\\)|)","i"),bool:new RegExp("^(?:"+K+")$","i"),needsContext:new RegExp("^"+L+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\\\("+L+"*((?:-\\\\d)?\\\\d*)"+L+"*\\\\)|)(?=[^-]|$)","i")},X=/^(?:input|select|textarea|button)$/i,Y=/^h\\d$/i,Z=/^[^{]+\\{\\s*\\[native \\w/,$=/^(?:#([\\w-]+)|(\\w+)|\\.([\\w-]+))$/,_=/[+~]/,aa=/\'|\\\\/g,ba=new RegExp("\\\\\\\\([\\\\da-f]{1,6}"+L+"?|("+L+")|.)","ig"),ca=function(a,b,c){var d="0x"+b-65536;return d!==d||c?b:d<0?String.fromCharCode(d+65536):String.fromCharCode(d>>10|55296,1023&d|56320)},da=function(){m()};try{H.apply(E=I.call(v.childNodes),v.childNodes),E[v.childNodes.length].nodeType}catch(xa){H={apply:E.length?function(a,b){G.apply(a,I.call(b))}:function(a,b){var c=a.length,d=0;while(a[c++]=b[d++]);a.length=c-1}}}function ea(a,b,d,e){var f,h,j,k,l,o,r,s,w=b&&b.ownerDocument,x=b?b.nodeType:9;if(d=d||[],"string"!=typeof a||!a||1!==x&&9!==x&&11!==x)return d;if(!e&&((b?b.ownerDocument||b:v)!==n&&m(b),b=b||n,p)){if(11!==x&&(o=$.exec(a)))if(f=o[1]){if(9===x){if(!(j=b.getElementById(f)))return d;if(j.id===f)return d.push(j),d}else if(w&&(j=w.getElementById(f))&&t(b,j)&&j.id===f)return d.push(j),d}else{if(o[2])return H.apply(d,b.getElementsByTagName(a)),d;if((f=o[3])&&c.getElementsByClassName&&b.getElementsByClassName)return H.apply(d,b.getElementsByClassName(f)),d}if(c.qsa&&!A[a+" "]&&(!q||!q.test(a))){if(1!==x)w=b,s=a;else if("object"!==b.nodeName.toLowerCase()){(k=b.getAttribute("id"))?k=k.replace(aa,"\\\\$&"):b.setAttribute("id",k=u),r=g(a),h=r.length,l=V.test(k)?"#"+k:"[id=\'"+k+"\']";while(h--)r[h]=l+" "+pa(r[h]);s=r.join(","),w=_.test(a)&&na(b.parentNode)||b}if(s)try{return H.apply(d,w.querySelectorAll(s)),d}catch(y){}finally{k===u&&b.removeAttribute("id")}}}return i(a.replace(Q,"$1"),b,d,e)}function fa(){var a=[];function b(c,e){return a.push(c+" ")>d.cacheLength&&delete b[a.shift()],b[c+" "]=e}return b}function ga(a){return a[u]=!0,a}function ha(a){var b=n.createElement("div");try{return!!a(b)}catch(xa){return!1}finally{b.parentNode&&b.parentNode.removeChild(b),b=null}}function ia(a,b){var c=a.split("|"),e=c.length;while(e--)d.attrHandle[c[e]]=b}function ja(a,b){var c=b&&a,d=c&&1===a.nodeType&&1===b.nodeType&&(~b.sourceIndex||C)-(~a.sourceIndex||C);if(d)return d;if(c)while(c=c.nextSibling)if(c===b)return-1;return a?1:-1}function ka(a){return function(b){return"input"===b.nodeName.toLowerCase()&&b.type===a}}function la(a){return function(b){var c=b.nodeName.toLowerCase();return("input"===c||"button"===c)&&b.type===a}}function ma(a){return ga(function(b){return b=+b,ga(function(c,d){var e,f=a([],c.length,b),g=f.length;while(g--)c[e=f[g]]&&(c[e]=!(d[e]=c[e]))})})}function na(a){return a&&void 0!==a.getElementsByTagName&&a}c=ea.support={},f=ea.isXML=function(a){var b=a&&(a.ownerDocument||a).documentElement;return!!b&&"HTML"!==b.nodeName},m=ea.setDocument=function(a){var b,e,g=a?a.ownerDocument||a:v;return g!==n&&9===g.nodeType&&g.documentElement?(n=g,o=n.documentElement,p=!f(n),(e=n.defaultView)&&e.top!==e&&(e.addEventListener?e.addEventListener("unload",da,!1):e.attachEvent&&e.attachEvent("onunload",da)),c.attributes=ha(function(a){return a.className="i",!a.getAttribute("className")}),c.getElementsByTagName=ha(function(a){return a.appendChild(n.createComment("")),!a.getElementsByTagName("*").length}),c.getElementsByClassName=Z.test(n.getElementsByClassName),c.getById=ha(function(a){return o.appendChild(a).id=u,!n.getElementsByName||!n.getElementsByName(u).length}),c.getById?(d.find.ID=function(a,b){if(void 0!==b.getElementById&&p){var c=b.getElementById(a);return c?[c]:[]}},d.filter.ID=function(a){var b=a.replace(ba,ca);return function(a){return a.getAttribute("id")===b}}):(delete d.find.ID,d.filter.ID=function(a){var b=a.replace(ba,ca);return function(a){var c=void 0!==a.getAttributeNode&&a.getAttributeNode("id");return c&&c.value===b}}),d.find.TAG=c.getElementsByTagName?function(a,b){return void 0!==b.getElementsByTagName?b.getElementsByTagName(a):c.qsa?b.querySelectorAll(a):void 0}:function(a,b){var c,d=[],e=0,f=b.getElementsByTagName(a);if("*"===a){while(c=f[e++])1===c.nodeType&&d.push(c);return d}return f},d.find.CLASS=c.getElementsByClassName&&function(a,b){if(void 0!==b.getElementsByClassName&&p)return b.getElementsByClassName(a)},r=[],q=[],(c.qsa=Z.test(n.querySelectorAll))&&(ha(function(a){o.appendChild(a).innerHTML="<a id=\'"+u+"\'></a><select id=\'"+u+"-\\r\\\\\' msallowcapture=\'\'><option selected=\'\'></option></select>",a.querySelectorAll("[msallowcapture^=\'\']").length&&q.push("[*^$]="+L+"*(?:\'\'|\\"\\")"),a.querySelectorAll("[selected]").length||q.push("\\\\["+L+"*(?:value|"+K+")"),a.querySelectorAll("[id~="+u+"-]").length||q.push("~="),a.querySelectorAll(":checked").length||q.push(":checked"),a.querySelectorAll("a#"+u+"+*").length||q.push(".#.+[+~]")}),ha(function(a){var b=n.createElement("input");b.setAttribute("type","hidden"),a.appendChild(b).setAttribute("name","D"),a.querySelectorAll("[name=d]").length&&q.push("name"+L+"*[*^$|!~]?="),a.querySelectorAll(":enabled").length||q.push(":enabled",":disabled"),a.querySelectorAll("*,:x"),q.push(",.*:")})),(c.matchesSelector=Z.test(s=o.matches||o.webkitMatchesSelector||o.mozMatchesSelector||o.oMatchesSelector||o.msMatchesSelector))&&ha(function(a){c.disconnectedMatch=s.call(a,"div"),s.call(a,"[s!=\'\']:x"),r.push("!=",O)}),q=q.length&&new RegExp(q.join("|")),r=r.length&&new RegExp(r.join("|")),b=Z.test(o.compareDocumentPosition),t=b||Z.test(o.contains)?function(a,b){var c=9===a.nodeType?a.documentElement:a,d=b&&b.parentNode;return a===d||!(!d||1!==d.nodeType||!(c.contains?c.contains(d):a.compareDocumentPosition&&16&a.compareDocumentPosition(d)))}:function(a,b){if(b)while(b=b.parentNode)if(b===a)return!0;return!1},B=b?function(a,b){if(a===b)return l=!0,0;var d=!a.compareDocumentPosition-!b.compareDocumentPosition;return d||(d=(a.ownerDocument||a)===(b.ownerDocument||b)?a.compareDocumentPosition(b):1,1&d||!c.sortDetached&&b.compareDocumentPosition(a)===d?a===n||a.ownerDocument===v&&t(v,a)?-1:b===n||b.ownerDocument===v&&t(v,b)?1:k?J(k,a)-J(k,b):0:4&d?-1:1)}:function(a,b){if(a===b)return l=!0,0;var c,d=0,e=a.parentNode,f=b.parentNode,g=[a],h=[b];if(!e||!f)return a===n?-1:b===n?1:e?-1:f?1:k?J(k,a)-J(k,b):0;if(e===f)return ja(a,b);c=a;while(c=c.parentNode)g.unshift(c);c=b;while(c=c.parentNode)h.unshift(c);while(g[d]===h[d])d++;return d?ja(g[d],h[d]):g[d]===v?-1:h[d]===v?1:0},n):n},ea.matches=function(a,b){return ea(a,null,null,b)},ea.matchesSelector=function(a,b){if((a.ownerDocument||a)!==n&&m(a),b=b.replace(T,"=\'$1\']"),c.matchesSelector&&p&&!A[b+" "]&&(!r||!r.test(b))&&(!q||!q.test(b)))try{var d=s.call(a,b);if(d||c.disconnectedMatch||a.document&&11!==a.document.nodeType)return d}catch(xa){}return ea(b,n,null,[a]).length>0},ea.contains=function(a,b){return(a.ownerDocument||a)!==n&&m(a),t(a,b)},ea.attr=function(a,b){(a.ownerDocument||a)!==n&&m(a);var e=d.attrHandle[b.toLowerCase()],f=e&&D.call(d.attrHandle,b.toLowerCase())?e(a,b,!p):void 0;return void 0!==f?f:c.attributes||!p?a.getAttribute(b):(f=a.getAttributeNode(b))&&f.specified?f.value:null},ea.error=function(a){throw new Error("Syntax error, unrecognized expression: "+a)},ea.uniqueSort=function(a){var b,d=[],e=0,f=0;if(l=!c.detectDuplicates,k=!c.sortStable&&a.slice(0),a.sort(B),l){while(b=a[f++])b===a[f]&&(e=d.push(f));while(e--)a.splice(d[e],1)}return k=null,a},e=ea.getText=function(a){var b,c="",d=0,f=a.nodeType;if(f){if(1===f||9===f||11===f){if("string"==typeof a.textContent)return a.textContent;for(a=a.firstChild;a;a=a.nextSibling)c+=e(a)}else if(3===f||4===f)return a.nodeValue}else while(b=a[d++])c+=e(b);return c},d=ea.selectors={cacheLength:50,createPseudo:ga,match:W,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(a){return a[1]=a[1].replace(ba,ca),a[3]=(a[3]||a[4]||a[5]||"").replace(ba,ca),"~="===a[2]&&(a[3]=" "+a[3]+" "),a.slice(0,4)},CHILD:function(a){return a[1]=a[1].toLowerCase(),"nth"===a[1].slice(0,3)?(a[3]||ea.error(a[0]),a[4]=+(a[4]?a[5]+(a[6]||1):2*("even"===a[3]||"odd"===a[3])),a[5]=+(a[7]+a[8]||"odd"===a[3])):a[3]&&ea.error(a[0]),a},PSEUDO:function(a){var b,c=!a[6]&&a[2];return W.CHILD.test(a[0])?null:(a[3]?a[2]=a[4]||a[5]||"":c&&U.test(c)&&(b=g(c,!0))&&(b=c.indexOf(")",c.length-b)-c.length)&&(a[0]=a[0].slice(0,b),a[2]=c.slice(0,b)),a.slice(0,3))}},filter:{TAG:function(a){var b=a.replace(ba,ca).toLowerCase();return"*"===a?function(){return!0}:function(a){return a.nodeName&&a.nodeName.toLowerCase()===b}},CLASS:function(a){var b=y[a+" "];return b||(b=new RegExp("(^|"+L+")"+a+"("+L+"|$)"))&&y(a,function(a){return b.test("string"==typeof a.className&&a.className||void 0!==a.getAttribute&&a.getAttribute("class")||"")})},ATTR:function(a,b,c){return function(d){var e=ea.attr(d,a);return null==e?"!="===b:!b||(e+="","="===b?e===c:"!="===b?e!==c:"^="===b?c&&0===e.indexOf(c):"*="===b?c&&e.indexOf(c)>-1:"$="===b?c&&e.slice(-c.length)===c:"~="===b?(" "+e.replace(P," ")+" ").indexOf(c)>-1:"|="===b&&(e===c||e.slice(0,c.length+1)===c+"-"))}},CHILD:function(a,b,c,d,e){var f="nth"!==a.slice(0,3),g="last"!==a.slice(-4),h="of-type"===b;return 1===d&&0===e?function(a){return!!a.parentNode}:function(b,c,i){var j,k,l,m,n,o,p=f!==g?"nextSibling":"previousSibling",q=b.parentNode,r=h&&b.nodeName.toLowerCase(),s=!i&&!h,t=!1;if(q){if(f){while(p){m=b;while(m=m[p])if(h?m.nodeName.toLowerCase()===r:1===m.nodeType)return!1;o=p="only"===a&&!o&&"nextSibling"}return!0}if(o=[g?q.firstChild:q.lastChild],g&&s){m=q,l=m[u]||(m[u]={}),k=l[m.uniqueID]||(l[m.uniqueID]={}),j=k[a]||[],n=j[0]===w&&j[1],t=n&&j[2],m=n&&q.childNodes[n];while(m=++n&&m&&m[p]||(t=n=0)||o.pop())if(1===m.nodeType&&++t&&m===b){k[a]=[w,n,t];break}}else if(s&&(m=b,l=m[u]||(m[u]={}),k=l[m.uniqueID]||(l[m.uniqueID]={}),j=k[a]||[],n=j[0]===w&&j[1],t=n),!1===t)while(m=++n&&m&&m[p]||(t=n=0)||o.pop())if((h?m.nodeName.toLowerCase()===r:1===m.nodeType)&&++t&&(s&&(l=m[u]||(m[u]={}),k=l[m.uniqueID]||(l[m.uniqueID]={}),k[a]=[w,t]),m===b))break;return(t-=e)===d||t%d==0&&t/d>=0}}},PSEUDO:function(a,b){var c,e=d.pseudos[a]||d.setFilters[a.toLowerCase()]||ea.error("unsupported pseudo: "+a);return e[u]?e(b):e.length>1?(c=[a,a,"",b],d.setFilters.hasOwnProperty(a.toLowerCase())?ga(function(a,c){var d,f=e(a,b),g=f.length;while(g--)d=J(a,f[g]),a[d]=!(c[d]=f[g])}):function(a){return e(a,0,c)}):e}},pseudos:{not:ga(function(a){var b=[],c=[],d=h(a.replace(Q,"$1"));return d[u]?ga(function(a,b,c,e){var f,g=d(a,null,e,[]),h=a.length;while(h--)(f=g[h])&&(a[h]=!(b[h]=f))}):function(a,e,f){return b[0]=a,d(b,null,f,c),b[0]=null,!c.pop()}}),has:ga(function(a){return function(b){return ea(a,b).length>0}}),contains:ga(function(a){return a=a.replace(ba,ca),function(b){return(b.textContent||b.innerText||e(b)).indexOf(a)>-1}}),lang:ga(function(a){return V.test(a||"")||ea.error("unsupported lang: "+a),a=a.replace(ba,ca).toLowerCase(),function(b){var c;do{if(c=p?b.lang:b.getAttribute("xml:lang")||b.getAttribute("lang"))return(c=c.toLowerCase())===a||0===c.indexOf(a+"-")}while((b=b.parentNode)&&1===b.nodeType);return!1}}),target:function(b){var c=a.location&&a.location.hash;return c&&c.slice(1)===b.id},root:function(a){return a===o},focus:function(a){return a===n.activeElement&&(!n.hasFocus||n.hasFocus())&&!!(a.type||a.href||~a.tabIndex)},enabled:function(a){return!1===a.disabled},disabled:function(a){return!0===a.disabled},checked:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&!!a.checked||"option"===b&&!!a.selected},selected:function(a){return a.parentNode&&a.parentNode.selectedIndex,!0===a.selected},empty:function(a){for(a=a.firstChild;a;a=a.nextSibling)if(a.nodeType<6)return!1;return!0},parent:function(a){return!d.pseudos.empty(a)},header:function(a){return Y.test(a.nodeName)},input:function(a){return X.test(a.nodeName)},button:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&"button"===a.type||"button"===b},text:function(a){var b;return"input"===a.nodeName.toLowerCase()&&"text"===a.type&&(null==(b=a.getAttribute("type"))||"text"===b.toLowerCase())},first:ma(function(){return[0]}),last:ma(function(a,b){return[b-1]}),eq:ma(function(a,b,c){return[c<0?c+b:c]}),even:ma(function(a,b){for(var c=0;c<b;c+=2)a.push(c);return a}),odd:ma(function(a,b){for(var c=1;c<b;c+=2)a.push(c);return a}),lt:ma(function(a,b,c){for(var d=c<0?c+b:c;--d>=0;)a.push(d);return a}),gt:ma(function(a,b,c){for(var d=c<0?c+b:c;++d<b;)a.push(d);return a})}},d.pseudos.nth=d.pseudos.eq;for(b in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})d.pseudos[b]=ka(b);for(b in{submit:!0,reset:!0})d.pseudos[b]=la(b);function oa(){}oa.prototype=d.filters=d.pseudos,d.setFilters=new oa,g=ea.tokenize=function(a,b){var c,e,f,g,h,i,j,k=z[a+" "];if(k)return b?0:k.slice(0);h=a,i=[],j=d.preFilter;while(h){c&&!(e=R.exec(h))||(e&&(h=h.slice(e[0].length)||h),i.push(f=[])),c=!1,(e=S.exec(h))&&(c=e.shift(),f.push({value:c,type:e[0].replace(Q," ")}),h=h.slice(c.length));for(g in d.filter)!(e=W[g].exec(h))||j[g]&&!(e=j[g](e))||(c=e.shift(),f.push({value:c,type:g,matches:e}),h=h.slice(c.length));if(!c)break}return b?h.length:h?ea.error(a):z(a,i).slice(0)};function pa(a){for(var b=0,c=a.length,d="";b<c;b++)d+=a[b].value;return d}function qa(a,b,c){var d=b.dir,e=c&&"parentNode"===d,f=x++;return b.first?function(b,c,f){while(b=b[d])if(1===b.nodeType||e)return a(b,c,f)}:function(b,c,g){var h,i,j,k=[w,f];if(g){while(b=b[d])if((1===b.nodeType||e)&&a(b,c,g))return!0}else while(b=b[d])if(1===b.nodeType||e){if(j=b[u]||(b[u]={}),i=j[b.uniqueID]||(j[b.uniqueID]={}),(h=i[d])&&h[0]===w&&h[1]===f)return k[2]=h[2];if(i[d]=k,k[2]=a(b,c,g))return!0}}}function ra(a){return a.length>1?function(b,c,d){var e=a.length;while(e--)if(!a[e](b,c,d))return!1;return!0}:a[0]}function sa(a,b,c){for(var d=0,e=b.length;d<e;d++)ea(a,b[d],c);return c}function ta(a,b,c,d,e){for(var f,g=[],h=0,i=a.length,j=null!=b;h<i;h++)(f=a[h])&&(c&&!c(f,d,e)||(g.push(f),j&&b.push(h)));return g}function ua(a,b,c,d,e,f){return d&&!d[u]&&(d=ua(d)),e&&!e[u]&&(e=ua(e,f)),ga(function(f,g,h,i){var j,k,l,m=[],n=[],o=g.length,p=f||sa(b||"*",h.nodeType?[h]:h,[]),q=!a||!f&&b?p:ta(p,m,a,h,i),r=c?e||(f?a:o||d)?[]:g:q;if(c&&c(q,r,h,i),d){j=ta(r,n),d(j,[],h,i),k=j.length;while(k--)(l=j[k])&&(r[n[k]]=!(q[n[k]]=l))}if(f){if(e||a){if(e){j=[],k=r.length;while(k--)(l=r[k])&&j.push(q[k]=l);e(null,r=[],j,i)}k=r.length;while(k--)(l=r[k])&&(j=e?J(f,l):m[k])>-1&&(f[j]=!(g[j]=l))}}else r=ta(r===g?r.splice(o,r.length):r),e?e(null,g,r,i):H.apply(g,r)})}function va(a){for(var b,c,e,f=a.length,g=d.relative[a[0].type],h=g||d.relative[" "],i=g?1:0,k=qa(function(a){return a===b},h,!0),l=qa(function(a){return J(b,a)>-1},h,!0),m=[function(a,c,d){var e=!g&&(d||c!==j)||((b=c).nodeType?k(a,c,d):l(a,c,d));return b=null,e}];i<f;i++)if(c=d.relative[a[i].type])m=[qa(ra(m),c)];else{if(c=d.filter[a[i].type].apply(null,a[i].matches),c[u]){for(e=++i;e<f;e++)if(d.relative[a[e].type])break;return ua(i>1&&ra(m),i>1&&pa(a.slice(0,i-1).concat({value:" "===a[i-2].type?"*":""})).replace(Q,"$1"),c,i<e&&va(a.slice(i,e)),e<f&&va(a=a.slice(e)),e<f&&pa(a))}m.push(c)}return ra(m)}function wa(a,b){var c=b.length>0,e=a.length>0,f=function(f,g,h,i,k){var l,o,q,r=0,s="0",t=f&&[],u=[],v=j,x=f||e&&d.find.TAG("*",k),y=w+=null==v?1:Math.random()||.1,z=x.length;for(k&&(j=g===n||g||k);s!==z&&null!=(l=x[s]);s++){if(e&&l){o=0,g||l.ownerDocument===n||(m(l),h=!p);while(q=a[o++])if(q(l,g||n,h)){i.push(l);break}k&&(w=y)}c&&((l=!q&&l)&&r--,f&&t.push(l))}if(r+=s,c&&s!==r){o=0;while(q=b[o++])q(t,u,g,h);if(f){if(r>0)while(s--)t[s]||u[s]||(u[s]=F.call(i));u=ta(u)}H.apply(i,u),k&&!f&&u.length>0&&r+b.length>1&&ea.uniqueSort(i)}return k&&(w=y,j=v),t};return c?ga(f):f}return h=ea.compile=function(a,b){var c,d=[],e=[],f=A[a+" "];if(!f){b||(b=g(a)),c=b.length;while(c--)f=va(b[c]),f[u]?d.push(f):e.push(f);f=A(a,wa(e,d)),f.selector=a}return f},i=ea.select=function(a,b,e,f){var i,j,k,l,m,n="function"==typeof a&&a,o=!f&&g(a=n.selector||a);if(e=e||[],1===o.length){if(j=o[0]=o[0].slice(0),j.length>2&&"ID"===(k=j[0]).type&&c.getById&&9===b.nodeType&&p&&d.relative[j[1].type]){if(!(b=(d.find.ID(k.matches[0].replace(ba,ca),b)||[])[0]))return e;n&&(b=b.parentNode),a=a.slice(j.shift().value.length)}i=W.needsContext.test(a)?0:j.length;while(i--){if(k=j[i],d.relative[l=k.type])break;if((m=d.find[l])&&(f=m(k.matches[0].replace(ba,ca),_.test(j[0].type)&&na(b.parentNode)||b))){if(j.splice(i,1),!(a=f.length&&pa(j)))return H.apply(e,f),e;break}}}return(n||h(a,o))(f,b,!p,e,!b||_.test(a)&&na(b.parentNode)||b),e},c.sortStable=u.split("").sort(B).join("")===u,c.detectDuplicates=!!l,m(),c.sortDetached=ha(function(a){return 1&a.compareDocumentPosition(n.createElement("div"))}),ha(function(a){return a.innerHTML="<a href=\'#\'></a>","#"===a.firstChild.getAttribute("href")})||ia("type|href|height|width",function(a,b,c){if(!c)return a.getAttribute(b,"type"===b.toLowerCase()?1:2)}),c.attributes&&ha(function(a){return a.innerHTML="<input/>",a.firstChild.setAttribute("value",""),""===a.firstChild.getAttribute("value")})||ia("value",function(a,b,c){if(!c&&"input"===a.nodeName.toLowerCase())return a.defaultValue}),ha(function(a){return null==a.getAttribute("disabled")})||ia(K,function(a,b,c){var d;if(!c)return!0===a[b]?b.toLowerCase():(d=a.getAttributeNode(b))&&d.specified?d.value:null}),ea}(a);n.find=t,n.expr=t.selectors,n.expr[":"]=n.expr.pseudos,n.uniqueSort=n.unique=t.uniqueSort,n.text=t.getText,n.isXMLDoc=t.isXML,n.contains=t.contains;var u=function(a,b,c){var d=[],e=void 0!==c;while((a=a[b])&&9!==a.nodeType)if(1===a.nodeType){if(e&&n(a).is(c))break;d.push(a)}return d},v=function(a,b){for(var c=[];a;a=a.nextSibling)1===a.nodeType&&a!==b&&c.push(a);return c},w=n.expr.match.needsContext,x=/^<([\\w-]+)\\s*\\/?>(?:<\\/\\1>|)$/,y=/^.[^:#\\[\\.,]*$/;function z(a,b,c){if(n.isFunction(b))return n.grep(a,function(a,d){return!!b.call(a,d,a)!==c});if(b.nodeType)return n.grep(a,function(a){return a===b!==c});if("string"==typeof b){if(y.test(b))return n.filter(b,a,c);b=n.filter(b,a)}return n.grep(a,function(a){return n.inArray(a,b)>-1!==c})}n.filter=function(a,b,c){var d=b[0];return c&&(a=":not("+a+")"),1===b.length&&1===d.nodeType?n.find.matchesSelector(d,a)?[d]:[]:n.find.matches(a,n.grep(b,function(a){return 1===a.nodeType}))},n.fn.extend({find:function(a){var b,c=[],d=this,e=d.length;if("string"!=typeof a)return this.pushStack(n(a).filter(function(){for(b=0;b<e;b++)if(n.contains(d[b],this))return!0}));for(b=0;b<e;b++)n.find(a,d[b],c);return c=this.pushStack(e>1?n.unique(c):c),c.selector=this.selector?this.selector+" "+a:a,c},filter:function(a){return this.pushStack(z(this,a||[],!1))},not:function(a){return this.pushStack(z(this,a||[],!0))},is:function(a){return!!z(this,"string"==typeof a&&w.test(a)?n(a):a||[],!1).length}});var A,B=/^(?:\\s*(<[\\w\\W]+>)[^>]*|#([\\w-]*))$/;(n.fn.init=function(a,b,c){var e,f;if(!a)return this;if(c=c||A,"string"==typeof a){if(!(e="<"===a.charAt(0)&&">"===a.charAt(a.length-1)&&a.length>=3?[null,a,null]:B.exec(a))||!e[1]&&b)return!b||b.jquery?(b||c).find(a):this.constructor(b).find(a);if(e[1]){if(b=b instanceof n?b[0]:b,n.merge(this,n.parseHTML(e[1],b&&b.nodeType?b.ownerDocument||b:d,!0)),x.test(e[1])&&n.isPlainObject(b))for(e in b)n.isFunction(this[e])?this[e](b[e]):this.attr(e,b[e]);return this}if((f=d.getElementById(e[2]))&&f.parentNode){if(f.id!==e[2])return A.find(a);this.length=1,this[0]=f}return this.context=d,this.selector=a,this}return a.nodeType?(this.context=this[0]=a,this.length=1,this):n.isFunction(a)?void 0!==c.ready?c.ready(a):a(n):(void 0!==a.selector&&(this.selector=a.selector,this.context=a.context),n.makeArray(a,this))}).prototype=n.fn,A=n(d);var C=/^(?:parents|prev(?:Until|All))/,D={children:!0,contents:!0,next:!0,prev:!0};n.fn.extend({has:function(a){var b,c=n(a,this),d=c.length;return this.filter(function(){for(b=0;b<d;b++)if(n.contains(this,c[b]))return!0})},closest:function(a,b){for(var c,d=0,e=this.length,f=[],g=w.test(a)||"string"!=typeof a?n(a,b||this.context):0;d<e;d++)for(c=this[d];c&&c!==b;c=c.parentNode)if(c.nodeType<11&&(g?g.index(c)>-1:1===c.nodeType&&n.find.matchesSelector(c,a))){f.push(c);break}return this.pushStack(f.length>1?n.uniqueSort(f):f)},index:function(a){return a?"string"==typeof a?n.inArray(this[0],n(a)):n.inArray(a.jquery?a[0]:a,this):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(a,b){return this.pushStack(n.uniqueSort(n.merge(this.get(),n(a,b))))},addBack:function(a){return this.add(null==a?this.prevObject:this.prevObject.filter(a))}});function E(a,b){do{a=a[b]}while(a&&1!==a.nodeType);return a}n.each({parent:function(a){var b=a.parentNode;return b&&11!==b.nodeType?b:null},parents:function(a){return u(a,"parentNode")},parentsUntil:function(a,b,c){return u(a,"parentNode",c)},next:function(a){return E(a,"nextSibling")},prev:function(a){return E(a,"previousSibling")},nextAll:function(a){return u(a,"nextSibling")},prevAll:function(a){return u(a,"previousSibling")},nextUntil:function(a,b,c){return u(a,"nextSibling",c)},prevUntil:function(a,b,c){return u(a,"previousSibling",c)},siblings:function(a){return v((a.parentNode||{}).firstChild,a)},children:function(a){return v(a.firstChild)},contents:function(a){return n.nodeName(a,"iframe")?a.contentDocument||a.contentWindow.document:n.merge([],a.childNodes)}},function(a,b){n.fn[a]=function(c,d){var e=n.map(this,b,c);return"Until"!==a.slice(-5)&&(d=c),d&&"string"==typeof d&&(e=n.filter(d,e)),this.length>1&&(D[a]||(e=n.uniqueSort(e)),C.test(a)&&(e=e.reverse())),this.pushStack(e)}});var F=/\\S+/g;function G(a){var b={};return n.each(a.match(F)||[],function(a,c){b[c]=!0}),b}n.Callbacks=function(a){a="string"==typeof a?G(a):n.extend({},a);var b,c,d,e,f=[],g=[],h=-1,i=function(){for(e=a.once,d=b=!0;g.length;h=-1){c=g.shift();while(++h<f.length)!1===f[h].apply(c[0],c[1])&&a.stopOnFalse&&(h=f.length,c=!1)}a.memory||(c=!1),b=!1,e&&(f=c?[]:"")},j={add:function(){return f&&(c&&!b&&(h=f.length-1,g.push(c)),function b(c){n.each(c,function(c,d){n.isFunction(d)?a.unique&&j.has(d)||f.push(d):d&&d.length&&"string"!==n.type(d)&&b(d)})}(arguments),c&&!b&&i()),this},remove:function(){return n.each(arguments,function(a,b){var c;while((c=n.inArray(b,f,c))>-1)f.splice(c,1),c<=h&&h--}),this},has:function(a){return a?n.inArray(a,f)>-1:f.length>0},empty:function(){return f&&(f=[]),this},disable:function(){return e=g=[],f=c="",this},disabled:function(){return!f},lock:function(){return e=!0,c||j.disable(),this},locked:function(){return!!e},fireWith:function(a,c){return e||(c=c||[],c=[a,c.slice?c.slice():c],g.push(c),b||i()),this},fire:function(){return j.fireWith(this,arguments),this},fired:function(){return!!d}};return j},n.extend({Deferred:function(a){var b=[["resolve","done",n.Callbacks("once memory"),"resolved"],["reject","fail",n.Callbacks("once memory"),"rejected"],["notify","progress",n.Callbacks("memory")]],c="pending",d={state:function(){return c},always:function(){return e.done(arguments).fail(arguments),this},then:function(){var a=arguments;return n.Deferred(function(c){n.each(b,function(b,f){var g=n.isFunction(a[b])&&a[b];e[f[1]](function(){var a=g&&g.apply(this,arguments);a&&n.isFunction(a.promise)?a.promise().progress(c.notify).done(c.resolve).fail(c.reject):c[f[0]+"With"](this===d?c.promise():this,g?[a]:arguments)})}),a=null}).promise()},promise:function(a){return null!=a?n.extend(a,d):d}},e={};return d.pipe=d.then,n.each(b,function(a,f){var g=f[2],h=f[3];d[f[1]]=g.add,h&&g.add(function(){c=h},b[1^a][2].disable,b[2][2].lock),e[f[0]]=function(){return e[f[0]+"With"](this===e?d:this,arguments),this},e[f[0]+"With"]=g.fireWith}),d.promise(e),a&&a.call(e,e),e},when:function(a){var b=0,c=e.call(arguments),d=c.length,f=1!==d||a&&n.isFunction(a.promise)?d:0,g=1===f?a:n.Deferred(),h=function(a,b,c){return function(d){b[a]=this,c[a]=arguments.length>1?e.call(arguments):d,c===i?g.notifyWith(b,c):--f||g.resolveWith(b,c)}},i,j,k;if(d>1)for(i=new Array(d),j=new Array(d),k=new Array(d);b<d;b++)c[b]&&n.isFunction(c[b].promise)?c[b].promise().progress(h(b,j,i)).done(h(b,k,c)).fail(g.reject):--f;return f||g.resolveWith(k,c),g.promise()}});var H;n.fn.ready=function(a){return n.ready.promise().done(a),this},n.extend({isReady:!1,readyWait:1,holdReady:function(a){a?n.readyWait++:n.ready(!0)},ready:function(a){(!0===a?--n.readyWait:n.isReady)||(n.isReady=!0,!0!==a&&--n.readyWait>0||(H.resolveWith(d,[n]),n.fn.triggerHandler&&(n(d).triggerHandler("ready"),n(d).off("ready"))))}});function I(){d.addEventListener?(d.removeEventListener("DOMContentLoaded",J),a.removeEventListener("load",J)):(d.detachEvent("onreadystatechange",J),a.detachEvent("onload",J))}function J(){(d.addEventListener||"load"===a.event.type||"complete"===d.readyState)&&(I(),n.ready())}n.ready.promise=function(b){if(!H)if(H=n.Deferred(),"complete"===d.readyState||"loading"!==d.readyState&&!d.documentElement.doScroll)a.setTimeout(n.ready);else if(d.addEventListener)d.addEventListener("DOMContentLoaded",J),a.addEventListener("load",J);else{d.attachEvent("onreadystatechange",J),a.attachEvent("onload",J);var c=!1;try{c=null==a.frameElement&&d.documentElement}catch(e){}c&&c.doScroll&&function b(){if(!n.isReady){try{c.doScroll("left")}catch(e){return a.setTimeout(b,50)}I(),n.ready()}}()}return H.promise(b)},n.ready.promise();var K;for(K in n(l))break;l.ownFirst="0"===K,l.inlineBlockNeedsLayout=!1,n(function(){var a,b,c,e;(c=d.getElementsByTagName("body")[0])&&c.style&&(b=d.createElement("div"),e=d.createElement("div"),e.style.cssText="position:absolute;border:0;width:0;height:0;top:0;left:-9999px",c.appendChild(e).appendChild(b),void 0!==b.style.zoom&&(b.style.cssText="display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1",l.inlineBlockNeedsLayout=a=3===b.offsetWidth,a&&(c.style.zoom=1)),c.removeChild(e))}),function(){var a=d.createElement("div");l.deleteExpando=!0;try{delete a.test}catch(b){l.deleteExpando=!1}a=null}();var L=function(a){var b=n.noData[(a.nodeName+" ").toLowerCase()],c=+a.nodeType||1;return(1===c||9===c)&&(!b||!0!==b&&a.getAttribute("classid")===b)},M=/^(?:\\{[\\w\\W]*\\}|\\[[\\w\\W]*\\])$/,N=/([A-Z])/g;function O(a,b,c){if(void 0===c&&1===a.nodeType){var d="data-"+b.replace(N,"-$1").toLowerCase();if("string"==typeof(c=a.getAttribute(d))){try{c="true"===c||"false"!==c&&("null"===c?null:+c+""===c?+c:M.test(c)?n.parseJSON(c):c)}catch(e){}n.data(a,b,c)}else c=void 0}return c}function P(a){var b\n;for(b in a)if(("data"!==b||!n.isEmptyObject(a[b]))&&"toJSON"!==b)return!1;return!0}function Q(a,b,d,e){if(L(a)){var f,g,h=n.expando,i=a.nodeType,j=i?n.cache:a,k=i?a[h]:a[h]&&h;if(k&&j[k]&&(e||j[k].data)||void 0!==d||"string"!=typeof b)return k||(k=i?a[h]=c.pop()||n.guid++:h),j[k]||(j[k]=i?{}:{toJSON:n.noop}),"object"!=typeof b&&"function"!=typeof b||(e?j[k]=n.extend(j[k],b):j[k].data=n.extend(j[k].data,b)),g=j[k],e||(g.data||(g.data={}),g=g.data),void 0!==d&&(g[n.camelCase(b)]=d),"string"==typeof b?null==(f=g[b])&&(f=g[n.camelCase(b)]):f=g,f}}function R(a,b,c){if(L(a)){var d,e,f=a.nodeType,g=f?n.cache:a,h=f?a[n.expando]:n.expando;if(g[h]){if(b&&(d=c?g[h]:g[h].data)){n.isArray(b)?b=b.concat(n.map(b,n.camelCase)):b in d?b=[b]:(b=n.camelCase(b),b=b in d?[b]:b.split(" ")),e=b.length;while(e--)delete d[b[e]];if(c?!P(d):!n.isEmptyObject(d))return}(c||(delete g[h].data,P(g[h])))&&(f?n.cleanData([a],!0):l.deleteExpando||g!=g.window?delete g[h]:g[h]=void 0)}}}n.extend({cache:{},noData:{"applet ":!0,"embed ":!0,"object ":"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"},hasData:function(a){return!!(a=a.nodeType?n.cache[a[n.expando]]:a[n.expando])&&!P(a)},data:function(a,b,c){return Q(a,b,c)},removeData:function(a,b){return R(a,b)},_data:function(a,b,c){return Q(a,b,c,!0)},_removeData:function(a,b){return R(a,b,!0)}}),n.fn.extend({data:function(a,b){var c,d,e,f=this[0],g=f&&f.attributes;if(void 0===a){if(this.length&&(e=n.data(f),1===f.nodeType&&!n._data(f,"parsedAttrs"))){c=g.length;while(c--)g[c]&&(d=g[c].name,0===d.indexOf("data-")&&(d=n.camelCase(d.slice(5)),O(f,d,e[d])));n._data(f,"parsedAttrs",!0)}return e}return"object"==typeof a?this.each(function(){n.data(this,a)}):arguments.length>1?this.each(function(){n.data(this,a,b)}):f?O(f,a,n.data(f,a)):void 0},removeData:function(a){return this.each(function(){n.removeData(this,a)})}}),n.extend({queue:function(a,b,c){var d;if(a)return b=(b||"fx")+"queue",d=n._data(a,b),c&&(!d||n.isArray(c)?d=n._data(a,b,n.makeArray(c)):d.push(c)),d||[]},dequeue:function(a,b){b=b||"fx";var c=n.queue(a,b),d=c.length,e=c.shift(),f=n._queueHooks(a,b),g=function(){n.dequeue(a,b)};"inprogress"===e&&(e=c.shift(),d--),e&&("fx"===b&&c.unshift("inprogress"),delete f.stop,e.call(a,g,f)),!d&&f&&f.empty.fire()},_queueHooks:function(a,b){var c=b+"queueHooks";return n._data(a,c)||n._data(a,c,{empty:n.Callbacks("once memory").add(function(){n._removeData(a,b+"queue"),n._removeData(a,c)})})}}),n.fn.extend({queue:function(a,b){var c=2;return"string"!=typeof a&&(b=a,a="fx",c--),arguments.length<c?n.queue(this[0],a):void 0===b?this:this.each(function(){var c=n.queue(this,a,b);n._queueHooks(this,a),"fx"===a&&"inprogress"!==c[0]&&n.dequeue(this,a)})},dequeue:function(a){return this.each(function(){n.dequeue(this,a)})},clearQueue:function(a){return this.queue(a||"fx",[])},promise:function(a,b){var c,d=1,e=n.Deferred(),f=this,g=this.length,h=function(){--d||e.resolveWith(f,[f])};"string"!=typeof a&&(b=a,a=void 0),a=a||"fx";while(g--)(c=n._data(f[g],a+"queueHooks"))&&c.empty&&(d++,c.empty.add(h));return h(),e.promise(b)}}),function(){var a;l.shrinkWrapBlocks=function(){if(null!=a)return a;a=!1;var b,c,e;return(c=d.getElementsByTagName("body")[0])&&c.style?(b=d.createElement("div"),e=d.createElement("div"),e.style.cssText="position:absolute;border:0;width:0;height:0;top:0;left:-9999px",c.appendChild(e).appendChild(b),void 0!==b.style.zoom&&(b.style.cssText="-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:1px;width:1px;zoom:1",b.appendChild(d.createElement("div")).style.width="5px",a=3!==b.offsetWidth),c.removeChild(e),a):void 0}}();var S=/[+-]?(?:\\d*\\.|)\\d+(?:[eE][+-]?\\d+|)/.source,T=new RegExp("^(?:([+-])=|)("+S+")([a-z%]*)$","i"),U=["Top","Right","Bottom","Left"],V=function(a,b){return a=b||a,"none"===n.css(a,"display")||!n.contains(a.ownerDocument,a)};function W(a,b,c,d){var e,f=1,g=20,h=d?function(){return d.cur()}:function(){return n.css(a,b,"")},i=h(),j=c&&c[3]||(n.cssNumber[b]?"":"px"),k=(n.cssNumber[b]||"px"!==j&&+i)&&T.exec(n.css(a,b));if(k&&k[3]!==j){j=j||k[3],c=c||[],k=+i||1;do{f=f||".5",k/=f,n.style(a,b,k+j)}while(f!==(f=h()/i)&&1!==f&&--g)}return c&&(k=+k||+i||0,e=c[1]?k+(c[1]+1)*c[2]:+c[2],d&&(d.unit=j,d.start=k,d.end=e)),e}var X=function(a,b,c,d,e,f,g){var h=0,i=a.length,j=null==c;if("object"===n.type(c)){e=!0;for(h in c)X(a,b,h,c[h],!0,f,g)}else if(void 0!==d&&(e=!0,n.isFunction(d)||(g=!0),j&&(g?(b.call(a,d),b=null):(j=b,b=function(a,b,c){return j.call(n(a),c)})),b))for(;h<i;h++)b(a[h],c,g?d:d.call(a[h],h,b(a[h],c)));return e?a:j?b.call(a):i?b(a[0],c):f},Y=/^(?:checkbox|radio)$/i,Z=/<([\\w:-]+)/,$=/^$|\\/(?:java|ecma)script/i,_=/^\\s+/,aa="abbr|article|aside|audio|bdi|canvas|data|datalist|details|dialog|figcaption|figure|footer|header|hgroup|main|mark|meter|nav|output|picture|progress|section|summary|template|time|video";function ba(a){var b=aa.split("|"),c=a.createDocumentFragment();if(c.createElement)while(b.length)c.createElement(b.pop());return c}!function(){var a=d.createElement("div"),b=d.createDocumentFragment(),c=d.createElement("input");a.innerHTML="  <link/><table></table><a href=\'/a\'>a</a><input type=\'checkbox\'/>",l.leadingWhitespace=3===a.firstChild.nodeType,l.tbody=!a.getElementsByTagName("tbody").length,l.htmlSerialize=!!a.getElementsByTagName("link").length,l.html5Clone="<:nav></:nav>"!==d.createElement("nav").cloneNode(!0).outerHTML,c.type="checkbox",c.checked=!0,b.appendChild(c),l.appendChecked=c.checked,a.innerHTML="<textarea>x</textarea>",l.noCloneChecked=!!a.cloneNode(!0).lastChild.defaultValue,b.appendChild(a),c=d.createElement("input"),c.setAttribute("type","radio"),c.setAttribute("checked","checked"),c.setAttribute("name","t"),a.appendChild(c),l.checkClone=a.cloneNode(!0).cloneNode(!0).lastChild.checked,l.noCloneEvent=!!a.addEventListener,a[n.expando]=1,l.attributes=!a.getAttribute(n.expando)}();var ca={option:[1,"<select multiple=\'multiple\'>","</select>"],legend:[1,"<fieldset>","</fieldset>"],area:[1,"<map>","</map>"],param:[1,"<object>","</object>"],thead:[1,"<table>","</table>"],tr:[2,"<table><tbody>","</tbody></table>"],col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:l.htmlSerialize?[0,"",""]:[1,"X<div>","</div>"]};ca.optgroup=ca.option,ca.tbody=ca.tfoot=ca.colgroup=ca.caption=ca.thead,ca.th=ca.td;function da(a,b){var c,d,e=0,f=void 0!==a.getElementsByTagName?a.getElementsByTagName(b||"*"):void 0!==a.querySelectorAll?a.querySelectorAll(b||"*"):void 0;if(!f)for(f=[],c=a.childNodes||a;null!=(d=c[e]);e++)!b||n.nodeName(d,b)?f.push(d):n.merge(f,da(d,b));return void 0===b||b&&n.nodeName(a,b)?n.merge([a],f):f}function ea(a,b){for(var c,d=0;null!=(c=a[d]);d++)n._data(c,"globalEval",!b||n._data(b[d],"globalEval"))}var fa=/<|&#?\\w+;/,ga=/<tbody/i;function ha(a){Y.test(a.type)&&(a.defaultChecked=a.checked)}function ia(a,b,c,d,e){for(var f,g,h,i,j,k,m,o=a.length,p=ba(b),q=[],r=0;r<o;r++)if((g=a[r])||0===g)if("object"===n.type(g))n.merge(q,g.nodeType?[g]:g);else if(fa.test(g)){i=i||p.appendChild(b.createElement("div")),j=(Z.exec(g)||["",""])[1].toLowerCase(),m=ca[j]||ca._default,i.innerHTML=m[1]+n.htmlPrefilter(g)+m[2],f=m[0];while(f--)i=i.lastChild;if(!l.leadingWhitespace&&_.test(g)&&q.push(b.createTextNode(_.exec(g)[0])),!l.tbody){g="table"!==j||ga.test(g)?"<table>"!==m[1]||ga.test(g)?0:i:i.firstChild,f=g&&g.childNodes.length;while(f--)n.nodeName(k=g.childNodes[f],"tbody")&&!k.childNodes.length&&g.removeChild(k)}n.merge(q,i.childNodes),i.textContent="";while(i.firstChild)i.removeChild(i.firstChild);i=p.lastChild}else q.push(b.createTextNode(g));i&&p.removeChild(i),l.appendChecked||n.grep(da(q,"input"),ha),r=0;while(g=q[r++])if(d&&n.inArray(g,d)>-1)e&&e.push(g);else if(h=n.contains(g.ownerDocument,g),i=da(p.appendChild(g),"script"),h&&ea(i),c){f=0;while(g=i[f++])$.test(g.type||"")&&c.push(g)}return i=null,p}!function(){var b,c,e=d.createElement("div");for(b in{submit:!0,change:!0,focusin:!0})c="on"+b,(l[b]=c in a)||(e.setAttribute(c,"t"),l[b]=!1===e.attributes[c].expando);e=null}();var ja=/^(?:input|select|textarea)$/i,ka=/^key/,la=/^(?:mouse|pointer|contextmenu|drag|drop)|click/,ma=/^(?:focusinfocus|focusoutblur)$/,na=/^([^.]*)(?:\\.(.+)|)/;function oa(){return!0}function pa(){return!1}function qa(){try{return d.activeElement}catch(a){}}function ra(a,b,c,d,e,f){var g,h;if("object"==typeof b){"string"!=typeof c&&(d=d||c,c=void 0);for(h in b)ra(a,h,c,d,b[h],f);return a}if(null==d&&null==e?(e=c,d=c=void 0):null==e&&("string"==typeof c?(e=d,d=void 0):(e=d,d=c,c=void 0)),!1===e)e=pa;else if(!e)return a;return 1===f&&(g=e,e=function(a){return n().off(a),g.apply(this,arguments)},e.guid=g.guid||(g.guid=n.guid++)),a.each(function(){n.event.add(this,b,e,d,c)})}n.event={global:{},add:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,o,p,q,r=n._data(a);if(r){c.handler&&(i=c,c=i.handler,e=i.selector),c.guid||(c.guid=n.guid++),(g=r.events)||(g=r.events={}),(k=r.handle)||(k=r.handle=function(a){return void 0===n||a&&n.event.triggered===a.type?void 0:n.event.dispatch.apply(k.elem,arguments)},k.elem=a),b=(b||"").match(F)||[""],h=b.length;while(h--)f=na.exec(b[h])||[],o=q=f[1],p=(f[2]||"").split(".").sort(),o&&(j=n.event.special[o]||{},o=(e?j.delegateType:j.bindType)||o,j=n.event.special[o]||{},l=n.extend({type:o,origType:q,data:d,handler:c,guid:c.guid,selector:e,needsContext:e&&n.expr.match.needsContext.test(e),namespace:p.join(".")},i),(m=g[o])||(m=g[o]=[],m.delegateCount=0,j.setup&&!1!==j.setup.call(a,d,p,k)||(a.addEventListener?a.addEventListener(o,k,!1):a.attachEvent&&a.attachEvent("on"+o,k))),j.add&&(j.add.call(a,l),l.handler.guid||(l.handler.guid=c.guid)),e?m.splice(m.delegateCount++,0,l):m.push(l),n.event.global[o]=!0);a=null}},remove:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,o,p,q,r=n.hasData(a)&&n._data(a);if(r&&(k=r.events)){b=(b||"").match(F)||[""],j=b.length;while(j--)if(h=na.exec(b[j])||[],o=q=h[1],p=(h[2]||"").split(".").sort(),o){l=n.event.special[o]||{},o=(d?l.delegateType:l.bindType)||o,m=k[o]||[],h=h[2]&&new RegExp("(^|\\\\.)"+p.join("\\\\.(?:.*\\\\.|)")+"(\\\\.|$)"),i=f=m.length;while(f--)g=m[f],!e&&q!==g.origType||c&&c.guid!==g.guid||h&&!h.test(g.namespace)||d&&d!==g.selector&&("**"!==d||!g.selector)||(m.splice(f,1),g.selector&&m.delegateCount--,l.remove&&l.remove.call(a,g));i&&!m.length&&(l.teardown&&!1!==l.teardown.call(a,p,r.handle)||n.removeEvent(a,o,r.handle),delete k[o])}else for(o in k)n.event.remove(a,o+b[j],c,d,!0);n.isEmptyObject(k)&&(delete r.handle,n._removeData(a,"events"))}},trigger:function(b,c,e,f){var g,h,i,j,l,m,o,p=[e||d],q=k.call(b,"type")?b.type:b,r=k.call(b,"namespace")?b.namespace.split("."):[];if(i=m=e=e||d,3!==e.nodeType&&8!==e.nodeType&&!ma.test(q+n.event.triggered)&&(q.indexOf(".")>-1&&(r=q.split("."),q=r.shift(),r.sort()),h=q.indexOf(":")<0&&"on"+q,b=b[n.expando]?b:new n.Event(q,"object"==typeof b&&b),b.isTrigger=f?2:3,b.namespace=r.join("."),b.rnamespace=b.namespace?new RegExp("(^|\\\\.)"+r.join("\\\\.(?:.*\\\\.|)")+"(\\\\.|$)"):null,b.result=void 0,b.target||(b.target=e),c=null==c?[b]:n.makeArray(c,[b]),l=n.event.special[q]||{},f||!l.trigger||!1!==l.trigger.apply(e,c))){if(!f&&!l.noBubble&&!n.isWindow(e)){for(j=l.delegateType||q,ma.test(j+q)||(i=i.parentNode);i;i=i.parentNode)p.push(i),m=i;m===(e.ownerDocument||d)&&p.push(m.defaultView||m.parentWindow||a)}o=0;while((i=p[o++])&&!b.isPropagationStopped())b.type=o>1?j:l.bindType||q,g=(n._data(i,"events")||{})[b.type]&&n._data(i,"handle"),g&&g.apply(i,c),(g=h&&i[h])&&g.apply&&L(i)&&(b.result=g.apply(i,c),!1===b.result&&b.preventDefault());if(b.type=q,!f&&!b.isDefaultPrevented()&&(!l._default||!1===l._default.apply(p.pop(),c))&&L(e)&&h&&e[q]&&!n.isWindow(e)){m=e[h],m&&(e[h]=null),n.event.triggered=q;try{e[q]()}catch(s){}n.event.triggered=void 0,m&&(e[h]=m)}return b.result}},dispatch:function(a){a=n.event.fix(a);var b,c,d,f,g,h=[],i=e.call(arguments),j=(n._data(this,"events")||{})[a.type]||[],k=n.event.special[a.type]||{};if(i[0]=a,a.delegateTarget=this,!k.preDispatch||!1!==k.preDispatch.call(this,a)){h=n.event.handlers.call(this,a,j),b=0;while((f=h[b++])&&!a.isPropagationStopped()){a.currentTarget=f.elem,c=0;while((g=f.handlers[c++])&&!a.isImmediatePropagationStopped())a.rnamespace&&!a.rnamespace.test(g.namespace)||(a.handleObj=g,a.data=g.data,void 0!==(d=((n.event.special[g.origType]||{}).handle||g.handler).apply(f.elem,i))&&!1===(a.result=d)&&(a.preventDefault(),a.stopPropagation()))}return k.postDispatch&&k.postDispatch.call(this,a),a.result}},handlers:function(a,b){var c,d,e,f,g=[],h=b.delegateCount,i=a.target;if(h&&i.nodeType&&("click"!==a.type||isNaN(a.button)||a.button<1))for(;i!=this;i=i.parentNode||this)if(1===i.nodeType&&(!0!==i.disabled||"click"!==a.type)){for(d=[],c=0;c<h;c++)f=b[c],e=f.selector+" ",void 0===d[e]&&(d[e]=f.needsContext?n(e,this).index(i)>-1:n.find(e,this,null,[i]).length),d[e]&&d.push(f);d.length&&g.push({elem:i,handlers:d})}return h<b.length&&g.push({elem:this,handlers:b.slice(h)}),g},fix:function(a){if(a[n.expando])return a;var b,c,e,f=a.type,g=a,h=this.fixHooks[f];h||(this.fixHooks[f]=h=la.test(f)?this.mouseHooks:ka.test(f)?this.keyHooks:{}),e=h.props?this.props.concat(h.props):this.props,a=new n.Event(g),b=e.length;while(b--)c=e[b],a[c]=g[c];return a.target||(a.target=g.srcElement||d),3===a.target.nodeType&&(a.target=a.target.parentNode),a.metaKey=!!a.metaKey,h.filter?h.filter(a,g):a},props:"altKey bubbles cancelable ctrlKey currentTarget detail eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(a,b){return null==a.which&&(a.which=null!=b.charCode?b.charCode:b.keyCode),a}},mouseHooks:{props:"button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(a,b){var c,e,f,g=b.button,h=b.fromElement;return null==a.pageX&&null!=b.clientX&&(e=a.target.ownerDocument||d,f=e.documentElement,c=e.body,a.pageX=b.clientX+(f&&f.scrollLeft||c&&c.scrollLeft||0)-(f&&f.clientLeft||c&&c.clientLeft||0),a.pageY=b.clientY+(f&&f.scrollTop||c&&c.scrollTop||0)-(f&&f.clientTop||c&&c.clientTop||0)),!a.relatedTarget&&h&&(a.relatedTarget=h===a.target?b.toElement:h),a.which||void 0===g||(a.which=1&g?1:2&g?3:4&g?2:0),a}},special:{load:{noBubble:!0},focus:{trigger:function(){if(this!==qa()&&this.focus)try{return this.focus(),!1}catch(a){}},delegateType:"focusin"},blur:{trigger:function(){if(this===qa()&&this.blur)return this.blur(),!1},delegateType:"focusout"},click:{trigger:function(){if(n.nodeName(this,"input")&&"checkbox"===this.type&&this.click)return this.click(),!1},_default:function(a){return n.nodeName(a.target,"a")}},beforeunload:{postDispatch:function(a){void 0!==a.result&&a.originalEvent&&(a.originalEvent.returnValue=a.result)}}},simulate:function(a,b,c){var d=n.extend(new n.Event,c,{type:a,isSimulated:!0});n.event.trigger(d,null,b),d.isDefaultPrevented()&&c.preventDefault()}},n.removeEvent=d.removeEventListener?function(a,b,c){a.removeEventListener&&a.removeEventListener(b,c)}:function(a,b,c){var d="on"+b;a.detachEvent&&(void 0===a[d]&&(a[d]=null),a.detachEvent(d,c))},n.Event=function(a,b){if(!(this instanceof n.Event))return new n.Event(a,b);a&&a.type?(this.originalEvent=a,this.type=a.type,this.isDefaultPrevented=a.defaultPrevented||void 0===a.defaultPrevented&&!1===a.returnValue?oa:pa):this.type=a,b&&n.extend(this,b),this.timeStamp=a&&a.timeStamp||n.now(),this[n.expando]=!0},n.Event.prototype={constructor:n.Event,isDefaultPrevented:pa,isPropagationStopped:pa,isImmediatePropagationStopped:pa,preventDefault:function(){var a=this.originalEvent;this.isDefaultPrevented=oa,a&&(a.preventDefault?a.preventDefault():a.returnValue=!1)},stopPropagation:function(){var a=this.originalEvent;this.isPropagationStopped=oa,a&&!this.isSimulated&&(a.stopPropagation&&a.stopPropagation(),a.cancelBubble=!0)},stopImmediatePropagation:function(){var a=this.originalEvent;this.isImmediatePropagationStopped=oa,a&&a.stopImmediatePropagation&&a.stopImmediatePropagation(),this.stopPropagation()}},n.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(a,b){n.event.special[a]={delegateType:b,bindType:b,handle:function(a){var c,d=this,e=a.relatedTarget,f=a.handleObj;return e&&(e===d||n.contains(d,e))||(a.type=f.origType,c=f.handler.apply(this,arguments),a.type=b),c}}}),l.submit||(n.event.special.submit={setup:function(){if(n.nodeName(this,"form"))return!1;n.event.add(this,"click._submit keypress._submit",function(a){var b=a.target,c=n.nodeName(b,"input")||n.nodeName(b,"button")?n.prop(b,"form"):void 0;c&&!n._data(c,"submit")&&(n.event.add(c,"submit._submit",function(a){a._submitBubble=!0}),n._data(c,"submit",!0))})},postDispatch:function(a){a._submitBubble&&(delete a._submitBubble,this.parentNode&&!a.isTrigger&&n.event.simulate("submit",this.parentNode,a))},teardown:function(){if(n.nodeName(this,"form"))return!1;n.event.remove(this,"._submit")}}),l.change||(n.event.special.change={setup:function(){if(ja.test(this.nodeName))return"checkbox"!==this.type&&"radio"!==this.type||(n.event.add(this,"propertychange._change",function(a){"checked"===a.originalEvent.propertyName&&(this._justChanged=!0)}),n.event.add(this,"click._change",function(a){this._justChanged&&!a.isTrigger&&(this._justChanged=!1),n.event.simulate("change",this,a)})),!1;n.event.add(this,"beforeactivate._change",function(a){var b=a.target;ja.test(b.nodeName)&&!n._data(b,"change")&&(n.event.add(b,"change._change",function(a){!this.parentNode||a.isSimulated||a.isTrigger||n.event.simulate("change",this.parentNode,a)}),n._data(b,"change",!0))})},handle:function(a){var b=a.target;if(this!==b||a.isSimulated||a.isTrigger||"radio"!==b.type&&"checkbox"!==b.type)return a.handleObj.handler.apply(this,arguments)},teardown:function(){return n.event.remove(this,"._change"),!ja.test(this.nodeName)}}),l.focusin||n.each({focus:"focusin",blur:"focusout"},function(a,b){var c=function(a){n.event.simulate(b,a.target,n.event.fix(a))};n.event.special[b]={setup:function(){var d=this.ownerDocument||this,e=n._data(d,b);e||d.addEventListener(a,c,!0),n._data(d,b,(e||0)+1)},teardown:function(){var d=this.ownerDocument||this,e=n._data(d,b)-1;e?n._data(d,b,e):(d.removeEventListener(a,c,!0),n._removeData(d,b))}}}),n.fn.extend({on:function(a,b,c,d){return ra(this,a,b,c,d)},one:function(a,b,c,d){return ra(this,a,b,c,d,1)},off:function(a,b,c){var d,e;if(a&&a.preventDefault&&a.handleObj)return d=a.handleObj,n(a.delegateTarget).off(d.namespace?d.origType+"."+d.namespace:d.origType,d.selector,d.handler),this;if("object"==typeof a){for(e in a)this.off(e,b,a[e]);return this}return!1!==b&&"function"!=typeof b||(c=b,b=void 0),!1===c&&(c=pa),this.each(function(){n.event.remove(this,a,c,b)})},trigger:function(a,b){return this.each(function(){n.event.trigger(a,b,this)})},triggerHandler:function(a,b){var c=this[0];if(c)return n.event.trigger(a,b,c,!0)}});var sa=/ jQuery\\d+="(?:null|\\d+)"/g,ta=new RegExp("<(?:"+aa+")[\\\\s/>]","i"),ua=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\\w:-]+)[^>]*)\\/>/gi,va=/<script|<style|<link/i,wa=/checked\\s*(?:[^=]|=\\s*.checked.)/i,xa=/^true\\/(.*)/,ya=/^\\s*<!(?:\\[CDATA\\[|--)|(?:\\]\\]|--)>\\s*$/g,za=ba(d),Aa=za.appendChild(d.createElement("div"));function Ba(a,b){return n.nodeName(a,"table")&&n.nodeName(11!==b.nodeType?b:b.firstChild,"tr")?a.getElementsByTagName("tbody")[0]||a.appendChild(a.ownerDocument.createElement("tbody")):a}function Ca(a){return a.type=(null!==n.find.attr(a,"type"))+"/"+a.type,a}function Da(a){var b=xa.exec(a.type);return b?a.type=b[1]:a.removeAttribute("type"),a}function Ea(a,b){if(1===b.nodeType&&n.hasData(a)){var c,d,e,f=n._data(a),g=n._data(b,f),h=f.events;if(h){delete g.handle,g.events={};for(c in h)for(d=0,e=h[c].length;d<e;d++)n.event.add(b,c,h[c][d])}g.data&&(g.data=n.extend({},g.data))}}function Fa(a,b){var c,d,e;if(1===b.nodeType){if(c=b.nodeName.toLowerCase(),!l.noCloneEvent&&b[n.expando]){e=n._data(b);for(d in e.events)n.removeEvent(b,d,e.handle);b.removeAttribute(n.expando)}"script"===c&&b.text!==a.text?(Ca(b).text=a.text,Da(b)):"object"===c?(b.parentNode&&(b.outerHTML=a.outerHTML),l.html5Clone&&a.innerHTML&&!n.trim(b.innerHTML)&&(b.innerHTML=a.innerHTML)):"input"===c&&Y.test(a.type)?(b.defaultChecked=b.checked=a.checked,b.value!==a.value&&(b.value=a.value)):"option"===c?b.defaultSelected=b.selected=a.defaultSelected:"input"!==c&&"textarea"!==c||(b.defaultValue=a.defaultValue)}}function Ga(a,b,c,d){b=f.apply([],b);var e,g,h,i,j,k,m=0,o=a.length,p=o-1,q=b[0],r=n.isFunction(q);if(r||o>1&&"string"==typeof q&&!l.checkClone&&wa.test(q))return a.each(function(e){var f=a.eq(e);r&&(b[0]=q.call(this,e,f.html())),Ga(f,b,c,d)});if(o&&(k=ia(b,a[0].ownerDocument,!1,a,d),e=k.firstChild,1===k.childNodes.length&&(k=e),e||d)){for(i=n.map(da(k,"script"),Ca),h=i.length;m<o;m++)g=k,m!==p&&(g=n.clone(g,!0,!0),h&&n.merge(i,da(g,"script"))),c.call(a[m],g,m);if(h)for(j=i[i.length-1].ownerDocument,n.map(i,Da),m=0;m<h;m++)g=i[m],$.test(g.type||"")&&!n._data(g,"globalEval")&&n.contains(j,g)&&(g.src?n._evalUrl&&n._evalUrl(g.src):n.globalEval((g.text||g.textContent||g.innerHTML||"").replace(ya,"")));k=e=null}return a}function Ha(a,b,c){for(var d,e=b?n.filter(b,a):a,f=0;null!=(d=e[f]);f++)c||1!==d.nodeType||n.cleanData(da(d)),d.parentNode&&(c&&n.contains(d.ownerDocument,d)&&ea(da(d,"script")),d.parentNode.removeChild(d));return a}n.extend({htmlPrefilter:function(a){return a.replace(ua,"<$1></$2>")},clone:function(a,b,c){var d,e,f,g,h,i=n.contains(a.ownerDocument,a);if(l.html5Clone||n.isXMLDoc(a)||!ta.test("<"+a.nodeName+">")?f=a.cloneNode(!0):(Aa.innerHTML=a.outerHTML,Aa.removeChild(f=Aa.firstChild)),!(l.noCloneEvent&&l.noCloneChecked||1!==a.nodeType&&11!==a.nodeType||n.isXMLDoc(a)))for(d=da(f),h=da(a),g=0;null!=(e=h[g]);++g)d[g]&&Fa(e,d[g]);if(b)if(c)for(h=h||da(a),d=d||da(f),g=0;null!=(e=h[g]);g++)Ea(e,d[g]);else Ea(a,f);return d=da(f,"script"),d.length>0&&ea(d,!i&&da(a,"script")),d=h=e=null,f},cleanData:function(a,b){for(var d,e,f,g,h=0,i=n.expando,j=n.cache,k=l.attributes,m=n.event.special;null!=(d=a[h]);h++)if((b||L(d))&&(f=d[i],g=f&&j[f])){if(g.events)for(e in g.events)m[e]?n.event.remove(d,e):n.removeEvent(d,e,g.handle);j[f]&&(delete j[f],k||void 0===d.removeAttribute?d[i]=void 0:d.removeAttribute(i),c.push(f))}}}),n.fn.extend({domManip:Ga,detach:function(a){return Ha(this,a,!0)},remove:function(a){return Ha(this,a)},text:function(a){return X(this,function(a){return void 0===a?n.text(this):this.empty().append((this[0]&&this[0].ownerDocument||d).createTextNode(a))},null,a,arguments.length)},append:function(){return Ga(this,arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){Ba(this,a).appendChild(a)}})},prepend:function(){return Ga(this,arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=Ba(this,a);b.insertBefore(a,b.firstChild)}})},before:function(){return Ga(this,arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this)})},after:function(){return Ga(this,arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this.nextSibling)})},empty:function(){for(var a,b=0;null!=(a=this[b]);b++){1===a.nodeType&&n.cleanData(da(a,!1));while(a.firstChild)a.removeChild(a.firstChild);a.options&&n.nodeName(a,"select")&&(a.options.length=0)}return this},clone:function(a,b){return a=null!=a&&a,b=null==b?a:b,this.map(function(){return n.clone(this,a,b)})},html:function(a){return X(this,function(a){var b=this[0]||{},c=0,d=this.length;if(void 0===a)return 1===b.nodeType?b.innerHTML.replace(sa,""):void 0;if("string"==typeof a&&!va.test(a)&&(l.htmlSerialize||!ta.test(a))&&(l.leadingWhitespace||!_.test(a))&&!ca[(Z.exec(a)||["",""])[1].toLowerCase()]){a=n.htmlPrefilter(a);try{for(;c<d;c++)b=this[c]||{},1===b.nodeType&&(n.cleanData(da(b,!1)),b.innerHTML=a);b=0}catch(e){}}b&&this.empty().append(a)},null,a,arguments.length)},replaceWith:function(){var a=[];return Ga(this,arguments,function(b){var c=this.parentNode;n.inArray(this,a)<0&&(n.cleanData(da(this)),c&&c.replaceChild(b,this))},a)}}),n.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(a,b){n.fn[a]=function(a){for(var c,d=0,e=[],f=n(a),h=f.length-1;d<=h;d++)c=d===h?this:this.clone(!0),n(f[d])[b](c),g.apply(e,c.get());return this.pushStack(e)}});var Ia,Ja={HTML:"block",BODY:"block"};function Ka(a,b){var c=n(b.createElement(a)).appendTo(b.body),d=n.css(c[0],"display");return c.detach(),d}function La(a){var b=d,c=Ja[a];return c||(c=Ka(a,b),"none"!==c&&c||(Ia=(Ia||n("<iframe frameborder=\'0\' width=\'0\' height=\'0\'/>")).appendTo(b.documentElement),b=(Ia[0].contentWindow||Ia[0].contentDocument).document,b.write(),b.close(),c=Ka(a,b),Ia.detach()),Ja[a]=c),c}var Ma=/^margin/,Na=new RegExp("^("+S+")(?!px)[a-z%]+$","i"),Oa=function(a,b,c,d){var e,f,g={};for(f in b)g[f]=a.style[f],a.style[f]=b[f];e=c.apply(a,d||[]);for(f in b)a.style[f]=g[f];return e},Pa=d.documentElement;!function(){var b,c,e,f,g,h,i=d.createElement("div"),j=d.createElement("div");function k(){var k,l,m=d.documentElement;m.appendChild(i),j.style.cssText="-webkit-box-sizing:border-box;box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%",b=e=h=!1,c=g=!0,a.getComputedStyle&&(l=a.getComputedStyle(j),b="1%"!==(l||{}).top,h="2px"===(l||{}).marginLeft,e="4px"===(l||{width:"4px"}).width,j.style.marginRight="50%",c="4px"===(l||{marginRight:"4px"}).marginRight,k=j.appendChild(d.createElement("div")),k.style.cssText=j.style.cssText="-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0",k.style.marginRight=k.style.width="0",j.style.width="1px",g=!parseFloat((a.getComputedStyle(k)||{}).marginRight),j.removeChild(k)),j.style.display="none",f=0===j.getClientRects().length,f&&(j.style.display="",j.innerHTML="<table><tr><td></td><td>t</td></tr></table>",j.childNodes[0].style.borderCollapse="separate",k=j.getElementsByTagName("td"),k[0].style.cssText="margin:0;border:0;padding:0;display:none",(f=0===k[0].offsetHeight)&&(k[0].style.display="",k[1].style.display="none",f=0===k[0].offsetHeight)),m.removeChild(i)}j.style&&(j.style.cssText="float:left;opacity:.5",l.opacity="0.5"===j.style.opacity,l.cssFloat=!!j.style.cssFloat,j.style.backgroundClip="content-box",j.cloneNode(!0).style.backgroundClip="",l.clearCloneStyle="content-box"===j.style.backgroundClip,i=d.createElement("div"),i.style.cssText="border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute",j.innerHTML="",i.appendChild(j),l.boxSizing=""===j.style.boxSizing||""===j.style.MozBoxSizing||""===j.style.WebkitBoxSizing,n.extend(l,{reliableHiddenOffsets:function(){return null==b&&k(),f},boxSizingReliable:function(){return null==b&&k(),e},pixelMarginRight:function(){return null==b&&k(),c},pixelPosition:function(){return null==b&&k(),b},reliableMarginRight:function(){return null==b&&k(),g},reliableMarginLeft:function(){return null==b&&k(),h}}))}();var Qa,Ra,Sa=/^(top|right|bottom|left)$/;a.getComputedStyle?(Qa=function(b){var c=b.ownerDocument.defaultView;return c&&c.opener||(c=a),c.getComputedStyle(b)},Ra=function(a,b,c){var d,e,f,g,h=a.style;return c=c||Qa(a),g=c?c.getPropertyValue(b)||c[b]:void 0,""!==g&&void 0!==g||n.contains(a.ownerDocument,a)||(g=n.style(a,b)),c&&!l.pixelMarginRight()&&Na.test(g)&&Ma.test(b)&&(d=h.width,e=h.minWidth,f=h.maxWidth,h.minWidth=h.maxWidth=h.width=g,g=c.width,h.width=d,h.minWidth=e,h.maxWidth=f),void 0===g?g:g+""}):Pa.currentStyle&&(Qa=function(a){return a.currentStyle},Ra=function(a,b,c){var d,e,f,g,h=a.style;return c=c||Qa(a),g=c?c[b]:void 0,null==g&&h&&h[b]&&(g=h[b]),Na.test(g)&&!Sa.test(b)&&(d=h.left,e=a.runtimeStyle,f=e&&e.left,f&&(e.left=a.currentStyle.left),h.left="fontSize"===b?"1em":g,g=h.pixelLeft+"px",h.left=d,f&&(e.left=f)),void 0===g?g:g+""||"auto"});function Ta(a,b){return{get:function(){return a()?void delete this.get:(this.get=b).apply(this,arguments)}}}var Ua=/alpha\\([^)]*\\)/i,Va=/opacity\\s*=\\s*([^)]*)/i,Wa=/^(none|table(?!-c[ea]).+)/,Xa=new RegExp("^("+S+")(.*)$","i"),Ya={position:"absolute",visibility:"hidden",display:"block"},Za={letterSpacing:"0",fontWeight:"400"},$a=["Webkit","O","Moz","ms"],_a=d.createElement("div").style;function ab(a){if(a in _a)return a;var b=a.charAt(0).toUpperCase()+a.slice(1),c=$a.length;while(c--)if((a=$a[c]+b)in _a)return a}function bb(a,b){for(var c,d,e,f=[],g=0,h=a.length;g<h;g++)d=a[g],d.style&&(f[g]=n._data(d,"olddisplay"),c=d.style.display,b?(f[g]||"none"!==c||(d.style.display=""),""===d.style.display&&V(d)&&(f[g]=n._data(d,"olddisplay",La(d.nodeName)))):(e=V(d),(c&&"none"!==c||!e)&&n._data(d,"olddisplay",e?c:n.css(d,"display"))));for(g=0;g<h;g++)d=a[g],d.style&&(b&&"none"!==d.style.display&&""!==d.style.display||(d.style.display=b?f[g]||"":"none"));return a}function cb(a,b,c){var d=Xa.exec(b);return d?Math.max(0,d[1]-(c||0))+(d[2]||"px"):b}function db(a,b,c,d,e){for(var f=c===(d?"border":"content")?4:"width"===b?1:0,g=0;f<4;f+=2)"margin"===c&&(g+=n.css(a,c+U[f],!0,e)),d?("content"===c&&(g-=n.css(a,"padding"+U[f],!0,e)),"margin"!==c&&(g-=n.css(a,"border"+U[f]+"Width",!0,e))):(g+=n.css(a,"padding"+U[f],!0,e),"padding"!==c&&(g+=n.css(a,"border"+U[f]+"Width",!0,e)));return g}function eb(a,b,c){var d=!0,e="width"===b?a.offsetWidth:a.offsetHeight,f=Qa(a),g=l.boxSizing&&"border-box"===n.css(a,"boxSizing",!1,f);if(e<=0||null==e){if(e=Ra(a,b,f),(e<0||null==e)&&(e=a.style[b]),Na.test(e))return e;d=g&&(l.boxSizingReliable()||e===a.style[b]),e=parseFloat(e)||0}return e+db(a,b,c||(g?"border":"content"),d,f)+"px"}n.extend({cssHooks:{opacity:{get:function(a,b){if(b){var c=Ra(a,"opacity");return""===c?"1":c}}}},cssNumber:{animationIterationCount:!0,columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{float:l.cssFloat?"cssFloat":"styleFloat"},style:function(a,b,c,d){if(a&&3!==a.nodeType&&8!==a.nodeType&&a.style){var e,f,g,h=n.camelCase(b),i=a.style;if(b=n.cssProps[h]||(n.cssProps[h]=ab(h)||h),g=n.cssHooks[b]||n.cssHooks[h],void 0===c)return g&&"get"in g&&void 0!==(e=g.get(a,!1,d))?e:i[b];if(f=typeof c,"string"===f&&(e=T.exec(c))&&e[1]&&(c=W(a,b,e),f="number"),null!=c&&c===c&&("number"===f&&(c+=e&&e[3]||(n.cssNumber[h]?"":"px")),l.clearCloneStyle||""!==c||0!==b.indexOf("background")||(i[b]="inherit"),!(g&&"set"in g&&void 0===(c=g.set(a,c,d)))))try{i[b]=c}catch(j){}}},css:function(a,b,c,d){var e,f,g,h=n.camelCase(b);return b=n.cssProps[h]||(n.cssProps[h]=ab(h)||h),g=n.cssHooks[b]||n.cssHooks[h],g&&"get"in g&&(f=g.get(a,!0,c)),void 0===f&&(f=Ra(a,b,d)),"normal"===f&&b in Za&&(f=Za[b]),""===c||c?(e=parseFloat(f),!0===c||isFinite(e)?e||0:f):f}}),n.each(["height","width"],function(a,b){n.cssHooks[b]={get:function(a,c,d){if(c)return Wa.test(n.css(a,"display"))&&0===a.offsetWidth?Oa(a,Ya,function(){return eb(a,b,d)}):eb(a,b,d)},set:function(a,c,d){var e=d&&Qa(a);return cb(a,c,d?db(a,b,d,l.boxSizing&&"border-box"===n.css(a,"boxSizing",!1,e),e):0)}}}),l.opacity||(n.cssHooks.opacity={get:function(a,b){return Va.test((b&&a.currentStyle?a.currentStyle.filter:a.style.filter)||"")?.01*parseFloat(RegExp.$1)+"":b?"1":""},set:function(a,b){var c=a.style,d=a.currentStyle,e=n.isNumeric(b)?"alpha(opacity="+100*b+")":"",f=d&&d.filter||c.filter||"";c.zoom=1,(b>=1||""===b)&&""===n.trim(f.replace(Ua,""))&&c.removeAttribute&&(c.removeAttribute("filter"),""===b||d&&!d.filter)||(c.filter=Ua.test(f)?f.replace(Ua,e):f+" "+e)}}),n.cssHooks.marginRight=Ta(l.reliableMarginRight,function(a,b){if(b)return Oa(a,{display:"inline-block"},Ra,[a,"marginRight"])}),n.cssHooks.marginLeft=Ta(l.reliableMarginLeft,function(a,b){if(b)return(parseFloat(Ra(a,"marginLeft"))||(n.contains(a.ownerDocument,a)?a.getBoundingClientRect().left-Oa(a,{marginLeft:0},function(){return a.getBoundingClientRect().left}):0))+"px"}),n.each({\nmargin:"",padding:"",border:"Width"},function(a,b){n.cssHooks[a+b]={expand:function(c){for(var d=0,e={},f="string"==typeof c?c.split(" "):[c];d<4;d++)e[a+U[d]+b]=f[d]||f[d-2]||f[0];return e}},Ma.test(a)||(n.cssHooks[a+b].set=cb)}),n.fn.extend({css:function(a,b){return X(this,function(a,b,c){var d,e,f={},g=0;if(n.isArray(b)){for(d=Qa(a),e=b.length;g<e;g++)f[b[g]]=n.css(a,b[g],!1,d);return f}return void 0!==c?n.style(a,b,c):n.css(a,b)},a,b,arguments.length>1)},show:function(){return bb(this,!0)},hide:function(){return bb(this)},toggle:function(a){return"boolean"==typeof a?a?this.show():this.hide():this.each(function(){V(this)?n(this).show():n(this).hide()})}});function fb(a,b,c,d,e){return new fb.prototype.init(a,b,c,d,e)}n.Tween=fb,fb.prototype={constructor:fb,init:function(a,b,c,d,e,f){this.elem=a,this.prop=c,this.easing=e||n.easing._default,this.options=b,this.start=this.now=this.cur(),this.end=d,this.unit=f||(n.cssNumber[c]?"":"px")},cur:function(){var a=fb.propHooks[this.prop];return a&&a.get?a.get(this):fb.propHooks._default.get(this)},run:function(a){var b,c=fb.propHooks[this.prop];return this.options.duration?this.pos=b=n.easing[this.easing](a,this.options.duration*a,0,1,this.options.duration):this.pos=b=a,this.now=(this.end-this.start)*b+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),c&&c.set?c.set(this):fb.propHooks._default.set(this),this}},fb.prototype.init.prototype=fb.prototype,fb.propHooks={_default:{get:function(a){var b;return 1!==a.elem.nodeType||null!=a.elem[a.prop]&&null==a.elem.style[a.prop]?a.elem[a.prop]:(b=n.css(a.elem,a.prop,""),b&&"auto"!==b?b:0)},set:function(a){n.fx.step[a.prop]?n.fx.step[a.prop](a):1!==a.elem.nodeType||null==a.elem.style[n.cssProps[a.prop]]&&!n.cssHooks[a.prop]?a.elem[a.prop]=a.now:n.style(a.elem,a.prop,a.now+a.unit)}}},fb.propHooks.scrollTop=fb.propHooks.scrollLeft={set:function(a){a.elem.nodeType&&a.elem.parentNode&&(a.elem[a.prop]=a.now)}},n.easing={linear:function(a){return a},swing:function(a){return.5-Math.cos(a*Math.PI)/2},_default:"swing"},n.fx=fb.prototype.init,n.fx.step={};var gb,hb,ib=/^(?:toggle|show|hide)$/,jb=/queueHooks$/;function kb(){return a.setTimeout(function(){gb=void 0}),gb=n.now()}function lb(a,b){var c,d={height:a},e=0;for(b=b?1:0;e<4;e+=2-b)c=U[e],d["margin"+c]=d["padding"+c]=a;return b&&(d.opacity=d.width=a),d}function mb(a,b,c){for(var d,e=(pb.tweeners[b]||[]).concat(pb.tweeners["*"]),f=0,g=e.length;f<g;f++)if(d=e[f].call(c,b,a))return d}function nb(a,b,c){var d,e,f,g,h,i,j,k,m=this,o={},p=a.style,q=a.nodeType&&V(a),r=n._data(a,"fxshow");c.queue||(h=n._queueHooks(a,"fx"),null==h.unqueued&&(h.unqueued=0,i=h.empty.fire,h.empty.fire=function(){h.unqueued||i()}),h.unqueued++,m.always(function(){m.always(function(){h.unqueued--,n.queue(a,"fx").length||h.empty.fire()})})),1===a.nodeType&&("height"in b||"width"in b)&&(c.overflow=[p.overflow,p.overflowX,p.overflowY],j=n.css(a,"display"),"inline"===(k="none"===j?n._data(a,"olddisplay")||La(a.nodeName):j)&&"none"===n.css(a,"float")&&(l.inlineBlockNeedsLayout&&"inline"!==La(a.nodeName)?p.zoom=1:p.display="inline-block")),c.overflow&&(p.overflow="hidden",l.shrinkWrapBlocks()||m.always(function(){p.overflow=c.overflow[0],p.overflowX=c.overflow[1],p.overflowY=c.overflow[2]}));for(d in b)if(e=b[d],ib.exec(e)){if(delete b[d],f=f||"toggle"===e,e===(q?"hide":"show")){if("show"!==e||!r||void 0===r[d])continue;q=!0}o[d]=r&&r[d]||n.style(a,d)}else j=void 0;if(n.isEmptyObject(o))"inline"===("none"===j?La(a.nodeName):j)&&(p.display=j);else{r?"hidden"in r&&(q=r.hidden):r=n._data(a,"fxshow",{}),f&&(r.hidden=!q),q?n(a).show():m.done(function(){n(a).hide()}),m.done(function(){var b;n._removeData(a,"fxshow");for(b in o)n.style(a,b,o[b])});for(d in o)g=mb(q?r[d]:0,d,m),d in r||(r[d]=g.start,q&&(g.end=g.start,g.start="width"===d||"height"===d?1:0))}}function ob(a,b){var c,d,e,f,g;for(c in a)if(d=n.camelCase(c),e=b[d],f=a[c],n.isArray(f)&&(e=f[1],f=a[c]=f[0]),c!==d&&(a[d]=f,delete a[c]),(g=n.cssHooks[d])&&"expand"in g){f=g.expand(f),delete a[d];for(c in f)c in a||(a[c]=f[c],b[c]=e)}else b[d]=e}function pb(a,b,c){var d,e,f=0,g=pb.prefilters.length,h=n.Deferred().always(function(){delete i.elem}),i=function(){if(e)return!1;for(var b=gb||kb(),c=Math.max(0,j.startTime+j.duration-b),d=c/j.duration||0,f=1-d,g=0,i=j.tweens.length;g<i;g++)j.tweens[g].run(f);return h.notifyWith(a,[j,f,c]),f<1&&i?c:(h.resolveWith(a,[j]),!1)},j=h.promise({elem:a,props:n.extend({},b),opts:n.extend(!0,{specialEasing:{},easing:n.easing._default},c),originalProperties:b,originalOptions:c,startTime:gb||kb(),duration:c.duration,tweens:[],createTween:function(b,c){var d=n.Tween(a,j.opts,b,c,j.opts.specialEasing[b]||j.opts.easing);return j.tweens.push(d),d},stop:function(b){var c=0,d=b?j.tweens.length:0;if(e)return this;for(e=!0;c<d;c++)j.tweens[c].run(1);return b?(h.notifyWith(a,[j,1,0]),h.resolveWith(a,[j,b])):h.rejectWith(a,[j,b]),this}}),k=j.props;for(ob(k,j.opts.specialEasing);f<g;f++)if(d=pb.prefilters[f].call(j,a,k,j.opts))return n.isFunction(d.stop)&&(n._queueHooks(j.elem,j.opts.queue).stop=n.proxy(d.stop,d)),d;return n.map(k,mb,j),n.isFunction(j.opts.start)&&j.opts.start.call(a,j),n.fx.timer(n.extend(i,{elem:a,anim:j,queue:j.opts.queue})),j.progress(j.opts.progress).done(j.opts.done,j.opts.complete).fail(j.opts.fail).always(j.opts.always)}n.Animation=n.extend(pb,{tweeners:{"*":[function(a,b){var c=this.createTween(a,b);return W(c.elem,a,T.exec(b),c),c}]},tweener:function(a,b){n.isFunction(a)?(b=a,a=["*"]):a=a.match(F);for(var c,d=0,e=a.length;d<e;d++)c=a[d],pb.tweeners[c]=pb.tweeners[c]||[],pb.tweeners[c].unshift(b)},prefilters:[nb],prefilter:function(a,b){b?pb.prefilters.unshift(a):pb.prefilters.push(a)}}),n.speed=function(a,b,c){var d=a&&"object"==typeof a?n.extend({},a):{complete:c||!c&&b||n.isFunction(a)&&a,duration:a,easing:c&&b||b&&!n.isFunction(b)&&b};return d.duration=n.fx.off?0:"number"==typeof d.duration?d.duration:d.duration in n.fx.speeds?n.fx.speeds[d.duration]:n.fx.speeds._default,null!=d.queue&&!0!==d.queue||(d.queue="fx"),d.old=d.complete,d.complete=function(){n.isFunction(d.old)&&d.old.call(this),d.queue&&n.dequeue(this,d.queue)},d},n.fn.extend({fadeTo:function(a,b,c,d){return this.filter(V).css("opacity",0).show().end().animate({opacity:b},a,c,d)},animate:function(a,b,c,d){var e=n.isEmptyObject(a),f=n.speed(b,c,d),g=function(){var b=pb(this,n.extend({},a),f);(e||n._data(this,"finish"))&&b.stop(!0)};return g.finish=g,e||!1===f.queue?this.each(g):this.queue(f.queue,g)},stop:function(a,b,c){var d=function(a){var b=a.stop;delete a.stop,b(c)};return"string"!=typeof a&&(c=b,b=a,a=void 0),b&&!1!==a&&this.queue(a||"fx",[]),this.each(function(){var b=!0,e=null!=a&&a+"queueHooks",f=n.timers,g=n._data(this);if(e)g[e]&&g[e].stop&&d(g[e]);else for(e in g)g[e]&&g[e].stop&&jb.test(e)&&d(g[e]);for(e=f.length;e--;)f[e].elem!==this||null!=a&&f[e].queue!==a||(f[e].anim.stop(c),b=!1,f.splice(e,1));!b&&c||n.dequeue(this,a)})},finish:function(a){return!1!==a&&(a=a||"fx"),this.each(function(){var b,c=n._data(this),d=c[a+"queue"],e=c[a+"queueHooks"],f=n.timers,g=d?d.length:0;for(c.finish=!0,n.queue(this,a,[]),e&&e.stop&&e.stop.call(this,!0),b=f.length;b--;)f[b].elem===this&&f[b].queue===a&&(f[b].anim.stop(!0),f.splice(b,1));for(b=0;b<g;b++)d[b]&&d[b].finish&&d[b].finish.call(this);delete c.finish})}}),n.each(["toggle","show","hide"],function(a,b){var c=n.fn[b];n.fn[b]=function(a,d,e){return null==a||"boolean"==typeof a?c.apply(this,arguments):this.animate(lb(b,!0),a,d,e)}}),n.each({slideDown:lb("show"),slideUp:lb("hide"),slideToggle:lb("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(a,b){n.fn[a]=function(a,c,d){return this.animate(b,a,c,d)}}),n.timers=[],n.fx.tick=function(){var a,b=n.timers,c=0;for(gb=n.now();c<b.length;c++)(a=b[c])()||b[c]!==a||b.splice(c--,1);b.length||n.fx.stop(),gb=void 0},n.fx.timer=function(a){n.timers.push(a),a()?n.fx.start():n.timers.pop()},n.fx.interval=13,n.fx.start=function(){hb||(hb=a.setInterval(n.fx.tick,n.fx.interval))},n.fx.stop=function(){a.clearInterval(hb),hb=null},n.fx.speeds={slow:600,fast:200,_default:400},n.fn.delay=function(b,c){return b=n.fx?n.fx.speeds[b]||b:b,c=c||"fx",this.queue(c,function(c,d){var e=a.setTimeout(c,b);d.stop=function(){a.clearTimeout(e)}})},function(){var a,b=d.createElement("input"),c=d.createElement("div"),e=d.createElement("select"),f=e.appendChild(d.createElement("option"));c=d.createElement("div"),c.setAttribute("className","t"),c.innerHTML="  <link/><table></table><a href=\'/a\'>a</a><input type=\'checkbox\'/>",a=c.getElementsByTagName("a")[0],b.setAttribute("type","checkbox"),c.appendChild(b),a=c.getElementsByTagName("a")[0],a.style.cssText="top:1px",l.getSetAttribute="t"!==c.className,l.style=/top/.test(a.getAttribute("style")),l.hrefNormalized="/a"===a.getAttribute("href"),l.checkOn=!!b.value,l.optSelected=f.selected,l.enctype=!!d.createElement("form").enctype,e.disabled=!0,l.optDisabled=!f.disabled,b=d.createElement("input"),b.setAttribute("value",""),l.input=""===b.getAttribute("value"),b.value="t",b.setAttribute("type","radio"),l.radioValue="t"===b.value}();var qb=/\\r/g,rb=/[\\x20\\t\\r\\n\\f]+/g;n.fn.extend({val:function(a){var b,c,d,e=this[0];{if(arguments.length)return d=n.isFunction(a),this.each(function(c){var e;1===this.nodeType&&(e=d?a.call(this,c,n(this).val()):a,null==e?e="":"number"==typeof e?e+="":n.isArray(e)&&(e=n.map(e,function(a){return null==a?"":a+""})),(b=n.valHooks[this.type]||n.valHooks[this.nodeName.toLowerCase()])&&"set"in b&&void 0!==b.set(this,e,"value")||(this.value=e))});if(e)return(b=n.valHooks[e.type]||n.valHooks[e.nodeName.toLowerCase()])&&"get"in b&&void 0!==(c=b.get(e,"value"))?c:(c=e.value,"string"==typeof c?c.replace(qb,""):null==c?"":c)}}}),n.extend({valHooks:{option:{get:function(a){var b=n.find.attr(a,"value");return null!=b?b:n.trim(n.text(a)).replace(rb," ")}},select:{get:function(a){for(var b,c,d=a.options,e=a.selectedIndex,f="select-one"===a.type||e<0,g=f?null:[],h=f?e+1:d.length,i=e<0?h:f?e:0;i<h;i++)if(c=d[i],(c.selected||i===e)&&(l.optDisabled?!c.disabled:null===c.getAttribute("disabled"))&&(!c.parentNode.disabled||!n.nodeName(c.parentNode,"optgroup"))){if(b=n(c).val(),f)return b;g.push(b)}return g},set:function(a,b){var c,d,e=a.options,f=n.makeArray(b),g=e.length;while(g--)if(d=e[g],n.inArray(n.valHooks.option.get(d),f)>-1)try{d.selected=c=!0}catch(h){d.scrollHeight}else d.selected=!1;return c||(a.selectedIndex=-1),e}}}}),n.each(["radio","checkbox"],function(){n.valHooks[this]={set:function(a,b){if(n.isArray(b))return a.checked=n.inArray(n(a).val(),b)>-1}},l.checkOn||(n.valHooks[this].get=function(a){return null===a.getAttribute("value")?"on":a.value})});var sb,tb,ub=n.expr.attrHandle,vb=/^(?:checked|selected)$/i,wb=l.getSetAttribute,xb=l.input;n.fn.extend({attr:function(a,b){return X(this,n.attr,a,b,arguments.length>1)},removeAttr:function(a){return this.each(function(){n.removeAttr(this,a)})}}),n.extend({attr:function(a,b,c){var d,e,f=a.nodeType;if(3!==f&&8!==f&&2!==f)return void 0===a.getAttribute?n.prop(a,b,c):(1===f&&n.isXMLDoc(a)||(b=b.toLowerCase(),e=n.attrHooks[b]||(n.expr.match.bool.test(b)?tb:sb)),void 0!==c?null===c?void n.removeAttr(a,b):e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:(a.setAttribute(b,c+""),c):e&&"get"in e&&null!==(d=e.get(a,b))?d:(d=n.find.attr(a,b),null==d?void 0:d))},attrHooks:{type:{set:function(a,b){if(!l.radioValue&&"radio"===b&&n.nodeName(a,"input")){var c=a.value;return a.setAttribute("type",b),c&&(a.value=c),b}}}},removeAttr:function(a,b){var c,d,e=0,f=b&&b.match(F);if(f&&1===a.nodeType)while(c=f[e++])d=n.propFix[c]||c,n.expr.match.bool.test(c)?xb&&wb||!vb.test(c)?a[d]=!1:a[n.camelCase("default-"+c)]=a[d]=!1:n.attr(a,c,""),a.removeAttribute(wb?c:d)}}),tb={set:function(a,b,c){return!1===b?n.removeAttr(a,c):xb&&wb||!vb.test(c)?a.setAttribute(!wb&&n.propFix[c]||c,c):a[n.camelCase("default-"+c)]=a[c]=!0,c}},n.each(n.expr.match.bool.source.match(/\\w+/g),function(a,b){var c=ub[b]||n.find.attr;xb&&wb||!vb.test(b)?ub[b]=function(a,b,d){var e,f;return d||(f=ub[b],ub[b]=e,e=null!=c(a,b,d)?b.toLowerCase():null,ub[b]=f),e}:ub[b]=function(a,b,c){if(!c)return a[n.camelCase("default-"+b)]?b.toLowerCase():null}}),xb&&wb||(n.attrHooks.value={set:function(a,b,c){if(!n.nodeName(a,"input"))return sb&&sb.set(a,b,c);a.defaultValue=b}}),wb||(sb={set:function(a,b,c){var d=a.getAttributeNode(c);if(d||a.setAttributeNode(d=a.ownerDocument.createAttribute(c)),d.value=b+="","value"===c||b===a.getAttribute(c))return b}},ub.id=ub.name=ub.coords=function(a,b,c){var d;if(!c)return(d=a.getAttributeNode(b))&&""!==d.value?d.value:null},n.valHooks.button={get:function(a,b){var c=a.getAttributeNode(b);if(c&&c.specified)return c.value},set:sb.set},n.attrHooks.contenteditable={set:function(a,b,c){sb.set(a,""!==b&&b,c)}},n.each(["width","height"],function(a,b){n.attrHooks[b]={set:function(a,c){if(""===c)return a.setAttribute(b,"auto"),c}}})),l.style||(n.attrHooks.style={get:function(a){return a.style.cssText||void 0},set:function(a,b){return a.style.cssText=b+""}});var yb=/^(?:input|select|textarea|button|object)$/i,zb=/^(?:a|area)$/i;n.fn.extend({prop:function(a,b){return X(this,n.prop,a,b,arguments.length>1)},removeProp:function(a){return a=n.propFix[a]||a,this.each(function(){try{this[a]=void 0,delete this[a]}catch(b){}})}}),n.extend({prop:function(a,b,c){var d,e,f=a.nodeType;if(3!==f&&8!==f&&2!==f)return 1===f&&n.isXMLDoc(a)||(b=n.propFix[b]||b,e=n.propHooks[b]),void 0!==c?e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:a[b]=c:e&&"get"in e&&null!==(d=e.get(a,b))?d:a[b]},propHooks:{tabIndex:{get:function(a){var b=n.find.attr(a,"tabindex");return b?parseInt(b,10):yb.test(a.nodeName)||zb.test(a.nodeName)&&a.href?0:-1}}},propFix:{for:"htmlFor",class:"className"}}),l.hrefNormalized||n.each(["href","src"],function(a,b){n.propHooks[b]={get:function(a){return a.getAttribute(b,4)}}}),l.optSelected||(n.propHooks.selected={get:function(a){var b=a.parentNode;return b&&(b.selectedIndex,b.parentNode&&b.parentNode.selectedIndex),null},set:function(a){var b=a.parentNode;b&&(b.selectedIndex,b.parentNode&&b.parentNode.selectedIndex)}}),n.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){n.propFix[this.toLowerCase()]=this}),l.enctype||(n.propFix.enctype="encoding");var Ab=/[\\t\\r\\n\\f]/g;function Bb(a){return n.attr(a,"class")||""}n.fn.extend({addClass:function(a){var b,c,d,e,f,g,h,i=0;if(n.isFunction(a))return this.each(function(b){n(this).addClass(a.call(this,b,Bb(this)))});if("string"==typeof a&&a){b=a.match(F)||[];while(c=this[i++])if(e=Bb(c),d=1===c.nodeType&&(" "+e+" ").replace(Ab," ")){g=0;while(f=b[g++])d.indexOf(" "+f+" ")<0&&(d+=f+" ");h=n.trim(d),e!==h&&n.attr(c,"class",h)}}return this},removeClass:function(a){var b,c,d,e,f,g,h,i=0;if(n.isFunction(a))return this.each(function(b){n(this).removeClass(a.call(this,b,Bb(this)))});if(!arguments.length)return this.attr("class","");if("string"==typeof a&&a){b=a.match(F)||[];while(c=this[i++])if(e=Bb(c),d=1===c.nodeType&&(" "+e+" ").replace(Ab," ")){g=0;while(f=b[g++])while(d.indexOf(" "+f+" ")>-1)d=d.replace(" "+f+" "," ");h=n.trim(d),e!==h&&n.attr(c,"class",h)}}return this},toggleClass:function(a,b){var c=typeof a;return"boolean"==typeof b&&"string"===c?b?this.addClass(a):this.removeClass(a):n.isFunction(a)?this.each(function(c){n(this).toggleClass(a.call(this,c,Bb(this),b),b)}):this.each(function(){var b,d,e,f;if("string"===c){d=0,e=n(this),f=a.match(F)||[];while(b=f[d++])e.hasClass(b)?e.removeClass(b):e.addClass(b)}else void 0!==a&&"boolean"!==c||(b=Bb(this),b&&n._data(this,"__className__",b),n.attr(this,"class",b||!1===a?"":n._data(this,"__className__")||""))})},hasClass:function(a){var b,c,d=0;b=" "+a+" ";while(c=this[d++])if(1===c.nodeType&&(" "+Bb(c)+" ").replace(Ab," ").indexOf(b)>-1)return!0;return!1}}),n.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(a,b){n.fn[b]=function(a,c){return arguments.length>0?this.on(b,null,a,c):this.trigger(b)}}),n.fn.extend({hover:function(a,b){return this.mouseenter(a).mouseleave(b||a)}});var Cb=a.location,Db=n.now(),Eb=/\\?/,Fb=/(,)|(\\[|{)|(}|])|"(?:[^"\\\\\\r\\n]|\\\\["\\\\\\/bfnrt]|\\\\u[\\da-fA-F]{4})*"\\s*:?|true|false|null|-?(?!0\\d)\\d+(?:\\.\\d+|)(?:[eE][+-]?\\d+|)/g;n.parseJSON=function(b){if(a.JSON&&a.JSON.parse)return a.JSON.parse(b+"");var c,d=null,e=n.trim(b+"");return e&&!n.trim(e.replace(Fb,function(a,b,e,f){return c&&b&&(d=0),0===d?a:(c=e||b,d+=!f-!e,"")}))?Function("return "+e)():n.error("Invalid JSON: "+b)},n.parseXML=function(b){var c,d;if(!b||"string"!=typeof b)return null;try{a.DOMParser?(d=new a.DOMParser,c=d.parseFromString(b,"text/xml")):(c=new a.ActiveXObject("Microsoft.XMLDOM"),c.async="false",c.loadXML(b))}catch(e){c=void 0}return c&&c.documentElement&&!c.getElementsByTagName("parsererror").length||n.error("Invalid XML: "+b),c};var Gb=/#.*$/,Hb=/([?&])_=[^&]*/,Ib=/^(.*?):[ \\t]*([^\\r\\n]*)\\r?$/gm,Jb=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,Kb=/^(?:GET|HEAD)$/,Lb=/^\\/\\//,Mb=/^([\\w.+-]+:)(?:\\/\\/(?:[^\\/?#]*@|)([^\\/?#:]*)(?::(\\d+)|)|)/,Nb={},Ob={},Pb="*/".concat("*"),Qb=Cb.href,Rb=Mb.exec(Qb.toLowerCase())||[];function Sb(a){return function(b,c){"string"!=typeof b&&(c=b,b="*");var d,e=0,f=b.toLowerCase().match(F)||[];if(n.isFunction(c))while(d=f[e++])"+"===d.charAt(0)?(d=d.slice(1)||"*",(a[d]=a[d]||[]).unshift(c)):(a[d]=a[d]||[]).push(c)}}function Tb(a,b,c,d){var e={},f=a===Ob;function g(h){var i;return e[h]=!0,n.each(a[h]||[],function(a,h){var j=h(b,c,d);return"string"!=typeof j||f||e[j]?f?!(i=j):void 0:(b.dataTypes.unshift(j),g(j),!1)}),i}return g(b.dataTypes[0])||!e["*"]&&g("*")}function Ub(a,b){var c,d,e=n.ajaxSettings.flatOptions||{};for(d in b)void 0!==b[d]&&((e[d]?a:c||(c={}))[d]=b[d]);return c&&n.extend(!0,a,c),a}function Vb(a,b,c){var d,e,f,g,h=a.contents,i=a.dataTypes;while("*"===i[0])i.shift(),void 0===e&&(e=a.mimeType||b.getResponseHeader("Content-Type"));if(e)for(g in h)if(h[g]&&h[g].test(e)){i.unshift(g);break}if(i[0]in c)f=i[0];else{for(g in c){if(!i[0]||a.converters[g+" "+i[0]]){f=g;break}d||(d=g)}f=f||d}if(f)return f!==i[0]&&i.unshift(f),c[f]}function Wb(a,b,c,d){var e,f,g,h,i,j={},k=a.dataTypes.slice();if(k[1])for(g in a.converters)j[g.toLowerCase()]=a.converters[g];f=k.shift();while(f)if(a.responseFields[f]&&(c[a.responseFields[f]]=b),!i&&d&&a.dataFilter&&(b=a.dataFilter(b,a.dataType)),i=f,f=k.shift())if("*"===f)f=i;else if("*"!==i&&i!==f){if(!(g=j[i+" "+f]||j["* "+f]))for(e in j)if(h=e.split(" "),h[1]===f&&(g=j[i+" "+h[0]]||j["* "+h[0]])){!0===g?g=j[e]:!0!==j[e]&&(f=h[0],k.unshift(h[1]));break}if(!0!==g)if(g&&a.throws)b=g(b);else try{b=g(b)}catch(l){return{state:"parsererror",error:g?l:"No conversion from "+i+" to "+f}}}return{state:"success",data:b}}n.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:Qb,type:"GET",isLocal:Jb.test(Rb[1]),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":Pb,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\\bxml\\b/,html:/\\bhtml/,json:/\\bjson\\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":n.parseJSON,"text xml":n.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(a,b){return b?Ub(Ub(a,n.ajaxSettings),b):Ub(n.ajaxSettings,a)},ajaxPrefilter:Sb(Nb),ajaxTransport:Sb(Ob),ajax:function(b,c){"object"==typeof b&&(c=b,b=void 0),c=c||{};var d,e,f,g,h,i,j,k,l=n.ajaxSetup({},c),m=l.context||l,o=l.context&&(m.nodeType||m.jquery)?n(m):n.event,p=n.Deferred(),q=n.Callbacks("once memory"),r=l.statusCode||{},s={},t={},u=0,v="canceled",w={readyState:0,getResponseHeader:function(a){var b;if(2===u){if(!k){k={};while(b=Ib.exec(g))k[b[1].toLowerCase()]=b[2]}b=k[a.toLowerCase()]}return null==b?null:b},getAllResponseHeaders:function(){return 2===u?g:null},setRequestHeader:function(a,b){var c=a.toLowerCase();return u||(a=t[c]=t[c]||a,s[a]=b),this},overrideMimeType:function(a){return u||(l.mimeType=a),this},statusCode:function(a){var b;if(a)if(u<2)for(b in a)r[b]=[r[b],a[b]];else w.always(a[w.status]);return this},abort:function(a){var b=a||v;return j&&j.abort(b),x(0,b),this}};if(p.promise(w).complete=q.add,w.success=w.done,w.error=w.fail,l.url=((b||l.url||Qb)+"").replace(Gb,"").replace(Lb,Rb[1]+"//"),l.type=c.method||c.type||l.method||l.type,l.dataTypes=n.trim(l.dataType||"*").toLowerCase().match(F)||[""],null==l.crossDomain&&(d=Mb.exec(l.url.toLowerCase()),l.crossDomain=!(!d||d[1]===Rb[1]&&d[2]===Rb[2]&&(d[3]||("http:"===d[1]?"80":"443"))===(Rb[3]||("http:"===Rb[1]?"80":"443")))),l.data&&l.processData&&"string"!=typeof l.data&&(l.data=n.param(l.data,l.traditional)),Tb(Nb,l,c,w),2===u)return w;i=n.event&&l.global,i&&0==n.active++&&n.event.trigger("ajaxStart"),l.type=l.type.toUpperCase(),l.hasContent=!Kb.test(l.type),f=l.url,l.hasContent||(l.data&&(f=l.url+=(Eb.test(f)?"&":"?")+l.data,delete l.data),!1===l.cache&&(l.url=Hb.test(f)?f.replace(Hb,"$1_="+Db++):f+(Eb.test(f)?"&":"?")+"_="+Db++)),l.ifModified&&(n.lastModified[f]&&w.setRequestHeader("If-Modified-Since",n.lastModified[f]),n.etag[f]&&w.setRequestHeader("If-None-Match",n.etag[f])),(l.data&&l.hasContent&&!1!==l.contentType||c.contentType)&&w.setRequestHeader("Content-Type",l.contentType),w.setRequestHeader("Accept",l.dataTypes[0]&&l.accepts[l.dataTypes[0]]?l.accepts[l.dataTypes[0]]+("*"!==l.dataTypes[0]?", "+Pb+"; q=0.01":""):l.accepts["*"]);for(e in l.headers)w.setRequestHeader(e,l.headers[e]);if(l.beforeSend&&(!1===l.beforeSend.call(m,w,l)||2===u))return w.abort();v="abort";for(e in{success:1,error:1,complete:1})w[e](l[e]);if(j=Tb(Ob,l,c,w)){if(w.readyState=1,i&&o.trigger("ajaxSend",[w,l]),2===u)return w;l.async&&l.timeout>0&&(h=a.setTimeout(function(){w.abort("timeout")},l.timeout));try{u=1,j.send(s,x)}catch(y){if(!(u<2))throw y;x(-1,y)}}else x(-1,"No Transport");function x(b,c,d,e){var k,s,t,v,x,y=c;2!==u&&(u=2,h&&a.clearTimeout(h),j=void 0,g=e||"",w.readyState=b>0?4:0,k=b>=200&&b<300||304===b,d&&(v=Vb(l,w,d)),v=Wb(l,v,w,k),k?(l.ifModified&&(x=w.getResponseHeader("Last-Modified"),x&&(n.lastModified[f]=x),(x=w.getResponseHeader("etag"))&&(n.etag[f]=x)),204===b||"HEAD"===l.type?y="nocontent":304===b?y="notmodified":(y=v.state,s=v.data,t=v.error,k=!t)):(t=y,!b&&y||(y="error",b<0&&(b=0))),w.status=b,w.statusText=(c||y)+"",k?p.resolveWith(m,[s,y,w]):p.rejectWith(m,[w,y,t]),w.statusCode(r),r=void 0,i&&o.trigger(k?"ajaxSuccess":"ajaxError",[w,l,k?s:t]),q.fireWith(m,[w,y]),i&&(o.trigger("ajaxComplete",[w,l]),--n.active||n.event.trigger("ajaxStop")))}return w},getJSON:function(a,b,c){return n.get(a,b,c,"json")},getScript:function(a,b){return n.get(a,void 0,b,"script")}}),n.each(["get","post"],function(a,b){n[b]=function(a,c,d,e){return n.isFunction(c)&&(e=e||d,d=c,c=void 0),n.ajax(n.extend({url:a,type:b,dataType:e,data:c,success:d},n.isPlainObject(a)&&a))}}),n._evalUrl=function(a){return n.ajax({url:a,type:"GET",dataType:"script",cache:!0,async:!1,global:!1,throws:!0})},n.fn.extend({wrapAll:function(a){if(n.isFunction(a))return this.each(function(b){n(this).wrapAll(a.call(this,b))});if(this[0]){var b=n(a,this[0].ownerDocument).eq(0).clone(!0);this[0].parentNode&&b.insertBefore(this[0]),b.map(function(){var a=this;while(a.firstChild&&1===a.firstChild.nodeType)a=a.firstChild;return a}).append(this)}return this},wrapInner:function(a){return n.isFunction(a)?this.each(function(b){n(this).wrapInner(a.call(this,b))}):this.each(function(){var b=n(this),c=b.contents();c.length?c.wrapAll(a):b.append(a)})},wrap:function(a){var b=n.isFunction(a);return this.each(function(c){n(this).wrapAll(b?a.call(this,c):a)})},unwrap:function(){return this.parent().each(function(){n.nodeName(this,"body")||n(this).replaceWith(this.childNodes)}).end()}});function Xb(a){return a.style&&a.style.display||n.css(a,"display")}function Yb(a){if(!n.contains(a.ownerDocument||d,a))return!0;while(a&&1===a.nodeType){if("none"===Xb(a)||"hidden"===a.type)return!0;a=a.parentNode}return!1}n.expr.filters.hidden=function(a){return l.reliableHiddenOffsets()?a.offsetWidth<=0&&a.offsetHeight<=0&&!a.getClientRects().length:Yb(a)},n.expr.filters.visible=function(a){return!n.expr.filters.hidden(a)};var Zb=/%20/g,$b=/\\[\\]$/,_b=/\\r?\\n/g,ac=/^(?:submit|button|image|reset|file)$/i,bc=/^(?:input|select|textarea|keygen)/i;function cc(a,b,c,d){var e;if(n.isArray(b))n.each(b,function(b,e){c||$b.test(a)?d(a,e):cc(a+"["+("object"==typeof e&&null!=e?b:"")+"]",e,c,d)});else if(c||"object"!==n.type(b))d(a,b);else for(e in b)cc(a+"["+e+"]",b[e],c,d)}n.param=function(a,b){var c,d=[],e=function(a,b){b=n.isFunction(b)?b():null==b?"":b,d[d.length]=encodeURIComponent(a)+"="+encodeURIComponent(b)};if(void 0===b&&(b=n.ajaxSettings&&n.ajaxSettings.traditional),n.isArray(a)||a.jquery&&!n.isPlainObject(a))n.each(a,function(){e(this.name,this.value)});else for(c in a)cc(c,a[c],b,e);return d.join("&").replace(Zb,"+")},n.fn.extend({serialize:function(){return n.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var a=n.prop(this,"elements");return a?n.makeArray(a):this}).filter(function(){var a=this.type;return this.name&&!n(this).is(":disabled")&&bc.test(this.nodeName)&&!ac.test(a)&&(this.checked||!Y.test(a))}).map(function(a,b){var c=n(this).val();return null==c?null:n.isArray(c)?n.map(c,function(a){return{name:b.name,value:a.replace(_b,"\\r\\n")}}):{name:b.name,value:c.replace(_b,"\\r\\n")}}).get()}}),n.ajaxSettings.xhr=void 0!==a.ActiveXObject?function(){return this.isLocal?hc():d.documentMode>8?gc():/^(get|post|head|put|delete|options)$/i.test(this.type)&&gc()||hc()}:gc;var dc=0,ec={},fc=n.ajaxSettings.xhr();a.attachEvent&&a.attachEvent("onunload",function(){for(var a in ec)ec[a](void 0,!0)}),l.cors=!!fc&&"withCredentials"in fc,(fc=l.ajax=!!fc)&&n.ajaxTransport(function(b){if(!b.crossDomain||l.cors){var c;return{send:function(d,e){var f,g=b.xhr(),h=++dc;if(g.open(b.type,b.url,b.async,b.username,b.password),b.xhrFields)for(f in b.xhrFields)g[f]=b.xhrFields[f];b.mimeType&&g.overrideMimeType&&g.overrideMimeType(b.mimeType),b.crossDomain||d["X-Requested-With"]||(d["X-Requested-With"]="XMLHttpRequest");for(f in d)void 0!==d[f]&&g.setRequestHeader(f,d[f]+"");g.send(b.hasContent&&b.data||null),c=function(a,d){var f,i,j;if(c&&(d||4===g.readyState))if(delete ec[h],c=void 0,g.onreadystatechange=n.noop,d)4!==g.readyState&&g.abort();else{j={},f=g.status,"string"==typeof g.responseText&&(j.text=g.responseText);try{i=g.statusText}catch(k){i=""}f||!b.isLocal||b.crossDomain?1223===f&&(f=204):f=j.text?200:404}j&&e(f,i,j,g.getAllResponseHeaders())},b.async?4===g.readyState?a.setTimeout(c):g.onreadystatechange=ec[h]=c:c()},abort:function(){c&&c(void 0,!0)}}}});function gc(){try{return new a.XMLHttpRequest}catch(b){}}function hc(){try{return new a.ActiveXObject("Microsoft.XMLHTTP")}catch(b){}}n.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/\\b(?:java|ecma)script\\b/},converters:{"text script":function(a){return n.globalEval(a),a}}}),n.ajaxPrefilter("script",function(a){void 0===a.cache&&(a.cache=!1),a.crossDomain&&(a.type="GET",a.global=!1)}),n.ajaxTransport("script",function(a){if(a.crossDomain){var b,c=d.head||n("head")[0]||d.documentElement;return{send:function(e,f){b=d.createElement("script"),b.async=!0,a.scriptCharset&&(b.charset=a.scriptCharset),b.src=a.url,b.onload=b.onreadystatechange=function(a,c){(c||!b.readyState||/loaded|complete/.test(b.readyState))&&(b.onload=b.onreadystatechange=null,b.parentNode&&b.parentNode.removeChild(b),b=null,c||f(200,"success"))},c.insertBefore(b,c.firstChild)},abort:function(){b&&b.onload(void 0,!0)}}}});var ic=[],jc=/(=)\\?(?=&|$)|\\?\\?/;n.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var a=ic.pop()||n.expando+"_"+Db++;return this[a]=!0,a}}),n.ajaxPrefilter("json jsonp",function(b,c,d){var e,f,g,h=!1!==b.jsonp&&(jc.test(b.url)?"url":"string"==typeof b.data&&0===(b.contentType||"").indexOf("application/x-www-form-urlencoded")&&jc.test(b.data)&&"data");if(h||"jsonp"===b.dataTypes[0])return e=b.jsonpCallback=n.isFunction(b.jsonpCallback)?b.jsonpCallback():b.jsonpCallback,h?b[h]=b[h].replace(jc,"$1"+e):!1!==b.jsonp&&(b.url+=(Eb.test(b.url)?"&":"?")+b.jsonp+"="+e),b.converters["script json"]=function(){return g||n.error(e+" was not called"),g[0]},b.dataTypes[0]="json",f=a[e],a[e]=function(){g=arguments},d.always(function(){void 0===f?n(a).removeProp(e):a[e]=f,b[e]&&(b.jsonpCallback=c.jsonpCallback,ic.push(e)),g&&n.isFunction(f)&&f(g[0]),g=f=void 0}),"script"}),n.parseHTML=function(a,b,c){if(!a||"string"!=typeof a)return null;"boolean"==typeof b&&(c=b,b=!1),b=b||d;var e=x.exec(a),f=!c&&[];return e?[b.createElement(e[1])]:(e=ia([a],b,f),f&&f.length&&n(f).remove(),n.merge([],e.childNodes))};var kc=n.fn.load;n.fn.load=function(a,b,c){if("string"!=typeof a&&kc)return kc.apply(this,arguments);var d,e,f,g=this,h=a.indexOf(" ");return h>-1&&(d=n.trim(a.slice(h,a.length)),a=a.slice(0,h)),n.isFunction(b)?(c=b,b=void 0):b&&"object"==typeof b&&(e="POST"),g.length>0&&n.ajax({url:a,type:e||"GET",dataType:"html",data:b}).done(function(a){f=arguments,g.html(d?n("<div>").append(n.parseHTML(a)).find(d):a)}).always(c&&function(a,b){g.each(function(){c.apply(this,f||[a.responseText,b,a])})}),this},n.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(a,b){n.fn[b]=function(a){return this.on(b,a)}}),n.expr.filters.animated=function(a){return n.grep(n.timers,function(b){return a===b.elem}).length};function lc(a){return n.isWindow(a)?a:9===a.nodeType&&(a.defaultView||a.parentWindow)}n.offset={setOffset:function(a,b,c){var d,e,f,g,h,i,j,k=n.css(a,"position"),l=n(a),m={};"static"===k&&(a.style.position="relative"),h=l.offset(),f=n.css(a,"top"),i=n.css(a,"left"),j=("absolute"===k||"fixed"===k)&&n.inArray("auto",[f,i])>-1,j?(d=l.position(),g=d.top,e=d.left):(g=parseFloat(f)||0,e=parseFloat(i)||0),n.isFunction(b)&&(b=b.call(a,c,n.extend({},h))),null!=b.top&&(m.top=b.top-h.top+g),null!=b.left&&(m.left=b.left-h.left+e),"using"in b?b.using.call(a,m):l.css(m)}},n.fn.extend({offset:function(a){if(arguments.length)return void 0===a?this:this.each(function(b){n.offset.setOffset(this,a,b)});var b,c,d={top:0,left:0},e=this[0],f=e&&e.ownerDocument;if(f)return b=f.documentElement,n.contains(b,e)?(void 0!==e.getBoundingClientRect&&(d=e.getBoundingClientRect()),c=lc(f),{top:d.top+(c.pageYOffset||b.scrollTop)-(b.clientTop||0),left:d.left+(c.pageXOffset||b.scrollLeft)-(b.clientLeft||0)}):d},position:function(){if(this[0]){var a,b,c={top:0,left:0},d=this[0];return"fixed"===n.css(d,"position")?b=d.getBoundingClientRect():(a=this.offsetParent(),b=this.offset(),n.nodeName(a[0],"html")||(c=a.offset()),c.top+=n.css(a[0],"borderTopWidth",!0),c.left+=n.css(a[0],"borderLeftWidth",!0)),{top:b.top-c.top-n.css(d,"marginTop",!0),left:b.left-c.left-n.css(d,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var a=this.offsetParent;while(a&&!n.nodeName(a,"html")&&"static"===n.css(a,"position"))a=a.offsetParent;return a||Pa})}}),n.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(a,b){var c=/Y/.test(b);n.fn[a]=function(d){return X(this,function(a,d,e){var f=lc(a);if(void 0===e)return f?b in f?f[b]:f.document.documentElement[d]:a[d];f?f.scrollTo(c?n(f).scrollLeft():e,c?e:n(f).scrollTop()):a[d]=e},a,d,arguments.length,null)}}),n.each(["top","left"],function(a,b){n.cssHooks[b]=Ta(l.pixelPosition,function(a,c){if(c)return c=Ra(a,b),Na.test(c)?n(a).position()[b]+"px":c})}),n.each({Height:"height",Width:"width"},function(a,b){n.each({padding:"inner"+a,content:b,"":"outer"+a},function(c,d){n.fn[d]=function(d,e){var f=arguments.length&&(c||"boolean"!=typeof d),g=c||(!0===d||!0===e?"margin":"border")\n;return X(this,function(b,c,d){var e;return n.isWindow(b)?b.document.documentElement["client"+a]:9===b.nodeType?(e=b.documentElement,Math.max(b.body["scroll"+a],e["scroll"+a],b.body["offset"+a],e["offset"+a],e["client"+a])):void 0===d?n.css(b,c,g):n.style(b,c,d,g)},b,f?d:void 0,f,null)}})}),n.fn.extend({bind:function(a,b,c){return this.on(a,null,b,c)},unbind:function(a,b){return this.off(a,null,b)},delegate:function(a,b,c,d){return this.on(b,a,c,d)},undelegate:function(a,b,c){return 1===arguments.length?this.off(a,"**"):this.off(b,a||"**",c)}}),n.fn.size=function(){return this.length},n.fn.andSelf=n.fn.addBack,"function"==typeof define&&define.amd&&define("jquery",[],function(){return n});var mc=a.jQuery,nc=a.$;return n.noConflict=function(b){return a.$===n&&(a.$=nc),b&&a.jQuery===n&&(a.jQuery=mc),n},b||(a.jQuery=a.$=n),n});\njQuery.noConflict();\n',
          },
          redirectURL: "",
          headersSize: -1,
          bodySize: 0,
          _transferSize: 0,
          _error: null,
        },
        serverIPAddress: "[2a00:1ed0:2:0:1:5bef:c83b:1]",
        startedDateTime: "2020-09-03T03:33:54.909Z",
        time: 0.04399999943416333,
        timings: {
          blocked: -1,
          dns: -1,
          ssl: -1,
          connect: -1,
          send: 0,
          wait: 0.03999999989900971,
          receive: 0.00399999953515362,
          _blocked_queueing: -1,
        },
      },
      {
        _fromCache: "memory",
        _initiator: {
          type: "parser",
          url: "http://www.softwareishard.com/blog/har-12-spec/",
          lineNumber: 105,
        },
        _priority: "High",
        _resourceType: "script",
        cache: {},
        connection: "2616",
        pageref: "page_1",
        request: {
          method: "GET",
          url:
            "http://www.softwareishard.com/blog/wp-includes/js/jquery/jquery-migrate.min.js?ver=1.4.1",
          httpVersion: "http/1.1",
          headers: [
            {
              name: "Referer",
              value: "http://www.softwareishard.com/blog/har-12-spec/",
            },
            {
              name: "User-Agent",
              value:
                "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/85.0.4183.83 Safari/537.36",
            },
            {
              name: "DNT",
              value: "1",
            },
          ],
          queryString: [
            {
              name: "ver",
              value: "1.4.1",
            },
          ],
          cookies: [],
          headersSize: -1,
          bodySize: 0,
        },
        response: {
          status: 200,
          statusText: "OK",
          httpVersion: "http/1.1",
          headers: [
            {
              name: "Date",
              value: "Thu, 03 Sep 2020 02:07:54 GMT",
            },
            {
              name: "Content-Encoding",
              value: "gzip",
            },
            {
              name: "Last-Modified",
              value: "Fri, 20 May 2016 04:11:28 GMT",
            },
            {
              name: "Server",
              value: "Apache/2.4.10 (Debian)",
            },
            {
              name: "ETag",
              value: '"2748-5333e48ec7c00-gzip"',
            },
            {
              name: "Vary",
              value: "User-Agent,Accept-Encoding",
            },
            {
              name: "Content-Type",
              value: "application/javascript",
            },
            {
              name: "Cache-Control",
              value: "max-age=1209600",
            },
            {
              name: "Connection",
              value: "Keep-Alive",
            },
            {
              name: "Accept-Ranges",
              value: "bytes",
            },
            {
              name: "Keep-Alive",
              value: "timeout=5, max=100",
            },
            {
              name: "Content-Length",
              value: "4014",
            },
            {
              name: "Expires",
              value: "Thu, 17 Sep 2020 02:07:54 GMT",
            },
          ],
          cookies: [],
          content: {
            size: 10056,
            mimeType: "application/javascript",
            text:
              '/*! jQuery Migrate v1.4.1 | (c) jQuery Foundation and other contributors | jquery.org/license */\n"undefined"==typeof jQuery.migrateMute&&(jQuery.migrateMute=!0),function(a,b,c){function d(c){var d=b.console;f[c]||(f[c]=!0,a.migrateWarnings.push(c),d&&d.warn&&!a.migrateMute&&(d.warn("JQMIGRATE: "+c),a.migrateTrace&&d.trace&&d.trace()))}function e(b,c,e,f){if(Object.defineProperty)try{return void Object.defineProperty(b,c,{configurable:!0,enumerable:!0,get:function(){return d(f),e},set:function(a){d(f),e=a}})}catch(g){}a._definePropertyBroken=!0,b[c]=e}a.migrateVersion="1.4.1";var f={};a.migrateWarnings=[],b.console&&b.console.log&&b.console.log("JQMIGRATE: Migrate is installed"+(a.migrateMute?"":" with logging active")+", version "+a.migrateVersion),a.migrateTrace===c&&(a.migrateTrace=!0),a.migrateReset=function(){f={},a.migrateWarnings.length=0},"BackCompat"===document.compatMode&&d("jQuery is not compatible with Quirks Mode");var g=a("<input/>",{size:1}).attr("size")&&a.attrFn,h=a.attr,i=a.attrHooks.value&&a.attrHooks.value.get||function(){return null},j=a.attrHooks.value&&a.attrHooks.value.set||function(){return c},k=/^(?:input|button)$/i,l=/^[238]$/,m=/^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i,n=/^(?:checked|selected)$/i;e(a,"attrFn",g||{},"jQuery.attrFn is deprecated"),a.attr=function(b,e,f,i){var j=e.toLowerCase(),o=b&&b.nodeType;return i&&(h.length<4&&d("jQuery.fn.attr( props, pass ) is deprecated"),b&&!l.test(o)&&(g?e in g:a.isFunction(a.fn[e])))?a(b)[e](f):("type"===e&&f!==c&&k.test(b.nodeName)&&b.parentNode&&d("Can\'t change the \'type\' of an input or button in IE 6/7/8"),!a.attrHooks[j]&&m.test(j)&&(a.attrHooks[j]={get:function(b,d){var e,f=a.prop(b,d);return f===!0||"boolean"!=typeof f&&(e=b.getAttributeNode(d))&&e.nodeValue!==!1?d.toLowerCase():c},set:function(b,c,d){var e;return c===!1?a.removeAttr(b,d):(e=a.propFix[d]||d,e in b&&(b[e]=!0),b.setAttribute(d,d.toLowerCase())),d}},n.test(j)&&d("jQuery.fn.attr(\'"+j+"\') might use property instead of attribute")),h.call(a,b,e,f))},a.attrHooks.value={get:function(a,b){var c=(a.nodeName||"").toLowerCase();return"button"===c?i.apply(this,arguments):("input"!==c&&"option"!==c&&d("jQuery.fn.attr(\'value\') no longer gets properties"),b in a?a.value:null)},set:function(a,b){var c=(a.nodeName||"").toLowerCase();return"button"===c?j.apply(this,arguments):("input"!==c&&"option"!==c&&d("jQuery.fn.attr(\'value\', val) no longer sets properties"),void(a.value=b))}};var o,p,q=a.fn.init,r=a.find,s=a.parseJSON,t=/^\\s*</,u=/\\[(\\s*[-\\w]+\\s*)([~|^$*]?=)\\s*([-\\w#]*?#[-\\w#]*)\\s*\\]/,v=/\\[(\\s*[-\\w]+\\s*)([~|^$*]?=)\\s*([-\\w#]*?#[-\\w#]*)\\s*\\]/g,w=/^([^<]*)(<[\\w\\W]+>)([^>]*)$/;a.fn.init=function(b,e,f){var g,h;return b&&"string"==typeof b&&!a.isPlainObject(e)&&(g=w.exec(a.trim(b)))&&g[0]&&(t.test(b)||d("$(html) HTML strings must start with \'<\' character"),g[3]&&d("$(html) HTML text after last tag is ignored"),"#"===g[0].charAt(0)&&(d("HTML string cannot start with a \'#\' character"),a.error("JQMIGRATE: Invalid selector string (XSS)")),e&&e.context&&e.context.nodeType&&(e=e.context),a.parseHTML)?q.call(this,a.parseHTML(g[2],e&&e.ownerDocument||e||document,!0),e,f):(h=q.apply(this,arguments),b&&b.selector!==c?(h.selector=b.selector,h.context=b.context):(h.selector="string"==typeof b?b:"",b&&(h.context=b.nodeType?b:e||document)),h)},a.fn.init.prototype=a.fn,a.find=function(a){var b=Array.prototype.slice.call(arguments);if("string"==typeof a&&u.test(a))try{document.querySelector(a)}catch(c){a=a.replace(v,function(a,b,c,d){return"["+b+c+\'"\'+d+\'"]\'});try{document.querySelector(a),d("Attribute selector with \'#\' must be quoted: "+b[0]),b[0]=a}catch(e){d("Attribute selector with \'#\' was not fixed: "+b[0])}}return r.apply(this,b)};var x;for(x in r)Object.prototype.hasOwnProperty.call(r,x)&&(a.find[x]=r[x]);a.parseJSON=function(a){return a?s.apply(this,arguments):(d("jQuery.parseJSON requires a valid JSON string"),null)},a.uaMatch=function(a){a=a.toLowerCase();var b=/(chrome)[ \\/]([\\w.]+)/.exec(a)||/(webkit)[ \\/]([\\w.]+)/.exec(a)||/(opera)(?:.*version|)[ \\/]([\\w.]+)/.exec(a)||/(msie) ([\\w.]+)/.exec(a)||a.indexOf("compatible")<0&&/(mozilla)(?:.*? rv:([\\w.]+)|)/.exec(a)||[];return{browser:b[1]||"",version:b[2]||"0"}},a.browser||(o=a.uaMatch(navigator.userAgent),p={},o.browser&&(p[o.browser]=!0,p.version=o.version),p.chrome?p.webkit=!0:p.webkit&&(p.safari=!0),a.browser=p),e(a,"browser",a.browser,"jQuery.browser is deprecated"),a.boxModel=a.support.boxModel="CSS1Compat"===document.compatMode,e(a,"boxModel",a.boxModel,"jQuery.boxModel is deprecated"),e(a.support,"boxModel",a.support.boxModel,"jQuery.support.boxModel is deprecated"),a.sub=function(){function b(a,c){return new b.fn.init(a,c)}a.extend(!0,b,this),b.superclass=this,b.fn=b.prototype=this(),b.fn.constructor=b,b.sub=this.sub,b.fn.init=function(d,e){var f=a.fn.init.call(this,d,e,c);return f instanceof b?f:b(f)},b.fn.init.prototype=b.fn;var c=b(document);return d("jQuery.sub() is deprecated"),b},a.fn.size=function(){return d("jQuery.fn.size() is deprecated; use the .length property"),this.length};var y=!1;a.swap&&a.each(["height","width","reliableMarginRight"],function(b,c){var d=a.cssHooks[c]&&a.cssHooks[c].get;d&&(a.cssHooks[c].get=function(){var a;return y=!0,a=d.apply(this,arguments),y=!1,a})}),a.swap=function(a,b,c,e){var f,g,h={};y||d("jQuery.swap() is undocumented and deprecated");for(g in b)h[g]=a.style[g],a.style[g]=b[g];f=c.apply(a,e||[]);for(g in b)a.style[g]=h[g];return f},a.ajaxSetup({converters:{"text json":a.parseJSON}});var z=a.fn.data;a.fn.data=function(b){var e,f,g=this[0];return!g||"events"!==b||1!==arguments.length||(e=a.data(g,b),f=a._data(g,b),e!==c&&e!==f||f===c)?z.apply(this,arguments):(d("Use of jQuery.fn.data(\'events\') is deprecated"),f)};var A=/\\/(java|ecma)script/i;a.clean||(a.clean=function(b,c,e,f){c=c||document,c=!c.nodeType&&c[0]||c,c=c.ownerDocument||c,d("jQuery.clean() is deprecated");var g,h,i,j,k=[];if(a.merge(k,a.buildFragment(b,c).childNodes),e)for(i=function(a){return!a.type||A.test(a.type)?f?f.push(a.parentNode?a.parentNode.removeChild(a):a):e.appendChild(a):void 0},g=0;null!=(h=k[g]);g++)a.nodeName(h,"script")&&i(h)||(e.appendChild(h),"undefined"!=typeof h.getElementsByTagName&&(j=a.grep(a.merge([],h.getElementsByTagName("script")),i),k.splice.apply(k,[g+1,0].concat(j)),g+=j.length));return k});var B=a.event.add,C=a.event.remove,D=a.event.trigger,E=a.fn.toggle,F=a.fn.live,G=a.fn.die,H=a.fn.load,I="ajaxStart|ajaxStop|ajaxSend|ajaxComplete|ajaxError|ajaxSuccess",J=new RegExp("\\\\b(?:"+I+")\\\\b"),K=/(?:^|\\s)hover(\\.\\S+|)\\b/,L=function(b){return"string"!=typeof b||a.event.special.hover?b:(K.test(b)&&d("\'hover\' pseudo-event is deprecated, use \'mouseenter mouseleave\'"),b&&b.replace(K,"mouseenter$1 mouseleave$1"))};a.event.props&&"attrChange"!==a.event.props[0]&&a.event.props.unshift("attrChange","attrName","relatedNode","srcElement"),a.event.dispatch&&e(a.event,"handle",a.event.dispatch,"jQuery.event.handle is undocumented and deprecated"),a.event.add=function(a,b,c,e,f){a!==document&&J.test(b)&&d("AJAX events should be attached to document: "+b),B.call(this,a,L(b||""),c,e,f)},a.event.remove=function(a,b,c,d,e){C.call(this,a,L(b)||"",c,d,e)},a.each(["load","unload","error"],function(b,c){a.fn[c]=function(){var a=Array.prototype.slice.call(arguments,0);return"load"===c&&"string"==typeof a[0]?H.apply(this,a):(d("jQuery.fn."+c+"() is deprecated"),a.splice(0,0,c),arguments.length?this.bind.apply(this,a):(this.triggerHandler.apply(this,a),this))}}),a.fn.toggle=function(b,c){if(!a.isFunction(b)||!a.isFunction(c))return E.apply(this,arguments);d("jQuery.fn.toggle(handler, handler...) is deprecated");var e=arguments,f=b.guid||a.guid++,g=0,h=function(c){var d=(a._data(this,"lastToggle"+b.guid)||0)%g;return a._data(this,"lastToggle"+b.guid,d+1),c.preventDefault(),e[d].apply(this,arguments)||!1};for(h.guid=f;g<e.length;)e[g++].guid=f;return this.click(h)},a.fn.live=function(b,c,e){return d("jQuery.fn.live() is deprecated"),F?F.apply(this,arguments):(a(this.context).on(b,this.selector,c,e),this)},a.fn.die=function(b,c){return d("jQuery.fn.die() is deprecated"),G?G.apply(this,arguments):(a(this.context).off(b,this.selector||"**",c),this)},a.event.trigger=function(a,b,c,e){return c||J.test(a)||d("Global events are undocumented and deprecated"),D.call(this,a,b,c||document,e)},a.each(I.split("|"),function(b,c){a.event.special[c]={setup:function(){var b=this;return b!==document&&(a.event.add(document,c+"."+a.guid,function(){a.event.trigger(c,Array.prototype.slice.call(arguments,1),b,!0)}),a._data(this,c,a.guid++)),!1},teardown:function(){return this!==document&&a.event.remove(document,c+"."+a._data(this,c)),!1}}}),a.event.special.ready={setup:function(){this===document&&d("\'ready\' event is deprecated")}};var M=a.fn.andSelf||a.fn.addBack,N=a.fn.find;if(a.fn.andSelf=function(){return d("jQuery.fn.andSelf() replaced by jQuery.fn.addBack()"),M.apply(this,arguments)},a.fn.find=function(a){var b=N.apply(this,arguments);return b.context=this.context,b.selector=this.selector?this.selector+" "+a:a,b},a.Callbacks){var O=a.Deferred,P=[["resolve","done",a.Callbacks("once memory"),a.Callbacks("once memory"),"resolved"],["reject","fail",a.Callbacks("once memory"),a.Callbacks("once memory"),"rejected"],["notify","progress",a.Callbacks("memory"),a.Callbacks("memory")]];a.Deferred=function(b){var c=O(),e=c.promise();return c.pipe=e.pipe=function(){var b=arguments;return d("deferred.pipe() is deprecated"),a.Deferred(function(d){a.each(P,function(f,g){var h=a.isFunction(b[f])&&b[f];c[g[1]](function(){var b=h&&h.apply(this,arguments);b&&a.isFunction(b.promise)?b.promise().done(d.resolve).fail(d.reject).progress(d.notify):d[g[0]+"With"](this===e?d.promise():this,h?[b]:arguments)})}),b=null}).promise()},c.isResolved=function(){return d("deferred.isResolved is deprecated"),"resolved"===c.state()},c.isRejected=function(){return d("deferred.isRejected is deprecated"),"rejected"===c.state()},b&&b.call(c,c),c}}}(jQuery,window);',
          },
          redirectURL: "",
          headersSize: -1,
          bodySize: 0,
          _transferSize: 0,
          _error: null,
        },
        serverIPAddress: "[2a00:1ed0:2:0:1:5bef:c83b:1]",
        startedDateTime: "2020-09-03T03:33:54.909Z",
        time: 0.06399999983841553,
        timings: {
          blocked: -1,
          dns: -1,
          ssl: -1,
          connect: -1,
          send: 0,
          wait: 0.06099999973230297,
          receive: 0.003000000106112566,
          _blocked_queueing: -1,
        },
      },
      {
        _fromCache: "memory",
        _initiator: {
          type: "parser",
          url: "http://www.softwareishard.com/blog/har-12-spec/",
          lineNumber: 170,
        },
        _priority: "Low",
        _resourceType: "image",
        cache: {},
        connection: "2598",
        pageref: "page_1",
        request: {
          method: "GET",
          url:
            "http://www.softwareishard.com/blog/wp-content/themes/miniBits/miniBits/img/rss.gif",
          httpVersion: "http/1.1",
          headers: [
            {
              name: "Referer",
              value: "http://www.softwareishard.com/blog/har-12-spec/",
            },
            {
              name: "User-Agent",
              value:
                "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/85.0.4183.83 Safari/537.36",
            },
            {
              name: "DNT",
              value: "1",
            },
          ],
          queryString: [],
          cookies: [],
          headersSize: -1,
          bodySize: 0,
        },
        response: {
          status: 200,
          statusText: "OK",
          httpVersion: "http/1.1",
          headers: [
            {
              name: "Date",
              value: "Thu, 03 Sep 2020 02:07:55 GMT",
            },
            {
              name: "Last-Modified",
              value: "Sat, 26 Jun 2010 23:00:00 GMT",
            },
            {
              name: "Server",
              value: "Apache/2.4.10 (Debian)",
            },
            {
              name: "ETag",
              value: '"26b-489f6d8da7c00"',
            },
            {
              name: "Vary",
              value: "User-Agent",
            },
            {
              name: "Content-Type",
              value: "image/gif",
            },
            {
              name: "Cache-Control",
              value: "max-age=1209600",
            },
            {
              name: "Connection",
              value: "Keep-Alive",
            },
            {
              name: "Accept-Ranges",
              value: "bytes",
            },
            {
              name: "Keep-Alive",
              value: "timeout=5, max=98",
            },
            {
              name: "Content-Length",
              value: "619",
            },
            {
              name: "Expires",
              value: "Thu, 17 Sep 2020 02:07:55 GMT",
            },
          ],
          cookies: [],
          content: {
            size: 619,
            mimeType: "image/gif",
            text:
              "R0lGODlhDgAOAOYAAP+zYv/Cdf+SRf/pzf+aNv/Kmv/Dgf+7Xf9vEP+jXf+iUf+eTv+sav/+/f+VRv/iwf+NQP/btf/Vr/9xE/+5af+2Zf9qDf+mYf+lVf+bTf/q1v+RQ//exP/Djv+vXv+NQv9tD/9eAP+fWf/kw//Qo/+YSf/Fb/+oZP+7a/+KPv/69P94Gf/Tnf+PQf/EfP+JJ//t4f+nVv9+Fv+/cP+1ef+gWv93If/dr//PpP/nyP/l0v+9iP+8YP+dV/+ydf+uXf+9hP/DjP/Ic//Vtv/16f+NYv/itf+8bv/Rl//Zn//FeP/lxv+UMf+cOv+AIP+LKv+wZv+sW//fsf/Ys/+SXv/Cf/+klf9rCP+zUP+AZv+lRP/oyv+9jf+rXP+QLv/BYv/38P/Dav/Iff/LoP+VTP+hYP/nzf+0Vv/pz//k0f+uTP/n0//9+//Cc//AZf/AZv/DZf/UrP/Sof+wdP+zdv+tXP+7g//duP+6hP+5bv/u1v+bSv/He/9zFf++Y////yH5BAAAAAAALAAAAAAOAA4AAAfIgCpGcEImJmFvfjwHWC5/SVJ6emgDAyMjDw8RVRRfAzdIYkoBbTNHFAZxBG5bfA1EOSwoFBUAADgEB0sBf70Nd3keUV0FXmcRKAZyZr1TUBgYHS9qErU/dSRgfxILC3ZOWiQ/GhpBCmN/DXgldCtNBTG9azsZHH9DAgx9TB0KNPY6HHD5AwPCBQRPgOwpMedPmg1l/rBJ0cOCDB8ZHAjYsKEFBAgpPpAJQYXBiRMXEiSoIaLlBxtZ/hS5MmECAgQgQFiwEMLKn0AAOw==",
            encoding: "base64",
          },
          redirectURL: "",
          headersSize: -1,
          bodySize: 0,
          _transferSize: 0,
          _error: null,
        },
        serverIPAddress: "[2a00:1ed0:2:0:1:5bef:c83b:1]",
        startedDateTime: "2020-09-03T03:33:54.909Z",
        time: 0.039000000469968654,
        timings: {
          blocked: -1,
          dns: -1,
          ssl: -1,
          connect: -1,
          send: 0,
          wait: 0.03699999979289714,
          receive: 0.0020000006770715117,
          _blocked_queueing: -1,
        },
      },
      {
        _fromCache: "memory",
        _initiator: {
          type: "parser",
          url: "http://www.softwareishard.com/blog/har-12-spec/",
        },
        _priority: "VeryHigh",
        _resourceType: "stylesheet",
        cache: {},
        connection: "2598",
        pageref: "page_1",
        request: {
          method: "GET",
          url:
            "http://www.softwareishard.com/blog/wp-content/themes/miniBits/miniBits/style.css",
          httpVersion: "http/1.1",
          headers: [
            {
              name: "Referer",
              value: "http://www.softwareishard.com/blog/har-12-spec/",
            },
            {
              name: "User-Agent",
              value:
                "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/85.0.4183.83 Safari/537.36",
            },
            {
              name: "DNT",
              value: "1",
            },
          ],
          queryString: [],
          cookies: [],
          headersSize: -1,
          bodySize: 0,
        },
        response: {
          status: 200,
          statusText: "OK",
          httpVersion: "http/1.1",
          headers: [
            {
              name: "Date",
              value: "Thu, 03 Sep 2020 02:07:54 GMT",
            },
            {
              name: "Content-Encoding",
              value: "gzip",
            },
            {
              name: "Last-Modified",
              value: "Wed, 08 Aug 2012 23:00:00 GMT",
            },
            {
              name: "Server",
              value: "Apache/2.4.10 (Debian)",
            },
            {
              name: "ETag",
              value: '"2415-4c6c91206bc00-gzip"',
            },
            {
              name: "Vary",
              value: "User-Agent,Accept-Encoding",
            },
            {
              name: "Content-Type",
              value: "text/css",
            },
            {
              name: "Cache-Control",
              value: "max-age=604800",
            },
            {
              name: "Connection",
              value: "Keep-Alive",
            },
            {
              name: "Accept-Ranges",
              value: "bytes",
            },
            {
              name: "Keep-Alive",
              value: "timeout=5, max=99",
            },
            {
              name: "Content-Length",
              value: "2519",
            },
            {
              name: "Expires",
              value: "Thu, 10 Sep 2020 02:07:54 GMT",
            },
          ],
          cookies: [],
          content: {
            size: 9237,
            mimeType: "text/css",
            text:
              '/* \nTheme Name: miniBits \nTheme URI: http://www.creativebits.it/go/minibits \nVersion: 0.8 \nAuthor: Raffaele Rasini \nAuthor URI: http://creativebits.it/ \n*/ \n\n* { padding:0; margin:0; }\nbody { padding:0px; text-align: left; font-family: Verdana, Geneva, Arial, Helvetica, sans-serif; font-size: small; color: #222222; line-height: 150%; /*background: #4A525A ;*/ background-color: #fff; }\nhr { display: none; margin: 0; }\na { color: #6B8D20; text-decoration: underline; }\na:hover { background-color: #6B8D20; color: White; text-decoration: none; }\na img, .post a img, img { border: 0; text-decoration: none; border-color: white; }\nh1, h2, h3, h4, h5, h6 { font-family: Georgia, serif; }\nspan.highlight { background-color: #FFFFDB; }\n\n/* ---[ Elementi ]------------------------------- */\nblockquote { margin: 1em 0 1em 0; padding: 0; color: #777; background: White url(img/quote.gif) no-repeat top left; padding-top: 10px; padding-left: 35px; }\ncode { color: #6B8D20; font-family: Monaco, monospace; text-align: left; }\ncode strong { color: #4E6200; }\nabbr, acronym, .popup { font-style: normal; border-bottom: 1px dotted #999; cursor: help; }\nem { font-style: italic; }\nstrong { font-weight: bold; }\nstrike, del { text-decoration: line-through; }\nins { text-decoration: none; }\naddress { margin: 0; padding: 0; font-style: normal; }\n\n/* ---[ Container ]------------------------------- */ \n#wrapper { margin: 0 auto; text-align: left; width: 760px; background: #FFFFFF ; font-size: 0.9em; line-height: 1.6em; padding: 20px 10px 0 10px; /*border-right: 2px solid #424A51; border-left: 2px solid #424A51;*/ }\n#wrapper .container { float: left; width: 520px; }\n.clear { clear: both; }\n\n/* ---[ Header ]------------------------------- */ \n#header { padding: 30px 0 20px 0; text-align:center; }\n#header h1 { font-weight: lighter; font-size: 4em; margin-bottom: 10px; }\n#header h1 a { color: #4A525A; text-decoration: none; }\n#header h1 a:hover { color: #9D4134; background-color: transparent; }\n#header span.desc { color: #7B8691; text-transform: uppercase; font-size: 0.9em; }\n\n/* ---[ Pagine ]------------------------------- */ \n.post { margin-bottom: 25px; }\n.post .titolo { border-bottom: 1px solid #E1E1D3; padding-bottom: 3px; }\n* html .post .titolo { padding-bottom: 6px; }\n.post h2, .post h2 a { color: #DD467B; font-size: 22.8px; font-weight: lighter; display: inline; }\n.post h2 a { border: 0; text-decoration: none; }\n.post h2 a:hover { background-color: transparent; color: #6B8D20; }\n.post h3 { margin-bottom: 4px; padding-bottom: 3px; font-size: 1.2em; color: #278BD8; font-weight: bold; border-bottom: 1px solid #D8D3C1; }\n.post span.edit { float: right; margin-top: -20px; }\n.post span.edit a { border: 0; font-size: 0.9em; }\n.post small { color: #878787; font-size: 0.9em; padding-left: 1px; }\n* html .post small { padding-left: 5px; }\n\n.post div.corpo ul.more_info a { color: #D87431; }\n.post div.corpo ul.more_info a:hover { background-color: #D87431; color: White; }\n.post div.corpo ul.more_info { list-style-type: none; margin: 0; padding: 3px 8px 3px 8px; width: 145px; float: right; margin-bottom: 10px; margin-left: 10px; background-color: #F8F8F6; border: 1px solid #E2E2DA; }\n.post div.corpo ul.more_info li { padding-top: 5px; padding-bottom: 5px; border-top: 1px solid #E2E2DA; }\n.post div.corpo ul.more_info li.first { border: 0; }\n.post div.corpo ul.more_info span { display: block; }\n.post div.corpo { padding-top: 6px; }\n.post div.corpo a.more-link { color: #9D4134; }\n.post div.corpo a.more-link:hover { color: White; background-color: #9D4134; }\n.post div.corpo ul, .post div.corpo ol{ margin: 15px 0 15px 35px; }\n.post div.corpo p { margin-bottom: 10px; }\nimg.center, img[align="center"], img[align="middle"] { display: block; margin-left: auto; margin-right: auto; }\nimg.alignright, img[align="right"] { padding: 4px 0 0 0; margin: 0 0 5px 5px; display: inline; }\nimg.alignleft, img[align="left"] { padding: 4px 0 0 0; margin: 0 5px 5px 0; display: inline; }\n.post div.corpo h4 { font-size: 1.1em; margin-top: 10px; margin-bottom: 0; }\n\n/* ---[ Commenti ]------------------------------- */ \n#commenti { margin-top: 15px; }\n#commenti h4 { margin-bottom: 15px; font-size: 1.05em; color: #626C76; font-weight: bold; border-bottom: 1px solid #E1E1D3; }\n#commenti a.rss_commenti { border: 0; float: right; margin-top: 1px; }\n#commenti ol#commentlist { list-style-type: none; }\n#commenti ol#commentlist li { margin-bottom: 15px; }\n#commenti ol#commentlist li span { display: block; }\n#commenti ol#commentlist li div.messaggio { background: #F4FAE2; padding: 10px; }\n#commenti ol#commentlist li span.autore { padding: 5px 10px 5px 0; background: url(img/comment-from.gif) no-repeat 20px 0px; }\n#commenti ol#commentlist li span.autore a.count{ color: #999999; margin-right: 45px; font-weight: normal; }\n#commenti ol#commentlist li span.autore a.count:hover{ color: #666666; background-color: White; }\n\n/* Stile link per commentatore normale */ \n#commenti ol#commentlist li span.autore a { font-weight: bold; color: #96B236; border-color: #CFE7F7; }\n#commenti ol#commentlist li span.autore a:hover { background-color: White; }\n.nocomment { padding: 0 0 10px 0; margin: 0; }\n#commenti ol#commentlist li span.edit_comment { float: right; margin: -16px 0 0 0; }\n\n/* Modulo inserimento commenti */ \n#commenti .form_commenti { }\n#commenti .form_commenti form { color: #595750; padding: 0; margin-top: -4px; }\nform label { display: block; }\n\n/* link e maggiori info sui commenti */ \n#commenti .form_commenti .more_info { background-color: #FFF0F5; float: right; }\n#commenti .form_commenti form br { display: none; }\n\n/* ---[ Sidebar ]------------------- */ \n#sidebar { width: 220px; background-color: #F0F3F4; float: right; color: #727267; }\n#sidebar .main_sidebar { padding: 5px 10px 5px 10px; }\n#sidebar h3, #sidebar h2 { font-size: 1.2em; padding-bottom: 2px; color: #3C4848; border-bottom: 1px solid #CCD6D6; font-weight: lighter; margin-bottom: 4px; }\n#sidebar a { color: #4170BE; text-decoration: underline; }\n#sidebar a:hover { background-color: #4170BE; color: White; text-decoration: none; }\n#sidebar .top { background: url(img/sidebar_top.gif) no-repeat top center; height: 5px; }\n#sidebar .bottom { background: url(img/sidebar_bottom.gif) no-repeat bottom center; height: 5px; }\n#sidebar ul, #sidebar ol, #sidebar li { list-style-type: none; }\n#sidebar .block, #sidebar .linkcat { margin-bottom: 15px; }\n.cerca_modulo { width: 130px; }\n.cerca_invio { width: 60px; }\n\n/* ---[ Widget]------------- */ \n#wp-calendar { width: 180px; }\n\n/* ---[ Footer ]------------------------------- */ \n#footer { padding: 8px 0 8px 0; border-top: 1px solid #EEEEEE; margin: 0px; font-size: 0.9em; color: #999999; margin-top: 15px; }\n#footer img { float: left; margin-top: 5px; margin-bottom: -5px; margin-right: 5px; }\n#footer img a { border: 0; }\n#footer span{ display: block; margin-left: 60px; }\n#footer a { color: #333; border-color: #D8F18C; }\n#footer a:hover { background-color: White; color: #333; text-decoration: none; }\n\n\n/* ---- Honza ---- */\nh3 {\n    padding-top: 20px;\n}\n\n.post h2 a {\n    line-height: 1.2em;\n}\n\n#sidebar h3, #sidebar h2 {\n    padding-top: 20px;\n}\n\n#sidebar .block:first-child h3 {\n    padding-top: 0\n}\n\n.sihTable {\n    margin-bottom: 20px;\n}\n\n.sihTable TD {\n    padding-bottom: 15px;\n    padding-top: 15px;\n}\n\n.sihTableBorder {\n    border-top: solid 1px #D8D3C1;\n    border-left: solid 1px #D8D3C1;\n    width: 520px;\n}\n\n.sihTableBorder TD {\n    border-right: solid 1px #D8D3C1;\n    border-bottom: solid 1px #D8D3C1;\n    padding: 7px;\n}\n\n.sihImageBorder {\n    border: 4px solid #D1D1D1 !important;\n    padding: 0 !important;\n}\n \n.sihHeader {\n    font-size:16px;\n    font-family:Lucida Grande,Arial,sans-serif;\n    font-weight: bold;\n    color: #DD467B;\n    display: block;\n}\n\n#main_header { width: 100%; background-color: #F0F3F4; margin-bottom:40px; border:1px solid #E2E2DA;}\n/*#main_header .top { background: url(img/sidebar_top.gif) no-repeat top center; height: 5px; }\n#main_header .bottom { background: url(img/sidebar_bottom.gif) no-repeat bottom center; height: 5px; }*/\n\n.rss_posts {\n    float:right;\n    padding: 3px;\n}\n\n.bullet {\n    color: #278bd8;\n    text-align: center;\n}\n\n.bullet:after {\n    content: "\\2022";\n}\n\n.post div.corpo h4 {\n    font-size:16px;\n    font-family:Lucida Grande,Arial,sans-serif;\n    font-weight: bold;\n    color: #DD467B;\n    display: block;\n    margin-top: 20px;\n}\n\n.separator {\n    border-top: 1px solid rgb(209, 209, 209);\n    color: gray;\n    margin-top: 25px;\n    padding-bottom: 15px;\n    font-style: italic;\n}\n\n.sihHARViewerAdopter, .sihHARViewerSponsor {\n    font-size: 16px;\n    font-family: Lucida Grande,Arial,sans-serif;\n    font-weight: bold;\n    color: #dd467b;\n    padding-top: 20px;\n}\n\n.sihHARViewerSponsor {\n    display: block;\n    text-align: center;\n    padding-top: 0;\n    color: #278BD8;\n}\n\n.red {\n    color: #DD467B;\n}\n\n.firebugTipsLink {\n    background-color: #F8F8F6;\n    border: 1px solid #E2E2DA;\n    padding: 10px;\n    margin-top: 20px;\n    margin-bottom: 20px !important;\n    text-align: center;\n}\n\n/* ---[ Side Bar ]------------------------------- */\n\n#get_recent_comments_wrap li,\n#twitter_time_line li {\n    padding-bottom: 10px;\n}\n',
          },
          redirectURL: "",
          headersSize: -1,
          bodySize: 0,
          _transferSize: 0,
          _error: null,
        },
        serverIPAddress: "[2a00:1ed0:2:0:1:5bef:c83b:1]",
        startedDateTime: "2020-09-03T03:33:55.020Z",
        time: 0.07499999992433004,
        timings: {
          blocked: -1,
          dns: -1,
          ssl: -1,
          connect: -1,
          send: 0,
          wait: 0.06499999926745659,
          receive: 0.010000000656873453,
          _blocked_queueing: -1,
        },
      },
      {
        _fromCache: "memory",
        _initiator: {
          type: "parser",
          url: "http://www.softwareishard.com/blog/har-12-spec/",
          lineNumber: 771,
        },
        _priority: "Low",
        _resourceType: "image",
        cache: {},
        connection: "2596",
        pageref: "page_1",
        request: {
          method: "GET",
          url:
            "http://www.softwareishard.com/blog/wp-content/themes/miniBits/miniBits/img/wordpress.gif",
          httpVersion: "http/1.1",
          headers: [
            {
              name: "Referer",
              value: "http://www.softwareishard.com/blog/har-12-spec/",
            },
            {
              name: "User-Agent",
              value:
                "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/85.0.4183.83 Safari/537.36",
            },
            {
              name: "DNT",
              value: "1",
            },
          ],
          queryString: [],
          cookies: [],
          headersSize: -1,
          bodySize: 0,
        },
        response: {
          status: 200,
          statusText: "OK",
          httpVersion: "http/1.1",
          headers: [
            {
              name: "Date",
              value: "Thu, 03 Sep 2020 02:07:55 GMT",
            },
            {
              name: "Last-Modified",
              value: "Sat, 26 Jun 2010 23:00:00 GMT",
            },
            {
              name: "Server",
              value: "Apache/2.4.10 (Debian)",
            },
            {
              name: "ETag",
              value: '"208-489f6d8da7c00"',
            },
            {
              name: "Vary",
              value: "User-Agent",
            },
            {
              name: "Content-Type",
              value: "image/gif",
            },
            {
              name: "Cache-Control",
              value: "max-age=1209600",
            },
            {
              name: "Connection",
              value: "Keep-Alive",
            },
            {
              name: "Accept-Ranges",
              value: "bytes",
            },
            {
              name: "Keep-Alive",
              value: "timeout=5, max=98",
            },
            {
              name: "Content-Length",
              value: "520",
            },
            {
              name: "Expires",
              value: "Thu, 17 Sep 2020 02:07:55 GMT",
            },
          ],
          cookies: [],
          content: {
            size: 520,
            mimeType: "image/gif",
            text:
              "R0lGODlhGQAcAMQAAPLy8uvr6+/v79jY2M7Ozvb29uDg4Pz8/Obm5tHR0eLi4t7e3vj4+NTU1Nvb2/r6+sDAwMrKyuTk5Ojo6Nzc3NLS0tbW1vT09MbGxsTExMLCwszMzL6+vv7+/r29vf///yH5BAAAAAAALAAAAAAZABwAAAX/4CeO3WiaXXmu3yMoy2IEBWsDQ0NN/LQ0loBtdMgFAAhHo+FQAASWBoBkChAQgAbEw+16EoJARHA6BCDIrXftWVwiwtFjbGCzMUJAZioyzDwQGByBahoYXBMjAwkiDAQdBU8IEBkTAJcvHB4IIh0PBFMKBjUfAF4GIhJdEQelFAEDH1IRNR0RXRglAV4KHwUaAAkHUh6oHxReZAcEuAcPHrA4Ex4RIqZdFiIIXgUCxRQCC6oeU7ZdGyIFah4FAx4OEkzjDiILXQsMIglcaBkeFHUaePOAodVACAga1OOSYJeHCQMiSFEjxBwBezXUbXJHrgGDAQEacFH4wUGxDR56hX1gJsBfhCwfBBADlA8Awi3VSkaY9nABpw5gOP40YJLLlAIJPRAoQKBVzAgMUBIQceAQFwrpOGQo0NAEggSO2MX0kuuDga0DFqxQsLRJhwprhExoR3LFhA0I8hHQwA/OhwAYHg35eDGAgDCH2WIw4HRIqRwJEuQYYEBAY8coChxQgbkz5hAAOw==",
            encoding: "base64",
          },
          redirectURL: "",
          headersSize: -1,
          bodySize: 0,
          _transferSize: 0,
          _error: null,
        },
        serverIPAddress: "[2a00:1ed0:2:0:1:5bef:c83b:1]",
        startedDateTime: "2020-09-03T03:33:55.022Z",
        time: 0.07999999979801942,
        timings: {
          blocked: -1,
          dns: -1,
          ssl: -1,
          connect: -1,
          send: 0,
          wait: 0.0760000002628658,
          receive: 0.00399999953515362,
          _blocked_queueing: -1,
        },
      },
      {
        _fromCache: "memory",
        _initiator: {
          type: "parser",
          url: "http://www.softwareishard.com/blog/har-12-spec/",
          lineNumber: 772,
        },
        _priority: "Low",
        _resourceType: "image",
        cache: {},
        connection: "2620",
        pageref: "page_1",
        request: {
          method: "GET",
          url:
            "http://www.softwareishard.com/blog/wp-content/themes/miniBits/miniBits/img/creativebits.gif",
          httpVersion: "http/1.1",
          headers: [
            {
              name: "Referer",
              value: "http://www.softwareishard.com/blog/har-12-spec/",
            },
            {
              name: "User-Agent",
              value:
                "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/85.0.4183.83 Safari/537.36",
            },
            {
              name: "DNT",
              value: "1",
            },
          ],
          queryString: [],
          cookies: [],
          headersSize: -1,
          bodySize: 0,
        },
        response: {
          status: 200,
          statusText: "OK",
          httpVersion: "http/1.1",
          headers: [
            {
              name: "Date",
              value: "Thu, 03 Sep 2020 02:07:55 GMT",
            },
            {
              name: "Last-Modified",
              value: "Sat, 26 Jun 2010 23:00:00 GMT",
            },
            {
              name: "Server",
              value: "Apache/2.4.10 (Debian)",
            },
            {
              name: "ETag",
              value: '"155-489f6d8da7c00"',
            },
            {
              name: "Vary",
              value: "User-Agent",
            },
            {
              name: "Content-Type",
              value: "image/gif",
            },
            {
              name: "Cache-Control",
              value: "max-age=1209600",
            },
            {
              name: "Connection",
              value: "Keep-Alive",
            },
            {
              name: "Accept-Ranges",
              value: "bytes",
            },
            {
              name: "Keep-Alive",
              value: "timeout=5, max=100",
            },
            {
              name: "Content-Length",
              value: "341",
            },
            {
              name: "Expires",
              value: "Thu, 17 Sep 2020 02:07:55 GMT",
            },
          ],
          cookies: [],
          content: {
            size: 341,
            mimeType: "image/gif",
            text:
              "R0lGODlhGAAcAMQAAOLi4v39/fPz89TU1NbW1urq6t3d3fv7++7u7uDg4M/Pz/Hx8dvb2/j4+NPT0/X19c3NzdHR0f7+/tra2tjY2Ovr6+np6dfX187OztLS0uzs7O3t7fb29uTk5P///8zMzCH5BAAAAAAALAAAAAAYABwAAAXSoCeKD2IlBqESU9JVTzCKmzF8eK7vXzR1IgJvSAwEiMidQJBsfiqFJlBBBACkHupwwsBqeRmhjrAQdT5AoGfBi+gch+hHCGTDEbvvp9DYAQ04BQdJDXg6QA44CR5iQweGOVM4Bow6eo9+Hokfi40fGToIfYcegHuDOhdjHnKAdR93OhCmOQYPIlFpImw6A2dOSAwawEgAD8REGhIYyDwcHhTNshIeAgAUzMQDCRszIg0CBQAJKAQQOhTe6usNqjgM6/EzEr/w8vdrEfb48gcW3iEAADs=",
            encoding: "base64",
          },
          redirectURL: "",
          headersSize: -1,
          bodySize: 0,
          _transferSize: 0,
          _error: null,
        },
        serverIPAddress: "[2a00:1ed0:2:0:1:5bef:c83b:1]",
        startedDateTime: "2020-09-03T03:33:55.022Z",
        time: 0.06000000030326191,
        timings: {
          blocked: -1,
          dns: -1,
          ssl: -1,
          connect: -1,
          send: 0,
          wait: 0.05599999985861359,
          receive: 0.004000000444648322,
          _blocked_queueing: -1,
        },
      },
      {
        _fromCache: "disk",
        _initiator: {
          type: "script",
          stack: {
            callFrames: [
              {
                functionName: "e",
                scriptId: "68",
                url: "http://www.softwareishard.com/blog/har-12-spec/",
                lineNumber: 87,
                columnNumber: 817,
              },
              {
                functionName: "",
                scriptId: "68",
                url: "http://www.softwareishard.com/blog/har-12-spec/",
                lineNumber: 87,
                columnNumber: 1633,
              },
              {
                functionName: "",
                scriptId: "68",
                url: "http://www.softwareishard.com/blog/har-12-spec/",
                lineNumber: 87,
                columnNumber: 1701,
              },
            ],
          },
        },
        _priority: "Low",
        _resourceType: "script",
        cache: {},
        pageref: "page_1",
        request: {
          method: "GET",
          url:
            "http://www.softwareishard.com/blog/wp-includes/js/wp-emoji-release.min.js?ver=4.7.18",
          httpVersion: "HTTP/1.1",
          headers: [
            {
              name: "Referer",
              value: "http://www.softwareishard.com/blog/har-12-spec/",
            },
            {
              name: "User-Agent",
              value:
                "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/85.0.4183.83 Safari/537.36",
            },
            {
              name: "DNT",
              value: "1",
            },
          ],
          queryString: [
            {
              name: "ver",
              value: "4.7.18",
            },
          ],
          cookies: [],
          headersSize: 264,
          bodySize: 0,
        },
        response: {
          status: 200,
          statusText: "OK",
          httpVersion: "HTTP/1.1",
          headers: [
            {
              name: "Date",
              value: "Thu, 03 Sep 2020 02:07:55 GMT",
            },
            {
              name: "Server",
              value: "Apache/2.4.10 (Debian)",
            },
            {
              name: "Vary",
              value: "User-Agent,Accept-Encoding",
            },
            {
              name: "Last-Modified",
              value: "Sat, 19 Nov 2016 10:05:32 GMT",
            },
            {
              name: "ETag",
              value: '"2c96-541a4901fd300-gzip"',
            },
            {
              name: "Accept-Ranges",
              value: "bytes",
            },
            {
              name: "Content-Encoding",
              value: "gzip",
            },
            {
              name: "Cache-Control",
              value: "max-age=1209600",
            },
            {
              name: "Expires",
              value: "Thu, 17 Sep 2020 02:07:55 GMT",
            },
            {
              name: "Content-Length",
              value: "4230",
            },
            {
              name: "Content-Type",
              value: "application/javascript",
            },
          ],
          cookies: [],
          content: {
            size: 11414,
            mimeType: "application/javascript",
            text:
              '// Source: wp-includes/js/twemoji.min.js\nvar twemoji=function(){"use strict";function a(a){return document.createTextNode(a)}function b(a){return a.replace(u,h)}function c(a,b){return"".concat(b.base,b.size,"/",a,b.ext)}function d(a,b){for(var c,e,f=a.childNodes,g=f.length;g--;)c=f[g],e=c.nodeType,3===e?b.push(c):1!==e||v.test(c.nodeName)||d(c,b);return b}function e(a){return o(a.indexOf(t)<0?a.replace(s,""):a)}function f(b,c){for(var f,g,h,i,j,k,l,m,n,o,p,q,s,t=d(b,[]),u=t.length;u--;){for(h=!1,i=document.createDocumentFragment(),j=t[u],k=j.nodeValue,m=0;l=r.exec(k);){if(n=l.index,n!==m&&i.appendChild(a(k.slice(m,n))),p=l[0],q=e(p),m=n+p.length,s=c.callback(q,c)){o=new Image,o.onerror=c.onerror,o.setAttribute("draggable","false"),f=c.attributes(p,q);for(g in f)f.hasOwnProperty(g)&&0!==g.indexOf("on")&&!o.hasAttribute(g)&&o.setAttribute(g,f[g]);o.className=c.className,o.alt=p,o.src=s,h=!0,i.appendChild(o)}o||i.appendChild(a(p)),o=null}h&&(m<k.length&&i.appendChild(a(k.slice(m))),j.parentNode.replaceChild(i,j))}return b}function g(a,c){return m(a,function(a){var d,f,g=a,h=e(a),i=c.callback(h,c);if(i){g="<img ".concat(\'class="\',c.className,\'" \',\'draggable="false" \',\'alt="\',a,\'"\',\' src="\',i,\'"\'),d=c.attributes(a,h);for(f in d)d.hasOwnProperty(f)&&0!==f.indexOf("on")&&g.indexOf(" "+f+"=")===-1&&(g=g.concat(" ",f,\'="\',b(d[f]),\'"\'));g=g.concat(">")}return g})}function h(a){return q[a]}function i(){return null}function j(a){return"number"==typeof a?a+"x"+a:a}function k(a){var b="string"==typeof a?parseInt(a,16):a;return b<65536?w(b):(b-=65536,w(55296+(b>>10),56320+(1023&b)))}function l(a,b){return b&&"function"!=typeof b||(b={callback:b}),("string"==typeof a?g:f)(a,{callback:b.callback||c,attributes:"function"==typeof b.attributes?b.attributes:i,base:"string"==typeof b.base?b.base:p.base,ext:b.ext||p.ext,size:b.folder||j(b.size||p.size),className:b.className||p.className,onerror:b.onerror||p.onerror})}function m(a,b){return String(a).replace(r,b)}function n(a){r.lastIndex=0;var b=r.test(a);return r.lastIndex=0,b}function o(a,b){for(var c=[],d=0,e=0,f=0;f<a.length;)d=a.charCodeAt(f++),e?(c.push((65536+(e-55296<<10)+(d-56320)).toString(16)),e=0):55296<=d&&d<=56319?e=d:c.push(d.toString(16));return c.join(b||"-")}var p={base:"https://twemoji.maxcdn.com/2/",ext:".png",size:"72x72",className:"emoji",convert:{fromCodePoint:k,toCodePoint:o},onerror:function(){this.parentNode&&this.parentNode.replaceChild(a(this.alt),this)},parse:l,replace:m,test:n},q={"&":"&amp;","<":"&lt;",">":"&gt;","\'":"&#39;",\'"\':"&quot;"},r=/\\ud83d[\\udc68-\\udc69](?:\\ud83c[\\udffb-\\udfff])?\\u200d(?:\\u2695\\ufe0f|\\u2696\\ufe0f|\\u2708\\ufe0f|\\ud83c[\\udf3e\\udf73\\udf93\\udfa4\\udfa8\\udfeb\\udfed]|\\ud83d[\\udcbb\\udcbc\\udd27\\udd2c\\ude80\\ude92])|(?:\\ud83c[\\udfcb\\udfcc]|\\ud83d\\udd75|\\u26f9)(?:\\ufe0f|\\ud83c[\\udffb-\\udfff])\\u200d[\\u2640\\u2642]\\ufe0f|(?:\\ud83c[\\udfc3\\udfc4\\udfca]|\\ud83d[\\udc6e\\udc71\\udc73\\udc77\\udc81\\udc82\\udc86\\udc87\\ude45-\\ude47\\ude4b\\ude4d\\ude4e\\udea3\\udeb4-\\udeb6]|\\ud83e[\\udd26\\udd37-\\udd39\\udd3d\\udd3e])(?:\\ud83c[\\udffb-\\udfff])?\\u200d[\\u2640\\u2642]\\ufe0f|\\ud83d\\udc68\\u200d\\u2764\\ufe0f\\u200d\\ud83d\\udc8b\\u200d\\ud83d\\udc68|\\ud83d\\udc68\\u200d\\ud83d\\udc68\\u200d\\ud83d\\udc66\\u200d\\ud83d\\udc66|\\ud83d\\udc68\\u200d\\ud83d\\udc68\\u200d\\ud83d\\udc67\\u200d\\ud83d[\\udc66\\udc67]|\\ud83d\\udc68\\u200d\\ud83d\\udc69\\u200d\\ud83d\\udc66\\u200d\\ud83d\\udc66|\\ud83d\\udc68\\u200d\\ud83d\\udc69\\u200d\\ud83d\\udc67\\u200d\\ud83d[\\udc66\\udc67]|\\ud83d\\udc69\\u200d\\u2764\\ufe0f\\u200d\\ud83d\\udc8b\\u200d\\ud83d[\\udc68\\udc69]|\\ud83d\\udc69\\u200d\\ud83d\\udc69\\u200d\\ud83d\\udc66\\u200d\\ud83d\\udc66|\\ud83d\\udc69\\u200d\\ud83d\\udc69\\u200d\\ud83d\\udc67\\u200d\\ud83d[\\udc66\\udc67]|\\ud83d\\udc68\\u200d\\u2764\\ufe0f\\u200d\\ud83d\\udc68|\\ud83d\\udc68\\u200d\\ud83d\\udc66\\u200d\\ud83d\\udc66|\\ud83d\\udc68\\u200d\\ud83d\\udc67\\u200d\\ud83d[\\udc66\\udc67]|\\ud83d\\udc68\\u200d\\ud83d\\udc68\\u200d\\ud83d[\\udc66\\udc67]|\\ud83d\\udc68\\u200d\\ud83d\\udc69\\u200d\\ud83d[\\udc66\\udc67]|\\ud83d\\udc69\\u200d\\u2764\\ufe0f\\u200d\\ud83d[\\udc68\\udc69]|\\ud83d\\udc69\\u200d\\ud83d\\udc66\\u200d\\ud83d\\udc66|\\ud83d\\udc69\\u200d\\ud83d\\udc67\\u200d\\ud83d[\\udc66\\udc67]|\\ud83d\\udc69\\u200d\\ud83d\\udc69\\u200d\\ud83d[\\udc66\\udc67]|\\ud83c\\udff3\\ufe0f\\u200d\\ud83c\\udf08|\\ud83c\\udff4\\u200d\\u2620\\ufe0f|\\ud83d\\udc41\\u200d\\ud83d\\udde8|\\ud83d\\udc68\\u200d\\ud83d[\\udc66\\udc67]|\\ud83d\\udc69\\u200d\\ud83d[\\udc66\\udc67]|\\ud83d\\udc6f\\u200d\\u2640\\ufe0f|\\ud83d\\udc6f\\u200d\\u2642\\ufe0f|\\ud83e\\udd3c\\u200d\\u2640\\ufe0f|\\ud83e\\udd3c\\u200d\\u2642\\ufe0f|(?:[\\u0023\\u002a\\u0030-\\u0039])\\ufe0f?\\u20e3|(?:(?:\\ud83c[\\udfcb\\udfcc]|\\ud83d[\\udd74\\udd75\\udd90]|[\\u261d\\u26f7\\u26f9\\u270c\\u270d])(?:\\ufe0f|(?!\\ufe0e))|\\ud83c[\\udf85\\udfc2-\\udfc4\\udfc7\\udfca]|\\ud83d[\\udc42\\udc43\\udc46-\\udc50\\udc66-\\udc69\\udc6e\\udc70-\\udc78\\udc7c\\udc81-\\udc83\\udc85-\\udc87\\udcaa\\udd7a\\udd95\\udd96\\ude45-\\ude47\\ude4b-\\ude4f\\udea3\\udeb4-\\udeb6\\udec0\\udecc]|\\ud83e[\\udd18-\\udd1c\\udd1e\\udd26\\udd30\\udd33-\\udd39\\udd3d\\udd3e]|[\\u270a\\u270b])(?:\\ud83c[\\udffb-\\udfff]|)|\\ud83c\\udde6\\ud83c[\\udde8-\\uddec\\uddee\\uddf1\\uddf2\\uddf4\\uddf6-\\uddfa\\uddfc\\uddfd\\uddff]|\\ud83c\\udde7\\ud83c[\\udde6\\udde7\\udde9-\\uddef\\uddf1-\\uddf4\\uddf6-\\uddf9\\uddfb\\uddfc\\uddfe\\uddff]|\\ud83c\\udde8\\ud83c[\\udde6\\udde8\\udde9\\uddeb-\\uddee\\uddf0-\\uddf5\\uddf7\\uddfa-\\uddff]|\\ud83c\\udde9\\ud83c[\\uddea\\uddec\\uddef\\uddf0\\uddf2\\uddf4\\uddff]|\\ud83c\\uddea\\ud83c[\\udde6\\udde8\\uddea\\uddec\\udded\\uddf7-\\uddfa]|\\ud83c\\uddeb\\ud83c[\\uddee-\\uddf0\\uddf2\\uddf4\\uddf7]|\\ud83c\\uddec\\ud83c[\\udde6\\udde7\\udde9-\\uddee\\uddf1-\\uddf3\\uddf5-\\uddfa\\uddfc\\uddfe]|\\ud83c\\udded\\ud83c[\\uddf0\\uddf2\\uddf3\\uddf7\\uddf9\\uddfa]|\\ud83c\\uddee\\ud83c[\\udde8-\\uddea\\uddf1-\\uddf4\\uddf6-\\uddf9]|\\ud83c\\uddef\\ud83c[\\uddea\\uddf2\\uddf4\\uddf5]|\\ud83c\\uddf0\\ud83c[\\uddea\\uddec-\\uddee\\uddf2\\uddf3\\uddf5\\uddf7\\uddfc\\uddfe\\uddff]|\\ud83c\\uddf1\\ud83c[\\udde6-\\udde8\\uddee\\uddf0\\uddf7-\\uddfb\\uddfe]|\\ud83c\\uddf2\\ud83c[\\udde6\\udde8-\\udded\\uddf0-\\uddff]|\\ud83c\\uddf3\\ud83c[\\udde6\\udde8\\uddea-\\uddec\\uddee\\uddf1\\uddf4\\uddf5\\uddf7\\uddfa\\uddff]|\\ud83c\\uddf4\\ud83c\\uddf2|\\ud83c\\uddf5\\ud83c[\\udde6\\uddea-\\udded\\uddf0-\\uddf3\\uddf7-\\uddf9\\uddfc\\uddfe]|\\ud83c\\uddf6\\ud83c\\udde6|\\ud83c\\uddf7\\ud83c[\\uddea\\uddf4\\uddf8\\uddfa\\uddfc]|\\ud83c\\uddf8\\ud83c[\\udde6-\\uddea\\uddec-\\uddf4\\uddf7-\\uddf9\\uddfb\\uddfd-\\uddff]|\\ud83c\\uddf9\\ud83c[\\udde6\\udde8\\udde9\\uddeb-\\udded\\uddef-\\uddf4\\uddf7\\uddf9\\uddfb\\uddfc\\uddff]|\\ud83c\\uddfa\\ud83c[\\udde6\\uddec\\uddf2\\uddf3\\uddf8\\uddfe\\uddff]|\\ud83c\\uddfb\\ud83c[\\udde6\\udde8\\uddea\\uddec\\uddee\\uddf3\\uddfa]|\\ud83c\\uddfc\\ud83c[\\uddeb\\uddf8]|\\ud83c\\uddfd\\ud83c\\uddf0|\\ud83c\\uddfe\\ud83c[\\uddea\\uddf9]|\\ud83c\\uddff\\ud83c[\\udde6\\uddf2\\uddfc]|\\ud800\\udc00|\\ud83c[\\udccf\\udd8e\\udd91-\\udd9a\\udde6-\\uddff\\ude01\\ude32-\\ude36\\ude38-\\ude3a\\ude50\\ude51\\udf00-\\udf20\\udf2d-\\udf35\\udf37-\\udf7c\\udf7e-\\udf84\\udf86-\\udf93\\udfa0-\\udfc1\\udfc5\\udfc6\\udfc8\\udfc9\\udfcf-\\udfd3\\udfe0-\\udff0\\udff4\\udff8-\\udfff]|\\ud83d[\\udc00-\\udc3e\\udc40\\udc44\\udc45\\udc51-\\udc65\\udc6a-\\udc6d\\udc6f\\udc79-\\udc7b\\udc7d-\\udc80\\udc84\\udc88-\\udca9\\udcab-\\udcfc\\udcff-\\udd3d\\udd4b-\\udd4e\\udd50-\\udd67\\udda4\\uddfb-\\ude44\\ude48-\\ude4a\\ude80-\\udea2\\udea4-\\udeb3\\udeb7-\\udebf\\udec1-\\udec5\\uded0-\\uded2\\udeeb\\udeec\\udef4-\\udef6]|\\ud83e[\\udd10-\\udd17\\udd1d\\udd20-\\udd25\\udd27\\udd3a\\udd3c\\udd40-\\udd45\\udd47-\\udd4b\\udd50-\\udd5e\\udd80-\\udd91\\uddc0]|[\\u23e9-\\u23ec\\u23f0\\u23f3\\u2640\\u2642\\u2695\\u26ce\\u2705\\u2728\\u274c\\u274e\\u2753-\\u2755\\u2795-\\u2797\\u27b0\\u27bf\\ue50a]|(?:\\ud83c[\\udc04\\udd70\\udd71\\udd7e\\udd7f\\ude02\\ude1a\\ude2f\\ude37\\udf21\\udf24-\\udf2c\\udf36\\udf7d\\udf96\\udf97\\udf99-\\udf9b\\udf9e\\udf9f\\udfcd\\udfce\\udfd4-\\udfdf\\udff3\\udff5\\udff7]|\\ud83d[\\udc3f\\udc41\\udcfd\\udd49\\udd4a\\udd6f\\udd70\\udd73\\udd76-\\udd79\\udd87\\udd8a-\\udd8d\\udda5\\udda8\\uddb1\\uddb2\\uddbc\\uddc2-\\uddc4\\uddd1-\\uddd3\\udddc-\\uddde\\udde1\\udde3\\udde8\\uddef\\uddf3\\uddfa\\udecb\\udecd-\\udecf\\udee0-\\udee5\\udee9\\udef0\\udef3]|[\\u00a9\\u00ae\\u203c\\u2049\\u2122\\u2139\\u2194-\\u2199\\u21a9\\u21aa\\u231a\\u231b\\u2328\\u23cf\\u23ed-\\u23ef\\u23f1\\u23f2\\u23f8-\\u23fa\\u24c2\\u25aa\\u25ab\\u25b6\\u25c0\\u25fb-\\u25fe\\u2600-\\u2604\\u260e\\u2611\\u2614\\u2615\\u2618\\u2620\\u2622\\u2623\\u2626\\u262a\\u262e\\u262f\\u2638-\\u263a\\u2648-\\u2653\\u2660\\u2663\\u2665\\u2666\\u2668\\u267b\\u267f\\u2692-\\u2694\\u2696\\u2697\\u2699\\u269b\\u269c\\u26a0\\u26a1\\u26aa\\u26ab\\u26b0\\u26b1\\u26bd\\u26be\\u26c4\\u26c5\\u26c8\\u26cf\\u26d1\\u26d3\\u26d4\\u26e9\\u26ea\\u26f0-\\u26f5\\u26f8\\u26fa\\u26fd\\u2702\\u2708\\u2709\\u270f\\u2712\\u2714\\u2716\\u271d\\u2721\\u2733\\u2734\\u2744\\u2747\\u2757\\u2763\\u2764\\u27a1\\u2934\\u2935\\u2b05-\\u2b07\\u2b1b\\u2b1c\\u2b50\\u2b55\\u3030\\u303d\\u3297\\u3299])(?:\\ufe0f|(?!\\ufe0e))/g,s=/\\uFE0F/g,t=String.fromCharCode(8205),u=/[&<>\'"]/g,v=/IFRAME|NOFRAMES|NOSCRIPT|SCRIPT|SELECT|STYLE|TEXTAREA|[a-z]/,w=String.fromCharCode;return p}();\n// Source: wp-includes/js/wp-emoji.min.js\n!function(a,b){function c(){function c(){return!j.implementation.hasFeature||j.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#Image","1.1")}function d(){if(!k){if("undefined"==typeof a.twemoji){if(l>600)return;return a.clearTimeout(h),h=a.setTimeout(d,50),void l++}g=a.twemoji,k=!0,i&&new i(function(a){for(var b,c,d,g,h=a.length;h--;){if(b=a[h].addedNodes,c=a[h].removedNodes,d=b.length,1===d&&1===c.length&&3===b[0].nodeType&&"IMG"===c[0].nodeName&&b[0].data===c[0].alt&&"load-failed"===c[0].getAttribute("data-error"))return;for(;d--;){if(g=b[d],3===g.nodeType){if(!g.parentNode)continue;if(m)for(;g.nextSibling&&3===g.nextSibling.nodeType;)g.nodeValue=g.nodeValue+g.nextSibling.nodeValue,g.parentNode.removeChild(g.nextSibling);g=g.parentNode}!g||1!==g.nodeType||g.className&&"string"==typeof g.className&&g.className.indexOf("wp-exclude-emoji")!==-1||e(g.textContent)&&f(g)}}}).observe(j.body,{childList:!0,subtree:!0}),f(j.body)}}function e(a){var b=/[\\u203C\\u2049\\u20E3\\u2122\\u2139\\u2194-\\u2199\\u21A9\\u21AA\\u2300\\u231A\\u231B\\u2328\\u2388\\u23CF\\u23E9-\\u23F3\\u23F8-\\u23FA\\u24C2\\u25AA\\u25AB\\u25B6\\u25C0\\u25FB-\\u25FE\\u2600-\\u2604\\u260E\\u2611\\u2614\\u2615\\u2618\\u261D\\u2620\\u2622\\u2623\\u2626\\u262A\\u262E\\u262F\\u2638\\u2639\\u263A\\u2648-\\u2653\\u2660\\u2663\\u2665\\u2666\\u2668\\u267B\\u267F\\u2692\\u2693\\u2694\\u2696\\u2697\\u2699\\u269B\\u269C\\u26A0\\u26A1\\u26AA\\u26AB\\u26B0\\u26B1\\u26BD\\u26BE\\u26C4\\u26C5\\u26C8\\u26CE\\u26CF\\u26D1\\u26D3\\u26D4\\u26E9\\u26EA\\u26F0-\\u26F5\\u26F7-\\u26FA\\u26FD\\u2702\\u2705\\u2708-\\u270D\\u270F\\u2712\\u2714\\u2716\\u271D\\u2721\\u2728\\u2733\\u2734\\u2744\\u2747\\u274C\\u274E\\u2753\\u2754\\u2755\\u2757\\u2763\\u2764\\u2795\\u2796\\u2797\\u27A1\\u27B0\\u27BF\\u2934\\u2935\\u2B05\\u2B06\\u2B07\\u2B1B\\u2B1C\\u2B50\\u2B55\\u3030\\u303D\\u3297\\u3299]/,c=/[\\uDC00-\\uDFFF]/;return!!a&&(c.test(a)||b.test(a))}function f(a,d){var e;return!b.supports.everything&&g&&a&&("string"==typeof a||a.childNodes&&a.childNodes.length)?(d=d||{},e={base:c()?b.svgUrl:b.baseUrl,ext:c()?b.svgExt:b.ext,className:d.className||"emoji",callback:function(a,c){switch(a){case"a9":case"ae":case"2122":case"2194":case"2660":case"2663":case"2665":case"2666":return!1}return!(b.supports.everythingExceptFlag&&!/^1f1(?:e[6-9a-f]|f[0-9a-f])-1f1(?:e[6-9a-f]|f[0-9a-f])$/.test(a)&&!/^(1f3f3-fe0f-200d-1f308|1f3f4-200d-2620-fe0f)$/.test(a))&&"".concat(c.base,a,c.ext)},onerror:function(){g.parentNode&&(this.setAttribute("data-error","load-failed"),g.parentNode.replaceChild(j.createTextNode(g.alt),g))}},"object"==typeof d.imgAttr&&(e.attributes=function(){return d.imgAttr}),g.parse(a,e)):a}var g,h,i=a.MutationObserver||a.WebKitMutationObserver||a.MozMutationObserver,j=a.document,k=!1,l=0,m=a.navigator.userAgent.indexOf("Trident/7.0")>0;return b&&(b.DOMReady?d():b.readyCallback=d),{parse:f,test:e}}a.wp=a.wp||{},a.wp.emoji=new c}(window,window._wpemojiSettings);',
          },
          redirectURL: "",
          headersSize: 379,
          bodySize: 0,
          _transferSize: 0,
          _error: null,
        },
        serverIPAddress: "[2a00:1ed0:2:0:1:5bef:c83b:1]",
        startedDateTime: "2020-09-03T03:33:55.038Z",
        time: 4.186000000117929,
        timings: {
          blocked: 3.4480000000812,
          dns: -1,
          ssl: -1,
          connect: -1,
          send: 0,
          wait: 0.3600000003089663,
          receive: 0.37799999972776277,
          _blocked_queueing: 3.3450000000811997,
        },
      },
      {
        _fromCache: "memory",
        _initiator: {
          type: "parser",
          url:
            "http://www.softwareishard.com/blog/wp-content/themes/miniBits/miniBits/style.css",
        },
        _priority: "Low",
        _resourceType: "image",
        cache: {},
        connection: "2616",
        pageref: "page_1",
        request: {
          method: "GET",
          url:
            "http://www.softwareishard.com/blog/wp-content/themes/miniBits/miniBits/img/sidebar_top.gif",
          httpVersion: "http/1.1",
          headers: [
            {
              name: "Referer",
              value:
                "http://www.softwareishard.com/blog/wp-content/themes/miniBits/miniBits/style.css",
            },
            {
              name: "User-Agent",
              value:
                "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/85.0.4183.83 Safari/537.36",
            },
            {
              name: "DNT",
              value: "1",
            },
          ],
          queryString: [],
          cookies: [],
          headersSize: -1,
          bodySize: 0,
        },
        response: {
          status: 200,
          statusText: "OK",
          httpVersion: "http/1.1",
          headers: [
            {
              name: "Date",
              value: "Thu, 03 Sep 2020 02:07:55 GMT",
            },
            {
              name: "Last-Modified",
              value: "Sat, 26 Jun 2010 23:00:00 GMT",
            },
            {
              name: "Server",
              value: "Apache/2.4.10 (Debian)",
            },
            {
              name: "ETag",
              value: '"6d-489f6d8da7c00"',
            },
            {
              name: "Vary",
              value: "User-Agent",
            },
            {
              name: "Content-Type",
              value: "image/gif",
            },
            {
              name: "Cache-Control",
              value: "max-age=1209600",
            },
            {
              name: "Connection",
              value: "Keep-Alive",
            },
            {
              name: "Accept-Ranges",
              value: "bytes",
            },
            {
              name: "Keep-Alive",
              value: "timeout=5, max=98",
            },
            {
              name: "Content-Length",
              value: "109",
            },
            {
              name: "Expires",
              value: "Thu, 17 Sep 2020 02:07:55 GMT",
            },
          ],
          cookies: [],
          content: {
            size: 109,
            mimeType: "image/gif",
            text:
              "R0lGODlh3AAFAKIAAP////v8/PH09fX39/j5+vL09fT29/Dz9CH5BAAAAAAALAAAAADcAAUAAAMyCBBT9zDKSau9OOvNu/9gWAyBAhBhqq5s674wscB0bd94fgSG7v/AIM4gEBqPyGRFkAAAOw==",
            encoding: "base64",
          },
          redirectURL: "",
          headersSize: -1,
          bodySize: 0,
          _transferSize: 0,
          _error: null,
        },
        serverIPAddress: "[2a00:1ed0:2:0:1:5bef:c83b:1]",
        startedDateTime: "2020-09-03T03:33:55.066Z",
        time: 0.08299999990413198,
        timings: {
          blocked: -1,
          dns: -1,
          ssl: -1,
          connect: -1,
          send: 0,
          wait: 0.08100000013655517,
          receive: 0.00199999976757681,
          _blocked_queueing: -1,
        },
      },
      {
        _fromCache: "memory",
        _initiator: {
          type: "parser",
          url:
            "http://www.softwareishard.com/blog/wp-content/themes/miniBits/miniBits/style.css",
        },
        _priority: "Low",
        _resourceType: "image",
        cache: {},
        connection: "2610",
        pageref: "page_1",
        request: {
          method: "GET",
          url:
            "http://www.softwareishard.com/blog/wp-content/themes/miniBits/miniBits/img/sidebar_bottom.gif",
          httpVersion: "http/1.1",
          headers: [
            {
              name: "Referer",
              value:
                "http://www.softwareishard.com/blog/wp-content/themes/miniBits/miniBits/style.css",
            },
            {
              name: "User-Agent",
              value:
                "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/85.0.4183.83 Safari/537.36",
            },
            {
              name: "DNT",
              value: "1",
            },
          ],
          queryString: [],
          cookies: [],
          headersSize: -1,
          bodySize: 0,
        },
        response: {
          status: 200,
          statusText: "OK",
          httpVersion: "http/1.1",
          headers: [
            {
              name: "Date",
              value: "Thu, 03 Sep 2020 02:07:55 GMT",
            },
            {
              name: "Last-Modified",
              value: "Sat, 26 Jun 2010 23:00:00 GMT",
            },
            {
              name: "Server",
              value: "Apache/2.4.10 (Debian)",
            },
            {
              name: "ETag",
              value: '"71-489f6d8da7c00"',
            },
            {
              name: "Vary",
              value: "User-Agent",
            },
            {
              name: "Content-Type",
              value: "image/gif",
            },
            {
              name: "Cache-Control",
              value: "max-age=1209600",
            },
            {
              name: "Connection",
              value: "Keep-Alive",
            },
            {
              name: "Accept-Ranges",
              value: "bytes",
            },
            {
              name: "Keep-Alive",
              value: "timeout=5, max=98",
            },
            {
              name: "Content-Length",
              value: "113",
            },
            {
              name: "Expires",
              value: "Thu, 17 Sep 2020 02:07:55 GMT",
            },
          ],
          cookies: [],
          content: {
            size: 113,
            mimeType: "image/gif",
            text:
              "R0lGODlh3AAGAKIAAP////H09fv8/Pj5+vT29/X39/Dz9AAAACH5BAAAAAAALAAAAADcAAYAAAM2aLrc/jDKSau9OOvNZehgKI5kaYIBca5s674nIcB0bd+uAAx47/9AxwBAFBQ+waRyGQoUdIAEADs=",
            encoding: "base64",
          },
          redirectURL: "",
          headersSize: -1,
          bodySize: 0,
          _transferSize: 0,
          _error: null,
        },
        serverIPAddress: "[2a00:1ed0:2:0:1:5bef:c83b:1]",
        startedDateTime: "2020-09-03T03:33:55.100Z",
        time: 0.05899999996472616,
        timings: {
          blocked: -1,
          dns: -1,
          ssl: -1,
          connect: -1,
          send: 0,
          wait: 0.05700000019714935,
          receive: 0.00199999976757681,
          _blocked_queueing: -1,
        },
      },
      {
        _fromCache: "memory",
        _initiator: {
          type: "parser",
          url: "http://www.softwareishard.com/blog/har-12-spec/",
          lineNumber: 783,
        },
        _priority: "Medium",
        _resourceType: "script",
        cache: {},
        connection: "2616",
        pageref: "page_1",
        request: {
          method: "GET",
          url:
            "http://www.softwareishard.com/blog/wp-content/plugins/wp-lightbox-2/wp-lightbox-2.min.js?ver=1.3.4.1",
          httpVersion: "http/1.1",
          headers: [
            {
              name: "Referer",
              value: "http://www.softwareishard.com/blog/har-12-spec/",
            },
            {
              name: "User-Agent",
              value:
                "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/85.0.4183.83 Safari/537.36",
            },
            {
              name: "DNT",
              value: "1",
            },
          ],
          queryString: [
            {
              name: "ver",
              value: "1.3.4.1",
            },
          ],
          cookies: [],
          headersSize: -1,
          bodySize: 0,
        },
        response: {
          status: 200,
          statusText: "OK",
          httpVersion: "http/1.1",
          headers: [
            {
              name: "Date",
              value: "Thu, 03 Sep 2020 02:07:55 GMT",
            },
            {
              name: "Content-Encoding",
              value: "gzip",
            },
            {
              name: "Last-Modified",
              value: "Wed, 18 Feb 2015 23:24:46 GMT",
            },
            {
              name: "Server",
              value: "Apache/2.4.10 (Debian)",
            },
            {
              name: "ETag",
              value: '"6b9b-50f651ff7cb80-gzip"',
            },
            {
              name: "Vary",
              value: "User-Agent,Accept-Encoding",
            },
            {
              name: "Content-Type",
              value: "application/javascript",
            },
            {
              name: "Cache-Control",
              value: "max-age=1209600",
            },
            {
              name: "Connection",
              value: "Keep-Alive",
            },
            {
              name: "Accept-Ranges",
              value: "bytes",
            },
            {
              name: "Keep-Alive",
              value: "timeout=5, max=99",
            },
            {
              name: "Content-Length",
              value: "6953",
            },
            {
              name: "Expires",
              value: "Thu, 17 Sep 2020 02:07:55 GMT",
            },
          ],
          cookies: [],
          content: {
            size: 27547,
            mimeType: "application/javascript",
            text:
              "/**\r\n * Plugin Name: WP Lightbox 2\r\n * Plugin URI: http://yepinol.com/lightbox-2-plugin-wordpress/\r\n * Description: This plugin used to add the lightbox (overlay) effect to the current page images on your WordPress blog.\r\n * Version:       2.28.9.2.1\r\n * Author:        Pankaj Jha\r\n * Author URI:    http://onlinewebapplication.com/\r\n * License:       GNU General Public License, v2 (or newer)\r\n * License URI:  http://www.gnu.org/licenses/old-licenses/gpl-2.0.html\r\n */\r\n/*  Copyright 2011 Pankaj Jha (onlinewebapplication.com)\r\n\r\n    This program is free software; you can redistribute it and/or modify\r\n    it under the terms of the GNU General Public License as published by\r\n    the Free Software Foundation using version 2 of the License.\r\n\r\n    This program is distributed in the hope that it will be useful,\r\n    but WITHOUT ANY WARRANTY; without even the implied warranty of\r\n    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the\r\n    GNU General Public License for more details.\r\n\r\n    You should have received a copy of the GNU General Public License\r\n    along with this program; if not, write to the Free Software\r\n    Foundation, Inc., 59 Temple Place, Suite 330, Boston, MA  02111-1307  USA\r\n*/\r\n/**\r\n * jQuery Lightbox\r\n * Version 0.5 - 11/29/2007\r\n * @author Warren Krewenki\r\n *\r\n * This package is distributed under the BSD license.\r\n * For full license information, see LICENSE.TXT\r\n *\r\n * Based on Lightbox 2 by Lokesh Dhakar (http://www.huddletogether.com/projects/lightbox2/)\r\n * Originally written to make use of the Prototype framework, and Script.acalo.us, now altered to use jQuery.\r\n **/\r\n /** toyNN: davidtg@comtrya.com: fixed IE7-8 incompatabilities in 1.3.* branch **/ \r\n(function($){\r\n    $.fn.lightbox = function(options) {\r\n        var opts = $.extend({}, $.fn.lightbox.defaults, options);\r\n\t\tfunction onClick() {\r\n            initialize();\r\n            start(this);\r\n            return false;\r\n        }\t\r\n\t\tif(parseFloat($().jquery) >= 1.7){\r\n\t\t\treturn $(this).on(\"click\", onClick);\r\n        }else{\r\n\t\t\treturn $(this).live(\"click\", onClick); //deprecated since 1.7\r\n\t\t}\t\t\r\n\t\t\r\n\t\tfunction initialize() {\r\n            $(window).bind('orientationchange', resizeListener);\r\n            $(window).bind('resize', resizeListener);\r\n            // if (opts.followScroll) { $(window).bind('scroll', orientListener); }\r\n            $('#overlay').remove();\r\n            $('#lightbox').remove();\r\n            opts.isIE8 = isIE8(); // //http://www.grayston.net/2011/internet-explorer-v8-and-opacity-issues/\r\n            opts.inprogress = false;\r\n            // if jsonData, build the imageArray from data provided in JSON format\r\n            if (opts.jsonData && opts.jsonData.length > 0) {\r\n                var parser = opts.jsonDataParser ? opts.jsonDataParser : $.fn.lightbox.parseJsonData;\r\n                opts.imageArray = [];\r\n                opts.imageArray = parser(opts.jsonData);\r\n            }\r\n            var outerImage = '<div id=\"outerImageContainer\"><div id=\"imageContainer\"><iframe id=\"lightboxIframe\" /><img id=\"lightboxImage\"><div id=\"hoverNav\"><a href=\"javascript://\" title=\"' + opts.strings.prevLinkTitle + '\" id=\"prevLink\"></a><a href=\"javascript://\" id=\"nextLink\" title=\"' + opts.strings.nextLinkTitle + '\"></a></div><div id=\"loading\"><a href=\"javascript://\" id=\"loadingLink\"><div id=\"jqlb_loading\"></div></a></div></div></div>';\r\n            var imageData = '<div id=\"imageDataContainer\" class=\"clearfix\"><div id=\"imageData\"><div id=\"imageDetails\"><span id=\"caption\"></span><span id=\"numberDisplay\"></span></div><div id=\"bottomNav\">';\r\n            if (opts.displayHelp) {\r\n                imageData += '<span id=\"helpDisplay\">' + opts.strings.help + '</span>';\r\n            }\r\n\t\t\tif(JQLBSettings['jqlb_show_close_button']=='1'){\r\n            \timageData += '<a href=\"javascript://\" id=\"bottomNavClose\" title=\"' + opts.strings.closeTitle + '\"><img src=\"'+JQLBSettings['jqlb_image_for_close_lightbox']+'\" id=\"jqlb_closelabel\"/></a>';\r\n\t\t\t}\r\n\t\t\timageData +='</div></div></div>';\r\n            var string;\r\n            if (opts.navbarOnTop) {\r\n                string = '<div id=\"overlay\"></div><div id=\"lightbox\">' + imageData + outerImage + '</div>';\r\n                $(\"body\").append(string);\r\n                $(\"#imageDataContainer\").addClass('ontop');\r\n            } else {\r\n                string = '<div id=\"overlay\"></div><div id=\"lightbox\">' + outerImage + imageData + '</div>';\r\n                $(\"body\").append(string);\r\n            }\r\n\t\t\tvar gago=1;\r\n            $(\"#overlay\").click(function () { end(); }).hide();\t\r\n\t\t\tif(JQLBSettings['jqlb_overlay_close']=='1')\t\t\r\n            $(\"#lightbox\").click(function () { if(gago){end();} gago=1 }).hide().children('#imageDataContainer').click(function(e) { gago=0; console.log(e)  });;\r\n            $(\"#loadingLink\").click(function () { end(); return false; });\r\n            $(\"#bottomNavClose\").click(function () { end(); return false; });\r\n            $('#outerImageContainer').width(opts.widthCurrent).height(opts.heightCurrent);\r\n            $('#imageDataContainer').width(opts.widthCurrent);\r\n            if (!opts.imageClickClose) {\r\n                $(\"#lightboxImage\").click(function () { return false; });\r\n                $(\"#hoverNav\").click(function () { return false; });\r\n            }\r\n        };\r\n        //allow image to reposition & scale if orientation change or resize occurs.\r\n\t\t/*2.21 - Image Map, Shrink large images to fit smaller screens*/\r\n\t\t/*2.23 - Updated jQuery calls for faster load*/\r\n\t\t/*2.25 - Fixed PHP 5 bug*/\r\n\t\t/*2.27 - Compatible with wordpress 3.5.1.*/\r\n\t\t/*2.28.6.1 - Fixed navigation issue (minor release)*/\r\n\t\t/*2.28.8 - Compatible with wordpress 3.8.*/\r\n\t\t/*2.28.8.1 - Fixed navigation issue.*/\r\n\t\t/*2.28.8.2 - Compatible with wordpress 3.8.1*/\r\n\t\t/*2.28.8.3 - Fixed full screen image close issue*/\r\n\t        /*2.28.8.4 - Compatible with wordpress 3.9*/\r\n                /*2.28.8.5 - Fixed Responsiveness Issue */\r\n                /*2.28.8.6 - Compatible with wordpress 3.9.1*/\r\n\t\t/*2.28.8.7 - Fixed Image Galary and other HTML issue minor fix*/\r\n\t\t/*2.28.8.8 - Compatible with wordpress 3.9.2*/\r\n\t\t/*2.28.8.9 - Compatible with wordpress 4.0*/\r\n\t\t/*2.28.9.0 - Optimize: content grouping support and exclusion performance*/\r\n\t\t/*2.28.9.1 - Compatible with wordpress 4.0.1*/\r\n\t\t/*2.28.9.2 - Compatible with wordpress 4.1*/\r\n\t\t/*2.28.9.2.1 - Fixed: Broken shortcodes with WordPress 4.1*/\r\n        function resizeListener(e) {\r\n            if (opts.resizeTimeout) {\r\n                clearTimeout(opts.resizeTimeout);\r\n                opts.resizeTimeout = false;\r\n            }\r\n            opts.resizeTimeout = setTimeout(function () { doScale(false); }, 50); //a delay to avoid duplicate event calls.\t\t\r\n        }\r\n        function getPageSize(){           \r\n            var pgDocHeight = $(document).height();\r\n            if (opts.isIE8 && pgDocHeight > 4096) {\r\n                pgDocHeight = 4096;\r\n            }\r\n\t\t\tvar viewportHeight = $(window).height() - opts.adminBarHeight;\t\t\t\r\n\t\t\t//$(document).width() returns width of HTML document \r\n            return new Array($(document).width(), pgDocHeight, $(window).width(), viewportHeight, $(document).height());\r\n        };\r\n        //code for IE8 check provided by http://kangax.github.com/cft/\r\n        function isIE8() {\r\n            var isBuggy = false;\r\n            if (document.createElement) {\r\n                var el = document.createElement(\"div\");\r\n                if (el && el.querySelectorAll) {\r\n                    el.innerHTML = \"<object><param name=\\\"\\\"></object>\";\r\n                    isBuggy = el.querySelectorAll(\"param\").length != 1;\r\n                }\r\n                el = null;\r\n            }\r\n            return isBuggy;\r\n        };\r\n        function getPageScroll() {\r\n            var xScroll = 0; var yScroll = 0;\r\n            if (self.pageYOffset) {\r\n                yScroll = self.pageYOffset;\r\n                xScroll = self.pageXOffset;\r\n            } else if (document.documentElement && document.documentElement.scrollTop) {  // Explorer 6 Strict\r\n                yScroll = document.documentElement.scrollTop;\r\n                xScroll = document.documentElement.scrollLeft;\r\n            } else if (document.body) {// all other Explorers\r\n                yScroll = document.body.scrollTop;\r\n                xScroll = document.body.scrollLeft;\r\n            }\r\n\t\t\tif(opts.adminBarHeight && parseInt($('#wpadminbar').css('top'), 10) === 0){\r\n\t\t\t\tyScroll += opts.adminBarHeight;\r\n\t\t\t}\t\r\n            return new Array(xScroll, yScroll);\r\n        };\r\n// JQuery Call\r\n\t\tfunction start(imageLink) {\r\n            $(\"select, embed, object\").hide();\r\n            var arrayPageSize = getPageSize();\r\n            var arrayPagePos = getPageScroll();\r\n            var newTop = 0;\r\n            $(\"#overlay\").hide().css({width: arrayPageSize[0] + 'px', height: arrayPageSize[1] + 'px', opacity: opts.overlayOpacity}).fadeIn(400);\r\n            if (opts.isIE8 && arrayPageSize[1] == 4096) {\r\n                if (arrayPagePos[1] >= 1000) {\r\n                    newTop = arrayPagePos[1] - 1000;\r\n                    if ((arrayPageSize[4] - (arrayPagePos[1] + 3096)) < 0) {\r\n                        newTop -= (arrayPagePos[1] + 3096) - arrayPageSize[4];\r\n                    }\r\n                    $(\"#overlay\").css({ top: newTop + 'px' });\r\n                }\r\n            }\r\n            imageNum = 0;\r\n            // if data is not provided by jsonData parameter\r\n            if (!opts.jsonData) {\r\n                opts.imageArray = [];\r\n                // if image is NOT part of a set..\t\t\t\t\r\n                if (!imageLink.rel || (imageLink.rel == '')) {\r\n                    // add single image to Lightbox.imageArray\r\n                    var s = '';\r\n                    if (imageLink.title) {\r\n                        s = imageLink.title;\r\n                    } else if ($(this).children(':first-child').attr('title')) {\r\n                        s = $(this).children(':first-child').attr('title');\r\n                    }\r\n                    opts.imageArray.push(new Array(imageLink.href, opts.displayTitle ? s : ''));\r\n                } else {\r\n                    // if image is part of a set..\r\n                    $(\"a\").each(function () {\r\n                        if (this.href && (this.rel == imageLink.rel)) {\r\n                            var title = '';\r\n                            var caption = '';\r\n                            var captionText = '';\r\n                            var jqThis = $(this);\r\n                            if (this.title) {\r\n                                title = this.title;\r\n                            } else if (jqThis.children('img:first-child').attr('title')) {\r\n                                title = jqThis.children('img:first-child').attr('title'); //grab the title from the image if the link lacks one\r\n                            }\r\n                            if (jqThis.parent().next('.gallery-caption').html()) {\r\n                                var jq = jqThis.parent().next('.gallery-caption');\r\n                                caption = jq.html();\r\n                                captionText = jq.text();\r\n                            } else if (jqThis.next('.wp-caption-text').html()) {\r\n                                caption = jqThis.next('.wp-caption-text').html();\r\n                                captionText = jqThis.next('.wp-caption-text').text();\r\n                            }\r\n                            title = $.trim(title);\r\n                            captionText = $.trim(captionText);\r\n                            if (title.toLowerCase() == captionText.toLowerCase()) {\r\n                                title = caption; //to keep linked captions\r\n                                caption = ''; //but not duplicate the text\t\t\t\t\t\t\t\t\r\n                            }\r\n\t\t\t\t\t\t\tvar s = '';\r\n\t\t\t\t\t\t\tif (title != '') {\r\n\t\t\t\t\t\t\t\ts = '<span id=\"titleText\">' + title + '</span>';\r\n\t\t\t\t\t\t\t} \r\n\t\t\t\t\t\t\tif (caption != '') {\r\n\t\t\t\t\t\t\t\tif (title != ''){\r\n\t\t\t\t\t\t\t\t\ts += '<br />';\r\n\t\t\t\t\t\t\t\t} \r\n\t\t\t\t\t\t\t\ts += '<span id=\"captionText\">' + caption +'</span>';\r\n\t\t\t\t\t\t\t}\r\n                            opts.imageArray.push(new Array(this.href, opts.displayTitle ? s : ''));\r\n                        }\r\n                    });\r\n                }\r\n            }\r\n            if (opts.imageArray.length > 1) {\r\n                for (i = 0; i < opts.imageArray.length; i++) {\r\n                    for (j = opts.imageArray.length - 1; j > i; j--) {\r\n                        if (opts.imageArray[i][0] == opts.imageArray[j][0]) {\r\n                            opts.imageArray.splice(j, 1);\r\n                        }\r\n                    }\r\n                }\r\n                while (opts.imageArray[imageNum][0] != imageLink.href) { imageNum++; }\r\n            }\r\n            // calculate top and left offset for the lightbox\r\n\t\t\tif(JQLBSettings['jqlb_popup_size_fix']=='1')\r\n\t\t\tsetLightBoxPos(10, arrayPagePos[0]).show();\r\n\t\t\telse\r\n            \tsetLightBoxPos(arrayPagePos[1], arrayPagePos[0]).show();\r\n            changeImage(imageNum);\r\n        };\r\n\t\t\r\n\t\tfunction setLightBoxPos(newTop, newLeft) {        \r\n            if (opts.resizeSpeed > 0) {\t\t\t\r\n                $('#lightbox').animate({ top: newTop }, 250, 'linear');\r\n                return $('#lightbox').animate({ left: newLeft }, 250, 'linear');\r\n            }\r\n            return $('#lightbox').css({ top: newTop + 'px', left: newLeft + 'px' });\r\n        }\r\n\t\t\r\n        function changeImage(imageNum) {\r\n            if (opts.inprogress == false) {\r\n                opts.inprogress = true;\r\n                opts.activeImage = imageNum;\r\n                // hide elements during transition\r\n                $('#loading').show();\r\n                $('#lightboxImage').hide();\r\n                $('#hoverNav').hide();\r\n                $('#prevLink').hide();\r\n                $('#nextLink').hide();\r\n                doChangeImage();\r\n            }\r\n        };\r\n\r\n        function doChangeImage() {\r\n            opts.imgPreloader = new Image();\r\n            opts.imgPreloader.onload = function () {\r\n                $('#lightboxImage').attr('src', opts.imageArray[opts.activeImage][0]);\r\n                doScale();  // once image is preloaded, resize image container\r\n                preloadNeighborImages();\r\n            };\r\n            opts.imgPreloader.src = opts.imageArray[opts.activeImage][0];\r\n        };\r\n\r\n        function doScale() {\r\n            if (!opts.imgPreloader) {\r\n                return;\r\n            }\r\n            var newWidth = opts.imgPreloader.width;\r\n            var newHeight = opts.imgPreloader.height;\r\n\t\t\tvar seted_widt_max=parseInt(JQLBSettings['jqlb_maximum_width']);\r\n\t\t\tvar seted_height_max=parseInt(JQLBSettings['jqlb_maximum_height']);\r\n            var arrayPageSize = getPageSize();  \r\n\t\t\tvar noScrollWidth = (arrayPageSize[2] < arrayPageSize[0]) ? arrayPageSize[0] : arrayPageSize[2]; //if viewport is smaller than page, use page width.\r\n\t\t\t$(\"#overlay\").css({ width: noScrollWidth + 'px', height: arrayPageSize[1] + 'px' });  \r\n            var maxHeight = (arrayPageSize[3]) - ($(\"#imageDataContainer\").height() + (2 * opts.borderSize));\r\n            var maxWidth = (arrayPageSize[2]) - (2*opts.borderSize);\t\r\n\t\t\tif (opts.fitToScreen){\r\n\t\t\t\tvar displayWidth = maxWidth-opts.marginSize;\t\r\n\t\t\t\tif(seted_widt_max<maxWidth && seted_widt_max>0)\r\n\t\t\t\t\tdisplayWidth = seted_widt_max-opts.marginSize;\r\n\t\t\t\tvar displayHeight = maxHeight-opts.marginSize;\t\r\n\t\t\t\tif(seted_height_max<maxHeight && seted_height_max>0)\r\n\t\t\t\t\tdisplayHeight = seted_height_max-opts.marginSize;\t\r\n                var ratio = 1;\r\n                if (newHeight > displayHeight) {\r\n                    ratio = displayHeight / newHeight; //ex. 600/1024 = 0.58\t\t\t\t\t\r\n                }\r\n                newWidth = newWidth * ratio;\r\n                newHeight = newHeight * ratio;\r\n                ratio = 1;\r\n                if (newWidth > displayWidth) {\r\n                    ratio = displayWidth / newWidth; //ex. 800/1280 == 0.62\t\t\t\t\t\r\n                }\r\n                newWidth = Math.round(newWidth * ratio);\r\n                newHeight = Math.round(newHeight * ratio);\r\n            }        \r\n\t\t\tvar arrayPageScroll = getPageScroll();\r\n\t\t\tvar centerY = arrayPageScroll[1] + (maxHeight * 0.5);\r\n\t\t\tif(JQLBSettings['jqlb_popup_size_fix']=='1')\r\n\t\t\t\tvar newTop =(maxHeight-newHeight) * 0.5;\r\n\t\t\telse\r\n\t\t\t\tvar newTop = centerY - newHeight * 0.5;\r\n\t\t\tvar newLeft = arrayPageScroll[0];\r\n\t\t\t$('#lightboxImage').width(newWidth).height(newHeight);\r\n\t\t\tresizeImageContainer(newWidth, newHeight, newTop, newLeft);           \r\n        }\r\n/*2.28.4 -  Compatible with wordpress 3.6.*/\r\n        function resizeImageContainer(imgWidth, imgHeight, lightboxTop, lightboxLeft) {\r\n            opts.widthCurrent = $(\"#outerImageContainer\").outerWidth();\r\n\t\t\tif(parseInt(JQLBSettings['jqlb_maximum_width']) && parseInt(JQLBSettings['jqlb_maximum_width'])>0){\r\n\t\t\t\tif(parseInt(JQLBSettings['jqlb_maximum_width'])<opts.widthCurrent){\r\n\t\t\t\t\topts.widthCurrent=parseInt(JQLBSettings['jqlb_maximum_width']);\r\n\t\t\t\t}\r\n\t\t\t}\r\n\t\t\t\r\n            opts.heightCurrent = $(\"#outerImageContainer\").outerHeight();\r\n\t\t\tif(parseInt(JQLBSettings['jqlb_maximum_height']) && parseInt(JQLBSettings['jqlb_maximum_height'])>0){\r\n\t\t\t\tif(parseInt(JQLBSettings['jqlb_maximum_height'])<opts.heightCurrent){\r\n\t\t\t\t\topts.heightCurrent=parseInt(JQLBSettings['jqlb_maximum_height']);\r\n\t\t\t\t}\r\n\t\t\t}\r\n            var widthNew = Math.max(350, imgWidth + (opts.borderSize * 2));\r\n            var heightNew = (imgHeight + (opts.borderSize * 2));\r\n            // scalars based on change from old to new\r\n            opts.xScale = (widthNew / opts.widthCurrent) * 100;\r\n            opts.yScale = (heightNew / opts.heightCurrent) * 100;           \r\n            setLightBoxPos(lightboxTop, lightboxLeft);                   \r\n            updateDetails(); //toyNN: moved updateDetails() here, seems to work fine.    \r\n\t\t\t$('#imageDataContainer').animate({ width: widthNew }, opts.resizeSpeed, 'linear');\r\n\t\t\t$('#outerImageContainer').animate({ width: widthNew }, opts.resizeSpeed, 'linear', function () {\r\n\t\t\t\t$('#outerImageContainer').animate({ height: heightNew }, opts.resizeSpeed, 'linear', function () {\r\n\t\t\t\t\tshowImage();\r\n\t\t\t\t});\r\n\t\t\t});\r\n\t\t\tupdateNav();\r\n            $('#prevLink').height(imgHeight);\r\n            $('#nextLink').height(imgHeight);\r\n        };\r\n\r\n        function showImage() {\r\n            //assumes updateDetails have been called earlier!\r\n            $(\"#imageData\").show();\r\n            $('#caption').show();\r\n            //$('#imageDataContainer').slideDown(400);\r\n            //$(\"#imageDetails\").hide().fadeIn(400);\t\t\r\n            $('#loading').hide();\r\n            if (opts.resizeSpeed > 0) {\r\n                $('#lightboxImage').fadeIn(\"fast\");\r\n            } else {\r\n                $('#lightboxImage').show();\r\n            }\r\n            opts.inprogress = false;\r\n        };\r\n\t\t\r\n\t\tfunction preloadNeighborImages() {\r\n            if (opts.loopImages && opts.imageArray.length > 1) {\r\n                preloadNextImage = new Image();\r\n                preloadNextImage.src = opts.imageArray[(opts.activeImage == (opts.imageArray.length - 1)) ? 0 : opts.activeImage + 1][0]\r\n                preloadPrevImage = new Image();\r\n                preloadPrevImage.src = opts.imageArray[(opts.activeImage == 0) ? (opts.imageArray.length - 1) : opts.activeImage - 1][0]\r\n            } else {\r\n                if ((opts.imageArray.length - 1) > opts.activeImage) {\r\n                    preloadNextImage = new Image();\r\n                    preloadNextImage.src = opts.imageArray[opts.activeImage + 1][0];\r\n                }\r\n                if (opts.activeImage > 0) {\r\n                    preloadPrevImage = new Image();\r\n                    preloadPrevImage.src = opts.imageArray[opts.activeImage - 1][0];\r\n                }\r\n            }\r\n        };\r\n\r\n\r\n        function updateDetails() {\r\n            $('#numberDisplay').html('');\r\n            $('#caption').html('').hide();\r\n            if (opts.imageArray[opts.activeImage][1]) {\r\n                $('#caption').html(opts.imageArray[opts.activeImage][1]).show();\r\n            }\r\n            var nav_html = '';\r\n            var prev = '';\r\n            var pos = (opts.imageArray.length > 1) ? opts.strings.image + (opts.activeImage + 1) + opts.strings.of + opts.imageArray.length : '';\r\n            var link = (opts.displayDownloadLink) ? '<a href=\"' + opts.imageArray[opts.activeImage][0] + '\" id=\"downloadLink\" download=\"'+opts.imageArray[opts.activeImage][0].replace(/^.*\\/|\\.[^.]*$/g, '')+'.'+opts.imageArray[opts.activeImage][0].split('.').pop()+'\" target=\"'+opts.linkTarget+'\">' + opts.strings.download + '</a>' : '';\r\n            var next = '';\r\n            if (opts.imageArray.length > 1 && !opts.disableNavbarLinks) {\t // display previous / next text links   \t\t\t           \r\n                if ((opts.activeImage) > 0 || opts.loopImages) {\r\n                    prev = '<a title=\"' + opts.strings.prevLinkTitle + '\" href=\"#\" id=\"prevLinkText\">' + opts.strings.prevLinkText + \"</a>\";\r\n                }\r\n                if (((opts.activeImage + 1) < opts.imageArray.length) || opts.loopImages) {\r\n                    next += '<a title=\"' + opts.strings.nextLinkTitle + '\" href=\"#\" id=\"nextLinkText\">' + opts.strings.nextLinkText + \"</a>\";\r\n                }\r\n            }\r\n            nav_html = prev + nav_html + pos + link + next;\r\n            if (nav_html != '' && JQLBSettings['jqlb_show_text_for_image']=='1') {\r\n                $('#numberDisplay').html(nav_html).show();\r\n            }\r\n        };\r\n\r\n        function updateNav() {\r\n            if (opts.imageArray.length > 1) {\r\n                $('#hoverNav').show();\r\n                // if loopImages is true, always show next and prev image buttons \r\n                if (opts.loopImages) {\r\n                    $('#prevLink,#prevLinkText').show().click(function () {\r\n                        changeImage((opts.activeImage == 0) ? (opts.imageArray.length - 1) : opts.activeImage - 1); return false;\r\n                    });\r\n                    $('#nextLink,#nextLinkText').show().click(function () {\r\n                        changeImage((opts.activeImage == (opts.imageArray.length - 1)) ? 0 : opts.activeImage + 1); return false;\r\n                    });\r\n                } else {\r\n                    // if not first image in set, display prev image button\r\n                    if (opts.activeImage != 0) {\r\n                        $('#prevLink,#prevLinkText').show().click(function () {\r\n                            changeImage(opts.activeImage - 1); return false;\r\n                        });\r\n                    }\r\n                    // if not last image in set, display next image button\r\n                    if (opts.activeImage != (opts.imageArray.length - 1)) {\r\n                        $('#nextLink,#nextLinkText').show().click(function () {\r\n                            changeImage(opts.activeImage + 1); return false;\r\n                        });\r\n                    }\r\n                }\r\n\t\t\t\tif(JQLBSettings ['jqlb_keyboard_navigation']=='1'){\r\n                \tenableKeyboardNav();\r\n\t\t\t\t}\r\n            }\r\n        };\r\n\r\n        function end() {\r\n            disableKeyboardNav();\r\n            $('#lightbox').hide();\r\n            $('#overlay').fadeOut();\r\n            $('select, object, embed').show();\r\n        };\r\n\r\n        function keyboardAction(e) {\r\n            var o = e.data.opts;\r\n            var keycode = e.keyCode;\r\n            var escapeKey = 27;\r\n            var key = String.fromCharCode(keycode).toLowerCase();\r\n            if ((key == 'x') || (key == 'o') || (key == 'c') || (keycode == escapeKey)) { // close lightbox\r\n                end();\r\n            } else if ((key == 'p') || (keycode == 37)) { // display previous image\r\n                if (o.loopImages) {\r\n                    disableKeyboardNav();\r\n                    changeImage((o.activeImage == 0) ? (o.imageArray.length - 1) : o.activeImage - 1);\r\n                }\r\n                else if (o.activeImage != 0) {\r\n                    disableKeyboardNav();\r\n                    changeImage(o.activeImage - 1);\r\n                }\r\n            } else if ((key == 'n') || (keycode == 39)) { // display next image\r\n                if (opts.loopImages) {\r\n                    disableKeyboardNav();\r\n                    changeImage((o.activeImage == (o.imageArray.length - 1)) ? 0 : o.activeImage + 1);\r\n                }\r\n                else if (o.activeImage != (o.imageArray.length - 1)) {\r\n                    disableKeyboardNav();\r\n                    changeImage(o.activeImage + 1);\r\n                }\r\n            }          \r\n            return false;\r\n        };\r\n        function enableKeyboardNav() {\t\t\t\r\n\t\t\t$(document).bind('keydown', {opts: opts}, keyboardAction);\r\n        };\r\n        function disableKeyboardNav() {\r\n            $(document).unbind('keydown');\r\n        };\r\n    };\r\n    $.fn.lightbox.parseJsonData = function(data) {\r\n        var imageArray = [];\r\n        $.each(data, function () {\r\n            imageArray.push(new Array(this.url, this.title));\r\n        });\r\n        return imageArray;\r\n    };\r\n    $.fn.lightbox.defaults = {\r\n\t\tadminBarHeight:28,\r\n        overlayOpacity: (JQLBSettings['jqlb_overlay_opacity']/100),\r\n        borderSize: (JQLBSettings['jqlb_border_width']),\r\n        imageArray: new Array,\r\n        activeImage: null,\r\n        inprogress: false, //this is an internal state variable. don't touch.\r\n        widthCurrent: 250,\r\n        heightCurrent: 250,\r\n        xScale: 1,\r\n        yScale: 1,\r\n        displayTitle: true,\r\n        disableNavbarLinks: true,\r\n        loopImages: true,\r\n        imageClickClose: true,\r\n        jsonData: null,\r\n        jsonDataParser: null,\r\n        followScroll: false,\r\n        isIE8: false  //toyNN:internal value only\r\n    };\r\n\t$(document).ready(function($){\r\n\t\tvar haveConf = (typeof JQLBSettings == 'object');\r\n\t\tif(haveConf && JQLBSettings.resizeSpeed) {\r\n\t\t\tJQLBSettings.resizeSpeed = parseInt(JQLBSettings.resizeSpeed);\r\n\t\t}\r\n\t\tif(haveConf && JQLBSettings.marginSize){\r\n\t\t\tJQLBSettings.marginSize = parseInt(JQLBSettings.marginSize);\r\n\t\t}\r\n\t\tvar default_strings = {\r\n\t\t\thelp: ' Browse images with your keyboard: Arrows or P(revious)/N(ext) and X/C/ESC for close.',\r\n\t\t\tprevLinkTitle: JQLBSettings ['jqlb_previous_image_title'],\r\n\t\t\tnextLinkTitle:  JQLBSettings ['jqlb_next_image_title'],\r\n\t\t\tprevLinkText:  '&laquo; Previous',\r\n\t\t\tnextLinkText:  'Next &raquo;',\r\n\t\t\tcloseTitle: JQLBSettings ['jqlb_close_image_title'],\r\n\t\t\timage: 'Image ',\r\n\t\t\tof: ' of ',\r\n\t\t\tdownload: 'Download'\r\n\t\t};\r\n\t\t$('a[rel^=\"lightbox\"]').lightbox({\r\n\t\t\tadminBarHeight: $('#wpadminbar').height() || 0,\r\n\t\t\tlinkTarget: (haveConf && JQLBSettings.linkTarget.length) ? JQLBSettings.linkTarget : '_self',\r\n\t\t\tdisplayHelp: (haveConf && JQLBSettings.help.length) ? true : false,\r\n\t\t\tmarginSize: (haveConf && JQLBSettings.marginSize) ? JQLBSettings.marginSize : 0,\r\n\t\t\tfitToScreen: (haveConf && JQLBSettings.fitToScreen == '1') ? true : false,\r\n\t\t\tresizeSpeed: (haveConf && JQLBSettings.resizeSpeed >= 0) ? JQLBSettings.resizeSpeed : 400,\r\n\t\t\tdisplayDownloadLink: (haveConf && JQLBSettings.displayDownloadLink == '0') ? false : true,\r\n\t\t\tnavbarOnTop: (haveConf && JQLBSettings.navbarOnTop == '0') ? false : true,\r\n\t\t\t//followScroll: (haveConf && JQLBSettings.followScroll == '0') ? false : true,\r\n\t\t\tstrings: (haveConf && typeof JQLBSettings.help == 'string') ? JQLBSettings : default_strings\r\n\t\t});\t\r\n\t});\t\r\n})(jQuery);",
          },
          redirectURL: "",
          headersSize: -1,
          bodySize: 0,
          _transferSize: 0,
          _error: null,
        },
        serverIPAddress: "[2a00:1ed0:2:0:1:5bef:c83b:1]",
        startedDateTime: "2020-09-03T03:33:55.104Z",
        time: 0.11999999969702912,
        timings: {
          blocked: -1,
          dns: -1,
          ssl: -1,
          connect: -1,
          send: 0,
          wait: 0.11799999992945231,
          receive: 0.00199999976757681,
          _blocked_queueing: -1,
        },
      },
      {
        _fromCache: "memory",
        _initiator: {
          type: "parser",
          url: "http://www.softwareishard.com/blog/har-12-spec/",
          lineNumber: 784,
        },
        _priority: "Medium",
        _resourceType: "script",
        cache: {},
        connection: "2610",
        pageref: "page_1",
        request: {
          method: "GET",
          url:
            "http://www.softwareishard.com/blog/wp-includes/js/wp-embed.min.js?ver=4.7.18",
          httpVersion: "http/1.1",
          headers: [
            {
              name: "Referer",
              value: "http://www.softwareishard.com/blog/har-12-spec/",
            },
            {
              name: "User-Agent",
              value:
                "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/85.0.4183.83 Safari/537.36",
            },
            {
              name: "DNT",
              value: "1",
            },
          ],
          queryString: [
            {
              name: "ver",
              value: "4.7.18",
            },
          ],
          cookies: [],
          headersSize: -1,
          bodySize: 0,
        },
        response: {
          status: 200,
          statusText: "OK",
          httpVersion: "http/1.1",
          headers: [
            {
              name: "Date",
              value: "Thu, 03 Sep 2020 02:07:55 GMT",
            },
            {
              name: "Content-Encoding",
              value: "gzip",
            },
            {
              name: "Last-Modified",
              value: "Wed, 23 Nov 2016 12:38:34 GMT",
            },
            {
              name: "Server",
              value: "Apache/2.4.10 (Debian)",
            },
            {
              name: "ETag",
              value: '"576-541f72ac78680-gzip"',
            },
            {
              name: "Vary",
              value: "User-Agent,Accept-Encoding",
            },
            {
              name: "Content-Type",
              value: "application/javascript",
            },
            {
              name: "Cache-Control",
              value: "max-age=1209600",
            },
            {
              name: "Connection",
              value: "Keep-Alive",
            },
            {
              name: "Accept-Ranges",
              value: "bytes",
            },
            {
              name: "Keep-Alive",
              value: "timeout=5, max=99",
            },
            {
              name: "Content-Length",
              value: "751",
            },
            {
              name: "Expires",
              value: "Thu, 17 Sep 2020 02:07:55 GMT",
            },
          ],
          cookies: [],
          content: {
            size: 1398,
            mimeType: "application/javascript",
            text:
              '!function(a,b){"use strict";function c(){if(!e){e=!0;var a,c,d,f,g=-1!==navigator.appVersion.indexOf("MSIE 10"),h=!!navigator.userAgent.match(/Trident.*rv:11\\./),i=b.querySelectorAll("iframe.wp-embedded-content");for(c=0;c<i.length;c++){if(d=i[c],!d.getAttribute("data-secret"))f=Math.random().toString(36).substr(2,10),d.src+="#?secret="+f,d.setAttribute("data-secret",f);if(g||h)a=d.cloneNode(!0),a.removeAttribute("security"),d.parentNode.replaceChild(a,d)}}}var d=!1,e=!1;if(b.querySelector)if(a.addEventListener)d=!0;if(a.wp=a.wp||{},!a.wp.receiveEmbedMessage)if(a.wp.receiveEmbedMessage=function(c){var d=c.data;if(d.secret||d.message||d.value)if(!/[^a-zA-Z0-9]/.test(d.secret)){var e,f,g,h,i,j=b.querySelectorAll(\'iframe[data-secret="\'+d.secret+\'"]\'),k=b.querySelectorAll(\'blockquote[data-secret="\'+d.secret+\'"]\');for(e=0;e<k.length;e++)k[e].style.display="none";for(e=0;e<j.length;e++)if(f=j[e],c.source===f.contentWindow){if(f.removeAttribute("style"),"height"===d.message){if(g=parseInt(d.value,10),g>1e3)g=1e3;else if(~~g<200)g=200;f.height=g}if("link"===d.message)if(h=b.createElement("a"),i=b.createElement("a"),h.href=f.getAttribute("src"),i.href=d.value,i.host===h.host)if(b.activeElement===f)a.top.location.href=d.value}else;}},d)a.addEventListener("message",a.wp.receiveEmbedMessage,!1),b.addEventListener("DOMContentLoaded",c,!1),a.addEventListener("load",c,!1)}(window,document);',
          },
          redirectURL: "",
          headersSize: -1,
          bodySize: 0,
          _transferSize: 0,
          _error: null,
        },
        serverIPAddress: "[2a00:1ed0:2:0:1:5bef:c83b:1]",
        startedDateTime: "2020-09-03T03:33:55.104Z",
        time: 0.045000000682193786,
        timings: {
          blocked: -1,
          dns: -1,
          ssl: -1,
          connect: -1,
          send: 0,
          wait: 0.04400000034365803,
          receive: 0.0010000003385357559,
          _blocked_queueing: -1,
        },
      },
      {
        _initiator: {
          type: "parser",
          url: "http://www.softwareishard.com/blog/har-12-spec/",
          lineNumber: 786,
        },
        _priority: "Medium",
        _resourceType: "script",
        cache: {},
        pageref: "page_1",
        request: {
          method: "GET",
          url: "http://www.google-analytics.com/urchin.js",
          httpVersion: "",
          headers: [
            {
              name: "Referer",
              value: "http://www.softwareishard.com/",
            },
            {
              name: "User-Agent",
              value:
                "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/85.0.4183.83 Safari/537.36",
            },
            {
              name: "DNT",
              value: "1",
            },
          ],
          queryString: [],
          cookies: [],
          headersSize: -1,
          bodySize: 0,
        },
        response: {
          status: 0,
          statusText: "",
          httpVersion: "",
          headers: [],
          cookies: [],
          content: {
            size: 0,
            mimeType: "x-unknown",
          },
          redirectURL: "",
          headersSize: -1,
          bodySize: -1,
          _transferSize: 0,
          _error: "net::ERR_BLOCKED_BY_CLIENT",
        },
        serverIPAddress: "",
        startedDateTime: "2020-09-03T03:33:55.104Z",
        time: 0.005717000000004191,
        timings: {
          blocked: 0.005717000000004191,
          dns: -1,
          ssl: -1,
          connect: -1,
          send: 0,
          wait: 0,
          receive: 0,
          _blocked_queueing: -1,
        },
      },
      {
        _initiator: {
          type: "other",
        },
        _priority: "High",
        _resourceType: "other",
        cache: {},
        connection: "4263",
        pageref: "page_1",
        request: {
          method: "GET",
          url: "http://www.softwareishard.com/favicon.ico",
          httpVersion: "HTTP/1.1",
          headers: [
            {
              name: "Host",
              value: "www.softwareishard.com",
            },
            {
              name: "Connection",
              value: "keep-alive",
            },
            {
              name: "Pragma",
              value: "no-cache",
            },
            {
              name: "Cache-Control",
              value: "no-cache",
            },
            {
              name: "User-Agent",
              value:
                "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/85.0.4183.83 Safari/537.36",
            },
            {
              name: "DNT",
              value: "1",
            },
            {
              name: "Accept",
              value: "image/avif,image/webp,image/apng,image/*,*/*;q=0.8",
            },
            {
              name: "Referer",
              value: "http://www.softwareishard.com/blog/har-12-spec/",
            },
            {
              name: "Accept-Encoding",
              value: "gzip, deflate",
            },
            {
              name: "Accept-Language",
              value: "en-US,en;q=0.9",
            },
          ],
          queryString: [],
          cookies: [],
          headersSize: 443,
          bodySize: 0,
        },
        response: {
          status: 200,
          statusText: "OK",
          httpVersion: "HTTP/1.1",
          headers: [
            {
              name: "Date",
              value: "Thu, 03 Sep 2020 03:33:54 GMT",
            },
            {
              name: "Server",
              value: "Apache/2.4.10 (Debian)",
            },
            {
              name: "Vary",
              value: "User-Agent",
            },
            {
              name: "Last-Modified",
              value: "Tue, 16 Jun 2009 23:00:00 GMT",
            },
            {
              name: "ETag",
              value: '"1536-46c7f225cdc00"',
            },
            {
              name: "Accept-Ranges",
              value: "bytes",
            },
            {
              name: "Content-Length",
              value: "5430",
            },
            {
              name: "Cache-Control",
              value: "max-age=30",
            },
            {
              name: "Expires",
              value: "Thu, 03 Sep 2020 03:34:24 GMT",
            },
            {
              name: "Keep-Alive",
              value: "timeout=5, max=99",
            },
            {
              name: "Connection",
              value: "Keep-Alive",
            },
            {
              name: "Content-Type",
              value: "image/vnd.microsoft.icon",
            },
          ],
          cookies: [],
          content: {
            size: 5430,
            mimeType: "image/vnd.microsoft.icon",
            compression: 0,
            text:
              "AAABAAIAEBAAAAEAIABoBAAAJgAAACAgAAABACAAqBAAAI4EAAAoAAAAEAAAACAAAAABACAAAAAAAAAEAAASCwAAEgsAAAAAAAAAAAAAPCUk/ylGZv8QK3D/P1GL/0xeiv8JDCT/AgIU/wICE/8BARD/BgIV/wIBEf8JDS3/CAAH/xcMDf8hEBX/Hg8U/zwoKv8VGSv/ESx2/y03cv8ZITv/DAkT/xQTH/8gHzX/HiA7/xcYKf8SCxj/AwAS/woCDf8eDxT/GxUo/xgTKv8bFy3/JRYb/xMcSP8UHlP/DhAe/xYRIf8qK0r/JzBS/yIoS/8rMFT/HyA3/xMSIf8WESX/FxQl/xYVMP8aFTH/FhYx/yEZLf8QCRL/EhMl/xgaL/8bHjn/LDVi/zw+c/9CQXv/LzZn/x0lSv8fIUL/Gxo1/xoYM/8YFS//GhUy/xYVMf8WFjP/LixO/zE0VP8qM1j/Ki9Z/0pPf/8kLFb/HSBK/y0xYv9HTID/SE2C/z5Dbf83OmH/Gxc1/xgVMP8WFTH/GBY0/0lLev9MVn3/cnio/2Rmof9bWp3/aGSj/3dvr/9nYqL/Yl+g/3Byrf9eZ5r/NThm/yMiRv8YFTD/GRcz/x8gPf89RHv/UVmG/4uOwf+QkcT/gn64/397uP+gmNP/b22q/317sP+GiLr/dn2t/zA0X/8dIU7/GRYx/xwaNf8ZGDf/NEB+/0lOd/98gq7/c3ik/2Fgi/9gYov/lpTF/01PeP9FQmP/UlN+/2Fnj/8ZGTT/Gho4/xgVMv8aGTT/HSA//xcaNP8yNlX/Zm6b/0xRev87Olz/Ojxs/3Fzq/9AQnf/NDNb/01Qe/9UX4v/ERYs/xUUKf8ZFTH/Ghcz/xkfPP8VHDT/KjFQ/3eCsf+Jj7b/dnei/4J9tP+VkMX/h4a6/42Muf+LkcD/Vmea/w8ULf8TGDH/GRYv/xsXNP8aHjv/GSQ//yYxT/9yfrD/lJnJ/6qp1f+wrdj/r6vW/66q1v+hotL/f4u//1Zpnf8UHTj/FRcz/xoWMv8eGzX/HSA6/yEnQv8rN1v/doO3/5idzP+lpdP/razW/66s1v+sq9b/oKbS/4GOxP9ZbZ3/ERw6/xsZM/8aFjL/GRYw/xoYMv8eIj7/KTZW/1JjmP+Wms7/ra7Y/7Cx2v+ur9n/pKbT/5efzf90hLv/SVuI/xYcOv8dGDT/Gxcy/x4ZMf8dGTH/HBoz/yAkQf86Sm//Y2+k/36Htv9xd6b/gIWy/2tyov9UX43/UGOK/ykzVv8hHjf/IR42/yEcNf8aGS//Gxgu/xkXLv8fGjf/HyI+/yg0VP88SWv/SVV2/1hhhv9HUnf/PUdm/yUsSP8hHjj/Hho1/x8aNP8hGzT/Ghkx/xsZMf8XFy//HRgz/xwYNP8cHDf/HyI9/z9GX/88Ql7/PkZg/zU8Tv9cW2f/MzBG/x4bM/8hGjT/HRky/wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAoAAAAIAAAAEAAAAABACAAAAAAAAAQAAASCwAAEgsAAAAAAAAAAAAALRgX/0QsKv8vICz/I2SU/x1Yrv8PGlX/Kjd3/2J0qv9mdaT/SGCL/x0qS/8FBRv/AQEU/wEBFP8BART/AAAO/wAAC/8AAA7/AQEU/wEBFP8BART/AAAO/wQMJv8XJFv/CQMU/wIBA/8LAwT/IRMV/yUVGf8aCA3/IRMV/yETFf84JSf/RCwq/xoVJf81gLL/FTiH/wAHOP8PGlX/Znmu/19zof8lNVv/AQEU/wMDE/8BART/AwMT/wkDFP8DAxP/AQEU/wMDE/8JAxT/CQMU/wMDE/8BART/AwMT/wUFG/8RAgr/AgED/wsDBP8hExX/JRUZ/xwMFP8lFRn/EQIK/0QsKv9ELCr/EgsW/yNDbv8bSpr/AQhI/wEISP9idKr/P1J5/wQMJv8CAQP/DAsU/wwLFP8UEx3/GhUl/xoZKf8TFCr/Ghkp/xMTJP8UEx3/DAsb/xAFFP8BART/AAAO/w0CDP8LAwT/GggN/yUVGf8oGyT/GhYq/xoWKv8VDSL/Ixsu/zglJ/8dERf/AwMT/ylGkP8AFWH/AQhI/0xejf8TGjr/EgsW/xILFv8UEx3/FBMd/xoZKf8kIzz/KS1N/yMqTP8pLU3/JCM8/xoWKv8TDRv/EgsW/wEBFP8JAxT/BQUb/w0CDP8cDBT/IRMV/xoWKv8WFS7/FhUu/xkWMf8WFjL/KBsk/zglJ/8NAgz/Iyta/xAfcf8ADVD/LDRh/xMTJP8MCxv/EAUU/xoVJf8jGy7/JCM8/yktTf8kLFP/IiZL/yImS/8kKkX/JCpF/x0dM/8UEx3/Ew0b/wwLG/8aFSX/Ew0b/xQTHf8aFSX/FhUu/xYWMv8ZFjH/HBYy/xkWMf8WFS7/LyAs/yETFf8CAQP/GiVL/xMeZv8WFjX/FBMd/wYQGv8TDRv/HRoy/zIzW/8zNmP/Ljlc/yMqTP8jKkz/KS1N/y00Wv84P2z/LTRa/xoZMv8TEyT/GRgu/xkYLv8VDSL/FhUp/xYVLv8WFjL/FhUu/xkWMf8cFjL/GRYx/xYWMv8jGy7/KBsk/w0CDP8JAxT/Cw4l/xYVKf8WFSn/ExMk/x0dM/8cIT3/Njts/0VMe/9ZWYj/Y12X/2Ndl/9ZWYj/QkR5/zE1af8fJVL/GRc5/xoZMv8aGTX/Ghk1/xoWKv8WFSn/FhUu/xYVLv8ZFjH/GRYx/xkWMf8WFjL/FhYy/xYWMv8dGS//HREX/wwLFP8MCxv/GRgu/xwhPf8eHjr/HR02/xYdOv8aJUv/Iyta/xUeTv8bHVn/LSxs/yMrWv8fJVL/LDRh/yU1W/8cJUX/HCVF/y00Wv8eHz3/HRo1/x4eOv8bHDv/GRYx/xkWMf8ZFjH/GRYx/xYWMv8WFjL/FhYy/xYWMv8ZGC7/Ih05/x0dNv8kKkX/HCVF/yIlRP8cJUX/JCxT/zQ7Y/80Q2r/JCxT/xwlRf8cJUX/IiZL/yEkU/8sNGH/PUN0/zM2Y/9JTHv/PUN0/zM2Y/82PFv/KS1N/0VLdf8aFzX/HBc0/xwXNP8ZFjH/FhYy/xYWMv8WFjL/FhY1/xoXNf9naJn/O0Nt/0FLa/80Q2r/OD9s/zE1af8xNWn/WlaT/2domf82O2z/HyVS/xoaSf8aGkn/ISRT/0ZIhP9cYJr/SFWI/0hViP9UW4v/SUx7/0VLdf8cJUX/UU6H/xkXOf8cFjL/FhUu/xYVLv8WFjL/FhYy/xYWNf8aFzX/IiVE/3t7tP80O2P/WmKM/2Jsm/9ibJv/XGCa/0ZIh/9GSIf/aGGl/0ZIh/9DP3z/VU2R/1pWk/9GSIT/WlaT/1half9JT5P/ZGOj/2prp/9cZJP/VmGO/yIlRP9RTof/KCZH/xkWMf8ZFjH/GRYu/xYVLv8WFjL/Ghc1/xoXNf8oJkf/ZGOj/zQ7Y/9tdKL/foS1/4KEtv97e7T/c26v/2Rjo/9kY6P/i4XE/4uFxP+ak8v/i4XE/3x5uv98ebr/aGGl/3Zys/97e7T/e3u0/2prp/9ibJv/MjNb/zY6cf8zNmP/Ghky/xYWMv8WFS7/FhUu/xYWMv8eHjr/Hh46/zIzW/9JT5P/NDtj/3N7q/+Ei7z/jI7B/5KUxP+LhcT/gHq4/3Nur/9zbrL/i4XE/7Cm3P+ak8v/dnKz/2hhpf92c67/gHy2/4iFu/+Ei7z/foS1/210ov80O2P/Njpx/ywzbP8WFjX/Ghky/xkWMf8dGjX/Ghc1/x4eOv8kKkX/PUN0/0ZIh/8tNFr/c3ur/4SLvP+XlMj/kpTE/5KUxP+Ljbv/iIW7/3t7tP+Aerj/pJ/U/5KMy/9qa6f/c3Sk/319rP99faz/hIe3/4uNu/+Eh7f/anao/yszU/8pK1j/HSpk/xYWNf8ZFjH/GRYx/xkWMf8aGTL/GRYx/xYdOv8qN3f/XGqk/yszU/9yeqT/jJPD/4uNu/+SlMT/foS1/210ov9zdKT/fX2s/2Rslf+kn9T/pJ/U/1lZiP9hY4z/WVmI/1RWe/9ZWYj/a3Oc/3J6pP9kbJX/Hh89/xoZNf8hJFP/FhYy/xkWMf8ZFjH/JCM8/xoZNf8aGTX/GRc5/x0qZP8qN3f/KS1N/2Rslf9rc5z/cnqk/2tznP9QWoP/Uk1z/1JNc/9JTHv/VFZ7/4B+qv+SlMT/QkVy/zIzW/8yNFD/Nik5/0E7Xf9CRXL/WmKM/1RWe/8iJUT/DAsb/xYVKf8aGTL/Ghc1/xYWMv8aGTL/Hh89/xscO/8eHz3/IiZL/xMaOv8LDiX/WmKM/3J6pP9aYoz/UFqD/1JNc/9KQlj/OjZO/zY8W/87Q23/c3ur/36Etf9FTHv/MjNb/ykrWP9GRmn/RkZp/0VLdf9NUn3/VmGO/xwhPf8MCxv/ExMk/xkWLv8ZFjH/GRYx/xYVLv8WFjX/IiVE/xwhPf8WFjL/FBMd/xMTJP9LWYD/c3ur/1xkk/9JTHv/RUt1/0JFcv8pK1j/LDRh/0ZIhP9kY6P/amun/1pWk/82O2z/JCxT/zM2Y/9NUn3/VFuL/1xplv9MXo3/Fh06/wwLG/8TEyT/GRYu/xkWMf8ZFjH/HRo1/xYWMv8VGjT/HCVF/xYdOv8aGSn/FhUp/01Sff9seaz/hIe3/3uCqv9rc5z/TVJ9/0lMe/9aVpP/e3u0/4iFu/+Ihbv/e3u0/3N0pP9zdKT/gH6q/4uNu/+Ei7z/anao/0xejf8TGjr/DAsb/xUZLP8aGTX/GRYx/xkWLv8cFjL/GRYx/xYWMv8cJUX/HCVF/wsWKv8LFir/O0Nt/2p2qP+Ei7z/mqDN/6Okyv+jpMr/oJvH/5eUyP+ak8v/o57P/6Oez/+ak8v/l5TI/5qczP+doM//lZvL/4WMxP9fc6H/SFWI/xYdOv8MCxv/CxYq/xUaNP8ZFi7/GRYu/xoXNf8aGTX/Gxw7/xscO/8dKkv/Fh06/xUZLP87Q23/ZnWk/36Etf+Mk8P/naDP/6mn1f+wq9b/r6vY/6+r2P+tqtX/sKvW/62q1f+tqtX/qafV/52f0P+Fkcb/dYS8/2J0qv9IVYj/IypM/wQMJv8VGjT/FhY1/xkWMf8ZFjH/HBYy/xkWMf8cIT3/Gxw7/yIlRP8UITv/FRo0/z9KbP9seaz/fYa8/4yTw/+anMz/pKXT/66t1/+wr9n/sK/Z/66t1/+urdf/rq3X/62q1f+pp9X/mpzM/4qWyf91hLz/YnSq/05jk/8jKkz/Cw4l/xUaNP8WFjL/GRYx/xkWMf8dGjX/HRo1/xoZNf8pLU3/JCM8/x4oRP8UITv/Q1J6/3F9tP+Ei7z/lZvL/5qczP+doM//pKXT/62q1f+tqtX/rarV/62q1f+tqtX/qq3X/6Sl0/+aoM3/ipbJ/3WEvP9mea7/VWiV/w8gQv8TFCr/Ghk1/xkWMf8ZFjH/GRYx/x0aNf8dHTb/Ghky/xscO/8kKkX/IiVE/x0qS/80Q2r/bHms/3qIwP+Vm8v/naDP/6Sl0/+tqtX/rq3X/66t1/+urdf/sK/Z/62q1f+qrdf/pKvU/5yi0v+Klsn/eojA/2J0qv9MXo3/ESNF/xUaNP8dGjL/Ghky/xkWMf8ZFjH/GRYx/x0aNf8aGTL/GRYx/xwhPf8eKET/HihE/yU1W/9TZJv/cX20/5Wby/+kpdP/qq3X/7Gx2v+xsdr/sbHa/7Gx2v+vsdr/qarW/6Sr1P+kq9T/nKLS/4WRxv91hLz/XGyd/0hViP8PIEL/FRo0/xoZMv8ZFjH/GRYx/xwXNP8WFSn/GRYx/xoZMv8aGTL/Ghk1/yQqRf8rM1P/NUNk/zlLdf9TZJv/hYzE/52f0P+pqtb/sK/Z/6+x2v+vsdr/r7Ha/6mq1v+kpdP/naDP/5Wby/+Mk8P/dYS8/2J0qv9VaJX/NENq/xscO/8aGTX/Ghc1/yIdOf8cFjL/Ghky/x0ZL/8dGjL/HRo1/xkYLv8ZFjH/HRo1/xwhPf8rM1P/R1V6/z9Sef9pc7D/fYa8/5Wby/+anMz/jJPD/4yTw/+Vm8v/i427/4SLvP9ze6v/Ymyb/1xsnf9cbJ3/VWiV/0tZgP8dKkv/HR02/yEcNf8dGjX/JR86/x0aNf8iGzX/HRkv/yEcNf8hHDX/GRYu/xoZMv8dGjL/HR02/x4fPf8rM1P/OUt1/0NSev9mdaT/ZnWk/2Jsm/9UW4v/VFuL/3J6pP9tdKL/XGmW/1Rbi/9FTHv/S1mA/0tZgP9DUnr/IypM/xscO/8iHTn/JyQ3/x0dM/8nJDf/IRw1/yIbNf8VGSz/GRgu/x0ZL/8dGS//GRgu/xkWLv8dGjX/HRo1/yQjPP8jKkz/Ljlc/zVDZP85S3X/Q1J6/0NSev9NUn3/XGST/2Rslf9QWoP/Q1J6/z9KbP9BS2v/NUNk/x4oRP8eHjr/HR02/x0aMv8dGjL/HRoy/x0aMv8hHDX/Ihs1/xkWLv8dHTP/GRgu/xkYLv8ZGC7/GRYu/xwWMv8lHzr/HR02/yIdOf8iJUT/IypM/zY8W/89RmX/SVVy/0lVcv9FS3X/VmGB/z9KbP9HVXr/P0ps/zY8W/8cIT3/Hh46/yQjPP8hHDX/IRw1/x0aNf8dGjL/Ih05/x0aMv8iGzX/HBYy/xoZMv8aGTL/HRkv/xkYLv8WFS7/IRw1/x0aNf8cFzT/HRo1/x4eOv8bHDv/Fh06/yQqRf9JUmv/SVJr/0ZGaf9JVXL/QUtr/0lSa/80OVf/FCE7/x0dNv8nJDf/JyQ3/yQjPP8dHTP/HRoy/x0aMv8dGjL/HRoy/xoZMv8ZFjH/HR0z/xoZMv8aGTL/GRYx/xYVLv8ZFjH/HBc0/xwXNP8aGTL/HRoy/x0dNv8eHjr/HCE9/zI0UP88Q1n/MjRQ/zI0UP80OVf/PENZ/ywySv9hYGf/ko+U/5mXnf9cXmv/Ih05/x0dM/8dGjX/Ihs1/yIbNf8dGjL/HRoy/wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA",
            encoding: "base64",
          },
          redirectURL: "",
          headersSize: 386,
          bodySize: 5430,
          _transferSize: 5816,
          _error: null,
        },
        serverIPAddress: "[2a00:1ed0:2:0:1:5bef:c83b:1]",
        startedDateTime: "2020-09-03T03:33:55.222Z",
        time: 142.72599999912927,
        timings: {
          blocked: 3.020999999827123,
          dns: -1,
          ssl: -1,
          connect: -1,
          send: 0.281,
          wait: 138.6279999999476,
          receive: 0.7959999993545352,
          _blocked_queueing: 2.4549999998271232,
        },
      },
    ],
  },
};
