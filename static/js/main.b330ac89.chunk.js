(this["webpackJsonpreact-todo-list"]=this["webpackJsonpreact-todo-list"]||[]).push([[0],{15:function(t,e,o){},16:function(t,e,o){},18:function(t,e,o){"use strict";o.r(e);var n=o(2),c=o.n(n),d=o(8),i=o.n(d),a=(o(15),o(16),o(7)),s=o(3),r=o(1),u=function(t){var e=Object(n.useState)(t.edit?t.edit.value:""),o=Object(s.a)(e,2),c=o[0],d=o[1],i=Object(n.useRef)(null);Object(n.useEffect)((function(){i.current.focus()}),[i]);var a=function(t){d(t.target.value)},u=function(e){e.preventDefault(),t.onAddedTodo({id:Math.floor(1e4*Math.random()),text:c}),d("")};return Object(r.jsx)("form",{className:"todo-form",onSubmit:u,children:t.edit?Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)("input",{type:"text",placeholder:"add todo",value:c,onChange:a,name:"text",className:"todo-input edit",ref:i}),Object(r.jsx)("button",{onSubmit:u,className:"todo-button",children:"Add todo"})]}):Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)("input",{type:"text",placeholder:"add todo",value:c,onChange:a,name:"text",className:"todo-input",ref:i}),Object(r.jsx)("button",{onSubmit:u,className:"todo-button",children:"Add todo"})]})})},l=o(9),j=o(10),b=function(t){var e=t.todos,o=t.completeTodo,c=t.removeTodo,d=t.updateTodo,i=Object(n.useState)({id:null,value:""}),a=Object(s.a)(i,2),b=a[0],f=a[1];return b.id?Object(r.jsx)(u,{edit:b,onAddedTodo:function(t){d(b.id,t),f({id:null,value:""})}}):e.map((function(t,e){return Object(r.jsxs)("div",{className:t.isComplete?"todo-row complete":"todo-row",children:[Object(r.jsx)("div",{onClick:function(){return o(t.id)},children:t.text},t.id),Object(r.jsxs)("div",{className:"icons",children:[Object(r.jsx)(l.a,{onClick:function(){return c(t.id)},className:"delete-icon"}),Object(r.jsx)(j.a,{onClick:function(){return f({id:t.id,value:t.text})},className:"edit-icon"})]})]},e)}))};var f=function(){var t=Object(n.useState)([]),e=Object(s.a)(t,2),o=e[0],c=e[1];return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)("h2",{children:"What's the plan Today"}),Object(r.jsx)(u,{onAddedTodo:function(t){if(t.text&&!/^\s*$/.test(t.text)){var e=[].concat(Object(a.a)(o),[t]);c(e),console.log(t)}}}),Object(r.jsx)(b,{todos:o,updateTodo:function(t,e){e.text&&!/^\s*$/.test(e.text)&&c((function(o){return o.map((function(o){return o.id===t?o.text=e:o}))}))},completeTodo:function(t){var e=o.map((function(e){return e.id===t&&(e.isComplete=!e.isComplete),e}));c(e)},removeTodo:function(t){var e=Object(a.a)(o).filter((function(e){return e.id!==t}));c(e)}})]})},m=function(){return Object(r.jsxs)("div",{className:"todo-app",children:[Object(r.jsx)("h1",{children:"React todo list"}),Object(r.jsx)(f,{})]})};i.a.render(Object(r.jsx)(c.a.StrictMode,{children:Object(r.jsx)(m,{})}),document.getElementById("root"))}},[[18,1,2]]]);
//# sourceMappingURL=main.b330ac89.chunk.js.map