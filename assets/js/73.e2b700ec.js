(window.webpackJsonp=window.webpackJsonp||[]).push([[73],{430:function(e,s,a){"use strict";a.r(s);var n=a(26),t=Object(n.a)({},(function(){var e=this,s=e.$createElement,a=e._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h2",{attrs:{id:"线程池的创建过程"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#线程池的创建过程"}},[e._v("#")]),e._v(" 线程池的创建过程")]),e._v(" "),a("p",[e._v("线程池的创建是基于 ThreadPoolExecutor 类来实现的。")]),e._v(" "),a("h3",{attrs:{id:"线程池创建时的7个参数"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#线程池创建时的7个参数"}},[e._v("#")]),e._v(" 线程池创建时的7个参数")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("public ThreadPoolExecutor(int corePoolSize,\n                              int maximumPoolSize,\n                              long keepAliveTime,\n                              TimeUnit unit,\n                              BlockingQueue<Runnable> workQueue,\n                              ThreadFactory threadFactory,\n                              RejectedExecutionHandler handler) {\n       ......\n    }\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br"),a("span",{staticClass:"line-number"},[e._v("5")]),a("br"),a("span",{staticClass:"line-number"},[e._v("6")]),a("br"),a("span",{staticClass:"line-number"},[e._v("7")]),a("br"),a("span",{staticClass:"line-number"},[e._v("8")]),a("br"),a("span",{staticClass:"line-number"},[e._v("9")]),a("br")])]),a("p",[e._v("对应各个参数的含义：")]),e._v(" "),a("p",[a("em",[e._v("1.corePoolSize")])]),e._v(" "),a("p",[e._v("核心线程数。即使在空闲时也要保留在线程池中的线程数，除非设置了 "),a("code",[e._v("allowCoreThreadTimeOut")]),e._v(" 。")]),e._v(" "),a("p",[a("em",[e._v("2.maximumPoolSize")])]),e._v(" "),a("p",[e._v("最大线程数。当线程数大于核心线程数时，一个任务被提交到线程池后，首先会缓存到工作队列中，如果工作队列满了，则会在线程池中创建一个新线程，而线程数量会有一个最大数量的限制，即为 "),a("code",[e._v("maximumPoolSize")]),e._v(" 。")]),e._v(" "),a("p",[a("em",[e._v("3.keepAliveTime")])]),e._v(" "),a("p",[e._v("线程空闲时间。一个线程处于空闲，并且线程数量大于核心线程数，那么该线程会在指定时间后被回收，指定时间由 "),a("code",[e._v("keepAliveTime")]),e._v(" 指定。")]),e._v(" "),a("p",[a("em",[e._v("4.TimeUnit unit")])]),e._v(" "),a("p",[e._v("线程空闲时间单位。")]),e._v(" "),a("p",[a("em",[e._v("5.workQueue")])]),e._v(" "),a("p",[e._v("存放线程任务类的任务队列。当线程池没有空闲线程时，在执行任务之前将任务保存在队列中，该队列仅保存由 "),a("code",[e._v("execute")]),e._v(" 方法提交的任务。")]),e._v(" "),a("p",[a("em",[e._v("6.ThreadFactory threadFactory")])]),e._v(" "),a("p",[e._v("线程工厂，可设置线程为守护线程，自定义线程名称等。")]),e._v(" "),a("p",[a("em",[e._v("7.RejectedExecutionHandler handler")])]),e._v(" "),a("p",[e._v("任务拒绝策略。当任务队列里的任务长度达到最大，线程池中的线程数量达到最大，就会执行任务拒绝策略。")]),e._v(" "),a("h3",{attrs:{id:"线程池中的任务队列"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#线程池中的任务队列"}},[e._v("#")]),e._v(" 线程池中的任务队列")]),e._v(" "),a("p",[a("em",[e._v("1.ArrayBlockingQueue （有界队列）")])]),e._v(" "),a("p",[e._v("是一个基于数组结构的有界阻塞队列，此队列按 "),a("code",[e._v("FIFO（先进先出")]),e._v(" 原则对元素进行排序。")]),e._v(" "),a("p",[a("em",[e._v("2.LinkedBlockingQueue （无界队列）")])]),e._v(" "),a("p",[e._v("一个基于链表结构的阻塞队列，此队列按 "),a("code",[e._v("FIFO （先进先出）")]),e._v("  排序元素，吞吐量通常要高于 "),a("code",[e._v("ArrayBlockingQueue")]),e._v(" 。静态工厂方法 "),a("code",[e._v("Executors.newFixedThreadPool()")]),e._v(" 使用了这个队列。")]),e._v(" "),a("p",[a("em",[e._v("3.SynchronousQueue（同步队列）")])]),e._v(" "),a("p",[e._v("一个不存储元素的阻塞队列。每个插入操作必须等到另一个线程调用移除操作，否则插入操作一直处于阻塞状态，吞吐量通常要高于 "),a("code",[e._v("LinkedBlockingQueue")]),e._v(" ，静态工厂方法 "),a("code",[e._v("Executors.newCachedThreadPool")]),e._v(" 使用了这个队列。")]),e._v(" "),a("p",[a("em",[e._v("4.DelayQueue（延迟队列）")])]),e._v(" "),a("p",[e._v("一个任务定时周期的延迟执行的队列。根据指定的执行时间从小到大排序，否则根据插入到队列的先后排序。")]),e._v(" "),a("p",[a("em",[e._v("5.PriorityBlockingQueue（优先级队列）")])]),e._v(" "),a("p",[e._v("一个具有优先级的无限阻塞队列。")]),e._v(" "),a("h3",{attrs:{id:"四种拒绝策略"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#四种拒绝策略"}},[e._v("#")]),e._v(" 四种拒绝策略")]),e._v(" "),a("hr"),e._v(" "),a("h4",{attrs:{id:"直接抛出异常-abortpolicy"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#直接抛出异常-abortpolicy"}},[e._v("#")]),e._v(" 直接抛出异常：AbortPolicy")]),e._v(" "),a("p",[e._v("默认的任务拒绝策略，对于新增任务，拒绝处理，直接抛出 "),a("code",[e._v("RejectedExecutionException")]),e._v(" 异常。")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('public static class AbortPolicy implements RejectedExecutionHandler {\n    \n    public AbortPolicy() { }\n\n    public void rejectedExecution(Runnable r, ThreadPoolExecutor e) {\n        //直接抛出异常\n        throw new RejectedExecutionException("Task " + r.toString() +\n                                             " rejected from " +\n                                             e.toString());\n    }\n}\n')])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br"),a("span",{staticClass:"line-number"},[e._v("5")]),a("br"),a("span",{staticClass:"line-number"},[e._v("6")]),a("br"),a("span",{staticClass:"line-number"},[e._v("7")]),a("br"),a("span",{staticClass:"line-number"},[e._v("8")]),a("br"),a("span",{staticClass:"line-number"},[e._v("9")]),a("br"),a("span",{staticClass:"line-number"},[e._v("10")]),a("br"),a("span",{staticClass:"line-number"},[e._v("11")]),a("br")])]),a("h4",{attrs:{id:"调用当前线程-callerrunspolicy"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#调用当前线程-callerrunspolicy"}},[e._v("#")]),e._v(" 调用当前线程：CallerRunsPolicy")]),e._v(" "),a("p",[e._v("调用自己的线程来执行任务，不创建新的线程，而是用自己当前线程进行执行，会降低对于新任务的提交速度，影响整体性能。如果程序能够容许延时，并且不能丢弃每一个任务，即可采取这个策略。")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("public static class CallerRunsPolicy implements RejectedExecutionHandler {\n    public CallerRunsPolicy() { }\n    public void rejectedExecution(Runnable r, ThreadPoolExecutor e) {\n        if (!e.isShutdown()) {\n            //调用自己的线程执行\n            r.run();\n        }\n    }\n}\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br"),a("span",{staticClass:"line-number"},[e._v("5")]),a("br"),a("span",{staticClass:"line-number"},[e._v("6")]),a("br"),a("span",{staticClass:"line-number"},[e._v("7")]),a("br"),a("span",{staticClass:"line-number"},[e._v("8")]),a("br"),a("span",{staticClass:"line-number"},[e._v("9")]),a("br")])]),a("h4",{attrs:{id:"不做处理-discardpolicy"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#不做处理-discardpolicy"}},[e._v("#")]),e._v(" 不做处理： DiscardPolicy")]),e._v(" "),a("p",[e._v("不做任何处理，直接丢掉该任务.")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("public static class DiscardPolicy implements RejectedExecutionHandler {\n   \n    public DiscardPolicy() { }\n\n    public void rejectedExecution(Runnable r, ThreadPoolExecutor e) {\n    }\n}\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br"),a("span",{staticClass:"line-number"},[e._v("5")]),a("br"),a("span",{staticClass:"line-number"},[e._v("6")]),a("br"),a("span",{staticClass:"line-number"},[e._v("7")]),a("br")])]),a("h4",{attrs:{id:"删除队列任务-discardoldestpolicy"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#删除队列任务-discardoldestpolicy"}},[e._v("#")]),e._v(" 删除队列任务： DiscardOldestPolicy")]),e._v(" "),a("p",[e._v("删除任务队列中最早的任务，将新增任务添加到任务队列中。")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("public static class DiscardOldestPolicy implements RejectedExecutionHandler {\n   \n    public DiscardOldestPolicy() { }\n\n    public void rejectedExecution(Runnable r, ThreadPoolExecutor e) {\n        if (!e.isShutdown()) {\n            //删除线程池的任务队列的第一个元素\n            e.getQueue().poll();\n            e.execute(r);\n        }\n    }\n}\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br"),a("span",{staticClass:"line-number"},[e._v("5")]),a("br"),a("span",{staticClass:"line-number"},[e._v("6")]),a("br"),a("span",{staticClass:"line-number"},[e._v("7")]),a("br"),a("span",{staticClass:"line-number"},[e._v("8")]),a("br"),a("span",{staticClass:"line-number"},[e._v("9")]),a("br"),a("span",{staticClass:"line-number"},[e._v("10")]),a("br"),a("span",{staticClass:"line-number"},[e._v("11")]),a("br"),a("span",{staticClass:"line-number"},[e._v("12")]),a("br")])])])}),[],!1,null,null,null);s.default=t.exports}}]);