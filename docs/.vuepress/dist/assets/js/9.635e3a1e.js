(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{492:function(s,t,a){"use strict";a.r(t);var n=a(19),e=Object(n.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("p",[s._v("使用片元着色器绘制正弦曲线")]),s._v(" "),a("p",[s._v("看了一部分 "),a("a",{attrs:{href:"https://thebookofshaders.com/?lan=ch",target:"_blank",rel:"noopener noreferrer"}},[s._v("《The Book of Shaders》"),a("OutboundLink")],1),s._v("之后大受启发，之前画三角形，画矩形以及画其他的图形都是在 JS 计算好各个点的位置，然后通过 buffer 传递到顶点着色器中，然后绘制出图形。这些计算点位的工作主要集中在 CPU 端进行，这种绘制方式大大浪费了 GPU 并行计算的能力，其实我们只在片元着色器也能绘制出这些图形，并且效率更高。")]),s._v(" "),a("p",[s._v("在片元着色器中绘图，我们将使用一个重要的内置变量"),a("strong",[s._v("vec4 gl_FragCoord")]),s._v("，在官方文档中这样解释：")]),s._v(" "),a("blockquote",[a("p",[s._v("Available only in the fragment language, gl_FragCoord is an input variable that contains the window relative coordinate (x, y, z, 1/w) values for the fragment. If multi-sampling, this value can be for any location within the pixel, or one of the fragment samples. This value is the result of fixed functionality that interpolates primitives after vertex processing to generate fragments. The z component is the depth value that would be used for the fragment's depth if no shader contained any writes to gl_FragDepth")])]),s._v(" "),a("p",[s._v("gl_FragCoord 仅在片段着色器中可用，是一个输入变量，包含片段的窗口相对坐标（x，y，z，1 / w）值。这句话的意思是它的坐标就是当前片段的窗口相对坐标，回想起 webGL 的绘制方式：确定了定点之后，会调用片段着色器进行逐像素渲染。这时，每一个像素的坐标便是 gl_FragCoord 的 xyz 值。它的值的范围为 0 到渲染区域的宽高。"),a("strong",[s._v("它的坐标原点在左下角，x 向右递增，y 向上递增。")])]),s._v(" "),a("h3",{attrs:{id:"绘制准备工作"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#绘制准备工作"}},[s._v("#")]),s._v(" 绘制准备工作")]),s._v(" "),a("p",[s._v("首先，我们要使用 gl_FragCoord，需要先创建一个简单的 webGL 程序，我们绘制 2 个三角形组成一个矩形，在绘制三角形的时候 webGL 会调用片元着色器对三角形进行光栅化，在光栅化的过程中调用 fragment shader 进行对每个像素进行光栅化，在对每个像素进行处理的时候，当前被处理像素的坐标我们通过 gl_FragCoord 就可以得到。")]),s._v(" "),a("p",[s._v("绘制三角形步骤略。")]),s._v(" "),a("p",[s._v("webgl 坐标及颜色范围都在[-1,1]中间，而 gl_FragCoord 的范围是[0,width],[0,height],因此在使用中我们通常需要(也可以不做处理)归一化处理。\n我们需要在 fragment 中获取 gl.canvas 的高宽，因此我们需要一个变量")]),s._v(" "),a("div",{staticClass:"language-glsl line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-glsl"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("uniform")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("vec2")]),s._v(" uResolution"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("在 JS 程序中将 canvas 的高宽传给它，")]),s._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" uResolution "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" gl"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("getUniformLocation")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("program"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'uResolution'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\ngl"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("uniform2f")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("uResolution"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" gl"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("canvas"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("width"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" gl"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("canvas"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("height"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("p",[s._v("然后 vec2 st=gl_FragCoord.xy/uResolution;得到的就是归一化坐标值。")]),s._v(" "),a("h3",{attrs:{id:"绘制正弦曲线"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#绘制正弦曲线"}},[s._v("#")]),s._v(" 绘制正弦曲线")]),s._v(" "),a("p",[s._v("现在，我们可以尝试绘制一条正弦曲线 y=sin(x),但是我们已知的只有画布各个点的坐标值，我们可以将在正弦曲线上的点颜色设置为绿色，将正弦曲线外的点颜色设置为黑色，这样就能将曲线绘制出来；并且我们坐标的递增为一个像素值，y 值不可能完全与 sin(x)相等，我们需要设置一个范围，比如正负 0.01，只要 y 值落在这个范围内，我们就认为 y 的值为 sin(x),这样能够生成更为平滑的曲线，避免锯齿。")]),s._v(" "),a("p",[s._v("首先我们写一个 plot 函数，该函数接收 2 个值，一个真实坐标值，一个目标值，如果真实值在目标值误差范围内则返回 1.0，否则范围 0.0")]),s._v(" "),a("div",{staticClass:"language-glsl line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-glsl"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("float")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("plot")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("float")]),s._v(" sy"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("float")]),s._v(" y"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// float p=smoothstep(sy+.01,sy,y)-smoothstep(sy,sy-.01,y);")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// return sign(p);")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("y"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v(".01")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("sy "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&&")]),s._v(" sy"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("y"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v(".01")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1.")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("else")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br")])]),a("p",[s._v("由于归一化之后 gl_FragCoord 坐标范围为[0,1]，为了绘制正弦曲线，我们将 x 轴范围映射到[0,2π]，y 轴范围映射到[-1,1]。main 函数如下所示：")]),s._v(" "),a("div",{staticClass:"language-glsl line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-glsl"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("void")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("main")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// gl_FragCoord是着色器当前位置的坐标值，xy范围为canvas的[0,width],[0,height]")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 下面st将gl_FragCoord转为webgl坐标[0,1]")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("vec2")]),s._v(" st"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("gl_FragCoord"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("xy"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("uResolution"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("float")]),s._v(" PI"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("3.1415926")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// x范围转到[0,2PI]")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("float")]),s._v(" tx"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("st"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("x"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2.")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v("PI"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// x范围转到[-1,1]")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("float")]),s._v(" ty"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("st"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("y"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2.")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1.")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// y = sin(x) 曲线")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("float")]),s._v(" pct"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("plot")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("ty"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sin")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("tx"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("vec3")]),s._v(" color"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("pct"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("vec3")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1.")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v(".0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n  gl_FragColor"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("vec4")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("color"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1.")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br")])]),a("p",[s._v("如果点在 sin(tx)上，pct 为 1.0，乘以 vec3(0.,1.,.0)为其本身，否则，跑 pct 为 0.0,color 值为 vec3(0.0,0.0,0.0);\n这样点在正弦曲线上颜色将为绿色，而曲线之外的部分颜色为黑色。")]),s._v(" "),a("p",[s._v("接着，我们可以添加 x 轴与 y 轴辅助线，x 轴方程为 y=0,y 轴我们绘制为 x=PI，接着修改我们的 main 函数：")]),s._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// y=0 直线 ，即X轴")]),s._v("\n  float xPct"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("plot")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("ty"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  vec3 xAxisColor"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("xPct"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("vec3")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1.")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// x=PI 直线，即 Y轴")]),s._v("\n  float yPct"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("plot")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("tx"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),a("span",{pre:!0,attrs:{class:"token constant"}},[s._v("PI")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  vec3 yAxisColor"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("yPct"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("vec3")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1.")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 颜色相加即的得到要绘制的图形")]),s._v("\n  color"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+=")]),s._v("xAxisColor"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v("yAxisColor"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br")])]),a("p",[s._v("最后，显示的颜色最终值为三个绘图函数颜色值的和，如果在 y=sin(x)上，颜色为绿色；如果在 y=0 上，颜色为红色，如果在 x=π 上，颜色为蓝色。\n最终我们的成果如下图所示：")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://raw.githubusercontent.com/zhouzhili/blog/master/issues/images/drawLine.png",alt:"result"}})]),s._v(" "),a("h3",{attrs:{id:"总结"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#总结"}},[s._v("#")]),s._v(" 总结")]),s._v(" "),a("p",[s._v("通过这个示例，我们可以绘制出更多的图形，根据各种造型函数，将函数区域与非函数区域绘制为 2 种不同的颜色我们便可以绘制出各种形状；另外，我们可以将多个绘图函数组合起来，绘制出更加多样的效果。而且这些直接在 GPU 中计算，性能将比通过 CPU 传递数据绘制更快。")]),s._v(" "),a("p",[s._v("学习资源：")]),s._v(" "),a("p",[a("a",{attrs:{href:"https://webglfundamentals.org/webgl/lessons/zh_cn/webgl-fundamentals.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("webGL 基础知识"),a("OutboundLink")],1)]),s._v(" "),a("p",[a("a",{attrs:{href:"https://thebookofshaders.com/?lan=ch",target:"_blank",rel:"noopener noreferrer"}},[s._v("着色器之书"),a("OutboundLink")],1)]),s._v(" "),a("p",[a("a",{attrs:{href:"https://www.shadertoy.com/",target:"_blank",rel:"noopener noreferrer"}},[s._v("着色器资源网"),a("OutboundLink")],1)]),s._v(" "),a("p",[a("a",{attrs:{href:"http://iquilezles.org/www/articles/distfunctions2d/distfunctions2d.htm",target:"_blank",rel:"noopener noreferrer"}},[s._v("距离场着色器"),a("OutboundLink")],1)])])}),[],!1,null,null,null);t.default=e.exports}}]);