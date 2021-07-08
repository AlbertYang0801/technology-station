(window.webpackJsonp=window.webpackJsonp||[]).push([[53],{412:function(t,e,r){"use strict";r.r(e);var a=r(26),n=Object(a.a)({},(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("h3",{attrs:{id:"重入锁reentrantlock"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#重入锁reentrantlock"}},[t._v("#")]),t._v(" 重入锁ReentrantLock")]),t._v(" "),r("blockquote",[r("p",[t._v("特点：可重入、可中断、可实现公平锁、可获取锁状态。")])]),t._v(" "),r("h4",{attrs:{id:"特点"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#特点"}},[t._v("#")]),t._v(" 特点")]),t._v(" "),r("ol",[r("li",[t._v("可重入")])]),t._v(" "),r("blockquote",[r("p",[t._v("可多次获取锁对象，但是释放锁的次数要和获取锁的次数保持一致。")])]),t._v(" "),r("ul",[r("li",[r("p",[t._v("若获取锁对象比释放的次数多。则当前线程会一直持有锁对象而不释放，其他线程会因为拿不到锁对象而无法进入临界区。")])]),t._v(" "),r("li",[r("p",[t._v("若释放锁的次数比获取锁对象的次数多，则会产生IllegalMonitorStateException异常。")]),t._v(" "),r("p",[r("a",{attrs:{href:"https://gitee.com/zztiyjw/concurrent-practice/tree/master/src/test/java/com/albert/concurrent/book/chapterthree/ReenterLock_01.java",target:"_blank",rel:"noopener noreferrer"}},[t._v("可重入的练习"),r("OutboundLink")],1)])])]),t._v(" "),r("ol",{attrs:{start:"2"}},[r("li",[t._v("可中断")])]),t._v(" "),r("blockquote",[r("p",[t._v("提供了lockInterruptibly()方法；获取锁之后，若有中断发生，会响应中断，停止获取锁对象，并释放已有锁。")])]),t._v(" "),r("p",[r("strong",[t._v("中断可有效解决线程间的死锁问题，线程限时等待请求锁也可以有效解决死锁问题。")])]),t._v(" "),r("p",[r("a",{attrs:{href:"https://gitee.com/zztiyjw/concurrent-practice/tree/master/src/main/java/com/albert/concurrent/lock/deadlock/InterruptDeadLock.java",target:"_blank",rel:"noopener noreferrer"}},[t._v("使用中断解除死锁的练习"),r("OutboundLink")],1)]),t._v(" "),r("ol",{attrs:{start:"3"}},[r("li",[t._v("可实现公平锁。")])]),t._v(" "),r("div",{staticClass:"language- line-numbers-mode"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[t._v("//创建锁对象时，指定为true，即可实现公平锁。\nReentrantLock fairLock = new ReentrantLock(true);\n")])]),t._v(" "),r("div",{staticClass:"line-numbers-wrapper"},[r("span",{staticClass:"line-number"},[t._v("1")]),r("br"),r("span",{staticClass:"line-number"},[t._v("2")]),r("br")])]),r("p",[t._v("扩展：")]),t._v(" "),r("ul",[r("li",[t._v("公平锁：多个线程会按照顺序执行。\n"),r("ul",[r("li",[t._v("优点：不会造成饥饿。")]),t._v(" "),r("li",[t._v("缺点：需要维护一个有序队列，实现成本高，性能低下。")])])]),t._v(" "),r("li",[t._v("非公平锁：已经获取锁对象的线程有更大概率继续持有锁对象。\n"),r("ul",[r("li",[t._v("优点：执行效率高。")]),t._v(" "),r("li",[t._v("容易造成饥饿现象。")])])])]),t._v(" "),r("h4",{attrs:{id:"主要方法"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#主要方法"}},[t._v("#")]),t._v(" 主要方法")]),t._v(" "),r("ul",[r("li",[t._v("lock()方法：获得锁，如果锁已经被占用，则等待。")]),t._v(" "),r("li",[t._v("unlock()方法：释放锁。")]),t._v(" "),r("li",[t._v("tryLock()方法：尝试获得锁，如果成功返回true，失败返回false。该方法不等待，立即返回。")]),t._v(" "),r("li",[t._v("tryLock(long timeout, TimeUnitunit)方法：在指定时间内尝试获得锁，如果成功返回true，失败返回false。"),r("strong",[t._v("(使用此方法申请锁，可有效避免死锁问题)")])]),t._v(" "),r("li",[t._v("isHeldByCurrentThread()方法：判断当前线程是否持有该锁。")])]),t._v(" "),r("h4",{attrs:{id:"参考练习"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#参考练习"}},[t._v("#")]),t._v(" 参考练习")]),t._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"https://gitee.com/zztiyjw/concurrent-practice/tree/master/src/test/java/com/albert/concurrent/book/chapterthree/ReenterLock_01.java",target:"_blank",rel:"noopener noreferrer"}},[t._v("重入锁的练习"),r("OutboundLink")],1)]),t._v(" "),r("li",[r("a",{attrs:{href:"https://gitee.com/zztiyjw/concurrent-practice/tree/master/src/test/java/com/albert/concurrent/book/chapterthree/LockInterrupt_02.java",target:"_blank",rel:"noopener noreferrer"}},[t._v("重入锁中断特性的练习"),r("OutboundLink")],1)]),t._v(" "),r("li",[r("a",{attrs:{href:"https://gitee.com/zztiyjw/concurrent-practice/tree/master/src/test/java/com/albert/concurrent/book/chapterthree/LockTime_03.java",target:"_blank",rel:"noopener noreferrer"}},[t._v("限时等待的练习-指定等待时间"),r("OutboundLink")],1)]),t._v(" "),r("li",[r("a",{attrs:{href:"https://gitee.com/zztiyjw/concurrent-practice/tree/master/src/test/java/com/albert/concurrent/book/chapterthree/LockTime_04.java",target:"_blank",rel:"noopener noreferrer"}},[t._v("限时等待的练习-不指定等待时间"),r("OutboundLink")],1)]),t._v(" "),r("li",[r("a",{attrs:{href:"https://gitee.com/zztiyjw/concurrent-practice/tree/master/src/test/java/com/albert/concurrent/book/chapterthree/FairLock_05.java",target:"_blank",rel:"noopener noreferrer"}},[t._v("公平锁的练习"),r("OutboundLink")],1)])])])}),[],!1,null,null,null);e.default=n.exports}}]);