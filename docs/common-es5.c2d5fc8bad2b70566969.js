function _classCallCheck(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function _createClass(e,n,t){return n&&_defineProperties(e.prototype,n),t&&_defineProperties(e,t),e}(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{g7xg:function(e,n,t){"use strict";var r,a=t("EM62"),o=t("vobO"),i=((r=function(){function e(n){_classCallCheck(this,e),this.http=n,this.markdownHeader=new o.d({"Content-Type":"text/markdown; charset=UTF-8"})}return _createClass(e,[{key:"getMarkdown$",value:function(e){return this.http.get(e,{headers:this.markdownHeader,responseType:"text"})}}]),e}()).ngInjectableDef=a.Gb({token:r,factory:function(e){return new(e||r)(a.Pb(o.a))},providedIn:"root"}),r),c=t("DgXe"),s=t("2kYt");t.d(n,"a",function(){return f});var u,l=[3,"data"],f=((u=function(){function e(n){_classCallCheck(this,e),this.markdownService=n}return _createClass(e,[{key:"ngOnInit",value:function(){this.markdownContent$=this.markdownService.getMarkdown$(this.url)}}]),e}()).ngComponentDef=a.Eb({type:u,selectors:[["angular-blueprint-documents-markdown-viewer"]],factory:function(e){return new(e||u)(a.Kb(i))},inputs:{url:"url"},consts:2,vars:3,template:function(e,n){1&e&&(a.Lb(0,"markdown",l),a.Tb(1,"async")),2&e&&a.Xb("data",a.Ub(1,1,n.markdownContent$))},directives:[c.a],pipes:[s.b],encapsulation:2,changeDetection:0}),u)},rPuC:function(e,n,t){"use strict";var r=t("2kYt"),a=t("EM62"),o=t("DgXe");t("g7xg");var i,c=((i=function e(){_classCallCheck(this,e)}).ngModuleDef=a.Ib({type:i}),i.ngInjectorDef=a.Hb({factory:function(e){return new(e||i)},imports:[[r.c,o.b.forChild()]]}),i);o.b.forChild(),t.d(n,"a",function(){return c})}}]);