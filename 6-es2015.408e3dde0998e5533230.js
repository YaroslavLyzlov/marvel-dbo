(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{"+RkK":function(t,n,l){"use strict";l.r(n);var e=l("8Y7J");class i{}var r=l("pMnS"),a=l("SVse");class o{constructor(){this.realSize=48,this.innerSize=32}set size(t){this.realSize=t,this.innerSize=t/1.5}get style(){const t=`${this.realSize}px`;return{height:t,width:t}}get styleInner(){const t=`${this.innerSize}px`;return{height:t,width:t}}}var s=e.kb({encapsulation:0,styles:[["[_nghost-%COMP%]{font-size:0}.lds-dual-ring[_ngcontent-%COMP%]{width:48px;height:48px;display:flex;justify-content:center;align-items:center}.lds-dual-ring-inner[_ngcontent-%COMP%]{display:block;width:32px;height:32px;margin:1px;border-radius:50%;border:3px solid #000;border-color:#000 transparent;-webkit-animation:1.2s linear infinite lds-dual-ring;animation:1.2s linear infinite lds-dual-ring}@-webkit-keyframes lds-dual-ring{0%{-webkit-transform:rotate(0);transform:rotate(0)}100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@keyframes lds-dual-ring{0%{-webkit-transform:rotate(0);transform:rotate(0)}100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}"]],data:{}});function u(t){return e.zb(0,[(t()(),e.mb(0,0,null,null,5,"div",[["class","lds-dual-ring"]],null,null,null,null,null)),e.wb(512,null,a.t,a.u,[e.k,e.r,e.B]),e.lb(2,278528,null,0,a.m,[a.t],{ngStyle:[0,"ngStyle"]},null),(t()(),e.mb(3,0,null,null,2,"div",[["class","lds-dual-ring-inner"]],null,null,null,null,null)),e.wb(512,null,a.t,a.u,[e.k,e.r,e.B]),e.lb(5,278528,null,0,a.m,[a.t],{ngStyle:[0,"ngStyle"]},null)],function(t,n){var l=n.component;t(n,2,0,l.style),t(n,5,0,l.styleInner)},null)}class c{constructor(){}ngOnInit(){}}var h=e.kb({encapsulation:0,styles:[["[_nghost-%COMP%]{background-color:rgba(0,0,0,.3);position:fixed;width:100vw;height:100vh;left:0;top:0;right:0;bottom:0;z-index:30;display:flex;justify-content:center;align-items:center}"]],data:{}});function g(t){return e.zb(0,[(t()(),e.mb(0,0,null,null,1,"app-loader",[],null,null,null,u,s)),e.lb(1,49152,null,0,o,[],null,null)],null,null)}var m=l("XNiG");class d{constructor(t,n,l){this.marvelStateService=t,this.route=n,this.router=l,this.isLoading=!1,this.currentPage={url:"",anchors:[],width:0,height:0},this.isReady=!1,this.onReadeHtmlImage=new m.a,this.isHighlightAnchors=!1,this.onResize=(()=>{console.log("load");const t=this.htmlImageElement.nativeElement.width,n=this.htmlImageElement.nativeElement.height;this.currentPage.anchors.map(l=>(l.left=l.defaultLeft*t/this.currentPage.width,l.top=l.defaultTop*n/this.currentPage.height,l.width=l.defaultWidth*t/this.currentPage.width,l.height=l.defaultHeight*n/this.currentPage.height,l))}),n.params.subscribe(({id:t})=>{this.onChangeRoute(t)}),window.addEventListener("resize",this.onResize)}onChangeRoute(t){this.isReady?this.currentPage=this.marvelStateService.getPage(t):this.onReadeHtmlImage.subscribe(()=>{console.log("2222"),this.currentPage=this.marvelStateService.getPage(t)})}highlightAnchors(){this.isHighlightAnchors=!0,setTimeout(()=>{this.isHighlightAnchors=!1},300)}transitionToPage(t,n){console.log("anchor",n),t.stopPropagation(),n.action?(this.isLoading=!0,this.sub=n.action().subscribe(t=>{"confirmed"===t.answer.transaction_info.status&&(this.isLoading=!1,this.router.navigateByUrl(n.route),this.sub&&this.sub.unsubscribe()),console.log("result",t,n)})):this.router.navigateByUrl(n.route)}ngAfterViewInit(){console.log("hello"),this.onReadeHtmlImage.next(),this.isReady=!0,this.htmlImageElement.nativeElement.addEventListener("load",this.onResize)}}var b=l("xfVI"),p=l("iInd"),f=e.kb({encapsulation:0,styles:[["[_nghost-%COMP%]{display:flex;justify-content:center}.marvel-item__image[_ngcontent-%COMP%]{max-width:100vw}.marvel-item__anchor[_ngcontent-%COMP%]{position:absolute;opacity:0;transition:all .2s cubic-bezier(.645,.045,.355,1)}.marvel-item__anchor--show[_ngcontent-%COMP%]{opacity:1;box-shadow:inset 0 0 0 2px #007ec1,0 2px 4px 0 rgba(0,0,0,.1);background-color:rgba(154,220,255,.6)}.marvel-item__wrapper[_ngcontent-%COMP%]{position:relative}"]],data:{}});function v(t){return e.zb(0,[(t()(),e.mb(0,0,null,null,3,"div",[["class","marvel-item__anchor"]],[[2,"marvel-item__anchor--show",null]],[[null,"click"]],function(t,n,l){var e=!0;return"click"===n&&(e=!1!==t.component.transitionToPage(l,t.context.$implicit)&&e),e},null,null)),e.wb(512,null,a.t,a.u,[e.k,e.r,e.B]),e.lb(2,278528,null,0,a.m,[a.t],{ngStyle:[0,"ngStyle"]},null),e.vb(3,{top:0,left:1,width:2,height:3})],function(t,n){var l=t(n,3,0,n.context.$implicit.top+"px",n.context.$implicit.left+"px",n.context.$implicit.width+"px",n.context.$implicit.height+"px");t(n,2,0,l)},function(t,n){t(n,0,0,n.component.isHighlightAnchors)})}function w(t){return e.zb(0,[(t()(),e.mb(0,0,null,null,1,"app-marvel-item-loader",[],null,null,null,g,h)),e.lb(1,114688,null,0,c,[],null,null)],function(t,n){t(n,1,0)},null)}function x(t){return e.zb(0,[e.xb(402653184,1,{htmlImageElement:0}),(t()(),e.mb(1,0,null,null,5,"div",[["class","marvel-item__wrapper"]],null,null,null,null,null)),(t()(),e.mb(2,0,[[1,0],["htmlImageElement",1]],null,0,"img",[["class","marvel-item__image"]],[[8,"src",4]],[[null,"click"]],function(t,n,l){var e=!0;return"click"===n&&(e=!1!==t.component.highlightAnchors()&&e),e},null,null)),(t()(),e.bb(16777216,null,null,1,null,v)),e.lb(4,278528,null,0,a.i,[e.M,e.J,e.q],{ngForOf:[0,"ngForOf"]},null),(t()(),e.bb(16777216,null,null,1,null,w)),e.lb(6,16384,null,0,a.j,[e.M,e.J],{ngIf:[0,"ngIf"]},null)],function(t,n){var l=n.component;t(n,4,0,l.currentPage.anchors),t(n,6,0,l.isLoading)},function(t,n){t(n,2,0,n.component.currentPage.url)})}function y(t){return e.zb(0,[(t()(),e.mb(0,0,null,null,1,"app-marvel-item",[],null,null,null,x,f)),e.lb(1,4243456,null,0,d,[b.a,p.a,p.k],null,null)],null,null)}var k=e.ib("app-marvel-item",d,y,{},{},[]);class _{}l.d(n,"MarvelPageModuleNgFactory",function(){return P});var P=e.jb(i,[],function(t){return e.sb([e.tb(512,e.j,e.W,[[8,[r.a,k]],[3,e.j],e.v]),e.tb(4608,a.l,a.k,[e.s,[2,a.w]]),e.tb(1073742336,a.b,a.b,[]),e.tb(1073742336,p.l,p.l,[[2,p.q],[2,p.k]]),e.tb(1073742336,_,_,[]),e.tb(1073742336,i,i,[]),e.tb(1024,p.i,function(){return[[{path:"",redirectTo:"login",pathMatch:"full"},{path:":id",component:d}]]},[])])})}}]);