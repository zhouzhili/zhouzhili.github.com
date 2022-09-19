(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{360:function(s,t,a){"use strict";a.r(t);var n=a(4),e=Object(n.a)({},(function(){var s=this,t=s._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("p",[s._v("React入坑初试")]),s._v(" "),t("blockquote",[t("p",[s._v("react 是一个优秀的前端框架，虽然平常都是用的 vue，但是 react 的大名也是如雷贯耳，受网上一些教程的启发，决定自己简单实现一遍 react，对它的工作方式以及原理也有了更深的了解")])]),s._v(" "),t("h3",{attrs:{id:"react-要点"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#react-要点"}},[s._v("#")]),s._v(" React 要点")]),s._v(" "),t("p",[s._v("react 主要的要点就是 JSX 和虚拟 DOM，")]),s._v(" "),t("ol",[t("li",[s._v("JSX 是一种扩展语法，用于在 js 代码中编写 HTML 片段，如下：")])]),s._v(" "),t("div",{staticClass:"language-jsx line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-jsx"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" div "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("div")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token attr-name"}},[s._v("className")]),t("span",{pre:!0,attrs:{class:"token attr-value"}},[t("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v('"')]),s._v("main"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v('"')])]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),t("span",{pre:!0,attrs:{class:"token plain-text"}},[s._v("Hello World")]),t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("</")]),s._v("div")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("JSX 语法通过 babel 转义之后本质是调用函数来处理的，例如上面的代码经过 Babel 处理之后在 React 中会转成以下代码：")]),s._v(" "),t("div",{staticClass:"language-js line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" div "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" React"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("createElement")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'div'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" \n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("className")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'main'")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'Hello World'")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br")])]),t("p",[s._v("除了使用React.createElement()方法，我们也可以使用自己定义的函数来编译JSX，在**.babelrc**中配置下就可以")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v('{\n    "presets": ["env"],\n    "plugins": [\n        ["transform-react-jsx", {\n            "pragma": "React.createElement"\n        }]\n    ]\n}\n')])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br")])]),t("p",[s._v("transform-react-jsx 下面的pragma就是转换时使用的函数，我们可以换成其它的函数，只要在全局中存在这个函数名就可以。函数的参数为以下：tag(标签名)，attrs（属性）, children(子节点)")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("function createElement( tag, attrs, ...children ) {\n    return {\n        tag,\n        attrs,\n        children\n    }\n}\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br")])]),t("p",[s._v("所以我们在开发过程中写的JSX代码，最后会被Babel编译成{tag,attrs,children}对象，我们只需要根据这个对象来创建相应的节点，设置属性，对其子元素递归调用render函数就可以了，最后挂载到节点上，完成渲染。")]),s._v(" "),t("p",[s._v("节点一般有以下几种情况：")]),s._v(" "),t("ul",[t("li",[t("p",[s._v("数字或者文本内容：这种直接创建文本节点就可以")])]),s._v(" "),t("li",[t("p",[s._v("函数或者类：这种说明节点是一个组件，我们直接调用该组件的render方法获取其返回的JSX内容然后再继续进行解析即可(这也是为什么React组件必须实现Render方法或者必须返回JSX内容的原因)")])])]),s._v(" "),t("ol",{attrs:{start:"2"}},[t("li",[t("p",[s._v("虚拟DOM主要就是使用JS语法模拟出来的DOM对象，与原生DOM要素相比更加轻量，也方便使用JS来渲染节点。")]),s._v(" "),t("p",[s._v("要保持数据更新之后视图随之变化，我们需要约定一种数据更新方法，以便我们能够在数据更新之后调用render方法来更新视图。所以React规定更新数据只能用setState ,这样我们就能在state变更之后调用render函数对数据进行跟新,setState方法简易实现如下：")]),s._v(" "),t("div",{staticClass:"language-js line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("setState")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token parameter"}},[s._v("newState")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("this")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("state "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" Object"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("assign")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("this")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("state"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" newState"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("render")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("this")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br")])]),t("p",[s._v("在元素更新的时候我们有很多可以优化的地方，不用每次更改一点数据就全部重新渲染，我们可以只更新更改的部门，这就涉及到diff算法了，我们可以对已有的虚拟DOM和数据更改后的虚拟DOM进行对比，找出差异的部门进行更新，具体则不做描述。")]),s._v(" "),t("ol",{attrs:{start:"3"}},[t("li",[s._v("虚拟DOM的思想不仅能运用在HTML上，只要与视图相关的都可以使用，因为React的思想就是view=render(data). 我们只要实现我们自己的render函数，根据{tag,attrs,children}来解析我们的JSX就可以，不必局限于DOM元素，canvas元素或者我们自定义的绘图要素都可以，唯一的限制是你的想象力。")])])])])])}),[],!1,null,null,null);t.default=e.exports}}]);