(window.webpackJsonp=window.webpackJsonp||[]).push([[75],{433:function(s,a,n){"use strict";n.r(a);var t=n(26),e=Object(t.a)({},(function(){var s=this,a=s.$createElement,n=s._self._c||a;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("h1",{attrs:{id:"多线程设计模式"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#多线程设计模式"}},[s._v("#")]),s._v(" 多线程设计模式")]),s._v(" "),n("h2",{attrs:{id:"单例模式"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#单例模式"}},[s._v("#")]),s._v(" 单例模式")]),s._v(" "),n("p",[s._v("单例模式在并发情况下，需要保证线程安全，来实现单例对象的线程安全。")]),s._v(" "),n("p",[n("a",{attrs:{href:"https://albertyang0801.github.io/blog/design/build/%E5%8D%95%E4%BE%8B%E6%A8%A1%E5%BC%8F.html#%E6%87%92%E6%B1%89%E5%BC%8F",target:"_blank",rel:"noopener noreferrer"}},[s._v("单例设计模式笔记"),n("OutboundLink")],1)]),s._v(" "),n("p",[s._v("在单例模式保证线程安全的几种方式中，静态内部类和枚举的效率最高，因为没有涉及到加锁等消耗性能的问题。")]),s._v(" "),n("ul",[n("li",[n("p",[s._v("静态内部类")]),s._v(" "),n("div",{staticClass:"language-JAVA line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-java"}},[n("code",[s._v("\t"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/**\n     * 静态内部类，在外部类被加载的时候不会立即加载。\n     * 只有在调用该类里的参数或方法时，对象实例才会被加载。达到了懒加载的效果。\n     * 在类加载的时候，是线程安全的。达到了线程安全的效果。\n     */")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("private")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("static")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("SingletonStaticClass")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("private")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("static")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("final")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("SingletonStatic")]),s._v(" SINGLETONSTATIC "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("new")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("SingletonStatic")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("static")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("SingletonStatic")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("getInstance")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("SingletonStaticClass")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("SINGLETONSTATIC"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\t\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br")])])])]),s._v(" "),n("h2",{attrs:{id:"不变模式"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#不变模式"}},[s._v("#")]),s._v(" 不变模式")]),s._v(" "),n("p",[s._v("在并发情况下，若对象在创建后，内部状态永久不会被改变，也能保证并发情况下的线程安全问题。依靠对象的不可变性，可以确保并发情况下访问到的对象是相同的，这就是不变模式。")]),s._v(" "),n("p",[n("em",[s._v("不变模式情况下，不需要使用同步操作来实现线程安全。")])]),s._v(" "),n("h3",{attrs:{id:"不变模式实现"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#不变模式实现"}},[s._v("#")]),s._v(" 不变模式实现")]),s._v(" "),n("p",[s._v("在 Java 中，实现不变模式，确保对象在创建后不会发生任何改变。")]),s._v(" "),n("ul",[n("li",[n("p",[s._v("去除对象的 setter 方法以及修改属性的方法。")])]),s._v(" "),n("li",[n("p",[s._v("将所有属性设置为私有，用 final 标记。")])]),s._v(" "),n("li",[n("p",[s._v("确保没有子类可以重载修改对象行为。")])]),s._v(" "),n("li",[n("p",[s._v("有一个创建完整对象的构造函数。")]),s._v(" "),n("hr"),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("public final class Product {\n\n    private final String no;\n    private final String name;\n    private final double price;\n\n    public Product(String no,String name,double price){\n        super();\n        this.no=no;\n        this.name=name;\n        this.price=price;\n    }\n\n    public String getNo() {\n        return no;\n    }\n\n    public String getName() {\n        return name;\n    }\n\n    public double getPrice() {\n        return price;\n    }\n}\n\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br"),n("span",{staticClass:"line-number"},[s._v("23")]),n("br"),n("span",{staticClass:"line-number"},[s._v("24")]),n("br"),n("span",{staticClass:"line-number"},[s._v("25")]),n("br"),n("span",{staticClass:"line-number"},[s._v("26")]),n("br")])])])]),s._v(" "),n("h3",{attrs:{id:"不变模式的应用"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#不变模式的应用"}},[s._v("#")]),s._v(" 不变模式的应用")]),s._v(" "),n("p",[s._v("在 JDK 中，不变模式的应用很广泛。最经典的就是 "),n("code",[s._v("java.lang.String")]),s._v(" 类。")]),s._v(" "),n("p",[s._v("所有的包装类都是使用不变模式实现的。")]),s._v(" "),n("div",{staticClass:"language-JAVA line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-java"}},[n("code",[n("span",{pre:!0,attrs:{class:"token class-name"}},[n("span",{pre:!0,attrs:{class:"token namespace"}},[s._v("java"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("lang"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")])]),s._v("String")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token class-name"}},[n("span",{pre:!0,attrs:{class:"token namespace"}},[s._v("java"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("lang"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")])]),s._v("Boolean")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token class-name"}},[n("span",{pre:!0,attrs:{class:"token namespace"}},[s._v("java"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("lang"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")])]),s._v("Byte")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token class-name"}},[n("span",{pre:!0,attrs:{class:"token namespace"}},[s._v("java"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("lang"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")])]),s._v("Character")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token class-name"}},[n("span",{pre:!0,attrs:{class:"token namespace"}},[s._v("java"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("lang"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")])]),s._v("Integer")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token class-name"}},[n("span",{pre:!0,attrs:{class:"token namespace"}},[s._v("java"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("lang"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")])]),s._v("Short")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token class-name"}},[n("span",{pre:!0,attrs:{class:"token namespace"}},[s._v("java"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("lang"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")])]),s._v("Long")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token class-name"}},[n("span",{pre:!0,attrs:{class:"token namespace"}},[s._v("java"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("lang"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")])]),s._v("Float")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token class-name"}},[n("span",{pre:!0,attrs:{class:"token namespace"}},[s._v("java"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("lang"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")])]),s._v("Double")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br")])]),n("h2",{attrs:{id:"生产者-消费者模式"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#生产者-消费者模式"}},[s._v("#")]),s._v(" 生产者-消费者模式")])])}),[],!1,null,null,null);a.default=e.exports}}]);