(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5378],{55283:function(n,e,t){"use strict";t.d(e,{HC:function(){return y},HS:function(){return g},Kf:function(){return s},Nk:function(){return p},PB:function(){return b},PY:function(){return f},gE:function(){return x},jv:function(){return m},nz:function(){return h},oh:function(){return l},qn:function(){return u},t1:function(){return O},y9:function(){return v}});var o=t(38626),r=t(44897),i=t(44425),c=t(42631),a=t(70515),d=t(91437),l=68;function u(n,e){var t,o,c=((null===e||void 0===e||null===(t=e.theme)||void 0===t?void 0:t.borders)||r.Z.borders).light,a=((null===e||void 0===e||null===(o=e.theme)||void 0===o?void 0:o.monotone)||r.Z.monotone).grey500,d=e||{},l=d.blockColor,u=d.isSelected,s=d.theme;return u?c=(s||r.Z).content.active:i.tf.TRANSFORMER===n||l===i.Lq.PURPLE?(c=(s||r.Z).accent.purple,a=(s||r.Z).accent.purpleLight):i.tf.DATA_EXPORTER===n||l===i.Lq.YELLOW?(c=(s||r.Z).accent.yellow,a=(s||r.Z).accent.yellowLight):i.tf.DATA_LOADER===n||l===i.Lq.BLUE?(c=(s||r.Z).accent.blue,a=(s||r.Z).accent.blueLight):i.tf.MARKDOWN===n?(c=(s||r.Z).accent.sky,a=(s||r.Z).accent.skyLight):i.tf.SENSOR===n||l===i.Lq.PINK?(c=(s||r.Z).accent.pink,a=(s||r.Z).accent.pinkLight):i.tf.DBT===n?(c=(s||r.Z).accent.dbt,a=(s||r.Z).accent.dbtLight):i.tf.EXTENSION===n||l===i.Lq.TEAL?(c=((null===s||void 0===s?void 0:s.accent)||r.Z.accent).teal,a=((null===s||void 0===s?void 0:s.accent)||r.Z.accent).tealLight):i.tf.CALLBACK===n?(c=((null===s||void 0===s?void 0:s.accent)||r.Z.accent).rose,a=((null===s||void 0===s?void 0:s.accent)||r.Z.accent).roseLight):i.tf.CONDITIONAL===n||i.tf.SCRATCHPAD===n||l===i.Lq.GREY||i.tf.CUSTOM===n&&!l?(c=(s||r.Z).content.default,a=(s||r.Z).accent.contentDefaultTransparent):i.tf.GLOBAL_DATA_PRODUCT!==n||l||(c=(s||r.Z).monotone.white,a=(s||r.Z).monotone.whiteTransparent),{accent:c,accentLight:a}}var s=(0,o.css)([""," "," "," "," "," "," ",""],(0,d.eR)(),(function(n){return!n.selected&&!n.hasError&&"\n    border-color: ".concat(u(n.blockType,n).accentLight,";\n  ")}),(function(n){return n.selected&&!n.hasError&&"\n    border-color: ".concat(u(n.blockType,n).accent,";\n  ")}),(function(n){return!n.selected&&n.hasError&&"\n    border-color: ".concat((n.theme.accent||r.Z.accent).negativeTransparent,";\n  ")}),(function(n){return n.selected&&n.hasError&&"\n    border-color: ".concat((n.theme.borders||r.Z.borders).danger,";\n  ")}),(function(n){return n.dynamicBlock&&"\n    border-style: dashed !important;\n  "}),(function(n){return n.dynamicChildBlock&&"\n    border-style: dotted !important;\n  "})),p=o.default.div.withConfig({displayName:"indexstyle__ContainerStyle",componentId:"sc-s5rj34-0"})(["border-radius:","px;position:relative;"],c.n_),f=o.default.div.withConfig({displayName:"indexstyle__HiddenBlockContainerStyle",componentId:"sc-s5rj34-1"})([""," border-radius:","px;border-style:",";border-width:","px;",""],s,c.n_,c.M8,c.mP,(function(n){return"\n    background-color: ".concat((n.theme||r.Z).background.content,";\n\n    &:hover {\n      border-color: ").concat(u(n.blockType,n).accent,";\n    }\n  ")})),b=o.default.div.withConfig({displayName:"indexstyle__HeaderHorizontalBorder",componentId:"sc-s5rj34-2"})(["",""],(function(n){return"\n    border-bottom: 1px solid ".concat((n.theme||r.Z).borders.darkLight,";\n  ")})),h=o.default.div.withConfig({displayName:"indexstyle__BlockHeaderStyle",componentId:"sc-s5rj34-3"})([""," border-top-left-radius:","px;border-top-right-radius:","px;border-top-style:",";border-top-width:","px;border-left-style:",";border-left-width:","px;border-right-style:",";border-right-width:","px;padding:","px;position:sticky;top:-5px;"," ",""],s,c.n_,c.n_,c.M8,c.mP,c.M8,c.mP,c.M8,c.mP,a.iI,(function(n){return"\n    background-color: ".concat((n.theme||r.Z).background.dashboard,";\n  ")}),(function(n){return n.zIndex&&"\n    z-index: ".concat(6+(n.zIndex||0),";\n  ")})),g=o.default.div.withConfig({displayName:"indexstyle__SubheaderStyle",componentId:"sc-s5rj34-4"})([""," "," ",""],(function(n){return!n.darkBorder&&"\n    border-bottom: 1px solid ".concat((n.theme.borders||r.Z.borders).darkLight,";\n  ")}),(function(n){return n.darkBorder&&"\n    border-bottom: 1px solid ".concat((n.theme.borders||r.Z.borders).medium,";\n  ")}),(function(n){return!n.noBackground&&"\n    background-color: ".concat((n.theme||r.Z).background.dashboard,";\n  ")})),m=o.default.div.withConfig({displayName:"indexstyle__CodeContainerStyle",componentId:"sc-s5rj34-5"})([""," border-left-style:",";border-left-width:","px;border-right-style:",";border-right-width:","px;position:relative;"," "," "," "," .line-numbers{opacity:0;}&.selected{.line-numbers{opacity:1 !important;}}"],s,c.M8,c.mP,c.M8,c.mP,(function(n){return"\n    background-color: ".concat((n.theme.background||r.Z.background).codeTextarea,";\n  ")}),(function(n){return!n.noPadding&&"\n    padding-bottom: ".concat(a.iI,"px;\n    padding-top: ").concat(a.iI,"px;\n  ")}),(function(n){return n.lightBackground&&"\n    background-color: ".concat((n.theme||r.Z).background.content,";\n  ")}),(function(n){return!n.hasOutput&&"\n    border-bottom-left-radius: ".concat(c.n_,"px;\n    border-bottom-right-radius: ").concat(c.n_,"px;\n    border-bottom-style: ").concat(c.M8,";\n    border-bottom-width: ").concat(c.mP,"px;\n  ")})),x=o.default.div.withConfig({displayName:"indexstyle__BlockDivider",componentId:"sc-s5rj34-6"})(["align-items:center;display:flex;height:","px;justify-content:center;position:relative;z-index:8;bottom:","px;&:hover{"," .block-divider-inner{","}}"],2*a.iI,.5*a.iI,(function(n){return n.additionalZIndex>0&&"\n      z-index: ".concat(8+n.additionalZIndex,";\n    ")}),(function(n){return"\n        background-color: ".concat((n.theme.text||r.Z.text).fileBrowser,";\n      ")})),O=o.default.div.withConfig({displayName:"indexstyle__BlockDividerInner",componentId:"sc-s5rj34-7"})(["height 1px;width:100%;position:absolute;z-index:-1;top:","px;"],1.5*a.iI),v=o.default.div.withConfig({displayName:"indexstyle__CodeHelperStyle",componentId:"sc-s5rj34-8"})([""," ",""],(function(n){return"\n    border-bottom: 1px solid ".concat((n.theme.borders||r.Z.borders).medium,";\n    padding-left: ").concat(n.normalPadding?a.iI:l,"px;\n  ")}),(function(n){return!n.noMargin&&"\n    margin-bottom: ".concat(1*a.iI,"px;\n    padding-bottom: ").concat(1*a.iI,"px;\n  ")})),y=o.default.div.withConfig({displayName:"indexstyle__TimeTrackerStyle",componentId:"sc-s5rj34-9"})(["bottom:","px;left:","px;position:absolute;"],1*a.iI,l)},44425:function(n,e,t){"use strict";t.d(e,{$W:function(){return m},DA:function(){return h},HX:function(){return y},J8:function(){return v},L8:function(){return a},LE:function(){return p},Lk:function(){return w},Lq:function(){return f},M5:function(){return b},Q3:function(){return x},Qj:function(){return A},Ut:function(){return C},V4:function(){return P},VZ:function(){return O},dO:function(){return s},f2:function(){return Z},iZ:function(){return k},t6:function(){return d},tf:function(){return u}});var o,r,i,c,a,d,l=t(82394);!function(n){n.CONDITION="condition",n.DBT_SNAPSHOT="snapshot",n.DYNAMIC="dynamic",n.DYNAMIC_CHILD="dynamic_child",n.REDUCE_OUTPUT="reduce_output",n.REPLICA="replica"}(a||(a={})),function(n){n.MARKDOWN="markdown",n.PYTHON="python",n.R="r",n.SQL="sql",n.YAML="yaml"}(d||(d={}));var u,s=(o={},(0,l.Z)(o,d.MARKDOWN,"MD"),(0,l.Z)(o,d.PYTHON,"PY"),(0,l.Z)(o,d.R,"R"),(0,l.Z)(o,d.SQL,"SQL"),(0,l.Z)(o,d.YAML,"YAML"),o),p=(r={},(0,l.Z)(r,d.MARKDOWN,"Markdown"),(0,l.Z)(r,d.PYTHON,"Python"),(0,l.Z)(r,d.R,"R"),(0,l.Z)(r,d.SQL,"SQL"),(0,l.Z)(r,d.YAML,"YAML"),r);!function(n){n.CALLBACK="callback",n.CHART="chart",n.CONDITIONAL="conditional",n.CUSTOM="custom",n.DATA_EXPORTER="data_exporter",n.DATA_LOADER="data_loader",n.DBT="dbt",n.EXTENSION="extension",n.GLOBAL_DATA_PRODUCT="global_data_product",n.SCRATCHPAD="scratchpad",n.SENSOR="sensor",n.MARKDOWN="markdown",n.TRANSFORMER="transformer"}(u||(u={}));var f,b=[u.CALLBACK,u.CONDITIONAL,u.EXTENSION];!function(n){n.BLUE="blue",n.GREY="grey",n.PINK="pink",n.PURPLE="purple",n.TEAL="teal",n.YELLOW="yellow"}(f||(f={}));var h,g,m=[u.CHART,u.CUSTOM,u.DATA_EXPORTER,u.DATA_LOADER,u.SCRATCHPAD,u.SENSOR,u.MARKDOWN,u.TRANSFORMER],x=[u.CUSTOM,u.DATA_EXPORTER,u.DATA_LOADER,u.SCRATCHPAD,u.SENSOR,u.MARKDOWN,u.TRANSFORMER],O=[u.DATA_EXPORTER,u.DATA_LOADER],v=[u.DATA_EXPORTER,u.DATA_LOADER,u.TRANSFORMER],y=[u.DATA_EXPORTER,u.DATA_LOADER,u.DBT,u.TRANSFORMER],A=[u.CHART,u.SCRATCHPAD,u.SENSOR,u.MARKDOWN],k=[u.CALLBACK,u.CHART,u.EXTENSION,u.SCRATCHPAD,u.MARKDOWN],w=[u.CUSTOM,u.DATA_EXPORTER,u.DATA_LOADER,u.SENSOR,u.TRANSFORMER];!function(n){n.EXECUTED="executed",n.FAILED="failed",n.NOT_EXECUTED="not_executed",n.UPDATED="updated"}(h||(h={})),function(n){n.BLOCK_FILE="block_file",n.CUSTOM_BLOCK_TEMPLATE="custom_block_template",n.MAGE_TEMPLATE="mage_template"}(g||(g={}));var Z=[u.CUSTOM,u.DATA_EXPORTER,u.DATA_LOADER,u.TRANSFORMER],P=(i={},(0,l.Z)(i,u.CALLBACK,"Callback"),(0,l.Z)(i,u.CHART,"Chart"),(0,l.Z)(i,u.CONDITIONAL,"Conditional"),(0,l.Z)(i,u.CUSTOM,"Custom"),(0,l.Z)(i,u.DATA_EXPORTER,"Data exporter"),(0,l.Z)(i,u.DATA_LOADER,"Data loader"),(0,l.Z)(i,u.DBT,"DBT"),(0,l.Z)(i,u.EXTENSION,"Extension"),(0,l.Z)(i,u.GLOBAL_DATA_PRODUCT,"Global data product"),(0,l.Z)(i,u.MARKDOWN,"Markdown"),(0,l.Z)(i,u.SCRATCHPAD,"Scratchpad"),(0,l.Z)(i,u.SENSOR,"Sensor"),(0,l.Z)(i,u.TRANSFORMER,"Transformer"),i),C=[u.DATA_LOADER,u.TRANSFORMER,u.DATA_EXPORTER,u.SENSOR];c={},(0,l.Z)(c,u.DATA_EXPORTER,"DE"),(0,l.Z)(c,u.DATA_LOADER,"DL"),(0,l.Z)(c,u.SCRATCHPAD,"SP"),(0,l.Z)(c,u.SENSOR,"SR"),(0,l.Z)(c,u.MARKDOWN,"MD"),(0,l.Z)(c,u.TRANSFORMER,"TF")},98777:function(n,e,t){"use strict";t.d(e,{e:function(){return k}});var o=t(82394),r=t(26304),i=t(82684),c=t(38626),a=t(65976),d=t(97618),l=t(55485),u=t(38276),s=t(30160),p=t(44897),f=t(72473),b=t(42631),h=t(47041),g=t(48670),m=t(70515),x=t(91437),O=t(28598),v=["beforeTitleElement","children","contentOverflowVisible","first","hideScrollbar","highlighted","last","maxHeight","noBackground","noBorderRadius","noPaddingContent","onClick","onEntered","onExited","singlePanel","smallTitle","title","titleXPadding","titleYPadding","visible","visibleCount","visibleHighlightDisabled"];function y(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(n);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,o)}return t}function A(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?y(Object(t),!0).forEach((function(e){(0,o.Z)(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):y(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}var k=300,w=c.default.div.withConfig({displayName:"AccordionPanel__AccordionPanelStyle",componentId:"sc-sf242a-0"})([".accordion-panel-chevron-down-exit-done{transform:rotate(0deg);transition:all 200ms;}.accordion-panel-chevron-down-enter-active{transform:rotate(180deg);transition:all 200ms;}.accordion-panel-chevron-down-enter-done,.accordion-panel-chevron-down-enter-done-visible{transform:rotate(180deg);transition:all 300ms;}.accordion-panel-chevron-down-exit{transform:rotate(0deg);transition:all 300ms;}.accordion-panel-content-enter{display:block;max-height:0px;overflow:hidden;transition:max-height 400ms ease-in-out;}.accordion-panel-content-enter-active{max-height:100vh;","}.accordion-panel-content-enter-done{display:block;}.accordion-panel-content-exit{display:block;max-height:100vh;"," overflow:hidden;}.accordion-panel-content-exit-active{max-height:0px;transition:max-height 300ms cubic-bezier(0,1,0,1);}.accordion-panel-content-exit-done{display:none;}"],(function(n){return n.maxHeight&&"\n      max-height: ".concat(n.maxHeight,"px;\n    ")}),(function(n){return n.maxHeight&&"\n      max-height: ".concat(n.maxHeight,"px;\n    ")})),Z=c.default.a.withConfig({displayName:"AccordionPanel__TitleStyle",componentId:"sc-sf242a-1"})([""," display:block;position:relative;z-index:1;"," "," "," "," "," "," "," "," ",""],g.R,(function(n){return"\n    &:hover,\n    &:focus {\n      outline: none;\n    }\n    ".concat((0,x.Kl)(n),"\n\n    background-color: ").concat((n.theme.background||p.Z.background).table,";\n\n    &:hover {\n      background-color: ").concat((n.theme||p.Z).background.page,";\n    }\n\n    &:active {\n      background-color: ").concat((n.theme||p.Z).background.page,";\n    }\n  ")}),(function(n){return n.visible&&"\n    border-bottom: 1px solid ".concat((n.theme||p.Z).borders.medium2,";\n  ")}),(function(n){return!n.first&&n.visible&&"\n    border-top: 1px solid ".concat((n.theme||p.Z).borders.medium2,";\n  ")}),(function(n){return!n.noBorderRadius&&n.first&&"\n    border-top-left-radius: ".concat(b.n_,"px;\n    border-top-right-radius: ").concat(b.n_,"px;\n  ")}),(function(n){return!n.noBorderRadius&&(n.last||n.singlePanel)&&!n.visible&&"\n    border-bottom-left-radius: ".concat(b.n_,"px;\n    border-bottom-right-radius: ").concat(b.n_,"px;\n  ")}),(function(n){return"undefined"!==typeof n.titleXPadding&&"\n    padding-left: ".concat(n.titleXPadding,"px;\n    padding-right: ").concat(n.titleXPadding,"px;\n  ")}),(function(n){return"undefined"===typeof n.titleXPadding&&"\n    padding-left: ".concat(2*m.iI,"px;\n    padding-right: ").concat(2*m.iI,"px;\n  ")}),(function(n){return"undefined"!==typeof n.titleYPadding&&"\n    padding-bottom: ".concat(n.titleYPadding,"px;\n    padding-top: ").concat(n.titleYPadding,"px;\n  ")}),(function(n){return"undefined"===typeof n.titleXPadding&&"\n    padding-bottom: ".concat(2*m.iI,"px;\n    padding-top: ").concat(2*m.iI,"px;\n  ")})),P=c.default.div.withConfig({displayName:"AccordionPanel__ContentStyle",componentId:"sc-sf242a-2"})(["padding-left:","px;padding-right:","px;"," "," "," "," "," "," ",""],2*m.iI,2*m.iI,h.w5,(function(n){return n.hideScrollbar&&"\n    ::-webkit-scrollbar {\n      display: none;\n    }\n  "}),(function(n){return!n.visible&&"\n    display: none;\n  "}),(function(n){return!n.contentOverflowVisible&&"\n    overflow-y: auto;\n  "}),(function(n){return n.contentOverflowVisible&&"\n    overflow-y: visible;\n  "}),(function(n){return n.maxHeight&&"\n    max-height: ".concat(n.maxHeight,"px;\n  ")}),(function(n){return n.noPaddingContent&&"\n    padding: 0;\n  "})),C=c.default.div.withConfig({displayName:"AccordionPanel__ContentInnerStyle",componentId:"sc-sf242a-3"})(["padding-bottom:","px;padding-top:","px;",""],2*m.iI,2*m.iI,(function(n){return n.noPaddingContent&&"\n    padding: 0;\n  "})),_=function(n,e){var t=n.beforeTitleElement,o=n.children,i=n.contentOverflowVisible,c=n.first,p=n.hideScrollbar,b=n.highlighted,h=n.last,g=n.maxHeight,x=n.noBackground,y=(n.noBorderRadius,n.noPaddingContent),_=n.onClick,D=n.onEntered,E=n.onExited,T=n.singlePanel,j=n.smallTitle,R=n.title,S=n.titleXPadding,N=n.titleYPadding,I=n.visible,L=n.visibleCount,M=n.visibleHighlightDisabled,B=(0,r.Z)(n,v);return(0,O.jsxs)(w,A(A({},B),{},{maxHeight:g,children:[(0,O.jsx)(Z,{first:c,href:"#",last:h,noBorderRadius:!0,noHoverUnderline:!0,onClick:function(n){n.preventDefault(),_&&_(n)},onKeyPress:function(n){" "===n.key&&_&&_(n)},singlePanel:T,titleXPadding:S,titleYPadding:N,visible:I&&!M,children:(0,O.jsxs)(l.ZP,{alignItems:"center",justifyContent:"space-between",children:[(0,O.jsxs)(l.ZP,{alignItems:"center",children:[t,t&&(0,O.jsx)(u.Z,{ml:1}),"string"!==typeof R&&R,"string"===typeof R&&(0,O.jsx)(s.ZP,{bold:!0,default:!I,large:!j,wind:b,children:R})]}),(0,O.jsx)(u.Z,{mr:1}),(0,O.jsx)(a.Z,{classNames:"accordion-panel-chevron-down",in:I,timeout:400,children:(0,O.jsx)(d.Z,{className:I&&0===L&&"accordion-panel-chevron-down-enter-done-visible",children:(0,O.jsx)(f._M,{default:!0,size:2*m.iI})})})]})}),(0,O.jsx)(a.Z,{classNames:"accordion-panel-content",in:I,onEntered:function(n){return D&&D(n)},onExited:function(n){return E&&E(n)},timeout:k,children:(0,O.jsx)(P,{contentOverflowVisible:i,hideScrollbar:p,maxHeight:g,noBackground:x,noPaddingContent:y,visible:I,children:(0,O.jsx)(C,{noPaddingContent:y,ref:e,children:o})})})]}))};e.Z=i.forwardRef(_)},32013:function(n,e,t){"use strict";var o=t(82394),r=t(26304),i=t(82684),c=t(38626),a=(t(98777),t(15338)),d=t(44897),l=t(42631),u=t(28598),s=["activeItemIndex","children","onClick","showDividers","visibleMapping","visibleMappingForced"];function p(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(n);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,o)}return t}function f(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?p(Object(t),!0).forEach((function(e){(0,o.Z)(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):p(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}var b=c.default.div.withConfig({displayName:"Accordion__AccordionStyle",componentId:"sc-1xr4nou-0"})(["overflow:hidden;"," "," "," ",""],(function(n){return"\n    background-color: ".concat((n.theme.background||d.Z.background).content,";\n    box-shadow: ").concat((n.theme||d.Z).shadow.frame,";\n  ")}),(function(n){return!n.highlighted&&"\n    border-color: ".concat((n.theme||d.Z).background.panel,";\n  ")}),(function(n){return n.highlighted&&"\n    border-color: ".concat((n.theme||d.Z).brand.wind400,";\n  ")}),(function(n){return!n.noBorder&&"\n    border-radius: ".concat(l.n_,"px;\n    border-width: ").concat(l.YF,"px;\n    border-style: ").concat(l.M8,";\n  ")})),h=c.default.div.withConfig({displayName:"Accordion__AccordionPanelContainerStyle",componentId:"sc-1xr4nou-1"})([""]);e.Z=function(n){var e=n.activeItemIndex,t=n.children,c=n.onClick,d=n.showDividers,l=n.visibleMapping,p=n.visibleMappingForced,g=(0,r.Z)(n,s),m=(0,i.useState)(l||{}),x=m[0],O=m[1],v=(0,i.useState)({}),y=v[0],A=v[1];return(0,i.useEffect)((function(){p&&O((function(n){return f(f({},n),p)}))}),[p]),(0,u.jsx)(b,f(f({},g),{},{children:i.Children.map(t,(function(n,r){var l=i.Children.count(t),s=r===l-1,p=x[r];return(0,u.jsxs)("div",{children:[(0,u.jsx)(h,{index:r,showDividers:d,children:i.cloneElement(n,f(f({},g),{},{first:0===r,last:s,onClick:function(){var n;A(f(f({},y),{},(0,o.Z)({},r,y[r]?y[r]+1:1))),n=f(f({},x),{},(0,o.Z)({},r,!p)),O(n),c&&c(n)},singlePanel:1===l,visible:p,visibleCount:y[r]||0,visibleHighlightDisabled:"undefined"!==typeof e&&r!==e}))}),d&&(0,u.jsx)(a.Z,{})]},r)}))}))}},70652:function(n,e,t){"use strict";var o=t(21831),r=t(82394),i=t(26304),c=(t(82684),t(38626)),a=t(55485),d=t(38276),l=t(30160),u=t(44897),s=t(72473),p=t(42631),f=t(70515),b=t(28598),h=["beforeIcon","checked","disabled","errorMessage","label","labelDescription","large","meta","monospace","onClick","required","small","warning","xsmall"];function g(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(n);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,o)}return t}function m(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?g(Object(t),!0).forEach((function(e){(0,r.Z)(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):g(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}var x=c.default.div.withConfig({displayName:"Checkbox__CheckboxContainer",componentId:"sc-ujqx42-0"})(["display:inline-block;vertical-align:middle;cursor:pointer;"]),O=c.default.div.withConfig({displayName:"Checkbox__ErrorContainer",componentId:"sc-ujqx42-1"})(["margin-top:4px;"]),v=c.default.input.withConfig({displayName:"Checkbox__HiddenCheckbox",componentId:"sc-ujqx42-2"})(["border:0;clip:rect(0 0 0 0);clippath:inset(50%);height:1px;margin:-1px;overflow:hidden;padding:0;position:absolute;white-space:nowrap;width:1px;",""],(function(n){return n.notClickable&&"\n    background-color: ".concat((n.theme.content||u.Z.content).disabled,"\n    border-color: ").concat((n.theme.content||u.Z.content).disabled,"\n\n    &:hover {\n      cursor: not-allowed;\n    }\n  ")})),y=c.default.div.withConfig({displayName:"Checkbox__StyledCheckbox",componentId:"sc-ujqx42-3"})(["border-radius:","px;height:","px;transition:all 150ms;width:","px;svg{position:relative;visibility:",";}"," "," "," "," input[disabled]{cursor:default;}"," ",""],.5*f.iI,2*f.iI,2*f.iI,(function(n){return n.checked||n.required?"visible":"hidden"}),(function(n){return n.large&&"\n    svg {\n      left: -4px;\n      top: -8px;\n    }\n  "}),(function(n){return!n.checked&&"\n    background-color: ".concat((n.theme.background||u.Z.background).popup,";\n    border: ").concat(p.PV,"px ").concat(p.M8," ").concat((n.theme.content||u.Z.content).muted,";\n  ")}),(function(n){return n.checked&&"\n    background-color: ".concat((n.theme.interactive||u.Z.interactive).checked,";\n    border: ").concat(p.YF,"px ").concat(p.M8," transparent;\n  ")}),(function(n){return n.required&&"\n    background-color: ".concat((n.theme.content||u.Z.content).disabled,";\n    border: ").concat(p.YF,"px ").concat(p.M8," transparent;\n  ")}),(function(n){return n.disabled&&"\n    background-color: ".concat((n.theme.content||u.Z.content).disabled,";\n    border-color: ").concat((n.theme.content||u.Z.content).disabled,";\n\n    &:hover {\n      cursor: not-allowed;\n    }\n  ")}),(function(n){return n.warning&&"\n    background-color: ".concat((n.theme.accent||u.Z.accent).warning,";\n    border-color: ").concat((n.theme.interactive||u.Z.interactive).defaultBorder,"\n  ")})),A=c.default.label.withConfig({displayName:"Checkbox__LabelStyle",componentId:"sc-ujqx42-4"})(["-ms-flex-direction:column;align-items:center;display:flex;flex-direction:column;flex-direction:row;&:hover{cursor:pointer;}"]);e.Z=function(n){var e=n.beforeIcon,t=n.checked,r=n.disabled,c=n.errorMessage,u=n.label,p=n.labelDescription,g=n.large,k=n.meta,w=n.monospace,Z=void 0!==w&&w,P=n.onClick,C=n.required,_=n.small,D=void 0!==_&&_,E=n.warning,T=n.xsmall,j=void 0!==T&&T,R=(0,i.Z)(n,h),S=E||!!(c||k&&k.touched&&k.error);return(0,b.jsxs)(b.Fragment,{children:[(0,b.jsxs)(A,{onClick:function(n){n.preventDefault(),P&&!r&&P(n)},children:[(0,b.jsxs)(x,{children:[(0,b.jsx)(v,m(m({},R),{},{disabled:r?"disabled":void 0,notClickable:r})),(0,b.jsx)(y,{checked:t,disabled:r,large:g,required:C,warning:S,children:(0,b.jsx)(s.Jr,{size:f.iI*(g?3:2)})})]}),e&&(0,b.jsx)(d.Z,{ml:1,children:(0,b.jsx)(a.ZP,{children:e})}),u&&(0,b.jsxs)(d.Z,{pl:1,children:["string"===typeof u&&(0,b.jsx)(l.ZP,{disabled:r,lineThrough:r,monospace:Z,small:D,xsmall:j,children:u}),"string"!==typeof u&&u,p&&(0,b.jsx)(l.ZP,{muted:!0,small:!0,children:p})]})]}),(c||k&&k.touched&&k.error)&&(0,b.jsx)(O,{children:(0,b.jsx)(l.ZP,{small:!0,warning:!0,children:c?(0,o.Z)(c):k.error})})]})}},24944:function(n,e,t){"use strict";t.d(e,{HL:function(){return d},lZ:function(){return l},qZ:function(){return a}});var o=t(38626),r=t(44897),i=t(42631),c=t(70515),a=o.default.div.withConfig({displayName:"indexstyle__DividerContainerStyle",componentId:"sc-uiq3r3-0"})([""," ",""],(function(n){return n.short&&"\n    width: ".concat(21*c.iI,"px;\n  ")}),(function(n){return!n.short&&"\n    width: 100%;\n  "})),d=o.default.div.withConfig({displayName:"indexstyle__DividerStyle",componentId:"sc-uiq3r3-1"})(["height:1px;"," "," "," "," "," ",""],(function(n){return!(n.light||n.medium)&&"\n    background-color: ".concat((n.theme.monotone||r.Z.monotone).grey200,";\n  ")}),(function(n){return n.muted&&"\n    background-color: ".concat((n.theme.monotone||r.Z.monotone).grey500,";\n  ")}),(function(n){return n.light&&"\n    background-color: ".concat((n.theme.borders||r.Z.borders).light,";\n  ")}),(function(n){return n.medium&&"\n    background-color: ".concat((n.theme.borders||r.Z.borders).medium,";\n  ")}),(function(n){return n.prominent&&"\n    background-color: ".concat((n.theme.monotone||r.Z.monotone).grey300,";\n  ")}),(function(n){return n.black&&"\n    background-color: ".concat((n.theme.monotone||r.Z.monotone).black,";\n  ")})),l=o.default.div.withConfig({displayName:"indexstyle__VerticalDividerStyle",componentId:"sc-uiq3r3-2"})(["width:1px;align-self:stretch;"," ",""],(function(n){return"\n    border-left: ".concat(i.YF,"px ").concat(i.M8," ").concat((n.theme||r.Z).interactive.defaultBorder,";\n  ")}),(function(n){var e=n.right;return"number"===typeof e&&"\n    position: relative;\n    right: ".concat(e,"px;\n  ")}))},15338:function(n,e,t){"use strict";var o=t(82394),r=t(26304),i=(t(82684),t(38276)),c=t(24944),a=t(28598),d=["short"];function l(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(n);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,o)}return t}function u(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?l(Object(t),!0).forEach((function(e){(0,o.Z)(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}e.Z=function(n){var e=n.short,t=void 0!==e&&e,o=(0,r.Z)(n,d);return(0,a.jsx)(c.qZ,{short:t,children:(0,a.jsx)(i.Z,u(u({},o),{},{children:(0,a.jsx)(c.HL,u({},o))}))})}},35576:function(n,e,t){"use strict";var o=t(82394),r=t(26304),i=t(82684),c=t(38626),a=t(28968),d=t(28598),l=["rows"];function u(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(n);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,o)}return t}function s(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?u(Object(t),!0).forEach((function(e){(0,o.Z)(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):u(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}var p=c.default.textarea.withConfig({displayName:"TextArea__TextInputStyle",componentId:"sc-112wx63-0"})(["",""],a.p),f=function(n,e){var t=n.rows,o=void 0===t?3:t,i=(0,r.Z)(n,l);return(0,d.jsx)(a.Z,s(s({},i),{},{input:(0,d.jsx)(p,s({rows:o},i)),ref:e}))};e.Z=i.forwardRef(f)},69650:function(n,e,t){"use strict";var o=t(82394),r=t(26304),i=t(82684),c=t(38626),a=t(28968),d=t(44897),l=t(3314),u=t(28598),s=["checked","disabled","onCheck","pauseEvent"];function p(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(n);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,o)}return t}function f(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?p(Object(t),!0).forEach((function(e){(0,o.Z)(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):p(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}var b=c.default.label.withConfig({displayName:"ToggleSwitch__ToggleSwitchStyle",componentId:"sc-179r5zs-0"})([""," position:relative;display:inline-block;width:","px;min-width:","px;height:","px;",' & input[type="checkbox"]{display:none;}& span{position:absolute;cursor:',";background-color:",";border-radius:13px;",';top:0;right:0;bottom:0;left:0;transition:background-color 0.2s ease;}& span::before{position:absolute;content:"";left:',"px;top:","px;width:","px;height:",'px;background-color:#787A85;border-radius:50%;transition:transform 0.3s ease;}& input[type="checkbox"]:checked + span::before{transform:',";}"," ",""],a.p,46,46,26,(function(n){return n.compact&&"\n    width: ".concat(35,"px;\n    min-width: ").concat(35,"px;\n    height: ").concat(20,"px;\n  ")}),(function(n){return n.disabled?"not-allowed":"pointer"}),(function(n){return n.disabled?d.Z.monotone.white:d.Z.monotone.black}),(function(n){return n.disabled&&"border: 1px solid ".concat(d.Z.monotone.grey200)}),(function(n){return n.compact?"1":"2"}),(function(n){return n.compact?"1":"2"}),(function(n){return n.compact?"18":"22"}),(function(n){return n.compact?"18":"22"}),(function(n){return n.compact?"translateX(15px)":"translateX(20px)"}),(function(n){return!n.disabled&&!n.monotone&&'\n    & input[type="checkbox"]:checked + span {\n      background-color: '.concat(d.Z.accent.sky,';\n    }\n\n    & input[type="checkbox"]:checked + span::before {\n      background-color: ').concat(d.Z.monotone.white,";\n    }\n  ")}),(function(n){return n.purpleBackground&&'\n    & input[type="checkbox"]:checked + span {\n      background-color: '.concat(d.Z.interactive.purple,";\n    }\n  ")})),h=function(n,e){var t=n.checked,o=n.disabled,i=n.onCheck,c=n.pauseEvent,d=void 0===c||c,p=(0,r.Z)(n,s);return(0,u.jsx)(a.Z,f(f({},p),{},{disabled:o,input:(0,u.jsxs)(b,f(f({},p),{},{disabled:o,noBackground:!0,noBorder:!0,children:[(0,u.jsx)("input",{checked:t,type:"checkbox"}),(0,u.jsx)("span",{onClick:o?null:function(n){d&&(0,l.j)(n),null===i||void 0===i||i((function(n){return!n}))}})]})),noBackground:!0,ref:e}))};e.Z=i.forwardRef(h)},8025:function(n,e,t){"use strict";t.r(e);var o=t(75582),r=t(69864),i=t(91749),c=t(35686),a=t(72619),d=t(28598);e.default=function(){var n="interactions_testing",e=c.ZP.pipelines.detail(n,{include_block_pipelines:!0,includes_outputs:!0}),t=e.data,l=(e.mutate,c.ZP.pipeline_interactions.detail(n)),u=l.data,s=l.mutate,p=c.ZP.interactions.pipeline_interactions.list(n),f=p.data,b=p.mutate,h=null===t||void 0===t?void 0:t.pipeline,g=null===u||void 0===u?void 0:u.pipeline_interaction,m=null===f||void 0===f?void 0:f.interactions,x=(0,r.Db)(c.ZP.pipeline_interactions.useUpdate(n),{onSuccess:function(n){return(0,a.wD)(n,{callback:function(n){s()}})}}),O=(0,o.Z)(x,2),v=O[0],y=O[1].isLoading,A=(0,r.Db)(c.ZP.interactions.pipeline_interactions.useCreate(n),{onSuccess:function(n){return(0,a.wD)(n,{callback:function(n){b(),s()}})}}),k=(0,o.Z)(A,2),w=k[0],Z=k[1].isLoading;return(0,d.jsx)("div",{children:(0,d.jsx)(i.Z,{createInteraction:function(n){return w({interaction:n})},interactions:m,isLoadingCreateInteraction:Z,isLoadingUpdatePipelineInteraction:y,pipeline:h,pipelineInteraction:g,updatePipelineInteraction:function(n){return v({pipeline_interaction:n})}})})}},91185:function(n,e,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/test",function(){return t(8025)}])}},function(n){n.O(0,[5716,341,8013,6833,1769,1749,9774,2888,179],(function(){return e=91185,n(n.s=e);var e}));var e=n.O();_N_E=e}]);