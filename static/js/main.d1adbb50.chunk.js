(this["webpackJsonpmy-movie-search"]=this["webpackJsonpmy-movie-search"]||[]).push([[0],{12:function(e,t,n){},58:function(e,t,n){},79:function(e,t,n){},85:function(e,t,n){"use strict";n.r(t);var c=n(45),a=n.n(c),i=n(34),s=n(7),r=n.n(s),o=n(18),l=n(5),u=n(0),j=(n(12),n(4)),h=n(88),d=Object(u.createContext)(null),b=n(46),m=n.n(b),f=(n(58),n(2));function x(e){var t=Object(u.useContext)(d),n=t.infiniteScroll,c=t.scrollBarRef,a=t.dispPostersNum;return Object(f.jsx)(m.a,{className:"AppScroolbar",onScrollDown:a<20?function(e){return n(e)}:void 0,ref:c,children:e.children})}var O=n(31),p=n.n(O),v="api_key=cfe422613b250f702980a3bbf9e90716",g="https://api.themoviedb.org",N="".concat("https://image.tmdb.org/t/p/","w500"),S="".concat(g,"/3/movie/popular?").concat(v),w=.7,k=.35,y=function(e){return e.pathname.substring(0,e.pathname.lastIndexOf("/")+1)},C=function(e){return e.pathname.substring(e.pathname.lastIndexOf("/")+1)};function T(e){return I.apply(this,arguments)}function I(){return(I=Object(o.a)(r.a.mark((function e(t){var n;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("string"!==typeof t){e.next=6;break}return e.next=3,M(t);case 3:n=e.sent,e.next=12;break;case 6:if("object"!==typeof t){e.next=10;break}n=t,e.next=12;break;case 10:return console.error("Passed ".concat(typeof t," input to getMoviesDataToDisplayInSearch. You must pass string or object")),e.abrupt("return");case 12:return e.abrupt("return",n.map((function(e){return{title:e.original_title,id:e.id,poster:null!==e.poster_path?N+e.poster_path:null}})));case 13:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function M(e){return D.apply(this,arguments)}function D(){return(D=Object(o.a)(r.a.mark((function e(t){var n;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.a.get(t);case 2:return n=e.sent,e.abrupt("return",n.data.results);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function E(e){return"".concat(g,"/3/search/movie?query=%").concat(e,"&").concat(v)}function R(e){return B.apply(this,arguments)}function B(){return(B=Object(o.a)(r.a.mark((function e(t){var n;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.a.get("".concat(g,"/3/movie/").concat(t,"?&").concat(v));case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var H=n(26),P=n.n(H),L=n(87);n(79);function Q(e){var t=e.fetchImg,n=e.fallbackImg;return Object(u.useEffect)((function(){function e(){document.documentElement.style.setProperty("--vh","".concat(window.innerHeight/100,"px"))}return window.addEventListener("resize",e()),window.addEventListener("orientationchange",e()),function(){document.removeEventListener("resize",e),document.removeEventListener("orientationchange",e)}}),[]),Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)("div",{className:"BgGradient"}),Object(f.jsx)(h.a,{children:Object(f.jsx)(L.a.img,{className:"BgImage",src:t||n,initial:{opacity:0},animate:{opacity:1,delay:.2},exit:{opacity:0},transition:{duration:1.5}},t)})]})}var _=n(28),W=n.p+"static/media/no_image.2f8a70e1.png";function A(e){var t=e.cardData,n=e.onClick,c=e.className,a=e.cardTransitionDuration,i=e.imgTransition,s=e.imgHeight,r=e.imgWidth;return Object(f.jsx)(h.a,{exitBeforeEnter:!0,children:Object(f.jsx)(L.a.div,{className:"PosterCard ".concat(c),onClick:function(){return n(t.id)},initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{duration:a,ease:"easeInOut"},children:Object(f.jsxs)("div",{children:[Object(f.jsx)(_.a,{width:r,height:s,opacityTransition:i,src:t.poster?t.poster:W,alt:"poster ".concat(t.id)}),Object(f.jsx)("p",{children:t.title})]})},t.id)})}function F(){var e=Object(u.useContext)(d),t=e.searchbarText,n=e.suggestions,c=e.dispPostersNum,a=e.pushToHistory,i=e.scrollBarRef,s=e.setSuggestions;function r(e){a("/movie/".concat(e)),setTimeout((function(){i.current._ps.element.scrollTop=0,s([])}),700)}return Object(f.jsx)(L.a.div,{className:"StartPageCards",initial:{opacity:0},animate:{opacity:1,delay:.2},exit:{opacity:0},transition:{duration:w},children:Object(f.jsxs)("div",{className:"Container",children:[Object(f.jsx)(h.a,{exitBeforeEnter:!0,children:Object(f.jsx)(L.a.p,{className:"title",initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{duration:.35,ease:"easeInOut"},children:!t&&"Trending Now"},t)}),Object(f.jsx)("div",{className:"row",children:n.slice(0,c).map((function(e){return Object(f.jsx)(A,{className:"col-xl-2 col-md-3 col-4",cardData:e,onClick:r,cardTransitionDuration:.35,imgTransition:.5,imgHeight:"750",imgWidth:"500"})}))})]})})}function K(e){var t=[];return void 0!==e&&e.forEach((function(e){t.push(e.name)})),t.join(", ")}function z(){var e=Object(u.useContext)(d).movieData,t=e.original_title,n=e.overview,c=e.tagline,a=e.poster_path,i=e.production_companies,s=e.genres,r=e.release_date,o=e.runtime,l=e.revenue,j=e.vote_average,b=K(i),m=K(s);return Object(f.jsx)(L.a.div,{className:"MovieCard",initial:{opacity:0},animate:{opacity:1,delay:.2},exit:{opacity:0},transition:{duration:w},children:Object(f.jsx)(h.a,{exitBeforeEnter:!0,children:Object(f.jsxs)(L.a.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{duration:w},className:"Container row",children:[Object(f.jsxs)("div",{className:"metaDataContainer col-12 col-md-7 col-lg-8",children:[Object(f.jsx)("h1",{children:t}),Object(f.jsx)("span",{className:"tagline",children:c}),Object(f.jsx)("p",{children:n}),Object(f.jsxs)("div",{className:"additionalDetails",children:[Object(f.jsx)("span",{className:"genreList",children:m}),Object(f.jsx)("span",{className:"productionList",children:b}),Object(f.jsxs)("div",{className:"row releaseDetails",children:[Object(f.jsxs)("div",{className:"col-6",children:["Original Release:",Object(f.jsx)("span",{className:"metaData",children:r})]}),Object(f.jsxs)("div",{className:"col-6",children:["Running Time:",Object(f.jsxs)("span",{className:"metaData",children:[o," min"]})]}),Object(f.jsxs)("div",{className:"col-6",children:["Box Office:",Object(f.jsx)("span",{className:"metaData",children:l?"".concat(parseInt(l).toLocaleString()," $"):"-"})]}),Object(f.jsxs)("div",{className:"col-6",children:["Vote Average:",Object(f.jsx)("span",{className:"metaData",children:j||"-"})]})]})]})]}),Object(f.jsx)("div",{className:"posterContainer order-md-first col-12 col-md-5 col-lg-4",children:Object(f.jsx)("img",{className:"poster",src:null!==a?N+a:W,alt:"poster"})})]},t)})})}var G=n(20),J=n.p+"static/media/BgGreen.a17d9a1b.jpg",$=n.p+"static/media/menu.de21b81a.svg",q=n.p+"static/media/close.17a94979.svg",U=n(47);function V(e){var t=Object(u.useContext)(d),n=t.searchbarText,c=t.setSearchbarText,a=t.setOldSearchbarText,i=t.oldSearchbarText,s=t.onSearchbarTextChanging,r=e.onClick,o=e.onKeyPress;return Object(f.jsxs)("form",{onSubmit:function(e){return e.preventDefault()},children:[Object(f.jsx)(U.DebounceInput,{debounceTimeout:250,onChange:s,type:"text",placeholder:"Search Movie",value:""!==n?n:i,onKeyPress:o,onClick:r}),Object(f.jsx)("img",{src:q,onClick:function(){c(""),a("")},alt:"close search"})]})}function Y(){var e=Object(u.useContext)(d),t=e.searchbarText,n=e.setSearchbarText,c=e.oldSearchbarText,a=e.pushToHistory,i=e.fetchPopularMoviesOnStartPage,s=e.setAllMoviesData,r=e.setShowQuickSearchRes;return{selectedMovieInQuickSearch:function(e){t&&void 0!==e&&(a("/movie/".concat(e)),n(c),r(!1))},gotoStarPage:function(){s([]),i(),a("/")}}}function X(e){var t=e.className,n=e.fadeInConditionsArr,c=e.onClose,a=e.closeBtn,i=Object(u.useState)(!1),s=Object(l.a)(i,2),r=s[0],o=s[1];return Object(u.useEffect)((function(){o(n.every((function(e){return e})))}),[n]),Object(f.jsxs)("div",{className:"NoResult ".concat(t," ")+(r&&"fadeIn"),children:[Object(f.jsx)("p",{children:"no result"}),"btn"===a&&Object(f.jsx)("p",{className:"btn",onClick:function(){return c(!1)},children:"close"}),"img"===a&&Object(f.jsx)("img",{className:"closeImg",src:q,onClick:function(){return c(!1)},alt:"close search results"})]})}function Z(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:e.length,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:800,c=Object(u.useState)([]),a=Object(l.a)(c,2),i=a[0],s=a[1];return Object(u.useEffect)((function(){var c=e.slice(0,t);if(!(e.length>0)){var a=setTimeout((function(){s(c)}),n);return function(){return clearTimeout(a)}}s(c)}),[e,t,n]),i}function ee(){var e=Object(u.useContext)(d),t=e.searchbarText,n=e.pushToHistory,c=e.suggestions,a=e.showQuickSearchRes,i=e.setShowQuickSearchRes,s=Y().selectedMovieInQuickSearch,r=Z(c,3,800);return Object(f.jsxs)("div",{className:"ResultsMobile "+(a&&t&&"fadeIn"),children:[Object(f.jsx)("div",{className:"searchbar_div",children:r.map((function(e){return Object(f.jsx)(A,{className:"col-4",cardData:e,onClick:s,cardTransitionDuration:k,imgTransition:.5,imgHeight:"750",imgWidth:"500"})}))}),Object(f.jsxs)("div",{className:"searchbar_li",children:[Object(f.jsx)("p",{className:"showMoreBtn",onClick:function(){return n("/")},index:3,children:"show more"}),Object(f.jsx)("p",{className:"showMoreClose",onClick:function(){return i(!1)},children:"close"})]})]})}function te(){var e=Object(u.useContext)(d),t=e.indexOfHighlightedMovie,n=e.setIndexOfHighlightedMovie;return{highligthText:function(e,n,c){var a=e.split(new RegExp("(".concat(n,")"),"gi"));return Object(f.jsxs)("span",{children:[" ",a.map((function(e,a){return Object(f.jsx)("span",{style:e.toLowerCase()===n.toLowerCase()&&t!==c?{color:"#00FC87",fontWeight:"bold"}:e.toLowerCase()===n.toLowerCase()?{fontWeight:"bold"}:{},children:e},a)}))," "]})},highlightMovieTextOnHover:function(e){n(parseInt(e.target.getAttribute("index")))}}}function ne(e){var t=e.item,n=e.index,c=Object(u.useContext)(d),a=c.searchbarText,i=c.indexOfHighlightedMovie,s=te(),r=s.highligthText,o=s.highlightMovieTextOnHover,l=Y().selectedMovieInQuickSearch;return Object(f.jsx)(h.a,{exitBeforeEnter:!0,children:Object(f.jsx)(L.a.li,{className:"PosterLi "+(i===n&&"active"),onClick:function(){return l(t.id)},onMouseEnter:o,index:n,initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{duration:k},children:Object(f.jsxs)("div",{className:"row",children:[Object(f.jsx)(_.a,{className:"col-lg-2 col-md-3 col-sm-4 col-3",width:"500",height:"750",opacityTransition:.5,src:t.poster?t.poster:W,alt:"poster ".concat(t.id)}),Object(f.jsx)("p",{className:"col-lg-10 col-md-9 col-sm-8 col-9",children:r(t.title,a,n)})]})},t.id)})}function ce(){var e=Object(u.useContext)(d),t=e.searchbarText,n=e.pushToHistory,c=e.suggestions,a=e.showQuickSearchRes,i=e.setShowQuickSearchRes,s=e.indexOfHighlightedMovie,r=te().highlightMovieTextOnHover,o=Z(c,5,800);return Object(f.jsxs)("ul",{className:"ResultsPC "+(a&&t&&"fadeIn"),children:[o.map((function(e,t){return Object(f.jsx)(ne,{item:e,index:t})})),Object(f.jsxs)("li",{className:"showMore",children:[Object(f.jsx)("p",{className:"showMoreParagraph "+(5===s&&"active"),onMouseEnter:r,onClick:function(){return n("/")},children:"show more"}),Object(f.jsx)("img",{className:"closeImg",src:q,onClick:function(){return i(!1)},alt:"close search results"})]})]})}function ae(e){var t=Object(u.useContext)(d),n=t.suggestions,c=t.showQuickSearchRes;return Object(f.jsx)(h.a,{exitBeforeEnter:!0,children:Object(f.jsx)(L.a.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{duration:c&&n.length>0?k:0,ease:"easeInOut"},children:e},n.length+c)})}function ie(){var e=Object(u.useContext)(d),t=e.searchbarText,n=e.suggestions,c=e.showQuickSearchRes,a=e.setShowQuickSearchRes,i=function(e,t){var n=Object(u.useState)(!1),c=Object(l.a)(n,2),a=c[0],i=c[1];return Object(u.useEffect)((function(){if(""!==t){var n=setTimeout((function(){i(!0)}),e);return function(){return clearTimeout(n)}}i(!1)}),[t,e]),a}(1e3,t);return Object(f.jsx)("div",{className:"SearchbarResults",children:ae(Object(f.jsx)(f.Fragment,{children:n.length>0&&c?G.isMobile?Object(f.jsx)(ee,{}):Object(f.jsx)(ce,{}):Object(f.jsx)(X,{className:G.isMobile?"ResultsMobile":"ResultsPC",fadeInConditionsArr:[c,t,i],onClose:a,closeBtn:G.isMobile?"btn":"img"})}))})}function se(){var e=Object(u.useContext)(d).location,t=function(){var e=Object(u.useContext)(d),t=e.suggestions,n=e.pushToHistory,c=e.showQuickSearchRes,a=e.setShowQuickSearchRes,i=e.indexOfHighlightedMovie,s=e.setIndexOfHighlightedMovie,r=Y().selectedMovieInQuickSearch;return P.a.config({up:function(){isNaN(i)?s(5):s(i<0?5:function(e){return e-1})},down:function(){isNaN(i)?s(0):s(i>5?0:function(e){return e+1})}}),function(e){13===(e.keyCode||e.which)&&(c||a(!0),c&&(5===i?n("/"):r(t[i].id)))}}(),n=function(){var e=Object(u.useContext)(d),t=e.searchbarText,n=e.setSearchbarText,c=e.oldSearchbarText,a=e.setOldSearchbarText,i=e.showResInSearchBar,s=e.setShowQuickSearchRes,l=Object(u.useRef)();function j(e){l.current.contains(e.target)||s(!1)}return Object(u.useEffect)((function(){return document.addEventListener("mousedown",j),function(){document.removeEventListener("mousedown",j)}}),[]),{node:l,OnSearchBarClicked:function(){var e=Object(o.a)(r.a.mark((function e(o){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:s(!0),""===t&&(i(c),n(c),a(""));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}}(),c=n.node,a=n.OnSearchBarClicked;return Object(f.jsxs)("div",{className:"NavSearchbar",ref:c,children:[Object(f.jsx)(V,{onClick:a,onKeyPress:t}),e.pathname.includes("movie")&&Object(f.jsx)(ie,{})]})}function re(e){var t=e.openSidebar,n=e.gotoHome;return Object(f.jsx)("nav",{className:"TopBar",children:Object(f.jsxs)("div",{className:"TopBarContainer",children:[Object(f.jsx)(se,{}),Object(f.jsx)("div",{className:"hamburgerIconContainer",children:Object(f.jsx)("img",{className:"hamburgerIcon",src:$,alt:"menuIcon",onClick:function(){return t()}})}),Object(f.jsxs)("ul",{className:"NavMenu",children:[Object(f.jsx)("li",{className:"NavItem",children:Object(f.jsx)("div",{className:"NavLink",onClick:function(){return n()},children:"Home"})}),Object(f.jsx)("li",{className:"NavItem",children:Object(f.jsx)("div",{className:"NavLink",children:"Sign Up"})})]}),Object(f.jsx)("div",{className:"NavBtn",children:Object(f.jsx)("div",{className:"NavBtnLink",to:"/signin",children:"Sign In"})})]})})}var oe=n(21);function le(e){var t=e.isOpen,n=e.close,c=e.gotoHome;return Object(f.jsxs)("nav",{className:"Sidebar "+(t&&"openSidebar"),children:[Object(f.jsx)("div",{className:"closeIconContainer",children:Object(f.jsx)("img",{src:q,className:"closeIcon",alt:"The Movie Database Logo",onClick:function(){return n()}})}),Object(f.jsxs)("div",{className:"sidebarWrapper",children:[Object(f.jsxs)("ul",{className:"sidebarMenu",children:[Object(f.jsx)("div",{className:"sidebarLink",onClick:function(){return c()},children:"Home"}),Object(f.jsx)("div",{className:"sidebarLink",children:"sign up"})]}),Object(f.jsx)("div",{className:"sidebarBtnWrap",children:Object(f.jsx)(oe.b,{className:"sidebarBtnLink",to:"/signin",children:"Sign In"})})]})]})}function ue(){var e=Object(u.useContext)(d),t=e.pushToHistory,n=e.fetchPopularMoviesOnStartPage,c=e.setAllMoviesData,a=Object(u.useState)(!1),i=Object(l.a)(a,2),s=i[0],r=i[1],o=function(){c([]),n(),t("/"),r(!1)};return Object(f.jsxs)(oe.a,{children:[Object(f.jsx)(le,{isOpen:s,close:function(){return r(!1)},gotoHome:o}),Object(f.jsx)(re,{openSidebar:function(){return r(!0)},gotoHome:o})]})}function je(){var e=Object(j.g)(),t=Object(j.f)(),n=Object(u.useState)(),c=Object(l.a)(n,2),a=c[0],s=c[1],b=Object(u.useState)([]),m=Object(l.a)(b,2),O=m[0],p=m[1],v=Object(u.useState)(""),g=Object(l.a)(v,2),N=g[0],w=g[1];function k(){return I.apply(this,arguments)}function I(){return(I=Object(o.a)(r.a.mark((function e(){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=p,e.next=3,T(S);case 3:e.t1=e.sent,(0,e.t0)(e.t1);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}Object(u.useEffect)((function(){""===N&&"/"===e.pathname?k():""===N&&setTimeout((function(){p([])}),600)}),[N]);var D=Object(u.useState)((function(){return function(e){var t=C(e);return""===t?"157336":t}(e)})),B=Object(l.a)(D,2),H=B[0],L=B[1],_=Object(u.useState)({}),W=Object(l.a)(_,2),A=W[0],K=W[1];Object(u.useEffect)(Object(o.a)(r.a.mark((function e(){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.t0=H,!e.t0){e.next=7;break}return e.t1=K,e.next=5,R(H);case 5:e.t2=e.sent,(0,e.t1)(e.t2);case 7:case"end":return e.stop()}}),e)}))),[H]),Object(u.useEffect)((function(){"/"!==e.pathname||N?L(C(e)):k()}),[e.pathname]);var $=Object(u.useState)([]),q=Object(l.a)($,2),U=q[0],V=q[1],Y=Object(u.useState)(""),X=Object(l.a)(Y,2),Z=X[0],ee=X[1],te=Object(u.useState)(G.isMobile?9:12),ne=Object(l.a)(te,2),ce=ne[0],ae=ne[1],ie=function(){var e=Object(o.a)(r.a.mark((function e(t){var n,c;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(ae(G.isMobile?6:12),0===t.length&&ee(""),!(t.length>=1)){e.next=12;break}return e.next=5,M(E(t));case 5:return n=e.sent,e.next=8,T(n);case 8:c=e.sent,V(n),p(c),ee(t);case 12:G.isMobile&&setTimeout((function(){ae(9)}),1e3);case 13:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),se=Object(u.useState)(!1),re=Object(l.a)(se,2),oe=re[0],le=re[1],je=Object(u.useState)(),he=Object(l.a)(je,2),de=he[0],be=he[1],me=Object(u.useRef)(null);return Object(u.useEffect)((function(){console.log({suggestions:O})}),[O]),Object(u.useEffect)((function(){console.log({movieData:A}),s(A.backdrop_path&&"".concat("https://image.tmdb.org/t/p/original").concat(A.backdrop_path))}),[A]),Object(u.useEffect)((function(){console.log("searchbarText: ".concat(N))}),[N]),Object(f.jsxs)("div",{children:[Object(f.jsx)(Q,{fetchImg:a,fallbackImg:J}),Object(f.jsx)("div",Object(i.a)(Object(i.a)({id:"app"},P.a.events),{},{tabIndex:"1",children:Object(f.jsx)(d.Provider,{value:{movieID:H,movieData:A,searchbarText:N,setSearchbarText:w,oldSearchbarText:Z,setOldSearchbarText:ee,suggestions:O,setSuggestions:p,onSearchbarTextChanging:function(e){var t=e.target.value.replace(/[^\w\s]/gi,"");w(t),ie(t)},allMoviesData:U,setAllMoviesData:V,setMovieID:L,fetchPopularMoviesOnStartPage:k,showResInSearchBar:ie,history:t,location:e,pushToHistory:function(e){return t.push(e)},dispPostersNum:ce,setDispPostersNum:ae,infiniteScroll:function(e){ae(20)},scrollBarRef:me,showQuickSearchRes:oe,setShowQuickSearchRes:le,indexOfHighlightedMovie:de,setIndexOfHighlightedMovie:be},children:Object(f.jsxs)(x,{children:[Object(f.jsx)(ue,{}),Object(f.jsx)(h.a,{exitBeforeEnter:!0,children:Object(f.jsxs)(j.c,{location:e,children:[Object(f.jsx)(j.a,{exact:!0,path:"/",render:function(){return Object(f.jsx)(F,{})}}),Object(f.jsx)(j.a,{exact:!0,path:"/movie/:".concat(H),render:function(){return Object(f.jsx)(z,{})}})]},y(e))})]})})}))]})}Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a.a.render(Object(f.jsx)(oe.a,{basename:"/movie-search-app",children:Object(f.jsx)(je,{})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[85,1,2]]]);
//# sourceMappingURL=main.d1adbb50.chunk.js.map