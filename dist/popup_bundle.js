(()=>{var Yc=()=>{};var eu=function(r){let e=[],n=0;for(let i=0;i<r.length;i++){let s=r.charCodeAt(i);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&i+1<r.length&&(r.charCodeAt(i+1)&64512)===56320?(s=65536+((s&1023)<<10)+(r.charCodeAt(++i)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},Kd=function(r){let e=[],n=0,i=0;for(;n<r.length;){let s=r[n++];if(s<128)e[i++]=String.fromCharCode(s);else if(s>191&&s<224){let a=r[n++];e[i++]=String.fromCharCode((s&31)<<6|a&63)}else if(s>239&&s<365){let a=r[n++],c=r[n++],l=r[n++],d=((s&7)<<18|(a&63)<<12|(c&63)<<6|l&63)-65536;e[i++]=String.fromCharCode(55296+(d>>10)),e[i++]=String.fromCharCode(56320+(d&1023))}else{let a=r[n++],c=r[n++];e[i++]=String.fromCharCode((s&15)<<12|(a&63)<<6|c&63)}}return e.join("")},nu={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(r,e){if(!Array.isArray(r))throw Error("encodeByteArray takes an array as a parameter");this.init_();let n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,i=[];for(let s=0;s<r.length;s+=3){let a=r[s],c=s+1<r.length,l=c?r[s+1]:0,d=s+2<r.length,f=d?r[s+2]:0,p=a>>2,w=(a&3)<<4|l>>4,v=(l&15)<<2|f>>6,C=f&63;d||(C=64,c||(v=64)),i.push(n[p],n[w],n[v],n[C])}return i.join("")},encodeString(r,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(r):this.encodeByteArray(eu(r),e)},decodeString(r,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(r):Kd(this.decodeStringToByteArray(r,e))},decodeStringToByteArray(r,e){this.init_();let n=e?this.charToByteMapWebSafe_:this.charToByteMap_,i=[];for(let s=0;s<r.length;){let a=n[r.charAt(s++)],l=s<r.length?n[r.charAt(s)]:0;++s;let f=s<r.length?n[r.charAt(s)]:64;++s;let w=s<r.length?n[r.charAt(s)]:64;if(++s,a==null||l==null||f==null||w==null)throw new hs;let v=a<<2|l>>4;if(i.push(v),f!==64){let C=l<<4&240|f>>2;if(i.push(C),w!==64){let P=f<<6&192|w;i.push(P)}}}return i},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let r=0;r<this.ENCODED_VALS.length;r++)this.byteToCharMap_[r]=this.ENCODED_VALS.charAt(r),this.charToByteMap_[this.byteToCharMap_[r]]=r,this.byteToCharMapWebSafe_[r]=this.ENCODED_VALS_WEBSAFE.charAt(r),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[r]]=r,r>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(r)]=r,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(r)]=r)}}},hs=class extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}},Wd=function(r){let e=eu(r);return nu.encodeByteArray(e,!0)},zn=function(r){return Wd(r).replace(/\./g,"")},ru=function(r){try{return nu.decodeString(r,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};function iu(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}var Hd=()=>iu().__FIREBASE_DEFAULTS__,Qd=()=>{if(typeof process>"u"||typeof process.env>"u")return;let r=process.env.__FIREBASE_DEFAULTS__;if(r)return JSON.parse(r)},Xd=()=>{if(typeof document>"u")return;let r;try{r=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}let e=r&&ru(r[1]);return e&&JSON.parse(e)},ds=()=>{try{return Yc()||Hd()||Qd()||Xd()}catch(r){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${r}`);return}},Jd=r=>{var e,n;return(n=(e=ds())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[r]},su=r=>{let e=Jd(r);if(!e)return;let n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);let i=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),i]:[e.substring(0,n),i]},fs=()=>{var r;return(r=ds())===null||r===void 0?void 0:r.config};var Or=class{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,i)=>{n?this.reject(n):this.resolve(i),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,i))}}};function Lr(r){try{return(r.startsWith("http://")||r.startsWith("https://")?new URL(r).hostname:r).endsWith(".cloudworkstations.dev")}catch{return!1}}async function ou(r){return(await fetch(r,{credentials:"include"})).ok}function au(r,e){if(r.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');let n={alg:"none",type:"JWT"},i=e||"demo-project",s=r.iat||0,a=r.sub||r.user_id;if(!a)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");let c=Object.assign({iss:`https://securetoken.google.com/${i}`,aud:i,iat:s,exp:s+3600,auth_time:s,sub:a,user_id:a,firebase:{sign_in_provider:"custom",identities:{}}},r);return[zn(JSON.stringify(n)),zn(JSON.stringify(c)),""].join(".")}var Un={};function Yd(){let r={prod:[],emulator:[]};for(let e of Object.keys(Un))Un[e]?r.emulator.push(e):r.prod.push(e);return r}function Zd(r){let e=document.getElementById(r),n=!1;return e||(e=document.createElement("div"),e.setAttribute("id",r),n=!0),{created:n,element:e}}var Zc=!1;function cu(r,e){if(typeof window>"u"||typeof document>"u"||!Lr(window.location.host)||Un[r]===e||Un[r]||Zc)return;Un[r]=e;function n(v){return`__firebase__banner__${v}`}let i="__firebase__banner",a=Yd().prod.length>0;function c(){let v=document.getElementById(i);v&&v.remove()}function l(v){v.style.display="flex",v.style.background="#7faaf0",v.style.position="fixed",v.style.bottom="5px",v.style.left="5px",v.style.padding=".5em",v.style.borderRadius="5px",v.style.alignItems="center"}function d(v,C){v.setAttribute("width","24"),v.setAttribute("id",C),v.setAttribute("height","24"),v.setAttribute("viewBox","0 0 24 24"),v.setAttribute("fill","none"),v.style.marginLeft="-6px"}function f(){let v=document.createElement("span");return v.style.cursor="pointer",v.style.marginLeft="16px",v.style.fontSize="24px",v.innerHTML=" &times;",v.onclick=()=>{Zc=!0,c()},v}function p(v,C){v.setAttribute("id",C),v.innerText="Learn more",v.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",v.setAttribute("target","__blank"),v.style.paddingLeft="5px",v.style.textDecoration="underline"}function w(){let v=Zd(i),C=n("text"),P=document.getElementById(C)||document.createElement("span"),O=n("learnmore"),V=document.getElementById(O)||document.createElement("a"),j=n("preprendIcon"),q=document.getElementById(j)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(v.created){let G=v.element;l(G),p(V,O);let et=f();d(q,j),G.append(q,P,V,et),document.body.appendChild(G)}a?(P.innerText="Preview backend disconnected.",q.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(q.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,P.innerText="Preview backend running in this workspace."),P.setAttribute("id",C)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",w):w()}function uu(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function tf(){var r;let e=(r=ds())===null||r===void 0?void 0:r.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function lu(){return!tf()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function ms(){try{return typeof indexedDB=="object"}catch{return!1}}function hu(){return new Promise((r,e)=>{try{let n=!0,i="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(i);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(i),r(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var a;e(((a=s.error)===null||a===void 0?void 0:a.message)||"")}}catch(n){e(n)}})}var ef="FirebaseError",Wt=class r extends Error{constructor(e,n,i){super(n),this.code=e,this.customData=i,this.name=ef,Object.setPrototypeOf(this,r.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,qn.prototype.create)}},qn=class{constructor(e,n,i){this.service=e,this.serviceName=n,this.errors=i}create(e,...n){let i=n[0]||{},s=`${this.service}/${e}`,a=this.errors[e],c=a?nf(a,i):"Error",l=`${this.serviceName}: ${c} (${s}).`;return new Wt(s,l,i)}};function nf(r,e){return r.replace(rf,(n,i)=>{let s=e[i];return s!=null?String(s):`<${i}?>`})}var rf=/\{\$([^}]+)}/g;function $e(r,e){if(r===e)return!0;let n=Object.keys(r),i=Object.keys(e);for(let s of n){if(!i.includes(s))return!1;let a=r[s],c=e[s];if(tu(a)&&tu(c)){if(!$e(a,c))return!1}else if(a!==c)return!1}for(let s of i)if(!n.includes(s))return!1;return!0}function tu(r){return r!==null&&typeof r=="object"}var Mg=4*60*60*1e3;function Ht(r){return r&&r._delegate?r._delegate:r}var Qt=class{constructor(e,n,i){this.name=e,this.instanceFactory=n,this.type=i,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}};var Re="[DEFAULT]";var ps=class{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){let n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){let i=new Or;if(this.instancesDeferred.set(n,i),this.isInitialized(n)||this.shouldAutoInitialize())try{let s=this.getOrInitializeService({instanceIdentifier:n});s&&i.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;let i=this.normalizeInstanceIdentifier(e?.identifier),s=(n=e?.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(i)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:i})}catch(a){if(s)return null;throw a}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(of(e))try{this.getOrInitializeService({instanceIdentifier:Re})}catch{}for(let[n,i]of this.instancesDeferred.entries()){let s=this.normalizeInstanceIdentifier(n);try{let a=this.getOrInitializeService({instanceIdentifier:s});i.resolve(a)}catch{}}}}clearInstance(e=Re){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){let e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Re){return this.instances.has(e)}getOptions(e=Re){return this.instancesOptions.get(e)||{}}initialize(e={}){let{options:n={}}=e,i=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(i))throw Error(`${this.name}(${i}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);let s=this.getOrInitializeService({instanceIdentifier:i,options:n});for(let[a,c]of this.instancesDeferred.entries()){let l=this.normalizeInstanceIdentifier(a);i===l&&c.resolve(s)}return s}onInit(e,n){var i;let s=this.normalizeInstanceIdentifier(n),a=(i=this.onInitCallbacks.get(s))!==null&&i!==void 0?i:new Set;a.add(e),this.onInitCallbacks.set(s,a);let c=this.instances.get(s);return c&&e(c,s),()=>{a.delete(e)}}invokeOnInitCallbacks(e,n){let i=this.onInitCallbacks.get(n);if(i)for(let s of i)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let i=this.instances.get(e);if(!i&&this.component&&(i=this.component.instanceFactory(this.container,{instanceIdentifier:sf(e),options:n}),this.instances.set(e,i),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(i,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,i)}catch{}return i||null}normalizeInstanceIdentifier(e=Re){return this.component?this.component.multipleInstances?e:Re:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}};function sf(r){return r===Re?void 0:r}function of(r){return r.instantiationMode==="EAGER"}var Mr=class{constructor(e){this.name=e,this.providers=new Map}addComponent(e){let n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);let n=new ps(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}};var af=[],W;(function(r){r[r.DEBUG=0]="DEBUG",r[r.VERBOSE=1]="VERBOSE",r[r.INFO=2]="INFO",r[r.WARN=3]="WARN",r[r.ERROR=4]="ERROR",r[r.SILENT=5]="SILENT"})(W||(W={}));var cf={debug:W.DEBUG,verbose:W.VERBOSE,info:W.INFO,warn:W.WARN,error:W.ERROR,silent:W.SILENT},uf=W.INFO,lf={[W.DEBUG]:"log",[W.VERBOSE]:"log",[W.INFO]:"info",[W.WARN]:"warn",[W.ERROR]:"error"},hf=(r,e,...n)=>{if(e<r.logLevel)return;let i=new Date().toISOString(),s=lf[e];if(s)console[s](`[${i}]  ${r.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)},Ge=class{constructor(e){this.name=e,this._logLevel=uf,this._logHandler=hf,this._userLogHandler=null,af.push(this)}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in W))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?cf[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,W.DEBUG,...e),this._logHandler(this,W.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,W.VERBOSE,...e),this._logHandler(this,W.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,W.INFO,...e),this._logHandler(this,W.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,W.WARN,...e),this._logHandler(this,W.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,W.ERROR,...e),this._logHandler(this,W.ERROR,...e)}};var df=(r,e)=>e.some(n=>r instanceof n),du,fu;function ff(){return du||(du=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function mf(){return fu||(fu=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}var mu=new WeakMap,ys=new WeakMap,pu=new WeakMap,gs=new WeakMap,ws=new WeakMap;function pf(r){let e=new Promise((n,i)=>{let s=()=>{r.removeEventListener("success",a),r.removeEventListener("error",c)},a=()=>{n(kt(r.result)),s()},c=()=>{i(r.error),s()};r.addEventListener("success",a),r.addEventListener("error",c)});return e.then(n=>{n instanceof IDBCursor&&mu.set(n,r)}).catch(()=>{}),ws.set(e,r),e}function gf(r){if(ys.has(r))return;let e=new Promise((n,i)=>{let s=()=>{r.removeEventListener("complete",a),r.removeEventListener("error",c),r.removeEventListener("abort",c)},a=()=>{n(),s()},c=()=>{i(r.error||new DOMException("AbortError","AbortError")),s()};r.addEventListener("complete",a),r.addEventListener("error",c),r.addEventListener("abort",c)});ys.set(r,e)}var _s={get(r,e,n){if(r instanceof IDBTransaction){if(e==="done")return ys.get(r);if(e==="objectStoreNames")return r.objectStoreNames||pu.get(r);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return kt(r[e])},set(r,e,n){return r[e]=n,!0},has(r,e){return r instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in r}};function gu(r){_s=r(_s)}function yf(r){return r===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){let i=r.call(Fr(this),e,...n);return pu.set(i,e.sort?e.sort():[e]),kt(i)}:mf().includes(r)?function(...e){return r.apply(Fr(this),e),kt(mu.get(this))}:function(...e){return kt(r.apply(Fr(this),e))}}function _f(r){return typeof r=="function"?yf(r):(r instanceof IDBTransaction&&gf(r),df(r,ff())?new Proxy(r,_s):r)}function kt(r){if(r instanceof IDBRequest)return pf(r);if(gs.has(r))return gs.get(r);let e=_f(r);return e!==r&&(gs.set(r,e),ws.set(e,r)),e}var Fr=r=>ws.get(r);function _u(r,e,{blocked:n,upgrade:i,blocking:s,terminated:a}={}){let c=indexedDB.open(r,e),l=kt(c);return i&&c.addEventListener("upgradeneeded",d=>{i(kt(c.result),d.oldVersion,d.newVersion,kt(c.transaction),d)}),n&&c.addEventListener("blocked",d=>n(d.oldVersion,d.newVersion,d)),l.then(d=>{a&&d.addEventListener("close",()=>a()),s&&d.addEventListener("versionchange",f=>s(f.oldVersion,f.newVersion,f))}).catch(()=>{}),l}var wf=["get","getKey","getAll","getAllKeys","count"],vf=["put","add","delete","clear"],vs=new Map;function yu(r,e){if(!(r instanceof IDBDatabase&&!(e in r)&&typeof e=="string"))return;if(vs.get(e))return vs.get(e);let n=e.replace(/FromIndex$/,""),i=e!==n,s=vf.includes(n);if(!(n in(i?IDBIndex:IDBObjectStore).prototype)||!(s||wf.includes(n)))return;let a=async function(c,...l){let d=this.transaction(c,s?"readwrite":"readonly"),f=d.store;return i&&(f=f.index(l.shift())),(await Promise.all([f[n](...l),s&&d.done]))[0]};return vs.set(e,a),a}gu(r=>({...r,get:(e,n,i)=>yu(e,n)||r.get(e,n,i),has:(e,n)=>!!yu(e,n)||r.has(e,n)}));var Is=class{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(Ef(n)){let i=n.getImmediate();return`${i.library}/${i.version}`}else return null}).filter(n=>n).join(" ")}};function Ef(r){let e=r.getComponent();return e?.type==="VERSION"}var Ts="@firebase/app",wu="0.13.2";var Xt=new Ge("@firebase/app"),If="@firebase/app-compat",Tf="@firebase/analytics-compat",bf="@firebase/analytics",Af="@firebase/app-check-compat",Sf="@firebase/app-check",Rf="@firebase/auth",Cf="@firebase/auth-compat",Pf="@firebase/database",Df="@firebase/data-connect",xf="@firebase/database-compat",Vf="@firebase/functions",kf="@firebase/functions-compat",Nf="@firebase/installations",Of="@firebase/installations-compat",Lf="@firebase/messaging",Mf="@firebase/messaging-compat",Ff="@firebase/performance",Bf="@firebase/performance-compat",Uf="@firebase/remote-config",zf="@firebase/remote-config-compat",qf="@firebase/storage",jf="@firebase/storage-compat",$f="@firebase/firestore",Gf="@firebase/ai",Kf="@firebase/firestore-compat",Wf="firebase",Hf="11.10.0";var bs="[DEFAULT]",Qf={[Ts]:"fire-core",[If]:"fire-core-compat",[bf]:"fire-analytics",[Tf]:"fire-analytics-compat",[Sf]:"fire-app-check",[Af]:"fire-app-check-compat",[Rf]:"fire-auth",[Cf]:"fire-auth-compat",[Pf]:"fire-rtdb",[Df]:"fire-data-connect",[xf]:"fire-rtdb-compat",[Vf]:"fire-fn",[kf]:"fire-fn-compat",[Nf]:"fire-iid",[Of]:"fire-iid-compat",[Lf]:"fire-fcm",[Mf]:"fire-fcm-compat",[Ff]:"fire-perf",[Bf]:"fire-perf-compat",[Uf]:"fire-rc",[zf]:"fire-rc-compat",[qf]:"fire-gcs",[jf]:"fire-gcs-compat",[$f]:"fire-fst",[Kf]:"fire-fst-compat",[Gf]:"fire-vertex","fire-js":"fire-js",[Wf]:"fire-js-all"};var Br=new Map,Xf=new Map,As=new Map;function vu(r,e){try{r.container.addComponent(e)}catch(n){Xt.debug(`Component ${e.name} failed to register with FirebaseApp ${r.name}`,n)}}function jn(r){let e=r.name;if(As.has(e))return Xt.debug(`There were multiple attempts to register component ${e}.`),!1;As.set(e,r);for(let n of Br.values())vu(n,r);for(let n of Xf.values())vu(n,r);return!0}function bu(r,e){let n=r.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),r.container.getProvider(e)}function Au(r){return r==null?!1:r.settings!==void 0}var Jf={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},ue=new qn("app","Firebase",Jf);var Ss=class{constructor(e,n,i){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=i,this.container.addComponent(new Qt("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw ue.create("app-deleted",{appName:this._name})}};var Su=Hf;function Ps(r,e={}){let n=r;typeof e!="object"&&(e={name:e});let i=Object.assign({name:bs,automaticDataCollectionEnabled:!0},e),s=i.name;if(typeof s!="string"||!s)throw ue.create("bad-app-name",{appName:String(s)});if(n||(n=fs()),!n)throw ue.create("no-options");let a=Br.get(s);if(a){if($e(n,a.options)&&$e(i,a.config))return a;throw ue.create("duplicate-app",{appName:s})}let c=new Mr(s);for(let d of As.values())c.addComponent(d);let l=new Ss(n,i,c);return Br.set(s,l),l}function Ru(r=bs){let e=Br.get(r);if(!e&&r===bs&&fs())return Ps();if(!e)throw ue.create("no-app",{appName:r});return e}function le(r,e,n){var i;let s=(i=Qf[r])!==null&&i!==void 0?i:r;n&&(s+=`-${n}`);let a=s.match(/\s|\//),c=e.match(/\s|\//);if(a||c){let l=[`Unable to register library "${s}" with version "${e}":`];a&&l.push(`library name "${s}" contains illegal characters (whitespace or "/")`),a&&c&&l.push("and"),c&&l.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Xt.warn(l.join(" "));return}jn(new Qt(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}var Yf="firebase-heartbeat-database",Zf=1,$n="firebase-heartbeat-store",Es=null;function Cu(){return Es||(Es=_u(Yf,Zf,{upgrade:(r,e)=>{switch(e){case 0:try{r.createObjectStore($n)}catch(n){console.warn(n)}}}}).catch(r=>{throw ue.create("idb-open",{originalErrorMessage:r.message})})),Es}async function tm(r){try{let n=(await Cu()).transaction($n),i=await n.objectStore($n).get(Pu(r));return await n.done,i}catch(e){if(e instanceof Wt)Xt.warn(e.message);else{let n=ue.create("idb-get",{originalErrorMessage:e?.message});Xt.warn(n.message)}}}async function Eu(r,e){try{let i=(await Cu()).transaction($n,"readwrite");await i.objectStore($n).put(e,Pu(r)),await i.done}catch(n){if(n instanceof Wt)Xt.warn(n.message);else{let i=ue.create("idb-set",{originalErrorMessage:n?.message});Xt.warn(i.message)}}}function Pu(r){return`${r.name}!${r.options.appId}`}var em=1024,nm=30,Rs=class{constructor(e){this.container=e,this._heartbeatsCache=null;let n=this.container.getProvider("app").getImmediate();this._storage=new Cs(n),this._heartbeatsCachePromise=this._storage.read().then(i=>(this._heartbeatsCache=i,i))}async triggerHeartbeat(){var e,n;try{let s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),a=Iu();if(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===a||this._heartbeatsCache.heartbeats.some(c=>c.date===a))return;if(this._heartbeatsCache.heartbeats.push({date:a,agent:s}),this._heartbeatsCache.heartbeats.length>nm){let c=im(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(c,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(i){Xt.warn(i)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";let n=Iu(),{heartbeatsToSend:i,unsentEntries:s}=rm(this._heartbeatsCache.heartbeats),a=zn(JSON.stringify({version:2,heartbeats:i}));return this._heartbeatsCache.lastSentHeartbeatDate=n,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),a}catch(n){return Xt.warn(n),""}}};function Iu(){return new Date().toISOString().substring(0,10)}function rm(r,e=em){let n=[],i=r.slice();for(let s of r){let a=n.find(c=>c.agent===s.agent);if(a){if(a.dates.push(s.date),Tu(n)>e){a.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),Tu(n)>e){n.pop();break}i=i.slice(1)}return{heartbeatsToSend:n,unsentEntries:i}}var Cs=class{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return ms()?hu().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){let n=await tm(this.app);return n?.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){let s=await this.read();return Eu(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){let s=await this.read();return Eu(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}};function Tu(r){return zn(JSON.stringify({version:2,heartbeats:r})).length}function im(r){if(r.length===0)return-1;let e=0,n=r[0].date;for(let i=1;i<r.length;i++)r[i].date<n&&(n=r[i].date,e=i);return e}function sm(r){jn(new Qt("platform-logger",e=>new Is(e),"PRIVATE")),jn(new Qt("heartbeat",e=>new Rs(e),"PRIVATE")),le(Ts,wu,r),le(Ts,wu,"esm2017"),le("fire-js","")}sm("");var om="firebase",am="11.10.0";le(om,am,"app");var Du=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},xu={};var Jt,Ds;(function(){var r;function e(T,g){function _(){}_.prototype=g.prototype,T.D=g.prototype,T.prototype=new _,T.prototype.constructor=T,T.C=function(E,I,A){for(var y=Array(arguments.length-2),$t=2;$t<arguments.length;$t++)y[$t-2]=arguments[$t];return g.prototype[I].apply(E,y)}}function n(){this.blockSize=-1}function i(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(i,n),i.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(T,g,_){_||(_=0);var E=Array(16);if(typeof g=="string")for(var I=0;16>I;++I)E[I]=g.charCodeAt(_++)|g.charCodeAt(_++)<<8|g.charCodeAt(_++)<<16|g.charCodeAt(_++)<<24;else for(I=0;16>I;++I)E[I]=g[_++]|g[_++]<<8|g[_++]<<16|g[_++]<<24;g=T.g[0],_=T.g[1],I=T.g[2];var A=T.g[3],y=g+(A^_&(I^A))+E[0]+3614090360&4294967295;g=_+(y<<7&4294967295|y>>>25),y=A+(I^g&(_^I))+E[1]+3905402710&4294967295,A=g+(y<<12&4294967295|y>>>20),y=I+(_^A&(g^_))+E[2]+606105819&4294967295,I=A+(y<<17&4294967295|y>>>15),y=_+(g^I&(A^g))+E[3]+3250441966&4294967295,_=I+(y<<22&4294967295|y>>>10),y=g+(A^_&(I^A))+E[4]+4118548399&4294967295,g=_+(y<<7&4294967295|y>>>25),y=A+(I^g&(_^I))+E[5]+1200080426&4294967295,A=g+(y<<12&4294967295|y>>>20),y=I+(_^A&(g^_))+E[6]+2821735955&4294967295,I=A+(y<<17&4294967295|y>>>15),y=_+(g^I&(A^g))+E[7]+4249261313&4294967295,_=I+(y<<22&4294967295|y>>>10),y=g+(A^_&(I^A))+E[8]+1770035416&4294967295,g=_+(y<<7&4294967295|y>>>25),y=A+(I^g&(_^I))+E[9]+2336552879&4294967295,A=g+(y<<12&4294967295|y>>>20),y=I+(_^A&(g^_))+E[10]+4294925233&4294967295,I=A+(y<<17&4294967295|y>>>15),y=_+(g^I&(A^g))+E[11]+2304563134&4294967295,_=I+(y<<22&4294967295|y>>>10),y=g+(A^_&(I^A))+E[12]+1804603682&4294967295,g=_+(y<<7&4294967295|y>>>25),y=A+(I^g&(_^I))+E[13]+4254626195&4294967295,A=g+(y<<12&4294967295|y>>>20),y=I+(_^A&(g^_))+E[14]+2792965006&4294967295,I=A+(y<<17&4294967295|y>>>15),y=_+(g^I&(A^g))+E[15]+1236535329&4294967295,_=I+(y<<22&4294967295|y>>>10),y=g+(I^A&(_^I))+E[1]+4129170786&4294967295,g=_+(y<<5&4294967295|y>>>27),y=A+(_^I&(g^_))+E[6]+3225465664&4294967295,A=g+(y<<9&4294967295|y>>>23),y=I+(g^_&(A^g))+E[11]+643717713&4294967295,I=A+(y<<14&4294967295|y>>>18),y=_+(A^g&(I^A))+E[0]+3921069994&4294967295,_=I+(y<<20&4294967295|y>>>12),y=g+(I^A&(_^I))+E[5]+3593408605&4294967295,g=_+(y<<5&4294967295|y>>>27),y=A+(_^I&(g^_))+E[10]+38016083&4294967295,A=g+(y<<9&4294967295|y>>>23),y=I+(g^_&(A^g))+E[15]+3634488961&4294967295,I=A+(y<<14&4294967295|y>>>18),y=_+(A^g&(I^A))+E[4]+3889429448&4294967295,_=I+(y<<20&4294967295|y>>>12),y=g+(I^A&(_^I))+E[9]+568446438&4294967295,g=_+(y<<5&4294967295|y>>>27),y=A+(_^I&(g^_))+E[14]+3275163606&4294967295,A=g+(y<<9&4294967295|y>>>23),y=I+(g^_&(A^g))+E[3]+4107603335&4294967295,I=A+(y<<14&4294967295|y>>>18),y=_+(A^g&(I^A))+E[8]+1163531501&4294967295,_=I+(y<<20&4294967295|y>>>12),y=g+(I^A&(_^I))+E[13]+2850285829&4294967295,g=_+(y<<5&4294967295|y>>>27),y=A+(_^I&(g^_))+E[2]+4243563512&4294967295,A=g+(y<<9&4294967295|y>>>23),y=I+(g^_&(A^g))+E[7]+1735328473&4294967295,I=A+(y<<14&4294967295|y>>>18),y=_+(A^g&(I^A))+E[12]+2368359562&4294967295,_=I+(y<<20&4294967295|y>>>12),y=g+(_^I^A)+E[5]+4294588738&4294967295,g=_+(y<<4&4294967295|y>>>28),y=A+(g^_^I)+E[8]+2272392833&4294967295,A=g+(y<<11&4294967295|y>>>21),y=I+(A^g^_)+E[11]+1839030562&4294967295,I=A+(y<<16&4294967295|y>>>16),y=_+(I^A^g)+E[14]+4259657740&4294967295,_=I+(y<<23&4294967295|y>>>9),y=g+(_^I^A)+E[1]+2763975236&4294967295,g=_+(y<<4&4294967295|y>>>28),y=A+(g^_^I)+E[4]+1272893353&4294967295,A=g+(y<<11&4294967295|y>>>21),y=I+(A^g^_)+E[7]+4139469664&4294967295,I=A+(y<<16&4294967295|y>>>16),y=_+(I^A^g)+E[10]+3200236656&4294967295,_=I+(y<<23&4294967295|y>>>9),y=g+(_^I^A)+E[13]+681279174&4294967295,g=_+(y<<4&4294967295|y>>>28),y=A+(g^_^I)+E[0]+3936430074&4294967295,A=g+(y<<11&4294967295|y>>>21),y=I+(A^g^_)+E[3]+3572445317&4294967295,I=A+(y<<16&4294967295|y>>>16),y=_+(I^A^g)+E[6]+76029189&4294967295,_=I+(y<<23&4294967295|y>>>9),y=g+(_^I^A)+E[9]+3654602809&4294967295,g=_+(y<<4&4294967295|y>>>28),y=A+(g^_^I)+E[12]+3873151461&4294967295,A=g+(y<<11&4294967295|y>>>21),y=I+(A^g^_)+E[15]+530742520&4294967295,I=A+(y<<16&4294967295|y>>>16),y=_+(I^A^g)+E[2]+3299628645&4294967295,_=I+(y<<23&4294967295|y>>>9),y=g+(I^(_|~A))+E[0]+4096336452&4294967295,g=_+(y<<6&4294967295|y>>>26),y=A+(_^(g|~I))+E[7]+1126891415&4294967295,A=g+(y<<10&4294967295|y>>>22),y=I+(g^(A|~_))+E[14]+2878612391&4294967295,I=A+(y<<15&4294967295|y>>>17),y=_+(A^(I|~g))+E[5]+4237533241&4294967295,_=I+(y<<21&4294967295|y>>>11),y=g+(I^(_|~A))+E[12]+1700485571&4294967295,g=_+(y<<6&4294967295|y>>>26),y=A+(_^(g|~I))+E[3]+2399980690&4294967295,A=g+(y<<10&4294967295|y>>>22),y=I+(g^(A|~_))+E[10]+4293915773&4294967295,I=A+(y<<15&4294967295|y>>>17),y=_+(A^(I|~g))+E[1]+2240044497&4294967295,_=I+(y<<21&4294967295|y>>>11),y=g+(I^(_|~A))+E[8]+1873313359&4294967295,g=_+(y<<6&4294967295|y>>>26),y=A+(_^(g|~I))+E[15]+4264355552&4294967295,A=g+(y<<10&4294967295|y>>>22),y=I+(g^(A|~_))+E[6]+2734768916&4294967295,I=A+(y<<15&4294967295|y>>>17),y=_+(A^(I|~g))+E[13]+1309151649&4294967295,_=I+(y<<21&4294967295|y>>>11),y=g+(I^(_|~A))+E[4]+4149444226&4294967295,g=_+(y<<6&4294967295|y>>>26),y=A+(_^(g|~I))+E[11]+3174756917&4294967295,A=g+(y<<10&4294967295|y>>>22),y=I+(g^(A|~_))+E[2]+718787259&4294967295,I=A+(y<<15&4294967295|y>>>17),y=_+(A^(I|~g))+E[9]+3951481745&4294967295,T.g[0]=T.g[0]+g&4294967295,T.g[1]=T.g[1]+(I+(y<<21&4294967295|y>>>11))&4294967295,T.g[2]=T.g[2]+I&4294967295,T.g[3]=T.g[3]+A&4294967295}i.prototype.u=function(T,g){g===void 0&&(g=T.length);for(var _=g-this.blockSize,E=this.B,I=this.h,A=0;A<g;){if(I==0)for(;A<=_;)s(this,T,A),A+=this.blockSize;if(typeof T=="string"){for(;A<g;)if(E[I++]=T.charCodeAt(A++),I==this.blockSize){s(this,E),I=0;break}}else for(;A<g;)if(E[I++]=T[A++],I==this.blockSize){s(this,E),I=0;break}}this.h=I,this.o+=g},i.prototype.v=function(){var T=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);T[0]=128;for(var g=1;g<T.length-8;++g)T[g]=0;var _=8*this.o;for(g=T.length-8;g<T.length;++g)T[g]=_&255,_/=256;for(this.u(T),T=Array(16),g=_=0;4>g;++g)for(var E=0;32>E;E+=8)T[_++]=this.g[g]>>>E&255;return T};function a(T,g){var _=l;return Object.prototype.hasOwnProperty.call(_,T)?_[T]:_[T]=g(T)}function c(T,g){this.h=g;for(var _=[],E=!0,I=T.length-1;0<=I;I--){var A=T[I]|0;E&&A==g||(_[I]=A,E=!1)}this.g=_}var l={};function d(T){return-128<=T&&128>T?a(T,function(g){return new c([g|0],0>g?-1:0)}):new c([T|0],0>T?-1:0)}function f(T){if(isNaN(T)||!isFinite(T))return w;if(0>T)return V(f(-T));for(var g=[],_=1,E=0;T>=_;E++)g[E]=T/_|0,_*=4294967296;return new c(g,0)}function p(T,g){if(T.length==0)throw Error("number format error: empty string");if(g=g||10,2>g||36<g)throw Error("radix out of range: "+g);if(T.charAt(0)=="-")return V(p(T.substring(1),g));if(0<=T.indexOf("-"))throw Error('number format error: interior "-" character');for(var _=f(Math.pow(g,8)),E=w,I=0;I<T.length;I+=8){var A=Math.min(8,T.length-I),y=parseInt(T.substring(I,I+A),g);8>A?(A=f(Math.pow(g,A)),E=E.j(A).add(f(y))):(E=E.j(_),E=E.add(f(y)))}return E}var w=d(0),v=d(1),C=d(16777216);r=c.prototype,r.m=function(){if(O(this))return-V(this).m();for(var T=0,g=1,_=0;_<this.g.length;_++){var E=this.i(_);T+=(0<=E?E:4294967296+E)*g,g*=4294967296}return T},r.toString=function(T){if(T=T||10,2>T||36<T)throw Error("radix out of range: "+T);if(P(this))return"0";if(O(this))return"-"+V(this).toString(T);for(var g=f(Math.pow(T,6)),_=this,E="";;){var I=et(_,g).g;_=j(_,I.j(g));var A=((0<_.g.length?_.g[0]:_.h)>>>0).toString(T);if(_=I,P(_))return A+E;for(;6>A.length;)A="0"+A;E=A+E}},r.i=function(T){return 0>T?0:T<this.g.length?this.g[T]:this.h};function P(T){if(T.h!=0)return!1;for(var g=0;g<T.g.length;g++)if(T.g[g]!=0)return!1;return!0}function O(T){return T.h==-1}r.l=function(T){return T=j(this,T),O(T)?-1:P(T)?0:1};function V(T){for(var g=T.g.length,_=[],E=0;E<g;E++)_[E]=~T.g[E];return new c(_,~T.h).add(v)}r.abs=function(){return O(this)?V(this):this},r.add=function(T){for(var g=Math.max(this.g.length,T.g.length),_=[],E=0,I=0;I<=g;I++){var A=E+(this.i(I)&65535)+(T.i(I)&65535),y=(A>>>16)+(this.i(I)>>>16)+(T.i(I)>>>16);E=y>>>16,A&=65535,y&=65535,_[I]=y<<16|A}return new c(_,_[_.length-1]&-2147483648?-1:0)};function j(T,g){return T.add(V(g))}r.j=function(T){if(P(this)||P(T))return w;if(O(this))return O(T)?V(this).j(V(T)):V(V(this).j(T));if(O(T))return V(this.j(V(T)));if(0>this.l(C)&&0>T.l(C))return f(this.m()*T.m());for(var g=this.g.length+T.g.length,_=[],E=0;E<2*g;E++)_[E]=0;for(E=0;E<this.g.length;E++)for(var I=0;I<T.g.length;I++){var A=this.i(E)>>>16,y=this.i(E)&65535,$t=T.i(I)>>>16,En=T.i(I)&65535;_[2*E+2*I]+=y*En,q(_,2*E+2*I),_[2*E+2*I+1]+=A*En,q(_,2*E+2*I+1),_[2*E+2*I+1]+=y*$t,q(_,2*E+2*I+1),_[2*E+2*I+2]+=A*$t,q(_,2*E+2*I+2)}for(E=0;E<g;E++)_[E]=_[2*E+1]<<16|_[2*E];for(E=g;E<2*g;E++)_[E]=0;return new c(_,0)};function q(T,g){for(;(T[g]&65535)!=T[g];)T[g+1]+=T[g]>>>16,T[g]&=65535,g++}function G(T,g){this.g=T,this.h=g}function et(T,g){if(P(g))throw Error("division by zero");if(P(T))return new G(w,w);if(O(T))return g=et(V(T),g),new G(V(g.g),V(g.h));if(O(g))return g=et(T,V(g)),new G(V(g.g),g.h);if(30<T.g.length){if(O(T)||O(g))throw Error("slowDivide_ only works with positive integers.");for(var _=v,E=g;0>=E.l(T);)_=St(_),E=St(E);var I=Y(_,1),A=Y(E,1);for(E=Y(E,2),_=Y(_,2);!P(E);){var y=A.add(E);0>=y.l(T)&&(I=I.add(_),A=y),E=Y(E,1),_=Y(_,1)}return g=j(T,I.j(g)),new G(I,g)}for(I=w;0<=T.l(g);){for(_=Math.max(1,Math.floor(T.m()/g.m())),E=Math.ceil(Math.log(_)/Math.LN2),E=48>=E?1:Math.pow(2,E-48),A=f(_),y=A.j(g);O(y)||0<y.l(T);)_-=E,A=f(_),y=A.j(g);P(A)&&(A=v),I=I.add(A),T=j(T,y)}return new G(I,T)}r.A=function(T){return et(this,T).h},r.and=function(T){for(var g=Math.max(this.g.length,T.g.length),_=[],E=0;E<g;E++)_[E]=this.i(E)&T.i(E);return new c(_,this.h&T.h)},r.or=function(T){for(var g=Math.max(this.g.length,T.g.length),_=[],E=0;E<g;E++)_[E]=this.i(E)|T.i(E);return new c(_,this.h|T.h)},r.xor=function(T){for(var g=Math.max(this.g.length,T.g.length),_=[],E=0;E<g;E++)_[E]=this.i(E)^T.i(E);return new c(_,this.h^T.h)};function St(T){for(var g=T.g.length+1,_=[],E=0;E<g;E++)_[E]=T.i(E)<<1|T.i(E-1)>>>31;return new c(_,T.h)}function Y(T,g){var _=g>>5;g%=32;for(var E=T.g.length-_,I=[],A=0;A<E;A++)I[A]=0<g?T.i(A+_)>>>g|T.i(A+_+1)<<32-g:T.i(A+_);return new c(I,T.h)}i.prototype.digest=i.prototype.v,i.prototype.reset=i.prototype.s,i.prototype.update=i.prototype.u,Ds=xu.Md5=i,c.prototype.add=c.prototype.add,c.prototype.multiply=c.prototype.j,c.prototype.modulo=c.prototype.A,c.prototype.compare=c.prototype.l,c.prototype.toNumber=c.prototype.m,c.prototype.toString=c.prototype.toString,c.prototype.getBits=c.prototype.i,c.fromNumber=f,c.fromString=p,Jt=xu.Integer=c}).apply(typeof Du<"u"?Du:typeof self<"u"?self:typeof window<"u"?window:{});var Ur=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},Yt={};var xs,cm,Ke,Vs,Gn,zr,ks,Ns,Os;(function(){var r,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(o,u,h){return o==Array.prototype||o==Object.prototype||(o[u]=h.value),o};function n(o){o=[typeof globalThis=="object"&&globalThis,o,typeof window=="object"&&window,typeof self=="object"&&self,typeof Ur=="object"&&Ur];for(var u=0;u<o.length;++u){var h=o[u];if(h&&h.Math==Math)return h}throw Error("Cannot find global object")}var i=n(this);function s(o,u){if(u)t:{var h=i;o=o.split(".");for(var m=0;m<o.length-1;m++){var b=o[m];if(!(b in h))break t;h=h[b]}o=o[o.length-1],m=h[o],u=u(m),u!=m&&u!=null&&e(h,o,{configurable:!0,writable:!0,value:u})}}function a(o,u){o instanceof String&&(o+="");var h=0,m=!1,b={next:function(){if(!m&&h<o.length){var R=h++;return{value:u(R,o[R]),done:!1}}return m=!0,{done:!0,value:void 0}}};return b[Symbol.iterator]=function(){return b},b}s("Array.prototype.values",function(o){return o||function(){return a(this,function(u,h){return h})}});var c=c||{},l=this||self;function d(o){var u=typeof o;return u=u!="object"?u:o?Array.isArray(o)?"array":u:"null",u=="array"||u=="object"&&typeof o.length=="number"}function f(o){var u=typeof o;return u=="object"&&o!=null||u=="function"}function p(o,u,h){return o.call.apply(o.bind,arguments)}function w(o,u,h){if(!o)throw Error();if(2<arguments.length){var m=Array.prototype.slice.call(arguments,2);return function(){var b=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(b,m),o.apply(u,b)}}return function(){return o.apply(u,arguments)}}function v(o,u,h){return v=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?p:w,v.apply(null,arguments)}function C(o,u){var h=Array.prototype.slice.call(arguments,1);return function(){var m=h.slice();return m.push.apply(m,arguments),o.apply(this,m)}}function P(o,u){function h(){}h.prototype=u.prototype,o.aa=u.prototype,o.prototype=new h,o.prototype.constructor=o,o.Qb=function(m,b,R){for(var k=Array(arguments.length-2),J=2;J<arguments.length;J++)k[J-2]=arguments[J];return u.prototype[b].apply(m,k)}}function O(o){let u=o.length;if(0<u){let h=Array(u);for(let m=0;m<u;m++)h[m]=o[m];return h}return[]}function V(o,u){for(let h=1;h<arguments.length;h++){let m=arguments[h];if(d(m)){let b=o.length||0,R=m.length||0;o.length=b+R;for(let k=0;k<R;k++)o[b+k]=m[k]}else o.push(m)}}class j{constructor(u,h){this.i=u,this.j=h,this.h=0,this.g=null}get(){let u;return 0<this.h?(this.h--,u=this.g,this.g=u.next,u.next=null):u=this.i(),u}}function q(o){return/^[\s\xa0]*$/.test(o)}function G(){var o=l.navigator;return o&&(o=o.userAgent)?o:""}function et(o){return et[" "](o),o}et[" "]=function(){};var St=G().indexOf("Gecko")!=-1&&!(G().toLowerCase().indexOf("webkit")!=-1&&G().indexOf("Edge")==-1)&&!(G().indexOf("Trident")!=-1||G().indexOf("MSIE")!=-1)&&G().indexOf("Edge")==-1;function Y(o,u,h){for(let m in o)u.call(h,o[m],m,o)}function T(o,u){for(let h in o)u.call(void 0,o[h],h,o)}function g(o){let u={};for(let h in o)u[h]=o[h];return u}let _="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function E(o,u){let h,m;for(let b=1;b<arguments.length;b++){m=arguments[b];for(h in m)o[h]=m[h];for(let R=0;R<_.length;R++)h=_[R],Object.prototype.hasOwnProperty.call(m,h)&&(o[h]=m[h])}}function I(o){var u=1;o=o.split(":");let h=[];for(;0<u&&o.length;)h.push(o.shift()),u--;return o.length&&h.push(o.join(":")),h}function A(o){l.setTimeout(()=>{throw o},0)}function y(){var o=Ui;let u=null;return o.g&&(u=o.g,o.g=o.g.next,o.g||(o.h=null),u.next=null),u}class $t{constructor(){this.h=this.g=null}add(u,h){let m=En.get();m.set(u,h),this.h?this.h.next=m:this.g=m,this.h=m}}var En=new j(()=>new dd,o=>o.reset());class dd{constructor(){this.next=this.g=this.h=null}set(u,h){this.h=u,this.g=h,this.next=null}reset(){this.next=this.g=this.h=null}}let In,Tn=!1,Ui=new $t,Ja=()=>{let o=l.Promise.resolve(void 0);In=()=>{o.then(fd)}};var fd=()=>{for(var o;o=y();){try{o.h.call(o.g)}catch(h){A(h)}var u=En;u.j(o),100>u.h&&(u.h++,o.next=u.g,u.g=o)}Tn=!1};function se(){this.s=this.s,this.C=this.C}se.prototype.s=!1,se.prototype.ma=function(){this.s||(this.s=!0,this.N())},se.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function mt(o,u){this.type=o,this.g=this.target=u,this.defaultPrevented=!1}mt.prototype.h=function(){this.defaultPrevented=!0};var md=function(){if(!l.addEventListener||!Object.defineProperty)return!1;var o=!1,u=Object.defineProperty({},"passive",{get:function(){o=!0}});try{let h=()=>{};l.addEventListener("test",h,u),l.removeEventListener("test",h,u)}catch{}return o}();function bn(o,u){if(mt.call(this,o?o.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,o){var h=this.type=o.type,m=o.changedTouches&&o.changedTouches.length?o.changedTouches[0]:null;if(this.target=o.target||o.srcElement,this.g=u,u=o.relatedTarget){if(St){t:{try{et(u.nodeName);var b=!0;break t}catch{}b=!1}b||(u=null)}}else h=="mouseover"?u=o.fromElement:h=="mouseout"&&(u=o.toElement);this.relatedTarget=u,m?(this.clientX=m.clientX!==void 0?m.clientX:m.pageX,this.clientY=m.clientY!==void 0?m.clientY:m.pageY,this.screenX=m.screenX||0,this.screenY=m.screenY||0):(this.clientX=o.clientX!==void 0?o.clientX:o.pageX,this.clientY=o.clientY!==void 0?o.clientY:o.pageY,this.screenX=o.screenX||0,this.screenY=o.screenY||0),this.button=o.button,this.key=o.key||"",this.ctrlKey=o.ctrlKey,this.altKey=o.altKey,this.shiftKey=o.shiftKey,this.metaKey=o.metaKey,this.pointerId=o.pointerId||0,this.pointerType=typeof o.pointerType=="string"?o.pointerType:pd[o.pointerType]||"",this.state=o.state,this.i=o,o.defaultPrevented&&bn.aa.h.call(this)}}P(bn,mt);var pd={2:"touch",3:"pen",4:"mouse"};bn.prototype.h=function(){bn.aa.h.call(this);var o=this.i;o.preventDefault?o.preventDefault():o.returnValue=!1};var An="closure_listenable_"+(1e6*Math.random()|0),gd=0;function yd(o,u,h,m,b){this.listener=o,this.proxy=null,this.src=u,this.type=h,this.capture=!!m,this.ha=b,this.key=++gd,this.da=this.fa=!1}function _r(o){o.da=!0,o.listener=null,o.proxy=null,o.src=null,o.ha=null}function wr(o){this.src=o,this.g={},this.h=0}wr.prototype.add=function(o,u,h,m,b){var R=o.toString();o=this.g[R],o||(o=this.g[R]=[],this.h++);var k=qi(o,u,m,b);return-1<k?(u=o[k],h||(u.fa=!1)):(u=new yd(u,this.src,R,!!m,b),u.fa=h,o.push(u)),u};function zi(o,u){var h=u.type;if(h in o.g){var m=o.g[h],b=Array.prototype.indexOf.call(m,u,void 0),R;(R=0<=b)&&Array.prototype.splice.call(m,b,1),R&&(_r(u),o.g[h].length==0&&(delete o.g[h],o.h--))}}function qi(o,u,h,m){for(var b=0;b<o.length;++b){var R=o[b];if(!R.da&&R.listener==u&&R.capture==!!h&&R.ha==m)return b}return-1}var ji="closure_lm_"+(1e6*Math.random()|0),$i={};function Ya(o,u,h,m,b){if(m&&m.once)return tc(o,u,h,m,b);if(Array.isArray(u)){for(var R=0;R<u.length;R++)Ya(o,u[R],h,m,b);return null}return h=Hi(h),o&&o[An]?o.K(u,h,f(m)?!!m.capture:!!m,b):Za(o,u,h,!1,m,b)}function Za(o,u,h,m,b,R){if(!u)throw Error("Invalid event type");var k=f(b)?!!b.capture:!!b,J=Ki(o);if(J||(o[ji]=J=new wr(o)),h=J.add(u,h,m,k,R),h.proxy)return h;if(m=_d(),h.proxy=m,m.src=o,m.listener=h,o.addEventListener)md||(b=k),b===void 0&&(b=!1),o.addEventListener(u.toString(),m,b);else if(o.attachEvent)o.attachEvent(nc(u.toString()),m);else if(o.addListener&&o.removeListener)o.addListener(m);else throw Error("addEventListener and attachEvent are unavailable.");return h}function _d(){function o(h){return u.call(o.src,o.listener,h)}let u=wd;return o}function tc(o,u,h,m,b){if(Array.isArray(u)){for(var R=0;R<u.length;R++)tc(o,u[R],h,m,b);return null}return h=Hi(h),o&&o[An]?o.L(u,h,f(m)?!!m.capture:!!m,b):Za(o,u,h,!0,m,b)}function ec(o,u,h,m,b){if(Array.isArray(u))for(var R=0;R<u.length;R++)ec(o,u[R],h,m,b);else m=f(m)?!!m.capture:!!m,h=Hi(h),o&&o[An]?(o=o.i,u=String(u).toString(),u in o.g&&(R=o.g[u],h=qi(R,h,m,b),-1<h&&(_r(R[h]),Array.prototype.splice.call(R,h,1),R.length==0&&(delete o.g[u],o.h--)))):o&&(o=Ki(o))&&(u=o.g[u.toString()],o=-1,u&&(o=qi(u,h,m,b)),(h=-1<o?u[o]:null)&&Gi(h))}function Gi(o){if(typeof o!="number"&&o&&!o.da){var u=o.src;if(u&&u[An])zi(u.i,o);else{var h=o.type,m=o.proxy;u.removeEventListener?u.removeEventListener(h,m,o.capture):u.detachEvent?u.detachEvent(nc(h),m):u.addListener&&u.removeListener&&u.removeListener(m),(h=Ki(u))?(zi(h,o),h.h==0&&(h.src=null,u[ji]=null)):_r(o)}}}function nc(o){return o in $i?$i[o]:$i[o]="on"+o}function wd(o,u){if(o.da)o=!0;else{u=new bn(u,this);var h=o.listener,m=o.ha||o.src;o.fa&&Gi(o),o=h.call(m,u)}return o}function Ki(o){return o=o[ji],o instanceof wr?o:null}var Wi="__closure_events_fn_"+(1e9*Math.random()>>>0);function Hi(o){return typeof o=="function"?o:(o[Wi]||(o[Wi]=function(u){return o.handleEvent(u)}),o[Wi])}function pt(){se.call(this),this.i=new wr(this),this.M=this,this.F=null}P(pt,se),pt.prototype[An]=!0,pt.prototype.removeEventListener=function(o,u,h,m){ec(this,o,u,h,m)};function vt(o,u){var h,m=o.F;if(m)for(h=[];m;m=m.F)h.push(m);if(o=o.M,m=u.type||u,typeof u=="string")u=new mt(u,o);else if(u instanceof mt)u.target=u.target||o;else{var b=u;u=new mt(m,o),E(u,b)}if(b=!0,h)for(var R=h.length-1;0<=R;R--){var k=u.g=h[R];b=vr(k,m,!0,u)&&b}if(k=u.g=o,b=vr(k,m,!0,u)&&b,b=vr(k,m,!1,u)&&b,h)for(R=0;R<h.length;R++)k=u.g=h[R],b=vr(k,m,!1,u)&&b}pt.prototype.N=function(){if(pt.aa.N.call(this),this.i){var o=this.i,u;for(u in o.g){for(var h=o.g[u],m=0;m<h.length;m++)_r(h[m]);delete o.g[u],o.h--}}this.F=null},pt.prototype.K=function(o,u,h,m){return this.i.add(String(o),u,!1,h,m)},pt.prototype.L=function(o,u,h,m){return this.i.add(String(o),u,!0,h,m)};function vr(o,u,h,m){if(u=o.i.g[String(u)],!u)return!0;u=u.concat();for(var b=!0,R=0;R<u.length;++R){var k=u[R];if(k&&!k.da&&k.capture==h){var J=k.listener,dt=k.ha||k.src;k.fa&&zi(o.i,k),b=J.call(dt,m)!==!1&&b}}return b&&!m.defaultPrevented}function rc(o,u,h){if(typeof o=="function")h&&(o=v(o,h));else if(o&&typeof o.handleEvent=="function")o=v(o.handleEvent,o);else throw Error("Invalid listener argument");return 2147483647<Number(u)?-1:l.setTimeout(o,u||0)}function ic(o){o.g=rc(()=>{o.g=null,o.i&&(o.i=!1,ic(o))},o.l);let u=o.h;o.h=null,o.m.apply(null,u)}class vd extends se{constructor(u,h){super(),this.m=u,this.l=h,this.h=null,this.i=!1,this.g=null}j(u){this.h=arguments,this.g?this.i=!0:ic(this)}N(){super.N(),this.g&&(l.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Sn(o){se.call(this),this.h=o,this.g={}}P(Sn,se);var sc=[];function oc(o){Y(o.g,function(u,h){this.g.hasOwnProperty(h)&&Gi(u)},o),o.g={}}Sn.prototype.N=function(){Sn.aa.N.call(this),oc(this)},Sn.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Qi=l.JSON.stringify,Ed=l.JSON.parse,Id=class{stringify(o){return l.JSON.stringify(o,void 0)}parse(o){return l.JSON.parse(o,void 0)}};function Xi(){}Xi.prototype.h=null;function ac(o){return o.h||(o.h=o.i())}function cc(){}var Rn={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Ji(){mt.call(this,"d")}P(Ji,mt);function Yi(){mt.call(this,"c")}P(Yi,mt);var Te={},uc=null;function Er(){return uc=uc||new pt}Te.La="serverreachability";function lc(o){mt.call(this,Te.La,o)}P(lc,mt);function Cn(o){let u=Er();vt(u,new lc(u))}Te.STAT_EVENT="statevent";function hc(o,u){mt.call(this,Te.STAT_EVENT,o),this.stat=u}P(hc,mt);function Et(o){let u=Er();vt(u,new hc(u,o))}Te.Ma="timingevent";function dc(o,u){mt.call(this,Te.Ma,o),this.size=u}P(dc,mt);function Pn(o,u){if(typeof o!="function")throw Error("Fn must not be null and must be a function");return l.setTimeout(function(){o()},u)}function Dn(){this.g=!0}Dn.prototype.xa=function(){this.g=!1};function Td(o,u,h,m,b,R){o.info(function(){if(o.g)if(R)for(var k="",J=R.split("&"),dt=0;dt<J.length;dt++){var Q=J[dt].split("=");if(1<Q.length){var gt=Q[0];Q=Q[1];var yt=gt.split("_");k=2<=yt.length&&yt[1]=="type"?k+(gt+"="+Q+"&"):k+(gt+"=redacted&")}}else k=null;else k=R;return"XMLHTTP REQ ("+m+") [attempt "+b+"]: "+u+`
`+h+`
`+k})}function bd(o,u,h,m,b,R,k){o.info(function(){return"XMLHTTP RESP ("+m+") [ attempt "+b+"]: "+u+`
`+h+`
`+R+" "+k})}function Ue(o,u,h,m){o.info(function(){return"XMLHTTP TEXT ("+u+"): "+Sd(o,h)+(m?" "+m:"")})}function Ad(o,u){o.info(function(){return"TIMEOUT: "+u})}Dn.prototype.info=function(){};function Sd(o,u){if(!o.g)return u;if(!u)return null;try{var h=JSON.parse(u);if(h){for(o=0;o<h.length;o++)if(Array.isArray(h[o])){var m=h[o];if(!(2>m.length)){var b=m[1];if(Array.isArray(b)&&!(1>b.length)){var R=b[0];if(R!="noop"&&R!="stop"&&R!="close")for(var k=1;k<b.length;k++)b[k]=""}}}}return Qi(h)}catch{return u}}var Ir={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},fc={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Zi;function Tr(){}P(Tr,Xi),Tr.prototype.g=function(){return new XMLHttpRequest},Tr.prototype.i=function(){return{}},Zi=new Tr;function oe(o,u,h,m){this.j=o,this.i=u,this.l=h,this.R=m||1,this.U=new Sn(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new mc}function mc(){this.i=null,this.g="",this.h=!1}var pc={},ts={};function es(o,u,h){o.L=1,o.v=Rr(Gt(u)),o.m=h,o.P=!0,gc(o,null)}function gc(o,u){o.F=Date.now(),br(o),o.A=Gt(o.v);var h=o.A,m=o.R;Array.isArray(m)||(m=[String(m)]),Dc(h.i,"t",m),o.C=0,h=o.j.J,o.h=new mc,o.g=Hc(o.j,h?u:null,!o.m),0<o.O&&(o.M=new vd(v(o.Y,o,o.g),o.O)),u=o.U,h=o.g,m=o.ca;var b="readystatechange";Array.isArray(b)||(b&&(sc[0]=b.toString()),b=sc);for(var R=0;R<b.length;R++){var k=Ya(h,b[R],m||u.handleEvent,!1,u.h||u);if(!k)break;u.g[k.key]=k}u=o.H?g(o.H):{},o.m?(o.u||(o.u="POST"),u["Content-Type"]="application/x-www-form-urlencoded",o.g.ea(o.A,o.u,o.m,u)):(o.u="GET",o.g.ea(o.A,o.u,null,u)),Cn(),Td(o.i,o.u,o.A,o.l,o.R,o.m)}oe.prototype.ca=function(o){o=o.target;let u=this.M;u&&Kt(o)==3?u.j():this.Y(o)},oe.prototype.Y=function(o){try{if(o==this.g)t:{let yt=Kt(this.g);var u=this.g.Ba();let je=this.g.Z();if(!(3>yt)&&(yt!=3||this.g&&(this.h.h||this.g.oa()||Mc(this.g)))){this.J||yt!=4||u==7||(u==8||0>=je?Cn(3):Cn(2)),ns(this);var h=this.g.Z();this.X=h;e:if(yc(this)){var m=Mc(this.g);o="";var b=m.length,R=Kt(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){be(this),xn(this);var k="";break e}this.h.i=new l.TextDecoder}for(u=0;u<b;u++)this.h.h=!0,o+=this.h.i.decode(m[u],{stream:!(R&&u==b-1)});m.length=0,this.h.g+=o,this.C=0,k=this.h.g}else k=this.g.oa();if(this.o=h==200,bd(this.i,this.u,this.A,this.l,this.R,yt,h),this.o){if(this.T&&!this.K){e:{if(this.g){var J,dt=this.g;if((J=dt.g?dt.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!q(J)){var Q=J;break e}}Q=null}if(h=Q)Ue(this.i,this.l,h,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,rs(this,h);else{this.o=!1,this.s=3,Et(12),be(this),xn(this);break t}}if(this.P){h=!0;let Pt;for(;!this.J&&this.C<k.length;)if(Pt=Rd(this,k),Pt==ts){yt==4&&(this.s=4,Et(14),h=!1),Ue(this.i,this.l,null,"[Incomplete Response]");break}else if(Pt==pc){this.s=4,Et(15),Ue(this.i,this.l,k,"[Invalid Chunk]"),h=!1;break}else Ue(this.i,this.l,Pt,null),rs(this,Pt);if(yc(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),yt!=4||k.length!=0||this.h.h||(this.s=1,Et(16),h=!1),this.o=this.o&&h,!h)Ue(this.i,this.l,k,"[Invalid Chunked Response]"),be(this),xn(this);else if(0<k.length&&!this.W){this.W=!0;var gt=this.j;gt.g==this&&gt.ba&&!gt.M&&(gt.j.info("Great, no buffering proxy detected. Bytes received: "+k.length),us(gt),gt.M=!0,Et(11))}}else Ue(this.i,this.l,k,null),rs(this,k);yt==4&&be(this),this.o&&!this.J&&(yt==4?$c(this.j,this):(this.o=!1,br(this)))}else $d(this.g),h==400&&0<k.indexOf("Unknown SID")?(this.s=3,Et(12)):(this.s=0,Et(13)),be(this),xn(this)}}}catch{}finally{}};function yc(o){return o.g?o.u=="GET"&&o.L!=2&&o.j.Ca:!1}function Rd(o,u){var h=o.C,m=u.indexOf(`
`,h);return m==-1?ts:(h=Number(u.substring(h,m)),isNaN(h)?pc:(m+=1,m+h>u.length?ts:(u=u.slice(m,m+h),o.C=m+h,u)))}oe.prototype.cancel=function(){this.J=!0,be(this)};function br(o){o.S=Date.now()+o.I,_c(o,o.I)}function _c(o,u){if(o.B!=null)throw Error("WatchDog timer not null");o.B=Pn(v(o.ba,o),u)}function ns(o){o.B&&(l.clearTimeout(o.B),o.B=null)}oe.prototype.ba=function(){this.B=null;let o=Date.now();0<=o-this.S?(Ad(this.i,this.A),this.L!=2&&(Cn(),Et(17)),be(this),this.s=2,xn(this)):_c(this,this.S-o)};function xn(o){o.j.G==0||o.J||$c(o.j,o)}function be(o){ns(o);var u=o.M;u&&typeof u.ma=="function"&&u.ma(),o.M=null,oc(o.U),o.g&&(u=o.g,o.g=null,u.abort(),u.ma())}function rs(o,u){try{var h=o.j;if(h.G!=0&&(h.g==o||is(h.h,o))){if(!o.K&&is(h.h,o)&&h.G==3){try{var m=h.Da.g.parse(u)}catch{m=null}if(Array.isArray(m)&&m.length==3){var b=m;if(b[0]==0){t:if(!h.u){if(h.g)if(h.g.F+3e3<o.F)Vr(h),Dr(h);else break t;cs(h),Et(18)}}else h.za=b[1],0<h.za-h.T&&37500>b[2]&&h.F&&h.v==0&&!h.C&&(h.C=Pn(v(h.Za,h),6e3));if(1>=Ec(h.h)&&h.ca){try{h.ca()}catch{}h.ca=void 0}}else Se(h,11)}else if((o.K||h.g==o)&&Vr(h),!q(u))for(b=h.Da.g.parse(u),u=0;u<b.length;u++){let Q=b[u];if(h.T=Q[0],Q=Q[1],h.G==2)if(Q[0]=="c"){h.K=Q[1],h.ia=Q[2];let gt=Q[3];gt!=null&&(h.la=gt,h.j.info("VER="+h.la));let yt=Q[4];yt!=null&&(h.Aa=yt,h.j.info("SVER="+h.Aa));let je=Q[5];je!=null&&typeof je=="number"&&0<je&&(m=1.5*je,h.L=m,h.j.info("backChannelRequestTimeoutMs_="+m)),m=h;let Pt=o.g;if(Pt){let Nr=Pt.g?Pt.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Nr){var R=m.h;R.g||Nr.indexOf("spdy")==-1&&Nr.indexOf("quic")==-1&&Nr.indexOf("h2")==-1||(R.j=R.l,R.g=new Set,R.h&&(ss(R,R.h),R.h=null))}if(m.D){let ls=Pt.g?Pt.g.getResponseHeader("X-HTTP-Session-Id"):null;ls&&(m.ya=ls,Z(m.I,m.D,ls))}}h.G=3,h.l&&h.l.ua(),h.ba&&(h.R=Date.now()-o.F,h.j.info("Handshake RTT: "+h.R+"ms")),m=h;var k=o;if(m.qa=Wc(m,m.J?m.ia:null,m.W),k.K){Ic(m.h,k);var J=k,dt=m.L;dt&&(J.I=dt),J.B&&(ns(J),br(J)),m.g=k}else qc(m);0<h.i.length&&xr(h)}else Q[0]!="stop"&&Q[0]!="close"||Se(h,7);else h.G==3&&(Q[0]=="stop"||Q[0]=="close"?Q[0]=="stop"?Se(h,7):as(h):Q[0]!="noop"&&h.l&&h.l.ta(Q),h.v=0)}}Cn(4)}catch{}}var Cd=class{constructor(o,u){this.g=o,this.map=u}};function wc(o){this.l=o||10,l.PerformanceNavigationTiming?(o=l.performance.getEntriesByType("navigation"),o=0<o.length&&(o[0].nextHopProtocol=="hq"||o[0].nextHopProtocol=="h2")):o=!!(l.chrome&&l.chrome.loadTimes&&l.chrome.loadTimes()&&l.chrome.loadTimes().wasFetchedViaSpdy),this.j=o?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function vc(o){return o.h?!0:o.g?o.g.size>=o.j:!1}function Ec(o){return o.h?1:o.g?o.g.size:0}function is(o,u){return o.h?o.h==u:o.g?o.g.has(u):!1}function ss(o,u){o.g?o.g.add(u):o.h=u}function Ic(o,u){o.h&&o.h==u?o.h=null:o.g&&o.g.has(u)&&o.g.delete(u)}wc.prototype.cancel=function(){if(this.i=Tc(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(let o of this.g.values())o.cancel();this.g.clear()}};function Tc(o){if(o.h!=null)return o.i.concat(o.h.D);if(o.g!=null&&o.g.size!==0){let u=o.i;for(let h of o.g.values())u=u.concat(h.D);return u}return O(o.i)}function Pd(o){if(o.V&&typeof o.V=="function")return o.V();if(typeof Map<"u"&&o instanceof Map||typeof Set<"u"&&o instanceof Set)return Array.from(o.values());if(typeof o=="string")return o.split("");if(d(o)){for(var u=[],h=o.length,m=0;m<h;m++)u.push(o[m]);return u}u=[],h=0;for(m in o)u[h++]=o[m];return u}function Dd(o){if(o.na&&typeof o.na=="function")return o.na();if(!o.V||typeof o.V!="function"){if(typeof Map<"u"&&o instanceof Map)return Array.from(o.keys());if(!(typeof Set<"u"&&o instanceof Set)){if(d(o)||typeof o=="string"){var u=[];o=o.length;for(var h=0;h<o;h++)u.push(h);return u}u=[],h=0;for(let m in o)u[h++]=m;return u}}}function bc(o,u){if(o.forEach&&typeof o.forEach=="function")o.forEach(u,void 0);else if(d(o)||typeof o=="string")Array.prototype.forEach.call(o,u,void 0);else for(var h=Dd(o),m=Pd(o),b=m.length,R=0;R<b;R++)u.call(void 0,m[R],h&&h[R],o)}var Ac=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function xd(o,u){if(o){o=o.split("&");for(var h=0;h<o.length;h++){var m=o[h].indexOf("="),b=null;if(0<=m){var R=o[h].substring(0,m);b=o[h].substring(m+1)}else R=o[h];u(R,b?decodeURIComponent(b.replace(/\+/g," ")):"")}}}function Ae(o){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,o instanceof Ae){this.h=o.h,Ar(this,o.j),this.o=o.o,this.g=o.g,Sr(this,o.s),this.l=o.l;var u=o.i,h=new Nn;h.i=u.i,u.g&&(h.g=new Map(u.g),h.h=u.h),Sc(this,h),this.m=o.m}else o&&(u=String(o).match(Ac))?(this.h=!1,Ar(this,u[1]||"",!0),this.o=Vn(u[2]||""),this.g=Vn(u[3]||"",!0),Sr(this,u[4]),this.l=Vn(u[5]||"",!0),Sc(this,u[6]||"",!0),this.m=Vn(u[7]||"")):(this.h=!1,this.i=new Nn(null,this.h))}Ae.prototype.toString=function(){var o=[],u=this.j;u&&o.push(kn(u,Rc,!0),":");var h=this.g;return(h||u=="file")&&(o.push("//"),(u=this.o)&&o.push(kn(u,Rc,!0),"@"),o.push(encodeURIComponent(String(h)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),h=this.s,h!=null&&o.push(":",String(h))),(h=this.l)&&(this.g&&h.charAt(0)!="/"&&o.push("/"),o.push(kn(h,h.charAt(0)=="/"?Nd:kd,!0))),(h=this.i.toString())&&o.push("?",h),(h=this.m)&&o.push("#",kn(h,Ld)),o.join("")};function Gt(o){return new Ae(o)}function Ar(o,u,h){o.j=h?Vn(u,!0):u,o.j&&(o.j=o.j.replace(/:$/,""))}function Sr(o,u){if(u){if(u=Number(u),isNaN(u)||0>u)throw Error("Bad port number "+u);o.s=u}else o.s=null}function Sc(o,u,h){u instanceof Nn?(o.i=u,Md(o.i,o.h)):(h||(u=kn(u,Od)),o.i=new Nn(u,o.h))}function Z(o,u,h){o.i.set(u,h)}function Rr(o){return Z(o,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),o}function Vn(o,u){return o?u?decodeURI(o.replace(/%25/g,"%2525")):decodeURIComponent(o):""}function kn(o,u,h){return typeof o=="string"?(o=encodeURI(o).replace(u,Vd),h&&(o=o.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),o):null}function Vd(o){return o=o.charCodeAt(0),"%"+(o>>4&15).toString(16)+(o&15).toString(16)}var Rc=/[#\/\?@]/g,kd=/[#\?:]/g,Nd=/[#\?]/g,Od=/[#\?@]/g,Ld=/#/g;function Nn(o,u){this.h=this.g=null,this.i=o||null,this.j=!!u}function ae(o){o.g||(o.g=new Map,o.h=0,o.i&&xd(o.i,function(u,h){o.add(decodeURIComponent(u.replace(/\+/g," ")),h)}))}r=Nn.prototype,r.add=function(o,u){ae(this),this.i=null,o=ze(this,o);var h=this.g.get(o);return h||this.g.set(o,h=[]),h.push(u),this.h+=1,this};function Cc(o,u){ae(o),u=ze(o,u),o.g.has(u)&&(o.i=null,o.h-=o.g.get(u).length,o.g.delete(u))}function Pc(o,u){return ae(o),u=ze(o,u),o.g.has(u)}r.forEach=function(o,u){ae(this),this.g.forEach(function(h,m){h.forEach(function(b){o.call(u,b,m,this)},this)},this)},r.na=function(){ae(this);let o=Array.from(this.g.values()),u=Array.from(this.g.keys()),h=[];for(let m=0;m<u.length;m++){let b=o[m];for(let R=0;R<b.length;R++)h.push(u[m])}return h},r.V=function(o){ae(this);let u=[];if(typeof o=="string")Pc(this,o)&&(u=u.concat(this.g.get(ze(this,o))));else{o=Array.from(this.g.values());for(let h=0;h<o.length;h++)u=u.concat(o[h])}return u},r.set=function(o,u){return ae(this),this.i=null,o=ze(this,o),Pc(this,o)&&(this.h-=this.g.get(o).length),this.g.set(o,[u]),this.h+=1,this},r.get=function(o,u){return o?(o=this.V(o),0<o.length?String(o[0]):u):u};function Dc(o,u,h){Cc(o,u),0<h.length&&(o.i=null,o.g.set(ze(o,u),O(h)),o.h+=h.length)}r.toString=function(){if(this.i)return this.i;if(!this.g)return"";let o=[],u=Array.from(this.g.keys());for(var h=0;h<u.length;h++){var m=u[h];let R=encodeURIComponent(String(m)),k=this.V(m);for(m=0;m<k.length;m++){var b=R;k[m]!==""&&(b+="="+encodeURIComponent(String(k[m]))),o.push(b)}}return this.i=o.join("&")};function ze(o,u){return u=String(u),o.j&&(u=u.toLowerCase()),u}function Md(o,u){u&&!o.j&&(ae(o),o.i=null,o.g.forEach(function(h,m){var b=m.toLowerCase();m!=b&&(Cc(this,m),Dc(this,b,h))},o)),o.j=u}function Fd(o,u){let h=new Dn;if(l.Image){let m=new Image;m.onload=C(ce,h,"TestLoadImage: loaded",!0,u,m),m.onerror=C(ce,h,"TestLoadImage: error",!1,u,m),m.onabort=C(ce,h,"TestLoadImage: abort",!1,u,m),m.ontimeout=C(ce,h,"TestLoadImage: timeout",!1,u,m),l.setTimeout(function(){m.ontimeout&&m.ontimeout()},1e4),m.src=o}else u(!1)}function Bd(o,u){let h=new Dn,m=new AbortController,b=setTimeout(()=>{m.abort(),ce(h,"TestPingServer: timeout",!1,u)},1e4);fetch(o,{signal:m.signal}).then(R=>{clearTimeout(b),R.ok?ce(h,"TestPingServer: ok",!0,u):ce(h,"TestPingServer: server error",!1,u)}).catch(()=>{clearTimeout(b),ce(h,"TestPingServer: error",!1,u)})}function ce(o,u,h,m,b){try{b&&(b.onload=null,b.onerror=null,b.onabort=null,b.ontimeout=null),m(h)}catch{}}function Ud(){this.g=new Id}function zd(o,u,h){let m=h||"";try{bc(o,function(b,R){let k=b;f(b)&&(k=Qi(b)),u.push(m+R+"="+encodeURIComponent(k))})}catch(b){throw u.push(m+"type="+encodeURIComponent("_badmap")),b}}function On(o){this.l=o.Ub||null,this.j=o.eb||!1}P(On,Xi),On.prototype.g=function(){return new Cr(this.l,this.j)},On.prototype.i=function(o){return function(){return o}}({});function Cr(o,u){pt.call(this),this.D=o,this.o=u,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}P(Cr,pt),r=Cr.prototype,r.open=function(o,u){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=o,this.A=u,this.readyState=1,Mn(this)},r.send=function(o){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;let u={headers:this.u,method:this.B,credentials:this.m,cache:void 0};o&&(u.body=o),(this.D||l).fetch(new Request(this.A,u)).then(this.Sa.bind(this),this.ga.bind(this))},r.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Ln(this)),this.readyState=0},r.Sa=function(o){if(this.g&&(this.l=o,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=o.headers,this.readyState=2,Mn(this)),this.g&&(this.readyState=3,Mn(this),this.g)))if(this.responseType==="arraybuffer")o.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof l.ReadableStream<"u"&&"body"in o){if(this.j=o.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;xc(this)}else o.text().then(this.Ra.bind(this),this.ga.bind(this))};function xc(o){o.j.read().then(o.Pa.bind(o)).catch(o.ga.bind(o))}r.Pa=function(o){if(this.g){if(this.o&&o.value)this.response.push(o.value);else if(!this.o){var u=o.value?o.value:new Uint8Array(0);(u=this.v.decode(u,{stream:!o.done}))&&(this.response=this.responseText+=u)}o.done?Ln(this):Mn(this),this.readyState==3&&xc(this)}},r.Ra=function(o){this.g&&(this.response=this.responseText=o,Ln(this))},r.Qa=function(o){this.g&&(this.response=o,Ln(this))},r.ga=function(){this.g&&Ln(this)};function Ln(o){o.readyState=4,o.l=null,o.j=null,o.v=null,Mn(o)}r.setRequestHeader=function(o,u){this.u.append(o,u)},r.getResponseHeader=function(o){return this.h&&this.h.get(o.toLowerCase())||""},r.getAllResponseHeaders=function(){if(!this.h)return"";let o=[],u=this.h.entries();for(var h=u.next();!h.done;)h=h.value,o.push(h[0]+": "+h[1]),h=u.next();return o.join(`\r
`)};function Mn(o){o.onreadystatechange&&o.onreadystatechange.call(o)}Object.defineProperty(Cr.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(o){this.m=o?"include":"same-origin"}});function Vc(o){let u="";return Y(o,function(h,m){u+=m,u+=":",u+=h,u+=`\r
`}),u}function os(o,u,h){t:{for(m in h){var m=!1;break t}m=!0}m||(h=Vc(h),typeof o=="string"?h!=null&&encodeURIComponent(String(h)):Z(o,u,h))}function rt(o){pt.call(this),this.headers=new Map,this.o=o||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}P(rt,pt);var qd=/^https?$/i,jd=["POST","PUT"];r=rt.prototype,r.Ha=function(o){this.J=o},r.ea=function(o,u,h,m){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+o);u=u?u.toUpperCase():"GET",this.D=o,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Zi.g(),this.v=this.o?ac(this.o):ac(Zi),this.g.onreadystatechange=v(this.Ea,this);try{this.B=!0,this.g.open(u,String(o),!0),this.B=!1}catch(R){kc(this,R);return}if(o=h||"",h=new Map(this.headers),m)if(Object.getPrototypeOf(m)===Object.prototype)for(var b in m)h.set(b,m[b]);else if(typeof m.keys=="function"&&typeof m.get=="function")for(let R of m.keys())h.set(R,m.get(R));else throw Error("Unknown input type for opt_headers: "+String(m));m=Array.from(h.keys()).find(R=>R.toLowerCase()=="content-type"),b=l.FormData&&o instanceof l.FormData,!(0<=Array.prototype.indexOf.call(jd,u,void 0))||m||b||h.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(let[R,k]of h)this.g.setRequestHeader(R,k);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Lc(this),this.u=!0,this.g.send(o),this.u=!1}catch(R){kc(this,R)}};function kc(o,u){o.h=!1,o.g&&(o.j=!0,o.g.abort(),o.j=!1),o.l=u,o.m=5,Nc(o),Pr(o)}function Nc(o){o.A||(o.A=!0,vt(o,"complete"),vt(o,"error"))}r.abort=function(o){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=o||7,vt(this,"complete"),vt(this,"abort"),Pr(this))},r.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Pr(this,!0)),rt.aa.N.call(this)},r.Ea=function(){this.s||(this.B||this.u||this.j?Oc(this):this.bb())},r.bb=function(){Oc(this)};function Oc(o){if(o.h&&typeof c<"u"&&(!o.v[1]||Kt(o)!=4||o.Z()!=2)){if(o.u&&Kt(o)==4)rc(o.Ea,0,o);else if(vt(o,"readystatechange"),Kt(o)==4){o.h=!1;try{let k=o.Z();t:switch(k){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var u=!0;break t;default:u=!1}var h;if(!(h=u)){var m;if(m=k===0){var b=String(o.D).match(Ac)[1]||null;!b&&l.self&&l.self.location&&(b=l.self.location.protocol.slice(0,-1)),m=!qd.test(b?b.toLowerCase():"")}h=m}if(h)vt(o,"complete"),vt(o,"success");else{o.m=6;try{var R=2<Kt(o)?o.g.statusText:""}catch{R=""}o.l=R+" ["+o.Z()+"]",Nc(o)}}finally{Pr(o)}}}}function Pr(o,u){if(o.g){Lc(o);let h=o.g,m=o.v[0]?()=>{}:null;o.g=null,o.v=null,u||vt(o,"ready");try{h.onreadystatechange=m}catch{}}}function Lc(o){o.I&&(l.clearTimeout(o.I),o.I=null)}r.isActive=function(){return!!this.g};function Kt(o){return o.g?o.g.readyState:0}r.Z=function(){try{return 2<Kt(this)?this.g.status:-1}catch{return-1}},r.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},r.Oa=function(o){if(this.g){var u=this.g.responseText;return o&&u.indexOf(o)==0&&(u=u.substring(o.length)),Ed(u)}};function Mc(o){try{if(!o.g)return null;if("response"in o.g)return o.g.response;switch(o.H){case"":case"text":return o.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in o.g)return o.g.mozResponseArrayBuffer}return null}catch{return null}}function $d(o){let u={};o=(o.g&&2<=Kt(o)&&o.g.getAllResponseHeaders()||"").split(`\r
`);for(let m=0;m<o.length;m++){if(q(o[m]))continue;var h=I(o[m]);let b=h[0];if(h=h[1],typeof h!="string")continue;h=h.trim();let R=u[b]||[];u[b]=R,R.push(h)}T(u,function(m){return m.join(", ")})}r.Ba=function(){return this.m},r.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Fn(o,u,h){return h&&h.internalChannelParams&&h.internalChannelParams[o]||u}function Fc(o){this.Aa=0,this.i=[],this.j=new Dn,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Fn("failFast",!1,o),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Fn("baseRetryDelayMs",5e3,o),this.cb=Fn("retryDelaySeedMs",1e4,o),this.Wa=Fn("forwardChannelMaxRetries",2,o),this.wa=Fn("forwardChannelRequestTimeoutMs",2e4,o),this.pa=o&&o.xmlHttpFactory||void 0,this.Xa=o&&o.Tb||void 0,this.Ca=o&&o.useFetchStreams||!1,this.L=void 0,this.J=o&&o.supportsCrossDomainXhr||!1,this.K="",this.h=new wc(o&&o.concurrentRequestLimit),this.Da=new Ud,this.P=o&&o.fastHandshake||!1,this.O=o&&o.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=o&&o.Rb||!1,o&&o.xa&&this.j.xa(),o&&o.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&o&&o.detectBufferingProxy||!1,this.ja=void 0,o&&o.longPollingTimeout&&0<o.longPollingTimeout&&(this.ja=o.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}r=Fc.prototype,r.la=8,r.G=1,r.connect=function(o,u,h,m){Et(0),this.W=o,this.H=u||{},h&&m!==void 0&&(this.H.OSID=h,this.H.OAID=m),this.F=this.X,this.I=Wc(this,null,this.W),xr(this)};function as(o){if(Bc(o),o.G==3){var u=o.U++,h=Gt(o.I);if(Z(h,"SID",o.K),Z(h,"RID",u),Z(h,"TYPE","terminate"),Bn(o,h),u=new oe(o,o.j,u),u.L=2,u.v=Rr(Gt(h)),h=!1,l.navigator&&l.navigator.sendBeacon)try{h=l.navigator.sendBeacon(u.v.toString(),"")}catch{}!h&&l.Image&&(new Image().src=u.v,h=!0),h||(u.g=Hc(u.j,null),u.g.ea(u.v)),u.F=Date.now(),br(u)}Kc(o)}function Dr(o){o.g&&(us(o),o.g.cancel(),o.g=null)}function Bc(o){Dr(o),o.u&&(l.clearTimeout(o.u),o.u=null),Vr(o),o.h.cancel(),o.s&&(typeof o.s=="number"&&l.clearTimeout(o.s),o.s=null)}function xr(o){if(!vc(o.h)&&!o.s){o.s=!0;var u=o.Ga;In||Ja(),Tn||(In(),Tn=!0),Ui.add(u,o),o.B=0}}function Gd(o,u){return Ec(o.h)>=o.h.j-(o.s?1:0)?!1:o.s?(o.i=u.D.concat(o.i),!0):o.G==1||o.G==2||o.B>=(o.Va?0:o.Wa)?!1:(o.s=Pn(v(o.Ga,o,u),Gc(o,o.B)),o.B++,!0)}r.Ga=function(o){if(this.s)if(this.s=null,this.G==1){if(!o){this.U=Math.floor(1e5*Math.random()),o=this.U++;let b=new oe(this,this.j,o),R=this.o;if(this.S&&(R?(R=g(R),E(R,this.S)):R=this.S),this.m!==null||this.O||(b.H=R,R=null),this.P)t:{for(var u=0,h=0;h<this.i.length;h++){e:{var m=this.i[h];if("__data__"in m.map&&(m=m.map.__data__,typeof m=="string")){m=m.length;break e}m=void 0}if(m===void 0)break;if(u+=m,4096<u){u=h;break t}if(u===4096||h===this.i.length-1){u=h+1;break t}}u=1e3}else u=1e3;u=zc(this,b,u),h=Gt(this.I),Z(h,"RID",o),Z(h,"CVER",22),this.D&&Z(h,"X-HTTP-Session-Id",this.D),Bn(this,h),R&&(this.O?u="headers="+encodeURIComponent(String(Vc(R)))+"&"+u:this.m&&os(h,this.m,R)),ss(this.h,b),this.Ua&&Z(h,"TYPE","init"),this.P?(Z(h,"$req",u),Z(h,"SID","null"),b.T=!0,es(b,h,null)):es(b,h,u),this.G=2}}else this.G==3&&(o?Uc(this,o):this.i.length==0||vc(this.h)||Uc(this))};function Uc(o,u){var h;u?h=u.l:h=o.U++;let m=Gt(o.I);Z(m,"SID",o.K),Z(m,"RID",h),Z(m,"AID",o.T),Bn(o,m),o.m&&o.o&&os(m,o.m,o.o),h=new oe(o,o.j,h,o.B+1),o.m===null&&(h.H=o.o),u&&(o.i=u.D.concat(o.i)),u=zc(o,h,1e3),h.I=Math.round(.5*o.wa)+Math.round(.5*o.wa*Math.random()),ss(o.h,h),es(h,m,u)}function Bn(o,u){o.H&&Y(o.H,function(h,m){Z(u,m,h)}),o.l&&bc({},function(h,m){Z(u,m,h)})}function zc(o,u,h){h=Math.min(o.i.length,h);var m=o.l?v(o.l.Na,o.l,o):null;t:{var b=o.i;let R=-1;for(;;){let k=["count="+h];R==-1?0<h?(R=b[0].g,k.push("ofs="+R)):R=0:k.push("ofs="+R);let J=!0;for(let dt=0;dt<h;dt++){let Q=b[dt].g,gt=b[dt].map;if(Q-=R,0>Q)R=Math.max(0,b[dt].g-100),J=!1;else try{zd(gt,k,"req"+Q+"_")}catch{m&&m(gt)}}if(J){m=k.join("&");break t}}}return o=o.i.splice(0,h),u.D=o,m}function qc(o){if(!o.g&&!o.u){o.Y=1;var u=o.Fa;In||Ja(),Tn||(In(),Tn=!0),Ui.add(u,o),o.v=0}}function cs(o){return o.g||o.u||3<=o.v?!1:(o.Y++,o.u=Pn(v(o.Fa,o),Gc(o,o.v)),o.v++,!0)}r.Fa=function(){if(this.u=null,jc(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var o=2*this.R;this.j.info("BP detection timer enabled: "+o),this.A=Pn(v(this.ab,this),o)}},r.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,Et(10),Dr(this),jc(this))};function us(o){o.A!=null&&(l.clearTimeout(o.A),o.A=null)}function jc(o){o.g=new oe(o,o.j,"rpc",o.Y),o.m===null&&(o.g.H=o.o),o.g.O=0;var u=Gt(o.qa);Z(u,"RID","rpc"),Z(u,"SID",o.K),Z(u,"AID",o.T),Z(u,"CI",o.F?"0":"1"),!o.F&&o.ja&&Z(u,"TO",o.ja),Z(u,"TYPE","xmlhttp"),Bn(o,u),o.m&&o.o&&os(u,o.m,o.o),o.L&&(o.g.I=o.L);var h=o.g;o=o.ia,h.L=1,h.v=Rr(Gt(u)),h.m=null,h.P=!0,gc(h,o)}r.Za=function(){this.C!=null&&(this.C=null,Dr(this),cs(this),Et(19))};function Vr(o){o.C!=null&&(l.clearTimeout(o.C),o.C=null)}function $c(o,u){var h=null;if(o.g==u){Vr(o),us(o),o.g=null;var m=2}else if(is(o.h,u))h=u.D,Ic(o.h,u),m=1;else return;if(o.G!=0){if(u.o)if(m==1){h=u.m?u.m.length:0,u=Date.now()-u.F;var b=o.B;m=Er(),vt(m,new dc(m,h)),xr(o)}else qc(o);else if(b=u.s,b==3||b==0&&0<u.X||!(m==1&&Gd(o,u)||m==2&&cs(o)))switch(h&&0<h.length&&(u=o.h,u.i=u.i.concat(h)),b){case 1:Se(o,5);break;case 4:Se(o,10);break;case 3:Se(o,6);break;default:Se(o,2)}}}function Gc(o,u){let h=o.Ta+Math.floor(Math.random()*o.cb);return o.isActive()||(h*=2),h*u}function Se(o,u){if(o.j.info("Error code "+u),u==2){var h=v(o.fb,o),m=o.Xa;let b=!m;m=new Ae(m||"//www.google.com/images/cleardot.gif"),l.location&&l.location.protocol=="http"||Ar(m,"https"),Rr(m),b?Fd(m.toString(),h):Bd(m.toString(),h)}else Et(2);o.G=0,o.l&&o.l.sa(u),Kc(o),Bc(o)}r.fb=function(o){o?(this.j.info("Successfully pinged google.com"),Et(2)):(this.j.info("Failed to ping google.com"),Et(1))};function Kc(o){if(o.G=0,o.ka=[],o.l){let u=Tc(o.h);(u.length!=0||o.i.length!=0)&&(V(o.ka,u),V(o.ka,o.i),o.h.i.length=0,O(o.i),o.i.length=0),o.l.ra()}}function Wc(o,u,h){var m=h instanceof Ae?Gt(h):new Ae(h);if(m.g!="")u&&(m.g=u+"."+m.g),Sr(m,m.s);else{var b=l.location;m=b.protocol,u=u?u+"."+b.hostname:b.hostname,b=+b.port;var R=new Ae(null);m&&Ar(R,m),u&&(R.g=u),b&&Sr(R,b),h&&(R.l=h),m=R}return h=o.D,u=o.ya,h&&u&&Z(m,h,u),Z(m,"VER",o.la),Bn(o,m),m}function Hc(o,u,h){if(u&&!o.J)throw Error("Can't create secondary domain capable XhrIo object.");return u=o.Ca&&!o.pa?new rt(new On({eb:h})):new rt(o.pa),u.Ha(o.J),u}r.isActive=function(){return!!this.l&&this.l.isActive(this)};function Qc(){}r=Qc.prototype,r.ua=function(){},r.ta=function(){},r.sa=function(){},r.ra=function(){},r.isActive=function(){return!0},r.Na=function(){};function kr(){}kr.prototype.g=function(o,u){return new It(o,u)};function It(o,u){pt.call(this),this.g=new Fc(u),this.l=o,this.h=u&&u.messageUrlParams||null,o=u&&u.messageHeaders||null,u&&u.clientProtocolHeaderRequired&&(o?o["X-Client-Protocol"]="webchannel":o={"X-Client-Protocol":"webchannel"}),this.g.o=o,o=u&&u.initMessageHeaders||null,u&&u.messageContentType&&(o?o["X-WebChannel-Content-Type"]=u.messageContentType:o={"X-WebChannel-Content-Type":u.messageContentType}),u&&u.va&&(o?o["X-WebChannel-Client-Profile"]=u.va:o={"X-WebChannel-Client-Profile":u.va}),this.g.S=o,(o=u&&u.Sb)&&!q(o)&&(this.g.m=o),this.v=u&&u.supportsCrossDomainXhr||!1,this.u=u&&u.sendRawJson||!1,(u=u&&u.httpSessionIdParam)&&!q(u)&&(this.g.D=u,o=this.h,o!==null&&u in o&&(o=this.h,u in o&&delete o[u])),this.j=new qe(this)}P(It,pt),It.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},It.prototype.close=function(){as(this.g)},It.prototype.o=function(o){var u=this.g;if(typeof o=="string"){var h={};h.__data__=o,o=h}else this.u&&(h={},h.__data__=Qi(o),o=h);u.i.push(new Cd(u.Ya++,o)),u.G==3&&xr(u)},It.prototype.N=function(){this.g.l=null,delete this.j,as(this.g),delete this.g,It.aa.N.call(this)};function Xc(o){Ji.call(this),o.__headers__&&(this.headers=o.__headers__,this.statusCode=o.__status__,delete o.__headers__,delete o.__status__);var u=o.__sm__;if(u){t:{for(let h in u){o=h;break t}o=void 0}(this.i=o)&&(o=this.i,u=u!==null&&o in u?u[o]:void 0),this.data=u}else this.data=o}P(Xc,Ji);function Jc(){Yi.call(this),this.status=1}P(Jc,Yi);function qe(o){this.g=o}P(qe,Qc),qe.prototype.ua=function(){vt(this.g,"a")},qe.prototype.ta=function(o){vt(this.g,new Xc(o))},qe.prototype.sa=function(o){vt(this.g,new Jc)},qe.prototype.ra=function(){vt(this.g,"b")},kr.prototype.createWebChannel=kr.prototype.g,It.prototype.send=It.prototype.o,It.prototype.open=It.prototype.m,It.prototype.close=It.prototype.close,Os=Yt.createWebChannelTransport=function(){return new kr},Ns=Yt.getStatEventTarget=function(){return Er()},ks=Yt.Event=Te,zr=Yt.Stat={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Ir.NO_ERROR=0,Ir.TIMEOUT=8,Ir.HTTP_ERROR=6,Gn=Yt.ErrorCode=Ir,fc.COMPLETE="complete",Vs=Yt.EventType=fc,cc.EventType=Rn,Rn.OPEN="a",Rn.CLOSE="b",Rn.ERROR="c",Rn.MESSAGE="d",pt.prototype.listen=pt.prototype.K,Ke=Yt.WebChannel=cc,cm=Yt.FetchXmlHttpFactory=On,rt.prototype.listenOnce=rt.prototype.L,rt.prototype.getLastError=rt.prototype.Ka,rt.prototype.getLastErrorCode=rt.prototype.Ba,rt.prototype.getStatus=rt.prototype.Z,rt.prototype.getResponseJson=rt.prototype.Oa,rt.prototype.getResponseText=rt.prototype.oa,rt.prototype.send=rt.prototype.ea,rt.prototype.setWithCredentials=rt.prototype.Ha,xs=Yt.XhrIo=rt}).apply(typeof Ur<"u"?Ur:typeof self<"u"?self:typeof window<"u"?window:{});var Vu="@firebase/firestore",ku="4.8.0";var lt=class{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}};lt.UNAUTHENTICATED=new lt(null),lt.GOOGLE_CREDENTIALS=new lt("google-credentials-uid"),lt.FIRST_PARTY=new lt("first-party-uid"),lt.MOCK_USER=new lt("mock-user");var yn="11.10.0";var Ve=new Ge("@firebase/firestore");function We(){return Ve.logLevel}function L(r,...e){if(Ve.logLevel<=W.DEBUG){let n=e.map(Ia);Ve.debug(`Firestore (${yn}): ${r}`,...n)}}function Zt(r,...e){if(Ve.logLevel<=W.ERROR){let n=e.map(Ia);Ve.error(`Firestore (${yn}): ${r}`,...n)}}function pe(r,...e){if(Ve.logLevel<=W.WARN){let n=e.map(Ia);Ve.warn(`Firestore (${yn}): ${r}`,...n)}}function Ia(r){if(typeof r=="string")return r;try{return function(n){return JSON.stringify(n)}(r)}catch{return r}}function F(r,e,n){let i="Unexpected state";typeof e=="string"?i=e:n=e,El(r,i,n)}function El(r,e,n){let i=`FIRESTORE (${yn}) INTERNAL ASSERTION FAILED: ${e} (ID: ${r.toString(16)})`;if(n!==void 0)try{i+=" CONTEXT: "+JSON.stringify(n)}catch{i+=" CONTEXT: "+n}throw Zt(i),new Error(i)}function X(r,e,n,i){let s="Unexpected state";typeof n=="string"?s=n:i=n,r||El(e,s,i)}function U(r,e){return r}var D={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"},M=class extends Wt{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}};var Nt=class{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}};var Hr=class{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}},Us=class{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(lt.UNAUTHENTICATED))}shutdown(){}},zs=class{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}},qs=class{constructor(e){this.t=e,this.currentUser=lt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){X(this.o===void 0,42304);let i=this.i,s=d=>this.i!==i?(i=this.i,n(d)):Promise.resolve(),a=new Nt;this.o=()=>{this.i++,this.currentUser=this.u(),a.resolve(),a=new Nt,e.enqueueRetryable(()=>s(this.currentUser))};let c=()=>{let d=a;e.enqueueRetryable(async()=>{await d.promise,await s(this.currentUser)})},l=d=>{L("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=d,this.o&&(this.auth.addAuthTokenListener(this.o),c())};this.t.onInit(d=>l(d)),setTimeout(()=>{if(!this.auth){let d=this.t.getImmediate({optional:!0});d?l(d):(L("FirebaseAuthCredentialsProvider","Auth not yet detected"),a.resolve(),a=new Nt)}},0),c()}getToken(){let e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(i=>this.i!==e?(L("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):i?(X(typeof i.accessToken=="string",31837,{l:i}),new Hr(i.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){let e=this.auth&&this.auth.getUid();return X(e===null||typeof e=="string",2055,{h:e}),new lt(e)}},js=class{constructor(e,n,i){this.P=e,this.T=n,this.I=i,this.type="FirstParty",this.user=lt.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);let e=this.R();return e&&this.A.set("Authorization",e),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}},$s=class{constructor(e,n,i){this.P=e,this.T=n,this.I=i}getToken(){return Promise.resolve(new js(this.P,this.T,this.I))}start(e,n){e.enqueueRetryable(()=>n(lt.FIRST_PARTY))}shutdown(){}invalidateToken(){}},Qr=class{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}},Gs=class{constructor(e,n){this.V=n,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,Au(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,n){X(this.o===void 0,3512);let i=a=>{a.error!=null&&L("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${a.error.message}`);let c=a.token!==this.m;return this.m=a.token,L("FirebaseAppCheckTokenProvider",`Received ${c?"new":"existing"} token.`),c?n(a.token):Promise.resolve()};this.o=a=>{e.enqueueRetryable(()=>i(a))};let s=a=>{L("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=a,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit(a=>s(a)),setTimeout(()=>{if(!this.appCheck){let a=this.V.getImmediate({optional:!0});a?s(a):L("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.p)return Promise.resolve(new Qr(this.p));let e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(X(typeof n.token=="string",44558,{tokenResult:n}),this.m=n.token,new Qr(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}};function um(r){let e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(r);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let i=0;i<r;i++)n[i]=Math.floor(256*Math.random());return n}function Il(){return new TextEncoder}var Jn=class{static newId(){let e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=62*Math.floor(4.129032258064516),i="";for(;i.length<20;){let s=um(40);for(let a=0;a<s.length;++a)i.length<20&&s[a]<n&&(i+=e.charAt(s[a]%62))}return i}};function $(r,e){return r<e?-1:r>e?1:0}function Ks(r,e){let n=0;for(;n<r.length&&n<e.length;){let i=r.codePointAt(n),s=e.codePointAt(n);if(i!==s){if(i<128&&s<128)return $(i,s);{let a=Il(),c=lm(a.encode(Nu(r,n)),a.encode(Nu(e,n)));return c!==0?c:$(i,s)}}n+=i>65535?2:1}return $(r.length,e.length)}function Nu(r,e){return r.codePointAt(e)>65535?r.substring(e,e+2):r.substring(e,e+1)}function lm(r,e){for(let n=0;n<r.length&&n<e.length;++n)if(r[n]!==e[n])return $(r[n],e[n]);return $(r.length,e.length)}function en(r,e,n){return r.length===e.length&&r.every((i,s)=>n(i,e[s]))}var Ou="__name__",Xr=class r{constructor(e,n,i){n===void 0?n=0:n>e.length&&F(637,{offset:n,range:e.length}),i===void 0?i=e.length-n:i>e.length-n&&F(1746,{length:i,range:e.length-n}),this.segments=e,this.offset=n,this.len=i}get length(){return this.len}isEqual(e){return r.comparator(this,e)===0}child(e){let n=this.segments.slice(this.offset,this.limit());return e instanceof r?e.forEach(i=>{n.push(i)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,i=this.limit();n<i;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){let i=Math.min(e.length,n.length);for(let s=0;s<i;s++){let a=r.compareSegments(e.get(s),n.get(s));if(a!==0)return a}return $(e.length,n.length)}static compareSegments(e,n){let i=r.isNumericId(e),s=r.isNumericId(n);return i&&!s?-1:!i&&s?1:i&&s?r.extractNumericId(e).compare(r.extractNumericId(n)):Ks(e,n)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return Jt.fromString(e.substring(4,e.length-2))}},st=class r extends Xr{construct(e,n,i){return new r(e,n,i)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){let n=[];for(let i of e){if(i.indexOf("//")>=0)throw new M(D.INVALID_ARGUMENT,`Invalid segment (${i}). Paths must not contain // in them.`);n.push(...i.split("/").filter(s=>s.length>0))}return new r(n)}static emptyPath(){return new r([])}},hm=/^[_a-zA-Z][_a-zA-Z0-9]*$/,bt=class r extends Xr{construct(e,n,i){return new r(e,n,i)}static isValidIdentifier(e){return hm.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),r.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===Ou}static keyField(){return new r([Ou])}static fromServerFormat(e){let n=[],i="",s=0,a=()=>{if(i.length===0)throw new M(D.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(i),i=""},c=!1;for(;s<e.length;){let l=e[s];if(l==="\\"){if(s+1===e.length)throw new M(D.INVALID_ARGUMENT,"Path has trailing escape character: "+e);let d=e[s+1];if(d!=="\\"&&d!=="."&&d!=="`")throw new M(D.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);i+=d,s+=2}else l==="`"?(c=!c,s++):l!=="."||c?(i+=l,s++):(a(),s++)}if(a(),c)throw new M(D.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new r(n)}static emptyPath(){return new r([])}};var B=class r{constructor(e){this.path=e}static fromPath(e){return new r(st.fromString(e))}static fromName(e){return new r(st.fromString(e).popFirst(5))}static empty(){return new r(st.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&st.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return st.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new r(new st(e.slice()))}};function dm(r,e,n){if(!n)throw new M(D.INVALID_ARGUMENT,`Function ${r}() cannot be called with an empty ${e}.`)}function fm(r,e,n,i){if(e===!0&&i===!0)throw new M(D.INVALID_ARGUMENT,`${r} and ${n} cannot be used together.`)}function Lu(r){if(!B.isDocumentKey(r))throw new M(D.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${r} has ${r.length}.`)}function Tl(r){return typeof r=="object"&&r!==null&&(Object.getPrototypeOf(r)===Object.prototype||Object.getPrototypeOf(r)===null)}function Ta(r){if(r===void 0)return"undefined";if(r===null)return"null";if(typeof r=="string")return r.length>20&&(r=`${r.substring(0,20)}...`),JSON.stringify(r);if(typeof r=="number"||typeof r=="boolean")return""+r;if(typeof r=="object"){if(r instanceof Array)return"an array";{let e=function(i){return i.constructor?i.constructor.name:null}(r);return e?`a custom ${e} object`:"an object"}}return typeof r=="function"?"a function":F(12329,{type:typeof r})}function Ot(r,e){if("_delegate"in r&&(r=r._delegate),!(r instanceof e)){if(e.name===r.constructor.name)throw new M(D.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{let n=Ta(r);throw new M(D.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return r}function ct(r,e){let n={typeString:r};return e&&(n.value=e),n}function hr(r,e){if(!Tl(r))throw new M(D.INVALID_ARGUMENT,"JSON must be an object");let n;for(let i in e)if(e[i]){let s=e[i].typeString,a="value"in e[i]?{value:e[i].value}:void 0;if(!(i in r)){n=`JSON missing required field: '${i}'`;break}let c=r[i];if(s&&typeof c!==s){n=`JSON field '${i}' must be a ${s}.`;break}if(a!==void 0&&c!==a.value){n=`Expected '${i}' field to equal '${a.value}'`;break}}if(n)throw new M(D.INVALID_ARGUMENT,n);return!0}var Mu=-62135596800,Fu=1e6,tt=class r{static now(){return r.fromMillis(Date.now())}static fromDate(e){return r.fromMillis(e.getTime())}static fromMillis(e){let n=Math.floor(e/1e3),i=Math.floor((e-1e3*n)*Fu);return new r(n,i)}constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new M(D.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new M(D.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<Mu)throw new M(D.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new M(D.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/Fu}_compareTo(e){return this.seconds===e.seconds?$(this.nanoseconds,e.nanoseconds):$(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:r._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(hr(e,r._jsonSchema))return new r(e.seconds,e.nanoseconds)}valueOf(){let e=this.seconds-Mu;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}};tt._jsonSchemaVersion="firestore/timestamp/1.0",tt._jsonSchema={type:ct("string",tt._jsonSchemaVersion),seconds:ct("number"),nanoseconds:ct("number")};var z=class r{static fromTimestamp(e){return new r(e)}static min(){return new r(new tt(0,0))}static max(){return new r(new tt(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}};var Yn=-1,Ws=class{constructor(e,n,i,s){this.indexId=e,this.collectionGroup=n,this.fields=i,this.indexState=s}};Ws.UNKNOWN_ID=-1;function mm(r,e){let n=r.toTimestamp().seconds,i=r.toTimestamp().nanoseconds+1,s=z.fromTimestamp(i===1e9?new tt(n+1,0):new tt(n,i));return new ke(s,B.empty(),e)}function pm(r){return new ke(r.readTime,r.key,Yn)}var ke=class r{constructor(e,n,i){this.readTime=e,this.documentKey=n,this.largestBatchId=i}static min(){return new r(z.min(),B.empty(),Yn)}static max(){return new r(z.max(),B.empty(),Yn)}};function gm(r,e){let n=r.readTime.compareTo(e.readTime);return n!==0?n:(n=B.comparator(r.documentKey,e.documentKey),n!==0?n:$(r.largestBatchId,e.largestBatchId))}var ym="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.",Hs=class{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}};async function _n(r){if(r.code!==D.FAILED_PRECONDITION||r.message!==ym)throw r;L("LocalStore","Unexpectedly lost primary lease")}var x=class r{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&F(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new r((i,s)=>{this.nextCallback=a=>{this.wrapSuccess(e,a).next(i,s)},this.catchCallback=a=>{this.wrapFailure(n,a).next(i,s)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{let n=e();return n instanceof r?n:r.resolve(n)}catch(n){return r.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):r.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):r.reject(n)}static resolve(e){return new r((n,i)=>{n(e)})}static reject(e){return new r((n,i)=>{i(e)})}static waitFor(e){return new r((n,i)=>{let s=0,a=0,c=!1;e.forEach(l=>{++s,l.next(()=>{++a,c&&a===s&&n()},d=>i(d))}),c=!0,a===s&&n()})}static or(e){let n=r.resolve(!1);for(let i of e)n=n.next(s=>s?r.resolve(s):i());return n}static forEach(e,n){let i=[];return e.forEach((s,a)=>{i.push(n.call(this,s,a))}),this.waitFor(i)}static mapArray(e,n){return new r((i,s)=>{let a=e.length,c=new Array(a),l=0;for(let d=0;d<a;d++){let f=d;n(e[f]).next(p=>{c[f]=p,++l,l===a&&i(c)},p=>s(p))}})}static doWhile(e,n){return new r((i,s)=>{let a=()=>{e()===!0?n().next(()=>{a()},s):i()};a()})}};function _m(r){let e=r.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function wn(r){return r.name==="IndexedDbTransactionError"}var nn=class{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=i=>this._e(i),this.ae=i=>n.writeSequenceNumber(i))}_e(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){let e=++this.previousValue;return this.ae&&this.ae(e),e}};nn.ue=-1;var ba=-1;function Pi(r){return r==null}function Zn(r){return r===0&&1/r==-1/0}function wm(r){return typeof r=="number"&&Number.isInteger(r)&&!Zn(r)&&r<=Number.MAX_SAFE_INTEGER&&r>=Number.MIN_SAFE_INTEGER}var bl="";function vm(r){let e="";for(let n=0;n<r.length;n++)e.length>0&&(e=Bu(e)),e=Em(r.get(n),e);return Bu(e)}function Em(r,e){let n=e,i=r.length;for(let s=0;s<i;s++){let a=r.charAt(s);switch(a){case"\0":n+="";break;case bl:n+="";break;default:n+=a}}return n}function Bu(r){return r+bl+""}var Im="remoteDocuments",Al="owner";var Sl="mutationQueues";var Rl="mutations";var Cl="documentMutations",Tm="remoteDocumentsV14";var Pl="remoteDocumentGlobal";var Dl="targets";var xl="targetDocuments";var Vl="targetGlobal",kl="collectionParents";var Nl="clientMetadata";var Ol="bundles";var Ll="namedQueries";var bm="indexConfiguration";var Am="indexState";var Sm="indexEntries";var Ml="documentOverlays";var Rm="globals";var Cm=[Sl,Rl,Cl,Im,Dl,Al,Vl,xl,Nl,Pl,kl,Ol,Ll],yy=[...Cm,Ml],Pm=[Sl,Rl,Cl,Tm,Dl,Al,Vl,xl,Nl,Pl,kl,Ol,Ll,Ml],Dm=Pm,xm=[...Dm,bm,Am,Sm];var _y=[...xm,Rm];function Uu(r){let e=0;for(let n in r)Object.prototype.hasOwnProperty.call(r,n)&&e++;return e}function ve(r,e){for(let n in r)Object.prototype.hasOwnProperty.call(r,n)&&e(n,r[n])}function Fl(r){for(let e in r)if(Object.prototype.hasOwnProperty.call(r,e))return!1;return!0}var it=class r{constructor(e,n){this.comparator=e,this.root=n||Lt.EMPTY}insert(e,n){return new r(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,Lt.BLACK,null,null))}remove(e){return new r(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Lt.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){let i=this.comparator(e,n.key);if(i===0)return n.value;i<0?n=n.left:i>0&&(n=n.right)}return null}indexOf(e){let n=0,i=this.root;for(;!i.isEmpty();){let s=this.comparator(e,i.key);if(s===0)return n+i.left.size;s<0?i=i.left:(n+=i.left.size+1,i=i.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,i)=>(e(n,i),!1))}toString(){let e=[];return this.inorderTraversal((n,i)=>(e.push(`${n}:${i}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Je(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Je(this.root,e,this.comparator,!1)}getReverseIterator(){return new Je(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Je(this.root,e,this.comparator,!0)}},Je=class{constructor(e,n,i,s){this.isReverse=s,this.nodeStack=[];let a=1;for(;!e.isEmpty();)if(a=n?i(e.key,n):1,n&&s&&(a*=-1),a<0)e=this.isReverse?e.left:e.right;else{if(a===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop(),n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;let e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}},Lt=class r{constructor(e,n,i,s,a){this.key=e,this.value=n,this.color=i??r.RED,this.left=s??r.EMPTY,this.right=a??r.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,i,s,a){return new r(e??this.key,n??this.value,i??this.color,s??this.left,a??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,i){let s=this,a=i(e,s.key);return s=a<0?s.copy(null,null,null,s.left.insert(e,n,i),null):a===0?s.copy(null,n,null,null,null):s.copy(null,null,null,null,s.right.insert(e,n,i)),s.fixUp()}removeMin(){if(this.left.isEmpty())return r.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let i,s=this;if(n(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),n(e,s.key)===0){if(s.right.isEmpty())return r.EMPTY;i=s.right.min(),s=s.copy(i.key,i.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){let e=this.copy(null,null,r.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){let e=this.copy(null,null,r.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){let e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){let e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw F(43730,{key:this.key,value:this.value});if(this.right.isRed())throw F(14113,{key:this.key,value:this.value});let e=this.left.check();if(e!==this.right.check())throw F(27949);return e+(this.isRed()?0:1)}};Lt.EMPTY=null,Lt.RED=!0,Lt.BLACK=!1;Lt.EMPTY=new class{constructor(){this.size=0}get key(){throw F(57766)}get value(){throw F(16141)}get color(){throw F(16727)}get left(){throw F(29726)}get right(){throw F(36894)}copy(e,n,i,s,a){return this}insert(e,n,i){return new Lt(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};var ht=class r{constructor(e){this.comparator=e,this.data=new it(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,i)=>(e(n),!1))}forEachInRange(e,n){let i=this.data.getIteratorFrom(e[0]);for(;i.hasNext();){let s=i.getNext();if(this.comparator(s.key,e[1])>=0)return;n(s.key)}}forEachWhile(e,n){let i;for(i=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();i.hasNext();)if(!e(i.getNext().key))return}firstAfterOrEqual(e){let n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new Jr(this.data.getIterator())}getIteratorFrom(e){return new Jr(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(i=>{n=n.add(i)}),n}isEqual(e){if(!(e instanceof r)||this.size!==e.size)return!1;let n=this.data.getIterator(),i=e.data.getIterator();for(;n.hasNext();){let s=n.getNext().key,a=i.getNext().key;if(this.comparator(s,a)!==0)return!1}return!0}toArray(){let e=[];return this.forEach(n=>{e.push(n)}),e}toString(){let e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){let n=new r(this.comparator);return n.data=e,n}},Jr=class{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}};var Ct=class r{constructor(e){this.fields=e,e.sort(bt.comparator)}static empty(){return new r([])}unionWith(e){let n=new ht(bt.comparator);for(let i of this.fields)n=n.add(i);for(let i of e)n=n.add(i);return new r(n.toArray())}covers(e){for(let n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return en(this.fields,e.fields,(n,i)=>n.isEqual(i))}};var Yr=class extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}};var wt=class r{constructor(e){this.binaryString=e}static fromBase64String(e){let n=function(s){try{return atob(s)}catch(a){throw typeof DOMException<"u"&&a instanceof DOMException?new Yr("Invalid base64 string: "+a):a}}(e);return new r(n)}static fromUint8Array(e){let n=function(s){let a="";for(let c=0;c<s.length;++c)a+=String.fromCharCode(s[c]);return a}(e);return new r(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){let i=new Uint8Array(n.length);for(let s=0;s<n.length;s++)i[s]=n.charCodeAt(s);return i}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return $(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}};wt.EMPTY_BYTE_STRING=new wt("");var Vm=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function te(r){if(X(!!r,39018),typeof r=="string"){let e=0,n=Vm.exec(r);if(X(!!n,46558,{timestamp:r}),n[1]){let s=n[1];s=(s+"000000000").substr(0,9),e=Number(s)}let i=new Date(r);return{seconds:Math.floor(i.getTime()/1e3),nanos:e}}return{seconds:nt(r.seconds),nanos:nt(r.nanos)}}function nt(r){return typeof r=="number"?r:typeof r=="string"?Number(r):0}function ee(r){return typeof r=="string"?wt.fromBase64String(r):wt.fromUint8Array(r)}var Bl="server_timestamp",Ul="__type__",zl="__previous_value__",ql="__local_write_time__";function Aa(r){var e,n;return((n=(((e=r?.mapValue)===null||e===void 0?void 0:e.fields)||{})[Ul])===null||n===void 0?void 0:n.stringValue)===Bl}function Di(r){let e=r.mapValue.fields[zl];return Aa(e)?Di(e):e}function tr(r){let e=te(r.mapValue.fields[ql].timestampValue);return new tt(e.seconds,e.nanos)}var Qs=class{constructor(e,n,i,s,a,c,l,d,f,p){this.databaseId=e,this.appId=n,this.persistenceKey=i,this.host=s,this.ssl=a,this.forceLongPolling=c,this.autoDetectLongPolling=l,this.longPollingOptions=d,this.useFetchStreams=f,this.isUsingEmulator=p}},Zr="(default)",ti=class r{constructor(e,n){this.projectId=e,this.database=n||Zr}static empty(){return new r("","")}get isDefaultDatabase(){return this.database===Zr}isEqual(e){return e instanceof r&&e.projectId===this.projectId&&e.database===this.database}};var Sa="__type__",jl="__max__",qr={mapValue:{fields:{__type__:{stringValue:jl}}}},Ra="__vector__",rn="value";function ge(r){return"nullValue"in r?0:"booleanValue"in r?1:"integerValue"in r||"doubleValue"in r?2:"timestampValue"in r?3:"stringValue"in r?5:"bytesValue"in r?6:"referenceValue"in r?7:"geoPointValue"in r?8:"arrayValue"in r?9:"mapValue"in r?Aa(r)?4:Gl(r)?9007199254740991:$l(r)?10:11:F(28295,{value:r})}function Bt(r,e){if(r===e)return!0;let n=ge(r);if(n!==ge(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return r.booleanValue===e.booleanValue;case 4:return tr(r).isEqual(tr(e));case 3:return function(s,a){if(typeof s.timestampValue=="string"&&typeof a.timestampValue=="string"&&s.timestampValue.length===a.timestampValue.length)return s.timestampValue===a.timestampValue;let c=te(s.timestampValue),l=te(a.timestampValue);return c.seconds===l.seconds&&c.nanos===l.nanos}(r,e);case 5:return r.stringValue===e.stringValue;case 6:return function(s,a){return ee(s.bytesValue).isEqual(ee(a.bytesValue))}(r,e);case 7:return r.referenceValue===e.referenceValue;case 8:return function(s,a){return nt(s.geoPointValue.latitude)===nt(a.geoPointValue.latitude)&&nt(s.geoPointValue.longitude)===nt(a.geoPointValue.longitude)}(r,e);case 2:return function(s,a){if("integerValue"in s&&"integerValue"in a)return nt(s.integerValue)===nt(a.integerValue);if("doubleValue"in s&&"doubleValue"in a){let c=nt(s.doubleValue),l=nt(a.doubleValue);return c===l?Zn(c)===Zn(l):isNaN(c)&&isNaN(l)}return!1}(r,e);case 9:return en(r.arrayValue.values||[],e.arrayValue.values||[],Bt);case 10:case 11:return function(s,a){let c=s.mapValue.fields||{},l=a.mapValue.fields||{};if(Uu(c)!==Uu(l))return!1;for(let d in c)if(c.hasOwnProperty(d)&&(l[d]===void 0||!Bt(c[d],l[d])))return!1;return!0}(r,e);default:return F(52216,{left:r})}}function er(r,e){return(r.values||[]).find(n=>Bt(n,e))!==void 0}function sn(r,e){if(r===e)return 0;let n=ge(r),i=ge(e);if(n!==i)return $(n,i);switch(n){case 0:case 9007199254740991:return 0;case 1:return $(r.booleanValue,e.booleanValue);case 2:return function(a,c){let l=nt(a.integerValue||a.doubleValue),d=nt(c.integerValue||c.doubleValue);return l<d?-1:l>d?1:l===d?0:isNaN(l)?isNaN(d)?0:-1:1}(r,e);case 3:return zu(r.timestampValue,e.timestampValue);case 4:return zu(tr(r),tr(e));case 5:return Ks(r.stringValue,e.stringValue);case 6:return function(a,c){let l=ee(a),d=ee(c);return l.compareTo(d)}(r.bytesValue,e.bytesValue);case 7:return function(a,c){let l=a.split("/"),d=c.split("/");for(let f=0;f<l.length&&f<d.length;f++){let p=$(l[f],d[f]);if(p!==0)return p}return $(l.length,d.length)}(r.referenceValue,e.referenceValue);case 8:return function(a,c){let l=$(nt(a.latitude),nt(c.latitude));return l!==0?l:$(nt(a.longitude),nt(c.longitude))}(r.geoPointValue,e.geoPointValue);case 9:return qu(r.arrayValue,e.arrayValue);case 10:return function(a,c){var l,d,f,p;let w=a.fields||{},v=c.fields||{},C=(l=w[rn])===null||l===void 0?void 0:l.arrayValue,P=(d=v[rn])===null||d===void 0?void 0:d.arrayValue,O=$(((f=C?.values)===null||f===void 0?void 0:f.length)||0,((p=P?.values)===null||p===void 0?void 0:p.length)||0);return O!==0?O:qu(C,P)}(r.mapValue,e.mapValue);case 11:return function(a,c){if(a===qr.mapValue&&c===qr.mapValue)return 0;if(a===qr.mapValue)return 1;if(c===qr.mapValue)return-1;let l=a.fields||{},d=Object.keys(l),f=c.fields||{},p=Object.keys(f);d.sort(),p.sort();for(let w=0;w<d.length&&w<p.length;++w){let v=Ks(d[w],p[w]);if(v!==0)return v;let C=sn(l[d[w]],f[p[w]]);if(C!==0)return C}return $(d.length,p.length)}(r.mapValue,e.mapValue);default:throw F(23264,{le:n})}}function zu(r,e){if(typeof r=="string"&&typeof e=="string"&&r.length===e.length)return $(r,e);let n=te(r),i=te(e),s=$(n.seconds,i.seconds);return s!==0?s:$(n.nanos,i.nanos)}function qu(r,e){let n=r.values||[],i=e.values||[];for(let s=0;s<n.length&&s<i.length;++s){let a=sn(n[s],i[s]);if(a)return a}return $(n.length,i.length)}function on(r){return Xs(r)}function Xs(r){return"nullValue"in r?"null":"booleanValue"in r?""+r.booleanValue:"integerValue"in r?""+r.integerValue:"doubleValue"in r?""+r.doubleValue:"timestampValue"in r?function(n){let i=te(n);return`time(${i.seconds},${i.nanos})`}(r.timestampValue):"stringValue"in r?r.stringValue:"bytesValue"in r?function(n){return ee(n).toBase64()}(r.bytesValue):"referenceValue"in r?function(n){return B.fromName(n).toString()}(r.referenceValue):"geoPointValue"in r?function(n){return`geo(${n.latitude},${n.longitude})`}(r.geoPointValue):"arrayValue"in r?function(n){let i="[",s=!0;for(let a of n.values||[])s?s=!1:i+=",",i+=Xs(a);return i+"]"}(r.arrayValue):"mapValue"in r?function(n){let i=Object.keys(n.fields||{}).sort(),s="{",a=!0;for(let c of i)a?a=!1:s+=",",s+=`${c}:${Xs(n.fields[c])}`;return s+"}"}(r.mapValue):F(61005,{value:r})}function Gr(r){switch(ge(r)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:let e=Di(r);return e?16+Gr(e):16;case 5:return 2*r.stringValue.length;case 6:return ee(r.bytesValue).approximateByteSize();case 7:return r.referenceValue.length;case 9:return function(i){return(i.values||[]).reduce((s,a)=>s+Gr(a),0)}(r.arrayValue);case 10:case 11:return function(i){let s=0;return ve(i.fields,(a,c)=>{s+=a.length+Gr(c)}),s}(r.mapValue);default:throw F(13486,{value:r})}}function Js(r){return!!r&&"integerValue"in r}function Ca(r){return!!r&&"arrayValue"in r}function ju(r){return!!r&&"nullValue"in r}function $u(r){return!!r&&"doubleValue"in r&&isNaN(Number(r.doubleValue))}function Kr(r){return!!r&&"mapValue"in r}function $l(r){var e,n;return((n=(((e=r?.mapValue)===null||e===void 0?void 0:e.fields)||{})[Sa])===null||n===void 0?void 0:n.stringValue)===Ra}function Wn(r){if(r.geoPointValue)return{geoPointValue:Object.assign({},r.geoPointValue)};if(r.timestampValue&&typeof r.timestampValue=="object")return{timestampValue:Object.assign({},r.timestampValue)};if(r.mapValue){let e={mapValue:{fields:{}}};return ve(r.mapValue.fields,(n,i)=>e.mapValue.fields[n]=Wn(i)),e}if(r.arrayValue){let e={arrayValue:{values:[]}};for(let n=0;n<(r.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Wn(r.arrayValue.values[n]);return e}return Object.assign({},r)}function Gl(r){return(((r.mapValue||{}).fields||{}).__type__||{}).stringValue===jl}var vy={mapValue:{fields:{[Sa]:{stringValue:Ra},[rn]:{arrayValue:{}}}}};var Tt=class r{constructor(e){this.value=e}static empty(){return new r({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let i=0;i<e.length-1;++i)if(n=(n.mapValue.fields||{})[e.get(i)],!Kr(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Wn(n)}setAll(e){let n=bt.emptyPath(),i={},s=[];e.forEach((c,l)=>{if(!n.isImmediateParentOf(l)){let d=this.getFieldsMap(n);this.applyChanges(d,i,s),i={},s=[],n=l.popLast()}c?i[l.lastSegment()]=Wn(c):s.push(l.lastSegment())});let a=this.getFieldsMap(n);this.applyChanges(a,i,s)}delete(e){let n=this.field(e.popLast());Kr(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return Bt(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let i=0;i<e.length;++i){let s=n.mapValue.fields[e.get(i)];Kr(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},n.mapValue.fields[e.get(i)]=s),n=s}return n.mapValue.fields}applyChanges(e,n,i){ve(n,(s,a)=>e[s]=a);for(let s of i)delete e[s]}clone(){return new r(Wn(this.value))}};function Kl(r){let e=[];return ve(r.fields,(n,i)=>{let s=new bt([n]);if(Kr(i)){let a=Kl(i.mapValue).fields;if(a.length===0)e.push(s);else for(let c of a)e.push(s.child(c))}else e.push(s)}),new Ct(e)}var Dt=class r{constructor(e,n,i,s,a,c,l){this.key=e,this.documentType=n,this.version=i,this.readTime=s,this.createTime=a,this.data=c,this.documentState=l}static newInvalidDocument(e){return new r(e,0,z.min(),z.min(),z.min(),Tt.empty(),0)}static newFoundDocument(e,n,i,s){return new r(e,1,n,z.min(),i,s,0)}static newNoDocument(e,n){return new r(e,2,n,z.min(),z.min(),Tt.empty(),0)}static newUnknownDocument(e,n){return new r(e,3,n,z.min(),z.min(),Tt.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(z.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Tt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Tt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=z.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof r&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new r(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}};var an=class{constructor(e,n){this.position=e,this.inclusive=n}};function Gu(r,e,n){let i=0;for(let s=0;s<r.position.length;s++){let a=e[s],c=r.position[s];if(a.field.isKeyField()?i=B.comparator(B.fromName(c.referenceValue),n.key):i=sn(c,n.data.field(a.field)),a.dir==="desc"&&(i*=-1),i!==0)break}return i}function Ku(r,e){if(r===null)return e===null;if(e===null||r.inclusive!==e.inclusive||r.position.length!==e.position.length)return!1;for(let n=0;n<r.position.length;n++)if(!Bt(r.position[n],e.position[n]))return!1;return!0}var cn=class{constructor(e,n="asc"){this.field=e,this.dir=n}};function km(r,e){return r.dir===e.dir&&r.field.isEqual(e.field)}var ei=class{},ut=class r extends ei{constructor(e,n,i){super(),this.field=e,this.op=n,this.value=i}static create(e,n,i){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,i):new Zs(e,n,i):n==="array-contains"?new no(e,i):n==="in"?new ro(e,i):n==="not-in"?new io(e,i):n==="array-contains-any"?new so(e,i):new r(e,n,i)}static createKeyFieldInFilter(e,n,i){return n==="in"?new to(e,i):new eo(e,i)}matches(e){let n=e.data.field(this.field);return this.op==="!="?n!==null&&n.nullValue===void 0&&this.matchesComparison(sn(n,this.value)):n!==null&&ge(this.value)===ge(n)&&this.matchesComparison(sn(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return F(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}},Ut=class r extends ei{constructor(e,n){super(),this.filters=e,this.op=n,this.he=null}static create(e,n){return new r(e,n)}matches(e){return Wl(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.he!==null||(this.he=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.he}getFilters(){return Object.assign([],this.filters)}};function Wl(r){return r.op==="and"}function Hl(r){return Nm(r)&&Wl(r)}function Nm(r){for(let e of r.filters)if(e instanceof Ut)return!1;return!0}function Ys(r){if(r instanceof ut)return r.field.canonicalString()+r.op.toString()+on(r.value);if(Hl(r))return r.filters.map(e=>Ys(e)).join(",");{let e=r.filters.map(n=>Ys(n)).join(",");return`${r.op}(${e})`}}function Ql(r,e){return r instanceof ut?function(i,s){return s instanceof ut&&i.op===s.op&&i.field.isEqual(s.field)&&Bt(i.value,s.value)}(r,e):r instanceof Ut?function(i,s){return s instanceof Ut&&i.op===s.op&&i.filters.length===s.filters.length?i.filters.reduce((a,c,l)=>a&&Ql(c,s.filters[l]),!0):!1}(r,e):void F(19439)}function Xl(r){return r instanceof ut?function(n){return`${n.field.canonicalString()} ${n.op} ${on(n.value)}`}(r):r instanceof Ut?function(n){return n.op.toString()+" {"+n.getFilters().map(Xl).join(" ,")+"}"}(r):"Filter"}var Zs=class extends ut{constructor(e,n,i){super(e,n,i),this.key=B.fromName(i.referenceValue)}matches(e){let n=B.comparator(e.key,this.key);return this.matchesComparison(n)}},to=class extends ut{constructor(e,n){super(e,"in",n),this.keys=Jl("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}},eo=class extends ut{constructor(e,n){super(e,"not-in",n),this.keys=Jl("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}};function Jl(r,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(i=>B.fromName(i.referenceValue))}var no=class extends ut{constructor(e,n){super(e,"array-contains",n)}matches(e){let n=e.data.field(this.field);return Ca(n)&&er(n.arrayValue,this.value)}},ro=class extends ut{constructor(e,n){super(e,"in",n)}matches(e){let n=e.data.field(this.field);return n!==null&&er(this.value.arrayValue,n)}},io=class extends ut{constructor(e,n){super(e,"not-in",n)}matches(e){if(er(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;let n=e.data.field(this.field);return n!==null&&n.nullValue===void 0&&!er(this.value.arrayValue,n)}},so=class extends ut{constructor(e,n){super(e,"array-contains-any",n)}matches(e){let n=e.data.field(this.field);return!(!Ca(n)||!n.arrayValue.values)&&n.arrayValue.values.some(i=>er(this.value.arrayValue,i))}};var oo=class{constructor(e,n=null,i=[],s=[],a=null,c=null,l=null){this.path=e,this.collectionGroup=n,this.orderBy=i,this.filters=s,this.limit=a,this.startAt=c,this.endAt=l,this.Pe=null}};function Wu(r,e=null,n=[],i=[],s=null,a=null,c=null){return new oo(r,e,n,i,s,a,c)}function Pa(r){let e=U(r);if(e.Pe===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(i=>Ys(i)).join(","),n+="|ob:",n+=e.orderBy.map(i=>function(a){return a.field.canonicalString()+a.dir}(i)).join(","),Pi(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(i=>on(i)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(i=>on(i)).join(",")),e.Pe=n}return e.Pe}function Da(r,e){if(r.limit!==e.limit||r.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<r.orderBy.length;n++)if(!km(r.orderBy[n],e.orderBy[n]))return!1;if(r.filters.length!==e.filters.length)return!1;for(let n=0;n<r.filters.length;n++)if(!Ql(r.filters[n],e.filters[n]))return!1;return r.collectionGroup===e.collectionGroup&&!!r.path.isEqual(e.path)&&!!Ku(r.startAt,e.startAt)&&Ku(r.endAt,e.endAt)}function ao(r){return B.isDocumentKey(r.path)&&r.collectionGroup===null&&r.filters.length===0}var un=class{constructor(e,n=null,i=[],s=[],a=null,c="F",l=null,d=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=i,this.filters=s,this.limit=a,this.limitType=c,this.startAt=l,this.endAt=d,this.Te=null,this.Ie=null,this.de=null,this.startAt,this.endAt}};function Om(r,e,n,i,s,a,c,l){return new un(r,e,n,i,s,a,c,l)}function xi(r){return new un(r)}function Hu(r){return r.filters.length===0&&r.limit===null&&r.startAt==null&&r.endAt==null&&(r.explicitOrderBy.length===0||r.explicitOrderBy.length===1&&r.explicitOrderBy[0].field.isKeyField())}function Lm(r){return r.collectionGroup!==null}function Hn(r){let e=U(r);if(e.Te===null){e.Te=[];let n=new Set;for(let a of e.explicitOrderBy)e.Te.push(a),n.add(a.field.canonicalString());let i=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(c){let l=new ht(bt.comparator);return c.filters.forEach(d=>{d.getFlattenedFilters().forEach(f=>{f.isInequality()&&(l=l.add(f.field))})}),l})(e).forEach(a=>{n.has(a.canonicalString())||a.isKeyField()||e.Te.push(new cn(a,i))}),n.has(bt.keyField().canonicalString())||e.Te.push(new cn(bt.keyField(),i))}return e.Te}function Mt(r){let e=U(r);return e.Ie||(e.Ie=Mm(e,Hn(r))),e.Ie}function Mm(r,e){if(r.limitType==="F")return Wu(r.path,r.collectionGroup,e,r.filters,r.limit,r.startAt,r.endAt);{e=e.map(s=>{let a=s.dir==="desc"?"asc":"desc";return new cn(s.field,a)});let n=r.endAt?new an(r.endAt.position,r.endAt.inclusive):null,i=r.startAt?new an(r.startAt.position,r.startAt.inclusive):null;return Wu(r.path,r.collectionGroup,e,r.filters,r.limit,n,i)}}function co(r,e,n){return new un(r.path,r.collectionGroup,r.explicitOrderBy.slice(),r.filters.slice(),e,n,r.startAt,r.endAt)}function Vi(r,e){return Da(Mt(r),Mt(e))&&r.limitType===e.limitType}function Yl(r){return`${Pa(Mt(r))}|lt:${r.limitType}`}function He(r){return`Query(target=${function(n){let i=n.path.canonicalString();return n.collectionGroup!==null&&(i+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(i+=`, filters: [${n.filters.map(s=>Xl(s)).join(", ")}]`),Pi(n.limit)||(i+=", limit: "+n.limit),n.orderBy.length>0&&(i+=`, orderBy: [${n.orderBy.map(s=>function(c){return`${c.field.canonicalString()} (${c.dir})`}(s)).join(", ")}]`),n.startAt&&(i+=", startAt: ",i+=n.startAt.inclusive?"b:":"a:",i+=n.startAt.position.map(s=>on(s)).join(",")),n.endAt&&(i+=", endAt: ",i+=n.endAt.inclusive?"a:":"b:",i+=n.endAt.position.map(s=>on(s)).join(",")),`Target(${i})`}(Mt(r))}; limitType=${r.limitType})`}function ki(r,e){return e.isFoundDocument()&&function(i,s){let a=s.key.path;return i.collectionGroup!==null?s.key.hasCollectionId(i.collectionGroup)&&i.path.isPrefixOf(a):B.isDocumentKey(i.path)?i.path.isEqual(a):i.path.isImmediateParentOf(a)}(r,e)&&function(i,s){for(let a of Hn(i))if(!a.field.isKeyField()&&s.data.field(a.field)===null)return!1;return!0}(r,e)&&function(i,s){for(let a of i.filters)if(!a.matches(s))return!1;return!0}(r,e)&&function(i,s){return!(i.startAt&&!function(c,l,d){let f=Gu(c,l,d);return c.inclusive?f<=0:f<0}(i.startAt,Hn(i),s)||i.endAt&&!function(c,l,d){let f=Gu(c,l,d);return c.inclusive?f>=0:f>0}(i.endAt,Hn(i),s))}(r,e)}function Fm(r){return r.collectionGroup||(r.path.length%2==1?r.path.lastSegment():r.path.get(r.path.length-2))}function Zl(r){return(e,n)=>{let i=!1;for(let s of Hn(r)){let a=Bm(s,e,n);if(a!==0)return a;i=i||s.field.isKeyField()}return 0}}function Bm(r,e,n){let i=r.field.isKeyField()?B.comparator(e.key,n.key):function(a,c,l){let d=c.data.field(a),f=l.data.field(a);return d!==null&&f!==null?sn(d,f):F(42886)}(r.field,e,n);switch(r.dir){case"asc":return i;case"desc":return-1*i;default:return F(19790,{direction:r.dir})}}var ne=class{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){let n=this.mapKeyFn(e),i=this.inner[n];if(i!==void 0){for(let[s,a]of i)if(this.equalsFn(s,e))return a}}has(e){return this.get(e)!==void 0}set(e,n){let i=this.mapKeyFn(e),s=this.inner[i];if(s===void 0)return this.inner[i]=[[e,n]],void this.innerSize++;for(let a=0;a<s.length;a++)if(this.equalsFn(s[a][0],e))return void(s[a]=[e,n]);s.push([e,n]),this.innerSize++}delete(e){let n=this.mapKeyFn(e),i=this.inner[n];if(i===void 0)return!1;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return i.length===1?delete this.inner[n]:i.splice(s,1),this.innerSize--,!0;return!1}forEach(e){ve(this.inner,(n,i)=>{for(let[s,a]of i)e(s,a)})}isEmpty(){return Fl(this.inner)}size(){return this.innerSize}};var Um=new it(B.comparator);function re(){return Um}var th=new it(B.comparator);function Kn(...r){let e=th;for(let n of r)e=e.insert(n.key,n);return e}function eh(r){let e=th;return r.forEach((n,i)=>e=e.insert(n,i.overlayedDocument)),e}function Ce(){return Qn()}function nh(){return Qn()}function Qn(){return new ne(r=>r.toString(),(r,e)=>r.isEqual(e))}var zm=new it(B.comparator),qm=new ht(B.comparator);function K(...r){let e=qm;for(let n of r)e=e.add(n);return e}var jm=new ht($);function $m(){return jm}function xa(r,e){if(r.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Zn(e)?"-0":e}}function rh(r){return{integerValue:""+r}}function Gm(r,e){return wm(e)?rh(e):xa(r,e)}var ln=class{constructor(){this._=void 0}};function Km(r,e,n){return r instanceof hn?function(s,a){let c={fields:{[Ul]:{stringValue:Bl},[ql]:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return a&&Aa(a)&&(a=Di(a)),a&&(c.fields[zl]=a),{mapValue:c}}(n,e):r instanceof Ne?sh(r,e):r instanceof Oe?oh(r,e):function(s,a){let c=ih(s,a),l=Qu(c)+Qu(s.Ee);return Js(c)&&Js(s.Ee)?rh(l):xa(s.serializer,l)}(r,e)}function Wm(r,e,n){return r instanceof Ne?sh(r,e):r instanceof Oe?oh(r,e):n}function ih(r,e){return r instanceof dn?function(i){return Js(i)||function(a){return!!a&&"doubleValue"in a}(i)}(e)?e:{integerValue:0}:null}var hn=class extends ln{},Ne=class extends ln{constructor(e){super(),this.elements=e}};function sh(r,e){let n=ah(e);for(let i of r.elements)n.some(s=>Bt(s,i))||n.push(i);return{arrayValue:{values:n}}}var Oe=class extends ln{constructor(e){super(),this.elements=e}};function oh(r,e){let n=ah(e);for(let i of r.elements)n=n.filter(s=>!Bt(s,i));return{arrayValue:{values:n}}}var dn=class extends ln{constructor(e,n){super(),this.serializer=e,this.Ee=n}};function Qu(r){return nt(r.integerValue||r.doubleValue)}function ah(r){return Ca(r)&&r.arrayValue.values?r.arrayValue.values.slice():[]}function Hm(r,e){return r.field.isEqual(e.field)&&function(i,s){return i instanceof Ne&&s instanceof Ne||i instanceof Oe&&s instanceof Oe?en(i.elements,s.elements,Bt):i instanceof dn&&s instanceof dn?Bt(i.Ee,s.Ee):i instanceof hn&&s instanceof hn}(r.transform,e.transform)}var uo=class{constructor(e,n){this.version=e,this.transformResults=n}},he=class r{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new r}static exists(e){return new r(void 0,e)}static updateTime(e){return new r(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}};function Wr(r,e){return r.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(r.updateTime):r.exists===void 0||r.exists===e.isFoundDocument()}var fn=class{};function ch(r,e){if(!r.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return r.isNoDocument()?new ni(r.key,he.none()):new Le(r.key,r.data,he.none());{let n=r.data,i=Tt.empty(),s=new ht(bt.comparator);for(let a of e.fields)if(!s.has(a)){let c=n.field(a);c===null&&a.length>1&&(a=a.popLast(),c=n.field(a)),c===null?i.delete(a):i.set(a,c),s=s.add(a)}return new zt(r.key,i,new Ct(s.toArray()),he.none())}}function Qm(r,e,n){r instanceof Le?function(s,a,c){let l=s.value.clone(),d=Ju(s.fieldTransforms,a,c.transformResults);l.setAll(d),a.convertToFoundDocument(c.version,l).setHasCommittedMutations()}(r,e,n):r instanceof zt?function(s,a,c){if(!Wr(s.precondition,a))return void a.convertToUnknownDocument(c.version);let l=Ju(s.fieldTransforms,a,c.transformResults),d=a.data;d.setAll(uh(s)),d.setAll(l),a.convertToFoundDocument(c.version,d).setHasCommittedMutations()}(r,e,n):function(s,a,c){a.convertToNoDocument(c.version).setHasCommittedMutations()}(0,e,n)}function Xn(r,e,n,i){return r instanceof Le?function(a,c,l,d){if(!Wr(a.precondition,c))return l;let f=a.value.clone(),p=Yu(a.fieldTransforms,d,c);return f.setAll(p),c.convertToFoundDocument(c.version,f).setHasLocalMutations(),null}(r,e,n,i):r instanceof zt?function(a,c,l,d){if(!Wr(a.precondition,c))return l;let f=Yu(a.fieldTransforms,d,c),p=c.data;return p.setAll(uh(a)),p.setAll(f),c.convertToFoundDocument(c.version,p).setHasLocalMutations(),l===null?null:l.unionWith(a.fieldMask.fields).unionWith(a.fieldTransforms.map(w=>w.field))}(r,e,n,i):function(a,c,l){return Wr(a.precondition,c)?(c.convertToNoDocument(c.version).setHasLocalMutations(),null):l}(r,e,n)}function Xm(r,e){let n=null;for(let i of r.fieldTransforms){let s=e.data.field(i.field),a=ih(i.transform,s||null);a!=null&&(n===null&&(n=Tt.empty()),n.set(i.field,a))}return n||null}function Xu(r,e){return r.type===e.type&&!!r.key.isEqual(e.key)&&!!r.precondition.isEqual(e.precondition)&&!!function(i,s){return i===void 0&&s===void 0||!(!i||!s)&&en(i,s,(a,c)=>Hm(a,c))}(r.fieldTransforms,e.fieldTransforms)&&(r.type===0?r.value.isEqual(e.value):r.type!==1||r.data.isEqual(e.data)&&r.fieldMask.isEqual(e.fieldMask))}var Le=class extends fn{constructor(e,n,i,s=[]){super(),this.key=e,this.value=n,this.precondition=i,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}},zt=class extends fn{constructor(e,n,i,s,a=[]){super(),this.key=e,this.data=n,this.fieldMask=i,this.precondition=s,this.fieldTransforms=a,this.type=1}getFieldMask(){return this.fieldMask}};function uh(r){let e=new Map;return r.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){let i=r.data.field(n);e.set(n,i)}}),e}function Ju(r,e,n){let i=new Map;X(r.length===n.length,32656,{Ae:n.length,Re:r.length});for(let s=0;s<n.length;s++){let a=r[s],c=a.transform,l=e.data.field(a.field);i.set(a.field,Wm(c,l,n[s]))}return i}function Yu(r,e,n){let i=new Map;for(let s of r){let a=s.transform,c=n.data.field(s.field);i.set(s.field,Km(a,c,e))}return i}var ni=class extends fn{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}},lo=class extends fn{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}};var ho=class{constructor(e,n,i,s){this.batchId=e,this.localWriteTime=n,this.baseMutations=i,this.mutations=s}applyToRemoteDocument(e,n){let i=n.mutationResults;for(let s=0;s<this.mutations.length;s++){let a=this.mutations[s];a.key.isEqual(e.key)&&Qm(a,e,i[s])}}applyToLocalView(e,n){for(let i of this.baseMutations)i.key.isEqual(e.key)&&(n=Xn(i,e,n,this.localWriteTime));for(let i of this.mutations)i.key.isEqual(e.key)&&(n=Xn(i,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){let i=nh();return this.mutations.forEach(s=>{let a=e.get(s.key),c=a.overlayedDocument,l=this.applyToLocalView(c,a.mutatedFields);l=n.has(s.key)?null:l;let d=ch(c,l);d!==null&&i.set(s.key,d),c.isValidDocument()||c.convertToNoDocument(z.min())}),i}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),K())}isEqual(e){return this.batchId===e.batchId&&en(this.mutations,e.mutations,(n,i)=>Xu(n,i))&&en(this.baseMutations,e.baseMutations,(n,i)=>Xu(n,i))}},fo=class r{constructor(e,n,i,s){this.batch=e,this.commitVersion=n,this.mutationResults=i,this.docVersions=s}static from(e,n,i){X(e.mutations.length===i.length,58842,{Ve:e.mutations.length,me:i.length});let s=function(){return zm}(),a=e.mutations;for(let c=0;c<a.length;c++)s=s.insert(a[c].key,i[c].version);return new r(e,n,i,s)}};var mo=class{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}};var po=class{constructor(e,n){this.count=e,this.unchangedNames=n}};var ot,H;function Jm(r){switch(r){case D.OK:return F(64938);case D.CANCELLED:case D.UNKNOWN:case D.DEADLINE_EXCEEDED:case D.RESOURCE_EXHAUSTED:case D.INTERNAL:case D.UNAVAILABLE:case D.UNAUTHENTICATED:return!1;case D.INVALID_ARGUMENT:case D.NOT_FOUND:case D.ALREADY_EXISTS:case D.PERMISSION_DENIED:case D.FAILED_PRECONDITION:case D.ABORTED:case D.OUT_OF_RANGE:case D.UNIMPLEMENTED:case D.DATA_LOSS:return!0;default:return F(15467,{code:r})}}function lh(r){if(r===void 0)return Zt("GRPC error has no .code"),D.UNKNOWN;switch(r){case ot.OK:return D.OK;case ot.CANCELLED:return D.CANCELLED;case ot.UNKNOWN:return D.UNKNOWN;case ot.DEADLINE_EXCEEDED:return D.DEADLINE_EXCEEDED;case ot.RESOURCE_EXHAUSTED:return D.RESOURCE_EXHAUSTED;case ot.INTERNAL:return D.INTERNAL;case ot.UNAVAILABLE:return D.UNAVAILABLE;case ot.UNAUTHENTICATED:return D.UNAUTHENTICATED;case ot.INVALID_ARGUMENT:return D.INVALID_ARGUMENT;case ot.NOT_FOUND:return D.NOT_FOUND;case ot.ALREADY_EXISTS:return D.ALREADY_EXISTS;case ot.PERMISSION_DENIED:return D.PERMISSION_DENIED;case ot.FAILED_PRECONDITION:return D.FAILED_PRECONDITION;case ot.ABORTED:return D.ABORTED;case ot.OUT_OF_RANGE:return D.OUT_OF_RANGE;case ot.UNIMPLEMENTED:return D.UNIMPLEMENTED;case ot.DATA_LOSS:return D.DATA_LOSS;default:return F(39323,{code:r})}}(H=ot||(ot={}))[H.OK=0]="OK",H[H.CANCELLED=1]="CANCELLED",H[H.UNKNOWN=2]="UNKNOWN",H[H.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",H[H.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",H[H.NOT_FOUND=5]="NOT_FOUND",H[H.ALREADY_EXISTS=6]="ALREADY_EXISTS",H[H.PERMISSION_DENIED=7]="PERMISSION_DENIED",H[H.UNAUTHENTICATED=16]="UNAUTHENTICATED",H[H.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",H[H.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",H[H.ABORTED=10]="ABORTED",H[H.OUT_OF_RANGE=11]="OUT_OF_RANGE",H[H.UNIMPLEMENTED=12]="UNIMPLEMENTED",H[H.INTERNAL=13]="INTERNAL",H[H.UNAVAILABLE=14]="UNAVAILABLE",H[H.DATA_LOSS=15]="DATA_LOSS";var Zu=null;var Ym=new Jt([4294967295,4294967295],0);function tl(r){let e=Il().encode(r),n=new Ds;return n.update(e),new Uint8Array(n.digest())}function el(r){let e=new DataView(r.buffer),n=e.getUint32(0,!0),i=e.getUint32(4,!0),s=e.getUint32(8,!0),a=e.getUint32(12,!0);return[new Jt([n,i],0),new Jt([s,a],0)]}var go=class r{constructor(e,n,i){if(this.bitmap=e,this.padding=n,this.hashCount=i,n<0||n>=8)throw new Pe(`Invalid padding: ${n}`);if(i<0)throw new Pe(`Invalid hash count: ${i}`);if(e.length>0&&this.hashCount===0)throw new Pe(`Invalid hash count: ${i}`);if(e.length===0&&n!==0)throw new Pe(`Invalid padding when bitmap length is 0: ${n}`);this.fe=8*e.length-n,this.ge=Jt.fromNumber(this.fe)}pe(e,n,i){let s=e.add(n.multiply(Jt.fromNumber(i)));return s.compare(Ym)===1&&(s=new Jt([s.getBits(0),s.getBits(1)],0)),s.modulo(this.ge).toNumber()}ye(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.fe===0)return!1;let n=tl(e),[i,s]=el(n);for(let a=0;a<this.hashCount;a++){let c=this.pe(i,s,a);if(!this.ye(c))return!1}return!0}static create(e,n,i){let s=e%8==0?0:8-e%8,a=new Uint8Array(Math.ceil(e/8)),c=new r(a,s,n);return i.forEach(l=>c.insert(l)),c}insert(e){if(this.fe===0)return;let n=tl(e),[i,s]=el(n);for(let a=0;a<this.hashCount;a++){let c=this.pe(i,s,a);this.we(c)}}we(e){let n=Math.floor(e/8),i=e%8;this.bitmap[n]|=1<<i}},Pe=class extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}};var ri=class r{constructor(e,n,i,s,a){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=i,this.documentUpdates=s,this.resolvedLimboDocuments=a}static createSynthesizedRemoteEventForCurrentChange(e,n,i){let s=new Map;return s.set(e,nr.createSynthesizedTargetChangeForCurrentChange(e,n,i)),new r(z.min(),s,new it($),re(),K())}},nr=class r{constructor(e,n,i,s,a){this.resumeToken=e,this.current=n,this.addedDocuments=i,this.modifiedDocuments=s,this.removedDocuments=a}static createSynthesizedTargetChangeForCurrentChange(e,n,i){return new r(i,n,K(),K(),K())}};var Ye=class{constructor(e,n,i,s){this.Se=e,this.removedTargetIds=n,this.key=i,this.be=s}},ii=class{constructor(e,n){this.targetId=e,this.De=n}},si=class{constructor(e,n,i=wt.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=n,this.resumeToken=i,this.cause=s}},oi=class{constructor(){this.ve=0,this.Ce=nl(),this.Fe=wt.EMPTY_BYTE_STRING,this.Me=!1,this.xe=!0}get current(){return this.Me}get resumeToken(){return this.Fe}get Oe(){return this.ve!==0}get Ne(){return this.xe}Be(e){e.approximateByteSize()>0&&(this.xe=!0,this.Fe=e)}Le(){let e=K(),n=K(),i=K();return this.Ce.forEach((s,a)=>{switch(a){case 0:e=e.add(s);break;case 2:n=n.add(s);break;case 1:i=i.add(s);break;default:F(38017,{changeType:a})}}),new nr(this.Fe,this.Me,e,n,i)}ke(){this.xe=!1,this.Ce=nl()}qe(e,n){this.xe=!0,this.Ce=this.Ce.insert(e,n)}Qe(e){this.xe=!0,this.Ce=this.Ce.remove(e)}$e(){this.ve+=1}Ue(){this.ve-=1,X(this.ve>=0,3241,{ve:this.ve})}Ke(){this.xe=!0,this.Me=!0}},yo=class{constructor(e){this.We=e,this.Ge=new Map,this.ze=re(),this.je=jr(),this.Je=jr(),this.He=new it($)}Ye(e){for(let n of e.Se)e.be&&e.be.isFoundDocument()?this.Ze(n,e.be):this.Xe(n,e.key,e.be);for(let n of e.removedTargetIds)this.Xe(n,e.key,e.be)}et(e){this.forEachTarget(e,n=>{let i=this.tt(n);switch(e.state){case 0:this.nt(n)&&i.Be(e.resumeToken);break;case 1:i.Ue(),i.Oe||i.ke(),i.Be(e.resumeToken);break;case 2:i.Ue(),i.Oe||this.removeTarget(n);break;case 3:this.nt(n)&&(i.Ke(),i.Be(e.resumeToken));break;case 4:this.nt(n)&&(this.rt(n),i.Be(e.resumeToken));break;default:F(56790,{state:e.state})}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Ge.forEach((i,s)=>{this.nt(s)&&n(s)})}it(e){let n=e.targetId,i=e.De.count,s=this.st(n);if(s){let a=s.target;if(ao(a))if(i===0){let c=new B(a.path);this.Xe(n,c,Dt.newNoDocument(c,z.min()))}else X(i===1,20013,{expectedCount:i});else{let c=this.ot(n);if(c!==i){let l=this._t(e),d=l?this.ut(l,e,c):1;if(d!==0){this.rt(n);let f=d===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.He=this.He.insert(n,f)}Zu?.ct(function(p,w,v,C,P){var O,V,j,q,G,et;let St={localCacheCount:p,existenceFilterCount:w.count,databaseId:v.database,projectId:v.projectId},Y=w.unchangedNames;return Y&&(St.bloomFilter={applied:P===0,hashCount:(O=Y?.hashCount)!==null&&O!==void 0?O:0,bitmapLength:(q=(j=(V=Y?.bits)===null||V===void 0?void 0:V.bitmap)===null||j===void 0?void 0:j.length)!==null&&q!==void 0?q:0,padding:(et=(G=Y?.bits)===null||G===void 0?void 0:G.padding)!==null&&et!==void 0?et:0,mightContain:T=>{var g;return(g=C?.mightContain(T))!==null&&g!==void 0&&g}}),St}(c,e.De,this.We.lt(),l,d))}}}}_t(e){let n=e.De.unchangedNames;if(!n||!n.bits)return null;let{bits:{bitmap:i="",padding:s=0},hashCount:a=0}=n,c,l;try{c=ee(i).toUint8Array()}catch(d){if(d instanceof Yr)return pe("Decoding the base64 bloom filter in existence filter failed ("+d.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw d}try{l=new go(c,s,a)}catch(d){return pe(d instanceof Pe?"BloomFilter error: ":"Applying bloom filter failed: ",d),null}return l.fe===0?null:l}ut(e,n,i){return n.De.count===i-this.ht(e,n.targetId)?0:2}ht(e,n){let i=this.We.getRemoteKeysForTarget(n),s=0;return i.forEach(a=>{let c=this.We.lt(),l=`projects/${c.projectId}/databases/${c.database}/documents/${a.path.canonicalString()}`;e.mightContain(l)||(this.Xe(n,a,null),s++)}),s}Pt(e){let n=new Map;this.Ge.forEach((a,c)=>{let l=this.st(c);if(l){if(a.current&&ao(l.target)){let d=new B(l.target.path);this.Tt(d).has(c)||this.It(c,d)||this.Xe(c,d,Dt.newNoDocument(d,e))}a.Ne&&(n.set(c,a.Le()),a.ke())}});let i=K();this.Je.forEach((a,c)=>{let l=!0;c.forEachWhile(d=>{let f=this.st(d);return!f||f.purpose==="TargetPurposeLimboResolution"||(l=!1,!1)}),l&&(i=i.add(a))}),this.ze.forEach((a,c)=>c.setReadTime(e));let s=new ri(e,n,this.He,this.ze,i);return this.ze=re(),this.je=jr(),this.Je=jr(),this.He=new it($),s}Ze(e,n){if(!this.nt(e))return;let i=this.It(e,n.key)?2:0;this.tt(e).qe(n.key,i),this.ze=this.ze.insert(n.key,n),this.je=this.je.insert(n.key,this.Tt(n.key).add(e)),this.Je=this.Je.insert(n.key,this.dt(n.key).add(e))}Xe(e,n,i){if(!this.nt(e))return;let s=this.tt(e);this.It(e,n)?s.qe(n,1):s.Qe(n),this.Je=this.Je.insert(n,this.dt(n).delete(e)),this.Je=this.Je.insert(n,this.dt(n).add(e)),i&&(this.ze=this.ze.insert(n,i))}removeTarget(e){this.Ge.delete(e)}ot(e){let n=this.tt(e).Le();return this.We.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}$e(e){this.tt(e).$e()}tt(e){let n=this.Ge.get(e);return n||(n=new oi,this.Ge.set(e,n)),n}dt(e){let n=this.Je.get(e);return n||(n=new ht($),this.Je=this.Je.insert(e,n)),n}Tt(e){let n=this.je.get(e);return n||(n=new ht($),this.je=this.je.insert(e,n)),n}nt(e){let n=this.st(e)!==null;return n||L("WatchChangeAggregator","Detected inactive target",e),n}st(e){let n=this.Ge.get(e);return n&&n.Oe?null:this.We.Et(e)}rt(e){this.Ge.set(e,new oi),this.We.getRemoteKeysForTarget(e).forEach(n=>{this.Xe(e,n,null)})}It(e,n){return this.We.getRemoteKeysForTarget(e).has(n)}};function jr(){return new it(B.comparator)}function nl(){return new it(B.comparator)}var Zm={asc:"ASCENDING",desc:"DESCENDING"},tp={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},ep={and:"AND",or:"OR"},_o=class{constructor(e,n){this.databaseId=e,this.useProto3Json=n}};function wo(r,e){return r.useProto3Json||Pi(e)?e:{value:e}}function ai(r,e){return r.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function hh(r,e){return r.useProto3Json?e.toBase64():e.toUint8Array()}function np(r,e){return ai(r,e.toTimestamp())}function Ft(r){return X(!!r,49232),z.fromTimestamp(function(n){let i=te(n);return new tt(i.seconds,i.nanos)}(r))}function Va(r,e){return vo(r,e).canonicalString()}function vo(r,e){let n=function(s){return new st(["projects",s.projectId,"databases",s.database])}(r).child("documents");return e===void 0?n:n.child(e)}function dh(r){let e=st.fromString(r);return X(yh(e),10190,{key:e.toString()}),e}function Eo(r,e){return Va(r.databaseId,e.path)}function Ls(r,e){let n=dh(e);if(n.get(1)!==r.databaseId.projectId)throw new M(D.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+r.databaseId.projectId);if(n.get(3)!==r.databaseId.database)throw new M(D.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+r.databaseId.database);return new B(mh(n))}function fh(r,e){return Va(r.databaseId,e)}function rp(r){let e=dh(r);return e.length===4?st.emptyPath():mh(e)}function Io(r){return new st(["projects",r.databaseId.projectId,"databases",r.databaseId.database]).canonicalString()}function mh(r){return X(r.length>4&&r.get(4)==="documents",29091,{key:r.toString()}),r.popFirst(5)}function rl(r,e,n){return{name:Eo(r,e),fields:n.value.mapValue.fields}}function ip(r,e){let n;if("targetChange"in e){e.targetChange;let i=function(f){return f==="NO_CHANGE"?0:f==="ADD"?1:f==="REMOVE"?2:f==="CURRENT"?3:f==="RESET"?4:F(39313,{state:f})}(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],a=function(f,p){return f.useProto3Json?(X(p===void 0||typeof p=="string",58123),wt.fromBase64String(p||"")):(X(p===void 0||p instanceof Buffer||p instanceof Uint8Array,16193),wt.fromUint8Array(p||new Uint8Array))}(r,e.targetChange.resumeToken),c=e.targetChange.cause,l=c&&function(f){let p=f.code===void 0?D.UNKNOWN:lh(f.code);return new M(p,f.message||"")}(c);n=new si(i,s,a,l||null)}else if("documentChange"in e){e.documentChange;let i=e.documentChange;i.document,i.document.name,i.document.updateTime;let s=Ls(r,i.document.name),a=Ft(i.document.updateTime),c=i.document.createTime?Ft(i.document.createTime):z.min(),l=new Tt({mapValue:{fields:i.document.fields}}),d=Dt.newFoundDocument(s,a,c,l),f=i.targetIds||[],p=i.removedTargetIds||[];n=new Ye(f,p,d.key,d)}else if("documentDelete"in e){e.documentDelete;let i=e.documentDelete;i.document;let s=Ls(r,i.document),a=i.readTime?Ft(i.readTime):z.min(),c=Dt.newNoDocument(s,a),l=i.removedTargetIds||[];n=new Ye([],l,c.key,c)}else if("documentRemove"in e){e.documentRemove;let i=e.documentRemove;i.document;let s=Ls(r,i.document),a=i.removedTargetIds||[];n=new Ye([],a,s,null)}else{if(!("filter"in e))return F(11601,{At:e});{e.filter;let i=e.filter;i.targetId;let{count:s=0,unchangedNames:a}=i,c=new po(s,a),l=i.targetId;n=new ii(l,c)}}return n}function sp(r,e){let n;if(e instanceof Le)n={update:rl(r,e.key,e.value)};else if(e instanceof ni)n={delete:Eo(r,e.key)};else if(e instanceof zt)n={update:rl(r,e.key,e.data),updateMask:mp(e.fieldMask)};else{if(!(e instanceof lo))return F(16599,{Rt:e.type});n={verify:Eo(r,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(i=>function(a,c){let l=c.transform;if(l instanceof hn)return{fieldPath:c.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(l instanceof Ne)return{fieldPath:c.field.canonicalString(),appendMissingElements:{values:l.elements}};if(l instanceof Oe)return{fieldPath:c.field.canonicalString(),removeAllFromArray:{values:l.elements}};if(l instanceof dn)return{fieldPath:c.field.canonicalString(),increment:l.Ee};throw F(20930,{transform:c.transform})}(0,i))),e.precondition.isNone||(n.currentDocument=function(s,a){return a.updateTime!==void 0?{updateTime:np(s,a.updateTime)}:a.exists!==void 0?{exists:a.exists}:F(27497)}(r,e.precondition)),n}function op(r,e){return r&&r.length>0?(X(e!==void 0,14353),r.map(n=>function(s,a){let c=s.updateTime?Ft(s.updateTime):Ft(a);return c.isEqual(z.min())&&(c=Ft(a)),new uo(c,s.transformResults||[])}(n,e))):[]}function ap(r,e){return{documents:[fh(r,e.path)]}}function cp(r,e){let n={structuredQuery:{}},i=e.path,s;e.collectionGroup!==null?(s=i,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(s=i.popLast(),n.structuredQuery.from=[{collectionId:i.lastSegment()}]),n.parent=fh(r,s);let a=function(f){if(f.length!==0)return gh(Ut.create(f,"and"))}(e.filters);a&&(n.structuredQuery.where=a);let c=function(f){if(f.length!==0)return f.map(p=>function(v){return{field:Qe(v.field),direction:hp(v.dir)}}(p))}(e.orderBy);c&&(n.structuredQuery.orderBy=c);let l=wo(r,e.limit);return l!==null&&(n.structuredQuery.limit=l),e.startAt&&(n.structuredQuery.startAt=function(f){return{before:f.inclusive,values:f.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(f){return{before:!f.inclusive,values:f.position}}(e.endAt)),{Vt:n,parent:s}}function up(r){let e=rp(r.parent),n=r.structuredQuery,i=n.from?n.from.length:0,s=null;if(i>0){X(i===1,65062);let p=n.from[0];p.allDescendants?s=p.collectionId:e=e.child(p.collectionId)}let a=[];n.where&&(a=function(w){let v=ph(w);return v instanceof Ut&&Hl(v)?v.getFilters():[v]}(n.where));let c=[];n.orderBy&&(c=function(w){return w.map(v=>function(P){return new cn(Xe(P.field),function(V){switch(V){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(P.direction))}(v))}(n.orderBy));let l=null;n.limit&&(l=function(w){let v;return v=typeof w=="object"?w.value:w,Pi(v)?null:v}(n.limit));let d=null;n.startAt&&(d=function(w){let v=!!w.before,C=w.values||[];return new an(C,v)}(n.startAt));let f=null;return n.endAt&&(f=function(w){let v=!w.before,C=w.values||[];return new an(C,v)}(n.endAt)),Om(e,s,c,a,l,"F",d,f)}function lp(r,e){let n=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return F(28987,{purpose:s})}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function ph(r){return r.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":let i=Xe(n.unaryFilter.field);return ut.create(i,"==",{doubleValue:NaN});case"IS_NULL":let s=Xe(n.unaryFilter.field);return ut.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":let a=Xe(n.unaryFilter.field);return ut.create(a,"!=",{doubleValue:NaN});case"IS_NOT_NULL":let c=Xe(n.unaryFilter.field);return ut.create(c,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return F(61313);default:return F(60726)}}(r):r.fieldFilter!==void 0?function(n){return ut.create(Xe(n.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return F(58110);default:return F(50506)}}(n.fieldFilter.op),n.fieldFilter.value)}(r):r.compositeFilter!==void 0?function(n){return Ut.create(n.compositeFilter.filters.map(i=>ph(i)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return F(1026)}}(n.compositeFilter.op))}(r):F(30097,{filter:r})}function hp(r){return Zm[r]}function dp(r){return tp[r]}function fp(r){return ep[r]}function Qe(r){return{fieldPath:r.canonicalString()}}function Xe(r){return bt.fromServerFormat(r.fieldPath)}function gh(r){return r instanceof ut?function(n){if(n.op==="=="){if($u(n.value))return{unaryFilter:{field:Qe(n.field),op:"IS_NAN"}};if(ju(n.value))return{unaryFilter:{field:Qe(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if($u(n.value))return{unaryFilter:{field:Qe(n.field),op:"IS_NOT_NAN"}};if(ju(n.value))return{unaryFilter:{field:Qe(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Qe(n.field),op:dp(n.op),value:n.value}}}(r):r instanceof Ut?function(n){let i=n.getFilters().map(s=>gh(s));return i.length===1?i[0]:{compositeFilter:{op:fp(n.op),filters:i}}}(r):F(54877,{filter:r})}function mp(r){let e=[];return r.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function yh(r){return r.length>=4&&r.get(0)==="projects"&&r.get(2)==="databases"}var rr=class r{constructor(e,n,i,s,a=z.min(),c=z.min(),l=wt.EMPTY_BYTE_STRING,d=null){this.target=e,this.targetId=n,this.purpose=i,this.sequenceNumber=s,this.snapshotVersion=a,this.lastLimboFreeSnapshotVersion=c,this.resumeToken=l,this.expectedCount=d}withSequenceNumber(e){return new r(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new r(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new r(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new r(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}};var To=class{constructor(e){this.gt=e}};function pp(r){let e=up({parent:r.parent,structuredQuery:r.structuredQuery});return r.limitType==="LAST"?co(e,e.limit,"L"):e}var ci=class{constructor(){}bt(e,n){this.Dt(e,n),n.vt()}Dt(e,n){if("nullValue"in e)this.Ct(n,5);else if("booleanValue"in e)this.Ct(n,10),n.Ft(e.booleanValue?1:0);else if("integerValue"in e)this.Ct(n,15),n.Ft(nt(e.integerValue));else if("doubleValue"in e){let i=nt(e.doubleValue);isNaN(i)?this.Ct(n,13):(this.Ct(n,15),Zn(i)?n.Ft(0):n.Ft(i))}else if("timestampValue"in e){let i=e.timestampValue;this.Ct(n,20),typeof i=="string"&&(i=te(i)),n.Mt(`${i.seconds||""}`),n.Ft(i.nanos||0)}else if("stringValue"in e)this.xt(e.stringValue,n),this.Ot(n);else if("bytesValue"in e)this.Ct(n,30),n.Nt(ee(e.bytesValue)),this.Ot(n);else if("referenceValue"in e)this.Bt(e.referenceValue,n);else if("geoPointValue"in e){let i=e.geoPointValue;this.Ct(n,45),n.Ft(i.latitude||0),n.Ft(i.longitude||0)}else"mapValue"in e?Gl(e)?this.Ct(n,Number.MAX_SAFE_INTEGER):$l(e)?this.Lt(e.mapValue,n):(this.kt(e.mapValue,n),this.Ot(n)):"arrayValue"in e?(this.qt(e.arrayValue,n),this.Ot(n)):F(19022,{Qt:e})}xt(e,n){this.Ct(n,25),this.$t(e,n)}$t(e,n){n.Mt(e)}kt(e,n){let i=e.fields||{};this.Ct(n,55);for(let s of Object.keys(i))this.xt(s,n),this.Dt(i[s],n)}Lt(e,n){var i,s;let a=e.fields||{};this.Ct(n,53);let c=rn,l=((s=(i=a[c].arrayValue)===null||i===void 0?void 0:i.values)===null||s===void 0?void 0:s.length)||0;this.Ct(n,15),n.Ft(nt(l)),this.xt(c,n),this.Dt(a[c],n)}qt(e,n){let i=e.values||[];this.Ct(n,50);for(let s of i)this.Dt(s,n)}Bt(e,n){this.Ct(n,37),B.fromName(e).path.forEach(i=>{this.Ct(n,60),this.$t(i,n)})}Ct(e,n){e.Ft(n)}Ot(e){e.Ft(2)}};ci.Ut=new ci;var bo=class{constructor(){this.Dn=new Ao}addToCollectionParentIndex(e,n){return this.Dn.add(n),x.resolve()}getCollectionParents(e,n){return x.resolve(this.Dn.getEntries(n))}addFieldIndex(e,n){return x.resolve()}deleteFieldIndex(e,n){return x.resolve()}deleteAllFieldIndexes(e){return x.resolve()}createTargetIndexes(e,n){return x.resolve()}getDocumentsMatchingTarget(e,n){return x.resolve(null)}getIndexType(e,n){return x.resolve(0)}getFieldIndexes(e,n){return x.resolve([])}getNextCollectionGroupToUpdate(e){return x.resolve(null)}getMinOffset(e,n){return x.resolve(ke.min())}getMinOffsetFromCollectionGroup(e,n){return x.resolve(ke.min())}updateCollectionGroup(e,n,i){return x.resolve()}updateIndexEntries(e,n){return x.resolve()}},Ao=class{constructor(){this.index={}}add(e){let n=e.lastSegment(),i=e.popLast(),s=this.index[n]||new ht(st.comparator),a=!s.has(i);return this.index[n]=s.add(i),a}has(e){let n=e.lastSegment(),i=e.popLast(),s=this.index[n];return s&&s.has(i)}getEntries(e){return(this.index[e]||new ht(st.comparator)).toArray()}};var Ey=new Uint8Array(0);var il={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},_h=41943040,Rt=class r{static withCacheSize(e){return new r(e,r.DEFAULT_COLLECTION_PERCENTILE,r.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,n,i){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=n,this.maximumSequenceNumbersToCollect=i}};Rt.DEFAULT_COLLECTION_PERCENTILE=10,Rt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Rt.DEFAULT=new Rt(_h,Rt.DEFAULT_COLLECTION_PERCENTILE,Rt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Rt.DISABLED=new Rt(-1,0,0);var ir=class r{constructor(e){this._r=e}next(){return this._r+=2,this._r}static ar(){return new r(0)}static ur(){return new r(-1)}};var sl="LruGarbageCollector",gp=1048576;function ol([r,e],[n,i]){let s=$(r,n);return s===0?$(e,i):s}var So=class{constructor(e){this.Tr=e,this.buffer=new ht(ol),this.Ir=0}dr(){return++this.Ir}Er(e){let n=[e,this.dr()];if(this.buffer.size<this.Tr)this.buffer=this.buffer.add(n);else{let i=this.buffer.last();ol(n,i)<0&&(this.buffer=this.buffer.delete(i).add(n))}}get maxValue(){return this.buffer.last()[0]}},Ro=class{constructor(e,n,i){this.garbageCollector=e,this.asyncQueue=n,this.localStore=i,this.Ar=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Rr(6e4)}stop(){this.Ar&&(this.Ar.cancel(),this.Ar=null)}get started(){return this.Ar!==null}Rr(e){L(sl,`Garbage collection scheduled in ${e}ms`),this.Ar=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Ar=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(n){wn(n)?L(sl,"Ignoring IndexedDB error during garbage collection: ",n):await _n(n)}await this.Rr(3e5)})}},Co=class{constructor(e,n){this.Vr=e,this.params=n}calculateTargetCount(e,n){return this.Vr.mr(e).next(i=>Math.floor(n/100*i))}nthSequenceNumber(e,n){if(n===0)return x.resolve(nn.ue);let i=new So(n);return this.Vr.forEachTarget(e,s=>i.Er(s.sequenceNumber)).next(()=>this.Vr.gr(e,s=>i.Er(s))).next(()=>i.maxValue)}removeTargets(e,n,i){return this.Vr.removeTargets(e,n,i)}removeOrphanedDocuments(e,n){return this.Vr.removeOrphanedDocuments(e,n)}collect(e,n){return this.params.cacheSizeCollectionThreshold===-1?(L("LruGarbageCollector","Garbage collection skipped; disabled"),x.resolve(il)):this.getCacheSize(e).next(i=>i<this.params.cacheSizeCollectionThreshold?(L("LruGarbageCollector",`Garbage collection skipped; Cache size ${i} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),il):this.pr(e,n))}getCacheSize(e){return this.Vr.getCacheSize(e)}pr(e,n){let i,s,a,c,l,d,f,p=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(w=>(w>this.params.maximumSequenceNumbersToCollect?(L("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${w}`),s=this.params.maximumSequenceNumbersToCollect):s=w,c=Date.now(),this.nthSequenceNumber(e,s))).next(w=>(i=w,l=Date.now(),this.removeTargets(e,i,n))).next(w=>(a=w,d=Date.now(),this.removeOrphanedDocuments(e,i))).next(w=>(f=Date.now(),We()<=W.DEBUG&&L("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${c-p}ms
	Determined least recently used ${s} in `+(l-c)+`ms
	Removed ${a} targets in `+(d-l)+`ms
	Removed ${w} documents in `+(f-d)+`ms
Total Duration: ${f-p}ms`),x.resolve({didRun:!0,sequenceNumbersCollected:s,targetsRemoved:a,documentsRemoved:w})))}};function yp(r,e){return new Co(r,e)}var Po=class{constructor(){this.changes=new ne(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,Dt.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();let i=this.changes.get(n);return i!==void 0?x.resolve(i):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}};var Do=class{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}};var xo=class{constructor(e,n,i,s){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=i,this.indexManager=s}getDocument(e,n){let i=null;return this.documentOverlayCache.getOverlay(e,n).next(s=>(i=s,this.remoteDocumentCache.getEntry(e,n))).next(s=>(i!==null&&Xn(i.mutation,s,Ct.empty(),tt.now()),s))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(i=>this.getLocalViewOfDocuments(e,i,K()).next(()=>i))}getLocalViewOfDocuments(e,n,i=K()){let s=Ce();return this.populateOverlays(e,s,n).next(()=>this.computeViews(e,n,s,i).next(a=>{let c=Kn();return a.forEach((l,d)=>{c=c.insert(l,d.overlayedDocument)}),c}))}getOverlayedDocuments(e,n){let i=Ce();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,K()))}populateOverlays(e,n,i){let s=[];return i.forEach(a=>{n.has(a)||s.push(a)}),this.documentOverlayCache.getOverlays(e,s).next(a=>{a.forEach((c,l)=>{n.set(c,l)})})}computeViews(e,n,i,s){let a=re(),c=Qn(),l=function(){return Qn()}();return n.forEach((d,f)=>{let p=i.get(f.key);s.has(f.key)&&(p===void 0||p.mutation instanceof zt)?a=a.insert(f.key,f):p!==void 0?(c.set(f.key,p.mutation.getFieldMask()),Xn(p.mutation,f,p.mutation.getFieldMask(),tt.now())):c.set(f.key,Ct.empty())}),this.recalculateAndSaveOverlays(e,a).next(d=>(d.forEach((f,p)=>c.set(f,p)),n.forEach((f,p)=>{var w;return l.set(f,new Do(p,(w=c.get(f))!==null&&w!==void 0?w:null))}),l))}recalculateAndSaveOverlays(e,n){let i=Qn(),s=new it((c,l)=>c-l),a=K();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(c=>{for(let l of c)l.keys().forEach(d=>{let f=n.get(d);if(f===null)return;let p=i.get(d)||Ct.empty();p=l.applyToLocalView(f,p),i.set(d,p);let w=(s.get(l.batchId)||K()).add(d);s=s.insert(l.batchId,w)})}).next(()=>{let c=[],l=s.getReverseIterator();for(;l.hasNext();){let d=l.getNext(),f=d.key,p=d.value,w=nh();p.forEach(v=>{if(!a.has(v)){let C=ch(n.get(v),i.get(v));C!==null&&w.set(v,C),a=a.add(v)}}),c.push(this.documentOverlayCache.saveOverlays(e,f,w))}return x.waitFor(c)}).next(()=>i)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(i=>this.recalculateAndSaveOverlays(e,i))}getDocumentsMatchingQuery(e,n,i,s){return function(c){return B.isDocumentKey(c.path)&&c.collectionGroup===null&&c.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):Lm(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,i,s):this.getDocumentsMatchingCollectionQuery(e,n,i,s)}getNextDocuments(e,n,i,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,i,s).next(a=>{let c=s-a.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,i.largestBatchId,s-a.size):x.resolve(Ce()),l=Yn,d=a;return c.next(f=>x.forEach(f,(p,w)=>(l<w.largestBatchId&&(l=w.largestBatchId),a.get(p)?x.resolve():this.remoteDocumentCache.getEntry(e,p).next(v=>{d=d.insert(p,v)}))).next(()=>this.populateOverlays(e,f,a)).next(()=>this.computeViews(e,d,f,K())).next(p=>({batchId:l,changes:eh(p)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new B(n)).next(i=>{let s=Kn();return i.isFoundDocument()&&(s=s.insert(i.key,i)),s})}getDocumentsMatchingCollectionGroupQuery(e,n,i,s){let a=n.collectionGroup,c=Kn();return this.indexManager.getCollectionParents(e,a).next(l=>x.forEach(l,d=>{let f=function(w,v){return new un(v,null,w.explicitOrderBy.slice(),w.filters.slice(),w.limit,w.limitType,w.startAt,w.endAt)}(n,d.child(a));return this.getDocumentsMatchingCollectionQuery(e,f,i,s).next(p=>{p.forEach((w,v)=>{c=c.insert(w,v)})})}).next(()=>c))}getDocumentsMatchingCollectionQuery(e,n,i,s){let a;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,i.largestBatchId).next(c=>(a=c,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,i,a,s))).next(c=>{a.forEach((d,f)=>{let p=f.getKey();c.get(p)===null&&(c=c.insert(p,Dt.newInvalidDocument(p)))});let l=Kn();return c.forEach((d,f)=>{let p=a.get(d);p!==void 0&&Xn(p.mutation,f,Ct.empty(),tt.now()),ki(n,f)&&(l=l.insert(d,f))}),l})}};var Vo=class{constructor(e){this.serializer=e,this.Br=new Map,this.Lr=new Map}getBundleMetadata(e,n){return x.resolve(this.Br.get(n))}saveBundleMetadata(e,n){return this.Br.set(n.id,function(s){return{id:s.id,version:s.version,createTime:Ft(s.createTime)}}(n)),x.resolve()}getNamedQuery(e,n){return x.resolve(this.Lr.get(n))}saveNamedQuery(e,n){return this.Lr.set(n.name,function(s){return{name:s.name,query:pp(s.bundledQuery),readTime:Ft(s.readTime)}}(n)),x.resolve()}};var ko=class{constructor(){this.overlays=new it(B.comparator),this.kr=new Map}getOverlay(e,n){return x.resolve(this.overlays.get(n))}getOverlays(e,n){let i=Ce();return x.forEach(n,s=>this.getOverlay(e,s).next(a=>{a!==null&&i.set(s,a)})).next(()=>i)}saveOverlays(e,n,i){return i.forEach((s,a)=>{this.wt(e,n,a)}),x.resolve()}removeOverlaysForBatchId(e,n,i){let s=this.kr.get(i);return s!==void 0&&(s.forEach(a=>this.overlays=this.overlays.remove(a)),this.kr.delete(i)),x.resolve()}getOverlaysForCollection(e,n,i){let s=Ce(),a=n.length+1,c=new B(n.child("")),l=this.overlays.getIteratorFrom(c);for(;l.hasNext();){let d=l.getNext().value,f=d.getKey();if(!n.isPrefixOf(f.path))break;f.path.length===a&&d.largestBatchId>i&&s.set(d.getKey(),d)}return x.resolve(s)}getOverlaysForCollectionGroup(e,n,i,s){let a=new it((f,p)=>f-p),c=this.overlays.getIterator();for(;c.hasNext();){let f=c.getNext().value;if(f.getKey().getCollectionGroup()===n&&f.largestBatchId>i){let p=a.get(f.largestBatchId);p===null&&(p=Ce(),a=a.insert(f.largestBatchId,p)),p.set(f.getKey(),f)}}let l=Ce(),d=a.getIterator();for(;d.hasNext()&&(d.getNext().value.forEach((f,p)=>l.set(f,p)),!(l.size()>=s)););return x.resolve(l)}wt(e,n,i){let s=this.overlays.get(i.key);if(s!==null){let c=this.kr.get(s.largestBatchId).delete(i.key);this.kr.set(s.largestBatchId,c)}this.overlays=this.overlays.insert(i.key,new mo(n,i));let a=this.kr.get(n);a===void 0&&(a=K(),this.kr.set(n,a)),this.kr.set(n,a.add(i.key))}};var No=class{constructor(){this.sessionToken=wt.EMPTY_BYTE_STRING}getSessionToken(e){return x.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,x.resolve()}};var sr=class{constructor(){this.qr=new ht(at.Qr),this.$r=new ht(at.Ur)}isEmpty(){return this.qr.isEmpty()}addReference(e,n){let i=new at(e,n);this.qr=this.qr.add(i),this.$r=this.$r.add(i)}Kr(e,n){e.forEach(i=>this.addReference(i,n))}removeReference(e,n){this.Wr(new at(e,n))}Gr(e,n){e.forEach(i=>this.removeReference(i,n))}zr(e){let n=new B(new st([])),i=new at(n,e),s=new at(n,e+1),a=[];return this.$r.forEachInRange([i,s],c=>{this.Wr(c),a.push(c.key)}),a}jr(){this.qr.forEach(e=>this.Wr(e))}Wr(e){this.qr=this.qr.delete(e),this.$r=this.$r.delete(e)}Jr(e){let n=new B(new st([])),i=new at(n,e),s=new at(n,e+1),a=K();return this.$r.forEachInRange([i,s],c=>{a=a.add(c.key)}),a}containsKey(e){let n=new at(e,0),i=this.qr.firstAfterOrEqual(n);return i!==null&&e.isEqual(i.key)}},at=class{constructor(e,n){this.key=e,this.Hr=n}static Qr(e,n){return B.comparator(e.key,n.key)||$(e.Hr,n.Hr)}static Ur(e,n){return $(e.Hr,n.Hr)||B.comparator(e.key,n.key)}};var Oo=class{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.er=1,this.Yr=new ht(at.Qr)}checkEmpty(e){return x.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,i,s){let a=this.er;this.er++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];let c=new ho(a,n,i,s);this.mutationQueue.push(c);for(let l of s)this.Yr=this.Yr.add(new at(l.key,a)),this.indexManager.addToCollectionParentIndex(e,l.key.path.popLast());return x.resolve(c)}lookupMutationBatch(e,n){return x.resolve(this.Zr(n))}getNextMutationBatchAfterBatchId(e,n){let i=n+1,s=this.Xr(i),a=s<0?0:s;return x.resolve(this.mutationQueue.length>a?this.mutationQueue[a]:null)}getHighestUnacknowledgedBatchId(){return x.resolve(this.mutationQueue.length===0?ba:this.er-1)}getAllMutationBatches(e){return x.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){let i=new at(n,0),s=new at(n,Number.POSITIVE_INFINITY),a=[];return this.Yr.forEachInRange([i,s],c=>{let l=this.Zr(c.Hr);a.push(l)}),x.resolve(a)}getAllMutationBatchesAffectingDocumentKeys(e,n){let i=new ht($);return n.forEach(s=>{let a=new at(s,0),c=new at(s,Number.POSITIVE_INFINITY);this.Yr.forEachInRange([a,c],l=>{i=i.add(l.Hr)})}),x.resolve(this.ei(i))}getAllMutationBatchesAffectingQuery(e,n){let i=n.path,s=i.length+1,a=i;B.isDocumentKey(a)||(a=a.child(""));let c=new at(new B(a),0),l=new ht($);return this.Yr.forEachWhile(d=>{let f=d.key.path;return!!i.isPrefixOf(f)&&(f.length===s&&(l=l.add(d.Hr)),!0)},c),x.resolve(this.ei(l))}ei(e){let n=[];return e.forEach(i=>{let s=this.Zr(i);s!==null&&n.push(s)}),n}removeMutationBatch(e,n){X(this.ti(n.batchId,"removed")===0,55003),this.mutationQueue.shift();let i=this.Yr;return x.forEach(n.mutations,s=>{let a=new at(s.key,n.batchId);return i=i.delete(a),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)}).next(()=>{this.Yr=i})}rr(e){}containsKey(e,n){let i=new at(n,0),s=this.Yr.firstAfterOrEqual(i);return x.resolve(n.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,x.resolve()}ti(e,n){return this.Xr(e)}Xr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Zr(e){let n=this.Xr(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}};var Lo=class{constructor(e){this.ni=e,this.docs=function(){return new it(B.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){let i=n.key,s=this.docs.get(i),a=s?s.size:0,c=this.ni(n);return this.docs=this.docs.insert(i,{document:n.mutableCopy(),size:c}),this.size+=c-a,this.indexManager.addToCollectionParentIndex(e,i.path.popLast())}removeEntry(e){let n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){let i=this.docs.get(n);return x.resolve(i?i.document.mutableCopy():Dt.newInvalidDocument(n))}getEntries(e,n){let i=re();return n.forEach(s=>{let a=this.docs.get(s);i=i.insert(s,a?a.document.mutableCopy():Dt.newInvalidDocument(s))}),x.resolve(i)}getDocumentsMatchingQuery(e,n,i,s){let a=re(),c=n.path,l=new B(c.child("__id-9223372036854775808__")),d=this.docs.getIteratorFrom(l);for(;d.hasNext();){let{key:f,value:{document:p}}=d.getNext();if(!c.isPrefixOf(f.path))break;f.path.length>c.length+1||gm(pm(p),i)<=0||(s.has(p.key)||ki(n,p))&&(a=a.insert(p.key,p.mutableCopy()))}return x.resolve(a)}getAllFromCollectionGroup(e,n,i,s){F(9500)}ri(e,n){return x.forEach(this.docs,i=>n(i))}newChangeBuffer(e){return new Mo(this)}getSize(e){return x.resolve(this.size)}},Mo=class extends Po{constructor(e){super(),this.Or=e}applyChanges(e){let n=[];return this.changes.forEach((i,s)=>{s.isValidDocument()?n.push(this.Or.addEntry(e,s)):this.Or.removeEntry(i)}),x.waitFor(n)}getFromCache(e,n){return this.Or.getEntry(e,n)}getAllFromCache(e,n){return this.Or.getEntries(e,n)}};var Fo=class{constructor(e){this.persistence=e,this.ii=new ne(n=>Pa(n),Da),this.lastRemoteSnapshotVersion=z.min(),this.highestTargetId=0,this.si=0,this.oi=new sr,this.targetCount=0,this._i=ir.ar()}forEachTarget(e,n){return this.ii.forEach((i,s)=>n(s)),x.resolve()}getLastRemoteSnapshotVersion(e){return x.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return x.resolve(this.si)}allocateTargetId(e){return this.highestTargetId=this._i.next(),x.resolve(this.highestTargetId)}setTargetsMetadata(e,n,i){return i&&(this.lastRemoteSnapshotVersion=i),n>this.si&&(this.si=n),x.resolve()}hr(e){this.ii.set(e.target,e);let n=e.targetId;n>this.highestTargetId&&(this._i=new ir(n),this.highestTargetId=n),e.sequenceNumber>this.si&&(this.si=e.sequenceNumber)}addTargetData(e,n){return this.hr(n),this.targetCount+=1,x.resolve()}updateTargetData(e,n){return this.hr(n),x.resolve()}removeTargetData(e,n){return this.ii.delete(n.target),this.oi.zr(n.targetId),this.targetCount-=1,x.resolve()}removeTargets(e,n,i){let s=0,a=[];return this.ii.forEach((c,l)=>{l.sequenceNumber<=n&&i.get(l.targetId)===null&&(this.ii.delete(c),a.push(this.removeMatchingKeysForTargetId(e,l.targetId)),s++)}),x.waitFor(a).next(()=>s)}getTargetCount(e){return x.resolve(this.targetCount)}getTargetData(e,n){let i=this.ii.get(n)||null;return x.resolve(i)}addMatchingKeys(e,n,i){return this.oi.Kr(n,i),x.resolve()}removeMatchingKeys(e,n,i){this.oi.Gr(n,i);let s=this.persistence.referenceDelegate,a=[];return s&&n.forEach(c=>{a.push(s.markPotentiallyOrphaned(e,c))}),x.waitFor(a)}removeMatchingKeysForTargetId(e,n){return this.oi.zr(n),x.resolve()}getMatchingKeysForTargetId(e,n){let i=this.oi.Jr(n);return x.resolve(i)}containsKey(e,n){return x.resolve(this.oi.containsKey(n))}};var ui=class{constructor(e,n){this.ai={},this.overlays={},this.ui=new nn(0),this.ci=!1,this.ci=!0,this.li=new No,this.referenceDelegate=e(this),this.hi=new Fo(this),this.indexManager=new bo,this.remoteDocumentCache=function(s){return new Lo(s)}(i=>this.referenceDelegate.Pi(i)),this.serializer=new To(n),this.Ti=new Vo(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.ci=!1,Promise.resolve()}get started(){return this.ci}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new ko,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let i=this.ai[e.toKey()];return i||(i=new Oo(n,this.referenceDelegate),this.ai[e.toKey()]=i),i}getGlobalsCache(){return this.li}getTargetCache(){return this.hi}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ti}runTransaction(e,n,i){L("MemoryPersistence","Starting transaction:",e);let s=new Bo(this.ui.next());return this.referenceDelegate.Ii(),i(s).next(a=>this.referenceDelegate.di(s).next(()=>a)).toPromise().then(a=>(s.raiseOnCommittedEvent(),a))}Ei(e,n){return x.or(Object.values(this.ai).map(i=>()=>i.containsKey(e,n)))}},Bo=class extends Hs{constructor(e){super(),this.currentSequenceNumber=e}},Uo=class r{constructor(e){this.persistence=e,this.Ai=new sr,this.Ri=null}static Vi(e){return new r(e)}get mi(){if(this.Ri)return this.Ri;throw F(60996)}addReference(e,n,i){return this.Ai.addReference(i,n),this.mi.delete(i.toString()),x.resolve()}removeReference(e,n,i){return this.Ai.removeReference(i,n),this.mi.add(i.toString()),x.resolve()}markPotentiallyOrphaned(e,n){return this.mi.add(n.toString()),x.resolve()}removeTarget(e,n){this.Ai.zr(n.targetId).forEach(s=>this.mi.add(s.toString()));let i=this.persistence.getTargetCache();return i.getMatchingKeysForTargetId(e,n.targetId).next(s=>{s.forEach(a=>this.mi.add(a.toString()))}).next(()=>i.removeTargetData(e,n))}Ii(){this.Ri=new Set}di(e){let n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return x.forEach(this.mi,i=>{let s=B.fromPath(i);return this.fi(e,s).next(a=>{a||n.removeEntry(s,z.min())})}).next(()=>(this.Ri=null,n.apply(e)))}updateLimboDocument(e,n){return this.fi(e,n).next(i=>{i?this.mi.delete(n.toString()):this.mi.add(n.toString())})}Pi(e){return 0}fi(e,n){return x.or([()=>x.resolve(this.Ai.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Ei(e,n)])}},li=class r{constructor(e,n){this.persistence=e,this.gi=new ne(i=>vm(i.path),(i,s)=>i.isEqual(s)),this.garbageCollector=yp(this,n)}static Vi(e,n){return new r(e,n)}Ii(){}di(e){return x.resolve()}forEachTarget(e,n){return this.persistence.getTargetCache().forEachTarget(e,n)}mr(e){let n=this.yr(e);return this.persistence.getTargetCache().getTargetCount(e).next(i=>n.next(s=>i+s))}yr(e){let n=0;return this.gr(e,i=>{n++}).next(()=>n)}gr(e,n){return x.forEach(this.gi,(i,s)=>this.Sr(e,i,s).next(a=>a?x.resolve():n(s)))}removeTargets(e,n,i){return this.persistence.getTargetCache().removeTargets(e,n,i)}removeOrphanedDocuments(e,n){let i=0,s=this.persistence.getRemoteDocumentCache(),a=s.newChangeBuffer();return s.ri(e,c=>this.Sr(e,c,n).next(l=>{l||(i++,a.removeEntry(c,z.min()))})).next(()=>a.apply(e)).next(()=>i)}markPotentiallyOrphaned(e,n){return this.gi.set(n,e.currentSequenceNumber),x.resolve()}removeTarget(e,n){let i=n.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,i)}addReference(e,n,i){return this.gi.set(i,e.currentSequenceNumber),x.resolve()}removeReference(e,n,i){return this.gi.set(i,e.currentSequenceNumber),x.resolve()}updateLimboDocument(e,n){return this.gi.set(n,e.currentSequenceNumber),x.resolve()}Pi(e){let n=e.key.toString().length;return e.isFoundDocument()&&(n+=Gr(e.data.value)),n}Sr(e,n,i){return x.or([()=>this.persistence.Ei(e,n),()=>this.persistence.getTargetCache().containsKey(e,n),()=>{let s=this.gi.get(n);return x.resolve(s!==void 0&&s>i)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}};var zo=class r{constructor(e,n,i,s){this.targetId=e,this.fromCache=n,this.Is=i,this.ds=s}static Es(e,n){let i=K(),s=K();for(let a of n.docChanges)switch(a.type){case 0:i=i.add(a.doc.key);break;case 1:s=s.add(a.doc.key)}return new r(e,n.fromCache,i,s)}};var qo=class{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}};var jo=class{constructor(){this.As=!1,this.Rs=!1,this.Vs=100,this.fs=function(){return lu()?8:_m(uu())>0?6:4}()}initialize(e,n){this.gs=e,this.indexManager=n,this.As=!0}getDocumentsMatchingQuery(e,n,i,s){let a={result:null};return this.ps(e,n).next(c=>{a.result=c}).next(()=>{if(!a.result)return this.ys(e,n,s,i).next(c=>{a.result=c})}).next(()=>{if(a.result)return;let c=new qo;return this.ws(e,n,c).next(l=>{if(a.result=l,this.Rs)return this.Ss(e,n,c,l.size)})}).next(()=>a.result)}Ss(e,n,i,s){return i.documentReadCount<this.Vs?(We()<=W.DEBUG&&L("QueryEngine","SDK will not create cache indexes for query:",He(n),"since it only creates cache indexes for collection contains","more than or equal to",this.Vs,"documents"),x.resolve()):(We()<=W.DEBUG&&L("QueryEngine","Query:",He(n),"scans",i.documentReadCount,"local documents and returns",s,"documents as results."),i.documentReadCount>this.fs*s?(We()<=W.DEBUG&&L("QueryEngine","The SDK decides to create cache indexes for query:",He(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Mt(n))):x.resolve())}ps(e,n){if(Hu(n))return x.resolve(null);let i=Mt(n);return this.indexManager.getIndexType(e,i).next(s=>s===0?null:(n.limit!==null&&s===1&&(n=co(n,null,"F"),i=Mt(n)),this.indexManager.getDocumentsMatchingTarget(e,i).next(a=>{let c=K(...a);return this.gs.getDocuments(e,c).next(l=>this.indexManager.getMinOffset(e,i).next(d=>{let f=this.bs(n,l);return this.Ds(n,f,c,d.readTime)?this.ps(e,co(n,null,"F")):this.vs(e,f,n,d)}))})))}ys(e,n,i,s){return Hu(n)||s.isEqual(z.min())?x.resolve(null):this.gs.getDocuments(e,i).next(a=>{let c=this.bs(n,a);return this.Ds(n,c,i,s)?x.resolve(null):(We()<=W.DEBUG&&L("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),He(n)),this.vs(e,c,n,mm(s,Yn)).next(l=>l))})}bs(e,n){let i=new ht(Zl(e));return n.forEach((s,a)=>{ki(e,a)&&(i=i.add(a))}),i}Ds(e,n,i,s){if(e.limit===null)return!1;if(i.size!==n.size)return!0;let a=e.limitType==="F"?n.last():n.first();return!!a&&(a.hasPendingWrites||a.version.compareTo(s)>0)}ws(e,n,i){return We()<=W.DEBUG&&L("QueryEngine","Using full collection scan to execute query:",He(n)),this.gs.getDocumentsMatchingQuery(e,n,ke.min(),i)}vs(e,n,i,s){return this.gs.getDocumentsMatchingQuery(e,i,s).next(a=>(n.forEach(c=>{a=a.insert(c.key,c)}),a))}};var ka="LocalStore",_p=3e8,$o=class{constructor(e,n,i,s){this.persistence=e,this.Cs=n,this.serializer=s,this.Fs=new it($),this.Ms=new ne(a=>Pa(a),Da),this.xs=new Map,this.Os=e.getRemoteDocumentCache(),this.hi=e.getTargetCache(),this.Ti=e.getBundleCache(),this.Ns(i)}Ns(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new xo(this.Os,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Os.setIndexManager(this.indexManager),this.Cs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.Fs))}};function wp(r,e,n,i){return new $o(r,e,n,i)}async function wh(r,e){let n=U(r);return await n.persistence.runTransaction("Handle user change","readonly",i=>{let s;return n.mutationQueue.getAllMutationBatches(i).next(a=>(s=a,n.Ns(e),n.mutationQueue.getAllMutationBatches(i))).next(a=>{let c=[],l=[],d=K();for(let f of s){c.push(f.batchId);for(let p of f.mutations)d=d.add(p.key)}for(let f of a){l.push(f.batchId);for(let p of f.mutations)d=d.add(p.key)}return n.localDocuments.getDocuments(i,d).next(f=>({Bs:f,removedBatchIds:c,addedBatchIds:l}))})})}function vp(r,e){let n=U(r);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",i=>{let s=e.batch.keys(),a=n.Os.newChangeBuffer({trackRemovals:!0});return function(l,d,f,p){let w=f.batch,v=w.keys(),C=x.resolve();return v.forEach(P=>{C=C.next(()=>p.getEntry(d,P)).next(O=>{let V=f.docVersions.get(P);X(V!==null,48541),O.version.compareTo(V)<0&&(w.applyToRemoteDocument(O,f),O.isValidDocument()&&(O.setReadTime(f.commitVersion),p.addEntry(O)))})}),C.next(()=>l.mutationQueue.removeMutationBatch(d,w))}(n,i,e,a).next(()=>a.apply(i)).next(()=>n.mutationQueue.performConsistencyCheck(i)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(i,s,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(i,function(l){let d=K();for(let f=0;f<l.mutationResults.length;++f)l.mutationResults[f].transformResults.length>0&&(d=d.add(l.batch.mutations[f].key));return d}(e))).next(()=>n.localDocuments.getDocuments(i,s))})}function vh(r){let e=U(r);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.hi.getLastRemoteSnapshotVersion(n))}function Ep(r,e){let n=U(r),i=e.snapshotVersion,s=n.Fs;return n.persistence.runTransaction("Apply remote event","readwrite-primary",a=>{let c=n.Os.newChangeBuffer({trackRemovals:!0});s=n.Fs;let l=[];e.targetChanges.forEach((p,w)=>{let v=s.get(w);if(!v)return;l.push(n.hi.removeMatchingKeys(a,p.removedDocuments,w).next(()=>n.hi.addMatchingKeys(a,p.addedDocuments,w)));let C=v.withSequenceNumber(a.currentSequenceNumber);e.targetMismatches.get(w)!==null?C=C.withResumeToken(wt.EMPTY_BYTE_STRING,z.min()).withLastLimboFreeSnapshotVersion(z.min()):p.resumeToken.approximateByteSize()>0&&(C=C.withResumeToken(p.resumeToken,i)),s=s.insert(w,C),function(O,V,j){return O.resumeToken.approximateByteSize()===0||V.snapshotVersion.toMicroseconds()-O.snapshotVersion.toMicroseconds()>=_p?!0:j.addedDocuments.size+j.modifiedDocuments.size+j.removedDocuments.size>0}(v,C,p)&&l.push(n.hi.updateTargetData(a,C))});let d=re(),f=K();if(e.documentUpdates.forEach(p=>{e.resolvedLimboDocuments.has(p)&&l.push(n.persistence.referenceDelegate.updateLimboDocument(a,p))}),l.push(Ip(a,c,e.documentUpdates).next(p=>{d=p.Ls,f=p.ks})),!i.isEqual(z.min())){let p=n.hi.getLastRemoteSnapshotVersion(a).next(w=>n.hi.setTargetsMetadata(a,a.currentSequenceNumber,i));l.push(p)}return x.waitFor(l).next(()=>c.apply(a)).next(()=>n.localDocuments.getLocalViewOfDocuments(a,d,f)).next(()=>d)}).then(a=>(n.Fs=s,a))}function Ip(r,e,n){let i=K(),s=K();return n.forEach(a=>i=i.add(a)),e.getEntries(r,i).next(a=>{let c=re();return n.forEach((l,d)=>{let f=a.get(l);d.isFoundDocument()!==f.isFoundDocument()&&(s=s.add(l)),d.isNoDocument()&&d.version.isEqual(z.min())?(e.removeEntry(l,d.readTime),c=c.insert(l,d)):!f.isValidDocument()||d.version.compareTo(f.version)>0||d.version.compareTo(f.version)===0&&f.hasPendingWrites?(e.addEntry(d),c=c.insert(l,d)):L(ka,"Ignoring outdated watch update for ",l,". Current version:",f.version," Watch version:",d.version)}),{Ls:c,ks:s}})}function Tp(r,e){let n=U(r);return n.persistence.runTransaction("Get next mutation batch","readonly",i=>(e===void 0&&(e=ba),n.mutationQueue.getNextMutationBatchAfterBatchId(i,e)))}function bp(r,e){let n=U(r);return n.persistence.runTransaction("Allocate target","readwrite",i=>{let s;return n.hi.getTargetData(i,e).next(a=>a?(s=a,x.resolve(s)):n.hi.allocateTargetId(i).next(c=>(s=new rr(e,c,"TargetPurposeListen",i.currentSequenceNumber),n.hi.addTargetData(i,s).next(()=>s))))}).then(i=>{let s=n.Fs.get(i.targetId);return(s===null||i.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(n.Fs=n.Fs.insert(i.targetId,i),n.Ms.set(e,i.targetId)),i})}async function Go(r,e,n){let i=U(r),s=i.Fs.get(e),a=n?"readwrite":"readwrite-primary";try{n||await i.persistence.runTransaction("Release target",a,c=>i.persistence.referenceDelegate.removeTarget(c,s))}catch(c){if(!wn(c))throw c;L(ka,`Failed to update sequence numbers for target ${e}: ${c}`)}i.Fs=i.Fs.remove(e),i.Ms.delete(s.target)}function al(r,e,n){let i=U(r),s=z.min(),a=K();return i.persistence.runTransaction("Execute query","readwrite",c=>function(d,f,p){let w=U(d),v=w.Ms.get(p);return v!==void 0?x.resolve(w.Fs.get(v)):w.hi.getTargetData(f,p)}(i,c,Mt(e)).next(l=>{if(l)return s=l.lastLimboFreeSnapshotVersion,i.hi.getMatchingKeysForTargetId(c,l.targetId).next(d=>{a=d})}).next(()=>i.Cs.getDocumentsMatchingQuery(c,e,n?s:z.min(),n?a:K())).next(l=>(Ap(i,Fm(e),l),{documents:l,qs:a})))}function Ap(r,e,n){let i=r.xs.get(e)||z.min();n.forEach((s,a)=>{a.readTime.compareTo(i)>0&&(i=a.readTime)}),r.xs.set(e,i)}var hi=class{constructor(){this.activeTargetIds=$m()}Gs(e){this.activeTargetIds=this.activeTargetIds.add(e)}zs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Ws(){let e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}};var Ko=class{constructor(){this.Fo=new hi,this.Mo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,i){}addLocalQueryTarget(e,n=!0){return n&&this.Fo.Gs(e),this.Mo[e]||"not-current"}updateQueryState(e,n,i){this.Mo[e]=n}removeLocalQueryTarget(e){this.Fo.zs(e)}isLocalQueryTarget(e){return this.Fo.activeTargetIds.has(e)}clearQueryState(e){delete this.Mo[e]}getAllActiveQueryTargets(){return this.Fo.activeTargetIds}isActiveQueryTarget(e){return this.Fo.activeTargetIds.has(e)}start(){return this.Fo=new hi,Promise.resolve()}handleUserChange(e,n,i){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}};var Wo=class{xo(e){}shutdown(){}};var cl="ConnectivityMonitor",di=class{constructor(){this.Oo=()=>this.No(),this.Bo=()=>this.Lo(),this.ko=[],this.qo()}xo(e){this.ko.push(e)}shutdown(){window.removeEventListener("online",this.Oo),window.removeEventListener("offline",this.Bo)}qo(){window.addEventListener("online",this.Oo),window.addEventListener("offline",this.Bo)}No(){L(cl,"Network connectivity changed: AVAILABLE");for(let e of this.ko)e(0)}Lo(){L(cl,"Network connectivity changed: UNAVAILABLE");for(let e of this.ko)e(1)}static C(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}};var $r=null;function Ho(){return $r===null?$r=function(){return 268435456+Math.round(2147483648*Math.random())}():$r++,"0x"+$r.toString(16)}var Ms="RestConnection",Sp={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"},Qo=class{get Qo(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;let n=e.ssl?"https":"http",i=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.$o=n+"://"+e.host,this.Uo=`projects/${i}/databases/${s}`,this.Ko=this.databaseId.database===Zr?`project_id=${i}`:`project_id=${i}&database_id=${s}`}Wo(e,n,i,s,a){let c=Ho(),l=this.Go(e,n.toUriEncodedString());L(Ms,`Sending RPC '${e}' ${c}:`,l,i);let d={"google-cloud-resource-prefix":this.Uo,"x-goog-request-params":this.Ko};this.zo(d,s,a);let{host:f}=new URL(l),p=Lr(f);return this.jo(e,l,d,i,p).then(w=>(L(Ms,`Received RPC '${e}' ${c}: `,w),w),w=>{throw pe(Ms,`RPC '${e}' ${c} failed with error: `,w,"url: ",l,"request:",i),w})}Jo(e,n,i,s,a,c){return this.Wo(e,n,i,s,a)}zo(e,n,i){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+yn}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((s,a)=>e[a]=s),i&&i.headers.forEach((s,a)=>e[a]=s)}Go(e,n){let i=Sp[e];return`${this.$o}/v1/${n}:${i}`}terminate(){}};var Xo=class{constructor(e){this.Ho=e.Ho,this.Yo=e.Yo}Zo(e){this.Xo=e}e_(e){this.t_=e}n_(e){this.r_=e}onMessage(e){this.i_=e}close(){this.Yo()}send(e){this.Ho(e)}s_(){this.Xo()}o_(){this.t_()}__(e){this.r_(e)}a_(e){this.i_(e)}};var _t="WebChannelConnection",Jo=class extends Qo{constructor(e){super(e),this.u_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}jo(e,n,i,s,a){let c=Ho();return new Promise((l,d)=>{let f=new xs;f.setWithCredentials(!0),f.listenOnce(Vs.COMPLETE,()=>{try{switch(f.getLastErrorCode()){case Gn.NO_ERROR:let w=f.getResponseJson();L(_t,`XHR for RPC '${e}' ${c} received:`,JSON.stringify(w)),l(w);break;case Gn.TIMEOUT:L(_t,`RPC '${e}' ${c} timed out`),d(new M(D.DEADLINE_EXCEEDED,"Request time out"));break;case Gn.HTTP_ERROR:let v=f.getStatus();if(L(_t,`RPC '${e}' ${c} failed with status:`,v,"response text:",f.getResponseText()),v>0){let C=f.getResponseJson();Array.isArray(C)&&(C=C[0]);let P=C?.error;if(P&&P.status&&P.message){let O=function(j){let q=j.toLowerCase().replace(/_/g,"-");return Object.values(D).indexOf(q)>=0?q:D.UNKNOWN}(P.status);d(new M(O,P.message))}else d(new M(D.UNKNOWN,"Server responded with status "+f.getStatus()))}else d(new M(D.UNAVAILABLE,"Connection failed."));break;default:F(9055,{c_:e,streamId:c,l_:f.getLastErrorCode(),h_:f.getLastError()})}}finally{L(_t,`RPC '${e}' ${c} completed.`)}});let p=JSON.stringify(s);L(_t,`RPC '${e}' ${c} sending request:`,s),f.send(n,"POST",p,i,15)})}P_(e,n,i){let s=Ho(),a=[this.$o,"/","google.firestore.v1.Firestore","/",e,"/channel"],c=Os(),l=Ns(),d={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},f=this.longPollingOptions.timeoutSeconds;f!==void 0&&(d.longPollingTimeout=Math.round(1e3*f)),this.useFetchStreams&&(d.useFetchStreams=!0),this.zo(d.initMessageHeaders,n,i),d.encodeInitMessageHeaders=!0;let p=a.join("");L(_t,`Creating RPC '${e}' stream ${s}: ${p}`,d);let w=c.createWebChannel(p,d);this.T_(w);let v=!1,C=!1,P=new Xo({Ho:V=>{C?L(_t,`Not sending because RPC '${e}' stream ${s} is closed:`,V):(v||(L(_t,`Opening RPC '${e}' stream ${s} transport.`),w.open(),v=!0),L(_t,`RPC '${e}' stream ${s} sending:`,V),w.send(V))},Yo:()=>w.close()}),O=(V,j,q)=>{V.listen(j,G=>{try{q(G)}catch(et){setTimeout(()=>{throw et},0)}})};return O(w,Ke.EventType.OPEN,()=>{C||(L(_t,`RPC '${e}' stream ${s} transport opened.`),P.s_())}),O(w,Ke.EventType.CLOSE,()=>{C||(C=!0,L(_t,`RPC '${e}' stream ${s} transport closed`),P.__(),this.I_(w))}),O(w,Ke.EventType.ERROR,V=>{C||(C=!0,pe(_t,`RPC '${e}' stream ${s} transport errored. Name:`,V.name,"Message:",V.message),P.__(new M(D.UNAVAILABLE,"The operation could not be completed")))}),O(w,Ke.EventType.MESSAGE,V=>{var j;if(!C){let q=V.data[0];X(!!q,16349);let G=q,et=G?.error||((j=G[0])===null||j===void 0?void 0:j.error);if(et){L(_t,`RPC '${e}' stream ${s} received error:`,et);let St=et.status,Y=function(_){let E=ot[_];if(E!==void 0)return lh(E)}(St),T=et.message;Y===void 0&&(Y=D.INTERNAL,T="Unknown error status: "+St+" with message "+et.message),C=!0,P.__(new M(Y,T)),w.close()}else L(_t,`RPC '${e}' stream ${s} received:`,q),P.a_(q)}}),O(l,ks.STAT_EVENT,V=>{V.stat===zr.PROXY?L(_t,`RPC '${e}' stream ${s} detected buffering proxy`):V.stat===zr.NOPROXY&&L(_t,`RPC '${e}' stream ${s} detected no buffering proxy`)}),setTimeout(()=>{P.o_()},0),P}terminate(){this.u_.forEach(e=>e.close()),this.u_=[]}T_(e){this.u_.push(e)}I_(e){this.u_=this.u_.filter(n=>n===e)}};function Fs(){return typeof document<"u"?document:null}function Ni(r){return new _o(r,!0)}var fi=class{constructor(e,n,i=1e3,s=1.5,a=6e4){this.Fi=e,this.timerId=n,this.d_=i,this.E_=s,this.A_=a,this.R_=0,this.V_=null,this.m_=Date.now(),this.reset()}reset(){this.R_=0}f_(){this.R_=this.A_}g_(e){this.cancel();let n=Math.floor(this.R_+this.p_()),i=Math.max(0,Date.now()-this.m_),s=Math.max(0,n-i);s>0&&L("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.R_} ms, delay with jitter: ${n} ms, last attempt: ${i} ms ago)`),this.V_=this.Fi.enqueueAfterDelay(this.timerId,s,()=>(this.m_=Date.now(),e())),this.R_*=this.E_,this.R_<this.d_&&(this.R_=this.d_),this.R_>this.A_&&(this.R_=this.A_)}y_(){this.V_!==null&&(this.V_.skipDelay(),this.V_=null)}cancel(){this.V_!==null&&(this.V_.cancel(),this.V_=null)}p_(){return(Math.random()-.5)*this.R_}};var ul="PersistentStream",mi=class{constructor(e,n,i,s,a,c,l,d){this.Fi=e,this.w_=i,this.S_=s,this.connection=a,this.authCredentialsProvider=c,this.appCheckCredentialsProvider=l,this.listener=d,this.state=0,this.b_=0,this.D_=null,this.v_=null,this.stream=null,this.C_=0,this.F_=new fi(e,n)}M_(){return this.state===1||this.state===5||this.x_()}x_(){return this.state===2||this.state===3}start(){this.C_=0,this.state!==4?this.auth():this.O_()}async stop(){this.M_()&&await this.close(0)}N_(){this.state=0,this.F_.reset()}B_(){this.x_()&&this.D_===null&&(this.D_=this.Fi.enqueueAfterDelay(this.w_,6e4,()=>this.L_()))}k_(e){this.q_(),this.stream.send(e)}async L_(){if(this.x_())return this.close(0)}q_(){this.D_&&(this.D_.cancel(),this.D_=null)}Q_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,n){this.q_(),this.Q_(),this.F_.cancel(),this.b_++,e!==4?this.F_.reset():n&&n.code===D.RESOURCE_EXHAUSTED?(Zt(n.toString()),Zt("Using maximum backoff delay to prevent overloading the backend."),this.F_.f_()):n&&n.code===D.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.U_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.n_(n)}U_(){}auth(){this.state=1;let e=this.K_(this.b_),n=this.b_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([i,s])=>{this.b_===n&&this.W_(i,s)},i=>{e(()=>{let s=new M(D.UNKNOWN,"Fetching auth token failed: "+i.message);return this.G_(s)})})}W_(e,n){let i=this.K_(this.b_);this.stream=this.z_(e,n),this.stream.Zo(()=>{i(()=>this.listener.Zo())}),this.stream.e_(()=>{i(()=>(this.state=2,this.v_=this.Fi.enqueueAfterDelay(this.S_,1e4,()=>(this.x_()&&(this.state=3),Promise.resolve())),this.listener.e_()))}),this.stream.n_(s=>{i(()=>this.G_(s))}),this.stream.onMessage(s=>{i(()=>++this.C_==1?this.j_(s):this.onNext(s))})}O_(){this.state=5,this.F_.g_(async()=>{this.state=0,this.start()})}G_(e){return L(ul,`close with error: ${e}`),this.stream=null,this.close(4,e)}K_(e){return n=>{this.Fi.enqueueAndForget(()=>this.b_===e?n():(L(ul,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}},Yo=class extends mi{constructor(e,n,i,s,a,c){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,i,s,c),this.serializer=a}z_(e,n){return this.connection.P_("Listen",e,n)}j_(e){return this.onNext(e)}onNext(e){this.F_.reset();let n=ip(this.serializer,e),i=function(a){if(!("targetChange"in a))return z.min();let c=a.targetChange;return c.targetIds&&c.targetIds.length?z.min():c.readTime?Ft(c.readTime):z.min()}(e);return this.listener.J_(n,i)}H_(e){let n={};n.database=Io(this.serializer),n.addTarget=function(a,c){let l,d=c.target;if(l=ao(d)?{documents:ap(a,d)}:{query:cp(a,d).Vt},l.targetId=c.targetId,c.resumeToken.approximateByteSize()>0){l.resumeToken=hh(a,c.resumeToken);let f=wo(a,c.expectedCount);f!==null&&(l.expectedCount=f)}else if(c.snapshotVersion.compareTo(z.min())>0){l.readTime=ai(a,c.snapshotVersion.toTimestamp());let f=wo(a,c.expectedCount);f!==null&&(l.expectedCount=f)}return l}(this.serializer,e);let i=lp(this.serializer,e);i&&(n.labels=i),this.k_(n)}Y_(e){let n={};n.database=Io(this.serializer),n.removeTarget=e,this.k_(n)}},Zo=class extends mi{constructor(e,n,i,s,a,c){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,i,s,c),this.serializer=a}get Z_(){return this.C_>0}start(){this.lastStreamToken=void 0,super.start()}U_(){this.Z_&&this.X_([])}z_(e,n){return this.connection.P_("Write",e,n)}j_(e){return X(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,X(!e.writeResults||e.writeResults.length===0,55816),this.listener.ea()}onNext(e){X(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.F_.reset();let n=op(e.writeResults,e.commitTime),i=Ft(e.commitTime);return this.listener.ta(i,n)}na(){let e={};e.database=Io(this.serializer),this.k_(e)}X_(e){let n={streamToken:this.lastStreamToken,writes:e.map(i=>sp(this.serializer,i))};this.k_(n)}};var ta=class{},ea=class extends ta{constructor(e,n,i,s){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=i,this.serializer=s,this.ra=!1}ia(){if(this.ra)throw new M(D.FAILED_PRECONDITION,"The client has already been terminated.")}Wo(e,n,i,s){return this.ia(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([a,c])=>this.connection.Wo(e,vo(n,i),s,a,c)).catch(a=>{throw a.name==="FirebaseError"?(a.code===D.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),a):new M(D.UNKNOWN,a.toString())})}Jo(e,n,i,s,a){return this.ia(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([c,l])=>this.connection.Jo(e,vo(n,i),s,c,l,a)).catch(c=>{throw c.name==="FirebaseError"?(c.code===D.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),c):new M(D.UNKNOWN,c.toString())})}terminate(){this.ra=!0,this.connection.terminate()}},na=class{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.sa=0,this.oa=null,this._a=!0}aa(){this.sa===0&&(this.ua("Unknown"),this.oa=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.oa=null,this.ca("Backend didn't respond within 10 seconds."),this.ua("Offline"),Promise.resolve())))}la(e){this.state==="Online"?this.ua("Unknown"):(this.sa++,this.sa>=1&&(this.ha(),this.ca(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ua("Offline")))}set(e){this.ha(),this.sa=0,e==="Online"&&(this._a=!1),this.ua(e)}ua(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}ca(e){let n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this._a?(Zt(n),this._a=!1):L("OnlineStateTracker",n)}ha(){this.oa!==null&&(this.oa.cancel(),this.oa=null)}};var Me="RemoteStore",ra=class{constructor(e,n,i,s,a){this.localStore=e,this.datastore=n,this.asyncQueue=i,this.remoteSyncer={},this.Pa=[],this.Ta=new Map,this.Ia=new Set,this.da=[],this.Ea=a,this.Ea.xo(c=>{i.enqueueAndForget(async()=>{Fe(this)&&(L(Me,"Restarting streams for network reachability change."),await async function(d){let f=U(d);f.Ia.add(4),await dr(f),f.Aa.set("Unknown"),f.Ia.delete(4),await Oi(f)}(this))})}),this.Aa=new na(i,s)}};async function Oi(r){if(Fe(r))for(let e of r.da)await e(!0)}async function dr(r){for(let e of r.da)await e(!1)}function Eh(r,e){let n=U(r);n.Ta.has(e.targetId)||(n.Ta.set(e.targetId,e),Ma(n)?La(n):vn(n).x_()&&Oa(n,e))}function Na(r,e){let n=U(r),i=vn(n);n.Ta.delete(e),i.x_()&&Ih(n,e),n.Ta.size===0&&(i.x_()?i.B_():Fe(n)&&n.Aa.set("Unknown"))}function Oa(r,e){if(r.Ra.$e(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(z.min())>0){let n=r.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}vn(r).H_(e)}function Ih(r,e){r.Ra.$e(e),vn(r).Y_(e)}function La(r){r.Ra=new yo({getRemoteKeysForTarget:e=>r.remoteSyncer.getRemoteKeysForTarget(e),Et:e=>r.Ta.get(e)||null,lt:()=>r.datastore.serializer.databaseId}),vn(r).start(),r.Aa.aa()}function Ma(r){return Fe(r)&&!vn(r).M_()&&r.Ta.size>0}function Fe(r){return U(r).Ia.size===0}function Th(r){r.Ra=void 0}async function Rp(r){r.Aa.set("Online")}async function Cp(r){r.Ta.forEach((e,n)=>{Oa(r,e)})}async function Pp(r,e){Th(r),Ma(r)?(r.Aa.la(e),La(r)):r.Aa.set("Unknown")}async function Dp(r,e,n){if(r.Aa.set("Online"),e instanceof si&&e.state===2&&e.cause)try{await async function(s,a){let c=a.cause;for(let l of a.targetIds)s.Ta.has(l)&&(await s.remoteSyncer.rejectListen(l,c),s.Ta.delete(l),s.Ra.removeTarget(l))}(r,e)}catch(i){L(Me,"Failed to remove targets %s: %s ",e.targetIds.join(","),i),await pi(r,i)}else if(e instanceof Ye?r.Ra.Ye(e):e instanceof ii?r.Ra.it(e):r.Ra.et(e),!n.isEqual(z.min()))try{let i=await vh(r.localStore);n.compareTo(i)>=0&&await function(a,c){let l=a.Ra.Pt(c);return l.targetChanges.forEach((d,f)=>{if(d.resumeToken.approximateByteSize()>0){let p=a.Ta.get(f);p&&a.Ta.set(f,p.withResumeToken(d.resumeToken,c))}}),l.targetMismatches.forEach((d,f)=>{let p=a.Ta.get(d);if(!p)return;a.Ta.set(d,p.withResumeToken(wt.EMPTY_BYTE_STRING,p.snapshotVersion)),Ih(a,d);let w=new rr(p.target,d,f,p.sequenceNumber);Oa(a,w)}),a.remoteSyncer.applyRemoteEvent(l)}(r,n)}catch(i){L(Me,"Failed to raise snapshot:",i),await pi(r,i)}}async function pi(r,e,n){if(!wn(e))throw e;r.Ia.add(1),await dr(r),r.Aa.set("Offline"),n||(n=()=>vh(r.localStore)),r.asyncQueue.enqueueRetryable(async()=>{L(Me,"Retrying IndexedDB access"),await n(),r.Ia.delete(1),await Oi(r)})}function bh(r,e){return e().catch(n=>pi(r,n,e))}async function Li(r){let e=U(r),n=ye(e),i=e.Pa.length>0?e.Pa[e.Pa.length-1].batchId:ba;for(;xp(e);)try{let s=await Tp(e.localStore,i);if(s===null){e.Pa.length===0&&n.B_();break}i=s.batchId,Vp(e,s)}catch(s){await pi(e,s)}Ah(e)&&Sh(e)}function xp(r){return Fe(r)&&r.Pa.length<10}function Vp(r,e){r.Pa.push(e);let n=ye(r);n.x_()&&n.Z_&&n.X_(e.mutations)}function Ah(r){return Fe(r)&&!ye(r).M_()&&r.Pa.length>0}function Sh(r){ye(r).start()}async function kp(r){ye(r).na()}async function Np(r){let e=ye(r);for(let n of r.Pa)e.X_(n.mutations)}async function Op(r,e,n){let i=r.Pa.shift(),s=fo.from(i,e,n);await bh(r,()=>r.remoteSyncer.applySuccessfulWrite(s)),await Li(r)}async function Lp(r,e){e&&ye(r).Z_&&await async function(i,s){if(function(c){return Jm(c)&&c!==D.ABORTED}(s.code)){let a=i.Pa.shift();ye(i).N_(),await bh(i,()=>i.remoteSyncer.rejectFailedWrite(a.batchId,s)),await Li(i)}}(r,e),Ah(r)&&Sh(r)}async function ll(r,e){let n=U(r);n.asyncQueue.verifyOperationInProgress(),L(Me,"RemoteStore received new credentials");let i=Fe(n);n.Ia.add(3),await dr(n),i&&n.Aa.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.Ia.delete(3),await Oi(n)}async function Mp(r,e){let n=U(r);e?(n.Ia.delete(2),await Oi(n)):e||(n.Ia.add(2),await dr(n),n.Aa.set("Unknown"))}function vn(r){return r.Va||(r.Va=function(n,i,s){let a=U(n);return a.ia(),new Yo(i,a.connection,a.authCredentials,a.appCheckCredentials,a.serializer,s)}(r.datastore,r.asyncQueue,{Zo:Rp.bind(null,r),e_:Cp.bind(null,r),n_:Pp.bind(null,r),J_:Dp.bind(null,r)}),r.da.push(async e=>{e?(r.Va.N_(),Ma(r)?La(r):r.Aa.set("Unknown")):(await r.Va.stop(),Th(r))})),r.Va}function ye(r){return r.ma||(r.ma=function(n,i,s){let a=U(n);return a.ia(),new Zo(i,a.connection,a.authCredentials,a.appCheckCredentials,a.serializer,s)}(r.datastore,r.asyncQueue,{Zo:()=>Promise.resolve(),e_:kp.bind(null,r),n_:Lp.bind(null,r),ea:Np.bind(null,r),ta:Op.bind(null,r)}),r.da.push(async e=>{e?(r.ma.N_(),await Li(r)):(await r.ma.stop(),r.Pa.length>0&&(L(Me,`Stopping write stream with ${r.Pa.length} pending writes`),r.Pa=[]))})),r.ma}var ia=class r{constructor(e,n,i,s,a){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=i,this.op=s,this.removalCallback=a,this.deferred=new Nt,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(c=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,i,s,a){let c=Date.now()+i,l=new r(e,n,c,s,a);return l.start(i),l}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new M(D.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}};function Fa(r,e){if(Zt("AsyncQueue",`${e}: ${r}`),wn(r))return new M(D.UNAVAILABLE,`${e}: ${r}`);throw r}var gi=class r{static emptySet(e){return new r(e.comparator)}constructor(e){this.comparator=e?(n,i)=>e(n,i)||B.comparator(n.key,i.key):(n,i)=>B.comparator(n.key,i.key),this.keyedMap=Kn(),this.sortedSet=new it(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){let n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,i)=>(e(n),!1))}add(e){let n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){let n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof r)||this.size!==e.size)return!1;let n=this.sortedSet.getIterator(),i=e.sortedSet.getIterator();for(;n.hasNext();){let s=n.getNext().key,a=i.getNext().key;if(!s.isEqual(a))return!1}return!0}toString(){let e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){let i=new r;return i.comparator=this.comparator,i.keyedMap=e,i.sortedSet=n,i}};var yi=class{constructor(){this.fa=new it(B.comparator)}track(e){let n=e.doc.key,i=this.fa.get(n);i?e.type!==0&&i.type===3?this.fa=this.fa.insert(n,e):e.type===3&&i.type!==1?this.fa=this.fa.insert(n,{type:i.type,doc:e.doc}):e.type===2&&i.type===2?this.fa=this.fa.insert(n,{type:2,doc:e.doc}):e.type===2&&i.type===0?this.fa=this.fa.insert(n,{type:0,doc:e.doc}):e.type===1&&i.type===0?this.fa=this.fa.remove(n):e.type===1&&i.type===2?this.fa=this.fa.insert(n,{type:1,doc:i.doc}):e.type===0&&i.type===1?this.fa=this.fa.insert(n,{type:2,doc:e.doc}):F(63341,{At:e,ga:i}):this.fa=this.fa.insert(n,e)}pa(){let e=[];return this.fa.inorderTraversal((n,i)=>{e.push(i)}),e}},mn=class r{constructor(e,n,i,s,a,c,l,d,f){this.query=e,this.docs=n,this.oldDocs=i,this.docChanges=s,this.mutatedKeys=a,this.fromCache=c,this.syncStateChanged=l,this.excludesMetadataChanges=d,this.hasCachedResults=f}static fromInitialDocuments(e,n,i,s,a){let c=[];return n.forEach(l=>{c.push({type:0,doc:l})}),new r(e,n,gi.emptySet(n),c,i,s,!0,!1,a)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Vi(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;let n=this.docChanges,i=e.docChanges;if(n.length!==i.length)return!1;for(let s=0;s<n.length;s++)if(n[s].type!==i[s].type||!n[s].doc.isEqual(i[s].doc))return!1;return!0}};var sa=class{constructor(){this.ya=void 0,this.wa=[]}Sa(){return this.wa.some(e=>e.ba())}},oa=class{constructor(){this.queries=hl(),this.onlineState="Unknown",this.Da=new Set}terminate(){(function(n,i){let s=U(n),a=s.queries;s.queries=hl(),a.forEach((c,l)=>{for(let d of l.wa)d.onError(i)})})(this,new M(D.ABORTED,"Firestore shutting down"))}};function hl(){return new ne(r=>Yl(r),Vi)}async function Rh(r,e){let n=U(r),i=3,s=e.query,a=n.queries.get(s);a?!a.Sa()&&e.ba()&&(i=2):(a=new sa,i=e.ba()?0:1);try{switch(i){case 0:a.ya=await n.onListen(s,!0);break;case 1:a.ya=await n.onListen(s,!1);break;case 2:await n.onFirstRemoteStoreListen(s)}}catch(c){let l=Fa(c,`Initialization of query '${He(e.query)}' failed`);return void e.onError(l)}n.queries.set(s,a),a.wa.push(e),e.va(n.onlineState),a.ya&&e.Ca(a.ya)&&Ba(n)}async function Ch(r,e){let n=U(r),i=e.query,s=3,a=n.queries.get(i);if(a){let c=a.wa.indexOf(e);c>=0&&(a.wa.splice(c,1),a.wa.length===0?s=e.ba()?0:1:!a.Sa()&&e.ba()&&(s=2))}switch(s){case 0:return n.queries.delete(i),n.onUnlisten(i,!0);case 1:return n.queries.delete(i),n.onUnlisten(i,!1);case 2:return n.onLastRemoteStoreUnlisten(i);default:return}}function Fp(r,e){let n=U(r),i=!1;for(let s of e){let a=s.query,c=n.queries.get(a);if(c){for(let l of c.wa)l.Ca(s)&&(i=!0);c.ya=s}}i&&Ba(n)}function Bp(r,e,n){let i=U(r),s=i.queries.get(e);if(s)for(let a of s.wa)a.onError(n);i.queries.delete(e)}function Ba(r){r.Da.forEach(e=>{e.next()})}var aa,dl;(dl=aa||(aa={})).Fa="default",dl.Cache="cache";var _i=class{constructor(e,n,i){this.query=e,this.Ma=n,this.xa=!1,this.Oa=null,this.onlineState="Unknown",this.options=i||{}}Ca(e){if(!this.options.includeMetadataChanges){let i=[];for(let s of e.docChanges)s.type!==3&&i.push(s);e=new mn(e.query,e.docs,e.oldDocs,i,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.xa?this.Na(e)&&(this.Ma.next(e),n=!0):this.Ba(e,this.onlineState)&&(this.La(e),n=!0),this.Oa=e,n}onError(e){this.Ma.error(e)}va(e){this.onlineState=e;let n=!1;return this.Oa&&!this.xa&&this.Ba(this.Oa,e)&&(this.La(this.Oa),n=!0),n}Ba(e,n){if(!e.fromCache||!this.ba())return!0;let i=n!=="Offline";return(!this.options.ka||!i)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}Na(e){if(e.docChanges.length>0)return!0;let n=this.Oa&&this.Oa.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}La(e){e=mn.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.xa=!0,this.Ma.next(e)}ba(){return this.options.source!==aa.Cache}};var wi=class{constructor(e){this.key=e}},vi=class{constructor(e){this.key=e}},ca=class{constructor(e,n){this.query=e,this.Ha=n,this.Ya=null,this.hasCachedResults=!1,this.current=!1,this.Za=K(),this.mutatedKeys=K(),this.Xa=Zl(e),this.eu=new gi(this.Xa)}get tu(){return this.Ha}nu(e,n){let i=n?n.ru:new yi,s=n?n.eu:this.eu,a=n?n.mutatedKeys:this.mutatedKeys,c=s,l=!1,d=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,f=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal((p,w)=>{let v=s.get(p),C=ki(this.query,w)?w:null,P=!!v&&this.mutatedKeys.has(v.key),O=!!C&&(C.hasLocalMutations||this.mutatedKeys.has(C.key)&&C.hasCommittedMutations),V=!1;v&&C?v.data.isEqual(C.data)?P!==O&&(i.track({type:3,doc:C}),V=!0):this.iu(v,C)||(i.track({type:2,doc:C}),V=!0,(d&&this.Xa(C,d)>0||f&&this.Xa(C,f)<0)&&(l=!0)):!v&&C?(i.track({type:0,doc:C}),V=!0):v&&!C&&(i.track({type:1,doc:v}),V=!0,(d||f)&&(l=!0)),V&&(C?(c=c.add(C),a=O?a.add(p):a.delete(p)):(c=c.delete(p),a=a.delete(p)))}),this.query.limit!==null)for(;c.size>this.query.limit;){let p=this.query.limitType==="F"?c.last():c.first();c=c.delete(p.key),a=a.delete(p.key),i.track({type:1,doc:p})}return{eu:c,ru:i,Ds:l,mutatedKeys:a}}iu(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,i,s){let a=this.eu;this.eu=e.eu,this.mutatedKeys=e.mutatedKeys;let c=e.ru.pa();c.sort((p,w)=>function(C,P){let O=V=>{switch(V){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return F(20277,{At:V})}};return O(C)-O(P)}(p.type,w.type)||this.Xa(p.doc,w.doc)),this.su(i),s=s!=null&&s;let l=n&&!s?this.ou():[],d=this.Za.size===0&&this.current&&!s?1:0,f=d!==this.Ya;return this.Ya=d,c.length!==0||f?{snapshot:new mn(this.query,e.eu,a,c,e.mutatedKeys,d===0,f,!1,!!i&&i.resumeToken.approximateByteSize()>0),_u:l}:{_u:l}}va(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({eu:this.eu,ru:new yi,mutatedKeys:this.mutatedKeys,Ds:!1},!1)):{_u:[]}}au(e){return!this.Ha.has(e)&&!!this.eu.has(e)&&!this.eu.get(e).hasLocalMutations}su(e){e&&(e.addedDocuments.forEach(n=>this.Ha=this.Ha.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Ha=this.Ha.delete(n)),this.current=e.current)}ou(){if(!this.current)return[];let e=this.Za;this.Za=K(),this.eu.forEach(i=>{this.au(i.key)&&(this.Za=this.Za.add(i.key))});let n=[];return e.forEach(i=>{this.Za.has(i)||n.push(new vi(i))}),this.Za.forEach(i=>{e.has(i)||n.push(new wi(i))}),n}uu(e){this.Ha=e.qs,this.Za=K();let n=this.nu(e.documents);return this.applyChanges(n,!0)}cu(){return mn.fromInitialDocuments(this.query,this.eu,this.mutatedKeys,this.Ya===0,this.hasCachedResults)}},Ua="SyncEngine",ua=class{constructor(e,n,i){this.query=e,this.targetId=n,this.view=i}},la=class{constructor(e){this.key=e,this.lu=!1}},ha=class{constructor(e,n,i,s,a,c){this.localStore=e,this.remoteStore=n,this.eventManager=i,this.sharedClientState=s,this.currentUser=a,this.maxConcurrentLimboResolutions=c,this.hu={},this.Pu=new ne(l=>Yl(l),Vi),this.Tu=new Map,this.Iu=new Set,this.du=new it(B.comparator),this.Eu=new Map,this.Au=new sr,this.Ru={},this.Vu=new Map,this.mu=ir.ur(),this.onlineState="Unknown",this.fu=void 0}get isPrimaryClient(){return this.fu===!0}};async function Up(r,e,n=!0){let i=Nh(r),s,a=i.Pu.get(e);return a?(i.sharedClientState.addLocalQueryTarget(a.targetId),s=a.view.cu()):s=await Ph(i,e,n,!0),s}async function zp(r,e){let n=Nh(r);await Ph(n,e,!0,!1)}async function Ph(r,e,n,i){let s=await bp(r.localStore,Mt(e)),a=s.targetId,c=r.sharedClientState.addLocalQueryTarget(a,n),l;return i&&(l=await qp(r,e,a,c==="current",s.resumeToken)),r.isPrimaryClient&&n&&Eh(r.remoteStore,s),l}async function qp(r,e,n,i,s){r.gu=(w,v,C)=>async function(O,V,j,q){let G=V.view.nu(j);G.Ds&&(G=await al(O.localStore,V.query,!1).then(({documents:T})=>V.view.nu(T,G)));let et=q&&q.targetChanges.get(V.targetId),St=q&&q.targetMismatches.get(V.targetId)!=null,Y=V.view.applyChanges(G,O.isPrimaryClient,et,St);return ml(O,V.targetId,Y._u),Y.snapshot}(r,w,v,C);let a=await al(r.localStore,e,!0),c=new ca(e,a.qs),l=c.nu(a.documents),d=nr.createSynthesizedTargetChangeForCurrentChange(n,i&&r.onlineState!=="Offline",s),f=c.applyChanges(l,r.isPrimaryClient,d);ml(r,n,f._u);let p=new ua(e,n,c);return r.Pu.set(e,p),r.Tu.has(n)?r.Tu.get(n).push(e):r.Tu.set(n,[e]),f.snapshot}async function jp(r,e,n){let i=U(r),s=i.Pu.get(e),a=i.Tu.get(s.targetId);if(a.length>1)return i.Tu.set(s.targetId,a.filter(c=>!Vi(c,e))),void i.Pu.delete(e);i.isPrimaryClient?(i.sharedClientState.removeLocalQueryTarget(s.targetId),i.sharedClientState.isActiveQueryTarget(s.targetId)||await Go(i.localStore,s.targetId,!1).then(()=>{i.sharedClientState.clearQueryState(s.targetId),n&&Na(i.remoteStore,s.targetId),da(i,s.targetId)}).catch(_n)):(da(i,s.targetId),await Go(i.localStore,s.targetId,!0))}async function $p(r,e){let n=U(r),i=n.Pu.get(e),s=n.Tu.get(i.targetId);n.isPrimaryClient&&s.length===1&&(n.sharedClientState.removeLocalQueryTarget(i.targetId),Na(n.remoteStore,i.targetId))}async function Gp(r,e,n){let i=Yp(r);try{let s=await function(c,l){let d=U(c),f=tt.now(),p=l.reduce((C,P)=>C.add(P.key),K()),w,v;return d.persistence.runTransaction("Locally write mutations","readwrite",C=>{let P=re(),O=K();return d.Os.getEntries(C,p).next(V=>{P=V,P.forEach((j,q)=>{q.isValidDocument()||(O=O.add(j))})}).next(()=>d.localDocuments.getOverlayedDocuments(C,P)).next(V=>{w=V;let j=[];for(let q of l){let G=Xm(q,w.get(q.key).overlayedDocument);G!=null&&j.push(new zt(q.key,G,Kl(G.value.mapValue),he.exists(!0)))}return d.mutationQueue.addMutationBatch(C,f,j,l)}).next(V=>{v=V;let j=V.applyToLocalDocumentSet(w,O);return d.documentOverlayCache.saveOverlays(C,V.batchId,j)})}).then(()=>({batchId:v.batchId,changes:eh(w)}))}(i.localStore,e);i.sharedClientState.addPendingMutation(s.batchId),function(c,l,d){let f=c.Ru[c.currentUser.toKey()];f||(f=new it($)),f=f.insert(l,d),c.Ru[c.currentUser.toKey()]=f}(i,s.batchId,n),await fr(i,s.changes),await Li(i.remoteStore)}catch(s){let a=Fa(s,"Failed to persist write");n.reject(a)}}async function Dh(r,e){let n=U(r);try{let i=await Ep(n.localStore,e);e.targetChanges.forEach((s,a)=>{let c=n.Eu.get(a);c&&(X(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1,22616),s.addedDocuments.size>0?c.lu=!0:s.modifiedDocuments.size>0?X(c.lu,14607):s.removedDocuments.size>0&&(X(c.lu,42227),c.lu=!1))}),await fr(n,i,e)}catch(i){await _n(i)}}function fl(r,e,n){let i=U(r);if(i.isPrimaryClient&&n===0||!i.isPrimaryClient&&n===1){let s=[];i.Pu.forEach((a,c)=>{let l=c.view.va(e);l.snapshot&&s.push(l.snapshot)}),function(c,l){let d=U(c);d.onlineState=l;let f=!1;d.queries.forEach((p,w)=>{for(let v of w.wa)v.va(l)&&(f=!0)}),f&&Ba(d)}(i.eventManager,e),s.length&&i.hu.J_(s),i.onlineState=e,i.isPrimaryClient&&i.sharedClientState.setOnlineState(e)}}async function Kp(r,e,n){let i=U(r);i.sharedClientState.updateQueryState(e,"rejected",n);let s=i.Eu.get(e),a=s&&s.key;if(a){let c=new it(B.comparator);c=c.insert(a,Dt.newNoDocument(a,z.min()));let l=K().add(a),d=new ri(z.min(),new Map,new it($),c,l);await Dh(i,d),i.du=i.du.remove(a),i.Eu.delete(e),za(i)}else await Go(i.localStore,e,!1).then(()=>da(i,e,n)).catch(_n)}async function Wp(r,e){let n=U(r),i=e.batch.batchId;try{let s=await vp(n.localStore,e);Vh(n,i,null),xh(n,i),n.sharedClientState.updateMutationState(i,"acknowledged"),await fr(n,s)}catch(s){await _n(s)}}async function Hp(r,e,n){let i=U(r);try{let s=await function(c,l){let d=U(c);return d.persistence.runTransaction("Reject batch","readwrite-primary",f=>{let p;return d.mutationQueue.lookupMutationBatch(f,l).next(w=>(X(w!==null,37113),p=w.keys(),d.mutationQueue.removeMutationBatch(f,w))).next(()=>d.mutationQueue.performConsistencyCheck(f)).next(()=>d.documentOverlayCache.removeOverlaysForBatchId(f,p,l)).next(()=>d.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(f,p)).next(()=>d.localDocuments.getDocuments(f,p))})}(i.localStore,e);Vh(i,e,n),xh(i,e),i.sharedClientState.updateMutationState(e,"rejected",n),await fr(i,s)}catch(s){await _n(s)}}function xh(r,e){(r.Vu.get(e)||[]).forEach(n=>{n.resolve()}),r.Vu.delete(e)}function Vh(r,e,n){let i=U(r),s=i.Ru[i.currentUser.toKey()];if(s){let a=s.get(e);a&&(n?a.reject(n):a.resolve(),s=s.remove(e)),i.Ru[i.currentUser.toKey()]=s}}function da(r,e,n=null){r.sharedClientState.removeLocalQueryTarget(e);for(let i of r.Tu.get(e))r.Pu.delete(i),n&&r.hu.pu(i,n);r.Tu.delete(e),r.isPrimaryClient&&r.Au.zr(e).forEach(i=>{r.Au.containsKey(i)||kh(r,i)})}function kh(r,e){r.Iu.delete(e.path.canonicalString());let n=r.du.get(e);n!==null&&(Na(r.remoteStore,n),r.du=r.du.remove(e),r.Eu.delete(n),za(r))}function ml(r,e,n){for(let i of n)i instanceof wi?(r.Au.addReference(i.key,e),Qp(r,i)):i instanceof vi?(L(Ua,"Document no longer in limbo: "+i.key),r.Au.removeReference(i.key,e),r.Au.containsKey(i.key)||kh(r,i.key)):F(19791,{yu:i})}function Qp(r,e){let n=e.key,i=n.path.canonicalString();r.du.get(n)||r.Iu.has(i)||(L(Ua,"New document in limbo: "+n),r.Iu.add(i),za(r))}function za(r){for(;r.Iu.size>0&&r.du.size<r.maxConcurrentLimboResolutions;){let e=r.Iu.values().next().value;r.Iu.delete(e);let n=new B(st.fromString(e)),i=r.mu.next();r.Eu.set(i,new la(n)),r.du=r.du.insert(n,i),Eh(r.remoteStore,new rr(Mt(xi(n.path)),i,"TargetPurposeLimboResolution",nn.ue))}}async function fr(r,e,n){let i=U(r),s=[],a=[],c=[];i.Pu.isEmpty()||(i.Pu.forEach((l,d)=>{c.push(i.gu(d,e,n).then(f=>{var p;if((f||n)&&i.isPrimaryClient){let w=f?!f.fromCache:(p=n?.targetChanges.get(d.targetId))===null||p===void 0?void 0:p.current;i.sharedClientState.updateQueryState(d.targetId,w?"current":"not-current")}if(f){s.push(f);let w=zo.Es(d.targetId,f);a.push(w)}}))}),await Promise.all(c),i.hu.J_(s),await async function(d,f){let p=U(d);try{await p.persistence.runTransaction("notifyLocalViewChanges","readwrite",w=>x.forEach(f,v=>x.forEach(v.Is,C=>p.persistence.referenceDelegate.addReference(w,v.targetId,C)).next(()=>x.forEach(v.ds,C=>p.persistence.referenceDelegate.removeReference(w,v.targetId,C)))))}catch(w){if(!wn(w))throw w;L(ka,"Failed to update sequence numbers: "+w)}for(let w of f){let v=w.targetId;if(!w.fromCache){let C=p.Fs.get(v),P=C.snapshotVersion,O=C.withLastLimboFreeSnapshotVersion(P);p.Fs=p.Fs.insert(v,O)}}}(i.localStore,a))}async function Xp(r,e){let n=U(r);if(!n.currentUser.isEqual(e)){L(Ua,"User change. New user:",e.toKey());let i=await wh(n.localStore,e);n.currentUser=e,function(a,c){a.Vu.forEach(l=>{l.forEach(d=>{d.reject(new M(D.CANCELLED,c))})}),a.Vu.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,i.removedBatchIds,i.addedBatchIds),await fr(n,i.Bs)}}function Jp(r,e){let n=U(r),i=n.Eu.get(e);if(i&&i.lu)return K().add(i.key);{let s=K(),a=n.Tu.get(e);if(!a)return s;for(let c of a){let l=n.Pu.get(c);s=s.unionWith(l.view.tu)}return s}}function Nh(r){let e=U(r);return e.remoteStore.remoteSyncer.applyRemoteEvent=Dh.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=Jp.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=Kp.bind(null,e),e.hu.J_=Fp.bind(null,e.eventManager),e.hu.pu=Bp.bind(null,e.eventManager),e}function Yp(r){let e=U(r);return e.remoteStore.remoteSyncer.applySuccessfulWrite=Wp.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=Hp.bind(null,e),e}var pn=class{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=Ni(e.databaseInfo.databaseId),this.sharedClientState=this.bu(e),this.persistence=this.Du(e),await this.persistence.start(),this.localStore=this.vu(e),this.gcScheduler=this.Cu(e,this.localStore),this.indexBackfillerScheduler=this.Fu(e,this.localStore)}Cu(e,n){return null}Fu(e,n){return null}vu(e){return wp(this.persistence,new jo,e.initialUser,this.serializer)}Du(e){return new ui(Uo.Vi,this.serializer)}bu(e){return new Ko}async terminate(){var e,n;(e=this.gcScheduler)===null||e===void 0||e.stop(),(n=this.indexBackfillerScheduler)===null||n===void 0||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}};pn.provider={build:()=>new pn};var fa=class extends pn{constructor(e){super(),this.cacheSizeBytes=e}Cu(e,n){X(this.persistence.referenceDelegate instanceof li,46915);let i=this.persistence.referenceDelegate.garbageCollector;return new Ro(i,e.asyncQueue,n)}Du(e){let n=this.cacheSizeBytes!==void 0?Rt.withCacheSize(this.cacheSizeBytes):Rt.DEFAULT;return new ui(i=>li.Vi(i,n),this.serializer)}};var or=class{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=i=>fl(this.syncEngine,i,1),this.remoteStore.remoteSyncer.handleCredentialChange=Xp.bind(null,this.syncEngine),await Mp(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new oa}()}createDatastore(e){let n=Ni(e.databaseInfo.databaseId),i=function(a){return new Jo(a)}(e.databaseInfo);return function(a,c,l,d){return new ea(a,c,l,d)}(e.authCredentials,e.appCheckCredentials,i,n)}createRemoteStore(e){return function(i,s,a,c,l){return new ra(i,s,a,c,l)}(this.localStore,this.datastore,e.asyncQueue,n=>fl(this.syncEngine,n,0),function(){return di.C()?new di:new Wo}())}createSyncEngine(e,n){return function(s,a,c,l,d,f,p){let w=new ha(s,a,c,l,d,f);return p&&(w.fu=!0),w}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e,n;await async function(s){let a=U(s);L(Me,"RemoteStore shutting down."),a.Ia.add(5),await dr(a),a.Ea.shutdown(),a.Aa.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(n=this.eventManager)===null||n===void 0||n.terminate()}};or.provider={build:()=>new or};var Ei=class{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.xu(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.xu(this.observer.error,e):Zt("Uncaught Error in snapshot listener:",e.toString()))}Ou(){this.muted=!0}xu(e,n){setTimeout(()=>{this.muted||e(n)},0)}};var _e="FirestoreClient",ma=class{constructor(e,n,i,s,a){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=i,this.databaseInfo=s,this.user=lt.UNAUTHENTICATED,this.clientId=Jn.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=a,this.authCredentials.start(i,async c=>{L(_e,"Received user=",c.uid),await this.authCredentialListener(c),this.user=c}),this.appCheckCredentials.start(i,c=>(L(_e,"Received new app check token=",c),this.appCheckCredentialListener(c,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();let e=new Nt;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){let i=Fa(n,"Failed to shutdown persistence");e.reject(i)}}),e.promise}};async function Bs(r,e){r.asyncQueue.verifyOperationInProgress(),L(_e,"Initializing OfflineComponentProvider");let n=r.configuration;await e.initialize(n);let i=n.initialUser;r.setCredentialChangeListener(async s=>{i.isEqual(s)||(await wh(e.localStore,s),i=s)}),e.persistence.setDatabaseDeletedListener(()=>{pe("Terminating Firestore due to IndexedDb database deletion"),r.terminate().then(()=>{L("Terminating Firestore due to IndexedDb database deletion completed successfully")}).catch(s=>{pe("Terminating Firestore due to IndexedDb database deletion failed",s)})}),r._offlineComponents=e}async function pl(r,e){r.asyncQueue.verifyOperationInProgress();let n=await Zp(r);L(_e,"Initializing OnlineComponentProvider"),await e.initialize(n,r.configuration),r.setCredentialChangeListener(i=>ll(e.remoteStore,i)),r.setAppCheckTokenChangeListener((i,s)=>ll(e.remoteStore,s)),r._onlineComponents=e}async function Zp(r){if(!r._offlineComponents)if(r._uninitializedComponentsProvider){L(_e,"Using user provided OfflineComponentProvider");try{await Bs(r,r._uninitializedComponentsProvider._offline)}catch(e){let n=e;if(!function(s){return s.name==="FirebaseError"?s.code===D.FAILED_PRECONDITION||s.code===D.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11}(n))throw n;pe("Error using user provided cache. Falling back to memory cache: "+n),await Bs(r,new pn)}}else L(_e,"Using default OfflineComponentProvider"),await Bs(r,new fa(void 0));return r._offlineComponents}async function Oh(r){return r._onlineComponents||(r._uninitializedComponentsProvider?(L(_e,"Using user provided OnlineComponentProvider"),await pl(r,r._uninitializedComponentsProvider._online)):(L(_e,"Using default OnlineComponentProvider"),await pl(r,new or))),r._onlineComponents}function tg(r){return Oh(r).then(e=>e.syncEngine)}async function pa(r){let e=await Oh(r),n=e.eventManager;return n.onListen=Up.bind(null,e.syncEngine),n.onUnlisten=jp.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=zp.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=$p.bind(null,e.syncEngine),n}function eg(r,e,n={}){let i=new Nt;return r.asyncQueue.enqueueAndForget(async()=>function(a,c,l,d,f){let p=new Ei({next:v=>{p.Ou(),c.enqueueAndForget(()=>Ch(a,w));let C=v.docs.has(l);!C&&v.fromCache?f.reject(new M(D.UNAVAILABLE,"Failed to get document because the client is offline.")):C&&v.fromCache&&d&&d.source==="server"?f.reject(new M(D.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):f.resolve(v)},error:v=>f.reject(v)}),w=new _i(xi(l.path),p,{includeMetadataChanges:!0,ka:!0});return Rh(a,w)}(await pa(r),r.asyncQueue,e,n,i)),i.promise}function Lh(r){let e={};return r.timeoutSeconds!==void 0&&(e.timeoutSeconds=r.timeoutSeconds),e}var gl=new Map;var Mh="firestore.googleapis.com",yl=!0,Ii=class{constructor(e){var n,i;if(e.host===void 0){if(e.ssl!==void 0)throw new M(D.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=Mh,this.ssl=yl}else this.host=e.host,this.ssl=(n=e.ssl)!==null&&n!==void 0?n:yl;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=_h;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<gp)throw new M(D.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}fm("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Lh((i=e.experimentalLongPollingOptions)!==null&&i!==void 0?i:{}),function(a){if(a.timeoutSeconds!==void 0){if(isNaN(a.timeoutSeconds))throw new M(D.INVALID_ARGUMENT,`invalid long polling timeout: ${a.timeoutSeconds} (must not be NaN)`);if(a.timeoutSeconds<5)throw new M(D.INVALID_ARGUMENT,`invalid long polling timeout: ${a.timeoutSeconds} (minimum allowed value is 5)`);if(a.timeoutSeconds>30)throw new M(D.INVALID_ARGUMENT,`invalid long polling timeout: ${a.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(i,s){return i.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}},ar=class{constructor(e,n,i,s){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=i,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Ii({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new M(D.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new M(D.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Ii(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=function(i){if(!i)return new Us;switch(i.type){case"firstParty":return new $s(i.sessionIndex||"0",i.iamToken||null,i.authTokenFactory||null);case"provider":return i.client;default:throw new M(D.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){let i=gl.get(n);i&&(L("ComponentProvider","Removing Datastore"),gl.delete(n),i.terminate())}(this),Promise.resolve()}};function qa(r,e,n,i={}){var s;r=Ot(r,ar);let a=Lr(e),c=r._getSettings(),l=Object.assign(Object.assign({},c),{emulatorOptions:r._getEmulatorOptions()}),d=`${e}:${n}`;a&&(ou(`https://${d}`),cu("Firestore",!0)),c.host!==Mh&&c.host!==d&&pe("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");let f=Object.assign(Object.assign({},c),{host:d,ssl:a,emulatorOptions:i});if(!$e(f,l)&&(r._setSettings(f),i.mockUserToken)){let p,w;if(typeof i.mockUserToken=="string")p=i.mockUserToken,w=lt.MOCK_USER;else{p=au(i.mockUserToken,(s=r._app)===null||s===void 0?void 0:s.options.projectId);let v=i.mockUserToken.sub||i.mockUserToken.user_id;if(!v)throw new M(D.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");w=new lt(v)}r._authCredentials=new zs(new Hr(p,w))}}var Ti=class r{constructor(e,n,i){this.converter=n,this._query=i,this.type="query",this.firestore=e}withConverter(e){return new r(this.firestore,e,this._query)}},ft=class r{constructor(e,n,i){this.converter=n,this._key=i,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new cr(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new r(this.firestore,e,this._key)}toJSON(){return{type:r._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,n,i){if(hr(n,r._jsonSchema))return new r(e,i||null,new B(st.fromString(n.referencePath)))}};ft._jsonSchemaVersion="firestore/documentReference/1.0",ft._jsonSchema={type:ct("string",ft._jsonSchemaVersion),referencePath:ct("string")};var cr=class r extends Ti{constructor(e,n,i){super(e,n,xi(i)),this._path=i,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){let e=this._path.popLast();return e.isEmpty()?null:new ft(this.firestore,null,new B(e))}withConverter(e){return new r(this.firestore,e,this._path)}};function qt(r,e,...n){if(r=Ht(r),arguments.length===1&&(e=Jn.newId()),dm("doc","path",e),r instanceof ar){let i=st.fromString(e,...n);return Lu(i),new ft(r,null,new B(i))}{if(!(r instanceof ft||r instanceof cr))throw new M(D.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");let i=r._path.child(st.fromString(e,...n));return Lu(i),new ft(r.firestore,r instanceof cr?r.converter:null,new B(i))}}var _l="AsyncQueue",bi=class{constructor(e=Promise.resolve()){this.Zu=[],this.Xu=!1,this.ec=[],this.tc=null,this.nc=!1,this.rc=!1,this.sc=[],this.F_=new fi(this,"async_queue_retry"),this.oc=()=>{let i=Fs();i&&L(_l,"Visibility state changed to "+i.visibilityState),this.F_.y_()},this._c=e;let n=Fs();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this.oc)}get isShuttingDown(){return this.Xu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.ac(),this.uc(e)}enterRestrictedMode(e){if(!this.Xu){this.Xu=!0,this.rc=e||!1;let n=Fs();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.oc)}}enqueue(e){if(this.ac(),this.Xu)return new Promise(()=>{});let n=new Nt;return this.uc(()=>this.Xu&&this.rc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Zu.push(e),this.cc()))}async cc(){if(this.Zu.length!==0){try{await this.Zu[0](),this.Zu.shift(),this.F_.reset()}catch(e){if(!wn(e))throw e;L(_l,"Operation failed with retryable error: "+e)}this.Zu.length>0&&this.F_.g_(()=>this.cc())}}uc(e){let n=this._c.then(()=>(this.nc=!0,e().catch(i=>{throw this.tc=i,this.nc=!1,Zt("INTERNAL UNHANDLED ERROR: ",wl(i)),i}).then(i=>(this.nc=!1,i))));return this._c=n,n}enqueueAfterDelay(e,n,i){this.ac(),this.sc.indexOf(e)>-1&&(n=0);let s=ia.createAndSchedule(this,e,n,i,a=>this.lc(a));return this.ec.push(s),s}ac(){this.tc&&F(47125,{hc:wl(this.tc)})}verifyOperationInProgress(){}async Pc(){let e;do e=this._c,await e;while(e!==this._c)}Tc(e){for(let n of this.ec)if(n.timerId===e)return!0;return!1}Ic(e){return this.Pc().then(()=>{this.ec.sort((n,i)=>n.targetTimeMs-i.targetTimeMs);for(let n of this.ec)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.Pc()})}dc(e){this.sc.push(e)}lc(e){let n=this.ec.indexOf(e);this.ec.splice(n,1)}};function wl(r){let e=r.message||"";return r.stack&&(e=r.stack.includes(r.message)?r.stack:r.message+`
`+r.stack),e}function vl(r){return function(n,i){if(typeof n!="object"||n===null)return!1;let s=n;for(let a of i)if(a in s&&typeof s[a]=="function")return!0;return!1}(r,["next","error","complete"])}var we=class extends ar{constructor(e,n,i,s){super(e,n,i,s),this.type="firestore",this._queue=new bi,this._persistenceKey=s?.name||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){let e=this._firestoreClient.terminate();this._queue=new bi(e),this._firestoreClient=void 0,await e}}};function Fh(r,e){let n=typeof r=="object"?r:Ru(),i=typeof r=="string"?r:e||Zr,s=bu(n,"firestore").getImmediate({identifier:i});if(!s._initialized){let a=su("firestore");a&&qa(s,...a)}return s}function ja(r){if(r._terminated)throw new M(D.FAILED_PRECONDITION,"The client has already been terminated.");return r._firestoreClient||ng(r),r._firestoreClient}function ng(r){var e,n,i;let s=r._freezeSettings(),a=function(l,d,f,p){return new Qs(l,d,f,p.host,p.ssl,p.experimentalForceLongPolling,p.experimentalAutoDetectLongPolling,Lh(p.experimentalLongPollingOptions),p.useFetchStreams,p.isUsingEmulator)}(r._databaseId,((e=r._app)===null||e===void 0?void 0:e.options.appId)||"",r._persistenceKey,s);r._componentsProvider||!((n=s.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((i=s.localCache)===null||i===void 0)&&i._onlineComponentProvider)&&(r._componentsProvider={_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider}),r._firestoreClient=new ma(r._authCredentials,r._appCheckCredentials,r._queue,a,r._componentsProvider&&function(l){let d=l?._online.build();return{_offline:l?._offline.build(d),_online:d}}(r._componentsProvider))}var de=class r{constructor(e){this._byteString=e}static fromBase64String(e){try{return new r(wt.fromBase64String(e))}catch(n){throw new M(D.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new r(wt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:r._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(hr(e,r._jsonSchema))return r.fromBase64String(e.bytes)}};de._jsonSchemaVersion="firestore/bytes/1.0",de._jsonSchema={type:ct("string",de._jsonSchemaVersion),bytes:ct("string")};var gn=class{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new M(D.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new bt(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}};var ur=class{constructor(e){this._methodName=e}};var fe=class r{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new M(D.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new M(D.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return $(this._lat,e._lat)||$(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:r._jsonSchemaVersion}}static fromJSON(e){if(hr(e,r._jsonSchema))return new r(e.latitude,e.longitude)}};fe._jsonSchemaVersion="firestore/geoPoint/1.0",fe._jsonSchema={type:ct("string",fe._jsonSchemaVersion),latitude:ct("number"),longitude:ct("number")};var me=class r{constructor(e){this._values=(e||[]).map(n=>n)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(i,s){if(i.length!==s.length)return!1;for(let a=0;a<i.length;++a)if(i[a]!==s[a])return!1;return!0}(this._values,e._values)}toJSON(){return{type:r._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(hr(e,r._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every(n=>typeof n=="number"))return new r(e.vectorValues);throw new M(D.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}};me._jsonSchemaVersion="firestore/vectorValue/1.0",me._jsonSchema={type:ct("string",me._jsonSchemaVersion),vectorValues:ct("object")};var rg=/^__.*__$/,ga=class{constructor(e,n,i){this.data=e,this.fieldMask=n,this.fieldTransforms=i}toMutation(e,n){return this.fieldMask!==null?new zt(e,this.data,this.fieldMask,n,this.fieldTransforms):new Le(e,this.data,n,this.fieldTransforms)}},Ai=class{constructor(e,n,i){this.data=e,this.fieldMask=n,this.fieldTransforms=i}toMutation(e,n){return new zt(e,this.data,this.fieldMask,n,this.fieldTransforms)}};function Bh(r){switch(r){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw F(40011,{Ec:r})}}var ya=class r{constructor(e,n,i,s,a,c){this.settings=e,this.databaseId=n,this.serializer=i,this.ignoreUndefinedProperties=s,a===void 0&&this.Ac(),this.fieldTransforms=a||[],this.fieldMask=c||[]}get path(){return this.settings.path}get Ec(){return this.settings.Ec}Rc(e){return new r(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Vc(e){var n;let i=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.Rc({path:i,mc:!1});return s.fc(e),s}gc(e){var n;let i=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.Rc({path:i,mc:!1});return s.Ac(),s}yc(e){return this.Rc({path:void 0,mc:!0})}wc(e){return Si(e,this.settings.methodName,this.settings.Sc||!1,this.path,this.settings.bc)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}Ac(){if(this.path)for(let e=0;e<this.path.length;e++)this.fc(this.path.get(e))}fc(e){if(e.length===0)throw this.wc("Document fields must not be empty");if(Bh(this.Ec)&&rg.test(e))throw this.wc('Document fields cannot begin and end with "__"')}},_a=class{constructor(e,n,i){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=i||Ni(e)}Dc(e,n,i,s=!1){return new ya({Ec:e,methodName:n,bc:i,path:bt.emptyPath(),mc:!1,Sc:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}};function Uh(r){let e=r._freezeSettings(),n=Ni(r._databaseId);return new _a(r._databaseId,!!e.ignoreUndefinedProperties,n)}function ig(r,e,n,i,s,a={}){let c=r.Dc(a.merge||a.mergeFields?2:0,e,n,s);$a("Data must be an object, but it was:",c,i);let l=zh(i,c),d,f;if(a.merge)d=new Ct(c.fieldMask),f=c.fieldTransforms;else if(a.mergeFields){let p=[];for(let w of a.mergeFields){let v=wa(e,w,n);if(!c.contains(v))throw new M(D.INVALID_ARGUMENT,`Field '${v}' is specified in your field mask but missing from your input data.`);jh(p,v)||p.push(v)}d=new Ct(p),f=c.fieldTransforms.filter(w=>d.covers(w.field))}else d=null,f=c.fieldTransforms;return new ga(new Tt(l),d,f)}var lr=class r extends ur{_toFieldTransform(e){if(e.Ec!==2)throw e.Ec===1?e.wc(`${this._methodName}() can only appear at the top level of your update data`):e.wc(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof r}};function sg(r,e,n,i){let s=r.Dc(1,e,n);$a("Data must be an object, but it was:",s,i);let a=[],c=Tt.empty();ve(i,(d,f)=>{let p=Ga(e,d,n);f=Ht(f);let w=s.gc(p);if(f instanceof lr)a.push(p);else{let v=Mi(f,w);v!=null&&(a.push(p),c.set(p,v))}});let l=new Ct(a);return new Ai(c,l,s.fieldTransforms)}function og(r,e,n,i,s,a){let c=r.Dc(1,e,n),l=[wa(e,i,n)],d=[s];if(a.length%2!=0)throw new M(D.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let v=0;v<a.length;v+=2)l.push(wa(e,a[v])),d.push(a[v+1]);let f=[],p=Tt.empty();for(let v=l.length-1;v>=0;--v)if(!jh(f,l[v])){let C=l[v],P=d[v];P=Ht(P);let O=c.gc(C);if(P instanceof lr)f.push(C);else{let V=Mi(P,O);V!=null&&(f.push(C),p.set(C,V))}}let w=new Ct(f);return new Ai(p,w,c.fieldTransforms)}function Mi(r,e){if(qh(r=Ht(r)))return $a("Unsupported field value:",e,r),zh(r,e);if(r instanceof ur)return function(i,s){if(!Bh(s.Ec))throw s.wc(`${i._methodName}() can only be used with update() and set()`);if(!s.path)throw s.wc(`${i._methodName}() is not currently supported inside arrays`);let a=i._toFieldTransform(s);a&&s.fieldTransforms.push(a)}(r,e),null;if(r===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),r instanceof Array){if(e.settings.mc&&e.Ec!==4)throw e.wc("Nested arrays are not supported");return function(i,s){let a=[],c=0;for(let l of i){let d=Mi(l,s.yc(c));d==null&&(d={nullValue:"NULL_VALUE"}),a.push(d),c++}return{arrayValue:{values:a}}}(r,e)}return function(i,s){if((i=Ht(i))===null)return{nullValue:"NULL_VALUE"};if(typeof i=="number")return Gm(s.serializer,i);if(typeof i=="boolean")return{booleanValue:i};if(typeof i=="string")return{stringValue:i};if(i instanceof Date){let a=tt.fromDate(i);return{timestampValue:ai(s.serializer,a)}}if(i instanceof tt){let a=new tt(i.seconds,1e3*Math.floor(i.nanoseconds/1e3));return{timestampValue:ai(s.serializer,a)}}if(i instanceof fe)return{geoPointValue:{latitude:i.latitude,longitude:i.longitude}};if(i instanceof de)return{bytesValue:hh(s.serializer,i._byteString)};if(i instanceof ft){let a=s.databaseId,c=i.firestore._databaseId;if(!c.isEqual(a))throw s.wc(`Document reference is for database ${c.projectId}/${c.database} but should be for database ${a.projectId}/${a.database}`);return{referenceValue:Va(i.firestore._databaseId||s.databaseId,i._key.path)}}if(i instanceof me)return function(c,l){return{mapValue:{fields:{[Sa]:{stringValue:Ra},[rn]:{arrayValue:{values:c.toArray().map(f=>{if(typeof f!="number")throw l.wc("VectorValues must only contain numeric values.");return xa(l.serializer,f)})}}}}}}(i,s);throw s.wc(`Unsupported field value: ${Ta(i)}`)}(r,e)}function zh(r,e){let n={};return Fl(r)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):ve(r,(i,s)=>{let a=Mi(s,e.Vc(i));a!=null&&(n[i]=a)}),{mapValue:{fields:n}}}function qh(r){return!(typeof r!="object"||r===null||r instanceof Array||r instanceof Date||r instanceof tt||r instanceof fe||r instanceof de||r instanceof ft||r instanceof ur||r instanceof me)}function $a(r,e,n){if(!qh(n)||!Tl(n)){let i=Ta(n);throw i==="an object"?e.wc(r+" a custom object"):e.wc(r+" "+i)}}function wa(r,e,n){if((e=Ht(e))instanceof gn)return e._internalPath;if(typeof e=="string")return Ga(r,e);throw Si("Field path arguments must be of type string or ",r,!1,void 0,n)}var ag=new RegExp("[~\\*/\\[\\]]");function Ga(r,e,n){if(e.search(ag)>=0)throw Si(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,r,!1,void 0,n);try{return new gn(...e.split("."))._internalPath}catch{throw Si(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,r,!1,void 0,n)}}function Si(r,e,n,i,s){let a=i&&!i.isEmpty(),c=s!==void 0,l=`Function ${e}() called with invalid data`;n&&(l+=" (via `toFirestore()`)"),l+=". ";let d="";return(a||c)&&(d+=" (found",a&&(d+=` in field ${i}`),c&&(d+=` in document ${s}`),d+=")"),new M(D.INVALID_ARGUMENT,l+r+d)}function jh(r,e){return r.some(n=>n.isEqual(e))}var Ri=class{constructor(e,n,i,s,a){this._firestore=e,this._userDataWriter=n,this._key=i,this._document=s,this._converter=a}get id(){return this._key.path.lastSegment()}get ref(){return new ft(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){let e=new va(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){let n=this._document.data.field($h("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}},va=class extends Ri{data(){return super.data()}};function $h(r,e){return typeof e=="string"?Ga(r,e):e instanceof gn?e._internalPath:e._delegate._internalPath}function cg(r){if(r.limitType==="L"&&r.explicitOrderBy.length===0)throw new M(D.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}var Ea=class{convertValue(e,n="none"){switch(ge(e)){case 0:return null;case 1:return e.booleanValue;case 2:return nt(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(ee(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 11:return this.convertObject(e.mapValue,n);case 10:return this.convertVectorValue(e.mapValue);default:throw F(62114,{value:e})}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){let i={};return ve(e,(s,a)=>{i[s]=this.convertValue(a,n)}),i}convertVectorValue(e){var n,i,s;let a=(s=(i=(n=e.fields)===null||n===void 0?void 0:n[rn].arrayValue)===null||i===void 0?void 0:i.values)===null||s===void 0?void 0:s.map(c=>nt(c.doubleValue));return new me(a)}convertGeoPoint(e){return new fe(nt(e.latitude),nt(e.longitude))}convertArray(e,n){return(e.values||[]).map(i=>this.convertValue(i,n))}convertServerTimestamp(e,n){switch(n){case"previous":let i=Di(e);return i==null?null:this.convertValue(i,n);case"estimate":return this.convertTimestamp(tr(e));default:return null}}convertTimestamp(e){let n=te(e);return new tt(n.seconds,n.nanos)}convertDocumentKey(e,n){let i=st.fromString(e);X(yh(i),9688,{name:e});let s=new ti(i.get(1),i.get(3)),a=new B(i.popFirst(5));return s.isEqual(n)||Zt(`Document ${a} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),a}};function ug(r,e,n){let i;return i=r?n&&(n.merge||n.mergeFields)?r.toFirestore(e,n):r.toFirestore(e):e,i}var De=class{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}},xe=class r extends Ri{constructor(e,n,i,s,a,c){super(e,n,i,s,c),this._firestore=e,this._firestoreImpl=e,this.metadata=a}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){let n=new Ze(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){let i=this._document.data.field($h("DocumentSnapshot.get",e));if(i!==null)return this._userDataWriter.convertValue(i,n.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new M(D.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");let e=this._document,n={};return n.type=r._jsonSchemaVersion,n.bundle="",n.bundleSource="DocumentSnapshot",n.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?n:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),n.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),n)}};xe._jsonSchemaVersion="firestore/documentSnapshot/1.0",xe._jsonSchema={type:ct("string",xe._jsonSchemaVersion),bundleSource:ct("string","DocumentSnapshot"),bundleName:ct("string"),bundle:ct("string")};var Ze=class extends xe{data(e={}){return super.data(e)}},tn=class r{constructor(e,n,i,s){this._firestore=e,this._userDataWriter=n,this._snapshot=s,this.metadata=new De(s.hasPendingWrites,s.fromCache),this.query=i}get docs(){let e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(i=>{e.call(n,new Ze(this._firestore,this._userDataWriter,i.key,i,new De(this._snapshot.mutatedKeys.has(i.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){let n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new M(D.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(s,a){if(s._snapshot.oldDocs.isEmpty()){let c=0;return s._snapshot.docChanges.map(l=>{let d=new Ze(s._firestore,s._userDataWriter,l.doc.key,l.doc,new De(s._snapshot.mutatedKeys.has(l.doc.key),s._snapshot.fromCache),s.query.converter);return l.doc,{type:"added",doc:d,oldIndex:-1,newIndex:c++}})}{let c=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(l=>a||l.type!==3).map(l=>{let d=new Ze(s._firestore,s._userDataWriter,l.doc.key,l.doc,new De(s._snapshot.mutatedKeys.has(l.doc.key),s._snapshot.fromCache),s.query.converter),f=-1,p=-1;return l.type!==0&&(f=c.indexOf(l.doc.key),c=c.delete(l.doc.key)),l.type!==1&&(c=c.add(l.doc),p=c.indexOf(l.doc.key)),{type:lg(l.type),doc:d,oldIndex:f,newIndex:p}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new M(D.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");let e={};e.type=r._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=Jn.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;let n=[],i=[],s=[];return this.docs.forEach(a=>{a._document!==null&&(n.push(a._document),i.push(this._userDataWriter.convertObjectMap(a._document.data.value.mapValue.fields,"previous")),s.push(a.ref.path))}),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}};function lg(r){switch(r){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return F(61501,{type:r})}}function Gh(r){r=Ot(r,ft);let e=Ot(r.firestore,we);return eg(ja(e),r._key).then(n=>Qh(e,r,n))}tn._jsonSchemaVersion="firestore/querySnapshot/1.0",tn._jsonSchema={type:ct("string",tn._jsonSchemaVersion),bundleSource:ct("string","QuerySnapshot"),bundleName:ct("string"),bundle:ct("string")};var Ci=class extends Ea{constructor(e){super(),this.firestore=e}convertBytes(e){return new de(e)}convertReference(e){let n=this.convertDocumentKey(e,this.firestore._databaseId);return new ft(this.firestore,null,n)}};function Kh(r,e,n){r=Ot(r,ft);let i=Ot(r.firestore,we),s=ug(r.converter,e,n);return Hh(i,[ig(Uh(i),"setDoc",r._key,s,r.converter!==null,n).toMutation(r._key,he.none())])}function Ee(r,e,n,...i){r=Ot(r,ft);let s=Ot(r.firestore,we),a=Uh(s),c;return c=typeof(e=Ht(e))=="string"||e instanceof gn?og(a,"updateDoc",r._key,e,n,i):sg(a,"updateDoc",r._key,e),Hh(s,[c.toMutation(r._key,he.exists(!0))])}function Wh(r,...e){var n,i,s;r=Ht(r);let a={includeMetadataChanges:!1,source:"default"},c=0;typeof e[c]!="object"||vl(e[c])||(a=e[c++]);let l={includeMetadataChanges:a.includeMetadataChanges,source:a.source};if(vl(e[c])){let w=e[c];e[c]=(n=w.next)===null||n===void 0?void 0:n.bind(w),e[c+1]=(i=w.error)===null||i===void 0?void 0:i.bind(w),e[c+2]=(s=w.complete)===null||s===void 0?void 0:s.bind(w)}let d,f,p;if(r instanceof ft)f=Ot(r.firestore,we),p=xi(r._key.path),d={next:w=>{e[c]&&e[c](Qh(f,r,w))},error:e[c+1],complete:e[c+2]};else{let w=Ot(r,Ti);f=Ot(w.firestore,we),p=w._query;let v=new Ci(f);d={next:C=>{e[c]&&e[c](new tn(f,v,w,C))},error:e[c+1],complete:e[c+2]},cg(r._query)}return function(v,C,P,O){let V=new Ei(O),j=new _i(C,V,P);return v.asyncQueue.enqueueAndForget(async()=>Rh(await pa(v),j)),()=>{V.Ou(),v.asyncQueue.enqueueAndForget(async()=>Ch(await pa(v),j))}}(ja(f),p,l,d)}function Hh(r,e){return function(i,s){let a=new Nt;return i.asyncQueue.enqueueAndForget(async()=>Gp(await tg(i),s,a)),a.promise}(ja(r),e)}function Qh(r,e,n){let i=n.docs.get(e._key),s=new Ci(r);return new xe(r,s,e._key,i,new De(n.hasPendingWrites,n.fromCache),e.converter)}function Xh(){return new lr("deleteField")}(function(e,n=!0){(function(s){yn=s})(Su),jn(new Qt("firestore",(i,{instanceIdentifier:s,options:a})=>{let c=i.getProvider("app").getImmediate(),l=new we(new qs(i.getProvider("auth-internal")),new Gs(c,i.getProvider("app-check-internal")),function(f,p){if(!Object.prototype.hasOwnProperty.apply(f.options,["projectId"]))throw new M(D.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new ti(f.options.projectId,p)}(c,s),c);return a=Object.assign({useFetchStreams:n},a),l._setSettings(a),l},"PUBLIC").setMultipleInstances(!0)),le(Vu,ku,e),le(Vu,ku,"esm2017")})();function Jh(r,e,n,i){if(!r)return{valid:!1,error:"empty"};if(r.length<4)return{valid:!1,error:"tooShort"};let s=e.letters[0].toLowerCase();if(!r.includes(s))return{valid:!1,error:"missingCenter"};let a=new Set(e.letters.map(d=>d.toLowerCase()));for(let d of r)if(!a.has(d))return{valid:!1,error:"badLetter"};if(!e.words.includes(r))return i&&i.has&&i.has(r)?{valid:!1,error:"notInWordList"}:{valid:!1,error:"notValidWord"};if(n.includes(r))return{valid:!1,error:"alreadyFound"};let c=new Set(r).size===7;return{valid:!0,score:r.length===4?1:r.length+(c?7:0),isPangram:c}}var hg={apiKey:"AIzaSyDummyKeyForFreeTier",projectId:"spelling-bee-relay-1025"},dg=Ps(hg),jt=Fh(dg),Zh=localStorage.getItem("sb_use_emulator")==="true";Zh?(console.log("%c>>> MULTIPLAYER: CONNECTED TO LOCAL EMULATOR (127.0.0.1:8080) <<<","color: #f7da21; font-weight: bold; background: #000; padding: 2px 5px;"),qa(jt,"127.0.0.1",8080)):console.log("%c>>> MULTIPLAYER: CONNECTED TO REMOTE FIREBASE <<<","color: #4ecdc4; font-weight: bold; background: #000; padding: 2px 5px;");globalThis.switchMultiplayerEnv=()=>{let r=!Zh;localStorage.setItem("sb_use_emulator",r),console.log(`Switching to ${r?"LOCAL":"REMOTE"} environment. Reloading...`),location.reload()};console.log("Registered global helper: switchMultiplayerEnv()");var At=[{key:"beginner",pct:0},{key:"goodStart",pct:.02},{key:"movingUp",pct:.05},{key:"good",pct:.08},{key:"solid",pct:.15},{key:"niceLvl",pct:.25},{key:"great",pct:.4},{key:"amazing",pct:.5},{key:"genius",pct:.7},{key:"queenBee",pct:1}],S={playerId:localStorage.getItem("sb_playerId")||crypto.randomUUID(),currentInput:"",foundWords:[],wordFinders:{},score:0,puzzle:null,puzzleId:null,language:localStorage.getItem("sb_language")||"en",attributionMode:0,multiplayer:{roomCode:null,nickname:localStorage.getItem("sb_nickname")||"",teammates:[],step:"nickname"},dbRefs:{}};window.state=S;localStorage.setItem("sb_playerId",S.playerId);var Ka={en:{name:"English",flag:"\u{1F1FA}\u{1F1F8}",dailyName:"NYT Daily"},it:{name:"Italiano",flag:"\u{1F1EE}\u{1F1F9}",dailyName:"Apegramma"}};function Wa(){return S.language==="it"?typeof PUZZLES_IT<"u"?PUZZLES_IT:{}:PUZZLES}function fg(){return S.language==="it"?typeof VALID_WORDS_IT<"u"?VALID_WORDS_IT:new Set:VALID_WORDS}var N={input:document.getElementById("word-input")||document.getElementById("input-text"),cursor:document.querySelector(".cursor"),score:document.getElementById("score-value")||document.getElementById("score"),messageArea:document.getElementById("message-toast")||document.getElementById("message-area"),hive:document.getElementById("hive-container"),levelText:document.getElementById("rank-label")||document.getElementById("current-level"),bar:document.getElementById("progress-fill"),wordsList:document.getElementById("words-list"),foundCount:document.getElementById("found-count"),toggleWordsBtn:document.getElementById("toggle-words-btn"),toggleAttributionBtn:document.getElementById("toggle-attribution-btn"),deleteBtn:document.querySelector(".action-btn.delete")||document.getElementById("delete-btn"),enterBtn:document.querySelector(".action-btn.enter")||document.getElementById("enter-btn"),restartBtn:document.getElementById("restart-btn"),shuffleBtn:document.getElementById("shuffle-btn"),dotsContainer:document.querySelector(".dots-container"),cells:{center:document.getElementById("cell-center"),outer:[document.getElementById("cell-1"),document.getElementById("cell-2"),document.getElementById("cell-3"),document.getElementById("cell-4"),document.getElementById("cell-5"),document.getElementById("cell-6")]},multi:{btn:document.getElementById("multiplayer-btn"),screen:document.getElementById("multiplayer-screen"),closeBtn:document.getElementById("close-multi-btn"),stepNickname:document.getElementById("multi-setup")||document.getElementById("multi-nickname"),stepMenu:document.getElementById("multi-menu"),stepJoin:document.getElementById("multi-join"),stepActive:document.getElementById("multi-active"),nicknameInput:document.getElementById("nickname-input"),saveNicknameBtn:document.getElementById("save-nickname-btn"),createRoomBtn:document.getElementById("create-room-btn"),roomCodeInput:document.getElementById("room-code-input"),confirmJoinBtn:document.getElementById("confirm-join-btn")||document.getElementById("join-confirm-btn"),backBtn:document.getElementById("back-to-menu-btn")||document.getElementById("join-back-btn"),leaveBtn:document.getElementById("leave-room-btn"),activeRoomCode:document.getElementById("active-room-code"),playerList:document.getElementById("player-list"),displayNickname:document.getElementById("display-nickname"),editNicknameMenu:document.getElementById("edit-nickname-menu"),editNicknameRoom:document.getElementById("edit-nickname-room"),banner:document.getElementById("multiplayer-banner"),bannerRoomCode:document.getElementById("banner-room-code"),btns:{open:document.getElementById("multiplayer-btn"),close:document.getElementById("close-multi-btn"),saveNickname:document.getElementById("save-nickname-btn"),createRoom:document.getElementById("create-room-btn"),joinRoom:document.getElementById("join-room-btn"),confirmJoin:document.getElementById("confirm-join-btn")||document.getElementById("join-confirm-btn"),backToMenu:document.getElementById("back-to-menu-btn")||document.getElementById("join-back-btn"),leaveRoom:document.getElementById("leave-room-btn")}}};document.addEventListener("DOMContentLoaded",mg);async function mg(){await pg(),S.playerId||(S.playerId=crypto.randomUUID(),Vt());try{S.puzzle?Ha(S.puzzleId):await ad()}catch(r){console.error("Init Error:",r)}S.multiplayer.roomCode&&cd(S.multiplayer.roomCode,!1).catch(r=>{console.warn("Auto-join failed:",r),S.multiplayer.roomCode=null,Vt()}),Fi(),Be(),ie(),yr(),Bi(),kg(),document.addEventListener("keydown",Ng)}function td(){let r=Wa(),e=Math.floor(Math.random()*Object.keys(r).length);Ha(e),xt(t("newRandomPuzzle"),1e3),S.multiplayer.roomCode&&Xa(S.puzzleId)}function Ha(r){let e=Wa(),n,i;if(typeof r=="number")i=r,n=e[i];else if(typeof r=="string"&&r.startsWith("nyt-")){S.puzzleId!==r&&sd(!1);return}else if(typeof r=="string"&&r.startsWith("apegramma-")){S.puzzleId!==r&&od(!1);return}else i=parseInt(r),n=e[i];n&&(S.puzzleId=i,S.puzzle=n,S.foundWords=[],S.score=0,S.currentInput="",Vt(),Fi(),Be(),ie())}function Vt(){chrome.storage.local.set({sb_state:S})}async function pg(){return new Promise(r=>{chrome.storage.local.get(["sb_state"],e=>{e.sb_state&&(S={...S,...e.sb_state},e.sb_state.multiplayer&&(S.multiplayer={...S.multiplayer,...e.sb_state.multiplayer}),window.state=S),r()})})}function Fi(){let r=S.puzzle;r&&(N.cells.center.textContent=r.letters[0].toUpperCase(),N.cells.center.dataset.letter=r.letters[0],gg())}function gg(){let e=S.puzzle.letters.slice(1);N.cells.outer.forEach((n,i)=>{n.textContent=e[i].toUpperCase(),n.dataset.letter=e[i]})}function ed(){let r=S.puzzle;if(!r)return;let e=r.letters.slice(1);for(let n=e.length-1;n>0;n--){let i=Math.floor(Math.random()*(n+1));[e[n],e[i]]=[e[i],e[n]]}N.cells.outer.forEach((n,i)=>{n.textContent=e[i].toUpperCase(),n.dataset.letter=e[i],n.style.transition="none",n.style.transform="scale(0.8)",setTimeout(()=>{n.style.transition="transform 0.2s",n.style.transform="scale(1)"},50)})}function Qa(){N.input.innerText=S.currentInput,N.cursor.style.display="block"}function nd(r){S.currentInput.length<20&&(S.currentInput+=r.toLowerCase(),Qa())}function rd(){S.currentInput=S.currentInput.slice(0,-1),Qa()}function id(){let r=S.currentInput.toLowerCase();if(r.length===0)return;let e=Pg(r);e.valid?(Dg(r,e.score,e.isPangram),xt(e.isPangram?t("pangram")+" +"+e.score:t("nice")+" +"+e.score,1500),vg(r)):(xg(),xt(e.error,1e3)),setTimeout(()=>{S.currentInput="",Qa()},500)}async function sd(r=!0){xt(t("fetchingNYT"),2e3);try{let e=await fetch("https://nytbee.com/");if(!e.ok)throw new Error("Failed to fetch");let n=await e.text(),s=new DOMParser().parseFromString(n,"text/html"),a=Array.from(s.querySelectorAll('a[id^="link-definition-"]')).map(P=>P.id.replace("link-definition-","").toLowerCase()).filter(P=>P.length>=4);if(a.length===0)throw new Error("No words found on page");let c=new Set(a[0].split(""));a.forEach(P=>{let O=new Set(P.split(""));c=new Set([...c].filter(V=>O.has(V)))});let l=Array.from(c)[0]?.toUpperCase();if(!l)throw new Error("Center letter detection failed");let f=Array.from(s.querySelectorAll("script")).map(P=>P.textContent).join(" ").match(/\[\s*"[A-Z]"(?:\s*,\s*"[A-Z]"){6}\s*\]/gi)||[],p=null;for(let P of f){let O=P.match(/[A-Z]/gi).map(V=>V.toUpperCase());if(O.includes(l)){let V=O.filter(j=>j!==l);p=[l,...V];break}}if(!p)throw new Error("Could not match letters to word list");let v="nyt-"+new Date().toISOString().split("T")[0],C=a.reduce((P,O)=>{let V=O.length===4?1:O.length;return new Set(O).size===7&&(V+=7),P+V},0);S.puzzleId=v,S.puzzle={id:v,letters:p,words:a,maxScore:C,author:"NYT Daily"},S.foundWords=[],S.score=0,S.currentInput="",Vt(),Fi(),Be(),ie(),yr(),xt(t("nytDailyLoaded"),2e3),r&&S.multiplayer.roomCode&&(console.log("Broadcasting NYT puzzle sync..."),Xa(S.puzzleId))}catch(e){console.error(e),xt(t("errorLoadingNYT")+": "+e.message,3e3)}}async function od(r=!0){xt(t("fetchingApegramma"),2e3);try{let e=await fetch("https://www.laregione.ch/giochi/apegramma");if(!e.ok)throw new Error("Fetch failed");let i=(await e.text()).match(/<div[^>]*id="jsonDati"[^>]*>(.*?)<\/div>/);if(!i)throw new Error("Data not found");let s=JSON.parse(i[1]);if(!s.data||!s.data.letters)throw new Error("Invalid data structure");let a=s.data,c=a.central.toLowerCase(),d=a.letters.toLowerCase().split(" ").map(P=>P.trim()).filter(P=>P).filter(P=>P!==c).sort(),f=[c,...d],p=Object.keys(a.validWords),w=0;p.forEach(P=>{let O=P.length===4?1:P.length;new Set(P).size===7&&(O+=7),w+=O});let C="apegramma-"+new Date().toISOString().split("T")[0];S.puzzleId=C,S.puzzle={id:C,letters:f,words:p,maxScore:w,author:"Apegramma Daily"},Yh(r)}catch(e){console.warn("Scraping failed, trying local fallback",e);try{let n=new Date,i=Wa(),s=Object.keys(i).length;if(s===0)throw new Error("No Italian puzzles loaded");let a=(n.getFullYear()*366+n.getMonth()*31+n.getDate())%s,c=i[a],d="apegramma-"+new Date().toISOString().split("T")[0];S.puzzleId=d,S.puzzle={...c,id:d,author:"Apegramma Daily (Offline)"},Yh(r)}catch(n){console.error(n),xt(t("errorLoadingApegramma"),3e3)}}}function Yh(r){S.foundWords=[],S.score=0,S.currentInput="",Vt(),Fi(),Be(),ie(),yr(),Bi(),xt(t("apegrammLoaded"),2e3),r&&S.multiplayer.roomCode&&Xa(S.puzzleId)}function yg(r){Ka[r]&&(S.multiplayer.roomCode&&S.multiplayer.step==="active"&&!confirm(t("confirmChangeGame"))||(S.language=r,localStorage.setItem("sb_language",r),S.puzzle=null,S.puzzleId=null,S.foundWords=[],S.score=0,Vt(),Bi(),td()))}function Bi(){let r=document.getElementById("lang-btn"),e=document.getElementById("lang-flag"),n=S.language,i=Ka[n]||Ka.en;e&&(e.textContent=i.flag),r&&(r.title=t("language")+": "+i.name);let s=(v,C)=>{let P=document.getElementById(v);P&&(P.innerText=t(C))},a=(v,C)=>{let P=document.getElementById(v);P&&(P.title=t(C))},c=(v,C)=>{let P=document.getElementById(v);P&&(P.placeholder=t(C))};s("delete-btn","delete"),s("enter-btn","enter");let l=document.getElementById("toggle-words-btn");if(l){let v=N.wordsList?N.wordsList.style.display==="none":!0;l.innerText=v?t("show"):t("hide")}s("save-nickname-btn","continue"),s("create-room-btn","createRoom"),s("join-room-btn","joinRoom"),s("join-confirm-btn","join"),s("join-back-btn","back"),s("leave-room-btn","leaveRoom");let d=document.querySelector("#multi-setup p");d&&(d.innerText=t("chooseNickname"));let f=document.querySelector("#multi-join p");f&&(f.innerText=t("enterRoomCode")),c("nickname-input","anonymous"),c("room-code-input","roomCode");let p=document.querySelector(".multi-header h3");p&&(p.innerText=t("multiplayer"));let w=document.querySelector(".modal-header h3");w&&(w.innerText=t("rankings")),ie(),Be()}async function ad(r=!0){S.language==="it"?await od(r):await sd(r)}function _g(){let r=["Happy","Lucky","Sunny","Cool","Bright","Swift","Calm"],e=["Bee","Hive","Honey","Comb","Wing","Pollen","Nectar"],n=Math.floor(Math.random()*99)+1,i=r[Math.floor(Math.random()*r.length)],s=e[Math.floor(Math.random()*e.length)];return`${i}-${s}-${n}`}async function cd(r,e=!0){let n=r.toLowerCase().trim(),i=qt(jt,"rooms",n),s=await Gh(i);if(!s.exists())throw new Error("Room not found");let a=`players.${S.playerId}`;await Ee(i,{[a]:{nickname:S.multiplayer.nickname,online:!0,lastActive:tt.now()}}),ud(n),ld(n);let c=s.data();S.multiplayer.roomCode=n,S.multiplayer.displayCode=c.code||n,S.multiplayer.step="active",Vt(),e?Ie():yr()}async function wg(){let r=_g(),e=r.toLowerCase(),n=qt(jt,"rooms",e),i={createdAt:tt.now(),code:r,puzzleId:S.puzzleId,language:S.language,foundWords:{},players:{[S.playerId]:{nickname:S.multiplayer.nickname,online:!0,lastActive:tt.now()}}};return await Kh(n,i),ud(e),ld(e),S.multiplayer.roomCode=e,S.multiplayer.displayCode=r,S.multiplayer.step="active",Vt(),Ie(),r}var mr=null;function ud(r){mr&&mr();let e=qt(jt,"rooms",r);mr=Wh(e,n=>{let i=n.data();if(!i)return;if(S.multiplayer.rawPlayers=i.players||{},i.players){let a=Date.now(),c=Object.entries(i.players).map(([l,d])=>{let f=d.lastActive?.toMillis?d.lastActive.toMillis():0,p=d.online&&a-f<9e4;return{playerId:l,nickname:d.nickname,online:p}});S.multiplayer.teammates=c.filter(l=>l.playerId!==S.playerId),hd(),yr()}if(i.foundWords){let a=Object.keys(i.foundWords),c=!1;a.forEach(l=>{let d=i.foundWords[l];if(S.wordFinders[l]=d,!S.foundWords.includes(l)){if(d!==S.playerId){let p=gr(d,i.players||{});xt(`${p} ${t("foundWord")} ${l}!`,2e3)}S.foundWords.push(l);let f=Ig(l);S.score+=f,c=!0}}),c&&(S.foundWords.sort(),Vt(),ie(),Be())}let s=i;s.language&&s.language!==S.language&&(console.log("Remote language change detected:",s.language),S.language=s.language,localStorage.setItem("sb_language",s.language),Bi()),s.puzzleId&&s.puzzleId!==S.puzzleId&&(console.log("Remote puzzle change detected:",s.puzzleId),Ha(s.puzzleId))})}var pr=null;function ld(r){pr&&clearInterval(pr);let e=async()=>{try{let n=qt(jt,"rooms",r),i=`players.${S.playerId}.lastActive`;await Ee(n,{[i]:tt.now()})}catch(n){console.warn("Heartbeat failed:",n)}};e(),pr=setInterval(e,3e4)}async function vg(r){if(!S.multiplayer.roomCode)return;let e=qt(jt,"rooms",S.multiplayer.roomCode),n=`foundWords.${r}`;await Ee(e,{[n]:S.playerId})}async function Xa(r){if(S.multiplayer.roomCode)try{let e=S.multiplayer.roomCode.toLowerCase(),n=qt(jt,"rooms",e);await Ee(n,{puzzleId:r,language:S.language,foundWords:{}})}catch(e){console.error("Error syncing puzzle:",e)}}async function Eg(){if(S.multiplayer.roomCode){let r=qt(jt,"rooms",S.multiplayer.roomCode),e=`players.${S.playerId}`;try{await Ee(r,{[e]:Xh()})}catch(n){console.warn("Leave room error:",n)}}pr&&clearInterval(pr),mr&&mr(),S.multiplayer.roomCode=null,S.multiplayer.step="menu",Vt(),location.reload()}function Ig(r){if(r.length===4)return 1;let e=r.length;return new Set(r).size===7&&(e+=7),e}function yr(){S.multiplayer.roomCode?(N.multi.banner.style.display="flex",N.multi.bannerRoomCode.innerText=S.multiplayer.displayCode||S.multiplayer.roomCode):N.multi.banner.style.display="none"}function hd(){N.multi.playerList.innerHTML="";let r=S.multiplayer.rawPlayers||{};[{playerId:S.playerId,nickname:S.multiplayer.nickname,online:!0},...S.multiplayer.teammates].forEach(n=>{let i=document.createElement("div");i.className=`player-item ${n.playerId===S.playerId?"self":""}`;let s=document.createElement("div");s.className=`player-status ${n.online?"online":"offline"}`,i.appendChild(s);let a=document.createElement("span"),c=gr(n.playerId,r);a.innerText=n.playerId===S.playerId?`${c} (You)`:c,i.appendChild(a),N.multi.playerList.appendChild(i)})}function gr(r,e){if(!r)return"Unknown";let n=e[r];if(!n)return r.length>20?"Ghost":r;let i=n.nickname||"Anonymous",s=Object.entries(e).filter(([c,l])=>(l.nickname||"Anonymous")===i).sort(([c],[l])=>c.localeCompare(l));if(s.length<=1)return i;let a=s.findIndex(([c])=>c===r);return`${i} (#${a+1})`}function Ie(){N.multi.screen.style.display="flex",N.multi.stepNickname.classList.add("hidden"),N.multi.stepMenu.classList.add("hidden"),N.multi.stepJoin.classList.add("hidden"),N.multi.stepActive.classList.add("hidden");let r=S.multiplayer.step;if(r==="nickname"&&S.multiplayer.nickname){S.multiplayer.step="menu",Ie();return}S.multiplayer.nickname&&N.multi.displayNickname&&(N.multi.displayNickname.innerText=S.multiplayer.nickname),r==="nickname"?N.multi.stepNickname.classList.remove("hidden"):r==="menu"?N.multi.stepMenu.classList.remove("hidden"):r==="join"?N.multi.stepJoin.classList.remove("hidden"):r==="active"&&(N.multi.stepActive.classList.remove("hidden"),N.multi.activeRoomCode.innerText=S.multiplayer.displayCode||S.multiplayer.roomCode,hd())}function Tg(){N.multi.screen.style.display="none"}function bg(){let r=N.multi.nicknameInput.value.trim();if(r){if(S.multiplayer.nickname=r,localStorage.setItem("sb_nickname",r),S.multiplayer.roomCode){let e=qt(jt,"rooms",S.multiplayer.roomCode),n=`players.${S.playerId}.nickname`;Ee(e,{[n]:r}).catch(i=>console.warn("Nickname update failed:",i))}S.multiplayer.step="menu",Ie()}}async function Ag(){N.multi.createRoomBtn.disabled=!0;try{await wg()}catch(r){console.error(r),alert("Error: "+r.message),N.multi.createRoomBtn.disabled=!1}}function Sg(){S.multiplayer.step="join",Ie()}async function Rg(){let r=N.multi.roomCodeInput.value.trim();if(r){N.multi.confirmJoinBtn.disabled=!0;try{await cd(r)}catch(e){alert(e.message),N.multi.confirmJoinBtn.disabled=!1}}}function Cg(){confirm("Leave this room?")&&Eg()}function Pg(r){let e=Jh(r,S.puzzle,S.foundWords,fg());return e.valid?e:{valid:!1,error:t(e.error)}}function Dg(r,e,n){S.foundWords.push(r),S.score+=e,S.foundWords.sort(),S.wordFinders[r]=S.playerId,Vt(),Be(),ie()}function Be(){if(!S.puzzle)return;N.score.innerText=S.score,N.foundCount.innerText=`${S.foundWords.length} ${S.foundWords.length!==1?t("words"):t("word")}`;let r=S.puzzle.maxScore,e=0;for(let a=0;a<At.length;a++){let c=Math.floor(r*At[a].pct);S.score>=c&&(e=a)}N.levelText.innerText=t(At[e].key),N.dotsContainer.innerHTML="";let n=document.createElement("div");n.className="progress-line-fill";let i=e/(At.length-1)*100,s=0;if(e<At.length-1){let a=Math.floor(r*At[e].pct),l=Math.floor(r*At[e+1].pct)-a;l>0&&(s=(S.score-a)/l*(100/(At.length-1)))}n.style.width=`${i+s}%`,N.dotsContainer.appendChild(n),At.forEach((a,c)=>{let l=document.createElement("div");l.className="dot",l.style.left=`${c/(At.length-1)*100}%`,c<=e&&l.classList.add("active"),c===e&&l.classList.add("current"),l.title=`${t(a.key)} (${Math.floor(r*a.pct)})`,N.dotsContainer.appendChild(l)})}function ie(){N.wordsList.innerHTML="";let r=S.attributionMode,e=S.multiplayer.rawPlayers||{},n=["#f7da21","#4ecdc4","#ff6b6b","#a8e6cf","#dfe6e9","#fd79a8","#74b9ff"],i={},s=0;if(S.foundWords.forEach(a=>{let c=S.wordFinders[a];c&&!i[c]&&(i[c]=n[s%n.length],s++)}),r===0)S.foundWords.forEach(a=>{let c=document.createElement("span");c.className="found-word",c.innerText=a,N.wordsList.appendChild(c)});else if(r===1)S.foundWords.forEach(a=>{let c=S.wordFinders[a],l=i[c]||"#ccc",d=document.createElement("span");d.className="found-word",d.style.color=l,d.innerText=a,N.wordsList.appendChild(d)});else if(r===2){let a={};S.foundWords.forEach(l=>{let d=S.wordFinders[l];a[d]||(a[d]=[]),a[d].push(l)}),Object.keys(a).sort((l,d)=>{if(l===S.playerId)return-1;if(d===S.playerId)return 1;let f=gr(l,e),p=gr(d,e);return f.localeCompare(p)}).forEach(l=>{let d=gr(l,e),f=i[l]||"#ccc",p=document.createElement("div");p.className="word-section";let w=document.createElement("div");w.className="word-section-header",w.style.color=f,w.innerText=`${d} (${a[l].length})`,p.appendChild(w);let v=document.createElement("div");v.className="word-section-words",a[l].forEach(C=>{let P=document.createElement("span");P.className="found-word",P.style.color=f,P.innerText=C,v.appendChild(P)}),p.appendChild(v),N.wordsList.appendChild(p)})}}function xt(r,e){N.messageArea.innerText=r,N.messageArea.classList.add("visible"),setTimeout(()=>{N.messageArea.classList.remove("visible")},e)}function xg(){N.input.parentElement.style.animation="shake 0.3s",setTimeout(()=>N.input.parentElement.style.animation="",300)}function Vg(){let r=document.getElementById("ranking-modal"),e=document.getElementById("ranking-list"),n=S.puzzle.maxScore,i=0;for(let a=0;a<At.length;a++)S.score>=Math.floor(n*At[a].pct)&&(i=a);e.innerHTML="",At.forEach((a,c)=>{let l=document.createElement("div");l.className="ranking-item",c===i&&l.classList.add("current");let d=Math.floor(n*a.pct);l.innerHTML=`
      <span class="rank-name">${t(a.key)}</span>
      <span class="rank-score">${d}</span>
    `,e.appendChild(l)});let s=document.createElement("div");s.className="ranking-item ranking-header",s.innerHTML=`
    <span class="rank-name">${t("rank")}</span>
    <span class="rank-score">${t("minimumScore")}</span>
  `,e.appendChild(s),r.style.display="block"}function kg(){N.deleteBtn.addEventListener("click",rd),N.enterBtn.addEventListener("click",id),N.shuffleBtn.addEventListener("click",ed);let r=document.getElementById("restart-btn");r&&r.addEventListener("click",td);let e=document.getElementById("nyt-daily-btn");e&&e.addEventListener("click",ad);let n=document.getElementById("lang-btn"),i=document.getElementById("lang-menu");n&&i&&(n.addEventListener("click",a=>{a.stopPropagation(),i.classList.toggle("hidden")}),i.querySelectorAll("button[data-lang]").forEach(a=>{a.addEventListener("click",()=>{let c=a.dataset.lang;i.classList.add("hidden"),c!==S.language&&yg(c)})}),document.addEventListener("click",()=>{i.classList.add("hidden")})),document.querySelector(".level-container").addEventListener("click",Vg),document.getElementById("close-modal-btn").addEventListener("click",()=>{document.getElementById("ranking-modal").style.display="none"}),window.addEventListener("click",a=>{let c=document.getElementById("ranking-modal");a.target===c&&(c.style.display="none")}),N.multi.btns.open.addEventListener("click",Ie),N.multi.btns.close.addEventListener("click",Tg),N.multi.btns.saveNickname.addEventListener("click",bg),N.multi.btns.createRoom.addEventListener("click",Ag),N.multi.btns.joinRoom.addEventListener("click",Sg),N.multi.btns.confirmJoin.addEventListener("click",Rg),N.multi.btns.backToMenu.addEventListener("click",()=>{S.multiplayer.step="menu",Ie()}),N.multi.btns.leaveRoom.addEventListener("click",Cg);let s=a=>{a.preventDefault();let c=S.multiplayer.nickname,l=prompt("Enter new nickname:",c);if(l&&l.trim()!==""){let d=l.trim();if(S.multiplayer.nickname=d,localStorage.setItem("sb_nickname",d),S.multiplayer.roomCode){let f=qt(jt,"rooms",S.multiplayer.roomCode),p=`players.${S.playerId}.nickname`;Ee(f,{[p]:d}).catch(w=>console.warn("Nickname update failed:",w))}N.multi.displayNickname&&(N.multi.displayNickname.innerText=d),Ie(),ie()}};if(N.multi.editNicknameMenu&&N.multi.editNicknameMenu.addEventListener("click",s),N.multi.editNicknameRoom&&N.multi.editNicknameRoom.addEventListener("click",s),N.toggleAttributionBtn){let a=["\u{1F464}","\u{1F3A8}","\u{1F4CB}"];N.toggleAttributionBtn.addEventListener("click",()=>{S.attributionMode=(S.attributionMode+1)%3,N.toggleAttributionBtn.innerText=a[S.attributionMode],ie()})}N.multi.activeRoomCode.addEventListener("click",()=>{let a=N.multi.activeRoomCode.textContent;a&&navigator.clipboard.writeText(a).then(()=>{xt(t("roomCodeCopied"),2e3)})}),N.toggleWordsBtn.addEventListener("click",()=>{N.wordsList.style.display==="none"?(N.wordsList.style.display="flex",N.toggleWordsBtn.innerText="Hide"):(N.wordsList.style.display="none",N.toggleWordsBtn.innerText="Show")}),[N.cells.center,...N.cells.outer].forEach(a=>{a.addEventListener("click",c=>{let l=c.target.closest(".cell");l&&nd(l.dataset.letter)})}),document.addEventListener("click",a=>{let c=a.target.closest("button");c&&c.blur()})}function Ng(r){r.target.tagName==="INPUT"||r.target.tagName==="TEXTAREA"||r.metaKey||r.ctrlKey||r.altKey||N.multi.screen&&N.multi.screen.offsetParent!==null||(r.key==="Backspace"?rd():r.key==="Enter"?id():r.key===" "?(r.preventDefault(),ed()):/^[a-zA-Z]$/.test(r.key)&&nd(r.key))}if(!document.getElementById("shake-style")){let r=document.createElement("style");r.id="shake-style",r.innerHTML=`
  @keyframes shake {
    0% { transform: translateX(0); }
    25% { transform: translateX(-5px); }
    50% { transform: translateX(5px); }
    75% { transform: translateX(-5px); }
    100% { transform: translateX(0); }
  }
  `,document.head.appendChild(r)}})();
/*! Bundled license information:

@firebase/util/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/util/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/util/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/util/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2022 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/util/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2025 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2021 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/util/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/util/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/util/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/util/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2022 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/util/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/util/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/util/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/util/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/util/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2019 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/util/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/util/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2021 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/component/dist/esm/index.esm2017.js:
  (**
   * @license
   * Copyright 2019 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/logger/dist/esm/index.esm2017.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/app/dist/esm/index.esm2017.js:
  (**
   * @license
   * Copyright 2019 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/app/dist/esm/index.esm2017.js:
  (**
   * @license
   * Copyright 2019 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2023 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/app/dist/esm/index.esm2017.js:
  (**
   * @license
   * Copyright 2019 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/app/dist/esm/index.esm2017.js:
  (**
   * @license
   * Copyright 2021 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2019 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

firebase/app/dist/esm/index.esm.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/webchannel-wrapper/dist/bloom-blob/esm/bloom_blob_es2018.js:
  (** @license
  Copyright The Closure Library Authors.
  SPDX-License-Identifier: Apache-2.0
  *)
  (** @license
  
   Copyright The Closure Library Authors.
   SPDX-License-Identifier: Apache-2.0
  *)

@firebase/webchannel-wrapper/dist/webchannel-blob/esm/webchannel_blob_es2018.js:
  (** @license
  Copyright The Closure Library Authors.
  SPDX-License-Identifier: Apache-2.0
  *)
  (** @license
  
   Copyright The Closure Library Authors.
   SPDX-License-Identifier: Apache-2.0
  *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
  * @license
  * Copyright 2020 Google LLC
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *   http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2023 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2025 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2021 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2018 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2022 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2022 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2023 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2022 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2019 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2018 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2022 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2023 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2023 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2022 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2022 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2024 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2021 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2021 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law | agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES | CONDITIONS OF ANY KIND, either express | implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2022 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2022 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2019 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2018 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2022 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2024 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2023 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2019 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2019 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2018 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2019 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2023 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2025 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2019 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2023 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2022 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2024 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2022 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2025 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2022 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2021 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2023 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2023 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
*/
//# sourceMappingURL=popup_bundle.js.map
