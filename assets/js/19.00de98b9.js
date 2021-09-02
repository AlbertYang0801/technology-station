(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{380:function(a,s,t){"use strict";t.r(s);var r=t(26),v=Object(r.a)({},(function(){var a=this,s=a.$createElement,t=a._self._c||s;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h1",{attrs:{id:"redis的持久化"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#redis的持久化"}},[a._v("#")]),a._v(" redis的持久化")]),a._v(" "),t("p",[a._v("redis 有 "),t("strong",[a._v("RDB")]),a._v(" 和 "),t("strong",[a._v("AOF")]),a._v(" 两种持久化方式。")]),a._v(" "),t("h2",{attrs:{id:"rdb"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#rdb"}},[a._v("#")]),a._v(" RDB")]),a._v(" "),t("p",[a._v("RDB 是 "),t("em",[a._v("Redis DataBase")]),a._v(" 的简称，指的是在指定时间间隔内将内存中的数据集快照写入磁盘文件，也就是 Snapshot 快照，RDB 是"),t("strong",[a._v("默认开启")]),a._v("的。")]),a._v(" "),t("h3",{attrs:{id:"rdb的原理"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#rdb的原理"}},[a._v("#")]),a._v(" RDB的原理")]),a._v(" "),t("p",[a._v("Redis 会单独创建 （fork）一个子进程来进行持久化操作，将内存中某一时刻的数据持久化到磁盘文件。这个子进程会先将数据写入到一个临时文件中，等待持久化进程结束后，再用这个临时文件替换掉磁盘文件。")]),a._v(" "),t("p",[t("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/AlbertYang0801/pic-bed@main/img/20210815192619.png",alt:""}})]),a._v(" "),t("p",[a._v("在整个过程中，"),t("strong",[a._v("主进程是不进行任何 IO 操作的")]),a._v("，这样保证了主进程存取的高性能。")]),a._v(" "),t("p",[a._v("RDB 的持久化过程每次都是"),t("strong",[a._v("全量存储")]),a._v("，但是 RDB 可能由于系统宕机等问题导致"),t("strong",[a._v("最后一次持久化的数据丢失")]),a._v("。")]),a._v(" "),t("h3",{attrs:{id:"rdb的同步策略"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#rdb的同步策略"}},[a._v("#")]),a._v(" RDB的同步策略")]),a._v(" "),t("p",[a._v("RDB 的配置文件存在 redis.conf 中。")]),a._v(" "),t("div",{staticClass:"language-java line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-java"}},[t("code",[a._v("#"),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("900")]),a._v("秒（"),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("15")]),a._v("分钟）后，如果至少有一个key更新\nsave "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("900")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("1")]),a._v("\n#"),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("300")]),a._v("秒（"),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("5")]),a._v("分钟）后，如果至少更改了"),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("10")]),a._v("个key \nsave "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("300")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("10")]),a._v("\n#"),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("60")]),a._v("秒后，如果至少"),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("10000")]),a._v("个key发生更改\nsave "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("60")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("10000")]),a._v("\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br"),t("span",{staticClass:"line-number"},[a._v("2")]),t("br"),t("span",{staticClass:"line-number"},[a._v("3")]),t("br"),t("span",{staticClass:"line-number"},[a._v("4")]),t("br"),t("span",{staticClass:"line-number"},[a._v("5")]),t("br"),t("span",{staticClass:"line-number"},[a._v("6")]),t("br")])]),t("p",[a._v("redis.conf 中配置内容如下：")]),a._v(" "),t("p",[t("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/AlbertYang0801/pic-bed@main/img/20210815192040.png",alt:"image-20210815192040662"}})]),a._v(" "),t("h3",{attrs:{id:"rdb如何恢复数据"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#rdb如何恢复数据"}},[a._v("#")]),a._v(" RDB如何恢复数据")]),a._v(" "),t("p",[a._v("RDB持久化的磁盘文件为 "),t("strong",[a._v("dump.rdb")]),a._v("，redis 在启动的时候会加载该文件中的数据到内存中。")]),a._v(" "),t("p",[t("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/AlbertYang0801/pic-bed@main/img/20210815194512.png",alt:"image-20210815191238865"}})]),a._v(" "),t("h3",{attrs:{id:"rdb的优缺点"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#rdb的优缺点"}},[a._v("#")]),a._v(" RDB的优缺点")]),a._v(" "),t("p",[t("strong",[a._v("RDB的优点")])]),a._v(" "),t("ol",[t("li",[a._v("适合大规模的数据恢复。")]),a._v(" "),t("li",[a._v("对数据完整性和一致性要求不高。")])]),a._v(" "),t("p",[t("strong",[a._v("RDB的缺点")])]),a._v(" "),t("ol",[t("li",[t("p",[a._v("存在"),t("strong",[a._v("丢失最后一次数据的风险")]),a._v("。")]),a._v(" "),t("p",[t("em",[a._v("若在最后一次数据持久化之前发生宕机清空，就会导致最后一次数据丢失。")])])]),a._v(" "),t("li",[t("p",[a._v("在持久化过程中，fork 子进程"),t("strong",[a._v("全量存储")]),a._v("内存中的数据，导致内存中的数据被全量复制了一份，占用内存空间。")])])]),a._v(" "),t("h2",{attrs:{id:"aof"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#aof"}},[a._v("#")]),a._v(" AOF")]),a._v(" "),t("p",[a._v("AOF 是 "),t("em",[a._v("Append Only File")]),a._v(" 的简称，指的是"),t("strong",[a._v("以日志的形式来记录每个写操作，将 Redis 执行过的所有写指令记录下来，读操作不记录")]),a._v("。")]),a._v(" "),t("h3",{attrs:{id:"aof的原理"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#aof的原理"}},[a._v("#")]),a._v(" AOF的原理")]),a._v(" "),t("p",[a._v("AOF 的机制只允许"),t("strong",[a._v("追加文件")]),a._v("但不可以改写文件，")]),a._v(" "),t("p",[a._v("redis 启动的时候会加载该日志文件，根据日志文件的内容将写指令从前到后执行一次以完成数据的恢复。")]),a._v(" "),t("p",[t("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/AlbertYang0801/pic-bed@main/img/20210815195213.png",alt:"img"}})]),a._v(" "),t("h3",{attrs:{id:"aof的开启"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#aof的开启"}},[a._v("#")]),a._v(" AOF的开启")]),a._v(" "),t("p",[a._v("AOF 保存的日志文件是 "),t("strong",[a._v("appendonly.aof")]),a._v(" 文件。")]),a._v(" "),t("p",[a._v("在 redis 中默认是不开启 AOF 的，可以在 "),t("strong",[a._v("redis.conf")]),a._v(" 修改配置 "),t("code",[a._v("appendpnly no")]),a._v(" 为 "),t("code",[a._v("appendonly yes")]),a._v(" 即可开启 AOF。")]),a._v(" "),t("p",[t("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/AlbertYang0801/pic-bed@main/img/20210815195638.png",alt:"image-20210815195638859"}})]),a._v(" "),t("h3",{attrs:{id:"aof的同步策略"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#aof的同步策略"}},[a._v("#")]),a._v(" AOF的同步策略")]),a._v(" "),t("p",[a._v("AOF包含三种同步策略。")]),a._v(" "),t("ol",[t("li",[t("p",[a._v("每次修改同步-"),t("code",[a._v("appendfsync always")])]),a._v(" "),t("p",[a._v("每次发生数据变更便记录到磁盘中，由于持久化频率高，所以性能较差。但是数据完整性比较好。")])]),a._v(" "),t("li",[t("p",[a._v("每秒同步-"),t("code",[a._v("appendfsync everysec")])]),a._v(" "),t("p",[a._v("异步每秒记录数据，若发生宕机。可能丢失一秒内的数据。")])]),a._v(" "),t("li",[t("p",[a._v("不同步-"),t("code",[a._v("appendfsync no")])]),a._v(" "),t("p",[a._v("从不同步。")])])]),a._v(" "),t("p",[t("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/AlbertYang0801/pic-bed@main/img/20210815200049.png",alt:"image-20210815200049012"}})]),a._v(" "),t("h3",{attrs:{id:"aof如何恢复数据"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#aof如何恢复数据"}},[a._v("#")]),a._v(" AOF如何恢复数据")]),a._v(" "),t("p",[a._v("AOF 的日志文件 "),t("strong",[a._v("appendonly.aof")]),a._v(" 默认存在 redis 的根目录下，也可以使用 "),t("code",[a._v("config get dir")]),a._v(" 命令查看目录。")]),a._v(" "),t("img",{staticStyle:{zoom:"50%"},attrs:{src:"https://cdn.jsdelivr.net/gh/AlbertYang0801/pic-bed@main/img/20210815200830.png",alt:"image-20210815200830024"}}),a._v(" "),t("p",[a._v("正常情况开启了 AOF 之后，redis 会加载日志文件，并从前向后执行日志文件中的写指令来恢复数据。")]),a._v(" "),t("p",[a._v("当异常情况 AOF 文件被写坏时，可以使用 "),t("code",[a._v("redis-check-aof --fix")]),a._v(" 命令进行修复，然后重启就可以重新加载数据。")]),a._v(" "),t("h3",{attrs:{id:"aof的重写原理"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#aof的重写原理"}},[a._v("#")]),a._v(" AOF的重写原理")]),a._v(" "),t("h4",{attrs:{id:"为什么需要重写"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#为什么需要重写"}},[a._v("#")]),a._v(" 为什么需要重写？")]),a._v(" "),t("p",[a._v("由于AOF采用的是日志追加方式，文件会越来越大，为避免文件过大，新增了重写机制。当 AOF 文件超过指定阀值的时候，AOF 就会启动内容压缩，只保留可以恢复数据的最小指令集。")]),a._v(" "),t("p",[t("em",[a._v("由于 AOF 每个写指令都追加到日志文件中，可能出现 AOF 文件出现多个相同 key 的写指令（内存中保存的是最后一个写指令的值），所以可以根据内存中的数据对 AOF 日志文件进行压缩。")])]),a._v(" "),t("h4",{attrs:{id:"重写原理"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#重写原理"}},[a._v("#")]),a._v(" 重写原理")]),a._v(" "),t("p",[a._v("当 AOF 文件超过指定阀值的时候，会 fork 出新进程来重写日志文件（重写过程类似 RDB，先写临时文件再替换）。遍历内存中的所有数据，针对每个数据生成写指令，存入 AOF 文件中。重写的过程读取的是内存中的数据，而不是旧的 AOF 文件，类似于 RDB 的存储方式。")]),a._v(" "),t("h4",{attrs:{id:"触发机制"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#触发机制"}},[a._v("#")]),a._v(" 触发机制")]),a._v(" "),t("p",[a._v("redis 会记录上次重写时的 AOF 日志文件大小，默认配置是"),t("strong",[a._v("当 AOF 日志文件大小是上次重写后大小的一倍并且文件大小大于 64 MB 时触发")]),a._v("。")]),a._v(" "),t("div",{staticClass:"language-java line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-java"}},[t("code",[a._v("#重写时候的百分比，默认是"),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("100")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("%")]),a._v("\nauto"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-")]),a._v("aof"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-")]),a._v("rewrite"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-")]),a._v("percentage "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("100")]),a._v("\n#日志文件最小大小\nauto"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-")]),a._v("aof"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-")]),a._v("rewrite"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-")]),a._v("min"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-")]),a._v("size "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("64")]),a._v("mb\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br"),t("span",{staticClass:"line-number"},[a._v("2")]),t("br"),t("span",{staticClass:"line-number"},[a._v("3")]),t("br"),t("span",{staticClass:"line-number"},[a._v("4")]),t("br")])]),t("p",[a._v("该配置在 redis.conf 中如下所示：")]),a._v(" "),t("p",[t("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/AlbertYang0801/pic-bed@main/img/20210815202530.png",alt:"image-20210815202530766"}})]),a._v(" "),t("h3",{attrs:{id:"aof的优缺点"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#aof的优缺点"}},[a._v("#")]),a._v(" AOF的优缺点")]),a._v(" "),t("p",[t("strong",[a._v("AOF的优点")])]),a._v(" "),t("ol",[t("li",[a._v("AOF 的数据完整性和实时性比较好。")]),a._v(" "),t("li",[a._v("AOF 存在重写压缩机制，保证日志文件不至于过大。")])]),a._v(" "),t("p",[t("strong",[a._v("AOF的缺点")])]),a._v(" "),t("ol",[t("li",[a._v("根据 AOF 的同步策略，"),t("strong",[a._v("可能会丢失最后一条数据或最后一秒的数据")]),a._v("。")]),a._v(" "),t("li",[a._v("相同大小的数据，AOF 文件要远大于 RDB 文件，恢复速度也小于 RDB 文件。")]),a._v(" "),t("li",[a._v("AOF 运行效率低于 AOF，每秒同步一次效率较好。")])]),a._v(" "),t("h2",{attrs:{id:"rdb和aof的对比"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#rdb和aof的对比"}},[a._v("#")]),a._v(" RDB和AOF的对比")]),a._v(" "),t("p",[a._v("RDB 持久化方式能够在"),t("strong",[a._v("指定时间间隔内对数据进行快照存储")]),a._v("。")]),a._v(" "),t("p",[a._v("AOF 持久化方式"),t("strong",[a._v("记录每次写指令")]),a._v("，当服务器重启时按照顺序执行这些写指令来恢复数据。其中 AOF 还存在"),t("strong",[a._v("重写压缩")]),a._v("机制，保证 AOF 文件不至于过大。")]),a._v(" "),t("h3",{attrs:{id:"同时开启时的生效规则"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#同时开启时的生效规则"}},[a._v("#")]),a._v(" 同时开启时的生效规则")]),a._v(" "),t("p",[a._v("当同时开启 RDB（默认开启） 和 AOF（手动开启） 时，redis 会"),t("strong",[a._v("优先载入 AOF 文件来恢复数据")]),a._v("，也就是以 AOF 文件数据为准。")]),a._v(" "),t("p",[a._v("因为 AOF 的日志文件数据保存比较完整，而 RDB 的数据并不实时，所以同时开启时会以 AOF 文件为准。")]),a._v(" "),t("h3",{attrs:{id:"如何选择持久化方式"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#如何选择持久化方式"}},[a._v("#")]),a._v(" 如何选择持久化方式")]),a._v(" "),t("blockquote",[t("p",[a._v("因为RDB文件只用作后备用途，建议只在Slave上持久化RDB文件，而且只要15分钟备份一次就够了，只保留save 900 1这条规则。")]),a._v(" "),t("p",[a._v("如果Enalbe AOF，好处是在最恶劣情况下也只会丢失不超过两秒数据，启动脚本较简单只load自己的AOF文件就可以了。代价一是带来了持续的IO，二是AOF rewrite的最后将rewrite过程中产生的新数据写到新文件造成的阻塞几乎是不可避免的。只要硬盘许可，应该尽量减少AOF rewrite的频率，AOF重写的基础大小默认值64M太小了，可以设到5G以上。默认超过原大小100%大小时重写可以改到适当的数值。")]),a._v(" "),t("p",[a._v("如果不Enable AOF ，仅靠Master-Slave Replication 实现高可用性也可以。能省掉一大笔IO也减少了rewrite时带来的系统波动。代价是如果Master/Slave同时倒掉，会丢失十几分钟的数据，启动脚本也要比较两个Master/Slave中的RDB文件，载入较新的那个。新浪微博就选用了这种架构")])]),a._v(" "),t("ul",[t("li",[a._v("如果 redis 只做缓存，则可以不用任何持久化方式。")]),a._v(" "),t("li",[a._v("若作为后备数据库使用，最好使用 RDB，因为 AOF 不断变化不容易备份。")]),a._v(" "),t("li",[a._v("最好同时开启 AOF 和 RDB，其中 AOF 保证数据完整，RDB 作为后备使用。")])])])}),[],!1,null,null,null);s.default=v.exports}}]);