(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{502:function(t,e,a){"use strict";a.r(e);var s=a(20),r=Object(s.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("p",[t._v("最近开始找工作，总结了一些前端面试可能会问的问题")]),t._v(" "),a("h3",{attrs:{id:"_1-vue生命周期-6个"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-vue生命周期-6个"}},[t._v("#")]),t._v(" 1.Vue生命周期（6个）")]),t._v(" "),a("p",[t._v("beforeCreate，created，beforeMounte，mounted，beforeDestroy，destroyed")]),t._v(" "),a("h3",{attrs:{id:"_2-jwt是否了解"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-jwt是否了解"}},[t._v("#")]),t._v(" 2.JWT是否了解，")]),t._v(" "),a("p",[t._v("答：原理不是很了解，只知道token的使用")]),t._v(" "),a("h3",{attrs:{id:"_3-vuex的api有哪些-一般怎么使用-用在什么地方"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-vuex的api有哪些-一般怎么使用-用在什么地方"}},[t._v("#")]),t._v(" 3.VueX的API有哪些，一般怎么使用，用在什么地方？")]),t._v(" "),a("p",[t._v("答：token的存储，用户信息的存储，公共数据的存储。")]),t._v(" "),a("p",[t._v("Api：state、getter、mutation、action、（map…），")]),t._v(" "),a("p",[t._v("Store本质是在构造函数中new 一个Vue示例vm，vm的data为{state}，同时设置state的get和set方法，get直接返回vm.state，set则发出警告，只能通过mutation进行设置数据。")]),t._v(" "),a("p",[t._v("getter可以对数据进行缓存，即为vm的computed属性，调用getter的时候实际是调用内部vm对应的computed属性。")]),t._v(" "),a("p",[t._v("mutation函数会存到一个数组中（因为会有重名），然后调用commit的时候会拿出对应的方法对state进行修改。")]),t._v(" "),a("p",[t._v("Action会判断函数是否有then方法，进行异步调用。")]),t._v(" "),a("p",[t._v("namespace本质是state.[namespace]，map...方法做了转换")]),t._v(" "),a("h3",{attrs:{id:"_4-vue-router-是否了解-原理是什么"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-vue-router-是否了解-原理是什么"}},[t._v("#")]),t._v(" 4.Vue-Router 是否了解，原理是什么？")]),t._v(" "),a("p",[t._v("Vue路由有2种，hash和history，hash监听hashChange, history监听popstate事件。")]),t._v(" "),a("h3",{attrs:{id:"_5-箭头函数的特点-有无arguments-是否可以使用new-为什么"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_5-箭头函数的特点-有无arguments-是否可以使用new-为什么"}},[t._v("#")]),t._v(" 5.箭头函数的特点，有无arguments，是否可以使用new ，为什么")]),t._v(" "),a("p",[t._v("答：箭头函数为匿名函数，作用域为其上层作用域，this为其上层的this，无arguments参数，不可以作为构造函数。")]),t._v(" "),a("h3",{attrs:{id:"_6-webpack的loader和plugin的区别"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_6-webpack的loader和plugin的区别"}},[t._v("#")]),t._v(" 6.Webpack的loader和plugin的区别")]),t._v(" "),a("p",[t._v("Loader是对各种文件的加载和处理，为流处理，上一个loader的结果为下一个的参数。")]),t._v(" "),a("p",[t._v("Plugin是插件，是对webpack的补充，在webpack的loader处理之后对结果进行修改，它是基于事件机制，在webpack编译过程的事件进行监听，处理相关结果。")]),t._v(" "),a("h3",{attrs:{id:"_7-websocket是否了解-在哪些地方用会比较合适"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_7-websocket是否了解-在哪些地方用会比较合适"}},[t._v("#")]),t._v(" 7.Websocket是否了解，在哪些地方用会比较合适？")]),t._v(" "),a("p",[t._v("最大特点就是，服务器可以主动向客户端推送信息，客户端也可以主动向服务器发送信息，是真正的双向平等对话，属于服务器推送技术的一种。(聊天室)")]),t._v(" "),a("h3",{attrs:{id:"_8-es6-的import-、export是否有了解-谈下自己的认识"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_8-es6-的import-、export是否有了解-谈下自己的认识"}},[t._v("#")]),t._v(" 8.ES6 的import   、export是否有了解，谈下自己的认识")]),t._v(" "),a("p",[t._v("Import是静态引入，路径不能有参数，")]),t._v(" "),a("h3",{attrs:{id:"_9-路由权限有无做过"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_9-路由权限有无做过"}},[t._v("#")]),t._v(" 9.路由权限有无做过？")]),t._v(" "),a("p",[t._v("有，在meta中配置角色标签，根据登录用户的角色去匹配，动态生成用户的路由表。AddRoutes方法；也可以直接根据用户在后端配置好路由表，再通过接口获取用户的路由。")]),t._v(" "),a("h3",{attrs:{id:"_10-location-href-和vue-router-跳转有什么区别"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_10-location-href-和vue-router-跳转有什么区别"}},[t._v("#")]),t._v(" 10.Location.href 和vue-router 跳转有什么区别？")]),t._v(" "),a("p",[t._v("无论是 HTML5 history 模式还是 hash 模式，它的表现行为一致，所以，当你要切换路由模式，或者在 IE9 降级使用 hash 模式，无须作任何变动")]),t._v(" "),a("h3",{attrs:{id:"_11-es6的set和map有什么用处-let和var的区别"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_11-es6的set和map有什么用处-let和var的区别"}},[t._v("#")]),t._v(" 11.ES6的Set和Map有什么用处，let和var的区别")]),t._v(" "),a("p",[t._v("let的用法类似于var，但是所声明的变量，只在let命令所在的代码块内有效.")]),t._v(" "),a("h3",{attrs:{id:"_12-promise如何在成功和失败后都去掉页面请求的loading"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_12-promise如何在成功和失败后都去掉页面请求的loading"}},[t._v("#")]),t._v(" 12.Promise如何在成功和失败后都去掉页面请求的loading？")]),t._v(" "),a("p",[t._v("答：在finally中处理")]),t._v(" "),a("h3",{attrs:{id:"_13-协商缓存和强缓存"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_13-协商缓存和强缓存"}},[t._v("#")]),t._v(" 13."),a("a",{attrs:{href:"https://www.cnblogs.com/soyxiaobi/p/9400913.html",target:"_blank",rel:"noopener noreferrer"}},[t._v(" 协商缓存和强缓存 "),a("OutboundLink")],1)]),t._v(" "),a("ol",[a("li",[a("p",[t._v("强缓存：不会向服务器发送请求，直接从缓存中读取资源，在chrome控制台的network选项中可以看到该请求返回200的状态码;")])]),t._v(" "),a("li",[a("p",[t._v("协商缓存：向服务器发送请求，服务器会根据这个请求的request header的一些参数来判断是否命中协商缓存，如果命中，则返回304状态码并带上新的response header通知浏览器从缓存中读取资源；\n两者的共同点是，都是从客户端缓存中读取资源；区别是强缓存不会发请求，协商缓存会发请求")])])]),t._v(" "),a("h3",{attrs:{id:"_14-vue-指令的钩子有哪些-指定的参数有什么-指令会执行几次"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_14-vue-指令的钩子有哪些-指定的参数有什么-指令会执行几次"}},[t._v("#")]),t._v(" 14.Vue 指令的钩子有哪些？指定的参数有什么，指令会执行几次？")]),t._v(" "),a("p",[t._v("钩子函数有：bind，inserted，update，componentUpdate，unbind。")]),t._v(" "),a("p",[t._v("参数：el，name，binding，vnode，oldVnode")]),t._v(" "),a("h3",{attrs:{id:"_15-vue-create-里写一个this-nexttick-console-log-aa-mounted里面也有console-log-谁先执行"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_15-vue-create-里写一个this-nexttick-console-log-aa-mounted里面也有console-log-谁先执行"}},[t._v("#")]),t._v(" 15.Vue   create   里写一个this.$nextTick(（）=>console.log(‘aa’))   ，mounted里面也有console.log()  ，谁先执行？")]),t._v(" "),a("h3",{attrs:{id:"_16-浏览器内核知道多少-这简直了-谁知道"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_16-浏览器内核知道多少-这简直了-谁知道"}},[t._v("#")]),t._v(" 16.浏览器内核知道多少？ （这简直了，谁知道）")]),t._v(" "),a("p",[t._v("Trident（IE）、Gecko（firefox）、Blink(Chrome新)、Webkit（safari）")]),t._v(" "),a("h3",{attrs:{id:"_17-浏览器多个标签页之间如何通信-worker可以"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_17-浏览器多个标签页之间如何通信-worker可以"}},[t._v("#")]),t._v(" 17.浏览器多个标签页之间如何通信？ （worker可以）")]),t._v(" "),a("p",[t._v("Worker 可以跨域通信，postmessage,")]),t._v(" "),a("p",[t._v("Localstorege也可以跨标签使用。")]),t._v(" "),a("h3",{attrs:{id:"_18-有没有做过一些组件封装-table页面的封装"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_18-有没有做过一些组件封装-table页面的封装"}},[t._v("#")]),t._v(" 18.有没有做过一些组件封装 ？（table页面的封装）")]),t._v(" "),a("h3",{attrs:{id:"_19-页面为什么会白屏-以及对首页白屏的处理"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_19-页面为什么会白屏-以及对首页白屏的处理"}},[t._v("#")]),t._v(" 19.页面为什么会白屏，以及对首页白屏的处理")]),t._v(" "),a("p",[t._v("在地址栏输入URL会经历以下步骤：")]),t._v(" "),a("p",[t._v("1、 查找域名DNS，找到对应服务器的IP，")]),t._v(" "),a("p",[t._v("2、 建立TCP连接，向服务器发出请求。")]),t._v(" "),a("p",[t._v("3、 服务器响应请求，浏览器拿到数据进行解析")]),t._v(" "),a("p",[t._v("4、 浏览器拿到html，从上向下进行解析渲染，解析DOM和CSS，计算页面布局，遇到JS会进行解析，运行JS，阻塞页面渲染。一边渲染一边显示页面内容，图片等内容会异步加载。")]),t._v(" "),a("p",[t._v("优化：选择合适的CDN加速，提高服务器带宽和响应速度，首屏减少内容，按需加载，优化JS位置，防止页面阻塞，使用骨架屏，防止用户等待过久。")]),t._v(" "),a("h3",{attrs:{id:"_20-web标签语义化怎么理解"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_20-web标签语义化怎么理解"}},[t._v("#")]),t._v(" 20.web标签语义化怎么理解")]),t._v(" "),a("h3",{attrs:{id:"_21-iframe通信问题及处理"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_21-iframe通信问题及处理"}},[t._v("#")]),t._v(" 21.iframe通信问题及处理")]),t._v(" "),a("h3",{attrs:{id:"_22-浏览器兼容性问题-css-布局相关"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_22-浏览器兼容性问题-css-布局相关"}},[t._v("#")]),t._v(" 22.浏览器兼容性问题，css，布局相关")]),t._v(" "),a("h3",{attrs:{id:"_23-浏览器安全相关的问题"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_23-浏览器安全相关的问题"}},[t._v("#")]),t._v(" 23.浏览器安全相关的问题")]),t._v(" "),a("h3",{attrs:{id:"_24-taro和uniapp的区别"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_24-taro和uniapp的区别"}},[t._v("#")]),t._v(" 24.Taro和Uniapp的区别")]),t._v(" "),a("h3",{attrs:{id:"_25-vuerouter的钩子函数"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_25-vuerouter的钩子函数"}},[t._v("#")]),t._v(" 25.VueRouter的钩子函数")]),t._v(" "),a("h3",{attrs:{id:"_26-瀑布流和懒加载"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_26-瀑布流和懒加载"}},[t._v("#")]),t._v(" 26.瀑布流和懒加载")]),t._v(" "),a("h3",{attrs:{id:"_27-es6用过哪些"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_27-es6用过哪些"}},[t._v("#")]),t._v(" 27.ES6用过哪些")]),t._v(" "),a("h3",{attrs:{id:"_28-css会阻塞js文件执行吗"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_28-css会阻塞js文件执行吗"}},[t._v("#")]),t._v(" 28.CSS会阻塞JS文件执行吗")]),t._v(" "),a("p",[t._v("会，CSS不会阻塞DOM树的解析，但是会阻塞渲染，以及JS的执行。（不然的话，如果在JS里获取DOM元素的颜色，如果不阻塞的话会导致JS不可靠）")]),t._v(" "),a("h3",{attrs:{id:"_29-微任务和宏任务-哪些是微任务哪些是宏任务"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_29-微任务和宏任务-哪些是微任务哪些是宏任务"}},[t._v("#")]),t._v(" 29.微任务和宏任务，哪些是微任务哪些是宏任务")]),t._v(" "),a("p",[t._v("JS事件循环，分为同步任务和异步任务，异步任务会放到事件循环任务队列，当同步任务执行完以后，会把异步事件队列中的任务放到主线程中。")]),t._v(" "),a("p",{staticStyle:{color:"red"}},[t._v("微任务先执行，再执行宏任务")]),t._v(" "),a("p",[t._v("宏任务常见的有：setTimeout、setInterval、setImmediate")]),t._v(" "),a("p",[t._v("微任务有：Promise、process.nextTick、MutationObserver")]),t._v(" "),a("h3",{attrs:{id:"_30-堆和栈简单说一下"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_30-堆和栈简单说一下"}},[t._v("#")]),t._v(" 30.堆和栈简单说一下")]),t._v(" "),a("p",[t._v("堆是存放引用类型，栈是存放基本类型")]),t._v(" "),a("h3",{attrs:{id:"_31-一段函数需要执行60多秒-怎么防止页面阻塞-任务如何拆分"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_31-一段函数需要执行60多秒-怎么防止页面阻塞-任务如何拆分"}},[t._v("#")]),t._v(" 31.一段函数需要执行60多秒，怎么防止页面阻塞，任务如何拆分")]),t._v(" "),a("h3",{attrs:{id:"_32-多段文字如何查找到某个字符在哪一段"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_32-多段文字如何查找到某个字符在哪一段"}},[t._v("#")]),t._v(" 32.多段文字如何查找到某个字符在哪一段")]),t._v(" "),a("h3",{attrs:{id:"_33-闭包是什么-会导致内存泄漏吗"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_33-闭包是什么-会导致内存泄漏吗"}},[t._v("#")]),t._v(" 33.闭包是什么？会导致内存泄漏吗")]),t._v(" "),a("p",[t._v("JS里面只有函数作用域和函数作用域，闭包就是在一个函数里面返回另外一个函数，返回的函数绑定了它所在函数的当前上下文。闭包不会导致内存泄漏，闭包会导致变量无法回收，占用大量内存，在旧的IE浏览器中会导致内存泄漏。")]),t._v(" "),a("h3",{attrs:{id:"_34-如何查找内存泄漏-如何分析"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_34-如何查找内存泄漏-如何分析"}},[t._v("#")]),t._v(" 34.如何查找内存泄漏，如何分析")]),t._v(" "),a("h3",{attrs:{id:"_35-vue-vnode和diff算法简单说一下-什么是vnode"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_35-vue-vnode和diff算法简单说一下-什么是vnode"}},[t._v("#")]),t._v(" 35.vue vnode和diff算法简单说一下，什么是vnode？")]),t._v(" "),a("p",[t._v("虚拟DOM 就是使用js模拟真实DOM，所有操作都在虚拟DOM上进行，数据更新时对比虚拟DOM，计算出更新DOM的最小操作，由框架去完成DOM的更新，让用户更专注于业务逻辑。")]),t._v(" "),a("h3",{attrs:{id:"_36-vue修改一个组件的数据-更新对比是从该组件开始还是从根节点开始"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_36-vue修改一个组件的数据-更新对比是从该组件开始还是从根节点开始"}},[t._v("#")]),t._v(" 36.Vue修改一个组件的数据，更新对比是从该组件开始还是从根节点开始")]),t._v(" "),a("p",[t._v("应该是在该组件进行更新，因为有依赖收集，通知依赖的地方进行更新。")]),t._v(" "),a("h3",{attrs:{id:"_37-vue一个home页面有a-b-2个组件-它们的生命周期是怎么样的"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_37-vue一个home页面有a-b-2个组件-它们的生命周期是怎么样的"}},[t._v("#")]),t._v(" 37.Vue一个Home页面有A,B 2个组件，它们的生命周期是怎么样的？")]),t._v(" "),a("p",[t._v("一个页面模板结构如下：")]),t._v(" "),a("div",{staticClass:"language-html line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-html"}},[a("code",[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("A")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("B")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br")])]),a("p",[t._v("首先是Home组件初始化，调用 "),a("code",[t._v("beforeCreate")]),t._v("、"),a("code",[t._v("created")]),t._v("、"),a("code",[t._v("beforeMount")]),t._v(" ；然后根据子组件顺序，分别调用A，B组件的 "),a("code",[t._v("beforeCreate")]),t._v("、"),a("code",[t._v("created")]),t._v("、"),a("code",[t._v("beforeMount")]),t._v("  生命周期钩子函数，然后是A组件的 "),a("code",[t._v("mounted")]),t._v(" , B 组件的"),a("code",[t._v("mounted")]),t._v(" ,最后是 Home的 "),a("code",[t._v("mounted")])]),t._v(" "),a("p",[t._v("销毁的时候：先是Home 的 "),a("code",[t._v("beforeDestroy")]),t._v(" ，然后是A 的 "),a("code",[t._v("beforeDestroy")]),t._v("、"),a("code",[t._v("destroyed")]),t._v(" ， B的"),a("code",[t._v("beforeDestroy")]),t._v("、"),a("code",[t._v("destroyed")]),t._v(" ，最后Home的"),a("code",[t._v("destroyed")])]),t._v(" "),a("h3",{attrs:{id:"_38-vue组件里是先解析template还是先挂载data"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_38-vue组件里是先解析template还是先挂载data"}},[t._v("#")]),t._v(" 38.Vue组件里是先解析template还是先挂载data")]),t._v(" "),a("p",[t._v("先初始化data，原因是在"),a("code",[t._v("created")]),t._v("生命周期完成数据初始化，数据设置为响应式，在"),a("code",[t._v("getter")]),t._v("收集依赖，在"),a("code",[t._v("setter")]),t._v("中通知视图进行更新，然后在"),a("code",[t._v("beforeMount")]),t._v("里编译模板，这时候模板里使用到数据的时候会出发"),a("code",[t._v("getter")]),t._v("依赖被收集，因此，先初始化data，再初始化模板，然后挂载渲染。")]),t._v(" "),a("h3",{attrs:{id:"_39-有一个耗时长的任务怎么提升用户体验呢"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_39-有一个耗时长的任务怎么提升用户体验呢"}},[t._v("#")]),t._v(" 39.有一个耗时长的任务怎么提升用户体验呢")]),t._v(" "),a("ol",[a("li",[t._v("对任务进行分解，分成一些小任务，然后进行时间分片，分片进行处理，可以使用"),a("code",[t._v("Generator")]),t._v("函数让出控制权进行分片处理。")])]),t._v(" "),a("p",[t._v("如何评估任务的时间：操作系统通过任务需要的数据堆栈来评估。")]),t._v(" "),a("p",[t._v("预设值一些任务的优先级，动画，用户操作等优先级较高，非可视区界面更新的优先级会较低。")]),t._v(" "),a("ol",{attrs:{start:"2"}},[a("li",[t._v("使用web worker或者定时器进行分片")])]),t._v(" "),a("p",[t._v("参考 react fiber 以及"),a("a",{attrs:{href:"https://github.com/Vibing/blog/issues/22",target:"_blank",rel:"noopener noreferrer"}},[t._v("这篇博文"),a("OutboundLink")],1)])])}),[],!1,null,null,null);e.default=r.exports}}]);