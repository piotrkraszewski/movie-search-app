(this["webpackJsonpmy-movie-search"]=this["webpackJsonpmy-movie-search"]||[]).push([[0],{118:function(e,t,n){e.exports={BgGradient:"AppBackground_BgGradient__2nQio",BgImage:"AppBackground_BgImage__1dsZq"}},121:function(e,t,n){e.exports={NoResult:"NoResult_NoResult__YeTfc",btn:"NoResult_btn__1abjx",active:"NoResult_active__2Y-CD"}},157:function(e,t,n){e.exports={PosterCard:"PosterCard_PosterCard__1PO0F"}},161:function(e,t,n){e.exports={PosterLi:"PosterLi_PosterLi__KSaed",active:"PosterLi_active__1lf78"}},171:function(e,t,n){},195:function(e,t,n){},196:function(e,t,n){},199:function(e,t,n){},203:function(e,t,n){},204:function(e,t,n){},207:function(e,t,n){},208:function(e,t,n){},209:function(e,t,n){},210:function(e,t,n){},309:function(e,t,n){},310:function(e,t,n){},311:function(e,t,n){},312:function(e,t,n){},313:function(e,t,n){},314:function(e,t,n){},315:function(e,t,n){},316:function(e,t,n){"use strict";n.r(t);var a=n(75),c=n.n(a),s=n(8),r=n(9),i=n.n(r),o=n(16),u=n(5),l=n(0),b=n(18),j=n(321),d=Object(l.createContext)(null),m=(n(171),n(156)),h=n.n(m),p=n(2),O=Object(l.createContext)();function f(e){var t=Object(l.useContext)(d),n=t.dispPostersNum,a=t.setDispPostersNum,c=Object(l.useRef)(null);return Object(p.jsx)(h.a,{className:"AppScroolbar",onScrollDown:n<20?function(){a(20)}:void 0,ref:c,children:Object(p.jsx)(O.Provider,{value:{scrollBarRef:c},children:e.children})})}var x=n(117),v=n.n(x),g="api_key=cfe422613b250f702980a3bbf9e90716",N="https://api.themoviedb.org",k="".concat("https://image.tmdb.org/t/p/","w500"),w="".concat(N,"/3/movie/popular?").concat(g),y=.7,S=.35,C="/login",P="/register",R="/forgot-password",I="/profile",_="/profile-update",D=function(e){return e.pathname.substring(0,e.pathname.lastIndexOf("/")+1)},T=function(e){if(e.pathname.includes("/movie/"))return e.pathname.substring(e.pathname.lastIndexOf("/")+1)};function L(e){return M.apply(this,arguments)}function M(){return(M=Object(o.a)(i.a.mark((function e(t){var n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("string"!==typeof t){e.next=6;break}return e.next=3,E(t);case 3:n=e.sent,e.next=12;break;case 6:if("object"!==typeof t){e.next=10;break}n=t,e.next=12;break;case 10:return console.error("Passed ".concat(typeof t," input to getMoviesDataToDisplayInSearch. You must pass string or object")),e.abrupt("return");case 12:return e.abrupt("return",n.map((function(e){return{title:e.original_title,id:e.id,poster:null!==e.poster_path?k+e.poster_path:null}})));case 13:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function E(e){return B.apply(this,arguments)}function B(){return(B=Object(o.a)(i.a.mark((function e(t){var n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v.a.get(t);case 2:return n=e.sent,e.abrupt("return",n.data.results);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function H(e){return"".concat(N,"/3/search/movie?query=%").concat(e,"&").concat(g)}function F(e){return q.apply(this,arguments)}function q(){return(q=Object(o.a)(i.a.mark((function e(t){var n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v.a.get("".concat(N,"/3/movie/").concat(t,"?&").concat(g));case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var Q=n(91),A=n.n(Q),U=(n(195),n(320)),W=n(157),V=n.n(W),z=n(92),K=n.p+"static/media/no_image.2f8a70e1.png";function G(e){var t=e.cardData,n=e.onClick,a=e.className,c=e.cardTransitionDuration,s=e.imgTransition,r=e.imgHeight,i=e.imgWidth;return Object(p.jsx)(j.a,{exitBeforeEnter:!0,children:Object(p.jsx)(U.a.div,{id:V.a.PosterCard,className:a,onClick:function(){return n(t.id)},initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{duration:c,ease:"easeInOut"},children:Object(p.jsxs)("div",{children:[Object(p.jsx)(z.a,{width:i,height:r,opacityTransition:s,src:t.poster?t.poster:K,alt:"poster ".concat(t.id)}),Object(p.jsx)("p",{children:t.title})]})},t.id)})}function Y(){var e=Object(l.useContext)(d),t=e.searchbarText,n=e.suggestions,a=e.dispPostersNum,c=e.pushToHistory,s=e.setSuggestions,r=Object(l.useContext)(O).scrollBarRef;function i(e){c("/movie/".concat(e)),setTimeout((function(){r.current._ps.element.scrollTop=0,s([])}),700)}return Object(p.jsx)(U.a.div,{className:"StartPageCards",initial:{opacity:0},animate:{opacity:1,delay:.2},exit:{opacity:0},transition:{duration:y},children:Object(p.jsxs)("div",{className:"Container",children:[Object(p.jsx)(j.a,{exitBeforeEnter:!0,children:Object(p.jsx)(U.a.p,{className:"title",initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{duration:.35,ease:"easeInOut"},children:!t&&"Trending Now"},t)}),Object(p.jsx)("div",{className:"row",children:n.slice(0,a).map((function(e){return Object(p.jsx)(G,{className:"col-xl-2 col-md-3 col-4",cardData:e,onClick:i,cardTransitionDuration:.35,imgTransition:.5,imgHeight:"750",imgWidth:"500"})}))})]})})}n(196);var X=n(118),Z=n.n(X);function J(e){var t=e.fetchImg,n=e.fallbackImg;return Object(l.useEffect)((function(){function e(){document.documentElement.style.setProperty("--vh","".concat(window.innerHeight/100,"px"))}return window.addEventListener("resize",e()),window.addEventListener("orientationchange",e()),function(){document.removeEventListener("resize",e),document.removeEventListener("orientationchange",e)}}),[]),Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)("div",{className:Z.a.BgGradient}),Object(p.jsx)(j.a,{children:Object(p.jsx)(U.a.img,{className:Z.a.BgImage,src:t||n,initial:{opacity:0},animate:{opacity:1,delay:.2},exit:{opacity:0},transition:{duration:1.5}},t)})]})}var $=n.p+"static/media/BgGreen.a17d9a1b.jpg",ee=Object(l.createContext)();function te(){return Object(l.useContext)(ee)}function ne(e){var t=e.children,n=Object(b.h)(),a=Object(l.useState)((function(){return function(e){var t=T(e);return""===t?"157336":t}(n)})),c=Object(u.a)(a,2),s=c[0],r=c[1],j=Object(l.useState)({}),d=Object(u.a)(j,2),m=d[0],h=d[1],O=Object(l.useState)("https://image.tmdb.org/t/p/original/rAiYTfKGqDCRIIqo664sY9XZIvQ.jpg"),f=Object(u.a)(O,2),x=f[0],v=f[1];return Object(l.useEffect)((function(){n.pathname.includes("/movie/")&&r(T(n))}),[n]),Object(l.useEffect)((function(){function e(){return(e=Object(o.a)(i.a.mark((function e(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.t0=s,!e.t0){e.next=7;break}return e.t1=h,e.next=5,F(s);case 5:e.t2=e.sent,(0,e.t1)(e.t2);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}console.log("movieID: ".concat(s)),function(){e.apply(this,arguments)}()}),[s]),Object(l.useEffect)((function(){m.backdrop_path&&v("".concat("https://image.tmdb.org/t/p/original").concat(m.backdrop_path))}),[m]),Object(p.jsxs)(ee.Provider,{value:{movieID:s,setMovieID:r,movieData:m},children:[Object(p.jsx)(J,{fetchImg:x,fallbackImg:$}),t]})}function ae(e){var t=[];return void 0!==e&&e.forEach((function(e){t.push(e.name)})),t.join(", ")}var ce=n(55),se=(n(199),n(123)),re=n(78);n(317),n(200);re.a.initializeApp({apiKey:"AIzaSyCBp_Ua_liik7BKHbHYXFUMNviV5EPm6ZE",authDomain:"myneonmovies.firebaseapp.com",projectId:"myneonmovies",storageBucket:"myneonmovies.appspot.com",messagingSenderId:"734826471130",appId:"1:734826471130:web:7038269ba471c9da04cfe3",measurementId:"G-CCKW3RQ7XE"}),re.a.auth();var ie=re.a.firestore().collection("users"),oe=(re.a.firestore.FieldValue.serverTimestamp,re.a),ue=Object(l.createContext)();function le(){return Object(l.useContext)(ue)}function be(e){var t=e.children,n=Object(l.useState)(),a=Object(u.a)(n,2),c=a[0],s=a[1],r=Object(l.useState)({}),b=Object(u.a)(r,2),j=b[0],d=b[1],m=Object(l.useState)(!0),h=Object(u.a)(m,2),O=h[0],f=h[1];function x(){return oe.auth().signOut()}function v(){return(v=Object(o.a)(i.a.mark((function e(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,x();case 3:e.next=8;break;case 5:e.prev=5,e.t0=e.catch(0),console.log(e.t0);case 8:case"end":return e.stop()}}),e,null,[[0,5]])})))).apply(this,arguments)}function g(){c&&ie.doc(c.uid).get().then((function(e){console.log(e.data()),d(e.data())})).catch((function(e){console.log(e)}))}return Object(l.useEffect)((function(){return oe.auth().onAuthStateChanged((function(e){console.log("user:",e),s(e),f(!1)}))}),[]),Object(l.useEffect)((function(){g()}),[c]),Object(p.jsx)(ue.Provider,{value:{user:c,userData:j,setUserData:d,loadUserData:g,register:function(e,t){return oe.auth().createUserWithEmailAndPassword(e,t)},login:function(e,t){return oe.auth().signInWithEmailAndPassword(e,t)},logout:x,handleLogout:function(){return v.apply(this,arguments)},resetPassword:function(e){return oe.auth().sendPasswordResetEmail(e)},updateEmail:function(e){return c.updateEmail(e)},updatePassword:function(e){return c.updatePassword(e)}},children:!O&&t})}function je(){var e=te().movieID,t=le(),n=t.user,a=t.userData,c=t.loadUserData,r=a.movies[e],b=Object(l.useState)({status:r?r.status:"",rating:r?r.rating:""}),j=Object(u.a)(b,2),d=j[0],m=j[1];return Object(l.useEffect)((function(){function t(e){return a.apply(this,arguments)}function a(){return(a=Object(o.a)(i.a.mark((function t(a){var c;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return"update"===a?c={status:d.status,rating:d.rating}:"delete"===a&&(c=oe.firestore.FieldValue.delete()),t.prev=1,t.next=4,ie.doc(n.uid).set({movies:Object(ce.a)({},e,c)},{merge:!0});case 4:t.next=9;break;case 6:t.prev=6,t.t0=t.catch(1),console.log(t.t0);case 9:case"end":return t.stop()}}),t,null,[[1,6]])})))).apply(this,arguments)}(d.status||d.rating)&&function(){var e=Object(o.a)(i.a.mark((function e(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("Delete movie data"!==d.status){e.next=6;break}return e.next=3,t("delete");case 3:m({status:"",rating:""}),e.next=8;break;case 6:return e.next=8,t("update");case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()();return function(){c()}}),[d]),Object(p.jsxs)("div",{className:"MovieStatusWidgets",children:[Object(p.jsxs)("div",{className:"Widget",children:[Object(p.jsx)("p",{children:"Status"}),Object(p.jsx)(se.a,{filter:!1,value:d.status,onChange:function(e){return m(Object(s.a)(Object(s.a)({},d),{},{status:e}))},textField:"color",data:["Watching","Plan to watch","Completed","Paused","Dropped","Delete movie data"]})]}),Object(p.jsxs)("div",{className:"Widget",children:[Object(p.jsx)("p",{children:"Rating"}),Object(p.jsx)(se.a,{filter:!1,value:d.rating,onChange:function(e){return m(Object(s.a)(Object(s.a)({},d),{},{rating:e}))},textField:"color",data:["1","2","3","4","5"]})]})]})}function de(){var e=le(),t=(e.user,e.userData),n=te(),a=n.movieData,c=(n.movieID,a.original_title),s=a.overview,r=a.tagline,i=a.poster_path,o=a.production_companies,u=a.genres,l=a.release_date,b=a.runtime,d=a.revenue,m=a.vote_average,h=ae(o),O=ae(u);return Object(p.jsx)(U.a.div,{className:"MovieCard",initial:{opacity:0},animate:{opacity:1,delay:.2},exit:{opacity:0},transition:{duration:y},children:Object(p.jsx)(j.a,{exitBeforeEnter:!0,children:Object(p.jsxs)(U.a.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{duration:y},className:"Container row",children:[Object(p.jsxs)("div",{className:"metaDataContainer col-12 col-md-7 col-lg-8",children:[Object(p.jsx)("h1",{children:c}),t.movies&&Object(p.jsx)(je,{}),Object(p.jsx)("span",{className:"tagline",children:r}),Object(p.jsx)("p",{children:s}),Object(p.jsxs)("div",{className:"additionalDetails",children:[Object(p.jsx)("span",{className:"genreList",children:O}),Object(p.jsx)("span",{className:"productionList",children:h}),Object(p.jsxs)("div",{className:"row releaseDetails",children:[Object(p.jsxs)("div",{className:"col-6",children:["Original Release:",Object(p.jsx)("span",{className:"metaData",children:l})]}),Object(p.jsxs)("div",{className:"col-6",children:["Running Time:",Object(p.jsxs)("span",{className:"metaData",children:[b," min"]})]}),Object(p.jsxs)("div",{className:"col-6",children:["Box Office:",Object(p.jsx)("span",{className:"metaData",children:d?"".concat(parseInt(d).toLocaleString()," $"):"-"})]}),Object(p.jsxs)("div",{className:"col-6",children:["Vote Average:",Object(p.jsx)("span",{className:"metaData",children:m||"-"})]})]})]})]}),Object(p.jsx)("div",{className:"posterContainer order-md-first col-12 col-md-5 col-lg-4",children:Object(p.jsx)("img",{className:"poster",src:null!==i?k+i:K,alt:"poster"})})]},c)})})}var me=n(57),he=(n(203),n.p+"static/media/menu.e5ee7631.svg"),pe=(n(204),n(160)),Oe=n.p+"static/media/close.b8969d7a.svg";function fe(){var e=Object(l.useContext)(d),t=e.searchbarText,n=e.pushToHistory,a=e.fetchPopularMoviesOnStartPage,c=e.setAllMoviesData,s=e.setShowQuickSearchRes;return{selectedMovieInQuickSearch:function(e){t&&void 0!==e&&(n("/movie/".concat(e)),s(!1))},gotoStarPage:function(){c([]),a(),n("/")}}}n(207);var xe=n(121),ve=n.n(xe);function ge(e){var t=e.className,n=e.fadeInConditionsArr,a=e.onClose,c=e.closeBtn,s=Object(l.useState)(!1),r=Object(u.a)(s,2),i=r[0],o=r[1];return Object(l.useEffect)((function(){o(n.every((function(e){return e})))}),[n]),Object(p.jsxs)("div",{className:"".concat(ve.a.NoResult," ").concat(t," ")+(i&&"fadeIn"),children:[Object(p.jsx)("p",{children:"no result"}),"btn"===c&&Object(p.jsx)("p",{className:ve.a.btn,onClick:function(){return a(!1)},children:"close"}),"img"===c&&Object(p.jsx)("img",{src:Oe,onClick:function(){return a(!1)},alt:"close search results"})]})}n(208);function Ne(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:e.length,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:800,a=Object(l.useState)([]),c=Object(u.a)(a,2),s=c[0],r=c[1];return Object(l.useEffect)((function(){var a=e.slice(0,t);if(!(e.length>0)){var c=setTimeout((function(){r(a)}),n);return function(){return clearTimeout(c)}}r(a)}),[e,t,n]),s}function ke(){var e=Object(l.useContext)(d),t=e.searchbarText,n=e.pushToHistory,a=e.suggestions,c=e.showQuickSearchRes,s=e.setShowQuickSearchRes,r=fe().selectedMovieInQuickSearch,i=Ne(a,3,800);return Object(p.jsxs)("div",{className:"ResultsMobile "+(c&&t&&"fadeIn"),children:[Object(p.jsx)("div",{className:"searchbar_div",children:i.map((function(e){return Object(p.jsx)(G,{className:"col-4",cardData:e,onClick:r,cardTransitionDuration:S,imgTransition:.5,imgHeight:"750",imgWidth:"500"})}))}),Object(p.jsxs)("div",{className:"searchbar_li",children:[Object(p.jsx)("p",{className:"showMoreBtn",onClick:function(){return n("/")},index:3,children:"show more"}),Object(p.jsx)("p",{className:"showMoreClose",onClick:function(){return s(!1)},children:"close"})]})]})}n(209);function we(){var e=Object(l.useContext)(d),t=e.indexOfHighlightedMovie,n=e.setIndexOfHighlightedMovie;return{highligthText:function(e,n,a){var c=e.split(new RegExp("(".concat(n,")"),"gi"));return Object(p.jsxs)("span",{children:[" ",c.map((function(e,c){return Object(p.jsx)("span",{style:e.toLowerCase()===n.toLowerCase()&&t!==a?{color:"#00FC87",fontWeight:"bold"}:e.toLowerCase()===n.toLowerCase()?{fontWeight:"bold"}:{},children:e},c)}))," "]})},highlightMovieTextOnHover:function(e){n(parseInt(e.target.getAttribute("index")))}}}var ye=n(161),Se=n.n(ye);function Ce(e){var t=e.item,n=e.index,a=Object(l.useContext)(d),c=a.searchbarText,s=a.indexOfHighlightedMovie,r=we(),i=r.highligthText,o=r.highlightMovieTextOnHover,u=fe().selectedMovieInQuickSearch;return Object(p.jsx)(j.a,{exitBeforeEnter:!0,children:Object(p.jsx)(U.a.li,{className:"".concat(Se.a.PosterLi," ")+(s===n&&"active"),onClick:function(){return u(t.id)},onMouseEnter:o,index:n,initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{duration:S},children:Object(p.jsxs)("div",{className:"row",children:[Object(p.jsx)(z.a,{className:"col-lg-2 col-md-3 col-sm-4 col-3",width:"500",height:"750",opacityTransition:.5,src:t.poster?t.poster:K,alt:"poster ".concat(t.id)}),Object(p.jsx)("p",{className:"col-lg-10 col-md-9 col-sm-8 col-9",children:i(t.title,c,n)})]})},t.id)})}function Pe(){var e=Object(l.useContext)(d),t=e.searchbarText,n=e.pushToHistory,a=e.suggestions,c=e.showQuickSearchRes,s=e.setShowQuickSearchRes,r=e.indexOfHighlightedMovie,i=we().highlightMovieTextOnHover,o=Ne(a,5,800);return Object(p.jsxs)("ul",{className:"ResultsPC "+(c&&t&&"fadeIn"),children:[o.map((function(e,t){return Object(p.jsx)(Ce,{item:e,index:t})})),Object(p.jsxs)("li",{className:"showMore",children:[Object(p.jsx)("p",{className:"showMoreParagraph "+(5===r&&"active"),onMouseEnter:i,onClick:function(){return n("/")},children:"show more"}),Object(p.jsx)("img",{className:"closeImg",src:Oe,onClick:function(){return s(!1)},alt:"close search results"})]})]})}function Re(e){var t=Object(l.useContext)(d),n=t.suggestions,a=t.showQuickSearchRes;return Object(p.jsx)(j.a,{exitBeforeEnter:!0,children:Object(p.jsx)(U.a.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{duration:a?S:0,ease:"easeInOut"},children:e},n.length+a)})}function Ie(){var e=Object(l.useContext)(d),t=e.searchbarText,n=e.suggestions,a=e.showQuickSearchRes,c=e.setShowQuickSearchRes,s=function(e,t){var n=Object(l.useState)(!1),a=Object(u.a)(n,2),c=a[0],s=a[1];return Object(l.useEffect)((function(){if(""!==t){var n=setTimeout((function(){s(!0)}),e);return function(){return clearTimeout(n)}}s(!1)}),[t,e]),c}(1e3,t);return Object(p.jsx)("div",{className:"SearchbarResults",children:Re(Object(p.jsx)(p.Fragment,{children:n.length>0&&a?me.isMobile?Object(p.jsx)(ke,{}):Object(p.jsx)(Pe,{}):Object(p.jsx)(ge,{className:me.isMobile?"ResultsMobile":"ResultsPC",fadeInConditionsArr:[a,t,s],onClose:c,closeBtn:me.isMobile?"btn":"img"})}))})}function _e(){var e=Object(l.useContext)(d),t=e.location,n=e.searchbarText,a=e.setSearchbarText,c=e.onSearchbarTextChanging,s=function(){var e=Object(l.useContext)(d),t=e.suggestions,n=e.pushToHistory,a=e.showQuickSearchRes,c=e.setShowQuickSearchRes,s=e.indexOfHighlightedMovie,r=e.setIndexOfHighlightedMovie,i=fe().selectedMovieInQuickSearch;return A.a.config({up:function(){isNaN(s)?r(5):r(s<0?5:function(e){return e-1})},down:function(){isNaN(s)?r(0):r(s>5?0:function(e){return e+1})}}),function(e){13===(e.keyCode||e.which)&&(a||c(!0),a&&(5===s?n("/"):i(t[s].id)))}}(),r=function(){var e=Object(l.useContext)(d),t=e.searchbarText,n=e.showResInSearchBar,a=e.setShowQuickSearchRes,c=Object(l.useRef)();function s(e){c.current.contains(e.target)||a(!1)}return Object(l.useEffect)((function(){return document.addEventListener("mousedown",s),function(){document.removeEventListener("mousedown",s)}}),[]),{node:c,OnSearchBarClicked:function(){var e=Object(o.a)(i.a.mark((function e(c){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:a(!0),n(t);case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}}(),u=r.node,b=r.OnSearchBarClicked;return Object(p.jsxs)("div",{className:"NavSearchbar",ref:u,children:[Object(p.jsxs)("form",{onSubmit:function(e){return e.preventDefault()},children:[Object(p.jsx)(pe.DebounceInput,{debounceTimeout:250,onChange:c,type:"text",placeholder:"Search Movie",value:n,onClick:b,onKeyPress:s}),Object(p.jsx)("img",{src:Oe,onClick:function(){return a("")},alt:"close search"})]}),t.pathname.includes("movie")&&Object(p.jsx)(Ie,{})]})}function De(e){var t=e.openSidebar,n=e.gotoHome,a=e.gotoRegister,c=e.gotoLogin,s=e.gotoUserPanel,r=le(),i=r.user,o=r.handleLogout;return Object(p.jsx)("nav",{className:"TopBar",children:Object(p.jsxs)("div",{className:"TopBarContainer",children:[Object(p.jsx)(_e,{}),Object(p.jsx)("div",{className:"hamburgerIconContainer",children:Object(p.jsx)("img",{className:"hamburgerIcon",src:he,alt:"menuIcon",onClick:function(){return t()}})}),Object(p.jsxs)("ul",{className:"NavMenu",children:[Object(p.jsx)("li",{className:"NavItem",children:Object(p.jsx)("div",{className:"NavLink",onClick:function(){return n()},children:"Home"})}),Object(p.jsx)("li",{className:"NavItem",children:!i&&Object(p.jsx)("div",{className:"NavLink",onClick:function(){return a()},children:"Register"})}),Object(p.jsx)("li",{className:"NavItem",children:i&&Object(p.jsx)("div",{className:"NavLink",onClick:function(){return s()},children:"Profile"})})]}),Object(p.jsxs)("div",{className:"NavBtn",children:[!i&&Object(p.jsx)("div",{className:"NavBtnLink",onClick:function(){return c()},children:"login"}),i&&Object(p.jsx)("div",{className:"NavBtnLink",onClick:function(){return o()},children:"Logout"})]})]})})}n(210);function Te(e){var t=e.isOpen,n=e.close,a=e.gotoHome,c=e.gotoRegister,s=e.gotoLogin,r=e.gotoUserPanel,i=le(),o=i.user,u=i.handleLogout;return Object(p.jsxs)("nav",{className:"Sidebar "+(t&&"openSidebar"),children:[Object(p.jsx)("div",{className:"closeIconContainer",children:Object(p.jsx)("img",{src:Oe,className:"closeIcon",alt:"The Movie Database Logo",onClick:function(){return n()}})}),Object(p.jsxs)("div",{className:"sidebarWrapper",children:[Object(p.jsxs)("ul",{className:"sidebarMenu",children:[Object(p.jsx)("div",{className:"sidebarLink",onClick:function(){return a()},children:"Home"}),!o&&Object(p.jsx)("div",{className:"sidebarLink",onClick:function(){return c()},children:"Register"}),o&&Object(p.jsx)("div",{className:"sidebarLink",onClick:function(){return r()},children:"Profile"})]}),Object(p.jsxs)("div",{className:"sidebarBtnWrap",children:[!o&&Object(p.jsx)("div",{className:"sidebarBtnLink",onClick:function(){return s()},children:"Login"}),o&&Object(p.jsx)("div",{className:"sidebarBtnLink",onClick:function(){return u()},children:"Logout"})]})]})]})}var Le=n(39);function Me(){var e=Object(l.useContext)(d),t=e.pushToHistory,n=e.fetchPopularMoviesOnStartPage,a=e.setAllMoviesData,c=Object(l.useState)(!1),s=Object(u.a)(c,2),r=s[0],i=s[1],o=function(){a([]),n(),t("/"),i(!1)},b=function(){t(P),i(!1)},j=function(){t(C),i(!1)},m=function(){t(I),i(!1)};return Object(p.jsxs)(Le.a,{children:[Object(p.jsx)(Te,{isOpen:r,close:function(){return i(!1)},gotoHome:o,gotoRegister:b,gotoLogin:j,gotoUserPanel:m}),Object(p.jsx)(De,{openSidebar:function(){return i(!0)},gotoHome:o,gotoRegister:b,gotoLogin:j,gotoUserPanel:m})]})}var Ee=n(11),Be=n(23),He=n(32);n(309);function Fe(e){var t=e.children;return Object(p.jsx)("div",{className:"error",children:t})}function qe(e){var t=e.label,n=e.name,a=e.type,c=Object(He.a)(e,["label","name","type"]);return Object(p.jsxs)("div",{className:"formControl",children:[Object(p.jsx)("label",{htmlFor:n,children:t}),Object(p.jsx)(Ee.b,Object(s.a)({id:n,name:n,type:a},c)),Object(p.jsx)(Ee.a,{name:n,component:Fe})]})}function Qe(e){var t=e.label,n=e.name,a=e.options,c=Object(He.a)(e,["label","name","options"]);return Object(p.jsxs)("div",{className:"formControl",children:[Object(p.jsx)("label",{htmlFor:n,children:t}),Object(p.jsx)(Ee.b,Object(s.a)(Object(s.a)({as:"select",id:n,name:n},c),{},{children:a.map((function(e){return Object(p.jsx)("option",{value:e.value,children:e.key},e.value)}))})),Object(p.jsx)(Ee.a,{name:n,component:Fe})]})}function Ae(e){var t=e.label,n=e.name,a=Object(He.a)(e,["label","name"]);return Object(p.jsxs)("div",{className:"formControl",children:[Object(p.jsx)("label",{htmlFor:n,children:t}),Object(p.jsx)(Ee.b,Object(s.a)({as:"textarea",id:n,name:n},a)),Object(p.jsx)(Ee.a,{name:n,component:Fe})]})}function Ue(e){var t=e.label,n=e.name,a=e.options,c=Object(He.a)(e,["label","name","options"]);return Object(p.jsxs)("div",{className:"formControl",children:[Object(p.jsx)("label",{htmlFor:n,children:t}),Object(p.jsx)(Ee.b,Object(s.a)(Object(s.a)({name:n},c),{},{children:function(e){var t=e.field;return a.map((function(e){return Object(p.jsxs)("div",{className:"RadioBtnDiv",children:[Object(p.jsx)("label",{className:"RadioBtnLabel",htmlFor:e.value,children:e.key}),Object(p.jsx)("input",Object(s.a)(Object(s.a)({type:"radio",id:e.value},t),{},{value:e.value,checked:t.value===e.value}))]},e.key)}))}})),Object(p.jsx)(Ee.a,{name:n,component:Fe})]})}function We(e){var t=e.label,n=e.name,a=e.options,c=Object(He.a)(e,["label","name","options"]);return Object(p.jsxs)("div",{className:"formControl",children:[Object(p.jsx)("label",{htmlFor:n,children:t}),Object(p.jsx)(Ee.b,Object(s.a)(Object(s.a)({name:n},c),{},{children:function(e){var t=e.field;return a.map((function(e){return Object(p.jsxs)("div",{children:[Object(p.jsx)("input",Object(s.a)(Object(s.a)({type:"checkbox",id:e.value},t),{},{value:e.value,checked:t.value&&t.value.includes(e.value)})),Object(p.jsx)("label",{htmlFor:e.value,children:e.key})]},e.key)}))}})),Object(p.jsx)(Ee.a,{name:n,component:Fe})]})}function Ve(e){var t=e.control,n=Object(He.a)(e,["control"]);switch(t){case"input":return Object(p.jsx)(qe,Object(s.a)({},n));case"textarea":return Object(p.jsx)(Ae,Object(s.a)({},n));case"select":return Object(p.jsx)(Qe,Object(s.a)({},n));case"radio":return Object(p.jsx)(Ue,Object(s.a)({},n));case"checkbox":return Object(p.jsx)(We,Object(s.a)({},n));default:return null}}n(310);function ze(e){var t=e.submitStatus,n=e.message;return Object(p.jsxs)("div",{className:"OnSubmitMsg",children:["success"===t&&Object(p.jsx)("p",{className:"submitSuccess",children:n}),"error"===t&&Object(p.jsx)("p",{className:"submitError",children:n})]})}n(311);function Ke(){var e=Object(b.g)(),t=le().register,n=Object(l.useState)(),a=Object(u.a)(n,2),c=a[0],r=a[1],j=Be.a({email:Be.b().email("Invalid email format").required("Required"),username:Be.b().required("Required"),password:Be.b().required("Required").min(6)}),d=function(){var n=Object(o.a)(i.a.mark((function n(a,c){var s;return i.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r({}),console.log("Form values:",a),n.prev=2,n.next=5,t(a.email,a.password);case 5:return s=n.sent,n.prev=6,n.next=9,ie.doc(s.user.uid).set({username:a.username});case 9:e.push(I),n.next=15;break;case 12:n.prev=12,n.t0=n.catch(6),r({submitStatus:"error",message:n.t0.message});case 15:n.next=20;break;case 17:n.prev=17,n.t1=n.catch(2),r({submitStatus:"error",message:n.t1.message});case 20:c.setSubmitting(!1);case 21:case"end":return n.stop()}}),n,null,[[2,17],[6,12]])})));return function(e,t){return n.apply(this,arguments)}}();return Object(p.jsxs)("div",{className:"Register",children:[Object(p.jsx)("h2",{children:"Register"}),Object(p.jsx)(Ee.d,{initialValues:{email:"",username:"",password:""},validationSchema:j,onSubmit:d,enableReinitialize:!0,children:function(e){return Object(p.jsx)("div",{className:"FormContainer",children:Object(p.jsxs)(Ee.c,{className:"form",children:[Object(p.jsx)(Ve,{control:"input",type:"email",name:"email",label:"email"}),Object(p.jsx)(Ve,{control:"input",type:"text",name:"username",label:"username"}),Object(p.jsx)(Ve,{control:"input",type:"password",name:"password",label:"password"}),Object(p.jsx)("button",{className:"btn btn-success btn-green",type:"submit",disabled:!e.isValid||e.isSubmitting,children:"Register"}),Object(p.jsx)(ze,Object(s.a)({},c))]})})}}),Object(p.jsx)("div",{className:"border-top pt-3",children:Object(p.jsx)("button",{className:"btn btn-dark w-100",onClick:function(){return e.push(C)},children:"Have an account? Login"})})]})}n(312);function Ge(){var e=Object(b.g)(),t=le().login,n=Object(l.useState)(),a=Object(u.a)(n,2),c=a[0],r=a[1],j=Be.a({email:Be.b().email("Invalid email format").required("Required"),password:Be.b().required("Required").min(6)}),d=function(){var n=Object(o.a)(i.a.mark((function n(a,c){return i.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r({}),console.log("Form values:",a),n.prev=2,n.next=5,t(a.email,a.password);case 5:n.sent,e.push(I),n.next=12;break;case 9:n.prev=9,n.t0=n.catch(2),r({submitStatus:"error",message:n.t0.message});case 12:c.setSubmitting(!1);case 13:case"end":return n.stop()}}),n,null,[[2,9]])})));return function(e,t){return n.apply(this,arguments)}}();return Object(p.jsxs)("div",{className:"Login",children:[Object(p.jsx)("h2",{children:"Login"}),Object(p.jsx)(Ee.d,{initialValues:{email:"",password:""},validationSchema:j,onSubmit:d,enableReinitialize:!0,children:function(e){return Object(p.jsx)("div",{className:"FormContainer",children:Object(p.jsxs)(Ee.c,{className:"form",children:[Object(p.jsx)(Ve,{control:"input",type:"email",name:"email",label:"email"}),Object(p.jsx)(Ve,{control:"input",type:"password",name:"password",label:"password"}),Object(p.jsx)("button",{className:"btn btn-success btn-green",type:"submit",disabled:!e.isValid||e.isSubmitting,children:"Log In"}),Object(p.jsx)(ze,Object(s.a)({},c))]})})}}),Object(p.jsx)("button",{className:"btn btn-link forgot w-100 mb-1",onClick:function(){return e.push(R)},children:"Forgot password?"}),Object(p.jsx)("div",{className:"border-top pt-3",children:Object(p.jsx)("button",{className:"btn btn-dark w-100",onClick:function(){return e.push(P)},children:"Need an account? Register"})})]})}var Ye=n(58),Xe=n.n(Ye);function Ze(){var e=Object(b.g)(),t=le(),n=t.user,a=t.handleLogout,c=t.userData,s=t.loadUserData,r=Object(l.useState)(!0),i=Object(u.a)(r,2),o=i[0],j=i[1];return Object(l.useEffect)((function(){s(),c&&j(!1)}),[]),Object(p.jsx)("div",{className:Xe.a.Profile,children:!o&&Object(p.jsx)("div",{className:Xe.a.container,children:Object(p.jsxs)("div",{className:Xe.a.profileCard,children:[Object(p.jsx)("h2",{children:"Profile"}),Object(p.jsxs)("div",{className:Xe.a.userData,children:[Object(p.jsxs)("p",{children:[Object(p.jsx)("strong",{children:"Email:"})," ",n.email]}),Object(p.jsxs)("p",{children:[Object(p.jsx)("strong",{children:"Username:"})," ",c.username]})]}),Object(p.jsxs)("div",{className:Xe.a.buttons,children:[Object(p.jsx)("button",{className:"".concat(Xe.a.button," btn btn-success"),onClick:function(){return e.push(_)},children:"Update Profile"}),Object(p.jsx)("button",{className:"".concat(Xe.a.button," btn btn-dark"),onClick:function(){return a()},children:"Log out"})]})]})})})}n(313);function Je(){var e=Object(b.g)(),t=le().resetPassword,n=Object(l.useState)(),a=Object(u.a)(n,2),c=a[0],r=a[1],j=Be.a({email:Be.b().email("Invalid email format").required("Required")}),d=function(){var e=Object(o.a)(i.a.mark((function e(n,a){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r({}),console.log("Form values:",n),e.prev=2,e.next=5,t(n.email);case 5:r({submitStatus:"success",message:"Instructon for reseting your password were send to your email"}),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(2),r({submitStatus:"error",message:e.t0.message});case 11:a.setSubmitting(!1);case 12:case"end":return e.stop()}}),e,null,[[2,8]])})));return function(t,n){return e.apply(this,arguments)}}();return Object(p.jsxs)("div",{className:"ForgotPassword",children:[Object(p.jsx)("h2",{children:"Password Reset"}),Object(p.jsx)(Ee.d,{initialValues:{email:""},validationSchema:j,onSubmit:d,enableReinitialize:!0,children:function(e){return Object(p.jsx)("div",{className:"FormContainer",children:Object(p.jsxs)(Ee.c,{className:"form",children:[Object(p.jsx)(Ve,{control:"input",type:"email",name:"email",label:"email"}),Object(p.jsx)("button",{className:"btn btn-success btn-green",type:"submit",disabled:!e.isValid||e.isSubmitting,children:"Reset Password"}),Object(p.jsx)(ze,Object(s.a)({},c))]})})}}),Object(p.jsx)("button",{className:"btn btn-link forgot w-100 mb-1",onClick:function(){return e.push(C)},children:"Login?"}),Object(p.jsx)("div",{className:"border-top pt-3",children:Object(p.jsx)("button",{className:"btn btn-dark w-100",onClick:function(){return e.push(P)},children:"Need an account? Register"})})]})}n(314);function $e(){var e=Object(b.g)(),t=le(),n=t.user,a=t.userData,c=t.updatePassword,r=t.updateEmail,j=Object(l.useState)(),d=Object(u.a)(j,2),m=d[0],h=d[1],O=Object(l.useState)(),f=Object(u.a)(O,2),x=f[0],v=f[1],g={email:n.email,username:a.username,password:""},N=Be.a({email:Be.b().email("Invalid email format").required("Required"),username:Be.b().required("Required"),password:Be.b().min(6)}),k=function(){var t=Object(o.a)(i.a.mark((function t(s,o){return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(h({}),v({}),console.log("Form values:",s),s.email===n.email){t.next=13;break}return t.prev=4,t.next=7,r(s.email);case 7:e.push(I),t.next=13;break;case 10:t.prev=10,t.t0=t.catch(4),h({submitStatus:"error",message:"Failed to update email. Email is probably used by another user."});case 13:if(!s.password){t.next=23;break}return t.prev=14,t.next=17,c(s.password);case 17:e.push(I),t.next=23;break;case 20:t.prev=20,t.t1=t.catch(14),v({submitStatus:"error",message:"Failed to update password."});case 23:if(s.email===n.email){t.next=33;break}return t.prev=24,t.next=27,r(s.email);case 27:e.push(I),t.next=33;break;case 30:t.prev=30,t.t2=t.catch(24),h({submitStatus:"error",message:"Failed to update email. Email is probably used by another user."});case 33:if(s.username===a.username){t.next=43;break}return t.prev=34,t.next=37,ie.doc(n.uid).set({username:s.username},{merge:!0});case 37:e.push(I),t.next=43;break;case 40:t.prev=40,t.t3=t.catch(34),console.log(t.t3);case 43:o.setSubmitting(!1);case 44:case"end":return t.stop()}}),t,null,[[4,10],[14,20],[24,30],[34,40]])})));return function(e,n){return t.apply(this,arguments)}}();return Object(p.jsxs)("div",{className:"UpdateProfile",children:[Object(p.jsx)("h2",{children:"Update Profile"}),Object(p.jsx)(Ee.d,{initialValues:g,validationSchema:N,onSubmit:k,enableReinitialize:!0,children:function(e){return Object(p.jsx)("div",{className:"FormContainer",children:Object(p.jsxs)(Ee.c,{className:"form",children:[Object(p.jsx)(Ve,{control:"input",type:"email",name:"email",label:"email"}),Object(p.jsx)(Ve,{control:"input",type:"text",name:"username",label:"username"}),Object(p.jsx)(Ve,{control:"input",type:"password",name:"password",label:"password",placeholder:"Leave blank to keep the same"}),Object(p.jsx)("button",{className:"btn btn-success btn-green",type:"submit",disabled:!e.isValid||e.isSubmitting,children:"Update"}),Object(p.jsx)(ze,Object(s.a)({},m)),Object(p.jsx)(ze,Object(s.a)({},x))]})})}}),Object(p.jsx)("div",{className:"border-top pt-3",children:Object(p.jsx)("button",{className:"btn btn-dark w-100",onClick:function(){return e.push(I)},children:"Cancel"})})]})}function et(e){var t=e.component,n=Object(He.a)(e,["component"]),a=le().user;return Object(p.jsx)(b.b,Object(s.a)(Object(s.a)({},n),{},{render:function(e){return a?Object(p.jsx)(t,Object(s.a)({},e)):Object(p.jsx)(b.a,{to:"/login"})}}))}function tt(){var e=te().movieID,t=Object(b.h)(),n=Object(b.g)(),a=Object(l.useState)([]),c=Object(u.a)(a,2),r=c[0],m=c[1],h=Object(l.useState)(""),O=Object(u.a)(h,2),x=O[0],v=O[1];function g(){return N.apply(this,arguments)}function N(){return(N=Object(o.a)(i.a.mark((function e(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=m,e.next=3,L(w);case 3:e.t1=e.sent,(0,e.t0)(e.t1);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}Object(l.useEffect)((function(){"/"!==t.pathname||x?""===x&&"/"!==t.pathname&&setTimeout((function(){m([])}),600):g()}),[x,t.pathname]);var k=Object(l.useState)([]),y=Object(u.a)(k,2),S=y[0],T=y[1],M=Object(l.useState)(me.isMobile?9:12),B=Object(u.a)(M,2),F=B[0],q=B[1],Q=function(){var e=Object(o.a)(i.a.mark((function e(t){var n,a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(q(me.isMobile?6:12),!(t.length>=1)){e.next=10;break}return e.next=4,E(H(t));case 4:return n=e.sent,e.next=7,L(n);case 7:a=e.sent,T(n),m(a);case 10:me.isMobile&&setTimeout((function(){q(9)}),1e3);case 11:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),U=Object(l.useState)(!1),W=Object(u.a)(U,2),V=W[0],z=W[1],K=Object(l.useState)(),G=Object(u.a)(K,2),X=G[0],Z=G[1];return Object(l.useEffect)((function(){console.log({suggestions:r})}),[r]),Object(p.jsx)("div",{children:Object(p.jsx)("div",Object(s.a)(Object(s.a)({id:"app"},A.a.events),{},{tabIndex:"1",children:Object(p.jsx)(d.Provider,{value:{searchbarText:x,setSearchbarText:v,suggestions:r,setSuggestions:m,onSearchbarTextChanging:function(e){var t=e.target.value.replace(/[^\w\s]/gi,"");v(t),Q(t)},allMoviesData:S,setAllMoviesData:T,fetchPopularMoviesOnStartPage:g,showResInSearchBar:Q,history:n,location:t,pushToHistory:function(e){return n.push(e)},dispPostersNum:F,setDispPostersNum:q,showQuickSearchRes:V,setShowQuickSearchRes:z,indexOfHighlightedMovie:X,setIndexOfHighlightedMovie:Z},children:Object(p.jsxs)(be,{children:[Object(p.jsx)(Me,{}),Object(p.jsx)(f,{children:Object(p.jsx)(j.a,{exitBeforeEnter:!0,children:Object(p.jsxs)(b.d,{location:t,children:[Object(p.jsx)(b.b,{exact:!0,path:"/",render:function(){return Object(p.jsx)(Y,{})}}),Object(p.jsx)(b.b,{exact:!0,path:"".concat("/movie/",":").concat(e),render:function(){return Object(p.jsx)(de,{})}}),Object(p.jsx)(b.b,{exact:!0,path:P,render:function(){return Object(p.jsx)(Ke,{})}}),Object(p.jsx)(b.b,{exact:!0,path:C,render:function(){return Object(p.jsx)(Ge,{})}}),Object(p.jsx)(b.b,{exact:!0,path:R,render:function(){return Object(p.jsx)(Je,{})}}),Object(p.jsx)(et,{exact:!0,path:I,component:Ze}),Object(p.jsx)(et,{exact:!0,path:_,component:$e})]},D(t))})})]})})}))})}n(315);c.a.render(Object(p.jsx)(Le.a,{basename:"/movie-search-app",children:Object(p.jsx)(ne,{children:Object(p.jsx)(tt,{})})}),document.getElementById("root"))},58:function(e,t,n){e.exports={Profile:"Profile_Profile__TZNBi",container:"Profile_container__1K79n",profileCard:"Profile_profileCard__2rXbq",userData:"Profile_userData__PXnlA",buttons:"Profile_buttons__29010",button:"Profile_button__58ype"}}},[[316,1,2]]]);
//# sourceMappingURL=main.f2f4db05.chunk.js.map