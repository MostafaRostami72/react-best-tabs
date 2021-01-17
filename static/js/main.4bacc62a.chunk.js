(this["webpackJsonpreact-best-tabs-example"]=this["webpackJsonpreact-best-tabs-example"]||[]).push([[0],{19:function(e,t,a){e.exports=a(29)},29:function(e,t,a){"use strict";a.r(t);a(20);var n=a(0),l=a.n(n),c=a(11),r=a.n(c),m=a(4),s=a(6);function i(){return l.a.createElement("div",{className:"table-responsive"},l.a.createElement("table",{className:"table table-striped "},l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",null,"Name"),l.a.createElement("th",null,"Default"),l.a.createElement("th",null,"Description"))),l.a.createElement("tbody",null,l.a.createElement("tr",null,l.a.createElement("td",null,"activeTab"),l.a.createElement("td",null,"1"),l.a.createElement("td",null,"Specifies which tab is enabled by default.")),l.a.createElement("tr",null,l.a.createElement("td",null,"className"),l.a.createElement("td",null,"null"),l.a.createElement("td",null,"Can Apply a css class name")),l.a.createElement("tr",null,l.a.createElement("td",null,"ulClassName"),l.a.createElement("td",null,"null"),l.a.createElement("td",null,"Can Apply a css class name to tabs list parent (ul)")),l.a.createElement("tr",null,l.a.createElement("td",null,"activityClassName"),l.a.createElement("td",null,"null"),l.a.createElement("td",null,'Can Apply a css class name to interaction (in example 2 className has "bg-danger").')),l.a.createElement("tr",null,l.a.createElement("td",null,"onClick"),l.a.createElement("td",null,"null"),l.a.createElement("td",null,"Callback function fired when a tab item is clicked.",l.a.createElement("br",null)," ",l.a.createElement("strong",null,"Signature:"),l.a.createElement("br",null)," onClick=","{(event, tab) => console.log(event, tab)}")))))}function u(){return l.a.createElement("div",{className:"table-responsive"},l.a.createElement("table",{className:"table table-striped "},l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",null,"Name"),l.a.createElement("th",null,"Default"),l.a.createElement("th",null,"Description"))),l.a.createElement("tbody",null,l.a.createElement("tr",null,l.a.createElement("td",null,"title"),l.a.createElement("td",null,"required"),l.a.createElement("td",null,"Add title for tab.")),l.a.createElement("tr",null,l.a.createElement("td",null,"className"),l.a.createElement("td",null,"null"),l.a.createElement("td",null,"Can Apply a css class name")))))}var o=a(1);function d(e,t){return t||(t=e.slice(0)),e.raw=t,e}function E(){var e=d(["\n    display: ",";\n"]);return E=function(){return e},e}function b(){var e=d([""]);return b=function(){return e},e}function p(){var e=d(["\n    padding: 8px 16px;\n    cursor: pointer;\n    \n    &.active {\n        font-weight: 500;\n    }\n    \n    @media (max-width: 768px) {\n        font-size: 14px;\n    }\n"]);return p=function(){return e},e}function v(){var e=d(["\n    display: flex;\n    align-items: center;\n    list-style: none;\n    padding: 0;\n    margin: 0;\n    border-bottom: 1px solid #ebebeb;\n    \n    @media (max-width: 768px) {\n        justify-content: space-between;\n    }\n"]);return v=function(){return e},e}function f(){var e=d(["\n    height: 2px;\n    background-color: #222222;\n    position: absolute;\n    bottom: 0;\n    transition: all 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;\n    will-change: left, width;\n"]);return f=function(){return e},e}function N(){var e=d(["\n    position: relative;\n"]);return N=function(){return e},e}function h(){var e=d(["\n    position: relative;\n"]);return h=function(){return e},e}function g(e){return l.a.createElement("li",null,e.title)}var T=o.a.div(h()),x=o.a.div(N()),y=o.a.div(f()),w=o.a.ul(v()),C=o.a.li(p()),k=o.a.div(b()),j=o.a.div(E(),(function(e){return e.show?"block":"none"})),O=function(e){for(var t=e.activeTab,a=e.children,c=e.className,r=e.ulClassName,m=e.activityClassName,s=e.onClick,i=Object(n.useState)(t?Number(t):1),u=i[0],o=i[1],d=Object(n.useState)({width:0,left:"0"}),E=d[0],b=d[1],p=[],v=0;v<a.length;v++)p.push(Object(n.useRef)(""));var f=function(e){void 0===e&&(e=u-1),p[e]&&p[e].current&&b({width:p[e].current.clientWidth,left:p[e].current.offsetLeft+"px"})};return Object(n.useEffect)((function(){function e(){f()}return f(),window.addEventListener("resize",e),function(){return window.removeEventListener("resize",e)}}),[u]),l.a.createElement(T,{className:c||""},l.a.createElement(x,null,l.a.createElement(w,{className:r||""},a.map((function(e,t){return l.a.createElement(C,{ref:p[t],key:t,onClick:function(e){return a=e,o((n=t)+1),void(void 0!==s&&s(a,n+1));var a,n},className:(e.props.className?e.props.className:"")+(u===t+1?" active":"")},e.props.title)}))),l.a.createElement(y,{style:{width:E.width+"px",left:E.left},className:m||""})),l.a.createElement(k,null,a.map((function(e,t){return l.a.createElement(j,{show:u===t+1,key:t},e.props.children)}))))};function A(){return l.a.createElement("div",null,l.a.createElement("h4",{className:"mb-3"},"Example 1"),l.a.createElement(O,null,l.a.createElement(g,{title:"tab 1",className:"mr-3"},l.a.createElement("div",{className:"mt-3"},"Tab 1 content")),l.a.createElement(g,{title:"tab 2",className:"mr-3"},l.a.createElement("div",{className:"mt-3"},"Tab 2 content")),l.a.createElement(g,{title:"tab 3",className:"mr-3"},l.a.createElement("div",{className:"mt-3"},"Tab 3 content"))))}function z(){return l.a.createElement("div",null,l.a.createElement("h4",{className:"mb-3"},"Example 2"),l.a.createElement(O,{activeTab:"2",className:"",ulClassName:"",activityClassName:"bg-danger"},l.a.createElement(g,{title:"tab 1",className:"mr-3"},l.a.createElement("div",{className:"mt-3"},"Tab 1 content")),l.a.createElement(g,{title:"tab 2",className:"mr-3"},l.a.createElement("div",{className:"mt-3"},"Tab 2 content")),l.a.createElement(g,{title:"tab 3",className:"mr-3"},l.a.createElement("div",{className:"mt-3"},"Tab 3 content"))))}var S=a(18);function D(){var e=Object(n.useState)({tabs:[{title:"Tab 1",content:"Tab 1 content",loading:!1,load:!0},{title:"Tab 2",content:"Tab 2 content",loading:!1,load:!1},{title:"Tab 3",content:"Tab 3 content",loading:!1,load:!1}]}),t=Object(S.a)(e,2),a=t[0],c=t[1];return l.a.createElement("div",null,l.a.createElement("h4",{className:"mb-3"},"Example 3 (async)"),l.a.createElement(O,{activeTab:"1",className:"",ulClassName:"",activityClassName:"bg-success",onClick:function(e,t){return function(e,t){var n=a.tabs;n[t-1].load||(n[t-1].loading=!0,c({tabs:n}),setTimeout((function(){n[t-1].loading=!1,n[t-1].load=!0,c({tabs:n})}),2e3))}(0,t)}},"undefined"!==typeof a.tabs.length?a.tabs.map((function(e,t){return l.a.createElement(g,{key:t,title:e.title,className:"mr-3"},l.a.createElement("div",{className:"mt-3"},e.loading?l.a.createElement("img",{src:"loading.gif",width:"80",height:"80",alt:"loading"}):e.content))})):""))}function I(){var e=Object(m.a)(["\n    background-color: #ebebeb;\n    font-size: .937rem;\n    padding: 12px;\n    border-radius: 8px;\n"]);return I=function(){return e},e}function L(){var e=Object(m.a)(["\n    margin: 80px 0;\n    \n    @media (max-width: 768px) {\n        margin: 56px 0;\n    }\n"]);return L=function(){return e},e}var R=function(){return l.a.createElement("div",{className:"container mt-3 mt-lg-5"},l.a.createElement("h1",null,"React Best tabs"),l.a.createElement("p",null,"A great package to easily create beautiful tabs in React."),l.a.createElement(B,null,l.a.createElement("h2",null,"Install"),l.a.createElement("hr",null),l.a.createElement(J,null,l.a.createElement("code",null,"npm install --save react-best-tabs"))),l.a.createElement(B,null,l.a.createElement("h2",null,"Usage"),l.a.createElement("hr",null),l.a.createElement("div",{className:"mt-3"},l.a.createElement("h4",{className:"mb-3"},"1 - Import component"),l.a.createElement(J,null,l.a.createElement("code",null,"import Tabs,","{Tab}"," from 'react-best-tabs';"))),l.a.createElement("div",{className:"mt-5"},l.a.createElement("h4",{className:"mb-3"},"2 - Add the component markup to your react component"),l.a.createElement(J,null,l.a.createElement("code",null,'<Tabs activeTab="1" className="mt-5" ulClassName="" activityClassName="bg-success" onClick={(event, tab) => console.log(event, tab)} >\n    <Tab title="tab 1" className="mr-3">\n        // tab contents \n        <div className="mt-3">\n             Tab 1 content\n        </div>\n       // ./ tab contents \n     </Tab>\n \n     <Tab title="tab 2" className="mr-3">\n          <div className="mt-3">\n              Tab 2 content\n           </div>\n      </Tab>\n \n      <Tab title="tab 3" className="mr-3">\n          <div className="mt-3">\n              Tab 3 content\n          </div>\n      </Tab>\n</Tabs>')))),l.a.createElement(B,null,l.a.createElement("h2",null,"Props"),l.a.createElement("hr",null),l.a.createElement("div",{className:"mt-3"},l.a.createElement("h4",null,"1 - Parent props :",l.a.createElement(J,{className:"mt-3"},l.a.createElement("code",null,'<Tabs activeTab="1" className="mt-5" ulClassName="" activityClassName="">'))),l.a.createElement(i,null)),l.a.createElement("div",{className:"mt-3"},l.a.createElement("h4",null,"2 - Tab props :",l.a.createElement(J,{className:"mt-3"},l.a.createElement("code",null,'<Tab title="tab 3" className="mr-3">'))),l.a.createElement(u,null))),l.a.createElement(B,null,l.a.createElement("h2",null,"Examples"),l.a.createElement("div",{className:"mt-5"},l.a.createElement(A,null)),l.a.createElement("div",{className:"mt-5"},l.a.createElement(z,null)),l.a.createElement("div",{className:"mt-5"},l.a.createElement(D,null))))},B=s.a.div(L()),J=s.a.pre(I());r.a.render(l.a.createElement(R,null),document.getElementById("root"))}},[[19,1,2]]]);
//# sourceMappingURL=main.4bacc62a.chunk.js.map