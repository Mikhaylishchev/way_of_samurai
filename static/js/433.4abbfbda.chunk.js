"use strict";(self.webpackChunkthe_way_of_samurai=self.webpackChunkthe_way_of_samurai||[]).push([[433],{8433:function(e,n,r){r.r(n),r.d(n,{default:function(){return H}});var t=r(5671),s=r(3144),o=r(136),u=r(5716),i=r(2791),a=r(3646),l=r(364),c=r(5987),f="Paginator_pageNum__MmTel",p="Paginator_pagesNums__RuAiN",g="Paginator_selectedPageNum__MwneZ",h=r(184),v=function(e){for(var n=Math.ceil(e.usersAmount/e.pageSize),r=[],t=1;t<=n;t++)r.push(t);return(0,h.jsx)("div",{className:p,children:r.map((function(n,r){return(0,h.jsx)("span",{className:e.currentPage===n?g:f,onClick:function(r){r.preventDefault(),e.changingPage(n)},children:n},r)}))})},d="User_friendsWrapper__22ipF",m="User_avatar__TRmug",w="User_information__YaxPN",P="User_name__TRSbP",_="User_location__kWyH-",y="User_status__1s-QV",j="User_followBtn__l2Srs",x=r(3504),A=function(e){var n=e.user,r=e.isAuth,t=e.isFollowingInProcess,s=e.unfollow,o=e.follow;return(0,h.jsxs)(x.OL,{to:"/profile/".concat(n.id),className:d,children:[(0,h.jsxs)("span",{children:[(0,h.jsx)("div",{children:(0,h.jsx)("div",{children:(0,h.jsx)("img",{className:m,src:n.photos.small||"https://clck.ru/b2h9v",alt:"avatar"})})}),(0,h.jsx)("div",{className:j,children:(0,h.jsx)("button",{disabled:!r||t.some((function(e){return e===n.id})),onClick:function(e){e.preventDefault(),n.followed?s(n):o(n)},children:n.followed?"Unfollow":"Follow"})})]}),(0,h.jsxs)("span",{className:w,children:[(0,h.jsx)("div",{className:P,children:"".concat(n.name)}),(0,h.jsxs)("div",{className:_,children:["country",", ","state",", ",n.id,", ","city"]}),(0,h.jsx)("div",{className:y,children:n.status})]})]})},F=["currentPage","changingPage","usersAmount","pageSize"],k=function(e){for(var n=e.currentPage,r=e.changingPage,t=e.usersAmount,s=e.pageSize,o=(0,c.Z)(e,F),u=Math.ceil(o.usersAmount/o.pageSize),i=[],a=1;a<=u;a++)i.push(a);return(0,h.jsxs)("div",{children:[(0,h.jsx)(v,{currentPage:n,changingPage:r,usersAmount:t,pageSize:s}),(0,h.jsx)("div",{children:o.users.map((function(e){return(0,h.jsx)(A,{user:e,isAuth:o.isAuth,isFollowingInProcess:o.isFollowingInProcess,unfollow:o.unfollow,follow:o.follow},e.id)}))})]})},N=r(311),I=r(7781),S="NOT_FOUND";var z=function(e,n){return e===n};function b(e,n){var r="object"===typeof n?n:{equalityCheck:n},t=r.equalityCheck,s=void 0===t?z:t,o=r.maxSize,u=void 0===o?1:o,i=r.resultEqualityCheck,a=function(e){return function(n,r){if(null===n||null===r||n.length!==r.length)return!1;for(var t=n.length,s=0;s<t;s++)if(!e(n[s],r[s]))return!1;return!0}}(s),l=1===u?function(e){var n;return{get:function(r){return n&&e(n.key,r)?n.value:S},put:function(e,r){n={key:e,value:r}},getEntries:function(){return n?[n]:[]},clear:function(){n=void 0}}}(a):function(e,n){var r=[];function t(e){var t=r.findIndex((function(r){return n(e,r.key)}));if(t>-1){var s=r[t];return t>0&&(r.splice(t,1),r.unshift(s)),s.value}return S}return{get:t,put:function(n,s){t(n)===S&&(r.unshift({key:n,value:s}),r.length>e&&r.pop())},getEntries:function(){return r},clear:function(){r=[]}}}(u,a);function c(){var n=l.get(arguments);if(n===S){if(n=e.apply(null,arguments),i){var r=l.getEntries(),t=r.find((function(e){return i(e.value,n)}));t&&(n=t.value)}l.put(arguments,n)}return n}return c.clearCache=function(){return l.clear()},c}function C(e){var n=Array.isArray(e[0])?e[0]:e;if(!n.every((function(e){return"function"===typeof e}))){var r=n.map((function(e){return"function"===typeof e?"function "+(e.name||"unnamed")+"()":typeof e})).join(", ");throw new Error("createSelector expects all input-selectors to be functions, but received the following types: ["+r+"]")}return n}function U(e){for(var n=arguments.length,r=new Array(n>1?n-1:0),t=1;t<n;t++)r[t-1]=arguments[t];var s=function(){for(var n=arguments.length,t=new Array(n),s=0;s<n;s++)t[s]=arguments[s];var o,u=0,i={memoizeOptions:void 0},a=t.pop();if("object"===typeof a&&(i=a,a=t.pop()),"function"!==typeof a)throw new Error("createSelector expects an output function after the inputs, but received: ["+typeof a+"]");var l=i,c=l.memoizeOptions,f=void 0===c?r:c,p=Array.isArray(f)?f:[f],g=C(t),h=e.apply(void 0,[function(){return u++,a.apply(null,arguments)}].concat(p)),v=e((function(){for(var e=[],n=g.length,r=0;r<n;r++)e.push(g[r].apply(null,arguments));return o=h.apply(null,e)}));return Object.assign(v,{resultFunc:a,memoizedResultFunc:h,dependencies:g,lastResult:function(){return o},recomputations:function(){return u},resetRecomputations:function(){return u=0}}),v};return s}var R=U(b),Z=R((function(e){return e.usersPage.users}),(function(e){return e})),q=function(e){return e.usersPage.isFetching},M=function(e){return e.usersPage.pageSize},O=function(e){return e.usersPage.usersAmount},E=function(e){return e.usersPage.currentPage},D=function(e){return e.usersPage.isFollowingInProcess},T=function(e){return e.auth.isAuth},B=function(e){(0,o.Z)(r,e);var n=(0,u.Z)(r);function r(){var e;(0,t.Z)(this,r);for(var s=arguments.length,o=new Array(s),u=0;u<s;u++)o[u]=arguments[u];return(e=n.call.apply(n,[this].concat(o))).changingPage=function(n){var r=e.props.pageSize;e.props.usersRequest(n,r)},e}return(0,s.Z)(r,[{key:"componentDidMount",value:function(){this.props.usersRequest(this.props.currentPage,this.props.pageSize)}},{key:"render",value:function(){return(0,h.jsx)(h.Fragment,{children:this.props.isFetching?(0,h.jsx)(N.Z,{}):(0,h.jsx)(k,{usersAmount:this.props.usersAmount,pageSize:this.props.pageSize,changingPage:this.changingPage,currentPage:this.props.currentPage,users:this.props.users,following:this.props.following,isFollowingInProcess:this.props.isFollowingInProcess,toggleIsFollowingInProcess:this.props.toggleIsFollowingInProcess,follow:this.props.follow,unfollow:this.props.unfollow,isAuth:this.props.isAuth})})}}]),r}(i.Component),H=(0,I.qC)((0,l.$j)((function(e){return{users:Z(e),pageSize:M(e),usersAmount:O(e),currentPage:E(e),isFetching:q(e),isFollowingInProcess:D(e),isAuth:T(e)}}),{following:a.mG,setUsers:a.HM,setCurrentPage:a.D4,setUsersAmount:a.Bs,toggleIsFetching:a.MO,toggleIsFollowingInProcess:a.Rv,usersRequest:a._I,follow:a.ZN,unfollow:a.fv}))(B)}}]);
//# sourceMappingURL=433.4abbfbda.chunk.js.map