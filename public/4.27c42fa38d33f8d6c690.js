(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{GCp2:function(e,t,n){"use strict";n.r(t),n.d(t,"AdminModule",function(){return j});var r=n("ofXK"),o=n("tyNb"),a=n("fXoL");let i=(()=>{class e{constructor(){}ngOnInit(){}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=a.Cb({type:e,selectors:[["app-lateral-menu"]],decls:14,vars:0,consts:[[1,"admin-sidebar"],[1,"nav","flex-column"],[1,"nav-item"],["routerLink","/admin/dashboard","routerLinkActive","active","aria-current","page",1,"nav-link"],["routerLink","/admin/access-done/admin-stock","routerLinkActive","active",1,"nav-link"],["routerLink","/admin/reports","routerLinkActive","active",1,"nav-link"],["aria-disabled","true",1,"nav-link","disabled"]],template:function(e,t){1&e&&(a.Nb(0,"div",0),a.Nb(1,"ul",1),a.Nb(2,"li",2),a.Nb(3,"a",3),a.yc(4," Dashboard "),a.Mb(),a.Mb(),a.Nb(5,"li",2),a.Nb(6,"a",4),a.yc(7," Administrar stock "),a.Mb(),a.Mb(),a.Nb(8,"li",2),a.Nb(9,"a",5),a.yc(10," Reportes "),a.Mb(),a.Mb(),a.Nb(11,"li",2),a.Nb(12,"a",6),a.yc(13," Configuraciones (Disabled) "),a.Mb(),a.Mb(),a.Mb(),a.Mb())},directives:[o.e,o.d],styles:[".admin-sidebar[_ngcontent-%COMP%]{width:250px;height:100vh;background-color:#343a40;color:#fff;padding:20px}.admin-sidebar[_ngcontent-%COMP%]   .nav[_ngcontent-%COMP%]{list-style:none;padding:0;margin:0}.admin-sidebar[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%]{margin-bottom:10px}.admin-sidebar[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%]{display:block;color:#cfd8dc;font-size:1rem;font-weight:500;padding:10px 15px;border-radius:5px;text-align:left;text-decoration:none;transition:background-color .3s ease,color .3s ease}.admin-sidebar[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%]:hover{background-color:#495057;color:#fff}.admin-sidebar[_ngcontent-%COMP%]   .nav-link.active[_ngcontent-%COMP%]{background-color:#007bff;color:#fff;font-weight:700}.admin-sidebar[_ngcontent-%COMP%]   .nav-link.disabled[_ngcontent-%COMP%]{color:#6c757d;cursor:not-allowed}"]}),e})(),s=(()=>{class e{constructor(e){this.router=e,this.username="",this.username=localStorage.getItem("username")}logout(){localStorage.removeItem("token"),this.router.navigate(["/admin/login"])}}return e.\u0275fac=function(t){return new(t||e)(a.Ib(o.b))},e.\u0275cmp=a.Cb({type:e,selectors:[["app-header"]],decls:11,vars:2,consts:[[1,"welcome-message"],[1,"user-info"],[3,"click"]],template:function(e,t){1&e&&(a.Nb(0,"header"),a.Nb(1,"div",0),a.yc(2," Bienvenido, "),a.Nb(3,"span"),a.yc(4),a.Mb(),a.yc(5," a nuestra aplicaci\xf3n. "),a.Mb(),a.Nb(6,"div",1),a.Nb(7,"span"),a.yc(8),a.Mb(),a.Nb(9,"button",2),a.Xb("click",function(){return t.logout()}),a.yc(10,"Cerrar sesi\xf3n"),a.Mb(),a.Mb(),a.Mb()),2&e&&(a.wb(4),a.zc(t.username),a.wb(4),a.zc(t.username))},styles:["header[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center;padding:10px 20px;background-color:#4caf50;color:#fff;font-family:Arial,sans-serif;box-shadow:0 4px 6px rgba(0,0,0,.1)}header[_ngcontent-%COMP%]   .welcome-message[_ngcontent-%COMP%]{font-size:1.2rem}header[_ngcontent-%COMP%]   .user-info[_ngcontent-%COMP%]{display:flex;align-items:center}header[_ngcontent-%COMP%]   .user-info[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{margin-right:15px;font-weight:700}header[_ngcontent-%COMP%]   .user-info[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{padding:8px 12px;font-size:1rem;background-color:#f44336;color:#fff;border:none;border-radius:4px;cursor:pointer;transition:background-color .3s}header[_ngcontent-%COMP%]   .user-info[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover{background-color:#d32f2f}"]}),e})(),c=(()=>{class e{constructor(){}ngOnInit(){}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=a.Cb({type:e,selectors:[["app-access-done"]],decls:4,vars:0,template:function(e,t){1&e&&(a.Jb(0,"app-lateral-menu"),a.Nb(1,"div"),a.Jb(2,"app-header"),a.Jb(3,"router-outlet"),a.Mb())},directives:[i,s,o.g],styles:["[_nghost-%COMP%]{display:grid;grid-template-columns:auto 1fr}"]}),e})(),d=(()=>{class e{constructor(){}ngOnInit(){}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=a.Cb({type:e,selectors:[["app-admin-stock"]],decls:1,vars:0,template:function(e,t){1&e&&a.Jb(0,"router-outlet")},directives:[o.g],styles:[""]}),e})();var b=n("3Pt+"),l=n("bBs+");let u=(()=>{class e{constructor(){}addItemMessage(){alertify.success("producto agregado")}editItemMessage(){alertify.success("producto editado")}cantidadAgregadaMessage(){alertify.success("added quantity")}agregadoMessage(){alertify.success("added ")}deleteItemMessage(){alertify.error("producto eliminado")}errorServer(){alertify.error("error en el servidor, intente luego")}invalidUser(){alertify.error("el usuario o contrase\xf1a fue incorrecta")}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275prov=a.Eb({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();function m(e,t){1&e&&(a.Nb(0,"div",14),a.Nb(1,"small"),a.yc(2,"La cantidad debe ser mayor a 0."),a.Mb(),a.Mb())}let g=(()=>{class e{constructor(e,t,n,r){this.route=e,this.phoneCasesService=t,this.fb=n,this.alertyMessagesService=r}ngOnInit(){this.initializeForms(),this.route.paramMap.subscribe(e=>{this.id=e.get("id"),this.nombreCaso=e.get("nombre"),this.id&&(this.updateQuantityForm.patchValue({_id:this.id}),console.log("ID actualizado:",this.id))})}initializeForms(){this.updateQuantityForm=this.fb.group({_id:["",b.p.required],cantidad:[0,[b.p.required,b.p.min(1)]]})}addQuantity(){if(this.updateQuantityForm.invalid)return void console.warn("Formulario inv\xe1lido:",this.updateQuantityForm.errors);const{_id:e,cantidad:t}=this.updateQuantityForm.value;this.phoneCasesService.addQuantity(e,t).subscribe({next:e=>{console.log("Cantidad sumada exitosamente:",e),this.alertyMessagesService.cantidadAgregadaMessage(),this.updateQuantityForm.reset({_id:this.id,cantidad:0})},error:e=>{console.error("Error al sumar cantidad:",e)}})}}return e.\u0275fac=function(t){return new(t||e)(a.Ib(o.a),a.Ib(l.a),a.Ib(b.c),a.Ib(u))},e.\u0275cmp=a.Cb({type:e,selectors:[["app-agregar-cantidad"]],decls:23,vars:4,consts:[["aria-label","breadcrumb"],[1,"breadcrumb"],[1,"breadcrumb-item"],["routerLink","/admin/access-done","routerLinkActive","active"],["routerLink","/admin/access-done/admin-stock","routerLinkActive","active"],["aria-current","page",1,"breadcrumb-item"],[1,"container"],[3,"formGroup","ngSubmit"],["for","nombreCaso"],["id","nombreCaso","type","text","readonly","",1,"readonly-input",3,"value"],["for","cantidad"],["id","cantidad","formControlName","cantidad","type","number","placeholder","Cantidad",1,"form-input"],["class","error-message",4,"ngIf"],["type","submit",1,"submit-btn",3,"disabled"],[1,"error-message"]],template:function(e,t){if(1&e&&(a.Nb(0,"nav",0),a.Nb(1,"ol",1),a.Nb(2,"li",2),a.Nb(3,"a",3),a.yc(4,"access-done"),a.Mb(),a.Mb(),a.Nb(5,"li",2),a.Nb(6,"a",4),a.yc(7,"admin-stock"),a.Mb(),a.Mb(),a.Nb(8,"li",5),a.yc(9,"add"),a.Mb(),a.Mb(),a.Mb(),a.Nb(10,"div",6),a.Nb(11,"h2"),a.yc(12,"Actualizar Cantidad"),a.Mb(),a.Nb(13,"form",7),a.Xb("ngSubmit",function(){return t.addQuantity()}),a.Nb(14,"label",8),a.yc(15,"Nombre del caso:"),a.Mb(),a.Jb(16,"input",9),a.Nb(17,"label",10),a.yc(18,"Cantidad a agregar:"),a.Mb(),a.Jb(19,"input",11),a.wc(20,m,3,0,"div",12),a.Nb(21,"button",13),a.yc(22," Agregar Cantidad "),a.Mb(),a.Mb(),a.Mb()),2&e){let e=null;a.wb(13),a.hc("formGroup",t.updateQuantityForm),a.wb(3),a.hc("value",t.nombreCaso),a.wb(4),a.hc("ngIf",(null==(e=t.updateQuantityForm.get("cantidad"))?null:e.invalid)&&(null==(e=t.updateQuantityForm.get("cantidad"))?null:e.touched)),a.wb(1),a.hc("disabled",t.updateQuantityForm.invalid)}},directives:[o.e,o.d,b.r,b.l,b.g,b.b,b.n,b.k,b.e,r.l],styles:["[_nghost-%COMP%]{display:block;padding-top:30px}.container[_ngcontent-%COMP%]{max-width:400px;margin:2rem auto;padding:1.5rem;background:#f9f9f9;border-radius:8px;box-shadow:0 2px 10px rgba(0,0,0,.1);font-family:Arial,sans-serif}h2[_ngcontent-%COMP%]{text-align:center;margin-bottom:1.5rem;color:#333}label[_ngcontent-%COMP%]{display:block;margin-bottom:.5rem;font-weight:700;color:#555}input[_ngcontent-%COMP%]{width:100%;padding:.5rem;margin-bottom:1rem;border:1px solid #ccc;border-radius:4px;font-size:1rem;box-sizing:border-box}.readonly-input[_ngcontent-%COMP%]{background-color:#e9ecef;color:#6c757d;cursor:not-allowed}.form-input[_ngcontent-%COMP%]:focus{border-color:#007bff;outline:none}.error-message[_ngcontent-%COMP%]{color:#e74c3c;font-size:.875rem;margin-bottom:1rem}.submit-btn[_ngcontent-%COMP%]{width:100%;padding:.75rem;font-size:1rem;color:#fff;background-color:#007bff;border:none;border-radius:4px;cursor:pointer;transition:background-color .3s}.submit-btn[_ngcontent-%COMP%]:hover{background-color:#0056b3}.submit-btn[_ngcontent-%COMP%]:disabled{background-color:#6c757d;cursor:not-allowed}"]}),e})(),p=(()=>{class e{constructor(e,t,n,r){this.route=e,this.phoneCasesService=t,this.fb=n,this.alertyMessagesService=r}ngOnInit(){this.initializeForms(),this.route.paramMap.subscribe(e=>{this.id=e.get("id"),console.log(this.id),this.nombreCaso=e.get("nombre"),this.id&&(this.updateQuantityForm.patchValue({_id:this.id}),console.log("ID actualizado:",this.id))})}initializeForms(){this.updateQuantityForm=this.fb.group({_id:["",b.p.required],cantidad:[0,[b.p.required]],nota:[""]})}editQuantity(){if(this.updateQuantityForm.invalid)return void console.warn("Formulario inv\xe1lido:",this.updateQuantityForm.errors);const{_id:e,cantidad:t,nota:n}=this.updateQuantityForm.value;this.phoneCasesService.editQuantity(e,t,n).subscribe({next:e=>{console.log("Cantidad sumada exitosamente:",e),this.alertyMessagesService.editItemMessage(),this.updateQuantityForm.reset({_id:this.id,cantidad:0,nota:""})},error:e=>{console.error("Error al sumar cantidad:",e)}})}}return e.\u0275fac=function(t){return new(t||e)(a.Ib(o.a),a.Ib(l.a),a.Ib(b.c),a.Ib(u))},e.\u0275cmp=a.Cb({type:e,selectors:[["app-edit-cantidades"]],decls:25,vars:3,consts:[["aria-label","breadcrumb"],[1,"breadcrumb"],[1,"breadcrumb-item"],["routerLink","/admin/access-done","routerLinkActive","active"],["routerLink","/admin/access-done/admin-stock","routerLinkActive","active"],["aria-current","page",1,"breadcrumb-item"],[1,"container"],[3,"formGroup","ngSubmit"],["for","nombreCaso"],["id","nombreCaso","type","text","readonly","",1,"readonly-input",3,"value"],["for","cantidad"],["id","cantidad","formControlName","cantidad","type","number","placeholder","Cantidad",1,"form-input"],["for","nota"],["id","nota","formControlName","nota","placeholder","A\xf1ade una nota (opcional)",1,"form-input"],["type","submit",1,"submit-btn",3,"disabled"]],template:function(e,t){1&e&&(a.Nb(0,"nav",0),a.Nb(1,"ol",1),a.Nb(2,"li",2),a.Nb(3,"a",3),a.yc(4,"access-done"),a.Mb(),a.Mb(),a.Nb(5,"li",2),a.Nb(6,"a",4),a.yc(7,"admin-stock"),a.Mb(),a.Mb(),a.Nb(8,"li",5),a.yc(9,"add"),a.Mb(),a.Mb(),a.Mb(),a.Nb(10,"div",6),a.Nb(11,"h2"),a.yc(12,"Actualizar Cantidad"),a.Mb(),a.Nb(13,"form",7),a.Xb("ngSubmit",function(){return t.editQuantity()}),a.Nb(14,"label",8),a.yc(15,"Nombre del caso:"),a.Mb(),a.Jb(16,"input",9),a.Nb(17,"label",10),a.yc(18,"Cantidad a editar:"),a.Mb(),a.Jb(19,"input",11),a.Nb(20,"label",12),a.yc(21,"Nota:"),a.Mb(),a.Jb(22,"textarea",13),a.Nb(23,"button",14),a.yc(24," Agregar Cantidad "),a.Mb(),a.Mb(),a.Mb()),2&e&&(a.wb(13),a.hc("formGroup",t.updateQuantityForm),a.wb(3),a.hc("value",t.nombreCaso),a.wb(7),a.hc("disabled",t.updateQuantityForm.invalid))},directives:[o.e,o.d,b.r,b.l,b.g,b.b,b.n,b.k,b.e],styles:["[_nghost-%COMP%]{display:block;padding-top:30px}.container[_ngcontent-%COMP%]{max-width:400px;margin:2rem auto;padding:1.5rem;background:#f9f9f9;border-radius:8px;box-shadow:0 2px 10px rgba(0,0,0,.1);font-family:Arial,sans-serif}h2[_ngcontent-%COMP%]{text-align:center;margin-bottom:1.5rem;color:#333}label[_ngcontent-%COMP%]{display:block;margin-bottom:.5rem;font-weight:700;color:#555}input[_ngcontent-%COMP%]{width:100%;padding:.5rem;margin-bottom:1rem;border:1px solid #ccc;border-radius:4px;font-size:1rem;box-sizing:border-box}.readonly-input[_ngcontent-%COMP%]{background-color:#e9ecef;color:#6c757d;cursor:not-allowed}.form-input[_ngcontent-%COMP%]:focus{outline:none}.error-message[_ngcontent-%COMP%]{color:#e74c3c;font-size:.875rem;margin-bottom:1rem}.submit-btn[_ngcontent-%COMP%]{width:100%;padding:.75rem;font-size:1rem;color:#fff;background-color:#007bff;border:none;border-radius:4px;cursor:pointer;transition:background-color .3s}.submit-btn[_ngcontent-%COMP%]:hover{background-color:#0056b3}.submit-btn[_ngcontent-%COMP%]:disabled{background-color:#6c757d;cursor:not-allowed}.form-label[_ngcontent-%COMP%]{display:block;font-weight:600;margin-bottom:5px}.form-input[_ngcontent-%COMP%], .form-label[_ngcontent-%COMP%]{font-size:14px;color:#333}.form-input[_ngcontent-%COMP%]{width:100%;min-height:100px;padding:10px 15px;border:1px solid #ccc;border-radius:8px;background-color:#f9f9f9;transition:all .3s ease;outline:none;resize:vertical}.form-input[_ngcontent-%COMP%]:hover{border-color:#999}.form-input[_ngcontent-%COMP%]:focus{border-color:#007bff;box-shadow:0 0 8px rgba(0,123,255,.3);background-color:#fff}.form-input[_ngcontent-%COMP%]::placeholder{color:#aaa;font-style:italic}"]}),e})();const f=function(e){return["/admin/access-done/admin-stock/ver-detalles",e]},h=function(e,t){return["/admin/access-done/admin-stock/agregar-cantidad",e,t]},M=function(e,t){return["/admin/access-done/admin-stock/edit-quantity",e,t]};function y(e,t){if(1&e&&(a.Nb(0,"tr"),a.Nb(1,"td"),a.yc(2),a.Mb(),a.Nb(3,"td"),a.yc(4),a.Mb(),a.Nb(5,"td"),a.yc(6),a.Mb(),a.Nb(7,"td"),a.Nb(8,"button",6),a.yc(9," View Details "),a.Mb(),a.Mb(),a.Nb(10,"td"),a.Nb(11,"button",7),a.yc(12," Add "),a.Mb(),a.Mb(),a.Nb(13,"td"),a.Nb(14,"button",8),a.yc(15," edit "),a.Mb(),a.Mb(),a.Mb()),2&e){const e=t.$implicit,n=a.bc();a.wb(2),a.zc(e.nombre),a.wb(2),a.zc(e.cantidad),a.wb(2),a.zc(n.currentDate),a.wb(2),a.hc("routerLink",a.kc(6,f,e._id)),a.wb(3),a.hc("routerLink",a.lc(8,h,e._id,e.nombre)),a.wb(3),a.hc("routerLink",a.lc(11,M,e._id,e.nombre))}}let v=(()=>{class e{constructor(e){this.phoneCasesService=e,this.cases=[],this.iphones=[{id:1,name:"iPhone 12 Mini",quantity:23},{id:2,name:"iPhone 12",quantity:8},{id:3,name:"iPhone 12 Pro",quantity:15},{id:4,name:"iPhone 12 Pro Max",quantity:29},{id:5,name:"iPhone 13 Mini",quantity:12},{id:6,name:"iPhone 13",quantity:19},{id:7,name:"iPhone 13 Pro",quantity:34},{id:8,name:"iPhone 13 Pro Max",quantity:27},{id:9,name:"iPhone 14",quantity:5},{id:10,name:"iPhone 14 Plus",quantity:17},{id:11,name:"iPhone 14 Pro",quantity:30},{id:12,name:"iPhone 14 Pro Max",quantity:13},{id:13,name:"iPhone 15",quantity:21},{id:14,name:"iPhone 15 Plus",quantity:9},{id:15,name:"iPhone 15 Pro",quantity:14},{id:16,name:"iPhone 15 Pro Max",quantity:25},{id:17,name:"SE Segunda Generaci\xf3n",quantity:11},{id:18,name:"iPhone 16",quantity:32},{id:19,name:"iPhone 16 Pro",quantity:18},{id:20,name:"iPhone 16 Pro Max",quantity:7}]}ngOnInit(){this.loadCases()}loadCases(){this.phoneCasesService.getCases().subscribe({next:e=>{this.cases=e},error:e=>{console.error("Error al cargar casos:",e)}})}}return e.\u0275fac=function(t){return new(t||e)(a.Ib(l.a))},e.\u0275cmp=a.Cb({type:e,selectors:[["app-list-all"]],decls:20,vars:1,consts:[[1,"container","mt-5"],[1,"mb-4"],[1,"table","table-striped","table-hover"],[1,"table-dark"],["scope","col"],[4,"ngFor","ngForOf"],[1,"btn","btn-info","btn-sm",3,"routerLink"],[1,"btn","btn-success","btn-sm",3,"routerLink"],[1,"btn","btn-warning","btn-sm",3,"routerLink"]],template:function(e,t){1&e&&(a.Nb(0,"div",0),a.Nb(1,"h2",1),a.yc(2,"Product Management"),a.Mb(),a.Nb(3,"table",2),a.Nb(4,"thead",3),a.Nb(5,"tr"),a.Nb(6,"th",4),a.yc(7,"Product Name"),a.Mb(),a.Nb(8,"th",4),a.yc(9,"Quantities"),a.Mb(),a.Nb(10,"th",4),a.yc(11,"Last Update"),a.Mb(),a.Nb(12,"th",4),a.yc(13,"Details"),a.Mb(),a.Nb(14,"th",4),a.yc(15,"Add New"),a.Mb(),a.Nb(16,"th",4),a.yc(17,"Edit Quantities"),a.Mb(),a.Mb(),a.Mb(),a.Nb(18,"tbody"),a.wc(19,y,16,14,"tr",5),a.Mb(),a.Mb(),a.Mb()),2&e&&(a.wb(19),a.hc("ngForOf",t.cases))},directives:[r.k,o.c],styles:[""]}),e})();var w=n("eIep"),C=n("tk/3"),N=n("AytR");let P=(()=>{class e{constructor(e){this.http=e}getToken(){return localStorage.getItem("token")}getHeaders(){const e=this.getToken();return new C.d({Authorization:"Bearer "+e})}getProductHistory(e){return this.http.get(`${N.a.url_endpoint}/detalles/${e}`,{headers:this.getHeaders()})}deleteProduct(e){return this.http.delete(`${N.a.url_endpoint}/detalles/${e}`,{headers:this.getHeaders()})}}return e.\u0275fac=function(t){return new(t||e)(a.Ub(C.b))},e.\u0275prov=a.Eb({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const k=function(e,t){return{"bg-red":e,"bg-green":t}};function x(e,t){if(1&e){const e=a.Ob();a.Nb(0,"li",10),a.Nb(1,"p"),a.Nb(2,"strong"),a.yc(3,"Acci\xf3n:"),a.Mb(),a.yc(4),a.Mb(),a.Nb(5,"p"),a.Nb(6,"strong"),a.yc(7,"Fecha:"),a.Mb(),a.yc(8),a.cc(9,"date"),a.Mb(),a.Nb(10,"p"),a.Nb(11,"strong"),a.yc(12,"Cantidad cambiada:"),a.Mb(),a.yc(13),a.Mb(),a.Nb(14,"p"),a.Nb(15,"strong"),a.yc(16,"Nota:"),a.Mb(),a.yc(17),a.Mb(),a.Nb(18,"button",11),a.Xb("click",function(){a.qc(e);const n=t.index,r=t.$implicit;return a.bc(2).deleteRecord(n,r._id)}),a.yc(19," Eliminar "),a.Mb(),a.Jb(20,"hr"),a.Mb()}if(2&e){const e=t.$implicit;a.hc("ngClass",a.lc(8,k,"cantidad restada"===e.accion,"cantidad agregada"===e.accion)),a.wb(4),a.Ac(" ",e.accion,""),a.wb(4),a.Ac(" ",a.ec(9,5,e.fecha,"short"),""),a.wb(5),a.Ac(" ",e.cantidadCambiada,""),a.wb(4),a.Ac(" ",e.nota,"")}}function O(e,t){if(1&e&&(a.Nb(0,"ul"),a.wc(1,x,21,11,"li",9),a.Mb()),2&e){const e=a.bc();a.wb(1),a.hc("ngForOf",e.history)}}function _(e,t){1&e&&(a.Nb(0,"p"),a.yc(1,"No hay historial disponible para este producto."),a.Mb())}let I=(()=>{class e{constructor(e,t){this.route=e,this.productHistoryService=t,this.history=[]}ngOnInit(){this.route.params.pipe(Object(w.a)(e=>(this.itemId=e.itemId,console.log(this.itemId),this.productHistoryService.getProductHistory(this.itemId)))).subscribe(e=>{console.log(e),this.history=e},e=>{console.error("Error al obtener el historial:",e)})}deleteRecord(e,t){this.productHistoryService.deleteProduct(t).subscribe(t=>{console.log("Producto eliminado:",t),this.history.splice(e,1)},e=>{console.error("Error al eliminar el producto:",e)})}}return e.\u0275fac=function(t){return new(t||e)(a.Ib(o.a),a.Ib(P))},e.\u0275cmp=a.Cb({type:e,selectors:[["app-ver-detalles"]],decls:16,vars:2,consts:[["aria-label","breadcrumb"],[1,"breadcrumb"],[1,"breadcrumb-item"],["routerLink","/admin/access-done","routerLinkActive","active"],["routerLink","/admin/access-done/admin-stock","routerLinkActive","active"],["aria-current","page",1,"breadcrumb-item"],[1,"history-container"],[4,"ngIf","ngIfElse"],["noHistory",""],[3,"ngClass",4,"ngFor","ngForOf"],[3,"ngClass"],[1,"btn","btn-danger",3,"click"]],template:function(e,t){if(1&e&&(a.Nb(0,"nav",0),a.Nb(1,"ol",1),a.Nb(2,"li",2),a.Nb(3,"a",3),a.yc(4,"access-done"),a.Mb(),a.Mb(),a.Nb(5,"li",2),a.Nb(6,"a",4),a.yc(7,"admin-stock"),a.Mb(),a.Mb(),a.Nb(8,"li",5),a.yc(9,"view details"),a.Mb(),a.Mb(),a.Mb(),a.Nb(10,"div",6),a.Nb(11,"h2"),a.yc(12,"Historial de Producto"),a.Mb(),a.wc(13,O,2,1,"ul",7),a.wc(14,_,2,0,"ng-template",null,8,a.xc),a.Mb()),2&e){const e=a.oc(15);a.wb(13),a.hc("ngIf",t.history.length>0)("ngIfElse",e)}},directives:[o.e,o.d,r.l,r.k,r.j],pipes:[r.d],styles:["[_nghost-%COMP%]{display:block;padding-top:30px}.bg-red[_ngcontent-%COMP%]{background-color:#fcc}.bg-green[_ngcontent-%COMP%], .bg-red[_ngcontent-%COMP%]{padding:10px;border-radius:5px}.bg-green[_ngcontent-%COMP%]{background-color:#cfc}"]}),e})(),S=(()=>{class e{constructor(){}ngOnInit(){}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=a.Cb({type:e,selectors:[["app-admin"]],decls:1,vars:0,template:function(e,t){1&e&&a.Jb(0,"router-outlet")},directives:[o.g],styles:["[_nghost-%COMP%]{height:100%}"]}),e})(),F=(()=>{class e{constructor(e){this.router=e}canActivate(){const e=localStorage.getItem("token");if(e)try{if(!(1e3*JSON.parse(atob(e.split(".")[1])).exp<Date.now()))return!0;console.warn("Token expirado")}catch(t){console.error("Error al decodificar el token",t)}return this.router.navigate(["/admin/login"]),!1}}return e.\u0275fac=function(t){return new(t||e)(a.Ub(o.b))},e.\u0275prov=a.Eb({token:e,factory:e.\u0275fac,providedIn:"root"}),e})(),A=(()=>{class e{constructor(e){this.http=e}loginUser(e){return this.http.post(N.a.url_endpoint+"/admin/login",e)}}return e.\u0275fac=function(t){return new(t||e)(a.Ub(C.b))},e.\u0275prov=a.Eb({token:e,factory:e.\u0275fac,providedIn:"root"}),e})(),z=(()=>{class e{rememberUserAndPassword(e,t,n){e?this.saveUserAndPassword(t,n):this.cleanLocalstorage()}saveUserAndPassword(e,t){localStorage.setItem("user",e),localStorage.setItem("password",t)}cleanLocalstorage(){localStorage.removeItem("user"),localStorage.removeItem("password")}checkLogin(){const e=localStorage.getItem("user"),t=localStorage.getItem("password");return!(!e||!t)}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275prov=a.Eb({token:e,factory:e.\u0275fac,providedIn:"root"}),e})(),q=(()=>{class e{constructor(e,t,n,r){this.loginAdminService=e,this.router=t,this.rememberUserAndPassService=n,this.alertyMessagesService=r,this.showPassword=!1,this.procesandoImg=!1,this.form=new b.f({email:new b.d("",[b.p.required]),password:new b.d("",b.p.required),remember:new b.d(!1)})}ngOnInit(){localStorage.getItem("remember")&&this.form.setValue({user:localStorage.getItem("email"),password:localStorage.getItem("password"),remember:!0})}get email(){return this.form.get("email")}get password(){return this.form.get("password")}toggleShowPassword(){this.showPassword=!this.showPassword}access(){var e,t,n;this.procesandoImg=!0;const r=null===(e=this.form.get("remember"))||void 0===e?void 0:e.value,o=null===(t=this.form.get("email"))||void 0===t?void 0:t.value,a=null===(n=this.form.get("password"))||void 0===n?void 0:n.value;this.rememberUserAndPassService.rememberUserAndPassword(r,o,a),this.loginAdminService.loginUser(this.form.value).subscribe(e=>{this.procesandoImg=!1,console.log(e),localStorage.setItem("token",e.data.token),localStorage.setItem("username",e.data.user.name),this.rememberUserAndPassService.saveUserAndPassword(o,a),this.router.navigate(["/admin/access-done"])},e=>{this.procesandoImg=!1,this.alertyMessagesService.invalidUser(),this.rememberUserAndPassService.cleanLocalstorage()})}}return e.\u0275fac=function(t){return new(t||e)(a.Ib(A),a.Ib(o.b),a.Ib(z),a.Ib(u))},e.\u0275cmp=a.Cb({type:e,selectors:[["app-login"]],decls:18,vars:3,consts:[[1,"container"],[1,"container-form",3,"formGroup"],[1,"mb-3"],["for","exampleFormControlInput1",1,"form-label"],["type","text","formControlName","email","id","exampleFormControlInput1","placeholder","name@example.com",1,"form-control"],[1,"input-group","mb-3"],["placeholder","password","aria-describedby","basic-addon2","formControlName","password","id","exampleFormControlInput2",1,"form-control",3,"type"],["id","basic-addon2","type","button",1,"input-group-text",3,"click"],[1,"form-check"],["formControlName","remember","type","checkbox","value","","id","flexCheckDefault",1,"form-check-input"],["for","flexCheckDefault",1,"form-check-label"],[1,"login-botones"],["type","button",1,"btn","btn-primary",3,"click"]],template:function(e,t){1&e&&(a.Nb(0,"div",0),a.Nb(1,"form",1),a.Nb(2,"div",2),a.Nb(3,"label",3),a.yc(4,"email"),a.Mb(),a.Jb(5,"input",4),a.Mb(),a.Nb(6,"div",5),a.Jb(7,"input",6),a.Nb(8,"button",7),a.Xb("click",function(){return t.toggleShowPassword()}),a.yc(9),a.Mb(),a.Mb(),a.Nb(10,"div",8),a.Jb(11,"input",9),a.Nb(12,"label",10),a.yc(13," recordar "),a.Mb(),a.Mb(),a.Jb(14,"br"),a.Nb(15,"div",11),a.Nb(16,"button",12),a.Xb("click",function(){return t.access()}),a.yc(17,"loguin"),a.Mb(),a.Mb(),a.Mb(),a.Mb()),2&e&&(a.wb(1),a.hc("formGroup",t.form),a.wb(6),a.ic("type",t.showPassword?"text":"password"),a.wb(2),a.Ac(" ",t.showPassword?"Ocultar":"Mostrar"," contrase\xf1a "))},directives:[b.r,b.l,b.g,b.b,b.k,b.e,b.a],styles:["[_nghost-%COMP%]{display:flex;align-items:center;justify-content:center;height:100%}.container[_ngcontent-%COMP%]{max-width:500px;height:300px}"]}),e})(),L=(()=>{class e{constructor(e){this.http=e,this.apiUrl="http://localhost:3000/api/admins"}registerAdmin(e){return this.http.post(N.a.url_endpoint+"/admin/regist-admin",e)}}return e.\u0275fac=function(t){return new(t||e)(a.Ub(C.b))},e.\u0275prov=a.Eb({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();function Q(e,t){1&e&&(a.Nb(0,"div",13),a.yc(1," Name is required and must be at least 3 characters long. "),a.Mb())}function J(e,t){1&e&&(a.Nb(0,"div",13),a.yc(1," Please enter a valid email. "),a.Mb())}function E(e,t){1&e&&(a.Nb(0,"div",13),a.yc(1," Password is required and must be at least 6 characters long. "),a.Mb())}function U(e,t){if(1&e&&(a.Nb(0,"div",14),a.yc(1),a.Mb()),2&e){const e=a.bc();a.wb(1),a.zc(e.successMessage)}}function G(e,t){if(1&e&&(a.Nb(0,"div",15),a.yc(1),a.Mb()),2&e){const e=a.bc();a.wb(1),a.zc(e.errorMessage)}}let D=(()=>{class e{constructor(e,t){this.fb=e,this.adminService=t,this.successMessage="",this.errorMessage="",this.adminForm=this.fb.group({name:["",[b.p.required,b.p.minLength(3)]],email:["",[b.p.required,b.p.email]],password:["",[b.p.required,b.p.minLength(6)]]})}onSubmit(){this.adminForm.valid&&this.adminService.registerAdmin(this.adminForm.value).subscribe({next:e=>{this.successMessage="Admin registered successfully!",this.errorMessage="",this.adminForm.reset()},error:e=>{this.errorMessage="Failed to register admin. Please try again.",this.successMessage="",console.error(e)}})}}return e.\u0275fac=function(t){return new(t||e)(a.Ib(b.c),a.Ib(L))},e.\u0275cmp=a.Cb({type:e,selectors:[["app-agregar-admin"]],decls:23,vars:7,consts:[[1,"container"],[3,"formGroup","ngSubmit"],[1,"form-group"],["for","name"],["id","name","type","text","formControlName","name",1,"form-control"],["class","error",4,"ngIf"],["for","email"],["id","email","type","email","formControlName","email",1,"form-control"],["for","password"],["id","password","type","password","formControlName","password",1,"form-control"],["type","submit",1,"btn","btn-primary",3,"disabled"],["class","alert alert-success mt-3",4,"ngIf"],["class","alert alert-danger mt-3",4,"ngIf"],[1,"error"],[1,"alert","alert-success","mt-3"],[1,"alert","alert-danger","mt-3"]],template:function(e,t){if(1&e&&(a.Nb(0,"div",0),a.Nb(1,"h2"),a.yc(2,"Register Admin"),a.Mb(),a.Nb(3,"form",1),a.Xb("ngSubmit",function(){return t.onSubmit()}),a.Nb(4,"div",2),a.Nb(5,"label",3),a.yc(6,"Name"),a.Mb(),a.Jb(7,"input",4),a.wc(8,Q,2,0,"div",5),a.Mb(),a.Nb(9,"div",2),a.Nb(10,"label",6),a.yc(11,"Email"),a.Mb(),a.Jb(12,"input",7),a.wc(13,J,2,0,"div",5),a.Mb(),a.Nb(14,"div",2),a.Nb(15,"label",8),a.yc(16,"Password"),a.Mb(),a.Jb(17,"input",9),a.wc(18,E,2,0,"div",5),a.Mb(),a.Nb(19,"button",10),a.yc(20,"Register"),a.Mb(),a.Mb(),a.wc(21,U,2,1,"div",11),a.wc(22,G,2,1,"div",12),a.Mb()),2&e){let e=null,n=null,r=null;a.wb(3),a.hc("formGroup",t.adminForm),a.wb(5),a.hc("ngIf",(null==(e=t.adminForm.get("name"))?null:e.invalid)&&(null==(e=t.adminForm.get("name"))?null:e.touched)),a.wb(5),a.hc("ngIf",(null==(n=t.adminForm.get("email"))?null:n.invalid)&&(null==(n=t.adminForm.get("email"))?null:n.touched)),a.wb(5),a.hc("ngIf",(null==(r=t.adminForm.get("password"))?null:r.invalid)&&(null==(r=t.adminForm.get("password"))?null:r.touched)),a.wb(1),a.hc("disabled",t.adminForm.invalid),a.wb(2),a.hc("ngIf",t.successMessage),a.wb(1),a.hc("ngIf",t.errorMessage)}},directives:[b.r,b.l,b.g,b.b,b.k,b.e,r.l],styles:[""]}),e})();function H(e,t){1&e&&(a.Nb(0,"div"),a.Nb(1,"small"),a.yc(2,"El nombre es obligatorio y debe tener al menos 3 caracteres."),a.Mb(),a.Mb())}const X=[{path:"",component:S,children:[{path:"login",component:q},{path:"access-done",component:c,canActivate:[F],children:[{path:"admin-stock",component:d,children:[{path:"lista-completa",component:v},{path:"agregar-cantidad/:id/:nombre",component:g},{path:"edit-quantity/:id/:nombre",component:p},{path:"ver-detalles/:itemId",component:I},{path:"",component:v}]},{path:"",redirectTo:"details",pathMatch:"full"}]},{path:"",redirectTo:"login",pathMatch:"full"},{path:"super-admin",component:(()=>{class e{constructor(e,t,n){this.phoneCasesService=e,this.fb=t,this.alertyMessagesService=n}ngOnInit(){this.initializeForms()}initializeForms(){this.addCaseForm=this.fb.group({name:["",[b.p.required,b.p.minLength(3)]]})}addCase(){if(this.addCaseForm.invalid)return;const{name:e}=this.addCaseForm.value;this.phoneCasesService.addCase(e,1).subscribe({next:e=>{console.log("Caso agregado:",e),this.addCaseForm.reset(),this.alertyMessagesService.agregadoMessage()},error:e=>{console.error("Error al agregar caso:",e)}})}}return e.\u0275fac=function(t){return new(t||e)(a.Ib(l.a),a.Ib(b.c),a.Ib(u))},e.\u0275cmp=a.Cb({type:e,selectors:[["app-super-admin"]],decls:13,vars:3,consts:[[1,"super-admin-header"],[3,"formGroup","ngSubmit"],["formControlName","name","placeholder","Nombre del caso"],[4,"ngIf"],["type","submit",3,"disabled"]],template:function(e,t){if(1&e&&(a.Nb(0,"div",0),a.Nb(1,"h1"),a.yc(2,"Super Admin Section"),a.Mb(),a.Nb(3,"p"),a.yc(4,"Manage cases efficiently and effectively from here."),a.Mb(),a.Mb(),a.Nb(5,"form",1),a.Xb("ngSubmit",function(){return t.addCase()}),a.Nb(6,"h2"),a.yc(7,"Agregar nuevo caso"),a.Mb(),a.Jb(8,"input",2),a.wc(9,H,3,0,"div",3),a.Nb(10,"button",4),a.yc(11,"Agregar Caso"),a.Mb(),a.Mb(),a.Jb(12,"app-agregar-admin")),2&e){let e=null;a.wb(5),a.hc("formGroup",t.addCaseForm),a.wb(4),a.hc("ngIf",(null==(e=t.addCaseForm.get("name"))?null:e.invalid)&&(null==(e=t.addCaseForm.get("name"))?null:e.touched)),a.wb(1),a.hc("disabled",t.addCaseForm.invalid)}},directives:[b.r,b.l,b.g,b.b,b.k,b.e,r.l,D],styles:["h2[_ngcontent-%COMP%]{font-size:1.8rem;margin-bottom:20px;color:#4caf50;text-align:center;font-weight:700}form[_ngcontent-%COMP%]{max-width:400px;margin:0 auto;padding:20px;border:1px solid #ddd;border-radius:8px;box-shadow:0 4px 6px rgba(0,0,0,.1);background-color:#f9f9f9}input[_ngcontent-%COMP%]{width:100%;padding:10px;margin-bottom:10px;border:1px solid #ccc;border-radius:5px;font-size:1rem;transition:border-color .2s ease-in-out}input[_ngcontent-%COMP%]:focus{border-color:#4caf50;outline:none;box-shadow:0 0 4px rgba(76,175,80,.5)}button[_ngcontent-%COMP%]{width:100%;padding:10px;background-color:#4caf50;color:#fff;font-size:1rem;font-weight:700;border:none;border-radius:5px;cursor:pointer;transition:background-color .2s ease-in-out}button[_ngcontent-%COMP%]:hover{background-color:#45a049}button[_ngcontent-%COMP%]:disabled{background-color:#ccc;cursor:not-allowed}small[_ngcontent-%COMP%]{color:#d32f2f;font-size:.85rem;margin-bottom:10px;display:block}@media (max-width:480px){form[_ngcontent-%COMP%]{padding:15px}h2[_ngcontent-%COMP%]{font-size:1.5rem}button[_ngcontent-%COMP%], input[_ngcontent-%COMP%]{padding:8px}button[_ngcontent-%COMP%]{font-size:.9rem}}.super-admin-header[_ngcontent-%COMP%]{text-align:center;margin-bottom:30px;padding:20px;background-color:#f5f5f5;border-radius:8px;box-shadow:0 4px 6px rgba(0,0,0,.1)}.super-admin-header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{font-size:2rem;font-weight:700;color:#4caf50;margin-bottom:10px}.super-admin-header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:1rem;color:#555;margin:0}"]}),e})()}]}];let $=(()=>{class e{}return e.\u0275mod=a.Gb({type:e}),e.\u0275inj=a.Fb({factory:function(t){return new(t||e)},imports:[[o.f.forChild(X)],o.f]}),e})(),j=(()=>{class e{}return e.\u0275mod=a.Gb({type:e}),e.\u0275inj=a.Fb({factory:function(t){return new(t||e)},providers:[],imports:[[r.b,$,b.o]]}),e})()}}]);