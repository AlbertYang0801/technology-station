(window.webpackJsonp=window.webpackJsonp||[]).push([[64],{423:function(v,_,e){"use strict";e.r(_);var t=e(26),o=Object(t.a)({},(function(){var v=this,_=v.$createElement,e=v._self._c||_;return e("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[e("h2",{attrs:{id:"线程池的调度过程"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#线程池的调度过程"}},[v._v("#")]),v._v(" 线程池的调度过程")]),v._v(" "),e("ol",[e("li",[v._v("根据"),e("code",[v._v("初始化参数")]),v._v("创建线程池，刚创建时，线程池内"),e("code",[v._v("没有")]),v._v("线程。")]),v._v(" "),e("li",[v._v("当有新的任务进到线程池的时候，会立即"),e("code",[v._v("新增")]),v._v("线程执行任务。")]),v._v(" "),e("li",[v._v("若线程数"),e("code",[v._v("等于")]),v._v("核心线程数时，这时进来的任务会被添加到"),e("code",[v._v("任务队列")]),v._v("中，而线程会从任务队列中获取任务执行。")]),v._v(" "),e("li",[v._v("线程数"),e("code",[v._v("等于")]),v._v("核心线程数且"),e("code",[v._v("任务队列已满")]),v._v("，这时候会在线程池中"),e("code",[v._v("创建新线程")]),v._v("来执行任务。")]),v._v(" "),e("li",[v._v("若线程数"),e("code",[v._v("等于")]),v._v("最大线程数，且任务队列"),e("code",[v._v("已满")]),v._v("，此时会执行线程池对应的"),e("code",[v._v("拒绝策略")]),v._v("。")]),v._v(" "),e("li",[v._v("当任务队列中没有任务，且线程等待时间超过空闲时间，则该线程会被回收。最终线程池中的线程数量会保持在核心线程数的大小。")])])])}),[],!1,null,null,null);_.default=o.exports}}]);