(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{502:function(t,s,a){"use strict";a.r(s);var r=a(19),e=Object(r.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("p",[t._v("7条小程序开发实战总结")]),t._v(" "),a("p",[t._v("最近使用 mpvue 做了几个小程序的开发，在开发过程中遇到了一些问题也发现了一些新的东西，在这里总结一下：")]),t._v(" "),a("h4",{attrs:{id:"_1-小程序-setdata-很消耗性能-与展示无关的数据可以不用放到-data-中"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-小程序-setdata-很消耗性能-与展示无关的数据可以不用放到-data-中"}},[t._v("#")]),t._v(" 1.小程序 setData 很消耗性能，与展示无关的数据可以不用放到 data 中")]),t._v(" "),a("p",[t._v("例如我在开发一个长列表展示内容，如果用户一直往下滑动，数据量会一直增加，而且小程序 data 的容量有限制，如果数据量过多，界面会有卡顿设置崩溃。根据官方 API，setData 单次设置数据大小不能超过 1024KB，过大会产生错误，因此，设计给小程序的 API 数据尽可能精简，避免传递无关数据，比如列表数据获取的是后台的分页数据，当前页码的标识字段其实与界面渲染是无关的，可以放到 data 外面。")]),t._v(" "),a("h4",{attrs:{id:"_2-小程序-scroll-view-在纵向滚动需要设置的高度是当前窗口的高度"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-小程序-scroll-view-在纵向滚动需要设置的高度是当前窗口的高度"}},[t._v("#")]),t._v(" 2.小程序 scroll-view 在纵向滚动需要设置的高度是当前窗口的高度")]),t._v(" "),a("blockquote",[a("p",[t._v("scroll-view 相当于一个内嵌的框架 列表在框架内滚动，它的高度其实就是屏幕的高度 不是 里边列表项目的高度")])]),t._v(" "),a("p",[t._v("可以通过小程序提供的获取系统信息的 API 获取系统信息，**wx.getSystemInfoSync()**获取系统信息然后再获取屏幕高度，将这个高度绑定到 scroll-view 上面，也可以使用 css 的 "),a("strong",[t._v("vh")]),t._v(" 尺寸来设置高度。")]),t._v(" "),a("h4",{attrs:{id:"_3-小程序分享页面回到主页"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-小程序分享页面回到主页"}},[t._v("#")]),t._v(" 3.小程序分享页面回到主页")]),t._v(" "),a("p",[t._v("小程序分享功能在生命周期函数中定义 "),a("strong",[t._v("onShareAppMessage")]),t._v(" 函数即可，该函数返回一个 Object，具体参数可以查看小程序 API，分享的卡面默认图片为当前页面的截图，如果觉得不好看可以自定义展示图片，在 imageUrl 中设置图片地址即可。")]),t._v(" "),a("p",[t._v("点击小程序分享页面后没有回退功能，如果想让用户回到主页一般有 2 种处理办法，一种是再 path 地址中加上标识，通过地址判断如果是通过分享页面进来的就在当前页面显示一个回到主页的按钮，通过点击按钮回到主页，这种方法比较简单，但是没有返回功能，用户按了返回键就会直接退出。另外一种是将分享函数返回的 Object 中的 path 设置为首页，并带上标志参数，在首页的 onShow 方法中检查参数，在 mpvue 中，通过 "),a("strong",[t._v("this.$root.$mp.query")]),t._v("获取当前页面 url 的参数，如果带有参数，就跳转到分享页面，这样用户点击返回就能直接回到主页面了，不好的地方是点击分享的卡片会在主页停留一下再跳转到页面，用户体验不是很好。")]),t._v(" "),a("h4",{attrs:{id:"_4-分享按钮去除默认样式及传递参数"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-分享按钮去除默认样式及传递参数"}},[t._v("#")]),t._v(" 4.分享按钮去除默认样式及传递参数")]),t._v(" "),a("p",[t._v("小程序分享功能只需要在页面中定义好 "),a("strong",[t._v("onShareAppMessage")]),t._v("函数即可，点击右上角就能看到分享功能，如果需要通过按钮分享，只需要设置 button 的 open-type='share'即刻完成分享功能，但默认的 button 样式不美观，我需要使用自定义的图片来替代分享按钮。经过尝试，在其他标签上设置 open-type='share'并不起什么作用，看来只能使用 button 了，在去掉 button 的 border 上，怎么设置都没用，后面 Google 一番发现 button 的 border 使用的是伪类，坑爹的，使用下面一行 css 即可去掉 border：")]),t._v(" "),a("div",{staticClass:"language-css line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[a("span",{pre:!0,attrs:{class:"token selector"}},[t._v("button::after")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("border")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" none"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br")])]),a("p",[t._v("我的小程序有一个信息流列表，每个子项都有一个分享按钮，我希望点击分享的时候在分享的地址中带上当前列表的标识，这样用户点击分享的卡片就能直接进入当前子项的详情页，但是，分享功能并不是绑定在 click 事件上呀，经试验，onShareAppMessage 触发在 button 的 click 事件的前面，这样就无法通过 button 的 click 方法来获取点击的子项了。但是 onShareAppMessage 处理函数的参数中有一个 target，如果 from 值是 button，则 target 是触发这次转发事件的 button，否则为 undefined。soga，把子项的 id 放到 button 中就好啦，我是如下处理的：")]),t._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("button open"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("type"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'share'")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("data"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("title"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'data.content'")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("data"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("id"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'data.id'")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"share-btn"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("img src"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"../../../static/share.png"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("span"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("分享"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("span"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("button"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br")])]),a("p",[t._v("然后在 onShareAppMessage 中可以直接通过 target.dataset 获取 button 的 data 属性了")]),t._v(" "),a("h4",{attrs:{id:"_5-mpvue-性能优化-for-循环中不要使用组件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_5-mpvue-性能优化-for-循环中不要使用组件"}},[t._v("#")]),t._v(" 5.mpvue 性能优化:for 循环中不要使用组件")]),t._v(" "),a("p",[a("strong",[t._v("在使用 for 循环渲染中尽量不要使用组件")]),t._v("，以前写 vue 喜欢封装，列表渲染的时候就把渲染内容封装为一个组件，把数据通过 prop 传递给组件，这样简单又省事。但是,在 mpvue 中，如果在 for 循环中使用自定义组件的话，数据会在每个组件中都存储一份，这样会严重影响性能！！！")]),t._v(" "),a("h4",{attrs:{id:"_6-小程序的-http-限制"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_6-小程序的-http-限制"}},[t._v("#")]),t._v(" 6.小程序的 HTTP 限制")]),t._v(" "),a("p",[t._v("小程序所有请求接口都要求是 HTTPS，图片如果要使用保存到本地的话也需要是 HTTPS 地址，限制太严格了，域名的话需要自己申请。一套走下来也需要费不少功夫的")]),t._v(" "),a("h4",{attrs:{id:"_7-其他"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_7-其他"}},[t._v("#")]),t._v(" 7.其他")]),t._v(" "),a("p",[t._v("小程序的限制也比较多，个人开发的话工具类还是比较好实现的，不太需要后台加持。小程序用完即走，用户留存比较困难，虽然累积人数达 1K 以上可以投放广告了，但是用户留存和点击量还是比较难上去，变现困难。")])])}),[],!1,null,null,null);s.default=e.exports}}]);