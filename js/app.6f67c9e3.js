(function(t){function n(n){for(var r,u,o=n[0],s=n[1],c=n[2],p=0,f=[];p<o.length;p++)u=o[p],a[u]&&f.push(a[u][0]),a[u]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(t[r]=s[r]);l&&l(n);while(f.length)f.shift()();return i.push.apply(i,c||[]),e()}function e(){for(var t,n=0;n<i.length;n++){for(var e=i[n],r=!0,o=1;o<e.length;o++){var s=e[o];0!==a[s]&&(r=!1)}r&&(i.splice(n--,1),t=u(u.s=e[0]))}return t}var r={},a={app:0},i=[];function u(n){if(r[n])return r[n].exports;var e=r[n]={i:n,l:!1,exports:{}};return t[n].call(e.exports,e,e.exports,u),e.l=!0,e.exports}u.m=t,u.c=r,u.d=function(t,n,e){u.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:e})},u.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},u.t=function(t,n){if(1&n&&(t=u(t)),8&n)return t;if(4&n&&"object"===typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(u.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var r in t)u.d(e,r,function(n){return t[n]}.bind(null,r));return e},u.n=function(t){var n=t&&t.__esModule?function(){return t["default"]}:function(){return t};return u.d(n,"a",n),n},u.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},u.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],s=o.push.bind(o);o.push=n,o=o.slice();for(var c=0;c<o.length;c++)n(o[c]);var l=s;i.push([0,"chunk-vendors"]),e()})({0:function(t,n,e){t.exports=e("56d7")},"034f":function(t,n,e){"use strict";var r=e("64a9"),a=e.n(r);a.a},"318a":function(t,n,e){"use strict";var r=e("8eb0"),a=e.n(r);a.a},3501:function(t,n,e){"use strict";var r=e("930b"),a=e.n(r);a.a},"4cf5":function(t,n,e){"use strict";var r=e("5af8"),a=e.n(r);a.a},"569c":function(t,n,e){},"56d7":function(t,n,e){"use strict";e.r(n);e("cadf"),e("551c"),e("f751"),e("097d");var r=e("2b0e"),a=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{attrs:{id:"app"}},[e("Calculator",{attrs:{msg:"Welcome to Your Vue.js App"}})],1)},i=[],u=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"calculator"},[e("div",{staticClass:"displays"},[e("Displays",{attrs:{main:t.current,auxilliary:t.auxilliary}})],1),e("div",{staticClass:"buttons"},[e("ClearScreen",{attrs:{content:"AC"},on:{clearScreen:function(n){return t.clear(n)}}}),e("PlusMinus",{attrs:{content:"+/-"},on:{applyNegative:function(n){return t.negateNumber(n)}}}),e("Percentage",{attrs:{content:"%"},on:{applyPercentage:function(n){return t.percentage(n)}}}),e("OperatorButton",{staticClass:"right-buttons",attrs:{operator:"÷"},on:{setOperator:function(n){return t.handleDivision(n)}}}),e("NumberButton",{attrs:{number:"7"},on:{appendNumber:function(n){return t.append(n)}}}),e("NumberButton",{attrs:{number:"8"},on:{appendNumber:function(n){return t.append(n)}}}),e("NumberButton",{attrs:{number:"9"},on:{appendNumber:function(n){return t.append(n)}}}),e("OperatorButton",{staticClass:"right-buttons",attrs:{operator:"x"},on:{setOperator:function(n){return t.handleMultiplication(n)}}}),e("NumberButton",{attrs:{number:"4"},on:{appendNumber:function(n){return t.append(n)}}}),e("NumberButton",{attrs:{number:"5"},on:{appendNumber:function(n){return t.append(n)}}}),e("NumberButton",{attrs:{number:"6"},on:{appendNumber:function(n){return t.append(n)}}}),e("OperatorButton",{staticClass:"right-buttons",attrs:{operator:"-"},on:{setOperator:function(n){return t.handleSubtraction(n)}}}),e("NumberButton",{attrs:{number:"1"},on:{appendNumber:function(n){return t.append(n)}}}),e("NumberButton",{attrs:{number:"2"},on:{appendNumber:function(n){return t.append(n)}}}),e("NumberButton",{attrs:{number:"3"},on:{appendNumber:function(n){return t.append(n)}}}),e("OperatorButton",{staticClass:"right-buttons",attrs:{operator:"+"},on:{setOperator:function(n){return t.handleAddition(n)}}}),e("NumberButton",{staticClass:"zero",attrs:{number:"0"},on:{appendNumber:function(n){return t.append(n)}}}),e("NumberButton",{attrs:{number:"."},on:{appendNumber:function(n){return t.append(n)}}}),e("OperatorButton",{staticClass:"right-buttons",attrs:{operator:"="},on:{setOperator:t.performOperation}})],1)])},o=[],s=(e("c5f6"),function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"container"},[e("div",{staticClass:"display display-aux",attrs:{id:"aux"}},[t._v(t._s(t.auxilliary))]),e("div",{staticClass:"display display-main",attrs:{id:"main"}},[t._v(t._s(t.main))])])}),c=[],l={name:"Displays",props:{main:{type:String,required:!0,default:"0"},auxilliary:{type:String,required:!0,default:"0"}}},p=l,f=(e("a1e3"),e("2877")),d=Object(f["a"])(p,s,c,!1,null,"95dbc6ee",null),m=d.exports,b=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"btn",on:{click:t.findPercentage}},[t._v(t._s(t.content))])},h=[],v={name:"PercentageButton",props:{content:String},methods:{findPercentage:function(){this.$emit("applyPercentage",100)}}},g=v,y=(e("4cf5"),Object(f["a"])(g,b,h,!1,null,"0c1764d6",null)),O=y.exports,_=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"btn",on:{click:t.operate}},[t._v(t._s(t.operator))])},x=[],N={name:"OperatorButton",props:{operator:String,actionClick:null},methods:{operate:function(){this.$emit("setOperator",this.operator)}}},C=N,S=(e("6a4c"),Object(f["a"])(C,_,x,!1,null,"884366de",null)),B=S.exports,j=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"btn",on:{click:t.append}},[t._v(t._s(t.number))])},P=[],D={name:"NumberButton",props:{number:String,actionClick:null},methods:{append:function(){this.$emit("appendNumber",this.number)}}},$=D,M=(e("3501"),Object(f["a"])($,j,P,!1,null,"ad66376e",null)),k=M.exports,w=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"btn",on:{click:t.clear}},[t._v(t._s(t.content))])},E=[],A={name:"ClearScreen",props:{content:String},methods:{clear:function(){this.$emit("clearScreen","0")}}},V=A,T=(e("bb37"),Object(f["a"])(V,w,E,!1,null,"558e7511",null)),q=T.exports,z=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"btn",on:{click:t.negate}},[t._v(t._s(t.content))])},J=[],I={name:"PlusMinus",props:{content:String},methods:{negate:function(){this.$emit("applyNegative",-1)}}},W=I,Y=(e("318a"),Object(f["a"])(W,z,J,!1,null,"79e430ea",null)),F=Y.exports,G={name:"Calculator",data:function(){return{current:"0",auxilliary:"0",prevValue:0,operation:null}},methods:{append:function(t){var n=this.current,e=".",r="0",a=0;t==e&&n.indexOf(e)>-1||(n.indexOf(r)==a&&1==n.length&&t!=e&&(n=""),n+=t,this.current=n)},clear:function(t){this.current=t,this.auxilliary=t},negateNumber:function(t){this.current=String(this.current*t)},percentage:function(t){this.current=String(this.current/t)},handleAddition:function(t){this.manageDisplays(t),this.setOperation(function(t,n){return t+n})},handleSubtraction:function(t){this.manageDisplays(t),this.setOperation(function(t,n){return t-n})},handleMultiplication:function(t){this.manageDisplays(t),this.setOperation(function(t,n){return t*n})},handleDivision:function(t){this.manageDisplays(t),this.setOperation(function(t,n){return 0==n?"Math Error: cannot divide by zero":t/n})},manageDisplays:function(t){this.auxilliary.length>1&&0!=this.auxilliary.lastIndexOf("0")?this.manageAuxilliaryDisplay(t):(1==this.auxilliary.length&&1==this.current.length&&0!=this.current.indexOf("0")||this.current.length>1)&&(this.manageMainDisplay(),this.manageAuxilliaryDisplay(t))},manageMainDisplay:function(){this.prevValue=Number(this.current),this.current="0"},manageAuxilliaryDisplay:function(t){this.auxilliary="".concat(this.prevValue," ").concat(t," ")},setOperation:function(t){this.operation=t},performOperation:function(){var t=Number(this.current);null!=this.operation&&(t=this.operation(this.prevValue,t)),this.current=String(t),this.auxilliary="0"}},components:{NumberButton:k,OperatorButton:B,Percentage:O,Displays:m,ClearScreen:q,PlusMinus:F},props:{msg:String}},H=G,K=(e("f80f"),Object(f["a"])(H,u,o,!1,null,"ce5b53ba",null)),L=K.exports,Q={name:"app",components:{Calculator:L}},R=Q,U=(e("034f"),Object(f["a"])(R,a,i,!1,null,null,null)),X=U.exports;r["a"].config.productionTip=!1,new r["a"]({render:function(t){return t(X)}}).$mount("#app")},"5af8":function(t,n,e){},"64a9":function(t,n,e){},"6a4c":function(t,n,e){"use strict";var r=e("c12b"),a=e.n(r);a.a},"8eb0":function(t,n,e){},"930b":function(t,n,e){},a1e3:function(t,n,e){"use strict";var r=e("cf20"),a=e.n(r);a.a},bb37:function(t,n,e){"use strict";var r=e("da49"),a=e.n(r);a.a},c12b:function(t,n,e){},cf20:function(t,n,e){},da49:function(t,n,e){},f80f:function(t,n,e){"use strict";var r=e("569c"),a=e.n(r);a.a}});
//# sourceMappingURL=app.6f67c9e3.js.map