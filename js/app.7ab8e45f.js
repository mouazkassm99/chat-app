(function(A){function t(t){for(var n,s,a=t[0],o=t[1],c=t[2],d=0,u=[];d<a.length;d++)s=a[d],Object.prototype.hasOwnProperty.call(i,s)&&i[s]&&u.push(i[s][0]),i[s]=0;for(n in o)Object.prototype.hasOwnProperty.call(o,n)&&(A[n]=o[n]);l&&l(t);while(u.length)u.shift()();return r.push.apply(r,c||[]),e()}function e(){for(var A,t=0;t<r.length;t++){for(var e=r[t],n=!0,a=1;a<e.length;a++){var o=e[a];0!==i[o]&&(n=!1)}n&&(r.splice(t--,1),A=s(s.s=e[0]))}return A}var n={},i={app:0},r=[];function s(t){if(n[t])return n[t].exports;var e=n[t]={i:t,l:!1,exports:{}};return A[t].call(e.exports,e,e.exports,s),e.l=!0,e.exports}s.m=A,s.c=n,s.d=function(A,t,e){s.o(A,t)||Object.defineProperty(A,t,{enumerable:!0,get:e})},s.r=function(A){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(A,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(A,"__esModule",{value:!0})},s.t=function(A,t){if(1&t&&(A=s(A)),8&t)return A;if(4&t&&"object"===typeof A&&A&&A.__esModule)return A;var e=Object.create(null);if(s.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:A}),2&t&&"string"!=typeof A)for(var n in A)s.d(e,n,function(t){return A[t]}.bind(null,n));return e},s.n=function(A){var t=A&&A.__esModule?function(){return A["default"]}:function(){return A};return s.d(t,"a",t),t},s.o=function(A,t){return Object.prototype.hasOwnProperty.call(A,t)},s.p="/facebook-clone/";var a=window["webpackJsonp"]=window["webpackJsonp"]||[],o=a.push.bind(a);a.push=t,a=a.slice();for(var c=0;c<a.length;c++)t(a[c]);var l=o;r.push([0,"chunk-vendors"]),e()})({0:function(A,t,e){A.exports=e("56d7")},"00f4":function(A,t,e){},1993:function(A,t,e){},"3fcf":function(A,t,e){"use strict";e("aa84")},"49d9":function(A,t,e){"use strict";e("9762")},"56d7":function(A,t,e){"use strict";e.r(t);e("e260"),e("e6cf"),e("cca6"),e("a79d");var n=e("2b0e"),i=function(){var A=this,t=A.$createElement,e=A._self._c||t;return e("div",{attrs:{id:"app"}},[e("Navbar"),e("Content")],1)},r=[],s=function(){var A=this,t=A.$createElement,e=A._self._c||t;return e("nav",[e("div",{staticClass:"left-side",on:{click:A.reload}},[e("img",{attrs:{src:"https://play-lh.googleusercontent.com/6Sp9grilVISOGqi92M26BH49Tj6o_VX_gByA4u1rl8kAvqOoY9n5EzDEHcFEnGHlzg",alt:""}}),e("input",{attrs:{id:"search",type:"text",placeholder:"Search anything ..."}})]),e("div",{staticClass:"middle-side"},[e("button",{staticClass:"home active",on:{click:A.scrollTop}},[e("fa-icon",{attrs:{icon:"house-user",size:"1x"}})],1),e("button",[e("fa-icon",{attrs:{icon:"tv",size:"1x"}})],1),e("button",[e("fa-icon",{attrs:{icon:"users",size:"1x"}})],1),e("button",[e("fa-icon",{attrs:{icon:"dice-six",size:"1x"}})],1)]),e("div",{staticClass:"right-side"},[A._m(0),e("button",[e("fa-icon",{attrs:{icon:"plus"}})],1),e("button",[e("fa-icon",{attrs:{icon:"comment-dots"}})],1),e("button",[e("fa-icon",{attrs:{icon:"bell"}})],1),e("button",[e("fa-icon",{attrs:{icon:"arrow-down"}})],1)])])},a=[function(){var A=this,t=A.$createElement,e=A._self._c||t;return e("div",{attrs:{id:"account"}},[e("img",{attrs:{src:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxQHBg0QEBIPEA4QEBEQFRgQDRcQExAaFhUWFiATFRUYHSggGB4lGxgWITEhJSkrLi4uFx8zODMsNygtLisBCgoKDQ0NFQ0NDy0ZFRkrLSs3Ky0tLisrKzctNy0rNystLS0rKysrKy0rLSsrKysrKysrKysrKysrKysrKysrK//AABEIAOEA4QMBIgACEQEDEQH/xAAbAAEAAwEBAQEAAAAAAAAAAAAAAwQFAgYBB//EADQQAQACAAMFBQcCBwEAAAAAAAABAgMEEQUSITFhQVFxgbETIlKRocHRFDQyQnKCkuHxJP/EABYBAQEBAAAAAAAAAAAAAAAAAAABAv/EABYRAQEBAAAAAAAAAAAAAAAAAAABEf/aAAwDAQACEQMRAD8A/TAGkAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAAAAAAHVKTiW0iJmegOX2I1nSOM9F2mzL25zWv1lo5fLVy9eEce2Z5yauMzC2de8cdKx15/KE9dld9p8qtITVZ07Kj4p/wAUd9l2jlaJ8Y0aoaMHFyl8LnWdO+OMIHpVTNZGuNEzHu2747fGDUxijvFwpwbzW0aT69YcKgAAAAAAAAAAAAAAAAAA3Mjl/YYMfFPGfwx8vTfzFI77Q9ClWACKAAAAAAgzmXjMYWn80cpYUxuzMTzjg9IyNq4W5jxaOVo+sLEqiAqAAAAAAAAAAAAAAAALOz41zlPP0luMPZv7yvn6S3EqwARQAAAAABS2rTeyuvwzE/b7rqttGf8Ax316esAwwGmQAAAAAAAAAAAAAAAFrZ37ynn6S22FkJ0zlPH7S3UqwARQAAAAABibStM5u0azpGmnHlwhtsHPTrnL+P2WCABWQAAAAAAAAAAAAAAAE+SiZzNJiJmItHZybyHJ03MtSI7on5pkrQAgAAAAAAMDNxP6m+sTGtp5xz4t9U2nTeylp7Y0mPmsGKArIAAAAAAAAAAAAAAADc2fffylOnD5LLN2PicL1/uj0/DSZaAAAAAAAAFLa193LafFMR8uK6ydr4m9jVr8MeqwUAFZAAAAAAAAABQAAAAAEmXxpwMWLR/1t5XH/UYMW005xprrowGnsfE4Xr/d9vwlGkAigAAAAAIM3mP02Frprx056MPExJxMSbTzmdWhti/GlfGft+Wa1EAAAAAAAAAAABAAAAAABNlMb2GPW3ZynwlCA9LE6wKWysSb5eYn+WdIXWWgAAAAFbaN5plLadI+YMrOYvtszaezlHhCAGkABAAAAAAAAAAAAAAAAAAGxsmNMtPW0+kLqts+m5k6ddZ+c6rLLQAAAArbRjXJ38p+sLKPMU38C8d9Zj6A88A0yAAAAAAAAAAAAAAAAAAOqV37xEc5nQpSb20iJmejVyGS9jO9b+L0FXaxu1iO6NH0GVAAAAAAefzWH7LMWjrrHhKJt57KfqK6xwtHLr0lj4mHOFbS0TEtRHAAgAAAAAAAAAAAAPsRvTpHGei9l9mzfjf3Y7o5/wChVGtd+2kRMz0X8vsybcbzpHdHP5tHBwK4NdKxEes+aRNMR4WDXBrpWIhICKAAAAAAAAOcTDjErpaImOroBmZjZnbSfKftLPxMOcO2lomJ6vRuMTDjFrpaImOq6jzo0cxszTjSdek/aVC9JpbSYmJ6qOQBAAAAAH2OMg+LeVyNsbjPu1+s+ELeSyG5EWvxt2R2R+ZX01cRYGXrgR7sce+eMz5pQRQAAAAAAAAAAAAAAABHjYNcaulo19Y80gDIzOzpw+Nfej6x+VF6VTzmRjHiZrwv9J8VlTGMOrVmlpieEw5VAABpbKy2vvz4V/LOrG9aIjnM6PRYVPZ4cVjlEaFWOgGVAAAAAAAAAAAAAAAAAAAAAAUdqZffw9+P4q8+sMh6WY1h57Hw/ZY1q90rEqMBUTZX9zh/1R6t8EqwARQAAAAAAAAAAAAAAAAAAAAABibS/eW8vSAWJVUBUf/Z",alt:""}}),e("span",[A._v("Mouaz")])])}],o={methods:{scrollTop:function(){this.$forceUpdate(),location.reload()},reload:function(){location.reload()}}},c=o,l=(e("bdc3"),e("2877")),d=Object(l["a"])(c,s,a,!1,null,"b03ae96e",null),u=d.exports,f=function(){var A=this,t=A.$createElement,e=A._self._c||t;return e("div",{attrs:{id:"main-content"}},[e("div",{staticClass:"left",attrs:{id:"left"}},[e("Leftside")],1),e("div",{staticClass:"middle",attrs:{id:"middle"}},[e("Middle")],1),e("div",{staticClass:"right",attrs:{id:"right"}},[e("Rightside")],1)])},p=[],m=function(){var A=this,t=A.$createElement,e=A._self._c||t;return e("div",[e("ul",[A._m(0),e("li",[e("div",{staticClass:"icon"},[e("fa-icon",{attrs:{icon:"user-friends",size:"1x"}})],1),e("span",[A._v("COVID 19 Information Center")])]),e("li",[e("div",{staticClass:"icon"},[e("fa-icon",{attrs:{icon:"shield-virus",size:"1x"}})],1),e("span",[A._v("Friends")])]),e("li",[e("div",{staticClass:"icon"},[e("fa-icon",{attrs:{icon:"users",size:"1x"}})],1),e("span",[A._v("Groups")])]),e("li",[e("div",{staticClass:"icon"},[e("fa-icon",{attrs:{icon:"video",size:"1x"}})],1),e("span",[A._v("Videos")])])]),e("hr")])},v=[function(){var A=this,t=A.$createElement,e=A._self._c||t;return e("li",[e("div",{attrs:{id:"account"}},[e("img",{attrs:{src:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxQHBg0QEBIPEA4QEBEQFRgQDRcQExAaFhUWFiATFRUYHSggGB4lGxgWITEhJSkrLi4uFx8zODMsNygtLisBCgoKDQ0NFQ0NDy0ZFRkrLSs3Ky0tLisrKzctNy0rNystLS0rKysrKy0rLSsrKysrKysrKysrKysrKysrKysrK//AABEIAOEA4QMBIgACEQEDEQH/xAAbAAEAAwEBAQEAAAAAAAAAAAAAAwQFAgYBB//EADQQAQACAAMFBQcCBwEAAAAAAAABAgMEEQUSITFhQVFxgbETIlKRocHRFDQyQnKCkuHxJP/EABYBAQEBAAAAAAAAAAAAAAAAAAABAv/EABYRAQEBAAAAAAAAAAAAAAAAAAABEf/aAAwDAQACEQMRAD8A/TAGkAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAAAAAAHVKTiW0iJmegOX2I1nSOM9F2mzL25zWv1lo5fLVy9eEce2Z5yauMzC2de8cdKx15/KE9dld9p8qtITVZ07Kj4p/wAUd9l2jlaJ8Y0aoaMHFyl8LnWdO+OMIHpVTNZGuNEzHu2747fGDUxijvFwpwbzW0aT69YcKgAAAAAAAAAAAAAAAAAA3Mjl/YYMfFPGfwx8vTfzFI77Q9ClWACKAAAAAAgzmXjMYWn80cpYUxuzMTzjg9IyNq4W5jxaOVo+sLEqiAqAAAAAAAAAAAAAAAALOz41zlPP0luMPZv7yvn6S3EqwARQAAAAABS2rTeyuvwzE/b7rqttGf8Ax316esAwwGmQAAAAAAAAAAAAAAAFrZ37ynn6S22FkJ0zlPH7S3UqwARQAAAAABibStM5u0azpGmnHlwhtsHPTrnL+P2WCABWQAAAAAAAAAAAAAAAE+SiZzNJiJmItHZybyHJ03MtSI7on5pkrQAgAAAAAAMDNxP6m+sTGtp5xz4t9U2nTeylp7Y0mPmsGKArIAAAAAAAAAAAAAAADc2fffylOnD5LLN2PicL1/uj0/DSZaAAAAAAAAFLa193LafFMR8uK6ydr4m9jVr8MeqwUAFZAAAAAAAAABQAAAAAEmXxpwMWLR/1t5XH/UYMW005xprrowGnsfE4Xr/d9vwlGkAigAAAAAIM3mP02Frprx056MPExJxMSbTzmdWhti/GlfGft+Wa1EAAAAAAAAAAABAAAAAABNlMb2GPW3ZynwlCA9LE6wKWysSb5eYn+WdIXWWgAAAAFbaN5plLadI+YMrOYvtszaezlHhCAGkABAAAAAAAAAAAAAAAAAAGxsmNMtPW0+kLqts+m5k6ddZ+c6rLLQAAAArbRjXJ38p+sLKPMU38C8d9Zj6A88A0yAAAAAAAAAAAAAAAAAAOqV37xEc5nQpSb20iJmejVyGS9jO9b+L0FXaxu1iO6NH0GVAAAAAAefzWH7LMWjrrHhKJt57KfqK6xwtHLr0lj4mHOFbS0TEtRHAAgAAAAAAAAAAAAPsRvTpHGei9l9mzfjf3Y7o5/wChVGtd+2kRMz0X8vsybcbzpHdHP5tHBwK4NdKxEes+aRNMR4WDXBrpWIhICKAAAAAAAAOcTDjErpaImOroBmZjZnbSfKftLPxMOcO2lomJ6vRuMTDjFrpaImOq6jzo0cxszTjSdek/aVC9JpbSYmJ6qOQBAAAAAH2OMg+LeVyNsbjPu1+s+ELeSyG5EWvxt2R2R+ZX01cRYGXrgR7sce+eMz5pQRQAAAAAAAAAAAAAAABHjYNcaulo19Y80gDIzOzpw+Nfej6x+VF6VTzmRjHiZrwv9J8VlTGMOrVmlpieEw5VAABpbKy2vvz4V/LOrG9aIjnM6PRYVPZ4cVjlEaFWOgGVAAAAAAAAAAAAAAAAAAAAAAUdqZffw9+P4q8+sMh6WY1h57Hw/ZY1q90rEqMBUTZX9zh/1R6t8EqwARQAAAAAAAAAAAAAAAAAAAAABibS/eW8vSAWJVUBUf/Z",alt:""}}),e("span",[A._v("Mouaz Al-Kassm")])])])}],b=(e("ba09"),{}),g=Object(l["a"])(b,m,v,!1,null,"39950583",null),h=g.exports,E=function(){var A=this,t=A.$createElement,e=A._self._c||t;return e("div",{attrs:{id:"right-side"}},[A._m(0),e("ul",[A.loading?e("div",{staticClass:"spinner"},[e("half-circle-spinner",{attrs:{"animation-duration":1e3,size:60,color:"#3496ff"}})],1):A._e(),A._l(this.friends,(function(A){return e("chat-person",{key:A.username,attrs:{friend:A,online:"true"}})}))],2)])},y=[function(){var A=this,t=A.$createElement,e=A._self._c||t;return e("div",{attrs:{id:"right-side-header"}},[e("p",[A._v("Contacts")])])}],M=function(){var A=this,t=A.$createElement,e=A._self._c||t;return e("li",[e("div",{staticClass:"img"},[e("img",{attrs:{src:this.friend.picture,alt:""}}),e("div",{class:{online:A.isOnline}})]),e("span",[A._v(A._s(A.friendName))])])},w=[],x={props:["friend","online"],data:function(){return{}},computed:{isOnline:function(){return this.online},friendName:function(){return this.friend.firstName+" "+this.friend.lastName}}},B=x,Q=(e("49d9"),Object(l["a"])(B,M,w,!1,null,"2c57cf06",null)),z=Q.exports,j=e("bc3a"),O=e.n(j),L=e("4583"),S="5fd9031380fb23d9b9425442",H="https://dummyapi.io/data/api",K={data:function(){return{friends:[],loading:!0}},beforeMount:function(){this.getFriends()},methods:{getFriends:function(){var A=this;O.a.get("".concat(H,"/user"),{headers:{"app-id":S}}).then((function(t){var e=t.data;A.friends=e.data,console.log(e.data),A.loading=!1})).catch(console.error)}},components:{ChatPerson:z,HalfCircleSpinner:L["a"]}},F=K,P=(e("7f2a"),Object(l["a"])(F,E,y,!1,null,"0deb0aa4",null)),W=P.exports,R=function(){var A=this,t=A.$createElement,e=A._self._c||t;return e("div",{attrs:{id:"posts-wrapper"}},[A.loading?e("div",{staticClass:"spinner"},[e("half-circle-spinner",{attrs:{"animation-duration":1e3,size:60,color:"#3496ff"}})],1):A._e(),A.loading?A._e():e("div",A._l(A.posts,(function(A){return e("Post",{key:A.id,attrs:{post:A}})})),1)])},_=[],G=function(){var A=this,t=A.$createElement,e=A._self._c||t;return e("div",{attrs:{id:"post"}},[e("div",{attrs:{id:"post-header"}},[e("div",{attrs:{id:"post-user-img"}},[e("img",{attrs:{src:A.post.owner.picture,alt:""}})]),e("div",{attrs:{id:"post-user-details"}},[e("span",{attrs:{id:"name"}},[A._v(A._s(A.postOwner))]),e("div",{attrs:{id:"date"}},[A._v(A._s(A.postDate))])]),e("div",{attrs:{id:"post-more"}},[e("fa-icon",{attrs:{icon:"caret-down"}})],1)]),e("div",{attrs:{id:"post-body"}},[e("div",{attrs:{id:"body-text"}},[A._v(" "+A._s(A.post.text)+" ")]),A.post.image?e("div",{attrs:{id:"body-img"}},[e("img",{attrs:{src:A.post.image}})]):A._e()]),e("div",{attrs:{id:"post-info"}},[e("p",{attrs:{id:"number-of-likes"}},[e("fa-icon",{attrs:{icon:"thumbs-up",id:"thumbs-up"}}),A._v(" "+A._s(A.post.likes)+" people liked this ")],1),e("p",{attrs:{id:"number-of-comments"}},[A._v(" 69 comments ")])]),e("div",{attrs:{id:"post-footer"}},[e("button",{attrs:{id:"like"},on:{click:A.likePost}},[A._v("Like")]),e("button",{attrs:{id:"comment"}},[A._v("Comment")]),e("button",{attrs:{id:"share"}},[A._v("Share")])])])},C=[],T=e("53ca"),k={props:["post"],data:function(){return{liked:!1}},created:function(){},methods:{likePost:function(A){var t=A.target;!1===this.liked?(t.style.color="rgb(18,156,247)",t.style.fontWeight="bold",this.liked=!0,this.post.likes+=1):!0===this.liked&&(t.style.color="gray",t.style.fontWeight="400",this.liked=!1,this.post.likes-=1)}},computed:{postDate:function(){var A=window.navigator.userLanguage||window.navigator.language,t=new Date(this.post.publishDate);return console.log(Object(T["a"])(t)),t.toLocaleDateString(A,{hour:"2-digit",minute:"2-digit"})},postOwner:function(){return this.post.owner.firstName+" "+this.post.owner.lastName}}},V=k,I=(e("3fcf"),Object(l["a"])(V,G,C,!1,null,"c1e32496",null)),N=I.exports,Y="5fd9031380fb23d9b9425442",Z="https://dummyapi.io/data/api",D={data:function(){return{posts:[],loading:!0}},beforeMount:function(){this.getPosts()},methods:{getPosts:function(){var A=this;O.a.get("".concat(Z,"/post"),{headers:{"app-id":Y}}).then((function(t){var e=t.data;A.posts=e.data,console.log(e.data),A.loading=!1})).catch(console.error)}},components:{Post:N,HalfCircleSpinner:L["a"]}},q=D,J=(e("ed13"),Object(l["a"])(q,R,_,!1,null,"0c050c6c",null)),U=J.exports,X={components:{Leftside:h,Rightside:W,Middle:U}},$=X,AA=(e("db46"),Object(l["a"])($,f,p,!1,null,"32ce2b7b",null)),tA=AA.exports,eA={components:{Navbar:u,Content:tA}},nA=eA,iA=(e("ac83"),Object(l["a"])(nA,i,r,!1,null,"794826fe",null)),rA=iA.exports,sA=e("a18c"),aA=e.n(sA),oA=e("2f62");n["default"].use(oA["a"]);var cA=new oA["a"].Store({state:{},mutations:{},actions:{},modules:{}}),lA=e("5f5b"),dA=e("ecee"),uA=e("ad3d"),fA=e("c074");dA["c"].add(fA["b"],fA["d"],fA["a"],fA["g"],fA["l"]),dA["c"].add(fA["f"],fA["k"],fA["m"],fA["e"]),dA["c"].add(fA["h"],fA["i"],fA["n"],fA["o"],fA["j"],fA["c"]),n["default"].component("fa-icon",uA["a"]),n["default"].use(lA["a"]),n["default"].config.productionTip=!1,new n["default"]({router:aA.a,store:cA,render:function(A){return A(rA)}}).$mount("#app")},"7ed8":function(A,t,e){},"7f2a":function(A,t,e){"use strict";e("1993")},"80d5":function(A,t,e){},"8bf9":function(A,t,e){},9762:function(A,t,e){},a18c:function(A,t){},aa84:function(A,t,e){},ac83:function(A,t,e){"use strict";e("80d5")},ba09:function(A,t,e){"use strict";e("00f4")},bdc3:function(A,t,e){"use strict";e("7ed8")},cdbd:function(A,t,e){},db46:function(A,t,e){"use strict";e("8bf9")},ed13:function(A,t,e){"use strict";e("cdbd")}});
//# sourceMappingURL=app.7ab8e45f.js.map