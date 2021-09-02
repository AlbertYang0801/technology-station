(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{375:function(e,s,t){"use strict";t.r(s);var i=t(26),r=Object(i.a)({},(function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"redis常见问题"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#redis常见问题"}},[e._v("#")]),e._v(" redis常见问题")]),e._v(" "),t("h3",{attrs:{id:"_1-为什么-redis-采用单线程"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-为什么-redis-采用单线程"}},[e._v("#")]),e._v(" 1. 为什么 Redis 采用单线程？")]),e._v(" "),t("h3",{attrs:{id:"_2-redis-为什么那么快"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-redis-为什么那么快"}},[e._v("#")]),e._v(" 2. Redis 为什么那么快？")]),e._v(" "),t("ul",[t("li",[e._v("redis 是单线程的，减少了不必要的上下文切换，")]),e._v(" "),t("li",[e._v("redis 的核心是基于内存的，操作内存是非常快速的。")]),e._v(" "),t("li",[e._v("使用 I/O多路复用，非阻塞 IO。")]),e._v(" "),t("li",[e._v("完全基于内存，大部分请求就是内存操作。")]),e._v(" "),t("li",[e._v("数据结构简单，操作起来方便。")])]),e._v(" "),t("h3",{attrs:{id:"_3-如果-redis-中有-10-个-key-到达了过期时间-redis-会如何处理"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-如果-redis-中有-10-个-key-到达了过期时间-redis-会如何处理"}},[e._v("#")]),e._v(" 3. 如果 redis 中有 10 个 key 到达了过期时间，redis 会如何处理？")]),e._v(" "),t("ul",[t("li",[t("p",[e._v("惰性删除")]),e._v(" "),t("p",[e._v("在使用 get 或 setnx 等命令访问 key 时，若发现 key 过期，将 key 删除。")])]),e._v(" "),t("li",[t("p",[e._v("定时删除")]),e._v(" "),t("p",[e._v("redis 的定时删除，默认每隔 100 ms 执行一次（1s 执行10次），每次执行时长不超过 25 ms。会遍历所有数据库（默认 16 个），随即取出 20 个 key，删除 20 个 key 中过期的 key。若过期的 key   所占比例超过 1/4，重复操作。若整体操作时长超过默认的 25 ms，退出定期删除。")])]),e._v(" "),t("li",[t("p",[e._v("内存不够时删除")]),e._v(" "),t("p",[e._v("在内存不足时写入数据会进行内存淘汰，而 redis 的内存淘汰策略中有针对过期 key 删除的模式。假如设置了如下的四种模式，则会按照策略删除过期的 key。")]),e._v(" "),t("ol",[t("li",[t("p",[e._v("volatile-lru：对所有设置了过期时间的 key 使用 LRU 算法进行删除。")])]),e._v(" "),t("li",[t("p",[e._v("volatile-lfu：对所有设置了过期时间的 key 使用 LFU 算法进行删除。")])]),e._v(" "),t("li",[t("p",[e._v("volatile-random ：对所有设置了过期时间的 key 随机删除。")])]),e._v(" "),t("li",[t("p",[e._v("volatile-ttl：删除马上要过期的 key。")])])])])])])}),[],!1,null,null,null);s.default=r.exports}}]);