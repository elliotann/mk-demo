webpackJsonp([11],{1901:function(t,e,n){"use strict";function u(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r,a,i=n(2),o=u(i),c=n(60),d=u(c),f=n(4),s=u(f),l=n(10),p=u(l),h=n(7),m=u(h),v=n(8),_=u(v),w=n(0),g=(u(w),n(288)),A=n(728),R=u(A),b=(r=(0,g.wrapper)(R.default))(a=function(t){function e(){return(0,s.default)(this,e),(0,m.default)(this,(e.__proto__||(0,d.default)(e)).apply(this,arguments))}return(0,_.default)(e,t),(0,p.default)(e,[{key:"render",value:function(){return this.props.monkeyKing((0,o.default)({},this.props,{path:"root"}))}}]),e}(w.Component))||a;e.default=b,t.exports=e.default},1902:function(t,e,n){"use strict";function u(t){return t&&t.__esModule?t:{default:t}}function r(t){var e=new f.action(t),n=new p((0,i.default)({},t,{metaAction:e})),u=(0,i.default)({},e,n);return e.config({metaHandlers:u}),u}Object.defineProperty(e,"__esModule",{value:!0});var a=n(2),i=u(a),o=n(4),c=u(o);e.default=r;var d=n(0),f=(u(d),n(288)),s=n(289),l=u(s),p=function t(e){var n=this;(0,c.default)(this,t),this.onInit=function(t){var e=t.component,u=t.injections;n.component=e,n.injections=u,u.reduce("init")},this.onRedirect=function(t){var e=t.appName;n.injections.reduce("redirect",e)},this.metaAction=e.metaAction,this.config=l.default.current,window.onhashchange=function(){var t=document.location.hash||"";t&&t.substr(1)!=n.metaAction.gf("data.currentAppName")&&n.onRedirect({appName:t.substr(1)})}};t.exports=e.default},1903:function(t,e,n){"use strict";function u(t){return t&&t.__esModule?t:{default:t}}function r(t){var e=new d.reducer(t),n=new p((0,i.default)({},t,{metaReducer:e}));return(0,i.default)({},e,n)}Object.defineProperty(e,"__esModule",{value:!0});var a=n(2),i=u(a),o=n(4),c=u(o);e.default=r;var d=(n(189),n(288)),f=n(289),s=u(f),l=n(729),p=function t(e){var n=this;(0,c.default)(this,t),this.init=function(t,e){var u=(0,l.getInitState)();return setTimeout(function(){return location.hash=u.data.currentAppName},0),n.metaReducer.init(t,u)},this.redirect=function(t,e){return setTimeout(function(){return location.hash=e},0),t=n.metaReducer.sf(t,"data.currentAppName",e)},this.metaReducer=e.metaReducer,this.config=s.default.current};t.exports=e.default}});