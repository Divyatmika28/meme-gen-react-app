(this["webpackJsonpreact-apps"]=this["webpackJsonpreact-apps"]||[]).push([[0],{10:function(e,t,a){e.exports=a(16)},15:function(e,t,a){},16:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),o=a(4),r=a.n(o);a(15),a(2);var m=function(){return l.a.createElement("header",null,l.a.createElement("img",{src:"http://www.pngall.com/wp-content/uploads/2016/03/Me-Gusta-Meme-PNG.png",alt:"Me gusta meme!"}),l.a.createElement("p",null,"Meme Generator"))},c=a(5),i=a(6),s=a(7),h=a(1),u=a(9),p=a(8),d=function(e){Object(u.a)(a,e);var t=Object(p.a)(a);function a(){var e;return Object(i.a)(this,a),(e=t.call(this)).state={topText:"",bottomText:"",randomImage:"http://i.imgflip.com/1bij.jpg",allMemeImgs:[]},e.handleChange=e.handleChange.bind(Object(h.a)(e)),e.handleSubmit=e.handleSubmit.bind(Object(h.a)(e)),e}return Object(s.a)(a,[{key:"componentDidMount",value:function(){var e=this;fetch("https://api.imgflip.com/get_memes").then((function(e){return e.json()})).then((function(t){var a=t.data.memes;e.setState({allMemeImgs:a})}))}},{key:"handleChange",value:function(e){var t=e.target,a=t.name,n=t.value;this.setState(Object(c.a)({},a,n))}},{key:"handleSubmit",value:function(e){e.preventDefault();var t=Math.floor(Math.random()*this.state.allMemeImgs.length),a=this.state.allMemeImgs[t].url;this.setState({randomImage:a})}},{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("form",{className:"memeForm",onSubmit:this.handleSubmit},l.a.createElement("input",{type:"text",name:"topText",value:this.state.topText,onChange:this.handleChange,placeholder:"Top Text"}),l.a.createElement("input",{type:"text",name:"bottomText",value:this.state.bottomText,onChange:this.handleChange,placeholder:"Bottom Text"}),l.a.createElement("button",null,"Generate Meme")),l.a.createElement("div",{className:"meme"},l.a.createElement("img",{src:this.state.randomImage,alt:""}),l.a.createElement("h2",{className:"topText"},this.state.topText),l.a.createElement("h2",{className:"bottomText"},this.state.bottomText)),l.a.createElement("br",null),l.a.createElement("footer",{className:"footer"},l.a.createElement("p",null,"What is this behavior, 2020?")))}}]),a}(n.Component);var g=function(){return l.a.createElement("div",null,l.a.createElement(m,null),l.a.createElement(d,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(g,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},2:function(e,t,a){}},[[10,1,2]]]);
//# sourceMappingURL=main.5afc5de1.chunk.js.map