(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5912],{98677:function(n,t,e){"use strict";function r(n,t,e){n=+n,t=+t,e=(o=arguments.length)<2?(t=n,n=0,1):o<3?1:+e;for(var r=-1,o=0|Math.max(0,Math.ceil((t-n)/e)),i=new Array(o);++r<o;)i[r]=n+r*e;return i}e.d(t,{Z:function(){return a}});var o=e(8208),i=e(8162);function c(){var n,t,e=(0,i.Z)().unknown(void 0),u=e.domain,a=e.range,d=0,l=1,s=!1,f=0,p=0,h=.5;function m(){var e=u().length,o=l<d,i=o?l:d,c=o?d:l;n=(c-i)/Math.max(1,e-f+2*p),s&&(n=Math.floor(n)),i+=(c-i-n*(e-f))*h,t=n*(1-f),s&&(i=Math.round(i),t=Math.round(t));var m=r(e).map((function(t){return i+n*t}));return a(o?m.reverse():m)}return delete e.unknown,e.domain=function(n){return arguments.length?(u(n),m()):u()},e.range=function(n){return arguments.length?([d,l]=n,d=+d,l=+l,m()):[d,l]},e.rangeRound=function(n){return[d,l]=n,d=+d,l=+l,s=!0,m()},e.bandwidth=function(){return t},e.step=function(){return n},e.round=function(n){return arguments.length?(s=!!n,m()):s},e.padding=function(n){return arguments.length?(f=Math.min(1,p=+n),m()):f},e.paddingInner=function(n){return arguments.length?(f=Math.min(1,n),m()):f},e.paddingOuter=function(n){return arguments.length?(p=+n,m()):p},e.align=function(n){return arguments.length?(h=Math.max(0,Math.min(1,n)),m()):h},e.copy=function(){return c(u(),[d,l]).round(s).paddingInner(f).paddingOuter(p).align(h)},o.o.apply(m(),arguments)}var u=(0,e(93342).Z)("domain","range","reverse","align","padding","round");function a(n){return u(c(),n)}},62072:function(n,t,e){"use strict";function r(n){return null==n?void 0:n[0]}function o(n){return null==n?void 0:n[1]}e.d(t,{l8:function(){return r},xf:function(){return o}})},53989:function(n,t,e){"use strict";function r(n){if("bandwidth"in n)return n.bandwidth();var t=n.range(),e=n.domain();return Math.abs(t[t.length-1]-t[0])/e.length}e.d(t,{Z:function(){return r}})},59309:function(n,t,e){"use strict";e.d(t,{ZP:function(){return d}});var r=e(12759),o=e(27500),i=e(82610),c=e(34812),u=e(77944),a={expand:r.Z,diverging:o.Z,none:i.Z,silhouette:c.Z,wiggle:u.Z};Object.keys(a);function d(n){return n&&a[n]||a.none}},18246:function(n,t,e){"use strict";e.d(t,{ZP:function(){return d}});var r=e(39586),o=e(25516),i=e(54164),c=e(8512),u=e(2010),a={ascending:r.Z,descending:o.Z,insideout:i.Z,none:c.Z,reverse:u.Z};Object.keys(a);function d(n){return n&&a[n]||a.none}},13946:function(n,t,e){"use strict";e.d(t,{t:function(){return r}});var r=Array.prototype.slice},27500:function(n,t,e){"use strict";function r(n,t){if((u=n.length)>0)for(var e,r,o,i,c,u,a=0,d=n[t[0]].length;a<d;++a)for(i=c=0,e=0;e<u;++e)(o=(r=n[t[e]][a])[1]-r[0])>0?(r[0]=i,r[1]=i+=o):o<0?(r[1]=c,r[0]=c+=o):(r[0]=0,r[1]=o)}e.d(t,{Z:function(){return r}})},12759:function(n,t,e){"use strict";e.d(t,{Z:function(){return o}});var r=e(82610);function o(n,t){if((o=n.length)>0){for(var e,o,i,c=0,u=n[0].length;c<u;++c){for(i=e=0;e<o;++e)i+=n[e][c][1]||0;if(i)for(e=0;e<o;++e)n[e][c][1]/=i}(0,r.Z)(n,t)}}},82610:function(n,t,e){"use strict";function r(n,t){if((o=n.length)>1)for(var e,r,o,i=1,c=n[t[0]],u=c.length;i<o;++i)for(r=c,c=n[t[i]],e=0;e<u;++e)c[e][1]+=c[e][0]=isNaN(r[e][1])?r[e][0]:r[e][1]}e.d(t,{Z:function(){return r}})},34812:function(n,t,e){"use strict";e.d(t,{Z:function(){return o}});var r=e(82610);function o(n,t){if((e=n.length)>0){for(var e,o=0,i=n[t[0]],c=i.length;o<c;++o){for(var u=0,a=0;u<e;++u)a+=n[u][o][1]||0;i[o][1]+=i[o][0]=-a/2}(0,r.Z)(n,t)}}},77944:function(n,t,e){"use strict";e.d(t,{Z:function(){return o}});var r=e(82610);function o(n,t){if((i=n.length)>0&&(o=(e=n[t[0]]).length)>0){for(var e,o,i,c=0,u=1;u<o;++u){for(var a=0,d=0,l=0;a<i;++a){for(var s=n[t[a]],f=s[u][1]||0,p=(f-(s[u-1][1]||0))/2,h=0;h<a;++h){var m=n[t[h]];p+=(m[u][1]||0)-(m[u-1][1]||0)}d+=f,l+=p*f}e[u-1][1]+=e[u-1][0]=c,d&&(c-=l/d)}e[u-1][1]+=e[u-1][0]=c,(0,r.Z)(n,t)}}},34128:function(n,t,e){"use strict";e.d(t,{Z:function(){return o}});var r=e(8512);function o(n){var t=n.map(i);return(0,r.Z)(n).sort((function(n,e){return t[n]-t[e]}))}function i(n){for(var t,e=-1,r=0,o=n.length,i=-1/0;++e<o;)(t=+n[e][1])>i&&(i=t,r=e);return r}},39586:function(n,t,e){"use strict";e.d(t,{S:function(){return i},Z:function(){return o}});var r=e(8512);function o(n){var t=n.map(i);return(0,r.Z)(n).sort((function(n,e){return t[n]-t[e]}))}function i(n){for(var t,e=0,r=-1,o=n.length;++r<o;)(t=+n[r][1])&&(e+=t);return e}},25516:function(n,t,e){"use strict";e.d(t,{Z:function(){return o}});var r=e(39586);function o(n){return(0,r.Z)(n).reverse()}},54164:function(n,t,e){"use strict";e.d(t,{Z:function(){return i}});var r=e(34128),o=e(39586);function i(n){var t,e,i=n.length,c=n.map(o.S),u=(0,r.Z)(n),a=0,d=0,l=[],s=[];for(t=0;t<i;++t)e=u[t],a<d?(a+=c[e],l.push(e)):(d+=c[e],s.push(e));return s.reverse().concat(l)}},8512:function(n,t,e){"use strict";function r(n){for(var t=n.length,e=new Array(t);--t>=0;)e[t]=t;return e}e.d(t,{Z:function(){return r}})},2010:function(n,t,e){"use strict";e.d(t,{Z:function(){return o}});var r=e(8512);function o(n){return(0,r.Z)(n).reverse()}},75823:function(n,t,e){"use strict";e.d(t,{Z:function(){return a}});var r=e(13946),o=e(90875),i=e(82610),c=e(8512);function u(n,t){return n[t]}function a(){var n=(0,o.Z)([]),t=c.Z,e=i.Z,a=u;function d(r){var o,i,c=n.apply(this,arguments),u=r.length,d=c.length,l=new Array(d);for(o=0;o<d;++o){for(var s,f=c[o],p=l[o]=new Array(u),h=0;h<u;++h)p[h]=s=[0,+a(r[h],f,h,r)],s.data=r[h];p.key=f}for(o=0,i=t(l);o<d;++o)l[i[o]].index=o;return e(l,i),l}return d.keys=function(t){return arguments.length?(n="function"===typeof t?t:(0,o.Z)(r.t.call(t)),d):n},d.value=function(n){return arguments.length?(a="function"===typeof n?n:(0,o.Z)(+n),d):a},d.order=function(n){return arguments.length?(t=null==n?c.Z:"function"===typeof n?n:(0,o.Z)(r.t.call(n)),d):t},d.offset=function(n){return arguments.length?(e=null==n?i.Z:n,d):e},d}},59739:function(n,t,e){"use strict";var r=e(56669);function o(){}function i(){}i.resetWarningCache=o,n.exports=function(){function n(n,t,e,o,i,c){if(c!==r){var u=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw u.name="Invariant Violation",u}}function t(){return n}n.isRequired=n;var e={array:n,bigint:n,bool:n,func:n,number:n,object:n,string:n,symbol:n,any:n,arrayOf:t,element:n,elementType:n,instanceOf:t,node:n,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:i,resetWarningCache:o};return e.PropTypes=e,e}},47329:function(n,t,e){n.exports=e(59739)()},56669:function(n){"use strict";n.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},55283:function(n,t,e){"use strict";e.d(t,{HC:function(){return O},HS:function(){return b},Kf:function(){return s},Nk:function(){return f},PB:function(){return h},PY:function(){return p},gE:function(){return g},jv:function(){return v},nz:function(){return m},oh:function(){return d},qn:function(){return l},t1:function(){return y},y9:function(){return Z}});var r=e(38626),o=e(44897),i=e(44425),c=e(42631),u=e(70515),a=e(91437),d=68;function l(n,t){var e,r,c=((null===t||void 0===t||null===(e=t.theme)||void 0===e?void 0:e.borders)||o.Z.borders).light,u=((null===t||void 0===t||null===(r=t.theme)||void 0===r?void 0:r.monotone)||o.Z.monotone).grey500,a=t||{},d=a.blockColor,l=a.isSelected,s=a.theme;return l?c=(s||o.Z).content.active:i.tf.TRANSFORMER===n||d===i.Lq.PURPLE?(c=(s||o.Z).accent.purple,u=(s||o.Z).accent.purpleLight):i.tf.DATA_EXPORTER===n||d===i.Lq.YELLOW?(c=(s||o.Z).accent.yellow,u=(s||o.Z).accent.yellowLight):i.tf.DATA_LOADER===n||d===i.Lq.BLUE?(c=(s||o.Z).accent.blue,u=(s||o.Z).accent.blueLight):i.tf.MARKDOWN===n?(c=(s||o.Z).accent.sky,u=(s||o.Z).accent.skyLight):i.tf.SENSOR===n||d===i.Lq.PINK?(c=(s||o.Z).accent.pink,u=(s||o.Z).accent.pinkLight):i.tf.DBT===n?(c=(s||o.Z).accent.dbt,u=(s||o.Z).accent.dbtLight):i.tf.EXTENSION===n||d===i.Lq.TEAL?(c=((null===s||void 0===s?void 0:s.accent)||o.Z.accent).teal,u=((null===s||void 0===s?void 0:s.accent)||o.Z.accent).tealLight):i.tf.CALLBACK===n?(c=((null===s||void 0===s?void 0:s.accent)||o.Z.accent).rose,u=((null===s||void 0===s?void 0:s.accent)||o.Z.accent).roseLight):i.tf.CONDITIONAL===n||i.tf.SCRATCHPAD===n||d===i.Lq.GREY||i.tf.CUSTOM===n&&!d?(c=(s||o.Z).content.default,u=(s||o.Z).accent.contentDefaultTransparent):i.tf.GLOBAL_DATA_PRODUCT!==n||d||(c=(s||o.Z).monotone.white,u=(s||o.Z).monotone.whiteTransparent),{accent:c,accentLight:u}}var s=(0,r.css)([""," "," "," "," "," "," ",""],(0,a.eR)(),(function(n){return!n.selected&&!n.hasError&&"\n    border-color: ".concat(l(n.blockType,n).accentLight,";\n  ")}),(function(n){return n.selected&&!n.hasError&&"\n    border-color: ".concat(l(n.blockType,n).accent,";\n  ")}),(function(n){return!n.selected&&n.hasError&&"\n    border-color: ".concat((n.theme.accent||o.Z.accent).negativeTransparent,";\n  ")}),(function(n){return n.selected&&n.hasError&&"\n    border-color: ".concat((n.theme.borders||o.Z.borders).danger,";\n  ")}),(function(n){return n.dynamicBlock&&"\n    border-style: dashed !important;\n  "}),(function(n){return n.dynamicChildBlock&&"\n    border-style: dotted !important;\n  "})),f=r.default.div.withConfig({displayName:"indexstyle__ContainerStyle",componentId:"sc-s5rj34-0"})(["border-radius:","px;position:relative;"],c.n_),p=r.default.div.withConfig({displayName:"indexstyle__HiddenBlockContainerStyle",componentId:"sc-s5rj34-1"})([""," border-radius:","px;border-style:",";border-width:","px;",""],s,c.n_,c.M8,c.mP,(function(n){return"\n    background-color: ".concat((n.theme||o.Z).background.content,";\n\n    &:hover {\n      border-color: ").concat(l(n.blockType,n).accent,";\n    }\n  ")})),h=r.default.div.withConfig({displayName:"indexstyle__HeaderHorizontalBorder",componentId:"sc-s5rj34-2"})(["",""],(function(n){return"\n    border-bottom: 1px solid ".concat((n.theme||o.Z).borders.darkLight,";\n  ")})),m=r.default.div.withConfig({displayName:"indexstyle__BlockHeaderStyle",componentId:"sc-s5rj34-3"})([""," border-top-left-radius:","px;border-top-right-radius:","px;border-top-style:",";border-top-width:","px;border-left-style:",";border-left-width:","px;border-right-style:",";border-right-width:","px;padding:","px;position:sticky;top:-5px;"," ",""],s,c.n_,c.n_,c.M8,c.mP,c.M8,c.mP,c.M8,c.mP,u.iI,(function(n){return"\n    background-color: ".concat((n.theme||o.Z).background.dashboard,";\n  ")}),(function(n){return n.zIndex&&"\n    z-index: ".concat(6+(n.zIndex||0),";\n  ")})),b=r.default.div.withConfig({displayName:"indexstyle__SubheaderStyle",componentId:"sc-s5rj34-4"})([""," "," ",""],(function(n){return!n.darkBorder&&"\n    border-bottom: 1px solid ".concat((n.theme.borders||o.Z.borders).darkLight,";\n  ")}),(function(n){return n.darkBorder&&"\n    border-bottom: 1px solid ".concat((n.theme.borders||o.Z.borders).medium,";\n  ")}),(function(n){return!n.noBackground&&"\n    background-color: ".concat((n.theme||o.Z).background.dashboard,";\n  ")})),v=r.default.div.withConfig({displayName:"indexstyle__CodeContainerStyle",componentId:"sc-s5rj34-5"})([""," border-left-style:",";border-left-width:","px;border-right-style:",";border-right-width:","px;position:relative;"," "," "," "," .line-numbers{opacity:0;}&.selected{.line-numbers{opacity:1 !important;}}"],s,c.M8,c.mP,c.M8,c.mP,(function(n){return"\n    background-color: ".concat((n.theme.background||o.Z.background).codeTextarea,";\n  ")}),(function(n){return!n.noPadding&&"\n    padding-bottom: ".concat(u.iI,"px;\n    padding-top: ").concat(u.iI,"px;\n  ")}),(function(n){return n.lightBackground&&"\n    background-color: ".concat((n.theme||o.Z).background.content,";\n  ")}),(function(n){return!n.hasOutput&&"\n    border-bottom-left-radius: ".concat(c.n_,"px;\n    border-bottom-right-radius: ").concat(c.n_,"px;\n    border-bottom-style: ").concat(c.M8,";\n    border-bottom-width: ").concat(c.mP,"px;\n  ")})),g=r.default.div.withConfig({displayName:"indexstyle__BlockDivider",componentId:"sc-s5rj34-6"})(["align-items:center;display:flex;height:","px;justify-content:center;position:relative;z-index:8;bottom:","px;&:hover{"," .block-divider-inner{","}}"],2*u.iI,.5*u.iI,(function(n){return n.additionalZIndex>0&&"\n      z-index: ".concat(8+n.additionalZIndex,";\n    ")}),(function(n){return"\n        background-color: ".concat((n.theme.text||o.Z.text).fileBrowser,";\n      ")})),y=r.default.div.withConfig({displayName:"indexstyle__BlockDividerInner",componentId:"sc-s5rj34-7"})(["height 1px;width:100%;position:absolute;z-index:-1;top:","px;"],1.5*u.iI),Z=r.default.div.withConfig({displayName:"indexstyle__CodeHelperStyle",componentId:"sc-s5rj34-8"})([""," ",""],(function(n){return"\n    border-bottom: 1px solid ".concat((n.theme.borders||o.Z.borders).medium,";\n    padding-left: ").concat(n.normalPadding?u.iI:d,"px;\n  ")}),(function(n){return!n.noMargin&&"\n    margin-bottom: ".concat(1*u.iI,"px;\n    padding-bottom: ").concat(1*u.iI,"px;\n  ")})),O=r.default.div.withConfig({displayName:"indexstyle__TimeTrackerStyle",componentId:"sc-s5rj34-9"})(["bottom:","px;left:","px;position:absolute;"],1*u.iI,d)},46978:function(n,t,e){"use strict";e.d(t,{Cl:function(){return u},Nk:function(){return a},ZG:function(){return c}});var r=e(38626),o=e(44897),i=e(70515),c=1.5*i.iI,u=1*c+i.iI/2,a=r.default.div.withConfig({displayName:"indexstyle__ContainerStyle",componentId:"sc-uvd91-0"})([".row:hover{","}"],(function(n){return"\n      background-color: ".concat((n.theme.interactive||o.Z.interactive).hoverBackground,";\n    ")}))},64657:function(n,t,e){"use strict";e.d(t,{CD:function(){return u},NU:function(){return i},a_:function(){return r},hu:function(){return c}});var r,o=e(44897);!function(n){n.BLOCK_RUNS="block_runs",n.BLOCK_RUNTIME="block_runtime",n.PIPELINE_RUNS="pipeline_runs"}(r||(r={}));var i=[o.Z.accent.warning,o.Z.background.success,o.Z.accent.negative,o.Z.content.active,o.Z.interactive.linkPrimary],c=["cancelled","completed","failed","initial","running"],u=-50},7116:function(n,t,e){"use strict";e.d(t,{Z:function(){return b}});e(82684);var r=e(34376),o=e(85854),i=e(75457),c=e(38276),u=e(30160),a=e(74395),d=e(38626),l=e(44897),s=e(70515),f=d.default.div.withConfig({displayName:"indexstyle__LinkStyle",componentId:"sc-1in9sst-0"})(["padding:","px ","px;"," ",""],s.iI,s.tr,(function(n){return n.selected&&"\n    background-color: ".concat((n.theme.interactive||l.Z.interactive).checked,";\n  ")}),(function(n){return!n.selected&&"\n    cursor: pointer;\n  "})),p=e(64657),h=e(28795),m=e(28598);var b=function(n){var t=n.breadcrumbs,e=n.children,d=n.errors,l=n.monitorType,b=n.pipeline,v=n.setErrors,g=n.subheader,y=(0,r.useRouter)();return(0,m.jsx)(i.Z,{before:(0,m.jsxs)(a.M,{children:[(0,m.jsx)(c.Z,{p:s.cd,children:(0,m.jsx)(o.Z,{level:4,muted:!0,children:"Insights"})}),(0,m.jsx)(f,{onClick:function(n){n.preventDefault(),y.push("/pipelines/[pipeline]/monitors","/pipelines/".concat(null===b||void 0===b?void 0:b.uuid,"/monitors"))},selected:p.a_.PIPELINE_RUNS==l,children:(0,m.jsx)(u.ZP,{children:"Pipeline runs"})}),(0,m.jsx)(f,{onClick:function(n){n.preventDefault(),y.push("/pipelines/[pipeline]/monitors/block-runs","/pipelines/".concat(null===b||void 0===b?void 0:b.uuid,"/monitors/block-runs"))},selected:p.a_.BLOCK_RUNS==l,children:(0,m.jsx)(u.ZP,{children:"Block runs"})}),(0,m.jsx)(f,{onClick:function(n){n.preventDefault(),y.push("/pipelines/[pipeline]/monitors/block-runtime","/pipelines/".concat(null===b||void 0===b?void 0:b.uuid,"/monitors/block-runtime"))},selected:p.a_.BLOCK_RUNTIME==l,children:(0,m.jsx)(u.ZP,{children:"Block runtime"})})]}),breadcrumbs:t,errors:d,pageName:h.M.MONITOR,pipeline:b,setErrors:v,subheader:g,uuid:"pipeline/monitor",children:e})}},74395:function(n,t,e){"use strict";e.d(t,{M:function(){return c},W:function(){return i}});var r=e(38626),o=e(46684),i=34*e(70515).iI,c=r.default.div.withConfig({displayName:"indexstyle__BeforeStyle",componentId:"sc-12ee2ib-0"})(["min-height:calc(100vh - ","px);"],o.Mz)},53998:function(n,t,e){"use strict";e.d(t,{Z:function(){return X}});var r=e(26304),o=e(82394),i=e(21831),c=e(82684),u=e(84969),a=e(90948),d=e(63588),l=e.n(d),s=e(75823),f=e(29989),p=e(62072),h=e(53989),m=e(49894),b=e(18246),v=e(59309),g=e(65743),y=["data","className","top","left","x","y0","y1","xScale","yScale","color","keys","value","order","offset","children"];function Z(){return Z=Object.assign||function(n){for(var t=1;t<arguments.length;t++){var e=arguments[t];for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r])}return n},Z.apply(this,arguments)}function O(n){var t=n.data,e=n.className,r=n.top,o=n.left,i=n.x,u=n.y0,a=void 0===u?p.l8:u,d=n.y1,O=void 0===d?p.xf:d,x=n.xScale,A=n.yScale,T=n.color,_=n.keys,R=n.value,E=n.order,k=n.offset,D=n.children,C=function(n,t){if(null==n)return{};var e,r,o={},i=Object.keys(n);for(r=0;r<i.length;r++)e=i[r],t.indexOf(e)>=0||(o[e]=n[e]);return o}(n,y),L=(0,s.Z)();_&&L.keys(_),R&&(0,m.Z)(L.value,R),E&&L.order((0,b.ZP)(E)),k&&L.offset((0,v.ZP)(k));var P=L(t),N=(0,h.Z)(x),j=P.map((function(n,t){var e=n.key;return{index:t,key:e,bars:n.map((function(t,r){var o=(A(a(t))||0)-(A(O(t))||0),c=A(O(t)),u="bandwidth"in x?x(i(t.data)):Math.max((x(i(t.data))||0)-N/2);return{bar:t,key:e,index:r,height:o,width:N,x:u||0,y:c||0,color:T(n.key,r)}}))}}));return D?c.createElement(c.Fragment,null,D(j)):c.createElement(f.Z,{className:l()("visx-bar-stack",e),top:r,left:o},j.map((function(n){return n.bars.map((function(t){return c.createElement(g.Z,Z({key:"bar-stack-"+n.index+"-"+t.index,x:t.x,y:t.y,height:t.height,width:t.width,fill:t.color},C))}))})))}var x=e(67778),A=e(17066),T=e(29179),_=e(65376),R=e(48072),E=e(98677),k=e(84181),D=e(24903),C=e(55485),L=e(26226),P=e(30160),N=e(94035),j=e(44897),S=e(42631),w=e(95363),M=e(70515),I=e(79221),B=e(28598),U=["height","width","xAxisLabel","yAxisLabel"];function H(n,t){var e=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable}))),e.push.apply(e,r)}return e}function F(n){for(var t=1;t<arguments.length;t++){var e=null!=arguments[t]?arguments[t]:{};t%2?H(Object(e),!0).forEach((function(t){(0,o.Z)(n,t,e[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(e)):H(Object(e)).forEach((function(t){Object.defineProperty(n,t,Object.getOwnPropertyDescriptor(e,t))}))}return n}function K(n){var t=n.backgroundColor,e=n.colors,r=n.data,o=n.getXValue,c=(n.getYValue,n.height),d=n.keys,l=n.margin,s=n.numYTicks,p=n.showLegend,h=n.tooltipLeftOffset,m=void 0===h?0:h,b=n.width,v=n.xLabelFormat,g=n.yLabelFormat,y=(0,T.Z)(),Z=y.hideTooltip,C=y.showTooltip,L=y.tooltipData,N=y.tooltipLeft,M=y.tooltipOpen,U=y.tooltipTop,H=b-(l.left+l.right),K=c-(l.bottom+l.top),X=r.reduce((function(n,t){var e=t,r=d.reduce((function(n,t){return Number(e[t])&&(n+=Number(e[t])),n}),0);return n.push(r),n}),[]),Y=(0,E.Z)({domain:r.map(o),padding:.4,range:[0,H],round:!1}),W=(0,k.Z)({domain:[0,Math.max.apply(Math,(0,i.Z)(X))],range:[K,0],round:!0}),z=(0,D.Z)({domain:d,range:e});return(0,B.jsxs)("div",{style:{position:"relative",zIndex:2},children:[(0,B.jsxs)("svg",{height:c,width:b,children:[(0,B.jsx)("rect",{fill:t||j.Z.background.chartBlock,height:c,rx:14,width:b,x:0,y:0}),(0,B.jsx)(x.Z,{height:K,left:l.left,scale:W,stroke:"black",strokeOpacity:.2,top:l.top,width:H}),(0,B.jsx)(f.Z,{left:l.left,top:l.top,children:(0,B.jsx)(O,{color:z,data:r,keys:d,value:function(n,t){return n[t]||0},x:o,xScale:Y,yScale:W,children:function(n){return n.map((function(n){return n.bars.map((function(t){return(0,B.jsx)("rect",{fill:t.color,height:t.height,onMouseLeave:Z,onMouseMove:function(n){var e=(0,R.Z)(n),r=t.x+t.width/2+m;C({tooltipData:t,tooltipLeft:r,tooltipTop:(null===e||void 0===e?void 0:e.y)+10})},width:t.width,x:t.x,y:t.y},"bar-stack-".concat(n.index,"-").concat(t.index))}))}))}})}),(0,B.jsx)(u.Z,{hideTicks:!0,left:l.left,numTicks:s,scale:W,stroke:j.Z.content.muted,tickFormat:function(n){return g?g(n):(0,I.P5)(n)},tickLabelProps:function(){return{fill:j.Z.content.muted,fontFamily:w.ry,fontSize:11,textAnchor:"end",transform:"translate(0,2.5)"}},top:l.top}),(0,B.jsx)(a.Z,{hideTicks:!0,left:l.left,scale:Y,stroke:j.Z.content.muted,tickFormat:v,tickLabelProps:function(){return{fill:j.Z.content.muted,fontFamily:w.ry,fontSize:11,textAnchor:"middle"}},top:K+l.top})]}),p&&(0,B.jsx)("div",{style:{display:"flex",fontSize:"14px",justifyContent:"center",position:"absolute",top:l.top/2-10,width:"100%"},children:(0,B.jsx)(A.Z,{direction:"row",labelMargin:"0 15px 0 0",scale:z})}),M&&L&&(0,B.jsxs)(_.Z,{left:N,style:F(F({},_.j),{},{backgroundColor:j.Z.background.page,borderRadius:"".concat(S.TR,"px"),padding:".3rem .4rem"}),top:U,children:[(0,B.jsx)(P.ZP,{bold:!0,color:z(L.key),children:L.key}),(0,B.jsx)(P.ZP,{children:L.bar.data[L.key]}),(0,B.jsx)(P.ZP,{children:o(L.bar.data)})]})]})}var X=function(n){var t=n.height,e=n.width,o=n.xAxisLabel,i=n.yAxisLabel,c=(0,r.Z)(n,U);return(0,B.jsx)(B.Fragment,{children:(0,B.jsxs)("div",{style:{height:t,marginBottom:M.iI,width:e},children:[i&&(0,B.jsx)(C.ZP,{alignItems:"center",fullHeight:!0,justifyContent:"center",width:28,children:(0,B.jsx)(N.Z,{children:(0,B.jsx)(P.ZP,{center:!0,muted:!0,small:!0,children:i})})}),(0,B.jsx)("div",{style:{height:t,width:i?0===e?e:e-28:e},children:(0,B.jsx)(L.Z,{children:function(n){var t=n.height,e=n.width;return(0,B.jsx)(K,F(F({},c),{},{height:t,width:e}))}})}),o&&(0,B.jsx)("div",{style:{paddingLeft:i?36:0,paddingTop:4},children:(0,B.jsx)(P.ZP,{center:!0,muted:!0,small:!0,children:o})})]})})}},94035:function(n,t,e){"use strict";var r=e(38626).default.div.withConfig({displayName:"YAxisLabelContainer",componentId:"sc-qwp21x-0"})(["-webkit-transform:rotate(-90deg);-moz-transform:rotate(-90deg);-o-transform:rotate(-90deg);-ms-transform:rotate(-90deg);transform:rotate(-90deg);white-space:nowrap;"]);t.Z=r},79221:function(n,t,e){"use strict";e.d(t,{P5:function(){return o},Vs:function(){return i}});e(81728);var r=Intl.NumberFormat("en-US",{notation:"compact",maximumFractionDigits:2});function o(n){return"number"!==typeof n?n:n>=1e4?r.format(n):n.toString()}function i(n,t,e){var r,o;if("undefined"===typeof n||"undefined"===typeof t)return 0;var i=null===n||void 0===n||null===(r=n(t,e))||void 0===r||null===(o=r.props)||void 0===o?void 0:o.children;return(Array.isArray(i)?i:[i]).join("").length}},44425:function(n,t,e){"use strict";e.d(t,{$W:function(){return v},DA:function(){return m},HX:function(){return O},J8:function(){return Z},L8:function(){return u},LE:function(){return f},Lk:function(){return T},Lq:function(){return p},M5:function(){return h},Q3:function(){return g},Qj:function(){return x},Ut:function(){return E},V4:function(){return R},VZ:function(){return y},dO:function(){return s},f2:function(){return _},iZ:function(){return A},t6:function(){return a},tf:function(){return l}});var r,o,i,c,u,a,d=e(82394);!function(n){n.CONDITION="condition",n.DBT_SNAPSHOT="snapshot",n.DYNAMIC="dynamic",n.DYNAMIC_CHILD="dynamic_child",n.REDUCE_OUTPUT="reduce_output",n.REPLICA="replica"}(u||(u={})),function(n){n.MARKDOWN="markdown",n.PYTHON="python",n.R="r",n.SQL="sql",n.YAML="yaml"}(a||(a={}));var l,s=(r={},(0,d.Z)(r,a.MARKDOWN,"MD"),(0,d.Z)(r,a.PYTHON,"PY"),(0,d.Z)(r,a.R,"R"),(0,d.Z)(r,a.SQL,"SQL"),(0,d.Z)(r,a.YAML,"YAML"),r),f=(o={},(0,d.Z)(o,a.MARKDOWN,"Markdown"),(0,d.Z)(o,a.PYTHON,"Python"),(0,d.Z)(o,a.R,"R"),(0,d.Z)(o,a.SQL,"SQL"),(0,d.Z)(o,a.YAML,"YAML"),o);!function(n){n.CALLBACK="callback",n.CHART="chart",n.CONDITIONAL="conditional",n.CUSTOM="custom",n.DATA_EXPORTER="data_exporter",n.DATA_LOADER="data_loader",n.DBT="dbt",n.EXTENSION="extension",n.GLOBAL_DATA_PRODUCT="global_data_product",n.SCRATCHPAD="scratchpad",n.SENSOR="sensor",n.MARKDOWN="markdown",n.TRANSFORMER="transformer"}(l||(l={}));var p,h=[l.CALLBACK,l.CONDITIONAL,l.EXTENSION];!function(n){n.BLUE="blue",n.GREY="grey",n.PINK="pink",n.PURPLE="purple",n.TEAL="teal",n.YELLOW="yellow"}(p||(p={}));var m,b,v=[l.CHART,l.CUSTOM,l.DATA_EXPORTER,l.DATA_LOADER,l.SCRATCHPAD,l.SENSOR,l.MARKDOWN,l.TRANSFORMER],g=[l.CUSTOM,l.DATA_EXPORTER,l.DATA_LOADER,l.SCRATCHPAD,l.SENSOR,l.MARKDOWN,l.TRANSFORMER],y=[l.DATA_EXPORTER,l.DATA_LOADER],Z=[l.DATA_EXPORTER,l.DATA_LOADER,l.TRANSFORMER],O=[l.DATA_EXPORTER,l.DATA_LOADER,l.DBT,l.TRANSFORMER],x=[l.CHART,l.SCRATCHPAD,l.SENSOR,l.MARKDOWN],A=[l.CALLBACK,l.CHART,l.EXTENSION,l.SCRATCHPAD,l.MARKDOWN],T=[l.CUSTOM,l.DATA_EXPORTER,l.DATA_LOADER,l.SENSOR,l.TRANSFORMER];!function(n){n.EXECUTED="executed",n.FAILED="failed",n.NOT_EXECUTED="not_executed",n.UPDATED="updated"}(m||(m={})),function(n){n.BLOCK_FILE="block_file",n.CUSTOM_BLOCK_TEMPLATE="custom_block_template",n.MAGE_TEMPLATE="mage_template"}(b||(b={}));var _=[l.CUSTOM,l.DATA_EXPORTER,l.DATA_LOADER,l.TRANSFORMER],R=(i={},(0,d.Z)(i,l.CALLBACK,"Callback"),(0,d.Z)(i,l.CHART,"Chart"),(0,d.Z)(i,l.CONDITIONAL,"Conditional"),(0,d.Z)(i,l.CUSTOM,"Custom"),(0,d.Z)(i,l.DATA_EXPORTER,"Data exporter"),(0,d.Z)(i,l.DATA_LOADER,"Data loader"),(0,d.Z)(i,l.DBT,"DBT"),(0,d.Z)(i,l.EXTENSION,"Extension"),(0,d.Z)(i,l.GLOBAL_DATA_PRODUCT,"Global data product"),(0,d.Z)(i,l.MARKDOWN,"Markdown"),(0,d.Z)(i,l.SCRATCHPAD,"Scratchpad"),(0,d.Z)(i,l.SENSOR,"Sensor"),(0,d.Z)(i,l.TRANSFORMER,"Transformer"),i),E=[l.DATA_LOADER,l.TRANSFORMER,l.DATA_EXPORTER,l.SENSOR];c={},(0,d.Z)(c,l.DATA_EXPORTER,"DE"),(0,d.Z)(c,l.DATA_LOADER,"DL"),(0,d.Z)(c,l.SCRATCHPAD,"SP"),(0,d.Z)(c,l.SENSOR,"SR"),(0,d.Z)(c,l.MARKDOWN,"MD"),(0,d.Z)(c,l.TRANSFORMER,"TF")},57772:function(n,t,e){"use strict";e.r(t);var r=e(77837),o=e(75582),i=e(82394),c=e(38860),u=e.n(c),a=e(82684),d=e(92083),l=e.n(d),s=e(38626),f=e(53998),p=e(39867),h=e(55485),m=e(85854),b=e(7116),v=e(93808),g=e(44085),y=e(38276),Z=e(35686),O=e(44897),x=e(64657),A=e(46978),T=e(55283),_=e(3917),R=e(86735),E=e(28598);function k(n,t){var e=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable}))),e.push.apply(e,r)}return e}function D(n){for(var t=1;t<arguments.length;t++){var e=null!=arguments[t]?arguments[t]:{};t%2?k(Object(e),!0).forEach((function(t){(0,i.Z)(n,t,e[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(e)):k(Object(e)).forEach((function(t){Object.defineProperty(n,t,Object.getOwnPropertyDescriptor(e,t))}))}return n}function C(n){var t=n.pipeline,e=(0,a.useContext)(s.ThemeContext),r=(0,a.useState)(null),c=r[0],u=r[1],d=t.uuid,v=Z.ZP.pipelines.detail(d,{includes_content:!1,includes_outputs:!1},{revalidateOnFocus:!1}).data,k=(0,a.useMemo)((function(){return D(D({},null===v||void 0===v?void 0:v.pipeline),{},{uuid:d})}),[v,d]),C=Z.ZP.pipeline_schedules.pipelines.list(d).data,L=(0,a.useMemo)((function(){return null===C||void 0===C?void 0:C.pipeline_schedules}),[C]),P=(0,a.useMemo)((function(){return(0,R.HK)(null===k||void 0===k?void 0:k.blocks,(function(n){return n.uuid}))||{}}),[k]),N={pipeline_uuid:d};(c||0===c)&&(N.pipeline_schedule_id=Number(c));var j=Z.ZP.monitor_stats.detail("block_run_count",N),S=j.data,w=j.mutate,M=((null===S||void 0===S?void 0:S.monitor_stat)||{}).stats,I=(0,a.useMemo)((function(){return(0,_.Y_)()}),[]),B=(0,a.useMemo)((function(){if(M)return Object.entries(M).reduce((function(n,t){var e=(0,o.Z)(t,2),r=e[0],c=e[1].data,u=I.map((function(n){return D({date:n},c[n]||{})}));return D(D({},n),{},(0,i.Z)({},r,u))}),{})}),[I,M]),U=(0,a.useMemo)((function(){var n=[];return n.push({bold:!0,label:function(){return"Monitors"}}),n}),[]);return(0,E.jsx)(b.Z,{breadcrumbs:U,monitorType:x.a_.BLOCK_RUNS,pipeline:k,subheader:(0,E.jsx)(h.ZP,{children:(0,E.jsxs)(g.Z,{backgroundColor:O.Z.interactive.defaultBackground,label:"Trigger:",onChange:function(n){var t=n.target.value;"initial"!==t?(u(t),w(t)):(w(),u(null))},value:c||"initial",children:[(0,E.jsx)("option",{value:"initial",children:"All"}),L&&L.map((function(n){return(0,E.jsx)("option",{value:n.id,children:n.name},n.id)}))]})}),children:(0,E.jsx)(y.Z,{mx:2,children:B&&Object.entries(B).map((function(n){var t,r,i=(0,o.Z)(n,2),c=i[0],u=i[1];return(0,E.jsxs)(y.Z,{mt:3,children:[(0,E.jsxs)(h.ZP,{alignItems:"center",children:[(0,E.jsx)(y.Z,{mx:1,children:(0,E.jsx)(p.Z,{color:(0,T.qn)(null===(t=P[c])||void 0===t?void 0:t.type,{blockColor:null===(r=P[c])||void 0===r?void 0:r.color,theme:e}).accent,size:A.ZG,square:!0})}),(0,E.jsx)(m.Z,{level:4,children:c})]}),(0,E.jsx)(y.Z,{mt:1,children:(0,E.jsx)(f.Z,{colors:x.NU,data:u,getXValue:function(n){return n.date},height:200,keys:x.hu,margin:{bottom:30,left:35,right:0,top:10},tooltipLeftOffset:x.CD,xLabelFormat:function(n){return l()(n).format("MMM DD")}})})]},c)}))})})}C.getInitialProps=function(){var n=(0,r.Z)(u().mark((function n(t){var e;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e=t.query.pipeline,n.abrupt("return",{pipeline:{uuid:e}});case 2:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),t.default=(0,v.Z)(C)},83542:function(n,t,e){(window.__NEXT_P=window.__NEXT_P||[]).push(["/pipelines/[pipeline]/monitors/block-runs",function(){return e(57772)}])},80022:function(n,t,e){"use strict";function r(n){if(void 0===n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return n}e.d(t,{Z:function(){return r}})},15544:function(n,t,e){"use strict";function r(n){return r=Object.setPrototypeOf?Object.getPrototypeOf:function(n){return n.__proto__||Object.getPrototypeOf(n)},r(n)}e.d(t,{Z:function(){return r}})},99177:function(n,t,e){"use strict";function r(n,t){return r=Object.setPrototypeOf||function(n,t){return n.__proto__=t,n},r(n,t)}function o(n,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");n.prototype=Object.create(t&&t.prototype,{constructor:{value:n,writable:!0,configurable:!0}}),t&&r(n,t)}e.d(t,{Z:function(){return o}})},93189:function(n,t,e){"use strict";e.d(t,{Z:function(){return i}});var r=e(12539),o=e(80022);function i(n,t){if(t&&("object"===r(t)||"function"===typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return(0,o.Z)(n)}}},function(n){n.O(0,[844,5716,5896,2714,8013,600,4636,8264,6833,5457,9774,2888,179],(function(){return t=83542,n(n.s=t);var t}));var t=n.O();_N_E=t}]);