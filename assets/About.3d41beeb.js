var t,e=Object.defineProperty,n=Object.defineProperties,r=Object.getOwnPropertyDescriptors,o=Object.getOwnPropertySymbols,i=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable,a=(t,n,r)=>n in t?e(t,n,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[n]=r,s=(t,e)=>{for(var n in e||(e={}))i.call(e,n)&&a(t,n,e[n]);if(o)for(var n of o(e))u.call(e,n)&&a(t,n,e[n]);return t};import{_ as c,e as f,$ as l,o as h,s as p,w as v,u as d,Z as y,b,X as m,c as w,B as g,F as j,a as P,W as O,a0 as x,z as S,a1 as T,d as E,t as A,a2 as _,C as R,A as L}from"./vendor.727b3242.js";function I(){var t,e,n=new Promise((function(n,r){return t=n,e=r}));return{resolve:t,reject:e,promise:n}}function U(t){var e,n,r,o=2;for("undefined"!=typeof Symbol&&(n=Symbol.asyncIterator,r=Symbol.iterator);o--;){if(n&&null!=(e=t[n]))return e.call(t);if(r&&null!=(e=t[r]))return new k(e.call(t));n="@@asyncIterator",r="@@iterator"}throw new TypeError("Object is not async iterable")}function k(t){function e(t){if(Object(t)!==t)return Promise.reject(new TypeError(t+" is not an object."));var e=t.done;return Promise.resolve(t.value).then((function(t){return{value:t,done:e}}))}return(k=function(t){this.s=t,this.n=t.next}).prototype={s:null,n:null,next:function(){return e(this.n.apply(this.s,arguments))},return:function(t){var n=this.s.return;return void 0===n?Promise.resolve({value:t,done:!0}):e(n.apply(this.s,arguments))},throw:function(t){var n=this.s.return;return void 0===n?Promise.reject(t):e(n.apply(this.s,arguments))}},new k(t)}function q(t){this.wrapped=t}function C(t){var e,n;function r(e,n){try{var i=t[e](n),u=i.value,a=u instanceof q;Promise.resolve(a?u.wrapped:u).then((function(t){a?r("return"===e?"return":"next",t):o(i.done?"return":"normal",t)}),(function(t){r("throw",t)}))}catch(s){o("throw",s)}}function o(t,o){switch(t){case"return":e.resolve({value:o,done:!0});break;case"throw":e.reject(o);break;default:e.resolve({value:o,done:!1})}(e=e.next)?r(e.key,e.arg):n=null}this._invoke=function(t,o){return new Promise((function(i,u){var a={key:t,arg:o,resolve:i,reject:u,next:null};n?n=n.next=a:(e=n=a,r(t,o))}))},"function"!=typeof t.return&&(this.return=void 0)}function H(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function F(t,e){var n="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(n)return(n=n.call(t)).next.bind(n);if(Array.isArray(t)||(n=function(t,e){if(t){if("string"==typeof t)return H(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?H(t,e):void 0}}(t))||e&&t&&"number"==typeof t.length){n&&(t=n);var r=0;return function(){return r>=t.length?{done:!0}:{done:!1,value:t[r++]}}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function M(t,e,n){if(!t.s){if(n instanceof D){if(!n.s)return void(n.o=M.bind(null,t,e));1&e&&(e=n.s),n=n.v}if(n&&n.then)return void n.then(M.bind(null,t,e),M.bind(null,t,2));t.s=e,t.v=n;var r=t.o;r&&r(t)}}C.prototype["function"==typeof Symbol&&Symbol.asyncIterator||"@@asyncIterator"]=function(){return this},C.prototype.next=function(t){return this._invoke("next",t)},C.prototype.throw=function(t){return this._invoke("throw",t)},C.prototype.return=function(t){return this._invoke("return",t)};var D=function(){function t(){}return t.prototype.then=function(e,n){var r=new t,o=this.s;if(o){var i=1&o?e:n;if(i){try{M(r,1,i(this.v))}catch(u){M(r,2,u)}return r}return this}return this.o=function(t){try{var o=t.v;1&t.s?M(r,1,e?e(o):o):n?M(r,1,n(o)):M(r,2,o)}catch(i){M(r,2,i)}},r},t}();function z(t){return t instanceof D&&1&t.s}function $(t,e,n){for(var r;;){var o=t();if(z(o)&&(o=o.v),!o)return i;if(o.then){r=0;break}var i=n();if(i&&i.then){if(!z(i)){r=1;break}i=i.s}if(e){var u=e();if(u&&u.then&&!z(u)){r=2;break}}}var a=new D,s=M.bind(null,a,2);return(0===r?o.then(f):1===r?i.then(c):u.then(l)).then(void 0,s),a;function c(r){i=r;do{if(e&&(u=e())&&u.then&&!z(u))return void u.then(l).then(void 0,s);if(!(o=t())||z(o)&&!o.v)return void M(a,1,i);if(o.then)return void o.then(f).then(void 0,s);z(i=n())&&(i=i.v)}while(!i||!i.then);i.then(c).then(void 0,s)}function f(t){t?(i=n())&&i.then?i.then(c).then(void 0,s):c(i):M(a,1,i)}function l(){(o=t())?o.then?o.then(f).then(void 0,s):f(o):M(a,1,i)}}function B(t,e){try{var n=t()}catch(r){return e(r)}return n&&n.then?n.then(void 0,e):n}function W(t,e){try{var n=t()}catch(r){return e(!0,r)}return n&&n.then?n.then(e.bind(null,!1),e.bind(null,!0)):e(!1,n)}Symbol.observable||(Symbol.observable=Symbol("observable")),t=Symbol.observable;var G=function(e,n){function r(t){this.subscriber=void 0,this.subscriber=t}var o=r.prototype;return o[t]=function(){return this},o[n]=function(){var t,e=this;return(t=regeneratorRuntime.mark((function t(){var n,r,o,i;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:n=[I()],o=!1,i={next:function(t){o||(n[n.length-1].resolve(t),n.push(I()))},error:function(t){o||(n[n.length-1].reject(t),o=!0),r&&r()},complete:function(){o||(n[n.length-1].resolve(),o=!0),r&&r()}},r=e.subscriber(i);case 3:return t.next=5,n[0].promise;case 5:n.shift();case 6:if(n[0]){t.next=3;break}case 7:case"end":return t.stop()}}),t)})),function(){return new C(t.apply(this,arguments))})()},r.of=function(){var t=arguments;return new this((function(e){for(var n,r=e.next,o=e.complete,i=F([].slice.call(t));!(n=i()).done;)r(n.value);o()}))},o.toPromise=function(){try{var t,e,n,r=function(t){return i[0]},o=this,i=[],u=!1,a=!1,s=W((function(){return B((function(){t=U(o);var n=$((function(){return!!Promise.resolve(t.next()).then((function(t){return u=!(e=t).done}))}),(function(){return!!(u=!1)}),(function(){i.push(e.value),i.length>2&&i.shift()}));if(n&&n.then)return n.then((function(){}))}),(function(t){a=!0,n=t}))}),(function(e,r){function o(t){if(e)throw r;return r}var i=W((function(){var e=function(){if(u&&null!=t.return)return Promise.resolve(t.return()).then((function(){}))}();if(e&&e.then)return e.then((function(){}))}),(function(t,e){if(a)throw n;if(t)throw e;return e}));return i&&i.then?i.then(o):o()}));return Promise.resolve(s&&s.then?s.then(r):r())}catch(c){return Promise.reject(c)}},o.subscribe=function(t,e,n){var r=this,o=!1;return function(){try{B((function(){function e(t){if(_interrupt)return t;n instanceof Function&&n()}var i,u=!1,a=!1,s=W((function(){return B((function(){var e,n,i=U(r),a=$((function(){function t(t){return!e&&(u=!(n=t).done)}return e?!!t(!e&&i.next()):!!Promise.resolve(!e&&i.next()).then(t)}),(function(){return!!(u=!1)}),(function(){o?e=1:t(n.value)}));if(a&&a.then)return a.then((function(){}))}),(function(t){a=!0,i=t}))}),(function(t,e){function n(n){if(t)throw e;return e}var r=W((function(){var t=function(){if(u&&null!=_iterator2.return)return Promise.resolve(_iterator2.return()).then((function(){}))}();if(t&&t.then)return t.then((function(){}))}),(function(t,e){if(a)throw i;if(t)throw e;return e}));return r&&r.then?r.then(n):n()}));return s&&s.then?s.then(e):e(s)}),(function(t){e instanceof Function&&e(t)}))}catch(i){Promise.reject(i)}}(),{unsubscribe:function(){o=!0},get closed(){return o}}},r.from=function(t){return new this((function(e){return t.subscribe(e.next,e.error,e.complete).unsubscribe}))},r.fromEvent=function(t,e){return new this((function(n){var r=n.next,o=n.error;return"function"==typeof t.on?t.on(e,r).on("error",o):(t.addEventListener(e,r),t.addEventListener("error",o)),function(){"function"==typeof t.off?t.off(e,r).off("error",o):(t.removeEventListener(e,r),t.removeEventListener("error",o))}}))},r}(0,Symbol.asyncIterator),X=Array.prototype.push,N=function(){function t(){this.length=0}var e=t.prototype;return e.use=function(){return X.apply(this,[].slice.call(arguments)),this},e.execute=function(t,e){void 0===e&&(e=0);var n=this[e];if(n instanceof Function)return n(t,this.execute.bind(this,t,++e))},e.mount=function(t,e){return this.use((function(n,r){return t(n)?e.execute(n):r()}))},t}();function J(){return J=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},J.apply(this,arguments)}function V(t,e){t.prototype=Object.create(e.prototype),t.prototype.constructor=t,K(t,e)}function Z(t){return(Z=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function K(t,e){return(K=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function Q(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(it){return!1}}function Y(t,e,n){return(Y=Q()?Reflect.construct:function(t,e,n){var r=[null];r.push.apply(r,e);var o=new(Function.bind.apply(t,r));return n&&K(o,n.prototype),o}).apply(null,arguments)}function tt(t){var e="function"==typeof Map?new Map:void 0;return tt=function(t){if(null===t||-1===Function.toString.call(t).indexOf("[native code]"))return t;if("function"!=typeof t)throw new TypeError("Super expression must either be null or a function");if(void 0!==e){if(e.has(t))return e.get(t);e.set(t,n)}function n(){return Y(t,arguments,Z(this).constructor)}return n.prototype=Object.create(t.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),K(n,t)},tt(t)}function et(t,e){if(null==t)return{};var n,r,o={},i=Object.keys(t);for(r=0;r<i.length;r++)e.indexOf(n=i[r])>=0||(o[n]=t[n]);return o}function nt(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function rt(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}var ot,it,ut=["method","path","headers","body"];(it=ot||(ot={})).POST="POST",it.PUT="PUT",it.PATCH="PATCH",it.DELETE="DELETE";var at,st=function(t){function e(e,n){var r;return(r=t.call(this,e)||this).status=void 0,r.statusText=void 0,r.headers=void 0,r.body=void 0,Object.assign(nt(r),n),r}return V(e,t),e}(tt(URIError)),ct={Link:function(t){return Object.fromEntries(Array.from(t.matchAll(/<(\S+?)>; rel="(\w+)"(?:; title="(.*?)")?/g),(function(t){var e=t[2];return[e,{rel:e,URI:t[1],title:t[3]}]})))}};function ft(t){return Object.fromEntries(Array.from(t.trim().matchAll(/^([\w-]+):\s*(.*)/gm),(function(t){var e,n,r=t[1],o=t[2];return[r=r.replace(/(^[a-z]|-[a-z])/g,(function(t){return t.toUpperCase()})),null!=(e=null===(n=ct[r])||void 0===n?void 0:n.call(ct,o))?e:o]})))}!function(t){t.text="readAsText",t.dataURL="readAsDataURL",t.binaryString="readAsBinaryString",t.arrayBuffer="readAsArrayBuffer"}(at||(at={}));var lt=["baseURI"],ht=Array.prototype.splice,pt=function(t){function e(e){var n,r=void 0===e?{}:e,o=r.baseURI,i=void 0===o?document.baseURI:o,u=et(r,lt);return(n=t.call(this)||this).baseURI=void 0,n.options=void 0,n.defaultWare=function(t,e){var n=t.request,r=t.response;try{var o=n.method,i=n.headers,u=n.body;if((void 0===o?"GET":o)in ot&&u)if(u instanceof Node&&!(u instanceof Document)){var a=function(t){var e,n;if(t instanceof HTMLFormElement)if(e=new FormData(t),t.querySelector('input[type="file"][name]'))n="multipart/form-data";else{var r=[].concat(e);switch(n=t.enctype){case"text/plain":e=r.map((function(t){return t[0]+"="+t[1]})).join("\n");break;case"application/x-www-form-urlencoded":e=new URLSearchParams(r)+""}}else t instanceof HTMLElement?(e=t.outerHTML,n="text/html"):(e=(new XMLSerializer).serializeToString(t),n=t instanceof SVGElement?"image/svg":"application/xml");return{data:e,type:n}}(u),s=a.data;i["Content-Type"]=a.type,n.body=s}else if("object"==typeof u){var c;null!==(c=i["Content-Type"])&&void 0!==c&&c.startsWith("application/x-www-form-urlencoded")?n.body=new URLSearchParams(u):u.valueOf().constructor===Object&&(i["Content-Type"]=i["Content-Type"]||"application/json",n.body=JSON.stringify(u),n.responseType=n.responseType||"json")}return Promise.resolve(e()).then((function(){if(r.status>299)throw new st(r.statusText,r)}))}catch(f){return Promise.reject(f)}},n.baseURI=i,n.options=u,t.prototype.use.call(nt(n),n.defaultWare),t.prototype.use.call(nt(n),(function(t){var e=t.request,r=t.response;try{return e.path=new URL(e.path+"",n.baseURI)+"",Promise.resolve(function(t){var e=t.method,n=void 0===e?"GET":e,r=t.path,o=t.headers,i=void 0===o?{}:o,u=t.body,a=et(t,ut),s=new XMLHttpRequest,c=i instanceof Array?i:(null==i?void 0:i[Symbol.iterator])instanceof Function?[].concat(i):Object.entries(i);return{response:new Promise((function(t,e){s.onload=function(){return t({status:s.status,statusText:s.statusText,headers:ft(s.getAllResponseHeaders()),body:s.response})},s.onerror=s.ontimeout=e,s.open(n,r+"");for(var o,i=function(t,e){var n="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(n)return(n=n.call(t)).next.bind(n);if(Array.isArray(t)||(n=function(t,e){if(t){if("string"==typeof t)return rt(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?rt(t,e):void 0}}(t))){n&&(t=n);var r=0;return function(){return r>=t.length?{done:!0}:{done:!1,value:t[r++]}}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}(c);!(o=i()).done;){var f=o.value;s.setRequestHeader(f[0],f[1])}Object.assign(s,a),s.send(u)})),upload:G.fromEvent(s.upload,"progress"),download:G.fromEvent(s,"progress")}}(J({},u,e)).response).then((function(t){Object.assign(r,t)}))}catch(o){return Promise.reject(o)}})),n}V(e,t);var n=e.prototype;return n.use=function(){return ht.call.apply(ht,[this,-2,0].concat([].slice.call(arguments))),this},n.request=function(t){try{var e={request:J({},t,{headers:J({},t.headers)}),response:{}};return Promise.resolve(this.execute(e)).then((function(){return e.response}))}catch(n){return Promise.reject(n)}},n.head=function(t,e){try{return Promise.resolve(this.request({method:"HEAD",path:t,headers:e})).then((function(t){return t.headers}))}catch(n){return Promise.reject(n)}},n.get=function(t,e){return this.request({path:t,headers:e})},n.post=function(t,e,n){return this.request({method:"POST",path:t,headers:n,body:e})},n.put=function(t,e,n){return this.request({method:"PUT",path:t,headers:n,body:e})},n.patch=function(t,e,n){return this.request({method:"PATCH",path:t,headers:n,body:e})},n.delete=function(t,e,n){return this.request({method:"DELETE",path:t,headers:n,body:e})},e}(N);const vt=new pt({baseURI:"https://api.github.com/",responseType:"json"});class dt{constructor(){var t;return a(this,"symbol"!=typeof(t="list")?t+"":t,[]),c(this)}async getList(...t){for(const o of t){const{body:t}=await vt.get(`repos/${o}`),i=await dt.getLogo(t.owner.login,t.name);this.list.push((e=s({},t),n(e,r({logo:i}))))}var e;return this.list}static async getLogo(t,e){e=e.toLowerCase();try{return await new Promise(((t,n)=>{const r=new Image;r.onload=()=>t(r.src),r.onerror=n,r.src=`https://raw.githubusercontent.com/github/explore/master/topics/${e}/${e}.png`}))}catch{return`https://github.com/${t}.png`}}}var yt=new dt;const bt=P("h1",null,"Core libraries of this Project scaffold",-1),mt=E(" Home page "),wt=E(" Source code "),gt=f({setup:t=>(l((()=>yt.getList("vuejs/vue","bootstrap-vue/bootstrap-vue","microsoft/TypeScript"))),(t,e)=>(h(),p(d(y),{class:"about"},{default:v((()=>[bt,b(d(m),null,{default:v((()=>[(h(!0),w(j,null,g(d(yt).list,(({id:t,name:e,logo:n,homepage:r,html_url:o})=>(h(),p(d(O),{class:"mb-3",xs:"12",sm:"6",md:"3",key:t},{default:v((()=>[b(d(L),null,{default:v((()=>[b(d(x),{orientation:"top",src:n},null,8,["src"]),b(d(S),null,{default:v((()=>[b(d(T),null,{default:v((()=>[E(A(e),1)])),_:2},1024)])),_:2},1024),b(d(_),{class:"d-flex justify-content-around"},{default:v((()=>[b(d(R),{component:"a",color:"primary",size:"sm",href:r||"",class:"mr-3"},{default:v((()=>[mt])),_:2},1032,["href"]),b(d(R),{component:"a",color:"success",size:"sm",href:o},{default:v((()=>[wt])),_:2},1032,["href"])])),_:2},1024)])),_:2},1024)])),_:2},1024)))),128))])),_:1})])),_:1})))});export{gt as default};
