(this["webpackJsonpmy-movie-search"]=this["webpackJsonpmy-movie-search"]||[]).push([[0],{23:function(e,t,a){e.exports=a.p+"static/media/tmdb.27b65cb4.svg"},31:function(e,t,a){e.exports=a(68)},41:function(e,t,a){},43:function(e,t,a){},48:function(e,t,a){},49:function(e,t,a){},68:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),c=a(5),s=a.n(c),l=(a(36),a(40),a(41),a(10)),r=a.n(l),i=a(22),u=a(2),m=a(23),d=a.n(m),g=(a(7),a(43),a(24)),p=a(25),f=a(29),v=a(28),h=a(26),b=a.n(h),E=(a(48),function(e){Object(f.a)(a,e);var t=Object(v.a)(a);function a(){return Object(g.a)(this,a),t.apply(this,arguments)}return Object(p.a)(a,[{key:"componentDidMount",value:function(){this.setState({onXReachEnd:function(){return console.log()}})}},{key:"render",value:function(){var e=this.props,t=e.show,a=e.text;return o.a.createElement(b.a,{className:t&&a?"scroolBar":"offScroolBar scroolBar"},this.props.children)}}]),a}(n.Component));function N(e){var t=e.show,a=e.text,c=e.suggestions,s=e.cursor,l=e.queryData,r=e.showMore,i=e.sliceNumber,u=e.oldText,m=e.node,g=e.handleChange,p=e.enterPressed,f=e.handleClickOnInput,v=e.suggestionsSelected,h=e.setCursor;var b=function(e){h(parseInt(e.target.getAttribute("index")))};Object(n.useEffect)((function(){console.log("queryData.length: "+l.length),console.log("suggestions.length: "+c.length),console.log("sliceNumber: "+i)}),[l,i]);return o.a.createElement("div",{className:"col-xs-12 search-container nopadding"},o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"col-xs-12 col-sm-6 col-lg-5"},o.a.createElement("img",{src:d.a,className:"logo",alt:"The Movie Database"})),o.a.createElement("div",{className:"col-xs-12 col-sm-6 col-lg-7 searchInside",ref:m},o.a.createElement("form",{className:"searchbox",onSubmit:function(e){e.preventDefault()}},o.a.createElement("input",{onChange:g,className:"searchbox__input typeahead myform",type:"text",placeholder:"Search Movie Title...",autocomplete:"off",value:""!==a?a:u,onKeyPress:p,onClick:f})),l.length>0?o.a.createElement(E,{show:t,text:a},o.a.createElement("ul",{className:t&&a?"animate list":"list"},c.map((function(t,n){return o.a.createElement("li",{className:s===n?"active tt-suggestion":"tt-suggestion",onClick:function(){return v(t)},onMouseEnter:b,index:n,key:n},o.a.createElement("div",{className:"row"},o.a.createElement("img",{src:t[2],alt:"",className:"col-lg-2 col-md-3 col-sm-4 col-2"}),o.a.createElement("p",{className:"col-lg-10 col-md-9 col-sm-8 col-10 textSugestion sugest"},function(t,a,n){var c=t.split(new RegExp("(".concat(a,")"),"gi"));return o.a.createElement("span",null," ",c.map((function(t,c){return o.a.createElement("span",{key:c,style:t.toLowerCase()===a.toLowerCase()&&e.cursor!==n?{color:"#00FC87",fontWeight:"bold"}:t.toLowerCase()===a.toLowerCase()?{fontWeight:"bold"}:{}},t)}))," ")}(t[0],a,n))))})),o.a.createElement("li",{style:{visibility:l.length>c.length?"visible":"collapse"}},o.a.createElement("p",{onClick:r,index:i,className:s===i?"active textSugestion showMore tt-suggestion":"textSugestion showMore tt-suggestion"},c.length>0?"show more":"no result")))):a?o.a.createElement("ul",{className:"animate list showMore noResult"},o.a.createElement("li",null,"no result")):void 0)))}a(49);var y=a(27),O=a.n(y),w=a(71),j=a(70);function x(e){var t=[];return void 0!==e&&e.forEach((function(e){t.push(e.name)})),t.join(", ")}function k(e){var t=e.data,a="https://image.tmdb.org/t/p/w500"+t.poster_path,c=t.production_companies,s=t.production_countries,l=t.genres,r=t.revenue,i=x(c),u=(x(s),x(l)),m="https://image.tmdb.org/t/p/original"+t.backdrop_path;return"undefined"!==t.vote_average&&0!==t.vote_average||(t.vote_average="-"),r="undefined"===r||0===r?"-":O()(t.revenue).format("($0,0)"),null==t.poster_path&&(a="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSols5HZxlQWyS9JY5d3_L9imbk0LiziHiyDtMZLHt_UNzoYUXs2g"),null==t.backdrop_path&&(m="https://lh3.googleusercontent.com/ZdEaJCCAfkI-PrkHmY0XYFfbdFlgDBFC6jJCLj9hN5THcsKd9GpE0j8pS8HM3z-QCrlkPvUxqxks6yXHO2X4H16YHoMLYcKg7genJH34cWzNiobbZhxQow1tqav6TfXVbrHQ1keP80bVGOgdJt4_UkQMLTq3HqlmJquH5Mvubn7ixo7rno31drUkYIeFgB5mxW4psxvbFvgRTM5CbP8J-GTQ5Ur20j-pBBhU6K2Du4C30G-gPyII7ZAvxzFVTdx_P_VAJLbjrUQ4XIv5PFnbUepa4sQFeJw1Brv4lNtmogTTRZFB2ZuZkP0U_WbFAKgHcgcr8T6WHp1kGG2zyMn3O7x7Qx0vLSNn35Fe2EtyxGg2N8mRuIIoPRC8GYxLxuXZQ1Ol-xls2A9YCVfbF3T7Wb8FG7D7SytqmXl9GEIihcnZNlfOlIKjRs9eOcuOHSIBK5zi0P4ztyJTRE0ztuPDrJ6Cpsfyt4Buofv3VKkysOu_vd936QaWGy1MLLigpOOqv1UWXWq8jbCgkbNEWBbEXAkEyhgda8jDQxy35kTwPFDnPz7Y1-jX1tOweIN498XKBLUZ95QcCG2oiRM2pymRdPVDzij3oydewERzjdnJA4ZhcTsozP6tlWSvOBzZt6uGw-Y-Ve12SE7Q2N07-7YhQ58KbGZTlEjkw9M3YEC6D35dm880Fuz7QY1ZROisPw=w1499-h843-no?authuser=0"),Object(n.useEffect)((function(){document.body.style.backgroundImage="url("+m+")"})),o.a.createElement(w.a,{className:"helo nomargin"},o.a.createElement(j.a,{key:e.movieID,timeout:2e3,classNames:"fade"},o.a.createElement("div",{className:"col-12 cardcont nopadding row"},o.a.createElement("div",{className:"meta-data-container col-12 col-md-7 col-lg-8"},o.a.createElement("h1",null,t.original_title),o.a.createElement("span",{className:"tagline"},t.tagline),o.a.createElement("p",null,t.overview),o.a.createElement("div",{className:"additional-details"},o.a.createElement("span",{className:"genre-list"},u),o.a.createElement("span",{className:"production-list"},i),o.a.createElement("div",{className:"row nopadding release-details"},o.a.createElement("div",{className:"col-6"}," Original Release: ",o.a.createElement("span",{className:"meta-data"},t.release_date)),o.a.createElement("div",{className:"col-6"}," Running Time: ",o.a.createElement("span",{className:"meta-data"},t.runtime," min")," "),o.a.createElement("div",{className:"col-6"}," Box Office: ",o.a.createElement("span",{className:"meta-data"},r)),o.a.createElement("div",{className:"col-6"}," Vote Average: ",o.a.createElement("span",{className:"meta-data"},t.vote_average))))),o.a.createElement("div",{className:"poster-container nopadding order-md-first col-12 col-md-5 col-lg-4"},o.a.createElement("img",{id:"postertest",className:"poster",src:a})))))}var C=a(11),P=a.n(C),T=a(12),S=a.n(T);function I(){var e=Object(n.useState)(157336),t=Object(u.a)(e,2),a=t[0],c=t[1],s="https://api.themoviedb.org/3/movie/".concat(a,"?&api_key=cfe422613b250f702980a3bbf9e90716"),l=Object(n.useState)({}),m=Object(u.a)(l,2),d=m[0],g=m[1];Object(n.useEffect)((function(){function e(){return(e=Object(i.a)(r.a.mark((function e(){var t;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,P.a.get(s);case 2:t=e.sent,g(t.data),console.log(t.data);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}document.body.style.backgroundImage="url(https://lh3.googleusercontent.com/ZdEaJCCAfkI-PrkHmY0XYFfbdFlgDBFC6jJCLj9hN5THcsKd9GpE0j8pS8HM3z-QCrlkPvUxqxks6yXHO2X4H16YHoMLYcKg7genJH34cWzNiobbZhxQow1tqav6TfXVbrHQ1keP80bVGOgdJt4_UkQMLTq3HqlmJquH5Mvubn7ixo7rno31drUkYIeFgB5mxW4psxvbFvgRTM5CbP8J-GTQ5Ur20j-pBBhU6K2Du4C30G-gPyII7ZAvxzFVTdx_P_VAJLbjrUQ4XIv5PFnbUepa4sQFeJw1Brv4lNtmogTTRZFB2ZuZkP0U_WbFAKgHcgcr8T6WHp1kGG2zyMn3O7x7Qx0vLSNn35Fe2EtyxGg2N8mRuIIoPRC8GYxLxuXZQ1Ol-xls2A9YCVfbF3T7Wb8FG7D7SytqmXl9GEIihcnZNlfOlIKjRs9eOcuOHSIBK5zi0P4ztyJTRE0ztuPDrJ6Cpsfyt4Buofv3VKkysOu_vd936QaWGy1MLLigpOOqv1UWXWq8jbCgkbNEWBbEXAkEyhgda8jDQxy35kTwPFDnPz7Y1-jX1tOweIN498XKBLUZ95QcCG2oiRM2pymRdPVDzij3oydewERzjdnJA4ZhcTsozP6tlWSvOBzZt6uGw-Y-Ve12SE7Q2N07-7YhQ58KbGZTlEjkw9M3YEC6D35dm880Fuz7QY1ZROisPw=w1499-h843-no?authuser=0)",function(){e.apply(this,arguments)}()}),[a]);var p=Object(n.useState)(0),f=Object(u.a)(p,2),v=f[0],h=f[1];S.a.config({up:function(){isNaN(v)?h(H):h(v<0?H:function(e){return e-1})},down:function(){isNaN(v)?h(0):h(v>H?0:function(e){return e+1})}}),Object(n.useEffect)((function(){console.log(v)}),[v]);var b=Object(n.useState)([]),E=Object(u.a)(b,2),y=E[0],O=E[1],w=Object(n.useState)(null),j=Object(u.a)(w,2),x=j[0],C=j[1],T=Object(n.useState)([]),I=Object(u.a)(T,2),_=I[0],F=I[1],Q=Object(n.useState)(5),G=Object(u.a)(Q,2),H=G[0],M=G[1],z=Object(n.useState)(""),B=Object(u.a)(z,2),Z=B[0],L=B[1],R=function(e){x&&void 0!==e&&(L(x),C(""),c(e[1]))},Y=Object(n.useState)(!1),D=Object(u.a)(Y,2),J=D[0],W=D[1],X=Object(n.useRef)();Object(n.useEffect)((function(){return document.addEventListener("mousedown",U),function(){document.removeEventListener("mousedown",U)}}),[]);var U=function(e){X.current.contains(e.target)?W(!0):W(!1)},q=function(e){y.length>0?M(H+5):console.log()};return Object(n.useEffect)((function(){console.log(H);var e=_.map((function(e){return[e.original_title,e.id,"https://image.tmdb.org/t/p/w500".concat(e.poster_path)]})).slice(0,H);console.log(e),O(e)}),[H]),o.a.createElement("div",Object.assign({className:"container",id:"app"},S.a.events,{tabIndex:"1",style:{outline:0}}),o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"col-12 col-lg-10 offset-lg-1 myContainer"},o.a.createElement(N,{handleChange:function(e){var t=e.target.value.replace(/[^\w\s]/gi,"");if(C(t),0===t.length&&L(""),t.length>=1){var a="https://api.themoviedb.org/3/search/movie?query=%".concat(t,"&api_key=cfe422613b250f702980a3bbf9e90716");P.a.get(a).then((function(e){var a=e.data.results.map((function(e){return[e.original_title,e.id,"https://image.tmdb.org/t/p/w500".concat(e.poster_path)]})).slice(0,H);console.log(a),O(a),F(e.data.results),L(t)}))}else h(-1),setTimeout((function(){O([])}),500)},suggestionsSelected:R,text:x,suggestions:y,cursor:v,setCursor:h,enterPressed:function(e){13===(e.keyCode||e.which)&&(J?v===H?q():(R(y[v]),W(!1),C(Z)):(v===H?q():(C(Z),L("")),W(!0),console.log(J)))},showMore:q,sliceNumber:H,oldText:Z,handleClickOnInput:function(e){""===x&&(C(Z),L(""))},show:J,node:X,queryData:_}),o.a.createElement(k,{data:d,movieID:a}))))}Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(I,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},7:function(e,t,a){}},[[31,1,2]]]);
//# sourceMappingURL=main.ce1e8136.chunk.js.map