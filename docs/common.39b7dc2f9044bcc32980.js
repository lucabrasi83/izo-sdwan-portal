(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{FVSy:function(n,t,e){"use strict";e.d(t,"e",function(){return i}),e.d(t,"d",function(){return u}),e.d(t,"a",function(){return c}),e.d(t,"b",function(){return o}),e.d(t,"f",function(){return r}),e.d(t,"c",function(){return s});var i=function(){},u=function(){},c=function(){},o=function(){},r=function(){},s=function(){}},Z5sg:function(n,t,e){"use strict";e.d(t,"a",function(){return o});var i=e("6233"),u=e("XNvx"),c=e("CcnG"),o=function(){function n(n,t){this.db=n,this.authService=t,this.basePath="/tenant/"}return n.prototype.getTenantDevices=function(n){return this.db.list(this.basePath+"/"+n+"/devices").valueChanges()},n.prototype.getTenantObject=function(){return this.db.object("/users/"+this.authService.isAuthenticated().uid+"/tenant").snapshotChanges()},n.ngInjectableDef=c.defineInjectable({factory:function(){return new n(c.inject(i.a),c.inject(u.a))},token:n,providedIn:"root"}),n}()}}]);