(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{346:function(s,t,a){"use strict";a.r(t);var n=a(4),e=Object(n.a)({},(function(){var s=this,t=s._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("p",[s._v("webGL入门尝试，绘制一个简单的三角形")]),s._v(" "),t("p",[s._v("webGL 是浏览器提供的 3D API,可以在浏览器端实现一些比较炫酷的 3D 效果，其实 webGL 只是一个光栅化引擎，能够根据给定的数据绘制出点、线、三角形，并将其填充，输出栅格图像，万丈高楼平地起，3D 图像其实也是由简单的三角形组合而成，webGL 能绘制出什么完全看你自己的使用。webGL 在电脑的 GPU 中运行，需要编写能在 GPU 端运行的代码：顶点着色器和片元着色器。顶点着色器定义图像的顶点并确定位置，片元着色器确定图像的颜色，webGL 所做的就是给顶点着色器传递数据确定位置，然后调用片元着色器填充颜色，这就是 webGL 绘图的简单流程。那么，在代码中如何编写呢，下面一步步的来看：")]),s._v(" "),t("h3",{attrs:{id:"_1-获取-webgl-上下文-webglrenderingcontext"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-获取-webgl-上下文-webglrenderingcontext"}},[s._v("#")]),s._v(" 1.获取 webGL 上下文：WebGLRenderingContext")]),s._v(" "),t("p",[s._v("编写 webGL 程序需要一个 canvas 元素作为绘图区域，并创建 3D 绘图上下,3D 上下文有 4 种，我们只需要根据浏览器的支持来确定参数，可以编写如下的代码获取 webGL 绘图上下文：")]),s._v(" "),t("div",{staticClass:"language-js line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" names "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'webgl'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'experimental-webgl'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'webkit-3d'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'moz-webgl'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("let")]),s._v(" context "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("null")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("let")]),s._v(" ii "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" ii "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v(" names"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("length"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("++")]),s._v("ii"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("try")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    context "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" canvas"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("getContext")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("names"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("ii"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("catch")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("e"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// no-empty")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("context"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("break")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br")])]),t("h3",{attrs:{id:"_2-编译着色器"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-编译着色器"}},[s._v("#")]),s._v(" 2. 编译着色器")]),s._v(" "),t("p",[s._v("着色器分为顶点着色器和片元着色器，顶点着色器主要是顶点装配，确定位置，一个基本的顶点着色器如下所示：")]),s._v(" "),t("div",{staticClass:"language-glsl line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-glsl"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("attribute")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("vec4")]),s._v(" aPosition"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("void")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("main")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  gl_Position "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" aPosition"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br")])]),t("p",[s._v("片元着色器主要是确定渲染颜色，一个基本的片元着色器如下所示：")]),s._v(" "),t("div",{staticClass:"language-glsl line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-glsl"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("void")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("main")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  gl_FragColor "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("vec4")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1.0")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])]),t("p",[s._v("由于片元着色器是以文本的形式存在于浏览器端的，在绘制之前需要先进行编译：\n对于顶点着色去我们创建"),t("code",[s._v("gl.VERTEX_SHADER")]),s._v("类型的着色器，对于片元着色器我们创建"),t("code",[s._v("gl.FRAGMENT_SHADER")]),s._v("类型的着色器")]),s._v(" "),t("div",{staticClass:"language-js line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" vertShdr "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" gl"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("createShader")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("gl"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token constant"}},[s._v("VERTEX_SHADER")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\ngl"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("shaderSource")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("vertShdr"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" vertex"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\ngl"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("compileShader")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("vertShdr"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" fragShdr "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" gl"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("createShader")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("gl"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token constant"}},[s._v("FRAGMENT_SHADER")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\ngl"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("shaderSource")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("fragShdr"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" fragment"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\ngl"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("compileShader")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("fragShdr"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br")])]),t("h3",{attrs:{id:"_3-连接到上下文-program"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-连接到上下文-program"}},[s._v("#")]),s._v(" 3.连接到上下文 program")]),s._v(" "),t("p",[s._v("着色器编译之后我们需要链接到绘图上下文的 program 上面，这样程序才知道我们绘制的时候使用哪个着色器。\n我们先创建一个 program，然后添加已编译的着色器，最后链接到上下文 program 上。")]),s._v(" "),t("div",{staticClass:"language-js line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" program "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" gl"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("createProgram")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\ngl"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("attachShader")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("program"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" vertShdr"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\ngl"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("attachShader")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("program"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" fragShdr"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\ngl"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("linkProgram")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("program"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br")])]),t("h3",{attrs:{id:"_4-创建-buffer"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4-创建-buffer"}},[s._v("#")]),s._v(" 4.创建 buffer")]),s._v(" "),t("p",[s._v("编译好之后，我们就可以给着色器传递一些数据来绘制图形了，这里我们绘制一个基本的三角形。\n在 webGL 中，坐标轴位于画布中心，xy 的范围为[-1,1],并且由于着色器是强类型的，因此我们在传递数据的是不能使用传统的 JS array，需要使用强类型的"),t("code",[s._v("Float32Array")]),s._v("。buffer 可以认为是 webGL 中的一个全局变量，设置之后绑定数据然后就着色器就可以在 buffer 中获取所需的数据，具体代码如下：")]),s._v(" "),t("div",{staticClass:"language-js line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 顶点数据")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" points "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("new")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Float32Array")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1.0")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.0")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1.0")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.0")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.0")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1.0")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 创建buffer")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" verticesBuffer "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" gl"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("createBuffer")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 绑定我们创建的buffer")]),s._v("\ngl"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("bindBuffer")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("gl"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token constant"}},[s._v("ARRAY_BUFFER")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" verticesBuffer"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 给绑定的buffer填充数据")]),s._v("\ngl"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("bufferData")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("gl"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token constant"}},[s._v("ARRAY_BUFFER")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" points"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" gl"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token constant"}},[s._v("STATIC_DRAW")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br")])]),t("h3",{attrs:{id:"_5-启用位置点-并设置数据读取方式"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_5-启用位置点-并设置数据读取方式"}},[s._v("#")]),s._v(" 5.启用位置点，并设置数据读取方式")]),s._v(" "),t("p",[s._v("在着色器中我们设置了一个变量："),t("code",[s._v("attribute vec4 aPosition;")]),s._v("，现在我们要启用它，并从 buffer 中读取数据，由于着色器编译之后我们存储在内存中，")]),s._v(" "),t("p",[s._v("我们需要先获取它的位置：")]),s._v(" "),t("div",{staticClass:"language-js line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" aPosition "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" gl"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("getAttribLocation")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("program"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'aPosition'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("然后启用它：")]),s._v(" "),t("div",{staticClass:"language-js line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[s._v("gl"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("enableVertexAttribArray")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("aPosition"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("然后告诉它怎么从缓冲中读取数据,一个隐藏的信息是"),t("code",[s._v("gl.vertexAttribPointer")]),s._v("将当前属性绑定到了"),t("code",[s._v("ARRAY_BUFFER")]),s._v("上，也就是我们之前创建并绑定的"),t("code",[s._v("verticesBuffer")]),s._v("上面。")]),s._v(" "),t("div",{staticClass:"language-js line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 告诉属性怎么从positionBuffer中读取数据 (ARRAY_BUFFER)")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" size "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 每次迭代运行提取两个单位数据")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" type "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("this")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("gl"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token constant"}},[s._v("FLOAT")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 每个单位的数据类型是32位浮点型")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" normalize "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("false")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 不需要归一化数据")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" stride "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 0 = 移动单位数量 * 每个单位占用内存（points.BYTES_PER_ELEMENT）")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 每次迭代运行运动多少内存到下一个数据开始点")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" offset "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 从缓冲起始位置开始读取")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("this")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("gl"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("vertexAttribPointer")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("aPosition"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" size"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" type"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" normalize"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" stride"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" offset"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br")])]),t("p",[s._v("aPosition 是一个 vec4 变量，相当于一个 length 为 4 的数据，在 webGL 中，"),t("code",[s._v("gl_Position")]),s._v("我们只设置了前 2 个分量，而后两个分量将使用默认值 0 和 1.")]),s._v(" "),t("h3",{attrs:{id:"_6-绘制"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_6-绘制"}},[s._v("#")]),s._v(" 6.绘制")]),s._v(" "),t("p",[s._v("绘制之前我们先清除画布")]),s._v(" "),t("div",{staticClass:"language-js line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 清除")]),s._v("\ngl"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("clearColor")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.0")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.0")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.0")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1.0")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\ngl"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("clear")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("gl"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token constant"}},[s._v("COLOR_BUFFER_BIT")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 绘制图元")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" primitiveType "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" gl"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token constant"}},[s._v("TRIANGLES")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 偏移")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" offset "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 绘制次数")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" count "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v("\ngl"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("drawArrays")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("primitiveType"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" offset"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" count"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br")])]),t("p",[s._v("因为我们有 3 个点，因此绘制次数为 3 次，我们选择绘制的图元为三角形。最终：绘制效果如下：")]),s._v(" "),t("p",[t("img",{attrs:{src:"https://raw.githubusercontent.com/zhouzhili/blog/master/issues/images/webgl.jpg",alt:"结果"}})]),s._v(" "),t("p",[s._v("以上，webGL 本身做的事情很简单，就是根据我们给定的数据和着色器来绘制一个三角形，但是由于其 API 比较底层，每一步都需要我们来指定，从获取上下文到编译着色器以至于设置缓冲等都需要我们一步步的在程序中编写，webGL 难在于我们编写程序本身，如何从简单的三角形搭建出绚丽的三维效果，这就是困难所在。")])])}),[],!1,null,null,null);t.default=e.exports}}]);