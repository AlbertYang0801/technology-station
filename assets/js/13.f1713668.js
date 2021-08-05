(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{373:function(e,v,_){"use strict";_.r(v);var t=_(26),a=Object(t.a)({},(function(){var e=this,v=e.$createElement,_=e._self._c||v;return _("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[_("h1",{attrs:{id:"redis五大数据类型"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#redis五大数据类型"}},[e._v("#")]),e._v(" redis五大数据类型")]),e._v(" "),_("p",[_("a",{attrs:{href:"https://gitee.com/zztiyjw/JavaAdvanced/tree/master/redis-practice#/zztiyjw/JavaAdvanced/blob/master/redis-practice/src/test/java/com/albert/redis/datastructure/DataStructureTest.java",target:"_blank",rel:"noopener noreferrer"}},[e._v("练习代码地址  redis-practice"),_("OutboundLink")],1)]),e._v(" "),_("h2",{attrs:{id:"一、键-key"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#一、键-key"}},[e._v("#")]),e._v(" 一、键 - key")]),e._v(" "),_("p",[e._v("在了解数据类型之前，先了解一下 redis 的键。")]),e._v(" "),_("p",[e._v("在 redis 中 命令不区分大小写，但是注意 "),_("strong",[e._v("redis 中的 key 和 value 是区分大小写的")]),e._v("。")]),e._v(" "),_("p",[_("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/AlbertYang0801/pic-bed@main/img/20210718224605.png",alt:"image-20210715161837066"}})]),e._v(" "),_("h2",{attrs:{id:"二、字符串-string"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#二、字符串-string"}},[e._v("#")]),e._v(" 二、字符串 - string")]),e._v(" "),_("p",[e._v("字符串数据结构是简单的 K-V 模式数据结构。")]),e._v(" "),_("h3",{attrs:{id:"特点"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#特点"}},[e._v("#")]),e._v(" 特点")]),e._v(" "),_("ul",[_("li",[e._v("单值单 value。")]),e._v(" "),_("li",[e._v("二进制安全，可以包含任何数据。")]),e._v(" "),_("li",[e._v("一个键对应 value 值最大能存储数据 512 MB。")])]),e._v(" "),_("h3",{attrs:{id:"常用命令"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#常用命令"}},[e._v("#")]),e._v(" 常用命令")]),e._v(" "),_("p",[_("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/AlbertYang0801/pic-bed@main/img/20210715163125.png",alt:"image-20210715141418272"}})]),e._v(" "),_("ul",[_("li",[e._v("设置字符串 -  "),_("code",[e._v("set test 100")])]),e._v(" "),_("li",[e._v("查询字符串  - "),_("code",[e._v("get test")])]),e._v(" "),_("li",[e._v("删除字符串 - "),_("code",[e._v("del test")])]),e._v(" "),_("li",[e._v("追加字符串 - "),_("code",[e._v("append test")])]),e._v(" "),_("li",[e._v("查询字符串长度 -  "),_("code",[e._v("strlen test")])]),e._v(" "),_("li",[e._v("批量添加 - "),_("code",[e._v("mset A 1 B 2")])]),e._v(" "),_("li",[e._v("批量获取 - "),_("code",[e._v("mget A B")])]),e._v(" "),_("li",[e._v("先查询再设置 - "),_("code",[e._v("getset hello world")])])]),e._v(" "),_("p",[_("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/AlbertYang0801/pic-bed@main/img/20210715141320.png",alt:"image-20210715141320878"}})]),e._v(" "),_("hr"),e._v(" "),_("h3",{attrs:{id:"自增自减命令"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#自增自减命令"}},[e._v("#")]),e._v(" 自增自减命令")]),e._v(" "),_("p",[e._v("由于 redis 是基于单线程的，这些增减命令都具有原子性。")]),e._v(" "),_("p",[e._v("注意命令只能操作 value 是数字的 key 值。")]),e._v(" "),_("ul",[_("li",[e._v("自增1 -  "),_("code",[e._v("incr count")])]),e._v(" "),_("li",[e._v("自减1 - "),_("code",[e._v("decr count")])]),e._v(" "),_("li",[e._v("自增指定值 - "),_("code",[e._v("incrby count 10")])]),e._v(" "),_("li",[e._v("自减指定值 - "),_("code",[e._v("decrby count 10")])])]),e._v(" "),_("p",[_("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/AlbertYang0801/pic-bed@main/img/20210715141702.png",alt:"image-20210715141702887"}})]),e._v(" "),_("blockquote",[_("p",[e._v("incr 和 decr 命令应用场景很广泛，可用于点赞数量统计等场景。")])]),e._v(" "),_("hr"),e._v(" "),_("ul",[_("li",[e._v("查询字符串指定区间 - "),_("code",[e._v("getrange key start end")])]),e._v(" "),_("li",[e._v("设置字符串指定区间 - "),_("code",[e._v("setrange key offset value")])]),e._v(" "),_("li",[e._v("设置可过期字符串（秒） - "),_("code",[e._v("setex key seconds value")])]),e._v(" "),_("li",[e._v("值不存在可设置 - "),_("code",[e._v("setnx key value")])]),e._v(" "),_("li",[e._v("批量设置值不存在可设置 - "),_("code",[e._v("msetnx key value [key value ...]")])])]),e._v(" "),_("p",[_("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/AlbertYang0801/pic-bed@main/img/20210715144700.png",alt:"image-20210715144700772"}})]),e._v(" "),_("h3",{attrs:{id:"数据结构"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#数据结构"}},[e._v("#")]),e._v(" 数据结构")]),e._v(" "),_("p",[e._v("String 的数据结构是简单动态字符串（Simplie Dynamic String，SDS），是可以动态修改的字符串，类似 ArrayList，采用预分配冗余空间的方式来减少内存的频繁分配。")]),e._v(" "),_("p",[_("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/AlbertYang0801/pic-bed@main/img/20210726163144.png",alt:""}})]),e._v(" "),_("p",[e._v("内存中分配给当前字符串的容量 capacity 一般要高于实际字符串长度。")]),e._v(" "),_("ul",[_("li",[e._v("当字符串长度 < 1MB 时，扩容时当前空间加倍。")]),e._v(" "),_("li",[e._v("当字符串长度 > 1MB 时，扩容时一次增加 1MB 的空间。")]),e._v(" "),_("li",[e._v("字符串最大限制长度为 512MB。")])]),e._v(" "),_("h3",{attrs:{id:"实战总结"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#实战总结"}},[e._v("#")]),e._v(" 实战总结")]),e._v(" "),_("ol",[_("li",[_("p",[e._v("点赞数量")]),e._v(" "),_("ul",[_("li",[_("p",[e._v("新增点赞")]),e._v(" "),_("p",[_("code",[e._v("incr read")])])]),e._v(" "),_("li",[_("p",[e._v("点赞总数")]),e._v(" "),_("p",[_("code",[e._v("get read")])])])])]),e._v(" "),_("li",[_("p",[e._v("文章阅读量")])])]),e._v(" "),_("h2",{attrs:{id:"三、列表-list"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#三、列表-list"}},[e._v("#")]),e._v(" 三、列表 - list")]),e._v(" "),_("p",[e._v("list 是类似双端链表或双端队列的数据结构。")]),e._v(" "),_("h3",{attrs:{id:"特点-2"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#特点-2"}},[e._v("#")]),e._v(" 特点")]),e._v(" "),_("ul",[_("li",[e._v("类似双向链表或双端队列，可以在列表左右两边操作数据。")]),e._v(" "),_("li",[e._v("单值对应多 value。")]),e._v(" "),_("li",[e._v("列表是有序的，按照 value 插入数据对 value 排序。")]),e._v(" "),_("li",[e._v("列表存放的 value 可重复。")])]),e._v(" "),_("p",[e._v("​\t\t"),_("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/AlbertYang0801/pic-bed@main/img/20210715163205.png",alt:"image-20210715163205871"}})]),e._v(" "),_("h3",{attrs:{id:"常用命令-2"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#常用命令-2"}},[e._v("#")]),e._v(" 常用命令")]),e._v(" "),_("ul",[_("li",[e._v("列表左边增加元素 - "),_("code",[e._v("lpush key element [element ...]")])]),e._v(" "),_("li",[e._v("列表右边增加元素 - "),_("code",[e._v("rpush key element [element ...]")])]),e._v(" "),_("li",[e._v("列表左边删除元素 - "),_("code",[e._v("lpop key")])]),e._v(" "),_("li",[e._v("列表右边删除元素 - "),_("code",[e._v("rpop key")])]),e._v(" "),_("li",[e._v("遍历列表（开始～结束） - "),_("code",[e._v("lrange key start stop")])]),e._v(" "),_("li",[e._v("获取列表指定位置元素 - "),_("code",[e._v("lindex key index")])]),e._v(" "),_("li",[e._v("查询列表长度 - "),_("code",[e._v("llen key")])]),e._v(" "),_("li",[e._v("删除多个相同 value - "),_("code",[e._v("lrem key count element")])])]),e._v(" "),_("p",[_("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/AlbertYang0801/pic-bed@main/img/20210715172144.png",alt:"image-20210715172121562"}})]),e._v(" "),_("ul",[_("li",[e._v("截取列表重新赋值 - "),_("code",[e._v("ltrim key start stop")])]),e._v(" "),_("li",[e._v("从源列表右边提取元素放到目的列表 - "),_("code",[e._v("rpoplpush source destination")])]),e._v(" "),_("li",[e._v("修改列表指定位置 value - "),_("code",[e._v("lset key index element")])]),e._v(" "),_("li",[e._v("在列表指定位置前或后添加元素 - "),_("code",[e._v("linsert key BEFORE|AFTER pivot element")])])]),e._v(" "),_("p",[_("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/AlbertYang0801/pic-bed@main/img/20210715172911.png",alt:"image-20210715172911836"}})]),e._v(" "),_("h3",{attrs:{id:"实战总结-2"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#实战总结-2"}},[e._v("#")]),e._v(" 实战总结")]),e._v(" "),_("ol",[_("li",[_("p",[e._v("公众号文章订阅")]),e._v(" "),_("ul",[_("li",[_("p",[e._v("新增文章")]),e._v(" "),_("p",[_("code",[e._v("lpush code java css")])])]),e._v(" "),_("li",[_("p",[e._v("获取推送的最近5篇文章")]),e._v(" "),_("p",[_("code",[e._v("lrange code 0 4")])])])])])]),e._v(" "),_("h2",{attrs:{id:"四、哈希表-hash"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#四、哈希表-hash"}},[e._v("#")]),e._v(" 四、哈希表 - hash")]),e._v(" "),_("p",[e._v("hash 的数据结构也是 K-V 模式，但是 hash 的 V 对应 K-V，也就是 "),_("strong",[e._v("K-（K-V）")]),e._v("，适合存储对象。比如存储用户信息，K 是用户Id，V 是用户信息。")]),e._v(" "),_("h3",{attrs:{id:"特点-3"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#特点-3"}},[e._v("#")]),e._v(" 特点")]),e._v(" "),_("ul",[_("li",[e._v("数据结构特点是 K -（K-V），K 和 V 都是字符串类型。")])]),e._v(" "),_("p",[_("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/AlbertYang0801/pic-bed@main/img/20210718224641.png",alt:""}})]),e._v(" "),_("h3",{attrs:{id:"常用命令-3"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#常用命令-3"}},[e._v("#")]),e._v(" 常用命令")]),e._v(" "),_("ul",[_("li",[e._v("添加元素 - "),_("code",[e._v("hset key field value [field value ...]")])]),e._v(" "),_("li",[e._v("获取元素- "),_("code",[e._v("hget key field")])]),e._v(" "),_("li",[e._v("向哈希表批量添加元素 - "),_("code",[e._v("hmset key field value [field value ...]")])]),e._v(" "),_("li",[e._v("批量获取哈希表元素 - "),_("code",[e._v("hmget key field [field ...]")])]),e._v(" "),_("li",[e._v("获取哈希表所有元素 - "),_("code",[e._v("hgetall key")])]),e._v(" "),_("li",[e._v("删除哈希表中的元素 - "),_("code",[e._v("hdel key field [field ...]")])]),e._v(" "),_("li",[e._v("获取哈希表长度 - "),_("code",[e._v("hlen key")])]),e._v(" "),_("li",[e._v("判断哈希表中是否存在某个 key - "),_("code",[e._v("hexists key field")])]),e._v(" "),_("li",[e._v("获取哈希表所有 key - "),_("code",[e._v("hkeys key")])]),e._v(" "),_("li",[e._v("获取哈希表指定 key 的所有 value - "),_("code",[e._v("hvals key")])]),e._v(" "),_("li",[e._v("增加哈希表指定 key 的 value（value 必须是数值，增加整数）- "),_("code",[e._v("hincrby key field increment")])]),e._v(" "),_("li",[e._v("增加哈希表指定 key 的 value （value 必须是数值，支持浮点数）- "),_("code",[e._v("hincrbyfloat key field increment")])]),e._v(" "),_("li",[e._v("对哈希表某个 key 赋值（key 值不存在进行赋值，key 值存在此命令无效）-")])]),e._v(" "),_("p",[_("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/AlbertYang0801/pic-bed@main/img/20210718210828.png",alt:"image-20210718210828555"}})]),e._v(" "),_("h3",{attrs:{id:"实战总结-3"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#实战总结-3"}},[e._v("#")]),e._v(" 实战总结")]),e._v(" "),_("ol",[_("li",[_("p",[e._v("购物车")]),e._v(" "),_("ul",[_("li",[_("p",[e._v("添加商品")]),e._v(" "),_("p",[_("code",[e._v("hset shopcart 10001 1")])])]),e._v(" "),_("li",[_("p",[e._v("增加商品数量")]),e._v(" "),_("p",[_("code",[e._v("hincreby shopcart 10001 1")])])]),e._v(" "),_("li",[_("p",[e._v("统计购物车商品总数")]),e._v(" "),_("p",[_("code",[e._v("hlen shopcar")])])]),e._v(" "),_("li",[_("p",[e._v("删除商品")]),e._v(" "),_("p",[_("code",[e._v("hdel shopcart 10001")])])]),e._v(" "),_("li",[_("p",[e._v("获取购物车列表")]),e._v(" "),_("p",[_("code",[e._v("hgetall shopcart")])])])])])]),e._v(" "),_("h2",{attrs:{id:"五、无序集合-set"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#五、无序集合-set"}},[e._v("#")]),e._v(" 五、无序集合 - set")]),e._v(" "),_("p",[e._v("set 是一种无序集合，存储元素无序并且不可重复。")]),e._v(" "),_("h3",{attrs:{id:"特点-4"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#特点-4"}},[e._v("#")]),e._v(" 特点")]),e._v(" "),_("ul",[_("li",[e._v("单值对应多 value。")]),e._v(" "),_("li",[e._v("set 集合存放元素是"),_("strong",[e._v("无序")]),e._v("的。")]),e._v(" "),_("li",[e._v("set 集合存放的元素是"),_("strong",[e._v("不可重复的")]),e._v("。")])]),e._v(" "),_("p",[_("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/AlbertYang0801/pic-bed@main/img/20210718224733.png",alt:"image-20210718224733903"}})]),e._v(" "),_("h3",{attrs:{id:"常用命令-4"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#常用命令-4"}},[e._v("#")]),e._v(" 常用命令")]),e._v(" "),_("ul",[_("li",[e._v("添加元素 - "),_("code",[e._v("sadd key member [member ...]")])]),e._v(" "),_("li",[e._v("遍历集合元素 - "),_("code",[e._v("smembers key")])]),e._v(" "),_("li",[e._v("判断某个元素是否存在集合中 - "),_("code",[e._v("sismember key member")])]),e._v(" "),_("li",[e._v("获取集合中元素个数 - "),_("code",[e._v("scard key")])]),e._v(" "),_("li",[e._v("删除集合元素 - "),_("code",[e._v("srem key member [member ...]")])]),e._v(" "),_("li",[e._v("从集合从随机获取几个数（不删除）- "),_("code",[e._v("srandmember key [count]")])]),e._v(" "),_("li",[e._v("集合元素随机出栈 - "),_("code",[e._v("spop key [count]")])]),e._v(" "),_("li",[e._v("将一个集合内的某个值赋给另一个集合 - "),_("code",[e._v("smove source destination member")])])]),e._v(" "),_("p",[_("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/AlbertYang0801/pic-bed@main/img/20210718203023.png",alt:"image-20210718203023584"}})]),e._v(" "),_("h3",{attrs:{id:"数据集合类"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#数据集合类"}},[e._v("#")]),e._v(" 数据集合类")]),e._v(" "),_("ul",[_("li",[_("p",[e._v("差集 - "),_("code",[e._v("sdiff key [key ...]")])])]),e._v(" "),_("li",[_("p",[e._v("交集 - "),_("code",[e._v("sinter key [key ...]")])])]),e._v(" "),_("li",[_("p",[e._v("并集 - "),_("code",[e._v("sunion key [key ...]")])])])]),e._v(" "),_("p",[_("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/AlbertYang0801/pic-bed@main/img/20210718203236.png",alt:"image-20210718203236165"}})]),e._v(" "),_("h3",{attrs:{id:"实战总结-4"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#实战总结-4"}},[e._v("#")]),e._v(" 实战总结")]),e._v(" "),_("ol",[_("li",[_("p",[e._v("景点预约功能")]),e._v(" "),_("ul",[_("li",[e._v("新增预约")]),e._v(" "),_("li",[e._v("取消预约")]),e._v(" "),_("li",[e._v("判断用户是否预约过")]),e._v(" "),_("li",[e._v("统计预约总人数")]),e._v(" "),_("li",[e._v("展示预约用户信息")])])]),e._v(" "),_("li",[_("p",[e._v("抽奖功能")]),e._v(" "),_("ul",[_("li",[_("p",[e._v("参加抽奖")])]),e._v(" "),_("li",[_("p",[e._v("统计参加人数")])]),e._v(" "),_("li",[_("p",[e._v("随机抽两个人（不限次数）")]),e._v(" "),_("p",[_("code",[e._v("srandmember key [count]")])])]),e._v(" "),_("li",[_("p",[e._v("随机抽两人（只能中一次）")]),e._v(" "),_("p",[_("code",[e._v("spop key [count]")])])])])]),e._v(" "),_("li",[_("p",[e._v("微博共同关注的人")]),e._v(" "),_("ul",[_("li",[_("p",[e._v("对两个用户关注的人取交集")]),e._v(" "),_("p",[_("code",[e._v("sinter userA userB")])])])])]),e._v(" "),_("li",[_("p",[e._v("QQ - 可能认识的人")]),e._v(" "),_("ul",[_("li",[_("p",[e._v("对两个用户取差集")]),e._v(" "),_("p",[_("code",[e._v("sdiff userA userB")])])])])])]),e._v(" "),_("h2",{attrs:{id:"六、有序集合-zset"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#六、有序集合-zset"}},[e._v("#")]),e._v(" 六、有序集合 - zset")]),e._v(" "),_("p",[e._v("zset 是有序版本，是在 set 集合的基础上，增加一个 score 值，来进行排序。")]),e._v(" "),_("h3",{attrs:{id:"特点-5"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#特点-5"}},[e._v("#")]),e._v(" 特点")]),e._v(" "),_("ul",[_("li",[e._v("数据结构是  "),_("code",[e._v("k v1 score1 v2 score2")])]),e._v(" "),_("li",[e._v("zset 集合存放元素是"),_("strong",[e._v("有序")]),e._v("的。")]),e._v(" "),_("li",[e._v("zset 集合存放元素也是"),_("strong",[e._v("不可重复")]),e._v("的。")])]),e._v(" "),_("p",[_("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/AlbertYang0801/pic-bed@main/img/20210718224715.png",alt:"image-20210718224715172"}})]),e._v(" "),_("h3",{attrs:{id:"常用命令-5"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#常用命令-5"}},[e._v("#")]),e._v(" 常用命令")]),e._v(" "),_("ul",[_("li",[_("p",[e._v("添加元素 - "),_("code",[e._v("zadd key [NX|XX] [CH] [INCR] score member [score member ...]")])])]),e._v(" "),_("li",[_("p",[e._v("遍历元素（可选是否显示分数） - "),_("code",[e._v("zrange key start stop [WITHSCORES]")])])]),e._v(" "),_("li",[_("p",[e._v("删除集合中某个元素 - "),_("code",[e._v("zrem key member [member ...]")])])]),e._v(" "),_("li",[_("p",[e._v("根据分数过滤元素 - "),_("code",[e._v("zrangebyscore key min max [WITHSCORES] [LIMIT offset count]")])]),e._v(" "),_("p",[e._v("可以选择展示分数（withscores）和限制元素个数（limit）。")])]),e._v(" "),_("li",[_("p",[e._v("对集合中某个元素进行增量 - "),_("code",[e._v("zincrby key increment member")])])])]),e._v(" "),_("p",[_("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/AlbertYang0801/pic-bed@main/img/20210718223443.png",alt:"image-20210718223443609"}})]),e._v(" "),_("p",[_("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/AlbertYang0801/pic-bed@main/img/20210718211946.png",alt:"image-20210718211946513"}})]),e._v(" "),_("ul",[_("li",[_("p",[e._v("获取集合中元素总个数 - "),_("code",[e._v("zcard key")])])]),e._v(" "),_("li",[_("p",[_("strong",[e._v("获取集合指定分数区间的元素个数")]),e._v(" - "),_("code",[e._v("zcount key min max")])])]),e._v(" "),_("li",[_("p",[e._v("获取集合中指定元素的下标 - "),_("code",[e._v("zrank key member")])])]),e._v(" "),_("li",[_("p",[e._v("获取集合中指定元素的分数 - "),_("code",[e._v("zscore key member")])])]),e._v(" "),_("li",[_("p",[_("strong",[e._v("倒序遍历集合区间")]),e._v(" - "),_("code",[e._v("zrevrange key start stop [WITHSCORES]")])])]),e._v(" "),_("li",[_("p",[e._v("倒序获取集合中某个元素的下标 - "),_("code",[e._v("zrevrank key member")])])]),e._v(" "),_("li",[_("p",[e._v("按照倒序根据分数过滤元素 - "),_("code",[e._v("zrevrangebyscore key max min [WITHSCORES] [LIMIT offset count]")])]),e._v(" "),_("p",[e._v("从最大值到最小值过滤，可以选择展示分数（withscores）和限制元素个数（limit）。")])])]),e._v(" "),_("p",[_("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/AlbertYang0801/pic-bed@main/img/20210718214057.png",alt:"image-20210718214057384"}})]),e._v(" "),_("h3",{attrs:{id:"实战总结-5"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#实战总结-5"}},[e._v("#")]),e._v(" 实战总结")]),e._v(" "),_("ol",[_("li",[_("p",[e._v("销售排行榜")]),e._v(" "),_("ul",[_("li",[_("p",[e._v("增加商品销量")]),e._v(" "),_("p",[_("code",[e._v("zincrby book 1 java")])])]),e._v(" "),_("li",[_("p",[e._v("查询前十条销售量的商品")]),e._v(" "),_("p",[_("code",[e._v("zrevrange book 0 9 WITHSCORES")])])])])]),e._v(" "),_("li",[_("p",[e._v("微博热搜排行榜")]),e._v(" "),_("ul",[_("li",[_("p",[e._v("添加新闻初始热度")]),e._v(" "),_("p",[_("code",[e._v("zadd weibo 250000 test")])])]),e._v(" "),_("li",[_("p",[e._v("点击增加热度")]),e._v(" "),_("p",[_("code",[e._v("zincrby weibo 1 test")])])]),e._v(" "),_("li",[_("p",[e._v("查询前十条热度最高的新闻")]),e._v(" "),_("p",[_("code",[e._v("zrevrange weibo 0 9 WITHSCORES")])])])])])])])}),[],!1,null,null,null);v.default=a.exports}}]);