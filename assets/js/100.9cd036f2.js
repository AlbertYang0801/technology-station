(window.webpackJsonp=window.webpackJsonp||[]).push([[100],{458:function(t,s,e){"use strict";e.r(s);var a=e(26),r=Object(a.a)({},(function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"gitbook本地环境搭建"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#gitbook本地环境搭建"}},[t._v("#")]),t._v(" Gitbook本地环境搭建")]),t._v(" "),e("h2",{attrs:{id:"安装步骤"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#安装步骤"}},[t._v("#")]),t._v(" 安装步骤")]),t._v(" "),e("h3",{attrs:{id:"_1-安装node-js"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-安装node-js"}},[t._v("#")]),t._v(" 1. 安装node.js")]),t._v(" "),e("ul",[e("li",[e("p",[t._v("下载安装包")]),t._v(" "),e("p",[t._v("推荐下载地址：https://nodejs.org/dist/latest-v12.x/")]),t._v(" "),e("blockquote",[e("p",[t._v("注意：版本不易过高，使用推荐版本即可。")])])]),t._v(" "),e("li",[e("p",[t._v("解压安装包并安装，使用以下命令查看是否安装成功。")]),t._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("node -v\nnpm -v\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br")])])]),t._v(" "),e("li",[e("p",[t._v("若安装版本过高，需要卸载node环境。")]),t._v(" "),e("blockquote",[e("p",[t._v("参考博客：https://www.jianshu.com/p/920961b6a538")])])])]),t._v(" "),e("h3",{attrs:{id:"_2-切换国内镜像"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-切换国内镜像"}},[t._v("#")]),t._v(" 2. 切换国内镜像")]),t._v(" "),e("blockquote",[e("p",[t._v("npm国内下载速度较慢，可设置淘宝镜像。")])]),t._v(" "),e("p",[t._v("设置淘宝镜像命令如下：")]),t._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("npm config set registry=http://registry.npm.taobao.org -g\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br")])]),e("h3",{attrs:{id:"_3-安装gitbook"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3-安装gitbook"}},[t._v("#")]),t._v(" 3. 安装gitbook")]),t._v(" "),e("p",[t._v("官网地址："),e("a",{attrs:{href:"https://www.npmjs.com/package/gitbook",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://www.npmjs.com/package/gitbook"),e("OutboundLink")],1)]),t._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("#使用npm安装gitbook客户端\nnpm install gitbook-cli -g \n\n#查看gitbook版本,若没有安装过gitbook，会自动安装\ngitbook -V\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br"),e("span",{staticClass:"line-number"},[t._v("3")]),e("br"),e("span",{staticClass:"line-number"},[t._v("4")]),e("br"),e("span",{staticClass:"line-number"},[t._v("5")]),e("br")])]),e("p",[e("a",{attrs:{href:"https://blog.csdn.net/weixin_43778378/article/details/113678085?utm_medium=distribute.pc_relevant.none-task-blog-baidujs_title-2&spm=1001.2101.3001.4242",target:"_blank",rel:"noopener noreferrer"}},[t._v("注意：详细请点击该链接查看参考博客"),e("OutboundLink")],1)]),t._v(" "),e("h2",{attrs:{id:"gitbook安装遇到的问题"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#gitbook安装遇到的问题"}},[t._v("#")]),t._v(" Gitbook安装遇到的问题")]),t._v(" "),e("h3",{attrs:{id:"_1-使用-gitbook-serve-命令时报错"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-使用-gitbook-serve-命令时报错"}},[t._v("#")]),t._v(" 1. 使用 gitbook serve 命令时报错")]),t._v(" "),e("ul",[e("li",[t._v("异常信息：")])]),t._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("Error: ENOENT: no such file or directory, stat 'D:\\workspace\\core-solution-docs\\_book\\gitbook\\gitbook-plugin-fontsettings\\fontsettings.js'\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br")])]),e("ul",[e("li",[e("p",[t._v("解决办法：")]),t._v(" "),e("p",[t._v("修改用户目录的"),e("code",[t._v(".gitbook\\versions\\3.2.3\\lib\\output\\website\\copyPluginAssets.js")]),t._v(" 文件，把所有的"),e("code",[t._v("confirm")]),t._v("改为"),e("code",[t._v("false")]),t._v("。")]),t._v(" "),e("p",[t._v("文件目录："),e("code",[t._v("\\Users\\yangjunwei\\.gitbook\\versions\\3.2.3\\lib\\output\\website\\copyPluginAssets.js")])])])]),t._v(" "),e("h3",{attrs:{id:"_2-在安装时使用了-root-用户-导致目录普通用户无法操作"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-在安装时使用了-root-用户-导致目录普通用户无法操作"}},[t._v("#")]),t._v(" 2. 在安装时使用了 root 用户，导致目录普通用户无法操作")]),t._v(" "),e("ul",[e("li",[e("p",[t._v("解决办法：")]),t._v(" "),e("p",[t._v("将 "),e("code",[t._v("_book")]),t._v(" 文件夹赋予权限，使用 "),e("code",[t._v("chmod 777 -book")]),t._v(" 命令为文件夹添加全部权限。")])])])])}),[],!1,null,null,null);s.default=r.exports}}]);