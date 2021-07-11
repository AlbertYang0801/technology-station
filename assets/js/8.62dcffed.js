(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{376:function(_,v,t){"use strict";t.r(v);var a=t(26),e=Object(a.a)({},(function(){var _=this,v=_.$createElement,t=_._self._c||v;return t("ContentSlotsDistributor",{attrs:{"slot-key":_.$parent.slotKey}},[t("h1",{attrs:{id:"mysql面试题"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#mysql面试题"}},[_._v("#")]),_._v(" MYSQL面试题")]),_._v(" "),t("h2",{attrs:{id:"一、存储引擎"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#一、存储引擎"}},[_._v("#")]),_._v(" 一、存储引擎")]),_._v(" "),t("h3",{attrs:{id:"_1-innodb与myisam的区别"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-innodb与myisam的区别"}},[_._v("#")]),_._v(" 1.InnoDB与MyISAM的区别")]),_._v(" "),t("p",[_._v("事务、外键、MVCC（多版本并发控制）")]),_._v(" "),t("ul",[t("li",[_._v("InnoDB支持事务，MyISAM不支持事务、锁、数据插入数据、主键。")]),_._v(" "),t("li",[_._v("InnoDB支持外键，MyISAM不支持外键")]),_._v(" "),t("li",[_._v("InnoDB 支持 MVCC(多版本并发控制)，MyISAM 不支持")]),_._v(" "),t("li",[_._v("select count(*) from table时，MyISAM更快，因为它有一个变量保存了整个表的总行数，可以直接读取，InnoDB就需要全表扫描。")]),_._v(" "),t("li",[_._v("Innodb不支持全文索引，而MyISAM支持全文索引（5.7以后的InnoDB也支持全文索引）")]),_._v(" "),t("li",[_._v("InnoDB支持表、行级锁，而MyISAM支持表级锁。")]),_._v(" "),t("li",[_._v("InnoDB表必须有主键，而MyISAM可以没有主键")]),_._v(" "),t("li",[_._v("Innodb表需要更多的内存和存储，而MyISAM可被压缩，存储空间较小，。")]),_._v(" "),t("li",[_._v("Innodb按主键大小有序插入，MyISAM记录插入顺序是，按记录插入顺序保存。")]),_._v(" "),t("li",[_._v("InnoDB 存储引擎提供了具有提交、回滚、崩溃恢复能力的事务安全，与 MyISAM 比 InnoDB 写的效率差一些，并且会占用更多的磁盘空间以保留数据和索引")])]),_._v(" "),t("h2",{attrs:{id:"二、索引"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#二、索引"}},[_._v("#")]),_._v(" 二、索引")]),_._v(" "),t("h3",{attrs:{id:"索引的类型"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#索引的类型"}},[_._v("#")]),_._v(" 索引的类型？")]),_._v(" "),t("ul",[t("li",[t("p",[_._v("主键索引: 数据列不允许重复，不允许为NULL，一个表只能有一个主键。")])]),_._v(" "),t("li",[t("p",[_._v("唯一索引: 数据列不允许重复，允许为NULL值，一个表允许多个列创建唯一索引。")])]),_._v(" "),t("li",[t("p",[_._v("普通索引: 基本的索引类型，没有唯一性的限制，允许为NULL值。")])]),_._v(" "),t("li",[t("p",[_._v("全文索引：是目前搜索引擎使用的一种关键技术，对文本的内容进行分词、搜索。")])]),_._v(" "),t("li",[t("p",[_._v("覆盖索引：查询列要被所建的索引覆盖，不必读取数据行")])]),_._v(" "),t("li",[t("p",[_._v("组合索引：多列值组成一个索引，用于组合搜索，效率大于索引合并")])])]),_._v(" "),t("h3",{attrs:{id:"索引的一些概念"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#索引的一些概念"}},[_._v("#")]),_._v(" 索引的一些概念")]),_._v(" "),t("ol",[t("li",[t("p",[_._v("回表")]),_._v(" "),t("p",[_._v("查询列中包含非索引列，索引需要先找到对应列的信息，再去聚簇索引里查询列的信息。")]),_._v(" "),t("blockquote",[t("p",[_._v("比如：select name,age from user where name = '123'；只有 name 添加了索引。")]),_._v(" "),t("p",[_._v("这个时候会在 name 的索引上查询到对应结果，此时查询到的结果有 name 的信息，但是不包含 age 的信息，所以需要去聚簇索引中进行一个回表查询，获取 age 的信息。")])])]),_._v(" "),t("li",[t("p",[_._v("覆盖索引")]),_._v(" "),t("p",[_._v("当查询列和查询条件字段都存在一个索引上时，可以直接使用单个索引查询而不需要进行回表，这就是覆盖索引。")]),_._v(" "),t("p",[_._v("通过使用覆盖索引，可以减少树搜索的次数，是常用的性能优化手段。")]),_._v(" "),t("blockquote",[t("p",[_._v("比如：select id,name from user where name = '123'；只有 name 添加了索引。")]),_._v(" "),t("p",[_._v("由于 name 列索引是非聚簇索引，所以该索引上保存了 主键id 和 name 的数据。")]),_._v(" "),t("p",[_._v("而在该索引上可以查询到 id和name字段，不需要进行回表操作。")])])]),_._v(" "),t("li",[t("p",[_._v("索引下推")]),_._v(" "),t("p",[_._v("索引下推是数据库检索数据过程中为减少回表次数而做的优化。")]),_._v(" "),t("p",[_._v("在出现复杂条件查询的情况时，若不使用索引下推，则会根据第一个条件查询出数据进行回表操作。")]),_._v(" "),t("p",[_._v("使用索引下推时，就会先根据复杂条件进行过滤数据，再进行回表操作，能够有效减少回表的次数。")])]),_._v(" "),t("li",[t("p",[_._v("最左前缀原则")]),_._v(" "),t("p",[_._v("最左匹配原则针对复合索引，最左优先。")]),_._v(" "),t("p",[_._v("若查询字段不包含复合索引左边的列，则复合索引不会生效。")])])]),_._v(" "),t("h3",{attrs:{id:"索引失效的情况"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#索引失效的情况"}},[_._v("#")]),_._v(" 索引失效的情况？")]),_._v(" "),t("ul",[t("li",[t("p",[_._v("使用 like 进行模糊匹配时， % 在最左边的列。")])]),_._v(" "),t("li",[t("p",[_._v("使用 or 关键字时，or 左右两列有未加索引的情况。")])]),_._v(" "),t("li",[t("p",[_._v("查询列字段类型为字符串的时候，查询条件不加单引号的时候，有可能导致索引失效。")]),_._v(" "),t("blockquote",[t("p",[_._v("比如：Where name = 123；")]),_._v(" "),t("p",[_._v("由于列字段类型和数字不匹配，所以无法走索引。在进行普通查询的时候，MySQL会进行隐式转换，转换为浮点数之后再比较。")])])]),_._v(" "),t("li",[t("p",[_._v("当存在 !=，<>，not in，is null,is not null时，可能会导致索引失效。")])]),_._v(" "),t("li",[t("p",[_._v("复合查询时，不满足最左前缀原则。")])]),_._v(" "),t("li",[t("p",[_._v("在索引列上，使用MySQL的内置函数，索引失效。")])]),_._v(" "),t("li",[t("p",[_._v("在索引列上进行计算，索引失效。")])]),_._v(" "),t("li",[t("p",[_._v("MySQL估计使用索引没有查询全表快，则不使用索引。")])])]),_._v(" "),t("h3",{attrs:{id:"索引不适合的场景"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#索引不适合的场景"}},[_._v("#")]),_._v(" 索引不适合的场景")]),_._v(" "),t("ul",[t("li",[_._v("数据量少的情况。")]),_._v(" "),t("li",[_._v("数据区分度低，重复数据多，比如性别。")]),_._v(" "),t("li",[_._v("更新比较频繁的也不适合加索引。")])]),_._v(" "),t("h3",{attrs:{id:"为什么使用b-树作为底层数据结构"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#为什么使用b-树作为底层数据结构"}},[_._v("#")]),_._v(" 为什么使用B+树作为底层数据结构？")]),_._v(" "),t("ul",[t("li",[_._v("存储数据多，树的深度低，减少磁盘IO的次数。")]),_._v(" "),t("li",[_._v("叶子节点之间是链表连接，方便顺序查找和范围查找。")])]),_._v(" "),t("h3",{attrs:{id:"聚簇索引和非聚簇索引的区别"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#聚簇索引和非聚簇索引的区别"}},[_._v("#")]),_._v(" 聚簇索引和非聚簇索引的区别？")]),_._v(" "),t("ul",[t("li",[_._v("聚簇索引每个表只有一个，按照数据表的主键Id构建B+树，叶子结点存放的是行数据。Innodb默认主键是聚簇索引，若没有定义主键，会选择非空的唯一索引代替。若没有这样的索引，会隐式的定义一个主键作为聚簇索引。")]),_._v(" "),t("li",[_._v("非聚簇索引叶子结点存储的数据是主键，查询数据需要二次查找，现在非聚簇索引上查找主键，再去聚簇索引查找行数据，又称回表。在一个表中可以有多个非聚簇索引。")])]),_._v(" "),t("h3",{attrs:{id:"怎样创建索引"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#怎样创建索引"}},[_._v("#")]),_._v(" 怎样创建索引？")]),_._v(" "),t("ul",[t("li",[t("p",[_._v("考虑最左前缀原则")])]),_._v(" "),t("li",[t("p",[_._v("频繁作为查询条件的字段去创建索引")])]),_._v(" "),t("li",[t("p",[_._v("频繁更新的字段不适合创建索引。")]),_._v(" "),t("blockquote",[t("p",[_._v("因为更新的时候，不仅要更新数据表中的数据，还要更新索引中的数据。")])])]),_._v(" "),t("li",[t("p",[_._v("索引列不能有函数计算，不然索引会失效。")])]),_._v(" "),t("li",[t("p",[_._v("在order by 或者 group by 子句中，创建索引需要注意顺序。")])]),_._v(" "),t("li",[t("p",[_._v("重复度高的数据列不适合创建索引。（性别）")])]),_._v(" "),t("li",[t("p",[_._v("有外键的列一定要加索引。")])]),_._v(" "),t("li",[t("p",[_._v("索引不是越多越好。")])])]),_._v(" "),t("h2",{attrs:{id:"三-事务"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#三-事务"}},[_._v("#")]),_._v(" 三.事务")]),_._v(" "),t("h3",{attrs:{id:"_1-事务基本特性"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-事务基本特性"}},[_._v("#")]),_._v(" 1. 事务基本特性")]),_._v(" "),t("p",[_._v("​\tACID")]),_._v(" "),t("ul",[t("li",[_._v("原子性")]),_._v(" "),t("li",[_._v("一致性")]),_._v(" "),t("li",[_._v("隔离性")]),_._v(" "),t("li",[_._v("持久性")])]),_._v(" "),t("h3",{attrs:{id:"_2-隔离级别"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-隔离级别"}},[_._v("#")]),_._v(" 2. 隔离级别")]),_._v(" "),t("ul",[t("li",[_._v("读未提交")]),_._v(" "),t("li",[_._v("读已提交")]),_._v(" "),t("li",[_._v("可重复读")]),_._v(" "),t("li",[_._v("串行读")])]),_._v(" "),t("hr"),_._v(" "),t("p",[t("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/AlbertYang0801/pic-bed@main/img/20210611101205.png",alt:""}})]),_._v(" "),t("ul",[t("li",[_._v("可重复读（每次读取同一条数据时，不管数据值改变没，都是原来的值）\n会导致幻读，本来有5条数据，新增之后，读取到6条数据。")]),_._v(" "),t("li",[_._v("不可重复读取 - 第一个事务读取数据后，数据被另一个事务改变了，则第一个事务再读取就是新的数据。代表着没有办法重复读取到之前获取的数据。")])]),_._v(" "),t("h3",{attrs:{id:"_3-常见问题"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-常见问题"}},[_._v("#")]),_._v(" 3.常见问题")]),_._v(" "),t("ul",[t("li",[t("p",[_._v("MySQL怎么实现读已提交？")]),_._v(" "),t("p",[_._v("在事务开启时，每次执行SQL都会生成一个快照。")])]),_._v(" "),t("li",[t("p",[_._v("MySQL怎么实现的可重复读？")]),_._v(" "),t("p",[_._v("在事务开启的时候，按照规则生成快照，仅仅生成一次，保证事务提交之前读取的数据快照一致。")])]),_._v(" "),t("li",[t("p",[_._v("mysql采用可重复读怎么解决幻读的问题？")]),_._v(" "),t("p",[_._v("在该隔离级别下引入间隙锁。当"),t("code",[_._v("Session 1")]),_._v("执行delete语句时，会锁住间隙。那么，"),t("code",[_._v("Ssession 2")]),_._v("执行插入语句就会阻塞住！")])])]),_._v(" "),t("h2",{attrs:{id:"四、数据库范式"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#四、数据库范式"}},[_._v("#")]),_._v(" 四、数据库范式")]),_._v(" "),t("ul",[t("li",[t("p",[_._v("第一范式")]),_._v(" "),t("p",[_._v("确保每一列都是不可再分的最小数据单元。")]),_._v(" "),t("blockquote",[t("p",[_._v("比如有一列为：身高体重，就违反了第一范式。")]),_._v(" "),t("p",[_._v("如果要符合第一范式的话，就需要将该列拆分为：身高列、体重列。")])])]),_._v(" "),t("li",[t("p",[_._v("第二范式")]),_._v(" "),t("p",[_._v("首先要满足第一范式。")]),_._v(" "),t("p",[_._v("表中非主键列不存在不依赖主键的情况，确保每个列都和主键相关。")]),_._v(" "),t("blockquote",[t("p",[_._v("比如表中列信息为：Id、学校和学校类别。")]),_._v(" "),t("p",[_._v("此时学校类别不依赖于主键id，而依赖于学校。不符合第二范式。")]),_._v(" "),t("p",[_._v("若要符合第二范式，就需要将学校和学校类别拆分出来。学校作为主键，学校类别作为普通列。")])])]),_._v(" "),t("li",[t("p",[_._v("第三范式")]),_._v(" "),t("p",[_._v("首先要满足第二范式。")]),_._v(" "),t("p",[_._v("每列都和主键直接相关，而不是间接相关。")]),_._v(" "),t("blockquote",[t("p",[_._v("比如表中存在Id、学生、爱好、学科、成绩等列。")]),_._v(" "),t("p",[_._v("此时爱好列不直接依赖于Id，而是依赖学生。不满足第三范式。")]),_._v(" "),t("p",[_._v("若要符合第三范式，要将间接相关的信息抽取出来。")]),_._v(" "),t("p",[_._v("比如将学生个人基本信息抽取出来，学生id、学生、爱好等列作为列信息。")])])])]),_._v(" "),t("h2",{attrs:{id:"参考链接"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#参考链接"}},[_._v("#")]),_._v(" 参考链接")]),_._v(" "),t("p",[t("a",{attrs:{href:"https://www.bilibili.com/video/BV1Bv411h7pR",target:"_blank",rel:"noopener noreferrer"}},[_._v("不良人编程 — 彻底搞懂MySQL索引机制，MySQL索引优化"),t("OutboundLink")],1)]),_._v(" "),t("p",[t("a",{attrs:{href:"https://juejin.cn/post/6915996132480909325",target:"_blank",rel:"noopener noreferrer"}},[_._v("MySQL数据库三大范式"),t("OutboundLink")],1)])])}),[],!1,null,null,null);v.default=e.exports}}]);