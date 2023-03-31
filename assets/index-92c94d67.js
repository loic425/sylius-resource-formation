(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))t(r);new MutationObserver(r=>{for(const l of r)if(l.type==="childList")for(const c of l.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&t(c)}).observe(document,{childList:!0,subtree:!0});function o(r){const l={};return r.integrity&&(l.integrity=r.integrity),r.referrerPolicy&&(l.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?l.credentials="include":r.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function t(r){if(r.ep)return;r.ep=!0;const l=o(r);fetch(r.href,l)}})();function Nn(s,n){const o=Object.create(null),t=s.split(",");for(let r=0;r<t.length;r++)o[t[r]]=!0;return n?r=>!!o[r.toLowerCase()]:r=>!!o[r]}function ts(s){if(ie(s)){const n={};for(let o=0;o<s.length;o++){const t=s[o],r=je(t)?Df(t):ts(t);if(r)for(const l in r)n[l]=r[l]}return n}else{if(je(s))return s;if(Le(s))return s}}const Ef=/;(?![^(]*\))/g,bf=/:([^]+)/,kf=/\/\*.*?\*\//gs;function Df(s){const n={};return s.replace(kf,"").split(Ef).forEach(o=>{if(o){const t=o.split(bf);t.length>1&&(n[t[0].trim()]=t[1].trim())}}),n}function Ye(s){let n="";if(je(s))n=s;else if(ie(s))for(let o=0;o<s.length;o++){const t=Ye(s[o]);t&&(n+=t+" ")}else if(Le(s))for(const o in s)s[o]&&(n+=o+" ");return n.trim()}function X(s){if(!s)return null;let{class:n,style:o}=s;return n&&!je(n)&&(s.class=Ye(n)),o&&(s.style=ts(o)),s}const wf="html,body,base,head,link,meta,style,title,address,article,aside,footer,header,hgroup,h1,h2,h3,h4,h5,h6,nav,section,div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,summary,template,blockquote,iframe,tfoot",Sf="svg,animate,animateMotion,animateTransform,circle,clipPath,color-profile,defs,desc,discard,ellipse,feBlend,feColorMatrix,feComponentTransfer,feComposite,feConvolveMatrix,feDiffuseLighting,feDisplacementMap,feDistantLight,feDropShadow,feFlood,feFuncA,feFuncB,feFuncG,feFuncR,feGaussianBlur,feImage,feMerge,feMergeNode,feMorphology,feOffset,fePointLight,feSpecularLighting,feSpotLight,feTile,feTurbulence,filter,foreignObject,g,hatch,hatchpath,image,line,linearGradient,marker,mask,mesh,meshgradient,meshpatch,meshrow,metadata,mpath,path,pattern,polygon,polyline,radialGradient,rect,set,solidcolor,stop,switch,symbol,text,textPath,title,tspan,unknown,use,view",nu=Nn(wf),Rf=Nn(Sf),xf="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Ff=Nn(xf);function ou(s){return!!s||s===""}const ao=s=>je(s)?s:s==null?"":ie(s)||Le(s)&&(s.toString===au||!de(s.toString))?JSON.stringify(s,tu,2):String(s),tu=(s,n)=>n&&n.__v_isRef?tu(s,n.value):eo(n)?{[`Map(${n.size})`]:[...n.entries()].reduce((o,[t,r])=>(o[`${t} =>`]=r,o),{})}:lu(n)?{[`Set(${n.size})`]:[...n.values()]}:Le(n)&&!ie(n)&&!cu(n)?String(n):n,Ue=Object.freeze({}),wo=Object.freeze([]),Bs=()=>{},ru=()=>!1,$f=/^on[^a-z]/,Ot=s=>$f.test(s),gr=s=>s.startsWith("onUpdate:"),We=Object.assign,La=(s,n)=>{const o=s.indexOf(n);o>-1&&s.splice(o,1)},If=Object.prototype.hasOwnProperty,De=(s,n)=>If.call(s,n),ie=Array.isArray,eo=s=>Lt(s)==="[object Map]",lu=s=>Lt(s)==="[object Set]",Tf=s=>Lt(s)==="[object RegExp]",de=s=>typeof s=="function",je=s=>typeof s=="string",Na=s=>typeof s=="symbol",Le=s=>s!==null&&typeof s=="object",qa=s=>Le(s)&&de(s.then)&&de(s.catch),au=Object.prototype.toString,Lt=s=>au.call(s),Ua=s=>Lt(s).slice(8,-1),cu=s=>Lt(s)==="[object Object]",Ha=s=>je(s)&&s!=="NaN"&&s[0]!=="-"&&""+parseInt(s,10)===s,cr=Nn(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Mf=Nn("bind,cloak,else-if,else,for,html,if,model,on,once,pre,show,slot,text,memo"),qr=s=>{const n=Object.create(null);return o=>n[o]||(n[o]=s(o))},Pf=/-(\w)/g,Xs=qr(s=>s.replace(Pf,(n,o)=>o?o.toUpperCase():"")),Of=/\B([A-Z])/g,yn=qr(s=>s.replace(Of,"-$1").toLowerCase()),co=qr(s=>s.charAt(0).toUpperCase()+s.slice(1)),Gn=qr(s=>s?`on${co(s)}`:""),gt=(s,n)=>!Object.is(s,n),kn=(s,n)=>{for(let o=0;o<s.length;o++)s[o](n)},Br=(s,n,o)=>{Object.defineProperty(s,n,{configurable:!0,enumerable:!1,value:o})},ql=s=>{const n=parseFloat(s);return isNaN(n)?s:n},Lf=s=>{const n=je(s)?Number(s):NaN;return isNaN(n)?s:n};let Nc;const iu=()=>Nc||(Nc=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Ar(s,...n){console.warn(`[Vue warn] ${s}`,...n)}let ks;class pu{constructor(n=!1){this.detached=n,this._active=!0,this.effects=[],this.cleanups=[],this.parent=ks,!n&&ks&&(this.index=(ks.scopes||(ks.scopes=[])).push(this)-1)}get active(){return this._active}run(n){if(this._active){const o=ks;try{return ks=this,n()}finally{ks=o}}else Ar("cannot run an inactive effect scope.")}on(){ks=this}off(){ks=this.parent}stop(n){if(this._active){let o,t;for(o=0,t=this.effects.length;o<t;o++)this.effects[o].stop();for(o=0,t=this.cleanups.length;o<t;o++)this.cleanups[o]();if(this.scopes)for(o=0,t=this.scopes.length;o<t;o++)this.scopes[o].stop(!0);if(!this.detached&&this.parent&&!n){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.parent=void 0,this._active=!1}}}function Nf(s){return new pu(s)}function qf(s,n=ks){n&&n.active&&n.effects.push(s)}function Va(){return ks}function uu(s){ks?ks.cleanups.push(s):Ar("onScopeDispose() is called when there is no active effect scope to be associated with.")}const ja=s=>{const n=new Set(s);return n.w=0,n.n=0,n},yu=s=>(s.w&Pn)>0,du=s=>(s.n&Pn)>0,Uf=({deps:s})=>{if(s.length)for(let n=0;n<s.length;n++)s[n].w|=Pn},Hf=s=>{const{deps:n}=s;if(n.length){let o=0;for(let t=0;t<n.length;t++){const r=n[t];yu(r)&&!du(r)?r.delete(s):n[o++]=r,r.w&=~Pn,r.n&=~Pn}n.length=o}},vr=new WeakMap;let et=0,Pn=1;const Ul=30;let ds;const so=Symbol("iterate"),Hl=Symbol("Map key iterate");class Ga{constructor(n,o=null,t){this.fn=n,this.scheduler=o,this.active=!0,this.deps=[],this.parent=void 0,qf(this,t)}run(){if(!this.active)return this.fn();let n=ds,o=Rn;for(;n;){if(n===this)return;n=n.parent}try{return this.parent=ds,ds=this,Rn=!0,Pn=1<<++et,et<=Ul?Uf(this):qc(this),this.fn()}finally{et<=Ul&&Hf(this),Pn=1<<--et,ds=this.parent,Rn=o,this.parent=void 0,this.deferStop&&this.stop()}}stop(){ds===this?this.deferStop=!0:this.active&&(qc(this),this.onStop&&this.onStop(),this.active=!1)}}function qc(s){const{deps:n}=s;if(n.length){for(let o=0;o<n.length;o++)n[o].delete(s);n.length=0}}let Rn=!0;const fu=[];function po(){fu.push(Rn),Rn=!1}function uo(){const s=fu.pop();Rn=s===void 0?!0:s}function vs(s,n,o){if(Rn&&ds){let t=vr.get(s);t||vr.set(s,t=new Map);let r=t.get(o);r||t.set(o,r=ja()),mu(r,{effect:ds,target:s,type:n,key:o})}}function mu(s,n){let o=!1;et<=Ul?du(s)||(s.n|=Pn,o=!yu(s)):o=!s.has(ds),o&&(s.add(ds),ds.deps.push(s),ds.onTrack&&ds.onTrack(Object.assign({effect:ds},n)))}function dn(s,n,o,t,r,l){const c=vr.get(s);if(!c)return;let i=[];if(n==="clear")i=[...c.values()];else if(o==="length"&&ie(s)){const u=Number(t);c.forEach((y,d)=>{(d==="length"||d>=u)&&i.push(y)})}else switch(o!==void 0&&i.push(c.get(o)),n){case"add":ie(s)?Ha(o)&&i.push(c.get("length")):(i.push(c.get(so)),eo(s)&&i.push(c.get(Hl)));break;case"delete":ie(s)||(i.push(c.get(so)),eo(s)&&i.push(c.get(Hl)));break;case"set":eo(s)&&i.push(c.get(so));break}const p={target:s,type:n,key:o,newValue:t,oldValue:r,oldTarget:l};if(i.length===1)i[0]&&Vl(i[0],p);else{const u=[];for(const y of i)y&&u.push(...y);Vl(ja(u),p)}}function Vl(s,n){const o=ie(s)?s:[...s];for(const t of o)t.computed&&Uc(t,n);for(const t of o)t.computed||Uc(t,n)}function Uc(s,n){(s!==ds||s.allowRecurse)&&(s.onTrigger&&s.onTrigger(We({effect:s},n)),s.scheduler?s.scheduler():s.run())}function Vf(s,n){var o;return(o=vr.get(s))===null||o===void 0?void 0:o.get(n)}const jf=Nn("__proto__,__v_isRef,__isVue"),hu=new Set(Object.getOwnPropertyNames(Symbol).filter(s=>s!=="arguments"&&s!=="caller").map(s=>Symbol[s]).filter(Na)),Gf=Ur(),Wf=Ur(!1,!0),zf=Ur(!0),Kf=Ur(!0,!0),Hc=Yf();function Yf(){const s={};return["includes","indexOf","lastIndexOf"].forEach(n=>{s[n]=function(...o){const t=fe(this);for(let l=0,c=this.length;l<c;l++)vs(t,"get",l+"");const r=t[n](...o);return r===-1||r===!1?t[n](...o.map(fe)):r}}),["push","pop","shift","unshift","splice"].forEach(n=>{s[n]=function(...o){po();const t=fe(this)[n].apply(this,o);return uo(),t}}),s}function Zf(s){const n=fe(this);return vs(n,"has",s),n.hasOwnProperty(s)}function Ur(s=!1,n=!1){return function(t,r,l){if(r==="__v_isReactive")return!s;if(r==="__v_isReadonly")return s;if(r==="__v_isShallow")return n;if(r==="__v_raw"&&l===(s?n?bu:Eu:n?Cu:vu).get(t))return t;const c=ie(t);if(!s){if(c&&De(Hc,r))return Reflect.get(Hc,r,l);if(r==="hasOwnProperty")return Zf}const i=Reflect.get(t,r,l);return(Na(r)?hu.has(r):jf(r))||(s||vs(t,"get",r),n)?i:Ie(i)?c&&Ha(r)?i:i.value:Le(i)?s?Zs(i):Ge(i):i}}const Qf=_u(),Jf=_u(!0);function _u(s=!1){return function(o,t,r,l){let c=o[t];if(On(c)&&Ie(c)&&!Ie(r))return!1;if(!s&&(!Cr(r)&&!On(r)&&(c=fe(c),r=fe(r)),!ie(o)&&Ie(c)&&!Ie(r)))return c.value=r,!0;const i=ie(o)&&Ha(t)?Number(t)<o.length:De(o,t),p=Reflect.set(o,t,r,l);return o===fe(l)&&(i?gt(r,c)&&dn(o,"set",t,r,c):dn(o,"add",t,r)),p}}function Xf(s,n){const o=De(s,n),t=s[n],r=Reflect.deleteProperty(s,n);return r&&o&&dn(s,"delete",n,void 0,t),r}function em(s,n){const o=Reflect.has(s,n);return(!Na(n)||!hu.has(n))&&vs(s,"has",n),o}function sm(s){return vs(s,"iterate",ie(s)?"length":so),Reflect.ownKeys(s)}const gu={get:Gf,set:Qf,deleteProperty:Xf,has:em,ownKeys:sm},Bu={get:zf,set(s,n){return Ar(`Set operation on key "${String(n)}" failed: target is readonly.`,s),!0},deleteProperty(s,n){return Ar(`Delete operation on key "${String(n)}" failed: target is readonly.`,s),!0}},nm=We({},gu,{get:Wf,set:Jf}),om=We({},Bu,{get:Kf}),Wa=s=>s,Hr=s=>Reflect.getPrototypeOf(s);function Yt(s,n,o=!1,t=!1){s=s.__v_raw;const r=fe(s),l=fe(n);o||(n!==l&&vs(r,"get",n),vs(r,"get",l));const{has:c}=Hr(r),i=t?Wa:o?za:Bt;if(c.call(r,n))return i(s.get(n));if(c.call(r,l))return i(s.get(l));s!==r&&s.get(n)}function Zt(s,n=!1){const o=this.__v_raw,t=fe(o),r=fe(s);return n||(s!==r&&vs(t,"has",s),vs(t,"has",r)),s===r?o.has(s):o.has(s)||o.has(r)}function Qt(s,n=!1){return s=s.__v_raw,!n&&vs(fe(s),"iterate",so),Reflect.get(s,"size",s)}function Vc(s){s=fe(s);const n=fe(this);return Hr(n).has.call(n,s)||(n.add(s),dn(n,"add",s,s)),this}function jc(s,n){n=fe(n);const o=fe(this),{has:t,get:r}=Hr(o);let l=t.call(o,s);l?Au(o,t,s):(s=fe(s),l=t.call(o,s));const c=r.call(o,s);return o.set(s,n),l?gt(n,c)&&dn(o,"set",s,n,c):dn(o,"add",s,n),this}function Gc(s){const n=fe(this),{has:o,get:t}=Hr(n);let r=o.call(n,s);r?Au(n,o,s):(s=fe(s),r=o.call(n,s));const l=t?t.call(n,s):void 0,c=n.delete(s);return r&&dn(n,"delete",s,void 0,l),c}function Wc(){const s=fe(this),n=s.size!==0,o=eo(s)?new Map(s):new Set(s),t=s.clear();return n&&dn(s,"clear",void 0,void 0,o),t}function Jt(s,n){return function(t,r){const l=this,c=l.__v_raw,i=fe(c),p=n?Wa:s?za:Bt;return!s&&vs(i,"iterate",so),c.forEach((u,y)=>t.call(r,p(u),p(y),l))}}function Xt(s,n,o){return function(...t){const r=this.__v_raw,l=fe(r),c=eo(l),i=s==="entries"||s===Symbol.iterator&&c,p=s==="keys"&&c,u=r[s](...t),y=o?Wa:n?za:Bt;return!n&&vs(l,"iterate",p?Hl:so),{next(){const{value:d,done:f}=u.next();return f?{value:d,done:f}:{value:i?[y(d[0]),y(d[1])]:y(d),done:f}},[Symbol.iterator](){return this}}}}function gn(s){return function(...n){{const o=n[0]?`on key "${n[0]}" `:"";console.warn(`${co(s)} operation ${o}failed: target is readonly.`,fe(this))}return s==="delete"?!1:this}}function tm(){const s={get(l){return Yt(this,l)},get size(){return Qt(this)},has:Zt,add:Vc,set:jc,delete:Gc,clear:Wc,forEach:Jt(!1,!1)},n={get(l){return Yt(this,l,!1,!0)},get size(){return Qt(this)},has:Zt,add:Vc,set:jc,delete:Gc,clear:Wc,forEach:Jt(!1,!0)},o={get(l){return Yt(this,l,!0)},get size(){return Qt(this,!0)},has(l){return Zt.call(this,l,!0)},add:gn("add"),set:gn("set"),delete:gn("delete"),clear:gn("clear"),forEach:Jt(!0,!1)},t={get(l){return Yt(this,l,!0,!0)},get size(){return Qt(this,!0)},has(l){return Zt.call(this,l,!0)},add:gn("add"),set:gn("set"),delete:gn("delete"),clear:gn("clear"),forEach:Jt(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(l=>{s[l]=Xt(l,!1,!1),o[l]=Xt(l,!0,!1),n[l]=Xt(l,!1,!0),t[l]=Xt(l,!0,!0)}),[s,o,n,t]}const[rm,lm,am,cm]=tm();function Vr(s,n){const o=n?s?cm:am:s?lm:rm;return(t,r,l)=>r==="__v_isReactive"?!s:r==="__v_isReadonly"?s:r==="__v_raw"?t:Reflect.get(De(o,r)&&r in t?o:t,r,l)}const im={get:Vr(!1,!1)},pm={get:Vr(!1,!0)},um={get:Vr(!0,!1)},ym={get:Vr(!0,!0)};function Au(s,n,o){const t=fe(o);if(t!==o&&n.call(s,t)){const r=Ua(s);console.warn(`Reactive ${r} contains both the raw and reactive versions of the same object${r==="Map"?" as keys":""}, which can lead to inconsistencies. Avoid differentiating between the raw and reactive versions of an object and only use the reactive version if possible.`)}}const vu=new WeakMap,Cu=new WeakMap,Eu=new WeakMap,bu=new WeakMap;function dm(s){switch(s){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function fm(s){return s.__v_skip||!Object.isExtensible(s)?0:dm(Ua(s))}function Ge(s){return On(s)?s:jr(s,!1,gu,im,vu)}function mm(s){return jr(s,!1,nm,pm,Cu)}function Zs(s){return jr(s,!0,Bu,um,Eu)}function ko(s){return jr(s,!0,om,ym,bu)}function jr(s,n,o,t,r){if(!Le(s))return console.warn(`value cannot be made reactive: ${String(s)}`),s;if(s.__v_raw&&!(n&&s.__v_isReactive))return s;const l=r.get(s);if(l)return l;const c=fm(s);if(c===0)return s;const i=new Proxy(s,c===2?t:o);return r.set(s,i),i}function no(s){return On(s)?no(s.__v_raw):!!(s&&s.__v_isReactive)}function On(s){return!!(s&&s.__v_isReadonly)}function Cr(s){return!!(s&&s.__v_isShallow)}function Er(s){return no(s)||On(s)}function fe(s){const n=s&&s.__v_raw;return n?fe(n):s}function Gr(s){return Br(s,"__v_skip",!0),s}const Bt=s=>Le(s)?Ge(s):s,za=s=>Le(s)?Zs(s):s;function Ka(s){Rn&&ds&&(s=fe(s),mu(s.dep||(s.dep=ja()),{target:s,type:"get",key:"value"}))}function Ya(s,n){s=fe(s);const o=s.dep;o&&Vl(o,{target:s,type:"set",key:"value",newValue:n})}function Ie(s){return!!(s&&s.__v_isRef===!0)}function Z(s){return ku(s,!1)}function en(s){return ku(s,!0)}function ku(s,n){return Ie(s)?s:new hm(s,n)}class hm{constructor(n,o){this.__v_isShallow=o,this.dep=void 0,this.__v_isRef=!0,this._rawValue=o?n:fe(n),this._value=o?n:Bt(n)}get value(){return Ka(this),this._value}set value(n){const o=this.__v_isShallow||Cr(n)||On(n);n=o?n:fe(n),gt(n,this._rawValue)&&(this._rawValue=n,this._value=o?n:Bt(n),Ya(this,n))}}function D(s){return Ie(s)?s.value:s}const _m={get:(s,n,o)=>D(Reflect.get(s,n,o)),set:(s,n,o,t)=>{const r=s[n];return Ie(r)&&!Ie(o)?(r.value=o,!0):Reflect.set(s,n,o,t)}};function Du(s){return no(s)?s:new Proxy(s,_m)}class gm{constructor(n){this.dep=void 0,this.__v_isRef=!0;const{get:o,set:t}=n(()=>Ka(this),()=>Ya(this));this._get=o,this._set=t}get value(){return this._get()}set value(n){this._set(n)}}function wu(s){return new gm(s)}function Bm(s){Er(s)||console.warn("toRefs() expects a reactive object but received a plain one.");const n=ie(s)?new Array(s.length):{};for(const o in s)n[o]=vm(s,o);return n}class Am{constructor(n,o,t){this._object=n,this._key=o,this._defaultValue=t,this.__v_isRef=!0}get value(){const n=this._object[this._key];return n===void 0?this._defaultValue:n}set value(n){this._object[this._key]=n}get dep(){return Vf(fe(this._object),this._key)}}function vm(s,n,o){const t=s[n];return Ie(t)?t:new Am(s,n,o)}var Su;class Cm{constructor(n,o,t,r){this._setter=o,this.dep=void 0,this.__v_isRef=!0,this[Su]=!1,this._dirty=!0,this.effect=new Ga(n,()=>{this._dirty||(this._dirty=!0,Ya(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!r,this.__v_isReadonly=t}get value(){const n=fe(this);return Ka(n),(n._dirty||!n._cacheable)&&(n._dirty=!1,n._value=n.effect.run()),n._value}set value(n){this._setter(n)}}Su="__v_isReadonly";function Em(s,n,o=!1){let t,r;const l=de(s);l?(t=s,r=()=>{console.warn("Write operation failed: computed value is readonly")}):(t=s.get,r=s.set);const c=new Cm(t,r,l||!r,o);return n&&!o&&(c.effect.onTrack=n.onTrack,c.effect.onTrigger=n.onTrigger),c}const oo=[];function ir(s){oo.push(s)}function pr(){oo.pop()}function L(s,...n){po();const o=oo.length?oo[oo.length-1].component:null,t=o&&o.appContext.config.warnHandler,r=bm();if(t)un(t,o,11,[s+n.join(""),o&&o.proxy,r.map(({vnode:l})=>`at <${nl(o,l.type)}>`).join(`
`),r]);else{const l=[`[Vue warn]: ${s}`,...n];r.length&&l.push(`
`,...km(r)),console.warn(...l)}uo()}function bm(){let s=oo[oo.length-1];if(!s)return[];const n=[];for(;s;){const o=n[0];o&&o.vnode===s?o.recurseCount++:n.push({vnode:s,recurseCount:0});const t=s.component&&s.component.parent;s=t&&t.vnode}return n}function km(s){const n=[];return s.forEach((o,t)=>{n.push(...t===0?[]:[`
`],...Dm(o))}),n}function Dm({vnode:s,recurseCount:n}){const o=n>0?`... (${n} recursive calls)`:"",t=s.component?s.component.parent==null:!1,r=` at <${nl(s.component,s.type,t)}`,l=">"+o;return s.props?[r,...wm(s.props),l]:[r+l]}function wm(s){const n=[],o=Object.keys(s);return o.slice(0,3).forEach(t=>{n.push(...Ru(t,s[t]))}),o.length>3&&n.push(" ..."),n}function Ru(s,n,o){return je(n)?(n=JSON.stringify(n),o?n:[`${s}=${n}`]):typeof n=="number"||typeof n=="boolean"||n==null?o?n:[`${s}=${n}`]:Ie(n)?(n=Ru(s,fe(n.value),!0),o?n:[`${s}=Ref<`,n,">"]):de(n)?[`${s}=fn${n.name?`<${n.name}>`:""}`]:(n=fe(n),o?n:[`${s}=`,n])}function Sm(s,n){s!==void 0&&(typeof s!="number"?L(`${n} is not a valid number - got ${JSON.stringify(s)}.`):isNaN(s)&&L(`${n} is NaN - the duration expression might be incorrect.`))}const Za={sp:"serverPrefetch hook",bc:"beforeCreate hook",c:"created hook",bm:"beforeMount hook",m:"mounted hook",bu:"beforeUpdate hook",u:"updated",bum:"beforeUnmount hook",um:"unmounted hook",a:"activated hook",da:"deactivated hook",ec:"errorCaptured hook",rtc:"renderTracked hook",rtg:"renderTriggered hook",[0]:"setup function",[1]:"render function",[2]:"watcher getter",[3]:"watcher callback",[4]:"watcher cleanup function",[5]:"native event handler",[6]:"component event handler",[7]:"vnode hook",[8]:"directive hook",[9]:"transition hook",[10]:"app errorHandler",[11]:"app warnHandler",[12]:"ref function",[13]:"async component loader",[14]:"scheduler flush. This is likely a Vue internals bug. Please open an issue at https://new-issue.vuejs.org/?repo=vuejs/core"};function un(s,n,o,t){let r;try{r=t?s(...t):s()}catch(l){Wr(l,n,o)}return r}function Ms(s,n,o,t){if(de(s)){const l=un(s,n,o,t);return l&&qa(l)&&l.catch(c=>{Wr(c,n,o)}),l}const r=[];for(let l=0;l<s.length;l++)r.push(Ms(s[l],n,o,t));return r}function Wr(s,n,o,t=!0){const r=n?n.vnode:null;if(n){let l=n.parent;const c=n.proxy,i=Za[o];for(;l;){const u=l.ec;if(u){for(let y=0;y<u.length;y++)if(u[y](s,c,i)===!1)return}l=l.parent}const p=n.appContext.config.errorHandler;if(p){un(p,null,10,[s,c,i]);return}}Rm(s,o,r,t)}function Rm(s,n,o,t=!0){{const r=Za[n];if(o&&ir(o),L(`Unhandled error${r?` during execution of ${r}`:""}`),o&&pr(),t)throw s;console.error(s)}}let At=!1,jl=!1;const as=[];let Ks=0;const So=[];let zs=null,Cn=0;const xu=Promise.resolve();let Qa=null;const xm=100;function os(s){const n=Qa||xu;return s?n.then(this?s.bind(this):s):n}function Fm(s){let n=Ks+1,o=as.length;for(;n<o;){const t=n+o>>>1;vt(as[t])<s?n=t+1:o=t}return n}function zr(s){(!as.length||!as.includes(s,At&&s.allowRecurse?Ks+1:Ks))&&(s.id==null?as.push(s):as.splice(Fm(s.id),0,s),Fu())}function Fu(){!At&&!jl&&(jl=!0,Qa=xu.then(Tu))}function $m(s){const n=as.indexOf(s);n>Ks&&as.splice(n,1)}function $u(s){ie(s)?So.push(...s):(!zs||!zs.includes(s,s.allowRecurse?Cn+1:Cn))&&So.push(s),Fu()}function zc(s,n=At?Ks+1:0){for(s=s||new Map;n<as.length;n++){const o=as[n];if(o&&o.pre){if(Ja(s,o))continue;as.splice(n,1),n--,o()}}}function Iu(s){if(So.length){const n=[...new Set(So)];if(So.length=0,zs){zs.push(...n);return}for(zs=n,s=s||new Map,zs.sort((o,t)=>vt(o)-vt(t)),Cn=0;Cn<zs.length;Cn++)Ja(s,zs[Cn])||zs[Cn]();zs=null,Cn=0}}const vt=s=>s.id==null?1/0:s.id,Im=(s,n)=>{const o=vt(s)-vt(n);if(o===0){if(s.pre&&!n.pre)return-1;if(n.pre&&!s.pre)return 1}return o};function Tu(s){jl=!1,At=!0,s=s||new Map,as.sort(Im);const n=o=>Ja(s,o);try{for(Ks=0;Ks<as.length;Ks++){const o=as[Ks];if(o&&o.active!==!1){if(n(o))continue;un(o,null,14)}}}finally{Ks=0,as.length=0,Iu(s),At=!1,Qa=null,(as.length||So.length)&&Tu(s)}}function Ja(s,n){if(!s.has(n))s.set(n,1);else{const o=s.get(n);if(o>xm){const t=n.ownerInstance,r=t&&kt(t.type);return L(`Maximum recursive updates exceeded${r?` in component <${r}>`:""}. This means you have a reactive effect that is mutating its own dependencies and thus recursively triggering itself. Possible sources include component template, render function, updated hook or watcher source function.`),!0}else s.set(n,o+1)}}let xn=!1;const Co=new Set;iu().__VUE_HMR_RUNTIME__={createRecord:cl(Mu),rerender:cl(Pm),reload:cl(Om)};const io=new Map;function Tm(s){const n=s.type.__hmrId;let o=io.get(n);o||(Mu(n,s.type),o=io.get(n)),o.instances.add(s)}function Mm(s){io.get(s.type.__hmrId).instances.delete(s)}function Mu(s,n){return io.has(s)?!1:(io.set(s,{initialDef:rt(n),instances:new Set}),!0)}function rt(s){return fy(s)?s.__vccOpts:s}function Pm(s,n){const o=io.get(s);o&&(o.initialDef.render=n,[...o.instances].forEach(t=>{n&&(t.render=n,rt(t.type).render=n),t.renderCache=[],xn=!0,t.update(),xn=!1}))}function Om(s,n){const o=io.get(s);if(!o)return;n=rt(n),Kc(o.initialDef,n);const t=[...o.instances];for(const r of t){const l=rt(r.type);Co.has(l)||(l!==o.initialDef&&Kc(l,n),Co.add(l)),r.appContext.optionsCache.delete(r.type),r.ceReload?(Co.add(l),r.ceReload(n.styles),Co.delete(l)):r.parent?zr(r.parent.update):r.appContext.reload?r.appContext.reload():typeof window<"u"?window.location.reload():console.warn("[HMR] Root or manually mounted instance modified. Full reload required.")}$u(()=>{for(const r of t)Co.delete(rt(r.type))})}function Kc(s,n){We(s,n);for(const o in s)o!=="__file"&&!(o in n)&&delete s[o]}function cl(s){return(n,o)=>{try{return s(n,o)}catch(t){console.error(t),console.warn("[HMR] Something went wrong during Vue component hot-reload. Full reload required.")}}}let Ys,st=[],Gl=!1;function Nt(s,...n){Ys?Ys.emit(s,...n):Gl||st.push({event:s,args:n})}function Pu(s,n){var o,t;Ys=s,Ys?(Ys.enabled=!0,st.forEach(({event:r,args:l})=>Ys.emit(r,...l)),st=[]):typeof window<"u"&&window.HTMLElement&&!(!((t=(o=window.navigator)===null||o===void 0?void 0:o.userAgent)===null||t===void 0)&&t.includes("jsdom"))?((n.__VUE_DEVTOOLS_HOOK_REPLAY__=n.__VUE_DEVTOOLS_HOOK_REPLAY__||[]).push(l=>{Pu(l,n)}),setTimeout(()=>{Ys||(n.__VUE_DEVTOOLS_HOOK_REPLAY__=null,Gl=!0,st=[])},3e3)):(Gl=!0,st=[])}function Lm(s,n){Nt("app:init",s,n,{Fragment:Me,Text:Vt,Comment:es,Static:ur})}function Nm(s){Nt("app:unmount",s)}const Wl=Xa("component:added"),Ou=Xa("component:updated"),qm=Xa("component:removed"),Um=s=>{Ys&&typeof Ys.cleanupBuffer=="function"&&!Ys.cleanupBuffer(s)&&qm(s)};function Xa(s){return n=>{Nt(s,n.appContext.app,n.uid,n.parent?n.parent.uid:void 0,n)}}const Hm=Lu("perf:start"),Vm=Lu("perf:end");function Lu(s){return(n,o,t)=>{Nt(s,n.appContext.app,n.uid,n,o,t)}}function jm(s,n,o){Nt("component:emit",s.appContext.app,s,n,o)}function Gm(s,n,...o){if(s.isUnmounted)return;const t=s.vnode.props||Ue;{const{emitsOptions:y,propsOptions:[d]}=s;if(y)if(!(n in y))(!d||!(Gn(n)in d))&&L(`Component emitted event "${n}" but it is neither declared in the emits option nor as an "${Gn(n)}" prop.`);else{const f=y[n];de(f)&&(f(...o)||L(`Invalid event arguments: event validation failed for event "${n}".`))}}let r=o;const l=n.startsWith("update:"),c=l&&n.slice(7);if(c&&c in t){const y=`${c==="modelValue"?"model":c}Modifiers`,{number:d,trim:f}=t[y]||Ue;f&&(r=o.map(h=>je(h)?h.trim():h)),d&&(r=o.map(ql))}jm(s,n,r);{const y=n.toLowerCase();y!==n&&t[Gn(y)]&&L(`Event "${y}" is emitted in component ${nl(s,s.type)} but the handler is registered for "${n}". Note that HTML attributes are case-insensitive and you cannot use v-on to listen to camelCase events when using in-DOM templates. You should probably use "${yn(n)}" instead of "${n}".`)}let i,p=t[i=Gn(n)]||t[i=Gn(Xs(n))];!p&&l&&(p=t[i=Gn(yn(n))]),p&&Ms(p,s,6,r);const u=t[i+"Once"];if(u){if(!s.emitted)s.emitted={};else if(s.emitted[i])return;s.emitted[i]=!0,Ms(u,s,6,r)}}function Nu(s,n,o=!1){const t=n.emitsCache,r=t.get(s);if(r!==void 0)return r;const l=s.emits;let c={},i=!1;if(!de(s)){const p=u=>{const y=Nu(u,n,!0);y&&(i=!0,We(c,y))};!o&&n.mixins.length&&n.mixins.forEach(p),s.extends&&p(s.extends),s.mixins&&s.mixins.forEach(p)}return!l&&!i?(Le(s)&&t.set(s,null),null):(ie(l)?l.forEach(p=>c[p]=null):We(c,l),Le(s)&&t.set(s,c),c)}function Kr(s,n){return!s||!Ot(n)?!1:(n=n.slice(2).replace(/Once$/,""),De(s,n[0].toLowerCase()+n.slice(1))||De(s,yn(n))||De(s,n))}let Xe=null,Yr=null;function br(s){const n=Xe;return Xe=s,Yr=s&&s.type.__scopeId||null,n}function $S(s){Yr=s}function IS(){Yr=null}function b(s,n=Xe,o){if(!n||s._n)return s;const t=(...r)=>{t._d&&ci(-1);const l=br(n);let c;try{c=s(...r)}finally{br(l),t._d&&ci(1)}return Ou(n),c};return t._n=!0,t._c=!0,t._d=!0,t}let zl=!1;function kr(){zl=!0}function il(s){const{type:n,vnode:o,proxy:t,withProxy:r,props:l,propsOptions:[c],slots:i,attrs:p,emit:u,render:y,renderCache:d,data:f,setupState:h,ctx:m,inheritAttrs:g}=s;let B,k;const v=br(s);zl=!1;try{if(o.shapeFlag&4){const T=r||t;B=Us(y.call(T,T,d,l,h,f,m)),k=p}else{const T=n;p===l&&kr(),B=Us(T.length>1?T(l,{get attrs(){return kr(),p},slots:i,emit:u}):T(l,null)),k=n.props?p:zm(p)}}catch(T){at.length=0,Wr(T,s,1),B=R(es)}let E=B,w;if(B.patchFlag>0&&B.patchFlag&2048&&([E,w]=Wm(B)),k&&g!==!1){const T=Object.keys(k),{shapeFlag:U}=E;if(T.length){if(U&7)c&&T.some(gr)&&(k=Km(k,c)),E=Vs(E,k);else if(!zl&&E.type!==es){const z=Object.keys(p),$=[],G=[];for(let oe=0,ue=z.length;oe<ue;oe++){const J=z[oe];Ot(J)?gr(J)||$.push(J[2].toLowerCase()+J.slice(3)):G.push(J)}G.length&&L(`Extraneous non-props attributes (${G.join(", ")}) were passed to component but could not be automatically inherited because component renders fragment or text root nodes.`),$.length&&L(`Extraneous non-emits event listeners (${$.join(", ")}) were passed to component but could not be automatically inherited because component renders fragment or text root nodes. If the listener is intended to be a component custom event listener only, declare it using the "emits" option.`)}}}return o.dirs&&(Yc(E)||L("Runtime directive used on component with non-element root node. The directives will not function as intended."),E=Vs(E),E.dirs=E.dirs?E.dirs.concat(o.dirs):o.dirs),o.transition&&(Yc(E)||L("Component inside <Transition> renders non-element root node that cannot be animated."),E.transition=o.transition),w?w(E):B=E,br(v),B}const Wm=s=>{const n=s.children,o=s.dynamicChildren,t=qu(n);if(!t)return[s,void 0];const r=n.indexOf(t),l=o?o.indexOf(t):-1,c=i=>{n[r]=i,o&&(l>-1?o[l]=i:i.patchFlag>0&&(s.dynamicChildren=[...o,i]))};return[Us(t),c]};function qu(s){let n;for(let o=0;o<s.length;o++){const t=s[o];if(mn(t)){if(t.type!==es||t.children==="v-if"){if(n)return;n=t}}else return}return n}const zm=s=>{let n;for(const o in s)(o==="class"||o==="style"||Ot(o))&&((n||(n={}))[o]=s[o]);return n},Km=(s,n)=>{const o={};for(const t in s)(!gr(t)||!(t.slice(9)in n))&&(o[t]=s[t]);return o},Yc=s=>s.shapeFlag&7||s.type===es;function Ym(s,n,o){const{props:t,children:r,component:l}=s,{props:c,children:i,patchFlag:p}=n,u=l.emitsOptions;if((r||i)&&xn||n.dirs||n.transition)return!0;if(o&&p>=0){if(p&1024)return!0;if(p&16)return t?Zc(t,c,u):!!c;if(p&8){const y=n.dynamicProps;for(let d=0;d<y.length;d++){const f=y[d];if(c[f]!==t[f]&&!Kr(u,f))return!0}}}else return(r||i)&&(!i||!i.$stable)?!0:t===c?!1:t?c?Zc(t,c,u):!0:!!c;return!1}function Zc(s,n,o){const t=Object.keys(n);if(t.length!==Object.keys(s).length)return!0;for(let r=0;r<t.length;r++){const l=t[r];if(n[l]!==s[l]&&!Kr(o,l))return!0}return!1}function Zm({vnode:s,parent:n},o){for(;n&&n.subTree===s;)(s=n.vnode).el=o,n=n.parent}const Uu=s=>s.__isSuspense;function Qm(s,n){n&&n.pendingBranch?ie(s)?n.effects.push(...s):n.effects.push(s):$u(s)}function Ds(s,n){if(!ze)L("provide() can only be used inside setup().");else{let o=ze.provides;const t=ze.parent&&ze.parent.provides;t===o&&(o=ze.provides=Object.create(t)),o[s]=n}}function I(s,n,o=!1){const t=ze||Xe;if(t){const r=t.parent==null?t.vnode.appContext&&t.vnode.appContext.provides:t.parent.provides;if(r&&s in r)return r[s];if(arguments.length>1)return o&&de(n)?n.call(t.proxy):n;L(`injection "${String(s)}" not found.`)}else L("inject() can only be used inside setup() or functional components.")}function yo(s,n){return ec(s,null,n)}const er={};function Be(s,n,o){return de(n)||L("`watch(fn, options?)` signature has been moved to a separate API. Use `watchEffect(fn, options?)` instead. `watch` now only supports `watch(source, cb, options?) signature."),ec(s,n,o)}function ec(s,n,{immediate:o,deep:t,flush:r,onTrack:l,onTrigger:c}=Ue){n||(o!==void 0&&L('watch() "immediate" option is only respected when using the watch(source, callback, options?) signature.'),t!==void 0&&L('watch() "deep" option is only respected when using the watch(source, callback, options?) signature.'));const i=w=>{L("Invalid watch source: ",w,"A watch source can only be a getter/effect function, a ref, a reactive object, or an array of these types.")},p=Va()===(ze==null?void 0:ze.scope)?ze:null;let u,y=!1,d=!1;if(Ie(s)?(u=()=>s.value,y=Cr(s)):no(s)?(u=()=>s,t=!0):ie(s)?(d=!0,y=s.some(w=>no(w)||Cr(w)),u=()=>s.map(w=>{if(Ie(w))return w.value;if(no(w))return Qn(w);if(de(w))return un(w,p,2);i(w)})):de(s)?n?u=()=>un(s,p,2):u=()=>{if(!(p&&p.isUnmounted))return f&&f(),Ms(s,p,3,[h])}:(u=Bs,i(s)),n&&t){const w=u;u=()=>Qn(w())}let f,h=w=>{f=v.onStop=()=>{un(w,p,4)}},m;if(bt)if(h=Bs,n?o&&Ms(n,p,3,[u(),d?[]:void 0,h]):u(),r==="sync"){const w=oh();m=w.__watcherHandles||(w.__watcherHandles=[])}else return Bs;let g=d?new Array(s.length).fill(er):er;const B=()=>{if(v.active)if(n){const w=v.run();(t||y||(d?w.some((T,U)=>gt(T,g[U])):gt(w,g)))&&(f&&f(),Ms(n,p,3,[w,g===er?void 0:d&&g[0]===er?[]:g,h]),g=w)}else v.run()};B.allowRecurse=!!n;let k;r==="sync"?k=B:r==="post"?k=()=>ns(B,p&&p.suspense):(B.pre=!0,p&&(B.id=p.uid),k=()=>zr(B));const v=new Ga(u,k);v.onTrack=l,v.onTrigger=c,n?o?B():g=v.run():r==="post"?ns(v.run.bind(v),p&&p.suspense):v.run();const E=()=>{v.stop(),p&&p.scope&&La(p.scope.effects,v)};return m&&m.push(E),E}function Jm(s,n,o){const t=this.proxy,r=je(s)?s.includes(".")?Hu(t,s):()=>t[s]:s.bind(t,t);let l;de(n)?l=n:(l=n.handler,o=n);const c=ze;Mo(this);const i=ec(r,l.bind(t),o);return c?Mo(c):ro(),i}function Hu(s,n){const o=n.split(".");return()=>{let t=s;for(let r=0;r<o.length&&t;r++)t=t[o[r]];return t}}function Qn(s,n){if(!Le(s)||s.__v_skip||(n=n||new Set,n.has(s)))return s;if(n.add(s),Ie(s))Qn(s.value,n);else if(ie(s))for(let o=0;o<s.length;o++)Qn(s[o],n);else if(lu(s)||eo(s))s.forEach(o=>{Qn(o,n)});else if(cu(s))for(const o in s)Qn(s[o],n);return s}function Vu(){const s={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return fo(()=>{s.isMounted=!0}),Ut(()=>{s.isUnmounting=!0}),s}const Fs=[Function,Array],Xm={name:"BaseTransition",props:{mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:Fs,onEnter:Fs,onAfterEnter:Fs,onEnterCancelled:Fs,onBeforeLeave:Fs,onLeave:Fs,onAfterLeave:Fs,onLeaveCancelled:Fs,onBeforeAppear:Fs,onAppear:Fs,onAfterAppear:Fs,onAppearCancelled:Fs},setup(s,{slots:n}){const o=xs(),t=Vu();let r;return()=>{const l=n.default&&sc(n.default(),!0);if(!l||!l.length)return;let c=l[0];if(l.length>1){let g=!1;for(const B of l)if(B.type!==es){if(g){L("<transition> can only be used on a single element or component. Use <transition-group> for lists.");break}c=B,g=!0}}const i=fe(s),{mode:p}=i;if(p&&p!=="in-out"&&p!=="out-in"&&p!=="default"&&L(`invalid <transition> mode: ${p}`),t.isLeaving)return pl(c);const u=Qc(c);if(!u)return pl(c);const y=Ct(u,i,t,o);To(u,y);const d=o.subTree,f=d&&Qc(d);let h=!1;const{getTransitionKey:m}=u.type;if(m){const g=m();r===void 0?r=g:g!==r&&(r=g,h=!0)}if(f&&f.type!==es&&(!wn(u,f)||h)){const g=Ct(f,i,t,o);if(To(f,g),p==="out-in")return t.isLeaving=!0,g.afterLeave=()=>{t.isLeaving=!1,o.update.active!==!1&&o.update()},pl(c);p==="in-out"&&u.type!==es&&(g.delayLeave=(B,k,v)=>{const E=ju(t,f);E[String(f.key)]=f,B._leaveCb=()=>{k(),B._leaveCb=void 0,delete y.delayedLeave},y.delayedLeave=v})}return c}}},e8=Xm;function ju(s,n){const{leavingVNodes:o}=s;let t=o.get(n.type);return t||(t=Object.create(null),o.set(n.type,t)),t}function Ct(s,n,o,t){const{appear:r,mode:l,persisted:c=!1,onBeforeEnter:i,onEnter:p,onAfterEnter:u,onEnterCancelled:y,onBeforeLeave:d,onLeave:f,onAfterLeave:h,onLeaveCancelled:m,onBeforeAppear:g,onAppear:B,onAfterAppear:k,onAppearCancelled:v}=n,E=String(s.key),w=ju(o,s),T=($,G)=>{$&&Ms($,t,9,G)},U=($,G)=>{const oe=G[1];T($,G),ie($)?$.every(ue=>ue.length<=1)&&oe():$.length<=1&&oe()},z={mode:l,persisted:c,beforeEnter($){let G=i;if(!o.isMounted)if(r)G=g||i;else return;$._leaveCb&&$._leaveCb(!0);const oe=w[E];oe&&wn(s,oe)&&oe.el._leaveCb&&oe.el._leaveCb(),T(G,[$])},enter($){let G=p,oe=u,ue=y;if(!o.isMounted)if(r)G=B||p,oe=k||u,ue=v||y;else return;let J=!1;const Ce=$._enterCb=Te=>{J||(J=!0,Te?T(ue,[$]):T(oe,[$]),z.delayedLeave&&z.delayedLeave(),$._enterCb=void 0)};G?U(G,[$,Ce]):Ce()},leave($,G){const oe=String(s.key);if($._enterCb&&$._enterCb(!0),o.isUnmounting)return G();T(d,[$]);let ue=!1;const J=$._leaveCb=Ce=>{ue||(ue=!0,G(),Ce?T(m,[$]):T(h,[$]),$._leaveCb=void 0,w[oe]===s&&delete w[oe])};w[oe]=s,f?U(f,[$,J]):J()},clone($){return Ct($,n,o,t)}};return z}function pl(s){if(qt(s))return s=Vs(s),s.children=null,s}function Qc(s){return qt(s)?s.children?s.children[0]:void 0:s}function To(s,n){s.shapeFlag&6&&s.component?To(s.component.subTree,n):s.shapeFlag&128?(s.ssContent.transition=n.clone(s.ssContent),s.ssFallback.transition=n.clone(s.ssFallback)):s.transition=n}function sc(s,n=!1,o){let t=[],r=0;for(let l=0;l<s.length;l++){let c=s[l];const i=o==null?c.key:String(o)+String(c.key!=null?c.key:l);c.type===Me?(c.patchFlag&128&&r++,t=t.concat(sc(c.children,n,i))):(n||c.type!==es)&&t.push(i!=null?Vs(c,{key:i}):c)}if(r>1)for(let l=0;l<t.length;l++)t[l].patchFlag=-2;return t}function Pe(s){return de(s)?{setup:s,name:s.name}:s}const Ro=s=>!!s.type.__asyncLoader,qt=s=>s.type.__isKeepAlive,s8={name:"KeepAlive",__isKeepAlive:!0,props:{include:[String,RegExp,Array],exclude:[String,RegExp,Array],max:[String,Number]},setup(s,{slots:n}){const o=xs(),t=o.ctx;if(!t.renderer)return()=>{const v=n.default&&n.default();return v&&v.length===1?v[0]:v};const r=new Map,l=new Set;let c=null;o.__v_cache=r;const i=o.suspense,{renderer:{p,m:u,um:y,o:{createElement:d}}}=t,f=d("div");t.activate=(v,E,w,T,U)=>{const z=v.component;u(v,E,w,0,i),p(z.vnode,v,E,w,z,i,T,v.slotScopeIds,U),ns(()=>{z.isDeactivated=!1,z.a&&kn(z.a);const $=v.props&&v.props.onVnodeMounted;$&&$s($,z.parent,v)},i),Wl(z)},t.deactivate=v=>{const E=v.component;u(v,f,null,1,i),ns(()=>{E.da&&kn(E.da);const w=v.props&&v.props.onVnodeUnmounted;w&&$s(w,E.parent,v),E.isDeactivated=!0},i),Wl(E)};function h(v){ul(v),y(v,o,i,!0)}function m(v){r.forEach((E,w)=>{const T=kt(E.type);T&&(!v||!v(T))&&g(w)})}function g(v){const E=r.get(v);!c||!wn(E,c)?h(E):c&&ul(c),r.delete(v),l.delete(v)}Be(()=>[s.include,s.exclude],([v,E])=>{v&&m(w=>nt(v,w)),E&&m(w=>!nt(E,w))},{flush:"post",deep:!0});let B=null;const k=()=>{B!=null&&r.set(B,yl(o.subTree))};return fo(k),Qr(k),Ut(()=>{r.forEach(v=>{const{subTree:E,suspense:w}=o,T=yl(E);if(v.type===T.type&&v.key===T.key){ul(T);const U=T.component.da;U&&ns(U,w);return}h(v)})}),()=>{if(B=null,!n.default)return null;const v=n.default(),E=v[0];if(v.length>1)return L("KeepAlive should contain exactly one component child."),c=null,v;if(!mn(E)||!(E.shapeFlag&4)&&!(E.shapeFlag&128))return c=null,E;let w=yl(E);const T=w.type,U=kt(Ro(w)?w.type.__asyncResolved||{}:T),{include:z,exclude:$,max:G}=s;if(z&&(!U||!nt(z,U))||$&&U&&nt($,U))return c=w,E;const oe=w.key==null?T:w.key,ue=r.get(oe);return w.el&&(w=Vs(w),E.shapeFlag&128&&(E.ssContent=w)),B=oe,ue?(w.el=ue.el,w.component=ue.component,w.transition&&To(w,w.transition),w.shapeFlag|=512,l.delete(oe),l.add(oe)):(l.add(oe),G&&l.size>parseInt(G,10)&&g(l.values().next().value)),w.shapeFlag|=256,c=w,Uu(E.type)?E:w}}},Gu=s8;function nt(s,n){return ie(s)?s.some(o=>nt(o,n)):je(s)?s.split(",").includes(n):Tf(s)?s.test(n):!1}function Wu(s,n){Ku(s,"a",n)}function zu(s,n){Ku(s,"da",n)}function Ku(s,n,o=ze){const t=s.__wdc||(s.__wdc=()=>{let r=o;for(;r;){if(r.isDeactivated)return;r=r.parent}return s()});if(Zr(n,t,o),o){let r=o.parent;for(;r&&r.parent;)qt(r.parent.vnode)&&n8(t,n,o,r),r=r.parent}}function n8(s,n,o,t){const r=Zr(n,s,t,!0);Jr(()=>{La(t[n],r)},o)}function ul(s){s.shapeFlag&=-257,s.shapeFlag&=-513}function yl(s){return s.shapeFlag&128?s.ssContent:s}function Zr(s,n,o=ze,t=!1){if(o){const r=o[s]||(o[s]=[]),l=n.__weh||(n.__weh=(...c)=>{if(o.isUnmounted)return;po(),Mo(o);const i=Ms(n,o,s,c);return ro(),uo(),i});return t?r.unshift(l):r.push(l),l}else{const r=Gn(Za[s].replace(/ hook$/,""));L(`${r} is called when there is no active component instance to be associated with. Lifecycle injection APIs can only be used during execution of setup(). If you are using async setup(), make sure to register lifecycle hooks before the first await statement.`)}}const hn=s=>(n,o=ze)=>(!bt||s==="sp")&&Zr(s,(...t)=>n(...t),o),o8=hn("bm"),fo=hn("m"),t8=hn("bu"),Qr=hn("u"),Ut=hn("bum"),Jr=hn("um"),r8=hn("sp"),l8=hn("rtg"),a8=hn("rtc");function c8(s,n=ze){Zr("ec",s,n)}function Yu(s){Mf(s)&&L("Do not use built-in directive ids as custom directive id: "+s)}function Xr(s,n){const o=Xe;if(o===null)return L("withDirectives can only be used inside render functions."),s;const t=sl(o)||o.proxy,r=s.dirs||(s.dirs=[]);for(let l=0;l<n.length;l++){let[c,i,p,u=Ue]=n[l];c&&(de(c)&&(c={mounted:c,updated:c}),c.deep&&Qn(i),r.push({dir:c,instance:t,value:i,oldValue:void 0,arg:p,modifiers:u}))}return s}function qn(s,n,o,t){const r=s.dirs,l=n&&n.dirs;for(let c=0;c<r.length;c++){const i=r[c];l&&(i.oldValue=l[c].value);let p=i.dir[t];p&&(po(),Ms(p,o,8,[s.el,i,s,n]),uo())}}const Kl="components",i8="directives";function Dr(s,n){return Zu(Kl,s,!0,n)||s}const p8=Symbol();function Jc(s){return Zu(i8,s)}function Zu(s,n,o=!0,t=!1){const r=Xe||ze;if(r){const l=r.type;if(s===Kl){const i=kt(l,!1);if(i&&(i===n||i===Xs(n)||i===co(Xs(n))))return l}const c=Xc(r[s]||l[s],n)||Xc(r.appContext[s],n);if(!c&&t)return l;if(o&&!c){const i=s===Kl?`
If this is a native custom element, make sure to exclude it from component resolution via compilerOptions.isCustomElement.`:"";L(`Failed to resolve ${s.slice(0,-1)}: ${n}${i}`)}return c}else L(`resolve${co(s.slice(0,-1))} can only be used in render() or setup().`)}function Xc(s,n){return s&&(s[n]||s[Xs(n)]||s[co(Xs(n))])}function Ht(s,n,o,t){let r;const l=o&&o[t];if(ie(s)||je(s)){r=new Array(s.length);for(let c=0,i=s.length;c<i;c++)r[c]=n(s[c],c,void 0,l&&l[c])}else if(typeof s=="number"){Number.isInteger(s)||L(`The v-for range expect an integer value but got ${s}.`),r=new Array(s);for(let c=0;c<s;c++)r[c]=n(c+1,c,void 0,l&&l[c])}else if(Le(s))if(s[Symbol.iterator])r=Array.from(s,(c,i)=>n(c,i,void 0,l&&l[i]));else{const c=Object.keys(s);r=new Array(c.length);for(let i=0,p=c.length;i<p;i++){const u=c[i];r[i]=n(s[u],u,i,l&&l[i])}}else r=[];return o&&(o[t]=r),r}function fn(s,n,o={},t,r){if(Xe.isCE||Xe.parent&&Ro(Xe.parent)&&Xe.parent.isCE)return n!=="default"&&(o.name=n),R("slot",o,t&&t());let l=s[n];l&&l.length>1&&(L("SSR-optimized slot function detected in a non-SSR-optimized render function. You need to mark this component with $dynamic-slots in the parent template."),l=()=>[]),l&&l._c&&(l._d=!1),C();const c=l&&Qu(l(o)),i=P(Me,{key:o.key||c&&c.key||`_${n}`},c||(t?t():[]),c&&s._===1?64:-2);return!r&&i.scopeId&&(i.slotScopeIds=[i.scopeId+"-s"]),l&&l._c&&(l._d=!0),i}function Qu(s){return s.some(n=>mn(n)?!(n.type===es||n.type===Me&&!Qu(n.children)):!0)?s:null}const Yl=s=>s?uy(s)?sl(s)||s.proxy:Yl(s.parent):null,to=We(Object.create(null),{$:s=>s,$el:s=>s.vnode.el,$data:s=>s.data,$props:s=>ko(s.props),$attrs:s=>ko(s.attrs),$slots:s=>ko(s.slots),$refs:s=>ko(s.refs),$parent:s=>Yl(s.parent),$root:s=>Yl(s.root),$emit:s=>s.emit,$options:s=>oc(s),$forceUpdate:s=>s.f||(s.f=()=>zr(s.update)),$nextTick:s=>s.n||(s.n=os.bind(s.proxy)),$watch:s=>Jm.bind(s)}),nc=s=>s==="_"||s==="$",dl=(s,n)=>s!==Ue&&!s.__isScriptSetup&&De(s,n),Ju={get({_:s},n){const{ctx:o,setupState:t,data:r,props:l,accessCache:c,type:i,appContext:p}=s;if(n==="__isVue")return!0;let u;if(n[0]!=="$"){const h=c[n];if(h!==void 0)switch(h){case 1:return t[n];case 2:return r[n];case 4:return o[n];case 3:return l[n]}else{if(dl(t,n))return c[n]=1,t[n];if(r!==Ue&&De(r,n))return c[n]=2,r[n];if((u=s.propsOptions[0])&&De(u,n))return c[n]=3,l[n];if(o!==Ue&&De(o,n))return c[n]=4,o[n];Zl&&(c[n]=0)}}const y=to[n];let d,f;if(y)return n==="$attrs"&&(vs(s,"get",n),kr()),y(s);if((d=i.__cssModules)&&(d=d[n]))return d;if(o!==Ue&&De(o,n))return c[n]=4,o[n];if(f=p.config.globalProperties,De(f,n))return f[n];Xe&&(!je(n)||n.indexOf("__v")!==0)&&(r!==Ue&&nc(n[0])&&De(r,n)?L(`Property ${JSON.stringify(n)} must be accessed via $data because it starts with a reserved character ("$" or "_") and is not proxied on the render context.`):s===Xe&&L(`Property ${JSON.stringify(n)} was accessed during render but is not defined on instance.`))},set({_:s},n,o){const{data:t,setupState:r,ctx:l}=s;return dl(r,n)?(r[n]=o,!0):r.__isScriptSetup&&De(r,n)?(L(`Cannot mutate <script setup> binding "${n}" from Options API.`),!1):t!==Ue&&De(t,n)?(t[n]=o,!0):De(s.props,n)?(L(`Attempting to mutate prop "${n}". Props are readonly.`),!1):n[0]==="$"&&n.slice(1)in s?(L(`Attempting to mutate public property "${n}". Properties starting with $ are reserved and readonly.`),!1):(n in s.appContext.config.globalProperties?Object.defineProperty(l,n,{enumerable:!0,configurable:!0,value:o}):l[n]=o,!0)},has({_:{data:s,setupState:n,accessCache:o,ctx:t,appContext:r,propsOptions:l}},c){let i;return!!o[c]||s!==Ue&&De(s,c)||dl(n,c)||(i=l[0])&&De(i,c)||De(t,c)||De(to,c)||De(r.config.globalProperties,c)},defineProperty(s,n,o){return o.get!=null?s._.accessCache[n]=0:De(o,"value")&&this.set(s,n,o.value,null),Reflect.defineProperty(s,n,o)}};Ju.ownKeys=s=>(L("Avoid app logic that relies on enumerating keys on a component instance. The keys will be empty in production mode to avoid performance overhead."),Reflect.ownKeys(s));function u8(s){const n={};return Object.defineProperty(n,"_",{configurable:!0,enumerable:!1,get:()=>s}),Object.keys(to).forEach(o=>{Object.defineProperty(n,o,{configurable:!0,enumerable:!1,get:()=>to[o](s),set:Bs})}),n}function y8(s){const{ctx:n,propsOptions:[o]}=s;o&&Object.keys(o).forEach(t=>{Object.defineProperty(n,t,{enumerable:!0,configurable:!0,get:()=>s.props[t],set:Bs})})}function d8(s){const{ctx:n,setupState:o}=s;Object.keys(fe(o)).forEach(t=>{if(!o.__isScriptSetup){if(nc(t[0])){L(`setup() return property ${JSON.stringify(t)} should not start with "$" or "_" which are reserved prefixes for Vue internals.`);return}Object.defineProperty(n,t,{enumerable:!0,configurable:!0,get:()=>o[t],set:Bs})}})}function f8(){const s=Object.create(null);return(n,o)=>{s[o]?L(`${n} property "${o}" is already defined in ${s[o]}.`):s[o]=n}}let Zl=!0;function m8(s){const n=oc(s),o=s.proxy,t=s.ctx;Zl=!1,n.beforeCreate&&ei(n.beforeCreate,s,"bc");const{data:r,computed:l,methods:c,watch:i,provide:p,inject:u,created:y,beforeMount:d,mounted:f,beforeUpdate:h,updated:m,activated:g,deactivated:B,beforeDestroy:k,beforeUnmount:v,destroyed:E,unmounted:w,render:T,renderTracked:U,renderTriggered:z,errorCaptured:$,serverPrefetch:G,expose:oe,inheritAttrs:ue,components:J,directives:Ce,filters:Te}=n,xe=f8();{const[se]=s.propsOptions;if(se)for(const pe in se)xe("Props",pe)}if(u&&h8(u,t,xe,s.appContext.config.unwrapInjectedRef),c)for(const se in c){const pe=c[se];de(pe)?(Object.defineProperty(t,se,{value:pe.bind(o),configurable:!0,enumerable:!0,writable:!0}),xe("Methods",se)):L(`Method "${se}" has type "${typeof pe}" in the component definition. Did you reference the function correctly?`)}if(r){de(r)||L("The data option must be a function. Plain object usage is no longer supported.");const se=r.call(o,o);if(qa(se)&&L("data() returned a Promise - note data() cannot be async; If you intend to perform data fetching before component renders, use async setup() + <Suspense>."),!Le(se))L("data() should return an object.");else{s.data=Ge(se);for(const pe in se)xe("Data",pe),nc(pe[0])||Object.defineProperty(t,pe,{configurable:!0,enumerable:!0,get:()=>se[pe],set:Bs})}}if(Zl=!0,l)for(const se in l){const pe=l[se],ve=de(pe)?pe.bind(o,o):de(pe.get)?pe.get.bind(o,o):Bs;ve===Bs&&L(`Computed property "${se}" has no getter.`);const Ne=!de(pe)&&de(pe.set)?pe.set.bind(o):()=>{L(`Write operation failed: computed property "${se}" is readonly.`)},Cs=F({get:ve,set:Ne});Object.defineProperty(t,se,{enumerable:!0,configurable:!0,get:()=>Cs.value,set:rs=>Cs.value=rs}),xe("Computed",se)}if(i)for(const se in i)Xu(i[se],t,o,se);if(p){const se=de(p)?p.call(o):p;Reflect.ownKeys(se).forEach(pe=>{Ds(pe,se[pe])})}y&&ei(y,s,"c");function He(se,pe){ie(pe)?pe.forEach(ve=>se(ve.bind(o))):pe&&se(pe.bind(o))}if(He(o8,d),He(fo,f),He(t8,h),He(Qr,m),He(Wu,g),He(zu,B),He(c8,$),He(a8,U),He(l8,z),He(Ut,v),He(Jr,w),He(r8,G),ie(oe))if(oe.length){const se=s.exposed||(s.exposed={});oe.forEach(pe=>{Object.defineProperty(se,pe,{get:()=>o[pe],set:ve=>o[pe]=ve})})}else s.exposed||(s.exposed={});T&&s.render===Bs&&(s.render=T),ue!=null&&(s.inheritAttrs=ue),J&&(s.components=J),Ce&&(s.directives=Ce)}function h8(s,n,o=Bs,t=!1){ie(s)&&(s=Ql(s));for(const r in s){const l=s[r];let c;Le(l)?"default"in l?c=I(l.from||r,l.default,!0):c=I(l.from||r):c=I(l),Ie(c)?t?Object.defineProperty(n,r,{enumerable:!0,configurable:!0,get:()=>c.value,set:i=>c.value=i}):(L(`injected property "${r}" is a ref and will be auto-unwrapped and no longer needs \`.value\` in the next minor release. To opt-in to the new behavior now, set \`app.config.unwrapInjectedRef = true\` (this config is temporary and will not be needed in the future.)`),n[r]=c):n[r]=c,o("Inject",r)}}function ei(s,n,o){Ms(ie(s)?s.map(t=>t.bind(n.proxy)):s.bind(n.proxy),n,o)}function Xu(s,n,o,t){const r=t.includes(".")?Hu(o,t):()=>o[t];if(je(s)){const l=n[s];de(l)?Be(r,l):L(`Invalid watch handler specified by key "${s}"`,l)}else if(de(s))Be(r,s.bind(o));else if(Le(s))if(ie(s))s.forEach(l=>Xu(l,n,o,t));else{const l=de(s.handler)?s.handler.bind(o):n[s.handler];de(l)?Be(r,l,s):L(`Invalid watch handler specified by key "${s.handler}"`,l)}else L(`Invalid watch option: "${t}"`,s)}function oc(s){const n=s.type,{mixins:o,extends:t}=n,{mixins:r,optionsCache:l,config:{optionMergeStrategies:c}}=s.appContext,i=l.get(n);let p;return i?p=i:!r.length&&!o&&!t?p=n:(p={},r.length&&r.forEach(u=>wr(p,u,c,!0)),wr(p,n,c)),Le(n)&&l.set(n,p),p}function wr(s,n,o,t=!1){const{mixins:r,extends:l}=n;l&&wr(s,l,o,!0),r&&r.forEach(c=>wr(s,c,o,!0));for(const c in n)if(t&&c==="expose")L('"expose" option is ignored when declared in mixins or extends. It should only be declared in the base component itself.');else{const i=_8[c]||o&&o[c];s[c]=i?i(s[c],n[c]):n[c]}return s}const _8={data:si,props:Wn,emits:Wn,methods:Wn,computed:Wn,beforeCreate:ps,created:ps,beforeMount:ps,mounted:ps,beforeUpdate:ps,updated:ps,beforeDestroy:ps,beforeUnmount:ps,destroyed:ps,unmounted:ps,activated:ps,deactivated:ps,errorCaptured:ps,serverPrefetch:ps,components:Wn,directives:Wn,watch:B8,provide:si,inject:g8};function si(s,n){return n?s?function(){return We(de(s)?s.call(this,this):s,de(n)?n.call(this,this):n)}:n:s}function g8(s,n){return Wn(Ql(s),Ql(n))}function Ql(s){if(ie(s)){const n={};for(let o=0;o<s.length;o++)n[s[o]]=s[o];return n}return s}function ps(s,n){return s?[...new Set([].concat(s,n))]:n}function Wn(s,n){return s?We(We(Object.create(null),s),n):n}function B8(s,n){if(!s)return n;if(!n)return s;const o=We(Object.create(null),s);for(const t in n)o[t]=ps(s[t],n[t]);return o}function A8(s,n,o,t=!1){const r={},l={};Br(l,el,1),s.propsDefaults=Object.create(null),ey(s,n,r,l);for(const c in s.propsOptions[0])c in r||(r[c]=void 0);ny(n||{},r,s),o?s.props=t?r:mm(r):s.type.props?s.props=r:s.props=l,s.attrs=l}function v8(s){for(;s;){if(s.type.__hmrId)return!0;s=s.parent}}function C8(s,n,o,t){const{props:r,attrs:l,vnode:{patchFlag:c}}=s,i=fe(r),[p]=s.propsOptions;let u=!1;if(!v8(s)&&(t||c>0)&&!(c&16)){if(c&8){const y=s.vnode.dynamicProps;for(let d=0;d<y.length;d++){let f=y[d];if(Kr(s.emitsOptions,f))continue;const h=n[f];if(p)if(De(l,f))h!==l[f]&&(l[f]=h,u=!0);else{const m=Xs(f);r[m]=Jl(p,i,m,h,s,!1)}else h!==l[f]&&(l[f]=h,u=!0)}}}else{ey(s,n,r,l)&&(u=!0);let y;for(const d in i)(!n||!De(n,d)&&((y=yn(d))===d||!De(n,y)))&&(p?o&&(o[d]!==void 0||o[y]!==void 0)&&(r[d]=Jl(p,i,d,void 0,s,!0)):delete r[d]);if(l!==i)for(const d in l)(!n||!De(n,d))&&(delete l[d],u=!0)}u&&dn(s,"set","$attrs"),ny(n||{},r,s)}function ey(s,n,o,t){const[r,l]=s.propsOptions;let c=!1,i;if(n)for(let p in n){if(cr(p))continue;const u=n[p];let y;r&&De(r,y=Xs(p))?!l||!l.includes(y)?o[y]=u:(i||(i={}))[y]=u:Kr(s.emitsOptions,p)||(!(p in t)||u!==t[p])&&(t[p]=u,c=!0)}if(l){const p=fe(o),u=i||Ue;for(let y=0;y<l.length;y++){const d=l[y];o[d]=Jl(r,p,d,u[d],s,!De(u,d))}}return c}function Jl(s,n,o,t,r,l){const c=s[o];if(c!=null){const i=De(c,"default");if(i&&t===void 0){const p=c.default;if(c.type!==Function&&de(p)){const{propsDefaults:u}=r;o in u?t=u[o]:(Mo(r),t=u[o]=p.call(null,n),ro())}else t=p}c[0]&&(l&&!i?t=!1:c[1]&&(t===""||t===yn(o))&&(t=!0))}return t}function sy(s,n,o=!1){const t=n.propsCache,r=t.get(s);if(r)return r;const l=s.props,c={},i=[];let p=!1;if(!de(s)){const y=d=>{p=!0;const[f,h]=sy(d,n,!0);We(c,f),h&&i.push(...h)};!o&&n.mixins.length&&n.mixins.forEach(y),s.extends&&y(s.extends),s.mixins&&s.mixins.forEach(y)}if(!l&&!p)return Le(s)&&t.set(s,wo),wo;if(ie(l))for(let y=0;y<l.length;y++){je(l[y])||L("props must be strings when using array syntax.",l[y]);const d=Xs(l[y]);ni(d)&&(c[d]=Ue)}else if(l){Le(l)||L("invalid props options",l);for(const y in l){const d=Xs(y);if(ni(d)){const f=l[y],h=c[d]=ie(f)||de(f)?{type:f}:Object.assign({},f);if(h){const m=ti(Boolean,h.type),g=ti(String,h.type);h[0]=m>-1,h[1]=g<0||m<g,(m>-1||De(h,"default"))&&i.push(d)}}}}const u=[c,i];return Le(s)&&t.set(s,u),u}function ni(s){return s[0]!=="$"?!0:(L(`Invalid prop name: "${s}" is a reserved property.`),!1)}function Xl(s){const n=s&&s.toString().match(/^\s*(function|class) (\w+)/);return n?n[2]:s===null?"null":""}function oi(s,n){return Xl(s)===Xl(n)}function ti(s,n){return ie(n)?n.findIndex(o=>oi(o,s)):de(n)&&oi(n,s)?0:-1}function ny(s,n,o){const t=fe(n),r=o.propsOptions[0];for(const l in r){let c=r[l];c!=null&&E8(l,t[l],c,!De(s,l)&&!De(s,yn(l)))}}function E8(s,n,o,t){const{type:r,required:l,validator:c}=o;if(l&&t){L('Missing required prop: "'+s+'"');return}if(!(n==null&&!o.required)){if(r!=null&&r!==!0){let i=!1;const p=ie(r)?r:[r],u=[];for(let y=0;y<p.length&&!i;y++){const{valid:d,expectedType:f}=k8(n,p[y]);u.push(f||""),i=d}if(!i){L(D8(s,n,u));return}}c&&!c(n)&&L('Invalid prop: custom validator check failed for prop "'+s+'".')}}const b8=Nn("String,Number,Boolean,Function,Symbol,BigInt");function k8(s,n){let o;const t=Xl(n);if(b8(t)){const r=typeof s;o=r===t.toLowerCase(),!o&&r==="object"&&(o=s instanceof n)}else t==="Object"?o=Le(s):t==="Array"?o=ie(s):t==="null"?o=s===null:o=s instanceof n;return{valid:o,expectedType:t}}function D8(s,n,o){let t=`Invalid prop: type check failed for prop "${s}". Expected ${o.map(co).join(" | ")}`;const r=o[0],l=Ua(n),c=ri(n,r),i=ri(n,l);return o.length===1&&li(r)&&!w8(r,l)&&(t+=` with value ${c}`),t+=`, got ${l} `,li(l)&&(t+=`with value ${i}.`),t}function ri(s,n){return n==="String"?`"${s}"`:n==="Number"?`${Number(s)}`:`${s}`}function li(s){return["string","number","boolean"].some(o=>s.toLowerCase()===o)}function w8(...s){return s.some(n=>n.toLowerCase()==="boolean")}const oy=s=>s[0]==="_"||s==="$stable",tc=s=>ie(s)?s.map(Us):[Us(s)],S8=(s,n,o)=>{if(n._n)return n;const t=b((...r)=>(ze&&L(`Slot "${s}" invoked outside of the render function: this will not track dependencies used in the slot. Invoke the slot function inside the render function instead.`),tc(n(...r))),o);return t._c=!1,t},ty=(s,n,o)=>{const t=s._ctx;for(const r in s){if(oy(r))continue;const l=s[r];if(de(l))n[r]=S8(r,l,t);else if(l!=null){L(`Non-function value encountered for slot "${r}". Prefer function slots for better performance.`);const c=tc(l);n[r]=()=>c}}},ry=(s,n)=>{qt(s.vnode)||L("Non-function value encountered for default slot. Prefer function slots for better performance.");const o=tc(n);s.slots.default=()=>o},R8=(s,n)=>{if(s.vnode.shapeFlag&32){const o=n._;o?(s.slots=fe(n),Br(n,"_",o)):ty(n,s.slots={})}else s.slots={},n&&ry(s,n);Br(s.slots,el,1)},x8=(s,n,o)=>{const{vnode:t,slots:r}=s;let l=!0,c=Ue;if(t.shapeFlag&32){const i=n._;i?xn?We(r,n):o&&i===1?l=!1:(We(r,n),!o&&i===1&&delete r._):(l=!n.$stable,ty(n,r)),c=n}else n&&(ry(s,n),c={default:1});if(l)for(const i in r)!oy(i)&&!(i in c)&&delete r[i]};function ly(){return{app:null,config:{isNativeTag:ru,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let F8=0;function $8(s,n){return function(t,r=null){de(t)||(t=Object.assign({},t)),r!=null&&!Le(r)&&(L("root props passed to app.mount() must be an object."),r=null);const l=ly(),c=new Set;let i=!1;const p=l.app={_uid:F8++,_component:t,_props:r,_container:null,_context:l,_instance:null,version:Rr,get config(){return l.config},set config(u){L("app.config cannot be replaced. Modify individual options instead.")},use(u,...y){return c.has(u)?L("Plugin has already been applied to target app."):u&&de(u.install)?(c.add(u),u.install(p,...y)):de(u)?(c.add(u),u(p,...y)):L('A plugin must either be a function or an object with an "install" function.'),p},mixin(u){return l.mixins.includes(u)?L("Mixin has already been applied to target app"+(u.name?`: ${u.name}`:"")):l.mixins.push(u),p},component(u,y){return na(u,l.config),y?(l.components[u]&&L(`Component "${u}" has already been registered in target app.`),l.components[u]=y,p):l.components[u]},directive(u,y){return Yu(u),y?(l.directives[u]&&L(`Directive "${u}" has already been registered in target app.`),l.directives[u]=y,p):l.directives[u]},mount(u,y,d){if(i)L("App has already been mounted.\nIf you want to remount the same app, move your app creation logic into a factory function and create fresh app instances for each mount - e.g. `const createMyApp = () => createApp(App)`");else{u.__vue_app__&&L("There is already an app instance mounted on the host container.\n If you want to mount another app on the same host container, you need to unmount the previous app by calling `app.unmount()` first.");const f=R(t,r);return f.appContext=l,l.reload=()=>{s(Vs(f),u,d)},y&&n?n(f,u):s(f,u,d),i=!0,p._container=u,u.__vue_app__=p,p._instance=f.component,Lm(p,Rr),sl(f.component)||f.component.proxy}},unmount(){i?(s(null,p._container),p._instance=null,Nm(p),delete p._container.__vue_app__):L("Cannot unmount an app that is not mounted.")},provide(u,y){return u in l.provides&&L(`App already provides property with key "${String(u)}". It will be overwritten with the new value.`),l.provides[u]=y,p}};return p}}function ea(s,n,o,t,r=!1){if(ie(s)){s.forEach((f,h)=>ea(f,n&&(ie(n)?n[h]:n),o,t,r));return}if(Ro(t)&&!r)return;const l=t.shapeFlag&4?sl(t.component)||t.component.proxy:t.el,c=r?null:l,{i,r:p}=s;if(!i){L("Missing ref owner context. ref cannot be used on hoisted vnodes. A vnode with ref must be created inside the render function.");return}const u=n&&n.r,y=i.refs===Ue?i.refs={}:i.refs,d=i.setupState;if(u!=null&&u!==p&&(je(u)?(y[u]=null,De(d,u)&&(d[u]=null)):Ie(u)&&(u.value=null)),de(p))un(p,i,12,[c,y]);else{const f=je(p),h=Ie(p);if(f||h){const m=()=>{if(s.f){const g=f?De(d,p)?d[p]:y[p]:p.value;r?ie(g)&&La(g,l):ie(g)?g.includes(l)||g.push(l):f?(y[p]=[l],De(d,p)&&(d[p]=y[p])):(p.value=[l],s.k&&(y[s.k]=p.value))}else f?(y[p]=c,De(d,p)&&(d[p]=c)):h?(p.value=c,s.k&&(y[s.k]=c)):L("Invalid template ref type:",p,`(${typeof p})`)};c?(m.id=-1,ns(m,o)):m()}else L("Invalid template ref type:",p,`(${typeof p})`)}}let Ho,Dn;function on(s,n){s.appContext.config.performance&&Sr()&&Dn.mark(`vue-${n}-${s.uid}`),Hm(s,n,Sr()?Dn.now():Date.now())}function tn(s,n){if(s.appContext.config.performance&&Sr()){const o=`vue-${n}-${s.uid}`,t=o+":end";Dn.mark(t),Dn.measure(`<${nl(s,s.type)}> ${n}`,o,t),Dn.clearMarks(o),Dn.clearMarks(t)}Vm(s,n,Sr()?Dn.now():Date.now())}function Sr(){return Ho!==void 0||(typeof window<"u"&&window.performance?(Ho=!0,Dn=window.performance):Ho=!1),Ho}function I8(){const s=[];if(s.length){const n=s.length>1;console.warn(`Feature flag${n?"s":""} ${s.join(", ")} ${n?"are":"is"} not explicitly defined. You are running the esm-bundler build of Vue, which expects these compile-time feature flags to be globally injected via the bundler config in order to get better tree-shaking in the production bundle.

For more details, see https://link.vuejs.org/feature-flags.`)}}const ns=Qm;function T8(s){return M8(s)}function M8(s,n){I8();const o=iu();o.__VUE__=!0,Pu(o.__VUE_DEVTOOLS_GLOBAL_HOOK__,o);const{insert:t,remove:r,patchProp:l,createElement:c,createText:i,createComment:p,setText:u,setElementText:y,parentNode:d,nextSibling:f,setScopeId:h=Bs,insertStaticContent:m}=s,g=(_,A,S,O=null,M=null,j=null,Y=!1,V=null,W=xn?!1:!!A.dynamicChildren)=>{if(_===A)return;_&&!wn(_,A)&&(O=re(_),hs(_,M,j,!0),_=null),A.patchFlag===-2&&(W=!1,A.dynamicChildren=null);const{type:H,ref:ae,shapeFlag:le}=A;switch(H){case Vt:B(_,A,S,O);break;case es:k(_,A,S,O);break;case ur:_==null?v(A,S,O,Y):E(_,A,S,Y);break;case Me:Ce(_,A,S,O,M,j,Y,V,W);break;default:le&1?U(_,A,S,O,M,j,Y,V,W):le&6?Te(_,A,S,O,M,j,Y,V,W):le&64||le&128?H.process(_,A,S,O,M,j,Y,V,W,Se):L("Invalid VNode type:",H,`(${typeof H})`)}ae!=null&&M&&ea(ae,_&&_.ref,j,A||_,!A)},B=(_,A,S,O)=>{if(_==null)t(A.el=i(A.children),S,O);else{const M=A.el=_.el;A.children!==_.children&&u(M,A.children)}},k=(_,A,S,O)=>{_==null?t(A.el=p(A.children||""),S,O):A.el=_.el},v=(_,A,S,O)=>{[_.el,_.anchor]=m(_.children,A,S,O,_.el,_.anchor)},E=(_,A,S,O)=>{if(A.children!==_.children){const M=f(_.anchor);T(_),[A.el,A.anchor]=m(A.children,S,M,O)}else A.el=_.el,A.anchor=_.anchor},w=({el:_,anchor:A},S,O)=>{let M;for(;_&&_!==A;)M=f(_),t(_,S,O),_=M;t(A,S,O)},T=({el:_,anchor:A})=>{let S;for(;_&&_!==A;)S=f(_),r(_),_=S;r(A)},U=(_,A,S,O,M,j,Y,V,W)=>{Y=Y||A.type==="svg",_==null?z(A,S,O,M,j,Y,V,W):oe(_,A,M,j,Y,V,W)},z=(_,A,S,O,M,j,Y,V)=>{let W,H;const{type:ae,props:le,shapeFlag:ce,transition:he,dirs:we}=_;if(W=_.el=c(_.type,j,le&&le.is,le),ce&8?y(W,_.children):ce&16&&G(_.children,W,null,O,M,j&&ae!=="foreignObject",Y,V),we&&qn(_,null,O,"created"),$(W,_,_.scopeId,Y,O),le){for(const qe in le)qe!=="value"&&!cr(qe)&&l(W,qe,null,le[qe],j,_.children,O,M,K);"value"in le&&l(W,"value",null,le.value),(H=le.onVnodeBeforeMount)&&$s(H,O,_)}Object.defineProperty(W,"__vnode",{value:_,enumerable:!1}),Object.defineProperty(W,"__vueParentComponent",{value:O,enumerable:!1}),we&&qn(_,null,O,"beforeMount");const Ve=(!M||M&&!M.pendingBranch)&&he&&!he.persisted;Ve&&he.beforeEnter(W),t(W,A,S),((H=le&&le.onVnodeMounted)||Ve||we)&&ns(()=>{H&&$s(H,O,_),Ve&&he.enter(W),we&&qn(_,null,O,"mounted")},M)},$=(_,A,S,O,M)=>{if(S&&h(_,S),O)for(let j=0;j<O.length;j++)h(_,O[j]);if(M){let j=M.subTree;if(j.patchFlag>0&&j.patchFlag&2048&&(j=qu(j.children)||j),A===j){const Y=M.vnode;$(_,Y,Y.scopeId,Y.slotScopeIds,M.parent)}}},G=(_,A,S,O,M,j,Y,V,W=0)=>{for(let H=W;H<_.length;H++){const ae=_[H]=V?En(_[H]):Us(_[H]);g(null,ae,A,S,O,M,j,Y,V)}},oe=(_,A,S,O,M,j,Y)=>{const V=A.el=_.el;let{patchFlag:W,dynamicChildren:H,dirs:ae}=A;W|=_.patchFlag&16;const le=_.props||Ue,ce=A.props||Ue;let he;S&&Un(S,!1),(he=ce.onVnodeBeforeUpdate)&&$s(he,S,A,_),ae&&qn(A,_,S,"beforeUpdate"),S&&Un(S,!0),xn&&(W=0,Y=!1,H=null);const we=M&&A.type!=="foreignObject";if(H?(ue(_.dynamicChildren,H,V,S,O,we,j),S&&S.type.__hmrId&&lt(_,A)):Y||ve(_,A,V,null,S,O,we,j,!1),W>0){if(W&16)J(V,A,le,ce,S,O,M);else if(W&2&&le.class!==ce.class&&l(V,"class",null,ce.class,M),W&4&&l(V,"style",le.style,ce.style,M),W&8){const Ve=A.dynamicProps;for(let qe=0;qe<Ve.length;qe++){const Ze=Ve[qe],Ls=le[Ze],_o=ce[Ze];(_o!==Ls||Ze==="value")&&l(V,Ze,Ls,_o,M,_.children,S,O,K)}}W&1&&_.children!==A.children&&y(V,A.children)}else!Y&&H==null&&J(V,A,le,ce,S,O,M);((he=ce.onVnodeUpdated)||ae)&&ns(()=>{he&&$s(he,S,A,_),ae&&qn(A,_,S,"updated")},O)},ue=(_,A,S,O,M,j,Y)=>{for(let V=0;V<A.length;V++){const W=_[V],H=A[V],ae=W.el&&(W.type===Me||!wn(W,H)||W.shapeFlag&70)?d(W.el):S;g(W,H,ae,null,O,M,j,Y,!0)}},J=(_,A,S,O,M,j,Y)=>{if(S!==O){if(S!==Ue)for(const V in S)!cr(V)&&!(V in O)&&l(_,V,S[V],null,Y,A.children,M,j,K);for(const V in O){if(cr(V))continue;const W=O[V],H=S[V];W!==H&&V!=="value"&&l(_,V,H,W,Y,A.children,M,j,K)}"value"in O&&l(_,"value",S.value,O.value)}},Ce=(_,A,S,O,M,j,Y,V,W)=>{const H=A.el=_?_.el:i(""),ae=A.anchor=_?_.anchor:i("");let{patchFlag:le,dynamicChildren:ce,slotScopeIds:he}=A;(xn||le&2048)&&(le=0,W=!1,ce=null),he&&(V=V?V.concat(he):he),_==null?(t(H,S,O),t(ae,S,O),G(A.children,S,ae,M,j,Y,V,W)):le>0&&le&64&&ce&&_.dynamicChildren?(ue(_.dynamicChildren,ce,S,M,j,Y,V),M&&M.type.__hmrId?lt(_,A):(A.key!=null||M&&A===M.subTree)&&lt(_,A,!0)):ve(_,A,S,ae,M,j,Y,V,W)},Te=(_,A,S,O,M,j,Y,V,W)=>{A.slotScopeIds=V,_==null?A.shapeFlag&512?M.ctx.activate(A,S,O,Y,W):xe(A,S,O,M,j,Y,W):He(_,A,W)},xe=(_,A,S,O,M,j,Y)=>{const V=_.component=W8(_,O,M);if(V.type.__hmrId&&Tm(V),ir(_),on(V,"mount"),qt(_)&&(V.ctx.renderer=Se),on(V,"init"),K8(V),tn(V,"init"),V.asyncDep){if(M&&M.registerDep(V,se),!_.el){const W=V.subTree=R(es);k(null,W,A,S)}return}se(V,_,A,S,M,j,Y),pr(),tn(V,"mount")},He=(_,A,S)=>{const O=A.component=_.component;if(Ym(_,A,S))if(O.asyncDep&&!O.asyncResolved){ir(A),pe(O,A,S),pr();return}else O.next=A,$m(O.update),O.update();else A.el=_.el,O.vnode=A},se=(_,A,S,O,M,j,Y)=>{const V=()=>{if(_.isMounted){let{next:ae,bu:le,u:ce,parent:he,vnode:we}=_,Ve=ae,qe;ir(ae||_.vnode),Un(_,!1),ae?(ae.el=we.el,pe(_,ae,Y)):ae=we,le&&kn(le),(qe=ae.props&&ae.props.onVnodeBeforeUpdate)&&$s(qe,he,ae,we),Un(_,!0),on(_,"render");const Ze=il(_);tn(_,"render");const Ls=_.subTree;_.subTree=Ze,on(_,"patch"),g(Ls,Ze,d(Ls.el),re(Ls),_,M,j),tn(_,"patch"),ae.el=Ze.el,Ve===null&&Zm(_,Ze.el),ce&&ns(ce,M),(qe=ae.props&&ae.props.onVnodeUpdated)&&ns(()=>$s(qe,he,ae,we),M),Ou(_),pr()}else{let ae;const{el:le,props:ce}=A,{bm:he,m:we,parent:Ve}=_,qe=Ro(A);if(Un(_,!1),he&&kn(he),!qe&&(ae=ce&&ce.onVnodeBeforeMount)&&$s(ae,Ve,A),Un(_,!0),le&&ye){const Ze=()=>{on(_,"render"),_.subTree=il(_),tn(_,"render"),on(_,"hydrate"),ye(le,_.subTree,_,M,null),tn(_,"hydrate")};qe?A.type.__asyncLoader().then(()=>!_.isUnmounted&&Ze()):Ze()}else{on(_,"render");const Ze=_.subTree=il(_);tn(_,"render"),on(_,"patch"),g(null,Ze,S,O,_,M,j),tn(_,"patch"),A.el=Ze.el}if(we&&ns(we,M),!qe&&(ae=ce&&ce.onVnodeMounted)){const Ze=A;ns(()=>$s(ae,Ve,Ze),M)}(A.shapeFlag&256||Ve&&Ro(Ve.vnode)&&Ve.vnode.shapeFlag&256)&&_.a&&ns(_.a,M),_.isMounted=!0,Wl(_),A=S=O=null}},W=_.effect=new Ga(V,()=>zr(H),_.scope),H=_.update=()=>W.run();H.id=_.uid,Un(_,!0),W.onTrack=_.rtc?ae=>kn(_.rtc,ae):void 0,W.onTrigger=_.rtg?ae=>kn(_.rtg,ae):void 0,H.ownerInstance=_,H()},pe=(_,A,S)=>{A.component=_;const O=_.vnode.props;_.vnode=A,_.next=null,C8(_,A.props,O,S),x8(_,A.children,S),po(),zc(),uo()},ve=(_,A,S,O,M,j,Y,V,W=!1)=>{const H=_&&_.children,ae=_?_.shapeFlag:0,le=A.children,{patchFlag:ce,shapeFlag:he}=A;if(ce>0){if(ce&128){Cs(H,le,S,O,M,j,Y,V,W);return}else if(ce&256){Ne(H,le,S,O,M,j,Y,V,W);return}}he&8?(ae&16&&K(H,M,j),le!==H&&y(S,le)):ae&16?he&16?Cs(H,le,S,O,M,j,Y,V,W):K(H,M,j,!0):(ae&8&&y(S,""),he&16&&G(le,S,O,M,j,Y,V,W))},Ne=(_,A,S,O,M,j,Y,V,W)=>{_=_||wo,A=A||wo;const H=_.length,ae=A.length,le=Math.min(H,ae);let ce;for(ce=0;ce<le;ce++){const he=A[ce]=W?En(A[ce]):Us(A[ce]);g(_[ce],he,S,null,M,j,Y,V,W)}H>ae?K(_,M,j,!0,!1,le):G(A,S,O,M,j,Y,V,W,le)},Cs=(_,A,S,O,M,j,Y,V,W)=>{let H=0;const ae=A.length;let le=_.length-1,ce=ae-1;for(;H<=le&&H<=ce;){const he=_[H],we=A[H]=W?En(A[H]):Us(A[H]);if(wn(he,we))g(he,we,S,null,M,j,Y,V,W);else break;H++}for(;H<=le&&H<=ce;){const he=_[le],we=A[ce]=W?En(A[ce]):Us(A[ce]);if(wn(he,we))g(he,we,S,null,M,j,Y,V,W);else break;le--,ce--}if(H>le){if(H<=ce){const he=ce+1,we=he<ae?A[he].el:O;for(;H<=ce;)g(null,A[H]=W?En(A[H]):Us(A[H]),S,we,M,j,Y,V,W),H++}}else if(H>ce)for(;H<=le;)hs(_[H],M,j,!0),H++;else{const he=H,we=H,Ve=new Map;for(H=we;H<=ce;H++){const is=A[H]=W?En(A[H]):Us(A[H]);is.key!=null&&(Ve.has(is.key)&&L("Duplicate keys found during update:",JSON.stringify(is.key),"Make sure keys are unique."),Ve.set(is.key,H))}let qe,Ze=0;const Ls=ce-we+1;let _o=!1,Pc=0;const Uo=new Array(Ls);for(H=0;H<Ls;H++)Uo[H]=0;for(H=he;H<=le;H++){const is=_[H];if(Ze>=Ls){hs(is,M,j,!0);continue}let Ws;if(is.key!=null)Ws=Ve.get(is.key);else for(qe=we;qe<=ce;qe++)if(Uo[qe-we]===0&&wn(is,A[qe])){Ws=qe;break}Ws===void 0?hs(is,M,j,!0):(Uo[Ws-we]=H+1,Ws>=Pc?Pc=Ws:_o=!0,g(is,A[Ws],S,null,M,j,Y,V,W),Ze++)}const Oc=_o?P8(Uo):wo;for(qe=Oc.length-1,H=Ls-1;H>=0;H--){const is=we+H,Ws=A[is],Lc=is+1<ae?A[is+1].el:O;Uo[H]===0?g(null,Ws,S,Lc,M,j,Y,V,W):_o&&(qe<0||H!==Oc[qe]?rs(Ws,S,Lc,2):qe--)}}},rs=(_,A,S,O,M=null)=>{const{el:j,type:Y,transition:V,children:W,shapeFlag:H}=_;if(H&6){rs(_.component.subTree,A,S,O);return}if(H&128){_.suspense.move(A,S,O);return}if(H&64){Y.move(_,A,S,Se);return}if(Y===Me){t(j,A,S);for(let le=0;le<W.length;le++)rs(W[le],A,S,O);t(_.anchor,A,S);return}if(Y===ur){w(_,A,S);return}if(O!==2&&H&1&&V)if(O===0)V.beforeEnter(j),t(j,A,S),ns(()=>V.enter(j),M);else{const{leave:le,delayLeave:ce,afterLeave:he}=V,we=()=>t(j,A,S),Ve=()=>{le(j,()=>{we(),he&&he()})};ce?ce(j,we,Ve):Ve()}else t(j,A,S)},hs=(_,A,S,O=!1,M=!1)=>{const{type:j,props:Y,ref:V,children:W,dynamicChildren:H,shapeFlag:ae,patchFlag:le,dirs:ce}=_;if(V!=null&&ea(V,null,S,_,!0),ae&256){A.ctx.deactivate(_);return}const he=ae&1&&ce,we=!Ro(_);let Ve;if(we&&(Ve=Y&&Y.onVnodeBeforeUnmount)&&$s(Ve,A,_),ae&6)ne(_.component,S,O);else{if(ae&128){_.suspense.unmount(S,O);return}he&&qn(_,null,A,"beforeUnmount"),ae&64?_.type.remove(_,A,S,M,Se,O):H&&(j!==Me||le>0&&le&64)?K(H,A,S,!1,!0):(j===Me&&le&384||!M&&ae&16)&&K(W,A,S),O&&_n(_)}(we&&(Ve=Y&&Y.onVnodeUnmounted)||he)&&ns(()=>{Ve&&$s(Ve,A,_),he&&qn(_,null,A,"unmounted")},S)},_n=_=>{const{type:A,el:S,anchor:O,transition:M}=_;if(A===Me){_.patchFlag>0&&_.patchFlag&2048&&M&&!M.persisted?_.children.forEach(Y=>{Y.type===es?r(Y.el):_n(Y)}):x(S,O);return}if(A===ur){T(_);return}const j=()=>{r(S),M&&!M.persisted&&M.afterLeave&&M.afterLeave()};if(_.shapeFlag&1&&M&&!M.persisted){const{leave:Y,delayLeave:V}=M,W=()=>Y(S,j);V?V(_.el,j,W):W()}else j()},x=(_,A)=>{let S;for(;_!==A;)S=f(_),r(_),_=S;r(A)},ne=(_,A,S)=>{_.type.__hmrId&&Mm(_);const{bum:O,scope:M,update:j,subTree:Y,um:V}=_;O&&kn(O),M.stop(),j&&(j.active=!1,hs(Y,_,A,S)),V&&ns(V,A),ns(()=>{_.isUnmounted=!0},A),A&&A.pendingBranch&&!A.isUnmounted&&_.asyncDep&&!_.asyncResolved&&_.suspenseId===A.pendingId&&(A.deps--,A.deps===0&&A.resolve()),Um(_)},K=(_,A,S,O=!1,M=!1,j=0)=>{for(let Y=j;Y<_.length;Y++)hs(_[Y],A,S,O,M)},re=_=>_.shapeFlag&6?re(_.component.subTree):_.shapeFlag&128?_.suspense.next():f(_.anchor||_.el),be=(_,A,S)=>{_==null?A._vnode&&hs(A._vnode,null,null,!0):g(A._vnode||null,_,A,null,null,null,S),zc(),Iu(),A._vnode=_},Se={p:g,um:hs,m:rs,r:_n,mt:xe,mc:G,pc:ve,pbc:ue,n:re,o:s};let me,ye;return n&&([me,ye]=n(Se)),{render:be,hydrate:me,createApp:$8(be,me)}}function Un({effect:s,update:n},o){s.allowRecurse=n.allowRecurse=o}function lt(s,n,o=!1){const t=s.children,r=n.children;if(ie(t)&&ie(r))for(let l=0;l<t.length;l++){const c=t[l];let i=r[l];i.shapeFlag&1&&!i.dynamicChildren&&((i.patchFlag<=0||i.patchFlag===32)&&(i=r[l]=En(r[l]),i.el=c.el),o||lt(c,i)),i.type===Vt&&(i.el=c.el),i.type===es&&!i.el&&(i.el=c.el)}}function P8(s){const n=s.slice(),o=[0];let t,r,l,c,i;const p=s.length;for(t=0;t<p;t++){const u=s[t];if(u!==0){if(r=o[o.length-1],s[r]<u){n[t]=r,o.push(t);continue}for(l=0,c=o.length-1;l<c;)i=l+c>>1,s[o[i]]<u?l=i+1:c=i;u<s[o[l]]&&(l>0&&(n[t]=o[l-1]),o[l]=t)}}for(l=o.length,c=o[l-1];l-- >0;)o[l]=c,c=n[c];return o}const O8=s=>s.__isTeleport,xo=s=>s&&(s.disabled||s.disabled===""),ai=s=>typeof SVGElement<"u"&&s instanceof SVGElement,sa=(s,n)=>{const o=s&&s.to;if(je(o))if(n){const t=n(o);return t||L(`Failed to locate Teleport target with selector "${o}". Note the target element must exist before the component is mounted - i.e. the target cannot be rendered by the component itself, and ideally should be outside of the entire Vue component tree.`),t}else return L("Current renderer does not support string target for Teleports. (missing querySelector renderer option)"),null;else return!o&&!xo(s)&&L(`Invalid Teleport target: ${o}`),o},L8={__isTeleport:!0,process(s,n,o,t,r,l,c,i,p,u){const{mc:y,pc:d,pbc:f,o:{insert:h,querySelector:m,createText:g,createComment:B}}=u,k=xo(n.props);let{shapeFlag:v,children:E,dynamicChildren:w}=n;if(xn&&(p=!1,w=null),s==null){const T=n.el=B("teleport start"),U=n.anchor=B("teleport end");h(T,o,t),h(U,o,t);const z=n.target=sa(n.props,m),$=n.targetAnchor=g("");z?(h($,z),c=c||ai(z)):k||L("Invalid Teleport target on mount:",z,`(${typeof z})`);const G=(oe,ue)=>{v&16&&y(E,oe,ue,r,l,c,i,p)};k?G(o,U):z&&G(z,$)}else{n.el=s.el;const T=n.anchor=s.anchor,U=n.target=s.target,z=n.targetAnchor=s.targetAnchor,$=xo(s.props),G=$?o:U,oe=$?T:z;if(c=c||ai(U),w?(f(s.dynamicChildren,w,G,r,l,c,i),lt(s,n,!0)):p||d(s,n,G,oe,r,l,c,i,!1),k)$||sr(n,o,T,u,1);else if((n.props&&n.props.to)!==(s.props&&s.props.to)){const ue=n.target=sa(n.props,m);ue?sr(n,ue,null,u,0):L("Invalid Teleport target on update:",U,`(${typeof U})`)}else $&&sr(n,U,z,u,1)}ay(n)},remove(s,n,o,t,{um:r,o:{remove:l}},c){const{shapeFlag:i,children:p,anchor:u,targetAnchor:y,target:d,props:f}=s;if(d&&l(y),(c||!xo(f))&&(l(u),i&16))for(let h=0;h<p.length;h++){const m=p[h];r(m,n,o,!0,!!m.dynamicChildren)}},move:sr,hydrate:N8};function sr(s,n,o,{o:{insert:t},m:r},l=2){l===0&&t(s.targetAnchor,n,o);const{el:c,anchor:i,shapeFlag:p,children:u,props:y}=s,d=l===2;if(d&&t(c,n,o),(!d||xo(y))&&p&16)for(let f=0;f<u.length;f++)r(u[f],n,o,2);d&&t(i,n,o)}function N8(s,n,o,t,r,l,{o:{nextSibling:c,parentNode:i,querySelector:p}},u){const y=n.target=sa(n.props,p);if(y){const d=y._lpa||y.firstChild;if(n.shapeFlag&16)if(xo(n.props))n.anchor=u(c(s),n,i(s),o,t,r,l),n.targetAnchor=d;else{n.anchor=c(s);let f=d;for(;f;)if(f=c(f),f&&f.nodeType===8&&f.data==="teleport anchor"){n.targetAnchor=f,y._lpa=n.targetAnchor&&c(n.targetAnchor);break}u(d,n,y,o,t,r,l)}ay(n)}return n.anchor&&c(n.anchor)}const q8=L8;function ay(s){const n=s.ctx;if(n&&n.ut){let o=s.children[0].el;for(;o!==s.targetAnchor;)o.nodeType===1&&o.setAttribute("data-v-owner",n.uid),o=o.nextSibling;n.ut()}}const Me=Symbol("Fragment"),Vt=Symbol("Text"),es=Symbol("Comment"),ur=Symbol("Static"),at=[];let Hs=null;function C(s=!1){at.push(Hs=s?null:[])}function U8(){at.pop(),Hs=at[at.length-1]||null}let Et=1;function ci(s){Et+=s}function cy(s){return s.dynamicChildren=Et>0?Hs||wo:null,U8(),Et>0&&Hs&&Hs.push(s),s}function te(s,n,o,t,r,l){return cy(e(s,n,o,t,r,l,!0))}function P(s,n,o,t,r){return cy(R(s,n,o,t,r,!0))}function mn(s){return s?s.__v_isVNode===!0:!1}function wn(s,n){return n.shapeFlag&6&&Co.has(n.type)?(s.shapeFlag&=-257,n.shapeFlag&=-513,!1):s.type===n.type&&s.key===n.key}const H8=(...s)=>V8(...s),el="__vInternal",iy=({key:s})=>s??null,yr=({ref:s,ref_key:n,ref_for:o})=>s!=null?je(s)||Ie(s)||de(s)?{i:Xe,r:s,k:n,f:!!o}:s:null;function e(s,n=null,o=null,t=0,r=null,l=s===Me?0:1,c=!1,i=!1){const p={__v_isVNode:!0,__v_skip:!0,type:s,props:n,key:n&&iy(n),ref:n&&yr(n),scopeId:Yr,slotScopeIds:null,children:o,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:l,patchFlag:t,dynamicProps:r,dynamicChildren:null,appContext:null,ctx:Xe};return i?(rc(p,o),l&128&&s.normalize(p)):o&&(p.shapeFlag|=je(o)?8:16),p.key!==p.key&&L("VNode created with invalid key (NaN). VNode type:",p.type),Et>0&&!c&&Hs&&(p.patchFlag>0||l&6)&&p.patchFlag!==32&&Hs.push(p),p}const R=H8;function V8(s,n=null,o=null,t=0,r=null,l=!1){if((!s||s===p8)&&(s||L(`Invalid vnode type when creating vnode: ${s}.`),s=es),mn(s)){const i=Vs(s,n,!0);return o&&rc(i,o),Et>0&&!l&&Hs&&(i.shapeFlag&6?Hs[Hs.indexOf(s)]=i:Hs.push(i)),i.patchFlag|=-2,i}if(fy(s)&&(s=s.__vccOpts),n){n=Q(n);let{class:i,style:p}=n;i&&!je(i)&&(n.class=Ye(i)),Le(p)&&(Er(p)&&!ie(p)&&(p=We({},p)),n.style=ts(p))}const c=je(s)?1:Uu(s)?128:O8(s)?64:Le(s)?4:de(s)?2:0;return c&4&&Er(s)&&(s=fe(s),L("Vue received a Component which was made a reactive object. This can lead to unnecessary performance overhead, and should be avoided by marking the component with `markRaw` or using `shallowRef` instead of `ref`.",`
Component that was made reactive: `,s)),e(s,n,o,t,r,c,l,!0)}function Q(s){return s?Er(s)||el in s?We({},s):s:null}function Vs(s,n,o=!1){const{props:t,ref:r,patchFlag:l,children:c}=s,i=n?_e(t||{},n):t;return{__v_isVNode:!0,__v_skip:!0,type:s.type,props:i,key:i&&iy(i),ref:n&&n.ref?o&&r?ie(r)?r.concat(yr(n)):[r,yr(n)]:yr(n):r,scopeId:s.scopeId,slotScopeIds:s.slotScopeIds,children:l===-1&&ie(c)?c.map(py):c,target:s.target,targetAnchor:s.targetAnchor,staticCount:s.staticCount,shapeFlag:s.shapeFlag,patchFlag:n&&s.type!==Me?l===-1?16:l|16:l,dynamicProps:s.dynamicProps,dynamicChildren:s.dynamicChildren,appContext:s.appContext,dirs:s.dirs,transition:s.transition,component:s.component,suspense:s.suspense,ssContent:s.ssContent&&Vs(s.ssContent),ssFallback:s.ssFallback&&Vs(s.ssFallback),el:s.el,anchor:s.anchor,ctx:s.ctx,ce:s.ce}}function py(s){const n=Vs(s);return ie(s.children)&&(n.children=s.children.map(py)),n}function a(s=" ",n=0){return R(Vt,null,s,n)}function ke(s="",n=!1){return n?(C(),P(es,null,s)):R(es,null,s)}function Us(s){return s==null||typeof s=="boolean"?R(es):ie(s)?R(Me,null,s.slice()):typeof s=="object"?En(s):R(Vt,null,String(s))}function En(s){return s.el===null&&s.patchFlag!==-1||s.memo?s:Vs(s)}function rc(s,n){let o=0;const{shapeFlag:t}=s;if(n==null)n=null;else if(ie(n))o=16;else if(typeof n=="object")if(t&65){const r=n.default;r&&(r._c&&(r._d=!1),rc(s,r()),r._c&&(r._d=!0));return}else{o=32;const r=n._;!r&&!(el in n)?n._ctx=Xe:r===3&&Xe&&(Xe.slots._===1?n._=1:(n._=2,s.patchFlag|=1024))}else de(n)?(n={default:n,_ctx:Xe},o=32):(n=String(n),t&64?(o=16,n=[a(n)]):o=8);s.children=n,s.shapeFlag|=o}function _e(...s){const n={};for(let o=0;o<s.length;o++){const t=s[o];for(const r in t)if(r==="class")n.class!==t.class&&(n.class=Ye([n.class,t.class]));else if(r==="style")n.style=ts([n.style,t.style]);else if(Ot(r)){const l=n[r],c=t[r];c&&l!==c&&!(ie(l)&&l.includes(c))&&(n[r]=l?[].concat(l,c):c)}else r!==""&&(n[r]=t[r])}return n}function $s(s,n,o,t=null){Ms(s,n,7,[o,t])}const j8=ly();let G8=0;function W8(s,n,o){const t=s.type,r=(n?n.appContext:s.appContext)||j8,l={uid:G8++,vnode:s,type:t,parent:n,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,scope:new pu(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:n?n.provides:Object.create(r.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:sy(t,r),emitsOptions:Nu(t,r),emit:null,emitted:null,propsDefaults:Ue,inheritAttrs:t.inheritAttrs,ctx:Ue,data:Ue,props:Ue,attrs:Ue,slots:Ue,refs:Ue,setupState:Ue,setupContext:null,suspense:o,suspenseId:o?o.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return l.ctx=u8(l),l.root=n?n.root:l,l.emit=Gm.bind(null,l),s.ce&&s.ce(l),l}let ze=null;const xs=()=>ze||Xe,Mo=s=>{ze=s,s.scope.on()},ro=()=>{ze&&ze.scope.off(),ze=null},z8=Nn("slot,component");function na(s,n){const o=n.isNativeTag||ru;(z8(s)||o(s))&&L("Do not use built-in or reserved HTML elements as component id: "+s)}function uy(s){return s.vnode.shapeFlag&4}let bt=!1;function K8(s,n=!1){bt=n;const{props:o,children:t}=s.vnode,r=uy(s);A8(s,o,r,n),R8(s,t);const l=r?Y8(s,n):void 0;return bt=!1,l}function Y8(s,n){var o;const t=s.type;{if(t.name&&na(t.name,s.appContext.config),t.components){const l=Object.keys(t.components);for(let c=0;c<l.length;c++)na(l[c],s.appContext.config)}if(t.directives){const l=Object.keys(t.directives);for(let c=0;c<l.length;c++)Yu(l[c])}t.compilerOptions&&Z8()&&L('"compilerOptions" is only supported when using a build of Vue that includes the runtime compiler. Since you are using a runtime-only build, the options should be passed via your build tool config instead.')}s.accessCache=Object.create(null),s.proxy=Gr(new Proxy(s.ctx,Ju)),y8(s);const{setup:r}=t;if(r){const l=s.setupContext=r.length>1?dy(s):null;Mo(s),po();const c=un(r,s,0,[ko(s.props),l]);if(uo(),ro(),qa(c)){if(c.then(ro,ro),n)return c.then(i=>{ii(s,i,n)}).catch(i=>{Wr(i,s,0)});if(s.asyncDep=c,!s.suspense){const i=(o=t.name)!==null&&o!==void 0?o:"Anonymous";L(`Component <${i}>: setup function returned a promise, but no <Suspense> boundary was found in the parent component tree. A component with async setup() must be nested in a <Suspense> in order to be rendered.`)}}else ii(s,c,n)}else yy(s,n)}function ii(s,n,o){de(n)?s.type.__ssrInlineRender?s.ssrRender=n:s.render=n:Le(n)?(mn(n)&&L("setup() should not return VNodes directly - return a render function instead."),s.devtoolsRawSetupState=n,s.setupState=Du(n),d8(s)):n!==void 0&&L(`setup() should return an object. Received: ${n===null?"null":typeof n}`),yy(s,o)}let oa;const Z8=()=>!oa;function yy(s,n,o){const t=s.type;if(!s.render){if(!n&&oa&&!t.render){const r=t.template||oc(s).template;if(r){on(s,"compile");const{isCustomElement:l,compilerOptions:c}=s.appContext.config,{delimiters:i,compilerOptions:p}=t,u=We(We({isCustomElement:l,delimiters:i},c),p);t.render=oa(r,u),tn(s,"compile")}}s.render=t.render||Bs}Mo(s),po(),m8(s),uo(),ro(),!t.render&&s.render===Bs&&!n&&(t.template?L('Component provided template option but runtime compilation is not supported in this build of Vue. Configure your bundler to alias "vue" to "vue/dist/vue.esm-bundler.js".'):L("Component is missing template or render function."))}function Q8(s){return new Proxy(s.attrs,{get(n,o){return kr(),vs(s,"get","$attrs"),n[o]},set(){return L("setupContext.attrs is readonly."),!1},deleteProperty(){return L("setupContext.attrs is readonly."),!1}})}function dy(s){const n=t=>{if(s.exposed&&L("expose() should be called only once per setup()."),t!=null){let r=typeof t;r==="object"&&(ie(t)?r="array":Ie(t)&&(r="ref")),r!=="object"&&L(`expose() should be passed a plain object, received ${r}.`)}s.exposed=t||{}};let o;return Object.freeze({get attrs(){return o||(o=Q8(s))},get slots(){return ko(s.slots)},get emit(){return(t,...r)=>s.emit(t,...r)},expose:n})}function sl(s){if(s.exposed)return s.exposeProxy||(s.exposeProxy=new Proxy(Du(Gr(s.exposed)),{get(n,o){if(o in n)return n[o];if(o in to)return to[o](s)},has(n,o){return o in n||o in to}}))}const J8=/(?:^|[-_])(\w)/g,X8=s=>s.replace(J8,n=>n.toUpperCase()).replace(/[-_]/g,"");function kt(s,n=!0){return de(s)?s.displayName||s.name:s.name||n&&s.__name}function nl(s,n,o=!1){let t=kt(n);if(!t&&n.__file){const r=n.__file.match(/([^/\\]+)\.\w+$/);r&&(t=r[1])}if(!t&&s&&s.parent){const r=l=>{for(const c in l)if(l[c]===n)return c};t=r(s.components||s.parent.type.components)||r(s.appContext.components)}return t?X8(t):o?"App":"Anonymous"}function fy(s){return de(s)&&"__vccOpts"in s}const F=(s,n)=>Em(s,n,bt);function eh(){return sh().slots}function sh(){const s=xs();return s||L("useContext() called without active instance."),s.setupContext||(s.setupContext=dy(s))}function fs(s,n,o){const t=arguments.length;return t===2?Le(n)&&!ie(n)?mn(n)?R(s,null,[n]):R(s,n):R(s,null,n):(t>3?o=Array.prototype.slice.call(arguments,2):t===3&&mn(o)&&(o=[o]),R(s,n,o))}const nh=Symbol("ssrContext"),oh=()=>{{const s=I(nh);return s||L("Server rendering context not provided. Make sure to only call useSSRContext() conditionally in the server build."),s}};function fl(s){return!!(s&&s.__v_isShallow)}function th(){if(typeof window>"u")return;const s={style:"color:#3ba776"},n={style:"color:#0b1bc9"},o={style:"color:#b62e24"},t={style:"color:#9d288c"},r={header(d){return Le(d)?d.__isVue?["div",s,"VueInstance"]:Ie(d)?["div",{},["span",s,y(d)],"<",i(d.value),">"]:no(d)?["div",{},["span",s,fl(d)?"ShallowReactive":"Reactive"],"<",i(d),`>${On(d)?" (readonly)":""}`]:On(d)?["div",{},["span",s,fl(d)?"ShallowReadonly":"Readonly"],"<",i(d),">"]:null:null},hasBody(d){return d&&d.__isVue},body(d){if(d&&d.__isVue)return["div",{},...l(d.$)]}};function l(d){const f=[];d.type.props&&d.props&&f.push(c("props",fe(d.props))),d.setupState!==Ue&&f.push(c("setup",d.setupState)),d.data!==Ue&&f.push(c("data",fe(d.data)));const h=p(d,"computed");h&&f.push(c("computed",h));const m=p(d,"inject");return m&&f.push(c("injected",m)),f.push(["div",{},["span",{style:t.style+";opacity:0.66"},"$ (internal): "],["object",{object:d}]]),f}function c(d,f){return f=We({},f),Object.keys(f).length?["div",{style:"line-height:1.25em;margin-bottom:0.6em"},["div",{style:"color:#476582"},d],["div",{style:"padding-left:1.25em"},...Object.keys(f).map(h=>["div",{},["span",t,h+": "],i(f[h],!1)])]]:["span",{}]}function i(d,f=!0){return typeof d=="number"?["span",n,d]:typeof d=="string"?["span",o,JSON.stringify(d)]:typeof d=="boolean"?["span",t,d]:Le(d)?["object",{object:f?fe(d):d}]:["span",o,String(d)]}function p(d,f){const h=d.type;if(de(h))return;const m={};for(const g in d.ctx)u(h,g,f)&&(m[g]=d.ctx[g]);return m}function u(d,f,h){const m=d[h];if(ie(m)&&m.includes(f)||Le(m)&&f in m||d.extends&&u(d.extends,f,h)||d.mixins&&d.mixins.some(g=>u(g,f,h)))return!0}function y(d){return fl(d)?"ShallowRef":d.effect?"ComputedRef":"Ref"}window.devtoolsFormatters?window.devtoolsFormatters.push(r):window.devtoolsFormatters=[r]}const Rr="3.2.47",rh="http://www.w3.org/2000/svg",Kn=typeof document<"u"?document:null,pi=Kn&&Kn.createElement("template"),lh={insert:(s,n,o)=>{n.insertBefore(s,o||null)},remove:s=>{const n=s.parentNode;n&&n.removeChild(s)},createElement:(s,n,o,t)=>{const r=n?Kn.createElementNS(rh,s):Kn.createElement(s,o?{is:o}:void 0);return s==="select"&&t&&t.multiple!=null&&r.setAttribute("multiple",t.multiple),r},createText:s=>Kn.createTextNode(s),createComment:s=>Kn.createComment(s),setText:(s,n)=>{s.nodeValue=n},setElementText:(s,n)=>{s.textContent=n},parentNode:s=>s.parentNode,nextSibling:s=>s.nextSibling,querySelector:s=>Kn.querySelector(s),setScopeId(s,n){s.setAttribute(n,"")},insertStaticContent(s,n,o,t,r,l){const c=o?o.previousSibling:n.lastChild;if(r&&(r===l||r.nextSibling))for(;n.insertBefore(r.cloneNode(!0),o),!(r===l||!(r=r.nextSibling)););else{pi.innerHTML=t?`<svg>${s}</svg>`:s;const i=pi.content;if(t){const p=i.firstChild;for(;p.firstChild;)i.appendChild(p.firstChild);i.removeChild(p)}n.insertBefore(i,o)}return[c?c.nextSibling:n.firstChild,o?o.previousSibling:n.lastChild]}};function ah(s,n,o){const t=s._vtc;t&&(n=(n?[n,...t]:[...t]).join(" ")),n==null?s.removeAttribute("class"):o?s.setAttribute("class",n):s.className=n}function ch(s,n,o){const t=s.style,r=je(o);if(o&&!r){if(n&&!je(n))for(const l in n)o[l]==null&&ta(t,l,"");for(const l in o)ta(t,l,o[l])}else{const l=t.display;r?n!==o&&(t.cssText=o):n&&s.removeAttribute("style"),"_vod"in s&&(t.display=l)}}const ih=/[^\\];\s*$/,ui=/\s*!important$/;function ta(s,n,o){if(ie(o))o.forEach(t=>ta(s,n,t));else if(o==null&&(o=""),ih.test(o)&&L(`Unexpected semicolon at the end of '${n}' style value: '${o}'`),n.startsWith("--"))s.setProperty(n,o);else{const t=ph(s,n);ui.test(o)?s.setProperty(yn(t),o.replace(ui,""),"important"):s[t]=o}}const yi=["Webkit","Moz","ms"],ml={};function ph(s,n){const o=ml[n];if(o)return o;let t=Xs(n);if(t!=="filter"&&t in s)return ml[n]=t;t=co(t);for(let r=0;r<yi.length;r++){const l=yi[r]+t;if(l in s)return ml[n]=l}return n}const di="http://www.w3.org/1999/xlink";function uh(s,n,o,t,r){if(t&&n.startsWith("xlink:"))o==null?s.removeAttributeNS(di,n.slice(6,n.length)):s.setAttributeNS(di,n,o);else{const l=Ff(n);o==null||l&&!ou(o)?s.removeAttribute(n):s.setAttribute(n,l?"":o)}}function yh(s,n,o,t,r,l,c){if(n==="innerHTML"||n==="textContent"){t&&c(t,r,l),s[n]=o??"";return}if(n==="value"&&s.tagName!=="PROGRESS"&&!s.tagName.includes("-")){s._value=o;const p=o??"";(s.value!==p||s.tagName==="OPTION")&&(s.value=p),o==null&&s.removeAttribute(n);return}let i=!1;if(o===""||o==null){const p=typeof s[n];p==="boolean"?o=ou(o):o==null&&p==="string"?(o="",i=!0):p==="number"&&(o=0,i=!0)}try{s[n]=o}catch(p){i||L(`Failed setting prop "${n}" on <${s.tagName.toLowerCase()}>: value ${o} is invalid.`,p)}i&&s.removeAttribute(n)}function Eo(s,n,o,t){s.addEventListener(n,o,t)}function dh(s,n,o,t){s.removeEventListener(n,o,t)}function fh(s,n,o,t,r=null){const l=s._vei||(s._vei={}),c=l[n];if(t&&c)c.value=t;else{const[i,p]=mh(n);if(t){const u=l[n]=gh(t,r);Eo(s,i,u,p)}else c&&(dh(s,i,c,p),l[n]=void 0)}}const fi=/(?:Once|Passive|Capture)$/;function mh(s){let n;if(fi.test(s)){n={};let t;for(;t=s.match(fi);)s=s.slice(0,s.length-t[0].length),n[t[0].toLowerCase()]=!0}return[s[2]===":"?s.slice(3):yn(s.slice(2)),n]}let hl=0;const hh=Promise.resolve(),_h=()=>hl||(hh.then(()=>hl=0),hl=Date.now());function gh(s,n){const o=t=>{if(!t._vts)t._vts=Date.now();else if(t._vts<=o.attached)return;Ms(Bh(t,o.value),n,5,[t])};return o.value=s,o.attached=_h(),o}function Bh(s,n){if(ie(n)){const o=s.stopImmediatePropagation;return s.stopImmediatePropagation=()=>{o.call(s),s._stopped=!0},n.map(t=>r=>!r._stopped&&t&&t(r))}else return n}const mi=/^on[a-z]/,Ah=(s,n,o,t,r=!1,l,c,i,p)=>{n==="class"?ah(s,t,r):n==="style"?ch(s,o,t):Ot(n)?gr(n)||fh(s,n,o,t,c):(n[0]==="."?(n=n.slice(1),!0):n[0]==="^"?(n=n.slice(1),!1):vh(s,n,t,r))?yh(s,n,t,l,c,i,p):(n==="true-value"?s._trueValue=t:n==="false-value"&&(s._falseValue=t),uh(s,n,t,r))};function vh(s,n,o,t){return t?!!(n==="innerHTML"||n==="textContent"||n in s&&mi.test(n)&&de(o)):n==="spellcheck"||n==="draggable"||n==="translate"||n==="form"||n==="list"&&s.tagName==="INPUT"||n==="type"&&s.tagName==="TEXTAREA"||mi.test(n)&&je(o)?!1:n in s}const Bn="transition",Vo="animation",my={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},Ch=We({},e8.props,my),Hn=(s,n=[])=>{ie(s)?s.forEach(o=>o(...n)):s&&s(...n)},hi=s=>s?ie(s)?s.some(n=>n.length>1):s.length>1:!1;function Eh(s){const n={};for(const J in s)J in my||(n[J]=s[J]);if(s.css===!1)return n;const{name:o="v",type:t,duration:r,enterFromClass:l=`${o}-enter-from`,enterActiveClass:c=`${o}-enter-active`,enterToClass:i=`${o}-enter-to`,appearFromClass:p=l,appearActiveClass:u=c,appearToClass:y=i,leaveFromClass:d=`${o}-leave-from`,leaveActiveClass:f=`${o}-leave-active`,leaveToClass:h=`${o}-leave-to`}=s,m=bh(r),g=m&&m[0],B=m&&m[1],{onBeforeEnter:k,onEnter:v,onEnterCancelled:E,onLeave:w,onLeaveCancelled:T,onBeforeAppear:U=k,onAppear:z=v,onAppearCancelled:$=E}=n,G=(J,Ce,Te)=>{vn(J,Ce?y:i),vn(J,Ce?u:c),Te&&Te()},oe=(J,Ce)=>{J._isLeaving=!1,vn(J,d),vn(J,h),vn(J,f),Ce&&Ce()},ue=J=>(Ce,Te)=>{const xe=J?z:v,He=()=>G(Ce,J,Te);Hn(xe,[Ce,He]),_i(()=>{vn(Ce,J?p:l),rn(Ce,J?y:i),hi(xe)||gi(Ce,t,g,He)})};return We(n,{onBeforeEnter(J){Hn(k,[J]),rn(J,l),rn(J,c)},onBeforeAppear(J){Hn(U,[J]),rn(J,p),rn(J,u)},onEnter:ue(!1),onAppear:ue(!0),onLeave(J,Ce){J._isLeaving=!0;const Te=()=>oe(J,Ce);rn(J,d),_y(),rn(J,f),_i(()=>{J._isLeaving&&(vn(J,d),rn(J,h),hi(w)||gi(J,t,B,Te))}),Hn(w,[J,Te])},onEnterCancelled(J){G(J,!1),Hn(E,[J])},onAppearCancelled(J){G(J,!0),Hn($,[J])},onLeaveCancelled(J){oe(J),Hn(T,[J])}})}function bh(s){if(s==null)return null;if(Le(s))return[_l(s.enter),_l(s.leave)];{const n=_l(s);return[n,n]}}function _l(s){const n=Lf(s);return Sm(n,"<transition> explicit duration"),n}function rn(s,n){n.split(/\s+/).forEach(o=>o&&s.classList.add(o)),(s._vtc||(s._vtc=new Set)).add(n)}function vn(s,n){n.split(/\s+/).forEach(t=>t&&s.classList.remove(t));const{_vtc:o}=s;o&&(o.delete(n),o.size||(s._vtc=void 0))}function _i(s){requestAnimationFrame(()=>{requestAnimationFrame(s)})}let kh=0;function gi(s,n,o,t){const r=s._endId=++kh,l=()=>{r===s._endId&&t()};if(o)return setTimeout(l,o);const{type:c,timeout:i,propCount:p}=hy(s,n);if(!c)return t();const u=c+"end";let y=0;const d=()=>{s.removeEventListener(u,f),l()},f=h=>{h.target===s&&++y>=p&&d()};setTimeout(()=>{y<p&&d()},i+1),s.addEventListener(u,f)}function hy(s,n){const o=window.getComputedStyle(s),t=m=>(o[m]||"").split(", "),r=t(`${Bn}Delay`),l=t(`${Bn}Duration`),c=Bi(r,l),i=t(`${Vo}Delay`),p=t(`${Vo}Duration`),u=Bi(i,p);let y=null,d=0,f=0;n===Bn?c>0&&(y=Bn,d=c,f=l.length):n===Vo?u>0&&(y=Vo,d=u,f=p.length):(d=Math.max(c,u),y=d>0?c>u?Bn:Vo:null,f=y?y===Bn?l.length:p.length:0);const h=y===Bn&&/\b(transform|all)(,|$)/.test(t(`${Bn}Property`).toString());return{type:y,timeout:d,propCount:f,hasTransform:h}}function Bi(s,n){for(;s.length<n.length;)s=s.concat(s);return Math.max(...n.map((o,t)=>Ai(o)+Ai(s[t])))}function Ai(s){return Number(s.slice(0,-1).replace(",","."))*1e3}function _y(){return document.body.offsetHeight}const gy=new WeakMap,By=new WeakMap,Ay={name:"TransitionGroup",props:We({},Ch,{tag:String,moveClass:String}),setup(s,{slots:n}){const o=xs(),t=Vu();let r,l;return Qr(()=>{if(!r.length)return;const c=s.moveClass||`${s.name||"v"}-move`;if(!Fh(r[0].el,o.vnode.el,c))return;r.forEach(Sh),r.forEach(Rh);const i=r.filter(xh);_y(),i.forEach(p=>{const u=p.el,y=u.style;rn(u,c),y.transform=y.webkitTransform=y.transitionDuration="";const d=u._moveCb=f=>{f&&f.target!==u||(!f||/transform$/.test(f.propertyName))&&(u.removeEventListener("transitionend",d),u._moveCb=null,vn(u,c))};u.addEventListener("transitionend",d)})}),()=>{const c=fe(s),i=Eh(c);let p=c.tag||Me;r=l,l=n.default?sc(n.default()):[];for(let u=0;u<l.length;u++){const y=l[u];y.key!=null?To(y,Ct(y,i,t,o)):L("<TransitionGroup> children must be keyed.")}if(r)for(let u=0;u<r.length;u++){const y=r[u];To(y,Ct(y,i,t,o)),gy.set(y,y.el.getBoundingClientRect())}return R(p,null,l)}}},Dh=s=>delete s.mode;Ay.props;const wh=Ay;function Sh(s){const n=s.el;n._moveCb&&n._moveCb(),n._enterCb&&n._enterCb()}function Rh(s){By.set(s,s.el.getBoundingClientRect())}function xh(s){const n=gy.get(s),o=By.get(s),t=n.left-o.left,r=n.top-o.top;if(t||r){const l=s.el.style;return l.transform=l.webkitTransform=`translate(${t}px,${r}px)`,l.transitionDuration="0s",s}}function Fh(s,n,o){const t=s.cloneNode();s._vtc&&s._vtc.forEach(c=>{c.split(/\s+/).forEach(i=>i&&t.classList.remove(i))}),o.split(/\s+/).forEach(c=>c&&t.classList.add(c)),t.style.display="none";const r=n.nodeType===1?n:n.parentNode;r.appendChild(t);const{hasTransform:l}=hy(t);return r.removeChild(t),l}const vi=s=>{const n=s.props["onUpdate:modelValue"]||!1;return ie(n)?o=>kn(n,o):n};function $h(s){s.target.composing=!0}function Ci(s){const n=s.target;n.composing&&(n.composing=!1,n.dispatchEvent(new Event("input")))}const Ih={created(s,{modifiers:{lazy:n,trim:o,number:t}},r){s._assign=vi(r);const l=t||r.props&&r.props.type==="number";Eo(s,n?"change":"input",c=>{if(c.target.composing)return;let i=s.value;o&&(i=i.trim()),l&&(i=ql(i)),s._assign(i)}),o&&Eo(s,"change",()=>{s.value=s.value.trim()}),n||(Eo(s,"compositionstart",$h),Eo(s,"compositionend",Ci),Eo(s,"change",Ci))},mounted(s,{value:n}){s.value=n??""},beforeUpdate(s,{value:n,modifiers:{lazy:o,trim:t,number:r}},l){if(s._assign=vi(l),s.composing||document.activeElement===s&&s.type!=="range"&&(o||t&&s.value.trim()===n||(r||s.type==="number")&&ql(s.value)===n))return;const c=n??"";s.value!==c&&(s.value=c)}},Th={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},Ei=(s,n)=>o=>{if(!("key"in o))return;const t=yn(o.key);if(n.some(r=>r===t||Th[r]===t))return s(o)},vy={beforeMount(s,{value:n},{transition:o}){s._vod=s.style.display==="none"?"":s.style.display,o&&n?o.beforeEnter(s):jo(s,n)},mounted(s,{value:n},{transition:o}){o&&n&&o.enter(s)},updated(s,{value:n,oldValue:o},{transition:t}){!n!=!o&&(t?n?(t.beforeEnter(s),jo(s,!0),t.enter(s)):t.leave(s,()=>{jo(s,!1)}):jo(s,n))},beforeUnmount(s,{value:n}){jo(s,n)}};function jo(s,n){s.style.display=n?s._vod:"none"}const Mh=We({patchProp:Ah},lh);let bi;function Ph(){return bi||(bi=T8(Mh))}const Oh=(...s)=>{const n=Ph().createApp(...s);Lh(n),Nh(n);const{mount:o}=n;return n.mount=t=>{const r=qh(t);if(!r)return;const l=n._component;!de(l)&&!l.render&&!l.template&&(l.template=r.innerHTML),r.innerHTML="";const c=o(r,!1,r instanceof SVGElement);return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),c},n};function Lh(s){Object.defineProperty(s.config,"isNativeTag",{value:n=>nu(n)||Rf(n),writable:!1})}function Nh(s){{const n=s.config.isCustomElement;Object.defineProperty(s.config,"isCustomElement",{get(){return n},set(){L("The `isCustomElement` config option is deprecated. Use `compilerOptions.isCustomElement` instead.")}});const o=s.config.compilerOptions,t='The `compilerOptions` config option is only respected when using a build of Vue.js that includes the runtime compiler (aka "full build"). Since you are using the runtime-only build, `compilerOptions` must be passed to `@vue/compiler-dom` in the build setup instead.\n- For vue-loader: pass it via vue-loader\'s `compilerOptions` loader option.\n- For vue-cli: see https://cli.vuejs.org/guide/webpack.html#modifying-options-of-a-loader\n- For vite: pass it via @vitejs/plugin-vue options. See https://github.com/vitejs/vite/tree/main/packages/plugin-vue#example-for-passing-options-to-vuecompiler-dom';Object.defineProperty(s.config,"compilerOptions",{get(){return L(t),o},set(){L(t)}})}}function qh(s){if(je(s)){const n=document.querySelector(s);return n||L(`Failed to mount app: mount target selector "${s}" returned null.`),n}return window.ShadowRoot&&s instanceof window.ShadowRoot&&s.mode==="closed"&&L('mounting on a ShadowRoot with `{mode: "closed"}` may lead to unpredictable bugs'),s}function Uh(){th()}Uh();function ra(s,n={},o){for(const t in s){const r=s[t],l=o?`${o}:${t}`:t;typeof r=="object"&&r!==null?ra(r,n,l):typeof r=="function"&&(n[l]=r)}return n}function Hh(s,n){return s.reduce((o,t)=>o.then(()=>t.apply(void 0,n)),Promise.resolve())}function Vh(s,n){return Promise.all(s.map(o=>o.apply(void 0,n)))}function gl(s,n){for(const o of s)o(n)}class jh{constructor(){this._hooks={},this._before=void 0,this._after=void 0,this._deprecatedMessages=void 0,this._deprecatedHooks={},this.hook=this.hook.bind(this),this.callHook=this.callHook.bind(this),this.callHookWith=this.callHookWith.bind(this)}hook(n,o,t={}){if(!n||typeof o!="function")return()=>{};const r=n;let l;for(;this._deprecatedHooks[n];)l=this._deprecatedHooks[n],n=l.to;if(l&&!t.allowDeprecated){let c=l.message;c||(c=`${r} hook has been deprecated`+(l.to?`, please use ${l.to}`:"")),this._deprecatedMessages||(this._deprecatedMessages=new Set),this._deprecatedMessages.has(c)||(console.warn(c),this._deprecatedMessages.add(c))}return this._hooks[n]=this._hooks[n]||[],this._hooks[n].push(o),()=>{o&&(this.removeHook(n,o),o=void 0)}}hookOnce(n,o){let t,r=(...l)=>(typeof t=="function"&&t(),t=void 0,r=void 0,o(...l));return t=this.hook(n,r),t}removeHook(n,o){if(this._hooks[n]){const t=this._hooks[n].indexOf(o);t!==-1&&this._hooks[n].splice(t,1),this._hooks[n].length===0&&delete this._hooks[n]}}deprecateHook(n,o){this._deprecatedHooks[n]=typeof o=="string"?{to:o}:o;const t=this._hooks[n]||[];this._hooks[n]=void 0;for(const r of t)this.hook(n,r)}deprecateHooks(n){Object.assign(this._deprecatedHooks,n);for(const o in n)this.deprecateHook(o,n[o])}addHooks(n){const o=ra(n),t=Object.keys(o).map(r=>this.hook(r,o[r]));return()=>{for(const r of t.splice(0,t.length))r()}}removeHooks(n){const o=ra(n);for(const t in o)this.removeHook(t,o[t])}callHook(n,...o){return this.callHookWith(Hh,n,...o)}callHookParallel(n,...o){return this.callHookWith(Vh,n,...o)}callHookWith(n,o,...t){const r=this._before||this._after?{name:o,args:t,context:{}}:void 0;this._before&&gl(this._before,r);const l=n(this._hooks[o]||[],t);return l instanceof Promise?l.finally(()=>{this._after&&r&&gl(this._after,r)}):(this._after&&r&&gl(this._after,r),l)}beforeEach(n){return this._before=this._before||[],this._before.push(n),()=>{const o=this._before.indexOf(n);o!==-1&&this._before.splice(o,1)}}afterEach(n){return this._after=this._after||[],this._after.push(n),()=>{const o=this._after.indexOf(n);o!==-1&&this._after.splice(o,1)}}}function Gh(){return new jh}function Wh(s){return Array.isArray(s)?s:[s]}const Cy=["title","script","style","noscript"],lc=["base","meta","link","style","script","noscript"],zh=["title","titleTemplate","templateParams","base","htmlAttrs","bodyAttrs","meta","link","style","script","noscript"],Kh=["base","title","titleTemplate","bodyAttrs","htmlAttrs"],Yh=["tagPosition","tagPriority","tagDuplicateStrategy","innerHTML","textContent"];function Ey(s){let n=9;for(let o=0;o<s.length;)n=Math.imul(n^s.charCodeAt(o++),9**9);return((n^n>>>9)+65536).toString(16).substring(1,8).toLowerCase()}function xr(s){return Ey(`${s.tag}:${s.textContent||s.innerHTML||""}:${Object.entries(s.props).map(([n,o])=>`${n}:${String(o)}`).join(",")}`)}function Zh(s){let n=9;for(const o of s)for(let t=0;t<o.length;)n=Math.imul(n^o.charCodeAt(t++),9**9);return((n^n>>>9)+65536).toString(16).substring(1,8).toLowerCase()}function by(s,n){const{props:o,tag:t}=s;if(Kh.includes(t))return t;if(t==="link"&&o.rel==="canonical")return"canonical";if(o.charset)return"charset";const r=["id"];t==="meta"&&r.push("name","property","http-equiv");for(const l of r)if(typeof o[l]<"u"){const c=String(o[l]);return n&&!n(c)?!1:`${t}:${l}:${c}`}return!1}const nr=(s,n=!1,o)=>{const{tag:t,$el:r}=s;r&&(Object.entries(t.props).forEach(([l,c])=>{c=String(c);const i=`attr:${l}`;if(l==="class"){if(!c)return;for(const p of c.split(" ")){const u=`${i}:${p}`;o&&o(s,u,()=>r.classList.remove(p)),r.classList.contains(p)||r.classList.add(p)}return}o&&!l.startsWith("data-h-")&&o(s,i,()=>r.removeAttribute(l)),(n||r.getAttribute(l)!==c)&&r.setAttribute(l,c)}),Cy.includes(t.tag)&&(t.textContent&&t.textContent!==r.textContent?r.textContent=t.textContent:t.innerHTML&&t.innerHTML!==r.innerHTML&&(r.innerHTML=t.innerHTML)))};let Go=!1;async function ky(s,n={}){var f,h;const o={shouldRender:!0};if(await s.hooks.callHook("dom:beforeRender",o),!o.shouldRender)return;const t=n.document||s.resolvedOptions.document||window.document,r=(await s.resolveTags()).map(i);if(s.resolvedOptions.experimentalHashHydration&&(Go=Go||s._hash||!1,Go)){const m=Zh(r.map(g=>g.tag._h));if(Go===m)return;Go=m}const l=s._popSideEffectQueue();s.headEntries().map(m=>m._sde).forEach(m=>{Object.entries(m).forEach(([g,B])=>{l[g]=B})});const c=(m,g,B)=>{g=`${m.renderId}:${g}`,m.entry&&(m.entry._sde[g]=B),delete l[g]};function i(m){const g=s.headEntries().find(k=>k._i===m._e),B={renderId:m._d||xr(m),$el:null,shouldRender:!0,tag:m,entry:g,markSideEffect:(k,v)=>c(B,k,v)};return B}const p=[],u={body:[],head:[]},y=m=>{s._elMap[m.renderId]=m.$el,p.push(m),c(m,"el",()=>{var g;(g=m.$el)==null||g.remove(),delete s._elMap[m.renderId]})};for(const m of r){if(await s.hooks.callHook("dom:beforeRenderTag",m),!m.shouldRender)continue;const{tag:g}=m;if(g.tag==="title"){t.title=g.textContent||"",p.push(m);continue}if(g.tag==="htmlAttrs"||g.tag==="bodyAttrs"){m.$el=t[g.tag==="htmlAttrs"?"documentElement":"body"],nr(m,!1,c),p.push(m);continue}if(m.$el=s._elMap[m.renderId],!m.$el&&g.key&&(m.$el=t.querySelector(`${(f=g.tagPosition)!=null&&f.startsWith("body")?"body":"head"} > ${g.tag}[data-h-${g._h}]`)),m.$el){m.tag._d&&nr(m),y(m);continue}u[(h=g.tagPosition)!=null&&h.startsWith("body")?"body":"head"].push(m)}const d={bodyClose:void 0,bodyOpen:void 0,head:void 0};Object.entries(u).forEach(([m,g])=>{var k;if(!g.length)return;const B=(k=t==null?void 0:t[m])==null?void 0:k.children;if(B){for(const v of[...B].reverse()){const E=v.tagName.toLowerCase();if(!lc.includes(E))continue;const w=v.getAttributeNames().reduce(($,G)=>({...$,[G]:v.getAttribute(G)}),{}),T={tag:E,props:w};v.innerHTML&&(T.innerHTML=v.innerHTML);const U=xr(T);let z=g.findIndex($=>($==null?void 0:$.renderId)===U);if(z===-1){const $=by(T);z=g.findIndex(G=>(G==null?void 0:G.tag._d)&&G.tag._d===$)}if(z!==-1){const $=g[z];$.$el=v,nr($),y($),delete g[z]}}g.forEach(v=>{const E=v.tag.tagPosition||"head";d[E]=d[E]||t.createDocumentFragment(),v.$el||(v.$el=t.createElement(v.tag.tag),nr(v,!0)),d[E].appendChild(v.$el),y(v)})}}),d.head&&t.head.appendChild(d.head),d.bodyOpen&&t.body.insertBefore(d.bodyOpen,t.body.firstChild),d.bodyClose&&t.body.appendChild(d.bodyClose);for(const m of p)await s.hooks.callHook("dom:renderTag",m);Object.values(l).forEach(m=>m())}let Bl=null;async function Dy(s,n={}){function o(){return Bl=null,ky(s,n)}const t=n.delayFn||(r=>setTimeout(r,10));return Bl=Bl||new Promise(r=>t(()=>r(o())))}const Qh=s=>({hooks:{"entries:updated":function(n){if(typeof(s==null?void 0:s.document)>"u"&&typeof window>"u")return;let o=s==null?void 0:s.delayFn;!o&&typeof requestAnimationFrame<"u"&&(o=requestAnimationFrame),Dy(n,{document:(s==null?void 0:s.document)||window.document,delayFn:o})}}});function Jh(s){var n;return((n=s==null?void 0:s.head.querySelector('meta[name="unhead:ssr"]'))==null?void 0:n.getAttribute("content"))||!1}const ki={critical:2,high:9,low:12,base:-1,title:1,meta:10};function Di(s){if(typeof s.tagPriority=="number")return s.tagPriority;if(s.tag==="meta"){if(s.props.charset)return-2;if(s.props["http-equiv"]==="content-security-policy")return 0}const n=s.tagPriority||s.tag;return n in ki?ki[n]:10}const Xh=[{prefix:"before:",offset:-1},{prefix:"after:",offset:1}];function e5(){return{hooks:{"tags:resolve":s=>{const n=o=>{var t;return(t=s.tags.find(r=>r._d===o))==null?void 0:t._p};for(const{prefix:o,offset:t}of Xh)for(const r of s.tags.filter(l=>typeof l.tagPriority=="string"&&l.tagPriority.startsWith(o))){const l=n(r.tagPriority.replace(o,""));typeof l<"u"&&(r._p=l+t)}s.tags.sort((o,t)=>o._p-t._p).sort((o,t)=>Di(o)-Di(t))}}}}const wi=(s,n)=>s==null?n||null:typeof s=="function"?s(n):s.replace("%s",n??""),s5=()=>({hooks:{"tags:resolve":s=>{const{tags:n}=s;let o=n.findIndex(r=>r.tag==="titleTemplate");const t=n.findIndex(r=>r.tag==="title");if(t!==-1&&o!==-1){const r=wi(n[o].textContent,n[t].textContent);r!==null?n[t].textContent=r||n[t].textContent:delete n[t]}else if(o!==-1){const r=wi(n[o].textContent);r!==null&&(n[o].textContent=r,n[o].tag="title",o=-1)}o!==-1&&delete n[o],s.tags=n.filter(Boolean)}}}),n5=()=>({hooks:{"tag:normalise":function({tag:s}){typeof s.props.body<"u"&&(s.tagPosition="bodyClose",delete s.props.body)}}}),wy=typeof window<"u",o5=()=>({hooks:{"tag:normalise":s=>{var l,c;const{tag:n,entry:o,resolvedOptions:t}=s;t.experimentalHashHydration===!0&&(n._h=xr(n));const r=typeof n.props._dynamic<"u";!lc.includes(n.tag)||!n.key||wy||(c=(l=Ry())==null?void 0:l.resolvedOptions)!=null&&c.document||(o._m==="server"||r)&&(n._h=n._h||xr(n),n.props[`data-h-${n._h}`]="")},"tags:resolve":s=>{s.tags=s.tags.map(n=>(delete n.props._dynamic,n))}}}),Si=["script","link","bodyAttrs"],t5=()=>{const s=(n,o)=>{const t={},r={};Object.entries(o.props).forEach(([c,i])=>{c.startsWith("on")&&typeof i=="function"?r[c]=i:t[c]=i});let l;return n==="dom"&&o.tag==="script"&&typeof t.src=="string"&&typeof r.onload<"u"&&(l=t.src,delete t.src),{props:t,eventHandlers:r,delayedSrc:l}};return{hooks:{"ssr:render":function(n){n.tags=n.tags.map(o=>(!Si.includes(o.tag)||!Object.entries(o.props).find(([t,r])=>t.startsWith("on")&&typeof r=="function")||(o.props=s("ssr",o).props),o))},"dom:beforeRenderTag":function(n){if(!Si.includes(n.tag.tag)||!Object.entries(n.tag.props).find(([l,c])=>l.startsWith("on")&&typeof c=="function"))return;const{props:o,eventHandlers:t,delayedSrc:r}=s("dom",n.tag);Object.keys(t).length&&(n.tag.props=o,n.tag._eventHandlers=t,n.tag._delayedSrc=r)},"dom:renderTag":function(n){const o=n.$el;if(!n.tag._eventHandlers||!o)return;const t=n.tag.tag==="bodyAttrs"&&typeof window<"u"?window:o;Object.entries(n.tag._eventHandlers).forEach(([r,l])=>{const c=`${n.tag._d||n.tag._p}:${r}`,i=r.slice(2).toLowerCase(),p=`data-h-${i}`;if(n.markSideEffect(c,()=>{}),o.hasAttribute(p))return;const u=l;o.setAttribute(p,""),t.addEventListener(i,u),n.entry&&(n.entry._sde[c]=()=>{t.removeEventListener(i,u),o.removeAttribute(p)})}),n.tag._delayedSrc&&o.setAttribute("src",n.tag._delayedSrc)}}}},r5=["templateParams","htmlAttrs","bodyAttrs"],l5=s=>{s=s||{};const n=s.dedupeKeys||["hid","vmid","key"];return{hooks:{"tag:normalise":function({tag:o}){n.forEach(r=>{o.props[r]&&(o.key=o.props[r],delete o.props[r])});const t=o.key?`${o.tag}:${o.key}`:by(o);t&&(o._d=t)},"tags:resolve":function(o){const t={};o.tags.forEach(l=>{const c=l._d||l._p,i=t[c];if(i){let p=l==null?void 0:l.tagDuplicateStrategy;if(!p&&r5.includes(l.tag)&&(p="merge"),p==="merge"){const y=i.props;["class","style"].forEach(d=>{l.props[d]&&y[d]&&(d==="style"&&!y[d].endsWith(";")&&(y[d]+=";"),l.props[d]=`${y[d]} ${l.props[d]}`)}),t[c].props={...y,...l.props};return}else if(l._e===i._e){i._duped=i._duped||[],l._d=`${i._d}:${i._duped.length+1}`,i._duped.push(l);return}const u=Object.keys(l.props).length;if((u===0||u===1&&typeof l.props["data-h-key"]<"u")&&!l.innerHTML&&!l.textContent){delete t[c];return}}t[c]=l});const r=[];Object.values(t).forEach(l=>{const c=l._duped;delete l._duped,r.push(l),c&&r.push(...c)}),o.tags=r}}}};function Al(s,n){const o=(r,l)=>{let c;return l==="pageTitle"||l==="s"?c=n.pageTitle:l.includes(".")?c=l.split(".").reduce((i,p)=>i[p]||"",n):c=n[l],c||""};let t=s.replace(/%(\w+\.+\w+)/g,o).replace(/%(\w+)/g,o).trim();return n.separator&&(t.endsWith(n.separator)&&(t=t.slice(0,-n.separator.length).trim()),t.startsWith(n.separator)&&(t=t.slice(n.separator.length).trim()),t=t.replace(new RegExp(`\\${n.separator}\\s*\\${n.separator}`,"g"),n.separator)),t}function a5(){return{hooks:{"tags:resolve":s=>{var l;const{tags:n}=s,o=(l=n.find(c=>c.tag==="title"))==null?void 0:l.textContent,t=n.findIndex(c=>c.tag==="templateParams"),r=t!==-1?n[t].textContent:{};r.pageTitle=r.pageTitle||o||"";for(const c of n)["titleTemplate","title"].includes(c.tag)&&typeof c.textContent=="string"?c.textContent=Al(c.textContent,r):c.tag==="meta"&&typeof c.props.content=="string"?c.props.content=Al(c.props.content,r):c.tag==="script"&&["application/json","application/ld+json"].includes(c.props.type)&&typeof c.innerHTML=="string"&&(c.innerHTML=Al(c.innerHTML,r));s.tags=n.filter(c=>c.tag!=="templateParams")}}}}let Sy;const c5=s=>Sy=s,Ry=()=>Sy;async function i5(s,n){const o={tag:s,props:{}};return["title","titleTemplate","templateParams"].includes(s)?(o.textContent=n instanceof Promise?await n:n,o):typeof n=="string"?["script","noscript","style"].includes(s)?(s==="script"&&(/^(https?:)?\/\//.test(n)||n.startsWith("/"))?o.props.src=n:(o.innerHTML=n,o.key=Ey(n)),o):!1:(o.props=await u5(s,{...n}),o.props.children&&(o.props.innerHTML=o.props.children),delete o.props.children,Object.keys(o.props).filter(t=>Yh.includes(t)).forEach(t=>{(!["innerHTML","textContent"].includes(t)||Cy.includes(o.tag))&&(o[t]=o.props[t]),delete o.props[t]}),["innerHTML","textContent"].forEach(t=>{if(o.tag==="script"&&typeof o[t]=="string"&&["application/ld+json","application/json"].includes(o.props.type))try{o[t]=JSON.parse(o[t])}catch{o[t]=""}typeof o[t]=="object"&&(o[t]=JSON.stringify(o[t]))}),o.props.class&&(o.props.class=p5(o.props.class)),o.props.content&&Array.isArray(o.props.content)?o.props.content.map(t=>({...o,props:{...o.props,content:t}})):o)}function p5(s){return typeof s=="object"&&!Array.isArray(s)&&(s=Object.keys(s).filter(n=>s[n])),(Array.isArray(s)?s.join(" "):s).split(" ").filter(n=>n.trim()).filter(Boolean).join(" ")}async function u5(s,n){for(const o of Object.keys(n)){const t=o.startsWith("data-");n[o]instanceof Promise&&(n[o]=await n[o]),String(n[o])==="true"?n[o]=t?"true":"":String(n[o])==="false"&&(t?n[o]="false":delete n[o])}return n}const y5=10;async function d5(s){const n=[];return Object.entries(s.resolvedInput).filter(([o,t])=>typeof t<"u"&&zh.includes(o)).forEach(([o,t])=>{const r=Wh(t);n.push(...r.map(l=>i5(o,l)).flat())}),(await Promise.all(n)).flat().filter(Boolean).map((o,t)=>(o._e=s._i,o._p=(s._i<<y5)+t,o))}const f5=()=>[l5(),e5(),a5(),s5(),o5(),t5(),n5()],m5=(s={})=>[Qh({document:s==null?void 0:s.document,delayFn:s==null?void 0:s.domDelayFn})];function h5(s={}){const n=_5({...s,plugins:[...m5(s),...(s==null?void 0:s.plugins)||[]]});return s.experimentalHashHydration&&n.resolvedOptions.document&&(n._hash=Jh(n.resolvedOptions.document)),c5(n),n}function _5(s={}){let n=[],o={},t=0;const r=Gh();s!=null&&s.hooks&&r.addHooks(s.hooks),s.plugins=[...f5(),...(s==null?void 0:s.plugins)||[]],s.plugins.forEach(i=>i.hooks&&r.addHooks(i.hooks)),s.document=s.document||(wy?document:void 0);const l=()=>r.callHook("entries:updated",c),c={resolvedOptions:s,headEntries(){return n},get hooks(){return r},use(i){i.hooks&&r.addHooks(i.hooks)},push(i,p){const u={_i:t++,input:i,_sde:{}};return p!=null&&p.mode&&(u._m=p==null?void 0:p.mode),p!=null&&p.transform&&(u._t=p==null?void 0:p.transform),n.push(u),l(),{dispose(){n=n.filter(y=>y._i!==u._i?!0:(o={...o,...y._sde||{}},y._sde={},l(),!1))},patch(y){n=n.map(d=>(d._i===u._i&&(u.input=d.input=y,l()),d))}}},async resolveTags(){const i={tags:[],entries:[...n]};await r.callHook("entries:resolve",i);for(const p of i.entries){const u=p._t||(y=>y);p.resolvedInput=u(p.resolvedInput||p.input);for(const y of await d5(p)){const d={tag:y,entry:p,resolvedOptions:c.resolvedOptions};await r.callHook("tag:normalise",d),i.tags.push(d.tag)}}return await r.callHook("tags:resolve",i),i.tags},_popSideEffectQueue(){const i={...o};return o={},i},_elMap:{}};return c.hooks.callHook("init",c),c}function g5(s){return typeof s=="function"?s():D(s)}function Fr(s,n=""){if(s instanceof Promise)return s;const o=g5(s);if(!s||!o)return o;if(Array.isArray(o))return o.map(t=>Fr(t,n));if(typeof o=="object"){let t=!1;const r=Object.fromEntries(Object.entries(o).map(([l,c])=>l==="titleTemplate"||l.startsWith("on")?[l,D(c)]:((typeof c=="function"||Ie(c))&&(t=!0),[l,Fr(c,l)])));return t&&lc.includes(String(n))&&(r._dynamic=!0),r}return o}const B5=Rr.startsWith("3"),A5=typeof window<"u",xy="usehead";function ac(){return xs()&&I(xy)||Ry()}function v5(s){return{install(o){B5&&(o.config.globalProperties.$unhead=s,o.config.globalProperties.$head=s,o.provide(xy,s))}}.install}function C5(s={}){const n=h5({...s,domDelayFn:o=>setTimeout(()=>os(()=>o()),10),plugins:[E5(),...(s==null?void 0:s.plugins)||[]]});return n.install=v5(n),n}const E5=()=>({hooks:{"entries:resolve":function(s){for(const n of s.entries)n.resolvedInput=Fr(n.input)}}});function b5(s,n={}){const o=ac(),t=Z(!1),r=Z({});yo(()=>{r.value=t.value?{}:Fr(s)});const l=o.push(r.value,n);return Be(r,i=>{l.patch(i)}),xs()&&(Ut(()=>{l.dispose()}),zu(()=>{t.value=!0}),Wu(()=>{t.value=!1})),l}function k5(s,n={}){return ac().push(s,n)}function cc(s,n={}){var t;const o=ac();if(o){const r=A5||!!((t=o.resolvedOptions)!=null&&t.document);return n.mode==="server"&&r||n.mode==="client"&&!r?void 0:r?b5(s,n):k5(s,n)}}const D5=s=>cc({htmlAttrs:s});function w5(s,n){const o=C5(n||{}),t={unhead:o,install(r){Rr.startsWith("3")&&(r.config.globalProperties.$head=o,r.provide("usehead",o))},use(r){o.use(r)},resolveTags(){return o.resolveTags()},headEntries(){return o.headEntries()},headTags(){return o.resolveTags()},push(r,l){return o.push(r,l)},addEntry(r,l){return o.push(r,l)},addHeadObjs(r,l){return o.push(r,l)},addReactiveEntry(r,l){const c=cc(r,l);return typeof c<"u"?c.dispose:()=>{}},removeHeadObjs(){},updateDOM(r,l){l?ky(o,{document:r}):Dy(o,{delayFn:c=>setTimeout(()=>c(),50),document:r})},internalHooks:o.hooks,hooks:{"before:dom":[],"resolved:tags":[],"resolved:entries":[]}};return o.addHeadObjs=t.addHeadObjs,o.updateDOM=t.updateDOM,o.hooks.hook("dom:beforeRender",r=>{for(const l of t.hooks["before:dom"])l()===!1&&(r.shouldRender=!1)}),s&&t.addHeadObjs(s),t}const ct=Symbol("v-click-clicks"),Yn=Symbol("v-click-clicks-elements"),la=Symbol("v-click-clicks-order-map"),it=Symbol("v-click-clicks-disabled"),Fy=Symbol("slidev-slide-scale"),N=Symbol("slidev-slidev-context"),S5=Symbol("slidev-route"),R5=Symbol("slidev-slide-context"),zn="slidev-vclick-target",vl="slidev-vclick-hidden",x5="slidev-vclick-fade",Cl="slidev-vclick-hidden-explicitly",Wo="slidev-vclick-current",or="slidev-vclick-prior",F5=["localhost","127.0.0.1"];let $5=(s=21)=>crypto.getRandomValues(new Uint8Array(s)).reduce((n,o)=>(o&=63,o<36?n+=o.toString(36):o<62?n+=(o-26).toString(36).toUpperCase():o>62?n+="-":n+="_",n),"");function I5(s){return s=s??[],Array.isArray(s)?s:[s]}function aa(s,n){if(!s)return!1;const o=s.indexOf(n);return o>=0?(s.splice(o,1),!0):!1}function T5(...s){let n,o,t;s.length===1?(n=0,t=1,[o]=s):[n,o,t=1]=s;const r=[];let l=n;for(;l<o;)r.push(l),l+=t||1;return r}function M5(s){return s!=null}function P5(s,n){return Object.fromEntries(Object.entries(s).map(([o,t])=>n(o,t)).filter(M5))}const ot={theme:"seriph",title:"Sylius Resource Formation",titleTemplate:"%s - Slidev",addons:[],remoteAssets:!1,monaco:"dev",download:!1,export:{},info:`<h2>Slidev Starter Template</h2>
<p>Presentation slides for developers.</p>
<p>Learn more at <a href="https://sli.dev" target="_blank" rel="noopener">Sli.dev</a></p>
`,highlighter:"shiki",lineNumbers:!1,colorSchema:"light",routerMode:"history",aspectRatio:1.7777777777777777,canvasWidth:980,exportFilename:"",selectable:!1,themeConfig:{},fonts:{sans:['"PT Serif"',"ui-sans-serif","system-ui","-apple-system","BlinkMacSystemFont",'"Segoe UI"',"Roboto",'"Helvetica Neue"',"Arial",'"Noto Sans"',"sans-serif",'"Apple Color Emoji"','"Segoe UI Emoji"','"Segoe UI Symbol"','"Noto Color Emoji"'],serif:['"PT Serif"',"ui-serif","Georgia","Cambria",'"Times New Roman"',"Times","serif"],mono:['"PT Mono"',"ui-monospace","SFMono-Regular","Menlo","Monaco","Consolas",'"Liberation Mono"','"Courier New"',"monospace"],webfonts:["PT Serif","PT Mono"],provider:"google",local:[],italic:!0,weights:["400","700"]},favicon:"https://cdn.jsdelivr.net/gh/slidevjs/slidev/assets/favicon.png",drawings:{enabled:!0,persist:!1,presenterOnly:!1,syncAll:!0},plantUmlServer:"https://www.plantuml.com/plantuml",codeCopy:!0,record:"dev",css:"unocss",presenter:!0,htmlAttrs:{},transition:"slide-left",background:!1,class:"text-center"},$e=ot,Fn=$e.aspectRatio??16/9,$n=$e.canvasWidth??980,ic=Math.ceil($n/Fn),pc=F(()=>P5($e.themeConfig||{},(s,n)=>[`--slidev-theme-${s}`,n]));function Os(s,n,o){Object.defineProperty(s,n,{value:o,writable:!0,enumerable:!1})}const mo=Ge({page:0,clicks:0});let O5=[],L5=[];Os(mo,"$syncUp",!0);Os(mo,"$syncDown",!0);Os(mo,"$paused",!1);Os(mo,"$onSet",s=>O5.push(s));Os(mo,"$onPatch",s=>L5.push(s));Os(mo,"$patch",async()=>!1);function $y(s,n,o=!1){const t=[];let r=!1,l=!1,c,i;const p=Ge(n);function u(h){t.push(h)}function y(h,m){p[h]!==m&&(clearTimeout(c),r=!0,p[h]=m,c=setTimeout(()=>r=!1,0))}function d(h){r||(clearTimeout(i),l=!0,Object.entries(h).forEach(([m,g])=>{p[m]=g}),i=setTimeout(()=>l=!1,0))}function f(h){let m;o?o&&window.addEventListener("storage",B=>{B&&B.key===h&&B.newValue&&d(JSON.parse(B.newValue))}):(m=new BroadcastChannel(h),m.addEventListener("message",B=>d(B.data)));function g(){!o&&m&&!l?m.postMessage(fe(p)):o&&!l&&window.localStorage.setItem(h,JSON.stringify(p)),r||t.forEach(B=>B(p))}if(Be(p,g,{deep:!0}),o){const B=window.localStorage.getItem(h);B&&d(JSON.parse(B))}}return{init:f,onPatch:u,patch:y,state:p}}const{init:N5,onPatch:q5,patch:zo,state:El}=$y(mo,{page:1,clicks:0,viewerPage:1,viewerClicks:0}),ho=Ge({});let U5=[],H5=[];Os(ho,"$syncUp",!0);Os(ho,"$syncDown",!0);Os(ho,"$paused",!1);Os(ho,"$onSet",s=>U5.push(s));Os(ho,"$onPatch",s=>H5.push(s));Os(ho,"$patch",async()=>!1);const{init:V5,onPatch:j5,patch:Iy,state:$r}=$y(ho,{},!1),G5="modulepreload",W5=function(s){return"/sylius-resource-formation/"+s},Ri={},In=function(n,o,t){if(!o||o.length===0)return n();const r=document.getElementsByTagName("link");return Promise.all(o.map(l=>{if(l=W5(l),l in Ri)return;Ri[l]=!0;const c=l.endsWith(".css"),i=c?'[rel="stylesheet"]':"";if(!!t)for(let y=r.length-1;y>=0;y--){const d=r[y];if(d.href===l&&(!c||d.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${l}"]${i}`))return;const u=document.createElement("link");if(u.rel=c?"stylesheet":G5,c||(u.as="script",u.crossOrigin=""),u.href=l,document.head.appendChild(u),c)return new Promise((y,d)=>{u.addEventListener("load",y),u.addEventListener("error",()=>d(new Error(`Unable to preload CSS for ${l}`)))})})).then(()=>n())};var xi;const js=typeof window<"u",z5=s=>typeof s<"u",K5=Object.prototype.toString,Dt=s=>typeof s=="function",Y5=s=>typeof s=="number",Ty=s=>typeof s=="string",ca=s=>K5.call(s)==="[object Object]",ia=()=>+Date.now(),Fo=()=>{},Z5=js&&((xi=window==null?void 0:window.navigator)==null?void 0:xi.userAgent)&&/iP(ad|hone|od)/.test(window.navigator.userAgent);function ls(s){return typeof s=="function"?s():D(s)}function Q5(s,n){function o(...t){return new Promise((r,l)=>{Promise.resolve(s(()=>n.apply(this,t),{fn:n,thisArg:this,args:t})).then(r).catch(l)})}return o}const My=s=>s();function J5(s=My){const n=Z(!0);function o(){n.value=!1}function t(){n.value=!0}const r=(...l)=>{n.value&&s(...l)};return{isActive:Zs(n),pause:o,resume:t,eventFilter:r}}function X5(s){return s}function e_(s,n){var o;if(typeof s=="number")return s+n;const t=((o=s.match(/^-?[0-9]+\.?[0-9]*/))==null?void 0:o[0])||"",r=s.slice(t.length),l=parseFloat(t)+n;return Number.isNaN(l)?s:l+r}function s_(s,n){let o,t,r;const l=Z(!0),c=()=>{l.value=!0,r()};Be(s,c,{flush:"sync"});const i=Dt(n)?n:n.get,p=Dt(n)?void 0:n.set,u=wu((y,d)=>(t=y,r=d,{get(){return l.value&&(o=i(),l.value=!1),t(),o},set(f){p==null||p(f)}}));return Object.isExtensible(u)&&(u.trigger=c),u}function sn(s){return Va()?(uu(s),!0):!1}function n_(s){if(!Ie(s))return Ge(s);const n=new Proxy({},{get(o,t,r){return D(Reflect.get(s.value,t,r))},set(o,t,r){return Ie(s.value[t])&&!Ie(r)?s.value[t].value=r:s.value[t]=r,!0},deleteProperty(o,t){return Reflect.deleteProperty(s.value,t)},has(o,t){return Reflect.has(s.value,t)},ownKeys(){return Object.keys(s.value)},getOwnPropertyDescriptor(){return{enumerable:!0,configurable:!0}}});return Ge(n)}function Py(s){return typeof s=="function"?F(s):Z(s)}var o_=Object.defineProperty,t_=Object.defineProperties,r_=Object.getOwnPropertyDescriptors,Fi=Object.getOwnPropertySymbols,l_=Object.prototype.hasOwnProperty,a_=Object.prototype.propertyIsEnumerable,$i=(s,n,o)=>n in s?o_(s,n,{enumerable:!0,configurable:!0,writable:!0,value:o}):s[n]=o,c_=(s,n)=>{for(var o in n||(n={}))l_.call(n,o)&&$i(s,o,n[o]);if(Fi)for(var o of Fi(n))a_.call(n,o)&&$i(s,o,n[o]);return s},i_=(s,n)=>t_(s,r_(n));function p_(s){if(!Ie(s))return Bm(s);const n=Array.isArray(s.value)?new Array(s.value.length):{};for(const o in s.value)n[o]=wu(()=>({get(){return s.value[o]},set(t){if(Array.isArray(s.value)){const r=[...s.value];r[o]=t,s.value=r}else{const r=i_(c_({},s.value),{[o]:t});Object.setPrototypeOf(r,s.value),s.value=r}}}));return n}function uc(s,n=!0){xs()?fo(s):n?s():os(s)}function u_(s){xs()&&Jr(s)}function y_(s,n=1e3,o={}){const{immediate:t=!0,immediateCallback:r=!1}=o;let l=null;const c=Z(!1);function i(){l&&(clearInterval(l),l=null)}function p(){c.value=!1,i()}function u(){const y=ls(n);y<=0||(c.value=!0,r&&s(),i(),l=setInterval(s,y))}if(t&&js&&u(),Ie(n)||Dt(n)){const y=Be(n,()=>{c.value&&js&&u()});sn(y)}return sn(p),{isActive:c,pause:p,resume:u}}function d_(s,n,o={}){const{immediate:t=!0}=o,r=Z(!1);let l=null;function c(){l&&(clearTimeout(l),l=null)}function i(){r.value=!1,c()}function p(...u){c(),r.value=!0,l=setTimeout(()=>{r.value=!1,l=null,s(...u)},ls(n))}return t&&(r.value=!0,js&&p()),sn(i),{isPending:Zs(r),start:p,stop:i}}function Oy(s=!1,n={}){const{truthyValue:o=!0,falsyValue:t=!1}=n,r=Ie(s),l=Z(s);function c(i){if(arguments.length)return l.value=i,l.value;{const p=ls(o);return l.value=l.value===p?ls(t):p,l.value}}return r?c:[l,c]}var Ii=Object.getOwnPropertySymbols,f_=Object.prototype.hasOwnProperty,m_=Object.prototype.propertyIsEnumerable,h_=(s,n)=>{var o={};for(var t in s)f_.call(s,t)&&n.indexOf(t)<0&&(o[t]=s[t]);if(s!=null&&Ii)for(var t of Ii(s))n.indexOf(t)<0&&m_.call(s,t)&&(o[t]=s[t]);return o};function __(s,n,o={}){const t=o,{eventFilter:r=My}=t,l=h_(t,["eventFilter"]);return Be(s,Q5(r,n),l)}var g_=Object.defineProperty,B_=Object.defineProperties,A_=Object.getOwnPropertyDescriptors,Ir=Object.getOwnPropertySymbols,Ly=Object.prototype.hasOwnProperty,Ny=Object.prototype.propertyIsEnumerable,Ti=(s,n,o)=>n in s?g_(s,n,{enumerable:!0,configurable:!0,writable:!0,value:o}):s[n]=o,v_=(s,n)=>{for(var o in n||(n={}))Ly.call(n,o)&&Ti(s,o,n[o]);if(Ir)for(var o of Ir(n))Ny.call(n,o)&&Ti(s,o,n[o]);return s},C_=(s,n)=>B_(s,A_(n)),E_=(s,n)=>{var o={};for(var t in s)Ly.call(s,t)&&n.indexOf(t)<0&&(o[t]=s[t]);if(s!=null&&Ir)for(var t of Ir(s))n.indexOf(t)<0&&Ny.call(s,t)&&(o[t]=s[t]);return o};function b_(s,n,o={}){const t=o,{eventFilter:r}=t,l=E_(t,["eventFilter"]),{eventFilter:c,pause:i,resume:p,isActive:u}=J5(r);return{stop:__(s,n,C_(v_({},l),{eventFilter:c})),pause:i,resume:p,isActive:u}}function ws(s){var n;const o=ls(s);return(n=o==null?void 0:o.$el)!=null?n:o}const ss=js?window:void 0,qy=js?window.document:void 0,k_=js?window.navigator:void 0;function Ae(...s){let n,o,t,r;if(Ty(s[0])||Array.isArray(s[0])?([o,t,r]=s,n=ss):[n,o,t,r]=s,!n)return Fo;Array.isArray(o)||(o=[o]),Array.isArray(t)||(t=[t]);const l=[],c=()=>{l.forEach(y=>y()),l.length=0},i=(y,d,f,h)=>(y.addEventListener(d,f,h),()=>y.removeEventListener(d,f,h)),p=Be(()=>[ws(n),ls(r)],([y,d])=>{c(),y&&l.push(...o.flatMap(f=>t.map(h=>i(y,f,h,d))))},{immediate:!0,flush:"post"}),u=()=>{p(),c()};return sn(u),u}let Mi=!1;function D_(s,n,o={}){const{window:t=ss,ignore:r=[],capture:l=!0,detectIframe:c=!1}=o;if(!t)return;Z5&&!Mi&&(Mi=!0,Array.from(t.document.body.children).forEach(f=>f.addEventListener("click",Fo)));let i=!0;const p=f=>r.some(h=>{if(typeof h=="string")return Array.from(t.document.querySelectorAll(h)).some(m=>m===f.target||f.composedPath().includes(m));{const m=ws(h);return m&&(f.target===m||f.composedPath().includes(m))}}),y=[Ae(t,"click",f=>{const h=ws(s);if(!(!h||h===f.target||f.composedPath().includes(h))){if(f.detail===0&&(i=!p(f)),!i){i=!0;return}n(f)}},{passive:!0,capture:l}),Ae(t,"pointerdown",f=>{const h=ws(s);h&&(i=!f.composedPath().includes(h)&&!p(f))},{passive:!0}),c&&Ae(t,"blur",f=>{var h;const m=ws(s);((h=t.document.activeElement)==null?void 0:h.tagName)==="IFRAME"&&!(m!=null&&m.contains(t.document.activeElement))&&n(f)})].filter(Boolean);return()=>y.forEach(f=>f())}const w_=s=>typeof s=="function"?s:typeof s=="string"?n=>n.key===s:Array.isArray(s)?n=>s.includes(n.key):()=>!0;function S_(...s){let n,o,t={};s.length===3?(n=s[0],o=s[1],t=s[2]):s.length===2?typeof s[1]=="object"?(n=!0,o=s[0],t=s[1]):(n=s[0],o=s[1]):(n=!0,o=s[0]);const{target:r=ss,eventName:l="keydown",passive:c=!1}=t,i=w_(n);return Ae(r,l,u=>{i(u)&&o(u)},c)}function R_(s={}){var n;const{window:o=ss}=s,t=(n=s.document)!=null?n:o==null?void 0:o.document,r=s_(()=>null,()=>t==null?void 0:t.activeElement);return o&&(Ae(o,"blur",l=>{l.relatedTarget===null&&r.trigger()},!0),Ae(o,"focus",r.trigger,!0)),r}function jt(s,n=!1){const o=Z(),t=()=>o.value=Boolean(s());return t(),uc(t,n),o}function bo(s,n={}){const{window:o=ss}=n,t=jt(()=>o&&"matchMedia"in o&&typeof o.matchMedia=="function");let r;const l=Z(!1),c=()=>{r&&("removeEventListener"in r?r.removeEventListener("change",i):r.removeListener(i))},i=()=>{t.value&&(c(),r=o.matchMedia(Py(s).value),l.value=r.matches,"addEventListener"in r?r.addEventListener("change",i):r.addListener(i))};return yo(i),sn(()=>c()),l}const x_={sm:640,md:768,lg:1024,xl:1280,"2xl":1536};var F_=Object.defineProperty,Pi=Object.getOwnPropertySymbols,$_=Object.prototype.hasOwnProperty,I_=Object.prototype.propertyIsEnumerable,Oi=(s,n,o)=>n in s?F_(s,n,{enumerable:!0,configurable:!0,writable:!0,value:o}):s[n]=o,T_=(s,n)=>{for(var o in n||(n={}))$_.call(n,o)&&Oi(s,o,n[o]);if(Pi)for(var o of Pi(n))I_.call(n,o)&&Oi(s,o,n[o]);return s};function M_(s,n={}){function o(i,p){let u=s[i];return p!=null&&(u=e_(u,p)),typeof u=="number"&&(u=`${u}px`),u}const{window:t=ss}=n;function r(i){return t?t.matchMedia(i).matches:!1}const l=i=>bo(`(min-width: ${o(i)})`,n),c=Object.keys(s).reduce((i,p)=>(Object.defineProperty(i,p,{get:()=>l(p),enumerable:!0,configurable:!0}),i),{});return T_({greater(i){return bo(`(min-width: ${o(i,.1)})`,n)},greaterOrEqual:l,smaller(i){return bo(`(max-width: ${o(i,-.1)})`,n)},smallerOrEqual(i){return bo(`(max-width: ${o(i)})`,n)},between(i,p){return bo(`(min-width: ${o(i)}) and (max-width: ${o(p,-.1)})`,n)},isGreater(i){return r(`(min-width: ${o(i,.1)})`)},isGreaterOrEqual(i){return r(`(min-width: ${o(i)})`)},isSmaller(i){return r(`(max-width: ${o(i,-.1)})`)},isSmallerOrEqual(i){return r(`(max-width: ${o(i)})`)},isInBetween(i,p){return r(`(min-width: ${o(i)}) and (max-width: ${o(p,-.1)})`)}},c)}function P_(s={}){const{navigator:n=k_,read:o=!1,source:t,copiedDuring:r=1500,legacy:l=!1}=s,c=["copy","cut"],i=jt(()=>n&&"clipboard"in n),p=F(()=>i.value||l),u=Z(""),y=Z(!1),d=d_(()=>y.value=!1,r);function f(){i.value?n.clipboard.readText().then(B=>{u.value=B}):u.value=g()}if(p.value&&o)for(const B of c)Ae(B,f);async function h(B=ls(t)){p.value&&B!=null&&(i.value?await n.clipboard.writeText(B):m(B),u.value=B,y.value=!0,d.start())}function m(B){const k=document.createElement("textarea");k.value=B??"",k.style.position="absolute",k.style.opacity="0",document.body.appendChild(k),k.select(),document.execCommand("copy"),k.remove()}function g(){var B,k,v;return(v=(k=(B=document==null?void 0:document.getSelection)==null?void 0:B.call(document))==null?void 0:k.toString())!=null?v:""}return{isSupported:p,text:u,copied:y,copy:h}}function O_(s){return JSON.parse(JSON.stringify(s))}const pa=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},ua="__vueuse_ssr_handlers__";pa[ua]=pa[ua]||{};const L_=pa[ua];function N_(s,n){return L_[s]||n}function q_(s){return s==null?"any":s instanceof Set?"set":s instanceof Map?"map":s instanceof Date?"date":typeof s=="boolean"?"boolean":typeof s=="string"?"string":typeof s=="object"?"object":Number.isNaN(s)?"any":"number"}var U_=Object.defineProperty,Li=Object.getOwnPropertySymbols,H_=Object.prototype.hasOwnProperty,V_=Object.prototype.propertyIsEnumerable,Ni=(s,n,o)=>n in s?U_(s,n,{enumerable:!0,configurable:!0,writable:!0,value:o}):s[n]=o,qi=(s,n)=>{for(var o in n||(n={}))H_.call(n,o)&&Ni(s,o,n[o]);if(Li)for(var o of Li(n))V_.call(n,o)&&Ni(s,o,n[o]);return s};const j_={boolean:{read:s=>s==="true",write:s=>String(s)},object:{read:s=>JSON.parse(s),write:s=>JSON.stringify(s)},number:{read:s=>Number.parseFloat(s),write:s=>String(s)},any:{read:s=>s,write:s=>String(s)},string:{read:s=>s,write:s=>String(s)},map:{read:s=>new Map(JSON.parse(s)),write:s=>JSON.stringify(Array.from(s.entries()))},set:{read:s=>new Set(JSON.parse(s)),write:s=>JSON.stringify(Array.from(s))},date:{read:s=>new Date(s),write:s=>s.toISOString()}},Ui="vueuse-storage";function G_(s,n,o,t={}){var r;const{flush:l="pre",deep:c=!0,listenToStorageChanges:i=!0,writeDefaults:p=!0,mergeDefaults:u=!1,shallow:y,window:d=ss,eventFilter:f,onError:h=$=>{console.error($)}}=t,m=(y?en:Z)(n);if(!o)try{o=N_("getDefaultStorage",()=>{var $;return($=ss)==null?void 0:$.localStorage})()}catch($){h($)}if(!o)return m;const g=ls(n),B=q_(g),k=(r=t.serializer)!=null?r:j_[B],{pause:v,resume:E}=b_(m,()=>w(m.value),{flush:l,deep:c,eventFilter:f});return d&&i&&(Ae(d,"storage",z),Ae(d,Ui,U)),z(),m;function w($){try{if($==null)o.removeItem(s);else{const G=k.write($),oe=o.getItem(s);oe!==G&&(o.setItem(s,G),d&&d.dispatchEvent(new CustomEvent(Ui,{detail:{key:s,oldValue:oe,newValue:G,storageArea:o}})))}}catch(G){h(G)}}function T($){const G=$?$.newValue:o.getItem(s);if(G==null)return p&&g!==null&&o.setItem(s,k.write(g)),g;if(!$&&u){const oe=k.read(G);return Dt(u)?u(oe,g):B==="object"&&!Array.isArray(oe)?qi(qi({},g),oe):oe}else return typeof G!="string"?G:k.read(G)}function U($){z($.detail)}function z($){if(!($&&$.storageArea!==o)){if($&&$.key==null){m.value=g;return}if(!($&&$.key!==s)){v();try{m.value=T($)}catch(G){h(G)}finally{$?os(E):E()}}}}}function W_(s){return bo("(prefers-color-scheme: dark)",s)}var z_=Object.defineProperty,K_=Object.defineProperties,Y_=Object.getOwnPropertyDescriptors,Hi=Object.getOwnPropertySymbols,Z_=Object.prototype.hasOwnProperty,Q_=Object.prototype.propertyIsEnumerable,Vi=(s,n,o)=>n in s?z_(s,n,{enumerable:!0,configurable:!0,writable:!0,value:o}):s[n]=o,J_=(s,n)=>{for(var o in n||(n={}))Z_.call(n,o)&&Vi(s,o,n[o]);if(Hi)for(var o of Hi(n))Q_.call(n,o)&&Vi(s,o,n[o]);return s},X_=(s,n)=>K_(s,Y_(n));function TS(s,n={}){var o,t,r;const l=(o=n.draggingElement)!=null?o:ss,c=(t=n.handle)!=null?t:s,i=Z((r=ls(n.initialValue))!=null?r:{x:0,y:0}),p=Z(),u=m=>n.pointerTypes?n.pointerTypes.includes(m.pointerType):!0,y=m=>{ls(n.preventDefault)&&m.preventDefault(),ls(n.stopPropagation)&&m.stopPropagation()},d=m=>{var g;if(!u(m)||ls(n.exact)&&m.target!==ls(s))return;const B=ls(s).getBoundingClientRect(),k={x:m.clientX-B.left,y:m.clientY-B.top};((g=n.onStart)==null?void 0:g.call(n,k,m))!==!1&&(p.value=k,y(m))},f=m=>{var g;u(m)&&p.value&&(i.value={x:m.clientX-p.value.x,y:m.clientY-p.value.y},(g=n.onMove)==null||g.call(n,i.value,m),y(m))},h=m=>{var g;u(m)&&p.value&&(p.value=void 0,(g=n.onEnd)==null||g.call(n,i.value,m),y(m))};return js&&(Ae(c,"pointerdown",d,!0),Ae(l,"pointermove",f,!0),Ae(l,"pointerup",h,!0)),X_(J_({},p_(i)),{position:i,isDragging:F(()=>!!p.value),style:F(()=>`left:${i.value.x}px;top:${i.value.y}px;`)})}var ji=Object.getOwnPropertySymbols,eg=Object.prototype.hasOwnProperty,sg=Object.prototype.propertyIsEnumerable,ng=(s,n)=>{var o={};for(var t in s)eg.call(s,t)&&n.indexOf(t)<0&&(o[t]=s[t]);if(s!=null&&ji)for(var t of ji(s))n.indexOf(t)<0&&sg.call(s,t)&&(o[t]=s[t]);return o};function og(s,n,o={}){const t=o,{window:r=ss}=t,l=ng(t,["window"]);let c;const i=jt(()=>r&&"ResizeObserver"in r),p=()=>{c&&(c.disconnect(),c=void 0)},u=Be(()=>ws(s),d=>{p(),i.value&&r&&d&&(c=new ResizeObserver(n),c.observe(d,l))},{immediate:!0,flush:"post"}),y=()=>{p(),u()};return sn(y),{isSupported:i,stop:y}}function tg(s,n={}){const{immediate:o=!0,window:t=ss}=n,r=Z(!1);let l=0,c=null;function i(y){if(!r.value||!t)return;const d=y-l;s({delta:d,timestamp:y}),l=y,c=t.requestAnimationFrame(i)}function p(){!r.value&&t&&(r.value=!0,c=t.requestAnimationFrame(i))}function u(){r.value=!1,c!=null&&t&&(t.cancelAnimationFrame(c),c=null)}return o&&p(),sn(u),{isActive:Zs(r),pause:u,resume:p}}function rg(s,n={width:0,height:0},o={}){const{window:t=ss,box:r="content-box"}=o,l=F(()=>{var p,u;return(u=(p=ws(s))==null?void 0:p.namespaceURI)==null?void 0:u.includes("svg")}),c=Z(n.width),i=Z(n.height);return og(s,([p])=>{const u=r==="border-box"?p.borderBoxSize:r==="content-box"?p.contentBoxSize:p.devicePixelContentBoxSize;if(t&&l.value){const y=ws(s);if(y){const d=t.getComputedStyle(y);c.value=parseFloat(d.width),i.value=parseFloat(d.height)}}else if(u){const y=Array.isArray(u)?u:[u];c.value=y.reduce((d,{inlineSize:f})=>d+f,0),i.value=y.reduce((d,{blockSize:f})=>d+f,0)}else c.value=p.contentRect.width,i.value=p.contentRect.height},o),Be(()=>ws(s),p=>{c.value=p?n.width:0,i.value=p?n.height:0}),{width:c,height:i}}const Gi=[["requestFullscreen","exitFullscreen","fullscreenElement","fullscreenEnabled","fullscreenchange","fullscreenerror"],["webkitRequestFullscreen","webkitExitFullscreen","webkitFullscreenElement","webkitFullscreenEnabled","webkitfullscreenchange","webkitfullscreenerror"],["webkitRequestFullScreen","webkitCancelFullScreen","webkitCurrentFullScreenElement","webkitCancelFullScreen","webkitfullscreenchange","webkitfullscreenerror"],["mozRequestFullScreen","mozCancelFullScreen","mozFullScreenElement","mozFullScreenEnabled","mozfullscreenchange","mozfullscreenerror"],["msRequestFullscreen","msExitFullscreen","msFullscreenElement","msFullscreenEnabled","MSFullscreenChange","MSFullscreenError"]];function lg(s,n={}){const{document:o=qy,autoExit:t=!1}=n,r=s||(o==null?void 0:o.querySelector("html")),l=Z(!1);let c=Gi[0];const i=jt(()=>{if(o){for(const g of Gi)if(g[1]in o)return c=g,!0}else return!1;return!1}),[p,u,y,,d]=c;async function f(){i.value&&(o!=null&&o[y]&&await o[u](),l.value=!1)}async function h(){if(!i.value)return;await f();const g=ws(r);g&&(await g[p](),l.value=!0)}async function m(){l.value?await f():await h()}return o&&Ae(o,d,()=>{l.value=!!(o!=null&&o[y])},!1),t&&sn(f),{isSupported:i,isFullscreen:l,enter:h,exit:f,toggle:m}}function ag(s,n,o={}){const{root:t,rootMargin:r="0px",threshold:l=.1,window:c=ss}=o,i=jt(()=>c&&"IntersectionObserver"in c);let p=Fo;const u=i.value?Be(()=>({el:ws(s),root:ws(t)}),({el:d,root:f})=>{if(p(),!d)return;const h=new IntersectionObserver(n,{root:f,rootMargin:r,threshold:l});h.observe(d),p=()=>{h.disconnect(),p=Fo}},{immediate:!0,flush:"post"}):Fo,y=()=>{p(),u()};return sn(y),{isSupported:i,stop:y}}function Gs(s,n,o={}){const{window:t=ss}=o;return G_(s,n,t==null?void 0:t.localStorage,o)}const cg={ctrl:"control",command:"meta",cmd:"meta",option:"alt",up:"arrowup",down:"arrowdown",left:"arrowleft",right:"arrowright"};function ig(s={}){const{reactive:n=!1,target:o=ss,aliasMap:t=cg,passive:r=!0,onEventFired:l=Fo}=s,c=Ge(new Set),i={toJSON(){return{}},current:c},p=n?Ge(i):i,u=new Set,y=new Set;function d(g,B){g in p&&(n?p[g]=B:p[g].value=B)}function f(){c.clear();for(const g of y)d(g,!1)}function h(g,B){var k,v;const E=(k=g.key)==null?void 0:k.toLowerCase(),T=[(v=g.code)==null?void 0:v.toLowerCase(),E].filter(Boolean);E&&(B?c.add(E):c.delete(E));for(const U of T)y.add(U),d(U,B);E==="meta"&&!B?(u.forEach(U=>{c.delete(U),d(U,!1)}),u.clear()):typeof g.getModifierState=="function"&&g.getModifierState("Meta")&&B&&[...c,...T].forEach(U=>u.add(U))}Ae(o,"keydown",g=>(h(g,!0),l(g)),{passive:r}),Ae(o,"keyup",g=>(h(g,!1),l(g)),{passive:r}),Ae("blur",f,{passive:!0}),Ae("focus",f,{passive:!0});const m=new Proxy(p,{get(g,B,k){if(typeof B!="string")return Reflect.get(g,B,k);if(B=B.toLowerCase(),B in t&&(B=t[B]),!(B in p))if(/[+_-]/.test(B)){const E=B.split(/[+_-]/g).map(w=>w.trim());p[B]=F(()=>E.every(w=>D(m[w])))}else p[B]=Z(!1);const v=Reflect.get(g,B,k);return n?D(v):v}});return m}function MS(s={}){const{type:n="page",touch:o=!0,resetOnTouchEnds:t=!1,initialValue:r={x:0,y:0},window:l=ss,eventFilter:c}=s,i=Z(r.x),p=Z(r.y),u=Z(null),y=g=>{n==="page"?(i.value=g.pageX,p.value=g.pageY):n==="client"?(i.value=g.clientX,p.value=g.clientY):n==="movement"&&(i.value=g.movementX,p.value=g.movementY),u.value="mouse"},d=()=>{i.value=r.x,p.value=r.y},f=g=>{if(g.touches.length>0){const B=g.touches[0];n==="page"?(i.value=B.pageX,p.value=B.pageY):n==="client"&&(i.value=B.clientX,p.value=B.clientY),u.value="touch"}},h=g=>c===void 0?y(g):c(()=>y(g),{}),m=g=>c===void 0?f(g):c(()=>f(g),{});return l&&(Ae(l,"mousemove",h,{passive:!0}),Ae(l,"dragover",h,{passive:!0}),o&&n!=="movement"&&(Ae(l,"touchstart",m,{passive:!0}),Ae(l,"touchmove",m,{passive:!0}),t&&Ae(l,"touchend",d,{passive:!0}))),{x:i,y:p,sourceType:u}}var pn;(function(s){s.UP="UP",s.RIGHT="RIGHT",s.DOWN="DOWN",s.LEFT="LEFT",s.NONE="NONE"})(pn||(pn={}));function pg(s,n={}){const o=Py(s),{threshold:t=50,onSwipe:r,onSwipeEnd:l,onSwipeStart:c}=n,i=Ge({x:0,y:0}),p=(U,z)=>{i.x=U,i.y=z},u=Ge({x:0,y:0}),y=(U,z)=>{u.x=U,u.y=z},d=F(()=>i.x-u.x),f=F(()=>i.y-u.y),{max:h,abs:m}=Math,g=F(()=>h(m(d.value),m(f.value))>=t),B=Z(!1),k=Z(!1),v=F(()=>g.value?m(d.value)>m(f.value)?d.value>0?pn.LEFT:pn.RIGHT:f.value>0?pn.UP:pn.DOWN:pn.NONE),E=U=>{var z,$,G;const oe=U.buttons===0,ue=U.buttons===1;return(G=($=(z=n.pointerTypes)==null?void 0:z.includes(U.pointerType))!=null?$:oe||ue)!=null?G:!0},w=[Ae(s,"pointerdown",U=>{var z,$;if(!E(U))return;k.value=!0,($=(z=o.value)==null?void 0:z.style)==null||$.setProperty("touch-action","none");const G=U.target;G==null||G.setPointerCapture(U.pointerId);const{clientX:oe,clientY:ue}=U;p(oe,ue),y(oe,ue),c==null||c(U)}),Ae(s,"pointermove",U=>{if(!E(U)||!k.value)return;const{clientX:z,clientY:$}=U;y(z,$),!B.value&&g.value&&(B.value=!0),B.value&&(r==null||r(U))}),Ae(s,"pointerup",U=>{var z,$;E(U)&&(B.value&&(l==null||l(U,v.value)),k.value=!1,B.value=!1,($=(z=o.value)==null?void 0:z.style)==null||$.setProperty("touch-action","initial"))})],T=()=>w.forEach(U=>U());return{isSwiping:Zs(B),direction:Zs(v),posStart:Zs(i),posEnd:Zs(u),distanceX:d,distanceY:f,stop:T}}let ug=0;function PS(s,n={}){const o=Z(!1),{document:t=qy,immediate:r=!0,manual:l=!1,id:c=`vueuse_styletag_${++ug}`}=n,i=Z(s);let p=()=>{};const u=()=>{if(!t)return;const d=t.getElementById(c)||t.createElement("style");d.isConnected||(d.type="text/css",d.id=c,n.media&&(d.media=n.media),t.head.appendChild(d)),!o.value&&(p=Be(i,f=>{d.textContent=f},{immediate:!0}),o.value=!0)},y=()=>{!t||!o.value||(p(),t.head.removeChild(t.getElementById(c)),o.value=!1)};return r&&!l&&uc(u),l||sn(y),{id:c,css:i,unload:y,load:u,isLoaded:Zs(o)}}var yg=Object.defineProperty,Wi=Object.getOwnPropertySymbols,dg=Object.prototype.hasOwnProperty,fg=Object.prototype.propertyIsEnumerable,zi=(s,n,o)=>n in s?yg(s,n,{enumerable:!0,configurable:!0,writable:!0,value:o}):s[n]=o,mg=(s,n)=>{for(var o in n||(n={}))dg.call(n,o)&&zi(s,o,n[o]);if(Wi)for(var o of Wi(n))fg.call(n,o)&&zi(s,o,n[o]);return s};function OS(s={}){const{controls:n=!1,offset:o=0,immediate:t=!0,interval:r="requestAnimationFrame",callback:l}=s,c=Z(ia()+o),i=()=>c.value=ia()+o,p=l?()=>{i(),l(c.value)}:i,u=r==="requestAnimationFrame"?tg(p,{immediate:t}):y_(p,r,{immediate:t});return n?mg({timestamp:c},u):c}var hg=Object.defineProperty,Ki=Object.getOwnPropertySymbols,_g=Object.prototype.hasOwnProperty,gg=Object.prototype.propertyIsEnumerable,Yi=(s,n,o)=>n in s?hg(s,n,{enumerable:!0,configurable:!0,writable:!0,value:o}):s[n]=o,Bg=(s,n)=>{for(var o in n||(n={}))_g.call(n,o)&&Yi(s,o,n[o]);if(Ki)for(var o of Ki(n))gg.call(n,o)&&Yi(s,o,n[o]);return s};const Ag={easeInSine:[.12,0,.39,0],easeOutSine:[.61,1,.88,1],easeInOutSine:[.37,0,.63,1],easeInQuad:[.11,0,.5,0],easeOutQuad:[.5,1,.89,1],easeInOutQuad:[.45,0,.55,1],easeInCubic:[.32,0,.67,0],easeOutCubic:[.33,1,.68,1],easeInOutCubic:[.65,0,.35,1],easeInQuart:[.5,0,.75,0],easeOutQuart:[.25,1,.5,1],easeInOutQuart:[.76,0,.24,1],easeInQuint:[.64,0,.78,0],easeOutQuint:[.22,1,.36,1],easeInOutQuint:[.83,0,.17,1],easeInExpo:[.7,0,.84,0],easeOutExpo:[.16,1,.3,1],easeInOutExpo:[.87,0,.13,1],easeInCirc:[.55,0,1,.45],easeOutCirc:[0,.55,.45,1],easeInOutCirc:[.85,0,.15,1],easeInBack:[.36,0,.66,-.56],easeOutBack:[.34,1.56,.64,1],easeInOutBack:[.68,-.6,.32,1.6]};Bg({linear:X5},Ag);function Qs(s,n,o,t={}){var r,l,c;const{clone:i=!1,passive:p=!1,eventName:u,deep:y=!1,defaultValue:d}=t,f=xs(),h=o||(f==null?void 0:f.emit)||((r=f==null?void 0:f.$emit)==null?void 0:r.bind(f))||((c=(l=f==null?void 0:f.proxy)==null?void 0:l.$emit)==null?void 0:c.bind(f==null?void 0:f.proxy));let m=u;n||(n="modelValue"),m=u||m||`update:${n.toString()}`;const g=k=>i?Dt(i)?i(k):O_(k):k,B=()=>z5(s[n])?g(s[n]):d;if(p){const k=B(),v=Z(k);return Be(()=>s[n],E=>v.value=g(E)),Be(v,E=>{(E!==s[n]||y)&&h(m,E)},{deep:y}),v}else return F({get(){return B()},set(k){h(m,k)}})}function LS({window:s=ss}={}){if(!s)return Z(!1);const n=Z(s.document.hasFocus());return Ae(s,"blur",()=>{n.value=!1}),Ae(s,"focus",()=>{n.value=!0}),n}function vg(s={}){const{window:n=ss,initialWidth:o=1/0,initialHeight:t=1/0,listenOrientation:r=!0,includeScrollbar:l=!0}=s,c=Z(o),i=Z(t),p=()=>{n&&(l?(c.value=n.innerWidth,i.value=n.innerHeight):(c.value=n.document.documentElement.clientWidth,i.value=n.document.documentElement.clientHeight))};return p(),uc(p),Ae("resize",p,{passive:!0}),r&&Ae("orientationchange",p,{passive:!0}),{width:c,height:i}}function Cg(){return Uy().__VUE_DEVTOOLS_GLOBAL_HOOK__}function Uy(){return typeof navigator<"u"&&typeof window<"u"?window:typeof global<"u"?global:{}}const Eg=typeof Proxy=="function",bg="devtools-plugin:setup",kg="plugin:settings:set";let go,ya;function Dg(){var s;return go!==void 0||(typeof window<"u"&&window.performance?(go=!0,ya=window.performance):typeof global<"u"&&(!((s=global.perf_hooks)===null||s===void 0)&&s.performance)?(go=!0,ya=global.perf_hooks.performance):go=!1),go}function wg(){return Dg()?ya.now():Date.now()}class Sg{constructor(n,o){this.target=null,this.targetQueue=[],this.onQueue=[],this.plugin=n,this.hook=o;const t={};if(n.settings)for(const c in n.settings){const i=n.settings[c];t[c]=i.defaultValue}const r=`__vue-devtools-plugin-settings__${n.id}`;let l=Object.assign({},t);try{const c=localStorage.getItem(r),i=JSON.parse(c);Object.assign(l,i)}catch{}this.fallbacks={getSettings(){return l},setSettings(c){try{localStorage.setItem(r,JSON.stringify(c))}catch{}l=c},now(){return wg()}},o&&o.on(kg,(c,i)=>{c===this.plugin.id&&this.fallbacks.setSettings(i)}),this.proxiedOn=new Proxy({},{get:(c,i)=>this.target?this.target.on[i]:(...p)=>{this.onQueue.push({method:i,args:p})}}),this.proxiedTarget=new Proxy({},{get:(c,i)=>this.target?this.target[i]:i==="on"?this.proxiedOn:Object.keys(this.fallbacks).includes(i)?(...p)=>(this.targetQueue.push({method:i,args:p,resolve:()=>{}}),this.fallbacks[i](...p)):(...p)=>new Promise(u=>{this.targetQueue.push({method:i,args:p,resolve:u})})})}async setRealTarget(n){this.target=n;for(const o of this.onQueue)this.target.on[o.method](...o.args);for(const o of this.targetQueue)o.resolve(await this.target[o.method](...o.args))}}function Rg(s,n){const o=s,t=Uy(),r=Cg(),l=Eg&&o.enableEarlyProxy;if(r&&(t.__VUE_DEVTOOLS_PLUGIN_API_AVAILABLE__||!l))r.emit(bg,s,n);else{const c=l?new Sg(o,r):null;(t.__VUE_DEVTOOLS_PLUGINS__=t.__VUE_DEVTOOLS_PLUGINS__||[]).push({pluginDescriptor:o,setupFn:n,proxy:c}),c&&n(c.proxiedTarget)}}/*!
  * vue-router v4.1.6
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */const an=typeof window<"u";function xg(s){return s.__esModule||s[Symbol.toStringTag]==="Module"}const Oe=Object.assign;function bl(s,n){const o={};for(const t in n){const r=n[t];o[t]=Rs(r)?r.map(s):s(r)}return o}const pt=()=>{},Rs=Array.isArray;function Fe(s){const n=Array.from(arguments).slice(1);console.warn.apply(console,["[Vue Router warn]: "+s].concat(n))}const Fg=/\/$/,$g=s=>s.replace(Fg,"");function kl(s,n,o="/"){let t,r={},l="",c="";const i=n.indexOf("#");let p=n.indexOf("?");return i<p&&i>=0&&(p=-1),p>-1&&(t=n.slice(0,p),l=n.slice(p+1,i>-1?i:n.length),r=s(l)),i>-1&&(t=t||n.slice(0,i),c=n.slice(i,n.length)),t=Mg(t??n,o),{fullPath:t+(l&&"?")+l+c,path:t,query:r,hash:c}}function Ig(s,n){const o=n.query?s(n.query):"";return n.path+(o&&"?")+o+(n.hash||"")}function Zi(s,n){return!n||!s.toLowerCase().startsWith(n.toLowerCase())?s:s.slice(n.length)||"/"}function Qi(s,n,o){const t=n.matched.length-1,r=o.matched.length-1;return t>-1&&t===r&&Ln(n.matched[t],o.matched[r])&&Hy(n.params,o.params)&&s(n.query)===s(o.query)&&n.hash===o.hash}function Ln(s,n){return(s.aliasOf||s)===(n.aliasOf||n)}function Hy(s,n){if(Object.keys(s).length!==Object.keys(n).length)return!1;for(const o in s)if(!Tg(s[o],n[o]))return!1;return!0}function Tg(s,n){return Rs(s)?Ji(s,n):Rs(n)?Ji(n,s):s===n}function Ji(s,n){return Rs(n)?s.length===n.length&&s.every((o,t)=>o===n[t]):s.length===1&&s[0]===n}function Mg(s,n){if(s.startsWith("/"))return s;if(!n.startsWith("/"))return Fe(`Cannot resolve a relative location without an absolute path. Trying to resolve "${s}" from "${n}". It should look like "/${n}".`),s;if(!s)return n;const o=n.split("/"),t=s.split("/");let r=o.length-1,l,c;for(l=0;l<t.length;l++)if(c=t[l],c!==".")if(c==="..")r>1&&r--;else break;return o.slice(0,r).join("/")+"/"+t.slice(l-(l===t.length?1:0)).join("/")}var wt;(function(s){s.pop="pop",s.push="push"})(wt||(wt={}));var ut;(function(s){s.back="back",s.forward="forward",s.unknown=""})(ut||(ut={}));function Pg(s){if(!s)if(an){const n=document.querySelector("base");s=n&&n.getAttribute("href")||"/",s=s.replace(/^\w+:\/\/[^\/]+/,"")}else s="/";return s[0]!=="/"&&s[0]!=="#"&&(s="/"+s),$g(s)}const Og=/^[^#]+#/;function Lg(s,n){return s.replace(Og,"#")+n}function Ng(s,n){const o=document.documentElement.getBoundingClientRect(),t=s.getBoundingClientRect();return{behavior:n.behavior,left:t.left-o.left-(n.left||0),top:t.top-o.top-(n.top||0)}}const ol=()=>({left:window.pageXOffset,top:window.pageYOffset});function qg(s){let n;if("el"in s){const o=s.el,t=typeof o=="string"&&o.startsWith("#");if(typeof s.el=="string"&&(!t||!document.getElementById(s.el.slice(1))))try{const l=document.querySelector(s.el);if(t&&l){Fe(`The selector "${s.el}" should be passed as "el: document.querySelector('${s.el}')" because it starts with "#".`);return}}catch{Fe(`The selector "${s.el}" is invalid. If you are using an id selector, make sure to escape it. You can find more information about escaping characters in selectors at https://mathiasbynens.be/notes/css-escapes or use CSS.escape (https://developer.mozilla.org/en-US/docs/Web/API/CSS/escape).`);return}const r=typeof o=="string"?t?document.getElementById(o.slice(1)):document.querySelector(o):o;if(!r){Fe(`Couldn't find element using selector "${s.el}" returned by scrollBehavior.`);return}n=Ng(r,s)}else n=s;"scrollBehavior"in document.documentElement.style?window.scrollTo(n):window.scrollTo(n.left!=null?n.left:window.pageXOffset,n.top!=null?n.top:window.pageYOffset)}function Xi(s,n){return(history.state?history.state.position-n:-1)+s}const da=new Map;function Ug(s,n){da.set(s,n)}function Hg(s){const n=da.get(s);return da.delete(s),n}let Vg=()=>location.protocol+"//"+location.host;function Vy(s,n){const{pathname:o,search:t,hash:r}=n,l=s.indexOf("#");if(l>-1){let i=r.includes(s.slice(l))?s.slice(l).length:1,p=r.slice(i);return p[0]!=="/"&&(p="/"+p),Zi(p,"")}return Zi(o,s)+t+r}function jg(s,n,o,t){let r=[],l=[],c=null;const i=({state:f})=>{const h=Vy(s,location),m=o.value,g=n.value;let B=0;if(f){if(o.value=h,n.value=f,c&&c===m){c=null;return}B=g?f.position-g.position:0}else t(h);r.forEach(k=>{k(o.value,m,{delta:B,type:wt.pop,direction:B?B>0?ut.forward:ut.back:ut.unknown})})};function p(){c=o.value}function u(f){r.push(f);const h=()=>{const m=r.indexOf(f);m>-1&&r.splice(m,1)};return l.push(h),h}function y(){const{history:f}=window;f.state&&f.replaceState(Oe({},f.state,{scroll:ol()}),"")}function d(){for(const f of l)f();l=[],window.removeEventListener("popstate",i),window.removeEventListener("beforeunload",y)}return window.addEventListener("popstate",i),window.addEventListener("beforeunload",y),{pauseListeners:p,listen:u,destroy:d}}function ep(s,n,o,t=!1,r=!1){return{back:s,current:n,forward:o,replaced:t,position:window.history.length,scroll:r?ol():null}}function Gg(s){const{history:n,location:o}=window,t={value:Vy(s,o)},r={value:n.state};r.value||l(t.value,{back:null,current:t.value,forward:null,position:n.length-1,replaced:!0,scroll:null},!0);function l(p,u,y){const d=s.indexOf("#"),f=d>-1?(o.host&&document.querySelector("base")?s:s.slice(d))+p:Vg()+s+p;try{n[y?"replaceState":"pushState"](u,"",f),r.value=u}catch(h){Fe("Error with push/replace State",h),o[y?"replace":"assign"](f)}}function c(p,u){const y=Oe({},n.state,ep(r.value.back,p,r.value.forward,!0),u,{position:r.value.position});l(p,y,!0),t.value=p}function i(p,u){const y=Oe({},r.value,n.state,{forward:p,scroll:ol()});n.state||Fe(`history.state seems to have been manually replaced without preserving the necessary values. Make sure to preserve existing history state if you are manually calling history.replaceState:

history.replaceState(history.state, '', url)

You can find more information at https://next.router.vuejs.org/guide/migration/#usage-of-history-state.`),l(y.current,y,!0);const d=Oe({},ep(t.value,p,null),{position:y.position+1},u);l(p,d,!1),t.value=p}return{location:t,state:r,push:i,replace:c}}function Wg(s){s=Pg(s);const n=Gg(s),o=jg(s,n.state,n.location,n.replace);function t(l,c=!0){c||o.pauseListeners(),history.go(l)}const r=Oe({location:"",base:s,go:t,createHref:Lg.bind(null,s)},n,o);return Object.defineProperty(r,"location",{enumerable:!0,get:()=>n.location.value}),Object.defineProperty(r,"state",{enumerable:!0,get:()=>n.state.value}),r}function zg(s){return typeof s=="string"||s&&typeof s=="object"}function jy(s){return typeof s=="string"||typeof s=="symbol"}const An={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},Gy=Symbol("navigation failure");var sp;(function(s){s[s.aborted=4]="aborted",s[s.cancelled=8]="cancelled",s[s.duplicated=16]="duplicated"})(sp||(sp={}));const Kg={[1]({location:s,currentLocation:n}){return`No match for
 ${JSON.stringify(s)}${n?`
while being at
`+JSON.stringify(n):""}`},[2]({from:s,to:n}){return`Redirected from "${s.fullPath}" to "${Zg(n)}" via a navigation guard.`},[4]({from:s,to:n}){return`Navigation aborted from "${s.fullPath}" to "${n.fullPath}" via a navigation guard.`},[8]({from:s,to:n}){return`Navigation cancelled from "${s.fullPath}" to "${n.fullPath}" with a new navigation.`},[16]({from:s,to:n}){return`Avoided redundant navigation to current location: "${s.fullPath}".`}};function Po(s,n){return Oe(new Error(Kg[s](n)),{type:s,[Gy]:!0},n)}function nn(s,n){return s instanceof Error&&Gy in s&&(n==null||!!(s.type&n))}const Yg=["params","query","hash"];function Zg(s){if(typeof s=="string")return s;if("path"in s)return s.path;const n={};for(const o of Yg)o in s&&(n[o]=s[o]);return JSON.stringify(n,null,2)}const np="[^/]+?",Qg={sensitive:!1,strict:!1,start:!0,end:!0},Jg=/[.+*?^${}()[\]/\\]/g;function Xg(s,n){const o=Oe({},Qg,n),t=[];let r=o.start?"^":"";const l=[];for(const u of s){const y=u.length?[]:[90];o.strict&&!u.length&&(r+="/");for(let d=0;d<u.length;d++){const f=u[d];let h=40+(o.sensitive?.25:0);if(f.type===0)d||(r+="/"),r+=f.value.replace(Jg,"\\$&"),h+=40;else if(f.type===1){const{value:m,repeatable:g,optional:B,regexp:k}=f;l.push({name:m,repeatable:g,optional:B});const v=k||np;if(v!==np){h+=10;try{new RegExp(`(${v})`)}catch(w){throw new Error(`Invalid custom RegExp for param "${m}" (${v}): `+w.message)}}let E=g?`((?:${v})(?:/(?:${v}))*)`:`(${v})`;d||(E=B&&u.length<2?`(?:/${E})`:"/"+E),B&&(E+="?"),r+=E,h+=20,B&&(h+=-8),g&&(h+=-20),v===".*"&&(h+=-50)}y.push(h)}t.push(y)}if(o.strict&&o.end){const u=t.length-1;t[u][t[u].length-1]+=.7000000000000001}o.strict||(r+="/?"),o.end?r+="$":o.strict&&(r+="(?:/|$)");const c=new RegExp(r,o.sensitive?"":"i");function i(u){const y=u.match(c),d={};if(!y)return null;for(let f=1;f<y.length;f++){const h=y[f]||"",m=l[f-1];d[m.name]=h&&m.repeatable?h.split("/"):h}return d}function p(u){let y="",d=!1;for(const f of s){(!d||!y.endsWith("/"))&&(y+="/"),d=!1;for(const h of f)if(h.type===0)y+=h.value;else if(h.type===1){const{value:m,repeatable:g,optional:B}=h,k=m in u?u[m]:"";if(Rs(k)&&!g)throw new Error(`Provided param "${m}" is an array but it is not repeatable (* or + modifiers)`);const v=Rs(k)?k.join("/"):k;if(!v)if(B)f.length<2&&(y.endsWith("/")?y=y.slice(0,-1):d=!0);else throw new Error(`Missing required param "${m}"`);y+=v}}return y||"/"}return{re:c,score:t,keys:l,parse:i,stringify:p}}function eB(s,n){let o=0;for(;o<s.length&&o<n.length;){const t=n[o]-s[o];if(t)return t;o++}return s.length<n.length?s.length===1&&s[0]===40+40?-1:1:s.length>n.length?n.length===1&&n[0]===40+40?1:-1:0}function sB(s,n){let o=0;const t=s.score,r=n.score;for(;o<t.length&&o<r.length;){const l=eB(t[o],r[o]);if(l)return l;o++}if(Math.abs(r.length-t.length)===1){if(op(t))return 1;if(op(r))return-1}return r.length-t.length}function op(s){const n=s[s.length-1];return s.length>0&&n[n.length-1]<0}const nB={type:0,value:""},oB=/[a-zA-Z0-9_]/;function tB(s){if(!s)return[[]];if(s==="/")return[[nB]];if(!s.startsWith("/"))throw new Error(`Route paths should start with a "/": "${s}" should be "/${s}".`);function n(h){throw new Error(`ERR (${o})/"${u}": ${h}`)}let o=0,t=o;const r=[];let l;function c(){l&&r.push(l),l=[]}let i=0,p,u="",y="";function d(){u&&(o===0?l.push({type:0,value:u}):o===1||o===2||o===3?(l.length>1&&(p==="*"||p==="+")&&n(`A repeatable param (${u}) must be alone in its segment. eg: '/:ids+.`),l.push({type:1,value:u,regexp:y,repeatable:p==="*"||p==="+",optional:p==="*"||p==="?"})):n("Invalid state to consume buffer"),u="")}function f(){u+=p}for(;i<s.length;){if(p=s[i++],p==="\\"&&o!==2){t=o,o=4;continue}switch(o){case 0:p==="/"?(u&&d(),c()):p===":"?(d(),o=1):f();break;case 4:f(),o=t;break;case 1:p==="("?o=2:oB.test(p)?f():(d(),o=0,p!=="*"&&p!=="?"&&p!=="+"&&i--);break;case 2:p===")"?y[y.length-1]=="\\"?y=y.slice(0,-1)+p:o=3:y+=p;break;case 3:d(),o=0,p!=="*"&&p!=="?"&&p!=="+"&&i--,y="";break;default:n("Unknown state");break}}return o===2&&n(`Unfinished custom RegExp for param "${u}"`),d(),c(),r}function rB(s,n,o){const t=Xg(tB(s.path),o);{const l=new Set;for(const c of t.keys)l.has(c.name)&&Fe(`Found duplicated params with name "${c.name}" for path "${s.path}". Only the last one will be available on "$route.params".`),l.add(c.name)}const r=Oe(t,{record:s,parent:n,children:[],alias:[]});return n&&!r.record.aliasOf==!n.record.aliasOf&&n.children.push(r),r}function lB(s,n){const o=[],t=new Map;n=lp({strict:!1,end:!0,sensitive:!1},n);function r(y){return t.get(y)}function l(y,d,f){const h=!f,m=aB(y);uB(m,d),m.aliasOf=f&&f.record;const g=lp(n,y),B=[m];if("alias"in y){const E=typeof y.alias=="string"?[y.alias]:y.alias;for(const w of E)B.push(Oe({},m,{components:f?f.record.components:m.components,path:w,aliasOf:f?f.record:m}))}let k,v;for(const E of B){const{path:w}=E;if(d&&w[0]!=="/"){const T=d.record.path,U=T[T.length-1]==="/"?"":"/";E.path=d.record.path+(w&&U+w)}if(E.path==="*")throw new Error(`Catch all routes ("*") must now be defined using a param with a custom regexp.
See more at https://next.router.vuejs.org/guide/migration/#removed-star-or-catch-all-routes.`);if(k=rB(E,d,g),d&&w[0]==="/"&&yB(k,d),f?(f.alias.push(k),pB(f,k)):(v=v||k,v!==k&&v.alias.push(k),h&&y.name&&!rp(k)&&c(y.name)),m.children){const T=m.children;for(let U=0;U<T.length;U++)l(T[U],k,f&&f.children[U])}f=f||k,(k.record.components&&Object.keys(k.record.components).length||k.record.name||k.record.redirect)&&p(k)}return v?()=>{c(v)}:pt}function c(y){if(jy(y)){const d=t.get(y);d&&(t.delete(y),o.splice(o.indexOf(d),1),d.children.forEach(c),d.alias.forEach(c))}else{const d=o.indexOf(y);d>-1&&(o.splice(d,1),y.record.name&&t.delete(y.record.name),y.children.forEach(c),y.alias.forEach(c))}}function i(){return o}function p(y){let d=0;for(;d<o.length&&sB(y,o[d])>=0&&(y.record.path!==o[d].record.path||!Wy(y,o[d]));)d++;o.splice(d,0,y),y.record.name&&!rp(y)&&t.set(y.record.name,y)}function u(y,d){let f,h={},m,g;if("name"in y&&y.name){if(f=t.get(y.name),!f)throw Po(1,{location:y});{const v=Object.keys(y.params||{}).filter(E=>!f.keys.find(w=>w.name===E));v.length&&Fe(`Discarded invalid param(s) "${v.join('", "')}" when navigating. See https://github.com/vuejs/router/blob/main/packages/router/CHANGELOG.md#414-2022-08-22 for more details.`)}g=f.record.name,h=Oe(tp(d.params,f.keys.filter(v=>!v.optional).map(v=>v.name)),y.params&&tp(y.params,f.keys.map(v=>v.name))),m=f.stringify(h)}else if("path"in y)m=y.path,m.startsWith("/")||Fe(`The Matcher cannot resolve relative paths but received "${m}". Unless you directly called \`matcher.resolve("${m}")\`, this is probably a bug in vue-router. Please open an issue at https://new-issue.vuejs.org/?repo=vuejs/router.`),f=o.find(v=>v.re.test(m)),f&&(h=f.parse(m),g=f.record.name);else{if(f=d.name?t.get(d.name):o.find(v=>v.re.test(d.path)),!f)throw Po(1,{location:y,currentLocation:d});g=f.record.name,h=Oe({},d.params,y.params),m=f.stringify(h)}const B=[];let k=f;for(;k;)B.unshift(k.record),k=k.parent;return{name:g,path:m,params:h,matched:B,meta:iB(B)}}return s.forEach(y=>l(y)),{addRoute:l,resolve:u,removeRoute:c,getRoutes:i,getRecordMatcher:r}}function tp(s,n){const o={};for(const t of n)t in s&&(o[t]=s[t]);return o}function aB(s){return{path:s.path,redirect:s.redirect,name:s.name,meta:s.meta||{},aliasOf:void 0,beforeEnter:s.beforeEnter,props:cB(s),children:s.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in s?s.components||null:s.component&&{default:s.component}}}function cB(s){const n={},o=s.props||!1;if("component"in s)n.default=o;else for(const t in s.components)n[t]=typeof o=="boolean"?o:o[t];return n}function rp(s){for(;s;){if(s.record.aliasOf)return!0;s=s.parent}return!1}function iB(s){return s.reduce((n,o)=>Oe(n,o.meta),{})}function lp(s,n){const o={};for(const t in s)o[t]=t in n?n[t]:s[t];return o}function fa(s,n){return s.name===n.name&&s.optional===n.optional&&s.repeatable===n.repeatable}function pB(s,n){for(const o of s.keys)if(!o.optional&&!n.keys.find(fa.bind(null,o)))return Fe(`Alias "${n.record.path}" and the original record: "${s.record.path}" must have the exact same param named "${o.name}"`);for(const o of n.keys)if(!o.optional&&!s.keys.find(fa.bind(null,o)))return Fe(`Alias "${n.record.path}" and the original record: "${s.record.path}" must have the exact same param named "${o.name}"`)}function uB(s,n){n&&n.record.name&&!s.name&&!s.path&&Fe(`The route named "${String(n.record.name)}" has a child without a name and an empty path. Using that name won't render the empty path child so you probably want to move the name to the child instead. If this is intentional, add a name to the child route to remove the warning.`)}function yB(s,n){for(const o of n.keys)if(!s.keys.find(fa.bind(null,o)))return Fe(`Absolute path "${s.record.path}" must have the exact same param named "${o.name}" as its parent "${n.record.path}".`)}function Wy(s,n){return n.children.some(o=>o===s||Wy(s,o))}const zy=/#/g,dB=/&/g,fB=/\//g,mB=/=/g,hB=/\?/g,Ky=/\+/g,_B=/%5B/g,gB=/%5D/g,Yy=/%5E/g,BB=/%60/g,Zy=/%7B/g,AB=/%7C/g,Qy=/%7D/g,vB=/%20/g;function yc(s){return encodeURI(""+s).replace(AB,"|").replace(_B,"[").replace(gB,"]")}function CB(s){return yc(s).replace(Zy,"{").replace(Qy,"}").replace(Yy,"^")}function ma(s){return yc(s).replace(Ky,"%2B").replace(vB,"+").replace(zy,"%23").replace(dB,"%26").replace(BB,"`").replace(Zy,"{").replace(Qy,"}").replace(Yy,"^")}function EB(s){return ma(s).replace(mB,"%3D")}function bB(s){return yc(s).replace(zy,"%23").replace(hB,"%3F")}function kB(s){return s==null?"":bB(s).replace(fB,"%2F")}function St(s){try{return decodeURIComponent(""+s)}catch{Fe(`Error decoding "${s}". Using original value`)}return""+s}function DB(s){const n={};if(s===""||s==="?")return n;const t=(s[0]==="?"?s.slice(1):s).split("&");for(let r=0;r<t.length;++r){const l=t[r].replace(Ky," "),c=l.indexOf("="),i=St(c<0?l:l.slice(0,c)),p=c<0?null:St(l.slice(c+1));if(i in n){let u=n[i];Rs(u)||(u=n[i]=[u]),u.push(p)}else n[i]=p}return n}function ap(s){let n="";for(let o in s){const t=s[o];if(o=EB(o),t==null){t!==void 0&&(n+=(n.length?"&":"")+o);continue}(Rs(t)?t.map(l=>l&&ma(l)):[t&&ma(t)]).forEach(l=>{l!==void 0&&(n+=(n.length?"&":"")+o,l!=null&&(n+="="+l))})}return n}function wB(s){const n={};for(const o in s){const t=s[o];t!==void 0&&(n[o]=Rs(t)?t.map(r=>r==null?null:""+r):t==null?t:""+t)}return n}const SB=Symbol("router view location matched"),cp=Symbol("router view depth"),dc=Symbol("router"),Jy=Symbol("route location"),ha=Symbol("router view location");function Ko(){let s=[];function n(t){return s.push(t),()=>{const r=s.indexOf(t);r>-1&&s.splice(r,1)}}function o(){s=[]}return{add:n,list:()=>s,reset:o}}function bn(s,n,o,t,r){const l=t&&(t.enterCallbacks[r]=t.enterCallbacks[r]||[]);return()=>new Promise((c,i)=>{const p=d=>{d===!1?i(Po(4,{from:o,to:n})):d instanceof Error?i(d):zg(d)?i(Po(2,{from:n,to:d})):(l&&t.enterCallbacks[r]===l&&typeof d=="function"&&l.push(d),c())},u=s.call(t&&t.instances[r],n,o,RB(p,n,o));let y=Promise.resolve(u);if(s.length<3&&(y=y.then(p)),s.length>2){const d=`The "next" callback was never called inside of ${s.name?'"'+s.name+'"':""}:
${s.toString()}
. If you are returning a value instead of calling "next", make sure to remove the "next" parameter from your function.`;if(typeof u=="object"&&"then"in u)y=y.then(f=>p._called?f:(Fe(d),Promise.reject(new Error("Invalid navigation guard"))));else if(u!==void 0&&!p._called){Fe(d),i(new Error("Invalid navigation guard"));return}}y.catch(d=>i(d))})}function RB(s,n,o){let t=0;return function(){t++===1&&Fe(`The "next" callback was called more than once in one navigation guard when going from "${o.fullPath}" to "${n.fullPath}". It should be called exactly one time in each navigation guard. This will fail in production.`),s._called=!0,t===1&&s.apply(null,arguments)}}function Dl(s,n,o,t){const r=[];for(const l of s){!l.components&&!l.children.length&&Fe(`Record with path "${l.path}" is either missing a "component(s)" or "children" property.`);for(const c in l.components){let i=l.components[c];{if(!i||typeof i!="object"&&typeof i!="function")throw Fe(`Component "${c}" in record with path "${l.path}" is not a valid component. Received "${String(i)}".`),new Error("Invalid route component");if("then"in i){Fe(`Component "${c}" in record with path "${l.path}" is a Promise instead of a function that returns a Promise. Did you write "import('./MyPage.vue')" instead of "() => import('./MyPage.vue')" ? This will break in production if not fixed.`);const p=i;i=()=>p}else i.__asyncLoader&&!i.__warnedDefineAsync&&(i.__warnedDefineAsync=!0,Fe(`Component "${c}" in record with path "${l.path}" is defined using "defineAsyncComponent()". Write "() => import('./MyPage.vue')" instead of "defineAsyncComponent(() => import('./MyPage.vue'))".`))}if(!(n!=="beforeRouteEnter"&&!l.instances[c]))if(xB(i)){const u=(i.__vccOpts||i)[n];u&&r.push(bn(u,o,t,l,c))}else{let p=i();"catch"in p||(Fe(`Component "${c}" in record with path "${l.path}" is a function that does not return a Promise. If you were passing a functional component, make sure to add a "displayName" to the component. This will break in production if not fixed.`),p=Promise.resolve(p)),r.push(()=>p.then(u=>{if(!u)return Promise.reject(new Error(`Couldn't resolve component "${c}" at "${l.path}"`));const y=xg(u)?u.default:u;l.components[c]=y;const f=(y.__vccOpts||y)[n];return f&&bn(f,o,t,l,c)()}))}}}return r}function xB(s){return typeof s=="object"||"displayName"in s||"props"in s||"__vccOpts"in s}function ip(s){const n=I(dc),o=I(Jy),t=F(()=>n.resolve(D(s.to))),r=F(()=>{const{matched:p}=t.value,{length:u}=p,y=p[u-1],d=o.matched;if(!y||!d.length)return-1;const f=d.findIndex(Ln.bind(null,y));if(f>-1)return f;const h=pp(p[u-2]);return u>1&&pp(y)===h&&d[d.length-1].path!==h?d.findIndex(Ln.bind(null,p[u-2])):f}),l=F(()=>r.value>-1&&TB(o.params,t.value.params)),c=F(()=>r.value>-1&&r.value===o.matched.length-1&&Hy(o.params,t.value.params));function i(p={}){return IB(p)?n[D(s.replace)?"replace":"push"](D(s.to)).catch(pt):Promise.resolve()}if(an){const p=xs();if(p){const u={route:t.value,isActive:l.value,isExactActive:c.value};p.__vrl_devtools=p.__vrl_devtools||[],p.__vrl_devtools.push(u),yo(()=>{u.route=t.value,u.isActive=l.value,u.isExactActive=c.value},{flush:"post"})}}return{route:t,href:F(()=>t.value.href),isActive:l,isExactActive:c,navigate:i}}const FB=Pe({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:ip,setup(s,{slots:n}){const o=Ge(ip(s)),{options:t}=I(dc),r=F(()=>({[up(s.activeClass,t.linkActiveClass,"router-link-active")]:o.isActive,[up(s.exactActiveClass,t.linkExactActiveClass,"router-link-exact-active")]:o.isExactActive}));return()=>{const l=n.default&&n.default(o);return s.custom?l:fs("a",{"aria-current":o.isExactActive?s.ariaCurrentValue:null,href:o.href,onClick:o.navigate,class:r.value},l)}}}),$B=FB;function IB(s){if(!(s.metaKey||s.altKey||s.ctrlKey||s.shiftKey)&&!s.defaultPrevented&&!(s.button!==void 0&&s.button!==0)){if(s.currentTarget&&s.currentTarget.getAttribute){const n=s.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(n))return}return s.preventDefault&&s.preventDefault(),!0}}function TB(s,n){for(const o in n){const t=n[o],r=s[o];if(typeof t=="string"){if(t!==r)return!1}else if(!Rs(r)||r.length!==t.length||t.some((l,c)=>l!==r[c]))return!1}return!0}function pp(s){return s?s.aliasOf?s.aliasOf.path:s.path:""}const up=(s,n,o)=>s??n??o,MB=Pe({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(s,{attrs:n,slots:o}){OB();const t=I(ha),r=F(()=>s.route||t.value),l=I(cp,0),c=F(()=>{let u=D(l);const{matched:y}=r.value;let d;for(;(d=y[u])&&!d.components;)u++;return u}),i=F(()=>r.value.matched[c.value]);Ds(cp,F(()=>c.value+1)),Ds(SB,i),Ds(ha,r);const p=Z();return Be(()=>[p.value,i.value,s.name],([u,y,d],[f,h,m])=>{y&&(y.instances[d]=u,h&&h!==y&&u&&u===f&&(y.leaveGuards.size||(y.leaveGuards=h.leaveGuards),y.updateGuards.size||(y.updateGuards=h.updateGuards))),u&&y&&(!h||!Ln(y,h)||!f)&&(y.enterCallbacks[d]||[]).forEach(g=>g(u))},{flush:"post"}),()=>{const u=r.value,y=s.name,d=i.value,f=d&&d.components[y];if(!f)return yp(o.default,{Component:f,route:u});const h=d.props[y],m=h?h===!0?u.params:typeof h=="function"?h(u):h:null,B=fs(f,Oe({},m,n,{onVnodeUnmounted:k=>{k.component.isUnmounted&&(d.instances[y]=null)},ref:p}));if(an&&B.ref){const k={depth:c.value,name:d.name,path:d.path,meta:d.meta};(Rs(B.ref)?B.ref.map(E=>E.i):[B.ref.i]).forEach(E=>{E.__vrv_devtools=k})}return yp(o.default,{Component:B,route:u})||B}}});function yp(s,n){if(!s)return null;const o=s(n);return o.length===1?o[0]:o}const PB=MB;function OB(){const s=xs(),n=s.parent&&s.parent.type.name;if(n&&(n==="KeepAlive"||n.includes("Transition"))){const o=n==="KeepAlive"?"keep-alive":"transition";Fe(`<router-view> can no longer be used directly inside <transition> or <keep-alive>.
Use slot props instead:

<router-view v-slot="{ Component }">
  <${o}>
    <component :is="Component" />
  </${o}>
</router-view>`)}}function Yo(s,n){const o=Oe({},s,{matched:s.matched.map(t=>WB(t,["instances","children","aliasOf"]))});return{_custom:{type:null,readOnly:!0,display:s.fullPath,tooltip:n,value:o}}}function tr(s){return{_custom:{display:s}}}let LB=0;function NB(s,n,o){if(n.__hasDevtools)return;n.__hasDevtools=!0;const t=LB++;Rg({id:"org.vuejs.router"+(t?"."+t:""),label:"Vue Router",packageName:"vue-router",homepage:"https://router.vuejs.org",logo:"https://router.vuejs.org/logo.png",componentStateTypes:["Routing"],app:s},r=>{typeof r.now!="function"&&console.warn("[Vue Router]: You seem to be using an outdated version of Vue Devtools. Are you still using the Beta release instead of the stable one? You can find the links at https://devtools.vuejs.org/guide/installation.html."),r.on.inspectComponent((y,d)=>{y.instanceData&&y.instanceData.state.push({type:"Routing",key:"$route",editable:!1,value:Yo(n.currentRoute.value,"Current Route")})}),r.on.visitComponentTree(({treeNode:y,componentInstance:d})=>{if(d.__vrv_devtools){const f=d.__vrv_devtools;y.tags.push({label:(f.name?`${f.name.toString()}: `:"")+f.path,textColor:0,tooltip:"This component is rendered by &lt;router-view&gt;",backgroundColor:Xy})}Rs(d.__vrl_devtools)&&(d.__devtoolsApi=r,d.__vrl_devtools.forEach(f=>{let h=nd,m="";f.isExactActive?(h=sd,m="This is exactly active"):f.isActive&&(h=ed,m="This link is active"),y.tags.push({label:f.route.path,textColor:0,tooltip:m,backgroundColor:h})}))}),Be(n.currentRoute,()=>{p(),r.notifyComponentUpdate(),r.sendInspectorTree(i),r.sendInspectorState(i)});const l="router:navigations:"+t;r.addTimelineLayer({id:l,label:`Router${t?" "+t:""} Navigations`,color:4237508}),n.onError((y,d)=>{r.addTimelineEvent({layerId:l,event:{title:"Error during Navigation",subtitle:d.fullPath,logType:"error",time:r.now(),data:{error:y},groupId:d.meta.__navigationId}})});let c=0;n.beforeEach((y,d)=>{const f={guard:tr("beforeEach"),from:Yo(d,"Current Location during this navigation"),to:Yo(y,"Target location")};Object.defineProperty(y.meta,"__navigationId",{value:c++}),r.addTimelineEvent({layerId:l,event:{time:r.now(),title:"Start of navigation",subtitle:y.fullPath,data:f,groupId:y.meta.__navigationId}})}),n.afterEach((y,d,f)=>{const h={guard:tr("afterEach")};f?(h.failure={_custom:{type:Error,readOnly:!0,display:f?f.message:"",tooltip:"Navigation Failure",value:f}},h.status=tr("❌")):h.status=tr("✅"),h.from=Yo(d,"Current Location during this navigation"),h.to=Yo(y,"Target location"),r.addTimelineEvent({layerId:l,event:{title:"End of navigation",subtitle:y.fullPath,time:r.now(),data:h,logType:f?"warning":"default",groupId:y.meta.__navigationId}})});const i="router-inspector:"+t;r.addInspector({id:i,label:"Routes"+(t?" "+t:""),icon:"book",treeFilterPlaceholder:"Search routes"});function p(){if(!u)return;const y=u;let d=o.getRoutes().filter(f=>!f.parent);d.forEach(rd),y.filter&&(d=d.filter(f=>_a(f,y.filter.toLowerCase()))),d.forEach(f=>td(f,n.currentRoute.value)),y.rootNodes=d.map(od)}let u;r.on.getInspectorTree(y=>{u=y,y.app===s&&y.inspectorId===i&&p()}),r.on.getInspectorState(y=>{if(y.app===s&&y.inspectorId===i){const f=o.getRoutes().find(h=>h.record.__vd_id===y.nodeId);f&&(y.state={options:UB(f)})}}),r.sendInspectorTree(i),r.sendInspectorState(i)})}function qB(s){return s.optional?s.repeatable?"*":"?":s.repeatable?"+":""}function UB(s){const{record:n}=s,o=[{editable:!1,key:"path",value:n.path}];return n.name!=null&&o.push({editable:!1,key:"name",value:n.name}),o.push({editable:!1,key:"regexp",value:s.re}),s.keys.length&&o.push({editable:!1,key:"keys",value:{_custom:{type:null,readOnly:!0,display:s.keys.map(t=>`${t.name}${qB(t)}`).join(" "),tooltip:"Param keys",value:s.keys}}}),n.redirect!=null&&o.push({editable:!1,key:"redirect",value:n.redirect}),s.alias.length&&o.push({editable:!1,key:"aliases",value:s.alias.map(t=>t.record.path)}),Object.keys(s.record.meta).length&&o.push({editable:!1,key:"meta",value:s.record.meta}),o.push({key:"score",editable:!1,value:{_custom:{type:null,readOnly:!0,display:s.score.map(t=>t.join(", ")).join(" | "),tooltip:"Score used to sort routes",value:s.score}}}),o}const Xy=15485081,ed=2450411,sd=8702998,HB=2282478,nd=16486972,VB=6710886;function od(s){const n=[],{record:o}=s;o.name!=null&&n.push({label:String(o.name),textColor:0,backgroundColor:HB}),o.aliasOf&&n.push({label:"alias",textColor:0,backgroundColor:nd}),s.__vd_match&&n.push({label:"matches",textColor:0,backgroundColor:Xy}),s.__vd_exactActive&&n.push({label:"exact",textColor:0,backgroundColor:sd}),s.__vd_active&&n.push({label:"active",textColor:0,backgroundColor:ed}),o.redirect&&n.push({label:typeof o.redirect=="string"?`redirect: ${o.redirect}`:"redirects",textColor:16777215,backgroundColor:VB});let t=o.__vd_id;return t==null&&(t=String(jB++),o.__vd_id=t),{id:t,label:o.path,tags:n,children:s.children.map(od)}}let jB=0;const GB=/^\/(.*)\/([a-z]*)$/;function td(s,n){const o=n.matched.length&&Ln(n.matched[n.matched.length-1],s.record);s.__vd_exactActive=s.__vd_active=o,o||(s.__vd_active=n.matched.some(t=>Ln(t,s.record))),s.children.forEach(t=>td(t,n))}function rd(s){s.__vd_match=!1,s.children.forEach(rd)}function _a(s,n){const o=String(s.re).match(GB);if(s.__vd_match=!1,!o||o.length<3)return!1;if(new RegExp(o[1].replace(/\$$/,""),o[2]).test(n))return s.children.forEach(c=>_a(c,n)),s.record.path!=="/"||n==="/"?(s.__vd_match=s.re.test(n),!0):!1;const r=s.record.path.toLowerCase(),l=St(r);return!n.startsWith("/")&&(l.includes(n)||r.includes(n))||l.startsWith(n)||r.startsWith(n)||s.record.name&&String(s.record.name).includes(n)?!0:s.children.some(c=>_a(c,n))}function WB(s,n){const o={};for(const t in s)n.includes(t)||(o[t]=s[t]);return o}function zB(s){const n=lB(s.routes,s),o=s.parseQuery||DB,t=s.stringifyQuery||ap,r=s.history;if(!r)throw new Error('Provide the "history" option when calling "createRouter()": https://next.router.vuejs.org/api/#history.');const l=Ko(),c=Ko(),i=Ko(),p=en(An);let u=An;an&&s.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const y=bl.bind(null,x=>""+x),d=bl.bind(null,kB),f=bl.bind(null,St);function h(x,ne){let K,re;return jy(x)?(K=n.getRecordMatcher(x),re=ne):re=x,n.addRoute(re,K)}function m(x){const ne=n.getRecordMatcher(x);ne?n.removeRoute(ne):Fe(`Cannot remove non-existent route "${String(x)}"`)}function g(){return n.getRoutes().map(x=>x.record)}function B(x){return!!n.getRecordMatcher(x)}function k(x,ne){if(ne=Oe({},ne||p.value),typeof x=="string"){const ye=kl(o,x,ne.path),_=n.resolve({path:ye.path},ne),A=r.createHref(ye.fullPath);return A.startsWith("//")?Fe(`Location "${x}" resolved to "${A}". A resolved location cannot start with multiple slashes.`):_.matched.length||Fe(`No match found for location with path "${x}"`),Oe(ye,_,{params:f(_.params),hash:St(ye.hash),redirectedFrom:void 0,href:A})}let K;if("path"in x)"params"in x&&!("name"in x)&&Object.keys(x.params).length&&Fe(`Path "${x.path}" was passed with params but they will be ignored. Use a named route alongside params instead.`),K=Oe({},x,{path:kl(o,x.path,ne.path).path});else{const ye=Oe({},x.params);for(const _ in ye)ye[_]==null&&delete ye[_];K=Oe({},x,{params:d(x.params)}),ne.params=d(ne.params)}const re=n.resolve(K,ne),be=x.hash||"";be&&!be.startsWith("#")&&Fe(`A \`hash\` should always start with the character "#". Replace "${be}" with "#${be}".`),re.params=y(f(re.params));const Se=Ig(t,Oe({},x,{hash:CB(be),path:re.path})),me=r.createHref(Se);return me.startsWith("//")?Fe(`Location "${x}" resolved to "${me}". A resolved location cannot start with multiple slashes.`):re.matched.length||Fe(`No match found for location with path "${"path"in x?x.path:x}"`),Oe({fullPath:Se,hash:be,query:t===ap?wB(x.query):x.query||{}},re,{redirectedFrom:void 0,href:me})}function v(x){return typeof x=="string"?kl(o,x,p.value.path):Oe({},x)}function E(x,ne){if(u!==x)return Po(8,{from:ne,to:x})}function w(x){return z(x)}function T(x){return w(Oe(v(x),{replace:!0}))}function U(x){const ne=x.matched[x.matched.length-1];if(ne&&ne.redirect){const{redirect:K}=ne;let re=typeof K=="function"?K(x):K;if(typeof re=="string"&&(re=re.includes("?")||re.includes("#")?re=v(re):{path:re},re.params={}),!("path"in re)&&!("name"in re))throw Fe(`Invalid redirect found:
${JSON.stringify(re,null,2)}
 when navigating to "${x.fullPath}". A redirect must contain a name or path. This will break in production.`),new Error("Invalid redirect");return Oe({query:x.query,hash:x.hash,params:"path"in re?{}:x.params},re)}}function z(x,ne){const K=u=k(x),re=p.value,be=x.state,Se=x.force,me=x.replace===!0,ye=U(K);if(ye)return z(Oe(v(ye),{state:typeof ye=="object"?Oe({},be,ye.state):be,force:Se,replace:me}),ne||K);const _=K;_.redirectedFrom=ne;let A;return!Se&&Qi(t,re,K)&&(A=Po(16,{to:_,from:re}),Ne(re,re,!0,!1)),(A?Promise.resolve(A):G(_,re)).catch(S=>nn(S)?nn(S,2)?S:ve(S):se(S,_,re)).then(S=>{if(S){if(nn(S,2))return Qi(t,k(S.to),_)&&ne&&(ne._count=ne._count?ne._count+1:1)>10?(Fe(`Detected an infinite redirection in a navigation guard when going from "${re.fullPath}" to "${_.fullPath}". Aborting to avoid a Stack Overflow. This will break in production if not fixed.`),Promise.reject(new Error("Infinite redirect in navigation guard"))):z(Oe({replace:me},v(S.to),{state:typeof S.to=="object"?Oe({},be,S.to.state):be,force:Se}),ne||_)}else S=ue(_,re,!0,me,be);return oe(_,re,S),S})}function $(x,ne){const K=E(x,ne);return K?Promise.reject(K):Promise.resolve()}function G(x,ne){let K;const[re,be,Se]=KB(x,ne);K=Dl(re.reverse(),"beforeRouteLeave",x,ne);for(const ye of re)ye.leaveGuards.forEach(_=>{K.push(bn(_,x,ne))});const me=$.bind(null,x,ne);return K.push(me),Bo(K).then(()=>{K=[];for(const ye of l.list())K.push(bn(ye,x,ne));return K.push(me),Bo(K)}).then(()=>{K=Dl(be,"beforeRouteUpdate",x,ne);for(const ye of be)ye.updateGuards.forEach(_=>{K.push(bn(_,x,ne))});return K.push(me),Bo(K)}).then(()=>{K=[];for(const ye of x.matched)if(ye.beforeEnter&&!ne.matched.includes(ye))if(Rs(ye.beforeEnter))for(const _ of ye.beforeEnter)K.push(bn(_,x,ne));else K.push(bn(ye.beforeEnter,x,ne));return K.push(me),Bo(K)}).then(()=>(x.matched.forEach(ye=>ye.enterCallbacks={}),K=Dl(Se,"beforeRouteEnter",x,ne),K.push(me),Bo(K))).then(()=>{K=[];for(const ye of c.list())K.push(bn(ye,x,ne));return K.push(me),Bo(K)}).catch(ye=>nn(ye,8)?ye:Promise.reject(ye))}function oe(x,ne,K){for(const re of i.list())re(x,ne,K)}function ue(x,ne,K,re,be){const Se=E(x,ne);if(Se)return Se;const me=ne===An,ye=an?history.state:{};K&&(re||me?r.replace(x.fullPath,Oe({scroll:me&&ye&&ye.scroll},be)):r.push(x.fullPath,be)),p.value=x,Ne(x,ne,K,me),ve()}let J;function Ce(){J||(J=r.listen((x,ne,K)=>{if(!_n.listening)return;const re=k(x),be=U(re);if(be){z(Oe(be,{replace:!0}),re).catch(pt);return}u=re;const Se=p.value;an&&Ug(Xi(Se.fullPath,K.delta),ol()),G(re,Se).catch(me=>nn(me,12)?me:nn(me,2)?(z(me.to,re).then(ye=>{nn(ye,20)&&!K.delta&&K.type===wt.pop&&r.go(-1,!1)}).catch(pt),Promise.reject()):(K.delta&&r.go(-K.delta,!1),se(me,re,Se))).then(me=>{me=me||ue(re,Se,!1),me&&(K.delta&&!nn(me,8)?r.go(-K.delta,!1):K.type===wt.pop&&nn(me,20)&&r.go(-1,!1)),oe(re,Se,me)}).catch(pt)}))}let Te=Ko(),xe=Ko(),He;function se(x,ne,K){ve(x);const re=xe.list();return re.length?re.forEach(be=>be(x,ne,K)):(Fe("uncaught error during route navigation:"),console.error(x)),Promise.reject(x)}function pe(){return He&&p.value!==An?Promise.resolve():new Promise((x,ne)=>{Te.add([x,ne])})}function ve(x){return He||(He=!x,Ce(),Te.list().forEach(([ne,K])=>x?K(x):ne()),Te.reset()),x}function Ne(x,ne,K,re){const{scrollBehavior:be}=s;if(!an||!be)return Promise.resolve();const Se=!K&&Hg(Xi(x.fullPath,0))||(re||!K)&&history.state&&history.state.scroll||null;return os().then(()=>be(x,ne,Se)).then(me=>me&&qg(me)).catch(me=>se(me,x,ne))}const Cs=x=>r.go(x);let rs;const hs=new Set,_n={currentRoute:p,listening:!0,addRoute:h,removeRoute:m,hasRoute:B,getRoutes:g,resolve:k,options:s,push:w,replace:T,go:Cs,back:()=>Cs(-1),forward:()=>Cs(1),beforeEach:l.add,beforeResolve:c.add,afterEach:i.add,onError:xe.add,isReady:pe,install(x){const ne=this;x.component("RouterLink",$B),x.component("RouterView",PB),x.config.globalProperties.$router=ne,Object.defineProperty(x.config.globalProperties,"$route",{enumerable:!0,get:()=>D(p)}),an&&!rs&&p.value===An&&(rs=!0,w(r.location).catch(be=>{Fe("Unexpected error when starting the router:",be)}));const K={};for(const be in An)K[be]=F(()=>p.value[be]);x.provide(dc,ne),x.provide(Jy,Ge(K)),x.provide(ha,p);const re=x.unmount;hs.add(x),x.unmount=function(){hs.delete(x),hs.size<1&&(u=An,J&&J(),J=null,p.value=An,rs=!1,He=!1),re()},an&&NB(x,ne,n)}};return _n}function Bo(s){return s.reduce((n,o)=>n.then(()=>o()),Promise.resolve())}function KB(s,n){const o=[],t=[],r=[],l=Math.max(n.matched.length,s.matched.length);for(let c=0;c<l;c++){const i=n.matched[c];i&&(s.matched.find(u=>Ln(u,i))?t.push(i):o.push(i));const p=s.matched[c];p&&(n.matched.find(u=>Ln(u,p))||r.push(p))}return[o,t,r]}const wl=Z(!1),yt=Z(!1),Do=Z(!1),YB=Z(!0),ga=M_({xs:460,...x_}),lo=vg(),ld=ig(),ZB=F(()=>lo.height.value-lo.width.value/Fn>180),ad=lg(js?document.body:null),$o=R_(),QB=F(()=>{var s,n;return["INPUT","TEXTAREA"].includes(((s=$o.value)==null?void 0:s.tagName)||"")||((n=$o.value)==null?void 0:n.classList.contains("CodeMirror-code"))}),JB=F(()=>{var s;return["BUTTON","A"].includes(((s=$o.value)==null?void 0:s.tagName)||"")});Gs("slidev-camera","default");Gs("slidev-mic","default");const dr=Gs("slidev-scale",0),us=Gs("slidev-show-overview",!1),Sl=Gs("slidev-presenter-cursor",!0),dp=Gs("slidev-show-editor",!1);Gs("slidev-editor-width",js?window.innerWidth*.4:100);const cd=Oy(us);function fp(s,n,o,t=r=>r){return s*t(.5-n*(.5-o))}function XB(s){return[-s[0],-s[1]]}function qs(s,n){return[s[0]+n[0],s[1]+n[1]]}function Is(s,n){return[s[0]-n[0],s[1]-n[1]]}function Ns(s,n){return[s[0]*n,s[1]*n]}function e1(s,n){return[s[0]/n,s[1]/n]}function Zo(s){return[s[1],-s[0]]}function mp(s,n){return s[0]*n[0]+s[1]*n[1]}function s1(s,n){return s[0]===n[0]&&s[1]===n[1]}function n1(s){return Math.hypot(s[0],s[1])}function o1(s){return s[0]*s[0]+s[1]*s[1]}function hp(s,n){return o1(Is(s,n))}function id(s){return e1(s,n1(s))}function t1(s,n){return Math.hypot(s[1]-n[1],s[0]-n[0])}function Qo(s,n,o){let t=Math.sin(o),r=Math.cos(o),l=s[0]-n[0],c=s[1]-n[1],i=l*r-c*t,p=l*t+c*r;return[i+n[0],p+n[1]]}function Ba(s,n,o){return qs(s,Ns(Is(n,s),o))}function _p(s,n,o){return qs(s,Ns(n,o))}var{min:Ao,PI:r1}=Math,gp=.275,Jo=r1+1e-4;function l1(s,n={}){let{size:o=16,smoothing:t=.5,thinning:r=.5,simulatePressure:l=!0,easing:c=se=>se,start:i={},end:p={},last:u=!1}=n,{cap:y=!0,easing:d=se=>se*(2-se)}=i,{cap:f=!0,easing:h=se=>--se*se*se+1}=p;if(s.length===0||o<=0)return[];let m=s[s.length-1].runningLength,g=i.taper===!1?0:i.taper===!0?Math.max(o,m):i.taper,B=p.taper===!1?0:p.taper===!0?Math.max(o,m):p.taper,k=Math.pow(o*t,2),v=[],E=[],w=s.slice(0,10).reduce((se,pe)=>{let ve=pe.pressure;if(l){let Ne=Ao(1,pe.distance/o),Cs=Ao(1,1-Ne);ve=Ao(1,se+(Cs-se)*(Ne*gp))}return(se+ve)/2},s[0].pressure),T=fp(o,r,s[s.length-1].pressure,c),U,z=s[0].vector,$=s[0].point,G=$,oe=$,ue=G,J=!1;for(let se=0;se<s.length;se++){let{pressure:pe}=s[se],{point:ve,vector:Ne,distance:Cs,runningLength:rs}=s[se];if(se<s.length-1&&m-rs<3)continue;if(r){if(l){let Se=Ao(1,Cs/o),me=Ao(1,1-Se);pe=Ao(1,w+(me-w)*(Se*gp))}T=fp(o,r,pe,c)}else T=o/2;U===void 0&&(U=T);let hs=rs<g?d(rs/g):1,_n=m-rs<B?h((m-rs)/B):1;T=Math.max(.01,T*Math.min(hs,_n));let x=(se<s.length-1?s[se+1]:s[se]).vector,ne=se<s.length-1?mp(Ne,x):1,K=mp(Ne,z)<0&&!J,re=ne!==null&&ne<0;if(K||re){let Se=Ns(Zo(z),T);for(let me=1/13,ye=0;ye<=1;ye+=me)oe=Qo(Is(ve,Se),ve,Jo*ye),v.push(oe),ue=Qo(qs(ve,Se),ve,Jo*-ye),E.push(ue);$=oe,G=ue,re&&(J=!0);continue}if(J=!1,se===s.length-1){let Se=Ns(Zo(Ne),T);v.push(Is(ve,Se)),E.push(qs(ve,Se));continue}let be=Ns(Zo(Ba(x,Ne,ne)),T);oe=Is(ve,be),(se<=1||hp($,oe)>k)&&(v.push(oe),$=oe),ue=qs(ve,be),(se<=1||hp(G,ue)>k)&&(E.push(ue),G=ue),w=pe,z=Ne}let Ce=s[0].point.slice(0,2),Te=s.length>1?s[s.length-1].point.slice(0,2):qs(s[0].point,[1,1]),xe=[],He=[];if(s.length===1){if(!(g||B)||u){let se=_p(Ce,id(Zo(Is(Ce,Te))),-(U||T)),pe=[];for(let ve=1/13,Ne=ve;Ne<=1;Ne+=ve)pe.push(Qo(se,Ce,Jo*2*Ne));return pe}}else{if(!(g||B&&s.length===1))if(y)for(let pe=1/13,ve=pe;ve<=1;ve+=pe){let Ne=Qo(E[0],Ce,Jo*ve);xe.push(Ne)}else{let pe=Is(v[0],E[0]),ve=Ns(pe,.5),Ne=Ns(pe,.51);xe.push(Is(Ce,ve),Is(Ce,Ne),qs(Ce,Ne),qs(Ce,ve))}let se=Zo(XB(s[s.length-1].vector));if(B||g&&s.length===1)He.push(Te);else if(f){let pe=_p(Te,se,T);for(let ve=1/29,Ne=ve;Ne<1;Ne+=ve)He.push(Qo(pe,Te,Jo*3*Ne))}else He.push(qs(Te,Ns(se,T)),qs(Te,Ns(se,T*.99)),Is(Te,Ns(se,T*.99)),Is(Te,Ns(se,T)))}return v.concat(He,E.reverse(),xe)}function a1(s,n={}){var o;let{streamline:t=.5,size:r=16,last:l=!1}=n;if(s.length===0)return[];let c=.15+(1-t)*.85,i=Array.isArray(s[0])?s:s.map(({x:h,y:m,pressure:g=.5})=>[h,m,g]);if(i.length===2){let h=i[1];i=i.slice(0,-1);for(let m=1;m<5;m++)i.push(Ba(i[0],h,m/4))}i.length===1&&(i=[...i,[...qs(i[0],[1,1]),...i[0].slice(2)]]);let p=[{point:[i[0][0],i[0][1]],pressure:i[0][2]>=0?i[0][2]:.25,vector:[1,1],distance:0,runningLength:0}],u=!1,y=0,d=p[0],f=i.length-1;for(let h=1;h<i.length;h++){let m=l&&h===f?i[h].slice(0,2):Ba(d.point,i[h],c);if(s1(d.point,m))continue;let g=t1(m,d.point);if(y+=g,h<f&&!u){if(y<r)continue;u=!0}d={point:m,pressure:i[h][2]>=0?i[h][2]:.5,vector:id(Is(d.point,m)),distance:g,runningLength:y},p.push(d)}return p[0].vector=((o=p[1])==null?void 0:o.vector)||[0,0],p}function c1(s,n={}){return l1(a1(s,n),n)}var i1=()=>({events:{},emit(s,...n){let o=this.events[s]||[];for(let t=0,r=o.length;t<r;t++)o[t](...n)},on(s,n){var o;return(o=this.events[s])!=null&&o.push(n)||(this.events[s]=[n]),()=>{var t;this.events[s]=(t=this.events[s])==null?void 0:t.filter(r=>n!==r)}}});function Tr(s,n){return s-n}function p1(s){return s<0?-1:1}function Mr(s){return[Math.abs(s),p1(s)]}function pd(){const s=()=>((1+Math.random())*65536|0).toString(16).substring(1);return`${s()+s()}-${s()}-${s()}-${s()}-${s()}${s()}${s()}`}var u1=2,cn=u1,No=class{constructor(s){this.drauu=s,this.event=void 0,this.point=void 0,this.start=void 0,this.el=null}onSelected(s){}onUnselected(){}onStart(s){}onMove(s){return!1}onEnd(s){}get brush(){return this.drauu.brush}get shiftPressed(){return this.drauu.shiftPressed}get altPressed(){return this.drauu.altPressed}get svgElement(){return this.drauu.el}getMousePosition(s){var n;const o=this.drauu.el,t=this.drauu.options.coordinateScale??1;if(this.drauu.options.coordinateTransform===!1){const r=this.drauu.el.getBoundingClientRect();return{x:(s.pageX-r.left)*t,y:(s.pageY-r.top)*t,pressure:s.pressure}}else{const r=this.drauu.svgPoint;r.x=s.clientX,r.y=s.clientY;const l=r.matrixTransform((n=o.getScreenCTM())==null?void 0:n.inverse());return{x:l.x*t,y:l.y*t,pressure:s.pressure}}}createElement(s,n){const o=document.createElementNS("http://www.w3.org/2000/svg",s),t=n?{...this.brush,...n}:this.brush;return o.setAttribute("fill",t.fill??"transparent"),o.setAttribute("stroke",t.color),o.setAttribute("stroke-width",t.size.toString()),o.setAttribute("stroke-linecap","round"),t.dasharray&&o.setAttribute("stroke-dasharray",t.dasharray),o}attr(s,n){this.el.setAttribute(s,typeof n=="string"?n:n.toFixed(cn))}_setEvent(s){this.event=s,this.point=this.getMousePosition(s)}_eventDown(s){return this._setEvent(s),this.start=this.point,this.onStart(this.point)}_eventMove(s){return this._setEvent(s),this.onMove(this.point)}_eventUp(s){return this._setEvent(s),this.onEnd(this.point)}},y1=class extends No{constructor(){super(...arguments),this.points=[]}onStart(s){return this.el=document.createElementNS("http://www.w3.org/2000/svg","path"),this.points=[s],this.attr("fill",this.brush.color),this.attr("d",this.getSvgData(this.points)),this.el}onMove(s){return this.el||this.onStart(s),this.points[this.points.length-1]!==s&&this.points.push(s),this.attr("d",this.getSvgData(this.points)),!0}onEnd(){const s=this.el;return this.el=null,!!s}getSvgData(s){const n=c1(s,{size:this.brush.size*2,thinning:.9,simulatePressure:!1,start:{taper:5},end:{taper:5},...this.brush.stylusOptions});if(!n.length)return"";const o=n.reduce((t,[r,l],c,i)=>{const[p,u]=i[(c+1)%i.length];return t.push(r,l,(r+p)/2,(l+u)/2),t},["M",...n[0],"Q"]);return o.push("Z"),o.map(t=>typeof t=="number"?t.toFixed(2):t).join(" ")}},d1=class extends No{onStart(s){return this.el=this.createElement("ellipse"),this.attr("cx",s.x),this.attr("cy",s.y),this.el}onMove(s){if(!this.el||!this.start)return!1;let[n,o]=Mr(s.x-this.start.x),[t,r]=Mr(s.y-this.start.y);if(this.shiftPressed){const l=Math.min(n,t);n=l,t=l}if(this.altPressed)this.attr("cx",this.start.x),this.attr("cy",this.start.y),this.attr("rx",n),this.attr("ry",t);else{const[l,c]=[this.start.x,this.start.x+n*o].sort(Tr),[i,p]=[this.start.y,this.start.y+t*r].sort(Tr);this.attr("cx",(l+c)/2),this.attr("cy",(i+p)/2),this.attr("rx",(c-l)/2),this.attr("ry",(p-i)/2)}return!0}onEnd(){const s=this.el;return this.el=null,!(!s||!s.getTotalLength())}};function ud(s,n){const o=document.createElementNS("http://www.w3.org/2000/svg","defs"),t=document.createElementNS("http://www.w3.org/2000/svg","marker"),r=document.createElementNS("http://www.w3.org/2000/svg","path");return r.setAttribute("fill",n),t.setAttribute("id",s),t.setAttribute("viewBox","0 -5 10 10"),t.setAttribute("refX","5"),t.setAttribute("refY","0"),t.setAttribute("markerWidth","4"),t.setAttribute("markerHeight","4"),t.setAttribute("orient","auto"),r.setAttribute("d","M0,-5L10,0L0,5"),t.appendChild(r),o.appendChild(t),o}var f1=class extends No{onStart(s){if(this.el=this.createElement("line",{fill:"transparent"}),this.attr("x1",s.x),this.attr("y1",s.y),this.attr("x2",s.x),this.attr("y2",s.y),this.brush.arrowEnd){const n=pd(),o=document.createElementNS("http://www.w3.org/2000/svg","g");return o.append(ud(n,this.brush.color)),o.append(this.el),this.attr("marker-end",`url(#${n})`),o}return this.el}onMove(s){if(!this.el)return!1;let{x:n,y:o}=s;if(this.shiftPressed){const t=s.x-this.start.x,r=s.y-this.start.y;if(r!==0){let l=t/r;l=Math.round(l),Math.abs(l)<=1?(n=this.start.x+r*l,o=this.start.y+r):(n=this.start.x+t,o=this.start.y)}}return this.altPressed?(this.attr("x1",this.start.x*2-n),this.attr("y1",this.start.y*2-o),this.attr("x2",n),this.attr("y2",o)):(this.attr("x1",this.start.x),this.attr("y1",this.start.y),this.attr("x2",n),this.attr("y2",o)),!0}onEnd(){const s=this.el;return this.el=null,!(!s||s.getTotalLength()<5)}},m1=class extends No{onStart(s){return this.el=this.createElement("rect"),this.brush.cornerRadius&&(this.attr("rx",this.brush.cornerRadius),this.attr("ry",this.brush.cornerRadius)),this.attr("x",s.x),this.attr("y",s.y),this.el}onMove(s){if(!this.el||!this.start)return!1;let[n,o]=Mr(s.x-this.start.x),[t,r]=Mr(s.y-this.start.y);if(this.shiftPressed){const l=Math.min(n,t);n=l,t=l}if(this.altPressed)this.attr("x",this.start.x-n),this.attr("y",this.start.y-t),this.attr("width",n*2),this.attr("height",t*2);else{const[l,c]=[this.start.x,this.start.x+n*o].sort(Tr),[i,p]=[this.start.y,this.start.y+t*r].sort(Tr);this.attr("x",l),this.attr("y",i),this.attr("width",c-l),this.attr("height",p-i)}return!0}onEnd(){const s=this.el;return this.el=null,!(!s||!s.getTotalLength())}};function h1(s,n){const o=s.x-n.x,t=s.y-n.y;return o*o+t*t}function _1(s,n,o){let t=n.x,r=n.y,l=o.x-t,c=o.y-r;if(l!==0||c!==0){const i=((s.x-t)*l+(s.y-r)*c)/(l*l+c*c);i>1?(t=o.x,r=o.y):i>0&&(t+=l*i,r+=c*i)}return l=s.x-t,c=s.y-r,l*l+c*c}function g1(s,n){let o=s[0];const t=[o];let r;for(let l=1,c=s.length;l<c;l++)r=s[l],h1(r,o)>n&&(t.push(r),o=r);return o!==r&&r&&t.push(r),t}function Aa(s,n,o,t,r){let l=t,c=0;for(let i=n+1;i<o;i++){const p=_1(s[i],s[n],s[o]);p>l&&(c=i,l=p)}l>t&&(c-n>1&&Aa(s,n,c,t,r),r.push(s[c]),o-c>1&&Aa(s,c,o,t,r))}function B1(s,n){const o=s.length-1,t=[s[0]];return Aa(s,0,o,n,t),t.push(s[o]),t}function Bp(s,n,o=!1){if(s.length<=2)return s;const t=n!==void 0?n*n:1;return s=o?s:g1(s,t),s=B1(s,t),s}var A1=class extends No{constructor(){super(...arguments),this.points=[],this.count=0}onStart(s){if(this.el=this.createElement("path",{fill:"transparent"}),this.points=[s],this.brush.arrowEnd){this.arrowId=pd();const n=ud(this.arrowId,this.brush.color);this.el.appendChild(n)}return this.el}onMove(s){return this.el||this.onStart(s),this.points[this.points.length-1]!==s&&(this.points.push(s),this.count+=1),this.count>5&&(this.points=Bp(this.points,1,!0),this.count=0),this.attr("d",vp(this.points)),!0}onEnd(){const s=this.el;return this.el=null,!(!s||(s.setAttribute("d",vp(Bp(this.points,1,!0))),!s.getTotalLength()))}};function v1(s,n){const o=n.x-s.x,t=n.y-s.y;return{length:Math.sqrt(o**2+t**2),angle:Math.atan2(t,o)}}function Ap(s,n,o,t){const r=n||s,l=o||s,c=.2,i=v1(r,l),p=i.angle+(t?Math.PI:0),u=i.length*c,y=s.x+Math.cos(p)*u,d=s.y+Math.sin(p)*u;return{x:y,y:d}}function C1(s,n,o){const t=Ap(o[n-1],o[n-2],s),r=Ap(s,o[n-1],o[n+1],!0);return`C ${t.x.toFixed(cn)},${t.y.toFixed(cn)} ${r.x.toFixed(cn)},${r.y.toFixed(cn)} ${s.x.toFixed(cn)},${s.y.toFixed(cn)}`}function vp(s){return s.reduce((n,o,t,r)=>t===0?`M ${o.x.toFixed(cn)},${o.y.toFixed(cn)}`:`${n} ${C1(o,t,r)}`,"")}var E1=class extends No{constructor(){super(...arguments),this.pathSubFactor=20,this.pathFragments=[]}onSelected(s){const n=(o,t)=>{if(o&&o.length)for(let r=0;r<o.length;r++){const l=o[r];if(l.getTotalLength){const c=l.getTotalLength();for(let i=0;i<this.pathSubFactor;i++){const p=l.getPointAtLength(c*i/this.pathSubFactor),u=l.getPointAtLength(c*(i+1)/this.pathSubFactor);this.pathFragments.push({x1:p.x,x2:u.x,y1:p.y,y2:u.y,segment:i,element:t||l})}}else l.children&&n(l.children,l)}};s&&n(s.children)}onUnselected(){this.pathFragments=[]}onStart(s){this.svgPointPrevious=this.svgElement.createSVGPoint(),this.svgPointPrevious.x=s.x,this.svgPointPrevious.y=s.y}onMove(s){this.svgPointCurrent=this.svgElement.createSVGPoint(),this.svgPointCurrent.x=s.x,this.svgPointCurrent.y=s.y;const n=this.checkAndEraseElement();return this.svgPointPrevious=this.svgPointCurrent,n}onEnd(){return this.svgPointPrevious=void 0,this.svgPointCurrent=void 0,!0}checkAndEraseElement(){const s=[];if(this.pathFragments.length)for(let n=0;n<this.pathFragments.length;n++){const o=this.pathFragments[n],t={x1:this.svgPointPrevious.x,x2:this.svgPointCurrent.x,y1:this.svgPointPrevious.y,y2:this.svgPointCurrent.y};this.lineLineIntersect(o,t)&&(o.element.remove(),s.push(n))}return s.length&&(this.pathFragments=this.pathFragments.filter((n,o)=>!s.includes(o))),s.length>0}lineLineIntersect(s,n){const o=s.x1,t=s.x2,r=n.x1,l=n.x2,c=s.y1,i=s.y2,p=n.y1,u=n.y2,y=(o-t)*(p-u)-(c-i)*(r-l),d=(o*i-c*t)*(r-l)-(o-t)*(r*u-p*l),f=(o*i-c*t)*(p-u)-(c-i)*(r*u-p*l),h=(m,g,B)=>m>=g&&m<=B?!0:m>=B&&m<=g;if(y===0)return!1;{const m={x:d/y,y:f/y};return h(m.x,o,t)&&h(m.y,c,i)&&h(m.x,r,l)&&h(m.y,p,u)}}};function b1(s){return{draw:new A1(s),stylus:new y1(s),line:new f1(s),rectangle:new m1(s),ellipse:new d1(s),eraseLine:new E1(s)}}var k1=class{constructor(s={}){this.options=s,this.el=null,this.svgPoint=null,this.eventEl=null,this.shiftPressed=!1,this.altPressed=!1,this.drawing=!1,this._emitter=i1(),this._models=b1(this),this._undoStack=[],this._disposables=[],this.options.brush||(this.options.brush={color:"black",size:3,mode:"stylus"}),s.el&&this.mount(s.el,s.eventTarget)}get model(){return this._models[this.mode]}get mounted(){return!!this.el}get mode(){return this.options.brush.mode||"stylus"}set mode(s){this._models[this.mode].onUnselected(),this.options.brush.mode=s,this.model.onSelected(this.el)}get brush(){return this.options.brush}set brush(s){this.options.brush=s}resolveSelector(s){return typeof s=="string"?document.querySelector(s):s||null}mount(s,n){if(this.el)throw new Error("[drauu] already mounted, unmount previous target first");if(this.el=this.resolveSelector(s),!this.el)throw new Error("[drauu] target element not found");if(this.el.tagName.toLocaleLowerCase()!=="svg")throw new Error("[drauu] can only mount to a SVG element");if(!this.el.createSVGPoint)throw new Error("[drauu] SVG element must be create by document.createElementNS('http://www.w3.org/2000/svg', 'svg')");this.svgPoint=this.el.createSVGPoint();const o=this.resolveSelector(n)||this.el,t=this.eventStart.bind(this),r=this.eventMove.bind(this),l=this.eventEnd.bind(this),c=this.eventKeyboard.bind(this);o.addEventListener("pointerdown",t,{passive:!1}),window.addEventListener("pointermove",r,{passive:!1}),window.addEventListener("pointerup",l,{passive:!1}),window.addEventListener("pointercancel",l,{passive:!1}),window.addEventListener("keydown",c,!1),window.addEventListener("keyup",c,!1),this._disposables.push(()=>{o.removeEventListener("pointerdown",t),window.removeEventListener("pointermove",r),window.removeEventListener("pointerup",l),window.removeEventListener("pointercancel",l),window.removeEventListener("keydown",c,!1),window.removeEventListener("keyup",c,!1)}),this._emitter.emit("mounted")}unmount(){this._disposables.forEach(s=>s()),this._disposables.length=0,this.el=null,this._emitter.emit("unmounted")}on(s,n){return this._emitter.on(s,n)}undo(){const s=this.el;return s.lastElementChild?(this._undoStack.push(s.lastElementChild.cloneNode(!0)),s.lastElementChild.remove(),this._emitter.emit("changed"),!0):!1}redo(){return this._undoStack.length?(this.el.appendChild(this._undoStack.pop()),this._emitter.emit("changed"),!0):!1}canRedo(){return!!this._undoStack.length}canUndo(){var s;return!!((s=this.el)!=null&&s.lastElementChild)}eventMove(s){!this.acceptsInput(s)||!this.drawing||this.model._eventMove(s)&&(s.stopPropagation(),s.preventDefault(),this._emitter.emit("changed"))}eventStart(s){this.acceptsInput(s)&&(s.stopPropagation(),s.preventDefault(),this._currentNode&&this.cancel(),this.drawing=!0,this._emitter.emit("start"),this._currentNode=this.model._eventDown(s),this._currentNode&&this.mode!=="eraseLine"&&this.el.appendChild(this._currentNode),this._emitter.emit("changed"))}eventEnd(s){if(!this.acceptsInput(s)||!this.drawing)return;const n=this.model._eventUp(s);n?(n instanceof Element&&n!==this._currentNode&&(this._currentNode=n),this.commit()):this.cancel(),this.drawing=!1,this._emitter.emit("end"),this._emitter.emit("changed")}acceptsInput(s){return!this.options.acceptsInputTypes||this.options.acceptsInputTypes.includes(s.pointerType)}eventKeyboard(s){this.shiftPressed===s.shiftKey&&this.altPressed===s.altKey||(this.shiftPressed=s.shiftKey,this.altPressed=s.altKey,this.model.point&&this.model.onMove(this.model.point)&&this._emitter.emit("changed"))}commit(){this._undoStack.length=0;const s=this._currentNode;this._currentNode=void 0,this._emitter.emit("committed",s)}clear(){this._undoStack.length=0,this.cancel(),this.el.innerHTML="",this._emitter.emit("changed")}cancel(){this._currentNode&&(this.el.removeChild(this._currentNode),this._currentNode=void 0,this._emitter.emit("canceled"))}dump(){return this.el.innerHTML}load(s){this.clear(),this.el.innerHTML=s}};function D1(s){return new k1(s)}const va=["#ff595e","#ffca3a","#8ac926","#1982c4","#6a4c93","#ffffff","#000000"],Js=Gs("slidev-drawing-enabled",!1),NS=Gs("slidev-drawing-pinned",!1),w1=Z(!1),S1=Z(!1),R1=Z(!1),Rt=Z(!1),Jn=n_(Gs("slidev-drawing-brush",{color:va[0],size:4,mode:"stylus"})),Cp=Z("stylus"),yd=F(()=>$e.drawings.syncAll||gs.value);let xt=!1;const Xo=F({get(){return Cp.value},set(s){Cp.value=s,s==="arrow"?(Jn.mode="line",Jn.arrowEnd=!0):(Jn.mode=s,Jn.arrowEnd=!1)}}),x1=Ge({brush:Jn,acceptsInputTypes:F(()=>Js.value&&(!$e.drawings.presenterOnly||gs.value)?void 0:["pen"]),coordinateTransform:!1}),ms=Gr(D1(x1));function F1(){ms.clear(),yd.value&&Iy(Ke.value,"")}function fc(){var s;S1.value=ms.canRedo(),w1.value=ms.canUndo(),R1.value=!!((s=ms.el)!=null&&s.children.length)}function $1(s){xt=!0;const n=$r[s||Ke.value];n!=null?ms.load(n):ms.clear(),fc(),xt=!1}ms.on("changed",()=>{if(fc(),!xt){const s=ms.dump(),n=Ke.value;($r[n]||"")!==s&&yd.value&&Iy(n,ms.dump())}});j5(s=>{xt=!0,s[Ke.value]!=null&&ms.load(s[Ke.value]||""),xt=!1,fc()});os(()=>{Be(Ke,()=>{ms.mounted&&$1()},{immediate:!0})});ms.on("start",()=>Rt.value=!0);ms.on("end",()=>Rt.value=!1);window.addEventListener("keydown",s=>{if(!Js.value)return;const n=!s.ctrlKey&&!s.altKey&&!s.shiftKey&&!s.metaKey;let o=!0;s.code==="KeyZ"&&(s.ctrlKey||s.metaKey)?s.shiftKey?ms.redo():ms.undo():s.code==="Escape"?Js.value=!1:s.code==="KeyL"&&n?Xo.value="line":s.code==="KeyA"&&n?Xo.value="arrow":s.code==="KeyS"&&n?Xo.value="stylus":s.code==="KeyR"&&n?Xo.value="rectangle":s.code==="KeyE"&&n?Xo.value="ellipse":s.code==="KeyC"&&n?F1():s.code.startsWith("Digit")&&n&&+s.code[5]<=va.length?Jn.color=va[+s.code[5]-1]:o=!1,o&&(s.preventDefault(),s.stopPropagation())},!1);function Je(...s){return F(()=>s.every(n=>ls(n)))}function bs(s){return F(()=>!ls(s))}const Ep=W_(),Rl=Gs("slidev-color-schema","auto"),Ca=F(()=>$e.colorSchema!=="auto"),mc=F({get(){return Ca.value?$e.colorSchema==="dark":Rl.value==="auto"?Ep.value:Rl.value==="dark"},set(s){Ca.value||(Rl.value=s===Ep.value?"auto":s?"dark":"light")}}),dd=Oy(mc);js&&Be(mc,s=>{const n=document.querySelector("html");n.classList.toggle("dark",s),n.classList.toggle("light",!s)},{immediate:!0});const fr=Z(1),mr=F(()=>Qe.length-1),Ss=Z(0),hc=Z(0);function I1(){Ss.value>fr.value&&(Ss.value-=1)}function T1(){Ss.value<mr.value&&(Ss.value+=1)}function M1(){if(Ss.value>fr.value){let s=Ss.value-hc.value;s<fr.value&&(s=fr.value),Ss.value=s}}function P1(){if(Ss.value<mr.value){let s=Ss.value+hc.value;s>mr.value&&(s=mr.value),Ss.value=s}}function O1(){const{escape:s,space:n,shift:o,left:t,right:r,up:l,down:c,enter:i,d:p,g:u,o:y}=ld;let d=[{name:"next_space",key:Je(n,bs(o)),fn:Tn,autoRepeat:!0},{name:"prev_space",key:Je(n,o),fn:Mn,autoRepeat:!0},{name:"next_right",key:Je(r,bs(o),bs(us)),fn:Tn,autoRepeat:!0},{name:"prev_left",key:Je(t,bs(o),bs(us)),fn:Mn,autoRepeat:!0},{name:"next_page_key",key:"pageDown",fn:Tn,autoRepeat:!0},{name:"prev_page_key",key:"pageUp",fn:Mn,autoRepeat:!0},{name:"next_down",key:Je(c,bs(us)),fn:$t,autoRepeat:!0},{name:"prev_up",key:Je(l,bs(us)),fn:()=>It(!1),autoRepeat:!0},{name:"next_shift",key:Je(r,o),fn:$t,autoRepeat:!0},{name:"prev_shift",key:Je(t,o),fn:()=>It(!1),autoRepeat:!0},{name:"toggle_dark",key:Je(p,bs(Js)),fn:dd},{name:"toggle_overview",key:Je(y,bs(Js)),fn:cd},{name:"hide_overview",key:Je(s,bs(Js)),fn:()=>us.value=!1},{name:"goto",key:Je(u,bs(Js)),fn:()=>Do.value=!Do.value},{name:"next_overview",key:Je(r,us),fn:T1},{name:"prev_overview",key:Je(t,us),fn:I1},{name:"up_overview",key:Je(l,us),fn:M1},{name:"down_overview",key:Je(c,us),fn:P1},{name:"goto_from_overview",key:Je(i,us),fn:()=>{Lo(Ss.value),us.value=!1}}];const f=new Set(d.map(m=>m.name));if(d.filter(m=>m.name&&f.has(m.name)).length===0){const m=["========== WARNING ==========","defineShortcutsSetup did not return any of the base shortcuts.","See https://sli.dev/custom/config-shortcuts.html for migration.",'If it is intentional, return at least one shortcut with one of the base names (e.g. name:"goto").'].join(`

`);alert(m),console.warn(m)}return d}const fd=Je(bs(QB),bs(JB),YB);function L1(s,n,o=!1){typeof s=="string"&&(s=ld[s]);const t=Je(s,fd);let r=0,l;const c=()=>{if(clearTimeout(l),!t.value){r=0;return}o&&(l=setTimeout(c,Math.max(1e3-r*250,150)),r++),n()};return Be(t,c,{flush:"sync"})}function N1(s,n){return S_(s,o=>{fd.value&&(o.repeat||n())})}function q1(){const s=O1();new Map(s.map(o=>[o.key,o])).forEach(o=>{o.fn&&L1(o.key,o.fn,o.autoRepeat)}),N1("f",()=>ad.toggle())}const U1={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},H1=e("path",{fill:"currentColor",d:"M24 9.4L22.6 8L16 14.6L9.4 8L8 9.4l6.6 6.6L8 22.6L9.4 24l6.6-6.6l6.6 6.6l1.4-1.4l-6.6-6.6L24 9.4z"},null,-1),V1=[H1];function j1(s,n){return C(),te("svg",U1,V1)}const G1={name:"carbon-close",render:j1};function _c(s,n=""){var r,l;const o=["slidev-page",n],t=(l=(r=s==null?void 0:s.meta)==null?void 0:r.slide)==null?void 0:l.no;return t!=null&&o.push(`slidev-page-${t}`),o.filter(Boolean).join(" ")}const W1=Pe({__name:"SlideContainer",props:{width:{type:Number},meta:{default:()=>({})},scale:{type:[Number,String]}},setup(s){const n=s;I(N);const o=Z(),t=rg(o),r=F(()=>n.width?n.width:t.width.value),l=F(()=>n.width?n.width/Fn:t.height.value);n.width&&yo(()=>{o.value&&(o.value.style.width=`${r.value}px`,o.value.style.height=`${l.value}px`)});const c=F(()=>r.value/l.value),i=F(()=>n.scale&&!Oo.value?n.scale:c.value<Fn?r.value/$n:l.value*Fn/$n),p=F(()=>({height:`${ic}px`,width:`${$n}px`,transform:`translate(-50%, -50%) scale(${i.value})`})),u=F(()=>({"select-none":!$e.selectable,"slidev-code-line-numbers":$e.lineNumbers}));return Ds(Fy,i),(y,d)=>(C(),te("div",{id:"slide-container",ref_key:"root",ref:o,class:Ye(D(u))},[e("div",{id:"slide-content",style:ts(D(p))},[fn(y.$slots,"default")],4),fn(y.$slots,"controls")],2))}});const q=(s,n)=>{const o=s.__vccOpts||s;for(const[t,r]of n)o[t]=r;return o},md=q(W1,[["__file","/home/runner/work/sylius-resource-formation/sylius-resource-formation/node_modules/@slidev/client/internals/SlideContainer.vue"]]),gc=Pe({name:"SlideWrapper",props:{clicks:{type:[Number,String],default:0},clicksElements:{type:Array,default:()=>[]},clicksOrderMap:{type:Map,default:()=>new Map},clicksDisabled:{type:Boolean,default:!1},context:{type:String,default:"main"},is:{type:Object,default:void 0},route:{type:Object,default:void 0}},setup(s,{emit:n}){const o=Qs(s,"clicks",n),t=Qs(s,"clicksElements",n),r=Qs(s,"clicksDisabled",n),l=Qs(s,"clicksOrderMap",n);t.value.length=0,Ds(S5,s.route),Ds(R5,s.context),Ds(ct,o),Ds(it,r),Ds(Yn,t),Ds(la,l)},render(){var s,n;return this.$props.is?fs(this.$props.is):(n=(s=this.$slots)==null?void 0:s.default)==null?void 0:n.call(s)}}),z1=["innerHTML"],K1=Pe({__name:"DrawingPreview",props:{page:{type:Number,required:!0}},setup(s){return I(N),(n,o)=>D($r)[s.page]?(C(),te("svg",{key:0,ref:"svg",class:"w-full h-full absolute top-0 pointer-events-none",innerHTML:D($r)[s.page]},null,8,z1)):ke("v-if",!0)}}),hd=q(K1,[["__file","/home/runner/work/sylius-resource-formation/sylius-resource-formation/node_modules/@slidev/client/internals/DrawingPreview.vue"]]),Y1=Object.freeze(Object.defineProperty({__proto__:null,default:hd},Symbol.toStringTag,{value:"Module"})),Z1={class:"slides-overview bg-main !bg-opacity-75 p-16 overflow-y-auto"},Q1=["onClick"],J1=Pe({__name:"SlidesOverview",props:{modelValue:{type:Boolean,required:!0}},emits:[],setup(s,{emit:n}){const o=s;I(N);const t=Qs(o,"modelValue",n);function r(){t.value=!1}function l(h){Lo(h),r()}function c(h){return h===Ss.value}const i=ga.smaller("xs"),p=ga.smaller("sm"),u=4*16*2,y=2*16,d=F(()=>i.value?lo.width.value-u:p.value?(lo.width.value-u-y)/2:300),f=F(()=>Math.floor((lo.width.value-u)/(d.value+y)));return yo(()=>{Ss.value=Ke.value,hc.value=f.value}),(h,m)=>{const g=G1;return C(),te(Me,null,[Xr(e("div",Z1,[e("div",{class:"grid gap-y-4 gap-x-8 w-full",style:ts(`grid-template-columns: repeat(auto-fit,minmax(${D(d)}px,1fr))`)},[(C(!0),te(Me,null,Ht(D(Qe).slice(0,-1),(B,k)=>(C(),te("div",{key:B.path,class:"relative"},[e("div",{class:Ye(["inline-block border rounded border-opacity-50 overflow-hidden bg-main hover:border-$slidev-theme-primary",{"border-$slidev-theme-primary":c(k+1),"border-gray-400":!c(k+1)}]),style:ts(D(pc)),onClick:v=>l(+B.path)},[(C(),P(md,{key:B.path,width:D(d),"clicks-disabled":!0,class:"pointer-events-none"},{default:b(()=>[R(D(gc),{is:B==null?void 0:B.component,"clicks-disabled":!0,class:Ye(D(_c)(B)),route:B,context:"overview"},null,8,["is","class","route"]),R(hd,{page:+B.path},null,8,["page"])]),_:2},1032,["width"]))],14,Q1),e("div",{class:"absolute top-0 opacity-50",style:ts(`left: ${D(d)+5}px`)},ao(k+1),5)]))),128))],4)],512),[[vy,D(t)]]),D(t)?(C(),te("button",{key:0,class:"fixed text-2xl top-4 right-4 slidev-icon-btn text-gray-400",onClick:r},[R(g)])):ke("v-if",!0)],64)}}});const X1=q(J1,[["__file","/home/runner/work/sylius-resource-formation/sylius-resource-formation/node_modules/@slidev/client/internals/SlidesOverview.vue"]]),eA="/sylius-resource-formation/assets/logo-b72bde5d.png",sA={key:0,class:"fixed top-0 bottom-0 left-0 right-0 grid z-20"},nA=Pe({__name:"Modal",props:{modelValue:{default:!1},class:{default:""}},emits:["modelValue"],setup(s,{emit:n}){const o=s;I(N);const t=Qs(o,"modelValue",n);function r(){t.value=!1}return(l,c)=>(C(),P(Gu,null,[D(t)?(C(),te("div",sA,[e("div",{bg:"black opacity-80",class:"absolute top-0 bottom-0 left-0 right-0 -z-1",onClick:c[0]||(c[0]=i=>r())}),e("div",{class:Ye(["m-auto rounded-md bg-main shadow",o.class]),"dark:border":"~ gray-400 opacity-10"},[fn(l.$slots,"default")],2)])):ke("v-if",!0)],1024))}}),oA=q(nA,[["__file","/home/runner/work/sylius-resource-formation/sylius-resource-formation/node_modules/@slidev/client/internals/Modal.vue"]]),tA={class:"slidev-info-dialog slidev-layout flex flex-col gap-4 text-base"},rA=["innerHTML"],lA=e("a",{href:"https://github.com/slidevjs/slidev",target:"_blank",class:"!opacity-100 !border-none !text-current"},[e("div",{class:"flex gap-1 children:my-auto"},[e("div",{class:"opacity-50 text-sm mr-2"},"Powered by"),e("img",{class:"w-5 h-5",src:eA,alt:"Slidev"}),e("div",{style:{color:"#2082A6"}},[e("b",null,"Sli"),a("dev ")])])],-1),aA=Pe({__name:"InfoDialog",props:{modelValue:{default:!1}},emits:["modelValue"],setup(s,{emit:n}){const o=s;I(N);const t=Qs(o,"modelValue",n),r=F(()=>typeof $e.info=="string");return(l,c)=>(C(),P(oA,{modelValue:D(t),"onUpdate:modelValue":c[0]||(c[0]=i=>Ie(t)?t.value=i:null),class:"px-6 py-4"},{default:b(()=>[e("div",tA,[D(r)?(C(),te("div",{key:0,class:"mb-4",innerHTML:D($e).info},null,8,rA)):ke("v-if",!0),lA])]),_:1},8,["modelValue"]))}});const cA=q(aA,[["__file","/home/runner/work/sylius-resource-formation/sylius-resource-formation/node_modules/@slidev/client/internals/InfoDialog.vue"]]),iA=["disabled","onKeydown"],pA=Pe({__name:"Goto",setup(s){I(N);const n=Z(),o=Z(""),t=F(()=>{if(o.value.startsWith("/"))return!!Qe.find(c=>c.path===o.value.substring(1));{const c=+o.value;return!isNaN(c)&&c>0&&c<=xd.value}});function r(){t.value&&(o.value.startsWith("/")?Lo(o.value.substring(1)):Lo(+o.value)),l()}function l(){Do.value=!1}return Be(Do,async c=>{var i,p;c?(await os(),o.value="",(i=n.value)==null||i.focus()):(p=n.value)==null||p.blur()}),Be(o,c=>{c.match(/^[^0-9/]/)&&(o.value=o.value.substring(1))}),(c,i)=>(C(),te("div",{id:"slidev-goto-dialog",class:Ye(["fixed right-5 bg-main transform transition-all",D(Do)?"top-5":"-top-20"]),shadow:"~",p:"x-4 y-2",border:"~ transparent rounded dark:gray-400 dark:opacity-25"},[Xr(e("input",{ref_key:"input",ref:n,"onUpdate:modelValue":i[0]||(i[0]=p=>o.value=p),type:"text",disabled:!D(Do),class:Ye(["outline-none bg-transparent",{"text-red-400":!D(t)&&o.value}]),placeholder:"Goto...",onKeydown:[Ei(r,["enter"]),Ei(l,["escape"])],onBlur:l},null,42,iA),[[Ih,o.value]])],2))}}),uA=q(pA,[["__file","/home/runner/work/sylius-resource-formation/sylius-resource-formation/node_modules/@slidev/client/internals/Goto.vue"]]),yA=Pe({__name:"Controls",setup(s){I(N);const n=en(),o=en();return(t,r)=>(C(),te(Me,null,[R(X1,{modelValue:D(us),"onUpdate:modelValue":r[0]||(r[0]=l=>Ie(us)?us.value=l:null)},null,8,["modelValue"]),R(uA),D(n)?(C(),P(D(n),{key:0})):ke("v-if",!0),D(o)?(C(),P(D(o),{key:1,modelValue:D(wl),"onUpdate:modelValue":r[1]||(r[1]=l=>Ie(wl)?wl.value=l:null)},null,8,["modelValue"])):ke("v-if",!0),D($e).info?(C(),P(cA,{key:2,modelValue:D(yt),"onUpdate:modelValue":r[2]||(r[2]=l=>Ie(yt)?yt.value=l:null)},null,8,["modelValue"])):ke("v-if",!0)],64))}}),dA=q(yA,[["__file","/home/runner/work/sylius-resource-formation/sylius-resource-formation/node_modules/@slidev/client/internals/Controls.vue"]]),fA={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},mA=e("path",{fill:"currentColor",d:"M30 8h-4.1c-.5-2.3-2.5-4-4.9-4s-4.4 1.7-4.9 4H2v2h14.1c.5 2.3 2.5 4 4.9 4s4.4-1.7 4.9-4H30V8zm-9 4c-1.7 0-3-1.3-3-3s1.3-3 3-3s3 1.3 3 3s-1.3 3-3 3zM2 24h4.1c.5 2.3 2.5 4 4.9 4s4.4-1.7 4.9-4H30v-2H15.9c-.5-2.3-2.5-4-4.9-4s-4.4 1.7-4.9 4H2v2zm9-4c1.7 0 3 1.3 3 3s-1.3 3-3 3s-3-1.3-3-3s1.3-3 3-3z"},null,-1),hA=[mA];function _A(s,n){return C(),te("svg",fA,hA)}const gA={name:"carbon-settings-adjust",render:_A},BA={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},AA=e("path",{fill:"currentColor",d:"M17 22v-8h-4v2h2v6h-3v2h8v-2h-3zM16 8a1.5 1.5 0 1 0 1.5 1.5A1.5 1.5 0 0 0 16 8z"},null,-1),vA=e("path",{fill:"currentColor",d:"M16 30a14 14 0 1 1 14-14a14 14 0 0 1-14 14Zm0-26a12 12 0 1 0 12 12A12 12 0 0 0 16 4Z"},null,-1),CA=[AA,vA];function EA(s,n){return C(),te("svg",BA,CA)}const bA={name:"carbon-information",render:EA},kA={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},DA=e("path",{fill:"currentColor",d:"M26 24v4H6v-4H4v4a2 2 0 0 0 2 2h20a2 2 0 0 0 2-2v-4zm0-10l-1.41-1.41L17 20.17V2h-2v18.17l-7.59-7.58L6 14l10 10l10-10z"},null,-1),wA=[DA];function SA(s,n){return C(),te("svg",kA,wA)}const RA={name:"carbon-download",render:SA},xA={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},FA=e("path",{fill:"currentColor",d:"M29.415 19L27.7 17.285A2.97 2.97 0 0 0 28 16a3 3 0 1 0-3 3a2.97 2.97 0 0 0 1.286-.3L28 20.414V28h-6v-3a7.008 7.008 0 0 0-7-7H9a7.008 7.008 0 0 0-7 7v5h28v-9.586A1.988 1.988 0 0 0 29.415 19ZM4 25a5.006 5.006 0 0 1 5-5h6a5.006 5.006 0 0 1 5 5v3H4Z"},null,-1),$A=e("path",{fill:"currentColor",d:"M12 4a5 5 0 1 1-5 5a5 5 0 0 1 5-5m0-2a7 7 0 1 0 7 7a7 7 0 0 0-7-7Z"},null,-1),IA=[FA,$A];function TA(s,n){return C(),te("svg",xA,IA)}const MA={name:"carbon-user-speaker",render:TA},PA={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},OA=e("path",{fill:"currentColor",d:"M15 10h2v8h-2zm5 4h2v4h-2zm-10-2h2v6h-2z"},null,-1),LA=e("path",{fill:"currentColor",d:"M25 4h-8V2h-2v2H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h8v6h-4v2h10v-2h-4v-6h8a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2Zm0 16H7V6h18Z"},null,-1),NA=[OA,LA];function qA(s,n){return C(),te("svg",PA,NA)}const UA={name:"carbon-presentation-file",render:qA},HA={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},VA=e("path",{fill:"currentColor",d:"M27.307 6.107L30 3.414L28.586 2l-2.693 2.693L24.8 3.6a1.933 1.933 0 0 0-2.8 0l-18 18V28h6.4l18-18a1.933 1.933 0 0 0 0-2.8ZM9.6 26H6v-3.6L23.4 5L27 8.6ZM9 11.586L16.586 4L18 5.414L10.414 13z"},null,-1),jA=[VA];function GA(s,n){return C(),te("svg",HA,jA)}const WA={name:"carbon-pen",render:GA},zA={class:"slidev-icon",viewBox:"0 0 256 256",width:"1.2em",height:"1.2em"},KA=e("path",{fill:"currentColor",d:"m38.2 48.5l58.2 155.2a8 8 0 0 0 15-.1l23.3-64.1a8.1 8.1 0 0 1 4.8-4.8l64.1-23.3a8 8 0 0 0 .1-15L48.5 38.2a8 8 0 0 0-10.3 10.3Z",opacity:".2"},null,-1),YA=e("path",{fill:"currentColor",d:"m150.5 139.2l55.9-20.3a16 16 0 0 0 .1-30L51.3 30.7a16 16 0 0 0-20.6 20.6l58.2 155.2a15.9 15.9 0 0 0 15 10.4h.1a15.9 15.9 0 0 0 14.9-10.5l20.3-55.9l63.1 63.2a8.5 8.5 0 0 0 5.7 2.3a8.3 8.3 0 0 0 5.7-2.3a8.1 8.1 0 0 0 0-11.4Zm-46.6 61.7L45.7 45.7l155.2 58.2l-64.1 23.3a15.7 15.7 0 0 0-9.6 9.6Z"},null,-1),ZA=[KA,YA];function QA(s,n){return C(),te("svg",zA,ZA)}const JA={name:"ph-cursor-duotone",render:QA},XA={class:"slidev-icon",viewBox:"0 0 256 256",width:"1.2em",height:"1.2em"},ev=e("path",{fill:"currentColor",d:"M213.7 202.3a8.1 8.1 0 0 1 0 11.4a8.3 8.3 0 0 1-5.7 2.3a8.5 8.5 0 0 1-5.7-2.3l-63.1-63.2l-20.3 55.9a15.9 15.9 0 0 1-14.9 10.5h-.1a15.9 15.9 0 0 1-15-10.4L30.7 51.3a16 16 0 0 1 20.6-20.6l155.2 58.2a16 16 0 0 1-.1 30l-55.9 20.3Z"},null,-1),sv=[ev];function nv(s,n){return C(),te("svg",XA,sv)}const _d={name:"ph-cursor-fill",render:nv},ov={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},tv=e("path",{fill:"currentColor",d:"M16 12.005a4 4 0 1 1-4 4a4.005 4.005 0 0 1 4-4m0-2a6 6 0 1 0 6 6a6 6 0 0 0-6-6ZM5.394 6.813L6.81 5.399l3.505 3.506L8.9 10.319zM2 15.005h5v2H2zm3.394 10.193L8.9 21.692l1.414 1.414l-3.505 3.506zM15 25.005h2v5h-2zm6.687-1.9l1.414-1.414l3.506 3.506l-1.414 1.414zm3.313-8.1h5v2h-5zm-3.313-6.101l3.506-3.506l1.414 1.414l-3.506 3.506zM15 2.005h2v5h-2z"},null,-1),rv=[tv];function lv(s,n){return C(),te("svg",ov,rv)}const av={name:"carbon-sun",render:lv},cv={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},iv=e("path",{fill:"currentColor",d:"M13.502 5.414a15.075 15.075 0 0 0 11.594 18.194a11.113 11.113 0 0 1-7.975 3.39c-.138 0-.278.005-.418 0a11.094 11.094 0 0 1-3.2-21.584M14.98 3a1.002 1.002 0 0 0-.175.016a13.096 13.096 0 0 0 1.825 25.981c.164.006.328 0 .49 0a13.072 13.072 0 0 0 10.703-5.555a1.01 1.01 0 0 0-.783-1.565A13.08 13.08 0 0 1 15.89 4.38A1.015 1.015 0 0 0 14.98 3Z"},null,-1),pv=[iv];function uv(s,n){return C(),te("svg",cv,pv)}const yv={name:"carbon-moon",render:uv},dv={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},fv=e("path",{fill:"currentColor",d:"M8 4v4H4V4Zm2-2H2v8h8Zm8 2v4h-4V4Zm2-2h-8v8h8Zm8 2v4h-4V4Zm2-2h-8v8h8ZM8 14v4H4v-4Zm2-2H2v8h8Zm8 2v4h-4v-4Zm2-2h-8v8h8Zm8 2v4h-4v-4Zm2-2h-8v8h8ZM8 24v4H4v-4Zm2-2H2v8h8Zm8 2v4h-4v-4Zm2-2h-8v8h8Zm8 2v4h-4v-4Zm2-2h-8v8h8Z"},null,-1),mv=[fv];function hv(s,n){return C(),te("svg",dv,mv)}const _v={name:"carbon-apps",render:hv},gv={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},Bv=e("path",{fill:"currentColor",d:"m18 6l-1.43 1.393L24.15 15H4v2h20.15l-7.58 7.573L18 26l10-10L18 6z"},null,-1),Av=[Bv];function vv(s,n){return C(),te("svg",gv,Av)}const Cv={name:"carbon-arrow-right",render:vv},Ev={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},bv=e("path",{fill:"currentColor",d:"m14 26l1.41-1.41L7.83 17H28v-2H7.83l7.58-7.59L14 6L4 16l10 10z"},null,-1),kv=[bv];function Dv(s,n){return C(),te("svg",Ev,kv)}const wv={name:"carbon-arrow-left",render:Dv},Sv={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},Rv=e("path",{fill:"currentColor",d:"M20 2v2h6.586L18 12.582L19.414 14L28 5.414V12h2V2H20zm-6 17.416L12.592 18L4 26.586V20H2v10h10v-2H5.414L14 19.416z"},null,-1),xv=[Rv];function Fv(s,n){return C(),te("svg",Sv,xv)}const $v={name:"carbon-maximize",render:Fv},Iv={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},Tv=e("path",{fill:"currentColor",d:"M4 18v2h6.586L2 28.582L3.414 30L12 21.414V28h2V18H4zM30 3.416L28.592 2L20 10.586V4h-2v10h10v-2h-6.586L30 3.416z"},null,-1),Mv=[Tv];function Pv(s,n){return C(),te("svg",Iv,Mv)}const Ov={name:"carbon-minimize",render:Pv},Lv={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},Nv=e("path",{fill:"currentColor",d:"m13 24l-9-9l1.414-1.414L13 21.171L26.586 7.586L28 9L13 24z"},null,-1),qv=[Nv];function Uv(s,n){return C(),te("svg",Lv,qv)}const Hv={name:"carbon-checkmark",render:Uv},Vv={class:"select-list"},jv={class:"title"},Gv={class:"items"},Wv=["onClick"],zv=Pe({__name:"SelectList",props:{modelValue:{type:[Object,String,Number]},title:{type:String},items:{type:Array}},setup(s,{emit:n}){const o=s;I(N);const t=Qs(o,"modelValue",n,{passive:!0});return(r,l)=>{const c=Hv;return C(),te("div",Vv,[e("div",jv,ao(s.title),1),e("div",Gv,[(C(!0),te(Me,null,Ht(s.items,i=>(C(),te("div",{key:i.value,class:Ye(["item",{active:D(t)===i.value}]),onClick:()=>{var p;t.value=i.value,(p=i.onClick)==null||p.call(i)}},[R(c,{class:Ye(["text-green-500",{"opacity-0":D(t)!==i.value}])},null,8,["class"]),a(" "+ao(i.display||i.value),1)],10,Wv))),128))])])}}});const Kv=q(zv,[["__scopeId","data-v-3f89fa11"],["__file","/home/runner/work/sylius-resource-formation/sylius-resource-formation/node_modules/@slidev/client/internals/SelectList.vue"]]),Yv={class:"text-sm"},Zv=Pe({__name:"Settings",setup(s){I(N);const n=[{display:"Fit",value:0},{display:"1:1",value:1}];return(o,t)=>(C(),te("div",Yv,[R(Kv,{modelValue:D(dr),"onUpdate:modelValue":t[0]||(t[0]=r=>Ie(dr)?dr.value=r:null),title:"Scale",items:n},null,8,["modelValue"])]))}}),Qv=q(Zv,[["__file","/home/runner/work/sylius-resource-formation/sylius-resource-formation/node_modules/@slidev/client/internals/Settings.vue"]]),Jv={key:0,class:"rounded-md bg-main shadow absolute bottom-10 left-0 z-20","dark:border":"~ gray-400 opacity-10"},Xv=Pe({__name:"MenuButton",props:{modelValue:{default:!1},disabled:{default:!1}},setup(s,{emit:n}){const o=s;I(N);const t=Qs(o,"modelValue",n,{passive:!0}),r=Z();return D_(r,()=>{t.value=!1}),(l,c)=>(C(),te("div",{ref_key:"el",ref:r,class:"flex relative"},[e("button",{class:Ye({disabled:s.disabled}),onClick:c[0]||(c[0]=i=>t.value=!D(t))},[fn(l.$slots,"button",{class:Ye({disabled:s.disabled})})],2),(C(),P(Gu,null,[D(t)?(C(),te("div",Jv,[fn(l.$slots,"menu")])):ke("v-if",!0)],1024))],512))}}),e3=q(Xv,[["__file","/home/runner/work/sylius-resource-formation/sylius-resource-formation/node_modules/@slidev/client/internals/MenuButton.vue"]]),s3={class:"w-1px opacity-10 bg-current m-1 lg:m-2"},n3={__name:"VerticalDivider",setup(s){return I(N),(n,o)=>(C(),te("div",s3))}},rr=q(n3,[["__file","/home/runner/work/sylius-resource-formation/sylius-resource-formation/node_modules/@slidev/client/internals/VerticalDivider.vue"]]),o3={render(){return[]}},t3={class:"slidev-icon-btn"},r3={class:"h-40px flex",p:"l-1 t-0.5 r-2",text:"sm leading-2"},l3={class:"my-auto"},a3={class:"opacity-50"},c3=Pe({__name:"NavControls",props:{persist:{default:!1}},setup(s){const n=s;I(N);const o=ga.smaller("md"),{isFullscreen:t,toggle:r}=ad,l=F(()=>ba.value?`?password=${ba.value}`:""),c=F(()=>`/presenter/${Ke.value}${l.value}`),i=F(()=>`/${Ke.value}${l.value}`),p=Z(),u=()=>{p.value&&$o.value&&p.value.contains($o.value)&&$o.value.blur()},y=F(()=>n.persist?"text-$slidev-controls-foreground bg-transparent":"rounded-md bg-main shadow dark:border dark:border-gray-400 dark:border-opacity-10"),d=en(),f=en();return In(()=>import("./DrawingControls-0a583b6e.js"),[]).then(h=>f.value=h.default),(h,m)=>{const g=Ov,B=$v,k=wv,v=Cv,E=_v,w=yv,T=av,U=_d,z=JA,$=WA,G=UA,oe=Dr("RouterLink"),ue=MA,J=RA,Ce=bA,Te=gA;return C(),te("nav",{ref_key:"root",ref:p,class:"flex flex-col"},[e("div",{class:Ye(["flex flex-wrap-reverse text-xl gap-0.5 p-1 lg:gap-1 lg:p-2",D(y)]),onMouseleave:u},[D(ln)?ke("v-if",!0):(C(),te("button",{key:0,class:"slidev-icon-btn",onClick:m[0]||(m[0]=(...xe)=>D(r)&&D(r)(...xe))},[D(t)?(C(),P(g,{key:0})):(C(),P(B,{key:1}))])),e("button",{class:Ye(["slidev-icon-btn",{disabled:!D(sD)}]),onClick:m[1]||(m[1]=(...xe)=>D(Mn)&&D(Mn)(...xe))},[R(k)],2),e("button",{class:Ye(["slidev-icon-btn",{disabled:!D(eD)}]),title:"Next",onClick:m[2]||(m[2]=(...xe)=>D(Tn)&&D(Tn)(...xe))},[R(v)],2),D(ln)?ke("v-if",!0):(C(),te("button",{key:1,class:"slidev-icon-btn",title:"Slides overview",onClick:m[3]||(m[3]=xe=>D(cd)())},[R(E)])),D(Ca)?ke("v-if",!0):(C(),te("button",{key:2,class:"slidev-icon-btn",title:"Toggle dark mode",onClick:m[4]||(m[4]=xe=>D(dd)())},[D(mc)?(C(),P(w,{key:0})):(C(),P(T,{key:1}))])),R(rr),D(ln)?ke("v-if",!0):(C(),te(Me,{key:3},[!D(gs)&&!D(o)&&D(d)?(C(),te(Me,{key:0},[R(D(d)),R(rr)],64)):ke("v-if",!0),D(gs)?(C(),te("button",{key:1,class:"slidev-icon-btn",title:"Show presenter cursor",onClick:m[5]||(m[5]=xe=>Sl.value=!D(Sl))},[D(Sl)?(C(),P(U,{key:0})):(C(),P(z,{key:1,class:"opacity-50"}))])):ke("v-if",!0)],64)),(!D($e).drawings.presenterOnly||D(gs))&&!D(ln)?(C(),te(Me,{key:4},[e("button",{class:"slidev-icon-btn relative",title:"Drawing",onClick:m[6]||(m[6]=xe=>Js.value=!D(Js))},[R($),D(Js)?(C(),te("div",{key:0,class:"absolute left-1 right-1 bottom-0 h-0.7 rounded-full",style:ts({background:D(Jn).color})},null,4)):ke("v-if",!0)]),R(rr)],64)):ke("v-if",!0),D(ln)?ke("v-if",!0):(C(),te(Me,{key:5},[D(gs)?(C(),P(oe,{key:0,to:D(i),class:"slidev-icon-btn",title:"Play Mode"},{default:b(()=>[R(G)]),_:1},8,["to"])):ke("v-if",!0),D(Z9)?(C(),P(oe,{key:1,to:D(c),class:"slidev-icon-btn",title:"Presenter Mode"},{default:b(()=>[R(ue)]),_:1},8,["to"])):ke("v-if",!0),ke("v-if",!0)],64)),(C(),te(Me,{key:6},[D($e).download?(C(),te("button",{key:0,class:"slidev-icon-btn",onClick:m[8]||(m[8]=(...xe)=>D(ka)&&D(ka)(...xe))},[R(J)])):ke("v-if",!0)],64)),!D(gs)&&D($e).info&&!D(ln)?(C(),te("button",{key:7,class:"slidev-icon-btn",onClick:m[9]||(m[9]=xe=>yt.value=!D(yt))},[R(Ce)])):ke("v-if",!0),!D(gs)&&!D(ln)?(C(),P(e3,{key:8},{button:b(()=>[e("button",t3,[R(Te)])]),menu:b(()=>[R(Qv)]),_:1})):ke("v-if",!0),D(ln)?ke("v-if",!0):(C(),P(rr,{key:9})),e("div",r3,[e("div",l3,[a(ao(D(Ke))+" ",1),e("span",a3,"/ "+ao(D(xd)),1)])]),R(D(o3))],34)],512)}}}),i3=q(c3,[["__file","/home/runner/work/sylius-resource-formation/sylius-resource-formation/node_modules/@slidev/client/internals/NavControls.vue"]]),gd={render(){return[]}},Bd={render(){return[]}},p3={key:0,class:"absolute top-0 left-0 right-0 bottom-0 pointer-events-none text-xl"},u3=Pe({__name:"PresenterMouse",setup(s){return I(N),(n,o)=>{const t=_d;return D(El).cursor?(C(),te("div",p3,[R(t,{class:"absolute",style:ts({left:`${D(El).cursor.x}%`,top:`${D(El).cursor.y}%`})},null,8,["style"])])):ke("v-if",!0)}}}),y3=q(u3,[["__file","/home/runner/work/sylius-resource-formation/sylius-resource-formation/node_modules/@slidev/client/internals/PresenterMouse.vue"]]),d3=Pe({__name:"SlidesShow",props:{context:{type:String,required:!0}},setup(s){I(N),Be(ys,()=>{var t,r;(t=ys.value)!=null&&t.meta&&ys.value.meta.preload!==!1&&(ys.value.meta.__preloaded=!0),(r=xl.value)!=null&&r.meta&&xl.value.meta.preload!==!1&&(xl.value.meta.__preloaded=!0)},{immediate:!0});const n=en();In(()=>import("./DrawingLayer-4ccd5bd4.js"),[]).then(t=>n.value=t.default);const o=F(()=>Qe.filter(t=>{var r;return((r=t.meta)==null?void 0:r.__preloaded)||t===ys.value}));return(t,r)=>(C(),te(Me,null,[ke(" Global Bottom "),R(D(Bd)),ke(" Slides "),R(wh,_e(D(tD),{id:"slideshow",tag:"div"}),{default:b(()=>[(C(!0),te(Me,null,Ht(D(o),l=>{var c;return Xr((C(),P(D(gc),{key:l.path,is:l==null?void 0:l.component,clicks:l===D(ys)?D(Ts):0,"clicks-elements":((c=l.meta)==null?void 0:c.__clicksElements)||[],"clicks-disabled":!1,class:Ye(D(_c)(l)),route:l,context:s.context},null,8,["is","clicks","clicks-elements","class","route","context"])),[[vy,l===D(ys)]])}),128))]),_:1},16),ke(" Global Top "),R(D(gd)),D(n)?(C(),P(D(n),{key:0})):ke("v-if",!0),D(gs)?ke("v-if",!0):(C(),P(y3,{key:1}))],64))}});const f3=q(d3,[["__scopeId","data-v-afb4231e"],["__file","/home/runner/work/sylius-resource-formation/sylius-resource-formation/node_modules/@slidev/client/internals/SlidesShow.vue"]]),m3=Pe({__name:"PrintStyle",setup(s){I(N);function n(o,{slots:t}){if(t.default)return fs("style",t.default())}return(o,t)=>(C(),P(n,null,{default:b(()=>[a(" @page { size: "+ao(D($n))+"px "+ao(D(ic))+"px; margin: 0px; } ",1)]),_:1}))}}),Ad=q(m3,[["__file","/home/runner/work/sylius-resource-formation/sylius-resource-formation/node_modules/@slidev/client/internals/PrintStyle.vue"]]),h3=Pe({__name:"Play",setup(s){I(N),q1();const n=Z();function o(l){var c;dp.value||((c=l.target)==null?void 0:c.id)==="slide-container"&&(l.screenX/window.innerWidth>.6?Tn():Mn())}rD(n);const t=F(()=>ZB.value||dp.value);en();const r=en();return In(()=>import("./DrawingControls-0a583b6e.js"),[]).then(l=>r.value=l.default),(l,c)=>(C(),te(Me,null,[D(Oo)?(C(),P(Ad,{key:0})):ke("v-if",!0),e("div",{id:"page-root",ref_key:"root",ref:n,class:"grid grid-cols-[1fr_max-content]",style:ts(D(pc))},[R(md,{class:"w-full h-full",style:ts({background:"var(--slidev-slide-container-background, black)"}),width:D(Oo)?D(lo).width.value:void 0,scale:D(dr),onPointerdown:o},{default:b(()=>[R(f3,{context:"slide"})]),controls:b(()=>[e("div",{class:Ye(["absolute bottom-0 left-0 transition duration-300 opacity-0 hover:opacity-100",[D(t)?"opacity-100 right-0":"opacity-0 p-2",D(Rt)?"pointer-events-none":""]])},[R(i3,{class:"m-auto",persist:D(t)},null,8,["persist"])],2),!D($e).drawings.presenterOnly&&!D(ln)&&D(r)?(C(),P(D(r),{key:0,class:"ml-0"})):ke("v-if",!0)]),_:1},8,["style","width","scale"]),ke("v-if",!0)],4),R(dA)],64))}}),_3=q(h3,[["__file","/home/runner/work/sylius-resource-formation/sylius-resource-formation/node_modules/@slidev/client/internals/Play.vue"]]);/*! js-yaml 4.1.0 https://github.com/nodeca/js-yaml @license MIT */function vd(s){return typeof s>"u"||s===null}function g3(s){return typeof s=="object"&&s!==null}function B3(s){return Array.isArray(s)?s:vd(s)?[]:[s]}function A3(s,n){var o,t,r,l;if(n)for(l=Object.keys(n),o=0,t=l.length;o<t;o+=1)r=l[o],s[r]=n[r];return s}function v3(s,n){var o="",t;for(t=0;t<n;t+=1)o+=s;return o}function C3(s){return s===0&&Number.NEGATIVE_INFINITY===1/s}var E3=vd,b3=g3,k3=B3,D3=v3,w3=C3,S3=A3,Bc={isNothing:E3,isObject:b3,toArray:k3,repeat:D3,isNegativeZero:w3,extend:S3};function Cd(s,n){var o="",t=s.reason||"(unknown reason)";return s.mark?(s.mark.name&&(o+='in "'+s.mark.name+'" '),o+="("+(s.mark.line+1)+":"+(s.mark.column+1)+")",!n&&s.mark.snippet&&(o+=`

`+s.mark.snippet),t+" "+o):t}function Ft(s,n){Error.call(this),this.name="YAMLException",this.reason=s,this.mark=n,this.message=Cd(this,!1),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack||""}Ft.prototype=Object.create(Error.prototype);Ft.prototype.constructor=Ft;Ft.prototype.toString=function(n){return this.name+": "+Cd(this,n)};var Zn=Ft,R3=["kind","multi","resolve","construct","instanceOf","predicate","represent","representName","defaultStyle","styleAliases"],x3=["scalar","sequence","mapping"];function F3(s){var n={};return s!==null&&Object.keys(s).forEach(function(o){s[o].forEach(function(t){n[String(t)]=o})}),n}function $3(s,n){if(n=n||{},Object.keys(n).forEach(function(o){if(R3.indexOf(o)===-1)throw new Zn('Unknown option "'+o+'" is met in definition of "'+s+'" YAML type.')}),this.options=n,this.tag=s,this.kind=n.kind||null,this.resolve=n.resolve||function(){return!0},this.construct=n.construct||function(o){return o},this.instanceOf=n.instanceOf||null,this.predicate=n.predicate||null,this.represent=n.represent||null,this.representName=n.representName||null,this.defaultStyle=n.defaultStyle||null,this.multi=n.multi||!1,this.styleAliases=F3(n.styleAliases||null),x3.indexOf(this.kind)===-1)throw new Zn('Unknown kind "'+this.kind+'" is specified for "'+s+'" YAML type.')}var cs=$3;function bp(s,n){var o=[];return s[n].forEach(function(t){var r=o.length;o.forEach(function(l,c){l.tag===t.tag&&l.kind===t.kind&&l.multi===t.multi&&(r=c)}),o[r]=t}),o}function I3(){var s={scalar:{},sequence:{},mapping:{},fallback:{},multi:{scalar:[],sequence:[],mapping:[],fallback:[]}},n,o;function t(r){r.multi?(s.multi[r.kind].push(r),s.multi.fallback.push(r)):s[r.kind][r.tag]=s.fallback[r.tag]=r}for(n=0,o=arguments.length;n<o;n+=1)arguments[n].forEach(t);return s}function Ea(s){return this.extend(s)}Ea.prototype.extend=function(n){var o=[],t=[];if(n instanceof cs)t.push(n);else if(Array.isArray(n))t=t.concat(n);else if(n&&(Array.isArray(n.implicit)||Array.isArray(n.explicit)))n.implicit&&(o=o.concat(n.implicit)),n.explicit&&(t=t.concat(n.explicit));else throw new Zn("Schema.extend argument should be a Type, [ Type ], or a schema definition ({ implicit: [...], explicit: [...] })");o.forEach(function(l){if(!(l instanceof cs))throw new Zn("Specified list of YAML types (or a single Type object) contains a non-Type object.");if(l.loadKind&&l.loadKind!=="scalar")throw new Zn("There is a non-scalar type in the implicit list of a schema. Implicit resolving of such types is not supported.");if(l.multi)throw new Zn("There is a multi type in the implicit list of a schema. Multi tags can only be listed as explicit.")}),t.forEach(function(l){if(!(l instanceof cs))throw new Zn("Specified list of YAML types (or a single Type object) contains a non-Type object.")});var r=Object.create(Ea.prototype);return r.implicit=(this.implicit||[]).concat(o),r.explicit=(this.explicit||[]).concat(t),r.compiledImplicit=bp(r,"implicit"),r.compiledExplicit=bp(r,"explicit"),r.compiledTypeMap=I3(r.compiledImplicit,r.compiledExplicit),r};var T3=Ea,M3=new cs("tag:yaml.org,2002:str",{kind:"scalar",construct:function(s){return s!==null?s:""}}),P3=new cs("tag:yaml.org,2002:seq",{kind:"sequence",construct:function(s){return s!==null?s:[]}}),O3=new cs("tag:yaml.org,2002:map",{kind:"mapping",construct:function(s){return s!==null?s:{}}}),L3=new T3({explicit:[M3,P3,O3]});function N3(s){if(s===null)return!0;var n=s.length;return n===1&&s==="~"||n===4&&(s==="null"||s==="Null"||s==="NULL")}function q3(){return null}function U3(s){return s===null}var H3=new cs("tag:yaml.org,2002:null",{kind:"scalar",resolve:N3,construct:q3,predicate:U3,represent:{canonical:function(){return"~"},lowercase:function(){return"null"},uppercase:function(){return"NULL"},camelcase:function(){return"Null"},empty:function(){return""}},defaultStyle:"lowercase"});function V3(s){if(s===null)return!1;var n=s.length;return n===4&&(s==="true"||s==="True"||s==="TRUE")||n===5&&(s==="false"||s==="False"||s==="FALSE")}function j3(s){return s==="true"||s==="True"||s==="TRUE"}function G3(s){return Object.prototype.toString.call(s)==="[object Boolean]"}var W3=new cs("tag:yaml.org,2002:bool",{kind:"scalar",resolve:V3,construct:j3,predicate:G3,represent:{lowercase:function(s){return s?"true":"false"},uppercase:function(s){return s?"TRUE":"FALSE"},camelcase:function(s){return s?"True":"False"}},defaultStyle:"lowercase"});function z3(s){return 48<=s&&s<=57||65<=s&&s<=70||97<=s&&s<=102}function K3(s){return 48<=s&&s<=55}function Y3(s){return 48<=s&&s<=57}function Z3(s){if(s===null)return!1;var n=s.length,o=0,t=!1,r;if(!n)return!1;if(r=s[o],(r==="-"||r==="+")&&(r=s[++o]),r==="0"){if(o+1===n)return!0;if(r=s[++o],r==="b"){for(o++;o<n;o++)if(r=s[o],r!=="_"){if(r!=="0"&&r!=="1")return!1;t=!0}return t&&r!=="_"}if(r==="x"){for(o++;o<n;o++)if(r=s[o],r!=="_"){if(!z3(s.charCodeAt(o)))return!1;t=!0}return t&&r!=="_"}if(r==="o"){for(o++;o<n;o++)if(r=s[o],r!=="_"){if(!K3(s.charCodeAt(o)))return!1;t=!0}return t&&r!=="_"}}if(r==="_")return!1;for(;o<n;o++)if(r=s[o],r!=="_"){if(!Y3(s.charCodeAt(o)))return!1;t=!0}return!(!t||r==="_")}function Q3(s){var n=s,o=1,t;if(n.indexOf("_")!==-1&&(n=n.replace(/_/g,"")),t=n[0],(t==="-"||t==="+")&&(t==="-"&&(o=-1),n=n.slice(1),t=n[0]),n==="0")return 0;if(t==="0"){if(n[1]==="b")return o*parseInt(n.slice(2),2);if(n[1]==="x")return o*parseInt(n.slice(2),16);if(n[1]==="o")return o*parseInt(n.slice(2),8)}return o*parseInt(n,10)}function J3(s){return Object.prototype.toString.call(s)==="[object Number]"&&s%1===0&&!Bc.isNegativeZero(s)}var X3=new cs("tag:yaml.org,2002:int",{kind:"scalar",resolve:Z3,construct:Q3,predicate:J3,represent:{binary:function(s){return s>=0?"0b"+s.toString(2):"-0b"+s.toString(2).slice(1)},octal:function(s){return s>=0?"0o"+s.toString(8):"-0o"+s.toString(8).slice(1)},decimal:function(s){return s.toString(10)},hexadecimal:function(s){return s>=0?"0x"+s.toString(16).toUpperCase():"-0x"+s.toString(16).toUpperCase().slice(1)}},defaultStyle:"decimal",styleAliases:{binary:[2,"bin"],octal:[8,"oct"],decimal:[10,"dec"],hexadecimal:[16,"hex"]}}),eC=new RegExp("^(?:[-+]?(?:[0-9][0-9_]*)(?:\\.[0-9_]*)?(?:[eE][-+]?[0-9]+)?|\\.[0-9_]+(?:[eE][-+]?[0-9]+)?|[-+]?\\.(?:inf|Inf|INF)|\\.(?:nan|NaN|NAN))$");function sC(s){return!(s===null||!eC.test(s)||s[s.length-1]==="_")}function nC(s){var n,o;return n=s.replace(/_/g,"").toLowerCase(),o=n[0]==="-"?-1:1,"+-".indexOf(n[0])>=0&&(n=n.slice(1)),n===".inf"?o===1?Number.POSITIVE_INFINITY:Number.NEGATIVE_INFINITY:n===".nan"?NaN:o*parseFloat(n,10)}var oC=/^[-+]?[0-9]+e/;function tC(s,n){var o;if(isNaN(s))switch(n){case"lowercase":return".nan";case"uppercase":return".NAN";case"camelcase":return".NaN"}else if(Number.POSITIVE_INFINITY===s)switch(n){case"lowercase":return".inf";case"uppercase":return".INF";case"camelcase":return".Inf"}else if(Number.NEGATIVE_INFINITY===s)switch(n){case"lowercase":return"-.inf";case"uppercase":return"-.INF";case"camelcase":return"-.Inf"}else if(Bc.isNegativeZero(s))return"-0.0";return o=s.toString(10),oC.test(o)?o.replace("e",".e"):o}function rC(s){return Object.prototype.toString.call(s)==="[object Number]"&&(s%1!==0||Bc.isNegativeZero(s))}var lC=new cs("tag:yaml.org,2002:float",{kind:"scalar",resolve:sC,construct:nC,predicate:rC,represent:tC,defaultStyle:"lowercase"}),aC=L3.extend({implicit:[H3,W3,X3,lC]}),cC=aC,Ed=new RegExp("^([0-9][0-9][0-9][0-9])-([0-9][0-9])-([0-9][0-9])$"),bd=new RegExp("^([0-9][0-9][0-9][0-9])-([0-9][0-9]?)-([0-9][0-9]?)(?:[Tt]|[ \\t]+)([0-9][0-9]?):([0-9][0-9]):([0-9][0-9])(?:\\.([0-9]*))?(?:[ \\t]*(Z|([-+])([0-9][0-9]?)(?::([0-9][0-9]))?))?$");function iC(s){return s===null?!1:Ed.exec(s)!==null||bd.exec(s)!==null}function pC(s){var n,o,t,r,l,c,i,p=0,u=null,y,d,f;if(n=Ed.exec(s),n===null&&(n=bd.exec(s)),n===null)throw new Error("Date resolve error");if(o=+n[1],t=+n[2]-1,r=+n[3],!n[4])return new Date(Date.UTC(o,t,r));if(l=+n[4],c=+n[5],i=+n[6],n[7]){for(p=n[7].slice(0,3);p.length<3;)p+="0";p=+p}return n[9]&&(y=+n[10],d=+(n[11]||0),u=(y*60+d)*6e4,n[9]==="-"&&(u=-u)),f=new Date(Date.UTC(o,t,r,l,c,i,p)),u&&f.setTime(f.getTime()-u),f}function uC(s){return s.toISOString()}var yC=new cs("tag:yaml.org,2002:timestamp",{kind:"scalar",resolve:iC,construct:pC,instanceOf:Date,represent:uC});function dC(s){return s==="<<"||s===null}var fC=new cs("tag:yaml.org,2002:merge",{kind:"scalar",resolve:dC}),Ac=`ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=
\r`;function mC(s){if(s===null)return!1;var n,o,t=0,r=s.length,l=Ac;for(o=0;o<r;o++)if(n=l.indexOf(s.charAt(o)),!(n>64)){if(n<0)return!1;t+=6}return t%8===0}function hC(s){var n,o,t=s.replace(/[\r\n=]/g,""),r=t.length,l=Ac,c=0,i=[];for(n=0;n<r;n++)n%4===0&&n&&(i.push(c>>16&255),i.push(c>>8&255),i.push(c&255)),c=c<<6|l.indexOf(t.charAt(n));return o=r%4*6,o===0?(i.push(c>>16&255),i.push(c>>8&255),i.push(c&255)):o===18?(i.push(c>>10&255),i.push(c>>2&255)):o===12&&i.push(c>>4&255),new Uint8Array(i)}function _C(s){var n="",o=0,t,r,l=s.length,c=Ac;for(t=0;t<l;t++)t%3===0&&t&&(n+=c[o>>18&63],n+=c[o>>12&63],n+=c[o>>6&63],n+=c[o&63]),o=(o<<8)+s[t];return r=l%3,r===0?(n+=c[o>>18&63],n+=c[o>>12&63],n+=c[o>>6&63],n+=c[o&63]):r===2?(n+=c[o>>10&63],n+=c[o>>4&63],n+=c[o<<2&63],n+=c[64]):r===1&&(n+=c[o>>2&63],n+=c[o<<4&63],n+=c[64],n+=c[64]),n}function gC(s){return Object.prototype.toString.call(s)==="[object Uint8Array]"}var BC=new cs("tag:yaml.org,2002:binary",{kind:"scalar",resolve:mC,construct:hC,predicate:gC,represent:_C}),AC=Object.prototype.hasOwnProperty,vC=Object.prototype.toString;function CC(s){if(s===null)return!0;var n=[],o,t,r,l,c,i=s;for(o=0,t=i.length;o<t;o+=1){if(r=i[o],c=!1,vC.call(r)!=="[object Object]")return!1;for(l in r)if(AC.call(r,l))if(!c)c=!0;else return!1;if(!c)return!1;if(n.indexOf(l)===-1)n.push(l);else return!1}return!0}function EC(s){return s!==null?s:[]}var bC=new cs("tag:yaml.org,2002:omap",{kind:"sequence",resolve:CC,construct:EC}),kC=Object.prototype.toString;function DC(s){if(s===null)return!0;var n,o,t,r,l,c=s;for(l=new Array(c.length),n=0,o=c.length;n<o;n+=1){if(t=c[n],kC.call(t)!=="[object Object]"||(r=Object.keys(t),r.length!==1))return!1;l[n]=[r[0],t[r[0]]]}return!0}function wC(s){if(s===null)return[];var n,o,t,r,l,c=s;for(l=new Array(c.length),n=0,o=c.length;n<o;n+=1)t=c[n],r=Object.keys(t),l[n]=[r[0],t[r[0]]];return l}var SC=new cs("tag:yaml.org,2002:pairs",{kind:"sequence",resolve:DC,construct:wC}),RC=Object.prototype.hasOwnProperty;function xC(s){if(s===null)return!0;var n,o=s;for(n in o)if(RC.call(o,n)&&o[n]!==null)return!1;return!0}function FC(s){return s!==null?s:{}}var $C=new cs("tag:yaml.org,2002:set",{kind:"mapping",resolve:xC,construct:FC});cC.extend({implicit:[yC,fC],explicit:[BC,bC,SC,$C]});function kp(s){return s===48?"\0":s===97?"\x07":s===98?"\b":s===116||s===9?"	":s===110?`
`:s===118?"\v":s===102?"\f":s===114?"\r":s===101?"\x1B":s===32?" ":s===34?'"':s===47?"/":s===92?"\\":s===78?"":s===95?" ":s===76?"\u2028":s===80?"\u2029":""}var IC=new Array(256),TC=new Array(256);for(var vo=0;vo<256;vo++)IC[vo]=kp(vo)?1:0,TC[vo]=kp(vo);function MC(s){return Array.from(new Set(s))}function Dp(...s){let n,o,t;s.length===1?(n=0,t=1,[o]=s):[n,o,t=1]=s;const r=[];let l=n;for(;l<o;)r.push(l),l+=t||1;return r}function kd(s,n){if(!n||n==="all"||n==="*")return Dp(1,s+1);const o=[];for(const t of n.split(/[,;]/g))if(!t.includes("-"))o.push(+t);else{const[r,l]=t.split("-",2);o.push(...Dp(+r,l?+l+1:s+1))}return MC(o).filter(t=>t<=s).sort((t,r)=>t-r)}function Dd(s){const n=F(()=>s.value.path),o=F(()=>Qe.length-1),t=F(()=>parseInt(n.value.split(/\//g).slice(-1)[0])||1),r=F(()=>tl(t.value)),l=F(()=>Qe.find(f=>f.path===`${t.value}`)),c=F(()=>{var f,h,m;return(m=(h=(f=l.value)==null?void 0:f.meta)==null?void 0:h.slide)==null?void 0:m.id}),i=F(()=>{var f,h;return((h=(f=l.value)==null?void 0:f.meta)==null?void 0:h.layout)||(t.value===1?"cover":"default")}),p=F(()=>Qe.find(f=>f.path===`${Math.min(Qe.length,t.value+1)}`)),u=F(()=>Qe.filter(f=>{var h,m;return(m=(h=f.meta)==null?void 0:h.slide)==null?void 0:m.title}).reduce((f,h)=>(vc(f,h),f),[])),y=F(()=>Cc(u.value,l.value)),d=F(()=>Ec(y.value));return{route:s,path:n,total:o,currentPage:t,currentPath:r,currentRoute:l,currentSlideId:c,currentLayout:i,nextRoute:p,rawTree:u,treeWithActiveStatuses:y,tree:d}}function wd(s,n,o){const t=Z(0);os(()=>{As.afterEach(async()=>{await os(),t.value+=1})});const r=F(()=>{var p,u;return t.value,((u=(p=n.value)==null?void 0:p.meta)==null?void 0:u.__clicksElements)||[]}),l=F(()=>{var p,u;return+(((u=(p=n.value)==null?void 0:p.meta)==null?void 0:u.clicks)??r.value.length)}),c=F(()=>o.value<Qe.length-1||s.value<l.value),i=F(()=>o.value>1||s.value>0);return{clicks:s,clicksElements:r,clicksTotal:l,hasNext:c,hasPrev:i}}const PC=["id"],OC=Pe({__name:"PrintSlideClick",props:{clicks:{type:Number,required:!0},clicksElements:{type:Array,required:!1},nav:{type:null,required:!0},route:{type:null,required:!0}},emits:["update:clicksElements"],setup(s,{emit:n}){const o=s,t=Qs(o,"clicksElements",n),r=F(()=>({height:`${ic}px`,width:`${$n}px`})),l=en();In(()=>Promise.resolve().then(()=>Y1),void 0).then(u=>l.value=u.default);const c=F(()=>o.clicks),i=wd(c,o.nav.currentRoute,o.nav.currentPage),p=F(()=>`${o.route.path.toString().padStart(3,"0")}-${(c.value+1).toString().padStart(2,"0")}`);return Ds(N,Ge({nav:{...o.nav,...i},configs:$e,themeConfigs:F(()=>$e.themeConfig)})),(u,y)=>{var d;return C(),te("div",{id:D(p),class:"print-slide-container",style:ts(D(r))},[R(D(Bd)),R(D(gc),{is:(d=s.route)==null?void 0:d.component,"clicks-elements":D(t),"onUpdate:clicksElements":y[0]||(y[0]=f=>Ie(t)?t.value=f:null),clicks:D(c),"clicks-disabled":!1,class:Ye(D(_c)(s.route)),route:s.route},null,8,["is","clicks-elements","clicks","class","route"]),D(l)?(C(),P(D(l),{key:0,page:+s.route.path},null,8,["page"])):ke("v-if",!0),R(D(gd))],12,PC)}}}),wp=q(OC,[["__file","/home/runner/work/sylius-resource-formation/sylius-resource-formation/node_modules/@slidev/client/internals/PrintSlideClick.vue"]]),LC=Pe({__name:"PrintSlide",props:{route:{type:null,required:!0}},setup(s){var l;const n=s;I(N);const o=Ge(((l=n.route.meta)==null?void 0:l.__clicksElements)||[]),t=F(()=>n.route),r=Dd(t);return(c,i)=>(C(),te(Me,null,[R(wp,{"clicks-elements":o,"onUpdate:clicksElements":i[0]||(i[0]=p=>o=p),clicks:0,nav:D(r),route:D(t)},null,8,["clicks-elements","nav","route"]),D(dt)?ke("v-if",!0):(C(!0),te(Me,{key:0},Ht(o.length,p=>(C(),P(wp,{key:p,clicks:p,nav:D(r),route:D(t)},null,8,["clicks","nav","route"]))),128))],64))}}),NC=q(LC,[["__file","/home/runner/work/sylius-resource-formation/sylius-resource-formation/node_modules/@slidev/client/internals/PrintSlide.vue"]]),qC={id:"print-content"},UC=Pe({__name:"PrintContainer",props:{width:{type:Number,required:!0}},setup(s){const n=s;I(N);const o=F(()=>n.width),t=F(()=>n.width/Fn),r=F(()=>o.value/t.value),l=F(()=>r.value<Fn?o.value/$n:t.value*Fn/$n);let c=Qe.slice(0,-1);Ps.value.query.range&&(c=kd(c.length,Ps.value.query.range).map(u=>c[u-1]));const i=F(()=>({"select-none":!$e.selectable,"slidev-code-line-numbers":$e.lineNumbers}));return Ds(Fy,l),(p,u)=>(C(),te("div",{id:"print-container",class:Ye(D(i))},[e("div",qC,[(C(!0),te(Me,null,Ht(D(c),y=>(C(),P(NC,{key:y.path,route:y},null,8,["route"]))),128))]),fn(p.$slots,"controls")],2))}});const HC=q(UC,[["__file","/home/runner/work/sylius-resource-formation/sylius-resource-formation/node_modules/@slidev/client/internals/PrintContainer.vue"]]),VC=Pe({__name:"Print",setup(s){return I(N),yo(()=>{Oo?document.body.parentNode.classList.add("print"):document.body.parentNode.classList.remove("print")}),(n,o)=>(C(),te(Me,null,[D(Oo)?(C(),P(Ad,{key:0})):ke("v-if",!0),e("div",{id:"page-root",class:"grid grid-cols-[1fr_max-content]",style:ts(D(pc))},[R(HC,{class:"w-full h-full",style:ts({background:"var(--slidev-slide-container-background, black)"}),width:D(lo).width.value},null,8,["style","width"])],4)],64))}});const jC=q(VC,[["__file","/home/runner/work/sylius-resource-formation/sylius-resource-formation/node_modules/@slidev/client/internals/Print.vue"]]);const GC={class:"slidev-layout end"},WC={__name:"end",setup(s){return I(N),(n,o)=>(C(),te("div",GC," END "))}},zC=q(WC,[["__scopeId","data-v-e532b98d"],["__file","/home/runner/work/sylius-resource-formation/sylius-resource-formation/node_modules/@slidev/client/layouts/end.vue"]]);function Sp(s){return s.startsWith("/")?"/sylius-resource-formation/"+s.slice(1):s}function KC(s,n=!1){const o=s&&["#","rgb","hsl"].some(r=>s.indexOf(r)===0),t={background:o?s:void 0,color:s&&!o?"white":void 0,backgroundImage:o?void 0:s?n?`linear-gradient(#0005, #0008), url(${Sp(s)})`:`url("${Sp(s)}")`:void 0,backgroundRepeat:"no-repeat",backgroundPosition:"center",backgroundSize:"cover"};return t.background||delete t.background,t}const YC={class:"my-auto w-full"},ZC=Pe({__name:"cover",props:{background:{default:"https://source.unsplash.com/collection/94734566/1920x1080"}},setup(s){const n=s;I(N);const o=F(()=>KC(n.background,!0));return(t,r)=>(C(),te("div",{class:"slidev-layout cover text-center",style:ts(D(o))},[e("div",YC,[fn(t.$slots,"default")])],4))}}),QC=q(ZC,[["__file","/home/runner/work/sylius-resource-formation/sylius-resource-formation/node_modules/@slidev/theme-seriph/layouts/cover.vue"]]),JC=e("h1",null,"Sylius Resource Formation",-1),XC=e("p",null,"avec Sylius & Monofony",-1),e0=e("div",{align:"center"},[e("img",{class:"w-75",align:"center",src:"https://sylius.com/wp-content/uploads/2021/03/sylius-logo_sylius-logo-light-1024x422.jpg"})],-1),s0=e("div",{align:"center"},[e("img",{class:"w-75",src:"https://raw.githubusercontent.com/Monofony/Monofony/0.x/docs/_images/doc_logo.png"})],-1),n0={__name:"1",setup(s){const n={theme:"seriph",background:!1,class:"text-center",highlighter:"shiki",lineNumbers:!1,info:`## Slidev Starter Template
Presentation slides for developers.

Learn more at [Sli.dev](https://sli.dev)
`,drawings:{persist:!1},transition:"slide-left",colorSchema:"light",css:"unocss"};return I(N),(o,t)=>(C(),P(QC,X(Q(n)),{default:b(()=>[JC,XC,e0,s0]),_:1},16))}},o0=q(n0,[["__file","/@slidev/slides/1.md"]]),t0={class:"slidev-icon",viewBox:"0 0 256 256",width:"1.2em",height:"1.2em"},r0=e("path",{fill:"currentColor",d:"M200 32h-36.3a47.8 47.8 0 0 0-71.4 0H56a16 16 0 0 0-16 16v168a16 16 0 0 0 16 16h144a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16Zm-72 0a32.1 32.1 0 0 1 32 32H96a32.1 32.1 0 0 1 32-32Zm72 184H56V48h26.8A47.2 47.2 0 0 0 80 64v8a8 8 0 0 0 8 8h80a8 8 0 0 0 8-8v-8a47.2 47.2 0 0 0-2.8-16H200Z"},null,-1),l0=[r0];function a0(s,n){return C(),te("svg",t0,l0)}const c0={name:"ph-clipboard",render:a0},i0={class:"slidev-icon",viewBox:"0 0 256 256",width:"1.2em",height:"1.2em"},p0=e("path",{fill:"currentColor",d:"M177.8 98.5a8 8 0 0 1-.3 11.3l-58.6 56a8.1 8.1 0 0 1-5.6 2.2a7.9 7.9 0 0 1-5.5-2.2l-29.3-28a8 8 0 1 1 11-11.6l23.8 22.7l53.2-50.7a8 8 0 0 1 11.3.3ZM232 128A104 104 0 1 1 128 24a104.2 104.2 0 0 1 104 104Zm-16 0a88 88 0 1 0-88 88a88.1 88.1 0 0 0 88-88Z"},null,-1),u0=[p0];function y0(s,n){return C(),te("svg",i0,u0)}const d0={name:"ph-check-circle",render:y0},f0=["title"],m0=Pe({__name:"CodeBlockWrapper",props:{ranges:{default:()=>[]},at:{type:Number,default:void 0},maxHeight:{type:String,default:void 0}},setup(s){const n=s;I(N);const o=I(ct),t=I(Yn),r=I(it);function l(d=5){const f=[],h="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",m=h.length;for(let g=0;g<d;g++)f.push(h.charAt(Math.floor(Math.random()*m)));return f.join("")}const c=Z(),i=xs();fo(()=>{const d=n.at==null?t==null?void 0:t.value.length:n.at,f=F(()=>r!=null&&r.value?n.ranges.length-1:Math.min(Math.max(0,((o==null?void 0:o.value)||0)-(d||0)),n.ranges.length-1)),h=F(()=>n.ranges[f.value]||"");if(n.ranges.length>=2&&!(r!=null&&r.value)){const m=l(),g=T5(n.ranges.length-1).map(B=>m+B);t!=null&&t.value&&(t.value.push(...g),Jr(()=>g.forEach(B=>aa(t.value,B)),i))}yo(()=>{if(!c.value)return;const g=c.value.querySelector(".shiki-dark")?Array.from(c.value.querySelectorAll(".shiki")):[c.value];for(const B of g){const k=Array.from(B.querySelectorAll(".line")),v=kd(k.length,h.value);if(k.forEach((E,w)=>{const T=v.includes(w+1);E.classList.toggle(zn,!0),E.classList.toggle("highlighted",T),E.classList.toggle("dishonored",!T)}),n.maxHeight){const E=B.querySelector(".line.highlighted");E&&E.scrollIntoView({behavior:"smooth",block:"center"})}}})});const{copied:p,copy:u}=P_();function y(){var f,h;const d=(h=(f=c.value)==null?void 0:f.querySelector(".slidev-code"))==null?void 0:h.textContent;d&&u(d)}return(d,f)=>{const h=d0,m=c0;return C(),te("div",{ref_key:"el",ref:c,class:"slidev-code-wrapper relative group",style:ts({"max-height":n.maxHeight,"overflow-y":n.maxHeight?"scroll":void 0})},[fn(d.$slots,"default"),D($e).codeCopy?(C(),te("button",{key:0,class:"slidev-code-copy absolute top-0 right-0 transition opacity-0 group-hover:opacity-20 hover:!opacity-100",title:D(p)?"Copied":"Copy",onClick:f[0]||(f[0]=g=>y())},[D(p)?(C(),P(h,{key:0,class:"p-2 w-8 h-8"})):(C(),P(m,{key:1,class:"p-2 w-8 h-8"}))],8,f0)):ke("v-if",!0)],4)}}}),Ee=q(m0,[["__file","/home/runner/work/sylius-resource-formation/sylius-resource-formation/node_modules/@slidev/client/builtin/CodeBlockWrapper.vue"]]),h0={class:"slidev-layout default"},_0={__name:"default",setup(s){return I(N),(n,o)=>(C(),te("div",h0,[fn(n.$slots,"default")]))}},ee=q(_0,[["__file","/home/runner/work/sylius-resource-formation/sylius-resource-formation/node_modules/@slidev/client/layouts/default.vue"]]),g0=e("h1",null,"Create a new resource",-1),B0=e("p",null,"As an example, let’s create a Book entity:",-1),A0=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#A1B567"}},"$"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},"bin/console"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},"make:entity"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},"'App\\Entity\\Book'")])])]),e("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#6C7834"}},"$"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},"bin/console"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},"make:entity"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},"'App\\Entity\\Book'")])])])],-1),v0={__name:"2",setup(s){const n={srcSequence:"./pages/01_create_resource.md"};return I(N),(o,t)=>{const r=Ee;return C(),P(ee,X(Q(n)),{default:b(()=>[g0,B0,R(r,_e({},{ranges:[""]}),{default:b(()=>[A0]),_:1},16)]),_:1},16)}}},C0=q(v0,[["__file","/@slidev/slides/2.md"]]),E0=e("h1",null,"Configure the BookRepository",-1),b0=e("p",null,"The command also generates a Doctrine repository class.",-1),k0=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#CB7676"}},"<?"),e("span",{style:{color:"#D4976C"}},"php")]),a(`
`),e("span",{class:"line"}),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#4D9375"}},"namespace"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"App"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#A1B567"}},"Repository"),e("span",{style:{color:"#858585"}},";")]),a(`
`),e("span",{class:"line"}),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#4D9375"}},"use"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"App"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#E0A569"}},"Entity"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#E0A569"}},"Book"),e("span",{style:{color:"#858585"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#4D9375"}},"use"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"Doctrine"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#E0A569"}},"Bundle"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#E0A569"}},"DoctrineBundle"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#E0A569"}},"Repository"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#E0A569"}},"ServiceEntityRepository"),e("span",{style:{color:"#858585"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#4D9375"}},"use"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"Doctrine"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#E0A569"}},"Persistence"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#E0A569"}},"ManagerRegistry"),e("span",{style:{color:"#858585"}},";")]),a(`
`),e("span",{class:"line"}),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#758575"}},"/**")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#758575"}}," * [...]")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#758575"}}," */")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#CB7676"}},"class"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"BookRepository"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"extends"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"ServiceEntityRepository")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"{")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#CB7676"}},"public"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"function"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"__construct"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#E0A569"}},"ManagerRegistry"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"$"),e("span",{style:{color:"#B8A965"}},"registry"),e("span",{style:{color:"#858585"}},")")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#858585"}},"{")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#CB7676"}},"parent::"),e("span",{style:{color:"#A1B567"}},"__construct"),e("span",{style:{color:"#858585"}},"($"),e("span",{style:{color:"#B8A965"}},"registry"),e("span",{style:{color:"#858585"}},","),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"Book"),e("span",{style:{color:"#CB7676"}},"::"),e("span",{style:{color:"#4D9375"}},"class"),e("span",{style:{color:"#858585"}},");")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#858585"}},"}")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    ")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"    "),e("span",{style:{color:"#758575"}},"// [...]")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"}")])])]),e("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#AB5959"}},"<?"),e("span",{style:{color:"#A65E2B"}},"php")]),a(`
`),e("span",{class:"line"}),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#1C6B48"}},"namespace"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"App"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#6C7834"}},"Repository"),e("span",{style:{color:"#8E8F8B"}},";")]),a(`
`),e("span",{class:"line"}),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#1C6B48"}},"use"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B58451"}},"App"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#B58451"}},"Entity"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#B58451"}},"Book"),e("span",{style:{color:"#8E8F8B"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#1C6B48"}},"use"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B58451"}},"Doctrine"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#B58451"}},"Bundle"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#B58451"}},"DoctrineBundle"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#B58451"}},"Repository"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#B58451"}},"ServiceEntityRepository"),e("span",{style:{color:"#8E8F8B"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#1C6B48"}},"use"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B58451"}},"Doctrine"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#B58451"}},"Persistence"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#B58451"}},"ManagerRegistry"),e("span",{style:{color:"#8E8F8B"}},";")]),a(`
`),e("span",{class:"line"}),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#A0ADA0"}},"/**")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#A0ADA0"}}," * [...]")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#A0ADA0"}}," */")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#AB5959"}},"class"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"BookRepository"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"extends"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"ServiceEntityRepository")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"{")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#AB5959"}},"public"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"function"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B58451"}},"__construct"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#B58451"}},"ManagerRegistry"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"$"),e("span",{style:{color:"#8C862B"}},"registry"),e("span",{style:{color:"#8E8F8B"}},")")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#8E8F8B"}},"{")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#AB5959"}},"parent::"),e("span",{style:{color:"#6C7834"}},"__construct"),e("span",{style:{color:"#8E8F8B"}},"($"),e("span",{style:{color:"#8C862B"}},"registry"),e("span",{style:{color:"#8E8F8B"}},","),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B58451"}},"Book"),e("span",{style:{color:"#AB5959"}},"::"),e("span",{style:{color:"#1C6B48"}},"class"),e("span",{style:{color:"#8E8F8B"}},");")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#8E8F8B"}},"}")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    ")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"    "),e("span",{style:{color:"#A0ADA0"}},"// [...]")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"}")])])])],-1),D0={__name:"3",setup(s){const n={transition:"fade",srcSequence:"./pages/01_create_resource.md"};return I(N),(o,t)=>{const r=Ee;return C(),P(ee,X(Q(n)),{default:b(()=>[E0,b0,R(r,_e({},{ranges:[""]}),{default:b(()=>[k0]),_:1},16)]),_:1},16)}}},w0=q(D0,[["__file","/@slidev/slides/3.md"]]),S0=e("h1",null,"Configure the BookRepository",-1),R0=e("p",null,"The command also generates a Doctrine repository class.",-1),x0=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#CB7676"}},"<?"),e("span",{style:{color:"#D4976C"}},"php")]),a(`
`),e("span",{class:"line"}),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#4D9375"}},"namespace"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"App"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#A1B567"}},"Repository"),e("span",{style:{color:"#858585"}},";")]),a(`
`),e("span",{class:"line"}),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#4D9375"}},"use"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"App"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#E0A569"}},"Entity"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#E0A569"}},"Book"),e("span",{style:{color:"#858585"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#4D9375"}},"use"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"Doctrine"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#E0A569"}},"Bundle"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#E0A569"}},"DoctrineBundle"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#E0A569"}},"Repository"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#E0A569"}},"ServiceEntityRepository"),e("span",{style:{color:"#858585"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#4D9375"}},"use"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"Doctrine"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#E0A569"}},"Persistence"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#E0A569"}},"ManagerRegistry"),e("span",{style:{color:"#858585"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#4D9375"}},"use"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"Sylius"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#E0A569"}},"Bundle"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#E0A569"}},"ResourceBundle"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#E0A569"}},"Doctrine"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#E0A569"}},"ORM"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#E0A569"}},"ResourceRepositoryTrait"),e("span",{style:{color:"#858585"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#4D9375"}},"use"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"Sylius"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#E0A569"}},"Component"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#E0A569"}},"Resource"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#E0A569"}},"Repository"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#E0A569"}},"RepositoryInterface"),e("span",{style:{color:"#858585"}},";")]),a(`
`),e("span",{class:"line"}),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#758575"}},"/**")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#758575"}}," * [...]")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#758575"}}," */")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#CB7676"}},"class"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"BookRepository"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"extends"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"ServiceEntityRepository"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"implements"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"RepositoryInterface")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"{")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#4D9375"}},"use"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"ResourceRepositoryTrait"),e("span",{style:{color:"#858585"}},";")]),a(`
`),e("span",{class:"line"}),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#CB7676"}},"public"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"function"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"__construct"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#E0A569"}},"ManagerRegistry"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"$"),e("span",{style:{color:"#B8A965"}},"registry"),e("span",{style:{color:"#858585"}},")")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#858585"}},"{")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#CB7676"}},"parent::"),e("span",{style:{color:"#A1B567"}},"__construct"),e("span",{style:{color:"#858585"}},"($"),e("span",{style:{color:"#B8A965"}},"registry"),e("span",{style:{color:"#858585"}},","),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"Book"),e("span",{style:{color:"#CB7676"}},"::"),e("span",{style:{color:"#4D9375"}},"class"),e("span",{style:{color:"#858585"}},");")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#858585"}},"}")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"}")])])]),e("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#AB5959"}},"<?"),e("span",{style:{color:"#A65E2B"}},"php")]),a(`
`),e("span",{class:"line"}),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#1C6B48"}},"namespace"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"App"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#6C7834"}},"Repository"),e("span",{style:{color:"#8E8F8B"}},";")]),a(`
`),e("span",{class:"line"}),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#1C6B48"}},"use"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B58451"}},"App"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#B58451"}},"Entity"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#B58451"}},"Book"),e("span",{style:{color:"#8E8F8B"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#1C6B48"}},"use"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B58451"}},"Doctrine"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#B58451"}},"Bundle"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#B58451"}},"DoctrineBundle"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#B58451"}},"Repository"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#B58451"}},"ServiceEntityRepository"),e("span",{style:{color:"#8E8F8B"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#1C6B48"}},"use"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B58451"}},"Doctrine"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#B58451"}},"Persistence"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#B58451"}},"ManagerRegistry"),e("span",{style:{color:"#8E8F8B"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#1C6B48"}},"use"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B58451"}},"Sylius"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#B58451"}},"Bundle"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#B58451"}},"ResourceBundle"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#B58451"}},"Doctrine"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#B58451"}},"ORM"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#B58451"}},"ResourceRepositoryTrait"),e("span",{style:{color:"#8E8F8B"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#1C6B48"}},"use"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B58451"}},"Sylius"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#B58451"}},"Component"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#B58451"}},"Resource"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#B58451"}},"Repository"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#B58451"}},"RepositoryInterface"),e("span",{style:{color:"#8E8F8B"}},";")]),a(`
`),e("span",{class:"line"}),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#A0ADA0"}},"/**")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#A0ADA0"}}," * [...]")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#A0ADA0"}}," */")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#AB5959"}},"class"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"BookRepository"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"extends"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"ServiceEntityRepository"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"implements"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"RepositoryInterface")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"{")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#1C6B48"}},"use"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B58451"}},"ResourceRepositoryTrait"),e("span",{style:{color:"#8E8F8B"}},";")]),a(`
`),e("span",{class:"line"}),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#AB5959"}},"public"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"function"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B58451"}},"__construct"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#B58451"}},"ManagerRegistry"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"$"),e("span",{style:{color:"#8C862B"}},"registry"),e("span",{style:{color:"#8E8F8B"}},")")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#8E8F8B"}},"{")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#AB5959"}},"parent::"),e("span",{style:{color:"#6C7834"}},"__construct"),e("span",{style:{color:"#8E8F8B"}},"($"),e("span",{style:{color:"#8C862B"}},"registry"),e("span",{style:{color:"#8E8F8B"}},","),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B58451"}},"Book"),e("span",{style:{color:"#AB5959"}},"::"),e("span",{style:{color:"#1C6B48"}},"class"),e("span",{style:{color:"#8E8F8B"}},");")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#8E8F8B"}},"}")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"}")])])])],-1),F0={__name:"4",setup(s){const n={srcSequence:"./pages/01_create_resource.md"};return I(N),(o,t)=>{const r=Ee;return C(),P(ee,X(Q(n)),{default:b(()=>[S0,R0,R(r,_e({},{ranges:["all","14","14,9","16","16,8"]}),{default:b(()=>[x0]),_:1},16)]),_:1},16)}}},$0=q(F0,[["__file","/@slidev/slides/4.md"]]),Re=Pe({props:{every:{type:Number,default:1},at:{type:[Number,String],default:null},hide:{type:Boolean,default:!1},fade:{type:Boolean,default:!1}},render(){var l,c;const s=Jc("click"),n=Jc("after"),o=(i,p,u)=>Xr(i,[[p,this.at!=null?+this.at+u:null,"",{hide:this.hide,fade:this.fade}]]);let t=(c=(l=this.$slots).default)==null?void 0:c.call(l);if(!t)return;t=I5(t);const r=i=>i.map((p,u)=>mn(p)?o(fs(p),u%this.every===0?s:n,Math.floor(u/this.every)):p);return t.length===1&&["ul","ol"].includes(t[0].type)&&Array.isArray(t[0].children)?fs(t[0],{},[r(t[0].children)]):r(t)}}),I0=e("h1",null,"Configure your resource",-1),T0=e("p",null,"Implements the Resource interface",-1),M0=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#758575"}},"// src/Entity/Book.php")]),a(`
`),e("span",{class:"line"}),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#4D9375"}},"namespace"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"App"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#A1B567"}},"Entity"),e("span",{style:{color:"#858585"}},";")]),a(`
`),e("span",{class:"line"}),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#4D9375"}},"use"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"App"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#E0A569"}},"Repository"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#E0A569"}},"BookRepository"),e("span",{style:{color:"#858585"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#4D9375"}},"use"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"Doctrine"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#E0A569"}},"ORM"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#E0A569"}},"Mapping"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#4D9375"}},"as"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"ORM"),e("span",{style:{color:"#858585"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#4D9375"}},"use"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"Sylius"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#E0A569"}},"Component"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#E0A569"}},"Resource"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#E0A569"}},"Model"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#E0A569"}},"ResourceInterface"),e("span",{style:{color:"#858585"}},";")]),a(`
`),e("span",{class:"line"}),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"#["),e("span",{style:{color:"#E0A569"}},"ORM"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#E0A569"}},"Entity"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#A1B567"}},"repositoryClass"),e("span",{style:{color:"#858585"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"BookRepository"),e("span",{style:{color:"#CB7676"}},"::"),e("span",{style:{color:"#4D9375"}},"class"),e("span",{style:{color:"#858585"}},")"),e("span",{style:{color:"#DBD7CA"}},"]")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#CB7676"}},"class"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"Book"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"implements"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"ResourceInterface")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"{")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#CB7676"}},"public"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"function"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"getId"),e("span",{style:{color:"#858585"}},"()"),e("span",{style:{color:"#CB7676"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#4D9375"}},"int")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#858585"}},"{")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#4D9375"}},"return"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"$"),e("span",{style:{color:"#D4976C"}},"this"),e("span",{style:{color:"#CB7676"}},"->"),e("span",{style:{color:"#B8A965"}},"id"),e("span",{style:{color:"#858585"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#858585"}},"}")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"}")])])]),e("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#A0ADA0"}},"// src/Entity/Book.php")]),a(`
`),e("span",{class:"line"}),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#1C6B48"}},"namespace"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"App"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#6C7834"}},"Entity"),e("span",{style:{color:"#8E8F8B"}},";")]),a(`
`),e("span",{class:"line"}),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#1C6B48"}},"use"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B58451"}},"App"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#B58451"}},"Repository"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#B58451"}},"BookRepository"),e("span",{style:{color:"#8E8F8B"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#1C6B48"}},"use"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B58451"}},"Doctrine"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#B58451"}},"ORM"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#B58451"}},"Mapping"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#1C6B48"}},"as"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"ORM"),e("span",{style:{color:"#8E8F8B"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#1C6B48"}},"use"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B58451"}},"Sylius"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#B58451"}},"Component"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#B58451"}},"Resource"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#B58451"}},"Model"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#B58451"}},"ResourceInterface"),e("span",{style:{color:"#8E8F8B"}},";")]),a(`
`),e("span",{class:"line"}),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"#["),e("span",{style:{color:"#B58451"}},"ORM"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#B58451"}},"Entity"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#6C7834"}},"repositoryClass"),e("span",{style:{color:"#8E8F8B"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B58451"}},"BookRepository"),e("span",{style:{color:"#AB5959"}},"::"),e("span",{style:{color:"#1C6B48"}},"class"),e("span",{style:{color:"#8E8F8B"}},")"),e("span",{style:{color:"#393A34"}},"]")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#AB5959"}},"class"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"Book"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"implements"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"ResourceInterface")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"{")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#AB5959"}},"public"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"function"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"getId"),e("span",{style:{color:"#8E8F8B"}},"()"),e("span",{style:{color:"#AB5959"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#1C6B48"}},"int")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#8E8F8B"}},"{")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#1C6B48"}},"return"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"$"),e("span",{style:{color:"#A65E2B"}},"this"),e("span",{style:{color:"#AB5959"}},"->"),e("span",{style:{color:"#8C862B"}},"id"),e("span",{style:{color:"#8E8F8B"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#8E8F8B"}},"}")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"}")])])])],-1),P0=e("p",null,[a("This interface requires you to implement a "),e("code",null,"getId()"),a(" method.")],-1),O0=e("p",null,"This one is already generated 🎉",-1),L0={__name:"5",setup(s){const n={srcSequence:"./pages/02_configure_your_resource.md"};return I(N),(o,t)=>{const r=Ee,l=Re;return C(),P(ee,X(Q(n)),{default:b(()=>[I0,R(l,null,{default:b(()=>[T0,R(r,_e({},{ranges:["all","10","10,7"]}),{default:b(()=>[M0]),_:1},16),P0,O0]),_:1})]),_:1},16)}}},N0=q(L0,[["__file","/@slidev/slides/5.md"]]),q0=e("h1",null,"Use the Resource attribute",-1),U0=e("p",null,[a("PHP attribute "),e("code",null,"#[Resource]"),a(" configures your entity as a Sylius resource.")],-1),H0=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#4D9375"}},"namespace"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"App"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#A1B567"}},"Entity"),e("span",{style:{color:"#858585"}},";")]),a(`
`),e("span",{class:"line"}),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#4D9375"}},"use"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"App"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#E0A569"}},"Repository"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#E0A569"}},"BookRepository"),e("span",{style:{color:"#858585"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#4D9375"}},"use"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"Doctrine"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#E0A569"}},"ORM"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#E0A569"}},"Mapping"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#4D9375"}},"as"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"ORM"),e("span",{style:{color:"#858585"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#4D9375"}},"use"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"Sylius"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#E0A569"}},"Component"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#E0A569"}},"Resource"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#E0A569"}},"Metadata"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#E0A569"}},"Resource"),e("span",{style:{color:"#858585"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#4D9375"}},"use"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"Sylius"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#E0A569"}},"Component"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#E0A569"}},"Resource"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#E0A569"}},"Model"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#E0A569"}},"ResourceInterface"),e("span",{style:{color:"#858585"}},";")]),a(`
`),e("span",{class:"line"}),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"#["),e("span",{style:{color:"#E0A569"}},"ORM"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#E0A569"}},"Entity"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#A1B567"}},"repositoryClass"),e("span",{style:{color:"#858585"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"BookRepository"),e("span",{style:{color:"#CB7676"}},"::"),e("span",{style:{color:"#4D9375"}},"class"),e("span",{style:{color:"#858585"}},")"),e("span",{style:{color:"#DBD7CA"}},"]")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"#["),e("span",{style:{color:"#E0A569"}},"Resource"),e("span",{style:{color:"#DBD7CA"}},"]")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#CB7676"}},"class"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"Book"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"implements"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"ResourceInterface")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"{")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"}")])])]),e("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#1C6B48"}},"namespace"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"App"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#6C7834"}},"Entity"),e("span",{style:{color:"#8E8F8B"}},";")]),a(`
`),e("span",{class:"line"}),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#1C6B48"}},"use"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B58451"}},"App"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#B58451"}},"Repository"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#B58451"}},"BookRepository"),e("span",{style:{color:"#8E8F8B"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#1C6B48"}},"use"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B58451"}},"Doctrine"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#B58451"}},"ORM"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#B58451"}},"Mapping"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#1C6B48"}},"as"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"ORM"),e("span",{style:{color:"#8E8F8B"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#1C6B48"}},"use"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B58451"}},"Sylius"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#B58451"}},"Component"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#B58451"}},"Resource"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#B58451"}},"Metadata"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#B58451"}},"Resource"),e("span",{style:{color:"#8E8F8B"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#1C6B48"}},"use"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B58451"}},"Sylius"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#B58451"}},"Component"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#B58451"}},"Resource"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#B58451"}},"Model"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#B58451"}},"ResourceInterface"),e("span",{style:{color:"#8E8F8B"}},";")]),a(`
`),e("span",{class:"line"}),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"#["),e("span",{style:{color:"#B58451"}},"ORM"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#B58451"}},"Entity"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#6C7834"}},"repositoryClass"),e("span",{style:{color:"#8E8F8B"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B58451"}},"BookRepository"),e("span",{style:{color:"#AB5959"}},"::"),e("span",{style:{color:"#1C6B48"}},"class"),e("span",{style:{color:"#8E8F8B"}},")"),e("span",{style:{color:"#393A34"}},"]")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"#["),e("span",{style:{color:"#B58451"}},"Resource"),e("span",{style:{color:"#393A34"}},"]")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#AB5959"}},"class"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"Book"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"implements"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"ResourceInterface")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"{")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"}")])])])],-1),V0={__name:"6",setup(s){const n={srcSequence:"./pages/02_configure_your_resource.md"};return I(N),(o,t)=>{const r=Ee;return C(),P(ee,X(Q(n)),{default:b(()=>[q0,U0,R(r,_e({},{ranges:["all","9","9,5"]}),{default:b(()=>[H0]),_:1},16)]),_:1},16)}}},j0=q(V0,[["__file","/@slidev/slides/6.md"]]),G0=e("h1",null,"Debug the resource",-1),W0=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#A1B567"}},"$"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},"bin/console"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},"sylius:debug:resource"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},"'App\\Entity\\book'")])])]),e("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#6C7834"}},"$"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},"bin/console"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},"sylius:debug:resource"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},"'App\\Entity\\book'")])])])],-1),z0=e("h1",null,null,-1),K0=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#dbd7ca"}},"+--------------------+------------------------------------------------------------+")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#dbd7ca"}},"| name               | book                                                       |")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#dbd7ca"}},"| application        | app                                                        |")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#dbd7ca"}},"| driver             | doctrine/orm                                               |")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#dbd7ca"}},"| classes.model      | App\\Entity\\Book                                            |")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#dbd7ca"}},"| classes.controller | Sylius\\Bundle\\ResourceBundle\\Controller\\ResourceController |")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#dbd7ca"}},"| classes.factory    | Sylius\\Component\\Resource\\Factory\\Factory                  |")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#dbd7ca"}},"| classes.form       | Sylius\\Bundle\\ResourceBundle\\Form\\Type\\DefaultResourceType |")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#dbd7ca"}},"+--------------------+------------------------------------------------------------+")])])]),e("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#393a34"}},"+--------------------+------------------------------------------------------------+")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393a34"}},"| name               | book                                                       |")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393a34"}},"| application        | app                                                        |")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393a34"}},"| driver             | doctrine/orm                                               |")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393a34"}},"| classes.model      | App\\Entity\\Book                                            |")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393a34"}},"| classes.controller | Sylius\\Bundle\\ResourceBundle\\Controller\\ResourceController |")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393a34"}},"| classes.factory    | Sylius\\Component\\Resource\\Factory\\Factory                  |")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393a34"}},"| classes.form       | Sylius\\Bundle\\ResourceBundle\\Form\\Type\\DefaultResourceType |")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393a34"}},"+--------------------+------------------------------------------------------------+")])])])],-1),Y0=e("p",null,[a("By default, it will have the "),e("code",null,"app.book"),a(" alias in Sylius resource which is a concatenation of the application name and the resource name "),e("code",null,"{application}.{name}"),a(".")],-1),Z0={__name:"7",setup(s){const n={srcSequence:"./pages/02_configure_your_resource.md"};return I(N),(o,t)=>{const r=Ee,l=Re;return C(),P(ee,X(Q(n)),{default:b(()=>[G0,R(l,null,{default:b(()=>[R(r,_e({},{ranges:[""]}),{default:b(()=>[W0]),_:1},16),z0,K0,Y0]),_:1})]),_:1},16)}}},Q0=q(Z0,[["__file","/@slidev/slides/7.md"]]),J0=e("h1",null,"Configure your operations",-1),X0=e("p",null,"Now, with your fresh new resource, you have to define the operations that you need to implement. There are some basic CRUD operations and more.",-1),eE={__name:"8",setup(s){const n={srcSequence:"./pages/03_configure_your_operations.md"};return I(N),(o,t)=>{const r=Re;return C(),P(ee,X(Q(n)),{default:b(()=>[J0,R(r,null,{default:b(()=>[X0]),_:1})]),_:1},16)}}},sE=q(eE,[["__file","/@slidev/slides/8.md"]]),nE=e("h1",null,"Index operation",-1),oE=e("p",null,[e("code",null,"Index"),a(" operation allows to browse all items of your resource.")],-1),tE=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#4D9375"}},"namespace"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"App"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#A1B567"}},"Entity"),e("span",{style:{color:"#858585"}},";")]),a(`
`),e("span",{class:"line"}),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#4D9375"}},"use"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"Sylius"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#E0A569"}},"Component"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#E0A569"}},"Resource"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#E0A569"}},"Metadata"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#E0A569"}},"Index"),e("span",{style:{color:"#858585"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#4D9375"}},"use"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"Sylius"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#E0A569"}},"Component"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#E0A569"}},"Resource"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#E0A569"}},"Metadata"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#E0A569"}},"Resource"),e("span",{style:{color:"#858585"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#4D9375"}},"use"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"Sylius"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#E0A569"}},"Component"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#E0A569"}},"Resource"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#E0A569"}},"Model"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#E0A569"}},"ResourceInterface"),e("span",{style:{color:"#858585"}},";")]),a(`
`),e("span",{class:"line"}),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"#["),e("span",{style:{color:"#E0A569"}},"Resource"),e("span",{style:{color:"#DBD7CA"}},"]")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"#["),e("span",{style:{color:"#E0A569"}},"Index"),e("span",{style:{color:"#DBD7CA"}},"]")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#CB7676"}},"class"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"Book"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"implements"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"ResourceInterface")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"{")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"}")])])]),e("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#1C6B48"}},"namespace"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"App"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#6C7834"}},"Entity"),e("span",{style:{color:"#8E8F8B"}},";")]),a(`
`),e("span",{class:"line"}),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#1C6B48"}},"use"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B58451"}},"Sylius"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#B58451"}},"Component"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#B58451"}},"Resource"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#B58451"}},"Metadata"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#B58451"}},"Index"),e("span",{style:{color:"#8E8F8B"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#1C6B48"}},"use"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B58451"}},"Sylius"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#B58451"}},"Component"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#B58451"}},"Resource"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#B58451"}},"Metadata"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#B58451"}},"Resource"),e("span",{style:{color:"#8E8F8B"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#1C6B48"}},"use"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B58451"}},"Sylius"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#B58451"}},"Component"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#B58451"}},"Resource"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#B58451"}},"Model"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#B58451"}},"ResourceInterface"),e("span",{style:{color:"#8E8F8B"}},";")]),a(`
`),e("span",{class:"line"}),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"#["),e("span",{style:{color:"#B58451"}},"Resource"),e("span",{style:{color:"#393A34"}},"]")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"#["),e("span",{style:{color:"#B58451"}},"Index"),e("span",{style:{color:"#393A34"}},"]")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#AB5959"}},"class"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"Book"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"implements"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"ResourceInterface")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"{")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"}")])])])],-1),rE={__name:"9",setup(s){const n={srcSequence:"./pages/03_configure_your_operations.md"};return I(N),(o,t)=>{const r=Ee,l=Re;return C(),P(ee,X(Q(n)),{default:b(()=>[nE,R(l,null,{default:b(()=>[oE,R(r,_e({},{ranges:["all","8","8,3"]}),{default:b(()=>[tE]),_:1},16)]),_:1})]),_:1},16)}}},lE=q(rE,[["__file","/@slidev/slides/9.md"]]),aE=e("h1",null,"Index operation",-1),cE=e("p",null,[a("It will configure this route for your "),e("code",null,"index"),a(" operation.")],-1),iE=e("table",null,[e("thead",null,[e("tr",null,[e("th",null,"Name"),e("th",null,"Method"),e("th",null,"Path")])]),e("tbody",null,[e("tr",null,[e("td",null,"app_book_index"),e("td",null,"GET"),e("td",null,"/books")])])],-1),pE={__name:"10",setup(s){const n={srcSequence:"./pages/03_configure_your_operations.md"};return I(N),(o,t)=>{const r=Re;return C(),P(ee,X(Q(n)),{default:b(()=>[aE,R(r,null,{default:b(()=>[cE,iE]),_:1})]),_:1},16)}}},uE=q(pE,[["__file","/@slidev/slides/10.md"]]),yE=e("h1",null,"Index operation",-1),dE=e("p",null,"On your Twig template, these variables are available",-1),fE=e("table",null,[e("thead",null,[e("tr",null,[e("th",null,"Name"),e("th",null,"Type")])]),e("tbody",null,[e("tr",null,[e("td",null,"resources"),e("td",null,"Pagerfanta\\Pagerfanta")]),e("tr",null,[e("td",null,"books"),e("td",null,"Pagerfanta\\Pagerfanta")]),e("tr",null,[e("td",null,"operation"),e("td",null,"Sylius\\Component\\Resource\\Metadata\\Index")]),e("tr",null,[e("td",null,"app"),e("td",null,"Symfony\\Bridge\\Twig\\AppVariable")])])],-1),mE={__name:"11",setup(s){const n={srcSequence:"./pages/03_configure_your_operations.md"};return I(N),(o,t)=>{const r=Re;return C(),P(ee,X(Q(n)),{default:b(()=>[yE,R(r,null,{default:b(()=>[dE,fE]),_:1})]),_:1},16)}}},hE=q(mE,[["__file","/@slidev/slides/11.md"]]),_E=e("h1",null,"Use a grid for your index operation",-1),gE=e("p",null,[a("To use a grid for you operation, you need to install the "),e("a",{href:"https://github.com/Sylius/SyliusGridBundle/",target:"_blank",rel:"noopener"},"Sylius grid package")],-1),BE=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#4D9375"}},"namespace"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"App"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#A1B567"}},"Entity"),e("span",{style:{color:"#858585"}},";")]),a(`
`),e("span",{class:"line"}),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#4D9375"}},"use"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"App"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#E0A569"}},"Grid"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#E0A569"}},"BookGrid"),e("span",{style:{color:"#858585"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#4D9375"}},"use"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"Sylius"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#E0A569"}},"Component"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#E0A569"}},"Resource"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#E0A569"}},"Metadata"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#E0A569"}},"Index"),e("span",{style:{color:"#858585"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#4D9375"}},"use"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"Sylius"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#E0A569"}},"Component"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#E0A569"}},"Resource"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#E0A569"}},"Metadata"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#E0A569"}},"Resource"),e("span",{style:{color:"#858585"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#4D9375"}},"use"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"Sylius"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#E0A569"}},"Component"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#E0A569"}},"Resource"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#E0A569"}},"Model"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#E0A569"}},"ResourceInterface"),e("span",{style:{color:"#858585"}},";")]),a(`
`),e("span",{class:"line"}),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"#["),e("span",{style:{color:"#E0A569"}},"Resource"),e("span",{style:{color:"#DBD7CA"}},"]")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#758575"}},"// You can use either the FQCN of your grid")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"#["),e("span",{style:{color:"#E0A569"}},"Index"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#A1B567"}},"grid"),e("span",{style:{color:"#858585"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"BookGrid"),e("span",{style:{color:"#CB7676"}},"::"),e("span",{style:{color:"#4D9375"}},"class"),e("span",{style:{color:"#858585"}},")"),e("span",{style:{color:"#DBD7CA"}},"]")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#758575"}},"// Or you can use the grid name")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"#["),e("span",{style:{color:"#E0A569"}},"Index"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#A1B567"}},"grid"),e("span",{style:{color:"#858585"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},"'app_book'"),e("span",{style:{color:"#858585"}},")"),e("span",{style:{color:"#DBD7CA"}},"]")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#CB7676"}},"class"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"Book"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"implements"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"ResourceInterface")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"{")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"}")])])]),e("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#1C6B48"}},"namespace"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"App"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#6C7834"}},"Entity"),e("span",{style:{color:"#8E8F8B"}},";")]),a(`
`),e("span",{class:"line"}),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#1C6B48"}},"use"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B58451"}},"App"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#B58451"}},"Grid"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#B58451"}},"BookGrid"),e("span",{style:{color:"#8E8F8B"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#1C6B48"}},"use"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B58451"}},"Sylius"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#B58451"}},"Component"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#B58451"}},"Resource"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#B58451"}},"Metadata"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#B58451"}},"Index"),e("span",{style:{color:"#8E8F8B"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#1C6B48"}},"use"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B58451"}},"Sylius"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#B58451"}},"Component"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#B58451"}},"Resource"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#B58451"}},"Metadata"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#B58451"}},"Resource"),e("span",{style:{color:"#8E8F8B"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#1C6B48"}},"use"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B58451"}},"Sylius"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#B58451"}},"Component"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#B58451"}},"Resource"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#B58451"}},"Model"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#B58451"}},"ResourceInterface"),e("span",{style:{color:"#8E8F8B"}},";")]),a(`
`),e("span",{class:"line"}),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"#["),e("span",{style:{color:"#B58451"}},"Resource"),e("span",{style:{color:"#393A34"}},"]")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#A0ADA0"}},"// You can use either the FQCN of your grid")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"#["),e("span",{style:{color:"#B58451"}},"Index"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#6C7834"}},"grid"),e("span",{style:{color:"#8E8F8B"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B58451"}},"BookGrid"),e("span",{style:{color:"#AB5959"}},"::"),e("span",{style:{color:"#1C6B48"}},"class"),e("span",{style:{color:"#8E8F8B"}},")"),e("span",{style:{color:"#393A34"}},"]")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#A0ADA0"}},"// Or you can use the grid name")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"#["),e("span",{style:{color:"#B58451"}},"Index"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#6C7834"}},"grid"),e("span",{style:{color:"#8E8F8B"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},"'app_book'"),e("span",{style:{color:"#8E8F8B"}},")"),e("span",{style:{color:"#393A34"}},"]")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#AB5959"}},"class"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"Book"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"implements"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"ResourceInterface")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"{")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"}")])])])],-1),AE={__name:"12",setup(s){const n={srcSequence:"./pages/03_configure_your_operations.md"};return I(N),(o,t)=>{const r=Ee,l=Re;return C(),P(ee,X(Q(n)),{default:b(()=>[_E,R(l,null,{default:b(()=>[gE,R(r,_e({},{ranges:["all","9-10","9-10,3","11-12","11-12"]}),{default:b(()=>[BE]),_:1},16)]),_:1})]),_:1},16)}}},vE=q(AE,[["__file","/@slidev/slides/12.md"]]),CE=e("h1",null,"Use a grid for your index operation",-1),EE=e("p",null,"On your Twig template, these variables are available",-1),bE=e("table",null,[e("thead",null,[e("tr",null,[e("th",null,"Name"),e("th",null,"Type")])]),e("tbody",null,[e("tr",null,[e("td",null,"resources"),e("td",null,"Sylius\\Bundle\\ResourceBundle\\Grid\\View\\ResourceGridView")]),e("tr",null,[e("td",null,"books"),e("td",null,"Sylius\\Bundle\\ResourceBundle\\Grid\\View\\ResourceGridView")]),e("tr",null,[e("td",null,"operation"),e("td",null,"Sylius\\Component\\Resource\\Metadata\\Index")]),e("tr",null,[e("td",null,"app"),e("td",null,"Symfony\\Bridge\\Twig\\AppVariable")])])],-1),kE=e("p",null,[a("The iterator for your books will be available as "),e("code",null,"books.data"),a(" or "),e("code",null,"resources.data"),a(".")],-1),DE={__name:"13",setup(s){const n={srcSequence:"./pages/03_configure_your_operations.md"};return I(N),(o,t)=>{const r=Re;return C(),P(ee,X(Q(n)),{default:b(()=>[CE,R(r,null,{default:b(()=>[EE,bE,kE]),_:1})]),_:1},16)}}},wE=q(DE,[["__file","/@slidev/slides/13.md"]]),SE=e("h1",null,"Create operation",-1),RE=e("p",null,[e("code",null,"Create"),a(" operation allows to add a new item of your resource.")],-1),xE=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#4D9375"}},"namespace"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"App"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#A1B567"}},"Entity"),e("span",{style:{color:"#858585"}},";")]),a(`
`),e("span",{class:"line"}),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#4D9375"}},"use"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"Sylius"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#E0A569"}},"Component"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#E0A569"}},"Resource"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#E0A569"}},"Metadata"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#E0A569"}},"Create"),e("span",{style:{color:"#858585"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#4D9375"}},"use"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"Sylius"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#E0A569"}},"Component"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#E0A569"}},"Resource"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#E0A569"}},"Metadata"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#E0A569"}},"Resource"),e("span",{style:{color:"#858585"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#4D9375"}},"use"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"Sylius"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#E0A569"}},"Component"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#E0A569"}},"Resource"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#E0A569"}},"Model"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#E0A569"}},"ResourceInterface"),e("span",{style:{color:"#858585"}},";")]),a(`
`),e("span",{class:"line"}),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"#["),e("span",{style:{color:"#E0A569"}},"Resource"),e("span",{style:{color:"#DBD7CA"}},"]")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"#["),e("span",{style:{color:"#E0A569"}},"Create"),e("span",{style:{color:"#DBD7CA"}},"]")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#CB7676"}},"class"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"Book"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"implements"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"ResourceInterface")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"{")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"}")])])]),e("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#1C6B48"}},"namespace"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"App"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#6C7834"}},"Entity"),e("span",{style:{color:"#8E8F8B"}},";")]),a(`
`),e("span",{class:"line"}),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#1C6B48"}},"use"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B58451"}},"Sylius"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#B58451"}},"Component"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#B58451"}},"Resource"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#B58451"}},"Metadata"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#B58451"}},"Create"),e("span",{style:{color:"#8E8F8B"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#1C6B48"}},"use"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B58451"}},"Sylius"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#B58451"}},"Component"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#B58451"}},"Resource"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#B58451"}},"Metadata"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#B58451"}},"Resource"),e("span",{style:{color:"#8E8F8B"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#1C6B48"}},"use"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B58451"}},"Sylius"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#B58451"}},"Component"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#B58451"}},"Resource"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#B58451"}},"Model"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#B58451"}},"ResourceInterface"),e("span",{style:{color:"#8E8F8B"}},";")]),a(`
`),e("span",{class:"line"}),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"#["),e("span",{style:{color:"#B58451"}},"Resource"),e("span",{style:{color:"#393A34"}},"]")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"#["),e("span",{style:{color:"#B58451"}},"Create"),e("span",{style:{color:"#393A34"}},"]")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#AB5959"}},"class"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"Book"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"implements"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"ResourceInterface")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"{")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"}")])])])],-1),FE={__name:"14",setup(s){const n={srcSequence:"./pages/03_configure_your_operations.md"};return I(N),(o,t)=>{const r=Ee,l=Re;return C(),P(ee,X(Q(n)),{default:b(()=>[SE,R(l,null,{default:b(()=>[RE,R(r,_e({},{ranges:["all","8","8,3"]}),{default:b(()=>[xE]),_:1},16)]),_:1})]),_:1},16)}}},$E=q(FE,[["__file","/@slidev/slides/14.md"]]),IE=e("h1",null,"Create operation",-1),TE=e("p",null,[a("It will configure this route for your "),e("code",null,"create"),a(" operation.")],-1),ME=e("table",null,[e("thead",null,[e("tr",null,[e("th",null,"Name"),e("th",null,"Method"),e("th",null,"Path")])]),e("tbody",null,[e("tr",null,[e("td",null,"app_book_create"),e("td",null,"GET, POST"),e("td",null,"/books/new")])])],-1),PE={__name:"15",setup(s){const n={srcSequence:"./pages/03_configure_your_operations.md"};return I(N),(o,t)=>(C(),P(ee,X(Q(n)),{default:b(()=>[IE,TE,ME]),_:1},16))}},OE=q(PE,[["__file","/@slidev/slides/15.md"]]),LE=e("h1",null,"Create operation",-1),NE=e("p",null,"On your Twig template, these variables are available",-1),qE=e("table",null,[e("thead",null,[e("tr",null,[e("th",null,"Name"),e("th",null,"Type")])]),e("tbody",null,[e("tr",null,[e("td",null,"form"),e("td",null,"App\\Form\\BookType")]),e("tr",null,[e("td",null,"resource"),e("td",null,"App\\Entity\\Book")]),e("tr",null,[e("td",null,"book"),e("td",null,"App\\Entity\\Book")]),e("tr",null,[e("td",null,"operation"),e("td",null,"Sylius\\Component\\Resource\\Metadata\\Create")]),e("tr",null,[e("td",null,"app"),e("td",null,"Symfony\\Bridge\\Twig\\AppVariable")])])],-1),UE={__name:"16",setup(s){const n={srcSequence:"./pages/03_configure_your_operations.md"};return I(N),(o,t)=>(C(),P(ee,X(Q(n)),{default:b(()=>[LE,NE,qE]),_:1},16))}},HE=q(UE,[["__file","/@slidev/slides/16.md"]]),VE=e("h1",null,"Update operation",-1),jE=e("p",null,[e("code",null,"Update"),a(" operation allows to edit an existing item of your resource.")],-1),GE=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#4D9375"}},"namespace"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"App"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#A1B567"}},"Entity"),e("span",{style:{color:"#858585"}},";")]),a(`
`),e("span",{class:"line"}),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#4D9375"}},"use"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"Sylius"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#E0A569"}},"Component"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#E0A569"}},"Resource"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#E0A569"}},"Metadata"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#E0A569"}},"Update"),e("span",{style:{color:"#858585"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#4D9375"}},"use"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"Sylius"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#E0A569"}},"Component"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#E0A569"}},"Resource"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#E0A569"}},"Metadata"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#E0A569"}},"Resource"),e("span",{style:{color:"#858585"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#4D9375"}},"use"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"Sylius"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#E0A569"}},"Component"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#E0A569"}},"Resource"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#E0A569"}},"Model"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#E0A569"}},"ResourceInterface"),e("span",{style:{color:"#858585"}},";")]),a(`
`),e("span",{class:"line"}),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"#["),e("span",{style:{color:"#E0A569"}},"Resource"),e("span",{style:{color:"#DBD7CA"}},"]")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"#["),e("span",{style:{color:"#E0A569"}},"Update"),e("span",{style:{color:"#DBD7CA"}},"]")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#CB7676"}},"class"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"Book"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"implements"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"ResourceInterface")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"{")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"}")])])]),e("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#1C6B48"}},"namespace"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"App"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#6C7834"}},"Entity"),e("span",{style:{color:"#8E8F8B"}},";")]),a(`
`),e("span",{class:"line"}),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#1C6B48"}},"use"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B58451"}},"Sylius"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#B58451"}},"Component"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#B58451"}},"Resource"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#B58451"}},"Metadata"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#B58451"}},"Update"),e("span",{style:{color:"#8E8F8B"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#1C6B48"}},"use"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B58451"}},"Sylius"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#B58451"}},"Component"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#B58451"}},"Resource"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#B58451"}},"Metadata"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#B58451"}},"Resource"),e("span",{style:{color:"#8E8F8B"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#1C6B48"}},"use"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B58451"}},"Sylius"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#B58451"}},"Component"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#B58451"}},"Resource"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#B58451"}},"Model"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#B58451"}},"ResourceInterface"),e("span",{style:{color:"#8E8F8B"}},";")]),a(`
`),e("span",{class:"line"}),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"#["),e("span",{style:{color:"#B58451"}},"Resource"),e("span",{style:{color:"#393A34"}},"]")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"#["),e("span",{style:{color:"#B58451"}},"Update"),e("span",{style:{color:"#393A34"}},"]")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#AB5959"}},"class"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"Book"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"implements"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"ResourceInterface")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"{")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"}")])])])],-1),WE={__name:"17",setup(s){const n={srcSequence:"./pages/03_configure_your_operations.md"};return I(N),(o,t)=>{const r=Ee;return C(),P(ee,X(Q(n)),{default:b(()=>[VE,jE,R(r,_e({},{ranges:["all","8","8,3"]}),{default:b(()=>[GE]),_:1},16)]),_:1},16)}}},zE=q(WE,[["__file","/@slidev/slides/17.md"]]),KE=e("h1",null,"Update operation",-1),YE=e("p",null,[a("It will configure this route for your "),e("code",null,"update"),a(" operation.")],-1),ZE=e("table",null,[e("thead",null,[e("tr",null,[e("th",null,"Name"),e("th",null,"Method"),e("th",null,"Path")])]),e("tbody",null,[e("tr",null,[e("td",null,"app_book_update"),e("td",null,"GET, PUT, PATCH"),e("td",null,"/books/{id}/edit")])])],-1),QE={__name:"18",setup(s){const n={srcSequence:"./pages/03_configure_your_operations.md"};return I(N),(o,t)=>(C(),P(ee,X(Q(n)),{default:b(()=>[KE,YE,ZE]),_:1},16))}},JE=q(QE,[["__file","/@slidev/slides/18.md"]]),XE=e("h1",null,"Update operation",-1),eb=e("p",null,"On your Twig template, these variables are available",-1),sb=e("table",null,[e("thead",null,[e("tr",null,[e("th",null,"Name"),e("th",null,"Type")])]),e("tbody",null,[e("tr",null,[e("td",null,"form"),e("td",null,"App\\Form\\BookType")]),e("tr",null,[e("td",null,"resource"),e("td",null,"App\\Entity\\Book")]),e("tr",null,[e("td",null,"book"),e("td",null,"App\\Entity\\Book")]),e("tr",null,[e("td",null,"operation"),e("td",null,"Sylius\\Component\\Resource\\Metadata\\Update")]),e("tr",null,[e("td",null,"app"),e("td",null,"Symfony\\Bridge\\Twig\\AppVariable")])])],-1),nb={__name:"19",setup(s){const n={srcSequence:"./pages/03_configure_your_operations.md"};return I(N),(o,t)=>(C(),P(ee,X(Q(n)),{default:b(()=>[XE,eb,sb]),_:1},16))}},ob=q(nb,[["__file","/@slidev/slides/19.md"]]),tb=e("h1",null,"Delete operation",-1),rb=e("p",null,[e("code",null,"Delete"),a(" operation allows to remove an existing item of your resource.")],-1),lb=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#4D9375"}},"namespace"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"App"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#A1B567"}},"Entity"),e("span",{style:{color:"#858585"}},";")]),a(`
`),e("span",{class:"line"}),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#4D9375"}},"use"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"Sylius"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#E0A569"}},"Component"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#E0A569"}},"Resource"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#E0A569"}},"Metadata"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#E0A569"}},"Delete"),e("span",{style:{color:"#858585"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#4D9375"}},"use"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"Sylius"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#E0A569"}},"Component"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#E0A569"}},"Resource"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#E0A569"}},"Metadata"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#E0A569"}},"Resource"),e("span",{style:{color:"#858585"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#4D9375"}},"use"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"Sylius"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#E0A569"}},"Component"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#E0A569"}},"Resource"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#E0A569"}},"Model"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#E0A569"}},"ResourceInterface"),e("span",{style:{color:"#858585"}},";")]),a(`
`),e("span",{class:"line"}),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"#["),e("span",{style:{color:"#E0A569"}},"Resource"),e("span",{style:{color:"#DBD7CA"}},"]")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"#["),e("span",{style:{color:"#E0A569"}},"Delete"),e("span",{style:{color:"#DBD7CA"}},"]")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#CB7676"}},"class"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"Book"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"implements"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"ResourceInterface")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"{")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"}")])])]),e("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#1C6B48"}},"namespace"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"App"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#6C7834"}},"Entity"),e("span",{style:{color:"#8E8F8B"}},";")]),a(`
`),e("span",{class:"line"}),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#1C6B48"}},"use"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B58451"}},"Sylius"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#B58451"}},"Component"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#B58451"}},"Resource"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#B58451"}},"Metadata"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#B58451"}},"Delete"),e("span",{style:{color:"#8E8F8B"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#1C6B48"}},"use"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B58451"}},"Sylius"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#B58451"}},"Component"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#B58451"}},"Resource"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#B58451"}},"Metadata"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#B58451"}},"Resource"),e("span",{style:{color:"#8E8F8B"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#1C6B48"}},"use"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B58451"}},"Sylius"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#B58451"}},"Component"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#B58451"}},"Resource"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#B58451"}},"Model"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#B58451"}},"ResourceInterface"),e("span",{style:{color:"#8E8F8B"}},";")]),a(`
`),e("span",{class:"line"}),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"#["),e("span",{style:{color:"#B58451"}},"Resource"),e("span",{style:{color:"#393A34"}},"]")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"#["),e("span",{style:{color:"#B58451"}},"Delete"),e("span",{style:{color:"#393A34"}},"]")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#AB5959"}},"class"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"Book"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"implements"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"ResourceInterface")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"{")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"}")])])])],-1),ab={__name:"20",setup(s){const n={srcSequence:"./pages/03_configure_your_operations.md"};return I(N),(o,t)=>{const r=Ee;return C(),P(ee,X(Q(n)),{default:b(()=>[tb,rb,R(r,_e({},{ranges:["all","8","8,3"]}),{default:b(()=>[lb]),_:1},16)]),_:1},16)}}},cb=q(ab,[["__file","/@slidev/slides/20.md"]]),ib=e("h1",null,"Delete operation",-1),pb=e("p",null,[a("It will configure this route for your "),e("code",null,"delete"),a(" operation.")],-1),ub=e("table",null,[e("thead",null,[e("tr",null,[e("th",null,"Name"),e("th",null,"Method"),e("th",null,"Path")])]),e("tbody",null,[e("tr",null,[e("td",null,"app_book_delete"),e("td",null,"DELETE"),e("td",null,"/books/{id}")])])],-1),yb={__name:"21",setup(s){const n={srcSequence:"./pages/03_configure_your_operations.md"};return I(N),(o,t)=>(C(),P(ee,X(Q(n)),{default:b(()=>[ib,pb,ub]),_:1},16))}},db=q(yb,[["__file","/@slidev/slides/21.md"]]),fb=e("h1",null,"Bulk delete operation",-1),mb=e("p",null,[e("code",null,"Bulk delete"),a(" operation allows to remove several items of your resource at the same time.")],-1),hb=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#4D9375"}},"namespace"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"App"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#A1B567"}},"Entity"),e("span",{style:{color:"#858585"}},";")]),a(`
`),e("span",{class:"line"}),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#4D9375"}},"use"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"Sylius"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#E0A569"}},"Component"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#E0A569"}},"Resource"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#E0A569"}},"Metadata"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#E0A569"}},"BulkDelete"),e("span",{style:{color:"#858585"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#4D9375"}},"use"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"Sylius"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#E0A569"}},"Component"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#E0A569"}},"Resource"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#E0A569"}},"Metadata"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#E0A569"}},"Resource"),e("span",{style:{color:"#858585"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#4D9375"}},"use"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"Sylius"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#E0A569"}},"Component"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#E0A569"}},"Resource"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#E0A569"}},"Model"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#E0A569"}},"ResourceInterface"),e("span",{style:{color:"#858585"}},";")]),a(`
`),e("span",{class:"line"}),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"#["),e("span",{style:{color:"#E0A569"}},"Resource"),e("span",{style:{color:"#DBD7CA"}},"]")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"#["),e("span",{style:{color:"#E0A569"}},"BulkDelete"),e("span",{style:{color:"#DBD7CA"}},"]")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#CB7676"}},"class"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"Book"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"implements"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"ResourceInterface")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"{")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"}")])])]),e("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#1C6B48"}},"namespace"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"App"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#6C7834"}},"Entity"),e("span",{style:{color:"#8E8F8B"}},";")]),a(`
`),e("span",{class:"line"}),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#1C6B48"}},"use"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B58451"}},"Sylius"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#B58451"}},"Component"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#B58451"}},"Resource"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#B58451"}},"Metadata"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#B58451"}},"BulkDelete"),e("span",{style:{color:"#8E8F8B"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#1C6B48"}},"use"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B58451"}},"Sylius"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#B58451"}},"Component"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#B58451"}},"Resource"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#B58451"}},"Metadata"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#B58451"}},"Resource"),e("span",{style:{color:"#8E8F8B"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#1C6B48"}},"use"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B58451"}},"Sylius"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#B58451"}},"Component"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#B58451"}},"Resource"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#B58451"}},"Model"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#B58451"}},"ResourceInterface"),e("span",{style:{color:"#8E8F8B"}},";")]),a(`
`),e("span",{class:"line"}),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"#["),e("span",{style:{color:"#B58451"}},"Resource"),e("span",{style:{color:"#393A34"}},"]")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"#["),e("span",{style:{color:"#B58451"}},"BulkDelete"),e("span",{style:{color:"#393A34"}},"]")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#AB5959"}},"class"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"Book"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"implements"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"ResourceInterface")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"{")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"}")])])])],-1),_b={__name:"22",setup(s){const n={srcSequence:"./pages/03_configure_your_operations.md"};return I(N),(o,t)=>{const r=Ee;return C(),P(ee,X(Q(n)),{default:b(()=>[fb,mb,R(r,_e({},{ranges:["all","8","8,3"]}),{default:b(()=>[hb]),_:1},16)]),_:1},16)}}},gb=q(_b,[["__file","/@slidev/slides/22.md"]]),Bb=e("h1",null,"Bulk delete operation",-1),Ab=e("p",null,[a("It will configure this route for your "),e("code",null,"bulk_delete"),a(" operation.")],-1),vb=e("table",null,[e("thead",null,[e("tr",null,[e("th",null,"Name"),e("th",null,"Method"),e("th",null,"Path")])]),e("tbody",null,[e("tr",null,[e("td",null,"app_book_bulk_delete"),e("td",null,"DELETE"),e("td",null,"/books/bulk_delete")])])],-1),Cb={__name:"23",setup(s){const n={srcSequence:"./pages/03_configure_your_operations.md"};return I(N),(o,t)=>(C(),P(ee,X(Q(n)),{default:b(()=>[Bb,Ab,vb]),_:1},16))}},Eb=q(Cb,[["__file","/@slidev/slides/23.md"]]),bb=e("h1",null,"Show operation",-1),kb=e("p",null,[e("code",null,"Show"),a(" operation allows to view details of an item.")],-1),Db=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#4D9375"}},"namespace"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"App"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#A1B567"}},"Entity"),e("span",{style:{color:"#858585"}},";")]),a(`
`),e("span",{class:"line"}),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#4D9375"}},"use"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"Sylius"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#E0A569"}},"Component"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#E0A569"}},"Resource"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#E0A569"}},"Metadata"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#E0A569"}},"Resource"),e("span",{style:{color:"#858585"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#4D9375"}},"use"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"Sylius"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#E0A569"}},"Component"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#E0A569"}},"Resource"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#E0A569"}},"Metadata"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#E0A569"}},"Show"),e("span",{style:{color:"#858585"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#4D9375"}},"use"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"Sylius"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#E0A569"}},"Component"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#E0A569"}},"Resource"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#E0A569"}},"Model"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#E0A569"}},"ResourceInterface"),e("span",{style:{color:"#858585"}},";")]),a(`
`),e("span",{class:"line"}),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"#["),e("span",{style:{color:"#E0A569"}},"Resource"),e("span",{style:{color:"#DBD7CA"}},"]")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"#["),e("span",{style:{color:"#E0A569"}},"Show"),e("span",{style:{color:"#DBD7CA"}},"]")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#CB7676"}},"class"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"Book"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"implements"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"ResourceInterface")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"{")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"}")])])]),e("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#1C6B48"}},"namespace"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"App"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#6C7834"}},"Entity"),e("span",{style:{color:"#8E8F8B"}},";")]),a(`
`),e("span",{class:"line"}),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#1C6B48"}},"use"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B58451"}},"Sylius"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#B58451"}},"Component"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#B58451"}},"Resource"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#B58451"}},"Metadata"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#B58451"}},"Resource"),e("span",{style:{color:"#8E8F8B"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#1C6B48"}},"use"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B58451"}},"Sylius"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#B58451"}},"Component"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#B58451"}},"Resource"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#B58451"}},"Metadata"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#B58451"}},"Show"),e("span",{style:{color:"#8E8F8B"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#1C6B48"}},"use"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B58451"}},"Sylius"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#B58451"}},"Component"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#B58451"}},"Resource"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#B58451"}},"Model"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#B58451"}},"ResourceInterface"),e("span",{style:{color:"#8E8F8B"}},";")]),a(`
`),e("span",{class:"line"}),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"#["),e("span",{style:{color:"#B58451"}},"Resource"),e("span",{style:{color:"#393A34"}},"]")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"#["),e("span",{style:{color:"#B58451"}},"Show"),e("span",{style:{color:"#393A34"}},"]")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#AB5959"}},"class"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"Book"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"implements"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"ResourceInterface")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"{")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"}")])])])],-1),wb={__name:"24",setup(s){const n={srcSequence:"./pages/03_configure_your_operations.md"};return I(N),(o,t)=>{const r=Ee;return C(),P(ee,X(Q(n)),{default:b(()=>[bb,kb,R(r,_e({},{ranges:["all","8","8,3"]}),{default:b(()=>[Db]),_:1},16)]),_:1},16)}}},Sb=q(wb,[["__file","/@slidev/slides/24.md"]]),Rb=e("h1",null,"Show operation",-1),xb=e("p",null,[a("It will configure this route for your "),e("code",null,"show"),a(" operation.")],-1),Fb=e("table",null,[e("thead",null,[e("tr",null,[e("th",null,"Name"),e("th",null,"Method"),e("th",null,"Path")])]),e("tbody",null,[e("tr",null,[e("td",null,"app_book_show"),e("td",null,"GET"),e("td",null,"/books/{id}")])])],-1),$b={__name:"25",setup(s){const n={srcSequence:"./pages/03_configure_your_operations.md"};return I(N),(o,t)=>(C(),P(ee,X(Q(n)),{default:b(()=>[Rb,xb,Fb]),_:1},16))}},Ib=q($b,[["__file","/@slidev/slides/25.md"]]),Tb=e("h1",null,"Show operation",-1),Mb=e("p",null,"On your Twig template, these variables are available",-1),Pb=e("table",null,[e("thead",null,[e("tr",null,[e("th",null,"Name"),e("th",null,"Type")])]),e("tbody",null,[e("tr",null,[e("td",null,"resource"),e("td",null,"App\\Entity\\Book")]),e("tr",null,[e("td",null,"book"),e("td",null,"App\\Entity\\Book")]),e("tr",null,[e("td",null,"operation"),e("td",null,"Sylius\\Component\\Resource\\Metadata\\Show")]),e("tr",null,[e("td",null,"app"),e("td",null,"Symfony\\Bridge\\Twig\\AppVariable")])])],-1),Ob={__name:"26",setup(s){const n={srcSequence:"./pages/03_configure_your_operations.md"};return I(N),(o,t)=>(C(),P(ee,X(Q(n)),{default:b(()=>[Tb,Mb,Pb]),_:1},16))}},Lb=q(Ob,[["__file","/@slidev/slides/26.md"]]),Nb=e("h1",null,"State machine operation",-1),qb=e("p",null,[e("code",null,"State machine"),a(" operation allows to apply a transition to an item of your resource.")],-1),Ub=e("p",null,[a("As an example, we add a "),e("code",null,"publish"),a(" operation to our book resource.")],-1),Hb=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#4D9375"}},"namespace"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"App"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#A1B567"}},"Entity"),e("span",{style:{color:"#858585"}},";")]),a(`
`),e("span",{class:"line"}),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#4D9375"}},"use"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"Sylius"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#E0A569"}},"Component"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#E0A569"}},"Resource"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#E0A569"}},"Metadata"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#E0A569"}},"ApplyStateMachineTransition"),e("span",{style:{color:"#858585"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#4D9375"}},"use"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"Sylius"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#E0A569"}},"Component"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#E0A569"}},"Resource"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#E0A569"}},"Metadata"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#E0A569"}},"Resource"),e("span",{style:{color:"#858585"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#4D9375"}},"use"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"Sylius"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#E0A569"}},"Component"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#E0A569"}},"Resource"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#E0A569"}},"Metadata"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#E0A569"}},"Show"),e("span",{style:{color:"#858585"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#4D9375"}},"use"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"Sylius"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#E0A569"}},"Component"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#E0A569"}},"Resource"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#E0A569"}},"Model"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#E0A569"}},"ResourceInterface"),e("span",{style:{color:"#858585"}},";")]),a(`
`),e("span",{class:"line"}),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"#["),e("span",{style:{color:"#E0A569"}},"Resource"),e("span",{style:{color:"#DBD7CA"}},"]")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"#["),e("span",{style:{color:"#E0A569"}},"ApplyStateMachineTransition"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#A1B567"}},"stateMachineTransition"),e("span",{style:{color:"#858585"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},"'publish'"),e("span",{style:{color:"#858585"}},")"),e("span",{style:{color:"#DBD7CA"}},"]")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#CB7676"}},"class"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"Book"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"implements"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"ResourceInterface")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"{")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"}")])])]),e("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#1C6B48"}},"namespace"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"App"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#6C7834"}},"Entity"),e("span",{style:{color:"#8E8F8B"}},";")]),a(`
`),e("span",{class:"line"}),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#1C6B48"}},"use"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B58451"}},"Sylius"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#B58451"}},"Component"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#B58451"}},"Resource"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#B58451"}},"Metadata"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#B58451"}},"ApplyStateMachineTransition"),e("span",{style:{color:"#8E8F8B"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#1C6B48"}},"use"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B58451"}},"Sylius"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#B58451"}},"Component"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#B58451"}},"Resource"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#B58451"}},"Metadata"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#B58451"}},"Resource"),e("span",{style:{color:"#8E8F8B"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#1C6B48"}},"use"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B58451"}},"Sylius"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#B58451"}},"Component"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#B58451"}},"Resource"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#B58451"}},"Metadata"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#B58451"}},"Show"),e("span",{style:{color:"#8E8F8B"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#1C6B48"}},"use"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B58451"}},"Sylius"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#B58451"}},"Component"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#B58451"}},"Resource"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#B58451"}},"Model"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#B58451"}},"ResourceInterface"),e("span",{style:{color:"#8E8F8B"}},";")]),a(`
`),e("span",{class:"line"}),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"#["),e("span",{style:{color:"#B58451"}},"Resource"),e("span",{style:{color:"#393A34"}},"]")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"#["),e("span",{style:{color:"#B58451"}},"ApplyStateMachineTransition"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#6C7834"}},"stateMachineTransition"),e("span",{style:{color:"#8E8F8B"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},"'publish'"),e("span",{style:{color:"#8E8F8B"}},")"),e("span",{style:{color:"#393A34"}},"]")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#AB5959"}},"class"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"Book"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"implements"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"ResourceInterface")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"{")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"}")])])])],-1),Vb={__name:"27",setup(s){const n={srcSequence:"./pages/03_configure_your_operations.md"};return I(N),(o,t)=>{const r=Ee;return C(),P(ee,X(Q(n)),{default:b(()=>[Nb,qb,Ub,R(r,_e({},{ranges:["all","8","8,3"]}),{default:b(()=>[Hb]),_:1},16)]),_:1},16)}}},jb=q(Vb,[["__file","/@slidev/slides/27.md"]]),Gb=e("h1",null,"State machine operation",-1),Wb=e("p",null,[a("It will configure this route for your "),e("code",null,"apply_state_machine_transition"),a(" operation.")],-1),zb=e("table",null,[e("thead",null,[e("tr",null,[e("th",null,"Name"),e("th",null,"Method"),e("th",null,"Path")])]),e("tbody",null,[e("tr",null,[e("td",null,"app_book_publish"),e("td",null,"GET"),e("td",null,"/books/{id}/publish")])])],-1),Kb={__name:"28",setup(s){const n={srcSequence:"./pages/03_configure_your_operations.md"};return I(N),(o,t)=>(C(),P(ee,X(Q(n)),{default:b(()=>[Gb,Wb,zb]),_:1},16))}},Yb=q(Kb,[["__file","/@slidev/slides/28.md"]]),Zb=e("h1",null,"Configure the templates’ dir",-1),Qb=e("p",null,"It defines the templates directory for your operations.",-1),Jb=e("p",null,[a("As an example, we defines "),e("code",null,"index"),a(", "),e("code",null,"create"),a(", "),e("code",null,"update"),a(" and "),e("code",null,"show"),a(" operations to our book resource.")],-1),Xb=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#4D9375"}},"namespace"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"App"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#A1B567"}},"Entity"),e("span",{style:{color:"#858585"}},";")]),a(`
`),e("span",{class:"line"}),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#4D9375"}},"use"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"Sylius"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#E0A569"}},"Component"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#E0A569"}},"Resource"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#E0A569"}},"Metadata"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#E0A569"}},"Create"),e("span",{style:{color:"#858585"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#4D9375"}},"use"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"Sylius"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#E0A569"}},"Component"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#E0A569"}},"Resource"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#E0A569"}},"Metadata"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#E0A569"}},"Index"),e("span",{style:{color:"#858585"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#4D9375"}},"use"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"Sylius"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#E0A569"}},"Component"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#E0A569"}},"Resource"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#E0A569"}},"Metadata"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#E0A569"}},"Resource"),e("span",{style:{color:"#858585"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#4D9375"}},"use"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"Sylius"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#E0A569"}},"Component"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#E0A569"}},"Resource"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#E0A569"}},"Metadata"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#E0A569"}},"Show"),e("span",{style:{color:"#858585"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#4D9375"}},"use"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"Sylius"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#E0A569"}},"Component"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#E0A569"}},"Resource"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#E0A569"}},"Metadata"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#E0A569"}},"Update"),e("span",{style:{color:"#858585"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#4D9375"}},"use"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"Sylius"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#E0A569"}},"Component"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#E0A569"}},"Resource"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#E0A569"}},"Model"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#E0A569"}},"ResourceInterface"),e("span",{style:{color:"#858585"}},";")]),a(`
`),e("span",{class:"line"}),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"#["),e("span",{style:{color:"#E0A569"}},"Resource"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#A1B567"}},"templatesDir"),e("span",{style:{color:"#858585"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},"'book'"),e("span",{style:{color:"#858585"}},")"),e("span",{style:{color:"#DBD7CA"}},"]")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"#["),e("span",{style:{color:"#E0A569"}},"Index"),e("span",{style:{color:"#DBD7CA"}},"]")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"#["),e("span",{style:{color:"#E0A569"}},"Create"),e("span",{style:{color:"#DBD7CA"}},"]")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"#["),e("span",{style:{color:"#E0A569"}},"Update"),e("span",{style:{color:"#DBD7CA"}},"]")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"#["),e("span",{style:{color:"#E0A569"}},"Show"),e("span",{style:{color:"#DBD7CA"}},"]")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#CB7676"}},"class"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"Book"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"implements"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"ResourceInterface")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"{")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"}")])])]),e("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#1C6B48"}},"namespace"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"App"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#6C7834"}},"Entity"),e("span",{style:{color:"#8E8F8B"}},";")]),a(`
`),e("span",{class:"line"}),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#1C6B48"}},"use"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B58451"}},"Sylius"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#B58451"}},"Component"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#B58451"}},"Resource"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#B58451"}},"Metadata"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#B58451"}},"Create"),e("span",{style:{color:"#8E8F8B"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#1C6B48"}},"use"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B58451"}},"Sylius"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#B58451"}},"Component"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#B58451"}},"Resource"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#B58451"}},"Metadata"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#B58451"}},"Index"),e("span",{style:{color:"#8E8F8B"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#1C6B48"}},"use"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B58451"}},"Sylius"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#B58451"}},"Component"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#B58451"}},"Resource"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#B58451"}},"Metadata"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#B58451"}},"Resource"),e("span",{style:{color:"#8E8F8B"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#1C6B48"}},"use"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B58451"}},"Sylius"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#B58451"}},"Component"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#B58451"}},"Resource"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#B58451"}},"Metadata"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#B58451"}},"Show"),e("span",{style:{color:"#8E8F8B"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#1C6B48"}},"use"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B58451"}},"Sylius"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#B58451"}},"Component"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#B58451"}},"Resource"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#B58451"}},"Metadata"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#B58451"}},"Update"),e("span",{style:{color:"#8E8F8B"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#1C6B48"}},"use"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B58451"}},"Sylius"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#B58451"}},"Component"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#B58451"}},"Resource"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#B58451"}},"Model"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#B58451"}},"ResourceInterface"),e("span",{style:{color:"#8E8F8B"}},";")]),a(`
`),e("span",{class:"line"}),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"#["),e("span",{style:{color:"#B58451"}},"Resource"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#6C7834"}},"templatesDir"),e("span",{style:{color:"#8E8F8B"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},"'book'"),e("span",{style:{color:"#8E8F8B"}},")"),e("span",{style:{color:"#393A34"}},"]")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"#["),e("span",{style:{color:"#B58451"}},"Index"),e("span",{style:{color:"#393A34"}},"]")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"#["),e("span",{style:{color:"#B58451"}},"Create"),e("span",{style:{color:"#393A34"}},"]")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"#["),e("span",{style:{color:"#B58451"}},"Update"),e("span",{style:{color:"#393A34"}},"]")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"#["),e("span",{style:{color:"#B58451"}},"Show"),e("span",{style:{color:"#393A34"}},"]")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#AB5959"}},"class"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"Book"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"implements"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"ResourceInterface")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"{")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"}")])])])],-1),e6={__name:"29",setup(s){const n={srcSequence:"./pages/03_configure_your_operations.md"};return I(N),(o,t)=>{const r=Ee,l=Re;return C(),P(ee,X(Q(n)),{default:b(()=>[Zb,R(l,null,{default:b(()=>[Qb,Jb,R(r,_e({},{ranges:["all","10"]}),{default:b(()=>[Xb]),_:1},16)]),_:1})]),_:1},16)}}},s6=q(e6,[["__file","/@slidev/slides/29.md"]]),n6=e("h1",null,"Configure the templates’ dir",-1),o6=e("table",null,[e("thead",null,[e("tr",null,[e("th",null,"Operation"),e("th",null,"Template Path")])]),e("tbody",null,[e("tr",null,[e("td",null,"index"),e("td",null,"templates/books/index.html.twig")]),e("tr",null,[e("td",null,"create"),e("td",null,"templates/books/create.html.twig")]),e("tr",null,[e("td",null,"update"),e("td",null,"templates/books/update.html.twig")]),e("tr",null,[e("td",null,"show"),e("td",null,"templates/books/show.html.twig")])])],-1),t6={__name:"30",setup(s){const n={srcSequence:"./pages/03_configure_your_operations.md"};return I(N),(o,t)=>(C(),P(ee,X(Q(n)),{default:b(()=>[n6,o6]),_:1},16))}},r6=q(t6,[["__file","/@slidev/slides/30.md"]]),l6=e("h1",null,"Configure the routes’ prefix",-1),a6=e("p",null,"It adds a prefix to the path for each operation.",-1),c6=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#4D9375"}},"namespace"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"App"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#A1B567"}},"Entity"),e("span",{style:{color:"#858585"}},";")]),a(`
`),e("span",{class:"line"}),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#758575"}},"// [...]")]),a(`
`),e("span",{class:"line"}),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"#["),e("span",{style:{color:"#E0A569"}},"Resource"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#A1B567"}},"routePrefix"),e("span",{style:{color:"#858585"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},"'admin'"),e("span",{style:{color:"#858585"}},")"),e("span",{style:{color:"#DBD7CA"}},"]")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"#["),e("span",{style:{color:"#E0A569"}},"Index"),e("span",{style:{color:"#DBD7CA"}},"]")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"#["),e("span",{style:{color:"#E0A569"}},"Create"),e("span",{style:{color:"#DBD7CA"}},"]")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"#["),e("span",{style:{color:"#E0A569"}},"Update"),e("span",{style:{color:"#DBD7CA"}},"]")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"#["),e("span",{style:{color:"#E0A569"}},"Delete"),e("span",{style:{color:"#DBD7CA"}},"]")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"#["),e("span",{style:{color:"#E0A569"}},"BulkDelete"),e("span",{style:{color:"#DBD7CA"}},"]")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"#["),e("span",{style:{color:"#E0A569"}},"Show"),e("span",{style:{color:"#DBD7CA"}},"]")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#CB7676"}},"class"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"Book"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"implements"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"ResourceInterface")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"{")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"}")])])]),e("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#1C6B48"}},"namespace"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"App"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#6C7834"}},"Entity"),e("span",{style:{color:"#8E8F8B"}},";")]),a(`
`),e("span",{class:"line"}),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#A0ADA0"}},"// [...]")]),a(`
`),e("span",{class:"line"}),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"#["),e("span",{style:{color:"#B58451"}},"Resource"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#6C7834"}},"routePrefix"),e("span",{style:{color:"#8E8F8B"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},"'admin'"),e("span",{style:{color:"#8E8F8B"}},")"),e("span",{style:{color:"#393A34"}},"]")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"#["),e("span",{style:{color:"#B58451"}},"Index"),e("span",{style:{color:"#393A34"}},"]")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"#["),e("span",{style:{color:"#B58451"}},"Create"),e("span",{style:{color:"#393A34"}},"]")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"#["),e("span",{style:{color:"#B58451"}},"Update"),e("span",{style:{color:"#393A34"}},"]")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"#["),e("span",{style:{color:"#B58451"}},"Delete"),e("span",{style:{color:"#393A34"}},"]")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"#["),e("span",{style:{color:"#B58451"}},"BulkDelete"),e("span",{style:{color:"#393A34"}},"]")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"#["),e("span",{style:{color:"#B58451"}},"Show"),e("span",{style:{color:"#393A34"}},"]")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#AB5959"}},"class"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"Book"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"implements"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"ResourceInterface")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"{")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"}")])])])],-1),i6={__name:"31",setup(s){const n={srcSequence:"./pages/03_configure_your_operations.md"};return I(N),(o,t)=>{const r=Ee,l=Re;return C(),P(ee,X(Q(n)),{default:b(()=>[l6,R(l,null,{default:b(()=>[a6,R(r,_e({},{ranges:["all","5"]}),{default:b(()=>[c6]),_:1},16)]),_:1})]),_:1},16)}}},p6=q(i6,[["__file","/@slidev/slides/31.md"]]),u6=e("h1",null,"Configure the routes’ prefix",-1),y6=e("table",null,[e("thead",null,[e("tr",null,[e("th",null,"Name"),e("th",null,"Method"),e("th",null,"Path")])]),e("tbody",null,[e("tr",null,[e("td",null,"app_book_index"),e("td",null,"GET"),e("td",null,"/admin/books/")]),e("tr",null,[e("td",null,"app_book_create"),e("td",null,"GET, POST"),e("td",null,"/admin/books/new")]),e("tr",null,[e("td",null,"app_book_update"),e("td",null,"GET, PUT, PATCH"),e("td",null,"/admin/books/{id}/edit")]),e("tr",null,[e("td",null,"app_book_delete"),e("td",null,"DELETE"),e("td",null,"/admin/books/{id}")]),e("tr",null,[e("td",null,"app_book_bulk_delete"),e("td",null,"DELETE"),e("td",null,"/admin/books/bulk_delete")]),e("tr",null,[e("td",null,"app_book_show"),e("td",null,"GET"),e("td",null,"/admin/books/{id}")])])],-1),d6={__name:"32",setup(s){const n={srcSequence:"./pages/03_configure_your_operations.md"};return I(N),(o,t)=>(C(),P(ee,X(Q(n)),{default:b(()=>[u6,y6]),_:1},16))}},f6=q(d6,[["__file","/@slidev/slides/32.md"]]),m6=e("h1",null,"Configure the section",-1),h6=e("p",null,"It changes the route name for each operation.",-1),_6=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#4D9375"}},"namespace"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"App"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#A1B567"}},"Entity"),e("span",{style:{color:"#858585"}},";")]),a(`
`),e("span",{class:"line"}),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#758575"}},"// [...]")]),a(`
`),e("span",{class:"line"}),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"#["),e("span",{style:{color:"#E0A569"}},"Resource"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#A1B567"}},"section"),e("span",{style:{color:"#858585"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},"'admin'"),e("span",{style:{color:"#858585"}},","),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"routePrefix"),e("span",{style:{color:"#858585"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},"'admin'"),e("span",{style:{color:"#858585"}},")"),e("span",{style:{color:"#DBD7CA"}},"]")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"#["),e("span",{style:{color:"#E0A569"}},"Index"),e("span",{style:{color:"#DBD7CA"}},"]")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"#["),e("span",{style:{color:"#E0A569"}},"Create"),e("span",{style:{color:"#DBD7CA"}},"]")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"#["),e("span",{style:{color:"#E0A569"}},"Update"),e("span",{style:{color:"#DBD7CA"}},"]")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"#["),e("span",{style:{color:"#E0A569"}},"Delete"),e("span",{style:{color:"#DBD7CA"}},"]")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"#["),e("span",{style:{color:"#E0A569"}},"BulkDelete"),e("span",{style:{color:"#DBD7CA"}},"]")]),a(`
`),e("span",{class:"line"}),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"#["),e("span",{style:{color:"#E0A569"}},"Resource"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#A1B567"}},"section"),e("span",{style:{color:"#858585"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},"'shop'"),e("span",{style:{color:"#858585"}},")"),e("span",{style:{color:"#DBD7CA"}},"]")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"#["),e("span",{style:{color:"#E0A569"}},"Index"),e("span",{style:{color:"#DBD7CA"}},"]")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"#["),e("span",{style:{color:"#E0A569"}},"Show"),e("span",{style:{color:"#DBD7CA"}},"]")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#CB7676"}},"class"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"Book"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"implements"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"ResourceInterface")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"{")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"}")])])]),e("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#1C6B48"}},"namespace"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"App"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#6C7834"}},"Entity"),e("span",{style:{color:"#8E8F8B"}},";")]),a(`
`),e("span",{class:"line"}),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#A0ADA0"}},"// [...]")]),a(`
`),e("span",{class:"line"}),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"#["),e("span",{style:{color:"#B58451"}},"Resource"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#6C7834"}},"section"),e("span",{style:{color:"#8E8F8B"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},"'admin'"),e("span",{style:{color:"#8E8F8B"}},","),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"routePrefix"),e("span",{style:{color:"#8E8F8B"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},"'admin'"),e("span",{style:{color:"#8E8F8B"}},")"),e("span",{style:{color:"#393A34"}},"]")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"#["),e("span",{style:{color:"#B58451"}},"Index"),e("span",{style:{color:"#393A34"}},"]")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"#["),e("span",{style:{color:"#B58451"}},"Create"),e("span",{style:{color:"#393A34"}},"]")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"#["),e("span",{style:{color:"#B58451"}},"Update"),e("span",{style:{color:"#393A34"}},"]")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"#["),e("span",{style:{color:"#B58451"}},"Delete"),e("span",{style:{color:"#393A34"}},"]")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"#["),e("span",{style:{color:"#B58451"}},"BulkDelete"),e("span",{style:{color:"#393A34"}},"]")]),a(`
`),e("span",{class:"line"}),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"#["),e("span",{style:{color:"#B58451"}},"Resource"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#6C7834"}},"section"),e("span",{style:{color:"#8E8F8B"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},"'shop'"),e("span",{style:{color:"#8E8F8B"}},")"),e("span",{style:{color:"#393A34"}},"]")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"#["),e("span",{style:{color:"#B58451"}},"Index"),e("span",{style:{color:"#393A34"}},"]")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"#["),e("span",{style:{color:"#B58451"}},"Show"),e("span",{style:{color:"#393A34"}},"]")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#AB5959"}},"class"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"Book"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"implements"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"ResourceInterface")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"{")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"}")])])])],-1),g6={__name:"33",setup(s){const n={srcSequence:"./pages/03_configure_your_operations.md"};return I(N),(o,t)=>{const r=Ee;return C(),P(ee,X(Q(n)),{default:b(()=>[m6,h6,R(r,_e({},{ranges:["all","5","5,12"]}),{default:b(()=>[_6]),_:1},16)]),_:1},16)}}},B6=q(g6,[["__file","/@slidev/slides/33.md"]]),A6=e("h1",null,"Configure the section",-1),v6=e("table",null,[e("thead",null,[e("tr",null,[e("th",null,"Name"),e("th",null,"Method"),e("th",null,"Path")])]),e("tbody",null,[e("tr",null,[e("td",null,"app_admin_book_index"),e("td",null,"GET"),e("td",null,"/admin/books/")]),e("tr",null,[e("td",null,"app_admin_book_create"),e("td",null,"GET, POST"),e("td",null,"/admin/books/new")]),e("tr",null,[e("td",null,"app_admin_book_update"),e("td",null,"GET, PUT, PATCH"),e("td",null,"/admin/books/{id}/edit")]),e("tr",null,[e("td",null,"app_admin_book_delete"),e("td",null,"DELETE"),e("td",null,"/admin/books/{id}")]),e("tr",null,[e("td",null,"app_admin_book_bulk_delete"),e("td",null,"DELETE"),e("td",null,"/admin/books/bulk_delete")]),e("tr",null,[e("td",null,"app_shop_book_index"),e("td",null,"GET"),e("td",null,"/books/")]),e("tr",null,[e("td",null,"app_shop_book_show"),e("td",null,"GET"),e("td",null,"/books/{id}")])])],-1),C6={__name:"34",setup(s){const n={srcSequence:"./pages/03_configure_your_operations.md"};return I(N),(o,t)=>(C(),P(ee,X(Q(n)),{default:b(()=>[A6,v6]),_:1},16))}},E6=q(C6,[["__file","/@slidev/slides/34.md"]]),b6=e("h1",null,"Redirect",-1),k6=e("p",null,"After that an action has been performed, the operation can be redirected to another operation.",-1),D6={__name:"35",setup(s){const n={srcSequence:"./pages/04_redirect.md"};return I(N),(o,t)=>{const r=Re;return C(),P(ee,X(Q(n)),{default:b(()=>[b6,R(r,null,{default:b(()=>[k6]),_:1})]),_:1},16)}}},w6=q(D6,[["__file","/@slidev/slides/35.md"]]),S6=e("h1",null,"Default redirections",-1),R6=e("p",null,"Redirections are configured on your operations with these default behaviours.",-1),x6=e("table",null,[e("thead",null,[e("tr",null,[e("th",null,"Operation"),e("th",null,"Redirection")])]),e("tbody",null,[e("tr",null,[e("td",null,"create"),e("td",null,[e("code",null,"show"),a(" if exists, otherwise "),e("code",null,"index")])]),e("tr",null,[e("td",null,"update"),e("td",null,[e("code",null,"show"),a(" if exists, otherwise "),e("code",null,"index")])]),e("tr",null,[e("td",null,"delete"),e("td",null,[e("code",null,"index")])]),e("tr",null,[e("td",null,"bulk_delete"),e("td",null,[e("code",null,"index")])])])],-1),F6={__name:"36",setup(s){const n={srcSequence:"./pages/04_redirect.md"};return I(N),(o,t)=>{const r=Re;return C(),P(ee,X(Q(n)),{default:b(()=>[S6,R(r,null,{default:b(()=>[R6,x6]),_:1})]),_:1},16)}}},$6=q(F6,[["__file","/@slidev/slides/36.md"]]),I6=e("h1",null,"Custom redirection",-1),T6=e("p",null,"As an example, let’s configure a custom redirection fo create & update operations.",-1),M6=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"},tabindex:"0"},[e("code",null,[e("span",{class:"line"}),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#4D9375"}},"declare"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#D4976C"}},"strict_types"),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#6394BF"}},"1"),e("span",{style:{color:"#858585"}},");")]),a(`
`),e("span",{class:"line"}),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#4D9375"}},"namespace"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"App"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#A1B567"}},"Entity"),e("span",{style:{color:"#858585"}},";")]),a(`
`),e("span",{class:"line"}),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#4D9375"}},"use"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"Sylius"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#E0A569"}},"Component"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#E0A569"}},"Resource"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#E0A569"}},"Metadata"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#E0A569"}},"Create"),e("span",{style:{color:"#858585"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#4D9375"}},"use"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"Sylius"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#E0A569"}},"Component"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#E0A569"}},"Resource"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#E0A569"}},"Metadata"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#E0A569"}},"Resource"),e("span",{style:{color:"#858585"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#4D9375"}},"use"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"Sylius"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#E0A569"}},"Component"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#E0A569"}},"Resource"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#E0A569"}},"Metadata"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#E0A569"}},"Update"),e("span",{style:{color:"#858585"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#4D9375"}},"use"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"Sylius"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#E0A569"}},"Component"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#E0A569"}},"Resource"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#E0A569"}},"Model"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#E0A569"}},"ResourceInterface"),e("span",{style:{color:"#858585"}},";")]),a(`
`),e("span",{class:"line"}),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"#["),e("span",{style:{color:"#E0A569"}},"Resource"),e("span",{style:{color:"#DBD7CA"}},"]")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"#["),e("span",{style:{color:"#E0A569"}},"Create"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#A1B567"}},"redirectToRoute"),e("span",{style:{color:"#858585"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},"'app_book_update'"),e("span",{style:{color:"#858585"}},")"),e("span",{style:{color:"#DBD7CA"}},"]")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"#["),e("span",{style:{color:"#E0A569"}},"Update"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#A1B567"}},"redirectToRoute"),e("span",{style:{color:"#858585"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},"'app_book_update'"),e("span",{style:{color:"#858585"}},")"),e("span",{style:{color:"#DBD7CA"}},"]")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#CB7676"}},"class"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"Book"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"implements"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"ResourceInterface")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"{")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"}")])])]),e("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"},tabindex:"0"},[e("code",null,[e("span",{class:"line"}),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#1C6B48"}},"declare"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#A65E2B"}},"strict_types"),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#296AA3"}},"1"),e("span",{style:{color:"#8E8F8B"}},");")]),a(`
`),e("span",{class:"line"}),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#1C6B48"}},"namespace"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"App"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#6C7834"}},"Entity"),e("span",{style:{color:"#8E8F8B"}},";")]),a(`
`),e("span",{class:"line"}),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#1C6B48"}},"use"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B58451"}},"Sylius"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#B58451"}},"Component"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#B58451"}},"Resource"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#B58451"}},"Metadata"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#B58451"}},"Create"),e("span",{style:{color:"#8E8F8B"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#1C6B48"}},"use"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B58451"}},"Sylius"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#B58451"}},"Component"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#B58451"}},"Resource"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#B58451"}},"Metadata"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#B58451"}},"Resource"),e("span",{style:{color:"#8E8F8B"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#1C6B48"}},"use"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B58451"}},"Sylius"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#B58451"}},"Component"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#B58451"}},"Resource"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#B58451"}},"Metadata"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#B58451"}},"Update"),e("span",{style:{color:"#8E8F8B"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#1C6B48"}},"use"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B58451"}},"Sylius"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#B58451"}},"Component"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#B58451"}},"Resource"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#B58451"}},"Model"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#B58451"}},"ResourceInterface"),e("span",{style:{color:"#8E8F8B"}},";")]),a(`
`),e("span",{class:"line"}),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"#["),e("span",{style:{color:"#B58451"}},"Resource"),e("span",{style:{color:"#393A34"}},"]")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"#["),e("span",{style:{color:"#B58451"}},"Create"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#6C7834"}},"redirectToRoute"),e("span",{style:{color:"#8E8F8B"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},"'app_book_update'"),e("span",{style:{color:"#8E8F8B"}},")"),e("span",{style:{color:"#393A34"}},"]")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"#["),e("span",{style:{color:"#B58451"}},"Update"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#6C7834"}},"redirectToRoute"),e("span",{style:{color:"#8E8F8B"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},"'app_book_update'"),e("span",{style:{color:"#8E8F8B"}},")"),e("span",{style:{color:"#393A34"}},"]")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#AB5959"}},"class"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"Book"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"implements"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"ResourceInterface")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"{")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"}")])])])],-1),P6=e("p",null,"After adding or editing a book, it will be redirected to the edition page of a book.",-1),O6={__name:"37",setup(s){const n={srcSequence:"./pages/04_redirect.md"};return I(N),(o,t)=>{const r=Ee,l=Re;return C(),P(ee,X(Q(n)),{default:b(()=>[I6,R(l,null,{default:b(()=>[T6,R(r,_e({},{ranges:["all","12-13"]}),{default:b(()=>[M6]),_:1},16),P6]),_:1})]),_:1},16)}}},L6=q(O6,[["__file","/@slidev/slides/37.md"]]),N6=e("h1",null,"Pass arguments to your redirection",-1),q6=e("p",null,"You can pass arguments to your redirection method.",-1),U6=e("p",null,"2 variables are available:",-1),H6=e("ul",null,[e("li",null,[e("code",null,"resource"),a(": to retrieve data from the instantiated resource")]),e("li",null,[e("code",null,"{name_of_your_resource}"),a(": If your resource is a book instance, it will be also available as "),e("code",null,"book"),a(" variable")])],-1),V6=e("p",null,[a("It uses the "),e("a",{href:"https://symfony.com/doc/current/components/expression_language.html",target:"_blank",rel:"noopener"},"Symfony expression language"),a(" component.")],-1),j6={__name:"38",setup(s){const n={srcSequence:"./pages/04_redirect.md"};return I(N),(o,t)=>{const r=Re;return C(),P(ee,X(Q(n)),{default:b(()=>[N6,R(r,null,{default:b(()=>[q6,U6,H6,V6]),_:1})]),_:1},16)}}},G6=q(j6,[["__file","/@slidev/slides/38.md"]]),W6=e("h1",null,"Pass arguments to your redirection",-1),z6=e("p",null,"As an example, let’s redirect a book creation to the author details page of the created book.",-1),K6=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"},tabindex:"0"},[e("code",null,[e("span",{class:"line"}),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#4D9375"}},"declare"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#D4976C"}},"strict_types"),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#6394BF"}},"1"),e("span",{style:{color:"#858585"}},");")]),a(`
`),e("span",{class:"line"}),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#4D9375"}},"namespace"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"App"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#A1B567"}},"Entity"),e("span",{style:{color:"#858585"}},";")]),a(`
`),e("span",{class:"line"}),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#4D9375"}},"use"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"Sylius"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#E0A569"}},"Component"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#E0A569"}},"Resource"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#E0A569"}},"Metadata"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#E0A569"}},"Create"),e("span",{style:{color:"#858585"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#4D9375"}},"use"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"Sylius"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#E0A569"}},"Component"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#E0A569"}},"Resource"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#E0A569"}},"Metadata"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#E0A569"}},"Resource"),e("span",{style:{color:"#858585"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#4D9375"}},"use"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"Sylius"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#E0A569"}},"Component"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#E0A569"}},"Resource"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#E0A569"}},"Metadata"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#E0A569"}},"Update"),e("span",{style:{color:"#858585"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#4D9375"}},"use"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"Sylius"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#E0A569"}},"Component"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#E0A569"}},"Resource"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#E0A569"}},"Model"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#E0A569"}},"ResourceInterface"),e("span",{style:{color:"#858585"}},";")]),a(`
`),e("span",{class:"line"}),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"#["),e("span",{style:{color:"#E0A569"}},"Resource"),e("span",{style:{color:"#DBD7CA"}},"]")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"#["),e("span",{style:{color:"#E0A569"}},"Create"),e("span",{style:{color:"#858585"}},"(")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#A1B567"}},"redirectToRoute"),e("span",{style:{color:"#858585"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},"'app_author_show'"),e("span",{style:{color:"#858585"}},","),e("span",{style:{color:"#DBD7CA"}}," ")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"    "),e("span",{style:{color:"#758575"}},"# You can use either the generic resource variable")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#A1B567"}},"redirectArguments"),e("span",{style:{color:"#858585"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"["),e("span",{style:{color:"#C98A7D"}},"'id'"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"=>"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},"'resource.getAuthor().getId()'"),e("span",{style:{color:"#858585"}},"]")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"    "),e("span",{style:{color:"#758575"}},"# Or you can use the resource name")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#A1B567"}},"redirectArguments"),e("span",{style:{color:"#858585"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"["),e("span",{style:{color:"#C98A7D"}},"'id'"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"=>"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},"'book.getAuthor().getId()'"),e("span",{style:{color:"#858585"}},"]")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},")"),e("span",{style:{color:"#DBD7CA"}},"]")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#CB7676"}},"class"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"Book"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"implements"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"ResourceInterface")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"{")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"}")])])]),e("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"},tabindex:"0"},[e("code",null,[e("span",{class:"line"}),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#1C6B48"}},"declare"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#A65E2B"}},"strict_types"),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#296AA3"}},"1"),e("span",{style:{color:"#8E8F8B"}},");")]),a(`
`),e("span",{class:"line"}),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#1C6B48"}},"namespace"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"App"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#6C7834"}},"Entity"),e("span",{style:{color:"#8E8F8B"}},";")]),a(`
`),e("span",{class:"line"}),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#1C6B48"}},"use"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B58451"}},"Sylius"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#B58451"}},"Component"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#B58451"}},"Resource"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#B58451"}},"Metadata"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#B58451"}},"Create"),e("span",{style:{color:"#8E8F8B"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#1C6B48"}},"use"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B58451"}},"Sylius"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#B58451"}},"Component"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#B58451"}},"Resource"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#B58451"}},"Metadata"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#B58451"}},"Resource"),e("span",{style:{color:"#8E8F8B"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#1C6B48"}},"use"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B58451"}},"Sylius"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#B58451"}},"Component"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#B58451"}},"Resource"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#B58451"}},"Metadata"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#B58451"}},"Update"),e("span",{style:{color:"#8E8F8B"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#1C6B48"}},"use"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B58451"}},"Sylius"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#B58451"}},"Component"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#B58451"}},"Resource"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#B58451"}},"Model"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#B58451"}},"ResourceInterface"),e("span",{style:{color:"#8E8F8B"}},";")]),a(`
`),e("span",{class:"line"}),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"#["),e("span",{style:{color:"#B58451"}},"Resource"),e("span",{style:{color:"#393A34"}},"]")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"#["),e("span",{style:{color:"#B58451"}},"Create"),e("span",{style:{color:"#8E8F8B"}},"(")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#6C7834"}},"redirectToRoute"),e("span",{style:{color:"#8E8F8B"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},"'app_author_show'"),e("span",{style:{color:"#8E8F8B"}},","),e("span",{style:{color:"#393A34"}}," ")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"    "),e("span",{style:{color:"#A0ADA0"}},"# You can use either the generic resource variable")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#6C7834"}},"redirectArguments"),e("span",{style:{color:"#8E8F8B"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"["),e("span",{style:{color:"#B56959"}},"'id'"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"=>"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},"'resource.getAuthor().getId()'"),e("span",{style:{color:"#8E8F8B"}},"]")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"    "),e("span",{style:{color:"#A0ADA0"}},"# Or you can use the resource name")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#6C7834"}},"redirectArguments"),e("span",{style:{color:"#8E8F8B"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"["),e("span",{style:{color:"#B56959"}},"'id'"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"=>"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},"'book.getAuthor().getId()'"),e("span",{style:{color:"#8E8F8B"}},"]")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},")"),e("span",{style:{color:"#393A34"}},"]")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#AB5959"}},"class"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"Book"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"implements"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"ResourceInterface")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"{")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"}")])])])],-1),Y6={__name:"39",setup(s){const n={srcSequence:"./pages/04_redirect.md"};return I(N),(o,t)=>{const r=Ee,l=Re;return C(),P(ee,X(Q(n)),{default:b(()=>[W6,R(l,null,{default:b(()=>[z6,R(r,_e({},{ranges:["all","13","14-15","16-17"]}),{default:b(()=>[K6]),_:1},16)]),_:1})]),_:1},16)}}},Z6=q(Y6,[["__file","/@slidev/slides/39.md"]]),Q6=e("h1",null,"Resource factories",-1),J6=e("p",null,"Resource factories are used on Create operations to instantiate your resource.",-1),X6={__name:"40",setup(s){const n={srcSequence:"./pages/05_resource_factories.md"};return I(N),(o,t)=>{const r=Re;return C(),P(ee,X(Q(n)),{default:b(()=>[Q6,R(r,null,{default:b(()=>[J6]),_:1})]),_:1},16)}}},e4=q(X6,[["__file","/@slidev/slides/40.md"]]),s4=e("h1",null,"Default factory for your resource",-1),n4=e("p",null,[a("By default, a resource factory is defined to your resource "),e("code",null,"Sylius\\Component\\Resource\\Factory\\Factory"),a(".")],-1),o4=e("p",null,[a("It has a "),e("code",null,"createNew"),a(" method with no arguments.")],-1),t4={__name:"41",setup(s){const n={srcSequence:"./pages/05_resource_factories.md"};return I(N),(o,t)=>{const r=Re;return C(),P(ee,X(Q(n)),{default:b(()=>[s4,R(r,null,{default:b(()=>[n4,o4]),_:1})]),_:1},16)}}},r4=q(t4,[["__file","/@slidev/slides/41.md"]]),l4=e("h1",null,"Define your custom factory",-1),a4=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#758575"}},"// src/Factory/BookRepository.php")]),a(`
`),e("span",{class:"line"}),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#4D9375"}},"declare"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#D4976C"}},"strict_types"),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#6394BF"}},"1"),e("span",{style:{color:"#858585"}},");")]),a(`
`),e("span",{class:"line"}),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#4D9375"}},"namespace"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"App"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#A1B567"}},"Factory"),e("span",{style:{color:"#858585"}},";")]),a(`
`),e("span",{class:"line"}),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#4D9375"}},"use"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"App"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#E0A569"}},"Entity"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#E0A569"}},"Book"),e("span",{style:{color:"#858585"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#4D9375"}},"use"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"Sylius"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#E0A569"}},"Component"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#E0A569"}},"Resource"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#E0A569"}},"Factory"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#E0A569"}},"FactoryInterface"),e("span",{style:{color:"#858585"}},";")]),a(`
`),e("span",{class:"line"}),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#CB7676"}},"final"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"class"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"BookFactory"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"implements"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"FactoryInterface")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"{")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#CB7676"}},"public"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"function"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"createNew"),e("span",{style:{color:"#858585"}},"()"),e("span",{style:{color:"#CB7676"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"Book")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#858585"}},"{")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#858585"}},"$"),e("span",{style:{color:"#B8A965"}},"book"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#4D9375"}},"new"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"Book"),e("span",{style:{color:"#858585"}},"();")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#858585"}},"$"),e("span",{style:{color:"#B8A965"}},"book"),e("span",{style:{color:"#CB7676"}},"->"),e("span",{style:{color:"#A1B567"}},"setCreatedAt"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#4D9375"}},"new"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#E0A569"}},"DateTimeImmutable"),e("span",{style:{color:"#858585"}},"());")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        ")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#4D9375"}},"return"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"$"),e("span",{style:{color:"#B8A965"}},"book"),e("span",{style:{color:"#858585"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#858585"}},"}")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"}")])])]),e("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#A0ADA0"}},"// src/Factory/BookRepository.php")]),a(`
`),e("span",{class:"line"}),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#1C6B48"}},"declare"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#A65E2B"}},"strict_types"),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#296AA3"}},"1"),e("span",{style:{color:"#8E8F8B"}},");")]),a(`
`),e("span",{class:"line"}),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#1C6B48"}},"namespace"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"App"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#6C7834"}},"Factory"),e("span",{style:{color:"#8E8F8B"}},";")]),a(`
`),e("span",{class:"line"}),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#1C6B48"}},"use"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B58451"}},"App"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#B58451"}},"Entity"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#B58451"}},"Book"),e("span",{style:{color:"#8E8F8B"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#1C6B48"}},"use"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B58451"}},"Sylius"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#B58451"}},"Component"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#B58451"}},"Resource"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#B58451"}},"Factory"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#B58451"}},"FactoryInterface"),e("span",{style:{color:"#8E8F8B"}},";")]),a(`
`),e("span",{class:"line"}),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#AB5959"}},"final"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"class"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"BookFactory"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"implements"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"FactoryInterface")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"{")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#AB5959"}},"public"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"function"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"createNew"),e("span",{style:{color:"#8E8F8B"}},"()"),e("span",{style:{color:"#AB5959"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B58451"}},"Book")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#8E8F8B"}},"{")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#8E8F8B"}},"$"),e("span",{style:{color:"#8C862B"}},"book"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#1C6B48"}},"new"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B58451"}},"Book"),e("span",{style:{color:"#8E8F8B"}},"();")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#8E8F8B"}},"$"),e("span",{style:{color:"#8C862B"}},"book"),e("span",{style:{color:"#AB5959"}},"->"),e("span",{style:{color:"#6C7834"}},"setCreatedAt"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#1C6B48"}},"new"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#B58451"}},"DateTimeImmutable"),e("span",{style:{color:"#8E8F8B"}},"());")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        ")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#1C6B48"}},"return"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"$"),e("span",{style:{color:"#8C862B"}},"book"),e("span",{style:{color:"#8E8F8B"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#8E8F8B"}},"}")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"}")])])])],-1),c4={__name:"42",setup(s){const n={srcSequence:"./pages/05_resource_factories.md"};return I(N),(o,t)=>{const r=Ee;return C(),P(ee,X(Q(n)),{default:b(()=>[l4,R(r,_e({},{ranges:["all","10","10,8","12","14","15","17"]}),{default:b(()=>[a4]),_:1},16)]),_:1},16)}}},i4=q(c4,[["__file","/@slidev/slides/42.md"]]),p4=e("h1",null,"Configure your factory",-1),u4=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#758575"}},"# config/services.yaml")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#429988"}},"services"),e("span",{style:{color:"#858585"}},":")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#429988"}},"App\\Factory\\BookFactory"),e("span",{style:{color:"#858585"}},":")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#429988"}},"decorates"),e("span",{style:{color:"#858585"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},"'@.inner'")])])]),e("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#A0ADA0"}},"# config/services.yaml")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#2F8A89"}},"services"),e("span",{style:{color:"#8E8F8B"}},":")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#2F8A89"}},"App\\Factory\\BookFactory"),e("span",{style:{color:"#8E8F8B"}},":")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#2F8A89"}},"decorates"),e("span",{style:{color:"#8E8F8B"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},"'@.inner'")])])])],-1),y4={__name:"43",setup(s){const n={srcSequence:"./pages/05_resource_factories.md"};return I(N),(o,t)=>{const r=Ee;return C(),P(ee,X(Q(n)),{default:b(()=>[p4,R(r,_e({},{ranges:[""]}),{default:b(()=>[u4]),_:1},16)]),_:1},16)}}},d4=q(y4,[["__file","/@slidev/slides/43.md"]]),f4=e("h1",null,"Use your custom method",-1),m4=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#758575"}},"// src/Factory/BookRepository.php")]),a(`
`),e("span",{class:"line"}),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#758575"}},"// [...]")]),a(`
`),e("span",{class:"line"}),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#CB7676"}},"final"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"class"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"BookFactory"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"implements"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"FactoryInterface")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"{")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#CB7676"}},"public"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"function"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"__construct"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#CB7676"}},"private"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"Security"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"$"),e("span",{style:{color:"#B8A965"}},"security"),e("span",{style:{color:"#858585"}},")"),e("span",{style:{color:"#DBD7CA"}}," ")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#858585"}},"{")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#858585"}},"}")]),a(`
`),e("span",{class:"line"}),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#CB7676"}},"public"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"function"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"createNew"),e("span",{style:{color:"#858585"}},"()"),e("span",{style:{color:"#CB7676"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"Book")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#858585"}},"{")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#4D9375"}},"return"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#4D9375"}},"new"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"Book"),e("span",{style:{color:"#858585"}},"();")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#858585"}},"}")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    ")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#CB7676"}},"public"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"function"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"createWithCreator"),e("span",{style:{color:"#858585"}},"()"),e("span",{style:{color:"#CB7676"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"Book")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#858585"}},"{")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#858585"}},"$"),e("span",{style:{color:"#B8A965"}},"book"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"$"),e("span",{style:{color:"#D4976C"}},"this"),e("span",{style:{color:"#CB7676"}},"->"),e("span",{style:{color:"#A1B567"}},"createNew"),e("span",{style:{color:"#858585"}},"();")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        ")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#858585"}},"$"),e("span",{style:{color:"#B8A965"}},"book"),e("span",{style:{color:"#CB7676"}},"->"),e("span",{style:{color:"#A1B567"}},"setCreator"),e("span",{style:{color:"#858585"}},"($"),e("span",{style:{color:"#D4976C"}},"this"),e("span",{style:{color:"#CB7676"}},"->"),e("span",{style:{color:"#B8A965"}},"security"),e("span",{style:{color:"#CB7676"}},"->"),e("span",{style:{color:"#A1B567"}},"getUser"),e("span",{style:{color:"#858585"}},"());")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        ")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#4D9375"}},"return"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"$"),e("span",{style:{color:"#B8A965"}},"book"),e("span",{style:{color:"#858585"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#858585"}},"}")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"}")])])]),e("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#A0ADA0"}},"// src/Factory/BookRepository.php")]),a(`
`),e("span",{class:"line"}),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#A0ADA0"}},"// [...]")]),a(`
`),e("span",{class:"line"}),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#AB5959"}},"final"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"class"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"BookFactory"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"implements"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"FactoryInterface")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"{")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#AB5959"}},"public"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"function"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B58451"}},"__construct"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#AB5959"}},"private"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B58451"}},"Security"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"$"),e("span",{style:{color:"#8C862B"}},"security"),e("span",{style:{color:"#8E8F8B"}},")"),e("span",{style:{color:"#393A34"}}," ")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#8E8F8B"}},"{")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#8E8F8B"}},"}")]),a(`
`),e("span",{class:"line"}),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#AB5959"}},"public"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"function"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"createNew"),e("span",{style:{color:"#8E8F8B"}},"()"),e("span",{style:{color:"#AB5959"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B58451"}},"Book")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#8E8F8B"}},"{")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#1C6B48"}},"return"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#1C6B48"}},"new"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B58451"}},"Book"),e("span",{style:{color:"#8E8F8B"}},"();")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#8E8F8B"}},"}")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    ")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#AB5959"}},"public"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"function"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"createWithCreator"),e("span",{style:{color:"#8E8F8B"}},"()"),e("span",{style:{color:"#AB5959"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B58451"}},"Book")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#8E8F8B"}},"{")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#8E8F8B"}},"$"),e("span",{style:{color:"#8C862B"}},"book"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"$"),e("span",{style:{color:"#A65E2B"}},"this"),e("span",{style:{color:"#AB5959"}},"->"),e("span",{style:{color:"#6C7834"}},"createNew"),e("span",{style:{color:"#8E8F8B"}},"();")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        ")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#8E8F8B"}},"$"),e("span",{style:{color:"#8C862B"}},"book"),e("span",{style:{color:"#AB5959"}},"->"),e("span",{style:{color:"#6C7834"}},"setCreator"),e("span",{style:{color:"#8E8F8B"}},"($"),e("span",{style:{color:"#A65E2B"}},"this"),e("span",{style:{color:"#AB5959"}},"->"),e("span",{style:{color:"#8C862B"}},"security"),e("span",{style:{color:"#AB5959"}},"->"),e("span",{style:{color:"#6C7834"}},"getUser"),e("span",{style:{color:"#8E8F8B"}},"());")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        ")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#1C6B48"}},"return"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"$"),e("span",{style:{color:"#8C862B"}},"book"),e("span",{style:{color:"#8E8F8B"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#8E8F8B"}},"}")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"}")])])])],-1),h4={__name:"44",setup(s){const n={srcSequence:"./pages/05_resource_factories.md"};return I(N),(o,t)=>{const r=Ee;return C(),P(ee,X(Q(n)),{default:b(()=>[f4,R(r,_e({},{ranges:["all","16","18","18,11-14","20","22"]}),{default:b(()=>[m4]),_:1},16)]),_:1},16)}}},_4=q(h4,[["__file","/@slidev/slides/44.md"]]),g4=e("h1",null,"Use it on your create operation",-1),B4=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#758575"}},"// src/Entity/Book.php")]),a(`
`),e("span",{class:"line"}),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#4D9375"}},"declare"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#D4976C"}},"strict_types"),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#6394BF"}},"1"),e("span",{style:{color:"#858585"}},");")]),a(`
`),e("span",{class:"line"}),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#4D9375"}},"namespace"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"App"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#A1B567"}},"Entity"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#A1B567"}},"Book"),e("span",{style:{color:"#858585"}},";")]),a(`
`),e("span",{class:"line"}),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#4D9375"}},"use"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"Sylius"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#E0A569"}},"Component"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#E0A569"}},"Resource"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#E0A569"}},"Metadata"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#E0A569"}},"Create"),e("span",{style:{color:"#858585"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#4D9375"}},"use"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"Sylius"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#E0A569"}},"Component"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#E0A569"}},"Resource"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#E0A569"}},"Metadata"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#E0A569"}},"Resource"),e("span",{style:{color:"#858585"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#4D9375"}},"use"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"Sylius"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#E0A569"}},"Component"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#E0A569"}},"Resource"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#E0A569"}},"Model"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#E0A569"}},"ResourceInterface"),e("span",{style:{color:"#858585"}},";")]),a(`
`),e("span",{class:"line"}),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"#["),e("span",{style:{color:"#E0A569"}},"Resource"),e("span",{style:{color:"#DBD7CA"}},"]")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"#["),e("span",{style:{color:"#E0A569"}},"Create"),e("span",{style:{color:"#858585"}},"(")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#A1B567"}},"path"),e("span",{style:{color:"#858585"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},"'authors/{authorId}/books'"),e("span",{style:{color:"#858585"}},",")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#A1B567"}},"factoryMethod"),e("span",{style:{color:"#858585"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},"'createWithCreator'"),e("span",{style:{color:"#858585"}},",")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},")"),e("span",{style:{color:"#DBD7CA"}},"]")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#CB7676"}},"class"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"Book"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"implements"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"ResourceInterface")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"{")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"}")])])]),e("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#A0ADA0"}},"// src/Entity/Book.php")]),a(`
`),e("span",{class:"line"}),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#1C6B48"}},"declare"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#A65E2B"}},"strict_types"),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#296AA3"}},"1"),e("span",{style:{color:"#8E8F8B"}},");")]),a(`
`),e("span",{class:"line"}),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#1C6B48"}},"namespace"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"App"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#6C7834"}},"Entity"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#6C7834"}},"Book"),e("span",{style:{color:"#8E8F8B"}},";")]),a(`
`),e("span",{class:"line"}),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#1C6B48"}},"use"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B58451"}},"Sylius"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#B58451"}},"Component"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#B58451"}},"Resource"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#B58451"}},"Metadata"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#B58451"}},"Create"),e("span",{style:{color:"#8E8F8B"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#1C6B48"}},"use"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B58451"}},"Sylius"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#B58451"}},"Component"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#B58451"}},"Resource"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#B58451"}},"Metadata"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#B58451"}},"Resource"),e("span",{style:{color:"#8E8F8B"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#1C6B48"}},"use"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B58451"}},"Sylius"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#B58451"}},"Component"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#B58451"}},"Resource"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#B58451"}},"Model"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#B58451"}},"ResourceInterface"),e("span",{style:{color:"#8E8F8B"}},";")]),a(`
`),e("span",{class:"line"}),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"#["),e("span",{style:{color:"#B58451"}},"Resource"),e("span",{style:{color:"#393A34"}},"]")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"#["),e("span",{style:{color:"#B58451"}},"Create"),e("span",{style:{color:"#8E8F8B"}},"(")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#6C7834"}},"path"),e("span",{style:{color:"#8E8F8B"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},"'authors/{authorId}/books'"),e("span",{style:{color:"#8E8F8B"}},",")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#6C7834"}},"factoryMethod"),e("span",{style:{color:"#8E8F8B"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},"'createWithCreator'"),e("span",{style:{color:"#8E8F8B"}},",")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},")"),e("span",{style:{color:"#393A34"}},"]")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#AB5959"}},"class"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"Book"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"implements"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"ResourceInterface")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"{")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"}")])])])],-1),A4={__name:"45",setup(s){const n={srcSequence:"./pages/05_resource_factories.md"};return I(N),(o,t)=>{const r=Ee;return C(),P(ee,X(Q(n)),{default:b(()=>[g4,R(r,_e({},{ranges:["all","14"]}),{default:b(()=>[B4]),_:1},16)]),_:1},16)}}},v4=q(A4,[["__file","/@slidev/slides/45.md"]]),C4=e("h1",null,"Pass arguments to your method",-1),E4=e("p",null,"You can pass arguments to your factory method.",-1),b4=e("p",null,"3 variables are available:",-1),k4=e("ul",null,[e("li",null,[e("code",null,"request"),a(": to retrieve data from the request via "),e("code",null,"Symfony\\Component\\HttpFoundation\\Request")]),e("li",null,[e("code",null,"token"),a(": to retrieve data from the authentication token via "),e("code",null,"Symfony\\Component\\Security\\Core\\Authentication\\Token\\TokenInterface")]),e("li",null,[e("code",null,"user"),a(": to retrieve data from the logged-in user via "),e("code",null,"Symfony\\Component\\Security\\Core\\User\\UserInterface")])],-1),D4=e("p",null,[a("It uses the "),e("a",{href:"https://symfony.com/doc/current/components/expression_language.html",target:"_blank",rel:"noopener"},"Symfony expression language"),a(" component.")],-1),w4={__name:"46",setup(s){const n={srcSequence:"./pages/05_resource_factories.md"};return I(N),(o,t)=>{const r=Re;return C(),P(ee,X(Q(n)),{default:b(()=>[C4,R(r,null,{default:b(()=>[E4,b4,k4,D4]),_:1})]),_:1},16)}}},S4=q(w4,[["__file","/@slidev/slides/46.md"]]),R4=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#758575"}},"// src/Factory/BookRepository.php")]),a(`
`),e("span",{class:"line"}),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#758575"}},"// [...]")]),a(`
`),e("span",{class:"line"}),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#CB7676"}},"final"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"class"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"BookFactory"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"implements"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"FactoryInterface")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"{")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#CB7676"}},"public"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"function"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"__construct"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#CB7676"}},"private"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"RepositoryInterface"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"$"),e("span",{style:{color:"#B8A965"}},"authorRepository"),e("span",{style:{color:"#858585"}},")"),e("span",{style:{color:"#DBD7CA"}}," ")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#858585"}},"{")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#858585"}},"}")]),a(`
`),e("span",{class:"line"}),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#CB7676"}},"public"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"function"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"createNew"),e("span",{style:{color:"#858585"}},"()"),e("span",{style:{color:"#CB7676"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"Book")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#858585"}},"{")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#4D9375"}},"return"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#4D9375"}},"new"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"Book"),e("span",{style:{color:"#858585"}},"();")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#858585"}},"}")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    ")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#CB7676"}},"public"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"function"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"createForAuthor"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#4D9375"}},"string"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"$"),e("span",{style:{color:"#B8A965"}},"authorId"),e("span",{style:{color:"#858585"}},")"),e("span",{style:{color:"#CB7676"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"Book")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#858585"}},"{")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#858585"}},"$"),e("span",{style:{color:"#B8A965"}},"book"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"$"),e("span",{style:{color:"#D4976C"}},"this"),e("span",{style:{color:"#CB7676"}},"->"),e("span",{style:{color:"#A1B567"}},"createNew"),e("span",{style:{color:"#858585"}},"();")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        ")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#858585"}},"$"),e("span",{style:{color:"#B8A965"}},"author"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"$"),e("span",{style:{color:"#D4976C"}},"this"),e("span",{style:{color:"#CB7676"}},"->"),e("span",{style:{color:"#B8A965"}},"authorRepository"),e("span",{style:{color:"#CB7676"}},"->"),e("span",{style:{color:"#A1B567"}},"find"),e("span",{style:{color:"#858585"}},"($"),e("span",{style:{color:"#B8A965"}},"authorId"),e("span",{style:{color:"#858585"}},");")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        ")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#858585"}},"$"),e("span",{style:{color:"#B8A965"}},"book"),e("span",{style:{color:"#CB7676"}},"->"),e("span",{style:{color:"#A1B567"}},"setAuthor"),e("span",{style:{color:"#858585"}},"($"),e("span",{style:{color:"#B8A965"}},"author"),e("span",{style:{color:"#858585"}},");")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        ")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#4D9375"}},"return"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"$"),e("span",{style:{color:"#B8A965"}},"book"),e("span",{style:{color:"#858585"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#858585"}},"}")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"}")])])]),e("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#A0ADA0"}},"// src/Factory/BookRepository.php")]),a(`
`),e("span",{class:"line"}),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#A0ADA0"}},"// [...]")]),a(`
`),e("span",{class:"line"}),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#AB5959"}},"final"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"class"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"BookFactory"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"implements"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"FactoryInterface")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"{")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#AB5959"}},"public"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"function"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B58451"}},"__construct"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#AB5959"}},"private"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B58451"}},"RepositoryInterface"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"$"),e("span",{style:{color:"#8C862B"}},"authorRepository"),e("span",{style:{color:"#8E8F8B"}},")"),e("span",{style:{color:"#393A34"}}," ")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#8E8F8B"}},"{")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#8E8F8B"}},"}")]),a(`
`),e("span",{class:"line"}),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#AB5959"}},"public"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"function"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"createNew"),e("span",{style:{color:"#8E8F8B"}},"()"),e("span",{style:{color:"#AB5959"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B58451"}},"Book")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#8E8F8B"}},"{")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#1C6B48"}},"return"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#1C6B48"}},"new"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B58451"}},"Book"),e("span",{style:{color:"#8E8F8B"}},"();")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#8E8F8B"}},"}")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    ")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#AB5959"}},"public"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"function"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"createForAuthor"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#1C6B48"}},"string"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"$"),e("span",{style:{color:"#8C862B"}},"authorId"),e("span",{style:{color:"#8E8F8B"}},")"),e("span",{style:{color:"#AB5959"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B58451"}},"Book")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#8E8F8B"}},"{")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#8E8F8B"}},"$"),e("span",{style:{color:"#8C862B"}},"book"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"$"),e("span",{style:{color:"#A65E2B"}},"this"),e("span",{style:{color:"#AB5959"}},"->"),e("span",{style:{color:"#6C7834"}},"createNew"),e("span",{style:{color:"#8E8F8B"}},"();")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        ")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#8E8F8B"}},"$"),e("span",{style:{color:"#8C862B"}},"author"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"$"),e("span",{style:{color:"#A65E2B"}},"this"),e("span",{style:{color:"#AB5959"}},"->"),e("span",{style:{color:"#8C862B"}},"authorRepository"),e("span",{style:{color:"#AB5959"}},"->"),e("span",{style:{color:"#6C7834"}},"find"),e("span",{style:{color:"#8E8F8B"}},"($"),e("span",{style:{color:"#8C862B"}},"authorId"),e("span",{style:{color:"#8E8F8B"}},");")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        ")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#8E8F8B"}},"$"),e("span",{style:{color:"#8C862B"}},"book"),e("span",{style:{color:"#AB5959"}},"->"),e("span",{style:{color:"#6C7834"}},"setAuthor"),e("span",{style:{color:"#8E8F8B"}},"($"),e("span",{style:{color:"#8C862B"}},"author"),e("span",{style:{color:"#8E8F8B"}},");")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        ")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#1C6B48"}},"return"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"$"),e("span",{style:{color:"#8C862B"}},"book"),e("span",{style:{color:"#8E8F8B"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#8E8F8B"}},"}")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"}")])])])],-1),x4={__name:"47",setup(s){const n={srcSequence:"./pages/05_resource_factories.md"};return I(N),(o,t)=>{const r=Ee;return C(),P(ee,X(Q(n)),{default:b(()=>[R(r,_e({},{ranges:["all","16","18","20","20,7","22","24"]}),{default:b(()=>[R4]),_:1},16)]),_:1},16)}}},F4=q(x4,[["__file","/@slidev/slides/47.md"]]),$4=e("h1",null,"Use it on your create operation",-1),I4=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#758575"}},"// src/Entity/Book.php")]),a(`
`),e("span",{class:"line"}),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#4D9375"}},"declare"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#D4976C"}},"strict_types"),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#6394BF"}},"1"),e("span",{style:{color:"#858585"}},");")]),a(`
`),e("span",{class:"line"}),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#4D9375"}},"namespace"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"App"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#A1B567"}},"Entity"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#A1B567"}},"Book"),e("span",{style:{color:"#858585"}},";")]),a(`
`),e("span",{class:"line"}),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#4D9375"}},"use"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"Sylius"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#E0A569"}},"Component"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#E0A569"}},"Resource"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#E0A569"}},"Metadata"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#E0A569"}},"Create"),e("span",{style:{color:"#858585"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#4D9375"}},"use"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"Sylius"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#E0A569"}},"Component"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#E0A569"}},"Resource"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#E0A569"}},"Metadata"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#E0A569"}},"Resource"),e("span",{style:{color:"#858585"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#4D9375"}},"use"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"Sylius"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#E0A569"}},"Component"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#E0A569"}},"Resource"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#E0A569"}},"Model"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#E0A569"}},"ResourceInterface"),e("span",{style:{color:"#858585"}},";")]),a(`
`),e("span",{class:"line"}),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"#["),e("span",{style:{color:"#E0A569"}},"Resource"),e("span",{style:{color:"#DBD7CA"}},"]")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"#["),e("span",{style:{color:"#E0A569"}},"Create"),e("span",{style:{color:"#858585"}},"(")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#A1B567"}},"path"),e("span",{style:{color:"#858585"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},"'authors/{authorId}/books'"),e("span",{style:{color:"#858585"}},",")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#A1B567"}},"factoryMethod"),e("span",{style:{color:"#858585"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},"'createForAuthor'"),e("span",{style:{color:"#858585"}},",")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#A1B567"}},"factoryArguments"),e("span",{style:{color:"#858585"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"["),e("span",{style:{color:"#C98A7D"}},"'authorId'"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"=>"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},`"request.attributes.get('authorId')"`),e("span",{style:{color:"#858585"}},"],")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},")"),e("span",{style:{color:"#DBD7CA"}},"]")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#CB7676"}},"class"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"Book"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"implements"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"ResourceInterface")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"{")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"}")])])]),e("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#A0ADA0"}},"// src/Entity/Book.php")]),a(`
`),e("span",{class:"line"}),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#1C6B48"}},"declare"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#A65E2B"}},"strict_types"),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#296AA3"}},"1"),e("span",{style:{color:"#8E8F8B"}},");")]),a(`
`),e("span",{class:"line"}),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#1C6B48"}},"namespace"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"App"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#6C7834"}},"Entity"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#6C7834"}},"Book"),e("span",{style:{color:"#8E8F8B"}},";")]),a(`
`),e("span",{class:"line"}),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#1C6B48"}},"use"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B58451"}},"Sylius"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#B58451"}},"Component"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#B58451"}},"Resource"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#B58451"}},"Metadata"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#B58451"}},"Create"),e("span",{style:{color:"#8E8F8B"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#1C6B48"}},"use"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B58451"}},"Sylius"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#B58451"}},"Component"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#B58451"}},"Resource"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#B58451"}},"Metadata"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#B58451"}},"Resource"),e("span",{style:{color:"#8E8F8B"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#1C6B48"}},"use"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B58451"}},"Sylius"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#B58451"}},"Component"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#B58451"}},"Resource"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#B58451"}},"Model"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#B58451"}},"ResourceInterface"),e("span",{style:{color:"#8E8F8B"}},";")]),a(`
`),e("span",{class:"line"}),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"#["),e("span",{style:{color:"#B58451"}},"Resource"),e("span",{style:{color:"#393A34"}},"]")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"#["),e("span",{style:{color:"#B58451"}},"Create"),e("span",{style:{color:"#8E8F8B"}},"(")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#6C7834"}},"path"),e("span",{style:{color:"#8E8F8B"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},"'authors/{authorId}/books'"),e("span",{style:{color:"#8E8F8B"}},",")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#6C7834"}},"factoryMethod"),e("span",{style:{color:"#8E8F8B"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},"'createForAuthor'"),e("span",{style:{color:"#8E8F8B"}},",")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#6C7834"}},"factoryArguments"),e("span",{style:{color:"#8E8F8B"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"["),e("span",{style:{color:"#B56959"}},"'authorId'"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"=>"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},`"request.attributes.get('authorId')"`),e("span",{style:{color:"#8E8F8B"}},"],")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},")"),e("span",{style:{color:"#393A34"}},"]")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#AB5959"}},"class"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"Book"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"implements"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"ResourceInterface")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"{")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"}")])])])],-1),T4={__name:"48",setup(s){const n={srcSequence:"./pages/05_resource_factories.md"};return I(N),(o,t)=>{const r=Ee;return C(),P(ee,X(Q(n)),{default:b(()=>[$4,R(r,_e({},{ranges:["all","14","15"]}),{default:b(()=>[I4]),_:1},16)]),_:1},16)}}},M4=q(T4,[["__file","/@slidev/slides/48.md"]]),P4=e("h1",null,"Use a factory without declaring it",-1),O4=e("p",null,[a("You can use a factory without declaring it on "),e("code",null,"services.yaml"),a(".")],-1),L4=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#758575"}},"// src/Entity/Book.php")]),a(`
`),e("span",{class:"line"}),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#4D9375"}},"declare"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#D4976C"}},"strict_types"),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#6394BF"}},"1"),e("span",{style:{color:"#858585"}},");")]),a(`
`),e("span",{class:"line"}),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#4D9375"}},"namespace"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"App"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#A1B567"}},"Entity"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#A1B567"}},"Book"),e("span",{style:{color:"#858585"}},";")]),a(`
`),e("span",{class:"line"}),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#4D9375"}},"use"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"App"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#E0A569"}},"Factory"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#E0A569"}},"BookFactory"),e("span",{style:{color:"#858585"}},";"),e("span",{style:{color:"#4D9375"}},"use"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"Sylius"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#E0A569"}},"Component"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#E0A569"}},"Resource"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#E0A569"}},"Metadata"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#E0A569"}},"Create"),e("span",{style:{color:"#858585"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#4D9375"}},"use"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"Sylius"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#E0A569"}},"Component"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#E0A569"}},"Resource"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#E0A569"}},"Metadata"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#E0A569"}},"Resource"),e("span",{style:{color:"#858585"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#4D9375"}},"use"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"Sylius"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#E0A569"}},"Component"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#E0A569"}},"Resource"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#E0A569"}},"Model"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#E0A569"}},"ResourceInterface"),e("span",{style:{color:"#858585"}},";")]),a(`
`),e("span",{class:"line"}),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"#["),e("span",{style:{color:"#E0A569"}},"Resource"),e("span",{style:{color:"#DBD7CA"}},"]")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"#["),e("span",{style:{color:"#E0A569"}},"Create"),e("span",{style:{color:"#858585"}},"(")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#A1B567"}},"path"),e("span",{style:{color:"#858585"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},"'authors/{authorId}/books'"),e("span",{style:{color:"#858585"}},",")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"    "),e("span",{style:{color:"#758575"}},"# Here we declared the factory to use with its fully classified class name")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#A1B567"}},"factory"),e("span",{style:{color:"#858585"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"BookFactory"),e("span",{style:{color:"#CB7676"}},"::"),e("span",{style:{color:"#4D9375"}},"class"),e("span",{style:{color:"#858585"}},",")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#A1B567"}},"factoryMethod"),e("span",{style:{color:"#858585"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},"'createForAuthor'"),e("span",{style:{color:"#858585"}},","),e("span",{style:{color:"#DBD7CA"}}," ")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#A1B567"}},"factoryArguments"),e("span",{style:{color:"#858585"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"["),e("span",{style:{color:"#C98A7D"}},"'authorId'"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"=>"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},`"request.attributes.get('authorId')"`),e("span",{style:{color:"#858585"}},"],")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},")"),e("span",{style:{color:"#DBD7CA"}},"]")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#CB7676"}},"class"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"Book"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"implements"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"ResourceInterface")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"{")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"}")])])]),e("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#A0ADA0"}},"// src/Entity/Book.php")]),a(`
`),e("span",{class:"line"}),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#1C6B48"}},"declare"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#A65E2B"}},"strict_types"),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#296AA3"}},"1"),e("span",{style:{color:"#8E8F8B"}},");")]),a(`
`),e("span",{class:"line"}),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#1C6B48"}},"namespace"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"App"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#6C7834"}},"Entity"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#6C7834"}},"Book"),e("span",{style:{color:"#8E8F8B"}},";")]),a(`
`),e("span",{class:"line"}),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#1C6B48"}},"use"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B58451"}},"App"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#B58451"}},"Factory"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#B58451"}},"BookFactory"),e("span",{style:{color:"#8E8F8B"}},";"),e("span",{style:{color:"#1C6B48"}},"use"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B58451"}},"Sylius"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#B58451"}},"Component"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#B58451"}},"Resource"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#B58451"}},"Metadata"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#B58451"}},"Create"),e("span",{style:{color:"#8E8F8B"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#1C6B48"}},"use"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B58451"}},"Sylius"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#B58451"}},"Component"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#B58451"}},"Resource"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#B58451"}},"Metadata"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#B58451"}},"Resource"),e("span",{style:{color:"#8E8F8B"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#1C6B48"}},"use"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B58451"}},"Sylius"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#B58451"}},"Component"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#B58451"}},"Resource"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#B58451"}},"Model"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#B58451"}},"ResourceInterface"),e("span",{style:{color:"#8E8F8B"}},";")]),a(`
`),e("span",{class:"line"}),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"#["),e("span",{style:{color:"#B58451"}},"Resource"),e("span",{style:{color:"#393A34"}},"]")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"#["),e("span",{style:{color:"#B58451"}},"Create"),e("span",{style:{color:"#8E8F8B"}},"(")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#6C7834"}},"path"),e("span",{style:{color:"#8E8F8B"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},"'authors/{authorId}/books'"),e("span",{style:{color:"#8E8F8B"}},",")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"    "),e("span",{style:{color:"#A0ADA0"}},"# Here we declared the factory to use with its fully classified class name")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#6C7834"}},"factory"),e("span",{style:{color:"#8E8F8B"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B58451"}},"BookFactory"),e("span",{style:{color:"#AB5959"}},"::"),e("span",{style:{color:"#1C6B48"}},"class"),e("span",{style:{color:"#8E8F8B"}},",")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#6C7834"}},"factoryMethod"),e("span",{style:{color:"#8E8F8B"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},"'createForAuthor'"),e("span",{style:{color:"#8E8F8B"}},","),e("span",{style:{color:"#393A34"}}," ")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#6C7834"}},"factoryArguments"),e("span",{style:{color:"#8E8F8B"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"["),e("span",{style:{color:"#B56959"}},"'authorId'"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"=>"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},`"request.attributes.get('authorId')"`),e("span",{style:{color:"#8E8F8B"}},"],")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},")"),e("span",{style:{color:"#393A34"}},"]")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#AB5959"}},"class"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"Book"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"implements"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"ResourceInterface")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"{")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"}")])])])],-1),N4={__name:"49",setup(s){const n={srcSequence:"./pages/05_resource_factories.md"};return I(N),(o,t)=>{const r=Ee,l=Re;return C(),P(ee,X(Q(n)),{default:b(()=>[P4,R(l,null,{default:b(()=>[O4,R(r,_e({},{ranges:["all","15"]}),{default:b(()=>[L4]),_:1},16)]),_:1})]),_:1},16)}}},q4=q(N4,[["__file","/@slidev/slides/49.md"]]),U4=e("h1",null,"Use a callable for your custom factory",-1),H4=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#758575"}},"// src/Factory/BookRepository.php")]),a(`
`),e("span",{class:"line"}),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#4D9375"}},"declare"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#D4976C"}},"strict_types"),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#6394BF"}},"1"),e("span",{style:{color:"#858585"}},");")]),a(`
`),e("span",{class:"line"}),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#4D9375"}},"namespace"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"App"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#A1B567"}},"Factory"),e("span",{style:{color:"#858585"}},";")]),a(`
`),e("span",{class:"line"}),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#4D9375"}},"use"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"App"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#E0A569"}},"Entity"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#E0A569"}},"Book"),e("span",{style:{color:"#858585"}},";")]),a(`
`),e("span",{class:"line"}),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#CB7676"}},"final"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"class"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"BookFactory")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"{"),e("span",{style:{color:"#DBD7CA"}},"    ")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#CB7676"}},"public"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"static"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"function"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"create"),e("span",{style:{color:"#858585"}},"()"),e("span",{style:{color:"#CB7676"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"Book")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#858585"}},"{")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#4D9375"}},"return"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#4D9375"}},"new"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"Book"),e("span",{style:{color:"#858585"}},"();")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#858585"}},"}")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"}")])])]),e("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#A0ADA0"}},"// src/Factory/BookRepository.php")]),a(`
`),e("span",{class:"line"}),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#1C6B48"}},"declare"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#A65E2B"}},"strict_types"),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#296AA3"}},"1"),e("span",{style:{color:"#8E8F8B"}},");")]),a(`
`),e("span",{class:"line"}),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#1C6B48"}},"namespace"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"App"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#6C7834"}},"Factory"),e("span",{style:{color:"#8E8F8B"}},";")]),a(`
`),e("span",{class:"line"}),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#1C6B48"}},"use"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B58451"}},"App"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#B58451"}},"Entity"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#B58451"}},"Book"),e("span",{style:{color:"#8E8F8B"}},";")]),a(`
`),e("span",{class:"line"}),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#AB5959"}},"final"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"class"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"BookFactory")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"{"),e("span",{style:{color:"#393A34"}},"    ")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#AB5959"}},"public"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"static"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"function"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"create"),e("span",{style:{color:"#8E8F8B"}},"()"),e("span",{style:{color:"#AB5959"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B58451"}},"Book")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#8E8F8B"}},"{")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#1C6B48"}},"return"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#1C6B48"}},"new"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B58451"}},"Book"),e("span",{style:{color:"#8E8F8B"}},"();")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#8E8F8B"}},"}")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"}")])])])],-1),V4={__name:"50",setup(s){const n={srcSequence:"./pages/05_resource_factories.md"};return I(N),(o,t)=>{const r=Ee;return C(),P(ee,X(Q(n)),{default:b(()=>[U4,R(r,_e({},{ranges:["all","9","11","13"]}),{default:b(()=>[H4]),_:1},16)]),_:1},16)}}},j4=q(V4,[["__file","/@slidev/slides/50.md"]]),G4=e("h1",null,"Use it on your operation",-1),W4=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#758575"}},"// src/Entity/Book.php")]),a(`
`),e("span",{class:"line"}),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#4D9375"}},"declare"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#D4976C"}},"strict_types"),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#6394BF"}},"1"),e("span",{style:{color:"#858585"}},");")]),a(`
`),e("span",{class:"line"}),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#4D9375"}},"namespace"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"App"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#A1B567"}},"Entity"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#A1B567"}},"Book"),e("span",{style:{color:"#858585"}},";")]),a(`
`),e("span",{class:"line"}),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#4D9375"}},"use"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"App"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#E0A569"}},"Entity"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#E0A569"}},"Book"),e("span",{style:{color:"#858585"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#4D9375"}},"use"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"App"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#E0A569"}},"Factory"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#E0A569"}},"BookFactory"),e("span",{style:{color:"#858585"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#4D9375"}},"use"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"Sylius"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#E0A569"}},"Component"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#E0A569"}},"Resource"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#E0A569"}},"Metadata"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#E0A569"}},"Create"),e("span",{style:{color:"#858585"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#4D9375"}},"use"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"Sylius"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#E0A569"}},"Component"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#E0A569"}},"Resource"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#E0A569"}},"Metadata"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#E0A569"}},"Resource"),e("span",{style:{color:"#858585"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#4D9375"}},"use"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"Sylius"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#E0A569"}},"Component"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#E0A569"}},"Resource"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#E0A569"}},"Model"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#E0A569"}},"ResourceInterface"),e("span",{style:{color:"#858585"}},";")]),a(`
`),e("span",{class:"line"}),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"#["),e("span",{style:{color:"#E0A569"}},"Resource"),e("span",{style:{color:"#DBD7CA"}},"]")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"#["),e("span",{style:{color:"#E0A569"}},"Create"),e("span",{style:{color:"#858585"}},"(")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#A1B567"}},"factory"),e("span",{style:{color:"#858585"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"["),e("span",{style:{color:"#E0A569"}},"BookFactory"),e("span",{style:{color:"#CB7676"}},"::"),e("span",{style:{color:"#4D9375"}},"class"),e("span",{style:{color:"#858585"}},","),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},"'create'"),e("span",{style:{color:"#858585"}},"],"),e("span",{style:{color:"#DBD7CA"}}," ")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},")"),e("span",{style:{color:"#DBD7CA"}},"]")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#CB7676"}},"class"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"Book"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"implements"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#E0A569"}},"Sylius"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#E0A569"}},"Component"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#E0A569"}},"Resource"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#E0A569"}},"Model"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#A1B567"}},"ResourceInterface")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"{")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"}")])])]),e("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#A0ADA0"}},"// src/Entity/Book.php")]),a(`
`),e("span",{class:"line"}),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#1C6B48"}},"declare"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#A65E2B"}},"strict_types"),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#296AA3"}},"1"),e("span",{style:{color:"#8E8F8B"}},");")]),a(`
`),e("span",{class:"line"}),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#1C6B48"}},"namespace"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"App"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#6C7834"}},"Entity"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#6C7834"}},"Book"),e("span",{style:{color:"#8E8F8B"}},";")]),a(`
`),e("span",{class:"line"}),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#1C6B48"}},"use"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B58451"}},"App"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#B58451"}},"Entity"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#B58451"}},"Book"),e("span",{style:{color:"#8E8F8B"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#1C6B48"}},"use"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B58451"}},"App"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#B58451"}},"Factory"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#B58451"}},"BookFactory"),e("span",{style:{color:"#8E8F8B"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#1C6B48"}},"use"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B58451"}},"Sylius"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#B58451"}},"Component"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#B58451"}},"Resource"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#B58451"}},"Metadata"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#B58451"}},"Create"),e("span",{style:{color:"#8E8F8B"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#1C6B48"}},"use"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B58451"}},"Sylius"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#B58451"}},"Component"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#B58451"}},"Resource"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#B58451"}},"Metadata"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#B58451"}},"Resource"),e("span",{style:{color:"#8E8F8B"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#1C6B48"}},"use"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B58451"}},"Sylius"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#B58451"}},"Component"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#B58451"}},"Resource"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#B58451"}},"Model"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#B58451"}},"ResourceInterface"),e("span",{style:{color:"#8E8F8B"}},";")]),a(`
`),e("span",{class:"line"}),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"#["),e("span",{style:{color:"#B58451"}},"Resource"),e("span",{style:{color:"#393A34"}},"]")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"#["),e("span",{style:{color:"#B58451"}},"Create"),e("span",{style:{color:"#8E8F8B"}},"(")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#6C7834"}},"factory"),e("span",{style:{color:"#8E8F8B"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"["),e("span",{style:{color:"#B58451"}},"BookFactory"),e("span",{style:{color:"#AB5959"}},"::"),e("span",{style:{color:"#1C6B48"}},"class"),e("span",{style:{color:"#8E8F8B"}},","),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},"'create'"),e("span",{style:{color:"#8E8F8B"}},"],"),e("span",{style:{color:"#393A34"}}," ")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},")"),e("span",{style:{color:"#393A34"}},"]")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#AB5959"}},"class"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"Book"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"implements"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#B58451"}},"Sylius"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#B58451"}},"Component"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#B58451"}},"Resource"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#B58451"}},"Model"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#6C7834"}},"ResourceInterface")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"{")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"}")])])])],-1),z4={__name:"51",setup(s){const n={srcSequence:"./pages/05_resource_factories.md"};return I(N),(o,t)=>{const r=Ee;return C(),P(ee,X(Q(n)),{default:b(()=>[G4,R(r,_e({},{ranges:["all","15"]}),{default:b(()=>[W4]),_:1},16)]),_:1},16)}}},K4=q(z4,[["__file","/@slidev/slides/51.md"]]),Y4=e("h1",null,"Providers",-1),Z4=e("p",null,"Providers retrieve data from your persistence layer.",-1),Q4={__name:"52",setup(s){const n={srcSequence:"./pages/06_providers.md"};return I(N),(o,t)=>{const r=Re;return C(),P(ee,X(Q(n)),{default:b(()=>[Y4,R(r,null,{default:b(()=>[Z4]),_:1})]),_:1},16)}}},J4=q(Q4,[["__file","/@slidev/slides/52.md"]]),X4=e("h1",null,"Default providers",-1),ek=e("p",null,[a("When your resource is a Doctrine entity, there’s a default provider "),e("code",null,"Sylius\\Component\\Resource\\Symfony\\Request\\State\\Provider"),a(" which is already configured to your operations.")],-1),sk=e("p",null,"As it uses the Doctrine repository configured on your resource, some default repository methods are used.",-1),nk=e("table",null,[e("thead",null,[e("tr",null,[e("th",null,"Operation"),e("th",null,"Repository method")])]),e("tbody",null,[e("tr",null,[e("td",null,"index"),e("td",null,"createPaginator")]),e("tr",null,[e("td",null,"show"),e("td",null,"findOneBy")]),e("tr",null,[e("td",null,"update"),e("td",null,"findOneBy")]),e("tr",null,[e("td",null,"delete"),e("td",null,"findOneBy")]),e("tr",null,[e("td",null,"bulk delete"),e("td",null,"findById")])])],-1),ok={__name:"53",setup(s){const n={srcSequence:"./pages/06_providers.md"};return I(N),(o,t)=>{const r=Re;return C(),P(ee,X(Q(n)),{default:b(()=>[X4,R(r,null,{default:b(()=>[ek,sk,nk]),_:1})]),_:1},16)}}},tk=q(ok,[["__file","/@slidev/slides/53.md"]]),rk=e("h1",null,"Custom repository method",-1),lk=e("p",null,"You can customize the method to use.",-1),ak=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#758575"}},"// src/Entity/Customer.php")]),a(`
`),e("span",{class:"line"}),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#4D9375"}},"declare"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#D4976C"}},"strict_types"),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#6394BF"}},"1"),e("span",{style:{color:"#858585"}},");")]),a(`
`),e("span",{class:"line"}),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#4D9375"}},"namespace"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"App"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#A1B567"}},"Entity"),e("span",{style:{color:"#858585"}},";")]),a(`
`),e("span",{class:"line"}),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"#["),e("span",{style:{color:"#E0A569"}},"Resource"),e("span",{style:{color:"#DBD7CA"}},"]")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"#["),e("span",{style:{color:"#E0A569"}},"Show"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#A1B567"}},"repositoryMethod"),e("span",{style:{color:"#858585"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},"'findOneByEmail'"),e("span",{style:{color:"#858585"}},")"),e("span",{style:{color:"#DBD7CA"}},"]")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#CB7676"}},"final"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"class"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"Customer"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"implements"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"ResourceInterface")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"{")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"    "),e("span",{style:{color:"#758575"}},"// [...]")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"}")])])]),e("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#A0ADA0"}},"// src/Entity/Customer.php")]),a(`
`),e("span",{class:"line"}),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#1C6B48"}},"declare"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#A65E2B"}},"strict_types"),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#296AA3"}},"1"),e("span",{style:{color:"#8E8F8B"}},");")]),a(`
`),e("span",{class:"line"}),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#1C6B48"}},"namespace"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"App"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#6C7834"}},"Entity"),e("span",{style:{color:"#8E8F8B"}},";")]),a(`
`),e("span",{class:"line"}),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"#["),e("span",{style:{color:"#B58451"}},"Resource"),e("span",{style:{color:"#393A34"}},"]")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"#["),e("span",{style:{color:"#B58451"}},"Show"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#6C7834"}},"repositoryMethod"),e("span",{style:{color:"#8E8F8B"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},"'findOneByEmail'"),e("span",{style:{color:"#8E8F8B"}},")"),e("span",{style:{color:"#393A34"}},"]")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#AB5959"}},"final"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"class"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"Customer"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"implements"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"ResourceInterface")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"{")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"    "),e("span",{style:{color:"#A0ADA0"}},"// [...]")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"}")])])])],-1),ck={__name:"54",setup(s){const n={srcSequence:"./pages/06_providers.md"};return I(N),(o,t)=>{const r=Ee,l=Re;return C(),P(ee,X(Q(n)),{default:b(()=>[rk,R(l,null,{default:b(()=>[lk,R(r,_e({},{ranges:["all","8"]}),{default:b(()=>[ak]),_:1},16)]),_:1})]),_:1},16)}}},ik=q(ck,[["__file","/@slidev/slides/54.md"]]),pk=e("h1",null,"Custom repository arguments",-1),uk=e("p",null,"You can pass arguments to your repository method.",-1),yk=e("p",null,"3 variables are available:",-1),dk=e("ul",null,[e("li",null,[e("code",null,"request"),a(": to retrieve data from the request via "),e("code",null,"Symfony\\Component\\HttpFoundation\\Request")]),e("li",null,[e("code",null,"token"),a(": to retrieve data from the authentication token via "),e("code",null,"Symfony\\Component\\Security\\Core\\Authentication\\Token\\TokenInterface")]),e("li",null,[e("code",null,"user"),a(": to retrieve data from the logged-in user via "),e("code",null,"Symfony\\Component\\Security\\Core\\User\\UserInterface")])],-1),fk=e("p",null,[a("It uses the "),e("a",{href:"https://symfony.com/doc/current/components/expression_language.html",target:"_blank",rel:"noopener"},"Symfony expression language"),a(" component.")],-1),mk={__name:"55",setup(s){const n={srcSequence:"./pages/06_providers.md"};return I(N),(o,t)=>{const r=Re;return C(),P(ee,X(Q(n)),{default:b(()=>[pk,R(r,null,{default:b(()=>[uk,yk,dk,fk]),_:1})]),_:1},16)}}},hk=q(mk,[["__file","/@slidev/slides/55.md"]]),_k=e("h1",null,"Custom repository arguments",-1),gk=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#758575"}},"// src/Entity/Customer.php")]),a(`
`),e("span",{class:"line"}),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#4D9375"}},"declare"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#D4976C"}},"strict_types"),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#6394BF"}},"1"),e("span",{style:{color:"#858585"}},");")]),a(`
`),e("span",{class:"line"}),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#4D9375"}},"namespace"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"App"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#A1B567"}},"Entity"),e("span",{style:{color:"#858585"}},";")]),a(`
`),e("span",{class:"line"}),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"#["),e("span",{style:{color:"#E0A569"}},"Resource"),e("span",{style:{color:"#DBD7CA"}},"]")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"#["),e("span",{style:{color:"#E0A569"}},"Show"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#A1B567"}},"repositoryMethod"),e("span",{style:{color:"#858585"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},"'findOneByEmail'"),e("span",{style:{color:"#858585"}},","),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"repositoryArguments"),e("span",{style:{color:"#858585"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"["),e("span",{style:{color:"#C98A7D"}},"'email'"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"=>"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},`"request.attributes.get('email')"`),e("span",{style:{color:"#858585"}},"])"),e("span",{style:{color:"#DBD7CA"}},"]")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#CB7676"}},"final"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"class"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"Customer"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"implements"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"ResourceInterface")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"{")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"    "),e("span",{style:{color:"#758575"}},"// [...]")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"}")])])]),e("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#A0ADA0"}},"// src/Entity/Customer.php")]),a(`
`),e("span",{class:"line"}),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#1C6B48"}},"declare"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#A65E2B"}},"strict_types"),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#296AA3"}},"1"),e("span",{style:{color:"#8E8F8B"}},");")]),a(`
`),e("span",{class:"line"}),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#1C6B48"}},"namespace"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"App"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#6C7834"}},"Entity"),e("span",{style:{color:"#8E8F8B"}},";")]),a(`
`),e("span",{class:"line"}),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"#["),e("span",{style:{color:"#B58451"}},"Resource"),e("span",{style:{color:"#393A34"}},"]")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"#["),e("span",{style:{color:"#B58451"}},"Show"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#6C7834"}},"repositoryMethod"),e("span",{style:{color:"#8E8F8B"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},"'findOneByEmail'"),e("span",{style:{color:"#8E8F8B"}},","),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"repositoryArguments"),e("span",{style:{color:"#8E8F8B"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"["),e("span",{style:{color:"#B56959"}},"'email'"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"=>"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},`"request.attributes.get('email')"`),e("span",{style:{color:"#8E8F8B"}},"])"),e("span",{style:{color:"#393A34"}},"]")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#AB5959"}},"final"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"class"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"Customer"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"implements"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"ResourceInterface")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"{")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"    "),e("span",{style:{color:"#A0ADA0"}},"// [...]")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"}")])])])],-1),Bk={__name:"56",setup(s){const n={srcSequence:"./pages/06_providers.md"};return I(N),(o,t)=>{const r=Ee;return C(),P(ee,X(Q(n)),{default:b(()=>[_k,R(r,_e({},{ranges:["all","8"]}),{default:b(()=>[gk]),_:1},16)]),_:1},16)}}},Ak=q(Bk,[["__file","/@slidev/slides/56.md"]]),vk=e("h1",null,"Custom providers",-1),Ck=e("p",null,"Custom providers are useful to customize your logic to retrieve data and for an advanced usage such as an hexagonal architecture.",-1),Ek=e("p",null,[a("As an example, let’s configure a "),e("code",null,"BoardGameItemProvider"),a(" on a "),e("code",null,"BoardGameResource"),a(" which is not a Doctrine entity.")],-1),bk={__name:"57",setup(s){const n={srcSequence:"./pages/06_providers.md"};return I(N),(o,t)=>{const r=Re;return C(),P(ee,X(Q(n)),{default:b(()=>[vk,R(r,null,{default:b(()=>[Ck,Ek]),_:1})]),_:1},16)}}},kk=q(bk,[["__file","/@slidev/slides/57.md"]]),Dk=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#758575"}},"// src/BoardGameBlog/Infrastructure/Sylius/State/Provider/BoardGameItemProvider.php")]),a(`
`),e("span",{class:"line"}),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#4D9375"}},"declare"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#D4976C"}},"strict_types"),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#6394BF"}},"1"),e("span",{style:{color:"#858585"}},");")]),a(`
`),e("span",{class:"line"}),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#4D9375"}},"namespace"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"App"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#A1B567"}},"BoardGameBlog"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#A1B567"}},"Infrastructure"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#A1B567"}},"Sylius"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#A1B567"}},"State"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#A1B567"}},"Provider"),e("span",{style:{color:"#858585"}},";")]),a(`
`),e("span",{class:"line"}),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#CB7676"}},"final"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"class"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"BoardGameItemProvider"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"implements"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"ProviderInterface")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"{")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#CB7676"}},"public"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"function"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"__construct"),e("span",{style:{color:"#858585"}},"(")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#CB7676"}},"private"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"QueryBusInterface"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"$"),e("span",{style:{color:"#B8A965"}},"queryBus"),e("span",{style:{color:"#858585"}},",")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#858585"}},")"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"{")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#858585"}},"}")]),a(`
`),e("span",{class:"line"}),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#CB7676"}},"public"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"function"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"provide"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#E0A569"}},"Operation"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"$"),e("span",{style:{color:"#B8A965"}},"operation"),e("span",{style:{color:"#858585"}},","),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"Context"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"$"),e("span",{style:{color:"#B8A965"}},"context"),e("span",{style:{color:"#858585"}},")"),e("span",{style:{color:"#CB7676"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#4D9375"}},"object"),e("span",{style:{color:"#858585"}},"|"),e("span",{style:{color:"#4D9375"}},"iterable"),e("span",{style:{color:"#858585"}},"|"),e("span",{style:{color:"#4D9375"}},"null")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#858585"}},"{")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#858585"}},"$"),e("span",{style:{color:"#B8A965"}},"request"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"$"),e("span",{style:{color:"#B8A965"}},"context"),e("span",{style:{color:"#CB7676"}},"->"),e("span",{style:{color:"#A1B567"}},"get"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#E0A569"}},"RequestOption"),e("span",{style:{color:"#CB7676"}},"::"),e("span",{style:{color:"#4D9375"}},"class"),e("span",{style:{color:"#858585"}},")"),e("span",{style:{color:"#CB7676"}},"?->"),e("span",{style:{color:"#A1B567"}},"request"),e("span",{style:{color:"#858585"}},"();")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#E0A569"}},"Assert"),e("span",{style:{color:"#CB7676"}},"::"),e("span",{style:{color:"#A1B567"}},"notNull"),e("span",{style:{color:"#858585"}},"($"),e("span",{style:{color:"#B8A965"}},"request"),e("span",{style:{color:"#858585"}},");")]),a(`
`),e("span",{class:"line"}),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#858585"}},"$"),e("span",{style:{color:"#B8A965"}},"id"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#CB7676"}},"string"),e("span",{style:{color:"#858585"}},")"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"$"),e("span",{style:{color:"#B8A965"}},"request"),e("span",{style:{color:"#CB7676"}},"->"),e("span",{style:{color:"#B8A965"}},"attributes"),e("span",{style:{color:"#CB7676"}},"->"),e("span",{style:{color:"#A1B567"}},"get"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#C98A7D"}},"'id'"),e("span",{style:{color:"#858585"}},");")]),a(`
`),e("span",{class:"line"}),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#858585"}},"$"),e("span",{style:{color:"#B8A965"}},"model"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"$"),e("span",{style:{color:"#D4976C"}},"this"),e("span",{style:{color:"#CB7676"}},"->"),e("span",{style:{color:"#B8A965"}},"queryBus"),e("span",{style:{color:"#CB7676"}},"->"),e("span",{style:{color:"#A1B567"}},"ask"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#4D9375"}},"new"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"FindBoardGameQuery"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#4D9375"}},"new"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"BoardGameId"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#E0A569"}},"Uuid"),e("span",{style:{color:"#CB7676"}},"::"),e("span",{style:{color:"#A1B567"}},"fromString"),e("span",{style:{color:"#858585"}},"($"),e("span",{style:{color:"#B8A965"}},"id"),e("span",{style:{color:"#858585"}},"))));")]),a(`
`),e("span",{class:"line"}),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#4D9375"}},"return"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#D4976C"}},"null"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"!=="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"$"),e("span",{style:{color:"#B8A965"}},"model"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"?"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"BoardGameResource"),e("span",{style:{color:"#CB7676"}},"::"),e("span",{style:{color:"#A1B567"}},"fromModel"),e("span",{style:{color:"#858585"}},"($"),e("span",{style:{color:"#B8A965"}},"model"),e("span",{style:{color:"#858585"}},")"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#D4976C"}},"null"),e("span",{style:{color:"#858585"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#858585"}},"}")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"}")])])]),e("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#A0ADA0"}},"// src/BoardGameBlog/Infrastructure/Sylius/State/Provider/BoardGameItemProvider.php")]),a(`
`),e("span",{class:"line"}),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#1C6B48"}},"declare"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#A65E2B"}},"strict_types"),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#296AA3"}},"1"),e("span",{style:{color:"#8E8F8B"}},");")]),a(`
`),e("span",{class:"line"}),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#1C6B48"}},"namespace"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"App"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#6C7834"}},"BoardGameBlog"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#6C7834"}},"Infrastructure"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#6C7834"}},"Sylius"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#6C7834"}},"State"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#6C7834"}},"Provider"),e("span",{style:{color:"#8E8F8B"}},";")]),a(`
`),e("span",{class:"line"}),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#AB5959"}},"final"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"class"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"BoardGameItemProvider"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"implements"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"ProviderInterface")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"{")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#AB5959"}},"public"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"function"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B58451"}},"__construct"),e("span",{style:{color:"#8E8F8B"}},"(")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#AB5959"}},"private"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B58451"}},"QueryBusInterface"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"$"),e("span",{style:{color:"#8C862B"}},"queryBus"),e("span",{style:{color:"#8E8F8B"}},",")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#8E8F8B"}},")"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"{")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#8E8F8B"}},"}")]),a(`
`),e("span",{class:"line"}),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#AB5959"}},"public"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"function"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"provide"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#B58451"}},"Operation"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"$"),e("span",{style:{color:"#8C862B"}},"operation"),e("span",{style:{color:"#8E8F8B"}},","),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B58451"}},"Context"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"$"),e("span",{style:{color:"#8C862B"}},"context"),e("span",{style:{color:"#8E8F8B"}},")"),e("span",{style:{color:"#AB5959"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#1C6B48"}},"object"),e("span",{style:{color:"#8E8F8B"}},"|"),e("span",{style:{color:"#1C6B48"}},"iterable"),e("span",{style:{color:"#8E8F8B"}},"|"),e("span",{style:{color:"#1C6B48"}},"null")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#8E8F8B"}},"{")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#8E8F8B"}},"$"),e("span",{style:{color:"#8C862B"}},"request"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"$"),e("span",{style:{color:"#8C862B"}},"context"),e("span",{style:{color:"#AB5959"}},"->"),e("span",{style:{color:"#6C7834"}},"get"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#B58451"}},"RequestOption"),e("span",{style:{color:"#AB5959"}},"::"),e("span",{style:{color:"#1C6B48"}},"class"),e("span",{style:{color:"#8E8F8B"}},")"),e("span",{style:{color:"#AB5959"}},"?->"),e("span",{style:{color:"#6C7834"}},"request"),e("span",{style:{color:"#8E8F8B"}},"();")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#B58451"}},"Assert"),e("span",{style:{color:"#AB5959"}},"::"),e("span",{style:{color:"#6C7834"}},"notNull"),e("span",{style:{color:"#8E8F8B"}},"($"),e("span",{style:{color:"#8C862B"}},"request"),e("span",{style:{color:"#8E8F8B"}},");")]),a(`
`),e("span",{class:"line"}),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#8E8F8B"}},"$"),e("span",{style:{color:"#8C862B"}},"id"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#AB5959"}},"string"),e("span",{style:{color:"#8E8F8B"}},")"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"$"),e("span",{style:{color:"#8C862B"}},"request"),e("span",{style:{color:"#AB5959"}},"->"),e("span",{style:{color:"#8C862B"}},"attributes"),e("span",{style:{color:"#AB5959"}},"->"),e("span",{style:{color:"#6C7834"}},"get"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#B56959"}},"'id'"),e("span",{style:{color:"#8E8F8B"}},");")]),a(`
`),e("span",{class:"line"}),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#8E8F8B"}},"$"),e("span",{style:{color:"#8C862B"}},"model"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"$"),e("span",{style:{color:"#A65E2B"}},"this"),e("span",{style:{color:"#AB5959"}},"->"),e("span",{style:{color:"#8C862B"}},"queryBus"),e("span",{style:{color:"#AB5959"}},"->"),e("span",{style:{color:"#6C7834"}},"ask"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#1C6B48"}},"new"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B58451"}},"FindBoardGameQuery"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#1C6B48"}},"new"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B58451"}},"BoardGameId"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#B58451"}},"Uuid"),e("span",{style:{color:"#AB5959"}},"::"),e("span",{style:{color:"#6C7834"}},"fromString"),e("span",{style:{color:"#8E8F8B"}},"($"),e("span",{style:{color:"#8C862B"}},"id"),e("span",{style:{color:"#8E8F8B"}},"))));")]),a(`
`),e("span",{class:"line"}),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#1C6B48"}},"return"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#A65E2B"}},"null"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"!=="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"$"),e("span",{style:{color:"#8C862B"}},"model"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"?"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B58451"}},"BoardGameResource"),e("span",{style:{color:"#AB5959"}},"::"),e("span",{style:{color:"#6C7834"}},"fromModel"),e("span",{style:{color:"#8E8F8B"}},"($"),e("span",{style:{color:"#8C862B"}},"model"),e("span",{style:{color:"#8E8F8B"}},")"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#A65E2B"}},"null"),e("span",{style:{color:"#8E8F8B"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#8E8F8B"}},"}")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"}")])])])],-1),wk={__name:"58",setup(s){const n={srcSequence:"./pages/06_providers.md"};return I(N),(o,t)=>{const r=Ee;return C(),P(ee,X(Q(n)),{default:b(()=>[R(r,_e({},{ranges:["all","7","7,5","10","14","16-17","19","21","23"]}),{default:b(()=>[Dk]),_:1},16)]),_:1},16)}}},Sk=q(wk,[["__file","/@slidev/slides/58.md"]]),Rk=e("h1",null,"Use this provider on your operation.",-1),xk=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#758575"}},"// src/BoardGameBlog/Infrastructure/Sylius/Resource/BoardGameResource.php")]),a(`
`),e("span",{class:"line"}),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#4D9375"}},"declare"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#D4976C"}},"strict_types"),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#6394BF"}},"1"),e("span",{style:{color:"#858585"}},");")]),a(`
`),e("span",{class:"line"}),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#4D9375"}},"namespace"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"App"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#A1B567"}},"BoardGameBlog"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#A1B567"}},"Infrastructure"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#A1B567"}},"Sylius"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#A1B567"}},"Resource"),e("span",{style:{color:"#858585"}},";")]),a(`
`),e("span",{class:"line"}),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#4D9375"}},"use"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"App"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#E0A569"}},"BoardGameBlog"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#E0A569"}},"Infrastructure"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#E0A569"}},"Sylius"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#E0A569"}},"State"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#E0A569"}},"Provider"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#E0A569"}},"BoardGameItemProvider"),e("span",{style:{color:"#858585"}},";")]),a(`
`),e("span",{class:"line"}),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"#["),e("span",{style:{color:"#E0A569"}},"Resource"),e("span",{style:{color:"#DBD7CA"}},"]")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"#["),e("span",{style:{color:"#E0A569"}},"Show"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#A1B567"}},"provider"),e("span",{style:{color:"#858585"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"BoardGameItemProvider"),e("span",{style:{color:"#CB7676"}},"::"),e("span",{style:{color:"#4D9375"}},"class"),e("span",{style:{color:"#858585"}},")"),e("span",{style:{color:"#DBD7CA"}},"]")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#CB7676"}},"final"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"class"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"BoardGameResource"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"implements"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"ResourceInterface")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"{")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"    "),e("span",{style:{color:"#758575"}},"// [...]")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"}")])])]),e("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#A0ADA0"}},"// src/BoardGameBlog/Infrastructure/Sylius/Resource/BoardGameResource.php")]),a(`
`),e("span",{class:"line"}),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#1C6B48"}},"declare"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#A65E2B"}},"strict_types"),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#296AA3"}},"1"),e("span",{style:{color:"#8E8F8B"}},");")]),a(`
`),e("span",{class:"line"}),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#1C6B48"}},"namespace"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"App"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#6C7834"}},"BoardGameBlog"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#6C7834"}},"Infrastructure"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#6C7834"}},"Sylius"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#6C7834"}},"Resource"),e("span",{style:{color:"#8E8F8B"}},";")]),a(`
`),e("span",{class:"line"}),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#1C6B48"}},"use"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B58451"}},"App"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#B58451"}},"BoardGameBlog"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#B58451"}},"Infrastructure"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#B58451"}},"Sylius"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#B58451"}},"State"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#B58451"}},"Provider"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#B58451"}},"BoardGameItemProvider"),e("span",{style:{color:"#8E8F8B"}},";")]),a(`
`),e("span",{class:"line"}),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"#["),e("span",{style:{color:"#B58451"}},"Resource"),e("span",{style:{color:"#393A34"}},"]")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"#["),e("span",{style:{color:"#B58451"}},"Show"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#6C7834"}},"provider"),e("span",{style:{color:"#8E8F8B"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B58451"}},"BoardGameItemProvider"),e("span",{style:{color:"#AB5959"}},"::"),e("span",{style:{color:"#1C6B48"}},"class"),e("span",{style:{color:"#8E8F8B"}},")"),e("span",{style:{color:"#393A34"}},"]")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#AB5959"}},"final"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"class"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"BoardGameResource"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"implements"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"ResourceInterface")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"{")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"    "),e("span",{style:{color:"#A0ADA0"}},"// [...]")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"}")])])])],-1),Fk={__name:"59",setup(s){const n={srcSequence:"./pages/06_providers.md"};return I(N),(o,t)=>{const r=Ee;return C(),P(ee,X(Q(n)),{default:b(()=>[Rk,R(r,_e({},{ranges:["all","10","10,7"]}),{default:b(()=>[xk]),_:1},16)]),_:1},16)}}},$k=q(Fk,[["__file","/@slidev/slides/59.md"]]),Ik=e("h1",null,"Processors",-1),Tk=e("p",null,"Processors process data: send an email, persist to storage, add to queue etc.",-1),Mk={__name:"60",setup(s){const n={srcSequence:"./pages/07_processors.md"};return I(N),(o,t)=>{const r=Re;return C(),P(ee,X(Q(n)),{default:b(()=>[Ik,R(r,null,{default:b(()=>[Tk]),_:1})]),_:1},16)}}},Pk=q(Mk,[["__file","/@slidev/slides/60.md"]]),Ok=e("h1",null,"Default processors",-1),Lk=e("p",null,"When your resource is a Doctrine entity, there are default processors which are already configured to your operations.",-1),Nk=e("p",null,"As it uses the Doctrine repository configured on your resource, it will automatically flush data for you.",-1),qk=e("table",null,[e("thead",null,[e("tr",null,[e("th",null,"Operation"),e("th",null,"Processor")])]),e("tbody",null,[e("tr",null,[e("td",null,"create"),e("td",null,"Sylius\\Component\\Resource\\Doctrine\\Common\\State\\PersistProcessor")]),e("tr",null,[e("td",null,"update"),e("td",null,"Sylius\\Component\\Resource\\Doctrine\\Common\\State\\PersistProcessor")]),e("tr",null,[e("td",null,"delete"),e("td",null,"Sylius\\Component\\Resource\\Doctrine\\Common\\State\\RemoveProcessor")]),e("tr",null,[e("td",null,"bulk delete"),e("td",null,"Sylius\\Component\\Resource\\Doctrine\\Common\\State\\RemoveProcessor")])])],-1),Uk={__name:"61",setup(s){const n={srcSequence:"./pages/07_processors.md"};return I(N),(o,t)=>{const r=Re;return C(),P(ee,X(Q(n)),{default:b(()=>[Ok,R(r,null,{default:b(()=>[Lk,Nk,qk]),_:1})]),_:1},16)}}},Hk=q(Uk,[["__file","/@slidev/slides/61.md"]]),Vk=e("h1",null,"Custom processors",-1),jk=e("p",null,"Custom processors are useful to customize your logic to send an email, persist data to storage, add to queue and for an advanced usage such as an hexagonal architecture.",-1),Gk={__name:"62",setup(s){const n={srcSequence:"./pages/07_processors.md"};return I(N),(o,t)=>{const r=Re;return C(),P(ee,X(Q(n)),{default:b(()=>[Vk,R(r,null,{default:b(()=>[jk]),_:1})]),_:1},16)}}},Wk=q(Gk,[["__file","/@slidev/slides/62.md"]]),zk=e("h1",null,"Example #1: Sending an email after persisting data",-1),Kk=e("p",null,"As an example, send an email after customer registration",-1),Yk={__name:"63",setup(s){const n={srcSequence:"./pages/07_processors.md"};return I(N),(o,t)=>(C(),P(ee,X(Q(n)),{default:b(()=>[zk,Kk]),_:1},16))}},Zk=q(Yk,[["__file","/@slidev/slides/63.md"]]),Qk=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#758575"}},"// src/Sylius/State/Processor/CreateCustomerProcessor.php")]),a(`
`),e("span",{class:"line"}),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#4D9375"}},"namespace"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"App"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#A1B567"}},"Sylius"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#A1B567"}},"State"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#A1B567"}},"Processor"),e("span",{style:{color:"#858585"}},";")]),a(`
`),e("span",{class:"line"}),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#4D9375"}},"use"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"Sylius"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#E0A569"}},"Component"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#E0A569"}},"Customer"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#E0A569"}},"Model"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#E0A569"}},"CustomerInterface"),e("span",{style:{color:"#858585"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#4D9375"}},"use"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"Sylius"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#E0A569"}},"Component"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#E0A569"}},"Resource"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#E0A569"}},"Doctrine"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#E0A569"}},"Common"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#E0A569"}},"State"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#E0A569"}},"PersistProcessor"),e("span",{style:{color:"#858585"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#4D9375"}},"use"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"Sylius"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#E0A569"}},"Component"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#E0A569"}},"Resource"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#E0A569"}},"State"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#E0A569"}},"ProcessorInterface"),e("span",{style:{color:"#858585"}},";")]),a(`
`),e("span",{class:"line"}),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#CB7676"}},"final"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"class"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"CreateCustomerProcessor"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"implements"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"ProcessorInterface")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"{")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#CB7676"}},"public"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"function"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"__construct"),e("span",{style:{color:"#858585"}},"(")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#CB7676"}},"private"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"CommandBusInterface"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"$"),e("span",{style:{color:"#B8A965"}},"commandBus"),e("span",{style:{color:"#858585"}},",")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#CB7676"}},"private"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"PersistProcessor"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"$"),e("span",{style:{color:"#B8A965"}},"decorated"),e("span",{style:{color:"#858585"}},",")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#858585"}},")"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"{")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#858585"}},"}")]),a(`
`),e("span",{class:"line"}),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#CB7676"}},"public"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"function"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"process"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#4D9375"}},"mixed"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"$"),e("span",{style:{color:"#B8A965"}},"data"),e("span",{style:{color:"#858585"}},","),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"Operation"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"$"),e("span",{style:{color:"#B8A965"}},"operation"),e("span",{style:{color:"#858585"}},","),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"Context"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"$"),e("span",{style:{color:"#B8A965"}},"context"),e("span",{style:{color:"#858585"}},")"),e("span",{style:{color:"#CB7676"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#4D9375"}},"mixed")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#858585"}},"{")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#E0A569"}},"Assert"),e("span",{style:{color:"#CB7676"}},"::"),e("span",{style:{color:"#A1B567"}},"isInstanceOf"),e("span",{style:{color:"#858585"}},"($"),e("span",{style:{color:"#B8A965"}},"data"),e("span",{style:{color:"#858585"}},","),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"Customer"),e("span",{style:{color:"#CB7676"}},"::"),e("span",{style:{color:"#4D9375"}},"class"),e("span",{style:{color:"#858585"}},");")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        ")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#858585"}},"$"),e("span",{style:{color:"#D4976C"}},"this"),e("span",{style:{color:"#CB7676"}},"->"),e("span",{style:{color:"#B8A965"}},"decorated"),e("span",{style:{color:"#CB7676"}},"->"),e("span",{style:{color:"#A1B567"}},"process"),e("span",{style:{color:"#858585"}},"($"),e("span",{style:{color:"#B8A965"}},"data"),e("span",{style:{color:"#858585"}},","),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"$"),e("span",{style:{color:"#B8A965"}},"operation"),e("span",{style:{color:"#858585"}},","),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"$"),e("span",{style:{color:"#B8A965"}},"context"),e("span",{style:{color:"#858585"}},");")]),a(`
`),e("span",{class:"line"}),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"        "),e("span",{style:{color:"#758575"}},"// Here your logic to send a registration email.")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#858585"}},"$"),e("span",{style:{color:"#D4976C"}},"this"),e("span",{style:{color:"#CB7676"}},"->"),e("span",{style:{color:"#B8A965"}},"commandBus"),e("span",{style:{color:"#CB7676"}},"->"),e("span",{style:{color:"#A1B567"}},"dispatch"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#4D9375"}},"new"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"SendRegistrationEmailCommand"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#4D9375"}},"new"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"CustomerId"),e("span",{style:{color:"#858585"}},"($"),e("span",{style:{color:"#B8A965"}},"data"),e("span",{style:{color:"#CB7676"}},"->"),e("span",{style:{color:"#B8A965"}},"id"),e("span",{style:{color:"#858585"}},")));")]),a(`
`),e("span",{class:"line"}),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#4D9375"}},"return"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#D4976C"}},"null"),e("span",{style:{color:"#858585"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#858585"}},"}")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"}")])])]),e("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#A0ADA0"}},"// src/Sylius/State/Processor/CreateCustomerProcessor.php")]),a(`
`),e("span",{class:"line"}),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#1C6B48"}},"namespace"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"App"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#6C7834"}},"Sylius"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#6C7834"}},"State"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#6C7834"}},"Processor"),e("span",{style:{color:"#8E8F8B"}},";")]),a(`
`),e("span",{class:"line"}),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#1C6B48"}},"use"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B58451"}},"Sylius"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#B58451"}},"Component"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#B58451"}},"Customer"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#B58451"}},"Model"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#B58451"}},"CustomerInterface"),e("span",{style:{color:"#8E8F8B"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#1C6B48"}},"use"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B58451"}},"Sylius"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#B58451"}},"Component"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#B58451"}},"Resource"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#B58451"}},"Doctrine"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#B58451"}},"Common"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#B58451"}},"State"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#B58451"}},"PersistProcessor"),e("span",{style:{color:"#8E8F8B"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#1C6B48"}},"use"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B58451"}},"Sylius"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#B58451"}},"Component"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#B58451"}},"Resource"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#B58451"}},"State"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#B58451"}},"ProcessorInterface"),e("span",{style:{color:"#8E8F8B"}},";")]),a(`
`),e("span",{class:"line"}),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#AB5959"}},"final"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"class"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"CreateCustomerProcessor"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"implements"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"ProcessorInterface")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"{")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#AB5959"}},"public"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"function"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B58451"}},"__construct"),e("span",{style:{color:"#8E8F8B"}},"(")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#AB5959"}},"private"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B58451"}},"CommandBusInterface"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"$"),e("span",{style:{color:"#8C862B"}},"commandBus"),e("span",{style:{color:"#8E8F8B"}},",")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#AB5959"}},"private"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B58451"}},"PersistProcessor"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"$"),e("span",{style:{color:"#8C862B"}},"decorated"),e("span",{style:{color:"#8E8F8B"}},",")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#8E8F8B"}},")"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"{")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#8E8F8B"}},"}")]),a(`
`),e("span",{class:"line"}),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#AB5959"}},"public"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"function"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"process"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#1C6B48"}},"mixed"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"$"),e("span",{style:{color:"#8C862B"}},"data"),e("span",{style:{color:"#8E8F8B"}},","),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B58451"}},"Operation"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"$"),e("span",{style:{color:"#8C862B"}},"operation"),e("span",{style:{color:"#8E8F8B"}},","),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B58451"}},"Context"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"$"),e("span",{style:{color:"#8C862B"}},"context"),e("span",{style:{color:"#8E8F8B"}},")"),e("span",{style:{color:"#AB5959"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#1C6B48"}},"mixed")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#8E8F8B"}},"{")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#B58451"}},"Assert"),e("span",{style:{color:"#AB5959"}},"::"),e("span",{style:{color:"#6C7834"}},"isInstanceOf"),e("span",{style:{color:"#8E8F8B"}},"($"),e("span",{style:{color:"#8C862B"}},"data"),e("span",{style:{color:"#8E8F8B"}},","),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B58451"}},"Customer"),e("span",{style:{color:"#AB5959"}},"::"),e("span",{style:{color:"#1C6B48"}},"class"),e("span",{style:{color:"#8E8F8B"}},");")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        ")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#8E8F8B"}},"$"),e("span",{style:{color:"#A65E2B"}},"this"),e("span",{style:{color:"#AB5959"}},"->"),e("span",{style:{color:"#8C862B"}},"decorated"),e("span",{style:{color:"#AB5959"}},"->"),e("span",{style:{color:"#6C7834"}},"process"),e("span",{style:{color:"#8E8F8B"}},"($"),e("span",{style:{color:"#8C862B"}},"data"),e("span",{style:{color:"#8E8F8B"}},","),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"$"),e("span",{style:{color:"#8C862B"}},"operation"),e("span",{style:{color:"#8E8F8B"}},","),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"$"),e("span",{style:{color:"#8C862B"}},"context"),e("span",{style:{color:"#8E8F8B"}},");")]),a(`
`),e("span",{class:"line"}),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"        "),e("span",{style:{color:"#A0ADA0"}},"// Here your logic to send a registration email.")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#8E8F8B"}},"$"),e("span",{style:{color:"#A65E2B"}},"this"),e("span",{style:{color:"#AB5959"}},"->"),e("span",{style:{color:"#8C862B"}},"commandBus"),e("span",{style:{color:"#AB5959"}},"->"),e("span",{style:{color:"#6C7834"}},"dispatch"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#1C6B48"}},"new"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B58451"}},"SendRegistrationEmailCommand"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#1C6B48"}},"new"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B58451"}},"CustomerId"),e("span",{style:{color:"#8E8F8B"}},"($"),e("span",{style:{color:"#8C862B"}},"data"),e("span",{style:{color:"#AB5959"}},"->"),e("span",{style:{color:"#8C862B"}},"id"),e("span",{style:{color:"#8E8F8B"}},")));")]),a(`
`),e("span",{class:"line"}),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#1C6B48"}},"return"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#A65E2B"}},"null"),e("span",{style:{color:"#8E8F8B"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#8E8F8B"}},"}")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"}")])])])],-1),Jk={__name:"64",setup(s){const n={srcSequence:"./pages/07_processors.md"};return I(N),(o,t)=>{const r=Ee;return C(),P(ee,X(Q(n)),{default:b(()=>[R(r,_e({},{ranges:["all","9","12-13","17","19","21","23-24","26"]}),{default:b(()=>[Qk]),_:1},16)]),_:1},16)}}},Xk=q(Jk,[["__file","/@slidev/slides/64.md"]]),e9=e("h1",null,"Use this processor on your operation.",-1),s9=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#758575"}},"// src/Entity/Customer.php")]),a(`
`),e("span",{class:"line"}),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#4D9375"}},"namespace"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"App"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#A1B567"}},"Entity"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#A1B567"}},"Customer"),e("span",{style:{color:"#858585"}},";")]),a(`
`),e("span",{class:"line"}),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#4D9375"}},"use"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"App"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#E0A569"}},"Sylius"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#E0A569"}},"State"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#E0A569"}},"Processor"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#E0A569"}},"CreateCustomerProcessor"),e("span",{style:{color:"#858585"}},";")]),a(`
`),e("span",{class:"line"}),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"#["),e("span",{style:{color:"#E0A569"}},"Resource"),e("span",{style:{color:"#DBD7CA"}},"]")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"#["),e("span",{style:{color:"#E0A569"}},"Create"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#A1B567"}},"processor"),e("span",{style:{color:"#858585"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"CreateCustomerProcessor"),e("span",{style:{color:"#CB7676"}},"::"),e("span",{style:{color:"#4D9375"}},"class"),e("span",{style:{color:"#858585"}},")"),e("span",{style:{color:"#DBD7CA"}},"]")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#CB7676"}},"final"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"class"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"BoardGameResource"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"implements"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"ResourceInterface")])])]),e("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#A0ADA0"}},"// src/Entity/Customer.php")]),a(`
`),e("span",{class:"line"}),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#1C6B48"}},"namespace"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"App"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#6C7834"}},"Entity"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#6C7834"}},"Customer"),e("span",{style:{color:"#8E8F8B"}},";")]),a(`
`),e("span",{class:"line"}),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#1C6B48"}},"use"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B58451"}},"App"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#B58451"}},"Sylius"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#B58451"}},"State"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#B58451"}},"Processor"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#B58451"}},"CreateCustomerProcessor"),e("span",{style:{color:"#8E8F8B"}},";")]),a(`
`),e("span",{class:"line"}),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"#["),e("span",{style:{color:"#B58451"}},"Resource"),e("span",{style:{color:"#393A34"}},"]")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"#["),e("span",{style:{color:"#B58451"}},"Create"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#6C7834"}},"processor"),e("span",{style:{color:"#8E8F8B"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B58451"}},"CreateCustomerProcessor"),e("span",{style:{color:"#AB5959"}},"::"),e("span",{style:{color:"#1C6B48"}},"class"),e("span",{style:{color:"#8E8F8B"}},")"),e("span",{style:{color:"#393A34"}},"]")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#AB5959"}},"final"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"class"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"BoardGameResource"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"implements"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"ResourceInterface")])])])],-1),n9={__name:"65",setup(s){const n={srcSequence:"./pages/07_processors.md"};return I(N),(o,t)=>{const r=Ee;return C(),P(ee,X(Q(n)),{default:b(()=>[e9,R(r,_e({},{ranges:["all","8","8,5"]}),{default:b(()=>[s9]),_:1},16)]),_:1},16)}}},o9=q(n9,[["__file","/@slidev/slides/65.md"]]),t9=e("h1",null,"Example #2: Use a custom delete processor",-1),r9=e("p",null,[a("As another example, let’s configure a "),e("code",null,"DeleteBoardGameProcessor"),a(" on a "),e("code",null,"BoardGameResource"),a(" which is not a Doctrine entity.")],-1),l9={__name:"66",setup(s){const n={srcSequence:"./pages/07_processors.md"};return I(N),(o,t)=>{const r=Re;return C(),P(ee,X(Q(n)),{default:b(()=>[t9,R(r,null,{default:b(()=>[r9]),_:1})]),_:1},16)}}},a9=q(l9,[["__file","/@slidev/slides/66.md"]]),c9=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#758575"}},"// src/BoardGameBlog/Infrastructure/Sylius/State/Processor/DeleteBoardGameProcessor.php")]),a(`
`),e("span",{class:"line"}),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#4D9375"}},"namespace"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"App"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#A1B567"}},"BoardGameBlog"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#A1B567"}},"Infrastructure"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#A1B567"}},"Sylius"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#A1B567"}},"State"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#A1B567"}},"Processor"),e("span",{style:{color:"#858585"}},";")]),a(`
`),e("span",{class:"line"}),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#CB7676"}},"final"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"class"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"DeleteBoardGameProcessor"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"implements"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"ProcessorInterface")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"{")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#CB7676"}},"public"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"function"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"__construct"),e("span",{style:{color:"#858585"}},"(")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#CB7676"}},"private"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"CommandBusInterface"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"$"),e("span",{style:{color:"#B8A965"}},"commandBus"),e("span",{style:{color:"#858585"}},",")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#858585"}},")"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"{")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#858585"}},"}")]),a(`
`),e("span",{class:"line"}),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#CB7676"}},"public"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"function"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"process"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#4D9375"}},"mixed"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"$"),e("span",{style:{color:"#B8A965"}},"data"),e("span",{style:{color:"#858585"}},","),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"Operation"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"$"),e("span",{style:{color:"#B8A965"}},"operation"),e("span",{style:{color:"#858585"}},","),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"Context"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"$"),e("span",{style:{color:"#B8A965"}},"context"),e("span",{style:{color:"#858585"}},")"),e("span",{style:{color:"#CB7676"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#4D9375"}},"mixed")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#858585"}},"{")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#E0A569"}},"Assert"),e("span",{style:{color:"#CB7676"}},"::"),e("span",{style:{color:"#A1B567"}},"isInstanceOf"),e("span",{style:{color:"#858585"}},"($"),e("span",{style:{color:"#B8A965"}},"data"),e("span",{style:{color:"#858585"}},","),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"BoardGameResource"),e("span",{style:{color:"#CB7676"}},"::"),e("span",{style:{color:"#4D9375"}},"class"),e("span",{style:{color:"#858585"}},");")]),a(`
`),e("span",{class:"line"}),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#858585"}},"$"),e("span",{style:{color:"#D4976C"}},"this"),e("span",{style:{color:"#CB7676"}},"->"),e("span",{style:{color:"#B8A965"}},"commandBus"),e("span",{style:{color:"#CB7676"}},"->"),e("span",{style:{color:"#A1B567"}},"dispatch"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#4D9375"}},"new"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"DeleteBoardGameCommand"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#4D9375"}},"new"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"BoardGameId"),e("span",{style:{color:"#858585"}},"($"),e("span",{style:{color:"#B8A965"}},"data"),e("span",{style:{color:"#CB7676"}},"->"),e("span",{style:{color:"#B8A965"}},"id"),e("span",{style:{color:"#858585"}},")));")]),a(`
`),e("span",{class:"line"}),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#4D9375"}},"return"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#D4976C"}},"null"),e("span",{style:{color:"#858585"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#858585"}},"}")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"}")])])]),e("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#A0ADA0"}},"// src/BoardGameBlog/Infrastructure/Sylius/State/Processor/DeleteBoardGameProcessor.php")]),a(`
`),e("span",{class:"line"}),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#1C6B48"}},"namespace"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"App"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#6C7834"}},"BoardGameBlog"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#6C7834"}},"Infrastructure"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#6C7834"}},"Sylius"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#6C7834"}},"State"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#6C7834"}},"Processor"),e("span",{style:{color:"#8E8F8B"}},";")]),a(`
`),e("span",{class:"line"}),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#AB5959"}},"final"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"class"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"DeleteBoardGameProcessor"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"implements"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"ProcessorInterface")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"{")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#AB5959"}},"public"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"function"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B58451"}},"__construct"),e("span",{style:{color:"#8E8F8B"}},"(")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#AB5959"}},"private"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B58451"}},"CommandBusInterface"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"$"),e("span",{style:{color:"#8C862B"}},"commandBus"),e("span",{style:{color:"#8E8F8B"}},",")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#8E8F8B"}},")"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"{")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#8E8F8B"}},"}")]),a(`
`),e("span",{class:"line"}),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#AB5959"}},"public"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"function"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"process"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#1C6B48"}},"mixed"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"$"),e("span",{style:{color:"#8C862B"}},"data"),e("span",{style:{color:"#8E8F8B"}},","),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B58451"}},"Operation"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"$"),e("span",{style:{color:"#8C862B"}},"operation"),e("span",{style:{color:"#8E8F8B"}},","),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B58451"}},"Context"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"$"),e("span",{style:{color:"#8C862B"}},"context"),e("span",{style:{color:"#8E8F8B"}},")"),e("span",{style:{color:"#AB5959"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#1C6B48"}},"mixed")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#8E8F8B"}},"{")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#B58451"}},"Assert"),e("span",{style:{color:"#AB5959"}},"::"),e("span",{style:{color:"#6C7834"}},"isInstanceOf"),e("span",{style:{color:"#8E8F8B"}},"($"),e("span",{style:{color:"#8C862B"}},"data"),e("span",{style:{color:"#8E8F8B"}},","),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B58451"}},"BoardGameResource"),e("span",{style:{color:"#AB5959"}},"::"),e("span",{style:{color:"#1C6B48"}},"class"),e("span",{style:{color:"#8E8F8B"}},");")]),a(`
`),e("span",{class:"line"}),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#8E8F8B"}},"$"),e("span",{style:{color:"#A65E2B"}},"this"),e("span",{style:{color:"#AB5959"}},"->"),e("span",{style:{color:"#8C862B"}},"commandBus"),e("span",{style:{color:"#AB5959"}},"->"),e("span",{style:{color:"#6C7834"}},"dispatch"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#1C6B48"}},"new"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B58451"}},"DeleteBoardGameCommand"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#1C6B48"}},"new"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B58451"}},"BoardGameId"),e("span",{style:{color:"#8E8F8B"}},"($"),e("span",{style:{color:"#8C862B"}},"data"),e("span",{style:{color:"#AB5959"}},"->"),e("span",{style:{color:"#8C862B"}},"id"),e("span",{style:{color:"#8E8F8B"}},")));")]),a(`
`),e("span",{class:"line"}),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#1C6B48"}},"return"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#A65E2B"}},"null"),e("span",{style:{color:"#8E8F8B"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#8E8F8B"}},"}")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"}")])])])],-1),i9={__name:"67",setup(s){const n={srcSequence:"./pages/07_processors.md"};return I(N),(o,t)=>{const r=Ee;return C(),P(ee,X(Q(n)),{default:b(()=>[R(r,_e({},{ranges:["all","12","14","16"]}),{default:b(()=>[c9]),_:1},16)]),_:1},16)}}},p9=q(i9,[["__file","/@slidev/slides/67.md"]]),u9=e("h1",null,"Use this processor on your operation.",-1),y9=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#758575"}},"// src/BoardGameBlog/Infrastructure/Sylius/Resource/BoardGameResource.php")]),a(`
`),e("span",{class:"line"}),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#4D9375"}},"namespace"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"App"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#A1B567"}},"BoardGameBlog"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#A1B567"}},"Infrastructure"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#A1B567"}},"Sylius"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#A1B567"}},"Resource"),e("span",{style:{color:"#858585"}},";")]),a(`
`),e("span",{class:"line"}),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"#["),e("span",{style:{color:"#E0A569"}},"Resource"),e("span",{style:{color:"#858585"}},"(")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#A1B567"}},"alias"),e("span",{style:{color:"#858585"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},"'app.board_game'"),e("span",{style:{color:"#858585"}},",")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#A1B567"}},"section"),e("span",{style:{color:"#858585"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},"'admin'"),e("span",{style:{color:"#858585"}},",")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#A1B567"}},"formType"),e("span",{style:{color:"#858585"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"BoardGameType"),e("span",{style:{color:"#CB7676"}},"::"),e("span",{style:{color:"#4D9375"}},"class"),e("span",{style:{color:"#858585"}},",")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#A1B567"}},"templatesDir"),e("span",{style:{color:"#858585"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},"'crud'"),e("span",{style:{color:"#858585"}},",")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#A1B567"}},"routePrefix"),e("span",{style:{color:"#858585"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},"'/admin'"),e("span",{style:{color:"#858585"}},",")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},")"),e("span",{style:{color:"#DBD7CA"}},"]")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"#["),e("span",{style:{color:"#E0A569"}},"Delete"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#A1B567"}},"processor"),e("span",{style:{color:"#858585"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"DeleteBoardGameProcessor"),e("span",{style:{color:"#CB7676"}},"::"),e("span",{style:{color:"#4D9375"}},"class"),e("span",{style:{color:"#858585"}},")"),e("span",{style:{color:"#DBD7CA"}},"]")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#CB7676"}},"final"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"class"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"BoardGameResource"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"implements"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"ResourceInterface")])])]),e("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#A0ADA0"}},"// src/BoardGameBlog/Infrastructure/Sylius/Resource/BoardGameResource.php")]),a(`
`),e("span",{class:"line"}),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#1C6B48"}},"namespace"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"App"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#6C7834"}},"BoardGameBlog"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#6C7834"}},"Infrastructure"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#6C7834"}},"Sylius"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#6C7834"}},"Resource"),e("span",{style:{color:"#8E8F8B"}},";")]),a(`
`),e("span",{class:"line"}),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"#["),e("span",{style:{color:"#B58451"}},"Resource"),e("span",{style:{color:"#8E8F8B"}},"(")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#6C7834"}},"alias"),e("span",{style:{color:"#8E8F8B"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},"'app.board_game'"),e("span",{style:{color:"#8E8F8B"}},",")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#6C7834"}},"section"),e("span",{style:{color:"#8E8F8B"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},"'admin'"),e("span",{style:{color:"#8E8F8B"}},",")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#6C7834"}},"formType"),e("span",{style:{color:"#8E8F8B"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B58451"}},"BoardGameType"),e("span",{style:{color:"#AB5959"}},"::"),e("span",{style:{color:"#1C6B48"}},"class"),e("span",{style:{color:"#8E8F8B"}},",")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#6C7834"}},"templatesDir"),e("span",{style:{color:"#8E8F8B"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},"'crud'"),e("span",{style:{color:"#8E8F8B"}},",")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#6C7834"}},"routePrefix"),e("span",{style:{color:"#8E8F8B"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},"'/admin'"),e("span",{style:{color:"#8E8F8B"}},",")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},")"),e("span",{style:{color:"#393A34"}},"]")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"#["),e("span",{style:{color:"#B58451"}},"Delete"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#6C7834"}},"processor"),e("span",{style:{color:"#8E8F8B"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B58451"}},"DeleteBoardGameProcessor"),e("span",{style:{color:"#AB5959"}},"::"),e("span",{style:{color:"#1C6B48"}},"class"),e("span",{style:{color:"#8E8F8B"}},")"),e("span",{style:{color:"#393A34"}},"]")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#AB5959"}},"final"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"class"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"BoardGameResource"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"implements"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"ResourceInterface")])])])],-1),d9={__name:"68",setup(s){const n={srcSequence:"./pages/07_processors.md"};return I(N),(o,t)=>{const r=Ee;return C(),P(ee,X(Q(n)),{default:b(()=>[u9,R(r,_e({},{ranges:["all","12"]}),{default:b(()=>[y9]),_:1},16)]),_:1},16)}}},f9=q(d9,[["__file","/@slidev/slides/68.md"]]),m9=e("h1",null,"Responders",-1),h9=e("p",null,"Responders respond data: transform data to a Symfony response, return a success in a CLI operation.",-1),_9={__name:"69",setup(s){const n={srcSequence:"./pages/08_responders.md"};return I(N),(o,t)=>{const r=Re;return C(),P(ee,X(Q(n)),{default:b(()=>[m9,R(r,null,{default:b(()=>[h9]),_:1})]),_:1},16)}}},g9=q(_9,[["__file","/@slidev/slides/69.md"]]),B9=e("h1",null,"Default responders",-1),A9=e("p",null,[a("When your operation is an instance of "),e("code",null,"Sylius\\Component\\Resource\\Metadata\\HttpOperation"),a(" two responders are configured by default.")],-1),v9=e("p",null,"The responder will automatically choose the responder depending on the request format:",-1),C9=e("table",null,[e("thead",null,[e("tr",null,[e("th",null,"Request format"),e("th",null,"Responder")])]),e("tbody",null,[e("tr",null,[e("td",null,"html"),e("td",null,"Sylius\\Component\\Resource\\Symfony\\Request\\State\\TwigResponder")]),e("tr",null,[e("td",null,"json"),e("td",null,"Sylius\\Component\\Resource\\Symfony\\Request\\State\\ApiResponder")]),e("tr",null,[e("td",null,"xml"),e("td",null,"Sylius\\Component\\Resource\\Doctrine\\Common\\State\\ApiResponder")])])],-1),E9={__name:"70",setup(s){const n={srcSequence:"./pages/08_responders.md"};return I(N),(o,t)=>{const r=Re;return C(),P(ee,X(Q(n)),{default:b(()=>[B9,R(r,null,{default:b(()=>[A9,v9,C9]),_:1})]),_:1},16)}}},b9=q(E9,[["__file","/@slidev/slides/70.md"]]),k9=e("h1",null,"Twig Responder",-1),D9=e("p",null,"The Twig responder is used to render data into a Symfony response. It’s used for HTML responses.",-1),w9=e("p",null,"The variables that are passed to the Twig templates depends on the operation.",-1),S9={__name:"71",setup(s){const n={srcSequence:"./pages/08_responders.md"};return I(N),(o,t)=>{const r=Re;return C(),P(ee,X(Q(n)),{default:b(()=>[k9,R(r,null,{default:b(()=>[D9,w9]),_:1})]),_:1},16)}}},R9=q(S9,[["__file","/@slidev/slides/71.md"]]),x9=e("h1",null,"Customize Twig template variables",-1),F9=e("p",null,"Some variables are already available on your operations, but you can add more variables easily.",-1),$9={__name:"72",setup(s){const n={srcSequence:"./pages/08_responders.md"};return I(N),(o,t)=>{const r=Re;return C(),P(ee,X(Q(n)),{default:b(()=>[x9,R(r,null,{default:b(()=>[F9]),_:1})]),_:1},16)}}},I9=q($9,[["__file","/@slidev/slides/72.md"]]),T9=e("p",null,[a("As an example, we add a "),e("code",null,"foo"),a(" variable to the Twig template with "),e("code",null,"bar"),a(" as value.")],-1),M9=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#758575"}},"// src/Twig/Context/Factory/ShowSubscriptionContextFactory.php")]),a(`
`),e("span",{class:"line"}),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#4D9375"}},"namespace"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"App"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#A1B567"}},"Twig"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#A1B567"}},"Context"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#A1B567"}},"Factory"),e("span",{style:{color:"#858585"}},";")]),a(`
`),e("span",{class:"line"}),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#4D9375"}},"use"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"phpDocumentor"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#E0A569"}},"Reflection"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#E0A569"}},"Types"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#E0A569"}},"Context"),e("span",{style:{color:"#858585"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#4D9375"}},"use"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"Sylius"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#E0A569"}},"Component"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#E0A569"}},"Resource"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#E0A569"}},"Metadata"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#E0A569"}},"Operation"),e("span",{style:{color:"#858585"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#4D9375"}},"use"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"Sylius"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#E0A569"}},"Component"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#E0A569"}},"Resource"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#E0A569"}},"Twig"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#E0A569"}},"Context"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#E0A569"}},"Factory"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#E0A569"}},"ContextFactoryInterface"),e("span",{style:{color:"#858585"}},";")]),a(`
`),e("span",{class:"line"}),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#CB7676"}},"final"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"class"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"ShowSubscriptionContextFactory"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"implements"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"ContextFactoryInterface")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"{")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#CB7676"}},"public"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"function"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"__construct"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#CB7676"}},"private"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"ContextFactoryInterface"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"$"),e("span",{style:{color:"#B8A965"}},"decorated"),e("span",{style:{color:"#858585"}},")")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#858585"}},"{")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#858585"}},"}")]),a(`
`),e("span",{class:"line"}),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#CB7676"}},"public"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"function"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"create"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#4D9375"}},"mixed"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"$"),e("span",{style:{color:"#B8A965"}},"data"),e("span",{style:{color:"#858585"}},","),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"Operation"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"$"),e("span",{style:{color:"#B8A965"}},"operation"),e("span",{style:{color:"#858585"}},","),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"Context"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"$"),e("span",{style:{color:"#B8A965"}},"context"),e("span",{style:{color:"#858585"}},")"),e("span",{style:{color:"#CB7676"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#4D9375"}},"array")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#858585"}},"{")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#4D9375"}},"return"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"array_merge"),e("span",{style:{color:"#858585"}},"($"),e("span",{style:{color:"#D4976C"}},"this"),e("span",{style:{color:"#CB7676"}},"->"),e("span",{style:{color:"#B8A965"}},"decorated"),e("span",{style:{color:"#CB7676"}},"->"),e("span",{style:{color:"#A1B567"}},"create"),e("span",{style:{color:"#858585"}},"($"),e("span",{style:{color:"#B8A965"}},"data"),e("span",{style:{color:"#858585"}},","),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"$"),e("span",{style:{color:"#B8A965"}},"operation"),e("span",{style:{color:"#858585"}},","),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"$"),e("span",{style:{color:"#B8A965"}},"context"),e("span",{style:{color:"#858585"}},"),"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"[")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"            "),e("span",{style:{color:"#C98A7D"}},"'foo'"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"=>"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},"'bar'"),e("span",{style:{color:"#858585"}},",")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#858585"}},"]);")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#858585"}},"}")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"}")])])]),e("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#A0ADA0"}},"// src/Twig/Context/Factory/ShowSubscriptionContextFactory.php")]),a(`
`),e("span",{class:"line"}),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#1C6B48"}},"namespace"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"App"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#6C7834"}},"Twig"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#6C7834"}},"Context"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#6C7834"}},"Factory"),e("span",{style:{color:"#8E8F8B"}},";")]),a(`
`),e("span",{class:"line"}),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#1C6B48"}},"use"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B58451"}},"phpDocumentor"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#B58451"}},"Reflection"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#B58451"}},"Types"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#B58451"}},"Context"),e("span",{style:{color:"#8E8F8B"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#1C6B48"}},"use"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B58451"}},"Sylius"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#B58451"}},"Component"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#B58451"}},"Resource"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#B58451"}},"Metadata"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#B58451"}},"Operation"),e("span",{style:{color:"#8E8F8B"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#1C6B48"}},"use"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B58451"}},"Sylius"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#B58451"}},"Component"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#B58451"}},"Resource"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#B58451"}},"Twig"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#B58451"}},"Context"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#B58451"}},"Factory"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#B58451"}},"ContextFactoryInterface"),e("span",{style:{color:"#8E8F8B"}},";")]),a(`
`),e("span",{class:"line"}),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#AB5959"}},"final"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"class"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"ShowSubscriptionContextFactory"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"implements"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"ContextFactoryInterface")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"{")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#AB5959"}},"public"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"function"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B58451"}},"__construct"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#AB5959"}},"private"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B58451"}},"ContextFactoryInterface"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"$"),e("span",{style:{color:"#8C862B"}},"decorated"),e("span",{style:{color:"#8E8F8B"}},")")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#8E8F8B"}},"{")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#8E8F8B"}},"}")]),a(`
`),e("span",{class:"line"}),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#AB5959"}},"public"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"function"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"create"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#1C6B48"}},"mixed"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"$"),e("span",{style:{color:"#8C862B"}},"data"),e("span",{style:{color:"#8E8F8B"}},","),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B58451"}},"Operation"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"$"),e("span",{style:{color:"#8C862B"}},"operation"),e("span",{style:{color:"#8E8F8B"}},","),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B58451"}},"Context"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"$"),e("span",{style:{color:"#8C862B"}},"context"),e("span",{style:{color:"#8E8F8B"}},")"),e("span",{style:{color:"#AB5959"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#1C6B48"}},"array")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#8E8F8B"}},"{")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#1C6B48"}},"return"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B58451"}},"array_merge"),e("span",{style:{color:"#8E8F8B"}},"($"),e("span",{style:{color:"#A65E2B"}},"this"),e("span",{style:{color:"#AB5959"}},"->"),e("span",{style:{color:"#8C862B"}},"decorated"),e("span",{style:{color:"#AB5959"}},"->"),e("span",{style:{color:"#6C7834"}},"create"),e("span",{style:{color:"#8E8F8B"}},"($"),e("span",{style:{color:"#8C862B"}},"data"),e("span",{style:{color:"#8E8F8B"}},","),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"$"),e("span",{style:{color:"#8C862B"}},"operation"),e("span",{style:{color:"#8E8F8B"}},","),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"$"),e("span",{style:{color:"#8C862B"}},"context"),e("span",{style:{color:"#8E8F8B"}},"),"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"[")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"            "),e("span",{style:{color:"#B56959"}},"'foo'"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"=>"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},"'bar'"),e("span",{style:{color:"#8E8F8B"}},",")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#8E8F8B"}},"]);")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#8E8F8B"}},"}")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"}")])])])],-1),P9={__name:"73",setup(s){const n={srcSequence:"./pages/08_responders.md"};return I(N),(o,t)=>{const r=Ee,l=Re;return C(),P(ee,X(Q(n)),{default:b(()=>[T9,R(l,null,{default:b(()=>[R(r,_e({},{ranges:["all","17","18"]}),{default:b(()=>[M9]),_:1},16)]),_:1})]),_:1},16)}}},O9=q(P9,[["__file","/@slidev/slides/73.md"]]),L9=e("h1",null,"Use it on your operation.",-1),N9=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#758575"}},"// src/Entity/Subscription.php")]),a(`
`),e("span",{class:"line"}),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#4D9375"}},"namespace"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"App"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#A1B567"}},"Entity"),e("span",{style:{color:"#858585"}},";")]),a(`
`),e("span",{class:"line"}),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#4D9375"}},"use"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"Sylius"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#E0A569"}},"Component"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#E0A569"}},"Resource"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#E0A569"}},"Metadata"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#E0A569"}},"Resource"),e("span",{style:{color:"#858585"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#4D9375"}},"use"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"Sylius"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#E0A569"}},"Component"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#E0A569"}},"Resource"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#E0A569"}},"Metadata"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#E0A569"}},"Show"),e("span",{style:{color:"#858585"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#4D9375"}},"use"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"Sylius"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#E0A569"}},"Component"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#E0A569"}},"Resource"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#E0A569"}},"Model"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#E0A569"}},"ResourceInterface"),e("span",{style:{color:"#858585"}},";")]),a(`
`),e("span",{class:"line"}),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"#["),e("span",{style:{color:"#E0A569"}},"Resource"),e("span",{style:{color:"#DBD7CA"}},"]")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"#["),e("span",{style:{color:"#E0A569"}},"Show"),e("span",{style:{color:"#858585"}},"(")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#A1B567"}},"template"),e("span",{style:{color:"#858585"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},"'subscription/show.html.twig'"),e("span",{style:{color:"#858585"}},",")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#A1B567"}},"twigContextFactory"),e("span",{style:{color:"#858585"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"ShowSubscriptionContextFactory"),e("span",{style:{color:"#CB7676"}},"::"),e("span",{style:{color:"#4D9375"}},"class"),e("span",{style:{color:"#858585"}},",")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},")"),e("span",{style:{color:"#DBD7CA"}},"]")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#CB7676"}},"class"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"Subscription"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"implements"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"ResourceInterface")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"{")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"}")])])]),e("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#A0ADA0"}},"// src/Entity/Subscription.php")]),a(`
`),e("span",{class:"line"}),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#1C6B48"}},"namespace"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"App"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#6C7834"}},"Entity"),e("span",{style:{color:"#8E8F8B"}},";")]),a(`
`),e("span",{class:"line"}),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#1C6B48"}},"use"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B58451"}},"Sylius"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#B58451"}},"Component"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#B58451"}},"Resource"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#B58451"}},"Metadata"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#B58451"}},"Resource"),e("span",{style:{color:"#8E8F8B"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#1C6B48"}},"use"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B58451"}},"Sylius"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#B58451"}},"Component"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#B58451"}},"Resource"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#B58451"}},"Metadata"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#B58451"}},"Show"),e("span",{style:{color:"#8E8F8B"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#1C6B48"}},"use"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B58451"}},"Sylius"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#B58451"}},"Component"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#B58451"}},"Resource"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#B58451"}},"Model"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#B58451"}},"ResourceInterface"),e("span",{style:{color:"#8E8F8B"}},";")]),a(`
`),e("span",{class:"line"}),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"#["),e("span",{style:{color:"#B58451"}},"Resource"),e("span",{style:{color:"#393A34"}},"]")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"#["),e("span",{style:{color:"#B58451"}},"Show"),e("span",{style:{color:"#8E8F8B"}},"(")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#6C7834"}},"template"),e("span",{style:{color:"#8E8F8B"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},"'subscription/show.html.twig'"),e("span",{style:{color:"#8E8F8B"}},",")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#6C7834"}},"twigContextFactory"),e("span",{style:{color:"#8E8F8B"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B58451"}},"ShowSubscriptionContextFactory"),e("span",{style:{color:"#AB5959"}},"::"),e("span",{style:{color:"#1C6B48"}},"class"),e("span",{style:{color:"#8E8F8B"}},",")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},")"),e("span",{style:{color:"#393A34"}},"]")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#AB5959"}},"class"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"Subscription"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"implements"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"ResourceInterface")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"{")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"}")])])])],-1),q9={__name:"74",setup(s){const n={srcSequence:"./pages/08_responders.md"};return I(N),(o,t)=>{const r=Ee;return C(),P(ee,X(Q(n)),{default:b(()=>[L9,R(r,_e({},{ranges:["all","12"]}),{default:b(()=>[N9]),_:1},16)]),_:1},16)}}},U9=q(q9,[["__file","/@slidev/slides/74.md"]]),H9=e("h1",null,"API Responder",-1),V9=e("p",null,"The API responder is used to render serialized data into a Symfony response. It’s used for JSON/XML responses.",-1),j9={__name:"75",setup(s){const n={srcSequence:"./pages/08_responders.md"};return I(N),(o,t)=>{const r=Re;return C(),P(ee,X(Q(n)),{default:b(()=>[H9,R(r,null,{default:b(()=>[V9]),_:1})]),_:1},16)}}},G9=q(j9,[["__file","/@slidev/slides/75.md"]]),W9=[{path:"1",name:"page-1",component:o0,meta:{theme:"seriph",background:!1,class:"text-center",highlighter:"shiki",lineNumbers:!1,info:`## Slidev Starter Template
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
\`\`\``,frontmatter:{transition:"fade"},index:1,start:8,end:39},filepath:"/home/runner/work/sylius-resource-formation/sylius-resource-formation/pages/01_create_resource.md",noteHTML:"",id:2,no:3},__clicksElements:[],__preloaded:!1}},{path:"4",name:"page-4",component:$0,meta:{srcSequence:"./pages/01_create_resource.md",slide:{raw:`
# Configure the BookRepository

The command also generates a Doctrine repository class.

\`\`\`php {all|14|14,9|16|16,8}
<?php

namespace App\\Repository;

use App\\Entity\\Book;
use Doctrine\\Bundle\\DoctrineBundle\\Repository\\ServiceEntityRepository;
use Doctrine\\Persistence\\ManagerRegistry;
use Sylius\\Bundle\\ResourceBundle\\Doctrine\\ORM\\ResourceRepositoryTrait;
use Sylius\\Component\\Resource\\Repository\\RepositoryInterface;

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
use Sylius\\Component\\Resource\\Repository\\RepositoryInterface;

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
use Sylius\\Component\\Resource\\Repository\\RepositoryInterface;

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
use Sylius\\Component\\Resource\\Repository\\RepositoryInterface;

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
use Sylius\\Component\\Resource\\Model\\ResourceInterface;

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
use Sylius\\Component\\Resource\\Model\\ResourceInterface;

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
use Sylius\\Component\\Resource\\Model\\ResourceInterface;

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
# Use the Resource attribute

PHP attribute \`\`\`#[Resource]\`\`\` configures your entity as a Sylius resource.

\`\`\`php {all|9|9,5}
namespace App\\Entity;

use App\\Repository\\BookRepository;
use Doctrine\\ORM\\Mapping as ORM;
use Sylius\\Component\\Resource\\Metadata\\Resource;
use Sylius\\Component\\Resource\\Model\\ResourceInterface;

#[ORM\\Entity(repositoryClass: BookRepository::class)]
#[Resource]
class Book implements ResourceInterface
{
}

\`\`\`
`,title:"Use the Resource attribute",level:1,content:`# Use the Resource attribute

PHP attribute \`\`\`#[Resource]\`\`\` configures your entity as a Sylius resource.

\`\`\`php {all|9|9,5}
namespace App\\Entity;

use App\\Repository\\BookRepository;
use Doctrine\\ORM\\Mapping as ORM;
use Sylius\\Component\\Resource\\Metadata\\Resource;
use Sylius\\Component\\Resource\\Model\\ResourceInterface;

#[ORM\\Entity(repositoryClass: BookRepository::class)]
#[Resource]
class Book implements ResourceInterface
{
}

\`\`\``,frontmatter:{srcSequence:"./pages/02_configure_your_resource.md"},index:5,start:33,end:54,source:{filepath:"/home/runner/work/sylius-resource-formation/sylius-resource-formation/pages/02_configure_your_resource.md",raw:`
# Use the Resource attribute

PHP attribute \`\`\`#[Resource]\`\`\` configures your entity as a Sylius resource.

\`\`\`php {all|9|9,5}
namespace App\\Entity;

use App\\Repository\\BookRepository;
use Doctrine\\ORM\\Mapping as ORM;
use Sylius\\Component\\Resource\\Metadata\\Resource;
use Sylius\\Component\\Resource\\Model\\ResourceInterface;

#[ORM\\Entity(repositoryClass: BookRepository::class)]
#[Resource]
class Book implements ResourceInterface
{
}

\`\`\`
`,title:"Use the Resource attribute",level:1,content:`# Use the Resource attribute

PHP attribute \`\`\`#[Resource]\`\`\` configures your entity as a Sylius resource.

\`\`\`php {all|9|9,5}
namespace App\\Entity;

use App\\Repository\\BookRepository;
use Doctrine\\ORM\\Mapping as ORM;
use Sylius\\Component\\Resource\\Metadata\\Resource;
use Sylius\\Component\\Resource\\Model\\ResourceInterface;

#[ORM\\Entity(repositoryClass: BookRepository::class)]
#[Resource]
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
| classes.factory    | Sylius\\Component\\Resource\\Factory\\Factory                  |
| classes.form       | Sylius\\Bundle\\ResourceBundle\\Form\\Type\\DefaultResourceType |
+--------------------+------------------------------------------------------------+
\`\`\`

By default, it will have the \`app.book\` alias in Sylius resource which is a concatenation of the application name and the resource name \`{application}.{name}\`.

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
| classes.factory    | Sylius\\Component\\Resource\\Factory\\Factory                  |
| classes.form       | Sylius\\Bundle\\ResourceBundle\\Form\\Type\\DefaultResourceType |
+--------------------+------------------------------------------------------------+
\`\`\`

By default, it will have the \`app.book\` alias in Sylius resource which is a concatenation of the application name and the resource name \`{application}.{name}\`.

</v-clicks>`,frontmatter:{srcSequence:"./pages/02_configure_your_resource.md"},index:6,start:55,end:82,source:{filepath:"/home/runner/work/sylius-resource-formation/sylius-resource-formation/pages/02_configure_your_resource.md",raw:`
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
| classes.factory    | Sylius\\Component\\Resource\\Factory\\Factory                  |
| classes.form       | Sylius\\Bundle\\ResourceBundle\\Form\\Type\\DefaultResourceType |
+--------------------+------------------------------------------------------------+
\`\`\`

By default, it will have the \`app.book\` alias in Sylius resource which is a concatenation of the application name and the resource name \`{application}.{name}\`.

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
| classes.factory    | Sylius\\Component\\Resource\\Factory\\Factory                  |
| classes.form       | Sylius\\Bundle\\ResourceBundle\\Form\\Type\\DefaultResourceType |
+--------------------+------------------------------------------------------------+
\`\`\`

By default, it will have the \`app.book\` alias in Sylius resource which is a concatenation of the application name and the resource name \`{application}.{name}\`.

</v-clicks>`,frontmatter:{},index:2,start:55,end:82},filepath:"/home/runner/work/sylius-resource-formation/sylius-resource-formation/pages/02_configure_your_resource.md",noteHTML:"",id:6,no:7},__clicksElements:[],__preloaded:!1}},{path:"8",name:"page-8",component:sE,meta:{title:"Configure your operations",srcSequence:"./pages/03_configure_your_operations.md",slide:{raw:null,title:"Configure your operations",level:1,content:`# Configure your operations

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
`,content:"",frontmatter:{},index:3,start:48,end:52},filepath:"/home/runner/work/sylius-resource-formation/sylius-resource-formation/pages/03_configure_your_operations.md",noteHTML:"",id:7,no:8},__clicksElements:[],__preloaded:!1}},{path:"9",name:"page-9",component:lE,meta:{srcSequence:"./pages/03_configure_your_operations.md",slide:{raw:`
# Index operation

<v-clicks>

\`Index\` operation allows to browse all items of your resource.

\`\`\`php {all|8|8,3}
namespace App\\Entity;

use Sylius\\Component\\Resource\\Metadata\\Index;
use Sylius\\Component\\Resource\\Metadata\\Resource;
use Sylius\\Component\\Resource\\Model\\ResourceInterface;

#[Resource]
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

use Sylius\\Component\\Resource\\Metadata\\Index;
use Sylius\\Component\\Resource\\Metadata\\Resource;
use Sylius\\Component\\Resource\\Model\\ResourceInterface;

#[Resource]
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

use Sylius\\Component\\Resource\\Metadata\\Index;
use Sylius\\Component\\Resource\\Metadata\\Resource;
use Sylius\\Component\\Resource\\Model\\ResourceInterface;

#[Resource]
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

use Sylius\\Component\\Resource\\Metadata\\Index;
use Sylius\\Component\\Resource\\Metadata\\Resource;
use Sylius\\Component\\Resource\\Model\\ResourceInterface;

#[Resource]
#[Index]
class Book implements ResourceInterface
{
}

\`\`\`

</v-clicks>`,frontmatter:{},index:1,start:10,end:34},filepath:"/home/runner/work/sylius-resource-formation/sylius-resource-formation/pages/03_configure_your_operations.md",noteHTML:"",id:8,no:9},__clicksElements:[],__preloaded:!1}},{path:"10",name:"page-10",component:uE,meta:{srcSequence:"./pages/03_configure_your_operations.md",slide:{raw:`
# Index operation

<v-clicks>

It will configure this route for your \`index\` operation.

| Name                  | Method          | Path    |
|-----------------------|-----------------|---------|
| app_book_index        | GET             | /books  |


</v-clicks>
`,title:"Index operation",level:1,content:`# Index operation

<v-clicks>

It will configure this route for your \`index\` operation.

| Name                  | Method          | Path    |
|-----------------------|-----------------|---------|
| app_book_index        | GET             | /books  |


</v-clicks>`,frontmatter:{srcSequence:"./pages/03_configure_your_operations.md"},index:9,start:35,end:49,source:{filepath:"/home/runner/work/sylius-resource-formation/sylius-resource-formation/pages/03_configure_your_operations.md",raw:`
# Index operation

<v-clicks>

It will configure this route for your \`index\` operation.

| Name                  | Method          | Path    |
|-----------------------|-----------------|---------|
| app_book_index        | GET             | /books  |


</v-clicks>
`,title:"Index operation",level:1,content:`# Index operation

<v-clicks>

It will configure this route for your \`index\` operation.

| Name                  | Method          | Path    |
|-----------------------|-----------------|---------|
| app_book_index        | GET             | /books  |


</v-clicks>`,frontmatter:{},index:2,start:35,end:49},filepath:"/home/runner/work/sylius-resource-formation/sylius-resource-formation/pages/03_configure_your_operations.md",noteHTML:"",id:9,no:10},__clicksElements:[],__preloaded:!1}},{path:"11",name:"page-11",component:hE,meta:{srcSequence:"./pages/03_configure_your_operations.md",slide:{raw:`
# Index operation

<v-clicks>

On your Twig template, these variables are available

| Name      | Type                                     |
|-----------|------------------------------------------|
| resources | Pagerfanta\\Pagerfanta                    |
| books     | Pagerfanta\\Pagerfanta                    |
| operation | Sylius\\Component\\Resource\\Metadata\\Index |
| app       | Symfony\\Bridge\\Twig\\AppVariable          |

</v-clicks>
`,title:"Index operation",level:1,content:`# Index operation

<v-clicks>

On your Twig template, these variables are available

| Name      | Type                                     |
|-----------|------------------------------------------|
| resources | Pagerfanta\\Pagerfanta                    |
| books     | Pagerfanta\\Pagerfanta                    |
| operation | Sylius\\Component\\Resource\\Metadata\\Index |
| app       | Symfony\\Bridge\\Twig\\AppVariable          |

</v-clicks>`,frontmatter:{srcSequence:"./pages/03_configure_your_operations.md"},index:10,start:50,end:66,source:{filepath:"/home/runner/work/sylius-resource-formation/sylius-resource-formation/pages/03_configure_your_operations.md",raw:`
# Index operation

<v-clicks>

On your Twig template, these variables are available

| Name      | Type                                     |
|-----------|------------------------------------------|
| resources | Pagerfanta\\Pagerfanta                    |
| books     | Pagerfanta\\Pagerfanta                    |
| operation | Sylius\\Component\\Resource\\Metadata\\Index |
| app       | Symfony\\Bridge\\Twig\\AppVariable          |

</v-clicks>
`,title:"Index operation",level:1,content:`# Index operation

<v-clicks>

On your Twig template, these variables are available

| Name      | Type                                     |
|-----------|------------------------------------------|
| resources | Pagerfanta\\Pagerfanta                    |
| books     | Pagerfanta\\Pagerfanta                    |
| operation | Sylius\\Component\\Resource\\Metadata\\Index |
| app       | Symfony\\Bridge\\Twig\\AppVariable          |

</v-clicks>`,frontmatter:{},index:3,start:50,end:66},filepath:"/home/runner/work/sylius-resource-formation/sylius-resource-formation/pages/03_configure_your_operations.md",noteHTML:"",id:10,no:11},__clicksElements:[],__preloaded:!1}},{path:"12",name:"page-12",component:vE,meta:{srcSequence:"./pages/03_configure_your_operations.md",slide:{raw:`
# Use a grid for your index operation

<v-clicks>

To use a grid for you operation, you need to install the [Sylius grid package](https://github.com/Sylius/SyliusGridBundle/)

\`\`\`php {all|9-10|9-10,3|11-12|11-12}
namespace App\\Entity;

use App\\Grid\\BookGrid;
use Sylius\\Component\\Resource\\Metadata\\Index;
use Sylius\\Component\\Resource\\Metadata\\Resource;
use Sylius\\Component\\Resource\\Model\\ResourceInterface;

#[Resource]
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

To use a grid for you operation, you need to install the [Sylius grid package](https://github.com/Sylius/SyliusGridBundle/)

\`\`\`php {all|9-10|9-10,3|11-12|11-12}
namespace App\\Entity;

use App\\Grid\\BookGrid;
use Sylius\\Component\\Resource\\Metadata\\Index;
use Sylius\\Component\\Resource\\Metadata\\Resource;
use Sylius\\Component\\Resource\\Model\\ResourceInterface;

#[Resource]
// You can use either the FQCN of your grid
#[Index(grid: BookGrid::class)]
// Or you can use the grid name
#[Index(grid: 'app_book')]
class Book implements ResourceInterface
{
}

\`\`\`

</v-clicks>`,frontmatter:{srcSequence:"./pages/03_configure_your_operations.md"},index:11,start:67,end:95,source:{filepath:"/home/runner/work/sylius-resource-formation/sylius-resource-formation/pages/03_configure_your_operations.md",raw:`
# Use a grid for your index operation

<v-clicks>

To use a grid for you operation, you need to install the [Sylius grid package](https://github.com/Sylius/SyliusGridBundle/)

\`\`\`php {all|9-10|9-10,3|11-12|11-12}
namespace App\\Entity;

use App\\Grid\\BookGrid;
use Sylius\\Component\\Resource\\Metadata\\Index;
use Sylius\\Component\\Resource\\Metadata\\Resource;
use Sylius\\Component\\Resource\\Model\\ResourceInterface;

#[Resource]
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

To use a grid for you operation, you need to install the [Sylius grid package](https://github.com/Sylius/SyliusGridBundle/)

\`\`\`php {all|9-10|9-10,3|11-12|11-12}
namespace App\\Entity;

use App\\Grid\\BookGrid;
use Sylius\\Component\\Resource\\Metadata\\Index;
use Sylius\\Component\\Resource\\Metadata\\Resource;
use Sylius\\Component\\Resource\\Model\\ResourceInterface;

#[Resource]
// You can use either the FQCN of your grid
#[Index(grid: BookGrid::class)]
// Or you can use the grid name
#[Index(grid: 'app_book')]
class Book implements ResourceInterface
{
}

\`\`\`

</v-clicks>`,frontmatter:{},index:4,start:67,end:95},filepath:"/home/runner/work/sylius-resource-formation/sylius-resource-formation/pages/03_configure_your_operations.md",noteHTML:"",id:11,no:12},__clicksElements:[],__preloaded:!1}},{path:"13",name:"page-13",component:wE,meta:{srcSequence:"./pages/03_configure_your_operations.md",slide:{raw:`
# Use a grid for your index operation

<v-clicks>

On your Twig template, these variables are available

| Name      | Type                                                    |
|-----------|---------------------------------------------------------|
| resources | Sylius\\Bundle\\ResourceBundle\\Grid\\View\\ResourceGridView |
| books     | Sylius\\Bundle\\ResourceBundle\\Grid\\View\\ResourceGridView |
| operation | Sylius\\Component\\Resource\\Metadata\\Index                |
| app       | Symfony\\Bridge\\Twig\\AppVariable                         |

The iterator for your books will be available as \`books.data\` or \`resources.data\`.

</v-clicks>
`,title:"Use a grid for your index operation",level:1,content:`# Use a grid for your index operation

<v-clicks>

On your Twig template, these variables are available

| Name      | Type                                                    |
|-----------|---------------------------------------------------------|
| resources | Sylius\\Bundle\\ResourceBundle\\Grid\\View\\ResourceGridView |
| books     | Sylius\\Bundle\\ResourceBundle\\Grid\\View\\ResourceGridView |
| operation | Sylius\\Component\\Resource\\Metadata\\Index                |
| app       | Symfony\\Bridge\\Twig\\AppVariable                         |

The iterator for your books will be available as \`books.data\` or \`resources.data\`.

</v-clicks>`,frontmatter:{srcSequence:"./pages/03_configure_your_operations.md"},index:12,start:96,end:114,source:{filepath:"/home/runner/work/sylius-resource-formation/sylius-resource-formation/pages/03_configure_your_operations.md",raw:`
# Use a grid for your index operation

<v-clicks>

On your Twig template, these variables are available

| Name      | Type                                                    |
|-----------|---------------------------------------------------------|
| resources | Sylius\\Bundle\\ResourceBundle\\Grid\\View\\ResourceGridView |
| books     | Sylius\\Bundle\\ResourceBundle\\Grid\\View\\ResourceGridView |
| operation | Sylius\\Component\\Resource\\Metadata\\Index                |
| app       | Symfony\\Bridge\\Twig\\AppVariable                         |

The iterator for your books will be available as \`books.data\` or \`resources.data\`.

</v-clicks>
`,title:"Use a grid for your index operation",level:1,content:`# Use a grid for your index operation

<v-clicks>

On your Twig template, these variables are available

| Name      | Type                                                    |
|-----------|---------------------------------------------------------|
| resources | Sylius\\Bundle\\ResourceBundle\\Grid\\View\\ResourceGridView |
| books     | Sylius\\Bundle\\ResourceBundle\\Grid\\View\\ResourceGridView |
| operation | Sylius\\Component\\Resource\\Metadata\\Index                |
| app       | Symfony\\Bridge\\Twig\\AppVariable                         |

The iterator for your books will be available as \`books.data\` or \`resources.data\`.

</v-clicks>`,frontmatter:{},index:5,start:96,end:114},filepath:"/home/runner/work/sylius-resource-formation/sylius-resource-formation/pages/03_configure_your_operations.md",noteHTML:"",id:12,no:13},__clicksElements:[],__preloaded:!1}},{path:"14",name:"page-14",component:$E,meta:{srcSequence:"./pages/03_configure_your_operations.md",slide:{raw:`
# Create operation

<v-clicks>

\`Create\` operation allows to add a new item of your resource.

\`\`\`php {all|8|8,3}
namespace App\\Entity;

use Sylius\\Component\\Resource\\Metadata\\Create;
use Sylius\\Component\\Resource\\Metadata\\Resource;
use Sylius\\Component\\Resource\\Model\\ResourceInterface;

#[Resource]
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

use Sylius\\Component\\Resource\\Metadata\\Create;
use Sylius\\Component\\Resource\\Metadata\\Resource;
use Sylius\\Component\\Resource\\Model\\ResourceInterface;

#[Resource]
#[Create]
class Book implements ResourceInterface
{
}

\`\`\`

</v-clicks>`,frontmatter:{srcSequence:"./pages/03_configure_your_operations.md"},index:13,start:115,end:139,source:{filepath:"/home/runner/work/sylius-resource-formation/sylius-resource-formation/pages/03_configure_your_operations.md",raw:`
# Create operation

<v-clicks>

\`Create\` operation allows to add a new item of your resource.

\`\`\`php {all|8|8,3}
namespace App\\Entity;

use Sylius\\Component\\Resource\\Metadata\\Create;
use Sylius\\Component\\Resource\\Metadata\\Resource;
use Sylius\\Component\\Resource\\Model\\ResourceInterface;

#[Resource]
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

use Sylius\\Component\\Resource\\Metadata\\Create;
use Sylius\\Component\\Resource\\Metadata\\Resource;
use Sylius\\Component\\Resource\\Model\\ResourceInterface;

#[Resource]
#[Create]
class Book implements ResourceInterface
{
}

\`\`\`

</v-clicks>`,frontmatter:{},index:6,start:115,end:139},filepath:"/home/runner/work/sylius-resource-formation/sylius-resource-formation/pages/03_configure_your_operations.md",noteHTML:"",id:13,no:14},__clicksElements:[],__preloaded:!1}},{path:"15",name:"page-15",component:OE,meta:{srcSequence:"./pages/03_configure_your_operations.md",slide:{raw:`
# Create operation

It will configure this route for your \`create\` operation.

| Name            | Method    | Path       |
|-----------------|-----------|------------|
| app_book_create | GET, POST | /books/new |
`,title:"Create operation",level:1,content:`# Create operation

It will configure this route for your \`create\` operation.

| Name            | Method    | Path       |
|-----------------|-----------|------------|
| app_book_create | GET, POST | /books/new |`,frontmatter:{srcSequence:"./pages/03_configure_your_operations.md"},index:14,start:140,end:149,source:{filepath:"/home/runner/work/sylius-resource-formation/sylius-resource-formation/pages/03_configure_your_operations.md",raw:`
# Create operation

It will configure this route for your \`create\` operation.

| Name            | Method    | Path       |
|-----------------|-----------|------------|
| app_book_create | GET, POST | /books/new |
`,title:"Create operation",level:1,content:`# Create operation

It will configure this route for your \`create\` operation.

| Name            | Method    | Path       |
|-----------------|-----------|------------|
| app_book_create | GET, POST | /books/new |`,frontmatter:{},index:7,start:140,end:149},filepath:"/home/runner/work/sylius-resource-formation/sylius-resource-formation/pages/03_configure_your_operations.md",noteHTML:"",id:14,no:15},__clicksElements:[],__preloaded:!1}},{path:"16",name:"page-16",component:HE,meta:{srcSequence:"./pages/03_configure_your_operations.md",slide:{raw:`
# Create operation

On your Twig template, these variables are available

| Name      | Type                                      |
|-----------|-------------------------------------------|
| form      | App\\Form\\BookType                         |
| resource  | App\\Entity\\Book                           |
| book      | App\\Entity\\Book                           |
| operation | Sylius\\Component\\Resource\\Metadata\\Create |
| app       | Symfony\\Bridge\\Twig\\AppVariable           |
`,title:"Create operation",level:1,content:`# Create operation

On your Twig template, these variables are available

| Name      | Type                                      |
|-----------|-------------------------------------------|
| form      | App\\Form\\BookType                         |
| resource  | App\\Entity\\Book                           |
| book      | App\\Entity\\Book                           |
| operation | Sylius\\Component\\Resource\\Metadata\\Create |
| app       | Symfony\\Bridge\\Twig\\AppVariable           |`,frontmatter:{srcSequence:"./pages/03_configure_your_operations.md"},index:15,start:150,end:163,source:{filepath:"/home/runner/work/sylius-resource-formation/sylius-resource-formation/pages/03_configure_your_operations.md",raw:`
# Create operation

On your Twig template, these variables are available

| Name      | Type                                      |
|-----------|-------------------------------------------|
| form      | App\\Form\\BookType                         |
| resource  | App\\Entity\\Book                           |
| book      | App\\Entity\\Book                           |
| operation | Sylius\\Component\\Resource\\Metadata\\Create |
| app       | Symfony\\Bridge\\Twig\\AppVariable           |
`,title:"Create operation",level:1,content:`# Create operation

On your Twig template, these variables are available

| Name      | Type                                      |
|-----------|-------------------------------------------|
| form      | App\\Form\\BookType                         |
| resource  | App\\Entity\\Book                           |
| book      | App\\Entity\\Book                           |
| operation | Sylius\\Component\\Resource\\Metadata\\Create |
| app       | Symfony\\Bridge\\Twig\\AppVariable           |`,frontmatter:{},index:8,start:150,end:163},filepath:"/home/runner/work/sylius-resource-formation/sylius-resource-formation/pages/03_configure_your_operations.md",noteHTML:"",id:15,no:16},__clicksElements:[],__preloaded:!1}},{path:"17",name:"page-17",component:zE,meta:{srcSequence:"./pages/03_configure_your_operations.md",slide:{raw:`
# Update operation

\`Update\` operation allows to edit an existing item of your resource.

\`\`\`php {all|8|8,3}
namespace App\\Entity;

use Sylius\\Component\\Resource\\Metadata\\Update;
use Sylius\\Component\\Resource\\Metadata\\Resource;
use Sylius\\Component\\Resource\\Model\\ResourceInterface;

#[Resource]
#[Update]
class Book implements ResourceInterface
{
}

\`\`\`
`,title:"Update operation",level:1,content:`# Update operation

\`Update\` operation allows to edit an existing item of your resource.

\`\`\`php {all|8|8,3}
namespace App\\Entity;

use Sylius\\Component\\Resource\\Metadata\\Update;
use Sylius\\Component\\Resource\\Metadata\\Resource;
use Sylius\\Component\\Resource\\Model\\ResourceInterface;

#[Resource]
#[Update]
class Book implements ResourceInterface
{
}

\`\`\``,frontmatter:{srcSequence:"./pages/03_configure_your_operations.md"},index:16,start:164,end:184,source:{filepath:"/home/runner/work/sylius-resource-formation/sylius-resource-formation/pages/03_configure_your_operations.md",raw:`
# Update operation

\`Update\` operation allows to edit an existing item of your resource.

\`\`\`php {all|8|8,3}
namespace App\\Entity;

use Sylius\\Component\\Resource\\Metadata\\Update;
use Sylius\\Component\\Resource\\Metadata\\Resource;
use Sylius\\Component\\Resource\\Model\\ResourceInterface;

#[Resource]
#[Update]
class Book implements ResourceInterface
{
}

\`\`\`
`,title:"Update operation",level:1,content:`# Update operation

\`Update\` operation allows to edit an existing item of your resource.

\`\`\`php {all|8|8,3}
namespace App\\Entity;

use Sylius\\Component\\Resource\\Metadata\\Update;
use Sylius\\Component\\Resource\\Metadata\\Resource;
use Sylius\\Component\\Resource\\Model\\ResourceInterface;

#[Resource]
#[Update]
class Book implements ResourceInterface
{
}

\`\`\``,frontmatter:{},index:9,start:164,end:184},filepath:"/home/runner/work/sylius-resource-formation/sylius-resource-formation/pages/03_configure_your_operations.md",noteHTML:"",id:16,no:17},__clicksElements:[],__preloaded:!1}},{path:"18",name:"page-18",component:JE,meta:{srcSequence:"./pages/03_configure_your_operations.md",slide:{raw:`
# Update operation

It will configure this route for your \`update\` operation.

| Name            | Method          | Path             |
|-----------------|-----------------|------------------|
| app_book_update | GET, PUT, PATCH | /books/{id}/edit |
`,title:"Update operation",level:1,content:`# Update operation

It will configure this route for your \`update\` operation.

| Name            | Method          | Path             |
|-----------------|-----------------|------------------|
| app_book_update | GET, PUT, PATCH | /books/{id}/edit |`,frontmatter:{srcSequence:"./pages/03_configure_your_operations.md"},index:17,start:185,end:194,source:{filepath:"/home/runner/work/sylius-resource-formation/sylius-resource-formation/pages/03_configure_your_operations.md",raw:`
# Update operation

It will configure this route for your \`update\` operation.

| Name            | Method          | Path             |
|-----------------|-----------------|------------------|
| app_book_update | GET, PUT, PATCH | /books/{id}/edit |
`,title:"Update operation",level:1,content:`# Update operation

It will configure this route for your \`update\` operation.

| Name            | Method          | Path             |
|-----------------|-----------------|------------------|
| app_book_update | GET, PUT, PATCH | /books/{id}/edit |`,frontmatter:{},index:10,start:185,end:194},filepath:"/home/runner/work/sylius-resource-formation/sylius-resource-formation/pages/03_configure_your_operations.md",noteHTML:"",id:17,no:18},__clicksElements:[],__preloaded:!1}},{path:"19",name:"page-19",component:ob,meta:{srcSequence:"./pages/03_configure_your_operations.md",slide:{raw:`
# Update operation

On your Twig template, these variables are available

| Name      | Type                                      |
|-----------|-------------------------------------------|
| form      | App\\Form\\BookType                         |
| resource  | App\\Entity\\Book                           |
| book      | App\\Entity\\Book                           |
| operation | Sylius\\Component\\Resource\\Metadata\\Update |
| app       | Symfony\\Bridge\\Twig\\AppVariable           |
`,title:"Update operation",level:1,content:`# Update operation

On your Twig template, these variables are available

| Name      | Type                                      |
|-----------|-------------------------------------------|
| form      | App\\Form\\BookType                         |
| resource  | App\\Entity\\Book                           |
| book      | App\\Entity\\Book                           |
| operation | Sylius\\Component\\Resource\\Metadata\\Update |
| app       | Symfony\\Bridge\\Twig\\AppVariable           |`,frontmatter:{srcSequence:"./pages/03_configure_your_operations.md"},index:18,start:195,end:208,source:{filepath:"/home/runner/work/sylius-resource-formation/sylius-resource-formation/pages/03_configure_your_operations.md",raw:`
# Update operation

On your Twig template, these variables are available

| Name      | Type                                      |
|-----------|-------------------------------------------|
| form      | App\\Form\\BookType                         |
| resource  | App\\Entity\\Book                           |
| book      | App\\Entity\\Book                           |
| operation | Sylius\\Component\\Resource\\Metadata\\Update |
| app       | Symfony\\Bridge\\Twig\\AppVariable           |
`,title:"Update operation",level:1,content:`# Update operation

On your Twig template, these variables are available

| Name      | Type                                      |
|-----------|-------------------------------------------|
| form      | App\\Form\\BookType                         |
| resource  | App\\Entity\\Book                           |
| book      | App\\Entity\\Book                           |
| operation | Sylius\\Component\\Resource\\Metadata\\Update |
| app       | Symfony\\Bridge\\Twig\\AppVariable           |`,frontmatter:{},index:11,start:195,end:208},filepath:"/home/runner/work/sylius-resource-formation/sylius-resource-formation/pages/03_configure_your_operations.md",noteHTML:"",id:18,no:19},__clicksElements:[],__preloaded:!1}},{path:"20",name:"page-20",component:cb,meta:{srcSequence:"./pages/03_configure_your_operations.md",slide:{raw:`
# Delete operation

\`Delete\` operation allows to remove an existing item of your resource.

\`\`\`php {all|8|8,3}
namespace App\\Entity;

use Sylius\\Component\\Resource\\Metadata\\Delete;
use Sylius\\Component\\Resource\\Metadata\\Resource;
use Sylius\\Component\\Resource\\Model\\ResourceInterface;

#[Resource]
#[Delete]
class Book implements ResourceInterface
{
}

\`\`\`
`,title:"Delete operation",level:1,content:`# Delete operation

\`Delete\` operation allows to remove an existing item of your resource.

\`\`\`php {all|8|8,3}
namespace App\\Entity;

use Sylius\\Component\\Resource\\Metadata\\Delete;
use Sylius\\Component\\Resource\\Metadata\\Resource;
use Sylius\\Component\\Resource\\Model\\ResourceInterface;

#[Resource]
#[Delete]
class Book implements ResourceInterface
{
}

\`\`\``,frontmatter:{srcSequence:"./pages/03_configure_your_operations.md"},index:19,start:209,end:229,source:{filepath:"/home/runner/work/sylius-resource-formation/sylius-resource-formation/pages/03_configure_your_operations.md",raw:`
# Delete operation

\`Delete\` operation allows to remove an existing item of your resource.

\`\`\`php {all|8|8,3}
namespace App\\Entity;

use Sylius\\Component\\Resource\\Metadata\\Delete;
use Sylius\\Component\\Resource\\Metadata\\Resource;
use Sylius\\Component\\Resource\\Model\\ResourceInterface;

#[Resource]
#[Delete]
class Book implements ResourceInterface
{
}

\`\`\`
`,title:"Delete operation",level:1,content:`# Delete operation

\`Delete\` operation allows to remove an existing item of your resource.

\`\`\`php {all|8|8,3}
namespace App\\Entity;

use Sylius\\Component\\Resource\\Metadata\\Delete;
use Sylius\\Component\\Resource\\Metadata\\Resource;
use Sylius\\Component\\Resource\\Model\\ResourceInterface;

#[Resource]
#[Delete]
class Book implements ResourceInterface
{
}

\`\`\``,frontmatter:{},index:12,start:209,end:229},filepath:"/home/runner/work/sylius-resource-formation/sylius-resource-formation/pages/03_configure_your_operations.md",noteHTML:"",id:19,no:20},__clicksElements:[],__preloaded:!1}},{path:"21",name:"page-21",component:db,meta:{srcSequence:"./pages/03_configure_your_operations.md",slide:{raw:`
# Delete operation

It will configure this route for your \`delete\` operation.

| Name            | Method | Path        |
|-----------------|--------|-------------|
| app_book_delete | DELETE | /books/{id} |
`,title:"Delete operation",level:1,content:`# Delete operation

It will configure this route for your \`delete\` operation.

| Name            | Method | Path        |
|-----------------|--------|-------------|
| app_book_delete | DELETE | /books/{id} |`,frontmatter:{srcSequence:"./pages/03_configure_your_operations.md"},index:20,start:230,end:239,source:{filepath:"/home/runner/work/sylius-resource-formation/sylius-resource-formation/pages/03_configure_your_operations.md",raw:`
# Delete operation

It will configure this route for your \`delete\` operation.

| Name            | Method | Path        |
|-----------------|--------|-------------|
| app_book_delete | DELETE | /books/{id} |
`,title:"Delete operation",level:1,content:`# Delete operation

It will configure this route for your \`delete\` operation.

| Name            | Method | Path        |
|-----------------|--------|-------------|
| app_book_delete | DELETE | /books/{id} |`,frontmatter:{},index:13,start:230,end:239},filepath:"/home/runner/work/sylius-resource-formation/sylius-resource-formation/pages/03_configure_your_operations.md",noteHTML:"",id:20,no:21},__clicksElements:[],__preloaded:!1}},{path:"22",name:"page-22",component:gb,meta:{srcSequence:"./pages/03_configure_your_operations.md",slide:{raw:`
# Bulk delete operation

\`Bulk delete\` operation allows to remove several items of your resource at the same time.

\`\`\`php {all|8|8,3}
namespace App\\Entity;

use Sylius\\Component\\Resource\\Metadata\\BulkDelete;
use Sylius\\Component\\Resource\\Metadata\\Resource;
use Sylius\\Component\\Resource\\Model\\ResourceInterface;

#[Resource]
#[BulkDelete]
class Book implements ResourceInterface
{
}

\`\`\`
`,title:"Bulk delete operation",level:1,content:`# Bulk delete operation

\`Bulk delete\` operation allows to remove several items of your resource at the same time.

\`\`\`php {all|8|8,3}
namespace App\\Entity;

use Sylius\\Component\\Resource\\Metadata\\BulkDelete;
use Sylius\\Component\\Resource\\Metadata\\Resource;
use Sylius\\Component\\Resource\\Model\\ResourceInterface;

#[Resource]
#[BulkDelete]
class Book implements ResourceInterface
{
}

\`\`\``,frontmatter:{srcSequence:"./pages/03_configure_your_operations.md"},index:21,start:240,end:260,source:{filepath:"/home/runner/work/sylius-resource-formation/sylius-resource-formation/pages/03_configure_your_operations.md",raw:`
# Bulk delete operation

\`Bulk delete\` operation allows to remove several items of your resource at the same time.

\`\`\`php {all|8|8,3}
namespace App\\Entity;

use Sylius\\Component\\Resource\\Metadata\\BulkDelete;
use Sylius\\Component\\Resource\\Metadata\\Resource;
use Sylius\\Component\\Resource\\Model\\ResourceInterface;

#[Resource]
#[BulkDelete]
class Book implements ResourceInterface
{
}

\`\`\`
`,title:"Bulk delete operation",level:1,content:`# Bulk delete operation

\`Bulk delete\` operation allows to remove several items of your resource at the same time.

\`\`\`php {all|8|8,3}
namespace App\\Entity;

use Sylius\\Component\\Resource\\Metadata\\BulkDelete;
use Sylius\\Component\\Resource\\Metadata\\Resource;
use Sylius\\Component\\Resource\\Model\\ResourceInterface;

#[Resource]
#[BulkDelete]
class Book implements ResourceInterface
{
}

\`\`\``,frontmatter:{},index:14,start:240,end:260},filepath:"/home/runner/work/sylius-resource-formation/sylius-resource-formation/pages/03_configure_your_operations.md",noteHTML:"",id:21,no:22},__clicksElements:[],__preloaded:!1}},{path:"23",name:"page-23",component:Eb,meta:{srcSequence:"./pages/03_configure_your_operations.md",slide:{raw:`
# Bulk delete operation

It will configure this route for your \`bulk_delete\` operation.

| Name                 | Method | Path               |
|----------------------|--------|--------------------|
| app_book_bulk_delete | DELETE | /books/bulk_delete |    
`,title:"Bulk delete operation",level:1,content:`# Bulk delete operation

It will configure this route for your \`bulk_delete\` operation.

| Name                 | Method | Path               |
|----------------------|--------|--------------------|
| app_book_bulk_delete | DELETE | /books/bulk_delete |`,frontmatter:{srcSequence:"./pages/03_configure_your_operations.md"},index:22,start:261,end:270,source:{filepath:"/home/runner/work/sylius-resource-formation/sylius-resource-formation/pages/03_configure_your_operations.md",raw:`
# Bulk delete operation

It will configure this route for your \`bulk_delete\` operation.

| Name                 | Method | Path               |
|----------------------|--------|--------------------|
| app_book_bulk_delete | DELETE | /books/bulk_delete |    
`,title:"Bulk delete operation",level:1,content:`# Bulk delete operation

It will configure this route for your \`bulk_delete\` operation.

| Name                 | Method | Path               |
|----------------------|--------|--------------------|
| app_book_bulk_delete | DELETE | /books/bulk_delete |`,frontmatter:{},index:15,start:261,end:270},filepath:"/home/runner/work/sylius-resource-formation/sylius-resource-formation/pages/03_configure_your_operations.md",noteHTML:"",id:22,no:23},__clicksElements:[],__preloaded:!1}},{path:"24",name:"page-24",component:Sb,meta:{srcSequence:"./pages/03_configure_your_operations.md",slide:{raw:`
# Show operation

\`Show\` operation allows to view details of an item.

\`\`\`php {all|8|8,3}
namespace App\\Entity;

use Sylius\\Component\\Resource\\Metadata\\Resource;
use Sylius\\Component\\Resource\\Metadata\\Show;
use Sylius\\Component\\Resource\\Model\\ResourceInterface;

#[Resource]
#[Show]
class Book implements ResourceInterface
{
}

\`\`\`
`,title:"Show operation",level:1,content:`# Show operation

\`Show\` operation allows to view details of an item.

\`\`\`php {all|8|8,3}
namespace App\\Entity;

use Sylius\\Component\\Resource\\Metadata\\Resource;
use Sylius\\Component\\Resource\\Metadata\\Show;
use Sylius\\Component\\Resource\\Model\\ResourceInterface;

#[Resource]
#[Show]
class Book implements ResourceInterface
{
}

\`\`\``,frontmatter:{srcSequence:"./pages/03_configure_your_operations.md"},index:23,start:271,end:291,source:{filepath:"/home/runner/work/sylius-resource-formation/sylius-resource-formation/pages/03_configure_your_operations.md",raw:`
# Show operation

\`Show\` operation allows to view details of an item.

\`\`\`php {all|8|8,3}
namespace App\\Entity;

use Sylius\\Component\\Resource\\Metadata\\Resource;
use Sylius\\Component\\Resource\\Metadata\\Show;
use Sylius\\Component\\Resource\\Model\\ResourceInterface;

#[Resource]
#[Show]
class Book implements ResourceInterface
{
}

\`\`\`
`,title:"Show operation",level:1,content:`# Show operation

\`Show\` operation allows to view details of an item.

\`\`\`php {all|8|8,3}
namespace App\\Entity;

use Sylius\\Component\\Resource\\Metadata\\Resource;
use Sylius\\Component\\Resource\\Metadata\\Show;
use Sylius\\Component\\Resource\\Model\\ResourceInterface;

#[Resource]
#[Show]
class Book implements ResourceInterface
{
}

\`\`\``,frontmatter:{},index:16,start:271,end:291},filepath:"/home/runner/work/sylius-resource-formation/sylius-resource-formation/pages/03_configure_your_operations.md",noteHTML:"",id:23,no:24},__clicksElements:[],__preloaded:!1}},{path:"25",name:"page-25",component:Ib,meta:{srcSequence:"./pages/03_configure_your_operations.md",slide:{raw:`
# Show operation

It will configure this route for your \`show\` operation.

| Name            | Method | Path        |
|-----------------|--------|-------------|
| app_book_show   | GET    | /books/{id} |    
`,title:"Show operation",level:1,content:`# Show operation

It will configure this route for your \`show\` operation.

| Name            | Method | Path        |
|-----------------|--------|-------------|
| app_book_show   | GET    | /books/{id} |`,frontmatter:{srcSequence:"./pages/03_configure_your_operations.md"},index:24,start:292,end:301,source:{filepath:"/home/runner/work/sylius-resource-formation/sylius-resource-formation/pages/03_configure_your_operations.md",raw:`
# Show operation

It will configure this route for your \`show\` operation.

| Name            | Method | Path        |
|-----------------|--------|-------------|
| app_book_show   | GET    | /books/{id} |    
`,title:"Show operation",level:1,content:`# Show operation

It will configure this route for your \`show\` operation.

| Name            | Method | Path        |
|-----------------|--------|-------------|
| app_book_show   | GET    | /books/{id} |`,frontmatter:{},index:17,start:292,end:301},filepath:"/home/runner/work/sylius-resource-formation/sylius-resource-formation/pages/03_configure_your_operations.md",noteHTML:"",id:24,no:25},__clicksElements:[],__preloaded:!1}},{path:"26",name:"page-26",component:Lb,meta:{srcSequence:"./pages/03_configure_your_operations.md",slide:{raw:`
# Show operation

On your Twig template, these variables are available

| Name      | Type                                    |
|-----------|-----------------------------------------|
| resource  | App\\Entity\\Book                         |
| book      | App\\Entity\\Book                         |
| operation | Sylius\\Component\\Resource\\Metadata\\Show |
| app       | Symfony\\Bridge\\Twig\\AppVariable         |
`,title:"Show operation",level:1,content:`# Show operation

On your Twig template, these variables are available

| Name      | Type                                    |
|-----------|-----------------------------------------|
| resource  | App\\Entity\\Book                         |
| book      | App\\Entity\\Book                         |
| operation | Sylius\\Component\\Resource\\Metadata\\Show |
| app       | Symfony\\Bridge\\Twig\\AppVariable         |`,frontmatter:{srcSequence:"./pages/03_configure_your_operations.md"},index:25,start:302,end:314,source:{filepath:"/home/runner/work/sylius-resource-formation/sylius-resource-formation/pages/03_configure_your_operations.md",raw:`
# Show operation

On your Twig template, these variables are available

| Name      | Type                                    |
|-----------|-----------------------------------------|
| resource  | App\\Entity\\Book                         |
| book      | App\\Entity\\Book                         |
| operation | Sylius\\Component\\Resource\\Metadata\\Show |
| app       | Symfony\\Bridge\\Twig\\AppVariable         |
`,title:"Show operation",level:1,content:`# Show operation

On your Twig template, these variables are available

| Name      | Type                                    |
|-----------|-----------------------------------------|
| resource  | App\\Entity\\Book                         |
| book      | App\\Entity\\Book                         |
| operation | Sylius\\Component\\Resource\\Metadata\\Show |
| app       | Symfony\\Bridge\\Twig\\AppVariable         |`,frontmatter:{},index:18,start:302,end:314},filepath:"/home/runner/work/sylius-resource-formation/sylius-resource-formation/pages/03_configure_your_operations.md",noteHTML:"",id:25,no:26},__clicksElements:[],__preloaded:!1}},{path:"27",name:"page-27",component:jb,meta:{srcSequence:"./pages/03_configure_your_operations.md",slide:{raw:`
# State machine operation


\`State machine\` operation allows to apply a transition to an item of your resource.

As an example, we add a \`publish\` operation to our book resource.

\`\`\`php {all|8|8,3}
namespace App\\Entity;

use Sylius\\Component\\Resource\\Metadata\\ApplyStateMachineTransition;
use Sylius\\Component\\Resource\\Metadata\\Resource;
use Sylius\\Component\\Resource\\Metadata\\Show;
use Sylius\\Component\\Resource\\Model\\ResourceInterface;

#[Resource]
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

use Sylius\\Component\\Resource\\Metadata\\ApplyStateMachineTransition;
use Sylius\\Component\\Resource\\Metadata\\Resource;
use Sylius\\Component\\Resource\\Metadata\\Show;
use Sylius\\Component\\Resource\\Model\\ResourceInterface;

#[Resource]
#[ApplyStateMachineTransition(stateMachineTransition: 'publish')]
class Book implements ResourceInterface
{
}

\`\`\``,frontmatter:{srcSequence:"./pages/03_configure_your_operations.md"},index:26,start:315,end:339,source:{filepath:"/home/runner/work/sylius-resource-formation/sylius-resource-formation/pages/03_configure_your_operations.md",raw:`
# State machine operation


\`State machine\` operation allows to apply a transition to an item of your resource.

As an example, we add a \`publish\` operation to our book resource.

\`\`\`php {all|8|8,3}
namespace App\\Entity;

use Sylius\\Component\\Resource\\Metadata\\ApplyStateMachineTransition;
use Sylius\\Component\\Resource\\Metadata\\Resource;
use Sylius\\Component\\Resource\\Metadata\\Show;
use Sylius\\Component\\Resource\\Model\\ResourceInterface;

#[Resource]
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

use Sylius\\Component\\Resource\\Metadata\\ApplyStateMachineTransition;
use Sylius\\Component\\Resource\\Metadata\\Resource;
use Sylius\\Component\\Resource\\Metadata\\Show;
use Sylius\\Component\\Resource\\Model\\ResourceInterface;

#[Resource]
#[ApplyStateMachineTransition(stateMachineTransition: 'publish')]
class Book implements ResourceInterface
{
}

\`\`\``,frontmatter:{},index:19,start:315,end:339},filepath:"/home/runner/work/sylius-resource-formation/sylius-resource-formation/pages/03_configure_your_operations.md",noteHTML:"",id:26,no:27},__clicksElements:[],__preloaded:!1}},{path:"28",name:"page-28",component:Yb,meta:{srcSequence:"./pages/03_configure_your_operations.md",slide:{raw:`
# State machine operation

It will configure this route for your \`apply_state_machine_transition\` operation.

| Name              | Method | Path                |
|-------------------|--------|---------------------|
| app_book_publish  | GET    | /books/{id}/publish |    
`,title:"State machine operation",level:1,content:`# State machine operation

It will configure this route for your \`apply_state_machine_transition\` operation.

| Name              | Method | Path                |
|-------------------|--------|---------------------|
| app_book_publish  | GET    | /books/{id}/publish |`,frontmatter:{srcSequence:"./pages/03_configure_your_operations.md"},index:27,start:340,end:349,source:{filepath:"/home/runner/work/sylius-resource-formation/sylius-resource-formation/pages/03_configure_your_operations.md",raw:`
# State machine operation

It will configure this route for your \`apply_state_machine_transition\` operation.

| Name              | Method | Path                |
|-------------------|--------|---------------------|
| app_book_publish  | GET    | /books/{id}/publish |    
`,title:"State machine operation",level:1,content:`# State machine operation

It will configure this route for your \`apply_state_machine_transition\` operation.

| Name              | Method | Path                |
|-------------------|--------|---------------------|
| app_book_publish  | GET    | /books/{id}/publish |`,frontmatter:{},index:20,start:340,end:349},filepath:"/home/runner/work/sylius-resource-formation/sylius-resource-formation/pages/03_configure_your_operations.md",noteHTML:"",id:27,no:28},__clicksElements:[],__preloaded:!1}},{path:"29",name:"page-29",component:s6,meta:{srcSequence:"./pages/03_configure_your_operations.md",slide:{raw:`
# Configure the templates' dir

<v-clicks>

It defines the templates directory for your operations.

As an example, we defines \`index\`, \`create\`, \`update\` and \`show\` operations to our book resource.

\`\`\`php {all|10}
namespace App\\Entity;

use Sylius\\Component\\Resource\\Metadata\\Create;
use Sylius\\Component\\Resource\\Metadata\\Index;
use Sylius\\Component\\Resource\\Metadata\\Resource;
use Sylius\\Component\\Resource\\Metadata\\Show;
use Sylius\\Component\\Resource\\Metadata\\Update;
use Sylius\\Component\\Resource\\Model\\ResourceInterface;

#[Resource(templatesDir: 'book')]
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

use Sylius\\Component\\Resource\\Metadata\\Create;
use Sylius\\Component\\Resource\\Metadata\\Index;
use Sylius\\Component\\Resource\\Metadata\\Resource;
use Sylius\\Component\\Resource\\Metadata\\Show;
use Sylius\\Component\\Resource\\Metadata\\Update;
use Sylius\\Component\\Resource\\Model\\ResourceInterface;

#[Resource(templatesDir: 'book')]
#[Index]
#[Create]
#[Update]
#[Show]
class Book implements ResourceInterface
{
}

\`\`\`

</v-clicks>`,frontmatter:{srcSequence:"./pages/03_configure_your_operations.md"},index:28,start:350,end:382,source:{filepath:"/home/runner/work/sylius-resource-formation/sylius-resource-formation/pages/03_configure_your_operations.md",raw:`
# Configure the templates' dir

<v-clicks>

It defines the templates directory for your operations.

As an example, we defines \`index\`, \`create\`, \`update\` and \`show\` operations to our book resource.

\`\`\`php {all|10}
namespace App\\Entity;

use Sylius\\Component\\Resource\\Metadata\\Create;
use Sylius\\Component\\Resource\\Metadata\\Index;
use Sylius\\Component\\Resource\\Metadata\\Resource;
use Sylius\\Component\\Resource\\Metadata\\Show;
use Sylius\\Component\\Resource\\Metadata\\Update;
use Sylius\\Component\\Resource\\Model\\ResourceInterface;

#[Resource(templatesDir: 'book')]
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

use Sylius\\Component\\Resource\\Metadata\\Create;
use Sylius\\Component\\Resource\\Metadata\\Index;
use Sylius\\Component\\Resource\\Metadata\\Resource;
use Sylius\\Component\\Resource\\Metadata\\Show;
use Sylius\\Component\\Resource\\Metadata\\Update;
use Sylius\\Component\\Resource\\Model\\ResourceInterface;

#[Resource(templatesDir: 'book')]
#[Index]
#[Create]
#[Update]
#[Show]
class Book implements ResourceInterface
{
}

\`\`\`

</v-clicks>`,frontmatter:{},index:21,start:350,end:382},filepath:"/home/runner/work/sylius-resource-formation/sylius-resource-formation/pages/03_configure_your_operations.md",noteHTML:"",id:28,no:29},__clicksElements:[],__preloaded:!1}},{path:"30",name:"page-30",component:r6,meta:{srcSequence:"./pages/03_configure_your_operations.md",slide:{raw:`
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
| show      | templates/books/show.html.twig   |`,frontmatter:{srcSequence:"./pages/03_configure_your_operations.md"},index:29,start:383,end:393,source:{filepath:"/home/runner/work/sylius-resource-formation/sylius-resource-formation/pages/03_configure_your_operations.md",raw:`
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
| show      | templates/books/show.html.twig   |`,frontmatter:{},index:22,start:383,end:393},filepath:"/home/runner/work/sylius-resource-formation/sylius-resource-formation/pages/03_configure_your_operations.md",noteHTML:"",id:29,no:30},__clicksElements:[],__preloaded:!1}},{path:"31",name:"page-31",component:p6,meta:{srcSequence:"./pages/03_configure_your_operations.md",slide:{raw:`
# Configure the routes' prefix

<v-clicks>

It adds a prefix to the path for each operation.

\`\`\`php {all|5}
namespace App\\Entity;

// [...]

#[Resource(routePrefix: 'admin')]
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

#[Resource(routePrefix: 'admin')]
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

</v-clicks>`,frontmatter:{srcSequence:"./pages/03_configure_your_operations.md"},index:30,start:394,end:422,source:{filepath:"/home/runner/work/sylius-resource-formation/sylius-resource-formation/pages/03_configure_your_operations.md",raw:`
# Configure the routes' prefix

<v-clicks>

It adds a prefix to the path for each operation.

\`\`\`php {all|5}
namespace App\\Entity;

// [...]

#[Resource(routePrefix: 'admin')]
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

#[Resource(routePrefix: 'admin')]
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

</v-clicks>`,frontmatter:{},index:23,start:394,end:422},filepath:"/home/runner/work/sylius-resource-formation/sylius-resource-formation/pages/03_configure_your_operations.md",noteHTML:"",id:30,no:31},__clicksElements:[],__preloaded:!1}},{path:"32",name:"page-32",component:f6,meta:{srcSequence:"./pages/03_configure_your_operations.md",slide:{raw:`
# Configure the routes' prefix

| Name                   | Method          | Path                     |
|------------------------|-----------------|--------------------------|
| app_book_index         | GET             | /admin/books/            |
| app_book_create        | GET, POST       | /admin/books/new         |                     
| app_book_update        | GET, PUT, PATCH | /admin/books/{id}/edit   |        
| app_book_delete        | DELETE          | /admin/books/{id}        |
| app_book_bulk_delete   | DELETE          | /admin/books/bulk_delete |               
| app_book_show          | GET             | /admin/books/{id}        |
`,title:"Configure the routes' prefix",level:1,content:`# Configure the routes' prefix

| Name                   | Method          | Path                     |
|------------------------|-----------------|--------------------------|
| app_book_index         | GET             | /admin/books/            |
| app_book_create        | GET, POST       | /admin/books/new         |                     
| app_book_update        | GET, PUT, PATCH | /admin/books/{id}/edit   |        
| app_book_delete        | DELETE          | /admin/books/{id}        |
| app_book_bulk_delete   | DELETE          | /admin/books/bulk_delete |               
| app_book_show          | GET             | /admin/books/{id}        |`,frontmatter:{srcSequence:"./pages/03_configure_your_operations.md"},index:31,start:423,end:435,source:{filepath:"/home/runner/work/sylius-resource-formation/sylius-resource-formation/pages/03_configure_your_operations.md",raw:`
# Configure the routes' prefix

| Name                   | Method          | Path                     |
|------------------------|-----------------|--------------------------|
| app_book_index         | GET             | /admin/books/            |
| app_book_create        | GET, POST       | /admin/books/new         |                     
| app_book_update        | GET, PUT, PATCH | /admin/books/{id}/edit   |        
| app_book_delete        | DELETE          | /admin/books/{id}        |
| app_book_bulk_delete   | DELETE          | /admin/books/bulk_delete |               
| app_book_show          | GET             | /admin/books/{id}        |
`,title:"Configure the routes' prefix",level:1,content:`# Configure the routes' prefix

| Name                   | Method          | Path                     |
|------------------------|-----------------|--------------------------|
| app_book_index         | GET             | /admin/books/            |
| app_book_create        | GET, POST       | /admin/books/new         |                     
| app_book_update        | GET, PUT, PATCH | /admin/books/{id}/edit   |        
| app_book_delete        | DELETE          | /admin/books/{id}        |
| app_book_bulk_delete   | DELETE          | /admin/books/bulk_delete |               
| app_book_show          | GET             | /admin/books/{id}        |`,frontmatter:{},index:24,start:423,end:435},filepath:"/home/runner/work/sylius-resource-formation/sylius-resource-formation/pages/03_configure_your_operations.md",noteHTML:"",id:31,no:32},__clicksElements:[],__preloaded:!1}},{path:"33",name:"page-33",component:B6,meta:{srcSequence:"./pages/03_configure_your_operations.md",slide:{raw:`
# Configure the section

It changes the route name for each operation.

\`\`\`php {all|5|5,12}
namespace App\\Entity;

// [...]

#[Resource(section: 'admin', routePrefix: 'admin')]
#[Index]
#[Create]
#[Update]
#[Delete]
#[BulkDelete]

#[Resource(section: 'shop')]
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

#[Resource(section: 'admin', routePrefix: 'admin')]
#[Index]
#[Create]
#[Update]
#[Delete]
#[BulkDelete]

#[Resource(section: 'shop')]
#[Index]
#[Show]
class Book implements ResourceInterface
{
}

\`\`\``,frontmatter:{srcSequence:"./pages/03_configure_your_operations.md"},index:32,start:436,end:462,source:{filepath:"/home/runner/work/sylius-resource-formation/sylius-resource-formation/pages/03_configure_your_operations.md",raw:`
# Configure the section

It changes the route name for each operation.

\`\`\`php {all|5|5,12}
namespace App\\Entity;

// [...]

#[Resource(section: 'admin', routePrefix: 'admin')]
#[Index]
#[Create]
#[Update]
#[Delete]
#[BulkDelete]

#[Resource(section: 'shop')]
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

#[Resource(section: 'admin', routePrefix: 'admin')]
#[Index]
#[Create]
#[Update]
#[Delete]
#[BulkDelete]

#[Resource(section: 'shop')]
#[Index]
#[Show]
class Book implements ResourceInterface
{
}

\`\`\``,frontmatter:{},index:25,start:436,end:462},filepath:"/home/runner/work/sylius-resource-formation/sylius-resource-formation/pages/03_configure_your_operations.md",noteHTML:"",id:32,no:33},__clicksElements:[],__preloaded:!1}},{path:"34",name:"page-34",component:E6,meta:{srcSequence:"./pages/03_configure_your_operations.md",slide:{raw:`
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
| app_shop_book_show         | GET             | /books/{id}              |`,frontmatter:{srcSequence:"./pages/03_configure_your_operations.md"},index:33,start:463,end:476,source:{filepath:"/home/runner/work/sylius-resource-formation/sylius-resource-formation/pages/03_configure_your_operations.md",raw:`
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
| app_shop_book_show         | GET             | /books/{id}              |`,frontmatter:{},index:26,start:463,end:476},filepath:"/home/runner/work/sylius-resource-formation/sylius-resource-formation/pages/03_configure_your_operations.md",noteHTML:"",id:33,no:34},__clicksElements:[],__preloaded:!1}},{path:"35",name:"page-35",component:w6,meta:{title:"Redirect",srcSequence:"./pages/04_redirect.md",slide:{raw:null,title:"Redirect",level:1,content:`# Redirect

<v-clicks>

After that an action has been performed, the operation can be redirected to another operation.

</v-clicks>`,frontmatter:{title:"Redirect",srcSequence:"./pages/04_redirect.md"},index:34,start:0,end:8,source:{filepath:"/home/runner/work/sylius-resource-formation/sylius-resource-formation/pages/04_redirect.md",raw:`# Redirect

<v-clicks>

After that an action has been performed, the operation can be redirected to another operation.

</v-clicks>
`,title:"Redirect",level:1,content:`# Redirect

<v-clicks>

After that an action has been performed, the operation can be redirected to another operation.

</v-clicks>`,frontmatter:{title:"Redirect"},index:0,start:0,end:8},inline:{raw:`---
src: ./pages/04_redirect.md
---
`,content:"",frontmatter:{},index:4,start:52,end:56},filepath:"/home/runner/work/sylius-resource-formation/sylius-resource-formation/pages/04_redirect.md",noteHTML:"",id:34,no:35},__clicksElements:[],__preloaded:!1}},{path:"36",name:"page-36",component:$6,meta:{srcSequence:"./pages/04_redirect.md",slide:{raw:`
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

</v-clicks>`,frontmatter:{srcSequence:"./pages/04_redirect.md"},index:35,start:9,end:25,source:{filepath:"/home/runner/work/sylius-resource-formation/sylius-resource-formation/pages/04_redirect.md",raw:`
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

</v-clicks>`,frontmatter:{},index:1,start:9,end:25},filepath:"/home/runner/work/sylius-resource-formation/sylius-resource-formation/pages/04_redirect.md",noteHTML:"",id:35,no:36},__clicksElements:[],__preloaded:!1}},{path:"37",name:"page-37",component:L6,meta:{srcSequence:"./pages/04_redirect.md",slide:{raw:`
# Custom redirection

<v-clicks>

As an example, let's configure a custom redirection fo create & update operations.

\`\`\`php {all|12-13}

declare(strict_types=1);

namespace App\\Entity;

use Sylius\\Component\\Resource\\Metadata\\Create;
use Sylius\\Component\\Resource\\Metadata\\Resource;
use Sylius\\Component\\Resource\\Metadata\\Update;
use Sylius\\Component\\Resource\\Model\\ResourceInterface;

#[Resource]
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

use Sylius\\Component\\Resource\\Metadata\\Create;
use Sylius\\Component\\Resource\\Metadata\\Resource;
use Sylius\\Component\\Resource\\Metadata\\Update;
use Sylius\\Component\\Resource\\Model\\ResourceInterface;

#[Resource]
#[Create(redirectToRoute: 'app_book_update')]
#[Update(redirectToRoute: 'app_book_update')]
class Book implements ResourceInterface
{
}
\`\`\`

After adding or editing a book, it will be redirected to the edition page of a book.

</v-clicks>`,frontmatter:{srcSequence:"./pages/04_redirect.md"},index:36,start:26,end:56,source:{filepath:"/home/runner/work/sylius-resource-formation/sylius-resource-formation/pages/04_redirect.md",raw:`
# Custom redirection

<v-clicks>

As an example, let's configure a custom redirection fo create & update operations.

\`\`\`php {all|12-13}

declare(strict_types=1);

namespace App\\Entity;

use Sylius\\Component\\Resource\\Metadata\\Create;
use Sylius\\Component\\Resource\\Metadata\\Resource;
use Sylius\\Component\\Resource\\Metadata\\Update;
use Sylius\\Component\\Resource\\Model\\ResourceInterface;

#[Resource]
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

use Sylius\\Component\\Resource\\Metadata\\Create;
use Sylius\\Component\\Resource\\Metadata\\Resource;
use Sylius\\Component\\Resource\\Metadata\\Update;
use Sylius\\Component\\Resource\\Model\\ResourceInterface;

#[Resource]
#[Create(redirectToRoute: 'app_book_update')]
#[Update(redirectToRoute: 'app_book_update')]
class Book implements ResourceInterface
{
}
\`\`\`

After adding or editing a book, it will be redirected to the edition page of a book.

</v-clicks>`,frontmatter:{},index:2,start:26,end:56},filepath:"/home/runner/work/sylius-resource-formation/sylius-resource-formation/pages/04_redirect.md",noteHTML:"",id:36,no:37},__clicksElements:[],__preloaded:!1}},{path:"38",name:"page-38",component:G6,meta:{srcSequence:"./pages/04_redirect.md",slide:{raw:`
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

</v-clicks>`,frontmatter:{srcSequence:"./pages/04_redirect.md"},index:37,start:57,end:73,source:{filepath:"/home/runner/work/sylius-resource-formation/sylius-resource-formation/pages/04_redirect.md",raw:`
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

</v-clicks>`,frontmatter:{},index:3,start:57,end:73},filepath:"/home/runner/work/sylius-resource-formation/sylius-resource-formation/pages/04_redirect.md",noteHTML:"",id:37,no:38},__clicksElements:[],__preloaded:!1}},{path:"39",name:"page-39",component:Z6,meta:{srcSequence:"./pages/04_redirect.md",slide:{raw:`
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

</v-clicks>`,frontmatter:{srcSequence:"./pages/04_redirect.md"},index:38,start:74,end:107,source:{filepath:"/home/runner/work/sylius-resource-formation/sylius-resource-formation/pages/04_redirect.md",raw:`
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

</v-clicks>`,frontmatter:{},index:4,start:74,end:107},filepath:"/home/runner/work/sylius-resource-formation/sylius-resource-formation/pages/04_redirect.md",noteHTML:"",id:38,no:39},__clicksElements:[],__preloaded:!1}},{path:"40",name:"page-40",component:e4,meta:{title:"Resource factories",srcSequence:"./pages/05_resource_factories.md",slide:{raw:null,title:"Resource factories",level:1,content:`# Resource factories

<v-clicks>

Resource factories are used on Create operations to instantiate your resource.

</v-clicks>`,frontmatter:{title:"Resource factories",srcSequence:"./pages/05_resource_factories.md"},index:39,start:0,end:8,source:{filepath:"/home/runner/work/sylius-resource-formation/sylius-resource-formation/pages/05_resource_factories.md",raw:`# Resource factories

<v-clicks>

Resource factories are used on Create operations to instantiate your resource.

</v-clicks>
`,title:"Resource factories",level:1,content:`# Resource factories

<v-clicks>

Resource factories are used on Create operations to instantiate your resource.

</v-clicks>`,frontmatter:{title:"Resource factories"},index:0,start:0,end:8},inline:{raw:`---
src: ./pages/05_resource_factories.md
---
`,content:"",frontmatter:{},index:5,start:56,end:60},filepath:"/home/runner/work/sylius-resource-formation/sylius-resource-formation/pages/05_resource_factories.md",noteHTML:"",id:39,no:40},__clicksElements:[],__preloaded:!1}},{path:"41",name:"page-41",component:r4,meta:{srcSequence:"./pages/05_resource_factories.md",slide:{raw:`
# Default factory for your resource

<v-clicks>

By default, a resource factory is defined to your resource \`Sylius\\Component\\Resource\\Factory\\Factory\`.

It has a \`createNew\` method with no arguments.

</v-clicks>
`,title:"Default factory for your resource",level:1,content:`# Default factory for your resource

<v-clicks>

By default, a resource factory is defined to your resource \`Sylius\\Component\\Resource\\Factory\\Factory\`.

It has a \`createNew\` method with no arguments.

</v-clicks>`,frontmatter:{srcSequence:"./pages/05_resource_factories.md"},index:40,start:9,end:20,source:{filepath:"/home/runner/work/sylius-resource-formation/sylius-resource-formation/pages/05_resource_factories.md",raw:`
# Default factory for your resource

<v-clicks>

By default, a resource factory is defined to your resource \`Sylius\\Component\\Resource\\Factory\\Factory\`.

It has a \`createNew\` method with no arguments.

</v-clicks>
`,title:"Default factory for your resource",level:1,content:`# Default factory for your resource

<v-clicks>

By default, a resource factory is defined to your resource \`Sylius\\Component\\Resource\\Factory\\Factory\`.

It has a \`createNew\` method with no arguments.

</v-clicks>`,frontmatter:{},index:1,start:9,end:20},filepath:"/home/runner/work/sylius-resource-formation/sylius-resource-formation/pages/05_resource_factories.md",noteHTML:"",id:40,no:41},__clicksElements:[],__preloaded:!1}},{path:"42",name:"page-42",component:i4,meta:{srcSequence:"./pages/05_resource_factories.md",slide:{raw:`
# Define your custom factory

\`\`\`php {all|10|10,8|12|14|15|17}
// src/Factory/BookRepository.php

declare(strict_types=1);

namespace App\\Factory;

use App\\Entity\\Book;
use Sylius\\Component\\Resource\\Factory\\FactoryInterface;

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
use Sylius\\Component\\Resource\\Factory\\FactoryInterface;

final class BookFactory implements FactoryInterface
{
    public function createNew(): Book
    {
        $book = new Book();
        $book->setCreatedAt(new \\DateTimeImmutable());
        
        return $book;
    }
}
\`\`\``,frontmatter:{srcSequence:"./pages/05_resource_factories.md"},index:41,start:21,end:46,source:{filepath:"/home/runner/work/sylius-resource-formation/sylius-resource-formation/pages/05_resource_factories.md",raw:`
# Define your custom factory

\`\`\`php {all|10|10,8|12|14|15|17}
// src/Factory/BookRepository.php

declare(strict_types=1);

namespace App\\Factory;

use App\\Entity\\Book;
use Sylius\\Component\\Resource\\Factory\\FactoryInterface;

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
use Sylius\\Component\\Resource\\Factory\\FactoryInterface;

final class BookFactory implements FactoryInterface
{
    public function createNew(): Book
    {
        $book = new Book();
        $book->setCreatedAt(new \\DateTimeImmutable());
        
        return $book;
    }
}
\`\`\``,frontmatter:{},index:2,start:21,end:46},filepath:"/home/runner/work/sylius-resource-formation/sylius-resource-formation/pages/05_resource_factories.md",noteHTML:"",id:41,no:42},__clicksElements:[],__preloaded:!1}},{path:"43",name:"page-43",component:d4,meta:{srcSequence:"./pages/05_resource_factories.md",slide:{raw:`
# Configure your factory

\`\`\`yaml
# config/services.yaml
services:
    App\\Factory\\BookFactory:
        decorates: '@.inner'
\`\`\`
`,title:"Configure your factory",level:1,content:`# Configure your factory

\`\`\`yaml
# config/services.yaml
services:
    App\\Factory\\BookFactory:
        decorates: '@.inner'
\`\`\``,frontmatter:{srcSequence:"./pages/05_resource_factories.md"},index:42,start:47,end:57,source:{filepath:"/home/runner/work/sylius-resource-formation/sylius-resource-formation/pages/05_resource_factories.md",raw:`
# Configure your factory

\`\`\`yaml
# config/services.yaml
services:
    App\\Factory\\BookFactory:
        decorates: '@.inner'
\`\`\`
`,title:"Configure your factory",level:1,content:`# Configure your factory

\`\`\`yaml
# config/services.yaml
services:
    App\\Factory\\BookFactory:
        decorates: '@.inner'
\`\`\``,frontmatter:{},index:3,start:47,end:57},filepath:"/home/runner/work/sylius-resource-formation/sylius-resource-formation/pages/05_resource_factories.md",noteHTML:"",id:42,no:43},__clicksElements:[],__preloaded:!1}},{path:"44",name:"page-44",component:_4,meta:{srcSequence:"./pages/05_resource_factories.md",slide:{raw:`
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
\`\`\``,frontmatter:{srcSequence:"./pages/05_resource_factories.md"},index:43,start:58,end:88,source:{filepath:"/home/runner/work/sylius-resource-formation/sylius-resource-formation/pages/05_resource_factories.md",raw:`
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
\`\`\``,frontmatter:{},index:4,start:58,end:88},filepath:"/home/runner/work/sylius-resource-formation/sylius-resource-formation/pages/05_resource_factories.md",noteHTML:"",id:43,no:44},__clicksElements:[],__preloaded:!1}},{path:"45",name:"page-45",component:v4,meta:{srcSequence:"./pages/05_resource_factories.md",slide:{raw:`
# Use it on your create operation

\`\`\`php {all|14}
// src/Entity/Book.php

declare(strict_types=1);

namespace App\\Entity\\Book;

use Sylius\\Component\\Resource\\Metadata\\Create;
use Sylius\\Component\\Resource\\Metadata\\Resource;
use Sylius\\Component\\Resource\\Model\\ResourceInterface;

#[Resource]
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

use Sylius\\Component\\Resource\\Metadata\\Create;
use Sylius\\Component\\Resource\\Metadata\\Resource;
use Sylius\\Component\\Resource\\Model\\ResourceInterface;

#[Resource]
#[Create(
    path: 'authors/{authorId}/books',
    factoryMethod: 'createWithCreator',
)]
class Book implements ResourceInterface
{
}
\`\`\``,frontmatter:{srcSequence:"./pages/05_resource_factories.md"},index:44,start:89,end:113,source:{filepath:"/home/runner/work/sylius-resource-formation/sylius-resource-formation/pages/05_resource_factories.md",raw:`
# Use it on your create operation

\`\`\`php {all|14}
// src/Entity/Book.php

declare(strict_types=1);

namespace App\\Entity\\Book;

use Sylius\\Component\\Resource\\Metadata\\Create;
use Sylius\\Component\\Resource\\Metadata\\Resource;
use Sylius\\Component\\Resource\\Model\\ResourceInterface;

#[Resource]
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

use Sylius\\Component\\Resource\\Metadata\\Create;
use Sylius\\Component\\Resource\\Metadata\\Resource;
use Sylius\\Component\\Resource\\Model\\ResourceInterface;

#[Resource]
#[Create(
    path: 'authors/{authorId}/books',
    factoryMethod: 'createWithCreator',
)]
class Book implements ResourceInterface
{
}
\`\`\``,frontmatter:{},index:5,start:89,end:113},filepath:"/home/runner/work/sylius-resource-formation/sylius-resource-formation/pages/05_resource_factories.md",noteHTML:"",id:44,no:45},__clicksElements:[],__preloaded:!1}},{path:"46",name:"page-46",component:S4,meta:{srcSequence:"./pages/05_resource_factories.md",slide:{raw:`
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

</v-clicks>`,frontmatter:{srcSequence:"./pages/05_resource_factories.md"},index:45,start:114,end:131,source:{filepath:"/home/runner/work/sylius-resource-formation/sylius-resource-formation/pages/05_resource_factories.md",raw:`
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

</v-clicks>`,frontmatter:{},index:6,start:114,end:131},filepath:"/home/runner/work/sylius-resource-formation/sylius-resource-formation/pages/05_resource_factories.md",noteHTML:"",id:45,no:46},__clicksElements:[],__preloaded:!1}},{path:"47",name:"page-47",component:F4,meta:{srcSequence:"./pages/05_resource_factories.md",slide:{raw:`
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
\`\`\``,frontmatter:{srcSequence:"./pages/05_resource_factories.md"},index:46,start:132,end:162,source:{filepath:"/home/runner/work/sylius-resource-formation/sylius-resource-formation/pages/05_resource_factories.md",raw:`
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
\`\`\``,frontmatter:{},index:7,start:132,end:162},filepath:"/home/runner/work/sylius-resource-formation/sylius-resource-formation/pages/05_resource_factories.md",noteHTML:"",id:46,no:47},__clicksElements:[],__preloaded:!1}},{path:"48",name:"page-48",component:M4,meta:{srcSequence:"./pages/05_resource_factories.md",slide:{raw:`
# Use it on your create operation

\`\`\`php {all|14|15}
// src/Entity/Book.php

declare(strict_types=1);

namespace App\\Entity\\Book;

use Sylius\\Component\\Resource\\Metadata\\Create;
use Sylius\\Component\\Resource\\Metadata\\Resource;
use Sylius\\Component\\Resource\\Model\\ResourceInterface;

#[Resource]
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

use Sylius\\Component\\Resource\\Metadata\\Create;
use Sylius\\Component\\Resource\\Metadata\\Resource;
use Sylius\\Component\\Resource\\Model\\ResourceInterface;

#[Resource]
#[Create(
    path: 'authors/{authorId}/books',
    factoryMethod: 'createForAuthor',
    factoryArguments: ['authorId' => "request.attributes.get('authorId')"],
)]
class Book implements ResourceInterface
{
}
\`\`\``,frontmatter:{srcSequence:"./pages/05_resource_factories.md"},index:47,start:163,end:188,source:{filepath:"/home/runner/work/sylius-resource-formation/sylius-resource-formation/pages/05_resource_factories.md",raw:`
# Use it on your create operation

\`\`\`php {all|14|15}
// src/Entity/Book.php

declare(strict_types=1);

namespace App\\Entity\\Book;

use Sylius\\Component\\Resource\\Metadata\\Create;
use Sylius\\Component\\Resource\\Metadata\\Resource;
use Sylius\\Component\\Resource\\Model\\ResourceInterface;

#[Resource]
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

use Sylius\\Component\\Resource\\Metadata\\Create;
use Sylius\\Component\\Resource\\Metadata\\Resource;
use Sylius\\Component\\Resource\\Model\\ResourceInterface;

#[Resource]
#[Create(
    path: 'authors/{authorId}/books',
    factoryMethod: 'createForAuthor',
    factoryArguments: ['authorId' => "request.attributes.get('authorId')"],
)]
class Book implements ResourceInterface
{
}
\`\`\``,frontmatter:{},index:8,start:163,end:188},filepath:"/home/runner/work/sylius-resource-formation/sylius-resource-formation/pages/05_resource_factories.md",noteHTML:"",id:47,no:48},__clicksElements:[],__preloaded:!1}},{path:"49",name:"page-49",component:q4,meta:{srcSequence:"./pages/05_resource_factories.md",slide:{raw:`
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

</v-clicks>`,frontmatter:{srcSequence:"./pages/05_resource_factories.md"},index:48,start:189,end:222,source:{filepath:"/home/runner/work/sylius-resource-formation/sylius-resource-formation/pages/05_resource_factories.md",raw:`
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

</v-clicks>`,frontmatter:{},index:9,start:189,end:222},filepath:"/home/runner/work/sylius-resource-formation/sylius-resource-formation/pages/05_resource_factories.md",noteHTML:"",id:48,no:49},__clicksElements:[],__preloaded:!1}},{path:"50",name:"page-50",component:j4,meta:{srcSequence:"./pages/05_resource_factories.md",slide:{raw:`
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
\`\`\``,frontmatter:{srcSequence:"./pages/05_resource_factories.md"},index:49,start:223,end:244,source:{filepath:"/home/runner/work/sylius-resource-formation/sylius-resource-formation/pages/05_resource_factories.md",raw:`
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
\`\`\``,frontmatter:{},index:10,start:223,end:244},filepath:"/home/runner/work/sylius-resource-formation/sylius-resource-formation/pages/05_resource_factories.md",noteHTML:"",id:49,no:50},__clicksElements:[],__preloaded:!1}},{path:"51",name:"page-51",component:K4,meta:{srcSequence:"./pages/05_resource_factories.md",slide:{raw:`
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
\`\`\``,frontmatter:{srcSequence:"./pages/05_resource_factories.md"},index:50,start:245,end:270,source:{filepath:"/home/runner/work/sylius-resource-formation/sylius-resource-formation/pages/05_resource_factories.md",raw:`
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
\`\`\``,frontmatter:{},index:11,start:245,end:270},filepath:"/home/runner/work/sylius-resource-formation/sylius-resource-formation/pages/05_resource_factories.md",noteHTML:"",id:50,no:51},__clicksElements:[],__preloaded:!1}},{path:"52",name:"page-52",component:J4,meta:{title:"Providers",srcSequence:"./pages/06_providers.md",slide:{raw:null,title:"Providers",level:1,content:`# Providers

<v-clicks>

Providers retrieve data from your persistence layer.

</v-clicks>`,frontmatter:{title:"Providers",srcSequence:"./pages/06_providers.md"},index:51,start:0,end:8,source:{filepath:"/home/runner/work/sylius-resource-formation/sylius-resource-formation/pages/06_providers.md",raw:`# Providers

<v-clicks>

Providers retrieve data from your persistence layer.

</v-clicks>
`,title:"Providers",level:1,content:`# Providers

<v-clicks>

Providers retrieve data from your persistence layer.

</v-clicks>`,frontmatter:{title:"Providers"},index:0,start:0,end:8},inline:{raw:`---
src: ./pages/06_providers.md
---
`,content:"",frontmatter:{},index:6,start:60,end:64},filepath:"/home/runner/work/sylius-resource-formation/sylius-resource-formation/pages/06_providers.md",noteHTML:"",id:51,no:52},__clicksElements:[],__preloaded:!1}},{path:"53",name:"page-53",component:tk,meta:{srcSequence:"./pages/06_providers.md",slide:{raw:`
# Default providers

<v-clicks>

When your resource is a Doctrine entity, there's a default provider \`Sylius\\Component\\Resource\\Symfony\\Request\\State\\Provider\` which is already configured to your operations.

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

When your resource is a Doctrine entity, there's a default provider \`Sylius\\Component\\Resource\\Symfony\\Request\\State\\Provider\` which is already configured to your operations.

As it uses the Doctrine repository configured on your resource, some default repository methods are used.

| Operation   | Repository method |
|-------------|-------------------|
| index       | createPaginator   |
| show        | findOneBy         |
| update      | findOneBy         |
| delete      | findOneBy         |
| bulk delete | findById          |

</v-clicks>`,frontmatter:{srcSequence:"./pages/06_providers.md"},index:52,start:9,end:28,source:{filepath:"/home/runner/work/sylius-resource-formation/sylius-resource-formation/pages/06_providers.md",raw:`
# Default providers

<v-clicks>

When your resource is a Doctrine entity, there's a default provider \`Sylius\\Component\\Resource\\Symfony\\Request\\State\\Provider\` which is already configured to your operations.

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

When your resource is a Doctrine entity, there's a default provider \`Sylius\\Component\\Resource\\Symfony\\Request\\State\\Provider\` which is already configured to your operations.

As it uses the Doctrine repository configured on your resource, some default repository methods are used.

| Operation   | Repository method |
|-------------|-------------------|
| index       | createPaginator   |
| show        | findOneBy         |
| update      | findOneBy         |
| delete      | findOneBy         |
| bulk delete | findById          |

</v-clicks>`,frontmatter:{},index:1,start:9,end:28},filepath:"/home/runner/work/sylius-resource-formation/sylius-resource-formation/pages/06_providers.md",noteHTML:"",id:52,no:53},__clicksElements:[],__preloaded:!1}},{path:"54",name:"page-54",component:ik,meta:{srcSequence:"./pages/06_providers.md",slide:{raw:`
# Custom repository method

<v-clicks>

You can customize the method to use.

\`\`\`php {all|8}
// src/Entity/Customer.php

declare(strict_types=1);

namespace App\\Entity;

#[Resource]
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

#[Resource]
#[Show(repositoryMethod: 'findOneByEmail')]
final class Customer implements ResourceInterface
{
    // [...]
}
\`\`\`

</v-clicks>`,frontmatter:{srcSequence:"./pages/06_providers.md"},index:53,start:29,end:53,source:{filepath:"/home/runner/work/sylius-resource-formation/sylius-resource-formation/pages/06_providers.md",raw:`
# Custom repository method

<v-clicks>

You can customize the method to use.

\`\`\`php {all|8}
// src/Entity/Customer.php

declare(strict_types=1);

namespace App\\Entity;

#[Resource]
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

#[Resource]
#[Show(repositoryMethod: 'findOneByEmail')]
final class Customer implements ResourceInterface
{
    // [...]
}
\`\`\`

</v-clicks>`,frontmatter:{},index:2,start:29,end:53},filepath:"/home/runner/work/sylius-resource-formation/sylius-resource-formation/pages/06_providers.md",noteHTML:"",id:53,no:54},__clicksElements:[],__preloaded:!1}},{path:"55",name:"page-55",component:hk,meta:{srcSequence:"./pages/06_providers.md",slide:{raw:`
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

</v-clicks>`,frontmatter:{srcSequence:"./pages/06_providers.md"},index:54,start:54,end:71,source:{filepath:"/home/runner/work/sylius-resource-formation/sylius-resource-formation/pages/06_providers.md",raw:`
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

</v-clicks>`,frontmatter:{},index:3,start:54,end:71},filepath:"/home/runner/work/sylius-resource-formation/sylius-resource-formation/pages/06_providers.md",noteHTML:"",id:54,no:55},__clicksElements:[],__preloaded:!1}},{path:"56",name:"page-56",component:Ak,meta:{srcSequence:"./pages/06_providers.md",slide:{raw:`
# Custom repository arguments

\`\`\`php {all|8}
// src/Entity/Customer.php

declare(strict_types=1);

namespace App\\Entity;

#[Resource]
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

#[Resource]
#[Show(repositoryMethod: 'findOneByEmail', repositoryArguments: ['email' => "request.attributes.get('email')"])]
final class Customer implements ResourceInterface
{
    // [...]
}
\`\`\``,frontmatter:{srcSequence:"./pages/06_providers.md"},index:55,start:72,end:90,source:{filepath:"/home/runner/work/sylius-resource-formation/sylius-resource-formation/pages/06_providers.md",raw:`
# Custom repository arguments

\`\`\`php {all|8}
// src/Entity/Customer.php

declare(strict_types=1);

namespace App\\Entity;

#[Resource]
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

#[Resource]
#[Show(repositoryMethod: 'findOneByEmail', repositoryArguments: ['email' => "request.attributes.get('email')"])]
final class Customer implements ResourceInterface
{
    // [...]
}
\`\`\``,frontmatter:{},index:4,start:72,end:90},filepath:"/home/runner/work/sylius-resource-formation/sylius-resource-formation/pages/06_providers.md",noteHTML:"",id:55,no:56},__clicksElements:[],__preloaded:!1}},{path:"57",name:"page-57",component:kk,meta:{srcSequence:"./pages/06_providers.md",slide:{raw:`
# Custom providers

<v-clicks>

Custom providers are useful to customize your logic to retrieve data and for an advanced usage such as an hexagonal architecture.

As an example, let's configure a \`BoardGameItemProvider\` on a \`BoardGameResource\` which is not a Doctrine entity.

</v-clicks>
`,title:"Custom providers",level:1,content:`# Custom providers

<v-clicks>

Custom providers are useful to customize your logic to retrieve data and for an advanced usage such as an hexagonal architecture.

As an example, let's configure a \`BoardGameItemProvider\` on a \`BoardGameResource\` which is not a Doctrine entity.

</v-clicks>`,frontmatter:{srcSequence:"./pages/06_providers.md"},index:56,start:91,end:102,source:{filepath:"/home/runner/work/sylius-resource-formation/sylius-resource-formation/pages/06_providers.md",raw:`
# Custom providers

<v-clicks>

Custom providers are useful to customize your logic to retrieve data and for an advanced usage such as an hexagonal architecture.

As an example, let's configure a \`BoardGameItemProvider\` on a \`BoardGameResource\` which is not a Doctrine entity.

</v-clicks>
`,title:"Custom providers",level:1,content:`# Custom providers

<v-clicks>

Custom providers are useful to customize your logic to retrieve data and for an advanced usage such as an hexagonal architecture.

As an example, let's configure a \`BoardGameItemProvider\` on a \`BoardGameResource\` which is not a Doctrine entity.

</v-clicks>`,frontmatter:{},index:5,start:91,end:102},filepath:"/home/runner/work/sylius-resource-formation/sylius-resource-formation/pages/06_providers.md",noteHTML:"",id:56,no:57},__clicksElements:[],__preloaded:!1}},{path:"58",name:"page-58",component:Sk,meta:{srcSequence:"./pages/06_providers.md",slide:{raw:`
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
\`\`\``,frontmatter:{srcSequence:"./pages/06_providers.md"},index:57,start:103,end:132,source:{filepath:"/home/runner/work/sylius-resource-formation/sylius-resource-formation/pages/06_providers.md",raw:`
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
\`\`\``,frontmatter:{},index:6,start:103,end:132},filepath:"/home/runner/work/sylius-resource-formation/sylius-resource-formation/pages/06_providers.md",noteHTML:"",id:57,no:58},__clicksElements:[],__preloaded:!1}},{path:"59",name:"page-59",component:$k,meta:{srcSequence:"./pages/06_providers.md",slide:{raw:`
# Use this provider on your operation.

\`\`\`php {all|10|10,7}
// src/BoardGameBlog/Infrastructure/Sylius/Resource/BoardGameResource.php

declare(strict_types=1);

namespace App\\BoardGameBlog\\Infrastructure\\Sylius\\Resource;

use App\\BoardGameBlog\\Infrastructure\\Sylius\\State\\Provider\\BoardGameItemProvider;

#[Resource]
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

#[Resource]
#[Show(provider: BoardGameItemProvider::class)]
final class BoardGameResource implements ResourceInterface
{
    // [...]
}
\`\`\``,frontmatter:{srcSequence:"./pages/06_providers.md"},index:58,start:133,end:153,source:{filepath:"/home/runner/work/sylius-resource-formation/sylius-resource-formation/pages/06_providers.md",raw:`
# Use this provider on your operation.

\`\`\`php {all|10|10,7}
// src/BoardGameBlog/Infrastructure/Sylius/Resource/BoardGameResource.php

declare(strict_types=1);

namespace App\\BoardGameBlog\\Infrastructure\\Sylius\\Resource;

use App\\BoardGameBlog\\Infrastructure\\Sylius\\State\\Provider\\BoardGameItemProvider;

#[Resource]
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

#[Resource]
#[Show(provider: BoardGameItemProvider::class)]
final class BoardGameResource implements ResourceInterface
{
    // [...]
}
\`\`\``,frontmatter:{},index:7,start:133,end:153},filepath:"/home/runner/work/sylius-resource-formation/sylius-resource-formation/pages/06_providers.md",noteHTML:"",id:58,no:59},__clicksElements:[],__preloaded:!1}},{path:"60",name:"page-60",component:Pk,meta:{title:"Processors",srcSequence:"./pages/07_processors.md",slide:{raw:null,title:"Processors",level:1,content:`# Processors

<v-clicks>

Processors process data: send an email, persist to storage, add to queue etc.

</v-clicks>`,frontmatter:{title:"Processors",srcSequence:"./pages/07_processors.md"},index:59,start:0,end:8,source:{filepath:"/home/runner/work/sylius-resource-formation/sylius-resource-formation/pages/07_processors.md",raw:`# Processors

<v-clicks>

Processors process data: send an email, persist to storage, add to queue etc.

</v-clicks>
`,title:"Processors",level:1,content:`# Processors

<v-clicks>

Processors process data: send an email, persist to storage, add to queue etc.

</v-clicks>`,frontmatter:{title:"Processors"},index:0,start:0,end:8},inline:{raw:`---
src: ./pages/07_processors.md
---
`,content:"",frontmatter:{},index:7,start:64,end:68},filepath:"/home/runner/work/sylius-resource-formation/sylius-resource-formation/pages/07_processors.md",noteHTML:"",id:59,no:60},__clicksElements:[],__preloaded:!1}},{path:"61",name:"page-61",component:Hk,meta:{srcSequence:"./pages/07_processors.md",slide:{raw:`
# Default processors

<v-clicks>

When your resource is a Doctrine entity, there are default processors which are already configured to your operations.

As it uses the Doctrine repository configured on your resource, it will automatically flush data for you.

| Operation   | Processor                                                        |
|-------------|------------------------------------------------------------------|
| create      | Sylius\\Component\\Resource\\Doctrine\\Common\\State\\PersistProcessor |
| update      | Sylius\\Component\\Resource\\Doctrine\\Common\\State\\PersistProcessor |
| delete      | Sylius\\Component\\Resource\\Doctrine\\Common\\State\\RemoveProcessor  |
| bulk delete | Sylius\\Component\\Resource\\Doctrine\\Common\\State\\RemoveProcessor  |

</v-clicks>
`,title:"Default processors",level:1,content:`# Default processors

<v-clicks>

When your resource is a Doctrine entity, there are default processors which are already configured to your operations.

As it uses the Doctrine repository configured on your resource, it will automatically flush data for you.

| Operation   | Processor                                                        |
|-------------|------------------------------------------------------------------|
| create      | Sylius\\Component\\Resource\\Doctrine\\Common\\State\\PersistProcessor |
| update      | Sylius\\Component\\Resource\\Doctrine\\Common\\State\\PersistProcessor |
| delete      | Sylius\\Component\\Resource\\Doctrine\\Common\\State\\RemoveProcessor  |
| bulk delete | Sylius\\Component\\Resource\\Doctrine\\Common\\State\\RemoveProcessor  |

</v-clicks>`,frontmatter:{srcSequence:"./pages/07_processors.md"},index:60,start:9,end:27,source:{filepath:"/home/runner/work/sylius-resource-formation/sylius-resource-formation/pages/07_processors.md",raw:`
# Default processors

<v-clicks>

When your resource is a Doctrine entity, there are default processors which are already configured to your operations.

As it uses the Doctrine repository configured on your resource, it will automatically flush data for you.

| Operation   | Processor                                                        |
|-------------|------------------------------------------------------------------|
| create      | Sylius\\Component\\Resource\\Doctrine\\Common\\State\\PersistProcessor |
| update      | Sylius\\Component\\Resource\\Doctrine\\Common\\State\\PersistProcessor |
| delete      | Sylius\\Component\\Resource\\Doctrine\\Common\\State\\RemoveProcessor  |
| bulk delete | Sylius\\Component\\Resource\\Doctrine\\Common\\State\\RemoveProcessor  |

</v-clicks>
`,title:"Default processors",level:1,content:`# Default processors

<v-clicks>

When your resource is a Doctrine entity, there are default processors which are already configured to your operations.

As it uses the Doctrine repository configured on your resource, it will automatically flush data for you.

| Operation   | Processor                                                        |
|-------------|------------------------------------------------------------------|
| create      | Sylius\\Component\\Resource\\Doctrine\\Common\\State\\PersistProcessor |
| update      | Sylius\\Component\\Resource\\Doctrine\\Common\\State\\PersistProcessor |
| delete      | Sylius\\Component\\Resource\\Doctrine\\Common\\State\\RemoveProcessor  |
| bulk delete | Sylius\\Component\\Resource\\Doctrine\\Common\\State\\RemoveProcessor  |

</v-clicks>`,frontmatter:{},index:1,start:9,end:27},filepath:"/home/runner/work/sylius-resource-formation/sylius-resource-formation/pages/07_processors.md",noteHTML:"",id:60,no:61},__clicksElements:[],__preloaded:!1}},{path:"62",name:"page-62",component:Wk,meta:{srcSequence:"./pages/07_processors.md",slide:{raw:`
# Custom processors

<v-clicks>

Custom processors are useful to customize your logic to send an email, persist data to storage, add to queue and for an advanced usage such as an hexagonal architecture.

</v-clicks>
`,title:"Custom processors",level:1,content:`# Custom processors

<v-clicks>

Custom processors are useful to customize your logic to send an email, persist data to storage, add to queue and for an advanced usage such as an hexagonal architecture.

</v-clicks>`,frontmatter:{srcSequence:"./pages/07_processors.md"},index:61,start:28,end:37,source:{filepath:"/home/runner/work/sylius-resource-formation/sylius-resource-formation/pages/07_processors.md",raw:`
# Custom processors

<v-clicks>

Custom processors are useful to customize your logic to send an email, persist data to storage, add to queue and for an advanced usage such as an hexagonal architecture.

</v-clicks>
`,title:"Custom processors",level:1,content:`# Custom processors

<v-clicks>

Custom processors are useful to customize your logic to send an email, persist data to storage, add to queue and for an advanced usage such as an hexagonal architecture.

</v-clicks>`,frontmatter:{},index:2,start:28,end:37},filepath:"/home/runner/work/sylius-resource-formation/sylius-resource-formation/pages/07_processors.md",noteHTML:"",id:61,no:62},__clicksElements:[],__preloaded:!1}},{path:"63",name:"page-63",component:Zk,meta:{srcSequence:"./pages/07_processors.md",slide:{raw:`
# Example #1: Sending an email after persisting data

As an example, send an email after customer registration
`,title:"Example #1: Sending an email after persisting data",level:1,content:`# Example #1: Sending an email after persisting data

As an example, send an email after customer registration`,frontmatter:{srcSequence:"./pages/07_processors.md"},index:62,start:38,end:43,source:{filepath:"/home/runner/work/sylius-resource-formation/sylius-resource-formation/pages/07_processors.md",raw:`
# Example #1: Sending an email after persisting data

As an example, send an email after customer registration
`,title:"Example #1: Sending an email after persisting data",level:1,content:`# Example #1: Sending an email after persisting data

As an example, send an email after customer registration`,frontmatter:{},index:3,start:38,end:43},filepath:"/home/runner/work/sylius-resource-formation/sylius-resource-formation/pages/07_processors.md",noteHTML:"",id:62,no:63},__clicksElements:[],__preloaded:!1}},{path:"64",name:"page-64",component:Xk,meta:{srcSequence:"./pages/07_processors.md",slide:{raw:`
\`\`\`php {all|9|12-13|17|19|21|23-24|26}
// src/Sylius/State/Processor/CreateCustomerProcessor.php

namespace App\\Sylius\\State\\Processor;

use Sylius\\Component\\Customer\\Model\\CustomerInterface;
use Sylius\\Component\\Resource\\Doctrine\\Common\\State\\PersistProcessor;
use Sylius\\Component\\Resource\\State\\ProcessorInterface;

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
use Sylius\\Component\\Resource\\Doctrine\\Common\\State\\PersistProcessor;
use Sylius\\Component\\Resource\\State\\ProcessorInterface;

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
\`\`\``,frontmatter:{srcSequence:"./pages/07_processors.md"},index:63,start:44,end:76,source:{filepath:"/home/runner/work/sylius-resource-formation/sylius-resource-formation/pages/07_processors.md",raw:`
\`\`\`php {all|9|12-13|17|19|21|23-24|26}
// src/Sylius/State/Processor/CreateCustomerProcessor.php

namespace App\\Sylius\\State\\Processor;

use Sylius\\Component\\Customer\\Model\\CustomerInterface;
use Sylius\\Component\\Resource\\Doctrine\\Common\\State\\PersistProcessor;
use Sylius\\Component\\Resource\\State\\ProcessorInterface;

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
use Sylius\\Component\\Resource\\Doctrine\\Common\\State\\PersistProcessor;
use Sylius\\Component\\Resource\\State\\ProcessorInterface;

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
\`\`\``,frontmatter:{},index:4,start:44,end:76},filepath:"/home/runner/work/sylius-resource-formation/sylius-resource-formation/pages/07_processors.md",noteHTML:"",id:63,no:64},__clicksElements:[],__preloaded:!1}},{path:"65",name:"page-65",component:o9,meta:{srcSequence:"./pages/07_processors.md",slide:{raw:`
# Use this processor on your operation.

\`\`\`php {all|8|8,5}
// src/Entity/Customer.php

namespace App\\Entity\\Customer;

use App\\Sylius\\State\\Processor\\CreateCustomerProcessor;

#[Resource]
#[Create(processor: CreateCustomerProcessor::class)]
final class BoardGameResource implements ResourceInterface
\`\`\`
`,title:"Use this processor on your operation.",level:1,content:`# Use this processor on your operation.

\`\`\`php {all|8|8,5}
// src/Entity/Customer.php

namespace App\\Entity\\Customer;

use App\\Sylius\\State\\Processor\\CreateCustomerProcessor;

#[Resource]
#[Create(processor: CreateCustomerProcessor::class)]
final class BoardGameResource implements ResourceInterface
\`\`\``,frontmatter:{srcSequence:"./pages/07_processors.md"},index:64,start:77,end:92,source:{filepath:"/home/runner/work/sylius-resource-formation/sylius-resource-formation/pages/07_processors.md",raw:`
# Use this processor on your operation.

\`\`\`php {all|8|8,5}
// src/Entity/Customer.php

namespace App\\Entity\\Customer;

use App\\Sylius\\State\\Processor\\CreateCustomerProcessor;

#[Resource]
#[Create(processor: CreateCustomerProcessor::class)]
final class BoardGameResource implements ResourceInterface
\`\`\`
`,title:"Use this processor on your operation.",level:1,content:`# Use this processor on your operation.

\`\`\`php {all|8|8,5}
// src/Entity/Customer.php

namespace App\\Entity\\Customer;

use App\\Sylius\\State\\Processor\\CreateCustomerProcessor;

#[Resource]
#[Create(processor: CreateCustomerProcessor::class)]
final class BoardGameResource implements ResourceInterface
\`\`\``,frontmatter:{},index:5,start:77,end:92},filepath:"/home/runner/work/sylius-resource-formation/sylius-resource-formation/pages/07_processors.md",noteHTML:"",id:64,no:65},__clicksElements:[],__preloaded:!1}},{path:"66",name:"page-66",component:a9,meta:{srcSequence:"./pages/07_processors.md",slide:{raw:`
# Example #2: Use a custom delete processor

<v-clicks>

As another example, let's configure a \`DeleteBoardGameProcessor\` on a \`BoardGameResource\` which is not a Doctrine entity.

</v-clicks>
`,title:"Example #2: Use a custom delete processor",level:1,content:`# Example #2: Use a custom delete processor

<v-clicks>

As another example, let's configure a \`DeleteBoardGameProcessor\` on a \`BoardGameResource\` which is not a Doctrine entity.

</v-clicks>`,frontmatter:{srcSequence:"./pages/07_processors.md"},index:65,start:93,end:102,source:{filepath:"/home/runner/work/sylius-resource-formation/sylius-resource-formation/pages/07_processors.md",raw:`
# Example #2: Use a custom delete processor

<v-clicks>

As another example, let's configure a \`DeleteBoardGameProcessor\` on a \`BoardGameResource\` which is not a Doctrine entity.

</v-clicks>
`,title:"Example #2: Use a custom delete processor",level:1,content:`# Example #2: Use a custom delete processor

<v-clicks>

As another example, let's configure a \`DeleteBoardGameProcessor\` on a \`BoardGameResource\` which is not a Doctrine entity.

</v-clicks>`,frontmatter:{},index:6,start:93,end:102},filepath:"/home/runner/work/sylius-resource-formation/sylius-resource-formation/pages/07_processors.md",noteHTML:"",id:65,no:66},__clicksElements:[],__preloaded:!1}},{path:"67",name:"page-67",component:p9,meta:{srcSequence:"./pages/07_processors.md",slide:{raw:`
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
\`\`\``,frontmatter:{srcSequence:"./pages/07_processors.md"},index:66,start:103,end:127,source:{filepath:"/home/runner/work/sylius-resource-formation/sylius-resource-formation/pages/07_processors.md",raw:`
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
\`\`\``,frontmatter:{},index:7,start:103,end:127},filepath:"/home/runner/work/sylius-resource-formation/sylius-resource-formation/pages/07_processors.md",noteHTML:"",id:66,no:67},__clicksElements:[],__preloaded:!1}},{path:"68",name:"page-68",component:f9,meta:{srcSequence:"./pages/07_processors.md",slide:{raw:`
# Use this processor on your operation.

\`\`\`php {all|12}
// src/BoardGameBlog/Infrastructure/Sylius/Resource/BoardGameResource.php

namespace App\\BoardGameBlog\\Infrastructure\\Sylius\\Resource;

#[Resource(
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

#[Resource(
    alias: 'app.board_game',
    section: 'admin',
    formType: BoardGameType::class,
    templatesDir: 'crud',
    routePrefix: '/admin',
)]
#[Delete(processor: DeleteBoardGameProcessor::class)]
final class BoardGameResource implements ResourceInterface
\`\`\``,frontmatter:{srcSequence:"./pages/07_processors.md"},index:67,start:128,end:147,source:{filepath:"/home/runner/work/sylius-resource-formation/sylius-resource-formation/pages/07_processors.md",raw:`
# Use this processor on your operation.

\`\`\`php {all|12}
// src/BoardGameBlog/Infrastructure/Sylius/Resource/BoardGameResource.php

namespace App\\BoardGameBlog\\Infrastructure\\Sylius\\Resource;

#[Resource(
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

#[Resource(
    alias: 'app.board_game',
    section: 'admin',
    formType: BoardGameType::class,
    templatesDir: 'crud',
    routePrefix: '/admin',
)]
#[Delete(processor: DeleteBoardGameProcessor::class)]
final class BoardGameResource implements ResourceInterface
\`\`\``,frontmatter:{},index:8,start:128,end:147},filepath:"/home/runner/work/sylius-resource-formation/sylius-resource-formation/pages/07_processors.md",noteHTML:"",id:67,no:68},__clicksElements:[],__preloaded:!1}},{path:"69",name:"page-69",component:g9,meta:{title:"Responders",srcSequence:"./pages/08_responders.md",slide:{raw:null,title:"Responders",level:1,content:`# Responders

<v-clicks>

Responders respond data: transform data to a Symfony response, return a success in a CLI operation.

</v-clicks>`,frontmatter:{title:"Responders",srcSequence:"./pages/08_responders.md"},index:68,start:0,end:8,source:{filepath:"/home/runner/work/sylius-resource-formation/sylius-resource-formation/pages/08_responders.md",raw:`# Responders

<v-clicks>

Responders respond data: transform data to a Symfony response, return a success in a CLI operation.

</v-clicks>
`,title:"Responders",level:1,content:`# Responders

<v-clicks>

Responders respond data: transform data to a Symfony response, return a success in a CLI operation.

</v-clicks>`,frontmatter:{title:"Responders"},index:0,start:0,end:8},inline:{raw:`---
src: ./pages/08_responders.md
---
`,content:"",frontmatter:{},index:8,start:68,end:72},filepath:"/home/runner/work/sylius-resource-formation/sylius-resource-formation/pages/08_responders.md",noteHTML:"",id:68,no:69},__clicksElements:[],__preloaded:!1}},{path:"70",name:"page-70",component:b9,meta:{srcSequence:"./pages/08_responders.md",slide:{raw:`
# Default responders

<v-clicks>

When your operation is an instance of \`Sylius\\Component\\Resource\\Metadata\\HttpOperation\` two responders are configured by default.

The responder will automatically choose the responder depending on the request format:

| Request format | Responder                                                     |
|----------------|---------------------------------------------------------------|
| html           | Sylius\\Component\\Resource\\Symfony\\Request\\State\\TwigResponder |
| json           | Sylius\\Component\\Resource\\Symfony\\Request\\State\\ApiResponder  |
| xml            | Sylius\\Component\\Resource\\Doctrine\\Common\\State\\ApiResponder  |

</v-clicks>
`,title:"Default responders",level:1,content:`# Default responders

<v-clicks>

When your operation is an instance of \`Sylius\\Component\\Resource\\Metadata\\HttpOperation\` two responders are configured by default.

The responder will automatically choose the responder depending on the request format:

| Request format | Responder                                                     |
|----------------|---------------------------------------------------------------|
| html           | Sylius\\Component\\Resource\\Symfony\\Request\\State\\TwigResponder |
| json           | Sylius\\Component\\Resource\\Symfony\\Request\\State\\ApiResponder  |
| xml            | Sylius\\Component\\Resource\\Doctrine\\Common\\State\\ApiResponder  |

</v-clicks>`,frontmatter:{srcSequence:"./pages/08_responders.md"},index:69,start:9,end:26,source:{filepath:"/home/runner/work/sylius-resource-formation/sylius-resource-formation/pages/08_responders.md",raw:`
# Default responders

<v-clicks>

When your operation is an instance of \`Sylius\\Component\\Resource\\Metadata\\HttpOperation\` two responders are configured by default.

The responder will automatically choose the responder depending on the request format:

| Request format | Responder                                                     |
|----------------|---------------------------------------------------------------|
| html           | Sylius\\Component\\Resource\\Symfony\\Request\\State\\TwigResponder |
| json           | Sylius\\Component\\Resource\\Symfony\\Request\\State\\ApiResponder  |
| xml            | Sylius\\Component\\Resource\\Doctrine\\Common\\State\\ApiResponder  |

</v-clicks>
`,title:"Default responders",level:1,content:`# Default responders

<v-clicks>

When your operation is an instance of \`Sylius\\Component\\Resource\\Metadata\\HttpOperation\` two responders are configured by default.

The responder will automatically choose the responder depending on the request format:

| Request format | Responder                                                     |
|----------------|---------------------------------------------------------------|
| html           | Sylius\\Component\\Resource\\Symfony\\Request\\State\\TwigResponder |
| json           | Sylius\\Component\\Resource\\Symfony\\Request\\State\\ApiResponder  |
| xml            | Sylius\\Component\\Resource\\Doctrine\\Common\\State\\ApiResponder  |

</v-clicks>`,frontmatter:{},index:1,start:9,end:26},filepath:"/home/runner/work/sylius-resource-formation/sylius-resource-formation/pages/08_responders.md",noteHTML:"",id:69,no:70},__clicksElements:[],__preloaded:!1}},{path:"71",name:"page-71",component:R9,meta:{srcSequence:"./pages/08_responders.md",slide:{raw:`
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

</v-clicks>`,frontmatter:{srcSequence:"./pages/08_responders.md"},index:70,start:27,end:39,source:{filepath:"/home/runner/work/sylius-resource-formation/sylius-resource-formation/pages/08_responders.md",raw:`
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

</v-clicks>`,frontmatter:{},index:2,start:27,end:39},filepath:"/home/runner/work/sylius-resource-formation/sylius-resource-formation/pages/08_responders.md",noteHTML:"",id:70,no:71},__clicksElements:[],__preloaded:!1}},{path:"72",name:"page-72",component:I9,meta:{srcSequence:"./pages/08_responders.md",slide:{raw:`
# Customize Twig template variables

<v-clicks>

Some variables are already available on your operations, but you can add more variables easily.

</v-clicks>
`,title:"Customize Twig template variables",level:1,content:`# Customize Twig template variables

<v-clicks>

Some variables are already available on your operations, but you can add more variables easily.

</v-clicks>`,frontmatter:{srcSequence:"./pages/08_responders.md"},index:71,start:40,end:49,source:{filepath:"/home/runner/work/sylius-resource-formation/sylius-resource-formation/pages/08_responders.md",raw:`
# Customize Twig template variables

<v-clicks>

Some variables are already available on your operations, but you can add more variables easily.

</v-clicks>
`,title:"Customize Twig template variables",level:1,content:`# Customize Twig template variables

<v-clicks>

Some variables are already available on your operations, but you can add more variables easily.

</v-clicks>`,frontmatter:{},index:3,start:40,end:49},filepath:"/home/runner/work/sylius-resource-formation/sylius-resource-formation/pages/08_responders.md",noteHTML:"",id:71,no:72},__clicksElements:[],__preloaded:!1}},{path:"73",name:"page-73",component:O9,meta:{srcSequence:"./pages/08_responders.md",slide:{raw:`
As an example, we add a \`foo\` variable to the Twig template with \`bar\` as value.

<v-clicks>

\`\`\`php {all|17|18}
// src/Twig/Context/Factory/ShowSubscriptionContextFactory.php

namespace App\\Twig\\Context\\Factory;

use phpDocumentor\\Reflection\\Types\\Context;
use Sylius\\Component\\Resource\\Metadata\\Operation;
use Sylius\\Component\\Resource\\Twig\\Context\\Factory\\ContextFactoryInterface;

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
use Sylius\\Component\\Resource\\Metadata\\Operation;
use Sylius\\Component\\Resource\\Twig\\Context\\Factory\\ContextFactoryInterface;

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

</v-clicks>`,frontmatter:{srcSequence:"./pages/08_responders.md"},index:72,start:50,end:81,source:{filepath:"/home/runner/work/sylius-resource-formation/sylius-resource-formation/pages/08_responders.md",raw:`
As an example, we add a \`foo\` variable to the Twig template with \`bar\` as value.

<v-clicks>

\`\`\`php {all|17|18}
// src/Twig/Context/Factory/ShowSubscriptionContextFactory.php

namespace App\\Twig\\Context\\Factory;

use phpDocumentor\\Reflection\\Types\\Context;
use Sylius\\Component\\Resource\\Metadata\\Operation;
use Sylius\\Component\\Resource\\Twig\\Context\\Factory\\ContextFactoryInterface;

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
use Sylius\\Component\\Resource\\Metadata\\Operation;
use Sylius\\Component\\Resource\\Twig\\Context\\Factory\\ContextFactoryInterface;

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

</v-clicks>`,frontmatter:{},index:4,start:50,end:81},filepath:"/home/runner/work/sylius-resource-formation/sylius-resource-formation/pages/08_responders.md",noteHTML:"",id:72,no:73},__clicksElements:[],__preloaded:!1}},{path:"74",name:"page-74",component:U9,meta:{srcSequence:"./pages/08_responders.md",slide:{raw:`
# Use it on your operation.

\`\`\`php {all|12}
// src/Entity/Subscription.php

namespace App\\Entity;

use Sylius\\Component\\Resource\\Metadata\\Resource;
use Sylius\\Component\\Resource\\Metadata\\Show;
use Sylius\\Component\\Resource\\Model\\ResourceInterface;

#[Resource]
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

use Sylius\\Component\\Resource\\Metadata\\Resource;
use Sylius\\Component\\Resource\\Metadata\\Show;
use Sylius\\Component\\Resource\\Model\\ResourceInterface;

#[Resource]
#[Show(
    template: 'subscription/show.html.twig',
    twigContextFactory: ShowSubscriptionContextFactory::class,
)]
class Subscription implements ResourceInterface
{
}
\`\`\``,frontmatter:{srcSequence:"./pages/08_responders.md"},index:73,start:82,end:104,source:{filepath:"/home/runner/work/sylius-resource-formation/sylius-resource-formation/pages/08_responders.md",raw:`
# Use it on your operation.

\`\`\`php {all|12}
// src/Entity/Subscription.php

namespace App\\Entity;

use Sylius\\Component\\Resource\\Metadata\\Resource;
use Sylius\\Component\\Resource\\Metadata\\Show;
use Sylius\\Component\\Resource\\Model\\ResourceInterface;

#[Resource]
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

use Sylius\\Component\\Resource\\Metadata\\Resource;
use Sylius\\Component\\Resource\\Metadata\\Show;
use Sylius\\Component\\Resource\\Model\\ResourceInterface;

#[Resource]
#[Show(
    template: 'subscription/show.html.twig',
    twigContextFactory: ShowSubscriptionContextFactory::class,
)]
class Subscription implements ResourceInterface
{
}
\`\`\``,frontmatter:{},index:5,start:82,end:104},filepath:"/home/runner/work/sylius-resource-formation/sylius-resource-formation/pages/08_responders.md",noteHTML:"",id:73,no:74},__clicksElements:[],__preloaded:!1}},{path:"75",name:"page-75",component:G9,meta:{srcSequence:"./pages/08_responders.md",slide:{raw:`
# API Responder

<v-clicks>

The API responder is used to render serialized data into a Symfony response.
It's used for JSON/XML responses.

</v-clicks>
`,title:"API Responder",level:1,content:`# API Responder

<v-clicks>

The API responder is used to render serialized data into a Symfony response.
It's used for JSON/XML responses.

</v-clicks>`,frontmatter:{srcSequence:"./pages/08_responders.md"},index:74,start:105,end:115,source:{filepath:"/home/runner/work/sylius-resource-formation/sylius-resource-formation/pages/08_responders.md",raw:`
# API Responder

<v-clicks>

The API responder is used to render serialized data into a Symfony response.
It's used for JSON/XML responses.

</v-clicks>
`,title:"API Responder",level:1,content:`# API Responder

<v-clicks>

The API responder is used to render serialized data into a Symfony response.
It's used for JSON/XML responses.

</v-clicks>`,frontmatter:{},index:6,start:105,end:115},filepath:"/home/runner/work/sylius-resource-formation/sylius-resource-formation/pages/08_responders.md",noteHTML:"",id:74,no:75},__clicksElements:[],__preloaded:!1}},{path:"76",component:zC,meta:{layout:"end"}}],Qe=W9,tt=[{name:"play",path:"/",component:_3,children:[...Qe]},{name:"print",path:"/print",component:jC},{path:"",redirect:{path:"/1"}},{path:"/:pathMatch(.*)",redirect:{path:"/1"}}];{let s=function(n){if(!ot.remote||ot.remote===n.query.password)return!0;if(ot.remote&&n.query.password===void 0){const o=prompt("Enter password");if(ot.remote===o)return!0}return n.params.no?{path:`/${n.params.no}`}:{path:""}};tt.push({path:"/presenter/print",component:()=>In(()=>import("./PresenterPrint-819d5018.js"),["assets/PresenterPrint-819d5018.js","assets/NoteDisplay-18c81a65.js"])}),tt.push({name:"notes",path:"/notes",component:()=>In(()=>import("./NotesView-e13e07f3.js"),["assets/NotesView-e13e07f3.js","assets/NoteDisplay-18c81a65.js"]),beforeEnter:s}),tt.push({name:"presenter",path:"/presenter/:no",component:()=>In(()=>import("./Presenter-d4340588.js"),["assets/Presenter-d4340588.js","assets/NoteDisplay-18c81a65.js","assets/DrawingControls-0a583b6e.js","assets/Presenter-aa6741a8.css"]),beforeEnter:s}),tt.push({path:"/presenter",redirect:{path:"/presenter/1"}})}const As=zB({history:Wg("/sylius-resource-formation/"),routes:tt});function z9(s,n,{mode:o="replace"}={}){return F({get(){const t=As.currentRoute.value.query[s];return t==null?n??null:Array.isArray(t)?t.filter(Boolean):t},set(t){os(()=>{As[D(o)]({query:{...As.currentRoute.value.query,[s]:t}})})}})}const Sd=Z(0);os(()=>{As.afterEach(async()=>{await os(),Sd.value+=1})});const Rd=Z(0),Ps=F(()=>As.currentRoute.value),Oo=F(()=>Ps.value.query.print!==void 0),K9=F(()=>Ps.value.query.print==="clicks"),ln=F(()=>Ps.value.query.embedded!==void 0),gs=F(()=>Ps.value.path.startsWith("/presenter")),Y9=F(()=>Ps.value.path.startsWith("/notes")),dt=F(()=>Oo.value&&!K9.value),ba=F(()=>Ps.value.query.password),Z9=F(()=>!gs.value&&(!$e.remote||ba.value===$e.remote)),Rp=z9("clicks","0"),xd=F(()=>Qe.length-1),Q9=F(()=>Ps.value.path),Ke=F(()=>parseInt(Q9.value.split(/\//g).slice(-1)[0])||1);F(()=>tl(Ke.value));const ys=F(()=>Qe.find(s=>s.path===`${Ke.value}`));F(()=>{var s,n,o;return(o=(n=(s=ys.value)==null?void 0:s.meta)==null?void 0:n.slide)==null?void 0:o.id});F(()=>{var s,n;return((n=(s=ys.value)==null?void 0:s.meta)==null?void 0:n.layout)||(Ke.value===1?"cover":"default")});const xl=F(()=>Qe.find(s=>s.path===`${Math.min(Qe.length,Ke.value+1)}`)),J9=F(()=>Qe.find(s=>s.path===`${Math.max(1,Ke.value-1)}`)),X9=F(()=>{var s,n;return Sd.value,((n=(s=ys.value)==null?void 0:s.meta)==null?void 0:n.__clicksElements)||[]}),Ts=F({get(){if(dt.value)return 99999;let s=+(Rp.value||0);return isNaN(s)&&(s=0),s},set(s){Rp.value=s.toString()}}),Pr=F(()=>{var s,n;return+(((n=(s=ys.value)==null?void 0:s.meta)==null?void 0:n.clicks)??X9.value.length)}),eD=F(()=>Ke.value<Qe.length-1||Ts.value<Pr.value),sD=F(()=>Ke.value>1||Ts.value>0),nD=F(()=>Qe.filter(s=>{var n,o;return(o=(n=s.meta)==null?void 0:n.slide)==null?void 0:o.title}).reduce((s,n)=>(vc(s,n),s),[])),oD=F(()=>Cc(nD.value,ys.value));F(()=>Ec(oD.value));const tD=F(()=>iD(Rd.value,ys.value,J9.value));Be(ys,(s,n)=>{Rd.value=Number(s==null?void 0:s.path)-Number(n==null?void 0:n.path)});function Tn(){Pr.value<=Ts.value?$t():Ts.value+=1}async function Mn(){Ts.value<=0?await It():Ts.value-=1}function tl(s){return gs.value?`/presenter/${s}`:`/${s}`}function $t(){const s=Math.min(Qe.length,Ke.value+1);return Lo(s)}async function It(s=!0){const n=Math.max(1,Ke.value-1);await Lo(n),s&&Pr.value&&As.replace({query:{...Ps.value.query,clicks:Pr.value}})}function Lo(s,n){return As.push({path:tl(s),query:{...Ps.value.query,clicks:n}})}function rD(s){const n=Z(0),{direction:o,distanceX:t,distanceY:r}=pg(s,{onSwipeStart(l){l.pointerType==="touch"&&(Rt.value||(n.value=ia()))},onSwipeEnd(l){if(l.pointerType!=="touch"||!n.value||Rt.value)return;const c=Math.abs(t.value),i=Math.abs(r.value);c/window.innerWidth>.3||c>100?o.value===pn.LEFT?Tn():Mn():(i/window.innerHeight>.4||i>200)&&(o.value===pn.DOWN?It():$t())}})}async function ka(){const{saveAs:s}=await In(()=>import("./FileSaver.min-17c85779.js").then(n=>n.F),[]);s(Ty($e.download)?$e.download:$e.exportFilename?`${$e.exportFilename}.pdf`:"/sylius-resource-formation/slidev-exported.pdf",`${$e.title}.pdf`)}async function lD(s){var n,o;if(s==null){const t=(o=(n=ys.value)==null?void 0:n.meta)==null?void 0:o.slide;if(!(t!=null&&t.filepath))return!1;s=`${t.filepath}:${t.start}`}return await fetch(`/__open-in-editor?file=${encodeURIComponent(s)}`),!0}function vc(s,n,o=1){var r,l,c,i,p;const t=(l=(r=n.meta)==null?void 0:r.slide)==null?void 0:l.level;t&&t>o&&s.length>0?vc(s[s.length-1].children,n,o+1):s.push({children:[],level:o,path:n.path,hideInToc:Boolean((c=n.meta)==null?void 0:c.hideInToc),title:(p=(i=n.meta)==null?void 0:i.slide)==null?void 0:p.title})}function Cc(s,n,o=!1,t){return s.map(r=>{const l={...r,active:r.path===(n==null?void 0:n.path),hasActiveParent:o};return l.children.length>0&&(l.children=Cc(l.children,n,l.active||l.hasActiveParent,l)),t&&(l.active||l.activeParent)&&(t.activeParent=!0),l})}function Ec(s,n=1){return s.filter(o=>!o.hideInToc).map(o=>({...o,children:Ec(o.children,n+1)}))}const aD={"slide-left":"slide-left | slide-right","slide-right":"slide-right | slide-left","slide-up":"slide-up | slide-down","slide-down":"slide-down | slide-up"};function cD(s,n=!1){if(!s||(typeof s=="string"&&(s={name:s}),!s.name))return;let o=s.name.includes("|")?s.name:aD[s.name]||s.name;if(o.includes("|")){const[t,r]=o.split("|").map(l=>l.trim());o=n?r:t}if(o)return{...s,name:o}}function iD(s,n,o){var r,l;let t=s>0?(r=o==null?void 0:o.meta)==null?void 0:r.transition:(l=n==null?void 0:n.meta)==null?void 0:l.transition;return t||(t=$e.transition),cD(t,s<0)}function pD(){const s=$e.titleTemplate.replace("%s",$e.title||"Slidev");cc({title:s}),D5($e.htmlAttrs),N5(`${s} - shared`),V5(`${s} - drawings`);const n=`${location.origin}_${$5()}`;function o(){Y9.value||!gs.value&&!F5.includes(location.host.split(":")[0])||(gs.value?(zo("page",+Ke.value),zo("clicks",Ts.value)):(zo("viewerPage",+Ke.value),zo("viewerClicks",Ts.value)),zo("lastUpdate",{id:n,type:gs.value?"presenter":"viewer",time:new Date().getTime()}))}As.afterEach(o),Be(Ts,o),q5(t=>{var l;As.currentRoute.value.path.match(/^\/(\d+|presenter)\/?/)&&((l=t.lastUpdate)==null?void 0:l.type)==="presenter"&&(+t.page!=+Ke.value||+Ts.value!=+t.clicks)&&As.replace({path:tl(t.page),query:{...As.currentRoute.value.query,clicks:t.clicks||0}})})}const uD=Pe({__name:"App",setup(s){return I(N),pD(),(n,o)=>{const t=Dr("RouterView"),r=Dr("StarportCarrier");return C(),te(Me,null,[R(t),R(r)],64)}}}),yD=q(uD,[["__file","/home/runner/work/sylius-resource-formation/sylius-resource-formation/node_modules/@slidev/client/App.vue"]]);function Fl(s){return s!==null&&typeof s=="object"}function Da(s,n,o=".",t){if(!Fl(n))return Da(s,{},o,t);const r=Object.assign({},n);for(const l in s){if(l==="__proto__"||l==="constructor")continue;const c=s[l];c!=null&&(t&&t(r,l,c,o)||(Array.isArray(c)&&Array.isArray(r[l])?r[l]=[...c,...r[l]]:Fl(c)&&Fl(r[l])?r[l]=Da(c,r[l],(o?`${o}.`:"")+l.toString(),t):r[l]=c))}return r}function dD(s){return(...n)=>n.reduce((o,t)=>Da(o,t,"",s),{})}const fD=dD(),Fd=1/60*1e3,mD=typeof performance<"u"?()=>performance.now():()=>Date.now(),$d=typeof window<"u"?s=>window.requestAnimationFrame(s):s=>setTimeout(()=>s(mD()),Fd);function hD(s){let n=[],o=[],t=0,r=!1,l=!1;const c=new WeakSet,i={schedule:(p,u=!1,y=!1)=>{const d=y&&r,f=d?n:o;return u&&c.add(p),f.indexOf(p)===-1&&(f.push(p),d&&r&&(t=n.length)),p},cancel:p=>{const u=o.indexOf(p);u!==-1&&o.splice(u,1),c.delete(p)},process:p=>{if(r){l=!0;return}if(r=!0,[n,o]=[o,n],o.length=0,t=n.length,t)for(let u=0;u<t;u++){const y=n[u];y(p),c.has(y)&&(i.schedule(y),s())}r=!1,l&&(l=!1,i.process(p))}};return i}const _D=40;let wa=!0,Tt=!1,Sa=!1;const Io={delta:0,timestamp:0},Gt=["read","update","preRender","render","postRender"],rl=Gt.reduce((s,n)=>(s[n]=hD(()=>Tt=!0),s),{}),Ra=Gt.reduce((s,n)=>{const o=rl[n];return s[n]=(t,r=!1,l=!1)=>(Tt||AD(),o.schedule(t,r,l)),s},{}),gD=Gt.reduce((s,n)=>(s[n]=rl[n].cancel,s),{});Gt.reduce((s,n)=>(s[n]=()=>rl[n].process(Io),s),{});const BD=s=>rl[s].process(Io),Id=s=>{Tt=!1,Io.delta=wa?Fd:Math.max(Math.min(s-Io.timestamp,_D),1),Io.timestamp=s,Sa=!0,Gt.forEach(BD),Sa=!1,Tt&&(wa=!1,$d(Id))},AD=()=>{Tt=!0,wa=!0,Sa||$d(Id)},Td=()=>Io;function Md(s,n){var o={};for(var t in s)Object.prototype.hasOwnProperty.call(s,t)&&n.indexOf(t)<0&&(o[t]=s[t]);if(s!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,t=Object.getOwnPropertySymbols(s);r<t.length;r++)n.indexOf(t[r])<0&&Object.prototype.propertyIsEnumerable.call(s,t[r])&&(o[t[r]]=s[t[r]]);return o}var bc=function(){},Mt=function(){};bc=function(s,n){!s&&typeof console<"u"&&console.warn(n)},Mt=function(s,n){if(!s)throw new Error(n)};const xa=(s,n,o)=>Math.min(Math.max(o,s),n),$l=.001,vD=.01,xp=10,CD=.05,ED=1;function bD({duration:s=800,bounce:n=.25,velocity:o=0,mass:t=1}){let r,l;bc(s<=xp*1e3,"Spring duration must be 10 seconds or less");let c=1-n;c=xa(CD,ED,c),s=xa(vD,xp,s/1e3),c<1?(r=u=>{const y=u*c,d=y*s,f=y-o,h=Fa(u,c),m=Math.exp(-d);return $l-f/h*m},l=u=>{const d=u*c*s,f=d*o+o,h=Math.pow(c,2)*Math.pow(u,2)*s,m=Math.exp(-d),g=Fa(Math.pow(u,2),c);return(-r(u)+$l>0?-1:1)*((f-h)*m)/g}):(r=u=>{const y=Math.exp(-u*s),d=(u-o)*s+1;return-$l+y*d},l=u=>{const y=Math.exp(-u*s),d=(o-u)*(s*s);return y*d});const i=5/s,p=DD(r,l,i);if(s=s*1e3,isNaN(p))return{stiffness:100,damping:10,duration:s};{const u=Math.pow(p,2)*t;return{stiffness:u,damping:c*2*Math.sqrt(t*u),duration:s}}}const kD=12;function DD(s,n,o){let t=o;for(let r=1;r<kD;r++)t=t-s(t)/n(t);return t}function Fa(s,n){return s*Math.sqrt(1-n*n)}const wD=["duration","bounce"],SD=["stiffness","damping","mass"];function Fp(s,n){return n.some(o=>s[o]!==void 0)}function RD(s){let n=Object.assign({velocity:0,stiffness:100,damping:10,mass:1,isResolvedFromDuration:!1},s);if(!Fp(s,SD)&&Fp(s,wD)){const o=bD(s);n=Object.assign(Object.assign(Object.assign({},n),o),{velocity:0,mass:1}),n.isResolvedFromDuration=!0}return n}function kc(s){var{from:n=0,to:o=1,restSpeed:t=2,restDelta:r}=s,l=Md(s,["from","to","restSpeed","restDelta"]);const c={done:!1,value:n};let{stiffness:i,damping:p,mass:u,velocity:y,duration:d,isResolvedFromDuration:f}=RD(l),h=$p,m=$p;function g(){const B=y?-(y/1e3):0,k=o-n,v=p/(2*Math.sqrt(i*u)),E=Math.sqrt(i/u)/1e3;if(r===void 0&&(r=Math.min(Math.abs(o-n)/100,.4)),v<1){const w=Fa(E,v);h=T=>{const U=Math.exp(-v*E*T);return o-U*((B+v*E*k)/w*Math.sin(w*T)+k*Math.cos(w*T))},m=T=>{const U=Math.exp(-v*E*T);return v*E*U*(Math.sin(w*T)*(B+v*E*k)/w+k*Math.cos(w*T))-U*(Math.cos(w*T)*(B+v*E*k)-w*k*Math.sin(w*T))}}else if(v===1)h=w=>o-Math.exp(-E*w)*(k+(B+E*k)*w);else{const w=E*Math.sqrt(v*v-1);h=T=>{const U=Math.exp(-v*E*T),z=Math.min(w*T,300);return o-U*((B+v*E*k)*Math.sinh(z)+w*k*Math.cosh(z))/w}}}return g(),{next:B=>{const k=h(B);if(f)c.done=B>=d;else{const v=m(B)*1e3,E=Math.abs(v)<=t,w=Math.abs(o-k)<=r;c.done=E&&w}return c.value=c.done?o:k,c},flipTarget:()=>{y=-y,[n,o]=[o,n],g()}}}kc.needsInterpolation=(s,n)=>typeof s=="string"||typeof n=="string";const $p=s=>0,Pd=(s,n,o)=>{const t=n-s;return t===0?1:(o-s)/t},Dc=(s,n,o)=>-o*s+o*n+s,Od=(s,n)=>o=>Math.max(Math.min(o,n),s),ft=s=>s%1?Number(s.toFixed(5)):s,Pt=/(-)?([\d]*\.?[\d])+/g,$a=/(#[0-9a-f]{6}|#[0-9a-f]{3}|#(?:[0-9a-f]{2}){2,4}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))/gi,xD=/^(#[0-9a-f]{3}|#(?:[0-9a-f]{2}){2,4}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))$/i;function Wt(s){return typeof s=="string"}const zt={test:s=>typeof s=="number",parse:parseFloat,transform:s=>s},mt=Object.assign(Object.assign({},zt),{transform:Od(0,1)}),lr=Object.assign(Object.assign({},zt),{default:1}),wc=s=>({test:n=>Wt(n)&&n.endsWith(s)&&n.split(" ").length===1,parse:parseFloat,transform:n=>`${n}${s}`}),Vn=wc("deg"),ht=wc("%"),ge=wc("px"),Ip=Object.assign(Object.assign({},ht),{parse:s=>ht.parse(s)/100,transform:s=>ht.transform(s*100)}),Sc=(s,n)=>o=>Boolean(Wt(o)&&xD.test(o)&&o.startsWith(s)||n&&Object.prototype.hasOwnProperty.call(o,n)),Ld=(s,n,o)=>t=>{if(!Wt(t))return t;const[r,l,c,i]=t.match(Pt);return{[s]:parseFloat(r),[n]:parseFloat(l),[o]:parseFloat(c),alpha:i!==void 0?parseFloat(i):1}},Xn={test:Sc("hsl","hue"),parse:Ld("hue","saturation","lightness"),transform:({hue:s,saturation:n,lightness:o,alpha:t=1})=>"hsla("+Math.round(s)+", "+ht.transform(ft(n))+", "+ht.transform(ft(o))+", "+ft(mt.transform(t))+")"},FD=Od(0,255),Il=Object.assign(Object.assign({},zt),{transform:s=>Math.round(FD(s))}),Sn={test:Sc("rgb","red"),parse:Ld("red","green","blue"),transform:({red:s,green:n,blue:o,alpha:t=1})=>"rgba("+Il.transform(s)+", "+Il.transform(n)+", "+Il.transform(o)+", "+ft(mt.transform(t))+")"};function $D(s){let n="",o="",t="",r="";return s.length>5?(n=s.substr(1,2),o=s.substr(3,2),t=s.substr(5,2),r=s.substr(7,2)):(n=s.substr(1,1),o=s.substr(2,1),t=s.substr(3,1),r=s.substr(4,1),n+=n,o+=o,t+=t,r+=r),{red:parseInt(n,16),green:parseInt(o,16),blue:parseInt(t,16),alpha:r?parseInt(r,16)/255:1}}const Ia={test:Sc("#"),parse:$D,transform:Sn.transform},_s={test:s=>Sn.test(s)||Ia.test(s)||Xn.test(s),parse:s=>Sn.test(s)?Sn.parse(s):Xn.test(s)?Xn.parse(s):Ia.parse(s),transform:s=>Wt(s)?s:s.hasOwnProperty("red")?Sn.transform(s):Xn.transform(s)},Nd="${c}",qd="${n}";function ID(s){var n,o,t,r;return isNaN(s)&&Wt(s)&&((o=(n=s.match(Pt))===null||n===void 0?void 0:n.length)!==null&&o!==void 0?o:0)+((r=(t=s.match($a))===null||t===void 0?void 0:t.length)!==null&&r!==void 0?r:0)>0}function Ud(s){typeof s=="number"&&(s=`${s}`);const n=[];let o=0;const t=s.match($a);t&&(o=t.length,s=s.replace($a,Nd),n.push(...t.map(_s.parse)));const r=s.match(Pt);return r&&(s=s.replace(Pt,qd),n.push(...r.map(zt.parse))),{values:n,numColors:o,tokenised:s}}function Hd(s){return Ud(s).values}function Vd(s){const{values:n,numColors:o,tokenised:t}=Ud(s),r=n.length;return l=>{let c=t;for(let i=0;i<r;i++)c=c.replace(i<o?Nd:qd,i<o?_s.transform(l[i]):ft(l[i]));return c}}const TD=s=>typeof s=="number"?0:s;function MD(s){const n=Hd(s);return Vd(s)(n.map(TD))}const Kt={test:ID,parse:Hd,createTransformer:Vd,getAnimatableNone:MD},PD=new Set(["brightness","contrast","saturate","opacity"]);function OD(s){let[n,o]=s.slice(0,-1).split("(");if(n==="drop-shadow")return s;const[t]=o.match(Pt)||[];if(!t)return s;const r=o.replace(t,"");let l=PD.has(n)?1:0;return t!==o&&(l*=100),n+"("+l+r+")"}const LD=/([a-z-]*)\(.*?\)/g,Ta=Object.assign(Object.assign({},Kt),{getAnimatableNone:s=>{const n=s.match(LD);return n?n.map(OD).join(" "):s}});function Tl(s,n,o){return o<0&&(o+=1),o>1&&(o-=1),o<1/6?s+(n-s)*6*o:o<1/2?n:o<2/3?s+(n-s)*(2/3-o)*6:s}function Tp({hue:s,saturation:n,lightness:o,alpha:t}){s/=360,n/=100,o/=100;let r=0,l=0,c=0;if(!n)r=l=c=o;else{const i=o<.5?o*(1+n):o+n-o*n,p=2*o-i;r=Tl(p,i,s+1/3),l=Tl(p,i,s),c=Tl(p,i,s-1/3)}return{red:Math.round(r*255),green:Math.round(l*255),blue:Math.round(c*255),alpha:t}}const ND=(s,n,o)=>{const t=s*s,r=n*n;return Math.sqrt(Math.max(0,o*(r-t)+t))},qD=[Ia,Sn,Xn],Mp=s=>qD.find(n=>n.test(s)),Pp=s=>`'${s}' is not an animatable color. Use the equivalent color code instead.`,jd=(s,n)=>{let o=Mp(s),t=Mp(n);Mt(!!o,Pp(s)),Mt(!!t,Pp(n));let r=o.parse(s),l=t.parse(n);o===Xn&&(r=Tp(r),o=Sn),t===Xn&&(l=Tp(l),t=Sn);const c=Object.assign({},r);return i=>{for(const p in c)p!=="alpha"&&(c[p]=ND(r[p],l[p],i));return c.alpha=Dc(r.alpha,l.alpha,i),o.transform(c)}},UD=s=>typeof s=="number",HD=(s,n)=>o=>n(s(o)),Gd=(...s)=>s.reduce(HD);function Wd(s,n){return UD(s)?o=>Dc(s,n,o):_s.test(s)?jd(s,n):Kd(s,n)}const zd=(s,n)=>{const o=[...s],t=o.length,r=s.map((l,c)=>Wd(l,n[c]));return l=>{for(let c=0;c<t;c++)o[c]=r[c](l);return o}},VD=(s,n)=>{const o=Object.assign(Object.assign({},s),n),t={};for(const r in o)s[r]!==void 0&&n[r]!==void 0&&(t[r]=Wd(s[r],n[r]));return r=>{for(const l in t)o[l]=t[l](r);return o}};function Op(s){const n=Kt.parse(s),o=n.length;let t=0,r=0,l=0;for(let c=0;c<o;c++)t||typeof n[c]=="number"?t++:n[c].hue!==void 0?l++:r++;return{parsed:n,numNumbers:t,numRGB:r,numHSL:l}}const Kd=(s,n)=>{const o=Kt.createTransformer(n),t=Op(s),r=Op(n);return t.numHSL===r.numHSL&&t.numRGB===r.numRGB&&t.numNumbers>=r.numNumbers?Gd(zd(t.parsed,r.parsed),o):(bc(!0,`Complex values '${s}' and '${n}' too different to mix. Ensure all colors are of the same type, and that each contains the same quantity of number and color values. Falling back to instant transition.`),c=>`${c>0?n:s}`)},jD=(s,n)=>o=>Dc(s,n,o);function GD(s){if(typeof s=="number")return jD;if(typeof s=="string")return _s.test(s)?jd:Kd;if(Array.isArray(s))return zd;if(typeof s=="object")return VD}function WD(s,n,o){const t=[],r=o||GD(s[0]),l=s.length-1;for(let c=0;c<l;c++){let i=r(s[c],s[c+1]);if(n){const p=Array.isArray(n)?n[c]:n;i=Gd(p,i)}t.push(i)}return t}function zD([s,n],[o]){return t=>o(Pd(s,n,t))}function KD(s,n){const o=s.length,t=o-1;return r=>{let l=0,c=!1;if(r<=s[0]?c=!0:r>=s[t]&&(l=t-1,c=!0),!c){let p=1;for(;p<o&&!(s[p]>r||p===t);p++);l=p-1}const i=Pd(s[l],s[l+1],r);return n[l](i)}}function Yd(s,n,{clamp:o=!0,ease:t,mixer:r}={}){const l=s.length;Mt(l===n.length,"Both input and output ranges must be the same length"),Mt(!t||!Array.isArray(t)||t.length===l-1,"Array of easing functions must be of length `input.length - 1`, as it applies to the transitions **between** the defined values."),s[0]>s[l-1]&&(s=[].concat(s),n=[].concat(n),s.reverse(),n.reverse());const c=WD(n,t,r),i=l===2?zD(s,c):KD(s,c);return o?p=>i(xa(s[0],s[l-1],p)):i}const ll=s=>n=>1-s(1-n),Rc=s=>n=>n<=.5?s(2*n)/2:(2-s(2*(1-n)))/2,YD=s=>n=>Math.pow(n,s),Zd=s=>n=>n*n*((s+1)*n-s),ZD=s=>{const n=Zd(s);return o=>(o*=2)<1?.5*n(o):.5*(2-Math.pow(2,-10*(o-1)))},Qd=1.525,QD=4/11,JD=8/11,XD=9/10,Jd=s=>s,xc=YD(2),e7=ll(xc),Xd=Rc(xc),ef=s=>1-Math.sin(Math.acos(s)),sf=ll(ef),s7=Rc(sf),Fc=Zd(Qd),n7=ll(Fc),o7=Rc(Fc),t7=ZD(Qd),r7=4356/361,l7=35442/1805,a7=16061/1805,Or=s=>{if(s===1||s===0)return s;const n=s*s;return s<QD?7.5625*n:s<JD?9.075*n-9.9*s+3.4:s<XD?r7*n-l7*s+a7:10.8*s*s-20.52*s+10.72},c7=ll(Or),i7=s=>s<.5?.5*(1-Or(1-s*2)):.5*Or(s*2-1)+.5;function p7(s,n){return s.map(()=>n||Xd).splice(0,s.length-1)}function u7(s){const n=s.length;return s.map((o,t)=>t!==0?t/(n-1):0)}function y7(s,n){return s.map(o=>o*n)}function hr({from:s=0,to:n=1,ease:o,offset:t,duration:r=300}){const l={done:!1,value:s},c=Array.isArray(n)?n:[s,n],i=y7(t&&t.length===c.length?t:u7(c),r);function p(){return Yd(i,c,{ease:Array.isArray(o)?o:p7(c,o)})}let u=p();return{next:y=>(l.value=u(y),l.done=y>=r,l),flipTarget:()=>{c.reverse(),u=p()}}}function d7({velocity:s=0,from:n=0,power:o=.8,timeConstant:t=350,restDelta:r=.5,modifyTarget:l}){const c={done:!1,value:n};let i=o*s;const p=n+i,u=l===void 0?p:l(p);return u!==p&&(i=u-n),{next:y=>{const d=-i*Math.exp(-y/t);return c.done=!(d>r||d<-r),c.value=c.done?u:u+d,c},flipTarget:()=>{}}}const Lp={keyframes:hr,spring:kc,decay:d7};function f7(s){if(Array.isArray(s.to))return hr;if(Lp[s.type])return Lp[s.type];const n=new Set(Object.keys(s));return n.has("ease")||n.has("duration")&&!n.has("dampingRatio")?hr:n.has("dampingRatio")||n.has("stiffness")||n.has("mass")||n.has("damping")||n.has("restSpeed")||n.has("restDelta")?kc:hr}function nf(s,n,o=0){return s-n-o}function m7(s,n,o=0,t=!0){return t?nf(n+-s,n,o):n-(s-n)+o}function h7(s,n,o,t){return t?s>=n+o:s<=-o}const _7=s=>{const n=({delta:o})=>s(o);return{start:()=>Ra.update(n,!0),stop:()=>gD.update(n)}};function of(s){var n,o,{from:t,autoplay:r=!0,driver:l=_7,elapsed:c=0,repeat:i=0,repeatType:p="loop",repeatDelay:u=0,onPlay:y,onStop:d,onComplete:f,onRepeat:h,onUpdate:m}=s,g=Md(s,["from","autoplay","driver","elapsed","repeat","repeatType","repeatDelay","onPlay","onStop","onComplete","onRepeat","onUpdate"]);let{to:B}=g,k,v=0,E=g.duration,w,T=!1,U=!0,z;const $=f7(g);!((o=(n=$).needsInterpolation)===null||o===void 0)&&o.call(n,t,B)&&(z=Yd([0,100],[t,B],{clamp:!1}),t=0,B=100);const G=$(Object.assign(Object.assign({},g),{from:t,to:B}));function oe(){v++,p==="reverse"?(U=v%2===0,c=m7(c,E,u,U)):(c=nf(c,E,u),p==="mirror"&&G.flipTarget()),T=!1,h&&h()}function ue(){k.stop(),f&&f()}function J(Te){if(U||(Te=-Te),c+=Te,!T){const xe=G.next(Math.max(0,c));w=xe.value,z&&(w=z(w)),T=U?xe.done:c<=0}m==null||m(w),T&&(v===0&&(E??(E=c)),v<i?h7(c,E,u,U)&&oe():ue())}function Ce(){y==null||y(),k=l(J),k.start()}return r&&Ce(),{stop:()=>{d==null||d(),k.stop()}}}function tf(s,n){return n?s*(1e3/n):0}function g7({from:s=0,velocity:n=0,min:o,max:t,power:r=.8,timeConstant:l=750,bounceStiffness:c=500,bounceDamping:i=10,restDelta:p=1,modifyTarget:u,driver:y,onUpdate:d,onComplete:f,onStop:h}){let m;function g(E){return o!==void 0&&E<o||t!==void 0&&E>t}function B(E){return o===void 0?t:t===void 0||Math.abs(o-E)<Math.abs(t-E)?o:t}function k(E){m==null||m.stop(),m=of(Object.assign(Object.assign({},E),{driver:y,onUpdate:w=>{var T;d==null||d(w),(T=E.onUpdate)===null||T===void 0||T.call(E,w)},onComplete:f,onStop:h}))}function v(E){k(Object.assign({type:"spring",stiffness:c,damping:i,restDelta:p},E))}if(g(s))v({from:s,velocity:n,to:B(s)});else{let E=r*n+s;typeof u<"u"&&(E=u(E));const w=B(E),T=w===o?-1:1;let U,z;const $=G=>{U=z,z=G,n=tf(G-U,Td().delta),(T===1&&G>w||T===-1&&G<w)&&v({from:G,to:w,velocity:n})};k({type:"decay",from:s,velocity:n,timeConstant:l,power:r,restDelta:p,modifyTarget:u,onUpdate:g(E)?$:void 0})}return{stop:()=>m==null?void 0:m.stop()}}const rf=(s,n)=>1-3*n+3*s,lf=(s,n)=>3*n-6*s,af=s=>3*s,Lr=(s,n,o)=>((rf(n,o)*s+lf(n,o))*s+af(n))*s,cf=(s,n,o)=>3*rf(n,o)*s*s+2*lf(n,o)*s+af(n),B7=1e-7,A7=10;function v7(s,n,o,t,r){let l,c,i=0;do c=n+(o-n)/2,l=Lr(c,t,r)-s,l>0?o=c:n=c;while(Math.abs(l)>B7&&++i<A7);return c}const C7=8,E7=.001;function b7(s,n,o,t){for(let r=0;r<C7;++r){const l=cf(n,o,t);if(l===0)return n;const c=Lr(n,o,t)-s;n-=c/l}return n}const _r=11,ar=1/(_r-1);function k7(s,n,o,t){if(s===n&&o===t)return Jd;const r=new Float32Array(_r);for(let c=0;c<_r;++c)r[c]=Lr(c*ar,s,o);function l(c){let i=0,p=1;const u=_r-1;for(;p!==u&&r[p]<=c;++p)i+=ar;--p;const y=(c-r[p])/(r[p+1]-r[p]),d=i+y*ar,f=cf(d,s,o);return f>=E7?b7(c,d,s,o):f===0?d:v7(c,i,i+ar,s,o)}return c=>c===0||c===1?c:Lr(l(c),n,t)}const Ml={};class D7{constructor(){this.subscriptions=new Set}add(n){return this.subscriptions.add(n),()=>this.subscriptions.delete(n)}notify(n,o,t){if(this.subscriptions.size)for(const r of this.subscriptions)r(n,o,t)}clear(){this.subscriptions.clear()}}const Np=s=>!isNaN(parseFloat(s));class w7{constructor(n){this.timeDelta=0,this.lastUpdated=0,this.updateSubscribers=new D7,this.canTrackVelocity=!1,this.updateAndNotify=o=>{this.prev=this.current,this.current=o;const{delta:t,timestamp:r}=Td();this.lastUpdated!==r&&(this.timeDelta=t,this.lastUpdated=r),Ra.postRender(this.scheduleVelocityCheck),this.updateSubscribers.notify(this.current)},this.scheduleVelocityCheck=()=>Ra.postRender(this.velocityCheck),this.velocityCheck=({timestamp:o})=>{this.canTrackVelocity||(this.canTrackVelocity=Np(this.current)),o!==this.lastUpdated&&(this.prev=this.current)},this.prev=this.current=n,this.canTrackVelocity=Np(this.current)}onChange(n){return this.updateSubscribers.add(n)}clearListeners(){this.updateSubscribers.clear()}set(n){this.updateAndNotify(n)}get(){return this.current}getPrevious(){return this.prev}getVelocity(){return this.canTrackVelocity?tf(parseFloat(this.current)-parseFloat(this.prev),this.timeDelta):0}start(n){return this.stop(),new Promise(o=>{const{stop:t}=n(o);this.stopAnimation=t}).then(()=>this.clearAnimation())}stop(){this.stopAnimation&&this.stopAnimation(),this.clearAnimation()}isAnimating(){return!!this.stopAnimation}clearAnimation(){this.stopAnimation=null}destroy(){this.updateSubscribers.clear(),this.stop()}}function S7(s){return new w7(s)}const{isArray:R7}=Array;function x7(){const s=Z({}),n=t=>{const r=l=>{s.value[l]&&(s.value[l].stop(),s.value[l].destroy(),delete s.value[l])};t?R7(t)?t.forEach(r):r(t):Object.keys(s.value).forEach(r)},o=(t,r,l)=>{if(s.value[t])return s.value[t];const c=S7(r);return c.onChange(i=>l[t]=i),s.value[t]=c,c};return u_(n),{motionValues:s,get:o,stop:n}}const F7=s=>Array.isArray(s),jn=()=>({type:"spring",stiffness:500,damping:25,restDelta:.5,restSpeed:10}),Pl=s=>({type:"spring",stiffness:550,damping:s===0?2*Math.sqrt(550):30,restDelta:.01,restSpeed:10}),$7=s=>({type:"spring",stiffness:550,damping:s===0?100:30,restDelta:.01,restSpeed:10}),Ol=()=>({type:"keyframes",ease:"linear",duration:300}),I7=s=>({type:"keyframes",duration:800,values:s}),qp={default:$7,x:jn,y:jn,z:jn,rotate:jn,rotateX:jn,rotateY:jn,rotateZ:jn,scaleX:Pl,scaleY:Pl,scale:Pl,backgroundColor:Ol,color:Ol,opacity:Ol},pf=(s,n)=>{let o;return F7(n)?o=I7:o=qp[s]||qp.default,{to:n,...o(n)}},Up={...zt,transform:Math.round},uf={color:_s,backgroundColor:_s,outlineColor:_s,fill:_s,stroke:_s,borderColor:_s,borderTopColor:_s,borderRightColor:_s,borderBottomColor:_s,borderLeftColor:_s,borderWidth:ge,borderTopWidth:ge,borderRightWidth:ge,borderBottomWidth:ge,borderLeftWidth:ge,borderRadius:ge,radius:ge,borderTopLeftRadius:ge,borderTopRightRadius:ge,borderBottomRightRadius:ge,borderBottomLeftRadius:ge,width:ge,maxWidth:ge,height:ge,maxHeight:ge,size:ge,top:ge,right:ge,bottom:ge,left:ge,padding:ge,paddingTop:ge,paddingRight:ge,paddingBottom:ge,paddingLeft:ge,margin:ge,marginTop:ge,marginRight:ge,marginBottom:ge,marginLeft:ge,rotate:Vn,rotateX:Vn,rotateY:Vn,rotateZ:Vn,scale:lr,scaleX:lr,scaleY:lr,scaleZ:lr,skew:Vn,skewX:Vn,skewY:Vn,distance:ge,translateX:ge,translateY:ge,translateZ:ge,x:ge,y:ge,z:ge,perspective:ge,transformPerspective:ge,opacity:mt,originX:Ip,originY:Ip,originZ:ge,zIndex:Up,filter:Ta,WebkitFilter:Ta,fillOpacity:mt,strokeOpacity:mt,numOctaves:Up},$c=s=>uf[s],yf=(s,n)=>n&&typeof s=="number"&&n.transform?n.transform(s):s;function T7(s,n){let o=$c(s);return o!==Ta&&(o=Kt),o.getAnimatableNone?o.getAnimatableNone(n):void 0}const M7={linear:Jd,easeIn:xc,easeInOut:Xd,easeOut:e7,circIn:ef,circInOut:s7,circOut:sf,backIn:Fc,backInOut:o7,backOut:n7,anticipate:t7,bounceIn:c7,bounceInOut:i7,bounceOut:Or},Hp=s=>{if(Array.isArray(s)){const[n,o,t,r]=s;return k7(n,o,t,r)}else if(typeof s=="string")return M7[s];return s},P7=s=>Array.isArray(s)&&typeof s[0]!="number",Vp=(s,n)=>s==="zIndex"?!1:!!(typeof n=="number"||Array.isArray(n)||typeof n=="string"&&Kt.test(n)&&!n.startsWith("url("));function O7(s){return Array.isArray(s.to)&&s.to[0]===null&&(s.to=[...s.to],s.to[0]=s.from),s}function L7({ease:s,times:n,delay:o,...t}){const r={...t};return n&&(r.offset=n),s&&(r.ease=P7(s)?s.map(Hp):Hp(s)),o&&(r.elapsed=-o),r}function N7(s,n,o){return Array.isArray(n.to)&&(s.duration||(s.duration=800)),O7(n),q7(s)||(s={...s,...pf(o,n.to)}),{...n,...L7(s)}}function q7({delay:s,repeat:n,repeatType:o,repeatDelay:t,from:r,...l}){return!!Object.keys(l).length}function U7(s,n){return s[n]||s.default||s}function H7(s,n,o,t,r){const l=U7(t,s);let c=l.from===null||l.from===void 0?n.get():l.from;const i=Vp(s,o);c==="none"&&i&&typeof o=="string"&&(c=T7(s,o));const p=Vp(s,c);function u(d){const f={from:c,to:o,velocity:t.velocity?t.velocity:n.getVelocity(),onUpdate:h=>n.set(h)};return l.type==="inertia"||l.type==="decay"?g7({...f,...l}):of({...N7(l,f,s),onUpdate:h=>{f.onUpdate(h),l.onUpdate&&l.onUpdate(h)},onComplete:()=>{t.onComplete&&t.onComplete(),r&&r(),d&&d()}})}function y(d){return n.set(o),t.onComplete&&t.onComplete(),r&&r(),d&&d(),{stop:()=>{}}}return!p||!i||l.type===!1?y:u}function V7(){const{motionValues:s,stop:n,get:o}=x7();return{motionValues:s,stop:n,push:(r,l,c,i={},p)=>{const u=c[r],y=o(r,u,c);if(i&&i.immediate){y.set(l);return}const d=H7(r,y,l,i,p);y.start(d)}}}function j7(s,n={},{motionValues:o,push:t,stop:r}=V7()){const l=D(n),c=Z(!1);Be(o,d=>{c.value=Object.values(d).filter(f=>f.isAnimating()).length>0},{immediate:!0,deep:!0});const i=d=>{if(!l||!l[d])throw new Error(`The variant ${d} does not exist.`);return l[d]},p=d=>(typeof d=="string"&&(d=i(d)),Promise.all(Object.entries(d).map(([f,h])=>{if(f!=="transition")return new Promise(m=>t(f,h,s,d.transition||pf(f,d[f]),m))}).filter(Boolean)));return{isAnimating:c,apply:p,set:d=>{const f=ca(d)?d:i(d);Object.entries(f).forEach(([h,m])=>{h!=="transition"&&t(h,m,s,{immediate:!0})})},leave:async d=>{let f;if(l&&(l.leave&&(f=l.leave),!l.leave&&l.initial&&(f=l.initial)),!f){d();return}await p(f),d()},stop:r}}const Ic=typeof window<"u",G7=()=>Ic&&window.onpointerdown===null,W7=()=>Ic&&window.ontouchstart===null,z7=()=>Ic&&window.onmousedown===null;function K7({target:s,state:n,variants:o,apply:t}){const r=D(o),l=Z(!1),c=Z(!1),i=Z(!1),p=F(()=>{let y=[];return r&&(r.hovered&&(y=[...y,...Object.keys(r.hovered)]),r.tapped&&(y=[...y,...Object.keys(r.tapped)]),r.focused&&(y=[...y,...Object.keys(r.focused)])),y}),u=F(()=>{const y={};Object.assign(y,n.value),l.value&&r.hovered&&Object.assign(y,r.hovered),c.value&&r.tapped&&Object.assign(y,r.tapped),i.value&&r.focused&&Object.assign(y,r.focused);for(const d in y)p.value.includes(d)||delete y[d];return y});r.hovered&&(Ae(s,"mouseenter",()=>l.value=!0),Ae(s,"mouseleave",()=>{l.value=!1,c.value=!1}),Ae(s,"mouseout",()=>{l.value=!1,c.value=!1})),r.tapped&&(z7()&&(Ae(s,"mousedown",()=>c.value=!0),Ae(s,"mouseup",()=>c.value=!1)),G7()&&(Ae(s,"pointerdown",()=>c.value=!0),Ae(s,"pointerup",()=>c.value=!1)),W7()&&(Ae(s,"touchstart",()=>c.value=!0),Ae(s,"touchend",()=>c.value=!1))),r.focused&&(Ae(s,"focus",()=>i.value=!0),Ae(s,"blur",()=>i.value=!1)),Be(u,t)}function Y7({set:s,target:n,apply:o,variants:t,variant:r}){const l=D(t);Be(()=>n,()=>{l&&(l.initial&&s("initial"),l.enter&&(r.value="enter"))},{immediate:!0,flush:"pre"})}function Z7({state:s,apply:n}){Be(s,o=>{o&&n(o)},{immediate:!0})}function Q7({target:s,variants:n,variant:o}){const t=D(n);t&&(t.visible||t.visibleOnce)&&ag(s,([{isIntersecting:r}])=>{t.visible?r?o.value="visible":o.value="initial":t.visibleOnce&&(r&&o.value!=="visibleOnce"?o.value="visibleOnce":o.value||(o.value="initial"))})}function J7(s,n={syncVariants:!0,lifeCycleHooks:!0,visibilityHooks:!0,eventListeners:!0}){n.lifeCycleHooks&&Y7(s),n.syncVariants&&Z7(s),n.visibilityHooks&&Q7(s),n.eventListeners&&K7(s)}function df(s={}){const n=Ge({...s}),o=Z({});return Be(n,()=>{const t={};for(const[r,l]of Object.entries(n)){const c=$c(r),i=yf(l,c);t[r]=i}o.value=t},{immediate:!0,deep:!0}),{state:n,style:o}}function Tc(s,n){Be(()=>ws(s),o=>{o&&n(o)},{immediate:!0})}const X7={x:"translateX",y:"translateY",z:"translateZ"};function ff(s={},n=!0){const o=Ge({...s}),t=Z("");return Be(o,r=>{let l="",c=!1;if(n&&(r.x||r.y||r.z)){const i=[r.x||0,r.y||0,r.z||0].map(ge.transform).join(",");l+=`translate3d(${i}) `,c=!0}for(const[i,p]of Object.entries(r)){if(n&&(i==="x"||i==="y"||i==="z"))continue;const u=$c(i),y=yf(p,u);l+=`${X7[i]||i}(${y}) `}n&&!c&&(l+="translateZ(0px) "),t.value=l.trim()},{immediate:!0,deep:!0}),{state:o,transform:t}}const ew=["","X","Y","Z"],sw=["perspective","translate","scale","rotate","skew"],mf=["transformPerspective","x","y","z"];sw.forEach(s=>{ew.forEach(n=>{const o=s+n;mf.push(o)})});const nw=new Set(mf);function Mc(s){return nw.has(s)}const ow=new Set(["originX","originY","originZ"]);function hf(s){return ow.has(s)}function tw(s){const n={},o={};return Object.entries(s).forEach(([t,r])=>{Mc(t)||hf(t)?n[t]=r:o[t]=r}),{transform:n,style:o}}function _f(s){const{transform:n,style:o}=tw(s),{transform:t}=ff(n),{style:r}=df(o);return t.value&&(r.value.transform=t.value),r.value}function rw(s,n){let o,t;const{state:r,style:l}=df();return Tc(s,c=>{t=c;for(const i of Object.keys(uf))c.style[i]===null||c.style[i]===""||Mc(i)||hf(i)||(r[i]=c.style[i]);o&&Object.entries(o).forEach(([i,p])=>c.style[i]=p),n&&n(r)}),Be(l,c=>{if(!t){o=c;return}for(const i in c)t.style[i]=c[i]},{immediate:!0}),{style:r}}function lw(s){const n=s.trim().split(/\) |\)/);if(n.length===1)return{};const o=t=>t.endsWith("px")||t.endsWith("deg")?parseFloat(t):isNaN(Number(t))?Number(t):t;return n.reduce((t,r)=>{if(!r)return t;const[l,c]=r.split("("),p=c.split(",").map(y=>o(y.endsWith(")")?y.replace(")",""):y.trim())),u=p.length===1?p[0]:p;return{...t,[l]:u}},{})}function aw(s,n){Object.entries(lw(n)).forEach(([o,t])=>{const r=["x","y","z"];if(o==="translate3d"){if(t===0){r.forEach(l=>s[l]=0);return}t.forEach((l,c)=>s[r[c]]=l);return}if(t=parseFloat(t),o==="translateX"){s.x=t;return}if(o==="translateY"){s.y=t;return}if(o==="translateZ"){s.z=t;return}s[o]=t})}function cw(s,n){let o,t;const{state:r,transform:l}=ff();return Tc(s,c=>{t=c,c.style.transform&&aw(r,c.style.transform),o&&(c.style.transform=o),n&&n(r)}),Be(l,c=>{if(!t){o=c;return}t.style.transform=c},{immediate:!0}),{transform:r}}function iw(s,n){const o=Ge({}),t=c=>Object.entries(c).forEach(([i,p])=>o[i]=p),{style:r}=rw(s,t),{transform:l}=cw(s,t);return Be(o,c=>{Object.entries(c).forEach(([i,p])=>{const u=Mc(i)?l:r;u[i]&&u[i]===p||(u[i]=p)})},{immediate:!0,deep:!0}),Tc(s,()=>n&&t(n)),{motionProperties:o,style:r,transform:l}}function pw(s={}){const n=D(s),o=Z();return{state:F(()=>{if(o.value)return n[o.value]}),variant:o}}function gf(s,n={},o){const{motionProperties:t}=iw(s),{variant:r,state:l}=pw(n),c=j7(t,n),i={target:s,variant:r,variants:n,state:l,motionProperties:t,...c};return J7(i,o),i}const uw=["initial","enter","leave","visible","visible-once","hovered","tapped","focused","delay"],yw=(s,n)=>{const o=s.props?s.props:s.data&&s.data.attrs?s.data.attrs:{};o&&(o.variants&&ca(o.variants)&&(n.value={...n.value,...o.variants}),uw.forEach(t=>{if(t==="delay"){if(o&&o[t]&&Y5(o[t])){const r=o[t];n&&n.value&&(n.value.enter&&(n.value.enter.transition||(n.value.enter.transition={}),n.value.enter.transition={delay:r,...n.value.enter.transition}),n.value.visible&&(n.value.visible.transition||(n.value.visible.transition={}),n.value.visible.transition={delay:r,...n.value.visible.transition}),n.value.visibleOnce&&(n.value.visibleOnce.transition||(n.value.visibleOnce.transition={}),n.value.visibleOnce.transition={delay:r,...n.value.visibleOnce.transition}))}return}t==="visible-once"&&(t="visibleOnce"),o&&o[t]&&ca(o[t])&&(n.value[t]=o[t])}))},Ll=s=>({created:(o,t,r)=>{const l=t.value&&typeof t.value=="string"?t.value:r.key;l&&Ml[l]&&Ml[l].stop();const c=Z(s||{});typeof t.value=="object"&&(c.value=t.value),yw(r,c);const i=gf(o,c);o.motionInstance=i,l&&(Ml[l]=i)},getSSRProps(o,t){let{initial:r}=o.value||t&&(t==null?void 0:t.props)||{};r=D(r);const l=fD((s==null?void 0:s.initial)||{},r||{});return!l||Object.keys(l).length===0?void 0:{style:_f(l)}}}),dw={initial:{opacity:0},enter:{opacity:1}},fw={initial:{opacity:0},visible:{opacity:1}},mw={initial:{opacity:0},visibleOnce:{opacity:1}},hw={initial:{scale:0,opacity:0},enter:{scale:1,opacity:1}},_w={initial:{scale:0,opacity:0},visible:{scale:1,opacity:1}},gw={initial:{scale:0,opacity:0},visibleOnce:{scale:1,opacity:1}},Bw={initial:{x:-100,rotate:90,opacity:0},enter:{x:0,rotate:0,opacity:1}},Aw={initial:{x:-100,rotate:90,opacity:0},visible:{x:0,rotate:0,opacity:1}},vw={initial:{x:-100,rotate:90,opacity:0},visibleOnce:{x:0,rotate:0,opacity:1}},Cw={initial:{x:100,rotate:-90,opacity:0},enter:{x:0,rotate:0,opacity:1}},Ew={initial:{x:100,rotate:-90,opacity:0},visible:{x:0,rotate:0,opacity:1}},bw={initial:{x:100,rotate:-90,opacity:0},visibleOnce:{x:0,rotate:0,opacity:1}},kw={initial:{y:-100,rotate:-90,opacity:0},enter:{y:0,rotate:0,opacity:1}},Dw={initial:{y:-100,rotate:-90,opacity:0},visible:{y:0,rotate:0,opacity:1}},ww={initial:{y:-100,rotate:-90,opacity:0},visibleOnce:{y:0,rotate:0,opacity:1}},Sw={initial:{y:100,rotate:90,opacity:0},enter:{y:0,rotate:0,opacity:1}},Rw={initial:{y:100,rotate:90,opacity:0},visible:{y:0,rotate:0,opacity:1}},xw={initial:{y:100,rotate:90,opacity:0},visibleOnce:{y:0,rotate:0,opacity:1}},Fw={initial:{x:-100,opacity:0},enter:{x:0,opacity:1}},$w={initial:{x:-100,opacity:0},visible:{x:0,opacity:1}},Iw={initial:{x:-100,opacity:0},visibleOnce:{x:0,opacity:1}},Tw={initial:{x:100,opacity:0},enter:{x:0,opacity:1}},Mw={initial:{x:100,opacity:0},visible:{x:0,opacity:1}},Pw={initial:{x:100,opacity:0},visibleOnce:{x:0,opacity:1}},Ow={initial:{y:-100,opacity:0},enter:{y:0,opacity:1}},Lw={initial:{y:-100,opacity:0},visible:{y:0,opacity:1}},Nw={initial:{y:-100,opacity:0},visibleOnce:{y:0,opacity:1}},qw={initial:{y:100,opacity:0},enter:{y:0,opacity:1}},Uw={initial:{y:100,opacity:0},visible:{y:0,opacity:1}},Hw={initial:{y:100,opacity:0},visibleOnce:{y:0,opacity:1}},Ma={__proto__:null,fade:dw,fadeVisible:fw,fadeVisibleOnce:mw,pop:hw,popVisible:_w,popVisibleOnce:gw,rollBottom:Sw,rollLeft:Bw,rollRight:Cw,rollTop:kw,rollVisibleBottom:Rw,rollVisibleLeft:Aw,rollVisibleOnceBottom:xw,rollVisibleOnceLeft:vw,rollVisibleOnceRight:bw,rollVisibleOnceTop:ww,rollVisibleRight:Ew,rollVisibleTop:Dw,slideBottom:qw,slideLeft:Fw,slideRight:Tw,slideTop:Ow,slideVisibleBottom:Uw,slideVisibleLeft:$w,slideVisibleOnceBottom:Hw,slideVisibleOnceLeft:Iw,slideVisibleOnceRight:Pw,slideVisibleOnceTop:Nw,slideVisibleRight:Mw,slideVisibleTop:Lw},Vw=Pe({props:{is:{type:[String,Object],required:!1},preset:{type:String,required:!1},instance:{type:Object,required:!1},variants:{type:Object,required:!1},initial:{type:Object,required:!1},enter:{type:Object,required:!1},leave:{type:Object,required:!1},visible:{type:Object,required:!1},visibleOnce:{type:Object,required:!1},hovered:{type:Object,required:!1},tapped:{type:Object,required:!1},focused:{type:Object,required:!1},delay:{type:[Number,String],required:!1}},setup(s){var i;const n=eh(),o=Ge({});if(!s.is&&!n.default)return()=>fs("div",{});const t=F(()=>{let p;return s.preset&&(p=Ma[s.preset]),p}),r=F(()=>({initial:s.initial,enter:s.enter,leave:s.leave,visible:s.visible,visibleOnce:s.visibleOnce,hovered:s.hovered,tapped:s.tapped,focused:s.focused})),l=F(()=>{const p={...r.value,...t.value||{},...s.variants||{}};return s.delay&&(p.enter.transition={...p.enter.transition},p.enter.transition.delay=parseInt(s.delay)),p}),c=F(()=>{if(!s.is)return;let p=s.is;return typeof c.value=="string"&&!nu(p)&&(p=Dr(p)),p});if(((i=process==null?void 0:process.env)==null?void 0:i.NODE_ENV)==="development"||process!=null&&process.dev){const p=u=>{var y;(y=u.variants)!=null&&y.initial&&u.set("initial"),setTimeout(()=>{var d,f,h;(d=u.variants)!=null&&d.enter&&u.apply("enter"),(f=u.variants)!=null&&f.visible&&u.apply("visible"),(h=u.variants)!=null&&h.visibleOnce&&u.apply("visibleOnce")},10)};Qr(()=>Object.entries(o).forEach(([u,y])=>p(y)))}return{slots:n,component:c,motionConfig:l,instances:o}},render({slots:s,motionConfig:n,instances:o,component:t}){var i;const r=_f(n.initial||{}),l=(p,u)=>(p.props||(p.props={}),p.props.style=r,p.props.onVnodeMounted=({el:y})=>{const d=gf(y,n);o[u]=d},p);if(t){const p=fs(t,void 0,s);return l(p,0),p}return(((i=s.default)==null?void 0:i.call(s))||[]).map((p,u)=>l(p,u))}});function jw(s){const n="àáâäæãåāăąçćčđďèéêëēėęěğǵḧîïíīįìłḿñńǹňôöòóœøōõőṕŕřßśšşșťțûüùúūǘůűųẃẍÿýžźż·/_,:;",o="aaaaaaaaaacccddeeeeeeeegghiiiiiilmnnnnoooooooooprrsssssttuuuuuuuuuwxyyzzz------",t=new RegExp(n.split("").join("|"),"g");return s.toString().replace(/[A-Z]/g,r=>`-${r}`).toLowerCase().replace(/\s+/g,"-").replace(t,r=>o.charAt(n.indexOf(r))).replace(/&/g,"-and-").replace(/[^\w\-]+/g,"").replace(/\-\-+/g,"-").replace(/^-+/,"").replace(/-+$/,"")}const Gw={install(s,n){if(s.directive("motion",Ll()),s.component("Motion",Vw),!n||n&&!n.excludePresets)for(const o in Ma){const t=Ma[o];s.directive(`motion-${jw(o)}`,Ll(t))}if(n&&n.directives)for(const o in n.directives){const t=n.directives[o];t.initial,s.directive(`motion-${o}`,Ll(t))}}};var jp;const _t=typeof window<"u",Ww=Object.prototype.toString,zw=s=>Ww.call(s)==="[object Object]";_t&&((jp=window==null?void 0:window.navigator)!=null&&jp.userAgent)&&/iP(ad|hone|od)/.test(window.navigator.userAgent);function Kw(s){return Va()?(uu(s),!0):!1}function Yw(s){var n;const o=D(s);return(n=o==null?void 0:o.$el)!=null?n:o}const Zw=_t?window:void 0,Pa=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},Oa="__vueuse_ssr_handlers__";Pa[Oa]=Pa[Oa]||{};Pa[Oa];function Qw(s,n={}){const{immediate:o=!0,window:t=Zw}=n,r=Z(!1);let l=null;function c(){!r.value||!t||(s(),l=t.requestAnimationFrame(c))}function i(){!r.value&&t&&(r.value=!0,c())}function p(){r.value=!1,l!=null&&t&&(t.cancelAnimationFrame(l),l=null)}return o&&i(),Kw(p),{isActive:r,pause:p,resume:i}}var Gp;(function(s){s.UP="UP",s.RIGHT="RIGHT",s.DOWN="DOWN",s.LEFT="LEFT",s.NONE="NONE"})(Gp||(Gp={}));const al="vue-starport-injection",Bf="vue-starport-options",Jw={duration:800,easing:"cubic-bezier(0.45, 0, 0.55, 1)",keepAlive:!1},Af={port:{type:String,required:!0},duration:{type:Number,required:!1},easing:{type:String,required:!1},keepAlive:{type:Boolean,required:!1,default:void 0},mountedProps:{type:Object,required:!1},initialProps:{type:Object,required:!1}};var Xw=Object.defineProperty,Nr=Object.getOwnPropertySymbols,vf=Object.prototype.hasOwnProperty,Cf=Object.prototype.propertyIsEnumerable,Wp=(s,n,o)=>n in s?Xw(s,n,{enumerable:!0,configurable:!0,writable:!0,value:o}):s[n]=o,eS=(s,n)=>{for(var o in n||(n={}))vf.call(n,o)&&Wp(s,o,n[o]);if(Nr)for(var o of Nr(n))Cf.call(n,o)&&Wp(s,o,n[o]);return s},zp=(s,n)=>{var o={};for(var t in s)vf.call(s,t)&&n.indexOf(t)<0&&(o[t]=s[t]);if(s!=null&&Nr)for(var t of Nr(s))n.indexOf(t)<0&&Cf.call(s,t)&&(o[t]=s[t]);return o};const sS=Pe({name:"StarportProxy",props:eS({props:{type:Object,default:()=>({})},component:{type:Object,required:!0}},Af),setup(s,n){const o=I(al),t=F(()=>o.getInstance(s.port,s.component)),r=Z(),l=t.value.generateId(),c=Z(!1);return t.value.isVisible||(t.value.land(),c.value=!0),fo(async()=>{if(t.value.el){console.error(`[Vue Starport] Multiple proxies of "${t.value.componentName}" with port "${s.port}" detected. The later one will be ignored.`);return}if(t.value.el=r.value,await os(),c.value=!0,t.value.rect.update(),t.value.rect.width===0||t.value.rect.height===0){const i=t.value.rect.width===0?"width":"height";console.warn(`[Vue Starport] The proxy of component "${t.value.componentName}" (port "${s.port}") has no ${i} on initial render, have you set the size for it?`),console.warn("element:",t.value.el),console.warn("rect:",t.value.rect)}}),Ut(async()=>{t.value.rect.update(),t.value.liftOff(),t.value.el=void 0,c.value=!1,!t.value.options.keepAlive&&(await os(),await os(),!t.value.el&&o.dispose(t.value.port))}),Be(()=>s,async()=>{t.value.props&&await os();const i=s,{props:p}=i,u=zp(i,["props"]);t.value.props=p||{},t.value.setLocalOptions(u)},{deep:!0,immediate:!0}),()=>{const i=s,{initialProps:p,mountedProps:u}=i,y=zp(i,["initialProps","mountedProps"]),d=_e(y,(c.value?u:p)||{});return fs("div",_e(d,{id:l,ref:r,"data-starport-proxy":t.value.componentId,"data-starport-landed":t.value.isLanded?"true":void 0,"data-starport-floating":t.value.isLanded?void 0:"true"}),n.slots.default?fs(n.slots.default):void 0)}}});var nS=Object.defineProperty,oS=Object.defineProperties,tS=Object.getOwnPropertyDescriptors,Kp=Object.getOwnPropertySymbols,rS=Object.prototype.hasOwnProperty,lS=Object.prototype.propertyIsEnumerable,Yp=(s,n,o)=>n in s?nS(s,n,{enumerable:!0,configurable:!0,writable:!0,value:o}):s[n]=o,aS=(s,n)=>{for(var o in n||(n={}))rS.call(n,o)&&Yp(s,o,n[o]);if(Kp)for(var o of Kp(n))lS.call(n,o)&&Yp(s,o,n[o]);return s},cS=(s,n)=>oS(s,tS(n));const iS=Pe({name:"Starport",inheritAttrs:!0,props:Af,setup(s,n){const o=Z(!1);return fo(()=>{if(o.value=!0,!I(al))throw new Error("[Vue Starport] Failed to find the carrier, all Starport components must be wrapped in a <StarportCarrier> component.")}),()=>{var c,i;const t=(i=(c=n.slots).default)==null?void 0:i.call(c);if(!t)throw new Error("[Vue Starport] Slot is required to use <Starport>");if(t.length!==1)throw new Error(`[Vue Starport] <Starport> requires exactly one slot, but got ${t.length}`);const r=t[0];let l=r.type;return(!zw(l)||mn(l))&&(l={render(){return t}}),fs(sS,cS(aS({},s),{key:s.port,component:Gr(l),props:r.props}))}}});function pS(s){const n=Ge({height:0,width:0,left:0,top:0,update:t,listen:l,pause:c,margin:"0px",padding:"0px"}),o=_t?document.documentElement||document.body:void 0;function t(){if(!_t)return;const i=Yw(s);if(!i)return;const{height:p,width:u,left:y,top:d}=i.getBoundingClientRect(),f=window.getComputedStyle(i),h=f.margin,m=f.padding;Object.assign(n,{height:p,width:u,left:y,top:o.scrollTop+d,margin:h,padding:m})}const r=Qw(t,{immediate:!1});function l(){_t&&(t(),r.resume())}function c(){r.pause()}return n}let uS=(s,n=21)=>(o=n)=>{let t="",r=o;for(;r--;)t+=s[Math.random()*s.length|0];return t};const Zp=uS("abcdefghijklmnopqrstuvwxyz",5);function Qp(s){return s.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase().replace(/[^\w\d_-]/g,"")}function yS(s){var n;return s.name||((n=s.__file)==null?void 0:n.split(/[\/\\.]/).slice(-2)[0])||""}var dS=Object.defineProperty,Jp=Object.getOwnPropertySymbols,fS=Object.prototype.hasOwnProperty,mS=Object.prototype.propertyIsEnumerable,Xp=(s,n,o)=>n in s?dS(s,n,{enumerable:!0,configurable:!0,writable:!0,value:o}):s[n]=o,Nl=(s,n)=>{for(var o in n||(n={}))fS.call(n,o)&&Xp(s,o,n[o]);if(Jp)for(var o of Jp(n))mS.call(n,o)&&Xp(s,o,n[o]);return s};function hS(s,n,o={}){const t=yS(n),r=Qp(t)||Zp(),l=Z(),c=Z(null),i=Z(!1),p=Z(!1),u=Nf(!0),y=Z({}),d=F(()=>Nl(Nl(Nl({},Jw),o),y.value)),f=Z(0);let h;u.run(()=>{h=pS(l),Be(l,async k=>{k&&(p.value=!0),await os(),l.value||(p.value=!1)})});const m=Qp(s);function g(){return`starport-${r}-${m}-${Zp()}`}const B=g();return Ge({el:l,id:B,port:s,props:c,rect:h,scope:u,isLanded:i,isVisible:p,options:d,liftOffTime:f,component:n,componentName:t,componentId:r,generateId:g,setLocalOptions(k={}){y.value=JSON.parse(JSON.stringify(k))},elRef(){return l},liftOff(){i.value&&(i.value=!1,f.value=Date.now(),h.listen())},land(){i.value||(i.value=!0,h.pause())}})}function _S(s){const n=Ge(new Map);function o(r,l){let c=n.get(r);return c||(c=hS(r,l,s),n.set(r,c)),c.component=l,c}function t(r){var l;(l=n.get(r))==null||l.scope.stop(),n.delete(r)}return{portMap:n,dispose:t,getInstance:o}}var gS=Object.defineProperty,BS=Object.defineProperties,AS=Object.getOwnPropertyDescriptors,eu=Object.getOwnPropertySymbols,vS=Object.prototype.hasOwnProperty,CS=Object.prototype.propertyIsEnumerable,su=(s,n,o)=>n in s?gS(s,n,{enumerable:!0,configurable:!0,writable:!0,value:o}):s[n]=o,ES=(s,n)=>{for(var o in n||(n={}))vS.call(n,o)&&su(s,o,n[o]);if(eu)for(var o of eu(n))CS.call(n,o)&&su(s,o,n[o]);return s},bS=(s,n)=>BS(s,AS(n));const kS=Pe({name:"StarportCraft",props:{port:{type:String,required:!0},component:{type:Object,required:!0}},setup(s){const n=I(al);if(!n)throw new Error("[Vue Starport] Failed to find the carrier, all Starport components must be wrapped in a <StarportCarrier> component.");const o=F(()=>n.getInstance(s.port,s.component)),t=F(()=>{var c;return((c=o.value.el)==null?void 0:c.id)||o.value.id}),r=F(()=>{const c=Date.now()-o.value.liftOffTime,i=Math.max(0,o.value.options.duration-c),p=o.value.rect,u={position:"absolute",left:0,top:0,width:`${p.width}px`,height:`${p.height}px`,margin:p.margin,padding:p.padding,transform:`translate3d(${p.left}px,${p.top}px,0px)`};return!o.value.isVisible||!o.value.el?bS(ES({},u),{zIndex:-1,display:"none"}):(o.value.isLanded?u.display="none":Object.assign(u,{transitionProperty:"all",transitionDuration:`${i}ms`,transitionTimingFunction:o.value.options.easing}),u)}),l={onTransitionend(c){o.value.isLanded||console.warn(`[Vue Starport] Transition duration of component "${o.value.componentName}" is too short (${c.elapsedTime}s) that may cause animation glitches. Try to increase the duration of that component, or decrease the duration the Starport (current: ${o.value.options.duration/1e3}s).`)}};return()=>{const c=!!(o.value.isLanded&&o.value.el);return fs("div",{style:r.value,"data-starport-craft":o.value.componentId,"data-starport-landed":o.value.isLanded?"true":void 0,"data-starport-floating":o.value.isLanded?void 0:"true",onTransitionend:o.value.land},fs(q8,{to:c?`#${t.value}`:"body",disabled:!c},fs(o.value.component,_e(l,o.value.props))))}}}),DS=Pe({name:"StarportCarrier",setup(s,{slots:n}){const o=_S(I(Bf,{}));return xs().appContext.app.provide(al,o),()=>{var r;return[(r=n.default)==null?void 0:r.call(n),Array.from(o.portMap.entries()).map(([l,{component:c}])=>fs(kS,{key:l,port:l,component:c}))]}}});function wS(s={}){return{install(n){n.provide(Bf,s),n.component("Starport",iS),n.component("StarportCarrier",DS)}}}function SS(s){function n(){document.documentElement.style.setProperty("--vh",`${window.innerHeight*.01}px`)}n(),window.addEventListener("resize",n),s.app.use(Gw),s.app.use(wS({keepAlive:!0}))}function Es(s,n,o){var t;return((t=s.instance)==null?void 0:t.$).provides[n]??o}function RS(){return{install(s){s.directive("click",{name:"v-click",mounted(n,o){var y,d,f,h;if(dt.value||(y=Es(o,it))!=null&&y.value)return;const t=Es(o,Yn),r=Es(o,ct),l=Es(o,la),c=o.modifiers.hide!==!1&&o.modifiers.hide!=null,i=o.modifiers.fade!==!1&&o.modifiers.fade!=null,p=((d=t==null?void 0:t.value)==null?void 0:d.length)||0,u=i?x5:vl;if(t&&!((f=t==null?void 0:t.value)!=null&&f.includes(n))&&t.value.push(n),o.value==null&&(o.value=t==null?void 0:t.value.length),!(l!=null&&l.value.has(o.value)))l==null||l.value.set(o.value,[n]);else if(!((h=l==null?void 0:l.value.get(o.value))!=null&&h.includes(n))){const m=(l==null?void 0:l.value.get(o.value))||[];l==null||l.value.set(o.value,[n].concat(m))}n==null||n.classList.toggle(zn,!0),r&&Be(r,()=>{const m=(r==null?void 0:r.value)??0,g=o.value!=null?m>=o.value:m>p;n.classList.contains(Cl)||n.classList.toggle(u,!g),c!==!1&&c!==void 0&&n.classList.toggle(u,g),n.classList.toggle(Wo,!1);const B=l==null?void 0:l.value.get(m);B==null||B.forEach((k,v)=>{k.classList.toggle(or,!1),v===B.length-1?k.classList.toggle(Wo,!0):k.classList.toggle(or,!0)}),n.classList.contains(Wo)||n.classList.toggle(or,g)},{immediate:!0})},unmounted(n,o){n==null||n.classList.toggle(zn,!1);const t=Es(o,Yn);t!=null&&t.value&&aa(t.value,n)}}),s.directive("after",{name:"v-after",mounted(n,o){var i,p;if(dt.value||(i=Es(o,it))!=null&&i.value)return;const t=Es(o,Yn),r=Es(o,ct),l=Es(o,la),c=t==null?void 0:t.value.length;o.value==null&&(o.value=t==null?void 0:t.value.length),l!=null&&l.value.has(o.value)?(p=l==null?void 0:l.value.get(o.value))==null||p.push(n):l==null||l.value.set(o.value,[n]),n==null||n.classList.toggle(zn,!0),r&&Be(r,()=>{const u=(r.value??0)>=(o.value??c??0);n.classList.contains(Cl)||n.classList.toggle(vl,!u),n.classList.toggle(Wo,!1),n.classList.contains(Wo)||n.classList.toggle(or,u)},{immediate:!0})},unmounted(n){n==null||n.classList.toggle(zn,!0)}}),s.directive("click-hide",{name:"v-click-hide",mounted(n,o){var c,i,p;if(dt.value||(c=Es(o,it))!=null&&c.value)return;const t=Es(o,Yn),r=Es(o,ct),l=((i=t==null?void 0:t.value)==null?void 0:i.length)||0;t&&!((p=t==null?void 0:t.value)!=null&&p.includes(n))&&t.value.push(n),n==null||n.classList.toggle(zn,!0),r&&Be(r,()=>{const u=(r==null?void 0:r.value)??0,y=o.value!=null?u>=o.value:u>l;n.classList.toggle(vl,y),n.classList.toggle(Cl,y)},{immediate:!0})},unmounted(n,o){n==null||n.classList.toggle(zn,!1);const t=Es(o,Yn);t!=null&&t.value&&aa(t.value,n)}})}}}function xS(s,n){const o=Dd(s),t=wd(n,o.currentRoute,o.currentPage);return{nav:{...o,...t,downloadPDF:ka,next:Tn,nextSlide:$t,openInEditor:lD,prev:Mn,prevSlide:It},configs:$e,themeConfigs:F(()=>$e.themeConfig)}}function FS(){return{install(s){const n=xS(Ps,Ts);s.provide(N,Ge(n))}}}const qo=Oh(yD);qo.use(As);qo.use(w5());qo.use(RS());qo.use(FS());SS({app:qo,router:As});qo.mount("#app");export{gc as $,$v as A,Z as B,OS as C,ys as D,Ye as E,Me as F,q1 as G,rD as H,Ts as I,Pr as J,eD as K,xl as L,fo as M,Ge as N,MS as O,LS as P,Be as Q,b as R,md as S,Ie as T,us as U,X1 as V,Rt as W,Sl as X,f3 as Y,_c as Z,q as _,N as a,Ke as a0,$S as a1,IS as a2,i3 as a3,uA as a4,TS as a5,fn as a6,Xo as a7,Jn as a8,Js as a9,va as aa,w1 as ab,S1 as ac,R1 as ad,F1 as ae,Xr as af,vy as ag,NS as ah,ms as ai,rr as aj,WA as ak,Fy as al,$1 as am,Ut as an,cc as b,$e as c,Pe as d,Em as e,te as f,e as g,D as h,I as i,Qe as j,xd as k,a as l,R as m,ts as n,C as o,ke as p,pc as q,Ht as r,Gs as s,ao as t,PS as u,F as v,El as w,P as x,ad as y,Ov as z};
