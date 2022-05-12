(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{387:function(v,e,_){"use strict";_.r(e);var t=_(26),i=Object(t.a)({},(function(){var v=this,e=v.$createElement,_=v._self._c||e;return _("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[_("h1",{attrs:{id:"过期策略"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#过期策略"}},[v._v("#")]),v._v(" 过期策略")]),v._v(" "),_("p",[v._v("在 Redis 中设置了过期时间的 key，在一定时间后都会被删除。")]),v._v(" "),_("h2",{attrs:{id:"键的过期时间"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#键的过期时间"}},[v._v("#")]),v._v(" 键的过期时间")]),v._v(" "),_("h3",{attrs:{id:"配置过期时间"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#配置过期时间"}},[v._v("#")]),v._v(" 配置过期时间")]),v._v(" "),_("ol",[_("li",[_("p",[_("code",[v._v("setex key seconds value")])]),v._v(" "),_("p",[v._v("设置 key 时添加过期时间")])]),v._v(" "),_("li",[_("p",[_("code",[v._v("expire key seconds")])]),v._v(" "),_("p",[v._v("为某个 key 设置过期时间。")])]),v._v(" "),_("li",[_("p",[v._v("删除 key 的过期时间。")]),v._v(" "),_("p",[_("code",[v._v("persist key")])])]),v._v(" "),_("li",[_("p",[v._v("查看 key 的过期时间")]),v._v(" "),_("p",[_("code",[v._v("ttl key")])])])]),v._v(" "),_("h3",{attrs:{id:"redis保存过期时间分析"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#redis保存过期时间分析"}},[v._v("#")]),v._v(" redis保存过期时间分析")]),v._v(" "),_("p",[v._v("版权声明：本文为CSDN博主「梦里寻乡」的原创文章，遵循CC 4.0 BY-SA版权协议，转载请附上原文出处链接及本声明。\n原文链接：https://blog.csdn.net/jiangchunhui2009/article/details/81504073")]),v._v(" "),_("p",[_("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/AlbertYang0801/pic-bed@main/img/20210725130918.png",alt:"image-20210725130918678"}})]),v._v(" "),_("p",[_("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/AlbertYang0801/pic-bed@main/img/20210725130928.png",alt:"img"}})]),v._v(" "),_("p",[_("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/AlbertYang0801/pic-bed@main/img/20210725130949.png",alt:"image-20210725130949790"}})]),v._v(" "),_("p",[_("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/AlbertYang0801/pic-bed@main/img/20210725131004.png",alt:"image-20210725131004651"}})]),v._v(" "),_("h2",{attrs:{id:"三种过期策略"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#三种过期策略"}},[v._v("#")]),v._v(" 三种过期策略")]),v._v(" "),_("ol",[_("li",[_("p",[v._v("定时删除")]),v._v(" "),_("ul",[_("li",[_("p",[v._v("含义")]),v._v(" "),_("p",[v._v("设置 key 过期时间时，为 key 创建一个定时器，当这个 key 到达过期时间时，定时器会将其删除。")])]),v._v(" "),_("li",[_("p",[v._v("优点")]),v._v(" "),_("p",[v._v("保证过期的 key 能够及时被删除，释放内存空间。（以时间换空间）")])]),v._v(" "),_("li",[_("p",[v._v("缺点")]),v._v(" "),_("ul",[_("li",[v._v("由于每个设置了过期时间的 key 都有一个定时器，会严重影响性能。")]),v._v(" "),_("li",[v._v("定时器删除 key 的操作会占用 CPU 资源，在高并发情况下影响 CPU 性能。")])])])])]),v._v(" "),_("li",[_("p",[v._v("惰性删除")]),v._v(" "),_("ul",[_("li",[_("p",[v._v("含义")]),v._v(" "),_("p",[v._v("在 key 过期的时候不会主动删除，而是在使用 key 的时候，先检查 key 是否过期，若过期，则删除这个 key 并返回 null。")])]),v._v(" "),_("li",[_("p",[v._v("优点")]),v._v(" "),_("p",[v._v("key 过期后只有在再次使用的时候才会将其删除，大大减小了 CPU 资源的使用。（以空间换时间）")])]),v._v(" "),_("li",[_("p",[v._v("缺点")]),v._v(" "),_("p",[v._v("若大量的 key 过期之后，若很长时间不使用，则 key 在内存中无法被删除，容易造成内存泄露。")])])])]),v._v(" "),_("li",[_("p",[v._v("定期删除")]),v._v(" "),_("ul",[_("li",[_("p",[v._v("含义")]),v._v(" "),_("p",[v._v("每个一段时间主动执行删除过期 key 的操作。")])]),v._v(" "),_("li",[_("p",[v._v("优点")]),v._v(" "),_("ul",[_("li",[v._v("定期删除过期 key，能保证内存泄露不会发生，解决了惰性删除的缺点。（时间和空间的折中）")]),v._v(" "),_("li",[v._v("通过定期来限制删除过期 key 的频率和时长，来减少 CPU 资源的使用。")])])]),v._v(" "),_("li",[_("p",[v._v("缺点")]),v._v(" "),_("ul",[_("li",[v._v("在 CPU 时间优化，不如惰性删除。")]),v._v(" "),_("li",[v._v("在内存空间优化上，不如定时删除。")])])]),v._v(" "),_("li",[_("p",[v._v("难点")]),v._v(" "),_("ul",[_("li",[v._v("合理的设置定期删除的执行时间和执行频率")])])])])])]),v._v(" "),_("h2",{attrs:{id:"redis采用的过期策略"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#redis采用的过期策略"}},[v._v("#")]),v._v(" redis采用的过期策略")]),v._v(" "),_("p",[v._v("redis 采用的是 "),_("strong",[v._v("定期删除 + 惰性删除")]),v._v("。")]),v._v(" "),_("h3",{attrs:{id:"redis-的定期删除"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#redis-的定期删除"}},[v._v("#")]),v._v(" redis 的定期删除")]),v._v(" "),_("p",[v._v("redis会将每个设置了过期时间的 key 放入独立的字典中，默认每隔 100 ms 进行一次扫描（1s 中执行 10 次），每次扫描的任务时间是 25ms 。")]),v._v(" "),_("ol",[_("li",[v._v("遍历每个数据库（redis 默认数据库 16 个）。")]),v._v(" "),_("li",[v._v("从数据库随机抽取 20 个 key。")]),v._v(" "),_("li",[v._v("删除这 20 个 key 中过期的 key。")]),v._v(" "),_("li",[v._v("如果过期的 key 存在比例超过 1/4，重复步骤。")]),v._v(" "),_("li",[v._v("判断定期删除操作是否达到指定的操作时长，若达到，退出定期删除。")])]),v._v(" "),_("p",[_("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/AlbertYang0801/pic-bed@main/img/20210724225045.png",alt:"image-20210724225045790"}})]),v._v(" "),_("blockquote",[_("p",[v._v("来自知乎 - https://zhuanlan.zhihu.com/p/91212102")])]),v._v(" "),_("h3",{attrs:{id:"redis-的惰性删除"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#redis-的惰性删除"}},[v._v("#")]),v._v(" redis 的惰性删除")]),v._v(" "),_("ul",[_("li",[v._v("在进行 get 或者 setnx 等操作时，会先检查 key 是否过期。")]),v._v(" "),_("li",[v._v("若过期，先删除 key ，再执行相应操作。")]),v._v(" "),_("li",[v._v("若未过期，执行相应操作。")])]),v._v(" "),_("h3",{attrs:{id:"rdb-对过期-key-的处理"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#rdb-对过期-key-的处理"}},[v._v("#")]),v._v(" RDB 对过期 key 的处理")]),v._v(" "),_("ul",[_("li",[_("p",[v._v("从 内存 -> RDB 文件")]),v._v(" "),_("p",[v._v("持久化 key 之前，会判断 key 是否过期，过期的 key 不存入 RDB 文件。")])]),v._v(" "),_("li",[_("p",[v._v("从 RDB 文件 -> 内存")]),v._v(" "),_("p",[v._v("数据存入内存数据库之前，会检查 key 是否过期，若过期，不导入内存数据库。（主库情况）")])])]),v._v(" "),_("h3",{attrs:{id:"aof-对过期-key-的处理"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#aof-对过期-key-的处理"}},[v._v("#")]),v._v(" AOF 对过期 key 的处理")]),v._v(" "),_("ul",[_("li",[_("p",[v._v("从内存 -> AOF 文件")]),v._v(" "),_("ul",[_("li",[v._v("当 key 过期后，还没被删除的话，此时进行执行持久化操作（该 key 没有 aof 文件，因为没有发生修改）。")]),v._v(" "),_("li",[v._v("当 key 过期后，在发生删除时，程序会向 AOF 文件追加一条 del 命令（在将来从 AOF 文件恢复数据时该过期键会被删除）。")])])]),v._v(" "),_("li",[_("p",[v._v("AOF 文件重写")]),v._v(" "),_("ul",[_("li",[v._v("重写时，会先判断 key 是否过期，已过期的 key 不会重写到 AOF 文件。")])])])])])}),[],!1,null,null,null);e.default=i.exports}}]);