(this.webpackJsonpempty=this.webpackJsonpempty||[]).push([[0],{12:function(e,t,n){},13:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(5),c=n.n(r),l=(n(12),n(6)),i=n(2),u=Object(a.createContext)(),s=function(e){var t=Object(a.useState)([{title:"The Little Prince",author:"Antoine de Saint-Exup\xe9ry",id:1},{title:"The Lord of the Rings",author:"J. R. R. Tolkien",id:2},{title:"And Then There Were None",author:"Agatha Christie",id:3}]),n=Object(i.a)(t,2),r=n[0],c=n[1],s=function(){Math.random()};return o.a.createElement(u.Provider,{value:{books:r,addBook:function(e,t){c([].concat(Object(l.a)(r),[{title:e,author:t,id:{bid:s}}]))},removeBook:function(e){c(r.filter((function(t){return t.id!==e})))}}},e.children)},m=function(){var e=Object(a.useContext)(u).books;return o.a.createElement("div",{className:"navbar"},o.a.createElement("h1",null,"Reading List"),o.a.createElement("p",null,"Currently You have ",e.length," books to get through..."))},d=function(e){var t=e.book,n=Object(a.useContext)(u).removeBook;return o.a.createElement("li",{onClick:function(){return n(t.id)}},o.a.createElement("div",{className:"title"},t.title),o.a.createElement("div",{className:"author"},t.author))},h=function(){var e=Object(a.useContext)(u).books;return e.length?o.a.createElement("div",{className:"book-list"},o.a.createElement("ul",null,e.map((function(e){return o.a.createElement(d,{book:e,key:e.id})})))):o.a.createElement("div",{className:"empty"},"No Books to Read")},v=function(){var e=Object(a.useContext)(u).addBook,t=Object(a.useState)(""),n=Object(i.a)(t,2),r=n[0],c=n[1],l=Object(a.useState)(""),s=Object(i.a)(l,2),m=s[0],d=s[1];return o.a.createElement("form",{onSubmit:function(t){t.preventDefault(),e(r,m),c(""),d("")}},o.a.createElement("input",{type:"text",placeholder:"Book Title",value:r,onChange:function(e){return c(e.target.value)},required:!0}),o.a.createElement("input",{type:"text",placeholder:"Author",value:m,onChange:function(e){return d(e.target.value)},required:!0}),o.a.createElement("input",{type:"submit",value:"add book"}))};var b=function(){return o.a.createElement("div",{className:"App"},o.a.createElement(s,null,o.a.createElement(m,null),o.a.createElement(v,null),o.a.createElement(h,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(b,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},7:function(e,t,n){e.exports=n(13)}},[[7,1,2]]]);
//# sourceMappingURL=main.f8140274.chunk.js.map