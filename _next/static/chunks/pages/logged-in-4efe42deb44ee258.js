(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[811],{9665:function(n,t,e){"use strict";e.r(t);var r=e(29),o=e(7794),i=e.n(o),c=e(7294),u=e(917),a=e(1163),s=e.n(a),l=e(4078),f=e.n(l),d=e(273),h=e(1116),g=e(7441),_=e(9708),p=e(7090),v=e(7914),w=e(3121),E=e(6716),m=e(5944),I=(0,E.D)({getInitialProps:function(){var n=(0,r.Z)(i().mark((function n(t){var e,r,o;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e=t.egoJwt,r=t.asPath,o=t.query,n.abrupt("return",{egoJwt:e,query:o,asPath:r});case 2:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),isPublic:!0})((function(){var n=(0,_.Z)().logEvent;return(0,c.useEffect)((function(){!function(n){var t=(0,g.i)(),e=t.NEXT_PUBLIC_EGO_API_ROOT,r=t.NEXT_PUBLIC_EGO_CLIENT_ID,o=f()(e,"/oauth/ego-token?client_id=".concat(r));fetch(o,{credentials:"include",headers:{accept:"*/*"},body:null,method:"POST"}).then((function(n){if(200!==n.status)throw new Error;return n.text()})).then((function(t){if(!(0,w.MU)(t))throw n("Invalid JWT provided by Ego/Keycloak"),new Error("Invalid jwt, cannot login.");localStorage.setItem(p.X_,t),n("Logged in"),setTimeout((function(){return s().push((0,v.Z)({path:p.Cm.SUBMISSION}))}),2e3)})).catch((function(t){console.warn(t),localStorage.removeItem(p.X_),n("Failed to login"),s().push((0,v.Z)({path:p.Cm.LOGIN}))}))}((function(t){n({category:"User",action:t})}))})),(0,m.tZ)(h.Z,{children:(0,m.BX)("div",{css:function(n){return(0,u.iv)("display:flex;flex-direction:column;justify-content:center;align-items:center;background-color:",n.colors.grey_2,";","")},children:[(0,m.tZ)(d.ZP,{margin:"0 auto"}),(0,m.tZ)("div",{css:function(n){return(0,u.iv)("margin-top:2rem;color:",n.colors.accent,";",n.typography.heading,";","")},children:"Logging in..."})]})})}));t.default=I},4781:function(n,t,e){(window.__NEXT_P=window.__NEXT_P||[]).push(["/logged-in",function(){return e(9665)}])}},function(n){n.O(0,[73,413,273,774,888,179],(function(){return t=4781,n(n.s=t);var t}));var t=n.O();_N_E=t}]);