webpackJsonp([6],{1913:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r,o,u=a(2),i=n(u),c=a(60),d=n(c),s=a(4),f=n(s),l=a(10),m=n(l),h=a(7),p=n(h),v=a(8),w=n(v),y=a(0),x=(n(y),a(14)),k=(n(x),a(288)),C=a(736),g=n(C),A=(r=(0,k.wrapper)(g.default))(o=function(e){function t(){return(0,f.default)(this,t),(0,p.default)(this,(t.__proto__||(0,d.default)(t)).apply(this,arguments))}return(0,w.default)(t,e),(0,m.default)(t,[{key:"render",value:function(){return this.props.monkeyKing((0,i.default)({},this.props,{path:"root"}))}}]),t}(y.Component))||o;t.default=A,e.exports=t.default},1914:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function r(e){var t=new x.action(e),a=new _((0,u.default)({},e,{metaAction:t})),n=(0,u.default)({},t,a);return t.config({metaHandlers:n}),n}Object.defineProperty(t,"__esModule",{value:!0});var o=a(2),u=n(o),i=a(635),c=n(i),d=a(636),s=n(d),f=a(4),l=n(f),m=a(10),h=n(m);t.default=r;var p=a(0),v=n(p),w=a(14),y=n(w),x=a(288),k=a(669),C=n(k),g=a(189),A=a(9),b=(n(A),a(12)),S=n(b),R=["name","rela","mobile","birthday","isWork"],_=function(){function e(t){var a=this;(0,l.default)(this,e),this.onInit=function(e){var t=e.component,n=e.injections;a.component=t,a.injections=n,n.reduce("init"),a.load()},this.load=(0,s.default)(c.default.mark(function e(){var t,n;return c.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t={},e.next=3,a.webapi.voucher.init({id:a.component.props.voucherId});case 3:n=e.sent,t.voucher=n.voucher,t.educationDataSource=n.educations,t.relaDataSource=n.relas,a.injections.reduce("load",t);case 8:case"end":return e.stop()}},e,a)})),this.prev=(0,s.default)(c.default.mark(function e(){var t,n;return c.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=a.metaAction.gf("data.form.id"),e.next=3,a.webapi.voucher.prev(t);case 3:n=e.sent,n&&a.injections.reduce("setVoucher",n);case 5:case"end":return e.stop()}},e,a)})),this.next=(0,s.default)(c.default.mark(function e(){var t,n;return c.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=a.metaAction.gf("data.form.id"),e.next=3,a.webapi.voucher.next(t);case 3:n=e.sent,n&&a.injections.reduce("setVoucher",n);case 5:case"end":return e.stop()}},e,a)})),this.add=function(){a.injections.reduce("setVoucher")},this.del=(0,s.default)(c.default.mark(function e(){var t,n,r;return c.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=a.metaAction.gf("data.form.id"),e.next=3,a.metaAction.modal("confirm",{title:"删除",content:"确认删除?"});case 3:if(!(n=e.sent)){e.next=10;break}return e.next=7,a.webapi.voucher.del({id:t});case 7:r=e.sent,a.metaAction.toast("success","删除单据成功"),a.injections.reduce("setVoucher",r);case 10:case"end":return e.stop()}},e,a)})),this.save=(0,s.default)(c.default.mark(function e(){var t,n,r,o;return c.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(t=a.metaAction.gf("data.form").toJS(),n=a.checkSave(t),!(n.length>0)){e.next=5;break}return a.metaAction.toast("error",v.default.createElement("ul",{style:{textAlign:"left"}},n.map(function(e){return v.default.createElement("li",null,e)}))),e.abrupt("return");case 5:if(!t.id&&0!=t.id){e.next=12;break}return e.next=8,a.webapi.voucher.update(t);case 8:r=e.sent,r&&(a.metaAction.toast("success","保存单据成功"),a.injections.reduce("setVoucher",r)),e.next=16;break;case 12:return e.next=14,a.webapi.voucher.create(t);case 14:o=e.sent,o&&(a.metaAction.toast("success","保存单据成功"),a.injections.reduce("setVoucher",o));case 16:case"end":return e.stop()}},e,a)})),this.addEducation=(0,s.default)(c.default.mark(function e(){var t,n;return c.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,a.metaAction.modal("show",{title:"新增学历",children:a.metaAction.loadApp("mk-app-voucher-education",{store:a.component.props.store})});case 2:if(!(t=e.sent)){e.next=8;break}return e.next=6,a.webapi.education.query();case 6:n=e.sent,a.metaAction.sfs({"data.other.educationDataSource":(0,g.fromJS)(n),"data.form.education":(0,g.fromJS)(t)});case 8:case"end":return e.stop()}},e,a)})),this.educationFocus=(0,s.default)(c.default.mark(function e(){var t;return c.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,a.webapi.education.query();case 2:t=e.sent,a.metaAction.sf("data.other.educationDataSource",(0,g.fromJS)(t));case 4:case"end":return e.stop()}},e,a)})),this.educationChange=function(e){var t=a.metaAction.gf("data.other.educationDataSource"),n=t.find(function(t){return t.get("id")==e});a.metaAction.sf("data.form.education",n)},this.addrow=function(e){a.injections.reduce("addEmptyRow",e.rowIndex+1)},this.delrow=function(e){a.injections.reduce("delrow",e.rowIndex)},this.getCellClassName=function(e){return a.metaAction.isFocus(e)?"mk-app-voucher-cell editable-cell":""},this.gridBirthdayOpenChange=function(e){if(!e){var t=y.default.findDOMNode(a.component).querySelector(".editable-cell");if(t&&-1!=t.className.indexOf("datepicker")){t.querySelector("input").focus()}}},this.mousedown=function(e){var t=S.default.path.findPathByEvent(e);if(!a.metaAction.isFocus(t))if(-1!=t.indexOf("cell.cell"))a.focusCell(a.getCellInfo(t));else{if(!a.metaAction.focusByEvent(e))return;setTimeout(a.cellAutoFocus,16)}},this.gridKeydown=function(e){var t="";if(37!=e.keyCode&&39!=e.keyCode&&13!=e.keyCode&&108!=e.keyCode&&9!=e.keyCode&&38!=e.keyCode&&40!=e.keyCode||(t=S.default.path.findPathByEvent(e))&&-1!=t.indexOf(",")){if(37==e.keyCode){if(!S.default.dom.cursorAtBegin(e))return;return void a.moveEditCell(t,"left")}if(39==e.keyCode||13==e.keyCode||108==e.keyCode||9==e.keyCode){if(!S.default.dom.cursorAtEnd(e))return;return void a.moveEditCell(t,"right")}return 38==e.keyCode?void a.moveEditCell(t,"up"):40==e.keyCode?void a.moveEditCell(t,"down"):void 0}},this.cellAutoFocus=function(){S.default.dom.gridCellAutoFocus(a.component,".editable-cell")},this.metaAction=t.metaAction,this.config=C.default.current,this.webapi=this.config.webapi}return(0,h.default)(e,[{key:"checkSave",value:function(e){var t=[];return e.name||t.push("姓名不能为空!"),e.mobile||t.push("手机不能为空!"),e.details&&0!=e.details.length||t.push("家庭情况不能为空！"),e.details.forEach(function(e,a){e.name||t.push("家庭情况第"+(a+1)+"行，家庭成员姓名不能为空！"),e.rela||t.push("家庭情况第"+(a+1)+"行，关系不能为空！")}),t}},{key:"moveEditCell",value:function(e,t){var a=this.getCellInfo(e),n=S.default.matrix.move(a.rowCount,a.colCount,{x:a.x,y:a.y},t);this.focusCell(n)}},{key:"focusCell",value:function(e){this.metaAction.sfs({"data.other.focusFieldPath":"root.children.formDetails.columns."+R[e.x]+".cell.cell,"+e.y,"data.other.scrollToRow":e.y,"data.other.scrollToColumn":e.x}),setTimeout(this.cellAutoFocus,16)}},{key:"getCellInfo",value:function(e){var t=S.default.path.parsePath(e),a=this.metaAction.gf("data.form.details").size,n=t.path.replace("root.children.formDetails.columns.","").replace(".cell.cell","").replace(/\s/g,"");return{x:R.findIndex(function(e){return e==n}),y:Number(t.vars[0]),colCount:5,rowCount:a}}}]),e}();e.exports=t.default},1915:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function r(e){var t=new s.reducer(e),a=new p((0,u.default)({},e,{metaReducer:t}));return(0,u.default)({},t,a)}Object.defineProperty(t,"__esModule",{value:!0});var o=a(2),u=n(o),i=a(4),c=n(i);t.default=r;var d=a(189),s=a(288),f=a(669),l=n(f),m=a(737),h=a(9),p=(n(h),function e(t){var a=this;(0,c.default)(this,e),this.init=function(e,t){return a.metaReducer.init(e,(0,m.getInitState)())},this.load=function(e,t){var n=t.voucher,r=t.educationDataSource,o=t.relaDataSource;return e=n?a.metaReducer.sf(e,"data.form",(0,d.fromJS)(n)):a.metaReducer.sf(e,"data",(0,d.fromJS)((0,m.getInitState)().data)),e=a.metaReducer.sf(e,"data.other.educationDataSource",(0,d.fromJS)(r)),e=a.metaReducer.sf(e,"data.other.relaDataSource",(0,d.fromJS)(o))},this.setVoucher=function(e,t){return t?a.metaReducer.sf(e,"data.form",(0,d.fromJS)(t)):a.metaReducer.sf(e,"data.form",(0,d.fromJS)((0,m.getInitState)().data.form))},this.addEmptyRow=function(e,t){var n=a.metaReducer.gf(e,"data.form.details");return n=n.insert(t,(0,d.Map)({})),a.metaReducer.sf(e,"data.form.details",n)},this.delrow=function(e,t){var n=a.metaReducer.gf(e,"data.form.details");return-1==t?e:(n=n.remove(t),0==n.size&&(n=n.insert(t,(0,d.Map)({}))),a.metaReducer.sf(e,"data.form.details",n))},this.metaReducer=t.metaReducer,this.config=l.default.current});e.exports=t.default}});