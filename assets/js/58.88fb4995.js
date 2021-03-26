(window.webpackJsonp=window.webpackJsonp||[]).push([[58],{536:function(t,s,a){"use strict";a.r(s);var n=a(23),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"命令-commands"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#命令-commands"}},[t._v("#")]),t._v(" 命令(Commands)")]),t._v(" "),a("p",[t._v("当编辑富文本的时候，用户可能会插入文本，删除文本，分隔段落，添加格式等等。这些编辑行为都可以用两个概念来说明：命令和操作。")]),t._v(" "),a("p",[t._v("命令("),a("code",[t._v("Commands")]),t._v(")是代表用户特定意图的高级操作。它们是 "),a("code",[t._v("Editor")]),t._v(" 接口的辅助函数。辅助函数包含了一些富文本常用的核心行为，但是建议你编写针对自己特定模型的命令。")]),t._v(" "),a("p",[t._v("比如，下面这些是内置命令:")]),t._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("Editor"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("insertText")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("editor"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'A new string of text to be inserted.'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\nEditor"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("deleteBackward")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("editor"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" unit"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'word'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\nEditor"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("insertBreak")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("editor"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br")])]),a("p",[t._v("但是你可以(一定会)定义自己的自定义命令。比如，你可能会根据允许的内容类型定义 "),a("code",[t._v("formatQuote")]),t._v(" 命令， "),a("code",[t._v("insertImage")]),t._v(" 命令，或者是 "),a("code",[t._v("toggleBold")]),t._v(" 命令。")]),t._v(" "),a("p",[t._v("命令总是描述将要进行的操作，就好像是"),a("strong",[t._v("用户")]),t._v("自己在执行一样。由于这个原因，它们从不需要定义执行命令的位置 ("),a("RouterLink",{attrs:{to:"/zh/slate/concepts/03-locations.html"}},[t._v("location")]),t._v(")，因为它们总是对当前的选择范围执行操作。")],1),t._v(" "),a("blockquote",[a("p",[t._v("🤖 命令的概念基本上来自于 "),a("code",[t._v("DOM")]),t._v(" 内检的 "),a("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Web/API/Document/execCommand",target:"_blank",rel:"noopener noreferrer"}},[a("code",[t._v("execCommand")]),a("OutboundLink")],1),t._v(" "),a("code",[t._v("API")]),t._v("。然而 "),a("code",[t._v("Slate")]),t._v(" 定义了自己的简单（并且可扩展）的 "),a("code",[t._v("API")]),t._v(" ，因为 "),a("code",[t._v("DOM")]),t._v(" 版本的"),a("code",[t._v("API")]),t._v(" 表现过于不一致 "),a("code",[t._v("(opinionated and inconsistent)")]),t._v("。")])]),t._v(" "),a("p",[t._v("因此，Slate 将每一个命令转换为一系列的底层操作 ("),a("RouterLink",{attrs:{to:"/zh/slate/concepts/05-operations.html"}},[t._v("operations")]),t._v(")，这些操作用来产生一个新的值。这就是协同编辑可以实现的原因。同时你不用担心这些问题，因为它是自动完成的。")],1),t._v(" "),a("h2",{attrs:{id:"自定义命令-custom-commands"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#自定义命令-custom-commands"}},[t._v("#")]),t._v(" 自定义命令(Custom Commands)")]),t._v(" "),a("p",[t._v("在编写自定义命令时，你可以创建自己的命名空间:")]),t._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" MyEditor "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),t._v("Editor"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\n  "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("insertParagraph")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("editor")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ...")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br")])]),a("p",[t._v("你通常会使用 "),a("code",[t._v("Slate")]),t._v(" 的 "),a("RouterLink",{attrs:{to:"/zh/slate/api/transforms.html"}},[t._v("Transforms")]),t._v(" 来编写自定义命令。")],1),t._v(" "),a("h2",{attrs:{id:"转换-transforms"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#转换-transforms"}},[t._v("#")]),t._v(" 转换(Transforms)")]),t._v(" "),a("p",[t._v("转换 ("),a("code",[t._v("Transforms")]),t._v(") 是一个特殊的辅助函数，它允许你对文档执行各种特定的更改，比如:")]),t._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 对选中的所有文本节点设置粗体")]),t._v("\nTransforms"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("setNodes")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n  editor"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" bold"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    at"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" range"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("match")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("node")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" Text"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("isText")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("node"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    split"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 把光标所在的最后一个块转换为引用块")]),t._v("\nTransforms"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("wrapNodes")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n  editor"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" type"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'quote'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" children"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    at"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" point"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("match")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("node")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" Editor"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("isBlock")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("editor"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" node"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    mode"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'lowest'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 在指定路径（path）处插入一个新的文本用来替代原来的文本")]),t._v("\nTransforms"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("insertText")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("editor"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'A new string of text.'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" at"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" path "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ...还有省略的其他变换操作！")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br"),a("span",{staticClass:"line-number"},[t._v("12")]),a("br"),a("span",{staticClass:"line-number"},[t._v("13")]),a("br"),a("span",{staticClass:"line-number"},[t._v("14")]),a("br"),a("span",{staticClass:"line-number"},[t._v("15")]),a("br"),a("span",{staticClass:"line-number"},[t._v("16")]),a("br"),a("span",{staticClass:"line-number"},[t._v("17")]),a("br"),a("span",{staticClass:"line-number"},[t._v("18")]),a("br"),a("span",{staticClass:"line-number"},[t._v("19")]),a("br"),a("span",{staticClass:"line-number"},[t._v("20")]),a("br"),a("span",{staticClass:"line-number"},[t._v("21")]),a("br"),a("span",{staticClass:"line-number"},[t._v("22")]),a("br"),a("span",{staticClass:"line-number"},[t._v("23")]),a("br"),a("span",{staticClass:"line-number"},[t._v("24")]),a("br"),a("span",{staticClass:"line-number"},[t._v("25")]),a("br"),a("span",{staticClass:"line-number"},[t._v("26")]),a("br")])]),a("p",[t._v("转换辅助函数被设计为一个集合。所以你可能在每个命令中都会使用到它的一部分。")])])}),[],!1,null,null,null);s.default=e.exports}}]);