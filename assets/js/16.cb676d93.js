(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{371:function(t,a,e){"use strict";e.r(a);var r=e(26),s=Object(r.a)({},(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"发布订阅"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#发布订阅"}},[t._v("#")]),t._v(" 发布订阅")]),t._v(" "),e("p",[t._v("redis 提供了发布订阅功能，发送者通过向 channel 发送消息，对应接收者可以获取消息。")]),t._v(" "),e("h2",{attrs:{id:"redis发布订阅特点"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#redis发布订阅特点"}},[t._v("#")]),t._v(" redis发布订阅特点")]),t._v(" "),e("ul",[e("li",[e("p",[t._v("redis 的发布订阅，接收者和发布者之间通过 channel 绑定。")])]),t._v(" "),e("li",[e("p",[t._v("channel 可以是指定的字符串，也可以是通配符形式。")]),t._v(" "),e("blockquote",[e("p",[t._v("比如配置 channel 为 new*，new1、new2 等都会收到消息。")])])]),t._v(" "),e("li",[e("p",[t._v("客户端可以订阅多个 channel。")])]),t._v(" "),e("li",[e("p",[t._v("发送者发送的消息无法持久化，消息存在丢失的可能。")])]),t._v(" "),e("li",[e("p",[t._v("消费者不会收到订阅 channel 之前的消息。")])]),t._v(" "),e("li",[e("p",[t._v("发送者发送消息后，不存在 ACK 确认机制，消息发送是不可靠的。")])])]),t._v(" "),e("h2",{attrs:{id:"适用场景"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#适用场景"}},[t._v("#")]),t._v(" 适用场景")]),t._v(" "),e("p",[t._v("由于 redis 的发布订阅功能比较简单，且不可靠，只建议在对可靠性要求不高的场景使用。若认为搭建 kafka、MQ 这种消息中间件过于笨重，在发送消息时可以考虑 redis。")]),t._v(" "),e("ul",[e("li",[t._v("消息推送")]),t._v(" "),e("li",[t._v("简单的消息通知。")])]),t._v(" "),e("h2",{attrs:{id:"使用命令"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#使用命令"}},[t._v("#")]),t._v(" 使用命令")]),t._v(" "),e("h3",{attrs:{id:"订阅"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#订阅"}},[t._v("#")]),t._v(" 订阅")]),t._v(" "),e("ul",[e("li",[e("p",[t._v("批量订阅")]),t._v(" "),e("p",[e("code",[t._v("SUBSCRIBE channel [channel ...]")])]),t._v(" "),e("p",[e("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/AlbertYang0801/pic-bed@main/img/20210726194236.png",alt:"image-20210726194235991"}})])]),t._v(" "),e("li",[e("p",[t._v("通配符订阅")]),t._v(" "),e("p",[e("code",[t._v("PSUBSCRIBE pattern [pattern ...]")])]),t._v(" "),e("p",[e("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/AlbertYang0801/pic-bed@main/img/20210726194220.png",alt:"image-20210726194220070"}})])])]),t._v(" "),e("h3",{attrs:{id:"发布"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#发布"}},[t._v("#")]),t._v(" 发布")]),t._v(" "),e("ul",[e("li",[e("p",[t._v("发送消息")]),t._v(" "),e("p",[e("code",[t._v("PUBLISH channel message")])]),t._v(" "),e("p",[e("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/AlbertYang0801/pic-bed@main/img/20210726194205.png",alt:"image-20210726194205596"}})])])]),t._v(" "),e("h2",{attrs:{id:"参考链接"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#参考链接"}},[t._v("#")]),t._v(" 参考链接")]),t._v(" "),e("p",[e("a",{attrs:{href:"https://zhuanlan.zhihu.com/p/59065399",target:"_blank",rel:"noopener noreferrer"}},[t._v("知乎-Redis 的发布订阅功能在 SpringBoot 中的应用"),e("OutboundLink")],1)])])}),[],!1,null,null,null);a.default=s.exports}}]);