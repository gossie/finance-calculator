(function(e){function t(t){for(var s,r,l=t[0],u=t[1],o=t[2],d=0,f=[];d<l.length;d++)r=l[d],i[r]&&f.push(i[r][0]),i[r]=0;for(s in u)Object.prototype.hasOwnProperty.call(u,s)&&(e[s]=u[s]);c&&c(t);while(f.length)f.shift()();return a.push.apply(a,o||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],s=!0,l=1;l<n.length;l++){var u=n[l];0!==i[u]&&(s=!1)}s&&(a.splice(t--,1),e=r(r.s=n[0]))}return e}var s={},i={app:0},a=[];function r(t){if(s[t])return s[t].exports;var n=s[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,r),n.l=!0,n.exports}r.m=e,r.c=s,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var s in e)r.d(n,s,function(t){return e[t]}.bind(null,s));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],u=l.push.bind(l);l.push=t,l=l.slice();for(var o=0;o<l.length;o++)t(l[o]);var c=u;a.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"56d7":function(e,t,n){"use strict";n.r(t);n("cadf"),n("551c"),n("f751"),n("097d");var s=n("2b0e"),i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"container"},[n("form",{on:{submit:function(t){return t.preventDefault(),e.calculate(t)}}},[n("div",{staticClass:"tile is-ancestor  is-vertical"},[n("div",{staticClass:"tile is-parent"},[n("div",{staticClass:"tile is-parent"},[n("finance-field",{attrs:{fieldid:"initialSave",label:"Initial fortune (Save)"},on:{"value-changed":e.onValueChange}})],1),n("div",{staticClass:"tile is-parent"},[n("finance-field",{attrs:{fieldid:"initialRisk",label:"Initial fortune (Risk)"},on:{"value-changed":e.onValueChange}})],1)]),n("div",{staticClass:"tile is-parent"},[n("div",{staticClass:"tile is-parent"},[n("finance-field-with-interests",{attrs:{fieldid:"saveSavement",label:"Yearly savement (save)",defaultinterests:"0.2"},on:{"value-changed":e.onValueChange,"interests-changed":e.onInterestsChange}})],1),n("div",{staticClass:"tile is-parent"},[n("finance-field-with-interests",{attrs:{fieldid:"riskSavement",label:"Yearly savement (Risk)",defaultinterests:"5"},on:{"value-changed":e.onValueChange,"interests-changed":e.onInterestsChange}})],1)]),n("div",{staticClass:"tile is-parent"},[n("div",{staticClass:"tile is-parent"},[n("finance-field",{attrs:{fieldid:"years",label:"Years"},on:{"value-changed":e.onValueChange}})],1),n("div",{staticClass:"tile is-parent"},[n("finance-field",{attrs:{fieldid:"yearsToCome",label:"Years to come"},on:{"value-changed":e.onValueChange}})],1)]),e._m(0),e.showResult?n("div",{staticClass:"tile is-parent"},[n("div",{staticClass:"tile is-parent"},[n("div",{staticClass:"tile is-child box table-container"},[n("table",{staticClass:"table is-striped"},[e._m(1),n("tbody",e._l(e.resultYears,function(t){return n("tr",[n("td",[e._v(e._s(t.number))]),n("td",[e._v(e._s(t.sumSave))]),n("td",[e._v(e._s(t.sumRisk))]),n("td",[e._v(e._s(t.sum))]),n("td",[e._v(e._s(t.interest))]),n("td",[e._v(e._s(t.sumSaveWithInterest))]),n("td",[e._v(e._s(t.sumRiskWithInterest))]),n("td",[e._v(e._s(t.result))])])}),0),n("tfoot",[n("tr",[n("td"),n("td"),n("td"),n("td"),n("td",[n("b",[e._v(e._s(e.totalInterests))])]),n("td"),n("td"),n("td")])])])])])]):e._e(),e.showResult&&e.yearsToCome>0?n("div",{staticClass:"tile is-parent"},[n("div",{staticClass:"tile is-parent"},[n("div",{staticClass:"tile is-child box table-container"},[n("p",[e._v("Per year: "+e._s(e.perYear))]),n("p",[e._v("Per month: "+e._s(e.perMonth))])])])]):e._e()])])])},a=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"tile is-parent"},[n("div",{staticClass:"tile is-parent"},[n("div",{staticClass:"tile is-child"},[n("div",{staticClass:"field is-grouped"},[n("div",{staticClass:"control"},[n("input",{staticClass:"button is-link",attrs:{type:"submit",value:"Calculate"}})])])])])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("thead",[n("tr",[n("th",[e._v("Year")]),n("th",[e._v("Save part of the fortune without interests")]),n("th",[e._v("Risky part of the fortune without interests")]),n("th",[e._v("Total fortune without interests")]),n("th",[e._v("Interests")]),n("th",[e._v("save part of the fortune with interests")]),n("th",[e._v("Risky part of the fortune with interests")]),n("th",[e._v("Total fortune")])])])}],r=(n("f559"),function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"tile is-child box"},[n("div",{staticClass:"field"},[n("label",{staticClass:"label",attrs:{for:e.fieldid}},[e._v(e._s(e.label))]),n("div",{staticClass:"control"},[n("input",{directives:[{name:"model",rawName:"v-model.number",value:e.value,expression:"value",modifiers:{number:!0}}],staticClass:"input",attrs:{id:e.fieldid,type:"text",name:e.fieldid,required:""},domProps:{value:e.value},on:{change:e.onValueChange,input:function(t){t.target.composing||(e.value=e._n(t.target.value))},blur:function(t){return e.$forceUpdate()}}})])])])}),l=[],u={name:"finance-field",props:{fieldid:String,label:String},data:function(){return{value:0}},methods:{onValueChange:function(){this.$emit("value-changed",{fieldId:this.fieldid,value:this.value})}}},o=u,c=n("2877"),d=Object(c["a"])(o,r,l,!1,null,null,null),f=d.exports,v=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"tile is-child box"},[n("div",{staticClass:"field"},[n("label",{staticClass:"label",attrs:{for:e.fieldid}},[e._v(e._s(e.label))]),n("div",{staticClass:"control"},[n("input",{directives:[{name:"model",rawName:"v-model.number",value:e.value,expression:"value",modifiers:{number:!0}}],staticClass:"input",attrs:{id:e.fieldid,type:"text",name:e.fieldid,required:""},domProps:{value:e.value},on:{change:e.onValueChange,input:function(t){t.target.composing||(e.value=e._n(t.target.value))},blur:function(t){return e.$forceUpdate()}}}),n("input",{directives:[{name:"model",rawName:"v-model.number",value:e.interests,expression:"interests",modifiers:{number:!0}}],staticClass:"input",attrs:{id:"interests",type:"text",name:"interests",required:"",placeholder:"Interests"},domProps:{value:e.interests},on:{change:e.onInterestsChange,input:function(t){t.target.composing||(e.interests=e._n(t.target.value))},blur:function(t){return e.$forceUpdate()}}})])])])},h=[],m=(n("c5f6"),{name:"finance-field-with-interests",props:{fieldid:String,label:String,defaultinterests:Number},data:function(){return this.$emit("interests-changed",{fieldId:this.fieldid,value:this.defaultinterests}),{value:0,interests:this.defaultinterests}},methods:{onValueChange:function(){this.$emit("value-changed",{fieldId:this.fieldid,value:this.value})},onInterestsChange:function(){this.$emit("interests-changed",{fieldId:this.fieldid,value:this.interests})}}}),p=m,b=Object(c["a"])(p,v,h,!1,null,null,null),y=b.exports,g={name:"app",components:{FinanceField:f,FinanceFieldWithInterests:y},data:function(){return{initialSave:0,initialRisk:0,years:0,yearsToCome:0,interestSave:0,interestRisk:0,saveSavement:0,riskSavement:0,showResult:!1}},computed:{resultYears:function(){for(var e=[],t=this.interestSave/100,n=this.interestRisk/100,s=this.initialSave,i=this.initialRisk,a=this.initialSave,r=this.initialRisk,l=1;l<=this.years;l++){var u=this.saveSavement*t+s*t,o=this.riskSavement*n+i*n,c=u+o;s+=this.saveSavement+u,i+=this.riskSavement+o,a+=this.saveSavement,r+=this.riskSavement;var d=s+i;e.push({number:l,sumSave:new Intl.NumberFormat("de-DE",{style:"currency",currency:"EUR"}).format(parseInt(100*a)/100),sumRisk:new Intl.NumberFormat("de-DE",{style:"currency",currency:"EUR"}).format(parseInt(100*r)/100),sum:new Intl.NumberFormat("de-DE",{style:"currency",currency:"EUR"}).format(parseInt(100*(a+r))/100),interestRaw:c,interest:new Intl.NumberFormat("de-DE",{style:"currency",currency:"EUR"}).format(parseInt(100*c)/100),sumSaveWithInterest:new Intl.NumberFormat("de-DE",{style:"currency",currency:"EUR"}).format(parseInt(100*s)/100),sumRiskWithInterest:new Intl.NumberFormat("de-DE",{style:"currency",currency:"EUR"}).format(parseInt(100*i)/100),resultRaw:d,result:new Intl.NumberFormat("de-DE",{style:"currency",currency:"EUR"}).format(parseInt(100*d)/100)})}return e},totalInterests:function(){var e=this.resultYears.map(function(e){return e.interestRaw}).reduce(function(e,t){return e+t},0);return new Intl.NumberFormat("de-DE",{style:"currency",currency:"EUR"}).format(parseInt(100*e)/100)},perYear:function(){var e=this.resultYears[this.resultYears.length-1].resultRaw/this.yearsToCome;return new Intl.NumberFormat("de-DE",{style:"currency",currency:"EUR"}).format(parseInt(100*e)/100)},perMonth:function(){var e=this.resultYears[this.resultYears.length-1].resultRaw/this.yearsToCome/12;return new Intl.NumberFormat("de-DE",{style:"currency",currency:"EUR"}).format(parseInt(100*e)/100)}},methods:{onValueChange:function(e){this[e.fieldId]=e.value},onInterestsChange:function(e){e.fieldId.startsWith("save")?this.interestSave=e.value:this.interestRisk=e.value},calculate:function(){this.showResult=!0},clear:function(){this.showResult=!1}}},_=g,C=Object(c["a"])(_,i,a,!1,null,null,null),w=C.exports,I=n("2f62");s["a"].use(I["a"]);var R=new I["a"].Store({state:{},mutations:{},actions:{}});n("eb46");s["a"].config.productionTip=!1,new s["a"]({store:R,render:function(e){return e(w)}}).$mount("#app")}});
//# sourceMappingURL=app.558f16f0.js.map