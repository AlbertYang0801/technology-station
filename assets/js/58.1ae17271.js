(window.webpackJsonp=window.webpackJsonp||[]).push([[58],{417:function(e,a,n){"use strict";n.r(a);var t=n(26),r=Object(t.a)({},(function(){var e=this,a=e.$createElement,n=e._self._c||a;return n("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[n("h3",{attrs:{id:"自旋锁"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#自旋锁"}},[e._v("#")]),e._v(" 自旋锁")]),e._v(" "),n("h4",{attrs:{id:"概述"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#概述"}},[e._v("#")]),e._v(" 概述")]),e._v(" "),n("p",[e._v("自旋锁是采用让当前线程不停地的在循环体内执行实现的，当循环的条件被其他线程改变时才能进入临界区。使用原子引用变量"),n("code",[e._v("AtomicReference<V>")]),e._v("可实现自旋锁。")]),e._v(" "),n("h4",{attrs:{id:"代码实现"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#代码实现"}},[e._v("#")]),e._v(" 代码实现")]),e._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("public class SpinLock {\n\n    /**\n     * 原子引用变量\n     */\n    private static AtomicReference<Thread atomicReference = new AtomicReference<();\n\n    public void lock() {\n        Thread thread = Thread.currentThread();\n        //当atomicReference为空时，将当前线程赋值给atomicReference（注意：第一个线程进入，while内条件为false，不会进入循环）\n        while (!atomicReference.compareAndSet(null, thread)) {\n        }\n    }\n    public void unlock() {\n        Thread thread = Thread.currentThread();\n        atomicReference.compareAndSet(thread, null);\n    }\n\n}\n")])]),e._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[e._v("1")]),n("br"),n("span",{staticClass:"line-number"},[e._v("2")]),n("br"),n("span",{staticClass:"line-number"},[e._v("3")]),n("br"),n("span",{staticClass:"line-number"},[e._v("4")]),n("br"),n("span",{staticClass:"line-number"},[e._v("5")]),n("br"),n("span",{staticClass:"line-number"},[e._v("6")]),n("br"),n("span",{staticClass:"line-number"},[e._v("7")]),n("br"),n("span",{staticClass:"line-number"},[e._v("8")]),n("br"),n("span",{staticClass:"line-number"},[e._v("9")]),n("br"),n("span",{staticClass:"line-number"},[e._v("10")]),n("br"),n("span",{staticClass:"line-number"},[e._v("11")]),n("br"),n("span",{staticClass:"line-number"},[e._v("12")]),n("br"),n("span",{staticClass:"line-number"},[e._v("13")]),n("br"),n("span",{staticClass:"line-number"},[e._v("14")]),n("br"),n("span",{staticClass:"line-number"},[e._v("15")]),n("br"),n("span",{staticClass:"line-number"},[e._v("16")]),n("br"),n("span",{staticClass:"line-number"},[e._v("17")]),n("br"),n("span",{staticClass:"line-number"},[e._v("18")]),n("br"),n("span",{staticClass:"line-number"},[e._v("19")]),n("br")])]),n("h4",{attrs:{id:"实现原理"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#实现原理"}},[e._v("#")]),e._v(" 实现原理")]),e._v(" "),n("p",[e._v("1.第一个线程进入之后，请求lock()方法，可以正常拿到锁资源，不会进入到循环体。")]),e._v(" "),n("p",[e._v("首次atomicReference默认为空，atomicReference.compareAndSet(null, thread)意为若atomicReference为null，则将thread赋值给atomicReference，并返回true。所以第一个线程不会进入到循环体，并正常执行。")]),e._v(" "),n("p",[e._v("2.在第一个线程持有锁资源时，其他线程进入会不停的在循环体执行。")]),e._v(" "),n("p",[e._v("因为在第一个线程不释放锁的情况下，atomicReference的值为第一个线程值,atomicReference.compareAndSet(null, thread)判断会返回false。")]),e._v(" "),n("p",[e._v("3.第一个线程请求unlock()方法，释放锁资源。")]),e._v(" "),n("p",[e._v("atomicReference.compareAndSet(thread,null)意为若atomicReference等于当前线程值，则将atomicReference赋值为null。")]),e._v(" "),n("p",[e._v("4.当第一个线程请求unlock()方法之后，atomicReference的值变为null。")]),e._v(" "),n("p",[e._v("其它在循环体的线程，atomicReference.compareAndSet(null, thread)判断为true，会跳出循环体，抢占锁资源，多个线程之间会随机抢占。")]),e._v(" "),n("p",[e._v("注意：该例子为不可重入锁，且为非公平锁（多个在循环体里的线程，随机抢占锁，非公平），获得锁的先后顺序，不会按照进入lock的先后顺序进行(可重入锁和公平锁的实现见下方章节)。")])])}),[],!1,null,null,null);a.default=r.exports}}]);