(this["webpackJsonpmy-movie-search"]=this["webpackJsonpmy-movie-search"]||[]).push([[0],{118:function(e,t,n){e.exports={BgGradient:"AppBackground_BgGradient__2nQio",BgImage:"AppBackground_BgImage__1dsZq"}},121:function(e,t,n){e.exports={NoResult:"NoResult_NoResult__YeTfc",btn:"NoResult_btn__1abjx",active:"NoResult_active__2Y-CD"}},157:function(e,t,n){e.exports={PosterCard:"PosterCard_PosterCard__1PO0F"}},161:function(e,t,n){e.exports={PosterLi:"PosterLi_PosterLi__KSaed",active:"PosterLi_active__1lf78"}},166:function(e,t,n){e.exports={MoviesCollection:"MoviesCollection_MoviesCollection__28Ti2"}},167:function(e,t,n){e.exports={PosterCard:"ProfilePosterCard_PosterCard__24TH6"}},173:function(e,t,n){},197:function(e,t,n){},198:function(e,t,n){},201:function(e,t,n){},205:function(e,t,n){},206:function(e,t,n){},209:function(e,t,n){},210:function(e,t,n){},211:function(e,t,n){},212:function(e,t,n){},311:function(e,t,n){},312:function(e,t,n){},313:function(e,t,n){},314:function(e,t,n){},315:function(e,t,n){},316:function(e,t,n){},317:function(e,t,n){},318:function(e,t,n){"use strict";n.r(t);var a=n(76),c=n.n(a),r=n(8),s=n(9),i=n.n(s),o=n(11),u=n(5),l=n(0),b=n(18),j=n(323),d=Object(l.createContext)(null),m=(n(173),n(156)),h=n.n(m),p=n(1),O=Object(l.createContext)();function f(e){var t=Object(l.useContext)(d),n=t.dispPostersNum,a=t.setDispPostersNum,c=Object(l.useRef)(null);return Object(p.jsx)(h.a,{className:"AppScroolbar",onScrollDown:n<20?function(){a(20)}:void 0,ref:c,children:Object(p.jsx)(O.Provider,{value:{scrollBarRef:c},children:e.children})})}var x=n(117),v=n.n(x),g="api_key=cfe422613b250f702980a3bbf9e90716",N="https://api.themoviedb.org",k="".concat("https://image.tmdb.org/t/p/","w500"),w="".concat(N,"/3/movie/popular?").concat(g),C=.35,y=.35,S="/login",P="/register",I="/forgot-password",_="/profile",R="/profile-update",D=function(e){return e.pathname.substring(0,e.pathname.lastIndexOf("/")+1)},T=function(e){if(e.pathname.includes("/movie/"))return e.pathname.substring(e.pathname.lastIndexOf("/")+1)};function M(e){return L.apply(this,arguments)}function L(){return(L=Object(o.a)(i.a.mark((function e(t){var n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("string"!==typeof t){e.next=6;break}return e.next=3,E(t);case 3:n=e.sent,e.next=12;break;case 6:if("object"!==typeof t){e.next=10;break}n=t,e.next=12;break;case 10:return console.error("Passed ".concat(typeof t," input to getMoviesDataToDisplayInSearch. You must pass string or object")),e.abrupt("return");case 12:return e.abrupt("return",n.map((function(e){return{title:e.original_title,id:e.id,poster:null!==e.poster_path?k+e.poster_path:null}})));case 13:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function E(e){return B.apply(this,arguments)}function B(){return(B=Object(o.a)(i.a.mark((function e(t){var n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v.a.get(t);case 2:return n=e.sent,e.abrupt("return",n.data.results);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function H(e){return"".concat(N,"/3/search/movie?query=%").concat(e,"&").concat(g)}function F(e){return q.apply(this,arguments)}function q(){return(q=Object(o.a)(i.a.mark((function e(t){var n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v.a.get("".concat(N,"/3/movie/").concat(t,"?&").concat(g));case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var Q=n(92),A=n.n(Q),U=(n(197),n(322)),W=n(157),V=n.n(W),z=n(68),K=n.p+"static/media/no_image.2f8a70e1.png";function G(e){var t=e.cardData,n=e.onClick,a=e.className,c=e.cardTransitionDuration,r=e.imgTransition,s=e.imgHeight,i=e.imgWidth;return Object(p.jsx)(j.a,{exitBeforeEnter:!0,children:Object(p.jsx)(U.a.div,{id:V.a.PosterCard,className:a,onClick:function(){return n(t.id)},initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{duration:c,ease:"easeInOut"},children:Object(p.jsxs)("div",{children:[Object(p.jsx)(z.a,{width:i,height:s,opacityTransition:r,src:t.poster?t.poster:K,alt:"poster ".concat(t.id)}),Object(p.jsx)("p",{children:t.title})]})},t.id)})}function Y(){var e=Object(l.useContext)(d),t=e.searchbarText,n=e.pushToHistory,a=e.fetchPopularMoviesOnStartPage,c=e.setAllMoviesData,r=e.setShowQuickSearchRes;e.setSuggestions;return{selectedMovieInQuickSearch:function(e){t&&void 0!==e&&(n("/movie/".concat(e)),r(!1))},selectedMovieInStartPage:function(e){n("/movie/".concat(e))},selectedMovieInProfilePage:function(e){n("/movie/".concat(e))},gotoStarPage:function(){c([]),a(),n("/")}}}function X(){var e=Object(l.useContext)(d),t=e.searchbarText,n=e.suggestions,a=e.dispPostersNum,c=Y().selectedMovieInStartPage;return Object(p.jsx)(U.a.div,{className:"StartPageCards",initial:{opacity:0},animate:{opacity:1,delay:.2},exit:{opacity:0},transition:{duration:.7},children:Object(p.jsxs)("div",{className:"Container",children:[Object(p.jsx)(j.a,{exitBeforeEnter:!0,children:Object(p.jsx)(U.a.p,{className:"title",initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{duration:C,ease:"easeInOut"},children:!t&&"Trending Now"},t)}),Object(p.jsx)("div",{className:"row",children:n.slice(0,a).map((function(e){return Object(p.jsx)(G,{className:"col-xl-2 col-md-3 col-4",cardData:e,onClick:c,cardTransitionDuration:C,imgTransition:.5,imgHeight:"750",imgWidth:"500"})}))})]})})}n(198);var Z=n(118),J=n.n(Z);function $(e){var t=e.fetchImg,n=e.fallbackImg;return Object(l.useEffect)((function(){function e(){document.documentElement.style.setProperty("--vh","".concat(window.innerHeight/100,"px"))}return window.addEventListener("resize",e()),window.addEventListener("orientationchange",e()),function(){document.removeEventListener("resize",e),document.removeEventListener("orientationchange",e)}}),[]),Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)("div",{className:J.a.BgGradient}),Object(p.jsx)(j.a,{children:Object(p.jsx)(U.a.img,{className:J.a.BgImage,src:t||n,initial:{opacity:0},animate:{opacity:1,delay:.2},exit:{opacity:0},transition:{duration:1.5}},t)})]})}var ee=n.p+"static/media/BgGreen.a17d9a1b.jpg",te=Object(l.createContext)();function ne(){return Object(l.useContext)(te)}function ae(e){var t=e.children,n=Object(b.h)(),a=Object(l.useState)((function(){return function(e){var t=T(e);return""===t?"157336":t}(n)})),c=Object(u.a)(a,2),r=c[0],s=c[1],j=Object(l.useState)({}),d=Object(u.a)(j,2),m=d[0],h=d[1],O=Object(l.useState)("https://image.tmdb.org/t/p/original/rAiYTfKGqDCRIIqo664sY9XZIvQ.jpg"),f=Object(u.a)(O,2),x=f[0],v=f[1];return Object(l.useEffect)((function(){n.pathname.includes("/movie/")&&s(T(n))}),[n]),Object(l.useEffect)((function(){function e(){return(e=Object(o.a)(i.a.mark((function e(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.t0=r,!e.t0){e.next=7;break}return e.t1=h,e.next=5,F(r);case 5:e.t2=e.sent,(0,e.t1)(e.t2);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}console.log("movieID: ".concat(r)),function(){e.apply(this,arguments)}()}),[r]),Object(l.useEffect)((function(){m.backdrop_path&&v("".concat("https://image.tmdb.org/t/p/original").concat(m.backdrop_path))}),[m]),Object(p.jsxs)(te.Provider,{value:{movieID:r,setMovieID:s,movieData:m},children:[Object(p.jsx)($,{fetchImg:x,fallbackImg:ee}),t]})}function ce(e){var t=[];return void 0!==e&&e.forEach((function(e){t.push(e.name)})),t.join(", ")}var re=n(55),se=(n(201),n(123)),ie=n(79);n(319),n(202);ie.a.initializeApp({apiKey:"AIzaSyCBp_Ua_liik7BKHbHYXFUMNviV5EPm6ZE",authDomain:"myneonmovies.firebaseapp.com",projectId:"myneonmovies",storageBucket:"myneonmovies.appspot.com",messagingSenderId:"734826471130",appId:"1:734826471130:web:7038269ba471c9da04cfe3",measurementId:"G-CCKW3RQ7XE"}),ie.a.auth();var oe=ie.a.firestore().collection("users"),ue=(ie.a.firestore.FieldValue.serverTimestamp,ie.a),le=Object(l.createContext)();function be(){return Object(l.useContext)(le)}function je(e){var t=e.children,n=Object(l.useState)(),a=Object(u.a)(n,2),c=a[0],r=a[1],s=Object(l.useState)({}),b=Object(u.a)(s,2),j=b[0],d=b[1],m=Object(l.useState)(!0),h=Object(u.a)(m,2),O=h[0],f=h[1];function x(){return ue.auth().signOut()}function v(){return(v=Object(o.a)(i.a.mark((function e(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,x();case 3:e.next=8;break;case 5:e.prev=5,e.t0=e.catch(0),console.log(e.t0);case 8:case"end":return e.stop()}}),e,null,[[0,5]])})))).apply(this,arguments)}function g(){c&&oe.doc(c.uid).get().then((function(e){console.log(e.data()),d(e.data())})).catch((function(e){console.log(e)}))}return Object(l.useEffect)((function(){return ue.auth().onAuthStateChanged((function(e){console.log("user:",e),r(e),f(!1)}))}),[]),Object(l.useEffect)((function(){g()}),[c]),Object(p.jsx)(le.Provider,{value:{user:c,userData:j,setUserData:d,loadUserData:g,register:function(e,t){return ue.auth().createUserWithEmailAndPassword(e,t)},login:function(e,t){return ue.auth().signInWithEmailAndPassword(e,t)},logout:x,handleLogout:function(){return v.apply(this,arguments)},resetPassword:function(e){return ue.auth().sendPasswordResetEmail(e)},updateEmail:function(e){return c.updateEmail(e)},updatePassword:function(e){return c.updatePassword(e)}},children:!O&&t})}function de(){var e=ne().movieID,t=be(),n=t.user,a=t.userData,c=t.loadUserData,s=a.movies[e],b=Object(l.useState)({status:s?s.status:"",rating:s?s.rating:""}),j=Object(u.a)(b,2),d=j[0],m=j[1];return Object(l.useEffect)((function(){function t(e){return a.apply(this,arguments)}function a(){return(a=Object(o.a)(i.a.mark((function t(a){var c;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return"update"===a?c={status:d.status,rating:d.rating}:"delete"===a&&(c=ue.firestore.FieldValue.delete()),t.prev=1,t.next=4,oe.doc(n.uid).set({movies:Object(re.a)({},e,c)},{merge:!0});case 4:t.next=9;break;case 6:t.prev=6,t.t0=t.catch(1),console.log(t.t0);case 9:case"end":return t.stop()}}),t,null,[[1,6]])})))).apply(this,arguments)}(d.status||d.rating)&&function(){var e=Object(o.a)(i.a.mark((function e(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("Delete movie data"!==d.status){e.next=6;break}return e.next=3,t("delete");case 3:m({status:"",rating:""}),e.next=8;break;case 6:return e.next=8,t("update");case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()();return function(){c()}}),[d]),Object(p.jsxs)("div",{className:"MovieStatusWidgets",children:[Object(p.jsxs)("div",{className:"Widget",children:[Object(p.jsx)("p",{children:"Status"}),Object(p.jsx)(se.a,{filter:!1,value:d.status,onChange:function(e){return m(Object(r.a)(Object(r.a)({},d),{},{status:e}))},textField:"color",data:["Watching","Plan to watch","Completed","Paused","Dropped","Delete movie data"]})]}),Object(p.jsxs)("div",{className:"Widget",children:[Object(p.jsx)("p",{children:"Rating"}),Object(p.jsx)(se.a,{filter:!1,value:d.rating,onChange:function(e){return m(Object(r.a)(Object(r.a)({},d),{},{rating:e}))},textField:"color",data:["1","2","3","4","5"]})]})]})}function me(){var e=be(),t=(e.user,e.userData),n=ne(),a=n.movieData,c=(n.movieID,a.original_title),r=a.overview,s=a.tagline,i=a.poster_path,o=a.production_companies,u=a.genres,l=a.release_date,b=a.runtime,d=a.revenue,m=a.vote_average,h=ce(o),O=ce(u);return Object(p.jsx)(U.a.div,{className:"MovieCard",initial:{opacity:0},animate:{opacity:1,delay:.2},exit:{opacity:0},transition:{duration:.7},children:Object(p.jsx)(j.a,{exitBeforeEnter:!0,children:Object(p.jsxs)(U.a.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{duration:.7},className:"Container row",children:[Object(p.jsxs)("div",{className:"metaDataContainer col-12 col-md-7 col-lg-8",children:[Object(p.jsx)("h1",{children:c}),t.movies&&Object(p.jsx)(de,{}),Object(p.jsx)("span",{className:"tagline",children:s}),Object(p.jsx)("p",{children:r}),Object(p.jsxs)("div",{className:"additionalDetails",children:[Object(p.jsx)("span",{className:"genreList",children:O}),Object(p.jsx)("span",{className:"productionList",children:h}),Object(p.jsxs)("div",{className:"row releaseDetails",children:[Object(p.jsxs)("div",{className:"col-6",children:["Original Release:",Object(p.jsx)("span",{className:"metaData",children:l})]}),Object(p.jsxs)("div",{className:"col-6",children:["Running Time:",Object(p.jsxs)("span",{className:"metaData",children:[b," min"]})]}),Object(p.jsxs)("div",{className:"col-6",children:["Box Office:",Object(p.jsx)("span",{className:"metaData",children:d?"".concat(parseInt(d).toLocaleString()," $"):"-"})]}),Object(p.jsxs)("div",{className:"col-6",children:["Vote Average:",Object(p.jsx)("span",{className:"metaData",children:m||"-"})]})]})]})]}),Object(p.jsx)("div",{className:"posterContainer order-md-first col-12 col-md-5 col-lg-4",children:Object(p.jsx)("img",{className:"poster",src:null!==i?k+i:K,alt:"poster"})})]},c)})})}var he=n(57),pe=(n(205),n.p+"static/media/menu.e5ee7631.svg"),Oe=(n(206),n(160)),fe=n.p+"static/media/close.b8969d7a.svg";n(209);var xe=n(121),ve=n.n(xe);function ge(e){var t=e.className,n=e.fadeInConditionsArr,a=e.onClose,c=e.closeBtn,r=Object(l.useState)(!1),s=Object(u.a)(r,2),i=s[0],o=s[1];return Object(l.useEffect)((function(){o(n.every((function(e){return e})))}),[n]),Object(p.jsxs)("div",{className:"".concat(ve.a.NoResult," ").concat(t," ")+(i&&"fadeIn"),children:[Object(p.jsx)("p",{children:"no result"}),"btn"===c&&Object(p.jsx)("p",{className:ve.a.btn,onClick:function(){return a(!1)},children:"close"}),"img"===c&&Object(p.jsx)("img",{src:fe,onClick:function(){return a(!1)},alt:"close search results"})]})}n(210);function Ne(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:e.length,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:800,a=Object(l.useState)([]),c=Object(u.a)(a,2),r=c[0],s=c[1];return Object(l.useEffect)((function(){var a=e.slice(0,t);if(!(e.length>0)){var c=setTimeout((function(){s(a)}),n);return function(){return clearTimeout(c)}}s(a)}),[e,t,n]),r}function ke(){var e=Object(l.useContext)(d),t=e.searchbarText,n=e.pushToHistory,a=e.suggestions,c=e.showQuickSearchRes,r=e.setShowQuickSearchRes,s=Y().selectedMovieInQuickSearch,i=Ne(a,3,800);return Object(p.jsxs)("div",{className:"ResultsMobile "+(c&&t&&"fadeIn"),children:[Object(p.jsx)("div",{className:"searchbar_div",children:i.map((function(e){return Object(p.jsx)(G,{className:"col-4",cardData:e,onClick:s,cardTransitionDuration:y,imgTransition:.5,imgHeight:"750",imgWidth:"500"})}))}),Object(p.jsxs)("div",{className:"searchbar_li",children:[Object(p.jsx)("p",{className:"showMoreBtn",onClick:function(){return n("/")},index:3,children:"show more"}),Object(p.jsx)("p",{className:"showMoreClose",onClick:function(){return r(!1)},children:"close"})]})]})}n(211);function we(){var e=Object(l.useContext)(d),t=e.indexOfHighlightedMovie,n=e.setIndexOfHighlightedMovie;return{highligthText:function(e,n,a){var c=e.split(new RegExp("(".concat(n,")"),"gi"));return Object(p.jsxs)("span",{children:[" ",c.map((function(e,c){return Object(p.jsx)("span",{style:e.toLowerCase()===n.toLowerCase()&&t!==a?{color:"#00FC87",fontWeight:"bold"}:e.toLowerCase()===n.toLowerCase()?{fontWeight:"bold"}:{},children:e},c)}))," "]})},highlightMovieTextOnHover:function(e){n(parseInt(e.target.getAttribute("index")))}}}var Ce=n(161),ye=n.n(Ce);function Se(e){var t=e.item,n=e.index,a=Object(l.useContext)(d),c=a.searchbarText,r=a.indexOfHighlightedMovie,s=we(),i=s.highligthText,o=s.highlightMovieTextOnHover,u=Y().selectedMovieInQuickSearch;return Object(p.jsx)(j.a,{exitBeforeEnter:!0,children:Object(p.jsx)(U.a.li,{className:"".concat(ye.a.PosterLi," ")+(r===n&&"active"),onClick:function(){return u(t.id)},onMouseEnter:o,index:n,initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{duration:y},children:Object(p.jsxs)("div",{className:"row",children:[Object(p.jsx)(z.a,{className:"col-lg-2 col-md-3 col-sm-4 col-3",width:"500",height:"750",opacityTransition:.5,src:t.poster?t.poster:K,alt:"poster ".concat(t.id)}),Object(p.jsx)("p",{className:"col-lg-10 col-md-9 col-sm-8 col-9",children:i(t.title,c,n)})]})},t.id)})}function Pe(){var e=Object(l.useContext)(d),t=e.searchbarText,n=e.pushToHistory,a=e.suggestions,c=e.showQuickSearchRes,r=e.setShowQuickSearchRes,s=e.indexOfHighlightedMovie,i=we().highlightMovieTextOnHover,o=Ne(a,5,800);return Object(p.jsxs)("ul",{className:"ResultsPC "+(c&&t&&"fadeIn"),children:[o.map((function(e,t){return Object(p.jsx)(Se,{item:e,index:t})})),Object(p.jsxs)("li",{className:"showMore",children:[Object(p.jsx)("p",{className:"showMoreParagraph "+(5===s&&"active"),onMouseEnter:i,onClick:function(){return n("/")},children:"show more"}),Object(p.jsx)("img",{className:"closeImg",src:fe,onClick:function(){return r(!1)},alt:"close search results"})]})]})}function Ie(e){var t=Object(l.useContext)(d),n=t.suggestions,a=t.showQuickSearchRes;return Object(p.jsx)(j.a,{exitBeforeEnter:!0,children:Object(p.jsx)(U.a.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{duration:a?y:0,ease:"easeInOut"},children:e},n.length+a)})}function _e(){var e=Object(l.useContext)(d),t=e.searchbarText,n=e.suggestions,a=e.showQuickSearchRes,c=e.setShowQuickSearchRes,r=function(e,t){var n=Object(l.useState)(!1),a=Object(u.a)(n,2),c=a[0],r=a[1];return Object(l.useEffect)((function(){if(""!==t){var n=setTimeout((function(){r(!0)}),e);return function(){return clearTimeout(n)}}r(!1)}),[t,e]),c}(1e3,t);return Object(p.jsx)("div",{className:"SearchbarResults",children:Ie(Object(p.jsx)(p.Fragment,{children:n.length>0&&a?he.isMobile?Object(p.jsx)(ke,{}):Object(p.jsx)(Pe,{}):Object(p.jsx)(ge,{className:he.isMobile?"ResultsMobile":"ResultsPC",fadeInConditionsArr:[a,t,r],onClose:c,closeBtn:he.isMobile?"btn":"img"})}))})}function Re(){var e=Object(l.useContext)(d),t=e.location,n=e.searchbarText,a=e.setSearchbarText,c=e.onSearchbarTextChanging,r=function(){var e=Object(l.useContext)(d),t=e.suggestions,n=e.pushToHistory,a=e.showQuickSearchRes,c=e.setShowQuickSearchRes,r=e.indexOfHighlightedMovie,s=e.setIndexOfHighlightedMovie,i=Y().selectedMovieInQuickSearch;return A.a.config({up:function(){isNaN(r)?s(5):s(r<0?5:function(e){return e-1})},down:function(){isNaN(r)?s(0):s(r>5?0:function(e){return e+1})}}),function(e){13===(e.keyCode||e.which)&&(a||c(!0),a&&(5===r?n("/"):i(t[r].id)))}}(),s=function(){var e=Object(l.useContext)(d),t=e.searchbarText,n=e.showResInSearchBar,a=e.setShowQuickSearchRes,c=Object(l.useRef)();function r(e){c.current.contains(e.target)||a(!1)}return Object(l.useEffect)((function(){return document.addEventListener("mousedown",r),function(){document.removeEventListener("mousedown",r)}}),[]),{node:c,OnSearchBarClicked:function(){var e=Object(o.a)(i.a.mark((function e(c){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:a(!0),n(t);case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}}(),u=s.node,b=s.OnSearchBarClicked;return Object(p.jsxs)("div",{className:"NavSearchbar",ref:u,children:[Object(p.jsxs)("form",{onSubmit:function(e){return e.preventDefault()},children:[Object(p.jsx)(Oe.DebounceInput,{debounceTimeout:250,onChange:c,type:"text",placeholder:"Search Movie",value:n,onClick:b,onKeyPress:r}),Object(p.jsx)("img",{src:fe,onClick:function(){return a("")},alt:"close search"})]}),t.pathname.includes("movie")&&Object(p.jsx)(_e,{})]})}function De(e){var t=e.openSidebar,n=e.gotoHome,a=e.gotoRegister,c=e.gotoLogin,r=e.gotoUserPanel,s=be(),i=s.user,o=s.handleLogout;return Object(p.jsx)("nav",{className:"TopBar",children:Object(p.jsxs)("div",{className:"TopBarContainer",children:[Object(p.jsx)(Re,{}),Object(p.jsx)("div",{className:"hamburgerIconContainer",children:Object(p.jsx)("img",{className:"hamburgerIcon",src:pe,alt:"menuIcon",onClick:function(){return t()}})}),Object(p.jsxs)("ul",{className:"NavMenu",children:[Object(p.jsx)("li",{className:"NavItem",children:Object(p.jsx)("div",{className:"NavLink",onClick:function(){return n()},children:"Home"})}),Object(p.jsx)("li",{className:"NavItem",children:!i&&Object(p.jsx)("div",{className:"NavLink",onClick:function(){return a()},children:"Register"})}),Object(p.jsx)("li",{className:"NavItem",children:i&&Object(p.jsx)("div",{className:"NavLink",onClick:function(){return r()},children:"Profile"})})]}),Object(p.jsxs)("div",{className:"NavBtn",children:[!i&&Object(p.jsx)("div",{className:"NavBtnLink",onClick:function(){return c()},children:"login"}),i&&Object(p.jsx)("div",{className:"NavBtnLink",onClick:function(){return o()},children:"Logout"})]})]})})}n(212);function Te(e){var t=e.isOpen,n=e.close,a=e.gotoHome,c=e.gotoRegister,r=e.gotoLogin,s=e.gotoUserPanel,i=be(),o=i.user,u=i.handleLogout;return Object(p.jsxs)("nav",{className:"Sidebar "+(t&&"openSidebar"),children:[Object(p.jsx)("div",{className:"closeIconContainer",children:Object(p.jsx)("img",{src:fe,className:"closeIcon",alt:"The Movie Database Logo",onClick:function(){return n()}})}),Object(p.jsxs)("div",{className:"sidebarWrapper",children:[Object(p.jsxs)("ul",{className:"sidebarMenu",children:[Object(p.jsx)("div",{className:"sidebarLink",onClick:function(){return a()},children:"Home"}),!o&&Object(p.jsx)("div",{className:"sidebarLink",onClick:function(){return c()},children:"Register"}),o&&Object(p.jsx)("div",{className:"sidebarLink",onClick:function(){return s()},children:"Profile"})]}),Object(p.jsxs)("div",{className:"sidebarBtnWrap",children:[!o&&Object(p.jsx)("div",{className:"sidebarBtnLink",onClick:function(){return r()},children:"Login"}),o&&Object(p.jsx)("div",{className:"sidebarBtnLink",onClick:function(){return u()},children:"Logout"})]})]})]})}var Me=n(34);function Le(){var e=Object(l.useContext)(d),t=e.pushToHistory,n=e.fetchPopularMoviesOnStartPage,a=e.setAllMoviesData,c=Object(l.useState)(!1),r=Object(u.a)(c,2),s=r[0],i=r[1],o=function(){a([]),n(),t("/"),i(!1)},b=function(){t(P),i(!1)},j=function(){t(S),i(!1)},m=function(){t(_),i(!1)};return Object(p.jsxs)(Me.a,{children:[Object(p.jsx)(Te,{isOpen:s,close:function(){return i(!1)},gotoHome:o,gotoRegister:b,gotoLogin:j,gotoUserPanel:m}),Object(p.jsx)(De,{openSidebar:function(){return i(!0)},gotoHome:o,gotoRegister:b,gotoLogin:j,gotoUserPanel:m})]})}var Ee=n(12),Be=n(23),He=n(32);n(311);function Fe(e){var t=e.children;return Object(p.jsx)("div",{className:"error",children:t})}function qe(e){var t=e.label,n=e.name,a=e.type,c=Object(He.a)(e,["label","name","type"]);return Object(p.jsxs)("div",{className:"formControl",children:[Object(p.jsx)("label",{htmlFor:n,children:t}),Object(p.jsx)(Ee.b,Object(r.a)({id:n,name:n,type:a},c)),Object(p.jsx)(Ee.a,{name:n,component:Fe})]})}function Qe(e){var t=e.label,n=e.name,a=e.options,c=Object(He.a)(e,["label","name","options"]);return Object(p.jsxs)("div",{className:"formControl",children:[Object(p.jsx)("label",{htmlFor:n,children:t}),Object(p.jsx)(Ee.b,Object(r.a)(Object(r.a)({as:"select",id:n,name:n},c),{},{children:a.map((function(e){return Object(p.jsx)("option",{value:e.value,children:e.key},e.value)}))})),Object(p.jsx)(Ee.a,{name:n,component:Fe})]})}function Ae(e){var t=e.label,n=e.name,a=Object(He.a)(e,["label","name"]);return Object(p.jsxs)("div",{className:"formControl",children:[Object(p.jsx)("label",{htmlFor:n,children:t}),Object(p.jsx)(Ee.b,Object(r.a)({as:"textarea",id:n,name:n},a)),Object(p.jsx)(Ee.a,{name:n,component:Fe})]})}function Ue(e){var t=e.label,n=e.name,a=e.options,c=Object(He.a)(e,["label","name","options"]);return Object(p.jsxs)("div",{className:"formControl",children:[Object(p.jsx)("label",{htmlFor:n,children:t}),Object(p.jsx)(Ee.b,Object(r.a)(Object(r.a)({name:n},c),{},{children:function(e){var t=e.field;return a.map((function(e){return Object(p.jsxs)("div",{className:"RadioBtnDiv",children:[Object(p.jsx)("label",{className:"RadioBtnLabel",htmlFor:e.value,children:e.key}),Object(p.jsx)("input",Object(r.a)(Object(r.a)({type:"radio",id:e.value},t),{},{value:e.value,checked:t.value===e.value}))]},e.key)}))}})),Object(p.jsx)(Ee.a,{name:n,component:Fe})]})}function We(e){var t=e.label,n=e.name,a=e.options,c=Object(He.a)(e,["label","name","options"]);return Object(p.jsxs)("div",{className:"formControl",children:[Object(p.jsx)("label",{htmlFor:n,children:t}),Object(p.jsx)(Ee.b,Object(r.a)(Object(r.a)({name:n},c),{},{children:function(e){var t=e.field;return a.map((function(e){return Object(p.jsxs)("div",{children:[Object(p.jsx)("input",Object(r.a)(Object(r.a)({type:"checkbox",id:e.value},t),{},{value:e.value,checked:t.value&&t.value.includes(e.value)})),Object(p.jsx)("label",{htmlFor:e.value,children:e.key})]},e.key)}))}})),Object(p.jsx)(Ee.a,{name:n,component:Fe})]})}function Ve(e){var t=e.control,n=Object(He.a)(e,["control"]);switch(t){case"input":return Object(p.jsx)(qe,Object(r.a)({},n));case"textarea":return Object(p.jsx)(Ae,Object(r.a)({},n));case"select":return Object(p.jsx)(Qe,Object(r.a)({},n));case"radio":return Object(p.jsx)(Ue,Object(r.a)({},n));case"checkbox":return Object(p.jsx)(We,Object(r.a)({},n));default:return null}}n(312);function ze(e){var t=e.submitStatus,n=e.message;return Object(p.jsxs)("div",{className:"OnSubmitMsg",children:["success"===t&&Object(p.jsx)("p",{className:"submitSuccess",children:n}),"error"===t&&Object(p.jsx)("p",{className:"submitError",children:n})]})}n(313);function Ke(){var e=Object(b.g)(),t=be().register,n=Object(l.useState)(),a=Object(u.a)(n,2),c=a[0],s=a[1],j=Be.a({email:Be.b().email("Invalid email format").required("Required"),username:Be.b().required("Required"),password:Be.b().required("Required").min(6)}),d=function(){var n=Object(o.a)(i.a.mark((function n(a,c){var r;return i.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return s({}),console.log("Form values:",a),n.prev=2,n.next=5,t(a.email,a.password);case 5:return r=n.sent,n.prev=6,n.next=9,oe.doc(r.user.uid).set({username:a.username});case 9:e.push(_),n.next=15;break;case 12:n.prev=12,n.t0=n.catch(6),s({submitStatus:"error",message:n.t0.message});case 15:n.next=20;break;case 17:n.prev=17,n.t1=n.catch(2),s({submitStatus:"error",message:n.t1.message});case 20:c.setSubmitting(!1);case 21:case"end":return n.stop()}}),n,null,[[2,17],[6,12]])})));return function(e,t){return n.apply(this,arguments)}}();return Object(p.jsxs)("div",{className:"Register",children:[Object(p.jsx)("h2",{children:"Register"}),Object(p.jsx)(Ee.d,{initialValues:{email:"",username:"",password:""},validationSchema:j,onSubmit:d,enableReinitialize:!0,children:function(e){return Object(p.jsx)("div",{className:"FormContainer",children:Object(p.jsxs)(Ee.c,{className:"form",children:[Object(p.jsx)(Ve,{control:"input",type:"email",name:"email",label:"email"}),Object(p.jsx)(Ve,{control:"input",type:"text",name:"username",label:"username"}),Object(p.jsx)(Ve,{control:"input",type:"password",name:"password",label:"password"}),Object(p.jsx)("button",{className:"btn btn-success btn-green",type:"submit",disabled:!e.isValid||e.isSubmitting,children:"Register"}),Object(p.jsx)(ze,Object(r.a)({},c))]})})}}),Object(p.jsx)("div",{className:"border-top pt-3",children:Object(p.jsx)("button",{className:"btn btn-dark w-100",onClick:function(){return e.push(S)},children:"Have an account? Login"})})]})}n(314);function Ge(){var e=Object(b.g)(),t=be().login,n=Object(l.useState)(),a=Object(u.a)(n,2),c=a[0],s=a[1],j=Be.a({email:Be.b().email("Invalid email format").required("Required"),password:Be.b().required("Required").min(6)}),d=function(){var n=Object(o.a)(i.a.mark((function n(a,c){return i.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return s({}),console.log("Form values:",a),n.prev=2,n.next=5,t(a.email,a.password);case 5:n.sent,e.push(_),n.next=12;break;case 9:n.prev=9,n.t0=n.catch(2),s({submitStatus:"error",message:n.t0.message});case 12:c.setSubmitting(!1);case 13:case"end":return n.stop()}}),n,null,[[2,9]])})));return function(e,t){return n.apply(this,arguments)}}();return Object(p.jsxs)("div",{className:"Login",children:[Object(p.jsx)("h2",{children:"Login"}),Object(p.jsx)(Ee.d,{initialValues:{email:"",password:""},validationSchema:j,onSubmit:d,enableReinitialize:!0,children:function(e){return Object(p.jsx)("div",{className:"FormContainer",children:Object(p.jsxs)(Ee.c,{className:"form",children:[Object(p.jsx)(Ve,{control:"input",type:"email",name:"email",label:"email"}),Object(p.jsx)(Ve,{control:"input",type:"password",name:"password",label:"password"}),Object(p.jsx)("button",{className:"btn btn-success btn-green",type:"submit",disabled:!e.isValid||e.isSubmitting,children:"Log In"}),Object(p.jsx)(ze,Object(r.a)({},c))]})})}}),Object(p.jsx)("button",{className:"btn btn-link forgot w-100 mb-1",onClick:function(){return e.push(I)},children:"Forgot password?"}),Object(p.jsx)("div",{className:"border-top pt-3",children:Object(p.jsx)("button",{className:"btn btn-dark w-100",onClick:function(){return e.push(P)},children:"Need an account? Register"})})]})}var Ye=n(58),Xe=n.n(Ye),Ze=n(166),Je=n.n(Ze),$e=n(167),et=n.n($e);function tt(e){var t=e.cardData,n=e.onClick,a=e.className,c=e.cardTransitionDuration,r=e.imgTransition,s=e.imgHeight,i=e.imgWidth;return Object(p.jsx)(j.a,{exitBeforeEnter:!0,children:Object(p.jsx)(U.a.div,{id:et.a.PosterCard,className:a,onClick:function(){return n(t.id)},initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{duration:c,ease:"easeInOut"},children:Object(p.jsxs)("div",{children:[Object(p.jsx)(z.a,{width:i,height:s,opacityTransition:r,src:t.poster?t.poster:K,alt:"poster ".concat(t.id)}),Object(p.jsx)("p",{children:t.title})]})},t.id)})}function nt(){Object(b.g)();var e=be().userData,t=Y().selectedMovieInProfilePage,n=Object(l.useState)([]),a=Object(u.a)(n,2),c=a[0],r=a[1];return Object(l.useEffect)(Object(o.a)(i.a.mark((function t(){var n,a;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a=function(){return(a=Object(o.a)(i.a.mark((function t(){var n,a,c,r,s,o,l,b;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:n=Object.entries(e.movies),a=[],c=0,r=n;case 3:if(!(c<r.length)){t.next=13;break}return s=Object(u.a)(r[c],2),o=s[0],l=s[1],t.next=7,F(o);case 7:b=t.sent,console.log(b),a.push({id:o,status:l.status,rating:l.rating,title:b.title,poster:null!==b.poster_path?k+b.poster_path:null});case 10:c++,t.next=3;break;case 13:return t.abrupt("return",a);case 14:case"end":return t.stop()}}),t)})))).apply(this,arguments)},n=function(){return a.apply(this,arguments)},t.t0=r,t.next=5,n();case 5:t.t1=t.sent,(0,t.t0)(t.t1);case 7:case"end":return t.stop()}}),t)}))),[]),Object(p.jsxs)("div",{className:Je.a.MoviesCollection,children:[Object(p.jsx)("h2",{children:"Movie List"}),Object(p.jsx)("div",{className:"row",children:c.length>0&&c.map((function(e){return Object(p.jsx)(tt,{className:"col-xl-2 col-md-3 col-sm-4 col-6",cardData:e,onClick:t,cardTransitionDuration:C,imgTransition:.5,imgHeight:"750",imgWidth:"500"})}))})]})}function at(){var e=Object(b.g)(),t=be(),n=t.user,a=t.handleLogout,c=t.userData,r=t.loadUserData,s=Object(l.useState)(!0),i=Object(u.a)(s,2),o=i[0],j=i[1];return Object(l.useEffect)((function(){r(),c&&j(!1)}),[]),Object(p.jsx)("div",{className:Xe.a.Profile,children:!o&&Object(p.jsxs)("div",{className:Xe.a.container,children:[Object(p.jsxs)("div",{className:Xe.a.profileCard,children:[Object(p.jsx)("h2",{children:"Profile"}),Object(p.jsxs)("div",{className:Xe.a.userData,children:[Object(p.jsxs)("p",{children:[Object(p.jsx)("strong",{children:"Email:"})," ",n.email]}),Object(p.jsxs)("p",{children:[Object(p.jsx)("strong",{children:"Username:"})," ",c.username]})]}),Object(p.jsxs)("div",{className:Xe.a.buttons,children:[Object(p.jsx)("button",{className:"".concat(Xe.a.button," btn btn-success"),onClick:function(){return e.push(R)},children:"Update Profile"}),Object(p.jsx)("button",{className:"".concat(Xe.a.button," btn btn-dark"),onClick:function(){return a()},children:"Log out"})]})]}),c.movies&&Object(p.jsx)(nt,{})]})})}n(315);function ct(){var e=Object(b.g)(),t=be().resetPassword,n=Object(l.useState)(),a=Object(u.a)(n,2),c=a[0],s=a[1],j=Be.a({email:Be.b().email("Invalid email format").required("Required")}),d=function(){var e=Object(o.a)(i.a.mark((function e(n,a){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s({}),console.log("Form values:",n),e.prev=2,e.next=5,t(n.email);case 5:s({submitStatus:"success",message:"Instructon for reseting your password were send to your email"}),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(2),s({submitStatus:"error",message:e.t0.message});case 11:a.setSubmitting(!1);case 12:case"end":return e.stop()}}),e,null,[[2,8]])})));return function(t,n){return e.apply(this,arguments)}}();return Object(p.jsxs)("div",{className:"ForgotPassword",children:[Object(p.jsx)("h2",{children:"Password Reset"}),Object(p.jsx)(Ee.d,{initialValues:{email:""},validationSchema:j,onSubmit:d,enableReinitialize:!0,children:function(e){return Object(p.jsx)("div",{className:"FormContainer",children:Object(p.jsxs)(Ee.c,{className:"form",children:[Object(p.jsx)(Ve,{control:"input",type:"email",name:"email",label:"email"}),Object(p.jsx)("button",{className:"btn btn-success btn-green",type:"submit",disabled:!e.isValid||e.isSubmitting,children:"Reset Password"}),Object(p.jsx)(ze,Object(r.a)({},c))]})})}}),Object(p.jsx)("button",{className:"btn btn-link forgot w-100 mb-1",onClick:function(){return e.push(S)},children:"Login?"}),Object(p.jsx)("div",{className:"border-top pt-3",children:Object(p.jsx)("button",{className:"btn btn-dark w-100",onClick:function(){return e.push(P)},children:"Need an account? Register"})})]})}n(316);function rt(){var e=Object(b.g)(),t=be(),n=t.user,a=t.userData,c=t.updatePassword,s=t.updateEmail,j=Object(l.useState)(),d=Object(u.a)(j,2),m=d[0],h=d[1],O=Object(l.useState)(),f=Object(u.a)(O,2),x=f[0],v=f[1],g={email:n.email,username:a.username,password:""},N=Be.a({email:Be.b().email("Invalid email format").required("Required"),username:Be.b().required("Required"),password:Be.b().min(6)}),k=function(){var t=Object(o.a)(i.a.mark((function t(r,o){return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(h({}),v({}),console.log("Form values:",r),r.email===n.email){t.next=13;break}return t.prev=4,t.next=7,s(r.email);case 7:e.push(_),t.next=13;break;case 10:t.prev=10,t.t0=t.catch(4),h({submitStatus:"error",message:"Failed to update email. Email is probably used by another user."});case 13:if(!r.password){t.next=23;break}return t.prev=14,t.next=17,c(r.password);case 17:e.push(_),t.next=23;break;case 20:t.prev=20,t.t1=t.catch(14),v({submitStatus:"error",message:"Failed to update password."});case 23:if(r.email===n.email){t.next=33;break}return t.prev=24,t.next=27,s(r.email);case 27:e.push(_),t.next=33;break;case 30:t.prev=30,t.t2=t.catch(24),h({submitStatus:"error",message:"Failed to update email. Email is probably used by another user."});case 33:if(r.username===a.username){t.next=43;break}return t.prev=34,t.next=37,oe.doc(n.uid).set({username:r.username},{merge:!0});case 37:e.push(_),t.next=43;break;case 40:t.prev=40,t.t3=t.catch(34),console.log(t.t3);case 43:o.setSubmitting(!1);case 44:case"end":return t.stop()}}),t,null,[[4,10],[14,20],[24,30],[34,40]])})));return function(e,n){return t.apply(this,arguments)}}();return Object(p.jsxs)("div",{className:"UpdateProfile",children:[Object(p.jsx)("h2",{children:"Update Profile"}),Object(p.jsx)(Ee.d,{initialValues:g,validationSchema:N,onSubmit:k,enableReinitialize:!0,children:function(e){return Object(p.jsx)("div",{className:"FormContainer",children:Object(p.jsxs)(Ee.c,{className:"form",children:[Object(p.jsx)(Ve,{control:"input",type:"email",name:"email",label:"email"}),Object(p.jsx)(Ve,{control:"input",type:"text",name:"username",label:"username"}),Object(p.jsx)(Ve,{control:"input",type:"password",name:"password",label:"password",placeholder:"Leave blank to keep the same"}),Object(p.jsx)("button",{className:"btn btn-success btn-green",type:"submit",disabled:!e.isValid||e.isSubmitting,children:"Update"}),Object(p.jsx)(ze,Object(r.a)({},m)),Object(p.jsx)(ze,Object(r.a)({},x))]})})}}),Object(p.jsx)("div",{className:"border-top pt-3",children:Object(p.jsx)("button",{className:"btn btn-dark w-100",onClick:function(){return e.push(_)},children:"Cancel"})})]})}function st(e){var t=e.component,n=Object(He.a)(e,["component"]),a=be().user;return Object(p.jsx)(b.b,Object(r.a)(Object(r.a)({},n),{},{render:function(e){return a?Object(p.jsx)(t,Object(r.a)({},e)):Object(p.jsx)(b.a,{to:"/login"})}}))}function it(){var e=ne().movieID,t=Object(b.h)(),n=Object(b.g)(),a=Object(l.useState)([]),c=Object(u.a)(a,2),s=c[0],m=c[1],h=Object(l.useState)(""),O=Object(u.a)(h,2),x=O[0],v=O[1];function g(){return N.apply(this,arguments)}function N(){return(N=Object(o.a)(i.a.mark((function e(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=m,e.next=3,M(w);case 3:e.t1=e.sent,(0,e.t0)(e.t1);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}Object(l.useEffect)((function(){"/"!==t.pathname||x?""===x&&"/"!==t.pathname&&setTimeout((function(){m([])}),600):g()}),[x,t.pathname]);var k=Object(l.useState)([]),C=Object(u.a)(k,2),y=C[0],T=C[1],L=Object(l.useState)(he.isMobile?9:12),B=Object(u.a)(L,2),F=B[0],q=B[1],Q=function(){var e=Object(o.a)(i.a.mark((function e(t){var n,a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(q(he.isMobile?6:12),!(t.length>=1)){e.next=10;break}return e.next=4,E(H(t));case 4:return n=e.sent,e.next=7,M(n);case 7:a=e.sent,T(n),m(a);case 10:he.isMobile&&setTimeout((function(){q(9)}),1e3);case 11:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),U=Object(l.useState)(!1),W=Object(u.a)(U,2),V=W[0],z=W[1],K=Object(l.useState)(),G=Object(u.a)(K,2),Y=G[0],Z=G[1];return Object(l.useEffect)((function(){console.log({suggestions:s})}),[s]),Object(p.jsx)("div",{children:Object(p.jsx)("div",Object(r.a)(Object(r.a)({id:"app"},A.a.events),{},{tabIndex:"1",children:Object(p.jsx)(d.Provider,{value:{searchbarText:x,setSearchbarText:v,suggestions:s,setSuggestions:m,onSearchbarTextChanging:function(e){var t=e.target.value.replace(/[^\w\s]/gi,"");v(t),Q(t)},allMoviesData:y,setAllMoviesData:T,fetchPopularMoviesOnStartPage:g,showResInSearchBar:Q,history:n,location:t,pushToHistory:function(e){return n.push(e)},dispPostersNum:F,setDispPostersNum:q,showQuickSearchRes:V,setShowQuickSearchRes:z,indexOfHighlightedMovie:Y,setIndexOfHighlightedMovie:Z},children:Object(p.jsxs)(je,{children:[Object(p.jsx)(Le,{}),Object(p.jsx)(f,{children:Object(p.jsx)(j.a,{exitBeforeEnter:!0,children:Object(p.jsxs)(b.d,{location:t,children:[Object(p.jsx)(b.b,{exact:!0,path:"/",render:function(){return Object(p.jsx)(X,{})}}),Object(p.jsx)(b.b,{exact:!0,path:"".concat("/movie/",":").concat(e),render:function(){return Object(p.jsx)(me,{})}}),Object(p.jsx)(b.b,{exact:!0,path:P,render:function(){return Object(p.jsx)(Ke,{})}}),Object(p.jsx)(b.b,{exact:!0,path:S,render:function(){return Object(p.jsx)(Ge,{})}}),Object(p.jsx)(b.b,{exact:!0,path:I,render:function(){return Object(p.jsx)(ct,{})}}),Object(p.jsx)(st,{exact:!0,path:_,component:at}),Object(p.jsx)(st,{exact:!0,path:R,component:rt})]},D(t))})})]})})}))})}n(317);c.a.render(Object(p.jsx)(Me.a,{basename:"/movie-search-app",children:Object(p.jsx)(ae,{children:Object(p.jsx)(it,{})})}),document.getElementById("root"))},58:function(e,t,n){e.exports={Profile:"Profile_Profile__TZNBi",container:"Profile_container__1K79n",profileCard:"Profile_profileCard__2rXbq",userData:"Profile_userData__PXnlA",buttons:"Profile_buttons__29010",button:"Profile_button__58ype"}}},[[318,1,2]]]);
//# sourceMappingURL=main.473888aa.chunk.js.map