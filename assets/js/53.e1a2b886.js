(window.webpackJsonp=window.webpackJsonp||[]).push([[53],{515:function(t,e,a){"use strict";a.r(e);var r=a(23),s=Object(r.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"slate-react"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#slate-react"}},[t._v("#")]),t._v(" Slate React")]),t._v(" "),a("p",[t._v("This sub-library contains the React-specific logic for Slate.")]),t._v(" "),a("h2",{attrs:{id:"components"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#components"}},[t._v("#")]),t._v(" Components")]),t._v(" "),a("p",[t._v("React components for rendering Slate editors")]),t._v(" "),a("h3",{attrs:{id:"renderelementprops"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#renderelementprops"}},[t._v("#")]),t._v(" "),a("code",[t._v("RenderElementProps")])]),t._v(" "),a("p",[a("code",[t._v("RenderElementProps")]),t._v(" are passed to the "),a("code",[t._v("renderElement")]),t._v(" handler.")]),t._v(" "),a("h3",{attrs:{id:"renderleafprops"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#renderleafprops"}},[t._v("#")]),t._v(" "),a("code",[t._v("RenderLeafProps")])]),t._v(" "),a("p",[a("code",[t._v("RenderLeafProps")]),t._v(" are passed to the "),a("code",[t._v("renderLeaf")]),t._v(" handler.")]),t._v(" "),a("h3",{attrs:{id:"editable"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#editable"}},[t._v("#")]),t._v(" "),a("code",[t._v("Editable")])]),t._v(" "),a("p",[t._v("The main Slate editor.")]),t._v(" "),a("h4",{attrs:{id:"event-handling"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#event-handling"}},[t._v("#")]),t._v(" Event Handling")]),t._v(" "),a("p",[t._v("By default, the "),a("code",[t._v("Editable")]),t._v(" component comes with a set of event handlers that handle typical rich-text editing behaviors (for example, it implements its own "),a("code",[t._v("onCopy")]),t._v(", "),a("code",[t._v("onPaste")]),t._v(", "),a("code",[t._v("onDrop")]),t._v(", and "),a("code",[t._v("onKeyDown")]),t._v(" handlers).")]),t._v(" "),a("p",[t._v("In some cases you may want to extend or override Slate's default behavior, which can be done by passing your own event handler(s) to the "),a("code",[t._v("Editable")]),t._v(" component.")]),t._v(" "),a("p",[t._v("Your custom event handler can control whether or not Slate should execute its own event handling for a given event after your handler runs depending on the return value of your event handler as described below.")]),t._v(" "),a("div",{staticClass:"language-jsx line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-jsx"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("Editable"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'slate-react'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("MyEditor")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("onClick")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("event")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Implement custom event logic...")]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// When no value is returned, Slate will execute its own event handler when")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// neither isDefaultPrevented nor isPropagationStopped was set on the event")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("onDrop")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("event")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Implement custom event logic...")]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// No matter the state of the event, treat it as being handled by returning")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// true here, Slate will skip its own event handler")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("onDragStart")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("event")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Implement custom event logic...")]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// No matter the status of the event, treat event as *not* being handled by")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// returning false, Slate will execute its own event handler afterward")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("Editable\n      onClick"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("onClick"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n      onDrop"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("onDrop"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n      onDragStart"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("onDragStart"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/*...*/")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br"),a("span",{staticClass:"line-number"},[t._v("12")]),a("br"),a("span",{staticClass:"line-number"},[t._v("13")]),a("br"),a("span",{staticClass:"line-number"},[t._v("14")]),a("br"),a("span",{staticClass:"line-number"},[t._v("15")]),a("br"),a("span",{staticClass:"line-number"},[t._v("16")]),a("br"),a("span",{staticClass:"line-number"},[t._v("17")]),a("br"),a("span",{staticClass:"line-number"},[t._v("18")]),a("br"),a("span",{staticClass:"line-number"},[t._v("19")]),a("br"),a("span",{staticClass:"line-number"},[t._v("20")]),a("br"),a("span",{staticClass:"line-number"},[t._v("21")]),a("br"),a("span",{staticClass:"line-number"},[t._v("22")]),a("br"),a("span",{staticClass:"line-number"},[t._v("23")]),a("br"),a("span",{staticClass:"line-number"},[t._v("24")]),a("br"),a("span",{staticClass:"line-number"},[t._v("25")]),a("br"),a("span",{staticClass:"line-number"},[t._v("26")]),a("br"),a("span",{staticClass:"line-number"},[t._v("27")]),a("br"),a("span",{staticClass:"line-number"},[t._v("28")]),a("br"),a("span",{staticClass:"line-number"},[t._v("29")]),a("br"),a("span",{staticClass:"line-number"},[t._v("30")]),a("br"),a("span",{staticClass:"line-number"},[t._v("31")]),a("br"),a("span",{staticClass:"line-number"},[t._v("32")]),a("br"),a("span",{staticClass:"line-number"},[t._v("33")]),a("br"),a("span",{staticClass:"line-number"},[t._v("34")]),a("br"),a("span",{staticClass:"line-number"},[t._v("35")]),a("br")])]),a("h3",{attrs:{id:"defaultelement-props-renderelementprops"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#defaultelement-props-renderelementprops"}},[t._v("#")]),t._v(" "),a("code",[t._v("DefaultElement(props: RenderElementProps)")])]),t._v(" "),a("p",[t._v("The default element renderer.")]),t._v(" "),a("h3",{attrs:{id:"defaultleaf-props-renderleafprops"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#defaultleaf-props-renderleafprops"}},[t._v("#")]),t._v(" "),a("code",[t._v("DefaultLeaf(props: RenderLeafProps)")])]),t._v(" "),a("p",[t._v("The default custom leaf renderer.")]),t._v(" "),a("h3",{attrs:{id:"slate-editor-reacteditor-value-node-children-react-reactnode-onchange-value-node-void-key-string-any"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#slate-editor-reacteditor-value-node-children-react-reactnode-onchange-value-node-void-key-string-any"}},[t._v("#")]),t._v(" "),a("code",[t._v("Slate(editor: ReactEditor, value: Node[], children: React.ReactNode, onChange: (value: Node[]) => void, [key: string]: any)")])]),t._v(" "),a("p",[t._v("A wrapper around the provider to handle "),a("code",[t._v("onChange")]),t._v(' events, because the editor is a mutable singleton so it won\'t ever register as "changed" otherwise.')]),t._v(" "),a("h2",{attrs:{id:"hooks"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#hooks"}},[t._v("#")]),t._v(" Hooks")]),t._v(" "),a("p",[t._v("React hooks for Slate editors")]),t._v(" "),a("h3",{attrs:{id:"usefocused"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#usefocused"}},[t._v("#")]),t._v(" "),a("code",[t._v("useFocused")])]),t._v(" "),a("p",[t._v("Get the current "),a("code",[t._v("focused")]),t._v(" state of the editor.")]),t._v(" "),a("h3",{attrs:{id:"usereadonly"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#usereadonly"}},[t._v("#")]),t._v(" "),a("code",[t._v("useReadOnly")])]),t._v(" "),a("p",[t._v("Get the current "),a("code",[t._v("readOnly")]),t._v(" state of the editor.")]),t._v(" "),a("h3",{attrs:{id:"useselected"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#useselected"}},[t._v("#")]),t._v(" "),a("code",[t._v("useSelected")])]),t._v(" "),a("p",[t._v("Get the current "),a("code",[t._v("selected")]),t._v(" state of an element.")]),t._v(" "),a("h3",{attrs:{id:"useslate"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#useslate"}},[t._v("#")]),t._v(" "),a("code",[t._v("useSlate")])]),t._v(" "),a("p",[t._v("Get the current editor object from the React context. Re-renders the context whenever changes occur in the editor.")]),t._v(" "),a("h3",{attrs:{id:"useslatestatic"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#useslatestatic"}},[t._v("#")]),t._v(" "),a("code",[t._v("useSlateStatic")])]),t._v(" "),a("p",[t._v("Get the current editor object from the React context. A version of useSlate that does not re-render the context. Previously called "),a("code",[t._v("useEditor")]),t._v(".")]),t._v(" "),a("h2",{attrs:{id:"reacteditor"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#reacteditor"}},[t._v("#")]),t._v(" ReactEditor")]),t._v(" "),a("p",[t._v("A React and DOM-specific version of the "),a("code",[t._v("Editor")]),t._v(" interface. All about translating between the DOM and Slate.")]),t._v(" "),a("h3",{attrs:{id:"findkey-editor-reacteditor-node-node"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#findkey-editor-reacteditor-node-node"}},[t._v("#")]),t._v(" "),a("code",[t._v("findKey(editor: ReactEditor, node: Node)")])]),t._v(" "),a("p",[t._v("Find a key for a Slate node.")]),t._v(" "),a("h3",{attrs:{id:"findpath-editor-reacteditor-node-node"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#findpath-editor-reacteditor-node-node"}},[t._v("#")]),t._v(" "),a("code",[t._v("findPath(editor: ReactEditor, node: Node)")])]),t._v(" "),a("p",[t._v("Find the path of Slate node.")]),t._v(" "),a("h3",{attrs:{id:"isfocused-editor-reacteditor"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#isfocused-editor-reacteditor"}},[t._v("#")]),t._v(" "),a("code",[t._v("isFocused(editor: ReactEditor)")])]),t._v(" "),a("p",[t._v("Check if the editor is focused.")]),t._v(" "),a("h3",{attrs:{id:"isreadonly-editor-reacteditor"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#isreadonly-editor-reacteditor"}},[t._v("#")]),t._v(" "),a("code",[t._v("isReadOnly(editor: ReactEditor)")])]),t._v(" "),a("p",[t._v("Check if the editor is in read-only mode.")]),t._v(" "),a("h3",{attrs:{id:"blur-editor-reacteditor"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#blur-editor-reacteditor"}},[t._v("#")]),t._v(" "),a("code",[t._v("blur(editor: ReactEditor)")])]),t._v(" "),a("p",[t._v("Blur the editor.")]),t._v(" "),a("h3",{attrs:{id:"focus-editor-reacteditor"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#focus-editor-reacteditor"}},[t._v("#")]),t._v(" "),a("code",[t._v("focus(editor: ReactEditor)")])]),t._v(" "),a("p",[t._v("Focus the editor.")]),t._v(" "),a("h3",{attrs:{id:"deselect-editor-reacteditor"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#deselect-editor-reacteditor"}},[t._v("#")]),t._v(" "),a("code",[t._v("deselect(editor: ReactEditor)")])]),t._v(" "),a("p",[t._v("Deselect the editor.")]),t._v(" "),a("h3",{attrs:{id:"hasdomnode-editor-reacteditor-target-domnode-options-editable-boolean"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#hasdomnode-editor-reacteditor-target-domnode-options-editable-boolean"}},[t._v("#")]),t._v(" "),a("code",[t._v("hasDOMNode(editor: ReactEditor, target: DOMNode, options: { editable?: boolean } = {})")])]),t._v(" "),a("p",[t._v("Check if a DOM node is within the editor.")]),t._v(" "),a("h3",{attrs:{id:"insertdata-editor-reacteditor-data-datatransfer"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#insertdata-editor-reacteditor-data-datatransfer"}},[t._v("#")]),t._v(" "),a("code",[t._v("insertData(editor: ReactEditor, data: DataTransfer)")])]),t._v(" "),a("p",[t._v("Insert data from a "),a("code",[t._v("DataTransfer")]),t._v(" into the editor. This is a proxy method to call in this order "),a("code",[t._v("insertFragmentData(editor: ReactEditor, data: DataTransfer)")]),t._v(" and then "),a("code",[t._v("insertTextData(editor: ReactEditor, data: DataTransfer)")]),t._v(".")]),t._v(" "),a("h3",{attrs:{id:"insertfragmentdata-editor-reacteditor-data-datatransfer"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#insertfragmentdata-editor-reacteditor-data-datatransfer"}},[t._v("#")]),t._v(" "),a("code",[t._v("insertFragmentData(editor: ReactEditor, data: DataTransfer)")])]),t._v(" "),a("p",[t._v("Insert fragment data from a "),a("code",[t._v("DataTransfer")]),t._v(" into the editor. Returns true if some content has been effectively inserted.")]),t._v(" "),a("h3",{attrs:{id:"inserttextdata-editor-reacteditor-data-datatransfer"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#inserttextdata-editor-reacteditor-data-datatransfer"}},[t._v("#")]),t._v(" "),a("code",[t._v("insertTextData(editor: ReactEditor, data: DataTransfer)")])]),t._v(" "),a("p",[t._v("Insert text data from a "),a("code",[t._v("DataTransfer")]),t._v(" into the editor. Returns true if some content has been effectively inserted.")]),t._v(" "),a("h3",{attrs:{id:"setfragmentdata-editor-reacteditor-data-datatransfer-originevent-drag-copy-cut"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#setfragmentdata-editor-reacteditor-data-datatransfer-originevent-drag-copy-cut"}},[t._v("#")]),t._v(" "),a("code",[t._v("setFragmentData(editor: ReactEditor, data: DataTransfer, originEvent?: 'drag' | 'copy' | 'cut')")])]),t._v(" "),a("p",[t._v("Sets data from the currently selected fragment on a "),a("code",[t._v("DataTransfer")]),t._v(".")]),t._v(" "),a("h3",{attrs:{id:"todomnode-editor-reacteditor-node-node"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#todomnode-editor-reacteditor-node-node"}},[t._v("#")]),t._v(" "),a("code",[t._v("toDOMNode(editor: ReactEditor, node: Node)")])]),t._v(" "),a("p",[t._v("Find the native DOM element from a Slate node.")]),t._v(" "),a("h3",{attrs:{id:"todompoint-editor-reacteditor-point-point"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#todompoint-editor-reacteditor-point-point"}},[t._v("#")]),t._v(" "),a("code",[t._v("toDOMPoint(editor: ReactEditor, point: Point)")])]),t._v(" "),a("p",[t._v("Find a native DOM selection point from a Slate point.")]),t._v(" "),a("h3",{attrs:{id:"todomrange-editor-reacteditor-range-range"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#todomrange-editor-reacteditor-range-range"}},[t._v("#")]),t._v(" "),a("code",[t._v("toDOMRange(editor: ReactEditor, range: Range)")])]),t._v(" "),a("p",[t._v("Find a native DOM range from a Slate "),a("code",[t._v("range")]),t._v(".")]),t._v(" "),a("h3",{attrs:{id:"toslatenode-editor-reacteditor-domnode-domnode"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#toslatenode-editor-reacteditor-domnode-domnode"}},[t._v("#")]),t._v(" "),a("code",[t._v("toSlateNode(editor: ReactEditor, domNode: DOMNode)")])]),t._v(" "),a("p",[t._v("Find a Slate node from a native DOM "),a("code",[t._v("element")]),t._v(".")]),t._v(" "),a("h3",{attrs:{id:"findeventrange-editor-reacteditor-event-any"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#findeventrange-editor-reacteditor-event-any"}},[t._v("#")]),t._v(" "),a("code",[t._v("findEventRange(editor: ReactEditor, event: any)")])]),t._v(" "),a("p",[t._v("Get the target range from a DOM "),a("code",[t._v("event")]),t._v(".")]),t._v(" "),a("h3",{attrs:{id:"toslatepoint-editor-reacteditor-dompoint-dompoint"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#toslatepoint-editor-reacteditor-dompoint-dompoint"}},[t._v("#")]),t._v(" "),a("code",[t._v("toSlatePoint(editor: ReactEditor, domPoint: DOMPoint)")])]),t._v(" "),a("p",[t._v("Find a Slate point from a DOM selection's "),a("code",[t._v("domNode")]),t._v(" and "),a("code",[t._v("domOffset")]),t._v(".")]),t._v(" "),a("h3",{attrs:{id:"toslaterange-editor-reacteditor-domrange-domrange-domstaticrange-domselection-options-exactmatch-boolean"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#toslaterange-editor-reacteditor-domrange-domrange-domstaticrange-domselection-options-exactmatch-boolean"}},[t._v("#")]),t._v(" "),a("code",[t._v("toSlateRange(editor: ReactEditor, domRange: DOMRange | DOMStaticRange | DOMSelection, options?: { exactMatch?: boolean } = {})")])]),t._v(" "),a("p",[t._v("Find a Slate range from a DOM range or selection.")]),t._v(" "),a("h2",{attrs:{id:"plugins"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#plugins"}},[t._v("#")]),t._v(" Plugins")]),t._v(" "),a("p",[t._v("React-specific plugins for Slate editors")]),t._v(" "),a("h3",{attrs:{id:"withreact-editor-editor"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#withreact-editor-editor"}},[t._v("#")]),t._v(" "),a("code",[t._v("withReact(editor: Editor)")])]),t._v(" "),a("p",[t._v("Adds React and DOM specific behaviors to the editor.")]),t._v(" "),a("p",[t._v("When used with "),a("code",[t._v("withHistory")]),t._v(", "),a("code",[t._v("withReact")]),t._v(" should be applied outside. For example:")]),t._v(" "),a("div",{staticClass:"language-javascript line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" editor "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("useMemo")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("withReact")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("withHistory")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("createEditor")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("h2",{attrs:{id:"utils"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#utils"}},[t._v("#")]),t._v(" Utils")]),t._v(" "),a("p",[t._v("Private convenience modules")])])}),[],!1,null,null,null);e.default=s.exports}}]);