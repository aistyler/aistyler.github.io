"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[495],{56307:function(e,t,n){n.d(t,{zQ:function(){return c},Td:function(){return l},gv:function(){return d}});var i=n(96414),a=i.posts,o=i.tags,s=i.categories,r={posts:a.sort((function(e,t){return e.date>t.date?-1:1})),tags:o,categories:s};function c(e){return r.posts.find((function(t){return t.slug===e}))}function l(e){return r.posts.filter((function(t){return t.categories.join("$").startsWith(e)}))}function d(e){return e.file.endsWith("mdx")}},89695:function(e,t,n){n.d(t,{X6:function(){return h},xv:function(){return g}});var i=n(92809),a=n(91164),o=(n(67294),n(94184)),s=n.n(o),r=n(36120),c=n(85893),l=["level","isDisplayHeading","isTruncate","isWrap","isWordBreak","textTransform","isMonospace","isItalic","decoration","color","isMuted","isHighlight","overflow","lineHeight","textAlign","className","children"],d=["isTruncate","isWrap","isWordBreak","textTransform","isMonospace","isItalic","decoration","color","isMuted","isHighlight","overflow","lineHeight","textAlign","size","isLead","fontWeight","className","children"];function p(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?p(Object(n),!0).forEach((function(t){(0,i.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var h=function(e){var t=e.level,n=e.isDisplayHeading,i=e.isTruncate,o=e.isWrap,d=e.isWordBreak,p=e.textTransform,h=e.isMonospace,g=e.isItalic,m=e.decoration,w=e.color,f=e.isMuted,y=e.isHighlight,v=e.overflow,x=e.lineHeight,b=e.textAlign,j=e.className,S=e.children,k=(0,a.Z)(e,l),I=s()(n?"display-".concat(t):"h".concat(t),i&&"text-truncate",o?"text-wrap":"text-nowrap",d&&"text-break",p&&"text-".concat(p),h&&"font-monospace",g&&"fst-italic",m&&"text-decoration-".concat(m),f&&"text-muted",y&&"mark",w&&"text-".concat(w),v&&"overflow-".concat(v),x&&"lh-".concat(x),b&&("object"===typeof b?(0,r.MG)(b,"text"):"text-".concat(b)),j);return(0,c.jsxs)("p",u(u({className:I},k),{},{children:[" ",S," "]}))},g=function(e){var t=e.isTruncate,n=e.isWrap,i=e.isWordBreak,o=e.textTransform,l=e.isMonospace,p=e.isItalic,h=e.decoration,g=e.color,m=e.isMuted,w=e.isHighlight,f=e.overflow,y=e.lineHeight,v=e.textAlign,x=e.size,b=e.isLead,j=e.fontWeight,S=e.className,k=e.children,I=(0,a.Z)(e,d),C=s()(t&&"text-truncate",n?"text-wrap":"text-nowrap",i&&"text-break",o&&"text-".concat(o),l&&"font-monospace",p&&"fst-italic",h&&"text-decoration-".concat(h),m&&"text-muted",w&&"mark",g&&"text-".concat(g),f&&"overflow-".concat(f),y&&"lh-".concat(y),v&&("object"===typeof v?(0,r.MG)(v,"text"):"text-".concat(v)),x&&"fs-".concat(x),b&&"lead",j&&"fw-".concat(j),S);return(0,c.jsx)("p",u(u({className:C},I),{},{children:k}))}},96414:function(e){e.exports=JSON.parse('{"posts":[{"file":"about.mdx","categories":[],"slug":"about","title":"About","date":"2021-11-26","tags":["about","life"],"coverImage":"/imgs/PK.png","author":{"name":"peterhs.kang","picture":"/imgs/PK.png"},"status":"published","excerpt":"\\n## Contact\\n\\n- peterhs.kang\\n\\n","content":"\\n## Contact\\n\\n- peterhs.kang\\n\\n[//]:---excerpt---\\n\\n## Dad, Husband, Son, Man\\n\\n## Location\\n\\n- [37.558002682827755, 126.86747739761441](https://goo.gl/maps/r4GqyHLU9sdFgKEc9)\\n\\n[//]: # (TODO: include iframe)\\n<iframe\\n  src=\\"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3162.875062828166!2d126.86528831533107!3d37.55800723237411!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x86a928a385c5d024!2zMzfCsDMzJzI4LjgiTiAxMjbCsDUyJzAyLjkiRQ!5e0!3m2!1sen!2skr!4v1638453488302!5m2!1sen!2skr\\"\\n  width={600}\\n  height={450}\\n  style={{border:0}}\\n  allow=\\"fullscreen\\"\\n  loading=\\"lazy\\"/>\\n"},{"file":"languages/javascript/javascript-introduction.md","categories":["languages","javascript"],"slug":"languages$javascript$javascript-introduction","title":"JavaScript Introduction","date":"2021-11-27","tags":["javascript","language"],"coverImage":"/imgs/javascript-logo.webp","author":{"name":"peterhs.kang","picture":"/imgs/PK.png"},"status":"published","excerpt":"\\n## Introduction\\nJavaScript (JS) is a lightweight, object-oriented, interpreted, or just-in-time(JIT) compiled programming language with [first-class functions](#what-is-first-class-function).\\n\\nJavaScript is an easy to learn and also powerful scripting language, widely used for controlling web page behavior.\\n\\nWhile it is most well-known as the scripting language for Web pages, many non-browser environments also use it, such as Node.js, Apache CouchDB and Adobe Acrobat.\\n\\n","content":"\\n## Introduction\\nJavaScript (JS) is a lightweight, object-oriented, interpreted, or just-in-time(JIT) compiled programming language with [first-class functions](#what-is-first-class-function).\\n\\nJavaScript is an easy to learn and also powerful scripting language, widely used for controlling web page behavior.\\n\\nWhile it is most well-known as the scripting language for Web pages, many non-browser environments also use it, such as Node.js, Apache CouchDB and Adobe Acrobat.\\n\\n[//]:---excerpt---\\n\\n## History\\n\\nJavaScript was created in 1995 by Brendan Eich while he was an engineer at Netscape. JavaScript was first released with Netscape 2 early in 1996. It was originally going to be called LiveScript, but it was renamed in an ill-fated marketing decision that attempted to capitalize on the popularity of Sun Microsystem\'s Java language \u2014 despite the two having very little in common. This has been a source of confusion ever since.\\n\\nSeveral months later, Microsoft released JScript with Internet Explorer 3. It was a mostly-compatible JavaScript work-alike. Several months after that, Netscape submitted JavaScript to Ecma International, a European standards organization, which resulted in the first edition of the ECMAScript standard that year. The standard received a significant update as ECMAScript edition 3 in 1999, and it has stayed pretty much stable ever since. The fourth edition was abandoned, due to political differences concerning language complexity. Many parts of the fourth edition formed the basis for ECMAScript edition 5, published in December of 2009, and for the 6th major edition of the standard, published in June of 2015.\\n\\n## What is First-class function?\\nA programming language is said to have First-class functions when functions in that language are treated like any other variable as follows:\\n\\n```js\\n// Assign a function to a variable\\nconst foo = function(msg) {\\n  console.log(msg, \\"foo\\");\\n}\\nfoo(\\"hi\\");\\n\\n// Pass a function as an Argument\\nfunction bar(func) {\\n  console.log(\\"bar\\", func());\\n}\\nbar(foo);\\n\\n// Return a function\\nfunction baz(msg) {\\n  return function() {\\n    console.log(msg, \\"baz\\");\\n  }\\n}\\nbaz(\\"hi\\")();\\n```\\n\\n## What JavaScript implementations are available?\\n- Google\'s [V8](https://code.google.com/p/v8/):\\n  - It is used in the Google Chrome browser, Node.js and recent versions of Opera browser.\\n- [JavaScriptCore](https://www.webkit.org/projects/javascript/index.html)\\n  - It is used in some WebKit browsers such as Apple Safari.\\n- Mozilla project\\n  - [SpiderMonkey](https://spidermonkey.dev/): The first JavaScript implementation written in C/C++\\n  - [Rhino](https://en.wikipedia.org/wiki/Rhino_(JavaScript_engine)): written in Java\\n- [Carakan](https://my.opera.com/ODIN/blog/carakan-faq)\\n  - It is used in Internet Explorer.\\n\\n## What is ECMAScript?\\nECMAScript is the scripting language that forms the basis of JavaScript.\\nThe standards for JavaScript are the ECMAScript Language Specification ([ECMA-262](https://tc39.es/ecma262/)) and the ECMAScript Internationalization API specification ([ECMA-402](https://tc39.es/ecma402/)).\\n\\nThe current specification editios are as follows:\\n- ECMA-262 11th Edition: [ECMAScript 2020 Language Specification](https://ecma-international.org/ecma-262/11.0/index.html)\\n- ECMA-262 10th Edition: [ECMAScript 2019 Language Specification](https://ecma-international.org/ecma-262/10.0/index.html)\\n- ECMA-262 9th Edition: [ECMAScript 2018 Language Specification](https://ecma-international.org/ecma-262/9.0/index.html)\\n- ECMA-402 5th Edition: [ECMAScript 2018 Internationalization API Specification](https://github.com/tc39/ecma402)\\n\\n## Reference\\n\\n- [About JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript/About_JavaScript)\\n"},{"file":"languages/typescript/typescript-introduction.md","categories":["languages","typescript"],"slug":"languages$typescript$typescript-introduction","title":"TypeScript Introduction","date":"2021-11-27","tags":["typescript","language","software"],"coverImage":"/imgs/typescript-logo.webp","author":{"name":"peterhs.kang","picture":"/imgs/PK.png"},"status":"published","excerpt":"\\n## Introduction\\nTypeScript is a programming language developed and maintained by Microsoft. It is a strict syntactical superset of JavaScript and adds optional static typing to the language. \\n\\n","content":"\\n## Introduction\\nTypeScript is a programming language developed and maintained by Microsoft. It is a strict syntactical superset of JavaScript and adds optional static typing to the language. \\n\\n[//]:---excerpt---\\n\\nTypeScript is designed for the development of large applications and transcompiles to JavaScript. As TypeScript is a superset of JavaScript, existing JavaScript programs are also valid TypeScript programs.\\n\\nTypeScript adds additional syntax to JavaScript to support a tighter integration with your editor. Catch errors early in your editor.\\n\\nTypeScript code converts to JavaScript, which runs anywhere JavaScript runs: In a browser, on Node.js or Deno and in your apps.\\n\\nTypeScript understands JavaScript and uses type inference to give you great tooling without additional code.\\n"},{"file":"misc/howto-writing.md","categories":["misc"],"slug":"misc$howto-writing","title":"Introduction and Conclusion","date":"2021-11-27","tags":["writing"],"coverImage":"/imgs/writing.webp","author":{"name":"peterhs.kang","picture":"/imgs/PK.png"},"status":"published","excerpt":"\\n## Introduction\\n\\nThese represent the most serious omission students regularly make. Every essay or paper designed to be persuasive needs a paragraph at the very outset introducing both the subject at hand and the thesis which is being advanced. It also needs a final paragraph summarizing what\'s been said and driving the author\'s argument home.\\n\\n","content":"\\n## Introduction\\n\\nThese represent the most serious omission students regularly make. Every essay or paper designed to be persuasive needs a paragraph at the very outset introducing both the subject at hand and the thesis which is being advanced. It also needs a final paragraph summarizing what\'s been said and driving the author\'s argument home.\\n\\n[//]:---excerpt---\\n\\nThese are not arbitrary requirements. Introductions and conclusions are crucial in persuasive writing. They put the facts to be cited into a coherent structure and give them meaning. Even more important, they make the argument readily accessible to readers and remind them of that purpose from start to end.\\n\\nThink of it this way. As the writer of an essay, you\'re essentially a lawyer arguing in behalf of a client (your thesis) before a judge (the reader) who will decide the case (agree or disagree with you). So, begin as a lawyer would, by laying out the facts to the judge in the way you think it will help your client best. Like lawyers in court, you should make an \\"opening statement,\\" in this case, an introduction. Then review the facts of the case in detail just as lawyers question witnesses and submit evidence during a trial. This process of presentation and cross-examination is equivalent to the \\"body\\" of your essay. Finally, end with a \\"closing statement\\"\u2014that is, the conclusion of your essay\u2014arguing as strongly as possible in favor of your client\'s case, namely, your theme.\\n\\nLikewise, there are several things your paper is not. It\'s not a murder mystery, for instance, full of surprising plot twists or unexpected revelations. Those really don\'t go over well in this arena. Instead, lay everything out ahead of time so the reader can follow your argument easily. Nor is a history paper an action movie with exciting chases down dark corridors where the reader has no idea how things are going to end. In academic writing it\'s best to tell the reader from the outset what your conclusion will be. This, too, makes your argument easier to follow. Finally, it\'s not a love letter. Lush sentiment and starry-eyed praise don\'t work well here. They make it look like your emotions are in control, not your intellect, and that will do you little good in this enterprise where facts, not dreams, rule.\\n\\nAll in all, persuasive writing grips the reader though its clarity and the force with which the data bring home the thesis. The point is to give your readers no choice but to adopt your way of seeing things, to lay out your theme so strongly they have to agree with you. That means you must be clear, forthright and logical. That\'s the way good lawyers win their cases.\\n\\n## How to Write an Introduction\\n\\nThe introduction of a persuasive essay or paper must be substantial. Having finished it, the reader ought to have a very clear idea of the author\'s purpose in writing. To wit, after reading the introduction, I tend to stop and ask myself where I think the rest of the paper is headed, what the individual paragraphs in its body will address and what the general nature of the conclusion will be. If I\'m right, it\'s because the introduction has laid out in clear and detailed fashion the theme and the general facts which the author will use to support it.\\n\\nLet me give you an example of what I mean. The following is an introduction of what turned out to be a well-written paper, but the introduction was severely lacking:\\n\\nThe role of women has changed over the centuries, and it has also differed from civilization to civilization. Some societies have treated women much like property, while others have allowed women to have great influence and power.\\n\\nNot a bad introduction really, but rather scant. I have no idea, for instance, which societies will be discussed or what the theme of the paper will be. That is, while I can see what the general topic is, I still don\'t know the way the writer will draw the facts together, or even really what the paper is arguing in favor of.\\n\\nAs it turned out, the author of this paper discussed women in ancient Egypt, classical Greece, medieval France and early Islamic civilization and stressed their variable treatment in these societies. This writer also focused on the political, social and economic roles women have played in Western cultures and the various ways they have found to assert themselves and circumvent opposition based on gender.\\n\\nGiven that, I would rewrite the introduction this way:\\n\\nThe role of women <in Western society> has changed <dramatically> over the centuries, <from the repression of ancient Greece to the relative freedom of women living in Medieval France. The treatment of women> has also differed from civilization to civilization <even at the same period in history>. Some societies <such as Islamic ones> have treated women much like property, while others <like ancient Egypt> have allowed women to have great influence and power. <This paper will trace the development of women\'s rights and powers from ancient Egypt to late medieval France and explore their changing political, social and economic situation through time. All the various means women have used to assert themselves show the different ways they have fought against repression and established themselves in authority.>\\n\\nNow it is clear which societies will be discussed (Egypt, Greece, France, Islam) and what the general theme of the paper will be (the variable paths to empowerment women have found over time). Now I know where this paper is going and what it\'s really about.\\n\\n## How to Write a Conclusion\\n\\nIn much the same way that the introduction lays out the thesis for the reader, the conclusion of the paper should reiterate the main points\u2014it should never introduce new ideas or things not discussed in the body of the paper!\u2014and bring the argument home. The force with which you express the theme here is especially important, because if you\'re ever going to convince the reader that your thesis has merit, it will be in the conclusion. In other words, just as lawyers win their cases in the closing argument, this is the point where you\'ll persuade others to adopt your thesis.\\n\\nIf the theme is clear and makes sense, the conclusion ought to be very easy to write. Simply begin by restating the theme, then review the facts you cited in the body of the paper in support of your ideas\u2014and it\'s advisable to rehearse them in some detail\u2014and end with a final reiteration of the theme. Try, however, not to repeat the exact language you used elsewhere in the paper, especially the introduction, or it will look like you haven\'t explored all aspects of the situation\\n\\n## Conclusion\\n\\nAll in all, remember these are the last words your reader will hear from you before passing judgment on your argument. Make them as focused and forceful as possible.\\n"},{"file":"nextjs/nextjs-error-page.mdx","categories":["nextjs"],"slug":"nextjs$nextjs-error-page","title":"NextJS Error Page Customization","date":"2021-12-12","tags":["nextjs","javascript","typescript","software"],"coverImage":"/imgs/nextjs-logo.webp","author":{"name":"peterhs.kang","picture":"/imgs/PK.png"},"status":"published","excerpt":"\\n## Introduction\\n\\nNext.js provides a static 404 page by default without having to add any additional files.\\nBut you should customize the error pages if you would like to render them with your own page layout.\\n\\n","content":"\\n## Introduction\\n\\nNext.js provides a static 404 page by default without having to add any additional files.\\nBut you should customize the error pages if you would like to render them with your own page layout.\\n\\n[//]:---excerpt---\\n\\n## Environment\\n```sh\\n% node --version\\nv14.17.5\\n% yarn --version\\n1.22.11\\n% egrep \'(\\"react\\"|\\"next\\")\' package.json\\n    \\"next\\": \\"~12.0.4\\",\\n    \\"react\\": \\"~17.0.2\\",\\n```\\n\\n## How to customize the 404 error page\\n- create a `pages/404.jsx` (or .tsx) file.\\n```js\\n// pages/404.jsx\\nexport default function Custom404() {\\n  return <h1>404 - Page Not Found</h1>;\\n}\\n```\\n\\n<AdSense />\\n\\n## How to customize the 500 error page\\n- create a `pages/500.jsx` (or .tsx) file.\\n```js\\n// pages/500.jsx\\nexport default function Custom500() {\\n  return <h1>500 - Server-side error occurred</h1>;\\n}\\n```\\n\\n## How to customize all error pages\\n- create a `pages/_error.jsx` (or .tsx) file.\\n- N.B.\\n  - pages/_error.js is only used in production. \\n  - In development you\u2019ll get an error with the call stack to know where the error originated from.\\n```js\\n// pages/_error.jsx\\nfunction Error({ statusCode }) {\\n  return (\\n    <p>\\n      {statusCode\\n        ? `An error ${statusCode} occurred on server`\\n        : \'An error occurred on client\'}\\n    </p>\\n  );\\n}\\n\\nError.getInitialProps = ({ res, err }) => {\\n  const statusCode = res ? res.statusCode : err ? err.statusCode : 404;\\n  return { statusCode };\\n}\\n```\\n\\n<AdSense />\\n\\n## Conclusion\\n\\nYou can customize all the error pages with one file, `pages/_error.tsx`, as below.\\nIt works on both CSR(Client-Side Rendering) and SSR(Server-Side Rendering).\\n```ts\\n// _error.tsx\\n\\nimport { NextPageContext } from \\"next\\";\\nimport { PageLayout } from \\"../my-components\\";\\n\\ninterface Props {\\n  statusCode: number;\\n}\\n\\nexport default function Error({ statusCode }: Props) {\\n  return (\\n    <PageLayout>\\n      <h1>\\n        {/* CSR env: statusCode is \'undefined\'\\n            SSR env: statusCode has an error code */}\\n        {!statusCode || statusCode === 404\\n          ? \\"404 - Page Not Found\\"\\n          : `An error ${statusCode} occurred on server`}\\n      </h1>\\n    </PageLayout>\\n  );\\n}\\n\\nError.getInitialProps = ({ res, err }: NextPageContext) => {\\n  const statusCode = res ? res.statusCode : err ? err.statusCode : 404;\\n  return { statusCode };\\n};\\n```\\n\\n## Reference\\n\\n- [Custom Error Page](https://nextjs.org/docs/advanced-features/custom-error-page#404-page)\\n"},{"file":"nextjs/nextjs-introduction.md","categories":["nextjs"],"slug":"nextjs$nextjs-introduction","title":"NextJS Introduction","date":"2021-11-27","tags":["javascript","typescript","nextjs","software"],"coverImage":"/imgs/nextjs-logo.webp","author":{"name":"peterhs.kang","picture":"/imgs/PK.png"},"status":"draft","excerpt":"\\n## NextJS Introduction\\n\\n","content":"\\n## NextJS Introduction\\n\\n[//]:---excerpt---\\n"},{"file":"nodejs/nodejs-introduction.md","categories":["nodejs"],"slug":"nodejs$nodejs-introduction","title":"NodeJS Introduction","date":"2021-11-27","tags":["javascript","typescript","nodejs","software"],"coverImage":"/imgs/nodejs-logo.webp","author":{"name":"peterhs.kang","picture":"/imgs/PK.png"},"status":"draft","excerpt":"\\n## Introduction\\n\\n","content":"\\n## Introduction\\n\\n[//]:---excerpt---\\n\\n## Conclusion\\n"},{"file":"reactjs/react-introduction.md","categories":["reactjs"],"slug":"reactjs$react-introduction","title":"ReactJS Introduction","date":"2021-11-27","tags":["javascript","typescript","reactjs","software"],"coverImage":"/imgs/reactjs-logo.webp","author":{"name":"peterhs.kang","picture":"/imgs/PK.png"},"status":"draft","excerpt":"\\n## ReactJS Introduction\\n\\n","content":"\\n## ReactJS Introduction\\n\\n[//]:---excerpt---\\n"},{"file":"style/markdown-syntax.mdx","categories":["style"],"slug":"style$markdown-syntax","title":"Markdown Syntax","date":"2021-12-10","tags":["style","markdown"],"coverImage":"/imgs/markdown-logo.webp","author":{"name":"peterhs.kang","picture":"/imgs/PK.png"},"status":"published","excerpt":"\\n## Introduction\\n\\n[Markdown](https://en.wikipedia.org/wiki/Markdown) is a lightweight markup language for creating formatted text using a plain-text editor.\\n\\nThe syntax of Markdown consists of two parts, [basic](#basic-syntax) and [extended](#extended-syntax).\\n\\n","content":"\\n## Introduction\\n\\n[Markdown](https://en.wikipedia.org/wiki/Markdown) is a lightweight markup language for creating formatted text using a plain-text editor.\\n\\nThe syntax of Markdown consists of two parts, [basic](#basic-syntax) and [extended](#extended-syntax).\\n\\n[//]:---excerpt---\\n\\n## Basic syntax\\n| Element         | Syntax | Preview\\n|-----------------|---|---|\\n| Heading         | `#H1`<br/>`##H2`<br/>`###H3` | <h1>H1</h1> <h2>H2</h2> <h3>H3</h3>\\n| Bold            | `**bold text**` | **bold text**\\n| Italic          | `*italicized text*` | *italicized text*\\n| Bold and Italic | `***bold and italicized text***` | ***bold and italicized text***\\n| Blockquote      | `> blockquote` | \\n| Ordered List    | `1. First`<br/>`1. Second`<br/>`1. Third` | <ol><li>First</li><li>Second</li><li>Third</li></ol>\\n| Unordered List  | `- First`<br/>`- Second`<br/>`- Third` |<ul><li>First</li><li>Second</li><li>Third</li></ul>\\n| Code            | ``` `code` ``` | `code`\\n| Horizontal Rule | `---` | <hr/>\\n| Link            | `[title](https://www.example.com)` | [title](https://www.example.com)\\n| Image           | `![alt text](/imgs/sample.webp)` |![alt text](/imgs/sample.webp)\\n\\n\\n<br/>\\n\\n<AdSense />\\n\\n## Extended syntax\\n| Element         | Syntax | ...\\n|-----------------|---|---|\\n| Table\\t          | `\\\\| H-1 \\\\| H-2 \\\\|`<br/>`\\\\|---\\\\|---\\\\|`<br/>`\\\\| 1-1 \\\\| 1-2 \\\\|`<br/>`\\\\| 2-1 \\\\| 2-2 \\\\|` |\\n| Fenced Code Block |\\t\\\\`\\\\`\\\\`<br/>`{`<br/>`\\"name\\": \\"John\\",`<br/>`\\"age\\": 21`<br/>`}`<br/>\\\\`\\\\`\\\\` |\\n| Footnote | `a sentence with a footnote. [^1]`<br/>`[^1]: This is the footnote.` |\\n| Heading ID | `### heading {#custom-id}` |\\n| Definition List | `term`<br/>`: definition` |\\n| Strikethrough | `~~wrong or deleted~~` |\\n| Task List | `- [x] Done`<br/>`- [ ] Todo` |\\n| Emoji (see also Copying and Pasting Emoji) | `so funny! :joy:` |\\n| Highlight\\t| `==strong words==` |\\n| Subscript\\t| `H~2~O` |\\n| Superscript\\t| `E = mc^2^` |\\n\\n<br/>\\n\\n### Using Tables\\n- [Online Table Generator](https://www.tablesgenerator.com/markdown_tables)\\n- You can\u2019t add headings, blockquotes, lists, horizontal rules, fenced code block and table within tables.\\n- add new line(line-break) in a table cell with `<br/>`\\n```txt\\n| Element | Syntax |\\n|---------|--------|\\n| Heading | `#H1`<br/>`##H2`<br/>`###H3` |\\n```\\n\\n- content alignment horizontally\\n```txt\\n| left-align | center-align | right-align |\\n|:---|:---:|---:|\\n| John | male | 21 |\\n```\\n\\n## Variants\\nSites like GitHub, Bitbucket, Reddit, Diaspora, Stack Exchange, OpenStreetMap, and SourceForge use variants of Markdown to facilitate discussion between users.\\n\\n<AdSense />\\n\\n## Conclusion\\nMarkdown is a lightweight markup language and easy to use.\\nBut when using the **extended syntax** in your markdown, the rendering result varies depending on implementations.\\n\\nSo before using the extended syntax, you\'d better refer to the documentation of the markdown rendering engine you are using.\\n\\n## References\\n\\n- [Markdown Cheatsheet](https://www.markdownguide.org/cheat-sheet/)\\n"},{"file":"style/size-units-in-css.mdx","categories":["style"],"slug":"style$size-units-in-css","title":"Size units in CSS","date":"2021-12-10","tags":["style","html","css"],"coverImage":"/imgs/css-units-cover.webp","author":{"name":"peterhs.kang","picture":"/imgs/PK.png"},"status":"published","excerpt":"\\n## Introduction\\n\\n```txt\\n`px` `em` `rem` `vw` `vh` `vmin` `vmax`\\n```\\n\\nWhat is all of these?\\n\\nThey are a unit used in CSS. But why such many units are necessary?\\n\\nLet\'s figure out one by one.\\n\\nNo time? Then go to [Conclusion](#conclusion)\\n\\n","content":"\\n## Introduction\\n\\n```txt\\n`px` `em` `rem` `vw` `vh` `vmin` `vmax`\\n```\\n\\nWhat is all of these?\\n\\nThey are a unit used in CSS. But why such many units are necessary?\\n\\nLet\'s figure out one by one.\\n\\nNo time? Then go to [Conclusion](#conclusion)\\n\\n[//]:---excerpt---\\n\\n## What is PX(PiXel)?\\n\\n- `px` is an absolute and fixed-size unit.\\n- The physical size of 1`px` is dependent on a screen resolution.\\n\\n## What is EM(M)?\\n\\n- `em` is a relative unit to ***a parent element***.\\n- 1`em` is the \'font-size\' defined in the parent element.\\n- For example, 1`em` has a different pixel value by it\'s parent element.\\n\\n```css\\ndiv {\\n  font-size: 16px;\\n}\\nspan {\\n  font-size: 8px;\\n}\\np {\\n  font-size: 1em;\\n}\\n```\\n\\n```html\\n<div> <p> 1em is 16px here </p> </div>\\n<span> <p> 1em is 8px here </p> </span>\\n```\\n\\n## When to use EM?\\n\\n- It\'s good for responsive components.\\n\\n<AdSense />\\n\\n## What is REM(Root EM)?\\n\\n- `rem` is a relative unit to ***a root element***.\\n- 1`rem` is the pixel size defined in the root element.\\n- For example, if you set the \'font-size\' to 10`px` as follows, 1`rem` is translated into 10`px` by the browser.\\n\\n```css\\nhtml {\\n  font-size: 16px;\\n}\\np {\\n  font-size: 1rem; /* <== translated into 10px */\\n}\\n```\\n\\n## When to use REM?\\n\\n- It\'s good for responsive web pages.\\n- You can set the \'font-size\' by divices using the \'media\' query as follows:\\n\\n```css\\nhtml {\\n  /* Extra small devices (phones, 600px and down) */\\n  @media only screen and (max-width: 600px) {\\n    font-size: 10px;\\n  }\\n  /* Small devices (portrait tablets and large phones, 600px and up) */\\n  @media only screen and (min-width: 600px) {\\n    font-size: 12px;\\n  }\\n\\n  /* Medium devices (landscape tablets, 768px and up) */\\n  @media only screen and (min-width: 768px) {\\n    font-size: 18px;\\n  }\\n\\n  /* Large devices (laptops/desktops, 992px and up) */\\n  @media only screen and (min-width: 992px) {\\n    font-size: 26px;\\n  }\\n\\n  /* Extra large devices (large laptops and desktops, 1200px and up) */\\n  @media only screen and (min-width: 1200px) {\\n    font-size: 34px;\\n  }\\n}\\n\\np {\\n  font-size: 1rem;\\n}\\n```\\n\\n## What is `vh`, `vw`, `vmin` and `vmax`?\\n\\n- `v*` are a relative unit to ***a viewport***\\n- 1`vw` is 1 percentage of a viewport width\\n- 1`vh` is 1 percentage of a viewport height\\n- 1`vmin` is min(1`vh`, 1`vw`)\\n- 1`vmax` is max(1`vh`, 1`vw`)\\n- In portrait orientation,\\n  - 1`vmin` is 1`vw`\\n  - 1`vmax` is 1`vh`\\n- In landscape orientation,\\n  - 1`vmin` is 1`vh`\\n  - 1`vmax` is 1`vw`\\n\\n<AdSense />\\n\\n## Conclusion\\n\\n| Unit | Dependency         | Unit size in pixel               |\\n|------|--------------------|----------------------------------|\\n| em   | parent element     |  1em = parent element pixel size |\\n| rem  | root element       | 1rem = root element pixel size   |\\n| vw   | viewport width     | 1vw = 1% of viewport width       |\\n| vh   | viewport height    | 1vh = 1% of viewport height      |\\n| vmin | device orientation | 1vmin = min(1vh, 1vw)            |\\n| vmax | device orientation | 1vmax = max(1vh, 1vw)            |\\n\\n<br/>\\n\\n- For example,\\n- viewport width: 100px, viewport height: 200px\\n- css is as follows:\\n\\n<JSCodeTabs\\n  html={`<p class=\\"em-ele\\"> 10px (parent is root) </p>\\n<p class=\\"rem-ele\\"> 10px ()</p>\\n<div>\\n  <p class=\\"em-ele\\"> 20px (parent is div) </p>\\n  <p class=\\"rem-ele\\"> 10px (root is the one)</p>\\n<div>\\n<p class=\\"vh-ele\\"> 2px (= 200px * 1%) </p>\\n<p class=\\"vw-ele\\"> 1px (= 100px * 1%) </p>\\n<p class=\\"vmin-ele\\"> 1px (= min(2px, 1px)) </p>\\n<p class=\\"vmax-ele\\"> 2px (= max(2px, 1px)) </p>`}\\n  css={`html {\\n  font-size: 10px;\\n}\\ndiv {\\n  font-size: 20px;\\n}\\n.em-ele {\\n  font-size: 1em;\\n}\\n.rem-ele {\\n  font-size: 1rem;\\n}\\n.vh-ele {\\n  font-size: 1vh;\\n}\\n.vw-ele {\\n  font-size: 1vw;\\n}\\n.vmin-ele {\\n  font-size: 1vmin;\\n}\\n.vmax-ele {\\n  font-size: 1vmax;\\n}`}\\n  useTable={true}\\n/>\\n\\n## References\\n\\n- [CSS values and units on MDN](https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Values_and_units)\\n"}],"tags":{"about":["about"],"life":["about"],"javascript":["languages$javascript$javascript-introduction","nextjs$nextjs-error-page","nextjs$nextjs-introduction","nodejs$nodejs-introduction","reactjs$react-introduction"],"language":["languages$javascript$javascript-introduction","languages$typescript$typescript-introduction"],"typescript":["languages$typescript$typescript-introduction","nextjs$nextjs-error-page","nextjs$nextjs-introduction","nodejs$nodejs-introduction","reactjs$react-introduction"],"software":["languages$typescript$typescript-introduction","nextjs$nextjs-error-page","nextjs$nextjs-introduction","nodejs$nodejs-introduction","reactjs$react-introduction"],"writing":["misc$howto-writing"],"nextjs":["nextjs$nextjs-error-page","nextjs$nextjs-introduction"],"nodejs":["nodejs$nodejs-introduction"],"reactjs":["reactjs$react-introduction"],"style":["style$markdown-syntax","style$size-units-in-css"],"markdown":["style$markdown-syntax"],"html":["style$size-units-in-css"],"css":["style$size-units-in-css"]},"categories":[{"label":"about","slug":"about"},[{"slug":"languages","label":"languages"},[[{"slug":"languages$javascript","label":"javascript"},[{"label":"javascript-introduction","slug":"languages$javascript$javascript-introduction"}]],[{"slug":"languages$typescript","label":"typescript"},[{"label":"typescript-introduction","slug":"languages$typescript$typescript-introduction"}]]]],[{"slug":"misc","label":"misc"},[{"label":"howto-writing","slug":"misc$howto-writing"}]],[{"slug":"nextjs","label":"nextjs"},[{"label":"nextjs-error-page","slug":"nextjs$nextjs-error-page"},{"label":"nextjs-introduction","slug":"nextjs$nextjs-introduction"}]],[{"slug":"nodejs","label":"nodejs"},[{"label":"nodejs-introduction","slug":"nodejs$nodejs-introduction"}]],[{"slug":"reactjs","label":"reactjs"},[{"label":"react-introduction","slug":"reactjs$react-introduction"}]],[{"slug":"style","label":"style"},[{"label":"markdown-syntax","slug":"style$markdown-syntax"},{"label":"size-units-in-css","slug":"style$size-units-in-css"}]]]}')}}]);