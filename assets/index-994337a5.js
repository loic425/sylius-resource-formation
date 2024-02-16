(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))t(l);new MutationObserver(l=>{for(const a of l)if(a.type==="childList")for(const c of a.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&t(c)}).observe(document,{childList:!0,subtree:!0});function n(l){const a={};return l.integrity&&(a.integrity=l.integrity),l.referrerPolicy&&(a.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?a.credentials="include":l.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function t(l){if(l.ep)return;l.ep=!0;const a=n(l);fetch(l.href,a)}})();function No(s,o){const n=Object.create(null),t=s.split(",");for(let l=0;l<t.length;l++)n[t[l]]=!0;return o?l=>!!n[l.toLowerCase()]:l=>!!n[l]}function ts(s){if(ie(s)){const o={};for(let n=0;n<s.length;n++){const t=s[n],l=je(t)?kf(t):ts(t);if(l)for(const a in l)o[a]=l[a]}return o}else{if(je(s))return s;if(Le(s))return s}}const Df=/;(?![^(]*\))/g,Ef=/:([^]+)/,bf=/\/\*.*?\*\//gs;function kf(s){const o={};return s.replace(bf,"").split(Df).forEach(n=>{if(n){const t=n.split(Ef);t.length>1&&(o[t[0].trim()]=t[1].trim())}}),o}function Ye(s){let o="";if(je(s))o=s;else if(ie(s))for(let n=0;n<s.length;n++){const t=Ye(s[n]);t&&(o+=t+" ")}else if(Le(s))for(const n in s)s[n]&&(o+=n+" ");return o.trim()}function Z(s){if(!s)return null;let{class:o,style:n}=s;return o&&!je(o)&&(s.class=Ye(o)),n&&(s.style=ts(n)),s}const wf="html,body,base,head,link,meta,style,title,address,article,aside,footer,header,hgroup,h1,h2,h3,h4,h5,h6,nav,section,div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,summary,template,blockquote,iframe,tfoot",Sf="svg,animate,animateMotion,animateTransform,circle,clipPath,color-profile,defs,desc,discard,ellipse,feBlend,feColorMatrix,feComponentTransfer,feComposite,feConvolveMatrix,feDiffuseLighting,feDisplacementMap,feDistantLight,feDropShadow,feFlood,feFuncA,feFuncB,feFuncG,feFuncR,feGaussianBlur,feImage,feMerge,feMergeNode,feMorphology,feOffset,fePointLight,feSpecularLighting,feSpotLight,feTile,feTurbulence,filter,foreignObject,g,hatch,hatchpath,image,line,linearGradient,marker,mask,mesh,meshgradient,meshpatch,meshrow,metadata,mpath,path,pattern,polygon,polyline,radialGradient,rect,set,solidcolor,stop,switch,symbol,text,textPath,title,tspan,unknown,use,view",ou=No(wf),Rf=No(Sf),xf="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",$f=No(xf);function nu(s){return!!s||s===""}const an=s=>je(s)?s:s==null?"":ie(s)||Le(s)&&(s.toString===au||!de(s.toString))?JSON.stringify(s,tu,2):String(s),tu=(s,o)=>o&&o.__v_isRef?tu(s,o.value):en(o)?{[`Map(${o.size})`]:[...o.entries()].reduce((n,[t,l])=>(n[`${t} =>`]=l,n),{})}:ru(o)?{[`Set(${o.size})`]:[...o.values()]}:Le(o)&&!ie(o)&&!cu(o)?String(o):o,He=Object.freeze({}),wn=Object.freeze([]),As=()=>{},lu=()=>!1,Ff=/^on[^a-z]/,Ot=s=>Ff.test(s),Bl=s=>s.startsWith("onUpdate:"),We=Object.assign,La=(s,o)=>{const n=s.indexOf(o);n>-1&&s.splice(n,1)},If=Object.prototype.hasOwnProperty,ke=(s,o)=>If.call(s,o),ie=Array.isArray,en=s=>Lt(s)==="[object Map]",ru=s=>Lt(s)==="[object Set]",Tf=s=>Lt(s)==="[object RegExp]",de=s=>typeof s=="function",je=s=>typeof s=="string",Na=s=>typeof s=="symbol",Le=s=>s!==null&&typeof s=="object",qa=s=>Le(s)&&de(s.then)&&de(s.catch),au=Object.prototype.toString,Lt=s=>au.call(s),Ha=s=>Lt(s).slice(8,-1),cu=s=>Lt(s)==="[object Object]",Ua=s=>je(s)&&s!=="NaN"&&s[0]!=="-"&&""+parseInt(s,10)===s,cl=No(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Mf=No("bind,cloak,else-if,else,for,html,if,model,on,once,pre,show,slot,text,memo"),ql=s=>{const o=Object.create(null);return n=>o[n]||(o[n]=s(n))},Pf=/-(\w)/g,Xs=ql(s=>s.replace(Pf,(o,n)=>n?n.toUpperCase():"")),Of=/\B([A-Z])/g,uo=ql(s=>s.replace(Of,"-$1").toLowerCase()),cn=ql(s=>s.charAt(0).toUpperCase()+s.slice(1)),Go=ql(s=>s?`on${cn(s)}`:""),Bt=(s,o)=>!Object.is(s,o),bo=(s,o)=>{for(let n=0;n<s.length;n++)s[n](o)},Al=(s,o,n)=>{Object.defineProperty(s,o,{configurable:!0,enumerable:!1,value:n})},qr=s=>{const o=parseFloat(s);return isNaN(o)?s:o},Lf=s=>{const o=je(s)?Number(s):NaN;return isNaN(o)?s:o};let Nc;const iu=()=>Nc||(Nc=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function gl(s,...o){console.warn(`[Vue warn] ${s}`,...o)}let bs;class pu{constructor(o=!1){this.detached=o,this._active=!0,this.effects=[],this.cleanups=[],this.parent=bs,!o&&bs&&(this.index=(bs.scopes||(bs.scopes=[])).push(this)-1)}get active(){return this._active}run(o){if(this._active){const n=bs;try{return bs=this,o()}finally{bs=n}}else gl("cannot run an inactive effect scope.")}on(){bs=this}off(){bs=this.parent}stop(o){if(this._active){let n,t;for(n=0,t=this.effects.length;n<t;n++)this.effects[n].stop();for(n=0,t=this.cleanups.length;n<t;n++)this.cleanups[n]();if(this.scopes)for(n=0,t=this.scopes.length;n<t;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!o){const l=this.parent.scopes.pop();l&&l!==this&&(this.parent.scopes[this.index]=l,l.index=this.index)}this.parent=void 0,this._active=!1}}}function Nf(s){return new pu(s)}function qf(s,o=bs){o&&o.active&&o.effects.push(s)}function Va(){return bs}function uu(s){bs?bs.cleanups.push(s):gl("onScopeDispose() is called when there is no active effect scope to be associated with.")}const ja=s=>{const o=new Set(s);return o.w=0,o.n=0,o},yu=s=>(s.w&Po)>0,du=s=>(s.n&Po)>0,Hf=({deps:s})=>{if(s.length)for(let o=0;o<s.length;o++)s[o].w|=Po},Uf=s=>{const{deps:o}=s;if(o.length){let n=0;for(let t=0;t<o.length;t++){const l=o[t];yu(l)&&!du(l)?l.delete(s):o[n++]=l,l.w&=~Po,l.n&=~Po}o.length=n}},vl=new WeakMap;let et=0,Po=1;const Hr=30;let ds;const sn=Symbol("iterate"),Ur=Symbol("Map key iterate");class Ga{constructor(o,n=null,t){this.fn=o,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,qf(this,t)}run(){if(!this.active)return this.fn();let o=ds,n=Ro;for(;o;){if(o===this)return;o=o.parent}try{return this.parent=ds,ds=this,Ro=!0,Po=1<<++et,et<=Hr?Hf(this):qc(this),this.fn()}finally{et<=Hr&&Uf(this),Po=1<<--et,ds=this.parent,Ro=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){ds===this?this.deferStop=!0:this.active&&(qc(this),this.onStop&&this.onStop(),this.active=!1)}}function qc(s){const{deps:o}=s;if(o.length){for(let n=0;n<o.length;n++)o[n].delete(s);o.length=0}}let Ro=!0;const fu=[];function un(){fu.push(Ro),Ro=!1}function yn(){const s=fu.pop();Ro=s===void 0?!0:s}function vs(s,o,n){if(Ro&&ds){let t=vl.get(s);t||vl.set(s,t=new Map);let l=t.get(n);l||t.set(n,l=ja()),mu(l,{effect:ds,target:s,type:o,key:n})}}function mu(s,o){let n=!1;et<=Hr?du(s)||(s.n|=Po,n=!yu(s)):n=!s.has(ds),n&&(s.add(ds),ds.deps.push(s),ds.onTrack&&ds.onTrack(Object.assign({effect:ds},o)))}function yo(s,o,n,t,l,a){const c=vl.get(s);if(!c)return;let i=[];if(o==="clear")i=[...c.values()];else if(n==="length"&&ie(s)){const u=Number(t);c.forEach((y,d)=>{(d==="length"||d>=u)&&i.push(y)})}else switch(n!==void 0&&i.push(c.get(n)),o){case"add":ie(s)?Ua(n)&&i.push(c.get("length")):(i.push(c.get(sn)),en(s)&&i.push(c.get(Ur)));break;case"delete":ie(s)||(i.push(c.get(sn)),en(s)&&i.push(c.get(Ur)));break;case"set":en(s)&&i.push(c.get(sn));break}const p={target:s,type:o,key:n,newValue:t,oldValue:l,oldTarget:a};if(i.length===1)i[0]&&Vr(i[0],p);else{const u=[];for(const y of i)y&&u.push(...y);Vr(ja(u),p)}}function Vr(s,o){const n=ie(s)?s:[...s];for(const t of n)t.computed&&Hc(t,o);for(const t of n)t.computed||Hc(t,o)}function Hc(s,o){(s!==ds||s.allowRecurse)&&(s.onTrigger&&s.onTrigger(We({effect:s},o)),s.scheduler?s.scheduler():s.run())}function Vf(s,o){var n;return(n=vl.get(s))===null||n===void 0?void 0:n.get(o)}const jf=No("__proto__,__v_isRef,__isVue"),hu=new Set(Object.getOwnPropertyNames(Symbol).filter(s=>s!=="arguments"&&s!=="caller").map(s=>Symbol[s]).filter(Na)),Gf=Hl(),Wf=Hl(!1,!0),zf=Hl(!0),Kf=Hl(!0,!0),Uc=Yf();function Yf(){const s={};return["includes","indexOf","lastIndexOf"].forEach(o=>{s[o]=function(...n){const t=me(this);for(let a=0,c=this.length;a<c;a++)vs(t,"get",a+"");const l=t[o](...n);return l===-1||l===!1?t[o](...n.map(me)):l}}),["push","pop","shift","unshift","splice"].forEach(o=>{s[o]=function(...n){un();const t=me(this)[o].apply(this,n);return yn(),t}}),s}function Zf(s){const o=me(this);return vs(o,"has",s),o.hasOwnProperty(s)}function Hl(s=!1,o=!1){return function(t,l,a){if(l==="__v_isReactive")return!s;if(l==="__v_isReadonly")return s;if(l==="__v_isShallow")return o;if(l==="__v_raw"&&a===(s?o?Eu:Du:o?Cu:vu).get(t))return t;const c=ie(t);if(!s){if(c&&ke(Uc,l))return Reflect.get(Uc,l,a);if(l==="hasOwnProperty")return Zf}const i=Reflect.get(t,l,a);return(Na(l)?hu.has(l):jf(l))||(s||vs(t,"get",l),o)?i:Ie(i)?c&&Ua(l)?i:i.value:Le(i)?s?Zs(i):Ge(i):i}}const Qf=_u(),Jf=_u(!0);function _u(s=!1){return function(n,t,l,a){let c=n[t];if(Oo(c)&&Ie(c)&&!Ie(l))return!1;if(!s&&(!Cl(l)&&!Oo(l)&&(c=me(c),l=me(l)),!ie(n)&&Ie(c)&&!Ie(l)))return c.value=l,!0;const i=ie(n)&&Ua(t)?Number(t)<n.length:ke(n,t),p=Reflect.set(n,t,l,a);return n===me(a)&&(i?Bt(l,c)&&yo(n,"set",t,l,c):yo(n,"add",t,l)),p}}function Xf(s,o){const n=ke(s,o),t=s[o],l=Reflect.deleteProperty(s,o);return l&&n&&yo(s,"delete",o,void 0,t),l}function e8(s,o){const n=Reflect.has(s,o);return(!Na(o)||!hu.has(o))&&vs(s,"has",o),n}function s8(s){return vs(s,"iterate",ie(s)?"length":sn),Reflect.ownKeys(s)}const Bu={get:Gf,set:Qf,deleteProperty:Xf,has:e8,ownKeys:s8},Au={get:zf,set(s,o){return gl(`Set operation on key "${String(o)}" failed: target is readonly.`,s),!0},deleteProperty(s,o){return gl(`Delete operation on key "${String(o)}" failed: target is readonly.`,s),!0}},o8=We({},Bu,{get:Wf,set:Jf}),n8=We({},Au,{get:Kf}),Wa=s=>s,Ul=s=>Reflect.getPrototypeOf(s);function Yt(s,o,n=!1,t=!1){s=s.__v_raw;const l=me(s),a=me(o);n||(o!==a&&vs(l,"get",o),vs(l,"get",a));const{has:c}=Ul(l),i=t?Wa:n?za:At;if(c.call(l,o))return i(s.get(o));if(c.call(l,a))return i(s.get(a));s!==l&&s.get(o)}function Zt(s,o=!1){const n=this.__v_raw,t=me(n),l=me(s);return o||(s!==l&&vs(t,"has",s),vs(t,"has",l)),s===l?n.has(s):n.has(s)||n.has(l)}function Qt(s,o=!1){return s=s.__v_raw,!o&&vs(me(s),"iterate",sn),Reflect.get(s,"size",s)}function Vc(s){s=me(s);const o=me(this);return Ul(o).has.call(o,s)||(o.add(s),yo(o,"add",s,s)),this}function jc(s,o){o=me(o);const n=me(this),{has:t,get:l}=Ul(n);let a=t.call(n,s);a?gu(n,t,s):(s=me(s),a=t.call(n,s));const c=l.call(n,s);return n.set(s,o),a?Bt(o,c)&&yo(n,"set",s,o,c):yo(n,"add",s,o),this}function Gc(s){const o=me(this),{has:n,get:t}=Ul(o);let l=n.call(o,s);l?gu(o,n,s):(s=me(s),l=n.call(o,s));const a=t?t.call(o,s):void 0,c=o.delete(s);return l&&yo(o,"delete",s,void 0,a),c}function Wc(){const s=me(this),o=s.size!==0,n=en(s)?new Map(s):new Set(s),t=s.clear();return o&&yo(s,"clear",void 0,void 0,n),t}function Jt(s,o){return function(t,l){const a=this,c=a.__v_raw,i=me(c),p=o?Wa:s?za:At;return!s&&vs(i,"iterate",sn),c.forEach((u,y)=>t.call(l,p(u),p(y),a))}}function Xt(s,o,n){return function(...t){const l=this.__v_raw,a=me(l),c=en(a),i=s==="entries"||s===Symbol.iterator&&c,p=s==="keys"&&c,u=l[s](...t),y=n?Wa:o?za:At;return!o&&vs(a,"iterate",p?Ur:sn),{next(){const{value:d,done:f}=u.next();return f?{value:d,done:f}:{value:i?[y(d[0]),y(d[1])]:y(d),done:f}},[Symbol.iterator](){return this}}}}function Bo(s){return function(...o){{const n=o[0]?`on key "${o[0]}" `:"";console.warn(`${cn(s)} operation ${n}failed: target is readonly.`,me(this))}return s==="delete"?!1:this}}function t8(){const s={get(a){return Yt(this,a)},get size(){return Qt(this)},has:Zt,add:Vc,set:jc,delete:Gc,clear:Wc,forEach:Jt(!1,!1)},o={get(a){return Yt(this,a,!1,!0)},get size(){return Qt(this)},has:Zt,add:Vc,set:jc,delete:Gc,clear:Wc,forEach:Jt(!1,!0)},n={get(a){return Yt(this,a,!0)},get size(){return Qt(this,!0)},has(a){return Zt.call(this,a,!0)},add:Bo("add"),set:Bo("set"),delete:Bo("delete"),clear:Bo("clear"),forEach:Jt(!0,!1)},t={get(a){return Yt(this,a,!0,!0)},get size(){return Qt(this,!0)},has(a){return Zt.call(this,a,!0)},add:Bo("add"),set:Bo("set"),delete:Bo("delete"),clear:Bo("clear"),forEach:Jt(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(a=>{s[a]=Xt(a,!1,!1),n[a]=Xt(a,!0,!1),o[a]=Xt(a,!1,!0),t[a]=Xt(a,!0,!0)}),[s,n,o,t]}const[l8,r8,a8,c8]=t8();function Vl(s,o){const n=o?s?c8:a8:s?r8:l8;return(t,l,a)=>l==="__v_isReactive"?!s:l==="__v_isReadonly"?s:l==="__v_raw"?t:Reflect.get(ke(n,l)&&l in t?n:t,l,a)}const i8={get:Vl(!1,!1)},p8={get:Vl(!1,!0)},u8={get:Vl(!0,!1)},y8={get:Vl(!0,!0)};function gu(s,o,n){const t=me(n);if(t!==n&&o.call(s,t)){const l=Ha(s);console.warn(`Reactive ${l} contains both the raw and reactive versions of the same object${l==="Map"?" as keys":""}, which can lead to inconsistencies. Avoid differentiating between the raw and reactive versions of an object and only use the reactive version if possible.`)}}const vu=new WeakMap,Cu=new WeakMap,Du=new WeakMap,Eu=new WeakMap;function d8(s){switch(s){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function f8(s){return s.__v_skip||!Object.isExtensible(s)?0:d8(Ha(s))}function Ge(s){return Oo(s)?s:jl(s,!1,Bu,i8,vu)}function m8(s){return jl(s,!1,o8,p8,Cu)}function Zs(s){return jl(s,!0,Au,u8,Du)}function bn(s){return jl(s,!0,n8,y8,Eu)}function jl(s,o,n,t,l){if(!Le(s))return console.warn(`value cannot be made reactive: ${String(s)}`),s;if(s.__v_raw&&!(o&&s.__v_isReactive))return s;const a=l.get(s);if(a)return a;const c=f8(s);if(c===0)return s;const i=new Proxy(s,c===2?t:n);return l.set(s,i),i}function on(s){return Oo(s)?on(s.__v_raw):!!(s&&s.__v_isReactive)}function Oo(s){return!!(s&&s.__v_isReadonly)}function Cl(s){return!!(s&&s.__v_isShallow)}function Dl(s){return on(s)||Oo(s)}function me(s){const o=s&&s.__v_raw;return o?me(o):s}function Gl(s){return Al(s,"__v_skip",!0),s}const At=s=>Le(s)?Ge(s):s,za=s=>Le(s)?Zs(s):s;function Ka(s){Ro&&ds&&(s=me(s),mu(s.dep||(s.dep=ja()),{target:s,type:"get",key:"value"}))}function Ya(s,o){s=me(s);const n=s.dep;n&&Vr(n,{target:s,type:"set",key:"value",newValue:o})}function Ie(s){return!!(s&&s.__v_isRef===!0)}function X(s){return bu(s,!1)}function eo(s){return bu(s,!0)}function bu(s,o){return Ie(s)?s:new h8(s,o)}class h8{constructor(o,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?o:me(o),this._value=n?o:At(o)}get value(){return Ka(this),this._value}set value(o){const n=this.__v_isShallow||Cl(o)||Oo(o);o=n?o:me(o),Bt(o,this._rawValue)&&(this._rawValue=o,this._value=n?o:At(o),Ya(this,o))}}function k(s){return Ie(s)?s.value:s}const _8={get:(s,o,n)=>k(Reflect.get(s,o,n)),set:(s,o,n,t)=>{const l=s[o];return Ie(l)&&!Ie(n)?(l.value=n,!0):Reflect.set(s,o,n,t)}};function ku(s){return on(s)?s:new Proxy(s,_8)}class B8{constructor(o){this.dep=void 0,this.__v_isRef=!0;const{get:n,set:t}=o(()=>Ka(this),()=>Ya(this));this._get=n,this._set=t}get value(){return this._get()}set value(o){this._set(o)}}function wu(s){return new B8(s)}function A8(s){Dl(s)||console.warn("toRefs() expects a reactive object but received a plain one.");const o=ie(s)?new Array(s.length):{};for(const n in s)o[n]=v8(s,n);return o}class g8{constructor(o,n,t){this._object=o,this._key=n,this._defaultValue=t,this.__v_isRef=!0}get value(){const o=this._object[this._key];return o===void 0?this._defaultValue:o}set value(o){this._object[this._key]=o}get dep(){return Vf(me(this._object),this._key)}}function v8(s,o,n){const t=s[o];return Ie(t)?t:new g8(s,o,n)}var Su;class C8{constructor(o,n,t,l){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this[Su]=!1,this._dirty=!0,this.effect=new Ga(o,()=>{this._dirty||(this._dirty=!0,Ya(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!l,this.__v_isReadonly=t}get value(){const o=me(this);return Ka(o),(o._dirty||!o._cacheable)&&(o._dirty=!1,o._value=o.effect.run()),o._value}set value(o){this._setter(o)}}Su="__v_isReadonly";function D8(s,o,n=!1){let t,l;const a=de(s);a?(t=s,l=()=>{console.warn("Write operation failed: computed value is readonly")}):(t=s.get,l=s.set);const c=new C8(t,l,a||!l,n);return o&&!n&&(c.effect.onTrack=o.onTrack,c.effect.onTrigger=o.onTrigger),c}const nn=[];function il(s){nn.push(s)}function pl(){nn.pop()}function q(s,...o){un();const n=nn.length?nn[nn.length-1].component:null,t=n&&n.appContext.config.warnHandler,l=E8();if(t)po(t,n,11,[s+o.join(""),n&&n.proxy,l.map(({vnode:a})=>`at <${or(n,a.type)}>`).join(`
`),l]);else{const a=[`[Vue warn]: ${s}`,...o];l.length&&a.push(`
`,...b8(l)),console.warn(...a)}yn()}function E8(){let s=nn[nn.length-1];if(!s)return[];const o=[];for(;s;){const n=o[0];n&&n.vnode===s?n.recurseCount++:o.push({vnode:s,recurseCount:0});const t=s.component&&s.component.parent;s=t&&t.vnode}return o}function b8(s){const o=[];return s.forEach((n,t)=>{o.push(...t===0?[]:[`
`],...k8(n))}),o}function k8({vnode:s,recurseCount:o}){const n=o>0?`... (${o} recursive calls)`:"",t=s.component?s.component.parent==null:!1,l=` at <${or(s.component,s.type,t)}`,a=">"+n;return s.props?[l,...w8(s.props),a]:[l+a]}function w8(s){const o=[],n=Object.keys(s);return n.slice(0,3).forEach(t=>{o.push(...Ru(t,s[t]))}),n.length>3&&o.push(" ..."),o}function Ru(s,o,n){return je(o)?(o=JSON.stringify(o),n?o:[`${s}=${o}`]):typeof o=="number"||typeof o=="boolean"||o==null?n?o:[`${s}=${o}`]:Ie(o)?(o=Ru(s,me(o.value),!0),n?o:[`${s}=Ref<`,o,">"]):de(o)?[`${s}=fn${o.name?`<${o.name}>`:""}`]:(o=me(o),n?o:[`${s}=`,o])}function S8(s,o){s!==void 0&&(typeof s!="number"?q(`${o} is not a valid number - got ${JSON.stringify(s)}.`):isNaN(s)&&q(`${o} is NaN - the duration expression might be incorrect.`))}const Za={sp:"serverPrefetch hook",bc:"beforeCreate hook",c:"created hook",bm:"beforeMount hook",m:"mounted hook",bu:"beforeUpdate hook",u:"updated",bum:"beforeUnmount hook",um:"unmounted hook",a:"activated hook",da:"deactivated hook",ec:"errorCaptured hook",rtc:"renderTracked hook",rtg:"renderTriggered hook",[0]:"setup function",[1]:"render function",[2]:"watcher getter",[3]:"watcher callback",[4]:"watcher cleanup function",[5]:"native event handler",[6]:"component event handler",[7]:"vnode hook",[8]:"directive hook",[9]:"transition hook",[10]:"app errorHandler",[11]:"app warnHandler",[12]:"ref function",[13]:"async component loader",[14]:"scheduler flush. This is likely a Vue internals bug. Please open an issue at https://new-issue.vuejs.org/?repo=vuejs/core"};function po(s,o,n,t){let l;try{l=t?s(...t):s()}catch(a){Wl(a,o,n)}return l}function Ms(s,o,n,t){if(de(s)){const a=po(s,o,n,t);return a&&qa(a)&&a.catch(c=>{Wl(c,o,n)}),a}const l=[];for(let a=0;a<s.length;a++)l.push(Ms(s[a],o,n,t));return l}function Wl(s,o,n,t=!0){const l=o?o.vnode:null;if(o){let a=o.parent;const c=o.proxy,i=Za[n];for(;a;){const u=a.ec;if(u){for(let y=0;y<u.length;y++)if(u[y](s,c,i)===!1)return}a=a.parent}const p=o.appContext.config.errorHandler;if(p){po(p,null,10,[s,c,i]);return}}R8(s,n,l,t)}function R8(s,o,n,t=!0){{const l=Za[o];if(n&&il(n),q(`Unhandled error${l?` during execution of ${l}`:""}`),n&&pl(),t)throw s;console.error(s)}}let gt=!1,jr=!1;const as=[];let Ks=0;const Sn=[];let zs=null,Co=0;const xu=Promise.resolve();let Qa=null;const x8=100;function ns(s){const o=Qa||xu;return s?o.then(this?s.bind(this):s):o}function $8(s){let o=Ks+1,n=as.length;for(;o<n;){const t=o+n>>>1;vt(as[t])<s?o=t+1:n=t}return o}function zl(s){(!as.length||!as.includes(s,gt&&s.allowRecurse?Ks+1:Ks))&&(s.id==null?as.push(s):as.splice($8(s.id),0,s),$u())}function $u(){!gt&&!jr&&(jr=!0,Qa=xu.then(Tu))}function F8(s){const o=as.indexOf(s);o>Ks&&as.splice(o,1)}function Fu(s){ie(s)?Sn.push(...s):(!zs||!zs.includes(s,s.allowRecurse?Co+1:Co))&&Sn.push(s),$u()}function zc(s,o=gt?Ks+1:0){for(s=s||new Map;o<as.length;o++){const n=as[o];if(n&&n.pre){if(Ja(s,n))continue;as.splice(o,1),o--,n()}}}function Iu(s){if(Sn.length){const o=[...new Set(Sn)];if(Sn.length=0,zs){zs.push(...o);return}for(zs=o,s=s||new Map,zs.sort((n,t)=>vt(n)-vt(t)),Co=0;Co<zs.length;Co++)Ja(s,zs[Co])||zs[Co]();zs=null,Co=0}}const vt=s=>s.id==null?1/0:s.id,I8=(s,o)=>{const n=vt(s)-vt(o);if(n===0){if(s.pre&&!o.pre)return-1;if(o.pre&&!s.pre)return 1}return n};function Tu(s){jr=!1,gt=!0,s=s||new Map,as.sort(I8);const o=n=>Ja(s,n);try{for(Ks=0;Ks<as.length;Ks++){const n=as[Ks];if(n&&n.active!==!1){if(o(n))continue;po(n,null,14)}}}finally{Ks=0,as.length=0,Iu(s),gt=!1,Qa=null,(as.length||Sn.length)&&Tu(s)}}function Ja(s,o){if(!s.has(o))s.set(o,1);else{const n=s.get(o);if(n>x8){const t=o.ownerInstance,l=t&&bt(t.type);return q(`Maximum recursive updates exceeded${l?` in component <${l}>`:""}. This means you have a reactive effect that is mutating its own dependencies and thus recursively triggering itself. Possible sources include component template, render function, updated hook or watcher source function.`),!0}else s.set(o,n+1)}}let xo=!1;const Cn=new Set;iu().__VUE_HMR_RUNTIME__={createRecord:cr(Mu),rerender:cr(P8),reload:cr(O8)};const pn=new Map;function T8(s){const o=s.type.__hmrId;let n=pn.get(o);n||(Mu(o,s.type),n=pn.get(o)),n.instances.add(s)}function M8(s){pn.get(s.type.__hmrId).instances.delete(s)}function Mu(s,o){return pn.has(s)?!1:(pn.set(s,{initialDef:lt(o),instances:new Set}),!0)}function lt(s){return fy(s)?s.__vccOpts:s}function P8(s,o){const n=pn.get(s);n&&(n.initialDef.render=o,[...n.instances].forEach(t=>{o&&(t.render=o,lt(t.type).render=o),t.renderCache=[],xo=!0,t.update(),xo=!1}))}function O8(s,o){const n=pn.get(s);if(!n)return;o=lt(o),Kc(n.initialDef,o);const t=[...n.instances];for(const l of t){const a=lt(l.type);Cn.has(a)||(a!==n.initialDef&&Kc(a,o),Cn.add(a)),l.appContext.optionsCache.delete(l.type),l.ceReload?(Cn.add(a),l.ceReload(o.styles),Cn.delete(a)):l.parent?zl(l.parent.update):l.appContext.reload?l.appContext.reload():typeof window<"u"?window.location.reload():console.warn("[HMR] Root or manually mounted instance modified. Full reload required.")}Fu(()=>{for(const l of t)Cn.delete(lt(l.type))})}function Kc(s,o){We(s,o);for(const n in s)n!=="__file"&&!(n in o)&&delete s[n]}function cr(s){return(o,n)=>{try{return s(o,n)}catch(t){console.error(t),console.warn("[HMR] Something went wrong during Vue component hot-reload. Full reload required.")}}}let Ys,st=[],Gr=!1;function Nt(s,...o){Ys?Ys.emit(s,...o):Gr||st.push({event:s,args:o})}function Pu(s,o){var n,t;Ys=s,Ys?(Ys.enabled=!0,st.forEach(({event:l,args:a})=>Ys.emit(l,...a)),st=[]):typeof window<"u"&&window.HTMLElement&&!(!((t=(n=window.navigator)===null||n===void 0?void 0:n.userAgent)===null||t===void 0)&&t.includes("jsdom"))?((o.__VUE_DEVTOOLS_HOOK_REPLAY__=o.__VUE_DEVTOOLS_HOOK_REPLAY__||[]).push(a=>{Pu(a,o)}),setTimeout(()=>{Ys||(o.__VUE_DEVTOOLS_HOOK_REPLAY__=null,Gr=!0,st=[])},3e3)):(Gr=!0,st=[])}function L8(s,o){Nt("app:init",s,o,{Fragment:Me,Text:Vt,Comment:es,Static:ul})}function N8(s){Nt("app:unmount",s)}const Wr=Xa("component:added"),Ou=Xa("component:updated"),q8=Xa("component:removed"),H8=s=>{Ys&&typeof Ys.cleanupBuffer=="function"&&!Ys.cleanupBuffer(s)&&q8(s)};function Xa(s){return o=>{Nt(s,o.appContext.app,o.uid,o.parent?o.parent.uid:void 0,o)}}const U8=Lu("perf:start"),V8=Lu("perf:end");function Lu(s){return(o,n,t)=>{Nt(s,o.appContext.app,o.uid,o,n,t)}}function j8(s,o,n){Nt("component:emit",s.appContext.app,s,o,n)}function G8(s,o,...n){if(s.isUnmounted)return;const t=s.vnode.props||He;{const{emitsOptions:y,propsOptions:[d]}=s;if(y)if(!(o in y))(!d||!(Go(o)in d))&&q(`Component emitted event "${o}" but it is neither declared in the emits option nor as an "${Go(o)}" prop.`);else{const f=y[o];de(f)&&(f(...n)||q(`Invalid event arguments: event validation failed for event "${o}".`))}}let l=n;const a=o.startsWith("update:"),c=a&&o.slice(7);if(c&&c in t){const y=`${c==="modelValue"?"model":c}Modifiers`,{number:d,trim:f}=t[y]||He;f&&(l=n.map(h=>je(h)?h.trim():h)),d&&(l=n.map(qr))}j8(s,o,l);{const y=o.toLowerCase();y!==o&&t[Go(y)]&&q(`Event "${y}" is emitted in component ${or(s,s.type)} but the handler is registered for "${o}". Note that HTML attributes are case-insensitive and you cannot use v-on to listen to camelCase events when using in-DOM templates. You should probably use "${uo(o)}" instead of "${o}".`)}let i,p=t[i=Go(o)]||t[i=Go(Xs(o))];!p&&a&&(p=t[i=Go(uo(o))]),p&&Ms(p,s,6,l);const u=t[i+"Once"];if(u){if(!s.emitted)s.emitted={};else if(s.emitted[i])return;s.emitted[i]=!0,Ms(u,s,6,l)}}function Nu(s,o,n=!1){const t=o.emitsCache,l=t.get(s);if(l!==void 0)return l;const a=s.emits;let c={},i=!1;if(!de(s)){const p=u=>{const y=Nu(u,o,!0);y&&(i=!0,We(c,y))};!n&&o.mixins.length&&o.mixins.forEach(p),s.extends&&p(s.extends),s.mixins&&s.mixins.forEach(p)}return!a&&!i?(Le(s)&&t.set(s,null),null):(ie(a)?a.forEach(p=>c[p]=null):We(c,a),Le(s)&&t.set(s,c),c)}function Kl(s,o){return!s||!Ot(o)?!1:(o=o.slice(2).replace(/Once$/,""),ke(s,o[0].toLowerCase()+o.slice(1))||ke(s,uo(o))||ke(s,o))}let Xe=null,Yl=null;function El(s){const o=Xe;return Xe=s,Yl=s&&s.type.__scopeId||null,o}function HS(s){Yl=s}function US(){Yl=null}function E(s,o=Xe,n){if(!o||s._n)return s;const t=(...l)=>{t._d&&ci(-1);const a=El(o);let c;try{c=s(...l)}finally{El(a),t._d&&ci(1)}return Ou(o),c};return t._n=!0,t._c=!0,t._d=!0,t}let zr=!1;function bl(){zr=!0}function ir(s){const{type:o,vnode:n,proxy:t,withProxy:l,props:a,propsOptions:[c],slots:i,attrs:p,emit:u,render:y,renderCache:d,data:f,setupState:h,ctx:m,inheritAttrs:B}=s;let A,b;const v=El(s);zr=!1;try{if(n.shapeFlag&4){const T=l||t;A=Hs(y.call(T,T,d,a,h,f,m)),b=p}else{const T=o;p===a&&bl(),A=Hs(T.length>1?T(a,{get attrs(){return bl(),p},slots:i,emit:u}):T(a,null)),b=o.props?p:z8(p)}}catch(T){at.length=0,Wl(T,s,1),A=R(es)}let D=A,w;if(A.patchFlag>0&&A.patchFlag&2048&&([D,w]=W8(A)),b&&B!==!1){const T=Object.keys(b),{shapeFlag:H}=D;if(T.length){if(H&7)c&&T.some(Bl)&&(b=K8(b,c)),D=Vs(D,b);else if(!zr&&D.type!==es){const z=Object.keys(p),I=[],G=[];for(let ne=0,ue=z.length;ne<ue;ne++){const ee=z[ne];Ot(ee)?Bl(ee)||I.push(ee[2].toLowerCase()+ee.slice(3)):G.push(ee)}G.length&&q(`Extraneous non-props attributes (${G.join(", ")}) were passed to component but could not be automatically inherited because component renders fragment or text root nodes.`),I.length&&q(`Extraneous non-emits event listeners (${I.join(", ")}) were passed to component but could not be automatically inherited because component renders fragment or text root nodes. If the listener is intended to be a component custom event listener only, declare it using the "emits" option.`)}}}return n.dirs&&(Yc(D)||q("Runtime directive used on component with non-element root node. The directives will not function as intended."),D=Vs(D),D.dirs=D.dirs?D.dirs.concat(n.dirs):n.dirs),n.transition&&(Yc(D)||q("Component inside <Transition> renders non-element root node that cannot be animated."),D.transition=n.transition),w?w(D):A=D,El(v),A}const W8=s=>{const o=s.children,n=s.dynamicChildren,t=qu(o);if(!t)return[s,void 0];const l=o.indexOf(t),a=n?n.indexOf(t):-1,c=i=>{o[l]=i,n&&(a>-1?n[a]=i:i.patchFlag>0&&(s.dynamicChildren=[...n,i]))};return[Hs(t),c]};function qu(s){let o;for(let n=0;n<s.length;n++){const t=s[n];if(mo(t)){if(t.type!==es||t.children==="v-if"){if(o)return;o=t}}else return}return o}const z8=s=>{let o;for(const n in s)(n==="class"||n==="style"||Ot(n))&&((o||(o={}))[n]=s[n]);return o},K8=(s,o)=>{const n={};for(const t in s)(!Bl(t)||!(t.slice(9)in o))&&(n[t]=s[t]);return n},Yc=s=>s.shapeFlag&7||s.type===es;function Y8(s,o,n){const{props:t,children:l,component:a}=s,{props:c,children:i,patchFlag:p}=o,u=a.emitsOptions;if((l||i)&&xo||o.dirs||o.transition)return!0;if(n&&p>=0){if(p&1024)return!0;if(p&16)return t?Zc(t,c,u):!!c;if(p&8){const y=o.dynamicProps;for(let d=0;d<y.length;d++){const f=y[d];if(c[f]!==t[f]&&!Kl(u,f))return!0}}}else return(l||i)&&(!i||!i.$stable)?!0:t===c?!1:t?c?Zc(t,c,u):!0:!!c;return!1}function Zc(s,o,n){const t=Object.keys(o);if(t.length!==Object.keys(s).length)return!0;for(let l=0;l<t.length;l++){const a=t[l];if(o[a]!==s[a]&&!Kl(n,a))return!0}return!1}function Z8({vnode:s,parent:o},n){for(;o&&o.subTree===s;)(s=o.vnode).el=n,o=o.parent}const Hu=s=>s.__isSuspense;function Q8(s,o){o&&o.pendingBranch?ie(s)?o.effects.push(...s):o.effects.push(s):Fu(s)}function ks(s,o){if(!ze)q("provide() can only be used inside setup().");else{let n=ze.provides;const t=ze.parent&&ze.parent.provides;t===n&&(n=ze.provides=Object.create(t)),n[s]=o}}function F(s,o,n=!1){const t=ze||Xe;if(t){const l=t.parent==null?t.vnode.appContext&&t.vnode.appContext.provides:t.parent.provides;if(l&&s in l)return l[s];if(arguments.length>1)return n&&de(o)?o.call(t.proxy):o;q(`injection "${String(s)}" not found.`)}else q("inject() can only be used inside setup() or functional components.")}function dn(s,o){return ec(s,null,o)}const el={};function Ae(s,o,n){return de(o)||q("`watch(fn, options?)` signature has been moved to a separate API. Use `watchEffect(fn, options?)` instead. `watch` now only supports `watch(source, cb, options?) signature."),ec(s,o,n)}function ec(s,o,{immediate:n,deep:t,flush:l,onTrack:a,onTrigger:c}=He){o||(n!==void 0&&q('watch() "immediate" option is only respected when using the watch(source, callback, options?) signature.'),t!==void 0&&q('watch() "deep" option is only respected when using the watch(source, callback, options?) signature.'));const i=w=>{q("Invalid watch source: ",w,"A watch source can only be a getter/effect function, a ref, a reactive object, or an array of these types.")},p=Va()===(ze==null?void 0:ze.scope)?ze:null;let u,y=!1,d=!1;if(Ie(s)?(u=()=>s.value,y=Cl(s)):on(s)?(u=()=>s,t=!0):ie(s)?(d=!0,y=s.some(w=>on(w)||Cl(w)),u=()=>s.map(w=>{if(Ie(w))return w.value;if(on(w))return Qo(w);if(de(w))return po(w,p,2);i(w)})):de(s)?o?u=()=>po(s,p,2):u=()=>{if(!(p&&p.isUnmounted))return f&&f(),Ms(s,p,3,[h])}:(u=As,i(s)),o&&t){const w=u;u=()=>Qo(w())}let f,h=w=>{f=v.onStop=()=>{po(w,p,4)}},m;if(Et)if(h=As,o?n&&Ms(o,p,3,[u(),d?[]:void 0,h]):u(),l==="sync"){const w=nh();m=w.__watcherHandles||(w.__watcherHandles=[])}else return As;let B=d?new Array(s.length).fill(el):el;const A=()=>{if(v.active)if(o){const w=v.run();(t||y||(d?w.some((T,H)=>Bt(T,B[H])):Bt(w,B)))&&(f&&f(),Ms(o,p,3,[w,B===el?void 0:d&&B[0]===el?[]:B,h]),B=w)}else v.run()};A.allowRecurse=!!o;let b;l==="sync"?b=A:l==="post"?b=()=>os(A,p&&p.suspense):(A.pre=!0,p&&(A.id=p.uid),b=()=>zl(A));const v=new Ga(u,b);v.onTrack=a,v.onTrigger=c,o?n?A():B=v.run():l==="post"?os(v.run.bind(v),p&&p.suspense):v.run();const D=()=>{v.stop(),p&&p.scope&&La(p.scope.effects,v)};return m&&m.push(D),D}function J8(s,o,n){const t=this.proxy,l=je(s)?s.includes(".")?Uu(t,s):()=>t[s]:s.bind(t,t);let a;de(o)?a=o:(a=o.handler,n=o);const c=ze;Mn(this);const i=ec(l,a.bind(t),n);return c?Mn(c):ln(),i}function Uu(s,o){const n=o.split(".");return()=>{let t=s;for(let l=0;l<n.length&&t;l++)t=t[n[l]];return t}}function Qo(s,o){if(!Le(s)||s.__v_skip||(o=o||new Set,o.has(s)))return s;if(o.add(s),Ie(s))Qo(s.value,o);else if(ie(s))for(let n=0;n<s.length;n++)Qo(s[n],o);else if(ru(s)||en(s))s.forEach(n=>{Qo(n,o)});else if(cu(s))for(const n in s)Qo(s[n],o);return s}function Vu(){const s={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return fn(()=>{s.isMounted=!0}),Ht(()=>{s.isUnmounting=!0}),s}const $s=[Function,Array],X8={name:"BaseTransition",props:{mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:$s,onEnter:$s,onAfterEnter:$s,onEnterCancelled:$s,onBeforeLeave:$s,onLeave:$s,onAfterLeave:$s,onLeaveCancelled:$s,onBeforeAppear:$s,onAppear:$s,onAfterAppear:$s,onAppearCancelled:$s},setup(s,{slots:o}){const n=xs(),t=Vu();let l;return()=>{const a=o.default&&sc(o.default(),!0);if(!a||!a.length)return;let c=a[0];if(a.length>1){let B=!1;for(const A of a)if(A.type!==es){if(B){q("<transition> can only be used on a single element or component. Use <transition-group> for lists.");break}c=A,B=!0}}const i=me(s),{mode:p}=i;if(p&&p!=="in-out"&&p!=="out-in"&&p!=="default"&&q(`invalid <transition> mode: ${p}`),t.isLeaving)return pr(c);const u=Qc(c);if(!u)return pr(c);const y=Ct(u,i,t,n);Tn(u,y);const d=n.subTree,f=d&&Qc(d);let h=!1;const{getTransitionKey:m}=u.type;if(m){const B=m();l===void 0?l=B:B!==l&&(l=B,h=!0)}if(f&&f.type!==es&&(!wo(u,f)||h)){const B=Ct(f,i,t,n);if(Tn(f,B),p==="out-in")return t.isLeaving=!0,B.afterLeave=()=>{t.isLeaving=!1,n.update.active!==!1&&n.update()},pr(c);p==="in-out"&&u.type!==es&&(B.delayLeave=(A,b,v)=>{const D=ju(t,f);D[String(f.key)]=f,A._leaveCb=()=>{b(),A._leaveCb=void 0,delete y.delayedLeave},y.delayedLeave=v})}return c}}},em=X8;function ju(s,o){const{leavingVNodes:n}=s;let t=n.get(o.type);return t||(t=Object.create(null),n.set(o.type,t)),t}function Ct(s,o,n,t){const{appear:l,mode:a,persisted:c=!1,onBeforeEnter:i,onEnter:p,onAfterEnter:u,onEnterCancelled:y,onBeforeLeave:d,onLeave:f,onAfterLeave:h,onLeaveCancelled:m,onBeforeAppear:B,onAppear:A,onAfterAppear:b,onAppearCancelled:v}=o,D=String(s.key),w=ju(n,s),T=(I,G)=>{I&&Ms(I,t,9,G)},H=(I,G)=>{const ne=G[1];T(I,G),ie(I)?I.every(ue=>ue.length<=1)&&ne():I.length<=1&&ne()},z={mode:a,persisted:c,beforeEnter(I){let G=i;if(!n.isMounted)if(l)G=B||i;else return;I._leaveCb&&I._leaveCb(!0);const ne=w[D];ne&&wo(s,ne)&&ne.el._leaveCb&&ne.el._leaveCb(),T(G,[I])},enter(I){let G=p,ne=u,ue=y;if(!n.isMounted)if(l)G=A||p,ne=b||u,ue=v||y;else return;let ee=!1;const De=I._enterCb=Te=>{ee||(ee=!0,Te?T(ue,[I]):T(ne,[I]),z.delayedLeave&&z.delayedLeave(),I._enterCb=void 0)};G?H(G,[I,De]):De()},leave(I,G){const ne=String(s.key);if(I._enterCb&&I._enterCb(!0),n.isUnmounting)return G();T(d,[I]);let ue=!1;const ee=I._leaveCb=De=>{ue||(ue=!0,G(),De?T(m,[I]):T(h,[I]),I._leaveCb=void 0,w[ne]===s&&delete w[ne])};w[ne]=s,f?H(f,[I,ee]):ee()},clone(I){return Ct(I,o,n,t)}};return z}function pr(s){if(qt(s))return s=Vs(s),s.children=null,s}function Qc(s){return qt(s)?s.children?s.children[0]:void 0:s}function Tn(s,o){s.shapeFlag&6&&s.component?Tn(s.component.subTree,o):s.shapeFlag&128?(s.ssContent.transition=o.clone(s.ssContent),s.ssFallback.transition=o.clone(s.ssFallback)):s.transition=o}function sc(s,o=!1,n){let t=[],l=0;for(let a=0;a<s.length;a++){let c=s[a];const i=n==null?c.key:String(n)+String(c.key!=null?c.key:a);c.type===Me?(c.patchFlag&128&&l++,t=t.concat(sc(c.children,o,i))):(o||c.type!==es)&&t.push(i!=null?Vs(c,{key:i}):c)}if(l>1)for(let a=0;a<t.length;a++)t[a].patchFlag=-2;return t}function Pe(s){return de(s)?{setup:s,name:s.name}:s}const Rn=s=>!!s.type.__asyncLoader,qt=s=>s.type.__isKeepAlive,sm={name:"KeepAlive",__isKeepAlive:!0,props:{include:[String,RegExp,Array],exclude:[String,RegExp,Array],max:[String,Number]},setup(s,{slots:o}){const n=xs(),t=n.ctx;if(!t.renderer)return()=>{const v=o.default&&o.default();return v&&v.length===1?v[0]:v};const l=new Map,a=new Set;let c=null;n.__v_cache=l;const i=n.suspense,{renderer:{p,m:u,um:y,o:{createElement:d}}}=t,f=d("div");t.activate=(v,D,w,T,H)=>{const z=v.component;u(v,D,w,0,i),p(z.vnode,v,D,w,z,i,T,v.slotScopeIds,H),os(()=>{z.isDeactivated=!1,z.a&&bo(z.a);const I=v.props&&v.props.onVnodeMounted;I&&Fs(I,z.parent,v)},i),Wr(z)},t.deactivate=v=>{const D=v.component;u(v,f,null,1,i),os(()=>{D.da&&bo(D.da);const w=v.props&&v.props.onVnodeUnmounted;w&&Fs(w,D.parent,v),D.isDeactivated=!0},i),Wr(D)};function h(v){ur(v),y(v,n,i,!0)}function m(v){l.forEach((D,w)=>{const T=bt(D.type);T&&(!v||!v(T))&&B(w)})}function B(v){const D=l.get(v);!c||!wo(D,c)?h(D):c&&ur(c),l.delete(v),a.delete(v)}Ae(()=>[s.include,s.exclude],([v,D])=>{v&&m(w=>ot(v,w)),D&&m(w=>!ot(D,w))},{flush:"post",deep:!0});let A=null;const b=()=>{A!=null&&l.set(A,yr(n.subTree))};return fn(b),Ql(b),Ht(()=>{l.forEach(v=>{const{subTree:D,suspense:w}=n,T=yr(D);if(v.type===T.type&&v.key===T.key){ur(T);const H=T.component.da;H&&os(H,w);return}h(v)})}),()=>{if(A=null,!o.default)return null;const v=o.default(),D=v[0];if(v.length>1)return q("KeepAlive should contain exactly one component child."),c=null,v;if(!mo(D)||!(D.shapeFlag&4)&&!(D.shapeFlag&128))return c=null,D;let w=yr(D);const T=w.type,H=bt(Rn(w)?w.type.__asyncResolved||{}:T),{include:z,exclude:I,max:G}=s;if(z&&(!H||!ot(z,H))||I&&H&&ot(I,H))return c=w,D;const ne=w.key==null?T:w.key,ue=l.get(ne);return w.el&&(w=Vs(w),D.shapeFlag&128&&(D.ssContent=w)),A=ne,ue?(w.el=ue.el,w.component=ue.component,w.transition&&Tn(w,w.transition),w.shapeFlag|=512,a.delete(ne),a.add(ne)):(a.add(ne),G&&a.size>parseInt(G,10)&&B(a.values().next().value)),w.shapeFlag|=256,c=w,Hu(D.type)?D:w}}},Gu=sm;function ot(s,o){return ie(s)?s.some(n=>ot(n,o)):je(s)?s.split(",").includes(o):Tf(s)?s.test(o):!1}function Wu(s,o){Ku(s,"a",o)}function zu(s,o){Ku(s,"da",o)}function Ku(s,o,n=ze){const t=s.__wdc||(s.__wdc=()=>{let l=n;for(;l;){if(l.isDeactivated)return;l=l.parent}return s()});if(Zl(o,t,n),n){let l=n.parent;for(;l&&l.parent;)qt(l.parent.vnode)&&om(t,o,n,l),l=l.parent}}function om(s,o,n,t){const l=Zl(o,s,t,!0);Jl(()=>{La(t[o],l)},n)}function ur(s){s.shapeFlag&=-257,s.shapeFlag&=-513}function yr(s){return s.shapeFlag&128?s.ssContent:s}function Zl(s,o,n=ze,t=!1){if(n){const l=n[s]||(n[s]=[]),a=o.__weh||(o.__weh=(...c)=>{if(n.isUnmounted)return;un(),Mn(n);const i=Ms(o,n,s,c);return ln(),yn(),i});return t?l.unshift(a):l.push(a),a}else{const l=Go(Za[s].replace(/ hook$/,""));q(`${l} is called when there is no active component instance to be associated with. Lifecycle injection APIs can only be used during execution of setup(). If you are using async setup(), make sure to register lifecycle hooks before the first await statement.`)}}const ho=s=>(o,n=ze)=>(!Et||s==="sp")&&Zl(s,(...t)=>o(...t),n),nm=ho("bm"),fn=ho("m"),tm=ho("bu"),Ql=ho("u"),Ht=ho("bum"),Jl=ho("um"),lm=ho("sp"),rm=ho("rtg"),am=ho("rtc");function cm(s,o=ze){Zl("ec",s,o)}function Yu(s){Mf(s)&&q("Do not use built-in directive ids as custom directive id: "+s)}function Xl(s,o){const n=Xe;if(n===null)return q("withDirectives can only be used inside render functions."),s;const t=sr(n)||n.proxy,l=s.dirs||(s.dirs=[]);for(let a=0;a<o.length;a++){let[c,i,p,u=He]=o[a];c&&(de(c)&&(c={mounted:c,updated:c}),c.deep&&Qo(i),l.push({dir:c,instance:t,value:i,oldValue:void 0,arg:p,modifiers:u}))}return s}function qo(s,o,n,t){const l=s.dirs,a=o&&o.dirs;for(let c=0;c<l.length;c++){const i=l[c];a&&(i.oldValue=a[c].value);let p=i.dir[t];p&&(un(),Ms(p,n,8,[s.el,i,s,o]),yn())}}const Kr="components",im="directives";function kl(s,o){return Zu(Kr,s,!0,o)||s}const pm=Symbol();function Jc(s){return Zu(im,s)}function Zu(s,o,n=!0,t=!1){const l=Xe||ze;if(l){const a=l.type;if(s===Kr){const i=bt(a,!1);if(i&&(i===o||i===Xs(o)||i===cn(Xs(o))))return a}const c=Xc(l[s]||a[s],o)||Xc(l.appContext[s],o);if(!c&&t)return a;if(n&&!c){const i=s===Kr?`
If this is a native custom element, make sure to exclude it from component resolution via compilerOptions.isCustomElement.`:"";q(`Failed to resolve ${s.slice(0,-1)}: ${o}${i}`)}return c}else q(`resolve${cn(s.slice(0,-1))} can only be used in render() or setup().`)}function Xc(s,o){return s&&(s[o]||s[Xs(o)]||s[cn(Xs(o))])}function Ut(s,o,n,t){let l;const a=n&&n[t];if(ie(s)||je(s)){l=new Array(s.length);for(let c=0,i=s.length;c<i;c++)l[c]=o(s[c],c,void 0,a&&a[c])}else if(typeof s=="number"){Number.isInteger(s)||q(`The v-for range expect an integer value but got ${s}.`),l=new Array(s);for(let c=0;c<s;c++)l[c]=o(c+1,c,void 0,a&&a[c])}else if(Le(s))if(s[Symbol.iterator])l=Array.from(s,(c,i)=>o(c,i,void 0,a&&a[i]));else{const c=Object.keys(s);l=new Array(c.length);for(let i=0,p=c.length;i<p;i++){const u=c[i];l[i]=o(s[u],u,i,a&&a[i])}}else l=[];return n&&(n[t]=l),l}function fo(s,o,n={},t,l){if(Xe.isCE||Xe.parent&&Rn(Xe.parent)&&Xe.parent.isCE)return o!=="default"&&(n.name=o),R("slot",n,t&&t());let a=s[o];a&&a.length>1&&(q("SSR-optimized slot function detected in a non-SSR-optimized render function. You need to mark this component with $dynamic-slots in the parent template."),a=()=>[]),a&&a._c&&(a._d=!1),C();const c=a&&Qu(a(n)),i=M(Me,{key:n.key||c&&c.key||`_${o}`},c||(t?t():[]),c&&s._===1?64:-2);return!l&&i.scopeId&&(i.slotScopeIds=[i.scopeId+"-s"]),a&&a._c&&(a._d=!0),i}function Qu(s){return s.some(o=>mo(o)?!(o.type===es||o.type===Me&&!Qu(o.children)):!0)?s:null}const Yr=s=>s?uy(s)?sr(s)||s.proxy:Yr(s.parent):null,tn=We(Object.create(null),{$:s=>s,$el:s=>s.vnode.el,$data:s=>s.data,$props:s=>bn(s.props),$attrs:s=>bn(s.attrs),$slots:s=>bn(s.slots),$refs:s=>bn(s.refs),$parent:s=>Yr(s.parent),$root:s=>Yr(s.root),$emit:s=>s.emit,$options:s=>nc(s),$forceUpdate:s=>s.f||(s.f=()=>zl(s.update)),$nextTick:s=>s.n||(s.n=ns.bind(s.proxy)),$watch:s=>J8.bind(s)}),oc=s=>s==="_"||s==="$",dr=(s,o)=>s!==He&&!s.__isScriptSetup&&ke(s,o),Ju={get({_:s},o){const{ctx:n,setupState:t,data:l,props:a,accessCache:c,type:i,appContext:p}=s;if(o==="__isVue")return!0;let u;if(o[0]!=="$"){const h=c[o];if(h!==void 0)switch(h){case 1:return t[o];case 2:return l[o];case 4:return n[o];case 3:return a[o]}else{if(dr(t,o))return c[o]=1,t[o];if(l!==He&&ke(l,o))return c[o]=2,l[o];if((u=s.propsOptions[0])&&ke(u,o))return c[o]=3,a[o];if(n!==He&&ke(n,o))return c[o]=4,n[o];Zr&&(c[o]=0)}}const y=tn[o];let d,f;if(y)return o==="$attrs"&&(vs(s,"get",o),bl()),y(s);if((d=i.__cssModules)&&(d=d[o]))return d;if(n!==He&&ke(n,o))return c[o]=4,n[o];if(f=p.config.globalProperties,ke(f,o))return f[o];Xe&&(!je(o)||o.indexOf("__v")!==0)&&(l!==He&&oc(o[0])&&ke(l,o)?q(`Property ${JSON.stringify(o)} must be accessed via $data because it starts with a reserved character ("$" or "_") and is not proxied on the render context.`):s===Xe&&q(`Property ${JSON.stringify(o)} was accessed during render but is not defined on instance.`))},set({_:s},o,n){const{data:t,setupState:l,ctx:a}=s;return dr(l,o)?(l[o]=n,!0):l.__isScriptSetup&&ke(l,o)?(q(`Cannot mutate <script setup> binding "${o}" from Options API.`),!1):t!==He&&ke(t,o)?(t[o]=n,!0):ke(s.props,o)?(q(`Attempting to mutate prop "${o}". Props are readonly.`),!1):o[0]==="$"&&o.slice(1)in s?(q(`Attempting to mutate public property "${o}". Properties starting with $ are reserved and readonly.`),!1):(o in s.appContext.config.globalProperties?Object.defineProperty(a,o,{enumerable:!0,configurable:!0,value:n}):a[o]=n,!0)},has({_:{data:s,setupState:o,accessCache:n,ctx:t,appContext:l,propsOptions:a}},c){let i;return!!n[c]||s!==He&&ke(s,c)||dr(o,c)||(i=a[0])&&ke(i,c)||ke(t,c)||ke(tn,c)||ke(l.config.globalProperties,c)},defineProperty(s,o,n){return n.get!=null?s._.accessCache[o]=0:ke(n,"value")&&this.set(s,o,n.value,null),Reflect.defineProperty(s,o,n)}};Ju.ownKeys=s=>(q("Avoid app logic that relies on enumerating keys on a component instance. The keys will be empty in production mode to avoid performance overhead."),Reflect.ownKeys(s));function um(s){const o={};return Object.defineProperty(o,"_",{configurable:!0,enumerable:!1,get:()=>s}),Object.keys(tn).forEach(n=>{Object.defineProperty(o,n,{configurable:!0,enumerable:!1,get:()=>tn[n](s),set:As})}),o}function ym(s){const{ctx:o,propsOptions:[n]}=s;n&&Object.keys(n).forEach(t=>{Object.defineProperty(o,t,{enumerable:!0,configurable:!0,get:()=>s.props[t],set:As})})}function dm(s){const{ctx:o,setupState:n}=s;Object.keys(me(n)).forEach(t=>{if(!n.__isScriptSetup){if(oc(t[0])){q(`setup() return property ${JSON.stringify(t)} should not start with "$" or "_" which are reserved prefixes for Vue internals.`);return}Object.defineProperty(o,t,{enumerable:!0,configurable:!0,get:()=>n[t],set:As})}})}function fm(){const s=Object.create(null);return(o,n)=>{s[n]?q(`${o} property "${n}" is already defined in ${s[n]}.`):s[n]=o}}let Zr=!0;function mm(s){const o=nc(s),n=s.proxy,t=s.ctx;Zr=!1,o.beforeCreate&&ei(o.beforeCreate,s,"bc");const{data:l,computed:a,methods:c,watch:i,provide:p,inject:u,created:y,beforeMount:d,mounted:f,beforeUpdate:h,updated:m,activated:B,deactivated:A,beforeDestroy:b,beforeUnmount:v,destroyed:D,unmounted:w,render:T,renderTracked:H,renderTriggered:z,errorCaptured:I,serverPrefetch:G,expose:ne,inheritAttrs:ue,components:ee,directives:De,filters:Te}=o,xe=fm();{const[se]=s.propsOptions;if(se)for(const pe in se)xe("Props",pe)}if(u&&hm(u,t,xe,s.appContext.config.unwrapInjectedRef),c)for(const se in c){const pe=c[se];de(pe)?(Object.defineProperty(t,se,{value:pe.bind(n),configurable:!0,enumerable:!0,writable:!0}),xe("Methods",se)):q(`Method "${se}" has type "${typeof pe}" in the component definition. Did you reference the function correctly?`)}if(l){de(l)||q("The data option must be a function. Plain object usage is no longer supported.");const se=l.call(n,n);if(qa(se)&&q("data() returned a Promise - note data() cannot be async; If you intend to perform data fetching before component renders, use async setup() + <Suspense>."),!Le(se))q("data() should return an object.");else{s.data=Ge(se);for(const pe in se)xe("Data",pe),oc(pe[0])||Object.defineProperty(t,pe,{configurable:!0,enumerable:!0,get:()=>se[pe],set:As})}}if(Zr=!0,a)for(const se in a){const pe=a[se],Ce=de(pe)?pe.bind(n,n):de(pe.get)?pe.get.bind(n,n):As;Ce===As&&q(`Computed property "${se}" has no getter.`);const Ne=!de(pe)&&de(pe.set)?pe.set.bind(n):()=>{q(`Write operation failed: computed property "${se}" is readonly.`)},Cs=$({get:Ce,set:Ne});Object.defineProperty(t,se,{enumerable:!0,configurable:!0,get:()=>Cs.value,set:ls=>Cs.value=ls}),xe("Computed",se)}if(i)for(const se in i)Xu(i[se],t,n,se);if(p){const se=de(p)?p.call(n):p;Reflect.ownKeys(se).forEach(pe=>{ks(pe,se[pe])})}y&&ei(y,s,"c");function Ue(se,pe){ie(pe)?pe.forEach(Ce=>se(Ce.bind(n))):pe&&se(pe.bind(n))}if(Ue(nm,d),Ue(fn,f),Ue(tm,h),Ue(Ql,m),Ue(Wu,B),Ue(zu,A),Ue(cm,I),Ue(am,H),Ue(rm,z),Ue(Ht,v),Ue(Jl,w),Ue(lm,G),ie(ne))if(ne.length){const se=s.exposed||(s.exposed={});ne.forEach(pe=>{Object.defineProperty(se,pe,{get:()=>n[pe],set:Ce=>n[pe]=Ce})})}else s.exposed||(s.exposed={});T&&s.render===As&&(s.render=T),ue!=null&&(s.inheritAttrs=ue),ee&&(s.components=ee),De&&(s.directives=De)}function hm(s,o,n=As,t=!1){ie(s)&&(s=Qr(s));for(const l in s){const a=s[l];let c;Le(a)?"default"in a?c=F(a.from||l,a.default,!0):c=F(a.from||l):c=F(a),Ie(c)?t?Object.defineProperty(o,l,{enumerable:!0,configurable:!0,get:()=>c.value,set:i=>c.value=i}):(q(`injected property "${l}" is a ref and will be auto-unwrapped and no longer needs \`.value\` in the next minor release. To opt-in to the new behavior now, set \`app.config.unwrapInjectedRef = true\` (this config is temporary and will not be needed in the future.)`),o[l]=c):o[l]=c,n("Inject",l)}}function ei(s,o,n){Ms(ie(s)?s.map(t=>t.bind(o.proxy)):s.bind(o.proxy),o,n)}function Xu(s,o,n,t){const l=t.includes(".")?Uu(n,t):()=>n[t];if(je(s)){const a=o[s];de(a)?Ae(l,a):q(`Invalid watch handler specified by key "${s}"`,a)}else if(de(s))Ae(l,s.bind(n));else if(Le(s))if(ie(s))s.forEach(a=>Xu(a,o,n,t));else{const a=de(s.handler)?s.handler.bind(n):o[s.handler];de(a)?Ae(l,a,s):q(`Invalid watch handler specified by key "${s.handler}"`,a)}else q(`Invalid watch option: "${t}"`,s)}function nc(s){const o=s.type,{mixins:n,extends:t}=o,{mixins:l,optionsCache:a,config:{optionMergeStrategies:c}}=s.appContext,i=a.get(o);let p;return i?p=i:!l.length&&!n&&!t?p=o:(p={},l.length&&l.forEach(u=>wl(p,u,c,!0)),wl(p,o,c)),Le(o)&&a.set(o,p),p}function wl(s,o,n,t=!1){const{mixins:l,extends:a}=o;a&&wl(s,a,n,!0),l&&l.forEach(c=>wl(s,c,n,!0));for(const c in o)if(t&&c==="expose")q('"expose" option is ignored when declared in mixins or extends. It should only be declared in the base component itself.');else{const i=_m[c]||n&&n[c];s[c]=i?i(s[c],o[c]):o[c]}return s}const _m={data:si,props:Wo,emits:Wo,methods:Wo,computed:Wo,beforeCreate:ps,created:ps,beforeMount:ps,mounted:ps,beforeUpdate:ps,updated:ps,beforeDestroy:ps,beforeUnmount:ps,destroyed:ps,unmounted:ps,activated:ps,deactivated:ps,errorCaptured:ps,serverPrefetch:ps,components:Wo,directives:Wo,watch:Am,provide:si,inject:Bm};function si(s,o){return o?s?function(){return We(de(s)?s.call(this,this):s,de(o)?o.call(this,this):o)}:o:s}function Bm(s,o){return Wo(Qr(s),Qr(o))}function Qr(s){if(ie(s)){const o={};for(let n=0;n<s.length;n++)o[s[n]]=s[n];return o}return s}function ps(s,o){return s?[...new Set([].concat(s,o))]:o}function Wo(s,o){return s?We(We(Object.create(null),s),o):o}function Am(s,o){if(!s)return o;if(!o)return s;const n=We(Object.create(null),s);for(const t in o)n[t]=ps(s[t],o[t]);return n}function gm(s,o,n,t=!1){const l={},a={};Al(a,er,1),s.propsDefaults=Object.create(null),ey(s,o,l,a);for(const c in s.propsOptions[0])c in l||(l[c]=void 0);oy(o||{},l,s),n?s.props=t?l:m8(l):s.type.props?s.props=l:s.props=a,s.attrs=a}function vm(s){for(;s;){if(s.type.__hmrId)return!0;s=s.parent}}function Cm(s,o,n,t){const{props:l,attrs:a,vnode:{patchFlag:c}}=s,i=me(l),[p]=s.propsOptions;let u=!1;if(!vm(s)&&(t||c>0)&&!(c&16)){if(c&8){const y=s.vnode.dynamicProps;for(let d=0;d<y.length;d++){let f=y[d];if(Kl(s.emitsOptions,f))continue;const h=o[f];if(p)if(ke(a,f))h!==a[f]&&(a[f]=h,u=!0);else{const m=Xs(f);l[m]=Jr(p,i,m,h,s,!1)}else h!==a[f]&&(a[f]=h,u=!0)}}}else{ey(s,o,l,a)&&(u=!0);let y;for(const d in i)(!o||!ke(o,d)&&((y=uo(d))===d||!ke(o,y)))&&(p?n&&(n[d]!==void 0||n[y]!==void 0)&&(l[d]=Jr(p,i,d,void 0,s,!0)):delete l[d]);if(a!==i)for(const d in a)(!o||!ke(o,d))&&(delete a[d],u=!0)}u&&yo(s,"set","$attrs"),oy(o||{},l,s)}function ey(s,o,n,t){const[l,a]=s.propsOptions;let c=!1,i;if(o)for(let p in o){if(cl(p))continue;const u=o[p];let y;l&&ke(l,y=Xs(p))?!a||!a.includes(y)?n[y]=u:(i||(i={}))[y]=u:Kl(s.emitsOptions,p)||(!(p in t)||u!==t[p])&&(t[p]=u,c=!0)}if(a){const p=me(n),u=i||He;for(let y=0;y<a.length;y++){const d=a[y];n[d]=Jr(l,p,d,u[d],s,!ke(u,d))}}return c}function Jr(s,o,n,t,l,a){const c=s[n];if(c!=null){const i=ke(c,"default");if(i&&t===void 0){const p=c.default;if(c.type!==Function&&de(p)){const{propsDefaults:u}=l;n in u?t=u[n]:(Mn(l),t=u[n]=p.call(null,o),ln())}else t=p}c[0]&&(a&&!i?t=!1:c[1]&&(t===""||t===uo(n))&&(t=!0))}return t}function sy(s,o,n=!1){const t=o.propsCache,l=t.get(s);if(l)return l;const a=s.props,c={},i=[];let p=!1;if(!de(s)){const y=d=>{p=!0;const[f,h]=sy(d,o,!0);We(c,f),h&&i.push(...h)};!n&&o.mixins.length&&o.mixins.forEach(y),s.extends&&y(s.extends),s.mixins&&s.mixins.forEach(y)}if(!a&&!p)return Le(s)&&t.set(s,wn),wn;if(ie(a))for(let y=0;y<a.length;y++){je(a[y])||q("props must be strings when using array syntax.",a[y]);const d=Xs(a[y]);oi(d)&&(c[d]=He)}else if(a){Le(a)||q("invalid props options",a);for(const y in a){const d=Xs(y);if(oi(d)){const f=a[y],h=c[d]=ie(f)||de(f)?{type:f}:Object.assign({},f);if(h){const m=ti(Boolean,h.type),B=ti(String,h.type);h[0]=m>-1,h[1]=B<0||m<B,(m>-1||ke(h,"default"))&&i.push(d)}}}}const u=[c,i];return Le(s)&&t.set(s,u),u}function oi(s){return s[0]!=="$"?!0:(q(`Invalid prop name: "${s}" is a reserved property.`),!1)}function Xr(s){const o=s&&s.toString().match(/^\s*(function|class) (\w+)/);return o?o[2]:s===null?"null":""}function ni(s,o){return Xr(s)===Xr(o)}function ti(s,o){return ie(o)?o.findIndex(n=>ni(n,s)):de(o)&&ni(o,s)?0:-1}function oy(s,o,n){const t=me(o),l=n.propsOptions[0];for(const a in l){let c=l[a];c!=null&&Dm(a,t[a],c,!ke(s,a)&&!ke(s,uo(a)))}}function Dm(s,o,n,t){const{type:l,required:a,validator:c}=n;if(a&&t){q('Missing required prop: "'+s+'"');return}if(!(o==null&&!n.required)){if(l!=null&&l!==!0){let i=!1;const p=ie(l)?l:[l],u=[];for(let y=0;y<p.length&&!i;y++){const{valid:d,expectedType:f}=bm(o,p[y]);u.push(f||""),i=d}if(!i){q(km(s,o,u));return}}c&&!c(o)&&q('Invalid prop: custom validator check failed for prop "'+s+'".')}}const Em=No("String,Number,Boolean,Function,Symbol,BigInt");function bm(s,o){let n;const t=Xr(o);if(Em(t)){const l=typeof s;n=l===t.toLowerCase(),!n&&l==="object"&&(n=s instanceof o)}else t==="Object"?n=Le(s):t==="Array"?n=ie(s):t==="null"?n=s===null:n=s instanceof o;return{valid:n,expectedType:t}}function km(s,o,n){let t=`Invalid prop: type check failed for prop "${s}". Expected ${n.map(cn).join(" | ")}`;const l=n[0],a=Ha(o),c=li(o,l),i=li(o,a);return n.length===1&&ri(l)&&!wm(l,a)&&(t+=` with value ${c}`),t+=`, got ${a} `,ri(a)&&(t+=`with value ${i}.`),t}function li(s,o){return o==="String"?`"${s}"`:o==="Number"?`${Number(s)}`:`${s}`}function ri(s){return["string","number","boolean"].some(n=>s.toLowerCase()===n)}function wm(...s){return s.some(o=>o.toLowerCase()==="boolean")}const ny=s=>s[0]==="_"||s==="$stable",tc=s=>ie(s)?s.map(Hs):[Hs(s)],Sm=(s,o,n)=>{if(o._n)return o;const t=E((...l)=>(ze&&q(`Slot "${s}" invoked outside of the render function: this will not track dependencies used in the slot. Invoke the slot function inside the render function instead.`),tc(o(...l))),n);return t._c=!1,t},ty=(s,o,n)=>{const t=s._ctx;for(const l in s){if(ny(l))continue;const a=s[l];if(de(a))o[l]=Sm(l,a,t);else if(a!=null){q(`Non-function value encountered for slot "${l}". Prefer function slots for better performance.`);const c=tc(a);o[l]=()=>c}}},ly=(s,o)=>{qt(s.vnode)||q("Non-function value encountered for default slot. Prefer function slots for better performance.");const n=tc(o);s.slots.default=()=>n},Rm=(s,o)=>{if(s.vnode.shapeFlag&32){const n=o._;n?(s.slots=me(o),Al(o,"_",n)):ty(o,s.slots={})}else s.slots={},o&&ly(s,o);Al(s.slots,er,1)},xm=(s,o,n)=>{const{vnode:t,slots:l}=s;let a=!0,c=He;if(t.shapeFlag&32){const i=o._;i?xo?We(l,o):n&&i===1?a=!1:(We(l,o),!n&&i===1&&delete l._):(a=!o.$stable,ty(o,l)),c=o}else o&&(ly(s,o),c={default:1});if(a)for(const i in l)!ny(i)&&!(i in c)&&delete l[i]};function ry(){return{app:null,config:{isNativeTag:lu,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let $m=0;function Fm(s,o){return function(t,l=null){de(t)||(t=Object.assign({},t)),l!=null&&!Le(l)&&(q("root props passed to app.mount() must be an object."),l=null);const a=ry(),c=new Set;let i=!1;const p=a.app={_uid:$m++,_component:t,_props:l,_container:null,_context:a,_instance:null,version:Rl,get config(){return a.config},set config(u){q("app.config cannot be replaced. Modify individual options instead.")},use(u,...y){return c.has(u)?q("Plugin has already been applied to target app."):u&&de(u.install)?(c.add(u),u.install(p,...y)):de(u)?(c.add(u),u(p,...y)):q('A plugin must either be a function or an object with an "install" function.'),p},mixin(u){return a.mixins.includes(u)?q("Mixin has already been applied to target app"+(u.name?`: ${u.name}`:"")):a.mixins.push(u),p},component(u,y){return oa(u,a.config),y?(a.components[u]&&q(`Component "${u}" has already been registered in target app.`),a.components[u]=y,p):a.components[u]},directive(u,y){return Yu(u),y?(a.directives[u]&&q(`Directive "${u}" has already been registered in target app.`),a.directives[u]=y,p):a.directives[u]},mount(u,y,d){if(i)q("App has already been mounted.\nIf you want to remount the same app, move your app creation logic into a factory function and create fresh app instances for each mount - e.g. `const createMyApp = () => createApp(App)`");else{u.__vue_app__&&q("There is already an app instance mounted on the host container.\n If you want to mount another app on the same host container, you need to unmount the previous app by calling `app.unmount()` first.");const f=R(t,l);return f.appContext=a,a.reload=()=>{s(Vs(f),u,d)},y&&o?o(f,u):s(f,u,d),i=!0,p._container=u,u.__vue_app__=p,p._instance=f.component,L8(p,Rl),sr(f.component)||f.component.proxy}},unmount(){i?(s(null,p._container),p._instance=null,N8(p),delete p._container.__vue_app__):q("Cannot unmount an app that is not mounted.")},provide(u,y){return u in a.provides&&q(`App already provides property with key "${String(u)}". It will be overwritten with the new value.`),a.provides[u]=y,p}};return p}}function ea(s,o,n,t,l=!1){if(ie(s)){s.forEach((f,h)=>ea(f,o&&(ie(o)?o[h]:o),n,t,l));return}if(Rn(t)&&!l)return;const a=t.shapeFlag&4?sr(t.component)||t.component.proxy:t.el,c=l?null:a,{i,r:p}=s;if(!i){q("Missing ref owner context. ref cannot be used on hoisted vnodes. A vnode with ref must be created inside the render function.");return}const u=o&&o.r,y=i.refs===He?i.refs={}:i.refs,d=i.setupState;if(u!=null&&u!==p&&(je(u)?(y[u]=null,ke(d,u)&&(d[u]=null)):Ie(u)&&(u.value=null)),de(p))po(p,i,12,[c,y]);else{const f=je(p),h=Ie(p);if(f||h){const m=()=>{if(s.f){const B=f?ke(d,p)?d[p]:y[p]:p.value;l?ie(B)&&La(B,a):ie(B)?B.includes(a)||B.push(a):f?(y[p]=[a],ke(d,p)&&(d[p]=y[p])):(p.value=[a],s.k&&(y[s.k]=p.value))}else f?(y[p]=c,ke(d,p)&&(d[p]=c)):h?(p.value=c,s.k&&(y[s.k]=c)):q("Invalid template ref type:",p,`(${typeof p})`)};c?(m.id=-1,os(m,n)):m()}else q("Invalid template ref type:",p,`(${typeof p})`)}}let Un,ko;function no(s,o){s.appContext.config.performance&&Sl()&&ko.mark(`vue-${o}-${s.uid}`),U8(s,o,Sl()?ko.now():Date.now())}function to(s,o){if(s.appContext.config.performance&&Sl()){const n=`vue-${o}-${s.uid}`,t=n+":end";ko.mark(t),ko.measure(`<${or(s,s.type)}> ${o}`,n,t),ko.clearMarks(n),ko.clearMarks(t)}V8(s,o,Sl()?ko.now():Date.now())}function Sl(){return Un!==void 0||(typeof window<"u"&&window.performance?(Un=!0,ko=window.performance):Un=!1),Un}function Im(){const s=[];if(s.length){const o=s.length>1;console.warn(`Feature flag${o?"s":""} ${s.join(", ")} ${o?"are":"is"} not explicitly defined. You are running the esm-bundler build of Vue, which expects these compile-time feature flags to be globally injected via the bundler config in order to get better tree-shaking in the production bundle.

For more details, see https://link.vuejs.org/feature-flags.`)}}const os=Q8;function Tm(s){return Mm(s)}function Mm(s,o){Im();const n=iu();n.__VUE__=!0,Pu(n.__VUE_DEVTOOLS_GLOBAL_HOOK__,n);const{insert:t,remove:l,patchProp:a,createElement:c,createText:i,createComment:p,setText:u,setElementText:y,parentNode:d,nextSibling:f,setScopeId:h=As,insertStaticContent:m}=s,B=(_,g,S,L=null,P=null,j=null,J=!1,V=null,W=xo?!1:!!g.dynamicChildren)=>{if(_===g)return;_&&!wo(_,g)&&(L=le(_),hs(_,P,j,!0),_=null),g.patchFlag===-2&&(W=!1,g.dynamicChildren=null);const{type:U,ref:ae,shapeFlag:re}=g;switch(U){case Vt:A(_,g,S,L);break;case es:b(_,g,S,L);break;case ul:_==null?v(g,S,L,J):D(_,g,S,J);break;case Me:De(_,g,S,L,P,j,J,V,W);break;default:re&1?H(_,g,S,L,P,j,J,V,W):re&6?Te(_,g,S,L,P,j,J,V,W):re&64||re&128?U.process(_,g,S,L,P,j,J,V,W,Se):q("Invalid VNode type:",U,`(${typeof U})`)}ae!=null&&P&&ea(ae,_&&_.ref,j,g||_,!g)},A=(_,g,S,L)=>{if(_==null)t(g.el=i(g.children),S,L);else{const P=g.el=_.el;g.children!==_.children&&u(P,g.children)}},b=(_,g,S,L)=>{_==null?t(g.el=p(g.children||""),S,L):g.el=_.el},v=(_,g,S,L)=>{[_.el,_.anchor]=m(_.children,g,S,L,_.el,_.anchor)},D=(_,g,S,L)=>{if(g.children!==_.children){const P=f(_.anchor);T(_),[g.el,g.anchor]=m(g.children,S,P,L)}else g.el=_.el,g.anchor=_.anchor},w=({el:_,anchor:g},S,L)=>{let P;for(;_&&_!==g;)P=f(_),t(_,S,L),_=P;t(g,S,L)},T=({el:_,anchor:g})=>{let S;for(;_&&_!==g;)S=f(_),l(_),_=S;l(g)},H=(_,g,S,L,P,j,J,V,W)=>{J=J||g.type==="svg",_==null?z(g,S,L,P,j,J,V,W):ne(_,g,P,j,J,V,W)},z=(_,g,S,L,P,j,J,V)=>{let W,U;const{type:ae,props:re,shapeFlag:ce,transition:_e,dirs:we}=_;if(W=_.el=c(_.type,j,re&&re.is,re),ce&8?y(W,_.children):ce&16&&G(_.children,W,null,L,P,j&&ae!=="foreignObject",J,V),we&&qo(_,null,L,"created"),I(W,_,_.scopeId,J,L),re){for(const qe in re)qe!=="value"&&!cl(qe)&&a(W,qe,null,re[qe],j,_.children,L,P,K);"value"in re&&a(W,"value",null,re.value),(U=re.onVnodeBeforeMount)&&Fs(U,L,_)}Object.defineProperty(W,"__vnode",{value:_,enumerable:!1}),Object.defineProperty(W,"__vueParentComponent",{value:L,enumerable:!1}),we&&qo(_,null,L,"beforeMount");const Ve=(!P||P&&!P.pendingBranch)&&_e&&!_e.persisted;Ve&&_e.beforeEnter(W),t(W,g,S),((U=re&&re.onVnodeMounted)||Ve||we)&&os(()=>{U&&Fs(U,L,_),Ve&&_e.enter(W),we&&qo(_,null,L,"mounted")},P)},I=(_,g,S,L,P)=>{if(S&&h(_,S),L)for(let j=0;j<L.length;j++)h(_,L[j]);if(P){let j=P.subTree;if(j.patchFlag>0&&j.patchFlag&2048&&(j=qu(j.children)||j),g===j){const J=P.vnode;I(_,J,J.scopeId,J.slotScopeIds,P.parent)}}},G=(_,g,S,L,P,j,J,V,W=0)=>{for(let U=W;U<_.length;U++){const ae=_[U]=V?Do(_[U]):Hs(_[U]);B(null,ae,g,S,L,P,j,J,V)}},ne=(_,g,S,L,P,j,J)=>{const V=g.el=_.el;let{patchFlag:W,dynamicChildren:U,dirs:ae}=g;W|=_.patchFlag&16;const re=_.props||He,ce=g.props||He;let _e;S&&Ho(S,!1),(_e=ce.onVnodeBeforeUpdate)&&Fs(_e,S,g,_),ae&&qo(g,_,S,"beforeUpdate"),S&&Ho(S,!0),xo&&(W=0,J=!1,U=null);const we=P&&g.type!=="foreignObject";if(U?(ue(_.dynamicChildren,U,V,S,L,we,j),S&&S.type.__hmrId&&rt(_,g)):J||Ce(_,g,V,null,S,L,we,j,!1),W>0){if(W&16)ee(V,g,re,ce,S,L,P);else if(W&2&&re.class!==ce.class&&a(V,"class",null,ce.class,P),W&4&&a(V,"style",re.style,ce.style,P),W&8){const Ve=g.dynamicProps;for(let qe=0;qe<Ve.length;qe++){const Ze=Ve[qe],Ls=re[Ze],_n=ce[Ze];(_n!==Ls||Ze==="value")&&a(V,Ze,Ls,_n,P,_.children,S,L,K)}}W&1&&_.children!==g.children&&y(V,g.children)}else!J&&U==null&&ee(V,g,re,ce,S,L,P);((_e=ce.onVnodeUpdated)||ae)&&os(()=>{_e&&Fs(_e,S,g,_),ae&&qo(g,_,S,"updated")},L)},ue=(_,g,S,L,P,j,J)=>{for(let V=0;V<g.length;V++){const W=_[V],U=g[V],ae=W.el&&(W.type===Me||!wo(W,U)||W.shapeFlag&70)?d(W.el):S;B(W,U,ae,null,L,P,j,J,!0)}},ee=(_,g,S,L,P,j,J)=>{if(S!==L){if(S!==He)for(const V in S)!cl(V)&&!(V in L)&&a(_,V,S[V],null,J,g.children,P,j,K);for(const V in L){if(cl(V))continue;const W=L[V],U=S[V];W!==U&&V!=="value"&&a(_,V,U,W,J,g.children,P,j,K)}"value"in L&&a(_,"value",S.value,L.value)}},De=(_,g,S,L,P,j,J,V,W)=>{const U=g.el=_?_.el:i(""),ae=g.anchor=_?_.anchor:i("");let{patchFlag:re,dynamicChildren:ce,slotScopeIds:_e}=g;(xo||re&2048)&&(re=0,W=!1,ce=null),_e&&(V=V?V.concat(_e):_e),_==null?(t(U,S,L),t(ae,S,L),G(g.children,S,ae,P,j,J,V,W)):re>0&&re&64&&ce&&_.dynamicChildren?(ue(_.dynamicChildren,ce,S,P,j,J,V),P&&P.type.__hmrId?rt(_,g):(g.key!=null||P&&g===P.subTree)&&rt(_,g,!0)):Ce(_,g,S,ae,P,j,J,V,W)},Te=(_,g,S,L,P,j,J,V,W)=>{g.slotScopeIds=V,_==null?g.shapeFlag&512?P.ctx.activate(g,S,L,J,W):xe(g,S,L,P,j,J,W):Ue(_,g,W)},xe=(_,g,S,L,P,j,J)=>{const V=_.component=Wm(_,L,P);if(V.type.__hmrId&&T8(V),il(_),no(V,"mount"),qt(_)&&(V.ctx.renderer=Se),no(V,"init"),Km(V),to(V,"init"),V.asyncDep){if(P&&P.registerDep(V,se),!_.el){const W=V.subTree=R(es);b(null,W,g,S)}return}se(V,_,g,S,P,j,J),pl(),to(V,"mount")},Ue=(_,g,S)=>{const L=g.component=_.component;if(Y8(_,g,S))if(L.asyncDep&&!L.asyncResolved){il(g),pe(L,g,S),pl();return}else L.next=g,F8(L.update),L.update();else g.el=_.el,L.vnode=g},se=(_,g,S,L,P,j,J)=>{const V=()=>{if(_.isMounted){let{next:ae,bu:re,u:ce,parent:_e,vnode:we}=_,Ve=ae,qe;il(ae||_.vnode),Ho(_,!1),ae?(ae.el=we.el,pe(_,ae,J)):ae=we,re&&bo(re),(qe=ae.props&&ae.props.onVnodeBeforeUpdate)&&Fs(qe,_e,ae,we),Ho(_,!0),no(_,"render");const Ze=ir(_);to(_,"render");const Ls=_.subTree;_.subTree=Ze,no(_,"patch"),B(Ls,Ze,d(Ls.el),le(Ls),_,P,j),to(_,"patch"),ae.el=Ze.el,Ve===null&&Z8(_,Ze.el),ce&&os(ce,P),(qe=ae.props&&ae.props.onVnodeUpdated)&&os(()=>Fs(qe,_e,ae,we),P),Ou(_),pl()}else{let ae;const{el:re,props:ce}=g,{bm:_e,m:we,parent:Ve}=_,qe=Rn(g);if(Ho(_,!1),_e&&bo(_e),!qe&&(ae=ce&&ce.onVnodeBeforeMount)&&Fs(ae,Ve,g),Ho(_,!0),re&&ye){const Ze=()=>{no(_,"render"),_.subTree=ir(_),to(_,"render"),no(_,"hydrate"),ye(re,_.subTree,_,P,null),to(_,"hydrate")};qe?g.type.__asyncLoader().then(()=>!_.isUnmounted&&Ze()):Ze()}else{no(_,"render");const Ze=_.subTree=ir(_);to(_,"render"),no(_,"patch"),B(null,Ze,S,L,_,P,j),to(_,"patch"),g.el=Ze.el}if(we&&os(we,P),!qe&&(ae=ce&&ce.onVnodeMounted)){const Ze=g;os(()=>Fs(ae,Ve,Ze),P)}(g.shapeFlag&256||Ve&&Rn(Ve.vnode)&&Ve.vnode.shapeFlag&256)&&_.a&&os(_.a,P),_.isMounted=!0,Wr(_),g=S=L=null}},W=_.effect=new Ga(V,()=>zl(U),_.scope),U=_.update=()=>W.run();U.id=_.uid,Ho(_,!0),W.onTrack=_.rtc?ae=>bo(_.rtc,ae):void 0,W.onTrigger=_.rtg?ae=>bo(_.rtg,ae):void 0,U.ownerInstance=_,U()},pe=(_,g,S)=>{g.component=_;const L=_.vnode.props;_.vnode=g,_.next=null,Cm(_,g.props,L,S),xm(_,g.children,S),un(),zc(),yn()},Ce=(_,g,S,L,P,j,J,V,W=!1)=>{const U=_&&_.children,ae=_?_.shapeFlag:0,re=g.children,{patchFlag:ce,shapeFlag:_e}=g;if(ce>0){if(ce&128){Cs(U,re,S,L,P,j,J,V,W);return}else if(ce&256){Ne(U,re,S,L,P,j,J,V,W);return}}_e&8?(ae&16&&K(U,P,j),re!==U&&y(S,re)):ae&16?_e&16?Cs(U,re,S,L,P,j,J,V,W):K(U,P,j,!0):(ae&8&&y(S,""),_e&16&&G(re,S,L,P,j,J,V,W))},Ne=(_,g,S,L,P,j,J,V,W)=>{_=_||wn,g=g||wn;const U=_.length,ae=g.length,re=Math.min(U,ae);let ce;for(ce=0;ce<re;ce++){const _e=g[ce]=W?Do(g[ce]):Hs(g[ce]);B(_[ce],_e,S,null,P,j,J,V,W)}U>ae?K(_,P,j,!0,!1,re):G(g,S,L,P,j,J,V,W,re)},Cs=(_,g,S,L,P,j,J,V,W)=>{let U=0;const ae=g.length;let re=_.length-1,ce=ae-1;for(;U<=re&&U<=ce;){const _e=_[U],we=g[U]=W?Do(g[U]):Hs(g[U]);if(wo(_e,we))B(_e,we,S,null,P,j,J,V,W);else break;U++}for(;U<=re&&U<=ce;){const _e=_[re],we=g[ce]=W?Do(g[ce]):Hs(g[ce]);if(wo(_e,we))B(_e,we,S,null,P,j,J,V,W);else break;re--,ce--}if(U>re){if(U<=ce){const _e=ce+1,we=_e<ae?g[_e].el:L;for(;U<=ce;)B(null,g[U]=W?Do(g[U]):Hs(g[U]),S,we,P,j,J,V,W),U++}}else if(U>ce)for(;U<=re;)hs(_[U],P,j,!0),U++;else{const _e=U,we=U,Ve=new Map;for(U=we;U<=ce;U++){const is=g[U]=W?Do(g[U]):Hs(g[U]);is.key!=null&&(Ve.has(is.key)&&q("Duplicate keys found during update:",JSON.stringify(is.key),"Make sure keys are unique."),Ve.set(is.key,U))}let qe,Ze=0;const Ls=ce-we+1;let _n=!1,Pc=0;const Hn=new Array(Ls);for(U=0;U<Ls;U++)Hn[U]=0;for(U=_e;U<=re;U++){const is=_[U];if(Ze>=Ls){hs(is,P,j,!0);continue}let Ws;if(is.key!=null)Ws=Ve.get(is.key);else for(qe=we;qe<=ce;qe++)if(Hn[qe-we]===0&&wo(is,g[qe])){Ws=qe;break}Ws===void 0?hs(is,P,j,!0):(Hn[Ws-we]=U+1,Ws>=Pc?Pc=Ws:_n=!0,B(is,g[Ws],S,null,P,j,J,V,W),Ze++)}const Oc=_n?Pm(Hn):wn;for(qe=Oc.length-1,U=Ls-1;U>=0;U--){const is=we+U,Ws=g[is],Lc=is+1<ae?g[is+1].el:L;Hn[U]===0?B(null,Ws,S,Lc,P,j,J,V,W):_n&&(qe<0||U!==Oc[qe]?ls(Ws,S,Lc,2):qe--)}}},ls=(_,g,S,L,P=null)=>{const{el:j,type:J,transition:V,children:W,shapeFlag:U}=_;if(U&6){ls(_.component.subTree,g,S,L);return}if(U&128){_.suspense.move(g,S,L);return}if(U&64){J.move(_,g,S,Se);return}if(J===Me){t(j,g,S);for(let re=0;re<W.length;re++)ls(W[re],g,S,L);t(_.anchor,g,S);return}if(J===ul){w(_,g,S);return}if(L!==2&&U&1&&V)if(L===0)V.beforeEnter(j),t(j,g,S),os(()=>V.enter(j),P);else{const{leave:re,delayLeave:ce,afterLeave:_e}=V,we=()=>t(j,g,S),Ve=()=>{re(j,()=>{we(),_e&&_e()})};ce?ce(j,we,Ve):Ve()}else t(j,g,S)},hs=(_,g,S,L=!1,P=!1)=>{const{type:j,props:J,ref:V,children:W,dynamicChildren:U,shapeFlag:ae,patchFlag:re,dirs:ce}=_;if(V!=null&&ea(V,null,S,_,!0),ae&256){g.ctx.deactivate(_);return}const _e=ae&1&&ce,we=!Rn(_);let Ve;if(we&&(Ve=J&&J.onVnodeBeforeUnmount)&&Fs(Ve,g,_),ae&6)oe(_.component,S,L);else{if(ae&128){_.suspense.unmount(S,L);return}_e&&qo(_,null,g,"beforeUnmount"),ae&64?_.type.remove(_,g,S,P,Se,L):U&&(j!==Me||re>0&&re&64)?K(U,g,S,!1,!0):(j===Me&&re&384||!P&&ae&16)&&K(W,g,S),L&&_o(_)}(we&&(Ve=J&&J.onVnodeUnmounted)||_e)&&os(()=>{Ve&&Fs(Ve,g,_),_e&&qo(_,null,g,"unmounted")},S)},_o=_=>{const{type:g,el:S,anchor:L,transition:P}=_;if(g===Me){_.patchFlag>0&&_.patchFlag&2048&&P&&!P.persisted?_.children.forEach(J=>{J.type===es?l(J.el):_o(J)}):x(S,L);return}if(g===ul){T(_);return}const j=()=>{l(S),P&&!P.persisted&&P.afterLeave&&P.afterLeave()};if(_.shapeFlag&1&&P&&!P.persisted){const{leave:J,delayLeave:V}=P,W=()=>J(S,j);V?V(_.el,j,W):W()}else j()},x=(_,g)=>{let S;for(;_!==g;)S=f(_),l(_),_=S;l(g)},oe=(_,g,S)=>{_.type.__hmrId&&M8(_);const{bum:L,scope:P,update:j,subTree:J,um:V}=_;L&&bo(L),P.stop(),j&&(j.active=!1,hs(J,_,g,S)),V&&os(V,g),os(()=>{_.isUnmounted=!0},g),g&&g.pendingBranch&&!g.isUnmounted&&_.asyncDep&&!_.asyncResolved&&_.suspenseId===g.pendingId&&(g.deps--,g.deps===0&&g.resolve()),H8(_)},K=(_,g,S,L=!1,P=!1,j=0)=>{for(let J=j;J<_.length;J++)hs(_[J],g,S,L,P)},le=_=>_.shapeFlag&6?le(_.component.subTree):_.shapeFlag&128?_.suspense.next():f(_.anchor||_.el),Ee=(_,g,S)=>{_==null?g._vnode&&hs(g._vnode,null,null,!0):B(g._vnode||null,_,g,null,null,null,S),zc(),Iu(),g._vnode=_},Se={p:B,um:hs,m:ls,r:_o,mt:xe,mc:G,pc:Ce,pbc:ue,n:le,o:s};let he,ye;return o&&([he,ye]=o(Se)),{render:Ee,hydrate:he,createApp:Fm(Ee,he)}}function Ho({effect:s,update:o},n){s.allowRecurse=o.allowRecurse=n}function rt(s,o,n=!1){const t=s.children,l=o.children;if(ie(t)&&ie(l))for(let a=0;a<t.length;a++){const c=t[a];let i=l[a];i.shapeFlag&1&&!i.dynamicChildren&&((i.patchFlag<=0||i.patchFlag===32)&&(i=l[a]=Do(l[a]),i.el=c.el),n||rt(c,i)),i.type===Vt&&(i.el=c.el),i.type===es&&!i.el&&(i.el=c.el)}}function Pm(s){const o=s.slice(),n=[0];let t,l,a,c,i;const p=s.length;for(t=0;t<p;t++){const u=s[t];if(u!==0){if(l=n[n.length-1],s[l]<u){o[t]=l,n.push(t);continue}for(a=0,c=n.length-1;a<c;)i=a+c>>1,s[n[i]]<u?a=i+1:c=i;u<s[n[a]]&&(a>0&&(o[t]=n[a-1]),n[a]=t)}}for(a=n.length,c=n[a-1];a-- >0;)n[a]=c,c=o[c];return n}const Om=s=>s.__isTeleport,xn=s=>s&&(s.disabled||s.disabled===""),ai=s=>typeof SVGElement<"u"&&s instanceof SVGElement,sa=(s,o)=>{const n=s&&s.to;if(je(n))if(o){const t=o(n);return t||q(`Failed to locate Teleport target with selector "${n}". Note the target element must exist before the component is mounted - i.e. the target cannot be rendered by the component itself, and ideally should be outside of the entire Vue component tree.`),t}else return q("Current renderer does not support string target for Teleports. (missing querySelector renderer option)"),null;else return!n&&!xn(s)&&q(`Invalid Teleport target: ${n}`),n},Lm={__isTeleport:!0,process(s,o,n,t,l,a,c,i,p,u){const{mc:y,pc:d,pbc:f,o:{insert:h,querySelector:m,createText:B,createComment:A}}=u,b=xn(o.props);let{shapeFlag:v,children:D,dynamicChildren:w}=o;if(xo&&(p=!1,w=null),s==null){const T=o.el=A("teleport start"),H=o.anchor=A("teleport end");h(T,n,t),h(H,n,t);const z=o.target=sa(o.props,m),I=o.targetAnchor=B("");z?(h(I,z),c=c||ai(z)):b||q("Invalid Teleport target on mount:",z,`(${typeof z})`);const G=(ne,ue)=>{v&16&&y(D,ne,ue,l,a,c,i,p)};b?G(n,H):z&&G(z,I)}else{o.el=s.el;const T=o.anchor=s.anchor,H=o.target=s.target,z=o.targetAnchor=s.targetAnchor,I=xn(s.props),G=I?n:H,ne=I?T:z;if(c=c||ai(H),w?(f(s.dynamicChildren,w,G,l,a,c,i),rt(s,o,!0)):p||d(s,o,G,ne,l,a,c,i,!1),b)I||sl(o,n,T,u,1);else if((o.props&&o.props.to)!==(s.props&&s.props.to)){const ue=o.target=sa(o.props,m);ue?sl(o,ue,null,u,0):q("Invalid Teleport target on update:",H,`(${typeof H})`)}else I&&sl(o,H,z,u,1)}ay(o)},remove(s,o,n,t,{um:l,o:{remove:a}},c){const{shapeFlag:i,children:p,anchor:u,targetAnchor:y,target:d,props:f}=s;if(d&&a(y),(c||!xn(f))&&(a(u),i&16))for(let h=0;h<p.length;h++){const m=p[h];l(m,o,n,!0,!!m.dynamicChildren)}},move:sl,hydrate:Nm};function sl(s,o,n,{o:{insert:t},m:l},a=2){a===0&&t(s.targetAnchor,o,n);const{el:c,anchor:i,shapeFlag:p,children:u,props:y}=s,d=a===2;if(d&&t(c,o,n),(!d||xn(y))&&p&16)for(let f=0;f<u.length;f++)l(u[f],o,n,2);d&&t(i,o,n)}function Nm(s,o,n,t,l,a,{o:{nextSibling:c,parentNode:i,querySelector:p}},u){const y=o.target=sa(o.props,p);if(y){const d=y._lpa||y.firstChild;if(o.shapeFlag&16)if(xn(o.props))o.anchor=u(c(s),o,i(s),n,t,l,a),o.targetAnchor=d;else{o.anchor=c(s);let f=d;for(;f;)if(f=c(f),f&&f.nodeType===8&&f.data==="teleport anchor"){o.targetAnchor=f,y._lpa=o.targetAnchor&&c(o.targetAnchor);break}u(d,o,y,n,t,l,a)}ay(o)}return o.anchor&&c(o.anchor)}const qm=Lm;function ay(s){const o=s.ctx;if(o&&o.ut){let n=s.children[0].el;for(;n!==s.targetAnchor;)n.nodeType===1&&n.setAttribute("data-v-owner",o.uid),n=n.nextSibling;o.ut()}}const Me=Symbol("Fragment"),Vt=Symbol("Text"),es=Symbol("Comment"),ul=Symbol("Static"),at=[];let Us=null;function C(s=!1){at.push(Us=s?null:[])}function Hm(){at.pop(),Us=at[at.length-1]||null}let Dt=1;function ci(s){Dt+=s}function cy(s){return s.dynamicChildren=Dt>0?Us||wn:null,Hm(),Dt>0&&Us&&Us.push(s),s}function te(s,o,n,t,l,a){return cy(e(s,o,n,t,l,a,!0))}function M(s,o,n,t,l){return cy(R(s,o,n,t,l,!0))}function mo(s){return s?s.__v_isVNode===!0:!1}function wo(s,o){return o.shapeFlag&6&&Cn.has(o.type)?(s.shapeFlag&=-257,o.shapeFlag&=-513,!1):s.type===o.type&&s.key===o.key}const Um=(...s)=>Vm(...s),er="__vInternal",iy=({key:s})=>s??null,yl=({ref:s,ref_key:o,ref_for:n})=>s!=null?je(s)||Ie(s)||de(s)?{i:Xe,r:s,k:o,f:!!n}:s:null;function e(s,o=null,n=null,t=0,l=null,a=s===Me?0:1,c=!1,i=!1){const p={__v_isVNode:!0,__v_skip:!0,type:s,props:o,key:o&&iy(o),ref:o&&yl(o),scopeId:Yl,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:a,patchFlag:t,dynamicProps:l,dynamicChildren:null,appContext:null,ctx:Xe};return i?(lc(p,n),a&128&&s.normalize(p)):n&&(p.shapeFlag|=je(n)?8:16),p.key!==p.key&&q("VNode created with invalid key (NaN). VNode type:",p.type),Dt>0&&!c&&Us&&(p.patchFlag>0||a&6)&&p.patchFlag!==32&&Us.push(p),p}const R=Um;function Vm(s,o=null,n=null,t=0,l=null,a=!1){if((!s||s===pm)&&(s||q(`Invalid vnode type when creating vnode: ${s}.`),s=es),mo(s)){const i=Vs(s,o,!0);return n&&lc(i,n),Dt>0&&!a&&Us&&(i.shapeFlag&6?Us[Us.indexOf(s)]=i:Us.push(i)),i.patchFlag|=-2,i}if(fy(s)&&(s=s.__vccOpts),o){o=Y(o);let{class:i,style:p}=o;i&&!je(i)&&(o.class=Ye(i)),Le(p)&&(Dl(p)&&!ie(p)&&(p=We({},p)),o.style=ts(p))}const c=je(s)?1:Hu(s)?128:Om(s)?64:Le(s)?4:de(s)?2:0;return c&4&&Dl(s)&&(s=me(s),q("Vue received a Component which was made a reactive object. This can lead to unnecessary performance overhead, and should be avoided by marking the component with `markRaw` or using `shallowRef` instead of `ref`.",`
Component that was made reactive: `,s)),e(s,o,n,t,l,c,a,!0)}function Y(s){return s?Dl(s)||er in s?We({},s):s:null}function Vs(s,o,n=!1){const{props:t,ref:l,patchFlag:a,children:c}=s,i=o?fe(t||{},o):t;return{__v_isVNode:!0,__v_skip:!0,type:s.type,props:i,key:i&&iy(i),ref:o&&o.ref?n&&l?ie(l)?l.concat(yl(o)):[l,yl(o)]:yl(o):l,scopeId:s.scopeId,slotScopeIds:s.slotScopeIds,children:a===-1&&ie(c)?c.map(py):c,target:s.target,targetAnchor:s.targetAnchor,staticCount:s.staticCount,shapeFlag:s.shapeFlag,patchFlag:o&&s.type!==Me?a===-1?16:a|16:a,dynamicProps:s.dynamicProps,dynamicChildren:s.dynamicChildren,appContext:s.appContext,dirs:s.dirs,transition:s.transition,component:s.component,suspense:s.suspense,ssContent:s.ssContent&&Vs(s.ssContent),ssFallback:s.ssFallback&&Vs(s.ssFallback),el:s.el,anchor:s.anchor,ctx:s.ctx,ce:s.ce}}function py(s){const o=Vs(s);return ie(s.children)&&(o.children=s.children.map(py)),o}function r(s=" ",o=0){return R(Vt,null,s,o)}function be(s="",o=!1){return o?(C(),M(es,null,s)):R(es,null,s)}function Hs(s){return s==null||typeof s=="boolean"?R(es):ie(s)?R(Me,null,s.slice()):typeof s=="object"?Do(s):R(Vt,null,String(s))}function Do(s){return s.el===null&&s.patchFlag!==-1||s.memo?s:Vs(s)}function lc(s,o){let n=0;const{shapeFlag:t}=s;if(o==null)o=null;else if(ie(o))n=16;else if(typeof o=="object")if(t&65){const l=o.default;l&&(l._c&&(l._d=!1),lc(s,l()),l._c&&(l._d=!0));return}else{n=32;const l=o._;!l&&!(er in o)?o._ctx=Xe:l===3&&Xe&&(Xe.slots._===1?o._=1:(o._=2,s.patchFlag|=1024))}else de(o)?(o={default:o,_ctx:Xe},n=32):(o=String(o),t&64?(n=16,o=[r(o)]):n=8);s.children=o,s.shapeFlag|=n}function fe(...s){const o={};for(let n=0;n<s.length;n++){const t=s[n];for(const l in t)if(l==="class")o.class!==t.class&&(o.class=Ye([o.class,t.class]));else if(l==="style")o.style=ts([o.style,t.style]);else if(Ot(l)){const a=o[l],c=t[l];c&&a!==c&&!(ie(a)&&a.includes(c))&&(o[l]=a?[].concat(a,c):c)}else l!==""&&(o[l]=t[l])}return o}function Fs(s,o,n,t=null){Ms(s,o,7,[n,t])}const jm=ry();let Gm=0;function Wm(s,o,n){const t=s.type,l=(o?o.appContext:s.appContext)||jm,a={uid:Gm++,vnode:s,type:t,parent:o,appContext:l,root:null,next:null,subTree:null,effect:null,update:null,scope:new pu(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:o?o.provides:Object.create(l.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:sy(t,l),emitsOptions:Nu(t,l),emit:null,emitted:null,propsDefaults:He,inheritAttrs:t.inheritAttrs,ctx:He,data:He,props:He,attrs:He,slots:He,refs:He,setupState:He,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return a.ctx=um(a),a.root=o?o.root:a,a.emit=G8.bind(null,a),s.ce&&s.ce(a),a}let ze=null;const xs=()=>ze||Xe,Mn=s=>{ze=s,s.scope.on()},ln=()=>{ze&&ze.scope.off(),ze=null},zm=No("slot,component");function oa(s,o){const n=o.isNativeTag||lu;(zm(s)||n(s))&&q("Do not use built-in or reserved HTML elements as component id: "+s)}function uy(s){return s.vnode.shapeFlag&4}let Et=!1;function Km(s,o=!1){Et=o;const{props:n,children:t}=s.vnode,l=uy(s);gm(s,n,l,o),Rm(s,t);const a=l?Ym(s,o):void 0;return Et=!1,a}function Ym(s,o){var n;const t=s.type;{if(t.name&&oa(t.name,s.appContext.config),t.components){const a=Object.keys(t.components);for(let c=0;c<a.length;c++)oa(a[c],s.appContext.config)}if(t.directives){const a=Object.keys(t.directives);for(let c=0;c<a.length;c++)Yu(a[c])}t.compilerOptions&&Zm()&&q('"compilerOptions" is only supported when using a build of Vue that includes the runtime compiler. Since you are using a runtime-only build, the options should be passed via your build tool config instead.')}s.accessCache=Object.create(null),s.proxy=Gl(new Proxy(s.ctx,Ju)),ym(s);const{setup:l}=t;if(l){const a=s.setupContext=l.length>1?dy(s):null;Mn(s),un();const c=po(l,s,0,[bn(s.props),a]);if(yn(),ln(),qa(c)){if(c.then(ln,ln),o)return c.then(i=>{ii(s,i,o)}).catch(i=>{Wl(i,s,0)});if(s.asyncDep=c,!s.suspense){const i=(n=t.name)!==null&&n!==void 0?n:"Anonymous";q(`Component <${i}>: setup function returned a promise, but no <Suspense> boundary was found in the parent component tree. A component with async setup() must be nested in a <Suspense> in order to be rendered.`)}}else ii(s,c,o)}else yy(s,o)}function ii(s,o,n){de(o)?s.type.__ssrInlineRender?s.ssrRender=o:s.render=o:Le(o)?(mo(o)&&q("setup() should not return VNodes directly - return a render function instead."),s.devtoolsRawSetupState=o,s.setupState=ku(o),dm(s)):o!==void 0&&q(`setup() should return an object. Received: ${o===null?"null":typeof o}`),yy(s,n)}let na;const Zm=()=>!na;function yy(s,o,n){const t=s.type;if(!s.render){if(!o&&na&&!t.render){const l=t.template||nc(s).template;if(l){no(s,"compile");const{isCustomElement:a,compilerOptions:c}=s.appContext.config,{delimiters:i,compilerOptions:p}=t,u=We(We({isCustomElement:a,delimiters:i},c),p);t.render=na(l,u),to(s,"compile")}}s.render=t.render||As}Mn(s),un(),mm(s),yn(),ln(),!t.render&&s.render===As&&!o&&(t.template?q('Component provided template option but runtime compilation is not supported in this build of Vue. Configure your bundler to alias "vue" to "vue/dist/vue.esm-bundler.js".'):q("Component is missing template or render function."))}function Qm(s){return new Proxy(s.attrs,{get(o,n){return bl(),vs(s,"get","$attrs"),o[n]},set(){return q("setupContext.attrs is readonly."),!1},deleteProperty(){return q("setupContext.attrs is readonly."),!1}})}function dy(s){const o=t=>{if(s.exposed&&q("expose() should be called only once per setup()."),t!=null){let l=typeof t;l==="object"&&(ie(t)?l="array":Ie(t)&&(l="ref")),l!=="object"&&q(`expose() should be passed a plain object, received ${l}.`)}s.exposed=t||{}};let n;return Object.freeze({get attrs(){return n||(n=Qm(s))},get slots(){return bn(s.slots)},get emit(){return(t,...l)=>s.emit(t,...l)},expose:o})}function sr(s){if(s.exposed)return s.exposeProxy||(s.exposeProxy=new Proxy(ku(Gl(s.exposed)),{get(o,n){if(n in o)return o[n];if(n in tn)return tn[n](s)},has(o,n){return n in o||n in tn}}))}const Jm=/(?:^|[-_])(\w)/g,Xm=s=>s.replace(Jm,o=>o.toUpperCase()).replace(/[-_]/g,"");function bt(s,o=!0){return de(s)?s.displayName||s.name:s.name||o&&s.__name}function or(s,o,n=!1){let t=bt(o);if(!t&&o.__file){const l=o.__file.match(/([^/\\]+)\.\w+$/);l&&(t=l[1])}if(!t&&s&&s.parent){const l=a=>{for(const c in a)if(a[c]===o)return c};t=l(s.components||s.parent.type.components)||l(s.appContext.components)}return t?Xm(t):n?"App":"Anonymous"}function fy(s){return de(s)&&"__vccOpts"in s}const $=(s,o)=>D8(s,o,Et);function eh(){return sh().slots}function sh(){const s=xs();return s||q("useContext() called without active instance."),s.setupContext||(s.setupContext=dy(s))}function fs(s,o,n){const t=arguments.length;return t===2?Le(o)&&!ie(o)?mo(o)?R(s,null,[o]):R(s,o):R(s,null,o):(t>3?n=Array.prototype.slice.call(arguments,2):t===3&&mo(n)&&(n=[n]),R(s,o,n))}const oh=Symbol("ssrContext"),nh=()=>{{const s=F(oh);return s||q("Server rendering context not provided. Make sure to only call useSSRContext() conditionally in the server build."),s}};function fr(s){return!!(s&&s.__v_isShallow)}function th(){if(typeof window>"u")return;const s={style:"color:#3ba776"},o={style:"color:#0b1bc9"},n={style:"color:#b62e24"},t={style:"color:#9d288c"},l={header(d){return Le(d)?d.__isVue?["div",s,"VueInstance"]:Ie(d)?["div",{},["span",s,y(d)],"<",i(d.value),">"]:on(d)?["div",{},["span",s,fr(d)?"ShallowReactive":"Reactive"],"<",i(d),`>${Oo(d)?" (readonly)":""}`]:Oo(d)?["div",{},["span",s,fr(d)?"ShallowReadonly":"Readonly"],"<",i(d),">"]:null:null},hasBody(d){return d&&d.__isVue},body(d){if(d&&d.__isVue)return["div",{},...a(d.$)]}};function a(d){const f=[];d.type.props&&d.props&&f.push(c("props",me(d.props))),d.setupState!==He&&f.push(c("setup",d.setupState)),d.data!==He&&f.push(c("data",me(d.data)));const h=p(d,"computed");h&&f.push(c("computed",h));const m=p(d,"inject");return m&&f.push(c("injected",m)),f.push(["div",{},["span",{style:t.style+";opacity:0.66"},"$ (internal): "],["object",{object:d}]]),f}function c(d,f){return f=We({},f),Object.keys(f).length?["div",{style:"line-height:1.25em;margin-bottom:0.6em"},["div",{style:"color:#476582"},d],["div",{style:"padding-left:1.25em"},...Object.keys(f).map(h=>["div",{},["span",t,h+": "],i(f[h],!1)])]]:["span",{}]}function i(d,f=!0){return typeof d=="number"?["span",o,d]:typeof d=="string"?["span",n,JSON.stringify(d)]:typeof d=="boolean"?["span",t,d]:Le(d)?["object",{object:f?me(d):d}]:["span",n,String(d)]}function p(d,f){const h=d.type;if(de(h))return;const m={};for(const B in d.ctx)u(h,B,f)&&(m[B]=d.ctx[B]);return m}function u(d,f,h){const m=d[h];if(ie(m)&&m.includes(f)||Le(m)&&f in m||d.extends&&u(d.extends,f,h)||d.mixins&&d.mixins.some(B=>u(B,f,h)))return!0}function y(d){return fr(d)?"ShallowRef":d.effect?"ComputedRef":"Ref"}window.devtoolsFormatters?window.devtoolsFormatters.push(l):window.devtoolsFormatters=[l]}const Rl="3.2.47",lh="http://www.w3.org/2000/svg",Ko=typeof document<"u"?document:null,pi=Ko&&Ko.createElement("template"),rh={insert:(s,o,n)=>{o.insertBefore(s,n||null)},remove:s=>{const o=s.parentNode;o&&o.removeChild(s)},createElement:(s,o,n,t)=>{const l=o?Ko.createElementNS(lh,s):Ko.createElement(s,n?{is:n}:void 0);return s==="select"&&t&&t.multiple!=null&&l.setAttribute("multiple",t.multiple),l},createText:s=>Ko.createTextNode(s),createComment:s=>Ko.createComment(s),setText:(s,o)=>{s.nodeValue=o},setElementText:(s,o)=>{s.textContent=o},parentNode:s=>s.parentNode,nextSibling:s=>s.nextSibling,querySelector:s=>Ko.querySelector(s),setScopeId(s,o){s.setAttribute(o,"")},insertStaticContent(s,o,n,t,l,a){const c=n?n.previousSibling:o.lastChild;if(l&&(l===a||l.nextSibling))for(;o.insertBefore(l.cloneNode(!0),n),!(l===a||!(l=l.nextSibling)););else{pi.innerHTML=t?`<svg>${s}</svg>`:s;const i=pi.content;if(t){const p=i.firstChild;for(;p.firstChild;)i.appendChild(p.firstChild);i.removeChild(p)}o.insertBefore(i,n)}return[c?c.nextSibling:o.firstChild,n?n.previousSibling:o.lastChild]}};function ah(s,o,n){const t=s._vtc;t&&(o=(o?[o,...t]:[...t]).join(" ")),o==null?s.removeAttribute("class"):n?s.setAttribute("class",o):s.className=o}function ch(s,o,n){const t=s.style,l=je(n);if(n&&!l){if(o&&!je(o))for(const a in o)n[a]==null&&ta(t,a,"");for(const a in n)ta(t,a,n[a])}else{const a=t.display;l?o!==n&&(t.cssText=n):o&&s.removeAttribute("style"),"_vod"in s&&(t.display=a)}}const ih=/[^\\];\s*$/,ui=/\s*!important$/;function ta(s,o,n){if(ie(n))n.forEach(t=>ta(s,o,t));else if(n==null&&(n=""),ih.test(n)&&q(`Unexpected semicolon at the end of '${o}' style value: '${n}'`),o.startsWith("--"))s.setProperty(o,n);else{const t=ph(s,o);ui.test(n)?s.setProperty(uo(t),n.replace(ui,""),"important"):s[t]=n}}const yi=["Webkit","Moz","ms"],mr={};function ph(s,o){const n=mr[o];if(n)return n;let t=Xs(o);if(t!=="filter"&&t in s)return mr[o]=t;t=cn(t);for(let l=0;l<yi.length;l++){const a=yi[l]+t;if(a in s)return mr[o]=a}return o}const di="http://www.w3.org/1999/xlink";function uh(s,o,n,t,l){if(t&&o.startsWith("xlink:"))n==null?s.removeAttributeNS(di,o.slice(6,o.length)):s.setAttributeNS(di,o,n);else{const a=$f(o);n==null||a&&!nu(n)?s.removeAttribute(o):s.setAttribute(o,a?"":n)}}function yh(s,o,n,t,l,a,c){if(o==="innerHTML"||o==="textContent"){t&&c(t,l,a),s[o]=n??"";return}if(o==="value"&&s.tagName!=="PROGRESS"&&!s.tagName.includes("-")){s._value=n;const p=n??"";(s.value!==p||s.tagName==="OPTION")&&(s.value=p),n==null&&s.removeAttribute(o);return}let i=!1;if(n===""||n==null){const p=typeof s[o];p==="boolean"?n=nu(n):n==null&&p==="string"?(n="",i=!0):p==="number"&&(n=0,i=!0)}try{s[o]=n}catch(p){i||q(`Failed setting prop "${o}" on <${s.tagName.toLowerCase()}>: value ${n} is invalid.`,p)}i&&s.removeAttribute(o)}function Dn(s,o,n,t){s.addEventListener(o,n,t)}function dh(s,o,n,t){s.removeEventListener(o,n,t)}function fh(s,o,n,t,l=null){const a=s._vei||(s._vei={}),c=a[o];if(t&&c)c.value=t;else{const[i,p]=mh(o);if(t){const u=a[o]=Bh(t,l);Dn(s,i,u,p)}else c&&(dh(s,i,c,p),a[o]=void 0)}}const fi=/(?:Once|Passive|Capture)$/;function mh(s){let o;if(fi.test(s)){o={};let t;for(;t=s.match(fi);)s=s.slice(0,s.length-t[0].length),o[t[0].toLowerCase()]=!0}return[s[2]===":"?s.slice(3):uo(s.slice(2)),o]}let hr=0;const hh=Promise.resolve(),_h=()=>hr||(hh.then(()=>hr=0),hr=Date.now());function Bh(s,o){const n=t=>{if(!t._vts)t._vts=Date.now();else if(t._vts<=n.attached)return;Ms(Ah(t,n.value),o,5,[t])};return n.value=s,n.attached=_h(),n}function Ah(s,o){if(ie(o)){const n=s.stopImmediatePropagation;return s.stopImmediatePropagation=()=>{n.call(s),s._stopped=!0},o.map(t=>l=>!l._stopped&&t&&t(l))}else return o}const mi=/^on[a-z]/,gh=(s,o,n,t,l=!1,a,c,i,p)=>{o==="class"?ah(s,t,l):o==="style"?ch(s,n,t):Ot(o)?Bl(o)||fh(s,o,n,t,c):(o[0]==="."?(o=o.slice(1),!0):o[0]==="^"?(o=o.slice(1),!1):vh(s,o,t,l))?yh(s,o,t,a,c,i,p):(o==="true-value"?s._trueValue=t:o==="false-value"&&(s._falseValue=t),uh(s,o,t,l))};function vh(s,o,n,t){return t?!!(o==="innerHTML"||o==="textContent"||o in s&&mi.test(o)&&de(n)):o==="spellcheck"||o==="draggable"||o==="translate"||o==="form"||o==="list"&&s.tagName==="INPUT"||o==="type"&&s.tagName==="TEXTAREA"||mi.test(o)&&je(n)?!1:o in s}const Ao="transition",Vn="animation",my={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},Ch=We({},em.props,my),Uo=(s,o=[])=>{ie(s)?s.forEach(n=>n(...o)):s&&s(...o)},hi=s=>s?ie(s)?s.some(o=>o.length>1):s.length>1:!1;function Dh(s){const o={};for(const ee in s)ee in my||(o[ee]=s[ee]);if(s.css===!1)return o;const{name:n="v",type:t,duration:l,enterFromClass:a=`${n}-enter-from`,enterActiveClass:c=`${n}-enter-active`,enterToClass:i=`${n}-enter-to`,appearFromClass:p=a,appearActiveClass:u=c,appearToClass:y=i,leaveFromClass:d=`${n}-leave-from`,leaveActiveClass:f=`${n}-leave-active`,leaveToClass:h=`${n}-leave-to`}=s,m=Eh(l),B=m&&m[0],A=m&&m[1],{onBeforeEnter:b,onEnter:v,onEnterCancelled:D,onLeave:w,onLeaveCancelled:T,onBeforeAppear:H=b,onAppear:z=v,onAppearCancelled:I=D}=o,G=(ee,De,Te)=>{vo(ee,De?y:i),vo(ee,De?u:c),Te&&Te()},ne=(ee,De)=>{ee._isLeaving=!1,vo(ee,d),vo(ee,h),vo(ee,f),De&&De()},ue=ee=>(De,Te)=>{const xe=ee?z:v,Ue=()=>G(De,ee,Te);Uo(xe,[De,Ue]),_i(()=>{vo(De,ee?p:a),lo(De,ee?y:i),hi(xe)||Bi(De,t,B,Ue)})};return We(o,{onBeforeEnter(ee){Uo(b,[ee]),lo(ee,a),lo(ee,c)},onBeforeAppear(ee){Uo(H,[ee]),lo(ee,p),lo(ee,u)},onEnter:ue(!1),onAppear:ue(!0),onLeave(ee,De){ee._isLeaving=!0;const Te=()=>ne(ee,De);lo(ee,d),_y(),lo(ee,f),_i(()=>{ee._isLeaving&&(vo(ee,d),lo(ee,h),hi(w)||Bi(ee,t,A,Te))}),Uo(w,[ee,Te])},onEnterCancelled(ee){G(ee,!1),Uo(D,[ee])},onAppearCancelled(ee){G(ee,!0),Uo(I,[ee])},onLeaveCancelled(ee){ne(ee),Uo(T,[ee])}})}function Eh(s){if(s==null)return null;if(Le(s))return[_r(s.enter),_r(s.leave)];{const o=_r(s);return[o,o]}}function _r(s){const o=Lf(s);return S8(o,"<transition> explicit duration"),o}function lo(s,o){o.split(/\s+/).forEach(n=>n&&s.classList.add(n)),(s._vtc||(s._vtc=new Set)).add(o)}function vo(s,o){o.split(/\s+/).forEach(t=>t&&s.classList.remove(t));const{_vtc:n}=s;n&&(n.delete(o),n.size||(s._vtc=void 0))}function _i(s){requestAnimationFrame(()=>{requestAnimationFrame(s)})}let bh=0;function Bi(s,o,n,t){const l=s._endId=++bh,a=()=>{l===s._endId&&t()};if(n)return setTimeout(a,n);const{type:c,timeout:i,propCount:p}=hy(s,o);if(!c)return t();const u=c+"end";let y=0;const d=()=>{s.removeEventListener(u,f),a()},f=h=>{h.target===s&&++y>=p&&d()};setTimeout(()=>{y<p&&d()},i+1),s.addEventListener(u,f)}function hy(s,o){const n=window.getComputedStyle(s),t=m=>(n[m]||"").split(", "),l=t(`${Ao}Delay`),a=t(`${Ao}Duration`),c=Ai(l,a),i=t(`${Vn}Delay`),p=t(`${Vn}Duration`),u=Ai(i,p);let y=null,d=0,f=0;o===Ao?c>0&&(y=Ao,d=c,f=a.length):o===Vn?u>0&&(y=Vn,d=u,f=p.length):(d=Math.max(c,u),y=d>0?c>u?Ao:Vn:null,f=y?y===Ao?a.length:p.length:0);const h=y===Ao&&/\b(transform|all)(,|$)/.test(t(`${Ao}Property`).toString());return{type:y,timeout:d,propCount:f,hasTransform:h}}function Ai(s,o){for(;s.length<o.length;)s=s.concat(s);return Math.max(...o.map((n,t)=>gi(n)+gi(s[t])))}function gi(s){return Number(s.slice(0,-1).replace(",","."))*1e3}function _y(){return document.body.offsetHeight}const By=new WeakMap,Ay=new WeakMap,gy={name:"TransitionGroup",props:We({},Ch,{tag:String,moveClass:String}),setup(s,{slots:o}){const n=xs(),t=Vu();let l,a;return Ql(()=>{if(!l.length)return;const c=s.moveClass||`${s.name||"v"}-move`;if(!$h(l[0].el,n.vnode.el,c))return;l.forEach(Sh),l.forEach(Rh);const i=l.filter(xh);_y(),i.forEach(p=>{const u=p.el,y=u.style;lo(u,c),y.transform=y.webkitTransform=y.transitionDuration="";const d=u._moveCb=f=>{f&&f.target!==u||(!f||/transform$/.test(f.propertyName))&&(u.removeEventListener("transitionend",d),u._moveCb=null,vo(u,c))};u.addEventListener("transitionend",d)})}),()=>{const c=me(s),i=Dh(c);let p=c.tag||Me;l=a,a=o.default?sc(o.default()):[];for(let u=0;u<a.length;u++){const y=a[u];y.key!=null?Tn(y,Ct(y,i,t,n)):q("<TransitionGroup> children must be keyed.")}if(l)for(let u=0;u<l.length;u++){const y=l[u];Tn(y,Ct(y,i,t,n)),By.set(y,y.el.getBoundingClientRect())}return R(p,null,a)}}},kh=s=>delete s.mode;gy.props;const wh=gy;function Sh(s){const o=s.el;o._moveCb&&o._moveCb(),o._enterCb&&o._enterCb()}function Rh(s){Ay.set(s,s.el.getBoundingClientRect())}function xh(s){const o=By.get(s),n=Ay.get(s),t=o.left-n.left,l=o.top-n.top;if(t||l){const a=s.el.style;return a.transform=a.webkitTransform=`translate(${t}px,${l}px)`,a.transitionDuration="0s",s}}function $h(s,o,n){const t=s.cloneNode();s._vtc&&s._vtc.forEach(c=>{c.split(/\s+/).forEach(i=>i&&t.classList.remove(i))}),n.split(/\s+/).forEach(c=>c&&t.classList.add(c)),t.style.display="none";const l=o.nodeType===1?o:o.parentNode;l.appendChild(t);const{hasTransform:a}=hy(t);return l.removeChild(t),a}const vi=s=>{const o=s.props["onUpdate:modelValue"]||!1;return ie(o)?n=>bo(o,n):o};function Fh(s){s.target.composing=!0}function Ci(s){const o=s.target;o.composing&&(o.composing=!1,o.dispatchEvent(new Event("input")))}const Ih={created(s,{modifiers:{lazy:o,trim:n,number:t}},l){s._assign=vi(l);const a=t||l.props&&l.props.type==="number";Dn(s,o?"change":"input",c=>{if(c.target.composing)return;let i=s.value;n&&(i=i.trim()),a&&(i=qr(i)),s._assign(i)}),n&&Dn(s,"change",()=>{s.value=s.value.trim()}),o||(Dn(s,"compositionstart",Fh),Dn(s,"compositionend",Ci),Dn(s,"change",Ci))},mounted(s,{value:o}){s.value=o??""},beforeUpdate(s,{value:o,modifiers:{lazy:n,trim:t,number:l}},a){if(s._assign=vi(a),s.composing||document.activeElement===s&&s.type!=="range"&&(n||t&&s.value.trim()===o||(l||s.type==="number")&&qr(s.value)===o))return;const c=o??"";s.value!==c&&(s.value=c)}},Th={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},Di=(s,o)=>n=>{if(!("key"in n))return;const t=uo(n.key);if(o.some(l=>l===t||Th[l]===t))return s(n)},vy={beforeMount(s,{value:o},{transition:n}){s._vod=s.style.display==="none"?"":s.style.display,n&&o?n.beforeEnter(s):jn(s,o)},mounted(s,{value:o},{transition:n}){n&&o&&n.enter(s)},updated(s,{value:o,oldValue:n},{transition:t}){!o!=!n&&(t?o?(t.beforeEnter(s),jn(s,!0),t.enter(s)):t.leave(s,()=>{jn(s,!1)}):jn(s,o))},beforeUnmount(s,{value:o}){jn(s,o)}};function jn(s,o){s.style.display=o?s._vod:"none"}const Mh=We({patchProp:gh},rh);let Ei;function Ph(){return Ei||(Ei=Tm(Mh))}const Oh=(...s)=>{const o=Ph().createApp(...s);Lh(o),Nh(o);const{mount:n}=o;return o.mount=t=>{const l=qh(t);if(!l)return;const a=o._component;!de(a)&&!a.render&&!a.template&&(a.template=l.innerHTML),l.innerHTML="";const c=n(l,!1,l instanceof SVGElement);return l instanceof Element&&(l.removeAttribute("v-cloak"),l.setAttribute("data-v-app","")),c},o};function Lh(s){Object.defineProperty(s.config,"isNativeTag",{value:o=>ou(o)||Rf(o),writable:!1})}function Nh(s){{const o=s.config.isCustomElement;Object.defineProperty(s.config,"isCustomElement",{get(){return o},set(){q("The `isCustomElement` config option is deprecated. Use `compilerOptions.isCustomElement` instead.")}});const n=s.config.compilerOptions,t='The `compilerOptions` config option is only respected when using a build of Vue.js that includes the runtime compiler (aka "full build"). Since you are using the runtime-only build, `compilerOptions` must be passed to `@vue/compiler-dom` in the build setup instead.\n- For vue-loader: pass it via vue-loader\'s `compilerOptions` loader option.\n- For vue-cli: see https://cli.vuejs.org/guide/webpack.html#modifying-options-of-a-loader\n- For vite: pass it via @vitejs/plugin-vue options. See https://github.com/vitejs/vite/tree/main/packages/plugin-vue#example-for-passing-options-to-vuecompiler-dom';Object.defineProperty(s.config,"compilerOptions",{get(){return q(t),n},set(){q(t)}})}}function qh(s){if(je(s)){const o=document.querySelector(s);return o||q(`Failed to mount app: mount target selector "${s}" returned null.`),o}return window.ShadowRoot&&s instanceof window.ShadowRoot&&s.mode==="closed"&&q('mounting on a ShadowRoot with `{mode: "closed"}` may lead to unpredictable bugs'),s}function Hh(){th()}Hh();function la(s,o={},n){for(const t in s){const l=s[t],a=n?`${n}:${t}`:t;typeof l=="object"&&l!==null?la(l,o,a):typeof l=="function"&&(o[a]=l)}return o}function Uh(s,o){return s.reduce((n,t)=>n.then(()=>t.apply(void 0,o)),Promise.resolve())}function Vh(s,o){return Promise.all(s.map(n=>n.apply(void 0,o)))}function Br(s,o){for(const n of s)n(o)}class jh{constructor(){this._hooks={},this._before=void 0,this._after=void 0,this._deprecatedMessages=void 0,this._deprecatedHooks={},this.hook=this.hook.bind(this),this.callHook=this.callHook.bind(this),this.callHookWith=this.callHookWith.bind(this)}hook(o,n,t={}){if(!o||typeof n!="function")return()=>{};const l=o;let a;for(;this._deprecatedHooks[o];)a=this._deprecatedHooks[o],o=a.to;if(a&&!t.allowDeprecated){let c=a.message;c||(c=`${l} hook has been deprecated`+(a.to?`, please use ${a.to}`:"")),this._deprecatedMessages||(this._deprecatedMessages=new Set),this._deprecatedMessages.has(c)||(console.warn(c),this._deprecatedMessages.add(c))}return this._hooks[o]=this._hooks[o]||[],this._hooks[o].push(n),()=>{n&&(this.removeHook(o,n),n=void 0)}}hookOnce(o,n){let t,l=(...a)=>(typeof t=="function"&&t(),t=void 0,l=void 0,n(...a));return t=this.hook(o,l),t}removeHook(o,n){if(this._hooks[o]){const t=this._hooks[o].indexOf(n);t!==-1&&this._hooks[o].splice(t,1),this._hooks[o].length===0&&delete this._hooks[o]}}deprecateHook(o,n){this._deprecatedHooks[o]=typeof n=="string"?{to:n}:n;const t=this._hooks[o]||[];this._hooks[o]=void 0;for(const l of t)this.hook(o,l)}deprecateHooks(o){Object.assign(this._deprecatedHooks,o);for(const n in o)this.deprecateHook(n,o[n])}addHooks(o){const n=la(o),t=Object.keys(n).map(l=>this.hook(l,n[l]));return()=>{for(const l of t.splice(0,t.length))l()}}removeHooks(o){const n=la(o);for(const t in n)this.removeHook(t,n[t])}callHook(o,...n){return this.callHookWith(Uh,o,...n)}callHookParallel(o,...n){return this.callHookWith(Vh,o,...n)}callHookWith(o,n,...t){const l=this._before||this._after?{name:n,args:t,context:{}}:void 0;this._before&&Br(this._before,l);const a=o(this._hooks[n]||[],t);return a instanceof Promise?a.finally(()=>{this._after&&l&&Br(this._after,l)}):(this._after&&l&&Br(this._after,l),a)}beforeEach(o){return this._before=this._before||[],this._before.push(o),()=>{const n=this._before.indexOf(o);n!==-1&&this._before.splice(n,1)}}afterEach(o){return this._after=this._after||[],this._after.push(o),()=>{const n=this._after.indexOf(o);n!==-1&&this._after.splice(n,1)}}}function Gh(){return new jh}function Wh(s){return Array.isArray(s)?s:[s]}const Cy=["title","script","style","noscript"],rc=["base","meta","link","style","script","noscript"],zh=["title","titleTemplate","templateParams","base","htmlAttrs","bodyAttrs","meta","link","style","script","noscript"],Kh=["base","title","titleTemplate","bodyAttrs","htmlAttrs"],Yh=["tagPosition","tagPriority","tagDuplicateStrategy","innerHTML","textContent"];function Dy(s){let o=9;for(let n=0;n<s.length;)o=Math.imul(o^s.charCodeAt(n++),9**9);return((o^o>>>9)+65536).toString(16).substring(1,8).toLowerCase()}function xl(s){return Dy(`${s.tag}:${s.textContent||s.innerHTML||""}:${Object.entries(s.props).map(([o,n])=>`${o}:${String(n)}`).join(",")}`)}function Zh(s){let o=9;for(const n of s)for(let t=0;t<n.length;)o=Math.imul(o^n.charCodeAt(t++),9**9);return((o^o>>>9)+65536).toString(16).substring(1,8).toLowerCase()}function Ey(s,o){const{props:n,tag:t}=s;if(Kh.includes(t))return t;if(t==="link"&&n.rel==="canonical")return"canonical";if(n.charset)return"charset";const l=["id"];t==="meta"&&l.push("name","property","http-equiv");for(const a of l)if(typeof n[a]<"u"){const c=String(n[a]);return o&&!o(c)?!1:`${t}:${a}:${c}`}return!1}const ol=(s,o=!1,n)=>{const{tag:t,$el:l}=s;l&&(Object.entries(t.props).forEach(([a,c])=>{c=String(c);const i=`attr:${a}`;if(a==="class"){if(!c)return;for(const p of c.split(" ")){const u=`${i}:${p}`;n&&n(s,u,()=>l.classList.remove(p)),l.classList.contains(p)||l.classList.add(p)}return}n&&!a.startsWith("data-h-")&&n(s,i,()=>l.removeAttribute(a)),(o||l.getAttribute(a)!==c)&&l.setAttribute(a,c)}),Cy.includes(t.tag)&&(t.textContent&&t.textContent!==l.textContent?l.textContent=t.textContent:t.innerHTML&&t.innerHTML!==l.innerHTML&&(l.innerHTML=t.innerHTML)))};let Gn=!1;async function by(s,o={}){var f,h;const n={shouldRender:!0};if(await s.hooks.callHook("dom:beforeRender",n),!n.shouldRender)return;const t=o.document||s.resolvedOptions.document||window.document,l=(await s.resolveTags()).map(i);if(s.resolvedOptions.experimentalHashHydration&&(Gn=Gn||s._hash||!1,Gn)){const m=Zh(l.map(B=>B.tag._h));if(Gn===m)return;Gn=m}const a=s._popSideEffectQueue();s.headEntries().map(m=>m._sde).forEach(m=>{Object.entries(m).forEach(([B,A])=>{a[B]=A})});const c=(m,B,A)=>{B=`${m.renderId}:${B}`,m.entry&&(m.entry._sde[B]=A),delete a[B]};function i(m){const B=s.headEntries().find(b=>b._i===m._e),A={renderId:m._d||xl(m),$el:null,shouldRender:!0,tag:m,entry:B,markSideEffect:(b,v)=>c(A,b,v)};return A}const p=[],u={body:[],head:[]},y=m=>{s._elMap[m.renderId]=m.$el,p.push(m),c(m,"el",()=>{var B;(B=m.$el)==null||B.remove(),delete s._elMap[m.renderId]})};for(const m of l){if(await s.hooks.callHook("dom:beforeRenderTag",m),!m.shouldRender)continue;const{tag:B}=m;if(B.tag==="title"){t.title=B.textContent||"",p.push(m);continue}if(B.tag==="htmlAttrs"||B.tag==="bodyAttrs"){m.$el=t[B.tag==="htmlAttrs"?"documentElement":"body"],ol(m,!1,c),p.push(m);continue}if(m.$el=s._elMap[m.renderId],!m.$el&&B.key&&(m.$el=t.querySelector(`${(f=B.tagPosition)!=null&&f.startsWith("body")?"body":"head"} > ${B.tag}[data-h-${B._h}]`)),m.$el){m.tag._d&&ol(m),y(m);continue}u[(h=B.tagPosition)!=null&&h.startsWith("body")?"body":"head"].push(m)}const d={bodyClose:void 0,bodyOpen:void 0,head:void 0};Object.entries(u).forEach(([m,B])=>{var b;if(!B.length)return;const A=(b=t==null?void 0:t[m])==null?void 0:b.children;if(A){for(const v of[...A].reverse()){const D=v.tagName.toLowerCase();if(!rc.includes(D))continue;const w=v.getAttributeNames().reduce((I,G)=>({...I,[G]:v.getAttribute(G)}),{}),T={tag:D,props:w};v.innerHTML&&(T.innerHTML=v.innerHTML);const H=xl(T);let z=B.findIndex(I=>(I==null?void 0:I.renderId)===H);if(z===-1){const I=Ey(T);z=B.findIndex(G=>(G==null?void 0:G.tag._d)&&G.tag._d===I)}if(z!==-1){const I=B[z];I.$el=v,ol(I),y(I),delete B[z]}}B.forEach(v=>{const D=v.tag.tagPosition||"head";d[D]=d[D]||t.createDocumentFragment(),v.$el||(v.$el=t.createElement(v.tag.tag),ol(v,!0)),d[D].appendChild(v.$el),y(v)})}}),d.head&&t.head.appendChild(d.head),d.bodyOpen&&t.body.insertBefore(d.bodyOpen,t.body.firstChild),d.bodyClose&&t.body.appendChild(d.bodyClose);for(const m of p)await s.hooks.callHook("dom:renderTag",m);Object.values(a).forEach(m=>m())}let Ar=null;async function ky(s,o={}){function n(){return Ar=null,by(s,o)}const t=o.delayFn||(l=>setTimeout(l,10));return Ar=Ar||new Promise(l=>t(()=>l(n())))}const Qh=s=>({hooks:{"entries:updated":function(o){if(typeof(s==null?void 0:s.document)>"u"&&typeof window>"u")return;let n=s==null?void 0:s.delayFn;!n&&typeof requestAnimationFrame<"u"&&(n=requestAnimationFrame),ky(o,{document:(s==null?void 0:s.document)||window.document,delayFn:n})}}});function Jh(s){var o;return((o=s==null?void 0:s.head.querySelector('meta[name="unhead:ssr"]'))==null?void 0:o.getAttribute("content"))||!1}const bi={critical:2,high:9,low:12,base:-1,title:1,meta:10};function ki(s){if(typeof s.tagPriority=="number")return s.tagPriority;if(s.tag==="meta"){if(s.props.charset)return-2;if(s.props["http-equiv"]==="content-security-policy")return 0}const o=s.tagPriority||s.tag;return o in bi?bi[o]:10}const Xh=[{prefix:"before:",offset:-1},{prefix:"after:",offset:1}];function e5(){return{hooks:{"tags:resolve":s=>{const o=n=>{var t;return(t=s.tags.find(l=>l._d===n))==null?void 0:t._p};for(const{prefix:n,offset:t}of Xh)for(const l of s.tags.filter(a=>typeof a.tagPriority=="string"&&a.tagPriority.startsWith(n))){const a=o(l.tagPriority.replace(n,""));typeof a<"u"&&(l._p=a+t)}s.tags.sort((n,t)=>n._p-t._p).sort((n,t)=>ki(n)-ki(t))}}}}const wi=(s,o)=>s==null?o||null:typeof s=="function"?s(o):s.replace("%s",o??""),s5=()=>({hooks:{"tags:resolve":s=>{const{tags:o}=s;let n=o.findIndex(l=>l.tag==="titleTemplate");const t=o.findIndex(l=>l.tag==="title");if(t!==-1&&n!==-1){const l=wi(o[n].textContent,o[t].textContent);l!==null?o[t].textContent=l||o[t].textContent:delete o[t]}else if(n!==-1){const l=wi(o[n].textContent);l!==null&&(o[n].textContent=l,o[n].tag="title",n=-1)}n!==-1&&delete o[n],s.tags=o.filter(Boolean)}}}),o5=()=>({hooks:{"tag:normalise":function({tag:s}){typeof s.props.body<"u"&&(s.tagPosition="bodyClose",delete s.props.body)}}}),wy=typeof window<"u",n5=()=>({hooks:{"tag:normalise":s=>{var a,c;const{tag:o,entry:n,resolvedOptions:t}=s;t.experimentalHashHydration===!0&&(o._h=xl(o));const l=typeof o.props._dynamic<"u";!rc.includes(o.tag)||!o.key||wy||(c=(a=Ry())==null?void 0:a.resolvedOptions)!=null&&c.document||(n._m==="server"||l)&&(o._h=o._h||xl(o),o.props[`data-h-${o._h}`]="")},"tags:resolve":s=>{s.tags=s.tags.map(o=>(delete o.props._dynamic,o))}}}),Si=["script","link","bodyAttrs"],t5=()=>{const s=(o,n)=>{const t={},l={};Object.entries(n.props).forEach(([c,i])=>{c.startsWith("on")&&typeof i=="function"?l[c]=i:t[c]=i});let a;return o==="dom"&&n.tag==="script"&&typeof t.src=="string"&&typeof l.onload<"u"&&(a=t.src,delete t.src),{props:t,eventHandlers:l,delayedSrc:a}};return{hooks:{"ssr:render":function(o){o.tags=o.tags.map(n=>(!Si.includes(n.tag)||!Object.entries(n.props).find(([t,l])=>t.startsWith("on")&&typeof l=="function")||(n.props=s("ssr",n).props),n))},"dom:beforeRenderTag":function(o){if(!Si.includes(o.tag.tag)||!Object.entries(o.tag.props).find(([a,c])=>a.startsWith("on")&&typeof c=="function"))return;const{props:n,eventHandlers:t,delayedSrc:l}=s("dom",o.tag);Object.keys(t).length&&(o.tag.props=n,o.tag._eventHandlers=t,o.tag._delayedSrc=l)},"dom:renderTag":function(o){const n=o.$el;if(!o.tag._eventHandlers||!n)return;const t=o.tag.tag==="bodyAttrs"&&typeof window<"u"?window:n;Object.entries(o.tag._eventHandlers).forEach(([l,a])=>{const c=`${o.tag._d||o.tag._p}:${l}`,i=l.slice(2).toLowerCase(),p=`data-h-${i}`;if(o.markSideEffect(c,()=>{}),n.hasAttribute(p))return;const u=a;n.setAttribute(p,""),t.addEventListener(i,u),o.entry&&(o.entry._sde[c]=()=>{t.removeEventListener(i,u),n.removeAttribute(p)})}),o.tag._delayedSrc&&n.setAttribute("src",o.tag._delayedSrc)}}}},l5=["templateParams","htmlAttrs","bodyAttrs"],r5=s=>{s=s||{};const o=s.dedupeKeys||["hid","vmid","key"];return{hooks:{"tag:normalise":function({tag:n}){o.forEach(l=>{n.props[l]&&(n.key=n.props[l],delete n.props[l])});const t=n.key?`${n.tag}:${n.key}`:Ey(n);t&&(n._d=t)},"tags:resolve":function(n){const t={};n.tags.forEach(a=>{const c=a._d||a._p,i=t[c];if(i){let p=a==null?void 0:a.tagDuplicateStrategy;if(!p&&l5.includes(a.tag)&&(p="merge"),p==="merge"){const y=i.props;["class","style"].forEach(d=>{a.props[d]&&y[d]&&(d==="style"&&!y[d].endsWith(";")&&(y[d]+=";"),a.props[d]=`${y[d]} ${a.props[d]}`)}),t[c].props={...y,...a.props};return}else if(a._e===i._e){i._duped=i._duped||[],a._d=`${i._d}:${i._duped.length+1}`,i._duped.push(a);return}const u=Object.keys(a.props).length;if((u===0||u===1&&typeof a.props["data-h-key"]<"u")&&!a.innerHTML&&!a.textContent){delete t[c];return}}t[c]=a});const l=[];Object.values(t).forEach(a=>{const c=a._duped;delete a._duped,l.push(a),c&&l.push(...c)}),n.tags=l}}}};function gr(s,o){const n=(l,a)=>{let c;return a==="pageTitle"||a==="s"?c=o.pageTitle:a.includes(".")?c=a.split(".").reduce((i,p)=>i[p]||"",o):c=o[a],c||""};let t=s.replace(/%(\w+\.+\w+)/g,n).replace(/%(\w+)/g,n).trim();return o.separator&&(t.endsWith(o.separator)&&(t=t.slice(0,-o.separator.length).trim()),t.startsWith(o.separator)&&(t=t.slice(o.separator.length).trim()),t=t.replace(new RegExp(`\\${o.separator}\\s*\\${o.separator}`,"g"),o.separator)),t}function a5(){return{hooks:{"tags:resolve":s=>{var a;const{tags:o}=s,n=(a=o.find(c=>c.tag==="title"))==null?void 0:a.textContent,t=o.findIndex(c=>c.tag==="templateParams"),l=t!==-1?o[t].textContent:{};l.pageTitle=l.pageTitle||n||"";for(const c of o)["titleTemplate","title"].includes(c.tag)&&typeof c.textContent=="string"?c.textContent=gr(c.textContent,l):c.tag==="meta"&&typeof c.props.content=="string"?c.props.content=gr(c.props.content,l):c.tag==="script"&&["application/json","application/ld+json"].includes(c.props.type)&&typeof c.innerHTML=="string"&&(c.innerHTML=gr(c.innerHTML,l));s.tags=o.filter(c=>c.tag!=="templateParams")}}}}let Sy;const c5=s=>Sy=s,Ry=()=>Sy;async function i5(s,o){const n={tag:s,props:{}};return["title","titleTemplate","templateParams"].includes(s)?(n.textContent=o instanceof Promise?await o:o,n):typeof o=="string"?["script","noscript","style"].includes(s)?(s==="script"&&(/^(https?:)?\/\//.test(o)||o.startsWith("/"))?n.props.src=o:(n.innerHTML=o,n.key=Dy(o)),n):!1:(n.props=await u5(s,{...o}),n.props.children&&(n.props.innerHTML=n.props.children),delete n.props.children,Object.keys(n.props).filter(t=>Yh.includes(t)).forEach(t=>{(!["innerHTML","textContent"].includes(t)||Cy.includes(n.tag))&&(n[t]=n.props[t]),delete n.props[t]}),["innerHTML","textContent"].forEach(t=>{if(n.tag==="script"&&typeof n[t]=="string"&&["application/ld+json","application/json"].includes(n.props.type))try{n[t]=JSON.parse(n[t])}catch{n[t]=""}typeof n[t]=="object"&&(n[t]=JSON.stringify(n[t]))}),n.props.class&&(n.props.class=p5(n.props.class)),n.props.content&&Array.isArray(n.props.content)?n.props.content.map(t=>({...n,props:{...n.props,content:t}})):n)}function p5(s){return typeof s=="object"&&!Array.isArray(s)&&(s=Object.keys(s).filter(o=>s[o])),(Array.isArray(s)?s.join(" "):s).split(" ").filter(o=>o.trim()).filter(Boolean).join(" ")}async function u5(s,o){for(const n of Object.keys(o)){const t=n.startsWith("data-");o[n]instanceof Promise&&(o[n]=await o[n]),String(o[n])==="true"?o[n]=t?"true":"":String(o[n])==="false"&&(t?o[n]="false":delete o[n])}return o}const y5=10;async function d5(s){const o=[];return Object.entries(s.resolvedInput).filter(([n,t])=>typeof t<"u"&&zh.includes(n)).forEach(([n,t])=>{const l=Wh(t);o.push(...l.map(a=>i5(n,a)).flat())}),(await Promise.all(o)).flat().filter(Boolean).map((n,t)=>(n._e=s._i,n._p=(s._i<<y5)+t,n))}const f5=()=>[r5(),e5(),a5(),s5(),n5(),t5(),o5()],m5=(s={})=>[Qh({document:s==null?void 0:s.document,delayFn:s==null?void 0:s.domDelayFn})];function h5(s={}){const o=_5({...s,plugins:[...m5(s),...(s==null?void 0:s.plugins)||[]]});return s.experimentalHashHydration&&o.resolvedOptions.document&&(o._hash=Jh(o.resolvedOptions.document)),c5(o),o}function _5(s={}){let o=[],n={},t=0;const l=Gh();s!=null&&s.hooks&&l.addHooks(s.hooks),s.plugins=[...f5(),...(s==null?void 0:s.plugins)||[]],s.plugins.forEach(i=>i.hooks&&l.addHooks(i.hooks)),s.document=s.document||(wy?document:void 0);const a=()=>l.callHook("entries:updated",c),c={resolvedOptions:s,headEntries(){return o},get hooks(){return l},use(i){i.hooks&&l.addHooks(i.hooks)},push(i,p){const u={_i:t++,input:i,_sde:{}};return p!=null&&p.mode&&(u._m=p==null?void 0:p.mode),p!=null&&p.transform&&(u._t=p==null?void 0:p.transform),o.push(u),a(),{dispose(){o=o.filter(y=>y._i!==u._i?!0:(n={...n,...y._sde||{}},y._sde={},a(),!1))},patch(y){o=o.map(d=>(d._i===u._i&&(u.input=d.input=y,a()),d))}}},async resolveTags(){const i={tags:[],entries:[...o]};await l.callHook("entries:resolve",i);for(const p of i.entries){const u=p._t||(y=>y);p.resolvedInput=u(p.resolvedInput||p.input);for(const y of await d5(p)){const d={tag:y,entry:p,resolvedOptions:c.resolvedOptions};await l.callHook("tag:normalise",d),i.tags.push(d.tag)}}return await l.callHook("tags:resolve",i),i.tags},_popSideEffectQueue(){const i={...n};return n={},i},_elMap:{}};return c.hooks.callHook("init",c),c}function B5(s){return typeof s=="function"?s():k(s)}function $l(s,o=""){if(s instanceof Promise)return s;const n=B5(s);if(!s||!n)return n;if(Array.isArray(n))return n.map(t=>$l(t,o));if(typeof n=="object"){let t=!1;const l=Object.fromEntries(Object.entries(n).map(([a,c])=>a==="titleTemplate"||a.startsWith("on")?[a,k(c)]:((typeof c=="function"||Ie(c))&&(t=!0),[a,$l(c,a)])));return t&&rc.includes(String(o))&&(l._dynamic=!0),l}return n}const A5=Rl.startsWith("3"),g5=typeof window<"u",xy="usehead";function ac(){return xs()&&F(xy)||Ry()}function v5(s){return{install(n){A5&&(n.config.globalProperties.$unhead=s,n.config.globalProperties.$head=s,n.provide(xy,s))}}.install}function C5(s={}){const o=h5({...s,domDelayFn:n=>setTimeout(()=>ns(()=>n()),10),plugins:[D5(),...(s==null?void 0:s.plugins)||[]]});return o.install=v5(o),o}const D5=()=>({hooks:{"entries:resolve":function(s){for(const o of s.entries)o.resolvedInput=$l(o.input)}}});function E5(s,o={}){const n=ac(),t=X(!1),l=X({});dn(()=>{l.value=t.value?{}:$l(s)});const a=n.push(l.value,o);return Ae(l,i=>{a.patch(i)}),xs()&&(Ht(()=>{a.dispose()}),zu(()=>{t.value=!0}),Wu(()=>{t.value=!1})),a}function b5(s,o={}){return ac().push(s,o)}function cc(s,o={}){var t;const n=ac();if(n){const l=g5||!!((t=n.resolvedOptions)!=null&&t.document);return o.mode==="server"&&l||o.mode==="client"&&!l?void 0:l?E5(s,o):b5(s,o)}}const k5=s=>cc({htmlAttrs:s});function w5(s,o){const n=C5(o||{}),t={unhead:n,install(l){Rl.startsWith("3")&&(l.config.globalProperties.$head=n,l.provide("usehead",n))},use(l){n.use(l)},resolveTags(){return n.resolveTags()},headEntries(){return n.headEntries()},headTags(){return n.resolveTags()},push(l,a){return n.push(l,a)},addEntry(l,a){return n.push(l,a)},addHeadObjs(l,a){return n.push(l,a)},addReactiveEntry(l,a){const c=cc(l,a);return typeof c<"u"?c.dispose:()=>{}},removeHeadObjs(){},updateDOM(l,a){a?by(n,{document:l}):ky(n,{delayFn:c=>setTimeout(()=>c(),50),document:l})},internalHooks:n.hooks,hooks:{"before:dom":[],"resolved:tags":[],"resolved:entries":[]}};return n.addHeadObjs=t.addHeadObjs,n.updateDOM=t.updateDOM,n.hooks.hook("dom:beforeRender",l=>{for(const a of t.hooks["before:dom"])a()===!1&&(l.shouldRender=!1)}),s&&t.addHeadObjs(s),t}const ct=Symbol("v-click-clicks"),Yo=Symbol("v-click-clicks-elements"),ra=Symbol("v-click-clicks-order-map"),it=Symbol("v-click-clicks-disabled"),$y=Symbol("slidev-slide-scale"),O=Symbol("slidev-slidev-context"),S5=Symbol("slidev-route"),R5=Symbol("slidev-slide-context"),zo="slidev-vclick-target",vr="slidev-vclick-hidden",x5="slidev-vclick-fade",Cr="slidev-vclick-hidden-explicitly",Wn="slidev-vclick-current",nl="slidev-vclick-prior",$5=["localhost","127.0.0.1"];let F5=(s=21)=>crypto.getRandomValues(new Uint8Array(s)).reduce((o,n)=>(n&=63,n<36?o+=n.toString(36):n<62?o+=(n-26).toString(36).toUpperCase():n>62?o+="-":o+="_",o),"");function I5(s){return s=s??[],Array.isArray(s)?s:[s]}function aa(s,o){if(!s)return!1;const n=s.indexOf(o);return n>=0?(s.splice(n,1),!0):!1}function T5(...s){let o,n,t;s.length===1?(o=0,t=1,[n]=s):[o,n,t=1]=s;const l=[];let a=o;for(;a<n;)l.push(a),a+=t||1;return l}function M5(s){return s!=null}function P5(s,o){return Object.fromEntries(Object.entries(s).map(([n,t])=>o(n,t)).filter(M5))}const nt={theme:"seriph",title:"Sylius Resource Formation",titleTemplate:"%s - Slidev",addons:[],remoteAssets:!1,monaco:"dev",download:!1,export:{},info:`<h2>Slidev Starter Template</h2>
<p>Presentation slides for developers.</p>
<p>Learn more at <a href="https://sli.dev" target="_blank" rel="noopener">Sli.dev</a></p>
`,highlighter:"shiki",lineNumbers:!1,colorSchema:"light",routerMode:"history",aspectRatio:1.7777777777777777,canvasWidth:980,exportFilename:"",selectable:!1,themeConfig:{},fonts:{sans:['"PT Serif"',"ui-sans-serif","system-ui","-apple-system","BlinkMacSystemFont",'"Segoe UI"',"Roboto",'"Helvetica Neue"',"Arial",'"Noto Sans"',"sans-serif",'"Apple Color Emoji"','"Segoe UI Emoji"','"Segoe UI Symbol"','"Noto Color Emoji"'],serif:['"PT Serif"',"ui-serif","Georgia","Cambria",'"Times New Roman"',"Times","serif"],mono:['"PT Mono"',"ui-monospace","SFMono-Regular","Menlo","Monaco","Consolas",'"Liberation Mono"','"Courier New"',"monospace"],webfonts:["PT Serif","PT Mono"],provider:"google",local:[],italic:!0,weights:["400","700"]},favicon:"https://cdn.jsdelivr.net/gh/slidevjs/slidev/assets/favicon.png",drawings:{enabled:!0,persist:!1,presenterOnly:!1,syncAll:!0},plantUmlServer:"https://www.plantuml.com/plantuml",codeCopy:!0,record:"dev",css:"unocss",presenter:!0,htmlAttrs:{},transition:"slide-left",background:!1,class:"text-center"},Fe=nt,$o=Fe.aspectRatio??16/9,Fo=Fe.canvasWidth??980,ic=Math.ceil(Fo/$o),pc=$(()=>P5(Fe.themeConfig||{},(s,o)=>[`--slidev-theme-${s}`,o]));function Os(s,o,n){Object.defineProperty(s,o,{value:n,writable:!0,enumerable:!1})}const mn=Ge({page:0,clicks:0});let O5=[],L5=[];Os(mn,"$syncUp",!0);Os(mn,"$syncDown",!0);Os(mn,"$paused",!1);Os(mn,"$onSet",s=>O5.push(s));Os(mn,"$onPatch",s=>L5.push(s));Os(mn,"$patch",async()=>!1);function Fy(s,o,n=!1){const t=[];let l=!1,a=!1,c,i;const p=Ge(o);function u(h){t.push(h)}function y(h,m){p[h]!==m&&(clearTimeout(c),l=!0,p[h]=m,c=setTimeout(()=>l=!1,0))}function d(h){l||(clearTimeout(i),a=!0,Object.entries(h).forEach(([m,B])=>{p[m]=B}),i=setTimeout(()=>a=!1,0))}function f(h){let m;n?n&&window.addEventListener("storage",A=>{A&&A.key===h&&A.newValue&&d(JSON.parse(A.newValue))}):(m=new BroadcastChannel(h),m.addEventListener("message",A=>d(A.data)));function B(){!n&&m&&!a?m.postMessage(me(p)):n&&!a&&window.localStorage.setItem(h,JSON.stringify(p)),l||t.forEach(A=>A(p))}if(Ae(p,B,{deep:!0}),n){const A=window.localStorage.getItem(h);A&&d(JSON.parse(A))}}return{init:f,onPatch:u,patch:y,state:p}}const{init:N5,onPatch:q5,patch:zn,state:Dr}=Fy(mn,{page:1,clicks:0,viewerPage:1,viewerClicks:0}),hn=Ge({});let H5=[],U5=[];Os(hn,"$syncUp",!0);Os(hn,"$syncDown",!0);Os(hn,"$paused",!1);Os(hn,"$onSet",s=>H5.push(s));Os(hn,"$onPatch",s=>U5.push(s));Os(hn,"$patch",async()=>!1);const{init:V5,onPatch:j5,patch:Iy,state:Fl}=Fy(hn,{},!1),G5="modulepreload",W5=function(s){return"/sylius-resource-formation/"+s},Ri={},Io=function(o,n,t){if(!n||n.length===0)return o();const l=document.getElementsByTagName("link");return Promise.all(n.map(a=>{if(a=W5(a),a in Ri)return;Ri[a]=!0;const c=a.endsWith(".css"),i=c?'[rel="stylesheet"]':"";if(!!t)for(let y=l.length-1;y>=0;y--){const d=l[y];if(d.href===a&&(!c||d.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${a}"]${i}`))return;const u=document.createElement("link");if(u.rel=c?"stylesheet":G5,c||(u.as="script",u.crossOrigin=""),u.href=a,document.head.appendChild(u),c)return new Promise((y,d)=>{u.addEventListener("load",y),u.addEventListener("error",()=>d(new Error(`Unable to preload CSS for ${a}`)))})})).then(()=>o())};var xi;const js=typeof window<"u",z5=s=>typeof s<"u",K5=Object.prototype.toString,kt=s=>typeof s=="function",Y5=s=>typeof s=="number",Ty=s=>typeof s=="string",ca=s=>K5.call(s)==="[object Object]",ia=()=>+Date.now(),$n=()=>{},Z5=js&&((xi=window==null?void 0:window.navigator)==null?void 0:xi.userAgent)&&/iP(ad|hone|od)/.test(window.navigator.userAgent);function rs(s){return typeof s=="function"?s():k(s)}function Q5(s,o){function n(...t){return new Promise((l,a)=>{Promise.resolve(s(()=>o.apply(this,t),{fn:o,thisArg:this,args:t})).then(l).catch(a)})}return n}const My=s=>s();function J5(s=My){const o=X(!0);function n(){o.value=!1}function t(){o.value=!0}const l=(...a)=>{o.value&&s(...a)};return{isActive:Zs(o),pause:n,resume:t,eventFilter:l}}function X5(s){return s}function e_(s,o){var n;if(typeof s=="number")return s+o;const t=((n=s.match(/^-?[0-9]+\.?[0-9]*/))==null?void 0:n[0])||"",l=s.slice(t.length),a=parseFloat(t)+o;return Number.isNaN(a)?s:a+l}function s_(s,o){let n,t,l;const a=X(!0),c=()=>{a.value=!0,l()};Ae(s,c,{flush:"sync"});const i=kt(o)?o:o.get,p=kt(o)?void 0:o.set,u=wu((y,d)=>(t=y,l=d,{get(){return a.value&&(n=i(),a.value=!1),t(),n},set(f){p==null||p(f)}}));return Object.isExtensible(u)&&(u.trigger=c),u}function so(s){return Va()?(uu(s),!0):!1}function o_(s){if(!Ie(s))return Ge(s);const o=new Proxy({},{get(n,t,l){return k(Reflect.get(s.value,t,l))},set(n,t,l){return Ie(s.value[t])&&!Ie(l)?s.value[t].value=l:s.value[t]=l,!0},deleteProperty(n,t){return Reflect.deleteProperty(s.value,t)},has(n,t){return Reflect.has(s.value,t)},ownKeys(){return Object.keys(s.value)},getOwnPropertyDescriptor(){return{enumerable:!0,configurable:!0}}});return Ge(o)}function Py(s){return typeof s=="function"?$(s):X(s)}var n_=Object.defineProperty,t_=Object.defineProperties,l_=Object.getOwnPropertyDescriptors,$i=Object.getOwnPropertySymbols,r_=Object.prototype.hasOwnProperty,a_=Object.prototype.propertyIsEnumerable,Fi=(s,o,n)=>o in s?n_(s,o,{enumerable:!0,configurable:!0,writable:!0,value:n}):s[o]=n,c_=(s,o)=>{for(var n in o||(o={}))r_.call(o,n)&&Fi(s,n,o[n]);if($i)for(var n of $i(o))a_.call(o,n)&&Fi(s,n,o[n]);return s},i_=(s,o)=>t_(s,l_(o));function p_(s){if(!Ie(s))return A8(s);const o=Array.isArray(s.value)?new Array(s.value.length):{};for(const n in s.value)o[n]=wu(()=>({get(){return s.value[n]},set(t){if(Array.isArray(s.value)){const l=[...s.value];l[n]=t,s.value=l}else{const l=i_(c_({},s.value),{[n]:t});Object.setPrototypeOf(l,s.value),s.value=l}}}));return o}function uc(s,o=!0){xs()?fn(s):o?s():ns(s)}function u_(s){xs()&&Jl(s)}function y_(s,o=1e3,n={}){const{immediate:t=!0,immediateCallback:l=!1}=n;let a=null;const c=X(!1);function i(){a&&(clearInterval(a),a=null)}function p(){c.value=!1,i()}function u(){const y=rs(o);y<=0||(c.value=!0,l&&s(),i(),a=setInterval(s,y))}if(t&&js&&u(),Ie(o)||kt(o)){const y=Ae(o,()=>{c.value&&js&&u()});so(y)}return so(p),{isActive:c,pause:p,resume:u}}function d_(s,o,n={}){const{immediate:t=!0}=n,l=X(!1);let a=null;function c(){a&&(clearTimeout(a),a=null)}function i(){l.value=!1,c()}function p(...u){c(),l.value=!0,a=setTimeout(()=>{l.value=!1,a=null,s(...u)},rs(o))}return t&&(l.value=!0,js&&p()),so(i),{isPending:Zs(l),start:p,stop:i}}function Oy(s=!1,o={}){const{truthyValue:n=!0,falsyValue:t=!1}=o,l=Ie(s),a=X(s);function c(i){if(arguments.length)return a.value=i,a.value;{const p=rs(n);return a.value=a.value===p?rs(t):p,a.value}}return l?c:[a,c]}var Ii=Object.getOwnPropertySymbols,f_=Object.prototype.hasOwnProperty,m_=Object.prototype.propertyIsEnumerable,h_=(s,o)=>{var n={};for(var t in s)f_.call(s,t)&&o.indexOf(t)<0&&(n[t]=s[t]);if(s!=null&&Ii)for(var t of Ii(s))o.indexOf(t)<0&&m_.call(s,t)&&(n[t]=s[t]);return n};function __(s,o,n={}){const t=n,{eventFilter:l=My}=t,a=h_(t,["eventFilter"]);return Ae(s,Q5(l,o),a)}var B_=Object.defineProperty,A_=Object.defineProperties,g_=Object.getOwnPropertyDescriptors,Il=Object.getOwnPropertySymbols,Ly=Object.prototype.hasOwnProperty,Ny=Object.prototype.propertyIsEnumerable,Ti=(s,o,n)=>o in s?B_(s,o,{enumerable:!0,configurable:!0,writable:!0,value:n}):s[o]=n,v_=(s,o)=>{for(var n in o||(o={}))Ly.call(o,n)&&Ti(s,n,o[n]);if(Il)for(var n of Il(o))Ny.call(o,n)&&Ti(s,n,o[n]);return s},C_=(s,o)=>A_(s,g_(o)),D_=(s,o)=>{var n={};for(var t in s)Ly.call(s,t)&&o.indexOf(t)<0&&(n[t]=s[t]);if(s!=null&&Il)for(var t of Il(s))o.indexOf(t)<0&&Ny.call(s,t)&&(n[t]=s[t]);return n};function E_(s,o,n={}){const t=n,{eventFilter:l}=t,a=D_(t,["eventFilter"]),{eventFilter:c,pause:i,resume:p,isActive:u}=J5(l);return{stop:__(s,o,C_(v_({},a),{eventFilter:c})),pause:i,resume:p,isActive:u}}function ws(s){var o;const n=rs(s);return(o=n==null?void 0:n.$el)!=null?o:n}const ss=js?window:void 0,qy=js?window.document:void 0,b_=js?window.navigator:void 0;function ve(...s){let o,n,t,l;if(Ty(s[0])||Array.isArray(s[0])?([n,t,l]=s,o=ss):[o,n,t,l]=s,!o)return $n;Array.isArray(n)||(n=[n]),Array.isArray(t)||(t=[t]);const a=[],c=()=>{a.forEach(y=>y()),a.length=0},i=(y,d,f,h)=>(y.addEventListener(d,f,h),()=>y.removeEventListener(d,f,h)),p=Ae(()=>[ws(o),rs(l)],([y,d])=>{c(),y&&a.push(...n.flatMap(f=>t.map(h=>i(y,f,h,d))))},{immediate:!0,flush:"post"}),u=()=>{p(),c()};return so(u),u}let Mi=!1;function k_(s,o,n={}){const{window:t=ss,ignore:l=[],capture:a=!0,detectIframe:c=!1}=n;if(!t)return;Z5&&!Mi&&(Mi=!0,Array.from(t.document.body.children).forEach(f=>f.addEventListener("click",$n)));let i=!0;const p=f=>l.some(h=>{if(typeof h=="string")return Array.from(t.document.querySelectorAll(h)).some(m=>m===f.target||f.composedPath().includes(m));{const m=ws(h);return m&&(f.target===m||f.composedPath().includes(m))}}),y=[ve(t,"click",f=>{const h=ws(s);if(!(!h||h===f.target||f.composedPath().includes(h))){if(f.detail===0&&(i=!p(f)),!i){i=!0;return}o(f)}},{passive:!0,capture:a}),ve(t,"pointerdown",f=>{const h=ws(s);h&&(i=!f.composedPath().includes(h)&&!p(f))},{passive:!0}),c&&ve(t,"blur",f=>{var h;const m=ws(s);((h=t.document.activeElement)==null?void 0:h.tagName)==="IFRAME"&&!(m!=null&&m.contains(t.document.activeElement))&&o(f)})].filter(Boolean);return()=>y.forEach(f=>f())}const w_=s=>typeof s=="function"?s:typeof s=="string"?o=>o.key===s:Array.isArray(s)?o=>s.includes(o.key):()=>!0;function S_(...s){let o,n,t={};s.length===3?(o=s[0],n=s[1],t=s[2]):s.length===2?typeof s[1]=="object"?(o=!0,n=s[0],t=s[1]):(o=s[0],n=s[1]):(o=!0,n=s[0]);const{target:l=ss,eventName:a="keydown",passive:c=!1}=t,i=w_(o);return ve(l,a,u=>{i(u)&&n(u)},c)}function R_(s={}){var o;const{window:n=ss}=s,t=(o=s.document)!=null?o:n==null?void 0:n.document,l=s_(()=>null,()=>t==null?void 0:t.activeElement);return n&&(ve(n,"blur",a=>{a.relatedTarget===null&&l.trigger()},!0),ve(n,"focus",l.trigger,!0)),l}function jt(s,o=!1){const n=X(),t=()=>n.value=Boolean(s());return t(),uc(t,o),n}function En(s,o={}){const{window:n=ss}=o,t=jt(()=>n&&"matchMedia"in n&&typeof n.matchMedia=="function");let l;const a=X(!1),c=()=>{l&&("removeEventListener"in l?l.removeEventListener("change",i):l.removeListener(i))},i=()=>{t.value&&(c(),l=n.matchMedia(Py(s).value),a.value=l.matches,"addEventListener"in l?l.addEventListener("change",i):l.addListener(i))};return dn(i),so(()=>c()),a}const x_={sm:640,md:768,lg:1024,xl:1280,"2xl":1536};var $_=Object.defineProperty,Pi=Object.getOwnPropertySymbols,F_=Object.prototype.hasOwnProperty,I_=Object.prototype.propertyIsEnumerable,Oi=(s,o,n)=>o in s?$_(s,o,{enumerable:!0,configurable:!0,writable:!0,value:n}):s[o]=n,T_=(s,o)=>{for(var n in o||(o={}))F_.call(o,n)&&Oi(s,n,o[n]);if(Pi)for(var n of Pi(o))I_.call(o,n)&&Oi(s,n,o[n]);return s};function M_(s,o={}){function n(i,p){let u=s[i];return p!=null&&(u=e_(u,p)),typeof u=="number"&&(u=`${u}px`),u}const{window:t=ss}=o;function l(i){return t?t.matchMedia(i).matches:!1}const a=i=>En(`(min-width: ${n(i)})`,o),c=Object.keys(s).reduce((i,p)=>(Object.defineProperty(i,p,{get:()=>a(p),enumerable:!0,configurable:!0}),i),{});return T_({greater(i){return En(`(min-width: ${n(i,.1)})`,o)},greaterOrEqual:a,smaller(i){return En(`(max-width: ${n(i,-.1)})`,o)},smallerOrEqual(i){return En(`(max-width: ${n(i)})`,o)},between(i,p){return En(`(min-width: ${n(i)}) and (max-width: ${n(p,-.1)})`,o)},isGreater(i){return l(`(min-width: ${n(i,.1)})`)},isGreaterOrEqual(i){return l(`(min-width: ${n(i)})`)},isSmaller(i){return l(`(max-width: ${n(i,-.1)})`)},isSmallerOrEqual(i){return l(`(max-width: ${n(i)})`)},isInBetween(i,p){return l(`(min-width: ${n(i)}) and (max-width: ${n(p,-.1)})`)}},c)}function P_(s={}){const{navigator:o=b_,read:n=!1,source:t,copiedDuring:l=1500,legacy:a=!1}=s,c=["copy","cut"],i=jt(()=>o&&"clipboard"in o),p=$(()=>i.value||a),u=X(""),y=X(!1),d=d_(()=>y.value=!1,l);function f(){i.value?o.clipboard.readText().then(A=>{u.value=A}):u.value=B()}if(p.value&&n)for(const A of c)ve(A,f);async function h(A=rs(t)){p.value&&A!=null&&(i.value?await o.clipboard.writeText(A):m(A),u.value=A,y.value=!0,d.start())}function m(A){const b=document.createElement("textarea");b.value=A??"",b.style.position="absolute",b.style.opacity="0",document.body.appendChild(b),b.select(),document.execCommand("copy"),b.remove()}function B(){var A,b,v;return(v=(b=(A=document==null?void 0:document.getSelection)==null?void 0:A.call(document))==null?void 0:b.toString())!=null?v:""}return{isSupported:p,text:u,copied:y,copy:h}}function O_(s){return JSON.parse(JSON.stringify(s))}const pa=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},ua="__vueuse_ssr_handlers__";pa[ua]=pa[ua]||{};const L_=pa[ua];function N_(s,o){return L_[s]||o}function q_(s){return s==null?"any":s instanceof Set?"set":s instanceof Map?"map":s instanceof Date?"date":typeof s=="boolean"?"boolean":typeof s=="string"?"string":typeof s=="object"?"object":Number.isNaN(s)?"any":"number"}var H_=Object.defineProperty,Li=Object.getOwnPropertySymbols,U_=Object.prototype.hasOwnProperty,V_=Object.prototype.propertyIsEnumerable,Ni=(s,o,n)=>o in s?H_(s,o,{enumerable:!0,configurable:!0,writable:!0,value:n}):s[o]=n,qi=(s,o)=>{for(var n in o||(o={}))U_.call(o,n)&&Ni(s,n,o[n]);if(Li)for(var n of Li(o))V_.call(o,n)&&Ni(s,n,o[n]);return s};const j_={boolean:{read:s=>s==="true",write:s=>String(s)},object:{read:s=>JSON.parse(s),write:s=>JSON.stringify(s)},number:{read:s=>Number.parseFloat(s),write:s=>String(s)},any:{read:s=>s,write:s=>String(s)},string:{read:s=>s,write:s=>String(s)},map:{read:s=>new Map(JSON.parse(s)),write:s=>JSON.stringify(Array.from(s.entries()))},set:{read:s=>new Set(JSON.parse(s)),write:s=>JSON.stringify(Array.from(s))},date:{read:s=>new Date(s),write:s=>s.toISOString()}},Hi="vueuse-storage";function G_(s,o,n,t={}){var l;const{flush:a="pre",deep:c=!0,listenToStorageChanges:i=!0,writeDefaults:p=!0,mergeDefaults:u=!1,shallow:y,window:d=ss,eventFilter:f,onError:h=I=>{console.error(I)}}=t,m=(y?eo:X)(o);if(!n)try{n=N_("getDefaultStorage",()=>{var I;return(I=ss)==null?void 0:I.localStorage})()}catch(I){h(I)}if(!n)return m;const B=rs(o),A=q_(B),b=(l=t.serializer)!=null?l:j_[A],{pause:v,resume:D}=E_(m,()=>w(m.value),{flush:a,deep:c,eventFilter:f});return d&&i&&(ve(d,"storage",z),ve(d,Hi,H)),z(),m;function w(I){try{if(I==null)n.removeItem(s);else{const G=b.write(I),ne=n.getItem(s);ne!==G&&(n.setItem(s,G),d&&d.dispatchEvent(new CustomEvent(Hi,{detail:{key:s,oldValue:ne,newValue:G,storageArea:n}})))}}catch(G){h(G)}}function T(I){const G=I?I.newValue:n.getItem(s);if(G==null)return p&&B!==null&&n.setItem(s,b.write(B)),B;if(!I&&u){const ne=b.read(G);return kt(u)?u(ne,B):A==="object"&&!Array.isArray(ne)?qi(qi({},B),ne):ne}else return typeof G!="string"?G:b.read(G)}function H(I){z(I.detail)}function z(I){if(!(I&&I.storageArea!==n)){if(I&&I.key==null){m.value=B;return}if(!(I&&I.key!==s)){v();try{m.value=T(I)}catch(G){h(G)}finally{I?ns(D):D()}}}}}function W_(s){return En("(prefers-color-scheme: dark)",s)}var z_=Object.defineProperty,K_=Object.defineProperties,Y_=Object.getOwnPropertyDescriptors,Ui=Object.getOwnPropertySymbols,Z_=Object.prototype.hasOwnProperty,Q_=Object.prototype.propertyIsEnumerable,Vi=(s,o,n)=>o in s?z_(s,o,{enumerable:!0,configurable:!0,writable:!0,value:n}):s[o]=n,J_=(s,o)=>{for(var n in o||(o={}))Z_.call(o,n)&&Vi(s,n,o[n]);if(Ui)for(var n of Ui(o))Q_.call(o,n)&&Vi(s,n,o[n]);return s},X_=(s,o)=>K_(s,Y_(o));function VS(s,o={}){var n,t,l;const a=(n=o.draggingElement)!=null?n:ss,c=(t=o.handle)!=null?t:s,i=X((l=rs(o.initialValue))!=null?l:{x:0,y:0}),p=X(),u=m=>o.pointerTypes?o.pointerTypes.includes(m.pointerType):!0,y=m=>{rs(o.preventDefault)&&m.preventDefault(),rs(o.stopPropagation)&&m.stopPropagation()},d=m=>{var B;if(!u(m)||rs(o.exact)&&m.target!==rs(s))return;const A=rs(s).getBoundingClientRect(),b={x:m.clientX-A.left,y:m.clientY-A.top};((B=o.onStart)==null?void 0:B.call(o,b,m))!==!1&&(p.value=b,y(m))},f=m=>{var B;u(m)&&p.value&&(i.value={x:m.clientX-p.value.x,y:m.clientY-p.value.y},(B=o.onMove)==null||B.call(o,i.value,m),y(m))},h=m=>{var B;u(m)&&p.value&&(p.value=void 0,(B=o.onEnd)==null||B.call(o,i.value,m),y(m))};return js&&(ve(c,"pointerdown",d,!0),ve(a,"pointermove",f,!0),ve(a,"pointerup",h,!0)),X_(J_({},p_(i)),{position:i,isDragging:$(()=>!!p.value),style:$(()=>`left:${i.value.x}px;top:${i.value.y}px;`)})}var ji=Object.getOwnPropertySymbols,eB=Object.prototype.hasOwnProperty,sB=Object.prototype.propertyIsEnumerable,oB=(s,o)=>{var n={};for(var t in s)eB.call(s,t)&&o.indexOf(t)<0&&(n[t]=s[t]);if(s!=null&&ji)for(var t of ji(s))o.indexOf(t)<0&&sB.call(s,t)&&(n[t]=s[t]);return n};function nB(s,o,n={}){const t=n,{window:l=ss}=t,a=oB(t,["window"]);let c;const i=jt(()=>l&&"ResizeObserver"in l),p=()=>{c&&(c.disconnect(),c=void 0)},u=Ae(()=>ws(s),d=>{p(),i.value&&l&&d&&(c=new ResizeObserver(o),c.observe(d,a))},{immediate:!0,flush:"post"}),y=()=>{p(),u()};return so(y),{isSupported:i,stop:y}}function tB(s,o={}){const{immediate:n=!0,window:t=ss}=o,l=X(!1);let a=0,c=null;function i(y){if(!l.value||!t)return;const d=y-a;s({delta:d,timestamp:y}),a=y,c=t.requestAnimationFrame(i)}function p(){!l.value&&t&&(l.value=!0,c=t.requestAnimationFrame(i))}function u(){l.value=!1,c!=null&&t&&(t.cancelAnimationFrame(c),c=null)}return n&&p(),so(u),{isActive:Zs(l),pause:u,resume:p}}function lB(s,o={width:0,height:0},n={}){const{window:t=ss,box:l="content-box"}=n,a=$(()=>{var p,u;return(u=(p=ws(s))==null?void 0:p.namespaceURI)==null?void 0:u.includes("svg")}),c=X(o.width),i=X(o.height);return nB(s,([p])=>{const u=l==="border-box"?p.borderBoxSize:l==="content-box"?p.contentBoxSize:p.devicePixelContentBoxSize;if(t&&a.value){const y=ws(s);if(y){const d=t.getComputedStyle(y);c.value=parseFloat(d.width),i.value=parseFloat(d.height)}}else if(u){const y=Array.isArray(u)?u:[u];c.value=y.reduce((d,{inlineSize:f})=>d+f,0),i.value=y.reduce((d,{blockSize:f})=>d+f,0)}else c.value=p.contentRect.width,i.value=p.contentRect.height},n),Ae(()=>ws(s),p=>{c.value=p?o.width:0,i.value=p?o.height:0}),{width:c,height:i}}const Gi=[["requestFullscreen","exitFullscreen","fullscreenElement","fullscreenEnabled","fullscreenchange","fullscreenerror"],["webkitRequestFullscreen","webkitExitFullscreen","webkitFullscreenElement","webkitFullscreenEnabled","webkitfullscreenchange","webkitfullscreenerror"],["webkitRequestFullScreen","webkitCancelFullScreen","webkitCurrentFullScreenElement","webkitCancelFullScreen","webkitfullscreenchange","webkitfullscreenerror"],["mozRequestFullScreen","mozCancelFullScreen","mozFullScreenElement","mozFullScreenEnabled","mozfullscreenchange","mozfullscreenerror"],["msRequestFullscreen","msExitFullscreen","msFullscreenElement","msFullscreenEnabled","MSFullscreenChange","MSFullscreenError"]];function rB(s,o={}){const{document:n=qy,autoExit:t=!1}=o,l=s||(n==null?void 0:n.querySelector("html")),a=X(!1);let c=Gi[0];const i=jt(()=>{if(n){for(const B of Gi)if(B[1]in n)return c=B,!0}else return!1;return!1}),[p,u,y,,d]=c;async function f(){i.value&&(n!=null&&n[y]&&await n[u](),a.value=!1)}async function h(){if(!i.value)return;await f();const B=ws(l);B&&(await B[p](),a.value=!0)}async function m(){a.value?await f():await h()}return n&&ve(n,d,()=>{a.value=!!(n!=null&&n[y])},!1),t&&so(f),{isSupported:i,isFullscreen:a,enter:h,exit:f,toggle:m}}function aB(s,o,n={}){const{root:t,rootMargin:l="0px",threshold:a=.1,window:c=ss}=n,i=jt(()=>c&&"IntersectionObserver"in c);let p=$n;const u=i.value?Ae(()=>({el:ws(s),root:ws(t)}),({el:d,root:f})=>{if(p(),!d)return;const h=new IntersectionObserver(o,{root:f,rootMargin:l,threshold:a});h.observe(d),p=()=>{h.disconnect(),p=$n}},{immediate:!0,flush:"post"}):$n,y=()=>{p(),u()};return so(y),{isSupported:i,stop:y}}function Gs(s,o,n={}){const{window:t=ss}=n;return G_(s,o,t==null?void 0:t.localStorage,n)}const cB={ctrl:"control",command:"meta",cmd:"meta",option:"alt",up:"arrowup",down:"arrowdown",left:"arrowleft",right:"arrowright"};function iB(s={}){const{reactive:o=!1,target:n=ss,aliasMap:t=cB,passive:l=!0,onEventFired:a=$n}=s,c=Ge(new Set),i={toJSON(){return{}},current:c},p=o?Ge(i):i,u=new Set,y=new Set;function d(B,A){B in p&&(o?p[B]=A:p[B].value=A)}function f(){c.clear();for(const B of y)d(B,!1)}function h(B,A){var b,v;const D=(b=B.key)==null?void 0:b.toLowerCase(),T=[(v=B.code)==null?void 0:v.toLowerCase(),D].filter(Boolean);D&&(A?c.add(D):c.delete(D));for(const H of T)y.add(H),d(H,A);D==="meta"&&!A?(u.forEach(H=>{c.delete(H),d(H,!1)}),u.clear()):typeof B.getModifierState=="function"&&B.getModifierState("Meta")&&A&&[...c,...T].forEach(H=>u.add(H))}ve(n,"keydown",B=>(h(B,!0),a(B)),{passive:l}),ve(n,"keyup",B=>(h(B,!1),a(B)),{passive:l}),ve("blur",f,{passive:!0}),ve("focus",f,{passive:!0});const m=new Proxy(p,{get(B,A,b){if(typeof A!="string")return Reflect.get(B,A,b);if(A=A.toLowerCase(),A in t&&(A=t[A]),!(A in p))if(/[+_-]/.test(A)){const D=A.split(/[+_-]/g).map(w=>w.trim());p[A]=$(()=>D.every(w=>k(m[w])))}else p[A]=X(!1);const v=Reflect.get(B,A,b);return o?k(v):v}});return m}function jS(s={}){const{type:o="page",touch:n=!0,resetOnTouchEnds:t=!1,initialValue:l={x:0,y:0},window:a=ss,eventFilter:c}=s,i=X(l.x),p=X(l.y),u=X(null),y=B=>{o==="page"?(i.value=B.pageX,p.value=B.pageY):o==="client"?(i.value=B.clientX,p.value=B.clientY):o==="movement"&&(i.value=B.movementX,p.value=B.movementY),u.value="mouse"},d=()=>{i.value=l.x,p.value=l.y},f=B=>{if(B.touches.length>0){const A=B.touches[0];o==="page"?(i.value=A.pageX,p.value=A.pageY):o==="client"&&(i.value=A.clientX,p.value=A.clientY),u.value="touch"}},h=B=>c===void 0?y(B):c(()=>y(B),{}),m=B=>c===void 0?f(B):c(()=>f(B),{});return a&&(ve(a,"mousemove",h,{passive:!0}),ve(a,"dragover",h,{passive:!0}),n&&o!=="movement"&&(ve(a,"touchstart",m,{passive:!0}),ve(a,"touchmove",m,{passive:!0}),t&&ve(a,"touchend",d,{passive:!0}))),{x:i,y:p,sourceType:u}}var io;(function(s){s.UP="UP",s.RIGHT="RIGHT",s.DOWN="DOWN",s.LEFT="LEFT",s.NONE="NONE"})(io||(io={}));function pB(s,o={}){const n=Py(s),{threshold:t=50,onSwipe:l,onSwipeEnd:a,onSwipeStart:c}=o,i=Ge({x:0,y:0}),p=(H,z)=>{i.x=H,i.y=z},u=Ge({x:0,y:0}),y=(H,z)=>{u.x=H,u.y=z},d=$(()=>i.x-u.x),f=$(()=>i.y-u.y),{max:h,abs:m}=Math,B=$(()=>h(m(d.value),m(f.value))>=t),A=X(!1),b=X(!1),v=$(()=>B.value?m(d.value)>m(f.value)?d.value>0?io.LEFT:io.RIGHT:f.value>0?io.UP:io.DOWN:io.NONE),D=H=>{var z,I,G;const ne=H.buttons===0,ue=H.buttons===1;return(G=(I=(z=o.pointerTypes)==null?void 0:z.includes(H.pointerType))!=null?I:ne||ue)!=null?G:!0},w=[ve(s,"pointerdown",H=>{var z,I;if(!D(H))return;b.value=!0,(I=(z=n.value)==null?void 0:z.style)==null||I.setProperty("touch-action","none");const G=H.target;G==null||G.setPointerCapture(H.pointerId);const{clientX:ne,clientY:ue}=H;p(ne,ue),y(ne,ue),c==null||c(H)}),ve(s,"pointermove",H=>{if(!D(H)||!b.value)return;const{clientX:z,clientY:I}=H;y(z,I),!A.value&&B.value&&(A.value=!0),A.value&&(l==null||l(H))}),ve(s,"pointerup",H=>{var z,I;D(H)&&(A.value&&(a==null||a(H,v.value)),b.value=!1,A.value=!1,(I=(z=n.value)==null?void 0:z.style)==null||I.setProperty("touch-action","initial"))})],T=()=>w.forEach(H=>H());return{isSwiping:Zs(A),direction:Zs(v),posStart:Zs(i),posEnd:Zs(u),distanceX:d,distanceY:f,stop:T}}let uB=0;function GS(s,o={}){const n=X(!1),{document:t=qy,immediate:l=!0,manual:a=!1,id:c=`vueuse_styletag_${++uB}`}=o,i=X(s);let p=()=>{};const u=()=>{if(!t)return;const d=t.getElementById(c)||t.createElement("style");d.isConnected||(d.type="text/css",d.id=c,o.media&&(d.media=o.media),t.head.appendChild(d)),!n.value&&(p=Ae(i,f=>{d.textContent=f},{immediate:!0}),n.value=!0)},y=()=>{!t||!n.value||(p(),t.head.removeChild(t.getElementById(c)),n.value=!1)};return l&&!a&&uc(u),a||so(y),{id:c,css:i,unload:y,load:u,isLoaded:Zs(n)}}var yB=Object.defineProperty,Wi=Object.getOwnPropertySymbols,dB=Object.prototype.hasOwnProperty,fB=Object.prototype.propertyIsEnumerable,zi=(s,o,n)=>o in s?yB(s,o,{enumerable:!0,configurable:!0,writable:!0,value:n}):s[o]=n,mB=(s,o)=>{for(var n in o||(o={}))dB.call(o,n)&&zi(s,n,o[n]);if(Wi)for(var n of Wi(o))fB.call(o,n)&&zi(s,n,o[n]);return s};function WS(s={}){const{controls:o=!1,offset:n=0,immediate:t=!0,interval:l="requestAnimationFrame",callback:a}=s,c=X(ia()+n),i=()=>c.value=ia()+n,p=a?()=>{i(),a(c.value)}:i,u=l==="requestAnimationFrame"?tB(p,{immediate:t}):y_(p,l,{immediate:t});return o?mB({timestamp:c},u):c}var hB=Object.defineProperty,Ki=Object.getOwnPropertySymbols,_B=Object.prototype.hasOwnProperty,BB=Object.prototype.propertyIsEnumerable,Yi=(s,o,n)=>o in s?hB(s,o,{enumerable:!0,configurable:!0,writable:!0,value:n}):s[o]=n,AB=(s,o)=>{for(var n in o||(o={}))_B.call(o,n)&&Yi(s,n,o[n]);if(Ki)for(var n of Ki(o))BB.call(o,n)&&Yi(s,n,o[n]);return s};const gB={easeInSine:[.12,0,.39,0],easeOutSine:[.61,1,.88,1],easeInOutSine:[.37,0,.63,1],easeInQuad:[.11,0,.5,0],easeOutQuad:[.5,1,.89,1],easeInOutQuad:[.45,0,.55,1],easeInCubic:[.32,0,.67,0],easeOutCubic:[.33,1,.68,1],easeInOutCubic:[.65,0,.35,1],easeInQuart:[.5,0,.75,0],easeOutQuart:[.25,1,.5,1],easeInOutQuart:[.76,0,.24,1],easeInQuint:[.64,0,.78,0],easeOutQuint:[.22,1,.36,1],easeInOutQuint:[.83,0,.17,1],easeInExpo:[.7,0,.84,0],easeOutExpo:[.16,1,.3,1],easeInOutExpo:[.87,0,.13,1],easeInCirc:[.55,0,1,.45],easeOutCirc:[0,.55,.45,1],easeInOutCirc:[.85,0,.15,1],easeInBack:[.36,0,.66,-.56],easeOutBack:[.34,1.56,.64,1],easeInOutBack:[.68,-.6,.32,1.6]};AB({linear:X5},gB);function Qs(s,o,n,t={}){var l,a,c;const{clone:i=!1,passive:p=!1,eventName:u,deep:y=!1,defaultValue:d}=t,f=xs(),h=n||(f==null?void 0:f.emit)||((l=f==null?void 0:f.$emit)==null?void 0:l.bind(f))||((c=(a=f==null?void 0:f.proxy)==null?void 0:a.$emit)==null?void 0:c.bind(f==null?void 0:f.proxy));let m=u;o||(o="modelValue"),m=u||m||`update:${o.toString()}`;const B=b=>i?kt(i)?i(b):O_(b):b,A=()=>z5(s[o])?B(s[o]):d;if(p){const b=A(),v=X(b);return Ae(()=>s[o],D=>v.value=B(D)),Ae(v,D=>{(D!==s[o]||y)&&h(m,D)},{deep:y}),v}else return $({get(){return A()},set(b){h(m,b)}})}function zS({window:s=ss}={}){if(!s)return X(!1);const o=X(s.document.hasFocus());return ve(s,"blur",()=>{o.value=!1}),ve(s,"focus",()=>{o.value=!0}),o}function vB(s={}){const{window:o=ss,initialWidth:n=1/0,initialHeight:t=1/0,listenOrientation:l=!0,includeScrollbar:a=!0}=s,c=X(n),i=X(t),p=()=>{o&&(a?(c.value=o.innerWidth,i.value=o.innerHeight):(c.value=o.document.documentElement.clientWidth,i.value=o.document.documentElement.clientHeight))};return p(),uc(p),ve("resize",p,{passive:!0}),l&&ve("orientationchange",p,{passive:!0}),{width:c,height:i}}function CB(){return Hy().__VUE_DEVTOOLS_GLOBAL_HOOK__}function Hy(){return typeof navigator<"u"&&typeof window<"u"?window:typeof global<"u"?global:{}}const DB=typeof Proxy=="function",EB="devtools-plugin:setup",bB="plugin:settings:set";let Bn,ya;function kB(){var s;return Bn!==void 0||(typeof window<"u"&&window.performance?(Bn=!0,ya=window.performance):typeof global<"u"&&(!((s=global.perf_hooks)===null||s===void 0)&&s.performance)?(Bn=!0,ya=global.perf_hooks.performance):Bn=!1),Bn}function wB(){return kB()?ya.now():Date.now()}class SB{constructor(o,n){this.target=null,this.targetQueue=[],this.onQueue=[],this.plugin=o,this.hook=n;const t={};if(o.settings)for(const c in o.settings){const i=o.settings[c];t[c]=i.defaultValue}const l=`__vue-devtools-plugin-settings__${o.id}`;let a=Object.assign({},t);try{const c=localStorage.getItem(l),i=JSON.parse(c);Object.assign(a,i)}catch{}this.fallbacks={getSettings(){return a},setSettings(c){try{localStorage.setItem(l,JSON.stringify(c))}catch{}a=c},now(){return wB()}},n&&n.on(bB,(c,i)=>{c===this.plugin.id&&this.fallbacks.setSettings(i)}),this.proxiedOn=new Proxy({},{get:(c,i)=>this.target?this.target.on[i]:(...p)=>{this.onQueue.push({method:i,args:p})}}),this.proxiedTarget=new Proxy({},{get:(c,i)=>this.target?this.target[i]:i==="on"?this.proxiedOn:Object.keys(this.fallbacks).includes(i)?(...p)=>(this.targetQueue.push({method:i,args:p,resolve:()=>{}}),this.fallbacks[i](...p)):(...p)=>new Promise(u=>{this.targetQueue.push({method:i,args:p,resolve:u})})})}async setRealTarget(o){this.target=o;for(const n of this.onQueue)this.target.on[n.method](...n.args);for(const n of this.targetQueue)n.resolve(await this.target[n.method](...n.args))}}function RB(s,o){const n=s,t=Hy(),l=CB(),a=DB&&n.enableEarlyProxy;if(l&&(t.__VUE_DEVTOOLS_PLUGIN_API_AVAILABLE__||!a))l.emit(EB,s,o);else{const c=a?new SB(n,l):null;(t.__VUE_DEVTOOLS_PLUGINS__=t.__VUE_DEVTOOLS_PLUGINS__||[]).push({pluginDescriptor:n,setupFn:o,proxy:c}),c&&o(c.proxiedTarget)}}/*!
  * vue-router v4.1.6
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */const ao=typeof window<"u";function xB(s){return s.__esModule||s[Symbol.toStringTag]==="Module"}const Oe=Object.assign;function Er(s,o){const n={};for(const t in o){const l=o[t];n[t]=Rs(l)?l.map(s):s(l)}return n}const pt=()=>{},Rs=Array.isArray;function $e(s){const o=Array.from(arguments).slice(1);console.warn.apply(console,["[Vue Router warn]: "+s].concat(o))}const $B=/\/$/,FB=s=>s.replace($B,"");function br(s,o,n="/"){let t,l={},a="",c="";const i=o.indexOf("#");let p=o.indexOf("?");return i<p&&i>=0&&(p=-1),p>-1&&(t=o.slice(0,p),a=o.slice(p+1,i>-1?i:o.length),l=s(a)),i>-1&&(t=t||o.slice(0,i),c=o.slice(i,o.length)),t=MB(t??o,n),{fullPath:t+(a&&"?")+a+c,path:t,query:l,hash:c}}function IB(s,o){const n=o.query?s(o.query):"";return o.path+(n&&"?")+n+(o.hash||"")}function Zi(s,o){return!o||!s.toLowerCase().startsWith(o.toLowerCase())?s:s.slice(o.length)||"/"}function Qi(s,o,n){const t=o.matched.length-1,l=n.matched.length-1;return t>-1&&t===l&&Lo(o.matched[t],n.matched[l])&&Uy(o.params,n.params)&&s(o.query)===s(n.query)&&o.hash===n.hash}function Lo(s,o){return(s.aliasOf||s)===(o.aliasOf||o)}function Uy(s,o){if(Object.keys(s).length!==Object.keys(o).length)return!1;for(const n in s)if(!TB(s[n],o[n]))return!1;return!0}function TB(s,o){return Rs(s)?Ji(s,o):Rs(o)?Ji(o,s):s===o}function Ji(s,o){return Rs(o)?s.length===o.length&&s.every((n,t)=>n===o[t]):s.length===1&&s[0]===o}function MB(s,o){if(s.startsWith("/"))return s;if(!o.startsWith("/"))return $e(`Cannot resolve a relative location without an absolute path. Trying to resolve "${s}" from "${o}". It should look like "/${o}".`),s;if(!s)return o;const n=o.split("/"),t=s.split("/");let l=n.length-1,a,c;for(a=0;a<t.length;a++)if(c=t[a],c!==".")if(c==="..")l>1&&l--;else break;return n.slice(0,l).join("/")+"/"+t.slice(a-(a===t.length?1:0)).join("/")}var wt;(function(s){s.pop="pop",s.push="push"})(wt||(wt={}));var ut;(function(s){s.back="back",s.forward="forward",s.unknown=""})(ut||(ut={}));function PB(s){if(!s)if(ao){const o=document.querySelector("base");s=o&&o.getAttribute("href")||"/",s=s.replace(/^\w+:\/\/[^\/]+/,"")}else s="/";return s[0]!=="/"&&s[0]!=="#"&&(s="/"+s),FB(s)}const OB=/^[^#]+#/;function LB(s,o){return s.replace(OB,"#")+o}function NB(s,o){const n=document.documentElement.getBoundingClientRect(),t=s.getBoundingClientRect();return{behavior:o.behavior,left:t.left-n.left-(o.left||0),top:t.top-n.top-(o.top||0)}}const nr=()=>({left:window.pageXOffset,top:window.pageYOffset});function qB(s){let o;if("el"in s){const n=s.el,t=typeof n=="string"&&n.startsWith("#");if(typeof s.el=="string"&&(!t||!document.getElementById(s.el.slice(1))))try{const a=document.querySelector(s.el);if(t&&a){$e(`The selector "${s.el}" should be passed as "el: document.querySelector('${s.el}')" because it starts with "#".`);return}}catch{$e(`The selector "${s.el}" is invalid. If you are using an id selector, make sure to escape it. You can find more information about escaping characters in selectors at https://mathiasbynens.be/notes/css-escapes or use CSS.escape (https://developer.mozilla.org/en-US/docs/Web/API/CSS/escape).`);return}const l=typeof n=="string"?t?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!l){$e(`Couldn't find element using selector "${s.el}" returned by scrollBehavior.`);return}o=NB(l,s)}else o=s;"scrollBehavior"in document.documentElement.style?window.scrollTo(o):window.scrollTo(o.left!=null?o.left:window.pageXOffset,o.top!=null?o.top:window.pageYOffset)}function Xi(s,o){return(history.state?history.state.position-o:-1)+s}const da=new Map;function HB(s,o){da.set(s,o)}function UB(s){const o=da.get(s);return da.delete(s),o}let VB=()=>location.protocol+"//"+location.host;function Vy(s,o){const{pathname:n,search:t,hash:l}=o,a=s.indexOf("#");if(a>-1){let i=l.includes(s.slice(a))?s.slice(a).length:1,p=l.slice(i);return p[0]!=="/"&&(p="/"+p),Zi(p,"")}return Zi(n,s)+t+l}function jB(s,o,n,t){let l=[],a=[],c=null;const i=({state:f})=>{const h=Vy(s,location),m=n.value,B=o.value;let A=0;if(f){if(n.value=h,o.value=f,c&&c===m){c=null;return}A=B?f.position-B.position:0}else t(h);l.forEach(b=>{b(n.value,m,{delta:A,type:wt.pop,direction:A?A>0?ut.forward:ut.back:ut.unknown})})};function p(){c=n.value}function u(f){l.push(f);const h=()=>{const m=l.indexOf(f);m>-1&&l.splice(m,1)};return a.push(h),h}function y(){const{history:f}=window;f.state&&f.replaceState(Oe({},f.state,{scroll:nr()}),"")}function d(){for(const f of a)f();a=[],window.removeEventListener("popstate",i),window.removeEventListener("beforeunload",y)}return window.addEventListener("popstate",i),window.addEventListener("beforeunload",y),{pauseListeners:p,listen:u,destroy:d}}function ep(s,o,n,t=!1,l=!1){return{back:s,current:o,forward:n,replaced:t,position:window.history.length,scroll:l?nr():null}}function GB(s){const{history:o,location:n}=window,t={value:Vy(s,n)},l={value:o.state};l.value||a(t.value,{back:null,current:t.value,forward:null,position:o.length-1,replaced:!0,scroll:null},!0);function a(p,u,y){const d=s.indexOf("#"),f=d>-1?(n.host&&document.querySelector("base")?s:s.slice(d))+p:VB()+s+p;try{o[y?"replaceState":"pushState"](u,"",f),l.value=u}catch(h){$e("Error with push/replace State",h),n[y?"replace":"assign"](f)}}function c(p,u){const y=Oe({},o.state,ep(l.value.back,p,l.value.forward,!0),u,{position:l.value.position});a(p,y,!0),t.value=p}function i(p,u){const y=Oe({},l.value,o.state,{forward:p,scroll:nr()});o.state||$e(`history.state seems to have been manually replaced without preserving the necessary values. Make sure to preserve existing history state if you are manually calling history.replaceState:

history.replaceState(history.state, '', url)

You can find more information at https://next.router.vuejs.org/guide/migration/#usage-of-history-state.`),a(y.current,y,!0);const d=Oe({},ep(t.value,p,null),{position:y.position+1},u);a(p,d,!1),t.value=p}return{location:t,state:l,push:i,replace:c}}function WB(s){s=PB(s);const o=GB(s),n=jB(s,o.state,o.location,o.replace);function t(a,c=!0){c||n.pauseListeners(),history.go(a)}const l=Oe({location:"",base:s,go:t,createHref:LB.bind(null,s)},o,n);return Object.defineProperty(l,"location",{enumerable:!0,get:()=>o.location.value}),Object.defineProperty(l,"state",{enumerable:!0,get:()=>o.state.value}),l}function zB(s){return typeof s=="string"||s&&typeof s=="object"}function jy(s){return typeof s=="string"||typeof s=="symbol"}const go={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},Gy=Symbol("navigation failure");var sp;(function(s){s[s.aborted=4]="aborted",s[s.cancelled=8]="cancelled",s[s.duplicated=16]="duplicated"})(sp||(sp={}));const KB={[1]({location:s,currentLocation:o}){return`No match for
 ${JSON.stringify(s)}${o?`
while being at
`+JSON.stringify(o):""}`},[2]({from:s,to:o}){return`Redirected from "${s.fullPath}" to "${ZB(o)}" via a navigation guard.`},[4]({from:s,to:o}){return`Navigation aborted from "${s.fullPath}" to "${o.fullPath}" via a navigation guard.`},[8]({from:s,to:o}){return`Navigation cancelled from "${s.fullPath}" to "${o.fullPath}" with a new navigation.`},[16]({from:s,to:o}){return`Avoided redundant navigation to current location: "${s.fullPath}".`}};function Pn(s,o){return Oe(new Error(KB[s](o)),{type:s,[Gy]:!0},o)}function oo(s,o){return s instanceof Error&&Gy in s&&(o==null||!!(s.type&o))}const YB=["params","query","hash"];function ZB(s){if(typeof s=="string")return s;if("path"in s)return s.path;const o={};for(const n of YB)n in s&&(o[n]=s[n]);return JSON.stringify(o,null,2)}const op="[^/]+?",QB={sensitive:!1,strict:!1,start:!0,end:!0},JB=/[.+*?^${}()[\]/\\]/g;function XB(s,o){const n=Oe({},QB,o),t=[];let l=n.start?"^":"";const a=[];for(const u of s){const y=u.length?[]:[90];n.strict&&!u.length&&(l+="/");for(let d=0;d<u.length;d++){const f=u[d];let h=40+(n.sensitive?.25:0);if(f.type===0)d||(l+="/"),l+=f.value.replace(JB,"\\$&"),h+=40;else if(f.type===1){const{value:m,repeatable:B,optional:A,regexp:b}=f;a.push({name:m,repeatable:B,optional:A});const v=b||op;if(v!==op){h+=10;try{new RegExp(`(${v})`)}catch(w){throw new Error(`Invalid custom RegExp for param "${m}" (${v}): `+w.message)}}let D=B?`((?:${v})(?:/(?:${v}))*)`:`(${v})`;d||(D=A&&u.length<2?`(?:/${D})`:"/"+D),A&&(D+="?"),l+=D,h+=20,A&&(h+=-8),B&&(h+=-20),v===".*"&&(h+=-50)}y.push(h)}t.push(y)}if(n.strict&&n.end){const u=t.length-1;t[u][t[u].length-1]+=.7000000000000001}n.strict||(l+="/?"),n.end?l+="$":n.strict&&(l+="(?:/|$)");const c=new RegExp(l,n.sensitive?"":"i");function i(u){const y=u.match(c),d={};if(!y)return null;for(let f=1;f<y.length;f++){const h=y[f]||"",m=a[f-1];d[m.name]=h&&m.repeatable?h.split("/"):h}return d}function p(u){let y="",d=!1;for(const f of s){(!d||!y.endsWith("/"))&&(y+="/"),d=!1;for(const h of f)if(h.type===0)y+=h.value;else if(h.type===1){const{value:m,repeatable:B,optional:A}=h,b=m in u?u[m]:"";if(Rs(b)&&!B)throw new Error(`Provided param "${m}" is an array but it is not repeatable (* or + modifiers)`);const v=Rs(b)?b.join("/"):b;if(!v)if(A)f.length<2&&(y.endsWith("/")?y=y.slice(0,-1):d=!0);else throw new Error(`Missing required param "${m}"`);y+=v}}return y||"/"}return{re:c,score:t,keys:a,parse:i,stringify:p}}function eA(s,o){let n=0;for(;n<s.length&&n<o.length;){const t=o[n]-s[n];if(t)return t;n++}return s.length<o.length?s.length===1&&s[0]===40+40?-1:1:s.length>o.length?o.length===1&&o[0]===40+40?1:-1:0}function sA(s,o){let n=0;const t=s.score,l=o.score;for(;n<t.length&&n<l.length;){const a=eA(t[n],l[n]);if(a)return a;n++}if(Math.abs(l.length-t.length)===1){if(np(t))return 1;if(np(l))return-1}return l.length-t.length}function np(s){const o=s[s.length-1];return s.length>0&&o[o.length-1]<0}const oA={type:0,value:""},nA=/[a-zA-Z0-9_]/;function tA(s){if(!s)return[[]];if(s==="/")return[[oA]];if(!s.startsWith("/"))throw new Error(`Route paths should start with a "/": "${s}" should be "/${s}".`);function o(h){throw new Error(`ERR (${n})/"${u}": ${h}`)}let n=0,t=n;const l=[];let a;function c(){a&&l.push(a),a=[]}let i=0,p,u="",y="";function d(){u&&(n===0?a.push({type:0,value:u}):n===1||n===2||n===3?(a.length>1&&(p==="*"||p==="+")&&o(`A repeatable param (${u}) must be alone in its segment. eg: '/:ids+.`),a.push({type:1,value:u,regexp:y,repeatable:p==="*"||p==="+",optional:p==="*"||p==="?"})):o("Invalid state to consume buffer"),u="")}function f(){u+=p}for(;i<s.length;){if(p=s[i++],p==="\\"&&n!==2){t=n,n=4;continue}switch(n){case 0:p==="/"?(u&&d(),c()):p===":"?(d(),n=1):f();break;case 4:f(),n=t;break;case 1:p==="("?n=2:nA.test(p)?f():(d(),n=0,p!=="*"&&p!=="?"&&p!=="+"&&i--);break;case 2:p===")"?y[y.length-1]=="\\"?y=y.slice(0,-1)+p:n=3:y+=p;break;case 3:d(),n=0,p!=="*"&&p!=="?"&&p!=="+"&&i--,y="";break;default:o("Unknown state");break}}return n===2&&o(`Unfinished custom RegExp for param "${u}"`),d(),c(),l}function lA(s,o,n){const t=XB(tA(s.path),n);{const a=new Set;for(const c of t.keys)a.has(c.name)&&$e(`Found duplicated params with name "${c.name}" for path "${s.path}". Only the last one will be available on "$route.params".`),a.add(c.name)}const l=Oe(t,{record:s,parent:o,children:[],alias:[]});return o&&!l.record.aliasOf==!o.record.aliasOf&&o.children.push(l),l}function rA(s,o){const n=[],t=new Map;o=rp({strict:!1,end:!0,sensitive:!1},o);function l(y){return t.get(y)}function a(y,d,f){const h=!f,m=aA(y);uA(m,d),m.aliasOf=f&&f.record;const B=rp(o,y),A=[m];if("alias"in y){const D=typeof y.alias=="string"?[y.alias]:y.alias;for(const w of D)A.push(Oe({},m,{components:f?f.record.components:m.components,path:w,aliasOf:f?f.record:m}))}let b,v;for(const D of A){const{path:w}=D;if(d&&w[0]!=="/"){const T=d.record.path,H=T[T.length-1]==="/"?"":"/";D.path=d.record.path+(w&&H+w)}if(D.path==="*")throw new Error(`Catch all routes ("*") must now be defined using a param with a custom regexp.
See more at https://next.router.vuejs.org/guide/migration/#removed-star-or-catch-all-routes.`);if(b=lA(D,d,B),d&&w[0]==="/"&&yA(b,d),f?(f.alias.push(b),pA(f,b)):(v=v||b,v!==b&&v.alias.push(b),h&&y.name&&!lp(b)&&c(y.name)),m.children){const T=m.children;for(let H=0;H<T.length;H++)a(T[H],b,f&&f.children[H])}f=f||b,(b.record.components&&Object.keys(b.record.components).length||b.record.name||b.record.redirect)&&p(b)}return v?()=>{c(v)}:pt}function c(y){if(jy(y)){const d=t.get(y);d&&(t.delete(y),n.splice(n.indexOf(d),1),d.children.forEach(c),d.alias.forEach(c))}else{const d=n.indexOf(y);d>-1&&(n.splice(d,1),y.record.name&&t.delete(y.record.name),y.children.forEach(c),y.alias.forEach(c))}}function i(){return n}function p(y){let d=0;for(;d<n.length&&sA(y,n[d])>=0&&(y.record.path!==n[d].record.path||!Wy(y,n[d]));)d++;n.splice(d,0,y),y.record.name&&!lp(y)&&t.set(y.record.name,y)}function u(y,d){let f,h={},m,B;if("name"in y&&y.name){if(f=t.get(y.name),!f)throw Pn(1,{location:y});{const v=Object.keys(y.params||{}).filter(D=>!f.keys.find(w=>w.name===D));v.length&&$e(`Discarded invalid param(s) "${v.join('", "')}" when navigating. See https://github.com/vuejs/router/blob/main/packages/router/CHANGELOG.md#414-2022-08-22 for more details.`)}B=f.record.name,h=Oe(tp(d.params,f.keys.filter(v=>!v.optional).map(v=>v.name)),y.params&&tp(y.params,f.keys.map(v=>v.name))),m=f.stringify(h)}else if("path"in y)m=y.path,m.startsWith("/")||$e(`The Matcher cannot resolve relative paths but received "${m}". Unless you directly called \`matcher.resolve("${m}")\`, this is probably a bug in vue-router. Please open an issue at https://new-issue.vuejs.org/?repo=vuejs/router.`),f=n.find(v=>v.re.test(m)),f&&(h=f.parse(m),B=f.record.name);else{if(f=d.name?t.get(d.name):n.find(v=>v.re.test(d.path)),!f)throw Pn(1,{location:y,currentLocation:d});B=f.record.name,h=Oe({},d.params,y.params),m=f.stringify(h)}const A=[];let b=f;for(;b;)A.unshift(b.record),b=b.parent;return{name:B,path:m,params:h,matched:A,meta:iA(A)}}return s.forEach(y=>a(y)),{addRoute:a,resolve:u,removeRoute:c,getRoutes:i,getRecordMatcher:l}}function tp(s,o){const n={};for(const t of o)t in s&&(n[t]=s[t]);return n}function aA(s){return{path:s.path,redirect:s.redirect,name:s.name,meta:s.meta||{},aliasOf:void 0,beforeEnter:s.beforeEnter,props:cA(s),children:s.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in s?s.components||null:s.component&&{default:s.component}}}function cA(s){const o={},n=s.props||!1;if("component"in s)o.default=n;else for(const t in s.components)o[t]=typeof n=="boolean"?n:n[t];return o}function lp(s){for(;s;){if(s.record.aliasOf)return!0;s=s.parent}return!1}function iA(s){return s.reduce((o,n)=>Oe(o,n.meta),{})}function rp(s,o){const n={};for(const t in s)n[t]=t in o?o[t]:s[t];return n}function fa(s,o){return s.name===o.name&&s.optional===o.optional&&s.repeatable===o.repeatable}function pA(s,o){for(const n of s.keys)if(!n.optional&&!o.keys.find(fa.bind(null,n)))return $e(`Alias "${o.record.path}" and the original record: "${s.record.path}" must have the exact same param named "${n.name}"`);for(const n of o.keys)if(!n.optional&&!s.keys.find(fa.bind(null,n)))return $e(`Alias "${o.record.path}" and the original record: "${s.record.path}" must have the exact same param named "${n.name}"`)}function uA(s,o){o&&o.record.name&&!s.name&&!s.path&&$e(`The route named "${String(o.record.name)}" has a child without a name and an empty path. Using that name won't render the empty path child so you probably want to move the name to the child instead. If this is intentional, add a name to the child route to remove the warning.`)}function yA(s,o){for(const n of o.keys)if(!s.keys.find(fa.bind(null,n)))return $e(`Absolute path "${s.record.path}" must have the exact same param named "${n.name}" as its parent "${o.record.path}".`)}function Wy(s,o){return o.children.some(n=>n===s||Wy(s,n))}const zy=/#/g,dA=/&/g,fA=/\//g,mA=/=/g,hA=/\?/g,Ky=/\+/g,_A=/%5B/g,BA=/%5D/g,Yy=/%5E/g,AA=/%60/g,Zy=/%7B/g,gA=/%7C/g,Qy=/%7D/g,vA=/%20/g;function yc(s){return encodeURI(""+s).replace(gA,"|").replace(_A,"[").replace(BA,"]")}function CA(s){return yc(s).replace(Zy,"{").replace(Qy,"}").replace(Yy,"^")}function ma(s){return yc(s).replace(Ky,"%2B").replace(vA,"+").replace(zy,"%23").replace(dA,"%26").replace(AA,"`").replace(Zy,"{").replace(Qy,"}").replace(Yy,"^")}function DA(s){return ma(s).replace(mA,"%3D")}function EA(s){return yc(s).replace(zy,"%23").replace(hA,"%3F")}function bA(s){return s==null?"":EA(s).replace(fA,"%2F")}function St(s){try{return decodeURIComponent(""+s)}catch{$e(`Error decoding "${s}". Using original value`)}return""+s}function kA(s){const o={};if(s===""||s==="?")return o;const t=(s[0]==="?"?s.slice(1):s).split("&");for(let l=0;l<t.length;++l){const a=t[l].replace(Ky," "),c=a.indexOf("="),i=St(c<0?a:a.slice(0,c)),p=c<0?null:St(a.slice(c+1));if(i in o){let u=o[i];Rs(u)||(u=o[i]=[u]),u.push(p)}else o[i]=p}return o}function ap(s){let o="";for(let n in s){const t=s[n];if(n=DA(n),t==null){t!==void 0&&(o+=(o.length?"&":"")+n);continue}(Rs(t)?t.map(a=>a&&ma(a)):[t&&ma(t)]).forEach(a=>{a!==void 0&&(o+=(o.length?"&":"")+n,a!=null&&(o+="="+a))})}return o}function wA(s){const o={};for(const n in s){const t=s[n];t!==void 0&&(o[n]=Rs(t)?t.map(l=>l==null?null:""+l):t==null?t:""+t)}return o}const SA=Symbol("router view location matched"),cp=Symbol("router view depth"),dc=Symbol("router"),Jy=Symbol("route location"),ha=Symbol("router view location");function Kn(){let s=[];function o(t){return s.push(t),()=>{const l=s.indexOf(t);l>-1&&s.splice(l,1)}}function n(){s=[]}return{add:o,list:()=>s,reset:n}}function Eo(s,o,n,t,l){const a=t&&(t.enterCallbacks[l]=t.enterCallbacks[l]||[]);return()=>new Promise((c,i)=>{const p=d=>{d===!1?i(Pn(4,{from:n,to:o})):d instanceof Error?i(d):zB(d)?i(Pn(2,{from:o,to:d})):(a&&t.enterCallbacks[l]===a&&typeof d=="function"&&a.push(d),c())},u=s.call(t&&t.instances[l],o,n,RA(p,o,n));let y=Promise.resolve(u);if(s.length<3&&(y=y.then(p)),s.length>2){const d=`The "next" callback was never called inside of ${s.name?'"'+s.name+'"':""}:
${s.toString()}
. If you are returning a value instead of calling "next", make sure to remove the "next" parameter from your function.`;if(typeof u=="object"&&"then"in u)y=y.then(f=>p._called?f:($e(d),Promise.reject(new Error("Invalid navigation guard"))));else if(u!==void 0&&!p._called){$e(d),i(new Error("Invalid navigation guard"));return}}y.catch(d=>i(d))})}function RA(s,o,n){let t=0;return function(){t++===1&&$e(`The "next" callback was called more than once in one navigation guard when going from "${n.fullPath}" to "${o.fullPath}". It should be called exactly one time in each navigation guard. This will fail in production.`),s._called=!0,t===1&&s.apply(null,arguments)}}function kr(s,o,n,t){const l=[];for(const a of s){!a.components&&!a.children.length&&$e(`Record with path "${a.path}" is either missing a "component(s)" or "children" property.`);for(const c in a.components){let i=a.components[c];{if(!i||typeof i!="object"&&typeof i!="function")throw $e(`Component "${c}" in record with path "${a.path}" is not a valid component. Received "${String(i)}".`),new Error("Invalid route component");if("then"in i){$e(`Component "${c}" in record with path "${a.path}" is a Promise instead of a function that returns a Promise. Did you write "import('./MyPage.vue')" instead of "() => import('./MyPage.vue')" ? This will break in production if not fixed.`);const p=i;i=()=>p}else i.__asyncLoader&&!i.__warnedDefineAsync&&(i.__warnedDefineAsync=!0,$e(`Component "${c}" in record with path "${a.path}" is defined using "defineAsyncComponent()". Write "() => import('./MyPage.vue')" instead of "defineAsyncComponent(() => import('./MyPage.vue'))".`))}if(!(o!=="beforeRouteEnter"&&!a.instances[c]))if(xA(i)){const u=(i.__vccOpts||i)[o];u&&l.push(Eo(u,n,t,a,c))}else{let p=i();"catch"in p||($e(`Component "${c}" in record with path "${a.path}" is a function that does not return a Promise. If you were passing a functional component, make sure to add a "displayName" to the component. This will break in production if not fixed.`),p=Promise.resolve(p)),l.push(()=>p.then(u=>{if(!u)return Promise.reject(new Error(`Couldn't resolve component "${c}" at "${a.path}"`));const y=xB(u)?u.default:u;a.components[c]=y;const f=(y.__vccOpts||y)[o];return f&&Eo(f,n,t,a,c)()}))}}}return l}function xA(s){return typeof s=="object"||"displayName"in s||"props"in s||"__vccOpts"in s}function ip(s){const o=F(dc),n=F(Jy),t=$(()=>o.resolve(k(s.to))),l=$(()=>{const{matched:p}=t.value,{length:u}=p,y=p[u-1],d=n.matched;if(!y||!d.length)return-1;const f=d.findIndex(Lo.bind(null,y));if(f>-1)return f;const h=pp(p[u-2]);return u>1&&pp(y)===h&&d[d.length-1].path!==h?d.findIndex(Lo.bind(null,p[u-2])):f}),a=$(()=>l.value>-1&&TA(n.params,t.value.params)),c=$(()=>l.value>-1&&l.value===n.matched.length-1&&Uy(n.params,t.value.params));function i(p={}){return IA(p)?o[k(s.replace)?"replace":"push"](k(s.to)).catch(pt):Promise.resolve()}if(ao){const p=xs();if(p){const u={route:t.value,isActive:a.value,isExactActive:c.value};p.__vrl_devtools=p.__vrl_devtools||[],p.__vrl_devtools.push(u),dn(()=>{u.route=t.value,u.isActive=a.value,u.isExactActive=c.value},{flush:"post"})}}return{route:t,href:$(()=>t.value.href),isActive:a,isExactActive:c,navigate:i}}const $A=Pe({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:ip,setup(s,{slots:o}){const n=Ge(ip(s)),{options:t}=F(dc),l=$(()=>({[up(s.activeClass,t.linkActiveClass,"router-link-active")]:n.isActive,[up(s.exactActiveClass,t.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const a=o.default&&o.default(n);return s.custom?a:fs("a",{"aria-current":n.isExactActive?s.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:l.value},a)}}}),FA=$A;function IA(s){if(!(s.metaKey||s.altKey||s.ctrlKey||s.shiftKey)&&!s.defaultPrevented&&!(s.button!==void 0&&s.button!==0)){if(s.currentTarget&&s.currentTarget.getAttribute){const o=s.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(o))return}return s.preventDefault&&s.preventDefault(),!0}}function TA(s,o){for(const n in o){const t=o[n],l=s[n];if(typeof t=="string"){if(t!==l)return!1}else if(!Rs(l)||l.length!==t.length||t.some((a,c)=>a!==l[c]))return!1}return!0}function pp(s){return s?s.aliasOf?s.aliasOf.path:s.path:""}const up=(s,o,n)=>s??o??n,MA=Pe({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(s,{attrs:o,slots:n}){OA();const t=F(ha),l=$(()=>s.route||t.value),a=F(cp,0),c=$(()=>{let u=k(a);const{matched:y}=l.value;let d;for(;(d=y[u])&&!d.components;)u++;return u}),i=$(()=>l.value.matched[c.value]);ks(cp,$(()=>c.value+1)),ks(SA,i),ks(ha,l);const p=X();return Ae(()=>[p.value,i.value,s.name],([u,y,d],[f,h,m])=>{y&&(y.instances[d]=u,h&&h!==y&&u&&u===f&&(y.leaveGuards.size||(y.leaveGuards=h.leaveGuards),y.updateGuards.size||(y.updateGuards=h.updateGuards))),u&&y&&(!h||!Lo(y,h)||!f)&&(y.enterCallbacks[d]||[]).forEach(B=>B(u))},{flush:"post"}),()=>{const u=l.value,y=s.name,d=i.value,f=d&&d.components[y];if(!f)return yp(n.default,{Component:f,route:u});const h=d.props[y],m=h?h===!0?u.params:typeof h=="function"?h(u):h:null,A=fs(f,Oe({},m,o,{onVnodeUnmounted:b=>{b.component.isUnmounted&&(d.instances[y]=null)},ref:p}));if(ao&&A.ref){const b={depth:c.value,name:d.name,path:d.path,meta:d.meta};(Rs(A.ref)?A.ref.map(D=>D.i):[A.ref.i]).forEach(D=>{D.__vrv_devtools=b})}return yp(n.default,{Component:A,route:u})||A}}});function yp(s,o){if(!s)return null;const n=s(o);return n.length===1?n[0]:n}const PA=MA;function OA(){const s=xs(),o=s.parent&&s.parent.type.name;if(o&&(o==="KeepAlive"||o.includes("Transition"))){const n=o==="KeepAlive"?"keep-alive":"transition";$e(`<router-view> can no longer be used directly inside <transition> or <keep-alive>.
Use slot props instead:

<router-view v-slot="{ Component }">
  <${n}>
    <component :is="Component" />
  </${n}>
</router-view>`)}}function Yn(s,o){const n=Oe({},s,{matched:s.matched.map(t=>WA(t,["instances","children","aliasOf"]))});return{_custom:{type:null,readOnly:!0,display:s.fullPath,tooltip:o,value:n}}}function tl(s){return{_custom:{display:s}}}let LA=0;function NA(s,o,n){if(o.__hasDevtools)return;o.__hasDevtools=!0;const t=LA++;RB({id:"org.vuejs.router"+(t?"."+t:""),label:"Vue Router",packageName:"vue-router",homepage:"https://router.vuejs.org",logo:"https://router.vuejs.org/logo.png",componentStateTypes:["Routing"],app:s},l=>{typeof l.now!="function"&&console.warn("[Vue Router]: You seem to be using an outdated version of Vue Devtools. Are you still using the Beta release instead of the stable one? You can find the links at https://devtools.vuejs.org/guide/installation.html."),l.on.inspectComponent((y,d)=>{y.instanceData&&y.instanceData.state.push({type:"Routing",key:"$route",editable:!1,value:Yn(o.currentRoute.value,"Current Route")})}),l.on.visitComponentTree(({treeNode:y,componentInstance:d})=>{if(d.__vrv_devtools){const f=d.__vrv_devtools;y.tags.push({label:(f.name?`${f.name.toString()}: `:"")+f.path,textColor:0,tooltip:"This component is rendered by &lt;router-view&gt;",backgroundColor:Xy})}Rs(d.__vrl_devtools)&&(d.__devtoolsApi=l,d.__vrl_devtools.forEach(f=>{let h=od,m="";f.isExactActive?(h=sd,m="This is exactly active"):f.isActive&&(h=ed,m="This link is active"),y.tags.push({label:f.route.path,textColor:0,tooltip:m,backgroundColor:h})}))}),Ae(o.currentRoute,()=>{p(),l.notifyComponentUpdate(),l.sendInspectorTree(i),l.sendInspectorState(i)});const a="router:navigations:"+t;l.addTimelineLayer({id:a,label:`Router${t?" "+t:""} Navigations`,color:4237508}),o.onError((y,d)=>{l.addTimelineEvent({layerId:a,event:{title:"Error during Navigation",subtitle:d.fullPath,logType:"error",time:l.now(),data:{error:y},groupId:d.meta.__navigationId}})});let c=0;o.beforeEach((y,d)=>{const f={guard:tl("beforeEach"),from:Yn(d,"Current Location during this navigation"),to:Yn(y,"Target location")};Object.defineProperty(y.meta,"__navigationId",{value:c++}),l.addTimelineEvent({layerId:a,event:{time:l.now(),title:"Start of navigation",subtitle:y.fullPath,data:f,groupId:y.meta.__navigationId}})}),o.afterEach((y,d,f)=>{const h={guard:tl("afterEach")};f?(h.failure={_custom:{type:Error,readOnly:!0,display:f?f.message:"",tooltip:"Navigation Failure",value:f}},h.status=tl("❌")):h.status=tl("✅"),h.from=Yn(d,"Current Location during this navigation"),h.to=Yn(y,"Target location"),l.addTimelineEvent({layerId:a,event:{title:"End of navigation",subtitle:y.fullPath,time:l.now(),data:h,logType:f?"warning":"default",groupId:y.meta.__navigationId}})});const i="router-inspector:"+t;l.addInspector({id:i,label:"Routes"+(t?" "+t:""),icon:"book",treeFilterPlaceholder:"Search routes"});function p(){if(!u)return;const y=u;let d=n.getRoutes().filter(f=>!f.parent);d.forEach(ld),y.filter&&(d=d.filter(f=>_a(f,y.filter.toLowerCase()))),d.forEach(f=>td(f,o.currentRoute.value)),y.rootNodes=d.map(nd)}let u;l.on.getInspectorTree(y=>{u=y,y.app===s&&y.inspectorId===i&&p()}),l.on.getInspectorState(y=>{if(y.app===s&&y.inspectorId===i){const f=n.getRoutes().find(h=>h.record.__vd_id===y.nodeId);f&&(y.state={options:HA(f)})}}),l.sendInspectorTree(i),l.sendInspectorState(i)})}function qA(s){return s.optional?s.repeatable?"*":"?":s.repeatable?"+":""}function HA(s){const{record:o}=s,n=[{editable:!1,key:"path",value:o.path}];return o.name!=null&&n.push({editable:!1,key:"name",value:o.name}),n.push({editable:!1,key:"regexp",value:s.re}),s.keys.length&&n.push({editable:!1,key:"keys",value:{_custom:{type:null,readOnly:!0,display:s.keys.map(t=>`${t.name}${qA(t)}`).join(" "),tooltip:"Param keys",value:s.keys}}}),o.redirect!=null&&n.push({editable:!1,key:"redirect",value:o.redirect}),s.alias.length&&n.push({editable:!1,key:"aliases",value:s.alias.map(t=>t.record.path)}),Object.keys(s.record.meta).length&&n.push({editable:!1,key:"meta",value:s.record.meta}),n.push({key:"score",editable:!1,value:{_custom:{type:null,readOnly:!0,display:s.score.map(t=>t.join(", ")).join(" | "),tooltip:"Score used to sort routes",value:s.score}}}),n}const Xy=15485081,ed=2450411,sd=8702998,UA=2282478,od=16486972,VA=6710886;function nd(s){const o=[],{record:n}=s;n.name!=null&&o.push({label:String(n.name),textColor:0,backgroundColor:UA}),n.aliasOf&&o.push({label:"alias",textColor:0,backgroundColor:od}),s.__vd_match&&o.push({label:"matches",textColor:0,backgroundColor:Xy}),s.__vd_exactActive&&o.push({label:"exact",textColor:0,backgroundColor:sd}),s.__vd_active&&o.push({label:"active",textColor:0,backgroundColor:ed}),n.redirect&&o.push({label:typeof n.redirect=="string"?`redirect: ${n.redirect}`:"redirects",textColor:16777215,backgroundColor:VA});let t=n.__vd_id;return t==null&&(t=String(jA++),n.__vd_id=t),{id:t,label:n.path,tags:o,children:s.children.map(nd)}}let jA=0;const GA=/^\/(.*)\/([a-z]*)$/;function td(s,o){const n=o.matched.length&&Lo(o.matched[o.matched.length-1],s.record);s.__vd_exactActive=s.__vd_active=n,n||(s.__vd_active=o.matched.some(t=>Lo(t,s.record))),s.children.forEach(t=>td(t,o))}function ld(s){s.__vd_match=!1,s.children.forEach(ld)}function _a(s,o){const n=String(s.re).match(GA);if(s.__vd_match=!1,!n||n.length<3)return!1;if(new RegExp(n[1].replace(/\$$/,""),n[2]).test(o))return s.children.forEach(c=>_a(c,o)),s.record.path!=="/"||o==="/"?(s.__vd_match=s.re.test(o),!0):!1;const l=s.record.path.toLowerCase(),a=St(l);return!o.startsWith("/")&&(a.includes(o)||l.includes(o))||a.startsWith(o)||l.startsWith(o)||s.record.name&&String(s.record.name).includes(o)?!0:s.children.some(c=>_a(c,o))}function WA(s,o){const n={};for(const t in s)o.includes(t)||(n[t]=s[t]);return n}function zA(s){const o=rA(s.routes,s),n=s.parseQuery||kA,t=s.stringifyQuery||ap,l=s.history;if(!l)throw new Error('Provide the "history" option when calling "createRouter()": https://next.router.vuejs.org/api/#history.');const a=Kn(),c=Kn(),i=Kn(),p=eo(go);let u=go;ao&&s.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const y=Er.bind(null,x=>""+x),d=Er.bind(null,bA),f=Er.bind(null,St);function h(x,oe){let K,le;return jy(x)?(K=o.getRecordMatcher(x),le=oe):le=x,o.addRoute(le,K)}function m(x){const oe=o.getRecordMatcher(x);oe?o.removeRoute(oe):$e(`Cannot remove non-existent route "${String(x)}"`)}function B(){return o.getRoutes().map(x=>x.record)}function A(x){return!!o.getRecordMatcher(x)}function b(x,oe){if(oe=Oe({},oe||p.value),typeof x=="string"){const ye=br(n,x,oe.path),_=o.resolve({path:ye.path},oe),g=l.createHref(ye.fullPath);return g.startsWith("//")?$e(`Location "${x}" resolved to "${g}". A resolved location cannot start with multiple slashes.`):_.matched.length||$e(`No match found for location with path "${x}"`),Oe(ye,_,{params:f(_.params),hash:St(ye.hash),redirectedFrom:void 0,href:g})}let K;if("path"in x)"params"in x&&!("name"in x)&&Object.keys(x.params).length&&$e(`Path "${x.path}" was passed with params but they will be ignored. Use a named route alongside params instead.`),K=Oe({},x,{path:br(n,x.path,oe.path).path});else{const ye=Oe({},x.params);for(const _ in ye)ye[_]==null&&delete ye[_];K=Oe({},x,{params:d(x.params)}),oe.params=d(oe.params)}const le=o.resolve(K,oe),Ee=x.hash||"";Ee&&!Ee.startsWith("#")&&$e(`A \`hash\` should always start with the character "#". Replace "${Ee}" with "#${Ee}".`),le.params=y(f(le.params));const Se=IB(t,Oe({},x,{hash:CA(Ee),path:le.path})),he=l.createHref(Se);return he.startsWith("//")?$e(`Location "${x}" resolved to "${he}". A resolved location cannot start with multiple slashes.`):le.matched.length||$e(`No match found for location with path "${"path"in x?x.path:x}"`),Oe({fullPath:Se,hash:Ee,query:t===ap?wA(x.query):x.query||{}},le,{redirectedFrom:void 0,href:he})}function v(x){return typeof x=="string"?br(n,x,p.value.path):Oe({},x)}function D(x,oe){if(u!==x)return Pn(8,{from:oe,to:x})}function w(x){return z(x)}function T(x){return w(Oe(v(x),{replace:!0}))}function H(x){const oe=x.matched[x.matched.length-1];if(oe&&oe.redirect){const{redirect:K}=oe;let le=typeof K=="function"?K(x):K;if(typeof le=="string"&&(le=le.includes("?")||le.includes("#")?le=v(le):{path:le},le.params={}),!("path"in le)&&!("name"in le))throw $e(`Invalid redirect found:
${JSON.stringify(le,null,2)}
 when navigating to "${x.fullPath}". A redirect must contain a name or path. This will break in production.`),new Error("Invalid redirect");return Oe({query:x.query,hash:x.hash,params:"path"in le?{}:x.params},le)}}function z(x,oe){const K=u=b(x),le=p.value,Ee=x.state,Se=x.force,he=x.replace===!0,ye=H(K);if(ye)return z(Oe(v(ye),{state:typeof ye=="object"?Oe({},Ee,ye.state):Ee,force:Se,replace:he}),oe||K);const _=K;_.redirectedFrom=oe;let g;return!Se&&Qi(t,le,K)&&(g=Pn(16,{to:_,from:le}),Ne(le,le,!0,!1)),(g?Promise.resolve(g):G(_,le)).catch(S=>oo(S)?oo(S,2)?S:Ce(S):se(S,_,le)).then(S=>{if(S){if(oo(S,2))return Qi(t,b(S.to),_)&&oe&&(oe._count=oe._count?oe._count+1:1)>10?($e(`Detected an infinite redirection in a navigation guard when going from "${le.fullPath}" to "${_.fullPath}". Aborting to avoid a Stack Overflow. This will break in production if not fixed.`),Promise.reject(new Error("Infinite redirect in navigation guard"))):z(Oe({replace:he},v(S.to),{state:typeof S.to=="object"?Oe({},Ee,S.to.state):Ee,force:Se}),oe||_)}else S=ue(_,le,!0,he,Ee);return ne(_,le,S),S})}function I(x,oe){const K=D(x,oe);return K?Promise.reject(K):Promise.resolve()}function G(x,oe){let K;const[le,Ee,Se]=KA(x,oe);K=kr(le.reverse(),"beforeRouteLeave",x,oe);for(const ye of le)ye.leaveGuards.forEach(_=>{K.push(Eo(_,x,oe))});const he=I.bind(null,x,oe);return K.push(he),An(K).then(()=>{K=[];for(const ye of a.list())K.push(Eo(ye,x,oe));return K.push(he),An(K)}).then(()=>{K=kr(Ee,"beforeRouteUpdate",x,oe);for(const ye of Ee)ye.updateGuards.forEach(_=>{K.push(Eo(_,x,oe))});return K.push(he),An(K)}).then(()=>{K=[];for(const ye of x.matched)if(ye.beforeEnter&&!oe.matched.includes(ye))if(Rs(ye.beforeEnter))for(const _ of ye.beforeEnter)K.push(Eo(_,x,oe));else K.push(Eo(ye.beforeEnter,x,oe));return K.push(he),An(K)}).then(()=>(x.matched.forEach(ye=>ye.enterCallbacks={}),K=kr(Se,"beforeRouteEnter",x,oe),K.push(he),An(K))).then(()=>{K=[];for(const ye of c.list())K.push(Eo(ye,x,oe));return K.push(he),An(K)}).catch(ye=>oo(ye,8)?ye:Promise.reject(ye))}function ne(x,oe,K){for(const le of i.list())le(x,oe,K)}function ue(x,oe,K,le,Ee){const Se=D(x,oe);if(Se)return Se;const he=oe===go,ye=ao?history.state:{};K&&(le||he?l.replace(x.fullPath,Oe({scroll:he&&ye&&ye.scroll},Ee)):l.push(x.fullPath,Ee)),p.value=x,Ne(x,oe,K,he),Ce()}let ee;function De(){ee||(ee=l.listen((x,oe,K)=>{if(!_o.listening)return;const le=b(x),Ee=H(le);if(Ee){z(Oe(Ee,{replace:!0}),le).catch(pt);return}u=le;const Se=p.value;ao&&HB(Xi(Se.fullPath,K.delta),nr()),G(le,Se).catch(he=>oo(he,12)?he:oo(he,2)?(z(he.to,le).then(ye=>{oo(ye,20)&&!K.delta&&K.type===wt.pop&&l.go(-1,!1)}).catch(pt),Promise.reject()):(K.delta&&l.go(-K.delta,!1),se(he,le,Se))).then(he=>{he=he||ue(le,Se,!1),he&&(K.delta&&!oo(he,8)?l.go(-K.delta,!1):K.type===wt.pop&&oo(he,20)&&l.go(-1,!1)),ne(le,Se,he)}).catch(pt)}))}let Te=Kn(),xe=Kn(),Ue;function se(x,oe,K){Ce(x);const le=xe.list();return le.length?le.forEach(Ee=>Ee(x,oe,K)):($e("uncaught error during route navigation:"),console.error(x)),Promise.reject(x)}function pe(){return Ue&&p.value!==go?Promise.resolve():new Promise((x,oe)=>{Te.add([x,oe])})}function Ce(x){return Ue||(Ue=!x,De(),Te.list().forEach(([oe,K])=>x?K(x):oe()),Te.reset()),x}function Ne(x,oe,K,le){const{scrollBehavior:Ee}=s;if(!ao||!Ee)return Promise.resolve();const Se=!K&&UB(Xi(x.fullPath,0))||(le||!K)&&history.state&&history.state.scroll||null;return ns().then(()=>Ee(x,oe,Se)).then(he=>he&&qB(he)).catch(he=>se(he,x,oe))}const Cs=x=>l.go(x);let ls;const hs=new Set,_o={currentRoute:p,listening:!0,addRoute:h,removeRoute:m,hasRoute:A,getRoutes:B,resolve:b,options:s,push:w,replace:T,go:Cs,back:()=>Cs(-1),forward:()=>Cs(1),beforeEach:a.add,beforeResolve:c.add,afterEach:i.add,onError:xe.add,isReady:pe,install(x){const oe=this;x.component("RouterLink",FA),x.component("RouterView",PA),x.config.globalProperties.$router=oe,Object.defineProperty(x.config.globalProperties,"$route",{enumerable:!0,get:()=>k(p)}),ao&&!ls&&p.value===go&&(ls=!0,w(l.location).catch(Ee=>{$e("Unexpected error when starting the router:",Ee)}));const K={};for(const Ee in go)K[Ee]=$(()=>p.value[Ee]);x.provide(dc,oe),x.provide(Jy,Ge(K)),x.provide(ha,p);const le=x.unmount;hs.add(x),x.unmount=function(){hs.delete(x),hs.size<1&&(u=go,ee&&ee(),ee=null,p.value=go,ls=!1,Ue=!1),le()},ao&&NA(x,oe,o)}};return _o}function An(s){return s.reduce((o,n)=>o.then(()=>n()),Promise.resolve())}function KA(s,o){const n=[],t=[],l=[],a=Math.max(o.matched.length,s.matched.length);for(let c=0;c<a;c++){const i=o.matched[c];i&&(s.matched.find(u=>Lo(u,i))?t.push(i):n.push(i));const p=s.matched[c];p&&(o.matched.find(u=>Lo(u,p))||l.push(p))}return[n,t,l]}const wr=X(!1),yt=X(!1),kn=X(!1),YA=X(!0),Ba=M_({xs:460,...x_}),rn=vB(),rd=iB(),ZA=$(()=>rn.height.value-rn.width.value/$o>180),ad=rB(js?document.body:null),Fn=R_(),QA=$(()=>{var s,o;return["INPUT","TEXTAREA"].includes(((s=Fn.value)==null?void 0:s.tagName)||"")||((o=Fn.value)==null?void 0:o.classList.contains("CodeMirror-code"))}),JA=$(()=>{var s;return["BUTTON","A"].includes(((s=Fn.value)==null?void 0:s.tagName)||"")});Gs("slidev-camera","default");Gs("slidev-mic","default");const dl=Gs("slidev-scale",0),us=Gs("slidev-show-overview",!1),Sr=Gs("slidev-presenter-cursor",!0),dp=Gs("slidev-show-editor",!1);Gs("slidev-editor-width",js?window.innerWidth*.4:100);const cd=Oy(us);function fp(s,o,n,t=l=>l){return s*t(.5-o*(.5-n))}function XA(s){return[-s[0],-s[1]]}function qs(s,o){return[s[0]+o[0],s[1]+o[1]]}function Is(s,o){return[s[0]-o[0],s[1]-o[1]]}function Ns(s,o){return[s[0]*o,s[1]*o]}function eg(s,o){return[s[0]/o,s[1]/o]}function Zn(s){return[s[1],-s[0]]}function mp(s,o){return s[0]*o[0]+s[1]*o[1]}function sg(s,o){return s[0]===o[0]&&s[1]===o[1]}function og(s){return Math.hypot(s[0],s[1])}function ng(s){return s[0]*s[0]+s[1]*s[1]}function hp(s,o){return ng(Is(s,o))}function id(s){return eg(s,og(s))}function tg(s,o){return Math.hypot(s[1]-o[1],s[0]-o[0])}function Qn(s,o,n){let t=Math.sin(n),l=Math.cos(n),a=s[0]-o[0],c=s[1]-o[1],i=a*l-c*t,p=a*t+c*l;return[i+o[0],p+o[1]]}function Aa(s,o,n){return qs(s,Ns(Is(o,s),n))}function _p(s,o,n){return qs(s,Ns(o,n))}var{min:gn,PI:lg}=Math,Bp=.275,Jn=lg+1e-4;function rg(s,o={}){let{size:n=16,smoothing:t=.5,thinning:l=.5,simulatePressure:a=!0,easing:c=se=>se,start:i={},end:p={},last:u=!1}=o,{cap:y=!0,easing:d=se=>se*(2-se)}=i,{cap:f=!0,easing:h=se=>--se*se*se+1}=p;if(s.length===0||n<=0)return[];let m=s[s.length-1].runningLength,B=i.taper===!1?0:i.taper===!0?Math.max(n,m):i.taper,A=p.taper===!1?0:p.taper===!0?Math.max(n,m):p.taper,b=Math.pow(n*t,2),v=[],D=[],w=s.slice(0,10).reduce((se,pe)=>{let Ce=pe.pressure;if(a){let Ne=gn(1,pe.distance/n),Cs=gn(1,1-Ne);Ce=gn(1,se+(Cs-se)*(Ne*Bp))}return(se+Ce)/2},s[0].pressure),T=fp(n,l,s[s.length-1].pressure,c),H,z=s[0].vector,I=s[0].point,G=I,ne=I,ue=G,ee=!1;for(let se=0;se<s.length;se++){let{pressure:pe}=s[se],{point:Ce,vector:Ne,distance:Cs,runningLength:ls}=s[se];if(se<s.length-1&&m-ls<3)continue;if(l){if(a){let Se=gn(1,Cs/n),he=gn(1,1-Se);pe=gn(1,w+(he-w)*(Se*Bp))}T=fp(n,l,pe,c)}else T=n/2;H===void 0&&(H=T);let hs=ls<B?d(ls/B):1,_o=m-ls<A?h((m-ls)/A):1;T=Math.max(.01,T*Math.min(hs,_o));let x=(se<s.length-1?s[se+1]:s[se]).vector,oe=se<s.length-1?mp(Ne,x):1,K=mp(Ne,z)<0&&!ee,le=oe!==null&&oe<0;if(K||le){let Se=Ns(Zn(z),T);for(let he=1/13,ye=0;ye<=1;ye+=he)ne=Qn(Is(Ce,Se),Ce,Jn*ye),v.push(ne),ue=Qn(qs(Ce,Se),Ce,Jn*-ye),D.push(ue);I=ne,G=ue,le&&(ee=!0);continue}if(ee=!1,se===s.length-1){let Se=Ns(Zn(Ne),T);v.push(Is(Ce,Se)),D.push(qs(Ce,Se));continue}let Ee=Ns(Zn(Aa(x,Ne,oe)),T);ne=Is(Ce,Ee),(se<=1||hp(I,ne)>b)&&(v.push(ne),I=ne),ue=qs(Ce,Ee),(se<=1||hp(G,ue)>b)&&(D.push(ue),G=ue),w=pe,z=Ne}let De=s[0].point.slice(0,2),Te=s.length>1?s[s.length-1].point.slice(0,2):qs(s[0].point,[1,1]),xe=[],Ue=[];if(s.length===1){if(!(B||A)||u){let se=_p(De,id(Zn(Is(De,Te))),-(H||T)),pe=[];for(let Ce=1/13,Ne=Ce;Ne<=1;Ne+=Ce)pe.push(Qn(se,De,Jn*2*Ne));return pe}}else{if(!(B||A&&s.length===1))if(y)for(let pe=1/13,Ce=pe;Ce<=1;Ce+=pe){let Ne=Qn(D[0],De,Jn*Ce);xe.push(Ne)}else{let pe=Is(v[0],D[0]),Ce=Ns(pe,.5),Ne=Ns(pe,.51);xe.push(Is(De,Ce),Is(De,Ne),qs(De,Ne),qs(De,Ce))}let se=Zn(XA(s[s.length-1].vector));if(A||B&&s.length===1)Ue.push(Te);else if(f){let pe=_p(Te,se,T);for(let Ce=1/29,Ne=Ce;Ne<1;Ne+=Ce)Ue.push(Qn(pe,Te,Jn*3*Ne))}else Ue.push(qs(Te,Ns(se,T)),qs(Te,Ns(se,T*.99)),Is(Te,Ns(se,T*.99)),Is(Te,Ns(se,T)))}return v.concat(Ue,D.reverse(),xe)}function ag(s,o={}){var n;let{streamline:t=.5,size:l=16,last:a=!1}=o;if(s.length===0)return[];let c=.15+(1-t)*.85,i=Array.isArray(s[0])?s:s.map(({x:h,y:m,pressure:B=.5})=>[h,m,B]);if(i.length===2){let h=i[1];i=i.slice(0,-1);for(let m=1;m<5;m++)i.push(Aa(i[0],h,m/4))}i.length===1&&(i=[...i,[...qs(i[0],[1,1]),...i[0].slice(2)]]);let p=[{point:[i[0][0],i[0][1]],pressure:i[0][2]>=0?i[0][2]:.25,vector:[1,1],distance:0,runningLength:0}],u=!1,y=0,d=p[0],f=i.length-1;for(let h=1;h<i.length;h++){let m=a&&h===f?i[h].slice(0,2):Aa(d.point,i[h],c);if(sg(d.point,m))continue;let B=tg(m,d.point);if(y+=B,h<f&&!u){if(y<l)continue;u=!0}d={point:m,pressure:i[h][2]>=0?i[h][2]:.5,vector:id(Is(d.point,m)),distance:B,runningLength:y},p.push(d)}return p[0].vector=((n=p[1])==null?void 0:n.vector)||[0,0],p}function cg(s,o={}){return rg(ag(s,o),o)}var ig=()=>({events:{},emit(s,...o){let n=this.events[s]||[];for(let t=0,l=n.length;t<l;t++)n[t](...o)},on(s,o){var n;return(n=this.events[s])!=null&&n.push(o)||(this.events[s]=[o]),()=>{var t;this.events[s]=(t=this.events[s])==null?void 0:t.filter(l=>o!==l)}}});function Tl(s,o){return s-o}function pg(s){return s<0?-1:1}function Ml(s){return[Math.abs(s),pg(s)]}function pd(){const s=()=>((1+Math.random())*65536|0).toString(16).substring(1);return`${s()+s()}-${s()}-${s()}-${s()}-${s()}${s()}${s()}`}var ug=2,co=ug,Nn=class{constructor(s){this.drauu=s,this.event=void 0,this.point=void 0,this.start=void 0,this.el=null}onSelected(s){}onUnselected(){}onStart(s){}onMove(s){return!1}onEnd(s){}get brush(){return this.drauu.brush}get shiftPressed(){return this.drauu.shiftPressed}get altPressed(){return this.drauu.altPressed}get svgElement(){return this.drauu.el}getMousePosition(s){var o;const n=this.drauu.el,t=this.drauu.options.coordinateScale??1;if(this.drauu.options.coordinateTransform===!1){const l=this.drauu.el.getBoundingClientRect();return{x:(s.pageX-l.left)*t,y:(s.pageY-l.top)*t,pressure:s.pressure}}else{const l=this.drauu.svgPoint;l.x=s.clientX,l.y=s.clientY;const a=l.matrixTransform((o=n.getScreenCTM())==null?void 0:o.inverse());return{x:a.x*t,y:a.y*t,pressure:s.pressure}}}createElement(s,o){const n=document.createElementNS("http://www.w3.org/2000/svg",s),t=o?{...this.brush,...o}:this.brush;return n.setAttribute("fill",t.fill??"transparent"),n.setAttribute("stroke",t.color),n.setAttribute("stroke-width",t.size.toString()),n.setAttribute("stroke-linecap","round"),t.dasharray&&n.setAttribute("stroke-dasharray",t.dasharray),n}attr(s,o){this.el.setAttribute(s,typeof o=="string"?o:o.toFixed(co))}_setEvent(s){this.event=s,this.point=this.getMousePosition(s)}_eventDown(s){return this._setEvent(s),this.start=this.point,this.onStart(this.point)}_eventMove(s){return this._setEvent(s),this.onMove(this.point)}_eventUp(s){return this._setEvent(s),this.onEnd(this.point)}},yg=class extends Nn{constructor(){super(...arguments),this.points=[]}onStart(s){return this.el=document.createElementNS("http://www.w3.org/2000/svg","path"),this.points=[s],this.attr("fill",this.brush.color),this.attr("d",this.getSvgData(this.points)),this.el}onMove(s){return this.el||this.onStart(s),this.points[this.points.length-1]!==s&&this.points.push(s),this.attr("d",this.getSvgData(this.points)),!0}onEnd(){const s=this.el;return this.el=null,!!s}getSvgData(s){const o=cg(s,{size:this.brush.size*2,thinning:.9,simulatePressure:!1,start:{taper:5},end:{taper:5},...this.brush.stylusOptions});if(!o.length)return"";const n=o.reduce((t,[l,a],c,i)=>{const[p,u]=i[(c+1)%i.length];return t.push(l,a,(l+p)/2,(a+u)/2),t},["M",...o[0],"Q"]);return n.push("Z"),n.map(t=>typeof t=="number"?t.toFixed(2):t).join(" ")}},dg=class extends Nn{onStart(s){return this.el=this.createElement("ellipse"),this.attr("cx",s.x),this.attr("cy",s.y),this.el}onMove(s){if(!this.el||!this.start)return!1;let[o,n]=Ml(s.x-this.start.x),[t,l]=Ml(s.y-this.start.y);if(this.shiftPressed){const a=Math.min(o,t);o=a,t=a}if(this.altPressed)this.attr("cx",this.start.x),this.attr("cy",this.start.y),this.attr("rx",o),this.attr("ry",t);else{const[a,c]=[this.start.x,this.start.x+o*n].sort(Tl),[i,p]=[this.start.y,this.start.y+t*l].sort(Tl);this.attr("cx",(a+c)/2),this.attr("cy",(i+p)/2),this.attr("rx",(c-a)/2),this.attr("ry",(p-i)/2)}return!0}onEnd(){const s=this.el;return this.el=null,!(!s||!s.getTotalLength())}};function ud(s,o){const n=document.createElementNS("http://www.w3.org/2000/svg","defs"),t=document.createElementNS("http://www.w3.org/2000/svg","marker"),l=document.createElementNS("http://www.w3.org/2000/svg","path");return l.setAttribute("fill",o),t.setAttribute("id",s),t.setAttribute("viewBox","0 -5 10 10"),t.setAttribute("refX","5"),t.setAttribute("refY","0"),t.setAttribute("markerWidth","4"),t.setAttribute("markerHeight","4"),t.setAttribute("orient","auto"),l.setAttribute("d","M0,-5L10,0L0,5"),t.appendChild(l),n.appendChild(t),n}var fg=class extends Nn{onStart(s){if(this.el=this.createElement("line",{fill:"transparent"}),this.attr("x1",s.x),this.attr("y1",s.y),this.attr("x2",s.x),this.attr("y2",s.y),this.brush.arrowEnd){const o=pd(),n=document.createElementNS("http://www.w3.org/2000/svg","g");return n.append(ud(o,this.brush.color)),n.append(this.el),this.attr("marker-end",`url(#${o})`),n}return this.el}onMove(s){if(!this.el)return!1;let{x:o,y:n}=s;if(this.shiftPressed){const t=s.x-this.start.x,l=s.y-this.start.y;if(l!==0){let a=t/l;a=Math.round(a),Math.abs(a)<=1?(o=this.start.x+l*a,n=this.start.y+l):(o=this.start.x+t,n=this.start.y)}}return this.altPressed?(this.attr("x1",this.start.x*2-o),this.attr("y1",this.start.y*2-n),this.attr("x2",o),this.attr("y2",n)):(this.attr("x1",this.start.x),this.attr("y1",this.start.y),this.attr("x2",o),this.attr("y2",n)),!0}onEnd(){const s=this.el;return this.el=null,!(!s||s.getTotalLength()<5)}},mg=class extends Nn{onStart(s){return this.el=this.createElement("rect"),this.brush.cornerRadius&&(this.attr("rx",this.brush.cornerRadius),this.attr("ry",this.brush.cornerRadius)),this.attr("x",s.x),this.attr("y",s.y),this.el}onMove(s){if(!this.el||!this.start)return!1;let[o,n]=Ml(s.x-this.start.x),[t,l]=Ml(s.y-this.start.y);if(this.shiftPressed){const a=Math.min(o,t);o=a,t=a}if(this.altPressed)this.attr("x",this.start.x-o),this.attr("y",this.start.y-t),this.attr("width",o*2),this.attr("height",t*2);else{const[a,c]=[this.start.x,this.start.x+o*n].sort(Tl),[i,p]=[this.start.y,this.start.y+t*l].sort(Tl);this.attr("x",a),this.attr("y",i),this.attr("width",c-a),this.attr("height",p-i)}return!0}onEnd(){const s=this.el;return this.el=null,!(!s||!s.getTotalLength())}};function hg(s,o){const n=s.x-o.x,t=s.y-o.y;return n*n+t*t}function _g(s,o,n){let t=o.x,l=o.y,a=n.x-t,c=n.y-l;if(a!==0||c!==0){const i=((s.x-t)*a+(s.y-l)*c)/(a*a+c*c);i>1?(t=n.x,l=n.y):i>0&&(t+=a*i,l+=c*i)}return a=s.x-t,c=s.y-l,a*a+c*c}function Bg(s,o){let n=s[0];const t=[n];let l;for(let a=1,c=s.length;a<c;a++)l=s[a],hg(l,n)>o&&(t.push(l),n=l);return n!==l&&l&&t.push(l),t}function ga(s,o,n,t,l){let a=t,c=0;for(let i=o+1;i<n;i++){const p=_g(s[i],s[o],s[n]);p>a&&(c=i,a=p)}a>t&&(c-o>1&&ga(s,o,c,t,l),l.push(s[c]),n-c>1&&ga(s,c,n,t,l))}function Ag(s,o){const n=s.length-1,t=[s[0]];return ga(s,0,n,o,t),t.push(s[n]),t}function Ap(s,o,n=!1){if(s.length<=2)return s;const t=o!==void 0?o*o:1;return s=n?s:Bg(s,t),s=Ag(s,t),s}var gg=class extends Nn{constructor(){super(...arguments),this.points=[],this.count=0}onStart(s){if(this.el=this.createElement("path",{fill:"transparent"}),this.points=[s],this.brush.arrowEnd){this.arrowId=pd();const o=ud(this.arrowId,this.brush.color);this.el.appendChild(o)}return this.el}onMove(s){return this.el||this.onStart(s),this.points[this.points.length-1]!==s&&(this.points.push(s),this.count+=1),this.count>5&&(this.points=Ap(this.points,1,!0),this.count=0),this.attr("d",vp(this.points)),!0}onEnd(){const s=this.el;return this.el=null,!(!s||(s.setAttribute("d",vp(Ap(this.points,1,!0))),!s.getTotalLength()))}};function vg(s,o){const n=o.x-s.x,t=o.y-s.y;return{length:Math.sqrt(n**2+t**2),angle:Math.atan2(t,n)}}function gp(s,o,n,t){const l=o||s,a=n||s,c=.2,i=vg(l,a),p=i.angle+(t?Math.PI:0),u=i.length*c,y=s.x+Math.cos(p)*u,d=s.y+Math.sin(p)*u;return{x:y,y:d}}function Cg(s,o,n){const t=gp(n[o-1],n[o-2],s),l=gp(s,n[o-1],n[o+1],!0);return`C ${t.x.toFixed(co)},${t.y.toFixed(co)} ${l.x.toFixed(co)},${l.y.toFixed(co)} ${s.x.toFixed(co)},${s.y.toFixed(co)}`}function vp(s){return s.reduce((o,n,t,l)=>t===0?`M ${n.x.toFixed(co)},${n.y.toFixed(co)}`:`${o} ${Cg(n,t,l)}`,"")}var Dg=class extends Nn{constructor(){super(...arguments),this.pathSubFactor=20,this.pathFragments=[]}onSelected(s){const o=(n,t)=>{if(n&&n.length)for(let l=0;l<n.length;l++){const a=n[l];if(a.getTotalLength){const c=a.getTotalLength();for(let i=0;i<this.pathSubFactor;i++){const p=a.getPointAtLength(c*i/this.pathSubFactor),u=a.getPointAtLength(c*(i+1)/this.pathSubFactor);this.pathFragments.push({x1:p.x,x2:u.x,y1:p.y,y2:u.y,segment:i,element:t||a})}}else a.children&&o(a.children,a)}};s&&o(s.children)}onUnselected(){this.pathFragments=[]}onStart(s){this.svgPointPrevious=this.svgElement.createSVGPoint(),this.svgPointPrevious.x=s.x,this.svgPointPrevious.y=s.y}onMove(s){this.svgPointCurrent=this.svgElement.createSVGPoint(),this.svgPointCurrent.x=s.x,this.svgPointCurrent.y=s.y;const o=this.checkAndEraseElement();return this.svgPointPrevious=this.svgPointCurrent,o}onEnd(){return this.svgPointPrevious=void 0,this.svgPointCurrent=void 0,!0}checkAndEraseElement(){const s=[];if(this.pathFragments.length)for(let o=0;o<this.pathFragments.length;o++){const n=this.pathFragments[o],t={x1:this.svgPointPrevious.x,x2:this.svgPointCurrent.x,y1:this.svgPointPrevious.y,y2:this.svgPointCurrent.y};this.lineLineIntersect(n,t)&&(n.element.remove(),s.push(o))}return s.length&&(this.pathFragments=this.pathFragments.filter((o,n)=>!s.includes(n))),s.length>0}lineLineIntersect(s,o){const n=s.x1,t=s.x2,l=o.x1,a=o.x2,c=s.y1,i=s.y2,p=o.y1,u=o.y2,y=(n-t)*(p-u)-(c-i)*(l-a),d=(n*i-c*t)*(l-a)-(n-t)*(l*u-p*a),f=(n*i-c*t)*(p-u)-(c-i)*(l*u-p*a),h=(m,B,A)=>m>=B&&m<=A?!0:m>=A&&m<=B;if(y===0)return!1;{const m={x:d/y,y:f/y};return h(m.x,n,t)&&h(m.y,c,i)&&h(m.x,l,a)&&h(m.y,p,u)}}};function Eg(s){return{draw:new gg(s),stylus:new yg(s),line:new fg(s),rectangle:new mg(s),ellipse:new dg(s),eraseLine:new Dg(s)}}var bg=class{constructor(s={}){this.options=s,this.el=null,this.svgPoint=null,this.eventEl=null,this.shiftPressed=!1,this.altPressed=!1,this.drawing=!1,this._emitter=ig(),this._models=Eg(this),this._undoStack=[],this._disposables=[],this.options.brush||(this.options.brush={color:"black",size:3,mode:"stylus"}),s.el&&this.mount(s.el,s.eventTarget)}get model(){return this._models[this.mode]}get mounted(){return!!this.el}get mode(){return this.options.brush.mode||"stylus"}set mode(s){this._models[this.mode].onUnselected(),this.options.brush.mode=s,this.model.onSelected(this.el)}get brush(){return this.options.brush}set brush(s){this.options.brush=s}resolveSelector(s){return typeof s=="string"?document.querySelector(s):s||null}mount(s,o){if(this.el)throw new Error("[drauu] already mounted, unmount previous target first");if(this.el=this.resolveSelector(s),!this.el)throw new Error("[drauu] target element not found");if(this.el.tagName.toLocaleLowerCase()!=="svg")throw new Error("[drauu] can only mount to a SVG element");if(!this.el.createSVGPoint)throw new Error("[drauu] SVG element must be create by document.createElementNS('http://www.w3.org/2000/svg', 'svg')");this.svgPoint=this.el.createSVGPoint();const n=this.resolveSelector(o)||this.el,t=this.eventStart.bind(this),l=this.eventMove.bind(this),a=this.eventEnd.bind(this),c=this.eventKeyboard.bind(this);n.addEventListener("pointerdown",t,{passive:!1}),window.addEventListener("pointermove",l,{passive:!1}),window.addEventListener("pointerup",a,{passive:!1}),window.addEventListener("pointercancel",a,{passive:!1}),window.addEventListener("keydown",c,!1),window.addEventListener("keyup",c,!1),this._disposables.push(()=>{n.removeEventListener("pointerdown",t),window.removeEventListener("pointermove",l),window.removeEventListener("pointerup",a),window.removeEventListener("pointercancel",a),window.removeEventListener("keydown",c,!1),window.removeEventListener("keyup",c,!1)}),this._emitter.emit("mounted")}unmount(){this._disposables.forEach(s=>s()),this._disposables.length=0,this.el=null,this._emitter.emit("unmounted")}on(s,o){return this._emitter.on(s,o)}undo(){const s=this.el;return s.lastElementChild?(this._undoStack.push(s.lastElementChild.cloneNode(!0)),s.lastElementChild.remove(),this._emitter.emit("changed"),!0):!1}redo(){return this._undoStack.length?(this.el.appendChild(this._undoStack.pop()),this._emitter.emit("changed"),!0):!1}canRedo(){return!!this._undoStack.length}canUndo(){var s;return!!((s=this.el)!=null&&s.lastElementChild)}eventMove(s){!this.acceptsInput(s)||!this.drawing||this.model._eventMove(s)&&(s.stopPropagation(),s.preventDefault(),this._emitter.emit("changed"))}eventStart(s){this.acceptsInput(s)&&(s.stopPropagation(),s.preventDefault(),this._currentNode&&this.cancel(),this.drawing=!0,this._emitter.emit("start"),this._currentNode=this.model._eventDown(s),this._currentNode&&this.mode!=="eraseLine"&&this.el.appendChild(this._currentNode),this._emitter.emit("changed"))}eventEnd(s){if(!this.acceptsInput(s)||!this.drawing)return;const o=this.model._eventUp(s);o?(o instanceof Element&&o!==this._currentNode&&(this._currentNode=o),this.commit()):this.cancel(),this.drawing=!1,this._emitter.emit("end"),this._emitter.emit("changed")}acceptsInput(s){return!this.options.acceptsInputTypes||this.options.acceptsInputTypes.includes(s.pointerType)}eventKeyboard(s){this.shiftPressed===s.shiftKey&&this.altPressed===s.altKey||(this.shiftPressed=s.shiftKey,this.altPressed=s.altKey,this.model.point&&this.model.onMove(this.model.point)&&this._emitter.emit("changed"))}commit(){this._undoStack.length=0;const s=this._currentNode;this._currentNode=void 0,this._emitter.emit("committed",s)}clear(){this._undoStack.length=0,this.cancel(),this.el.innerHTML="",this._emitter.emit("changed")}cancel(){this._currentNode&&(this.el.removeChild(this._currentNode),this._currentNode=void 0,this._emitter.emit("canceled"))}dump(){return this.el.innerHTML}load(s){this.clear(),this.el.innerHTML=s}};function kg(s){return new bg(s)}const va=["#ff595e","#ffca3a","#8ac926","#1982c4","#6a4c93","#ffffff","#000000"],Js=Gs("slidev-drawing-enabled",!1),KS=Gs("slidev-drawing-pinned",!1),wg=X(!1),Sg=X(!1),Rg=X(!1),Rt=X(!1),Jo=o_(Gs("slidev-drawing-brush",{color:va[0],size:4,mode:"stylus"})),Cp=X("stylus"),yd=$(()=>Fe.drawings.syncAll||Bs.value);let xt=!1;const Xn=$({get(){return Cp.value},set(s){Cp.value=s,s==="arrow"?(Jo.mode="line",Jo.arrowEnd=!0):(Jo.mode=s,Jo.arrowEnd=!1)}}),xg=Ge({brush:Jo,acceptsInputTypes:$(()=>Js.value&&(!Fe.drawings.presenterOnly||Bs.value)?void 0:["pen"]),coordinateTransform:!1}),ms=Gl(kg(xg));function $g(){ms.clear(),yd.value&&Iy(Ke.value,"")}function fc(){var s;Sg.value=ms.canRedo(),wg.value=ms.canUndo(),Rg.value=!!((s=ms.el)!=null&&s.children.length)}function Fg(s){xt=!0;const o=Fl[s||Ke.value];o!=null?ms.load(o):ms.clear(),fc(),xt=!1}ms.on("changed",()=>{if(fc(),!xt){const s=ms.dump(),o=Ke.value;(Fl[o]||"")!==s&&yd.value&&Iy(o,ms.dump())}});j5(s=>{xt=!0,s[Ke.value]!=null&&ms.load(s[Ke.value]||""),xt=!1,fc()});ns(()=>{Ae(Ke,()=>{ms.mounted&&Fg()},{immediate:!0})});ms.on("start",()=>Rt.value=!0);ms.on("end",()=>Rt.value=!1);window.addEventListener("keydown",s=>{if(!Js.value)return;const o=!s.ctrlKey&&!s.altKey&&!s.shiftKey&&!s.metaKey;let n=!0;s.code==="KeyZ"&&(s.ctrlKey||s.metaKey)?s.shiftKey?ms.redo():ms.undo():s.code==="Escape"?Js.value=!1:s.code==="KeyL"&&o?Xn.value="line":s.code==="KeyA"&&o?Xn.value="arrow":s.code==="KeyS"&&o?Xn.value="stylus":s.code==="KeyR"&&o?Xn.value="rectangle":s.code==="KeyE"&&o?Xn.value="ellipse":s.code==="KeyC"&&o?$g():s.code.startsWith("Digit")&&o&&+s.code[5]<=va.length?Jo.color=va[+s.code[5]-1]:n=!1,n&&(s.preventDefault(),s.stopPropagation())},!1);function Je(...s){return $(()=>s.every(o=>rs(o)))}function Es(s){return $(()=>!rs(s))}const Dp=W_(),Rr=Gs("slidev-color-schema","auto"),Ca=$(()=>Fe.colorSchema!=="auto"),mc=$({get(){return Ca.value?Fe.colorSchema==="dark":Rr.value==="auto"?Dp.value:Rr.value==="dark"},set(s){Ca.value||(Rr.value=s===Dp.value?"auto":s?"dark":"light")}}),dd=Oy(mc);js&&Ae(mc,s=>{const o=document.querySelector("html");o.classList.toggle("dark",s),o.classList.toggle("light",!s)},{immediate:!0});const fl=X(1),ml=$(()=>Qe.length-1),Ss=X(0),hc=X(0);function Ig(){Ss.value>fl.value&&(Ss.value-=1)}function Tg(){Ss.value<ml.value&&(Ss.value+=1)}function Mg(){if(Ss.value>fl.value){let s=Ss.value-hc.value;s<fl.value&&(s=fl.value),Ss.value=s}}function Pg(){if(Ss.value<ml.value){let s=Ss.value+hc.value;s>ml.value&&(s=ml.value),Ss.value=s}}function Og(){const{escape:s,space:o,shift:n,left:t,right:l,up:a,down:c,enter:i,d:p,g:u,o:y}=rd;let d=[{name:"next_space",key:Je(o,Es(n)),fn:To,autoRepeat:!0},{name:"prev_space",key:Je(o,n),fn:Mo,autoRepeat:!0},{name:"next_right",key:Je(l,Es(n),Es(us)),fn:To,autoRepeat:!0},{name:"prev_left",key:Je(t,Es(n),Es(us)),fn:Mo,autoRepeat:!0},{name:"next_page_key",key:"pageDown",fn:To,autoRepeat:!0},{name:"prev_page_key",key:"pageUp",fn:Mo,autoRepeat:!0},{name:"next_down",key:Je(c,Es(us)),fn:Ft,autoRepeat:!0},{name:"prev_up",key:Je(a,Es(us)),fn:()=>It(!1),autoRepeat:!0},{name:"next_shift",key:Je(l,n),fn:Ft,autoRepeat:!0},{name:"prev_shift",key:Je(t,n),fn:()=>It(!1),autoRepeat:!0},{name:"toggle_dark",key:Je(p,Es(Js)),fn:dd},{name:"toggle_overview",key:Je(y,Es(Js)),fn:cd},{name:"hide_overview",key:Je(s,Es(Js)),fn:()=>us.value=!1},{name:"goto",key:Je(u,Es(Js)),fn:()=>kn.value=!kn.value},{name:"next_overview",key:Je(l,us),fn:Tg},{name:"prev_overview",key:Je(t,us),fn:Ig},{name:"up_overview",key:Je(a,us),fn:Mg},{name:"down_overview",key:Je(c,us),fn:Pg},{name:"goto_from_overview",key:Je(i,us),fn:()=>{Ln(Ss.value),us.value=!1}}];const f=new Set(d.map(m=>m.name));if(d.filter(m=>m.name&&f.has(m.name)).length===0){const m=["========== WARNING ==========","defineShortcutsSetup did not return any of the base shortcuts.","See https://sli.dev/custom/config-shortcuts.html for migration.",'If it is intentional, return at least one shortcut with one of the base names (e.g. name:"goto").'].join(`

`);alert(m),console.warn(m)}return d}const fd=Je(Es(QA),Es(JA),YA);function Lg(s,o,n=!1){typeof s=="string"&&(s=rd[s]);const t=Je(s,fd);let l=0,a;const c=()=>{if(clearTimeout(a),!t.value){l=0;return}n&&(a=setTimeout(c,Math.max(1e3-l*250,150)),l++),o()};return Ae(t,c,{flush:"sync"})}function Ng(s,o){return S_(s,n=>{fd.value&&(n.repeat||o())})}function qg(){const s=Og();new Map(s.map(n=>[n.key,n])).forEach(n=>{n.fn&&Lg(n.key,n.fn,n.autoRepeat)}),Ng("f",()=>ad.toggle())}const Hg={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},Ug=e("path",{fill:"currentColor",d:"M24 9.4L22.6 8L16 14.6L9.4 8L8 9.4l6.6 6.6L8 22.6L9.4 24l6.6-6.6l6.6 6.6l1.4-1.4l-6.6-6.6L24 9.4z"},null,-1),Vg=[Ug];function jg(s,o){return C(),te("svg",Hg,Vg)}const Gg={name:"carbon-close",render:jg};function _c(s,o=""){var l,a;const n=["slidev-page",o],t=(a=(l=s==null?void 0:s.meta)==null?void 0:l.slide)==null?void 0:a.no;return t!=null&&n.push(`slidev-page-${t}`),n.filter(Boolean).join(" ")}const Wg=Pe({__name:"SlideContainer",props:{width:{type:Number},meta:{default:()=>({})},scale:{type:[Number,String]}},setup(s){const o=s;F(O);const n=X(),t=lB(n),l=$(()=>o.width?o.width:t.width.value),a=$(()=>o.width?o.width/$o:t.height.value);o.width&&dn(()=>{n.value&&(n.value.style.width=`${l.value}px`,n.value.style.height=`${a.value}px`)});const c=$(()=>l.value/a.value),i=$(()=>o.scale&&!On.value?o.scale:c.value<$o?l.value/Fo:a.value*$o/Fo),p=$(()=>({height:`${ic}px`,width:`${Fo}px`,transform:`translate(-50%, -50%) scale(${i.value})`})),u=$(()=>({"select-none":!Fe.selectable,"slidev-code-line-numbers":Fe.lineNumbers}));return ks($y,i),(y,d)=>(C(),te("div",{id:"slide-container",ref_key:"root",ref:n,class:Ye(k(u))},[e("div",{id:"slide-content",style:ts(k(p))},[fo(y.$slots,"default")],4),fo(y.$slots,"controls")],2))}});const N=(s,o)=>{const n=s.__vccOpts||s;for(const[t,l]of o)n[t]=l;return n},md=N(Wg,[["__file","/home/runner/work/sylius-resource-formation/sylius-resource-formation/node_modules/@slidev/client/internals/SlideContainer.vue"]]),Bc=Pe({name:"SlideWrapper",props:{clicks:{type:[Number,String],default:0},clicksElements:{type:Array,default:()=>[]},clicksOrderMap:{type:Map,default:()=>new Map},clicksDisabled:{type:Boolean,default:!1},context:{type:String,default:"main"},is:{type:Object,default:void 0},route:{type:Object,default:void 0}},setup(s,{emit:o}){const n=Qs(s,"clicks",o),t=Qs(s,"clicksElements",o),l=Qs(s,"clicksDisabled",o),a=Qs(s,"clicksOrderMap",o);t.value.length=0,ks(S5,s.route),ks(R5,s.context),ks(ct,n),ks(it,l),ks(Yo,t),ks(ra,a)},render(){var s,o;return this.$props.is?fs(this.$props.is):(o=(s=this.$slots)==null?void 0:s.default)==null?void 0:o.call(s)}}),zg=["innerHTML"],Kg=Pe({__name:"DrawingPreview",props:{page:{type:Number,required:!0}},setup(s){return F(O),(o,n)=>k(Fl)[s.page]?(C(),te("svg",{key:0,ref:"svg",class:"w-full h-full absolute top-0 pointer-events-none",innerHTML:k(Fl)[s.page]},null,8,zg)):be("v-if",!0)}}),hd=N(Kg,[["__file","/home/runner/work/sylius-resource-formation/sylius-resource-formation/node_modules/@slidev/client/internals/DrawingPreview.vue"]]),Yg=Object.freeze(Object.defineProperty({__proto__:null,default:hd},Symbol.toStringTag,{value:"Module"})),Zg={class:"slides-overview bg-main !bg-opacity-75 p-16 overflow-y-auto"},Qg=["onClick"],Jg=Pe({__name:"SlidesOverview",props:{modelValue:{type:Boolean,required:!0}},emits:[],setup(s,{emit:o}){const n=s;F(O);const t=Qs(n,"modelValue",o);function l(){t.value=!1}function a(h){Ln(h),l()}function c(h){return h===Ss.value}const i=Ba.smaller("xs"),p=Ba.smaller("sm"),u=4*16*2,y=2*16,d=$(()=>i.value?rn.width.value-u:p.value?(rn.width.value-u-y)/2:300),f=$(()=>Math.floor((rn.width.value-u)/(d.value+y)));return dn(()=>{Ss.value=Ke.value,hc.value=f.value}),(h,m)=>{const B=Gg;return C(),te(Me,null,[Xl(e("div",Zg,[e("div",{class:"grid gap-y-4 gap-x-8 w-full",style:ts(`grid-template-columns: repeat(auto-fit,minmax(${k(d)}px,1fr))`)},[(C(!0),te(Me,null,Ut(k(Qe).slice(0,-1),(A,b)=>(C(),te("div",{key:A.path,class:"relative"},[e("div",{class:Ye(["inline-block border rounded border-opacity-50 overflow-hidden bg-main hover:border-$slidev-theme-primary",{"border-$slidev-theme-primary":c(b+1),"border-gray-400":!c(b+1)}]),style:ts(k(pc)),onClick:v=>a(+A.path)},[(C(),M(md,{key:A.path,width:k(d),"clicks-disabled":!0,class:"pointer-events-none"},{default:E(()=>[R(k(Bc),{is:A==null?void 0:A.component,"clicks-disabled":!0,class:Ye(k(_c)(A)),route:A,context:"overview"},null,8,["is","class","route"]),R(hd,{page:+A.path},null,8,["page"])]),_:2},1032,["width"]))],14,Qg),e("div",{class:"absolute top-0 opacity-50",style:ts(`left: ${k(d)+5}px`)},an(b+1),5)]))),128))],4)],512),[[vy,k(t)]]),k(t)?(C(),te("button",{key:0,class:"fixed text-2xl top-4 right-4 slidev-icon-btn text-gray-400",onClick:l},[R(B)])):be("v-if",!0)],64)}}});const Xg=N(Jg,[["__file","/home/runner/work/sylius-resource-formation/sylius-resource-formation/node_modules/@slidev/client/internals/SlidesOverview.vue"]]),e3="/sylius-resource-formation/assets/logo-b72bde5d.png",s3={key:0,class:"fixed top-0 bottom-0 left-0 right-0 grid z-20"},o3=Pe({__name:"Modal",props:{modelValue:{default:!1},class:{default:""}},emits:["modelValue"],setup(s,{emit:o}){const n=s;F(O);const t=Qs(n,"modelValue",o);function l(){t.value=!1}return(a,c)=>(C(),M(Gu,null,[k(t)?(C(),te("div",s3,[e("div",{bg:"black opacity-80",class:"absolute top-0 bottom-0 left-0 right-0 -z-1",onClick:c[0]||(c[0]=i=>l())}),e("div",{class:Ye(["m-auto rounded-md bg-main shadow",n.class]),"dark:border":"~ gray-400 opacity-10"},[fo(a.$slots,"default")],2)])):be("v-if",!0)],1024))}}),n3=N(o3,[["__file","/home/runner/work/sylius-resource-formation/sylius-resource-formation/node_modules/@slidev/client/internals/Modal.vue"]]),t3={class:"slidev-info-dialog slidev-layout flex flex-col gap-4 text-base"},l3=["innerHTML"],r3=e("a",{href:"https://github.com/slidevjs/slidev",target:"_blank",class:"!opacity-100 !border-none !text-current"},[e("div",{class:"flex gap-1 children:my-auto"},[e("div",{class:"opacity-50 text-sm mr-2"},"Powered by"),e("img",{class:"w-5 h-5",src:e3,alt:"Slidev"}),e("div",{style:{color:"#2082A6"}},[e("b",null,"Sli"),r("dev ")])])],-1),a3=Pe({__name:"InfoDialog",props:{modelValue:{default:!1}},emits:["modelValue"],setup(s,{emit:o}){const n=s;F(O);const t=Qs(n,"modelValue",o),l=$(()=>typeof Fe.info=="string");return(a,c)=>(C(),M(n3,{modelValue:k(t),"onUpdate:modelValue":c[0]||(c[0]=i=>Ie(t)?t.value=i:null),class:"px-6 py-4"},{default:E(()=>[e("div",t3,[k(l)?(C(),te("div",{key:0,class:"mb-4",innerHTML:k(Fe).info},null,8,l3)):be("v-if",!0),r3])]),_:1},8,["modelValue"]))}});const c3=N(a3,[["__file","/home/runner/work/sylius-resource-formation/sylius-resource-formation/node_modules/@slidev/client/internals/InfoDialog.vue"]]),i3=["disabled","onKeydown"],p3=Pe({__name:"Goto",setup(s){F(O);const o=X(),n=X(""),t=$(()=>{if(n.value.startsWith("/"))return!!Qe.find(c=>c.path===n.value.substring(1));{const c=+n.value;return!isNaN(c)&&c>0&&c<=xd.value}});function l(){t.value&&(n.value.startsWith("/")?Ln(n.value.substring(1)):Ln(+n.value)),a()}function a(){kn.value=!1}return Ae(kn,async c=>{var i,p;c?(await ns(),n.value="",(i=o.value)==null||i.focus()):(p=o.value)==null||p.blur()}),Ae(n,c=>{c.match(/^[^0-9/]/)&&(n.value=n.value.substring(1))}),(c,i)=>(C(),te("div",{id:"slidev-goto-dialog",class:Ye(["fixed right-5 bg-main transform transition-all",k(kn)?"top-5":"-top-20"]),shadow:"~",p:"x-4 y-2",border:"~ transparent rounded dark:gray-400 dark:opacity-25"},[Xl(e("input",{ref_key:"input",ref:o,"onUpdate:modelValue":i[0]||(i[0]=p=>n.value=p),type:"text",disabled:!k(kn),class:Ye(["outline-none bg-transparent",{"text-red-400":!k(t)&&n.value}]),placeholder:"Goto...",onKeydown:[Di(l,["enter"]),Di(a,["escape"])],onBlur:a},null,42,i3),[[Ih,n.value]])],2))}}),u3=N(p3,[["__file","/home/runner/work/sylius-resource-formation/sylius-resource-formation/node_modules/@slidev/client/internals/Goto.vue"]]),y3=Pe({__name:"Controls",setup(s){F(O);const o=eo(),n=eo();return(t,l)=>(C(),te(Me,null,[R(Xg,{modelValue:k(us),"onUpdate:modelValue":l[0]||(l[0]=a=>Ie(us)?us.value=a:null)},null,8,["modelValue"]),R(u3),k(o)?(C(),M(k(o),{key:0})):be("v-if",!0),k(n)?(C(),M(k(n),{key:1,modelValue:k(wr),"onUpdate:modelValue":l[1]||(l[1]=a=>Ie(wr)?wr.value=a:null)},null,8,["modelValue"])):be("v-if",!0),k(Fe).info?(C(),M(c3,{key:2,modelValue:k(yt),"onUpdate:modelValue":l[2]||(l[2]=a=>Ie(yt)?yt.value=a:null)},null,8,["modelValue"])):be("v-if",!0)],64))}}),d3=N(y3,[["__file","/home/runner/work/sylius-resource-formation/sylius-resource-formation/node_modules/@slidev/client/internals/Controls.vue"]]),f3={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},m3=e("path",{fill:"currentColor",d:"M30 8h-4.1c-.5-2.3-2.5-4-4.9-4s-4.4 1.7-4.9 4H2v2h14.1c.5 2.3 2.5 4 4.9 4s4.4-1.7 4.9-4H30V8zm-9 4c-1.7 0-3-1.3-3-3s1.3-3 3-3s3 1.3 3 3s-1.3 3-3 3zM2 24h4.1c.5 2.3 2.5 4 4.9 4s4.4-1.7 4.9-4H30v-2H15.9c-.5-2.3-2.5-4-4.9-4s-4.4 1.7-4.9 4H2v2zm9-4c1.7 0 3 1.3 3 3s-1.3 3-3 3s-3-1.3-3-3s1.3-3 3-3z"},null,-1),h3=[m3];function _3(s,o){return C(),te("svg",f3,h3)}const B3={name:"carbon-settings-adjust",render:_3},A3={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},g3=e("path",{fill:"currentColor",d:"M17 22v-8h-4v2h2v6h-3v2h8v-2h-3zM16 8a1.5 1.5 0 1 0 1.5 1.5A1.5 1.5 0 0 0 16 8z"},null,-1),v3=e("path",{fill:"currentColor",d:"M16 30a14 14 0 1 1 14-14a14 14 0 0 1-14 14Zm0-26a12 12 0 1 0 12 12A12 12 0 0 0 16 4Z"},null,-1),C3=[g3,v3];function D3(s,o){return C(),te("svg",A3,C3)}const E3={name:"carbon-information",render:D3},b3={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},k3=e("path",{fill:"currentColor",d:"M26 24v4H6v-4H4v4a2 2 0 0 0 2 2h20a2 2 0 0 0 2-2v-4zm0-10l-1.41-1.41L17 20.17V2h-2v18.17l-7.59-7.58L6 14l10 10l10-10z"},null,-1),w3=[k3];function S3(s,o){return C(),te("svg",b3,w3)}const R3={name:"carbon-download",render:S3},x3={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},$3=e("path",{fill:"currentColor",d:"M29.415 19L27.7 17.285A2.97 2.97 0 0 0 28 16a3 3 0 1 0-3 3a2.97 2.97 0 0 0 1.286-.3L28 20.414V28h-6v-3a7.008 7.008 0 0 0-7-7H9a7.008 7.008 0 0 0-7 7v5h28v-9.586A1.988 1.988 0 0 0 29.415 19ZM4 25a5.006 5.006 0 0 1 5-5h6a5.006 5.006 0 0 1 5 5v3H4Z"},null,-1),F3=e("path",{fill:"currentColor",d:"M12 4a5 5 0 1 1-5 5a5 5 0 0 1 5-5m0-2a7 7 0 1 0 7 7a7 7 0 0 0-7-7Z"},null,-1),I3=[$3,F3];function T3(s,o){return C(),te("svg",x3,I3)}const M3={name:"carbon-user-speaker",render:T3},P3={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},O3=e("path",{fill:"currentColor",d:"M15 10h2v8h-2zm5 4h2v4h-2zm-10-2h2v6h-2z"},null,-1),L3=e("path",{fill:"currentColor",d:"M25 4h-8V2h-2v2H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h8v6h-4v2h10v-2h-4v-6h8a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2Zm0 16H7V6h18Z"},null,-1),N3=[O3,L3];function q3(s,o){return C(),te("svg",P3,N3)}const H3={name:"carbon-presentation-file",render:q3},U3={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},V3=e("path",{fill:"currentColor",d:"M27.307 6.107L30 3.414L28.586 2l-2.693 2.693L24.8 3.6a1.933 1.933 0 0 0-2.8 0l-18 18V28h6.4l18-18a1.933 1.933 0 0 0 0-2.8ZM9.6 26H6v-3.6L23.4 5L27 8.6ZM9 11.586L16.586 4L18 5.414L10.414 13z"},null,-1),j3=[V3];function G3(s,o){return C(),te("svg",U3,j3)}const W3={name:"carbon-pen",render:G3},z3={class:"slidev-icon",viewBox:"0 0 256 256",width:"1.2em",height:"1.2em"},K3=e("path",{fill:"currentColor",d:"m38.2 48.5l58.2 155.2a8 8 0 0 0 15-.1l23.3-64.1a8.1 8.1 0 0 1 4.8-4.8l64.1-23.3a8 8 0 0 0 .1-15L48.5 38.2a8 8 0 0 0-10.3 10.3Z",opacity:".2"},null,-1),Y3=e("path",{fill:"currentColor",d:"m150.5 139.2l55.9-20.3a16 16 0 0 0 .1-30L51.3 30.7a16 16 0 0 0-20.6 20.6l58.2 155.2a15.9 15.9 0 0 0 15 10.4h.1a15.9 15.9 0 0 0 14.9-10.5l20.3-55.9l63.1 63.2a8.5 8.5 0 0 0 5.7 2.3a8.3 8.3 0 0 0 5.7-2.3a8.1 8.1 0 0 0 0-11.4Zm-46.6 61.7L45.7 45.7l155.2 58.2l-64.1 23.3a15.7 15.7 0 0 0-9.6 9.6Z"},null,-1),Z3=[K3,Y3];function Q3(s,o){return C(),te("svg",z3,Z3)}const J3={name:"ph-cursor-duotone",render:Q3},X3={class:"slidev-icon",viewBox:"0 0 256 256",width:"1.2em",height:"1.2em"},e1=e("path",{fill:"currentColor",d:"M213.7 202.3a8.1 8.1 0 0 1 0 11.4a8.3 8.3 0 0 1-5.7 2.3a8.5 8.5 0 0 1-5.7-2.3l-63.1-63.2l-20.3 55.9a15.9 15.9 0 0 1-14.9 10.5h-.1a15.9 15.9 0 0 1-15-10.4L30.7 51.3a16 16 0 0 1 20.6-20.6l155.2 58.2a16 16 0 0 1-.1 30l-55.9 20.3Z"},null,-1),s1=[e1];function o1(s,o){return C(),te("svg",X3,s1)}const _d={name:"ph-cursor-fill",render:o1},n1={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},t1=e("path",{fill:"currentColor",d:"M16 12.005a4 4 0 1 1-4 4a4.005 4.005 0 0 1 4-4m0-2a6 6 0 1 0 6 6a6 6 0 0 0-6-6ZM5.394 6.813L6.81 5.399l3.505 3.506L8.9 10.319zM2 15.005h5v2H2zm3.394 10.193L8.9 21.692l1.414 1.414l-3.505 3.506zM15 25.005h2v5h-2zm6.687-1.9l1.414-1.414l3.506 3.506l-1.414 1.414zm3.313-8.1h5v2h-5zm-3.313-6.101l3.506-3.506l1.414 1.414l-3.506 3.506zM15 2.005h2v5h-2z"},null,-1),l1=[t1];function r1(s,o){return C(),te("svg",n1,l1)}const a1={name:"carbon-sun",render:r1},c1={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},i1=e("path",{fill:"currentColor",d:"M13.502 5.414a15.075 15.075 0 0 0 11.594 18.194a11.113 11.113 0 0 1-7.975 3.39c-.138 0-.278.005-.418 0a11.094 11.094 0 0 1-3.2-21.584M14.98 3a1.002 1.002 0 0 0-.175.016a13.096 13.096 0 0 0 1.825 25.981c.164.006.328 0 .49 0a13.072 13.072 0 0 0 10.703-5.555a1.01 1.01 0 0 0-.783-1.565A13.08 13.08 0 0 1 15.89 4.38A1.015 1.015 0 0 0 14.98 3Z"},null,-1),p1=[i1];function u1(s,o){return C(),te("svg",c1,p1)}const y1={name:"carbon-moon",render:u1},d1={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},f1=e("path",{fill:"currentColor",d:"M8 4v4H4V4Zm2-2H2v8h8Zm8 2v4h-4V4Zm2-2h-8v8h8Zm8 2v4h-4V4Zm2-2h-8v8h8ZM8 14v4H4v-4Zm2-2H2v8h8Zm8 2v4h-4v-4Zm2-2h-8v8h8Zm8 2v4h-4v-4Zm2-2h-8v8h8ZM8 24v4H4v-4Zm2-2H2v8h8Zm8 2v4h-4v-4Zm2-2h-8v8h8Zm8 2v4h-4v-4Zm2-2h-8v8h8Z"},null,-1),m1=[f1];function h1(s,o){return C(),te("svg",d1,m1)}const _1={name:"carbon-apps",render:h1},B1={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},A1=e("path",{fill:"currentColor",d:"m18 6l-1.43 1.393L24.15 15H4v2h20.15l-7.58 7.573L18 26l10-10L18 6z"},null,-1),g1=[A1];function v1(s,o){return C(),te("svg",B1,g1)}const C1={name:"carbon-arrow-right",render:v1},D1={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},E1=e("path",{fill:"currentColor",d:"m14 26l1.41-1.41L7.83 17H28v-2H7.83l7.58-7.59L14 6L4 16l10 10z"},null,-1),b1=[E1];function k1(s,o){return C(),te("svg",D1,b1)}const w1={name:"carbon-arrow-left",render:k1},S1={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},R1=e("path",{fill:"currentColor",d:"M20 2v2h6.586L18 12.582L19.414 14L28 5.414V12h2V2H20zm-6 17.416L12.592 18L4 26.586V20H2v10h10v-2H5.414L14 19.416z"},null,-1),x1=[R1];function $1(s,o){return C(),te("svg",S1,x1)}const F1={name:"carbon-maximize",render:$1},I1={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},T1=e("path",{fill:"currentColor",d:"M4 18v2h6.586L2 28.582L3.414 30L12 21.414V28h2V18H4zM30 3.416L28.592 2L20 10.586V4h-2v10h10v-2h-6.586L30 3.416z"},null,-1),M1=[T1];function P1(s,o){return C(),te("svg",I1,M1)}const O1={name:"carbon-minimize",render:P1},L1={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},N1=e("path",{fill:"currentColor",d:"m13 24l-9-9l1.414-1.414L13 21.171L26.586 7.586L28 9L13 24z"},null,-1),q1=[N1];function H1(s,o){return C(),te("svg",L1,q1)}const U1={name:"carbon-checkmark",render:H1},V1={class:"select-list"},j1={class:"title"},G1={class:"items"},W1=["onClick"],z1=Pe({__name:"SelectList",props:{modelValue:{type:[Object,String,Number]},title:{type:String},items:{type:Array}},setup(s,{emit:o}){const n=s;F(O);const t=Qs(n,"modelValue",o,{passive:!0});return(l,a)=>{const c=U1;return C(),te("div",V1,[e("div",j1,an(s.title),1),e("div",G1,[(C(!0),te(Me,null,Ut(s.items,i=>(C(),te("div",{key:i.value,class:Ye(["item",{active:k(t)===i.value}]),onClick:()=>{var p;t.value=i.value,(p=i.onClick)==null||p.call(i)}},[R(c,{class:Ye(["text-green-500",{"opacity-0":k(t)!==i.value}])},null,8,["class"]),r(" "+an(i.display||i.value),1)],10,W1))),128))])])}}});const K1=N(z1,[["__scopeId","data-v-3f89fa11"],["__file","/home/runner/work/sylius-resource-formation/sylius-resource-formation/node_modules/@slidev/client/internals/SelectList.vue"]]),Y1={class:"text-sm"},Z1=Pe({__name:"Settings",setup(s){F(O);const o=[{display:"Fit",value:0},{display:"1:1",value:1}];return(n,t)=>(C(),te("div",Y1,[R(K1,{modelValue:k(dl),"onUpdate:modelValue":t[0]||(t[0]=l=>Ie(dl)?dl.value=l:null),title:"Scale",items:o},null,8,["modelValue"])]))}}),Q1=N(Z1,[["__file","/home/runner/work/sylius-resource-formation/sylius-resource-formation/node_modules/@slidev/client/internals/Settings.vue"]]),J1={key:0,class:"rounded-md bg-main shadow absolute bottom-10 left-0 z-20","dark:border":"~ gray-400 opacity-10"},X1=Pe({__name:"MenuButton",props:{modelValue:{default:!1},disabled:{default:!1}},setup(s,{emit:o}){const n=s;F(O);const t=Qs(n,"modelValue",o,{passive:!0}),l=X();return k_(l,()=>{t.value=!1}),(a,c)=>(C(),te("div",{ref_key:"el",ref:l,class:"flex relative"},[e("button",{class:Ye({disabled:s.disabled}),onClick:c[0]||(c[0]=i=>t.value=!k(t))},[fo(a.$slots,"button",{class:Ye({disabled:s.disabled})})],2),(C(),M(Gu,null,[k(t)?(C(),te("div",J1,[fo(a.$slots,"menu")])):be("v-if",!0)],1024))],512))}}),ev=N(X1,[["__file","/home/runner/work/sylius-resource-formation/sylius-resource-formation/node_modules/@slidev/client/internals/MenuButton.vue"]]),sv={class:"w-1px opacity-10 bg-current m-1 lg:m-2"},ov={__name:"VerticalDivider",setup(s){return F(O),(o,n)=>(C(),te("div",sv))}},ll=N(ov,[["__file","/home/runner/work/sylius-resource-formation/sylius-resource-formation/node_modules/@slidev/client/internals/VerticalDivider.vue"]]),nv={render(){return[]}},tv={class:"slidev-icon-btn"},lv={class:"h-40px flex",p:"l-1 t-0.5 r-2",text:"sm leading-2"},rv={class:"my-auto"},av={class:"opacity-50"},cv=Pe({__name:"NavControls",props:{persist:{default:!1}},setup(s){const o=s;F(O);const n=Ba.smaller("md"),{isFullscreen:t,toggle:l}=ad,a=$(()=>Ea.value?`?password=${Ea.value}`:""),c=$(()=>`/presenter/${Ke.value}${a.value}`),i=$(()=>`/${Ke.value}${a.value}`),p=X(),u=()=>{p.value&&Fn.value&&p.value.contains(Fn.value)&&Fn.value.blur()},y=$(()=>o.persist?"text-$slidev-controls-foreground bg-transparent":"rounded-md bg-main shadow dark:border dark:border-gray-400 dark:border-opacity-10"),d=eo(),f=eo();return Io(()=>import("./DrawingControls-7464a032.js"),[]).then(h=>f.value=h.default),(h,m)=>{const B=O1,A=F1,b=w1,v=C1,D=_1,w=y1,T=a1,H=_d,z=J3,I=W3,G=H3,ne=kl("RouterLink"),ue=M3,ee=R3,De=E3,Te=B3;return C(),te("nav",{ref_key:"root",ref:p,class:"flex flex-col"},[e("div",{class:Ye(["flex flex-wrap-reverse text-xl gap-0.5 p-1 lg:gap-1 lg:p-2",k(y)]),onMouseleave:u},[k(ro)?be("v-if",!0):(C(),te("button",{key:0,class:"slidev-icon-btn",onClick:m[0]||(m[0]=(...xe)=>k(l)&&k(l)(...xe))},[k(t)?(C(),M(B,{key:0})):(C(),M(A,{key:1}))])),e("button",{class:Ye(["slidev-icon-btn",{disabled:!k(pb)}]),onClick:m[1]||(m[1]=(...xe)=>k(Mo)&&k(Mo)(...xe))},[R(b)],2),e("button",{class:Ye(["slidev-icon-btn",{disabled:!k(ib)}]),title:"Next",onClick:m[2]||(m[2]=(...xe)=>k(To)&&k(To)(...xe))},[R(v)],2),k(ro)?be("v-if",!0):(C(),te("button",{key:1,class:"slidev-icon-btn",title:"Slides overview",onClick:m[3]||(m[3]=xe=>k(cd)())},[R(D)])),k(Ca)?be("v-if",!0):(C(),te("button",{key:2,class:"slidev-icon-btn",title:"Toggle dark mode",onClick:m[4]||(m[4]=xe=>k(dd)())},[k(mc)?(C(),M(w,{key:0})):(C(),M(T,{key:1}))])),R(ll),k(ro)?be("v-if",!0):(C(),te(Me,{key:3},[!k(Bs)&&!k(n)&&k(d)?(C(),te(Me,{key:0},[R(k(d)),R(ll)],64)):be("v-if",!0),k(Bs)?(C(),te("button",{key:1,class:"slidev-icon-btn",title:"Show presenter cursor",onClick:m[5]||(m[5]=xe=>Sr.value=!k(Sr))},[k(Sr)?(C(),M(H,{key:0})):(C(),M(z,{key:1,class:"opacity-50"}))])):be("v-if",!0)],64)),(!k(Fe).drawings.presenterOnly||k(Bs))&&!k(ro)?(C(),te(Me,{key:4},[e("button",{class:"slidev-icon-btn relative",title:"Drawing",onClick:m[6]||(m[6]=xe=>Js.value=!k(Js))},[R(I),k(Js)?(C(),te("div",{key:0,class:"absolute left-1 right-1 bottom-0 h-0.7 rounded-full",style:ts({background:k(Jo).color})},null,4)):be("v-if",!0)]),R(ll)],64)):be("v-if",!0),k(ro)?be("v-if",!0):(C(),te(Me,{key:5},[k(Bs)?(C(),M(ne,{key:0,to:k(i),class:"slidev-icon-btn",title:"Play Mode"},{default:E(()=>[R(G)]),_:1},8,["to"])):be("v-if",!0),k(lb)?(C(),M(ne,{key:1,to:k(c),class:"slidev-icon-btn",title:"Presenter Mode"},{default:E(()=>[R(ue)]),_:1},8,["to"])):be("v-if",!0),be("v-if",!0)],64)),(C(),te(Me,{key:6},[k(Fe).download?(C(),te("button",{key:0,class:"slidev-icon-btn",onClick:m[8]||(m[8]=(...xe)=>k(ba)&&k(ba)(...xe))},[R(ee)])):be("v-if",!0)],64)),!k(Bs)&&k(Fe).info&&!k(ro)?(C(),te("button",{key:7,class:"slidev-icon-btn",onClick:m[9]||(m[9]=xe=>yt.value=!k(yt))},[R(De)])):be("v-if",!0),!k(Bs)&&!k(ro)?(C(),M(ev,{key:8},{button:E(()=>[e("button",tv,[R(Te)])]),menu:E(()=>[R(Q1)]),_:1})):be("v-if",!0),k(ro)?be("v-if",!0):(C(),M(ll,{key:9})),e("div",lv,[e("div",rv,[r(an(k(Ke))+" ",1),e("span",av,"/ "+an(k(xd)),1)])]),R(k(nv))],34)],512)}}}),iv=N(cv,[["__file","/home/runner/work/sylius-resource-formation/sylius-resource-formation/node_modules/@slidev/client/internals/NavControls.vue"]]),Bd={render(){return[]}},Ad={render(){return[]}},pv={key:0,class:"absolute top-0 left-0 right-0 bottom-0 pointer-events-none text-xl"},uv=Pe({__name:"PresenterMouse",setup(s){return F(O),(o,n)=>{const t=_d;return k(Dr).cursor?(C(),te("div",pv,[R(t,{class:"absolute",style:ts({left:`${k(Dr).cursor.x}%`,top:`${k(Dr).cursor.y}%`})},null,8,["style"])])):be("v-if",!0)}}}),yv=N(uv,[["__file","/home/runner/work/sylius-resource-formation/sylius-resource-formation/node_modules/@slidev/client/internals/PresenterMouse.vue"]]),dv=Pe({__name:"SlidesShow",props:{context:{type:String,required:!0}},setup(s){F(O),Ae(ys,()=>{var t,l;(t=ys.value)!=null&&t.meta&&ys.value.meta.preload!==!1&&(ys.value.meta.__preloaded=!0),(l=xr.value)!=null&&l.meta&&xr.value.meta.preload!==!1&&(xr.value.meta.__preloaded=!0)},{immediate:!0});const o=eo();Io(()=>import("./DrawingLayer-6f30b9ac.js"),[]).then(t=>o.value=t.default);const n=$(()=>Qe.filter(t=>{var l;return((l=t.meta)==null?void 0:l.__preloaded)||t===ys.value}));return(t,l)=>(C(),te(Me,null,[be(" Global Bottom "),R(k(Ad)),be(" Slides "),R(wh,fe(k(db),{id:"slideshow",tag:"div"}),{default:E(()=>[(C(!0),te(Me,null,Ut(k(n),a=>{var c;return Xl((C(),M(k(Bc),{key:a.path,is:a==null?void 0:a.component,clicks:a===k(ys)?k(Ts):0,"clicks-elements":((c=a.meta)==null?void 0:c.__clicksElements)||[],"clicks-disabled":!1,class:Ye(k(_c)(a)),route:a,context:s.context},null,8,["is","clicks","clicks-elements","class","route","context"])),[[vy,a===k(ys)]])}),128))]),_:1},16),be(" Global Top "),R(k(Bd)),k(o)?(C(),M(k(o),{key:0})):be("v-if",!0),k(Bs)?be("v-if",!0):(C(),M(yv,{key:1}))],64))}});const fv=N(dv,[["__scopeId","data-v-afb4231e"],["__file","/home/runner/work/sylius-resource-formation/sylius-resource-formation/node_modules/@slidev/client/internals/SlidesShow.vue"]]),mv=Pe({__name:"PrintStyle",setup(s){F(O);function o(n,{slots:t}){if(t.default)return fs("style",t.default())}return(n,t)=>(C(),M(o,null,{default:E(()=>[r(" @page { size: "+an(k(Fo))+"px "+an(k(ic))+"px; margin: 0px; } ",1)]),_:1}))}}),gd=N(mv,[["__file","/home/runner/work/sylius-resource-formation/sylius-resource-formation/node_modules/@slidev/client/internals/PrintStyle.vue"]]),hv=Pe({__name:"Play",setup(s){F(O),qg();const o=X();function n(a){var c;dp.value||((c=a.target)==null?void 0:c.id)==="slide-container"&&(a.screenX/window.innerWidth>.6?To():Mo())}fb(o);const t=$(()=>ZA.value||dp.value);eo();const l=eo();return Io(()=>import("./DrawingControls-7464a032.js"),[]).then(a=>l.value=a.default),(a,c)=>(C(),te(Me,null,[k(On)?(C(),M(gd,{key:0})):be("v-if",!0),e("div",{id:"page-root",ref_key:"root",ref:o,class:"grid grid-cols-[1fr_max-content]",style:ts(k(pc))},[R(md,{class:"w-full h-full",style:ts({background:"var(--slidev-slide-container-background, black)"}),width:k(On)?k(rn).width.value:void 0,scale:k(dl),onPointerdown:n},{default:E(()=>[R(fv,{context:"slide"})]),controls:E(()=>[e("div",{class:Ye(["absolute bottom-0 left-0 transition duration-300 opacity-0 hover:opacity-100",[k(t)?"opacity-100 right-0":"opacity-0 p-2",k(Rt)?"pointer-events-none":""]])},[R(iv,{class:"m-auto",persist:k(t)},null,8,["persist"])],2),!k(Fe).drawings.presenterOnly&&!k(ro)&&k(l)?(C(),M(k(l),{key:0,class:"ml-0"})):be("v-if",!0)]),_:1},8,["style","width","scale"]),be("v-if",!0)],4),R(d3)],64))}}),_v=N(hv,[["__file","/home/runner/work/sylius-resource-formation/sylius-resource-formation/node_modules/@slidev/client/internals/Play.vue"]]);/*! js-yaml 4.1.0 https://github.com/nodeca/js-yaml @license MIT */function vd(s){return typeof s>"u"||s===null}function Bv(s){return typeof s=="object"&&s!==null}function Av(s){return Array.isArray(s)?s:vd(s)?[]:[s]}function gv(s,o){var n,t,l,a;if(o)for(a=Object.keys(o),n=0,t=a.length;n<t;n+=1)l=a[n],s[l]=o[l];return s}function vv(s,o){var n="",t;for(t=0;t<o;t+=1)n+=s;return n}function Cv(s){return s===0&&Number.NEGATIVE_INFINITY===1/s}var Dv=vd,Ev=Bv,bv=Av,kv=vv,wv=Cv,Sv=gv,Ac={isNothing:Dv,isObject:Ev,toArray:bv,repeat:kv,isNegativeZero:wv,extend:Sv};function Cd(s,o){var n="",t=s.reason||"(unknown reason)";return s.mark?(s.mark.name&&(n+='in "'+s.mark.name+'" '),n+="("+(s.mark.line+1)+":"+(s.mark.column+1)+")",!o&&s.mark.snippet&&(n+=`

`+s.mark.snippet),t+" "+n):t}function $t(s,o){Error.call(this),this.name="YAMLException",this.reason=s,this.mark=o,this.message=Cd(this,!1),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack||""}$t.prototype=Object.create(Error.prototype);$t.prototype.constructor=$t;$t.prototype.toString=function(o){return this.name+": "+Cd(this,o)};var Zo=$t,Rv=["kind","multi","resolve","construct","instanceOf","predicate","represent","representName","defaultStyle","styleAliases"],xv=["scalar","sequence","mapping"];function $v(s){var o={};return s!==null&&Object.keys(s).forEach(function(n){s[n].forEach(function(t){o[String(t)]=n})}),o}function Fv(s,o){if(o=o||{},Object.keys(o).forEach(function(n){if(Rv.indexOf(n)===-1)throw new Zo('Unknown option "'+n+'" is met in definition of "'+s+'" YAML type.')}),this.options=o,this.tag=s,this.kind=o.kind||null,this.resolve=o.resolve||function(){return!0},this.construct=o.construct||function(n){return n},this.instanceOf=o.instanceOf||null,this.predicate=o.predicate||null,this.represent=o.represent||null,this.representName=o.representName||null,this.defaultStyle=o.defaultStyle||null,this.multi=o.multi||!1,this.styleAliases=$v(o.styleAliases||null),xv.indexOf(this.kind)===-1)throw new Zo('Unknown kind "'+this.kind+'" is specified for "'+s+'" YAML type.')}var cs=Fv;function Ep(s,o){var n=[];return s[o].forEach(function(t){var l=n.length;n.forEach(function(a,c){a.tag===t.tag&&a.kind===t.kind&&a.multi===t.multi&&(l=c)}),n[l]=t}),n}function Iv(){var s={scalar:{},sequence:{},mapping:{},fallback:{},multi:{scalar:[],sequence:[],mapping:[],fallback:[]}},o,n;function t(l){l.multi?(s.multi[l.kind].push(l),s.multi.fallback.push(l)):s[l.kind][l.tag]=s.fallback[l.tag]=l}for(o=0,n=arguments.length;o<n;o+=1)arguments[o].forEach(t);return s}function Da(s){return this.extend(s)}Da.prototype.extend=function(o){var n=[],t=[];if(o instanceof cs)t.push(o);else if(Array.isArray(o))t=t.concat(o);else if(o&&(Array.isArray(o.implicit)||Array.isArray(o.explicit)))o.implicit&&(n=n.concat(o.implicit)),o.explicit&&(t=t.concat(o.explicit));else throw new Zo("Schema.extend argument should be a Type, [ Type ], or a schema definition ({ implicit: [...], explicit: [...] })");n.forEach(function(a){if(!(a instanceof cs))throw new Zo("Specified list of YAML types (or a single Type object) contains a non-Type object.");if(a.loadKind&&a.loadKind!=="scalar")throw new Zo("There is a non-scalar type in the implicit list of a schema. Implicit resolving of such types is not supported.");if(a.multi)throw new Zo("There is a multi type in the implicit list of a schema. Multi tags can only be listed as explicit.")}),t.forEach(function(a){if(!(a instanceof cs))throw new Zo("Specified list of YAML types (or a single Type object) contains a non-Type object.")});var l=Object.create(Da.prototype);return l.implicit=(this.implicit||[]).concat(n),l.explicit=(this.explicit||[]).concat(t),l.compiledImplicit=Ep(l,"implicit"),l.compiledExplicit=Ep(l,"explicit"),l.compiledTypeMap=Iv(l.compiledImplicit,l.compiledExplicit),l};var Tv=Da,Mv=new cs("tag:yaml.org,2002:str",{kind:"scalar",construct:function(s){return s!==null?s:""}}),Pv=new cs("tag:yaml.org,2002:seq",{kind:"sequence",construct:function(s){return s!==null?s:[]}}),Ov=new cs("tag:yaml.org,2002:map",{kind:"mapping",construct:function(s){return s!==null?s:{}}}),Lv=new Tv({explicit:[Mv,Pv,Ov]});function Nv(s){if(s===null)return!0;var o=s.length;return o===1&&s==="~"||o===4&&(s==="null"||s==="Null"||s==="NULL")}function qv(){return null}function Hv(s){return s===null}var Uv=new cs("tag:yaml.org,2002:null",{kind:"scalar",resolve:Nv,construct:qv,predicate:Hv,represent:{canonical:function(){return"~"},lowercase:function(){return"null"},uppercase:function(){return"NULL"},camelcase:function(){return"Null"},empty:function(){return""}},defaultStyle:"lowercase"});function Vv(s){if(s===null)return!1;var o=s.length;return o===4&&(s==="true"||s==="True"||s==="TRUE")||o===5&&(s==="false"||s==="False"||s==="FALSE")}function jv(s){return s==="true"||s==="True"||s==="TRUE"}function Gv(s){return Object.prototype.toString.call(s)==="[object Boolean]"}var Wv=new cs("tag:yaml.org,2002:bool",{kind:"scalar",resolve:Vv,construct:jv,predicate:Gv,represent:{lowercase:function(s){return s?"true":"false"},uppercase:function(s){return s?"TRUE":"FALSE"},camelcase:function(s){return s?"True":"False"}},defaultStyle:"lowercase"});function zv(s){return 48<=s&&s<=57||65<=s&&s<=70||97<=s&&s<=102}function Kv(s){return 48<=s&&s<=55}function Yv(s){return 48<=s&&s<=57}function Zv(s){if(s===null)return!1;var o=s.length,n=0,t=!1,l;if(!o)return!1;if(l=s[n],(l==="-"||l==="+")&&(l=s[++n]),l==="0"){if(n+1===o)return!0;if(l=s[++n],l==="b"){for(n++;n<o;n++)if(l=s[n],l!=="_"){if(l!=="0"&&l!=="1")return!1;t=!0}return t&&l!=="_"}if(l==="x"){for(n++;n<o;n++)if(l=s[n],l!=="_"){if(!zv(s.charCodeAt(n)))return!1;t=!0}return t&&l!=="_"}if(l==="o"){for(n++;n<o;n++)if(l=s[n],l!=="_"){if(!Kv(s.charCodeAt(n)))return!1;t=!0}return t&&l!=="_"}}if(l==="_")return!1;for(;n<o;n++)if(l=s[n],l!=="_"){if(!Yv(s.charCodeAt(n)))return!1;t=!0}return!(!t||l==="_")}function Qv(s){var o=s,n=1,t;if(o.indexOf("_")!==-1&&(o=o.replace(/_/g,"")),t=o[0],(t==="-"||t==="+")&&(t==="-"&&(n=-1),o=o.slice(1),t=o[0]),o==="0")return 0;if(t==="0"){if(o[1]==="b")return n*parseInt(o.slice(2),2);if(o[1]==="x")return n*parseInt(o.slice(2),16);if(o[1]==="o")return n*parseInt(o.slice(2),8)}return n*parseInt(o,10)}function Jv(s){return Object.prototype.toString.call(s)==="[object Number]"&&s%1===0&&!Ac.isNegativeZero(s)}var Xv=new cs("tag:yaml.org,2002:int",{kind:"scalar",resolve:Zv,construct:Qv,predicate:Jv,represent:{binary:function(s){return s>=0?"0b"+s.toString(2):"-0b"+s.toString(2).slice(1)},octal:function(s){return s>=0?"0o"+s.toString(8):"-0o"+s.toString(8).slice(1)},decimal:function(s){return s.toString(10)},hexadecimal:function(s){return s>=0?"0x"+s.toString(16).toUpperCase():"-0x"+s.toString(16).toUpperCase().slice(1)}},defaultStyle:"decimal",styleAliases:{binary:[2,"bin"],octal:[8,"oct"],decimal:[10,"dec"],hexadecimal:[16,"hex"]}}),eC=new RegExp("^(?:[-+]?(?:[0-9][0-9_]*)(?:\\.[0-9_]*)?(?:[eE][-+]?[0-9]+)?|\\.[0-9_]+(?:[eE][-+]?[0-9]+)?|[-+]?\\.(?:inf|Inf|INF)|\\.(?:nan|NaN|NAN))$");function sC(s){return!(s===null||!eC.test(s)||s[s.length-1]==="_")}function oC(s){var o,n;return o=s.replace(/_/g,"").toLowerCase(),n=o[0]==="-"?-1:1,"+-".indexOf(o[0])>=0&&(o=o.slice(1)),o===".inf"?n===1?Number.POSITIVE_INFINITY:Number.NEGATIVE_INFINITY:o===".nan"?NaN:n*parseFloat(o,10)}var nC=/^[-+]?[0-9]+e/;function tC(s,o){var n;if(isNaN(s))switch(o){case"lowercase":return".nan";case"uppercase":return".NAN";case"camelcase":return".NaN"}else if(Number.POSITIVE_INFINITY===s)switch(o){case"lowercase":return".inf";case"uppercase":return".INF";case"camelcase":return".Inf"}else if(Number.NEGATIVE_INFINITY===s)switch(o){case"lowercase":return"-.inf";case"uppercase":return"-.INF";case"camelcase":return"-.Inf"}else if(Ac.isNegativeZero(s))return"-0.0";return n=s.toString(10),nC.test(n)?n.replace("e",".e"):n}function lC(s){return Object.prototype.toString.call(s)==="[object Number]"&&(s%1!==0||Ac.isNegativeZero(s))}var rC=new cs("tag:yaml.org,2002:float",{kind:"scalar",resolve:sC,construct:oC,predicate:lC,represent:tC,defaultStyle:"lowercase"}),aC=Lv.extend({implicit:[Uv,Wv,Xv,rC]}),cC=aC,Dd=new RegExp("^([0-9][0-9][0-9][0-9])-([0-9][0-9])-([0-9][0-9])$"),Ed=new RegExp("^([0-9][0-9][0-9][0-9])-([0-9][0-9]?)-([0-9][0-9]?)(?:[Tt]|[ \\t]+)([0-9][0-9]?):([0-9][0-9]):([0-9][0-9])(?:\\.([0-9]*))?(?:[ \\t]*(Z|([-+])([0-9][0-9]?)(?::([0-9][0-9]))?))?$");function iC(s){return s===null?!1:Dd.exec(s)!==null||Ed.exec(s)!==null}function pC(s){var o,n,t,l,a,c,i,p=0,u=null,y,d,f;if(o=Dd.exec(s),o===null&&(o=Ed.exec(s)),o===null)throw new Error("Date resolve error");if(n=+o[1],t=+o[2]-1,l=+o[3],!o[4])return new Date(Date.UTC(n,t,l));if(a=+o[4],c=+o[5],i=+o[6],o[7]){for(p=o[7].slice(0,3);p.length<3;)p+="0";p=+p}return o[9]&&(y=+o[10],d=+(o[11]||0),u=(y*60+d)*6e4,o[9]==="-"&&(u=-u)),f=new Date(Date.UTC(n,t,l,a,c,i,p)),u&&f.setTime(f.getTime()-u),f}function uC(s){return s.toISOString()}var yC=new cs("tag:yaml.org,2002:timestamp",{kind:"scalar",resolve:iC,construct:pC,instanceOf:Date,represent:uC});function dC(s){return s==="<<"||s===null}var fC=new cs("tag:yaml.org,2002:merge",{kind:"scalar",resolve:dC}),gc=`ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=
\r`;function mC(s){if(s===null)return!1;var o,n,t=0,l=s.length,a=gc;for(n=0;n<l;n++)if(o=a.indexOf(s.charAt(n)),!(o>64)){if(o<0)return!1;t+=6}return t%8===0}function hC(s){var o,n,t=s.replace(/[\r\n=]/g,""),l=t.length,a=gc,c=0,i=[];for(o=0;o<l;o++)o%4===0&&o&&(i.push(c>>16&255),i.push(c>>8&255),i.push(c&255)),c=c<<6|a.indexOf(t.charAt(o));return n=l%4*6,n===0?(i.push(c>>16&255),i.push(c>>8&255),i.push(c&255)):n===18?(i.push(c>>10&255),i.push(c>>2&255)):n===12&&i.push(c>>4&255),new Uint8Array(i)}function _C(s){var o="",n=0,t,l,a=s.length,c=gc;for(t=0;t<a;t++)t%3===0&&t&&(o+=c[n>>18&63],o+=c[n>>12&63],o+=c[n>>6&63],o+=c[n&63]),n=(n<<8)+s[t];return l=a%3,l===0?(o+=c[n>>18&63],o+=c[n>>12&63],o+=c[n>>6&63],o+=c[n&63]):l===2?(o+=c[n>>10&63],o+=c[n>>4&63],o+=c[n<<2&63],o+=c[64]):l===1&&(o+=c[n>>2&63],o+=c[n<<4&63],o+=c[64],o+=c[64]),o}function BC(s){return Object.prototype.toString.call(s)==="[object Uint8Array]"}var AC=new cs("tag:yaml.org,2002:binary",{kind:"scalar",resolve:mC,construct:hC,predicate:BC,represent:_C}),gC=Object.prototype.hasOwnProperty,vC=Object.prototype.toString;function CC(s){if(s===null)return!0;var o=[],n,t,l,a,c,i=s;for(n=0,t=i.length;n<t;n+=1){if(l=i[n],c=!1,vC.call(l)!=="[object Object]")return!1;for(a in l)if(gC.call(l,a))if(!c)c=!0;else return!1;if(!c)return!1;if(o.indexOf(a)===-1)o.push(a);else return!1}return!0}function DC(s){return s!==null?s:[]}var EC=new cs("tag:yaml.org,2002:omap",{kind:"sequence",resolve:CC,construct:DC}),bC=Object.prototype.toString;function kC(s){if(s===null)return!0;var o,n,t,l,a,c=s;for(a=new Array(c.length),o=0,n=c.length;o<n;o+=1){if(t=c[o],bC.call(t)!=="[object Object]"||(l=Object.keys(t),l.length!==1))return!1;a[o]=[l[0],t[l[0]]]}return!0}function wC(s){if(s===null)return[];var o,n,t,l,a,c=s;for(a=new Array(c.length),o=0,n=c.length;o<n;o+=1)t=c[o],l=Object.keys(t),a[o]=[l[0],t[l[0]]];return a}var SC=new cs("tag:yaml.org,2002:pairs",{kind:"sequence",resolve:kC,construct:wC}),RC=Object.prototype.hasOwnProperty;function xC(s){if(s===null)return!0;var o,n=s;for(o in n)if(RC.call(n,o)&&n[o]!==null)return!1;return!0}function $C(s){return s!==null?s:{}}var FC=new cs("tag:yaml.org,2002:set",{kind:"mapping",resolve:xC,construct:$C});cC.extend({implicit:[yC,fC],explicit:[AC,EC,SC,FC]});function bp(s){return s===48?"\0":s===97?"\x07":s===98?"\b":s===116||s===9?"	":s===110?`
`:s===118?"\v":s===102?"\f":s===114?"\r":s===101?"\x1B":s===32?" ":s===34?'"':s===47?"/":s===92?"\\":s===78?"":s===95?" ":s===76?"\u2028":s===80?"\u2029":""}var IC=new Array(256),TC=new Array(256);for(var vn=0;vn<256;vn++)IC[vn]=bp(vn)?1:0,TC[vn]=bp(vn);function MC(s){return Array.from(new Set(s))}function kp(...s){let o,n,t;s.length===1?(o=0,t=1,[n]=s):[o,n,t=1]=s;const l=[];let a=o;for(;a<n;)l.push(a),a+=t||1;return l}function bd(s,o){if(!o||o==="all"||o==="*")return kp(1,s+1);const n=[];for(const t of o.split(/[,;]/g))if(!t.includes("-"))n.push(+t);else{const[l,a]=t.split("-",2);n.push(...kp(+l,a?+a+1:s+1))}return MC(n).filter(t=>t<=s).sort((t,l)=>t-l)}function kd(s){const o=$(()=>s.value.path),n=$(()=>Qe.length-1),t=$(()=>parseInt(o.value.split(/\//g).slice(-1)[0])||1),l=$(()=>tr(t.value)),a=$(()=>Qe.find(f=>f.path===`${t.value}`)),c=$(()=>{var f,h,m;return(m=(h=(f=a.value)==null?void 0:f.meta)==null?void 0:h.slide)==null?void 0:m.id}),i=$(()=>{var f,h;return((h=(f=a.value)==null?void 0:f.meta)==null?void 0:h.layout)||(t.value===1?"cover":"default")}),p=$(()=>Qe.find(f=>f.path===`${Math.min(Qe.length,t.value+1)}`)),u=$(()=>Qe.filter(f=>{var h,m;return(m=(h=f.meta)==null?void 0:h.slide)==null?void 0:m.title}).reduce((f,h)=>(vc(f,h),f),[])),y=$(()=>Cc(u.value,a.value)),d=$(()=>Dc(y.value));return{route:s,path:o,total:n,currentPage:t,currentPath:l,currentRoute:a,currentSlideId:c,currentLayout:i,nextRoute:p,rawTree:u,treeWithActiveStatuses:y,tree:d}}function wd(s,o,n){const t=X(0);ns(()=>{gs.afterEach(async()=>{await ns(),t.value+=1})});const l=$(()=>{var p,u;return t.value,((u=(p=o.value)==null?void 0:p.meta)==null?void 0:u.__clicksElements)||[]}),a=$(()=>{var p,u;return+(((u=(p=o.value)==null?void 0:p.meta)==null?void 0:u.clicks)??l.value.length)}),c=$(()=>n.value<Qe.length-1||s.value<a.value),i=$(()=>n.value>1||s.value>0);return{clicks:s,clicksElements:l,clicksTotal:a,hasNext:c,hasPrev:i}}const PC=["id"],OC=Pe({__name:"PrintSlideClick",props:{clicks:{type:Number,required:!0},clicksElements:{type:Array,required:!1},nav:{type:null,required:!0},route:{type:null,required:!0}},emits:["update:clicksElements"],setup(s,{emit:o}){const n=s,t=Qs(n,"clicksElements",o),l=$(()=>({height:`${ic}px`,width:`${Fo}px`})),a=eo();Io(()=>Promise.resolve().then(()=>Yg),void 0).then(u=>a.value=u.default);const c=$(()=>n.clicks),i=wd(c,n.nav.currentRoute,n.nav.currentPage),p=$(()=>`${n.route.path.toString().padStart(3,"0")}-${(c.value+1).toString().padStart(2,"0")}`);return ks(O,Ge({nav:{...n.nav,...i},configs:Fe,themeConfigs:$(()=>Fe.themeConfig)})),(u,y)=>{var d;return C(),te("div",{id:k(p),class:"print-slide-container",style:ts(k(l))},[R(k(Ad)),R(k(Bc),{is:(d=s.route)==null?void 0:d.component,"clicks-elements":k(t),"onUpdate:clicksElements":y[0]||(y[0]=f=>Ie(t)?t.value=f:null),clicks:k(c),"clicks-disabled":!1,class:Ye(k(_c)(s.route)),route:s.route},null,8,["is","clicks-elements","clicks","class","route"]),k(a)?(C(),M(k(a),{key:0,page:+s.route.path},null,8,["page"])):be("v-if",!0),R(k(Bd))],12,PC)}}}),wp=N(OC,[["__file","/home/runner/work/sylius-resource-formation/sylius-resource-formation/node_modules/@slidev/client/internals/PrintSlideClick.vue"]]),LC=Pe({__name:"PrintSlide",props:{route:{type:null,required:!0}},setup(s){var a;const o=s;F(O);const n=Ge(((a=o.route.meta)==null?void 0:a.__clicksElements)||[]),t=$(()=>o.route),l=kd(t);return(c,i)=>(C(),te(Me,null,[R(wp,{"clicks-elements":n,"onUpdate:clicksElements":i[0]||(i[0]=p=>n=p),clicks:0,nav:k(l),route:k(t)},null,8,["clicks-elements","nav","route"]),k(dt)?be("v-if",!0):(C(!0),te(Me,{key:0},Ut(n.length,p=>(C(),M(wp,{key:p,clicks:p,nav:k(l),route:k(t)},null,8,["clicks","nav","route"]))),128))],64))}}),NC=N(LC,[["__file","/home/runner/work/sylius-resource-formation/sylius-resource-formation/node_modules/@slidev/client/internals/PrintSlide.vue"]]),qC={id:"print-content"},HC=Pe({__name:"PrintContainer",props:{width:{type:Number,required:!0}},setup(s){const o=s;F(O);const n=$(()=>o.width),t=$(()=>o.width/$o),l=$(()=>n.value/t.value),a=$(()=>l.value<$o?n.value/Fo:t.value*$o/Fo);let c=Qe.slice(0,-1);Ps.value.query.range&&(c=bd(c.length,Ps.value.query.range).map(u=>c[u-1]));const i=$(()=>({"select-none":!Fe.selectable,"slidev-code-line-numbers":Fe.lineNumbers}));return ks($y,a),(p,u)=>(C(),te("div",{id:"print-container",class:Ye(k(i))},[e("div",qC,[(C(!0),te(Me,null,Ut(k(c),y=>(C(),M(NC,{key:y.path,route:y},null,8,["route"]))),128))]),fo(p.$slots,"controls")],2))}});const UC=N(HC,[["__file","/home/runner/work/sylius-resource-formation/sylius-resource-formation/node_modules/@slidev/client/internals/PrintContainer.vue"]]),VC=Pe({__name:"Print",setup(s){return F(O),dn(()=>{On?document.body.parentNode.classList.add("print"):document.body.parentNode.classList.remove("print")}),(o,n)=>(C(),te(Me,null,[k(On)?(C(),M(gd,{key:0})):be("v-if",!0),e("div",{id:"page-root",class:"grid grid-cols-[1fr_max-content]",style:ts(k(pc))},[R(UC,{class:"w-full h-full",style:ts({background:"var(--slidev-slide-container-background, black)"}),width:k(rn).width.value},null,8,["style","width"])],4)],64))}});const jC=N(VC,[["__file","/home/runner/work/sylius-resource-formation/sylius-resource-formation/node_modules/@slidev/client/internals/Print.vue"]]);const GC={class:"slidev-layout end"},WC={__name:"end",setup(s){return F(O),(o,n)=>(C(),te("div",GC," END "))}},zC=N(WC,[["__scopeId","data-v-e532b98d"],["__file","/home/runner/work/sylius-resource-formation/sylius-resource-formation/node_modules/@slidev/client/layouts/end.vue"]]);function Sp(s){return s.startsWith("/")?"/sylius-resource-formation/"+s.slice(1):s}function KC(s,o=!1){const n=s&&["#","rgb","hsl"].some(l=>s.indexOf(l)===0),t={background:n?s:void 0,color:s&&!n?"white":void 0,backgroundImage:n?void 0:s?o?`linear-gradient(#0005, #0008), url(${Sp(s)})`:`url("${Sp(s)}")`:void 0,backgroundRepeat:"no-repeat",backgroundPosition:"center",backgroundSize:"cover"};return t.background||delete t.background,t}const YC={class:"my-auto w-full"},ZC=Pe({__name:"cover",props:{background:{default:"https://source.unsplash.com/collection/94734566/1920x1080"}},setup(s){const o=s;F(O);const n=$(()=>KC(o.background,!0));return(t,l)=>(C(),te("div",{class:"slidev-layout cover text-center",style:ts(k(n))},[e("div",YC,[fo(t.$slots,"default")])],4))}}),QC=N(ZC,[["__file","/home/runner/work/sylius-resource-formation/sylius-resource-formation/node_modules/@slidev/theme-seriph/layouts/cover.vue"]]),JC=e("h1",null,"Sylius Resource Formation",-1),XC=e("p",null,"avec Sylius & Monofony",-1),e0=e("div",{align:"center"},[e("img",{class:"w-75",align:"center",src:"https://sylius.com/wp-content/uploads/2021/03/sylius-logo_sylius-logo-light-1024x422.jpg"})],-1),s0=e("div",{align:"center"},[e("img",{class:"w-75",src:"https://raw.githubusercontent.com/Monofony/Monofony/0.x/docs/_images/doc_logo.png"})],-1),o0={__name:"1",setup(s){const o={theme:"seriph",background:!1,class:"text-center",highlighter:"shiki",lineNumbers:!1,info:`## Slidev Starter Template
Presentation slides for developers.

Learn more at [Sli.dev](https://sli.dev)
`,drawings:{persist:!1},transition:"slide-left",colorSchema:"light",css:"unocss"};return F(O),(n,t)=>(C(),M(QC,Z(Y(o)),{default:E(()=>[JC,XC,e0,s0]),_:1},16))}},n0=N(o0,[["__file","/@slidev/slides/1.md"]]),t0={class:"slidev-icon",viewBox:"0 0 256 256",width:"1.2em",height:"1.2em"},l0=e("path",{fill:"currentColor",d:"M200 32h-36.3a47.8 47.8 0 0 0-71.4 0H56a16 16 0 0 0-16 16v168a16 16 0 0 0 16 16h144a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16Zm-72 0a32.1 32.1 0 0 1 32 32H96a32.1 32.1 0 0 1 32-32Zm72 184H56V48h26.8A47.2 47.2 0 0 0 80 64v8a8 8 0 0 0 8 8h80a8 8 0 0 0 8-8v-8a47.2 47.2 0 0 0-2.8-16H200Z"},null,-1),r0=[l0];function a0(s,o){return C(),te("svg",t0,r0)}const c0={name:"ph-clipboard",render:a0},i0={class:"slidev-icon",viewBox:"0 0 256 256",width:"1.2em",height:"1.2em"},p0=e("path",{fill:"currentColor",d:"M177.8 98.5a8 8 0 0 1-.3 11.3l-58.6 56a8.1 8.1 0 0 1-5.6 2.2a7.9 7.9 0 0 1-5.5-2.2l-29.3-28a8 8 0 1 1 11-11.6l23.8 22.7l53.2-50.7a8 8 0 0 1 11.3.3ZM232 128A104 104 0 1 1 128 24a104.2 104.2 0 0 1 104 104Zm-16 0a88 88 0 1 0-88 88a88.1 88.1 0 0 0 88-88Z"},null,-1),u0=[p0];function y0(s,o){return C(),te("svg",i0,u0)}const d0={name:"ph-check-circle",render:y0},f0=["title"],m0=Pe({__name:"CodeBlockWrapper",props:{ranges:{default:()=>[]},at:{type:Number,default:void 0},maxHeight:{type:String,default:void 0}},setup(s){const o=s;F(O);const n=F(ct),t=F(Yo),l=F(it);function a(d=5){const f=[],h="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",m=h.length;for(let B=0;B<d;B++)f.push(h.charAt(Math.floor(Math.random()*m)));return f.join("")}const c=X(),i=xs();fn(()=>{const d=o.at==null?t==null?void 0:t.value.length:o.at,f=$(()=>l!=null&&l.value?o.ranges.length-1:Math.min(Math.max(0,((n==null?void 0:n.value)||0)-(d||0)),o.ranges.length-1)),h=$(()=>o.ranges[f.value]||"");if(o.ranges.length>=2&&!(l!=null&&l.value)){const m=a(),B=T5(o.ranges.length-1).map(A=>m+A);t!=null&&t.value&&(t.value.push(...B),Jl(()=>B.forEach(A=>aa(t.value,A)),i))}dn(()=>{if(!c.value)return;const B=c.value.querySelector(".shiki-dark")?Array.from(c.value.querySelectorAll(".shiki")):[c.value];for(const A of B){const b=Array.from(A.querySelectorAll(".line")),v=bd(b.length,h.value);if(b.forEach((D,w)=>{const T=v.includes(w+1);D.classList.toggle(zo,!0),D.classList.toggle("highlighted",T),D.classList.toggle("dishonored",!T)}),o.maxHeight){const D=A.querySelector(".line.highlighted");D&&D.scrollIntoView({behavior:"smooth",block:"center"})}}})});const{copied:p,copy:u}=P_();function y(){var f,h;const d=(h=(f=c.value)==null?void 0:f.querySelector(".slidev-code"))==null?void 0:h.textContent;d&&u(d)}return(d,f)=>{const h=d0,m=c0;return C(),te("div",{ref_key:"el",ref:c,class:"slidev-code-wrapper relative group",style:ts({"max-height":o.maxHeight,"overflow-y":o.maxHeight?"scroll":void 0})},[fo(d.$slots,"default"),k(Fe).codeCopy?(C(),te("button",{key:0,class:"slidev-code-copy absolute top-0 right-0 transition opacity-0 group-hover:opacity-20 hover:!opacity-100",title:k(p)?"Copied":"Copy",onClick:f[0]||(f[0]=B=>y())},[k(p)?(C(),M(h,{key:0,class:"p-2 w-8 h-8"})):(C(),M(m,{key:1,class:"p-2 w-8 h-8"}))],8,f0)):be("v-if",!0)],4)}}}),ge=N(m0,[["__file","/home/runner/work/sylius-resource-formation/sylius-resource-formation/node_modules/@slidev/client/builtin/CodeBlockWrapper.vue"]]),h0={class:"slidev-layout default"},_0={__name:"default",setup(s){return F(O),(o,n)=>(C(),te("div",h0,[fo(o.$slots,"default")]))}},Q=N(_0,[["__file","/home/runner/work/sylius-resource-formation/sylius-resource-formation/node_modules/@slidev/client/layouts/default.vue"]]),B0=e("h1",null,"Create a new resource",-1),A0=e("p",null,"As an example, let’s create a Book entity:",-1),g0=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#A1B567"}},"$"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},"bin/console"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},"make:entity"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},"'App\\Entity\\Book'")])])]),e("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#6C7834"}},"$"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},"bin/console"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},"make:entity"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},"'App\\Entity\\Book'")])])])],-1),v0={__name:"2",setup(s){const o={srcSequence:"./pages/01_create_resource.md"};return F(O),(n,t)=>{const l=ge;return C(),M(Q,Z(Y(o)),{default:E(()=>[B0,A0,R(l,fe({},{ranges:[""]}),{default:E(()=>[g0]),_:1},16)]),_:1},16)}}},C0=N(v0,[["__file","/@slidev/slides/2.md"]]),D0=e("h1",null,"Configure the BookRepository",-1),E0=e("p",null,"The command also generates a Doctrine repository class.",-1),b0=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#CB7676"}},"<?"),e("span",{style:{color:"#D4976C"}},"php")]),r(`
`),e("span",{class:"line"}),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#4D9375"}},"namespace"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"App"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#A1B567"}},"Repository"),e("span",{style:{color:"#858585"}},";")]),r(`
`),e("span",{class:"line"}),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#4D9375"}},"use"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"App"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#E0A569"}},"Entity"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#E0A569"}},"Book"),e("span",{style:{color:"#858585"}},";")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#4D9375"}},"use"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"Doctrine"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#E0A569"}},"Bundle"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#E0A569"}},"DoctrineBundle"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#E0A569"}},"Repository"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#E0A569"}},"ServiceEntityRepository"),e("span",{style:{color:"#858585"}},";")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#4D9375"}},"use"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"Doctrine"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#E0A569"}},"Persistence"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#E0A569"}},"ManagerRegistry"),e("span",{style:{color:"#858585"}},";")]),r(`
`),e("span",{class:"line"}),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#758575"}},"/**")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#758575"}}," * [...]")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#758575"}}," */")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#CB7676"}},"class"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"BookRepository"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"extends"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"ServiceEntityRepository")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"{")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#CB7676"}},"public"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"function"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"__construct"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#E0A569"}},"ManagerRegistry"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"$"),e("span",{style:{color:"#B8A965"}},"registry"),e("span",{style:{color:"#858585"}},")")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#858585"}},"{")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#CB7676"}},"parent::"),e("span",{style:{color:"#A1B567"}},"__construct"),e("span",{style:{color:"#858585"}},"($"),e("span",{style:{color:"#B8A965"}},"registry"),e("span",{style:{color:"#858585"}},","),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"Book"),e("span",{style:{color:"#CB7676"}},"::"),e("span",{style:{color:"#4D9375"}},"class"),e("span",{style:{color:"#858585"}},");")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#858585"}},"}")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    ")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"    "),e("span",{style:{color:"#758575"}},"// [...]")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"}")])])]),e("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#AB5959"}},"<?"),e("span",{style:{color:"#A65E2B"}},"php")]),r(`
`),e("span",{class:"line"}),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#1C6B48"}},"namespace"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"App"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#6C7834"}},"Repository"),e("span",{style:{color:"#8E8F8B"}},";")]),r(`
`),e("span",{class:"line"}),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#1C6B48"}},"use"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B58451"}},"App"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#B58451"}},"Entity"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#B58451"}},"Book"),e("span",{style:{color:"#8E8F8B"}},";")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#1C6B48"}},"use"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B58451"}},"Doctrine"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#B58451"}},"Bundle"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#B58451"}},"DoctrineBundle"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#B58451"}},"Repository"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#B58451"}},"ServiceEntityRepository"),e("span",{style:{color:"#8E8F8B"}},";")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#1C6B48"}},"use"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B58451"}},"Doctrine"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#B58451"}},"Persistence"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#B58451"}},"ManagerRegistry"),e("span",{style:{color:"#8E8F8B"}},";")]),r(`
`),e("span",{class:"line"}),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#A0ADA0"}},"/**")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#A0ADA0"}}," * [...]")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#A0ADA0"}}," */")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#AB5959"}},"class"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"BookRepository"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"extends"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"ServiceEntityRepository")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"{")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#AB5959"}},"public"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"function"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B58451"}},"__construct"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#B58451"}},"ManagerRegistry"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"$"),e("span",{style:{color:"#8C862B"}},"registry"),e("span",{style:{color:"#8E8F8B"}},")")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#8E8F8B"}},"{")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#AB5959"}},"parent::"),e("span",{style:{color:"#6C7834"}},"__construct"),e("span",{style:{color:"#8E8F8B"}},"($"),e("span",{style:{color:"#8C862B"}},"registry"),e("span",{style:{color:"#8E8F8B"}},","),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B58451"}},"Book"),e("span",{style:{color:"#AB5959"}},"::"),e("span",{style:{color:"#1C6B48"}},"class"),e("span",{style:{color:"#8E8F8B"}},");")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#8E8F8B"}},"}")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    ")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"    "),e("span",{style:{color:"#A0ADA0"}},"// [...]")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"}")])])])],-1),k0={__name:"3",setup(s){const o={transition:"fade",srcSequence:"./pages/01_create_resource.md"};return F(O),(n,t)=>{const l=ge;return C(),M(Q,Z(Y(o)),{default:E(()=>[D0,E0,R(l,fe({},{ranges:[""]}),{default:E(()=>[b0]),_:1},16)]),_:1},16)}}},w0=N(k0,[["__file","/@slidev/slides/3.md"]]),S0=e("h1",null,"Configure the BookRepository",-1),R0=e("p",null,"The command also generates a Doctrine repository class.",-1),x0=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#CB7676"}},"<?"),e("span",{style:{color:"#D4976C"}},"php")]),r(`
`),e("span",{class:"line"}),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#4D9375"}},"namespace"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"App"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#A1B567"}},"Repository"),e("span",{style:{color:"#858585"}},";")]),r(`
`),e("span",{class:"line"}),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#4D9375"}},"use"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"App"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#E0A569"}},"Entity"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#E0A569"}},"Book"),e("span",{style:{color:"#858585"}},";")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#4D9375"}},"use"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"Doctrine"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#E0A569"}},"Bundle"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#E0A569"}},"DoctrineBundle"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#E0A569"}},"Repository"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#E0A569"}},"ServiceEntityRepository"),e("span",{style:{color:"#858585"}},";")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#4D9375"}},"use"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"Doctrine"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#E0A569"}},"Persistence"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#E0A569"}},"ManagerRegistry"),e("span",{style:{color:"#858585"}},";")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#4D9375"}},"use"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"Sylius"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#E0A569"}},"Bundle"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#E0A569"}},"ResourceBundle"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#E0A569"}},"Doctrine"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#E0A569"}},"ORM"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#E0A569"}},"ResourceRepositoryTrait"),e("span",{style:{color:"#858585"}},";")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#4D9375"}},"use"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"Sylius"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#E0A569"}},"Resource"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#E0A569"}},"Doctrine"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#E0A569"}},"Persistence"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#E0A569"}},"RepositoryInterface"),e("span",{style:{color:"#858585"}},";")]),r(`
`),e("span",{class:"line"}),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#758575"}},"/**")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#758575"}}," * [...]")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#758575"}}," */")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#CB7676"}},"class"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"BookRepository"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"extends"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"ServiceEntityRepository"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"implements"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"RepositoryInterface")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"{")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#4D9375"}},"use"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"ResourceRepositoryTrait"),e("span",{style:{color:"#858585"}},";")]),r(`
`),e("span",{class:"line"}),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#CB7676"}},"public"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"function"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"__construct"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#E0A569"}},"ManagerRegistry"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"$"),e("span",{style:{color:"#B8A965"}},"registry"),e("span",{style:{color:"#858585"}},")")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#858585"}},"{")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#CB7676"}},"parent::"),e("span",{style:{color:"#A1B567"}},"__construct"),e("span",{style:{color:"#858585"}},"($"),e("span",{style:{color:"#B8A965"}},"registry"),e("span",{style:{color:"#858585"}},","),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"Book"),e("span",{style:{color:"#CB7676"}},"::"),e("span",{style:{color:"#4D9375"}},"class"),e("span",{style:{color:"#858585"}},");")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#858585"}},"}")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"}")])])]),e("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#AB5959"}},"<?"),e("span",{style:{color:"#A65E2B"}},"php")]),r(`
`),e("span",{class:"line"}),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#1C6B48"}},"namespace"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"App"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#6C7834"}},"Repository"),e("span",{style:{color:"#8E8F8B"}},";")]),r(`
`),e("span",{class:"line"}),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#1C6B48"}},"use"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B58451"}},"App"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#B58451"}},"Entity"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#B58451"}},"Book"),e("span",{style:{color:"#8E8F8B"}},";")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#1C6B48"}},"use"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B58451"}},"Doctrine"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#B58451"}},"Bundle"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#B58451"}},"DoctrineBundle"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#B58451"}},"Repository"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#B58451"}},"ServiceEntityRepository"),e("span",{style:{color:"#8E8F8B"}},";")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#1C6B48"}},"use"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B58451"}},"Doctrine"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#B58451"}},"Persistence"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#B58451"}},"ManagerRegistry"),e("span",{style:{color:"#8E8F8B"}},";")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#1C6B48"}},"use"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B58451"}},"Sylius"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#B58451"}},"Bundle"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#B58451"}},"ResourceBundle"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#B58451"}},"Doctrine"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#B58451"}},"ORM"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#B58451"}},"ResourceRepositoryTrait"),e("span",{style:{color:"#8E8F8B"}},";")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#1C6B48"}},"use"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B58451"}},"Sylius"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#B58451"}},"Resource"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#B58451"}},"Doctrine"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#B58451"}},"Persistence"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#B58451"}},"RepositoryInterface"),e("span",{style:{color:"#8E8F8B"}},";")]),r(`
`),e("span",{class:"line"}),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#A0ADA0"}},"/**")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#A0ADA0"}}," * [...]")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#A0ADA0"}}," */")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#AB5959"}},"class"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"BookRepository"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"extends"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"ServiceEntityRepository"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"implements"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"RepositoryInterface")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"{")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#1C6B48"}},"use"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B58451"}},"ResourceRepositoryTrait"),e("span",{style:{color:"#8E8F8B"}},";")]),r(`
`),e("span",{class:"line"}),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#AB5959"}},"public"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"function"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B58451"}},"__construct"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#B58451"}},"ManagerRegistry"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"$"),e("span",{style:{color:"#8C862B"}},"registry"),e("span",{style:{color:"#8E8F8B"}},")")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#8E8F8B"}},"{")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#AB5959"}},"parent::"),e("span",{style:{color:"#6C7834"}},"__construct"),e("span",{style:{color:"#8E8F8B"}},"($"),e("span",{style:{color:"#8C862B"}},"registry"),e("span",{style:{color:"#8E8F8B"}},","),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B58451"}},"Book"),e("span",{style:{color:"#AB5959"}},"::"),e("span",{style:{color:"#1C6B48"}},"class"),e("span",{style:{color:"#8E8F8B"}},");")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#8E8F8B"}},"}")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"}")])])])],-1),$0={__name:"4",setup(s){const o={srcSequence:"./pages/01_create_resource.md"};return F(O),(n,t)=>{const l=ge;return C(),M(Q,Z(Y(o)),{default:E(()=>[S0,R0,R(l,fe({},{ranges:["all","14","14,9","16","16,8"]}),{default:E(()=>[x0]),_:1},16)]),_:1},16)}}},F0=N($0,[["__file","/@slidev/slides/4.md"]]),Re=Pe({props:{every:{type:Number,default:1},at:{type:[Number,String],default:null},hide:{type:Boolean,default:!1},fade:{type:Boolean,default:!1}},render(){var a,c;const s=Jc("click"),o=Jc("after"),n=(i,p,u)=>Xl(i,[[p,this.at!=null?+this.at+u:null,"",{hide:this.hide,fade:this.fade}]]);let t=(c=(a=this.$slots).default)==null?void 0:c.call(a);if(!t)return;t=I5(t);const l=i=>i.map((p,u)=>mo(p)?n(fs(p),u%this.every===0?s:o,Math.floor(u/this.every)):p);return t.length===1&&["ul","ol"].includes(t[0].type)&&Array.isArray(t[0].children)?fs(t[0],{},[l(t[0].children)]):l(t)}}),I0=e("h1",null,"Configure your resource",-1),T0=e("p",null,"Implements the Resource interface",-1),M0=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#758575"}},"// src/Entity/Book.php")]),r(`
`),e("span",{class:"line"}),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#4D9375"}},"namespace"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"App"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#A1B567"}},"Entity"),e("span",{style:{color:"#858585"}},";")]),r(`
`),e("span",{class:"line"}),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#4D9375"}},"use"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"App"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#E0A569"}},"Repository"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#E0A569"}},"BookRepository"),e("span",{style:{color:"#858585"}},";")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#4D9375"}},"use"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"Doctrine"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#E0A569"}},"ORM"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#E0A569"}},"Mapping"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#4D9375"}},"as"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"ORM"),e("span",{style:{color:"#858585"}},";")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#4D9375"}},"use"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"Sylius"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#E0A569"}},"Resource"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#E0A569"}},"Model"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#E0A569"}},"ResourceInterface"),e("span",{style:{color:"#858585"}},";")]),r(`
`),e("span",{class:"line"}),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"#["),e("span",{style:{color:"#E0A569"}},"ORM"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#E0A569"}},"Entity"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#A1B567"}},"repositoryClass"),e("span",{style:{color:"#858585"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"BookRepository"),e("span",{style:{color:"#CB7676"}},"::"),e("span",{style:{color:"#4D9375"}},"class"),e("span",{style:{color:"#858585"}},")"),e("span",{style:{color:"#DBD7CA"}},"]")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#CB7676"}},"class"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"Book"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"implements"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"ResourceInterface")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"{")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#CB7676"}},"public"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"function"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"getId"),e("span",{style:{color:"#858585"}},"()"),e("span",{style:{color:"#CB7676"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#4D9375"}},"int")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#858585"}},"{")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#4D9375"}},"return"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"$"),e("span",{style:{color:"#D4976C"}},"this"),e("span",{style:{color:"#CB7676"}},"->"),e("span",{style:{color:"#B8A965"}},"id"),e("span",{style:{color:"#858585"}},";")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#858585"}},"}")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"}")])])]),e("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#A0ADA0"}},"// src/Entity/Book.php")]),r(`
`),e("span",{class:"line"}),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#1C6B48"}},"namespace"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"App"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#6C7834"}},"Entity"),e("span",{style:{color:"#8E8F8B"}},";")]),r(`
`),e("span",{class:"line"}),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#1C6B48"}},"use"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B58451"}},"App"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#B58451"}},"Repository"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#B58451"}},"BookRepository"),e("span",{style:{color:"#8E8F8B"}},";")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#1C6B48"}},"use"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B58451"}},"Doctrine"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#B58451"}},"ORM"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#B58451"}},"Mapping"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#1C6B48"}},"as"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"ORM"),e("span",{style:{color:"#8E8F8B"}},";")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#1C6B48"}},"use"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B58451"}},"Sylius"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#B58451"}},"Resource"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#B58451"}},"Model"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#B58451"}},"ResourceInterface"),e("span",{style:{color:"#8E8F8B"}},";")]),r(`
`),e("span",{class:"line"}),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"#["),e("span",{style:{color:"#B58451"}},"ORM"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#B58451"}},"Entity"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#6C7834"}},"repositoryClass"),e("span",{style:{color:"#8E8F8B"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B58451"}},"BookRepository"),e("span",{style:{color:"#AB5959"}},"::"),e("span",{style:{color:"#1C6B48"}},"class"),e("span",{style:{color:"#8E8F8B"}},")"),e("span",{style:{color:"#393A34"}},"]")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#AB5959"}},"class"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"Book"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"implements"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"ResourceInterface")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"{")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#AB5959"}},"public"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"function"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"getId"),e("span",{style:{color:"#8E8F8B"}},"()"),e("span",{style:{color:"#AB5959"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#1C6B48"}},"int")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#8E8F8B"}},"{")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#1C6B48"}},"return"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"$"),e("span",{style:{color:"#A65E2B"}},"this"),e("span",{style:{color:"#AB5959"}},"->"),e("span",{style:{color:"#8C862B"}},"id"),e("span",{style:{color:"#8E8F8B"}},";")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#8E8F8B"}},"}")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"}")])])])],-1),P0=e("p",null,[r("This interface requires you to implement a "),e("code",null,"getId()"),r(" method.")],-1),O0=e("p",null,"This one is already generated 🎉",-1),L0={__name:"5",setup(s){const o={srcSequence:"./pages/02_configure_your_resource.md"};return F(O),(n,t)=>{const l=ge,a=Re;return C(),M(Q,Z(Y(o)),{default:E(()=>[I0,R(a,null,{default:E(()=>[T0,R(l,fe({},{ranges:["all","10","10,7"]}),{default:E(()=>[M0]),_:1},16),P0,O0]),_:1})]),_:1},16)}}},N0=N(L0,[["__file","/@slidev/slides/5.md"]]),q0=e("h1",null,"Use the AsResource attribute",-1),H0=e("p",null,[r("PHP attribute "),e("code",null,"#[AsResource]"),r(" configures your entity as a Sylius resource.")],-1),U0=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#4D9375"}},"namespace"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"App"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#A1B567"}},"Entity"),e("span",{style:{color:"#858585"}},";")]),r(`
`),e("span",{class:"line"}),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#4D9375"}},"use"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"App"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#E0A569"}},"Repository"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#E0A569"}},"BookRepository"),e("span",{style:{color:"#858585"}},";")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#4D9375"}},"use"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"Doctrine"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#E0A569"}},"ORM"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#E0A569"}},"Mapping"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#4D9375"}},"as"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"ORM"),e("span",{style:{color:"#858585"}},";")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#4D9375"}},"use"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"Sylius"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#E0A569"}},"Resource"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#E0A569"}},"Metadata"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#E0A569"}},"AsResource"),e("span",{style:{color:"#858585"}},";")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#4D9375"}},"use"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"Sylius"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#E0A569"}},"Resource"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#E0A569"}},"Model"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#E0A569"}},"ResourceInterface"),e("span",{style:{color:"#858585"}},";")]),r(`
`),e("span",{class:"line"}),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"#["),e("span",{style:{color:"#E0A569"}},"ORM"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#E0A569"}},"Entity"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#A1B567"}},"repositoryClass"),e("span",{style:{color:"#858585"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"BookRepository"),e("span",{style:{color:"#CB7676"}},"::"),e("span",{style:{color:"#4D9375"}},"class"),e("span",{style:{color:"#858585"}},")"),e("span",{style:{color:"#DBD7CA"}},"]")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"#["),e("span",{style:{color:"#E0A569"}},"AsResource"),e("span",{style:{color:"#DBD7CA"}},"]")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#CB7676"}},"class"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"Book"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"implements"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"ResourceInterface")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"{")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"}")])])]),e("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#1C6B48"}},"namespace"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"App"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#6C7834"}},"Entity"),e("span",{style:{color:"#8E8F8B"}},";")]),r(`
`),e("span",{class:"line"}),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#1C6B48"}},"use"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B58451"}},"App"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#B58451"}},"Repository"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#B58451"}},"BookRepository"),e("span",{style:{color:"#8E8F8B"}},";")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#1C6B48"}},"use"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B58451"}},"Doctrine"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#B58451"}},"ORM"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#B58451"}},"Mapping"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#1C6B48"}},"as"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"ORM"),e("span",{style:{color:"#8E8F8B"}},";")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#1C6B48"}},"use"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B58451"}},"Sylius"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#B58451"}},"Resource"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#B58451"}},"Metadata"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#B58451"}},"AsResource"),e("span",{style:{color:"#8E8F8B"}},";")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#1C6B48"}},"use"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B58451"}},"Sylius"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#B58451"}},"Resource"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#B58451"}},"Model"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#B58451"}},"ResourceInterface"),e("span",{style:{color:"#8E8F8B"}},";")]),r(`
`),e("span",{class:"line"}),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"#["),e("span",{style:{color:"#B58451"}},"ORM"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#B58451"}},"Entity"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#6C7834"}},"repositoryClass"),e("span",{style:{color:"#8E8F8B"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B58451"}},"BookRepository"),e("span",{style:{color:"#AB5959"}},"::"),e("span",{style:{color:"#1C6B48"}},"class"),e("span",{style:{color:"#8E8F8B"}},")"),e("span",{style:{color:"#393A34"}},"]")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"#["),e("span",{style:{color:"#B58451"}},"AsResource"),e("span",{style:{color:"#393A34"}},"]")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#AB5959"}},"class"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"Book"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"implements"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"ResourceInterface")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"{")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"}")])])])],-1),V0={__name:"6",setup(s){const o={srcSequence:"./pages/02_configure_your_resource.md"};return F(O),(n,t)=>{const l=ge;return C(),M(Q,Z(Y(o)),{default:E(()=>[q0,H0,R(l,fe({},{ranges:["all","9","9,5"]}),{default:E(()=>[U0]),_:1},16)]),_:1},16)}}},j0=N(V0,[["__file","/@slidev/slides/6.md"]]),G0=e("h1",null,"Debug the resource",-1),W0=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#A1B567"}},"$"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},"bin/console"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},"sylius:debug:resource"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},"'App\\Entity\\book'")])])]),e("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#6C7834"}},"$"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},"bin/console"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},"sylius:debug:resource"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},"'App\\Entity\\book'")])])])],-1),z0=e("h1",null,null,-1),K0=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#dbd7ca"}},"+--------------------+------------------------------------------------------------+")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#dbd7ca"}},"| name               | book                                                       |")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#dbd7ca"}},"| application        | app                                                        |")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#dbd7ca"}},"| driver             | doctrine/orm                                               |")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#dbd7ca"}},"| classes.model      | App\\Entity\\Book                                            |")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#dbd7ca"}},"| classes.controller | Sylius\\Bundle\\ResourceBundle\\Controller\\ResourceController |")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#dbd7ca"}},"| classes.factory    | Sylius\\Resource\\Factory\\Factory                            |")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#dbd7ca"}},"| classes.form       | Sylius\\Bundle\\ResourceBundle\\Form\\Type\\DefaultResourceType |")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#dbd7ca"}},"+--------------------+------------------------------------------------------------+")])])]),e("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#393a34"}},"+--------------------+------------------------------------------------------------+")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393a34"}},"| name               | book                                                       |")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393a34"}},"| application        | app                                                        |")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393a34"}},"| driver             | doctrine/orm                                               |")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393a34"}},"| classes.model      | App\\Entity\\Book                                            |")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393a34"}},"| classes.controller | Sylius\\Bundle\\ResourceBundle\\Controller\\ResourceController |")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393a34"}},"| classes.factory    | Sylius\\Resource\\Factory\\Factory                            |")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393a34"}},"| classes.form       | Sylius\\Bundle\\ResourceBundle\\Form\\Type\\DefaultResourceType |")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393a34"}},"+--------------------+------------------------------------------------------------+")])])])],-1),Y0=e("p",null,[r("By default, it will have the "),e("code",null,"app.book"),r(" alias in Sylius resource which is a concatenation of the application name and the resource name "),e("code",null,"{application}.{name}"),r(".")],-1),Z0={__name:"7",setup(s){const o={srcSequence:"./pages/02_configure_your_resource.md"};return F(O),(n,t)=>{const l=ge,a=Re;return C(),M(Q,Z(Y(o)),{default:E(()=>[G0,R(a,null,{default:E(()=>[R(l,fe({},{ranges:[""]}),{default:E(()=>[W0]),_:1},16),z0,K0,Y0]),_:1})]),_:1},16)}}},Q0=N(Z0,[["__file","/@slidev/slides/7.md"]]),J0=e("h1",null,"Configure your operations",-1),X0=e("p",null,"Now, with your fresh new resource, you have to define the operations that you need to implement. There are some basic CRUD operations and more.",-1),e6={__name:"8",setup(s){const o={srcSequence:"./pages/03_configure_your_operations.md"};return F(O),(n,t)=>{const l=Re;return C(),M(Q,Z(Y(o)),{default:E(()=>[J0,R(l,null,{default:E(()=>[X0]),_:1})]),_:1},16)}}},s6=N(e6,[["__file","/@slidev/slides/8.md"]]),o6=e("h1",null,"Index operation",-1),n6=e("p",null,[e("code",null,"Index"),r(" operation allows to browse all items of your resource.")],-1),t6=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#4D9375"}},"namespace"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"App"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#A1B567"}},"Entity"),e("span",{style:{color:"#858585"}},";")]),r(`
`),e("span",{class:"line"}),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#4D9375"}},"use"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"Sylius"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#E0A569"}},"Resource"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#E0A569"}},"Metadata"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#E0A569"}},"Index"),e("span",{style:{color:"#858585"}},";")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#4D9375"}},"use"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"Sylius"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#E0A569"}},"Resource"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#E0A569"}},"Metadata"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#E0A569"}},"AsResource"),e("span",{style:{color:"#858585"}},";")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#4D9375"}},"use"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"Sylius"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#E0A569"}},"Resource"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#E0A569"}},"Model"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#E0A569"}},"ResourceInterface"),e("span",{style:{color:"#858585"}},";")]),r(`
`),e("span",{class:"line"}),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"#["),e("span",{style:{color:"#E0A569"}},"AsResource"),e("span",{style:{color:"#DBD7CA"}},"]")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"#["),e("span",{style:{color:"#E0A569"}},"Index"),e("span",{style:{color:"#DBD7CA"}},"]")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#CB7676"}},"class"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"Book"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"implements"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"ResourceInterface")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"{")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"}")])])]),e("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#1C6B48"}},"namespace"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"App"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#6C7834"}},"Entity"),e("span",{style:{color:"#8E8F8B"}},";")]),r(`
`),e("span",{class:"line"}),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#1C6B48"}},"use"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B58451"}},"Sylius"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#B58451"}},"Resource"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#B58451"}},"Metadata"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#B58451"}},"Index"),e("span",{style:{color:"#8E8F8B"}},";")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#1C6B48"}},"use"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B58451"}},"Sylius"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#B58451"}},"Resource"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#B58451"}},"Metadata"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#B58451"}},"AsResource"),e("span",{style:{color:"#8E8F8B"}},";")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#1C6B48"}},"use"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B58451"}},"Sylius"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#B58451"}},"Resource"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#B58451"}},"Model"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#B58451"}},"ResourceInterface"),e("span",{style:{color:"#8E8F8B"}},";")]),r(`
`),e("span",{class:"line"}),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"#["),e("span",{style:{color:"#B58451"}},"AsResource"),e("span",{style:{color:"#393A34"}},"]")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"#["),e("span",{style:{color:"#B58451"}},"Index"),e("span",{style:{color:"#393A34"}},"]")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#AB5959"}},"class"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"Book"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"implements"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"ResourceInterface")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"{")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"}")])])])],-1),l6={__name:"9",setup(s){const o={srcSequence:"./pages/03_configure_your_operations.md"};return F(O),(n,t)=>{const l=ge,a=Re;return C(),M(Q,Z(Y(o)),{default:E(()=>[o6,R(a,null,{default:E(()=>[n6,R(l,fe({},{ranges:["all","8","8,3"]}),{default:E(()=>[t6]),_:1},16)]),_:1})]),_:1},16)}}},r6=N(l6,[["__file","/@slidev/slides/9.md"]]),a6=e("h1",null,"Index operation",-1),c6=e("p",null,[r("It will configure this route for your "),e("code",null,"index"),r(" operation.")],-1),i6=e("table",null,[e("thead",null,[e("tr",null,[e("th",null,"Name"),e("th",null,"Method"),e("th",null,"Path")])]),e("tbody",null,[e("tr",null,[e("td",null,"app_book_index"),e("td",null,"GET"),e("td",null,"/books")])])],-1),p6={__name:"10",setup(s){const o={srcSequence:"./pages/03_configure_your_operations.md"};return F(O),(n,t)=>{const l=Re;return C(),M(Q,Z(Y(o)),{default:E(()=>[a6,R(l,null,{default:E(()=>[c6,i6]),_:1})]),_:1},16)}}},u6=N(p6,[["__file","/@slidev/slides/10.md"]]),y6=e("h1",null,"Index operation",-1),d6=e("p",null,"On your Twig template, these variables are available",-1),f6=e("table",null,[e("thead",null,[e("tr",null,[e("th",null,"Name"),e("th",null,"Type")])]),e("tbody",null,[e("tr",null,[e("td",null,"resources"),e("td",null,"Pagerfanta\\Pagerfanta")]),e("tr",null,[e("td",null,"books"),e("td",null,"Pagerfanta\\Pagerfanta")]),e("tr",null,[e("td",null,"operation"),e("td",null,"Sylius\\Resource\\Metadata\\Index")]),e("tr",null,[e("td",null,"resource_metadata"),e("td",null,"Sylius\\Resource\\Metadata\\ResourceMetadata")]),e("tr",null,[e("td",null,"app"),e("td",null,"Symfony\\Bridge\\Twig\\AppVariable")])])],-1),m6={__name:"11",setup(s){const o={srcSequence:"./pages/03_configure_your_operations.md"};return F(O),(n,t)=>{const l=Re;return C(),M(Q,Z(Y(o)),{default:E(()=>[y6,R(l,null,{default:E(()=>[d6,f6]),_:1})]),_:1},16)}}},h6=N(m6,[["__file","/@slidev/slides/11.md"]]),_6=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"#["),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#E0A569"}},"Attribute"),e("span",{style:{color:"#858585"}},"(\\"),e("span",{style:{color:"#E0A569"}},"Attribute"),e("span",{style:{color:"#CB7676"}},"::"),e("span",{style:{color:"#D4976C"}},"TARGET_CLASS"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"|"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#E0A569"}},"Attribute"),e("span",{style:{color:"#CB7676"}},"::"),e("span",{style:{color:"#D4976C"}},"IS_REPEATABLE"),e("span",{style:{color:"#858585"}},")"),e("span",{style:{color:"#DBD7CA"}},"]")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#CB7676"}},"final"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"class"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"Index"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"extends"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"HttpOperation"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"implements"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"CollectionOperationInterface"),e("span",{style:{color:"#858585"}},","),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"GridAwareOperationInterface")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"{")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#CB7676"}},"public"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"function"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"__construct"),e("span",{style:{color:"#858585"}},"(")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#CB7676"}},"?"),e("span",{style:{color:"#4D9375"}},"array"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"$"),e("span",{style:{color:"#B8A965"}},"methods"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#D4976C"}},"null"),e("span",{style:{color:"#858585"}},",")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#CB7676"}},"?"),e("span",{style:{color:"#4D9375"}},"string"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"$"),e("span",{style:{color:"#B8A965"}},"path"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#D4976C"}},"null"),e("span",{style:{color:"#858585"}},",")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#CB7676"}},"?"),e("span",{style:{color:"#4D9375"}},"string"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"$"),e("span",{style:{color:"#B8A965"}},"routePrefix"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#D4976C"}},"null"),e("span",{style:{color:"#858585"}},",")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#CB7676"}},"?"),e("span",{style:{color:"#4D9375"}},"string"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"$"),e("span",{style:{color:"#B8A965"}},"template"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#D4976C"}},"null"),e("span",{style:{color:"#858585"}},",")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#CB7676"}},"?"),e("span",{style:{color:"#4D9375"}},"string"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"$"),e("span",{style:{color:"#B8A965"}},"shortName"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#D4976C"}},"null"),e("span",{style:{color:"#858585"}},",")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#CB7676"}},"?"),e("span",{style:{color:"#4D9375"}},"string"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"$"),e("span",{style:{color:"#B8A965"}},"name"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#D4976C"}},"null"),e("span",{style:{color:"#858585"}},",")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#4D9375"}},"string"),e("span",{style:{color:"#858585"}},"|"),e("span",{style:{color:"#4D9375"}},"callable"),e("span",{style:{color:"#858585"}},"|"),e("span",{style:{color:"#4D9375"}},"null"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"$"),e("span",{style:{color:"#B8A965"}},"provider"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#D4976C"}},"null"),e("span",{style:{color:"#858585"}},",")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#4D9375"}},"string"),e("span",{style:{color:"#858585"}},"|"),e("span",{style:{color:"#4D9375"}},"callable"),e("span",{style:{color:"#858585"}},"|"),e("span",{style:{color:"#4D9375"}},"null"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"$"),e("span",{style:{color:"#B8A965"}},"processor"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#D4976C"}},"null"),e("span",{style:{color:"#858585"}},",")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#4D9375"}},"string"),e("span",{style:{color:"#858585"}},"|"),e("span",{style:{color:"#4D9375"}},"callable"),e("span",{style:{color:"#858585"}},"|"),e("span",{style:{color:"#4D9375"}},"null"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"$"),e("span",{style:{color:"#B8A965"}},"responder"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#D4976C"}},"null"),e("span",{style:{color:"#858585"}},",")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#4D9375"}},"string"),e("span",{style:{color:"#858585"}},"|"),e("span",{style:{color:"#4D9375"}},"callable"),e("span",{style:{color:"#858585"}},"|"),e("span",{style:{color:"#4D9375"}},"null"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"$"),e("span",{style:{color:"#B8A965"}},"repository"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#D4976C"}},"null"),e("span",{style:{color:"#858585"}},",")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#CB7676"}},"?"),e("span",{style:{color:"#4D9375"}},"string"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"$"),e("span",{style:{color:"#B8A965"}},"repositoryMethod"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#D4976C"}},"null"),e("span",{style:{color:"#858585"}},",")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#CB7676"}},"?"),e("span",{style:{color:"#4D9375"}},"array"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"$"),e("span",{style:{color:"#B8A965"}},"repositoryArguments"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#D4976C"}},"null"),e("span",{style:{color:"#858585"}},",")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#CB7676"}},"?"),e("span",{style:{color:"#4D9375"}},"bool"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"$"),e("span",{style:{color:"#B8A965"}},"read"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#D4976C"}},"null"),e("span",{style:{color:"#858585"}},",")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#CB7676"}},"?"),e("span",{style:{color:"#4D9375"}},"bool"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"$"),e("span",{style:{color:"#B8A965"}},"write"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#D4976C"}},"null"),e("span",{style:{color:"#858585"}},",")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#CB7676"}},"?"),e("span",{style:{color:"#4D9375"}},"bool"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"$"),e("span",{style:{color:"#B8A965"}},"validate"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#D4976C"}},"null"),e("span",{style:{color:"#858585"}},",")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#CB7676"}},"?"),e("span",{style:{color:"#4D9375"}},"bool"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"$"),e("span",{style:{color:"#B8A965"}},"deserialize"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#D4976C"}},"null"),e("span",{style:{color:"#858585"}},",")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#CB7676"}},"?"),e("span",{style:{color:"#4D9375"}},"bool"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"$"),e("span",{style:{color:"#B8A965"}},"serialize"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#D4976C"}},"null"),e("span",{style:{color:"#858585"}},",")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"        "),e("span",{style:{color:"#758575"}},"// [...]")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#858585"}},")"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"{}")])])]),e("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"#["),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#B58451"}},"Attribute"),e("span",{style:{color:"#8E8F8B"}},"(\\"),e("span",{style:{color:"#B58451"}},"Attribute"),e("span",{style:{color:"#AB5959"}},"::"),e("span",{style:{color:"#A65E2B"}},"TARGET_CLASS"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"|"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#B58451"}},"Attribute"),e("span",{style:{color:"#AB5959"}},"::"),e("span",{style:{color:"#A65E2B"}},"IS_REPEATABLE"),e("span",{style:{color:"#8E8F8B"}},")"),e("span",{style:{color:"#393A34"}},"]")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#AB5959"}},"final"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"class"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"Index"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"extends"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"HttpOperation"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"implements"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"CollectionOperationInterface"),e("span",{style:{color:"#8E8F8B"}},","),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"GridAwareOperationInterface")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"{")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#AB5959"}},"public"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"function"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B58451"}},"__construct"),e("span",{style:{color:"#8E8F8B"}},"(")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#AB5959"}},"?"),e("span",{style:{color:"#1C6B48"}},"array"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"$"),e("span",{style:{color:"#8C862B"}},"methods"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#A65E2B"}},"null"),e("span",{style:{color:"#8E8F8B"}},",")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#AB5959"}},"?"),e("span",{style:{color:"#1C6B48"}},"string"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"$"),e("span",{style:{color:"#8C862B"}},"path"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#A65E2B"}},"null"),e("span",{style:{color:"#8E8F8B"}},",")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#AB5959"}},"?"),e("span",{style:{color:"#1C6B48"}},"string"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"$"),e("span",{style:{color:"#8C862B"}},"routePrefix"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#A65E2B"}},"null"),e("span",{style:{color:"#8E8F8B"}},",")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#AB5959"}},"?"),e("span",{style:{color:"#1C6B48"}},"string"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"$"),e("span",{style:{color:"#8C862B"}},"template"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#A65E2B"}},"null"),e("span",{style:{color:"#8E8F8B"}},",")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#AB5959"}},"?"),e("span",{style:{color:"#1C6B48"}},"string"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"$"),e("span",{style:{color:"#8C862B"}},"shortName"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#A65E2B"}},"null"),e("span",{style:{color:"#8E8F8B"}},",")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#AB5959"}},"?"),e("span",{style:{color:"#1C6B48"}},"string"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"$"),e("span",{style:{color:"#8C862B"}},"name"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#A65E2B"}},"null"),e("span",{style:{color:"#8E8F8B"}},",")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#1C6B48"}},"string"),e("span",{style:{color:"#8E8F8B"}},"|"),e("span",{style:{color:"#1C6B48"}},"callable"),e("span",{style:{color:"#8E8F8B"}},"|"),e("span",{style:{color:"#1C6B48"}},"null"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"$"),e("span",{style:{color:"#8C862B"}},"provider"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#A65E2B"}},"null"),e("span",{style:{color:"#8E8F8B"}},",")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#1C6B48"}},"string"),e("span",{style:{color:"#8E8F8B"}},"|"),e("span",{style:{color:"#1C6B48"}},"callable"),e("span",{style:{color:"#8E8F8B"}},"|"),e("span",{style:{color:"#1C6B48"}},"null"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"$"),e("span",{style:{color:"#8C862B"}},"processor"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#A65E2B"}},"null"),e("span",{style:{color:"#8E8F8B"}},",")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#1C6B48"}},"string"),e("span",{style:{color:"#8E8F8B"}},"|"),e("span",{style:{color:"#1C6B48"}},"callable"),e("span",{style:{color:"#8E8F8B"}},"|"),e("span",{style:{color:"#1C6B48"}},"null"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"$"),e("span",{style:{color:"#8C862B"}},"responder"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#A65E2B"}},"null"),e("span",{style:{color:"#8E8F8B"}},",")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#1C6B48"}},"string"),e("span",{style:{color:"#8E8F8B"}},"|"),e("span",{style:{color:"#1C6B48"}},"callable"),e("span",{style:{color:"#8E8F8B"}},"|"),e("span",{style:{color:"#1C6B48"}},"null"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"$"),e("span",{style:{color:"#8C862B"}},"repository"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#A65E2B"}},"null"),e("span",{style:{color:"#8E8F8B"}},",")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#AB5959"}},"?"),e("span",{style:{color:"#1C6B48"}},"string"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"$"),e("span",{style:{color:"#8C862B"}},"repositoryMethod"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#A65E2B"}},"null"),e("span",{style:{color:"#8E8F8B"}},",")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#AB5959"}},"?"),e("span",{style:{color:"#1C6B48"}},"array"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"$"),e("span",{style:{color:"#8C862B"}},"repositoryArguments"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#A65E2B"}},"null"),e("span",{style:{color:"#8E8F8B"}},",")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#AB5959"}},"?"),e("span",{style:{color:"#1C6B48"}},"bool"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"$"),e("span",{style:{color:"#8C862B"}},"read"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#A65E2B"}},"null"),e("span",{style:{color:"#8E8F8B"}},",")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#AB5959"}},"?"),e("span",{style:{color:"#1C6B48"}},"bool"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"$"),e("span",{style:{color:"#8C862B"}},"write"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#A65E2B"}},"null"),e("span",{style:{color:"#8E8F8B"}},",")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#AB5959"}},"?"),e("span",{style:{color:"#1C6B48"}},"bool"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"$"),e("span",{style:{color:"#8C862B"}},"validate"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#A65E2B"}},"null"),e("span",{style:{color:"#8E8F8B"}},",")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#AB5959"}},"?"),e("span",{style:{color:"#1C6B48"}},"bool"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"$"),e("span",{style:{color:"#8C862B"}},"deserialize"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#A65E2B"}},"null"),e("span",{style:{color:"#8E8F8B"}},",")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#AB5959"}},"?"),e("span",{style:{color:"#1C6B48"}},"bool"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"$"),e("span",{style:{color:"#8C862B"}},"serialize"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#A65E2B"}},"null"),e("span",{style:{color:"#8E8F8B"}},",")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"        "),e("span",{style:{color:"#A0ADA0"}},"// [...]")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#8E8F8B"}},")"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"{}")])])])],-1),B6={__name:"12",setup(s){const o={srcSequence:"./pages/03_configure_your_operations.md"};return F(O),(n,t)=>{const l=ge;return C(),M(Q,Z(Y(o)),{default:E(()=>[R(l,fe({},{ranges:[""]}),{default:E(()=>[_6]),_:1},16)]),_:1},16)}}},A6=N(B6,[["__file","/@slidev/slides/12.md"]]),g6=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"#["),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#E0A569"}},"Attribute"),e("span",{style:{color:"#858585"}},"(\\"),e("span",{style:{color:"#E0A569"}},"Attribute"),e("span",{style:{color:"#CB7676"}},"::"),e("span",{style:{color:"#D4976C"}},"TARGET_CLASS"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"|"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#E0A569"}},"Attribute"),e("span",{style:{color:"#CB7676"}},"::"),e("span",{style:{color:"#D4976C"}},"IS_REPEATABLE"),e("span",{style:{color:"#858585"}},")"),e("span",{style:{color:"#DBD7CA"}},"]")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#CB7676"}},"final"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"class"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"Index"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"extends"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"HttpOperation"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"implements"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"CollectionOperationInterface"),e("span",{style:{color:"#858585"}},","),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"GridAwareOperationInterface")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"{")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#CB7676"}},"public"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"function"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"__construct"),e("span",{style:{color:"#858585"}},"(")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"        "),e("span",{style:{color:"#758575"}},"// [...]")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#CB7676"}},"?"),e("span",{style:{color:"#4D9375"}},"string"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"$"),e("span",{style:{color:"#B8A965"}},"formType"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#D4976C"}},"null"),e("span",{style:{color:"#858585"}},",")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#CB7676"}},"?"),e("span",{style:{color:"#4D9375"}},"array"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"$"),e("span",{style:{color:"#B8A965"}},"formOptions"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#D4976C"}},"null"),e("span",{style:{color:"#858585"}},",")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#CB7676"}},"?"),e("span",{style:{color:"#4D9375"}},"string"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"$"),e("span",{style:{color:"#B8A965"}},"eventShortName"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#D4976C"}},"null"),e("span",{style:{color:"#858585"}},",")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#CB7676"}},"?"),e("span",{style:{color:"#4D9375"}},"array"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"$"),e("span",{style:{color:"#B8A965"}},"validationContext"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#D4976C"}},"null"),e("span",{style:{color:"#858585"}},",")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#4D9375"}},"string"),e("span",{style:{color:"#858585"}},"|"),e("span",{style:{color:"#4D9375"}},"callable"),e("span",{style:{color:"#858585"}},"|"),e("span",{style:{color:"#4D9375"}},"null"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"$"),e("span",{style:{color:"#B8A965"}},"twigContextFactory"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#D4976C"}},"null"),e("span",{style:{color:"#858585"}},",")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#CB7676"}},"?"),e("span",{style:{color:"#4D9375"}},"string"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"$"),e("span",{style:{color:"#B8A965"}},"redirectToRoute"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#D4976C"}},"null"),e("span",{style:{color:"#858585"}},",")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#CB7676"}},"?"),e("span",{style:{color:"#4D9375"}},"array"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"$"),e("span",{style:{color:"#B8A965"}},"vars"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#D4976C"}},"null"),e("span",{style:{color:"#858585"}},",")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#CB7676"}},"private"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"?"),e("span",{style:{color:"#4D9375"}},"string"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"$"),e("span",{style:{color:"#B8A965"}},"grid"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#D4976C"}},"null"),e("span",{style:{color:"#858585"}},",")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#858585"}},")"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"{}")])])]),e("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"#["),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#B58451"}},"Attribute"),e("span",{style:{color:"#8E8F8B"}},"(\\"),e("span",{style:{color:"#B58451"}},"Attribute"),e("span",{style:{color:"#AB5959"}},"::"),e("span",{style:{color:"#A65E2B"}},"TARGET_CLASS"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"|"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#B58451"}},"Attribute"),e("span",{style:{color:"#AB5959"}},"::"),e("span",{style:{color:"#A65E2B"}},"IS_REPEATABLE"),e("span",{style:{color:"#8E8F8B"}},")"),e("span",{style:{color:"#393A34"}},"]")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#AB5959"}},"final"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"class"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"Index"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"extends"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"HttpOperation"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"implements"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"CollectionOperationInterface"),e("span",{style:{color:"#8E8F8B"}},","),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"GridAwareOperationInterface")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"{")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#AB5959"}},"public"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"function"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B58451"}},"__construct"),e("span",{style:{color:"#8E8F8B"}},"(")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"        "),e("span",{style:{color:"#A0ADA0"}},"// [...]")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#AB5959"}},"?"),e("span",{style:{color:"#1C6B48"}},"string"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"$"),e("span",{style:{color:"#8C862B"}},"formType"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#A65E2B"}},"null"),e("span",{style:{color:"#8E8F8B"}},",")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#AB5959"}},"?"),e("span",{style:{color:"#1C6B48"}},"array"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"$"),e("span",{style:{color:"#8C862B"}},"formOptions"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#A65E2B"}},"null"),e("span",{style:{color:"#8E8F8B"}},",")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#AB5959"}},"?"),e("span",{style:{color:"#1C6B48"}},"string"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"$"),e("span",{style:{color:"#8C862B"}},"eventShortName"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#A65E2B"}},"null"),e("span",{style:{color:"#8E8F8B"}},",")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#AB5959"}},"?"),e("span",{style:{color:"#1C6B48"}},"array"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"$"),e("span",{style:{color:"#8C862B"}},"validationContext"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#A65E2B"}},"null"),e("span",{style:{color:"#8E8F8B"}},",")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#1C6B48"}},"string"),e("span",{style:{color:"#8E8F8B"}},"|"),e("span",{style:{color:"#1C6B48"}},"callable"),e("span",{style:{color:"#8E8F8B"}},"|"),e("span",{style:{color:"#1C6B48"}},"null"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"$"),e("span",{style:{color:"#8C862B"}},"twigContextFactory"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#A65E2B"}},"null"),e("span",{style:{color:"#8E8F8B"}},",")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#AB5959"}},"?"),e("span",{style:{color:"#1C6B48"}},"string"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"$"),e("span",{style:{color:"#8C862B"}},"redirectToRoute"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#A65E2B"}},"null"),e("span",{style:{color:"#8E8F8B"}},",")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#AB5959"}},"?"),e("span",{style:{color:"#1C6B48"}},"array"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"$"),e("span",{style:{color:"#8C862B"}},"vars"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#A65E2B"}},"null"),e("span",{style:{color:"#8E8F8B"}},",")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#AB5959"}},"private"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"?"),e("span",{style:{color:"#1C6B48"}},"string"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"$"),e("span",{style:{color:"#8C862B"}},"grid"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#A65E2B"}},"null"),e("span",{style:{color:"#8E8F8B"}},",")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#8E8F8B"}},")"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"{}")])])])],-1),v6={__name:"13",setup(s){const o={srcSequence:"./pages/03_configure_your_operations.md"};return F(O),(n,t)=>{const l=ge;return C(),M(Q,Z(Y(o)),{default:E(()=>[R(l,fe({},{ranges:[""]}),{default:E(()=>[g6]),_:1},16)]),_:1},16)}}},C6=N(v6,[["__file","/@slidev/slides/13.md"]]),D6=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#CB7676"}},"final"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"class"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"ResourceMetadata")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"{")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#CB7676"}},"private"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"?"),e("span",{style:{color:"#E0A569"}},"Operations"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"$"),e("span",{style:{color:"#B8A965"}},"operations"),e("span",{style:{color:"#858585"}},";")]),r(`
`),e("span",{class:"line"}),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#CB7676"}},"public"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"function"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"__construct"),e("span",{style:{color:"#858585"}},"(")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#CB7676"}},"private"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"?"),e("span",{style:{color:"#4D9375"}},"string"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"$"),e("span",{style:{color:"#B8A965"}},"alias"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#D4976C"}},"null"),e("span",{style:{color:"#858585"}},",")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#CB7676"}},"private"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"?"),e("span",{style:{color:"#4D9375"}},"string"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"$"),e("span",{style:{color:"#B8A965"}},"section"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#D4976C"}},"null"),e("span",{style:{color:"#858585"}},",")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#CB7676"}},"private"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"?"),e("span",{style:{color:"#4D9375"}},"string"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"$"),e("span",{style:{color:"#B8A965"}},"formType"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#D4976C"}},"null"),e("span",{style:{color:"#858585"}},",")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#CB7676"}},"private"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"?"),e("span",{style:{color:"#4D9375"}},"string"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"$"),e("span",{style:{color:"#B8A965"}},"templatesDir"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#D4976C"}},"null"),e("span",{style:{color:"#858585"}},",")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#CB7676"}},"private"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"?"),e("span",{style:{color:"#4D9375"}},"string"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"$"),e("span",{style:{color:"#B8A965"}},"routePrefix"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#D4976C"}},"null"),e("span",{style:{color:"#858585"}},",")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#CB7676"}},"private"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"?"),e("span",{style:{color:"#4D9375"}},"string"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"$"),e("span",{style:{color:"#B8A965"}},"name"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#D4976C"}},"null"),e("span",{style:{color:"#858585"}},",")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#CB7676"}},"private"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"?"),e("span",{style:{color:"#4D9375"}},"string"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"$"),e("span",{style:{color:"#B8A965"}},"pluralName"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#D4976C"}},"null"),e("span",{style:{color:"#858585"}},",")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#CB7676"}},"private"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"?"),e("span",{style:{color:"#4D9375"}},"string"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"$"),e("span",{style:{color:"#B8A965"}},"applicationName"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#D4976C"}},"null"),e("span",{style:{color:"#858585"}},",")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#CB7676"}},"private"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"?"),e("span",{style:{color:"#4D9375"}},"string"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"$"),e("span",{style:{color:"#B8A965"}},"identifier"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#D4976C"}},"null"),e("span",{style:{color:"#858585"}},",")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#CB7676"}},"protected"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"?"),e("span",{style:{color:"#4D9375"}},"array"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"$"),e("span",{style:{color:"#B8A965"}},"normalizationContext"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#D4976C"}},"null"),e("span",{style:{color:"#858585"}},",")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#CB7676"}},"protected"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"?"),e("span",{style:{color:"#4D9375"}},"array"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"$"),e("span",{style:{color:"#B8A965"}},"denormalizationContext"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#D4976C"}},"null"),e("span",{style:{color:"#858585"}},",")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#CB7676"}},"protected"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"?"),e("span",{style:{color:"#4D9375"}},"array"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"$"),e("span",{style:{color:"#B8A965"}},"validationContext"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#D4976C"}},"null"),e("span",{style:{color:"#858585"}},",")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#CB7676"}},"private"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"?"),e("span",{style:{color:"#4D9375"}},"string"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"$"),e("span",{style:{color:"#B8A965"}},"class"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#D4976C"}},"null"),e("span",{style:{color:"#858585"}},",")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#CB7676"}},"private"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#4D9375"}},"string"),e("span",{style:{color:"#858585"}},"|"),e("span",{style:{color:"#4D9375"}},"false"),e("span",{style:{color:"#858585"}},"|"),e("span",{style:{color:"#4D9375"}},"null"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"$"),e("span",{style:{color:"#B8A965"}},"driver"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#D4976C"}},"null"),e("span",{style:{color:"#858585"}},",")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#CB7676"}},"private"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"?"),e("span",{style:{color:"#4D9375"}},"array"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"$"),e("span",{style:{color:"#B8A965"}},"vars"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#D4976C"}},"null"),e("span",{style:{color:"#858585"}},",")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#CB7676"}},"?"),e("span",{style:{color:"#4D9375"}},"array"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"$"),e("span",{style:{color:"#B8A965"}},"operations"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#D4976C"}},"null"),e("span",{style:{color:"#858585"}},",")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#858585"}},")"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"{")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#858585"}},"$"),e("span",{style:{color:"#D4976C"}},"this"),e("span",{style:{color:"#CB7676"}},"->"),e("span",{style:{color:"#B8A965"}},"operations"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#D4976C"}},"null"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"==="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"$"),e("span",{style:{color:"#B8A965"}},"operations"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"?"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#D4976C"}},"null"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#4D9375"}},"new"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"Operations"),e("span",{style:{color:"#858585"}},"($"),e("span",{style:{color:"#B8A965"}},"operations"),e("span",{style:{color:"#858585"}},");")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#858585"}},"}")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"}")])])]),e("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#AB5959"}},"final"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"class"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"ResourceMetadata")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"{")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#AB5959"}},"private"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"?"),e("span",{style:{color:"#B58451"}},"Operations"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"$"),e("span",{style:{color:"#8C862B"}},"operations"),e("span",{style:{color:"#8E8F8B"}},";")]),r(`
`),e("span",{class:"line"}),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#AB5959"}},"public"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"function"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B58451"}},"__construct"),e("span",{style:{color:"#8E8F8B"}},"(")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#AB5959"}},"private"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"?"),e("span",{style:{color:"#1C6B48"}},"string"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"$"),e("span",{style:{color:"#8C862B"}},"alias"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#A65E2B"}},"null"),e("span",{style:{color:"#8E8F8B"}},",")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#AB5959"}},"private"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"?"),e("span",{style:{color:"#1C6B48"}},"string"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"$"),e("span",{style:{color:"#8C862B"}},"section"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#A65E2B"}},"null"),e("span",{style:{color:"#8E8F8B"}},",")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#AB5959"}},"private"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"?"),e("span",{style:{color:"#1C6B48"}},"string"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"$"),e("span",{style:{color:"#8C862B"}},"formType"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#A65E2B"}},"null"),e("span",{style:{color:"#8E8F8B"}},",")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#AB5959"}},"private"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"?"),e("span",{style:{color:"#1C6B48"}},"string"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"$"),e("span",{style:{color:"#8C862B"}},"templatesDir"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#A65E2B"}},"null"),e("span",{style:{color:"#8E8F8B"}},",")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#AB5959"}},"private"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"?"),e("span",{style:{color:"#1C6B48"}},"string"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"$"),e("span",{style:{color:"#8C862B"}},"routePrefix"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#A65E2B"}},"null"),e("span",{style:{color:"#8E8F8B"}},",")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#AB5959"}},"private"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"?"),e("span",{style:{color:"#1C6B48"}},"string"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"$"),e("span",{style:{color:"#8C862B"}},"name"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#A65E2B"}},"null"),e("span",{style:{color:"#8E8F8B"}},",")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#AB5959"}},"private"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"?"),e("span",{style:{color:"#1C6B48"}},"string"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"$"),e("span",{style:{color:"#8C862B"}},"pluralName"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#A65E2B"}},"null"),e("span",{style:{color:"#8E8F8B"}},",")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#AB5959"}},"private"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"?"),e("span",{style:{color:"#1C6B48"}},"string"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"$"),e("span",{style:{color:"#8C862B"}},"applicationName"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#A65E2B"}},"null"),e("span",{style:{color:"#8E8F8B"}},",")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#AB5959"}},"private"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"?"),e("span",{style:{color:"#1C6B48"}},"string"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"$"),e("span",{style:{color:"#8C862B"}},"identifier"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#A65E2B"}},"null"),e("span",{style:{color:"#8E8F8B"}},",")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#AB5959"}},"protected"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"?"),e("span",{style:{color:"#1C6B48"}},"array"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"$"),e("span",{style:{color:"#8C862B"}},"normalizationContext"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#A65E2B"}},"null"),e("span",{style:{color:"#8E8F8B"}},",")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#AB5959"}},"protected"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"?"),e("span",{style:{color:"#1C6B48"}},"array"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"$"),e("span",{style:{color:"#8C862B"}},"denormalizationContext"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#A65E2B"}},"null"),e("span",{style:{color:"#8E8F8B"}},",")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#AB5959"}},"protected"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"?"),e("span",{style:{color:"#1C6B48"}},"array"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"$"),e("span",{style:{color:"#8C862B"}},"validationContext"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#A65E2B"}},"null"),e("span",{style:{color:"#8E8F8B"}},",")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#AB5959"}},"private"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"?"),e("span",{style:{color:"#1C6B48"}},"string"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"$"),e("span",{style:{color:"#8C862B"}},"class"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#A65E2B"}},"null"),e("span",{style:{color:"#8E8F8B"}},",")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#AB5959"}},"private"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#1C6B48"}},"string"),e("span",{style:{color:"#8E8F8B"}},"|"),e("span",{style:{color:"#1C6B48"}},"false"),e("span",{style:{color:"#8E8F8B"}},"|"),e("span",{style:{color:"#1C6B48"}},"null"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"$"),e("span",{style:{color:"#8C862B"}},"driver"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#A65E2B"}},"null"),e("span",{style:{color:"#8E8F8B"}},",")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#AB5959"}},"private"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"?"),e("span",{style:{color:"#1C6B48"}},"array"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"$"),e("span",{style:{color:"#8C862B"}},"vars"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#A65E2B"}},"null"),e("span",{style:{color:"#8E8F8B"}},",")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#AB5959"}},"?"),e("span",{style:{color:"#1C6B48"}},"array"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"$"),e("span",{style:{color:"#8C862B"}},"operations"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#A65E2B"}},"null"),e("span",{style:{color:"#8E8F8B"}},",")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#8E8F8B"}},")"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"{")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#8E8F8B"}},"$"),e("span",{style:{color:"#A65E2B"}},"this"),e("span",{style:{color:"#AB5959"}},"->"),e("span",{style:{color:"#8C862B"}},"operations"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#A65E2B"}},"null"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"==="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"$"),e("span",{style:{color:"#8C862B"}},"operations"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"?"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#A65E2B"}},"null"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#1C6B48"}},"new"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B58451"}},"Operations"),e("span",{style:{color:"#8E8F8B"}},"($"),e("span",{style:{color:"#8C862B"}},"operations"),e("span",{style:{color:"#8E8F8B"}},");")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#8E8F8B"}},"}")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"}")])])])],-1),E6={__name:"14",setup(s){const o={srcSequence:"./pages/03_configure_your_operations.md"};return F(O),(n,t)=>{const l=ge;return C(),M(Q,Z(Y(o)),{default:E(()=>[R(l,fe({},{ranges:[""]}),{default:E(()=>[D6]),_:1},16)]),_:1},16)}}},b6=N(E6,[["__file","/@slidev/slides/14.md"]]),k6=e("h1",null,"Use a grid for your index operation",-1),w6=e("p",null,[r("To use a grid for you operation, you need to install the "),e("a",{href:"https://github.com/Sylius/SyliusGridBundle/",target:"_blank",rel:"noopener"},"Sylius grid package")],-1),S6=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#4D9375"}},"namespace"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"App"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#A1B567"}},"Entity"),e("span",{style:{color:"#858585"}},";")]),r(`
`),e("span",{class:"line"}),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#4D9375"}},"use"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"App"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#E0A569"}},"Grid"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#E0A569"}},"BookGrid"),e("span",{style:{color:"#858585"}},";")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#4D9375"}},"use"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"Sylius"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#E0A569"}},"Resource"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#E0A569"}},"Metadata"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#E0A569"}},"Index"),e("span",{style:{color:"#858585"}},";")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#4D9375"}},"use"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"Sylius"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#E0A569"}},"Resource"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#E0A569"}},"Metadata"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#E0A569"}},"AsResource"),e("span",{style:{color:"#858585"}},";")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#4D9375"}},"use"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"Sylius"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#E0A569"}},"Resource"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#E0A569"}},"Model"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#E0A569"}},"ResourceInterface"),e("span",{style:{color:"#858585"}},";")]),r(`
`),e("span",{class:"line"}),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"#["),e("span",{style:{color:"#E0A569"}},"AsResource"),e("span",{style:{color:"#DBD7CA"}},"]")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#758575"}},"// You can use either the FQCN of your grid")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"#["),e("span",{style:{color:"#E0A569"}},"Index"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#A1B567"}},"grid"),e("span",{style:{color:"#858585"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"BookGrid"),e("span",{style:{color:"#CB7676"}},"::"),e("span",{style:{color:"#4D9375"}},"class"),e("span",{style:{color:"#858585"}},")"),e("span",{style:{color:"#DBD7CA"}},"]")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#758575"}},"// Or you can use the grid name")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"#["),e("span",{style:{color:"#E0A569"}},"Index"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#A1B567"}},"grid"),e("span",{style:{color:"#858585"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},"'app_book'"),e("span",{style:{color:"#858585"}},")"),e("span",{style:{color:"#DBD7CA"}},"]")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#CB7676"}},"class"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"Book"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"implements"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"ResourceInterface")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"{")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"}")])])]),e("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#1C6B48"}},"namespace"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"App"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#6C7834"}},"Entity"),e("span",{style:{color:"#8E8F8B"}},";")]),r(`
`),e("span",{class:"line"}),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#1C6B48"}},"use"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B58451"}},"App"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#B58451"}},"Grid"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#B58451"}},"BookGrid"),e("span",{style:{color:"#8E8F8B"}},";")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#1C6B48"}},"use"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B58451"}},"Sylius"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#B58451"}},"Resource"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#B58451"}},"Metadata"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#B58451"}},"Index"),e("span",{style:{color:"#8E8F8B"}},";")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#1C6B48"}},"use"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B58451"}},"Sylius"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#B58451"}},"Resource"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#B58451"}},"Metadata"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#B58451"}},"AsResource"),e("span",{style:{color:"#8E8F8B"}},";")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#1C6B48"}},"use"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B58451"}},"Sylius"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#B58451"}},"Resource"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#B58451"}},"Model"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#B58451"}},"ResourceInterface"),e("span",{style:{color:"#8E8F8B"}},";")]),r(`
`),e("span",{class:"line"}),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"#["),e("span",{style:{color:"#B58451"}},"AsResource"),e("span",{style:{color:"#393A34"}},"]")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#A0ADA0"}},"// You can use either the FQCN of your grid")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"#["),e("span",{style:{color:"#B58451"}},"Index"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#6C7834"}},"grid"),e("span",{style:{color:"#8E8F8B"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B58451"}},"BookGrid"),e("span",{style:{color:"#AB5959"}},"::"),e("span",{style:{color:"#1C6B48"}},"class"),e("span",{style:{color:"#8E8F8B"}},")"),e("span",{style:{color:"#393A34"}},"]")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#A0ADA0"}},"// Or you can use the grid name")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"#["),e("span",{style:{color:"#B58451"}},"Index"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#6C7834"}},"grid"),e("span",{style:{color:"#8E8F8B"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},"'app_book'"),e("span",{style:{color:"#8E8F8B"}},")"),e("span",{style:{color:"#393A34"}},"]")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#AB5959"}},"class"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"Book"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"implements"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"ResourceInterface")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"{")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"}")])])])],-1),R6={__name:"15",setup(s){const o={srcSequence:"./pages/03_configure_your_operations.md"};return F(O),(n,t)=>{const l=ge,a=Re;return C(),M(Q,Z(Y(o)),{default:E(()=>[k6,R(a,null,{default:E(()=>[w6,R(l,fe({},{ranges:["all","9-10","9-10,3","11-12","11-12"]}),{default:E(()=>[S6]),_:1},16)]),_:1})]),_:1},16)}}},x6=N(R6,[["__file","/@slidev/slides/15.md"]]),$6=e("h1",null,"Use a grid for your index operation",-1),F6=e("p",null,"On your Twig template, these variables are available",-1),I6=e("table",null,[e("thead",null,[e("tr",null,[e("th",null,"Name"),e("th",null,"Type")])]),e("tbody",null,[e("tr",null,[e("td",null,"resources"),e("td",null,"Sylius\\Bundle\\ResourceBundle\\Grid\\View\\ResourceGridView")]),e("tr",null,[e("td",null,"books"),e("td",null,"Sylius\\Bundle\\ResourceBundle\\Grid\\View\\ResourceGridView")]),e("tr",null,[e("td",null,"operation"),e("td",null,"Sylius\\Resource\\Metadata\\Index")]),e("tr",null,[e("td",null,"resource_metadata"),e("td",null,"Sylius\\Resource\\Metadata\\ResourceMetadata")]),e("tr",null,[e("td",null,"app"),e("td",null,"Symfony\\Bridge\\Twig\\AppVariable")])])],-1),T6=e("p",null,[r("The iterator for your books will be available as "),e("code",null,"books.data"),r(" or "),e("code",null,"resources.data"),r(".")],-1),M6={__name:"16",setup(s){const o={srcSequence:"./pages/03_configure_your_operations.md"};return F(O),(n,t)=>{const l=Re;return C(),M(Q,Z(Y(o)),{default:E(()=>[$6,R(l,null,{default:E(()=>[F6,I6,T6]),_:1})]),_:1},16)}}},P6=N(M6,[["__file","/@slidev/slides/16.md"]]),O6=e("h1",null,"Create operation",-1),L6=e("p",null,[e("code",null,"Create"),r(" operation allows to add a new item of your resource.")],-1),N6=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#4D9375"}},"namespace"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"App"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#A1B567"}},"Entity"),e("span",{style:{color:"#858585"}},";")]),r(`
`),e("span",{class:"line"}),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#4D9375"}},"use"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"Sylius"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#E0A569"}},"Resource"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#E0A569"}},"Metadata"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#E0A569"}},"Create"),e("span",{style:{color:"#858585"}},";")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#4D9375"}},"use"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"Sylius"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#E0A569"}},"Resource"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#E0A569"}},"Metadata"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#E0A569"}},"AsResource"),e("span",{style:{color:"#858585"}},";")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#4D9375"}},"use"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"Sylius"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#E0A569"}},"Resource"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#E0A569"}},"Model"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#E0A569"}},"ResourceInterface"),e("span",{style:{color:"#858585"}},";")]),r(`
`),e("span",{class:"line"}),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"#["),e("span",{style:{color:"#E0A569"}},"AsResource"),e("span",{style:{color:"#DBD7CA"}},"]")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"#["),e("span",{style:{color:"#E0A569"}},"Create"),e("span",{style:{color:"#DBD7CA"}},"]")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#CB7676"}},"class"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"Book"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"implements"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"ResourceInterface")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"{")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"}")])])]),e("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#1C6B48"}},"namespace"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"App"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#6C7834"}},"Entity"),e("span",{style:{color:"#8E8F8B"}},";")]),r(`
`),e("span",{class:"line"}),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#1C6B48"}},"use"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B58451"}},"Sylius"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#B58451"}},"Resource"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#B58451"}},"Metadata"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#B58451"}},"Create"),e("span",{style:{color:"#8E8F8B"}},";")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#1C6B48"}},"use"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B58451"}},"Sylius"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#B58451"}},"Resource"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#B58451"}},"Metadata"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#B58451"}},"AsResource"),e("span",{style:{color:"#8E8F8B"}},";")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#1C6B48"}},"use"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B58451"}},"Sylius"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#B58451"}},"Resource"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#B58451"}},"Model"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#B58451"}},"ResourceInterface"),e("span",{style:{color:"#8E8F8B"}},";")]),r(`
`),e("span",{class:"line"}),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"#["),e("span",{style:{color:"#B58451"}},"AsResource"),e("span",{style:{color:"#393A34"}},"]")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"#["),e("span",{style:{color:"#B58451"}},"Create"),e("span",{style:{color:"#393A34"}},"]")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#AB5959"}},"class"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"Book"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"implements"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"ResourceInterface")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"{")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"}")])])])],-1),q6={__name:"17",setup(s){const o={srcSequence:"./pages/03_configure_your_operations.md"};return F(O),(n,t)=>{const l=ge,a=Re;return C(),M(Q,Z(Y(o)),{default:E(()=>[O6,R(a,null,{default:E(()=>[L6,R(l,fe({},{ranges:["all","8","8,3"]}),{default:E(()=>[N6]),_:1},16)]),_:1})]),_:1},16)}}},H6=N(q6,[["__file","/@slidev/slides/17.md"]]),U6=e("h1",null,"Create operation",-1),V6=e("p",null,[r("It will configure this route for your "),e("code",null,"create"),r(" operation.")],-1),j6=e("table",null,[e("thead",null,[e("tr",null,[e("th",null,"Name"),e("th",null,"Method"),e("th",null,"Path")])]),e("tbody",null,[e("tr",null,[e("td",null,"app_book_create"),e("td",null,"GET, POST"),e("td",null,"/books/new")])])],-1),G6={__name:"18",setup(s){const o={srcSequence:"./pages/03_configure_your_operations.md"};return F(O),(n,t)=>(C(),M(Q,Z(Y(o)),{default:E(()=>[U6,V6,j6]),_:1},16))}},W6=N(G6,[["__file","/@slidev/slides/18.md"]]),z6=e("h1",null,"Create operation",-1),K6=e("p",null,"On your Twig template, these variables are available",-1),Y6=e("table",null,[e("thead",null,[e("tr",null,[e("th",null,"Name"),e("th",null,"Type")])]),e("tbody",null,[e("tr",null,[e("td",null,"form"),e("td",null,"App\\Form\\BookType")]),e("tr",null,[e("td",null,"resource"),e("td",null,"App\\Entity\\Book")]),e("tr",null,[e("td",null,"book"),e("td",null,"App\\Entity\\Book")]),e("tr",null,[e("td",null,"operation"),e("td",null,"Sylius\\Resource\\Metadata\\Create")]),e("tr",null,[e("td",null,"resource_metadata"),e("td",null,"Sylius\\Resource\\Metadata\\ResourceMetadata")]),e("tr",null,[e("td",null,"app"),e("td",null,"Symfony\\Bridge\\Twig\\AppVariable")])])],-1),Z6={__name:"19",setup(s){const o={srcSequence:"./pages/03_configure_your_operations.md"};return F(O),(n,t)=>(C(),M(Q,Z(Y(o)),{default:E(()=>[z6,K6,Y6]),_:1},16))}},Q6=N(Z6,[["__file","/@slidev/slides/19.md"]]),J6=e("h1",null,"Update operation",-1),X6=e("p",null,[e("code",null,"Update"),r(" operation allows to edit an existing item of your resource.")],-1),e9=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#4D9375"}},"namespace"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"App"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#A1B567"}},"Entity"),e("span",{style:{color:"#858585"}},";")]),r(`
`),e("span",{class:"line"}),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#4D9375"}},"use"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"Sylius"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#E0A569"}},"Resource"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#E0A569"}},"Metadata"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#E0A569"}},"Update"),e("span",{style:{color:"#858585"}},";")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#4D9375"}},"use"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"Sylius"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#E0A569"}},"Resource"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#E0A569"}},"Metadata"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#E0A569"}},"AsResource"),e("span",{style:{color:"#858585"}},";")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#4D9375"}},"use"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"Sylius"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#E0A569"}},"Resource"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#E0A569"}},"Model"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#E0A569"}},"ResourceInterface"),e("span",{style:{color:"#858585"}},";")]),r(`
`),e("span",{class:"line"}),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"#["),e("span",{style:{color:"#E0A569"}},"AsResource"),e("span",{style:{color:"#DBD7CA"}},"]")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"#["),e("span",{style:{color:"#E0A569"}},"Update"),e("span",{style:{color:"#DBD7CA"}},"]")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#CB7676"}},"class"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"Book"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"implements"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"ResourceInterface")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"{")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"}")])])]),e("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#1C6B48"}},"namespace"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"App"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#6C7834"}},"Entity"),e("span",{style:{color:"#8E8F8B"}},";")]),r(`
`),e("span",{class:"line"}),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#1C6B48"}},"use"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B58451"}},"Sylius"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#B58451"}},"Resource"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#B58451"}},"Metadata"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#B58451"}},"Update"),e("span",{style:{color:"#8E8F8B"}},";")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#1C6B48"}},"use"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B58451"}},"Sylius"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#B58451"}},"Resource"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#B58451"}},"Metadata"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#B58451"}},"AsResource"),e("span",{style:{color:"#8E8F8B"}},";")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#1C6B48"}},"use"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B58451"}},"Sylius"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#B58451"}},"Resource"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#B58451"}},"Model"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#B58451"}},"ResourceInterface"),e("span",{style:{color:"#8E8F8B"}},";")]),r(`
`),e("span",{class:"line"}),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"#["),e("span",{style:{color:"#B58451"}},"AsResource"),e("span",{style:{color:"#393A34"}},"]")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"#["),e("span",{style:{color:"#B58451"}},"Update"),e("span",{style:{color:"#393A34"}},"]")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#AB5959"}},"class"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"Book"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"implements"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"ResourceInterface")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"{")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"}")])])])],-1),s9={__name:"20",setup(s){const o={srcSequence:"./pages/03_configure_your_operations.md"};return F(O),(n,t)=>{const l=ge;return C(),M(Q,Z(Y(o)),{default:E(()=>[J6,X6,R(l,fe({},{ranges:["all","8","8,3"]}),{default:E(()=>[e9]),_:1},16)]),_:1},16)}}},o9=N(s9,[["__file","/@slidev/slides/20.md"]]),n9=e("h1",null,"Update operation",-1),t9=e("p",null,[r("It will configure this route for your "),e("code",null,"update"),r(" operation.")],-1),l9=e("table",null,[e("thead",null,[e("tr",null,[e("th",null,"Name"),e("th",null,"Method"),e("th",null,"Path")])]),e("tbody",null,[e("tr",null,[e("td",null,"app_book_update"),e("td",null,"GET, PUT, PATCH"),e("td",null,"/books/{id}/edit")])])],-1),r9={__name:"21",setup(s){const o={srcSequence:"./pages/03_configure_your_operations.md"};return F(O),(n,t)=>(C(),M(Q,Z(Y(o)),{default:E(()=>[n9,t9,l9]),_:1},16))}},a9=N(r9,[["__file","/@slidev/slides/21.md"]]),c9=e("h1",null,"Update operation",-1),i9=e("p",null,"On your Twig template, these variables are available",-1),p9=e("table",null,[e("thead",null,[e("tr",null,[e("th",null,"Name"),e("th",null,"Type")])]),e("tbody",null,[e("tr",null,[e("td",null,"form"),e("td",null,"App\\Form\\BookType")]),e("tr",null,[e("td",null,"resource"),e("td",null,"App\\Entity\\Book")]),e("tr",null,[e("td",null,"book"),e("td",null,"App\\Entity\\Book")]),e("tr",null,[e("td",null,"operation"),e("td",null,"Sylius\\Resource\\Metadata\\Update")]),e("tr",null,[e("td",null,"resource_metadata"),e("td",null,"Sylius\\Resource\\Metadata\\ResourceMetadata")]),e("tr",null,[e("td",null,"app"),e("td",null,"Symfony\\Bridge\\Twig\\AppVariable")])])],-1),u9={__name:"22",setup(s){const o={srcSequence:"./pages/03_configure_your_operations.md"};return F(O),(n,t)=>(C(),M(Q,Z(Y(o)),{default:E(()=>[c9,i9,p9]),_:1},16))}},y9=N(u9,[["__file","/@slidev/slides/22.md"]]),d9=e("h1",null,"Delete operation",-1),f9=e("p",null,[e("code",null,"Delete"),r(" operation allows to remove an existing item of your resource.")],-1),m9=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#4D9375"}},"namespace"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"App"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#A1B567"}},"Entity"),e("span",{style:{color:"#858585"}},";")]),r(`
`),e("span",{class:"line"}),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#4D9375"}},"use"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"Sylius"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#E0A569"}},"Resource"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#E0A569"}},"Metadata"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#E0A569"}},"Delete"),e("span",{style:{color:"#858585"}},";")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#4D9375"}},"use"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"Sylius"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#E0A569"}},"Resource"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#E0A569"}},"Metadata"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#E0A569"}},"AsResource"),e("span",{style:{color:"#858585"}},";")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#4D9375"}},"use"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"Sylius"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#E0A569"}},"Resource"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#E0A569"}},"Model"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#E0A569"}},"ResourceInterface"),e("span",{style:{color:"#858585"}},";")]),r(`
`),e("span",{class:"line"}),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"#["),e("span",{style:{color:"#E0A569"}},"AsResource"),e("span",{style:{color:"#DBD7CA"}},"]")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"#["),e("span",{style:{color:"#E0A569"}},"Delete"),e("span",{style:{color:"#DBD7CA"}},"]")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#CB7676"}},"class"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"Book"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"implements"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"ResourceInterface")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"{")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"}")])])]),e("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#1C6B48"}},"namespace"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"App"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#6C7834"}},"Entity"),e("span",{style:{color:"#8E8F8B"}},";")]),r(`
`),e("span",{class:"line"}),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#1C6B48"}},"use"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B58451"}},"Sylius"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#B58451"}},"Resource"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#B58451"}},"Metadata"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#B58451"}},"Delete"),e("span",{style:{color:"#8E8F8B"}},";")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#1C6B48"}},"use"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B58451"}},"Sylius"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#B58451"}},"Resource"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#B58451"}},"Metadata"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#B58451"}},"AsResource"),e("span",{style:{color:"#8E8F8B"}},";")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#1C6B48"}},"use"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B58451"}},"Sylius"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#B58451"}},"Resource"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#B58451"}},"Model"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#B58451"}},"ResourceInterface"),e("span",{style:{color:"#8E8F8B"}},";")]),r(`
`),e("span",{class:"line"}),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"#["),e("span",{style:{color:"#B58451"}},"AsResource"),e("span",{style:{color:"#393A34"}},"]")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"#["),e("span",{style:{color:"#B58451"}},"Delete"),e("span",{style:{color:"#393A34"}},"]")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#AB5959"}},"class"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"Book"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"implements"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"ResourceInterface")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"{")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"}")])])])],-1),h9={__name:"23",setup(s){const o={srcSequence:"./pages/03_configure_your_operations.md"};return F(O),(n,t)=>{const l=ge;return C(),M(Q,Z(Y(o)),{default:E(()=>[d9,f9,R(l,fe({},{ranges:["all","8","8,3"]}),{default:E(()=>[m9]),_:1},16)]),_:1},16)}}},_9=N(h9,[["__file","/@slidev/slides/23.md"]]),B9=e("h1",null,"Delete operation",-1),A9=e("p",null,[r("It will configure this route for your "),e("code",null,"delete"),r(" operation.")],-1),g9=e("table",null,[e("thead",null,[e("tr",null,[e("th",null,"Name"),e("th",null,"Method"),e("th",null,"Path")])]),e("tbody",null,[e("tr",null,[e("td",null,"app_book_delete"),e("td",null,"DELETE"),e("td",null,"/books/{id}")])])],-1),v9={__name:"24",setup(s){const o={srcSequence:"./pages/03_configure_your_operations.md"};return F(O),(n,t)=>(C(),M(Q,Z(Y(o)),{default:E(()=>[B9,A9,g9]),_:1},16))}},C9=N(v9,[["__file","/@slidev/slides/24.md"]]),D9=e("h1",null,"Bulk delete operation",-1),E9=e("p",null,[e("code",null,"Bulk delete"),r(" operation allows to remove several items of your resource at the same time.")],-1),b9=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#4D9375"}},"namespace"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"App"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#A1B567"}},"Entity"),e("span",{style:{color:"#858585"}},";")]),r(`
`),e("span",{class:"line"}),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#4D9375"}},"use"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"Sylius"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#E0A569"}},"Resource"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#E0A569"}},"Metadata"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#E0A569"}},"BulkDelete"),e("span",{style:{color:"#858585"}},";")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#4D9375"}},"use"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"Sylius"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#E0A569"}},"Resource"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#E0A569"}},"Metadata"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#E0A569"}},"AsResource"),e("span",{style:{color:"#858585"}},";")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#4D9375"}},"use"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"Sylius"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#E0A569"}},"Resource"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#E0A569"}},"Model"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#E0A569"}},"ResourceInterface"),e("span",{style:{color:"#858585"}},";")]),r(`
`),e("span",{class:"line"}),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"#["),e("span",{style:{color:"#E0A569"}},"AsResource"),e("span",{style:{color:"#DBD7CA"}},"]")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"#["),e("span",{style:{color:"#E0A569"}},"BulkDelete"),e("span",{style:{color:"#DBD7CA"}},"]")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#CB7676"}},"class"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"Book"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"implements"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"ResourceInterface")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"{")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"}")])])]),e("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#1C6B48"}},"namespace"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"App"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#6C7834"}},"Entity"),e("span",{style:{color:"#8E8F8B"}},";")]),r(`
`),e("span",{class:"line"}),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#1C6B48"}},"use"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B58451"}},"Sylius"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#B58451"}},"Resource"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#B58451"}},"Metadata"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#B58451"}},"BulkDelete"),e("span",{style:{color:"#8E8F8B"}},";")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#1C6B48"}},"use"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B58451"}},"Sylius"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#B58451"}},"Resource"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#B58451"}},"Metadata"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#B58451"}},"AsResource"),e("span",{style:{color:"#8E8F8B"}},";")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#1C6B48"}},"use"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B58451"}},"Sylius"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#B58451"}},"Resource"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#B58451"}},"Model"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#B58451"}},"ResourceInterface"),e("span",{style:{color:"#8E8F8B"}},";")]),r(`
`),e("span",{class:"line"}),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"#["),e("span",{style:{color:"#B58451"}},"AsResource"),e("span",{style:{color:"#393A34"}},"]")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"#["),e("span",{style:{color:"#B58451"}},"BulkDelete"),e("span",{style:{color:"#393A34"}},"]")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#AB5959"}},"class"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"Book"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"implements"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"ResourceInterface")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"{")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"}")])])])],-1),k9={__name:"25",setup(s){const o={srcSequence:"./pages/03_configure_your_operations.md"};return F(O),(n,t)=>{const l=ge;return C(),M(Q,Z(Y(o)),{default:E(()=>[D9,E9,R(l,fe({},{ranges:["all","8","8,3"]}),{default:E(()=>[b9]),_:1},16)]),_:1},16)}}},w9=N(k9,[["__file","/@slidev/slides/25.md"]]),S9=e("h1",null,"Bulk delete operation",-1),R9=e("p",null,[r("It will configure this route for your "),e("code",null,"bulk_delete"),r(" operation.")],-1),x9=e("table",null,[e("thead",null,[e("tr",null,[e("th",null,"Name"),e("th",null,"Method"),e("th",null,"Path")])]),e("tbody",null,[e("tr",null,[e("td",null,"app_book_bulk_delete"),e("td",null,"DELETE"),e("td",null,"/books/bulk_delete")])])],-1),$9={__name:"26",setup(s){const o={srcSequence:"./pages/03_configure_your_operations.md"};return F(O),(n,t)=>(C(),M(Q,Z(Y(o)),{default:E(()=>[S9,R9,x9]),_:1},16))}},F9=N($9,[["__file","/@slidev/slides/26.md"]]),I9=e("h1",null,"Show operation",-1),T9=e("p",null,[e("code",null,"Show"),r(" operation allows to view details of an item.")],-1),M9=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#4D9375"}},"namespace"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"App"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#A1B567"}},"Entity"),e("span",{style:{color:"#858585"}},";")]),r(`
`),e("span",{class:"line"}),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#4D9375"}},"use"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"Sylius"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#E0A569"}},"Resource"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#E0A569"}},"Metadata"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#E0A569"}},"AsResource"),e("span",{style:{color:"#858585"}},";")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#4D9375"}},"use"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"Sylius"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#E0A569"}},"Resource"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#E0A569"}},"Metadata"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#E0A569"}},"Show"),e("span",{style:{color:"#858585"}},";")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#4D9375"}},"use"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"Sylius"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#E0A569"}},"Resource"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#E0A569"}},"Model"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#E0A569"}},"ResourceInterface"),e("span",{style:{color:"#858585"}},";")]),r(`
`),e("span",{class:"line"}),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"#["),e("span",{style:{color:"#E0A569"}},"AsResource"),e("span",{style:{color:"#DBD7CA"}},"]")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"#["),e("span",{style:{color:"#E0A569"}},"Show"),e("span",{style:{color:"#DBD7CA"}},"]")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#CB7676"}},"class"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"Book"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"implements"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"ResourceInterface")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"{")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"}")])])]),e("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#1C6B48"}},"namespace"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"App"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#6C7834"}},"Entity"),e("span",{style:{color:"#8E8F8B"}},";")]),r(`
`),e("span",{class:"line"}),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#1C6B48"}},"use"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B58451"}},"Sylius"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#B58451"}},"Resource"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#B58451"}},"Metadata"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#B58451"}},"AsResource"),e("span",{style:{color:"#8E8F8B"}},";")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#1C6B48"}},"use"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B58451"}},"Sylius"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#B58451"}},"Resource"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#B58451"}},"Metadata"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#B58451"}},"Show"),e("span",{style:{color:"#8E8F8B"}},";")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#1C6B48"}},"use"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B58451"}},"Sylius"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#B58451"}},"Resource"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#B58451"}},"Model"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#B58451"}},"ResourceInterface"),e("span",{style:{color:"#8E8F8B"}},";")]),r(`
`),e("span",{class:"line"}),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"#["),e("span",{style:{color:"#B58451"}},"AsResource"),e("span",{style:{color:"#393A34"}},"]")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"#["),e("span",{style:{color:"#B58451"}},"Show"),e("span",{style:{color:"#393A34"}},"]")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#AB5959"}},"class"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"Book"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"implements"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"ResourceInterface")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"{")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"}")])])])],-1),P9={__name:"27",setup(s){const o={srcSequence:"./pages/03_configure_your_operations.md"};return F(O),(n,t)=>{const l=ge;return C(),M(Q,Z(Y(o)),{default:E(()=>[I9,T9,R(l,fe({},{ranges:["all","8","8,3"]}),{default:E(()=>[M9]),_:1},16)]),_:1},16)}}},O9=N(P9,[["__file","/@slidev/slides/27.md"]]),L9=e("h1",null,"Show operation",-1),N9=e("p",null,[r("It will configure this route for your "),e("code",null,"show"),r(" operation.")],-1),q9=e("table",null,[e("thead",null,[e("tr",null,[e("th",null,"Name"),e("th",null,"Method"),e("th",null,"Path")])]),e("tbody",null,[e("tr",null,[e("td",null,"app_book_show"),e("td",null,"GET"),e("td",null,"/books/{id}")])])],-1),H9={__name:"28",setup(s){const o={srcSequence:"./pages/03_configure_your_operations.md"};return F(O),(n,t)=>(C(),M(Q,Z(Y(o)),{default:E(()=>[L9,N9,q9]),_:1},16))}},U9=N(H9,[["__file","/@slidev/slides/28.md"]]),V9=e("h1",null,"Show operation",-1),j9=e("p",null,"On your Twig template, these variables are available",-1),G9=e("table",null,[e("thead",null,[e("tr",null,[e("th",null,"Name"),e("th",null,"Type")])]),e("tbody",null,[e("tr",null,[e("td",null,"resource"),e("td",null,"App\\Entity\\Book")]),e("tr",null,[e("td",null,"book"),e("td",null,"App\\Entity\\Book")]),e("tr",null,[e("td",null,"operation"),e("td",null,"Sylius\\Resource\\Metadata\\Show")]),e("tr",null,[e("td",null,"resource_metadata"),e("td",null,"Sylius\\Resource\\Metadata\\ResourceMetadata")]),e("tr",null,[e("td",null,"app"),e("td",null,"Symfony\\Bridge\\Twig\\AppVariable")])])],-1),W9={__name:"29",setup(s){const o={srcSequence:"./pages/03_configure_your_operations.md"};return F(O),(n,t)=>(C(),M(Q,Z(Y(o)),{default:E(()=>[V9,j9,G9]),_:1},16))}},z9=N(W9,[["__file","/@slidev/slides/29.md"]]),K9=e("h1",null,"State machine operation",-1),Y9=e("p",null,[e("code",null,"State machine"),r(" operation allows to apply a transition to an item of your resource.")],-1),Z9=e("p",null,[r("As an example, we add a "),e("code",null,"publish"),r(" operation to our book resource.")],-1),Q9=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#4D9375"}},"namespace"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"App"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#A1B567"}},"Entity"),e("span",{style:{color:"#858585"}},";")]),r(`
`),e("span",{class:"line"}),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#4D9375"}},"use"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"Sylius"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#E0A569"}},"Resource"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#E0A569"}},"Metadata"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#E0A569"}},"ApplyStateMachineTransition"),e("span",{style:{color:"#858585"}},";")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#4D9375"}},"use"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"Sylius"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#E0A569"}},"Resource"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#E0A569"}},"Metadata"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#E0A569"}},"AsResource"),e("span",{style:{color:"#858585"}},";")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#4D9375"}},"use"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"Sylius"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#E0A569"}},"Resource"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#E0A569"}},"Metadata"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#E0A569"}},"Show"),e("span",{style:{color:"#858585"}},";")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#4D9375"}},"use"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"Sylius"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#E0A569"}},"Resource"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#E0A569"}},"Model"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#E0A569"}},"ResourceInterface"),e("span",{style:{color:"#858585"}},";")]),r(`
`),e("span",{class:"line"}),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"#["),e("span",{style:{color:"#E0A569"}},"AsResource"),e("span",{style:{color:"#DBD7CA"}},"]")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"#["),e("span",{style:{color:"#E0A569"}},"ApplyStateMachineTransition"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#A1B567"}},"stateMachineTransition"),e("span",{style:{color:"#858585"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},"'publish'"),e("span",{style:{color:"#858585"}},")"),e("span",{style:{color:"#DBD7CA"}},"]")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#CB7676"}},"class"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"Book"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"implements"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"ResourceInterface")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"{")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"}")])])]),e("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#1C6B48"}},"namespace"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"App"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#6C7834"}},"Entity"),e("span",{style:{color:"#8E8F8B"}},";")]),r(`
`),e("span",{class:"line"}),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#1C6B48"}},"use"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B58451"}},"Sylius"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#B58451"}},"Resource"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#B58451"}},"Metadata"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#B58451"}},"ApplyStateMachineTransition"),e("span",{style:{color:"#8E8F8B"}},";")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#1C6B48"}},"use"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B58451"}},"Sylius"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#B58451"}},"Resource"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#B58451"}},"Metadata"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#B58451"}},"AsResource"),e("span",{style:{color:"#8E8F8B"}},";")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#1C6B48"}},"use"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B58451"}},"Sylius"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#B58451"}},"Resource"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#B58451"}},"Metadata"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#B58451"}},"Show"),e("span",{style:{color:"#8E8F8B"}},";")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#1C6B48"}},"use"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B58451"}},"Sylius"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#B58451"}},"Resource"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#B58451"}},"Model"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#B58451"}},"ResourceInterface"),e("span",{style:{color:"#8E8F8B"}},";")]),r(`
`),e("span",{class:"line"}),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"#["),e("span",{style:{color:"#B58451"}},"AsResource"),e("span",{style:{color:"#393A34"}},"]")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"#["),e("span",{style:{color:"#B58451"}},"ApplyStateMachineTransition"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#6C7834"}},"stateMachineTransition"),e("span",{style:{color:"#8E8F8B"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},"'publish'"),e("span",{style:{color:"#8E8F8B"}},")"),e("span",{style:{color:"#393A34"}},"]")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#AB5959"}},"class"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"Book"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"implements"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"ResourceInterface")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"{")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"}")])])])],-1),J9={__name:"30",setup(s){const o={srcSequence:"./pages/03_configure_your_operations.md"};return F(O),(n,t)=>{const l=ge;return C(),M(Q,Z(Y(o)),{default:E(()=>[K9,Y9,Z9,R(l,fe({},{ranges:["all","8","8,3"]}),{default:E(()=>[Q9]),_:1},16)]),_:1},16)}}},X9=N(J9,[["__file","/@slidev/slides/30.md"]]),e4=e("h1",null,"State machine operation",-1),s4=e("p",null,[r("It will configure this route for your "),e("code",null,"apply_state_machine_transition"),r(" operation.")],-1),o4=e("table",null,[e("thead",null,[e("tr",null,[e("th",null,"Name"),e("th",null,"Method"),e("th",null,"Path")])]),e("tbody",null,[e("tr",null,[e("td",null,"app_book_publish"),e("td",null,"GET"),e("td",null,"/books/{id}/publish")])])],-1),n4={__name:"31",setup(s){const o={srcSequence:"./pages/03_configure_your_operations.md"};return F(O),(n,t)=>(C(),M(Q,Z(Y(o)),{default:E(()=>[e4,s4,o4]),_:1},16))}},t4=N(n4,[["__file","/@slidev/slides/31.md"]]),l4=e("h1",null,"Configure the templates’ dir",-1),r4=e("p",null,"It defines the templates directory for your operations.",-1),a4=e("p",null,[r("As an example, we defines "),e("code",null,"index"),r(", "),e("code",null,"create"),r(", "),e("code",null,"update"),r(" and "),e("code",null,"show"),r(" operations to our book resource.")],-1),c4=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#4D9375"}},"namespace"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"App"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#A1B567"}},"Entity"),e("span",{style:{color:"#858585"}},";")]),r(`
`),e("span",{class:"line"}),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#4D9375"}},"use"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"Sylius"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#E0A569"}},"Resource"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#E0A569"}},"Metadata"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#E0A569"}},"Create"),e("span",{style:{color:"#858585"}},";")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#4D9375"}},"use"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"Sylius"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#E0A569"}},"Resource"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#E0A569"}},"Metadata"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#E0A569"}},"Index"),e("span",{style:{color:"#858585"}},";")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#4D9375"}},"use"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"Sylius"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#E0A569"}},"Resource"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#E0A569"}},"Metadata"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#E0A569"}},"Resource"),e("span",{style:{color:"#858585"}},";")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#4D9375"}},"use"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"Sylius"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#E0A569"}},"Resource"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#E0A569"}},"Metadata"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#E0A569"}},"Show"),e("span",{style:{color:"#858585"}},";")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#4D9375"}},"use"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"Sylius"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#E0A569"}},"Resource"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#E0A569"}},"Metadata"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#E0A569"}},"Update"),e("span",{style:{color:"#858585"}},";")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#4D9375"}},"use"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"Sylius"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#E0A569"}},"Resource"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#E0A569"}},"Model"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#E0A569"}},"ResourceInterface"),e("span",{style:{color:"#858585"}},";")]),r(`
`),e("span",{class:"line"}),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"#["),e("span",{style:{color:"#E0A569"}},"AsResource"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#A1B567"}},"templatesDir"),e("span",{style:{color:"#858585"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},"'book'"),e("span",{style:{color:"#858585"}},")"),e("span",{style:{color:"#DBD7CA"}},"]")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"#["),e("span",{style:{color:"#E0A569"}},"Index"),e("span",{style:{color:"#DBD7CA"}},"]")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"#["),e("span",{style:{color:"#E0A569"}},"Create"),e("span",{style:{color:"#DBD7CA"}},"]")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"#["),e("span",{style:{color:"#E0A569"}},"Update"),e("span",{style:{color:"#DBD7CA"}},"]")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"#["),e("span",{style:{color:"#E0A569"}},"Show"),e("span",{style:{color:"#DBD7CA"}},"]")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#CB7676"}},"class"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"Book"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"implements"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"ResourceInterface")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"{")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"}")])])]),e("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#1C6B48"}},"namespace"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"App"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#6C7834"}},"Entity"),e("span",{style:{color:"#8E8F8B"}},";")]),r(`
`),e("span",{class:"line"}),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#1C6B48"}},"use"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B58451"}},"Sylius"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#B58451"}},"Resource"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#B58451"}},"Metadata"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#B58451"}},"Create"),e("span",{style:{color:"#8E8F8B"}},";")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#1C6B48"}},"use"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B58451"}},"Sylius"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#B58451"}},"Resource"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#B58451"}},"Metadata"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#B58451"}},"Index"),e("span",{style:{color:"#8E8F8B"}},";")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#1C6B48"}},"use"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B58451"}},"Sylius"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#B58451"}},"Resource"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#B58451"}},"Metadata"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#B58451"}},"Resource"),e("span",{style:{color:"#8E8F8B"}},";")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#1C6B48"}},"use"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B58451"}},"Sylius"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#B58451"}},"Resource"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#B58451"}},"Metadata"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#B58451"}},"Show"),e("span",{style:{color:"#8E8F8B"}},";")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#1C6B48"}},"use"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B58451"}},"Sylius"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#B58451"}},"Resource"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#B58451"}},"Metadata"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#B58451"}},"Update"),e("span",{style:{color:"#8E8F8B"}},";")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#1C6B48"}},"use"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B58451"}},"Sylius"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#B58451"}},"Resource"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#B58451"}},"Model"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#B58451"}},"ResourceInterface"),e("span",{style:{color:"#8E8F8B"}},";")]),r(`
`),e("span",{class:"line"}),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"#["),e("span",{style:{color:"#B58451"}},"AsResource"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#6C7834"}},"templatesDir"),e("span",{style:{color:"#8E8F8B"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},"'book'"),e("span",{style:{color:"#8E8F8B"}},")"),e("span",{style:{color:"#393A34"}},"]")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"#["),e("span",{style:{color:"#B58451"}},"Index"),e("span",{style:{color:"#393A34"}},"]")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"#["),e("span",{style:{color:"#B58451"}},"Create"),e("span",{style:{color:"#393A34"}},"]")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"#["),e("span",{style:{color:"#B58451"}},"Update"),e("span",{style:{color:"#393A34"}},"]")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"#["),e("span",{style:{color:"#B58451"}},"Show"),e("span",{style:{color:"#393A34"}},"]")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#AB5959"}},"class"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"Book"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"implements"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"ResourceInterface")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"{")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"}")])])])],-1),i4={__name:"32",setup(s){const o={srcSequence:"./pages/03_configure_your_operations.md"};return F(O),(n,t)=>{const l=ge,a=Re;return C(),M(Q,Z(Y(o)),{default:E(()=>[l4,R(a,null,{default:E(()=>[r4,a4,R(l,fe({},{ranges:["all","10"]}),{default:E(()=>[c4]),_:1},16)]),_:1})]),_:1},16)}}},p4=N(i4,[["__file","/@slidev/slides/32.md"]]),u4=e("h1",null,"Configure the templates’ dir",-1),y4=e("table",null,[e("thead",null,[e("tr",null,[e("th",null,"Operation"),e("th",null,"Template Path")])]),e("tbody",null,[e("tr",null,[e("td",null,"index"),e("td",null,"templates/books/index.html.twig")]),e("tr",null,[e("td",null,"create"),e("td",null,"templates/books/create.html.twig")]),e("tr",null,[e("td",null,"update"),e("td",null,"templates/books/update.html.twig")]),e("tr",null,[e("td",null,"show"),e("td",null,"templates/books/show.html.twig")])])],-1),d4={__name:"33",setup(s){const o={srcSequence:"./pages/03_configure_your_operations.md"};return F(O),(n,t)=>(C(),M(Q,Z(Y(o)),{default:E(()=>[u4,y4]),_:1},16))}},f4=N(d4,[["__file","/@slidev/slides/33.md"]]),m4=e("h1",null,"Configure the routes’ prefix",-1),h4=e("p",null,"It adds a prefix to the path for each operation.",-1),_4=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#4D9375"}},"namespace"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"App"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#A1B567"}},"Entity"),e("span",{style:{color:"#858585"}},";")]),r(`
`),e("span",{class:"line"}),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#758575"}},"// [...]")]),r(`
`),e("span",{class:"line"}),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"#["),e("span",{style:{color:"#E0A569"}},"AsResource"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#A1B567"}},"routePrefix"),e("span",{style:{color:"#858585"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},"'admin'"),e("span",{style:{color:"#858585"}},")"),e("span",{style:{color:"#DBD7CA"}},"]")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"#["),e("span",{style:{color:"#E0A569"}},"Index"),e("span",{style:{color:"#DBD7CA"}},"]")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"#["),e("span",{style:{color:"#E0A569"}},"Create"),e("span",{style:{color:"#DBD7CA"}},"]")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"#["),e("span",{style:{color:"#E0A569"}},"Update"),e("span",{style:{color:"#DBD7CA"}},"]")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"#["),e("span",{style:{color:"#E0A569"}},"Delete"),e("span",{style:{color:"#DBD7CA"}},"]")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"#["),e("span",{style:{color:"#E0A569"}},"BulkDelete"),e("span",{style:{color:"#DBD7CA"}},"]")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"#["),e("span",{style:{color:"#E0A569"}},"Show"),e("span",{style:{color:"#DBD7CA"}},"]")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#CB7676"}},"class"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"Book"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"implements"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"ResourceInterface")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"{")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"}")])])]),e("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#1C6B48"}},"namespace"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"App"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#6C7834"}},"Entity"),e("span",{style:{color:"#8E8F8B"}},";")]),r(`
`),e("span",{class:"line"}),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#A0ADA0"}},"// [...]")]),r(`
`),e("span",{class:"line"}),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"#["),e("span",{style:{color:"#B58451"}},"AsResource"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#6C7834"}},"routePrefix"),e("span",{style:{color:"#8E8F8B"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},"'admin'"),e("span",{style:{color:"#8E8F8B"}},")"),e("span",{style:{color:"#393A34"}},"]")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"#["),e("span",{style:{color:"#B58451"}},"Index"),e("span",{style:{color:"#393A34"}},"]")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"#["),e("span",{style:{color:"#B58451"}},"Create"),e("span",{style:{color:"#393A34"}},"]")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"#["),e("span",{style:{color:"#B58451"}},"Update"),e("span",{style:{color:"#393A34"}},"]")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"#["),e("span",{style:{color:"#B58451"}},"Delete"),e("span",{style:{color:"#393A34"}},"]")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"#["),e("span",{style:{color:"#B58451"}},"BulkDelete"),e("span",{style:{color:"#393A34"}},"]")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"#["),e("span",{style:{color:"#B58451"}},"Show"),e("span",{style:{color:"#393A34"}},"]")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#AB5959"}},"class"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"Book"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"implements"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"ResourceInterface")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"{")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"}")])])])],-1),B4={__name:"34",setup(s){const o={srcSequence:"./pages/03_configure_your_operations.md"};return F(O),(n,t)=>{const l=ge,a=Re;return C(),M(Q,Z(Y(o)),{default:E(()=>[m4,R(a,null,{default:E(()=>[h4,R(l,fe({},{ranges:["all","5"]}),{default:E(()=>[_4]),_:1},16)]),_:1})]),_:1},16)}}},A4=N(B4,[["__file","/@slidev/slides/34.md"]]),g4=e("h1",null,"Configure the routes’ prefix",-1),v4=e("table",null,[e("thead",null,[e("tr",null,[e("th",null,"Name"),e("th",null,"Method"),e("th",null,"Path")])]),e("tbody",null,[e("tr",null,[e("td",null,"app_book_index"),e("td",null,"GET"),e("td",null,"/admin/books/")]),e("tr",null,[e("td",null,"app_book_create"),e("td",null,"GET, POST"),e("td",null,"/admin/books/new")]),e("tr",null,[e("td",null,"app_book_update"),e("td",null,"GET, PUT, PATCH"),e("td",null,"/admin/books/{id}/edit")]),e("tr",null,[e("td",null,"app_book_delete"),e("td",null,"DELETE"),e("td",null,"/admin/books/{id}")]),e("tr",null,[e("td",null,"app_book_bulk_delete"),e("td",null,"DELETE"),e("td",null,"/admin/books/bulk_delete")]),e("tr",null,[e("td",null,"app_book_show"),e("td",null,"GET"),e("td",null,"/admin/books/{id}")])])],-1),C4={__name:"35",setup(s){const o={srcSequence:"./pages/03_configure_your_operations.md"};return F(O),(n,t)=>(C(),M(Q,Z(Y(o)),{default:E(()=>[g4,v4]),_:1},16))}},D4=N(C4,[["__file","/@slidev/slides/35.md"]]),E4=e("h1",null,"Configure the section",-1),b4=e("p",null,"It changes the route name for each operation.",-1),k4=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#4D9375"}},"namespace"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"App"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#A1B567"}},"Entity"),e("span",{style:{color:"#858585"}},";")]),r(`
`),e("span",{class:"line"}),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#758575"}},"// [...]")]),r(`
`),e("span",{class:"line"}),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"#["),e("span",{style:{color:"#E0A569"}},"AsResource"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#A1B567"}},"section"),e("span",{style:{color:"#858585"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},"'admin'"),e("span",{style:{color:"#858585"}},","),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"routePrefix"),e("span",{style:{color:"#858585"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},"'admin'"),e("span",{style:{color:"#858585"}},")"),e("span",{style:{color:"#DBD7CA"}},"]")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"#["),e("span",{style:{color:"#E0A569"}},"Index"),e("span",{style:{color:"#DBD7CA"}},"]")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"#["),e("span",{style:{color:"#E0A569"}},"Create"),e("span",{style:{color:"#DBD7CA"}},"]")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"#["),e("span",{style:{color:"#E0A569"}},"Update"),e("span",{style:{color:"#DBD7CA"}},"]")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"#["),e("span",{style:{color:"#E0A569"}},"Delete"),e("span",{style:{color:"#DBD7CA"}},"]")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"#["),e("span",{style:{color:"#E0A569"}},"BulkDelete"),e("span",{style:{color:"#DBD7CA"}},"]")]),r(`
`),e("span",{class:"line"}),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"#["),e("span",{style:{color:"#E0A569"}},"AsResource"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#A1B567"}},"section"),e("span",{style:{color:"#858585"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},"'shop'"),e("span",{style:{color:"#858585"}},")"),e("span",{style:{color:"#DBD7CA"}},"]")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"#["),e("span",{style:{color:"#E0A569"}},"Index"),e("span",{style:{color:"#DBD7CA"}},"]")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"#["),e("span",{style:{color:"#E0A569"}},"Show"),e("span",{style:{color:"#DBD7CA"}},"]")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#CB7676"}},"class"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"Book"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"implements"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"ResourceInterface")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"{")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"}")])])]),e("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#1C6B48"}},"namespace"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"App"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#6C7834"}},"Entity"),e("span",{style:{color:"#8E8F8B"}},";")]),r(`
`),e("span",{class:"line"}),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#A0ADA0"}},"// [...]")]),r(`
`),e("span",{class:"line"}),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"#["),e("span",{style:{color:"#B58451"}},"AsResource"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#6C7834"}},"section"),e("span",{style:{color:"#8E8F8B"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},"'admin'"),e("span",{style:{color:"#8E8F8B"}},","),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"routePrefix"),e("span",{style:{color:"#8E8F8B"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},"'admin'"),e("span",{style:{color:"#8E8F8B"}},")"),e("span",{style:{color:"#393A34"}},"]")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"#["),e("span",{style:{color:"#B58451"}},"Index"),e("span",{style:{color:"#393A34"}},"]")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"#["),e("span",{style:{color:"#B58451"}},"Create"),e("span",{style:{color:"#393A34"}},"]")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"#["),e("span",{style:{color:"#B58451"}},"Update"),e("span",{style:{color:"#393A34"}},"]")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"#["),e("span",{style:{color:"#B58451"}},"Delete"),e("span",{style:{color:"#393A34"}},"]")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"#["),e("span",{style:{color:"#B58451"}},"BulkDelete"),e("span",{style:{color:"#393A34"}},"]")]),r(`
`),e("span",{class:"line"}),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"#["),e("span",{style:{color:"#B58451"}},"AsResource"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#6C7834"}},"section"),e("span",{style:{color:"#8E8F8B"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},"'shop'"),e("span",{style:{color:"#8E8F8B"}},")"),e("span",{style:{color:"#393A34"}},"]")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"#["),e("span",{style:{color:"#B58451"}},"Index"),e("span",{style:{color:"#393A34"}},"]")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"#["),e("span",{style:{color:"#B58451"}},"Show"),e("span",{style:{color:"#393A34"}},"]")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#AB5959"}},"class"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"Book"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"implements"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"ResourceInterface")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"{")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"}")])])])],-1),w4={__name:"36",setup(s){const o={srcSequence:"./pages/03_configure_your_operations.md"};return F(O),(n,t)=>{const l=ge;return C(),M(Q,Z(Y(o)),{default:E(()=>[E4,b4,R(l,fe({},{ranges:["all","5","5,12"]}),{default:E(()=>[k4]),_:1},16)]),_:1},16)}}},S4=N(w4,[["__file","/@slidev/slides/36.md"]]),R4=e("h1",null,"Configure the section",-1),x4=e("table",null,[e("thead",null,[e("tr",null,[e("th",null,"Name"),e("th",null,"Method"),e("th",null,"Path")])]),e("tbody",null,[e("tr",null,[e("td",null,"app_admin_book_index"),e("td",null,"GET"),e("td",null,"/admin/books/")]),e("tr",null,[e("td",null,"app_admin_book_create"),e("td",null,"GET, POST"),e("td",null,"/admin/books/new")]),e("tr",null,[e("td",null,"app_admin_book_update"),e("td",null,"GET, PUT, PATCH"),e("td",null,"/admin/books/{id}/edit")]),e("tr",null,[e("td",null,"app_admin_book_delete"),e("td",null,"DELETE"),e("td",null,"/admin/books/{id}")]),e("tr",null,[e("td",null,"app_admin_book_bulk_delete"),e("td",null,"DELETE"),e("td",null,"/admin/books/bulk_delete")]),e("tr",null,[e("td",null,"app_shop_book_index"),e("td",null,"GET"),e("td",null,"/books/")]),e("tr",null,[e("td",null,"app_shop_book_show"),e("td",null,"GET"),e("td",null,"/books/{id}")])])],-1),$4={__name:"37",setup(s){const o={srcSequence:"./pages/03_configure_your_operations.md"};return F(O),(n,t)=>(C(),M(Q,Z(Y(o)),{default:E(()=>[R4,x4]),_:1},16))}},F4=N($4,[["__file","/@slidev/slides/37.md"]]),I4=e("h1",null,"Redirect",-1),T4=e("p",null,"After that an action has been performed, the operation can be redirected to another operation.",-1),M4={__name:"38",setup(s){const o={srcSequence:"./pages/04_redirect.md"};return F(O),(n,t)=>{const l=Re;return C(),M(Q,Z(Y(o)),{default:E(()=>[I4,R(l,null,{default:E(()=>[T4]),_:1})]),_:1},16)}}},P4=N(M4,[["__file","/@slidev/slides/38.md"]]),O4=e("h1",null,"Default redirections",-1),L4=e("p",null,"Redirections are configured on your operations with these default behaviours.",-1),N4=e("table",null,[e("thead",null,[e("tr",null,[e("th",null,"Operation"),e("th",null,"Redirection")])]),e("tbody",null,[e("tr",null,[e("td",null,"create"),e("td",null,[e("code",null,"show"),r(" if exists, otherwise "),e("code",null,"index")])]),e("tr",null,[e("td",null,"update"),e("td",null,[e("code",null,"show"),r(" if exists, otherwise "),e("code",null,"index")])]),e("tr",null,[e("td",null,"delete"),e("td",null,[e("code",null,"index")])]),e("tr",null,[e("td",null,"bulk_delete"),e("td",null,[e("code",null,"index")])])])],-1),q4={__name:"39",setup(s){const o={srcSequence:"./pages/04_redirect.md"};return F(O),(n,t)=>{const l=Re;return C(),M(Q,Z(Y(o)),{default:E(()=>[O4,R(l,null,{default:E(()=>[L4,N4]),_:1})]),_:1},16)}}},H4=N(q4,[["__file","/@slidev/slides/39.md"]]),U4=e("h1",null,"Custom redirection",-1),V4=e("p",null,"As an example, let’s configure a custom redirection fo create & update operations.",-1),j4=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"},tabindex:"0"},[e("code",null,[e("span",{class:"line"}),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#4D9375"}},"declare"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#D4976C"}},"strict_types"),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#6394BF"}},"1"),e("span",{style:{color:"#858585"}},");")]),r(`
`),e("span",{class:"line"}),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#4D9375"}},"namespace"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"App"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#A1B567"}},"Entity"),e("span",{style:{color:"#858585"}},";")]),r(`
`),e("span",{class:"line"}),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#4D9375"}},"use"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"Sylius"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#E0A569"}},"Resource"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#E0A569"}},"Metadata"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#E0A569"}},"Create"),e("span",{style:{color:"#858585"}},";")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#4D9375"}},"use"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"Sylius"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#E0A569"}},"Resource"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#E0A569"}},"Metadata"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#E0A569"}},"AsResource"),e("span",{style:{color:"#858585"}},";")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#4D9375"}},"use"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"Sylius"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#E0A569"}},"Resource"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#E0A569"}},"Metadata"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#E0A569"}},"Update"),e("span",{style:{color:"#858585"}},";")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#4D9375"}},"use"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"Sylius"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#E0A569"}},"Resource"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#E0A569"}},"Model"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#E0A569"}},"ResourceInterface"),e("span",{style:{color:"#858585"}},";")]),r(`
`),e("span",{class:"line"}),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"#["),e("span",{style:{color:"#E0A569"}},"AsResource"),e("span",{style:{color:"#DBD7CA"}},"]")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"#["),e("span",{style:{color:"#E0A569"}},"Create"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#A1B567"}},"redirectToRoute"),e("span",{style:{color:"#858585"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},"'app_book_update'"),e("span",{style:{color:"#858585"}},")"),e("span",{style:{color:"#DBD7CA"}},"]")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"#["),e("span",{style:{color:"#E0A569"}},"Update"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#A1B567"}},"redirectToRoute"),e("span",{style:{color:"#858585"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},"'app_book_update'"),e("span",{style:{color:"#858585"}},")"),e("span",{style:{color:"#DBD7CA"}},"]")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#CB7676"}},"class"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"Book"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"implements"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"ResourceInterface")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"{")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"}")])])]),e("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"},tabindex:"0"},[e("code",null,[e("span",{class:"line"}),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#1C6B48"}},"declare"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#A65E2B"}},"strict_types"),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#296AA3"}},"1"),e("span",{style:{color:"#8E8F8B"}},");")]),r(`
`),e("span",{class:"line"}),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#1C6B48"}},"namespace"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"App"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#6C7834"}},"Entity"),e("span",{style:{color:"#8E8F8B"}},";")]),r(`
`),e("span",{class:"line"}),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#1C6B48"}},"use"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B58451"}},"Sylius"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#B58451"}},"Resource"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#B58451"}},"Metadata"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#B58451"}},"Create"),e("span",{style:{color:"#8E8F8B"}},";")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#1C6B48"}},"use"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B58451"}},"Sylius"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#B58451"}},"Resource"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#B58451"}},"Metadata"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#B58451"}},"AsResource"),e("span",{style:{color:"#8E8F8B"}},";")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#1C6B48"}},"use"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B58451"}},"Sylius"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#B58451"}},"Resource"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#B58451"}},"Metadata"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#B58451"}},"Update"),e("span",{style:{color:"#8E8F8B"}},";")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#1C6B48"}},"use"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B58451"}},"Sylius"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#B58451"}},"Resource"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#B58451"}},"Model"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#B58451"}},"ResourceInterface"),e("span",{style:{color:"#8E8F8B"}},";")]),r(`
`),e("span",{class:"line"}),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"#["),e("span",{style:{color:"#B58451"}},"AsResource"),e("span",{style:{color:"#393A34"}},"]")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"#["),e("span",{style:{color:"#B58451"}},"Create"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#6C7834"}},"redirectToRoute"),e("span",{style:{color:"#8E8F8B"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},"'app_book_update'"),e("span",{style:{color:"#8E8F8B"}},")"),e("span",{style:{color:"#393A34"}},"]")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"#["),e("span",{style:{color:"#B58451"}},"Update"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#6C7834"}},"redirectToRoute"),e("span",{style:{color:"#8E8F8B"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},"'app_book_update'"),e("span",{style:{color:"#8E8F8B"}},")"),e("span",{style:{color:"#393A34"}},"]")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#AB5959"}},"class"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"Book"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"implements"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"ResourceInterface")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"{")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"}")])])])],-1),G4=e("p",null,"After adding or editing a book, it will be redirected to the edition page of a book.",-1),W4={__name:"40",setup(s){const o={srcSequence:"./pages/04_redirect.md"};return F(O),(n,t)=>{const l=ge,a=Re;return C(),M(Q,Z(Y(o)),{default:E(()=>[U4,R(a,null,{default:E(()=>[V4,R(l,fe({},{ranges:["all","12-13"]}),{default:E(()=>[j4]),_:1},16),G4]),_:1})]),_:1},16)}}},z4=N(W4,[["__file","/@slidev/slides/40.md"]]),K4=e("h1",null,"Pass arguments to your redirection",-1),Y4=e("p",null,"You can pass arguments to your redirection method.",-1),Z4=e("p",null,"2 variables are available:",-1),Q4=e("ul",null,[e("li",null,[e("code",null,"resource"),r(": to retrieve data from the instantiated resource")]),e("li",null,[e("code",null,"{name_of_your_resource}"),r(": If your resource is a book instance, it will be also available as "),e("code",null,"book"),r(" variable")])],-1),J4=e("p",null,[r("It uses the "),e("a",{href:"https://symfony.com/doc/current/components/expression_language.html",target:"_blank",rel:"noopener"},"Symfony expression language"),r(" component.")],-1),X4={__name:"41",setup(s){const o={srcSequence:"./pages/04_redirect.md"};return F(O),(n,t)=>{const l=Re;return C(),M(Q,Z(Y(o)),{default:E(()=>[K4,R(l,null,{default:E(()=>[Y4,Z4,Q4,J4]),_:1})]),_:1},16)}}},e7=N(X4,[["__file","/@slidev/slides/41.md"]]),s7=e("h1",null,"Pass arguments to your redirection",-1),o7=e("p",null,"As an example, let’s redirect a book creation to the author details page of the created book.",-1),n7=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"},tabindex:"0"},[e("code",null,[e("span",{class:"line"}),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#4D9375"}},"declare"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#D4976C"}},"strict_types"),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#6394BF"}},"1"),e("span",{style:{color:"#858585"}},");")]),r(`
`),e("span",{class:"line"}),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#4D9375"}},"namespace"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"App"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#A1B567"}},"Entity"),e("span",{style:{color:"#858585"}},";")]),r(`
`),e("span",{class:"line"}),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#4D9375"}},"use"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"Sylius"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#E0A569"}},"Component"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#E0A569"}},"Resource"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#E0A569"}},"Metadata"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#E0A569"}},"Create"),e("span",{style:{color:"#858585"}},";")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#4D9375"}},"use"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"Sylius"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#E0A569"}},"Component"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#E0A569"}},"Resource"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#E0A569"}},"Metadata"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#E0A569"}},"Resource"),e("span",{style:{color:"#858585"}},";")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#4D9375"}},"use"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"Sylius"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#E0A569"}},"Component"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#E0A569"}},"Resource"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#E0A569"}},"Metadata"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#E0A569"}},"Update"),e("span",{style:{color:"#858585"}},";")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#4D9375"}},"use"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"Sylius"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#E0A569"}},"Component"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#E0A569"}},"Resource"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#E0A569"}},"Model"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#E0A569"}},"ResourceInterface"),e("span",{style:{color:"#858585"}},";")]),r(`
`),e("span",{class:"line"}),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"#["),e("span",{style:{color:"#E0A569"}},"Resource"),e("span",{style:{color:"#DBD7CA"}},"]")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"#["),e("span",{style:{color:"#E0A569"}},"Create"),e("span",{style:{color:"#858585"}},"(")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#A1B567"}},"redirectToRoute"),e("span",{style:{color:"#858585"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},"'app_author_show'"),e("span",{style:{color:"#858585"}},","),e("span",{style:{color:"#DBD7CA"}}," ")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"    "),e("span",{style:{color:"#758575"}},"# You can use either the generic resource variable")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#A1B567"}},"redirectArguments"),e("span",{style:{color:"#858585"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"["),e("span",{style:{color:"#C98A7D"}},"'id'"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"=>"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},"'resource.getAuthor().getId()'"),e("span",{style:{color:"#858585"}},"]")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"    "),e("span",{style:{color:"#758575"}},"# Or you can use the resource name")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#A1B567"}},"redirectArguments"),e("span",{style:{color:"#858585"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"["),e("span",{style:{color:"#C98A7D"}},"'id'"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"=>"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},"'book.getAuthor().getId()'"),e("span",{style:{color:"#858585"}},"]")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},")"),e("span",{style:{color:"#DBD7CA"}},"]")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#CB7676"}},"class"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"Book"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"implements"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"ResourceInterface")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"{")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"}")])])]),e("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"},tabindex:"0"},[e("code",null,[e("span",{class:"line"}),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#1C6B48"}},"declare"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#A65E2B"}},"strict_types"),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#296AA3"}},"1"),e("span",{style:{color:"#8E8F8B"}},");")]),r(`
`),e("span",{class:"line"}),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#1C6B48"}},"namespace"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"App"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#6C7834"}},"Entity"),e("span",{style:{color:"#8E8F8B"}},";")]),r(`
`),e("span",{class:"line"}),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#1C6B48"}},"use"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B58451"}},"Sylius"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#B58451"}},"Component"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#B58451"}},"Resource"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#B58451"}},"Metadata"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#B58451"}},"Create"),e("span",{style:{color:"#8E8F8B"}},";")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#1C6B48"}},"use"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B58451"}},"Sylius"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#B58451"}},"Component"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#B58451"}},"Resource"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#B58451"}},"Metadata"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#B58451"}},"Resource"),e("span",{style:{color:"#8E8F8B"}},";")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#1C6B48"}},"use"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B58451"}},"Sylius"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#B58451"}},"Component"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#B58451"}},"Resource"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#B58451"}},"Metadata"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#B58451"}},"Update"),e("span",{style:{color:"#8E8F8B"}},";")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#1C6B48"}},"use"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B58451"}},"Sylius"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#B58451"}},"Component"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#B58451"}},"Resource"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#B58451"}},"Model"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#B58451"}},"ResourceInterface"),e("span",{style:{color:"#8E8F8B"}},";")]),r(`
`),e("span",{class:"line"}),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"#["),e("span",{style:{color:"#B58451"}},"Resource"),e("span",{style:{color:"#393A34"}},"]")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"#["),e("span",{style:{color:"#B58451"}},"Create"),e("span",{style:{color:"#8E8F8B"}},"(")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#6C7834"}},"redirectToRoute"),e("span",{style:{color:"#8E8F8B"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},"'app_author_show'"),e("span",{style:{color:"#8E8F8B"}},","),e("span",{style:{color:"#393A34"}}," ")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"    "),e("span",{style:{color:"#A0ADA0"}},"# You can use either the generic resource variable")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#6C7834"}},"redirectArguments"),e("span",{style:{color:"#8E8F8B"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"["),e("span",{style:{color:"#B56959"}},"'id'"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"=>"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},"'resource.getAuthor().getId()'"),e("span",{style:{color:"#8E8F8B"}},"]")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"    "),e("span",{style:{color:"#A0ADA0"}},"# Or you can use the resource name")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#6C7834"}},"redirectArguments"),e("span",{style:{color:"#8E8F8B"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"["),e("span",{style:{color:"#B56959"}},"'id'"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"=>"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},"'book.getAuthor().getId()'"),e("span",{style:{color:"#8E8F8B"}},"]")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},")"),e("span",{style:{color:"#393A34"}},"]")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#AB5959"}},"class"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"Book"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"implements"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"ResourceInterface")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"{")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"}")])])])],-1),t7={__name:"42",setup(s){const o={srcSequence:"./pages/04_redirect.md"};return F(O),(n,t)=>{const l=ge,a=Re;return C(),M(Q,Z(Y(o)),{default:E(()=>[s7,R(a,null,{default:E(()=>[o7,R(l,fe({},{ranges:["all","13","14-15","16-17"]}),{default:E(()=>[n7]),_:1},16)]),_:1})]),_:1},16)}}},l7=N(t7,[["__file","/@slidev/slides/42.md"]]),r7=e("h1",null,"Resource factories",-1),a7=e("p",null,"Resource factories are used on Create operations to instantiate your resource.",-1),c7={__name:"43",setup(s){const o={srcSequence:"./pages/05_resource_factories.md"};return F(O),(n,t)=>{const l=Re;return C(),M(Q,Z(Y(o)),{default:E(()=>[r7,R(l,null,{default:E(()=>[a7]),_:1})]),_:1},16)}}},i7=N(c7,[["__file","/@slidev/slides/43.md"]]),p7=e("h1",null,"Default factory for your resource",-1),u7=e("p",null,[r("By default, a resource factory is defined to your resource "),e("code",null,"Sylius\\Resource\\Factory\\Factory"),r(".")],-1),y7=e("p",null,[r("It has a "),e("code",null,"createNew"),r(" method with no arguments.")],-1),d7={__name:"44",setup(s){const o={srcSequence:"./pages/05_resource_factories.md"};return F(O),(n,t)=>{const l=Re;return C(),M(Q,Z(Y(o)),{default:E(()=>[p7,R(l,null,{default:E(()=>[u7,y7]),_:1})]),_:1},16)}}},f7=N(d7,[["__file","/@slidev/slides/44.md"]]),m7=e("h1",null,"Define your custom factory",-1),h7=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#758575"}},"// src/Factory/BookRepository.php")]),r(`
`),e("span",{class:"line"}),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#4D9375"}},"declare"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#D4976C"}},"strict_types"),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#6394BF"}},"1"),e("span",{style:{color:"#858585"}},");")]),r(`
`),e("span",{class:"line"}),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#4D9375"}},"namespace"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"App"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#A1B567"}},"Factory"),e("span",{style:{color:"#858585"}},";")]),r(`
`),e("span",{class:"line"}),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#4D9375"}},"use"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"App"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#E0A569"}},"Entity"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#E0A569"}},"Book"),e("span",{style:{color:"#858585"}},";")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#4D9375"}},"use"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"Sylius"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#E0A569"}},"Resource"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#E0A569"}},"Factory"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#E0A569"}},"FactoryInterface"),e("span",{style:{color:"#858585"}},";")]),r(`
`),e("span",{class:"line"}),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#CB7676"}},"final"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"class"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"BookFactory"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"implements"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"FactoryInterface")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"{")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#CB7676"}},"public"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"function"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"createNew"),e("span",{style:{color:"#858585"}},"()"),e("span",{style:{color:"#CB7676"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"Book")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#858585"}},"{")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#858585"}},"$"),e("span",{style:{color:"#B8A965"}},"book"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#4D9375"}},"new"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"Book"),e("span",{style:{color:"#858585"}},"();")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#858585"}},"$"),e("span",{style:{color:"#B8A965"}},"book"),e("span",{style:{color:"#CB7676"}},"->"),e("span",{style:{color:"#A1B567"}},"setCreatedAt"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#4D9375"}},"new"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#E0A569"}},"DateTimeImmutable"),e("span",{style:{color:"#858585"}},"());")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        ")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#4D9375"}},"return"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"$"),e("span",{style:{color:"#B8A965"}},"book"),e("span",{style:{color:"#858585"}},";")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#858585"}},"}")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"}")])])]),e("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#A0ADA0"}},"// src/Factory/BookRepository.php")]),r(`
`),e("span",{class:"line"}),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#1C6B48"}},"declare"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#A65E2B"}},"strict_types"),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#296AA3"}},"1"),e("span",{style:{color:"#8E8F8B"}},");")]),r(`
`),e("span",{class:"line"}),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#1C6B48"}},"namespace"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"App"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#6C7834"}},"Factory"),e("span",{style:{color:"#8E8F8B"}},";")]),r(`
`),e("span",{class:"line"}),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#1C6B48"}},"use"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B58451"}},"App"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#B58451"}},"Entity"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#B58451"}},"Book"),e("span",{style:{color:"#8E8F8B"}},";")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#1C6B48"}},"use"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B58451"}},"Sylius"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#B58451"}},"Resource"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#B58451"}},"Factory"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#B58451"}},"FactoryInterface"),e("span",{style:{color:"#8E8F8B"}},";")]),r(`
`),e("span",{class:"line"}),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#AB5959"}},"final"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"class"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"BookFactory"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"implements"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"FactoryInterface")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"{")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#AB5959"}},"public"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"function"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"createNew"),e("span",{style:{color:"#8E8F8B"}},"()"),e("span",{style:{color:"#AB5959"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B58451"}},"Book")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#8E8F8B"}},"{")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#8E8F8B"}},"$"),e("span",{style:{color:"#8C862B"}},"book"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#1C6B48"}},"new"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B58451"}},"Book"),e("span",{style:{color:"#8E8F8B"}},"();")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#8E8F8B"}},"$"),e("span",{style:{color:"#8C862B"}},"book"),e("span",{style:{color:"#AB5959"}},"->"),e("span",{style:{color:"#6C7834"}},"setCreatedAt"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#1C6B48"}},"new"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#B58451"}},"DateTimeImmutable"),e("span",{style:{color:"#8E8F8B"}},"());")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        ")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#1C6B48"}},"return"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"$"),e("span",{style:{color:"#8C862B"}},"book"),e("span",{style:{color:"#8E8F8B"}},";")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#8E8F8B"}},"}")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"}")])])])],-1),_7={__name:"45",setup(s){const o={srcSequence:"./pages/05_resource_factories.md"};return F(O),(n,t)=>{const l=ge;return C(),M(Q,Z(Y(o)),{default:E(()=>[m7,R(l,fe({},{ranges:["all","10","10,8","12","14","15","17"]}),{default:E(()=>[h7]),_:1},16)]),_:1},16)}}},B7=N(_7,[["__file","/@slidev/slides/45.md"]]),A7=e("h1",null,"Configure your factory",-1),g7=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#758575"}},"# config/services.yaml")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#429988"}},"services"),e("span",{style:{color:"#858585"}},":")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#429988"}},"App\\Factory\\BookFactory"),e("span",{style:{color:"#858585"}},":")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"      "),e("span",{style:{color:"#429988"}},"decorates"),e("span",{style:{color:"#858585"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},"'app.factory.book'")])])]),e("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#A0ADA0"}},"# config/services.yaml")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#2F8A89"}},"services"),e("span",{style:{color:"#8E8F8B"}},":")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#2F8A89"}},"App\\Factory\\BookFactory"),e("span",{style:{color:"#8E8F8B"}},":")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"      "),e("span",{style:{color:"#2F8A89"}},"decorates"),e("span",{style:{color:"#8E8F8B"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},"'app.factory.book'")])])])],-1),v7={__name:"46",setup(s){const o={srcSequence:"./pages/05_resource_factories.md"};return F(O),(n,t)=>{const l=ge;return C(),M(Q,Z(Y(o)),{default:E(()=>[A7,R(l,fe({},{ranges:[""]}),{default:E(()=>[g7]),_:1},16)]),_:1},16)}}},C7=N(v7,[["__file","/@slidev/slides/46.md"]]),D7=e("h1",null,"Use your custom method",-1),E7=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#758575"}},"// src/Factory/BookRepository.php")]),r(`
`),e("span",{class:"line"}),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#758575"}},"// [...]")]),r(`
`),e("span",{class:"line"}),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#CB7676"}},"final"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"class"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"BookFactory"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"implements"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"FactoryInterface")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"{")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#CB7676"}},"public"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"function"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"__construct"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#CB7676"}},"private"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"Security"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"$"),e("span",{style:{color:"#B8A965"}},"security"),e("span",{style:{color:"#858585"}},")"),e("span",{style:{color:"#DBD7CA"}}," ")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#858585"}},"{")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#858585"}},"}")]),r(`
`),e("span",{class:"line"}),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#CB7676"}},"public"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"function"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"createNew"),e("span",{style:{color:"#858585"}},"()"),e("span",{style:{color:"#CB7676"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"Book")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#858585"}},"{")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#4D9375"}},"return"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#4D9375"}},"new"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"Book"),e("span",{style:{color:"#858585"}},"();")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#858585"}},"}")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    ")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#CB7676"}},"public"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"function"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"createWithCreator"),e("span",{style:{color:"#858585"}},"()"),e("span",{style:{color:"#CB7676"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"Book")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#858585"}},"{")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#858585"}},"$"),e("span",{style:{color:"#B8A965"}},"book"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"$"),e("span",{style:{color:"#D4976C"}},"this"),e("span",{style:{color:"#CB7676"}},"->"),e("span",{style:{color:"#A1B567"}},"createNew"),e("span",{style:{color:"#858585"}},"();")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        ")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#858585"}},"$"),e("span",{style:{color:"#B8A965"}},"book"),e("span",{style:{color:"#CB7676"}},"->"),e("span",{style:{color:"#A1B567"}},"setCreator"),e("span",{style:{color:"#858585"}},"($"),e("span",{style:{color:"#D4976C"}},"this"),e("span",{style:{color:"#CB7676"}},"->"),e("span",{style:{color:"#B8A965"}},"security"),e("span",{style:{color:"#CB7676"}},"->"),e("span",{style:{color:"#A1B567"}},"getUser"),e("span",{style:{color:"#858585"}},"());")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        ")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#4D9375"}},"return"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"$"),e("span",{style:{color:"#B8A965"}},"book"),e("span",{style:{color:"#858585"}},";")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#858585"}},"}")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"}")])])]),e("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#A0ADA0"}},"// src/Factory/BookRepository.php")]),r(`
`),e("span",{class:"line"}),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#A0ADA0"}},"// [...]")]),r(`
`),e("span",{class:"line"}),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#AB5959"}},"final"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"class"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"BookFactory"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"implements"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"FactoryInterface")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"{")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#AB5959"}},"public"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"function"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B58451"}},"__construct"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#AB5959"}},"private"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B58451"}},"Security"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"$"),e("span",{style:{color:"#8C862B"}},"security"),e("span",{style:{color:"#8E8F8B"}},")"),e("span",{style:{color:"#393A34"}}," ")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#8E8F8B"}},"{")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#8E8F8B"}},"}")]),r(`
`),e("span",{class:"line"}),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#AB5959"}},"public"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"function"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"createNew"),e("span",{style:{color:"#8E8F8B"}},"()"),e("span",{style:{color:"#AB5959"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B58451"}},"Book")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#8E8F8B"}},"{")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#1C6B48"}},"return"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#1C6B48"}},"new"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B58451"}},"Book"),e("span",{style:{color:"#8E8F8B"}},"();")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#8E8F8B"}},"}")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    ")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#AB5959"}},"public"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"function"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"createWithCreator"),e("span",{style:{color:"#8E8F8B"}},"()"),e("span",{style:{color:"#AB5959"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B58451"}},"Book")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#8E8F8B"}},"{")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#8E8F8B"}},"$"),e("span",{style:{color:"#8C862B"}},"book"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"$"),e("span",{style:{color:"#A65E2B"}},"this"),e("span",{style:{color:"#AB5959"}},"->"),e("span",{style:{color:"#6C7834"}},"createNew"),e("span",{style:{color:"#8E8F8B"}},"();")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        ")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#8E8F8B"}},"$"),e("span",{style:{color:"#8C862B"}},"book"),e("span",{style:{color:"#AB5959"}},"->"),e("span",{style:{color:"#6C7834"}},"setCreator"),e("span",{style:{color:"#8E8F8B"}},"($"),e("span",{style:{color:"#A65E2B"}},"this"),e("span",{style:{color:"#AB5959"}},"->"),e("span",{style:{color:"#8C862B"}},"security"),e("span",{style:{color:"#AB5959"}},"->"),e("span",{style:{color:"#6C7834"}},"getUser"),e("span",{style:{color:"#8E8F8B"}},"());")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        ")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#1C6B48"}},"return"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"$"),e("span",{style:{color:"#8C862B"}},"book"),e("span",{style:{color:"#8E8F8B"}},";")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#8E8F8B"}},"}")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"}")])])])],-1),b7={__name:"47",setup(s){const o={srcSequence:"./pages/05_resource_factories.md"};return F(O),(n,t)=>{const l=ge;return C(),M(Q,Z(Y(o)),{default:E(()=>[D7,R(l,fe({},{ranges:["all","16","18","18,11-14","20","22"]}),{default:E(()=>[E7]),_:1},16)]),_:1},16)}}},k7=N(b7,[["__file","/@slidev/slides/47.md"]]),w7=e("h1",null,"Use it on your create operation",-1),S7=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#758575"}},"// src/Entity/Book.php")]),r(`
`),e("span",{class:"line"}),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#4D9375"}},"declare"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#D4976C"}},"strict_types"),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#6394BF"}},"1"),e("span",{style:{color:"#858585"}},");")]),r(`
`),e("span",{class:"line"}),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#4D9375"}},"namespace"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"App"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#A1B567"}},"Entity"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#A1B567"}},"Book"),e("span",{style:{color:"#858585"}},";")]),r(`
`),e("span",{class:"line"}),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#4D9375"}},"use"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"Sylius"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#E0A569"}},"Resource"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#E0A569"}},"Metadata"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#E0A569"}},"Create"),e("span",{style:{color:"#858585"}},";")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#4D9375"}},"use"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"Sylius"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#E0A569"}},"Resource"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#E0A569"}},"Metadata"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#E0A569"}},"AsResource"),e("span",{style:{color:"#858585"}},";")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#4D9375"}},"use"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"Sylius"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#E0A569"}},"Resource"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#E0A569"}},"Model"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#E0A569"}},"ResourceInterface"),e("span",{style:{color:"#858585"}},";")]),r(`
`),e("span",{class:"line"}),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"#["),e("span",{style:{color:"#E0A569"}},"AsResource"),e("span",{style:{color:"#DBD7CA"}},"]")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"#["),e("span",{style:{color:"#E0A569"}},"Create"),e("span",{style:{color:"#858585"}},"(")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#A1B567"}},"path"),e("span",{style:{color:"#858585"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},"'authors/{authorId}/books'"),e("span",{style:{color:"#858585"}},",")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#A1B567"}},"factoryMethod"),e("span",{style:{color:"#858585"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},"'createWithCreator'"),e("span",{style:{color:"#858585"}},",")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},")"),e("span",{style:{color:"#DBD7CA"}},"]")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#CB7676"}},"class"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"Book"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"implements"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"ResourceInterface")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"{")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"}")])])]),e("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#A0ADA0"}},"// src/Entity/Book.php")]),r(`
`),e("span",{class:"line"}),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#1C6B48"}},"declare"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#A65E2B"}},"strict_types"),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#296AA3"}},"1"),e("span",{style:{color:"#8E8F8B"}},");")]),r(`
`),e("span",{class:"line"}),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#1C6B48"}},"namespace"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"App"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#6C7834"}},"Entity"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#6C7834"}},"Book"),e("span",{style:{color:"#8E8F8B"}},";")]),r(`
`),e("span",{class:"line"}),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#1C6B48"}},"use"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B58451"}},"Sylius"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#B58451"}},"Resource"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#B58451"}},"Metadata"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#B58451"}},"Create"),e("span",{style:{color:"#8E8F8B"}},";")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#1C6B48"}},"use"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B58451"}},"Sylius"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#B58451"}},"Resource"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#B58451"}},"Metadata"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#B58451"}},"AsResource"),e("span",{style:{color:"#8E8F8B"}},";")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#1C6B48"}},"use"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B58451"}},"Sylius"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#B58451"}},"Resource"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#B58451"}},"Model"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#B58451"}},"ResourceInterface"),e("span",{style:{color:"#8E8F8B"}},";")]),r(`
`),e("span",{class:"line"}),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"#["),e("span",{style:{color:"#B58451"}},"AsResource"),e("span",{style:{color:"#393A34"}},"]")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"#["),e("span",{style:{color:"#B58451"}},"Create"),e("span",{style:{color:"#8E8F8B"}},"(")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#6C7834"}},"path"),e("span",{style:{color:"#8E8F8B"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},"'authors/{authorId}/books'"),e("span",{style:{color:"#8E8F8B"}},",")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#6C7834"}},"factoryMethod"),e("span",{style:{color:"#8E8F8B"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},"'createWithCreator'"),e("span",{style:{color:"#8E8F8B"}},",")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},")"),e("span",{style:{color:"#393A34"}},"]")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#AB5959"}},"class"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"Book"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"implements"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"ResourceInterface")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"{")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"}")])])])],-1),R7={__name:"48",setup(s){const o={srcSequence:"./pages/05_resource_factories.md"};return F(O),(n,t)=>{const l=ge;return C(),M(Q,Z(Y(o)),{default:E(()=>[w7,R(l,fe({},{ranges:["all","14"]}),{default:E(()=>[S7]),_:1},16)]),_:1},16)}}},x7=N(R7,[["__file","/@slidev/slides/48.md"]]),$7=e("h1",null,"Pass arguments to your method",-1),F7=e("p",null,"You can pass arguments to your factory method.",-1),I7=e("p",null,"3 variables are available:",-1),T7=e("ul",null,[e("li",null,[e("code",null,"request"),r(": to retrieve data from the request via "),e("code",null,"Symfony\\Component\\HttpFoundation\\Request")]),e("li",null,[e("code",null,"token"),r(": to retrieve data from the authentication token via "),e("code",null,"Symfony\\Component\\Security\\Core\\Authentication\\Token\\TokenInterface")]),e("li",null,[e("code",null,"user"),r(": to retrieve data from the logged-in user via "),e("code",null,"Symfony\\Component\\Security\\Core\\User\\UserInterface")])],-1),M7=e("p",null,[r("It uses the "),e("a",{href:"https://symfony.com/doc/current/components/expression_language.html",target:"_blank",rel:"noopener"},"Symfony expression language"),r(" component.")],-1),P7={__name:"49",setup(s){const o={srcSequence:"./pages/05_resource_factories.md"};return F(O),(n,t)=>{const l=Re;return C(),M(Q,Z(Y(o)),{default:E(()=>[$7,R(l,null,{default:E(()=>[F7,I7,T7,M7]),_:1})]),_:1},16)}}},O7=N(P7,[["__file","/@slidev/slides/49.md"]]),L7=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#758575"}},"// src/Factory/BookRepository.php")]),r(`
`),e("span",{class:"line"}),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#758575"}},"// [...]")]),r(`
`),e("span",{class:"line"}),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#CB7676"}},"final"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"class"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"BookFactory"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"implements"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"FactoryInterface")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"{")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#CB7676"}},"public"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"function"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"__construct"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#CB7676"}},"private"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"RepositoryInterface"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"$"),e("span",{style:{color:"#B8A965"}},"authorRepository"),e("span",{style:{color:"#858585"}},")"),e("span",{style:{color:"#DBD7CA"}}," ")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#858585"}},"{")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#858585"}},"}")]),r(`
`),e("span",{class:"line"}),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#CB7676"}},"public"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"function"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"createNew"),e("span",{style:{color:"#858585"}},"()"),e("span",{style:{color:"#CB7676"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"Book")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#858585"}},"{")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#4D9375"}},"return"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#4D9375"}},"new"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"Book"),e("span",{style:{color:"#858585"}},"();")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#858585"}},"}")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    ")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#CB7676"}},"public"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"function"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"createForAuthor"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#4D9375"}},"string"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"$"),e("span",{style:{color:"#B8A965"}},"authorId"),e("span",{style:{color:"#858585"}},")"),e("span",{style:{color:"#CB7676"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"Book")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#858585"}},"{")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#858585"}},"$"),e("span",{style:{color:"#B8A965"}},"book"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"$"),e("span",{style:{color:"#D4976C"}},"this"),e("span",{style:{color:"#CB7676"}},"->"),e("span",{style:{color:"#A1B567"}},"createNew"),e("span",{style:{color:"#858585"}},"();")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        ")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#858585"}},"$"),e("span",{style:{color:"#B8A965"}},"author"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"$"),e("span",{style:{color:"#D4976C"}},"this"),e("span",{style:{color:"#CB7676"}},"->"),e("span",{style:{color:"#B8A965"}},"authorRepository"),e("span",{style:{color:"#CB7676"}},"->"),e("span",{style:{color:"#A1B567"}},"find"),e("span",{style:{color:"#858585"}},"($"),e("span",{style:{color:"#B8A965"}},"authorId"),e("span",{style:{color:"#858585"}},");")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        ")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#858585"}},"$"),e("span",{style:{color:"#B8A965"}},"book"),e("span",{style:{color:"#CB7676"}},"->"),e("span",{style:{color:"#A1B567"}},"setAuthor"),e("span",{style:{color:"#858585"}},"($"),e("span",{style:{color:"#B8A965"}},"author"),e("span",{style:{color:"#858585"}},");")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        ")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#4D9375"}},"return"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"$"),e("span",{style:{color:"#B8A965"}},"book"),e("span",{style:{color:"#858585"}},";")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#858585"}},"}")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"}")])])]),e("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#A0ADA0"}},"// src/Factory/BookRepository.php")]),r(`
`),e("span",{class:"line"}),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#A0ADA0"}},"// [...]")]),r(`
`),e("span",{class:"line"}),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#AB5959"}},"final"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"class"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"BookFactory"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"implements"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"FactoryInterface")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"{")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#AB5959"}},"public"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"function"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B58451"}},"__construct"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#AB5959"}},"private"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B58451"}},"RepositoryInterface"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"$"),e("span",{style:{color:"#8C862B"}},"authorRepository"),e("span",{style:{color:"#8E8F8B"}},")"),e("span",{style:{color:"#393A34"}}," ")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#8E8F8B"}},"{")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#8E8F8B"}},"}")]),r(`
`),e("span",{class:"line"}),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#AB5959"}},"public"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"function"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"createNew"),e("span",{style:{color:"#8E8F8B"}},"()"),e("span",{style:{color:"#AB5959"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B58451"}},"Book")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#8E8F8B"}},"{")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#1C6B48"}},"return"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#1C6B48"}},"new"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B58451"}},"Book"),e("span",{style:{color:"#8E8F8B"}},"();")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#8E8F8B"}},"}")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    ")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#AB5959"}},"public"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"function"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"createForAuthor"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#1C6B48"}},"string"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"$"),e("span",{style:{color:"#8C862B"}},"authorId"),e("span",{style:{color:"#8E8F8B"}},")"),e("span",{style:{color:"#AB5959"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B58451"}},"Book")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#8E8F8B"}},"{")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#8E8F8B"}},"$"),e("span",{style:{color:"#8C862B"}},"book"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"$"),e("span",{style:{color:"#A65E2B"}},"this"),e("span",{style:{color:"#AB5959"}},"->"),e("span",{style:{color:"#6C7834"}},"createNew"),e("span",{style:{color:"#8E8F8B"}},"();")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        ")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#8E8F8B"}},"$"),e("span",{style:{color:"#8C862B"}},"author"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"$"),e("span",{style:{color:"#A65E2B"}},"this"),e("span",{style:{color:"#AB5959"}},"->"),e("span",{style:{color:"#8C862B"}},"authorRepository"),e("span",{style:{color:"#AB5959"}},"->"),e("span",{style:{color:"#6C7834"}},"find"),e("span",{style:{color:"#8E8F8B"}},"($"),e("span",{style:{color:"#8C862B"}},"authorId"),e("span",{style:{color:"#8E8F8B"}},");")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        ")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#8E8F8B"}},"$"),e("span",{style:{color:"#8C862B"}},"book"),e("span",{style:{color:"#AB5959"}},"->"),e("span",{style:{color:"#6C7834"}},"setAuthor"),e("span",{style:{color:"#8E8F8B"}},"($"),e("span",{style:{color:"#8C862B"}},"author"),e("span",{style:{color:"#8E8F8B"}},");")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        ")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#1C6B48"}},"return"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"$"),e("span",{style:{color:"#8C862B"}},"book"),e("span",{style:{color:"#8E8F8B"}},";")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#8E8F8B"}},"}")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"}")])])])],-1),N7={__name:"50",setup(s){const o={srcSequence:"./pages/05_resource_factories.md"};return F(O),(n,t)=>{const l=ge;return C(),M(Q,Z(Y(o)),{default:E(()=>[R(l,fe({},{ranges:["all","16","18","20","20,7","22","24"]}),{default:E(()=>[L7]),_:1},16)]),_:1},16)}}},q7=N(N7,[["__file","/@slidev/slides/50.md"]]),H7=e("h1",null,"Use it on your create operation",-1),U7=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#758575"}},"// src/Entity/Book.php")]),r(`
`),e("span",{class:"line"}),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#4D9375"}},"declare"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#D4976C"}},"strict_types"),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#6394BF"}},"1"),e("span",{style:{color:"#858585"}},");")]),r(`
`),e("span",{class:"line"}),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#4D9375"}},"namespace"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"App"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#A1B567"}},"Entity"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#A1B567"}},"Book"),e("span",{style:{color:"#858585"}},";")]),r(`
`),e("span",{class:"line"}),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#4D9375"}},"use"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"Sylius"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#E0A569"}},"Resource"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#E0A569"}},"Metadata"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#E0A569"}},"Create"),e("span",{style:{color:"#858585"}},";")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#4D9375"}},"use"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"Sylius"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#E0A569"}},"Resource"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#E0A569"}},"Metadata"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#E0A569"}},"AsResource"),e("span",{style:{color:"#858585"}},";")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#4D9375"}},"use"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"Sylius"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#E0A569"}},"Resource"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#E0A569"}},"Model"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#E0A569"}},"ResourceInterface"),e("span",{style:{color:"#858585"}},";")]),r(`
`),e("span",{class:"line"}),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"#["),e("span",{style:{color:"#E0A569"}},"AsResource"),e("span",{style:{color:"#DBD7CA"}},"]")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"#["),e("span",{style:{color:"#E0A569"}},"Create"),e("span",{style:{color:"#858585"}},"(")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#A1B567"}},"path"),e("span",{style:{color:"#858585"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},"'authors/{authorId}/books'"),e("span",{style:{color:"#858585"}},",")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#A1B567"}},"factoryMethod"),e("span",{style:{color:"#858585"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},"'createForAuthor'"),e("span",{style:{color:"#858585"}},",")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#A1B567"}},"factoryArguments"),e("span",{style:{color:"#858585"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"["),e("span",{style:{color:"#C98A7D"}},"'authorId'"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"=>"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},`"request.attributes.get('authorId')"`),e("span",{style:{color:"#858585"}},"],")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},")"),e("span",{style:{color:"#DBD7CA"}},"]")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#CB7676"}},"class"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"Book"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"implements"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"ResourceInterface")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"{")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"}")])])]),e("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#A0ADA0"}},"// src/Entity/Book.php")]),r(`
`),e("span",{class:"line"}),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#1C6B48"}},"declare"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#A65E2B"}},"strict_types"),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#296AA3"}},"1"),e("span",{style:{color:"#8E8F8B"}},");")]),r(`
`),e("span",{class:"line"}),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#1C6B48"}},"namespace"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"App"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#6C7834"}},"Entity"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#6C7834"}},"Book"),e("span",{style:{color:"#8E8F8B"}},";")]),r(`
`),e("span",{class:"line"}),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#1C6B48"}},"use"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B58451"}},"Sylius"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#B58451"}},"Resource"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#B58451"}},"Metadata"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#B58451"}},"Create"),e("span",{style:{color:"#8E8F8B"}},";")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#1C6B48"}},"use"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B58451"}},"Sylius"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#B58451"}},"Resource"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#B58451"}},"Metadata"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#B58451"}},"AsResource"),e("span",{style:{color:"#8E8F8B"}},";")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#1C6B48"}},"use"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B58451"}},"Sylius"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#B58451"}},"Resource"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#B58451"}},"Model"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#B58451"}},"ResourceInterface"),e("span",{style:{color:"#8E8F8B"}},";")]),r(`
`),e("span",{class:"line"}),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"#["),e("span",{style:{color:"#B58451"}},"AsResource"),e("span",{style:{color:"#393A34"}},"]")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"#["),e("span",{style:{color:"#B58451"}},"Create"),e("span",{style:{color:"#8E8F8B"}},"(")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#6C7834"}},"path"),e("span",{style:{color:"#8E8F8B"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},"'authors/{authorId}/books'"),e("span",{style:{color:"#8E8F8B"}},",")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#6C7834"}},"factoryMethod"),e("span",{style:{color:"#8E8F8B"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},"'createForAuthor'"),e("span",{style:{color:"#8E8F8B"}},",")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#6C7834"}},"factoryArguments"),e("span",{style:{color:"#8E8F8B"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"["),e("span",{style:{color:"#B56959"}},"'authorId'"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"=>"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},`"request.attributes.get('authorId')"`),e("span",{style:{color:"#8E8F8B"}},"],")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},")"),e("span",{style:{color:"#393A34"}},"]")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#AB5959"}},"class"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"Book"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"implements"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"ResourceInterface")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"{")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"}")])])])],-1),V7={__name:"51",setup(s){const o={srcSequence:"./pages/05_resource_factories.md"};return F(O),(n,t)=>{const l=ge;return C(),M(Q,Z(Y(o)),{default:E(()=>[H7,R(l,fe({},{ranges:["all","14","15"]}),{default:E(()=>[U7]),_:1},16)]),_:1},16)}}},j7=N(V7,[["__file","/@slidev/slides/51.md"]]),G7=e("h1",null,"Use a factory without declaring it",-1),W7=e("p",null,[r("You can use a factory without declaring it on "),e("code",null,"services.yaml"),r(".")],-1),z7=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#758575"}},"// src/Entity/Book.php")]),r(`
`),e("span",{class:"line"}),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#4D9375"}},"declare"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#D4976C"}},"strict_types"),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#6394BF"}},"1"),e("span",{style:{color:"#858585"}},");")]),r(`
`),e("span",{class:"line"}),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#4D9375"}},"namespace"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"App"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#A1B567"}},"Entity"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#A1B567"}},"Book"),e("span",{style:{color:"#858585"}},";")]),r(`
`),e("span",{class:"line"}),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#4D9375"}},"use"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"App"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#E0A569"}},"Factory"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#E0A569"}},"BookFactory"),e("span",{style:{color:"#858585"}},";"),e("span",{style:{color:"#4D9375"}},"use"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"Sylius"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#E0A569"}},"Component"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#E0A569"}},"Resource"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#E0A569"}},"Metadata"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#E0A569"}},"Create"),e("span",{style:{color:"#858585"}},";")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#4D9375"}},"use"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"Sylius"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#E0A569"}},"Component"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#E0A569"}},"Resource"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#E0A569"}},"Metadata"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#E0A569"}},"Resource"),e("span",{style:{color:"#858585"}},";")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#4D9375"}},"use"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"Sylius"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#E0A569"}},"Component"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#E0A569"}},"Resource"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#E0A569"}},"Model"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#E0A569"}},"ResourceInterface"),e("span",{style:{color:"#858585"}},";")]),r(`
`),e("span",{class:"line"}),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"#["),e("span",{style:{color:"#E0A569"}},"Resource"),e("span",{style:{color:"#DBD7CA"}},"]")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"#["),e("span",{style:{color:"#E0A569"}},"Create"),e("span",{style:{color:"#858585"}},"(")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#A1B567"}},"path"),e("span",{style:{color:"#858585"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},"'authors/{authorId}/books'"),e("span",{style:{color:"#858585"}},",")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"    "),e("span",{style:{color:"#758575"}},"# Here we declared the factory to use with its fully classified class name")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#A1B567"}},"factory"),e("span",{style:{color:"#858585"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"BookFactory"),e("span",{style:{color:"#CB7676"}},"::"),e("span",{style:{color:"#4D9375"}},"class"),e("span",{style:{color:"#858585"}},",")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#A1B567"}},"factoryMethod"),e("span",{style:{color:"#858585"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},"'createForAuthor'"),e("span",{style:{color:"#858585"}},","),e("span",{style:{color:"#DBD7CA"}}," ")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#A1B567"}},"factoryArguments"),e("span",{style:{color:"#858585"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"["),e("span",{style:{color:"#C98A7D"}},"'authorId'"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"=>"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},`"request.attributes.get('authorId')"`),e("span",{style:{color:"#858585"}},"],")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},")"),e("span",{style:{color:"#DBD7CA"}},"]")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#CB7676"}},"class"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"Book"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"implements"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"ResourceInterface")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"{")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"}")])])]),e("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#A0ADA0"}},"// src/Entity/Book.php")]),r(`
`),e("span",{class:"line"}),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#1C6B48"}},"declare"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#A65E2B"}},"strict_types"),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#296AA3"}},"1"),e("span",{style:{color:"#8E8F8B"}},");")]),r(`
`),e("span",{class:"line"}),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#1C6B48"}},"namespace"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"App"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#6C7834"}},"Entity"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#6C7834"}},"Book"),e("span",{style:{color:"#8E8F8B"}},";")]),r(`
`),e("span",{class:"line"}),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#1C6B48"}},"use"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B58451"}},"App"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#B58451"}},"Factory"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#B58451"}},"BookFactory"),e("span",{style:{color:"#8E8F8B"}},";"),e("span",{style:{color:"#1C6B48"}},"use"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B58451"}},"Sylius"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#B58451"}},"Component"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#B58451"}},"Resource"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#B58451"}},"Metadata"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#B58451"}},"Create"),e("span",{style:{color:"#8E8F8B"}},";")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#1C6B48"}},"use"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B58451"}},"Sylius"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#B58451"}},"Component"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#B58451"}},"Resource"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#B58451"}},"Metadata"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#B58451"}},"Resource"),e("span",{style:{color:"#8E8F8B"}},";")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#1C6B48"}},"use"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B58451"}},"Sylius"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#B58451"}},"Component"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#B58451"}},"Resource"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#B58451"}},"Model"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#B58451"}},"ResourceInterface"),e("span",{style:{color:"#8E8F8B"}},";")]),r(`
`),e("span",{class:"line"}),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"#["),e("span",{style:{color:"#B58451"}},"Resource"),e("span",{style:{color:"#393A34"}},"]")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"#["),e("span",{style:{color:"#B58451"}},"Create"),e("span",{style:{color:"#8E8F8B"}},"(")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#6C7834"}},"path"),e("span",{style:{color:"#8E8F8B"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},"'authors/{authorId}/books'"),e("span",{style:{color:"#8E8F8B"}},",")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"    "),e("span",{style:{color:"#A0ADA0"}},"# Here we declared the factory to use with its fully classified class name")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#6C7834"}},"factory"),e("span",{style:{color:"#8E8F8B"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B58451"}},"BookFactory"),e("span",{style:{color:"#AB5959"}},"::"),e("span",{style:{color:"#1C6B48"}},"class"),e("span",{style:{color:"#8E8F8B"}},",")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#6C7834"}},"factoryMethod"),e("span",{style:{color:"#8E8F8B"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},"'createForAuthor'"),e("span",{style:{color:"#8E8F8B"}},","),e("span",{style:{color:"#393A34"}}," ")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#6C7834"}},"factoryArguments"),e("span",{style:{color:"#8E8F8B"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"["),e("span",{style:{color:"#B56959"}},"'authorId'"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"=>"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},`"request.attributes.get('authorId')"`),e("span",{style:{color:"#8E8F8B"}},"],")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},")"),e("span",{style:{color:"#393A34"}},"]")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#AB5959"}},"class"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"Book"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"implements"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"ResourceInterface")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"{")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"}")])])])],-1),K7={__name:"52",setup(s){const o={srcSequence:"./pages/05_resource_factories.md"};return F(O),(n,t)=>{const l=ge,a=Re;return C(),M(Q,Z(Y(o)),{default:E(()=>[G7,R(a,null,{default:E(()=>[W7,R(l,fe({},{ranges:["all","15"]}),{default:E(()=>[z7]),_:1},16)]),_:1})]),_:1},16)}}},Y7=N(K7,[["__file","/@slidev/slides/52.md"]]),Z7=e("h1",null,"Use a callable for your custom factory",-1),Q7=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#758575"}},"// src/Factory/BookRepository.php")]),r(`
`),e("span",{class:"line"}),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#4D9375"}},"declare"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#D4976C"}},"strict_types"),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#6394BF"}},"1"),e("span",{style:{color:"#858585"}},");")]),r(`
`),e("span",{class:"line"}),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#4D9375"}},"namespace"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"App"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#A1B567"}},"Factory"),e("span",{style:{color:"#858585"}},";")]),r(`
`),e("span",{class:"line"}),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#4D9375"}},"use"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"App"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#E0A569"}},"Entity"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#E0A569"}},"Book"),e("span",{style:{color:"#858585"}},";")]),r(`
`),e("span",{class:"line"}),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#CB7676"}},"final"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"class"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"BookFactory")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"{"),e("span",{style:{color:"#DBD7CA"}},"    ")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#CB7676"}},"public"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"static"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"function"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"create"),e("span",{style:{color:"#858585"}},"()"),e("span",{style:{color:"#CB7676"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"Book")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#858585"}},"{")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#4D9375"}},"return"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#4D9375"}},"new"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"Book"),e("span",{style:{color:"#858585"}},"();")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#858585"}},"}")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"}")])])]),e("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#A0ADA0"}},"// src/Factory/BookRepository.php")]),r(`
`),e("span",{class:"line"}),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#1C6B48"}},"declare"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#A65E2B"}},"strict_types"),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#296AA3"}},"1"),e("span",{style:{color:"#8E8F8B"}},");")]),r(`
`),e("span",{class:"line"}),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#1C6B48"}},"namespace"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"App"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#6C7834"}},"Factory"),e("span",{style:{color:"#8E8F8B"}},";")]),r(`
`),e("span",{class:"line"}),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#1C6B48"}},"use"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B58451"}},"App"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#B58451"}},"Entity"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#B58451"}},"Book"),e("span",{style:{color:"#8E8F8B"}},";")]),r(`
`),e("span",{class:"line"}),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#AB5959"}},"final"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"class"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"BookFactory")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"{"),e("span",{style:{color:"#393A34"}},"    ")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#AB5959"}},"public"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"static"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"function"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"create"),e("span",{style:{color:"#8E8F8B"}},"()"),e("span",{style:{color:"#AB5959"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B58451"}},"Book")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#8E8F8B"}},"{")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#1C6B48"}},"return"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#1C6B48"}},"new"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B58451"}},"Book"),e("span",{style:{color:"#8E8F8B"}},"();")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#8E8F8B"}},"}")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"}")])])])],-1),J7={__name:"53",setup(s){const o={srcSequence:"./pages/05_resource_factories.md"};return F(O),(n,t)=>{const l=ge;return C(),M(Q,Z(Y(o)),{default:E(()=>[Z7,R(l,fe({},{ranges:["all","9","11","13"]}),{default:E(()=>[Q7]),_:1},16)]),_:1},16)}}},X7=N(J7,[["__file","/@slidev/slides/53.md"]]),eD=e("h1",null,"Use it on your operation",-1),sD=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#758575"}},"// src/Entity/Book.php")]),r(`
`),e("span",{class:"line"}),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#4D9375"}},"declare"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#D4976C"}},"strict_types"),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#6394BF"}},"1"),e("span",{style:{color:"#858585"}},");")]),r(`
`),e("span",{class:"line"}),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#4D9375"}},"namespace"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"App"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#A1B567"}},"Entity"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#A1B567"}},"Book"),e("span",{style:{color:"#858585"}},";")]),r(`
`),e("span",{class:"line"}),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#4D9375"}},"use"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"App"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#E0A569"}},"Entity"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#E0A569"}},"Book"),e("span",{style:{color:"#858585"}},";")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#4D9375"}},"use"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"App"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#E0A569"}},"Factory"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#E0A569"}},"BookFactory"),e("span",{style:{color:"#858585"}},";")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#4D9375"}},"use"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"Sylius"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#E0A569"}},"Component"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#E0A569"}},"Resource"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#E0A569"}},"Metadata"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#E0A569"}},"Create"),e("span",{style:{color:"#858585"}},";")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#4D9375"}},"use"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"Sylius"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#E0A569"}},"Component"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#E0A569"}},"Resource"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#E0A569"}},"Metadata"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#E0A569"}},"Resource"),e("span",{style:{color:"#858585"}},";")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#4D9375"}},"use"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"Sylius"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#E0A569"}},"Component"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#E0A569"}},"Resource"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#E0A569"}},"Model"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#E0A569"}},"ResourceInterface"),e("span",{style:{color:"#858585"}},";")]),r(`
`),e("span",{class:"line"}),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"#["),e("span",{style:{color:"#E0A569"}},"Resource"),e("span",{style:{color:"#DBD7CA"}},"]")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"#["),e("span",{style:{color:"#E0A569"}},"Create"),e("span",{style:{color:"#858585"}},"(")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#A1B567"}},"factory"),e("span",{style:{color:"#858585"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"["),e("span",{style:{color:"#E0A569"}},"BookFactory"),e("span",{style:{color:"#CB7676"}},"::"),e("span",{style:{color:"#4D9375"}},"class"),e("span",{style:{color:"#858585"}},","),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},"'create'"),e("span",{style:{color:"#858585"}},"],"),e("span",{style:{color:"#DBD7CA"}}," ")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},")"),e("span",{style:{color:"#DBD7CA"}},"]")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#CB7676"}},"class"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"Book"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"implements"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#E0A569"}},"Sylius"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#E0A569"}},"Component"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#E0A569"}},"Resource"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#E0A569"}},"Model"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#A1B567"}},"ResourceInterface")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"{")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"}")])])]),e("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#A0ADA0"}},"// src/Entity/Book.php")]),r(`
`),e("span",{class:"line"}),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#1C6B48"}},"declare"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#A65E2B"}},"strict_types"),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#296AA3"}},"1"),e("span",{style:{color:"#8E8F8B"}},");")]),r(`
`),e("span",{class:"line"}),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#1C6B48"}},"namespace"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"App"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#6C7834"}},"Entity"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#6C7834"}},"Book"),e("span",{style:{color:"#8E8F8B"}},";")]),r(`
`),e("span",{class:"line"}),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#1C6B48"}},"use"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B58451"}},"App"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#B58451"}},"Entity"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#B58451"}},"Book"),e("span",{style:{color:"#8E8F8B"}},";")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#1C6B48"}},"use"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B58451"}},"App"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#B58451"}},"Factory"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#B58451"}},"BookFactory"),e("span",{style:{color:"#8E8F8B"}},";")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#1C6B48"}},"use"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B58451"}},"Sylius"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#B58451"}},"Component"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#B58451"}},"Resource"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#B58451"}},"Metadata"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#B58451"}},"Create"),e("span",{style:{color:"#8E8F8B"}},";")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#1C6B48"}},"use"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B58451"}},"Sylius"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#B58451"}},"Component"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#B58451"}},"Resource"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#B58451"}},"Metadata"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#B58451"}},"Resource"),e("span",{style:{color:"#8E8F8B"}},";")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#1C6B48"}},"use"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B58451"}},"Sylius"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#B58451"}},"Component"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#B58451"}},"Resource"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#B58451"}},"Model"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#B58451"}},"ResourceInterface"),e("span",{style:{color:"#8E8F8B"}},";")]),r(`
`),e("span",{class:"line"}),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"#["),e("span",{style:{color:"#B58451"}},"Resource"),e("span",{style:{color:"#393A34"}},"]")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"#["),e("span",{style:{color:"#B58451"}},"Create"),e("span",{style:{color:"#8E8F8B"}},"(")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#6C7834"}},"factory"),e("span",{style:{color:"#8E8F8B"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"["),e("span",{style:{color:"#B58451"}},"BookFactory"),e("span",{style:{color:"#AB5959"}},"::"),e("span",{style:{color:"#1C6B48"}},"class"),e("span",{style:{color:"#8E8F8B"}},","),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},"'create'"),e("span",{style:{color:"#8E8F8B"}},"],"),e("span",{style:{color:"#393A34"}}," ")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},")"),e("span",{style:{color:"#393A34"}},"]")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#AB5959"}},"class"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"Book"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"implements"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#B58451"}},"Sylius"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#B58451"}},"Component"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#B58451"}},"Resource"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#B58451"}},"Model"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#6C7834"}},"ResourceInterface")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"{")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"}")])])])],-1),oD={__name:"54",setup(s){const o={srcSequence:"./pages/05_resource_factories.md"};return F(O),(n,t)=>{const l=ge;return C(),M(Q,Z(Y(o)),{default:E(()=>[eD,R(l,fe({},{ranges:["all","15"]}),{default:E(()=>[sD]),_:1},16)]),_:1},16)}}},nD=N(oD,[["__file","/@slidev/slides/54.md"]]),tD=e("h1",null,"Providers",-1),lD=e("p",null,"Providers retrieve data from your persistence layer.",-1),rD={__name:"55",setup(s){const o={srcSequence:"./pages/06_providers.md"};return F(O),(n,t)=>{const l=Re;return C(),M(Q,Z(Y(o)),{default:E(()=>[tD,R(l,null,{default:E(()=>[lD]),_:1})]),_:1},16)}}},aD=N(rD,[["__file","/@slidev/slides/55.md"]]),cD=e("h1",null,"Default providers",-1),iD=e("p",null,[r("When your resource is a Doctrine entity, there’s a default provider "),e("code",null,"Sylius\\Resource\\Symfony\\Request\\State\\Provider"),r(" which is already configured to your operations.")],-1),pD=e("p",null,"As it uses the Doctrine repository configured on your resource, some default repository methods are used.",-1),uD=e("table",null,[e("thead",null,[e("tr",null,[e("th",null,"Operation"),e("th",null,"Repository method")])]),e("tbody",null,[e("tr",null,[e("td",null,"index"),e("td",null,"createPaginator")]),e("tr",null,[e("td",null,"show"),e("td",null,"findOneBy")]),e("tr",null,[e("td",null,"update"),e("td",null,"findOneBy")]),e("tr",null,[e("td",null,"delete"),e("td",null,"findOneBy")]),e("tr",null,[e("td",null,"bulk delete"),e("td",null,"findById")])])],-1),yD={__name:"56",setup(s){const o={srcSequence:"./pages/06_providers.md"};return F(O),(n,t)=>{const l=Re;return C(),M(Q,Z(Y(o)),{default:E(()=>[cD,R(l,null,{default:E(()=>[iD,pD,uD]),_:1})]),_:1},16)}}},dD=N(yD,[["__file","/@slidev/slides/56.md"]]),fD=e("h1",null,"Custom repository method",-1),mD=e("p",null,"You can customize the method to use.",-1),hD=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#758575"}},"// src/Entity/Customer.php")]),r(`
`),e("span",{class:"line"}),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#4D9375"}},"declare"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#D4976C"}},"strict_types"),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#6394BF"}},"1"),e("span",{style:{color:"#858585"}},");")]),r(`
`),e("span",{class:"line"}),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#4D9375"}},"namespace"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"App"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#A1B567"}},"Entity"),e("span",{style:{color:"#858585"}},";")]),r(`
`),e("span",{class:"line"}),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"#["),e("span",{style:{color:"#E0A569"}},"AsResource"),e("span",{style:{color:"#DBD7CA"}},"]")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"#["),e("span",{style:{color:"#E0A569"}},"Show"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#A1B567"}},"repositoryMethod"),e("span",{style:{color:"#858585"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},"'findOneByEmail'"),e("span",{style:{color:"#858585"}},")"),e("span",{style:{color:"#DBD7CA"}},"]")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#CB7676"}},"final"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"class"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"Customer"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"implements"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"ResourceInterface")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"{")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"    "),e("span",{style:{color:"#758575"}},"// [...]")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"}")])])]),e("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#A0ADA0"}},"// src/Entity/Customer.php")]),r(`
`),e("span",{class:"line"}),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#1C6B48"}},"declare"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#A65E2B"}},"strict_types"),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#296AA3"}},"1"),e("span",{style:{color:"#8E8F8B"}},");")]),r(`
`),e("span",{class:"line"}),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#1C6B48"}},"namespace"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"App"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#6C7834"}},"Entity"),e("span",{style:{color:"#8E8F8B"}},";")]),r(`
`),e("span",{class:"line"}),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"#["),e("span",{style:{color:"#B58451"}},"AsResource"),e("span",{style:{color:"#393A34"}},"]")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"#["),e("span",{style:{color:"#B58451"}},"Show"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#6C7834"}},"repositoryMethod"),e("span",{style:{color:"#8E8F8B"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},"'findOneByEmail'"),e("span",{style:{color:"#8E8F8B"}},")"),e("span",{style:{color:"#393A34"}},"]")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#AB5959"}},"final"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"class"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"Customer"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"implements"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"ResourceInterface")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"{")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"    "),e("span",{style:{color:"#A0ADA0"}},"// [...]")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"}")])])])],-1),_D={__name:"57",setup(s){const o={srcSequence:"./pages/06_providers.md"};return F(O),(n,t)=>{const l=ge,a=Re;return C(),M(Q,Z(Y(o)),{default:E(()=>[fD,R(a,null,{default:E(()=>[mD,R(l,fe({},{ranges:["all","8"]}),{default:E(()=>[hD]),_:1},16)]),_:1})]),_:1},16)}}},BD=N(_D,[["__file","/@slidev/slides/57.md"]]),AD=e("h1",null,"Custom repository arguments",-1),gD=e("p",null,"You can pass arguments to your repository method.",-1),vD=e("p",null,"3 variables are available:",-1),CD=e("ul",null,[e("li",null,[e("code",null,"request"),r(": to retrieve data from the request via "),e("code",null,"Symfony\\Component\\HttpFoundation\\Request")]),e("li",null,[e("code",null,"token"),r(": to retrieve data from the authentication token via "),e("code",null,"Symfony\\Component\\Security\\Core\\Authentication\\Token\\TokenInterface")]),e("li",null,[e("code",null,"user"),r(": to retrieve data from the logged-in user via "),e("code",null,"Symfony\\Component\\Security\\Core\\User\\UserInterface")])],-1),DD=e("p",null,[r("It uses the "),e("a",{href:"https://symfony.com/doc/current/components/expression_language.html",target:"_blank",rel:"noopener"},"Symfony expression language"),r(" component.")],-1),ED={__name:"58",setup(s){const o={srcSequence:"./pages/06_providers.md"};return F(O),(n,t)=>{const l=Re;return C(),M(Q,Z(Y(o)),{default:E(()=>[AD,R(l,null,{default:E(()=>[gD,vD,CD,DD]),_:1})]),_:1},16)}}},bD=N(ED,[["__file","/@slidev/slides/58.md"]]),kD=e("h1",null,"Custom repository arguments",-1),wD=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#758575"}},"// src/Entity/Customer.php")]),r(`
`),e("span",{class:"line"}),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#4D9375"}},"declare"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#D4976C"}},"strict_types"),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#6394BF"}},"1"),e("span",{style:{color:"#858585"}},");")]),r(`
`),e("span",{class:"line"}),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#4D9375"}},"namespace"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"App"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#A1B567"}},"Entity"),e("span",{style:{color:"#858585"}},";")]),r(`
`),e("span",{class:"line"}),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"#["),e("span",{style:{color:"#E0A569"}},"AsResource"),e("span",{style:{color:"#DBD7CA"}},"]")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"#["),e("span",{style:{color:"#E0A569"}},"Show"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#A1B567"}},"repositoryMethod"),e("span",{style:{color:"#858585"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},"'findOneByEmail'"),e("span",{style:{color:"#858585"}},","),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"repositoryArguments"),e("span",{style:{color:"#858585"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"["),e("span",{style:{color:"#C98A7D"}},"'email'"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"=>"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},`"request.attributes.get('email')"`),e("span",{style:{color:"#858585"}},"])"),e("span",{style:{color:"#DBD7CA"}},"]")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#CB7676"}},"final"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"class"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"Customer"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"implements"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"ResourceInterface")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"{")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"    "),e("span",{style:{color:"#758575"}},"// [...]")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"}")])])]),e("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#A0ADA0"}},"// src/Entity/Customer.php")]),r(`
`),e("span",{class:"line"}),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#1C6B48"}},"declare"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#A65E2B"}},"strict_types"),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#296AA3"}},"1"),e("span",{style:{color:"#8E8F8B"}},");")]),r(`
`),e("span",{class:"line"}),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#1C6B48"}},"namespace"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"App"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#6C7834"}},"Entity"),e("span",{style:{color:"#8E8F8B"}},";")]),r(`
`),e("span",{class:"line"}),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"#["),e("span",{style:{color:"#B58451"}},"AsResource"),e("span",{style:{color:"#393A34"}},"]")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"#["),e("span",{style:{color:"#B58451"}},"Show"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#6C7834"}},"repositoryMethod"),e("span",{style:{color:"#8E8F8B"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},"'findOneByEmail'"),e("span",{style:{color:"#8E8F8B"}},","),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"repositoryArguments"),e("span",{style:{color:"#8E8F8B"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"["),e("span",{style:{color:"#B56959"}},"'email'"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"=>"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},`"request.attributes.get('email')"`),e("span",{style:{color:"#8E8F8B"}},"])"),e("span",{style:{color:"#393A34"}},"]")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#AB5959"}},"final"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"class"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"Customer"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"implements"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"ResourceInterface")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"{")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"    "),e("span",{style:{color:"#A0ADA0"}},"// [...]")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"}")])])])],-1),SD={__name:"59",setup(s){const o={srcSequence:"./pages/06_providers.md"};return F(O),(n,t)=>{const l=ge;return C(),M(Q,Z(Y(o)),{default:E(()=>[kD,R(l,fe({},{ranges:["all","8"]}),{default:E(()=>[wD]),_:1},16)]),_:1},16)}}},RD=N(SD,[["__file","/@slidev/slides/59.md"]]),xD=e("h1",null,"Custom providers",-1),$D=e("p",null,"Custom providers are useful to customize your logic to retrieve data and for an advanced usage such as an hexagonal architecture.",-1),FD=e("p",null,[r("As an example, let’s configure a "),e("code",null,"BoardGameItemProvider"),r(" on a "),e("code",null,"BoardGameResource"),r(" which is not a Doctrine entity.")],-1),ID={__name:"60",setup(s){const o={srcSequence:"./pages/06_providers.md"};return F(O),(n,t)=>{const l=Re;return C(),M(Q,Z(Y(o)),{default:E(()=>[xD,R(l,null,{default:E(()=>[$D,FD]),_:1})]),_:1},16)}}},TD=N(ID,[["__file","/@slidev/slides/60.md"]]),MD=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#758575"}},"// src/BoardGameBlog/Infrastructure/Sylius/State/Provider/BoardGameItemProvider.php")]),r(`
`),e("span",{class:"line"}),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#4D9375"}},"declare"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#D4976C"}},"strict_types"),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#6394BF"}},"1"),e("span",{style:{color:"#858585"}},");")]),r(`
`),e("span",{class:"line"}),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#4D9375"}},"namespace"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"App"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#A1B567"}},"BoardGameBlog"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#A1B567"}},"Infrastructure"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#A1B567"}},"Sylius"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#A1B567"}},"State"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#A1B567"}},"Provider"),e("span",{style:{color:"#858585"}},";")]),r(`
`),e("span",{class:"line"}),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#CB7676"}},"final"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"class"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"BoardGameItemProvider"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"implements"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"ProviderInterface")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"{")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#CB7676"}},"public"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"function"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"__construct"),e("span",{style:{color:"#858585"}},"(")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#CB7676"}},"private"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"QueryBusInterface"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"$"),e("span",{style:{color:"#B8A965"}},"queryBus"),e("span",{style:{color:"#858585"}},",")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#858585"}},")"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"{")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#858585"}},"}")]),r(`
`),e("span",{class:"line"}),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#CB7676"}},"public"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"function"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"provide"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#E0A569"}},"Operation"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"$"),e("span",{style:{color:"#B8A965"}},"operation"),e("span",{style:{color:"#858585"}},","),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"Context"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"$"),e("span",{style:{color:"#B8A965"}},"context"),e("span",{style:{color:"#858585"}},")"),e("span",{style:{color:"#CB7676"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#4D9375"}},"object"),e("span",{style:{color:"#858585"}},"|"),e("span",{style:{color:"#4D9375"}},"iterable"),e("span",{style:{color:"#858585"}},"|"),e("span",{style:{color:"#4D9375"}},"null")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#858585"}},"{")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#858585"}},"$"),e("span",{style:{color:"#B8A965"}},"request"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"$"),e("span",{style:{color:"#B8A965"}},"context"),e("span",{style:{color:"#CB7676"}},"->"),e("span",{style:{color:"#A1B567"}},"get"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#E0A569"}},"RequestOption"),e("span",{style:{color:"#CB7676"}},"::"),e("span",{style:{color:"#4D9375"}},"class"),e("span",{style:{color:"#858585"}},")"),e("span",{style:{color:"#CB7676"}},"?->"),e("span",{style:{color:"#A1B567"}},"request"),e("span",{style:{color:"#858585"}},"();")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#E0A569"}},"Assert"),e("span",{style:{color:"#CB7676"}},"::"),e("span",{style:{color:"#A1B567"}},"notNull"),e("span",{style:{color:"#858585"}},"($"),e("span",{style:{color:"#B8A965"}},"request"),e("span",{style:{color:"#858585"}},");")]),r(`
`),e("span",{class:"line"}),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#858585"}},"$"),e("span",{style:{color:"#B8A965"}},"id"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#CB7676"}},"string"),e("span",{style:{color:"#858585"}},")"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"$"),e("span",{style:{color:"#B8A965"}},"request"),e("span",{style:{color:"#CB7676"}},"->"),e("span",{style:{color:"#B8A965"}},"attributes"),e("span",{style:{color:"#CB7676"}},"->"),e("span",{style:{color:"#A1B567"}},"get"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#C98A7D"}},"'id'"),e("span",{style:{color:"#858585"}},");")]),r(`
`),e("span",{class:"line"}),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#858585"}},"$"),e("span",{style:{color:"#B8A965"}},"model"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"$"),e("span",{style:{color:"#D4976C"}},"this"),e("span",{style:{color:"#CB7676"}},"->"),e("span",{style:{color:"#B8A965"}},"queryBus"),e("span",{style:{color:"#CB7676"}},"->"),e("span",{style:{color:"#A1B567"}},"ask"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#4D9375"}},"new"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"FindBoardGameQuery"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#4D9375"}},"new"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"BoardGameId"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#E0A569"}},"Uuid"),e("span",{style:{color:"#CB7676"}},"::"),e("span",{style:{color:"#A1B567"}},"fromString"),e("span",{style:{color:"#858585"}},"($"),e("span",{style:{color:"#B8A965"}},"id"),e("span",{style:{color:"#858585"}},"))));")]),r(`
`),e("span",{class:"line"}),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#4D9375"}},"return"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#D4976C"}},"null"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"!=="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"$"),e("span",{style:{color:"#B8A965"}},"model"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"?"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"BoardGameResource"),e("span",{style:{color:"#CB7676"}},"::"),e("span",{style:{color:"#A1B567"}},"fromModel"),e("span",{style:{color:"#858585"}},"($"),e("span",{style:{color:"#B8A965"}},"model"),e("span",{style:{color:"#858585"}},")"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#D4976C"}},"null"),e("span",{style:{color:"#858585"}},";")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#858585"}},"}")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"}")])])]),e("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#A0ADA0"}},"// src/BoardGameBlog/Infrastructure/Sylius/State/Provider/BoardGameItemProvider.php")]),r(`
`),e("span",{class:"line"}),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#1C6B48"}},"declare"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#A65E2B"}},"strict_types"),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#296AA3"}},"1"),e("span",{style:{color:"#8E8F8B"}},");")]),r(`
`),e("span",{class:"line"}),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#1C6B48"}},"namespace"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"App"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#6C7834"}},"BoardGameBlog"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#6C7834"}},"Infrastructure"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#6C7834"}},"Sylius"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#6C7834"}},"State"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#6C7834"}},"Provider"),e("span",{style:{color:"#8E8F8B"}},";")]),r(`
`),e("span",{class:"line"}),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#AB5959"}},"final"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"class"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"BoardGameItemProvider"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"implements"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"ProviderInterface")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"{")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#AB5959"}},"public"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"function"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B58451"}},"__construct"),e("span",{style:{color:"#8E8F8B"}},"(")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#AB5959"}},"private"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B58451"}},"QueryBusInterface"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"$"),e("span",{style:{color:"#8C862B"}},"queryBus"),e("span",{style:{color:"#8E8F8B"}},",")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#8E8F8B"}},")"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"{")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#8E8F8B"}},"}")]),r(`
`),e("span",{class:"line"}),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#AB5959"}},"public"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"function"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"provide"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#B58451"}},"Operation"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"$"),e("span",{style:{color:"#8C862B"}},"operation"),e("span",{style:{color:"#8E8F8B"}},","),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B58451"}},"Context"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"$"),e("span",{style:{color:"#8C862B"}},"context"),e("span",{style:{color:"#8E8F8B"}},")"),e("span",{style:{color:"#AB5959"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#1C6B48"}},"object"),e("span",{style:{color:"#8E8F8B"}},"|"),e("span",{style:{color:"#1C6B48"}},"iterable"),e("span",{style:{color:"#8E8F8B"}},"|"),e("span",{style:{color:"#1C6B48"}},"null")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#8E8F8B"}},"{")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#8E8F8B"}},"$"),e("span",{style:{color:"#8C862B"}},"request"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"$"),e("span",{style:{color:"#8C862B"}},"context"),e("span",{style:{color:"#AB5959"}},"->"),e("span",{style:{color:"#6C7834"}},"get"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#B58451"}},"RequestOption"),e("span",{style:{color:"#AB5959"}},"::"),e("span",{style:{color:"#1C6B48"}},"class"),e("span",{style:{color:"#8E8F8B"}},")"),e("span",{style:{color:"#AB5959"}},"?->"),e("span",{style:{color:"#6C7834"}},"request"),e("span",{style:{color:"#8E8F8B"}},"();")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#B58451"}},"Assert"),e("span",{style:{color:"#AB5959"}},"::"),e("span",{style:{color:"#6C7834"}},"notNull"),e("span",{style:{color:"#8E8F8B"}},"($"),e("span",{style:{color:"#8C862B"}},"request"),e("span",{style:{color:"#8E8F8B"}},");")]),r(`
`),e("span",{class:"line"}),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#8E8F8B"}},"$"),e("span",{style:{color:"#8C862B"}},"id"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#AB5959"}},"string"),e("span",{style:{color:"#8E8F8B"}},")"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"$"),e("span",{style:{color:"#8C862B"}},"request"),e("span",{style:{color:"#AB5959"}},"->"),e("span",{style:{color:"#8C862B"}},"attributes"),e("span",{style:{color:"#AB5959"}},"->"),e("span",{style:{color:"#6C7834"}},"get"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#B56959"}},"'id'"),e("span",{style:{color:"#8E8F8B"}},");")]),r(`
`),e("span",{class:"line"}),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#8E8F8B"}},"$"),e("span",{style:{color:"#8C862B"}},"model"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"$"),e("span",{style:{color:"#A65E2B"}},"this"),e("span",{style:{color:"#AB5959"}},"->"),e("span",{style:{color:"#8C862B"}},"queryBus"),e("span",{style:{color:"#AB5959"}},"->"),e("span",{style:{color:"#6C7834"}},"ask"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#1C6B48"}},"new"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B58451"}},"FindBoardGameQuery"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#1C6B48"}},"new"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B58451"}},"BoardGameId"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#B58451"}},"Uuid"),e("span",{style:{color:"#AB5959"}},"::"),e("span",{style:{color:"#6C7834"}},"fromString"),e("span",{style:{color:"#8E8F8B"}},"($"),e("span",{style:{color:"#8C862B"}},"id"),e("span",{style:{color:"#8E8F8B"}},"))));")]),r(`
`),e("span",{class:"line"}),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#1C6B48"}},"return"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#A65E2B"}},"null"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"!=="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"$"),e("span",{style:{color:"#8C862B"}},"model"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"?"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B58451"}},"BoardGameResource"),e("span",{style:{color:"#AB5959"}},"::"),e("span",{style:{color:"#6C7834"}},"fromModel"),e("span",{style:{color:"#8E8F8B"}},"($"),e("span",{style:{color:"#8C862B"}},"model"),e("span",{style:{color:"#8E8F8B"}},")"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#A65E2B"}},"null"),e("span",{style:{color:"#8E8F8B"}},";")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#8E8F8B"}},"}")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"}")])])])],-1),PD={__name:"61",setup(s){const o={srcSequence:"./pages/06_providers.md"};return F(O),(n,t)=>{const l=ge;return C(),M(Q,Z(Y(o)),{default:E(()=>[R(l,fe({},{ranges:["all","7","7,5","10","14","16-17","19","21","23"]}),{default:E(()=>[MD]),_:1},16)]),_:1},16)}}},OD=N(PD,[["__file","/@slidev/slides/61.md"]]),LD=e("h1",null,"Use this provider on your operation.",-1),ND=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#758575"}},"// src/BoardGameBlog/Infrastructure/Sylius/Resource/BoardGameResource.php")]),r(`
`),e("span",{class:"line"}),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#4D9375"}},"declare"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#D4976C"}},"strict_types"),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#6394BF"}},"1"),e("span",{style:{color:"#858585"}},");")]),r(`
`),e("span",{class:"line"}),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#4D9375"}},"namespace"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"App"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#A1B567"}},"BoardGameBlog"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#A1B567"}},"Infrastructure"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#A1B567"}},"Sylius"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#A1B567"}},"Resource"),e("span",{style:{color:"#858585"}},";")]),r(`
`),e("span",{class:"line"}),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#4D9375"}},"use"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"App"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#E0A569"}},"BoardGameBlog"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#E0A569"}},"Infrastructure"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#E0A569"}},"Sylius"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#E0A569"}},"State"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#E0A569"}},"Provider"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#E0A569"}},"BoardGameItemProvider"),e("span",{style:{color:"#858585"}},";")]),r(`
`),e("span",{class:"line"}),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"#["),e("span",{style:{color:"#E0A569"}},"AsResource"),e("span",{style:{color:"#DBD7CA"}},"]")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"#["),e("span",{style:{color:"#E0A569"}},"Show"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#A1B567"}},"provider"),e("span",{style:{color:"#858585"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"BoardGameItemProvider"),e("span",{style:{color:"#CB7676"}},"::"),e("span",{style:{color:"#4D9375"}},"class"),e("span",{style:{color:"#858585"}},")"),e("span",{style:{color:"#DBD7CA"}},"]")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#CB7676"}},"final"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"class"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"BoardGameResource"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"implements"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"ResourceInterface")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"{")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"    "),e("span",{style:{color:"#758575"}},"// [...]")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"}")])])]),e("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#A0ADA0"}},"// src/BoardGameBlog/Infrastructure/Sylius/Resource/BoardGameResource.php")]),r(`
`),e("span",{class:"line"}),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#1C6B48"}},"declare"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#A65E2B"}},"strict_types"),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#296AA3"}},"1"),e("span",{style:{color:"#8E8F8B"}},");")]),r(`
`),e("span",{class:"line"}),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#1C6B48"}},"namespace"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"App"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#6C7834"}},"BoardGameBlog"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#6C7834"}},"Infrastructure"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#6C7834"}},"Sylius"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#6C7834"}},"Resource"),e("span",{style:{color:"#8E8F8B"}},";")]),r(`
`),e("span",{class:"line"}),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#1C6B48"}},"use"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B58451"}},"App"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#B58451"}},"BoardGameBlog"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#B58451"}},"Infrastructure"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#B58451"}},"Sylius"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#B58451"}},"State"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#B58451"}},"Provider"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#B58451"}},"BoardGameItemProvider"),e("span",{style:{color:"#8E8F8B"}},";")]),r(`
`),e("span",{class:"line"}),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"#["),e("span",{style:{color:"#B58451"}},"AsResource"),e("span",{style:{color:"#393A34"}},"]")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"#["),e("span",{style:{color:"#B58451"}},"Show"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#6C7834"}},"provider"),e("span",{style:{color:"#8E8F8B"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B58451"}},"BoardGameItemProvider"),e("span",{style:{color:"#AB5959"}},"::"),e("span",{style:{color:"#1C6B48"}},"class"),e("span",{style:{color:"#8E8F8B"}},")"),e("span",{style:{color:"#393A34"}},"]")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#AB5959"}},"final"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"class"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"BoardGameResource"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"implements"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"ResourceInterface")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"{")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"    "),e("span",{style:{color:"#A0ADA0"}},"// [...]")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"}")])])])],-1),qD={__name:"62",setup(s){const o={srcSequence:"./pages/06_providers.md"};return F(O),(n,t)=>{const l=ge;return C(),M(Q,Z(Y(o)),{default:E(()=>[LD,R(l,fe({},{ranges:["all","10","10,7"]}),{default:E(()=>[ND]),_:1},16)]),_:1},16)}}},HD=N(qD,[["__file","/@slidev/slides/62.md"]]),UD=e("h1",null,"Processors",-1),VD=e("p",null,"Processors process data: send an email, persist to storage, add to queue etc.",-1),jD={__name:"63",setup(s){const o={srcSequence:"./pages/07_processors.md"};return F(O),(n,t)=>{const l=Re;return C(),M(Q,Z(Y(o)),{default:E(()=>[UD,R(l,null,{default:E(()=>[VD]),_:1})]),_:1},16)}}},GD=N(jD,[["__file","/@slidev/slides/63.md"]]),WD=e("h1",null,"Default processors",-1),zD=e("p",null,"When your resource is a Doctrine entity, there are default processors which are already configured to your operations.",-1),KD=e("p",null,"As it uses the Doctrine repository configured on your resource, it will automatically flush data for you.",-1),YD=e("table",null,[e("thead",null,[e("tr",null,[e("th",null,"Operation"),e("th",null,"Processor")])]),e("tbody",null,[e("tr",null,[e("td",null,"create"),e("td",null,"Sylius\\Resource\\Doctrine\\Common\\State\\PersistProcessor")]),e("tr",null,[e("td",null,"update"),e("td",null,"Sylius\\Resource\\Doctrine\\Common\\State\\PersistProcessor")]),e("tr",null,[e("td",null,"delete"),e("td",null,"Sylius\\Resource\\Doctrine\\Common\\State\\RemoveProcessor")]),e("tr",null,[e("td",null,"bulk delete"),e("td",null,"Sylius\\Resource\\Doctrine\\Common\\State\\RemoveProcessor")])])],-1),ZD={__name:"64",setup(s){const o={srcSequence:"./pages/07_processors.md"};return F(O),(n,t)=>{const l=Re;return C(),M(Q,Z(Y(o)),{default:E(()=>[WD,R(l,null,{default:E(()=>[zD,KD,YD]),_:1})]),_:1},16)}}},QD=N(ZD,[["__file","/@slidev/slides/64.md"]]),JD=e("h1",null,"Custom processors",-1),XD=e("p",null,"Custom processors are useful to customize your logic to send an email, persist data to storage, add to queue and for an advanced usage such as an hexagonal architecture.",-1),eE={__name:"65",setup(s){const o={srcSequence:"./pages/07_processors.md"};return F(O),(n,t)=>{const l=Re;return C(),M(Q,Z(Y(o)),{default:E(()=>[JD,R(l,null,{default:E(()=>[XD]),_:1})]),_:1},16)}}},sE=N(eE,[["__file","/@slidev/slides/65.md"]]),oE=e("h1",null,"Example #1: Sending an email after persisting data",-1),nE=e("p",null,"As an example, send an email after customer registration",-1),tE={__name:"66",setup(s){const o={srcSequence:"./pages/07_processors.md"};return F(O),(n,t)=>(C(),M(Q,Z(Y(o)),{default:E(()=>[oE,nE]),_:1},16))}},lE=N(tE,[["__file","/@slidev/slides/66.md"]]),rE=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#758575"}},"// src/Sylius/State/Processor/CreateCustomerProcessor.php")]),r(`
`),e("span",{class:"line"}),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#4D9375"}},"namespace"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"App"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#A1B567"}},"Sylius"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#A1B567"}},"State"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#A1B567"}},"Processor"),e("span",{style:{color:"#858585"}},";")]),r(`
`),e("span",{class:"line"}),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#4D9375"}},"use"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"Sylius"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#E0A569"}},"Component"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#E0A569"}},"Customer"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#E0A569"}},"Model"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#E0A569"}},"CustomerInterface"),e("span",{style:{color:"#858585"}},";")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#4D9375"}},"use"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"Sylius"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#E0A569"}},"Resource"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#E0A569"}},"Doctrine"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#E0A569"}},"Common"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#E0A569"}},"State"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#E0A569"}},"PersistProcessor"),e("span",{style:{color:"#858585"}},";")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#4D9375"}},"use"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"Sylius"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#E0A569"}},"Resource"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#E0A569"}},"State"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#E0A569"}},"ProcessorInterface"),e("span",{style:{color:"#858585"}},";")]),r(`
`),e("span",{class:"line"}),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#CB7676"}},"final"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"class"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"CreateCustomerProcessor"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"implements"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"ProcessorInterface")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"{")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#CB7676"}},"public"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"function"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"__construct"),e("span",{style:{color:"#858585"}},"(")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#CB7676"}},"private"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"CommandBusInterface"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"$"),e("span",{style:{color:"#B8A965"}},"commandBus"),e("span",{style:{color:"#858585"}},",")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#CB7676"}},"private"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"PersistProcessor"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"$"),e("span",{style:{color:"#B8A965"}},"decorated"),e("span",{style:{color:"#858585"}},",")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#858585"}},")"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"{")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#858585"}},"}")]),r(`
`),e("span",{class:"line"}),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#CB7676"}},"public"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"function"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"process"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#4D9375"}},"mixed"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"$"),e("span",{style:{color:"#B8A965"}},"data"),e("span",{style:{color:"#858585"}},","),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"Operation"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"$"),e("span",{style:{color:"#B8A965"}},"operation"),e("span",{style:{color:"#858585"}},","),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"Context"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"$"),e("span",{style:{color:"#B8A965"}},"context"),e("span",{style:{color:"#858585"}},")"),e("span",{style:{color:"#CB7676"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#4D9375"}},"mixed")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#858585"}},"{")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#E0A569"}},"Assert"),e("span",{style:{color:"#CB7676"}},"::"),e("span",{style:{color:"#A1B567"}},"isInstanceOf"),e("span",{style:{color:"#858585"}},"($"),e("span",{style:{color:"#B8A965"}},"data"),e("span",{style:{color:"#858585"}},","),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"Customer"),e("span",{style:{color:"#CB7676"}},"::"),e("span",{style:{color:"#4D9375"}},"class"),e("span",{style:{color:"#858585"}},");")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        ")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#858585"}},"$"),e("span",{style:{color:"#D4976C"}},"this"),e("span",{style:{color:"#CB7676"}},"->"),e("span",{style:{color:"#B8A965"}},"decorated"),e("span",{style:{color:"#CB7676"}},"->"),e("span",{style:{color:"#A1B567"}},"process"),e("span",{style:{color:"#858585"}},"($"),e("span",{style:{color:"#B8A965"}},"data"),e("span",{style:{color:"#858585"}},","),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"$"),e("span",{style:{color:"#B8A965"}},"operation"),e("span",{style:{color:"#858585"}},","),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"$"),e("span",{style:{color:"#B8A965"}},"context"),e("span",{style:{color:"#858585"}},");")]),r(`
`),e("span",{class:"line"}),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"        "),e("span",{style:{color:"#758575"}},"// Here your logic to send a registration email.")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#858585"}},"$"),e("span",{style:{color:"#D4976C"}},"this"),e("span",{style:{color:"#CB7676"}},"->"),e("span",{style:{color:"#B8A965"}},"commandBus"),e("span",{style:{color:"#CB7676"}},"->"),e("span",{style:{color:"#A1B567"}},"dispatch"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#4D9375"}},"new"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"SendRegistrationEmailCommand"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#4D9375"}},"new"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"CustomerId"),e("span",{style:{color:"#858585"}},"($"),e("span",{style:{color:"#B8A965"}},"data"),e("span",{style:{color:"#CB7676"}},"->"),e("span",{style:{color:"#B8A965"}},"id"),e("span",{style:{color:"#858585"}},")));")]),r(`
`),e("span",{class:"line"}),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#4D9375"}},"return"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#D4976C"}},"null"),e("span",{style:{color:"#858585"}},";")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#858585"}},"}")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"}")])])]),e("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#A0ADA0"}},"// src/Sylius/State/Processor/CreateCustomerProcessor.php")]),r(`
`),e("span",{class:"line"}),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#1C6B48"}},"namespace"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"App"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#6C7834"}},"Sylius"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#6C7834"}},"State"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#6C7834"}},"Processor"),e("span",{style:{color:"#8E8F8B"}},";")]),r(`
`),e("span",{class:"line"}),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#1C6B48"}},"use"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B58451"}},"Sylius"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#B58451"}},"Component"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#B58451"}},"Customer"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#B58451"}},"Model"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#B58451"}},"CustomerInterface"),e("span",{style:{color:"#8E8F8B"}},";")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#1C6B48"}},"use"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B58451"}},"Sylius"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#B58451"}},"Resource"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#B58451"}},"Doctrine"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#B58451"}},"Common"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#B58451"}},"State"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#B58451"}},"PersistProcessor"),e("span",{style:{color:"#8E8F8B"}},";")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#1C6B48"}},"use"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B58451"}},"Sylius"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#B58451"}},"Resource"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#B58451"}},"State"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#B58451"}},"ProcessorInterface"),e("span",{style:{color:"#8E8F8B"}},";")]),r(`
`),e("span",{class:"line"}),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#AB5959"}},"final"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"class"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"CreateCustomerProcessor"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"implements"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"ProcessorInterface")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"{")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#AB5959"}},"public"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"function"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B58451"}},"__construct"),e("span",{style:{color:"#8E8F8B"}},"(")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#AB5959"}},"private"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B58451"}},"CommandBusInterface"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"$"),e("span",{style:{color:"#8C862B"}},"commandBus"),e("span",{style:{color:"#8E8F8B"}},",")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#AB5959"}},"private"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B58451"}},"PersistProcessor"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"$"),e("span",{style:{color:"#8C862B"}},"decorated"),e("span",{style:{color:"#8E8F8B"}},",")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#8E8F8B"}},")"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"{")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#8E8F8B"}},"}")]),r(`
`),e("span",{class:"line"}),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#AB5959"}},"public"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"function"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"process"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#1C6B48"}},"mixed"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"$"),e("span",{style:{color:"#8C862B"}},"data"),e("span",{style:{color:"#8E8F8B"}},","),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B58451"}},"Operation"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"$"),e("span",{style:{color:"#8C862B"}},"operation"),e("span",{style:{color:"#8E8F8B"}},","),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B58451"}},"Context"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"$"),e("span",{style:{color:"#8C862B"}},"context"),e("span",{style:{color:"#8E8F8B"}},")"),e("span",{style:{color:"#AB5959"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#1C6B48"}},"mixed")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#8E8F8B"}},"{")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#B58451"}},"Assert"),e("span",{style:{color:"#AB5959"}},"::"),e("span",{style:{color:"#6C7834"}},"isInstanceOf"),e("span",{style:{color:"#8E8F8B"}},"($"),e("span",{style:{color:"#8C862B"}},"data"),e("span",{style:{color:"#8E8F8B"}},","),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B58451"}},"Customer"),e("span",{style:{color:"#AB5959"}},"::"),e("span",{style:{color:"#1C6B48"}},"class"),e("span",{style:{color:"#8E8F8B"}},");")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        ")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#8E8F8B"}},"$"),e("span",{style:{color:"#A65E2B"}},"this"),e("span",{style:{color:"#AB5959"}},"->"),e("span",{style:{color:"#8C862B"}},"decorated"),e("span",{style:{color:"#AB5959"}},"->"),e("span",{style:{color:"#6C7834"}},"process"),e("span",{style:{color:"#8E8F8B"}},"($"),e("span",{style:{color:"#8C862B"}},"data"),e("span",{style:{color:"#8E8F8B"}},","),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"$"),e("span",{style:{color:"#8C862B"}},"operation"),e("span",{style:{color:"#8E8F8B"}},","),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"$"),e("span",{style:{color:"#8C862B"}},"context"),e("span",{style:{color:"#8E8F8B"}},");")]),r(`
`),e("span",{class:"line"}),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"        "),e("span",{style:{color:"#A0ADA0"}},"// Here your logic to send a registration email.")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#8E8F8B"}},"$"),e("span",{style:{color:"#A65E2B"}},"this"),e("span",{style:{color:"#AB5959"}},"->"),e("span",{style:{color:"#8C862B"}},"commandBus"),e("span",{style:{color:"#AB5959"}},"->"),e("span",{style:{color:"#6C7834"}},"dispatch"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#1C6B48"}},"new"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B58451"}},"SendRegistrationEmailCommand"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#1C6B48"}},"new"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B58451"}},"CustomerId"),e("span",{style:{color:"#8E8F8B"}},"($"),e("span",{style:{color:"#8C862B"}},"data"),e("span",{style:{color:"#AB5959"}},"->"),e("span",{style:{color:"#8C862B"}},"id"),e("span",{style:{color:"#8E8F8B"}},")));")]),r(`
`),e("span",{class:"line"}),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#1C6B48"}},"return"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#A65E2B"}},"null"),e("span",{style:{color:"#8E8F8B"}},";")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#8E8F8B"}},"}")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"}")])])])],-1),aE={__name:"67",setup(s){const o={srcSequence:"./pages/07_processors.md"};return F(O),(n,t)=>{const l=ge;return C(),M(Q,Z(Y(o)),{default:E(()=>[R(l,fe({},{ranges:["all","9","12-13","17","19","21","23-24","26"]}),{default:E(()=>[rE]),_:1},16)]),_:1},16)}}},cE=N(aE,[["__file","/@slidev/slides/67.md"]]),iE=e("h1",null,"Use this processor on your operation.",-1),pE=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#758575"}},"// src/Entity/Customer.php")]),r(`
`),e("span",{class:"line"}),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#4D9375"}},"namespace"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"App"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#A1B567"}},"Entity"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#A1B567"}},"Customer"),e("span",{style:{color:"#858585"}},";")]),r(`
`),e("span",{class:"line"}),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#4D9375"}},"use"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"App"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#E0A569"}},"Sylius"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#E0A569"}},"State"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#E0A569"}},"Processor"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#E0A569"}},"CreateCustomerProcessor"),e("span",{style:{color:"#858585"}},";")]),r(`
`),e("span",{class:"line"}),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"#["),e("span",{style:{color:"#E0A569"}},"AsResource"),e("span",{style:{color:"#DBD7CA"}},"]")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"#["),e("span",{style:{color:"#E0A569"}},"Create"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#A1B567"}},"processor"),e("span",{style:{color:"#858585"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"CreateCustomerProcessor"),e("span",{style:{color:"#CB7676"}},"::"),e("span",{style:{color:"#4D9375"}},"class"),e("span",{style:{color:"#858585"}},")"),e("span",{style:{color:"#DBD7CA"}},"]")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#CB7676"}},"final"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"class"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"BoardGameResource"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"implements"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"ResourceInterface")])])]),e("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#A0ADA0"}},"// src/Entity/Customer.php")]),r(`
`),e("span",{class:"line"}),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#1C6B48"}},"namespace"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"App"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#6C7834"}},"Entity"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#6C7834"}},"Customer"),e("span",{style:{color:"#8E8F8B"}},";")]),r(`
`),e("span",{class:"line"}),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#1C6B48"}},"use"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B58451"}},"App"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#B58451"}},"Sylius"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#B58451"}},"State"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#B58451"}},"Processor"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#B58451"}},"CreateCustomerProcessor"),e("span",{style:{color:"#8E8F8B"}},";")]),r(`
`),e("span",{class:"line"}),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"#["),e("span",{style:{color:"#B58451"}},"AsResource"),e("span",{style:{color:"#393A34"}},"]")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"#["),e("span",{style:{color:"#B58451"}},"Create"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#6C7834"}},"processor"),e("span",{style:{color:"#8E8F8B"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B58451"}},"CreateCustomerProcessor"),e("span",{style:{color:"#AB5959"}},"::"),e("span",{style:{color:"#1C6B48"}},"class"),e("span",{style:{color:"#8E8F8B"}},")"),e("span",{style:{color:"#393A34"}},"]")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#AB5959"}},"final"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"class"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"BoardGameResource"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"implements"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"ResourceInterface")])])])],-1),uE={__name:"68",setup(s){const o={srcSequence:"./pages/07_processors.md"};return F(O),(n,t)=>{const l=ge;return C(),M(Q,Z(Y(o)),{default:E(()=>[iE,R(l,fe({},{ranges:["all","8","8,5"]}),{default:E(()=>[pE]),_:1},16)]),_:1},16)}}},yE=N(uE,[["__file","/@slidev/slides/68.md"]]),dE=e("h1",null,"Example #2: Use a custom delete processor",-1),fE=e("p",null,[r("As another example, let’s configure a "),e("code",null,"DeleteBoardGameProcessor"),r(" on a "),e("code",null,"BoardGameResource"),r(" which is not a Doctrine entity.")],-1),mE={__name:"69",setup(s){const o={srcSequence:"./pages/07_processors.md"};return F(O),(n,t)=>{const l=Re;return C(),M(Q,Z(Y(o)),{default:E(()=>[dE,R(l,null,{default:E(()=>[fE]),_:1})]),_:1},16)}}},hE=N(mE,[["__file","/@slidev/slides/69.md"]]),_E=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#758575"}},"// src/BoardGameBlog/Infrastructure/Sylius/State/Processor/DeleteBoardGameProcessor.php")]),r(`
`),e("span",{class:"line"}),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#4D9375"}},"namespace"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"App"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#A1B567"}},"BoardGameBlog"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#A1B567"}},"Infrastructure"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#A1B567"}},"Sylius"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#A1B567"}},"State"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#A1B567"}},"Processor"),e("span",{style:{color:"#858585"}},";")]),r(`
`),e("span",{class:"line"}),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#CB7676"}},"final"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"class"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"DeleteBoardGameProcessor"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"implements"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"ProcessorInterface")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"{")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#CB7676"}},"public"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"function"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"__construct"),e("span",{style:{color:"#858585"}},"(")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#CB7676"}},"private"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"CommandBusInterface"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"$"),e("span",{style:{color:"#B8A965"}},"commandBus"),e("span",{style:{color:"#858585"}},",")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#858585"}},")"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"{")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#858585"}},"}")]),r(`
`),e("span",{class:"line"}),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#CB7676"}},"public"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"function"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"process"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#4D9375"}},"mixed"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"$"),e("span",{style:{color:"#B8A965"}},"data"),e("span",{style:{color:"#858585"}},","),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"Operation"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"$"),e("span",{style:{color:"#B8A965"}},"operation"),e("span",{style:{color:"#858585"}},","),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"Context"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"$"),e("span",{style:{color:"#B8A965"}},"context"),e("span",{style:{color:"#858585"}},")"),e("span",{style:{color:"#CB7676"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#4D9375"}},"mixed")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#858585"}},"{")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#E0A569"}},"Assert"),e("span",{style:{color:"#CB7676"}},"::"),e("span",{style:{color:"#A1B567"}},"isInstanceOf"),e("span",{style:{color:"#858585"}},"($"),e("span",{style:{color:"#B8A965"}},"data"),e("span",{style:{color:"#858585"}},","),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"BoardGameResource"),e("span",{style:{color:"#CB7676"}},"::"),e("span",{style:{color:"#4D9375"}},"class"),e("span",{style:{color:"#858585"}},");")]),r(`
`),e("span",{class:"line"}),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#858585"}},"$"),e("span",{style:{color:"#D4976C"}},"this"),e("span",{style:{color:"#CB7676"}},"->"),e("span",{style:{color:"#B8A965"}},"commandBus"),e("span",{style:{color:"#CB7676"}},"->"),e("span",{style:{color:"#A1B567"}},"dispatch"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#4D9375"}},"new"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"DeleteBoardGameCommand"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#4D9375"}},"new"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"BoardGameId"),e("span",{style:{color:"#858585"}},"($"),e("span",{style:{color:"#B8A965"}},"data"),e("span",{style:{color:"#CB7676"}},"->"),e("span",{style:{color:"#B8A965"}},"id"),e("span",{style:{color:"#858585"}},")));")]),r(`
`),e("span",{class:"line"}),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#4D9375"}},"return"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#D4976C"}},"null"),e("span",{style:{color:"#858585"}},";")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#858585"}},"}")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"}")])])]),e("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#A0ADA0"}},"// src/BoardGameBlog/Infrastructure/Sylius/State/Processor/DeleteBoardGameProcessor.php")]),r(`
`),e("span",{class:"line"}),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#1C6B48"}},"namespace"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"App"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#6C7834"}},"BoardGameBlog"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#6C7834"}},"Infrastructure"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#6C7834"}},"Sylius"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#6C7834"}},"State"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#6C7834"}},"Processor"),e("span",{style:{color:"#8E8F8B"}},";")]),r(`
`),e("span",{class:"line"}),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#AB5959"}},"final"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"class"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"DeleteBoardGameProcessor"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"implements"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"ProcessorInterface")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"{")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#AB5959"}},"public"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"function"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B58451"}},"__construct"),e("span",{style:{color:"#8E8F8B"}},"(")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#AB5959"}},"private"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B58451"}},"CommandBusInterface"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"$"),e("span",{style:{color:"#8C862B"}},"commandBus"),e("span",{style:{color:"#8E8F8B"}},",")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#8E8F8B"}},")"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"{")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#8E8F8B"}},"}")]),r(`
`),e("span",{class:"line"}),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#AB5959"}},"public"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"function"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"process"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#1C6B48"}},"mixed"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"$"),e("span",{style:{color:"#8C862B"}},"data"),e("span",{style:{color:"#8E8F8B"}},","),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B58451"}},"Operation"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"$"),e("span",{style:{color:"#8C862B"}},"operation"),e("span",{style:{color:"#8E8F8B"}},","),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B58451"}},"Context"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"$"),e("span",{style:{color:"#8C862B"}},"context"),e("span",{style:{color:"#8E8F8B"}},")"),e("span",{style:{color:"#AB5959"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#1C6B48"}},"mixed")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#8E8F8B"}},"{")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#B58451"}},"Assert"),e("span",{style:{color:"#AB5959"}},"::"),e("span",{style:{color:"#6C7834"}},"isInstanceOf"),e("span",{style:{color:"#8E8F8B"}},"($"),e("span",{style:{color:"#8C862B"}},"data"),e("span",{style:{color:"#8E8F8B"}},","),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B58451"}},"BoardGameResource"),e("span",{style:{color:"#AB5959"}},"::"),e("span",{style:{color:"#1C6B48"}},"class"),e("span",{style:{color:"#8E8F8B"}},");")]),r(`
`),e("span",{class:"line"}),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#8E8F8B"}},"$"),e("span",{style:{color:"#A65E2B"}},"this"),e("span",{style:{color:"#AB5959"}},"->"),e("span",{style:{color:"#8C862B"}},"commandBus"),e("span",{style:{color:"#AB5959"}},"->"),e("span",{style:{color:"#6C7834"}},"dispatch"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#1C6B48"}},"new"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B58451"}},"DeleteBoardGameCommand"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#1C6B48"}},"new"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B58451"}},"BoardGameId"),e("span",{style:{color:"#8E8F8B"}},"($"),e("span",{style:{color:"#8C862B"}},"data"),e("span",{style:{color:"#AB5959"}},"->"),e("span",{style:{color:"#8C862B"}},"id"),e("span",{style:{color:"#8E8F8B"}},")));")]),r(`
`),e("span",{class:"line"}),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#1C6B48"}},"return"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#A65E2B"}},"null"),e("span",{style:{color:"#8E8F8B"}},";")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#8E8F8B"}},"}")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"}")])])])],-1),BE={__name:"70",setup(s){const o={srcSequence:"./pages/07_processors.md"};return F(O),(n,t)=>{const l=ge;return C(),M(Q,Z(Y(o)),{default:E(()=>[R(l,fe({},{ranges:["all","12","14","16"]}),{default:E(()=>[_E]),_:1},16)]),_:1},16)}}},AE=N(BE,[["__file","/@slidev/slides/70.md"]]),gE=e("h1",null,"Use this processor on your operation.",-1),vE=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#758575"}},"// src/BoardGameBlog/Infrastructure/Sylius/Resource/BoardGameResource.php")]),r(`
`),e("span",{class:"line"}),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#4D9375"}},"namespace"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"App"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#A1B567"}},"BoardGameBlog"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#A1B567"}},"Infrastructure"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#A1B567"}},"Sylius"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#A1B567"}},"Resource"),e("span",{style:{color:"#858585"}},";")]),r(`
`),e("span",{class:"line"}),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"#["),e("span",{style:{color:"#E0A569"}},"AsResource"),e("span",{style:{color:"#858585"}},"(")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#A1B567"}},"alias"),e("span",{style:{color:"#858585"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},"'app.board_game'"),e("span",{style:{color:"#858585"}},",")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#A1B567"}},"section"),e("span",{style:{color:"#858585"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},"'admin'"),e("span",{style:{color:"#858585"}},",")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#A1B567"}},"formType"),e("span",{style:{color:"#858585"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"BoardGameType"),e("span",{style:{color:"#CB7676"}},"::"),e("span",{style:{color:"#4D9375"}},"class"),e("span",{style:{color:"#858585"}},",")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#A1B567"}},"templatesDir"),e("span",{style:{color:"#858585"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},"'crud'"),e("span",{style:{color:"#858585"}},",")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#A1B567"}},"routePrefix"),e("span",{style:{color:"#858585"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},"'/admin'"),e("span",{style:{color:"#858585"}},",")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},")"),e("span",{style:{color:"#DBD7CA"}},"]")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"#["),e("span",{style:{color:"#E0A569"}},"Delete"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#A1B567"}},"processor"),e("span",{style:{color:"#858585"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"DeleteBoardGameProcessor"),e("span",{style:{color:"#CB7676"}},"::"),e("span",{style:{color:"#4D9375"}},"class"),e("span",{style:{color:"#858585"}},")"),e("span",{style:{color:"#DBD7CA"}},"]")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#CB7676"}},"final"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"class"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"BoardGameResource"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"implements"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"ResourceInterface")])])]),e("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#A0ADA0"}},"// src/BoardGameBlog/Infrastructure/Sylius/Resource/BoardGameResource.php")]),r(`
`),e("span",{class:"line"}),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#1C6B48"}},"namespace"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"App"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#6C7834"}},"BoardGameBlog"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#6C7834"}},"Infrastructure"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#6C7834"}},"Sylius"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#6C7834"}},"Resource"),e("span",{style:{color:"#8E8F8B"}},";")]),r(`
`),e("span",{class:"line"}),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"#["),e("span",{style:{color:"#B58451"}},"AsResource"),e("span",{style:{color:"#8E8F8B"}},"(")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#6C7834"}},"alias"),e("span",{style:{color:"#8E8F8B"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},"'app.board_game'"),e("span",{style:{color:"#8E8F8B"}},",")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#6C7834"}},"section"),e("span",{style:{color:"#8E8F8B"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},"'admin'"),e("span",{style:{color:"#8E8F8B"}},",")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#6C7834"}},"formType"),e("span",{style:{color:"#8E8F8B"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B58451"}},"BoardGameType"),e("span",{style:{color:"#AB5959"}},"::"),e("span",{style:{color:"#1C6B48"}},"class"),e("span",{style:{color:"#8E8F8B"}},",")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#6C7834"}},"templatesDir"),e("span",{style:{color:"#8E8F8B"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},"'crud'"),e("span",{style:{color:"#8E8F8B"}},",")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#6C7834"}},"routePrefix"),e("span",{style:{color:"#8E8F8B"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},"'/admin'"),e("span",{style:{color:"#8E8F8B"}},",")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},")"),e("span",{style:{color:"#393A34"}},"]")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"#["),e("span",{style:{color:"#B58451"}},"Delete"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#6C7834"}},"processor"),e("span",{style:{color:"#8E8F8B"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B58451"}},"DeleteBoardGameProcessor"),e("span",{style:{color:"#AB5959"}},"::"),e("span",{style:{color:"#1C6B48"}},"class"),e("span",{style:{color:"#8E8F8B"}},")"),e("span",{style:{color:"#393A34"}},"]")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#AB5959"}},"final"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"class"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"BoardGameResource"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"implements"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"ResourceInterface")])])])],-1),CE={__name:"71",setup(s){const o={srcSequence:"./pages/07_processors.md"};return F(O),(n,t)=>{const l=ge;return C(),M(Q,Z(Y(o)),{default:E(()=>[gE,R(l,fe({},{ranges:["all","12"]}),{default:E(()=>[vE]),_:1},16)]),_:1},16)}}},DE=N(CE,[["__file","/@slidev/slides/71.md"]]),EE=e("h1",null,"Responders",-1),bE=e("p",null,"Responders respond data: transform data to a Symfony response, return a success in a CLI operation.",-1),kE={__name:"72",setup(s){const o={srcSequence:"./pages/08_responders.md"};return F(O),(n,t)=>{const l=Re;return C(),M(Q,Z(Y(o)),{default:E(()=>[EE,R(l,null,{default:E(()=>[bE]),_:1})]),_:1},16)}}},wE=N(kE,[["__file","/@slidev/slides/72.md"]]),SE=e("h1",null,"Default responders",-1),RE=e("p",null,[r("When your operation is an instance of "),e("code",null,"Sylius\\Resource\\Metadata\\HttpOperation"),r(" two responders are configured by default.")],-1),xE=e("p",null,"The responder will automatically choose the responder depending on the request format:",-1),$E=e("table",null,[e("thead",null,[e("tr",null,[e("th",null,"Request format"),e("th",null,"Responder")])]),e("tbody",null,[e("tr",null,[e("td",null,"html"),e("td",null,"Sylius\\Resource\\Symfony\\Request\\State\\TwigResponder")]),e("tr",null,[e("td",null,"json"),e("td",null,"Sylius\\Resource\\Symfony\\Request\\State\\ApiResponder")]),e("tr",null,[e("td",null,"xml"),e("td",null,"Sylius\\Resource\\Doctrine\\Common\\State\\ApiResponder")])])],-1),FE={__name:"73",setup(s){const o={srcSequence:"./pages/08_responders.md"};return F(O),(n,t)=>{const l=Re;return C(),M(Q,Z(Y(o)),{default:E(()=>[SE,R(l,null,{default:E(()=>[RE,xE,$E]),_:1})]),_:1},16)}}},IE=N(FE,[["__file","/@slidev/slides/73.md"]]),TE=e("h1",null,"Twig Responder",-1),ME=e("p",null,"The Twig responder is used to render data into a Symfony response. It’s used for HTML responses.",-1),PE=e("p",null,"The variables that are passed to the Twig templates depends on the operation.",-1),OE={__name:"74",setup(s){const o={srcSequence:"./pages/08_responders.md"};return F(O),(n,t)=>{const l=Re;return C(),M(Q,Z(Y(o)),{default:E(()=>[TE,R(l,null,{default:E(()=>[ME,PE]),_:1})]),_:1},16)}}},LE=N(OE,[["__file","/@slidev/slides/74.md"]]),NE=e("h1",null,"Customize Twig template variables",-1),qE=e("p",null,"Some variables are already available on your operations, but you can add more variables easily.",-1),HE={__name:"75",setup(s){const o={srcSequence:"./pages/08_responders.md"};return F(O),(n,t)=>{const l=Re;return C(),M(Q,Z(Y(o)),{default:E(()=>[NE,R(l,null,{default:E(()=>[qE]),_:1})]),_:1},16)}}},UE=N(HE,[["__file","/@slidev/slides/75.md"]]),VE=e("p",null,[r("As an example, we add a "),e("code",null,"foo"),r(" variable to the Twig template with "),e("code",null,"bar"),r(" as value.")],-1),jE=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#758575"}},"// src/Twig/Context/Factory/ShowSubscriptionContextFactory.php")]),r(`
`),e("span",{class:"line"}),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#4D9375"}},"namespace"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"App"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#A1B567"}},"Twig"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#A1B567"}},"Context"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#A1B567"}},"Factory"),e("span",{style:{color:"#858585"}},";")]),r(`
`),e("span",{class:"line"}),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#4D9375"}},"use"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"phpDocumentor"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#E0A569"}},"Reflection"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#E0A569"}},"Types"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#E0A569"}},"Context"),e("span",{style:{color:"#858585"}},";")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#4D9375"}},"use"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"Sylius"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#E0A569"}},"Resource"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#E0A569"}},"Metadata"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#E0A569"}},"Operation"),e("span",{style:{color:"#858585"}},";")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#4D9375"}},"use"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"Sylius"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#E0A569"}},"Resource"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#E0A569"}},"Twig"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#E0A569"}},"Context"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#E0A569"}},"Factory"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#E0A569"}},"ContextFactoryInterface"),e("span",{style:{color:"#858585"}},";")]),r(`
`),e("span",{class:"line"}),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#CB7676"}},"final"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"class"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"ShowSubscriptionContextFactory"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"implements"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"ContextFactoryInterface")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"{")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#CB7676"}},"public"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"function"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"__construct"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#CB7676"}},"private"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"ContextFactoryInterface"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"$"),e("span",{style:{color:"#B8A965"}},"decorated"),e("span",{style:{color:"#858585"}},")")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#858585"}},"{")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#858585"}},"}")]),r(`
`),e("span",{class:"line"}),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#CB7676"}},"public"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"function"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"create"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#4D9375"}},"mixed"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"$"),e("span",{style:{color:"#B8A965"}},"data"),e("span",{style:{color:"#858585"}},","),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"Operation"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"$"),e("span",{style:{color:"#B8A965"}},"operation"),e("span",{style:{color:"#858585"}},","),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"Context"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"$"),e("span",{style:{color:"#B8A965"}},"context"),e("span",{style:{color:"#858585"}},")"),e("span",{style:{color:"#CB7676"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#4D9375"}},"array")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#858585"}},"{")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#4D9375"}},"return"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"array_merge"),e("span",{style:{color:"#858585"}},"($"),e("span",{style:{color:"#D4976C"}},"this"),e("span",{style:{color:"#CB7676"}},"->"),e("span",{style:{color:"#B8A965"}},"decorated"),e("span",{style:{color:"#CB7676"}},"->"),e("span",{style:{color:"#A1B567"}},"create"),e("span",{style:{color:"#858585"}},"($"),e("span",{style:{color:"#B8A965"}},"data"),e("span",{style:{color:"#858585"}},","),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"$"),e("span",{style:{color:"#B8A965"}},"operation"),e("span",{style:{color:"#858585"}},","),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"$"),e("span",{style:{color:"#B8A965"}},"context"),e("span",{style:{color:"#858585"}},"),"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"[")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"            "),e("span",{style:{color:"#C98A7D"}},"'foo'"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"=>"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},"'bar'"),e("span",{style:{color:"#858585"}},",")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#858585"}},"]);")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#858585"}},"}")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"}")])])]),e("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#A0ADA0"}},"// src/Twig/Context/Factory/ShowSubscriptionContextFactory.php")]),r(`
`),e("span",{class:"line"}),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#1C6B48"}},"namespace"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"App"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#6C7834"}},"Twig"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#6C7834"}},"Context"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#6C7834"}},"Factory"),e("span",{style:{color:"#8E8F8B"}},";")]),r(`
`),e("span",{class:"line"}),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#1C6B48"}},"use"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B58451"}},"phpDocumentor"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#B58451"}},"Reflection"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#B58451"}},"Types"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#B58451"}},"Context"),e("span",{style:{color:"#8E8F8B"}},";")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#1C6B48"}},"use"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B58451"}},"Sylius"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#B58451"}},"Resource"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#B58451"}},"Metadata"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#B58451"}},"Operation"),e("span",{style:{color:"#8E8F8B"}},";")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#1C6B48"}},"use"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B58451"}},"Sylius"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#B58451"}},"Resource"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#B58451"}},"Twig"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#B58451"}},"Context"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#B58451"}},"Factory"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#B58451"}},"ContextFactoryInterface"),e("span",{style:{color:"#8E8F8B"}},";")]),r(`
`),e("span",{class:"line"}),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#AB5959"}},"final"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"class"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"ShowSubscriptionContextFactory"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"implements"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"ContextFactoryInterface")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"{")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#AB5959"}},"public"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"function"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B58451"}},"__construct"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#AB5959"}},"private"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B58451"}},"ContextFactoryInterface"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"$"),e("span",{style:{color:"#8C862B"}},"decorated"),e("span",{style:{color:"#8E8F8B"}},")")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#8E8F8B"}},"{")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#8E8F8B"}},"}")]),r(`
`),e("span",{class:"line"}),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#AB5959"}},"public"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"function"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"create"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#1C6B48"}},"mixed"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"$"),e("span",{style:{color:"#8C862B"}},"data"),e("span",{style:{color:"#8E8F8B"}},","),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B58451"}},"Operation"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"$"),e("span",{style:{color:"#8C862B"}},"operation"),e("span",{style:{color:"#8E8F8B"}},","),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B58451"}},"Context"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"$"),e("span",{style:{color:"#8C862B"}},"context"),e("span",{style:{color:"#8E8F8B"}},")"),e("span",{style:{color:"#AB5959"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#1C6B48"}},"array")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#8E8F8B"}},"{")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#1C6B48"}},"return"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B58451"}},"array_merge"),e("span",{style:{color:"#8E8F8B"}},"($"),e("span",{style:{color:"#A65E2B"}},"this"),e("span",{style:{color:"#AB5959"}},"->"),e("span",{style:{color:"#8C862B"}},"decorated"),e("span",{style:{color:"#AB5959"}},"->"),e("span",{style:{color:"#6C7834"}},"create"),e("span",{style:{color:"#8E8F8B"}},"($"),e("span",{style:{color:"#8C862B"}},"data"),e("span",{style:{color:"#8E8F8B"}},","),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"$"),e("span",{style:{color:"#8C862B"}},"operation"),e("span",{style:{color:"#8E8F8B"}},","),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"$"),e("span",{style:{color:"#8C862B"}},"context"),e("span",{style:{color:"#8E8F8B"}},"),"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"[")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"            "),e("span",{style:{color:"#B56959"}},"'foo'"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"=>"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},"'bar'"),e("span",{style:{color:"#8E8F8B"}},",")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#8E8F8B"}},"]);")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#8E8F8B"}},"}")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"}")])])])],-1),GE={__name:"76",setup(s){const o={srcSequence:"./pages/08_responders.md"};return F(O),(n,t)=>{const l=ge,a=Re;return C(),M(Q,Z(Y(o)),{default:E(()=>[VE,R(a,null,{default:E(()=>[R(l,fe({},{ranges:["all","17","18"]}),{default:E(()=>[jE]),_:1},16)]),_:1})]),_:1},16)}}},WE=N(GE,[["__file","/@slidev/slides/76.md"]]),zE=e("h1",null,"Use it on your operation.",-1),KE=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#758575"}},"// src/Entity/Subscription.php")]),r(`
`),e("span",{class:"line"}),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#4D9375"}},"namespace"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"App"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#A1B567"}},"Entity"),e("span",{style:{color:"#858585"}},";")]),r(`
`),e("span",{class:"line"}),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#4D9375"}},"use"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"Sylius"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#E0A569"}},"Resource"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#E0A569"}},"Metadata"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#E0A569"}},"AsResource"),e("span",{style:{color:"#858585"}},";")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#4D9375"}},"use"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"Sylius"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#E0A569"}},"Resource"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#E0A569"}},"Metadata"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#E0A569"}},"Show"),e("span",{style:{color:"#858585"}},";")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#4D9375"}},"use"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"Sylius"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#E0A569"}},"Resource"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#E0A569"}},"Model"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#E0A569"}},"ResourceInterface"),e("span",{style:{color:"#858585"}},";")]),r(`
`),e("span",{class:"line"}),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"#["),e("span",{style:{color:"#E0A569"}},"AsResource"),e("span",{style:{color:"#DBD7CA"}},"]")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"#["),e("span",{style:{color:"#E0A569"}},"Show"),e("span",{style:{color:"#858585"}},"(")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#A1B567"}},"template"),e("span",{style:{color:"#858585"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},"'subscription/show.html.twig'"),e("span",{style:{color:"#858585"}},",")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#A1B567"}},"twigContextFactory"),e("span",{style:{color:"#858585"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"ShowSubscriptionContextFactory"),e("span",{style:{color:"#CB7676"}},"::"),e("span",{style:{color:"#4D9375"}},"class"),e("span",{style:{color:"#858585"}},",")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},")"),e("span",{style:{color:"#DBD7CA"}},"]")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#CB7676"}},"class"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"Subscription"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"implements"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"ResourceInterface")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"{")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"}")])])]),e("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#A0ADA0"}},"// src/Entity/Subscription.php")]),r(`
`),e("span",{class:"line"}),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#1C6B48"}},"namespace"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"App"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#6C7834"}},"Entity"),e("span",{style:{color:"#8E8F8B"}},";")]),r(`
`),e("span",{class:"line"}),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#1C6B48"}},"use"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B58451"}},"Sylius"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#B58451"}},"Resource"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#B58451"}},"Metadata"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#B58451"}},"AsResource"),e("span",{style:{color:"#8E8F8B"}},";")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#1C6B48"}},"use"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B58451"}},"Sylius"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#B58451"}},"Resource"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#B58451"}},"Metadata"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#B58451"}},"Show"),e("span",{style:{color:"#8E8F8B"}},";")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#1C6B48"}},"use"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B58451"}},"Sylius"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#B58451"}},"Resource"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#B58451"}},"Model"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#B58451"}},"ResourceInterface"),e("span",{style:{color:"#8E8F8B"}},";")]),r(`
`),e("span",{class:"line"}),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"#["),e("span",{style:{color:"#B58451"}},"AsResource"),e("span",{style:{color:"#393A34"}},"]")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"#["),e("span",{style:{color:"#B58451"}},"Show"),e("span",{style:{color:"#8E8F8B"}},"(")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#6C7834"}},"template"),e("span",{style:{color:"#8E8F8B"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},"'subscription/show.html.twig'"),e("span",{style:{color:"#8E8F8B"}},",")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#6C7834"}},"twigContextFactory"),e("span",{style:{color:"#8E8F8B"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B58451"}},"ShowSubscriptionContextFactory"),e("span",{style:{color:"#AB5959"}},"::"),e("span",{style:{color:"#1C6B48"}},"class"),e("span",{style:{color:"#8E8F8B"}},",")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},")"),e("span",{style:{color:"#393A34"}},"]")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#AB5959"}},"class"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"Subscription"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"implements"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"ResourceInterface")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"{")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"}")])])])],-1),YE={__name:"77",setup(s){const o={srcSequence:"./pages/08_responders.md"};return F(O),(n,t)=>{const l=ge;return C(),M(Q,Z(Y(o)),{default:E(()=>[zE,R(l,fe({},{ranges:["all","12"]}),{default:E(()=>[KE]),_:1},16)]),_:1},16)}}},ZE=N(YE,[["__file","/@slidev/slides/77.md"]]),QE=e("h1",null,"API Responder",-1),JE=e("p",null,"The API responder is used to render serialized data into a Symfony response. It’s used for JSON/XML responses.",-1),XE={__name:"78",setup(s){const o={srcSequence:"./pages/08_responders.md"};return F(O),(n,t)=>{const l=Re;return C(),M(Q,Z(Y(o)),{default:E(()=>[QE,R(l,null,{default:E(()=>[JE]),_:1})]),_:1},16)}}},eb=N(XE,[["__file","/@slidev/slides/78.md"]]),sb=[{path:"1",name:"page-1",component:n0,meta:{theme:"seriph",background:!1,class:"text-center",highlighter:"shiki",lineNumbers:!1,info:`## Slidev Starter Template
Presentation slides for developers.

Learn more at [Sli.dev](https://sli.dev)
`,drawings:{persist:!1},transition:"slide-left",colorSchema:"light",css:"unocss",title:"Sylius Resource Formation",slide:{raw:`---
# try also 'default' to start simple
theme: seriph
# random image from a curated Unsplash collection by Anthony
# like them? see https://unsplash.com/collections/94734566/slidev
background: false
# apply any windi css classes to the current slide
class: 'text-center'
# https://sli.dev/custom/highlighters.html
highlighter: shiki
# show line numbers in code blocks
lineNumbers: false
# some information about the slides, markdown enabled
info: |
  ## Slidev Starter Template
  Presentation slides for developers.

  Learn more at [Sli.dev](https://sli.dev)
# persist drawings in exports and build
drawings:
  persist: false
# page transition
transition: slide-left
colorSchema: light
# use UnoCSS
css: unocss
---

# Sylius Resource Formation

avec Sylius & Monofony

<div align="center">
<img class="w-75" align="center" src="https://sylius.com/wp-content/uploads/2021/03/sylius-logo_sylius-logo-light-1024x422.jpg">
</div>

<div align="center">
<img class="w-75" src="https://raw.githubusercontent.com/Monofony/Monofony/0.x/docs/_images/doc_logo.png">
</div>
`,title:"Sylius Resource Formation",level:1,content:`# Sylius Resource Formation

avec Sylius & Monofony

<div align="center">
<img class="w-75" align="center" src="https://sylius.com/wp-content/uploads/2021/03/sylius-logo_sylius-logo-light-1024x422.jpg">
</div>

<div align="center">
<img class="w-75" src="https://raw.githubusercontent.com/Monofony/Monofony/0.x/docs/_images/doc_logo.png">
</div>`,frontmatter:{theme:"seriph",background:!1,class:"text-center",highlighter:"shiki",lineNumbers:!1,info:`## Slidev Starter Template
Presentation slides for developers.

Learn more at [Sli.dev](https://sli.dev)
`,drawings:{persist:!1},transition:"slide-left",colorSchema:"light",css:"unocss",title:"Sylius Resource Formation"},index:0,start:0,end:40,noteHTML:"",filepath:"/home/runner/work/sylius-resource-formation/sylius-resource-formation/slides.md",id:0,no:1},__clicksElements:[],__preloaded:!1}},{path:"2",name:"page-2",component:C0,meta:{title:"Create a new resource",srcSequence:"./pages/01_create_resource.md",slide:{raw:null,title:"Create a new resource",level:1,content:"# Create a new resource\n\nAs an example, let's create a Book entity:\n\n```shell\n$ bin/console make:entity 'App\\Entity\\Book'\n```",frontmatter:{title:"Create a new resource",srcSequence:"./pages/01_create_resource.md"},index:1,start:0,end:8,source:{filepath:"/home/runner/work/sylius-resource-formation/sylius-resource-formation/pages/01_create_resource.md",raw:`# Create a new resource

As an example, let's create a Book entity:

\`\`\`shell
$ bin/console make:entity 'App\\Entity\\Book'
\`\`\`
`,title:"Create a new resource",level:1,content:"# Create a new resource\n\nAs an example, let's create a Book entity:\n\n```shell\n$ bin/console make:entity 'App\\Entity\\Book'\n```",frontmatter:{title:"Create a new resource"},index:0,start:0,end:8},inline:{raw:`---
src: ./pages/01_create_resource.md
---
`,content:"",frontmatter:{},index:1,start:40,end:44},filepath:"/home/runner/work/sylius-resource-formation/sylius-resource-formation/pages/01_create_resource.md",noteHTML:"",id:1,no:2},__clicksElements:[],__preloaded:!1}},{path:"3",name:"page-3",component:w0,meta:{transition:"fade",srcSequence:"./pages/01_create_resource.md",slide:{raw:`---
transition: fade
---

# Configure the BookRepository

The command also generates a Doctrine repository class.

\`\`\`php
<?php

namespace App\\Repository;

use App\\Entity\\Book;
use Doctrine\\Bundle\\DoctrineBundle\\Repository\\ServiceEntityRepository;
use Doctrine\\Persistence\\ManagerRegistry;

/**
 * [...]
 */
class BookRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, Book::class);
    }
    
    // [...]
}
\`\`\`
`,title:"Configure the BookRepository",level:1,content:`# Configure the BookRepository

The command also generates a Doctrine repository class.

\`\`\`php
<?php

namespace App\\Repository;

use App\\Entity\\Book;
use Doctrine\\Bundle\\DoctrineBundle\\Repository\\ServiceEntityRepository;
use Doctrine\\Persistence\\ManagerRegistry;

/**
 * [...]
 */
class BookRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, Book::class);
    }
    
    // [...]
}
\`\`\``,frontmatter:{transition:"fade",srcSequence:"./pages/01_create_resource.md"},index:2,start:8,end:39,source:{filepath:"/home/runner/work/sylius-resource-formation/sylius-resource-formation/pages/01_create_resource.md",raw:`---
transition: fade
---

# Configure the BookRepository

The command also generates a Doctrine repository class.

\`\`\`php
<?php

namespace App\\Repository;

use App\\Entity\\Book;
use Doctrine\\Bundle\\DoctrineBundle\\Repository\\ServiceEntityRepository;
use Doctrine\\Persistence\\ManagerRegistry;

/**
 * [...]
 */
class BookRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, Book::class);
    }
    
    // [...]
}
\`\`\`
`,title:"Configure the BookRepository",level:1,content:`# Configure the BookRepository

The command also generates a Doctrine repository class.

\`\`\`php
<?php

namespace App\\Repository;

use App\\Entity\\Book;
use Doctrine\\Bundle\\DoctrineBundle\\Repository\\ServiceEntityRepository;
use Doctrine\\Persistence\\ManagerRegistry;

/**
 * [...]
 */
class BookRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, Book::class);
    }
    
    // [...]
}
\`\`\``,frontmatter:{transition:"fade"},index:1,start:8,end:39},filepath:"/home/runner/work/sylius-resource-formation/sylius-resource-formation/pages/01_create_resource.md",noteHTML:"",id:2,no:3},__clicksElements:[],__preloaded:!1}},{path:"4",name:"page-4",component:F0,meta:{srcSequence:"./pages/01_create_resource.md",slide:{raw:`
# Configure the BookRepository

The command also generates a Doctrine repository class.

\`\`\`php {all|14|14,9|16|16,8}
<?php

namespace App\\Repository;

use App\\Entity\\Book;
use Doctrine\\Bundle\\DoctrineBundle\\Repository\\ServiceEntityRepository;
use Doctrine\\Persistence\\ManagerRegistry;
use Sylius\\Bundle\\ResourceBundle\\Doctrine\\ORM\\ResourceRepositoryTrait;
use Sylius\\Resource\\Doctrine\\Persistence\\RepositoryInterface;

/**
 * [...]
 */
class BookRepository extends ServiceEntityRepository implements RepositoryInterface
{
    use ResourceRepositoryTrait;

    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, Book::class);
    }
}
\`\`\`
`,title:"Configure the BookRepository",level:1,content:`# Configure the BookRepository

The command also generates a Doctrine repository class.

\`\`\`php {all|14|14,9|16|16,8}
<?php

namespace App\\Repository;

use App\\Entity\\Book;
use Doctrine\\Bundle\\DoctrineBundle\\Repository\\ServiceEntityRepository;
use Doctrine\\Persistence\\ManagerRegistry;
use Sylius\\Bundle\\ResourceBundle\\Doctrine\\ORM\\ResourceRepositoryTrait;
use Sylius\\Resource\\Doctrine\\Persistence\\RepositoryInterface;

/**
 * [...]
 */
class BookRepository extends ServiceEntityRepository implements RepositoryInterface
{
    use ResourceRepositoryTrait;

    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, Book::class);
    }
}
\`\`\``,frontmatter:{srcSequence:"./pages/01_create_resource.md"},index:3,start:40,end:70,source:{filepath:"/home/runner/work/sylius-resource-formation/sylius-resource-formation/pages/01_create_resource.md",raw:`
# Configure the BookRepository

The command also generates a Doctrine repository class.

\`\`\`php {all|14|14,9|16|16,8}
<?php

namespace App\\Repository;

use App\\Entity\\Book;
use Doctrine\\Bundle\\DoctrineBundle\\Repository\\ServiceEntityRepository;
use Doctrine\\Persistence\\ManagerRegistry;
use Sylius\\Bundle\\ResourceBundle\\Doctrine\\ORM\\ResourceRepositoryTrait;
use Sylius\\Resource\\Doctrine\\Persistence\\RepositoryInterface;

/**
 * [...]
 */
class BookRepository extends ServiceEntityRepository implements RepositoryInterface
{
    use ResourceRepositoryTrait;

    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, Book::class);
    }
}
\`\`\`
`,title:"Configure the BookRepository",level:1,content:`# Configure the BookRepository

The command also generates a Doctrine repository class.

\`\`\`php {all|14|14,9|16|16,8}
<?php

namespace App\\Repository;

use App\\Entity\\Book;
use Doctrine\\Bundle\\DoctrineBundle\\Repository\\ServiceEntityRepository;
use Doctrine\\Persistence\\ManagerRegistry;
use Sylius\\Bundle\\ResourceBundle\\Doctrine\\ORM\\ResourceRepositoryTrait;
use Sylius\\Resource\\Doctrine\\Persistence\\RepositoryInterface;

/**
 * [...]
 */
class BookRepository extends ServiceEntityRepository implements RepositoryInterface
{
    use ResourceRepositoryTrait;

    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, Book::class);
    }
}
\`\`\``,frontmatter:{},index:2,start:40,end:70},filepath:"/home/runner/work/sylius-resource-formation/sylius-resource-formation/pages/01_create_resource.md",noteHTML:"",id:3,no:4},__clicksElements:[],__preloaded:!1}},{path:"5",name:"page-5",component:N0,meta:{title:"Configure your resource",srcSequence:"./pages/02_configure_your_resource.md",slide:{raw:null,title:"Configure your resource",level:1,content:`# Configure your resource

<v-clicks>

Implements the Resource interface

\`\`\`php {all|10|10,7}
// src/Entity/Book.php

namespace App\\Entity;

use App\\Repository\\BookRepository;
use Doctrine\\ORM\\Mapping as ORM;
use Sylius\\Resource\\Model\\ResourceInterface;

#[ORM\\Entity(repositoryClass: BookRepository::class)]
class Book implements ResourceInterface
{
    public function getId(): int
    {
        return $this->id;
    }
}

\`\`\`

This interface requires you to implement a \`getId()\` method.

This one is already generated 🎉

</v-clicks>`,frontmatter:{title:"Configure your resource",srcSequence:"./pages/02_configure_your_resource.md"},index:4,start:0,end:32,source:{filepath:"/home/runner/work/sylius-resource-formation/sylius-resource-formation/pages/02_configure_your_resource.md",raw:`# Configure your resource

<v-clicks>

Implements the Resource interface

\`\`\`php {all|10|10,7}
// src/Entity/Book.php

namespace App\\Entity;

use App\\Repository\\BookRepository;
use Doctrine\\ORM\\Mapping as ORM;
use Sylius\\Resource\\Model\\ResourceInterface;

#[ORM\\Entity(repositoryClass: BookRepository::class)]
class Book implements ResourceInterface
{
    public function getId(): int
    {
        return $this->id;
    }
}

\`\`\`

This interface requires you to implement a \`getId()\` method.

This one is already generated 🎉

</v-clicks>
`,title:"Configure your resource",level:1,content:`# Configure your resource

<v-clicks>

Implements the Resource interface

\`\`\`php {all|10|10,7}
// src/Entity/Book.php

namespace App\\Entity;

use App\\Repository\\BookRepository;
use Doctrine\\ORM\\Mapping as ORM;
use Sylius\\Resource\\Model\\ResourceInterface;

#[ORM\\Entity(repositoryClass: BookRepository::class)]
class Book implements ResourceInterface
{
    public function getId(): int
    {
        return $this->id;
    }
}

\`\`\`

This interface requires you to implement a \`getId()\` method.

This one is already generated 🎉

</v-clicks>`,frontmatter:{title:"Configure your resource"},index:0,start:0,end:32},inline:{raw:`---
src: ./pages/02_configure_your_resource.md
---
`,content:"",frontmatter:{},index:2,start:44,end:48},filepath:"/home/runner/work/sylius-resource-formation/sylius-resource-formation/pages/02_configure_your_resource.md",noteHTML:"",id:4,no:5},__clicksElements:[],__preloaded:!1}},{path:"6",name:"page-6",component:j0,meta:{srcSequence:"./pages/02_configure_your_resource.md",slide:{raw:`
# Use the AsResource attribute

PHP attribute \`\`\`#[AsResource]\`\`\` configures your entity as a Sylius resource.

\`\`\`php {all|9|9,5}
namespace App\\Entity;

use App\\Repository\\BookRepository;
use Doctrine\\ORM\\Mapping as ORM;
use Sylius\\Resource\\Metadata\\AsResource;
use Sylius\\Resource\\Model\\ResourceInterface;

#[ORM\\Entity(repositoryClass: BookRepository::class)]
#[AsResource]
class Book implements ResourceInterface
{
}

\`\`\`
`,title:"Use the AsResource attribute",level:1,content:`# Use the AsResource attribute

PHP attribute \`\`\`#[AsResource]\`\`\` configures your entity as a Sylius resource.

\`\`\`php {all|9|9,5}
namespace App\\Entity;

use App\\Repository\\BookRepository;
use Doctrine\\ORM\\Mapping as ORM;
use Sylius\\Resource\\Metadata\\AsResource;
use Sylius\\Resource\\Model\\ResourceInterface;

#[ORM\\Entity(repositoryClass: BookRepository::class)]
#[AsResource]
class Book implements ResourceInterface
{
}

\`\`\``,frontmatter:{srcSequence:"./pages/02_configure_your_resource.md"},index:5,start:33,end:54,source:{filepath:"/home/runner/work/sylius-resource-formation/sylius-resource-formation/pages/02_configure_your_resource.md",raw:`
# Use the AsResource attribute

PHP attribute \`\`\`#[AsResource]\`\`\` configures your entity as a Sylius resource.

\`\`\`php {all|9|9,5}
namespace App\\Entity;

use App\\Repository\\BookRepository;
use Doctrine\\ORM\\Mapping as ORM;
use Sylius\\Resource\\Metadata\\AsResource;
use Sylius\\Resource\\Model\\ResourceInterface;

#[ORM\\Entity(repositoryClass: BookRepository::class)]
#[AsResource]
class Book implements ResourceInterface
{
}

\`\`\`
`,title:"Use the AsResource attribute",level:1,content:`# Use the AsResource attribute

PHP attribute \`\`\`#[AsResource]\`\`\` configures your entity as a Sylius resource.

\`\`\`php {all|9|9,5}
namespace App\\Entity;

use App\\Repository\\BookRepository;
use Doctrine\\ORM\\Mapping as ORM;
use Sylius\\Resource\\Metadata\\AsResource;
use Sylius\\Resource\\Model\\ResourceInterface;

#[ORM\\Entity(repositoryClass: BookRepository::class)]
#[AsResource]
class Book implements ResourceInterface
{
}

\`\`\``,frontmatter:{},index:1,start:33,end:54},filepath:"/home/runner/work/sylius-resource-formation/sylius-resource-formation/pages/02_configure_your_resource.md",noteHTML:"",id:5,no:6},__clicksElements:[],__preloaded:!1}},{path:"7",name:"page-7",component:Q0,meta:{srcSequence:"./pages/02_configure_your_resource.md",slide:{raw:`
# Debug the resource

<v-clicks>

\`\`\`shell
$ bin/console sylius:debug:resource 'App\\Entity\\book'
\`\`\`

#

\`\`\`
+--------------------+------------------------------------------------------------+
| name               | book                                                       |
| application        | app                                                        |
| driver             | doctrine/orm                                               |
| classes.model      | App\\Entity\\Book                                            |
| classes.controller | Sylius\\Bundle\\ResourceBundle\\Controller\\ResourceController |
| classes.factory    | Sylius\\Resource\\Factory\\Factory                            |
| classes.form       | Sylius\\Bundle\\ResourceBundle\\Form\\Type\\DefaultResourceType |
+--------------------+------------------------------------------------------------+
\`\`\`

By default, it will have the \`app.book\` alias in Sylius resource which is a concatenation of the application name and
the resource name \`{application}.{name}\`.

</v-clicks>
`,title:"Debug the resource",level:1,content:`# Debug the resource

<v-clicks>

\`\`\`shell
$ bin/console sylius:debug:resource 'App\\Entity\\book'
\`\`\`

#

\`\`\`
+--------------------+------------------------------------------------------------+
| name               | book                                                       |
| application        | app                                                        |
| driver             | doctrine/orm                                               |
| classes.model      | App\\Entity\\Book                                            |
| classes.controller | Sylius\\Bundle\\ResourceBundle\\Controller\\ResourceController |
| classes.factory    | Sylius\\Resource\\Factory\\Factory                            |
| classes.form       | Sylius\\Bundle\\ResourceBundle\\Form\\Type\\DefaultResourceType |
+--------------------+------------------------------------------------------------+
\`\`\`

By default, it will have the \`app.book\` alias in Sylius resource which is a concatenation of the application name and
the resource name \`{application}.{name}\`.

</v-clicks>`,frontmatter:{srcSequence:"./pages/02_configure_your_resource.md"},index:6,start:55,end:83,source:{filepath:"/home/runner/work/sylius-resource-formation/sylius-resource-formation/pages/02_configure_your_resource.md",raw:`
# Debug the resource

<v-clicks>

\`\`\`shell
$ bin/console sylius:debug:resource 'App\\Entity\\book'
\`\`\`

#

\`\`\`
+--------------------+------------------------------------------------------------+
| name               | book                                                       |
| application        | app                                                        |
| driver             | doctrine/orm                                               |
| classes.model      | App\\Entity\\Book                                            |
| classes.controller | Sylius\\Bundle\\ResourceBundle\\Controller\\ResourceController |
| classes.factory    | Sylius\\Resource\\Factory\\Factory                            |
| classes.form       | Sylius\\Bundle\\ResourceBundle\\Form\\Type\\DefaultResourceType |
+--------------------+------------------------------------------------------------+
\`\`\`

By default, it will have the \`app.book\` alias in Sylius resource which is a concatenation of the application name and
the resource name \`{application}.{name}\`.

</v-clicks>
`,title:"Debug the resource",level:1,content:`# Debug the resource

<v-clicks>

\`\`\`shell
$ bin/console sylius:debug:resource 'App\\Entity\\book'
\`\`\`

#

\`\`\`
+--------------------+------------------------------------------------------------+
| name               | book                                                       |
| application        | app                                                        |
| driver             | doctrine/orm                                               |
| classes.model      | App\\Entity\\Book                                            |
| classes.controller | Sylius\\Bundle\\ResourceBundle\\Controller\\ResourceController |
| classes.factory    | Sylius\\Resource\\Factory\\Factory                            |
| classes.form       | Sylius\\Bundle\\ResourceBundle\\Form\\Type\\DefaultResourceType |
+--------------------+------------------------------------------------------------+
\`\`\`

By default, it will have the \`app.book\` alias in Sylius resource which is a concatenation of the application name and
the resource name \`{application}.{name}\`.

</v-clicks>`,frontmatter:{},index:2,start:55,end:83},filepath:"/home/runner/work/sylius-resource-formation/sylius-resource-formation/pages/02_configure_your_resource.md",noteHTML:"",id:6,no:7},__clicksElements:[],__preloaded:!1}},{path:"8",name:"page-8",component:s6,meta:{title:"Configure your operations",srcSequence:"./pages/03_configure_your_operations.md",slide:{raw:null,title:"Configure your operations",level:1,content:`# Configure your operations

<v-clicks>

Now, with your fresh new resource, you have to define the operations that you need to implement.
There are some basic CRUD operations and more.

</v-clicks>`,frontmatter:{title:"Configure your operations",srcSequence:"./pages/03_configure_your_operations.md"},index:7,start:0,end:9,source:{filepath:"/home/runner/work/sylius-resource-formation/sylius-resource-formation/pages/03_configure_your_operations.md",raw:`# Configure your operations

<v-clicks>

Now, with your fresh new resource, you have to define the operations that you need to implement.
There are some basic CRUD operations and more.

</v-clicks>
`,title:"Configure your operations",level:1,content:`# Configure your operations

<v-clicks>

Now, with your fresh new resource, you have to define the operations that you need to implement.
There are some basic CRUD operations and more.

</v-clicks>`,frontmatter:{title:"Configure your operations"},index:0,start:0,end:9},inline:{raw:`---
src: ./pages/03_configure_your_operations.md
---
`,content:"",frontmatter:{},index:3,start:48,end:52},filepath:"/home/runner/work/sylius-resource-formation/sylius-resource-formation/pages/03_configure_your_operations.md",noteHTML:"",id:7,no:8},__clicksElements:[],__preloaded:!1}},{path:"9",name:"page-9",component:r6,meta:{srcSequence:"./pages/03_configure_your_operations.md",slide:{raw:`
# Index operation

<v-clicks>

\`Index\` operation allows to browse all items of your resource.

\`\`\`php {all|8|8,3}
namespace App\\Entity;

use Sylius\\Resource\\Metadata\\Index;
use Sylius\\Resource\\Metadata\\AsResource;
use Sylius\\Resource\\Model\\ResourceInterface;

#[AsResource]
#[Index]
class Book implements ResourceInterface
{
}

\`\`\`

</v-clicks>
`,title:"Index operation",level:1,content:`# Index operation

<v-clicks>

\`Index\` operation allows to browse all items of your resource.

\`\`\`php {all|8|8,3}
namespace App\\Entity;

use Sylius\\Resource\\Metadata\\Index;
use Sylius\\Resource\\Metadata\\AsResource;
use Sylius\\Resource\\Model\\ResourceInterface;

#[AsResource]
#[Index]
class Book implements ResourceInterface
{
}

\`\`\`

</v-clicks>`,frontmatter:{srcSequence:"./pages/03_configure_your_operations.md"},index:8,start:10,end:34,source:{filepath:"/home/runner/work/sylius-resource-formation/sylius-resource-formation/pages/03_configure_your_operations.md",raw:`
# Index operation

<v-clicks>

\`Index\` operation allows to browse all items of your resource.

\`\`\`php {all|8|8,3}
namespace App\\Entity;

use Sylius\\Resource\\Metadata\\Index;
use Sylius\\Resource\\Metadata\\AsResource;
use Sylius\\Resource\\Model\\ResourceInterface;

#[AsResource]
#[Index]
class Book implements ResourceInterface
{
}

\`\`\`

</v-clicks>
`,title:"Index operation",level:1,content:`# Index operation

<v-clicks>

\`Index\` operation allows to browse all items of your resource.

\`\`\`php {all|8|8,3}
namespace App\\Entity;

use Sylius\\Resource\\Metadata\\Index;
use Sylius\\Resource\\Metadata\\AsResource;
use Sylius\\Resource\\Model\\ResourceInterface;

#[AsResource]
#[Index]
class Book implements ResourceInterface
{
}

\`\`\`

</v-clicks>`,frontmatter:{},index:1,start:10,end:34},filepath:"/home/runner/work/sylius-resource-formation/sylius-resource-formation/pages/03_configure_your_operations.md",noteHTML:"",id:8,no:9},__clicksElements:[],__preloaded:!1}},{path:"10",name:"page-10",component:u6,meta:{srcSequence:"./pages/03_configure_your_operations.md",slide:{raw:`
# Index operation

<v-clicks>

It will configure this route for your \`index\` operation.

| Name           | Method | Path   |
|----------------|--------|--------|
| app_book_index | GET    | /books |

</v-clicks>
`,title:"Index operation",level:1,content:`# Index operation

<v-clicks>

It will configure this route for your \`index\` operation.

| Name           | Method | Path   |
|----------------|--------|--------|
| app_book_index | GET    | /books |

</v-clicks>`,frontmatter:{srcSequence:"./pages/03_configure_your_operations.md"},index:9,start:35,end:48,source:{filepath:"/home/runner/work/sylius-resource-formation/sylius-resource-formation/pages/03_configure_your_operations.md",raw:`
# Index operation

<v-clicks>

It will configure this route for your \`index\` operation.

| Name           | Method | Path   |
|----------------|--------|--------|
| app_book_index | GET    | /books |

</v-clicks>
`,title:"Index operation",level:1,content:`# Index operation

<v-clicks>

It will configure this route for your \`index\` operation.

| Name           | Method | Path   |
|----------------|--------|--------|
| app_book_index | GET    | /books |

</v-clicks>`,frontmatter:{},index:2,start:35,end:48},filepath:"/home/runner/work/sylius-resource-formation/sylius-resource-formation/pages/03_configure_your_operations.md",noteHTML:"",id:9,no:10},__clicksElements:[],__preloaded:!1}},{path:"11",name:"page-11",component:h6,meta:{srcSequence:"./pages/03_configure_your_operations.md",slide:{raw:`
# Index operation

<v-clicks>

On your Twig template, these variables are available

| Name              | Type                                      |
|-------------------|-------------------------------------------|
| resources         | Pagerfanta\\Pagerfanta                     |
| books             | Pagerfanta\\Pagerfanta                     |
| operation         | Sylius\\Resource\\Metadata\\Index            |
| resource_metadata | Sylius\\Resource\\Metadata\\ResourceMetadata |
| app               | Symfony\\Bridge\\Twig\\AppVariable           |

</v-clicks>
`,title:"Index operation",level:1,content:`# Index operation

<v-clicks>

On your Twig template, these variables are available

| Name              | Type                                      |
|-------------------|-------------------------------------------|
| resources         | Pagerfanta\\Pagerfanta                     |
| books             | Pagerfanta\\Pagerfanta                     |
| operation         | Sylius\\Resource\\Metadata\\Index            |
| resource_metadata | Sylius\\Resource\\Metadata\\ResourceMetadata |
| app               | Symfony\\Bridge\\Twig\\AppVariable           |

</v-clicks>`,frontmatter:{srcSequence:"./pages/03_configure_your_operations.md"},index:10,start:49,end:66,source:{filepath:"/home/runner/work/sylius-resource-formation/sylius-resource-formation/pages/03_configure_your_operations.md",raw:`
# Index operation

<v-clicks>

On your Twig template, these variables are available

| Name              | Type                                      |
|-------------------|-------------------------------------------|
| resources         | Pagerfanta\\Pagerfanta                     |
| books             | Pagerfanta\\Pagerfanta                     |
| operation         | Sylius\\Resource\\Metadata\\Index            |
| resource_metadata | Sylius\\Resource\\Metadata\\ResourceMetadata |
| app               | Symfony\\Bridge\\Twig\\AppVariable           |

</v-clicks>
`,title:"Index operation",level:1,content:`# Index operation

<v-clicks>

On your Twig template, these variables are available

| Name              | Type                                      |
|-------------------|-------------------------------------------|
| resources         | Pagerfanta\\Pagerfanta                     |
| books             | Pagerfanta\\Pagerfanta                     |
| operation         | Sylius\\Resource\\Metadata\\Index            |
| resource_metadata | Sylius\\Resource\\Metadata\\ResourceMetadata |
| app               | Symfony\\Bridge\\Twig\\AppVariable           |

</v-clicks>`,frontmatter:{},index:3,start:49,end:66},filepath:"/home/runner/work/sylius-resource-formation/sylius-resource-formation/pages/03_configure_your_operations.md",noteHTML:"",id:10,no:11},__clicksElements:[],__preloaded:!1}},{path:"12",name:"page-12",component:A6,meta:{srcSequence:"./pages/03_configure_your_operations.md",slide:{raw:`
\`\`\`php
#[\\Attribute(\\Attribute::TARGET_CLASS | \\Attribute::IS_REPEATABLE)]
final class Index extends HttpOperation implements CollectionOperationInterface, GridAwareOperationInterface
{
    public function __construct(
        ?array $methods = null,
        ?string $path = null,
        ?string $routePrefix = null,
        ?string $template = null,
        ?string $shortName = null,
        ?string $name = null,
        string|callable|null $provider = null,
        string|callable|null $processor = null,
        string|callable|null $responder = null,
        string|callable|null $repository = null,
        ?string $repositoryMethod = null,
        ?array $repositoryArguments = null,
        ?bool $read = null,
        ?bool $write = null,
        ?bool $validate = null,
        ?bool $deserialize = null,
        ?bool $serialize = null,
        // [...]
    ) {}
\`\`\`
`,content:`\`\`\`php
#[\\Attribute(\\Attribute::TARGET_CLASS | \\Attribute::IS_REPEATABLE)]
final class Index extends HttpOperation implements CollectionOperationInterface, GridAwareOperationInterface
{
    public function __construct(
        ?array $methods = null,
        ?string $path = null,
        ?string $routePrefix = null,
        ?string $template = null,
        ?string $shortName = null,
        ?string $name = null,
        string|callable|null $provider = null,
        string|callable|null $processor = null,
        string|callable|null $responder = null,
        string|callable|null $repository = null,
        ?string $repositoryMethod = null,
        ?array $repositoryArguments = null,
        ?bool $read = null,
        ?bool $write = null,
        ?bool $validate = null,
        ?bool $deserialize = null,
        ?bool $serialize = null,
        // [...]
    ) {}
\`\`\``,frontmatter:{srcSequence:"./pages/03_configure_your_operations.md"},index:11,start:67,end:94,source:{filepath:"/home/runner/work/sylius-resource-formation/sylius-resource-formation/pages/03_configure_your_operations.md",raw:`
\`\`\`php
#[\\Attribute(\\Attribute::TARGET_CLASS | \\Attribute::IS_REPEATABLE)]
final class Index extends HttpOperation implements CollectionOperationInterface, GridAwareOperationInterface
{
    public function __construct(
        ?array $methods = null,
        ?string $path = null,
        ?string $routePrefix = null,
        ?string $template = null,
        ?string $shortName = null,
        ?string $name = null,
        string|callable|null $provider = null,
        string|callable|null $processor = null,
        string|callable|null $responder = null,
        string|callable|null $repository = null,
        ?string $repositoryMethod = null,
        ?array $repositoryArguments = null,
        ?bool $read = null,
        ?bool $write = null,
        ?bool $validate = null,
        ?bool $deserialize = null,
        ?bool $serialize = null,
        // [...]
    ) {}
\`\`\`
`,content:`\`\`\`php
#[\\Attribute(\\Attribute::TARGET_CLASS | \\Attribute::IS_REPEATABLE)]
final class Index extends HttpOperation implements CollectionOperationInterface, GridAwareOperationInterface
{
    public function __construct(
        ?array $methods = null,
        ?string $path = null,
        ?string $routePrefix = null,
        ?string $template = null,
        ?string $shortName = null,
        ?string $name = null,
        string|callable|null $provider = null,
        string|callable|null $processor = null,
        string|callable|null $responder = null,
        string|callable|null $repository = null,
        ?string $repositoryMethod = null,
        ?array $repositoryArguments = null,
        ?bool $read = null,
        ?bool $write = null,
        ?bool $validate = null,
        ?bool $deserialize = null,
        ?bool $serialize = null,
        // [...]
    ) {}
\`\`\``,frontmatter:{},index:4,start:67,end:94},filepath:"/home/runner/work/sylius-resource-formation/sylius-resource-formation/pages/03_configure_your_operations.md",noteHTML:"",id:11,no:12},__clicksElements:[],__preloaded:!1}},{path:"13",name:"page-13",component:C6,meta:{srcSequence:"./pages/03_configure_your_operations.md",slide:{raw:`
\`\`\`php
#[\\Attribute(\\Attribute::TARGET_CLASS | \\Attribute::IS_REPEATABLE)]
final class Index extends HttpOperation implements CollectionOperationInterface, GridAwareOperationInterface
{
    public function __construct(
        // [...]
        ?string $formType = null,
        ?array $formOptions = null,
        ?string $eventShortName = null,
        ?array $validationContext = null,
        string|callable|null $twigContextFactory = null,
        ?string $redirectToRoute = null,
        ?array $vars = null,
        private ?string $grid = null,
    ) {}
\`\`\`
`,content:`\`\`\`php
#[\\Attribute(\\Attribute::TARGET_CLASS | \\Attribute::IS_REPEATABLE)]
final class Index extends HttpOperation implements CollectionOperationInterface, GridAwareOperationInterface
{
    public function __construct(
        // [...]
        ?string $formType = null,
        ?array $formOptions = null,
        ?string $eventShortName = null,
        ?array $validationContext = null,
        string|callable|null $twigContextFactory = null,
        ?string $redirectToRoute = null,
        ?array $vars = null,
        private ?string $grid = null,
    ) {}
\`\`\``,frontmatter:{srcSequence:"./pages/03_configure_your_operations.md"},index:12,start:95,end:113,source:{filepath:"/home/runner/work/sylius-resource-formation/sylius-resource-formation/pages/03_configure_your_operations.md",raw:`
\`\`\`php
#[\\Attribute(\\Attribute::TARGET_CLASS | \\Attribute::IS_REPEATABLE)]
final class Index extends HttpOperation implements CollectionOperationInterface, GridAwareOperationInterface
{
    public function __construct(
        // [...]
        ?string $formType = null,
        ?array $formOptions = null,
        ?string $eventShortName = null,
        ?array $validationContext = null,
        string|callable|null $twigContextFactory = null,
        ?string $redirectToRoute = null,
        ?array $vars = null,
        private ?string $grid = null,
    ) {}
\`\`\`
`,content:`\`\`\`php
#[\\Attribute(\\Attribute::TARGET_CLASS | \\Attribute::IS_REPEATABLE)]
final class Index extends HttpOperation implements CollectionOperationInterface, GridAwareOperationInterface
{
    public function __construct(
        // [...]
        ?string $formType = null,
        ?array $formOptions = null,
        ?string $eventShortName = null,
        ?array $validationContext = null,
        string|callable|null $twigContextFactory = null,
        ?string $redirectToRoute = null,
        ?array $vars = null,
        private ?string $grid = null,
    ) {}
\`\`\``,frontmatter:{},index:5,start:95,end:113},filepath:"/home/runner/work/sylius-resource-formation/sylius-resource-formation/pages/03_configure_your_operations.md",noteHTML:"",id:12,no:13},__clicksElements:[],__preloaded:!1}},{path:"14",name:"page-14",component:b6,meta:{srcSequence:"./pages/03_configure_your_operations.md",slide:{raw:`
\`\`\`php
final class ResourceMetadata
{
    private ?Operations $operations;

    public function __construct(
        private ?string $alias = null,
        private ?string $section = null,
        private ?string $formType = null,
        private ?string $templatesDir = null,
        private ?string $routePrefix = null,
        private ?string $name = null,
        private ?string $pluralName = null,
        private ?string $applicationName = null,
        private ?string $identifier = null,
        protected ?array $normalizationContext = null,
        protected ?array $denormalizationContext = null,
        protected ?array $validationContext = null,
        private ?string $class = null,
        private string|false|null $driver = null,
        private ?array $vars = null,
        ?array $operations = null,
    ) {
        $this->operations = null === $operations ? null : new Operations($operations);
    }
}
\`\`\`
`,content:`\`\`\`php
final class ResourceMetadata
{
    private ?Operations $operations;

    public function __construct(
        private ?string $alias = null,
        private ?string $section = null,
        private ?string $formType = null,
        private ?string $templatesDir = null,
        private ?string $routePrefix = null,
        private ?string $name = null,
        private ?string $pluralName = null,
        private ?string $applicationName = null,
        private ?string $identifier = null,
        protected ?array $normalizationContext = null,
        protected ?array $denormalizationContext = null,
        protected ?array $validationContext = null,
        private ?string $class = null,
        private string|false|null $driver = null,
        private ?array $vars = null,
        ?array $operations = null,
    ) {
        $this->operations = null === $operations ? null : new Operations($operations);
    }
}
\`\`\``,frontmatter:{srcSequence:"./pages/03_configure_your_operations.md"},index:13,start:114,end:143,source:{filepath:"/home/runner/work/sylius-resource-formation/sylius-resource-formation/pages/03_configure_your_operations.md",raw:`
\`\`\`php
final class ResourceMetadata
{
    private ?Operations $operations;

    public function __construct(
        private ?string $alias = null,
        private ?string $section = null,
        private ?string $formType = null,
        private ?string $templatesDir = null,
        private ?string $routePrefix = null,
        private ?string $name = null,
        private ?string $pluralName = null,
        private ?string $applicationName = null,
        private ?string $identifier = null,
        protected ?array $normalizationContext = null,
        protected ?array $denormalizationContext = null,
        protected ?array $validationContext = null,
        private ?string $class = null,
        private string|false|null $driver = null,
        private ?array $vars = null,
        ?array $operations = null,
    ) {
        $this->operations = null === $operations ? null : new Operations($operations);
    }
}
\`\`\`
`,content:`\`\`\`php
final class ResourceMetadata
{
    private ?Operations $operations;

    public function __construct(
        private ?string $alias = null,
        private ?string $section = null,
        private ?string $formType = null,
        private ?string $templatesDir = null,
        private ?string $routePrefix = null,
        private ?string $name = null,
        private ?string $pluralName = null,
        private ?string $applicationName = null,
        private ?string $identifier = null,
        protected ?array $normalizationContext = null,
        protected ?array $denormalizationContext = null,
        protected ?array $validationContext = null,
        private ?string $class = null,
        private string|false|null $driver = null,
        private ?array $vars = null,
        ?array $operations = null,
    ) {
        $this->operations = null === $operations ? null : new Operations($operations);
    }
}
\`\`\``,frontmatter:{},index:6,start:114,end:143},filepath:"/home/runner/work/sylius-resource-formation/sylius-resource-formation/pages/03_configure_your_operations.md",noteHTML:"",id:13,no:14},__clicksElements:[],__preloaded:!1}},{path:"15",name:"page-15",component:x6,meta:{srcSequence:"./pages/03_configure_your_operations.md",slide:{raw:`
# Use a grid for your index operation

<v-clicks>

To use a grid for you operation, you need to install
the [Sylius grid package](https://github.com/Sylius/SyliusGridBundle/)

\`\`\`php {all|9-10|9-10,3|11-12|11-12}
namespace App\\Entity;

use App\\Grid\\BookGrid;
use Sylius\\Resource\\Metadata\\Index;
use Sylius\\Resource\\Metadata\\AsResource;
use Sylius\\Resource\\Model\\ResourceInterface;

#[AsResource]
// You can use either the FQCN of your grid
#[Index(grid: BookGrid::class)]
// Or you can use the grid name
#[Index(grid: 'app_book')]
class Book implements ResourceInterface
{
}

\`\`\`

</v-clicks>
`,title:"Use a grid for your index operation",level:1,content:`# Use a grid for your index operation

<v-clicks>

To use a grid for you operation, you need to install
the [Sylius grid package](https://github.com/Sylius/SyliusGridBundle/)

\`\`\`php {all|9-10|9-10,3|11-12|11-12}
namespace App\\Entity;

use App\\Grid\\BookGrid;
use Sylius\\Resource\\Metadata\\Index;
use Sylius\\Resource\\Metadata\\AsResource;
use Sylius\\Resource\\Model\\ResourceInterface;

#[AsResource]
// You can use either the FQCN of your grid
#[Index(grid: BookGrid::class)]
// Or you can use the grid name
#[Index(grid: 'app_book')]
class Book implements ResourceInterface
{
}

\`\`\`

</v-clicks>`,frontmatter:{srcSequence:"./pages/03_configure_your_operations.md"},index:14,start:144,end:173,source:{filepath:"/home/runner/work/sylius-resource-formation/sylius-resource-formation/pages/03_configure_your_operations.md",raw:`
# Use a grid for your index operation

<v-clicks>

To use a grid for you operation, you need to install
the [Sylius grid package](https://github.com/Sylius/SyliusGridBundle/)

\`\`\`php {all|9-10|9-10,3|11-12|11-12}
namespace App\\Entity;

use App\\Grid\\BookGrid;
use Sylius\\Resource\\Metadata\\Index;
use Sylius\\Resource\\Metadata\\AsResource;
use Sylius\\Resource\\Model\\ResourceInterface;

#[AsResource]
// You can use either the FQCN of your grid
#[Index(grid: BookGrid::class)]
// Or you can use the grid name
#[Index(grid: 'app_book')]
class Book implements ResourceInterface
{
}

\`\`\`

</v-clicks>
`,title:"Use a grid for your index operation",level:1,content:`# Use a grid for your index operation

<v-clicks>

To use a grid for you operation, you need to install
the [Sylius grid package](https://github.com/Sylius/SyliusGridBundle/)

\`\`\`php {all|9-10|9-10,3|11-12|11-12}
namespace App\\Entity;

use App\\Grid\\BookGrid;
use Sylius\\Resource\\Metadata\\Index;
use Sylius\\Resource\\Metadata\\AsResource;
use Sylius\\Resource\\Model\\ResourceInterface;

#[AsResource]
// You can use either the FQCN of your grid
#[Index(grid: BookGrid::class)]
// Or you can use the grid name
#[Index(grid: 'app_book')]
class Book implements ResourceInterface
{
}

\`\`\`

</v-clicks>`,frontmatter:{},index:7,start:144,end:173},filepath:"/home/runner/work/sylius-resource-formation/sylius-resource-formation/pages/03_configure_your_operations.md",noteHTML:"",id:14,no:15},__clicksElements:[],__preloaded:!1}},{path:"16",name:"page-16",component:P6,meta:{srcSequence:"./pages/03_configure_your_operations.md",slide:{raw:`
# Use a grid for your index operation

<v-clicks>

On your Twig template, these variables are available

| Name              | Type                                                    |
|-------------------|---------------------------------------------------------|
| resources         | Sylius\\Bundle\\ResourceBundle\\Grid\\View\\ResourceGridView |
| books             | Sylius\\Bundle\\ResourceBundle\\Grid\\View\\ResourceGridView |
| operation         | Sylius\\Resource\\Metadata\\Index                          |
| resource_metadata | Sylius\\Resource\\Metadata\\ResourceMetadata               |
| app               | Symfony\\Bridge\\Twig\\AppVariable                         |

The iterator for your books will be available as \`books.data\` or \`resources.data\`.

</v-clicks>
`,title:"Use a grid for your index operation",level:1,content:`# Use a grid for your index operation

<v-clicks>

On your Twig template, these variables are available

| Name              | Type                                                    |
|-------------------|---------------------------------------------------------|
| resources         | Sylius\\Bundle\\ResourceBundle\\Grid\\View\\ResourceGridView |
| books             | Sylius\\Bundle\\ResourceBundle\\Grid\\View\\ResourceGridView |
| operation         | Sylius\\Resource\\Metadata\\Index                          |
| resource_metadata | Sylius\\Resource\\Metadata\\ResourceMetadata               |
| app               | Symfony\\Bridge\\Twig\\AppVariable                         |

The iterator for your books will be available as \`books.data\` or \`resources.data\`.

</v-clicks>`,frontmatter:{srcSequence:"./pages/03_configure_your_operations.md"},index:15,start:174,end:193,source:{filepath:"/home/runner/work/sylius-resource-formation/sylius-resource-formation/pages/03_configure_your_operations.md",raw:`
# Use a grid for your index operation

<v-clicks>

On your Twig template, these variables are available

| Name              | Type                                                    |
|-------------------|---------------------------------------------------------|
| resources         | Sylius\\Bundle\\ResourceBundle\\Grid\\View\\ResourceGridView |
| books             | Sylius\\Bundle\\ResourceBundle\\Grid\\View\\ResourceGridView |
| operation         | Sylius\\Resource\\Metadata\\Index                          |
| resource_metadata | Sylius\\Resource\\Metadata\\ResourceMetadata               |
| app               | Symfony\\Bridge\\Twig\\AppVariable                         |

The iterator for your books will be available as \`books.data\` or \`resources.data\`.

</v-clicks>
`,title:"Use a grid for your index operation",level:1,content:`# Use a grid for your index operation

<v-clicks>

On your Twig template, these variables are available

| Name              | Type                                                    |
|-------------------|---------------------------------------------------------|
| resources         | Sylius\\Bundle\\ResourceBundle\\Grid\\View\\ResourceGridView |
| books             | Sylius\\Bundle\\ResourceBundle\\Grid\\View\\ResourceGridView |
| operation         | Sylius\\Resource\\Metadata\\Index                          |
| resource_metadata | Sylius\\Resource\\Metadata\\ResourceMetadata               |
| app               | Symfony\\Bridge\\Twig\\AppVariable                         |

The iterator for your books will be available as \`books.data\` or \`resources.data\`.

</v-clicks>`,frontmatter:{},index:8,start:174,end:193},filepath:"/home/runner/work/sylius-resource-formation/sylius-resource-formation/pages/03_configure_your_operations.md",noteHTML:"",id:15,no:16},__clicksElements:[],__preloaded:!1}},{path:"17",name:"page-17",component:H6,meta:{srcSequence:"./pages/03_configure_your_operations.md",slide:{raw:`
# Create operation

<v-clicks>

\`Create\` operation allows to add a new item of your resource.

\`\`\`php {all|8|8,3}
namespace App\\Entity;

use Sylius\\Resource\\Metadata\\Create;
use Sylius\\Resource\\Metadata\\AsResource;
use Sylius\\Resource\\Model\\ResourceInterface;

#[AsResource]
#[Create]
class Book implements ResourceInterface
{
}

\`\`\`

</v-clicks>
`,title:"Create operation",level:1,content:`# Create operation

<v-clicks>

\`Create\` operation allows to add a new item of your resource.

\`\`\`php {all|8|8,3}
namespace App\\Entity;

use Sylius\\Resource\\Metadata\\Create;
use Sylius\\Resource\\Metadata\\AsResource;
use Sylius\\Resource\\Model\\ResourceInterface;

#[AsResource]
#[Create]
class Book implements ResourceInterface
{
}

\`\`\`

</v-clicks>`,frontmatter:{srcSequence:"./pages/03_configure_your_operations.md"},index:16,start:194,end:218,source:{filepath:"/home/runner/work/sylius-resource-formation/sylius-resource-formation/pages/03_configure_your_operations.md",raw:`
# Create operation

<v-clicks>

\`Create\` operation allows to add a new item of your resource.

\`\`\`php {all|8|8,3}
namespace App\\Entity;

use Sylius\\Resource\\Metadata\\Create;
use Sylius\\Resource\\Metadata\\AsResource;
use Sylius\\Resource\\Model\\ResourceInterface;

#[AsResource]
#[Create]
class Book implements ResourceInterface
{
}

\`\`\`

</v-clicks>
`,title:"Create operation",level:1,content:`# Create operation

<v-clicks>

\`Create\` operation allows to add a new item of your resource.

\`\`\`php {all|8|8,3}
namespace App\\Entity;

use Sylius\\Resource\\Metadata\\Create;
use Sylius\\Resource\\Metadata\\AsResource;
use Sylius\\Resource\\Model\\ResourceInterface;

#[AsResource]
#[Create]
class Book implements ResourceInterface
{
}

\`\`\`

</v-clicks>`,frontmatter:{},index:9,start:194,end:218},filepath:"/home/runner/work/sylius-resource-formation/sylius-resource-formation/pages/03_configure_your_operations.md",noteHTML:"",id:16,no:17},__clicksElements:[],__preloaded:!1}},{path:"18",name:"page-18",component:W6,meta:{srcSequence:"./pages/03_configure_your_operations.md",slide:{raw:`
# Create operation

It will configure this route for your \`create\` operation.

| Name            | Method    | Path       |
|-----------------|-----------|------------|
| app_book_create | GET, POST | /books/new |
`,title:"Create operation",level:1,content:`# Create operation

It will configure this route for your \`create\` operation.

| Name            | Method    | Path       |
|-----------------|-----------|------------|
| app_book_create | GET, POST | /books/new |`,frontmatter:{srcSequence:"./pages/03_configure_your_operations.md"},index:17,start:219,end:228,source:{filepath:"/home/runner/work/sylius-resource-formation/sylius-resource-formation/pages/03_configure_your_operations.md",raw:`
# Create operation

It will configure this route for your \`create\` operation.

| Name            | Method    | Path       |
|-----------------|-----------|------------|
| app_book_create | GET, POST | /books/new |
`,title:"Create operation",level:1,content:`# Create operation

It will configure this route for your \`create\` operation.

| Name            | Method    | Path       |
|-----------------|-----------|------------|
| app_book_create | GET, POST | /books/new |`,frontmatter:{},index:10,start:219,end:228},filepath:"/home/runner/work/sylius-resource-formation/sylius-resource-formation/pages/03_configure_your_operations.md",noteHTML:"",id:17,no:18},__clicksElements:[],__preloaded:!1}},{path:"19",name:"page-19",component:Q6,meta:{srcSequence:"./pages/03_configure_your_operations.md",slide:{raw:`
# Create operation

On your Twig template, these variables are available

| Name              | Type                                      |
|-------------------|-------------------------------------------|
| form              | App\\Form\\BookType                         |
| resource          | App\\Entity\\Book                           |
| book              | App\\Entity\\Book                           |
| operation         | Sylius\\Resource\\Metadata\\Create           |
| resource_metadata | Sylius\\Resource\\Metadata\\ResourceMetadata |
| app               | Symfony\\Bridge\\Twig\\AppVariable           |
`,title:"Create operation",level:1,content:`# Create operation

On your Twig template, these variables are available

| Name              | Type                                      |
|-------------------|-------------------------------------------|
| form              | App\\Form\\BookType                         |
| resource          | App\\Entity\\Book                           |
| book              | App\\Entity\\Book                           |
| operation         | Sylius\\Resource\\Metadata\\Create           |
| resource_metadata | Sylius\\Resource\\Metadata\\ResourceMetadata |
| app               | Symfony\\Bridge\\Twig\\AppVariable           |`,frontmatter:{srcSequence:"./pages/03_configure_your_operations.md"},index:18,start:229,end:243,source:{filepath:"/home/runner/work/sylius-resource-formation/sylius-resource-formation/pages/03_configure_your_operations.md",raw:`
# Create operation

On your Twig template, these variables are available

| Name              | Type                                      |
|-------------------|-------------------------------------------|
| form              | App\\Form\\BookType                         |
| resource          | App\\Entity\\Book                           |
| book              | App\\Entity\\Book                           |
| operation         | Sylius\\Resource\\Metadata\\Create           |
| resource_metadata | Sylius\\Resource\\Metadata\\ResourceMetadata |
| app               | Symfony\\Bridge\\Twig\\AppVariable           |
`,title:"Create operation",level:1,content:`# Create operation

On your Twig template, these variables are available

| Name              | Type                                      |
|-------------------|-------------------------------------------|
| form              | App\\Form\\BookType                         |
| resource          | App\\Entity\\Book                           |
| book              | App\\Entity\\Book                           |
| operation         | Sylius\\Resource\\Metadata\\Create           |
| resource_metadata | Sylius\\Resource\\Metadata\\ResourceMetadata |
| app               | Symfony\\Bridge\\Twig\\AppVariable           |`,frontmatter:{},index:11,start:229,end:243},filepath:"/home/runner/work/sylius-resource-formation/sylius-resource-formation/pages/03_configure_your_operations.md",noteHTML:"",id:18,no:19},__clicksElements:[],__preloaded:!1}},{path:"20",name:"page-20",component:o9,meta:{srcSequence:"./pages/03_configure_your_operations.md",slide:{raw:`
# Update operation

\`Update\` operation allows to edit an existing item of your resource.

\`\`\`php {all|8|8,3}
namespace App\\Entity;

use Sylius\\Resource\\Metadata\\Update;
use Sylius\\Resource\\Metadata\\AsResource;
use Sylius\\Resource\\Model\\ResourceInterface;

#[AsResource]
#[Update]
class Book implements ResourceInterface
{
}

\`\`\`
`,title:"Update operation",level:1,content:`# Update operation

\`Update\` operation allows to edit an existing item of your resource.

\`\`\`php {all|8|8,3}
namespace App\\Entity;

use Sylius\\Resource\\Metadata\\Update;
use Sylius\\Resource\\Metadata\\AsResource;
use Sylius\\Resource\\Model\\ResourceInterface;

#[AsResource]
#[Update]
class Book implements ResourceInterface
{
}

\`\`\``,frontmatter:{srcSequence:"./pages/03_configure_your_operations.md"},index:19,start:244,end:264,source:{filepath:"/home/runner/work/sylius-resource-formation/sylius-resource-formation/pages/03_configure_your_operations.md",raw:`
# Update operation

\`Update\` operation allows to edit an existing item of your resource.

\`\`\`php {all|8|8,3}
namespace App\\Entity;

use Sylius\\Resource\\Metadata\\Update;
use Sylius\\Resource\\Metadata\\AsResource;
use Sylius\\Resource\\Model\\ResourceInterface;

#[AsResource]
#[Update]
class Book implements ResourceInterface
{
}

\`\`\`
`,title:"Update operation",level:1,content:`# Update operation

\`Update\` operation allows to edit an existing item of your resource.

\`\`\`php {all|8|8,3}
namespace App\\Entity;

use Sylius\\Resource\\Metadata\\Update;
use Sylius\\Resource\\Metadata\\AsResource;
use Sylius\\Resource\\Model\\ResourceInterface;

#[AsResource]
#[Update]
class Book implements ResourceInterface
{
}

\`\`\``,frontmatter:{},index:12,start:244,end:264},filepath:"/home/runner/work/sylius-resource-formation/sylius-resource-formation/pages/03_configure_your_operations.md",noteHTML:"",id:19,no:20},__clicksElements:[],__preloaded:!1}},{path:"21",name:"page-21",component:a9,meta:{srcSequence:"./pages/03_configure_your_operations.md",slide:{raw:`
# Update operation

It will configure this route for your \`update\` operation.

| Name            | Method          | Path             |
|-----------------|-----------------|------------------|
| app_book_update | GET, PUT, PATCH | /books/{id}/edit |
`,title:"Update operation",level:1,content:`# Update operation

It will configure this route for your \`update\` operation.

| Name            | Method          | Path             |
|-----------------|-----------------|------------------|
| app_book_update | GET, PUT, PATCH | /books/{id}/edit |`,frontmatter:{srcSequence:"./pages/03_configure_your_operations.md"},index:20,start:265,end:274,source:{filepath:"/home/runner/work/sylius-resource-formation/sylius-resource-formation/pages/03_configure_your_operations.md",raw:`
# Update operation

It will configure this route for your \`update\` operation.

| Name            | Method          | Path             |
|-----------------|-----------------|------------------|
| app_book_update | GET, PUT, PATCH | /books/{id}/edit |
`,title:"Update operation",level:1,content:`# Update operation

It will configure this route for your \`update\` operation.

| Name            | Method          | Path             |
|-----------------|-----------------|------------------|
| app_book_update | GET, PUT, PATCH | /books/{id}/edit |`,frontmatter:{},index:13,start:265,end:274},filepath:"/home/runner/work/sylius-resource-formation/sylius-resource-formation/pages/03_configure_your_operations.md",noteHTML:"",id:20,no:21},__clicksElements:[],__preloaded:!1}},{path:"22",name:"page-22",component:y9,meta:{srcSequence:"./pages/03_configure_your_operations.md",slide:{raw:`
# Update operation

On your Twig template, these variables are available

| Name              | Type                                      |
|-------------------|-------------------------------------------|
| form              | App\\Form\\BookType                         |
| resource          | App\\Entity\\Book                           |
| book              | App\\Entity\\Book                           |
| operation         | Sylius\\Resource\\Metadata\\Update           |
| resource_metadata | Sylius\\Resource\\Metadata\\ResourceMetadata |
| app               | Symfony\\Bridge\\Twig\\AppVariable           |
`,title:"Update operation",level:1,content:`# Update operation

On your Twig template, these variables are available

| Name              | Type                                      |
|-------------------|-------------------------------------------|
| form              | App\\Form\\BookType                         |
| resource          | App\\Entity\\Book                           |
| book              | App\\Entity\\Book                           |
| operation         | Sylius\\Resource\\Metadata\\Update           |
| resource_metadata | Sylius\\Resource\\Metadata\\ResourceMetadata |
| app               | Symfony\\Bridge\\Twig\\AppVariable           |`,frontmatter:{srcSequence:"./pages/03_configure_your_operations.md"},index:21,start:275,end:289,source:{filepath:"/home/runner/work/sylius-resource-formation/sylius-resource-formation/pages/03_configure_your_operations.md",raw:`
# Update operation

On your Twig template, these variables are available

| Name              | Type                                      |
|-------------------|-------------------------------------------|
| form              | App\\Form\\BookType                         |
| resource          | App\\Entity\\Book                           |
| book              | App\\Entity\\Book                           |
| operation         | Sylius\\Resource\\Metadata\\Update           |
| resource_metadata | Sylius\\Resource\\Metadata\\ResourceMetadata |
| app               | Symfony\\Bridge\\Twig\\AppVariable           |
`,title:"Update operation",level:1,content:`# Update operation

On your Twig template, these variables are available

| Name              | Type                                      |
|-------------------|-------------------------------------------|
| form              | App\\Form\\BookType                         |
| resource          | App\\Entity\\Book                           |
| book              | App\\Entity\\Book                           |
| operation         | Sylius\\Resource\\Metadata\\Update           |
| resource_metadata | Sylius\\Resource\\Metadata\\ResourceMetadata |
| app               | Symfony\\Bridge\\Twig\\AppVariable           |`,frontmatter:{},index:14,start:275,end:289},filepath:"/home/runner/work/sylius-resource-formation/sylius-resource-formation/pages/03_configure_your_operations.md",noteHTML:"",id:21,no:22},__clicksElements:[],__preloaded:!1}},{path:"23",name:"page-23",component:_9,meta:{srcSequence:"./pages/03_configure_your_operations.md",slide:{raw:`
# Delete operation

\`Delete\` operation allows to remove an existing item of your resource.

\`\`\`php {all|8|8,3}
namespace App\\Entity;

use Sylius\\Resource\\Metadata\\Delete;
use Sylius\\Resource\\Metadata\\AsResource;
use Sylius\\Resource\\Model\\ResourceInterface;

#[AsResource]
#[Delete]
class Book implements ResourceInterface
{
}

\`\`\`
`,title:"Delete operation",level:1,content:`# Delete operation

\`Delete\` operation allows to remove an existing item of your resource.

\`\`\`php {all|8|8,3}
namespace App\\Entity;

use Sylius\\Resource\\Metadata\\Delete;
use Sylius\\Resource\\Metadata\\AsResource;
use Sylius\\Resource\\Model\\ResourceInterface;

#[AsResource]
#[Delete]
class Book implements ResourceInterface
{
}

\`\`\``,frontmatter:{srcSequence:"./pages/03_configure_your_operations.md"},index:22,start:290,end:310,source:{filepath:"/home/runner/work/sylius-resource-formation/sylius-resource-formation/pages/03_configure_your_operations.md",raw:`
# Delete operation

\`Delete\` operation allows to remove an existing item of your resource.

\`\`\`php {all|8|8,3}
namespace App\\Entity;

use Sylius\\Resource\\Metadata\\Delete;
use Sylius\\Resource\\Metadata\\AsResource;
use Sylius\\Resource\\Model\\ResourceInterface;

#[AsResource]
#[Delete]
class Book implements ResourceInterface
{
}

\`\`\`
`,title:"Delete operation",level:1,content:`# Delete operation

\`Delete\` operation allows to remove an existing item of your resource.

\`\`\`php {all|8|8,3}
namespace App\\Entity;

use Sylius\\Resource\\Metadata\\Delete;
use Sylius\\Resource\\Metadata\\AsResource;
use Sylius\\Resource\\Model\\ResourceInterface;

#[AsResource]
#[Delete]
class Book implements ResourceInterface
{
}

\`\`\``,frontmatter:{},index:15,start:290,end:310},filepath:"/home/runner/work/sylius-resource-formation/sylius-resource-formation/pages/03_configure_your_operations.md",noteHTML:"",id:22,no:23},__clicksElements:[],__preloaded:!1}},{path:"24",name:"page-24",component:C9,meta:{srcSequence:"./pages/03_configure_your_operations.md",slide:{raw:`
# Delete operation

It will configure this route for your \`delete\` operation.

| Name            | Method | Path        |
|-----------------|--------|-------------|
| app_book_delete | DELETE | /books/{id} |
`,title:"Delete operation",level:1,content:`# Delete operation

It will configure this route for your \`delete\` operation.

| Name            | Method | Path        |
|-----------------|--------|-------------|
| app_book_delete | DELETE | /books/{id} |`,frontmatter:{srcSequence:"./pages/03_configure_your_operations.md"},index:23,start:311,end:320,source:{filepath:"/home/runner/work/sylius-resource-formation/sylius-resource-formation/pages/03_configure_your_operations.md",raw:`
# Delete operation

It will configure this route for your \`delete\` operation.

| Name            | Method | Path        |
|-----------------|--------|-------------|
| app_book_delete | DELETE | /books/{id} |
`,title:"Delete operation",level:1,content:`# Delete operation

It will configure this route for your \`delete\` operation.

| Name            | Method | Path        |
|-----------------|--------|-------------|
| app_book_delete | DELETE | /books/{id} |`,frontmatter:{},index:16,start:311,end:320},filepath:"/home/runner/work/sylius-resource-formation/sylius-resource-formation/pages/03_configure_your_operations.md",noteHTML:"",id:23,no:24},__clicksElements:[],__preloaded:!1}},{path:"25",name:"page-25",component:w9,meta:{srcSequence:"./pages/03_configure_your_operations.md",slide:{raw:`
# Bulk delete operation

\`Bulk delete\` operation allows to remove several items of your resource at the same time.

\`\`\`php {all|8|8,3}
namespace App\\Entity;

use Sylius\\Resource\\Metadata\\BulkDelete;
use Sylius\\Resource\\Metadata\\AsResource;
use Sylius\\Resource\\Model\\ResourceInterface;

#[AsResource]
#[BulkDelete]
class Book implements ResourceInterface
{
}

\`\`\`
`,title:"Bulk delete operation",level:1,content:`# Bulk delete operation

\`Bulk delete\` operation allows to remove several items of your resource at the same time.

\`\`\`php {all|8|8,3}
namespace App\\Entity;

use Sylius\\Resource\\Metadata\\BulkDelete;
use Sylius\\Resource\\Metadata\\AsResource;
use Sylius\\Resource\\Model\\ResourceInterface;

#[AsResource]
#[BulkDelete]
class Book implements ResourceInterface
{
}

\`\`\``,frontmatter:{srcSequence:"./pages/03_configure_your_operations.md"},index:24,start:321,end:341,source:{filepath:"/home/runner/work/sylius-resource-formation/sylius-resource-formation/pages/03_configure_your_operations.md",raw:`
# Bulk delete operation

\`Bulk delete\` operation allows to remove several items of your resource at the same time.

\`\`\`php {all|8|8,3}
namespace App\\Entity;

use Sylius\\Resource\\Metadata\\BulkDelete;
use Sylius\\Resource\\Metadata\\AsResource;
use Sylius\\Resource\\Model\\ResourceInterface;

#[AsResource]
#[BulkDelete]
class Book implements ResourceInterface
{
}

\`\`\`
`,title:"Bulk delete operation",level:1,content:`# Bulk delete operation

\`Bulk delete\` operation allows to remove several items of your resource at the same time.

\`\`\`php {all|8|8,3}
namespace App\\Entity;

use Sylius\\Resource\\Metadata\\BulkDelete;
use Sylius\\Resource\\Metadata\\AsResource;
use Sylius\\Resource\\Model\\ResourceInterface;

#[AsResource]
#[BulkDelete]
class Book implements ResourceInterface
{
}

\`\`\``,frontmatter:{},index:17,start:321,end:341},filepath:"/home/runner/work/sylius-resource-formation/sylius-resource-formation/pages/03_configure_your_operations.md",noteHTML:"",id:24,no:25},__clicksElements:[],__preloaded:!1}},{path:"26",name:"page-26",component:F9,meta:{srcSequence:"./pages/03_configure_your_operations.md",slide:{raw:`
# Bulk delete operation

It will configure this route for your \`bulk_delete\` operation.

| Name                 | Method | Path               |
|----------------------|--------|--------------------|
| app_book_bulk_delete | DELETE | /books/bulk_delete |    
`,title:"Bulk delete operation",level:1,content:`# Bulk delete operation

It will configure this route for your \`bulk_delete\` operation.

| Name                 | Method | Path               |
|----------------------|--------|--------------------|
| app_book_bulk_delete | DELETE | /books/bulk_delete |`,frontmatter:{srcSequence:"./pages/03_configure_your_operations.md"},index:25,start:342,end:351,source:{filepath:"/home/runner/work/sylius-resource-formation/sylius-resource-formation/pages/03_configure_your_operations.md",raw:`
# Bulk delete operation

It will configure this route for your \`bulk_delete\` operation.

| Name                 | Method | Path               |
|----------------------|--------|--------------------|
| app_book_bulk_delete | DELETE | /books/bulk_delete |    
`,title:"Bulk delete operation",level:1,content:`# Bulk delete operation

It will configure this route for your \`bulk_delete\` operation.

| Name                 | Method | Path               |
|----------------------|--------|--------------------|
| app_book_bulk_delete | DELETE | /books/bulk_delete |`,frontmatter:{},index:18,start:342,end:351},filepath:"/home/runner/work/sylius-resource-formation/sylius-resource-formation/pages/03_configure_your_operations.md",noteHTML:"",id:25,no:26},__clicksElements:[],__preloaded:!1}},{path:"27",name:"page-27",component:O9,meta:{srcSequence:"./pages/03_configure_your_operations.md",slide:{raw:`
# Show operation

\`Show\` operation allows to view details of an item.

\`\`\`php {all|8|8,3}
namespace App\\Entity;

use Sylius\\Resource\\Metadata\\AsResource;
use Sylius\\Resource\\Metadata\\Show;
use Sylius\\Resource\\Model\\ResourceInterface;

#[AsResource]
#[Show]
class Book implements ResourceInterface
{
}

\`\`\`
`,title:"Show operation",level:1,content:`# Show operation

\`Show\` operation allows to view details of an item.

\`\`\`php {all|8|8,3}
namespace App\\Entity;

use Sylius\\Resource\\Metadata\\AsResource;
use Sylius\\Resource\\Metadata\\Show;
use Sylius\\Resource\\Model\\ResourceInterface;

#[AsResource]
#[Show]
class Book implements ResourceInterface
{
}

\`\`\``,frontmatter:{srcSequence:"./pages/03_configure_your_operations.md"},index:26,start:352,end:372,source:{filepath:"/home/runner/work/sylius-resource-formation/sylius-resource-formation/pages/03_configure_your_operations.md",raw:`
# Show operation

\`Show\` operation allows to view details of an item.

\`\`\`php {all|8|8,3}
namespace App\\Entity;

use Sylius\\Resource\\Metadata\\AsResource;
use Sylius\\Resource\\Metadata\\Show;
use Sylius\\Resource\\Model\\ResourceInterface;

#[AsResource]
#[Show]
class Book implements ResourceInterface
{
}

\`\`\`
`,title:"Show operation",level:1,content:`# Show operation

\`Show\` operation allows to view details of an item.

\`\`\`php {all|8|8,3}
namespace App\\Entity;

use Sylius\\Resource\\Metadata\\AsResource;
use Sylius\\Resource\\Metadata\\Show;
use Sylius\\Resource\\Model\\ResourceInterface;

#[AsResource]
#[Show]
class Book implements ResourceInterface
{
}

\`\`\``,frontmatter:{},index:19,start:352,end:372},filepath:"/home/runner/work/sylius-resource-formation/sylius-resource-formation/pages/03_configure_your_operations.md",noteHTML:"",id:26,no:27},__clicksElements:[],__preloaded:!1}},{path:"28",name:"page-28",component:U9,meta:{srcSequence:"./pages/03_configure_your_operations.md",slide:{raw:`
# Show operation

It will configure this route for your \`show\` operation.

| Name          | Method | Path        |
|---------------|--------|-------------|
| app_book_show | GET    | /books/{id} |    
`,title:"Show operation",level:1,content:`# Show operation

It will configure this route for your \`show\` operation.

| Name          | Method | Path        |
|---------------|--------|-------------|
| app_book_show | GET    | /books/{id} |`,frontmatter:{srcSequence:"./pages/03_configure_your_operations.md"},index:27,start:373,end:382,source:{filepath:"/home/runner/work/sylius-resource-formation/sylius-resource-formation/pages/03_configure_your_operations.md",raw:`
# Show operation

It will configure this route for your \`show\` operation.

| Name          | Method | Path        |
|---------------|--------|-------------|
| app_book_show | GET    | /books/{id} |    
`,title:"Show operation",level:1,content:`# Show operation

It will configure this route for your \`show\` operation.

| Name          | Method | Path        |
|---------------|--------|-------------|
| app_book_show | GET    | /books/{id} |`,frontmatter:{},index:20,start:373,end:382},filepath:"/home/runner/work/sylius-resource-formation/sylius-resource-formation/pages/03_configure_your_operations.md",noteHTML:"",id:27,no:28},__clicksElements:[],__preloaded:!1}},{path:"29",name:"page-29",component:z9,meta:{srcSequence:"./pages/03_configure_your_operations.md",slide:{raw:`
# Show operation

On your Twig template, these variables are available

| Name              | Type                                      |
|-------------------|-------------------------------------------|
| resource          | App\\Entity\\Book                           |
| book              | App\\Entity\\Book                           |
| operation         | Sylius\\Resource\\Metadata\\Show             |
| resource_metadata | Sylius\\Resource\\Metadata\\ResourceMetadata |
| app               | Symfony\\Bridge\\Twig\\AppVariable           |
`,title:"Show operation",level:1,content:`# Show operation

On your Twig template, these variables are available

| Name              | Type                                      |
|-------------------|-------------------------------------------|
| resource          | App\\Entity\\Book                           |
| book              | App\\Entity\\Book                           |
| operation         | Sylius\\Resource\\Metadata\\Show             |
| resource_metadata | Sylius\\Resource\\Metadata\\ResourceMetadata |
| app               | Symfony\\Bridge\\Twig\\AppVariable           |`,frontmatter:{srcSequence:"./pages/03_configure_your_operations.md"},index:28,start:383,end:396,source:{filepath:"/home/runner/work/sylius-resource-formation/sylius-resource-formation/pages/03_configure_your_operations.md",raw:`
# Show operation

On your Twig template, these variables are available

| Name              | Type                                      |
|-------------------|-------------------------------------------|
| resource          | App\\Entity\\Book                           |
| book              | App\\Entity\\Book                           |
| operation         | Sylius\\Resource\\Metadata\\Show             |
| resource_metadata | Sylius\\Resource\\Metadata\\ResourceMetadata |
| app               | Symfony\\Bridge\\Twig\\AppVariable           |
`,title:"Show operation",level:1,content:`# Show operation

On your Twig template, these variables are available

| Name              | Type                                      |
|-------------------|-------------------------------------------|
| resource          | App\\Entity\\Book                           |
| book              | App\\Entity\\Book                           |
| operation         | Sylius\\Resource\\Metadata\\Show             |
| resource_metadata | Sylius\\Resource\\Metadata\\ResourceMetadata |
| app               | Symfony\\Bridge\\Twig\\AppVariable           |`,frontmatter:{},index:21,start:383,end:396},filepath:"/home/runner/work/sylius-resource-formation/sylius-resource-formation/pages/03_configure_your_operations.md",noteHTML:"",id:28,no:29},__clicksElements:[],__preloaded:!1}},{path:"30",name:"page-30",component:X9,meta:{srcSequence:"./pages/03_configure_your_operations.md",slide:{raw:`
# State machine operation

\`State machine\` operation allows to apply a transition to an item of your resource.

As an example, we add a \`publish\` operation to our book resource.

\`\`\`php {all|8|8,3}
namespace App\\Entity;

use Sylius\\Resource\\Metadata\\ApplyStateMachineTransition;
use Sylius\\Resource\\Metadata\\AsResource;
use Sylius\\Resource\\Metadata\\Show;
use Sylius\\Resource\\Model\\ResourceInterface;

#[AsResource]
#[ApplyStateMachineTransition(stateMachineTransition: 'publish')]
class Book implements ResourceInterface
{
}

\`\`\`
`,title:"State machine operation",level:1,content:`# State machine operation

\`State machine\` operation allows to apply a transition to an item of your resource.

As an example, we add a \`publish\` operation to our book resource.

\`\`\`php {all|8|8,3}
namespace App\\Entity;

use Sylius\\Resource\\Metadata\\ApplyStateMachineTransition;
use Sylius\\Resource\\Metadata\\AsResource;
use Sylius\\Resource\\Metadata\\Show;
use Sylius\\Resource\\Model\\ResourceInterface;

#[AsResource]
#[ApplyStateMachineTransition(stateMachineTransition: 'publish')]
class Book implements ResourceInterface
{
}

\`\`\``,frontmatter:{srcSequence:"./pages/03_configure_your_operations.md"},index:29,start:397,end:420,source:{filepath:"/home/runner/work/sylius-resource-formation/sylius-resource-formation/pages/03_configure_your_operations.md",raw:`
# State machine operation

\`State machine\` operation allows to apply a transition to an item of your resource.

As an example, we add a \`publish\` operation to our book resource.

\`\`\`php {all|8|8,3}
namespace App\\Entity;

use Sylius\\Resource\\Metadata\\ApplyStateMachineTransition;
use Sylius\\Resource\\Metadata\\AsResource;
use Sylius\\Resource\\Metadata\\Show;
use Sylius\\Resource\\Model\\ResourceInterface;

#[AsResource]
#[ApplyStateMachineTransition(stateMachineTransition: 'publish')]
class Book implements ResourceInterface
{
}

\`\`\`
`,title:"State machine operation",level:1,content:`# State machine operation

\`State machine\` operation allows to apply a transition to an item of your resource.

As an example, we add a \`publish\` operation to our book resource.

\`\`\`php {all|8|8,3}
namespace App\\Entity;

use Sylius\\Resource\\Metadata\\ApplyStateMachineTransition;
use Sylius\\Resource\\Metadata\\AsResource;
use Sylius\\Resource\\Metadata\\Show;
use Sylius\\Resource\\Model\\ResourceInterface;

#[AsResource]
#[ApplyStateMachineTransition(stateMachineTransition: 'publish')]
class Book implements ResourceInterface
{
}

\`\`\``,frontmatter:{},index:22,start:397,end:420},filepath:"/home/runner/work/sylius-resource-formation/sylius-resource-formation/pages/03_configure_your_operations.md",noteHTML:"",id:29,no:30},__clicksElements:[],__preloaded:!1}},{path:"31",name:"page-31",component:t4,meta:{srcSequence:"./pages/03_configure_your_operations.md",slide:{raw:`
# State machine operation

It will configure this route for your \`apply_state_machine_transition\` operation.

| Name             | Method | Path                |
|------------------|--------|---------------------|
| app_book_publish | GET    | /books/{id}/publish |    
`,title:"State machine operation",level:1,content:`# State machine operation

It will configure this route for your \`apply_state_machine_transition\` operation.

| Name             | Method | Path                |
|------------------|--------|---------------------|
| app_book_publish | GET    | /books/{id}/publish |`,frontmatter:{srcSequence:"./pages/03_configure_your_operations.md"},index:30,start:421,end:430,source:{filepath:"/home/runner/work/sylius-resource-formation/sylius-resource-formation/pages/03_configure_your_operations.md",raw:`
# State machine operation

It will configure this route for your \`apply_state_machine_transition\` operation.

| Name             | Method | Path                |
|------------------|--------|---------------------|
| app_book_publish | GET    | /books/{id}/publish |    
`,title:"State machine operation",level:1,content:`# State machine operation

It will configure this route for your \`apply_state_machine_transition\` operation.

| Name             | Method | Path                |
|------------------|--------|---------------------|
| app_book_publish | GET    | /books/{id}/publish |`,frontmatter:{},index:23,start:421,end:430},filepath:"/home/runner/work/sylius-resource-formation/sylius-resource-formation/pages/03_configure_your_operations.md",noteHTML:"",id:30,no:31},__clicksElements:[],__preloaded:!1}},{path:"32",name:"page-32",component:p4,meta:{srcSequence:"./pages/03_configure_your_operations.md",slide:{raw:`
# Configure the templates' dir

<v-clicks>

It defines the templates directory for your operations.

As an example, we defines \`index\`, \`create\`, \`update\` and \`show\` operations to our book resource.

\`\`\`php {all|10}
namespace App\\Entity;

use Sylius\\Resource\\Metadata\\Create;
use Sylius\\Resource\\Metadata\\Index;
use Sylius\\Resource\\Metadata\\Resource;
use Sylius\\Resource\\Metadata\\Show;
use Sylius\\Resource\\Metadata\\Update;
use Sylius\\Resource\\Model\\ResourceInterface;

#[AsResource(templatesDir: 'book')]
#[Index]
#[Create]
#[Update]
#[Show]
class Book implements ResourceInterface
{
}

\`\`\`

</v-clicks>
`,title:"Configure the templates' dir",level:1,content:`# Configure the templates' dir

<v-clicks>

It defines the templates directory for your operations.

As an example, we defines \`index\`, \`create\`, \`update\` and \`show\` operations to our book resource.

\`\`\`php {all|10}
namespace App\\Entity;

use Sylius\\Resource\\Metadata\\Create;
use Sylius\\Resource\\Metadata\\Index;
use Sylius\\Resource\\Metadata\\Resource;
use Sylius\\Resource\\Metadata\\Show;
use Sylius\\Resource\\Metadata\\Update;
use Sylius\\Resource\\Model\\ResourceInterface;

#[AsResource(templatesDir: 'book')]
#[Index]
#[Create]
#[Update]
#[Show]
class Book implements ResourceInterface
{
}

\`\`\`

</v-clicks>`,frontmatter:{srcSequence:"./pages/03_configure_your_operations.md"},index:31,start:431,end:463,source:{filepath:"/home/runner/work/sylius-resource-formation/sylius-resource-formation/pages/03_configure_your_operations.md",raw:`
# Configure the templates' dir

<v-clicks>

It defines the templates directory for your operations.

As an example, we defines \`index\`, \`create\`, \`update\` and \`show\` operations to our book resource.

\`\`\`php {all|10}
namespace App\\Entity;

use Sylius\\Resource\\Metadata\\Create;
use Sylius\\Resource\\Metadata\\Index;
use Sylius\\Resource\\Metadata\\Resource;
use Sylius\\Resource\\Metadata\\Show;
use Sylius\\Resource\\Metadata\\Update;
use Sylius\\Resource\\Model\\ResourceInterface;

#[AsResource(templatesDir: 'book')]
#[Index]
#[Create]
#[Update]
#[Show]
class Book implements ResourceInterface
{
}

\`\`\`

</v-clicks>
`,title:"Configure the templates' dir",level:1,content:`# Configure the templates' dir

<v-clicks>

It defines the templates directory for your operations.

As an example, we defines \`index\`, \`create\`, \`update\` and \`show\` operations to our book resource.

\`\`\`php {all|10}
namespace App\\Entity;

use Sylius\\Resource\\Metadata\\Create;
use Sylius\\Resource\\Metadata\\Index;
use Sylius\\Resource\\Metadata\\Resource;
use Sylius\\Resource\\Metadata\\Show;
use Sylius\\Resource\\Metadata\\Update;
use Sylius\\Resource\\Model\\ResourceInterface;

#[AsResource(templatesDir: 'book')]
#[Index]
#[Create]
#[Update]
#[Show]
class Book implements ResourceInterface
{
}

\`\`\`

</v-clicks>`,frontmatter:{},index:24,start:431,end:463},filepath:"/home/runner/work/sylius-resource-formation/sylius-resource-formation/pages/03_configure_your_operations.md",noteHTML:"",id:31,no:32},__clicksElements:[],__preloaded:!1}},{path:"33",name:"page-33",component:f4,meta:{srcSequence:"./pages/03_configure_your_operations.md",slide:{raw:`
# Configure the templates' dir

| Operation | Template Path                    |
|-----------|----------------------------------|
| index     | templates/books/index.html.twig  |  
| create    | templates/books/create.html.twig |   
| update    | templates/books/update.html.twig |   
| show      | templates/books/show.html.twig   |
`,title:"Configure the templates' dir",level:1,content:`# Configure the templates' dir

| Operation | Template Path                    |
|-----------|----------------------------------|
| index     | templates/books/index.html.twig  |  
| create    | templates/books/create.html.twig |   
| update    | templates/books/update.html.twig |   
| show      | templates/books/show.html.twig   |`,frontmatter:{srcSequence:"./pages/03_configure_your_operations.md"},index:32,start:464,end:474,source:{filepath:"/home/runner/work/sylius-resource-formation/sylius-resource-formation/pages/03_configure_your_operations.md",raw:`
# Configure the templates' dir

| Operation | Template Path                    |
|-----------|----------------------------------|
| index     | templates/books/index.html.twig  |  
| create    | templates/books/create.html.twig |   
| update    | templates/books/update.html.twig |   
| show      | templates/books/show.html.twig   |
`,title:"Configure the templates' dir",level:1,content:`# Configure the templates' dir

| Operation | Template Path                    |
|-----------|----------------------------------|
| index     | templates/books/index.html.twig  |  
| create    | templates/books/create.html.twig |   
| update    | templates/books/update.html.twig |   
| show      | templates/books/show.html.twig   |`,frontmatter:{},index:25,start:464,end:474},filepath:"/home/runner/work/sylius-resource-formation/sylius-resource-formation/pages/03_configure_your_operations.md",noteHTML:"",id:32,no:33},__clicksElements:[],__preloaded:!1}},{path:"34",name:"page-34",component:A4,meta:{srcSequence:"./pages/03_configure_your_operations.md",slide:{raw:`
# Configure the routes' prefix

<v-clicks>

It adds a prefix to the path for each operation.

\`\`\`php {all|5}
namespace App\\Entity;

// [...]

#[AsResource(routePrefix: 'admin')]
#[Index]
#[Create]
#[Update]
#[Delete]
#[BulkDelete]
#[Show]
class Book implements ResourceInterface
{
}

\`\`\`

</v-clicks>

`,title:"Configure the routes' prefix",level:1,content:`# Configure the routes' prefix

<v-clicks>

It adds a prefix to the path for each operation.

\`\`\`php {all|5}
namespace App\\Entity;

// [...]

#[AsResource(routePrefix: 'admin')]
#[Index]
#[Create]
#[Update]
#[Delete]
#[BulkDelete]
#[Show]
class Book implements ResourceInterface
{
}

\`\`\`

</v-clicks>`,frontmatter:{srcSequence:"./pages/03_configure_your_operations.md"},index:33,start:475,end:503,source:{filepath:"/home/runner/work/sylius-resource-formation/sylius-resource-formation/pages/03_configure_your_operations.md",raw:`
# Configure the routes' prefix

<v-clicks>

It adds a prefix to the path for each operation.

\`\`\`php {all|5}
namespace App\\Entity;

// [...]

#[AsResource(routePrefix: 'admin')]
#[Index]
#[Create]
#[Update]
#[Delete]
#[BulkDelete]
#[Show]
class Book implements ResourceInterface
{
}

\`\`\`

</v-clicks>

`,title:"Configure the routes' prefix",level:1,content:`# Configure the routes' prefix

<v-clicks>

It adds a prefix to the path for each operation.

\`\`\`php {all|5}
namespace App\\Entity;

// [...]

#[AsResource(routePrefix: 'admin')]
#[Index]
#[Create]
#[Update]
#[Delete]
#[BulkDelete]
#[Show]
class Book implements ResourceInterface
{
}

\`\`\`

</v-clicks>`,frontmatter:{},index:26,start:475,end:503},filepath:"/home/runner/work/sylius-resource-formation/sylius-resource-formation/pages/03_configure_your_operations.md",noteHTML:"",id:33,no:34},__clicksElements:[],__preloaded:!1}},{path:"35",name:"page-35",component:D4,meta:{srcSequence:"./pages/03_configure_your_operations.md",slide:{raw:`
# Configure the routes' prefix

| Name                 | Method          | Path                     |
|----------------------|-----------------|--------------------------|
| app_book_index       | GET             | /admin/books/            |
| app_book_create      | GET, POST       | /admin/books/new         |                     
| app_book_update      | GET, PUT, PATCH | /admin/books/{id}/edit   |        
| app_book_delete      | DELETE          | /admin/books/{id}        |
| app_book_bulk_delete | DELETE          | /admin/books/bulk_delete |               
| app_book_show        | GET             | /admin/books/{id}        |
`,title:"Configure the routes' prefix",level:1,content:`# Configure the routes' prefix

| Name                 | Method          | Path                     |
|----------------------|-----------------|--------------------------|
| app_book_index       | GET             | /admin/books/            |
| app_book_create      | GET, POST       | /admin/books/new         |                     
| app_book_update      | GET, PUT, PATCH | /admin/books/{id}/edit   |        
| app_book_delete      | DELETE          | /admin/books/{id}        |
| app_book_bulk_delete | DELETE          | /admin/books/bulk_delete |               
| app_book_show        | GET             | /admin/books/{id}        |`,frontmatter:{srcSequence:"./pages/03_configure_your_operations.md"},index:34,start:504,end:516,source:{filepath:"/home/runner/work/sylius-resource-formation/sylius-resource-formation/pages/03_configure_your_operations.md",raw:`
# Configure the routes' prefix

| Name                 | Method          | Path                     |
|----------------------|-----------------|--------------------------|
| app_book_index       | GET             | /admin/books/            |
| app_book_create      | GET, POST       | /admin/books/new         |                     
| app_book_update      | GET, PUT, PATCH | /admin/books/{id}/edit   |        
| app_book_delete      | DELETE          | /admin/books/{id}        |
| app_book_bulk_delete | DELETE          | /admin/books/bulk_delete |               
| app_book_show        | GET             | /admin/books/{id}        |
`,title:"Configure the routes' prefix",level:1,content:`# Configure the routes' prefix

| Name                 | Method          | Path                     |
|----------------------|-----------------|--------------------------|
| app_book_index       | GET             | /admin/books/            |
| app_book_create      | GET, POST       | /admin/books/new         |                     
| app_book_update      | GET, PUT, PATCH | /admin/books/{id}/edit   |        
| app_book_delete      | DELETE          | /admin/books/{id}        |
| app_book_bulk_delete | DELETE          | /admin/books/bulk_delete |               
| app_book_show        | GET             | /admin/books/{id}        |`,frontmatter:{},index:27,start:504,end:516},filepath:"/home/runner/work/sylius-resource-formation/sylius-resource-formation/pages/03_configure_your_operations.md",noteHTML:"",id:34,no:35},__clicksElements:[],__preloaded:!1}},{path:"36",name:"page-36",component:S4,meta:{srcSequence:"./pages/03_configure_your_operations.md",slide:{raw:`
# Configure the section

It changes the route name for each operation.

\`\`\`php {all|5|5,12}
namespace App\\Entity;

// [...]

#[AsResource(section: 'admin', routePrefix: 'admin')]
#[Index]
#[Create]
#[Update]
#[Delete]
#[BulkDelete]

#[AsResource(section: 'shop')]
#[Index]
#[Show]
class Book implements ResourceInterface
{
}

\`\`\`
`,title:"Configure the section",level:1,content:`# Configure the section

It changes the route name for each operation.

\`\`\`php {all|5|5,12}
namespace App\\Entity;

// [...]

#[AsResource(section: 'admin', routePrefix: 'admin')]
#[Index]
#[Create]
#[Update]
#[Delete]
#[BulkDelete]

#[AsResource(section: 'shop')]
#[Index]
#[Show]
class Book implements ResourceInterface
{
}

\`\`\``,frontmatter:{srcSequence:"./pages/03_configure_your_operations.md"},index:35,start:517,end:543,source:{filepath:"/home/runner/work/sylius-resource-formation/sylius-resource-formation/pages/03_configure_your_operations.md",raw:`
# Configure the section

It changes the route name for each operation.

\`\`\`php {all|5|5,12}
namespace App\\Entity;

// [...]

#[AsResource(section: 'admin', routePrefix: 'admin')]
#[Index]
#[Create]
#[Update]
#[Delete]
#[BulkDelete]

#[AsResource(section: 'shop')]
#[Index]
#[Show]
class Book implements ResourceInterface
{
}

\`\`\`
`,title:"Configure the section",level:1,content:`# Configure the section

It changes the route name for each operation.

\`\`\`php {all|5|5,12}
namespace App\\Entity;

// [...]

#[AsResource(section: 'admin', routePrefix: 'admin')]
#[Index]
#[Create]
#[Update]
#[Delete]
#[BulkDelete]

#[AsResource(section: 'shop')]
#[Index]
#[Show]
class Book implements ResourceInterface
{
}

\`\`\``,frontmatter:{},index:28,start:517,end:543},filepath:"/home/runner/work/sylius-resource-formation/sylius-resource-formation/pages/03_configure_your_operations.md",noteHTML:"",id:35,no:36},__clicksElements:[],__preloaded:!1}},{path:"37",name:"page-37",component:F4,meta:{srcSequence:"./pages/03_configure_your_operations.md",slide:{raw:`
# Configure the section

| Name                       | Method          | Path                     |
|----------------------------|-----------------|--------------------------|
| app_admin_book_index       | GET             | /admin/books/            |
| app_admin_book_create      | GET, POST       | /admin/books/new         |                     
| app_admin_book_update      | GET, PUT, PATCH | /admin/books/{id}/edit   |        
| app_admin_book_delete      | DELETE          | /admin/books/{id}        |
| app_admin_book_bulk_delete | DELETE          | /admin/books/bulk_delete |    
| app_shop_book_index        | GET             | /books/                  |
| app_shop_book_show         | GET             | /books/{id}              |
`,title:"Configure the section",level:1,content:`# Configure the section

| Name                       | Method          | Path                     |
|----------------------------|-----------------|--------------------------|
| app_admin_book_index       | GET             | /admin/books/            |
| app_admin_book_create      | GET, POST       | /admin/books/new         |                     
| app_admin_book_update      | GET, PUT, PATCH | /admin/books/{id}/edit   |        
| app_admin_book_delete      | DELETE          | /admin/books/{id}        |
| app_admin_book_bulk_delete | DELETE          | /admin/books/bulk_delete |    
| app_shop_book_index        | GET             | /books/                  |
| app_shop_book_show         | GET             | /books/{id}              |`,frontmatter:{srcSequence:"./pages/03_configure_your_operations.md"},index:36,start:544,end:557,source:{filepath:"/home/runner/work/sylius-resource-formation/sylius-resource-formation/pages/03_configure_your_operations.md",raw:`
# Configure the section

| Name                       | Method          | Path                     |
|----------------------------|-----------------|--------------------------|
| app_admin_book_index       | GET             | /admin/books/            |
| app_admin_book_create      | GET, POST       | /admin/books/new         |                     
| app_admin_book_update      | GET, PUT, PATCH | /admin/books/{id}/edit   |        
| app_admin_book_delete      | DELETE          | /admin/books/{id}        |
| app_admin_book_bulk_delete | DELETE          | /admin/books/bulk_delete |    
| app_shop_book_index        | GET             | /books/                  |
| app_shop_book_show         | GET             | /books/{id}              |
`,title:"Configure the section",level:1,content:`# Configure the section

| Name                       | Method          | Path                     |
|----------------------------|-----------------|--------------------------|
| app_admin_book_index       | GET             | /admin/books/            |
| app_admin_book_create      | GET, POST       | /admin/books/new         |                     
| app_admin_book_update      | GET, PUT, PATCH | /admin/books/{id}/edit   |        
| app_admin_book_delete      | DELETE          | /admin/books/{id}        |
| app_admin_book_bulk_delete | DELETE          | /admin/books/bulk_delete |    
| app_shop_book_index        | GET             | /books/                  |
| app_shop_book_show         | GET             | /books/{id}              |`,frontmatter:{},index:29,start:544,end:557},filepath:"/home/runner/work/sylius-resource-formation/sylius-resource-formation/pages/03_configure_your_operations.md",noteHTML:"",id:36,no:37},__clicksElements:[],__preloaded:!1}},{path:"38",name:"page-38",component:P4,meta:{title:"Redirect",srcSequence:"./pages/04_redirect.md",slide:{raw:null,title:"Redirect",level:1,content:`# Redirect

<v-clicks>

After that an action has been performed, the operation can be redirected to another operation.

</v-clicks>`,frontmatter:{title:"Redirect",srcSequence:"./pages/04_redirect.md"},index:37,start:0,end:8,source:{filepath:"/home/runner/work/sylius-resource-formation/sylius-resource-formation/pages/04_redirect.md",raw:`# Redirect

<v-clicks>

After that an action has been performed, the operation can be redirected to another operation.

</v-clicks>
`,title:"Redirect",level:1,content:`# Redirect

<v-clicks>

After that an action has been performed, the operation can be redirected to another operation.

</v-clicks>`,frontmatter:{title:"Redirect"},index:0,start:0,end:8},inline:{raw:`---
src: ./pages/04_redirect.md
---
`,content:"",frontmatter:{},index:4,start:52,end:56},filepath:"/home/runner/work/sylius-resource-formation/sylius-resource-formation/pages/04_redirect.md",noteHTML:"",id:37,no:38},__clicksElements:[],__preloaded:!1}},{path:"39",name:"page-39",component:H4,meta:{srcSequence:"./pages/04_redirect.md",slide:{raw:`
# Default redirections

<v-clicks>

Redirections are configured on your operations with these default behaviours.

| Operation   | Redirection                         |
|-------------|-------------------------------------|
| create      | \`show\` if exists, otherwise \`index\` |
| update      | \`show\` if exists, otherwise \`index\` |  
| delete      | \`index\`                             |
| bulk_delete | \`index\`                             |

</v-clicks>
`,title:"Default redirections",level:1,content:`# Default redirections

<v-clicks>

Redirections are configured on your operations with these default behaviours.

| Operation   | Redirection                         |
|-------------|-------------------------------------|
| create      | \`show\` if exists, otherwise \`index\` |
| update      | \`show\` if exists, otherwise \`index\` |  
| delete      | \`index\`                             |
| bulk_delete | \`index\`                             |

</v-clicks>`,frontmatter:{srcSequence:"./pages/04_redirect.md"},index:38,start:9,end:25,source:{filepath:"/home/runner/work/sylius-resource-formation/sylius-resource-formation/pages/04_redirect.md",raw:`
# Default redirections

<v-clicks>

Redirections are configured on your operations with these default behaviours.

| Operation   | Redirection                         |
|-------------|-------------------------------------|
| create      | \`show\` if exists, otherwise \`index\` |
| update      | \`show\` if exists, otherwise \`index\` |  
| delete      | \`index\`                             |
| bulk_delete | \`index\`                             |

</v-clicks>
`,title:"Default redirections",level:1,content:`# Default redirections

<v-clicks>

Redirections are configured on your operations with these default behaviours.

| Operation   | Redirection                         |
|-------------|-------------------------------------|
| create      | \`show\` if exists, otherwise \`index\` |
| update      | \`show\` if exists, otherwise \`index\` |  
| delete      | \`index\`                             |
| bulk_delete | \`index\`                             |

</v-clicks>`,frontmatter:{},index:1,start:9,end:25},filepath:"/home/runner/work/sylius-resource-formation/sylius-resource-formation/pages/04_redirect.md",noteHTML:"",id:38,no:39},__clicksElements:[],__preloaded:!1}},{path:"40",name:"page-40",component:z4,meta:{srcSequence:"./pages/04_redirect.md",slide:{raw:`
# Custom redirection

<v-clicks>

As an example, let's configure a custom redirection fo create & update operations.

\`\`\`php {all|12-13}

declare(strict_types=1);

namespace App\\Entity;

use Sylius\\Resource\\Metadata\\Create;
use Sylius\\Resource\\Metadata\\AsResource;
use Sylius\\Resource\\Metadata\\Update;
use Sylius\\Resource\\Model\\ResourceInterface;

#[AsResource]
#[Create(redirectToRoute: 'app_book_update')]
#[Update(redirectToRoute: 'app_book_update')]
class Book implements ResourceInterface
{
}
\`\`\`

After adding or editing a book, it will be redirected to the edition page of a book.

</v-clicks>
`,title:"Custom redirection",level:1,content:`# Custom redirection

<v-clicks>

As an example, let's configure a custom redirection fo create & update operations.

\`\`\`php {all|12-13}

declare(strict_types=1);

namespace App\\Entity;

use Sylius\\Resource\\Metadata\\Create;
use Sylius\\Resource\\Metadata\\AsResource;
use Sylius\\Resource\\Metadata\\Update;
use Sylius\\Resource\\Model\\ResourceInterface;

#[AsResource]
#[Create(redirectToRoute: 'app_book_update')]
#[Update(redirectToRoute: 'app_book_update')]
class Book implements ResourceInterface
{
}
\`\`\`

After adding or editing a book, it will be redirected to the edition page of a book.

</v-clicks>`,frontmatter:{srcSequence:"./pages/04_redirect.md"},index:39,start:26,end:56,source:{filepath:"/home/runner/work/sylius-resource-formation/sylius-resource-formation/pages/04_redirect.md",raw:`
# Custom redirection

<v-clicks>

As an example, let's configure a custom redirection fo create & update operations.

\`\`\`php {all|12-13}

declare(strict_types=1);

namespace App\\Entity;

use Sylius\\Resource\\Metadata\\Create;
use Sylius\\Resource\\Metadata\\AsResource;
use Sylius\\Resource\\Metadata\\Update;
use Sylius\\Resource\\Model\\ResourceInterface;

#[AsResource]
#[Create(redirectToRoute: 'app_book_update')]
#[Update(redirectToRoute: 'app_book_update')]
class Book implements ResourceInterface
{
}
\`\`\`

After adding or editing a book, it will be redirected to the edition page of a book.

</v-clicks>
`,title:"Custom redirection",level:1,content:`# Custom redirection

<v-clicks>

As an example, let's configure a custom redirection fo create & update operations.

\`\`\`php {all|12-13}

declare(strict_types=1);

namespace App\\Entity;

use Sylius\\Resource\\Metadata\\Create;
use Sylius\\Resource\\Metadata\\AsResource;
use Sylius\\Resource\\Metadata\\Update;
use Sylius\\Resource\\Model\\ResourceInterface;

#[AsResource]
#[Create(redirectToRoute: 'app_book_update')]
#[Update(redirectToRoute: 'app_book_update')]
class Book implements ResourceInterface
{
}
\`\`\`

After adding or editing a book, it will be redirected to the edition page of a book.

</v-clicks>`,frontmatter:{},index:2,start:26,end:56},filepath:"/home/runner/work/sylius-resource-formation/sylius-resource-formation/pages/04_redirect.md",noteHTML:"",id:39,no:40},__clicksElements:[],__preloaded:!1}},{path:"41",name:"page-41",component:e7,meta:{srcSequence:"./pages/04_redirect.md",slide:{raw:`
# Pass arguments to your redirection

<v-clicks>

You can pass arguments to your redirection method.

2 variables are available:

* \`resource\`: to retrieve data from the instantiated resource
* \`{name_of_your_resource}\`: If your resource is a book instance, it will be also available as \`book\` variable

It uses the [Symfony expression language](https://symfony.com/doc/current/components/expression_language.html) component.

</v-clicks>
`,title:"Pass arguments to your redirection",level:1,content:`# Pass arguments to your redirection

<v-clicks>

You can pass arguments to your redirection method.

2 variables are available:

* \`resource\`: to retrieve data from the instantiated resource
* \`{name_of_your_resource}\`: If your resource is a book instance, it will be also available as \`book\` variable

It uses the [Symfony expression language](https://symfony.com/doc/current/components/expression_language.html) component.

</v-clicks>`,frontmatter:{srcSequence:"./pages/04_redirect.md"},index:40,start:57,end:73,source:{filepath:"/home/runner/work/sylius-resource-formation/sylius-resource-formation/pages/04_redirect.md",raw:`
# Pass arguments to your redirection

<v-clicks>

You can pass arguments to your redirection method.

2 variables are available:

* \`resource\`: to retrieve data from the instantiated resource
* \`{name_of_your_resource}\`: If your resource is a book instance, it will be also available as \`book\` variable

It uses the [Symfony expression language](https://symfony.com/doc/current/components/expression_language.html) component.

</v-clicks>
`,title:"Pass arguments to your redirection",level:1,content:`# Pass arguments to your redirection

<v-clicks>

You can pass arguments to your redirection method.

2 variables are available:

* \`resource\`: to retrieve data from the instantiated resource
* \`{name_of_your_resource}\`: If your resource is a book instance, it will be also available as \`book\` variable

It uses the [Symfony expression language](https://symfony.com/doc/current/components/expression_language.html) component.

</v-clicks>`,frontmatter:{},index:3,start:57,end:73},filepath:"/home/runner/work/sylius-resource-formation/sylius-resource-formation/pages/04_redirect.md",noteHTML:"",id:40,no:41},__clicksElements:[],__preloaded:!1}},{path:"42",name:"page-42",component:l7,meta:{srcSequence:"./pages/04_redirect.md",slide:{raw:`
# Pass arguments to your redirection

<v-clicks>

As an example, let's redirect a book creation to the author details page of the created book.

\`\`\`php {all|13|14-15|16-17}

declare(strict_types=1);

namespace App\\Entity;

use Sylius\\Component\\Resource\\Metadata\\Create;
use Sylius\\Component\\Resource\\Metadata\\Resource;
use Sylius\\Component\\Resource\\Metadata\\Update;
use Sylius\\Component\\Resource\\Model\\ResourceInterface;

#[Resource]
#[Create(
    redirectToRoute: 'app_author_show', 
    # You can use either the generic resource variable
    redirectArguments: ['id' => 'resource.getAuthor().getId()']
    # Or you can use the resource name
    redirectArguments: ['id' => 'book.getAuthor().getId()']
)]
class Book implements ResourceInterface
{
}
\`\`\`

</v-clicks>
`,title:"Pass arguments to your redirection",level:1,content:`# Pass arguments to your redirection

<v-clicks>

As an example, let's redirect a book creation to the author details page of the created book.

\`\`\`php {all|13|14-15|16-17}

declare(strict_types=1);

namespace App\\Entity;

use Sylius\\Component\\Resource\\Metadata\\Create;
use Sylius\\Component\\Resource\\Metadata\\Resource;
use Sylius\\Component\\Resource\\Metadata\\Update;
use Sylius\\Component\\Resource\\Model\\ResourceInterface;

#[Resource]
#[Create(
    redirectToRoute: 'app_author_show', 
    # You can use either the generic resource variable
    redirectArguments: ['id' => 'resource.getAuthor().getId()']
    # Or you can use the resource name
    redirectArguments: ['id' => 'book.getAuthor().getId()']
)]
class Book implements ResourceInterface
{
}
\`\`\`

</v-clicks>`,frontmatter:{srcSequence:"./pages/04_redirect.md"},index:41,start:74,end:107,source:{filepath:"/home/runner/work/sylius-resource-formation/sylius-resource-formation/pages/04_redirect.md",raw:`
# Pass arguments to your redirection

<v-clicks>

As an example, let's redirect a book creation to the author details page of the created book.

\`\`\`php {all|13|14-15|16-17}

declare(strict_types=1);

namespace App\\Entity;

use Sylius\\Component\\Resource\\Metadata\\Create;
use Sylius\\Component\\Resource\\Metadata\\Resource;
use Sylius\\Component\\Resource\\Metadata\\Update;
use Sylius\\Component\\Resource\\Model\\ResourceInterface;

#[Resource]
#[Create(
    redirectToRoute: 'app_author_show', 
    # You can use either the generic resource variable
    redirectArguments: ['id' => 'resource.getAuthor().getId()']
    # Or you can use the resource name
    redirectArguments: ['id' => 'book.getAuthor().getId()']
)]
class Book implements ResourceInterface
{
}
\`\`\`

</v-clicks>
`,title:"Pass arguments to your redirection",level:1,content:`# Pass arguments to your redirection

<v-clicks>

As an example, let's redirect a book creation to the author details page of the created book.

\`\`\`php {all|13|14-15|16-17}

declare(strict_types=1);

namespace App\\Entity;

use Sylius\\Component\\Resource\\Metadata\\Create;
use Sylius\\Component\\Resource\\Metadata\\Resource;
use Sylius\\Component\\Resource\\Metadata\\Update;
use Sylius\\Component\\Resource\\Model\\ResourceInterface;

#[Resource]
#[Create(
    redirectToRoute: 'app_author_show', 
    # You can use either the generic resource variable
    redirectArguments: ['id' => 'resource.getAuthor().getId()']
    # Or you can use the resource name
    redirectArguments: ['id' => 'book.getAuthor().getId()']
)]
class Book implements ResourceInterface
{
}
\`\`\`

</v-clicks>`,frontmatter:{},index:4,start:74,end:107},filepath:"/home/runner/work/sylius-resource-formation/sylius-resource-formation/pages/04_redirect.md",noteHTML:"",id:41,no:42},__clicksElements:[],__preloaded:!1}},{path:"43",name:"page-43",component:i7,meta:{title:"Resource factories",srcSequence:"./pages/05_resource_factories.md",slide:{raw:null,title:"Resource factories",level:1,content:`# Resource factories

<v-clicks>

Resource factories are used on Create operations to instantiate your resource.

</v-clicks>`,frontmatter:{title:"Resource factories",srcSequence:"./pages/05_resource_factories.md"},index:42,start:0,end:8,source:{filepath:"/home/runner/work/sylius-resource-formation/sylius-resource-formation/pages/05_resource_factories.md",raw:`# Resource factories

<v-clicks>

Resource factories are used on Create operations to instantiate your resource.

</v-clicks>
`,title:"Resource factories",level:1,content:`# Resource factories

<v-clicks>

Resource factories are used on Create operations to instantiate your resource.

</v-clicks>`,frontmatter:{title:"Resource factories"},index:0,start:0,end:8},inline:{raw:`---
src: ./pages/05_resource_factories.md
---
`,content:"",frontmatter:{},index:5,start:56,end:60},filepath:"/home/runner/work/sylius-resource-formation/sylius-resource-formation/pages/05_resource_factories.md",noteHTML:"",id:42,no:43},__clicksElements:[],__preloaded:!1}},{path:"44",name:"page-44",component:f7,meta:{srcSequence:"./pages/05_resource_factories.md",slide:{raw:`
# Default factory for your resource

<v-clicks>

By default, a resource factory is defined to your resource \`Sylius\\Resource\\Factory\\Factory\`.

It has a \`createNew\` method with no arguments.

</v-clicks>
`,title:"Default factory for your resource",level:1,content:`# Default factory for your resource

<v-clicks>

By default, a resource factory is defined to your resource \`Sylius\\Resource\\Factory\\Factory\`.

It has a \`createNew\` method with no arguments.

</v-clicks>`,frontmatter:{srcSequence:"./pages/05_resource_factories.md"},index:43,start:9,end:20,source:{filepath:"/home/runner/work/sylius-resource-formation/sylius-resource-formation/pages/05_resource_factories.md",raw:`
# Default factory for your resource

<v-clicks>

By default, a resource factory is defined to your resource \`Sylius\\Resource\\Factory\\Factory\`.

It has a \`createNew\` method with no arguments.

</v-clicks>
`,title:"Default factory for your resource",level:1,content:`# Default factory for your resource

<v-clicks>

By default, a resource factory is defined to your resource \`Sylius\\Resource\\Factory\\Factory\`.

It has a \`createNew\` method with no arguments.

</v-clicks>`,frontmatter:{},index:1,start:9,end:20},filepath:"/home/runner/work/sylius-resource-formation/sylius-resource-formation/pages/05_resource_factories.md",noteHTML:"",id:43,no:44},__clicksElements:[],__preloaded:!1}},{path:"45",name:"page-45",component:B7,meta:{srcSequence:"./pages/05_resource_factories.md",slide:{raw:`
# Define your custom factory

\`\`\`php {all|10|10,8|12|14|15|17}
// src/Factory/BookRepository.php

declare(strict_types=1);

namespace App\\Factory;

use App\\Entity\\Book;
use Sylius\\Resource\\Factory\\FactoryInterface;

final class BookFactory implements FactoryInterface
{
    public function createNew(): Book
    {
        $book = new Book();
        $book->setCreatedAt(new \\DateTimeImmutable());
        
        return $book;
    }
}
\`\`\`
`,title:"Define your custom factory",level:1,content:`# Define your custom factory

\`\`\`php {all|10|10,8|12|14|15|17}
// src/Factory/BookRepository.php

declare(strict_types=1);

namespace App\\Factory;

use App\\Entity\\Book;
use Sylius\\Resource\\Factory\\FactoryInterface;

final class BookFactory implements FactoryInterface
{
    public function createNew(): Book
    {
        $book = new Book();
        $book->setCreatedAt(new \\DateTimeImmutable());
        
        return $book;
    }
}
\`\`\``,frontmatter:{srcSequence:"./pages/05_resource_factories.md"},index:44,start:21,end:46,source:{filepath:"/home/runner/work/sylius-resource-formation/sylius-resource-formation/pages/05_resource_factories.md",raw:`
# Define your custom factory

\`\`\`php {all|10|10,8|12|14|15|17}
// src/Factory/BookRepository.php

declare(strict_types=1);

namespace App\\Factory;

use App\\Entity\\Book;
use Sylius\\Resource\\Factory\\FactoryInterface;

final class BookFactory implements FactoryInterface
{
    public function createNew(): Book
    {
        $book = new Book();
        $book->setCreatedAt(new \\DateTimeImmutable());
        
        return $book;
    }
}
\`\`\`
`,title:"Define your custom factory",level:1,content:`# Define your custom factory

\`\`\`php {all|10|10,8|12|14|15|17}
// src/Factory/BookRepository.php

declare(strict_types=1);

namespace App\\Factory;

use App\\Entity\\Book;
use Sylius\\Resource\\Factory\\FactoryInterface;

final class BookFactory implements FactoryInterface
{
    public function createNew(): Book
    {
        $book = new Book();
        $book->setCreatedAt(new \\DateTimeImmutable());
        
        return $book;
    }
}
\`\`\``,frontmatter:{},index:2,start:21,end:46},filepath:"/home/runner/work/sylius-resource-formation/sylius-resource-formation/pages/05_resource_factories.md",noteHTML:"",id:44,no:45},__clicksElements:[],__preloaded:!1}},{path:"46",name:"page-46",component:C7,meta:{srcSequence:"./pages/05_resource_factories.md",slide:{raw:`
# Configure your factory

\`\`\`yaml
# config/services.yaml
services:
    App\\Factory\\BookFactory:
      decorates: 'app.factory.book'
\`\`\`
`,title:"Configure your factory",level:1,content:`# Configure your factory

\`\`\`yaml
# config/services.yaml
services:
    App\\Factory\\BookFactory:
      decorates: 'app.factory.book'
\`\`\``,frontmatter:{srcSequence:"./pages/05_resource_factories.md"},index:45,start:47,end:57,source:{filepath:"/home/runner/work/sylius-resource-formation/sylius-resource-formation/pages/05_resource_factories.md",raw:`
# Configure your factory

\`\`\`yaml
# config/services.yaml
services:
    App\\Factory\\BookFactory:
      decorates: 'app.factory.book'
\`\`\`
`,title:"Configure your factory",level:1,content:`# Configure your factory

\`\`\`yaml
# config/services.yaml
services:
    App\\Factory\\BookFactory:
      decorates: 'app.factory.book'
\`\`\``,frontmatter:{},index:3,start:47,end:57},filepath:"/home/runner/work/sylius-resource-formation/sylius-resource-formation/pages/05_resource_factories.md",noteHTML:"",id:45,no:46},__clicksElements:[],__preloaded:!1}},{path:"47",name:"page-47",component:k7,meta:{srcSequence:"./pages/05_resource_factories.md",slide:{raw:`
# Use your custom method

\`\`\`php {all|16|18|18,11-14|20|22}
// src/Factory/BookRepository.php

// [...]

final class BookFactory implements FactoryInterface
{
    public function __construct(private Security $security) 
    {
    }

    public function createNew(): Book
    {
        return new Book();
    }
    
    public function createWithCreator(): Book
    {
        $book = $this->createNew();
        
        $book->setCreator($this->security->getUser());
        
        return $book;
    }
}
\`\`\`
`,title:"Use your custom method",level:1,content:`# Use your custom method

\`\`\`php {all|16|18|18,11-14|20|22}
// src/Factory/BookRepository.php

// [...]

final class BookFactory implements FactoryInterface
{
    public function __construct(private Security $security) 
    {
    }

    public function createNew(): Book
    {
        return new Book();
    }
    
    public function createWithCreator(): Book
    {
        $book = $this->createNew();
        
        $book->setCreator($this->security->getUser());
        
        return $book;
    }
}
\`\`\``,frontmatter:{srcSequence:"./pages/05_resource_factories.md"},index:46,start:58,end:88,source:{filepath:"/home/runner/work/sylius-resource-formation/sylius-resource-formation/pages/05_resource_factories.md",raw:`
# Use your custom method

\`\`\`php {all|16|18|18,11-14|20|22}
// src/Factory/BookRepository.php

// [...]

final class BookFactory implements FactoryInterface
{
    public function __construct(private Security $security) 
    {
    }

    public function createNew(): Book
    {
        return new Book();
    }
    
    public function createWithCreator(): Book
    {
        $book = $this->createNew();
        
        $book->setCreator($this->security->getUser());
        
        return $book;
    }
}
\`\`\`
`,title:"Use your custom method",level:1,content:`# Use your custom method

\`\`\`php {all|16|18|18,11-14|20|22}
// src/Factory/BookRepository.php

// [...]

final class BookFactory implements FactoryInterface
{
    public function __construct(private Security $security) 
    {
    }

    public function createNew(): Book
    {
        return new Book();
    }
    
    public function createWithCreator(): Book
    {
        $book = $this->createNew();
        
        $book->setCreator($this->security->getUser());
        
        return $book;
    }
}
\`\`\``,frontmatter:{},index:4,start:58,end:88},filepath:"/home/runner/work/sylius-resource-formation/sylius-resource-formation/pages/05_resource_factories.md",noteHTML:"",id:46,no:47},__clicksElements:[],__preloaded:!1}},{path:"48",name:"page-48",component:x7,meta:{srcSequence:"./pages/05_resource_factories.md",slide:{raw:`
# Use it on your create operation

\`\`\`php {all|14}
// src/Entity/Book.php

declare(strict_types=1);

namespace App\\Entity\\Book;

use Sylius\\Resource\\Metadata\\Create;
use Sylius\\Resource\\Metadata\\AsResource;
use Sylius\\Resource\\Model\\ResourceInterface;

#[AsResource]
#[Create(
    path: 'authors/{authorId}/books',
    factoryMethod: 'createWithCreator',
)]
class Book implements ResourceInterface
{
}
\`\`\`
`,title:"Use it on your create operation",level:1,content:`# Use it on your create operation

\`\`\`php {all|14}
// src/Entity/Book.php

declare(strict_types=1);

namespace App\\Entity\\Book;

use Sylius\\Resource\\Metadata\\Create;
use Sylius\\Resource\\Metadata\\AsResource;
use Sylius\\Resource\\Model\\ResourceInterface;

#[AsResource]
#[Create(
    path: 'authors/{authorId}/books',
    factoryMethod: 'createWithCreator',
)]
class Book implements ResourceInterface
{
}
\`\`\``,frontmatter:{srcSequence:"./pages/05_resource_factories.md"},index:47,start:89,end:113,source:{filepath:"/home/runner/work/sylius-resource-formation/sylius-resource-formation/pages/05_resource_factories.md",raw:`
# Use it on your create operation

\`\`\`php {all|14}
// src/Entity/Book.php

declare(strict_types=1);

namespace App\\Entity\\Book;

use Sylius\\Resource\\Metadata\\Create;
use Sylius\\Resource\\Metadata\\AsResource;
use Sylius\\Resource\\Model\\ResourceInterface;

#[AsResource]
#[Create(
    path: 'authors/{authorId}/books',
    factoryMethod: 'createWithCreator',
)]
class Book implements ResourceInterface
{
}
\`\`\`
`,title:"Use it on your create operation",level:1,content:`# Use it on your create operation

\`\`\`php {all|14}
// src/Entity/Book.php

declare(strict_types=1);

namespace App\\Entity\\Book;

use Sylius\\Resource\\Metadata\\Create;
use Sylius\\Resource\\Metadata\\AsResource;
use Sylius\\Resource\\Model\\ResourceInterface;

#[AsResource]
#[Create(
    path: 'authors/{authorId}/books',
    factoryMethod: 'createWithCreator',
)]
class Book implements ResourceInterface
{
}
\`\`\``,frontmatter:{},index:5,start:89,end:113},filepath:"/home/runner/work/sylius-resource-formation/sylius-resource-formation/pages/05_resource_factories.md",noteHTML:"",id:47,no:48},__clicksElements:[],__preloaded:!1}},{path:"49",name:"page-49",component:O7,meta:{srcSequence:"./pages/05_resource_factories.md",slide:{raw:`
# Pass arguments to your method

<v-clicks>

You can pass arguments to your factory method.

3 variables are available:

* \`request\`: to retrieve data from the request via \`Symfony\\Component\\HttpFoundation\\Request\`
* \`token\`: to retrieve data from the authentication token via \`Symfony\\Component\\Security\\Core\\Authentication\\Token\\TokenInterface\`
* \`user\`: to retrieve data from the logged-in user via \`Symfony\\Component\\Security\\Core\\User\\UserInterface\`

It uses the [Symfony expression language](https://symfony.com/doc/current/components/expression_language.html) component.

</v-clicks>
`,title:"Pass arguments to your method",level:1,content:`# Pass arguments to your method

<v-clicks>

You can pass arguments to your factory method.

3 variables are available:

* \`request\`: to retrieve data from the request via \`Symfony\\Component\\HttpFoundation\\Request\`
* \`token\`: to retrieve data from the authentication token via \`Symfony\\Component\\Security\\Core\\Authentication\\Token\\TokenInterface\`
* \`user\`: to retrieve data from the logged-in user via \`Symfony\\Component\\Security\\Core\\User\\UserInterface\`

It uses the [Symfony expression language](https://symfony.com/doc/current/components/expression_language.html) component.

</v-clicks>`,frontmatter:{srcSequence:"./pages/05_resource_factories.md"},index:48,start:114,end:131,source:{filepath:"/home/runner/work/sylius-resource-formation/sylius-resource-formation/pages/05_resource_factories.md",raw:`
# Pass arguments to your method

<v-clicks>

You can pass arguments to your factory method.

3 variables are available:

* \`request\`: to retrieve data from the request via \`Symfony\\Component\\HttpFoundation\\Request\`
* \`token\`: to retrieve data from the authentication token via \`Symfony\\Component\\Security\\Core\\Authentication\\Token\\TokenInterface\`
* \`user\`: to retrieve data from the logged-in user via \`Symfony\\Component\\Security\\Core\\User\\UserInterface\`

It uses the [Symfony expression language](https://symfony.com/doc/current/components/expression_language.html) component.

</v-clicks>
`,title:"Pass arguments to your method",level:1,content:`# Pass arguments to your method

<v-clicks>

You can pass arguments to your factory method.

3 variables are available:

* \`request\`: to retrieve data from the request via \`Symfony\\Component\\HttpFoundation\\Request\`
* \`token\`: to retrieve data from the authentication token via \`Symfony\\Component\\Security\\Core\\Authentication\\Token\\TokenInterface\`
* \`user\`: to retrieve data from the logged-in user via \`Symfony\\Component\\Security\\Core\\User\\UserInterface\`

It uses the [Symfony expression language](https://symfony.com/doc/current/components/expression_language.html) component.

</v-clicks>`,frontmatter:{},index:6,start:114,end:131},filepath:"/home/runner/work/sylius-resource-formation/sylius-resource-formation/pages/05_resource_factories.md",noteHTML:"",id:48,no:49},__clicksElements:[],__preloaded:!1}},{path:"50",name:"page-50",component:q7,meta:{srcSequence:"./pages/05_resource_factories.md",slide:{raw:`
\`\`\`php {all|16|18|20|20,7|22|24}
// src/Factory/BookRepository.php

// [...]

final class BookFactory implements FactoryInterface
{
    public function __construct(private RepositoryInterface $authorRepository) 
    {
    }

    public function createNew(): Book
    {
        return new Book();
    }
    
    public function createForAuthor(string $authorId): Book
    {
        $book = $this->createNew();
        
        $author = $this->authorRepository->find($authorId);
        
        $book->setAuthor($author);
        
        return $book;
    }
}
\`\`\`
`,content:`\`\`\`php {all|16|18|20|20,7|22|24}
// src/Factory/BookRepository.php

// [...]

final class BookFactory implements FactoryInterface
{
    public function __construct(private RepositoryInterface $authorRepository) 
    {
    }

    public function createNew(): Book
    {
        return new Book();
    }
    
    public function createForAuthor(string $authorId): Book
    {
        $book = $this->createNew();
        
        $author = $this->authorRepository->find($authorId);
        
        $book->setAuthor($author);
        
        return $book;
    }
}
\`\`\``,frontmatter:{srcSequence:"./pages/05_resource_factories.md"},index:49,start:132,end:162,source:{filepath:"/home/runner/work/sylius-resource-formation/sylius-resource-formation/pages/05_resource_factories.md",raw:`
\`\`\`php {all|16|18|20|20,7|22|24}
// src/Factory/BookRepository.php

// [...]

final class BookFactory implements FactoryInterface
{
    public function __construct(private RepositoryInterface $authorRepository) 
    {
    }

    public function createNew(): Book
    {
        return new Book();
    }
    
    public function createForAuthor(string $authorId): Book
    {
        $book = $this->createNew();
        
        $author = $this->authorRepository->find($authorId);
        
        $book->setAuthor($author);
        
        return $book;
    }
}
\`\`\`
`,content:`\`\`\`php {all|16|18|20|20,7|22|24}
// src/Factory/BookRepository.php

// [...]

final class BookFactory implements FactoryInterface
{
    public function __construct(private RepositoryInterface $authorRepository) 
    {
    }

    public function createNew(): Book
    {
        return new Book();
    }
    
    public function createForAuthor(string $authorId): Book
    {
        $book = $this->createNew();
        
        $author = $this->authorRepository->find($authorId);
        
        $book->setAuthor($author);
        
        return $book;
    }
}
\`\`\``,frontmatter:{},index:7,start:132,end:162},filepath:"/home/runner/work/sylius-resource-formation/sylius-resource-formation/pages/05_resource_factories.md",noteHTML:"",id:49,no:50},__clicksElements:[],__preloaded:!1}},{path:"51",name:"page-51",component:j7,meta:{srcSequence:"./pages/05_resource_factories.md",slide:{raw:`
# Use it on your create operation

\`\`\`php {all|14|15}
// src/Entity/Book.php

declare(strict_types=1);

namespace App\\Entity\\Book;

use Sylius\\Resource\\Metadata\\Create;
use Sylius\\Resource\\Metadata\\AsResource;
use Sylius\\Resource\\Model\\ResourceInterface;

#[AsResource]
#[Create(
    path: 'authors/{authorId}/books',
    factoryMethod: 'createForAuthor',
    factoryArguments: ['authorId' => "request.attributes.get('authorId')"],
)]
class Book implements ResourceInterface
{
}
\`\`\`
`,title:"Use it on your create operation",level:1,content:`# Use it on your create operation

\`\`\`php {all|14|15}
// src/Entity/Book.php

declare(strict_types=1);

namespace App\\Entity\\Book;

use Sylius\\Resource\\Metadata\\Create;
use Sylius\\Resource\\Metadata\\AsResource;
use Sylius\\Resource\\Model\\ResourceInterface;

#[AsResource]
#[Create(
    path: 'authors/{authorId}/books',
    factoryMethod: 'createForAuthor',
    factoryArguments: ['authorId' => "request.attributes.get('authorId')"],
)]
class Book implements ResourceInterface
{
}
\`\`\``,frontmatter:{srcSequence:"./pages/05_resource_factories.md"},index:50,start:163,end:188,source:{filepath:"/home/runner/work/sylius-resource-formation/sylius-resource-formation/pages/05_resource_factories.md",raw:`
# Use it on your create operation

\`\`\`php {all|14|15}
// src/Entity/Book.php

declare(strict_types=1);

namespace App\\Entity\\Book;

use Sylius\\Resource\\Metadata\\Create;
use Sylius\\Resource\\Metadata\\AsResource;
use Sylius\\Resource\\Model\\ResourceInterface;

#[AsResource]
#[Create(
    path: 'authors/{authorId}/books',
    factoryMethod: 'createForAuthor',
    factoryArguments: ['authorId' => "request.attributes.get('authorId')"],
)]
class Book implements ResourceInterface
{
}
\`\`\`
`,title:"Use it on your create operation",level:1,content:`# Use it on your create operation

\`\`\`php {all|14|15}
// src/Entity/Book.php

declare(strict_types=1);

namespace App\\Entity\\Book;

use Sylius\\Resource\\Metadata\\Create;
use Sylius\\Resource\\Metadata\\AsResource;
use Sylius\\Resource\\Model\\ResourceInterface;

#[AsResource]
#[Create(
    path: 'authors/{authorId}/books',
    factoryMethod: 'createForAuthor',
    factoryArguments: ['authorId' => "request.attributes.get('authorId')"],
)]
class Book implements ResourceInterface
{
}
\`\`\``,frontmatter:{},index:8,start:163,end:188},filepath:"/home/runner/work/sylius-resource-formation/sylius-resource-formation/pages/05_resource_factories.md",noteHTML:"",id:50,no:51},__clicksElements:[],__preloaded:!1}},{path:"52",name:"page-52",component:Y7,meta:{srcSequence:"./pages/05_resource_factories.md",slide:{raw:`
# Use a factory without declaring it

<v-clicks>

You can use a factory without declaring it on \`services.yaml\`.

\`\`\`php {all|15}
// src/Entity/Book.php

declare(strict_types=1);

namespace App\\Entity\\Book;

use App\\Factory\\BookFactory;use Sylius\\Component\\Resource\\Metadata\\Create;
use Sylius\\Component\\Resource\\Metadata\\Resource;
use Sylius\\Component\\Resource\\Model\\ResourceInterface;

#[Resource]
#[Create(
    path: 'authors/{authorId}/books',
    # Here we declared the factory to use with its fully classified class name
    factory: BookFactory::class,
    factoryMethod: 'createForAuthor', 
    factoryArguments: ['authorId' => "request.attributes.get('authorId')"],
)]
class Book implements ResourceInterface
{
}
\`\`\`

</v-clicks>
`,title:"Use a factory without declaring it",level:1,content:`# Use a factory without declaring it

<v-clicks>

You can use a factory without declaring it on \`services.yaml\`.

\`\`\`php {all|15}
// src/Entity/Book.php

declare(strict_types=1);

namespace App\\Entity\\Book;

use App\\Factory\\BookFactory;use Sylius\\Component\\Resource\\Metadata\\Create;
use Sylius\\Component\\Resource\\Metadata\\Resource;
use Sylius\\Component\\Resource\\Model\\ResourceInterface;

#[Resource]
#[Create(
    path: 'authors/{authorId}/books',
    # Here we declared the factory to use with its fully classified class name
    factory: BookFactory::class,
    factoryMethod: 'createForAuthor', 
    factoryArguments: ['authorId' => "request.attributes.get('authorId')"],
)]
class Book implements ResourceInterface
{
}
\`\`\`

</v-clicks>`,frontmatter:{srcSequence:"./pages/05_resource_factories.md"},index:51,start:189,end:222,source:{filepath:"/home/runner/work/sylius-resource-formation/sylius-resource-formation/pages/05_resource_factories.md",raw:`
# Use a factory without declaring it

<v-clicks>

You can use a factory without declaring it on \`services.yaml\`.

\`\`\`php {all|15}
// src/Entity/Book.php

declare(strict_types=1);

namespace App\\Entity\\Book;

use App\\Factory\\BookFactory;use Sylius\\Component\\Resource\\Metadata\\Create;
use Sylius\\Component\\Resource\\Metadata\\Resource;
use Sylius\\Component\\Resource\\Model\\ResourceInterface;

#[Resource]
#[Create(
    path: 'authors/{authorId}/books',
    # Here we declared the factory to use with its fully classified class name
    factory: BookFactory::class,
    factoryMethod: 'createForAuthor', 
    factoryArguments: ['authorId' => "request.attributes.get('authorId')"],
)]
class Book implements ResourceInterface
{
}
\`\`\`

</v-clicks>
`,title:"Use a factory without declaring it",level:1,content:`# Use a factory without declaring it

<v-clicks>

You can use a factory without declaring it on \`services.yaml\`.

\`\`\`php {all|15}
// src/Entity/Book.php

declare(strict_types=1);

namespace App\\Entity\\Book;

use App\\Factory\\BookFactory;use Sylius\\Component\\Resource\\Metadata\\Create;
use Sylius\\Component\\Resource\\Metadata\\Resource;
use Sylius\\Component\\Resource\\Model\\ResourceInterface;

#[Resource]
#[Create(
    path: 'authors/{authorId}/books',
    # Here we declared the factory to use with its fully classified class name
    factory: BookFactory::class,
    factoryMethod: 'createForAuthor', 
    factoryArguments: ['authorId' => "request.attributes.get('authorId')"],
)]
class Book implements ResourceInterface
{
}
\`\`\`

</v-clicks>`,frontmatter:{},index:9,start:189,end:222},filepath:"/home/runner/work/sylius-resource-formation/sylius-resource-formation/pages/05_resource_factories.md",noteHTML:"",id:51,no:52},__clicksElements:[],__preloaded:!1}},{path:"53",name:"page-53",component:X7,meta:{srcSequence:"./pages/05_resource_factories.md",slide:{raw:`
# Use a callable for your custom factory

\`\`\`php {all|9|11|13}
// src/Factory/BookRepository.php

declare(strict_types=1);

namespace App\\Factory;

use App\\Entity\\Book;

final class BookFactory
{    
    public static function create(): Book
    {
        return new Book();
    }
}
\`\`\`
`,title:"Use a callable for your custom factory",level:1,content:`# Use a callable for your custom factory

\`\`\`php {all|9|11|13}
// src/Factory/BookRepository.php

declare(strict_types=1);

namespace App\\Factory;

use App\\Entity\\Book;

final class BookFactory
{    
    public static function create(): Book
    {
        return new Book();
    }
}
\`\`\``,frontmatter:{srcSequence:"./pages/05_resource_factories.md"},index:52,start:223,end:244,source:{filepath:"/home/runner/work/sylius-resource-formation/sylius-resource-formation/pages/05_resource_factories.md",raw:`
# Use a callable for your custom factory

\`\`\`php {all|9|11|13}
// src/Factory/BookRepository.php

declare(strict_types=1);

namespace App\\Factory;

use App\\Entity\\Book;

final class BookFactory
{    
    public static function create(): Book
    {
        return new Book();
    }
}
\`\`\`
`,title:"Use a callable for your custom factory",level:1,content:`# Use a callable for your custom factory

\`\`\`php {all|9|11|13}
// src/Factory/BookRepository.php

declare(strict_types=1);

namespace App\\Factory;

use App\\Entity\\Book;

final class BookFactory
{    
    public static function create(): Book
    {
        return new Book();
    }
}
\`\`\``,frontmatter:{},index:10,start:223,end:244},filepath:"/home/runner/work/sylius-resource-formation/sylius-resource-formation/pages/05_resource_factories.md",noteHTML:"",id:52,no:53},__clicksElements:[],__preloaded:!1}},{path:"54",name:"page-54",component:nD,meta:{srcSequence:"./pages/05_resource_factories.md",slide:{raw:`
# Use it on your operation

\`\`\`php {all|15}
// src/Entity/Book.php

declare(strict_types=1);

namespace App\\Entity\\Book;

use App\\Entity\\Book;
use App\\Factory\\BookFactory;
use Sylius\\Component\\Resource\\Metadata\\Create;
use Sylius\\Component\\Resource\\Metadata\\Resource;
use Sylius\\Component\\Resource\\Model\\ResourceInterface;

#[Resource]
#[Create(
    factory: [BookFactory::class, 'create'], 
)]
class Book implements \\Sylius\\Component\\Resource\\Model\\ResourceInterface
{
}
\`\`\`
`,title:"Use it on your operation",level:1,content:`# Use it on your operation

\`\`\`php {all|15}
// src/Entity/Book.php

declare(strict_types=1);

namespace App\\Entity\\Book;

use App\\Entity\\Book;
use App\\Factory\\BookFactory;
use Sylius\\Component\\Resource\\Metadata\\Create;
use Sylius\\Component\\Resource\\Metadata\\Resource;
use Sylius\\Component\\Resource\\Model\\ResourceInterface;

#[Resource]
#[Create(
    factory: [BookFactory::class, 'create'], 
)]
class Book implements \\Sylius\\Component\\Resource\\Model\\ResourceInterface
{
}
\`\`\``,frontmatter:{srcSequence:"./pages/05_resource_factories.md"},index:53,start:245,end:270,source:{filepath:"/home/runner/work/sylius-resource-formation/sylius-resource-formation/pages/05_resource_factories.md",raw:`
# Use it on your operation

\`\`\`php {all|15}
// src/Entity/Book.php

declare(strict_types=1);

namespace App\\Entity\\Book;

use App\\Entity\\Book;
use App\\Factory\\BookFactory;
use Sylius\\Component\\Resource\\Metadata\\Create;
use Sylius\\Component\\Resource\\Metadata\\Resource;
use Sylius\\Component\\Resource\\Model\\ResourceInterface;

#[Resource]
#[Create(
    factory: [BookFactory::class, 'create'], 
)]
class Book implements \\Sylius\\Component\\Resource\\Model\\ResourceInterface
{
}
\`\`\`
`,title:"Use it on your operation",level:1,content:`# Use it on your operation

\`\`\`php {all|15}
// src/Entity/Book.php

declare(strict_types=1);

namespace App\\Entity\\Book;

use App\\Entity\\Book;
use App\\Factory\\BookFactory;
use Sylius\\Component\\Resource\\Metadata\\Create;
use Sylius\\Component\\Resource\\Metadata\\Resource;
use Sylius\\Component\\Resource\\Model\\ResourceInterface;

#[Resource]
#[Create(
    factory: [BookFactory::class, 'create'], 
)]
class Book implements \\Sylius\\Component\\Resource\\Model\\ResourceInterface
{
}
\`\`\``,frontmatter:{},index:11,start:245,end:270},filepath:"/home/runner/work/sylius-resource-formation/sylius-resource-formation/pages/05_resource_factories.md",noteHTML:"",id:53,no:54},__clicksElements:[],__preloaded:!1}},{path:"55",name:"page-55",component:aD,meta:{title:"Providers",srcSequence:"./pages/06_providers.md",slide:{raw:null,title:"Providers",level:1,content:`# Providers

<v-clicks>

Providers retrieve data from your persistence layer.

</v-clicks>`,frontmatter:{title:"Providers",srcSequence:"./pages/06_providers.md"},index:54,start:0,end:8,source:{filepath:"/home/runner/work/sylius-resource-formation/sylius-resource-formation/pages/06_providers.md",raw:`# Providers

<v-clicks>

Providers retrieve data from your persistence layer.

</v-clicks>
`,title:"Providers",level:1,content:`# Providers

<v-clicks>

Providers retrieve data from your persistence layer.

</v-clicks>`,frontmatter:{title:"Providers"},index:0,start:0,end:8},inline:{raw:`---
src: ./pages/06_providers.md
---
`,content:"",frontmatter:{},index:6,start:60,end:64},filepath:"/home/runner/work/sylius-resource-formation/sylius-resource-formation/pages/06_providers.md",noteHTML:"",id:54,no:55},__clicksElements:[],__preloaded:!1}},{path:"56",name:"page-56",component:dD,meta:{srcSequence:"./pages/06_providers.md",slide:{raw:`
# Default providers

<v-clicks>

When your resource is a Doctrine entity, there's a default provider \`Sylius\\Resource\\Symfony\\Request\\State\\Provider\` which is already configured to your operations.

As it uses the Doctrine repository configured on your resource, some default repository methods are used.

| Operation   | Repository method |
|-------------|-------------------|
| index       | createPaginator   |
| show        | findOneBy         |
| update      | findOneBy         |
| delete      | findOneBy         |
| bulk delete | findById          |

</v-clicks>
`,title:"Default providers",level:1,content:`# Default providers

<v-clicks>

When your resource is a Doctrine entity, there's a default provider \`Sylius\\Resource\\Symfony\\Request\\State\\Provider\` which is already configured to your operations.

As it uses the Doctrine repository configured on your resource, some default repository methods are used.

| Operation   | Repository method |
|-------------|-------------------|
| index       | createPaginator   |
| show        | findOneBy         |
| update      | findOneBy         |
| delete      | findOneBy         |
| bulk delete | findById          |

</v-clicks>`,frontmatter:{srcSequence:"./pages/06_providers.md"},index:55,start:9,end:28,source:{filepath:"/home/runner/work/sylius-resource-formation/sylius-resource-formation/pages/06_providers.md",raw:`
# Default providers

<v-clicks>

When your resource is a Doctrine entity, there's a default provider \`Sylius\\Resource\\Symfony\\Request\\State\\Provider\` which is already configured to your operations.

As it uses the Doctrine repository configured on your resource, some default repository methods are used.

| Operation   | Repository method |
|-------------|-------------------|
| index       | createPaginator   |
| show        | findOneBy         |
| update      | findOneBy         |
| delete      | findOneBy         |
| bulk delete | findById          |

</v-clicks>
`,title:"Default providers",level:1,content:`# Default providers

<v-clicks>

When your resource is a Doctrine entity, there's a default provider \`Sylius\\Resource\\Symfony\\Request\\State\\Provider\` which is already configured to your operations.

As it uses the Doctrine repository configured on your resource, some default repository methods are used.

| Operation   | Repository method |
|-------------|-------------------|
| index       | createPaginator   |
| show        | findOneBy         |
| update      | findOneBy         |
| delete      | findOneBy         |
| bulk delete | findById          |

</v-clicks>`,frontmatter:{},index:1,start:9,end:28},filepath:"/home/runner/work/sylius-resource-formation/sylius-resource-formation/pages/06_providers.md",noteHTML:"",id:55,no:56},__clicksElements:[],__preloaded:!1}},{path:"57",name:"page-57",component:BD,meta:{srcSequence:"./pages/06_providers.md",slide:{raw:`
# Custom repository method

<v-clicks>

You can customize the method to use.

\`\`\`php {all|8}
// src/Entity/Customer.php

declare(strict_types=1);

namespace App\\Entity;

#[AsResource]
#[Show(repositoryMethod: 'findOneByEmail')]
final class Customer implements ResourceInterface
{
    // [...]
}
\`\`\`

</v-clicks>
`,title:"Custom repository method",level:1,content:`# Custom repository method

<v-clicks>

You can customize the method to use.

\`\`\`php {all|8}
// src/Entity/Customer.php

declare(strict_types=1);

namespace App\\Entity;

#[AsResource]
#[Show(repositoryMethod: 'findOneByEmail')]
final class Customer implements ResourceInterface
{
    // [...]
}
\`\`\`

</v-clicks>`,frontmatter:{srcSequence:"./pages/06_providers.md"},index:56,start:29,end:53,source:{filepath:"/home/runner/work/sylius-resource-formation/sylius-resource-formation/pages/06_providers.md",raw:`
# Custom repository method

<v-clicks>

You can customize the method to use.

\`\`\`php {all|8}
// src/Entity/Customer.php

declare(strict_types=1);

namespace App\\Entity;

#[AsResource]
#[Show(repositoryMethod: 'findOneByEmail')]
final class Customer implements ResourceInterface
{
    // [...]
}
\`\`\`

</v-clicks>
`,title:"Custom repository method",level:1,content:`# Custom repository method

<v-clicks>

You can customize the method to use.

\`\`\`php {all|8}
// src/Entity/Customer.php

declare(strict_types=1);

namespace App\\Entity;

#[AsResource]
#[Show(repositoryMethod: 'findOneByEmail')]
final class Customer implements ResourceInterface
{
    // [...]
}
\`\`\`

</v-clicks>`,frontmatter:{},index:2,start:29,end:53},filepath:"/home/runner/work/sylius-resource-formation/sylius-resource-formation/pages/06_providers.md",noteHTML:"",id:56,no:57},__clicksElements:[],__preloaded:!1}},{path:"58",name:"page-58",component:bD,meta:{srcSequence:"./pages/06_providers.md",slide:{raw:`
# Custom repository arguments

<v-clicks>

You can pass arguments to your repository method.

3 variables are available:

* \`request\`: to retrieve data from the request via \`Symfony\\Component\\HttpFoundation\\Request\`
* \`token\`: to retrieve data from the authentication token via \`Symfony\\Component\\Security\\Core\\Authentication\\Token\\TokenInterface\`
* \`user\`: to retrieve data from the logged-in user via \`Symfony\\Component\\Security\\Core\\User\\UserInterface\`

It uses the [Symfony expression language](https://symfony.com/doc/current/components/expression_language.html) component.

</v-clicks>
`,title:"Custom repository arguments",level:1,content:`# Custom repository arguments

<v-clicks>

You can pass arguments to your repository method.

3 variables are available:

* \`request\`: to retrieve data from the request via \`Symfony\\Component\\HttpFoundation\\Request\`
* \`token\`: to retrieve data from the authentication token via \`Symfony\\Component\\Security\\Core\\Authentication\\Token\\TokenInterface\`
* \`user\`: to retrieve data from the logged-in user via \`Symfony\\Component\\Security\\Core\\User\\UserInterface\`

It uses the [Symfony expression language](https://symfony.com/doc/current/components/expression_language.html) component.

</v-clicks>`,frontmatter:{srcSequence:"./pages/06_providers.md"},index:57,start:54,end:71,source:{filepath:"/home/runner/work/sylius-resource-formation/sylius-resource-formation/pages/06_providers.md",raw:`
# Custom repository arguments

<v-clicks>

You can pass arguments to your repository method.

3 variables are available:

* \`request\`: to retrieve data from the request via \`Symfony\\Component\\HttpFoundation\\Request\`
* \`token\`: to retrieve data from the authentication token via \`Symfony\\Component\\Security\\Core\\Authentication\\Token\\TokenInterface\`
* \`user\`: to retrieve data from the logged-in user via \`Symfony\\Component\\Security\\Core\\User\\UserInterface\`

It uses the [Symfony expression language](https://symfony.com/doc/current/components/expression_language.html) component.

</v-clicks>
`,title:"Custom repository arguments",level:1,content:`# Custom repository arguments

<v-clicks>

You can pass arguments to your repository method.

3 variables are available:

* \`request\`: to retrieve data from the request via \`Symfony\\Component\\HttpFoundation\\Request\`
* \`token\`: to retrieve data from the authentication token via \`Symfony\\Component\\Security\\Core\\Authentication\\Token\\TokenInterface\`
* \`user\`: to retrieve data from the logged-in user via \`Symfony\\Component\\Security\\Core\\User\\UserInterface\`

It uses the [Symfony expression language](https://symfony.com/doc/current/components/expression_language.html) component.

</v-clicks>`,frontmatter:{},index:3,start:54,end:71},filepath:"/home/runner/work/sylius-resource-formation/sylius-resource-formation/pages/06_providers.md",noteHTML:"",id:57,no:58},__clicksElements:[],__preloaded:!1}},{path:"59",name:"page-59",component:RD,meta:{srcSequence:"./pages/06_providers.md",slide:{raw:`
# Custom repository arguments

\`\`\`php {all|8}
// src/Entity/Customer.php

declare(strict_types=1);

namespace App\\Entity;

#[AsResource]
#[Show(repositoryMethod: 'findOneByEmail', repositoryArguments: ['email' => "request.attributes.get('email')"])]
final class Customer implements ResourceInterface
{
    // [...]
}
\`\`\`
`,title:"Custom repository arguments",level:1,content:`# Custom repository arguments

\`\`\`php {all|8}
// src/Entity/Customer.php

declare(strict_types=1);

namespace App\\Entity;

#[AsResource]
#[Show(repositoryMethod: 'findOneByEmail', repositoryArguments: ['email' => "request.attributes.get('email')"])]
final class Customer implements ResourceInterface
{
    // [...]
}
\`\`\``,frontmatter:{srcSequence:"./pages/06_providers.md"},index:58,start:72,end:90,source:{filepath:"/home/runner/work/sylius-resource-formation/sylius-resource-formation/pages/06_providers.md",raw:`
# Custom repository arguments

\`\`\`php {all|8}
// src/Entity/Customer.php

declare(strict_types=1);

namespace App\\Entity;

#[AsResource]
#[Show(repositoryMethod: 'findOneByEmail', repositoryArguments: ['email' => "request.attributes.get('email')"])]
final class Customer implements ResourceInterface
{
    // [...]
}
\`\`\`
`,title:"Custom repository arguments",level:1,content:`# Custom repository arguments

\`\`\`php {all|8}
// src/Entity/Customer.php

declare(strict_types=1);

namespace App\\Entity;

#[AsResource]
#[Show(repositoryMethod: 'findOneByEmail', repositoryArguments: ['email' => "request.attributes.get('email')"])]
final class Customer implements ResourceInterface
{
    // [...]
}
\`\`\``,frontmatter:{},index:4,start:72,end:90},filepath:"/home/runner/work/sylius-resource-formation/sylius-resource-formation/pages/06_providers.md",noteHTML:"",id:58,no:59},__clicksElements:[],__preloaded:!1}},{path:"60",name:"page-60",component:TD,meta:{srcSequence:"./pages/06_providers.md",slide:{raw:`
# Custom providers

<v-clicks>

Custom providers are useful to customize your logic to retrieve data and for an advanced usage such as an hexagonal architecture.

As an example, let's configure a \`BoardGameItemProvider\` on a \`BoardGameResource\` which is not a Doctrine entity.

</v-clicks>
`,title:"Custom providers",level:1,content:`# Custom providers

<v-clicks>

Custom providers are useful to customize your logic to retrieve data and for an advanced usage such as an hexagonal architecture.

As an example, let's configure a \`BoardGameItemProvider\` on a \`BoardGameResource\` which is not a Doctrine entity.

</v-clicks>`,frontmatter:{srcSequence:"./pages/06_providers.md"},index:59,start:91,end:102,source:{filepath:"/home/runner/work/sylius-resource-formation/sylius-resource-formation/pages/06_providers.md",raw:`
# Custom providers

<v-clicks>

Custom providers are useful to customize your logic to retrieve data and for an advanced usage such as an hexagonal architecture.

As an example, let's configure a \`BoardGameItemProvider\` on a \`BoardGameResource\` which is not a Doctrine entity.

</v-clicks>
`,title:"Custom providers",level:1,content:`# Custom providers

<v-clicks>

Custom providers are useful to customize your logic to retrieve data and for an advanced usage such as an hexagonal architecture.

As an example, let's configure a \`BoardGameItemProvider\` on a \`BoardGameResource\` which is not a Doctrine entity.

</v-clicks>`,frontmatter:{},index:5,start:91,end:102},filepath:"/home/runner/work/sylius-resource-formation/sylius-resource-formation/pages/06_providers.md",noteHTML:"",id:59,no:60},__clicksElements:[],__preloaded:!1}},{path:"61",name:"page-61",component:OD,meta:{srcSequence:"./pages/06_providers.md",slide:{raw:`
\`\`\`php {all|7|7,5|10|14|16-17|19|21|23}
// src/BoardGameBlog/Infrastructure/Sylius/State/Provider/BoardGameItemProvider.php

declare(strict_types=1);

namespace App\\BoardGameBlog\\Infrastructure\\Sylius\\State\\Provider;

final class BoardGameItemProvider implements ProviderInterface
{
    public function __construct(
        private QueryBusInterface $queryBus,
    ) {
    }

    public function provide(Operation $operation, Context $context): object|iterable|null
    {
        $request = $context->get(RequestOption::class)?->request();
        Assert::notNull($request);

        $id = (string) $request->attributes->get('id');

        $model = $this->queryBus->ask(new FindBoardGameQuery(new BoardGameId(Uuid::fromString($id))));

        return null !== $model ? BoardGameResource::fromModel($model) : null;
    }
}
\`\`\`
`,content:`\`\`\`php {all|7|7,5|10|14|16-17|19|21|23}
// src/BoardGameBlog/Infrastructure/Sylius/State/Provider/BoardGameItemProvider.php

declare(strict_types=1);

namespace App\\BoardGameBlog\\Infrastructure\\Sylius\\State\\Provider;

final class BoardGameItemProvider implements ProviderInterface
{
    public function __construct(
        private QueryBusInterface $queryBus,
    ) {
    }

    public function provide(Operation $operation, Context $context): object|iterable|null
    {
        $request = $context->get(RequestOption::class)?->request();
        Assert::notNull($request);

        $id = (string) $request->attributes->get('id');

        $model = $this->queryBus->ask(new FindBoardGameQuery(new BoardGameId(Uuid::fromString($id))));

        return null !== $model ? BoardGameResource::fromModel($model) : null;
    }
}
\`\`\``,frontmatter:{srcSequence:"./pages/06_providers.md"},index:60,start:103,end:132,source:{filepath:"/home/runner/work/sylius-resource-formation/sylius-resource-formation/pages/06_providers.md",raw:`
\`\`\`php {all|7|7,5|10|14|16-17|19|21|23}
// src/BoardGameBlog/Infrastructure/Sylius/State/Provider/BoardGameItemProvider.php

declare(strict_types=1);

namespace App\\BoardGameBlog\\Infrastructure\\Sylius\\State\\Provider;

final class BoardGameItemProvider implements ProviderInterface
{
    public function __construct(
        private QueryBusInterface $queryBus,
    ) {
    }

    public function provide(Operation $operation, Context $context): object|iterable|null
    {
        $request = $context->get(RequestOption::class)?->request();
        Assert::notNull($request);

        $id = (string) $request->attributes->get('id');

        $model = $this->queryBus->ask(new FindBoardGameQuery(new BoardGameId(Uuid::fromString($id))));

        return null !== $model ? BoardGameResource::fromModel($model) : null;
    }
}
\`\`\`
`,content:`\`\`\`php {all|7|7,5|10|14|16-17|19|21|23}
// src/BoardGameBlog/Infrastructure/Sylius/State/Provider/BoardGameItemProvider.php

declare(strict_types=1);

namespace App\\BoardGameBlog\\Infrastructure\\Sylius\\State\\Provider;

final class BoardGameItemProvider implements ProviderInterface
{
    public function __construct(
        private QueryBusInterface $queryBus,
    ) {
    }

    public function provide(Operation $operation, Context $context): object|iterable|null
    {
        $request = $context->get(RequestOption::class)?->request();
        Assert::notNull($request);

        $id = (string) $request->attributes->get('id');

        $model = $this->queryBus->ask(new FindBoardGameQuery(new BoardGameId(Uuid::fromString($id))));

        return null !== $model ? BoardGameResource::fromModel($model) : null;
    }
}
\`\`\``,frontmatter:{},index:6,start:103,end:132},filepath:"/home/runner/work/sylius-resource-formation/sylius-resource-formation/pages/06_providers.md",noteHTML:"",id:60,no:61},__clicksElements:[],__preloaded:!1}},{path:"62",name:"page-62",component:HD,meta:{srcSequence:"./pages/06_providers.md",slide:{raw:`
# Use this provider on your operation.

\`\`\`php {all|10|10,7}
// src/BoardGameBlog/Infrastructure/Sylius/Resource/BoardGameResource.php

declare(strict_types=1);

namespace App\\BoardGameBlog\\Infrastructure\\Sylius\\Resource;

use App\\BoardGameBlog\\Infrastructure\\Sylius\\State\\Provider\\BoardGameItemProvider;

#[AsResource]
#[Show(provider: BoardGameItemProvider::class)]
final class BoardGameResource implements ResourceInterface
{
    // [...]
}
\`\`\`
`,title:"Use this provider on your operation.",level:1,content:`# Use this provider on your operation.

\`\`\`php {all|10|10,7}
// src/BoardGameBlog/Infrastructure/Sylius/Resource/BoardGameResource.php

declare(strict_types=1);

namespace App\\BoardGameBlog\\Infrastructure\\Sylius\\Resource;

use App\\BoardGameBlog\\Infrastructure\\Sylius\\State\\Provider\\BoardGameItemProvider;

#[AsResource]
#[Show(provider: BoardGameItemProvider::class)]
final class BoardGameResource implements ResourceInterface
{
    // [...]
}
\`\`\``,frontmatter:{srcSequence:"./pages/06_providers.md"},index:61,start:133,end:153,source:{filepath:"/home/runner/work/sylius-resource-formation/sylius-resource-formation/pages/06_providers.md",raw:`
# Use this provider on your operation.

\`\`\`php {all|10|10,7}
// src/BoardGameBlog/Infrastructure/Sylius/Resource/BoardGameResource.php

declare(strict_types=1);

namespace App\\BoardGameBlog\\Infrastructure\\Sylius\\Resource;

use App\\BoardGameBlog\\Infrastructure\\Sylius\\State\\Provider\\BoardGameItemProvider;

#[AsResource]
#[Show(provider: BoardGameItemProvider::class)]
final class BoardGameResource implements ResourceInterface
{
    // [...]
}
\`\`\`
`,title:"Use this provider on your operation.",level:1,content:`# Use this provider on your operation.

\`\`\`php {all|10|10,7}
// src/BoardGameBlog/Infrastructure/Sylius/Resource/BoardGameResource.php

declare(strict_types=1);

namespace App\\BoardGameBlog\\Infrastructure\\Sylius\\Resource;

use App\\BoardGameBlog\\Infrastructure\\Sylius\\State\\Provider\\BoardGameItemProvider;

#[AsResource]
#[Show(provider: BoardGameItemProvider::class)]
final class BoardGameResource implements ResourceInterface
{
    // [...]
}
\`\`\``,frontmatter:{},index:7,start:133,end:153},filepath:"/home/runner/work/sylius-resource-formation/sylius-resource-formation/pages/06_providers.md",noteHTML:"",id:61,no:62},__clicksElements:[],__preloaded:!1}},{path:"63",name:"page-63",component:GD,meta:{title:"Processors",srcSequence:"./pages/07_processors.md",slide:{raw:null,title:"Processors",level:1,content:`# Processors

<v-clicks>

Processors process data: send an email, persist to storage, add to queue etc.

</v-clicks>`,frontmatter:{title:"Processors",srcSequence:"./pages/07_processors.md"},index:62,start:0,end:8,source:{filepath:"/home/runner/work/sylius-resource-formation/sylius-resource-formation/pages/07_processors.md",raw:`# Processors

<v-clicks>

Processors process data: send an email, persist to storage, add to queue etc.

</v-clicks>
`,title:"Processors",level:1,content:`# Processors

<v-clicks>

Processors process data: send an email, persist to storage, add to queue etc.

</v-clicks>`,frontmatter:{title:"Processors"},index:0,start:0,end:8},inline:{raw:`---
src: ./pages/07_processors.md
---
`,content:"",frontmatter:{},index:7,start:64,end:68},filepath:"/home/runner/work/sylius-resource-formation/sylius-resource-formation/pages/07_processors.md",noteHTML:"",id:62,no:63},__clicksElements:[],__preloaded:!1}},{path:"64",name:"page-64",component:QD,meta:{srcSequence:"./pages/07_processors.md",slide:{raw:`
# Default processors

<v-clicks>

When your resource is a Doctrine entity, there are default processors which are already configured to your operations.

As it uses the Doctrine repository configured on your resource, it will automatically flush data for you.

| Operation   | Processor                                              |
|-------------|--------------------------------------------------------|
| create      | Sylius\\Resource\\Doctrine\\Common\\State\\PersistProcessor |
| update      | Sylius\\Resource\\Doctrine\\Common\\State\\PersistProcessor |
| delete      | Sylius\\Resource\\Doctrine\\Common\\State\\RemoveProcessor  |
| bulk delete | Sylius\\Resource\\Doctrine\\Common\\State\\RemoveProcessor  |

</v-clicks>
`,title:"Default processors",level:1,content:`# Default processors

<v-clicks>

When your resource is a Doctrine entity, there are default processors which are already configured to your operations.

As it uses the Doctrine repository configured on your resource, it will automatically flush data for you.

| Operation   | Processor                                              |
|-------------|--------------------------------------------------------|
| create      | Sylius\\Resource\\Doctrine\\Common\\State\\PersistProcessor |
| update      | Sylius\\Resource\\Doctrine\\Common\\State\\PersistProcessor |
| delete      | Sylius\\Resource\\Doctrine\\Common\\State\\RemoveProcessor  |
| bulk delete | Sylius\\Resource\\Doctrine\\Common\\State\\RemoveProcessor  |

</v-clicks>`,frontmatter:{srcSequence:"./pages/07_processors.md"},index:63,start:9,end:27,source:{filepath:"/home/runner/work/sylius-resource-formation/sylius-resource-formation/pages/07_processors.md",raw:`
# Default processors

<v-clicks>

When your resource is a Doctrine entity, there are default processors which are already configured to your operations.

As it uses the Doctrine repository configured on your resource, it will automatically flush data for you.

| Operation   | Processor                                              |
|-------------|--------------------------------------------------------|
| create      | Sylius\\Resource\\Doctrine\\Common\\State\\PersistProcessor |
| update      | Sylius\\Resource\\Doctrine\\Common\\State\\PersistProcessor |
| delete      | Sylius\\Resource\\Doctrine\\Common\\State\\RemoveProcessor  |
| bulk delete | Sylius\\Resource\\Doctrine\\Common\\State\\RemoveProcessor  |

</v-clicks>
`,title:"Default processors",level:1,content:`# Default processors

<v-clicks>

When your resource is a Doctrine entity, there are default processors which are already configured to your operations.

As it uses the Doctrine repository configured on your resource, it will automatically flush data for you.

| Operation   | Processor                                              |
|-------------|--------------------------------------------------------|
| create      | Sylius\\Resource\\Doctrine\\Common\\State\\PersistProcessor |
| update      | Sylius\\Resource\\Doctrine\\Common\\State\\PersistProcessor |
| delete      | Sylius\\Resource\\Doctrine\\Common\\State\\RemoveProcessor  |
| bulk delete | Sylius\\Resource\\Doctrine\\Common\\State\\RemoveProcessor  |

</v-clicks>`,frontmatter:{},index:1,start:9,end:27},filepath:"/home/runner/work/sylius-resource-formation/sylius-resource-formation/pages/07_processors.md",noteHTML:"",id:63,no:64},__clicksElements:[],__preloaded:!1}},{path:"65",name:"page-65",component:sE,meta:{srcSequence:"./pages/07_processors.md",slide:{raw:`
# Custom processors

<v-clicks>

Custom processors are useful to customize your logic to send an email, persist data to storage, add to queue and for an
advanced usage such as an hexagonal architecture.

</v-clicks>
`,title:"Custom processors",level:1,content:`# Custom processors

<v-clicks>

Custom processors are useful to customize your logic to send an email, persist data to storage, add to queue and for an
advanced usage such as an hexagonal architecture.

</v-clicks>`,frontmatter:{srcSequence:"./pages/07_processors.md"},index:64,start:28,end:38,source:{filepath:"/home/runner/work/sylius-resource-formation/sylius-resource-formation/pages/07_processors.md",raw:`
# Custom processors

<v-clicks>

Custom processors are useful to customize your logic to send an email, persist data to storage, add to queue and for an
advanced usage such as an hexagonal architecture.

</v-clicks>
`,title:"Custom processors",level:1,content:`# Custom processors

<v-clicks>

Custom processors are useful to customize your logic to send an email, persist data to storage, add to queue and for an
advanced usage such as an hexagonal architecture.

</v-clicks>`,frontmatter:{},index:2,start:28,end:38},filepath:"/home/runner/work/sylius-resource-formation/sylius-resource-formation/pages/07_processors.md",noteHTML:"",id:64,no:65},__clicksElements:[],__preloaded:!1}},{path:"66",name:"page-66",component:lE,meta:{srcSequence:"./pages/07_processors.md",slide:{raw:`
# Example #1: Sending an email after persisting data

As an example, send an email after customer registration
`,title:"Example #1: Sending an email after persisting data",level:1,content:`# Example #1: Sending an email after persisting data

As an example, send an email after customer registration`,frontmatter:{srcSequence:"./pages/07_processors.md"},index:65,start:39,end:44,source:{filepath:"/home/runner/work/sylius-resource-formation/sylius-resource-formation/pages/07_processors.md",raw:`
# Example #1: Sending an email after persisting data

As an example, send an email after customer registration
`,title:"Example #1: Sending an email after persisting data",level:1,content:`# Example #1: Sending an email after persisting data

As an example, send an email after customer registration`,frontmatter:{},index:3,start:39,end:44},filepath:"/home/runner/work/sylius-resource-formation/sylius-resource-formation/pages/07_processors.md",noteHTML:"",id:65,no:66},__clicksElements:[],__preloaded:!1}},{path:"67",name:"page-67",component:cE,meta:{srcSequence:"./pages/07_processors.md",slide:{raw:`
\`\`\`php {all|9|12-13|17|19|21|23-24|26}
// src/Sylius/State/Processor/CreateCustomerProcessor.php

namespace App\\Sylius\\State\\Processor;

use Sylius\\Component\\Customer\\Model\\CustomerInterface;
use Sylius\\Resource\\Doctrine\\Common\\State\\PersistProcessor;
use Sylius\\Resource\\State\\ProcessorInterface;

final class CreateCustomerProcessor implements ProcessorInterface
{
    public function __construct(
        private CommandBusInterface $commandBus,
        private PersistProcessor $decorated,
    ) {
    }

    public function process(mixed $data, Operation $operation, Context $context): mixed
    {
        Assert::isInstanceOf($data, Customer::class);
        
        $this->decorated->process($data, $operation, $context);

        // Here your logic to send a registration email.
        $this->commandBus->dispatch(new SendRegistrationEmailCommand(new CustomerId($data->id)));

        return null;
    }
}
\`\`\`
`,content:`\`\`\`php {all|9|12-13|17|19|21|23-24|26}
// src/Sylius/State/Processor/CreateCustomerProcessor.php

namespace App\\Sylius\\State\\Processor;

use Sylius\\Component\\Customer\\Model\\CustomerInterface;
use Sylius\\Resource\\Doctrine\\Common\\State\\PersistProcessor;
use Sylius\\Resource\\State\\ProcessorInterface;

final class CreateCustomerProcessor implements ProcessorInterface
{
    public function __construct(
        private CommandBusInterface $commandBus,
        private PersistProcessor $decorated,
    ) {
    }

    public function process(mixed $data, Operation $operation, Context $context): mixed
    {
        Assert::isInstanceOf($data, Customer::class);
        
        $this->decorated->process($data, $operation, $context);

        // Here your logic to send a registration email.
        $this->commandBus->dispatch(new SendRegistrationEmailCommand(new CustomerId($data->id)));

        return null;
    }
}
\`\`\``,frontmatter:{srcSequence:"./pages/07_processors.md"},index:66,start:45,end:77,source:{filepath:"/home/runner/work/sylius-resource-formation/sylius-resource-formation/pages/07_processors.md",raw:`
\`\`\`php {all|9|12-13|17|19|21|23-24|26}
// src/Sylius/State/Processor/CreateCustomerProcessor.php

namespace App\\Sylius\\State\\Processor;

use Sylius\\Component\\Customer\\Model\\CustomerInterface;
use Sylius\\Resource\\Doctrine\\Common\\State\\PersistProcessor;
use Sylius\\Resource\\State\\ProcessorInterface;

final class CreateCustomerProcessor implements ProcessorInterface
{
    public function __construct(
        private CommandBusInterface $commandBus,
        private PersistProcessor $decorated,
    ) {
    }

    public function process(mixed $data, Operation $operation, Context $context): mixed
    {
        Assert::isInstanceOf($data, Customer::class);
        
        $this->decorated->process($data, $operation, $context);

        // Here your logic to send a registration email.
        $this->commandBus->dispatch(new SendRegistrationEmailCommand(new CustomerId($data->id)));

        return null;
    }
}
\`\`\`
`,content:`\`\`\`php {all|9|12-13|17|19|21|23-24|26}
// src/Sylius/State/Processor/CreateCustomerProcessor.php

namespace App\\Sylius\\State\\Processor;

use Sylius\\Component\\Customer\\Model\\CustomerInterface;
use Sylius\\Resource\\Doctrine\\Common\\State\\PersistProcessor;
use Sylius\\Resource\\State\\ProcessorInterface;

final class CreateCustomerProcessor implements ProcessorInterface
{
    public function __construct(
        private CommandBusInterface $commandBus,
        private PersistProcessor $decorated,
    ) {
    }

    public function process(mixed $data, Operation $operation, Context $context): mixed
    {
        Assert::isInstanceOf($data, Customer::class);
        
        $this->decorated->process($data, $operation, $context);

        // Here your logic to send a registration email.
        $this->commandBus->dispatch(new SendRegistrationEmailCommand(new CustomerId($data->id)));

        return null;
    }
}
\`\`\``,frontmatter:{},index:4,start:45,end:77},filepath:"/home/runner/work/sylius-resource-formation/sylius-resource-formation/pages/07_processors.md",noteHTML:"",id:66,no:67},__clicksElements:[],__preloaded:!1}},{path:"68",name:"page-68",component:yE,meta:{srcSequence:"./pages/07_processors.md",slide:{raw:`
# Use this processor on your operation.

\`\`\`php {all|8|8,5}
// src/Entity/Customer.php

namespace App\\Entity\\Customer;

use App\\Sylius\\State\\Processor\\CreateCustomerProcessor;

#[AsResource]
#[Create(processor: CreateCustomerProcessor::class)]
final class BoardGameResource implements ResourceInterface
\`\`\`
`,title:"Use this processor on your operation.",level:1,content:`# Use this processor on your operation.

\`\`\`php {all|8|8,5}
// src/Entity/Customer.php

namespace App\\Entity\\Customer;

use App\\Sylius\\State\\Processor\\CreateCustomerProcessor;

#[AsResource]
#[Create(processor: CreateCustomerProcessor::class)]
final class BoardGameResource implements ResourceInterface
\`\`\``,frontmatter:{srcSequence:"./pages/07_processors.md"},index:67,start:78,end:93,source:{filepath:"/home/runner/work/sylius-resource-formation/sylius-resource-formation/pages/07_processors.md",raw:`
# Use this processor on your operation.

\`\`\`php {all|8|8,5}
// src/Entity/Customer.php

namespace App\\Entity\\Customer;

use App\\Sylius\\State\\Processor\\CreateCustomerProcessor;

#[AsResource]
#[Create(processor: CreateCustomerProcessor::class)]
final class BoardGameResource implements ResourceInterface
\`\`\`
`,title:"Use this processor on your operation.",level:1,content:`# Use this processor on your operation.

\`\`\`php {all|8|8,5}
// src/Entity/Customer.php

namespace App\\Entity\\Customer;

use App\\Sylius\\State\\Processor\\CreateCustomerProcessor;

#[AsResource]
#[Create(processor: CreateCustomerProcessor::class)]
final class BoardGameResource implements ResourceInterface
\`\`\``,frontmatter:{},index:5,start:78,end:93},filepath:"/home/runner/work/sylius-resource-formation/sylius-resource-formation/pages/07_processors.md",noteHTML:"",id:67,no:68},__clicksElements:[],__preloaded:!1}},{path:"69",name:"page-69",component:hE,meta:{srcSequence:"./pages/07_processors.md",slide:{raw:`
# Example #2: Use a custom delete processor

<v-clicks>

As another example, let's configure a \`DeleteBoardGameProcessor\` on a \`BoardGameResource\` which is not a Doctrine
entity.

</v-clicks>
`,title:"Example #2: Use a custom delete processor",level:1,content:`# Example #2: Use a custom delete processor

<v-clicks>

As another example, let's configure a \`DeleteBoardGameProcessor\` on a \`BoardGameResource\` which is not a Doctrine
entity.

</v-clicks>`,frontmatter:{srcSequence:"./pages/07_processors.md"},index:68,start:94,end:104,source:{filepath:"/home/runner/work/sylius-resource-formation/sylius-resource-formation/pages/07_processors.md",raw:`
# Example #2: Use a custom delete processor

<v-clicks>

As another example, let's configure a \`DeleteBoardGameProcessor\` on a \`BoardGameResource\` which is not a Doctrine
entity.

</v-clicks>
`,title:"Example #2: Use a custom delete processor",level:1,content:`# Example #2: Use a custom delete processor

<v-clicks>

As another example, let's configure a \`DeleteBoardGameProcessor\` on a \`BoardGameResource\` which is not a Doctrine
entity.

</v-clicks>`,frontmatter:{},index:6,start:94,end:104},filepath:"/home/runner/work/sylius-resource-formation/sylius-resource-formation/pages/07_processors.md",noteHTML:"",id:68,no:69},__clicksElements:[],__preloaded:!1}},{path:"70",name:"page-70",component:AE,meta:{srcSequence:"./pages/07_processors.md",slide:{raw:`
\`\`\`php {all|12|14|16}
// src/BoardGameBlog/Infrastructure/Sylius/State/Processor/DeleteBoardGameProcessor.php

namespace App\\BoardGameBlog\\Infrastructure\\Sylius\\State\\Processor;

final class DeleteBoardGameProcessor implements ProcessorInterface
{
    public function __construct(
        private CommandBusInterface $commandBus,
    ) {
    }

    public function process(mixed $data, Operation $operation, Context $context): mixed
    {
        Assert::isInstanceOf($data, BoardGameResource::class);

        $this->commandBus->dispatch(new DeleteBoardGameCommand(new BoardGameId($data->id)));

        return null;
    }
}
\`\`\`
`,content:`\`\`\`php {all|12|14|16}
// src/BoardGameBlog/Infrastructure/Sylius/State/Processor/DeleteBoardGameProcessor.php

namespace App\\BoardGameBlog\\Infrastructure\\Sylius\\State\\Processor;

final class DeleteBoardGameProcessor implements ProcessorInterface
{
    public function __construct(
        private CommandBusInterface $commandBus,
    ) {
    }

    public function process(mixed $data, Operation $operation, Context $context): mixed
    {
        Assert::isInstanceOf($data, BoardGameResource::class);

        $this->commandBus->dispatch(new DeleteBoardGameCommand(new BoardGameId($data->id)));

        return null;
    }
}
\`\`\``,frontmatter:{srcSequence:"./pages/07_processors.md"},index:69,start:105,end:129,source:{filepath:"/home/runner/work/sylius-resource-formation/sylius-resource-formation/pages/07_processors.md",raw:`
\`\`\`php {all|12|14|16}
// src/BoardGameBlog/Infrastructure/Sylius/State/Processor/DeleteBoardGameProcessor.php

namespace App\\BoardGameBlog\\Infrastructure\\Sylius\\State\\Processor;

final class DeleteBoardGameProcessor implements ProcessorInterface
{
    public function __construct(
        private CommandBusInterface $commandBus,
    ) {
    }

    public function process(mixed $data, Operation $operation, Context $context): mixed
    {
        Assert::isInstanceOf($data, BoardGameResource::class);

        $this->commandBus->dispatch(new DeleteBoardGameCommand(new BoardGameId($data->id)));

        return null;
    }
}
\`\`\`
`,content:`\`\`\`php {all|12|14|16}
// src/BoardGameBlog/Infrastructure/Sylius/State/Processor/DeleteBoardGameProcessor.php

namespace App\\BoardGameBlog\\Infrastructure\\Sylius\\State\\Processor;

final class DeleteBoardGameProcessor implements ProcessorInterface
{
    public function __construct(
        private CommandBusInterface $commandBus,
    ) {
    }

    public function process(mixed $data, Operation $operation, Context $context): mixed
    {
        Assert::isInstanceOf($data, BoardGameResource::class);

        $this->commandBus->dispatch(new DeleteBoardGameCommand(new BoardGameId($data->id)));

        return null;
    }
}
\`\`\``,frontmatter:{},index:7,start:105,end:129},filepath:"/home/runner/work/sylius-resource-formation/sylius-resource-formation/pages/07_processors.md",noteHTML:"",id:69,no:70},__clicksElements:[],__preloaded:!1}},{path:"71",name:"page-71",component:DE,meta:{srcSequence:"./pages/07_processors.md",slide:{raw:`
# Use this processor on your operation.

\`\`\`php {all|12}
// src/BoardGameBlog/Infrastructure/Sylius/Resource/BoardGameResource.php

namespace App\\BoardGameBlog\\Infrastructure\\Sylius\\Resource;

#[AsResource(
    alias: 'app.board_game',
    section: 'admin',
    formType: BoardGameType::class,
    templatesDir: 'crud',
    routePrefix: '/admin',
)]
#[Delete(processor: DeleteBoardGameProcessor::class)]
final class BoardGameResource implements ResourceInterface
\`\`\`
`,title:"Use this processor on your operation.",level:1,content:`# Use this processor on your operation.

\`\`\`php {all|12}
// src/BoardGameBlog/Infrastructure/Sylius/Resource/BoardGameResource.php

namespace App\\BoardGameBlog\\Infrastructure\\Sylius\\Resource;

#[AsResource(
    alias: 'app.board_game',
    section: 'admin',
    formType: BoardGameType::class,
    templatesDir: 'crud',
    routePrefix: '/admin',
)]
#[Delete(processor: DeleteBoardGameProcessor::class)]
final class BoardGameResource implements ResourceInterface
\`\`\``,frontmatter:{srcSequence:"./pages/07_processors.md"},index:70,start:130,end:149,source:{filepath:"/home/runner/work/sylius-resource-formation/sylius-resource-formation/pages/07_processors.md",raw:`
# Use this processor on your operation.

\`\`\`php {all|12}
// src/BoardGameBlog/Infrastructure/Sylius/Resource/BoardGameResource.php

namespace App\\BoardGameBlog\\Infrastructure\\Sylius\\Resource;

#[AsResource(
    alias: 'app.board_game',
    section: 'admin',
    formType: BoardGameType::class,
    templatesDir: 'crud',
    routePrefix: '/admin',
)]
#[Delete(processor: DeleteBoardGameProcessor::class)]
final class BoardGameResource implements ResourceInterface
\`\`\`
`,title:"Use this processor on your operation.",level:1,content:`# Use this processor on your operation.

\`\`\`php {all|12}
// src/BoardGameBlog/Infrastructure/Sylius/Resource/BoardGameResource.php

namespace App\\BoardGameBlog\\Infrastructure\\Sylius\\Resource;

#[AsResource(
    alias: 'app.board_game',
    section: 'admin',
    formType: BoardGameType::class,
    templatesDir: 'crud',
    routePrefix: '/admin',
)]
#[Delete(processor: DeleteBoardGameProcessor::class)]
final class BoardGameResource implements ResourceInterface
\`\`\``,frontmatter:{},index:8,start:130,end:149},filepath:"/home/runner/work/sylius-resource-formation/sylius-resource-formation/pages/07_processors.md",noteHTML:"",id:70,no:71},__clicksElements:[],__preloaded:!1}},{path:"72",name:"page-72",component:wE,meta:{title:"Responders",srcSequence:"./pages/08_responders.md",slide:{raw:null,title:"Responders",level:1,content:`# Responders

<v-clicks>

Responders respond data: transform data to a Symfony response, return a success in a CLI operation.

</v-clicks>`,frontmatter:{title:"Responders",srcSequence:"./pages/08_responders.md"},index:71,start:0,end:8,source:{filepath:"/home/runner/work/sylius-resource-formation/sylius-resource-formation/pages/08_responders.md",raw:`# Responders

<v-clicks>

Responders respond data: transform data to a Symfony response, return a success in a CLI operation.

</v-clicks>
`,title:"Responders",level:1,content:`# Responders

<v-clicks>

Responders respond data: transform data to a Symfony response, return a success in a CLI operation.

</v-clicks>`,frontmatter:{title:"Responders"},index:0,start:0,end:8},inline:{raw:`---
src: ./pages/08_responders.md
---
`,content:"",frontmatter:{},index:8,start:68,end:72},filepath:"/home/runner/work/sylius-resource-formation/sylius-resource-formation/pages/08_responders.md",noteHTML:"",id:71,no:72},__clicksElements:[],__preloaded:!1}},{path:"73",name:"page-73",component:IE,meta:{srcSequence:"./pages/08_responders.md",slide:{raw:`
# Default responders

<v-clicks>

When your operation is an instance of \`Sylius\\Resource\\Metadata\\HttpOperation\` two responders are configured
by default.

The responder will automatically choose the responder depending on the request format:

| Request format | Responder                                           |
|----------------|-----------------------------------------------------|
| html           | Sylius\\Resource\\Symfony\\Request\\State\\TwigResponder |
| json           | Sylius\\Resource\\Symfony\\Request\\State\\ApiResponder  |
| xml            | Sylius\\Resource\\Doctrine\\Common\\State\\ApiResponder  |

</v-clicks>
`,title:"Default responders",level:1,content:`# Default responders

<v-clicks>

When your operation is an instance of \`Sylius\\Resource\\Metadata\\HttpOperation\` two responders are configured
by default.

The responder will automatically choose the responder depending on the request format:

| Request format | Responder                                           |
|----------------|-----------------------------------------------------|
| html           | Sylius\\Resource\\Symfony\\Request\\State\\TwigResponder |
| json           | Sylius\\Resource\\Symfony\\Request\\State\\ApiResponder  |
| xml            | Sylius\\Resource\\Doctrine\\Common\\State\\ApiResponder  |

</v-clicks>`,frontmatter:{srcSequence:"./pages/08_responders.md"},index:72,start:9,end:27,source:{filepath:"/home/runner/work/sylius-resource-formation/sylius-resource-formation/pages/08_responders.md",raw:`
# Default responders

<v-clicks>

When your operation is an instance of \`Sylius\\Resource\\Metadata\\HttpOperation\` two responders are configured
by default.

The responder will automatically choose the responder depending on the request format:

| Request format | Responder                                           |
|----------------|-----------------------------------------------------|
| html           | Sylius\\Resource\\Symfony\\Request\\State\\TwigResponder |
| json           | Sylius\\Resource\\Symfony\\Request\\State\\ApiResponder  |
| xml            | Sylius\\Resource\\Doctrine\\Common\\State\\ApiResponder  |

</v-clicks>
`,title:"Default responders",level:1,content:`# Default responders

<v-clicks>

When your operation is an instance of \`Sylius\\Resource\\Metadata\\HttpOperation\` two responders are configured
by default.

The responder will automatically choose the responder depending on the request format:

| Request format | Responder                                           |
|----------------|-----------------------------------------------------|
| html           | Sylius\\Resource\\Symfony\\Request\\State\\TwigResponder |
| json           | Sylius\\Resource\\Symfony\\Request\\State\\ApiResponder  |
| xml            | Sylius\\Resource\\Doctrine\\Common\\State\\ApiResponder  |

</v-clicks>`,frontmatter:{},index:1,start:9,end:27},filepath:"/home/runner/work/sylius-resource-formation/sylius-resource-formation/pages/08_responders.md",noteHTML:"",id:72,no:73},__clicksElements:[],__preloaded:!1}},{path:"74",name:"page-74",component:LE,meta:{srcSequence:"./pages/08_responders.md",slide:{raw:`
# Twig Responder

<v-clicks>

The Twig responder is used to render data into a Symfony response.
It's used for HTML responses.

The variables that are passed to the Twig templates depends on the operation.

</v-clicks>
`,title:"Twig Responder",level:1,content:`# Twig Responder

<v-clicks>

The Twig responder is used to render data into a Symfony response.
It's used for HTML responses.

The variables that are passed to the Twig templates depends on the operation.

</v-clicks>`,frontmatter:{srcSequence:"./pages/08_responders.md"},index:73,start:28,end:40,source:{filepath:"/home/runner/work/sylius-resource-formation/sylius-resource-formation/pages/08_responders.md",raw:`
# Twig Responder

<v-clicks>

The Twig responder is used to render data into a Symfony response.
It's used for HTML responses.

The variables that are passed to the Twig templates depends on the operation.

</v-clicks>
`,title:"Twig Responder",level:1,content:`# Twig Responder

<v-clicks>

The Twig responder is used to render data into a Symfony response.
It's used for HTML responses.

The variables that are passed to the Twig templates depends on the operation.

</v-clicks>`,frontmatter:{},index:2,start:28,end:40},filepath:"/home/runner/work/sylius-resource-formation/sylius-resource-formation/pages/08_responders.md",noteHTML:"",id:73,no:74},__clicksElements:[],__preloaded:!1}},{path:"75",name:"page-75",component:UE,meta:{srcSequence:"./pages/08_responders.md",slide:{raw:`
# Customize Twig template variables

<v-clicks>

Some variables are already available on your operations, but you can add more variables easily.

</v-clicks>
`,title:"Customize Twig template variables",level:1,content:`# Customize Twig template variables

<v-clicks>

Some variables are already available on your operations, but you can add more variables easily.

</v-clicks>`,frontmatter:{srcSequence:"./pages/08_responders.md"},index:74,start:41,end:50,source:{filepath:"/home/runner/work/sylius-resource-formation/sylius-resource-formation/pages/08_responders.md",raw:`
# Customize Twig template variables

<v-clicks>

Some variables are already available on your operations, but you can add more variables easily.

</v-clicks>
`,title:"Customize Twig template variables",level:1,content:`# Customize Twig template variables

<v-clicks>

Some variables are already available on your operations, but you can add more variables easily.

</v-clicks>`,frontmatter:{},index:3,start:41,end:50},filepath:"/home/runner/work/sylius-resource-formation/sylius-resource-formation/pages/08_responders.md",noteHTML:"",id:74,no:75},__clicksElements:[],__preloaded:!1}},{path:"76",name:"page-76",component:WE,meta:{srcSequence:"./pages/08_responders.md",slide:{raw:`
As an example, we add a \`foo\` variable to the Twig template with \`bar\` as value.

<v-clicks>

\`\`\`php {all|17|18}
// src/Twig/Context/Factory/ShowSubscriptionContextFactory.php

namespace App\\Twig\\Context\\Factory;

use phpDocumentor\\Reflection\\Types\\Context;
use Sylius\\Resource\\Metadata\\Operation;
use Sylius\\Resource\\Twig\\Context\\Factory\\ContextFactoryInterface;

final class ShowSubscriptionContextFactory implements ContextFactoryInterface
{
    public function __construct(private ContextFactoryInterface $decorated)
    {
    }

    public function create(mixed $data, Operation $operation, Context $context): array
    {
        return array_merge($this->decorated->create($data, $operation, $context), [
            'foo' => 'bar',
        ]);
    }
}
\`\`\`

</v-clicks>
`,content:`As an example, we add a \`foo\` variable to the Twig template with \`bar\` as value.

<v-clicks>

\`\`\`php {all|17|18}
// src/Twig/Context/Factory/ShowSubscriptionContextFactory.php

namespace App\\Twig\\Context\\Factory;

use phpDocumentor\\Reflection\\Types\\Context;
use Sylius\\Resource\\Metadata\\Operation;
use Sylius\\Resource\\Twig\\Context\\Factory\\ContextFactoryInterface;

final class ShowSubscriptionContextFactory implements ContextFactoryInterface
{
    public function __construct(private ContextFactoryInterface $decorated)
    {
    }

    public function create(mixed $data, Operation $operation, Context $context): array
    {
        return array_merge($this->decorated->create($data, $operation, $context), [
            'foo' => 'bar',
        ]);
    }
}
\`\`\`

</v-clicks>`,frontmatter:{srcSequence:"./pages/08_responders.md"},index:75,start:51,end:82,source:{filepath:"/home/runner/work/sylius-resource-formation/sylius-resource-formation/pages/08_responders.md",raw:`
As an example, we add a \`foo\` variable to the Twig template with \`bar\` as value.

<v-clicks>

\`\`\`php {all|17|18}
// src/Twig/Context/Factory/ShowSubscriptionContextFactory.php

namespace App\\Twig\\Context\\Factory;

use phpDocumentor\\Reflection\\Types\\Context;
use Sylius\\Resource\\Metadata\\Operation;
use Sylius\\Resource\\Twig\\Context\\Factory\\ContextFactoryInterface;

final class ShowSubscriptionContextFactory implements ContextFactoryInterface
{
    public function __construct(private ContextFactoryInterface $decorated)
    {
    }

    public function create(mixed $data, Operation $operation, Context $context): array
    {
        return array_merge($this->decorated->create($data, $operation, $context), [
            'foo' => 'bar',
        ]);
    }
}
\`\`\`

</v-clicks>
`,content:`As an example, we add a \`foo\` variable to the Twig template with \`bar\` as value.

<v-clicks>

\`\`\`php {all|17|18}
// src/Twig/Context/Factory/ShowSubscriptionContextFactory.php

namespace App\\Twig\\Context\\Factory;

use phpDocumentor\\Reflection\\Types\\Context;
use Sylius\\Resource\\Metadata\\Operation;
use Sylius\\Resource\\Twig\\Context\\Factory\\ContextFactoryInterface;

final class ShowSubscriptionContextFactory implements ContextFactoryInterface
{
    public function __construct(private ContextFactoryInterface $decorated)
    {
    }

    public function create(mixed $data, Operation $operation, Context $context): array
    {
        return array_merge($this->decorated->create($data, $operation, $context), [
            'foo' => 'bar',
        ]);
    }
}
\`\`\`

</v-clicks>`,frontmatter:{},index:4,start:51,end:82},filepath:"/home/runner/work/sylius-resource-formation/sylius-resource-formation/pages/08_responders.md",noteHTML:"",id:75,no:76},__clicksElements:[],__preloaded:!1}},{path:"77",name:"page-77",component:ZE,meta:{srcSequence:"./pages/08_responders.md",slide:{raw:`
# Use it on your operation.

\`\`\`php {all|12}
// src/Entity/Subscription.php

namespace App\\Entity;

use Sylius\\Resource\\Metadata\\AsResource;
use Sylius\\Resource\\Metadata\\Show;
use Sylius\\Resource\\Model\\ResourceInterface;

#[AsResource]
#[Show(
    template: 'subscription/show.html.twig',
    twigContextFactory: ShowSubscriptionContextFactory::class,
)]
class Subscription implements ResourceInterface
{
}
\`\`\`
`,title:"Use it on your operation.",level:1,content:`# Use it on your operation.

\`\`\`php {all|12}
// src/Entity/Subscription.php

namespace App\\Entity;

use Sylius\\Resource\\Metadata\\AsResource;
use Sylius\\Resource\\Metadata\\Show;
use Sylius\\Resource\\Model\\ResourceInterface;

#[AsResource]
#[Show(
    template: 'subscription/show.html.twig',
    twigContextFactory: ShowSubscriptionContextFactory::class,
)]
class Subscription implements ResourceInterface
{
}
\`\`\``,frontmatter:{srcSequence:"./pages/08_responders.md"},index:76,start:83,end:105,source:{filepath:"/home/runner/work/sylius-resource-formation/sylius-resource-formation/pages/08_responders.md",raw:`
# Use it on your operation.

\`\`\`php {all|12}
// src/Entity/Subscription.php

namespace App\\Entity;

use Sylius\\Resource\\Metadata\\AsResource;
use Sylius\\Resource\\Metadata\\Show;
use Sylius\\Resource\\Model\\ResourceInterface;

#[AsResource]
#[Show(
    template: 'subscription/show.html.twig',
    twigContextFactory: ShowSubscriptionContextFactory::class,
)]
class Subscription implements ResourceInterface
{
}
\`\`\`
`,title:"Use it on your operation.",level:1,content:`# Use it on your operation.

\`\`\`php {all|12}
// src/Entity/Subscription.php

namespace App\\Entity;

use Sylius\\Resource\\Metadata\\AsResource;
use Sylius\\Resource\\Metadata\\Show;
use Sylius\\Resource\\Model\\ResourceInterface;

#[AsResource]
#[Show(
    template: 'subscription/show.html.twig',
    twigContextFactory: ShowSubscriptionContextFactory::class,
)]
class Subscription implements ResourceInterface
{
}
\`\`\``,frontmatter:{},index:5,start:83,end:105},filepath:"/home/runner/work/sylius-resource-formation/sylius-resource-formation/pages/08_responders.md",noteHTML:"",id:76,no:77},__clicksElements:[],__preloaded:!1}},{path:"78",name:"page-78",component:eb,meta:{srcSequence:"./pages/08_responders.md",slide:{raw:`
# API Responder

<v-clicks>

The API responder is used to render serialized data into a Symfony response.
It's used for JSON/XML responses.

</v-clicks>
`,title:"API Responder",level:1,content:`# API Responder

<v-clicks>

The API responder is used to render serialized data into a Symfony response.
It's used for JSON/XML responses.

</v-clicks>`,frontmatter:{srcSequence:"./pages/08_responders.md"},index:77,start:106,end:116,source:{filepath:"/home/runner/work/sylius-resource-formation/sylius-resource-formation/pages/08_responders.md",raw:`
# API Responder

<v-clicks>

The API responder is used to render serialized data into a Symfony response.
It's used for JSON/XML responses.

</v-clicks>
`,title:"API Responder",level:1,content:`# API Responder

<v-clicks>

The API responder is used to render serialized data into a Symfony response.
It's used for JSON/XML responses.

</v-clicks>`,frontmatter:{},index:6,start:106,end:116},filepath:"/home/runner/work/sylius-resource-formation/sylius-resource-formation/pages/08_responders.md",noteHTML:"",id:77,no:78},__clicksElements:[],__preloaded:!1}},{path:"79",component:zC,meta:{layout:"end"}}],Qe=sb,tt=[{name:"play",path:"/",component:_v,children:[...Qe]},{name:"print",path:"/print",component:jC},{path:"",redirect:{path:"/1"}},{path:"/:pathMatch(.*)",redirect:{path:"/1"}}];{let s=function(o){if(!nt.remote||nt.remote===o.query.password)return!0;if(nt.remote&&o.query.password===void 0){const n=prompt("Enter password");if(nt.remote===n)return!0}return o.params.no?{path:`/${o.params.no}`}:{path:""}};tt.push({path:"/presenter/print",component:()=>Io(()=>import("./PresenterPrint-7653db85.js"),["assets/PresenterPrint-7653db85.js","assets/NoteDisplay-c5bd9836.js"])}),tt.push({name:"notes",path:"/notes",component:()=>Io(()=>import("./NotesView-c73a3e82.js"),["assets/NotesView-c73a3e82.js","assets/NoteDisplay-c5bd9836.js"]),beforeEnter:s}),tt.push({name:"presenter",path:"/presenter/:no",component:()=>Io(()=>import("./Presenter-a676ab83.js"),["assets/Presenter-a676ab83.js","assets/NoteDisplay-c5bd9836.js","assets/DrawingControls-7464a032.js","assets/Presenter-aa6741a8.css"]),beforeEnter:s}),tt.push({path:"/presenter",redirect:{path:"/presenter/1"}})}const gs=zA({history:WB("/sylius-resource-formation/"),routes:tt});function ob(s,o,{mode:n="replace"}={}){return $({get(){const t=gs.currentRoute.value.query[s];return t==null?o??null:Array.isArray(t)?t.filter(Boolean):t},set(t){ns(()=>{gs[k(n)]({query:{...gs.currentRoute.value.query,[s]:t}})})}})}const Sd=X(0);ns(()=>{gs.afterEach(async()=>{await ns(),Sd.value+=1})});const Rd=X(0),Ps=$(()=>gs.currentRoute.value),On=$(()=>Ps.value.query.print!==void 0),nb=$(()=>Ps.value.query.print==="clicks"),ro=$(()=>Ps.value.query.embedded!==void 0),Bs=$(()=>Ps.value.path.startsWith("/presenter")),tb=$(()=>Ps.value.path.startsWith("/notes")),dt=$(()=>On.value&&!nb.value),Ea=$(()=>Ps.value.query.password),lb=$(()=>!Bs.value&&(!Fe.remote||Ea.value===Fe.remote)),Rp=ob("clicks","0"),xd=$(()=>Qe.length-1),rb=$(()=>Ps.value.path),Ke=$(()=>parseInt(rb.value.split(/\//g).slice(-1)[0])||1);$(()=>tr(Ke.value));const ys=$(()=>Qe.find(s=>s.path===`${Ke.value}`));$(()=>{var s,o,n;return(n=(o=(s=ys.value)==null?void 0:s.meta)==null?void 0:o.slide)==null?void 0:n.id});$(()=>{var s,o;return((o=(s=ys.value)==null?void 0:s.meta)==null?void 0:o.layout)||(Ke.value===1?"cover":"default")});const xr=$(()=>Qe.find(s=>s.path===`${Math.min(Qe.length,Ke.value+1)}`)),ab=$(()=>Qe.find(s=>s.path===`${Math.max(1,Ke.value-1)}`)),cb=$(()=>{var s,o;return Sd.value,((o=(s=ys.value)==null?void 0:s.meta)==null?void 0:o.__clicksElements)||[]}),Ts=$({get(){if(dt.value)return 99999;let s=+(Rp.value||0);return isNaN(s)&&(s=0),s},set(s){Rp.value=s.toString()}}),Pl=$(()=>{var s,o;return+(((o=(s=ys.value)==null?void 0:s.meta)==null?void 0:o.clicks)??cb.value.length)}),ib=$(()=>Ke.value<Qe.length-1||Ts.value<Pl.value),pb=$(()=>Ke.value>1||Ts.value>0),ub=$(()=>Qe.filter(s=>{var o,n;return(n=(o=s.meta)==null?void 0:o.slide)==null?void 0:n.title}).reduce((s,o)=>(vc(s,o),s),[])),yb=$(()=>Cc(ub.value,ys.value));$(()=>Dc(yb.value));const db=$(()=>Bb(Rd.value,ys.value,ab.value));Ae(ys,(s,o)=>{Rd.value=Number(s==null?void 0:s.path)-Number(o==null?void 0:o.path)});function To(){Pl.value<=Ts.value?Ft():Ts.value+=1}async function Mo(){Ts.value<=0?await It():Ts.value-=1}function tr(s){return Bs.value?`/presenter/${s}`:`/${s}`}function Ft(){const s=Math.min(Qe.length,Ke.value+1);return Ln(s)}async function It(s=!0){const o=Math.max(1,Ke.value-1);await Ln(o),s&&Pl.value&&gs.replace({query:{...Ps.value.query,clicks:Pl.value}})}function Ln(s,o){return gs.push({path:tr(s),query:{...Ps.value.query,clicks:o}})}function fb(s){const o=X(0),{direction:n,distanceX:t,distanceY:l}=pB(s,{onSwipeStart(a){a.pointerType==="touch"&&(Rt.value||(o.value=ia()))},onSwipeEnd(a){if(a.pointerType!=="touch"||!o.value||Rt.value)return;const c=Math.abs(t.value),i=Math.abs(l.value);c/window.innerWidth>.3||c>100?n.value===io.LEFT?To():Mo():(i/window.innerHeight>.4||i>200)&&(n.value===io.DOWN?It():Ft())}})}async function ba(){const{saveAs:s}=await Io(()=>import("./FileSaver.min-17c85779.js").then(o=>o.F),[]);s(Ty(Fe.download)?Fe.download:Fe.exportFilename?`${Fe.exportFilename}.pdf`:"/sylius-resource-formation/slidev-exported.pdf",`${Fe.title}.pdf`)}async function mb(s){var o,n;if(s==null){const t=(n=(o=ys.value)==null?void 0:o.meta)==null?void 0:n.slide;if(!(t!=null&&t.filepath))return!1;s=`${t.filepath}:${t.start}`}return await fetch(`/__open-in-editor?file=${encodeURIComponent(s)}`),!0}function vc(s,o,n=1){var l,a,c,i,p;const t=(a=(l=o.meta)==null?void 0:l.slide)==null?void 0:a.level;t&&t>n&&s.length>0?vc(s[s.length-1].children,o,n+1):s.push({children:[],level:n,path:o.path,hideInToc:Boolean((c=o.meta)==null?void 0:c.hideInToc),title:(p=(i=o.meta)==null?void 0:i.slide)==null?void 0:p.title})}function Cc(s,o,n=!1,t){return s.map(l=>{const a={...l,active:l.path===(o==null?void 0:o.path),hasActiveParent:n};return a.children.length>0&&(a.children=Cc(a.children,o,a.active||a.hasActiveParent,a)),t&&(a.active||a.activeParent)&&(t.activeParent=!0),a})}function Dc(s,o=1){return s.filter(n=>!n.hideInToc).map(n=>({...n,children:Dc(n.children,o+1)}))}const hb={"slide-left":"slide-left | slide-right","slide-right":"slide-right | slide-left","slide-up":"slide-up | slide-down","slide-down":"slide-down | slide-up"};function _b(s,o=!1){if(!s||(typeof s=="string"&&(s={name:s}),!s.name))return;let n=s.name.includes("|")?s.name:hb[s.name]||s.name;if(n.includes("|")){const[t,l]=n.split("|").map(a=>a.trim());n=o?l:t}if(n)return{...s,name:n}}function Bb(s,o,n){var l,a;let t=s>0?(l=n==null?void 0:n.meta)==null?void 0:l.transition:(a=o==null?void 0:o.meta)==null?void 0:a.transition;return t||(t=Fe.transition),_b(t,s<0)}function Ab(){const s=Fe.titleTemplate.replace("%s",Fe.title||"Slidev");cc({title:s}),k5(Fe.htmlAttrs),N5(`${s} - shared`),V5(`${s} - drawings`);const o=`${location.origin}_${F5()}`;function n(){tb.value||!Bs.value&&!$5.includes(location.host.split(":")[0])||(Bs.value?(zn("page",+Ke.value),zn("clicks",Ts.value)):(zn("viewerPage",+Ke.value),zn("viewerClicks",Ts.value)),zn("lastUpdate",{id:o,type:Bs.value?"presenter":"viewer",time:new Date().getTime()}))}gs.afterEach(n),Ae(Ts,n),q5(t=>{var a;gs.currentRoute.value.path.match(/^\/(\d+|presenter)\/?/)&&((a=t.lastUpdate)==null?void 0:a.type)==="presenter"&&(+t.page!=+Ke.value||+Ts.value!=+t.clicks)&&gs.replace({path:tr(t.page),query:{...gs.currentRoute.value.query,clicks:t.clicks||0}})})}const gb=Pe({__name:"App",setup(s){return F(O),Ab(),(o,n)=>{const t=kl("RouterView"),l=kl("StarportCarrier");return C(),te(Me,null,[R(t),R(l)],64)}}}),vb=N(gb,[["__file","/home/runner/work/sylius-resource-formation/sylius-resource-formation/node_modules/@slidev/client/App.vue"]]);function $r(s){return s!==null&&typeof s=="object"}function ka(s,o,n=".",t){if(!$r(o))return ka(s,{},n,t);const l=Object.assign({},o);for(const a in s){if(a==="__proto__"||a==="constructor")continue;const c=s[a];c!=null&&(t&&t(l,a,c,n)||(Array.isArray(c)&&Array.isArray(l[a])?l[a]=[...c,...l[a]]:$r(c)&&$r(l[a])?l[a]=ka(c,l[a],(n?`${n}.`:"")+a.toString(),t):l[a]=c))}return l}function Cb(s){return(...o)=>o.reduce((n,t)=>ka(n,t,"",s),{})}const Db=Cb(),$d=1/60*1e3,Eb=typeof performance<"u"?()=>performance.now():()=>Date.now(),Fd=typeof window<"u"?s=>window.requestAnimationFrame(s):s=>setTimeout(()=>s(Eb()),$d);function bb(s){let o=[],n=[],t=0,l=!1,a=!1;const c=new WeakSet,i={schedule:(p,u=!1,y=!1)=>{const d=y&&l,f=d?o:n;return u&&c.add(p),f.indexOf(p)===-1&&(f.push(p),d&&l&&(t=o.length)),p},cancel:p=>{const u=n.indexOf(p);u!==-1&&n.splice(u,1),c.delete(p)},process:p=>{if(l){a=!0;return}if(l=!0,[o,n]=[n,o],n.length=0,t=o.length,t)for(let u=0;u<t;u++){const y=o[u];y(p),c.has(y)&&(i.schedule(y),s())}l=!1,a&&(a=!1,i.process(p))}};return i}const kb=40;let wa=!0,Tt=!1,Sa=!1;const In={delta:0,timestamp:0},Gt=["read","update","preRender","render","postRender"],lr=Gt.reduce((s,o)=>(s[o]=bb(()=>Tt=!0),s),{}),Ra=Gt.reduce((s,o)=>{const n=lr[o];return s[o]=(t,l=!1,a=!1)=>(Tt||Rb(),n.schedule(t,l,a)),s},{}),wb=Gt.reduce((s,o)=>(s[o]=lr[o].cancel,s),{});Gt.reduce((s,o)=>(s[o]=()=>lr[o].process(In),s),{});const Sb=s=>lr[s].process(In),Id=s=>{Tt=!1,In.delta=wa?$d:Math.max(Math.min(s-In.timestamp,kb),1),In.timestamp=s,Sa=!0,Gt.forEach(Sb),Sa=!1,Tt&&(wa=!1,Fd(Id))},Rb=()=>{Tt=!0,wa=!0,Sa||Fd(Id)},Td=()=>In;function Md(s,o){var n={};for(var t in s)Object.prototype.hasOwnProperty.call(s,t)&&o.indexOf(t)<0&&(n[t]=s[t]);if(s!=null&&typeof Object.getOwnPropertySymbols=="function")for(var l=0,t=Object.getOwnPropertySymbols(s);l<t.length;l++)o.indexOf(t[l])<0&&Object.prototype.propertyIsEnumerable.call(s,t[l])&&(n[t[l]]=s[t[l]]);return n}var Ec=function(){},Mt=function(){};Ec=function(s,o){!s&&typeof console<"u"&&console.warn(o)},Mt=function(s,o){if(!s)throw new Error(o)};const xa=(s,o,n)=>Math.min(Math.max(n,s),o),Fr=.001,xb=.01,xp=10,$b=.05,Fb=1;function Ib({duration:s=800,bounce:o=.25,velocity:n=0,mass:t=1}){let l,a;Ec(s<=xp*1e3,"Spring duration must be 10 seconds or less");let c=1-o;c=xa($b,Fb,c),s=xa(xb,xp,s/1e3),c<1?(l=u=>{const y=u*c,d=y*s,f=y-n,h=$a(u,c),m=Math.exp(-d);return Fr-f/h*m},a=u=>{const d=u*c*s,f=d*n+n,h=Math.pow(c,2)*Math.pow(u,2)*s,m=Math.exp(-d),B=$a(Math.pow(u,2),c);return(-l(u)+Fr>0?-1:1)*((f-h)*m)/B}):(l=u=>{const y=Math.exp(-u*s),d=(u-n)*s+1;return-Fr+y*d},a=u=>{const y=Math.exp(-u*s),d=(n-u)*(s*s);return y*d});const i=5/s,p=Mb(l,a,i);if(s=s*1e3,isNaN(p))return{stiffness:100,damping:10,duration:s};{const u=Math.pow(p,2)*t;return{stiffness:u,damping:c*2*Math.sqrt(t*u),duration:s}}}const Tb=12;function Mb(s,o,n){let t=n;for(let l=1;l<Tb;l++)t=t-s(t)/o(t);return t}function $a(s,o){return s*Math.sqrt(1-o*o)}const Pb=["duration","bounce"],Ob=["stiffness","damping","mass"];function $p(s,o){return o.some(n=>s[n]!==void 0)}function Lb(s){let o=Object.assign({velocity:0,stiffness:100,damping:10,mass:1,isResolvedFromDuration:!1},s);if(!$p(s,Ob)&&$p(s,Pb)){const n=Ib(s);o=Object.assign(Object.assign(Object.assign({},o),n),{velocity:0,mass:1}),o.isResolvedFromDuration=!0}return o}function bc(s){var{from:o=0,to:n=1,restSpeed:t=2,restDelta:l}=s,a=Md(s,["from","to","restSpeed","restDelta"]);const c={done:!1,value:o};let{stiffness:i,damping:p,mass:u,velocity:y,duration:d,isResolvedFromDuration:f}=Lb(a),h=Fp,m=Fp;function B(){const A=y?-(y/1e3):0,b=n-o,v=p/(2*Math.sqrt(i*u)),D=Math.sqrt(i/u)/1e3;if(l===void 0&&(l=Math.min(Math.abs(n-o)/100,.4)),v<1){const w=$a(D,v);h=T=>{const H=Math.exp(-v*D*T);return n-H*((A+v*D*b)/w*Math.sin(w*T)+b*Math.cos(w*T))},m=T=>{const H=Math.exp(-v*D*T);return v*D*H*(Math.sin(w*T)*(A+v*D*b)/w+b*Math.cos(w*T))-H*(Math.cos(w*T)*(A+v*D*b)-w*b*Math.sin(w*T))}}else if(v===1)h=w=>n-Math.exp(-D*w)*(b+(A+D*b)*w);else{const w=D*Math.sqrt(v*v-1);h=T=>{const H=Math.exp(-v*D*T),z=Math.min(w*T,300);return n-H*((A+v*D*b)*Math.sinh(z)+w*b*Math.cosh(z))/w}}}return B(),{next:A=>{const b=h(A);if(f)c.done=A>=d;else{const v=m(A)*1e3,D=Math.abs(v)<=t,w=Math.abs(n-b)<=l;c.done=D&&w}return c.value=c.done?n:b,c},flipTarget:()=>{y=-y,[o,n]=[n,o],B()}}}bc.needsInterpolation=(s,o)=>typeof s=="string"||typeof o=="string";const Fp=s=>0,Pd=(s,o,n)=>{const t=o-s;return t===0?1:(n-s)/t},kc=(s,o,n)=>-n*s+n*o+s,Od=(s,o)=>n=>Math.max(Math.min(n,o),s),ft=s=>s%1?Number(s.toFixed(5)):s,Pt=/(-)?([\d]*\.?[\d])+/g,Fa=/(#[0-9a-f]{6}|#[0-9a-f]{3}|#(?:[0-9a-f]{2}){2,4}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))/gi,Nb=/^(#[0-9a-f]{3}|#(?:[0-9a-f]{2}){2,4}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))$/i;function Wt(s){return typeof s=="string"}const zt={test:s=>typeof s=="number",parse:parseFloat,transform:s=>s},mt=Object.assign(Object.assign({},zt),{transform:Od(0,1)}),rl=Object.assign(Object.assign({},zt),{default:1}),wc=s=>({test:o=>Wt(o)&&o.endsWith(s)&&o.split(" ").length===1,parse:parseFloat,transform:o=>`${o}${s}`}),Vo=wc("deg"),ht=wc("%"),Be=wc("px"),Ip=Object.assign(Object.assign({},ht),{parse:s=>ht.parse(s)/100,transform:s=>ht.transform(s*100)}),Sc=(s,o)=>n=>Boolean(Wt(n)&&Nb.test(n)&&n.startsWith(s)||o&&Object.prototype.hasOwnProperty.call(n,o)),Ld=(s,o,n)=>t=>{if(!Wt(t))return t;const[l,a,c,i]=t.match(Pt);return{[s]:parseFloat(l),[o]:parseFloat(a),[n]:parseFloat(c),alpha:i!==void 0?parseFloat(i):1}},Xo={test:Sc("hsl","hue"),parse:Ld("hue","saturation","lightness"),transform:({hue:s,saturation:o,lightness:n,alpha:t=1})=>"hsla("+Math.round(s)+", "+ht.transform(ft(o))+", "+ht.transform(ft(n))+", "+ft(mt.transform(t))+")"},qb=Od(0,255),Ir=Object.assign(Object.assign({},zt),{transform:s=>Math.round(qb(s))}),So={test:Sc("rgb","red"),parse:Ld("red","green","blue"),transform:({red:s,green:o,blue:n,alpha:t=1})=>"rgba("+Ir.transform(s)+", "+Ir.transform(o)+", "+Ir.transform(n)+", "+ft(mt.transform(t))+")"};function Hb(s){let o="",n="",t="",l="";return s.length>5?(o=s.substr(1,2),n=s.substr(3,2),t=s.substr(5,2),l=s.substr(7,2)):(o=s.substr(1,1),n=s.substr(2,1),t=s.substr(3,1),l=s.substr(4,1),o+=o,n+=n,t+=t,l+=l),{red:parseInt(o,16),green:parseInt(n,16),blue:parseInt(t,16),alpha:l?parseInt(l,16)/255:1}}const Ia={test:Sc("#"),parse:Hb,transform:So.transform},_s={test:s=>So.test(s)||Ia.test(s)||Xo.test(s),parse:s=>So.test(s)?So.parse(s):Xo.test(s)?Xo.parse(s):Ia.parse(s),transform:s=>Wt(s)?s:s.hasOwnProperty("red")?So.transform(s):Xo.transform(s)},Nd="${c}",qd="${n}";function Ub(s){var o,n,t,l;return isNaN(s)&&Wt(s)&&((n=(o=s.match(Pt))===null||o===void 0?void 0:o.length)!==null&&n!==void 0?n:0)+((l=(t=s.match(Fa))===null||t===void 0?void 0:t.length)!==null&&l!==void 0?l:0)>0}function Hd(s){typeof s=="number"&&(s=`${s}`);const o=[];let n=0;const t=s.match(Fa);t&&(n=t.length,s=s.replace(Fa,Nd),o.push(...t.map(_s.parse)));const l=s.match(Pt);return l&&(s=s.replace(Pt,qd),o.push(...l.map(zt.parse))),{values:o,numColors:n,tokenised:s}}function Ud(s){return Hd(s).values}function Vd(s){const{values:o,numColors:n,tokenised:t}=Hd(s),l=o.length;return a=>{let c=t;for(let i=0;i<l;i++)c=c.replace(i<n?Nd:qd,i<n?_s.transform(a[i]):ft(a[i]));return c}}const Vb=s=>typeof s=="number"?0:s;function jb(s){const o=Ud(s);return Vd(s)(o.map(Vb))}const Kt={test:Ub,parse:Ud,createTransformer:Vd,getAnimatableNone:jb},Gb=new Set(["brightness","contrast","saturate","opacity"]);function Wb(s){let[o,n]=s.slice(0,-1).split("(");if(o==="drop-shadow")return s;const[t]=n.match(Pt)||[];if(!t)return s;const l=n.replace(t,"");let a=Gb.has(o)?1:0;return t!==n&&(a*=100),o+"("+a+l+")"}const zb=/([a-z-]*)\(.*?\)/g,Ta=Object.assign(Object.assign({},Kt),{getAnimatableNone:s=>{const o=s.match(zb);return o?o.map(Wb).join(" "):s}});function Tr(s,o,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?s+(o-s)*6*n:n<1/2?o:n<2/3?s+(o-s)*(2/3-n)*6:s}function Tp({hue:s,saturation:o,lightness:n,alpha:t}){s/=360,o/=100,n/=100;let l=0,a=0,c=0;if(!o)l=a=c=n;else{const i=n<.5?n*(1+o):n+o-n*o,p=2*n-i;l=Tr(p,i,s+1/3),a=Tr(p,i,s),c=Tr(p,i,s-1/3)}return{red:Math.round(l*255),green:Math.round(a*255),blue:Math.round(c*255),alpha:t}}const Kb=(s,o,n)=>{const t=s*s,l=o*o;return Math.sqrt(Math.max(0,n*(l-t)+t))},Yb=[Ia,So,Xo],Mp=s=>Yb.find(o=>o.test(s)),Pp=s=>`'${s}' is not an animatable color. Use the equivalent color code instead.`,jd=(s,o)=>{let n=Mp(s),t=Mp(o);Mt(!!n,Pp(s)),Mt(!!t,Pp(o));let l=n.parse(s),a=t.parse(o);n===Xo&&(l=Tp(l),n=So),t===Xo&&(a=Tp(a),t=So);const c=Object.assign({},l);return i=>{for(const p in c)p!=="alpha"&&(c[p]=Kb(l[p],a[p],i));return c.alpha=kc(l.alpha,a.alpha,i),n.transform(c)}},Zb=s=>typeof s=="number",Qb=(s,o)=>n=>o(s(n)),Gd=(...s)=>s.reduce(Qb);function Wd(s,o){return Zb(s)?n=>kc(s,o,n):_s.test(s)?jd(s,o):Kd(s,o)}const zd=(s,o)=>{const n=[...s],t=n.length,l=s.map((a,c)=>Wd(a,o[c]));return a=>{for(let c=0;c<t;c++)n[c]=l[c](a);return n}},Jb=(s,o)=>{const n=Object.assign(Object.assign({},s),o),t={};for(const l in n)s[l]!==void 0&&o[l]!==void 0&&(t[l]=Wd(s[l],o[l]));return l=>{for(const a in t)n[a]=t[a](l);return n}};function Op(s){const o=Kt.parse(s),n=o.length;let t=0,l=0,a=0;for(let c=0;c<n;c++)t||typeof o[c]=="number"?t++:o[c].hue!==void 0?a++:l++;return{parsed:o,numNumbers:t,numRGB:l,numHSL:a}}const Kd=(s,o)=>{const n=Kt.createTransformer(o),t=Op(s),l=Op(o);return t.numHSL===l.numHSL&&t.numRGB===l.numRGB&&t.numNumbers>=l.numNumbers?Gd(zd(t.parsed,l.parsed),n):(Ec(!0,`Complex values '${s}' and '${o}' too different to mix. Ensure all colors are of the same type, and that each contains the same quantity of number and color values. Falling back to instant transition.`),c=>`${c>0?o:s}`)},Xb=(s,o)=>n=>kc(s,o,n);function ek(s){if(typeof s=="number")return Xb;if(typeof s=="string")return _s.test(s)?jd:Kd;if(Array.isArray(s))return zd;if(typeof s=="object")return Jb}function sk(s,o,n){const t=[],l=n||ek(s[0]),a=s.length-1;for(let c=0;c<a;c++){let i=l(s[c],s[c+1]);if(o){const p=Array.isArray(o)?o[c]:o;i=Gd(p,i)}t.push(i)}return t}function ok([s,o],[n]){return t=>n(Pd(s,o,t))}function nk(s,o){const n=s.length,t=n-1;return l=>{let a=0,c=!1;if(l<=s[0]?c=!0:l>=s[t]&&(a=t-1,c=!0),!c){let p=1;for(;p<n&&!(s[p]>l||p===t);p++);a=p-1}const i=Pd(s[a],s[a+1],l);return o[a](i)}}function Yd(s,o,{clamp:n=!0,ease:t,mixer:l}={}){const a=s.length;Mt(a===o.length,"Both input and output ranges must be the same length"),Mt(!t||!Array.isArray(t)||t.length===a-1,"Array of easing functions must be of length `input.length - 1`, as it applies to the transitions **between** the defined values."),s[0]>s[a-1]&&(s=[].concat(s),o=[].concat(o),s.reverse(),o.reverse());const c=sk(o,t,l),i=a===2?ok(s,c):nk(s,c);return n?p=>i(xa(s[0],s[a-1],p)):i}const rr=s=>o=>1-s(1-o),Rc=s=>o=>o<=.5?s(2*o)/2:(2-s(2*(1-o)))/2,tk=s=>o=>Math.pow(o,s),Zd=s=>o=>o*o*((s+1)*o-s),lk=s=>{const o=Zd(s);return n=>(n*=2)<1?.5*o(n):.5*(2-Math.pow(2,-10*(n-1)))},Qd=1.525,rk=4/11,ak=8/11,ck=9/10,Jd=s=>s,xc=tk(2),ik=rr(xc),Xd=Rc(xc),ef=s=>1-Math.sin(Math.acos(s)),sf=rr(ef),pk=Rc(sf),$c=Zd(Qd),uk=rr($c),yk=Rc($c),dk=lk(Qd),fk=4356/361,mk=35442/1805,hk=16061/1805,Ol=s=>{if(s===1||s===0)return s;const o=s*s;return s<rk?7.5625*o:s<ak?9.075*o-9.9*s+3.4:s<ck?fk*o-mk*s+hk:10.8*s*s-20.52*s+10.72},_k=rr(Ol),Bk=s=>s<.5?.5*(1-Ol(1-s*2)):.5*Ol(s*2-1)+.5;function Ak(s,o){return s.map(()=>o||Xd).splice(0,s.length-1)}function gk(s){const o=s.length;return s.map((n,t)=>t!==0?t/(o-1):0)}function vk(s,o){return s.map(n=>n*o)}function hl({from:s=0,to:o=1,ease:n,offset:t,duration:l=300}){const a={done:!1,value:s},c=Array.isArray(o)?o:[s,o],i=vk(t&&t.length===c.length?t:gk(c),l);function p(){return Yd(i,c,{ease:Array.isArray(n)?n:Ak(c,n)})}let u=p();return{next:y=>(a.value=u(y),a.done=y>=l,a),flipTarget:()=>{c.reverse(),u=p()}}}function Ck({velocity:s=0,from:o=0,power:n=.8,timeConstant:t=350,restDelta:l=.5,modifyTarget:a}){const c={done:!1,value:o};let i=n*s;const p=o+i,u=a===void 0?p:a(p);return u!==p&&(i=u-o),{next:y=>{const d=-i*Math.exp(-y/t);return c.done=!(d>l||d<-l),c.value=c.done?u:u+d,c},flipTarget:()=>{}}}const Lp={keyframes:hl,spring:bc,decay:Ck};function Dk(s){if(Array.isArray(s.to))return hl;if(Lp[s.type])return Lp[s.type];const o=new Set(Object.keys(s));return o.has("ease")||o.has("duration")&&!o.has("dampingRatio")?hl:o.has("dampingRatio")||o.has("stiffness")||o.has("mass")||o.has("damping")||o.has("restSpeed")||o.has("restDelta")?bc:hl}function of(s,o,n=0){return s-o-n}function Ek(s,o,n=0,t=!0){return t?of(o+-s,o,n):o-(s-o)+n}function bk(s,o,n,t){return t?s>=o+n:s<=-n}const kk=s=>{const o=({delta:n})=>s(n);return{start:()=>Ra.update(o,!0),stop:()=>wb.update(o)}};function nf(s){var o,n,{from:t,autoplay:l=!0,driver:a=kk,elapsed:c=0,repeat:i=0,repeatType:p="loop",repeatDelay:u=0,onPlay:y,onStop:d,onComplete:f,onRepeat:h,onUpdate:m}=s,B=Md(s,["from","autoplay","driver","elapsed","repeat","repeatType","repeatDelay","onPlay","onStop","onComplete","onRepeat","onUpdate"]);let{to:A}=B,b,v=0,D=B.duration,w,T=!1,H=!0,z;const I=Dk(B);!((n=(o=I).needsInterpolation)===null||n===void 0)&&n.call(o,t,A)&&(z=Yd([0,100],[t,A],{clamp:!1}),t=0,A=100);const G=I(Object.assign(Object.assign({},B),{from:t,to:A}));function ne(){v++,p==="reverse"?(H=v%2===0,c=Ek(c,D,u,H)):(c=of(c,D,u),p==="mirror"&&G.flipTarget()),T=!1,h&&h()}function ue(){b.stop(),f&&f()}function ee(Te){if(H||(Te=-Te),c+=Te,!T){const xe=G.next(Math.max(0,c));w=xe.value,z&&(w=z(w)),T=H?xe.done:c<=0}m==null||m(w),T&&(v===0&&(D??(D=c)),v<i?bk(c,D,u,H)&&ne():ue())}function De(){y==null||y(),b=a(ee),b.start()}return l&&De(),{stop:()=>{d==null||d(),b.stop()}}}function tf(s,o){return o?s*(1e3/o):0}function wk({from:s=0,velocity:o=0,min:n,max:t,power:l=.8,timeConstant:a=750,bounceStiffness:c=500,bounceDamping:i=10,restDelta:p=1,modifyTarget:u,driver:y,onUpdate:d,onComplete:f,onStop:h}){let m;function B(D){return n!==void 0&&D<n||t!==void 0&&D>t}function A(D){return n===void 0?t:t===void 0||Math.abs(n-D)<Math.abs(t-D)?n:t}function b(D){m==null||m.stop(),m=nf(Object.assign(Object.assign({},D),{driver:y,onUpdate:w=>{var T;d==null||d(w),(T=D.onUpdate)===null||T===void 0||T.call(D,w)},onComplete:f,onStop:h}))}function v(D){b(Object.assign({type:"spring",stiffness:c,damping:i,restDelta:p},D))}if(B(s))v({from:s,velocity:o,to:A(s)});else{let D=l*o+s;typeof u<"u"&&(D=u(D));const w=A(D),T=w===n?-1:1;let H,z;const I=G=>{H=z,z=G,o=tf(G-H,Td().delta),(T===1&&G>w||T===-1&&G<w)&&v({from:G,to:w,velocity:o})};b({type:"decay",from:s,velocity:o,timeConstant:a,power:l,restDelta:p,modifyTarget:u,onUpdate:B(D)?I:void 0})}return{stop:()=>m==null?void 0:m.stop()}}const lf=(s,o)=>1-3*o+3*s,rf=(s,o)=>3*o-6*s,af=s=>3*s,Ll=(s,o,n)=>((lf(o,n)*s+rf(o,n))*s+af(o))*s,cf=(s,o,n)=>3*lf(o,n)*s*s+2*rf(o,n)*s+af(o),Sk=1e-7,Rk=10;function xk(s,o,n,t,l){let a,c,i=0;do c=o+(n-o)/2,a=Ll(c,t,l)-s,a>0?n=c:o=c;while(Math.abs(a)>Sk&&++i<Rk);return c}const $k=8,Fk=.001;function Ik(s,o,n,t){for(let l=0;l<$k;++l){const a=cf(o,n,t);if(a===0)return o;const c=Ll(o,n,t)-s;o-=c/a}return o}const _l=11,al=1/(_l-1);function Tk(s,o,n,t){if(s===o&&n===t)return Jd;const l=new Float32Array(_l);for(let c=0;c<_l;++c)l[c]=Ll(c*al,s,n);function a(c){let i=0,p=1;const u=_l-1;for(;p!==u&&l[p]<=c;++p)i+=al;--p;const y=(c-l[p])/(l[p+1]-l[p]),d=i+y*al,f=cf(d,s,n);return f>=Fk?Ik(c,d,s,n):f===0?d:xk(c,i,i+al,s,n)}return c=>c===0||c===1?c:Ll(a(c),o,t)}const Mr={};class Mk{constructor(){this.subscriptions=new Set}add(o){return this.subscriptions.add(o),()=>this.subscriptions.delete(o)}notify(o,n,t){if(this.subscriptions.size)for(const l of this.subscriptions)l(o,n,t)}clear(){this.subscriptions.clear()}}const Np=s=>!isNaN(parseFloat(s));class Pk{constructor(o){this.timeDelta=0,this.lastUpdated=0,this.updateSubscribers=new Mk,this.canTrackVelocity=!1,this.updateAndNotify=n=>{this.prev=this.current,this.current=n;const{delta:t,timestamp:l}=Td();this.lastUpdated!==l&&(this.timeDelta=t,this.lastUpdated=l),Ra.postRender(this.scheduleVelocityCheck),this.updateSubscribers.notify(this.current)},this.scheduleVelocityCheck=()=>Ra.postRender(this.velocityCheck),this.velocityCheck=({timestamp:n})=>{this.canTrackVelocity||(this.canTrackVelocity=Np(this.current)),n!==this.lastUpdated&&(this.prev=this.current)},this.prev=this.current=o,this.canTrackVelocity=Np(this.current)}onChange(o){return this.updateSubscribers.add(o)}clearListeners(){this.updateSubscribers.clear()}set(o){this.updateAndNotify(o)}get(){return this.current}getPrevious(){return this.prev}getVelocity(){return this.canTrackVelocity?tf(parseFloat(this.current)-parseFloat(this.prev),this.timeDelta):0}start(o){return this.stop(),new Promise(n=>{const{stop:t}=o(n);this.stopAnimation=t}).then(()=>this.clearAnimation())}stop(){this.stopAnimation&&this.stopAnimation(),this.clearAnimation()}isAnimating(){return!!this.stopAnimation}clearAnimation(){this.stopAnimation=null}destroy(){this.updateSubscribers.clear(),this.stop()}}function Ok(s){return new Pk(s)}const{isArray:Lk}=Array;function Nk(){const s=X({}),o=t=>{const l=a=>{s.value[a]&&(s.value[a].stop(),s.value[a].destroy(),delete s.value[a])};t?Lk(t)?t.forEach(l):l(t):Object.keys(s.value).forEach(l)},n=(t,l,a)=>{if(s.value[t])return s.value[t];const c=Ok(l);return c.onChange(i=>a[t]=i),s.value[t]=c,c};return u_(o),{motionValues:s,get:n,stop:o}}const qk=s=>Array.isArray(s),jo=()=>({type:"spring",stiffness:500,damping:25,restDelta:.5,restSpeed:10}),Pr=s=>({type:"spring",stiffness:550,damping:s===0?2*Math.sqrt(550):30,restDelta:.01,restSpeed:10}),Hk=s=>({type:"spring",stiffness:550,damping:s===0?100:30,restDelta:.01,restSpeed:10}),Or=()=>({type:"keyframes",ease:"linear",duration:300}),Uk=s=>({type:"keyframes",duration:800,values:s}),qp={default:Hk,x:jo,y:jo,z:jo,rotate:jo,rotateX:jo,rotateY:jo,rotateZ:jo,scaleX:Pr,scaleY:Pr,scale:Pr,backgroundColor:Or,color:Or,opacity:Or},pf=(s,o)=>{let n;return qk(o)?n=Uk:n=qp[s]||qp.default,{to:o,...n(o)}},Hp={...zt,transform:Math.round},uf={color:_s,backgroundColor:_s,outlineColor:_s,fill:_s,stroke:_s,borderColor:_s,borderTopColor:_s,borderRightColor:_s,borderBottomColor:_s,borderLeftColor:_s,borderWidth:Be,borderTopWidth:Be,borderRightWidth:Be,borderBottomWidth:Be,borderLeftWidth:Be,borderRadius:Be,radius:Be,borderTopLeftRadius:Be,borderTopRightRadius:Be,borderBottomRightRadius:Be,borderBottomLeftRadius:Be,width:Be,maxWidth:Be,height:Be,maxHeight:Be,size:Be,top:Be,right:Be,bottom:Be,left:Be,padding:Be,paddingTop:Be,paddingRight:Be,paddingBottom:Be,paddingLeft:Be,margin:Be,marginTop:Be,marginRight:Be,marginBottom:Be,marginLeft:Be,rotate:Vo,rotateX:Vo,rotateY:Vo,rotateZ:Vo,scale:rl,scaleX:rl,scaleY:rl,scaleZ:rl,skew:Vo,skewX:Vo,skewY:Vo,distance:Be,translateX:Be,translateY:Be,translateZ:Be,x:Be,y:Be,z:Be,perspective:Be,transformPerspective:Be,opacity:mt,originX:Ip,originY:Ip,originZ:Be,zIndex:Hp,filter:Ta,WebkitFilter:Ta,fillOpacity:mt,strokeOpacity:mt,numOctaves:Hp},Fc=s=>uf[s],yf=(s,o)=>o&&typeof s=="number"&&o.transform?o.transform(s):s;function Vk(s,o){let n=Fc(s);return n!==Ta&&(n=Kt),n.getAnimatableNone?n.getAnimatableNone(o):void 0}const jk={linear:Jd,easeIn:xc,easeInOut:Xd,easeOut:ik,circIn:ef,circInOut:pk,circOut:sf,backIn:$c,backInOut:yk,backOut:uk,anticipate:dk,bounceIn:_k,bounceInOut:Bk,bounceOut:Ol},Up=s=>{if(Array.isArray(s)){const[o,n,t,l]=s;return Tk(o,n,t,l)}else if(typeof s=="string")return jk[s];return s},Gk=s=>Array.isArray(s)&&typeof s[0]!="number",Vp=(s,o)=>s==="zIndex"?!1:!!(typeof o=="number"||Array.isArray(o)||typeof o=="string"&&Kt.test(o)&&!o.startsWith("url("));function Wk(s){return Array.isArray(s.to)&&s.to[0]===null&&(s.to=[...s.to],s.to[0]=s.from),s}function zk({ease:s,times:o,delay:n,...t}){const l={...t};return o&&(l.offset=o),s&&(l.ease=Gk(s)?s.map(Up):Up(s)),n&&(l.elapsed=-n),l}function Kk(s,o,n){return Array.isArray(o.to)&&(s.duration||(s.duration=800)),Wk(o),Yk(s)||(s={...s,...pf(n,o.to)}),{...o,...zk(s)}}function Yk({delay:s,repeat:o,repeatType:n,repeatDelay:t,from:l,...a}){return!!Object.keys(a).length}function Zk(s,o){return s[o]||s.default||s}function Qk(s,o,n,t,l){const a=Zk(t,s);let c=a.from===null||a.from===void 0?o.get():a.from;const i=Vp(s,n);c==="none"&&i&&typeof n=="string"&&(c=Vk(s,n));const p=Vp(s,c);function u(d){const f={from:c,to:n,velocity:t.velocity?t.velocity:o.getVelocity(),onUpdate:h=>o.set(h)};return a.type==="inertia"||a.type==="decay"?wk({...f,...a}):nf({...Kk(a,f,s),onUpdate:h=>{f.onUpdate(h),a.onUpdate&&a.onUpdate(h)},onComplete:()=>{t.onComplete&&t.onComplete(),l&&l(),d&&d()}})}function y(d){return o.set(n),t.onComplete&&t.onComplete(),l&&l(),d&&d(),{stop:()=>{}}}return!p||!i||a.type===!1?y:u}function Jk(){const{motionValues:s,stop:o,get:n}=Nk();return{motionValues:s,stop:o,push:(l,a,c,i={},p)=>{const u=c[l],y=n(l,u,c);if(i&&i.immediate){y.set(a);return}const d=Qk(l,y,a,i,p);y.start(d)}}}function Xk(s,o={},{motionValues:n,push:t,stop:l}=Jk()){const a=k(o),c=X(!1);Ae(n,d=>{c.value=Object.values(d).filter(f=>f.isAnimating()).length>0},{immediate:!0,deep:!0});const i=d=>{if(!a||!a[d])throw new Error(`The variant ${d} does not exist.`);return a[d]},p=d=>(typeof d=="string"&&(d=i(d)),Promise.all(Object.entries(d).map(([f,h])=>{if(f!=="transition")return new Promise(m=>t(f,h,s,d.transition||pf(f,d[f]),m))}).filter(Boolean)));return{isAnimating:c,apply:p,set:d=>{const f=ca(d)?d:i(d);Object.entries(f).forEach(([h,m])=>{h!=="transition"&&t(h,m,s,{immediate:!0})})},leave:async d=>{let f;if(a&&(a.leave&&(f=a.leave),!a.leave&&a.initial&&(f=a.initial)),!f){d();return}await p(f),d()},stop:l}}const Ic=typeof window<"u",ew=()=>Ic&&window.onpointerdown===null,sw=()=>Ic&&window.ontouchstart===null,ow=()=>Ic&&window.onmousedown===null;function nw({target:s,state:o,variants:n,apply:t}){const l=k(n),a=X(!1),c=X(!1),i=X(!1),p=$(()=>{let y=[];return l&&(l.hovered&&(y=[...y,...Object.keys(l.hovered)]),l.tapped&&(y=[...y,...Object.keys(l.tapped)]),l.focused&&(y=[...y,...Object.keys(l.focused)])),y}),u=$(()=>{const y={};Object.assign(y,o.value),a.value&&l.hovered&&Object.assign(y,l.hovered),c.value&&l.tapped&&Object.assign(y,l.tapped),i.value&&l.focused&&Object.assign(y,l.focused);for(const d in y)p.value.includes(d)||delete y[d];return y});l.hovered&&(ve(s,"mouseenter",()=>a.value=!0),ve(s,"mouseleave",()=>{a.value=!1,c.value=!1}),ve(s,"mouseout",()=>{a.value=!1,c.value=!1})),l.tapped&&(ow()&&(ve(s,"mousedown",()=>c.value=!0),ve(s,"mouseup",()=>c.value=!1)),ew()&&(ve(s,"pointerdown",()=>c.value=!0),ve(s,"pointerup",()=>c.value=!1)),sw()&&(ve(s,"touchstart",()=>c.value=!0),ve(s,"touchend",()=>c.value=!1))),l.focused&&(ve(s,"focus",()=>i.value=!0),ve(s,"blur",()=>i.value=!1)),Ae(u,t)}function tw({set:s,target:o,apply:n,variants:t,variant:l}){const a=k(t);Ae(()=>o,()=>{a&&(a.initial&&s("initial"),a.enter&&(l.value="enter"))},{immediate:!0,flush:"pre"})}function lw({state:s,apply:o}){Ae(s,n=>{n&&o(n)},{immediate:!0})}function rw({target:s,variants:o,variant:n}){const t=k(o);t&&(t.visible||t.visibleOnce)&&aB(s,([{isIntersecting:l}])=>{t.visible?l?n.value="visible":n.value="initial":t.visibleOnce&&(l&&n.value!=="visibleOnce"?n.value="visibleOnce":n.value||(n.value="initial"))})}function aw(s,o={syncVariants:!0,lifeCycleHooks:!0,visibilityHooks:!0,eventListeners:!0}){o.lifeCycleHooks&&tw(s),o.syncVariants&&lw(s),o.visibilityHooks&&rw(s),o.eventListeners&&nw(s)}function df(s={}){const o=Ge({...s}),n=X({});return Ae(o,()=>{const t={};for(const[l,a]of Object.entries(o)){const c=Fc(l),i=yf(a,c);t[l]=i}n.value=t},{immediate:!0,deep:!0}),{state:o,style:n}}function Tc(s,o){Ae(()=>ws(s),n=>{n&&o(n)},{immediate:!0})}const cw={x:"translateX",y:"translateY",z:"translateZ"};function ff(s={},o=!0){const n=Ge({...s}),t=X("");return Ae(n,l=>{let a="",c=!1;if(o&&(l.x||l.y||l.z)){const i=[l.x||0,l.y||0,l.z||0].map(Be.transform).join(",");a+=`translate3d(${i}) `,c=!0}for(const[i,p]of Object.entries(l)){if(o&&(i==="x"||i==="y"||i==="z"))continue;const u=Fc(i),y=yf(p,u);a+=`${cw[i]||i}(${y}) `}o&&!c&&(a+="translateZ(0px) "),t.value=a.trim()},{immediate:!0,deep:!0}),{state:n,transform:t}}const iw=["","X","Y","Z"],pw=["perspective","translate","scale","rotate","skew"],mf=["transformPerspective","x","y","z"];pw.forEach(s=>{iw.forEach(o=>{const n=s+o;mf.push(n)})});const uw=new Set(mf);function Mc(s){return uw.has(s)}const yw=new Set(["originX","originY","originZ"]);function hf(s){return yw.has(s)}function dw(s){const o={},n={};return Object.entries(s).forEach(([t,l])=>{Mc(t)||hf(t)?o[t]=l:n[t]=l}),{transform:o,style:n}}function _f(s){const{transform:o,style:n}=dw(s),{transform:t}=ff(o),{style:l}=df(n);return t.value&&(l.value.transform=t.value),l.value}function fw(s,o){let n,t;const{state:l,style:a}=df();return Tc(s,c=>{t=c;for(const i of Object.keys(uf))c.style[i]===null||c.style[i]===""||Mc(i)||hf(i)||(l[i]=c.style[i]);n&&Object.entries(n).forEach(([i,p])=>c.style[i]=p),o&&o(l)}),Ae(a,c=>{if(!t){n=c;return}for(const i in c)t.style[i]=c[i]},{immediate:!0}),{style:l}}function mw(s){const o=s.trim().split(/\) |\)/);if(o.length===1)return{};const n=t=>t.endsWith("px")||t.endsWith("deg")?parseFloat(t):isNaN(Number(t))?Number(t):t;return o.reduce((t,l)=>{if(!l)return t;const[a,c]=l.split("("),p=c.split(",").map(y=>n(y.endsWith(")")?y.replace(")",""):y.trim())),u=p.length===1?p[0]:p;return{...t,[a]:u}},{})}function hw(s,o){Object.entries(mw(o)).forEach(([n,t])=>{const l=["x","y","z"];if(n==="translate3d"){if(t===0){l.forEach(a=>s[a]=0);return}t.forEach((a,c)=>s[l[c]]=a);return}if(t=parseFloat(t),n==="translateX"){s.x=t;return}if(n==="translateY"){s.y=t;return}if(n==="translateZ"){s.z=t;return}s[n]=t})}function _w(s,o){let n,t;const{state:l,transform:a}=ff();return Tc(s,c=>{t=c,c.style.transform&&hw(l,c.style.transform),n&&(c.style.transform=n),o&&o(l)}),Ae(a,c=>{if(!t){n=c;return}t.style.transform=c},{immediate:!0}),{transform:l}}function Bw(s,o){const n=Ge({}),t=c=>Object.entries(c).forEach(([i,p])=>n[i]=p),{style:l}=fw(s,t),{transform:a}=_w(s,t);return Ae(n,c=>{Object.entries(c).forEach(([i,p])=>{const u=Mc(i)?a:l;u[i]&&u[i]===p||(u[i]=p)})},{immediate:!0,deep:!0}),Tc(s,()=>o&&t(o)),{motionProperties:n,style:l,transform:a}}function Aw(s={}){const o=k(s),n=X();return{state:$(()=>{if(n.value)return o[n.value]}),variant:n}}function Bf(s,o={},n){const{motionProperties:t}=Bw(s),{variant:l,state:a}=Aw(o),c=Xk(t,o),i={target:s,variant:l,variants:o,state:a,motionProperties:t,...c};return aw(i,n),i}const gw=["initial","enter","leave","visible","visible-once","hovered","tapped","focused","delay"],vw=(s,o)=>{const n=s.props?s.props:s.data&&s.data.attrs?s.data.attrs:{};n&&(n.variants&&ca(n.variants)&&(o.value={...o.value,...n.variants}),gw.forEach(t=>{if(t==="delay"){if(n&&n[t]&&Y5(n[t])){const l=n[t];o&&o.value&&(o.value.enter&&(o.value.enter.transition||(o.value.enter.transition={}),o.value.enter.transition={delay:l,...o.value.enter.transition}),o.value.visible&&(o.value.visible.transition||(o.value.visible.transition={}),o.value.visible.transition={delay:l,...o.value.visible.transition}),o.value.visibleOnce&&(o.value.visibleOnce.transition||(o.value.visibleOnce.transition={}),o.value.visibleOnce.transition={delay:l,...o.value.visibleOnce.transition}))}return}t==="visible-once"&&(t="visibleOnce"),n&&n[t]&&ca(n[t])&&(o.value[t]=n[t])}))},Lr=s=>({created:(n,t,l)=>{const a=t.value&&typeof t.value=="string"?t.value:l.key;a&&Mr[a]&&Mr[a].stop();const c=X(s||{});typeof t.value=="object"&&(c.value=t.value),vw(l,c);const i=Bf(n,c);n.motionInstance=i,a&&(Mr[a]=i)},getSSRProps(n,t){let{initial:l}=n.value||t&&(t==null?void 0:t.props)||{};l=k(l);const a=Db((s==null?void 0:s.initial)||{},l||{});return!a||Object.keys(a).length===0?void 0:{style:_f(a)}}}),Cw={initial:{opacity:0},enter:{opacity:1}},Dw={initial:{opacity:0},visible:{opacity:1}},Ew={initial:{opacity:0},visibleOnce:{opacity:1}},bw={initial:{scale:0,opacity:0},enter:{scale:1,opacity:1}},kw={initial:{scale:0,opacity:0},visible:{scale:1,opacity:1}},ww={initial:{scale:0,opacity:0},visibleOnce:{scale:1,opacity:1}},Sw={initial:{x:-100,rotate:90,opacity:0},enter:{x:0,rotate:0,opacity:1}},Rw={initial:{x:-100,rotate:90,opacity:0},visible:{x:0,rotate:0,opacity:1}},xw={initial:{x:-100,rotate:90,opacity:0},visibleOnce:{x:0,rotate:0,opacity:1}},$w={initial:{x:100,rotate:-90,opacity:0},enter:{x:0,rotate:0,opacity:1}},Fw={initial:{x:100,rotate:-90,opacity:0},visible:{x:0,rotate:0,opacity:1}},Iw={initial:{x:100,rotate:-90,opacity:0},visibleOnce:{x:0,rotate:0,opacity:1}},Tw={initial:{y:-100,rotate:-90,opacity:0},enter:{y:0,rotate:0,opacity:1}},Mw={initial:{y:-100,rotate:-90,opacity:0},visible:{y:0,rotate:0,opacity:1}},Pw={initial:{y:-100,rotate:-90,opacity:0},visibleOnce:{y:0,rotate:0,opacity:1}},Ow={initial:{y:100,rotate:90,opacity:0},enter:{y:0,rotate:0,opacity:1}},Lw={initial:{y:100,rotate:90,opacity:0},visible:{y:0,rotate:0,opacity:1}},Nw={initial:{y:100,rotate:90,opacity:0},visibleOnce:{y:0,rotate:0,opacity:1}},qw={initial:{x:-100,opacity:0},enter:{x:0,opacity:1}},Hw={initial:{x:-100,opacity:0},visible:{x:0,opacity:1}},Uw={initial:{x:-100,opacity:0},visibleOnce:{x:0,opacity:1}},Vw={initial:{x:100,opacity:0},enter:{x:0,opacity:1}},jw={initial:{x:100,opacity:0},visible:{x:0,opacity:1}},Gw={initial:{x:100,opacity:0},visibleOnce:{x:0,opacity:1}},Ww={initial:{y:-100,opacity:0},enter:{y:0,opacity:1}},zw={initial:{y:-100,opacity:0},visible:{y:0,opacity:1}},Kw={initial:{y:-100,opacity:0},visibleOnce:{y:0,opacity:1}},Yw={initial:{y:100,opacity:0},enter:{y:0,opacity:1}},Zw={initial:{y:100,opacity:0},visible:{y:0,opacity:1}},Qw={initial:{y:100,opacity:0},visibleOnce:{y:0,opacity:1}},Ma={__proto__:null,fade:Cw,fadeVisible:Dw,fadeVisibleOnce:Ew,pop:bw,popVisible:kw,popVisibleOnce:ww,rollBottom:Ow,rollLeft:Sw,rollRight:$w,rollTop:Tw,rollVisibleBottom:Lw,rollVisibleLeft:Rw,rollVisibleOnceBottom:Nw,rollVisibleOnceLeft:xw,rollVisibleOnceRight:Iw,rollVisibleOnceTop:Pw,rollVisibleRight:Fw,rollVisibleTop:Mw,slideBottom:Yw,slideLeft:qw,slideRight:Vw,slideTop:Ww,slideVisibleBottom:Zw,slideVisibleLeft:Hw,slideVisibleOnceBottom:Qw,slideVisibleOnceLeft:Uw,slideVisibleOnceRight:Gw,slideVisibleOnceTop:Kw,slideVisibleRight:jw,slideVisibleTop:zw},Jw=Pe({props:{is:{type:[String,Object],required:!1},preset:{type:String,required:!1},instance:{type:Object,required:!1},variants:{type:Object,required:!1},initial:{type:Object,required:!1},enter:{type:Object,required:!1},leave:{type:Object,required:!1},visible:{type:Object,required:!1},visibleOnce:{type:Object,required:!1},hovered:{type:Object,required:!1},tapped:{type:Object,required:!1},focused:{type:Object,required:!1},delay:{type:[Number,String],required:!1}},setup(s){var i;const o=eh(),n=Ge({});if(!s.is&&!o.default)return()=>fs("div",{});const t=$(()=>{let p;return s.preset&&(p=Ma[s.preset]),p}),l=$(()=>({initial:s.initial,enter:s.enter,leave:s.leave,visible:s.visible,visibleOnce:s.visibleOnce,hovered:s.hovered,tapped:s.tapped,focused:s.focused})),a=$(()=>{const p={...l.value,...t.value||{},...s.variants||{}};return s.delay&&(p.enter.transition={...p.enter.transition},p.enter.transition.delay=parseInt(s.delay)),p}),c=$(()=>{if(!s.is)return;let p=s.is;return typeof c.value=="string"&&!ou(p)&&(p=kl(p)),p});if(((i=process==null?void 0:process.env)==null?void 0:i.NODE_ENV)==="development"||process!=null&&process.dev){const p=u=>{var y;(y=u.variants)!=null&&y.initial&&u.set("initial"),setTimeout(()=>{var d,f,h;(d=u.variants)!=null&&d.enter&&u.apply("enter"),(f=u.variants)!=null&&f.visible&&u.apply("visible"),(h=u.variants)!=null&&h.visibleOnce&&u.apply("visibleOnce")},10)};Ql(()=>Object.entries(n).forEach(([u,y])=>p(y)))}return{slots:o,component:c,motionConfig:a,instances:n}},render({slots:s,motionConfig:o,instances:n,component:t}){var i;const l=_f(o.initial||{}),a=(p,u)=>(p.props||(p.props={}),p.props.style=l,p.props.onVnodeMounted=({el:y})=>{const d=Bf(y,o);n[u]=d},p);if(t){const p=fs(t,void 0,s);return a(p,0),p}return(((i=s.default)==null?void 0:i.call(s))||[]).map((p,u)=>a(p,u))}});function Xw(s){const o="àáâäæãåāăąçćčđďèéêëēėęěğǵḧîïíīįìłḿñńǹňôöòóœøōõőṕŕřßśšşșťțûüùúūǘůűųẃẍÿýžźż·/_,:;",n="aaaaaaaaaacccddeeeeeeeegghiiiiiilmnnnnoooooooooprrsssssttuuuuuuuuuwxyyzzz------",t=new RegExp(o.split("").join("|"),"g");return s.toString().replace(/[A-Z]/g,l=>`-${l}`).toLowerCase().replace(/\s+/g,"-").replace(t,l=>n.charAt(o.indexOf(l))).replace(/&/g,"-and-").replace(/[^\w\-]+/g,"").replace(/\-\-+/g,"-").replace(/^-+/,"").replace(/-+$/,"")}const eS={install(s,o){if(s.directive("motion",Lr()),s.component("Motion",Jw),!o||o&&!o.excludePresets)for(const n in Ma){const t=Ma[n];s.directive(`motion-${Xw(n)}`,Lr(t))}if(o&&o.directives)for(const n in o.directives){const t=o.directives[n];t.initial,s.directive(`motion-${n}`,Lr(t))}}};var jp;const _t=typeof window<"u",sS=Object.prototype.toString,oS=s=>sS.call(s)==="[object Object]";_t&&((jp=window==null?void 0:window.navigator)!=null&&jp.userAgent)&&/iP(ad|hone|od)/.test(window.navigator.userAgent);function nS(s){return Va()?(uu(s),!0):!1}function tS(s){var o;const n=k(s);return(o=n==null?void 0:n.$el)!=null?o:n}const lS=_t?window:void 0,Pa=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},Oa="__vueuse_ssr_handlers__";Pa[Oa]=Pa[Oa]||{};Pa[Oa];function rS(s,o={}){const{immediate:n=!0,window:t=lS}=o,l=X(!1);let a=null;function c(){!l.value||!t||(s(),a=t.requestAnimationFrame(c))}function i(){!l.value&&t&&(l.value=!0,c())}function p(){l.value=!1,a!=null&&t&&(t.cancelAnimationFrame(a),a=null)}return n&&i(),nS(p),{isActive:l,pause:p,resume:i}}var Gp;(function(s){s.UP="UP",s.RIGHT="RIGHT",s.DOWN="DOWN",s.LEFT="LEFT",s.NONE="NONE"})(Gp||(Gp={}));const ar="vue-starport-injection",Af="vue-starport-options",aS={duration:800,easing:"cubic-bezier(0.45, 0, 0.55, 1)",keepAlive:!1},gf={port:{type:String,required:!0},duration:{type:Number,required:!1},easing:{type:String,required:!1},keepAlive:{type:Boolean,required:!1,default:void 0},mountedProps:{type:Object,required:!1},initialProps:{type:Object,required:!1}};var cS=Object.defineProperty,Nl=Object.getOwnPropertySymbols,vf=Object.prototype.hasOwnProperty,Cf=Object.prototype.propertyIsEnumerable,Wp=(s,o,n)=>o in s?cS(s,o,{enumerable:!0,configurable:!0,writable:!0,value:n}):s[o]=n,iS=(s,o)=>{for(var n in o||(o={}))vf.call(o,n)&&Wp(s,n,o[n]);if(Nl)for(var n of Nl(o))Cf.call(o,n)&&Wp(s,n,o[n]);return s},zp=(s,o)=>{var n={};for(var t in s)vf.call(s,t)&&o.indexOf(t)<0&&(n[t]=s[t]);if(s!=null&&Nl)for(var t of Nl(s))o.indexOf(t)<0&&Cf.call(s,t)&&(n[t]=s[t]);return n};const pS=Pe({name:"StarportProxy",props:iS({props:{type:Object,default:()=>({})},component:{type:Object,required:!0}},gf),setup(s,o){const n=F(ar),t=$(()=>n.getInstance(s.port,s.component)),l=X(),a=t.value.generateId(),c=X(!1);return t.value.isVisible||(t.value.land(),c.value=!0),fn(async()=>{if(t.value.el){console.error(`[Vue Starport] Multiple proxies of "${t.value.componentName}" with port "${s.port}" detected. The later one will be ignored.`);return}if(t.value.el=l.value,await ns(),c.value=!0,t.value.rect.update(),t.value.rect.width===0||t.value.rect.height===0){const i=t.value.rect.width===0?"width":"height";console.warn(`[Vue Starport] The proxy of component "${t.value.componentName}" (port "${s.port}") has no ${i} on initial render, have you set the size for it?`),console.warn("element:",t.value.el),console.warn("rect:",t.value.rect)}}),Ht(async()=>{t.value.rect.update(),t.value.liftOff(),t.value.el=void 0,c.value=!1,!t.value.options.keepAlive&&(await ns(),await ns(),!t.value.el&&n.dispose(t.value.port))}),Ae(()=>s,async()=>{t.value.props&&await ns();const i=s,{props:p}=i,u=zp(i,["props"]);t.value.props=p||{},t.value.setLocalOptions(u)},{deep:!0,immediate:!0}),()=>{const i=s,{initialProps:p,mountedProps:u}=i,y=zp(i,["initialProps","mountedProps"]),d=fe(y,(c.value?u:p)||{});return fs("div",fe(d,{id:a,ref:l,"data-starport-proxy":t.value.componentId,"data-starport-landed":t.value.isLanded?"true":void 0,"data-starport-floating":t.value.isLanded?void 0:"true"}),o.slots.default?fs(o.slots.default):void 0)}}});var uS=Object.defineProperty,yS=Object.defineProperties,dS=Object.getOwnPropertyDescriptors,Kp=Object.getOwnPropertySymbols,fS=Object.prototype.hasOwnProperty,mS=Object.prototype.propertyIsEnumerable,Yp=(s,o,n)=>o in s?uS(s,o,{enumerable:!0,configurable:!0,writable:!0,value:n}):s[o]=n,hS=(s,o)=>{for(var n in o||(o={}))fS.call(o,n)&&Yp(s,n,o[n]);if(Kp)for(var n of Kp(o))mS.call(o,n)&&Yp(s,n,o[n]);return s},_S=(s,o)=>yS(s,dS(o));const BS=Pe({name:"Starport",inheritAttrs:!0,props:gf,setup(s,o){const n=X(!1);return fn(()=>{if(n.value=!0,!F(ar))throw new Error("[Vue Starport] Failed to find the carrier, all Starport components must be wrapped in a <StarportCarrier> component.")}),()=>{var c,i;const t=(i=(c=o.slots).default)==null?void 0:i.call(c);if(!t)throw new Error("[Vue Starport] Slot is required to use <Starport>");if(t.length!==1)throw new Error(`[Vue Starport] <Starport> requires exactly one slot, but got ${t.length}`);const l=t[0];let a=l.type;return(!oS(a)||mo(a))&&(a={render(){return t}}),fs(pS,_S(hS({},s),{key:s.port,component:Gl(a),props:l.props}))}}});function AS(s){const o=Ge({height:0,width:0,left:0,top:0,update:t,listen:a,pause:c,margin:"0px",padding:"0px"}),n=_t?document.documentElement||document.body:void 0;function t(){if(!_t)return;const i=tS(s);if(!i)return;const{height:p,width:u,left:y,top:d}=i.getBoundingClientRect(),f=window.getComputedStyle(i),h=f.margin,m=f.padding;Object.assign(o,{height:p,width:u,left:y,top:n.scrollTop+d,margin:h,padding:m})}const l=rS(t,{immediate:!1});function a(){_t&&(t(),l.resume())}function c(){l.pause()}return o}let gS=(s,o=21)=>(n=o)=>{let t="",l=n;for(;l--;)t+=s[Math.random()*s.length|0];return t};const Zp=gS("abcdefghijklmnopqrstuvwxyz",5);function Qp(s){return s.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase().replace(/[^\w\d_-]/g,"")}function vS(s){var o;return s.name||((o=s.__file)==null?void 0:o.split(/[\/\\.]/).slice(-2)[0])||""}var CS=Object.defineProperty,Jp=Object.getOwnPropertySymbols,DS=Object.prototype.hasOwnProperty,ES=Object.prototype.propertyIsEnumerable,Xp=(s,o,n)=>o in s?CS(s,o,{enumerable:!0,configurable:!0,writable:!0,value:n}):s[o]=n,Nr=(s,o)=>{for(var n in o||(o={}))DS.call(o,n)&&Xp(s,n,o[n]);if(Jp)for(var n of Jp(o))ES.call(o,n)&&Xp(s,n,o[n]);return s};function bS(s,o,n={}){const t=vS(o),l=Qp(t)||Zp(),a=X(),c=X(null),i=X(!1),p=X(!1),u=Nf(!0),y=X({}),d=$(()=>Nr(Nr(Nr({},aS),n),y.value)),f=X(0);let h;u.run(()=>{h=AS(a),Ae(a,async b=>{b&&(p.value=!0),await ns(),a.value||(p.value=!1)})});const m=Qp(s);function B(){return`starport-${l}-${m}-${Zp()}`}const A=B();return Ge({el:a,id:A,port:s,props:c,rect:h,scope:u,isLanded:i,isVisible:p,options:d,liftOffTime:f,component:o,componentName:t,componentId:l,generateId:B,setLocalOptions(b={}){y.value=JSON.parse(JSON.stringify(b))},elRef(){return a},liftOff(){i.value&&(i.value=!1,f.value=Date.now(),h.listen())},land(){i.value||(i.value=!0,h.pause())}})}function kS(s){const o=Ge(new Map);function n(l,a){let c=o.get(l);return c||(c=bS(l,a,s),o.set(l,c)),c.component=a,c}function t(l){var a;(a=o.get(l))==null||a.scope.stop(),o.delete(l)}return{portMap:o,dispose:t,getInstance:n}}var wS=Object.defineProperty,SS=Object.defineProperties,RS=Object.getOwnPropertyDescriptors,eu=Object.getOwnPropertySymbols,xS=Object.prototype.hasOwnProperty,$S=Object.prototype.propertyIsEnumerable,su=(s,o,n)=>o in s?wS(s,o,{enumerable:!0,configurable:!0,writable:!0,value:n}):s[o]=n,FS=(s,o)=>{for(var n in o||(o={}))xS.call(o,n)&&su(s,n,o[n]);if(eu)for(var n of eu(o))$S.call(o,n)&&su(s,n,o[n]);return s},IS=(s,o)=>SS(s,RS(o));const TS=Pe({name:"StarportCraft",props:{port:{type:String,required:!0},component:{type:Object,required:!0}},setup(s){const o=F(ar);if(!o)throw new Error("[Vue Starport] Failed to find the carrier, all Starport components must be wrapped in a <StarportCarrier> component.");const n=$(()=>o.getInstance(s.port,s.component)),t=$(()=>{var c;return((c=n.value.el)==null?void 0:c.id)||n.value.id}),l=$(()=>{const c=Date.now()-n.value.liftOffTime,i=Math.max(0,n.value.options.duration-c),p=n.value.rect,u={position:"absolute",left:0,top:0,width:`${p.width}px`,height:`${p.height}px`,margin:p.margin,padding:p.padding,transform:`translate3d(${p.left}px,${p.top}px,0px)`};return!n.value.isVisible||!n.value.el?IS(FS({},u),{zIndex:-1,display:"none"}):(n.value.isLanded?u.display="none":Object.assign(u,{transitionProperty:"all",transitionDuration:`${i}ms`,transitionTimingFunction:n.value.options.easing}),u)}),a={onTransitionend(c){n.value.isLanded||console.warn(`[Vue Starport] Transition duration of component "${n.value.componentName}" is too short (${c.elapsedTime}s) that may cause animation glitches. Try to increase the duration of that component, or decrease the duration the Starport (current: ${n.value.options.duration/1e3}s).`)}};return()=>{const c=!!(n.value.isLanded&&n.value.el);return fs("div",{style:l.value,"data-starport-craft":n.value.componentId,"data-starport-landed":n.value.isLanded?"true":void 0,"data-starport-floating":n.value.isLanded?void 0:"true",onTransitionend:n.value.land},fs(qm,{to:c?`#${t.value}`:"body",disabled:!c},fs(n.value.component,fe(a,n.value.props))))}}}),MS=Pe({name:"StarportCarrier",setup(s,{slots:o}){const n=kS(F(Af,{}));return xs().appContext.app.provide(ar,n),()=>{var l;return[(l=o.default)==null?void 0:l.call(o),Array.from(n.portMap.entries()).map(([a,{component:c}])=>fs(TS,{key:a,port:a,component:c}))]}}});function PS(s={}){return{install(o){o.provide(Af,s),o.component("Starport",BS),o.component("StarportCarrier",MS)}}}function OS(s){function o(){document.documentElement.style.setProperty("--vh",`${window.innerHeight*.01}px`)}o(),window.addEventListener("resize",o),s.app.use(eS),s.app.use(PS({keepAlive:!0}))}function Ds(s,o,n){var t;return((t=s.instance)==null?void 0:t.$).provides[o]??n}function LS(){return{install(s){s.directive("click",{name:"v-click",mounted(o,n){var y,d,f,h;if(dt.value||(y=Ds(n,it))!=null&&y.value)return;const t=Ds(n,Yo),l=Ds(n,ct),a=Ds(n,ra),c=n.modifiers.hide!==!1&&n.modifiers.hide!=null,i=n.modifiers.fade!==!1&&n.modifiers.fade!=null,p=((d=t==null?void 0:t.value)==null?void 0:d.length)||0,u=i?x5:vr;if(t&&!((f=t==null?void 0:t.value)!=null&&f.includes(o))&&t.value.push(o),n.value==null&&(n.value=t==null?void 0:t.value.length),!(a!=null&&a.value.has(n.value)))a==null||a.value.set(n.value,[o]);else if(!((h=a==null?void 0:a.value.get(n.value))!=null&&h.includes(o))){const m=(a==null?void 0:a.value.get(n.value))||[];a==null||a.value.set(n.value,[o].concat(m))}o==null||o.classList.toggle(zo,!0),l&&Ae(l,()=>{const m=(l==null?void 0:l.value)??0,B=n.value!=null?m>=n.value:m>p;o.classList.contains(Cr)||o.classList.toggle(u,!B),c!==!1&&c!==void 0&&o.classList.toggle(u,B),o.classList.toggle(Wn,!1);const A=a==null?void 0:a.value.get(m);A==null||A.forEach((b,v)=>{b.classList.toggle(nl,!1),v===A.length-1?b.classList.toggle(Wn,!0):b.classList.toggle(nl,!0)}),o.classList.contains(Wn)||o.classList.toggle(nl,B)},{immediate:!0})},unmounted(o,n){o==null||o.classList.toggle(zo,!1);const t=Ds(n,Yo);t!=null&&t.value&&aa(t.value,o)}}),s.directive("after",{name:"v-after",mounted(o,n){var i,p;if(dt.value||(i=Ds(n,it))!=null&&i.value)return;const t=Ds(n,Yo),l=Ds(n,ct),a=Ds(n,ra),c=t==null?void 0:t.value.length;n.value==null&&(n.value=t==null?void 0:t.value.length),a!=null&&a.value.has(n.value)?(p=a==null?void 0:a.value.get(n.value))==null||p.push(o):a==null||a.value.set(n.value,[o]),o==null||o.classList.toggle(zo,!0),l&&Ae(l,()=>{const u=(l.value??0)>=(n.value??c??0);o.classList.contains(Cr)||o.classList.toggle(vr,!u),o.classList.toggle(Wn,!1),o.classList.contains(Wn)||o.classList.toggle(nl,u)},{immediate:!0})},unmounted(o){o==null||o.classList.toggle(zo,!0)}}),s.directive("click-hide",{name:"v-click-hide",mounted(o,n){var c,i,p;if(dt.value||(c=Ds(n,it))!=null&&c.value)return;const t=Ds(n,Yo),l=Ds(n,ct),a=((i=t==null?void 0:t.value)==null?void 0:i.length)||0;t&&!((p=t==null?void 0:t.value)!=null&&p.includes(o))&&t.value.push(o),o==null||o.classList.toggle(zo,!0),l&&Ae(l,()=>{const u=(l==null?void 0:l.value)??0,y=n.value!=null?u>=n.value:u>a;o.classList.toggle(vr,y),o.classList.toggle(Cr,y)},{immediate:!0})},unmounted(o,n){o==null||o.classList.toggle(zo,!1);const t=Ds(n,Yo);t!=null&&t.value&&aa(t.value,o)}})}}}function NS(s,o){const n=kd(s),t=wd(o,n.currentRoute,n.currentPage);return{nav:{...n,...t,downloadPDF:ba,next:To,nextSlide:Ft,openInEditor:mb,prev:Mo,prevSlide:It},configs:Fe,themeConfigs:$(()=>Fe.themeConfig)}}function qS(){return{install(s){const o=NS(Ps,Ts);s.provide(O,Ge(o))}}}const qn=Oh(vb);qn.use(gs);qn.use(w5());qn.use(LS());qn.use(qS());OS({app:qn,router:gs});qn.mount("#app");export{Bc as $,F1 as A,X as B,WS as C,ys as D,Ye as E,Me as F,qg as G,fb as H,Ts as I,Pl as J,ib as K,xr as L,fn as M,Ge as N,jS as O,zS as P,Ae as Q,E as R,md as S,Ie as T,us as U,Xg as V,Rt as W,Sr as X,fv as Y,_c as Z,N as _,O as a,Ke as a0,HS as a1,US as a2,iv as a3,u3 as a4,VS as a5,fo as a6,Xn as a7,Jo as a8,Js as a9,va as aa,wg as ab,Sg as ac,Rg as ad,$g as ae,Xl as af,vy as ag,KS as ah,ms as ai,ll as aj,W3 as ak,$y as al,Fg as am,Ht as an,cc as b,Fe as c,Pe as d,D8 as e,te as f,e as g,k as h,F as i,Qe as j,xd as k,r as l,R as m,ts as n,C as o,be as p,pc as q,Ut as r,Gs as s,an as t,GS as u,$ as v,Dr as w,M as x,ad as y,O1 as z};
