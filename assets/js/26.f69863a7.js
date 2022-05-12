(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{384:function(t,s,a){"use strict";a.r(s);var n=a(26),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"布隆过滤器"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#布隆过滤器"}},[t._v("#")]),t._v(" 布隆过滤器")]),t._v(" "),a("h2",{attrs:{id:"_1-什么是布隆过滤器"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-什么是布隆过滤器"}},[t._v("#")]),t._v(" 1. 什么是布隆过滤器？")]),t._v(" "),a("p",[t._v("布隆过滤器（Bloom Filter）是一种数据结构，用来"),a("strong",[t._v("判断一个元素是否在一个集合中")]),t._v("。布隆过滤器的本质上使用的是二进制向量和 k 个哈希函数组成。")]),t._v(" "),a("p",[a("strong",[t._v("布隆过滤器具有如下优点：")])]),t._v(" "),a("ul",[a("li",[a("p",[t._v("空间利用率高。")]),t._v(" "),a("p",[t._v("布隆过滤器底层使用二进制向量保存数据，不需要保存元素本身，只需要在指定 bit 存放标识即可，故空间利用率非常高。")]),t._v(" "),a("blockquote",[a("p",[t._v("int 类型占用四个字节，对应 4*8 个 bit，对比能存放 32 个数据。（注意存放的不是元素本身）")])])]),t._v(" "),a("li",[a("p",[t._v("时间效率也较高，插入和查询效率高。")]),t._v(" "),a("p",[t._v("布隆过滤器的时间复杂度只跟哈希函数的个数 k 有关，插入和查询的时间复杂度均为 O(k)；")]),t._v(" "),a("p",[a("em",[t._v("结合布隆过滤器原理的数据结构理解效率高的原因。")])])])]),t._v(" "),a("p",[a("strong",[t._v("同样的，布隆过滤器也存在一些缺点。")])]),t._v(" "),a("ul",[a("li",[a("p",[t._v("存在一定程度的误判。")]),t._v(" "),a("p",[t._v("布隆过滤器主要作用是用来判断一个元素是否在一个集合中，但是存在一定的误判率。")]),t._v(" "),a("p",[a("strong",[t._v("若布隆过滤器判断数据不存在，则一定不存在。")])]),t._v(" "),a("p",[a("strong",[t._v("若布隆过滤器判断数据存在，则不一定存在。")])])]),t._v(" "),a("li",[a("p",[t._v("不支持删除集合中的元素。")]),t._v(" "),a("p",[t._v("布隆过滤器不支持删除元素。")]),t._v(" "),a("p",[a("em",[t._v("针对删除元素的优化可见："),a("a",{attrs:{href:"https://cloud.tencent.com/developer/article/1136056",target:"_blank",rel:"noopener noreferrer"}},[t._v("Counting Bloom Filter 的原理和实现"),a("OutboundLink")],1)])])])]),t._v(" "),a("h2",{attrs:{id:"_2-为什么使用布隆过滤器"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-为什么使用布隆过滤器"}},[t._v("#")]),t._v(" 2. 为什么使用布隆过滤器？")]),t._v(" "),a("h3",{attrs:{id:"解决缓存穿透"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#解决缓存穿透"}},[t._v("#")]),t._v(" 解决缓存穿透")]),t._v(" "),a("p",[t._v("布隆过滤器一个经典的应用场景就是用来解决缓存穿透。")]),t._v(" "),a("blockquote",[a("p",[t._v("缓存穿透：当用户请求查询某个数据时，先从缓存查询，缓存中没有这个数据。然后向数据库查询数据，数据库中也没有这个数据，导致查询失败。")])]),t._v(" "),a("p",[a("strong",[t._v("布隆过滤器在 redis 中解决缓存穿透的应用流程：")])]),t._v(" "),a("ul",[a("li",[a("p",[t._v("在向缓存中添加数据时，同时向布隆过滤器插入数据。")])]),t._v(" "),a("li",[a("p",[t._v("在向缓存查询数据时，先查询布隆过滤器，判断是否存在数据。")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("若布隆过滤器中存在，再查询缓存。")])]),t._v(" "),a("li",[a("p",[t._v("若布隆过滤器不存在数据，则不再继续向下查询。")])])])])]),t._v(" "),a("p",[a("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/AlbertYang0801/pic-bed@main/img/20210812173253.png",alt:"临时文件 (5)"}})]),t._v(" "),a("p",[a("strong",[t._v("结合布隆过滤器的特点，当判断出数据不存在于布隆过滤器时，缓存中一定不存在该数据。就能解决缓存穿透的问题，减少无效请求访问缓存和数据库。")])]),t._v(" "),a("h3",{attrs:{id:"其他应用场景"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#其他应用场景"}},[t._v("#")]),t._v(" 其他应用场景")]),t._v(" "),a("p",[t._v("布隆过滤器除了能够解决缓存穿透的问题之外，还有很多的应用场景。但是前提是这些应用场景能够接受布隆过滤器带来的一定误判率的影响。")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("判断用户名是否重复。")]),t._v(" "),a("p",[t._v("只有当布隆过滤器判断用户名不存在时，才可以使用当前用户名。")])]),t._v(" "),a("li",[a("p",[t._v("垃圾邮件问题。")]),t._v(" "),a("p",[t._v("当判断邮件为垃圾邮件时（经过哈希函数指定位设置为 1）。")]),t._v(" "),a("p",[t._v("布隆过滤器判断出邮件不是垃圾邮件时，那该邮件一定是正常邮件。")]),t._v(" "),a("p",[t._v("布隆过滤器判断出邮件是垃圾邮件时，该邮件有可能是正常邮件。存在正常邮件被识别为垃圾邮件的情况，这个时候可以选择为误判邮件增加白名单来解决。")])])]),t._v(" "),a("h2",{attrs:{id:"_3-布隆过滤器的原理"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-布隆过滤器的原理"}},[t._v("#")]),t._v(" 3. 布隆过滤器的原理")]),t._v(" "),a("h3",{attrs:{id:"数据结构和存储原理"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#数据结构和存储原理"}},[t._v("#")]),t._v(" 数据结构和存储原理")]),t._v(" "),a("p",[t._v("布隆过滤器底层由 "),a("strong",[t._v("bit 数组和 k 个哈希函数组成")]),t._v("，bit 数组每个位上均初始化位 0，所有哈希函数尽量保证均匀分布。")]),t._v(" "),a("ul",[a("li",[t._v("哈希函数用来计算，计算存入的数据映射到 bit 数组的位置。")]),t._v(" "),a("li",[t._v("bit 数组用来存放数据经过哈希函数映射的结果，指定位数值为 1。")])]),t._v(" "),a("p",[a("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/AlbertYang0801/pic-bed@main/img/20210813093335.png",alt:"临时文件 (6)"}})]),t._v(" "),a("h4",{attrs:{id:"存储原理"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#存储原理"}},[t._v("#")]),t._v(" 存储原理")]),t._v(" "),a("ol",[a("li",[t._v("插入元素时，分别使用多个哈希函数计算元素，得到哈希函数计算结果，对应 bit 数组中的位次。")]),t._v(" "),a("li",[t._v("根据得到的位次，将 bit 数组中指定位次设置为 1。")])]),t._v(" "),a("h4",{attrs:{id:"查询原理"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#查询原理"}},[t._v("#")]),t._v(" 查询原理")]),t._v(" "),a("ol",[a("li",[t._v("根据查询元素，分别使用多个哈希函数计算，得到计算结果。")]),t._v(" "),a("li",[t._v("根据计算结果查询 bit 数组指定位次，若结果都为 1，则认为元素存在，若有一个位次值为 0 ，则认为元素不存在。")])]),t._v(" "),a("h3",{attrs:{id:"为什么会存在误判"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#为什么会存在误判"}},[t._v("#")]),t._v(" 为什么会存在误判？")]),t._v(" "),a("p",[t._v("因为布隆过滤器的存储机制，简单概括为："),a("strong",[t._v("插入元素经过不同的哈希函数计算，得到不同的位置，并将位数组指定位次设置为 1")]),t._v("。")]),t._v(" "),a("p",[t._v("假设存在 A 和 B 两个元素，布隆过滤器中有三个哈希函数，A 和 B 经过哈希函数的结果相同。A 插入到布隆过滤器中，B 不存在布隆过滤器中。")]),t._v(" "),a("p",[t._v("当判断 B 是否存在于布隆过滤器时，经过三个哈希函数的结果，得到位数组指定位上值为 1，由此判断 B 存在于布隆过滤器中。但实际上 B 并没有插入到布隆过滤器中，这时就发生了误判。")]),t._v(" "),a("p",[t._v("误判的原因可以归结为："),a("strong",[t._v("当插入的元素很多的情况下，某个元素即使之前不存在，但是它所映射的 k 位已经被之前其他的元素置为 1 了，这样就会出现误判，BloomFilter 会认为它已经存在了")]),t._v("。")]),t._v(" "),a("h3",{attrs:{id:"误判率"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#误判率"}},[t._v("#")]),t._v(" 误判率")]),t._v(" "),a("p",[t._v("简单来说，误判率受到"),a("strong",[t._v("哈希函数个数和位数组长度")]),t._v("的影响。要求误判率越低意味着需要的哈希函数和位数组长度越多。当误判率低的时候，新增查询元素的时候效率相应会降低。当误判率高的时候，效率相对会高一些。")]),t._v(" "),a("h3",{attrs:{id:"为什么不支持删除"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#为什么不支持删除"}},[t._v("#")]),t._v(" 为什么不支持删除？")]),t._v(" "),a("p",[t._v("如果删除布隆过滤器中的元素，会对后续结果产生误判的影响。")]),t._v(" "),a("p",[t._v("若要删除元素，首先将元素经过多个哈希函数计算，得到指定位次，并将位数组指定位设置为 0。但是由于位数组的每个位可能被多个元素指定，若某个位被修改为 0，其它存在于布隆过滤器中并指向该位的元素会被判断不存在，产生了误判。")]),t._v(" "),a("p",[a("em",[t._v("比如 C 和 D 元素，C经过三个哈希函数的结果为 1、4、7，D 的结果为 1、5、8，当删除 C 时，1、4、7位对应值为 0 。此时查询 D ，对应 1、5、8 位置为 0、1、1，得到 D 元素不存在的结果，发生了误判。")])]),t._v(" "),a("hr"),t._v(" "),a("p",[t._v("Counting Bloom Filter 是一种优化数据结构，支持删除。")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://cloud.tencent.com/developer/article/1136056",target:"_blank",rel:"noopener noreferrer"}},[t._v("Counting Bloom Filter 的原理和实现"),a("OutboundLink")],1)]),t._v(" "),a("h2",{attrs:{id:"_4-怎样使用布隆过滤器"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-怎样使用布隆过滤器"}},[t._v("#")]),t._v(" 4. 怎样使用布隆过滤器")]),t._v(" "),a("h3",{attrs:{id:"guava"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#guava"}},[t._v("#")]),t._v(" Guava")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://zhuanlan.zhihu.com/p/85042394",target:"_blank",rel:"noopener noreferrer"}},[t._v("结合Guava源码解读布隆过滤器"),a("OutboundLink")],1)]),t._v(" "),a("hr"),t._v(" "),a("ul",[a("li",[a("p",[t._v("引入依赖")]),t._v(" "),a("div",{staticClass:"language-java line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token generics"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("dependency"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token generics"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("groupId"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("com"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("google"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("guava"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("groupId"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token generics"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("artifactId"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("guava"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("artifactId"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token generics"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("version"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("27.1")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("jre"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("version"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("dependency"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br")])])]),t._v(" "),a("li",[a("p",[t._v("创建布隆过滤器")]),t._v(" "),a("div",{staticClass:"language-java line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//布隆过滤器存放数据类型，预期插入数据长度，误判率")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("BloomFilter")]),a("span",{pre:!0,attrs:{class:"token generics"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Integer")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v(" bloomFilter "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("BloomFilter")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("create")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Funnels")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("integerFunnel")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" size"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br")])])]),t._v(" "),a("li",[a("p",[t._v("测试代码")]),t._v(" "),a("div",{staticClass:"language-java line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("UserLoginService")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("static")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("main")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" args"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" size "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("10000")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//布隆过滤器存放数据类型，预期插入数据长度，误判率")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("BloomFilter")]),a("span",{pre:!0,attrs:{class:"token generics"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Integer")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v(" bloomFilter "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("BloomFilter")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("create")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Funnels")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("integerFunnel")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" size"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//插入0～10000")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" i "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" i "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" size"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" i"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            bloomFilter"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("put")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("i"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" i "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" i "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" size"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" i"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),t._v("bloomFilter"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("mightContain")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("i"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("System")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("out"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("println")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"用户登陆过但是布隆过滤器没有判断出来"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" count "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//10001～13000")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" i "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("10001")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" i "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" size "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3000")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" i"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("bloomFilter"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("mightContain")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("i"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                count"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("System")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("out"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("println")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"3000个元素发生误判的个数:"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v("count"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//output")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3000")]),t._v("个元素发生误判的个数"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("301")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br"),a("span",{staticClass:"line-number"},[t._v("12")]),a("br"),a("span",{staticClass:"line-number"},[t._v("13")]),a("br"),a("span",{staticClass:"line-number"},[t._v("14")]),a("br"),a("span",{staticClass:"line-number"},[t._v("15")]),a("br"),a("span",{staticClass:"line-number"},[t._v("16")]),a("br"),a("span",{staticClass:"line-number"},[t._v("17")]),a("br"),a("span",{staticClass:"line-number"},[t._v("18")]),a("br"),a("span",{staticClass:"line-number"},[t._v("19")]),a("br"),a("span",{staticClass:"line-number"},[t._v("20")]),a("br"),a("span",{staticClass:"line-number"},[t._v("21")]),a("br"),a("span",{staticClass:"line-number"},[t._v("22")]),a("br"),a("span",{staticClass:"line-number"},[t._v("23")]),a("br"),a("span",{staticClass:"line-number"},[t._v("24")]),a("br"),a("span",{staticClass:"line-number"},[t._v("25")]),a("br"),a("span",{staticClass:"line-number"},[t._v("26")]),a("br"),a("span",{staticClass:"line-number"},[t._v("27")]),a("br"),a("span",{staticClass:"line-number"},[t._v("28")]),a("br"),a("span",{staticClass:"line-number"},[t._v("29")]),a("br"),a("span",{staticClass:"line-number"},[t._v("30")]),a("br"),a("span",{staticClass:"line-number"},[t._v("31")]),a("br")])])])]),t._v(" "),a("h3",{attrs:{id:"redis实现布隆过滤器"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#redis实现布隆过滤器"}},[t._v("#")]),t._v(" Redis实现布隆过滤器")]),t._v(" "),a("p",[t._v("redis 默认不支持布隆过滤器，需要安装插件。")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://blog.csdn.net/oyc619491800/article/details/106987590?utm_medium=distribute.pc_relevant.none-task-blog-2~default~baidujs_title~default-0.base&spm=1001.2101.3001.4242",target:"_blank",rel:"noopener noreferrer"}},[t._v("Centos7 Redis5 BloomFilter 安装及使用"),a("OutboundLink")],1)]),t._v(" "),a("h2",{attrs:{id:"参考链接"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#参考链接"}},[t._v("#")]),t._v(" 参考链接")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://www.jianshu.com/p/bef2ec1c361f#%E8%AE%BE%E8%AE%A1%E6%80%9D%E6%83%B3",target:"_blank",rel:"noopener noreferrer"}},[t._v("布隆过滤器（Bloom Filter）原理及Guava中的具体实现"),a("OutboundLink")],1)]),t._v(" "),a("p",[a("a",{attrs:{href:"https://blog.csdn.net/weixin_42002367/article/details/107061997",target:"_blank",rel:"noopener noreferrer"}},[t._v("布隆过滤器从底层原理到redis实战一篇讲清"),a("OutboundLink")],1)]),t._v(" "),a("p",[a("a",{attrs:{href:"https://blog.csdn.net/weixin_49383182/article/details/117969587?utm_medium=distribute.pc_relevant.none-task-blog-2%7Edefault%7EBlogCommendFromBaidu%7Edefault-5.base&depth_1-utm_source=distribute.pc_relevant.none-task-blog-2%7Edefault%7EBlogCommendFromBaidu%7Edefault-5.base",target:"_blank",rel:"noopener noreferrer"}},[t._v("Linux安装布隆过滤器过程中make编译报错“fatal error:tdigest.h:没有那个文件或目录”处理指南"),a("OutboundLink")],1)])])}),[],!1,null,null,null);s.default=e.exports}}]);