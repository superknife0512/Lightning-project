(function(t){function e(e){for(var r,a,o=e[0],c=e[1],u=e[2],l=0,h=[];l<o.length;l++)a=o[l],s[a]&&h.push(s[a][0]),s[a]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(t[r]=c[r]);d&&d(e);while(h.length)h.shift()();return i.push.apply(i,u||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],r=!0,a=1;a<n.length;a++){var o=n[a];0!==s[o]&&(r=!1)}r&&(i.splice(e--,1),t=c(c.s=n[0]))}return t}var r={},a={app:0},s={app:0},i=[];function o(t){return c.p+"js/"+({about:"about"}[t]||t)+"."+{about:"f4f6981f"}[t]+".js"}function c(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.e=function(t){var e=[],n={about:1};a[t]?e.push(a[t]):0!==a[t]&&n[t]&&e.push(a[t]=new Promise(function(e,n){for(var r="css/"+({about:"about"}[t]||t)+"."+{about:"1470e8f2"}[t]+".css",s=c.p+r,i=document.getElementsByTagName("link"),o=0;o<i.length;o++){var u=i[o],l=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(l===r||l===s))return e()}var h=document.getElementsByTagName("style");for(o=0;o<h.length;o++){u=h[o],l=u.getAttribute("data-href");if(l===r||l===s)return e()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=e,d.onerror=function(e){var r=e&&e.target&&e.target.src||s,i=new Error("Loading CSS chunk "+t+" failed.\n("+r+")");i.request=r,delete a[t],d.parentNode.removeChild(d),n(i)},d.href=s;var m=document.getElementsByTagName("head")[0];m.appendChild(d)}).then(function(){a[t]=0}));var r=s[t];if(0!==r)if(r)e.push(r[2]);else{var i=new Promise(function(e,n){r=s[t]=[e,n]});e.push(r[2]=i);var u,l=document.createElement("script");l.charset="utf-8",l.timeout=120,c.nc&&l.setAttribute("nonce",c.nc),l.src=o(t),u=function(e){l.onerror=l.onload=null,clearTimeout(h);var n=s[t];if(0!==n){if(n){var r=e&&("load"===e.type?"missing":e.type),a=e&&e.target&&e.target.src,i=new Error("Loading chunk "+t+" failed.\n("+r+": "+a+")");i.type=r,i.request=a,n[1](i)}s[t]=void 0}};var h=setTimeout(function(){u({type:"timeout",target:l})},12e4);l.onerror=l.onload=u,document.head.appendChild(l)}return Promise.all(e)},c.m=t,c.c=r,c.d=function(t,e,n){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)c.d(n,r,function(e){return t[e]}.bind(null,r));return n},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="/Lightning-project/",c.oe=function(t){throw console.error(t),t};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=e,u=u.slice();for(var h=0;h<u.length;h++)e(u[h]);var d=l;i.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"0cdd":function(t,e,n){"use strict";var r=n("7e66"),a=n.n(r);a.a},2221:function(t,e,n){"use strict";var r=n("a710"),a=n.n(r);a.a},"56d7":function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("097d");var r=n("2b0e"),a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container"},[n("div",{staticClass:"btn-group d-flex justify-content-center"},[n("div",[n("router-link",{staticClass:"btn btn-primary nav__link",attrs:{tag:"a",to:"/"}},[t._v("\n        Play Game\n      ")]),n("router-link",{staticClass:"btn btn-warning nav__link",attrs:{tag:"a",to:"/rank"}},[t._v("\n        Your rank\n      ")])],1)]),n("transition",{attrs:{"enter-active-class":"animated fadeIn","leave-active-class":"animated fadeOut",mode:"out-in"}},[n("router-view")],1),n("hr"),n("small",[t._v("Made by: Phan Huu Toan - power by Vuejs")])],1)},s=[],i=(n("5c0b"),n("2877")),o={},c=Object(i["a"])(o,a,s,!1,null,null,null);c.options.__file="App.vue";var u=c.exports,l=n("8c4f"),h=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"game-play"},[n("h2",{staticClass:"game-play__title "},[t._v("Let's test your speed")]),n("hr"),n("div",{staticClass:"game-play__zone"},[n("game-play",{staticClass:"game-play__zone--1"}),n("timer",{staticClass:"game-play__zone--2"})],1)])},d=[],m=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("transition",{attrs:{"enter-active-class":"animated flipInY","leave-active-class":"animated flipOutY",mode:"out-in"}},[t.isPlay?n("div",{key:"play",staticClass:"game-play__pannel alert alert-info"},[n("h4",{staticClass:"game-play__question"},[t._v("\n                Your Question:\n                "+t._s(t.rule>=5.25?t.a+" - "+t.b+" = ?":t.a+" + "+t.b+" = ?")+"\n            ")]),n("p",[t._v("Choose one correct answer bellow")]),n("hr"),n("ul",{staticClass:"game-play__answers"},t._l(t.answers,function(e,r){return n("li",{key:e,staticClass:"game-play__ans"},[n("button",{staticClass:"btn btn-primary game-play__btn",on:{click:function(n){t.chooseAns(e)}}},[t._v("\n                        #"+t._s(r)+": "+t._s(e)+"\n                    ")])])}),0)]):n("div",{key:"stop",staticClass:"game-play__over alert alert-danger"},[n("h4",[t._v("Your game is over!!!")]),n("p",[t._v("Thank you for your play")]),n("div",{staticClass:"form-group"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.name,expression:"name"}],staticClass:"form-control",attrs:{type:"text",placeholder:"Enter your name"},domProps:{value:t.name},on:{input:function(e){e.target.composing||(t.name=e.target.value)}}})]),n("div",{staticClass:"btn-group"},[n("button",{staticClass:"btn btn-success",on:{click:function(e){t.replay()}}},[t._v("Play again")]),n("button",{staticClass:"btn btn-danger",on:{click:function(e){t.saveUser()}}},[t._v("Save name")])])])])],1)},f=[],p=(n("7f7f"),new r["a"]),v={created:function(){var t=this;this.createAns(),p.$on("nextQuestion",this.createAns),p.$on("gameOver",function(){t.isPlay=!1}),p.$on("changeHard",function(){t.hard=t.hard+1})},data:function(){return{correctAns:"",answers:[],isPlay:!0,a:"",b:"",hard:1,name:"",rule:""}},computed:{},methods:{createAns:function(){var t=this;this.a=Math.ceil(50*Math.random()*this.hard+20*this.hard),this.b=Math.round(60*Math.random()*this.hard+10*this.hard),this.rule=10*Math.random();var e=function(){var e=t.correctAns-1,n=t.correctAns-10,r=t.correctAns+11;t.rule<=2.5?t.rule<=1.25?t.answers=[t.correctAns,e,r,n]:t.answers=[n,e,r,t.correctAns]:t.rule>=2.5&&t.rule<5.25?t.rule<=3.25?t.answers=[r,t.correctAns,e,n]:t.answers=[r,e,t.correctAns,n]:t.rule>=5.25&&t.rule<=7.5?t.rule<=6.5?t.answers=[r,e,t.correctAns,n]:t.answers=[t.correctAns,r,e,n]:t.rule<=8.5?t.answers=[r,t.correctAns,e,n]:t.answers=[r,e,n,t.correctAns]};this.rule<2.5?(this.correctAns=this.a+this.b,e()):this.rule>=2.5&&this.rule<5.25?(this.correctAns=this.a+this.b,e()):(this.rule>=5.25&&this.rule,this.correctAns=this.a-this.b,e())},chooseAns:function(t){t===this.correctAns?p.$emit("updateScore",10):(this.isPlay=!1,p.$emit("gameOver"))},replay:function(){this.isPlay=!0,this.hard=1,this.createAns(),this.name="",p.$emit("restoreTime")},saveUser:function(){if(""===this.name)return alert("You should enter your name!!"),!1;p.$emit("saveUser",this.name),this.name=""}}},g=v,b=(n("ddc2"),Object(i["a"])(g,m,f,!1,null,null,null));b.options.__file="gamePlay.vue";var _=b.exports,y=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"score"},[n("div",{staticClass:"score__timer"},[n("h3",{class:{"yellow-text":t.timeWidth<=60&&t.timeWidth>30,"red-text":t.timeWidth<=30,danger:t.timeWidth<=30}},[t._v("\n            Your time: "+t._s(Math.round(t.timeWidth/10))+"\n        ")]),n("div",{staticClass:"progress"},[n("div",{staticClass:"progress-bar progress-bar-striped progress-bar-animated",class:{"bg-info":t.timeWidth>60,"bg-warning":t.timeWidth>30&&t.timeWidth<=60,"bg-danger":t.timeWidth<=30,danger:t.timeWidth<=30},style:{width:t.timeCount},attrs:{role:"progressbar","aria-valuenow":"50","aria-valuemin":"0","aria-valuemax":"100"}})])]),n("h4",[t._v("Your score: ")]),n("h2",{staticClass:"score__your-score"},[t._v(t._s(t.score))])])},w=[],C=n("bc3a"),A=n.n(C),k={created:function(){this.countDown(),p.$on("updateScore",this.updateScore),p.$on("restoreTime",this.restoreTime),p.$on("gameOver",this.gameOver),p.$on("saveUser",this.saveUser)},data:function(){return{timeWidth:100,score:0,highScore:0,count:5}},watch:{highScore:function(t){40===t&&(p.$emit("changeHard"),this.highScore=0,this.count=this.count+.25)}},computed:{timeCount:function(){return"".concat(this.timeWidth,"%")}},methods:{countDown:function(){var t=this,e=setInterval(function(){if(t.timeWidth<1)return p.$emit("gameOver"),clearInterval(e);t.timeWidth=t.timeWidth-t.count},1e3)},updateScore:function(){var t=20;this.score=this.score+10,this.timeWidth+t>100?this.timeWidth=100:this.timeWidth=this.timeWidth+t,p.$emit("nextQuestion"),this.highScore=this.highScore+10},restoreTime:function(){this.timeWidth=100,this.score=0,this.count=5,this.countDown()},gameOver:function(){clearInterval(),this.timeWidth=0},saveUser:function(t){A.a.post("https://calculating-game.firebaseio.com/user.json",{name:t,score:this.score}).then(function(t){alert("Has save your result!"),console.log(t)}).catch(function(t){console.log(t)})}}},O=k,W=(n("0cdd"),Object(i["a"])(O,y,w,!1,null,null,null));W.options.__file="timer.vue";var P=W.exports,x={data:function(){return{}},components:{gamePlay:_,timer:P}},$=x,j=(n("2221"),Object(i["a"])($,h,d,!1,null,null,null));j.options.__file="Game.vue";var S=j.exports;r["a"].use(l["a"]);var T=new l["a"]({routes:[{path:"/",name:"Game",component:S},{path:"/rank",name:"Ranking",component:function(){return n.e("about").then(n.bind(null,"4320"))}}]});r["a"].config.productionTip=!1,new r["a"]({router:T,render:function(t){return t(u)}}).$mount("#app")},"5c0b":function(t,e,n){"use strict";var r=n("5e27"),a=n.n(r);a.a},"5e27":function(t,e,n){},"7b73":function(t,e,n){},"7e66":function(t,e,n){},a710:function(t,e,n){},ddc2:function(t,e,n){"use strict";var r=n("7b73"),a=n.n(r);a.a}});
//# sourceMappingURL=app.f9593d4e.js.map