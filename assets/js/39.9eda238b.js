(window.webpackJsonp=window.webpackJsonp||[]).push([[39],{515:function(e,t,a){"use strict";a.r(t);var r=a(23),o=Object(r.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"slate-react"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#slate-react"}},[e._v("#")]),e._v(" Slate React")]),e._v(" "),a("p",[e._v("This sub-library contains the React-specific logic for Slate.")]),e._v(" "),a("h2",{attrs:{id:"components"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#components"}},[e._v("#")]),e._v(" Components")]),e._v(" "),a("p",[e._v("React components for rendering Slate editors")]),e._v(" "),a("h6",{attrs:{id:"renderelementprops"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#renderelementprops"}},[e._v("#")]),e._v(" "),a("code",[e._v("RenderElementProps")])]),e._v(" "),a("p",[a("code",[e._v("RenderElementProps")]),e._v(" are passed to the "),a("code",[e._v("renderElement")]),e._v(" handler.")]),e._v(" "),a("h6",{attrs:{id:"renderleafprops"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#renderleafprops"}},[e._v("#")]),e._v(" "),a("code",[e._v("RenderLeafProps")])]),e._v(" "),a("p",[a("code",[e._v("RenderLeafProps")]),e._v(" are passed to the "),a("code",[e._v("renderLeaf")]),e._v(" handler.")]),e._v(" "),a("h6",{attrs:{id:"editable"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#editable"}},[e._v("#")]),e._v(" "),a("code",[e._v("Editable")])]),e._v(" "),a("p",[e._v("The main Slate editor.")]),e._v(" "),a("h6",{attrs:{id:"defaultelement-props-renderelementprops"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#defaultelement-props-renderelementprops"}},[e._v("#")]),e._v(" "),a("code",[e._v("DefaultElement(props: RenderElementProps)")])]),e._v(" "),a("p",[e._v("The default element renderer.")]),e._v(" "),a("h6",{attrs:{id:"defaultleaf-props-renderleafprops"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#defaultleaf-props-renderleafprops"}},[e._v("#")]),e._v(" "),a("code",[e._v("DefaultLeaf(props: RenderLeafProps)")])]),e._v(" "),a("p",[e._v("The default custom leaf renderer.")]),e._v(" "),a("h6",{attrs:{id:"slate-editor-reacteditor-value-node-children-react-reactnode-onchange-value-node-void-key-string-any"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#slate-editor-reacteditor-value-node-children-react-reactnode-onchange-value-node-void-key-string-any"}},[e._v("#")]),e._v(" "),a("code",[e._v("Slate(editor: ReactEditor, value: Node[], children: React.ReactNode, onChange: (value: Node[]) => void, [key: string]: any)")])]),e._v(" "),a("p",[e._v("A wrapper around the provider to handle "),a("code",[e._v("onChange")]),e._v(' events, because the editor is a mutable singleton so it won\'t ever register as "changed" otherwise.')]),e._v(" "),a("h2",{attrs:{id:"hooks"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#hooks"}},[e._v("#")]),e._v(" Hooks")]),e._v(" "),a("p",[e._v("React hooks for Slate editors")]),e._v(" "),a("h6",{attrs:{id:"usefocused"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#usefocused"}},[e._v("#")]),e._v(" "),a("code",[e._v("useFocused")])]),e._v(" "),a("p",[e._v("Get the current "),a("code",[e._v("focused")]),e._v(" state of the editor.")]),e._v(" "),a("h6",{attrs:{id:"usereadonly"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#usereadonly"}},[e._v("#")]),e._v(" "),a("code",[e._v("useReadOnly")])]),e._v(" "),a("p",[e._v("Get the current "),a("code",[e._v("readOnly")]),e._v(" state of the editor.")]),e._v(" "),a("h6",{attrs:{id:"useselected"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#useselected"}},[e._v("#")]),e._v(" "),a("code",[e._v("useSelected")])]),e._v(" "),a("p",[e._v("Get the current "),a("code",[e._v("selected")]),e._v(" state of an element.")]),e._v(" "),a("h6",{attrs:{id:"useslate"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#useslate"}},[e._v("#")]),e._v(" "),a("code",[e._v("useSlate")])]),e._v(" "),a("p",[e._v("Get the current editor object from the React context. Re-renders the context whenever changes occur in the editor.")]),e._v(" "),a("h6",{attrs:{id:"useslatestatic"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#useslatestatic"}},[e._v("#")]),e._v(" "),a("code",[e._v("useSlateStatic")])]),e._v(" "),a("p",[e._v("Get the current editor object from the React context. A version of useSlate that does not re-render the context. Previously called "),a("code",[e._v("useEditor")]),e._v(".")]),e._v(" "),a("h2",{attrs:{id:"reacteditor"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#reacteditor"}},[e._v("#")]),e._v(" ReactEditor")]),e._v(" "),a("p",[e._v("A React and DOM-specific version of the "),a("code",[e._v("Editor")]),e._v(" interface. All about translating between the DOM and Slate.")]),e._v(" "),a("h6",{attrs:{id:"findkey-editor-reacteditor-node-node"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#findkey-editor-reacteditor-node-node"}},[e._v("#")]),e._v(" "),a("code",[e._v("findKey(editor: ReactEditor, node: Node)")])]),e._v(" "),a("p",[e._v("Find a key for a Slate node.")]),e._v(" "),a("h6",{attrs:{id:"findpath-editor-reacteditor-node-node"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#findpath-editor-reacteditor-node-node"}},[e._v("#")]),e._v(" "),a("code",[e._v("findPath(editor: ReactEditor, node: Node)")])]),e._v(" "),a("p",[e._v("Find the path of Slate node.")]),e._v(" "),a("h6",{attrs:{id:"isfocused-editor-reacteditor"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#isfocused-editor-reacteditor"}},[e._v("#")]),e._v(" "),a("code",[e._v("isFocused(editor: ReactEditor)")])]),e._v(" "),a("p",[e._v("Check if the editor is focused.")]),e._v(" "),a("h6",{attrs:{id:"isreadonly-editor-reacteditor"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#isreadonly-editor-reacteditor"}},[e._v("#")]),e._v(" "),a("code",[e._v("isReadOnly(editor: ReactEditor)")])]),e._v(" "),a("p",[e._v("Check if the editor is in read-only mode.")]),e._v(" "),a("h6",{attrs:{id:"blur-editor-reacteditor"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#blur-editor-reacteditor"}},[e._v("#")]),e._v(" "),a("code",[e._v("blur(editor: ReactEditor)")])]),e._v(" "),a("p",[e._v("Blur the editor.")]),e._v(" "),a("h6",{attrs:{id:"focus-editor-reacteditor"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#focus-editor-reacteditor"}},[e._v("#")]),e._v(" "),a("code",[e._v("focus(editor: ReactEditor)")])]),e._v(" "),a("p",[e._v("Focus the editor.")]),e._v(" "),a("h6",{attrs:{id:"deselect-editor-reacteditor"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#deselect-editor-reacteditor"}},[e._v("#")]),e._v(" "),a("code",[e._v("deselect(editor: ReactEditor)")])]),e._v(" "),a("p",[e._v("Deselect the editor.")]),e._v(" "),a("h6",{attrs:{id:"hasdomnode-editor-reacteditor-target-domnode-options-editable-boolean"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#hasdomnode-editor-reacteditor-target-domnode-options-editable-boolean"}},[e._v("#")]),e._v(" "),a("code",[e._v("hasDOMNode(editor: ReactEditor, target: DOMNode, options: { editable?: boolean } = {})")])]),e._v(" "),a("p",[e._v("Check if a DOM node is within the editor.")]),e._v(" "),a("h6",{attrs:{id:"insertdata-editor-reacteditor-data-datatransfer"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#insertdata-editor-reacteditor-data-datatransfer"}},[e._v("#")]),e._v(" "),a("code",[e._v("insertData(editor: ReactEditor, data: DataTransfer)")])]),e._v(" "),a("p",[e._v("Insert data from a "),a("code",[e._v("DataTransfer")]),e._v(" into the editor.")]),e._v(" "),a("h6",{attrs:{id:"setfragmentdata-editor-reacteditor-data-datatransfer"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#setfragmentdata-editor-reacteditor-data-datatransfer"}},[e._v("#")]),e._v(" "),a("code",[e._v("setFragmentData(editor: ReactEditor, data: DataTransfer)")])]),e._v(" "),a("p",[e._v("Sets data from the currently selected fragment on a "),a("code",[e._v("DataTransfer")]),e._v(".")]),e._v(" "),a("h6",{attrs:{id:"todomnode-editor-reacteditor-node-node"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#todomnode-editor-reacteditor-node-node"}},[e._v("#")]),e._v(" "),a("code",[e._v("toDOMNode(editor: ReactEditor, node: Node)")])]),e._v(" "),a("p",[e._v("Find the native DOM element from a Slate node.")]),e._v(" "),a("h6",{attrs:{id:"todompoint-editor-reacteditor-point-point"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#todompoint-editor-reacteditor-point-point"}},[e._v("#")]),e._v(" "),a("code",[e._v("toDOMPoint(editor: ReactEditor, point: Point)")])]),e._v(" "),a("p",[e._v("Find a native DOM selection point from a Slate point.")]),e._v(" "),a("h6",{attrs:{id:"todomrange-editor-reacteditor-range-range"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#todomrange-editor-reacteditor-range-range"}},[e._v("#")]),e._v(" "),a("code",[e._v("toDOMRange(editor: ReactEditor, range: Range)")])]),e._v(" "),a("p",[e._v("Find a native DOM range from a Slate "),a("code",[e._v("range")]),e._v(".")]),e._v(" "),a("h6",{attrs:{id:"toslatenode-editor-reacteditor-domnode-domnode"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#toslatenode-editor-reacteditor-domnode-domnode"}},[e._v("#")]),e._v(" "),a("code",[e._v("toSlateNode(editor: ReactEditor, domNode: DOMNode)")])]),e._v(" "),a("p",[e._v("Find a Slate node from a native DOM "),a("code",[e._v("element")]),e._v(".")]),e._v(" "),a("h6",{attrs:{id:"findeventrange-editor-reacteditor-event-any"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#findeventrange-editor-reacteditor-event-any"}},[e._v("#")]),e._v(" "),a("code",[e._v("findEventRange(editor: ReactEditor, event: any)")])]),e._v(" "),a("p",[e._v("Get the target range from a DOM "),a("code",[e._v("event")]),e._v(".")]),e._v(" "),a("h6",{attrs:{id:"toslatepoint-editor-reacteditor-dompoint-dompoint"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#toslatepoint-editor-reacteditor-dompoint-dompoint"}},[e._v("#")]),e._v(" "),a("code",[e._v("toSlatePoint(editor: ReactEditor, domPoint: DOMPoint)")])]),e._v(" "),a("p",[e._v("Find a Slate point from a DOM selection's "),a("code",[e._v("domNode")]),e._v(" and "),a("code",[e._v("domOffset")]),e._v(".")]),e._v(" "),a("h6",{attrs:{id:"toslatepoint-editor-reacteditor-dompoint-dompoint-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#toslatepoint-editor-reacteditor-dompoint-dompoint-2"}},[e._v("#")]),e._v(" "),a("code",[e._v("toSlatePoint(editor: ReactEditor, domPoint: DOMPoint)")])]),e._v(" "),a("p",[e._v("Find a Slate range from a DOM range or selection.")]),e._v(" "),a("h2",{attrs:{id:"plugins"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#plugins"}},[e._v("#")]),e._v(" Plugins")]),e._v(" "),a("p",[e._v("React-specific plugins for Slate editors")]),e._v(" "),a("h6",{attrs:{id:"withreact-editor-editor"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#withreact-editor-editor"}},[e._v("#")]),e._v(" "),a("code",[e._v("withReact(editor: Editor)")])]),e._v(" "),a("p",[e._v("Adds React and DOM specific behaviors to the editor.")]),e._v(" "),a("h2",{attrs:{id:"utils"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#utils"}},[e._v("#")]),e._v(" Utils")]),e._v(" "),a("p",[e._v("Private convenience modules")])])}),[],!1,null,null,null);t.default=o.exports}}]);