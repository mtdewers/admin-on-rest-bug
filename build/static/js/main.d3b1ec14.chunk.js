(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{392:function(e,r,t){e.exports=t(697)},397:function(e,r,t){},697:function(e,r,t){"use strict";t.r(r);var a=t(1),n=t.n(a),o=t(36),m=t.n(o),c=(t(397),t(713)),s=t(712),u=t(360),l=t(714),i=t(54),d=t(708),f=t(715),E=t(709),v=t(710),p=function(e){return n.a.createElement(l.a,Object.assign({title:"All users"},e),n.a.createElement(i.a,{small:n.a.createElement(d.a,{primaryText:function(e){return e.name},secondaryText:function(e){return e.username},tertiaryText:function(e){return e.email}}),medium:n.a.createElement(f.a,null,n.a.createElement(E.a,{source:"id"}),n.a.createElement(E.a,{source:"name"}),n.a.createElement(E.a,{source:"username"}),n.a.createElement(v.a,{source:"email"}))}))},P=t(191),g=function(e,r){if(e===P.d){var t=r.username;return localStorage.setItem("username",t),Promise.resolve()}if(e===P.e)return localStorage.removeItem("username"),Promise.resolve();if(e===P.b){var a=r.status;return 401===a||403===a?(localStorage.removeItem("username"),Promise.reject()):Promise.resolve()}return e===P.a?localStorage.getItem("username")?Promise.resolve():Promise.reject():Promise.reject("Unknown method")},w=function(){return n.a.createElement(c.a,{dataProvider:Object(u.a)("http://jsonplaceholder.typicode.com"),authProvider:g},n.a.createElement(s.a,{name:"users",list:p}))};m.a.render(n.a.createElement(w,null),document.getElementById("root"))}},[[392,1,2]]]);
//# sourceMappingURL=main.d3b1ec14.chunk.js.map