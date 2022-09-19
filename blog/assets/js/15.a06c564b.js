(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{353:function(s,t,e){"use strict";e.r(t);var a=e(4),n=Object(a.a)({},(function(){var s=this,t=s._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("p",[s._v("当我们在开发一个开源库的时候，怎么样也能让使用者能够按需加载呢？直接提供给对方打包后的文件或者 ES6 原始文件就可以了吗？答案是不行的")]),s._v(" "),t("p",[s._v("平时我们经常使用的一些开源库可以通过按需加载来减小引入资源的大小，这种一般是使用到了 webpack 的"),t("code",[s._v("tree-shaking")]),s._v("，时间久了大家也就自然而然的以为这是 webpack 本身就有的功能，那么，当我们在开发一个开源库的时候，怎么样也能让使用者能够按需加载呢？直接提供给对方打包后的文件或者 ES6 原始文件就可以了吗？答案是不行的，我们需要搞清楚 webpack 怎么样才能实现"),t("code",[s._v("tree-shaking")]),s._v("。这里我不在解释什么是"),t("code",[s._v("tree-shaking")]),s._v("，我只来说明怎么样才能让我们开发出来的库文件可以使用"),t("code",[s._v("tree-shaking")])]),s._v(" "),t("h3",{attrs:{id:"_1-使用-tree-shaking-的前提条件"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-使用-tree-shaking-的前提条件"}},[s._v("#")]),s._v(" 1.使用 tree-shaking 的前提条件")]),s._v(" "),t("p",[t("a",{attrs:{href:"https://webpack.docschina.org/guides/tree-shaking/#root",target:"_blank",rel:"noopener noreferrer"}},[s._v("webpack 文档"),t("OutboundLink")],1),s._v("写的很清楚，在 tree-shaking 章节下面的结论那里列了 4 个条件。")]),s._v(" "),t("blockquote",[t("ol",[t("li",[s._v("使用 ES2015 的模块语法。")]),s._v(" "),t("li",[s._v("确保没有编译器将 ES2015 模块语法转为 CommonJS 的模块语法。")]),s._v(" "),t("li",[s._v('在项目的 package.json 文件中，添加 "sideEffects" 属性。')]),s._v(" "),t("li",[s._v('使用 mode 为 "production" 的配置项以启用更多优化项，包括压缩代码与 tree shaking.')])])]),s._v(" "),t("h3",{attrs:{id:"_2-项目中如何配置"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-项目中如何配置"}},[s._v("#")]),s._v(" 2.项目中如何配置")]),s._v(" "),t("p",[s._v("文档写的很清楚，前 3 个条件是针对我们库文件的条件，最后一个是在使用的时候需要注意的点，接下来我将分条目进行说明。")]),s._v(" "),t("h4",{attrs:{id:"使用-es2015-的模块语法"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#使用-es2015-的模块语法"}},[s._v("#")]),s._v(" 使用 ES2015 的模块语法")]),s._v(" "),t("p",[s._v("webpack 的"),t("code",[s._v("tree-shaking")]),s._v("依赖于 ES2015 的模块语法，即 ES6 的"),t("code",[s._v("import")]),s._v("和"),t("code",[s._v("export")]),s._v("语法，所以我们的库文件在提供出去的时候需要保持 ES6 的模块语法，不能转译为 CommonJS 的语法，这点需要注意，我们在发布我们的库文件到 NPM 上的时候，一般会提供一个 ES5 文件供浏览器中直接引入，另外再提供一份 ES6 模块文件供开发中使用，这里在"),t("code",[s._v("babel")]),s._v("中进行配置即可。")]),s._v(" "),t("p",[s._v("目前 babel 版本为 7，使用的配置文件为"),t("code",[s._v("babel.config.js")]),s._v(",我们可以通过环境变量"),t("code",[s._v("NODE_ENV")]),s._v("来区分不同的环境，通过设置"),t("code",[s._v("preset")]),s._v("的"),t("code",[s._v("modules")]),s._v("为 false 来保留 ES6 模块语法，可参考"),t("a",{attrs:{href:"https://babeljs.io/docs/en/babel-preset-env",target:"_blank",rel:"noopener noreferrer"}},[s._v("babel-preset-env"),t("OutboundLink")],1),s._v(",具体配置如下：")]),s._v(" "),t("div",{staticClass:"language-js line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[t("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("presets")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'@babel/preset-env'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("modules")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("false")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// babel编译的时候保留 es module方式")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("targets")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("browsers")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'> 1%'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'last 2 versions'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'not ie <= 8'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br")])]),t("p",[s._v("第二条和第一条基本相同，我们开发的时候保留 ES6 模块即可。")]),s._v(" "),t("h4",{attrs:{id:"在项目的-package-json-文件中-添加-sideeffects-属性。"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#在项目的-package-json-文件中-添加-sideeffects-属性。"}},[s._v("#")]),s._v(' 在项目的 package.json 文件中，添加 "sideEffects" 属性。')]),s._v(" "),t("p",[s._v("sideEffects 即副作用影响，即在 webpack 打包的时候告诉 webpack 哪些是没有副作用的可以直接去掉，具体的说明可以看"),t("a",{attrs:{href:"https://segmentfault.com/a/1190000015689240",target:"_blank",rel:"noopener noreferrer"}},[s._v("这篇文章"),t("OutboundLink")],1),s._v(",通常情况下我们可以直接设置"),t("code",[s._v("sideEffects:false")]),s._v(" 来表明文件都是没有副作用的可以直接"),t("code",[s._v("tree-shaking")]),s._v(", 但是这里需要注意的是，在开发的过程中，会把一些 import 的但是没有使用的文件删除掉，例如一些单独导入的 less，css，scss 文件没有打包进去，因此在配置的时候需要额外的注意，我们可以配置哪些文件有副作用不用"),t("code",[s._v("tree-shaking")]),s._v("，配置如下：")]),s._v(" "),t("div",{staticClass:"language-json line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-json"}},[t("code",[t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"sideEffects"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"*.vue"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"*.css"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"*.scss"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"*.sass"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"*.less"')]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br")])]),t("p",[s._v("其他的一些说明。")]),s._v(" "),t("p",[s._v("在我们提供的npm库文件的时候，一般会在"),t("code",[s._v("package.json")]),s._v("中提供一个"),t("code",[s._v("main")]),s._v("字段来表明包的入口，其实还有一个"),t("code",[s._v("module")]),s._v("字段也可以设置包的入口，这些的设置也有助于"),t("code",[s._v("tree-shaking")]),s._v("的使用，具体可以看"),t("a",{attrs:{href:"https://segmentfault.com/a/1190000014286439",target:"_blank",rel:"noopener noreferrer"}},[s._v("这篇博文"),t("OutboundLink")],1)]),s._v(" "),t("h3",{attrs:{id:"_4-使用tree-shaking"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4-使用tree-shaking"}},[s._v("#")]),s._v(" 4. 使用"),t("code",[s._v("tree-shaking")])]),s._v(" "),t("p",[s._v("使用"),t("code",[s._v("tree-shaking")]),s._v("就相对比较简单了，如果我们的NPM包支持tree-shaking了，那么我们在编译的时候添加"),t("code",[s._v("mode: 'production'")]),s._v(",并启用压缩即可，webpack会自动对我们引入的NPM包进行"),t("code",[s._v("tree-shaking")]),s._v("处理。")])])}),[],!1,null,null,null);t.default=n.exports}}]);