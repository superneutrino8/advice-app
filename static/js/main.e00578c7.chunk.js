(this["webpackJsonpreact-advice-app"]=this["webpackJsonpreact-advice-app"]||[]).push([[0],{17:function(e,t,a){e.exports=a(40)},39:function(e,t,a){},40:function(e,t,a){"use strict";a.r(t);var n=a(1),c=a.n(n),i=a(11),r=a.n(i),o=a(12),l=a(13),s=a(16),u=a(15),d=a(14),p=a.n(d),v=(a(39),function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,c=new Array(n),i=0;i<n;i++)c[i]=arguments[i];return(e=t.call.apply(t,[this].concat(c))).state={advice:""},e.fetchAdviceData=function(){p.a.get("https://api.adviceslip.com/advice").then((function(t){var a=t.data.slip.advice;e.setState({advice:a})})).catch((function(e){console.log(e)}))},e}return Object(l.a)(a,[{key:"componentDidMount",value:function(){this.fetchAdviceData()}},{key:"render",value:function(){return c.a.createElement("div",{className:"app"},c.a.createElement("div",{className:"card"},c.a.createElement("h1",{className:"heading"},this.state.advice),c.a.createElement("button",{className:"button",onClick:this.fetchAdviceData},c.a.createElement("span",null,"GIVE ME ADVICE!"))))}}]),a}(c.a.Component));r.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(v,null)),document.getElementById("root"))}},[[17,1,2]]]);
//# sourceMappingURL=main.e00578c7.chunk.js.map