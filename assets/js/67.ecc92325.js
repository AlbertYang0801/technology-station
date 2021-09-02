(window.webpackJsonp=window.webpackJsonp||[]).push([[67],{427:function(t,e,r){"use strict";r.r(e);var a=r(26),v=Object(a.a)({},(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("h3",{attrs:{id:"读写锁readwritelock"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#读写锁readwritelock"}},[t._v("#")]),t._v(" 读写锁ReadWriteLock")]),t._v(" "),r("hr"),t._v(" "),r("p",[t._v("锁可分为排他锁和共享锁。"),r("code",[t._v("synchronized")]),t._v("和"),r("code",[t._v("ReentrantLock")]),t._v("都是排他锁，只允许线程独占资源。而在多个线程进行读操作的时候，单个线程占用资源进行读取，其他需要读取的线程会进行等待，而这种等待是不合理的。读写锁"),r("code",[t._v("ReadWriteLock")]),t._v("就是针对读操作和写操作进行的锁优化。")]),t._v(" "),r("h4",{attrs:{id:"读写锁互斥规则"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#读写锁互斥规则"}},[t._v("#")]),t._v(" 读写锁互斥规则")]),t._v(" "),r("ul",[r("li",[r("code",[t._v("读-读不互斥")]),t._v("：并发执行读操作，提高效率。")]),t._v(" "),r("li",[r("code",[t._v("读-写互斥")]),t._v("：读会阻塞写，写也会阻塞读。")]),t._v(" "),r("li",[r("code",[t._v("写-写互斥")]),t._v("：写线程会独占。")])]),t._v(" "),r("h4",{attrs:{id:"注意事项"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#注意事项"}},[t._v("#")]),t._v(" 注意事项")]),t._v(" "),r("p",[t._v("读写锁需要注意：")]),t._v(" "),r("ol",[r("li",[t._v("读锁与读锁之间是不互斥的，读锁与写锁之间是互斥的。")]),t._v(" "),r("li",[t._v("写锁与其它锁都是互斥的。")]),t._v(" "),r("li",[t._v("保证写锁是独占资源的。")]),t._v(" "),r("li",[t._v("读线程之间是并发执行的，而写线程执行的时候是独占的。能提高读线程的执行效率。")])]),t._v(" "),r("h4",{attrs:{id:"读写锁的练习和可重入锁的效率对比"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#读写锁的练习和可重入锁的效率对比"}},[t._v("#")]),t._v(" 读写锁的练习和可重入锁的效率对比")]),t._v(" "),r("p",[t._v("与可重入锁比较：")]),t._v(" "),r("ul",[r("li",[t._v("可重入锁是互斥的。")]),t._v(" "),r("li",[t._v("将读线程和写线程的锁换成可重入锁，之后线程会按照顺序执行，执行效率变慢。")])]),t._v(" "),r("h4",{attrs:{id:"参考练习"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#参考练习"}},[t._v("#")]),t._v(" 参考练习")]),t._v(" "),r("p",[r("a",{attrs:{href:"https://gitee.com/zztiyjw/concurrent-practice/blob/master/src/test/java/com/albert/concurrent/book/chapterthree/ReadWriteLock_08.java",target:"_blank",rel:"noopener noreferrer"}},[t._v("读写锁的练习和可重入锁的效率对比"),r("OutboundLink")],1)])])}),[],!1,null,null,null);e.default=v.exports}}]);