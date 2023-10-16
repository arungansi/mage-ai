"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[632],{61709:function(n,e,t){t.d(e,{J8:function(){return m},MS:function(){return k},Ts:function(){return h},YW:function(){return C},_o:function(){return g},eY:function(){return p},fA:function(){return b},h5:function(){return y},oI:function(){return T}});var o=t(82394),i=t(44425),r=t(48339),u=t(57653),l=t(82359),c=t(85385),d=t(81728),a=t(55283),s=t(15610);function f(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(n);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,o)}return t}function v(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?f(Object(t),!0).forEach((function(e){(0,o.Z)(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):f(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}var p=function(n,e){var t=(null===e||void 0===e?void 0:e.upstream_blocks)||[];return i.iZ.includes(null===n||void 0===n?void 0:n.type)||i.iZ.includes(null===e||void 0===e?void 0:e.type)||i.tf.DATA_LOADER===(null===e||void 0===e?void 0:e.type)&&i.tf.SENSOR!==n.type||t.push(n.uuid),t},b=function(n,e,t){var o=[];return(null===n||void 0===n?void 0:n.type)!==u.qL.STREAMING||i.iZ.includes(null===e||void 0===e?void 0:e.type)||i.iZ.includes(null===t||void 0===t?void 0:t.type)||(o=o.concat((null===e||void 0===e?void 0:e.downstream_blocks)||[])),o},h=function(n,e,t,o){for(var r,u=[],l=e.findIndex((function(e){return e.uuid===n.uuid}));!r&&l>=0;){var c;r=e[l-1],i.tf.SCRATCHPAD===(null===(c=r)||void 0===c?void 0:c.type)&&(r=null),l-=1}return r&&u.push(r.uuid),i.Ut.map((function(e){return{label:function(){return"Convert to ".concat((0,d.wX)(i.V4[e]))},onClick:function(){return o({converted_from_type:e,converted_from_uuid:n.uuid,type:e,upstream_blocks:u})},uuid:"".concat(t,"/convert_to/").concat(e)}}))},m=function(n,e,t,o,r,u){var d,a,f=n||{},p=f.configuration,b=f.downstream_blocks,h=f.has_callback,m=f.language,k=f.metadata,g=f.replicated_block,y=f.type,T=f.upstream_blocks,C=f.uuid,E=p||{},x=E.dynamic,O=E.reduce_output,A=i.tf.DBT===y,S=[],_=!(null===u||void 0===u||null===(d=u.project)||void 0===d||null===(a=d.features)||void 0===a||!a[l.d.INTERACTIONS]);if(i.tf.SCRATCHPAD!==y&&![i.tf.CALLBACK,i.tf.EXTENSION,i.tf.MARKDOWN].includes(y)){S.push.apply(S,[{label:function(){return A?"Execute and run all upstream blocks":"Execute with all upstream blocks"},onClick:function(){return e({block:n,runUpstream:!0})},uuid:"execute_upstream"},{label:function(){return A?"Execute and run incomplete upstream blocks":"Execute with incomplete upstream blocks"},onClick:function(){return e({block:n,runIncompleteUpstream:!0})},uuid:"execute_incomplete_upstream"}]),A||i.tf.GLOBAL_DATA_PRODUCT===y||S.push({label:function(){return"Execute block and run tests"},onClick:function(){return e({block:n,runTests:!0})},uuid:"run_tests"});var I,D,R,N,L=u||{},j=L.addNewBlock,Z=L.blocksMapping,w=L.fetchFileTree,P=L.fetchPipeline,B=L.savePipelineContent,M=L.updatePipeline,H=[];if(null===b||void 0===b||b.forEach((function(n){var e=null===Z||void 0===Z?void 0:Z[n];e&&e.upstream_blocks.forEach((function(n){var e,t;null!==Z&&void 0!==Z&&null!==(e=Z[n])&&void 0!==e&&null!==(t=e.configuration)&&void 0!==t&&t.dynamic&&H.push(Z[n])}))})),A&&i.t6.SQL===m)S.unshift.apply(S,[{label:function(){return"Test model"},onClick:function(){return e({block:n,runSettings:{test_model:!0}})},tooltip:function(){return"Execute command dbt test."},uuid:"test_model"},{label:function(){return"Build model"},onClick:function(){return e({block:n,runSettings:{build_model:!0}})},tooltip:function(){return"Execute command dbt build."},uuid:"build_model"},{label:function(){return"Add upstream models"},onClick:function(){M({pipeline:{add_upstream_for_block_uuid:null===n||void 0===n?void 0:n.uuid}})},tooltip:function(){return"Add upstream models for this model to the pipeline."},uuid:"add_upstream_models"}]),null!==k&&void 0!==k&&null!==(I=k.dbt)&&void 0!==I&&null!==(D=I.block)&&void 0!==D&&D.snapshot||S.unshift.apply(S,[{label:function(){return"Run model"},onClick:function(){return e({block:n,runSettings:{run_model:!0}})},tooltip:function(){return"Execute command dbt run."},uuid:"run_model"}]),null!==k&&void 0!==k&&null!==(R=k.dbt)&&void 0!==R&&null!==(N=R.block)&&void 0!==N&&N.snapshot&&S.unshift.apply(S,[{label:function(){return"Run snapshot"},onClick:function(){return e({block:n,runSettings:{run_model:!0}})},tooltip:function(){return"Execute command dbt snapshot."},uuid:"run_model"}]);if(A||i.tf.GLOBAL_DATA_PRODUCT===y||!B||!x&&0!==H.length||S.push({label:function(){return x?"Disable block as dynamic":"Set block as dynamic"},onClick:function(){return B({block:v(v({},n),{},{configuration:v(v({},p),{},{dynamic:!x})})})},uuid:"dynamic"}),Z)(null===T||void 0===T?void 0:T.find((function(n){var e,t;return null===Z||void 0===Z||null===(e=Z[n])||void 0===e||null===(t=e.configuration)||void 0===t?void 0:t.dynamic})))&&S.push({label:function(){return O?"Don\u2019t reduce output":"Reduce output"},onClick:function(){return B({block:v(v({},n),{},{configuration:v(v({},p),{},{reduce_output:!O})})})},uuid:"reduce_output"});S.push({label:function(){return h?"Remove callback":"Add callback"},onClick:function(){if(h)return B({block:v(v({},n),{},{has_callback:!h})}).then((function(){w(),P()}));(0,s.u7)({addon:c.cH.CALLBACKS,sideview:c.cH.ADDON_BLOCKS})},uuid:"has_callback"}),A||S.push({disabled:!!g,label:function(){return"Replicate block"},onClick:function(){return j({replicated_block:C})},uuid:"Replicate block"})}return _&&S.push({label:function(){return"Add / Edit interactions"},onClick:function(){var n;null===u||void 0===u||null===(n=u.openSidekickView)||void 0===n||n.call(u,c.cH.INTERACTIONS)},uuid:"Add interactions"}),S.push({label:function(){return"Delete block"},onClick:function(){t(n),o(!1)},uuid:"delete_block"}),r?[S.pop()]:S};function k(n){var e=n.tags,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},o=[],r=t.conditionFailed;return null===e||void 0===e||e.forEach((function(n){i.L8.DBT_SNAPSHOT===n?o.push({description:"This is a dbt snapshot file.",title:(0,d.vg)(i.L8.DBT_SNAPSHOT)}):i.L8.DYNAMIC===n?o.push({description:"This block will create N blocks for each of its downstream blocks.",title:(0,d.vg)(i.L8.DYNAMIC)}):i.L8.DYNAMIC_CHILD===n?o.push({description:"This block is dynamically created by its upstream parent block that is dynamic.",title:(0,d.vg)(i.L8.DYNAMIC_CHILD)}):i.L8.REDUCE_OUTPUT===n?o.push({description:"Reduce output from all dynamically created blocks into a single array output.",title:(0,d.vg)(i.L8.REDUCE_OUTPUT)}):i.L8.REPLICA===n?o.push({description:"This block is a replica of another block in the current pipeline.",title:(0,d.vg)(i.L8.REPLICA)}):i.L8.CONDITION===n?r?o.push({description:"This block condition evaluated as false.",title:"Condition unmet"}):o.push({description:"This block has a condition that will be run before its execution.",title:(0,d.vg)(i.L8.CONDITION)}):o.push({title:n})})),o}function g(n){var e=n.block,t=n.dynamic,o=n.dynamicUpstreamBlock,i=n.hasError,r=(n.reduceOutput,n.reduceOutputUpstreamBlock),u=n.selected,l=o&&!r;return{borderColorShareProps:{blockColor:null===e||void 0===e?void 0:e.color,blockType:null===e||void 0===e?void 0:e.type,dynamicBlock:t,dynamicChildBlock:l,hasError:i,selected:u},tags:k(e)}}function y(n){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return e&&(null===e||void 0===e?void 0:e.length)>=0?e.map((function(n){return{data:n,execution_state:r.uF.IDLE,type:r.Gi.TEXT_PLAIN}})):n.filter((function(n){return null===n||void 0===n?void 0:n.type}))}function T(n){return{hasError:!!n.find((function(n){return n.error})),hasOutput:n.length>=1}}var C=function(){return Object.values(i.Lq).reduce((function(n,e){return v(v({},n),{},(0,o.Z)({},e,(0,a.qn)(i.tf.CUSTOM,{blockColor:e}).accent))}),{})}},21978:function(n,e,t){t.d(e,{Ai:function(){return u},Jo:function(){return r},bJ:function(){return l},rl:function(){return o}});var o,i=t(44425),r=(t(70515).iI,1e4),u={compact:!0},l={height:10,width:10};i.tf.DATA_EXPORTER,i.tf.SENSOR,i.Lq.GREY,i.Lq.PINK,i.Lq.TEAL,i.Lq.YELLOW;!function(n){n.NORTH="NORTH",n.SOUTH="SOUTH"}(o||(o={}))},17586:function(n,e,t){t.d(e,{Z:function(){return Tn}});var o=t(75582),i=t(21831),r=t(82394),u=t(26304),l=t(77837),c=t(38860),d=t.n(c),a=t(51774),s=t.n(a),f=t(38626),v=t(4804),p=t(82684),b=t(69864),h=t(79757),m=t(44425),k=t(39867),g=t(97618),y=t(55485),T=t(38276),C=t(4190),E=t(30160),x=t(44897),O=t(72473),A=t(42631),S=t(70515),_=3*S.iI,I=f.default.div.withConfig({displayName:"indexstyle__NodeStyle",componentId:"sc-kc7274-0"})(["border-radius:","px;border:1px solid transparent;min-width:fit-content;overflow:hidden;"," "," "," "," "," "," "," ",""],A.n_,(function(n){return"\n    background-color: ".concat((n.theme.background||x.Z.background).codeTextarea,";\n  ")}),(function(n){return n.borderColor&&"\n    border-color: ".concat(n.borderColor,";\n  ")}),(function(n){return n.selected&&"\n    border-color: ".concat((n.theme.content||x.Z.content).active,";\n  ")}),(function(n){return(n.isCancelled||n.disabled)&&"\n    // opacity doesn\u2019t work on Safari\n    border-color: ".concat((n.theme.content||x.Z.content).muted,";\n    border-style: dotted;\n    cursor: not-allowed;\n    opacity: 0.5;\n  ")}),(function(n){return n.isConditionFailed&&"\n    background-color: ".concat((n.theme.content||x.Z.content).disabled,";\n    cursor: not-allowed;\n  ")}),(function(n){return n.isConditionFailed&&"\n    background-color: ".concat((n.theme.content||x.Z.content).disabled,";\n    cursor: not-allowed;\n  ")}),(function(n){return n.disabled&&"\n    &:hover {\n      cursor: not-allowed;\n    }\n  "}),(function(n){return n.height&&"\n    height: ".concat(n.height,"px;\n  ")})),D=f.default.div.withConfig({displayName:"indexstyle__StatusStyle",componentId:"sc-kc7274-1"})(["height:","px;width:","px;"],2*S.iI,2*S.iI),R=f.default.div.withConfig({displayName:"indexstyle__IconStyle",componentId:"sc-kc7274-2"})(["align-items:center;border-radius:","px;border:2px solid transparent;display:flex;height:","px;justify-content:center;width:","px;"," ",""],A.BG,5*S.iI,5*S.iI,(function(n){return n.backgroundColor&&"\n    background-color: ".concat(n.backgroundColor,";\n    border-color: ").concat(n.backgroundColor,";\n  ")}),(function(n){return n.borderColor&&"\n    border-color: ".concat(n.borderColor,";\n  ")})),N=f.default.div.withConfig({displayName:"indexstyle__HeaderStyle",componentId:"sc-kc7274-3"})(["padding:","px;",""],1*S.iI,(function(n){return"\n    background-color: ".concat((n.theme.background||x.Z.background).dashboard,";\n  ")})),L=f.default.div.withConfig({displayName:"indexstyle__BodyStyle",componentId:"sc-kc7274-4"})(["padding-left:","px;padding-right:","px;"],1*S.iI,1*S.iI),j=(f.default.div.withConfig({displayName:"indexstyle__RuntimeStyle",componentId:"sc-kc7274-5"})(["margin-right:","px;padding:12px 4px;height:100%;width:50px;background:rgba(0,0,0,0.2);background-blend-mode:soft-light;"],2*S.iI),t(57653)),Z=t(61709),w=t(44375),P=S.cd,B=S.cd*S.iI,M=2*S.iI,H=7.43,U=2*S.iI+5*S.iI,G=2*S.iI+5*S.iI+B+B+M,F=30*S.iI;function V(n){var e=(0,Z.MS)(n);if((null===e||void 0===e?void 0:e.length)>=1)return(null===e||void 0===e?void 0:e.map((function(n){return n.title})).join(", "))||"";if(m.tf.GLOBAL_DATA_PRODUCT===(null===n||void 0===n?void 0:n.type)){var t,o=null===n||void 0===n||null===(t=n.configuration)||void 0===t?void 0:t.global_data_product;if(null!==o&&void 0!==o&&o.uuid)return null===o||void 0===o?void 0:o.uuid}return m.dO[null===n||void 0===n?void 0:n.language]||""}function K(n,e){var t,o,i,r=n.description,u=n.name,l=n.type,c=r||(null===m.V4||void 0===m.V4?void 0:m.V4[l])||l;if(j.qL.INTEGRATION===(null===e||void 0===e?void 0:e.type)&&m.tf.TRANSFORMER!==n.type){var d,a,s={};if(m.t6.YAML===n.language&&(null===n||void 0===n||null===(d=n.content)||void 0===d?void 0:d.length)>=1&&(s=(0,v.Qc)(n.content)),m.tf.DATA_LOADER===n.type)i="".concat(n.uuid,": ").concat(null===(a=s)||void 0===a?void 0:a.source);else if(m.tf.DATA_EXPORTER===n.type){var f;i="".concat(n.uuid,": ").concat(null===(f=s)||void 0===f?void 0:f.destination)}}else if(m.tf.DBT===n.type&&m.t6.SQL===n.language){var p=(0,w.IU)(n),b=p.name,h=p.project;i=b,c="".concat(c,"/").concat(h)}return null!==n&&void 0!==n&&n.replicated_block&&(i=u&&r?u:null===n||void 0===n?void 0:n.uuid,r||(c=null===n||void 0===n?void 0:n.replicated_block)),(null===n||void 0===n||null===(t=n.uuid)||void 0===t||null===(o=t.split(":"))||void 0===o?void 0:o.length)>=2&&u&&(i=u),i||(i=n.uuid),{displayText:i,subtitle:c}}function q(n,e){return K(n,e).displayText||""}function X(n,e){return K(n,e).subtitle||""}function J(n){var e=0;return null===n||void 0===n||n.forEach((function(n,t){var o=n.uuid;e+=4+o.length*H,t>=1&&(e+=4)})),e}function Q(n,e,t){var o,i=0,r=2+U,u=Y(n,e,t)-(2+2*S.iI),l=V(n),c=(null===l||void 0===l?void 0:l.length)*H;if(c>=1){var d=1;c>u&&(d=Math.ceil(c/u)),i+=1,r+=18*d}var a=t||{},s=a.blockStatus;return[a.callbackBlocks,a.conditionalBlocks,a.extensionBlocks].forEach((function(n){if((null===n||void 0===n?void 0:n.length)>=1){var e=J(n),t=1;e>u&&(t=Math.ceil(e/u)),i+=1,r+=18.5*t+4*(t-1)}})),"undefined"!==typeof(null===s||void 0===s||null===(o=s[n.uuid])||void 0===o?void 0:o.runtime)&&(r+=18,i+=1),r+=(i+=1)*(1*S.iI)}function Y(n,e,t){var o,r,u=Math.max(8.62*(null===(o=q(n,e))||void 0===o?void 0:o.length),(null===(r=X(n,e))||void 0===r?void 0:r.length)*H),l=V(n),c=(null===l||void 0===l?void 0:l.length)*H,d=t||{},a=d.callbackBlocks,s=d.conditionalBlocks,f=d.extensionBlocks,v=Math.max.apply(Math,(0,i.Z)([a,s,f].map((function(n){return J(n)})).concat(c)));return v>u&&(u=Math.min(F,v)),2+G+u}var W,z=t(55283),$=t(21978),nn=t(81728),en=function(n){var e=n/1e3,t=4-Math.floor(e).toString().length,o=(0,nn.QV)(e,t>=0?t:0),i="s";return o>1e3&&(o=(0,nn.QV)(o/60,0),i="m"),"".concat(o).concat(i)},tn=function(n,e){var t=n||{},o=t.id,i=t.side,r=null===e||void 0===e?void 0:e.id;return i===$.rl.NORTH?null===o||void 0===o?void 0:o.endsWith("".concat(r,"-to")):i===$.rl.SOUTH&&(null===o||void 0===o?void 0:o.startsWith(r))},on=t(28598),rn=(W={},(0,r.Z)(W,m.tf.DATA_EXPORTER,O.zS),(0,r.Z)(W,m.tf.DATA_LOADER,O.rH),(0,r.Z)(W,m.tf.DBT,O.xE),(0,r.Z)(W,m.tf.GLOBAL_DATA_PRODUCT,O.ie),(0,r.Z)(W,m.tf.SENSOR,O.LM),(0,r.Z)(W,m.tf.TRANSFORMER,O.Sv),W);var un=function(n){var e=n.block,t=n.callbackBlocks,o=n.conditionalBlocks,i=n.disabled,r=n.extensionBlocks,u=n.height,l=n.hideStatus,c=n.pipeline,d=n.selected,a=n.hasFailed,s=n.isCancelled,v=n.isConditionFailed,b=n.isInProgress,A=n.isQueued,S=n.isSuccessful,j=n.runtime,Z=(0,p.useContext)(f.ThemeContext),w=!(b||A||a||S||s||v),B=a&&!(b||A),H=!B&&S&&!(b||A),U="";w?U="No status":H?U="Successful execution":B?U="Failed execution":b?U="Currently executiing":s&&(U="Cancelled execution");var G=e.color,F=e.runtime,K=e.type,J=(0,z.qn)(K,{blockColor:G,theme:Z}).accent,Q=(0,p.useMemo)((function(){return V(e)}),[e]),Y=(0,p.useMemo)((function(){var n,e,t=rn[K]||O.EJ,o=!1;return[m.tf.CALLBACK,m.tf.CHART,m.tf.CONDITIONAL,m.tf.CUSTOM,m.tf.DATA_EXPORTER,m.tf.DATA_LOADER,m.tf.EXTENSION,m.tf.SCRATCHPAD,m.tf.SENSOR,m.tf.MARKDOWN,m.tf.TRANSFORMER].includes(K)?n=J:[m.tf.DBT].includes(K)&&(e=J),[m.tf.DATA_EXPORTER].includes(K)&&(o=!0),(0,on.jsx)(R,{backgroundColor:n,borderColor:e,children:(0,on.jsx)("div",{style:{height:_,width:_},children:(0,on.jsx)(t,{inverted:o,size:_})})})}),[J,K]);return(0,on.jsxs)(I,{borderColor:J,disabled:i,height:u,isCancelled:s,isConditionFailed:v,selected:d,children:[(0,on.jsx)(N,{children:(0,on.jsxs)(y.ZP,{alignItems:"center",justifyContent:"space-between",children:[(0,on.jsxs)(g.Z,{flex:1,children:[Y,(0,on.jsx)(T.Z,{mr:P}),(0,on.jsxs)(g.Z,{flexDirection:"column",children:[(0,on.jsx)(E.ZP,{bold:!0,monospace:!0,children:q(e,c)}),(0,on.jsx)(E.ZP,{default:!0,monospace:!0,small:!0,children:X(e,c)})]})]}),(0,on.jsx)(T.Z,{mr:"15px"}),(0,on.jsx)(D,{title:U,children:!l&&(0,on.jsxs)(on.Fragment,{children:[b&&(0,on.jsx)(C.Z,{color:(Z||x.Z).content.active,small:!0}),H&&(0,on.jsx)(O.Jr,{size:M,success:!0}),B&&(0,on.jsx)(O.x8,{danger:!0,size:M}),w&&(0,on.jsx)(k.Z,{borderSize:1,muted:!0,size:M})]})})]})}),(0,on.jsxs)(L,{children:[(null===Q||void 0===Q?void 0:Q.length)>=1&&(0,on.jsx)(T.Z,{mt:1,children:(0,on.jsx)(E.ZP,{default:!0,monospace:!0,small:!0,children:Q})}),[o,t,r].map((function(n,e){if((null===n||void 0===n?void 0:n.length)>=1)return(0,on.jsx)("div",{style:{marginTop:4},children:(0,on.jsx)(y.ZP,{alignItems:"center",flexWrap:"wrap",children:n.reduce((function(n,e,t){return t>=1&&n.push((0,on.jsx)("div",{style:{width:4}},"space-".concat(e.uuid))),n.push((0,on.jsx)("div",{style:{marginTop:4},children:(0,on.jsx)(h.Z,{color:(0,z.qn)(e.type,{blockColor:e.color,theme:Z}).accentLight,monospace:!0,small:!0,children:e.uuid})},"badge-".concat(e.uuid))),n}),[])})},"badge-blocks-".concat(e))})),(F||j)&&(0,on.jsx)(T.Z,{mt:1,children:(0,on.jsx)(E.ZP,{monospace:!0,muted:!0,small:!0,children:en(F||j)})})]})]})},ln=t(93369),cn=t(35686),dn=t(47041),an=f.default.div.withConfig({displayName:"indexstyle__GraphContainerStyle",componentId:"sc-bc2ei5-0"})(["div{","}",""],dn.w5,(function(n){return n.height&&"\n    height: ".concat(n.height,"px;\n  ")})),sn=(f.default.div.withConfig({displayName:"indexstyle__NodeStyle",componentId:"sc-bc2ei5-1"})(["border-radius:","px;border:1px solid transparent;min-width:fit-content;"," "," "," "," "," ",""],A.BG,(function(n){return n.selected&&"\n    border-color: ".concat((n.theme.content||x.Z.content).active,";\n  ")}),(function(n){return n.backgroundColor&&"\n    background-color: ".concat(n.backgroundColor,";\n  ")}),(function(n){return(n.isCancelled||n.disabled)&&"\n    // opacity doesn\u2019t work on Safari\n    border-color: ".concat((n.theme.content||x.Z.content).active,";\n    border-style: dashed;\n    cursor: not-allowed;\n  ")}),(function(n){return n.isConditionFailed&&"\n    background-color: ".concat((n.theme.content||x.Z.content).disabled,";\n    cursor: not-allowed;\n  ")}),(function(n){return n.disabled&&"\n    &:hover {\n      cursor: not-allowed;\n    }\n  "}),(function(n){return n.height&&"\n    height: ".concat(n.height,"px;\n  ")})),f.default.div.withConfig({displayName:"indexstyle__RuntimeStyle",componentId:"sc-bc2ei5-2"})(["margin-right:","px;padding:12px 4px;height:100%;width:50px;background:rgba(0,0,0,0.2);background-blend-mode:soft-light;"],2*S.iI),t(41143)),fn=t(86735);var vn=t(72619),pn=["forwardedRef"];function bn(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(n);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,o)}return t}function hn(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?bn(Object(t),!0).forEach((function(e){(0,r.Z)(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):bn(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}var mn=s()((0,l.Z)(d().mark((function n(){var e,o;return d().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Promise.all([t.e(4434),t.e(5987),t.e(2920)]).then(t.t.bind(t,74529,23));case 2:return e=n.sent,o=e.Canvas,n.abrupt("return",(function(n){var e=n.forwardedRef,t=(0,u.Z)(n,pn);return(0,on.jsx)(o,hn({ref:e},t))}));case 5:case"end":return n.stop()}}),n)}))),{ssr:!1,loadableGenerated:{webpack:function(){return[74529]}}}),kn=s()((0,l.Z)(d().mark((function n(){var e;return d().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Promise.all([t.e(4434),t.e(5987),t.e(2920)]).then(t.t.bind(t,74529,23));case 2:return e=n.sent,n.abrupt("return",e.Node);case 4:case"end":return n.stop()}}),n)}))),{ssr:!1,loadableGenerated:{webpack:function(){return[74529]}}}),gn=s()((0,l.Z)(d().mark((function n(){var e;return d().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Promise.all([t.e(4434),t.e(5987),t.e(2920)]).then(t.t.bind(t,74529,23));case 2:return e=n.sent,n.abrupt("return",e.Edge);case 4:case"end":return n.stop()}}),n)}))),{ssr:!1,loadableGenerated:{webpack:function(){return[74529]}}}),yn=s()((0,l.Z)(d().mark((function n(){var e;return d().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Promise.all([t.e(4434),t.e(5987),t.e(2920)]).then(t.t.bind(t,74529,23));case 2:return e=n.sent,n.abrupt("return",e.Port);case 4:case"end":return n.stop()}}),n)}))),{ssr:!1,loadableGenerated:{webpack:function(){return[74529]}}});var Tn=function(n){var e=n.blockRefs,t=n.blockStatus,r=n.blocksOverride,u=n.blocks,l=n.disabled,c=n.editingBlock,d=n.enablePorts,a=void 0!==d&&d,s=n.fetchPipeline,h=n.height,k=n.heightOffset,g=void 0===k?10*S.iI:k,C=n.messages,x=n.noStatus,O=n.onClickNode,A=n.pannable,_=void 0===A||A,I=n.pipeline,D=n.runningBlocks,R=void 0===D?[]:D,N=n.selectedBlock,L=n.setEditingBlock,P=n.setErrors,B=n.setSelectedBlock,M=n.setZoom,H=n.showDynamicBlocks,U=void 0!==H&&H,G=n.treeRef,F=n.zoomable,V=void 0===F||F,K=(0,p.useContext)(f.ThemeContext),q=(0,p.useRef)(null),X=G||q,J=(0,p.useState)([]),W=J[0],nn=J[1],en=(0,p.useState)(!1),rn=en[0],dn=en[1],pn=(0,p.useState)(null),bn=pn[0],Tn=pn[1],Cn=a&&rn,En=(null===c||void 0===c?void 0:c.upstreamBlocks)||{},xn=En.block,On=En.values,An=void 0===On?[]:On,Sn=(0,p.useMemo)((function(){return An.length}),[An]),_n=(0,p.useMemo)((function(){var n;return(null===(n=r||(null===I||void 0===I?void 0:I.blocks))||void 0===n?void 0:n.filter((function(n){var e=n.type;return!m.iZ.includes(e)})))||[]}),[r,null===I||void 0===I?void 0:I.blocks]),In=(0,p.useMemo)((function(){return _n}),[_n,U]),Dn=(0,p.useMemo)((function(){if(r)return r;if(u)return u;if(I){var n={},e=[];return e.push.apply(e,(0,i.Z)(null===I||void 0===I?void 0:I.blocks)),e.push.apply(e,(0,i.Z)(null===I||void 0===I?void 0:I.callbacks)),e.push.apply(e,(0,i.Z)(null===I||void 0===I?void 0:I.conditionals)),Object.values(null===I||void 0===I?void 0:I.extensions).forEach((function(n){var t=n.blocks;e.push.apply(e,(0,i.Z)(t))})),e.reduce((function(e,t){return n[t.uuid]||e.push(t),e}),[])}return[]}),[u,r,I]),Rn=(0,p.useMemo)((function(){return(0,fn.HK)(Dn||[],(function(n){return n.uuid}))}),[Dn]),Nn=(0,p.useMemo)((function(){var n={};return null===In||void 0===In||In.map((function(e){var t;n[e.uuid]=null===e||void 0===e||null===(t=e.callback_blocks)||void 0===t?void 0:t.reduce((function(n,e){var t=null===Rn||void 0===Rn?void 0:Rn[e];return t?n.concat(t):n}),[])})),n}),[In,Rn]),Ln=(0,p.useMemo)((function(){var n={};return null===In||void 0===In||In.map((function(e){var t;n[e.uuid]=null===e||void 0===e||null===(t=e.conditional_blocks)||void 0===t?void 0:t.reduce((function(n,e){var t=null===Rn||void 0===Rn?void 0:Rn[e];return t?n.concat(t):n}),[])})),n}),[In,Rn]),jn=(0,p.useMemo)((function(){var n={};return null===In||void 0===In||In.map((function(e){var t,i=[];null===(t=Object.entries((null===I||void 0===I?void 0:I.extensions)||{}))||void 0===t||t.forEach((function(n){var t=(0,o.Z)(n,2),r=t[0],u=t[1].blocks;null===u||void 0===u||u.forEach((function(n){var t=n.upstream_blocks,o=n.uuid;if(null!==t&&void 0!==t&&t.includes(null===e||void 0===e?void 0:e.uuid)){var u=null===Rn||void 0===Rn?void 0:Rn[o];u&&i.push(hn(hn({},u),{},{extension_uuid:r}))}}))})),n[e.uuid]=i})),n}),[In,Rn,I]),Zn=(0,p.useMemo)((function(){return(0,fn.HK)(R,(function(n){return n.uuid}))}),[R]);(0,p.useEffect)((function(){setTimeout((function(){var n,e,t,o,i;0===(null===X||void 0===X||null===(n=X.current)||void 0===n||null===(e=n.containerRef)||void 0===e||null===(t=e.current)||void 0===t?void 0:t.scrollTop)&&(null===X||void 0===X||null===(o=X.current)||void 0===o||null===(i=o.fitCanvas)||void 0===i||i.call(o))}),1e3)}),[X]);var wn=(0,b.Db)(cn.ZP.blocks.pipelines.useUpdate(null===I||void 0===I?void 0:I.uuid,encodeURIComponent(null===xn||void 0===xn?void 0:xn.uuid)),{onSuccess:function(n){return(0,vn.wD)(n,{callback:function(){L({upstreamBlocks:null}),null===s||void 0===s||s()},onErrorCallback:function(n,e){return null===P||void 0===P?void 0:P({errors:e,response:n})}})}}),Pn=(0,o.Z)(wn,2),Bn=Pn[0],Mn=Pn[1].isLoading,Hn=(0,b.Db)((function(n){var e=n.fromBlock,t=n.portSide,o=n.toBlock,i=n.removeDependency,r=o,u=o.upstream_blocks.concat(e.uuid);return i||t!==$.rl.NORTH||(r=e,u=e.upstream_blocks.concat(o.uuid)),cn.ZP.blocks.pipelines.useUpdate(null===I||void 0===I?void 0:I.uuid,encodeURIComponent(r.uuid))({block:hn(hn({},r),{},{upstream_blocks:i?o.upstream_blocks.filter((function(n){return n!==e.uuid})):u})})}),{onSuccess:function(n){return(0,vn.wD)(n,{callback:function(){null===s||void 0===s||s()},onErrorCallback:function(n,e){return null===P||void 0===P?void 0:P({errors:e,response:n})}})}}),Un=(0,o.Z)(Hn,1)[0],Gn=(0,p.useCallback)((function(n){var t=n.type,o=n.uuid;if(null===B||void 0===B||B(n),nn([]),null!==e&&void 0!==e&&e.current){var i,r=e.current["".concat(t,"s/").concat(o,".py")];null===r||void 0===r||null===(i=r.current)||void 0===i||i.scrollIntoView()}}),[e,B]),Fn=(0,p.useCallback)((function(n){nn([]),L((function(e){var t=e.upstreamBlocks.values||[],o=t.findIndex((function(e){var t=e.uuid;return n.uuid===t}));return hn(hn({},e),{},{upstreamBlocks:hn(hn({},e.upstreamBlocks),{},{values:o>=0?(0,fn.oM)(t,o):t.concat(n)})})}))}),[L]),Vn=(0,p.useMemo)((function(){var n={};return In.forEach((function(e){e.upstream_blocks.forEach((function(t){n[t]||(n[t]=[]),n[t].push(e)}))})),n}),[In]),Kn=(0,p.useCallback)((function(n){var e,t;if(j.qL.INTEGRATION===(null===I||void 0===I?void 0:I.type)&&m.tf.TRANSFORMER!==n.type){var o,i,r={};if(m.t6.YAML===n.language&&(null===n||void 0===n||null===(o=n.content)||void 0===o?void 0:o.length)>=1&&(r=(0,v.Qc)(n.content)),m.tf.DATA_LOADER===n.type)e="".concat(n.uuid,": ").concat(null===(i=r)||void 0===i?void 0:i.source);else if(m.tf.DATA_EXPORTER===n.type){var u;e="".concat(n.uuid,": ").concat(null===(u=r)||void 0===u?void 0:u.destination)}}else if(m.tf.DBT===n.type&&m.t6.SQL===n.language){var l=(0,w.IU)(n);e=l.name,t=l.project}return null!==n&&void 0!==n&&n.replicated_block&&(e=null===n||void 0===n?void 0:n.replicated_block,t=null===n||void 0===n?void 0:n.uuid),e||(e=n.uuid),{displayText:e,kicker:t,subtitle:undefined}}),[I]),qn=(0,p.useMemo)((function(){var n=[],e=[];return In.forEach((function(o){var r=Kn(o),u=r.displayText,l=r.kicker,c=r.subtitle,d=o.tags,a=void 0===d?[]:d,s=o.upstream_blocks,f=void 0===s?[]:s,v=o.uuid,p=Vn[v],b=[];p?b.push.apply(b,(0,i.Z)(p.map((function(n){return hn(hn({},$.bJ),{},{id:"".concat(v,"-").concat(n.uuid,"-from"),side:$.rl.SOUTH})})))):b.push(hn(hn({},$.bJ),{},{id:"".concat(v,"-from"),side:$.rl.SOUTH})),0===f.length&&b.push(hn(hn({},$.bJ),{},{id:"".concat(v,"-to"),side:$.rl.NORTH})),null===f||void 0===f||f.forEach((function(n){b.push(hn(hn({},$.bJ),{},{id:"".concat(n,"-").concat(v,"-to"),side:$.rl.NORTH})),e.push({from:n,fromPort:"".concat(n,"-").concat(v,"-from"),id:"".concat(n,"-").concat(v),to:v,toPort:"".concat(n,"-").concat(v,"-to")})}));(null===a||void 0===a?void 0:a.length)>=1&&S.iI,l&&S.iI,c&&S.iI;var h=u;[l,c].forEach((function(n){n&&n.length>h.length&&(h=n)}));var m=null===Nn||void 0===Nn?void 0:Nn[null===o||void 0===o?void 0:o.uuid],k=null===Ln||void 0===Ln?void 0:Ln[null===o||void 0===o?void 0:o.uuid],g=null===jn||void 0===jn?void 0:jn[null===o||void 0===o?void 0:o.uuid];n.push({data:{block:o},height:Q(o,I,{blockStatus:t,callbackBlocks:m,conditionalBlocks:k,extensionBlocks:g}),id:v,ports:b,width:Y(o,I,{blockStatus:t,callbackBlocks:m,conditionalBlocks:k,extensionBlocks:g})})})),{edges:e,nodes:n}}),[t,In,Nn,Ln,Kn,Vn,jn,I]),Xn=qn.edges,Jn=qn.nodes,Qn=(0,p.useCallback)((function(n){if(x)return{};if(t){var e=t[function(n){var e=n.uuid,t=n.replicated_block;return t?"".concat(e,":").concat(t):e}(n)]||{},o=e.status,i=e.runtime;return{hasFailed:sn.V.FAILED===o,isCancelled:sn.V.CANCELLED===o,isConditionFailed:sn.V.CONDITION_FAILED===o,isInProgress:sn.V.RUNNING===o,isQueued:sn.V.INITIAL===o,isSuccessful:sn.V.COMPLETED===o,runtime:i}}var r,u=(0,Z.h5)((null===C||void 0===C?void 0:C[n.uuid])||[]),l=(0,Z.oI)(u),c=l.hasError,d=l.hasOutput,a=Zn[n.uuid];return{hasFailed:!a&&(c||m.DA.FAILED===n.status),isInProgress:a,isQueued:a&&(null===(r=R[0])||void 0===r?void 0:r.uuid)!==n.uuid,isSuccessful:!a&&(!c&&d||m.DA.EXECUTED===n.status)}}),[t,C,x,R,Zn]),Yn=(0,p.useMemo)((function(){var n=0;return h&&(n+=h),g&&(n-=g),Math.max(0,n)}),[h,g]);return(0,on.jsxs)(on.Fragment,{children:[xn&&(0,on.jsxs)(T.Z,{my:3,px:S.cd,children:[(0,on.jsxs)(T.Z,{mb:S.cd,children:[(0,on.jsxs)(E.ZP,{children:["Select parent block(s) for ",(0,on.jsx)(E.ZP,{color:(0,z.qn)(xn.type,{blockColor:xn.color,theme:K}).accent,inline:!0,monospace:!0,children:xn.uuid}),":"]}),(0,on.jsx)(T.Z,{mt:1,children:An.map((function(n,e){var t,o,i=n.uuid;return(0,on.jsxs)(E.ZP,{color:(0,z.qn)(null===(t=Rn[i])||void 0===t?void 0:t.type,{blockColor:null===(o=Rn[i])||void 0===o?void 0:o.type,theme:K}).accent,inline:!0,monospace:!0,children:[i,Sn>=2&&e<=Sn-2?(0,on.jsx)(E.ZP,{inline:!0,children:",\xa0"}):null]},i)}))})]}),(0,on.jsxs)(y.ZP,{alignItems:"center",children:[(0,on.jsx)(ln.ZP,{compact:!0,inline:!0,loading:Mn,onClick:function(){return Bn({block:hn(hn({},xn),{},{upstream_blocks:An.map((function(n){return n.uuid}))})})},uuid:"DependencyGraph/save_parents",children:"Save dependencies"}),(0,on.jsx)(T.Z,{ml:1}),(0,on.jsx)(ln.ZP,{compact:!0,inline:!0,noBackground:!0,onClick:function(){nn([]),L({upstreamBlocks:null})},uuid:"DependencyGraph/cancel_save_parents",children:"Cancel"})]})]}),(0,on.jsx)(an,{height:Yn,onDoubleClick:function(){var n,e;return null===X||void 0===X||null===(n=X.current)||void 0===n||null===(e=n.fitCanvas)||void 0===e?void 0:e.call(n)},children:(0,on.jsx)(mn,{arrow:null,disabled:l,edge:function(n){var e,t=Rn[n.source];return(0,on.jsx)(gn,hn(hn({},n),{},{onClick:function(n,e){Tn(null),nn([e.id])},onRemove:function(n,e){var t=Rn[e.from],o=Rn[e.to];Un({fromBlock:t,removeDependency:!0,toBlock:o}),nn([])},removable:a&&!(null!==c&&void 0!==c&&c.upstreamBlocks),style:{stroke:null===(e=(0,z.qn)(null===t||void 0===t?void 0:t.type,{blockColor:null===t||void 0===t?void 0:t.color,theme:K}))||void 0===e?void 0:e.accent}}))},edges:Xn,fit:!0,forwardedRef:X,maxHeight:$.Jo,maxWidth:$.Jo,maxZoom:1,minZoom:-.7,node:function(n){var e,t,o,i,r,u;return(0,on.jsx)(kn,hn(hn({},n),{},{dragType:"port",linkable:!0,onClick:function(n,e){var t=e.data.block;Tn(null),(null===xn||void 0===xn?void 0:xn.uuid)===t.uuid||(xn?Fn(t):(null===O||void 0===O||O({block:t}),setTimeout((function(){Gn(t)}),1)))},onEnter:function(){null!==c&&void 0!==c&&c.upstreamBlocks||dn(!0)},onLeave:function(){bn||dn(!1)},port:Cn&&(null===bn||tn(bn,n))?(0,on.jsx)(yn,{onDrag:function(){return dn(!0)},onDragEnd:function(){dn(!1),Tn(null)},onDragStart:function(n,e,t){var o=null===t||void 0===t?void 0:t.side;Tn({id:null===t||void 0===t?void 0:t.id,side:o})},onEnter:function(){return dn(!0)},rx:10,ry:10,style:{fill:(0,z.qn)(null===n||void 0===n||null===(e=n.properties)||void 0===e||null===(t=e.data)||void 0===t||null===(o=t.block)||void 0===o?void 0:o.type,{blockColor:null===n||void 0===n||null===(i=n.properties)||void 0===i||null===(r=i.data)||void 0===r||null===(u=r.block)||void 0===u?void 0:u.color,theme:K}).accent,stroke:"white",strokeWidth:"1px"}}):null,style:{fill:"transparent",stroke:"transparent",strokeWidth:0},children:function(n){var e=n.height,t=n.node.data.block,o=Qn(t),i=Kn(t);i.displayText,i.kicker,i.subtitle;return(0,on.jsx)("foreignObject",{height:e,style:{pointerEvents:"none"},width:n.width,x:0,y:0,children:(0,on.jsx)(un,hn({block:t,callbackBlocks:null===Nn||void 0===Nn?void 0:Nn[null===t||void 0===t?void 0:t.uuid],conditionalBlocks:null===Ln||void 0===Ln?void 0:Ln[null===t||void 0===t?void 0:t.uuid],disabled:(null===xn||void 0===xn?void 0:xn.uuid)===t.uuid,extensionBlocks:null===jn||void 0===jn?void 0:jn[null===t||void 0===t?void 0:t.uuid],height:e,hideStatus:l||x,pipeline:I,selected:xn?!!(0,fn.sE)(An,(function(n){return n.uuid===t.uuid})):(null===N||void 0===N?void 0:N.uuid)===t.uuid},o),t.uuid)})}}))},nodes:Jn,onNodeLink:function(n,e,t,o){var i,r=Rn[e.id],u=Rn[t.id],l=(null===I||void 0===I?void 0:I.type)===j.qL.INTEGRATION&&((null===r||void 0===r?void 0:r.type)===m.tf.DATA_EXPORTER||(null===r||void 0===r?void 0:r.type)===m.tf.DATA_LOADER&&(null===u||void 0===u?void 0:u.type)===m.tf.DATA_EXPORTER);if(!(null!==r&&void 0!==r&&null!==(i=r.upstream_blocks)&&void 0!==i&&i.includes(u.uuid)||e.id===t.id||l)){var c=null===o||void 0===o?void 0:o.side;Un({fromBlock:r,portSide:c||$.rl.SOUTH,toBlock:u})}},onNodeLinkCheck:function(n,e,t){return!Xn.some((function(n){return n.from===e.id&&n.to===t.id}))},onZoomChange:function(n){return null===M||void 0===M?void 0:M(n)},pannable:_,selections:W,zoomable:V})})]})}},85385:function(n,e,t){t.d(e,{Qq:function(){return v},Z7:function(){return p},cH:function(){return i},du:function(){return s},fp:function(){return a},j5:function(){return f},uM:function(){return d}});var o,i,r=t(82394),u=t(82359),l=t(72473),c=t(86735),d="sideview",a=90;!function(n){n.ADDON_BLOCKS="addon_blocks",n.BLOCK_SETTINGS="block_settings",n.CALLBACKS="callbacks",n.CHARTS="charts",n.DATA="data",n.EXTENSIONS="power_ups",n.FILE_VERSIONS="file_versions",n.GRAPHS="graphs",n.INTERACTIONS="interactions",n.REPORTS="reports",n.SECRETS="secrets",n.SETTINGS="settings",n.TERMINAL="terminal",n.TREE="tree",n.VARIABLES="variables"}(i||(i={}));i.BLOCK_SETTINGS,i.CALLBACKS,i.CHARTS,i.DATA,i.EXTENSIONS,i.TREE;var s=[i.DATA];function f(n){var e,t,o=[{key:i.TREE,label:"Tree"},{buildLabel:function(n){var e=(n.pipeline||{}).widgets,t=void 0===e?[]:e;return(null===t||void 0===t?void 0:t.length)>=1?"Charts (".concat(t.length,")"):"Charts"},key:i.CHARTS},{buildLabel:function(n){var e=n.variables;return(null===e||void 0===e?void 0:e.length)>=1?"Variables (".concat(e.length,")"):"Variables"},key:i.VARIABLES},{buildLabel:function(n){var e=n.secrets;return(null===e||void 0===e?void 0:e.length)>=1?"Secrets (".concat(e.length,")"):"Secrets"},key:i.SECRETS},{buildLabel:function(n){n.pipeline;return"Add-on blocks"},key:i.ADDON_BLOCKS},{buildLabel:function(n){var e=(n.pipeline||{}).extensions,t=void 0===e?{}:e,o=0;return Object.values(t).forEach((function(n){var e=n.blocks;o+=(null===e||void 0===e?void 0:e.length)||0})),o>=1?"Power ups (".concat(o,")"):"Power ups"},key:i.EXTENSIONS},{key:i.DATA,label:"Data"},{key:i.TERMINAL,label:"Terminal"},{key:i.BLOCK_SETTINGS,label:"Block settings"}];return null!==n&&void 0!==n&&null!==(e=n.project)&&void 0!==e&&null!==(t=e.features)&&void 0!==t&&t[u.d.INTERACTIONS]&&o.push({key:i.INTERACTIONS,label:"Interactions"}),o}function v(n){return(0,c.HK)(f(n),(function(n){return n.key}))}var p=(o={},(0,r.Z)(o,i.ADDON_BLOCKS,l.EJ),(0,r.Z)(o,i.BLOCK_SETTINGS,l.JG),(0,r.Z)(o,i.CALLBACKS,l.AQ),(0,r.Z)(o,i.CHARTS,l.GQ),(0,r.Z)(o,i.DATA,l.iA),(0,r.Z)(o,i.EXTENSIONS,l.Bf),(0,r.Z)(o,i.INTERACTIONS,l.yd),(0,r.Z)(o,i.SECRETS,l.Yo),(0,r.Z)(o,i.SETTINGS,l.Zr),(0,r.Z)(o,i.TERMINAL,l.oI),(0,r.Z)(o,i.TREE,l.mp),(0,r.Z)(o,i.VARIABLES,l.LO),o)},70320:function(n,e,t){t.d(e,{h:function(){return u},q:function(){return r}});var o=t(78419),i=t(53808);function r(){return(0,i.U2)(o.am,null)||!1}function u(n){return"undefined"!==typeof n&&(0,i.t8)(o.am,n),n}},41143:function(n,e,t){var o;t.d(e,{V:function(){return o}}),function(n){n.CANCELLED="cancelled",n.COMPLETED="completed",n.FAILED="failed",n.INITIAL="initial",n.RUNNING="running",n.UPSTREAM_FAILED="upstream_failed",n.CONDITION_FAILED="condition_failed"}(o||(o={}))},79757:function(n,e,t){var o=t(82394),i=t(26304),r=(t(82684),t(38626)),u=t(44897),l=t(42631),c=t(95363),d=t(70515),a=t(61896),s=t(28598),f=["children"];function v(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(n);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,o)}return t}function p(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?v(Object(t),!0).forEach((function(e){(0,o.Z)(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):v(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}var b=r.default.p.withConfig({displayName:"Badge__BadgeStyle",componentId:"sc-tfqsp0-0"})(["border-radius:","px;display:inline;font-family:",";margin:0;white-space:nowrap;",";"," "," ",";",";"," "," "," "," "," "," "," ",""],l.BG,c.ry,a.iD,(function(n){return n.small&&"\n    ".concat(a.HC,";\n  ")}),(function(n){return n.xxsmall&&"\n    font-size: ".concat(a.VK,"px;\n    line-height: ").concat(a.VK,"px;\n  ")}),(function(n){return!n.regular&&"\n    padding: 2px 4px;\n  "}),(function(n){return n.regular&&"\n    padding: ".concat(1*d.iI,"px ").concat(1.25*d.iI,"px;\n  ")}),(function(n){return n.noVerticalPadding&&"\n    padding-bottom: 0;\n    padding-top: 0;\n  "}),(function(n){return!n.disabled&&!n.inverted&&"\n    background-color: ".concat((n.theme||u.Z).background.row,";\n    color: ").concat((n.theme||u.Z).content.default,";\n  ")}),(function(n){return!n.disabled&&n.inverted&&"\n    background-color: ".concat((n.theme||u.Z).background.dark,";\n    color: ").concat((n.theme||u.Z).content.inverted,";\n  ")}),(function(n){return n.cyan&&"\n    background-color: ".concat((n.theme||u.Z).accent.cyan,";\n    color: ").concat((n.theme||u.Z).monotone.black,";\n  ")}),(function(n){return n.disabled&&"\n    background-color: ".concat((n.theme||u.Z).feature.disabled,";\n    color: ").concat((n.theme||u.Z).content.disabled,";\n  ")}),(function(n){return n.color&&"\n    background-color: ".concat(n.color," !important;\n    color: ").concat((n.theme||u.Z).content.active,";\n  ")}),(function(n){return n.quantifier&&"\n    border-radius: 34px;\n    line-height: 10px;\n    padding: 4px 6px;\n  "}),(function(n){return n.monospace&&"\n    font-family: ".concat(c.Vp,";\n    word-break: break-all;\n  ")}));e.Z=function(n){var e=n.children,t=(0,i.Z)(n,f);return(0,s.jsx)(b,p(p({},t),{},{children:e}))}},44375:function(n,e,t){t.d(e,{$1:function(){return r},Dy:function(){return i},IU:function(){return u}});var o=t(17717),i="--full-refresh";function r(n,e){var t,i=null===e||void 0===e?void 0:e.fullPath,r=null===n||void 0===n||null===(t=n.configuration)||void 0===t?void 0:t.file_path;if(i)return null===n||void 0===n?void 0:n.uuid;if(r){var u=r.split(o.sep),l=u[u.length-1].split(".");return l.pop(),l.join(".")}}function u(n){var e,t=null===n||void 0===n||null===(e=n.configuration)||void 0===e?void 0:e.file_path;if(t){var i=t.split(o.sep),r=i[0],u=i[i.length-1].split(".");return u.pop(),{directory:i.slice(1,i.length-1).join(o.sep),filePath:t,name:u.join("."),project:r}}return{filePath:t}}}}]);