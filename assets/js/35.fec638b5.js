(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{497:function(t,e,s){"use strict";s.r(e);var a=s(23),n=Object(a.a)({},(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"nodes"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#nodes"}},[t._v("#")]),t._v(" Nodes")]),t._v(" "),s("p",[t._v("The most important types are the "),s("code",[t._v("Node")]),t._v(" objects:")]),t._v(" "),s("ul",[s("li",[t._v("A root-level "),s("code",[t._v("Editor")]),t._v(" node that contains the entire document's content.")]),t._v(" "),s("li",[t._v("Container "),s("code",[t._v("Element")]),t._v(" nodes that have semantic meaning in your domain.")]),t._v(" "),s("li",[t._v("And leaf-level "),s("code",[t._v("Text")]),t._v(" nodes which contain the document's text.")])]),t._v(" "),s("p",[t._v("These three interfaces are combined to form a tree—just like the DOM. For example, here's a simple plaintext value:")]),t._v(" "),s("div",{staticClass:"language-javascript line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" editor "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  children"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      type"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'paragraph'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      children"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n          text"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'A line of text!'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ...the editor has other properties too.")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br"),s("span",{staticClass:"line-number"},[t._v("9")]),s("br"),s("span",{staticClass:"line-number"},[t._v("10")]),s("br"),s("span",{staticClass:"line-number"},[t._v("11")]),s("br"),s("span",{staticClass:"line-number"},[t._v("12")]),s("br"),s("span",{staticClass:"line-number"},[t._v("13")]),s("br")])]),s("p",[t._v("Mirroring the DOM as much as possible is one of Slate's principles. People use the DOM to represent documents with rich text-like structures all the time. Mirroring the DOM helps make the library familiar for new users, and it lets us reuse battle-tested patterns without having to reinvent them ourselves.")]),t._v(" "),s("blockquote",[s("p",[t._v("🤖 The following content on Mozilla's Developer Network may help you learn more about the corresponding DOM concepts:")]),t._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Web/API/Document",target:"_blank",rel:"noopener noreferrer"}},[t._v("Document"),s("OutboundLink")],1)]),t._v(" "),s("li",[s("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Web/HTML/Block-level_elements",target:"_blank",rel:"noopener noreferrer"}},[t._v("Block Elements"),s("OutboundLink")],1)]),t._v(" "),s("li",[s("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Web/HTML/Inline_elements",target:"_blank",rel:"noopener noreferrer"}},[t._v("Inline elements"),s("OutboundLink")],1)]),t._v(" "),s("li",[s("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Web/API/Text",target:"_blank",rel:"noopener noreferrer"}},[t._v("Text elements"),s("OutboundLink")],1)])])]),t._v(" "),s("p",[t._v("A Slate document is a nested and recursive structure. In a document, elements can have children nodes—all of which may have children nodes without limit. The nested and recursive structure enables you to model simple behaviors such as user mentions and hashtags or complex behaviors such as tables and figures with captions.")]),t._v(" "),s("h2",{attrs:{id:"editor"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#editor"}},[t._v("#")]),t._v(" "),s("code",[t._v("Editor")])]),t._v(" "),s("p",[t._v("The top-level node in a Slate document is the "),s("code",[t._v("Editor")]),t._v(' itself. It encapsulates all of the rich text "content" of the document. Its interface is:')]),t._v(" "),s("div",{staticClass:"language-typescript line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-typescript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("interface")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Editor")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  children"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" Node"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br")])]),s("p",[t._v("We'll cover its functionality later, but the important part as far as nodes are concerned is its "),s("code",[t._v("children")]),t._v(" property which contains a tree of "),s("code",[t._v("Node")]),t._v(" objects.")]),t._v(" "),s("h2",{attrs:{id:"element"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#element"}},[t._v("#")]),t._v(" "),s("code",[t._v("Element")])]),t._v(" "),s("p",[t._v("Elements make up the middle layers of a rich text document. They are the nodes that are custom to your domain. Their interface is:")]),t._v(" "),s("div",{staticClass:"language-typescript line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-typescript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("interface")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Element")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  children"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" Node"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br")])]),s("p",[t._v("You can define custom elements for any type of content you want. For example, you might have paragraphs and quotes in your data model which are differentiated by a "),s("code",[t._v("type")]),t._v(" property:")]),t._v(" "),s("div",{staticClass:"language-javascript line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" paragraph "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  type"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'paragraph'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  children"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" quote "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  type"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'quote'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  children"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br"),s("span",{staticClass:"line-number"},[t._v("9")]),s("br")])]),s("p",[t._v("It's important to note that you can use "),s("em",[t._v("any")]),t._v(" custom properties you want. The "),s("code",[t._v("type")]),t._v(' property in that example isn\'t something Slate knows or cares about. If you were defining your own "link" nodes, you might have a '),s("code",[t._v("url")]),t._v(" property:")]),t._v(" "),s("div",{staticClass:"language-javascript line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" link "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  type"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'link'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  url"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'https://example.com'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  children"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br")])]),s("p",[t._v("Or maybe you want to give all of your nodes an ID property:")]),t._v(" "),s("div",{staticClass:"language-javascript line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" paragraph "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  id"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  type"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'paragraph'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  children"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br")])]),s("p",[t._v("All that matters is that elements always have a "),s("code",[t._v("children")]),t._v(" property.")]),t._v(" "),s("h2",{attrs:{id:"blocks-vs-inlines"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#blocks-vs-inlines"}},[t._v("#")]),t._v(" Blocks vs. Inlines")]),t._v(" "),s("p",[t._v("Depending on your use case, you might want to define another behavior for "),s("code",[t._v("Element")]),t._v(' nodes which determines their editing "flow".')]),t._v(" "),s("p",[t._v('All elements default to being "block" elements. They each appear separated by vertical space, and they never run into each other.')]),t._v(" "),s("p",[t._v('But in certain cases, like for links, you might want to make them "inline" flowing elements instead. That way they live at the same level as text nodes, and flow.')]),t._v(" "),s("blockquote",[s("p",[t._v("🤖 This is a concept borrowed from the DOM's behavior, see "),s("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Web/HTML/Block-level_elements",target:"_blank",rel:"noopener noreferrer"}},[t._v("Block Elements"),s("OutboundLink")],1),t._v(" and "),s("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Web/HTML/Inline_elements",target:"_blank",rel:"noopener noreferrer"}},[t._v("Inline Elements"),s("OutboundLink")],1),t._v(".")])]),t._v(" "),s("p",[t._v("You can define which nodes are treated as inline nodes by overriding the "),s("code",[t._v("editor.isInline")]),t._v(" function. (By default it always returns "),s("code",[t._v("false")]),t._v(".) Note that inline nodes cannot be the first or last child of a parent block, nor can they be next to another inline node in the "),s("code",[t._v("children")]),t._v(" array. Slate will automatically space these with "),s("code",[t._v("{ text: '' }")]),t._v(" children by default with "),s("RouterLink",{attrs:{to:"/en/slate/concepts/11-normalizing.html#built-in-constraints"}},[s("code",[t._v("normalizeNode")])]),t._v(".")],1),t._v(" "),s("p",[t._v("Elements can either contain block elements or inline elements intermingled with text nodes as children. But elements "),s("strong",[t._v("cannot")]),t._v(" contain some children that are blocks and some that are inlined.")]),t._v(" "),s("h2",{attrs:{id:"voids"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#voids"}},[t._v("#")]),t._v(" Voids")]),t._v(" "),s("p",[t._v('Similar to blocks and inlines, there is another element-specific behavior you can define depending on your use case: their "void"-ness.')]),t._v(" "),s("p",[t._v("Elements default to being non-void, meaning that their children are fully editable as text. But in some cases, like for images, you want to ensure that Slate doesn't treat their content as editable text, but instead as a black box.")]),t._v(" "),s("blockquote",[s("p",[t._v("🤖 This is a concept borrowed from the HTML spec, see "),s("a",{attrs:{href:"https://www.w3.org/TR/2011/WD-html-markup-20110405/syntax.html#void-element",target:"_blank",rel:"noopener noreferrer"}},[t._v("Void Elements"),s("OutboundLink")],1),t._v(".")])]),t._v(" "),s("p",[t._v("You can define which elements are treated as void by overriding the "),s("code",[t._v("editor.isVoid")]),t._v(" function. (By default it always returns "),s("code",[t._v("false")]),t._v(".) See "),s("RouterLink",{attrs:{to:"/en/slate/api/nodes/element.html#rendering-void-elements"}},[t._v("Rendering Void Elements")]),t._v(" for implementation details.")],1),t._v(" "),s("h2",{attrs:{id:"text"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#text"}},[t._v("#")]),t._v(" "),s("code",[t._v("Text")])]),t._v(" "),s("p",[t._v("Text nodes are the lowest-level nodes in the tree, containing the text content of the document, along with any formatting. Their interface is:")]),t._v(" "),s("div",{staticClass:"language-typescript line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-typescript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("interface")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Text")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  text"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("string")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br")])]),s("p",[t._v("For example, a string of bold text:")]),t._v(" "),s("div",{staticClass:"language-javascript line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" text "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  text"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'A string of bold text'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  bold"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br")])]),s("p",[t._v("Text nodes too can contain any custom properties you want, and that's how you implement custom formatting like "),s("strong",[t._v("bold")]),t._v(", "),s("em",[t._v("italic")]),t._v(", "),s("code",[t._v("code")]),t._v(", etc.\nThese custom properties are sometimes called "),s("RouterLink",{attrs:{to:"/en/slate/api/nodes/editor.html#mark-methods"}},[t._v("marks")]),t._v(".")],1)])}),[],!1,null,null,null);e.default=n.exports}}]);