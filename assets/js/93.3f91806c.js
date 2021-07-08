(window.webpackJsonp=window.webpackJsonp||[]).push([[93],{450:function(t,a,s){"use strict";s.r(a);var e=s(26),n=Object(e.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h2",{attrs:{id:"gitbook自动发布到github脚本"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#gitbook自动发布到github脚本"}},[t._v("#")]),t._v(" Gitbook自动发布到GitHub脚本")]),t._v(" "),s("h3",{attrs:{id:"概述"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#概述"}},[t._v("#")]),t._v(" 概述")]),t._v(" "),s("p",[t._v("我在使用"),s("code",[t._v("Gitbook")]),t._v("的时候，搭配使用了GitHub Pages搭建主页。由于"),s("code",[t._v("Gitbook")]),t._v("静态文件发布到"),s("code",[t._v("GitHub")]),t._v("较为繁琐，故开发了脚本来实现自动发布。")]),t._v(" "),s("h3",{attrs:{id:"本地文件介绍"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#本地文件介绍"}},[t._v("#")]),t._v(" 本地文件介绍")]),t._v(" "),s("p",[t._v("首先在本地创建了一个存放"),s("code",[t._v("Gitbook基础文件")]),t._v("的目录"),s("code",[t._v("gitbook")]),t._v("，创建了一个"),s("code",[t._v("Java项目")]),t._v("用来同步"),s("code",[t._v("Gitbook生成的静态文件")]),t._v("到"),s("code",[t._v("Github")]),t._v("。")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("gitbook文件目录")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/AlbertYang0801/pic-bed@main/img/20210222154231.png",alt:"gitbook目录"}})])]),t._v(" "),s("li",[s("p",[t._v("java项目结构")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/AlbertYang0801/pic-bed@main/img/20210222154325.png",alt:"Java项目结构"}})])])]),t._v(" "),s("h3",{attrs:{id:"传统发布流程"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#传统发布流程"}},[t._v("#")]),t._v(" 传统发布流程")]),t._v(" "),s("ol",[s("li",[s("p",[t._v("编写md文章。")])]),t._v(" "),s("li",[s("p",[t._v("使用"),s("code",[t._v("gitbook build")]),t._v("命令生成html静态文件，使用后会在"),s("code",[t._v("gitbook基础文件目录")]),t._v("下的"),s("code",[t._v("_book")]),t._v("文件夹生成静态文件。")])]),t._v(" "),s("li",[s("p",[t._v("复制"),s("code",[t._v("_book")]),t._v("文件夹下所有文件到"),s("code",[t._v("java项目")]),t._v("根路径下。")])]),t._v(" "),s("li",[s("p",[t._v("使用git命令将"),s("code",[t._v("java项目")]),t._v("新增内容同步到github。")]),t._v(" "),s("p",[s("em",[t._v("由于发布流程的第2、3、4步太过繁琐，故开发一个脚本，按照顺序执行2、3、4步完成自动发布的功能。")])])])]),t._v(" "),s("h3",{attrs:{id:"自动脚本发布"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#自动脚本发布"}},[t._v("#")]),t._v(" 自动脚本发布")]),t._v(" "),s("blockquote",[s("p",[t._v("支持手动同步和定时同步，可实现"),s("code",[t._v("gitbook")]),t._v("文件一键"),s("code",[t._v("gitbook build")]),t._v(",然后发布到"),s("code",[t._v("GitHub")]),t._v("上。")])]),t._v(" "),s("h4",{attrs:{id:"手动同步"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#手动同步"}},[t._v("#")]),t._v(" 手动同步")]),t._v(" "),s("blockquote",[s("p",[t._v("不需要部署服务器")])]),t._v(" "),s("ol",[s("li",[s("p",[t._v("跳转到手动脚本："),s("a",{attrs:{href:"https://gitee.com/zztiyjw/gitbook-publish-autoscript/tree/master/src/main/java/com/albert/script/GitbookManualScript.java",target:"_blank",rel:"noopener noreferrer"}},[t._v("GitbookManualScript.java"),s("OutboundLink")],1)])]),t._v(" "),s("li",[s("p",[t._v("手动指定必要参数")]),t._v(" "),s("div",{staticClass:"language-java line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/**\n * gitbook本地目录\n */")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("private")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("final")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("static")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),t._v(" GITBOOK_PATH "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/Users/yangjunwei/gitbook"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/**\n * github对应本地项目目录\n */")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("private")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("final")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("static")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),t._v(" GITHUB_PROJECT_PATH "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/Users/yangjunwei/IdeaProjects/gitbook-technology"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/**\n * github对应remote\n */")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("private")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("final")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("static")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),t._v(" GITHUB_REMOTE "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"origin"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/**\n * github分支名称\n */")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("private")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("final")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("static")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),t._v(" GITHUB_BRANCH "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"main"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br"),s("span",{staticClass:"line-number"},[t._v("9")]),s("br"),s("span",{staticClass:"line-number"},[t._v("10")]),s("br"),s("span",{staticClass:"line-number"},[t._v("11")]),s("br"),s("span",{staticClass:"line-number"},[t._v("12")]),s("br"),s("span",{staticClass:"line-number"},[t._v("13")]),s("br"),s("span",{staticClass:"line-number"},[t._v("14")]),s("br"),s("span",{staticClass:"line-number"},[t._v("15")]),s("br"),s("span",{staticClass:"line-number"},[t._v("16")]),s("br")])])]),t._v(" "),s("li",[s("p",[t._v("执行main()方法")])])]),t._v(" "),s("h4",{attrs:{id:"定时同步"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#定时同步"}},[t._v("#")]),t._v(" 定时同步")]),t._v(" "),s("blockquote",[s("p",[t._v("可部署到服务器，参考安装教程")])]),t._v(" "),s("ol",[s("li",[s("p",[t._v("修改配置文件："),s("a",{attrs:{href:"config/application.properties"}},[t._v("application.properties")]),t._v("中的属性值")]),t._v(" "),s("div",{staticClass:"language-java line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[t._v("#gitbook本地目录\ngitbook"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("path"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Users")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("yangjunwei"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("gitbook\n#github项目本地路径\ngithub"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("project"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("path"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Users")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("yangjunwei"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("IdeaProjects")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("gitbook"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("technology\n#github的remote值\ngithub"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("remote"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("origin\n#github分支名称\ngithub"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("branch"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("main\n#定时同步gitbook的cron表达式\nauto"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("sync"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("gitbook"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("cron"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'0 0 23 * * *'")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br"),s("span",{staticClass:"line-number"},[t._v("9")]),s("br"),s("span",{staticClass:"line-number"},[t._v("10")]),s("br")])])])]),t._v(" "),s("p",[t._v("2.启动 "),s("a",{attrs:{href:"src/main/java/com/albert/Application.java"}},[t._v("Application.java")])]),t._v(" "),s("h4",{attrs:{id:"实现思路"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#实现思路"}},[t._v("#")]),t._v(" 实现思路")]),t._v(" "),s("p",[t._v("1.使用Java执行命令"),s("code",[t._v("gitbook build")]),t._v("。")]),t._v(" "),s("p",[t._v("2.Java实现复制文件夹下的所有文件，将"),s("code",[t._v("_book")]),t._v("文件夹下所有文件复制到Java项目根路径下。")]),t._v(" "),s("p",[t._v("3.使用git命令将"),s("code",[t._v("java项目")]),t._v("新增内容同步到github。")]),t._v(" "),s("p",[t._v("​\t同第一步一样，使用Java依次执行以下命令：")]),t._v(" "),s("ul",[s("li",[s("code",[t._v("git add .")])]),t._v(" "),s("li",[s("code",[t._v("git commit -m {msg}")])]),t._v(" "),s("li",[s("code",[t._v("git push {remote} {branch}")])])]),t._v(" "),s("p",[t._v("参考："),s("RouterLink",{attrs:{to:"/util/gitbook/ava实现执行系统命令.html"}},[t._v("Java实现执行系统命令")]),t._v("、"),s("RouterLink",{attrs:{to:"/util/gitbook/Java实现复制文件夹下的所有文件.html"}},[t._v("Java实现复制文件夹下的所有文件")])],1)])}),[],!1,null,null,null);a.default=n.exports}}]);