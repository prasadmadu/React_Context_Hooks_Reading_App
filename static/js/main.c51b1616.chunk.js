(this.webpackJsonpreading_app=this.webpackJsonpreading_app||[]).push([[0],{12:function(e,t,a){},13:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(5),l=a.n(r),c=(a(12),a(6)),u=a(2),i=Object(n.createContext)(),m=function(e){var t=Object(n.useState)([{title:"Sample Book 1",author:"Sample Author",id:"1"},{title:"Click to Delete",author:"Sample Author",id:"2"},{title:"Sample Book 2",author:"Sample Author",id:"3"}]),a=Object(u.a)(t,2),r=a[0],l=a[1],m=function(){Math.random()};return o.a.createElement(i.Provider,{value:{books:r,addBook:function(e,t){l([].concat(Object(c.a)(r),[{title:e,author:t,id:{bid:m}}]))},removeBook:function(e){l(r.filter((function(t){return t.id!==e})))}}},e.children)},s=function(){var e=Object(n.useContext)(i).books;return o.a.createElement("div",{className:"navbar"},o.a.createElement("h1",null,"Reading List"),o.a.createElement("p",null,"Currently You have ",e.length," books to get through..."))},d=function(e){var t=e.book,a=Object(n.useContext)(i).removeBook;return o.a.createElement("li",{onClick:function(){return a(t.id)}},o.a.createElement("div",{className:"title"},t.title),o.a.createElement("div",{className:"author"},t.author))},h=function(){var e=Object(n.useContext)(i).books;return e.length?o.a.createElement("div",{className:"book-list"},o.a.createElement("ul",null,e.map((function(e){return o.a.createElement(d,{book:e,key:e.id})})))):o.a.createElement("div",{className:"empty"},"No Books to Read")},p=function(){var e=Object(n.useContext)(i).addBook,t=Object(n.useState)(""),a=Object(u.a)(t,2),r=a[0],l=a[1],c=Object(n.useState)(""),m=Object(u.a)(c,2),s=m[0],d=m[1];return o.a.createElement("form",{onSubmit:function(t){t.preventDefault(),e(r,s),l(""),d("")}},o.a.createElement("input",{type:"text",placeholder:"Book Title",value:r,onChange:function(e){return l(e.target.value)},required:!0}),o.a.createElement("input",{type:"text",placeholder:"Author",value:s,onChange:function(e){return d(e.target.value)},required:!0}),o.a.createElement("input",{type:"submit",value:"add book"}))};var v=function(){return o.a.createElement("div",{className:"App"},o.a.createElement(m,null,o.a.createElement(s,null),o.a.createElement(p,null),o.a.createElement(h,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(v,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},7:function(e,t,a){e.exports=a(13)}},[[7,1,2]]]);
//# sourceMappingURL=main.c51b1616.chunk.js.map