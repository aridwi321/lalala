(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{14:function(e,n,t){},15:function(e,n,t){},16:function(e,n,t){"use strict";t.r(n);var o=t(0),a=t.n(o),i=t(2),r=t.n(i),c=(t(14),t(3)),l=t(4),s=t(6),u=t(5),d=t(7),m=(t(15),function(e){function n(e){var t;return Object(c.a)(this,n),(t=Object(s.a)(this,Object(u.a)(n).call(this,e))).state={color:"Merah",img:"Merah.jpg"},t}return Object(d.a)(n,e),Object(l.a)(n,[{key:"clicked",value:function(e){this.setState({color:e.color,img:e.img,name:e.name})}},{key:"render",value:function(){var e=this;return a.a.createElement("div",{id:"app"},a.a.createElement("nav",{className:"nav"},this.props.items.map(function(n,t){var o="menu";return e.state.color===n.color&&(o="".concat(o," is-active")),a.a.createElement("a",{className:o+" "+n.color,onClick:e.clicked.bind(e,n),key:t},n.name)})),a.a.createElement("div",{className:"info"},"ini adalah ",a.a.createElement("span",{className:"selected "+this.state.color},this.state.name),a.a.createElement("br",null),a.a.createElement("br",null),a.a.createElement("img",{src:this.state.img,width:"200"})))}}]),n}(o.Component)),h=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function g(e,n){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var t=e.installing;null!=t&&(t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See http://bit.ly/CRA-PWA."),n&&n.onUpdate&&n.onUpdate(e)):(console.log("Content is cached for offline use."),n&&n.onSuccess&&n.onSuccess(e)))})}}).catch(function(e){console.error("Error during service worker registration:",e)})}r.a.render(a.a.createElement(m,{items:[{name:"Mulan",color:"Merah",img:"Merah.jpg"},{name:"Belle",color:"Kuning",img:"Kuning.jpg"},{name:"Cinderella",color:"Biru",img:"Biru.jpg"},{name:"Jasmine",color:"Hijau",img:"Hijau.jpg"}]}),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/lalala",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",function(){var n="".concat("/lalala","/service-worker.js");h?(function(e,n){fetch(e).then(function(t){var o=t.headers.get("content-type");404===t.status||null!=o&&-1===o.indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):g(e,n)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(n,e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit http://bit.ly/CRA-PWA")})):g(n,e)})}}()},8:function(e,n,t){e.exports=t(16)}},[[8,1,2]]]);
//# sourceMappingURL=main.4cfe3630.chunk.js.map