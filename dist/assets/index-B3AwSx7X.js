(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const o of s)if(o.type==="childList")for(const u of o.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&i(u)}).observe(document,{childList:!0,subtree:!0});function e(s){const o={};return s.integrity&&(o.integrity=s.integrity),s.referrerPolicy&&(o.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?o.credentials="include":s.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(s){if(s.ep)return;s.ep=!0;const o=e(s);fetch(s.href,o)}})();const gl=()=>{};var Es={};/**
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
 */const _o=function(n){const t=[];let e=0;for(let i=0;i<n.length;i++){let s=n.charCodeAt(i);s<128?t[e++]=s:s<2048?(t[e++]=s>>6|192,t[e++]=s&63|128):(s&64512)===55296&&i+1<n.length&&(n.charCodeAt(i+1)&64512)===56320?(s=65536+((s&1023)<<10)+(n.charCodeAt(++i)&1023),t[e++]=s>>18|240,t[e++]=s>>12&63|128,t[e++]=s>>6&63|128,t[e++]=s&63|128):(t[e++]=s>>12|224,t[e++]=s>>6&63|128,t[e++]=s&63|128)}return t},_l=function(n){const t=[];let e=0,i=0;for(;e<n.length;){const s=n[e++];if(s<128)t[i++]=String.fromCharCode(s);else if(s>191&&s<224){const o=n[e++];t[i++]=String.fromCharCode((s&31)<<6|o&63)}else if(s>239&&s<365){const o=n[e++],u=n[e++],c=n[e++],f=((s&7)<<18|(o&63)<<12|(u&63)<<6|c&63)-65536;t[i++]=String.fromCharCode(55296+(f>>10)),t[i++]=String.fromCharCode(56320+(f&1023))}else{const o=n[e++],u=n[e++];t[i++]=String.fromCharCode((s&15)<<12|(o&63)<<6|u&63)}}return t.join("")},yo={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,t){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const e=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,i=[];for(let s=0;s<n.length;s+=3){const o=n[s],u=s+1<n.length,c=u?n[s+1]:0,f=s+2<n.length,m=f?n[s+2]:0,I=o>>2,w=(o&3)<<4|c>>4;let C=(c&15)<<2|m>>6,V=m&63;f||(V=64,u||(C=64)),i.push(e[I],e[w],e[C],e[V])}return i.join("")},encodeString(n,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(n):this.encodeByteArray(_o(n),t)},decodeString(n,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(n):_l(this.decodeStringToByteArray(n,t))},decodeStringToByteArray(n,t){this.init_();const e=t?this.charToByteMapWebSafe_:this.charToByteMap_,i=[];for(let s=0;s<n.length;){const o=e[n.charAt(s++)],c=s<n.length?e[n.charAt(s)]:0;++s;const m=s<n.length?e[n.charAt(s)]:64;++s;const w=s<n.length?e[n.charAt(s)]:64;if(++s,o==null||c==null||m==null||w==null)throw new yl;const C=o<<2|c>>4;if(i.push(C),m!==64){const V=c<<4&240|m>>2;if(i.push(V),w!==64){const D=m<<6&192|w;i.push(D)}}}return i},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class yl extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const El=function(n){const t=_o(n);return yo.encodeByteArray(t,!0)},Nn=function(n){return El(n).replace(/\./g,"")},vl=function(n){try{return yo.decodeString(n,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
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
 */function Tl(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const Il=()=>Tl().__FIREBASE_DEFAULTS__,Al=()=>{if(typeof process>"u"||typeof Es>"u")return;const n=Es.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},wl=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=n&&vl(n[1]);return t&&JSON.parse(t)},Xr=()=>{try{return gl()||Il()||Al()||wl()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},Rl=n=>{var t,e;return(e=(t=Xr())===null||t===void 0?void 0:t.emulatorHosts)===null||e===void 0?void 0:e[n]},Pl=n=>{const t=Rl(n);if(!t)return;const e=t.lastIndexOf(":");if(e<=0||e+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const i=parseInt(t.substring(e+1),10);return t[0]==="["?[t.substring(1,e-1),i]:[t.substring(0,e),i]},Eo=()=>{var n;return(n=Xr())===null||n===void 0?void 0:n.config};/**
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
 */class Cl{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,e)=>{this.resolve=t,this.reject=e})}wrapCallback(t){return(e,i)=>{e?this.reject(e):this.resolve(i),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(e):t(e,i))}}}/**
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
 */function Sl(n,t){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const e={alg:"none",type:"JWT"},i=t||"demo-project",s=n.iat||0,o=n.sub||n.user_id;if(!o)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const u=Object.assign({iss:`https://securetoken.google.com/${i}`,aud:i,iat:s,exp:s+3600,auth_time:s,sub:o,user_id:o,firebase:{sign_in_provider:"custom",identities:{}}},n);return[Nn(JSON.stringify(e)),Nn(JSON.stringify(u)),""].join(".")}/**
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
 */function bl(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Vl(){var n;const t=(n=Xr())===null||n===void 0?void 0:n.forceEnvironment;if(t==="node")return!0;if(t==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function Dl(){return!Vl()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function Nl(){try{return typeof indexedDB=="object"}catch{return!1}}function Ol(){return new Promise((n,t)=>{try{let e=!0;const i="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(i);s.onsuccess=()=>{s.result.close(),e||self.indexedDB.deleteDatabase(i),n(!0)},s.onupgradeneeded=()=>{e=!1},s.onerror=()=>{var o;t(((o=s.error)===null||o===void 0?void 0:o.message)||"")}}catch(e){t(e)}})}/**
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
 */const kl="FirebaseError";class ye extends Error{constructor(t,e,i){super(e),this.code=t,this.customData=i,this.name=kl,Object.setPrototypeOf(this,ye.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,vo.prototype.create)}}class vo{constructor(t,e,i){this.service=t,this.serviceName=e,this.errors=i}create(t,...e){const i=e[0]||{},s=`${this.service}/${t}`,o=this.errors[t],u=o?xl(o,i):"Error",c=`${this.serviceName}: ${u} (${s}).`;return new ye(s,c,i)}}function xl(n,t){return n.replace(Ml,(e,i)=>{const s=t[i];return s!=null?String(s):`<${i}?>`})}const Ml=/\{\$([^}]+)}/g;function On(n,t){if(n===t)return!0;const e=Object.keys(n),i=Object.keys(t);for(const s of e){if(!i.includes(s))return!1;const o=n[s],u=t[s];if(vs(o)&&vs(u)){if(!On(o,u))return!1}else if(o!==u)return!1}for(const s of i)if(!e.includes(s))return!1;return!0}function vs(n){return n!==null&&typeof n=="object"}/**
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
 */function qe(n){return n&&n._delegate?n._delegate:n}class He{constructor(t,e,i){this.name=t,this.instanceFactory=e,this.type=i,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
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
 */const Qt="[DEFAULT]";/**
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
 */class Ll{constructor(t,e){this.name=t,this.container=e,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const e=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(e)){const i=new Cl;if(this.instancesDeferred.set(e,i),this.isInitialized(e)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:e});s&&i.resolve(s)}catch{}}return this.instancesDeferred.get(e).promise}getImmediate(t){var e;const i=this.normalizeInstanceIdentifier(t==null?void 0:t.identifier),s=(e=t==null?void 0:t.optional)!==null&&e!==void 0?e:!1;if(this.isInitialized(i)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:i})}catch(o){if(s)return null;throw o}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(Ul(t))try{this.getOrInitializeService({instanceIdentifier:Qt})}catch{}for(const[e,i]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(e);try{const o=this.getOrInitializeService({instanceIdentifier:s});i.resolve(o)}catch{}}}}clearInstance(t=Qt){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(e=>"INTERNAL"in e).map(e=>e.INTERNAL.delete()),...t.filter(e=>"_delete"in e).map(e=>e._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=Qt){return this.instances.has(t)}getOptions(t=Qt){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:e={}}=t,i=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(i))throw Error(`${this.name}(${i}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:i,options:e});for(const[o,u]of this.instancesDeferred.entries()){const c=this.normalizeInstanceIdentifier(o);i===c&&u.resolve(s)}return s}onInit(t,e){var i;const s=this.normalizeInstanceIdentifier(e),o=(i=this.onInitCallbacks.get(s))!==null&&i!==void 0?i:new Set;o.add(t),this.onInitCallbacks.set(s,o);const u=this.instances.get(s);return u&&t(u,s),()=>{o.delete(t)}}invokeOnInitCallbacks(t,e){const i=this.onInitCallbacks.get(e);if(i)for(const s of i)try{s(t,e)}catch{}}getOrInitializeService({instanceIdentifier:t,options:e={}}){let i=this.instances.get(t);if(!i&&this.component&&(i=this.component.instanceFactory(this.container,{instanceIdentifier:Fl(t),options:e}),this.instances.set(t,i),this.instancesOptions.set(t,e),this.invokeOnInitCallbacks(i,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,i)}catch{}return i||null}normalizeInstanceIdentifier(t=Qt){return this.component?this.component.multipleInstances?t:Qt:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Fl(n){return n===Qt?void 0:n}function Ul(n){return n.instantiationMode==="EAGER"}/**
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
 */class Bl{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const e=this.getProvider(t.name);if(e.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);e.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const e=new Ll(t,this);return this.providers.set(t,e),e}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var F;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(F||(F={}));const jl={debug:F.DEBUG,verbose:F.VERBOSE,info:F.INFO,warn:F.WARN,error:F.ERROR,silent:F.SILENT},$l=F.INFO,zl={[F.DEBUG]:"log",[F.VERBOSE]:"log",[F.INFO]:"info",[F.WARN]:"warn",[F.ERROR]:"error"},ql=(n,t,...e)=>{if(t<n.logLevel)return;const i=new Date().toISOString(),s=zl[t];if(s)console[s](`[${i}]  ${n.name}:`,...e);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class To{constructor(t){this.name=t,this._logLevel=$l,this._logHandler=ql,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in F))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?jl[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,F.DEBUG,...t),this._logHandler(this,F.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,F.VERBOSE,...t),this._logHandler(this,F.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,F.INFO,...t),this._logHandler(this,F.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,F.WARN,...t),this._logHandler(this,F.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,F.ERROR,...t),this._logHandler(this,F.ERROR,...t)}}const Hl=(n,t)=>t.some(e=>n instanceof e);let Ts,Is;function Gl(){return Ts||(Ts=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Kl(){return Is||(Is=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Io=new WeakMap,kr=new WeakMap,Ao=new WeakMap,Cr=new WeakMap,Yr=new WeakMap;function Wl(n){const t=new Promise((e,i)=>{const s=()=>{n.removeEventListener("success",o),n.removeEventListener("error",u)},o=()=>{e(Lt(n.result)),s()},u=()=>{i(n.error),s()};n.addEventListener("success",o),n.addEventListener("error",u)});return t.then(e=>{e instanceof IDBCursor&&Io.set(e,n)}).catch(()=>{}),Yr.set(t,n),t}function Ql(n){if(kr.has(n))return;const t=new Promise((e,i)=>{const s=()=>{n.removeEventListener("complete",o),n.removeEventListener("error",u),n.removeEventListener("abort",u)},o=()=>{e(),s()},u=()=>{i(n.error||new DOMException("AbortError","AbortError")),s()};n.addEventListener("complete",o),n.addEventListener("error",u),n.addEventListener("abort",u)});kr.set(n,t)}let xr={get(n,t,e){if(n instanceof IDBTransaction){if(t==="done")return kr.get(n);if(t==="objectStoreNames")return n.objectStoreNames||Ao.get(n);if(t==="store")return e.objectStoreNames[1]?void 0:e.objectStore(e.objectStoreNames[0])}return Lt(n[t])},set(n,t,e){return n[t]=e,!0},has(n,t){return n instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in n}};function Xl(n){xr=n(xr)}function Yl(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...e){const i=n.call(Sr(this),t,...e);return Ao.set(i,t.sort?t.sort():[t]),Lt(i)}:Kl().includes(n)?function(...t){return n.apply(Sr(this),t),Lt(Io.get(this))}:function(...t){return Lt(n.apply(Sr(this),t))}}function Jl(n){return typeof n=="function"?Yl(n):(n instanceof IDBTransaction&&Ql(n),Hl(n,Gl())?new Proxy(n,xr):n)}function Lt(n){if(n instanceof IDBRequest)return Wl(n);if(Cr.has(n))return Cr.get(n);const t=Jl(n);return t!==n&&(Cr.set(n,t),Yr.set(t,n)),t}const Sr=n=>Yr.get(n);function Zl(n,t,{blocked:e,upgrade:i,blocking:s,terminated:o}={}){const u=indexedDB.open(n,t),c=Lt(u);return i&&u.addEventListener("upgradeneeded",f=>{i(Lt(u.result),f.oldVersion,f.newVersion,Lt(u.transaction),f)}),e&&u.addEventListener("blocked",f=>e(f.oldVersion,f.newVersion,f)),c.then(f=>{o&&f.addEventListener("close",()=>o()),s&&f.addEventListener("versionchange",m=>s(m.oldVersion,m.newVersion,m))}).catch(()=>{}),c}const tu=["get","getKey","getAll","getAllKeys","count"],eu=["put","add","delete","clear"],br=new Map;function As(n,t){if(!(n instanceof IDBDatabase&&!(t in n)&&typeof t=="string"))return;if(br.get(t))return br.get(t);const e=t.replace(/FromIndex$/,""),i=t!==e,s=eu.includes(e);if(!(e in(i?IDBIndex:IDBObjectStore).prototype)||!(s||tu.includes(e)))return;const o=async function(u,...c){const f=this.transaction(u,s?"readwrite":"readonly");let m=f.store;return i&&(m=m.index(c.shift())),(await Promise.all([m[e](...c),s&&f.done]))[0]};return br.set(t,o),o}Xl(n=>({...n,get:(t,e,i)=>As(t,e)||n.get(t,e,i),has:(t,e)=>!!As(t,e)||n.has(t,e)}));/**
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
 */class nu{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(e=>{if(ru(e)){const i=e.getImmediate();return`${i.library}/${i.version}`}else return null}).filter(e=>e).join(" ")}}function ru(n){const t=n.getComponent();return(t==null?void 0:t.type)==="VERSION"}const Mr="@firebase/app",ws="0.11.2";/**
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
 */const Nt=new To("@firebase/app"),iu="@firebase/app-compat",su="@firebase/analytics-compat",ou="@firebase/analytics",au="@firebase/app-check-compat",lu="@firebase/app-check",uu="@firebase/auth",cu="@firebase/auth-compat",hu="@firebase/database",fu="@firebase/data-connect",du="@firebase/database-compat",pu="@firebase/functions",mu="@firebase/functions-compat",gu="@firebase/installations",_u="@firebase/installations-compat",yu="@firebase/messaging",Eu="@firebase/messaging-compat",vu="@firebase/performance",Tu="@firebase/performance-compat",Iu="@firebase/remote-config",Au="@firebase/remote-config-compat",wu="@firebase/storage",Ru="@firebase/storage-compat",Pu="@firebase/firestore",Cu="@firebase/vertexai",Su="@firebase/firestore-compat",bu="firebase",Vu="11.4.0";/**
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
 */const Lr="[DEFAULT]",Du={[Mr]:"fire-core",[iu]:"fire-core-compat",[ou]:"fire-analytics",[su]:"fire-analytics-compat",[lu]:"fire-app-check",[au]:"fire-app-check-compat",[uu]:"fire-auth",[cu]:"fire-auth-compat",[hu]:"fire-rtdb",[fu]:"fire-data-connect",[du]:"fire-rtdb-compat",[pu]:"fire-fn",[mu]:"fire-fn-compat",[gu]:"fire-iid",[_u]:"fire-iid-compat",[yu]:"fire-fcm",[Eu]:"fire-fcm-compat",[vu]:"fire-perf",[Tu]:"fire-perf-compat",[Iu]:"fire-rc",[Au]:"fire-rc-compat",[wu]:"fire-gcs",[Ru]:"fire-gcs-compat",[Pu]:"fire-fst",[Su]:"fire-fst-compat",[Cu]:"fire-vertex","fire-js":"fire-js",[bu]:"fire-js-all"};/**
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
 */const kn=new Map,Nu=new Map,Fr=new Map;function Rs(n,t){try{n.container.addComponent(t)}catch(e){Nt.debug(`Component ${t.name} failed to register with FirebaseApp ${n.name}`,e)}}function xn(n){const t=n.name;if(Fr.has(t))return Nt.debug(`There were multiple attempts to register component ${t}.`),!1;Fr.set(t,n);for(const e of kn.values())Rs(e,n);for(const e of Nu.values())Rs(e,n);return!0}function Ou(n,t){const e=n.container.getProvider("heartbeat").getImmediate({optional:!0});return e&&e.triggerHeartbeat(),n.container.getProvider(t)}function ku(n){return n==null?!1:n.settings!==void 0}/**
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
 */const xu={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Ft=new vo("app","Firebase",xu);/**
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
 */class Mu{constructor(t,e,i){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},e),this._name=e.name,this._automaticDataCollectionEnabled=e.automaticDataCollectionEnabled,this._container=i,this.container.addComponent(new He("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw Ft.create("app-deleted",{appName:this._name})}}/**
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
 */const Lu=Vu;function wo(n,t={}){let e=n;typeof t!="object"&&(t={name:t});const i=Object.assign({name:Lr,automaticDataCollectionEnabled:!1},t),s=i.name;if(typeof s!="string"||!s)throw Ft.create("bad-app-name",{appName:String(s)});if(e||(e=Eo()),!e)throw Ft.create("no-options");const o=kn.get(s);if(o){if(On(e,o.options)&&On(i,o.config))return o;throw Ft.create("duplicate-app",{appName:s})}const u=new Bl(s);for(const f of Fr.values())u.addComponent(f);const c=new Mu(e,i,u);return kn.set(s,c),c}function Fu(n=Lr){const t=kn.get(n);if(!t&&n===Lr&&Eo())return wo();if(!t)throw Ft.create("no-app",{appName:n});return t}function he(n,t,e){var i;let s=(i=Du[n])!==null&&i!==void 0?i:n;e&&(s+=`-${e}`);const o=s.match(/\s|\//),u=t.match(/\s|\//);if(o||u){const c=[`Unable to register library "${s}" with version "${t}":`];o&&c.push(`library name "${s}" contains illegal characters (whitespace or "/")`),o&&u&&c.push("and"),u&&c.push(`version name "${t}" contains illegal characters (whitespace or "/")`),Nt.warn(c.join(" "));return}xn(new He(`${s}-version`,()=>({library:s,version:t}),"VERSION"))}/**
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
 */const Uu="firebase-heartbeat-database",Bu=1,Ge="firebase-heartbeat-store";let Vr=null;function Ro(){return Vr||(Vr=Zl(Uu,Bu,{upgrade:(n,t)=>{switch(t){case 0:try{n.createObjectStore(Ge)}catch(e){console.warn(e)}}}}).catch(n=>{throw Ft.create("idb-open",{originalErrorMessage:n.message})})),Vr}async function ju(n){try{const e=(await Ro()).transaction(Ge),i=await e.objectStore(Ge).get(Po(n));return await e.done,i}catch(t){if(t instanceof ye)Nt.warn(t.message);else{const e=Ft.create("idb-get",{originalErrorMessage:t==null?void 0:t.message});Nt.warn(e.message)}}}async function Ps(n,t){try{const i=(await Ro()).transaction(Ge,"readwrite");await i.objectStore(Ge).put(t,Po(n)),await i.done}catch(e){if(e instanceof ye)Nt.warn(e.message);else{const i=Ft.create("idb-set",{originalErrorMessage:e==null?void 0:e.message});Nt.warn(i.message)}}}function Po(n){return`${n.name}!${n.options.appId}`}/**
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
 */const $u=1024,zu=30;class qu{constructor(t){this.container=t,this._heartbeatsCache=null;const e=this.container.getProvider("app").getImmediate();this._storage=new Gu(e),this._heartbeatsCachePromise=this._storage.read().then(i=>(this._heartbeatsCache=i,i))}async triggerHeartbeat(){var t,e;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),o=Cs();if(((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===o||this._heartbeatsCache.heartbeats.some(u=>u.date===o))return;if(this._heartbeatsCache.heartbeats.push({date:o,agent:s}),this._heartbeatsCache.heartbeats.length>zu){const u=Ku(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(u,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(i){Nt.warn(i)}}async getHeartbeatsHeader(){var t;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const e=Cs(),{heartbeatsToSend:i,unsentEntries:s}=Hu(this._heartbeatsCache.heartbeats),o=Nn(JSON.stringify({version:2,heartbeats:i}));return this._heartbeatsCache.lastSentHeartbeatDate=e,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),o}catch(e){return Nt.warn(e),""}}}function Cs(){return new Date().toISOString().substring(0,10)}function Hu(n,t=$u){const e=[];let i=n.slice();for(const s of n){const o=e.find(u=>u.agent===s.agent);if(o){if(o.dates.push(s.date),Ss(e)>t){o.dates.pop();break}}else if(e.push({agent:s.agent,dates:[s.date]}),Ss(e)>t){e.pop();break}i=i.slice(1)}return{heartbeatsToSend:e,unsentEntries:i}}class Gu{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Nl()?Ol().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const e=await ju(this.app);return e!=null&&e.heartbeats?e:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(t){var e;if(await this._canUseIndexedDBPromise){const s=await this.read();return Ps(this.app,{lastSentHeartbeatDate:(e=t.lastSentHeartbeatDate)!==null&&e!==void 0?e:s.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){var e;if(await this._canUseIndexedDBPromise){const s=await this.read();return Ps(this.app,{lastSentHeartbeatDate:(e=t.lastSentHeartbeatDate)!==null&&e!==void 0?e:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...t.heartbeats]})}else return}}function Ss(n){return Nn(JSON.stringify({version:2,heartbeats:n})).length}function Ku(n){if(n.length===0)return-1;let t=0,e=n[0].date;for(let i=1;i<n.length;i++)n[i].date<e&&(e=n[i].date,t=i);return t}/**
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
 */function Wu(n){xn(new He("platform-logger",t=>new nu(t),"PRIVATE")),xn(new He("heartbeat",t=>new qu(t),"PRIVATE")),he(Mr,ws,n),he(Mr,ws,"esm2017"),he("fire-js","")}Wu("");var Qu="firebase",Xu="11.4.0";/**
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
 */he(Qu,Xu,"app");var bs=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Jr;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function t(E,d){function g(){}g.prototype=d.prototype,E.D=d.prototype,E.prototype=new g,E.prototype.constructor=E,E.C=function(_,y,T){for(var p=Array(arguments.length-2),Ct=2;Ct<arguments.length;Ct++)p[Ct-2]=arguments[Ct];return d.prototype[y].apply(_,p)}}function e(){this.blockSize=-1}function i(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}t(i,e),i.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(E,d,g){g||(g=0);var _=Array(16);if(typeof d=="string")for(var y=0;16>y;++y)_[y]=d.charCodeAt(g++)|d.charCodeAt(g++)<<8|d.charCodeAt(g++)<<16|d.charCodeAt(g++)<<24;else for(y=0;16>y;++y)_[y]=d[g++]|d[g++]<<8|d[g++]<<16|d[g++]<<24;d=E.g[0],g=E.g[1],y=E.g[2];var T=E.g[3],p=d+(T^g&(y^T))+_[0]+3614090360&4294967295;d=g+(p<<7&4294967295|p>>>25),p=T+(y^d&(g^y))+_[1]+3905402710&4294967295,T=d+(p<<12&4294967295|p>>>20),p=y+(g^T&(d^g))+_[2]+606105819&4294967295,y=T+(p<<17&4294967295|p>>>15),p=g+(d^y&(T^d))+_[3]+3250441966&4294967295,g=y+(p<<22&4294967295|p>>>10),p=d+(T^g&(y^T))+_[4]+4118548399&4294967295,d=g+(p<<7&4294967295|p>>>25),p=T+(y^d&(g^y))+_[5]+1200080426&4294967295,T=d+(p<<12&4294967295|p>>>20),p=y+(g^T&(d^g))+_[6]+2821735955&4294967295,y=T+(p<<17&4294967295|p>>>15),p=g+(d^y&(T^d))+_[7]+4249261313&4294967295,g=y+(p<<22&4294967295|p>>>10),p=d+(T^g&(y^T))+_[8]+1770035416&4294967295,d=g+(p<<7&4294967295|p>>>25),p=T+(y^d&(g^y))+_[9]+2336552879&4294967295,T=d+(p<<12&4294967295|p>>>20),p=y+(g^T&(d^g))+_[10]+4294925233&4294967295,y=T+(p<<17&4294967295|p>>>15),p=g+(d^y&(T^d))+_[11]+2304563134&4294967295,g=y+(p<<22&4294967295|p>>>10),p=d+(T^g&(y^T))+_[12]+1804603682&4294967295,d=g+(p<<7&4294967295|p>>>25),p=T+(y^d&(g^y))+_[13]+4254626195&4294967295,T=d+(p<<12&4294967295|p>>>20),p=y+(g^T&(d^g))+_[14]+2792965006&4294967295,y=T+(p<<17&4294967295|p>>>15),p=g+(d^y&(T^d))+_[15]+1236535329&4294967295,g=y+(p<<22&4294967295|p>>>10),p=d+(y^T&(g^y))+_[1]+4129170786&4294967295,d=g+(p<<5&4294967295|p>>>27),p=T+(g^y&(d^g))+_[6]+3225465664&4294967295,T=d+(p<<9&4294967295|p>>>23),p=y+(d^g&(T^d))+_[11]+643717713&4294967295,y=T+(p<<14&4294967295|p>>>18),p=g+(T^d&(y^T))+_[0]+3921069994&4294967295,g=y+(p<<20&4294967295|p>>>12),p=d+(y^T&(g^y))+_[5]+3593408605&4294967295,d=g+(p<<5&4294967295|p>>>27),p=T+(g^y&(d^g))+_[10]+38016083&4294967295,T=d+(p<<9&4294967295|p>>>23),p=y+(d^g&(T^d))+_[15]+3634488961&4294967295,y=T+(p<<14&4294967295|p>>>18),p=g+(T^d&(y^T))+_[4]+3889429448&4294967295,g=y+(p<<20&4294967295|p>>>12),p=d+(y^T&(g^y))+_[9]+568446438&4294967295,d=g+(p<<5&4294967295|p>>>27),p=T+(g^y&(d^g))+_[14]+3275163606&4294967295,T=d+(p<<9&4294967295|p>>>23),p=y+(d^g&(T^d))+_[3]+4107603335&4294967295,y=T+(p<<14&4294967295|p>>>18),p=g+(T^d&(y^T))+_[8]+1163531501&4294967295,g=y+(p<<20&4294967295|p>>>12),p=d+(y^T&(g^y))+_[13]+2850285829&4294967295,d=g+(p<<5&4294967295|p>>>27),p=T+(g^y&(d^g))+_[2]+4243563512&4294967295,T=d+(p<<9&4294967295|p>>>23),p=y+(d^g&(T^d))+_[7]+1735328473&4294967295,y=T+(p<<14&4294967295|p>>>18),p=g+(T^d&(y^T))+_[12]+2368359562&4294967295,g=y+(p<<20&4294967295|p>>>12),p=d+(g^y^T)+_[5]+4294588738&4294967295,d=g+(p<<4&4294967295|p>>>28),p=T+(d^g^y)+_[8]+2272392833&4294967295,T=d+(p<<11&4294967295|p>>>21),p=y+(T^d^g)+_[11]+1839030562&4294967295,y=T+(p<<16&4294967295|p>>>16),p=g+(y^T^d)+_[14]+4259657740&4294967295,g=y+(p<<23&4294967295|p>>>9),p=d+(g^y^T)+_[1]+2763975236&4294967295,d=g+(p<<4&4294967295|p>>>28),p=T+(d^g^y)+_[4]+1272893353&4294967295,T=d+(p<<11&4294967295|p>>>21),p=y+(T^d^g)+_[7]+4139469664&4294967295,y=T+(p<<16&4294967295|p>>>16),p=g+(y^T^d)+_[10]+3200236656&4294967295,g=y+(p<<23&4294967295|p>>>9),p=d+(g^y^T)+_[13]+681279174&4294967295,d=g+(p<<4&4294967295|p>>>28),p=T+(d^g^y)+_[0]+3936430074&4294967295,T=d+(p<<11&4294967295|p>>>21),p=y+(T^d^g)+_[3]+3572445317&4294967295,y=T+(p<<16&4294967295|p>>>16),p=g+(y^T^d)+_[6]+76029189&4294967295,g=y+(p<<23&4294967295|p>>>9),p=d+(g^y^T)+_[9]+3654602809&4294967295,d=g+(p<<4&4294967295|p>>>28),p=T+(d^g^y)+_[12]+3873151461&4294967295,T=d+(p<<11&4294967295|p>>>21),p=y+(T^d^g)+_[15]+530742520&4294967295,y=T+(p<<16&4294967295|p>>>16),p=g+(y^T^d)+_[2]+3299628645&4294967295,g=y+(p<<23&4294967295|p>>>9),p=d+(y^(g|~T))+_[0]+4096336452&4294967295,d=g+(p<<6&4294967295|p>>>26),p=T+(g^(d|~y))+_[7]+1126891415&4294967295,T=d+(p<<10&4294967295|p>>>22),p=y+(d^(T|~g))+_[14]+2878612391&4294967295,y=T+(p<<15&4294967295|p>>>17),p=g+(T^(y|~d))+_[5]+4237533241&4294967295,g=y+(p<<21&4294967295|p>>>11),p=d+(y^(g|~T))+_[12]+1700485571&4294967295,d=g+(p<<6&4294967295|p>>>26),p=T+(g^(d|~y))+_[3]+2399980690&4294967295,T=d+(p<<10&4294967295|p>>>22),p=y+(d^(T|~g))+_[10]+4293915773&4294967295,y=T+(p<<15&4294967295|p>>>17),p=g+(T^(y|~d))+_[1]+2240044497&4294967295,g=y+(p<<21&4294967295|p>>>11),p=d+(y^(g|~T))+_[8]+1873313359&4294967295,d=g+(p<<6&4294967295|p>>>26),p=T+(g^(d|~y))+_[15]+4264355552&4294967295,T=d+(p<<10&4294967295|p>>>22),p=y+(d^(T|~g))+_[6]+2734768916&4294967295,y=T+(p<<15&4294967295|p>>>17),p=g+(T^(y|~d))+_[13]+1309151649&4294967295,g=y+(p<<21&4294967295|p>>>11),p=d+(y^(g|~T))+_[4]+4149444226&4294967295,d=g+(p<<6&4294967295|p>>>26),p=T+(g^(d|~y))+_[11]+3174756917&4294967295,T=d+(p<<10&4294967295|p>>>22),p=y+(d^(T|~g))+_[2]+718787259&4294967295,y=T+(p<<15&4294967295|p>>>17),p=g+(T^(y|~d))+_[9]+3951481745&4294967295,E.g[0]=E.g[0]+d&4294967295,E.g[1]=E.g[1]+(y+(p<<21&4294967295|p>>>11))&4294967295,E.g[2]=E.g[2]+y&4294967295,E.g[3]=E.g[3]+T&4294967295}i.prototype.u=function(E,d){d===void 0&&(d=E.length);for(var g=d-this.blockSize,_=this.B,y=this.h,T=0;T<d;){if(y==0)for(;T<=g;)s(this,E,T),T+=this.blockSize;if(typeof E=="string"){for(;T<d;)if(_[y++]=E.charCodeAt(T++),y==this.blockSize){s(this,_),y=0;break}}else for(;T<d;)if(_[y++]=E[T++],y==this.blockSize){s(this,_),y=0;break}}this.h=y,this.o+=d},i.prototype.v=function(){var E=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);E[0]=128;for(var d=1;d<E.length-8;++d)E[d]=0;var g=8*this.o;for(d=E.length-8;d<E.length;++d)E[d]=g&255,g/=256;for(this.u(E),E=Array(16),d=g=0;4>d;++d)for(var _=0;32>_;_+=8)E[g++]=this.g[d]>>>_&255;return E};function o(E,d){var g=c;return Object.prototype.hasOwnProperty.call(g,E)?g[E]:g[E]=d(E)}function u(E,d){this.h=d;for(var g=[],_=!0,y=E.length-1;0<=y;y--){var T=E[y]|0;_&&T==d||(g[y]=T,_=!1)}this.g=g}var c={};function f(E){return-128<=E&&128>E?o(E,function(d){return new u([d|0],0>d?-1:0)}):new u([E|0],0>E?-1:0)}function m(E){if(isNaN(E)||!isFinite(E))return w;if(0>E)return N(m(-E));for(var d=[],g=1,_=0;E>=g;_++)d[_]=E/g|0,g*=4294967296;return new u(d,0)}function I(E,d){if(E.length==0)throw Error("number format error: empty string");if(d=d||10,2>d||36<d)throw Error("radix out of range: "+d);if(E.charAt(0)=="-")return N(I(E.substring(1),d));if(0<=E.indexOf("-"))throw Error('number format error: interior "-" character');for(var g=m(Math.pow(d,8)),_=w,y=0;y<E.length;y+=8){var T=Math.min(8,E.length-y),p=parseInt(E.substring(y,y+T),d);8>T?(T=m(Math.pow(d,T)),_=_.j(T).add(m(p))):(_=_.j(g),_=_.add(m(p)))}return _}var w=f(0),C=f(1),V=f(16777216);n=u.prototype,n.m=function(){if(x(this))return-N(this).m();for(var E=0,d=1,g=0;g<this.g.length;g++){var _=this.i(g);E+=(0<=_?_:4294967296+_)*d,d*=4294967296}return E},n.toString=function(E){if(E=E||10,2>E||36<E)throw Error("radix out of range: "+E);if(D(this))return"0";if(x(this))return"-"+N(this).toString(E);for(var d=m(Math.pow(E,6)),g=this,_="";;){var y=ot(g,d).g;g=G(g,y.j(d));var T=((0<g.g.length?g.g[0]:g.h)>>>0).toString(E);if(g=y,D(g))return T+_;for(;6>T.length;)T="0"+T;_=T+_}},n.i=function(E){return 0>E?0:E<this.g.length?this.g[E]:this.h};function D(E){if(E.h!=0)return!1;for(var d=0;d<E.g.length;d++)if(E.g[d]!=0)return!1;return!0}function x(E){return E.h==-1}n.l=function(E){return E=G(this,E),x(E)?-1:D(E)?0:1};function N(E){for(var d=E.g.length,g=[],_=0;_<d;_++)g[_]=~E.g[_];return new u(g,~E.h).add(C)}n.abs=function(){return x(this)?N(this):this},n.add=function(E){for(var d=Math.max(this.g.length,E.g.length),g=[],_=0,y=0;y<=d;y++){var T=_+(this.i(y)&65535)+(E.i(y)&65535),p=(T>>>16)+(this.i(y)>>>16)+(E.i(y)>>>16);_=p>>>16,T&=65535,p&=65535,g[y]=p<<16|T}return new u(g,g[g.length-1]&-2147483648?-1:0)};function G(E,d){return E.add(N(d))}n.j=function(E){if(D(this)||D(E))return w;if(x(this))return x(E)?N(this).j(N(E)):N(N(this).j(E));if(x(E))return N(this.j(N(E)));if(0>this.l(V)&&0>E.l(V))return m(this.m()*E.m());for(var d=this.g.length+E.g.length,g=[],_=0;_<2*d;_++)g[_]=0;for(_=0;_<this.g.length;_++)for(var y=0;y<E.g.length;y++){var T=this.i(_)>>>16,p=this.i(_)&65535,Ct=E.i(y)>>>16,Te=E.i(y)&65535;g[2*_+2*y]+=p*Te,H(g,2*_+2*y),g[2*_+2*y+1]+=T*Te,H(g,2*_+2*y+1),g[2*_+2*y+1]+=p*Ct,H(g,2*_+2*y+1),g[2*_+2*y+2]+=T*Ct,H(g,2*_+2*y+2)}for(_=0;_<d;_++)g[_]=g[2*_+1]<<16|g[2*_];for(_=d;_<2*d;_++)g[_]=0;return new u(g,0)};function H(E,d){for(;(E[d]&65535)!=E[d];)E[d+1]+=E[d]>>>16,E[d]&=65535,d++}function K(E,d){this.g=E,this.h=d}function ot(E,d){if(D(d))throw Error("division by zero");if(D(E))return new K(w,w);if(x(E))return d=ot(N(E),d),new K(N(d.g),N(d.h));if(x(d))return d=ot(E,N(d)),new K(N(d.g),d.h);if(30<E.g.length){if(x(E)||x(d))throw Error("slowDivide_ only works with positive integers.");for(var g=C,_=d;0>=_.l(E);)g=qt(g),_=qt(_);var y=gt(g,1),T=gt(_,1);for(_=gt(_,2),g=gt(g,2);!D(_);){var p=T.add(_);0>=p.l(E)&&(y=y.add(g),T=p),_=gt(_,1),g=gt(g,1)}return d=G(E,y.j(d)),new K(y,d)}for(y=w;0<=E.l(d);){for(g=Math.max(1,Math.floor(E.m()/d.m())),_=Math.ceil(Math.log(g)/Math.LN2),_=48>=_?1:Math.pow(2,_-48),T=m(g),p=T.j(d);x(p)||0<p.l(E);)g-=_,T=m(g),p=T.j(d);D(T)&&(T=C),y=y.add(T),E=G(E,p)}return new K(y,E)}n.A=function(E){return ot(this,E).h},n.and=function(E){for(var d=Math.max(this.g.length,E.g.length),g=[],_=0;_<d;_++)g[_]=this.i(_)&E.i(_);return new u(g,this.h&E.h)},n.or=function(E){for(var d=Math.max(this.g.length,E.g.length),g=[],_=0;_<d;_++)g[_]=this.i(_)|E.i(_);return new u(g,this.h|E.h)},n.xor=function(E){for(var d=Math.max(this.g.length,E.g.length),g=[],_=0;_<d;_++)g[_]=this.i(_)^E.i(_);return new u(g,this.h^E.h)};function qt(E){for(var d=E.g.length+1,g=[],_=0;_<d;_++)g[_]=E.i(_)<<1|E.i(_-1)>>>31;return new u(g,E.h)}function gt(E,d){var g=d>>5;d%=32;for(var _=E.g.length-g,y=[],T=0;T<_;T++)y[T]=0<d?E.i(T+g)>>>d|E.i(T+g+1)<<32-d:E.i(T+g);return new u(y,E.h)}i.prototype.digest=i.prototype.v,i.prototype.reset=i.prototype.s,i.prototype.update=i.prototype.u,u.prototype.add=u.prototype.add,u.prototype.multiply=u.prototype.j,u.prototype.modulo=u.prototype.A,u.prototype.compare=u.prototype.l,u.prototype.toNumber=u.prototype.m,u.prototype.toString=u.prototype.toString,u.prototype.getBits=u.prototype.i,u.fromNumber=m,u.fromString=I,Jr=u}).apply(typeof bs<"u"?bs:typeof self<"u"?self:typeof window<"u"?window:{});var An=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Co,Ue,So,Sn,Ur,bo,Vo,Do;(function(){var n,t=typeof Object.defineProperties=="function"?Object.defineProperty:function(r,a,l){return r==Array.prototype||r==Object.prototype||(r[a]=l.value),r};function e(r){r=[typeof globalThis=="object"&&globalThis,r,typeof window=="object"&&window,typeof self=="object"&&self,typeof An=="object"&&An];for(var a=0;a<r.length;++a){var l=r[a];if(l&&l.Math==Math)return l}throw Error("Cannot find global object")}var i=e(this);function s(r,a){if(a)t:{var l=i;r=r.split(".");for(var h=0;h<r.length-1;h++){var v=r[h];if(!(v in l))break t;l=l[v]}r=r[r.length-1],h=l[r],a=a(h),a!=h&&a!=null&&t(l,r,{configurable:!0,writable:!0,value:a})}}function o(r,a){r instanceof String&&(r+="");var l=0,h=!1,v={next:function(){if(!h&&l<r.length){var A=l++;return{value:a(A,r[A]),done:!1}}return h=!0,{done:!0,value:void 0}}};return v[Symbol.iterator]=function(){return v},v}s("Array.prototype.values",function(r){return r||function(){return o(this,function(a,l){return l})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var u=u||{},c=this||self;function f(r){var a=typeof r;return a=a!="object"?a:r?Array.isArray(r)?"array":a:"null",a=="array"||a=="object"&&typeof r.length=="number"}function m(r){var a=typeof r;return a=="object"&&r!=null||a=="function"}function I(r,a,l){return r.call.apply(r.bind,arguments)}function w(r,a,l){if(!r)throw Error();if(2<arguments.length){var h=Array.prototype.slice.call(arguments,2);return function(){var v=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(v,h),r.apply(a,v)}}return function(){return r.apply(a,arguments)}}function C(r,a,l){return C=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?I:w,C.apply(null,arguments)}function V(r,a){var l=Array.prototype.slice.call(arguments,1);return function(){var h=l.slice();return h.push.apply(h,arguments),r.apply(this,h)}}function D(r,a){function l(){}l.prototype=a.prototype,r.aa=a.prototype,r.prototype=new l,r.prototype.constructor=r,r.Qb=function(h,v,A){for(var S=Array(arguments.length-2),j=2;j<arguments.length;j++)S[j-2]=arguments[j];return a.prototype[v].apply(h,S)}}function x(r){const a=r.length;if(0<a){const l=Array(a);for(let h=0;h<a;h++)l[h]=r[h];return l}return[]}function N(r,a){for(let l=1;l<arguments.length;l++){const h=arguments[l];if(f(h)){const v=r.length||0,A=h.length||0;r.length=v+A;for(let S=0;S<A;S++)r[v+S]=h[S]}else r.push(h)}}class G{constructor(a,l){this.i=a,this.j=l,this.h=0,this.g=null}get(){let a;return 0<this.h?(this.h--,a=this.g,this.g=a.next,a.next=null):a=this.i(),a}}function H(r){return/^[\s\xa0]*$/.test(r)}function K(){var r=c.navigator;return r&&(r=r.userAgent)?r:""}function ot(r){return ot[" "](r),r}ot[" "]=function(){};var qt=K().indexOf("Gecko")!=-1&&!(K().toLowerCase().indexOf("webkit")!=-1&&K().indexOf("Edge")==-1)&&!(K().indexOf("Trident")!=-1||K().indexOf("MSIE")!=-1)&&K().indexOf("Edge")==-1;function gt(r,a,l){for(const h in r)a.call(l,r[h],h,r)}function E(r,a){for(const l in r)a.call(void 0,r[l],l,r)}function d(r){const a={};for(const l in r)a[l]=r[l];return a}const g="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function _(r,a){let l,h;for(let v=1;v<arguments.length;v++){h=arguments[v];for(l in h)r[l]=h[l];for(let A=0;A<g.length;A++)l=g[A],Object.prototype.hasOwnProperty.call(h,l)&&(r[l]=h[l])}}function y(r){var a=1;r=r.split(":");const l=[];for(;0<a&&r.length;)l.push(r.shift()),a--;return r.length&&l.push(r.join(":")),l}function T(r){c.setTimeout(()=>{throw r},0)}function p(){var r=rr;let a=null;return r.g&&(a=r.g,r.g=r.g.next,r.g||(r.h=null),a.next=null),a}class Ct{constructor(){this.h=this.g=null}add(a,l){const h=Te.get();h.set(a,l),this.h?this.h.next=h:this.g=h,this.h=h}}var Te=new G(()=>new xa,r=>r.reset());class xa{constructor(){this.next=this.g=this.h=null}set(a,l){this.h=a,this.g=l,this.next=null}reset(){this.next=this.g=this.h=null}}let Ie,Ae=!1,rr=new Ct,Ei=()=>{const r=c.Promise.resolve(void 0);Ie=()=>{r.then(Ma)}};var Ma=()=>{for(var r;r=p();){try{r.h.call(r.g)}catch(l){T(l)}var a=Te;a.j(r),100>a.h&&(a.h++,r.next=a.g,a.g=r)}Ae=!1};function Ot(){this.s=this.s,this.C=this.C}Ot.prototype.s=!1,Ot.prototype.ma=function(){this.s||(this.s=!0,this.N())},Ot.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function at(r,a){this.type=r,this.g=this.target=a,this.defaultPrevented=!1}at.prototype.h=function(){this.defaultPrevented=!0};var La=function(){if(!c.addEventListener||!Object.defineProperty)return!1;var r=!1,a=Object.defineProperty({},"passive",{get:function(){r=!0}});try{const l=()=>{};c.addEventListener("test",l,a),c.removeEventListener("test",l,a)}catch{}return r}();function we(r,a){if(at.call(this,r?r.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,r){var l=this.type=r.type,h=r.changedTouches&&r.changedTouches.length?r.changedTouches[0]:null;if(this.target=r.target||r.srcElement,this.g=a,a=r.relatedTarget){if(qt){t:{try{ot(a.nodeName);var v=!0;break t}catch{}v=!1}v||(a=null)}}else l=="mouseover"?a=r.fromElement:l=="mouseout"&&(a=r.toElement);this.relatedTarget=a,h?(this.clientX=h.clientX!==void 0?h.clientX:h.pageX,this.clientY=h.clientY!==void 0?h.clientY:h.pageY,this.screenX=h.screenX||0,this.screenY=h.screenY||0):(this.clientX=r.clientX!==void 0?r.clientX:r.pageX,this.clientY=r.clientY!==void 0?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0),this.button=r.button,this.key=r.key||"",this.ctrlKey=r.ctrlKey,this.altKey=r.altKey,this.shiftKey=r.shiftKey,this.metaKey=r.metaKey,this.pointerId=r.pointerId||0,this.pointerType=typeof r.pointerType=="string"?r.pointerType:Fa[r.pointerType]||"",this.state=r.state,this.i=r,r.defaultPrevented&&we.aa.h.call(this)}}D(we,at);var Fa={2:"touch",3:"pen",4:"mouse"};we.prototype.h=function(){we.aa.h.call(this);var r=this.i;r.preventDefault?r.preventDefault():r.returnValue=!1};var rn="closure_listenable_"+(1e6*Math.random()|0),Ua=0;function Ba(r,a,l,h,v){this.listener=r,this.proxy=null,this.src=a,this.type=l,this.capture=!!h,this.ha=v,this.key=++Ua,this.da=this.fa=!1}function sn(r){r.da=!0,r.listener=null,r.proxy=null,r.src=null,r.ha=null}function on(r){this.src=r,this.g={},this.h=0}on.prototype.add=function(r,a,l,h,v){var A=r.toString();r=this.g[A],r||(r=this.g[A]=[],this.h++);var S=sr(r,a,h,v);return-1<S?(a=r[S],l||(a.fa=!1)):(a=new Ba(a,this.src,A,!!h,v),a.fa=l,r.push(a)),a};function ir(r,a){var l=a.type;if(l in r.g){var h=r.g[l],v=Array.prototype.indexOf.call(h,a,void 0),A;(A=0<=v)&&Array.prototype.splice.call(h,v,1),A&&(sn(a),r.g[l].length==0&&(delete r.g[l],r.h--))}}function sr(r,a,l,h){for(var v=0;v<r.length;++v){var A=r[v];if(!A.da&&A.listener==a&&A.capture==!!l&&A.ha==h)return v}return-1}var or="closure_lm_"+(1e6*Math.random()|0),ar={};function vi(r,a,l,h,v){if(Array.isArray(a)){for(var A=0;A<a.length;A++)vi(r,a[A],l,h,v);return null}return l=Ai(l),r&&r[rn]?r.K(a,l,m(h)?!!h.capture:!1,v):ja(r,a,l,!1,h,v)}function ja(r,a,l,h,v,A){if(!a)throw Error("Invalid event type");var S=m(v)?!!v.capture:!!v,j=ur(r);if(j||(r[or]=j=new on(r)),l=j.add(a,l,h,S,A),l.proxy)return l;if(h=$a(),l.proxy=h,h.src=r,h.listener=l,r.addEventListener)La||(v=S),v===void 0&&(v=!1),r.addEventListener(a.toString(),h,v);else if(r.attachEvent)r.attachEvent(Ii(a.toString()),h);else if(r.addListener&&r.removeListener)r.addListener(h);else throw Error("addEventListener and attachEvent are unavailable.");return l}function $a(){function r(l){return a.call(r.src,r.listener,l)}const a=za;return r}function Ti(r,a,l,h,v){if(Array.isArray(a))for(var A=0;A<a.length;A++)Ti(r,a[A],l,h,v);else h=m(h)?!!h.capture:!!h,l=Ai(l),r&&r[rn]?(r=r.i,a=String(a).toString(),a in r.g&&(A=r.g[a],l=sr(A,l,h,v),-1<l&&(sn(A[l]),Array.prototype.splice.call(A,l,1),A.length==0&&(delete r.g[a],r.h--)))):r&&(r=ur(r))&&(a=r.g[a.toString()],r=-1,a&&(r=sr(a,l,h,v)),(l=-1<r?a[r]:null)&&lr(l))}function lr(r){if(typeof r!="number"&&r&&!r.da){var a=r.src;if(a&&a[rn])ir(a.i,r);else{var l=r.type,h=r.proxy;a.removeEventListener?a.removeEventListener(l,h,r.capture):a.detachEvent?a.detachEvent(Ii(l),h):a.addListener&&a.removeListener&&a.removeListener(h),(l=ur(a))?(ir(l,r),l.h==0&&(l.src=null,a[or]=null)):sn(r)}}}function Ii(r){return r in ar?ar[r]:ar[r]="on"+r}function za(r,a){if(r.da)r=!0;else{a=new we(a,this);var l=r.listener,h=r.ha||r.src;r.fa&&lr(r),r=l.call(h,a)}return r}function ur(r){return r=r[or],r instanceof on?r:null}var cr="__closure_events_fn_"+(1e9*Math.random()>>>0);function Ai(r){return typeof r=="function"?r:(r[cr]||(r[cr]=function(a){return r.handleEvent(a)}),r[cr])}function lt(){Ot.call(this),this.i=new on(this),this.M=this,this.F=null}D(lt,Ot),lt.prototype[rn]=!0,lt.prototype.removeEventListener=function(r,a,l,h){Ti(this,r,a,l,h)};function pt(r,a){var l,h=r.F;if(h)for(l=[];h;h=h.F)l.push(h);if(r=r.M,h=a.type||a,typeof a=="string")a=new at(a,r);else if(a instanceof at)a.target=a.target||r;else{var v=a;a=new at(h,r),_(a,v)}if(v=!0,l)for(var A=l.length-1;0<=A;A--){var S=a.g=l[A];v=an(S,h,!0,a)&&v}if(S=a.g=r,v=an(S,h,!0,a)&&v,v=an(S,h,!1,a)&&v,l)for(A=0;A<l.length;A++)S=a.g=l[A],v=an(S,h,!1,a)&&v}lt.prototype.N=function(){if(lt.aa.N.call(this),this.i){var r=this.i,a;for(a in r.g){for(var l=r.g[a],h=0;h<l.length;h++)sn(l[h]);delete r.g[a],r.h--}}this.F=null},lt.prototype.K=function(r,a,l,h){return this.i.add(String(r),a,!1,l,h)},lt.prototype.L=function(r,a,l,h){return this.i.add(String(r),a,!0,l,h)};function an(r,a,l,h){if(a=r.i.g[String(a)],!a)return!0;a=a.concat();for(var v=!0,A=0;A<a.length;++A){var S=a[A];if(S&&!S.da&&S.capture==l){var j=S.listener,et=S.ha||S.src;S.fa&&ir(r.i,S),v=j.call(et,h)!==!1&&v}}return v&&!h.defaultPrevented}function wi(r,a,l){if(typeof r=="function")l&&(r=C(r,l));else if(r&&typeof r.handleEvent=="function")r=C(r.handleEvent,r);else throw Error("Invalid listener argument");return 2147483647<Number(a)?-1:c.setTimeout(r,a||0)}function Ri(r){r.g=wi(()=>{r.g=null,r.i&&(r.i=!1,Ri(r))},r.l);const a=r.h;r.h=null,r.m.apply(null,a)}class qa extends Ot{constructor(a,l){super(),this.m=a,this.l=l,this.h=null,this.i=!1,this.g=null}j(a){this.h=arguments,this.g?this.i=!0:Ri(this)}N(){super.N(),this.g&&(c.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Re(r){Ot.call(this),this.h=r,this.g={}}D(Re,Ot);var Pi=[];function Ci(r){gt(r.g,function(a,l){this.g.hasOwnProperty(l)&&lr(a)},r),r.g={}}Re.prototype.N=function(){Re.aa.N.call(this),Ci(this)},Re.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var hr=c.JSON.stringify,Ha=c.JSON.parse,Ga=class{stringify(r){return c.JSON.stringify(r,void 0)}parse(r){return c.JSON.parse(r,void 0)}};function fr(){}fr.prototype.h=null;function Si(r){return r.h||(r.h=r.i())}function bi(){}var Pe={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function dr(){at.call(this,"d")}D(dr,at);function pr(){at.call(this,"c")}D(pr,at);var Ht={},Vi=null;function ln(){return Vi=Vi||new lt}Ht.La="serverreachability";function Di(r){at.call(this,Ht.La,r)}D(Di,at);function Ce(r){const a=ln();pt(a,new Di(a))}Ht.STAT_EVENT="statevent";function Ni(r,a){at.call(this,Ht.STAT_EVENT,r),this.stat=a}D(Ni,at);function mt(r){const a=ln();pt(a,new Ni(a,r))}Ht.Ma="timingevent";function Oi(r,a){at.call(this,Ht.Ma,r),this.size=a}D(Oi,at);function Se(r,a){if(typeof r!="function")throw Error("Fn must not be null and must be a function");return c.setTimeout(function(){r()},a)}function be(){this.g=!0}be.prototype.xa=function(){this.g=!1};function Ka(r,a,l,h,v,A){r.info(function(){if(r.g)if(A)for(var S="",j=A.split("&"),et=0;et<j.length;et++){var U=j[et].split("=");if(1<U.length){var ut=U[0];U=U[1];var ct=ut.split("_");S=2<=ct.length&&ct[1]=="type"?S+(ut+"="+U+"&"):S+(ut+"=redacted&")}}else S=null;else S=A;return"XMLHTTP REQ ("+h+") [attempt "+v+"]: "+a+`
`+l+`
`+S})}function Wa(r,a,l,h,v,A,S){r.info(function(){return"XMLHTTP RESP ("+h+") [ attempt "+v+"]: "+a+`
`+l+`
`+A+" "+S})}function se(r,a,l,h){r.info(function(){return"XMLHTTP TEXT ("+a+"): "+Xa(r,l)+(h?" "+h:"")})}function Qa(r,a){r.info(function(){return"TIMEOUT: "+a})}be.prototype.info=function(){};function Xa(r,a){if(!r.g)return a;if(!a)return null;try{var l=JSON.parse(a);if(l){for(r=0;r<l.length;r++)if(Array.isArray(l[r])){var h=l[r];if(!(2>h.length)){var v=h[1];if(Array.isArray(v)&&!(1>v.length)){var A=v[0];if(A!="noop"&&A!="stop"&&A!="close")for(var S=1;S<v.length;S++)v[S]=""}}}}return hr(l)}catch{return a}}var un={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},ki={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},mr;function cn(){}D(cn,fr),cn.prototype.g=function(){return new XMLHttpRequest},cn.prototype.i=function(){return{}},mr=new cn;function kt(r,a,l,h){this.j=r,this.i=a,this.l=l,this.R=h||1,this.U=new Re(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new xi}function xi(){this.i=null,this.g="",this.h=!1}var Mi={},gr={};function _r(r,a,l){r.L=1,r.v=pn(St(a)),r.m=l,r.P=!0,Li(r,null)}function Li(r,a){r.F=Date.now(),hn(r),r.A=St(r.v);var l=r.A,h=r.R;Array.isArray(h)||(h=[String(h)]),Yi(l.i,"t",h),r.C=0,l=r.j.J,r.h=new xi,r.g=ms(r.j,l?a:null,!r.m),0<r.O&&(r.M=new qa(C(r.Y,r,r.g),r.O)),a=r.U,l=r.g,h=r.ca;var v="readystatechange";Array.isArray(v)||(v&&(Pi[0]=v.toString()),v=Pi);for(var A=0;A<v.length;A++){var S=vi(l,v[A],h||a.handleEvent,!1,a.h||a);if(!S)break;a.g[S.key]=S}a=r.H?d(r.H):{},r.m?(r.u||(r.u="POST"),a["Content-Type"]="application/x-www-form-urlencoded",r.g.ea(r.A,r.u,r.m,a)):(r.u="GET",r.g.ea(r.A,r.u,null,a)),Ce(),Ka(r.i,r.u,r.A,r.l,r.R,r.m)}kt.prototype.ca=function(r){r=r.target;const a=this.M;a&&bt(r)==3?a.j():this.Y(r)},kt.prototype.Y=function(r){try{if(r==this.g)t:{const ct=bt(this.g);var a=this.g.Ba();const le=this.g.Z();if(!(3>ct)&&(ct!=3||this.g&&(this.h.h||this.g.oa()||is(this.g)))){this.J||ct!=4||a==7||(a==8||0>=le?Ce(3):Ce(2)),yr(this);var l=this.g.Z();this.X=l;e:if(Fi(this)){var h=is(this.g);r="";var v=h.length,A=bt(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Gt(this),Ve(this);var S="";break e}this.h.i=new c.TextDecoder}for(a=0;a<v;a++)this.h.h=!0,r+=this.h.i.decode(h[a],{stream:!(A&&a==v-1)});h.length=0,this.h.g+=r,this.C=0,S=this.h.g}else S=this.g.oa();if(this.o=l==200,Wa(this.i,this.u,this.A,this.l,this.R,ct,l),this.o){if(this.T&&!this.K){e:{if(this.g){var j,et=this.g;if((j=et.g?et.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!H(j)){var U=j;break e}}U=null}if(l=U)se(this.i,this.l,l,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Er(this,l);else{this.o=!1,this.s=3,mt(12),Gt(this),Ve(this);break t}}if(this.P){l=!0;let vt;for(;!this.J&&this.C<S.length;)if(vt=Ya(this,S),vt==gr){ct==4&&(this.s=4,mt(14),l=!1),se(this.i,this.l,null,"[Incomplete Response]");break}else if(vt==Mi){this.s=4,mt(15),se(this.i,this.l,S,"[Invalid Chunk]"),l=!1;break}else se(this.i,this.l,vt,null),Er(this,vt);if(Fi(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),ct!=4||S.length!=0||this.h.h||(this.s=1,mt(16),l=!1),this.o=this.o&&l,!l)se(this.i,this.l,S,"[Invalid Chunked Response]"),Gt(this),Ve(this);else if(0<S.length&&!this.W){this.W=!0;var ut=this.j;ut.g==this&&ut.ba&&!ut.M&&(ut.j.info("Great, no buffering proxy detected. Bytes received: "+S.length),Rr(ut),ut.M=!0,mt(11))}}else se(this.i,this.l,S,null),Er(this,S);ct==4&&Gt(this),this.o&&!this.J&&(ct==4?hs(this.j,this):(this.o=!1,hn(this)))}else pl(this.g),l==400&&0<S.indexOf("Unknown SID")?(this.s=3,mt(12)):(this.s=0,mt(13)),Gt(this),Ve(this)}}}catch{}finally{}};function Fi(r){return r.g?r.u=="GET"&&r.L!=2&&r.j.Ca:!1}function Ya(r,a){var l=r.C,h=a.indexOf(`
`,l);return h==-1?gr:(l=Number(a.substring(l,h)),isNaN(l)?Mi:(h+=1,h+l>a.length?gr:(a=a.slice(h,h+l),r.C=h+l,a)))}kt.prototype.cancel=function(){this.J=!0,Gt(this)};function hn(r){r.S=Date.now()+r.I,Ui(r,r.I)}function Ui(r,a){if(r.B!=null)throw Error("WatchDog timer not null");r.B=Se(C(r.ba,r),a)}function yr(r){r.B&&(c.clearTimeout(r.B),r.B=null)}kt.prototype.ba=function(){this.B=null;const r=Date.now();0<=r-this.S?(Qa(this.i,this.A),this.L!=2&&(Ce(),mt(17)),Gt(this),this.s=2,Ve(this)):Ui(this,this.S-r)};function Ve(r){r.j.G==0||r.J||hs(r.j,r)}function Gt(r){yr(r);var a=r.M;a&&typeof a.ma=="function"&&a.ma(),r.M=null,Ci(r.U),r.g&&(a=r.g,r.g=null,a.abort(),a.ma())}function Er(r,a){try{var l=r.j;if(l.G!=0&&(l.g==r||vr(l.h,r))){if(!r.K&&vr(l.h,r)&&l.G==3){try{var h=l.Da.g.parse(a)}catch{h=null}if(Array.isArray(h)&&h.length==3){var v=h;if(v[0]==0){t:if(!l.u){if(l.g)if(l.g.F+3e3<r.F)vn(l),yn(l);else break t;wr(l),mt(18)}}else l.za=v[1],0<l.za-l.T&&37500>v[2]&&l.F&&l.v==0&&!l.C&&(l.C=Se(C(l.Za,l),6e3));if(1>=$i(l.h)&&l.ca){try{l.ca()}catch{}l.ca=void 0}}else Wt(l,11)}else if((r.K||l.g==r)&&vn(l),!H(a))for(v=l.Da.g.parse(a),a=0;a<v.length;a++){let U=v[a];if(l.T=U[0],U=U[1],l.G==2)if(U[0]=="c"){l.K=U[1],l.ia=U[2];const ut=U[3];ut!=null&&(l.la=ut,l.j.info("VER="+l.la));const ct=U[4];ct!=null&&(l.Aa=ct,l.j.info("SVER="+l.Aa));const le=U[5];le!=null&&typeof le=="number"&&0<le&&(h=1.5*le,l.L=h,l.j.info("backChannelRequestTimeoutMs_="+h)),h=l;const vt=r.g;if(vt){const In=vt.g?vt.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(In){var A=h.h;A.g||In.indexOf("spdy")==-1&&In.indexOf("quic")==-1&&In.indexOf("h2")==-1||(A.j=A.l,A.g=new Set,A.h&&(Tr(A,A.h),A.h=null))}if(h.D){const Pr=vt.g?vt.g.getResponseHeader("X-HTTP-Session-Id"):null;Pr&&(h.ya=Pr,z(h.I,h.D,Pr))}}l.G=3,l.l&&l.l.ua(),l.ba&&(l.R=Date.now()-r.F,l.j.info("Handshake RTT: "+l.R+"ms")),h=l;var S=r;if(h.qa=ps(h,h.J?h.ia:null,h.W),S.K){zi(h.h,S);var j=S,et=h.L;et&&(j.I=et),j.B&&(yr(j),hn(j)),h.g=S}else us(h);0<l.i.length&&En(l)}else U[0]!="stop"&&U[0]!="close"||Wt(l,7);else l.G==3&&(U[0]=="stop"||U[0]=="close"?U[0]=="stop"?Wt(l,7):Ar(l):U[0]!="noop"&&l.l&&l.l.ta(U),l.v=0)}}Ce(4)}catch{}}var Ja=class{constructor(r,a){this.g=r,this.map=a}};function Bi(r){this.l=r||10,c.PerformanceNavigationTiming?(r=c.performance.getEntriesByType("navigation"),r=0<r.length&&(r[0].nextHopProtocol=="hq"||r[0].nextHopProtocol=="h2")):r=!!(c.chrome&&c.chrome.loadTimes&&c.chrome.loadTimes()&&c.chrome.loadTimes().wasFetchedViaSpdy),this.j=r?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function ji(r){return r.h?!0:r.g?r.g.size>=r.j:!1}function $i(r){return r.h?1:r.g?r.g.size:0}function vr(r,a){return r.h?r.h==a:r.g?r.g.has(a):!1}function Tr(r,a){r.g?r.g.add(a):r.h=a}function zi(r,a){r.h&&r.h==a?r.h=null:r.g&&r.g.has(a)&&r.g.delete(a)}Bi.prototype.cancel=function(){if(this.i=qi(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const r of this.g.values())r.cancel();this.g.clear()}};function qi(r){if(r.h!=null)return r.i.concat(r.h.D);if(r.g!=null&&r.g.size!==0){let a=r.i;for(const l of r.g.values())a=a.concat(l.D);return a}return x(r.i)}function Za(r){if(r.V&&typeof r.V=="function")return r.V();if(typeof Map<"u"&&r instanceof Map||typeof Set<"u"&&r instanceof Set)return Array.from(r.values());if(typeof r=="string")return r.split("");if(f(r)){for(var a=[],l=r.length,h=0;h<l;h++)a.push(r[h]);return a}a=[],l=0;for(h in r)a[l++]=r[h];return a}function tl(r){if(r.na&&typeof r.na=="function")return r.na();if(!r.V||typeof r.V!="function"){if(typeof Map<"u"&&r instanceof Map)return Array.from(r.keys());if(!(typeof Set<"u"&&r instanceof Set)){if(f(r)||typeof r=="string"){var a=[];r=r.length;for(var l=0;l<r;l++)a.push(l);return a}a=[],l=0;for(const h in r)a[l++]=h;return a}}}function Hi(r,a){if(r.forEach&&typeof r.forEach=="function")r.forEach(a,void 0);else if(f(r)||typeof r=="string")Array.prototype.forEach.call(r,a,void 0);else for(var l=tl(r),h=Za(r),v=h.length,A=0;A<v;A++)a.call(void 0,h[A],l&&l[A],r)}var Gi=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function el(r,a){if(r){r=r.split("&");for(var l=0;l<r.length;l++){var h=r[l].indexOf("="),v=null;if(0<=h){var A=r[l].substring(0,h);v=r[l].substring(h+1)}else A=r[l];a(A,v?decodeURIComponent(v.replace(/\+/g," ")):"")}}}function Kt(r){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,r instanceof Kt){this.h=r.h,fn(this,r.j),this.o=r.o,this.g=r.g,dn(this,r.s),this.l=r.l;var a=r.i,l=new Oe;l.i=a.i,a.g&&(l.g=new Map(a.g),l.h=a.h),Ki(this,l),this.m=r.m}else r&&(a=String(r).match(Gi))?(this.h=!1,fn(this,a[1]||"",!0),this.o=De(a[2]||""),this.g=De(a[3]||"",!0),dn(this,a[4]),this.l=De(a[5]||"",!0),Ki(this,a[6]||"",!0),this.m=De(a[7]||"")):(this.h=!1,this.i=new Oe(null,this.h))}Kt.prototype.toString=function(){var r=[],a=this.j;a&&r.push(Ne(a,Wi,!0),":");var l=this.g;return(l||a=="file")&&(r.push("//"),(a=this.o)&&r.push(Ne(a,Wi,!0),"@"),r.push(encodeURIComponent(String(l)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),l=this.s,l!=null&&r.push(":",String(l))),(l=this.l)&&(this.g&&l.charAt(0)!="/"&&r.push("/"),r.push(Ne(l,l.charAt(0)=="/"?il:rl,!0))),(l=this.i.toString())&&r.push("?",l),(l=this.m)&&r.push("#",Ne(l,ol)),r.join("")};function St(r){return new Kt(r)}function fn(r,a,l){r.j=l?De(a,!0):a,r.j&&(r.j=r.j.replace(/:$/,""))}function dn(r,a){if(a){if(a=Number(a),isNaN(a)||0>a)throw Error("Bad port number "+a);r.s=a}else r.s=null}function Ki(r,a,l){a instanceof Oe?(r.i=a,al(r.i,r.h)):(l||(a=Ne(a,sl)),r.i=new Oe(a,r.h))}function z(r,a,l){r.i.set(a,l)}function pn(r){return z(r,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),r}function De(r,a){return r?a?decodeURI(r.replace(/%25/g,"%2525")):decodeURIComponent(r):""}function Ne(r,a,l){return typeof r=="string"?(r=encodeURI(r).replace(a,nl),l&&(r=r.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),r):null}function nl(r){return r=r.charCodeAt(0),"%"+(r>>4&15).toString(16)+(r&15).toString(16)}var Wi=/[#\/\?@]/g,rl=/[#\?:]/g,il=/[#\?]/g,sl=/[#\?@]/g,ol=/#/g;function Oe(r,a){this.h=this.g=null,this.i=r||null,this.j=!!a}function xt(r){r.g||(r.g=new Map,r.h=0,r.i&&el(r.i,function(a,l){r.add(decodeURIComponent(a.replace(/\+/g," ")),l)}))}n=Oe.prototype,n.add=function(r,a){xt(this),this.i=null,r=oe(this,r);var l=this.g.get(r);return l||this.g.set(r,l=[]),l.push(a),this.h+=1,this};function Qi(r,a){xt(r),a=oe(r,a),r.g.has(a)&&(r.i=null,r.h-=r.g.get(a).length,r.g.delete(a))}function Xi(r,a){return xt(r),a=oe(r,a),r.g.has(a)}n.forEach=function(r,a){xt(this),this.g.forEach(function(l,h){l.forEach(function(v){r.call(a,v,h,this)},this)},this)},n.na=function(){xt(this);const r=Array.from(this.g.values()),a=Array.from(this.g.keys()),l=[];for(let h=0;h<a.length;h++){const v=r[h];for(let A=0;A<v.length;A++)l.push(a[h])}return l},n.V=function(r){xt(this);let a=[];if(typeof r=="string")Xi(this,r)&&(a=a.concat(this.g.get(oe(this,r))));else{r=Array.from(this.g.values());for(let l=0;l<r.length;l++)a=a.concat(r[l])}return a},n.set=function(r,a){return xt(this),this.i=null,r=oe(this,r),Xi(this,r)&&(this.h-=this.g.get(r).length),this.g.set(r,[a]),this.h+=1,this},n.get=function(r,a){return r?(r=this.V(r),0<r.length?String(r[0]):a):a};function Yi(r,a,l){Qi(r,a),0<l.length&&(r.i=null,r.g.set(oe(r,a),x(l)),r.h+=l.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const r=[],a=Array.from(this.g.keys());for(var l=0;l<a.length;l++){var h=a[l];const A=encodeURIComponent(String(h)),S=this.V(h);for(h=0;h<S.length;h++){var v=A;S[h]!==""&&(v+="="+encodeURIComponent(String(S[h]))),r.push(v)}}return this.i=r.join("&")};function oe(r,a){return a=String(a),r.j&&(a=a.toLowerCase()),a}function al(r,a){a&&!r.j&&(xt(r),r.i=null,r.g.forEach(function(l,h){var v=h.toLowerCase();h!=v&&(Qi(this,h),Yi(this,v,l))},r)),r.j=a}function ll(r,a){const l=new be;if(c.Image){const h=new Image;h.onload=V(Mt,l,"TestLoadImage: loaded",!0,a,h),h.onerror=V(Mt,l,"TestLoadImage: error",!1,a,h),h.onabort=V(Mt,l,"TestLoadImage: abort",!1,a,h),h.ontimeout=V(Mt,l,"TestLoadImage: timeout",!1,a,h),c.setTimeout(function(){h.ontimeout&&h.ontimeout()},1e4),h.src=r}else a(!1)}function ul(r,a){const l=new be,h=new AbortController,v=setTimeout(()=>{h.abort(),Mt(l,"TestPingServer: timeout",!1,a)},1e4);fetch(r,{signal:h.signal}).then(A=>{clearTimeout(v),A.ok?Mt(l,"TestPingServer: ok",!0,a):Mt(l,"TestPingServer: server error",!1,a)}).catch(()=>{clearTimeout(v),Mt(l,"TestPingServer: error",!1,a)})}function Mt(r,a,l,h,v){try{v&&(v.onload=null,v.onerror=null,v.onabort=null,v.ontimeout=null),h(l)}catch{}}function cl(){this.g=new Ga}function hl(r,a,l){const h=l||"";try{Hi(r,function(v,A){let S=v;m(v)&&(S=hr(v)),a.push(h+A+"="+encodeURIComponent(S))})}catch(v){throw a.push(h+"type="+encodeURIComponent("_badmap")),v}}function mn(r){this.l=r.Ub||null,this.j=r.eb||!1}D(mn,fr),mn.prototype.g=function(){return new gn(this.l,this.j)},mn.prototype.i=function(r){return function(){return r}}({});function gn(r,a){lt.call(this),this.D=r,this.o=a,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}D(gn,lt),n=gn.prototype,n.open=function(r,a){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=r,this.A=a,this.readyState=1,xe(this)},n.send=function(r){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const a={headers:this.u,method:this.B,credentials:this.m,cache:void 0};r&&(a.body=r),(this.D||c).fetch(new Request(this.A,a)).then(this.Sa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,ke(this)),this.readyState=0},n.Sa=function(r){if(this.g&&(this.l=r,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=r.headers,this.readyState=2,xe(this)),this.g&&(this.readyState=3,xe(this),this.g)))if(this.responseType==="arraybuffer")r.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof c.ReadableStream<"u"&&"body"in r){if(this.j=r.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Ji(this)}else r.text().then(this.Ra.bind(this),this.ga.bind(this))};function Ji(r){r.j.read().then(r.Pa.bind(r)).catch(r.ga.bind(r))}n.Pa=function(r){if(this.g){if(this.o&&r.value)this.response.push(r.value);else if(!this.o){var a=r.value?r.value:new Uint8Array(0);(a=this.v.decode(a,{stream:!r.done}))&&(this.response=this.responseText+=a)}r.done?ke(this):xe(this),this.readyState==3&&Ji(this)}},n.Ra=function(r){this.g&&(this.response=this.responseText=r,ke(this))},n.Qa=function(r){this.g&&(this.response=r,ke(this))},n.ga=function(){this.g&&ke(this)};function ke(r){r.readyState=4,r.l=null,r.j=null,r.v=null,xe(r)}n.setRequestHeader=function(r,a){this.u.append(r,a)},n.getResponseHeader=function(r){return this.h&&this.h.get(r.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const r=[],a=this.h.entries();for(var l=a.next();!l.done;)l=l.value,r.push(l[0]+": "+l[1]),l=a.next();return r.join(`\r
`)};function xe(r){r.onreadystatechange&&r.onreadystatechange.call(r)}Object.defineProperty(gn.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(r){this.m=r?"include":"same-origin"}});function Zi(r){let a="";return gt(r,function(l,h){a+=h,a+=":",a+=l,a+=`\r
`}),a}function Ir(r,a,l){t:{for(h in l){var h=!1;break t}h=!0}h||(l=Zi(l),typeof r=="string"?l!=null&&encodeURIComponent(String(l)):z(r,a,l))}function W(r){lt.call(this),this.headers=new Map,this.o=r||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}D(W,lt);var fl=/^https?$/i,dl=["POST","PUT"];n=W.prototype,n.Ha=function(r){this.J=r},n.ea=function(r,a,l,h){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+r);a=a?a.toUpperCase():"GET",this.D=r,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():mr.g(),this.v=this.o?Si(this.o):Si(mr),this.g.onreadystatechange=C(this.Ea,this);try{this.B=!0,this.g.open(a,String(r),!0),this.B=!1}catch(A){ts(this,A);return}if(r=l||"",l=new Map(this.headers),h)if(Object.getPrototypeOf(h)===Object.prototype)for(var v in h)l.set(v,h[v]);else if(typeof h.keys=="function"&&typeof h.get=="function")for(const A of h.keys())l.set(A,h.get(A));else throw Error("Unknown input type for opt_headers: "+String(h));h=Array.from(l.keys()).find(A=>A.toLowerCase()=="content-type"),v=c.FormData&&r instanceof c.FormData,!(0<=Array.prototype.indexOf.call(dl,a,void 0))||h||v||l.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[A,S]of l)this.g.setRequestHeader(A,S);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{rs(this),this.u=!0,this.g.send(r),this.u=!1}catch(A){ts(this,A)}};function ts(r,a){r.h=!1,r.g&&(r.j=!0,r.g.abort(),r.j=!1),r.l=a,r.m=5,es(r),_n(r)}function es(r){r.A||(r.A=!0,pt(r,"complete"),pt(r,"error"))}n.abort=function(r){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=r||7,pt(this,"complete"),pt(this,"abort"),_n(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),_n(this,!0)),W.aa.N.call(this)},n.Ea=function(){this.s||(this.B||this.u||this.j?ns(this):this.bb())},n.bb=function(){ns(this)};function ns(r){if(r.h&&typeof u<"u"&&(!r.v[1]||bt(r)!=4||r.Z()!=2)){if(r.u&&bt(r)==4)wi(r.Ea,0,r);else if(pt(r,"readystatechange"),bt(r)==4){r.h=!1;try{const S=r.Z();t:switch(S){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var a=!0;break t;default:a=!1}var l;if(!(l=a)){var h;if(h=S===0){var v=String(r.D).match(Gi)[1]||null;!v&&c.self&&c.self.location&&(v=c.self.location.protocol.slice(0,-1)),h=!fl.test(v?v.toLowerCase():"")}l=h}if(l)pt(r,"complete"),pt(r,"success");else{r.m=6;try{var A=2<bt(r)?r.g.statusText:""}catch{A=""}r.l=A+" ["+r.Z()+"]",es(r)}}finally{_n(r)}}}}function _n(r,a){if(r.g){rs(r);const l=r.g,h=r.v[0]?()=>{}:null;r.g=null,r.v=null,a||pt(r,"ready");try{l.onreadystatechange=h}catch{}}}function rs(r){r.I&&(c.clearTimeout(r.I),r.I=null)}n.isActive=function(){return!!this.g};function bt(r){return r.g?r.g.readyState:0}n.Z=function(){try{return 2<bt(this)?this.g.status:-1}catch{return-1}},n.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.Oa=function(r){if(this.g){var a=this.g.responseText;return r&&a.indexOf(r)==0&&(a=a.substring(r.length)),Ha(a)}};function is(r){try{if(!r.g)return null;if("response"in r.g)return r.g.response;switch(r.H){case"":case"text":return r.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in r.g)return r.g.mozResponseArrayBuffer}return null}catch{return null}}function pl(r){const a={};r=(r.g&&2<=bt(r)&&r.g.getAllResponseHeaders()||"").split(`\r
`);for(let h=0;h<r.length;h++){if(H(r[h]))continue;var l=y(r[h]);const v=l[0];if(l=l[1],typeof l!="string")continue;l=l.trim();const A=a[v]||[];a[v]=A,A.push(l)}E(a,function(h){return h.join(", ")})}n.Ba=function(){return this.m},n.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Me(r,a,l){return l&&l.internalChannelParams&&l.internalChannelParams[r]||a}function ss(r){this.Aa=0,this.i=[],this.j=new be,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Me("failFast",!1,r),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Me("baseRetryDelayMs",5e3,r),this.cb=Me("retryDelaySeedMs",1e4,r),this.Wa=Me("forwardChannelMaxRetries",2,r),this.wa=Me("forwardChannelRequestTimeoutMs",2e4,r),this.pa=r&&r.xmlHttpFactory||void 0,this.Xa=r&&r.Tb||void 0,this.Ca=r&&r.useFetchStreams||!1,this.L=void 0,this.J=r&&r.supportsCrossDomainXhr||!1,this.K="",this.h=new Bi(r&&r.concurrentRequestLimit),this.Da=new cl,this.P=r&&r.fastHandshake||!1,this.O=r&&r.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=r&&r.Rb||!1,r&&r.xa&&this.j.xa(),r&&r.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&r&&r.detectBufferingProxy||!1,this.ja=void 0,r&&r.longPollingTimeout&&0<r.longPollingTimeout&&(this.ja=r.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}n=ss.prototype,n.la=8,n.G=1,n.connect=function(r,a,l,h){mt(0),this.W=r,this.H=a||{},l&&h!==void 0&&(this.H.OSID=l,this.H.OAID=h),this.F=this.X,this.I=ps(this,null,this.W),En(this)};function Ar(r){if(os(r),r.G==3){var a=r.U++,l=St(r.I);if(z(l,"SID",r.K),z(l,"RID",a),z(l,"TYPE","terminate"),Le(r,l),a=new kt(r,r.j,a),a.L=2,a.v=pn(St(l)),l=!1,c.navigator&&c.navigator.sendBeacon)try{l=c.navigator.sendBeacon(a.v.toString(),"")}catch{}!l&&c.Image&&(new Image().src=a.v,l=!0),l||(a.g=ms(a.j,null),a.g.ea(a.v)),a.F=Date.now(),hn(a)}ds(r)}function yn(r){r.g&&(Rr(r),r.g.cancel(),r.g=null)}function os(r){yn(r),r.u&&(c.clearTimeout(r.u),r.u=null),vn(r),r.h.cancel(),r.s&&(typeof r.s=="number"&&c.clearTimeout(r.s),r.s=null)}function En(r){if(!ji(r.h)&&!r.s){r.s=!0;var a=r.Ga;Ie||Ei(),Ae||(Ie(),Ae=!0),rr.add(a,r),r.B=0}}function ml(r,a){return $i(r.h)>=r.h.j-(r.s?1:0)?!1:r.s?(r.i=a.D.concat(r.i),!0):r.G==1||r.G==2||r.B>=(r.Va?0:r.Wa)?!1:(r.s=Se(C(r.Ga,r,a),fs(r,r.B)),r.B++,!0)}n.Ga=function(r){if(this.s)if(this.s=null,this.G==1){if(!r){this.U=Math.floor(1e5*Math.random()),r=this.U++;const v=new kt(this,this.j,r);let A=this.o;if(this.S&&(A?(A=d(A),_(A,this.S)):A=this.S),this.m!==null||this.O||(v.H=A,A=null),this.P)t:{for(var a=0,l=0;l<this.i.length;l++){e:{var h=this.i[l];if("__data__"in h.map&&(h=h.map.__data__,typeof h=="string")){h=h.length;break e}h=void 0}if(h===void 0)break;if(a+=h,4096<a){a=l;break t}if(a===4096||l===this.i.length-1){a=l+1;break t}}a=1e3}else a=1e3;a=ls(this,v,a),l=St(this.I),z(l,"RID",r),z(l,"CVER",22),this.D&&z(l,"X-HTTP-Session-Id",this.D),Le(this,l),A&&(this.O?a="headers="+encodeURIComponent(String(Zi(A)))+"&"+a:this.m&&Ir(l,this.m,A)),Tr(this.h,v),this.Ua&&z(l,"TYPE","init"),this.P?(z(l,"$req",a),z(l,"SID","null"),v.T=!0,_r(v,l,null)):_r(v,l,a),this.G=2}}else this.G==3&&(r?as(this,r):this.i.length==0||ji(this.h)||as(this))};function as(r,a){var l;a?l=a.l:l=r.U++;const h=St(r.I);z(h,"SID",r.K),z(h,"RID",l),z(h,"AID",r.T),Le(r,h),r.m&&r.o&&Ir(h,r.m,r.o),l=new kt(r,r.j,l,r.B+1),r.m===null&&(l.H=r.o),a&&(r.i=a.D.concat(r.i)),a=ls(r,l,1e3),l.I=Math.round(.5*r.wa)+Math.round(.5*r.wa*Math.random()),Tr(r.h,l),_r(l,h,a)}function Le(r,a){r.H&&gt(r.H,function(l,h){z(a,h,l)}),r.l&&Hi({},function(l,h){z(a,h,l)})}function ls(r,a,l){l=Math.min(r.i.length,l);var h=r.l?C(r.l.Na,r.l,r):null;t:{var v=r.i;let A=-1;for(;;){const S=["count="+l];A==-1?0<l?(A=v[0].g,S.push("ofs="+A)):A=0:S.push("ofs="+A);let j=!0;for(let et=0;et<l;et++){let U=v[et].g;const ut=v[et].map;if(U-=A,0>U)A=Math.max(0,v[et].g-100),j=!1;else try{hl(ut,S,"req"+U+"_")}catch{h&&h(ut)}}if(j){h=S.join("&");break t}}}return r=r.i.splice(0,l),a.D=r,h}function us(r){if(!r.g&&!r.u){r.Y=1;var a=r.Fa;Ie||Ei(),Ae||(Ie(),Ae=!0),rr.add(a,r),r.v=0}}function wr(r){return r.g||r.u||3<=r.v?!1:(r.Y++,r.u=Se(C(r.Fa,r),fs(r,r.v)),r.v++,!0)}n.Fa=function(){if(this.u=null,cs(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var r=2*this.R;this.j.info("BP detection timer enabled: "+r),this.A=Se(C(this.ab,this),r)}},n.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,mt(10),yn(this),cs(this))};function Rr(r){r.A!=null&&(c.clearTimeout(r.A),r.A=null)}function cs(r){r.g=new kt(r,r.j,"rpc",r.Y),r.m===null&&(r.g.H=r.o),r.g.O=0;var a=St(r.qa);z(a,"RID","rpc"),z(a,"SID",r.K),z(a,"AID",r.T),z(a,"CI",r.F?"0":"1"),!r.F&&r.ja&&z(a,"TO",r.ja),z(a,"TYPE","xmlhttp"),Le(r,a),r.m&&r.o&&Ir(a,r.m,r.o),r.L&&(r.g.I=r.L);var l=r.g;r=r.ia,l.L=1,l.v=pn(St(a)),l.m=null,l.P=!0,Li(l,r)}n.Za=function(){this.C!=null&&(this.C=null,yn(this),wr(this),mt(19))};function vn(r){r.C!=null&&(c.clearTimeout(r.C),r.C=null)}function hs(r,a){var l=null;if(r.g==a){vn(r),Rr(r),r.g=null;var h=2}else if(vr(r.h,a))l=a.D,zi(r.h,a),h=1;else return;if(r.G!=0){if(a.o)if(h==1){l=a.m?a.m.length:0,a=Date.now()-a.F;var v=r.B;h=ln(),pt(h,new Oi(h,l)),En(r)}else us(r);else if(v=a.s,v==3||v==0&&0<a.X||!(h==1&&ml(r,a)||h==2&&wr(r)))switch(l&&0<l.length&&(a=r.h,a.i=a.i.concat(l)),v){case 1:Wt(r,5);break;case 4:Wt(r,10);break;case 3:Wt(r,6);break;default:Wt(r,2)}}}function fs(r,a){let l=r.Ta+Math.floor(Math.random()*r.cb);return r.isActive()||(l*=2),l*a}function Wt(r,a){if(r.j.info("Error code "+a),a==2){var l=C(r.fb,r),h=r.Xa;const v=!h;h=new Kt(h||"//www.google.com/images/cleardot.gif"),c.location&&c.location.protocol=="http"||fn(h,"https"),pn(h),v?ll(h.toString(),l):ul(h.toString(),l)}else mt(2);r.G=0,r.l&&r.l.sa(a),ds(r),os(r)}n.fb=function(r){r?(this.j.info("Successfully pinged google.com"),mt(2)):(this.j.info("Failed to ping google.com"),mt(1))};function ds(r){if(r.G=0,r.ka=[],r.l){const a=qi(r.h);(a.length!=0||r.i.length!=0)&&(N(r.ka,a),N(r.ka,r.i),r.h.i.length=0,x(r.i),r.i.length=0),r.l.ra()}}function ps(r,a,l){var h=l instanceof Kt?St(l):new Kt(l);if(h.g!="")a&&(h.g=a+"."+h.g),dn(h,h.s);else{var v=c.location;h=v.protocol,a=a?a+"."+v.hostname:v.hostname,v=+v.port;var A=new Kt(null);h&&fn(A,h),a&&(A.g=a),v&&dn(A,v),l&&(A.l=l),h=A}return l=r.D,a=r.ya,l&&a&&z(h,l,a),z(h,"VER",r.la),Le(r,h),h}function ms(r,a,l){if(a&&!r.J)throw Error("Can't create secondary domain capable XhrIo object.");return a=r.Ca&&!r.pa?new W(new mn({eb:l})):new W(r.pa),a.Ha(r.J),a}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function gs(){}n=gs.prototype,n.ua=function(){},n.ta=function(){},n.sa=function(){},n.ra=function(){},n.isActive=function(){return!0},n.Na=function(){};function Tn(){}Tn.prototype.g=function(r,a){return new Et(r,a)};function Et(r,a){lt.call(this),this.g=new ss(a),this.l=r,this.h=a&&a.messageUrlParams||null,r=a&&a.messageHeaders||null,a&&a.clientProtocolHeaderRequired&&(r?r["X-Client-Protocol"]="webchannel":r={"X-Client-Protocol":"webchannel"}),this.g.o=r,r=a&&a.initMessageHeaders||null,a&&a.messageContentType&&(r?r["X-WebChannel-Content-Type"]=a.messageContentType:r={"X-WebChannel-Content-Type":a.messageContentType}),a&&a.va&&(r?r["X-WebChannel-Client-Profile"]=a.va:r={"X-WebChannel-Client-Profile":a.va}),this.g.S=r,(r=a&&a.Sb)&&!H(r)&&(this.g.m=r),this.v=a&&a.supportsCrossDomainXhr||!1,this.u=a&&a.sendRawJson||!1,(a=a&&a.httpSessionIdParam)&&!H(a)&&(this.g.D=a,r=this.h,r!==null&&a in r&&(r=this.h,a in r&&delete r[a])),this.j=new ae(this)}D(Et,lt),Et.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Et.prototype.close=function(){Ar(this.g)},Et.prototype.o=function(r){var a=this.g;if(typeof r=="string"){var l={};l.__data__=r,r=l}else this.u&&(l={},l.__data__=hr(r),r=l);a.i.push(new Ja(a.Ya++,r)),a.G==3&&En(a)},Et.prototype.N=function(){this.g.l=null,delete this.j,Ar(this.g),delete this.g,Et.aa.N.call(this)};function _s(r){dr.call(this),r.__headers__&&(this.headers=r.__headers__,this.statusCode=r.__status__,delete r.__headers__,delete r.__status__);var a=r.__sm__;if(a){t:{for(const l in a){r=l;break t}r=void 0}(this.i=r)&&(r=this.i,a=a!==null&&r in a?a[r]:void 0),this.data=a}else this.data=r}D(_s,dr);function ys(){pr.call(this),this.status=1}D(ys,pr);function ae(r){this.g=r}D(ae,gs),ae.prototype.ua=function(){pt(this.g,"a")},ae.prototype.ta=function(r){pt(this.g,new _s(r))},ae.prototype.sa=function(r){pt(this.g,new ys)},ae.prototype.ra=function(){pt(this.g,"b")},Tn.prototype.createWebChannel=Tn.prototype.g,Et.prototype.send=Et.prototype.o,Et.prototype.open=Et.prototype.m,Et.prototype.close=Et.prototype.close,Do=function(){return new Tn},Vo=function(){return ln()},bo=Ht,Ur={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},un.NO_ERROR=0,un.TIMEOUT=8,un.HTTP_ERROR=6,Sn=un,ki.COMPLETE="complete",So=ki,bi.EventType=Pe,Pe.OPEN="a",Pe.CLOSE="b",Pe.ERROR="c",Pe.MESSAGE="d",lt.prototype.listen=lt.prototype.K,Ue=bi,W.prototype.listenOnce=W.prototype.L,W.prototype.getLastError=W.prototype.Ka,W.prototype.getLastErrorCode=W.prototype.Ba,W.prototype.getStatus=W.prototype.Z,W.prototype.getResponseJson=W.prototype.Oa,W.prototype.getResponseText=W.prototype.oa,W.prototype.send=W.prototype.ea,W.prototype.setWithCredentials=W.prototype.Ha,Co=W}).apply(typeof An<"u"?An:typeof self<"u"?self:typeof window<"u"?window:{});const Vs="@firebase/firestore",Ds="4.7.9";/**
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
 */class ft{constructor(t){this.uid=t}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}ft.UNAUTHENTICATED=new ft(null),ft.GOOGLE_CREDENTIALS=new ft("google-credentials-uid"),ft.FIRST_PARTY=new ft("first-party-uid"),ft.MOCK_USER=new ft("mock-user");/**
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
 */let Ee="11.4.0";/**
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
 */const Zt=new To("@firebase/firestore");function ue(){return Zt.logLevel}function b(n,...t){if(Zt.logLevel<=F.DEBUG){const e=t.map(Zr);Zt.debug(`Firestore (${Ee}): ${n}`,...e)}}function te(n,...t){if(Zt.logLevel<=F.ERROR){const e=t.map(Zr);Zt.error(`Firestore (${Ee}): ${n}`,...e)}}function Wn(n,...t){if(Zt.logLevel<=F.WARN){const e=t.map(Zr);Zt.warn(`Firestore (${Ee}): ${n}`,...e)}}function Zr(n){if(typeof n=="string")return n;try{/**
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
*/return function(e){return JSON.stringify(e)}(n)}catch{return n}}/**
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
 */function M(n="Unexpected state"){const t=`FIRESTORE (${Ee}) INTERNAL ASSERTION FAILED: `+n;throw te(t),new Error(t)}function X(n,t){n||M()}function $(n,t){return n}/**
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
 */const P={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class O extends ye{constructor(t,e){super(t,e),this.code=t,this.message=e,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class Yt{constructor(){this.promise=new Promise((t,e)=>{this.resolve=t,this.reject=e})}}/**
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
 */class No{constructor(t,e){this.user=e,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class Yu{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,e){t.enqueueRetryable(()=>e(ft.UNAUTHENTICATED))}shutdown(){}}class Ju{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,e){this.changeListener=e,t.enqueueRetryable(()=>e(this.token.user))}shutdown(){this.changeListener=null}}class Zu{constructor(t){this.t=t,this.currentUser=ft.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,e){X(this.o===void 0);let i=this.i;const s=f=>this.i!==i?(i=this.i,e(f)):Promise.resolve();let o=new Yt;this.o=()=>{this.i++,this.currentUser=this.u(),o.resolve(),o=new Yt,t.enqueueRetryable(()=>s(this.currentUser))};const u=()=>{const f=o;t.enqueueRetryable(async()=>{await f.promise,await s(this.currentUser)})},c=f=>{b("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=f,this.o&&(this.auth.addAuthTokenListener(this.o),u())};this.t.onInit(f=>c(f)),setTimeout(()=>{if(!this.auth){const f=this.t.getImmediate({optional:!0});f?c(f):(b("FirebaseAuthCredentialsProvider","Auth not yet detected"),o.resolve(),o=new Yt)}},0),u()}getToken(){const t=this.i,e=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(e).then(i=>this.i!==t?(b("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):i?(X(typeof i.accessToken=="string"),new No(i.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const t=this.auth&&this.auth.getUid();return X(t===null||typeof t=="string"),new ft(t)}}class tc{constructor(t,e,i){this.l=t,this.h=e,this.P=i,this.type="FirstParty",this.user=ft.FIRST_PARTY,this.T=new Map}I(){return this.P?this.P():null}get headers(){this.T.set("X-Goog-AuthUser",this.l);const t=this.I();return t&&this.T.set("Authorization",t),this.h&&this.T.set("X-Goog-Iam-Authorization-Token",this.h),this.T}}class ec{constructor(t,e,i){this.l=t,this.h=e,this.P=i}getToken(){return Promise.resolve(new tc(this.l,this.h,this.P))}start(t,e){t.enqueueRetryable(()=>e(ft.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Ns{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class nc{constructor(t,e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null,this.V=null,ku(t)&&t.settings.appCheckToken&&(this.V=t.settings.appCheckToken)}start(t,e){X(this.o===void 0);const i=o=>{o.error!=null&&b("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${o.error.message}`);const u=o.token!==this.R;return this.R=o.token,b("FirebaseAppCheckTokenProvider",`Received ${u?"new":"existing"} token.`),u?e(o.token):Promise.resolve()};this.o=o=>{t.enqueueRetryable(()=>i(o))};const s=o=>{b("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=o,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(o=>s(o)),setTimeout(()=>{if(!this.appCheck){const o=this.A.getImmediate({optional:!0});o?s(o):b("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.V)return Promise.resolve(new Ns(this.V));const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then(e=>e?(X(typeof e.token=="string"),this.R=e.token,new Ns(e.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function rc(n){const t=typeof self<"u"&&(self.crypto||self.msCrypto),e=new Uint8Array(n);if(t&&typeof t.getRandomValues=="function")t.getRandomValues(e);else for(let i=0;i<n;i++)e[i]=Math.floor(256*Math.random());return e}/**
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
 */class Oo{static newId(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",e=62*Math.floor(4.129032258064516);let i="";for(;i.length<20;){const s=rc(40);for(let o=0;o<s.length;++o)i.length<20&&s[o]<e&&(i+=t.charAt(s[o]%62))}return i}}function B(n,t){return n<t?-1:n>t?1:0}function de(n,t,e){return n.length===t.length&&n.every((i,s)=>e(i,t[s]))}/**
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
 */const Os=-62135596800,ks=1e6;class tt{static now(){return tt.fromMillis(Date.now())}static fromDate(t){return tt.fromMillis(t.getTime())}static fromMillis(t){const e=Math.floor(t/1e3),i=Math.floor((t-1e3*e)*ks);return new tt(e,i)}constructor(t,e){if(this.seconds=t,this.nanoseconds=e,e<0)throw new O(P.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(e>=1e9)throw new O(P.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(t<Os)throw new O(P.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new O(P.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/ks}_compareTo(t){return this.seconds===t.seconds?B(this.nanoseconds,t.nanoseconds):B(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const t=this.seconds-Os;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class q{static fromTimestamp(t){return new q(t)}static min(){return new q(new tt(0,0))}static max(){return new q(new tt(253402300799,999999999))}constructor(t){this.timestamp=t}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */const xs="__name__";class wt{constructor(t,e,i){e===void 0?e=0:e>t.length&&M(),i===void 0?i=t.length-e:i>t.length-e&&M(),this.segments=t,this.offset=e,this.len=i}get length(){return this.len}isEqual(t){return wt.comparator(this,t)===0}child(t){const e=this.segments.slice(this.offset,this.limit());return t instanceof wt?t.forEach(i=>{e.push(i)}):e.push(t),this.construct(e)}limit(){return this.offset+this.length}popFirst(t){return t=t===void 0?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return this.length===0}isPrefixOf(t){if(t.length<this.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}forEach(t){for(let e=this.offset,i=this.limit();e<i;e++)t(this.segments[e])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,e){const i=Math.min(t.length,e.length);for(let s=0;s<i;s++){const o=wt.compareSegments(t.get(s),e.get(s));if(o!==0)return o}return Math.sign(t.length-e.length)}static compareSegments(t,e){const i=wt.isNumericId(t),s=wt.isNumericId(e);return i&&!s?-1:!i&&s?1:i&&s?wt.extractNumericId(t).compare(wt.extractNumericId(e)):t<e?-1:t>e?1:0}static isNumericId(t){return t.startsWith("__id")&&t.endsWith("__")}static extractNumericId(t){return Jr.fromString(t.substring(4,t.length-2))}}class Q extends wt{construct(t,e,i){return new Q(t,e,i)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...t){const e=[];for(const i of t){if(i.indexOf("//")>=0)throw new O(P.INVALID_ARGUMENT,`Invalid segment (${i}). Paths must not contain // in them.`);e.push(...i.split("/").filter(s=>s.length>0))}return new Q(e)}static emptyPath(){return new Q([])}}const ic=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class it extends wt{construct(t,e,i){return new it(t,e,i)}static isValidIdentifier(t){return ic.test(t)}canonicalString(){return this.toArray().map(t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),it.isValidIdentifier(t)||(t="`"+t+"`"),t)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===xs}static keyField(){return new it([xs])}static fromServerFormat(t){const e=[];let i="",s=0;const o=()=>{if(i.length===0)throw new O(P.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);e.push(i),i=""};let u=!1;for(;s<t.length;){const c=t[s];if(c==="\\"){if(s+1===t.length)throw new O(P.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const f=t[s+1];if(f!=="\\"&&f!=="."&&f!=="`")throw new O(P.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);i+=f,s+=2}else c==="`"?(u=!u,s++):c!=="."||u?(i+=c,s++):(o(),s++)}if(o(),u)throw new O(P.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new it(e)}static emptyPath(){return new it([])}}/**
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
 */class k{constructor(t){this.path=t}static fromPath(t){return new k(Q.fromString(t))}static fromName(t){return new k(Q.fromString(t).popFirst(5))}static empty(){return new k(Q.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return t!==null&&Q.comparator(this.path,t.path)===0}toString(){return this.path.toString()}static comparator(t,e){return Q.comparator(t.path,e.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new k(new Q(t.slice()))}}/**
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
 */const Ke=-1;function sc(n,t){const e=n.toTimestamp().seconds,i=n.toTimestamp().nanoseconds+1,s=q.fromTimestamp(i===1e9?new tt(e+1,0):new tt(e,i));return new Bt(s,k.empty(),t)}function oc(n){return new Bt(n.readTime,n.key,Ke)}class Bt{constructor(t,e,i){this.readTime=t,this.documentKey=e,this.largestBatchId=i}static min(){return new Bt(q.min(),k.empty(),Ke)}static max(){return new Bt(q.max(),k.empty(),Ke)}}function ac(n,t){let e=n.readTime.compareTo(t.readTime);return e!==0?e:(e=k.comparator(n.documentKey,t.documentKey),e!==0?e:B(n.largestBatchId,t.largestBatchId))}/**
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
 */const lc="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class uc{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(t=>t())}}/**
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
 */async function ti(n){if(n.code!==P.FAILED_PRECONDITION||n.message!==lc)throw n;b("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class R{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t(e=>{this.isDone=!0,this.result=e,this.nextCallback&&this.nextCallback(e)},e=>{this.isDone=!0,this.error=e,this.catchCallback&&this.catchCallback(e)})}catch(t){return this.next(void 0,t)}next(t,e){return this.callbackAttached&&M(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(e,this.error):this.wrapSuccess(t,this.result):new R((i,s)=>{this.nextCallback=o=>{this.wrapSuccess(t,o).next(i,s)},this.catchCallback=o=>{this.wrapFailure(e,o).next(i,s)}})}toPromise(){return new Promise((t,e)=>{this.next(t,e)})}wrapUserFunction(t){try{const e=t();return e instanceof R?e:R.resolve(e)}catch(e){return R.reject(e)}}wrapSuccess(t,e){return t?this.wrapUserFunction(()=>t(e)):R.resolve(e)}wrapFailure(t,e){return t?this.wrapUserFunction(()=>t(e)):R.reject(e)}static resolve(t){return new R((e,i)=>{e(t)})}static reject(t){return new R((e,i)=>{i(t)})}static waitFor(t){return new R((e,i)=>{let s=0,o=0,u=!1;t.forEach(c=>{++s,c.next(()=>{++o,u&&o===s&&e()},f=>i(f))}),u=!0,o===s&&e()})}static or(t){let e=R.resolve(!1);for(const i of t)e=e.next(s=>s?R.resolve(s):i());return e}static forEach(t,e){const i=[];return t.forEach((s,o)=>{i.push(e.call(this,s,o))}),this.waitFor(i)}static mapArray(t,e){return new R((i,s)=>{const o=t.length,u=new Array(o);let c=0;for(let f=0;f<o;f++){const m=f;e(t[m]).next(I=>{u[m]=I,++c,c===o&&i(u)},I=>s(I))}})}static doWhile(t,e){return new R((i,s)=>{const o=()=>{t()===!0?e().next(()=>{o()},s):i()};o()})}}function cc(n){const t=n.match(/Android ([\d.]+)/i),e=t?t[1].split(".").slice(0,2).join("."):"-1";return Number(e)}function Je(n){return n.name==="IndexedDbTransactionError"}/**
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
 */class ei{constructor(t,e){this.previousValue=t,e&&(e.sequenceNumberHandler=i=>this.oe(i),this._e=i=>e.writeSequenceNumber(i))}oe(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this._e&&this._e(t),t}}ei.ae=-1;/**
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
 */const ni=-1;function ri(n){return n==null}function Mn(n){return n===0&&1/n==-1/0}function hc(n){return typeof n=="number"&&Number.isInteger(n)&&!Mn(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
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
 */const ko="";function fc(n){let t="";for(let e=0;e<n.length;e++)t.length>0&&(t=Ms(t)),t=dc(n.get(e),t);return Ms(t)}function dc(n,t){let e=t;const i=n.length;for(let s=0;s<i;s++){const o=n.charAt(s);switch(o){case"\0":e+="";break;case ko:e+="";break;default:e+=o}}return e}function Ms(n){return n+ko+""}/**
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
 */function Ls(n){let t=0;for(const e in n)Object.prototype.hasOwnProperty.call(n,e)&&t++;return t}function ve(n,t){for(const e in n)Object.prototype.hasOwnProperty.call(n,e)&&t(e,n[e])}function xo(n){for(const t in n)if(Object.prototype.hasOwnProperty.call(n,t))return!1;return!0}/**
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
 */class yt{constructor(t,e){this.comparator=t,this.root=e||nt.EMPTY}insert(t,e){return new yt(this.comparator,this.root.insert(t,e,this.comparator).copy(null,null,nt.BLACK,null,null))}remove(t){return new yt(this.comparator,this.root.remove(t,this.comparator).copy(null,null,nt.BLACK,null,null))}get(t){let e=this.root;for(;!e.isEmpty();){const i=this.comparator(t,e.key);if(i===0)return e.value;i<0?e=e.left:i>0&&(e=e.right)}return null}indexOf(t){let e=0,i=this.root;for(;!i.isEmpty();){const s=this.comparator(t,i.key);if(s===0)return e+i.left.size;s<0?i=i.left:(e+=i.left.size+1,i=i.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal((e,i)=>(t(e,i),!1))}toString(){const t=[];return this.inorderTraversal((e,i)=>(t.push(`${e}:${i}`),!1)),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new wn(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new wn(this.root,t,this.comparator,!1)}getReverseIterator(){return new wn(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new wn(this.root,t,this.comparator,!0)}}class wn{constructor(t,e,i,s){this.isReverse=s,this.nodeStack=[];let o=1;for(;!t.isEmpty();)if(o=e?i(t.key,e):1,e&&s&&(o*=-1),o<0)t=this.isReverse?t.left:t.right;else{if(o===0){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const e={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return e}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class nt{constructor(t,e,i,s,o){this.key=t,this.value=e,this.color=i??nt.RED,this.left=s??nt.EMPTY,this.right=o??nt.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,e,i,s,o){return new nt(t??this.key,e??this.value,i??this.color,s??this.left,o??this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,e,i){let s=this;const o=i(t,s.key);return s=o<0?s.copy(null,null,null,s.left.insert(t,e,i),null):o===0?s.copy(null,e,null,null,null):s.copy(null,null,null,null,s.right.insert(t,e,i)),s.fixUp()}removeMin(){if(this.left.isEmpty())return nt.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,e){let i,s=this;if(e(t,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(t,e),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),e(t,s.key)===0){if(s.right.isEmpty())return nt.EMPTY;i=s.right.min(),s=s.copy(i.key,i.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(t,e))}return s.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,nt.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,nt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),e=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,e)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw M();const t=this.left.check();if(t!==this.right.check())throw M();return t+(this.isRed()?0:1)}}nt.EMPTY=null,nt.RED=!0,nt.BLACK=!1;nt.EMPTY=new class{constructor(){this.size=0}get key(){throw M()}get value(){throw M()}get color(){throw M()}get left(){throw M()}get right(){throw M()}copy(t,e,i,s,o){return this}insert(t,e,i){return new nt(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class st{constructor(t){this.comparator=t,this.data=new yt(this.comparator)}has(t){return this.data.get(t)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal((e,i)=>(t(e),!1))}forEachInRange(t,e){const i=this.data.getIteratorFrom(t[0]);for(;i.hasNext();){const s=i.getNext();if(this.comparator(s.key,t[1])>=0)return;e(s.key)}}forEachWhile(t,e){let i;for(i=e!==void 0?this.data.getIteratorFrom(e):this.data.getIterator();i.hasNext();)if(!t(i.getNext().key))return}firstAfterOrEqual(t){const e=this.data.getIteratorFrom(t);return e.hasNext()?e.getNext().key:null}getIterator(){return new Fs(this.data.getIterator())}getIteratorFrom(t){return new Fs(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let e=this;return e.size<t.size&&(e=t,t=this),t.forEach(i=>{e=e.add(i)}),e}isEqual(t){if(!(t instanceof st)||this.size!==t.size)return!1;const e=this.data.getIterator(),i=t.data.getIterator();for(;e.hasNext();){const s=e.getNext().key,o=i.getNext().key;if(this.comparator(s,o)!==0)return!1}return!0}toArray(){const t=[];return this.forEach(e=>{t.push(e)}),t}toString(){const t=[];return this.forEach(e=>t.push(e)),"SortedSet("+t.toString()+")"}copy(t){const e=new st(this.comparator);return e.data=t,e}}class Fs{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class At{constructor(t){this.fields=t,t.sort(it.comparator)}static empty(){return new At([])}unionWith(t){let e=new st(it.comparator);for(const i of this.fields)e=e.add(i);for(const i of t)e=e.add(i);return new At(e.toArray())}covers(t){for(const e of this.fields)if(e.isPrefixOf(t))return!0;return!1}isEqual(t){return de(this.fields,t.fields,(e,i)=>e.isEqual(i))}}/**
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
 */class pc extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class Rt{constructor(t){this.binaryString=t}static fromBase64String(t){const e=function(s){try{return atob(s)}catch(o){throw typeof DOMException<"u"&&o instanceof DOMException?new pc("Invalid base64 string: "+o):o}}(t);return new Rt(e)}static fromUint8Array(t){const e=function(s){let o="";for(let u=0;u<s.length;++u)o+=String.fromCharCode(s[u]);return o}(t);return new Rt(e)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(e){return btoa(e)}(this.binaryString)}toUint8Array(){return function(e){const i=new Uint8Array(e.length);for(let s=0;s<e.length;s++)i[s]=e.charCodeAt(s);return i}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return B(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}Rt.EMPTY_BYTE_STRING=new Rt("");const mc=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function ee(n){if(X(!!n),typeof n=="string"){let t=0;const e=mc.exec(n);if(X(!!e),e[1]){let s=e[1];s=(s+"000000000").substr(0,9),t=Number(s)}const i=new Date(n);return{seconds:Math.floor(i.getTime()/1e3),nanos:t}}return{seconds:rt(n.seconds),nanos:rt(n.nanos)}}function rt(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function pe(n){return typeof n=="string"?Rt.fromBase64String(n):Rt.fromUint8Array(n)}/**
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
 */const Mo="server_timestamp",Lo="__type__",Fo="__previous_value__",Uo="__local_write_time__";function ii(n){var t,e;return((e=(((t=n==null?void 0:n.mapValue)===null||t===void 0?void 0:t.fields)||{})[Lo])===null||e===void 0?void 0:e.stringValue)===Mo}function si(n){const t=n.mapValue.fields[Fo];return ii(t)?si(t):t}function Ln(n){const t=ee(n.mapValue.fields[Uo].timestampValue);return new tt(t.seconds,t.nanos)}/**
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
 */class gc{constructor(t,e,i,s,o,u,c,f,m){this.databaseId=t,this.appId=e,this.persistenceKey=i,this.host=s,this.ssl=o,this.forceLongPolling=u,this.autoDetectLongPolling=c,this.longPollingOptions=f,this.useFetchStreams=m}}const Fn="(default)";class Un{constructor(t,e){this.projectId=t,this.database=e||Fn}static empty(){return new Un("","")}get isDefaultDatabase(){return this.database===Fn}isEqual(t){return t instanceof Un&&t.projectId===this.projectId&&t.database===this.database}}/**
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
 */const Bo="__type__",_c="__max__",Rn={mapValue:{}},jo="__vector__",Br="value";function ne(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?ii(n)?4:Ec(n)?9007199254740991:yc(n)?10:11:M()}function Pt(n,t){if(n===t)return!0;const e=ne(n);if(e!==ne(t))return!1;switch(e){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===t.booleanValue;case 4:return Ln(n).isEqual(Ln(t));case 3:return function(s,o){if(typeof s.timestampValue=="string"&&typeof o.timestampValue=="string"&&s.timestampValue.length===o.timestampValue.length)return s.timestampValue===o.timestampValue;const u=ee(s.timestampValue),c=ee(o.timestampValue);return u.seconds===c.seconds&&u.nanos===c.nanos}(n,t);case 5:return n.stringValue===t.stringValue;case 6:return function(s,o){return pe(s.bytesValue).isEqual(pe(o.bytesValue))}(n,t);case 7:return n.referenceValue===t.referenceValue;case 8:return function(s,o){return rt(s.geoPointValue.latitude)===rt(o.geoPointValue.latitude)&&rt(s.geoPointValue.longitude)===rt(o.geoPointValue.longitude)}(n,t);case 2:return function(s,o){if("integerValue"in s&&"integerValue"in o)return rt(s.integerValue)===rt(o.integerValue);if("doubleValue"in s&&"doubleValue"in o){const u=rt(s.doubleValue),c=rt(o.doubleValue);return u===c?Mn(u)===Mn(c):isNaN(u)&&isNaN(c)}return!1}(n,t);case 9:return de(n.arrayValue.values||[],t.arrayValue.values||[],Pt);case 10:case 11:return function(s,o){const u=s.mapValue.fields||{},c=o.mapValue.fields||{};if(Ls(u)!==Ls(c))return!1;for(const f in u)if(u.hasOwnProperty(f)&&(c[f]===void 0||!Pt(u[f],c[f])))return!1;return!0}(n,t);default:return M()}}function We(n,t){return(n.values||[]).find(e=>Pt(e,t))!==void 0}function me(n,t){if(n===t)return 0;const e=ne(n),i=ne(t);if(e!==i)return B(e,i);switch(e){case 0:case 9007199254740991:return 0;case 1:return B(n.booleanValue,t.booleanValue);case 2:return function(o,u){const c=rt(o.integerValue||o.doubleValue),f=rt(u.integerValue||u.doubleValue);return c<f?-1:c>f?1:c===f?0:isNaN(c)?isNaN(f)?0:-1:1}(n,t);case 3:return Us(n.timestampValue,t.timestampValue);case 4:return Us(Ln(n),Ln(t));case 5:return B(n.stringValue,t.stringValue);case 6:return function(o,u){const c=pe(o),f=pe(u);return c.compareTo(f)}(n.bytesValue,t.bytesValue);case 7:return function(o,u){const c=o.split("/"),f=u.split("/");for(let m=0;m<c.length&&m<f.length;m++){const I=B(c[m],f[m]);if(I!==0)return I}return B(c.length,f.length)}(n.referenceValue,t.referenceValue);case 8:return function(o,u){const c=B(rt(o.latitude),rt(u.latitude));return c!==0?c:B(rt(o.longitude),rt(u.longitude))}(n.geoPointValue,t.geoPointValue);case 9:return Bs(n.arrayValue,t.arrayValue);case 10:return function(o,u){var c,f,m,I;const w=o.fields||{},C=u.fields||{},V=(c=w[Br])===null||c===void 0?void 0:c.arrayValue,D=(f=C[Br])===null||f===void 0?void 0:f.arrayValue,x=B(((m=V==null?void 0:V.values)===null||m===void 0?void 0:m.length)||0,((I=D==null?void 0:D.values)===null||I===void 0?void 0:I.length)||0);return x!==0?x:Bs(V,D)}(n.mapValue,t.mapValue);case 11:return function(o,u){if(o===Rn.mapValue&&u===Rn.mapValue)return 0;if(o===Rn.mapValue)return 1;if(u===Rn.mapValue)return-1;const c=o.fields||{},f=Object.keys(c),m=u.fields||{},I=Object.keys(m);f.sort(),I.sort();for(let w=0;w<f.length&&w<I.length;++w){const C=B(f[w],I[w]);if(C!==0)return C;const V=me(c[f[w]],m[I[w]]);if(V!==0)return V}return B(f.length,I.length)}(n.mapValue,t.mapValue);default:throw M()}}function Us(n,t){if(typeof n=="string"&&typeof t=="string"&&n.length===t.length)return B(n,t);const e=ee(n),i=ee(t),s=B(e.seconds,i.seconds);return s!==0?s:B(e.nanos,i.nanos)}function Bs(n,t){const e=n.values||[],i=t.values||[];for(let s=0;s<e.length&&s<i.length;++s){const o=me(e[s],i[s]);if(o)return o}return B(e.length,i.length)}function ge(n){return jr(n)}function jr(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?function(e){const i=ee(e);return`time(${i.seconds},${i.nanos})`}(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?function(e){return pe(e).toBase64()}(n.bytesValue):"referenceValue"in n?function(e){return k.fromName(e).toString()}(n.referenceValue):"geoPointValue"in n?function(e){return`geo(${e.latitude},${e.longitude})`}(n.geoPointValue):"arrayValue"in n?function(e){let i="[",s=!0;for(const o of e.values||[])s?s=!1:i+=",",i+=jr(o);return i+"]"}(n.arrayValue):"mapValue"in n?function(e){const i=Object.keys(e.fields||{}).sort();let s="{",o=!0;for(const u of i)o?o=!1:s+=",",s+=`${u}:${jr(e.fields[u])}`;return s+"}"}(n.mapValue):M()}function bn(n){switch(ne(n)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const t=si(n);return t?16+bn(t):16;case 5:return 2*n.stringValue.length;case 6:return pe(n.bytesValue).approximateByteSize();case 7:return n.referenceValue.length;case 9:return function(i){return(i.values||[]).reduce((s,o)=>s+bn(o),0)}(n.arrayValue);case 10:case 11:return function(i){let s=0;return ve(i.fields,(o,u)=>{s+=o.length+bn(u)}),s}(n.mapValue);default:throw M()}}function $r(n){return!!n&&"integerValue"in n}function oi(n){return!!n&&"arrayValue"in n}function Vn(n){return!!n&&"mapValue"in n}function yc(n){var t,e;return((e=(((t=n==null?void 0:n.mapValue)===null||t===void 0?void 0:t.fields)||{})[Bo])===null||e===void 0?void 0:e.stringValue)===jo}function Be(n){if(n.geoPointValue)return{geoPointValue:Object.assign({},n.geoPointValue)};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:Object.assign({},n.timestampValue)};if(n.mapValue){const t={mapValue:{fields:{}}};return ve(n.mapValue.fields,(e,i)=>t.mapValue.fields[e]=Be(i)),t}if(n.arrayValue){const t={arrayValue:{values:[]}};for(let e=0;e<(n.arrayValue.values||[]).length;++e)t.arrayValue.values[e]=Be(n.arrayValue.values[e]);return t}return Object.assign({},n)}function Ec(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue===_c}/**
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
 */class It{constructor(t){this.value=t}static empty(){return new It({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let e=this.value;for(let i=0;i<t.length-1;++i)if(e=(e.mapValue.fields||{})[t.get(i)],!Vn(e))return null;return e=(e.mapValue.fields||{})[t.lastSegment()],e||null}}set(t,e){this.getFieldsMap(t.popLast())[t.lastSegment()]=Be(e)}setAll(t){let e=it.emptyPath(),i={},s=[];t.forEach((u,c)=>{if(!e.isImmediateParentOf(c)){const f=this.getFieldsMap(e);this.applyChanges(f,i,s),i={},s=[],e=c.popLast()}u?i[c.lastSegment()]=Be(u):s.push(c.lastSegment())});const o=this.getFieldsMap(e);this.applyChanges(o,i,s)}delete(t){const e=this.field(t.popLast());Vn(e)&&e.mapValue.fields&&delete e.mapValue.fields[t.lastSegment()]}isEqual(t){return Pt(this.value,t.value)}getFieldsMap(t){let e=this.value;e.mapValue.fields||(e.mapValue={fields:{}});for(let i=0;i<t.length;++i){let s=e.mapValue.fields[t.get(i)];Vn(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},e.mapValue.fields[t.get(i)]=s),e=s}return e.mapValue.fields}applyChanges(t,e,i){ve(e,(s,o)=>t[s]=o);for(const s of i)delete t[s]}clone(){return new It(Be(this.value))}}function $o(n){const t=[];return ve(n.fields,(e,i)=>{const s=new it([e]);if(Vn(i)){const o=$o(i.mapValue).fields;if(o.length===0)t.push(s);else for(const u of o)t.push(s.child(u))}else t.push(s)}),new At(t)}/**
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
 */class Tt{constructor(t,e,i,s,o,u,c){this.key=t,this.documentType=e,this.version=i,this.readTime=s,this.createTime=o,this.data=u,this.documentState=c}static newInvalidDocument(t){return new Tt(t,0,q.min(),q.min(),q.min(),It.empty(),0)}static newFoundDocument(t,e,i,s){return new Tt(t,1,e,q.min(),i,s,0)}static newNoDocument(t,e){return new Tt(t,2,e,q.min(),q.min(),It.empty(),0)}static newUnknownDocument(t,e){return new Tt(t,3,e,q.min(),q.min(),It.empty(),2)}convertToFoundDocument(t,e){return!this.createTime.isEqual(q.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=t),this.version=t,this.documentType=1,this.data=e,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=It.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=It.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=q.min(),this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(t){return t instanceof Tt&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new Tt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class Bn{constructor(t,e){this.position=t,this.inclusive=e}}function js(n,t,e){let i=0;for(let s=0;s<n.position.length;s++){const o=t[s],u=n.position[s];if(o.field.isKeyField()?i=k.comparator(k.fromName(u.referenceValue),e.key):i=me(u,e.data.field(o.field)),o.dir==="desc"&&(i*=-1),i!==0)break}return i}function $s(n,t){if(n===null)return t===null;if(t===null||n.inclusive!==t.inclusive||n.position.length!==t.position.length)return!1;for(let e=0;e<n.position.length;e++)if(!Pt(n.position[e],t.position[e]))return!1;return!0}/**
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
 */class jn{constructor(t,e="asc"){this.field=t,this.dir=e}}function vc(n,t){return n.dir===t.dir&&n.field.isEqual(t.field)}/**
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
 */class zo{}class Z extends zo{constructor(t,e,i){super(),this.field=t,this.op=e,this.value=i}static create(t,e,i){return t.isKeyField()?e==="in"||e==="not-in"?this.createKeyFieldInFilter(t,e,i):new Ic(t,e,i):e==="array-contains"?new Rc(t,i):e==="in"?new Pc(t,i):e==="not-in"?new Cc(t,i):e==="array-contains-any"?new Sc(t,i):new Z(t,e,i)}static createKeyFieldInFilter(t,e,i){return e==="in"?new Ac(t,i):new wc(t,i)}matches(t){const e=t.data.field(this.field);return this.op==="!="?e!==null&&this.matchesComparison(me(e,this.value)):e!==null&&ne(this.value)===ne(e)&&this.matchesComparison(me(e,this.value))}matchesComparison(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return t===0;case"!=":return t!==0;case">":return t>0;case">=":return t>=0;default:return M()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class jt extends zo{constructor(t,e){super(),this.filters=t,this.op=e,this.ce=null}static create(t,e){return new jt(t,e)}matches(t){return qo(this)?this.filters.find(e=>!e.matches(t))===void 0:this.filters.find(e=>e.matches(t))!==void 0}getFlattenedFilters(){return this.ce!==null||(this.ce=this.filters.reduce((t,e)=>t.concat(e.getFlattenedFilters()),[])),this.ce}getFilters(){return Object.assign([],this.filters)}}function qo(n){return n.op==="and"}function Ho(n){return Tc(n)&&qo(n)}function Tc(n){for(const t of n.filters)if(t instanceof jt)return!1;return!0}function zr(n){if(n instanceof Z)return n.field.canonicalString()+n.op.toString()+ge(n.value);if(Ho(n))return n.filters.map(t=>zr(t)).join(",");{const t=n.filters.map(e=>zr(e)).join(",");return`${n.op}(${t})`}}function Go(n,t){return n instanceof Z?function(i,s){return s instanceof Z&&i.op===s.op&&i.field.isEqual(s.field)&&Pt(i.value,s.value)}(n,t):n instanceof jt?function(i,s){return s instanceof jt&&i.op===s.op&&i.filters.length===s.filters.length?i.filters.reduce((o,u,c)=>o&&Go(u,s.filters[c]),!0):!1}(n,t):void M()}function Ko(n){return n instanceof Z?function(e){return`${e.field.canonicalString()} ${e.op} ${ge(e.value)}`}(n):n instanceof jt?function(e){return e.op.toString()+" {"+e.getFilters().map(Ko).join(" ,")+"}"}(n):"Filter"}class Ic extends Z{constructor(t,e,i){super(t,e,i),this.key=k.fromName(i.referenceValue)}matches(t){const e=k.comparator(t.key,this.key);return this.matchesComparison(e)}}class Ac extends Z{constructor(t,e){super(t,"in",e),this.keys=Wo("in",e)}matches(t){return this.keys.some(e=>e.isEqual(t.key))}}class wc extends Z{constructor(t,e){super(t,"not-in",e),this.keys=Wo("not-in",e)}matches(t){return!this.keys.some(e=>e.isEqual(t.key))}}function Wo(n,t){var e;return(((e=t.arrayValue)===null||e===void 0?void 0:e.values)||[]).map(i=>k.fromName(i.referenceValue))}class Rc extends Z{constructor(t,e){super(t,"array-contains",e)}matches(t){const e=t.data.field(this.field);return oi(e)&&We(e.arrayValue,this.value)}}class Pc extends Z{constructor(t,e){super(t,"in",e)}matches(t){const e=t.data.field(this.field);return e!==null&&We(this.value.arrayValue,e)}}class Cc extends Z{constructor(t,e){super(t,"not-in",e)}matches(t){if(We(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const e=t.data.field(this.field);return e!==null&&!We(this.value.arrayValue,e)}}class Sc extends Z{constructor(t,e){super(t,"array-contains-any",e)}matches(t){const e=t.data.field(this.field);return!(!oi(e)||!e.arrayValue.values)&&e.arrayValue.values.some(i=>We(this.value.arrayValue,i))}}/**
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
 */class bc{constructor(t,e=null,i=[],s=[],o=null,u=null,c=null){this.path=t,this.collectionGroup=e,this.orderBy=i,this.filters=s,this.limit=o,this.startAt=u,this.endAt=c,this.le=null}}function zs(n,t=null,e=[],i=[],s=null,o=null,u=null){return new bc(n,t,e,i,s,o,u)}function ai(n){const t=$(n);if(t.le===null){let e=t.path.canonicalString();t.collectionGroup!==null&&(e+="|cg:"+t.collectionGroup),e+="|f:",e+=t.filters.map(i=>zr(i)).join(","),e+="|ob:",e+=t.orderBy.map(i=>function(o){return o.field.canonicalString()+o.dir}(i)).join(","),ri(t.limit)||(e+="|l:",e+=t.limit),t.startAt&&(e+="|lb:",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map(i=>ge(i)).join(",")),t.endAt&&(e+="|ub:",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map(i=>ge(i)).join(",")),t.le=e}return t.le}function li(n,t){if(n.limit!==t.limit||n.orderBy.length!==t.orderBy.length)return!1;for(let e=0;e<n.orderBy.length;e++)if(!vc(n.orderBy[e],t.orderBy[e]))return!1;if(n.filters.length!==t.filters.length)return!1;for(let e=0;e<n.filters.length;e++)if(!Go(n.filters[e],t.filters[e]))return!1;return n.collectionGroup===t.collectionGroup&&!!n.path.isEqual(t.path)&&!!$s(n.startAt,t.startAt)&&$s(n.endAt,t.endAt)}/**
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
 */class Qn{constructor(t,e=null,i=[],s=[],o=null,u="F",c=null,f=null){this.path=t,this.collectionGroup=e,this.explicitOrderBy=i,this.filters=s,this.limit=o,this.limitType=u,this.startAt=c,this.endAt=f,this.he=null,this.Pe=null,this.Te=null,this.startAt,this.endAt}}function Vc(n,t,e,i,s,o,u,c){return new Qn(n,t,e,i,s,o,u,c)}function Dc(n){return new Qn(n)}function qs(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function Nc(n){return n.collectionGroup!==null}function je(n){const t=$(n);if(t.he===null){t.he=[];const e=new Set;for(const o of t.explicitOrderBy)t.he.push(o),e.add(o.field.canonicalString());const i=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";(function(u){let c=new st(it.comparator);return u.filters.forEach(f=>{f.getFlattenedFilters().forEach(m=>{m.isInequality()&&(c=c.add(m.field))})}),c})(t).forEach(o=>{e.has(o.canonicalString())||o.isKeyField()||t.he.push(new jn(o,i))}),e.has(it.keyField().canonicalString())||t.he.push(new jn(it.keyField(),i))}return t.he}function Jt(n){const t=$(n);return t.Pe||(t.Pe=Oc(t,je(n))),t.Pe}function Oc(n,t){if(n.limitType==="F")return zs(n.path,n.collectionGroup,t,n.filters,n.limit,n.startAt,n.endAt);{t=t.map(s=>{const o=s.dir==="desc"?"asc":"desc";return new jn(s.field,o)});const e=n.endAt?new Bn(n.endAt.position,n.endAt.inclusive):null,i=n.startAt?new Bn(n.startAt.position,n.startAt.inclusive):null;return zs(n.path,n.collectionGroup,t,n.filters,n.limit,e,i)}}function qr(n,t,e){return new Qn(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),t,e,n.startAt,n.endAt)}function Qo(n,t){return li(Jt(n),Jt(t))&&n.limitType===t.limitType}function Xo(n){return`${ai(Jt(n))}|lt:${n.limitType}`}function Fe(n){return`Query(target=${function(e){let i=e.path.canonicalString();return e.collectionGroup!==null&&(i+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(i+=`, filters: [${e.filters.map(s=>Ko(s)).join(", ")}]`),ri(e.limit)||(i+=", limit: "+e.limit),e.orderBy.length>0&&(i+=`, orderBy: [${e.orderBy.map(s=>function(u){return`${u.field.canonicalString()} (${u.dir})`}(s)).join(", ")}]`),e.startAt&&(i+=", startAt: ",i+=e.startAt.inclusive?"b:":"a:",i+=e.startAt.position.map(s=>ge(s)).join(",")),e.endAt&&(i+=", endAt: ",i+=e.endAt.inclusive?"a:":"b:",i+=e.endAt.position.map(s=>ge(s)).join(",")),`Target(${i})`}(Jt(n))}; limitType=${n.limitType})`}function ui(n,t){return t.isFoundDocument()&&function(i,s){const o=s.key.path;return i.collectionGroup!==null?s.key.hasCollectionId(i.collectionGroup)&&i.path.isPrefixOf(o):k.isDocumentKey(i.path)?i.path.isEqual(o):i.path.isImmediateParentOf(o)}(n,t)&&function(i,s){for(const o of je(i))if(!o.field.isKeyField()&&s.data.field(o.field)===null)return!1;return!0}(n,t)&&function(i,s){for(const o of i.filters)if(!o.matches(s))return!1;return!0}(n,t)&&function(i,s){return!(i.startAt&&!function(u,c,f){const m=js(u,c,f);return u.inclusive?m<=0:m<0}(i.startAt,je(i),s)||i.endAt&&!function(u,c,f){const m=js(u,c,f);return u.inclusive?m>=0:m>0}(i.endAt,je(i),s))}(n,t)}function kc(n){return(t,e)=>{let i=!1;for(const s of je(n)){const o=xc(s,t,e);if(o!==0)return o;i=i||s.field.isKeyField()}return 0}}function xc(n,t,e){const i=n.field.isKeyField()?k.comparator(t.key,e.key):function(o,u,c){const f=u.data.field(o),m=c.data.field(o);return f!==null&&m!==null?me(f,m):M()}(n.field,t,e);switch(n.dir){case"asc":return i;case"desc":return-1*i;default:return M()}}/**
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
 */class re{constructor(t,e){this.mapKeyFn=t,this.equalsFn=e,this.inner={},this.innerSize=0}get(t){const e=this.mapKeyFn(t),i=this.inner[e];if(i!==void 0){for(const[s,o]of i)if(this.equalsFn(s,t))return o}}has(t){return this.get(t)!==void 0}set(t,e){const i=this.mapKeyFn(t),s=this.inner[i];if(s===void 0)return this.inner[i]=[[t,e]],void this.innerSize++;for(let o=0;o<s.length;o++)if(this.equalsFn(s[o][0],t))return void(s[o]=[t,e]);s.push([t,e]),this.innerSize++}delete(t){const e=this.mapKeyFn(t),i=this.inner[e];if(i===void 0)return!1;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],t))return i.length===1?delete this.inner[e]:i.splice(s,1),this.innerSize--,!0;return!1}forEach(t){ve(this.inner,(e,i)=>{for(const[s,o]of i)t(s,o)})}isEmpty(){return xo(this.inner)}size(){return this.innerSize}}/**
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
 */const Mc=new yt(k.comparator);function $n(){return Mc}const Yo=new yt(k.comparator);function Pn(...n){let t=Yo;for(const e of n)t=t.insert(e.key,e);return t}function Jo(n){let t=Yo;return n.forEach((e,i)=>t=t.insert(e,i.overlayedDocument)),t}function Xt(){return $e()}function Zo(){return $e()}function $e(){return new re(n=>n.toString(),(n,t)=>n.isEqual(t))}const Lc=new yt(k.comparator),Fc=new st(k.comparator);function dt(...n){let t=Fc;for(const e of n)t=t.add(e);return t}const Uc=new st(B);function Bc(){return Uc}/**
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
 */function ci(n,t){if(n.useProto3Json){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Mn(t)?"-0":t}}function ta(n){return{integerValue:""+n}}function jc(n,t){return hc(t)?ta(t):ci(n,t)}/**
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
 */class Xn{constructor(){this._=void 0}}function $c(n,t,e){return n instanceof zn?function(s,o){const u={fields:{[Lo]:{stringValue:Mo},[Uo]:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return o&&ii(o)&&(o=si(o)),o&&(u.fields[Fo]=o),{mapValue:u}}(e,t):n instanceof Qe?na(n,t):n instanceof Xe?ra(n,t):function(s,o){const u=ea(s,o),c=Hs(u)+Hs(s.Ie);return $r(u)&&$r(s.Ie)?ta(c):ci(s.serializer,c)}(n,t)}function zc(n,t,e){return n instanceof Qe?na(n,t):n instanceof Xe?ra(n,t):e}function ea(n,t){return n instanceof qn?function(i){return $r(i)||function(o){return!!o&&"doubleValue"in o}(i)}(t)?t:{integerValue:0}:null}class zn extends Xn{}class Qe extends Xn{constructor(t){super(),this.elements=t}}function na(n,t){const e=ia(t);for(const i of n.elements)e.some(s=>Pt(s,i))||e.push(i);return{arrayValue:{values:e}}}class Xe extends Xn{constructor(t){super(),this.elements=t}}function ra(n,t){let e=ia(t);for(const i of n.elements)e=e.filter(s=>!Pt(s,i));return{arrayValue:{values:e}}}class qn extends Xn{constructor(t,e){super(),this.serializer=t,this.Ie=e}}function Hs(n){return rt(n.integerValue||n.doubleValue)}function ia(n){return oi(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}function qc(n,t){return n.field.isEqual(t.field)&&function(i,s){return i instanceof Qe&&s instanceof Qe||i instanceof Xe&&s instanceof Xe?de(i.elements,s.elements,Pt):i instanceof qn&&s instanceof qn?Pt(i.Ie,s.Ie):i instanceof zn&&s instanceof zn}(n.transform,t.transform)}class Hc{constructor(t,e){this.version=t,this.transformResults=e}}class Vt{constructor(t,e){this.updateTime=t,this.exists=e}static none(){return new Vt}static exists(t){return new Vt(void 0,t)}static updateTime(t){return new Vt(t)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function Dn(n,t){return n.updateTime!==void 0?t.isFoundDocument()&&t.version.isEqual(n.updateTime):n.exists===void 0||n.exists===t.isFoundDocument()}class Yn{}function sa(n,t){if(!n.hasLocalMutations||t&&t.fields.length===0)return null;if(t===null)return n.isNoDocument()?new aa(n.key,Vt.none()):new Ze(n.key,n.data,Vt.none());{const e=n.data,i=It.empty();let s=new st(it.comparator);for(let o of t.fields)if(!s.has(o)){let u=e.field(o);u===null&&o.length>1&&(o=o.popLast(),u=e.field(o)),u===null?i.delete(o):i.set(o,u),s=s.add(o)}return new ie(n.key,i,new At(s.toArray()),Vt.none())}}function Gc(n,t,e){n instanceof Ze?function(s,o,u){const c=s.value.clone(),f=Ks(s.fieldTransforms,o,u.transformResults);c.setAll(f),o.convertToFoundDocument(u.version,c).setHasCommittedMutations()}(n,t,e):n instanceof ie?function(s,o,u){if(!Dn(s.precondition,o))return void o.convertToUnknownDocument(u.version);const c=Ks(s.fieldTransforms,o,u.transformResults),f=o.data;f.setAll(oa(s)),f.setAll(c),o.convertToFoundDocument(u.version,f).setHasCommittedMutations()}(n,t,e):function(s,o,u){o.convertToNoDocument(u.version).setHasCommittedMutations()}(0,t,e)}function ze(n,t,e,i){return n instanceof Ze?function(o,u,c,f){if(!Dn(o.precondition,u))return c;const m=o.value.clone(),I=Ws(o.fieldTransforms,f,u);return m.setAll(I),u.convertToFoundDocument(u.version,m).setHasLocalMutations(),null}(n,t,e,i):n instanceof ie?function(o,u,c,f){if(!Dn(o.precondition,u))return c;const m=Ws(o.fieldTransforms,f,u),I=u.data;return I.setAll(oa(o)),I.setAll(m),u.convertToFoundDocument(u.version,I).setHasLocalMutations(),c===null?null:c.unionWith(o.fieldMask.fields).unionWith(o.fieldTransforms.map(w=>w.field))}(n,t,e,i):function(o,u,c){return Dn(o.precondition,u)?(u.convertToNoDocument(u.version).setHasLocalMutations(),null):c}(n,t,e)}function Kc(n,t){let e=null;for(const i of n.fieldTransforms){const s=t.data.field(i.field),o=ea(i.transform,s||null);o!=null&&(e===null&&(e=It.empty()),e.set(i.field,o))}return e||null}function Gs(n,t){return n.type===t.type&&!!n.key.isEqual(t.key)&&!!n.precondition.isEqual(t.precondition)&&!!function(i,s){return i===void 0&&s===void 0||!(!i||!s)&&de(i,s,(o,u)=>qc(o,u))}(n.fieldTransforms,t.fieldTransforms)&&(n.type===0?n.value.isEqual(t.value):n.type!==1||n.data.isEqual(t.data)&&n.fieldMask.isEqual(t.fieldMask))}class Ze extends Yn{constructor(t,e,i,s=[]){super(),this.key=t,this.value=e,this.precondition=i,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class ie extends Yn{constructor(t,e,i,s,o=[]){super(),this.key=t,this.data=e,this.fieldMask=i,this.precondition=s,this.fieldTransforms=o,this.type=1}getFieldMask(){return this.fieldMask}}function oa(n){const t=new Map;return n.fieldMask.fields.forEach(e=>{if(!e.isEmpty()){const i=n.data.field(e);t.set(e,i)}}),t}function Ks(n,t,e){const i=new Map;X(n.length===e.length);for(let s=0;s<e.length;s++){const o=n[s],u=o.transform,c=t.data.field(o.field);i.set(o.field,zc(u,c,e[s]))}return i}function Ws(n,t,e){const i=new Map;for(const s of n){const o=s.transform,u=e.data.field(s.field);i.set(s.field,$c(o,u,t))}return i}class aa extends Yn{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class Wc extends Yn{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class Qc{constructor(t,e,i,s){this.batchId=t,this.localWriteTime=e,this.baseMutations=i,this.mutations=s}applyToRemoteDocument(t,e){const i=e.mutationResults;for(let s=0;s<this.mutations.length;s++){const o=this.mutations[s];o.key.isEqual(t.key)&&Gc(o,t,i[s])}}applyToLocalView(t,e){for(const i of this.baseMutations)i.key.isEqual(t.key)&&(e=ze(i,t,e,this.localWriteTime));for(const i of this.mutations)i.key.isEqual(t.key)&&(e=ze(i,t,e,this.localWriteTime));return e}applyToLocalDocumentSet(t,e){const i=Zo();return this.mutations.forEach(s=>{const o=t.get(s.key),u=o.overlayedDocument;let c=this.applyToLocalView(u,o.mutatedFields);c=e.has(s.key)?null:c;const f=sa(u,c);f!==null&&i.set(s.key,f),u.isValidDocument()||u.convertToNoDocument(q.min())}),i}keys(){return this.mutations.reduce((t,e)=>t.add(e.key),dt())}isEqual(t){return this.batchId===t.batchId&&de(this.mutations,t.mutations,(e,i)=>Gs(e,i))&&de(this.baseMutations,t.baseMutations,(e,i)=>Gs(e,i))}}class hi{constructor(t,e,i,s){this.batch=t,this.commitVersion=e,this.mutationResults=i,this.docVersions=s}static from(t,e,i){X(t.mutations.length===i.length);let s=function(){return Lc}();const o=t.mutations;for(let u=0;u<o.length;u++)s=s.insert(o[u].key,i[u].version);return new hi(t,e,i,s)}}/**
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
 */class Xc{constructor(t,e){this.largestBatchId=t,this.mutation=e}getKey(){return this.mutation.key}isEqual(t){return t!==null&&this.mutation===t.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
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
 */var Y,L;function Yc(n){switch(n){case P.OK:return M();case P.CANCELLED:case P.UNKNOWN:case P.DEADLINE_EXCEEDED:case P.RESOURCE_EXHAUSTED:case P.INTERNAL:case P.UNAVAILABLE:case P.UNAUTHENTICATED:return!1;case P.INVALID_ARGUMENT:case P.NOT_FOUND:case P.ALREADY_EXISTS:case P.PERMISSION_DENIED:case P.FAILED_PRECONDITION:case P.ABORTED:case P.OUT_OF_RANGE:case P.UNIMPLEMENTED:case P.DATA_LOSS:return!0;default:return M()}}function Jc(n){if(n===void 0)return te("GRPC error has no .code"),P.UNKNOWN;switch(n){case Y.OK:return P.OK;case Y.CANCELLED:return P.CANCELLED;case Y.UNKNOWN:return P.UNKNOWN;case Y.DEADLINE_EXCEEDED:return P.DEADLINE_EXCEEDED;case Y.RESOURCE_EXHAUSTED:return P.RESOURCE_EXHAUSTED;case Y.INTERNAL:return P.INTERNAL;case Y.UNAVAILABLE:return P.UNAVAILABLE;case Y.UNAUTHENTICATED:return P.UNAUTHENTICATED;case Y.INVALID_ARGUMENT:return P.INVALID_ARGUMENT;case Y.NOT_FOUND:return P.NOT_FOUND;case Y.ALREADY_EXISTS:return P.ALREADY_EXISTS;case Y.PERMISSION_DENIED:return P.PERMISSION_DENIED;case Y.FAILED_PRECONDITION:return P.FAILED_PRECONDITION;case Y.ABORTED:return P.ABORTED;case Y.OUT_OF_RANGE:return P.OUT_OF_RANGE;case Y.UNIMPLEMENTED:return P.UNIMPLEMENTED;case Y.DATA_LOSS:return P.DATA_LOSS;default:return M()}}(L=Y||(Y={}))[L.OK=0]="OK",L[L.CANCELLED=1]="CANCELLED",L[L.UNKNOWN=2]="UNKNOWN",L[L.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",L[L.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",L[L.NOT_FOUND=5]="NOT_FOUND",L[L.ALREADY_EXISTS=6]="ALREADY_EXISTS",L[L.PERMISSION_DENIED=7]="PERMISSION_DENIED",L[L.UNAUTHENTICATED=16]="UNAUTHENTICATED",L[L.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",L[L.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",L[L.ABORTED=10]="ABORTED",L[L.OUT_OF_RANGE=11]="OUT_OF_RANGE",L[L.UNIMPLEMENTED=12]="UNIMPLEMENTED",L[L.INTERNAL=13]="INTERNAL",L[L.UNAVAILABLE=14]="UNAVAILABLE",L[L.DATA_LOSS=15]="DATA_LOSS";/**
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
 */new Jr([4294967295,4294967295],0);class Zc{constructor(t,e){this.databaseId=t,this.useProto3Json=e}}function Hr(n,t){return n.useProto3Json?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function th(n,t){return n.useProto3Json?t.toBase64():t.toUint8Array()}function eh(n,t){return Hr(n,t.toTimestamp())}function fe(n){return X(!!n),q.fromTimestamp(function(e){const i=ee(e);return new tt(i.seconds,i.nanos)}(n))}function la(n,t){return Gr(n,t).canonicalString()}function Gr(n,t){const e=function(s){return new Q(["projects",s.projectId,"databases",s.database])}(n).child("documents");return t===void 0?e:e.child(t)}function nh(n){const t=Q.fromString(n);return X(ch(t)),t}function Kr(n,t){return la(n.databaseId,t.path)}function rh(n){const t=nh(n);return t.length===4?Q.emptyPath():sh(t)}function ih(n){return new Q(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function sh(n){return X(n.length>4&&n.get(4)==="documents"),n.popFirst(5)}function Qs(n,t,e){return{name:Kr(n,t),fields:e.value.mapValue.fields}}function oh(n,t){let e;if(t instanceof Ze)e={update:Qs(n,t.key,t.value)};else if(t instanceof aa)e={delete:Kr(n,t.key)};else if(t instanceof ie)e={update:Qs(n,t.key,t.data),updateMask:uh(t.fieldMask)};else{if(!(t instanceof Wc))return M();e={verify:Kr(n,t.key)}}return t.fieldTransforms.length>0&&(e.updateTransforms=t.fieldTransforms.map(i=>function(o,u){const c=u.transform;if(c instanceof zn)return{fieldPath:u.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(c instanceof Qe)return{fieldPath:u.field.canonicalString(),appendMissingElements:{values:c.elements}};if(c instanceof Xe)return{fieldPath:u.field.canonicalString(),removeAllFromArray:{values:c.elements}};if(c instanceof qn)return{fieldPath:u.field.canonicalString(),increment:c.Ie};throw M()}(0,i))),t.precondition.isNone||(e.currentDocument=function(s,o){return o.updateTime!==void 0?{updateTime:eh(s,o.updateTime)}:o.exists!==void 0?{exists:o.exists}:M()}(n,t.precondition)),e}function ah(n,t){return n&&n.length>0?(X(t!==void 0),n.map(e=>function(s,o){let u=s.updateTime?fe(s.updateTime):fe(o);return u.isEqual(q.min())&&(u=fe(o)),new Hc(u,s.transformResults||[])}(e,t))):[]}function lh(n){let t=rh(n.parent);const e=n.structuredQuery,i=e.from?e.from.length:0;let s=null;if(i>0){X(i===1);const I=e.from[0];I.allDescendants?s=I.collectionId:t=t.child(I.collectionId)}let o=[];e.where&&(o=function(w){const C=ua(w);return C instanceof jt&&Ho(C)?C.getFilters():[C]}(e.where));let u=[];e.orderBy&&(u=function(w){return w.map(C=>function(D){return new jn(ce(D.field),function(N){switch(N){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(D.direction))}(C))}(e.orderBy));let c=null;e.limit&&(c=function(w){let C;return C=typeof w=="object"?w.value:w,ri(C)?null:C}(e.limit));let f=null;e.startAt&&(f=function(w){const C=!!w.before,V=w.values||[];return new Bn(V,C)}(e.startAt));let m=null;return e.endAt&&(m=function(w){const C=!w.before,V=w.values||[];return new Bn(V,C)}(e.endAt)),Vc(t,s,u,o,c,"F",f,m)}function ua(n){return n.unaryFilter!==void 0?function(e){switch(e.unaryFilter.op){case"IS_NAN":const i=ce(e.unaryFilter.field);return Z.create(i,"==",{doubleValue:NaN});case"IS_NULL":const s=ce(e.unaryFilter.field);return Z.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const o=ce(e.unaryFilter.field);return Z.create(o,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const u=ce(e.unaryFilter.field);return Z.create(u,"!=",{nullValue:"NULL_VALUE"});default:return M()}}(n):n.fieldFilter!==void 0?function(e){return Z.create(ce(e.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return M()}}(e.fieldFilter.op),e.fieldFilter.value)}(n):n.compositeFilter!==void 0?function(e){return jt.create(e.compositeFilter.filters.map(i=>ua(i)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return M()}}(e.compositeFilter.op))}(n):M()}function ce(n){return it.fromServerFormat(n.fieldPath)}function uh(n){const t=[];return n.fields.forEach(e=>t.push(e.canonicalString())),{fieldPaths:t}}function ch(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
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
 */class hh{constructor(t){this.Tt=t}}function fh(n){const t=lh({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?qr(t,t.limit,"L"):t}/**
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
 */class dh{constructor(){this.Tn=new ph}addToCollectionParentIndex(t,e){return this.Tn.add(e),R.resolve()}getCollectionParents(t,e){return R.resolve(this.Tn.getEntries(e))}addFieldIndex(t,e){return R.resolve()}deleteFieldIndex(t,e){return R.resolve()}deleteAllFieldIndexes(t){return R.resolve()}createTargetIndexes(t,e){return R.resolve()}getDocumentsMatchingTarget(t,e){return R.resolve(null)}getIndexType(t,e){return R.resolve(0)}getFieldIndexes(t,e){return R.resolve([])}getNextCollectionGroupToUpdate(t){return R.resolve(null)}getMinOffset(t,e){return R.resolve(Bt.min())}getMinOffsetFromCollectionGroup(t,e){return R.resolve(Bt.min())}updateCollectionGroup(t,e,i){return R.resolve()}updateIndexEntries(t,e){return R.resolve()}}class ph{constructor(){this.index={}}add(t){const e=t.lastSegment(),i=t.popLast(),s=this.index[e]||new st(Q.comparator),o=!s.has(i);return this.index[e]=s.add(i),o}has(t){const e=t.lastSegment(),i=t.popLast(),s=this.index[e];return s&&s.has(i)}getEntries(t){return(this.index[t]||new st(Q.comparator)).toArray()}}/**
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
 */const Xs={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},ca=41943040;class _t{static withCacheSize(t){return new _t(t,_t.DEFAULT_COLLECTION_PERCENTILE,_t.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(t,e,i){this.cacheSizeCollectionThreshold=t,this.percentileToCollect=e,this.maximumSequenceNumbersToCollect=i}}/**
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
 */_t.DEFAULT_COLLECTION_PERCENTILE=10,_t.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,_t.DEFAULT=new _t(ca,_t.DEFAULT_COLLECTION_PERCENTILE,_t.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),_t.DISABLED=new _t(-1,0,0);/**
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
 */class _e{constructor(t){this.$n=t}next(){return this.$n+=2,this.$n}static Kn(){return new _e(0)}static Un(){return new _e(-1)}}/**
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
 */const Ys="LruGarbageCollector",mh=1048576;function Js([n,t],[e,i]){const s=B(n,e);return s===0?B(t,i):s}class gh{constructor(t){this.Hn=t,this.buffer=new st(Js),this.Jn=0}Yn(){return++this.Jn}Zn(t){const e=[t,this.Yn()];if(this.buffer.size<this.Hn)this.buffer=this.buffer.add(e);else{const i=this.buffer.last();Js(e,i)<0&&(this.buffer=this.buffer.delete(i).add(e))}}get maxValue(){return this.buffer.last()[0]}}class _h{constructor(t,e,i){this.garbageCollector=t,this.asyncQueue=e,this.localStore=i,this.Xn=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.er(6e4)}stop(){this.Xn&&(this.Xn.cancel(),this.Xn=null)}get started(){return this.Xn!==null}er(t){b(Ys,`Garbage collection scheduled in ${t}ms`),this.Xn=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",t,async()=>{this.Xn=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(e){Je(e)?b(Ys,"Ignoring IndexedDB error during garbage collection: ",e):await ti(e)}await this.er(3e5)})}}class yh{constructor(t,e){this.tr=t,this.params=e}calculateTargetCount(t,e){return this.tr.nr(t).next(i=>Math.floor(e/100*i))}nthSequenceNumber(t,e){if(e===0)return R.resolve(ei.ae);const i=new gh(e);return this.tr.forEachTarget(t,s=>i.Zn(s.sequenceNumber)).next(()=>this.tr.rr(t,s=>i.Zn(s))).next(()=>i.maxValue)}removeTargets(t,e,i){return this.tr.removeTargets(t,e,i)}removeOrphanedDocuments(t,e){return this.tr.removeOrphanedDocuments(t,e)}collect(t,e){return this.params.cacheSizeCollectionThreshold===-1?(b("LruGarbageCollector","Garbage collection skipped; disabled"),R.resolve(Xs)):this.getCacheSize(t).next(i=>i<this.params.cacheSizeCollectionThreshold?(b("LruGarbageCollector",`Garbage collection skipped; Cache size ${i} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),Xs):this.ir(t,e))}getCacheSize(t){return this.tr.getCacheSize(t)}ir(t,e){let i,s,o,u,c,f,m;const I=Date.now();return this.calculateTargetCount(t,this.params.percentileToCollect).next(w=>(w>this.params.maximumSequenceNumbersToCollect?(b("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${w}`),s=this.params.maximumSequenceNumbersToCollect):s=w,u=Date.now(),this.nthSequenceNumber(t,s))).next(w=>(i=w,c=Date.now(),this.removeTargets(t,i,e))).next(w=>(o=w,f=Date.now(),this.removeOrphanedDocuments(t,i))).next(w=>(m=Date.now(),ue()<=F.DEBUG&&b("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${u-I}ms
	Determined least recently used ${s} in `+(c-u)+`ms
	Removed ${o} targets in `+(f-c)+`ms
	Removed ${w} documents in `+(m-f)+`ms
Total Duration: ${m-I}ms`),R.resolve({didRun:!0,sequenceNumbersCollected:s,targetsRemoved:o,documentsRemoved:w})))}}function Eh(n,t){return new yh(n,t)}/**
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
 */class vh{constructor(){this.changes=new re(t=>t.toString(),(t,e)=>t.isEqual(e)),this.changesApplied=!1}addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,e){this.assertNotApplied(),this.changes.set(t,Tt.newInvalidDocument(t).setReadTime(e))}getEntry(t,e){this.assertNotApplied();const i=this.changes.get(e);return i!==void 0?R.resolve(i):this.getFromCache(t,e)}getEntries(t,e){return this.getAllFromCache(t,e)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}/**
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
 *//**
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
 */class Th{constructor(t,e){this.overlayedDocument=t,this.mutatedFields=e}}/**
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
 */class Ih{constructor(t,e,i,s){this.remoteDocumentCache=t,this.mutationQueue=e,this.documentOverlayCache=i,this.indexManager=s}getDocument(t,e){let i=null;return this.documentOverlayCache.getOverlay(t,e).next(s=>(i=s,this.remoteDocumentCache.getEntry(t,e))).next(s=>(i!==null&&ze(i.mutation,s,At.empty(),tt.now()),s))}getDocuments(t,e){return this.remoteDocumentCache.getEntries(t,e).next(i=>this.getLocalViewOfDocuments(t,i,dt()).next(()=>i))}getLocalViewOfDocuments(t,e,i=dt()){const s=Xt();return this.populateOverlays(t,s,e).next(()=>this.computeViews(t,e,s,i).next(o=>{let u=Pn();return o.forEach((c,f)=>{u=u.insert(c,f.overlayedDocument)}),u}))}getOverlayedDocuments(t,e){const i=Xt();return this.populateOverlays(t,i,e).next(()=>this.computeViews(t,e,i,dt()))}populateOverlays(t,e,i){const s=[];return i.forEach(o=>{e.has(o)||s.push(o)}),this.documentOverlayCache.getOverlays(t,s).next(o=>{o.forEach((u,c)=>{e.set(u,c)})})}computeViews(t,e,i,s){let o=$n();const u=$e(),c=function(){return $e()}();return e.forEach((f,m)=>{const I=i.get(m.key);s.has(m.key)&&(I===void 0||I.mutation instanceof ie)?o=o.insert(m.key,m):I!==void 0?(u.set(m.key,I.mutation.getFieldMask()),ze(I.mutation,m,I.mutation.getFieldMask(),tt.now())):u.set(m.key,At.empty())}),this.recalculateAndSaveOverlays(t,o).next(f=>(f.forEach((m,I)=>u.set(m,I)),e.forEach((m,I)=>{var w;return c.set(m,new Th(I,(w=u.get(m))!==null&&w!==void 0?w:null))}),c))}recalculateAndSaveOverlays(t,e){const i=$e();let s=new yt((u,c)=>u-c),o=dt();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(t,e).next(u=>{for(const c of u)c.keys().forEach(f=>{const m=e.get(f);if(m===null)return;let I=i.get(f)||At.empty();I=c.applyToLocalView(m,I),i.set(f,I);const w=(s.get(c.batchId)||dt()).add(f);s=s.insert(c.batchId,w)})}).next(()=>{const u=[],c=s.getReverseIterator();for(;c.hasNext();){const f=c.getNext(),m=f.key,I=f.value,w=Zo();I.forEach(C=>{if(!o.has(C)){const V=sa(e.get(C),i.get(C));V!==null&&w.set(C,V),o=o.add(C)}}),u.push(this.documentOverlayCache.saveOverlays(t,m,w))}return R.waitFor(u)}).next(()=>i)}recalculateAndSaveOverlaysForDocumentKeys(t,e){return this.remoteDocumentCache.getEntries(t,e).next(i=>this.recalculateAndSaveOverlays(t,i))}getDocumentsMatchingQuery(t,e,i,s){return function(u){return k.isDocumentKey(u.path)&&u.collectionGroup===null&&u.filters.length===0}(e)?this.getDocumentsMatchingDocumentQuery(t,e.path):Nc(e)?this.getDocumentsMatchingCollectionGroupQuery(t,e,i,s):this.getDocumentsMatchingCollectionQuery(t,e,i,s)}getNextDocuments(t,e,i,s){return this.remoteDocumentCache.getAllFromCollectionGroup(t,e,i,s).next(o=>{const u=s-o.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(t,e,i.largestBatchId,s-o.size):R.resolve(Xt());let c=Ke,f=o;return u.next(m=>R.forEach(m,(I,w)=>(c<w.largestBatchId&&(c=w.largestBatchId),o.get(I)?R.resolve():this.remoteDocumentCache.getEntry(t,I).next(C=>{f=f.insert(I,C)}))).next(()=>this.populateOverlays(t,m,o)).next(()=>this.computeViews(t,f,m,dt())).next(I=>({batchId:c,changes:Jo(I)})))})}getDocumentsMatchingDocumentQuery(t,e){return this.getDocument(t,new k(e)).next(i=>{let s=Pn();return i.isFoundDocument()&&(s=s.insert(i.key,i)),s})}getDocumentsMatchingCollectionGroupQuery(t,e,i,s){const o=e.collectionGroup;let u=Pn();return this.indexManager.getCollectionParents(t,o).next(c=>R.forEach(c,f=>{const m=function(w,C){return new Qn(C,null,w.explicitOrderBy.slice(),w.filters.slice(),w.limit,w.limitType,w.startAt,w.endAt)}(e,f.child(o));return this.getDocumentsMatchingCollectionQuery(t,m,i,s).next(I=>{I.forEach((w,C)=>{u=u.insert(w,C)})})}).next(()=>u))}getDocumentsMatchingCollectionQuery(t,e,i,s){let o;return this.documentOverlayCache.getOverlaysForCollection(t,e.path,i.largestBatchId).next(u=>(o=u,this.remoteDocumentCache.getDocumentsMatchingQuery(t,e,i,o,s))).next(u=>{o.forEach((f,m)=>{const I=m.getKey();u.get(I)===null&&(u=u.insert(I,Tt.newInvalidDocument(I)))});let c=Pn();return u.forEach((f,m)=>{const I=o.get(f);I!==void 0&&ze(I.mutation,m,At.empty(),tt.now()),ui(e,m)&&(c=c.insert(f,m))}),c})}}/**
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
 */class Ah{constructor(t){this.serializer=t,this.dr=new Map,this.Ar=new Map}getBundleMetadata(t,e){return R.resolve(this.dr.get(e))}saveBundleMetadata(t,e){return this.dr.set(e.id,function(s){return{id:s.id,version:s.version,createTime:fe(s.createTime)}}(e)),R.resolve()}getNamedQuery(t,e){return R.resolve(this.Ar.get(e))}saveNamedQuery(t,e){return this.Ar.set(e.name,function(s){return{name:s.name,query:fh(s.bundledQuery),readTime:fe(s.readTime)}}(e)),R.resolve()}}/**
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
 */class wh{constructor(){this.overlays=new yt(k.comparator),this.Rr=new Map}getOverlay(t,e){return R.resolve(this.overlays.get(e))}getOverlays(t,e){const i=Xt();return R.forEach(e,s=>this.getOverlay(t,s).next(o=>{o!==null&&i.set(s,o)})).next(()=>i)}saveOverlays(t,e,i){return i.forEach((s,o)=>{this.Et(t,e,o)}),R.resolve()}removeOverlaysForBatchId(t,e,i){const s=this.Rr.get(i);return s!==void 0&&(s.forEach(o=>this.overlays=this.overlays.remove(o)),this.Rr.delete(i)),R.resolve()}getOverlaysForCollection(t,e,i){const s=Xt(),o=e.length+1,u=new k(e.child("")),c=this.overlays.getIteratorFrom(u);for(;c.hasNext();){const f=c.getNext().value,m=f.getKey();if(!e.isPrefixOf(m.path))break;m.path.length===o&&f.largestBatchId>i&&s.set(f.getKey(),f)}return R.resolve(s)}getOverlaysForCollectionGroup(t,e,i,s){let o=new yt((m,I)=>m-I);const u=this.overlays.getIterator();for(;u.hasNext();){const m=u.getNext().value;if(m.getKey().getCollectionGroup()===e&&m.largestBatchId>i){let I=o.get(m.largestBatchId);I===null&&(I=Xt(),o=o.insert(m.largestBatchId,I)),I.set(m.getKey(),m)}}const c=Xt(),f=o.getIterator();for(;f.hasNext()&&(f.getNext().value.forEach((m,I)=>c.set(m,I)),!(c.size()>=s)););return R.resolve(c)}Et(t,e,i){const s=this.overlays.get(i.key);if(s!==null){const u=this.Rr.get(s.largestBatchId).delete(i.key);this.Rr.set(s.largestBatchId,u)}this.overlays=this.overlays.insert(i.key,new Xc(e,i));let o=this.Rr.get(e);o===void 0&&(o=dt(),this.Rr.set(e,o)),this.Rr.set(e,o.add(i.key))}}/**
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
 */class Rh{constructor(){this.sessionToken=Rt.EMPTY_BYTE_STRING}getSessionToken(t){return R.resolve(this.sessionToken)}setSessionToken(t,e){return this.sessionToken=e,R.resolve()}}/**
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
 */class fi{constructor(){this.Vr=new st(J.mr),this.gr=new st(J.pr)}isEmpty(){return this.Vr.isEmpty()}addReference(t,e){const i=new J(t,e);this.Vr=this.Vr.add(i),this.gr=this.gr.add(i)}yr(t,e){t.forEach(i=>this.addReference(i,e))}removeReference(t,e){this.wr(new J(t,e))}br(t,e){t.forEach(i=>this.removeReference(i,e))}Sr(t){const e=new k(new Q([])),i=new J(e,t),s=new J(e,t+1),o=[];return this.gr.forEachInRange([i,s],u=>{this.wr(u),o.push(u.key)}),o}Dr(){this.Vr.forEach(t=>this.wr(t))}wr(t){this.Vr=this.Vr.delete(t),this.gr=this.gr.delete(t)}vr(t){const e=new k(new Q([])),i=new J(e,t),s=new J(e,t+1);let o=dt();return this.gr.forEachInRange([i,s],u=>{o=o.add(u.key)}),o}containsKey(t){const e=new J(t,0),i=this.Vr.firstAfterOrEqual(e);return i!==null&&t.isEqual(i.key)}}class J{constructor(t,e){this.key=t,this.Cr=e}static mr(t,e){return k.comparator(t.key,e.key)||B(t.Cr,e.Cr)}static pr(t,e){return B(t.Cr,e.Cr)||k.comparator(t.key,e.key)}}/**
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
 */class Ph{constructor(t,e){this.indexManager=t,this.referenceDelegate=e,this.mutationQueue=[],this.Fr=1,this.Mr=new st(J.mr)}checkEmpty(t){return R.resolve(this.mutationQueue.length===0)}addMutationBatch(t,e,i,s){const o=this.Fr;this.Fr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const u=new Qc(o,e,i,s);this.mutationQueue.push(u);for(const c of s)this.Mr=this.Mr.add(new J(c.key,o)),this.indexManager.addToCollectionParentIndex(t,c.key.path.popLast());return R.resolve(u)}lookupMutationBatch(t,e){return R.resolve(this.Or(e))}getNextMutationBatchAfterBatchId(t,e){const i=e+1,s=this.Nr(i),o=s<0?0:s;return R.resolve(this.mutationQueue.length>o?this.mutationQueue[o]:null)}getHighestUnacknowledgedBatchId(){return R.resolve(this.mutationQueue.length===0?ni:this.Fr-1)}getAllMutationBatches(t){return R.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(t,e){const i=new J(e,0),s=new J(e,Number.POSITIVE_INFINITY),o=[];return this.Mr.forEachInRange([i,s],u=>{const c=this.Or(u.Cr);o.push(c)}),R.resolve(o)}getAllMutationBatchesAffectingDocumentKeys(t,e){let i=new st(B);return e.forEach(s=>{const o=new J(s,0),u=new J(s,Number.POSITIVE_INFINITY);this.Mr.forEachInRange([o,u],c=>{i=i.add(c.Cr)})}),R.resolve(this.Br(i))}getAllMutationBatchesAffectingQuery(t,e){const i=e.path,s=i.length+1;let o=i;k.isDocumentKey(o)||(o=o.child(""));const u=new J(new k(o),0);let c=new st(B);return this.Mr.forEachWhile(f=>{const m=f.key.path;return!!i.isPrefixOf(m)&&(m.length===s&&(c=c.add(f.Cr)),!0)},u),R.resolve(this.Br(c))}Br(t){const e=[];return t.forEach(i=>{const s=this.Or(i);s!==null&&e.push(s)}),e}removeMutationBatch(t,e){X(this.Lr(e.batchId,"removed")===0),this.mutationQueue.shift();let i=this.Mr;return R.forEach(e.mutations,s=>{const o=new J(s.key,e.batchId);return i=i.delete(o),this.referenceDelegate.markPotentiallyOrphaned(t,s.key)}).next(()=>{this.Mr=i})}qn(t){}containsKey(t,e){const i=new J(e,0),s=this.Mr.firstAfterOrEqual(i);return R.resolve(e.isEqual(s&&s.key))}performConsistencyCheck(t){return this.mutationQueue.length,R.resolve()}Lr(t,e){return this.Nr(t)}Nr(t){return this.mutationQueue.length===0?0:t-this.mutationQueue[0].batchId}Or(t){const e=this.Nr(t);return e<0||e>=this.mutationQueue.length?null:this.mutationQueue[e]}}/**
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
 */class Ch{constructor(t){this.kr=t,this.docs=function(){return new yt(k.comparator)}(),this.size=0}setIndexManager(t){this.indexManager=t}addEntry(t,e){const i=e.key,s=this.docs.get(i),o=s?s.size:0,u=this.kr(e);return this.docs=this.docs.insert(i,{document:e.mutableCopy(),size:u}),this.size+=u-o,this.indexManager.addToCollectionParentIndex(t,i.path.popLast())}removeEntry(t){const e=this.docs.get(t);e&&(this.docs=this.docs.remove(t),this.size-=e.size)}getEntry(t,e){const i=this.docs.get(e);return R.resolve(i?i.document.mutableCopy():Tt.newInvalidDocument(e))}getEntries(t,e){let i=$n();return e.forEach(s=>{const o=this.docs.get(s);i=i.insert(s,o?o.document.mutableCopy():Tt.newInvalidDocument(s))}),R.resolve(i)}getDocumentsMatchingQuery(t,e,i,s){let o=$n();const u=e.path,c=new k(u.child("__id-9223372036854775808__")),f=this.docs.getIteratorFrom(c);for(;f.hasNext();){const{key:m,value:{document:I}}=f.getNext();if(!u.isPrefixOf(m.path))break;m.path.length>u.length+1||ac(oc(I),i)<=0||(s.has(I.key)||ui(e,I))&&(o=o.insert(I.key,I.mutableCopy()))}return R.resolve(o)}getAllFromCollectionGroup(t,e,i,s){M()}qr(t,e){return R.forEach(this.docs,i=>e(i))}newChangeBuffer(t){return new Sh(this)}getSize(t){return R.resolve(this.size)}}class Sh extends vh{constructor(t){super(),this.Ir=t}applyChanges(t){const e=[];return this.changes.forEach((i,s)=>{s.isValidDocument()?e.push(this.Ir.addEntry(t,s)):this.Ir.removeEntry(i)}),R.waitFor(e)}getFromCache(t,e){return this.Ir.getEntry(t,e)}getAllFromCache(t,e){return this.Ir.getEntries(t,e)}}/**
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
 */class bh{constructor(t){this.persistence=t,this.Qr=new re(e=>ai(e),li),this.lastRemoteSnapshotVersion=q.min(),this.highestTargetId=0,this.$r=0,this.Kr=new fi,this.targetCount=0,this.Ur=_e.Kn()}forEachTarget(t,e){return this.Qr.forEach((i,s)=>e(s)),R.resolve()}getLastRemoteSnapshotVersion(t){return R.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return R.resolve(this.$r)}allocateTargetId(t){return this.highestTargetId=this.Ur.next(),R.resolve(this.highestTargetId)}setTargetsMetadata(t,e,i){return i&&(this.lastRemoteSnapshotVersion=i),e>this.$r&&(this.$r=e),R.resolve()}zn(t){this.Qr.set(t.target,t);const e=t.targetId;e>this.highestTargetId&&(this.Ur=new _e(e),this.highestTargetId=e),t.sequenceNumber>this.$r&&(this.$r=t.sequenceNumber)}addTargetData(t,e){return this.zn(e),this.targetCount+=1,R.resolve()}updateTargetData(t,e){return this.zn(e),R.resolve()}removeTargetData(t,e){return this.Qr.delete(e.target),this.Kr.Sr(e.targetId),this.targetCount-=1,R.resolve()}removeTargets(t,e,i){let s=0;const o=[];return this.Qr.forEach((u,c)=>{c.sequenceNumber<=e&&i.get(c.targetId)===null&&(this.Qr.delete(u),o.push(this.removeMatchingKeysForTargetId(t,c.targetId)),s++)}),R.waitFor(o).next(()=>s)}getTargetCount(t){return R.resolve(this.targetCount)}getTargetData(t,e){const i=this.Qr.get(e)||null;return R.resolve(i)}addMatchingKeys(t,e,i){return this.Kr.yr(e,i),R.resolve()}removeMatchingKeys(t,e,i){this.Kr.br(e,i);const s=this.persistence.referenceDelegate,o=[];return s&&e.forEach(u=>{o.push(s.markPotentiallyOrphaned(t,u))}),R.waitFor(o)}removeMatchingKeysForTargetId(t,e){return this.Kr.Sr(e),R.resolve()}getMatchingKeysForTargetId(t,e){const i=this.Kr.vr(e);return R.resolve(i)}containsKey(t,e){return R.resolve(this.Kr.containsKey(e))}}/**
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
 */class ha{constructor(t,e){this.Wr={},this.overlays={},this.Gr=new ei(0),this.zr=!1,this.zr=!0,this.jr=new Rh,this.referenceDelegate=t(this),this.Hr=new bh(this),this.indexManager=new dh,this.remoteDocumentCache=function(s){return new Ch(s)}(i=>this.referenceDelegate.Jr(i)),this.serializer=new hh(e),this.Yr=new Ah(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.zr=!1,Promise.resolve()}get started(){return this.zr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let e=this.overlays[t.toKey()];return e||(e=new wh,this.overlays[t.toKey()]=e),e}getMutationQueue(t,e){let i=this.Wr[t.toKey()];return i||(i=new Ph(e,this.referenceDelegate),this.Wr[t.toKey()]=i),i}getGlobalsCache(){return this.jr}getTargetCache(){return this.Hr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Yr}runTransaction(t,e,i){b("MemoryPersistence","Starting transaction:",t);const s=new Vh(this.Gr.next());return this.referenceDelegate.Zr(),i(s).next(o=>this.referenceDelegate.Xr(s).next(()=>o)).toPromise().then(o=>(s.raiseOnCommittedEvent(),o))}ei(t,e){return R.or(Object.values(this.Wr).map(i=>()=>i.containsKey(t,e)))}}class Vh extends uc{constructor(t){super(),this.currentSequenceNumber=t}}class di{constructor(t){this.persistence=t,this.ti=new fi,this.ni=null}static ri(t){return new di(t)}get ii(){if(this.ni)return this.ni;throw M()}addReference(t,e,i){return this.ti.addReference(i,e),this.ii.delete(i.toString()),R.resolve()}removeReference(t,e,i){return this.ti.removeReference(i,e),this.ii.add(i.toString()),R.resolve()}markPotentiallyOrphaned(t,e){return this.ii.add(e.toString()),R.resolve()}removeTarget(t,e){this.ti.Sr(e.targetId).forEach(s=>this.ii.add(s.toString()));const i=this.persistence.getTargetCache();return i.getMatchingKeysForTargetId(t,e.targetId).next(s=>{s.forEach(o=>this.ii.add(o.toString()))}).next(()=>i.removeTargetData(t,e))}Zr(){this.ni=new Set}Xr(t){const e=this.persistence.getRemoteDocumentCache().newChangeBuffer();return R.forEach(this.ii,i=>{const s=k.fromPath(i);return this.si(t,s).next(o=>{o||e.removeEntry(s,q.min())})}).next(()=>(this.ni=null,e.apply(t)))}updateLimboDocument(t,e){return this.si(t,e).next(i=>{i?this.ii.delete(e.toString()):this.ii.add(e.toString())})}Jr(t){return 0}si(t,e){return R.or([()=>R.resolve(this.ti.containsKey(e)),()=>this.persistence.getTargetCache().containsKey(t,e),()=>this.persistence.ei(t,e)])}}class Hn{constructor(t,e){this.persistence=t,this.oi=new re(i=>fc(i.path),(i,s)=>i.isEqual(s)),this.garbageCollector=Eh(this,e)}static ri(t,e){return new Hn(t,e)}Zr(){}Xr(t){return R.resolve()}forEachTarget(t,e){return this.persistence.getTargetCache().forEachTarget(t,e)}nr(t){const e=this.sr(t);return this.persistence.getTargetCache().getTargetCount(t).next(i=>e.next(s=>i+s))}sr(t){let e=0;return this.rr(t,i=>{e++}).next(()=>e)}rr(t,e){return R.forEach(this.oi,(i,s)=>this.ar(t,i,s).next(o=>o?R.resolve():e(s)))}removeTargets(t,e,i){return this.persistence.getTargetCache().removeTargets(t,e,i)}removeOrphanedDocuments(t,e){let i=0;const s=this.persistence.getRemoteDocumentCache(),o=s.newChangeBuffer();return s.qr(t,u=>this.ar(t,u,e).next(c=>{c||(i++,o.removeEntry(u,q.min()))})).next(()=>o.apply(t)).next(()=>i)}markPotentiallyOrphaned(t,e){return this.oi.set(e,t.currentSequenceNumber),R.resolve()}removeTarget(t,e){const i=e.withSequenceNumber(t.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(t,i)}addReference(t,e,i){return this.oi.set(i,t.currentSequenceNumber),R.resolve()}removeReference(t,e,i){return this.oi.set(i,t.currentSequenceNumber),R.resolve()}updateLimboDocument(t,e){return this.oi.set(e,t.currentSequenceNumber),R.resolve()}Jr(t){let e=t.key.toString().length;return t.isFoundDocument()&&(e+=bn(t.data.value)),e}ar(t,e,i){return R.or([()=>this.persistence.ei(t,e),()=>this.persistence.getTargetCache().containsKey(t,e),()=>{const s=this.oi.get(e);return R.resolve(s!==void 0&&s>i)}])}getCacheSize(t){return this.persistence.getRemoteDocumentCache().getSize(t)}}/**
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
 */class pi{constructor(t,e,i,s){this.targetId=t,this.fromCache=e,this.Hi=i,this.Ji=s}static Yi(t,e){let i=dt(),s=dt();for(const o of e.docChanges)switch(o.type){case 0:i=i.add(o.doc.key);break;case 1:s=s.add(o.doc.key)}return new pi(t,e.fromCache,i,s)}}/**
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
 */class Dh{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(t){this._documentReadCount+=t}}/**
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
 */class Nh{constructor(){this.Zi=!1,this.Xi=!1,this.es=100,this.ts=function(){return Dl()?8:cc(bl())>0?6:4}()}initialize(t,e){this.ns=t,this.indexManager=e,this.Zi=!0}getDocumentsMatchingQuery(t,e,i,s){const o={result:null};return this.rs(t,e).next(u=>{o.result=u}).next(()=>{if(!o.result)return this.ss(t,e,s,i).next(u=>{o.result=u})}).next(()=>{if(o.result)return;const u=new Dh;return this._s(t,e,u).next(c=>{if(o.result=c,this.Xi)return this.us(t,e,u,c.size)})}).next(()=>o.result)}us(t,e,i,s){return i.documentReadCount<this.es?(ue()<=F.DEBUG&&b("QueryEngine","SDK will not create cache indexes for query:",Fe(e),"since it only creates cache indexes for collection contains","more than or equal to",this.es,"documents"),R.resolve()):(ue()<=F.DEBUG&&b("QueryEngine","Query:",Fe(e),"scans",i.documentReadCount,"local documents and returns",s,"documents as results."),i.documentReadCount>this.ts*s?(ue()<=F.DEBUG&&b("QueryEngine","The SDK decides to create cache indexes for query:",Fe(e),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(t,Jt(e))):R.resolve())}rs(t,e){if(qs(e))return R.resolve(null);let i=Jt(e);return this.indexManager.getIndexType(t,i).next(s=>s===0?null:(e.limit!==null&&s===1&&(e=qr(e,null,"F"),i=Jt(e)),this.indexManager.getDocumentsMatchingTarget(t,i).next(o=>{const u=dt(...o);return this.ns.getDocuments(t,u).next(c=>this.indexManager.getMinOffset(t,i).next(f=>{const m=this.cs(e,c);return this.ls(e,m,u,f.readTime)?this.rs(t,qr(e,null,"F")):this.hs(t,m,e,f)}))})))}ss(t,e,i,s){return qs(e)||s.isEqual(q.min())?R.resolve(null):this.ns.getDocuments(t,i).next(o=>{const u=this.cs(e,o);return this.ls(e,u,i,s)?R.resolve(null):(ue()<=F.DEBUG&&b("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),Fe(e)),this.hs(t,u,e,sc(s,Ke)).next(c=>c))})}cs(t,e){let i=new st(kc(t));return e.forEach((s,o)=>{ui(t,o)&&(i=i.add(o))}),i}ls(t,e,i,s){if(t.limit===null)return!1;if(i.size!==e.size)return!0;const o=t.limitType==="F"?e.last():e.first();return!!o&&(o.hasPendingWrites||o.version.compareTo(s)>0)}_s(t,e,i){return ue()<=F.DEBUG&&b("QueryEngine","Using full collection scan to execute query:",Fe(e)),this.ns.getDocumentsMatchingQuery(t,e,Bt.min(),i)}hs(t,e,i,s){return this.ns.getDocumentsMatchingQuery(t,i,s).next(o=>(e.forEach(u=>{o=o.insert(u.key,u)}),o))}}/**
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
 */const Oh="LocalStore";class kh{constructor(t,e,i,s){this.persistence=t,this.Ps=e,this.serializer=s,this.Ts=new yt(B),this.Is=new re(o=>ai(o),li),this.Es=new Map,this.ds=t.getRemoteDocumentCache(),this.Hr=t.getTargetCache(),this.Yr=t.getBundleCache(),this.As(i)}As(t){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(t),this.indexManager=this.persistence.getIndexManager(t),this.mutationQueue=this.persistence.getMutationQueue(t,this.indexManager),this.localDocuments=new Ih(this.ds,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.ds.setIndexManager(this.indexManager),this.Ps.initialize(this.localDocuments,this.indexManager)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",e=>t.collect(e,this.Ts))}}function xh(n,t,e,i){return new kh(n,t,e,i)}async function fa(n,t){const e=$(n);return await e.persistence.runTransaction("Handle user change","readonly",i=>{let s;return e.mutationQueue.getAllMutationBatches(i).next(o=>(s=o,e.As(t),e.mutationQueue.getAllMutationBatches(i))).next(o=>{const u=[],c=[];let f=dt();for(const m of s){u.push(m.batchId);for(const I of m.mutations)f=f.add(I.key)}for(const m of o){c.push(m.batchId);for(const I of m.mutations)f=f.add(I.key)}return e.localDocuments.getDocuments(i,f).next(m=>({Rs:m,removedBatchIds:u,addedBatchIds:c}))})})}function Mh(n,t){const e=$(n);return e.persistence.runTransaction("Acknowledge batch","readwrite-primary",i=>{const s=t.batch.keys(),o=e.ds.newChangeBuffer({trackRemovals:!0});return function(c,f,m,I){const w=m.batch,C=w.keys();let V=R.resolve();return C.forEach(D=>{V=V.next(()=>I.getEntry(f,D)).next(x=>{const N=m.docVersions.get(D);X(N!==null),x.version.compareTo(N)<0&&(w.applyToRemoteDocument(x,m),x.isValidDocument()&&(x.setReadTime(m.commitVersion),I.addEntry(x)))})}),V.next(()=>c.mutationQueue.removeMutationBatch(f,w))}(e,i,t,o).next(()=>o.apply(i)).next(()=>e.mutationQueue.performConsistencyCheck(i)).next(()=>e.documentOverlayCache.removeOverlaysForBatchId(i,s,t.batch.batchId)).next(()=>e.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(i,function(c){let f=dt();for(let m=0;m<c.mutationResults.length;++m)c.mutationResults[m].transformResults.length>0&&(f=f.add(c.batch.mutations[m].key));return f}(t))).next(()=>e.localDocuments.getDocuments(i,s))})}function Lh(n){const t=$(n);return t.persistence.runTransaction("Get last remote snapshot version","readonly",e=>t.Hr.getLastRemoteSnapshotVersion(e))}function Fh(n,t){const e=$(n);return e.persistence.runTransaction("Get next mutation batch","readonly",i=>(t===void 0&&(t=ni),e.mutationQueue.getNextMutationBatchAfterBatchId(i,t)))}class Zs{constructor(){this.activeTargetIds=Bc()}Ds(t){this.activeTargetIds=this.activeTargetIds.add(t)}vs(t){this.activeTargetIds=this.activeTargetIds.delete(t)}Ss(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class Uh{constructor(){this.ho=new Zs,this.Po={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,e,i){}addLocalQueryTarget(t,e=!0){return e&&this.ho.Ds(t),this.Po[t]||"not-current"}updateQueryState(t,e,i){this.Po[t]=e}removeLocalQueryTarget(t){this.ho.vs(t)}isLocalQueryTarget(t){return this.ho.activeTargetIds.has(t)}clearQueryState(t){delete this.Po[t]}getAllActiveQueryTargets(){return this.ho.activeTargetIds}isActiveQueryTarget(t){return this.ho.activeTargetIds.has(t)}start(){return this.ho=new Zs,Promise.resolve()}handleUserChange(t,e,i){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}}/**
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
 */class Bh{To(t){}shutdown(){}}/**
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
 */const to="ConnectivityMonitor";class eo{constructor(){this.Io=()=>this.Eo(),this.Ao=()=>this.Ro(),this.Vo=[],this.mo()}To(t){this.Vo.push(t)}shutdown(){window.removeEventListener("online",this.Io),window.removeEventListener("offline",this.Ao)}mo(){window.addEventListener("online",this.Io),window.addEventListener("offline",this.Ao)}Eo(){b(to,"Network connectivity changed: AVAILABLE");for(const t of this.Vo)t(0)}Ro(){b(to,"Network connectivity changed: UNAVAILABLE");for(const t of this.Vo)t(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let Cn=null;function Wr(){return Cn===null?Cn=function(){return 268435456+Math.round(2147483648*Math.random())}():Cn++,"0x"+Cn.toString(16)}/**
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
 */const Dr="RestConnection",jh={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class $h{get fo(){return!1}constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const e=t.ssl?"https":"http",i=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.po=e+"://"+t.host,this.yo=`projects/${i}/databases/${s}`,this.wo=this.databaseId.database===Fn?`project_id=${i}`:`project_id=${i}&database_id=${s}`}bo(t,e,i,s,o){const u=Wr(),c=this.So(t,e.toUriEncodedString());b(Dr,`Sending RPC '${t}' ${u}:`,c,i);const f={"google-cloud-resource-prefix":this.yo,"x-goog-request-params":this.wo};return this.Do(f,s,o),this.vo(t,c,f,i).then(m=>(b(Dr,`Received RPC '${t}' ${u}: `,m),m),m=>{throw Wn(Dr,`RPC '${t}' ${u} failed with error: `,m,"url: ",c,"request:",i),m})}Co(t,e,i,s,o,u){return this.bo(t,e,i,s,o)}Do(t,e,i){t["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Ee}(),t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),e&&e.headers.forEach((s,o)=>t[o]=s),i&&i.headers.forEach((s,o)=>t[o]=s)}So(t,e){const i=jh[t];return`${this.po}/v1/${e}:${i}`}terminate(){}}/**
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
 */class zh{constructor(t){this.Fo=t.Fo,this.Mo=t.Mo}xo(t){this.Oo=t}No(t){this.Bo=t}Lo(t){this.ko=t}onMessage(t){this.qo=t}close(){this.Mo()}send(t){this.Fo(t)}Qo(){this.Oo()}$o(){this.Bo()}Ko(t){this.ko(t)}Uo(t){this.qo(t)}}/**
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
 */const ht="WebChannelConnection";class qh extends $h{constructor(t){super(t),this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams,this.longPollingOptions=t.longPollingOptions}vo(t,e,i,s){const o=Wr();return new Promise((u,c)=>{const f=new Co;f.setWithCredentials(!0),f.listenOnce(So.COMPLETE,()=>{try{switch(f.getLastErrorCode()){case Sn.NO_ERROR:const I=f.getResponseJson();b(ht,`XHR for RPC '${t}' ${o} received:`,JSON.stringify(I)),u(I);break;case Sn.TIMEOUT:b(ht,`RPC '${t}' ${o} timed out`),c(new O(P.DEADLINE_EXCEEDED,"Request time out"));break;case Sn.HTTP_ERROR:const w=f.getStatus();if(b(ht,`RPC '${t}' ${o} failed with status:`,w,"response text:",f.getResponseText()),w>0){let C=f.getResponseJson();Array.isArray(C)&&(C=C[0]);const V=C==null?void 0:C.error;if(V&&V.status&&V.message){const D=function(N){const G=N.toLowerCase().replace(/_/g,"-");return Object.values(P).indexOf(G)>=0?G:P.UNKNOWN}(V.status);c(new O(D,V.message))}else c(new O(P.UNKNOWN,"Server responded with status "+f.getStatus()))}else c(new O(P.UNAVAILABLE,"Connection failed."));break;default:M()}}finally{b(ht,`RPC '${t}' ${o} completed.`)}});const m=JSON.stringify(s);b(ht,`RPC '${t}' ${o} sending request:`,s),f.send(e,"POST",m,i,15)})}Wo(t,e,i){const s=Wr(),o=[this.po,"/","google.firestore.v1.Firestore","/",t,"/channel"],u=Do(),c=Vo(),f={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},m=this.longPollingOptions.timeoutSeconds;m!==void 0&&(f.longPollingTimeout=Math.round(1e3*m)),this.useFetchStreams&&(f.useFetchStreams=!0),this.Do(f.initMessageHeaders,e,i),f.encodeInitMessageHeaders=!0;const I=o.join("");b(ht,`Creating RPC '${t}' stream ${s}: ${I}`,f);const w=u.createWebChannel(I,f);let C=!1,V=!1;const D=new zh({Fo:N=>{V?b(ht,`Not sending because RPC '${t}' stream ${s} is closed:`,N):(C||(b(ht,`Opening RPC '${t}' stream ${s} transport.`),w.open(),C=!0),b(ht,`RPC '${t}' stream ${s} sending:`,N),w.send(N))},Mo:()=>w.close()}),x=(N,G,H)=>{N.listen(G,K=>{try{H(K)}catch(ot){setTimeout(()=>{throw ot},0)}})};return x(w,Ue.EventType.OPEN,()=>{V||(b(ht,`RPC '${t}' stream ${s} transport opened.`),D.Qo())}),x(w,Ue.EventType.CLOSE,()=>{V||(V=!0,b(ht,`RPC '${t}' stream ${s} transport closed`),D.Ko())}),x(w,Ue.EventType.ERROR,N=>{V||(V=!0,Wn(ht,`RPC '${t}' stream ${s} transport errored:`,N),D.Ko(new O(P.UNAVAILABLE,"The operation could not be completed")))}),x(w,Ue.EventType.MESSAGE,N=>{var G;if(!V){const H=N.data[0];X(!!H);const K=H,ot=(K==null?void 0:K.error)||((G=K[0])===null||G===void 0?void 0:G.error);if(ot){b(ht,`RPC '${t}' stream ${s} received error:`,ot);const qt=ot.status;let gt=function(g){const _=Y[g];if(_!==void 0)return Jc(_)}(qt),E=ot.message;gt===void 0&&(gt=P.INTERNAL,E="Unknown error status: "+qt+" with message "+ot.message),V=!0,D.Ko(new O(gt,E)),w.close()}else b(ht,`RPC '${t}' stream ${s} received:`,H),D.Uo(H)}}),x(c,bo.STAT_EVENT,N=>{N.stat===Ur.PROXY?b(ht,`RPC '${t}' stream ${s} detected buffering proxy`):N.stat===Ur.NOPROXY&&b(ht,`RPC '${t}' stream ${s} detected no buffering proxy`)}),setTimeout(()=>{D.$o()},0),D}}function Nr(){return typeof document<"u"?document:null}/**
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
 */function Jn(n){return new Zc(n,!0)}/**
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
 */class da{constructor(t,e,i=1e3,s=1.5,o=6e4){this.Ti=t,this.timerId=e,this.Go=i,this.zo=s,this.jo=o,this.Ho=0,this.Jo=null,this.Yo=Date.now(),this.reset()}reset(){this.Ho=0}Zo(){this.Ho=this.jo}Xo(t){this.cancel();const e=Math.floor(this.Ho+this.e_()),i=Math.max(0,Date.now()-this.Yo),s=Math.max(0,e-i);s>0&&b("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.Ho} ms, delay with jitter: ${e} ms, last attempt: ${i} ms ago)`),this.Jo=this.Ti.enqueueAfterDelay(this.timerId,s,()=>(this.Yo=Date.now(),t())),this.Ho*=this.zo,this.Ho<this.Go&&(this.Ho=this.Go),this.Ho>this.jo&&(this.Ho=this.jo)}t_(){this.Jo!==null&&(this.Jo.skipDelay(),this.Jo=null)}cancel(){this.Jo!==null&&(this.Jo.cancel(),this.Jo=null)}e_(){return(Math.random()-.5)*this.Ho}}/**
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
 */const no="PersistentStream";class Hh{constructor(t,e,i,s,o,u,c,f){this.Ti=t,this.n_=i,this.r_=s,this.connection=o,this.authCredentialsProvider=u,this.appCheckCredentialsProvider=c,this.listener=f,this.state=0,this.i_=0,this.s_=null,this.o_=null,this.stream=null,this.__=0,this.a_=new da(t,e)}u_(){return this.state===1||this.state===5||this.c_()}c_(){return this.state===2||this.state===3}start(){this.__=0,this.state!==4?this.auth():this.l_()}async stop(){this.u_()&&await this.close(0)}h_(){this.state=0,this.a_.reset()}P_(){this.c_()&&this.s_===null&&(this.s_=this.Ti.enqueueAfterDelay(this.n_,6e4,()=>this.T_()))}I_(t){this.E_(),this.stream.send(t)}async T_(){if(this.c_())return this.close(0)}E_(){this.s_&&(this.s_.cancel(),this.s_=null)}d_(){this.o_&&(this.o_.cancel(),this.o_=null)}async close(t,e){this.E_(),this.d_(),this.a_.cancel(),this.i_++,t!==4?this.a_.reset():e&&e.code===P.RESOURCE_EXHAUSTED?(te(e.toString()),te("Using maximum backoff delay to prevent overloading the backend."),this.a_.Zo()):e&&e.code===P.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.A_(),this.stream.close(),this.stream=null),this.state=t,await this.listener.Lo(e)}A_(){}auth(){this.state=1;const t=this.R_(this.i_),e=this.i_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([i,s])=>{this.i_===e&&this.V_(i,s)},i=>{t(()=>{const s=new O(P.UNKNOWN,"Fetching auth token failed: "+i.message);return this.m_(s)})})}V_(t,e){const i=this.R_(this.i_);this.stream=this.f_(t,e),this.stream.xo(()=>{i(()=>this.listener.xo())}),this.stream.No(()=>{i(()=>(this.state=2,this.o_=this.Ti.enqueueAfterDelay(this.r_,1e4,()=>(this.c_()&&(this.state=3),Promise.resolve())),this.listener.No()))}),this.stream.Lo(s=>{i(()=>this.m_(s))}),this.stream.onMessage(s=>{i(()=>++this.__==1?this.g_(s):this.onNext(s))})}l_(){this.state=5,this.a_.Xo(async()=>{this.state=0,this.start()})}m_(t){return b(no,`close with error: ${t}`),this.stream=null,this.close(4,t)}R_(t){return e=>{this.Ti.enqueueAndForget(()=>this.i_===t?e():(b(no,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class Gh extends Hh{constructor(t,e,i,s,o,u){super(t,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",e,i,s,u),this.serializer=o}get b_(){return this.__>0}start(){this.lastStreamToken=void 0,super.start()}A_(){this.b_&&this.S_([])}f_(t,e){return this.connection.Wo("Write",t,e)}g_(t){return X(!!t.streamToken),this.lastStreamToken=t.streamToken,X(!t.writeResults||t.writeResults.length===0),this.listener.D_()}onNext(t){X(!!t.streamToken),this.lastStreamToken=t.streamToken,this.a_.reset();const e=ah(t.writeResults,t.commitTime),i=fe(t.commitTime);return this.listener.v_(i,e)}C_(){const t={};t.database=ih(this.serializer),this.I_(t)}S_(t){const e={streamToken:this.lastStreamToken,writes:t.map(i=>oh(this.serializer,i))};this.I_(e)}}/**
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
 */class Kh{}class Wh extends Kh{constructor(t,e,i,s){super(),this.authCredentials=t,this.appCheckCredentials=e,this.connection=i,this.serializer=s,this.F_=!1}M_(){if(this.F_)throw new O(P.FAILED_PRECONDITION,"The client has already been terminated.")}bo(t,e,i,s){return this.M_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,u])=>this.connection.bo(t,Gr(e,i),s,o,u)).catch(o=>{throw o.name==="FirebaseError"?(o.code===P.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new O(P.UNKNOWN,o.toString())})}Co(t,e,i,s,o){return this.M_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([u,c])=>this.connection.Co(t,Gr(e,i),s,u,c,o)).catch(u=>{throw u.name==="FirebaseError"?(u.code===P.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),u):new O(P.UNKNOWN,u.toString())})}terminate(){this.F_=!0,this.connection.terminate()}}class Qh{constructor(t,e){this.asyncQueue=t,this.onlineStateHandler=e,this.state="Unknown",this.x_=0,this.O_=null,this.N_=!0}B_(){this.x_===0&&(this.L_("Unknown"),this.O_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.O_=null,this.k_("Backend didn't respond within 10 seconds."),this.L_("Offline"),Promise.resolve())))}q_(t){this.state==="Online"?this.L_("Unknown"):(this.x_++,this.x_>=1&&(this.Q_(),this.k_(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.L_("Offline")))}set(t){this.Q_(),this.x_=0,t==="Online"&&(this.N_=!1),this.L_(t)}L_(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}k_(t){const e=`Could not reach Cloud Firestore backend. ${t}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.N_?(te(e),this.N_=!1):b("OnlineStateTracker",e)}Q_(){this.O_!==null&&(this.O_.cancel(),this.O_=null)}}/**
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
 */const tn="RemoteStore";class Xh{constructor(t,e,i,s,o){this.localStore=t,this.datastore=e,this.asyncQueue=i,this.remoteSyncer={},this.K_=[],this.U_=new Map,this.W_=new Set,this.G_=[],this.z_=o,this.z_.To(u=>{i.enqueueAndForget(async()=>{nn(this)&&(b(tn,"Restarting streams for network reachability change."),await async function(f){const m=$(f);m.W_.add(4),await en(m),m.j_.set("Unknown"),m.W_.delete(4),await Zn(m)}(this))})}),this.j_=new Qh(i,s)}}async function Zn(n){if(nn(n))for(const t of n.G_)await t(!0)}async function en(n){for(const t of n.G_)await t(!1)}function nn(n){return $(n).W_.size===0}async function pa(n,t,e){if(!Je(t))throw t;n.W_.add(1),await en(n),n.j_.set("Offline"),e||(e=()=>Lh(n.localStore)),n.asyncQueue.enqueueRetryable(async()=>{b(tn,"Retrying IndexedDB access"),await e(),n.W_.delete(1),await Zn(n)})}function ma(n,t){return t().catch(e=>pa(n,e,t))}async function tr(n){const t=$(n),e=$t(t);let i=t.K_.length>0?t.K_[t.K_.length-1].batchId:ni;for(;Yh(t);)try{const s=await Fh(t.localStore,i);if(s===null){t.K_.length===0&&e.P_();break}i=s.batchId,Jh(t,s)}catch(s){await pa(t,s)}ga(t)&&_a(t)}function Yh(n){return nn(n)&&n.K_.length<10}function Jh(n,t){n.K_.push(t);const e=$t(n);e.c_()&&e.b_&&e.S_(t.mutations)}function ga(n){return nn(n)&&!$t(n).u_()&&n.K_.length>0}function _a(n){$t(n).start()}async function Zh(n){$t(n).C_()}async function tf(n){const t=$t(n);for(const e of n.K_)t.S_(e.mutations)}async function ef(n,t,e){const i=n.K_.shift(),s=hi.from(i,t,e);await ma(n,()=>n.remoteSyncer.applySuccessfulWrite(s)),await tr(n)}async function nf(n,t){t&&$t(n).b_&&await async function(i,s){if(function(u){return Yc(u)&&u!==P.ABORTED}(s.code)){const o=i.K_.shift();$t(i).h_(),await ma(i,()=>i.remoteSyncer.rejectFailedWrite(o.batchId,s)),await tr(i)}}(n,t),ga(n)&&_a(n)}async function ro(n,t){const e=$(n);e.asyncQueue.verifyOperationInProgress(),b(tn,"RemoteStore received new credentials");const i=nn(e);e.W_.add(3),await en(e),i&&e.j_.set("Unknown"),await e.remoteSyncer.handleCredentialChange(t),e.W_.delete(3),await Zn(e)}async function rf(n,t){const e=$(n);t?(e.W_.delete(2),await Zn(e)):t||(e.W_.add(2),await en(e),e.j_.set("Unknown"))}function $t(n){return n.Y_||(n.Y_=function(e,i,s){const o=$(e);return o.M_(),new Gh(i,o.connection,o.authCredentials,o.appCheckCredentials,o.serializer,s)}(n.datastore,n.asyncQueue,{xo:()=>Promise.resolve(),No:Zh.bind(null,n),Lo:nf.bind(null,n),D_:tf.bind(null,n),v_:ef.bind(null,n)}),n.G_.push(async t=>{t?(n.Y_.h_(),await tr(n)):(await n.Y_.stop(),n.K_.length>0&&(b(tn,`Stopping write stream with ${n.K_.length} pending writes`),n.K_=[]))})),n.Y_}/**
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
 */class mi{constructor(t,e,i,s,o){this.asyncQueue=t,this.timerId=e,this.targetTimeMs=i,this.op=s,this.removalCallback=o,this.deferred=new Yt,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(u=>{})}get promise(){return this.deferred.promise}static createAndSchedule(t,e,i,s,o){const u=Date.now()+i,c=new mi(t,e,u,s,o);return c.start(i),c}start(t){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new O(P.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(t=>this.deferred.resolve(t))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function ya(n,t){if(te("AsyncQueue",`${t}: ${n}`),Je(n))return new O(P.UNAVAILABLE,`${t}: ${n}`);throw n}class sf{constructor(){this.queries=io(),this.onlineState="Unknown",this.ia=new Set}terminate(){(function(e,i){const s=$(e),o=s.queries;s.queries=io(),o.forEach((u,c)=>{for(const f of c.ta)f.onError(i)})})(this,new O(P.ABORTED,"Firestore shutting down"))}}function io(){return new re(n=>Xo(n),Qo)}function of(n){n.ia.forEach(t=>{t.next()})}var so,oo;(oo=so||(so={}))._a="default",oo.Cache="cache";const af="SyncEngine";class lf{constructor(t,e,i,s,o,u){this.localStore=t,this.remoteStore=e,this.eventManager=i,this.sharedClientState=s,this.currentUser=o,this.maxConcurrentLimboResolutions=u,this.La={},this.ka=new re(c=>Xo(c),Qo),this.qa=new Map,this.Qa=new Set,this.$a=new yt(k.comparator),this.Ka=new Map,this.Ua=new fi,this.Wa={},this.Ga=new Map,this.za=_e.Un(),this.onlineState="Unknown",this.ja=void 0}get isPrimaryClient(){return this.ja===!0}}async function uf(n,t,e){const i=df(n);try{const s=await function(u,c){const f=$(u),m=tt.now(),I=c.reduce((V,D)=>V.add(D.key),dt());let w,C;return f.persistence.runTransaction("Locally write mutations","readwrite",V=>{let D=$n(),x=dt();return f.ds.getEntries(V,I).next(N=>{D=N,D.forEach((G,H)=>{H.isValidDocument()||(x=x.add(G))})}).next(()=>f.localDocuments.getOverlayedDocuments(V,D)).next(N=>{w=N;const G=[];for(const H of c){const K=Kc(H,w.get(H.key).overlayedDocument);K!=null&&G.push(new ie(H.key,K,$o(K.value.mapValue),Vt.exists(!0)))}return f.mutationQueue.addMutationBatch(V,m,G,c)}).next(N=>{C=N;const G=N.applyToLocalDocumentSet(w,x);return f.documentOverlayCache.saveOverlays(V,N.batchId,G)})}).then(()=>({batchId:C.batchId,changes:Jo(w)}))}(i.localStore,t);i.sharedClientState.addPendingMutation(s.batchId),function(u,c,f){let m=u.Wa[u.currentUser.toKey()];m||(m=new yt(B)),m=m.insert(c,f),u.Wa[u.currentUser.toKey()]=m}(i,s.batchId,e),await er(i,s.changes),await tr(i.remoteStore)}catch(s){const o=ya(s,"Failed to persist write");e.reject(o)}}function ao(n,t,e){const i=$(n);if(i.isPrimaryClient&&e===0||!i.isPrimaryClient&&e===1){const s=[];i.ka.forEach((o,u)=>{const c=u.view.sa(t);c.snapshot&&s.push(c.snapshot)}),function(u,c){const f=$(u);f.onlineState=c;let m=!1;f.queries.forEach((I,w)=>{for(const C of w.ta)C.sa(c)&&(m=!0)}),m&&of(f)}(i.eventManager,t),s.length&&i.La.p_(s),i.onlineState=t,i.isPrimaryClient&&i.sharedClientState.setOnlineState(t)}}async function cf(n,t){const e=$(n),i=t.batch.batchId;try{const s=await Mh(e.localStore,t);va(e,i,null),Ea(e,i),e.sharedClientState.updateMutationState(i,"acknowledged"),await er(e,s)}catch(s){await ti(s)}}async function hf(n,t,e){const i=$(n);try{const s=await function(u,c){const f=$(u);return f.persistence.runTransaction("Reject batch","readwrite-primary",m=>{let I;return f.mutationQueue.lookupMutationBatch(m,c).next(w=>(X(w!==null),I=w.keys(),f.mutationQueue.removeMutationBatch(m,w))).next(()=>f.mutationQueue.performConsistencyCheck(m)).next(()=>f.documentOverlayCache.removeOverlaysForBatchId(m,I,c)).next(()=>f.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(m,I)).next(()=>f.localDocuments.getDocuments(m,I))})}(i.localStore,t);va(i,t,e),Ea(i,t),i.sharedClientState.updateMutationState(t,"rejected",e),await er(i,s)}catch(s){await ti(s)}}function Ea(n,t){(n.Ga.get(t)||[]).forEach(e=>{e.resolve()}),n.Ga.delete(t)}function va(n,t,e){const i=$(n);let s=i.Wa[i.currentUser.toKey()];if(s){const o=s.get(t);o&&(e?o.reject(e):o.resolve(),s=s.remove(t)),i.Wa[i.currentUser.toKey()]=s}}async function er(n,t,e){const i=$(n),s=[],o=[],u=[];i.ka.isEmpty()||(i.ka.forEach((c,f)=>{u.push(i.Ha(f,t,e).then(m=>{var I;if((m||e)&&i.isPrimaryClient){const w=m?!m.fromCache:(I=void 0)===null||I===void 0?void 0:I.current;i.sharedClientState.updateQueryState(f.targetId,w?"current":"not-current")}if(m){s.push(m);const w=pi.Yi(f.targetId,m);o.push(w)}}))}),await Promise.all(u),i.La.p_(s),await async function(f,m){const I=$(f);try{await I.persistence.runTransaction("notifyLocalViewChanges","readwrite",w=>R.forEach(m,C=>R.forEach(C.Hi,V=>I.persistence.referenceDelegate.addReference(w,C.targetId,V)).next(()=>R.forEach(C.Ji,V=>I.persistence.referenceDelegate.removeReference(w,C.targetId,V)))))}catch(w){if(!Je(w))throw w;b(Oh,"Failed to update sequence numbers: "+w)}for(const w of m){const C=w.targetId;if(!w.fromCache){const V=I.Ts.get(C),D=V.snapshotVersion,x=V.withLastLimboFreeSnapshotVersion(D);I.Ts=I.Ts.insert(C,x)}}}(i.localStore,o))}async function ff(n,t){const e=$(n);if(!e.currentUser.isEqual(t)){b(af,"User change. New user:",t.toKey());const i=await fa(e.localStore,t);e.currentUser=t,function(o,u){o.Ga.forEach(c=>{c.forEach(f=>{f.reject(new O(P.CANCELLED,u))})}),o.Ga.clear()}(e,"'waitForPendingWrites' promise is rejected due to a user change."),e.sharedClientState.handleUserChange(t,i.removedBatchIds,i.addedBatchIds),await er(e,i.Rs)}}function df(n){const t=$(n);return t.remoteStore.remoteSyncer.applySuccessfulWrite=cf.bind(null,t),t.remoteStore.remoteSyncer.rejectFailedWrite=hf.bind(null,t),t}class Gn{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(t){this.serializer=Jn(t.databaseInfo.databaseId),this.sharedClientState=this.Za(t),this.persistence=this.Xa(t),await this.persistence.start(),this.localStore=this.eu(t),this.gcScheduler=this.tu(t,this.localStore),this.indexBackfillerScheduler=this.nu(t,this.localStore)}tu(t,e){return null}nu(t,e){return null}eu(t){return xh(this.persistence,new Nh,t.initialUser,this.serializer)}Xa(t){return new ha(di.ri,this.serializer)}Za(t){return new Uh}async terminate(){var t,e;(t=this.gcScheduler)===null||t===void 0||t.stop(),(e=this.indexBackfillerScheduler)===null||e===void 0||e.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Gn.provider={build:()=>new Gn};class pf extends Gn{constructor(t){super(),this.cacheSizeBytes=t}tu(t,e){X(this.persistence.referenceDelegate instanceof Hn);const i=this.persistence.referenceDelegate.garbageCollector;return new _h(i,t.asyncQueue,e)}Xa(t){const e=this.cacheSizeBytes!==void 0?_t.withCacheSize(this.cacheSizeBytes):_t.DEFAULT;return new ha(i=>Hn.ri(i,e),this.serializer)}}class Qr{async initialize(t,e){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(e),this.remoteStore=this.createRemoteStore(e),this.eventManager=this.createEventManager(e),this.syncEngine=this.createSyncEngine(e,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=i=>ao(this.syncEngine,i,1),this.remoteStore.remoteSyncer.handleCredentialChange=ff.bind(null,this.syncEngine),await rf(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return function(){return new sf}()}createDatastore(t){const e=Jn(t.databaseInfo.databaseId),i=function(o){return new qh(o)}(t.databaseInfo);return function(o,u,c,f){return new Wh(o,u,c,f)}(t.authCredentials,t.appCheckCredentials,i,e)}createRemoteStore(t){return function(i,s,o,u,c){return new Xh(i,s,o,u,c)}(this.localStore,this.datastore,t.asyncQueue,e=>ao(this.syncEngine,e,0),function(){return eo.D()?new eo:new Bh}())}createSyncEngine(t,e){return function(s,o,u,c,f,m,I){const w=new lf(s,o,u,c,f,m);return I&&(w.ja=!0),w}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,e)}async terminate(){var t,e;await async function(s){const o=$(s);b(tn,"RemoteStore shutting down."),o.W_.add(5),await en(o),o.z_.shutdown(),o.j_.set("Unknown")}(this.remoteStore),(t=this.datastore)===null||t===void 0||t.terminate(),(e=this.eventManager)===null||e===void 0||e.terminate()}}Qr.provider={build:()=>new Qr};/**
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
 */const zt="FirestoreClient";class mf{constructor(t,e,i,s,o){this.authCredentials=t,this.appCheckCredentials=e,this.asyncQueue=i,this.databaseInfo=s,this.user=ft.UNAUTHENTICATED,this.clientId=Oo.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=o,this.authCredentials.start(i,async u=>{b(zt,"Received user=",u.uid),await this.authCredentialListener(u),this.user=u}),this.appCheckCredentials.start(i,u=>(b(zt,"Received new app check token=",u),this.appCheckCredentialListener(u,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}terminate(){this.asyncQueue.enterRestrictedMode();const t=new Yt;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(e){const i=ya(e,"Failed to shutdown persistence");t.reject(i)}}),t.promise}}async function Or(n,t){n.asyncQueue.verifyOperationInProgress(),b(zt,"Initializing OfflineComponentProvider");const e=n.configuration;await t.initialize(e);let i=e.initialUser;n.setCredentialChangeListener(async s=>{i.isEqual(s)||(await fa(t.localStore,s),i=s)}),t.persistence.setDatabaseDeletedListener(()=>n.terminate()),n._offlineComponents=t}async function lo(n,t){n.asyncQueue.verifyOperationInProgress();const e=await gf(n);b(zt,"Initializing OnlineComponentProvider"),await t.initialize(e,n.configuration),n.setCredentialChangeListener(i=>ro(t.remoteStore,i)),n.setAppCheckTokenChangeListener((i,s)=>ro(t.remoteStore,s)),n._onlineComponents=t}async function gf(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){b(zt,"Using user provided OfflineComponentProvider");try{await Or(n,n._uninitializedComponentsProvider._offline)}catch(t){const e=t;if(!function(s){return s.name==="FirebaseError"?s.code===P.FAILED_PRECONDITION||s.code===P.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11}(e))throw e;Wn("Error using user provided cache. Falling back to memory cache: "+e),await Or(n,new Gn)}}else b(zt,"Using default OfflineComponentProvider"),await Or(n,new pf(void 0));return n._offlineComponents}async function _f(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(b(zt,"Using user provided OnlineComponentProvider"),await lo(n,n._uninitializedComponentsProvider._online)):(b(zt,"Using default OnlineComponentProvider"),await lo(n,new Qr))),n._onlineComponents}function yf(n){return _f(n).then(t=>t.syncEngine)}/**
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
 */function Ta(n){const t={};return n.timeoutSeconds!==void 0&&(t.timeoutSeconds=n.timeoutSeconds),t}/**
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
 */const uo=new Map;/**
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
 */function Ia(n,t,e){if(!e)throw new O(P.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${t}.`)}function Ef(n,t,e,i){if(t===!0&&i===!0)throw new O(P.INVALID_ARGUMENT,`${n} and ${e} cannot be used together.`)}function co(n){if(!k.isDocumentKey(n))throw new O(P.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function ho(n){if(k.isDocumentKey(n))throw new O(P.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function gi(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const t=function(i){return i.constructor?i.constructor.name:null}(n);return t?`a custom ${t} object`:"an object"}}return typeof n=="function"?"a function":M()}function Aa(n,t){if("_delegate"in n&&(n=n._delegate),!(n instanceof t)){if(t.name===n.constructor.name)throw new O(P.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const e=gi(n);throw new O(P.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${e}`)}}return n}/**
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
 */const wa="firestore.googleapis.com",fo=!0;class po{constructor(t){var e,i;if(t.host===void 0){if(t.ssl!==void 0)throw new O(P.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=wa,this.ssl=fo}else this.host=t.host,this.ssl=(e=t.ssl)!==null&&e!==void 0?e:fo;if(this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,this.localCache=t.localCache,t.cacheSizeBytes===void 0)this.cacheSizeBytes=ca;else{if(t.cacheSizeBytes!==-1&&t.cacheSizeBytes<mh)throw new O(P.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}Ef("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:t.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Ta((i=t.experimentalLongPollingOptions)!==null&&i!==void 0?i:{}),function(o){if(o.timeoutSeconds!==void 0){if(isNaN(o.timeoutSeconds))throw new O(P.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (must not be NaN)`);if(o.timeoutSeconds<5)throw new O(P.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (minimum allowed value is 5)`);if(o.timeoutSeconds>30)throw new O(P.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!t.useFetchStreams}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&function(i,s){return i.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,t.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}class nr{constructor(t,e,i,s){this._authCredentials=t,this._appCheckCredentials=e,this._databaseId=i,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new po({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new O(P.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(t){if(this._settingsFrozen)throw new O(P.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new po(t),this._emulatorOptions=t.emulatorOptions||{},t.credentials!==void 0&&(this._authCredentials=function(i){if(!i)return new Yu;switch(i.type){case"firstParty":return new ec(i.sessionIndex||"0",i.iamToken||null,i.authTokenFactory||null);case"provider":return i.client;default:throw new O(P.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const i=uo.get(e);i&&(b("ComponentProvider","Removing Datastore"),uo.delete(e),i.terminate())}(this),Promise.resolve()}}function vf(n,t,e,i={}){var s;const o=(n=Aa(n,nr))._getSettings(),u=Object.assign(Object.assign({},o),{emulatorOptions:n._getEmulatorOptions()}),c=`${t}:${e}`;o.host!==wa&&o.host!==c&&Wn("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const f=Object.assign(Object.assign({},o),{host:c,ssl:!1,emulatorOptions:i});if(!On(f,u)&&(n._setSettings(f),i.mockUserToken)){let m,I;if(typeof i.mockUserToken=="string")m=i.mockUserToken,I=ft.MOCK_USER;else{m=Sl(i.mockUserToken,(s=n._app)===null||s===void 0?void 0:s.options.projectId);const w=i.mockUserToken.sub||i.mockUserToken.user_id;if(!w)throw new O(P.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");I=new ft(w)}n._authCredentials=new Ju(new No(m,I))}}/**
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
 */class _i{constructor(t,e,i){this.converter=e,this._query=i,this.type="query",this.firestore=t}withConverter(t){return new _i(this.firestore,t,this._query)}}class Dt{constructor(t,e,i){this.converter=e,this._key=i,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Ut(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new Dt(this.firestore,t,this._key)}}class Ut extends _i{constructor(t,e,i){super(t,e,Dc(i)),this._path=i,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new Dt(this.firestore,null,new k(t))}withConverter(t){return new Ut(this.firestore,t,this._path)}}function Tf(n,t,...e){if(n=qe(n),Ia("collection","path",t),n instanceof nr){const i=Q.fromString(t,...e);return ho(i),new Ut(n,null,i)}{if(!(n instanceof Dt||n instanceof Ut))throw new O(P.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const i=n._path.child(Q.fromString(t,...e));return ho(i),new Ut(n.firestore,null,i)}}function If(n,t,...e){if(n=qe(n),arguments.length===1&&(t=Oo.newId()),Ia("doc","path",t),n instanceof nr){const i=Q.fromString(t,...e);return co(i),new Dt(n,null,new k(i))}{if(!(n instanceof Dt||n instanceof Ut))throw new O(P.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const i=n._path.child(Q.fromString(t,...e));return co(i),new Dt(n.firestore,n instanceof Ut?n.converter:null,new k(i))}}/**
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
 */const mo="AsyncQueue";class go{constructor(t=Promise.resolve()){this.Vu=[],this.mu=!1,this.fu=[],this.gu=null,this.pu=!1,this.yu=!1,this.wu=[],this.a_=new da(this,"async_queue_retry"),this.bu=()=>{const i=Nr();i&&b(mo,"Visibility state changed to "+i.visibilityState),this.a_.t_()},this.Su=t;const e=Nr();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.bu)}get isShuttingDown(){return this.mu}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.Du(),this.vu(t)}enterRestrictedMode(t){if(!this.mu){this.mu=!0,this.yu=t||!1;const e=Nr();e&&typeof e.removeEventListener=="function"&&e.removeEventListener("visibilitychange",this.bu)}}enqueue(t){if(this.Du(),this.mu)return new Promise(()=>{});const e=new Yt;return this.vu(()=>this.mu&&this.yu?Promise.resolve():(t().then(e.resolve,e.reject),e.promise)).then(()=>e.promise)}enqueueRetryable(t){this.enqueueAndForget(()=>(this.Vu.push(t),this.Cu()))}async Cu(){if(this.Vu.length!==0){try{await this.Vu[0](),this.Vu.shift(),this.a_.reset()}catch(t){if(!Je(t))throw t;b(mo,"Operation failed with retryable error: "+t)}this.Vu.length>0&&this.a_.Xo(()=>this.Cu())}}vu(t){const e=this.Su.then(()=>(this.pu=!0,t().catch(i=>{this.gu=i,this.pu=!1;const s=function(u){let c=u.message||"";return u.stack&&(c=u.stack.includes(u.message)?u.stack:u.message+`
`+u.stack),c}(i);throw te("INTERNAL UNHANDLED ERROR: ",s),i}).then(i=>(this.pu=!1,i))));return this.Su=e,e}enqueueAfterDelay(t,e,i){this.Du(),this.wu.indexOf(t)>-1&&(e=0);const s=mi.createAndSchedule(this,t,e,i,o=>this.Fu(o));return this.fu.push(s),s}Du(){this.gu&&M()}verifyOperationInProgress(){}async Mu(){let t;do t=this.Su,await t;while(t!==this.Su)}xu(t){for(const e of this.fu)if(e.timerId===t)return!0;return!1}Ou(t){return this.Mu().then(()=>{this.fu.sort((e,i)=>e.targetTimeMs-i.targetTimeMs);for(const e of this.fu)if(e.skipDelay(),t!=="all"&&e.timerId===t)break;return this.Mu()})}Nu(t){this.wu.push(t)}Fu(t){const e=this.fu.indexOf(t);this.fu.splice(e,1)}}class Ra extends nr{constructor(t,e,i,s){super(t,e,i,s),this.type="firestore",this._queue=new go,this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const t=this._firestoreClient.terminate();this._queue=new go(t),this._firestoreClient=void 0,await t}}}function Af(n,t){const e=typeof n=="object"?n:Fu(),i=typeof n=="string"?n:Fn,s=Ou(e,"firestore").getImmediate({identifier:i});if(!s._initialized){const o=Pl("firestore");o&&vf(s,...o)}return s}function wf(n){if(n._terminated)throw new O(P.FAILED_PRECONDITION,"The client has already been terminated.");return n._firestoreClient||Rf(n),n._firestoreClient}function Rf(n){var t,e,i;const s=n._freezeSettings(),o=function(c,f,m,I){return new gc(c,f,m,I.host,I.ssl,I.experimentalForceLongPolling,I.experimentalAutoDetectLongPolling,Ta(I.experimentalLongPollingOptions),I.useFetchStreams)}(n._databaseId,((t=n._app)===null||t===void 0?void 0:t.options.appId)||"",n._persistenceKey,s);n._componentsProvider||!((e=s.localCache)===null||e===void 0)&&e._offlineComponentProvider&&(!((i=s.localCache)===null||i===void 0)&&i._onlineComponentProvider)&&(n._componentsProvider={_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider}),n._firestoreClient=new mf(n._authCredentials,n._appCheckCredentials,n._queue,o,n._componentsProvider&&function(c){const f=c==null?void 0:c._online.build();return{_offline:c==null?void 0:c._offline.build(f),_online:f}}(n._componentsProvider))}/**
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
 */class Ye{constructor(t){this._byteString=t}static fromBase64String(t){try{return new Ye(Rt.fromBase64String(t))}catch(e){throw new O(P.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+e)}}static fromUint8Array(t){return new Ye(Rt.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}}/**
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
 */class Pa{constructor(...t){for(let e=0;e<t.length;++e)if(t[e].length===0)throw new O(P.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new it(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}/**
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
 */class Ca{constructor(t){this._methodName=t}}/**
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
 */class Sa{constructor(t,e){if(!isFinite(t)||t<-90||t>90)throw new O(P.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(e)||e<-180||e>180)throw new O(P.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+e);this._lat=t,this._long=e}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(t){return B(this._lat,t._lat)||B(this._long,t._long)}}/**
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
 */class ba{constructor(t){this._values=(t||[]).map(e=>e)}toArray(){return this._values.map(t=>t)}isEqual(t){return function(i,s){if(i.length!==s.length)return!1;for(let o=0;o<i.length;++o)if(i[o]!==s[o])return!1;return!0}(this._values,t._values)}}/**
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
 */const Pf=/^__.*__$/;class Cf{constructor(t,e,i){this.data=t,this.fieldMask=e,this.fieldTransforms=i}toMutation(t,e){return this.fieldMask!==null?new ie(t,this.data,this.fieldMask,e,this.fieldTransforms):new Ze(t,this.data,e,this.fieldTransforms)}}function Va(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw M()}}class yi{constructor(t,e,i,s,o,u){this.settings=t,this.databaseId=e,this.serializer=i,this.ignoreUndefinedProperties=s,o===void 0&&this.Bu(),this.fieldTransforms=o||[],this.fieldMask=u||[]}get path(){return this.settings.path}get Lu(){return this.settings.Lu}ku(t){return new yi(Object.assign(Object.assign({},this.settings),t),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}qu(t){var e;const i=(e=this.path)===null||e===void 0?void 0:e.child(t),s=this.ku({path:i,Qu:!1});return s.$u(t),s}Ku(t){var e;const i=(e=this.path)===null||e===void 0?void 0:e.child(t),s=this.ku({path:i,Qu:!1});return s.Bu(),s}Uu(t){return this.ku({path:void 0,Qu:!0})}Wu(t){return Kn(t,this.settings.methodName,this.settings.Gu||!1,this.path,this.settings.zu)}contains(t){return this.fieldMask.find(e=>t.isPrefixOf(e))!==void 0||this.fieldTransforms.find(e=>t.isPrefixOf(e.field))!==void 0}Bu(){if(this.path)for(let t=0;t<this.path.length;t++)this.$u(this.path.get(t))}$u(t){if(t.length===0)throw this.Wu("Document fields must not be empty");if(Va(this.Lu)&&Pf.test(t))throw this.Wu('Document fields cannot begin and end with "__"')}}class Sf{constructor(t,e,i){this.databaseId=t,this.ignoreUndefinedProperties=e,this.serializer=i||Jn(t)}ju(t,e,i,s=!1){return new yi({Lu:t,methodName:e,zu:i,path:it.emptyPath(),Qu:!1,Gu:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function bf(n){const t=n._freezeSettings(),e=Jn(n._databaseId);return new Sf(n._databaseId,!!t.ignoreUndefinedProperties,e)}function Vf(n,t,e,i,s,o={}){const u=n.ju(o.merge||o.mergeFields?2:0,t,e,s);ka("Data must be an object, but it was:",u,i);const c=Na(i,u);let f,m;if(o.merge)f=new At(u.fieldMask),m=u.fieldTransforms;else if(o.mergeFields){const I=[];for(const w of o.mergeFields){const C=Df(t,w,e);if(!u.contains(C))throw new O(P.INVALID_ARGUMENT,`Field '${C}' is specified in your field mask but missing from your input data.`);kf(I,C)||I.push(C)}f=new At(I),m=u.fieldTransforms.filter(w=>f.covers(w.field))}else f=null,m=u.fieldTransforms;return new Cf(new It(c),f,m)}function Da(n,t){if(Oa(n=qe(n)))return ka("Unsupported field value:",t,n),Na(n,t);if(n instanceof Ca)return function(i,s){if(!Va(s.Lu))throw s.Wu(`${i._methodName}() can only be used with update() and set()`);if(!s.path)throw s.Wu(`${i._methodName}() is not currently supported inside arrays`);const o=i._toFieldTransform(s);o&&s.fieldTransforms.push(o)}(n,t),null;if(n===void 0&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),n instanceof Array){if(t.settings.Qu&&t.Lu!==4)throw t.Wu("Nested arrays are not supported");return function(i,s){const o=[];let u=0;for(const c of i){let f=Da(c,s.Uu(u));f==null&&(f={nullValue:"NULL_VALUE"}),o.push(f),u++}return{arrayValue:{values:o}}}(n,t)}return function(i,s){if((i=qe(i))===null)return{nullValue:"NULL_VALUE"};if(typeof i=="number")return jc(s.serializer,i);if(typeof i=="boolean")return{booleanValue:i};if(typeof i=="string")return{stringValue:i};if(i instanceof Date){const o=tt.fromDate(i);return{timestampValue:Hr(s.serializer,o)}}if(i instanceof tt){const o=new tt(i.seconds,1e3*Math.floor(i.nanoseconds/1e3));return{timestampValue:Hr(s.serializer,o)}}if(i instanceof Sa)return{geoPointValue:{latitude:i.latitude,longitude:i.longitude}};if(i instanceof Ye)return{bytesValue:th(s.serializer,i._byteString)};if(i instanceof Dt){const o=s.databaseId,u=i.firestore._databaseId;if(!u.isEqual(o))throw s.Wu(`Document reference is for database ${u.projectId}/${u.database} but should be for database ${o.projectId}/${o.database}`);return{referenceValue:la(i.firestore._databaseId||s.databaseId,i._key.path)}}if(i instanceof ba)return function(u,c){return{mapValue:{fields:{[Bo]:{stringValue:jo},[Br]:{arrayValue:{values:u.toArray().map(m=>{if(typeof m!="number")throw c.Wu("VectorValues must only contain numeric values.");return ci(c.serializer,m)})}}}}}}(i,s);throw s.Wu(`Unsupported field value: ${gi(i)}`)}(n,t)}function Na(n,t){const e={};return xo(n)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):ve(n,(i,s)=>{const o=Da(s,t.qu(i));o!=null&&(e[i]=o)}),{mapValue:{fields:e}}}function Oa(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof tt||n instanceof Sa||n instanceof Ye||n instanceof Dt||n instanceof Ca||n instanceof ba)}function ka(n,t,e){if(!Oa(e)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(e)){const i=gi(e);throw i==="an object"?t.Wu(n+" a custom object"):t.Wu(n+" "+i)}}function Df(n,t,e){if((t=qe(t))instanceof Pa)return t._internalPath;if(typeof t=="string")return Of(n,t);throw Kn("Field path arguments must be of type string or ",n,!1,void 0,e)}const Nf=new RegExp("[~\\*/\\[\\]]");function Of(n,t,e){if(t.search(Nf)>=0)throw Kn(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,e);try{return new Pa(...t.split("."))._internalPath}catch{throw Kn(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,e)}}function Kn(n,t,e,i,s){const o=i&&!i.isEmpty(),u=s!==void 0;let c=`Function ${t}() called with invalid data`;e&&(c+=" (via `toFirestore()`)"),c+=". ";let f="";return(o||u)&&(f+=" (found",o&&(f+=` in field ${i}`),u&&(f+=` in document ${s}`),f+=")"),new O(P.INVALID_ARGUMENT,c+n+f)}function kf(n,t){return n.some(e=>e.isEqual(t))}/**
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
 */function xf(n,t,e){let i;return i=n?n.toFirestore(t):t,i}function Mf(n,t){const e=Aa(n.firestore,Ra),i=If(n),s=xf(n.converter,t);return Lf(e,[Vf(bf(n.firestore),"addDoc",i._key,s,n.converter!==null,{}).toMutation(i._key,Vt.exists(!1))]).then(()=>i)}function Lf(n,t){return function(i,s){const o=new Yt;return i.asyncQueue.enqueueAndForget(async()=>uf(await yf(i),s,o)),o.promise}(wf(n),t)}(function(t,e=!0){(function(s){Ee=s})(Lu),xn(new He("firestore",(i,{instanceIdentifier:s,options:o})=>{const u=i.getProvider("app").getImmediate(),c=new Ra(new Zu(i.getProvider("auth-internal")),new nc(u,i.getProvider("app-check-internal")),function(m,I){if(!Object.prototype.hasOwnProperty.apply(m.options,["projectId"]))throw new O(P.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Un(m.options.projectId,I)}(u,s),u);return o=Object.assign({useFetchStreams:e},o),c._setSettings(o),c},"PUBLIC").setMultipleInstances(!0)),he(Vs,Ds,t),he(Vs,Ds,"esm2017")})();const Ff={apiKey:"AIzaSyAg-sf9VIs25jffrhgCEcWt1Dw5vY-_8Ls",authDomain:"form-data-aafd2.firebaseapp.com",projectId:"form-data-aafd2",storageBucket:"form-data-aafd2.firebasestorage.app",messagingSenderId:"1374450216",appId:"1:1374450216:web:458e78cefe9fe8abeb7b1d",measurementId:"G-G7C7XYGG31"},Uf=wo(Ff),Bf=Af(Uf);document.getElementById("formulario").addEventListener("submit",async n=>{n.preventDefault();let t=document.getElementById("name"),e=document.getElementById("nameError");t.value.trim()===""?(e.textContent="El nombre es obligatorio",e.classList.add("error-message")):(e.textContent="",e.classList.remove("error-message"));let i=document.getElementById("email"),s=document.getElementById("emailError");/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(i.value)?(s.textContent="",s.classList.remove("error-message")):(s.textContent="el correo el obligatorio",s.classList.add("error-message"));let u=document.getElementById("password"),c=document.getElementById("passwordError");if(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&#.$($)$-$_])[A-Za-z\d$@$!%*?&#.$($)$-$_]{8,15}$/.test(u.value)?(c.textContent="",c.classList.remove("error-message")):(c.textContent="La contraseña debe tener al menos 8 caracteres, números, mayúsculas y minúsculas y caracteres especiales",c.classList.add("error-message")),!e.textContent&&!s.textContent&&!c.textContent){try{const m=await Mf(Tf(Bf,"users"),{name:t.value,email:i.value,password:u.value});console.log("Document written with ID: ",m.id)}catch(m){console.error("Error adding document: ",m)}alert("Formulario enviado"),document.getElementById("formulario").reset()}});
