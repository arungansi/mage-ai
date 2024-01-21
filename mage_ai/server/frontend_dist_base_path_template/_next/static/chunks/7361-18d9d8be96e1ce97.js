"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7361],{37361:function(e,n,r){r.d(n,{X:function(){return k}});var i=r(21831),l=r(75582),s=r(82394),t=r(21764),o=r(82684),d=r(69864),a=r(34376),c=r(71180),u=r(70652),E=r(15338),f=r(97618),v=r(55485),I=r(85854),j=r(65956),m=r(28274),p=r(38276),Z=r(75499),x=r(30160),h=r(17488),g=r(35686),A=r(8193),L=r(72473),_=r(70515),S=r(24755),D=r(3917),R=r(76417),P=r(36717),T=r(50178),O=r(86735),b=r(42122),C=r(72619),B=r(95924),w=r(28598);function N(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,i)}return r}function y(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?N(Object(r),!0).forEach((function(n){(0,s.Z)(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):N(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}var k,W=2*_.iI;!function(e){e.PERMISSIONS="Permissions",e.ROLES="Roles"}(k||(k={})),n.Z=function(e){var n,r,s,N=e.contained,M=e.disableFields,U=e.onCancel,H=e.slug,Y=(0,T.PR)()||{},z=Y.id,Q=Y.owner,V=(0,a.useRouter)(),q=(0,o.useState)(!0),F=q[0],G=q[1],K=(0,o.useState)(null),$=K[0],X=K[1],J=(0,o.useState)({}),ee=J[0],ne=J[1],re=(0,o.useState)(null),ie=re[0],le=re[1],se=(0,o.useCallback)((function(e,n,r){le(y(y({},e),{},{rolesMapping:(0,O.HK)(n||[],(function(e){return e.id})),permissionsMapping:(0,O.HK)(r||[],(function(e){return e.id}))}))}),[le]),te=(0,o.useCallback)((function(e){ne((function(n){return y(y({},n),e)})),le((function(n){return y(y({},n),e)}))}),[ne,le]),oe=g.ZP.users.detail(H,{},{revalidateOnFocus:!1}).data,de=(0,o.useMemo)((function(){return null===oe||void 0===oe?void 0:oe.user}),[oe]);(0,o.useEffect)((function(){de&&se(de,null===de||void 0===de?void 0:de.roles_new,null===de||void 0===de?void 0:de.permissions)}),[se,de]);var ae=(0,d.Db)(de?g.ZP.users.useUpdate(H):g.ZP.users.useCreate(),{onSuccess:function(e){return(0,C.wD)(e,{callback:function(e){var n=e.user;ne({}),se(n,null===n||void 0===n?void 0:n.roles_new,null===n||void 0===n?void 0:n.permissions),de||V.push("/settings/workspace/users/".concat(null===n||void 0===n?void 0:n.id)),String(null===n||void 0===n?void 0:n.id)===String(z)&&(0,T.av)(y(y({},(0,T.PR)()),{},{avatar:null===n||void 0===n?void 0:n.avatar,first_name:null===n||void 0===n?void 0:n.first_name,last_name:null===n||void 0===n?void 0:n.last_name,username:null===n||void 0===n?void 0:n.username})),t.Am.success(de?"User profile successfully updated.":"New user created successfully.",{position:t.Am.POSITION.BOTTOM_RIGHT,toastId:"user-update-success-".concat(n.id)})},onErrorCallback:function(e){var n=e.error,r=n.errors,i=n.exception,l=n.message,s=n.type;t.Am.error((null===r||void 0===r?void 0:r.error)||i||l,{position:t.Am.POSITION.BOTTOM_RIGHT,toastId:s})}})}}),ce=(0,l.Z)(ae,2),ue=ce[0],Ee=ce[1].isLoading,fe=(0,d.Db)(g.ZP.users.useDelete(null===de||void 0===de?void 0:de.id),{onSuccess:function(e){return(0,C.wD)(e,{callback:function(){V.push("/settings/workspace/users"),t.Am.success("User successfully delete.",{position:t.Am.POSITION.BOTTOM_RIGHT,toastId:"user-delete-success-".concat(null===de||void 0===de?void 0:de.id)})},onErrorCallback:function(e){var n=e.error,r=n.errors,i=n.exception,l=n.message,s=n.type;t.Am.error((null===r||void 0===r?void 0:r.error)||i||l,{position:t.Am.POSITION.BOTTOM_RIGHT,toastId:s})}})}}),ve=(0,l.Z)(fe,2),Ie=ve[0],je=ve[1].isLoading,me=g.ZP.roles.list().data,pe=(0,o.useMemo)((function(){return(0,O.YC)((null===me||void 0===me?void 0:me.roles)||[],"name")}),[me]),Ze=(0,o.useMemo)((function(){return(null===ie||void 0===ie?void 0:ie.rolesMapping)||{}}),[ie]),xe=(0,o.useMemo)((function(){return(0,O.YC)(Object.values(Ze),"name")}),[Ze]),he=g.ZP.permissions.list({_limit:1e3}).data,ge=((0,o.useMemo)((function(){return(0,O.YC)((null===he||void 0===he?void 0:he.permissions)||[],"entity_name")}),[he]),(0,o.useMemo)((function(){return(null===ie||void 0===ie?void 0:ie.permissionsMapping)||{}}),[ie])),Ae=(0,o.useMemo)((function(){return(0,O.YC)(Object.values(ge),"entity_name")}),[ge]),Le=(0,o.useMemo)((function(){return(null===xe||void 0===xe?void 0:xe.length)>=1}),[xe]),_e=(0,o.useMemo)((function(){return(0,w.jsx)(c.ZP,{beforeIcon:(0,w.jsx)(L.Add,{}),compact:!0,onClick:function(){X(k.ROLES),G(!1)},primary:!Le,secondary:Le,small:!0,children:"Add roles"})}),[Le,X,G]),Se=(0,o.useMemo)((function(){return(null===Ae||void 0===Ae?void 0:Ae.length)>=1}),[Ae]),De=((0,o.useMemo)((function(){return(0,w.jsx)(c.ZP,{beforeIcon:(0,w.jsx)(L.Add,{}),compact:!0,onClick:function(){X(k.PERMISSIONS),G(!1)},primary:!Se,secondary:Se,small:!0,children:"Add permission"})}),[Se,X,G]),(0,o.useCallback)((function(e,n,r){return(0,w.jsx)(Z.Z,{columnFlex:[].concat((0,i.Z)(r?[]:[null]),[1]),columns:[].concat((0,i.Z)(r?[]:[{label:function(){var n=null===e||void 0===e?void 0:e.every((function(e){var n=e.id;return null===Ze||void 0===Ze?void 0:Ze[n]}));return(0,w.jsx)(u.Z,{checked:n,onClick:function(r){(0,B.j)(r),te(n?{rolesMapping:{}}:{rolesMapping:(0,O.HK)(e,(function(e){return e.id}))})}},"checkbox")},uuid:"actions"}]),[{uuid:"Role"}]),onClickRow:n&&!r?function(n){var r=e[n];r&&window.open("/settings/workspace/roles/".concat(null===r||void 0===r?void 0:r.id),"_blank").focus()}:null,rows:null===e||void 0===e?void 0:e.map((function(e){var n=e.name,l=e.id,s=!(null===Ze||void 0===Ze||!Ze[l]);return[].concat((0,i.Z)(r?[]:[(0,w.jsx)(u.Z,{checked:s,onClick:function(n){(0,B.j)(n);var r=y({},Ze);s?null===r||void 0===r||delete r[l]:r[l]=e,te({rolesMapping:r})}},"checkbox")]),[(0,w.jsx)(x.ZP,{monospace:!0,children:n},"name")])})),uuid:"roles"})}),[Ze,te])),Re=(0,o.useCallback)((function(e,n,r){return(0,w.jsx)(Z.Z,{columnFlex:[null,2,1,1,6],columns:[{uuid:"ID"},{uuid:"Entity"},{uuid:"Subtype"},{uuid:"Entity ID"},{rightAligned:!0,uuid:"Access"}],onClickRow:n&&!r?function(n){var r=e[n];r&&window.open("/settings/workspace/permissions/".concat(null===r||void 0===r?void 0:r.id),"_blank").focus()}:null,rows:null===e||void 0===e?void 0:e.map((function(e){var n=e.access,r=e.entity,i=e.entity_id,l=e.entity_name,s=e.entity_type,t=e.id,o=n?(0,P.q)(n):[],d=(null===o||void 0===o?void 0:o.length)||0;return[(0,w.jsx)(x.ZP,{default:!0,monospace:!0,children:t},"id"),(0,w.jsx)(x.ZP,{monospace:!0,children:l||r},"entityName"),(0,w.jsx)(x.ZP,{default:!0,monospace:!!s,children:s||"-"},"entityType"),(0,w.jsx)(x.ZP,{default:!0,monospace:!!i,children:i||"-"},"entityID"),(0,w.jsx)("div",{children:d>=1&&(0,w.jsx)(v.ZP,{alignItems:"center",flexWrap:"wrap",justifyContent:"flex-end",children:null===o||void 0===o?void 0:o.map((function(e,n){return(0,w.jsx)("div",{children:(0,w.jsxs)(x.ZP,{default:!0,monospace:!0,small:!0,children:[e,d>=2&&n<d-1&&(0,w.jsx)(x.ZP,{inline:!0,muted:!0,small:!0,children:",\xa0"})]})},e)}))})},"access")]})),uuid:"permissions"})}),[]),Pe=(0,o.useMemo)((function(){return De(pe)}),[De,pe]),Te=(0,o.useMemo)((function(){var e;return De(xe,!0,null===(e=M||[])||void 0===e?void 0:e.includes(k.ROLES))}),[De,M,xe]),Oe=(0,o.useMemo)((function(){var e;return Re(Ae,!0,null===(e=M||[])||void 0===e?void 0:e.includes(k.PERMISSIONS))}),[Re,Ae]),be=(0,w.jsxs)(A.N,{children:[(0,w.jsxs)(j.Z,{noPadding:!0,children:[(0,w.jsx)(p.Z,{p:_.cd,children:(0,w.jsx)(I.Z,{level:4,children:"Profile"})}),(0,w.jsx)(E.Z,{light:!0}),(0,w.jsx)(p.Z,{p:_.cd,children:(0,w.jsxs)(v.ZP,{alignItems:"center",children:[(0,w.jsx)(x.ZP,{default:!0,large:!0,children:"Avatar"}),(0,w.jsx)(p.Z,{mr:_.cd}),(0,w.jsx)(f.Z,{flex:1,children:(0,w.jsx)(h.Z,{afterIcon:(0,w.jsx)(L.Edit,{}),afterIconClick:function(e,n){var r;null===n||void 0===n||null===(r=n.current)||void 0===r||r.focus()},afterIconSize:W,alignRight:!0,autoComplete:"off",large:!0,noBackground:!0,noBorder:!0,fullWidth:!0,onChange:function(e){return te({avatar:e.target.value})},paddingHorizontal:0,paddingVertical:0,placeholder:"Add initials or an emoji",value:(null===ie||void 0===ie?void 0:ie.avatar)||""})})]})}),(0,w.jsx)(E.Z,{light:!0}),(0,w.jsx)(p.Z,{p:_.cd,children:(0,w.jsxs)(v.ZP,{alignItems:"center",children:[(0,w.jsxs)(x.ZP,{danger:"username"in ee&&!(null!==ie&&void 0!==ie&&ie.username),default:!0,large:!0,children:["Username ","username"in ee&&!(null!==ie&&void 0!==ie&&ie.username)&&(0,w.jsx)(x.ZP,{danger:!0,inline:!0,large:!0,children:"is required"})]}),(0,w.jsx)(p.Z,{mr:_.cd}),(0,w.jsx)(f.Z,{flex:1,children:(0,w.jsx)(h.Z,{afterIcon:(0,w.jsx)(L.Edit,{}),afterIconClick:function(e,n){var r;null===n||void 0===n||null===(r=n.current)||void 0===r||r.focus()},afterIconSize:W,alignRight:!0,large:!0,noBackground:!0,noBorder:!0,fullWidth:!0,onChange:function(e){return te({username:e.target.value})},paddingHorizontal:0,paddingVertical:0,placeholder:"e.g. Mage Supreme",value:(null===ie||void 0===ie?void 0:ie.username)||""})})]})}),(0,w.jsx)(E.Z,{light:!0}),(0,w.jsx)(p.Z,{p:_.cd,children:(0,w.jsxs)(v.ZP,{alignItems:"center",children:[(0,w.jsx)(x.ZP,{default:!0,large:!0,children:"First name"}),(0,w.jsx)(p.Z,{mr:_.cd}),(0,w.jsx)(f.Z,{flex:1,children:(0,w.jsx)(h.Z,{afterIcon:(0,w.jsx)(L.Edit,{}),afterIconClick:function(e,n){var r;null===n||void 0===n||null===(r=n.current)||void 0===r||r.focus()},afterIconSize:W,alignRight:!0,large:!0,noBackground:!0,noBorder:!0,fullWidth:!0,onChange:function(e){return te({first_name:e.target.value})},paddingHorizontal:0,paddingVertical:0,placeholder:"e.g. Urza",value:(null===ie||void 0===ie?void 0:ie.first_name)||""})})]})}),(0,w.jsx)(E.Z,{light:!0}),(0,w.jsx)(p.Z,{p:_.cd,children:(0,w.jsxs)(v.ZP,{alignItems:"center",children:[(0,w.jsx)(x.ZP,{default:!0,large:!0,children:"Last name"}),(0,w.jsx)(p.Z,{mr:_.cd}),(0,w.jsx)(f.Z,{flex:1,children:(0,w.jsx)(h.Z,{afterIcon:(0,w.jsx)(L.Edit,{}),afterIconClick:function(e,n){var r;null===n||void 0===n||null===(r=n.current)||void 0===r||r.focus()},afterIconSize:W,alignRight:!0,large:!0,noBackground:!0,noBorder:!0,fullWidth:!0,onChange:function(e){return te({last_name:e.target.value})},paddingHorizontal:0,paddingVertical:0,placeholder:"e.g. Andromeda",value:(null===ie||void 0===ie?void 0:ie.last_name)||""})})]})}),(0,w.jsx)(E.Z,{light:!0}),(0,w.jsx)(p.Z,{p:_.cd,children:(0,w.jsxs)(v.ZP,{alignItems:"center",children:[de&&(0,w.jsx)(x.ZP,{default:!0,large:!0,children:"Email"}),!de&&(0,w.jsxs)(x.ZP,{danger:"email"in ee&&!(null!==ie&&void 0!==ie&&ie.email),default:!0,large:!0,children:["Email ","email"in ee&&!(null!==ie&&void 0!==ie&&ie.email)&&(0,w.jsx)(x.ZP,{danger:!0,inline:!0,large:!0,children:"is required"})]}),(0,w.jsx)(p.Z,{mr:_.cd}),de&&(0,w.jsxs)(f.Z,{alignItems:"center",flex:1,justifyContent:"flex-end",children:[(0,w.jsx)(x.ZP,{large:!0,muted:!0,children:null===ie||void 0===ie?void 0:ie.email}),(0,w.jsx)(p.Z,{mr:_.cd}),(0,w.jsx)(L.Alphabet,{muted:!0,size:W}),(0,w.jsx)(p.Z,{mr:1})]}),!de&&(0,w.jsx)(f.Z,{flex:1,children:(0,w.jsx)(h.Z,{afterIcon:(0,w.jsx)(L.Alphabet,{}),afterIconClick:function(e,n){var r;null===n||void 0===n||null===(r=n.current)||void 0===r||r.focus()},afterIconSize:W,alignRight:!0,autoComplete:"off",large:!0,noBackground:!0,noBorder:!0,fullWidth:!0,onChange:function(e){return te({email:e.target.value})},paddingHorizontal:0,paddingVertical:0,placeholder:"e.g. mage@power.com",type:"email",value:(null===ie||void 0===ie?void 0:ie.email)||""})})]})})]}),(0,w.jsx)(p.Z,{mb:_.HN}),(0,w.jsxs)(j.Z,{noPadding:!0,children:[(0,w.jsx)(p.Z,{p:_.cd,children:(0,w.jsx)(I.Z,{level:4,children:"Authentication"})}),(0,w.jsx)(E.Z,{light:!0}),de&&(0,w.jsxs)(w.Fragment,{children:[(0,w.jsx)(p.Z,{p:_.cd,children:(0,w.jsxs)(v.ZP,{alignItems:"center",children:[(0,w.jsxs)(x.ZP,{danger:"password_current"in ee&&!(null!==ie&&void 0!==ie&&ie.password_current),default:!0,large:!0,children:["Current password ","password_current"in ee&&!(null!==ie&&void 0!==ie&&ie.password_current)&&(0,w.jsx)(x.ZP,{danger:!0,inline:!0,large:!0,children:"is required"})]}),(0,w.jsx)(p.Z,{mr:_.cd}),(0,w.jsx)(f.Z,{flex:1,children:(0,w.jsx)(h.Z,{afterIcon:(0,w.jsx)(L.Edit,{}),afterIconClick:function(e,n){var r;null===n||void 0===n||null===(r=n.current)||void 0===r||r.focus()},afterIconSize:W,alignRight:!0,large:!0,noBackground:!0,noBorder:!0,fullWidth:!0,onChange:function(e){return te({password_current:e.target.value})},paddingHorizontal:0,paddingVertical:0,placeholder:"* * * * * * * *",type:"password",value:(null===ie||void 0===ie?void 0:ie.password_current)||""})})]})}),(0,w.jsx)(E.Z,{light:!0})]}),(0,w.jsx)(p.Z,{p:_.cd,children:(0,w.jsxs)(v.ZP,{alignItems:"center",children:[(0,w.jsxs)(x.ZP,{danger:"password"in ee&&!(null!==ie&&void 0!==ie&&ie.password),default:!0,large:!0,children:[de?"New password":"Password"," ","password"in ee&&!(null!==ie&&void 0!==ie&&ie.password)&&(0,w.jsx)(x.ZP,{danger:!0,inline:!0,large:!0,children:"is required"})]}),(0,w.jsx)(p.Z,{mr:_.cd}),(0,w.jsx)(f.Z,{flex:1,children:(0,w.jsx)(h.Z,{afterIcon:(0,w.jsx)(L.Edit,{}),afterIconClick:function(e,n){var r;null===n||void 0===n||null===(r=n.current)||void 0===r||r.focus()},afterIconSize:W,alignRight:!0,autoComplete:"off",large:!0,noBackground:!0,noBorder:!0,fullWidth:!0,onChange:function(e){return te({password:e.target.value})},paddingHorizontal:0,paddingVertical:0,placeholder:"* * * * * * * *",type:"password",value:(null===ie||void 0===ie?void 0:ie.password)||""})})]})}),(0,w.jsx)(E.Z,{light:!0}),(0,w.jsx)(p.Z,{p:_.cd,children:(0,w.jsxs)(v.ZP,{alignItems:"center",children:[(0,w.jsxs)(x.ZP,{danger:"password_confirmation"in ee&&!(null!==ie&&void 0!==ie&&ie.password_confirmation),default:!0,large:!0,children:["Confirm ",de?"new password":"password"," ","password_confirmation"in ee&&!(null!==ie&&void 0!==ie&&ie.password_confirmation)&&(0,w.jsx)(x.ZP,{danger:!0,inline:!0,large:!0,children:"is required"})]}),(0,w.jsx)(p.Z,{mr:_.cd}),(0,w.jsx)(f.Z,{flex:1,children:(0,w.jsx)(h.Z,{afterIcon:(0,w.jsx)(L.Edit,{}),afterIconClick:function(e,n){var r;null===n||void 0===n||null===(r=n.current)||void 0===r||r.focus()},afterIconSize:W,alignRight:!0,autoComplete:"off",large:!0,noBackground:!0,noBorder:!0,fullWidth:!0,onChange:function(e){return te({password_confirmation:e.target.value})},paddingHorizontal:0,paddingVertical:0,placeholder:"* * * * * * * *",type:"password",value:(null===ie||void 0===ie?void 0:ie.password_confirmation)||""})})]})})]}),(0,w.jsx)(p.Z,{mb:_.HN}),de&&(0,w.jsxs)(w.Fragment,{children:[(0,w.jsxs)(j.Z,{noPadding:!0,children:[(0,w.jsx)(p.Z,{p:_.cd,children:(0,w.jsxs)(v.ZP,{alignItems:"center",justifyContent:"space-between",children:[(0,w.jsx)(I.Z,{level:4,children:"Roles"}),(0,w.jsx)(p.Z,{mr:_.cd}),Le&&!(null!==(n=M||[])&&void 0!==n&&n.includes(k.ROLES))&&(0,w.jsx)(v.ZP,{alignItems:"center",children:_e})]})}),(0,w.jsx)(E.Z,{light:!0}),!Le&&!(null!==(r=M||[])&&void 0!==r&&r.includes(k.ROLES))&&(0,w.jsxs)(p.Z,{p:_.cd,children:[(0,w.jsx)(p.Z,{mb:_.cd,children:(0,w.jsx)(x.ZP,{default:!0,children:"This user currently has no roles attached."})}),(0,w.jsx)(v.ZP,{alignItems:"center",children:_e})]}),Le&&(0,w.jsx)(p.Z,{pb:_.Mq,children:Te})]}),(0,w.jsx)(p.Z,{mb:_.HN}),(0,w.jsxs)(j.Z,{noPadding:!0,children:[(0,w.jsx)(p.Z,{p:_.cd,children:(0,w.jsx)(v.ZP,{alignItems:"center",justifyContent:"space-between",children:(0,w.jsx)(I.Z,{level:4,children:"Permissions"})})}),(0,w.jsx)(E.Z,{light:!0}),!Se&&(0,w.jsx)(p.Z,{p:_.cd,children:(0,w.jsx)(x.ZP,{default:!0,children:"This user currently has no permissions."})}),Se&&(0,w.jsx)(p.Z,{pb:_.Mq,children:Oe})]}),(0,w.jsx)(p.Z,{mb:_.HN}),(0,w.jsxs)(j.Z,{noPadding:!0,children:[(0,w.jsx)(p.Z,{p:_.cd,children:(0,w.jsx)(I.Z,{level:4,children:"Metadata"})}),(0,w.jsx)(E.Z,{light:!0}),(0,w.jsx)(p.Z,{p:_.cd,children:(0,w.jsxs)(v.ZP,{alignItems:"center",children:[(0,w.jsx)(x.ZP,{default:!0,large:!0,children:"Last updated"}),(0,w.jsx)(p.Z,{mr:_.cd}),(0,w.jsxs)(f.Z,{alignItems:"center",flex:1,justifyContent:"flex-end",children:[(0,w.jsx)(x.ZP,{large:!0,monospace:!0,muted:!0,children:(null===ie||void 0===ie?void 0:ie.updated_at)&&(0,D.d$)(null===ie||void 0===ie?void 0:ie.updated_at,{includeSeconds:!0})}),(0,w.jsx)(p.Z,{mr:_.cd}),(0,w.jsx)(L.Schedule,{muted:!0,size:W}),(0,w.jsx)(p.Z,{mr:1})]})]})}),(0,w.jsx)(E.Z,{light:!0}),(0,w.jsx)(p.Z,{p:_.cd,children:(0,w.jsxs)(v.ZP,{alignItems:"center",children:[(0,w.jsx)(x.ZP,{default:!0,large:!0,children:"Created at"}),(0,w.jsx)(p.Z,{mr:_.cd}),(0,w.jsxs)(f.Z,{alignItems:"center",flex:1,justifyContent:"flex-end",children:[(0,w.jsx)(x.ZP,{large:!0,monospace:!0,muted:!0,children:(null===ie||void 0===ie?void 0:ie.created_at)&&(0,D.d$)(null===ie||void 0===ie?void 0:ie.created_at,{includeSeconds:!0})}),(0,w.jsx)(p.Z,{mr:_.cd}),(0,w.jsx)(L.Schedule,{muted:!0,size:W}),(0,w.jsx)(p.Z,{mr:1})]})]})})]}),(0,w.jsx)(p.Z,{mb:_.HN})]}),(0,w.jsxs)(v.ZP,{children:[(0,w.jsx)(c.ZP,{beforeIcon:(0,w.jsx)(L.Save,{}),disabled:!ee||!(null!==(s=Object.keys(ee))&&void 0!==s&&s.length),loading:Ee,onClick:function(){return ue({user:y(y({},(0,b.GL)(ie,["avatar","first_name","last_name","password","password_confirmation","password_current","username"].concat(de?[]:"email"),{include_blanks:!0})),null!==M&&void 0!==M&&M.includes(k.ROLES)?{}:{role_ids:Object.keys((null===ie||void 0===ie?void 0:ie.rolesMapping)||{}).map((function(e){return Number(e)}))})})},primary:!0,children:de?"Save changes":"Create new user"}),U&&(0,w.jsxs)(w.Fragment,{children:[(0,w.jsx)(p.Z,{mr:_.cd}),(0,w.jsx)(c.ZP,{onClick:function(){return null===U||void 0===U?void 0:U()},secondary:!0,children:"Cancel and go back"})]}),de&&String(z)!==String(H)&&Q&&(0,w.jsxs)(w.Fragment,{children:[(0,w.jsx)(p.Z,{mr:_.cd}),(0,w.jsx)(c.ZP,{beforeIcon:(0,w.jsx)(L.Trash,{}),danger:!0,loading:je,onClick:function(){return Ie()},children:"Delete user"})]})]})]});return N?be:(0,w.jsx)(m.Z,{after:Pe,afterHeader:(0,w.jsx)(p.Z,{px:_.cd,children:(0,w.jsx)(x.ZP,{bold:!0,children:$})}),afterHidden:F,afterWidth:60*_.iI,appendBreadcrumbs:!0,breadcrumbs:[{label:function(){return"Users"},linkProps:{href:"/settings/workspace/users"}},{bold:!0,label:function(){return(0,R.s)(ie)}}],setAfterHidden:G,title:de?(0,R.s)(de):"New user",uuidItemSelected:S.B2.USERS,uuidWorkspaceSelected:S.Pl.USER_MANAGEMENT,children:de&&be})}},36288:function(e,n,r){r.d(n,{Fy:function(){return v},G9:function(){return c},H1:function(){return I},K4:function(){return d},ND:function(){return a},Pt:function(){return u},WG:function(){return s},hl:function(){return f},m_:function(){return t},oO:function(){return E}});var i,l,s,t,o=r(82394);!function(e){e[e.OWNER=1]="OWNER",e[e.ADMIN=2]="ADMIN",e[e.EDITOR=4]="EDITOR",e[e.VIEWER=8]="VIEWER",e[e.LIST=16]="LIST",e[e.DETAIL=32]="DETAIL",e[e.CREATE=64]="CREATE",e[e.UPDATE=128]="UPDATE",e[e.DELETE=512]="DELETE",e[e.OPERATION_ALL=1024]="OPERATION_ALL",e[e.QUERY=2048]="QUERY",e[e.QUERY_ALL=4096]="QUERY_ALL",e[e.READ=8192]="READ",e[e.READ_ALL=16384]="READ_ALL",e[e.WRITE=32768]="WRITE",e[e.WRITE_ALL=65536]="WRITE_ALL",e[e.ALL=131072]="ALL",e[e.DISABLE_LIST=262144]="DISABLE_LIST",e[e.DISABLE_DETAIL=524288]="DISABLE_DETAIL",e[e.DISABLE_CREATE=1048576]="DISABLE_CREATE",e[e.DISABLE_UPDATE=2097152]="DISABLE_UPDATE",e[e.DISABLE_DELETE=4194304]="DISABLE_DELETE",e[e.DISABLE_OPERATION_ALL=8388608]="DISABLE_OPERATION_ALL",e[e.DISABLE_QUERY=16777216]="DISABLE_QUERY",e[e.DISABLE_QUERY_ALL=33554432]="DISABLE_QUERY_ALL",e[e.DISABLE_READ=67108864]="DISABLE_READ",e[e.DISABLE_READ_ALL=134217728]="DISABLE_READ_ALL",e[e.DISABLE_WRITE=268435456]="DISABLE_WRITE",e[e.DISABLE_WRITE_ALL=536870912]="DISABLE_WRITE_ALL",e[e.DISABLE_UNLESS_CONDITIONS=1073741824]="DISABLE_UNLESS_CONDITIONS"}(s||(s={})),function(e){e.HAS_NOTEBOOK_EDIT_ACCESS="HAS_NOTEBOOK_EDIT_ACCESS",e.HAS_PIPELINE_EDIT_ACCESS="HAS_PIPELINE_EDIT_ACCESS",e.USER_OWNS_ENTITY="USER_OWNS_ENTITY"}(t||(t={}));var d=(i={},(0,o.Z)(i,s.OWNER,"Owner"),(0,o.Z)(i,s.ADMIN,"Admin"),(0,o.Z)(i,s.EDITOR,"Editor"),(0,o.Z)(i,s.VIEWER,"Viewer"),(0,o.Z)(i,s.LIST,"List"),(0,o.Z)(i,s.DETAIL,"Detail"),(0,o.Z)(i,s.CREATE,"Create"),(0,o.Z)(i,s.UPDATE,"Update"),(0,o.Z)(i,s.DELETE,"Delete"),(0,o.Z)(i,s.OPERATION_ALL,"All operations"),(0,o.Z)(i,s.QUERY,"Query"),(0,o.Z)(i,s.QUERY_ALL,"Query all attributes"),(0,o.Z)(i,s.READ,"Read"),(0,o.Z)(i,s.READ_ALL,"Read all attributes"),(0,o.Z)(i,s.WRITE,"Write"),(0,o.Z)(i,s.WRITE_ALL,"Write all attributes"),(0,o.Z)(i,s.ALL,"All"),(0,o.Z)(i,s.DISABLE_LIST,"Disable list"),(0,o.Z)(i,s.DISABLE_DETAIL,"Disable detail"),(0,o.Z)(i,s.DISABLE_CREATE,"Disable create"),(0,o.Z)(i,s.DISABLE_UPDATE,"Disable update"),(0,o.Z)(i,s.DISABLE_DELETE,"Disable delete"),(0,o.Z)(i,s.DISABLE_OPERATION_ALL,"Disable all operations"),(0,o.Z)(i,s.DISABLE_QUERY,"Disable query"),(0,o.Z)(i,s.DISABLE_QUERY_ALL,"Disable all query parameters"),(0,o.Z)(i,s.DISABLE_READ,"Disable read"),(0,o.Z)(i,s.DISABLE_READ_ALL,"Disable all read attributes"),(0,o.Z)(i,s.DISABLE_WRITE,"Disable write"),(0,o.Z)(i,s.DISABLE_WRITE_ALL,"Disable all write attributes"),i),a=(l={},(0,o.Z)(l,t.HAS_NOTEBOOK_EDIT_ACCESS,"Disable unless user has notebook edit access"),(0,o.Z)(l,t.HAS_PIPELINE_EDIT_ACCESS,"Disable unless user has pipeline edit access"),(0,o.Z)(l,t.USER_OWNS_ENTITY,"Disable unless user owns the current entity"),l),c=[s.OWNER,s.ADMIN,s.EDITOR,s.VIEWER,s.ALL],u=[s.LIST,s.DETAIL,s.CREATE,s.UPDATE,s.DELETE,s.OPERATION_ALL],E=[s.DISABLE_LIST,s.DISABLE_DETAIL,s.DISABLE_CREATE,s.DISABLE_UPDATE,s.DISABLE_DELETE,s.DISABLE_OPERATION_ALL],f=[s.QUERY,s.QUERY_ALL,s.DISABLE_QUERY,s.DISABLE_QUERY_ALL],v=[s.READ,s.READ_ALL,s.DISABLE_READ,s.DISABLE_READ_ALL],I=[s.WRITE,s.WRITE_ALL,s.DISABLE_WRITE,s.DISABLE_WRITE_ALL]},36717:function(e,n,r){r.d(n,{q:function(){return s}});var i=r(75582),l=r(36288);function s(e){return Object.entries(l.K4).reduce((function(n,r){var l=(0,i.Z)(r,2),s=l[0],t=l[1];return e&Number(s)?n.concat(t):n}),[])}},76417:function(e,n,r){function i(e){return null!==e&&void 0!==e&&e.first_name?[null===e||void 0===e?void 0:e.first_name,null===e||void 0===e?void 0:e.last_name].filter((function(e){return e})).join(" "):null===e||void 0===e?void 0:e.username}r.d(n,{s:function(){return i}})}}]);