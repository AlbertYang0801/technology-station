(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{388:function(a,t,r){"use strict";r.r(t);var s=r(26),n=Object(s.a)({},(function(){var a=this,t=a.$createElement,r=a._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[r("h2",{attrs:{id:"spring-事务总结"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#spring-事务总结"}},[a._v("#")]),a._v(" Spring 事务总结")]),a._v(" "),r("h3",{attrs:{id:"编程式事务"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#编程式事务"}},[a._v("#")]),a._v(" 编程式事务")]),a._v(" "),r("p",[a._v("在代码中硬编码，不推荐使用。")]),a._v(" "),r("h3",{attrs:{id:"声明式事务"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#声明式事务"}},[a._v("#")]),a._v(" 声明式事务")]),a._v(" "),r("ul",[r("li",[a._v("基于注解的声明式事务")]),a._v(" "),r("li",[a._v("基于 XML 的声明式事务")])]),a._v(" "),r("h3",{attrs:{id:"transactional-注解"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#transactional-注解"}},[a._v("#")]),a._v(" @Transactional 注解")]),a._v(" "),r("p",[a._v("Exception 分为运行时异常 RuntimeException 和非运行时异常。事务管理能保证出现异常情况的时候保证数据的一致性。")]),a._v(" "),r("p",[a._v("默认 "),r("code",[a._v("@Transactional")]),a._v(" 注解只会在遇到 RuntimeException 类型异常或者 Error时，才会回滚事务。遇到其它异常，Spring 不会回滚事务。")]),a._v(" "),r("h4",{attrs:{id:"作用范围"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#作用范围"}},[a._v("#")]),a._v(" 作用范围")]),a._v(" "),r("p",[a._v("当 "),r("code",[a._v("@Transactional")]),a._v("注解作用于类上的时，该类的所有方法都将具有该类型的事务属性，同样的我们也可以在方法级别上使用该注解来覆盖类级别的定义。")]),a._v(" "),r("h4",{attrs:{id:"ttransactional-rollbackfor-exception-class"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#ttransactional-rollbackfor-exception-class"}},[a._v("#")]),a._v(" @Ttransactional(rollbackFor=Exception.class)")]),a._v(" "),r("p",[a._v("在注解上配置 "),r("code",[a._v("rollbackFor")]),a._v(" 属性并指定异常类，则在目标方法中抛出的异常类及其子类时，事务同样会回滚。")]),a._v(" "),r("p",[a._v("比如配置 "),r("code",[a._v("rollbackFor=Exception.class")]),a._v(" 时，若在目标方法出现 Exception 类及其子类异常时便会回滚。")]),a._v(" "),r("h4",{attrs:{id:"ttransactional-只有应用到-public-方法才会生效"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#ttransactional-只有应用到-public-方法才会生效"}},[a._v("#")]),a._v(" @Ttransactional 只有应用到 public 方法才会生效")]),a._v(" "),r("p",[a._v("只有 "),r("code",[a._v("@Ttransactional")]),a._v(" 注解应用到 public 方法上时，才能进行事务管理。")]),a._v(" "),r("h3",{attrs:{id:"参考链接"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#参考链接"}},[a._v("#")]),a._v(" 参考链接")]),a._v(" "),r("p",[r("a",{attrs:{href:"https://developer.ibm.com/zh/articles/j-master-spring-transactional-use/",target:"_blank",rel:"noopener noreferrer"}},[a._v("透彻的掌握 Spring 中 @transactional 的使用"),r("OutboundLink")],1)])])}),[],!1,null,null,null);t.default=n.exports}}]);