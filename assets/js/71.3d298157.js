(window.webpackJsonp=window.webpackJsonp||[]).push([[71],{430:function(t,e,r){"use strict";r.r(e);var a=r(26),i=Object(a.a)({},(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("h3",{attrs:{id:"readlimiter限流"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#readlimiter限流"}},[t._v("#")]),t._v(" ReadLimiter限流")]),t._v(" "),r("p",[r("code",[t._v("ReadLimiter")]),t._v(" 是 "),r("code",[t._v("Guava")]),t._v(" 提供的一中限流工具，限流算法有两种：漏桶算法和令牌桶算法。"),r("code",[t._v("ReadLimiter")]),t._v(" 使用的是令牌桶算法。")]),t._v(" "),r("h4",{attrs:{id:"限流算法"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#限流算法"}},[t._v("#")]),t._v(" 限流算法")]),t._v(" "),r("ul",[r("li",[t._v("漏桶算法")])]),t._v(" "),r("blockquote",[r("p",[t._v("利用一个缓冲区，当有请求进入系统时，都先在缓存区保存，然后以固定速度流出缓冲区进行处理。")])]),t._v(" "),r("ul",[r("li",[t._v("令牌桶算法")])]),t._v(" "),r("blockquote",[r("p",[t._v("令牌桶算法是一种反向的漏桶算法，在令牌桶算法中，桶中存放的不是请求，而是令牌。处理程序只有在拿到令牌之后，才会对请求进行处理。如果没有令牌，那么处理程序要不等待令牌，要不丢弃请求。为了限流，该算法在每个单位会生成一定量的令牌存入桶中。通常桶的容量是有限的，为了限制流速，该算法在每个单位时间产生一定量的令牌存入桶中，但是令牌总数不会超过桶的容量。比如，若要求程序一秒处理一个请求，那么令牌桶一秒会生成一个令牌。")])]),t._v(" "),r("h4",{attrs:{id:"参考练习"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#参考练习"}},[t._v("#")]),t._v(" 参考练习")]),t._v(" "),r("p",[r("a",{attrs:{href:"https://gitee.com/zztiyjw/concurrent-practice/blob/master/src/test/java/com/albert/concurrent/book/chapterthree/RateLimiter_11.java",target:"_blank",rel:"noopener noreferrer"}},[t._v("ReadLimiter限流工具的练习"),r("OutboundLink")],1)])])}),[],!1,null,null,null);e.default=i.exports}}]);