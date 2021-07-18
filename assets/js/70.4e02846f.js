(window.webpackJsonp=window.webpackJsonp||[]).push([[70],{429:function(t,r,e){"use strict";e.r(r);var a=e(26),o=Object(a.a)({},(function(){var t=this,r=t.$createElement,e=t._self._c||r;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h3",{attrs:{id:"locksupport-阻塞工具"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#locksupport-阻塞工具"}},[t._v("#")]),t._v(" LockSupport 阻塞工具")]),t._v(" "),e("hr"),t._v(" "),e("p",[e("code",[t._v("LockSupport")]),t._v(" 是一个非常方便实用的线程阻塞工具，它可以在线程内任意位置让线程阻塞。不需要获取任何锁，也不会抛出中断异常。")]),t._v(" "),e("h4",{attrs:{id:"常用方法"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#常用方法"}},[t._v("#")]),t._v(" 常用方法")]),t._v(" "),e("ul",[e("li",[t._v("阻塞方法\n"),e("ul",[e("li",[e("code",[t._v("park()")]),t._v(" ：直接阻塞")]),t._v(" "),e("li",[e("code",[t._v("parkNaors()")]),t._v(" ：限时阻塞")])])])]),t._v(" "),e("p",[e("code",[t._v("LockSupport.park()")]),t._v(" 方法可实现限时等待，还能支持中断响应，但是并不会抛出 "),e("code",[t._v("InterruptedException")]),t._v(" 异常，它只会默默返回。")]),t._v(" "),e("ul",[e("li",[t._v("取消阻塞\n"),e("ul",[e("li",[e("code",[t._v("unpark()")]),t._v(" ：取消线程阻塞状态")])])])]),t._v(" "),e("h4",{attrs:{id:"总结"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#总结"}},[t._v("#")]),t._v(" 总结")]),t._v(" "),e("p",[t._v("与 "),e("code",[t._v("Thread.suspend()")]),t._v(" 方法相比，推荐使用该方法进行线程阻塞。因为 "),e("code",[t._v("Thread.suspend()")]),t._v(" 阻塞当前线程时，可能会产生死锁。")]),t._v(" "),e("p",[t._v("而 "),e("code",[t._v("LockSupport")]),t._v(" 内部使用的是类似信号量的机制，每个线程都有一个许可，若许可可用，则  "),e("code",[t._v("park()")]),t._v(" 方法会立即返回消费该许可，将许可变为不可用，对应线程会阻塞。而 "),e("code",[t._v("unpark()")]),t._v(" 方法会使一个许可变为可用，所以即使先调用 "),e("code",[t._v("unpark()")]),t._v(" 方法， "),e("code",[t._v("park()")]),t._v("方法也会顺利执行并结束，而不会造成死锁。")]),t._v(" "),e("h4",{attrs:{id:"参考练习"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#参考练习"}},[t._v("#")]),t._v(" 参考练习")]),t._v(" "),e("p",[e("a",{attrs:{href:"https://gitee.com/zztiyjw/concurrent-practice/tree/master/src/test/java/com/albert/concurrent/book/chapterthree/LockSupport_10.java",target:"_blank",rel:"noopener noreferrer"}},[t._v("LockSupport的简单练习"),e("OutboundLink")],1)])])}),[],!1,null,null,null);r.default=o.exports}}]);