(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{492:function(e,t,r){"use strict";r.r(t);var o=r(23),a=Object(o.a)({},(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("h1",{attrs:{id:"slate"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#slate"}},[e._v("#")]),e._v(" Slate")]),e._v(" "),r("p",[r("a",{attrs:{href:"http://slatejs.org",target:"_blank",rel:"noopener noreferrer"}},[e._v("Slate"),r("OutboundLink")],1),e._v(" is a "),r("em",[e._v("completely")]),e._v(" customizable framework for building rich text editors.")]),e._v(" "),r("p",[e._v("Slate lets you build rich, intuitive editors like those in "),r("a",{attrs:{href:"https://medium.com/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Medium"),r("OutboundLink")],1),e._v(", "),r("a",{attrs:{href:"https://www.dropbox.com/paper",target:"_blank",rel:"noopener noreferrer"}},[e._v("Dropbox Paper"),r("OutboundLink")],1),e._v(" or "),r("a",{attrs:{href:"https://www.google.com/docs/about/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Google Docs"),r("OutboundLink")],1),e._v("—which are becoming table stakes for applications on the web—without your codebase getting mired in complexity.")]),e._v(" "),r("p",[e._v("It can do this because all of its logic is implemented with a series of plugins, so you aren't ever constrained by what "),r("em",[e._v("is")]),e._v(" or "),r("em",[e._v("isn't")]),e._v(' in "core". You can think of it like a pluggable implementation of '),r("code",[e._v("contenteditable")]),e._v(" built on top of "),r("a",{attrs:{href:"https://facebook.github.io/react/",target:"_blank",rel:"noopener noreferrer"}},[e._v("React"),r("OutboundLink")],1),e._v(". It was inspired by libraries like "),r("a",{attrs:{href:"https://facebook.github.io/draft-js/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Draft.js"),r("OutboundLink")],1),e._v(", "),r("a",{attrs:{href:"http://prosemirror.net/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Prosemirror"),r("OutboundLink")],1),e._v(" and "),r("a",{attrs:{href:"http://quilljs.com/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Quill"),r("OutboundLink")],1),e._v(".")]),e._v(" "),r("blockquote",[r("p",[e._v("🤖 "),r("strong",[e._v("Slate is currently in beta")]),e._v('. Its core API is usable now, but you might need to pull request fixes for advanced use cases. Some of its APIs are not "finalized" and will (breaking) change over time as we find better solutions.')])]),e._v(" "),r("h2",{attrs:{id:"why"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#why"}},[e._v("#")]),e._v(" Why?")]),e._v(" "),r("p",[e._v("Why create Slate? Well... "),r("em",[e._v("(Beware: this section has a few of "),r("a",{attrs:{href:"https://github.com/ianstormtaylor",target:"_blank",rel:"noopener noreferrer"}},[e._v("my"),r("OutboundLink")],1),e._v(" opinions!)")])]),e._v(" "),r("p",[e._v("Before creating Slate, I tried a lot of the other rich text libraries out there—"),r("a",{attrs:{href:"https://facebook.github.io/draft-js/",target:"_blank",rel:"noopener noreferrer"}},[r("strong",[e._v("Draft.js")]),r("OutboundLink")],1),e._v(", "),r("a",{attrs:{href:"http://prosemirror.net/",target:"_blank",rel:"noopener noreferrer"}},[r("strong",[e._v("Prosemirror")]),r("OutboundLink")],1),e._v(", "),r("a",{attrs:{href:"http://quilljs.com/",target:"_blank",rel:"noopener noreferrer"}},[r("strong",[e._v("Quill")]),r("OutboundLink")],1),e._v(", etc. What I found was that while getting simple examples to work was easy enough, once you started trying to build something like "),r("a",{attrs:{href:"https://medium.com/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Medium"),r("OutboundLink")],1),e._v(", "),r("a",{attrs:{href:"https://www.dropbox.com/paper",target:"_blank",rel:"noopener noreferrer"}},[e._v("Dropbox Paper"),r("OutboundLink")],1),e._v(" or "),r("a",{attrs:{href:"https://www.google.com/docs/about/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Google Docs"),r("OutboundLink")],1),e._v(", you ran into deeper issues...")]),e._v(" "),r("ul",[r("li",[r("p",[r("strong",[e._v('The editor\'s "schema" was hardcoded and hard to customize.')]),e._v(" Things like bold and italic were supported out of the box, but what about comments, or embeds, or even more domain-specific needs?")])]),e._v(" "),r("li",[r("p",[r("strong",[e._v("Transforming the documents programmatically was very convoluted.")]),e._v(" Writing as a user may have worked, but making programmatic changes, which is critical for building advanced behaviors, was needlessly complex.")])]),e._v(" "),r("li",[r("p",[r("strong",[e._v("Serializing to HTML, Markdown, etc. seemed like an afterthought.")]),e._v(" Simple things like transforming a document to HTML or Markdown involved writing lots of boilerplate code, for what seemed like very common use cases.")])]),e._v(" "),r("li",[r("p",[r("strong",[e._v("Re-inventing the view layer seemed inefficient and limiting.")]),e._v(' Most editors rolled their own views, instead of using existing technologies like React, so you had to learn a whole new system with new "gotchas".')])]),e._v(" "),r("li",[r("p",[r("strong",[e._v("Collaborative editing wasn't designed for in advance.")]),e._v(" Often the editor's internal representation of data made it impossible to use to for a realtime, collaborative editing use case without basically rewriting the editor.")])]),e._v(" "),r("li",[r("p",[r("strong",[e._v("The repositories were monolithic, not small and reusable.")]),e._v(" The code bases for many of the editors often didn't expose the internal tooling that could have been re-used by developers, leading to having to reinvent the wheel.")])]),e._v(" "),r("li",[r("p",[r("strong",[e._v("Building complex, nested documents was impossible.")]),e._v(' Many editors were designed around simplistic "flat" documents, making things like tables, embeds and captions difficult to reason about and sometimes impossible.')])])]),e._v(" "),r("p",[e._v("Of course not every editor exhibits all of these issues, but if you've tried using another editor you might have run into similar problems. To get around the limitations of their APIs and achieve the user experience you're after, you have to resort to very hacky things. And some experiences are just plain impossible to achieve.")]),e._v(" "),r("p",[e._v("If that sounds familiar, you might like Slate.")]),e._v(" "),r("p",[e._v("Which brings me to how Slate solves all of that...")]),e._v(" "),r("h2",{attrs:{id:"principles"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#principles"}},[e._v("#")]),e._v(" Principles")]),e._v(" "),r("p",[e._v('Slate tries to solve the question of "'),r("a",{attrs:{href:"#why"}},[e._v("Why?")]),e._v('" with a few principles:')]),e._v(" "),r("ol",[r("li",[r("p",[r("strong",[e._v("First-class plugins.")]),e._v(" The most important part of Slate is that plugins are first-class entities. That means you can "),r("em",[e._v("completely")]),e._v(" customize the editing experience, to build complex editors like Medium's or Dropbox's, without having to fight against the library's assumptions.")])]),e._v(" "),r("li",[r("p",[r("strong",[e._v("Schema-less core.")]),e._v(" Slate's core logic assumes very little about the schema of the data you'll be editing, which means that there are no assumptions baked into the library that'll trip you up when you need to go beyond the most basic use cases.")])]),e._v(" "),r("li",[r("p",[r("strong",[e._v("Nested document model.")]),e._v(" The document model used for Slate is a nested, recursive tree, just like the DOM itself. This means that creating complex components like tables or nested block quotes are possible for advanced use cases. But it's also easy to keep it simple by only using a single level of hierarchy.")])]),e._v(" "),r("li",[r("p",[r("strong",[e._v("Parallel to the DOM.")]),e._v(" Slate's data model is based on the DOM—the document is a nested tree, it uses selections and ranges, and it exposes all the standard event handlers. This means that advanced behaviors like tables or nested block quotes are possible. Pretty much anything you can do in the DOM, you can do in Slate.")])]),e._v(" "),r("li",[r("p",[r("strong",[e._v("Intuitive commands.")]),e._v(' Slate documents are edited using "commands", that are designed to be high-level and extremely intuitive to write and read, so that custom functionality is as expressive as possible. This greatly increases your ability to reason about your code.')])]),e._v(" "),r("li",[r("p",[r("strong",[e._v("Collaboration-ready data model.")]),e._v(" The data model Slate uses—specifically how operations are applied to the document—has been designed to allow for collaborative editing to be layered on top, so you won't need to rethink everything if you decide to make your editor collaborative.")])]),e._v(" "),r("li",[r("p",[r("strong",[e._v('Clear "core" boundaries.')]),e._v(' With a plugin-first architecture, and a schema-less core, it becomes a lot clearer where the boundary is between "core" and "custom", which means that the core experience doesn\'t get bogged down in edge cases.')])])]),e._v(" "),r("h2",{attrs:{id:"demo"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#demo"}},[e._v("#")]),e._v(" Demo")]),e._v(" "),r("p",[e._v("Check out the "),r("a",{attrs:{href:"http://slatejs.org",target:"_blank",rel:"noopener noreferrer"}},[r("strong",[e._v("live demo")]),r("OutboundLink")],1),e._v(" of all of the examples!")]),e._v(" "),r("h2",{attrs:{id:"examples"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#examples"}},[e._v("#")]),e._v(" Examples")]),e._v(" "),r("p",[e._v("To get a sense for how you might use Slate, check out a few of the examples:")]),e._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"https://www.slatejs.org/examples/plaintext",target:"_blank",rel:"noopener noreferrer"}},[r("strong",[e._v("Plain text")]),r("OutboundLink")],1),e._v(" — showing the most basic case: a glorified "),r("code",[e._v("<textarea>")]),e._v(".")]),e._v(" "),r("li",[r("a",{attrs:{href:"https://www.slatejs.org/examples/richtext",target:"_blank",rel:"noopener noreferrer"}},[r("strong",[e._v("Rich text")]),r("OutboundLink")],1),e._v(" — showing the features you'd expect from a basic editor.")]),e._v(" "),r("li",[r("a",{attrs:{href:"https://www.slatejs.org/examples/markdown-preview",target:"_blank",rel:"noopener noreferrer"}},[r("strong",[e._v("Markdown preview")]),r("OutboundLink")],1),e._v(" — showing how to add key handlers for Markdown-like shortcuts.")]),e._v(" "),r("li",[r("a",{attrs:{href:"https://www.slatejs.org/examples/links",target:"_blank",rel:"noopener noreferrer"}},[r("strong",[e._v("Links")]),r("OutboundLink")],1),e._v(" — showing how to wrap text in inline nodes with associated data.")]),e._v(" "),r("li",[r("a",{attrs:{href:"https://www.slatejs.org/examples/images",target:"_blank",rel:"noopener noreferrer"}},[r("strong",[e._v("Images")]),r("OutboundLink")],1),e._v(" — showing how to use void (text-less) nodes to add images.")]),e._v(" "),r("li",[r("a",{attrs:{href:"https://www.slatejs.org/examples/hovering-toolbar",target:"_blank",rel:"noopener noreferrer"}},[r("strong",[e._v("Hovering toolbar")]),r("OutboundLink")],1),e._v(" — showing how a contextual hovering menu can be implemented.")]),e._v(" "),r("li",[r("a",{attrs:{href:"https://www.slatejs.org/examples/tables",target:"_blank",rel:"noopener noreferrer"}},[r("strong",[e._v("Tables")]),r("OutboundLink")],1),e._v(" — showing how to nest blocks to render more advanced components.")]),e._v(" "),r("li",[r("a",{attrs:{href:"https://www.slatejs.org/examples/paste-html",target:"_blank",rel:"noopener noreferrer"}},[r("strong",[e._v("Paste HTML")]),r("OutboundLink")],1),e._v(" — showing how to use an HTML serializer to handle pasted HTML.")]),e._v(" "),r("li",[r("a",{attrs:{href:"https://www.slatejs.org/examples/mentions",target:"_blank",rel:"noopener noreferrer"}},[r("strong",[e._v("Mentions")]),r("OutboundLink")],1),e._v(" — showing how to use inline void nodes for simple @-mentions.")])]),e._v(" "),r("p",[e._v("Each example includes a "),r("strong",[e._v("View Source")]),e._v(" link to the code that implements it. And we have "),r("a",{attrs:{href:"https://github.com/ianstormtaylor/slate/tree/master/site/examples",target:"_blank",rel:"noopener noreferrer"}},[e._v("other examples"),r("OutboundLink")],1),e._v(" too.")]),e._v(" "),r("p",[e._v("If you have an idea for an example that shows a common use case, pull request it!")]),e._v(" "),r("h2",{attrs:{id:"documentation"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#documentation"}},[e._v("#")]),e._v(" Documentation")]),e._v(" "),r("p",[e._v("If you're using Slate for the first time, check out the "),r("a",{attrs:{href:"http://docs.slatejs.org/walkthroughs/01-installing-slate",target:"_blank",rel:"noopener noreferrer"}},[e._v("Getting Started"),r("OutboundLink")],1),e._v(" walkthroughs and the "),r("a",{attrs:{href:"http://docs.slatejs.org/concepts",target:"_blank",rel:"noopener noreferrer"}},[e._v("Concepts"),r("OutboundLink")],1),e._v(" to familiarize yourself with Slate's architecture and mental models.")]),e._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"http://docs.slatejs.org/walkthroughs",target:"_blank",rel:"noopener noreferrer"}},[r("strong",[e._v("Walkthroughs")]),r("OutboundLink")],1)]),e._v(" "),r("li",[r("a",{attrs:{href:"http://docs.slatejs.org/concepts",target:"_blank",rel:"noopener noreferrer"}},[r("strong",[e._v("Concepts")]),r("OutboundLink")],1)]),e._v(" "),r("li",[r("a",{attrs:{href:"http://docs.slatejs.org/general/faq",target:"_blank",rel:"noopener noreferrer"}},[r("strong",[e._v("FAQ")]),r("OutboundLink")],1)]),e._v(" "),r("li",[r("a",{attrs:{href:"http://docs.slatejs.org/general/resources",target:"_blank",rel:"noopener noreferrer"}},[r("strong",[e._v("Resources")]),r("OutboundLink")],1)])]),e._v(" "),r("p",[e._v("If even that's not enough, you can always "),r("a",{attrs:{href:"https://github.com/ianstormtaylor/slate/tree/master/packages",target:"_blank",rel:"noopener noreferrer"}},[e._v("read the source itself"),r("OutboundLink")],1),e._v(", which is heavily commented.")]),e._v(" "),r("p",[e._v("There are also translations of the documentation into other languages:")]),e._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"https://doodlewind.github.io/slate-doc-cn/",target:"_blank",rel:"noopener noreferrer"}},[e._v("中文"),r("OutboundLink")],1)])]),e._v(" "),r("p",[e._v("If you're maintaining a translation, feel free to pull request it here!")]),e._v(" "),r("h2",{attrs:{id:"contributing"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#contributing"}},[e._v("#")]),e._v(" Contributing!")]),e._v(" "),r("p",[e._v("All contributions are super welcome! Check out the "),r("RouterLink",{attrs:{to:"/en/Contributing.html"}},[e._v("Contributing instructions")]),e._v(" for more info!")],1),e._v(" "),r("p",[e._v("Slate is "),r("RouterLink",{attrs:{to:"/en/License.html"}},[e._v("MIT-licensed")]),e._v(".")],1)])}),[],!1,null,null,null);t.default=a.exports}}]);