(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9015],{59739:function(e,n,t){"use strict";var r=t(56669);function o(){}function i(){}i.resetWarningCache=o,e.exports=function(){function e(e,n,t,o,i,c){if(c!==r){var u=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw u.name="Invariant Violation",u}}function n(){return e}e.isRequired=e;var t={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:n,element:e,elementType:e,instanceOf:n,node:e,objectOf:n,oneOf:n,oneOfType:n,shape:n,exact:n,checkPropTypes:i,resetWarningCache:o};return t.PropTypes=t,t}},47329:function(e,n,t){e.exports=t(59739)()},56669:function(e){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},44152:function(e,n,t){"use strict";t.d(n,{r:function(){return s}});var r=t(82684);const o=e=>{let n;const t=new Set,r=(e,r)=>{const o="function"===typeof e?e(n):e;if(o!==n){const e=n;n=r?o:Object.assign({},n,o),t.forEach((t=>t(n,e)))}},o=()=>n,i={setState:r,getState:o,subscribe:e=>(t.add(e),()=>t.delete(e)),destroy:()=>t.clear()};return n=e(r,o,i),i};var i=t(81550);const{useSyncExternalStoreWithSelector:c}=i;const u=e=>{const n="function"===typeof e?(e=>e?o(e):o)(e):e,t=(e,t)=>function(e,n=e.getState,t){const o=c(e.subscribe,e.getState,e.getServerState||e.getState,n,t);return(0,r.useDebugValue)(o),o}(n,e,t);return Object.assign(t,n),t};var a=e=>e?u(e):u;const s=e=>{const n=a((()=>e)),t=(Object.keys(e),(e,t)=>{n.setState((n=>{return{[e]:(r=n[e],o=t,"function"==typeof o?o(r):o)};var r,o}))});return{useGlobalState:e=>{const o=(0,r.useCallback)((n=>n[e]),[e]);return[n(o),(0,r.useCallback)((n=>t(e,n)),[e])]},getGlobalState:e=>n.getState()[e],setGlobalState:t,subscribe:(e,t)=>{n.subscribe(((n,r)=>{n[e]!==r[e]&&t(n[e])}))}}}},1589:function(e,n,t){"use strict";var r=t(82684);var o="function"===typeof Object.is?Object.is:function(e,n){return e===n&&(0!==e||1/e===1/n)||e!==e&&n!==n},i=r.useState,c=r.useEffect,u=r.useLayoutEffect,a=r.useDebugValue;function s(e){var n=e.getSnapshot;e=e.value;try{var t=n();return!o(e,t)}catch(r){return!0}}var d="undefined"===typeof window||"undefined"===typeof window.document||"undefined"===typeof window.document.createElement?function(e,n){return n()}:function(e,n){var t=n(),r=i({inst:{value:t,getSnapshot:n}}),o=r[0].inst,d=r[1];return u((function(){o.value=t,o.getSnapshot=n,s(o)&&d({inst:o})}),[e,t,n]),c((function(){return s(o)&&d({inst:o}),e((function(){s(o)&&d({inst:o})}))}),[e]),a(t),t};n.useSyncExternalStore=void 0!==r.useSyncExternalStore?r.useSyncExternalStore:d},73847:function(e,n,t){"use strict";var r=t(82684),o=t(48216);var i="function"===typeof Object.is?Object.is:function(e,n){return e===n&&(0!==e||1/e===1/n)||e!==e&&n!==n},c=o.useSyncExternalStore,u=r.useRef,a=r.useEffect,s=r.useMemo,d=r.useDebugValue;n.useSyncExternalStoreWithSelector=function(e,n,t,r,o){var l=u(null);if(null===l.current){var f={hasValue:!1,value:null};l.current=f}else f=l.current;l=s((function(){function e(e){if(!a){if(a=!0,c=e,e=r(e),void 0!==o&&f.hasValue){var n=f.value;if(o(n,e))return u=n}return u=e}if(n=u,i(c,e))return n;var t=r(e);return void 0!==o&&o(n,t)?n:(c=e,u=t)}var c,u,a=!1,s=void 0===t?null:t;return[function(){return e(n())},null===s?void 0:function(){return e(s())}]}),[n,t,r,o]);var p=c(e,l[0],l[1]);return a((function(){f.hasValue=!0,f.value=p}),[p]),d(p),p}},48216:function(e,n,t){"use strict";e.exports=t(1589)},81550:function(e,n,t){"use strict";e.exports=t(73847)},55283:function(e,n,t){"use strict";t.d(n,{HC:function(){return P},HS:function(){return m},IN:function(){return f},Kf:function(){return g},Nk:function(){return S},PB:function(){return T},PY:function(){return A},WC:function(){return p},fk:function(){return _},gE:function(){return E},j1:function(){return x},jv:function(){return v},nz:function(){return O},oh:function(){return l},qn:function(){return b},t1:function(){return R},u2:function(){return h},y9:function(){return y}});var r=t(38626),o=t(44897),i=t(44425),c=t(42631),u=t(8059),a=t(70515),s=t(47041),d=t(91437),l=68,f=1.5*a.iI,p=3*a.iI;function h(e){var n=u.eW;return i.tf.CALLBACK===e?n=u.J:i.tf.CHART===e||i.tf.CONDITIONAL===e?n=u.Hv:i.tf.CUSTOM===e?n=u.AK:i.tf.DATA_EXPORTER===e?n=u.Sr:i.tf.DATA_LOADER===e?n=u.R2:i.tf.DBT===e?n=u.J:i.tf.EXTENSION===e?n=u.FI:i.tf.GLOBAL_DATA_PRODUCT===e?n=u.yr:i.tf.SCRATCHPAD===e?n=u.Hv:i.tf.SENSOR===e?n=u.rK:i.tf.MARKDOWN===e?n=u.RK:i.tf.TRANSFORMER===e&&(n=u.eW),n}function b(e,n){var t,r,c=((null===n||void 0===n||null===(t=n.theme)||void 0===t?void 0:t.borders)||o.Z.borders).light,u=((null===n||void 0===n||null===(r=n.theme)||void 0===r?void 0:r.monotone)||o.Z.monotone).grey500,a=n||{},s=a.blockColor,d=a.isSelected,l=a.theme;return d?c=(l||o.Z).content.active:i.tf.TRANSFORMER===e||s===i.Lq.PURPLE?(c=(l||o.Z).accent.purple,u=(l||o.Z).accent.purpleLight):i.tf.DATA_EXPORTER===e||s===i.Lq.YELLOW?(c=(l||o.Z).accent.yellow,u=(l||o.Z).accent.yellowLight):i.tf.DATA_LOADER===e||s===i.Lq.BLUE?(c=(l||o.Z).accent.blue,u=(l||o.Z).accent.blueLight):i.tf.MARKDOWN===e?(c=(l||o.Z).accent.sky,u=(l||o.Z).accent.skyLight):i.tf.SENSOR===e||s===i.Lq.PINK?(c=(l||o.Z).accent.pink,u=(l||o.Z).accent.pinkLight):i.tf.DBT===e?(c=(l||o.Z).accent.dbt,u=(l||o.Z).accent.dbtLight):i.tf.EXTENSION===e||s===i.Lq.TEAL?(c=((null===l||void 0===l?void 0:l.accent)||o.Z.accent).teal,u=((null===l||void 0===l?void 0:l.accent)||o.Z.accent).tealLight):i.tf.CALLBACK===e?(c=((null===l||void 0===l?void 0:l.accent)||o.Z.accent).rose,u=((null===l||void 0===l?void 0:l.accent)||o.Z.accent).roseLight):i.tf.CONDITIONAL===e||i.tf.SCRATCHPAD===e||s===i.Lq.GREY||i.tf.CUSTOM===e&&!s?(c=(l||o.Z).content.default,u=(l||o.Z).accent.contentDefaultTransparent):i.tf.GLOBAL_DATA_PRODUCT!==e||s||(c=(l||o.Z).monotone.white,u=(l||o.Z).monotone.whiteTransparent),{accent:c,accentLight:u}}var g=(0,r.css)([""," "," "," "," "," "," ",""],(0,d.eR)(),(function(e){return!e.selected&&!e.hasError&&"\n    border-color: ".concat(b(e.blockType,e).accentLight,";\n  ")}),(function(e){return e.selected&&!e.hasError&&"\n    border-color: ".concat(b(e.blockType,e).accent,";\n  ")}),(function(e){return!e.selected&&e.hasError&&"\n    border-color: ".concat((e.theme.accent||o.Z.accent).negativeTransparent,";\n  ")}),(function(e){return e.selected&&e.hasError&&"\n    border-color: ".concat((e.theme.borders||o.Z.borders).danger,";\n  ")}),(function(e){return e.dynamicBlock&&"\n    border-style: dashed !important;\n  "}),(function(e){return e.dynamicChildBlock&&"\n    border-style: dotted !important;\n  "})),S=r.default.div.withConfig({displayName:"indexstyle__ContainerStyle",componentId:"sc-s5rj34-0"})(["border-radius:","px;position:relative;"],c.n_),A=r.default.div.withConfig({displayName:"indexstyle__HiddenBlockContainerStyle",componentId:"sc-s5rj34-1"})([""," border-radius:","px;border-style:",";border-width:","px;",""],g,c.n_,c.M8,c.mP,(function(e){return"\n    background-color: ".concat((e.theme||o.Z).background.content,";\n\n    &:hover {\n      border-color: ").concat(b(e.blockType,e).accent,";\n    }\n  ")})),T=r.default.div.withConfig({displayName:"indexstyle__HeaderHorizontalBorder",componentId:"sc-s5rj34-2"})(["",""],(function(e){return"\n    border-bottom: 1px solid ".concat((e.theme||o.Z).borders.darkLight,";\n  ")})),O=r.default.div.withConfig({displayName:"indexstyle__BlockHeaderStyle",componentId:"sc-s5rj34-3"})([""," border-top-left-radius:","px;border-top-right-radius:","px;border-top-style:",";border-top-width:","px;border-left-style:",";border-left-width:","px;border-right-style:",";border-right-width:","px;padding-bottom:","px;padding-top:","px;"," "," "," ",""],g,c.n_,c.n_,c.M8,c.mP,c.M8,c.mP,c.M8,c.mP,1*a.iI,1*a.iI,(function(e){return"\n    background-color: ".concat((e.theme||o.Z).background.dashboard,";\n  ")}),(function(e){return"undefined"!==typeof e.zIndex&&null!==e.zIndex&&"\n    z-index: ".concat(6+(e.zIndex||0),";\n  ")}),(function(e){return!e.noSticky&&"\n    // This is to hide the horizontal scrollbar in the block header when sideBySide is enabled,\n    // and the screen width is too small.\n    position: sticky;\n    top: -5px;\n  "}),(function(e){return e.noSticky&&"\n    ".concat((0,s.y$)(),"\n\n    overflow-x: auto;\n    overflow-y: visible;\n  ")})),m=r.default.div.withConfig({displayName:"indexstyle__SubheaderStyle",componentId:"sc-s5rj34-4"})([""," "," ",""],(function(e){return!e.darkBorder&&"\n    border-bottom: 1px solid ".concat((e.theme.borders||o.Z.borders).darkLight,";\n  ")}),(function(e){return e.darkBorder&&"\n    border-bottom: 1px solid ".concat((e.theme.borders||o.Z.borders).medium,";\n  ")}),(function(e){return!e.noBackground&&"\n    background-color: ".concat((e.theme||o.Z).background.dashboard,";\n  ")})),v=r.default.div.withConfig({displayName:"indexstyle__CodeContainerStyle",componentId:"sc-s5rj34-5"})([""," border-left-style:",";border-left-width:","px;border-right-style:",";border-right-width:","px;position:relative;"," "," "," "," .line-numbers{opacity:0;}&.selected{.line-numbers{opacity:1 !important;}}"],g,c.M8,c.mP,c.M8,c.mP,(function(e){return"\n    background-color: ".concat((e.theme.background||o.Z.background).codeTextarea,";\n  ")}),(function(e){return!e.noPadding&&"\n    padding-bottom: ".concat(a.iI,"px;\n    padding-top: ").concat(a.iI,"px;\n  ")}),(function(e){return e.lightBackground&&"\n    background-color: ".concat((e.theme||o.Z).background.content,";\n  ")}),(function(e){return!e.hideBorderBottom&&"\n    border-bottom-left-radius: ".concat(c.n_,"px;\n    border-bottom-right-radius: ").concat(c.n_,"px;\n    border-bottom-style: ").concat(c.M8,";\n    border-bottom-width: ").concat(c.mP,"px;\n    overflow: hidden;\n  ")})),E=r.default.div.withConfig({displayName:"indexstyle__BlockDivider",componentId:"sc-s5rj34-6"})(["align-items:center;display:flex;height:","px;justify-content:center;position:relative;z-index:8;&:hover{"," .block-divider-inner{","}}"," "," "," ",""],2*a.iI,(function(e){return e.additionalZIndex>0&&"\n      z-index: ".concat(8+e.additionalZIndex,";\n    ")}),(function(e){return"\n        background-color: ".concat((e.theme.text||o.Z.text).fileBrowser,";\n      ")}),(function(e){return!e.height&&"\n    height: ".concat(2*a.iI,"px;\n  ")}),(function(e){return e.height&&"\n    height: ".concat(e.height,"px;\n  ")}),(function(e){return!e.bottom&&"\n    bottom: ".concat(.5*a.iI,"px;\n  ")}),(function(e){return"undefined"!==typeof e.bottom&&"\n    bottom: ".concat(e.bottom,"px;\n  ")})),R=r.default.div.withConfig({displayName:"indexstyle__BlockDividerInner",componentId:"sc-s5rj34-7"})(["height 1px;width:100%;position:absolute;z-index:-1;"," ",""],(function(e){return!e.top&&"\n    top: ".concat(1.5*a.iI,"px;\n  ")}),(function(e){return"undefined"!==typeof e.top&&"\n    top: ".concat(e.top,"px;\n  ")})),y=r.default.div.withConfig({displayName:"indexstyle__CodeHelperStyle",componentId:"sc-s5rj34-8"})([""," ",""],(function(e){return"\n    border-bottom: 1px solid ".concat((e.theme.borders||o.Z.borders).medium,";\n    padding-left: ").concat(e.normalPadding?a.iI:l,"px;\n  ")}),(function(e){return!e.noMargin&&"\n    margin-bottom: ".concat(1*a.iI,"px;\n    padding-bottom: ").concat(1*a.iI,"px;\n  ")})),P=r.default.div.withConfig({displayName:"indexstyle__TimeTrackerStyle",componentId:"sc-s5rj34-9"})(["bottom:","px;left:","px;position:absolute;"],1*a.iI,l),_=r.default.div.withConfig({displayName:"indexstyle__ScrollColunnsContainerStyle",componentId:"sc-s5rj34-10"})(["position:relative;",""],(function(e){return"\n    z-index: ".concat((null===e||void 0===e?void 0:e.zIndex)||1,";\n  ")})),x=r.default.div.attrs((function(e){var n=e.height,t=e.left,r=e.right,o=e.top;return{style:{position:"fixed",height:n,width:e.width,left:t,right:r,top:o,zIndex:(e.zIndex||0)+2}}})).withConfig({displayName:"indexstyle__ScrollColunnStyle",componentId:"sc-s5rj34-11"})([""])},94629:function(e,n,t){"use strict";t.d(n,{Z:function(){return P}});var r=t(82394),o=t(21831),i=t(82684),c=t(50724),u=t(82555),a=t(97618),s=t(70613),d=t(68487),l=t(68899),f=t(28598);function p(e,n){var t=e.children,r=e.noPadding;return(0,f.jsx)(l.HS,{noPadding:r,ref:n,children:t})}var h=i.forwardRef(p),b=t(62547),g=t(82571),S=t(35686),A=t(98464),T=t(46684),O=t(70515),m=t(53808),v=t(19183);function E(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function R(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?E(Object(t),!0).forEach((function(n){(0,r.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):E(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function y(e,n){var t,r=e.addProjectBreadcrumbToCustomBreadcrumbs,p=e.after,E=e.afterHeader,y=e.afterHidden,P=e.afterWidth,_=e.afterWidthOverride,x=e.appendBreadcrumbs,N=e.before,C=e.beforeWidth,Z=e.breadcrumbs,I=e.children,L=e.errors,D=e.headerMenuItems,w=e.headerOffset,k=e.hideAfterCompletely,j=e.mainContainerHeader,M=e.navigationItems,H=e.setAfterHidden,B=e.setErrors,Y=e.subheaderChildren,W=e.subheaderNoPadding,K=e.title,U=e.uuid,G=(0,v.i)().width,F="dashboard_after_width_".concat(U),V="dashboard_before_width_".concat(U),X=(0,i.useRef)(null),Q=(0,i.useState)(_?P:(0,m.U2)(F,P)),z=Q[0],q=Q[1],J=(0,i.useState)(!1),$=J[0],ee=J[1],ne=(0,i.useState)(N?Math.max((0,m.U2)(V,C),13*O.iI):null),te=ne[0],re=ne[1],oe=(0,i.useState)(!1),ie=oe[0],ce=oe[1],ue=(0,i.useState)(null)[1],ae=S.ZP.projects.list({},{revalidateOnFocus:!1}).data,se=null===ae||void 0===ae?void 0:ae.projects,de={label:function(){var e;return null===se||void 0===se||null===(e=se[0])||void 0===e?void 0:e.name},linkProps:{href:"/"}},le=[];Z&&(r&&le.push(de),le.push.apply(le,(0,o.Z)(Z))),(null===Z||void 0===Z||!Z.length||x)&&(null===se||void 0===se?void 0:se.length)>=1&&(null!==Z&&void 0!==Z&&Z.length||le.unshift({bold:!x,label:function(){return K}}),le.unshift(de)),(0,i.useEffect)((function(){null===X||void 0===X||!X.current||$||ie||null===ue||void 0===ue||ue(X.current.getBoundingClientRect().width)}),[$,z,ie,te,X,ue,G]),(0,i.useEffect)((function(){$||(0,m.t8)(F,z)}),[y,$,z,F]),(0,i.useEffect)((function(){ie||(0,m.t8)(V,te)}),[ie,te,V]);var fe=(0,A.Z)(P);return(0,i.useEffect)((function(){_&&fe!==P&&q(P)}),[_,P,fe]),(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(s.Z,{title:K}),(0,f.jsx)(d.Z,{breadcrumbs:le,menuItems:D,project:null===se||void 0===se?void 0:se[0],version:null===se||void 0===se||null===(t=se[0])||void 0===t?void 0:t.version}),(0,f.jsxs)(l.Nk,{ref:n,children:[0!==(null===M||void 0===M?void 0:M.length)&&(0,f.jsx)(l.lm,{showMore:!0,children:(0,f.jsx)(g.Z,{navigationItems:M,showMore:!0})}),(0,f.jsx)(a.Z,{flex:1,flexDirection:"column",children:(0,f.jsxs)(b.Z,{after:p,afterHeader:E,afterHeightOffset:T.Mz,afterHidden:y,afterMousedownActive:$,afterWidth:z,before:N,beforeHeightOffset:T.Mz,beforeMousedownActive:ie,beforeWidth:l.k1+(N?te:0),headerOffset:w,hideAfterCompletely:!H||k,leftOffset:N?l.k1:null,mainContainerHeader:j,mainContainerRef:X,setAfterHidden:H,setAfterMousedownActive:ee,setAfterWidth:q,setBeforeMousedownActive:ce,setBeforeWidth:re,children:[Y&&(0,f.jsx)(h,{noPadding:W,children:Y}),I]})})]}),L&&(0,f.jsx)(c.Z,{disableClickOutside:!0,isOpen:!0,onClickOutside:function(){return null===B||void 0===B?void 0:B(null)},children:(0,f.jsx)(u.Z,R(R({},L),{},{onClose:function(){return null===B||void 0===B?void 0:B(null)}}))})]})}var P=i.forwardRef(y)},85385:function(e,n,t){"use strict";t.d(n,{Qq:function(){return p},Z7:function(){return h},cH:function(){return o},du:function(){return l},fp:function(){return d},j5:function(){return f},uM:function(){return s}});var r,o,i=t(82394),c=t(82359),u=t(72473),a=t(86735),s="sideview",d=90;!function(e){e.ADDON_BLOCKS="addon_blocks",e.BLOCK_SETTINGS="block_settings",e.CALLBACKS="callbacks",e.CHARTS="charts",e.DATA="data",e.EXTENSIONS="power_ups",e.FILE_VERSIONS="file_versions",e.GRAPHS="graphs",e.INTERACTIONS="interactions",e.REPORTS="reports",e.SECRETS="secrets",e.SETTINGS="settings",e.TERMINAL="terminal",e.TREE="tree",e.VARIABLES="variables"}(o||(o={}));o.BLOCK_SETTINGS,o.CALLBACKS,o.CHARTS,o.DATA,o.EXTENSIONS,o.TREE;var l=[o.DATA];function f(e){var n,t,r=[{key:o.TREE,label:"Tree"},{buildLabel:function(e){var n=(e.pipeline||{}).widgets,t=void 0===n?[]:n;return(null===t||void 0===t?void 0:t.length)>=1?"Charts (".concat(t.length,")"):"Charts"},key:o.CHARTS},{buildLabel:function(e){var n=e.variables;return(null===n||void 0===n?void 0:n.length)>=1?"Variables (".concat(n.length,")"):"Variables"},key:o.VARIABLES},{buildLabel:function(e){var n=e.secrets;return(null===n||void 0===n?void 0:n.length)>=1?"Secrets (".concat(n.length,")"):"Secrets"},key:o.SECRETS},{buildLabel:function(e){e.pipeline;return"Add-on blocks"},key:o.ADDON_BLOCKS},{buildLabel:function(e){var n=(e.pipeline||{}).extensions,t=void 0===n?{}:n,r=0;return Object.values(t).forEach((function(e){var n=e.blocks;r+=(null===n||void 0===n?void 0:n.length)||0})),r>=1?"Power ups (".concat(r,")"):"Power ups"},key:o.EXTENSIONS},{key:o.DATA,label:"Data"},{key:o.TERMINAL,label:"Terminal"},{key:o.BLOCK_SETTINGS,label:"Block settings"}];return null!==e&&void 0!==e&&null!==(n=e.project)&&void 0!==n&&null!==(t=n.features)&&void 0!==t&&t[c.d.INTERACTIONS]&&r.push({key:o.INTERACTIONS,label:"Interactions"}),r}function p(e){return(0,a.HK)(f(e),(function(e){return e.key}))}var h=(r={},(0,i.Z)(r,o.ADDON_BLOCKS,u.EJ),(0,i.Z)(r,o.BLOCK_SETTINGS,u.JG),(0,i.Z)(r,o.CALLBACKS,u.AQ),(0,i.Z)(r,o.CHARTS,u.GQ),(0,i.Z)(r,o.DATA,u.iA),(0,i.Z)(r,o.EXTENSIONS,u.Bf),(0,i.Z)(r,o.INTERACTIONS,u.yd),(0,i.Z)(r,o.SECRETS,u.Yo),(0,i.Z)(r,o.SETTINGS,u.Zr),(0,i.Z)(r,o.TERMINAL,u.oI),(0,i.Z)(r,o.TREE,u.mp),(0,i.Z)(r,o.VARIABLES,u.LO),r)},75083:function(e,n,t){"use strict";t.d(n,{HF:function(){return i},L6:function(){return r}});var r,o=t(72473);function i(e,n,t){var i=e.owner,c=(e.roles,[{Icon:o.Vz,id:r.WORKSPACES,isSelected:function(){return r.WORKSPACES===t},label:function(){return"Workspaces"},linkProps:{href:"/manage"}}]);return i&&c.push({Icon:o.NO,id:r.USERS,isSelected:function(){return r.USERS===t},label:function(){return"Users"},linkProps:{href:"/manage/users"}}),c.push.apply(c,[{Icon:o.Zr,id:r.SETTINGS,isSelected:function(){return r.SETTINGS===t},label:function(){return"Settings"},linkProps:{href:"/manage/settings"}},{Icon:o.$B,id:r.FILE_BROWSER,isSelected:function(){return r.FILE_BROWSER===t},label:function(){return"File browser"},linkProps:{href:"/manage/files"}}]),c}!function(e){e.WORKSPACES="workspaces",e.USERS="users",e.SETTINGS="settings",e.FILE_BROWSER="file_browser"}(r||(r={}))},59533:function(e,n,t){"use strict";var r=t(82684),o=t(94629),i=t(35686),c=t(70515),u=t(75083),a=t(50178),s=t(28598);n.Z=function(e){var n=e.before,t=e.breadcrumbs,d=void 0===t?[]:t,l=e.children,f=e.errors,p=e.headerOffset,h=e.mainContainerHeader,b=e.pageName,g=e.setErrors,S=e.subheaderChildren,A=i.ZP.statuses.list().data,T=(0,r.useMemo)((function(){var e,n;return null===A||void 0===A||null===(e=A.statuses)||void 0===e||null===(n=e[0])||void 0===n?void 0:n.project_type}),[A]),O=(0,a.PR)()||{};return(0,s.jsx)(o.Z,{before:n,beforeWidth:n?50*c.iI:0,breadcrumbs:d,errors:f,headerOffset:p,mainContainerHeader:h,navigationItems:(0,u.HF)(O,T,b),setErrors:g,subheaderChildren:S,title:"Workspaces",uuid:"workspaces/index",children:l})}},44425:function(e,n,t){"use strict";t.d(n,{$W:function(){return S},DA:function(){return b},HX:function(){return m},J8:function(){return O},L8:function(){return u},LE:function(){return f},Lk:function(){return R},Lq:function(){return p},M5:function(){return h},Q3:function(){return A},Qj:function(){return v},Ut:function(){return _},V4:function(){return P},VZ:function(){return T},dO:function(){return l},f2:function(){return y},iZ:function(){return E},t6:function(){return a},tf:function(){return d}});var r,o,i,c,u,a,s=t(82394);!function(e){e.CONDITION="condition",e.DBT_SNAPSHOT="snapshot",e.DYNAMIC="dynamic",e.DYNAMIC_CHILD="dynamic_child",e.REDUCE_OUTPUT="reduce_output",e.REPLICA="replica"}(u||(u={})),function(e){e.MARKDOWN="markdown",e.PYTHON="python",e.R="r",e.SQL="sql",e.YAML="yaml"}(a||(a={}));var d,l=(r={},(0,s.Z)(r,a.MARKDOWN,"MD"),(0,s.Z)(r,a.PYTHON,"PY"),(0,s.Z)(r,a.R,"R"),(0,s.Z)(r,a.SQL,"SQL"),(0,s.Z)(r,a.YAML,"YAML"),r),f=(o={},(0,s.Z)(o,a.MARKDOWN,"Markdown"),(0,s.Z)(o,a.PYTHON,"Python"),(0,s.Z)(o,a.R,"R"),(0,s.Z)(o,a.SQL,"SQL"),(0,s.Z)(o,a.YAML,"YAML"),o);!function(e){e.CALLBACK="callback",e.CHART="chart",e.CONDITIONAL="conditional",e.CUSTOM="custom",e.DATA_EXPORTER="data_exporter",e.DATA_LOADER="data_loader",e.DBT="dbt",e.EXTENSION="extension",e.GLOBAL_DATA_PRODUCT="global_data_product",e.SCRATCHPAD="scratchpad",e.SENSOR="sensor",e.MARKDOWN="markdown",e.TRANSFORMER="transformer"}(d||(d={}));var p,h=[d.CALLBACK,d.CONDITIONAL,d.EXTENSION];!function(e){e.BLUE="blue",e.GREY="grey",e.PINK="pink",e.PURPLE="purple",e.TEAL="teal",e.YELLOW="yellow"}(p||(p={}));var b,g,S=[d.CHART,d.CUSTOM,d.DATA_EXPORTER,d.DATA_LOADER,d.SCRATCHPAD,d.SENSOR,d.MARKDOWN,d.TRANSFORMER],A=[d.CUSTOM,d.DATA_EXPORTER,d.DATA_LOADER,d.SCRATCHPAD,d.SENSOR,d.MARKDOWN,d.TRANSFORMER],T=[d.DATA_EXPORTER,d.DATA_LOADER],O=[d.DATA_EXPORTER,d.DATA_LOADER,d.TRANSFORMER],m=[d.DATA_EXPORTER,d.DATA_LOADER,d.DBT,d.TRANSFORMER],v=[d.CHART,d.SCRATCHPAD,d.SENSOR,d.MARKDOWN],E=[d.CALLBACK,d.CHART,d.EXTENSION,d.SCRATCHPAD,d.MARKDOWN],R=[d.CUSTOM,d.DATA_EXPORTER,d.DATA_LOADER,d.SENSOR,d.TRANSFORMER];!function(e){e.EXECUTED="executed",e.FAILED="failed",e.NOT_EXECUTED="not_executed",e.UPDATED="updated"}(b||(b={})),function(e){e.BLOCK_FILE="block_file",e.CUSTOM_BLOCK_TEMPLATE="custom_block_template",e.MAGE_TEMPLATE="mage_template"}(g||(g={}));var y=[d.CUSTOM,d.DATA_EXPORTER,d.DATA_LOADER,d.TRANSFORMER],P=(i={},(0,s.Z)(i,d.CALLBACK,"Callback"),(0,s.Z)(i,d.CHART,"Chart"),(0,s.Z)(i,d.CONDITIONAL,"Conditional"),(0,s.Z)(i,d.CUSTOM,"Custom"),(0,s.Z)(i,d.DATA_EXPORTER,"Data exporter"),(0,s.Z)(i,d.DATA_LOADER,"Data loader"),(0,s.Z)(i,d.DBT,"DBT"),(0,s.Z)(i,d.EXTENSION,"Extension"),(0,s.Z)(i,d.GLOBAL_DATA_PRODUCT,"Global data product"),(0,s.Z)(i,d.MARKDOWN,"Markdown"),(0,s.Z)(i,d.SCRATCHPAD,"Scratchpad"),(0,s.Z)(i,d.SENSOR,"Sensor"),(0,s.Z)(i,d.TRANSFORMER,"Transformer"),i),_=[d.DATA_LOADER,d.TRANSFORMER,d.DATA_EXPORTER,d.SENSOR];c={},(0,s.Z)(c,d.DATA_EXPORTER,"DE"),(0,s.Z)(c,d.DATA_LOADER,"DL"),(0,s.Z)(c,d.SCRATCHPAD,"SP"),(0,s.Z)(c,d.SENSOR,"SR"),(0,s.Z)(c,d.MARKDOWN,"MD"),(0,s.Z)(c,d.TRANSFORMER,"TF")},89706:function(e,n,t){"use strict";t.d(n,{JD:function(){return b},Lu:function(){return i},PF:function(){return f},dT:function(){return c},n6:function(){return s},nB:function(){return h},oy:function(){return p},xF:function(){return l}});var r,o,i,c,u=t(82394),a=t(44425);!function(e){e.CSV="csv",e.JSON="json",e.MD="md",e.PY="py",e.R="r",e.SH="sh",e.SQL="sql",e.TXT="txt",e.YAML="yaml",e.YML="yml"}(i||(i={})),function(e){e.INIT_PY="__init__.py",e.METADATA_YAML="metadata.yaml",e.REQS_TXT="requirements.txt"}(c||(c={}));var s=[i.PY,i.SQL],d=[i.JSON,i.MD,i.PY,i.R,i.SH,i.SQL,i.TXT,i.YAML,i.YML],l=new RegExp(d.map((function(e){return".".concat(e,"$")})).join("|")),f=(new RegExp(d.map((function(e){return".".concat(e,"$")})).join("|")),"charts"),p="pipelines",h=(r={},(0,u.Z)(r,i.MD,a.t6.MARKDOWN),(0,u.Z)(r,i.JSON,i.JSON),(0,u.Z)(r,i.PY,a.t6.PYTHON),(0,u.Z)(r,i.R,a.t6.R),(0,u.Z)(r,i.SQL,a.t6.SQL),(0,u.Z)(r,i.TXT,"text"),(0,u.Z)(r,i.YAML,a.t6.YAML),(0,u.Z)(r,i.YML,a.t6.YAML),r),b=(o={},(0,u.Z)(o,a.t6.MARKDOWN,i.MD),(0,u.Z)(o,a.t6.PYTHON,i.PY),(0,u.Z)(o,a.t6.R,i.R),(0,u.Z)(o,a.t6.SQL,i.SQL),(0,u.Z)(o,a.t6.YAML,i.YAML),(0,u.Z)(o,"text",i.TXT),o)},72098:function(e,n,t){"use strict";var r;t.d(n,{U:function(){return r}}),function(e){e.PYSPARK="pysparkkernel",e.PYTHON3="python3"}(r||(r={}))},57653:function(e,n,t){"use strict";t.d(n,{$1:function(){return b},G7:function(){return A},LM:function(){return T},Mj:function(){return O},QK:function(){return h},RH:function(){return S},a_:function(){return v},fj:function(){return E},kA:function(){return m},qL:function(){return u},r0:function(){return g}});var r,o,i,c,u,a=t(75582),s=t(82394),d=t(72473),l=t(72098);function f(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function p(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?f(Object(t),!0).forEach((function(n){(0,s.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):f(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}!function(e){e.INTEGRATION="integration",e.PYTHON="python",e.PYSPARK="pyspark",e.STREAMING="streaming"}(u||(u={}));var h,b,g,S=(r={},(0,s.Z)(r,u.INTEGRATION,"Integration"),(0,s.Z)(r,u.PYTHON,"Python"),(0,s.Z)(r,u.PYSPARK,"PySpark"),(0,s.Z)(r,u.STREAMING,"Streaming"),r),A=(o={},(0,s.Z)(o,u.INTEGRATION,"Integration"),(0,s.Z)(o,u.PYTHON,"Standard"),(0,s.Z)(o,u.PYSPARK,"PySpark"),(0,s.Z)(o,u.STREAMING,"Streaming"),o),T="all",O=(u.PYTHON,u.INTEGRATION,u.STREAMING,i={},(0,s.Z)(i,T,d.ie),(0,s.Z)(i,u.INTEGRATION,d.YC),(0,s.Z)(i,u.PYTHON,d.El),(0,s.Z)(i,u.STREAMING,d.dB),i);!function(e){e.ACTIVE="active",e.INACTIVE="inactive",e.NO_SCHEDULES="no_schedules",e.RETRY="retry",e.RETRY_INCOMPLETE_BLOCK_RUNS="retry_incomplete_block_runs"}(h||(h={})),function(e){e.GROUP="group_by",e.HISTORY_DAYS="from_history_days",e.NO_TAGS="no_tags",e.STATUS="status[]",e.TAG="tag[]",e.TYPE="type[]"}(b||(b={})),function(e){e.STATUS="status",e.TAG="tag",e.TYPE="type"}(g||(g={}));var m=[h.ACTIVE,h.INACTIVE,h.NO_SCHEDULES],v=(c={},(0,s.Z)(c,u.PYTHON,l.U.PYTHON3),(0,s.Z)(c,u.PYSPARK,l.U.PYSPARK),c),E=Object.entries(v).reduce((function(e,n){var t=(0,a.Z)(n,2),r=t[0],o=t[1];return p(p({},e),{},(0,s.Z)({},o,r))}),{})},65956:function(e,n,t){"use strict";var r=t(38626),o=t(55485),i=t(38276),c=t(30160),u=t(44897),a=t(42631),s=t(47041),d=t(70515),l=t(28598),f=(0,r.css)(["padding:","px;padding-bottom:","px;padding-top:","px;"],2*d.iI,1.5*d.iI,1.5*d.iI),p=r.default.div.withConfig({displayName:"Panel__PanelStyle",componentId:"sc-1ct8cgl-0"})(["border-radius:","px;overflow:hidden;"," "," "," "," "," "," "," "," "," "," "," ",""],a.n_,(function(e){return e.fullWidth&&"\n    width: 100%;\n  "}),(function(e){return!e.borderless&&"\n    border: 1px solid ".concat((e.theme.interactive||u.Z.interactive).defaultBorder,";\n  ")}),(function(e){return e.success&&"\n    background-color: ".concat((e.theme.background||u.Z.background).successLight,";\n  ")}),(function(e){return e.success&&!e.borderless&&"\n    border: 1px solid ".concat((e.theme.background||u.Z.background).success,";\n  ")}),(function(e){return!e.dark&&!e.success&&"\n    background-color: ".concat((e.theme.background||u.Z.background).panel,";\n  ")}),(function(e){return e.dark&&"\n    background-color: ".concat((e.theme.background||u.Z.background).content,";\n  ")}),(function(e){return!e.fullHeight&&"\n    height: fit-content;\n  "}),(function(e){return e.maxHeight&&"\n    max-height: ".concat(e.maxHeight,";\n  ")}),(function(e){return e.maxWidth&&"\n    max-width: ".concat(e.maxWidth,"px;\n  ")}),(function(e){return e.minWidth&&"\n    min-width: ".concat(e.minWidth,"px;\n\n    @media (max-width: ").concat(e.minWidth,"px) {\n      min-width: 0;\n    }\n  ")}),(function(e){return e.borderless&&"\n    border: none;\n  "}),(function(e){return e.overflowVisible&&"\n    overflow: visible;\n  "})),h=r.default.div.withConfig({displayName:"Panel__HeaderStyle",componentId:"sc-1ct8cgl-1"})(["border-top-left-radius:","px;border-top-right-radius:","px;"," "," "," ",""],a.n_,a.n_,(function(e){return"\n    background-color: ".concat((e.theme.background||u.Z.background).chartBlock,";\n    border-bottom: 1px solid ").concat((e.theme.interactive||u.Z.interactive).defaultBorder,";\n  ")}),(function(e){return e.height&&"\n    height: ".concat(e.height,"px;\n  ")}),f,(function(e){return e.headerPaddingVertical&&"\n    padding-bottom: ".concat(e.headerPaddingVertical,"px;\n    padding-top: ").concat(e.headerPaddingVertical,"px;\n  ")})),b=r.default.div.withConfig({displayName:"Panel__ContentStyle",componentId:"sc-1ct8cgl-2"})(["overflow-y:auto;padding:","px;height:100%;"," "," "," "," ",""],1.75*d.iI,s.w5,(function(e){return e.height&&"\n    height: ".concat(e.height,"px;\n  ")}),(function(e){return e.maxHeight&&"\n    max-height: calc(".concat(e.maxHeight," - ").concat(15*d.iI,"px);\n  ")}),(function(e){return e.noPadding&&"\n    padding: 0;\n  "}),(function(e){return e.overflowVisible&&"\n    overflow: visible;\n  "})),g=r.default.div.withConfig({displayName:"Panel__FooterStyle",componentId:"sc-1ct8cgl-3"})(["border-style:",";border-top-width:","px;padding:","px;"],a.M8,a.YF,1.75*d.iI);n.Z=function(e){var n=e.borderless,t=e.children,r=e.containerRef,u=e.contentContainerRef,a=e.dark,s=e.footer,d=e.fullHeight,f=void 0===d||d,S=e.fullWidth,A=void 0===S||S,T=e.header,O=e.headerHeight,m=e.headerIcon,v=e.headerPaddingVertical,E=e.headerTitle,R=e.maxHeight,y=e.maxWidth,P=e.minWidth,_=e.noPadding,x=e.overflowVisible,N=e.subtitle,C=e.success;return(0,l.jsxs)(p,{borderless:n,dark:a,fullHeight:f,fullWidth:A,maxHeight:R,maxWidth:y,minWidth:P,overflowVisible:x,ref:r,success:C,children:[(T||E)&&(0,l.jsxs)(h,{headerPaddingVertical:v,height:O,children:[T&&T,E&&(0,l.jsx)(o.ZP,{alignItems:"center",justifyContent:"space-between",children:(0,l.jsxs)(o.ZP,{alignItems:"center",children:[m&&m,(0,l.jsx)(i.Z,{ml:m?1:0,children:(0,l.jsx)(c.ZP,{bold:!0,default:!0,children:E})})]})})]}),(0,l.jsxs)(b,{maxHeight:R,noPadding:_,overflowVisible:x,ref:u,children:[N&&(0,l.jsx)(i.Z,{mb:2,children:(0,l.jsx)(c.ZP,{default:!0,children:N})}),t]}),s&&(0,l.jsx)(g,{children:s})]})}},35185:function(e,n,t){"use strict";var r=t(82394),o=t(91835),i=(t(82684),t(38626)),c=t(44897),u=t(42631),a=t(70515),s=t(28598);function d(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?d(Object(t),!0).forEach((function(n){(0,r.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):d(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var f=i.default.div.withConfig({displayName:"ProgressBar__ProgressBarContainerStyle",componentId:"sc-10x9ojc-0"})(["border-radius:","px;height:","px;overflow:hidden;position:relative;width:100%;",""],u.BG,.75*a.iI,(function(e){return"\n    background-color: ".concat((e.theme.monotone||c.Z.monotone).grey200,";\n  ")})),p=i.default.div.withConfig({displayName:"ProgressBar__ProgressBarStyle",componentId:"sc-10x9ojc-1"})(["height:inherit;position:absolute;"," "," "," ",""],(function(e){return!e.danger&&"\n    background-color: ".concat((e.theme.progress||c.Z.progress).positive,";\n  ")}),(function(e){return e.progress&&"\n    width: ".concat(e.progress,"%;\n  ")}),(function(e){return e.danger&&"\n    background-color: ".concat((e.theme.progress||c.Z.progress).negative,";\n  ")}),(function(e){return e.animateProgress&&"\n    animation: animate-progress ".concat(e.animateProgress.duration,"ms linear forwards;\n\n    @keyframes animate-progress {\n      0% {\n        width: ").concat(e.animateProgress.start,"%;\n      }\n\n      100% {\n        width: ").concat(e.animateProgress.end,"%;\n      }\n    }\n  ")}));n.Z=function(e){var n=(0,o.Z)({},e);return(0,s.jsx)(f,l(l({},n),{},{children:(0,s.jsx)(p,l({},n))}))}},83087:function(e,n,t){"use strict";t.r(n);var r=t(77837),o=t(38860),i=t.n(o),c=t(82684),u=t(65557),a=t(10553),s=t(29618),d=t(90758),l=t(93808),f=t(38276),p=t(59533),h=t(35686),b=t(86735),g=t(15610),S=t(69419),A=t(97133),T=t(75083),O=t(28598);function m(){var e=(0,c.useState)(null),n=e[0],t=e[1],r=(0,S.iV)(),o=r.file_path,i=(0,c.useMemo)((function(){var e=r["file_paths[]"]||[];return Array.isArray(e)||(e=[e]),e}),[r]),l=(0,c.useCallback)((function(e){var n=encodeURIComponent(e),t=(0,S.iV)()["file_paths[]"]||[];Array.isArray(t)||(t=[t]),t.includes(n)||t.push(n),(0,g.u7)({file_path:n,"file_paths[]":t})}),[]),m=h.ZP.files.list(),v=m.data,E=m.mutate,R=(0,c.useMemo)((function(){return(null===v||void 0===v?void 0:v.files)||[]}),[v]),y=(0,c.useRef)(null),P=(0,c.useState)(null),_=P[0],x=P[1],N=(0,c.useState)([]),C=N[0],Z=N[1],I=(0,c.useState)({}),L=I[0],D=I[1],w=(0,c.useMemo)((function(){return(0,O.jsx)(f.Z,{ml:1,mt:1,children:(0,O.jsx)(a.Z,{fetchFileTree:E,files:R,openFile:l,ref:y,setErrors:t})})}),[E,R,l,t]);return(0,c.useEffect)((function(){x(o)}),[o]),(0,c.useEffect)((function(){(0,b.fS)(i,C)||Z(i)}),[i,C]),(0,O.jsx)(p.Z,{before:w,breadcrumbs:[{label:function(){return"Workspaces"},linkProps:{as:"/manage",href:"/manage"}},{bold:!0,label:function(){return"File browser"}}],errors:n,mainContainerHeader:(0,O.jsx)(A.rK,{secondary:!0,children:(0,O.jsx)(d.Z,{filePaths:C,filesTouched:L,selectedFilePath:_})}),pageName:T.L6.FILE_BROWSER,children:null===i||void 0===i?void 0:i.map((function(e){return(0,O.jsx)("div",{style:{display:_===e?null:"none"},children:(0,O.jsx)(u.Z,{uuid:"manage/FileEditor/".concat(decodeURIComponent(e)),children:(0,O.jsx)(s.Z,{active:_===e,filePath:e,selectedFilePath:_,setErrors:t,setFilesTouched:D})})},e)}))})}m.getInitialProps=(0,r.Z)(i().mark((function e(){return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",{});case 1:case"end":return e.stop()}}),e)}))),n.default=(0,l.Z)(m)},90205:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/manage/files",function(){return t(83087)}])},80022:function(e,n,t){"use strict";function r(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}t.d(n,{Z:function(){return r}})},15544:function(e,n,t){"use strict";function r(e){return r=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},r(e)}t.d(n,{Z:function(){return r}})},99177:function(e,n,t){"use strict";function r(e,n){return r=Object.setPrototypeOf||function(e,n){return e.__proto__=n,e},r(e,n)}function o(e,n){if("function"!==typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),n&&r(e,n)}t.d(n,{Z:function(){return o}})},93189:function(e,n,t){"use strict";t.d(n,{Z:function(){return i}});var r=t(12539),o=t(80022);function i(e,n){if(n&&("object"===r(n)||"function"===typeof n))return n;if(void 0!==n)throw new TypeError("Derived constructors may only return object or undefined");return(0,o.Z)(e)}}},function(e){e.O(0,[2678,1154,844,6639,7011,4267,600,8487,8264,7858,5499,5810,553,1125,9774,2888,179],(function(){return n=90205,e(e.s=n);var n}));var n=e.O();_N_E=n}]);