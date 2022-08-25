"use strict";(self.webpackChunkSfxWeb=self.webpackChunkSfxWeb||[]).push([["src_app_views_system-applications_system-applications_module_ts"],{2165:(E,v,n)=>{n.d(v,{J:()=>r});var t=n(2654),_=n(1086),d=n(5467),f=n(1709),e=n(5563),c=n(2684),p=n(5e3);let r=(()=>{class m{constructor(O){this.injector=O,this.subscriptions=new t.w}ngOnInit(){this.activatedRoute=this.injector.get(d.gz),this.refreshService=this.injector.get(e.g),this.messageService=this.injector.get(c.e),this.router=this.injector.get(d.F0),this.subscriptions.add(this.activatedRoute.params.subscribe(()=>{this.getParams(this.activatedRoute.snapshot),this.setup(),this.subscriptions.add(this.refreshService.refreshSubject.subscribe(()=>this.fullRefresh().subscribe())),this.subscriptions.add(this.fullRefresh().subscribe())})),console.log(this)}getClassName(){return this.constructor.name}setup(){}ngOnDestroy(){this.subscriptions.unsubscribe()}fullRefresh(){return this.common().pipe((0,f.zg)(()=>this.refresh(this.messageService)))}getParams(O){}refresh(O){return(0,_.of)(null)}common(O){return(0,_.of)(null)}}return m.\u0275fac=function(O){return new(O||m)(p.Y36(p.zs3))},m.\u0275dir=p.lG2({type:m}),m})()},7883:(E,v,n)=>{n.d(v,{m:()=>e});var t=n(9808),_=n(5467),d=n(4466),f=n(5e3);let e=(()=>{class c{}return c.\u0275fac=function(r){return new(r||c)},c.\u0275mod=f.oAB({type:c}),c.\u0275inj=f.cJS({imports:[[t.ez,_.Bz,d.m]]}),c})()},4034:(E,v,n)=>{n.d(v,{Q:()=>g,W:()=>M});var t=n(5e3),_=n(9808),d=n(7498),f=n(7191);function e(i,l){if(1&i&&(t.TgZ(0,"div",7),t._UZ(1,"app-health-badge",8),t.qZA()),2&i){const a=t.oxw();t.xp6(1),t.Q6J("badgeClass",a.healthState.badgeClass)}}function c(i,l){if(1&i&&(t.TgZ(0,"div",16),t._uU(1),t.qZA()),2&i){const a=t.oxw().$implicit;t.xp6(1),t.hij(" ",a.descriptionName," ")}}function p(i,l){if(1&i&&(t.TgZ(0,"span"),t._uU(1),t.qZA()),2&i){const a=t.oxw().$implicit;t.xp6(1),t.hij(" ",a.displayText," ")}}function r(i,l){1&i&&t.GkF(0)}function m(i,l){if(1&i&&(t.TgZ(0,"span"),t.YNc(1,r,1,0,"ng-container",17),t.qZA()),2&i){const a=t.oxw().$implicit;t.xp6(1),t.Q6J("ngTemplateOutlet",a.ref)}}function h(i,l){if(1&i&&t._UZ(0,"app-clip-board",18),2&i){const a=t.oxw().$implicit;t.Q6J("text",a.copyTextValue)}}function O(i,l){if(1&i&&(t.TgZ(0,"div",9)(1,"div",10),t.YNc(2,c,2,1,"div",11),t._UZ(3,"div",12),t.TgZ(4,"div",13),t.YNc(5,p,2,1,"span",14),t.YNc(6,m,2,1,"span",14),t.qZA()(),t.YNc(7,h,1,1,"app-clip-board",15),t.qZA()),2&i){const a=l.$implicit;t.Q6J("ngClass",l.last?"":"underline"),t.xp6(2),t.Q6J("ngIf",a.descriptionName),t.xp6(3),t.Q6J("ngIf",!a.displaySelector),t.xp6(1),t.Q6J("ngIf",a.displaySelector&&a.ref),t.xp6(1),t.Q6J("ngIf",a.copyTextValue)}}let M=(()=>{class i{constructor(a){this.templateRef=a}getId(){return this.id}}return i.\u0275fac=function(a){return new(a||i)(t.Y36(t.Rgc))},i.\u0275dir=t.lG2({type:i,selectors:[["","appEssentialTemplate",""]],inputs:{id:"id"}}),i})(),g=(()=>{class i{constructor(a){this.detectorRef=a,this.listItems=[],this.internalList=[],this.viewHasLoaded=!1}ngAfterViewInit(){this.viewHasLoaded=!0,this.checkForTemplates(),this.detectorRef.detectChanges()}ngOnChanges(){this.checkForTemplates()}checkForTemplates(){this.viewHasLoaded&&(this.internalList=this.listItems.map(a=>{var x;const P=Object.assign({},a);return P.displaySelector&&(P.ref=null===(x=this.test.toArray().find(y=>y.id===P.selectorName))||void 0===x?void 0:x.templateRef),P}))}}return i.\u0275fac=function(a){return new(a||i)(t.Y36(t.sBO))},i.\u0275cmp=t.Xpm({type:i,selectors:[["app-essential-health-tile"]],contentQueries:function(a,x,P){if(1&a&&t.Suo(P,M,5),2&a){let y;t.iGM(y=t.CRH())&&(x.test=y)}},inputs:{healthState:"healthState",listItems:"listItems",templateRefs:"templateRefs"},features:[t.TTD],decls:7,vars:2,consts:[[1,"dashboard-wrapper"],[1,"dashboard","dashboard-small"],[1,"dashboard-tile","flex-center",2,"height","100%"],[1,"flex-center",2,"height","100%"],["class","badge-container",4,"ngIf"],[1,"right-side-wrapper"],["class","essential-list-item highlight-hover",3,"ngClass",4,"ngFor","ngForOf"],[1,"badge-container"],["size","75px",3,"badgeClass"],[1,"essential-list-item","highlight-hover",3,"ngClass"],[1,"text-wrapper","tile-item"],["class","tile-list-entry left-text",4,"ngIf"],[1,"spacer"],[1,"middle-text"],[4,"ngIf"],[3,"text",4,"ngIf"],[1,"tile-list-entry","left-text"],[4,"ngTemplateOutlet"],[3,"text"]],template:function(a,x){1&a&&(t.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3),t.YNc(4,e,2,1,"div",4),t.TgZ(5,"div",5),t.YNc(6,O,8,5,"div",6),t.qZA()()()()()),2&a&&(t.xp6(4),t.Q6J("ngIf",x.healthState),t.xp6(2),t.Q6J("ngForOf",x.internalList))},directives:[_.O5,d._,_.sg,_.mk,_.tP,f._],styles:[".dashboard-container-small[_ngcontent-%COMP%]{display:inline-block;vertical-align:middle;width:270px}.chart-wrapper[_ngcontent-%COMP%]{position:absolute;top:0;left:0}.dashboard-wrapper[_ngcontent-%COMP%]{display:inline-block;vertical-align:top;height:100%;width:100%}.dashboard-wrapper[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{text-decoration:none;color:var(--font-primary-color)!important}.dashboard-wrapper[_ngcontent-%COMP%]   .dashboard[_ngcontent-%COMP%]{box-shadow:var(--primary-box-shadow);border-radius:var(--primary-border-radius);color:var(--font-primary-color);padding:7px;background:var(--primary-background-color);text-align:center;height:100%;width:100%}.dashboard-wrapper[_ngcontent-%COMP%]   .dashboard.has-view-path[_ngcontent-%COMP%]{cursor:pointer}.dashboard-wrapper[_ngcontent-%COMP%]   .dashboard[_ngcontent-%COMP%]   .dashboard-tile[_ngcontent-%COMP%]{display:block;position:relative;text-align:left;width:100%;height:100%}.dashboard-wrapper[_ngcontent-%COMP%]   .dashboard[_ngcontent-%COMP%]   .dashboard-tile[_ngcontent-%COMP%]   .dashboard-tile-inner[_ngcontent-%COMP%]{position:relative;width:100%;height:100%;padding-left:16px!important}.dashboard-wrapper[_ngcontent-%COMP%]   .dashboard[_ngcontent-%COMP%]   .dashboard-tile[_ngcontent-%COMP%]   .dashboard-tile-inner[_ngcontent-%COMP%]   .dashboard-tile-leftbar[_ngcontent-%COMP%]{width:6px;position:absolute;left:0;top:0;bottom:0}.dashboard-wrapper[_ngcontent-%COMP%]   .dashboard[_ngcontent-%COMP%]   .dashboard-tile[_ngcontent-%COMP%]   .dashboard-tile-inner[_ngcontent-%COMP%]   .dashboard-tile-leftbar.badge-upgrade-active[_ngcontent-%COMP%]{background:var(--accent-darkblue)}.dashboard-wrapper[_ngcontent-%COMP%]   .dashboard[_ngcontent-%COMP%]   .dashboard-tile[_ngcontent-%COMP%]   .dashboard-tile-inner[_ngcontent-%COMP%]   .dashboard-tile-leftbar.badge-upgrade-inactive[_ngcontent-%COMP%]{background:var(--accent-background-color)}.dashboard-wrapper[_ngcontent-%COMP%]   .dashboard[_ngcontent-%COMP%]   .dashboard-tile[_ngcontent-%COMP%]   .dashboard-tile-inner[_ngcontent-%COMP%]   .dashboard-tile-title[_ngcontent-%COMP%]{display:block;font-size:11pt;line-height:.9}.dashboard-wrapper[_ngcontent-%COMP%]   .dashboard[_ngcontent-%COMP%]   .dashboard-tile[_ngcontent-%COMP%]   .dashboard-tile-inner[_ngcontent-%COMP%]   .dashboard-tile-number[_ngcontent-%COMP%]{display:block;font-size:72px;line-height:1;margin:20px 0}.dashboard-wrapper[_ngcontent-%COMP%]   .dashboard-large[_ngcontent-%COMP%]{padding:17px 7px;position:relative;display:-ms-flexbox;display:flex;-ms-flex-direction:column-reverse;flex-direction:column-reverse}.dashboard-wrapper[_ngcontent-%COMP%]   .dashboard-large[_ngcontent-%COMP%]   .dashboard-datapoints[_ngcontent-%COMP%]{margin:20px 5px 0;display:-ms-flexbox;display:flex;-ms-flex-pack:space-evenly;justify-content:space-evenly}.dashboard-wrapper[_ngcontent-%COMP%]   .dashboard-large[_ngcontent-%COMP%]   .dashboard-datapoints[_ngcontent-%COMP%]   .dashboard-datapoint[_ngcontent-%COMP%]{-ms-flex:1;flex:1}.dashboard-wrapper[_ngcontent-%COMP%]   .dashboard-large[_ngcontent-%COMP%]   .dashboard-datapoints[_ngcontent-%COMP%]   .dashboard-datapoint[_ngcontent-%COMP%]   .dashboard-datapoint-title[_ngcontent-%COMP%]{font-size:var(--font-size-default)}.dashboard-wrapper[_ngcontent-%COMP%]   .dashboard-large[_ngcontent-%COMP%]   .dashboard-datapoints[_ngcontent-%COMP%]   .dashboard-datapoint[_ngcontent-%COMP%]   .dashboard-datapoint-number[_ngcontent-%COMP%]{font-size:24pt}.dashboard-wrapper[_ngcontent-%COMP%]   .dashboard-small[_ngcontent-%COMP%]{padding:7px 12px;position:relative;height:100%;width:100%;overflow:hidden}.dashboard-wrapper[_ngcontent-%COMP%]   .dashboard-small[_ngcontent-%COMP%]   .dashboard-datapoints[_ngcontent-%COMP%]{margin:0 0 0 20px;float:right}.dashboard-wrapper[_ngcontent-%COMP%]   .dashboard-small[_ngcontent-%COMP%]   .dashboard-datapoints[_ngcontent-%COMP%]   .dashboard-datapoint[_ngcontent-%COMP%]{height:36px;padding:0 0 0 14px;margin:4px 0 8px}.dashboard-wrapper[_ngcontent-%COMP%]   .dashboard-small[_ngcontent-%COMP%]   .dashboard-datapoints[_ngcontent-%COMP%]   .dashboard-datapoint[_ngcontent-%COMP%]   .dashboard-datapoint-title[_ngcontent-%COMP%]{font-size:11pt}.dashboard-wrapper[_ngcontent-%COMP%]   .dashboard-small[_ngcontent-%COMP%]   .dashboard-datapoints[_ngcontent-%COMP%]   .dashboard-datapoint[_ngcontent-%COMP%]   .dashboard-datapoint-number[_ngcontent-%COMP%]{font-size:16pt;width:54px}.badge-container[_ngcontent-%COMP%]{margin:0 10px 0 0;width:90px;height:90px;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center}.tile-list-entry[_ngcontent-%COMP%]{text-align:center;display:-ms-flexbox;display:flex}.text-wrapper[_ngcontent-%COMP%]{position:relative;overflow:hidden;-ms-flex:1;flex:1}.text-wrapper[_ngcontent-%COMP%]   .middle-text[_ngcontent-%COMP%]{transition:.5s;overflow:hidden;text-overflow:ellipsis;max-width:800px;float:left}.text-wrapper[_ngcontent-%COMP%]   .left-text[_ngcontent-%COMP%]{transition:.5s;white-space:nowrap;color:#c9c9c9;font-weight:500;font-size:14px}.centering-row[_ngcontent-%COMP%], .tile-item[_ngcontent-%COMP%]{display:-ms-flexbox;display:flex;-ms-flex-direction:row;flex-direction:row;-ms-flex-align:center;align-items:center}.tile-item[_ngcontent-%COMP%]{height:35px;position:relative}.right-side-wrapper[_ngcontent-%COMP%]{-ms-flex:1;flex:1;min-width:0px;-ms-flex-direction:column;flex-direction:column;display:-ms-flexbox;display:flex;height:100%}.spacer[_ngcontent-%COMP%]{width:10px;height:1px}"],changeDetection:0}),i})()},1901:(E,v,n)=>{n.d(v,{c:()=>c});var t=n(9808),_=n(4466),d=n(322),f=n(6461),e=n(5e3);let c=(()=>{class p{}return p.\u0275fac=function(m){return new(m||p)},p.\u0275mod=e.oAB({type:p}),p.\u0275inj=e.cJS({imports:[[t.ez,_.m,d.HK,f.Q,d.Oz]]}),p})()},8952:(E,v,n)=>{n.d(v,{f:()=>p});var t=n(5e3),_=n(4333),d=n(322),f=n(8833);function e(r,m){if(1&r&&t._UZ(0,"app-detail-list",6),2&r){const h=t.oxw();t.Q6J("list",h.unhealthyEvaluations)("listSettings",h.unhealthyEvaluationsListSettings)}}function c(r,m){if(1&r&&t._UZ(0,"app-detail-list",6),2&r){const h=t.oxw();t.Q6J("list",h.healthyEvaluations)("listSettings",h.healthEventsListSettings)}}let p=(()=>{class r{constructor(h){this.settings=h}ngOnInit(){this.unhealthyEvaluationsListSettings=this.settings.getNewOrExistingUnhealthyEvaluationsListSettings(),this.healthEventsListSettings=this.settings.getNewOrExistingHealthEventsListSettings()}}return r.\u0275fac=function(h){return new(h||r)(t.Y36(_.g))},r.\u0275cmp=t.Xpm({type:r,selectors:[["app-health-viewer"]],inputs:{unhealthyEvaluations:"unhealthyEvaluations",healthyEvaluations:"healthyEvaluations"},decls:11,vars:1,consts:[["ngbNav","",1,"nav-wrapper"],["nav","ngbNav"],["ngbNavItem",""],["ngbNavLink",""],["ngbNavContent",""],[3,"ngbNavOutlet"],[3,"list","listSettings"]],template:function(h,O){if(1&h&&(t.TgZ(0,"div",0,1)(2,"div",2)(3,"a",3),t._uU(4,"Unhealthy"),t.qZA(),t.YNc(5,e,1,2,"ng-template",4),t.qZA(),t.TgZ(6,"div",2)(7,"a",3),t._uU(8,"All"),t.qZA(),t.YNc(9,c,1,2,"ng-template",4),t.qZA()(),t._UZ(10,"div",5)),2&h){const M=t.MAs(1);t.xp6(10),t.Q6J("ngbNavOutlet",M)}},directives:[d.Pz,d.nv,d.Vx,d.uN,f.m,d.tO],styles:[""]}),r})()},8285:(E,v,n)=>{n.d(v,{P:()=>M});var t=n(5e3),_=n(5664),d=n(9808),f=n(322);function e(g,i){if(1&g&&t._UZ(0,"button",5),2&g){const l=t.oxw();t.Gre("mif-2x status-icon ",l.collapsed?"mif-arrow-drop-down":"mif-arrow-drop-up",""),t.uIk("aria-label",l.displayText)("aria-expanded",!l.collapsed)}}function c(g,i){1&g&&(t.TgZ(0,"div"),t.Hsn(1,1),t.qZA())}function p(g,i){1&g&&(t.TgZ(0,"div"),t.Hsn(1,2),t.qZA())}const r=[[["","collapse-header",""]],[["","collapse-body",""]],[["","closed-body",""]]],m=function(g){return{"base-header":g}},h=function(g){return{"margin-left":g}},O=["[collapse-header]","[collapse-body]","[closed-body]"];let M=(()=>{class g{constructor(l){this.liveAnnouncer=l,this.collapsed=!1,this.disabled=!1,this.hideTooltip=!1,this.sectionName="this",this.tooltipSouth=!1,this.collapsedChange=new t.vpe,this.displayText=""}ngOnChanges(){this.setText()}ngOnInit(){this.setText()}changeCollapseState(){this.disabled||(this.liveAnnouncer.announce(this.sectionName+" Section has been "+this.collapsed?"Opened":"Closed"),this.collapsed=!this.collapsed,this.collapsedChange.emit(this.collapsed)),this.setText()}setText(){this.displayText=(this.collapsed?"Open ":"Close ")+this.sectionName+" Section"}}return g.\u0275fac=function(l){return new(l||g)(t.Y36(_.Kd))},g.\u0275cmp=t.Xpm({type:g,selectors:[["app-collapse-container"]],inputs:{collapsed:"collapsed",disabled:"disabled",hideTooltip:"hideTooltip",sectionName:"sectionName",tooltipSouth:"tooltipSouth"},outputs:{collapsedChange:"collapsedChange"},features:[t.TTD],ngContentSelectors:O,decls:7,vars:13,consts:[[2,"position","relative"],["tooltipClass","styled-tooltip",1,"flex-center",3,"ngClass","ngbTooltip","placement","disableTooltip","click"],["tabindex","0",3,"class",4,"ngIf"],[1,"header-wrapper",3,"ngStyle"],[4,"ngIf"],["tabindex","0"]],template:function(l,a){1&l&&(t.F$t(r),t.TgZ(0,"div",0)(1,"div",1),t.NdJ("click",function(){return a.changeCollapseState()}),t.YNc(2,e,1,5,"button",2),t.TgZ(3,"div",3),t.Hsn(4),t.qZA()(),t.YNc(5,c,2,0,"div",4),t.YNc(6,p,2,0,"div",4),t.qZA()),2&l&&(t.xp6(1),t.Q6J("ngClass",t.VKq(9,m,!a.disabled))("ngbTooltip",a.displayText)("placement",a.tooltipSouth?"bottom":"top")("disableTooltip",a.disabled||a.hideTooltip),t.uIk("aria-expanded",!a.collapsed),t.xp6(1),t.Q6J("ngIf",!a.disabled),t.xp6(1),t.Q6J("ngStyle",t.VKq(11,h,a.disabled?"25px":"")),t.xp6(2),t.Q6J("ngIf",!a.collapsed),t.xp6(1),t.Q6J("ngIf",a.collapsed))},directives:[d.mk,f._L,d.O5,d.PC],styles:[".base-header[_ngcontent-%COMP%]{border-radius:var(--primary-border-radius);cursor:pointer}.base-header[_ngcontent-%COMP%]:hover, .base-header[_ngcontent-%COMP%]:focus-within{filter:brightness(100%);background-color:#ffffff1a}.header-wrapper[_ngcontent-%COMP%]{width:calc(100% - 25px);display:inline-block}.status-icon[_ngcontent-%COMP%]{width:25px}button[_ngcontent-%COMP%]{padding:0;background-color:transparent;border:0px;color:#fff}"]}),g})()},1258:(E,v,n)=>{n.r(v),n.d(v,{SystemApplicationsModule:()=>R});var t=n(9808),_=n(5467),d=n(4850),f=n(2165),e=n(5e3),c=n(7559);let p=(()=>{class o extends f.J{constructor(s,C){super(C),this.data=s}common(s){return this.data.getSystemApp(!0,s).pipe((0,d.U)(C=>{this.systemApp=C}))}}return o.\u0275fac=function(s){return new(s||o)(e.Y36(c.D),e.Y36(e.zs3))},o.\u0275dir=e.lG2({type:o,features:[e.qOj]}),o})();var r=n(5237),m=n(2261),h=n(8118);let O=(()=>{class o extends p{constructor(s,C,b){super(s,C),this.data=s,this.tree=b,this.tabs=[{name:"essentials",route:"./"}]}setup(){this.tree.selectTreeNode([r.R.cluster(),r.R.systemAppGroup()],!0)}}return o.\u0275fac=function(s){return new(s||o)(e.Y36(c.D),e.Y36(e.zs3),e.Y36(m.r))},o.\u0275cmp=e.Xpm({type:o,selectors:[["app-base"]],features:[e.qOj],decls:4,vars:1,consts:[["type","System Application","name","'fabric:/System'",3,"tabs"],[1,"main-view"],[1,"flex-child"]],template:function(s,C){1&s&&(e._UZ(0,"app-navbar",0),e.TgZ(1,"div",1)(2,"div",2),e._UZ(3,"router-outlet"),e.qZA()()),2&s&&e.Q6J("tabs",C.tabs)},directives:[h.S,_.lC],styles:[""]}),o})();var M=n(6174),g=n(567),i=n(5053),l=n(4333),a=n(4034),x=n(8285),P=n(8952),y=n(8833);function A(o,u){if(1&o&&e._UZ(0,"app-essential-health-tile",4),2&o){const s=e.oxw(2);e.Q6J("healthState",null==s.systemApp?null:s.systemApp.healthState)("listItems",s.essentialItems)}}function w(o,u){if(1&o&&(e.TgZ(0,"div",5)(1,"app-collapse-container",6)(2,"div",7)(3,"h4"),e._uU(4,"Health Evaluations"),e.qZA()(),e.TgZ(5,"div",8),e._UZ(6,"app-health-viewer",9),e.qZA()()()),2&o){const s=e.oxw(2);e.xp6(6),e.Q6J("healthyEvaluations",s.systemApp.health.healthEvents)("unhealthyEvaluations",s.systemApp.health.unhealthyEvaluations)}}function S(o,u){if(1&o&&(e.TgZ(0,"div",5)(1,"app-collapse-container",10)(2,"div",7)(3,"h4"),e._uU(4,"System"),e.qZA()(),e.TgZ(5,"div",8),e._UZ(6,"app-detail-list",11),e.qZA()()()),2&o){const s=e.oxw(2);e.xp6(6),e.Q6J("list",s.systemApp.services.collection)("listSettings",s.listSettings)}}function D(o,u){if(1&o&&(e.TgZ(0,"div")(1,"div",1),e.YNc(2,A,1,2,"app-essential-health-tile",2),e.qZA(),e.YNc(3,w,7,2,"div",3),e.YNc(4,S,7,2,"div",3),e.qZA()),2&o){const s=e.oxw();e.xp6(2),e.Q6J("ngIf",s.systemApp&&s.systemApp.isInitialized),e.xp6(1),e.Q6J("ngIf",s.systemApp.health.isInitialized),e.xp6(1),e.Q6J("ngIf",s.systemApp.services)}}const I=[{path:"",component:O,children:[{path:"",component:(()=>{class o extends p{constructor(s,C,b){super(s,C),this.data=s,this.settings=b,this.essentialItems=[]}setup(){this.listSettings=this.settings.getNewOrExistingListSettings("systemServices",["name"],[new M.a7("name","Name",s=>s.viewPath),new M.NL("raw.TypeName","Service Type"),new M.NL("raw.ManifestVersion","Version"),new M.v0("raw.ServiceKind","Service Kind"),new M.Gp("healthState","Health State"),new M.v0("raw.ServiceStatus","Status")])}refresh(s){return(0,g.D)([this.systemApp.services.refresh(s),this.data.getNodes(!0)]).pipe((0,d.U)(C=>{let b=C[1].collection[0];C[1].collection.forEach(T=>{parseInt(b.id,16)>parseInt(T.id,16)&&T.raw.HealthState===i.lJ.Up&&(b=T)}),b&&(this.essentialItems=[{descriptionName:"Likely FMM Node",displayText:b.name,copyTextValue:b.name}])}))}}return o.\u0275fac=function(s){return new(s||o)(e.Y36(c.D),e.Y36(e.zs3),e.Y36(l.g))},o.\u0275cmp=e.Xpm({type:o,selectors:[["app-essentials"]],features:[e.qOj],decls:1,vars:1,consts:[[4,"ngIf"],[1,"tile-container"],["class","long",3,"healthState","listItems",4,"ngIf"],["class","detail-pane essen-pane",4,"ngIf"],[1,"long",3,"healthState","listItems"],[1,"detail-pane","essen-pane"],["sectionName","Unhealthy Evaluations"],["collapse-header",""],["collapse-body",""],[3,"healthyEvaluations","unhealthyEvaluations"],["sectionName","System"],[3,"list","listSettings"]],template:function(s,C){1&s&&e.YNc(0,D,5,3,"div",0),2&s&&e.Q6J("ngIf",C.systemApp)},directives:[t.O5,a.Q,x.P,P.f,y.m],styles:[""]}),o})()}]}];let Z=(()=>{class o{}return o.\u0275fac=function(s){return new(s||o)},o.\u0275mod=e.oAB({type:o}),o.\u0275inj=e.cJS({imports:[[_.Bz.forChild(I)],_.Bz]}),o})();var U=n(4466),B=n(6461),L=n(1901),N=n(7883);let R=(()=>{class o{}return o.\u0275fac=function(s){return new(s||o)},o.\u0275mod=e.oAB({type:o}),o.\u0275inj=e.cJS({imports:[[t.ez,Z,U.m,B.Q,L.c,N.m]]}),o})()}}]);