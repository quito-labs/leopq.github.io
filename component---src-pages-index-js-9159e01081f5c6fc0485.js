(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{RXBc:function(e,t,n){"use strict";n.r(t);var c=n("q1tI"),a=n.n(c),i=n("Kvkj"),o=null;t.default=function(e){var t=e.location,n=Object(c.useState)(!1),u=n[0],l=n[1],s=Object(c.useState)(!1),r=s[0],b=s[1],m=Object(c.useState)(!1),d=m[0],f=m[1],j=Object(c.useState)(""),O=j[0],p=j[1],E=Object(c.useState)("is-loading"),w=E[0],k=E[1],v=Object(c.useState)(null),S=v[0],C=v[1],A=Object(c.useCallback)((function(){l(!u),b(!r),f(!d)}),[d,r,u]),g=Object(c.useCallback)((function(e){A(),p(e)}),[A]),J=Object(c.useCallback)((function(){A(),p("")}),[A]),L=Object(c.useCallback)((function(e){S&&!S.contains(e.target)&&u&&J()}),[u,S,J]);return Object(c.useEffect)((function(){return o=setTimeout((function(){k("")}),100),document.addEventListener("mousedown",L),function(){o&&clearTimeout(o),document.removeEventListener("mousedown",L)}}),[L]),a.a.createElement(i.c,{location:t},a.a.createElement("article",{className:"body "+w+" "+(u?"is-article-visible":"")},a.a.createElement("section",{id:"wrapper"},a.a.createElement(i.b,{onOpenArticle:g,timeout:r}),a.a.createElement(i.d,{timeout:r,isVisible:d,openArticle:O,isArticleVisible:u,onCloseArticle:J,setWrapperRef:C}),a.a.createElement(i.a,{timeout:r})),a.a.createElement("section",{id:"bg"})))}}}]);
//# sourceMappingURL=component---src-pages-index-js-9159e01081f5c6fc0485.js.map