(window.webpackJsonp=window.webpackJsonp||[]).push([[72],{428:function(r,t,e){"use strict";e.r(t);var a=e(26),i=Object(a.a)({},(function(){var r=this,t=r.$createElement,e=r._self._c||t;return e("ContentSlotsDistributor",{attrs:{"slot-key":r.$parent.slotKey}},[e("h3",{attrs:{id:"循环栅栏-cyclicbarrier"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#循环栅栏-cyclicbarrier"}},[r._v("#")]),r._v(" 循环栅栏 CyclicBarrier")]),r._v(" "),e("hr"),r._v(" "),e("p",[e("code",[r._v("CyclicBarrier")]),r._v(" 是一种多线程并发控制工具，可循环利用，作用是让所有线程都等待完成后才会进行下一步行动。")]),r._v(" "),e("h4",{attrs:{id:"构造方法"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#构造方法"}},[r._v("#")]),r._v(" 构造方法")]),r._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[r._v("public CyclicBarrier(int parties)\npublic CyclicBarrier(int parties, Runnable barrierAction)\n")])]),r._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[r._v("1")]),e("br"),e("span",{staticClass:"line-number"},[r._v("2")]),e("br")])]),e("ul",[e("li",[e("p",[r._v("第一个构造方法可指定参与线程的个数。")])]),r._v(" "),e("li",[e("p",[r._v("第二种构造方法可以指定当 "),e("code",[r._v("CyclicBarrier")]),r._v(" 完成一次计数之后，需要执行的任务。")])])]),r._v(" "),e("h4",{attrs:{id:"重要方法"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#重要方法"}},[r._v("#")]),r._v(" 重要方法")]),r._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[r._v("//到达栅栏，等待\npublic int await() throws InterruptedException, BrokenBarrierException\n//设置等待的超时事件\npublic int await(long timeout, TimeUnit unit) throws InterruptedException, BrokenBarrierException, TimeoutException\n")])]),r._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[r._v("1")]),e("br"),e("span",{staticClass:"line-number"},[r._v("2")]),e("br"),e("span",{staticClass:"line-number"},[r._v("3")]),e("br"),e("span",{staticClass:"line-number"},[r._v("4")]),e("br")])]),e("p",[e("code",[r._v("await()")]),r._v(" 方法，表示线程已经到达栅栏，准备执行。等到约定的线程数都到达之后，即计数完成，开始往下执行。\n若有指定需要在计数完成后指定的任务，则先执行指定的任务。")]),r._v(" "),e("h4",{attrs:{id:"cyclicbarrier-和-countdownlatch-的区别"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#cyclicbarrier-和-countdownlatch-的区别"}},[r._v("#")]),r._v(" CyclicBarrier 和 CountDownLatch 的区别")]),r._v(" "),e("ul",[e("li",[e("p",[e("code",[r._v("CountDownLatch")]),r._v(" 是一次性的，而 "),e("code",[r._v("CyclicBarrier")]),r._v(" 是可循环利用的。")])]),r._v(" "),e("li",[e("p",[e("code",[r._v("CountDownLatch")]),r._v(" 参与线程的职责是不一样的，"),e("code",[r._v("await()")]),r._v(" 是在等待倒计时结束，"),e("code",[r._v("countDown()")]),r._v(" 是进行一次倒计时。")])]),r._v(" "),e("li",[e("p",[e("code",[r._v("CyclicBarrier")]),r._v(" 参与的线程的职责都是在等待计数结束。")])])]),r._v(" "),e("h4",{attrs:{id:"练习例子"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#练习例子"}},[r._v("#")]),r._v(" 练习例子")]),r._v(" "),e("p",[e("a",{attrs:{href:"https://gitee.com/zztiyjw/concurrent-practice/tree/master/src/test/java/com/albert/concurrent/book/chapterthree/CyclicBarrier_09.java",target:"_blank",rel:"noopener noreferrer"}},[r._v("循环栅栏并发控制工具 CyclicBarrier 的练习"),e("OutboundLink")],1)])])}),[],!1,null,null,null);t.default=i.exports}}]);