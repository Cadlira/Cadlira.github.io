(function(t){function e(e){for(var r,i,l=e[0],c=e[1],s=e[2],d=0,p=[];d<l.length;d++)i=l[d],Object.prototype.hasOwnProperty.call(o,i)&&o[i]&&p.push(o[i][0]),o[i]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(t[r]=c[r]);u&&u(e);while(p.length)p.shift()();return n.push.apply(n,s||[]),a()}function a(){for(var t,e=0;e<n.length;e++){for(var a=n[e],r=!0,l=1;l<a.length;l++){var c=a[l];0!==o[c]&&(r=!1)}r&&(n.splice(e--,1),t=i(i.s=a[0]))}return t}var r={},o={app:0},n=[];function i(e){if(r[e])return r[e].exports;var a=r[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,i),a.l=!0,a.exports}i.m=t,i.c=r,i.d=function(t,e,a){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(i.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)i.d(a,r,function(e){return t[e]}.bind(null,r));return a},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],c=l.push.bind(l);l.push=e,l=l.slice();for(var s=0;s<l.length;s++)e(l[s]);var u=c;n.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"034f":function(t,e,a){"use strict";a("85ec")},"405a":function(t,e,a){t.exports=a.p+"img/2.15654a21.jpg"},"416a":function(t,e,a){var r={"./1.jpg":"8554","./10.jpg":"efcc","./100.jpg":"88db","./2.jpg":"405a","./20.jpg":"a823","./200.jpg":"aabb","./5.jpg":"4d0f","./50.jpg":"c023"};function o(t){var e=n(t);return a(e)}function n(t){if(!a.o(r,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return r[t]}o.keys=function(){return Object.keys(r)},o.resolve=n,t.exports=o,o.id="416a"},"4d0f":function(t,e,a){t.exports=a.p+"img/5.a5050324.jpg"},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var r=a("2b0e"),o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("small",[t._v("Feito por Clarice Lira e Leonardo Lira")]),a("h1",[t._v("Jogo da mesada")]),t.iniciado?t._e():a("div",[a("center",[a("form",[a("div",{staticClass:"form-group col-md-6 "},[a("label",{staticClass:"justify-content-start",attrs:{for:"exampleInputEmail1"}},[t._v("Número de operações")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.numOperacoes,expression:"numOperacoes"}],staticClass:"form-control col-md-2",attrs:{type:"number"},domProps:{value:t.numOperacoes},on:{input:function(e){e.target.composing||(t.numOperacoes=e.target.value)}}})]),a("button",{staticClass:"btn btn-primary",attrs:{type:"button"},on:{click:function(e){return t.iniciarJogo()}}},[t._v("Iniciar Rodada")])])])],1),t.iniciado?a("div",[a("center",[a("table",{staticClass:"table b-table table-striped table-hover pl-5 pr-5",attrs:{role:"table",width:"60%","aria-busy":"false","aria-colcount":"4"}},[a("tbody",{attrs:{role:"rowgroup"}},t._l(t.dados,(function(e){return a("tr",{key:e.id,class:e.erro?"table-danger":"",attrs:{role:"row"}},[a("td",{staticClass:"coluna",attrs:{"aria-colindex":"1",role:"cell",width:"30%"}},[a("img",{attrs:{width:"80%",alt:"Vue logo",src:t.getImgUrl(e.cedula1)}})]),a("td",{staticClass:"coluna",staticStyle:{"font-size":"2em"},attrs:{"aria-colindex":"2",role:"cell",width:"5%"}},[t._v(t._s(e.operacao))]),a("td",{staticClass:"coluna",attrs:{"aria-colindex":"3",role:"cell",width:"30%"}},[a("img",{attrs:{width:"80%",alt:"Vue logo",src:t.getImgUrl(e.cedula2)}})]),a("td",{staticClass:"coluna",staticStyle:{"font-size":"2em"},attrs:{"aria-colindex":"4",role:"cell",width:"5%"}},[t._v("=")]),a("td",{staticClass:"coluna",attrs:{"aria-colindex":"5",role:"cell",width:"30%"}},[a("span",{staticClass:"form-group col-md-12 "},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.resultado,expression:"dado.resultado"}],staticClass:"col-md-8",attrs:{type:"number",id:""},domProps:{value:e.resultado},on:{input:function(a){a.target.composing||t.$set(e,"resultado",a.target.value)}}}),a("span",{staticClass:"col-md-2"},["SIM"==e.validado?a("b-icon",{attrs:{icon:"hand-thumbs-up",variant:"success"}}):t._e(),"NAO"==e.validado?a("b-icon",{attrs:{icon:"hand-thumbs-down",variant:"danger"}}):t._e()],1)])])])})),0)])]),a("button",{staticClass:"btn btn-danger mr-2 ",attrs:{type:"button"},on:{click:function(e){return t.cancelar()}}},[t._v("Cancelar Rodada")]),a("button",{staticClass:"btn btn-primary",attrs:{type:"button"},on:{click:function(e){return t.validar()}}},[t._v("Validar Rodada")])],1):t._e()])},n=[],i=(a("159b"),{name:"App",data:function(){return{dados:[],iniciado:!1,numOperacoes:2}},methods:{getImgUrl:function(t){var e=a("416a");return e("./"+t+".jpg")},iniciarJogo:function(){this.iniciado=!0;for(var t=["1","2","5","10","20","50","100","200"],e=["+","-"],a=0;a<this.numOperacoes;a++){var r=e[Math.floor(Math.random()*e.length)],o=t[Math.floor(Math.random()*t.length)];while("-"===r&&"1"===o)o=t[Math.floor(Math.random()*t.length)];var n=t[Math.floor(Math.random()*t.length)];while("-"===r&&n>o)n=t[Math.floor(Math.random()*t.length)];this.dados.push({id:a,cedula1:o,cedula2:n,operacao:r,resultado:"",validado:"",erro:!1})}},cancelar:function(){this.iniciado=!1,this.dados=[]},validar:function(){this.dados.forEach((function(t){if(""===t.resultado)t.erro=!0;else if(t.erro=!1,"+"===t.operacao){var e=parseInt(t.cedula1)+parseInt(t.cedula2);e===parseInt(t.resultado)?t.validado="SIM":t.validado="NAO"}else{var a=parseInt(t.cedula1)-parseInt(t.cedula2);a===parseInt(t.resultado)?t.validado="SIM":t.validado="NAO"}}))}},beforeMount:function(){this.iniciado=!1}}),l=i,c=(a("034f"),a("2877")),s=Object(c["a"])(l,o,n,!1,null,null,null),u=s.exports,d=a("5f5b"),p=a("b1e0");a("f9e3"),a("2dd8");r["default"].use(d["a"]),r["default"].use(p["a"]),r["default"].config.productionTip=!1,new r["default"]({render:function(t){return t(u)}}).$mount("#app")},8554:function(t,e,a){t.exports=a.p+"img/1.10dc1f6e.jpg"},"85ec":function(t,e,a){},"88db":function(t,e,a){t.exports=a.p+"img/100.bdcd120a.jpg"},a823:function(t,e,a){t.exports=a.p+"img/20.6a137dfb.jpg"},aabb:function(t,e,a){t.exports=a.p+"img/200.a9c2beb1.jpg"},c023:function(t,e,a){t.exports=a.p+"img/50.9997b2e6.jpg"},efcc:function(t,e,a){t.exports=a.p+"img/10.6163d48b.jpg"}});
//# sourceMappingURL=app.6644afdc.js.map