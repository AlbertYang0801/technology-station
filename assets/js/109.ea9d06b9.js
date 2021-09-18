(window.webpackJsonp=window.webpackJsonp||[]).push([[109],{468:function(t,a,e){"use strict";e.r(a);var _=e(26),v=Object(_.a)({},(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"琐碎记录"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#琐碎记录"}},[t._v("#")]),t._v(" 琐碎记录")]),t._v(" "),e("h2",{attrs:{id:"nginx"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#nginx"}},[t._v("#")]),t._v(" nginx")]),t._v(" "),e("ol",[e("li",[e("p",[t._v("nginx 上传文件大小限制。")]),t._v(" "),e("p",[t._v("nginx 对上传的文件大小做出了限制，若超过大小限制会报错，所以需要根据需求调整配置的上传文件大小。")]),t._v(" "),e("div",{staticClass:"language-java line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-java"}},[e("code",[t._v("http "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\tclient_body_buffer_size "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),t._v("m"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" #求体缓存区大小\n    client_max_body_size "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("1024")]),t._v("m"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" #上传文件的最大值\n    client_body_temp_path "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("tmp"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" #临时文件存放路径。只有当上传的请求体超出缓存区大小时，才会写到临时文件中\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br"),e("span",{staticClass:"line-number"},[t._v("3")]),e("br"),e("span",{staticClass:"line-number"},[t._v("4")]),e("br"),e("span",{staticClass:"line-number"},[t._v("5")]),e("br")])])])]),t._v(" "),e("h2",{attrs:{id:"字符和字节的区别"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#字符和字节的区别"}},[t._v("#")]),t._v(" 字符和字节的区别")]),t._v(" "),e("p",[t._v("字节(Byte)是计量单位，表示数据量多少，是计算机信息技术用于计量存储容量的一种计量单位，通常情况下一字节等于八位。")]),t._v(" "),e("p",[t._v("字符(Character)计算机中使用的字母、数字、字和符号，比如'A'、'B'、'$'、'&'等。")]),t._v(" "),e("p",[e("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/AlbertYang0801/pic-bed@main/img/20210908104322.jpeg",alt:"img"}})]),t._v(" "),e("p",[e("strong",[t._v("字节与字符：")])]),t._v(" "),e("ul",[e("li",[t._v("ASCII 码中，一个英文字母（不分大小写）为一个字节，一个中文汉字为两个字节。")]),t._v(" "),e("li",[t._v("UTF-8 编码中，一个英文字为"),e("strong",[t._v("一个字节")]),t._v("，一个中文为"),e("strong",[t._v("三个字节")]),t._v("。")]),t._v(" "),e("li",[t._v("Unicode 编码中，一个英文为"),e("strong",[t._v("一个字节")]),t._v("，一个中文为"),e("strong",[t._v("两个字节")]),t._v("。")]),t._v(" "),e("li",[t._v("符号：英文标点为一个字节，中文标点为两个字节。例如：英文句号 "),e("strong",[t._v(".")]),t._v(" 占1个字节的大小，中文句号 **。**占2个字节的大小。")]),t._v(" "),e("li",[t._v("UTF-16 编码中，一个英文字母字符或一个汉字字符存储都需要 2 个字节（Unicode 扩展区的一些汉字存储需要 4 个字节）。")]),t._v(" "),e("li",[t._v("UTF-32 编码中，世界上任何字符的存储都需要 4 个字节。")])]),t._v(" "),e("hr"),t._v(" "),e("p",[t._v("在java中，char类型占2个字节；byte 占一个字节。")]),t._v(" "),e("p",[t._v("原因："),e("strong",[t._v("Java编译器默认使用Unicode编码，因此2字节（16位）可以表示所有字符。")])]),t._v(" "),e("blockquote",[e("p",[t._v("java中占2个字节有 short 和 char；而 byte 和 boolean 占 1个字节，int 和 float 占4个字节。")])]),t._v(" "),e("p",[t._v("字符流可以使用 char 去接收")]),t._v(" "),e("p",[t._v("https://www.runoob.com/w3cnote/byte-character.html")]),t._v(" "),e("h2",{attrs:{id:"位运算"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#位运算"}},[t._v("#")]),t._v(" 位运算")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",{staticStyle:{"text-align":"left"}},[t._v("符号")]),t._v(" "),e("th",{staticStyle:{"text-align":"left"}},[t._v("描述")]),t._v(" "),e("th",{staticStyle:{"text-align":"left"}},[t._v("运算规则")])])]),t._v(" "),e("tbody",[e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("&")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("与")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("两个位都为1时，结果才为1")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("|")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("或")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("两个位都为0时，结果才为0")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("^")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("异或")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("两个位相同为0，相异为1")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("~")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("取反")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("0变1，1变0")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("<<")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("左移")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("各二进位全部左移若干位，高位丢弃，低位补0")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v(">>")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("右移")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("各二进位全部右移若干位，对无符号数，高位补0，有符号数，各编译器处理方法不一样，有的补符号位（算术右移），有的补0（逻辑右移）")])])])]),t._v(" "),e("h3",{attrs:{id:"异或运算"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#异或运算"}},[t._v("#")]),t._v(" 异或运算")]),t._v(" "),e("ul",[e("li",[e("p",[e("strong",[t._v("异或运算")]),t._v("："),e("em",[t._v("两个位相同为 0 ，不同为 1")]),t._v("。")]),t._v(" "),e("blockquote",[e("p",[t._v("异或运算也可以这样理解："),e("em",[t._v("男性和女性能生出孩子，否则就不行")]),t._v("。（来自某知乎大神相见恨晚的评论。")])])]),t._v(" "),e("li",[e("p",[e("strong",[t._v("异或运算特性")]),t._v("："),e("em",[t._v("一个二进制数 A 和 另一个二进制数 B 异或运算两次的话，结果还是原来的二进制数 A。")])])])]),t._v(" "),e("h3",{attrs:{id:"参考链接"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#参考链接"}},[t._v("#")]),t._v(" 参考链接")]),t._v(" "),e("ul",[e("li",[e("a",{attrs:{href:"https://www.runoob.com/w3cnote/bit-operation.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("菜鸟教程位运算（&、|、^、~、>>、<<）"),e("OutboundLink")],1)])])])}),[],!1,null,null,null);a.default=v.exports}}]);