(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _pages_about_about_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/about/about.component */ "./src/app/pages/about/about.component.ts");
/* harmony import */ var _pages_contact_contact_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/contact/contact.component */ "./src/app/pages/contact/contact.component.ts");
/* harmony import */ var _pages_index_new_index_new_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/index-new/index-new.component */ "./src/app/pages/index-new/index-new.component.ts");
/* harmony import */ var _pages_buy_buy_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/buy/buy.component */ "./src/app/pages/buy/buy.component.ts");
/* harmony import */ var _pages_legal_legal_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages/legal/legal.component */ "./src/app/pages/legal/legal.component.ts");
/* harmony import */ var _pages_legal_disclaimer_legal_disclaimer_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pages/legal-disclaimer/legal-disclaimer.component */ "./src/app/pages/legal-disclaimer/legal-disclaimer.component.ts");
/* harmony import */ var _pages_gold_lottery_gold_lottery_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pages/gold-lottery/gold-lottery.component */ "./src/app/pages/gold-lottery/gold-lottery.component.ts");
/* harmony import */ var _pages_errorpage_errorpage_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./pages/errorpage/errorpage.component */ "./src/app/pages/errorpage/errorpage.component.ts");
/* harmony import */ var _pages_ducatusx_ducatusx_ducatusx_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./pages/ducatusx/ducatusx/ducatusx.component */ "./src/app/pages/ducatusx/ducatusx/ducatusx.component.ts");
/* harmony import */ var _pages_voucher_voucher_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./pages/voucher/voucher.component */ "./src/app/pages/voucher/voucher.component.ts");
/* harmony import */ var _pages_rate_rate_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./pages/rate/rate.component */ "./src/app/pages/rate/rate.component.ts");
/* harmony import */ var _pages_login_login_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./pages/login/login.component */ "./src/app/pages/login/login.component.ts");
/* harmony import */ var _resolvers__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./resolvers */ "./src/app/resolvers/index.ts");


// pages
// import { IndexComponent } from './pages/index/index.component';















const routes = [
    {
        path: '',
        component: _pages_index_new_index_new_component__WEBPACK_IMPORTED_MODULE_4__["IndexNewComponent"],
    },
    // {
    //   path: 'new',
    //   component: IndexNewComponent,
    //   data: {
    //     noheader: true,
    //     nofooter: true
    //   }
    // },
    {
        path: 'about',
        component: _pages_about_about_component__WEBPACK_IMPORTED_MODULE_2__["AboutComponent"],
    },
    {
        path: 'contact',
        component: _pages_contact_contact_component__WEBPACK_IMPORTED_MODULE_3__["ContactComponent"],
    },
    {
        path: 'buy',
        component: _pages_buy_buy_component__WEBPACK_IMPORTED_MODULE_5__["BuyComponent"],
    },
    {
        path: 'legal',
        component: _pages_legal_legal_component__WEBPACK_IMPORTED_MODULE_6__["LegalComponent"],
    },
    {
        path: 'legal-disclaimer',
        component: _pages_legal_disclaimer_legal_disclaimer_component__WEBPACK_IMPORTED_MODULE_7__["LegalDisclaimerComponent"],
    },
    {
        path: 'gold-lottery',
        component: _pages_gold_lottery_gold_lottery_component__WEBPACK_IMPORTED_MODULE_8__["GoldLotteryComponent"],
    },
    {
        path: 'ducatusx',
        component: _pages_ducatusx_ducatusx_ducatusx_component__WEBPACK_IMPORTED_MODULE_10__["DucatusxComponent"],
    },
    {
        path: 'admin',
        resolve: {
            user: _resolvers__WEBPACK_IMPORTED_MODULE_14__["UserResolver"],
        },
        redirectTo: 'admin/login',
    },
    {
        path: 'admin/voucher',
        component: _pages_voucher_voucher_component__WEBPACK_IMPORTED_MODULE_11__["VoucherComponent"],
        resolve: {
            user: _resolvers__WEBPACK_IMPORTED_MODULE_14__["UserResolver"],
        },
    },
    {
        path: 'admin/rate',
        component: _pages_rate_rate_component__WEBPACK_IMPORTED_MODULE_12__["RateComponent"],
        resolve: {
            user: _resolvers__WEBPACK_IMPORTED_MODULE_14__["UserResolver"],
        },
    },
    {
        path: 'admin/login',
        component: _pages_login_login_component__WEBPACK_IMPORTED_MODULE_13__["LoginComponent"],
    },
    {
        path: '404',
        component: _pages_errorpage_errorpage_component__WEBPACK_IMPORTED_MODULE_9__["ErrorPageComponent"],
    },
    {
        path: '**',
        redirectTo: '/404',
    },
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _route_animation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./route-animation */ "./src/app/route-animation.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
/* harmony import */ var _pages_index_new_header_header_new_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/index-new/header/header-new.component */ "./src/app/pages/index-new/header/header-new.component.ts");
/* harmony import */ var _pages_index_new_footer_footer_new_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/index-new/footer/footer-new.component */ "./src/app/pages/index-new/footer/footer-new.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");









function AppComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class AppComponent {
    constructor(translateService, router) {
        this.translateService = translateService;
        this.router = router;
        this.showOverlay = true;
        this.enableHeader = true;
        this.enableFooter = true;
        this.title = 'ducatus-site';
        router.events.subscribe((event) => {
            this.navigationInterceptor(event);
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivationEnd"]) {
                this.enableHeader = !event.snapshot.data.noheader;
                this.enableFooter = !event.snapshot.data.nofooter;
            }
        });
        const defaultLng = (navigator.language || navigator['browserLanguage']).split('-')[0];
        const langToSet = window['jQuery']['cookie']('lng') || (['deu', 'eng', 'vie', 'ita'].includes(defaultLng) ? defaultLng : 'eng');
        this.translateService.use(langToSet);
    }
    prepareRoute(outlet) {
        return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
    }
    navigationInterceptor(event) {
        if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationStart"]) {
            this.showOverlay = true;
        }
        if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationEnd"]) {
            this.showOverlay = false;
            gtag('config', 'UA-153904034-1', { page_path: event.urlAfterRedirects });
        }
        if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationCancel"]) {
            this.showOverlay = false;
        }
        if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationError"]) {
            this.showOverlay = false;
        }
    }
    onActivate(event) {
        window.scroll(0, 0);
    }
    ngOnInit() { }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 6, vars: 2, consts: [[3, "activate"], ["outlet", "outlet"], ["class", "page-overlay", 4, "ngIf"], [1, "page-overlay"], ["src", "/assets/img/icons/logo.svg", "alt", "ducauts logo"], [1, "lds-ring"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-header-new");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "router-outlet", 0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("activate", function AppComponent_Template_router_outlet_activate_2_listener($event) { return ctx.onActivate($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "app-footer-new");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, AppComponent_div_5_Template, 7, 0, "div", 2);
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@routeAnimations", ctx.prepareRoute(_r0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showOverlay);
    } }, directives: [_pages_index_new_header_header_new_component__WEBPACK_IMPORTED_MODULE_4__["HeaderNewComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"], _pages_index_new_footer_footer_new_component__WEBPACK_IMPORTED_MODULE_5__["FooterNewComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"]], styles: ["@import url(\"https://fonts.googleapis.com/css?family=Montserrat:100,100i,200,200i,300,300i,400,400i,500,500i,600,600i,700,700i,800,800i,900,900i&display=swap\");\n.clearfix[_ngcontent-%COMP%]:after {\n  content: \"\";\n  display: table;\n  clear: both;\n}\n.centered[_ngcontent-%COMP%] {\n  display: table;\n  width: 100%;\n  height: 100%;\n}\n.centered[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\n  display: table-cell;\n  text-align: center;\n  vertical-align: middle;\n}\n\n.page-overlay[_ngcontent-%COMP%] {\n  position: fixed;\n  width: 100%;\n  height: 100%;\n  background-color: #F4F0E5;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  z-index: 9999;\n}\n.page-overlay[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  position: absolute;\n}\n.lds-ring[_ngcontent-%COMP%] {\n  display: inline-block;\n  position: relative;\n  width: 120px;\n  height: 120px;\n}\n.lds-ring[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n  display: block;\n  position: absolute;\n  width: 100px;\n  height: 100px;\n  margin: 8px;\n  border: 2px solid #892734;\n  border-radius: 50%;\n  -webkit-animation: lds-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;\n          animation: lds-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;\n  border-color: #892734 transparent transparent transparent;\n}\n.lds-ring[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(1) {\n  -webkit-animation-delay: -0.45s;\n          animation-delay: -0.45s;\n}\n.lds-ring[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(2) {\n  -webkit-animation-delay: -0.3s;\n          animation-delay: -0.3s;\n}\n.lds-ring[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(3) {\n  -webkit-animation-delay: -0.15s;\n          animation-delay: -0.15s;\n}\n@-webkit-keyframes lds-ring {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n@keyframes lds-ring {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9nbGViL3Byb2plY3RzL2R1Y2F0dXMtc2l0ZS9zcmMvc2Nzcy9fdmFycy5zY3NzIiwiL1VzZXJzL2dsZWIvcHJvamVjdHMvZHVjYXR1cy1zaXRlL3NyYy9zY3NzL19taXhpbnMuc2NzcyIsInNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIiwiL1VzZXJzL2dsZWIvcHJvamVjdHMvZHVjYXR1cy1zaXRlL3NyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUlRLCtKQUFBO0FDMkJSO0VBQ0MsV0FBQTtFQUNBLGNBQUE7RUFDQSxXQUFBO0FDN0JEO0FEZ0NBO0VBQ0MsY0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FDN0JEO0FEK0JDO0VBQ0MsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLHNCQUFBO0FDN0JGO0FEeU1BOzs7R0FBQTtBRXROQTtFQUNFLGVBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtBRG9CRjtBQ2xCRTtFQUNFLGtCQUFBO0FEb0JKO0FDaEJBO0VBQ0UscUJBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0FEbUJGO0FDakJBO0VBQ0Usc0JBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLFdBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0Esc0VBQUE7VUFBQSw4REFBQTtFQUNBLHlEQUFBO0FEb0JGO0FDbEJBO0VBQ0UsK0JBQUE7VUFBQSx1QkFBQTtBRHFCRjtBQ25CQTtFQUNFLDhCQUFBO1VBQUEsc0JBQUE7QURzQkY7QUNwQkE7RUFDRSwrQkFBQTtVQUFBLHVCQUFBO0FEdUJGO0FDckJBO0VBQ0U7SUFDRSx1QkFBQTtFRHdCRjtFQ3RCQTtJQUNFLHlCQUFBO0VEd0JGO0FBQ0Y7QUM5QkE7RUFDRTtJQUNFLHVCQUFBO0VEd0JGO0VDdEJBO0lBQ0UseUJBQUE7RUR3QkY7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gbWFpbiB2YXJpYWJsZXNcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG5AaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PU1vbnRzZXJyYXQ6MTAwLDEwMGksMjAwLDIwMGksMzAwLDMwMGksNDAwLDQwMGksNTAwLDUwMGksNjAwLDYwMGksNzAwLDcwMGksODAwLDgwMGksOTAwLDkwMGkmZGlzcGxheT1zd2FwJyk7XG5cbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gYWRkaXRpb25hbCB2YXJpYWJsZXNcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG5cbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gY29sb3JzXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuJGJsYWNrOiAjMDAwO1xuJGdyYXk6ICM4MDgwODA7XG4kd2hpdGU6ICNmZmY7XG4kYmx1ZTogIzAwRjtcbiRwdXJwbGU6ICM4QTRENzY7XG4kcGluazogI0ZBN0M5MTtcbiRicm93bjogIzc1Nzc2MztcbiRiZWlnZS1saWdodDogI0QwRDFDRDtcbiRiZWlnZS1saWdodGVyLTE6ICNFRkYwRUI7XG4kYmVpZ2UtbGlnaHRlci0yOiAjRjRGNEY0O1xuXG4kYnJvd24tcmVkOiAjODkyNzM0O1xuJGdvbGQteWVsbG93OiAjRThDMjJDO1xuJGRhcmstZ3JleTogIzIzMjQxZjtcbiRncmV5OiAjNGQ0YzRkO1xuJGdvbGQ6ICNEM0MxOTg7XG4kZ29sZC0yOiAjRjBFQUUzO1xuIiwiLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBtYWluIG1peGluc1xuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbkBtaXhpbiBmb250LWZhY2UoJGZvbnQtZmFtaWx5LCAkZmlsZS1wYXRoLCAkd2VpZ2h0OiBub3JtYWwsICRzdHlsZTogbm9ybWFsLCAkYXNzZXQtcGlwZWxpbmU6IGZhbHNlKSB7XG5cdEBmb250LWZhY2Uge1xuXHRcdGZvbnQtZmFtaWx5OiAkZm9udC1mYW1pbHk7XG5cdFx0Zm9udC13ZWlnaHQ6ICR3ZWlnaHQ7XG5cdFx0Zm9udC1zdHlsZTogJHN0eWxlO1xuXG5cdFx0QGlmICRhc3NldC1waXBlbGluZT09dHJ1ZSB7XG5cdFx0XHRzcmM6IGZvbnQtdXJsKCcjeyRmaWxlLXBhdGh9LmVvdCcpO1xuXHRcdFx0c3JjOiBmb250LXVybCgnI3skZmlsZS1wYXRofS5lb3Q/I2llZml4JykgZm9ybWF0KCdlbWJlZGRlZC1vcGVudHlwZScpLFxuXHRcdFx0Zm9udC11cmwoJyN7JGZpbGUtcGF0aH0ud29mZicpIGZvcm1hdCgnd29mZicpLFxuXHRcdFx0Zm9udC11cmwoJyN7JGZpbGUtcGF0aH0udHRmJykgZm9ybWF0KCd0cnVldHlwZScpO1xuXHRcdH1cblxuXHRcdEBlbHNlIHtcblx0XHRcdHNyYzogdXJsKCcjeyRmaWxlLXBhdGh9LmVvdCcpO1xuXHRcdFx0c3JjOiB1cmwoJyN7JGZpbGUtcGF0aH0uZW90PyNpZWZpeCcpIGZvcm1hdCgnZW1iZWRkZWQtb3BlbnR5cGUnKSxcblx0XHRcdHVybCgnI3skZmlsZS1wYXRofS53b2ZmJykgZm9ybWF0KCd3b2ZmJyksXG5cdFx0XHR1cmwoJyN7JGZpbGUtcGF0aH0udHRmJykgZm9ybWF0KCd0cnVldHlwZScpO1xuXHRcdH1cblx0fVxufVxuXG5AbWl4aW4gbm90ZXh0IHtcblx0b3ZlcmZsb3c6IGhpZGRlbjtcblx0dGV4dC1pbmRlbnQ6IC05OTk5cHg7XG59XG5cbi5jbGVhcmZpeDphZnRlciB7XG5cdGNvbnRlbnQ6IFwiXCI7XG5cdGRpc3BsYXk6IHRhYmxlO1xuXHRjbGVhcjogYm90aDtcbn1cblxuLmNlbnRlcmVkIHtcblx0ZGlzcGxheTogdGFibGU7XG5cdHdpZHRoOiAxMDAlO1xuXHRoZWlnaHQ6IDEwMCU7XG5cblx0Pioge1xuXHRcdGRpc3BsYXk6IHRhYmxlLWNlbGw7XG5cdFx0dGV4dC1hbGlnbjogY2VudGVyO1xuXHRcdHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG5cdH1cbn1cblxuQG1peGluIHBsYWNlaG9sZGVyQ29sb3IoJGlucHV0LXRleHQtY29sb3IpIHtcblx0Jjo6LXdlYmtpdC1pbnB1dC1wbGFjZWhvbGRlciB7XG5cdFx0Y29sb3I6ICRpbnB1dC10ZXh0LWNvbG9yO1xuXHR9XG5cblx0JjotbW96LXBsYWNlaG9sZGVyIHtcblx0XHRjb2xvcjogJGlucHV0LXRleHQtY29sb3I7XG5cdFx0b3BhY2l0eTogMTtcblx0fVxuXG5cdCY6Oi1tb3otcGxhY2Vob2xkZXIge1xuXHRcdGNvbG9yOiAkaW5wdXQtdGV4dC1jb2xvcjtcblx0XHRvcGFjaXR5OiAxO1xuXHR9XG5cblx0JjotbXMtaW5wdXQtcGxhY2Vob2xkZXIge1xuXHRcdGNvbG9yOiAkaW5wdXQtdGV4dC1jb2xvcjtcblx0fVxuXG5cdCY6OnBsYWNlaG9sZGVyIHtcblx0XHRjb2xvcjogJGlucHV0LXRleHQtY29sb3I7XG5cdFx0b3BhY2l0eTogMTtcblx0fVxuXG5cdCY6Zm9jdXM6LW1vei1wbGFjZWhvbGRlciB7XG5cdFx0Y29sb3I6IHRyYW5zcGFyZW50O1xuXHRcdG9wYWNpdHk6IDE7XG5cdH1cblxuXHQmOmZvY3VzOjotbW96LXBsYWNlaG9sZGVyIHtcblx0XHRjb2xvcjogdHJhbnNwYXJlbnQ7XG5cdFx0b3BhY2l0eTogMTtcblx0fVxuXG5cdCY6Zm9jdXM6Oi13ZWJraXQtaW5wdXQtcGxhY2Vob2xkZXIge1xuXHRcdGNvbG9yOiB0cmFuc3BhcmVudDtcblx0fVxuXG5cdCY6Zm9jdXM6LW1zLWlucHV0LXBsYWNlaG9sZGVyIHtcblx0XHRjb2xvcjogdHJhbnNwYXJlbnQ7XG5cdH1cblxuXHQmOmZvY3VzOjpwbGFjZWhvbGRlciB7XG5cdFx0Y29sb3I6IHRyYW5zcGFyZW50O1xuXHR9XG59XG5cbkBtaXhpbiBjbGVhcmZpeCB7XG5cdCY6YWZ0ZXIge1xuXHRcdGNvbnRlbnQ6IFwiIFwiO1xuXHRcdGRpc3BsYXk6IGJsb2NrO1xuXHRcdGNsZWFyOiBib3RoO1xuXHR9XG59XG5cbi8vIGNsZWFyIHNlbGVjdCB3aXRob3V0IGRlZmF1bHQgYnV0dG9uXG5AbWl4aW4gY2xlYXJTZWxlY3Qge1xuXHQtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XG5cdC1tb3otYXBwZWFyYW5jZTogbm9uZTtcblx0YXBwZWFyYW5jZTogbm9uZTtcblx0LXdlYmtpdC1ib3JkZXItcmFkaXVzOiAwO1xuXHQtbW96LWJvcmRlci1yYWRpdXM6IDA7XG5cdGJvcmRlci1yYWRpdXM6IDA7XG59XG5cbi8vIGVsZW1lbnRzIGdldCBhcHBlbmRlZCB3aXRoIFwiX19cIiBhbmQgdGhlICRuYW1lXG5AbWl4aW4gZSgkbmFtZSkge1xuXHRAYXQtcm9vdCAjeyZ9XyN7JG5hbWV9IHtcblx0XHRAY29udGVudDtcblx0fVxufVxuXG4vLyBtb2RpZmllcnMgZ2V0IGFwcGVuZGVkIHdpdGggXCItLVwiIGFuZCB0aGUgJG5hbWVcbkBtaXhpbiBtKCRuYW1lKSB7XG5cdEBhdC1yb290ICN7Jn0tLSN7JG5hbWV9IHtcblx0XHRAY29udGVudDtcblx0fVxufVxuXG4vLyBicmVha3BvaW50c1xuQG1peGluIGIoJHBvaW50KSB7XG5cdEBpZiAkcG9pbnQ9PWRlc2t0b3Age1xuXHRcdEBtZWRpYSAobWF4LXdpZHRoOiAxMzY2cHgpIGFuZCAobWluLXdpZHRoOjEwMjRweCkge1xuXHRcdFx0QGNvbnRlbnQgO1xuXHRcdH1cblx0fVxuXG5cdEBlbHNlIGlmICRwb2ludD09dGFibGV0IHtcblx0XHRAbWVkaWEgKG1heC13aWR0aDogMTAwMHB4KSB7XG5cdFx0XHRAY29udGVudCA7XG5cdFx0fVxuXHR9XG5cblx0QGVsc2UgaWYgJHBvaW50PT1tb2JpbGUge1xuXHRcdEBtZWRpYSAobWF4LXdpZHRoOiA3NjdweCkge1xuXHRcdFx0QGNvbnRlbnQgO1xuXHRcdH1cblx0fVxuXG5cdEBlbHNlIGlmICRwb2ludD09bW9iaWxlM3gge1xuXG5cdFx0QG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAoLXdlYmtpdC1taW4tZGV2aWNlLXBpeGVsLXJhdGlvOiAzKSxcblx0XHRvbmx5IHNjcmVlbiBhbmQgKG1pbi1yZXNvbHV0aW9uOiAzZHBweCksXG5cdFx0b25seSBzY3JlZW4gYW5kIChtaW4tcmVzb2x1dGlvbjogMzUwZHBpKSB7XG5cdFx0XHRAY29udGVudCA7XG5cdFx0fVxuXHR9XG5cblx0QGVsc2Uge1xuXHRcdEBtZWRpYSAobWF4LXdpZHRoOiAkcG9pbnQgKyAncHgnKSB7XG5cdFx0XHRAY29udGVudCA7XG5cdFx0fVxuXHR9XG59XG5cbi8vIGJyZWFrcG9pbnRzXG5AbWl4aW4gYmIoJHBvaW50TWF4LCAkcG9pbnRNaW4pIHtcblx0QG1lZGlhIChtYXgtd2lkdGg6ICRwb2ludE1heCArICdweCcpIGFuZCAobWluLXdpZHRoOiAkcG9pbnRNaW4gKyAncHgnKSB7XG5cdFx0QGNvbnRlbnQgO1xuXHR9XG59XG5cbkBtaXhpbiBpZSgpIHtcblxuXHRAbWVkaWEgc2NyZWVuIGFuZCAoLW1zLWhpZ2gtY29udHJhc3Q6IGFjdGl2ZSksXG5cdCgtbXMtaGlnaC1jb250cmFzdDogbm9uZSkge1xuXHRcdEBjb250ZW50IDtcblx0fVxufVxuXG5AbWl4aW4gYmVmb3JlLWltZygkZGlzcGxheSwgJHdpZHRoLCAkaGVpZ2h0LCAkcG9zaXRpb24pIHtcblx0QGF0LXJvb3QgI3smfTpiZWZvcmUge1xuXHRcdGNvbnRlbnQ6ICcnO1xuXHRcdGRpc3BsYXk6ICRkaXNwbGF5O1xuXG5cdFx0QGlmICRwb3NpdGlvbj09YSB7XG5cdFx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XG5cdFx0fVxuXG5cdFx0QGlmICRwb3NpdGlvbj09ciB7XG5cdFx0XHRwb3NpdGlvbjogcmVsYXRpdmU7XG5cdFx0fVxuXG5cdFx0d2lkdGg6ICR3aWR0aDtcblx0XHRoZWlnaHQ6ICRoZWlnaHQ7XG5cdFx0QGNvbnRlbnQ7XG5cdH1cbn1cblxuQG1peGluIGFmdGVyLWltZygkZGlzcGxheSwgJHdpZHRoLCAkaGVpZ2h0LCAkcG9zaXRpb24pIHtcblx0QGF0LXJvb3QgI3smfTphZnRlciB7XG5cdFx0Y29udGVudDogJyc7XG5cdFx0ZGlzcGxheTogJGRpc3BsYXk7XG5cblx0XHRAaWYgJHBvc2l0aW9uPT1hIHtcblx0XHRcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcblx0XHR9XG5cblx0XHRAaWYgJHBvc2l0aW9uPT1yIHtcblx0XHRcdHBvc2l0aW9uOiByZWxhdGl2ZTtcblx0XHR9XG5cblx0XHR3aWR0aDogJHdpZHRoO1xuXHRcdGhlaWdodDogJGhlaWdodDtcblx0XHRAY29udGVudDtcblx0fVxufVxuXG4vKiByZW0gZm9udCBzaXplIHdpdGggZmFsbGJhY2sgfCB1c2FnZTpcblx0cCB7XG5cdFx0QGluY2x1ZGUgZm9udC1zaXplKDE0cHgpXG5cdH0qL1xuXG5AZnVuY3Rpb24gY2FsY3VsYXRlUmVtKCRzaXplKSB7XG5cdCRyZW1TaXplOiAkc2l6ZSAvIDE2cHg7XG5cdEByZXR1cm4gJHJlbVNpemUgKiAxcmVtO1xufVxuXG5AbWl4aW4gZm9udC1zaXplKCRzaXplKSB7XG5cdGZvbnQtc2l6ZTogJHNpemU7XG5cdGZvbnQtc2l6ZTogY2FsY3VsYXRlUmVtKCRzaXplKTtcbn1cblxuQG1peGluIHRleHRDdXQoJGNvbCwgJGhlaWdodCkge1xuXHRkaXNwbGF5OiAtd2Via2l0LWJveDtcblx0LXdlYmtpdC1saW5lLWNsYW1wOiAkY29sO1xuXHQtd2Via2l0LWJveC1vcmllbnQ6IHZlcnRpY2FsO1xuXHRvdmVyZmxvdzogaGlkZGVuO1xuXHRtYXgtaGVpZ2h0OiAkaGVpZ2h0O1xufVxuXG4vLyBidXR0b25zXG5cbkBtaXhpbiBidG4tZ3JhZGllbnQoJGNUZXh0LCAkY0hvdmVyLCAkZGlyZWN0aW9uLCAkY0ZpcnN0LCAkY1NlY29ucywgJGNUaGlyZCwgJGhvdmVyKSB7XG5cdGNvbG9yOiAkY1RleHQ7XG5cdHRyYW5zaXRpb246IDAuNXM7XG5cdGJhY2tncm91bmQtc2l6ZTogMjAwJSBhdXRvO1xuXHRiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoJGRpcmVjdGlvbiwgJGNGaXJzdCAwJSwgJGNTZWNvbnMgNTElLCAkY1RoaXJkIDEwMCUpO1xuXG5cdCY6aG92ZXIge1xuXHRcdHRleHQtZGVjb3JhdGlvbjogbm9uZTtcblx0XHRiYWNrZ3JvdW5kLXBvc2l0aW9uOiAkaG92ZXI7XG5cdFx0Y29sb3I6ICRjSG92ZXI7XG5cdFx0Ym94LXNoYWRvdzogMHB4IDIwcHggMzBweCAtMTVweCAkY1RoaXJkO1xuXHR9XG59XG5cbkBtaXhpbiBncmFkaWVudCgkdG9wLCAkYm90dG9tKSB7XG5cdGJhY2tncm91bmQ6ICR0b3A7XG5cdGJhY2tncm91bmQ6IC1tb3otbGluZWFyLWdyYWRpZW50KHRvcCwgJHRvcCAwJSwgJGJvdHRvbSAxMDAlKTtcblx0YmFja2dyb3VuZDogLXdlYmtpdC1ncmFkaWVudChsaW5lYXIsIGxlZnQgdG9wLCBsZWZ0IGJvdHRvbSwgY29sb3Itc3RvcCgwJSwgJHRvcCksIGNvbG9yLXN0b3AoMTAwJSwgJGJvdHRvbSkpO1xuXHRiYWNrZ3JvdW5kOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudCh0b3AsICR0b3AgMCUsICRib3R0b20gMTAwJSk7XG5cdGJhY2tncm91bmQ6IC1vLWxpbmVhci1ncmFkaWVudCh0b3AsICR0b3AgMCUsICRib3R0b20gMTAwJSk7XG5cdGJhY2tncm91bmQ6IC1tcy1saW5lYXItZ3JhZGllbnQodG9wLCAkdG9wIDAlLCAkYm90dG9tIDEwMCUpO1xuXHRiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCAkdG9wIDAlLCAkYm90dG9tIDEwMCUpO1xuXHRmaWx0ZXI6IHByb2dpZDpEWEltYWdlVHJhbnNmb3JtLk1pY3Jvc29mdC5ncmFkaWVudChzdGFydENvbG9yc3RyPScjeyR0b3B9JywgZW5kQ29sb3JzdHI9JyN7JGJvdHRvbX0gJywgR3JhZGllbnRUeXBlPTApO1xufSIsIkBpbXBvcnQgdXJsKFwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PU1vbnRzZXJyYXQ6MTAwLDEwMGksMjAwLDIwMGksMzAwLDMwMGksNDAwLDQwMGksNTAwLDUwMGksNjAwLDYwMGksNzAwLDcwMGksODAwLDgwMGksOTAwLDkwMGkmZGlzcGxheT1zd2FwXCIpO1xuLmNsZWFyZml4OmFmdGVyIHtcbiAgY29udGVudDogXCJcIjtcbiAgZGlzcGxheTogdGFibGU7XG4gIGNsZWFyOiBib3RoO1xufVxuXG4uY2VudGVyZWQge1xuICBkaXNwbGF5OiB0YWJsZTtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbn1cbi5jZW50ZXJlZCA+ICoge1xuICBkaXNwbGF5OiB0YWJsZS1jZWxsO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG59XG5cbi8qIHJlbSBmb250IHNpemUgd2l0aCBmYWxsYmFjayB8IHVzYWdlOlxuXHRwIHtcblx0XHRAaW5jbHVkZSBmb250LXNpemUoMTRweClcblx0fSovXG4ucGFnZS1vdmVybGF5IHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjRGMEU1O1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICBib3R0b206IDA7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB6LWluZGV4OiA5OTk5O1xufVxuLnBhZ2Utb3ZlcmxheSBpbWcge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG59XG5cbi5sZHMtcmluZyB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDogMTIwcHg7XG4gIGhlaWdodDogMTIwcHg7XG59XG5cbi5sZHMtcmluZyBkaXYge1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBkaXNwbGF5OiBibG9jaztcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMTAwcHg7XG4gIGhlaWdodDogMTAwcHg7XG4gIG1hcmdpbjogOHB4O1xuICBib3JkZXI6IDJweCBzb2xpZCAjODkyNzM0O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGFuaW1hdGlvbjogbGRzLXJpbmcgMS4ycyBjdWJpYy1iZXppZXIoMC41LCAwLCAwLjUsIDEpIGluZmluaXRlO1xuICBib3JkZXItY29sb3I6ICM4OTI3MzQgdHJhbnNwYXJlbnQgdHJhbnNwYXJlbnQgdHJhbnNwYXJlbnQ7XG59XG5cbi5sZHMtcmluZyBkaXY6bnRoLWNoaWxkKDEpIHtcbiAgYW5pbWF0aW9uLWRlbGF5OiAtMC40NXM7XG59XG5cbi5sZHMtcmluZyBkaXY6bnRoLWNoaWxkKDIpIHtcbiAgYW5pbWF0aW9uLWRlbGF5OiAtMC4zcztcbn1cblxuLmxkcy1yaW5nIGRpdjpudGgtY2hpbGQoMykge1xuICBhbmltYXRpb24tZGVsYXk6IC0wLjE1cztcbn1cblxuQGtleWZyYW1lcyBsZHMtcmluZyB7XG4gIDAlIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcbiAgfVxuICAxMDAlIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xuICB9XG59IiwiQGltcG9ydCBcIi4uL3Njc3MvdmFyc1wiO1xuQGltcG9ydCBcIi4uL3Njc3MvbWl4aW5zXCI7XG5cbi5wYWdlLW92ZXJsYXkge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGJhY2tncm91bmQtY29sb3I6ICNGNEYwRTU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIGJvdHRvbTogMDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHotaW5kZXg6IDk5OTk7XG5cbiAgaW1nIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIH1cbn1cblxuLmxkcy1yaW5nIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiAxMjBweDtcbiAgaGVpZ2h0OiAxMjBweDtcbn1cbi5sZHMtcmluZyBkaXYge1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBkaXNwbGF5OiBibG9jaztcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMTAwcHg7XG4gIGhlaWdodDogMTAwcHg7XG4gIG1hcmdpbjogOHB4O1xuICBib3JkZXI6IDJweCBzb2xpZCAkYnJvd24tcmVkO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGFuaW1hdGlvbjogbGRzLXJpbmcgMS4ycyBjdWJpYy1iZXppZXIoMC41LCAwLCAwLjUsIDEpIGluZmluaXRlO1xuICBib3JkZXItY29sb3I6ICRicm93bi1yZWQgdHJhbnNwYXJlbnQgdHJhbnNwYXJlbnQgdHJhbnNwYXJlbnQ7XG59XG4ubGRzLXJpbmcgZGl2Om50aC1jaGlsZCgxKSB7XG4gIGFuaW1hdGlvbi1kZWxheTogLTAuNDVzO1xufVxuLmxkcy1yaW5nIGRpdjpudGgtY2hpbGQoMikge1xuICBhbmltYXRpb24tZGVsYXk6IC0wLjNzO1xufVxuLmxkcy1yaW5nIGRpdjpudGgtY2hpbGQoMykge1xuICBhbmltYXRpb24tZGVsYXk6IC0wLjE1cztcbn1cbkBrZXlmcmFtZXMgbGRzLXJpbmcge1xuICAwJSB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XG4gIH1cbiAgMTAwJSB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcbiAgfVxufVxuIl19 */"], data: { animation: [_route_animation__WEBPACK_IMPORTED_MODULE_2__["slider"]] } });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.scss'],
                animations: [_route_animation__WEBPACK_IMPORTED_MODULE_2__["slider"]],
            }]
    }], function () { return [{ type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: HttpLoaderFactory, AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpLoaderFactory", function() { return HttpLoaderFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _angular_service_worker__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/service-worker */ "./node_modules/@angular/service-worker/__ivy_ngcc__/fesm2015/service-worker.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var angularx_qrcode__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! angularx-qrcode */ "./node_modules/angularx-qrcode/__ivy_ngcc__/fesm2015/angularx-qrcode.js");
/* harmony import */ var ng2_tel_input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng2-tel-input */ "./node_modules/ng2-tel-input/__ivy_ngcc__/esm2015/ng2-tel-input.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/datepicker */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/datepicker.js");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/core */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
/* harmony import */ var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ngx-translate/http-loader */ "./node_modules/@ngx-translate/http-loader/__ivy_ngcc__/fesm2015/ngx-translate-http-loader.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _angular_cdk_clipboard__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/cdk/clipboard */ "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/clipboard.js");
/* harmony import */ var ng_recaptcha__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ng-recaptcha */ "./node_modules/ng-recaptcha/__ivy_ngcc__/fesm2015/ng-recaptcha.js");
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ngx-pagination */ "./node_modules/ngx-pagination/__ivy_ngcc__/dist/ngx-pagination.js");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/__ivy_ngcc__/fesm2015/ngx-cookie-service.js");
/* harmony import */ var _resolvers__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./resolvers */ "./src/app/resolvers/index.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _pages_index_index_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./pages/index/index.component */ "./src/app/pages/index/index.component.ts");
/* harmony import */ var _pages_index_new_index_new_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./pages/index-new/index-new.component */ "./src/app/pages/index-new/index-new.component.ts");
/* harmony import */ var _pages_about_about_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./pages/about/about.component */ "./src/app/pages/about/about.component.ts");
/* harmony import */ var _pages_contact_contact_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./pages/contact/contact.component */ "./src/app/pages/contact/contact.component.ts");
/* harmony import */ var _pages_buy_buy_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./pages/buy/buy.component */ "./src/app/pages/buy/buy.component.ts");
/* harmony import */ var _pages_legal_legal_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./pages/legal/legal.component */ "./src/app/pages/legal/legal.component.ts");
/* harmony import */ var _pages_gold_lottery_gold_lottery_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./pages/gold-lottery/gold-lottery.component */ "./src/app/pages/gold-lottery/gold-lottery.component.ts");
/* harmony import */ var _pages_legal_disclaimer_legal_disclaimer_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./pages/legal-disclaimer/legal-disclaimer.component */ "./src/app/pages/legal-disclaimer/legal-disclaimer.component.ts");
/* harmony import */ var _pages_errorpage_errorpage_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./pages/errorpage/errorpage.component */ "./src/app/pages/errorpage/errorpage.component.ts");
/* harmony import */ var _pages_ducatusx_ducatusx_ducatusx_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./pages/ducatusx/ducatusx/ducatusx.component */ "./src/app/pages/ducatusx/ducatusx/ducatusx.component.ts");
/* harmony import */ var _pages_voucher_voucher_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./pages/voucher/voucher.component */ "./src/app/pages/voucher/voucher.component.ts");
/* harmony import */ var _pages_rate_rate_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./pages/rate/rate.component */ "./src/app/pages/rate/rate.component.ts");
/* harmony import */ var _pages_login_login_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./pages/login/login.component */ "./src/app/pages/login/login.component.ts");
/* harmony import */ var _pages_index_header_header_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./pages/index/header/header.component */ "./src/app/pages/index/header/header.component.ts");
/* harmony import */ var _pages_index_footer_footer_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./pages/index/footer/footer.component */ "./src/app/pages/index/footer/footer.component.ts");
/* harmony import */ var _pages_index_new_header_header_new_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./pages/index-new/header/header-new.component */ "./src/app/pages/index-new/header/header-new.component.ts");
/* harmony import */ var _pages_index_new_footer_footer_new_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./pages/index-new/footer/footer-new.component */ "./src/app/pages/index-new/footer/footer-new.component.ts");
/* harmony import */ var _components_countdown_countdown_component__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./components/countdown/countdown.component */ "./src/app/components/countdown/countdown.component.ts");
/* harmony import */ var _pipe_safeUrl_pipe__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./pipe/safeUrl.pipe */ "./src/app/pipe/safeUrl.pipe.ts");
/* harmony import */ var _pipe_filter_pipe__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./pipe/filter.pipe */ "./src/app/pipe/filter.pipe.ts");
/* harmony import */ var _service_gtag_google_analytics_service__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ./service/gtag/google-analytics.service */ "./src/app/service/gtag/google-analytics.service.ts");






// plugins












// resolvers

// pages














// partials




// components

// pipes







function HttpLoaderFactory(http) {
    return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_12__["TranslateHttpLoader"](http, './assets/i18n/', '.json?v=' + new Date().getTime());
}
class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_19__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [_resolvers__WEBPACK_IMPORTED_MODULE_18__["UserResolver"], _service_gtag_google_analytics_service__WEBPACK_IMPORTED_MODULE_40__["GoogleAnalyticsService"], ngx_cookie_service__WEBPACK_IMPORTED_MODULE_17__["CookieService"]], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
            angularx_qrcode__WEBPACK_IMPORTED_MODULE_6__["QRCodeModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            ng2_tel_input__WEBPACK_IMPORTED_MODULE_7__["Ng2TelInputModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
            _angular_cdk_clipboard__WEBPACK_IMPORTED_MODULE_14__["ClipboardModule"],
            _angular_service_worker__WEBPACK_IMPORTED_MODULE_3__["ServiceWorkerModule"].register('ngsw-worker.js', {
                enabled: _environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].production,
            }),
            _angular_common_http__WEBPACK_IMPORTED_MODULE_13__["HttpClientModule"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslateModule"].forRoot({
                loader: {
                    provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslateLoader"],
                    useFactory: HttpLoaderFactory,
                    deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_13__["HttpClient"]],
                },
            }),
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_11__["BrowserAnimationsModule"],
            _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_9__["MatDatepickerModule"],
            _angular_material_core__WEBPACK_IMPORTED_MODULE_10__["MatNativeDateModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_13__["HttpClientXsrfModule"].withOptions({
                cookieName: 'csrftoken',
                headerName: 'X-CSRFToken',
            }),
            ng_recaptcha__WEBPACK_IMPORTED_MODULE_15__["RecaptchaModule"],
            ng_recaptcha__WEBPACK_IMPORTED_MODULE_15__["RecaptchaFormsModule"],
            ngx_pagination__WEBPACK_IMPORTED_MODULE_16__["NgxPaginationModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [
        // pages
        _app_component__WEBPACK_IMPORTED_MODULE_19__["AppComponent"],
        _pages_index_index_component__WEBPACK_IMPORTED_MODULE_20__["IndexComponent"],
        _pages_index_new_index_new_component__WEBPACK_IMPORTED_MODULE_21__["IndexNewComponent"],
        _pages_about_about_component__WEBPACK_IMPORTED_MODULE_22__["AboutComponent"],
        _pages_contact_contact_component__WEBPACK_IMPORTED_MODULE_23__["ContactComponent"],
        _pages_buy_buy_component__WEBPACK_IMPORTED_MODULE_24__["BuyComponent"],
        _pages_legal_legal_component__WEBPACK_IMPORTED_MODULE_25__["LegalComponent"],
        _pages_legal_disclaimer_legal_disclaimer_component__WEBPACK_IMPORTED_MODULE_27__["LegalDisclaimerComponent"],
        _pages_gold_lottery_gold_lottery_component__WEBPACK_IMPORTED_MODULE_26__["GoldLotteryComponent"],
        _pages_errorpage_errorpage_component__WEBPACK_IMPORTED_MODULE_28__["ErrorPageComponent"],
        _pages_ducatusx_ducatusx_ducatusx_component__WEBPACK_IMPORTED_MODULE_29__["DucatusxComponent"],
        _pages_voucher_voucher_component__WEBPACK_IMPORTED_MODULE_30__["VoucherComponent"],
        _pages_rate_rate_component__WEBPACK_IMPORTED_MODULE_31__["RateComponent"],
        _pages_login_login_component__WEBPACK_IMPORTED_MODULE_32__["LoginComponent"],
        // components
        _pages_index_header_header_component__WEBPACK_IMPORTED_MODULE_33__["HeaderComponent"],
        _pages_index_footer_footer_component__WEBPACK_IMPORTED_MODULE_34__["FooterComponent"],
        _pages_index_new_header_header_new_component__WEBPACK_IMPORTED_MODULE_35__["HeaderNewComponent"],
        _pages_index_new_footer_footer_new_component__WEBPACK_IMPORTED_MODULE_36__["FooterNewComponent"],
        // pipes
        _pipe_safeUrl_pipe__WEBPACK_IMPORTED_MODULE_38__["SafePipe"],
        _pipe_filter_pipe__WEBPACK_IMPORTED_MODULE_39__["FilterPipe"],
        _components_countdown_countdown_component__WEBPACK_IMPORTED_MODULE_37__["CountdownComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
        angularx_qrcode__WEBPACK_IMPORTED_MODULE_6__["QRCodeModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
        ng2_tel_input__WEBPACK_IMPORTED_MODULE_7__["Ng2TelInputModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
        _angular_cdk_clipboard__WEBPACK_IMPORTED_MODULE_14__["ClipboardModule"], _angular_service_worker__WEBPACK_IMPORTED_MODULE_3__["ServiceWorkerModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_13__["HttpClientModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslateModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_11__["BrowserAnimationsModule"],
        _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_9__["MatDatepickerModule"],
        _angular_material_core__WEBPACK_IMPORTED_MODULE_10__["MatNativeDateModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_13__["HttpClientXsrfModule"], ng_recaptcha__WEBPACK_IMPORTED_MODULE_15__["RecaptchaModule"],
        ng_recaptcha__WEBPACK_IMPORTED_MODULE_15__["RecaptchaFormsModule"],
        ngx_pagination__WEBPACK_IMPORTED_MODULE_16__["NgxPaginationModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    // pages
                    _app_component__WEBPACK_IMPORTED_MODULE_19__["AppComponent"],
                    _pages_index_index_component__WEBPACK_IMPORTED_MODULE_20__["IndexComponent"],
                    _pages_index_new_index_new_component__WEBPACK_IMPORTED_MODULE_21__["IndexNewComponent"],
                    _pages_about_about_component__WEBPACK_IMPORTED_MODULE_22__["AboutComponent"],
                    _pages_contact_contact_component__WEBPACK_IMPORTED_MODULE_23__["ContactComponent"],
                    _pages_buy_buy_component__WEBPACK_IMPORTED_MODULE_24__["BuyComponent"],
                    _pages_legal_legal_component__WEBPACK_IMPORTED_MODULE_25__["LegalComponent"],
                    _pages_legal_disclaimer_legal_disclaimer_component__WEBPACK_IMPORTED_MODULE_27__["LegalDisclaimerComponent"],
                    _pages_gold_lottery_gold_lottery_component__WEBPACK_IMPORTED_MODULE_26__["GoldLotteryComponent"],
                    _pages_errorpage_errorpage_component__WEBPACK_IMPORTED_MODULE_28__["ErrorPageComponent"],
                    _pages_ducatusx_ducatusx_ducatusx_component__WEBPACK_IMPORTED_MODULE_29__["DucatusxComponent"],
                    _pages_voucher_voucher_component__WEBPACK_IMPORTED_MODULE_30__["VoucherComponent"],
                    _pages_rate_rate_component__WEBPACK_IMPORTED_MODULE_31__["RateComponent"],
                    _pages_login_login_component__WEBPACK_IMPORTED_MODULE_32__["LoginComponent"],
                    // components
                    _pages_index_header_header_component__WEBPACK_IMPORTED_MODULE_33__["HeaderComponent"],
                    _pages_index_footer_footer_component__WEBPACK_IMPORTED_MODULE_34__["FooterComponent"],
                    _pages_index_new_header_header_new_component__WEBPACK_IMPORTED_MODULE_35__["HeaderNewComponent"],
                    _pages_index_new_footer_footer_new_component__WEBPACK_IMPORTED_MODULE_36__["FooterNewComponent"],
                    // pipes
                    _pipe_safeUrl_pipe__WEBPACK_IMPORTED_MODULE_38__["SafePipe"],
                    _pipe_filter_pipe__WEBPACK_IMPORTED_MODULE_39__["FilterPipe"],
                    _components_countdown_countdown_component__WEBPACK_IMPORTED_MODULE_37__["CountdownComponent"],
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
                    angularx_qrcode__WEBPACK_IMPORTED_MODULE_6__["QRCodeModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                    ng2_tel_input__WEBPACK_IMPORTED_MODULE_7__["Ng2TelInputModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
                    _angular_cdk_clipboard__WEBPACK_IMPORTED_MODULE_14__["ClipboardModule"],
                    _angular_service_worker__WEBPACK_IMPORTED_MODULE_3__["ServiceWorkerModule"].register('ngsw-worker.js', {
                        enabled: _environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].production,
                    }),
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_13__["HttpClientModule"],
                    _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslateModule"].forRoot({
                        loader: {
                            provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslateLoader"],
                            useFactory: HttpLoaderFactory,
                            deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_13__["HttpClient"]],
                        },
                    }),
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_11__["BrowserAnimationsModule"],
                    _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_9__["MatDatepickerModule"],
                    _angular_material_core__WEBPACK_IMPORTED_MODULE_10__["MatNativeDateModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_13__["HttpClientXsrfModule"].withOptions({
                        cookieName: 'csrftoken',
                        headerName: 'X-CSRFToken',
                    }),
                    ng_recaptcha__WEBPACK_IMPORTED_MODULE_15__["RecaptchaModule"],
                    ng_recaptcha__WEBPACK_IMPORTED_MODULE_15__["RecaptchaFormsModule"],
                    ngx_pagination__WEBPACK_IMPORTED_MODULE_16__["NgxPaginationModule"],
                ],
                providers: [_resolvers__WEBPACK_IMPORTED_MODULE_18__["UserResolver"], _service_gtag_google_analytics_service__WEBPACK_IMPORTED_MODULE_40__["GoogleAnalyticsService"], ngx_cookie_service__WEBPACK_IMPORTED_MODULE_17__["CookieService"]],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_19__["AppComponent"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/components/countdown/countdown.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/countdown/countdown.component.ts ***!
  \*************************************************************/
/*! exports provided: CountdownComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CountdownComponent", function() { return CountdownComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");




class CountdownComponent {
    constructor() {
        this.countdownEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.message = '--:--:--:--';
    }
    dhms(t) {
        let days, hours, minutes, seconds;
        days = Math.floor(t / 86400);
        t -= days * 86400;
        hours = Math.floor(t / 3600) % 24;
        t -= hours * 3600;
        minutes = Math.floor(t / 60) % 60;
        t -= minutes * 60;
        seconds = t % 60;
        days = days < 10 ? '0' + days : days;
        hours = hours < 10 ? '0' + hours : hours;
        minutes = minutes < 10 ? '0' + minutes : minutes;
        seconds = seconds < 10 ? '0' + seconds : seconds;
        return [
            days + ':',
            hours + ':',
            minutes + ':',
            seconds
        ].join('');
    }
    ngOnInit() {
        if (this.correctTimeStart) {
            this.timeStart = this.timeStart * 1000;
        }
        const future = new Date(this.timeStart);
        future.setDate(future.getDate() + this.timeEndDayPlus);
        this.counter$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["interval"])(1000).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(() => Math.floor((future.getTime() - new Date().getTime()) / 1000)));
        this.subscription = this.counter$.subscribe((x) => {
            if (new Date(future).getTime() < new Date().getTime()) {
                this.subscription.unsubscribe();
                this.countdownEvent.emit(true);
            }
            this.message = this.dhms(x);
        });
    }
    OnDestroy() {
        this.subscription.unsubscribe();
    }
}
CountdownComponent.ɵfac = function CountdownComponent_Factory(t) { return new (t || CountdownComponent)(); };
CountdownComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CountdownComponent, selectors: [["app-countdown"]], inputs: { timeStart: "timeStart", correctTimeStart: "correctTimeStart", timeEndDayPlus: "timeEndDayPlus" }, outputs: { countdownEvent: "countdownEvent" }, decls: 1, vars: 1, template: function CountdownComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.message);
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY291bnRkb3duL2NvdW50ZG93bi5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CountdownComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-countdown',
                templateUrl: './countdown.component.html',
                styleUrls: ['./countdown.component.scss']
            }]
    }], function () { return []; }, { timeStart: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], correctTimeStart: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], timeEndDayPlus: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], countdownEvent: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "./src/app/pages/about/about.component.ts":
/*!************************************************!*\
  !*** ./src/app/pages/about/about.component.ts ***!
  \************************************************/
/*! exports provided: AboutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutComponent", function() { return AboutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");




function AboutComponent_div_77_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "span", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 4, "PAGE.ABOUT.MILESTONES.LIST.TEXT_" + item_r1), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-year", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 2, "PAGE.ABOUT.MILESTONES.LIST.YEAR_" + item_r1));
} }
class AboutComponent {
    constructor() {
        this.milestinesData = [15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
    }
    ngOnInit() {
    }
}
AboutComponent.ɵfac = function AboutComponent_Factory(t) { return new (t || AboutComponent)(); };
AboutComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AboutComponent, selectors: [["app-about"]], decls: 79, vars: 67, consts: [[1, "section-header-page", "section-header-page-about", 2, "background-image", "url(/assets/img/sections/about-bg.png)"], [1, "container"], [1, "h1__title-page", 3, "innerHTML"], [1, "section-text-second"], [1, "section-text-second-block"], [1, "h2__title-section", 3, "innerHTML"], [1, "span__line-section"], [1, "p__text-section", 3, "innerHTML"], [1, "section-text-second-block-img", 2, "background-image", "url(/assets/img/sections/about-img.png)"], [1, "section-infoblock", "section-infoblock-filled"], [1, "section-infoblock-text"], [1, "section-infoblock-grid"], [1, "section-infoblock-grid-item"], [1, "section-infoblock-grid-item-title", "icon", "icon__secure", 3, "innerHTML"], [1, "section-infoblock-grid-item-text", 3, "innerHTML"], [1, "section-infoblock-grid-item-title", "icon", "icon__rocket-2", 3, "innerHTML"], [1, "section-infoblock-grid-item-title", "icon", "icon__hand-coin", 3, "innerHTML"], [1, "section-infoblock-grid-item-title", "icon", "icon__phone-coin", 3, "innerHTML"], [1, "section-infoblock-grid-item-title", "icon", "icon__big-data", 3, "innerHTML"], [1, "section-infoblock-grid-item-title", "icon", "icon__community", 3, "innerHTML"], [1, "section-infoblock"], [1, "section-infoblock-items"], [1, "section-infoblock-item"], [1, "span__title-section", 3, "innerHTML"], ["href", "https://insight.ducatus.io/#/DUC/mainnet/home", "target", "_blank", 1, "section-infoblock-item-link", "icon", "icon__blockchain"], ["href", "https://github.com/DUCATUS-revival/ducatuscoin-core", "target", "_blank", 1, "section-infoblock-item-link", "icon", "icon__source-code"], [1, "section-infoblock-items-table"], ["class", "section-infoblock-item-cell", 4, "ngFor", "ngForOf"], [1, "mb-130"], [1, "section-infoblock-item-cell"], [1, "section-infoblock-item-cell-text", 3, "innerHTML"]], template: function AboutComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "h1", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "section", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](8, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "p", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](11, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "section", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](18, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "p", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](21, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](25, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "p", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](27, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "span", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](30, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "p", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](32, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "span", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](35, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "p", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](37, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "span", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](40, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "p", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](42, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](44, "span", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](45, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](46, "p", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](47, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](49, "span", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](50, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](51, "p", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](52, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "section", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](56, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](57, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](58, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](59, "p", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](60, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](63, "span", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](64, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](65, "a", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](67, "span", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](68, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](69, "a", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "section", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](73, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](74, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](75, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](77, AboutComponent_div_77_Template, 4, 6, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](78, "section", 28);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 23, "PAGE.ABOUT.TITLE"), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](8, 25, "PAGE.ABOUT.SECTION_1.TITLE"), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](11, 27, "PAGE.ABOUT.SECTION_1.TEXT"), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](18, 29, "PAGE.ABOUT.SECTION_2.TITLE"), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](21, 31, "PAGE.ABOUT.SECTION_2.SUBTITLE"), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](25, 33, "PAGE.ABOUT.SECTION_2.LIST.TITLE_1"), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](27, 35, "PAGE.ABOUT.SECTION_2.LIST.TEXT_1"), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](30, 37, "PAGE.ABOUT.SECTION_2.LIST.TITLE_2"), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](32, 39, "PAGE.ABOUT.SECTION_2.LIST.TEXT_2"), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](35, 41, "PAGE.ABOUT.SECTION_2.LIST.TITLE_3"), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](37, 43, "PAGE.ABOUT.SECTION_2.LIST.TEXT_3"), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](40, 45, "PAGE.ABOUT.SECTION_2.LIST.TITLE_4"), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](42, 47, "PAGE.ABOUT.SECTION_2.LIST.TEXT_4"), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](45, 49, "PAGE.ABOUT.SECTION_2.LIST.TITLE_5"), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](47, 51, "PAGE.ABOUT.SECTION_2.LIST.TEXT_5"), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](50, 53, "PAGE.ABOUT.SECTION_2.LIST.TITLE_6"), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](52, 55, "PAGE.ABOUT.SECTION_2.LIST.TEXT_6"), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](57, 57, "PAGE.ABOUT.TECHNOLOGY.TITLE"), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](60, 59, "PAGE.ABOUT.TECHNOLOGY.SUBTITLE"), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](64, 61, "PAGE.ABOUT.TECHNOLOGY.TEXT_1"), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](68, 63, "PAGE.ABOUT.TECHNOLOGY.TEXT_2"), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](74, 65, "PAGE.ABOUT.MILESTONES.TITLE"), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.milestinesData);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"]], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslatePipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2Fib3V0L2Fib3V0LmNvbXBvbmVudC5jc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AboutComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-about',
                templateUrl: './about.component.html',
                styleUrls: ['./about.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/pages/buy/buy.component.ts":
/*!********************************************!*\
  !*** ./src/app/pages/buy/buy.component.ts ***!
  \********************************************/
/*! exports provided: BuyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BuyComponent", function() { return BuyComponent; });
/* harmony import */ var bignumber_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! bignumber.js */ "./node_modules/bignumber.js/bignumber.js");
/* harmony import */ var bignumber_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(bignumber_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _parameters__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./parameters */ "./src/app/pages/buy/parameters.ts");
/* harmony import */ var src_app_service_buy_buy_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/service/buy/buy.service */ "./src/app/service/buy/buy.service.ts");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/__ivy_ngcc__/fesm2015/ngx-cookie-service.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_cdk_clipboard__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/cdk/clipboard */ "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/clipboard.js");
/* harmony import */ var angularx_qrcode__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! angularx-qrcode */ "./node_modules/angularx-qrcode/__ivy_ngcc__/fesm2015/angularx-qrcode.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");











const _c0 = ["openFormGet"];
const _c1 = ["openFormSend"];
const _c2 = function (a0) { return { "select-coin-active": a0 }; };
function BuyComponent_div_8_div_15_Template(rf, ctx) { if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "span", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function BuyComponent_div_8_div_15_Template_span_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r13); const coin_r11 = ctx.$implicit; _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](9); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); ctx_r12.coinGet = coin_r11; ctx_r12.changeGetCoin(true); return _r3.checked = false; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "img", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const coin_r11 = ctx.$implicit;
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](4, _c2, ctx_r4.coins[coin_r11].symbol === ctx_r4.coinGet));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", "assets/img/icons/" + ctx_r4.coins[coin_r11].icon + ".png", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"])("alt", ctx_r4.coins[coin_r11].name);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r4.coins[coin_r11].symbol, " ");
} }
function BuyComponent_div_8_div_33_Template(rf, ctx) { if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "span", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function BuyComponent_div_8_div_33_Template_span_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r16); const coin_r14 = ctx.$implicit; _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](27); const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); ctx_r15.coinSend = coin_r14; ctx_r15.changeGetCoin(); return _r5.checked = false; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "img", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const coin_r14 = ctx.$implicit;
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](4, _c2, ctx_r6.coins[coin_r14].symbol === ctx_r6.coinSend));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", "assets/img/icons/" + ctx_r6.coins[coin_r14].icon + ".png", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"])("alt", ctx_r6.coins[coin_r14].name);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r6.coins[coin_r14].symbol, " ");
} }
function BuyComponent_div_8_span_39_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 1, "PAGE.BUY.FORM.ADDRESS.ERROR"));
} }
function BuyComponent_div_8_span_47_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r8.addresses[ctx_r8.coins[ctx_r8.coinSend].symbol.toLowerCase() + "_address"]);
} }
function BuyComponent_div_8_span_48_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "span", 51);
} if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("cdkCopyToClipboard", ctx_r9.addresses[ctx_r9.coins[ctx_r9.coinSend].symbol.toLowerCase() + "_address"]);
} }
function BuyComponent_div_8_qrcode_50_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "qrcode", 52);
} if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("elementType", "url")("margin", 0)("scale", 1)("qrdata", ctx_r10.addresses[ctx_r10.coins[ctx_r10.coinSend].symbol.toLowerCase() + "_address"])("width", 80)("errorCorrectionLevel", "L");
} }
const _c3 = function (a0) { return { "select-coin-start": a0 }; };
const _c4 = function (a0, a1) { return { coin: a0, coinName: a1 }; };
const _c5 = function (a0) { return { coin: a0 }; };
const _c6 = function (a0) { return { "loading-address-start": a0 }; };
const _c7 = function (a0, a1) { return { time: a0, coin: a1 }; };
function BuyComponent_div_8_Template(rf, ctx) { if (rf & 1) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "label", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "input", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function BuyComponent_div_8_Template_input_ngModelChange_5_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r18); const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r17.valueGet = $event; })("ngModelChange", function BuyComponent_div_8_Template_input_ngModelChange_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r18); const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r19.amountGet(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](6, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "label", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "input", 19, 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](11, "img", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](15, BuyComponent_div_8_div_15_Template, 4, 6, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "span", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "label", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](22, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "input", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function BuyComponent_div_8_Template_input_ngModelChange_23_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r18); const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r20.valueSend = $event; })("ngModelChange", function BuyComponent_div_8_Template_input_ngModelChange_23_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r18); const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r21.amountSend(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](24, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "label", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](26, "input", 31, 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](29, "img", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](33, BuyComponent_div_8_div_33_Template, 4, 6, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](35, "label", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](36, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "input", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function BuyComponent_div_8_Template_input_ngModelChange_37_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r18); const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r22.address = $event; })("ngModelChange", function BuyComponent_div_8_Template_input_ngModelChange_37_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r18); const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r23.setAddress(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](38, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](39, BuyComponent_div_8_span_39_Template, 3, 3, "span", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](43);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](44, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](45, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](46, "p", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](47, BuyComponent_div_8_span_47_Template, 2, 1, "span", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](48, BuyComponent_div_8_span_48_Template, 1, 1, "span", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](49, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](50, BuyComponent_div_8_qrcode_50_Template, 1, 6, "qrcode", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](51, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](52, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](53);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](54, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](55, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](56, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](57, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](58);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](59, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](60, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](61, "span", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](62, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](9);
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](27);
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](4, 35, "PAGE.BUY.FORM.FIELD.GET.TEXT"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](6, 37, "PAGE.BUY.FORM.FIELD.GET.PLACEHOLDER"))("ngModel", ctx_r0.valueGet);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](60, _c3, _r3.checked));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", "assets/img/icons/" + ctx_r0.coins[ctx_r0.coinGet].icon + ".png", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"])("alt", ctx_r0.coins[ctx_r0.coinGet].name);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r0.coins[ctx_r0.coinGet].symbol, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r0.coinsFormGet);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate3"]("1 ", ctx_r0.coins[ctx_r0.coinGet].name, " = ", ctx_r0.rates[ctx_r0.coinGet][ctx_r0.coinSend] / 1, " ", ctx_r0.coins[ctx_r0.coinSend].name, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](22, 39, "PAGE.BUY.FORM.FIELD.SEND.TEXT"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](24, 41, "PAGE.BUY.FORM.FIELD.SEND.PLACEHOLDER"))("ngModel", ctx_r0.valueSend);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](62, _c3, _r5.checked));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", "assets/img/icons/" + ctx_r0.coins[ctx_r0.coinSend].icon + ".png", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"])("alt", ctx_r0.coins[ctx_r0.coinSend].name);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r0.coins[ctx_r0.coinSend].symbol, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r0.coinsFormSend[ctx_r0.coinGet]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](36, 43, "PAGE.BUY.FORM.ADDRESS.TEXT", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](64, _c4, ctx_r0.coins[ctx_r0.coinGet].symbol, ctx_r0.coins[ctx_r0.coinGet].name)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeHtml"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r0.address)("disabled", ctx_r0.checkAddress)("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](38, 46, "PAGE.BUY.FORM.ADDRESS.PLACEHOLDER", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](67, _c5, ctx_r0.coins[ctx_r0.coinGet].symbol)));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.novalidAddress);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](69, _c6, !ctx_r0.addresses));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate3"]("", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](44, 49, "PAGE.BUY.FORM.RESULT.TEXT_1"), " ", ctx_r0.coins[ctx_r0.coinSend].name, " ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](45, 51, "PAGE.BUY.FORM.RESULT.TEXT_2"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.addresses);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.addresses);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("title", ctx_r0.qr);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.addresses);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](54, 53, "PAGE.BUY.FORM.RESULT.QR.TEXT"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](59, 55, "PAGE.BUY.FORM.RESULT.ERROR"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](62, 57, "PAGE.BUY.FORM.RESULT.NOTE", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](71, _c7, ctx_r0.coins[ctx_r0.coinSend].wait, ctx_r0.coins[ctx_r0.coinSend].symbol)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeHtml"]);
} }
function BuyComponent_div_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "div", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "div", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "div", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function BuyComponent_div_16_Template(rf, ctx) { if (rf & 1) {
    const _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "p", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "label", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](8, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "input", 65, 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "button", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function BuyComponent_div_16_Template_button_click_11_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r26); const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r25.acceptModalTerms(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](13, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](4, 4, "PAGE.BUY.MODAL.TERMS.TEXT"), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeHtml"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](8, 6, "PAGE.BUY.MODAL.TERMS.AGREE"), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeHtml"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", !_r24.checked);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](13, 8, "PAGE.BUY.MODAL.TERMS.BUTTON"), " ");
} }
class BuyComponent {
    constructor(buyservice, cookieService) {
        this.buyservice = buyservice;
        this.cookieService = cookieService;
        this.coins = _parameters__WEBPACK_IMPORTED_MODULE_2__["coins"];
        this.coinGet = 'DUC';
        this.coinSend = 'DUCX';
        this.coinsFormGet = _parameters__WEBPACK_IMPORTED_MODULE_2__["coinsFormGet"];
        this.coinsFormSend = _parameters__WEBPACK_IMPORTED_MODULE_2__["coinsFormSend"];
    }
    ngOnInit() {
        this.cookieService.get('termsBuy') ? this.acceptModalTerms(true) : (this.modal = true);
    }
    onClick($event) {
        if ($($event.target).closest('.select-coin').length === 0) {
            this.coinsGet.nativeElement.checked = this.coinsSend.nativeElement.checked = false;
        }
    }
    acceptModalTerms(start) {
        if (!start) {
            this.cookieService.set('termsBuy', 'true');
            this.modal = false;
        }
        this.buyservice.getRates().then((result) => {
            this.rates = result;
        });
    }
    changeGetCoin(getChange) {
        if (getChange) {
            this.coinSend = this.coinsFormSend[this.coinGet][0];
            this.addresses = null;
            this.address = '';
            this.coinsGet.nativeElement.checked = false;
            this.amountSend();
        }
        else {
            this.coinsSend.nativeElement.checked = false;
            this.amountGet();
        }
        if (this.addresses) {
            this.setQr();
        }
    }
    setQr() {
        this.qr = this.coins[this.coinSend].name.toLowerCase() + ':' + this.addresses[this.coins[this.coinSend].symbol.toLowerCase() + '_address'] + this.coins[this.coinSend].qrAmount + (this.valueSend ? this.valueSend.toFixed(this.coins[this.coinSend].decimal).toString() : '0');
    }
    amountGet() {
        this.valueSend = new bignumber_js__WEBPACK_IMPORTED_MODULE_0__["BigNumber"](this.valueGet).multipliedBy(this.rates[this.coinGet][this.coinSend]).toNumber();
        if (this.addresses) {
            this.setQr();
        }
    }
    amountSend() {
        this.valueGet = new bignumber_js__WEBPACK_IMPORTED_MODULE_0__["BigNumber"](this.valueSend).div(this.rates[this.coinGet][this.coinSend]).toNumber();
        if (this.addresses) {
            this.setQr();
        }
    }
    setAddress() {
        this.novalidAddress = false;
        switch (this.coinGet) {
            case 'DUC':
                if (this.address.length === 34 && ['L', 'l', 'M', 'm'].includes(this.address.substring(0, 1))) {
                    this.checkAddress = true;
                    this.buyservice.getValidateDucatusAddress(this.address).then((result) => {
                        result ? this.getAddresses() : (this.novalidAddress = true);
                    });
                }
                else {
                    this.novalidAddress = true;
                }
                break;
            case 'DUCX':
                if (this.address.length === 42) {
                    this.checkAddress = true;
                    if (!/0x[0-9a-fA-F]{40}/.test(this.address)) {
                        this.novalidAddress = true;
                        return;
                    }
                    $.trim(this.address) === '' || $.trim(this.address).length < 15 ? (this.novalidAddress = true) : this.getAddresses();
                }
                else {
                    this.novalidAddress = true;
                }
                break;
            default:
                this.novalidAddress = true;
        }
        this.checkAddress = false;
    }
    getAddresses() {
        this.buyservice.getExchange(this.address, this.coinGet, 'email@email.com').then((result) => {
            this.addresses = result;
            this.setQr();
        });
    }
}
BuyComponent.ɵfac = function BuyComponent_Factory(t) { return new (t || BuyComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_service_buy_buy_service__WEBPACK_IMPORTED_MODULE_3__["BuyService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](ngx_cookie_service__WEBPACK_IMPORTED_MODULE_4__["CookieService"])); };
BuyComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: BuyComponent, selectors: [["app-buy"]], viewQuery: function BuyComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c0, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c1, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.coinsGet = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.coinsSend = _t.first);
    } }, hostBindings: function BuyComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function BuyComponent_click_HostBindingHandler($event) { return ctx.onClick($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresolveDocument"]);
    } }, decls: 17, vars: 12, consts: [[1, "section-header-page", "buy-page-header", 2, "background-image", "url(/assets/img/buy-page/head-background.png)"], [1, "container"], [1, "h1__title-page", 3, "innerHTML"], [1, "app"], [1, "pay-form"], [1, "pay-form-wrap"], ["class", "ducatus-pay-form", 4, "ngIf"], ["class", "ducatus-pay-form loading-pay-form", 4, "ngIf"], [1, "pay-form-block"], [1, "pay-form-block-video"], ["src", "https://www.youtube.com/embed/5tzX8UzUQkE", "frameborder", "0", "allow", "accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture", "allowfullscreen", ""], [1, "pay-form-block-text"], [1, "p__text-section", "icon", "icon__wallet_2", 3, "innerHTML"], ["class", "modal", 4, "ngIf"], [1, "ducatus-pay-form"], [1, "group", "group-input", "group-input-select"], ["for", "get-coin"], ["type", "number", "min", "0", "id", "get-coin", 1, "input", "input-white", 3, "placeholder", "ngModel", "ngModelChange"], ["for", "select-form-get", 1, "select-coin", "select-coin-fill", 3, "ngClass"], ["type", "checkbox", "id", "select-form-get", "hidden", ""], ["openFormGet", ""], [1, "select-coin-selected"], [3, "src", "alt"], [1, "select-coin-list"], [1, "select-coin-list-wrap"], [4, "ngFor", "ngForOf"], [1, "group", "group-text", "group-columns"], [1, "text"], ["for", "send-coin"], ["min", "0", "type", "number", "id", "send-coin", 1, "input", "input-white", 3, "placeholder", "ngModel", "ngModelChange"], ["for", "select-form-send", 1, "select-coin", "select-coin-fill", 3, "ngClass"], ["type", "checkbox", "id", "select-form-send", "hidden", ""], ["openFormSend", ""], [1, "group", "group-input"], ["for", "ducatus-address", 3, "innerHTML"], ["id", "ducatus-address", "type", "text", "oninput", "this.value = this.value.replace('ducatus:', '');", 1, "input", "input-white", 3, "ngModel", "disabled", "placeholder", "ngModelChange"], ["class", "error-address-value", 4, "ngIf"], ["id", "loading-address", 1, "group", "group-input", "group-input-copy", "m-b-0", "qr-wrap", 3, "ngClass"], [1, "group-wrap", "qr-address"], [1, "input", "input-accent"], [4, "ngIf"], ["class", "copy-address icon icon-copy", 3, "cdkCopyToClipboard", 4, "ngIf"], [1, "qrcode"], ["class", "qr-code", 3, "elementType", "margin", "scale", "qrdata", "width", "errorCorrectionLevel", 4, "ngIf"], [1, "group-wrap", "qr-textCode"], [1, "loading-address-qr"], [1, "loading-address-qr-wrap"], [1, "group", "group-text", "qr-text", 2, "margin-bottom", "0"], [1, "text-attantion", 3, "innerHTML"], [1, "select-coin-list-item", 3, "ngClass", "click"], [1, "error-address-value"], [1, "copy-address", "icon", "icon-copy", 3, "cdkCopyToClipboard"], [1, "qr-code", 3, "elementType", "margin", "scale", "qrdata", "width", "errorCorrectionLevel"], [1, "ducatus-pay-form", "loading-pay-form"], [1, "group", "group-input", "group-input-select", "input-h-60"], [1, "group", "group-text", "group-columns", "input-h-20"], [1, "group", "group-input", "group-input-select", "input-h-85"], [1, "group", "group-input", "input-h-105"], [1, "modal"], [1, "modal-wrap"], [1, "modal-content-top"], [3, "innerHTML"], [1, "modal-content-bottom"], [1, "input-checkbox-group"], ["for", "terms", 3, "innerHTML"], ["type", "checkbox", "id", "terms", 1, "terms"], ["acceptTerms", ""], ["id", "btn-modal", 1, "ducatus-btn", "ducatus-btn-brown", 2, "margin", "0 auto", 3, "disabled", "click"]], template: function BuyComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "h1", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](3, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "section", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, BuyComponent_div_8_Template, 63, 74, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, BuyComponent_div_9_Template, 7, 0, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](12, "iframe", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](14, "p", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](15, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](16, BuyComponent_div_16_Template, 14, 10, "div", 13);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](3, 5, "PAGE.BUY.TITLE"), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeHtml"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.rates);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.rates);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](15, 7, "PAGE.BUY.INFO.TEXT", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](10, _c5, ctx.coins[ctx.coinGet].name)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeHtml"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.modal);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NumberValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _angular_cdk_clipboard__WEBPACK_IMPORTED_MODULE_7__["CdkCopyToClipboard"], angularx_qrcode__WEBPACK_IMPORTED_MODULE_8__["QRCodeComponent"]], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__["TranslatePipe"]], styles: ["@import url(\"https://fonts.googleapis.com/css?family=Montserrat:100,100i,200,200i,300,300i,400,400i,500,500i,600,600i,700,700i,800,800i,900,900i&display=swap\");\n.clearfix[_ngcontent-%COMP%]:after {\n  content: \"\";\n  display: table;\n  clear: both;\n}\n.centered[_ngcontent-%COMP%] {\n  display: table;\n  width: 100%;\n  height: 100%;\n}\n.centered[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\n  display: table-cell;\n  text-align: center;\n  vertical-align: middle;\n}\n\n.loading-pay-form[_ngcontent-%COMP%] {\n  padding: 30px !important;\n}\n.loading-pay-form[_ngcontent-%COMP%]   .group[_ngcontent-%COMP%] {\n  background: linear-gradient(124deg, #f7f3eb, #e9e1ca, #f7f3eb);\n  background-size: 1800% 1800%;\n  -webkit-animation: rainbow 4s ease infinite;\n  -z-animation: rainbow 4s ease infinite;\n  animation: rainbow 4s ease infinite;\n  margin-bottom: 15px;\n  border-radius: 5px;\n}\n.loading-pay-form[_ngcontent-%COMP%]   .group[_ngcontent-%COMP%]:nth-last-child(1) {\n  margin-bottom: 0 !important;\n}\n.loading-pay-form[_ngcontent-%COMP%]   .input-h-20[_ngcontent-%COMP%] {\n  height: 30px !important;\n}\n.loading-pay-form[_ngcontent-%COMP%]   .input-h-60[_ngcontent-%COMP%] {\n  height: 60px !important;\n}\n.loading-pay-form[_ngcontent-%COMP%]   .input-h-105[_ngcontent-%COMP%] {\n  height: 105px !important;\n}\n.loading-pay-form[_ngcontent-%COMP%]   .input-h-85[_ngcontent-%COMP%] {\n  height: 85px !important;\n}\n@-webkit-keyframes rainbow {\n  0% {\n    background-position: 0% 82%;\n  }\n  50% {\n    background-position: 100% 19%;\n  }\n  100% {\n    background-position: 0% 82%;\n  }\n}\n@keyframes rainbow {\n  0% {\n    background-position: 0% 82%;\n  }\n  50% {\n    background-position: 100% 19%;\n  }\n  100% {\n    background-position: 0% 82%;\n  }\n}\n.color-page[_ngcontent-%COMP%] {\n  background-color: #f4f0e5 !important;\n  background-image: none !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9nbGViL3Byb2plY3RzL2R1Y2F0dXMtc2l0ZS9zcmMvc2Nzcy9fdmFycy5zY3NzIiwiL1VzZXJzL2dsZWIvcHJvamVjdHMvZHVjYXR1cy1zaXRlL3NyYy9zY3NzL19taXhpbnMuc2NzcyIsInNyYy9hcHAvcGFnZXMvYnV5L2J1eS5jb21wb25lbnQuc2NzcyIsIi9Vc2Vycy9nbGViL3Byb2plY3RzL2R1Y2F0dXMtc2l0ZS9zcmMvYXBwL3BhZ2VzL2J1eS9idXkuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBSVEsK0pBQUE7QUMyQlI7RUFDQyxXQUFBO0VBQ0EsY0FBQTtFQUNBLFdBQUE7QUM3QkQ7QURnQ0E7RUFDQyxjQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUM3QkQ7QUQrQkM7RUFDQyxtQkFBQTtFQUNBLGtCQUFBO0VBQ0Esc0JBQUE7QUM3QkY7QUR5TUE7OztHQUFBO0FFdE5BO0VBQ0Usd0JBQUE7QURvQkY7QUNsQkU7RUFDRSw4REFBQTtFQUNBLDRCQUFBO0VBQ0EsMkNBQUE7RUFDQSxzQ0FBQTtFQUVBLG1DQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBRG9CSjtBQ2xCSTtFQUNFLDJCQUFBO0FEb0JOO0FDaEJFO0VBQ0UsdUJBQUE7QURrQko7QUNmRTtFQUNFLHVCQUFBO0FEaUJKO0FDZEU7RUFDRSx3QkFBQTtBRGdCSjtBQ2JFO0VBQ0UsdUJBQUE7QURlSjtBQ1hBO0VBQ0U7SUFDRSwyQkFBQTtFRGNGO0VDWEE7SUFDRSw2QkFBQTtFRGFGO0VDVkE7SUFDRSwyQkFBQTtFRFlGO0FBQ0Y7QUNtQkE7RUFDRTtJQUNFLDJCQUFBO0VES0Y7RUNGQTtJQUNFLDZCQUFBO0VESUY7RUNEQTtJQUNFLDJCQUFBO0VER0Y7QUFDRjtBQ0FBO0VBQ0Usb0NBQUE7RUFDQSxpQ0FBQTtBREVGIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvYnV5L2J1eS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gbWFpbiB2YXJpYWJsZXNcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG5AaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PU1vbnRzZXJyYXQ6MTAwLDEwMGksMjAwLDIwMGksMzAwLDMwMGksNDAwLDQwMGksNTAwLDUwMGksNjAwLDYwMGksNzAwLDcwMGksODAwLDgwMGksOTAwLDkwMGkmZGlzcGxheT1zd2FwJyk7XG5cbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gYWRkaXRpb25hbCB2YXJpYWJsZXNcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG5cbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gY29sb3JzXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuJGJsYWNrOiAjMDAwO1xuJGdyYXk6ICM4MDgwODA7XG4kd2hpdGU6ICNmZmY7XG4kYmx1ZTogIzAwRjtcbiRwdXJwbGU6ICM4QTRENzY7XG4kcGluazogI0ZBN0M5MTtcbiRicm93bjogIzc1Nzc2MztcbiRiZWlnZS1saWdodDogI0QwRDFDRDtcbiRiZWlnZS1saWdodGVyLTE6ICNFRkYwRUI7XG4kYmVpZ2UtbGlnaHRlci0yOiAjRjRGNEY0O1xuXG4kYnJvd24tcmVkOiAjODkyNzM0O1xuJGdvbGQteWVsbG93OiAjRThDMjJDO1xuJGRhcmstZ3JleTogIzIzMjQxZjtcbiRncmV5OiAjNGQ0YzRkO1xuJGdvbGQ6ICNEM0MxOTg7XG4kZ29sZC0yOiAjRjBFQUUzO1xuIiwiLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBtYWluIG1peGluc1xuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbkBtaXhpbiBmb250LWZhY2UoJGZvbnQtZmFtaWx5LCAkZmlsZS1wYXRoLCAkd2VpZ2h0OiBub3JtYWwsICRzdHlsZTogbm9ybWFsLCAkYXNzZXQtcGlwZWxpbmU6IGZhbHNlKSB7XG5cdEBmb250LWZhY2Uge1xuXHRcdGZvbnQtZmFtaWx5OiAkZm9udC1mYW1pbHk7XG5cdFx0Zm9udC13ZWlnaHQ6ICR3ZWlnaHQ7XG5cdFx0Zm9udC1zdHlsZTogJHN0eWxlO1xuXG5cdFx0QGlmICRhc3NldC1waXBlbGluZT09dHJ1ZSB7XG5cdFx0XHRzcmM6IGZvbnQtdXJsKCcjeyRmaWxlLXBhdGh9LmVvdCcpO1xuXHRcdFx0c3JjOiBmb250LXVybCgnI3skZmlsZS1wYXRofS5lb3Q/I2llZml4JykgZm9ybWF0KCdlbWJlZGRlZC1vcGVudHlwZScpLFxuXHRcdFx0Zm9udC11cmwoJyN7JGZpbGUtcGF0aH0ud29mZicpIGZvcm1hdCgnd29mZicpLFxuXHRcdFx0Zm9udC11cmwoJyN7JGZpbGUtcGF0aH0udHRmJykgZm9ybWF0KCd0cnVldHlwZScpO1xuXHRcdH1cblxuXHRcdEBlbHNlIHtcblx0XHRcdHNyYzogdXJsKCcjeyRmaWxlLXBhdGh9LmVvdCcpO1xuXHRcdFx0c3JjOiB1cmwoJyN7JGZpbGUtcGF0aH0uZW90PyNpZWZpeCcpIGZvcm1hdCgnZW1iZWRkZWQtb3BlbnR5cGUnKSxcblx0XHRcdHVybCgnI3skZmlsZS1wYXRofS53b2ZmJykgZm9ybWF0KCd3b2ZmJyksXG5cdFx0XHR1cmwoJyN7JGZpbGUtcGF0aH0udHRmJykgZm9ybWF0KCd0cnVldHlwZScpO1xuXHRcdH1cblx0fVxufVxuXG5AbWl4aW4gbm90ZXh0IHtcblx0b3ZlcmZsb3c6IGhpZGRlbjtcblx0dGV4dC1pbmRlbnQ6IC05OTk5cHg7XG59XG5cbi5jbGVhcmZpeDphZnRlciB7XG5cdGNvbnRlbnQ6IFwiXCI7XG5cdGRpc3BsYXk6IHRhYmxlO1xuXHRjbGVhcjogYm90aDtcbn1cblxuLmNlbnRlcmVkIHtcblx0ZGlzcGxheTogdGFibGU7XG5cdHdpZHRoOiAxMDAlO1xuXHRoZWlnaHQ6IDEwMCU7XG5cblx0Pioge1xuXHRcdGRpc3BsYXk6IHRhYmxlLWNlbGw7XG5cdFx0dGV4dC1hbGlnbjogY2VudGVyO1xuXHRcdHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG5cdH1cbn1cblxuQG1peGluIHBsYWNlaG9sZGVyQ29sb3IoJGlucHV0LXRleHQtY29sb3IpIHtcblx0Jjo6LXdlYmtpdC1pbnB1dC1wbGFjZWhvbGRlciB7XG5cdFx0Y29sb3I6ICRpbnB1dC10ZXh0LWNvbG9yO1xuXHR9XG5cblx0JjotbW96LXBsYWNlaG9sZGVyIHtcblx0XHRjb2xvcjogJGlucHV0LXRleHQtY29sb3I7XG5cdFx0b3BhY2l0eTogMTtcblx0fVxuXG5cdCY6Oi1tb3otcGxhY2Vob2xkZXIge1xuXHRcdGNvbG9yOiAkaW5wdXQtdGV4dC1jb2xvcjtcblx0XHRvcGFjaXR5OiAxO1xuXHR9XG5cblx0JjotbXMtaW5wdXQtcGxhY2Vob2xkZXIge1xuXHRcdGNvbG9yOiAkaW5wdXQtdGV4dC1jb2xvcjtcblx0fVxuXG5cdCY6OnBsYWNlaG9sZGVyIHtcblx0XHRjb2xvcjogJGlucHV0LXRleHQtY29sb3I7XG5cdFx0b3BhY2l0eTogMTtcblx0fVxuXG5cdCY6Zm9jdXM6LW1vei1wbGFjZWhvbGRlciB7XG5cdFx0Y29sb3I6IHRyYW5zcGFyZW50O1xuXHRcdG9wYWNpdHk6IDE7XG5cdH1cblxuXHQmOmZvY3VzOjotbW96LXBsYWNlaG9sZGVyIHtcblx0XHRjb2xvcjogdHJhbnNwYXJlbnQ7XG5cdFx0b3BhY2l0eTogMTtcblx0fVxuXG5cdCY6Zm9jdXM6Oi13ZWJraXQtaW5wdXQtcGxhY2Vob2xkZXIge1xuXHRcdGNvbG9yOiB0cmFuc3BhcmVudDtcblx0fVxuXG5cdCY6Zm9jdXM6LW1zLWlucHV0LXBsYWNlaG9sZGVyIHtcblx0XHRjb2xvcjogdHJhbnNwYXJlbnQ7XG5cdH1cblxuXHQmOmZvY3VzOjpwbGFjZWhvbGRlciB7XG5cdFx0Y29sb3I6IHRyYW5zcGFyZW50O1xuXHR9XG59XG5cbkBtaXhpbiBjbGVhcmZpeCB7XG5cdCY6YWZ0ZXIge1xuXHRcdGNvbnRlbnQ6IFwiIFwiO1xuXHRcdGRpc3BsYXk6IGJsb2NrO1xuXHRcdGNsZWFyOiBib3RoO1xuXHR9XG59XG5cbi8vIGNsZWFyIHNlbGVjdCB3aXRob3V0IGRlZmF1bHQgYnV0dG9uXG5AbWl4aW4gY2xlYXJTZWxlY3Qge1xuXHQtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XG5cdC1tb3otYXBwZWFyYW5jZTogbm9uZTtcblx0YXBwZWFyYW5jZTogbm9uZTtcblx0LXdlYmtpdC1ib3JkZXItcmFkaXVzOiAwO1xuXHQtbW96LWJvcmRlci1yYWRpdXM6IDA7XG5cdGJvcmRlci1yYWRpdXM6IDA7XG59XG5cbi8vIGVsZW1lbnRzIGdldCBhcHBlbmRlZCB3aXRoIFwiX19cIiBhbmQgdGhlICRuYW1lXG5AbWl4aW4gZSgkbmFtZSkge1xuXHRAYXQtcm9vdCAjeyZ9XyN7JG5hbWV9IHtcblx0XHRAY29udGVudDtcblx0fVxufVxuXG4vLyBtb2RpZmllcnMgZ2V0IGFwcGVuZGVkIHdpdGggXCItLVwiIGFuZCB0aGUgJG5hbWVcbkBtaXhpbiBtKCRuYW1lKSB7XG5cdEBhdC1yb290ICN7Jn0tLSN7JG5hbWV9IHtcblx0XHRAY29udGVudDtcblx0fVxufVxuXG4vLyBicmVha3BvaW50c1xuQG1peGluIGIoJHBvaW50KSB7XG5cdEBpZiAkcG9pbnQ9PWRlc2t0b3Age1xuXHRcdEBtZWRpYSAobWF4LXdpZHRoOiAxMzY2cHgpIGFuZCAobWluLXdpZHRoOjEwMjRweCkge1xuXHRcdFx0QGNvbnRlbnQgO1xuXHRcdH1cblx0fVxuXG5cdEBlbHNlIGlmICRwb2ludD09dGFibGV0IHtcblx0XHRAbWVkaWEgKG1heC13aWR0aDogMTAwMHB4KSB7XG5cdFx0XHRAY29udGVudCA7XG5cdFx0fVxuXHR9XG5cblx0QGVsc2UgaWYgJHBvaW50PT1tb2JpbGUge1xuXHRcdEBtZWRpYSAobWF4LXdpZHRoOiA3NjdweCkge1xuXHRcdFx0QGNvbnRlbnQgO1xuXHRcdH1cblx0fVxuXG5cdEBlbHNlIGlmICRwb2ludD09bW9iaWxlM3gge1xuXG5cdFx0QG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAoLXdlYmtpdC1taW4tZGV2aWNlLXBpeGVsLXJhdGlvOiAzKSxcblx0XHRvbmx5IHNjcmVlbiBhbmQgKG1pbi1yZXNvbHV0aW9uOiAzZHBweCksXG5cdFx0b25seSBzY3JlZW4gYW5kIChtaW4tcmVzb2x1dGlvbjogMzUwZHBpKSB7XG5cdFx0XHRAY29udGVudCA7XG5cdFx0fVxuXHR9XG5cblx0QGVsc2Uge1xuXHRcdEBtZWRpYSAobWF4LXdpZHRoOiAkcG9pbnQgKyAncHgnKSB7XG5cdFx0XHRAY29udGVudCA7XG5cdFx0fVxuXHR9XG59XG5cbi8vIGJyZWFrcG9pbnRzXG5AbWl4aW4gYmIoJHBvaW50TWF4LCAkcG9pbnRNaW4pIHtcblx0QG1lZGlhIChtYXgtd2lkdGg6ICRwb2ludE1heCArICdweCcpIGFuZCAobWluLXdpZHRoOiAkcG9pbnRNaW4gKyAncHgnKSB7XG5cdFx0QGNvbnRlbnQgO1xuXHR9XG59XG5cbkBtaXhpbiBpZSgpIHtcblxuXHRAbWVkaWEgc2NyZWVuIGFuZCAoLW1zLWhpZ2gtY29udHJhc3Q6IGFjdGl2ZSksXG5cdCgtbXMtaGlnaC1jb250cmFzdDogbm9uZSkge1xuXHRcdEBjb250ZW50IDtcblx0fVxufVxuXG5AbWl4aW4gYmVmb3JlLWltZygkZGlzcGxheSwgJHdpZHRoLCAkaGVpZ2h0LCAkcG9zaXRpb24pIHtcblx0QGF0LXJvb3QgI3smfTpiZWZvcmUge1xuXHRcdGNvbnRlbnQ6ICcnO1xuXHRcdGRpc3BsYXk6ICRkaXNwbGF5O1xuXG5cdFx0QGlmICRwb3NpdGlvbj09YSB7XG5cdFx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XG5cdFx0fVxuXG5cdFx0QGlmICRwb3NpdGlvbj09ciB7XG5cdFx0XHRwb3NpdGlvbjogcmVsYXRpdmU7XG5cdFx0fVxuXG5cdFx0d2lkdGg6ICR3aWR0aDtcblx0XHRoZWlnaHQ6ICRoZWlnaHQ7XG5cdFx0QGNvbnRlbnQ7XG5cdH1cbn1cblxuQG1peGluIGFmdGVyLWltZygkZGlzcGxheSwgJHdpZHRoLCAkaGVpZ2h0LCAkcG9zaXRpb24pIHtcblx0QGF0LXJvb3QgI3smfTphZnRlciB7XG5cdFx0Y29udGVudDogJyc7XG5cdFx0ZGlzcGxheTogJGRpc3BsYXk7XG5cblx0XHRAaWYgJHBvc2l0aW9uPT1hIHtcblx0XHRcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcblx0XHR9XG5cblx0XHRAaWYgJHBvc2l0aW9uPT1yIHtcblx0XHRcdHBvc2l0aW9uOiByZWxhdGl2ZTtcblx0XHR9XG5cblx0XHR3aWR0aDogJHdpZHRoO1xuXHRcdGhlaWdodDogJGhlaWdodDtcblx0XHRAY29udGVudDtcblx0fVxufVxuXG4vKiByZW0gZm9udCBzaXplIHdpdGggZmFsbGJhY2sgfCB1c2FnZTpcblx0cCB7XG5cdFx0QGluY2x1ZGUgZm9udC1zaXplKDE0cHgpXG5cdH0qL1xuXG5AZnVuY3Rpb24gY2FsY3VsYXRlUmVtKCRzaXplKSB7XG5cdCRyZW1TaXplOiAkc2l6ZSAvIDE2cHg7XG5cdEByZXR1cm4gJHJlbVNpemUgKiAxcmVtO1xufVxuXG5AbWl4aW4gZm9udC1zaXplKCRzaXplKSB7XG5cdGZvbnQtc2l6ZTogJHNpemU7XG5cdGZvbnQtc2l6ZTogY2FsY3VsYXRlUmVtKCRzaXplKTtcbn1cblxuQG1peGluIHRleHRDdXQoJGNvbCwgJGhlaWdodCkge1xuXHRkaXNwbGF5OiAtd2Via2l0LWJveDtcblx0LXdlYmtpdC1saW5lLWNsYW1wOiAkY29sO1xuXHQtd2Via2l0LWJveC1vcmllbnQ6IHZlcnRpY2FsO1xuXHRvdmVyZmxvdzogaGlkZGVuO1xuXHRtYXgtaGVpZ2h0OiAkaGVpZ2h0O1xufVxuXG4vLyBidXR0b25zXG5cbkBtaXhpbiBidG4tZ3JhZGllbnQoJGNUZXh0LCAkY0hvdmVyLCAkZGlyZWN0aW9uLCAkY0ZpcnN0LCAkY1NlY29ucywgJGNUaGlyZCwgJGhvdmVyKSB7XG5cdGNvbG9yOiAkY1RleHQ7XG5cdHRyYW5zaXRpb246IDAuNXM7XG5cdGJhY2tncm91bmQtc2l6ZTogMjAwJSBhdXRvO1xuXHRiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoJGRpcmVjdGlvbiwgJGNGaXJzdCAwJSwgJGNTZWNvbnMgNTElLCAkY1RoaXJkIDEwMCUpO1xuXG5cdCY6aG92ZXIge1xuXHRcdHRleHQtZGVjb3JhdGlvbjogbm9uZTtcblx0XHRiYWNrZ3JvdW5kLXBvc2l0aW9uOiAkaG92ZXI7XG5cdFx0Y29sb3I6ICRjSG92ZXI7XG5cdFx0Ym94LXNoYWRvdzogMHB4IDIwcHggMzBweCAtMTVweCAkY1RoaXJkO1xuXHR9XG59XG5cbkBtaXhpbiBncmFkaWVudCgkdG9wLCAkYm90dG9tKSB7XG5cdGJhY2tncm91bmQ6ICR0b3A7XG5cdGJhY2tncm91bmQ6IC1tb3otbGluZWFyLWdyYWRpZW50KHRvcCwgJHRvcCAwJSwgJGJvdHRvbSAxMDAlKTtcblx0YmFja2dyb3VuZDogLXdlYmtpdC1ncmFkaWVudChsaW5lYXIsIGxlZnQgdG9wLCBsZWZ0IGJvdHRvbSwgY29sb3Itc3RvcCgwJSwgJHRvcCksIGNvbG9yLXN0b3AoMTAwJSwgJGJvdHRvbSkpO1xuXHRiYWNrZ3JvdW5kOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudCh0b3AsICR0b3AgMCUsICRib3R0b20gMTAwJSk7XG5cdGJhY2tncm91bmQ6IC1vLWxpbmVhci1ncmFkaWVudCh0b3AsICR0b3AgMCUsICRib3R0b20gMTAwJSk7XG5cdGJhY2tncm91bmQ6IC1tcy1saW5lYXItZ3JhZGllbnQodG9wLCAkdG9wIDAlLCAkYm90dG9tIDEwMCUpO1xuXHRiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCAkdG9wIDAlLCAkYm90dG9tIDEwMCUpO1xuXHRmaWx0ZXI6IHByb2dpZDpEWEltYWdlVHJhbnNmb3JtLk1pY3Jvc29mdC5ncmFkaWVudChzdGFydENvbG9yc3RyPScjeyR0b3B9JywgZW5kQ29sb3JzdHI9JyN7JGJvdHRvbX0gJywgR3JhZGllbnRUeXBlPTApO1xufSIsIkBpbXBvcnQgdXJsKFwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PU1vbnRzZXJyYXQ6MTAwLDEwMGksMjAwLDIwMGksMzAwLDMwMGksNDAwLDQwMGksNTAwLDUwMGksNjAwLDYwMGksNzAwLDcwMGksODAwLDgwMGksOTAwLDkwMGkmZGlzcGxheT1zd2FwXCIpO1xuLmNsZWFyZml4OmFmdGVyIHtcbiAgY29udGVudDogXCJcIjtcbiAgZGlzcGxheTogdGFibGU7XG4gIGNsZWFyOiBib3RoO1xufVxuXG4uY2VudGVyZWQge1xuICBkaXNwbGF5OiB0YWJsZTtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbn1cbi5jZW50ZXJlZCA+ICoge1xuICBkaXNwbGF5OiB0YWJsZS1jZWxsO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG59XG5cbi8qIHJlbSBmb250IHNpemUgd2l0aCBmYWxsYmFjayB8IHVzYWdlOlxuXHRwIHtcblx0XHRAaW5jbHVkZSBmb250LXNpemUoMTRweClcblx0fSovXG4ubG9hZGluZy1wYXktZm9ybSB7XG4gIHBhZGRpbmc6IDMwcHggIWltcG9ydGFudDtcbn1cbi5sb2FkaW5nLXBheS1mb3JtIC5ncm91cCB7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMjRkZWcsICNmN2YzZWIsICNlOWUxY2EsICNmN2YzZWIpO1xuICBiYWNrZ3JvdW5kLXNpemU6IDE4MDAlIDE4MDAlO1xuICAtd2Via2l0LWFuaW1hdGlvbjogcmFpbmJvdyA0cyBlYXNlIGluZmluaXRlO1xuICAtei1hbmltYXRpb246IHJhaW5ib3cgNHMgZWFzZSBpbmZpbml0ZTtcbiAgLW8tYW5pbWF0aW9uOiByYWluYm93IDRzIGVhc2UgaW5maW5pdGU7XG4gIGFuaW1hdGlvbjogcmFpbmJvdyA0cyBlYXNlIGluZmluaXRlO1xuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG59XG4ubG9hZGluZy1wYXktZm9ybSAuZ3JvdXA6bnRoLWxhc3QtY2hpbGQoMSkge1xuICBtYXJnaW4tYm90dG9tOiAwICFpbXBvcnRhbnQ7XG59XG4ubG9hZGluZy1wYXktZm9ybSAuaW5wdXQtaC0yMCB7XG4gIGhlaWdodDogMzBweCAhaW1wb3J0YW50O1xufVxuLmxvYWRpbmctcGF5LWZvcm0gLmlucHV0LWgtNjAge1xuICBoZWlnaHQ6IDYwcHggIWltcG9ydGFudDtcbn1cbi5sb2FkaW5nLXBheS1mb3JtIC5pbnB1dC1oLTEwNSB7XG4gIGhlaWdodDogMTA1cHggIWltcG9ydGFudDtcbn1cbi5sb2FkaW5nLXBheS1mb3JtIC5pbnB1dC1oLTg1IHtcbiAgaGVpZ2h0OiA4NXB4ICFpbXBvcnRhbnQ7XG59XG5cbkAtd2Via2l0LWtleWZyYW1lcyByYWluYm93IHtcbiAgMCUge1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IDAlIDgyJTtcbiAgfVxuICA1MCUge1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IDEwMCUgMTklO1xuICB9XG4gIDEwMCUge1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IDAlIDgyJTtcbiAgfVxufVxuQC1tb3ota2V5ZnJhbWVzIHJhaW5ib3cge1xuICAwJSB7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogMCUgODIlO1xuICB9XG4gIDUwJSB7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogMTAwJSAxOSU7XG4gIH1cbiAgMTAwJSB7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogMCUgODIlO1xuICB9XG59XG5ALW8ta2V5ZnJhbWVzIHJhaW5ib3cge1xuICAwJSB7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogMCUgODIlO1xuICB9XG4gIDUwJSB7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogMTAwJSAxOSU7XG4gIH1cbiAgMTAwJSB7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogMCUgODIlO1xuICB9XG59XG5Aa2V5ZnJhbWVzIHJhaW5ib3cge1xuICAwJSB7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogMCUgODIlO1xuICB9XG4gIDUwJSB7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogMTAwJSAxOSU7XG4gIH1cbiAgMTAwJSB7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogMCUgODIlO1xuICB9XG59XG4uY29sb3ItcGFnZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmNGYwZTUgIWltcG9ydGFudDtcbiAgYmFja2dyb3VuZC1pbWFnZTogbm9uZSAhaW1wb3J0YW50O1xufSIsIkBpbXBvcnQgJy4uLy4uLy4uL3Njc3MvdmFycyc7XG5AaW1wb3J0ICcuLi8uLi8uLi9zY3NzL21peGlucyc7XG5cbi5sb2FkaW5nLXBheS1mb3JtIHtcbiAgcGFkZGluZzogMzBweCAhaW1wb3J0YW50O1xuXG4gIC5ncm91cCB7XG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEyNGRlZywgI2Y3ZjNlYiwgI2U5ZTFjYSwgI2Y3ZjNlYik7XG4gICAgYmFja2dyb3VuZC1zaXplOiAxODAwJSAxODAwJTtcbiAgICAtd2Via2l0LWFuaW1hdGlvbjogcmFpbmJvdyA0cyBlYXNlIGluZmluaXRlO1xuICAgIC16LWFuaW1hdGlvbjogcmFpbmJvdyA0cyBlYXNlIGluZmluaXRlO1xuICAgIC1vLWFuaW1hdGlvbjogcmFpbmJvdyA0cyBlYXNlIGluZmluaXRlO1xuICAgIGFuaW1hdGlvbjogcmFpbmJvdyA0cyBlYXNlIGluZmluaXRlO1xuICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuXG4gICAgJjpudGgtbGFzdC1jaGlsZCgxKSB7XG4gICAgICBtYXJnaW4tYm90dG9tOiAwICFpbXBvcnRhbnQ7XG4gICAgfVxuICB9XG5cbiAgLmlucHV0LWgtMjAge1xuICAgIGhlaWdodDogMzBweCAhaW1wb3J0YW50O1xuICB9XG5cbiAgLmlucHV0LWgtNjAge1xuICAgIGhlaWdodDogNjBweCAhaW1wb3J0YW50O1xuICB9XG5cbiAgLmlucHV0LWgtMTA1IHtcbiAgICBoZWlnaHQ6IDEwNXB4ICFpbXBvcnRhbnQ7XG4gIH1cblxuICAuaW5wdXQtaC04NSB7XG4gICAgaGVpZ2h0OiA4NXB4ICFpbXBvcnRhbnQ7XG4gIH1cbn1cblxuQC13ZWJraXQta2V5ZnJhbWVzIHJhaW5ib3cge1xuICAwJSB7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogMCUgODIlO1xuICB9XG5cbiAgNTAlIHtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAxMDAlIDE5JTtcbiAgfVxuXG4gIDEwMCUge1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IDAlIDgyJTtcbiAgfVxufVxuXG5ALW1vei1rZXlmcmFtZXMgcmFpbmJvdyB7XG4gIDAlIHtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAwJSA4MiU7XG4gIH1cblxuICA1MCUge1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IDEwMCUgMTklO1xuICB9XG5cbiAgMTAwJSB7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogMCUgODIlO1xuICB9XG59XG5cbkAtby1rZXlmcmFtZXMgcmFpbmJvdyB7XG4gIDAlIHtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAwJSA4MiU7XG4gIH1cblxuICA1MCUge1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IDEwMCUgMTklO1xuICB9XG5cbiAgMTAwJSB7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogMCUgODIlO1xuICB9XG59XG5cbkBrZXlmcmFtZXMgcmFpbmJvdyB7XG4gIDAlIHtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAwJSA4MiU7XG4gIH1cblxuICA1MCUge1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IDEwMCUgMTklO1xuICB9XG5cbiAgMTAwJSB7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogMCUgODIlO1xuICB9XG59XG5cbi5jb2xvci1wYWdlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y0ZjBlNSAhaW1wb3J0YW50O1xuICBiYWNrZ3JvdW5kLWltYWdlOiBub25lICFpbXBvcnRhbnQ7XG59XG5cbi8vIC5idXktcGFnZSB7XG4vLyAgICYtaGVhZGVyIHtcbi8vICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4vLyAgICAgZGlzcGxheTogZmxleDtcbi8vICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbi8vICAgICBvdmVyZmxvdzogaGlkZGVuO1xuLy8gICAgIGhlaWdodDogNDM3cHg7XG4vLyAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKHNyYy9hc3NldHMvaW1nL2J1eS1wYWdlL2hlYWQtYmFja2dyb3VuZC5wbmcpO1xuLy8gICAgIGJveC1zaGFkb3c6IDAgNHB4IDRweCByZ2JhKDAsIDAsIDAsIDAuMjUpO1xuXG4vLyAgICAgJi10ZXh0IHtcbi8vICAgICAgICYtY29udGFpbmVyIHtcbi8vICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuLy8gICAgICAgICBib3R0b206IDA7XG4vLyAgICAgICAgIHdpZHRoOiAxMDAlO1xuLy8gICAgICAgICBtYXgtd2lkdGg6IDEzNjZweDtcbi8vICAgICAgICAgbWFyZ2luOiAwIGF1dG87XG4vLyAgICAgICB9XG5cbi8vICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbi8vICAgICAgIGJvdHRvbTogNTNweDtcbi8vICAgICAgIGxlZnQ6IDc4cHg7XG4vLyAgICAgICBjb2xvcjogd2hpdGU7XG4vLyAgICAgICBmb250LXdlaWdodDogYm9sZDtcbi8vICAgICAgIGZvbnQtc2l6ZTogMzdweDtcblxuLy8gICAgICAgQGluY2x1ZGUgYig2MDApIHtcbi8vICAgICAgICAgZm9udC1zaXplOiAzMHB4O1xuLy8gICAgICAgfVxuLy8gICAgIH1cblxuLy8gICAgICYtYmlnLWxvZ28ge1xuLy8gICAgICAgbWluLXdpZHRoOiA2NjBweDtcbi8vICAgICAgIG1heC13aWR0aDogMTAwJTtcbi8vICAgICB9XG4vLyAgIH1cbi8vIH1cblxuLy8gLmxvYWRpbmctcGF5LWZvcm0ge1xuLy8gICBwYWRkaW5nOiAzMHB4ICFpbXBvcnRhbnQ7XG5cbi8vICAgLmdyb3VwIHtcbi8vICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTI0ZGVnLCAjZjdmM2ViLCAjZTllMWNhLCAjZjdmM2ViKTtcbi8vICAgICBiYWNrZ3JvdW5kLXNpemU6IDE4MDAlIDE4MDAlO1xuLy8gICAgIC13ZWJraXQtYW5pbWF0aW9uOiByYWluYm93IDRzIGVhc2UgaW5maW5pdGU7XG4vLyAgICAgLXotYW5pbWF0aW9uOiByYWluYm93IDRzIGVhc2UgaW5maW5pdGU7XG4vLyAgICAgLW8tYW5pbWF0aW9uOiByYWluYm93IDRzIGVhc2UgaW5maW5pdGU7XG4vLyAgICAgYW5pbWF0aW9uOiByYWluYm93IDRzIGVhc2UgaW5maW5pdGU7XG4vLyAgICAgbWFyZ2luLWJvdHRvbTogMTVweDtcbi8vICAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4vLyAgIH1cblxuLy8gICAuaW5wdXQtaC0yMCB7XG4vLyAgICAgaGVpZ2h0OiAzMHB4ICFpbXBvcnRhbnQ7XG4vLyAgIH1cblxuLy8gICAuaW5wdXQtaC02MCB7XG4vLyAgICAgaGVpZ2h0OiA2MHB4ICFpbXBvcnRhbnQ7XG4vLyAgIH1cblxuLy8gICAuaW5wdXQtaC0xMDUge1xuLy8gICAgIGhlaWdodDogMTA1cHggIWltcG9ydGFudDtcbi8vICAgfVxuXG4vLyAgIC5pbnB1dC1oLTg1IHtcbi8vICAgICBoZWlnaHQ6IDg1cHggIWltcG9ydGFudDtcbi8vICAgfVxuLy8gfVxuXG4vLyBALXdlYmtpdC1rZXlmcmFtZXMgcmFpbmJvdyB7XG4vLyAgIDAlIHtcbi8vICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAwJSA4MiU7XG4vLyAgIH1cblxuLy8gICA1MCUge1xuLy8gICAgIGJhY2tncm91bmQtcG9zaXRpb246IDEwMCUgMTklO1xuLy8gICB9XG5cbi8vICAgMTAwJSB7XG4vLyAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogMCUgODIlO1xuLy8gICB9XG4vLyB9XG5cbi8vIEAtbW96LWtleWZyYW1lcyByYWluYm93IHtcbi8vICAgMCUge1xuLy8gICAgIGJhY2tncm91bmQtcG9zaXRpb246IDAlIDgyJTtcbi8vICAgfVxuXG4vLyAgIDUwJSB7XG4vLyAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogMTAwJSAxOSU7XG4vLyAgIH1cblxuLy8gICAxMDAlIHtcbi8vICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAwJSA4MiU7XG4vLyAgIH1cbi8vIH1cblxuLy8gQC1vLWtleWZyYW1lcyByYWluYm93IHtcbi8vICAgMCUge1xuLy8gICAgIGJhY2tncm91bmQtcG9zaXRpb246IDAlIDgyJTtcbi8vICAgfVxuXG4vLyAgIDUwJSB7XG4vLyAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogMTAwJSAxOSU7XG4vLyAgIH1cblxuLy8gICAxMDAlIHtcbi8vICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAwJSA4MiU7XG4vLyAgIH1cbi8vIH1cblxuLy8gQGtleWZyYW1lcyByYWluYm93IHtcbi8vICAgMCUge1xuLy8gICAgIGJhY2tncm91bmQtcG9zaXRpb246IDAlIDgyJTtcbi8vICAgfVxuXG4vLyAgIDUwJSB7XG4vLyAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogMTAwJSAxOSU7XG4vLyAgIH1cblxuLy8gICAxMDAlIHtcbi8vICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAwJSA4MiU7XG4vLyAgIH1cbi8vIH0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](BuyComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-buy',
                templateUrl: './buy.component.html',
                styleUrls: ['./buy.component.scss'],
                host: { '(document:click)': 'onClick($event)' },
            }]
    }], function () { return [{ type: src_app_service_buy_buy_service__WEBPACK_IMPORTED_MODULE_3__["BuyService"] }, { type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_4__["CookieService"] }]; }, { coinsGet: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: ['openFormGet']
        }], coinsSend: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: ['openFormSend']
        }] }); })();


/***/ }),

/***/ "./src/app/pages/buy/parameters.ts":
/*!*****************************************!*\
  !*** ./src/app/pages/buy/parameters.ts ***!
  \*****************************************/
/*! exports provided: coinsFormGet, coinsFormSend, coins */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "coinsFormGet", function() { return coinsFormGet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "coinsFormSend", function() { return coinsFormSend; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "coins", function() { return coins; });
const coinsFormGet = ['DUC', 'DUCX'];
const coinsFormSend = {
    DUC: ['DUCX', 'ETH', 'BTC'],
    DUCX: ['DUC'],
};
const coins = {
    DUC: { name: 'Ducatus', symbol: 'DUC', icon: 'duc', wait: '10 min', qrAmount: '?value=', decimal: 18 },
    DUCX: { name: 'DucatusX', symbol: 'DUCX', icon: 'duc', wait: '10 min', qrAmount: '?value=', decimal: 18 },
    ETH: { name: 'Ethereum', symbol: 'ETH', icon: 'eth', wait: '40 min', qrAmount: '?value=', decimal: 18 },
    BTC: { name: 'Bitcoin', symbol: 'BTC', icon: 'btc', wait: '60 min', qrAmount: '?amount=', decimal: 8 },
    USDC: { name: 'USDC', symbol: 'USDC', icon: 'usdc', wait: '10 min', qrAmount: '?value=', decimal: 18 },
};


/***/ }),

/***/ "./src/app/pages/contact/contact.component.ts":
/*!****************************************************!*\
  !*** ./src/app/pages/contact/contact.component.ts ***!
  \****************************************************/
/*! exports provided: ContactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactComponent", function() { return ContactComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _service_send_send_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../service/send/send.service */ "./src/app/service/send/send.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var ng2_tel_input__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng2-tel-input */ "./node_modules/ng2-tel-input/__ivy_ngcc__/esm2015/ng2-tel-input.js");
/* harmony import */ var ng_recaptcha__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-recaptcha */ "./node_modules/ng-recaptcha/__ivy_ngcc__/fesm2015/ng-recaptcha.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");








function ContactComponent_div_17_span_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "span", 31);
} }
const _c0 = function (a0) { return { "error-input": a0 }; };
function ContactComponent_div_17_Template(rf, ctx) { if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "input", 15, 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ContactComponent_div_17_Template_input_ngModelChange_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r10.formData.name = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "input", 18, 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ContactComponent_div_17_Template_input_ngModelChange_6_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r12.formData.tel = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "input", 21, 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ContactComponent_div_17_Template_input_ngModelChange_9_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11); const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r13.formData.email = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](11, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "textarea", 24, 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ContactComponent_div_17_Template_textarea_ngModelChange_13_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11); const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r14.formData.message = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](15, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "button", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](19, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "re-captcha", 28, 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ContactComponent_div_17_Template_re_captcha_ngModelChange_20_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11); const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r15.formModel.captcha = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, ContactComponent_div_17_span_22_Template, 1, 0, "span", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3);
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](7);
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](10);
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](14);
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](27, _c0, _r4.invalid && (_r4.dirty || _r4.touched)));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx_r1.disableFields)("ngModel", ctx_r1.formData.name)("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 19, "PAGE.CONTACT.FORM.TEXT_1"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](29, _c0, _r5.invalid && (_r5.dirty || _r5.touched)));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx_r1.disableFields)("ngModel", ctx_r1.formData.tel);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](31, _c0, _r6.invalid && (_r6.dirty || _r6.touched)));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx_r1.disableFields)("ngModel", ctx_r1.formData.email)("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](11, 21, "PAGE.CONTACT.FORM.TEXT_3"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](33, _c0, _r7.invalid && (_r7.dirty || _r7.touched)));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx_r1.disableFields)("ngModel", ctx_r1.formData.message)("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](15, 23, "PAGE.CONTACT.FORM.TEXT_4"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", _r0.invalid || ctx_r1.contactMainSend === 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](19, 25, "PAGE.CONTACT.FORM.BUTTON"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r1.formModel.captcha);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.contactMainSend === 3);
} }
function ContactComponent_div_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Thank you for your message!");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Our customer support will contact you shortly!");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ContactComponent_div_19_Template(rf, ctx) { if (rf & 1) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Something went wrong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "please try again");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ContactComponent_div_19_Template_span_click_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r17); const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r16.contactMainSend = 0; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "try again");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
const _c1 = function () { return [0, 3]; };
class ContactComponent {
    constructor(sendservice) {
        this.sendservice = sendservice;
        this.contactMainSend = 0;
        this.disableFields = false;
        this.formModel = {};
        this.formData = {
            name: '',
            tel: '',
            email: '',
            message: ''
        };
    }
    sendMail(form) {
        if (form.invalid) {
            return;
        }
        this.contactMainSend = 3;
        this.disableFields = true;
        this.sendservice.sendContactMessage(this.formData).then((result) => {
            this.contactMainSend = 1;
            this.disableFields = false;
        }).catch((err) => {
            console.log('Erorr', err);
            this.disableFields = false;
            this.contactMainSend = 2;
        });
    }
    ngOnInit() {
    }
}
ContactComponent.ɵfac = function ContactComponent_Factory(t) { return new (t || ContactComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_service_send_send_service__WEBPACK_IMPORTED_MODULE_1__["SendService"])); };
ContactComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ContactComponent, selectors: [["app-contact"]], decls: 21, vars: 13, consts: [[1, "section-header-page", 2, "background-image", "url(/assets/img/sections/contact-bg.png)"], [1, "container"], [1, "h1__title-page", 3, "innerHTML"], [1, "section-infoblock"], [1, "section-infoblock-double"], [1, "section-infoblock-block"], [1, "p__text-section", 3, "innerHTML"], ["href", "mailto:support@ducatus.net", 1, "a__link"], [1, "contact-form"], ["novalidate", "", "id", "contactform", 3, "submit"], ["contactForm", "ngForm"], ["class", "contact-form-fields", 4, "ngIf"], [1, "mb-130"], [1, "contact-form-fields"], [1, "contact-form-field-input", "icon", "icon__user", 3, "ngClass"], ["type", "text", "required", "", "name", "name", 1, "input", 3, "disabled", "ngModel", "placeholder", "ngModelChange"], ["name", "ngModel"], [1, "contact-form-field-input", 3, "ngClass"], ["type", "tel", "ng2TelInput", "", "id", "phone", "required", "", "name", "tel", "oninput", "this.value = this.value.replace(/[^0-9+]/g, '').replace(/(\\..*)\\./g, '$1');", 3, "disabled", "ngModel", "ngModelChange"], ["tel", "ngModel"], [1, "contact-form-field-input", "icon", "icon__email", 3, "ngClass"], ["type", "email", "pattern", "[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,63}$", "required", "", "name", "email", 1, "input", 3, "disabled", "ngModel", "placeholder", "ngModelChange"], ["email", "ngModel"], [1, "contact-form-field-textarea", "icon", "icon__message", 3, "ngClass"], ["type", "text", "required", "", "name", "message", 1, "textarea", 3, "disabled", "ngModel", "placeholder", "ngModelChange"], ["message", "ngModel"], [1, "contact-form-field"], ["type", "submit", 1, "button", "button__brown-red", "button-flat", 3, "disabled"], ["name", "captcha", "required", "", "siteKey", "6Ldw2sAZAAAAAAvBdORnt1ydyDzUR1S3y2QRojqu", 1, "contact-form-captcha", 3, "ngModel", "ngModelChange"], ["captchaControl", "ngModel"], ["class", "contact-form-loading icon__loading", 4, "ngIf"], [1, "contact-form-loading", "icon__loading"], [2, "text-align", "center"], [1, "cl-red", 2, "text-align", "center"], ["type", "submit", 1, "button", "button__brown-red", "button-flat", 3, "click"]], template: function ContactComponent_Template(rf, ctx) { if (rf & 1) {
        const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "h1", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "section", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "p", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](9, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "support@ducatus.net");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "form", 9, 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("submit", function ContactComponent_Template_form_submit_14_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r18); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](15); return ctx.sendMail(_r0); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](16, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, ContactComponent_div_17_Template, 23, 35, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, ContactComponent_div_18_Template, 6, 0, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, ContactComponent_div_19_Template, 9, 0, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "section", 12);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 6, "PAGE.CONTACT.TITLE"), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](9, 8, "PAGE.CONTACT.TEXT"), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-form-title", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](16, 10, "PAGE.CONTACT.FORM.TEXT"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](12, _c1).includes(ctx.contactMainSend));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.contactMainSend === 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.contactMainSend === 2);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgForm"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgClass"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"], ng2_tel_input__WEBPACK_IMPORTED_MODULE_4__["Ng2TelInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["PatternValidator"], ng_recaptcha__WEBPACK_IMPORTED_MODULE_5__["RecaptchaComponent"], ng_recaptcha__WEBPACK_IMPORTED_MODULE_5__["RecaptchaValueAccessorDirective"]], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslatePipe"]], styles: [".error-input[_ngcontent-%COMP%] {\n  border: 1px solid #ff2020;\n  border-radius: 5px;\n}\n\nbutton[disabled][_ngcontent-%COMP%] {\n  opacity: 0.5;\n}\n\n.contact-form[_ngcontent-%COMP%] {\n  position: relative;\n  overflow: hidden;\n}\n\n.contact-form-captcha[_ngcontent-%COMP%] {\n  justify-content: center;\n  align-items: center;\n  display: flex;\n  width: 100%;\n}\n\n.contact-form-loading[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background-color: #00000010;\n  top: 0;\n  left: 0;\n  z-index: 9;\n}\n\n.contact-form-loading[_ngcontent-%COMP%]:before {\n  background-size: 90px;\n  background-position: center;\n  background-color: #0000006e;\n  border-radius: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9nbGViL3Byb2plY3RzL2R1Y2F0dXMtc2l0ZS9zcmMvYXBwL3BhZ2VzL2NvbnRhY3QvY29udGFjdC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcGFnZXMvY29udGFjdC9jb250YWN0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0kseUJBQUE7RUFDQSxrQkFBQTtBQ0NKOztBREVBO0VBQ0ksWUFBQTtBQ0NKOztBREdJO0VBQ0ksa0JBQUE7RUFDQSxnQkFBQTtBQ0FSOztBREVRO0VBQ0ksdUJBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7RUFDQSxXQUFBO0FDQVo7O0FER1E7RUFDSSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSwyQkFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsVUFBQTtBQ0RaOztBREdZO0VBQ0kscUJBQUE7RUFDQSwyQkFBQTtFQUNBLDJCQUFBO0VBQ0EsbUJBQUE7QUNEaEIiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9jb250YWN0L2NvbnRhY3QuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZXJyb3ItaW5wdXQge1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNmZjIwMjA7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xufVxuXG5idXR0b25bZGlzYWJsZWRdIHtcbiAgICBvcGFjaXR5OiAwLjU7XG59XG5cbi5jb250YWN0IHtcbiAgICAmLWZvcm0ge1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG5cbiAgICAgICAgJi1jYXB0Y2hhIHtcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgfVxuXG4gICAgICAgICYtbG9hZGluZyB7XG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwMDAwMTA7XG4gICAgICAgICAgICB0b3A6IDA7XG4gICAgICAgICAgICBsZWZ0OiAwO1xuICAgICAgICAgICAgei1pbmRleDogOTtcblxuICAgICAgICAgICAgJjpiZWZvcmUge1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtc2l6ZTogOTBweDtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDAwMDZlO1xuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59IiwiLmVycm9yLWlucHV0IHtcbiAgYm9yZGVyOiAxcHggc29saWQgI2ZmMjAyMDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xufVxuXG5idXR0b25bZGlzYWJsZWRdIHtcbiAgb3BhY2l0eTogMC41O1xufVxuXG4uY29udGFjdC1mb3JtIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuLmNvbnRhY3QtZm9ybS1jYXB0Y2hhIHtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHdpZHRoOiAxMDAlO1xufVxuLmNvbnRhY3QtZm9ybS1sb2FkaW5nIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDAwMDEwO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHotaW5kZXg6IDk7XG59XG4uY29udGFjdC1mb3JtLWxvYWRpbmc6YmVmb3JlIHtcbiAgYmFja2dyb3VuZC1zaXplOiA5MHB4O1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDAwMDA2ZTtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ContactComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-contact',
                templateUrl: './contact.component.html',
                styleUrls: ['./contact.component.scss']
            }]
    }], function () { return [{ type: _service_send_send_service__WEBPACK_IMPORTED_MODULE_1__["SendService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/pages/ducatusx/ducatusx/ducatusx.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/pages/ducatusx/ducatusx/ducatusx.component.ts ***!
  \***************************************************************/
/*! exports provided: DucatusxComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DucatusxComponent", function() { return DucatusxComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");



class DucatusxComponent {
    constructor() { }
    ngOnInit() {
    }
}
DucatusxComponent.ɵfac = function DucatusxComponent_Factory(t) { return new (t || DucatusxComponent)(); };
DucatusxComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DucatusxComponent, selectors: [["app-ducatusx"]], decls: 189, vars: 165, consts: [[1, "section-header-page", 2, "background-image", "url(/assets/img/sections/about-ducatusx-bg.png)"], [1, "container"], [1, "h1__title-page", 3, "innerHTML"], [1, "section-text-second", "ducatusx-section"], [1, "section-text-second-block"], [1, "h2__title-section", 3, "innerHTML"], [1, "span__line-section"], [1, "p__text-section", 3, "innerHTML"], [1, "section-text-second-block-img", 2, "background-image", "url(/assets/img/sections/about-ducx-img.png)"], [1, "section-infoblock", "ducatusx-section"], [1, "section-infoblock-text"], [1, "section-infoblock-items"], [1, "section-infoblock-item-1-4"], [1, "section-infoblock-item-1-4-info"], [1, "icon", "icon__community-ducx"], [1, "icon", "icon__trusted-ducx"], [3, "innerHTML"], [1, "icon", "icon__coin-ducx"], [1, "icon", "icon__money-ducx"], [1, "section-infoblock", "section-infoblock-filled", "ducatusx-section"], [1, "section-infoblock-grid-double"], [1, "section-infoblock-grid-double-item"], [1, "section-infoblock-grid-double-item-title", 3, "innerHTML"], [1, "section-infoblock-grid-double-item-text", 3, "innerHTML"], [1, "section-app-list"], ["href", "https://wallet.ducatus.io/", "target", "_blank", 1, "download_ducatus"], ["href", "https://play.google.com/store/apps/details?id=io.ducatus.walnew", "target", "_blank", 1, "download_googleplay"], ["href", "https://apps.apple.com/us/app/ducatus-wallet-2-0-1/id1489722627?ign-mpt=uo%3D2", "target", "_blank", 1, "download_appstore"], [1, "block-video"], ["src", "https://www.youtube.com/embed/WWtObEFdrhc", "frameborder", "0", "allow", "accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture", "allowfullscreen", ""], [1, "section-infoblock-grid-double-nb"], [1, "section-infoblock-grid-double-nb-item"], [1, "section-infoblock-grid-double-nb-item-title", "icon", "icon__coin-dollar-ducx"], [1, "section-infoblock-grid-double-nb-item-text", 3, "innerHTML"], [1, "section-infoblock-grid-double-nb-item-title", "icon", "icon__snow-ducx"], [1, "section-infoblock-grid-double-nb-item-title", "icon", "icon__double-money-ducx"], [1, "section-infoblock-grid-double-nb-item-title", "icon", "icon__cash-ducx"], ["src", "https://www.youtube.com/embed/JjCssl-26OU", "frameborder", "0", "allow", "accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture", "allowfullscreen", ""], [1, "section-infoblock-grid-double-nb-item-title", "icon", "icon__hand-coin-ducx"], [1, "section-infoblock-grid-double-nb-item-title", "icon", "icon__circles-ducx"], [1, "section-infoblock-grid-double-nb-item-title", "icon", "icon__calendar-2-ducx"], [1, "section-infoblock-grid-double-nb-item-title", "icon", "icon__calendar-ducx"], [1, "section-infoblock-grid-double-nb-item-title", "icon", "icon__hand-dollar-ducx"], [1, "section-infoblock-grid-double-nb-item-title", "icon", "icon__gift-ducx"], [1, "section-infoblock-grid-double-nb-item-title", "icon", "icon__shield-ducx"], [1, "section-infoblock-grid-double-nb-item-title", "icon", "icon__hand-cash-ducx"], [1, "section-infoblock", "ducatusx-section", "mt-80"], [1, "section-infoblock-items-table"], [1, "section-infoblock-item-cell"], [1, "section-infoblock-item-cell-info", 3, "innerHTML"], [1, "section-infoblock-item-cell", "section-infoblock-item-cell-title"], [1, "mb-130"]], template: function DucatusxComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "h1", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "section", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](8, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "p", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](11, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "section", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](18, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "span", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](26, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "span", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "b", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](31, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "span", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "b", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](36, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "span", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "b", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](41, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "section", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](45, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](46, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](47, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](50, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](51, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](52, "p", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](53, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](55, "a", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](56, "a", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](57, "a", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](59, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](60, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](61, "p", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](62, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](65, "iframe", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](66, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](67, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](68, "p", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](69, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](72, "span", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](73, "p", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](74, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](76, "span", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](77, "p", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](78, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](80, "span", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](81, "p", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](82, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](84, "span", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](85, "p", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](86, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](89, "iframe", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](90, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](91, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](92, "p", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](93, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](96, "span", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](97, "p", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](98, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](100, "span", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](101, "p", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](102, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](104, "span", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](105, "p", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](106, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](108, "span", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](109, "p", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](110, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](112, "span", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](113, "p", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](114, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](115, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](116, "span", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](117, "p", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](118, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](119, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](120, "span", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](121, "p", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](122, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](123, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](124, "span", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](125, "p", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](126, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](127, "section", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](128, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](129, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](130, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](131, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](132, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](133, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](134, "div", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](135, "div", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](136, "div", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](137, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](138, "div", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](139, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](140, "div", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](141, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](142, "div", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](143, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](144, "div", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](145, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](146, "div", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](147, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](148, "div", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](149, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](150, "div", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](151, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](152, "div", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](153, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](154, "div", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](155, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](156, "div", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](157, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](158, "div", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](159, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](160, "div", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](161, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](162, "div", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](163, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](164, "div", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](165, "div", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](166, "div", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](167, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](168, "div", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](169, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](170, "div", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](171, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](172, "div", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](173, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](174, "div", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](175, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](176, "div", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](177, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](178, "div", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](179, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](180, "div", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](181, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](182, "div", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](183, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](184, "div", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](185, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](186, "div", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](187, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](188, "section", 51);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 55, "PAGE.DUCATUSX.TITLE"), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](8, 57, "PAGE.DUCATUSX.CONTENT.TITLE"), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](11, 59, "PAGE.DUCATUSX.CONTENT.TEXT"), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](18, 61, "PAGE.DUCATUSX.BLOCK_1.TITLE"), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](26, 63, "PAGE.DUCATUSX.BLOCK_1.TEXT"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](31, 65, "PAGE.DUCATUSX.BLOCK_1.TEXT_1"), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](36, 67, "PAGE.DUCATUSX.BLOCK_1.TEXT_2"), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](41, 69, "PAGE.DUCATUSX.BLOCK_1.TEXT_3"), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](46, 71, "PAGE.DUCATUSX.BLOCK_2.TEXT"), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](51, 73, "PAGE.DUCATUSX.BLOCK_2.TEXT_1"), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](53, 75, "PAGE.DUCATUSX.BLOCK_2.TEXT_2"), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](60, 77, "PAGE.DUCATUSX.BLOCK_2.TEXT_3"), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](62, 79, "PAGE.DUCATUSX.BLOCK_2.TEXT_4"), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](67, 81, "PAGE.DUCATUSX.BLOCK_2.TEXT_5"), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](69, 83, "PAGE.DUCATUSX.BLOCK_2.TEXT_6"), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](74, 85, "PAGE.DUCATUSX.BLOCK_2.TEXT_7"), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](78, 87, "PAGE.DUCATUSX.BLOCK_2.TEXT_8"), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](82, 89, "PAGE.DUCATUSX.BLOCK_2.TEXT_9"), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](86, 91, "PAGE.DUCATUSX.BLOCK_2.TEXT_10"), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](91, 93, "PAGE.DUCATUSX.BLOCK_2.TEXT_11"), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](93, 95, "PAGE.DUCATUSX.BLOCK_2.TEXT_12"), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](98, 97, "PAGE.DUCATUSX.BLOCK_2.TEXT_13"), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](102, 99, "PAGE.DUCATUSX.BLOCK_2.TEXT_14"), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](106, 101, "PAGE.DUCATUSX.BLOCK_2.TEXT_15"), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](110, 103, "PAGE.DUCATUSX.BLOCK_2.TEXT_16"), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](114, 105, "PAGE.DUCATUSX.BLOCK_2.TEXT_17"), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](118, 107, "PAGE.DUCATUSX.BLOCK_2.TEXT_18"), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](122, 109, "PAGE.DUCATUSX.BLOCK_2.TEXT_19"), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](126, 111, "PAGE.DUCATUSX.BLOCK_2.TEXT_20"), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](131, 113, "PAGE.DUCATUSX.BLOCK_3.TITLE"), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](137, 115, "PAGE.DUCATUSX.BLOCK_3.TEXT_1"), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](139, 117, "PAGE.DUCATUSX.BLOCK_3.TEXT_2"), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-title", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](141, 119, "PAGE.DUCATUSX.BLOCK_3.TABLE_TITLE_1"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](143, 121, "PAGE.DUCATUSX.BLOCK_3.TEXT_3"), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](145, 123, "PAGE.DUCATUSX.BLOCK_3.TEXT_4"), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-title", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](147, 125, "PAGE.DUCATUSX.BLOCK_3.TABLE_TITLE_2"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](149, 127, "PAGE.DUCATUSX.BLOCK_3.TEXT_5"), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](151, 129, "PAGE.DUCATUSX.BLOCK_3.TEXT_6"), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-title", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](153, 131, "PAGE.DUCATUSX.BLOCK_3.TABLE_TITLE_3"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](155, 133, "PAGE.DUCATUSX.BLOCK_3.TEXT_7"), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](157, 135, "PAGE.DUCATUSX.BLOCK_3.TEXT_8"), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-title", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](159, 137, "PAGE.DUCATUSX.BLOCK_3.TABLE_TITLE_4"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](161, 139, "PAGE.DUCATUSX.BLOCK_3.TEXT_9"), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](163, 141, "PAGE.DUCATUSX.BLOCK_3.TEXT_10"), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](167, 143, "PAGE.DUCATUSX.BLOCK_3.TEXT_11"), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](169, 145, "PAGE.DUCATUSX.BLOCK_3.TEXT_12"), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-title", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](171, 147, "PAGE.DUCATUSX.BLOCK_3.TABLE_TITLE_5"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](173, 149, "PAGE.DUCATUSX.BLOCK_3.TEXT_13"), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](175, 151, "PAGE.DUCATUSX.BLOCK_3.TEXT_14"), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-title", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](177, 153, "PAGE.DUCATUSX.BLOCK_3.TABLE_TITLE_6"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](179, 155, "PAGE.DUCATUSX.BLOCK_3.TEXT_15"), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](181, 157, "PAGE.DUCATUSX.BLOCK_3.TEXT_16"), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-title", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](183, 159, "PAGE.DUCATUSX.BLOCK_3.TABLE_TITLE_7"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](185, 161, "PAGE.DUCATUSX.BLOCK_3.TEXT_17"), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](187, 163, "PAGE.DUCATUSX.BLOCK_3.TEXT_18"), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
    } }, pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslatePipe"]], styles: ["@import url(\"https://fonts.googleapis.com/css?family=Montserrat:100,100i,200,200i,300,300i,400,400i,500,500i,600,600i,700,700i,800,800i,900,900i&display=swap\");\n.clearfix[_ngcontent-%COMP%]:after {\n  content: \"\";\n  display: table;\n  clear: both;\n}\n.centered[_ngcontent-%COMP%] {\n  display: table;\n  width: 100%;\n  height: 100%;\n}\n.centered[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\n  display: table-cell;\n  text-align: center;\n  vertical-align: middle;\n}\n\n.section-infoblock-grid-double-item[_ngcontent-%COMP%]   .section-app-list[_ngcontent-%COMP%] {\n  margin-top: 10px;\n  max-width: 400px;\n  width: 100%;\n}\n.section-infoblock-grid-double-item[_ngcontent-%COMP%]   .section-app-list[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  margin-right: 15px;\n}\n.ducatusx-section[_ngcontent-%COMP%]   .section-text-second-block-img[_ngcontent-%COMP%] {\n  background-size: contain;\n}\n@media (max-width: 750px) {\n  .ducatusx-section[_ngcontent-%COMP%]   .section-text-second-block-img[_ngcontent-%COMP%] {\n    margin-bottom: 20px;\n  }\n}\n.ducatusx-section[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #892734;\n  font-weight: bold;\n}\n.ducatusx-section.section-infoblock[_ngcontent-%COMP%] {\n  padding-top: 20px;\n}\n.ducatusx-section[_ngcontent-%COMP%]   .section-infoblock-grid-double-nb[_ngcontent-%COMP%] {\n  margin-top: 50px;\n}\n.ducatusx-section.mt-80[_ngcontent-%COMP%] {\n  margin-top: 80px;\n}\n.ducatusx-section[_ngcontent-%COMP%]   .block-video[_ngcontent-%COMP%] {\n  position: relative;\n  padding-bottom: 42%;\n  padding-top: 30px;\n  height: 0;\n  overflow: hidden;\n  margin-bottom: 50px;\n}\n.ducatusx-section[_ngcontent-%COMP%]   .block-video[_ngcontent-%COMP%]   iframe[_ngcontent-%COMP%], .ducatusx-section[_ngcontent-%COMP%]   .block-video[_ngcontent-%COMP%]   embed[_ngcontent-%COMP%], .ducatusx-section[_ngcontent-%COMP%]   .block-video[_ngcontent-%COMP%]   object[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n}\n.ducatusx-section[_ngcontent-%COMP%]   .section-infoblock-items[_ngcontent-%COMP%] {\n  margin-top: 10px;\n}\n.ducatusx-section[_ngcontent-%COMP%]   .section-infoblock-items-table[_ngcontent-%COMP%]:nth-child(1) {\n  padding-right: 50px;\n}\n@media (max-width: 1024px) {\n  .ducatusx-section[_ngcontent-%COMP%]   .section-infoblock-items-table[_ngcontent-%COMP%]:nth-child(1) {\n    padding-right: 20px;\n  }\n}\n@media (max-width: 750px) {\n  .ducatusx-section[_ngcontent-%COMP%]   .section-infoblock-items-table[_ngcontent-%COMP%]:nth-child(1) {\n    padding-right: 0px;\n  }\n}\n.ducatusx-section[_ngcontent-%COMP%]   .section-infoblock-items-table[_ngcontent-%COMP%]:nth-child(2) {\n  padding-left: 50px;\n}\n@media (max-width: 1024px) {\n  .ducatusx-section[_ngcontent-%COMP%]   .section-infoblock-items-table[_ngcontent-%COMP%]:nth-child(2) {\n    padding-left: 20px;\n  }\n}\n@media (max-width: 750px) {\n  .ducatusx-section[_ngcontent-%COMP%]   .section-infoblock-items-table[_ngcontent-%COMP%]:nth-child(2) {\n    padding-left: 0px;\n  }\n}\n.ducatusx-section[_ngcontent-%COMP%]   .section-infoblock-items-table[_ngcontent-%COMP%]   .section-infoblock-item-cell[_ngcontent-%COMP%] {\n  display: flex;\n  min-height: 60px;\n  position: relative;\n}\n.ducatusx-section[_ngcontent-%COMP%]   .section-infoblock-items-table[_ngcontent-%COMP%]   .section-infoblock-item-cell.section-infoblock-item-cell-title[_ngcontent-%COMP%] {\n  padding-top: 40px;\n}\n.ducatusx-section[_ngcontent-%COMP%]   .section-infoblock-items-table[_ngcontent-%COMP%]   .section-infoblock-item-cell.section-infoblock-item-cell-title[_ngcontent-%COMP%]:before {\n  content: attr(data-title);\n  width: 100%;\n  position: absolute;\n  background-color: #f0eae2;\n  text-align: center;\n  padding: 10px;\n  font-weight: bold;\n  color: #882425;\n  top: 0;\n}\n.ducatusx-section[_ngcontent-%COMP%]   .section-infoblock-items-table[_ngcontent-%COMP%]   .section-infoblock-item-cell-info[_ngcontent-%COMP%] {\n  width: 50%;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  padding: 20px 20px;\n}\n.ducatusx-section[_ngcontent-%COMP%]   .section-infoblock-items-table[_ngcontent-%COMP%]   .section-infoblock-item-cell-info[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 5px 0;\n  font-size: 17px;\n  line-height: 25px;\n}\n.ducatusx-section[_ngcontent-%COMP%]   .section-infoblock-items-table[_ngcontent-%COMP%]   .section-infoblock-item-cell-info[_ngcontent-%COMP%]:nth-child(1) {\n  border-right: 1px solid #e4e4e4;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9nbGViL3Byb2plY3RzL2R1Y2F0dXMtc2l0ZS9zcmMvc2Nzcy9fdmFycy5zY3NzIiwiL1VzZXJzL2dsZWIvcHJvamVjdHMvZHVjYXR1cy1zaXRlL3NyYy9zY3NzL19taXhpbnMuc2NzcyIsInNyYy9hcHAvcGFnZXMvZHVjYXR1c3gvZHVjYXR1c3gvZHVjYXR1c3guY29tcG9uZW50LnNjc3MiLCIvVXNlcnMvZ2xlYi9wcm9qZWN0cy9kdWNhdHVzLXNpdGUvc3JjL2FwcC9wYWdlcy9kdWNhdHVzeC9kdWNhdHVzeC9kdWNhdHVzeC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFJUSwrSkFBQTtBQzJCUjtFQUNDLFdBQUE7RUFDQSxjQUFBO0VBQ0EsV0FBQTtBQzdCRDtBRGdDQTtFQUNDLGNBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQzdCRDtBRCtCQztFQUNDLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxzQkFBQTtBQzdCRjtBRHlNQTs7O0dBQUE7QUVyTkk7RUFDSSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtBRG1CUjtBQ2pCUTtFQUNJLGtCQUFBO0FEbUJaO0FDWkk7RUFDSSx3QkFBQTtBRGVSO0FENkhFO0VFN0lFO0lBSVEsbUJBQUE7RURnQlY7QUFDRjtBQ2JJO0VBQ0ksY0FBQTtFQUNBLGlCQUFBO0FEZVI7QUNaSTtFQUNJLGlCQUFBO0FEY1I7QUNYSTtFQUNJLGdCQUFBO0FEYVI7QUNWSTtFQUNJLGdCQUFBO0FEWVI7QUNUSTtFQUNJLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLFNBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FEV1I7QUNUUTs7O0VBR0ksa0JBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FEV1o7QUNQSTtFQUNJLGdCQUFBO0FEU1I7QUNMUTtFQUNJLG1CQUFBO0FET1o7QURvRkU7RUU1Rk07SUFJUSxtQkFBQTtFRFFkO0FBQ0Y7QUQrRUU7RUU1Rk07SUFRUSxrQkFBQTtFRFNkO0FBQ0Y7QUNOUTtFQUNJLGtCQUFBO0FEUVo7QUR1RUU7RUVoRk07SUFJUSxrQkFBQTtFRFNkO0FBQ0Y7QURrRUU7RUVoRk07SUFRUSxpQkFBQTtFRFVkO0FBQ0Y7QUNQUTtFQUNJLGFBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FEU1o7QUNQWTtFQUNJLGlCQUFBO0FEU2hCO0FDUGdCO0VBQ0kseUJBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLE1BQUE7QURTcEI7QUNMWTtFQUNJLFVBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtFQUNBLGtCQUFBO0FET2hCO0FDTGdCO0VBQ0ksYUFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtBRE9wQjtBQ0pnQjtFQUNJLCtCQUFBO0FETXBCIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvZHVjYXR1c3gvZHVjYXR1c3gvZHVjYXR1c3guY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIG1haW4gdmFyaWFibGVzXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1Nb250c2VycmF0OjEwMCwxMDBpLDIwMCwyMDBpLDMwMCwzMDBpLDQwMCw0MDBpLDUwMCw1MDBpLDYwMCw2MDBpLDcwMCw3MDBpLDgwMCw4MDBpLDkwMCw5MDBpJmRpc3BsYXk9c3dhcCcpO1xuXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIGFkZGl0aW9uYWwgdmFyaWFibGVzXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIGNvbG9yc1xuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbiRibGFjazogIzAwMDtcbiRncmF5OiAjODA4MDgwO1xuJHdoaXRlOiAjZmZmO1xuJGJsdWU6ICMwMEY7XG4kcHVycGxlOiAjOEE0RDc2O1xuJHBpbms6ICNGQTdDOTE7XG4kYnJvd246ICM3NTc3NjM7XG4kYmVpZ2UtbGlnaHQ6ICNEMEQxQ0Q7XG4kYmVpZ2UtbGlnaHRlci0xOiAjRUZGMEVCO1xuJGJlaWdlLWxpZ2h0ZXItMjogI0Y0RjRGNDtcblxuJGJyb3duLXJlZDogIzg5MjczNDtcbiRnb2xkLXllbGxvdzogI0U4QzIyQztcbiRkYXJrLWdyZXk6ICMyMzI0MWY7XG4kZ3JleTogIzRkNGM0ZDtcbiRnb2xkOiAjRDNDMTk4O1xuJGdvbGQtMjogI0YwRUFFMztcbiIsIi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gbWFpbiBtaXhpbnNcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG5AbWl4aW4gZm9udC1mYWNlKCRmb250LWZhbWlseSwgJGZpbGUtcGF0aCwgJHdlaWdodDogbm9ybWFsLCAkc3R5bGU6IG5vcm1hbCwgJGFzc2V0LXBpcGVsaW5lOiBmYWxzZSkge1xuXHRAZm9udC1mYWNlIHtcblx0XHRmb250LWZhbWlseTogJGZvbnQtZmFtaWx5O1xuXHRcdGZvbnQtd2VpZ2h0OiAkd2VpZ2h0O1xuXHRcdGZvbnQtc3R5bGU6ICRzdHlsZTtcblxuXHRcdEBpZiAkYXNzZXQtcGlwZWxpbmU9PXRydWUge1xuXHRcdFx0c3JjOiBmb250LXVybCgnI3skZmlsZS1wYXRofS5lb3QnKTtcblx0XHRcdHNyYzogZm9udC11cmwoJyN7JGZpbGUtcGF0aH0uZW90PyNpZWZpeCcpIGZvcm1hdCgnZW1iZWRkZWQtb3BlbnR5cGUnKSxcblx0XHRcdGZvbnQtdXJsKCcjeyRmaWxlLXBhdGh9LndvZmYnKSBmb3JtYXQoJ3dvZmYnKSxcblx0XHRcdGZvbnQtdXJsKCcjeyRmaWxlLXBhdGh9LnR0ZicpIGZvcm1hdCgndHJ1ZXR5cGUnKTtcblx0XHR9XG5cblx0XHRAZWxzZSB7XG5cdFx0XHRzcmM6IHVybCgnI3skZmlsZS1wYXRofS5lb3QnKTtcblx0XHRcdHNyYzogdXJsKCcjeyRmaWxlLXBhdGh9LmVvdD8jaWVmaXgnKSBmb3JtYXQoJ2VtYmVkZGVkLW9wZW50eXBlJyksXG5cdFx0XHR1cmwoJyN7JGZpbGUtcGF0aH0ud29mZicpIGZvcm1hdCgnd29mZicpLFxuXHRcdFx0dXJsKCcjeyRmaWxlLXBhdGh9LnR0ZicpIGZvcm1hdCgndHJ1ZXR5cGUnKTtcblx0XHR9XG5cdH1cbn1cblxuQG1peGluIG5vdGV4dCB7XG5cdG92ZXJmbG93OiBoaWRkZW47XG5cdHRleHQtaW5kZW50OiAtOTk5OXB4O1xufVxuXG4uY2xlYXJmaXg6YWZ0ZXIge1xuXHRjb250ZW50OiBcIlwiO1xuXHRkaXNwbGF5OiB0YWJsZTtcblx0Y2xlYXI6IGJvdGg7XG59XG5cbi5jZW50ZXJlZCB7XG5cdGRpc3BsYXk6IHRhYmxlO1xuXHR3aWR0aDogMTAwJTtcblx0aGVpZ2h0OiAxMDAlO1xuXG5cdD4qIHtcblx0XHRkaXNwbGF5OiB0YWJsZS1jZWxsO1xuXHRcdHRleHQtYWxpZ246IGNlbnRlcjtcblx0XHR2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuXHR9XG59XG5cbkBtaXhpbiBwbGFjZWhvbGRlckNvbG9yKCRpbnB1dC10ZXh0LWNvbG9yKSB7XG5cdCY6Oi13ZWJraXQtaW5wdXQtcGxhY2Vob2xkZXIge1xuXHRcdGNvbG9yOiAkaW5wdXQtdGV4dC1jb2xvcjtcblx0fVxuXG5cdCY6LW1vei1wbGFjZWhvbGRlciB7XG5cdFx0Y29sb3I6ICRpbnB1dC10ZXh0LWNvbG9yO1xuXHRcdG9wYWNpdHk6IDE7XG5cdH1cblxuXHQmOjotbW96LXBsYWNlaG9sZGVyIHtcblx0XHRjb2xvcjogJGlucHV0LXRleHQtY29sb3I7XG5cdFx0b3BhY2l0eTogMTtcblx0fVxuXG5cdCY6LW1zLWlucHV0LXBsYWNlaG9sZGVyIHtcblx0XHRjb2xvcjogJGlucHV0LXRleHQtY29sb3I7XG5cdH1cblxuXHQmOjpwbGFjZWhvbGRlciB7XG5cdFx0Y29sb3I6ICRpbnB1dC10ZXh0LWNvbG9yO1xuXHRcdG9wYWNpdHk6IDE7XG5cdH1cblxuXHQmOmZvY3VzOi1tb3otcGxhY2Vob2xkZXIge1xuXHRcdGNvbG9yOiB0cmFuc3BhcmVudDtcblx0XHRvcGFjaXR5OiAxO1xuXHR9XG5cblx0Jjpmb2N1czo6LW1vei1wbGFjZWhvbGRlciB7XG5cdFx0Y29sb3I6IHRyYW5zcGFyZW50O1xuXHRcdG9wYWNpdHk6IDE7XG5cdH1cblxuXHQmOmZvY3VzOjotd2Via2l0LWlucHV0LXBsYWNlaG9sZGVyIHtcblx0XHRjb2xvcjogdHJhbnNwYXJlbnQ7XG5cdH1cblxuXHQmOmZvY3VzOi1tcy1pbnB1dC1wbGFjZWhvbGRlciB7XG5cdFx0Y29sb3I6IHRyYW5zcGFyZW50O1xuXHR9XG5cblx0Jjpmb2N1czo6cGxhY2Vob2xkZXIge1xuXHRcdGNvbG9yOiB0cmFuc3BhcmVudDtcblx0fVxufVxuXG5AbWl4aW4gY2xlYXJmaXgge1xuXHQmOmFmdGVyIHtcblx0XHRjb250ZW50OiBcIiBcIjtcblx0XHRkaXNwbGF5OiBibG9jaztcblx0XHRjbGVhcjogYm90aDtcblx0fVxufVxuXG4vLyBjbGVhciBzZWxlY3Qgd2l0aG91dCBkZWZhdWx0IGJ1dHRvblxuQG1peGluIGNsZWFyU2VsZWN0IHtcblx0LXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xuXHQtbW96LWFwcGVhcmFuY2U6IG5vbmU7XG5cdGFwcGVhcmFuY2U6IG5vbmU7XG5cdC13ZWJraXQtYm9yZGVyLXJhZGl1czogMDtcblx0LW1vei1ib3JkZXItcmFkaXVzOiAwO1xuXHRib3JkZXItcmFkaXVzOiAwO1xufVxuXG4vLyBlbGVtZW50cyBnZXQgYXBwZW5kZWQgd2l0aCBcIl9fXCIgYW5kIHRoZSAkbmFtZVxuQG1peGluIGUoJG5hbWUpIHtcblx0QGF0LXJvb3QgI3smfV8jeyRuYW1lfSB7XG5cdFx0QGNvbnRlbnQ7XG5cdH1cbn1cblxuLy8gbW9kaWZpZXJzIGdldCBhcHBlbmRlZCB3aXRoIFwiLS1cIiBhbmQgdGhlICRuYW1lXG5AbWl4aW4gbSgkbmFtZSkge1xuXHRAYXQtcm9vdCAjeyZ9LS0jeyRuYW1lfSB7XG5cdFx0QGNvbnRlbnQ7XG5cdH1cbn1cblxuLy8gYnJlYWtwb2ludHNcbkBtaXhpbiBiKCRwb2ludCkge1xuXHRAaWYgJHBvaW50PT1kZXNrdG9wIHtcblx0XHRAbWVkaWEgKG1heC13aWR0aDogMTM2NnB4KSBhbmQgKG1pbi13aWR0aDoxMDI0cHgpIHtcblx0XHRcdEBjb250ZW50IDtcblx0XHR9XG5cdH1cblxuXHRAZWxzZSBpZiAkcG9pbnQ9PXRhYmxldCB7XG5cdFx0QG1lZGlhIChtYXgtd2lkdGg6IDEwMDBweCkge1xuXHRcdFx0QGNvbnRlbnQgO1xuXHRcdH1cblx0fVxuXG5cdEBlbHNlIGlmICRwb2ludD09bW9iaWxlIHtcblx0XHRAbWVkaWEgKG1heC13aWR0aDogNzY3cHgpIHtcblx0XHRcdEBjb250ZW50IDtcblx0XHR9XG5cdH1cblxuXHRAZWxzZSBpZiAkcG9pbnQ9PW1vYmlsZTN4IHtcblxuXHRcdEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKC13ZWJraXQtbWluLWRldmljZS1waXhlbC1yYXRpbzogMyksXG5cdFx0b25seSBzY3JlZW4gYW5kIChtaW4tcmVzb2x1dGlvbjogM2RwcHgpLFxuXHRcdG9ubHkgc2NyZWVuIGFuZCAobWluLXJlc29sdXRpb246IDM1MGRwaSkge1xuXHRcdFx0QGNvbnRlbnQgO1xuXHRcdH1cblx0fVxuXG5cdEBlbHNlIHtcblx0XHRAbWVkaWEgKG1heC13aWR0aDogJHBvaW50ICsgJ3B4Jykge1xuXHRcdFx0QGNvbnRlbnQgO1xuXHRcdH1cblx0fVxufVxuXG4vLyBicmVha3BvaW50c1xuQG1peGluIGJiKCRwb2ludE1heCwgJHBvaW50TWluKSB7XG5cdEBtZWRpYSAobWF4LXdpZHRoOiAkcG9pbnRNYXggKyAncHgnKSBhbmQgKG1pbi13aWR0aDogJHBvaW50TWluICsgJ3B4Jykge1xuXHRcdEBjb250ZW50IDtcblx0fVxufVxuXG5AbWl4aW4gaWUoKSB7XG5cblx0QG1lZGlhIHNjcmVlbiBhbmQgKC1tcy1oaWdoLWNvbnRyYXN0OiBhY3RpdmUpLFxuXHQoLW1zLWhpZ2gtY29udHJhc3Q6IG5vbmUpIHtcblx0XHRAY29udGVudCA7XG5cdH1cbn1cblxuQG1peGluIGJlZm9yZS1pbWcoJGRpc3BsYXksICR3aWR0aCwgJGhlaWdodCwgJHBvc2l0aW9uKSB7XG5cdEBhdC1yb290ICN7Jn06YmVmb3JlIHtcblx0XHRjb250ZW50OiAnJztcblx0XHRkaXNwbGF5OiAkZGlzcGxheTtcblxuXHRcdEBpZiAkcG9zaXRpb249PWEge1xuXHRcdFx0cG9zaXRpb246IGFic29sdXRlO1xuXHRcdH1cblxuXHRcdEBpZiAkcG9zaXRpb249PXIge1xuXHRcdFx0cG9zaXRpb246IHJlbGF0aXZlO1xuXHRcdH1cblxuXHRcdHdpZHRoOiAkd2lkdGg7XG5cdFx0aGVpZ2h0OiAkaGVpZ2h0O1xuXHRcdEBjb250ZW50O1xuXHR9XG59XG5cbkBtaXhpbiBhZnRlci1pbWcoJGRpc3BsYXksICR3aWR0aCwgJGhlaWdodCwgJHBvc2l0aW9uKSB7XG5cdEBhdC1yb290ICN7Jn06YWZ0ZXIge1xuXHRcdGNvbnRlbnQ6ICcnO1xuXHRcdGRpc3BsYXk6ICRkaXNwbGF5O1xuXG5cdFx0QGlmICRwb3NpdGlvbj09YSB7XG5cdFx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XG5cdFx0fVxuXG5cdFx0QGlmICRwb3NpdGlvbj09ciB7XG5cdFx0XHRwb3NpdGlvbjogcmVsYXRpdmU7XG5cdFx0fVxuXG5cdFx0d2lkdGg6ICR3aWR0aDtcblx0XHRoZWlnaHQ6ICRoZWlnaHQ7XG5cdFx0QGNvbnRlbnQ7XG5cdH1cbn1cblxuLyogcmVtIGZvbnQgc2l6ZSB3aXRoIGZhbGxiYWNrIHwgdXNhZ2U6XG5cdHAge1xuXHRcdEBpbmNsdWRlIGZvbnQtc2l6ZSgxNHB4KVxuXHR9Ki9cblxuQGZ1bmN0aW9uIGNhbGN1bGF0ZVJlbSgkc2l6ZSkge1xuXHQkcmVtU2l6ZTogJHNpemUgLyAxNnB4O1xuXHRAcmV0dXJuICRyZW1TaXplICogMXJlbTtcbn1cblxuQG1peGluIGZvbnQtc2l6ZSgkc2l6ZSkge1xuXHRmb250LXNpemU6ICRzaXplO1xuXHRmb250LXNpemU6IGNhbGN1bGF0ZVJlbSgkc2l6ZSk7XG59XG5cbkBtaXhpbiB0ZXh0Q3V0KCRjb2wsICRoZWlnaHQpIHtcblx0ZGlzcGxheTogLXdlYmtpdC1ib3g7XG5cdC13ZWJraXQtbGluZS1jbGFtcDogJGNvbDtcblx0LXdlYmtpdC1ib3gtb3JpZW50OiB2ZXJ0aWNhbDtcblx0b3ZlcmZsb3c6IGhpZGRlbjtcblx0bWF4LWhlaWdodDogJGhlaWdodDtcbn1cblxuLy8gYnV0dG9uc1xuXG5AbWl4aW4gYnRuLWdyYWRpZW50KCRjVGV4dCwgJGNIb3ZlciwgJGRpcmVjdGlvbiwgJGNGaXJzdCwgJGNTZWNvbnMsICRjVGhpcmQsICRob3Zlcikge1xuXHRjb2xvcjogJGNUZXh0O1xuXHR0cmFuc2l0aW9uOiAwLjVzO1xuXHRiYWNrZ3JvdW5kLXNpemU6IDIwMCUgYXV0bztcblx0YmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KCRkaXJlY3Rpb24sICRjRmlyc3QgMCUsICRjU2Vjb25zIDUxJSwgJGNUaGlyZCAxMDAlKTtcblxuXHQmOmhvdmVyIHtcblx0XHR0ZXh0LWRlY29yYXRpb246IG5vbmU7XG5cdFx0YmFja2dyb3VuZC1wb3NpdGlvbjogJGhvdmVyO1xuXHRcdGNvbG9yOiAkY0hvdmVyO1xuXHRcdGJveC1zaGFkb3c6IDBweCAyMHB4IDMwcHggLTE1cHggJGNUaGlyZDtcblx0fVxufVxuXG5AbWl4aW4gZ3JhZGllbnQoJHRvcCwgJGJvdHRvbSkge1xuXHRiYWNrZ3JvdW5kOiAkdG9wO1xuXHRiYWNrZ3JvdW5kOiAtbW96LWxpbmVhci1ncmFkaWVudCh0b3AsICR0b3AgMCUsICRib3R0b20gMTAwJSk7XG5cdGJhY2tncm91bmQ6IC13ZWJraXQtZ3JhZGllbnQobGluZWFyLCBsZWZ0IHRvcCwgbGVmdCBib3R0b20sIGNvbG9yLXN0b3AoMCUsICR0b3ApLCBjb2xvci1zdG9wKDEwMCUsICRib3R0b20pKTtcblx0YmFja2dyb3VuZDogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQodG9wLCAkdG9wIDAlLCAkYm90dG9tIDEwMCUpO1xuXHRiYWNrZ3JvdW5kOiAtby1saW5lYXItZ3JhZGllbnQodG9wLCAkdG9wIDAlLCAkYm90dG9tIDEwMCUpO1xuXHRiYWNrZ3JvdW5kOiAtbXMtbGluZWFyLWdyYWRpZW50KHRvcCwgJHRvcCAwJSwgJGJvdHRvbSAxMDAlKTtcblx0YmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgJHRvcCAwJSwgJGJvdHRvbSAxMDAlKTtcblx0ZmlsdGVyOiBwcm9naWQ6RFhJbWFnZVRyYW5zZm9ybS5NaWNyb3NvZnQuZ3JhZGllbnQoc3RhcnRDb2xvcnN0cj0nI3skdG9wfScsIGVuZENvbG9yc3RyPScjeyRib3R0b219ICcsIEdyYWRpZW50VHlwZT0wKTtcbn0iLCJAaW1wb3J0IHVybChcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1Nb250c2VycmF0OjEwMCwxMDBpLDIwMCwyMDBpLDMwMCwzMDBpLDQwMCw0MDBpLDUwMCw1MDBpLDYwMCw2MDBpLDcwMCw3MDBpLDgwMCw4MDBpLDkwMCw5MDBpJmRpc3BsYXk9c3dhcFwiKTtcbi5jbGVhcmZpeDphZnRlciB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIGRpc3BsYXk6IHRhYmxlO1xuICBjbGVhcjogYm90aDtcbn1cblxuLmNlbnRlcmVkIHtcbiAgZGlzcGxheTogdGFibGU7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG59XG4uY2VudGVyZWQgPiAqIHtcbiAgZGlzcGxheTogdGFibGUtY2VsbDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xufVxuXG4vKiByZW0gZm9udCBzaXplIHdpdGggZmFsbGJhY2sgfCB1c2FnZTpcblx0cCB7XG5cdFx0QGluY2x1ZGUgZm9udC1zaXplKDE0cHgpXG5cdH0qL1xuLnNlY3Rpb24taW5mb2Jsb2NrLWdyaWQtZG91YmxlLWl0ZW0gLnNlY3Rpb24tYXBwLWxpc3Qge1xuICBtYXJnaW4tdG9wOiAxMHB4O1xuICBtYXgtd2lkdGg6IDQwMHB4O1xuICB3aWR0aDogMTAwJTtcbn1cbi5zZWN0aW9uLWluZm9ibG9jay1ncmlkLWRvdWJsZS1pdGVtIC5zZWN0aW9uLWFwcC1saXN0IGEge1xuICBtYXJnaW4tcmlnaHQ6IDE1cHg7XG59XG5cbi5kdWNhdHVzeC1zZWN0aW9uIC5zZWN0aW9uLXRleHQtc2Vjb25kLWJsb2NrLWltZyB7XG4gIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA3NTBweCkge1xuICAuZHVjYXR1c3gtc2VjdGlvbiAuc2VjdGlvbi10ZXh0LXNlY29uZC1ibG9jay1pbWcge1xuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gIH1cbn1cbi5kdWNhdHVzeC1zZWN0aW9uIGEge1xuICBjb2xvcjogIzg5MjczNDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG4uZHVjYXR1c3gtc2VjdGlvbi5zZWN0aW9uLWluZm9ibG9jayB7XG4gIHBhZGRpbmctdG9wOiAyMHB4O1xufVxuLmR1Y2F0dXN4LXNlY3Rpb24gLnNlY3Rpb24taW5mb2Jsb2NrLWdyaWQtZG91YmxlLW5iIHtcbiAgbWFyZ2luLXRvcDogNTBweDtcbn1cbi5kdWNhdHVzeC1zZWN0aW9uLm10LTgwIHtcbiAgbWFyZ2luLXRvcDogODBweDtcbn1cbi5kdWNhdHVzeC1zZWN0aW9uIC5ibG9jay12aWRlbyB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgcGFkZGluZy1ib3R0b206IDQyJTtcbiAgcGFkZGluZy10b3A6IDMwcHg7XG4gIGhlaWdodDogMDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgbWFyZ2luLWJvdHRvbTogNTBweDtcbn1cbi5kdWNhdHVzeC1zZWN0aW9uIC5ibG9jay12aWRlbyBpZnJhbWUsXG4uZHVjYXR1c3gtc2VjdGlvbiAuYmxvY2stdmlkZW8gZW1iZWQsXG4uZHVjYXR1c3gtc2VjdGlvbiAuYmxvY2stdmlkZW8gb2JqZWN0IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG59XG4uZHVjYXR1c3gtc2VjdGlvbiAuc2VjdGlvbi1pbmZvYmxvY2staXRlbXMge1xuICBtYXJnaW4tdG9wOiAxMHB4O1xufVxuLmR1Y2F0dXN4LXNlY3Rpb24gLnNlY3Rpb24taW5mb2Jsb2NrLWl0ZW1zLXRhYmxlOm50aC1jaGlsZCgxKSB7XG4gIHBhZGRpbmctcmlnaHQ6IDUwcHg7XG59XG5AbWVkaWEgKG1heC13aWR0aDogMTAyNHB4KSB7XG4gIC5kdWNhdHVzeC1zZWN0aW9uIC5zZWN0aW9uLWluZm9ibG9jay1pdGVtcy10YWJsZTpudGgtY2hpbGQoMSkge1xuICAgIHBhZGRpbmctcmlnaHQ6IDIwcHg7XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA3NTBweCkge1xuICAuZHVjYXR1c3gtc2VjdGlvbiAuc2VjdGlvbi1pbmZvYmxvY2staXRlbXMtdGFibGU6bnRoLWNoaWxkKDEpIHtcbiAgICBwYWRkaW5nLXJpZ2h0OiAwcHg7XG4gIH1cbn1cbi5kdWNhdHVzeC1zZWN0aW9uIC5zZWN0aW9uLWluZm9ibG9jay1pdGVtcy10YWJsZTpudGgtY2hpbGQoMikge1xuICBwYWRkaW5nLWxlZnQ6IDUwcHg7XG59XG5AbWVkaWEgKG1heC13aWR0aDogMTAyNHB4KSB7XG4gIC5kdWNhdHVzeC1zZWN0aW9uIC5zZWN0aW9uLWluZm9ibG9jay1pdGVtcy10YWJsZTpudGgtY2hpbGQoMikge1xuICAgIHBhZGRpbmctbGVmdDogMjBweDtcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDc1MHB4KSB7XG4gIC5kdWNhdHVzeC1zZWN0aW9uIC5zZWN0aW9uLWluZm9ibG9jay1pdGVtcy10YWJsZTpudGgtY2hpbGQoMikge1xuICAgIHBhZGRpbmctbGVmdDogMHB4O1xuICB9XG59XG4uZHVjYXR1c3gtc2VjdGlvbiAuc2VjdGlvbi1pbmZvYmxvY2staXRlbXMtdGFibGUgLnNlY3Rpb24taW5mb2Jsb2NrLWl0ZW0tY2VsbCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIG1pbi1oZWlnaHQ6IDYwcHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5kdWNhdHVzeC1zZWN0aW9uIC5zZWN0aW9uLWluZm9ibG9jay1pdGVtcy10YWJsZSAuc2VjdGlvbi1pbmZvYmxvY2staXRlbS1jZWxsLnNlY3Rpb24taW5mb2Jsb2NrLWl0ZW0tY2VsbC10aXRsZSB7XG4gIHBhZGRpbmctdG9wOiA0MHB4O1xufVxuLmR1Y2F0dXN4LXNlY3Rpb24gLnNlY3Rpb24taW5mb2Jsb2NrLWl0ZW1zLXRhYmxlIC5zZWN0aW9uLWluZm9ibG9jay1pdGVtLWNlbGwuc2VjdGlvbi1pbmZvYmxvY2staXRlbS1jZWxsLXRpdGxlOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IGF0dHIoZGF0YS10aXRsZSk7XG4gIHdpZHRoOiAxMDAlO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmMGVhZTI7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcGFkZGluZzogMTBweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGNvbG9yOiAjODgyNDI1O1xuICB0b3A6IDA7XG59XG4uZHVjYXR1c3gtc2VjdGlvbiAuc2VjdGlvbi1pbmZvYmxvY2staXRlbXMtdGFibGUgLnNlY3Rpb24taW5mb2Jsb2NrLWl0ZW0tY2VsbC1pbmZvIHtcbiAgd2lkdGg6IDUwJTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHBhZGRpbmc6IDIwcHggMjBweDtcbn1cbi5kdWNhdHVzeC1zZWN0aW9uIC5zZWN0aW9uLWluZm9ibG9jay1pdGVtcy10YWJsZSAuc2VjdGlvbi1pbmZvYmxvY2staXRlbS1jZWxsLWluZm8gcCB7XG4gIG1hcmdpbjogNXB4IDA7XG4gIGZvbnQtc2l6ZTogMTdweDtcbiAgbGluZS1oZWlnaHQ6IDI1cHg7XG59XG4uZHVjYXR1c3gtc2VjdGlvbiAuc2VjdGlvbi1pbmZvYmxvY2staXRlbXMtdGFibGUgLnNlY3Rpb24taW5mb2Jsb2NrLWl0ZW0tY2VsbC1pbmZvOm50aC1jaGlsZCgxKSB7XG4gIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICNlNGU0ZTQ7XG59IiwiQGltcG9ydCBcIi4uLy4uLy4uLy4uL3Njc3MvdmFyc1wiO1xuQGltcG9ydCBcIi4uLy4uLy4uLy4uL3Njc3MvbWl4aW5zXCI7XG5cbi5zZWN0aW9uLWluZm9ibG9jay1ncmlkLWRvdWJsZS1pdGVtIHtcbiAgICAuc2VjdGlvbi1hcHAtbGlzdCB7XG4gICAgICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgICAgIG1heC13aWR0aDogNDAwcHg7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuXG4gICAgICAgIGEge1xuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xuICAgICAgICB9XG4gICAgfVxufVxuXG4uZHVjYXR1c3gtc2VjdGlvbiB7XG5cbiAgICAuc2VjdGlvbi10ZXh0LXNlY29uZC1ibG9jay1pbWcge1xuICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XG5cbiAgICAgICAgQGluY2x1ZGUgYig3NTApIHtcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBhIHtcbiAgICAgICAgY29sb3I6ICRicm93bi1yZWQ7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIH1cblxuICAgICYuc2VjdGlvbi1pbmZvYmxvY2sge1xuICAgICAgICBwYWRkaW5nLXRvcDogMjBweDtcbiAgICB9XG5cbiAgICAuc2VjdGlvbi1pbmZvYmxvY2stZ3JpZC1kb3VibGUtbmIge1xuICAgICAgICBtYXJnaW4tdG9wOiA1MHB4O1xuICAgIH1cblxuICAgICYubXQtODAge1xuICAgICAgICBtYXJnaW4tdG9wOiA4MHB4O1xuICAgIH1cblxuICAgIC5ibG9jay12aWRlbyB7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDQyJTtcbiAgICAgICAgcGFkZGluZy10b3A6IDMwcHg7XG4gICAgICAgIGhlaWdodDogMDtcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogNTBweDtcblxuICAgICAgICBpZnJhbWUsXG4gICAgICAgIGVtYmVkLFxuICAgICAgICBvYmplY3Qge1xuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgdG9wOiAwO1xuICAgICAgICAgICAgbGVmdDogMDtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLnNlY3Rpb24taW5mb2Jsb2NrLWl0ZW1zIHtcbiAgICAgICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICB9XG5cbiAgICAuc2VjdGlvbi1pbmZvYmxvY2staXRlbXMtdGFibGUge1xuICAgICAgICAmOm50aC1jaGlsZCgxKSB7XG4gICAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiA1MHB4O1xuXG4gICAgICAgICAgICBAaW5jbHVkZSBiKDEwMjQpIHtcbiAgICAgICAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiAyMHB4O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBAaW5jbHVkZSBiKDc1MCkge1xuICAgICAgICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IDBweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgICY6bnRoLWNoaWxkKDIpIHtcbiAgICAgICAgICAgIHBhZGRpbmctbGVmdDogNTBweDtcblxuICAgICAgICAgICAgQGluY2x1ZGUgYigxMDI0KSB7XG4gICAgICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAyMHB4O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBAaW5jbHVkZSBiKDc1MCkge1xuICAgICAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMHB4O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLnNlY3Rpb24taW5mb2Jsb2NrLWl0ZW0tY2VsbCB7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgbWluLWhlaWdodDogNjBweDtcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcblxuICAgICAgICAgICAgJi5zZWN0aW9uLWluZm9ibG9jay1pdGVtLWNlbGwtdGl0bGUge1xuICAgICAgICAgICAgICAgIHBhZGRpbmctdG9wOiA0MHB4O1xuXG4gICAgICAgICAgICAgICAgJjpiZWZvcmUge1xuICAgICAgICAgICAgICAgICAgICBjb250ZW50OiBhdHRyKGRhdGEtdGl0bGUpO1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjBlYWUyO1xuICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICAgICAgICAgICAgICBjb2xvcjogIzg4MjQyNTtcbiAgICAgICAgICAgICAgICAgICAgdG9wOiAwO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgJi1pbmZvIHtcbiAgICAgICAgICAgICAgICB3aWR0aDogNTAlO1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAyMHB4IDIwcHg7XG5cbiAgICAgICAgICAgICAgICBwIHtcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiA1cHggMDtcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxN3B4O1xuICAgICAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMjVweDtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAmOm50aC1jaGlsZCgxKSB7XG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICNlNGU0ZTQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DucatusxComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-ducatusx',
                templateUrl: './ducatusx.component.html',
                styleUrls: ['./ducatusx.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/pages/errorpage/errorpage.component.ts":
/*!********************************************************!*\
  !*** ./src/app/pages/errorpage/errorpage.component.ts ***!
  \********************************************************/
/*! exports provided: ErrorPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorPageComponent", function() { return ErrorPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



const _c0 = function () { return ["/"]; };
class ErrorPageComponent {
    constructor() { }
    ngOnInit() {
    }
}
ErrorPageComponent.ɵfac = function ErrorPageComponent_Factory(t) { return new (t || ErrorPageComponent)(); };
ErrorPageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ErrorPageComponent, selectors: [["app-404"]], decls: 12, vars: 2, consts: [[1, "section-header-page", 2, "background-image", "url(/assets/img/sections/buy-bg.png)"], [1, "container"], [1, "h1__title-page"], [1, "app", "error-page"], ["routerLinkActive", "router-link-active", 1, "button", "button__brown-red", 3, "routerLink"]], template: function ErrorPageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "404");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "section", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "404");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "small");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "page not found");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "go to main page");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](1, _c0));
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkActive"]], styles: [".error-page[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  text-align: center;\n}\n.error-page[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  text-transform: uppercase;\n  font-size: 140px;\n  line-height: 1;\n  font-weight: bold;\n  margin: 100px 0 0 0;\n  color: #862633;\n}\n.error-page[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  font-size: 25px;\n  margin-bottom: 30px;\n}\n.error-page[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  max-width: 250px;\n  width: 100%;\n  margin: 0 auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9nbGViL3Byb2plY3RzL2R1Y2F0dXMtc2l0ZS9zcmMvYXBwL3BhZ2VzL2Vycm9ycGFnZS9lcnJvcnBhZ2UuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2Vycm9ycGFnZS9lcnJvcnBhZ2UuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0k7RUFDSSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtFQUNBLGtCQUFBO0FDQVI7QURFUTtFQUNJLHlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7QUNBWjtBREdRO0VBQ0ksZUFBQTtFQUNBLG1CQUFBO0FDRFo7QURJUTtFQUNJLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLGNBQUE7QUNGWiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2Vycm9ycGFnZS9lcnJvcnBhZ2UuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZXJyb3ItcGFnZSB7XG4gICAgLmNvbnRhaW5lciB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG5cbiAgICAgICAgaDEge1xuICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTQwcHg7XG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMTtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICAgICAgbWFyZ2luOiAxMDBweCAwIDAgMDtcbiAgICAgICAgICAgIGNvbG9yOiAjODYyNjMzO1xuICAgICAgICB9XG5cbiAgICAgICAgc21hbGwge1xuICAgICAgICAgICAgZm9udC1zaXplOiAyNXB4O1xuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMzBweDtcbiAgICAgICAgfVxuXG4gICAgICAgIGEge1xuICAgICAgICAgICAgbWF4LXdpZHRoOiAyNTBweDtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgbWFyZ2luOiAwIGF1dG87XG4gICAgICAgIH1cbiAgICB9XG59IiwiLmVycm9yLXBhZ2UgLmNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4uZXJyb3ItcGFnZSAuY29udGFpbmVyIGgxIHtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgZm9udC1zaXplOiAxNDBweDtcbiAgbGluZS1oZWlnaHQ6IDE7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBtYXJnaW46IDEwMHB4IDAgMCAwO1xuICBjb2xvcjogIzg2MjYzMztcbn1cbi5lcnJvci1wYWdlIC5jb250YWluZXIgc21hbGwge1xuICBmb250LXNpemU6IDI1cHg7XG4gIG1hcmdpbi1ib3R0b206IDMwcHg7XG59XG4uZXJyb3ItcGFnZSAuY29udGFpbmVyIGEge1xuICBtYXgtd2lkdGg6IDI1MHB4O1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luOiAwIGF1dG87XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ErrorPageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-404',
                templateUrl: './errorpage.component.html',
                styleUrls: ['./errorpage.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/pages/gold-lottery/gold-lottery.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/pages/gold-lottery/gold-lottery.component.ts ***!
  \**************************************************************/
/*! exports provided: GoldLotteryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GoldLotteryComponent", function() { return GoldLotteryComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _service_gold_lottery_gold_lottery_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../service/gold-lottery/gold-lottery.service */ "./src/app/service/gold-lottery/gold-lottery.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");








const _c0 = ["registrationForm"];
const _c1 = ["checkForm"];
function GoldLotteryComponent_div_8_div_6_form_1_span_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, "PAGE.GOLD_LOTTERY.REGISTRATE.ERROR_1"));
} }
function GoldLotteryComponent_div_8_div_6_form_1_span_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, "PAGE.GOLD_LOTTERY.REGISTRATE.ERROR_2"));
} }
function GoldLotteryComponent_div_8_div_6_form_1_span_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, "PAGE.GOLD_LOTTERY.REGISTRATE.ERROR_1"));
} }
function GoldLotteryComponent_div_8_div_6_form_1_div_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function GoldLotteryComponent_div_8_div_6_form_1_span_30_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, "PAGE.GOLD_LOTTERY.REGISTRATE.ERROR_4"));
} }
const _c2 = function (a0) { return { "error-input": a0 }; };
const _c3 = function (a0) { return { "disabled": a0 }; };
function GoldLotteryComponent_div_8_div_6_form_1_Template(rf, ctx) { if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 12, 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function GoldLotteryComponent_div_8_div_6_form_1_Template_form_ngSubmit_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r15); const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r14.confirmRegistration(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "label", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](10, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, GoldLotteryComponent_div_8_div_6_form_1_span_11_Template, 3, 3, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, GoldLotteryComponent_div_8_div_6_form_1_span_12_Template, 3, 3, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "input", 21, 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function GoldLotteryComponent_div_8_div_6_form_1_Template_input_ngModelChange_13_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r15); const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r16.formData.code = $event; })("ngModelChange", function GoldLotteryComponent_div_8_div_6_form_1_Template_input_ngModelChange_13_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r15); const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r17.formValidate("CODE"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "label", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](19, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, GoldLotteryComponent_div_8_div_6_form_1_span_20_Template, 3, 3, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "input", 25, 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function GoldLotteryComponent_div_8_div_6_form_1_Template_input_ngModelChange_21_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r15); const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r18.formData.addressDuc = $event; })("ngModelChange", function GoldLotteryComponent_div_8_div_6_form_1_Template_input_ngModelChange_21_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r15); const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r19.formValidate("DUC"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](23, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, GoldLotteryComponent_div_8_div_6_form_1_div_24_Template, 7, 0, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "label", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](29, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](30, GoldLotteryComponent_div_8_div_6_form_1_span_30_Template, 3, 3, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "input", 30, 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function GoldLotteryComponent_div_8_div_6_form_1_Template_input_ngModelChange_31_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r15); const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r20.formData.addressDucx = $event; })("ngModelChange", function GoldLotteryComponent_div_8_div_6_form_1_Template_input_ngModelChange_31_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r15); const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r21.formValidate("DUCX"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](33, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "button", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](37, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 23, "PAGE.GOLD_LOTTERY.REGISTRATE.TEXT_1"), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](10, 25, "PAGE.GOLD_LOTTERY.REGISTRATE.TEXT_2"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r4.formData.validCodeRegistrated);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r4.formData.validCode && !ctx_r4.formData.validCodeRegistrated);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r4.formData.code)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](37, _c2, ctx_r4.formData.validCode))("disabled", ctx_r4.formData.formValidating);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](19, 27, "PAGE.GOLD_LOTTERY.REGISTRATE.TEXT_3"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r4.formData.validDuc);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r4.formData.addressDuc)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](39, _c2, ctx_r4.formData.validDuc))("disabled", ctx_r4.formData.validateDuc || ctx_r4.formData.formValidating)("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](23, 29, "PAGE.GOLD_LOTTERY.REGISTRATE.PLACEHOLDER_1"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r4.formData.validateDuc);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](29, 31, "PAGE.GOLD_LOTTERY.REGISTRATE.TEXT_4"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r4.formData.validDucx);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r4.formData.addressDucx)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](41, _c2, ctx_r4.formData.validDucx))("disabled", ctx_r4.formData.formValidating)("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](33, 33, "PAGE.GOLD_LOTTERY.REGISTRATE.PLACEHOLDER_2"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](43, _c3, ctx_r4.formData.button))("disabled", ctx_r4.formData.button);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](37, 35, "PAGE.GOLD_LOTTERY.BUTTON"));
} }
function GoldLotteryComponent_div_8_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, GoldLotteryComponent_div_8_div_6_form_1_Template, 38, 45, "form", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.registrationStep === 0);
} }
function GoldLotteryComponent_div_8_div_7_span_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, "PAGE.GOLD_LOTTERY.CHECK.ERROR_1"));
} }
function GoldLotteryComponent_div_8_div_7_span_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, "PAGE.GOLD_LOTTERY.CHECK.ERROR_2"));
} }
function GoldLotteryComponent_div_8_div_7_Template(rf, ctx) { if (rf & 1) {
    const _r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "form", 38, 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function GoldLotteryComponent_div_8_div_7_Template_form_ngSubmit_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r27); const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r26.confirmCheck(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](6, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "label", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](12, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, GoldLotteryComponent_div_8_div_7_span_13_Template, 3, 3, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, GoldLotteryComponent_div_8_div_7_span_14_Template, 3, 3, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "input", 41, 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function GoldLotteryComponent_div_8_div_7_Template_input_ngModelChange_15_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r27); const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r28.formDataCheck.code = $event; })("ngModelChange", function GoldLotteryComponent_div_8_div_7_Template_input_ngModelChange_15_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r27); const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r29.formCodeValidate(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "button", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](20, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](6, 10, "PAGE.GOLD_LOTTERY.CHECK.TEXT_1"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](12, 12, "PAGE.GOLD_LOTTERY.CHECK.TEXT_2"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx_r3.formDataCheck.validCode || ctx_r3.formDataCheck.validPreCode) && !ctx_r3.formDataCheck.validRegistrate);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.formDataCheck.validRegistrate);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r3.formDataCheck.code)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](16, _c2, ctx_r3.formDataCheck.validCode))("disabled", ctx_r3.formData.formValidating);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](18, _c3, ctx_r3.formDataCheck.button))("disabled", ctx_r3.formDataCheck.button);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](20, 14, "PAGE.GOLD_LOTTERY.BUTTON"));
} }
const _c4 = function (a0) { return { "active": a0 }; };
function GoldLotteryComponent_div_8_Template(rf, ctx) { if (rf & 1) {
    const _r31 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function GoldLotteryComponent_div_8_Template_span_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r31); const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r30.changeForm("registration"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function GoldLotteryComponent_div_8_Template_span_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r31); const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r32.changeForm("check"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, GoldLotteryComponent_div_8_div_6_Template, 2, 1, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, GoldLotteryComponent_div_8_div_7_Template, 21, 20, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](10, _c4, ctx_r0.type === "registration"))("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 6, "PAGE.GOLD_LOTTERY.NAV.TITLE_1"), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](12, _c4, ctx_r0.type === "check"))("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](5, 8, "PAGE.GOLD_LOTTERY.NAV.TITLE_2"), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.type === "registration");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.type === "check");
} }
function GoldLotteryComponent_div_9_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 55);
} }
function GoldLotteryComponent_div_9_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 56);
} }
function GoldLotteryComponent_div_9_span_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, "PAGE.GOLD_LOTTERY.INFO.TEXT_2"));
} }
function GoldLotteryComponent_div_9_span_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, "PAGE.GOLD_LOTTERY.INFO.TEXT_3"));
} }
function GoldLotteryComponent_div_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, GoldLotteryComponent_div_9_div_2_Template, 1, 0, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, GoldLotteryComponent_div_9_div_3_Template, 1, 0, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](10, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, GoldLotteryComponent_div_9_span_11_Template, 3, 3, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, GoldLotteryComponent_div_9_span_12_Template, 3, 3, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](15, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](18, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](21, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](24, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](27, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](34, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](37, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](40, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](43, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](46, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](51, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](54, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "span", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](57, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "span", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](64, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "span", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "div", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "span", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](70, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "span", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.winData.token_type >= 144);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.winData.token_type <= 144);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](10, 27, "PAGE.GOLD_LOTTERY.INFO.TEXT_1"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.winData.token_type >= 144);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.winData.token_type < 144);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](15, 29, "PAGE.GOLD_LOTTERY.INFO.TEXT_4"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](18, 31, ctx_r1.winData.purchase_date, "yyyy-MM-dd") || "none");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](21, 34, "PAGE.GOLD_LOTTERY.INFO.TEXT_5"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](24, 36, "PAGE.GOLD_LOTTERY.INFO.TEXT_6"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](27, 38, "PAGE.GOLD_LOTTERY.INFO.TEXT_7"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.winData.country || "none");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](34, 40, "PAGE.GOLD_LOTTERY.INFO.TEXT_8"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", ctx_r1.winData.token_type, "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](37, 42, "PAGE.GOLD_LOTTERY.INFO.TEXT_9"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](40, 44, "PAGE.GOLD_LOTTERY.INFO.TEXT_10"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", ctx_r1.winData.gold_price || "none", "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](43, 46, "PAGE.GOLD_LOTTERY.INFO.TEXT_11"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](46, 48, "PAGE.GOLD_LOTTERY.INFO.TEXT_12"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.winData.certified_assayer || "none");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](51, 50, "PAGE.GOLD_LOTTERY.INFO.TEXT_13"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](54, 52, ctx_r1.winData.production_date, "yyyy-MM-dd") || "none");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](57, 55, "PAGE.GOLD_LOTTERY.INFO.TEXT_14"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.ducPrice || "none");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](64, 57, "PAGE.GOLD_LOTTERY.INFO.TEXT_15"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.winData.ducatus_address || "none");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](70, 59, "PAGE.GOLD_LOTTERY.INFO.TEXT_16"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.winData.ducatusx_address || "none");
} }
const _c5 = function (a0) { return { "bg-win": a0 }; };
class GoldLotteryComponent {
    constructor(goldlotteryservice, route) {
        this.goldlotteryservice = goldlotteryservice;
        this.route = route;
        this.win = false;
        this.type = 'registration';
        this.registrationStep = 0;
        this.formData = {
            code: '',
            validCode: false,
            typeCode: false,
            addressDuc: '',
            validateDuc: false,
            typeDuc: false,
            validDuc: false,
            finalValidDuc: false,
            addressDucx: '',
            validDucx: false,
            typeDucx: false,
            button: true,
            formValidating: false
        };
        this.formDataCheck = {
            // precode: '',
            // validPreCode: false,
            code: '',
            valid: false,
            validating: false,
            validCode: false,
            typeCode: false,
            button: true,
            validRegistrate: false
        };
    }
    ngOnInit() {
        this.route.queryParams.subscribe(params => {
            if (params['t'] === 'reqistration')
                this.type = 'registration';
            if (params['t'] === 'check')
                this.type = 'check';
        });
    }
    registrate(form) {
        this.registrationStep = 1;
    }
    changeForm(typeForm) {
        this.type = typeForm;
        this.formData = {
            code: '',
            validCodeRegistrated: false,
            validCode: false,
            typeCode: false,
            addressDuc: '',
            validateDuc: false,
            typeDuc: false,
            validDuc: false,
            finalValidDuc: false,
            addressDucx: '',
            validDucx: false,
            typeDucx: false,
            button: true,
            formValidating: false
        };
        this.formDataCheck = {
            // precode: '',
            // validPreCode: false,
            code: '',
            valid: false,
            validating: false,
            typeCode: false,
            button: true,
            validRegistrate: false
        };
    }
    format(input, format, sep) {
        let output = '';
        let idx = 0;
        for (let i = 0; i < format.length && idx < input.length; i++) {
            output += input.substr(idx, format[i]);
            if (idx + format[i] < input.length) {
                output += sep;
            }
            idx += format[i];
        }
        output += input.substr(idx);
        return output;
    }
    formValidate(addressType) {
        switch (addressType) {
            case 'DUC':
                this.formData.typeDuc = true;
                this.formData.addressDuc = this.formData.addressDuc.replace('ducatus:', '');
                if (this.formData.addressDuc.length === 34 && ['L', 'l', 'M', 'm'].includes(this.formData.addressDuc.substring(0, 1))) {
                    this.formData.validateDuc = true;
                    this.formData.validDuc = false;
                    this.goldlotteryservice.getValidateDucatusAddress(this.formData.addressDuc).then((result) => {
                        if (result.address_valid === true) {
                            this.formData.validDuc = false;
                            this.formData.finalValidDuc = false;
                        }
                        else {
                            this.formData.validDuc = true;
                            this.formData.finalValidDuc = true;
                        }
                        this.formData.validateDuc = false;
                        this.checkRegistrateForm();
                    }).catch(err => { console.log('something went wrong...', err); this.formData.finalValidDuc = false; this.formData.validDuc = true; this.formData.validateDuc = false; this.checkRegistrateForm(); });
                }
                else {
                    this.formData.validDuc = true;
                    this.formData.finalValidDuc = true;
                }
                break;
            case 'DUCX':
                this.formData.typeDucx = true;
                if (this.formData.addressDucx.length === 42) {
                    const reg = /0x[0-9a-fA-F]{40}/;
                    const inputstr = this.formData.addressDucx;
                    if (!reg.test(inputstr)) {
                        this.formData.validDuc = true;
                        return;
                    }
                    if (($.trim(inputstr) === '') || ($.trim(inputstr).length < 15)) {
                        this.formData.validDucx = true;
                    }
                    else {
                        this.formData.validDucx = false;
                    }
                }
                else {
                    this.formData.validDucx = true;
                }
                break;
            case 'CODE':
                this.formData.typeCode = true;
                let foo = this.registrationForm.controls.code.value.replace(/-/g, '');
                if (foo.length > 0) {
                    foo = this.format(foo, [4, 4, 4, 4, 4, 4, 4, 4], '-');
                }
                this.formData.code = foo;
                this.formData.validCodeRegistrated = false;
                if (this.formData.code.length !== 39) {
                    this.formData.validCode = true;
                }
                else {
                    this.formData.validCode = false;
                }
                break;
        }
        this.checkRegistrateForm();
    }
    checkRegistrateForm() {
        if (!this.formData.finalValidDuc && this.formData.typeDuc && !this.formData.validDucx && this.formData.typeDucx && !this.formData.validCode && this.formData.typeCode) {
            this.formData.button = false;
        }
        else {
            this.formData.button = true;
        }
    }
    confirmRegistration() {
        this.formData.formValidating = true;
        this.goldlotteryservice.codeRegistrate(this.formData.addressDuc, this.formData.addressDucx, new _angular_common__WEBPACK_IMPORTED_MODULE_1__["UpperCasePipe"]().transform(this.formData.code)).then((result) => {
            if (result.token_id) {
                this.ducPrice = result.token_type * result.gold_price * result.duc_value / result.duc_count;
                this.winData = result;
                this.win = true;
                this.formData.formValidating = false;
            }
        }).catch((err) => {
            let words;
            if (err.error.detail) {
                words = this.wordsReturn(err.error.detail, 2);
                if (words === 'NaNregisteredalready') {
                    this.formData.validCodeRegistrated = true;
                    this.formData.validCode = true;
                    this.formDataCheck.button = true;
                }
                if (words === 'NaNexistnot') {
                    this.formData.validCode = true;
                    this.formDataCheck.button = true;
                }
            }
            this.formData.formValidating = false;
            this.winData = [];
        });
    }
    wordsReturn(words, count) {
        let word;
        const n = words.split(' ');
        for (let index = 0; index <= count; index++) {
            word += n[n.length - index];
        }
        return word;
    }
    confirmCheck() {
        // const publicCode = this.formDataCheck.precode + '-' + this.formDataCheck.code;
        this.goldlotteryservice.codeCheck(new _angular_common__WEBPACK_IMPORTED_MODULE_1__["UpperCasePipe"]().transform(this.formDataCheck.code)).then((result) => {
            if (result.token_id) {
                this.ducPrice = result.token_type * result.gold_price * result.duc_value / result.duc_count;
                this.winData = result;
                this.win = true;
                this.formData.formValidating = false;
            }
            if (result.token_id === null && result.token_type != "") {
                this.formDataCheck.validRegistrate = true;
                // this.formDataCheck.validPreCode = true;
                this.formDataCheck.validCode = true;
                this.formDataCheck.button = true;
            }
        }).catch((err) => {
            let words;
            if (err.error.detail) {
                words = this.wordsReturn(err.error.detail, 2);
                if (words === 'NaNexistnot') {
                    // this.formDataCheck.validPreCode = true;
                    this.formDataCheck.validCode = true;
                    this.formDataCheck.button = true;
                }
            }
            // this.formDataCheck.validPreCode = true;
            this.formDataCheck.validCode = true;
            this.formDataCheck.button = true;
        });
    }
    // public formPreCodeValidate() {
    //   this.formDataCheck.validRegistrate = false;
    //   if (this.formDataCheck.precode.length !== 4) {
    //     this.formDataCheck.validPreCode = true;
    //     this.formDataCheck.button = true;
    //   } else {
    //     this.formDataCheck.validPreCode = false;
    //     if (this.formDataCheck.code.length === 34) {
    //       this.formDataCheck.button = false;
    //     }
    //   }
    //   if (this.formDataCheck.code.length !== 34) {
    //     this.formDataCheck.validCode = true;
    //   } else { this.formDataCheck.validCode = false; }
    // }
    formCodeValidate() {
        this.formDataCheck.validRegistrate = false;
        this.formDataCheck.typeCode = true;
        let foo = this.formDataCheck.code.replace(/-/g, '');
        if (foo.length > 0) {
            foo = this.format(foo, [4, 4, 4, 4, 4, 4, 4, 4], '-');
        }
        this.formDataCheck.code = foo;
        // if ((this.formDataCheck.precode.length === 4) && (this.formDataCheck.code.length === 34)) { this.formDataCheck.button = false; }
        // else { this.formDataCheck.button = true; }
        // if (this.formDataCheck.precode.length !== 4) {
        //   this.formDataCheck.validPreCode = true;
        // } else { this.formDataCheck.validPreCode = false; }
        if (this.formDataCheck.code.length !== 39) {
            this.formDataCheck.validCode = true;
            this.formDataCheck.button = true;
        }
        else {
            this.formDataCheck.validCode = false;
            this.formDataCheck.button = false;
        }
    }
}
GoldLotteryComponent.ɵfac = function GoldLotteryComponent_Factory(t) { return new (t || GoldLotteryComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_service_gold_lottery_gold_lottery_service__WEBPACK_IMPORTED_MODULE_2__["GoldLotteryService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"])); };
GoldLotteryComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: GoldLotteryComponent, selectors: [["app-gold-lottery"]], viewQuery: function GoldLotteryComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c1, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.registrationForm = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.checkForm = _t.first);
    } }, decls: 10, vars: 8, consts: [[1, "section-header-page", 2, "background-image", "url(/assets/img/sections/buy-bg.png)"], [1, "container"], [1, "h1__title-page", 3, "innerHTML"], [1, "app", "gold-lottery", 3, "ngClass"], [1, "lottery"], [1, "lottery-wrap"], [4, "ngIf"], [1, "lottery-form-switch"], [1, "lottery-form-switch-button", 3, "ngClass", "innerHTML", "click"], ["class", "lottery-form-block", 4, "ngIf"], [1, "lottery-form-block"], ["id", "registrationForm", "ngNativeValidate", "", "class", "lottery-form-block-registration", 3, "ngSubmit", 4, "ngIf"], ["id", "registrationForm", "ngNativeValidate", "", 1, "lottery-form-block-registration", 3, "ngSubmit"], ["registrationForm", "ngForm"], [1, "lottery-form-top"], [1, "lottery-form-top-text", 3, "innerHTML"], [1, "lottery-form"], ["data-title", "Code", 1, "lottery-form-field"], [1, "lottery-form-field-input"], ["for", "input-code"], ["class", "error-text", 4, "ngIf"], ["name", "code", "required", "", "maxlength", "39", "placeholder", "0021-1C4E-B5F2-4FDD-4954-4846-9551-CFDD", "type", "text", "id", "input-code", "oninput", "this.value = this.value.replace(/[^a-zA-Z0-9-]/g, '').replace(/(\\..*)\\./g, '$1');", 1, "lottery-form-input", 3, "ngModel", "ngClass", "disabled", "ngModelChange"], ["code", "ngModel"], ["data-title", "DUC", 1, "lottery-form-field"], ["for", "input-duc"], ["name", "addressDuc", "required", "", "maxlength", "42", "type", "text", "id", "input-duc", 1, "lottery-form-input", 3, "ngModel", "ngClass", "disabled", "placeholder", "ngModelChange"], ["addressDuc", "ngModel"], ["class", "loading-small", 4, "ngIf"], ["data-title", "DUCX", 1, "lottery-form-field"], ["for", "input-ducx"], ["name", "addressDucx", "required", "", "maxlength", "42", "pattern", "0x[0-9a-fA-F]{40}", "type", "text", "id", "input-ducx", 1, "lottery-form-input", 3, "ngModel", "ngClass", "disabled", "placeholder", "ngModelChange"], ["addressDucx", "ngModel"], [1, "lottery-form-footer"], ["type", "submit", 1, "lottery-form-footer-button", 3, "ngClass", "disabled"], [1, "error-text"], [1, "loading-small"], [1, "loading-dots"], [1, "loading-dots-wrap"], ["ngNativeValidate", "", 1, "lottery-form-block-check", 3, "ngSubmit"], ["checkForm", "ngForm"], [1, "lottery-form-top-text"], ["name", "code", "required", "", "maxlength", "39", "placeholder", "PUB0-1C4E-B5F2-4FDD-4954-4846-9551-CFDD", "type", "text", "id", "input-code", "oninput", "this.value = this.value.replace(/[^a-zA-Z0-9-]/g, '').replace(/(\\..*)\\./g, '$1');", 1, "lottery-form-input", 3, "ngModel", "ngClass", "disabled", "ngModelChange"], ["data-title", "Congratulations!", 1, "lottery-form-block", "winner-block"], ["class", "winner-block-img", "style", "background-image: url(/assets/img/gold/bar.png);", 4, "ngIf"], ["class", "winner-block-img", "style", "background-image: url(/assets/img/gold/coin.png);", 4, "ngIf"], [1, "winner-block-info"], [1, "winner-block-info-gold"], [1, "winner-block-info-gold-left"], [1, "winner-block-info-gold-right"], [1, "winner-block-info-text"], [1, "winner-block-info-addreses"], [1, "winner-block-info-addreses-left"], [1, "winner-block-info-addreses-text"], [1, "winner-block-info-addreses-address"], [1, "winner-block-info-addreses-right"], [1, "winner-block-img", 2, "background-image", "url(/assets/img/gold/bar.png)"], [1, "winner-block-img", 2, "background-image", "url(/assets/img/gold/coin.png)"]], template: function GoldLotteryComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "h1", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "section", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, GoldLotteryComponent_div_8_Template, 8, 14, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, GoldLotteryComponent_div_9_Template, 73, 61, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 4, "PAGE.GOLD_LOTTERY.TITLE"), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](6, _c5, ctx.win));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.win);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.win);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["MaxLengthValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["PatternValidator"]], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslatePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["DatePipe"]], styles: ["@import url(\"https://fonts.googleapis.com/css?family=Montserrat:100,100i,200,200i,300,300i,400,400i,500,500i,600,600i,700,700i,800,800i,900,900i&display=swap\");\n.clearfix[_ngcontent-%COMP%]:after {\n  content: \"\";\n  display: table;\n  clear: both;\n}\n.centered[_ngcontent-%COMP%] {\n  display: table;\n  width: 100%;\n  height: 100%;\n}\n.centered[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\n  display: table-cell;\n  text-align: center;\n  vertical-align: middle;\n}\n\nsection.gold-lottery[_ngcontent-%COMP%]   .error-input[_ngcontent-%COMP%] {\n  border: 1px solid red !important;\n}\nsection.gold-lottery[_ngcontent-%COMP%]   #input-code[_ngcontent-%COMP%] {\n  text-transform: uppercase;\n}\nsection.gold-lottery[_ngcontent-%COMP%]   .lottery-form-field-input[_ngcontent-%COMP%] {\n  position: relative;\n}\nsection.gold-lottery[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%] {\n  padding-top: 100px;\n}\nsection.gold-lottery[_ngcontent-%COMP%]   .lottery[_ngcontent-%COMP%] {\n  max-width: 650px;\n  width: 100%;\n  margin: 0 auto;\n}\nsection.gold-lottery[_ngcontent-%COMP%]   .lottery-form[_ngcontent-%COMP%] {\n  padding: 40px;\n  background-image: url(\"/assets/img/gold/logo.svg\");\n  background-position: center;\n  background-size: 200px;\n  background-repeat: no-repeat;\n}\n@media (max-width: 600px) {\n  section.gold-lottery[_ngcontent-%COMP%]   .lottery-form[_ngcontent-%COMP%] {\n    padding: 40px 10px;\n  }\n}\n@media (max-width: 700px) {\n  section.gold-lottery[_ngcontent-%COMP%]   .lottery-form[_ngcontent-%COMP%] {\n    padding: 40px 20px;\n  }\n}\nsection.gold-lottery[_ngcontent-%COMP%]   .lottery-form-info[_ngcontent-%COMP%] {\n  padding: 100px 0px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\nsection.gold-lottery[_ngcontent-%COMP%]   .lottery-form-info-text[_ngcontent-%COMP%] {\n  background-color: rgba(225, 225, 225, 0.5);\n  padding: 10px 15px;\n  text-align: center;\n  max-width: 300px;\n  width: 100%;\n  font-weight: 500;\n  color: gray;\n  border-radius: 10px;\n}\nsection.gold-lottery[_ngcontent-%COMP%]   .lottery-form-switch[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  align-items: center;\n  justify-content: center;\n  grid-gap: 20px;\n  margin-bottom: 20px;\n}\nsection.gold-lottery[_ngcontent-%COMP%]   .lottery-form-switch-button[_ngcontent-%COMP%] {\n  background-color: #F0EAE3;\n  text-align: center;\n  padding: 20px;\n  font-size: 18px;\n  border-radius: 10px;\n  color: gray;\n  box-shadow: 0px 3px 6px #0000002e;\n  cursor: pointer;\n  transition: 0.4s ease;\n}\nsection.gold-lottery[_ngcontent-%COMP%]   .lottery-form-switch-button[_ngcontent-%COMP%]:hover {\n  background-color: #D3C198;\n  color: white;\n}\nsection.gold-lottery[_ngcontent-%COMP%]   .lottery-form-switch[_ngcontent-%COMP%]   .active[_ngcontent-%COMP%] {\n  background-color: white;\n  cursor: default !important;\n}\nsection.gold-lottery[_ngcontent-%COMP%]   .lottery-form-switch[_ngcontent-%COMP%]   .active[_ngcontent-%COMP%]:hover {\n  background-color: white;\n  color: gray;\n}\nsection.gold-lottery[_ngcontent-%COMP%]   .lottery-form-code[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(4, 80px) 1fr;\n  grid-gap: 10px;\n  justify-content: center;\n  align-items: center;\n}\nsection.gold-lottery[_ngcontent-%COMP%]   .lottery-form-code[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 10px 5px;\n}\nsection.gold-lottery[_ngcontent-%COMP%]   .lottery-form-top[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding: 25px 30px;\n  background-color: #892734;\n}\nsection.gold-lottery[_ngcontent-%COMP%]   .lottery-form-top-text[_ngcontent-%COMP%] {\n  text-align: center;\n  font-size: 18px;\n  color: white;\n}\nsection.gold-lottery[_ngcontent-%COMP%]   .lottery-form-footer[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding: 10px 0px;\n}\nsection.gold-lottery[_ngcontent-%COMP%]   .lottery-form-footer[_ngcontent-%COMP%]   .disabled[_ngcontent-%COMP%] {\n  opacity: 0.8;\n}\nsection.gold-lottery[_ngcontent-%COMP%]   .lottery-form-footer-button[_ngcontent-%COMP%] {\n  font-size: 18px;\n  color: white;\n  cursor: pointer;\n  transition: 0.4s ease;\n  background-color: #892734;\n  padding: 10px;\n  width: 100%;\n  display: block;\n  text-align: center;\n  outline: none !important;\n  border: none !important;\n}\nsection.gold-lottery[_ngcontent-%COMP%]   .lottery-form-footer-button[_ngcontent-%COMP%]:hover {\n  color: white;\n  background-color: #D3C198;\n}\nsection.gold-lottery[_ngcontent-%COMP%]   .lottery-form-block[_ngcontent-%COMP%] {\n  background-color: #F0EAE3;\n  padding-bottom: 30px;\n  border-radius: 10px;\n  overflow: hidden;\n  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.3);\n}\nsection.gold-lottery[_ngcontent-%COMP%]   .lottery-form-input[_ngcontent-%COMP%] {\n  border-radius: 8px;\n  padding: 10px 20px;\n  font-size: 16px;\n  height: 45px;\n  display: block;\n  outline: none;\n  box-shadow: none;\n  -webkit-appearance: none;\n     -moz-appearance: none;\n          appearance: none;\n  border: none;\n  width: 100%;\n  background-color: #f3f3f3;\n  border: 1px solid #ddd;\n  letter-spacing: 1.1px;\n  display: flex;\n  align-items: center;\n}\nsection.gold-lottery[_ngcontent-%COMP%]   .lottery-form-input-error[_ngcontent-%COMP%] {\n  color: #892734;\n}\nsection.gold-lottery[_ngcontent-%COMP%]   .lottery-form-field[_ngcontent-%COMP%] {\n  width: 100%;\n  margin-bottom: 20px;\n  display: grid;\n  grid-template-columns: 80px 1fr;\n  grid-gap: 15px;\n}\n@media (max-width: 600px) {\n  section.gold-lottery[_ngcontent-%COMP%]   .lottery-form-field[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\nsection.gold-lottery[_ngcontent-%COMP%]   .lottery-form-field-check[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 80px 1fr;\n  grid-gap: 20px;\n  justify-content: center;\n  align-items: end;\n  padding: 20px 0 40px 0;\n}\nsection.gold-lottery[_ngcontent-%COMP%]   .lottery-form-field-check[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  text-transform: uppercase;\n  padding: 10px 20px;\n  text-align: left;\n}\nsection.gold-lottery[_ngcontent-%COMP%]   .lottery-form-field-check[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:nth-child(1) {\n  padding: 10px 5px;\n  text-align: center;\n}\nsection.gold-lottery[_ngcontent-%COMP%]   .lottery-form-field-check[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  width: 100%;\n  margin-bottom: 10px;\n  display: block;\n  font-size: 14px;\n  color: gray;\n  font-weight: 500;\n}\nsection.gold-lottery[_ngcontent-%COMP%]   .lottery-form-field[_ngcontent-%COMP%]:before {\n  content: attr(data-title);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding: 10px;\n  font-size: 18px;\n  border-radius: 8px;\n  background-color: #892734;\n  color: #fff;\n  margin-top: 30px;\n  height: 43px;\n  font-weight: normal;\n}\n@media (max-width: 600px) {\n  section.gold-lottery[_ngcontent-%COMP%]   .lottery-form-field[_ngcontent-%COMP%]:before {\n    display: none;\n  }\n}\nsection.gold-lottery[_ngcontent-%COMP%]   .lottery-form-field[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  width: 100%;\n  margin-bottom: 10px;\n  display: block;\n  font-size: 14px;\n  color: gray;\n  font-weight: 500;\n}\n.bg-win[_ngcontent-%COMP%] {\n  background-size: cover;\n  background-position: center;\n  background-repeat: no-repeat;\n  background-image: url(\"/assets/img/gold/bg.jpg\");\n}\n.winner-block[_ngcontent-%COMP%] {\n  overflow: visible !important;\n  position: relative;\n  padding: 10px 20px 20px 20px;\n}\n.winner-block[_ngcontent-%COMP%]:before {\n  content: attr(data-title);\n  background-image: url(\"/assets/img/gold/title.svg\");\n  background-position: center;\n  background-size: cover;\n  z-index: 1;\n  position: absolute;\n  left: 0;\n  right: 0;\n  margin: 0 auto;\n  top: -20px;\n  max-width: 300px;\n  width: 100%;\n  text-align: center;\n  padding: 10px;\n  color: white;\n  font-size: 18px;\n}\n.winner-block-img[_ngcontent-%COMP%] {\n  background-color: #fff;\n  background-position: center;\n  background-size: contain;\n  width: 125px;\n  height: 125px;\n  border-radius: 10em;\n  box-shadow: 0px 3px 6px -2px rgba(0, 0, 0, 0.407);\n  border: 8px solid #f4f2f1;\n  margin: 20px auto;\n}\n.winner-block-info[_ngcontent-%COMP%] {\n  background-color: white;\n  border-radius: 10px;\n  padding: 20px 10px;\n  box-shadow: 0px 3px 6px -2px rgba(0, 0, 0, 0.407);\n}\n.winner-block-info-gold[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  flex-wrap: wrap;\n}\n@media (max-width: 700px) {\n  .winner-block-info-gold[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n}\n.winner-block-info-gold[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  margin: 0;\n  width: 100%;\n  padding: 0 20px;\n}\n.winner-block-info-gold[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  margin: 0;\n  padding-bottom: 5px;\n  padding-top: 5px;\n  border-bottom: 1px solid gray;\n  font-size: 14px;\n  width: 100%;\n}\n.winner-block-info-gold[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: #892734;\n}\n.winner-block-info-gold-left[_ngcontent-%COMP%] {\n  width: 50%;\n  padding-left: 15px;\n}\n@media (max-width: 700px) {\n  .winner-block-info-gold-left[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\n.winner-block-info-gold-right[_ngcontent-%COMP%] {\n  width: 50%;\n}\n@media (max-width: 700px) {\n  .winner-block-info-gold-right[_ngcontent-%COMP%] {\n    width: 100%;\n    padding-left: 15px;\n  }\n}\n.winner-block-info-text[_ngcontent-%COMP%] {\n  text-align: center;\n  width: 100%;\n  display: block;\n  font-size: 18px;\n  padding: 15px 10px;\n}\n@media (max-width: 700px) {\n  .winner-block-info-text[_ngcontent-%COMP%] {\n    padding: 15px 10px 5px 10px;\n  }\n}\n.winner-block-info-addreses[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  padding: 0 20px;\n}\n@media (max-width: 700px) {\n  .winner-block-info-addreses[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n}\n.winner-block-info-addreses-left[_ngcontent-%COMP%], .winner-block-info-addreses-right[_ngcontent-%COMP%] {\n  width: 50%;\n  border-left: 1.5px solid #000;\n  padding-left: 1px;\n  display: flex;\n  flex-direction: column;\n  padding-left: 10px;\n}\n@media (max-width: 700px) {\n  .winner-block-info-addreses-left[_ngcontent-%COMP%], .winner-block-info-addreses-right[_ngcontent-%COMP%] {\n    border-left: none;\n    width: 100%;\n    margin-top: 10px;\n    text-align: center;\n  }\n}\n.winner-block-info-addreses-address[_ngcontent-%COMP%] {\n  font-size: 10px;\n  color: #892734;\n  margin-top: 2px;\n}\n.winner-block-info-addreses-text[_ngcontent-%COMP%] {\n  font-size: 12px;\n}\n.winner-block-info-addreses-text[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: #892734;\n}\n.error-text[_ngcontent-%COMP%] {\n  color: #892734;\n  margin-left: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9nbGViL3Byb2plY3RzL2R1Y2F0dXMtc2l0ZS9zcmMvc2Nzcy9fdmFycy5zY3NzIiwiL1VzZXJzL2dsZWIvcHJvamVjdHMvZHVjYXR1cy1zaXRlL3NyYy9zY3NzL19taXhpbnMuc2NzcyIsInNyYy9hcHAvcGFnZXMvZ29sZC1sb3R0ZXJ5L2dvbGQtbG90dGVyeS5jb21wb25lbnQuc2NzcyIsIi9Vc2Vycy9nbGViL3Byb2plY3RzL2R1Y2F0dXMtc2l0ZS9zcmMvYXBwL3BhZ2VzL2dvbGQtbG90dGVyeS9nb2xkLWxvdHRlcnkuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBSVEsK0pBQUE7QUMyQlI7RUFDQyxXQUFBO0VBQ0EsY0FBQTtFQUNBLFdBQUE7QUM3QkQ7QURnQ0E7RUFDQyxjQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUM3QkQ7QUQrQkM7RUFDQyxtQkFBQTtFQUNBLGtCQUFBO0VBQ0Esc0JBQUE7QUM3QkY7QUR5TUE7OztHQUFBO0FFcE5JO0VBQ0ksZ0NBQUE7QURrQlI7QUNmSTtFQUNJLHlCQUFBO0FEaUJSO0FDZEk7RUFDSSxrQkFBQTtBRGdCUjtBQ2JJO0VBQ0ksa0JBQUE7QURlUjtBQ1pJO0VBQ0ksZ0JBQUE7RUFDQSxXQUFBO0VBQ0EsY0FBQTtBRGNSO0FDVlE7RUFDSSxhQUFBO0VBQ0Esa0RBQUE7RUFDQSwyQkFBQTtFQUNBLHNCQUFBO0VBQ0EsNEJBQUE7QURZWjtBRGlIRTtFRWxJTTtJQVFRLGtCQUFBO0VEYWQ7QUFDRjtBRDRHRTtFRWxJTTtJQVlRLGtCQUFBO0VEY2Q7QUFDRjtBQ1pZO0VBQ0ksa0JBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBRGNoQjtBQ1pnQjtFQUNJLDBDQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0FEY3BCO0FDVlk7RUFDSSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsY0FBQTtFQUNBLG1CQUFBO0FEWWhCO0FDVmdCO0VBQ0kseUJIdkNYO0VHd0NXLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxpQ0FBQTtFQUNBLGVBQUE7RUFDQSxxQkFBQTtBRFlwQjtBQ1ZvQjtFQUNJLHlCSG5EakI7RUdvRGlCLFlBQUE7QURZeEI7QUNSZ0I7RUFDSSx1QkFBQTtFQUNBLDBCQUFBO0FEVXBCO0FDUm9CO0VBQ0ksdUJBQUE7RUFDQSxXQUFBO0FEVXhCO0FDTFk7RUFDSSxhQUFBO0VBQ0EsMENBQUE7RUFDQSxjQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBRE9oQjtBQ0xnQjtFQUNJLGtCQUFBO0VBQ0EsaUJBQUE7QURPcEI7QUNIWTtFQUNJLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSx5Qkh6Rko7QUU4Rlo7QUNIZ0I7RUFDSSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0FES3BCO0FDRFk7RUFDSSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0FER2hCO0FDRGdCO0VBQ0ksWUFBQTtBREdwQjtBQ0FnQjtFQUNJLGVBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLHFCQUFBO0VBQ0EseUJIakhSO0VHa0hRLGFBQUE7RUFDQSxXQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0Esd0JBQUE7RUFDQSx1QkFBQTtBREVwQjtBQ0FvQjtFQUVJLFlBQUE7RUFDQSx5Qkh4SGpCO0FFeUhQO0FDSVk7RUFDSSx5Qkg3SFA7RUc4SE8sb0JBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsMENBQUE7QURGaEI7QUNXWTtFQUNJLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7RUFDQSxhQUFBO0VBQ0EsZ0JBQUE7RUFDQSx3QkFBQTtLQUFBLHFCQUFBO1VBQUEsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLHlCQUFBO0VBQ0Esc0JBQUE7RUFDQSxxQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtBRFRoQjtBQ1dnQjtFQUNJLGNIaktSO0FFd0paO0FDYVk7RUFDSSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0VBQ0EsK0JBQUE7RUFDQSxjQUFBO0FEWGhCO0FEM0JFO0VFaUNVO0lBUVEsMEJBQUE7RURWbEI7QUFDRjtBQ1lnQjtFQUNJLGFBQUE7RUFDQSwrQkFBQTtFQUNBLGNBQUE7RUFDQSx1QkFBQTtFQUNBLGdCQUFBO0VBQ0Esc0JBQUE7QURWcEI7QUNZb0I7RUFDSSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7QURWeEI7QUNZd0I7RUFDSSxpQkFBQTtFQUNBLGtCQUFBO0FEVjVCO0FDY29CO0VBQ0ksV0FBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7QURaeEI7QUNnQmdCO0VBQ0kseUJBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkhyTlI7RUdzTlEsV0gvTlo7RUdnT1ksZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7QURkcEI7QUR2RUU7RUV5RWM7SUFlUSxhQUFBO0VEYnRCO0FBQ0Y7QUNnQmdCO0VBQ0ksV0FBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7QURkcEI7QUNxQkE7RUFDSSxzQkFBQTtFQUNBLDJCQUFBO0VBQ0EsNEJBQUE7RUFDQSxnREFBQTtBRGxCSjtBQ3FCQTtFQUNJLDRCQUFBO0VBQ0Esa0JBQUE7RUFDQSw0QkFBQTtBRGxCSjtBQ29CSTtFQUNJLHlCQUFBO0VBQ0EsbURBQUE7RUFDQSwyQkFBQTtFQUNBLHNCQUFBO0VBQ0EsVUFBQTtFQUNBLGtCQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUFDQSxjQUFBO0VBQ0EsVUFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0FEbEJSO0FDcUJJO0VBQ0ksc0JBQUE7RUFDQSwyQkFBQTtFQUNBLHdCQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGlEQUFBO0VBQ0EseUJBQUE7RUFDQSxpQkFBQTtBRG5CUjtBQ3NCSTtFQUNJLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGlEQUFBO0FEcEJSO0FDc0JRO0VBQ0ksYUFBQTtFQUNBLDhCQUFBO0VBQ0EsZUFBQTtBRHBCWjtBRHpJRTtFRTBKTTtJQU1RLHNCQUFBO0VEbkJkO0FBQ0Y7QUNxQlk7RUFDSSxTQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7QURuQmhCO0FDcUJnQjtFQUNJLFNBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsNkJBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtBRG5CcEI7QUNxQm9CO0VBQ0ksY0hyVFo7QUVrU1o7QUN3Qlk7RUFDSSxVQUFBO0VBQ0Esa0JBQUE7QUR0QmhCO0FEbEtFO0VFc0xVO0lBS1EsV0FBQTtFRHJCbEI7QUFDRjtBQ3dCWTtFQUNJLFVBQUE7QUR0QmhCO0FEMUtFO0VFK0xVO0lBSVEsV0FBQTtJQUNBLGtCQUFBO0VEckJsQjtBQUNGO0FDeUJRO0VBQ0ksa0JBQUE7RUFDQSxXQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtBRHZCWjtBRHZMRTtFRXlNTTtJQVFRLDJCQUFBO0VEdEJkO0FBQ0Y7QUN5QlE7RUFDSSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxlQUFBO0FEdkJaO0FEak1FO0VFcU5NO0lBTVEsc0JBQUE7RUR0QmQ7QUFDRjtBQ3dCWTtFQUVJLFVBQUE7RUFDQSw2QkFBQTtFQUNBLGlCQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7QUR2QmhCO0FEOU1FO0VFOE5VO0lBVVEsaUJBQUE7SUFDQSxXQUFBO0lBQ0EsZ0JBQUE7SUFDQSxrQkFBQTtFRHRCbEI7QUFDRjtBQ3lCWTtFQUNJLGVBQUE7RUFDQSxjSHJYSjtFR3NYSSxlQUFBO0FEdkJoQjtBQzBCWTtFQUNJLGVBQUE7QUR4QmhCO0FDMEJnQjtFQUNJLGVBQUE7RUFDQSxjSDlYUjtBRXNXWjtBQ2lDQTtFQUNJLGNIeFlRO0VHeVlSLGlCQUFBO0FEOUJKIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvZ29sZC1sb3R0ZXJ5L2dvbGQtbG90dGVyeS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gbWFpbiB2YXJpYWJsZXNcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG5AaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PU1vbnRzZXJyYXQ6MTAwLDEwMGksMjAwLDIwMGksMzAwLDMwMGksNDAwLDQwMGksNTAwLDUwMGksNjAwLDYwMGksNzAwLDcwMGksODAwLDgwMGksOTAwLDkwMGkmZGlzcGxheT1zd2FwJyk7XG5cbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gYWRkaXRpb25hbCB2YXJpYWJsZXNcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG5cbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gY29sb3JzXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuJGJsYWNrOiAjMDAwO1xuJGdyYXk6ICM4MDgwODA7XG4kd2hpdGU6ICNmZmY7XG4kYmx1ZTogIzAwRjtcbiRwdXJwbGU6ICM4QTRENzY7XG4kcGluazogI0ZBN0M5MTtcbiRicm93bjogIzc1Nzc2MztcbiRiZWlnZS1saWdodDogI0QwRDFDRDtcbiRiZWlnZS1saWdodGVyLTE6ICNFRkYwRUI7XG4kYmVpZ2UtbGlnaHRlci0yOiAjRjRGNEY0O1xuXG4kYnJvd24tcmVkOiAjODkyNzM0O1xuJGdvbGQteWVsbG93OiAjRThDMjJDO1xuJGRhcmstZ3JleTogIzIzMjQxZjtcbiRncmV5OiAjNGQ0YzRkO1xuJGdvbGQ6ICNEM0MxOTg7XG4kZ29sZC0yOiAjRjBFQUUzO1xuIiwiLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBtYWluIG1peGluc1xuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbkBtaXhpbiBmb250LWZhY2UoJGZvbnQtZmFtaWx5LCAkZmlsZS1wYXRoLCAkd2VpZ2h0OiBub3JtYWwsICRzdHlsZTogbm9ybWFsLCAkYXNzZXQtcGlwZWxpbmU6IGZhbHNlKSB7XG5cdEBmb250LWZhY2Uge1xuXHRcdGZvbnQtZmFtaWx5OiAkZm9udC1mYW1pbHk7XG5cdFx0Zm9udC13ZWlnaHQ6ICR3ZWlnaHQ7XG5cdFx0Zm9udC1zdHlsZTogJHN0eWxlO1xuXG5cdFx0QGlmICRhc3NldC1waXBlbGluZT09dHJ1ZSB7XG5cdFx0XHRzcmM6IGZvbnQtdXJsKCcjeyRmaWxlLXBhdGh9LmVvdCcpO1xuXHRcdFx0c3JjOiBmb250LXVybCgnI3skZmlsZS1wYXRofS5lb3Q/I2llZml4JykgZm9ybWF0KCdlbWJlZGRlZC1vcGVudHlwZScpLFxuXHRcdFx0Zm9udC11cmwoJyN7JGZpbGUtcGF0aH0ud29mZicpIGZvcm1hdCgnd29mZicpLFxuXHRcdFx0Zm9udC11cmwoJyN7JGZpbGUtcGF0aH0udHRmJykgZm9ybWF0KCd0cnVldHlwZScpO1xuXHRcdH1cblxuXHRcdEBlbHNlIHtcblx0XHRcdHNyYzogdXJsKCcjeyRmaWxlLXBhdGh9LmVvdCcpO1xuXHRcdFx0c3JjOiB1cmwoJyN7JGZpbGUtcGF0aH0uZW90PyNpZWZpeCcpIGZvcm1hdCgnZW1iZWRkZWQtb3BlbnR5cGUnKSxcblx0XHRcdHVybCgnI3skZmlsZS1wYXRofS53b2ZmJykgZm9ybWF0KCd3b2ZmJyksXG5cdFx0XHR1cmwoJyN7JGZpbGUtcGF0aH0udHRmJykgZm9ybWF0KCd0cnVldHlwZScpO1xuXHRcdH1cblx0fVxufVxuXG5AbWl4aW4gbm90ZXh0IHtcblx0b3ZlcmZsb3c6IGhpZGRlbjtcblx0dGV4dC1pbmRlbnQ6IC05OTk5cHg7XG59XG5cbi5jbGVhcmZpeDphZnRlciB7XG5cdGNvbnRlbnQ6IFwiXCI7XG5cdGRpc3BsYXk6IHRhYmxlO1xuXHRjbGVhcjogYm90aDtcbn1cblxuLmNlbnRlcmVkIHtcblx0ZGlzcGxheTogdGFibGU7XG5cdHdpZHRoOiAxMDAlO1xuXHRoZWlnaHQ6IDEwMCU7XG5cblx0Pioge1xuXHRcdGRpc3BsYXk6IHRhYmxlLWNlbGw7XG5cdFx0dGV4dC1hbGlnbjogY2VudGVyO1xuXHRcdHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG5cdH1cbn1cblxuQG1peGluIHBsYWNlaG9sZGVyQ29sb3IoJGlucHV0LXRleHQtY29sb3IpIHtcblx0Jjo6LXdlYmtpdC1pbnB1dC1wbGFjZWhvbGRlciB7XG5cdFx0Y29sb3I6ICRpbnB1dC10ZXh0LWNvbG9yO1xuXHR9XG5cblx0JjotbW96LXBsYWNlaG9sZGVyIHtcblx0XHRjb2xvcjogJGlucHV0LXRleHQtY29sb3I7XG5cdFx0b3BhY2l0eTogMTtcblx0fVxuXG5cdCY6Oi1tb3otcGxhY2Vob2xkZXIge1xuXHRcdGNvbG9yOiAkaW5wdXQtdGV4dC1jb2xvcjtcblx0XHRvcGFjaXR5OiAxO1xuXHR9XG5cblx0JjotbXMtaW5wdXQtcGxhY2Vob2xkZXIge1xuXHRcdGNvbG9yOiAkaW5wdXQtdGV4dC1jb2xvcjtcblx0fVxuXG5cdCY6OnBsYWNlaG9sZGVyIHtcblx0XHRjb2xvcjogJGlucHV0LXRleHQtY29sb3I7XG5cdFx0b3BhY2l0eTogMTtcblx0fVxuXG5cdCY6Zm9jdXM6LW1vei1wbGFjZWhvbGRlciB7XG5cdFx0Y29sb3I6IHRyYW5zcGFyZW50O1xuXHRcdG9wYWNpdHk6IDE7XG5cdH1cblxuXHQmOmZvY3VzOjotbW96LXBsYWNlaG9sZGVyIHtcblx0XHRjb2xvcjogdHJhbnNwYXJlbnQ7XG5cdFx0b3BhY2l0eTogMTtcblx0fVxuXG5cdCY6Zm9jdXM6Oi13ZWJraXQtaW5wdXQtcGxhY2Vob2xkZXIge1xuXHRcdGNvbG9yOiB0cmFuc3BhcmVudDtcblx0fVxuXG5cdCY6Zm9jdXM6LW1zLWlucHV0LXBsYWNlaG9sZGVyIHtcblx0XHRjb2xvcjogdHJhbnNwYXJlbnQ7XG5cdH1cblxuXHQmOmZvY3VzOjpwbGFjZWhvbGRlciB7XG5cdFx0Y29sb3I6IHRyYW5zcGFyZW50O1xuXHR9XG59XG5cbkBtaXhpbiBjbGVhcmZpeCB7XG5cdCY6YWZ0ZXIge1xuXHRcdGNvbnRlbnQ6IFwiIFwiO1xuXHRcdGRpc3BsYXk6IGJsb2NrO1xuXHRcdGNsZWFyOiBib3RoO1xuXHR9XG59XG5cbi8vIGNsZWFyIHNlbGVjdCB3aXRob3V0IGRlZmF1bHQgYnV0dG9uXG5AbWl4aW4gY2xlYXJTZWxlY3Qge1xuXHQtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XG5cdC1tb3otYXBwZWFyYW5jZTogbm9uZTtcblx0YXBwZWFyYW5jZTogbm9uZTtcblx0LXdlYmtpdC1ib3JkZXItcmFkaXVzOiAwO1xuXHQtbW96LWJvcmRlci1yYWRpdXM6IDA7XG5cdGJvcmRlci1yYWRpdXM6IDA7XG59XG5cbi8vIGVsZW1lbnRzIGdldCBhcHBlbmRlZCB3aXRoIFwiX19cIiBhbmQgdGhlICRuYW1lXG5AbWl4aW4gZSgkbmFtZSkge1xuXHRAYXQtcm9vdCAjeyZ9XyN7JG5hbWV9IHtcblx0XHRAY29udGVudDtcblx0fVxufVxuXG4vLyBtb2RpZmllcnMgZ2V0IGFwcGVuZGVkIHdpdGggXCItLVwiIGFuZCB0aGUgJG5hbWVcbkBtaXhpbiBtKCRuYW1lKSB7XG5cdEBhdC1yb290ICN7Jn0tLSN7JG5hbWV9IHtcblx0XHRAY29udGVudDtcblx0fVxufVxuXG4vLyBicmVha3BvaW50c1xuQG1peGluIGIoJHBvaW50KSB7XG5cdEBpZiAkcG9pbnQ9PWRlc2t0b3Age1xuXHRcdEBtZWRpYSAobWF4LXdpZHRoOiAxMzY2cHgpIGFuZCAobWluLXdpZHRoOjEwMjRweCkge1xuXHRcdFx0QGNvbnRlbnQgO1xuXHRcdH1cblx0fVxuXG5cdEBlbHNlIGlmICRwb2ludD09dGFibGV0IHtcblx0XHRAbWVkaWEgKG1heC13aWR0aDogMTAwMHB4KSB7XG5cdFx0XHRAY29udGVudCA7XG5cdFx0fVxuXHR9XG5cblx0QGVsc2UgaWYgJHBvaW50PT1tb2JpbGUge1xuXHRcdEBtZWRpYSAobWF4LXdpZHRoOiA3NjdweCkge1xuXHRcdFx0QGNvbnRlbnQgO1xuXHRcdH1cblx0fVxuXG5cdEBlbHNlIGlmICRwb2ludD09bW9iaWxlM3gge1xuXG5cdFx0QG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAoLXdlYmtpdC1taW4tZGV2aWNlLXBpeGVsLXJhdGlvOiAzKSxcblx0XHRvbmx5IHNjcmVlbiBhbmQgKG1pbi1yZXNvbHV0aW9uOiAzZHBweCksXG5cdFx0b25seSBzY3JlZW4gYW5kIChtaW4tcmVzb2x1dGlvbjogMzUwZHBpKSB7XG5cdFx0XHRAY29udGVudCA7XG5cdFx0fVxuXHR9XG5cblx0QGVsc2Uge1xuXHRcdEBtZWRpYSAobWF4LXdpZHRoOiAkcG9pbnQgKyAncHgnKSB7XG5cdFx0XHRAY29udGVudCA7XG5cdFx0fVxuXHR9XG59XG5cbi8vIGJyZWFrcG9pbnRzXG5AbWl4aW4gYmIoJHBvaW50TWF4LCAkcG9pbnRNaW4pIHtcblx0QG1lZGlhIChtYXgtd2lkdGg6ICRwb2ludE1heCArICdweCcpIGFuZCAobWluLXdpZHRoOiAkcG9pbnRNaW4gKyAncHgnKSB7XG5cdFx0QGNvbnRlbnQgO1xuXHR9XG59XG5cbkBtaXhpbiBpZSgpIHtcblxuXHRAbWVkaWEgc2NyZWVuIGFuZCAoLW1zLWhpZ2gtY29udHJhc3Q6IGFjdGl2ZSksXG5cdCgtbXMtaGlnaC1jb250cmFzdDogbm9uZSkge1xuXHRcdEBjb250ZW50IDtcblx0fVxufVxuXG5AbWl4aW4gYmVmb3JlLWltZygkZGlzcGxheSwgJHdpZHRoLCAkaGVpZ2h0LCAkcG9zaXRpb24pIHtcblx0QGF0LXJvb3QgI3smfTpiZWZvcmUge1xuXHRcdGNvbnRlbnQ6ICcnO1xuXHRcdGRpc3BsYXk6ICRkaXNwbGF5O1xuXG5cdFx0QGlmICRwb3NpdGlvbj09YSB7XG5cdFx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XG5cdFx0fVxuXG5cdFx0QGlmICRwb3NpdGlvbj09ciB7XG5cdFx0XHRwb3NpdGlvbjogcmVsYXRpdmU7XG5cdFx0fVxuXG5cdFx0d2lkdGg6ICR3aWR0aDtcblx0XHRoZWlnaHQ6ICRoZWlnaHQ7XG5cdFx0QGNvbnRlbnQ7XG5cdH1cbn1cblxuQG1peGluIGFmdGVyLWltZygkZGlzcGxheSwgJHdpZHRoLCAkaGVpZ2h0LCAkcG9zaXRpb24pIHtcblx0QGF0LXJvb3QgI3smfTphZnRlciB7XG5cdFx0Y29udGVudDogJyc7XG5cdFx0ZGlzcGxheTogJGRpc3BsYXk7XG5cblx0XHRAaWYgJHBvc2l0aW9uPT1hIHtcblx0XHRcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcblx0XHR9XG5cblx0XHRAaWYgJHBvc2l0aW9uPT1yIHtcblx0XHRcdHBvc2l0aW9uOiByZWxhdGl2ZTtcblx0XHR9XG5cblx0XHR3aWR0aDogJHdpZHRoO1xuXHRcdGhlaWdodDogJGhlaWdodDtcblx0XHRAY29udGVudDtcblx0fVxufVxuXG4vKiByZW0gZm9udCBzaXplIHdpdGggZmFsbGJhY2sgfCB1c2FnZTpcblx0cCB7XG5cdFx0QGluY2x1ZGUgZm9udC1zaXplKDE0cHgpXG5cdH0qL1xuXG5AZnVuY3Rpb24gY2FsY3VsYXRlUmVtKCRzaXplKSB7XG5cdCRyZW1TaXplOiAkc2l6ZSAvIDE2cHg7XG5cdEByZXR1cm4gJHJlbVNpemUgKiAxcmVtO1xufVxuXG5AbWl4aW4gZm9udC1zaXplKCRzaXplKSB7XG5cdGZvbnQtc2l6ZTogJHNpemU7XG5cdGZvbnQtc2l6ZTogY2FsY3VsYXRlUmVtKCRzaXplKTtcbn1cblxuQG1peGluIHRleHRDdXQoJGNvbCwgJGhlaWdodCkge1xuXHRkaXNwbGF5OiAtd2Via2l0LWJveDtcblx0LXdlYmtpdC1saW5lLWNsYW1wOiAkY29sO1xuXHQtd2Via2l0LWJveC1vcmllbnQ6IHZlcnRpY2FsO1xuXHRvdmVyZmxvdzogaGlkZGVuO1xuXHRtYXgtaGVpZ2h0OiAkaGVpZ2h0O1xufVxuXG4vLyBidXR0b25zXG5cbkBtaXhpbiBidG4tZ3JhZGllbnQoJGNUZXh0LCAkY0hvdmVyLCAkZGlyZWN0aW9uLCAkY0ZpcnN0LCAkY1NlY29ucywgJGNUaGlyZCwgJGhvdmVyKSB7XG5cdGNvbG9yOiAkY1RleHQ7XG5cdHRyYW5zaXRpb246IDAuNXM7XG5cdGJhY2tncm91bmQtc2l6ZTogMjAwJSBhdXRvO1xuXHRiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoJGRpcmVjdGlvbiwgJGNGaXJzdCAwJSwgJGNTZWNvbnMgNTElLCAkY1RoaXJkIDEwMCUpO1xuXG5cdCY6aG92ZXIge1xuXHRcdHRleHQtZGVjb3JhdGlvbjogbm9uZTtcblx0XHRiYWNrZ3JvdW5kLXBvc2l0aW9uOiAkaG92ZXI7XG5cdFx0Y29sb3I6ICRjSG92ZXI7XG5cdFx0Ym94LXNoYWRvdzogMHB4IDIwcHggMzBweCAtMTVweCAkY1RoaXJkO1xuXHR9XG59XG5cbkBtaXhpbiBncmFkaWVudCgkdG9wLCAkYm90dG9tKSB7XG5cdGJhY2tncm91bmQ6ICR0b3A7XG5cdGJhY2tncm91bmQ6IC1tb3otbGluZWFyLWdyYWRpZW50KHRvcCwgJHRvcCAwJSwgJGJvdHRvbSAxMDAlKTtcblx0YmFja2dyb3VuZDogLXdlYmtpdC1ncmFkaWVudChsaW5lYXIsIGxlZnQgdG9wLCBsZWZ0IGJvdHRvbSwgY29sb3Itc3RvcCgwJSwgJHRvcCksIGNvbG9yLXN0b3AoMTAwJSwgJGJvdHRvbSkpO1xuXHRiYWNrZ3JvdW5kOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudCh0b3AsICR0b3AgMCUsICRib3R0b20gMTAwJSk7XG5cdGJhY2tncm91bmQ6IC1vLWxpbmVhci1ncmFkaWVudCh0b3AsICR0b3AgMCUsICRib3R0b20gMTAwJSk7XG5cdGJhY2tncm91bmQ6IC1tcy1saW5lYXItZ3JhZGllbnQodG9wLCAkdG9wIDAlLCAkYm90dG9tIDEwMCUpO1xuXHRiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCAkdG9wIDAlLCAkYm90dG9tIDEwMCUpO1xuXHRmaWx0ZXI6IHByb2dpZDpEWEltYWdlVHJhbnNmb3JtLk1pY3Jvc29mdC5ncmFkaWVudChzdGFydENvbG9yc3RyPScjeyR0b3B9JywgZW5kQ29sb3JzdHI9JyN7JGJvdHRvbX0gJywgR3JhZGllbnRUeXBlPTApO1xufSIsIkBpbXBvcnQgdXJsKFwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PU1vbnRzZXJyYXQ6MTAwLDEwMGksMjAwLDIwMGksMzAwLDMwMGksNDAwLDQwMGksNTAwLDUwMGksNjAwLDYwMGksNzAwLDcwMGksODAwLDgwMGksOTAwLDkwMGkmZGlzcGxheT1zd2FwXCIpO1xuLmNsZWFyZml4OmFmdGVyIHtcbiAgY29udGVudDogXCJcIjtcbiAgZGlzcGxheTogdGFibGU7XG4gIGNsZWFyOiBib3RoO1xufVxuXG4uY2VudGVyZWQge1xuICBkaXNwbGF5OiB0YWJsZTtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbn1cbi5jZW50ZXJlZCA+ICoge1xuICBkaXNwbGF5OiB0YWJsZS1jZWxsO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG59XG5cbi8qIHJlbSBmb250IHNpemUgd2l0aCBmYWxsYmFjayB8IHVzYWdlOlxuXHRwIHtcblx0XHRAaW5jbHVkZSBmb250LXNpemUoMTRweClcblx0fSovXG5zZWN0aW9uLmdvbGQtbG90dGVyeSAuZXJyb3ItaW5wdXQge1xuICBib3JkZXI6IDFweCBzb2xpZCByZWQgIWltcG9ydGFudDtcbn1cbnNlY3Rpb24uZ29sZC1sb3R0ZXJ5ICNpbnB1dC1jb2RlIHtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbn1cbnNlY3Rpb24uZ29sZC1sb3R0ZXJ5IC5sb3R0ZXJ5LWZvcm0tZmllbGQtaW5wdXQge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5zZWN0aW9uLmdvbGQtbG90dGVyeSAuY29udGFpbmVyIHtcbiAgcGFkZGluZy10b3A6IDEwMHB4O1xufVxuc2VjdGlvbi5nb2xkLWxvdHRlcnkgLmxvdHRlcnkge1xuICBtYXgtd2lkdGg6IDY1MHB4O1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luOiAwIGF1dG87XG59XG5zZWN0aW9uLmdvbGQtbG90dGVyeSAubG90dGVyeS1mb3JtIHtcbiAgcGFkZGluZzogNDBweDtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiL2Fzc2V0cy9pbWcvZ29sZC9sb2dvLnN2Z1wiKTtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICBiYWNrZ3JvdW5kLXNpemU6IDIwMHB4O1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDYwMHB4KSB7XG4gIHNlY3Rpb24uZ29sZC1sb3R0ZXJ5IC5sb3R0ZXJ5LWZvcm0ge1xuICAgIHBhZGRpbmc6IDQwcHggMTBweDtcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDcwMHB4KSB7XG4gIHNlY3Rpb24uZ29sZC1sb3R0ZXJ5IC5sb3R0ZXJ5LWZvcm0ge1xuICAgIHBhZGRpbmc6IDQwcHggMjBweDtcbiAgfVxufVxuc2VjdGlvbi5nb2xkLWxvdHRlcnkgLmxvdHRlcnktZm9ybS1pbmZvIHtcbiAgcGFkZGluZzogMTAwcHggMHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbnNlY3Rpb24uZ29sZC1sb3R0ZXJ5IC5sb3R0ZXJ5LWZvcm0taW5mby10ZXh0IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyMjUsIDIyNSwgMjI1LCAwLjUpO1xuICBwYWRkaW5nOiAxMHB4IDE1cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWF4LXdpZHRoOiAzMDBweDtcbiAgd2lkdGg6IDEwMCU7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGNvbG9yOiBncmF5O1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xufVxuc2VjdGlvbi5nb2xkLWxvdHRlcnkgLmxvdHRlcnktZm9ybS1zd2l0Y2gge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBncmlkLWdhcDogMjBweDtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbn1cbnNlY3Rpb24uZ29sZC1sb3R0ZXJ5IC5sb3R0ZXJ5LWZvcm0tc3dpdGNoLWJ1dHRvbiB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNGMEVBRTM7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcGFkZGluZzogMjBweDtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBjb2xvcjogZ3JheTtcbiAgYm94LXNoYWRvdzogMHB4IDNweCA2cHggIzAwMDAwMDJlO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHRyYW5zaXRpb246IDAuNHMgZWFzZTtcbn1cbnNlY3Rpb24uZ29sZC1sb3R0ZXJ5IC5sb3R0ZXJ5LWZvcm0tc3dpdGNoLWJ1dHRvbjpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNEM0MxOTg7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cbnNlY3Rpb24uZ29sZC1sb3R0ZXJ5IC5sb3R0ZXJ5LWZvcm0tc3dpdGNoIC5hY3RpdmUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgY3Vyc29yOiBkZWZhdWx0ICFpbXBvcnRhbnQ7XG59XG5zZWN0aW9uLmdvbGQtbG90dGVyeSAubG90dGVyeS1mb3JtLXN3aXRjaCAuYWN0aXZlOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIGNvbG9yOiBncmF5O1xufVxuc2VjdGlvbi5nb2xkLWxvdHRlcnkgLmxvdHRlcnktZm9ybS1jb2RlIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoNCwgODBweCkgMWZyO1xuICBncmlkLWdhcDogMTBweDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5zZWN0aW9uLmdvbGQtbG90dGVyeSAubG90dGVyeS1mb3JtLWNvZGUgaW5wdXQge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDEwcHggNXB4O1xufVxuc2VjdGlvbi5nb2xkLWxvdHRlcnkgLmxvdHRlcnktZm9ybS10b3Age1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgcGFkZGluZzogMjVweCAzMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjODkyNzM0O1xufVxuc2VjdGlvbi5nb2xkLWxvdHRlcnkgLmxvdHRlcnktZm9ybS10b3AtdGV4dCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBjb2xvcjogd2hpdGU7XG59XG5zZWN0aW9uLmdvbGQtbG90dGVyeSAubG90dGVyeS1mb3JtLWZvb3RlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwYWRkaW5nOiAxMHB4IDBweDtcbn1cbnNlY3Rpb24uZ29sZC1sb3R0ZXJ5IC5sb3R0ZXJ5LWZvcm0tZm9vdGVyIC5kaXNhYmxlZCB7XG4gIG9wYWNpdHk6IDAuODtcbn1cbnNlY3Rpb24uZ29sZC1sb3R0ZXJ5IC5sb3R0ZXJ5LWZvcm0tZm9vdGVyLWJ1dHRvbiB7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgY29sb3I6IHdoaXRlO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHRyYW5zaXRpb246IDAuNHMgZWFzZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzg5MjczNDtcbiAgcGFkZGluZzogMTBweDtcbiAgd2lkdGg6IDEwMCU7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG91dGxpbmU6IG5vbmUgIWltcG9ydGFudDtcbiAgYm9yZGVyOiBub25lICFpbXBvcnRhbnQ7XG59XG5zZWN0aW9uLmdvbGQtbG90dGVyeSAubG90dGVyeS1mb3JtLWZvb3Rlci1idXR0b246aG92ZXIge1xuICBjb2xvcjogd2hpdGU7XG4gIGJhY2tncm91bmQtY29sb3I6ICNEM0MxOTg7XG59XG5zZWN0aW9uLmdvbGQtbG90dGVyeSAubG90dGVyeS1mb3JtLWJsb2NrIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0YwRUFFMztcbiAgcGFkZGluZy1ib3R0b206IDMwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGJveC1zaGFkb3c6IDBweCA0cHggNnB4IHJnYmEoMCwgMCwgMCwgMC4zKTtcbn1cbnNlY3Rpb24uZ29sZC1sb3R0ZXJ5IC5sb3R0ZXJ5LWZvcm0taW5wdXQge1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG4gIHBhZGRpbmc6IDEwcHggMjBweDtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBoZWlnaHQ6IDQ1cHg7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBvdXRsaW5lOiBub25lO1xuICBib3gtc2hhZG93OiBub25lO1xuICBhcHBlYXJhbmNlOiBub25lO1xuICBib3JkZXI6IG5vbmU7XG4gIHdpZHRoOiAxMDAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjNmM2YzO1xuICBib3JkZXI6IDFweCBzb2xpZCAjZGRkO1xuICBsZXR0ZXItc3BhY2luZzogMS4xcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5zZWN0aW9uLmdvbGQtbG90dGVyeSAubG90dGVyeS1mb3JtLWlucHV0LWVycm9yIHtcbiAgY29sb3I6ICM4OTI3MzQ7XG59XG5zZWN0aW9uLmdvbGQtbG90dGVyeSAubG90dGVyeS1mb3JtLWZpZWxkIHtcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogODBweCAxZnI7XG4gIGdyaWQtZ2FwOiAxNXB4O1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDYwMHB4KSB7XG4gIHNlY3Rpb24uZ29sZC1sb3R0ZXJ5IC5sb3R0ZXJ5LWZvcm0tZmllbGQge1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xuICB9XG59XG5zZWN0aW9uLmdvbGQtbG90dGVyeSAubG90dGVyeS1mb3JtLWZpZWxkLWNoZWNrIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiA4MHB4IDFmcjtcbiAgZ3JpZC1nYXA6IDIwcHg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogZW5kO1xuICBwYWRkaW5nOiAyMHB4IDAgNDBweCAwO1xufVxuc2VjdGlvbi5nb2xkLWxvdHRlcnkgLmxvdHRlcnktZm9ybS1maWVsZC1jaGVjayBpbnB1dCB7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIHBhZGRpbmc6IDEwcHggMjBweDtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbn1cbnNlY3Rpb24uZ29sZC1sb3R0ZXJ5IC5sb3R0ZXJ5LWZvcm0tZmllbGQtY2hlY2sgaW5wdXQ6bnRoLWNoaWxkKDEpIHtcbiAgcGFkZGluZzogMTBweCA1cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbnNlY3Rpb24uZ29sZC1sb3R0ZXJ5IC5sb3R0ZXJ5LWZvcm0tZmllbGQtY2hlY2sgbGFiZWwge1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgY29sb3I6IGdyYXk7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG59XG5zZWN0aW9uLmdvbGQtbG90dGVyeSAubG90dGVyeS1mb3JtLWZpZWxkOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IGF0dHIoZGF0YS10aXRsZSk7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwYWRkaW5nOiAxMHB4O1xuICBmb250LXNpemU6IDE4cHg7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzg5MjczNDtcbiAgY29sb3I6ICNmZmY7XG4gIG1hcmdpbi10b3A6IDMwcHg7XG4gIGhlaWdodDogNDNweDtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA2MDBweCkge1xuICBzZWN0aW9uLmdvbGQtbG90dGVyeSAubG90dGVyeS1mb3JtLWZpZWxkOmJlZm9yZSB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxufVxuc2VjdGlvbi5nb2xkLWxvdHRlcnkgLmxvdHRlcnktZm9ybS1maWVsZCBsYWJlbCB7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICBkaXNwbGF5OiBibG9jaztcbiAgZm9udC1zaXplOiAxNHB4O1xuICBjb2xvcjogZ3JheTtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbn1cblxuLmJnLXdpbiB7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiL2Fzc2V0cy9pbWcvZ29sZC9iZy5qcGdcIik7XG59XG5cbi53aW5uZXItYmxvY2sge1xuICBvdmVyZmxvdzogdmlzaWJsZSAhaW1wb3J0YW50O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHBhZGRpbmc6IDEwcHggMjBweCAyMHB4IDIwcHg7XG59XG4ud2lubmVyLWJsb2NrOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IGF0dHIoZGF0YS10aXRsZSk7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi9hc3NldHMvaW1nL2dvbGQvdGl0bGUuc3ZnXCIpO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIHotaW5kZXg6IDE7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIG1hcmdpbjogMCBhdXRvO1xuICB0b3A6IC0yMHB4O1xuICBtYXgtd2lkdGg6IDMwMHB4O1xuICB3aWR0aDogMTAwJTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwYWRkaW5nOiAxMHB4O1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtc2l6ZTogMThweDtcbn1cbi53aW5uZXItYmxvY2staW1nIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XG4gIHdpZHRoOiAxMjVweDtcbiAgaGVpZ2h0OiAxMjVweDtcbiAgYm9yZGVyLXJhZGl1czogMTBlbTtcbiAgYm94LXNoYWRvdzogMHB4IDNweCA2cHggLTJweCByZ2JhKDAsIDAsIDAsIDAuNDA3KTtcbiAgYm9yZGVyOiA4cHggc29saWQgI2Y0ZjJmMTtcbiAgbWFyZ2luOiAyMHB4IGF1dG87XG59XG4ud2lubmVyLWJsb2NrLWluZm8ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgcGFkZGluZzogMjBweCAxMHB4O1xuICBib3gtc2hhZG93OiAwcHggM3B4IDZweCAtMnB4IHJnYmEoMCwgMCwgMCwgMC40MDcpO1xufVxuLndpbm5lci1ibG9jay1pbmZvLWdvbGQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGZsZXgtd3JhcDogd3JhcDtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA3MDBweCkge1xuICAud2lubmVyLWJsb2NrLWluZm8tZ29sZCB7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgfVxufVxuLndpbm5lci1ibG9jay1pbmZvLWdvbGQgdWwge1xuICBtYXJnaW46IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nOiAwIDIwcHg7XG59XG4ud2lubmVyLWJsb2NrLWluZm8tZ29sZCB1bCBsaSB7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZy1ib3R0b206IDVweDtcbiAgcGFkZGluZy10b3A6IDVweDtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGdyYXk7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgd2lkdGg6IDEwMCU7XG59XG4ud2lubmVyLWJsb2NrLWluZm8tZ29sZCB1bCBsaSBzcGFuIHtcbiAgY29sb3I6ICM4OTI3MzQ7XG59XG4ud2lubmVyLWJsb2NrLWluZm8tZ29sZC1sZWZ0IHtcbiAgd2lkdGg6IDUwJTtcbiAgcGFkZGluZy1sZWZ0OiAxNXB4O1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDcwMHB4KSB7XG4gIC53aW5uZXItYmxvY2staW5mby1nb2xkLWxlZnQge1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG59XG4ud2lubmVyLWJsb2NrLWluZm8tZ29sZC1yaWdodCB7XG4gIHdpZHRoOiA1MCU7XG59XG5AbWVkaWEgKG1heC13aWR0aDogNzAwcHgpIHtcbiAgLndpbm5lci1ibG9jay1pbmZvLWdvbGQtcmlnaHQge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHBhZGRpbmctbGVmdDogMTVweDtcbiAgfVxufVxuLndpbm5lci1ibG9jay1pbmZvLXRleHQge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHdpZHRoOiAxMDAlO1xuICBkaXNwbGF5OiBibG9jaztcbiAgZm9udC1zaXplOiAxOHB4O1xuICBwYWRkaW5nOiAxNXB4IDEwcHg7XG59XG5AbWVkaWEgKG1heC13aWR0aDogNzAwcHgpIHtcbiAgLndpbm5lci1ibG9jay1pbmZvLXRleHQge1xuICAgIHBhZGRpbmc6IDE1cHggMTBweCA1cHggMTBweDtcbiAgfVxufVxuLndpbm5lci1ibG9jay1pbmZvLWFkZHJlc2VzIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBwYWRkaW5nOiAwIDIwcHg7XG59XG5AbWVkaWEgKG1heC13aWR0aDogNzAwcHgpIHtcbiAgLndpbm5lci1ibG9jay1pbmZvLWFkZHJlc2VzIHtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICB9XG59XG4ud2lubmVyLWJsb2NrLWluZm8tYWRkcmVzZXMtbGVmdCwgLndpbm5lci1ibG9jay1pbmZvLWFkZHJlc2VzLXJpZ2h0IHtcbiAgd2lkdGg6IDUwJTtcbiAgYm9yZGVyLWxlZnQ6IDEuNXB4IHNvbGlkICMwMDA7XG4gIHBhZGRpbmctbGVmdDogMXB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG59XG5AbWVkaWEgKG1heC13aWR0aDogNzAwcHgpIHtcbiAgLndpbm5lci1ibG9jay1pbmZvLWFkZHJlc2VzLWxlZnQsIC53aW5uZXItYmxvY2staW5mby1hZGRyZXNlcy1yaWdodCB7XG4gICAgYm9yZGVyLWxlZnQ6IG5vbmU7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIH1cbn1cbi53aW5uZXItYmxvY2staW5mby1hZGRyZXNlcy1hZGRyZXNzIHtcbiAgZm9udC1zaXplOiAxMHB4O1xuICBjb2xvcjogIzg5MjczNDtcbiAgbWFyZ2luLXRvcDogMnB4O1xufVxuLndpbm5lci1ibG9jay1pbmZvLWFkZHJlc2VzLXRleHQge1xuICBmb250LXNpemU6IDEycHg7XG59XG4ud2lubmVyLWJsb2NrLWluZm8tYWRkcmVzZXMtdGV4dCBzcGFuIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBjb2xvcjogIzg5MjczNDtcbn1cblxuLmVycm9yLXRleHQge1xuICBjb2xvcjogIzg5MjczNDtcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XG59IiwiQGltcG9ydCBcIi4uLy4uLy4uL3Njc3MvdmFyc1wiO1xuQGltcG9ydCBcIi4uLy4uLy4uL3Njc3MvbWl4aW5zXCI7XG5cbnNlY3Rpb24uZ29sZC1sb3R0ZXJ5IHtcblxuICAgIC5lcnJvci1pbnB1dCB7XG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHJlZCAhaW1wb3J0YW50O1xuICAgIH1cblxuICAgICNpbnB1dC1jb2RlIHtcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICB9XG5cbiAgICAubG90dGVyeS1mb3JtLWZpZWxkLWlucHV0IHtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIH1cblxuICAgIC5jb250YWluZXIge1xuICAgICAgICBwYWRkaW5nLXRvcDogMTAwcHg7XG4gICAgfVxuXG4gICAgLmxvdHRlcnkge1xuICAgICAgICBtYXgtd2lkdGg6IDY1MHB4O1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgbWFyZ2luOiAwIGF1dG87XG5cbiAgICAgICAgJi13cmFwIHt9XG5cbiAgICAgICAgJi1mb3JtIHtcbiAgICAgICAgICAgIHBhZGRpbmc6IDQwcHg7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy9hc3NldHMvaW1nL2dvbGQvbG9nby5zdmcnKTtcbiAgICAgICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgICAgICAgICAgIGJhY2tncm91bmQtc2l6ZTogMjAwcHg7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuXG4gICAgICAgICAgICBAaW5jbHVkZSBiKDYwMCkge1xuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDQwcHggMTBweDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgQGluY2x1ZGUgYig3MDApIHtcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiA0MHB4IDIwcHg7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICYtaW5mbyB7XG4gICAgICAgICAgICAgICAgcGFkZGluZzogMTAwcHggMHB4O1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcblxuICAgICAgICAgICAgICAgICYtdGV4dCB7XG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoJGNvbG9yOiAjZTFlMWUxLCAkYWxwaGE6IDAuNSk7XG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDEwcHggMTVweDtcbiAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgICAgICAgICBtYXgtd2lkdGg6IDMwMHB4O1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IGdyYXk7XG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAmLXN3aXRjaCB7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogZ3JpZDtcbiAgICAgICAgICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XG4gICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICAgICAgICBncmlkLWdhcDogMjBweDtcbiAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuXG4gICAgICAgICAgICAgICAgJi1idXR0b24ge1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkZ29sZC0yO1xuICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDIwcHg7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IGdyYXk7XG4gICAgICAgICAgICAgICAgICAgIGJveC1zaGFkb3c6IDBweCAzcHggNnB4ICMwMDAwMDAyZTtcbiAgICAgICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiAwLjRzIGVhc2U7XG5cbiAgICAgICAgICAgICAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkZ29sZDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC5hY3RpdmUge1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICAgICAgICAgICAgY3Vyc29yOiBkZWZhdWx0ICFpbXBvcnRhbnQ7XG5cbiAgICAgICAgICAgICAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiBncmF5O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAmLWNvZGUge1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgICAgICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoNCwgODBweCkgMWZyO1xuICAgICAgICAgICAgICAgIGdyaWQtZ2FwOiAxMHB4O1xuICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cbiAgICAgICAgICAgICAgICBpbnB1dCB7XG4gICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMTBweCA1cHg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAmLXRvcCB7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDI1cHggMzBweDtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkYnJvd24tcmVkO1xuXG4gICAgICAgICAgICAgICAgJi10ZXh0IHtcbiAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE4cHg7XG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICYtZm9vdGVyIHtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgcGFkZGluZzogMTBweCAwcHg7XG5cbiAgICAgICAgICAgICAgICAuZGlzYWJsZWQge1xuICAgICAgICAgICAgICAgICAgICBvcGFjaXR5OiAwLjg7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgJi1idXR0b24ge1xuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE4cHg7XG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiAwLjRzIGVhc2U7XG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRicm93bi1yZWQ7XG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgICAgICAgICBvdXRsaW5lOiBub25lICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAgICAgICAgIGJvcmRlcjogbm9uZSAhaW1wb3J0YW50O1xuXG4gICAgICAgICAgICAgICAgICAgICY6aG92ZXIge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gY29sb3I6ICRnb2xkO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGdvbGQ7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICYtYmxvY2sge1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRnb2xkLTI7XG4gICAgICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDMwcHg7XG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICAgICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICAgICAgICAgIGJveC1zaGFkb3c6IDBweCA0cHggNnB4IHJnYmEoMCwgMCwgMCwgMC4zKTtcblxuICAgICAgICAgICAgICAgICYtcmVnaXN0cmF0aW9uIHt9XG5cbiAgICAgICAgICAgICAgICAmLWNoZWNrIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gZGlzcGxheTogbm9uZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICYtaW5wdXQge1xuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAxMHB4IDIwcHg7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICAgICAgICAgIGhlaWdodDogNDVweDtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgICAgICBvdXRsaW5lOiBub25lO1xuICAgICAgICAgICAgICAgIGJveC1zaGFkb3c6IG5vbmU7XG4gICAgICAgICAgICAgICAgYXBwZWFyYW5jZTogbm9uZTtcbiAgICAgICAgICAgICAgICBib3JkZXI6IG5vbmU7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2YzZjNmMztcbiAgICAgICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjZGRkO1xuICAgICAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAxLjFweDtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cbiAgICAgICAgICAgICAgICAmLWVycm9yIHtcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICRicm93bi1yZWQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAmLWZpZWxkIHtcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgICAgICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiA4MHB4IDFmcjtcbiAgICAgICAgICAgICAgICBncmlkLWdhcDogMTVweDtcblxuICAgICAgICAgICAgICAgIEBpbmNsdWRlIGIoNjAwKSB7XG4gICAgICAgICAgICAgICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICYtY2hlY2sge1xuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBncmlkO1xuICAgICAgICAgICAgICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDgwcHggMWZyO1xuICAgICAgICAgICAgICAgICAgICBncmlkLWdhcDogMjBweDtcbiAgICAgICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBlbmQ7XG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDIwcHggMCA0MHB4IDA7XG5cbiAgICAgICAgICAgICAgICAgICAgaW5wdXQge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDEwcHggMjBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICY6bnRoLWNoaWxkKDEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAxMHB4IDVweDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBsYWJlbCB7XG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiBncmF5O1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICY6YmVmb3JlIHtcbiAgICAgICAgICAgICAgICAgICAgY29udGVudDogYXR0cihkYXRhLXRpdGxlKTtcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogOHB4O1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkYnJvd24tcmVkO1xuICAgICAgICAgICAgICAgICAgICBjb2xvcjogJHdoaXRlO1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAzMHB4O1xuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDQzcHg7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG5cbiAgICAgICAgICAgICAgICAgICAgQGluY2x1ZGUgYig2MDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBsYWJlbCB7XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICAgICAgICAgICAgICBjb2xvcjogZ3JheTtcbiAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG5cbi5iZy13aW4ge1xuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcvYXNzZXRzL2ltZy9nb2xkL2JnLmpwZycpO1xufVxuXG4ud2lubmVyLWJsb2NrIHtcbiAgICBvdmVyZmxvdzogdmlzaWJsZSAhaW1wb3J0YW50O1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBwYWRkaW5nOiAxMHB4IDIwcHggMjBweCAyMHB4O1xuXG4gICAgJjpiZWZvcmUge1xuICAgICAgICBjb250ZW50OiBhdHRyKGRhdGEtdGl0bGUpO1xuICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy9hc3NldHMvaW1nL2dvbGQvdGl0bGUuc3ZnJyk7XG4gICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICAgICAgei1pbmRleDogMTtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICBsZWZ0OiAwO1xuICAgICAgICByaWdodDogMDtcbiAgICAgICAgbWFyZ2luOiAwIGF1dG87XG4gICAgICAgIHRvcDogLTIwcHg7XG4gICAgICAgIG1heC13aWR0aDogMzAwcHg7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgZm9udC1zaXplOiAxOHB4O1xuICAgIH1cblxuICAgICYtaW1nIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XG4gICAgICAgIHdpZHRoOiAxMjVweDtcbiAgICAgICAgaGVpZ2h0OiAxMjVweDtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTBlbTtcbiAgICAgICAgYm94LXNoYWRvdzogMHB4IDNweCA2cHggLTJweCByZ2JhKDAsIDAsIDAsIDAuNDA3KTtcbiAgICAgICAgYm9yZGVyOiA4cHggc29saWQgI2Y0ZjJmMTtcbiAgICAgICAgbWFyZ2luOiAyMHB4IGF1dG87XG4gICAgfVxuXG4gICAgJi1pbmZvIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgICAgIHBhZGRpbmc6IDIwcHggMTBweDtcbiAgICAgICAgYm94LXNoYWRvdzogMHB4IDNweCA2cHggLTJweCByZ2JhKDAsIDAsIDAsIDAuNDA3KTtcblxuICAgICAgICAmLWdvbGQge1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgICAgICAgIGZsZXgtd3JhcDogd3JhcDtcblxuICAgICAgICAgICAgQGluY2x1ZGUgYig3MDApIHtcbiAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB1bCB7XG4gICAgICAgICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDAgMjBweDtcblxuICAgICAgICAgICAgICAgIGxpIHtcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogNXB4O1xuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLXRvcDogNXB4O1xuICAgICAgICAgICAgICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgZ3JheTtcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcblxuICAgICAgICAgICAgICAgICAgICBzcGFuIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAkYnJvd24tcmVkO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAmLWxlZnQge1xuICAgICAgICAgICAgICAgIHdpZHRoOiA1MCU7XG4gICAgICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAxNXB4O1xuXG4gICAgICAgICAgICAgICAgQGluY2x1ZGUgYig3MDApIHtcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAmLXJpZ2h0IHtcbiAgICAgICAgICAgICAgICB3aWR0aDogNTAlO1xuXG4gICAgICAgICAgICAgICAgQGluY2x1ZGUgYig3MDApIHtcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMTVweDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAmLXRleHQge1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICAgICAgICAgIHBhZGRpbmc6IDE1cHggMTBweDtcblxuICAgICAgICAgICAgQGluY2x1ZGUgYig3MDApIHtcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAxNXB4IDEwcHggNXB4IDEwcHg7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAmLWFkZHJlc2VzIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICAgICAgICBwYWRkaW5nOiAwIDIwcHg7XG5cbiAgICAgICAgICAgIEBpbmNsdWRlIGIoNzAwKSB7XG4gICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgJi1sZWZ0LFxuICAgICAgICAgICAgJi1yaWdodCB7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDUwJTtcbiAgICAgICAgICAgICAgICBib3JkZXItbGVmdDogMS41cHggc29saWQgIzAwMDtcbiAgICAgICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDFweDtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xuXG4gICAgICAgICAgICAgICAgQGluY2x1ZGUgYig3MDApIHtcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLWxlZnQ6IG5vbmU7XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAmLWFkZHJlc3Mge1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTBweDtcbiAgICAgICAgICAgICAgICBjb2xvcjogJGJyb3duLXJlZDtcbiAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAycHg7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICYtdGV4dCB7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuXG4gICAgICAgICAgICAgICAgc3BhbiB7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICRicm93bi1yZWQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICB9XG5cbn1cblxuLmVycm9yLXRleHQge1xuICAgIGNvbG9yOiAkYnJvd24tcmVkO1xuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GoldLotteryComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-gold-lottery',
                templateUrl: './gold-lottery.component.html',
                styleUrls: ['./gold-lottery.component.scss']
            }]
    }], function () { return [{ type: _service_gold_lottery_gold_lottery_service__WEBPACK_IMPORTED_MODULE_2__["GoldLotteryService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }]; }, { registrationForm: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['registrationForm']
        }], checkForm: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['checkForm']
        }] }); })();


/***/ }),

/***/ "./src/app/pages/index-new/footer/footer-new.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/pages/index-new/footer/footer-new.component.ts ***!
  \****************************************************************/
/*! exports provided: FooterNewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterNewComponent", function() { return FooterNewComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var src_app_params__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/params */ "./src/app/params.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");







function FooterNewComponent_section_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](6, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](8, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "a", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "a", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "a", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](17, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](19, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](6, 4, "APPS.TITLE"), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](8, 6, "APPS.SUBTITLE"), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](17, 8, "APPS.TEXT_1"), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](19, 10, "APPS.TEXT_2"), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
} }
function FooterNewComponent_footer_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "footer", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "a", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "a", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "a", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "a", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "a", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](13, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "a", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](16, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "a", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](19, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "a", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](22, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](24, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "a", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](27, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "a", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](30, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "a", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](32, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](34, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](36, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "a", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](39, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "a", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](42, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "a", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](44, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](46, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "span", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "\u00A9 2020 Ducatus | ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "a", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](52, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, " | ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "a", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](56, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, " | ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "a", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](60, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-title", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](13, 17, "FOOTER.MENU.SECTION.ONE.TITLE"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](16, 19, "FOOTER.MENU.SECTION.ONE.LINK_1"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](19, 21, "FOOTER.MENU.SECTION.ONE.LINK_2"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](22, 23, "FOOTER.MENU.SECTION.ONE.LINK_3"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-title", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](24, 25, "FOOTER.MENU.SECTION.FOUR.TITLE"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](27, 27, "FOOTER.MENU.SECTION.FOUR.LINK_1"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](30, 29, "FOOTER.MENU.SECTION.FOUR.LINK_2"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-unactive", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](32, 31, "FOOTER.MENU.SECTION.SOON"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](34, 33, "FOOTER.MENU.SECTION.FOUR.LINK_3"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-title", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](36, 35, "FOOTER.MENU.SECTION.FOUR.TITLE"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](39, 37, "FOOTER.MENU.SECTION.FOUR.LINK_1"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](42, 39, "FOOTER.MENU.SECTION.FOUR.LINK_2"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-unactive", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](44, 41, "FOOTER.MENU.SECTION.SOON"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](46, 43, "FOOTER.MENU.SECTION.FOUR.LINK_3"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](52, 45, "FOOTER.MENU.LEGAL"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](56, 47, "FOOTER.MENU.LEGAL_DISCLAIMER"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](60, 49, "FOOTER.MENU.TERMS"));
} }
function FooterNewComponent_section_3_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "span", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FooterNewComponent_section_3_Template_span_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r3.privacyCookie = false; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](6, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FooterNewComponent_section_3_Template_span_click_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r5.privacyCookieSet(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](9, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 3, "PRIVACY.TEXT"), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](6, 5, "PRIVACY.BUTTON_DECLINE"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](9, 7, "PRIVACY.BUTTON_ACCEPT"));
} }
class FooterNewComponent {
    constructor(router) {
        this.router = router;
        this.privacyCookie = true;
        this.hideFooter = false;
        this.buyFooter = false;
        this.sectionApp = true;
        this.router.events.subscribe((event) => {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationStart"]) {
                // Show loading indicator
            }
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationEnd"]) {
                this.hideFooter = !src_app_params__WEBPACK_IMPORTED_MODULE_2__["hideFooterInRoutes"].includes(event.url);
                this.buyFooter = event.url.startsWith('/buy');
            }
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationError"]) {
                // console.warn(event.error);
            }
        });
    }
    privacyCookieSet() {
        window['jQuery']['cookie']('privacyCookie', true);
        this.privacyCookie = false;
    }
    ngOnInit() {
        if (window['jQuery']['cookie']('privacyCookie')) {
            this.privacyCookie = false;
        }
        const bottomMenu = document.getElementsByClassName('footer-menu');
        // tslint:disable-next-line: prefer-for-of
        for (let i = 0; i < bottomMenu.length; i++) {
            bottomMenu[i].addEventListener('click', function () {
                if ($(this).hasClass('footer-menu')) {
                    if ($(this).parent().hasClass('footer-menu-same') && !$(this).parent().hasClass('footer-menu-same-open')) {
                        $(this).parent().addClass('footer-menu-same-open');
                        return;
                    }
                    else if ($(this).parent().hasClass('footer-menu-same') && $(this).parent().hasClass('footer-menu-same-open')) {
                        $(this).parent().removeClass('footer-menu-same-open');
                        return;
                    }
                    if ($(this).hasClass('footer-menu-open')) {
                        $(this).removeClass('footer-menu-open');
                    }
                    else {
                        $(this).addClass('footer-menu-open');
                    }
                }
            });
        }
    }
}
FooterNewComponent.ɵfac = function FooterNewComponent_Factory(t) { return new (t || FooterNewComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"])); };
FooterNewComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FooterNewComponent, selectors: [["app-footer-new"]], decls: 4, vars: 3, consts: [["class", "section-app", "id", "section-app", 4, "ngIf"], ["class", "footer-new", 4, "ngIf"], ["class", "section-cookie", 4, "ngIf"], ["id", "section-app", 1, "section-app"], [1, "section-app-wrap"], [1, "container"], [1, "section-app-block-wrap"], [1, "section-text"], [1, "section-app-title", 3, "innerHTML"], [1, "section-app-text", 3, "innerHTML"], [1, "section-app-list"], ["href", "https://wallet.ducatus.io/", "target", "_blank", 1, "download_ducatus"], ["href", "https://play.google.com/store/apps/details?id=io.ducatus.walnew", "target", "_blank", 1, "download_googleplay"], ["href", "https://apps.apple.com/us/app/ducatus-wallet-2-0-1/id1489722627?ign-mpt=uo%3D2", "target", "_blank", 1, "download_appstore"], [1, "section-app-block"], [1, "footer-new"], [1, "section-footer"], [1, "footer-left"], [1, "footer-logo"], [1, "footer-social"], ["href", "https://www.facebook.com/WeAreDucatus/", "target", "_blank", 1, "icon", "icon__facebook_new"], ["href", "https://twitter.com/DucatusGlobal", "target", "_blank", 1, "icon", "icon__twitter_new"], ["href", "https://instagram.com/ducatusglobal", "target", "_blank", 1, "icon", "icon__instagram_new"], ["href", "https://www.linkedin.com/company/ducatus-global", "target", "_blank", 1, "icon", "icon__linkedin_new"], ["href", "https://www.youtube.com/channel/UCBjE5LLJQyMq6crQholohTQ", "target", "_blank", 1, "icon", "icon__youtube_new"], [1, "footer-right"], [1, "footer-menu"], ["routerLink", "/about", 1, "footer-menu-link"], ["href", "https://www.ducatus.com", 1, "footer-menu-link"], ["routerLink", "/contact", 1, "footer-menu-link"], ["href", "https://ducatus.net", "target", "_blank", 1, "footer-menu-link"], ["href", "https://staydmob.com/", "target", "_blank", 1, "footer-menu-link"], ["href", "https://merchants.ducatus.com", "target", "_blank", 1, "footer-menu-link"], [1, "section-copyright"], [1, "p__copyrights"], ["routerLink", "/legal"], ["routerLink", "/legal-disclaimer"], ["href", "assets/downloads/pdf/Wallet_Terms_Conditions.pdf", "target", "_blank"], [1, "section-cookie"], [3, "innerHTML"], [1, "section-cookie-buttons"], [1, "section-cookie-buttons-item", 3, "click"], ["id", "accept_cookie", 1, "section-cookie-buttons-item", 3, "click"]], template: function FooterNewComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, FooterNewComponent_section_1_Template, 20, 12, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, FooterNewComponent_footer_2_Template, 61, 51, "footer", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, FooterNewComponent_section_3_Template, 10, 9, "section", 2);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.sectionApp);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.hideFooter);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.privacyCookie);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"]], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslatePipe"]], styles: ["@import url(\"https://fonts.googleapis.com/css?family=Montserrat:100,100i,200,200i,300,300i,400,400i,500,500i,600,600i,700,700i,800,800i,900,900i&display=swap\");\n.clearfix[_ngcontent-%COMP%]:after {\n  content: \"\";\n  display: table;\n  clear: both;\n}\n.centered[_ngcontent-%COMP%] {\n  display: table;\n  width: 100%;\n  height: 100%;\n}\n.centered[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\n  display: table-cell;\n  text-align: center;\n  vertical-align: middle;\n}\n\n.footer-new[_ngcontent-%COMP%] {\n  background-color: #F4F4F4;\n  padding-top: 30px;\n  overflow: hidden;\n}\n@media (max-width: 750px) {\n  .footer-new[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%] {\n    padding: 0;\n  }\n}\n.footer-new[_ngcontent-%COMP%]   .footer-social[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\n  transition: 0.4s ease;\n  width: 28px;\n  height: 28px;\n  margin: 5px;\n}\n.footer-new[_ngcontent-%COMP%]   .footer-right[_ngcontent-%COMP%] {\n  justify-content: flex-start;\n}\n.footer-new[_ngcontent-%COMP%]   .footer-menu[_ngcontent-%COMP%] {\n  max-width: 220px;\n}\n.footer-new[_ngcontent-%COMP%]   .section-copyright[_ngcontent-%COMP%] {\n  background-color: #EAEBED;\n  padding: 25px;\n  font-size: 12px;\n  text-align: center;\n}\n.footer-new[_ngcontent-%COMP%]   .section-copyright[_ngcontent-%COMP%]   .p__copyrights[_ngcontent-%COMP%] {\n  font-style: 12px;\n  color: #737778;\n  font-weight: normal;\n}\n.footer-new[_ngcontent-%COMP%]   .section-copyright[_ngcontent-%COMP%]   .p__copyrights[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  transition: 0.4s ease;\n  color: #737778;\n  text-decoration: none;\n}\n.footer-new[_ngcontent-%COMP%]   .section-copyright[_ngcontent-%COMP%]   .p__copyrights[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  text-decoration: underline;\n  color: #821517;\n}\n.footer-new[_ngcontent-%COMP%]   .section-footer[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: minmax(170px, 320px) 1fr;\n  margin-bottom: 30px;\n  grid-gap: 100px;\n}\n@media (max-width: 850px) {\n  .footer-new[_ngcontent-%COMP%]   .section-footer[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n    margin-bottom: 30px;\n    grid-gap: 30px;\n  }\n}\n.footer-new-left[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n.footer-new-logo[_ngcontent-%COMP%] {\n  height: 80px;\n  min-width: 130px;\n  width: 100%;\n  margin-bottom: 10px;\n}\n.footer-new-logo[_ngcontent-%COMP%]:before {\n  content: \"\";\n  background-image: url('logo-footer.png');\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: contain;\n  height: 80px;\n  width: 120px;\n  display: block;\n  margin: 0 auto;\n}\n.footer-new-social[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.footer-new-social[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\n  transition: 0.4s ease;\n  width: 20px;\n  height: 20px;\n  margin: 5px;\n}\n.footer-new-social[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%]:hover {\n  opacity: 0.4;\n}\n.footer-new-social[_ngcontent-%COMP%]   .icon__youtube[_ngcontent-%COMP%] {\n  width: 30px;\n}\n.footer-new-right[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-start;\n}\n@media (max-width: 750px) {\n  .footer-new-right[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n}\n.footer-new-menu[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  padding: 0px 10px;\n  max-width: 230px;\n  min-width: 170px;\n  width: 100%;\n  transition: 0.4s ease;\n}\n@media (max-width: 850px) {\n  .footer-new-menu[_ngcontent-%COMP%] {\n    max-width: 210px;\n    min-width: 170px;\n  }\n}\n@media (max-width: 750px) {\n  .footer-new-menu[_ngcontent-%COMP%] {\n    max-width: 100%;\n    min-width: 100%;\n    width: 100%;\n    border-top: 2px solid #E1E1E1;\n    padding: 0;\n    max-height: 50px;\n    min-height: 50px;\n    overflow: hidden;\n    position: relative;\n    background-color: #ececec;\n  }\n}\n.footer-new-menu[_ngcontent-%COMP%]:before {\n  content: attr(data-title);\n  color: #892734;\n  font-size: 16px;\n  font-weight: bold;\n  margin-bottom: 25px;\n  width: 100%;\n  z-index: 9;\n}\n@media (max-width: 750px) {\n  .footer-new-menu[_ngcontent-%COMP%]:before {\n    width: 100%;\n    margin-bottom: 0;\n    max-height: 50px;\n    height: 100%;\n    display: flex;\n    align-items: center;\n    padding-left: 20px;\n    font-weight: bold;\n    color: #656C75;\n    text-transform: uppercase;\n    position: absolute;\n    background-color: #ececec;\n    top: 0;\n  }\n}\n@media (max-width: 750px) {\n  .footer-new-menu-open[_ngcontent-%COMP%] {\n    max-height: 100%;\n    height: 100%;\n    padding-top: 60px;\n    padding-bottom: 10px;\n  }\n  .footer-new-menu-open[_ngcontent-%COMP%]:before {\n    box-shadow: 0px 3px 8px -4px #00000091;\n  }\n}\n.footer-new-menu-link[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: #737778;\n  font-weight: normal;\n  margin: 6px 0px;\n  text-decoration: none;\n  transition: 0.4s ease;\n  position: relative;\n}\n.footer-new-menu-link-disable[_ngcontent-%COMP%] {\n  color: #737778;\n  cursor: default;\n}\n@media (max-width: 750px) {\n  .footer-new-menu-link-disable[_ngcontent-%COMP%]::after {\n    content: attr(data-unactive);\n    display: inline;\n    position: relative;\n    z-index: 8;\n    font-size: 12px;\n    background-color: #892734;\n    color: #fff;\n    padding: 2px 8px;\n    border-radius: 5px;\n    margin-left: 15px;\n  }\n}\n.footer-new-menu-link-disable[_ngcontent-%COMP%]:hover {\n  cursor: default;\n  color: #737778 !important;\n}\n.footer-new-menu-link-disable[_ngcontent-%COMP%]:hover:before {\n  content: attr(data-unactive);\n  display: block;\n  position: absolute;\n  z-index: 999;\n  bottom: -30px;\n  font-size: 12px;\n  left: 30px;\n  background-color: #892734;\n  color: #fff;\n  padding: 5px 10px;\n  border-radius: 5px;\n}\n@media (max-width: 750px) {\n  .footer-new-menu-link-disable[_ngcontent-%COMP%]:hover:before {\n    display: none;\n  }\n}\n.footer-new-menu-link[_ngcontent-%COMP%]:hover {\n  color: #892734;\n}\n@media (max-width: 750px) {\n  .footer-new-menu-link[_ngcontent-%COMP%] {\n    padding-left: 20px;\n  }\n}\n.footer-new-menu-same[_ngcontent-%COMP%] {\n  display: flex;\n  max-width: 500px;\n  width: 100%;\n}\n@media (max-width: 750px) {\n  .footer-new-menu-same[_ngcontent-%COMP%] {\n    max-width: 100%;\n    max-height: 50px;\n    overflow: hidden;\n    background-color: #ececec;\n    display: block;\n  }\n}\n@media (max-width: 750px) {\n  .footer-new-menu-same-open[_ngcontent-%COMP%] {\n    max-height: 100%;\n    flex-direction: column;\n    padding-bottom: 10px;\n  }\n  .footer-new-menu-same-open[_ngcontent-%COMP%]   .footer-menu[_ngcontent-%COMP%] {\n    border: none;\n    padding-top: 0px;\n    padding-bottom: 0px;\n    max-height: 100% !important;\n  }\n  .footer-new-menu-same-open[_ngcontent-%COMP%]   .footer-menu[_ngcontent-%COMP%]:nth-child(1) {\n    border-top: 2px solid #E1E1E1;\n    padding-top: 60px;\n  }\n}\n@media (max-width: 750px) and (max-width: 750px) {\n  .footer-new-menu-same-open[_ngcontent-%COMP%]   .footer-menu[_ngcontent-%COMP%]:nth-child(1):before {\n    display: flex;\n    box-shadow: 0px 3px 8px -4px #00000091;\n  }\n}\n@media (max-width: 750px) and (max-width: 750px) {\n  .footer-new-menu-same-open[_ngcontent-%COMP%]   .footer-menu[_ngcontent-%COMP%]:before {\n    display: none;\n  }\n}\n.footer-new-menu-same[_ngcontent-%COMP%]   .footer-menu[_ngcontent-%COMP%] {\n  border: none;\n}\n@media (max-width: 750px) {\n  .footer-new-menu-same[_ngcontent-%COMP%]   .footer-menu[_ngcontent-%COMP%]:nth-child(1) {\n    border-top: 2px solid #E1E1E1;\n  }\n}\n@media (max-width: 750px) {\n  .footer-new-menu-same[_ngcontent-%COMP%]   .footer-menu[_ngcontent-%COMP%]:nth-child(1):before {\n    display: flex;\n  }\n}\n@media (max-width: 750px) {\n  .footer-new-menu-same[_ngcontent-%COMP%]   .footer-menu[_ngcontent-%COMP%]:before {\n    display: none;\n  }\n}\n.centurion-footer[_ngcontent-%COMP%] {\n  padding: 70px 0 39px;\n  background: #0e0e0e;\n}\n.centurion-footer-container[_ngcontent-%COMP%] {\n  max-width: 1366px;\n  margin: 0 auto;\n  padding: 0 15px;\n}\n@media (max-width: 900px) {\n  .centurion-footer[_ngcontent-%COMP%] {\n    padding-top: 0;\n  }\n}\n.centurion-footer-logo[_ngcontent-%COMP%] {\n  margin-bottom: 56px;\n}\n.centurion-footer-logo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: auto;\n}\n@media (max-width: 500px) {\n  .centurion-footer-logo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 200px;\n  }\n}\n.centurion-footer-text[_ngcontent-%COMP%] {\n  white-space: pre-line;\n  color: white;\n  margin-bottom: 47px;\n}\n.centurion-footer-links[_ngcontent-%COMP%] {\n  margin-bottom: 20px;\n}\n.centurion-footer-links[_ngcontent-%COMP%]   .link[_ngcontent-%COMP%] {\n  display: inline-block;\n  color: #E8C22C;\n  font-weight: 500;\n  font-size: 22px;\n  text-decoration: none;\n  margin: 0 40px 40px 0;\n}\n@media (max-width: 665px) {\n  .centurion-footer-links[_ngcontent-%COMP%]   .link[_ngcontent-%COMP%] {\n    display: block;\n  }\n}\n.centurion-footer-copyright[_ngcontent-%COMP%] {\n  font-size: 15px;\n  color: #FFFFFF;\n  opacity: 0.5;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9nbGViL3Byb2plY3RzL2R1Y2F0dXMtc2l0ZS9zcmMvc2Nzcy9fdmFycy5zY3NzIiwiL1VzZXJzL2dsZWIvcHJvamVjdHMvZHVjYXR1cy1zaXRlL3NyYy9zY3NzL19taXhpbnMuc2NzcyIsInNyYy9hcHAvcGFnZXMvaW5kZXgtbmV3L2Zvb3Rlci9mb290ZXItbmV3LmNvbXBvbmVudC5zY3NzIiwiL1VzZXJzL2dsZWIvcHJvamVjdHMvZHVjYXR1cy1zaXRlL3NyYy9hcHAvcGFnZXMvaW5kZXgtbmV3L2Zvb3Rlci9mb290ZXItbmV3LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUlRLCtKQUFBO0FDMkJSO0VBQ0MsV0FBQTtFQUNBLGNBQUE7RUFDQSxXQUFBO0FDN0JEO0FEZ0NBO0VBQ0MsY0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FDN0JEO0FEK0JDO0VBQ0MsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLHNCQUFBO0FDN0JGO0FEeU1BOzs7R0FBQTtBRXROQTtFQUNJLHlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtBRG9CSjtBRG9JRTtFRXRKRTtJQUVRLFVBQUE7RURvQlY7QUFDRjtBQ2pCSTtFQUNJLHFCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0FEbUJSO0FDaEJJO0VBQ0ksMkJBQUE7QURrQlI7QUNmSTtFQUNJLGdCQUFBO0FEaUJSO0FDZEk7RUFDSSx5QkFBQTtFQUNBLGFBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7QURnQlI7QUNkUTtFQUNJLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLG1CQUFBO0FEZ0JaO0FDZFk7RUFDSSxxQkFBQTtFQUNBLGNBQUE7RUFDQSxxQkFBQTtBRGdCaEI7QUNkZ0I7RUFDSSwwQkFBQTtFQUNBLGNBQUE7QURnQnBCO0FDVkk7RUFDSSxhQUFBO0VBQ0EsK0NBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7QURZUjtBRHlGRTtFRXpHRTtJQU9RLDBCQUFBO0lBQ0EsbUJBQUE7SUFDQSxjQUFBO0VEYVY7QUFDRjtBQ1ZJO0VBQ0ksYUFBQTtFQUNBLHNCQUFBO0FEWVI7QUNUSTtFQUNJLFlBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtBRFdSO0FDVFE7RUFDSSxXQUFBO0VBQ0Esd0NBQUE7RUFDQSwyQkFBQTtFQUNBLDRCQUFBO0VBQ0Esd0JBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7RUFDQSxjQUFBO0FEV1o7QUNQSTtFQUNJLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FEU1I7QUNQUTtFQUNJLHFCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0FEU1o7QUNQWTtFQUNJLFlBQUE7QURTaEI7QUNOWTtFQUNJLFdBQUE7QURRaEI7QUNISTtFQUNJLGFBQUE7RUFDQSwyQkFBQTtBREtSO0FEd0NFO0VFL0NFO0lBS1Esc0JBQUE7RURNVjtBQUNGO0FDSEk7RUFDSSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0VBQ0EscUJBQUE7QURLUjtBRDBCRTtFRXRDRTtJQVVRLGdCQUFBO0lBQ0EsZ0JBQUE7RURNVjtBQUNGO0FEb0JFO0VFdENFO0lBZVEsZUFBQTtJQUNBLGVBQUE7SUFDQSxXQUFBO0lBQ0EsNkJBQUE7SUFDQSxVQUFBO0lBQ0EsZ0JBQUE7SUFDQSxnQkFBQTtJQUNBLGdCQUFBO0lBQ0Esa0JBQUE7SUFDQSx5QkFBQTtFRE9WO0FBQ0Y7QUNMUTtFQUNJLHlCQUFBO0VBQ0EsY0gzSEE7RUc0SEEsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsVUFBQTtBRE9aO0FESEU7RUVYTTtJQVVRLFdBQUE7SUFDQSxnQkFBQTtJQUNBLGdCQUFBO0lBQ0EsWUFBQTtJQUNBLGFBQUE7SUFDQSxtQkFBQTtJQUNBLGtCQUFBO0lBQ0EsaUJBQUE7SUFDQSxjQUFBO0lBQ0EseUJBQUE7SUFDQSxrQkFBQTtJQUNBLHlCQUFBO0lBQ0EsTUFBQTtFRFFkO0FBQ0Y7QURwQkU7RUVlTTtJQUVRLGdCQUFBO0lBQ0EsWUFBQTtJQUNBLGlCQUFBO0lBQ0Esb0JBQUE7RURPZDtFQ0xjO0lBQ0ksc0NBQUE7RURPbEI7QUFDRjtBQ0hRO0VBQ0ksZUFBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxxQkFBQTtFQUNBLHFCQUFBO0VBQ0Esa0JBQUE7QURLWjtBQ0hZO0VBQ0ksY0FBQTtFQUNBLGVBQUE7QURLaEI7QUQ1Q0U7RUV5Q2M7SUFFUSw0QkFBQTtJQUNBLGVBQUE7SUFDQSxrQkFBQTtJQUNBLFVBQUE7SUFDQSxlQUFBO0lBQ0EseUJBQUE7SUFDQSxXQUFBO0lBQ0EsZ0JBQUE7SUFDQSxrQkFBQTtJQUNBLGlCQUFBO0VES3RCO0FBQ0Y7QUNGZ0I7RUFDSSxlQUFBO0VBQ0EseUJBQUE7QURJcEI7QUNGb0I7RUFDSSw0QkFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsZUFBQTtFQUNBLFVBQUE7RUFDQSx5QkFBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FESXhCO0FEM0VFO0VFNERrQjtJQWNRLGFBQUE7RURLMUI7QUFDRjtBQ0FZO0VBQ0ksY0hyTko7QUV1Tlo7QURuRkU7RUU0Qk07SUF5RFEsa0JBQUE7RURFZDtBQUNGO0FDQ1E7RUFDSSxhQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0FEQ1o7QUQ3RkU7RUV5Rk07SUFNUSxlQUFBO0lBQ0EsZ0JBQUE7SUFDQSxnQkFBQTtJQUNBLHlCQUFBO0lBQ0EsY0FBQTtFREVkO0FBQ0Y7QUR0R0U7RUVzR1U7SUFFUSxnQkFBQTtJQUNBLHNCQUFBO0lBQ0Esb0JBQUE7RURFbEI7RUNBa0I7SUFDSSxZQUFBO0lBQ0EsZ0JBQUE7SUFDQSxtQkFBQTtJQUNBLDJCQUFBO0VERXRCO0VDQXNCO0lBQ0ksNkJBQUE7SUFDQSxpQkFBQTtFREUxQjtBQUNGO0FEdkhFO0VFc0gwQjtJQUVRLGFBQUE7SUFDQSxzQ0FBQTtFREdsQztBQUNGO0FEN0hFO0VFOEhzQjtJQUVRLGFBQUE7RURDOUI7QUFDRjtBQ0tZO0VBQ0ksWUFBQTtBREhoQjtBRHJJRTtFRTBJYztJQUVRLDZCQUFBO0VESHRCO0FBQ0Y7QUQxSUU7RUUrSWtCO0lBRVEsYUFBQTtFREgxQjtBQUNGO0FEL0lFO0VFc0pjO0lBRVEsYUFBQTtFREx0QjtBQUNGO0FDWUE7RUFDRSxvQkFBQTtFQUNBLG1CQUFBO0FEVEY7QUNXRTtFQUNFLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7QURUSjtBRDlKRTtFRWdLRjtJQVdJLGNBQUE7RURURjtBQUNGO0FDV0U7RUFDRSxtQkFBQTtBRFRKO0FDV0k7RUFDRSxXQUFBO0FEVE47QUR6S0U7RUVpTEU7SUFJSSxZQUFBO0VEUk47QUFDRjtBQ1lFO0VBQ0UscUJBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7QURWSjtBQ2FFO0VBQ0UsbUJBQUE7QURYSjtBQ2FJO0VBQ0UscUJBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EscUJBQUE7RUFDQSxxQkFBQTtBRFhOO0FEOUxFO0VFbU1FO0lBU00sY0FBQTtFRFZSO0FBQ0Y7QUNjRTtFQUNFLGVBQUE7RUFDQSxjQUFBO0VBQ0EsWUFBQTtBRFpKIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvaW5kZXgtbmV3L2Zvb3Rlci9mb290ZXItbmV3LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBtYWluIHZhcmlhYmxlc1xuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9TW9udHNlcnJhdDoxMDAsMTAwaSwyMDAsMjAwaSwzMDAsMzAwaSw0MDAsNDAwaSw1MDAsNTAwaSw2MDAsNjAwaSw3MDAsNzAwaSw4MDAsODAwaSw5MDAsOTAwaSZkaXNwbGF5PXN3YXAnKTtcblxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBhZGRpdGlvbmFsIHZhcmlhYmxlc1xuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cblxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBjb2xvcnNcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG4kYmxhY2s6ICMwMDA7XG4kZ3JheTogIzgwODA4MDtcbiR3aGl0ZTogI2ZmZjtcbiRibHVlOiAjMDBGO1xuJHB1cnBsZTogIzhBNEQ3NjtcbiRwaW5rOiAjRkE3QzkxO1xuJGJyb3duOiAjNzU3NzYzO1xuJGJlaWdlLWxpZ2h0OiAjRDBEMUNEO1xuJGJlaWdlLWxpZ2h0ZXItMTogI0VGRjBFQjtcbiRiZWlnZS1saWdodGVyLTI6ICNGNEY0RjQ7XG5cbiRicm93bi1yZWQ6ICM4OTI3MzQ7XG4kZ29sZC15ZWxsb3c6ICNFOEMyMkM7XG4kZGFyay1ncmV5OiAjMjMyNDFmO1xuJGdyZXk6ICM0ZDRjNGQ7XG4kZ29sZDogI0QzQzE5ODtcbiRnb2xkLTI6ICNGMEVBRTM7XG4iLCIvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIG1haW4gbWl4aW5zXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuQG1peGluIGZvbnQtZmFjZSgkZm9udC1mYW1pbHksICRmaWxlLXBhdGgsICR3ZWlnaHQ6IG5vcm1hbCwgJHN0eWxlOiBub3JtYWwsICRhc3NldC1waXBlbGluZTogZmFsc2UpIHtcblx0QGZvbnQtZmFjZSB7XG5cdFx0Zm9udC1mYW1pbHk6ICRmb250LWZhbWlseTtcblx0XHRmb250LXdlaWdodDogJHdlaWdodDtcblx0XHRmb250LXN0eWxlOiAkc3R5bGU7XG5cblx0XHRAaWYgJGFzc2V0LXBpcGVsaW5lPT10cnVlIHtcblx0XHRcdHNyYzogZm9udC11cmwoJyN7JGZpbGUtcGF0aH0uZW90Jyk7XG5cdFx0XHRzcmM6IGZvbnQtdXJsKCcjeyRmaWxlLXBhdGh9LmVvdD8jaWVmaXgnKSBmb3JtYXQoJ2VtYmVkZGVkLW9wZW50eXBlJyksXG5cdFx0XHRmb250LXVybCgnI3skZmlsZS1wYXRofS53b2ZmJykgZm9ybWF0KCd3b2ZmJyksXG5cdFx0XHRmb250LXVybCgnI3skZmlsZS1wYXRofS50dGYnKSBmb3JtYXQoJ3RydWV0eXBlJyk7XG5cdFx0fVxuXG5cdFx0QGVsc2Uge1xuXHRcdFx0c3JjOiB1cmwoJyN7JGZpbGUtcGF0aH0uZW90Jyk7XG5cdFx0XHRzcmM6IHVybCgnI3skZmlsZS1wYXRofS5lb3Q/I2llZml4JykgZm9ybWF0KCdlbWJlZGRlZC1vcGVudHlwZScpLFxuXHRcdFx0dXJsKCcjeyRmaWxlLXBhdGh9LndvZmYnKSBmb3JtYXQoJ3dvZmYnKSxcblx0XHRcdHVybCgnI3skZmlsZS1wYXRofS50dGYnKSBmb3JtYXQoJ3RydWV0eXBlJyk7XG5cdFx0fVxuXHR9XG59XG5cbkBtaXhpbiBub3RleHQge1xuXHRvdmVyZmxvdzogaGlkZGVuO1xuXHR0ZXh0LWluZGVudDogLTk5OTlweDtcbn1cblxuLmNsZWFyZml4OmFmdGVyIHtcblx0Y29udGVudDogXCJcIjtcblx0ZGlzcGxheTogdGFibGU7XG5cdGNsZWFyOiBib3RoO1xufVxuXG4uY2VudGVyZWQge1xuXHRkaXNwbGF5OiB0YWJsZTtcblx0d2lkdGg6IDEwMCU7XG5cdGhlaWdodDogMTAwJTtcblxuXHQ+KiB7XG5cdFx0ZGlzcGxheTogdGFibGUtY2VsbDtcblx0XHR0ZXh0LWFsaWduOiBjZW50ZXI7XG5cdFx0dmVydGljYWwtYWxpZ246IG1pZGRsZTtcblx0fVxufVxuXG5AbWl4aW4gcGxhY2Vob2xkZXJDb2xvcigkaW5wdXQtdGV4dC1jb2xvcikge1xuXHQmOjotd2Via2l0LWlucHV0LXBsYWNlaG9sZGVyIHtcblx0XHRjb2xvcjogJGlucHV0LXRleHQtY29sb3I7XG5cdH1cblxuXHQmOi1tb3otcGxhY2Vob2xkZXIge1xuXHRcdGNvbG9yOiAkaW5wdXQtdGV4dC1jb2xvcjtcblx0XHRvcGFjaXR5OiAxO1xuXHR9XG5cblx0Jjo6LW1vei1wbGFjZWhvbGRlciB7XG5cdFx0Y29sb3I6ICRpbnB1dC10ZXh0LWNvbG9yO1xuXHRcdG9wYWNpdHk6IDE7XG5cdH1cblxuXHQmOi1tcy1pbnB1dC1wbGFjZWhvbGRlciB7XG5cdFx0Y29sb3I6ICRpbnB1dC10ZXh0LWNvbG9yO1xuXHR9XG5cblx0Jjo6cGxhY2Vob2xkZXIge1xuXHRcdGNvbG9yOiAkaW5wdXQtdGV4dC1jb2xvcjtcblx0XHRvcGFjaXR5OiAxO1xuXHR9XG5cblx0Jjpmb2N1czotbW96LXBsYWNlaG9sZGVyIHtcblx0XHRjb2xvcjogdHJhbnNwYXJlbnQ7XG5cdFx0b3BhY2l0eTogMTtcblx0fVxuXG5cdCY6Zm9jdXM6Oi1tb3otcGxhY2Vob2xkZXIge1xuXHRcdGNvbG9yOiB0cmFuc3BhcmVudDtcblx0XHRvcGFjaXR5OiAxO1xuXHR9XG5cblx0Jjpmb2N1czo6LXdlYmtpdC1pbnB1dC1wbGFjZWhvbGRlciB7XG5cdFx0Y29sb3I6IHRyYW5zcGFyZW50O1xuXHR9XG5cblx0Jjpmb2N1czotbXMtaW5wdXQtcGxhY2Vob2xkZXIge1xuXHRcdGNvbG9yOiB0cmFuc3BhcmVudDtcblx0fVxuXG5cdCY6Zm9jdXM6OnBsYWNlaG9sZGVyIHtcblx0XHRjb2xvcjogdHJhbnNwYXJlbnQ7XG5cdH1cbn1cblxuQG1peGluIGNsZWFyZml4IHtcblx0JjphZnRlciB7XG5cdFx0Y29udGVudDogXCIgXCI7XG5cdFx0ZGlzcGxheTogYmxvY2s7XG5cdFx0Y2xlYXI6IGJvdGg7XG5cdH1cbn1cblxuLy8gY2xlYXIgc2VsZWN0IHdpdGhvdXQgZGVmYXVsdCBidXR0b25cbkBtaXhpbiBjbGVhclNlbGVjdCB7XG5cdC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcblx0LW1vei1hcHBlYXJhbmNlOiBub25lO1xuXHRhcHBlYXJhbmNlOiBub25lO1xuXHQtd2Via2l0LWJvcmRlci1yYWRpdXM6IDA7XG5cdC1tb3otYm9yZGVyLXJhZGl1czogMDtcblx0Ym9yZGVyLXJhZGl1czogMDtcbn1cblxuLy8gZWxlbWVudHMgZ2V0IGFwcGVuZGVkIHdpdGggXCJfX1wiIGFuZCB0aGUgJG5hbWVcbkBtaXhpbiBlKCRuYW1lKSB7XG5cdEBhdC1yb290ICN7Jn1fI3skbmFtZX0ge1xuXHRcdEBjb250ZW50O1xuXHR9XG59XG5cbi8vIG1vZGlmaWVycyBnZXQgYXBwZW5kZWQgd2l0aCBcIi0tXCIgYW5kIHRoZSAkbmFtZVxuQG1peGluIG0oJG5hbWUpIHtcblx0QGF0LXJvb3QgI3smfS0tI3skbmFtZX0ge1xuXHRcdEBjb250ZW50O1xuXHR9XG59XG5cbi8vIGJyZWFrcG9pbnRzXG5AbWl4aW4gYigkcG9pbnQpIHtcblx0QGlmICRwb2ludD09ZGVza3RvcCB7XG5cdFx0QG1lZGlhIChtYXgtd2lkdGg6IDEzNjZweCkgYW5kIChtaW4td2lkdGg6MTAyNHB4KSB7XG5cdFx0XHRAY29udGVudCA7XG5cdFx0fVxuXHR9XG5cblx0QGVsc2UgaWYgJHBvaW50PT10YWJsZXQge1xuXHRcdEBtZWRpYSAobWF4LXdpZHRoOiAxMDAwcHgpIHtcblx0XHRcdEBjb250ZW50IDtcblx0XHR9XG5cdH1cblxuXHRAZWxzZSBpZiAkcG9pbnQ9PW1vYmlsZSB7XG5cdFx0QG1lZGlhIChtYXgtd2lkdGg6IDc2N3B4KSB7XG5cdFx0XHRAY29udGVudCA7XG5cdFx0fVxuXHR9XG5cblx0QGVsc2UgaWYgJHBvaW50PT1tb2JpbGUzeCB7XG5cblx0XHRAbWVkaWEgb25seSBzY3JlZW4gYW5kICgtd2Via2l0LW1pbi1kZXZpY2UtcGl4ZWwtcmF0aW86IDMpLFxuXHRcdG9ubHkgc2NyZWVuIGFuZCAobWluLXJlc29sdXRpb246IDNkcHB4KSxcblx0XHRvbmx5IHNjcmVlbiBhbmQgKG1pbi1yZXNvbHV0aW9uOiAzNTBkcGkpIHtcblx0XHRcdEBjb250ZW50IDtcblx0XHR9XG5cdH1cblxuXHRAZWxzZSB7XG5cdFx0QG1lZGlhIChtYXgtd2lkdGg6ICRwb2ludCArICdweCcpIHtcblx0XHRcdEBjb250ZW50IDtcblx0XHR9XG5cdH1cbn1cblxuLy8gYnJlYWtwb2ludHNcbkBtaXhpbiBiYigkcG9pbnRNYXgsICRwb2ludE1pbikge1xuXHRAbWVkaWEgKG1heC13aWR0aDogJHBvaW50TWF4ICsgJ3B4JykgYW5kIChtaW4td2lkdGg6ICRwb2ludE1pbiArICdweCcpIHtcblx0XHRAY29udGVudCA7XG5cdH1cbn1cblxuQG1peGluIGllKCkge1xuXG5cdEBtZWRpYSBzY3JlZW4gYW5kICgtbXMtaGlnaC1jb250cmFzdDogYWN0aXZlKSxcblx0KC1tcy1oaWdoLWNvbnRyYXN0OiBub25lKSB7XG5cdFx0QGNvbnRlbnQgO1xuXHR9XG59XG5cbkBtaXhpbiBiZWZvcmUtaW1nKCRkaXNwbGF5LCAkd2lkdGgsICRoZWlnaHQsICRwb3NpdGlvbikge1xuXHRAYXQtcm9vdCAjeyZ9OmJlZm9yZSB7XG5cdFx0Y29udGVudDogJyc7XG5cdFx0ZGlzcGxheTogJGRpc3BsYXk7XG5cblx0XHRAaWYgJHBvc2l0aW9uPT1hIHtcblx0XHRcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcblx0XHR9XG5cblx0XHRAaWYgJHBvc2l0aW9uPT1yIHtcblx0XHRcdHBvc2l0aW9uOiByZWxhdGl2ZTtcblx0XHR9XG5cblx0XHR3aWR0aDogJHdpZHRoO1xuXHRcdGhlaWdodDogJGhlaWdodDtcblx0XHRAY29udGVudDtcblx0fVxufVxuXG5AbWl4aW4gYWZ0ZXItaW1nKCRkaXNwbGF5LCAkd2lkdGgsICRoZWlnaHQsICRwb3NpdGlvbikge1xuXHRAYXQtcm9vdCAjeyZ9OmFmdGVyIHtcblx0XHRjb250ZW50OiAnJztcblx0XHRkaXNwbGF5OiAkZGlzcGxheTtcblxuXHRcdEBpZiAkcG9zaXRpb249PWEge1xuXHRcdFx0cG9zaXRpb246IGFic29sdXRlO1xuXHRcdH1cblxuXHRcdEBpZiAkcG9zaXRpb249PXIge1xuXHRcdFx0cG9zaXRpb246IHJlbGF0aXZlO1xuXHRcdH1cblxuXHRcdHdpZHRoOiAkd2lkdGg7XG5cdFx0aGVpZ2h0OiAkaGVpZ2h0O1xuXHRcdEBjb250ZW50O1xuXHR9XG59XG5cbi8qIHJlbSBmb250IHNpemUgd2l0aCBmYWxsYmFjayB8IHVzYWdlOlxuXHRwIHtcblx0XHRAaW5jbHVkZSBmb250LXNpemUoMTRweClcblx0fSovXG5cbkBmdW5jdGlvbiBjYWxjdWxhdGVSZW0oJHNpemUpIHtcblx0JHJlbVNpemU6ICRzaXplIC8gMTZweDtcblx0QHJldHVybiAkcmVtU2l6ZSAqIDFyZW07XG59XG5cbkBtaXhpbiBmb250LXNpemUoJHNpemUpIHtcblx0Zm9udC1zaXplOiAkc2l6ZTtcblx0Zm9udC1zaXplOiBjYWxjdWxhdGVSZW0oJHNpemUpO1xufVxuXG5AbWl4aW4gdGV4dEN1dCgkY29sLCAkaGVpZ2h0KSB7XG5cdGRpc3BsYXk6IC13ZWJraXQtYm94O1xuXHQtd2Via2l0LWxpbmUtY2xhbXA6ICRjb2w7XG5cdC13ZWJraXQtYm94LW9yaWVudDogdmVydGljYWw7XG5cdG92ZXJmbG93OiBoaWRkZW47XG5cdG1heC1oZWlnaHQ6ICRoZWlnaHQ7XG59XG5cbi8vIGJ1dHRvbnNcblxuQG1peGluIGJ0bi1ncmFkaWVudCgkY1RleHQsICRjSG92ZXIsICRkaXJlY3Rpb24sICRjRmlyc3QsICRjU2Vjb25zLCAkY1RoaXJkLCAkaG92ZXIpIHtcblx0Y29sb3I6ICRjVGV4dDtcblx0dHJhbnNpdGlvbjogMC41cztcblx0YmFja2dyb3VuZC1zaXplOiAyMDAlIGF1dG87XG5cdGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgkZGlyZWN0aW9uLCAkY0ZpcnN0IDAlLCAkY1NlY29ucyA1MSUsICRjVGhpcmQgMTAwJSk7XG5cblx0Jjpob3ZlciB7XG5cdFx0dGV4dC1kZWNvcmF0aW9uOiBub25lO1xuXHRcdGJhY2tncm91bmQtcG9zaXRpb246ICRob3Zlcjtcblx0XHRjb2xvcjogJGNIb3Zlcjtcblx0XHRib3gtc2hhZG93OiAwcHggMjBweCAzMHB4IC0xNXB4ICRjVGhpcmQ7XG5cdH1cbn1cblxuQG1peGluIGdyYWRpZW50KCR0b3AsICRib3R0b20pIHtcblx0YmFja2dyb3VuZDogJHRvcDtcblx0YmFja2dyb3VuZDogLW1vei1saW5lYXItZ3JhZGllbnQodG9wLCAkdG9wIDAlLCAkYm90dG9tIDEwMCUpO1xuXHRiYWNrZ3JvdW5kOiAtd2Via2l0LWdyYWRpZW50KGxpbmVhciwgbGVmdCB0b3AsIGxlZnQgYm90dG9tLCBjb2xvci1zdG9wKDAlLCAkdG9wKSwgY29sb3Itc3RvcCgxMDAlLCAkYm90dG9tKSk7XG5cdGJhY2tncm91bmQ6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KHRvcCwgJHRvcCAwJSwgJGJvdHRvbSAxMDAlKTtcblx0YmFja2dyb3VuZDogLW8tbGluZWFyLWdyYWRpZW50KHRvcCwgJHRvcCAwJSwgJGJvdHRvbSAxMDAlKTtcblx0YmFja2dyb3VuZDogLW1zLWxpbmVhci1ncmFkaWVudCh0b3AsICR0b3AgMCUsICRib3R0b20gMTAwJSk7XG5cdGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sICR0b3AgMCUsICRib3R0b20gMTAwJSk7XG5cdGZpbHRlcjogcHJvZ2lkOkRYSW1hZ2VUcmFuc2Zvcm0uTWljcm9zb2Z0LmdyYWRpZW50KHN0YXJ0Q29sb3JzdHI9JyN7JHRvcH0nLCBlbmRDb2xvcnN0cj0nI3skYm90dG9tfSAnLCBHcmFkaWVudFR5cGU9MCk7XG59IiwiQGltcG9ydCB1cmwoXCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9TW9udHNlcnJhdDoxMDAsMTAwaSwyMDAsMjAwaSwzMDAsMzAwaSw0MDAsNDAwaSw1MDAsNTAwaSw2MDAsNjAwaSw3MDAsNzAwaSw4MDAsODAwaSw5MDAsOTAwaSZkaXNwbGF5PXN3YXBcIik7XG4uY2xlYXJmaXg6YWZ0ZXIge1xuICBjb250ZW50OiBcIlwiO1xuICBkaXNwbGF5OiB0YWJsZTtcbiAgY2xlYXI6IGJvdGg7XG59XG5cbi5jZW50ZXJlZCB7XG4gIGRpc3BsYXk6IHRhYmxlO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuLmNlbnRlcmVkID4gKiB7XG4gIGRpc3BsYXk6IHRhYmxlLWNlbGw7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbn1cblxuLyogcmVtIGZvbnQgc2l6ZSB3aXRoIGZhbGxiYWNrIHwgdXNhZ2U6XG5cdHAge1xuXHRcdEBpbmNsdWRlIGZvbnQtc2l6ZSgxNHB4KVxuXHR9Ki9cbi5mb290ZXItbmV3IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0Y0RjRGNDtcbiAgcGFkZGluZy10b3A6IDMwcHg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5AbWVkaWEgKG1heC13aWR0aDogNzUwcHgpIHtcbiAgLmZvb3Rlci1uZXcgLmNvbnRhaW5lciB7XG4gICAgcGFkZGluZzogMDtcbiAgfVxufVxuLmZvb3Rlci1uZXcgLmZvb3Rlci1zb2NpYWwgLmljb24ge1xuICB0cmFuc2l0aW9uOiAwLjRzIGVhc2U7XG4gIHdpZHRoOiAyOHB4O1xuICBoZWlnaHQ6IDI4cHg7XG4gIG1hcmdpbjogNXB4O1xufVxuLmZvb3Rlci1uZXcgLmZvb3Rlci1yaWdodCB7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbn1cbi5mb290ZXItbmV3IC5mb290ZXItbWVudSB7XG4gIG1heC13aWR0aDogMjIwcHg7XG59XG4uZm9vdGVyLW5ldyAuc2VjdGlvbi1jb3B5cmlnaHQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRUFFQkVEO1xuICBwYWRkaW5nOiAyNXB4O1xuICBmb250LXNpemU6IDEycHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5mb290ZXItbmV3IC5zZWN0aW9uLWNvcHlyaWdodCAucF9fY29weXJpZ2h0cyB7XG4gIGZvbnQtc3R5bGU6IDEycHg7XG4gIGNvbG9yOiAjNzM3Nzc4O1xuICBmb250LXdlaWdodDogbm9ybWFsO1xufVxuLmZvb3Rlci1uZXcgLnNlY3Rpb24tY29weXJpZ2h0IC5wX19jb3B5cmlnaHRzIGEge1xuICB0cmFuc2l0aW9uOiAwLjRzIGVhc2U7XG4gIGNvbG9yOiAjNzM3Nzc4O1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG4uZm9vdGVyLW5ldyAuc2VjdGlvbi1jb3B5cmlnaHQgLnBfX2NvcHlyaWdodHMgYTpob3ZlciB7XG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xuICBjb2xvcjogIzgyMTUxNztcbn1cbi5mb290ZXItbmV3IC5zZWN0aW9uLWZvb3RlciB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogbWlubWF4KDE3MHB4LCAzMjBweCkgMWZyO1xuICBtYXJnaW4tYm90dG9tOiAzMHB4O1xuICBncmlkLWdhcDogMTAwcHg7XG59XG5AbWVkaWEgKG1heC13aWR0aDogODUwcHgpIHtcbiAgLmZvb3Rlci1uZXcgLnNlY3Rpb24tZm9vdGVyIHtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcbiAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xuICAgIGdyaWQtZ2FwOiAzMHB4O1xuICB9XG59XG4uZm9vdGVyLW5ldy1sZWZ0IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cbi5mb290ZXItbmV3LWxvZ28ge1xuICBoZWlnaHQ6IDgwcHg7XG4gIG1pbi13aWR0aDogMTMwcHg7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xufVxuLmZvb3Rlci1uZXctbG9nbzpiZWZvcmUge1xuICBjb250ZW50OiBcIlwiO1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi8uLi8uLi9hc3NldHMvaW1nL2ljb25zL2xvZ28tZm9vdGVyLnBuZ1wiKTtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XG4gIGhlaWdodDogODBweDtcbiAgd2lkdGg6IDEyMHB4O1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luOiAwIGF1dG87XG59XG4uZm9vdGVyLW5ldy1zb2NpYWwge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi5mb290ZXItbmV3LXNvY2lhbCAuaWNvbiB7XG4gIHRyYW5zaXRpb246IDAuNHMgZWFzZTtcbiAgd2lkdGg6IDIwcHg7XG4gIGhlaWdodDogMjBweDtcbiAgbWFyZ2luOiA1cHg7XG59XG4uZm9vdGVyLW5ldy1zb2NpYWwgLmljb246aG92ZXIge1xuICBvcGFjaXR5OiAwLjQ7XG59XG4uZm9vdGVyLW5ldy1zb2NpYWwgLmljb25fX3lvdXR1YmUge1xuICB3aWR0aDogMzBweDtcbn1cbi5mb290ZXItbmV3LXJpZ2h0IHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDc1MHB4KSB7XG4gIC5mb290ZXItbmV3LXJpZ2h0IHtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICB9XG59XG4uZm9vdGVyLW5ldy1tZW51IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgcGFkZGluZzogMHB4IDEwcHg7XG4gIG1heC13aWR0aDogMjMwcHg7XG4gIG1pbi13aWR0aDogMTcwcHg7XG4gIHdpZHRoOiAxMDAlO1xuICB0cmFuc2l0aW9uOiAwLjRzIGVhc2U7XG59XG5AbWVkaWEgKG1heC13aWR0aDogODUwcHgpIHtcbiAgLmZvb3Rlci1uZXctbWVudSB7XG4gICAgbWF4LXdpZHRoOiAyMTBweDtcbiAgICBtaW4td2lkdGg6IDE3MHB4O1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogNzUwcHgpIHtcbiAgLmZvb3Rlci1uZXctbWVudSB7XG4gICAgbWF4LXdpZHRoOiAxMDAlO1xuICAgIG1pbi13aWR0aDogMTAwJTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBib3JkZXItdG9wOiAycHggc29saWQgI0UxRTFFMTtcbiAgICBwYWRkaW5nOiAwO1xuICAgIG1heC1oZWlnaHQ6IDUwcHg7XG4gICAgbWluLWhlaWdodDogNTBweDtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWNlY2VjO1xuICB9XG59XG4uZm9vdGVyLW5ldy1tZW51OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IGF0dHIoZGF0YS10aXRsZSk7XG4gIGNvbG9yOiAjODkyNzM0O1xuICBmb250LXNpemU6IDE2cHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBtYXJnaW4tYm90dG9tOiAyNXB4O1xuICB3aWR0aDogMTAwJTtcbiAgei1pbmRleDogOTtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA3NTBweCkge1xuICAuZm9vdGVyLW5ldy1tZW51OmJlZm9yZSB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWFyZ2luLWJvdHRvbTogMDtcbiAgICBtYXgtaGVpZ2h0OiA1MHB4O1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgcGFkZGluZy1sZWZ0OiAyMHB4O1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGNvbG9yOiAjNjU2Qzc1O1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNlY2VjZWM7XG4gICAgdG9wOiAwO1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogNzUwcHgpIHtcbiAgLmZvb3Rlci1uZXctbWVudS1vcGVuIHtcbiAgICBtYXgtaGVpZ2h0OiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBwYWRkaW5nLXRvcDogNjBweDtcbiAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcbiAgfVxuICAuZm9vdGVyLW5ldy1tZW51LW9wZW46YmVmb3JlIHtcbiAgICBib3gtc2hhZG93OiAwcHggM3B4IDhweCAtNHB4ICMwMDAwMDA5MTtcbiAgfVxufVxuLmZvb3Rlci1uZXctbWVudS1saW5rIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBjb2xvcjogIzczNzc3ODtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgbWFyZ2luOiA2cHggMHB4O1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIHRyYW5zaXRpb246IDAuNHMgZWFzZTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLmZvb3Rlci1uZXctbWVudS1saW5rLWRpc2FibGUge1xuICBjb2xvcjogIzczNzc3ODtcbiAgY3Vyc29yOiBkZWZhdWx0O1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDc1MHB4KSB7XG4gIC5mb290ZXItbmV3LW1lbnUtbGluay1kaXNhYmxlOjphZnRlciB7XG4gICAgY29udGVudDogYXR0cihkYXRhLXVuYWN0aXZlKTtcbiAgICBkaXNwbGF5OiBpbmxpbmU7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHotaW5kZXg6IDg7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICM4OTI3MzQ7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgcGFkZGluZzogMnB4IDhweDtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgbWFyZ2luLWxlZnQ6IDE1cHg7XG4gIH1cbn1cbi5mb290ZXItbmV3LW1lbnUtbGluay1kaXNhYmxlOmhvdmVyIHtcbiAgY3Vyc29yOiBkZWZhdWx0O1xuICBjb2xvcjogIzczNzc3OCAhaW1wb3J0YW50O1xufVxuLmZvb3Rlci1uZXctbWVudS1saW5rLWRpc2FibGU6aG92ZXI6YmVmb3JlIHtcbiAgY29udGVudDogYXR0cihkYXRhLXVuYWN0aXZlKTtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgei1pbmRleDogOTk5O1xuICBib3R0b206IC0zMHB4O1xuICBmb250LXNpemU6IDEycHg7XG4gIGxlZnQ6IDMwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICM4OTI3MzQ7XG4gIGNvbG9yOiAjZmZmO1xuICBwYWRkaW5nOiA1cHggMTBweDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDc1MHB4KSB7XG4gIC5mb290ZXItbmV3LW1lbnUtbGluay1kaXNhYmxlOmhvdmVyOmJlZm9yZSB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxufVxuLmZvb3Rlci1uZXctbWVudS1saW5rOmhvdmVyIHtcbiAgY29sb3I6ICM4OTI3MzQ7XG59XG5AbWVkaWEgKG1heC13aWR0aDogNzUwcHgpIHtcbiAgLmZvb3Rlci1uZXctbWVudS1saW5rIHtcbiAgICBwYWRkaW5nLWxlZnQ6IDIwcHg7XG4gIH1cbn1cbi5mb290ZXItbmV3LW1lbnUtc2FtZSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIG1heC13aWR0aDogNTAwcHg7XG4gIHdpZHRoOiAxMDAlO1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDc1MHB4KSB7XG4gIC5mb290ZXItbmV3LW1lbnUtc2FtZSB7XG4gICAgbWF4LXdpZHRoOiAxMDAlO1xuICAgIG1heC1oZWlnaHQ6IDUwcHg7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWNlY2VjO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogNzUwcHgpIHtcbiAgLmZvb3Rlci1uZXctbWVudS1zYW1lLW9wZW4ge1xuICAgIG1heC1oZWlnaHQ6IDEwMCU7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcbiAgfVxuICAuZm9vdGVyLW5ldy1tZW51LXNhbWUtb3BlbiAuZm9vdGVyLW1lbnUge1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBwYWRkaW5nLXRvcDogMHB4O1xuICAgIHBhZGRpbmctYm90dG9tOiAwcHg7XG4gICAgbWF4LWhlaWdodDogMTAwJSAhaW1wb3J0YW50O1xuICB9XG4gIC5mb290ZXItbmV3LW1lbnUtc2FtZS1vcGVuIC5mb290ZXItbWVudTpudGgtY2hpbGQoMSkge1xuICAgIGJvcmRlci10b3A6IDJweCBzb2xpZCAjRTFFMUUxO1xuICAgIHBhZGRpbmctdG9wOiA2MHB4O1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogNzUwcHgpIGFuZCAobWF4LXdpZHRoOiA3NTBweCkge1xuICAuZm9vdGVyLW5ldy1tZW51LXNhbWUtb3BlbiAuZm9vdGVyLW1lbnU6bnRoLWNoaWxkKDEpOmJlZm9yZSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBib3gtc2hhZG93OiAwcHggM3B4IDhweCAtNHB4ICMwMDAwMDA5MTtcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDc1MHB4KSBhbmQgKG1heC13aWR0aDogNzUwcHgpIHtcbiAgLmZvb3Rlci1uZXctbWVudS1zYW1lLW9wZW4gLmZvb3Rlci1tZW51OmJlZm9yZSB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxufVxuLmZvb3Rlci1uZXctbWVudS1zYW1lIC5mb290ZXItbWVudSB7XG4gIGJvcmRlcjogbm9uZTtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA3NTBweCkge1xuICAuZm9vdGVyLW5ldy1tZW51LXNhbWUgLmZvb3Rlci1tZW51Om50aC1jaGlsZCgxKSB7XG4gICAgYm9yZGVyLXRvcDogMnB4IHNvbGlkICNFMUUxRTE7XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA3NTBweCkge1xuICAuZm9vdGVyLW5ldy1tZW51LXNhbWUgLmZvb3Rlci1tZW51Om50aC1jaGlsZCgxKTpiZWZvcmUge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA3NTBweCkge1xuICAuZm9vdGVyLW5ldy1tZW51LXNhbWUgLmZvb3Rlci1tZW51OmJlZm9yZSB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxufVxuXG4uY2VudHVyaW9uLWZvb3RlciB7XG4gIHBhZGRpbmc6IDcwcHggMCAzOXB4O1xuICBiYWNrZ3JvdW5kOiAjMGUwZTBlO1xufVxuLmNlbnR1cmlvbi1mb290ZXItY29udGFpbmVyIHtcbiAgbWF4LXdpZHRoOiAxMzY2cHg7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBwYWRkaW5nOiAwIDE1cHg7XG59XG5AbWVkaWEgKG1heC13aWR0aDogOTAwcHgpIHtcbiAgLmNlbnR1cmlvbi1mb290ZXIge1xuICAgIHBhZGRpbmctdG9wOiAwO1xuICB9XG59XG4uY2VudHVyaW9uLWZvb3Rlci1sb2dvIHtcbiAgbWFyZ2luLWJvdHRvbTogNTZweDtcbn1cbi5jZW50dXJpb24tZm9vdGVyLWxvZ28gaW1nIHtcbiAgd2lkdGg6IGF1dG87XG59XG5AbWVkaWEgKG1heC13aWR0aDogNTAwcHgpIHtcbiAgLmNlbnR1cmlvbi1mb290ZXItbG9nbyBpbWcge1xuICAgIHdpZHRoOiAyMDBweDtcbiAgfVxufVxuLmNlbnR1cmlvbi1mb290ZXItdGV4dCB7XG4gIHdoaXRlLXNwYWNlOiBwcmUtbGluZTtcbiAgY29sb3I6IHdoaXRlO1xuICBtYXJnaW4tYm90dG9tOiA0N3B4O1xufVxuLmNlbnR1cmlvbi1mb290ZXItbGlua3Mge1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xufVxuLmNlbnR1cmlvbi1mb290ZXItbGlua3MgLmxpbmsge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGNvbG9yOiAjRThDMjJDO1xuICBmb250LXdlaWdodDogNTAwO1xuICBmb250LXNpemU6IDIycHg7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgbWFyZ2luOiAwIDQwcHggNDBweCAwO1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDY2NXB4KSB7XG4gIC5jZW50dXJpb24tZm9vdGVyLWxpbmtzIC5saW5rIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgfVxufVxuLmNlbnR1cmlvbi1mb290ZXItY29weXJpZ2h0IHtcbiAgZm9udC1zaXplOiAxNXB4O1xuICBjb2xvcjogI0ZGRkZGRjtcbiAgb3BhY2l0eTogMC41O1xufSIsIkBpbXBvcnQgXCIuLi8uLi8uLi8uLi9zY3NzL3ZhcnNcIjtcbkBpbXBvcnQgXCIuLi8uLi8uLi8uLi9zY3NzL21peGluc1wiO1xuXG4uZm9vdGVyLW5ldyB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0Y0RjRGNDtcbiAgICBwYWRkaW5nLXRvcDogMzBweDtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuXG4gICAgLmNvbnRhaW5lciB7XG4gICAgICAgIEBpbmNsdWRlIGIoNzUwKSB7XG4gICAgICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLmZvb3Rlci1zb2NpYWwgLmljb24ge1xuICAgICAgICB0cmFuc2l0aW9uOiAwLjRzIGVhc2U7XG4gICAgICAgIHdpZHRoOiAyOHB4O1xuICAgICAgICBoZWlnaHQ6IDI4cHg7XG4gICAgICAgIG1hcmdpbjogNXB4O1xuICAgIH1cblxuICAgIC5mb290ZXItcmlnaHQge1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gICAgfVxuXG4gICAgLmZvb3Rlci1tZW51IHtcbiAgICAgICAgbWF4LXdpZHRoOiAyMjBweDtcbiAgICB9XG5cbiAgICAuc2VjdGlvbi1jb3B5cmlnaHQge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRUFFQkVEO1xuICAgICAgICBwYWRkaW5nOiAyNXB4O1xuICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcblxuICAgICAgICAucF9fY29weXJpZ2h0cyB7XG4gICAgICAgICAgICBmb250LXN0eWxlOiAxMnB4O1xuICAgICAgICAgICAgY29sb3I6ICM3Mzc3Nzg7XG4gICAgICAgICAgICBmb250LXdlaWdodDogbm9ybWFsO1xuXG4gICAgICAgICAgICBhIHtcbiAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiAwLjRzIGVhc2U7XG4gICAgICAgICAgICAgICAgY29sb3I6ICM3Mzc3Nzg7XG4gICAgICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuXG4gICAgICAgICAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xuICAgICAgICAgICAgICAgICAgICBjb2xvcjogIzgyMTUxNztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAuc2VjdGlvbi1mb290ZXIge1xuICAgICAgICBkaXNwbGF5OiBncmlkO1xuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IG1pbm1heCgxNzBweCwgMzIwcHgpIDFmcjtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMzBweDtcbiAgICAgICAgZ3JpZC1nYXA6IDEwMHB4O1xuXG4gICAgICAgIEBpbmNsdWRlIGIoODUwKSB7XG4gICAgICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XG4gICAgICAgICAgICBncmlkLWdhcDogMzBweDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgICYtbGVmdCB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgfVxuXG4gICAgJi1sb2dvIHtcbiAgICAgICAgaGVpZ2h0OiA4MHB4O1xuICAgICAgICBtaW4td2lkdGg6IDEzMHB4O1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcblxuICAgICAgICAmOmJlZm9yZSB7XG4gICAgICAgICAgICBjb250ZW50OiAnJztcbiAgICAgICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vLi4vLi4vLi4vYXNzZXRzL2ltZy9pY29ucy9sb2dvLWZvb3Rlci5wbmcnKTtcbiAgICAgICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgICAgICAgICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XG4gICAgICAgICAgICBoZWlnaHQ6IDgwcHg7XG4gICAgICAgICAgICB3aWR0aDogMTIwcHg7XG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgIG1hcmdpbjogMCBhdXRvO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgJi1zb2NpYWwge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcblxuICAgICAgICAuaWNvbiB7XG4gICAgICAgICAgICB0cmFuc2l0aW9uOiAwLjRzIGVhc2U7XG4gICAgICAgICAgICB3aWR0aDogMjBweDtcbiAgICAgICAgICAgIGhlaWdodDogMjBweDtcbiAgICAgICAgICAgIG1hcmdpbjogNXB4O1xuXG4gICAgICAgICAgICAmOmhvdmVyIHtcbiAgICAgICAgICAgICAgICBvcGFjaXR5OiAwLjQ7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICZfX3lvdXR1YmUge1xuICAgICAgICAgICAgICAgIHdpZHRoOiAzMHB4O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgJi1yaWdodCB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcblxuICAgICAgICBAaW5jbHVkZSBiKDc1MCkge1xuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgfVxuICAgIH1cblxuICAgICYtbWVudSB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgIHBhZGRpbmc6IDBweCAxMHB4O1xuICAgICAgICBtYXgtd2lkdGg6IDIzMHB4O1xuICAgICAgICBtaW4td2lkdGg6IDE3MHB4O1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgdHJhbnNpdGlvbjogMC40cyBlYXNlO1xuXG4gICAgICAgIEBpbmNsdWRlIGIoODUwKSB7XG4gICAgICAgICAgICBtYXgtd2lkdGg6IDIxMHB4O1xuICAgICAgICAgICAgbWluLXdpZHRoOiAxNzBweDtcbiAgICAgICAgfVxuXG4gICAgICAgIEBpbmNsdWRlIGIoNzUwKSB7XG4gICAgICAgICAgICBtYXgtd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICBtaW4td2lkdGg6IDEwMCU7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgIGJvcmRlci10b3A6IDJweCBzb2xpZCAjRTFFMUUxO1xuICAgICAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgICAgIG1heC1oZWlnaHQ6IDUwcHg7XG4gICAgICAgICAgICBtaW4taGVpZ2h0OiA1MHB4O1xuICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNlY2VjZWM7XG4gICAgICAgIH1cblxuICAgICAgICAmOmJlZm9yZSB7XG4gICAgICAgICAgICBjb250ZW50OiBhdHRyKGRhdGEtdGl0bGUpO1xuICAgICAgICAgICAgY29sb3I6ICRicm93bi1yZWQ7XG4gICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDI1cHg7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgIHotaW5kZXg6IDk7XG5cbiAgICAgICAgICAgIEBpbmNsdWRlIGIoNzUwKSB7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMDtcbiAgICAgICAgICAgICAgICBtYXgtaGVpZ2h0OiA1MHB4O1xuICAgICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAyMHB4O1xuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICAgICAgICAgIGNvbG9yOiAjNjU2Qzc1O1xuICAgICAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNlY2VjZWM7XG4gICAgICAgICAgICAgICAgdG9wOiAwO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgJi1vcGVuIHtcbiAgICAgICAgICAgIEBpbmNsdWRlIGIoNzUwKSB7XG4gICAgICAgICAgICAgICAgbWF4LWhlaWdodDogMTAwJTtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgICAgICAgcGFkZGluZy10b3A6IDYwcHg7XG4gICAgICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDEwcHg7XG5cbiAgICAgICAgICAgICAgICAmOmJlZm9yZSB7XG4gICAgICAgICAgICAgICAgICAgIGJveC1zaGFkb3c6IDBweCAzcHggOHB4IC00cHggIzAwMDAwMDkxO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgICYtbGluayB7XG4gICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgICAgICBjb2xvcjogIzczNzc3ODtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gICAgICAgICAgICBtYXJnaW46IDZweCAwcHg7XG4gICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgICAgICB0cmFuc2l0aW9uOiAwLjRzIGVhc2U7XG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG5cbiAgICAgICAgICAgICYtZGlzYWJsZSB7XG4gICAgICAgICAgICAgICAgY29sb3I6ICM3Mzc3Nzg7XG4gICAgICAgICAgICAgICAgY3Vyc29yOiBkZWZhdWx0O1xuXG4gICAgICAgICAgICAgICAgJjo6YWZ0ZXIge1xuICAgICAgICAgICAgICAgICAgICBAaW5jbHVkZSBiKDc1MCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudDogYXR0cihkYXRhLXVuYWN0aXZlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHotaW5kZXg6IDg7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjODkyNzM0O1xuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAycHggOHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDE1cHg7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAmOmhvdmVyIHtcbiAgICAgICAgICAgICAgICAgICAgY3Vyc29yOiBkZWZhdWx0O1xuICAgICAgICAgICAgICAgICAgICBjb2xvcjogIzczNzc3OCAhaW1wb3J0YW50O1xuXG4gICAgICAgICAgICAgICAgICAgICY6YmVmb3JlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6IGF0dHIoZGF0YS11bmFjdGl2ZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHotaW5kZXg6IDk5OTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvdHRvbTogLTMwcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZWZ0OiAzMHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzg5MjczNDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogNXB4IDEwcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIEBpbmNsdWRlIGIoNzUwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgICAgICAgY29sb3I6ICRicm93bi1yZWQ7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIEBpbmNsdWRlIGIoNzUwKSB7XG4gICAgICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAyMHB4O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgJi1zYW1lIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBtYXgtd2lkdGg6IDUwMHB4O1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG5cbiAgICAgICAgICAgIEBpbmNsdWRlIGIoNzUwKSB7XG4gICAgICAgICAgICAgICAgbWF4LXdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICAgIG1heC1oZWlnaHQ6IDUwcHg7XG4gICAgICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWNlY2VjO1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAmLW9wZW4ge1xuICAgICAgICAgICAgICAgIEBpbmNsdWRlIGIoNzUwKSB7XG4gICAgICAgICAgICAgICAgICAgIG1heC1oZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xuXG4gICAgICAgICAgICAgICAgICAgIC5mb290ZXItbWVudSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXI6IG5vbmU7XG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLXRvcDogMHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1heC1oZWlnaHQ6IDEwMCUgIWltcG9ydGFudDtcblxuICAgICAgICAgICAgICAgICAgICAgICAgJjpudGgtY2hpbGQoMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci10b3A6IDJweCBzb2xpZCAjRTFFMUUxO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmctdG9wOiA2MHB4O1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJjpiZWZvcmUge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBAaW5jbHVkZSBiKDc1MCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJveC1zaGFkb3c6IDBweCAzcHggOHB4IC00cHggIzAwMDAwMDkxO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAmOmJlZm9yZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgQGluY2x1ZGUgYig3NTApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5mb290ZXItbWVudSB7XG4gICAgICAgICAgICAgICAgYm9yZGVyOiBub25lO1xuXG4gICAgICAgICAgICAgICAgJjpudGgtY2hpbGQoMSkge1xuICAgICAgICAgICAgICAgICAgICBAaW5jbHVkZSBiKDc1MCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXRvcDogMnB4IHNvbGlkICNFMUUxRTE7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAmOmJlZm9yZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBAaW5jbHVkZSBiKDc1MCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAmOmJlZm9yZSB7XG4gICAgICAgICAgICAgICAgICAgIEBpbmNsdWRlIGIoNzUwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuXG4uY2VudHVyaW9uLWZvb3RlciB7XG4gIHBhZGRpbmc6IDcwcHggMCAzOXB4O1xuICBiYWNrZ3JvdW5kOiAjMGUwZTBlO1xuXG4gICYtY29udGFpbmVyIHtcbiAgICBtYXgtd2lkdGg6IDEzNjZweDtcbiAgICBtYXJnaW46IDAgYXV0bztcbiAgICBwYWRkaW5nOiAwIDE1cHg7XG4gIH1cblxuICBAaW5jbHVkZSBiKDkwMCkge1xuICAgIHBhZGRpbmctdG9wOiAwO1xuICB9XG5cbiAgJi1sb2dvIHtcbiAgICBtYXJnaW4tYm90dG9tOiA1NnB4O1xuXG4gICAgaW1nIHtcbiAgICAgIHdpZHRoOiBhdXRvO1xuXG4gICAgICBAaW5jbHVkZSBiKDUwMCkge1xuICAgICAgICB3aWR0aDogMjAwcHg7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgJi10ZXh0IHtcbiAgICB3aGl0ZS1zcGFjZTogcHJlLWxpbmU7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIG1hcmdpbi1ib3R0b206IDQ3cHg7XG4gIH1cblxuICAmLWxpbmtzIHtcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuXG4gICAgLmxpbmsge1xuICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgY29sb3I6ICNFOEMyMkM7XG4gICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgZm9udC1zaXplOiAyMnB4O1xuICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgbWFyZ2luOiAwIDQwcHggNDBweCAwO1xuXG4gICAgICBAaW5jbHVkZSBiKDY2NSkge1xuICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gICYtY29weXJpZ2h0IHtcbiAgICBmb250LXNpemU6IDE1cHg7XG4gICAgY29sb3I6ICNGRkZGRkY7XG4gICAgb3BhY2l0eTogMC41O1xuICB9XG59XG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FooterNewComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-footer-new',
                templateUrl: './footer-new.component.html',
                styleUrls: ['./footer-new.component.scss']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/pages/index-new/header/header-new.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/pages/index-new/header/header-new.component.ts ***!
  \****************************************************************/
/*! exports provided: HeaderNewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderNewComponent", function() { return HeaderNewComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var src_app_params__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/params */ "./src/app/params.ts");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
/* harmony import */ var src_app_service_user_user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/service/user/user.service */ "./src/app/service/user/user.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");









function HeaderNewComponent_div_1_a_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function HeaderNewComponent_div_1_a_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function HeaderNewComponent_div_1_a_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "a", 18);
} }
const _c0 = function (a0) { return { "menu-open": a0 }; };
function HeaderNewComponent_div_1_div_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](6, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](9, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](12, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](15, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](16, _c0, ctx_r4.openMenu === true));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 6, "HEADER.MENU.HOME"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](6, 8, "HEADER.MENU.ABOUT"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](9, 10, "HEADER.MENU.BUY"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](12, 12, "HEADER.MENU.DUCATUSX"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](15, 14, "HEADER.MENU.CONTACT"));
} }
const _c1 = function (a0, a1) { return { "menu-open": a0, "header-menu-block-admin": a1 }; };
function HeaderNewComponent_div_1_div_13_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Balance");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Convertor");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Voucher");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Rates");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderNewComponent_div_1_div_13_Template_a_click_9_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r7.logout(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Logout");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](1, _c1, ctx_r5.openMenu === true, !ctx_r5.adminHeader));
} }
const _c2 = function (a0) { return { active: a0 }; };
function HeaderNewComponent_div_1_li_16_Template(rf, ctx) { if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderNewComponent_div_1_li_16_Template_li_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11); const lng_r9 = ctx.$implicit; const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r10.setLanguage(lng_r9["lng"]); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const lng_r9 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c2, lng_r9["active"]));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](lng_r9["title"]);
} }
const _c3 = function (a0) { return { "open-menu": a0 }; };
const _c4 = function (a0) { return { "language-select-admin": a0 }; };
const _c5 = function (a0) { return { opened: a0 }; };
function HeaderNewComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, HeaderNewComponent_div_1_a_3_Template, 2, 0, "a", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, HeaderNewComponent_div_1_a_4_Template, 2, 0, "a", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, HeaderNewComponent_div_1_a_5_Template, 1, 0, "a", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "label", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderNewComponent_div_1_Template_label_click_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r12.openMenu = !ctx_r12.openMenu; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "input", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, HeaderNewComponent_div_1_div_12_Template, 16, 18, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, HeaderNewComponent_div_1_div_13_Template, 11, 4, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "ul", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderNewComponent_div_1_Template_ul_click_15_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13); const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r14.toggleLanguage(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, HeaderNewComponent_div_1_li_16_Template, 3, 4, "li", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.adminHeader && !ctx_r0.buyHeader);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.buyHeader);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r0.adminHeader);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](9, _c3, ctx_r0.openMenu));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.adminHeader);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r0.adminHeader);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](11, _c4, !ctx_r0.adminHeader));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](13, _c5, ctx_r0.openedLngList));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.languagesList);
} }
const _c6 = function (a0, a1, a2) { return { "header-hide": a0, "header-admin": a1, "header-buy": a2 }; };
class HeaderNewComponent {
    constructor(translate, router, userService) {
        this.translate = translate;
        this.router = router;
        this.userService = userService;
        this.openedLngList = false;
        this.openMenu = false;
        this.hideHeader = false;
        this.adminHeader = false;
        this.buyHeader = false;
        this.router.events.subscribe((event) => {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationStart"]) {
                // Show loading indicator
            }
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationEnd"]) {
                this.hideHeader = !src_app_params__WEBPACK_IMPORTED_MODULE_2__["hideHeaderInRoutes"].includes(event.url);
                this.buyHeader = event.url.startsWith('/buy');
                this.adminHeader = !src_app_params__WEBPACK_IMPORTED_MODULE_2__["adminHeaderInRoutes"].includes(event.url);
            }
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationError"]) {
                // console.warn(event.error);
            }
        });
        this.translator = translate;
        this.languagesList = [
            {
                lng: 'eng',
                title: 'Eng',
                active: true,
            },
            {
                lng: 'ita',
                title: 'Ita',
                active: false,
            },
            {
                lng: 'vie',
                title: 'Vie',
                active: false,
            },
            {
                lng: 'deu',
                title: 'Deu',
                active: false,
            },
        ];
        translate.onLangChange.subscribe((event) => {
            this.setActiveLanguage(event);
        });
        this.setActiveLanguage({
            lang: translate.currentLang,
        });
    }
    onClick($event) {
        if (jquery__WEBPACK_IMPORTED_MODULE_3__($event.target).closest('.header-menu-toggle-block').length === 0) {
            if (jquery__WEBPACK_IMPORTED_MODULE_3__($event.target).closest('.select-coin-list-item').length === 0) {
                this.openMenu = false;
            }
        }
        if (jquery__WEBPACK_IMPORTED_MODULE_3__($event.target).closest('.language-select').length === 0) {
            this.openedLngList = false;
        }
    }
    setActiveLanguage(event) {
        if (this.currLanguage) {
            this.languagesList.map((lang) => {
                if (lang['lng'] === this.currLanguage) {
                    lang['active'] = true;
                }
                else {
                    lang['active'] = false;
                }
            });
        }
        this.currLanguage = event.lang;
        window['jQuery']['cookie']('lng', this.currLanguage);
        this.languagesList.map((lang) => {
            if (lang['lng'] === this.currLanguage) {
                lang['active'] = true;
            }
            else {
                lang['active'] = false;
            }
        });
        this.languagesList.sort((a, b) => {
            return b.active ? 1 : -1;
        });
    }
    toggleLanguage() {
        this.openedLngList = !this.openedLngList;
    }
    setLanguage(lng) {
        this.translator.use(lng);
    }
    ngOnInit() {
        // scroll menu
        var scrollPosY = window.pageYOffset | document.body.scrollTop;
        var navBar = document.getElementsByClassName('header')[0];
        if (scrollPosY > 100) {
            navBar.classList.add('header-scroll');
        }
        else if (scrollPosY <= 100) {
            navBar.classList.remove('header-scroll');
        }
        window.onscroll = function changeNav() {
            var scrollPosY = window.pageYOffset | document.body.scrollTop;
            var navBar = document.getElementsByClassName('header')[0];
            if (scrollPosY > 100) {
                navBar.classList.add('header-scroll');
            }
            else if (scrollPosY <= 100) {
                navBar.classList.remove('header-scroll');
            }
        };
    }
    logout() {
        this.userService.logout().then(() => {
            this.router.navigate(['/admin/login']);
        });
    }
}
HeaderNewComponent.ɵfac = function HeaderNewComponent_Factory(t) { return new (t || HeaderNewComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_service_user_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"])); };
HeaderNewComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HeaderNewComponent, selectors: [["app-header-new"]], hostBindings: function HeaderNewComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderNewComponent_click_HostBindingHandler($event) { return ctx.onClick($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveDocument"]);
    } }, decls: 2, vars: 6, consts: [[1, "header", 3, "ngClass"], ["class", "container", 4, "ngIf"], [1, "container"], [1, "header-wrap"], [1, "header-logo-block"], ["routerLink", "/", "class", "header-logo", 4, "ngIf"], ["class", "header-logo", 4, "ngIf"], [1, "header-menu-toggle-block"], ["for", "header-menu-toggle", 1, "header-menu-toggle", 3, "ngClass", "click"], [1, "line-toggle"], ["type", "checkbox", "id", "header-menu-toggle", "role", "button", 1, "header-menu-toggle-ch"], ["class", "header-menu-block", 3, "ngClass", 4, "ngIf"], [1, "language-select", 3, "ngClass"], [1, "language-select-list", 3, "ngClass", "click"], [3, "ngClass", "click", 4, "ngFor", "ngForOf"], ["routerLink", "/", 1, "header-logo"], ["src", "/assets/img/ducatus-logo-first.png", "alt", "Ducatus logo"], ["src", "/assets/img/buy-page/header-logo.svg", "alt", "Centurion logo"], [1, "header-logo"], [1, "header-menu-block", 3, "ngClass"], ["routerLink", "/", 1, "header-menu-link"], ["routerLink", "/about", 1, "header-menu-link"], ["routerLink", "/buy", 1, "header-menu-link"], ["routerLink", "/ducatusx", 1, "header-menu-link"], ["routerLink", "/contact", 1, "header-menu-link"], [1, "header-menu-link"], ["routerLink", "/admin/voucher", 1, "header-menu-link"], ["routerLink", "/admin/rate", 1, "header-menu-link"], [1, "header-menu-link", 3, "click"], [3, "ngClass", "click"]], template: function HeaderNewComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, HeaderNewComponent_div_1_Template, 17, 15, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction3"](2, _c6, !ctx.hideHeader, !ctx.adminHeader, ctx.buyHeader));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.hideHeader);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"]], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslatePipe"]], styles: ["@import url(\"https://fonts.googleapis.com/css?family=Montserrat:100,100i,200,200i,300,300i,400,400i,500,500i,600,600i,700,700i,800,800i,900,900i&display=swap\");\n.clearfix[_ngcontent-%COMP%]:after {\n  content: \"\";\n  display: table;\n  clear: both;\n}\n.centered[_ngcontent-%COMP%] {\n  display: table;\n  width: 100%;\n  height: 100%;\n}\n.centered[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\n  display: table-cell;\n  text-align: center;\n  vertical-align: middle;\n}\n\n.header[_ngcontent-%COMP%] {\n  position: fixed;\n  width: 100%;\n  top: 0;\n  left: 0;\n  height: 70px;\n  padding: 5px 70px;\n  background: #e3e9ee;\n  margin-top: 0;\n  z-index: 999;\n  transition: 0.2s ease;\n}\n.header-admin[_ngcontent-%COMP%] {\n  padding: 20px !important;\n}\n@media (max-width: 750px) {\n  .header-admin[_ngcontent-%COMP%] {\n    padding: 10px 20px !important;\n  }\n}\n.header-hide[_ngcontent-%COMP%] {\n  display: none !important;\n}\n@media (max-width: 1366px) {\n  .header[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%] {\n    padding: 0px;\n  }\n}\n.header-scroll[_ngcontent-%COMP%] {\n  margin-top: 0 !important;\n  padding: 0px 20px;\n  height: auto;\n  box-shadow: 0px 2px 8px -3px #00000052;\n}\n@media (max-width: 900px) and (min-width: 750px) {\n  .header-scroll[_ngcontent-%COMP%]   .header-menu-link[_ngcontent-%COMP%] {\n    font-size: 14px;\n  }\n}\n@media (max-width: 900px) {\n  .header[_ngcontent-%COMP%] {\n    padding: 10px 20px;\n  }\n}\n@media (max-width: 750px) {\n  .header[_ngcontent-%COMP%] {\n    margin-top: 0 !important;\n    padding: 10px 10px;\n    height: auto;\n  }\n}\n.header-wrap[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  position: relative;\n}\n@media (max-width: 750px) {\n  .header-wrap[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n}\n.header-logo-block[_ngcontent-%COMP%] {\n  flex-basis: 300px;\n}\n@media (max-width: 900px) {\n  .header-logo-block[_ngcontent-%COMP%] {\n    flex-basis: 200px;\n  }\n}\n@media (max-width: 750px) {\n  .header-logo-block[_ngcontent-%COMP%] {\n    flex-basis: auto;\n    align-items: center;\n    display: flex;\n    justify-content: space-between;\n  }\n}\n.header-logo-block[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 200px;\n}\n@media (max-width: 900px) {\n  .header-logo-block[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 200px;\n  }\n}\n@media (max-width: 370px) {\n  .header-logo-block[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 150px;\n  }\n}\n.header-menu-block[_ngcontent-%COMP%] {\n  flex-basis: 100%;\n  display: flex;\n  align-items: center;\n  text-align: center;\n  transition: 0.4s ease;\n  justify-content: flex-end;\n  padding-right: 80px;\n}\n@media (max-width: 750px) {\n  .header-menu-block[_ngcontent-%COMP%] {\n    align-items: flex-end;\n    flex-direction: column;\n    max-height: 0px;\n    overflow: hidden;\n    padding-right: 0px;\n  }\n}\n.header-menu-block-admin[_ngcontent-%COMP%] {\n  flex-basis: auto;\n  margin-right: 100px;\n}\n@media (max-width: 750px) {\n  .header-menu-block-admin[_ngcontent-%COMP%] {\n    margin-right: 0;\n  }\n}\n.header-menu-link[_ngcontent-%COMP%] {\n  color: black;\n  text-decoration: none;\n  transition: 0.1s ease;\n  margin: 2px 15px;\n  cursor: pointer;\n  font-size: 14px;\n  line-height: 17px;\n  font-weight: 500;\n  text-transform: capitalize;\n}\n@media (max-width: 1000px) {\n  .header-menu-link[_ngcontent-%COMP%] {\n    margin: 2px 10px;\n    font-size: 14px;\n  }\n}\n@media (max-width: 750px) {\n  .header-menu-link[_ngcontent-%COMP%] {\n    margin: 7px 10px;\n    color: #000;\n  }\n}\n.header-menu-link[_ngcontent-%COMP%]:hover {\n  color: #892734 !important;\n}\n.header-menu-toggle-block[_ngcontent-%COMP%] {\n  display: none;\n}\n.header-menu-toggle-block[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n.header-menu-toggle-block[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]   .line-toggle[_ngcontent-%COMP%] {\n  height: 2px;\n  border-radius: 5px;\n  background-color: gray;\n  width: 30px;\n  margin-bottom: 5px;\n}\n.header-menu-toggle-block[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  display: none;\n}\n@media (max-width: 750px) {\n  .header-menu-toggle-block[_ngcontent-%COMP%] {\n    display: block;\n    float: right;\n    margin-top: 5px;\n  }\n}\n@media (max-width: 370px) {\n  .header-menu-toggle-block[_ngcontent-%COMP%] {\n    margin-top: 3px;\n  }\n}\n.menu-open[_ngcontent-%COMP%] {\n  max-height: 160px !important;\n}\n.language-select[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 5px;\n  top: 15px;\n  z-index: 2;\n}\n@media (max-width: 1000px) {\n  .language-select[_ngcontent-%COMP%] {\n    right: 10px;\n  }\n}\n@media (max-width: 900px) {\n  .language-select[_ngcontent-%COMP%] {\n    top: 6px;\n  }\n}\n.language-select-admin[_ngcontent-%COMP%] {\n  top: -4px;\n}\n@media (max-width: 750px) {\n  .language-select-admin[_ngcontent-%COMP%] {\n    top: 0;\n  }\n}\n@media (max-width: 900px) {\n  .language-select[_ngcontent-%COMP%] {\n    right: 0px;\n  }\n}\n@media (max-width: 750px) {\n  .language-select[_ngcontent-%COMP%] {\n    right: 50px;\n  }\n}\n@media (max-width: 370px) {\n  .language-select[_ngcontent-%COMP%] {\n    top: 1px;\n    right: 40px;\n  }\n}\n.language-select-list[_ngcontent-%COMP%] {\n  display: block;\n  list-style-type: none;\n  padding: 0;\n  margin: 0;\n  border-radius: 5px;\n  border: none;\n  position: relative;\n  background-color: #e3e9ee;\n  color: gray;\n}\n.language-select-list[_ngcontent-%COMP%]:after {\n  content: \"\";\n  display: block;\n  width: 8px;\n  height: 8px;\n  border-width: 2px 2px 0 0;\n  border-style: solid;\n  border-color: gray;\n  transform: rotate(135deg);\n  position: absolute;\n  top: 9px;\n  right: 11px;\n  transition: 0.2s ease;\n}\n.language-select-list[_ngcontent-%COMP%]:not(.opened):hover {\n  background-color: #e3e9ee;\n}\n.language-select-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  display: none;\n  padding: 5px 10px 5px 10px;\n  margin: 0;\n  text-align: right;\n  line-height: 20px;\n  font-size: 16px;\n  font-weight: normal;\n  color: gray;\n}\n@media (max-width: 1000px) {\n  .language-select-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n    font-size: 14px;\n  }\n}\n.language-select-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover {\n  color: #892734;\n  transition: 0.4s ease;\n}\n.language-select-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n.language-select-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:after {\n  content: \"\";\n  display: block;\n  clear: both;\n}\n.language-select-list[_ngcontent-%COMP%]   li.active[_ngcontent-%COMP%] {\n  padding-right: 30px;\n  display: block;\n}\n.language-select-list.opened[_ngcontent-%COMP%]:after {\n  transform: rotate(-45deg);\n  top: 13px;\n}\n.language-select-list.opened[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  display: block;\n  transition: 0.4s ease;\n}\n.language-select-list.opened[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover {\n  color: #892734;\n  transition: 0.4s ease;\n  cursor: pointer;\n}\n.language-select-list.opened[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]    + li[_ngcontent-%COMP%] {\n  border-top: 1px solid #ddd;\n  text-align: left;\n}\n.language-select-list[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 24px;\n  height: 24px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9nbGViL3Byb2plY3RzL2R1Y2F0dXMtc2l0ZS9zcmMvc2Nzcy9fdmFycy5zY3NzIiwiL1VzZXJzL2dsZWIvcHJvamVjdHMvZHVjYXR1cy1zaXRlL3NyYy9zY3NzL19taXhpbnMuc2NzcyIsInNyYy9hcHAvcGFnZXMvaW5kZXgtbmV3L2hlYWRlci9oZWFkZXItbmV3LmNvbXBvbmVudC5zY3NzIiwiL1VzZXJzL2dsZWIvcHJvamVjdHMvZHVjYXR1cy1zaXRlL3NyYy9hcHAvcGFnZXMvaW5kZXgtbmV3L2hlYWRlci9oZWFkZXItbmV3LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUlRLCtKQUFBO0FDMkJSO0VBQ0MsV0FBQTtFQUNBLGNBQUE7RUFDQSxXQUFBO0FDN0JEO0FEZ0NBO0VBQ0MsY0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FDN0JEO0FEK0JDO0VBQ0MsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLHNCQUFBO0FDN0JGO0FEeU1BOzs7R0FBQTtBRXROQTtFQUNFLGVBQUE7RUFDQSxXQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0VBQ0EscUJBQUE7QURvQkY7QUNsQkU7RUFDRSx3QkFBQTtBRG9CSjtBRDBIRTtFRS9JQTtJQUlJLDZCQUFBO0VEcUJKO0FBQ0Y7QUNpQ0U7RUFDRSx3QkFBQTtBRC9CSjtBRGtIRTtFRWhGQTtJQUVJLFlBQUE7RURoQ0o7QUFDRjtBQ21DRTtFQUNFLHdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0VBQ0Esc0NBQUE7QURqQ0o7QUQrR0M7RUU1RUc7SUFFSSxlQUFBO0VEakNOO0FBQ0Y7QURrR0U7RUUzSkY7SUErRkksa0JBQUE7RURsQ0Y7QUFDRjtBRDZGRTtFRTNKRjtJQW9HSSx3QkFBQTtJQUNBLGtCQUFBO0lBQ0EsWUFBQTtFRGxDRjtBQUNGO0FDb0NFO0VBQ0UsYUFBQTtFQUNBLDhCQUFBO0VBQ0Esa0JBQUE7QURsQ0o7QURpRkU7RUVsREE7SUFNSSxzQkFBQTtFRGpDSjtBQUNGO0FDb0NFO0VBQ0UsaUJBQUE7QURsQ0o7QUR5RUU7RUV4Q0E7SUFJSSxpQkFBQTtFRGpDSjtBQUNGO0FEb0VFO0VFeENBO0lBUUksZ0JBQUE7SUFDQSxtQkFBQTtJQUNBLGFBQUE7SUFDQSw4QkFBQTtFRGhDSjtBQUNGO0FDa0NJO0VBQ0UsWUFBQTtBRGhDTjtBRHlERTtFRTFCRTtJQUlJLFlBQUE7RUQvQk47QUFDRjtBRG9ERTtFRTFCRTtJQVFJLFlBQUE7RUQ5Qk47QUFDRjtBQ21DSTtFQUNFLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxxQkFBQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7QURqQ047QURzQ0U7RUVaRTtJQVVJLHFCQUFBO0lBQ0Esc0JBQUE7SUFDQSxlQUFBO0lBQ0EsZ0JBQUE7SUFDQSxrQkFBQTtFRGhDTjtBQUNGO0FDa0NNO0VBQ0UsZ0JBQUE7RUFDQSxtQkFBQTtBRGhDUjtBRHlCRTtFRUtJO0lBS0ksZUFBQTtFRC9CUjtBQUNGO0FDbUNJO0VBQ0UsWUFBQTtFQUNBLHFCQUFBO0VBQ0EscUJBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLDBCQUFBO0FEakNOO0FEU0U7RUVlRTtJQVlJLGdCQUFBO0lBQ0EsZUFBQTtFRGhDTjtBQUNGO0FER0U7RUVlRTtJQWlCSSxnQkFBQTtJQUNBLFdIaExBO0VFaUpOO0FBQ0Y7QUNpQ007RUFDRSx5QkFBQTtBRC9CUjtBQ21DSTtFQUNFLGFBQUE7QURqQ047QUNtQ007RUFDRSxhQUFBO0VBQ0Esc0JBQUE7QURqQ1I7QUNtQ1E7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxzQkFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtBRGpDVjtBQ3FDTTtFQUNFLGFBQUE7QURuQ1I7QUR2QkU7RUV5Q0U7SUFxQkksY0FBQTtJQUNBLFlBQUE7SUFDQSxlQUFBO0VEbkNOO0FBQ0Y7QUQ5QkU7RUV5Q0U7SUEyQkksZUFBQTtFRGxDTjtBQUNGO0FDdUNBO0VBQ0UsNEJBQUE7QURwQ0Y7QUN1Q0E7RUFDRSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtBRHBDRjtBRDlDRTtFRThFRjtJQU9JLFdBQUE7RURuQ0Y7QUFDRjtBRG5ERTtFRThFRjtJQVdJLFFBQUE7RURsQ0Y7QUFDRjtBQ29DRTtFQUNFLFNBQUE7QURsQ0o7QUQzREU7RUU0RkE7SUFJSSxNQUFBO0VEakNKO0FBQ0Y7QURoRUU7RUU4RUY7SUFzQkksVUFBQTtFRGhDRjtBQUNGO0FEckVFO0VFOEVGO0lBMEJJLFdBQUE7RUQvQkY7QUFDRjtBRDFFRTtFRThFRjtJQThCSSxRQUFBO0lBQ0EsV0FBQTtFRDlCRjtBQUNGO0FDZ0NFO0VBQ0UsY0FBQTtFQUNBLHFCQUFBO0VBQ0EsVUFBQTtFQUNBLFNBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0EsV0FBQTtBRDlCSjtBQ2dDSTtFQUNFLFdBQUE7RUFDQSxjQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSx5QkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFdBQUE7RUFDQSxxQkFBQTtBRDlCTjtBQ2tDTTtFQUNFLHlCQUFBO0FEaENSO0FDb0NJO0VBQ0UsYUFBQTtFQUNBLDBCQUFBO0VBQ0EsU0FBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0FEbENOO0FEdEhFO0VFZ0pFO0lBV0ksZUFBQTtFRGpDTjtBQUNGO0FDbUNNO0VBQ0UsY0huU0k7RUdvU0oscUJBQUE7QURqQ1I7QUNvQ007RUFDRSxlQUFBO0FEbENSO0FDcUNNO0VBQ0UsV0FBQTtFQUNBLGNBQUE7RUFDQSxXQUFBO0FEbkNSO0FDc0NNO0VBQ0UsbUJBQUE7RUFDQSxjQUFBO0FEcENSO0FDeUNNO0VBQ0UseUJBQUE7RUFDQSxTQUFBO0FEdkNSO0FDMENNO0VBQ0UsY0FBQTtFQUNBLHFCQUFBO0FEeENSO0FDMENRO0VBQ0UsY0hsVUU7RUdtVUYscUJBQUE7RUFDQSxlQUFBO0FEeENWO0FDMkNRO0VBQ0UsMEJBQUE7RUFDQSxnQkFBQTtBRHpDVjtBQzhDSTtFQUNFLFdBQUE7RUFDQSxZQUFBO0FENUNOIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvaW5kZXgtbmV3L2hlYWRlci9oZWFkZXItbmV3LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBtYWluIHZhcmlhYmxlc1xuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9TW9udHNlcnJhdDoxMDAsMTAwaSwyMDAsMjAwaSwzMDAsMzAwaSw0MDAsNDAwaSw1MDAsNTAwaSw2MDAsNjAwaSw3MDAsNzAwaSw4MDAsODAwaSw5MDAsOTAwaSZkaXNwbGF5PXN3YXAnKTtcblxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBhZGRpdGlvbmFsIHZhcmlhYmxlc1xuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cblxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBjb2xvcnNcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG4kYmxhY2s6ICMwMDA7XG4kZ3JheTogIzgwODA4MDtcbiR3aGl0ZTogI2ZmZjtcbiRibHVlOiAjMDBGO1xuJHB1cnBsZTogIzhBNEQ3NjtcbiRwaW5rOiAjRkE3QzkxO1xuJGJyb3duOiAjNzU3NzYzO1xuJGJlaWdlLWxpZ2h0OiAjRDBEMUNEO1xuJGJlaWdlLWxpZ2h0ZXItMTogI0VGRjBFQjtcbiRiZWlnZS1saWdodGVyLTI6ICNGNEY0RjQ7XG5cbiRicm93bi1yZWQ6ICM4OTI3MzQ7XG4kZ29sZC15ZWxsb3c6ICNFOEMyMkM7XG4kZGFyay1ncmV5OiAjMjMyNDFmO1xuJGdyZXk6ICM0ZDRjNGQ7XG4kZ29sZDogI0QzQzE5ODtcbiRnb2xkLTI6ICNGMEVBRTM7XG4iLCIvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIG1haW4gbWl4aW5zXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuQG1peGluIGZvbnQtZmFjZSgkZm9udC1mYW1pbHksICRmaWxlLXBhdGgsICR3ZWlnaHQ6IG5vcm1hbCwgJHN0eWxlOiBub3JtYWwsICRhc3NldC1waXBlbGluZTogZmFsc2UpIHtcblx0QGZvbnQtZmFjZSB7XG5cdFx0Zm9udC1mYW1pbHk6ICRmb250LWZhbWlseTtcblx0XHRmb250LXdlaWdodDogJHdlaWdodDtcblx0XHRmb250LXN0eWxlOiAkc3R5bGU7XG5cblx0XHRAaWYgJGFzc2V0LXBpcGVsaW5lPT10cnVlIHtcblx0XHRcdHNyYzogZm9udC11cmwoJyN7JGZpbGUtcGF0aH0uZW90Jyk7XG5cdFx0XHRzcmM6IGZvbnQtdXJsKCcjeyRmaWxlLXBhdGh9LmVvdD8jaWVmaXgnKSBmb3JtYXQoJ2VtYmVkZGVkLW9wZW50eXBlJyksXG5cdFx0XHRmb250LXVybCgnI3skZmlsZS1wYXRofS53b2ZmJykgZm9ybWF0KCd3b2ZmJyksXG5cdFx0XHRmb250LXVybCgnI3skZmlsZS1wYXRofS50dGYnKSBmb3JtYXQoJ3RydWV0eXBlJyk7XG5cdFx0fVxuXG5cdFx0QGVsc2Uge1xuXHRcdFx0c3JjOiB1cmwoJyN7JGZpbGUtcGF0aH0uZW90Jyk7XG5cdFx0XHRzcmM6IHVybCgnI3skZmlsZS1wYXRofS5lb3Q/I2llZml4JykgZm9ybWF0KCdlbWJlZGRlZC1vcGVudHlwZScpLFxuXHRcdFx0dXJsKCcjeyRmaWxlLXBhdGh9LndvZmYnKSBmb3JtYXQoJ3dvZmYnKSxcblx0XHRcdHVybCgnI3skZmlsZS1wYXRofS50dGYnKSBmb3JtYXQoJ3RydWV0eXBlJyk7XG5cdFx0fVxuXHR9XG59XG5cbkBtaXhpbiBub3RleHQge1xuXHRvdmVyZmxvdzogaGlkZGVuO1xuXHR0ZXh0LWluZGVudDogLTk5OTlweDtcbn1cblxuLmNsZWFyZml4OmFmdGVyIHtcblx0Y29udGVudDogXCJcIjtcblx0ZGlzcGxheTogdGFibGU7XG5cdGNsZWFyOiBib3RoO1xufVxuXG4uY2VudGVyZWQge1xuXHRkaXNwbGF5OiB0YWJsZTtcblx0d2lkdGg6IDEwMCU7XG5cdGhlaWdodDogMTAwJTtcblxuXHQ+KiB7XG5cdFx0ZGlzcGxheTogdGFibGUtY2VsbDtcblx0XHR0ZXh0LWFsaWduOiBjZW50ZXI7XG5cdFx0dmVydGljYWwtYWxpZ246IG1pZGRsZTtcblx0fVxufVxuXG5AbWl4aW4gcGxhY2Vob2xkZXJDb2xvcigkaW5wdXQtdGV4dC1jb2xvcikge1xuXHQmOjotd2Via2l0LWlucHV0LXBsYWNlaG9sZGVyIHtcblx0XHRjb2xvcjogJGlucHV0LXRleHQtY29sb3I7XG5cdH1cblxuXHQmOi1tb3otcGxhY2Vob2xkZXIge1xuXHRcdGNvbG9yOiAkaW5wdXQtdGV4dC1jb2xvcjtcblx0XHRvcGFjaXR5OiAxO1xuXHR9XG5cblx0Jjo6LW1vei1wbGFjZWhvbGRlciB7XG5cdFx0Y29sb3I6ICRpbnB1dC10ZXh0LWNvbG9yO1xuXHRcdG9wYWNpdHk6IDE7XG5cdH1cblxuXHQmOi1tcy1pbnB1dC1wbGFjZWhvbGRlciB7XG5cdFx0Y29sb3I6ICRpbnB1dC10ZXh0LWNvbG9yO1xuXHR9XG5cblx0Jjo6cGxhY2Vob2xkZXIge1xuXHRcdGNvbG9yOiAkaW5wdXQtdGV4dC1jb2xvcjtcblx0XHRvcGFjaXR5OiAxO1xuXHR9XG5cblx0Jjpmb2N1czotbW96LXBsYWNlaG9sZGVyIHtcblx0XHRjb2xvcjogdHJhbnNwYXJlbnQ7XG5cdFx0b3BhY2l0eTogMTtcblx0fVxuXG5cdCY6Zm9jdXM6Oi1tb3otcGxhY2Vob2xkZXIge1xuXHRcdGNvbG9yOiB0cmFuc3BhcmVudDtcblx0XHRvcGFjaXR5OiAxO1xuXHR9XG5cblx0Jjpmb2N1czo6LXdlYmtpdC1pbnB1dC1wbGFjZWhvbGRlciB7XG5cdFx0Y29sb3I6IHRyYW5zcGFyZW50O1xuXHR9XG5cblx0Jjpmb2N1czotbXMtaW5wdXQtcGxhY2Vob2xkZXIge1xuXHRcdGNvbG9yOiB0cmFuc3BhcmVudDtcblx0fVxuXG5cdCY6Zm9jdXM6OnBsYWNlaG9sZGVyIHtcblx0XHRjb2xvcjogdHJhbnNwYXJlbnQ7XG5cdH1cbn1cblxuQG1peGluIGNsZWFyZml4IHtcblx0JjphZnRlciB7XG5cdFx0Y29udGVudDogXCIgXCI7XG5cdFx0ZGlzcGxheTogYmxvY2s7XG5cdFx0Y2xlYXI6IGJvdGg7XG5cdH1cbn1cblxuLy8gY2xlYXIgc2VsZWN0IHdpdGhvdXQgZGVmYXVsdCBidXR0b25cbkBtaXhpbiBjbGVhclNlbGVjdCB7XG5cdC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcblx0LW1vei1hcHBlYXJhbmNlOiBub25lO1xuXHRhcHBlYXJhbmNlOiBub25lO1xuXHQtd2Via2l0LWJvcmRlci1yYWRpdXM6IDA7XG5cdC1tb3otYm9yZGVyLXJhZGl1czogMDtcblx0Ym9yZGVyLXJhZGl1czogMDtcbn1cblxuLy8gZWxlbWVudHMgZ2V0IGFwcGVuZGVkIHdpdGggXCJfX1wiIGFuZCB0aGUgJG5hbWVcbkBtaXhpbiBlKCRuYW1lKSB7XG5cdEBhdC1yb290ICN7Jn1fI3skbmFtZX0ge1xuXHRcdEBjb250ZW50O1xuXHR9XG59XG5cbi8vIG1vZGlmaWVycyBnZXQgYXBwZW5kZWQgd2l0aCBcIi0tXCIgYW5kIHRoZSAkbmFtZVxuQG1peGluIG0oJG5hbWUpIHtcblx0QGF0LXJvb3QgI3smfS0tI3skbmFtZX0ge1xuXHRcdEBjb250ZW50O1xuXHR9XG59XG5cbi8vIGJyZWFrcG9pbnRzXG5AbWl4aW4gYigkcG9pbnQpIHtcblx0QGlmICRwb2ludD09ZGVza3RvcCB7XG5cdFx0QG1lZGlhIChtYXgtd2lkdGg6IDEzNjZweCkgYW5kIChtaW4td2lkdGg6MTAyNHB4KSB7XG5cdFx0XHRAY29udGVudCA7XG5cdFx0fVxuXHR9XG5cblx0QGVsc2UgaWYgJHBvaW50PT10YWJsZXQge1xuXHRcdEBtZWRpYSAobWF4LXdpZHRoOiAxMDAwcHgpIHtcblx0XHRcdEBjb250ZW50IDtcblx0XHR9XG5cdH1cblxuXHRAZWxzZSBpZiAkcG9pbnQ9PW1vYmlsZSB7XG5cdFx0QG1lZGlhIChtYXgtd2lkdGg6IDc2N3B4KSB7XG5cdFx0XHRAY29udGVudCA7XG5cdFx0fVxuXHR9XG5cblx0QGVsc2UgaWYgJHBvaW50PT1tb2JpbGUzeCB7XG5cblx0XHRAbWVkaWEgb25seSBzY3JlZW4gYW5kICgtd2Via2l0LW1pbi1kZXZpY2UtcGl4ZWwtcmF0aW86IDMpLFxuXHRcdG9ubHkgc2NyZWVuIGFuZCAobWluLXJlc29sdXRpb246IDNkcHB4KSxcblx0XHRvbmx5IHNjcmVlbiBhbmQgKG1pbi1yZXNvbHV0aW9uOiAzNTBkcGkpIHtcblx0XHRcdEBjb250ZW50IDtcblx0XHR9XG5cdH1cblxuXHRAZWxzZSB7XG5cdFx0QG1lZGlhIChtYXgtd2lkdGg6ICRwb2ludCArICdweCcpIHtcblx0XHRcdEBjb250ZW50IDtcblx0XHR9XG5cdH1cbn1cblxuLy8gYnJlYWtwb2ludHNcbkBtaXhpbiBiYigkcG9pbnRNYXgsICRwb2ludE1pbikge1xuXHRAbWVkaWEgKG1heC13aWR0aDogJHBvaW50TWF4ICsgJ3B4JykgYW5kIChtaW4td2lkdGg6ICRwb2ludE1pbiArICdweCcpIHtcblx0XHRAY29udGVudCA7XG5cdH1cbn1cblxuQG1peGluIGllKCkge1xuXG5cdEBtZWRpYSBzY3JlZW4gYW5kICgtbXMtaGlnaC1jb250cmFzdDogYWN0aXZlKSxcblx0KC1tcy1oaWdoLWNvbnRyYXN0OiBub25lKSB7XG5cdFx0QGNvbnRlbnQgO1xuXHR9XG59XG5cbkBtaXhpbiBiZWZvcmUtaW1nKCRkaXNwbGF5LCAkd2lkdGgsICRoZWlnaHQsICRwb3NpdGlvbikge1xuXHRAYXQtcm9vdCAjeyZ9OmJlZm9yZSB7XG5cdFx0Y29udGVudDogJyc7XG5cdFx0ZGlzcGxheTogJGRpc3BsYXk7XG5cblx0XHRAaWYgJHBvc2l0aW9uPT1hIHtcblx0XHRcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcblx0XHR9XG5cblx0XHRAaWYgJHBvc2l0aW9uPT1yIHtcblx0XHRcdHBvc2l0aW9uOiByZWxhdGl2ZTtcblx0XHR9XG5cblx0XHR3aWR0aDogJHdpZHRoO1xuXHRcdGhlaWdodDogJGhlaWdodDtcblx0XHRAY29udGVudDtcblx0fVxufVxuXG5AbWl4aW4gYWZ0ZXItaW1nKCRkaXNwbGF5LCAkd2lkdGgsICRoZWlnaHQsICRwb3NpdGlvbikge1xuXHRAYXQtcm9vdCAjeyZ9OmFmdGVyIHtcblx0XHRjb250ZW50OiAnJztcblx0XHRkaXNwbGF5OiAkZGlzcGxheTtcblxuXHRcdEBpZiAkcG9zaXRpb249PWEge1xuXHRcdFx0cG9zaXRpb246IGFic29sdXRlO1xuXHRcdH1cblxuXHRcdEBpZiAkcG9zaXRpb249PXIge1xuXHRcdFx0cG9zaXRpb246IHJlbGF0aXZlO1xuXHRcdH1cblxuXHRcdHdpZHRoOiAkd2lkdGg7XG5cdFx0aGVpZ2h0OiAkaGVpZ2h0O1xuXHRcdEBjb250ZW50O1xuXHR9XG59XG5cbi8qIHJlbSBmb250IHNpemUgd2l0aCBmYWxsYmFjayB8IHVzYWdlOlxuXHRwIHtcblx0XHRAaW5jbHVkZSBmb250LXNpemUoMTRweClcblx0fSovXG5cbkBmdW5jdGlvbiBjYWxjdWxhdGVSZW0oJHNpemUpIHtcblx0JHJlbVNpemU6ICRzaXplIC8gMTZweDtcblx0QHJldHVybiAkcmVtU2l6ZSAqIDFyZW07XG59XG5cbkBtaXhpbiBmb250LXNpemUoJHNpemUpIHtcblx0Zm9udC1zaXplOiAkc2l6ZTtcblx0Zm9udC1zaXplOiBjYWxjdWxhdGVSZW0oJHNpemUpO1xufVxuXG5AbWl4aW4gdGV4dEN1dCgkY29sLCAkaGVpZ2h0KSB7XG5cdGRpc3BsYXk6IC13ZWJraXQtYm94O1xuXHQtd2Via2l0LWxpbmUtY2xhbXA6ICRjb2w7XG5cdC13ZWJraXQtYm94LW9yaWVudDogdmVydGljYWw7XG5cdG92ZXJmbG93OiBoaWRkZW47XG5cdG1heC1oZWlnaHQ6ICRoZWlnaHQ7XG59XG5cbi8vIGJ1dHRvbnNcblxuQG1peGluIGJ0bi1ncmFkaWVudCgkY1RleHQsICRjSG92ZXIsICRkaXJlY3Rpb24sICRjRmlyc3QsICRjU2Vjb25zLCAkY1RoaXJkLCAkaG92ZXIpIHtcblx0Y29sb3I6ICRjVGV4dDtcblx0dHJhbnNpdGlvbjogMC41cztcblx0YmFja2dyb3VuZC1zaXplOiAyMDAlIGF1dG87XG5cdGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgkZGlyZWN0aW9uLCAkY0ZpcnN0IDAlLCAkY1NlY29ucyA1MSUsICRjVGhpcmQgMTAwJSk7XG5cblx0Jjpob3ZlciB7XG5cdFx0dGV4dC1kZWNvcmF0aW9uOiBub25lO1xuXHRcdGJhY2tncm91bmQtcG9zaXRpb246ICRob3Zlcjtcblx0XHRjb2xvcjogJGNIb3Zlcjtcblx0XHRib3gtc2hhZG93OiAwcHggMjBweCAzMHB4IC0xNXB4ICRjVGhpcmQ7XG5cdH1cbn1cblxuQG1peGluIGdyYWRpZW50KCR0b3AsICRib3R0b20pIHtcblx0YmFja2dyb3VuZDogJHRvcDtcblx0YmFja2dyb3VuZDogLW1vei1saW5lYXItZ3JhZGllbnQodG9wLCAkdG9wIDAlLCAkYm90dG9tIDEwMCUpO1xuXHRiYWNrZ3JvdW5kOiAtd2Via2l0LWdyYWRpZW50KGxpbmVhciwgbGVmdCB0b3AsIGxlZnQgYm90dG9tLCBjb2xvci1zdG9wKDAlLCAkdG9wKSwgY29sb3Itc3RvcCgxMDAlLCAkYm90dG9tKSk7XG5cdGJhY2tncm91bmQ6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KHRvcCwgJHRvcCAwJSwgJGJvdHRvbSAxMDAlKTtcblx0YmFja2dyb3VuZDogLW8tbGluZWFyLWdyYWRpZW50KHRvcCwgJHRvcCAwJSwgJGJvdHRvbSAxMDAlKTtcblx0YmFja2dyb3VuZDogLW1zLWxpbmVhci1ncmFkaWVudCh0b3AsICR0b3AgMCUsICRib3R0b20gMTAwJSk7XG5cdGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sICR0b3AgMCUsICRib3R0b20gMTAwJSk7XG5cdGZpbHRlcjogcHJvZ2lkOkRYSW1hZ2VUcmFuc2Zvcm0uTWljcm9zb2Z0LmdyYWRpZW50KHN0YXJ0Q29sb3JzdHI9JyN7JHRvcH0nLCBlbmRDb2xvcnN0cj0nI3skYm90dG9tfSAnLCBHcmFkaWVudFR5cGU9MCk7XG59IiwiQGltcG9ydCB1cmwoXCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9TW9udHNlcnJhdDoxMDAsMTAwaSwyMDAsMjAwaSwzMDAsMzAwaSw0MDAsNDAwaSw1MDAsNTAwaSw2MDAsNjAwaSw3MDAsNzAwaSw4MDAsODAwaSw5MDAsOTAwaSZkaXNwbGF5PXN3YXBcIik7XG4uY2xlYXJmaXg6YWZ0ZXIge1xuICBjb250ZW50OiBcIlwiO1xuICBkaXNwbGF5OiB0YWJsZTtcbiAgY2xlYXI6IGJvdGg7XG59XG5cbi5jZW50ZXJlZCB7XG4gIGRpc3BsYXk6IHRhYmxlO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuLmNlbnRlcmVkID4gKiB7XG4gIGRpc3BsYXk6IHRhYmxlLWNlbGw7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbn1cblxuLyogcmVtIGZvbnQgc2l6ZSB3aXRoIGZhbGxiYWNrIHwgdXNhZ2U6XG5cdHAge1xuXHRcdEBpbmNsdWRlIGZvbnQtc2l6ZSgxNHB4KVxuXHR9Ki9cbi5oZWFkZXIge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHdpZHRoOiAxMDAlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIGhlaWdodDogNzBweDtcbiAgcGFkZGluZzogNXB4IDcwcHg7XG4gIGJhY2tncm91bmQ6ICNlM2U5ZWU7XG4gIG1hcmdpbi10b3A6IDA7XG4gIHotaW5kZXg6IDk5OTtcbiAgdHJhbnNpdGlvbjogMC4ycyBlYXNlO1xufVxuLmhlYWRlci1hZG1pbiB7XG4gIHBhZGRpbmc6IDIwcHggIWltcG9ydGFudDtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA3NTBweCkge1xuICAuaGVhZGVyLWFkbWluIHtcbiAgICBwYWRkaW5nOiAxMHB4IDIwcHggIWltcG9ydGFudDtcbiAgfVxufVxuLmhlYWRlci1oaWRlIHtcbiAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDEzNjZweCkge1xuICAuaGVhZGVyIC5jb250YWluZXIge1xuICAgIHBhZGRpbmc6IDBweDtcbiAgfVxufVxuLmhlYWRlci1zY3JvbGwge1xuICBtYXJnaW4tdG9wOiAwICFpbXBvcnRhbnQ7XG4gIHBhZGRpbmc6IDBweCAyMHB4O1xuICBoZWlnaHQ6IGF1dG87XG4gIGJveC1zaGFkb3c6IDBweCAycHggOHB4IC0zcHggIzAwMDAwMDUyO1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDkwMHB4KSBhbmQgKG1pbi13aWR0aDogNzUwcHgpIHtcbiAgLmhlYWRlci1zY3JvbGwgLmhlYWRlci1tZW51LWxpbmsge1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDkwMHB4KSB7XG4gIC5oZWFkZXIge1xuICAgIHBhZGRpbmc6IDEwcHggMjBweDtcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDc1MHB4KSB7XG4gIC5oZWFkZXIge1xuICAgIG1hcmdpbi10b3A6IDAgIWltcG9ydGFudDtcbiAgICBwYWRkaW5nOiAxMHB4IDEwcHg7XG4gICAgaGVpZ2h0OiBhdXRvO1xuICB9XG59XG4uaGVhZGVyLXdyYXAge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA3NTBweCkge1xuICAuaGVhZGVyLXdyYXAge1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIH1cbn1cbi5oZWFkZXItbG9nby1ibG9jayB7XG4gIGZsZXgtYmFzaXM6IDMwMHB4O1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDkwMHB4KSB7XG4gIC5oZWFkZXItbG9nby1ibG9jayB7XG4gICAgZmxleC1iYXNpczogMjAwcHg7XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA3NTBweCkge1xuICAuaGVhZGVyLWxvZ28tYmxvY2sge1xuICAgIGZsZXgtYmFzaXM6IGF1dG87XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgfVxufVxuLmhlYWRlci1sb2dvLWJsb2NrIGltZyB7XG4gIHdpZHRoOiAyMDBweDtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA5MDBweCkge1xuICAuaGVhZGVyLWxvZ28tYmxvY2sgaW1nIHtcbiAgICB3aWR0aDogMjAwcHg7XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiAzNzBweCkge1xuICAuaGVhZGVyLWxvZ28tYmxvY2sgaW1nIHtcbiAgICB3aWR0aDogMTUwcHg7XG4gIH1cbn1cbi5oZWFkZXItbWVudS1ibG9jayB7XG4gIGZsZXgtYmFzaXM6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgdHJhbnNpdGlvbjogMC40cyBlYXNlO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICBwYWRkaW5nLXJpZ2h0OiA4MHB4O1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDc1MHB4KSB7XG4gIC5oZWFkZXItbWVudS1ibG9jayB7XG4gICAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgbWF4LWhlaWdodDogMHB4O1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgcGFkZGluZy1yaWdodDogMHB4O1xuICB9XG59XG4uaGVhZGVyLW1lbnUtYmxvY2stYWRtaW4ge1xuICBmbGV4LWJhc2lzOiBhdXRvO1xuICBtYXJnaW4tcmlnaHQ6IDEwMHB4O1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDc1MHB4KSB7XG4gIC5oZWFkZXItbWVudS1ibG9jay1hZG1pbiB7XG4gICAgbWFyZ2luLXJpZ2h0OiAwO1xuICB9XG59XG4uaGVhZGVyLW1lbnUtbGluayB7XG4gIGNvbG9yOiBibGFjaztcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICB0cmFuc2l0aW9uOiAwLjFzIGVhc2U7XG4gIG1hcmdpbjogMnB4IDE1cHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBsaW5lLWhlaWdodDogMTdweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG59XG5AbWVkaWEgKG1heC13aWR0aDogMTAwMHB4KSB7XG4gIC5oZWFkZXItbWVudS1saW5rIHtcbiAgICBtYXJnaW46IDJweCAxMHB4O1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDc1MHB4KSB7XG4gIC5oZWFkZXItbWVudS1saW5rIHtcbiAgICBtYXJnaW46IDdweCAxMHB4O1xuICAgIGNvbG9yOiAjMDAwO1xuICB9XG59XG4uaGVhZGVyLW1lbnUtbGluazpob3ZlciB7XG4gIGNvbG9yOiAjODkyNzM0ICFpbXBvcnRhbnQ7XG59XG4uaGVhZGVyLW1lbnUtdG9nZ2xlLWJsb2NrIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cbi5oZWFkZXItbWVudS10b2dnbGUtYmxvY2sgbGFiZWwge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuLmhlYWRlci1tZW51LXRvZ2dsZS1ibG9jayBsYWJlbCAubGluZS10b2dnbGUge1xuICBoZWlnaHQ6IDJweDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBncmF5O1xuICB3aWR0aDogMzBweDtcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xufVxuLmhlYWRlci1tZW51LXRvZ2dsZS1ibG9jayBpbnB1dCB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5AbWVkaWEgKG1heC13aWR0aDogNzUwcHgpIHtcbiAgLmhlYWRlci1tZW51LXRvZ2dsZS1ibG9jayB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgZmxvYXQ6IHJpZ2h0O1xuICAgIG1hcmdpbi10b3A6IDVweDtcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDM3MHB4KSB7XG4gIC5oZWFkZXItbWVudS10b2dnbGUtYmxvY2sge1xuICAgIG1hcmdpbi10b3A6IDNweDtcbiAgfVxufVxuXG4ubWVudS1vcGVuIHtcbiAgbWF4LWhlaWdodDogMTYwcHggIWltcG9ydGFudDtcbn1cblxuLmxhbmd1YWdlLXNlbGVjdCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDVweDtcbiAgdG9wOiAxNXB4O1xuICB6LWluZGV4OiAyO1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDEwMDBweCkge1xuICAubGFuZ3VhZ2Utc2VsZWN0IHtcbiAgICByaWdodDogMTBweDtcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDkwMHB4KSB7XG4gIC5sYW5ndWFnZS1zZWxlY3Qge1xuICAgIHRvcDogNnB4O1xuICB9XG59XG4ubGFuZ3VhZ2Utc2VsZWN0LWFkbWluIHtcbiAgdG9wOiAtNHB4O1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDc1MHB4KSB7XG4gIC5sYW5ndWFnZS1zZWxlY3QtYWRtaW4ge1xuICAgIHRvcDogMDtcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDkwMHB4KSB7XG4gIC5sYW5ndWFnZS1zZWxlY3Qge1xuICAgIHJpZ2h0OiAwcHg7XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA3NTBweCkge1xuICAubGFuZ3VhZ2Utc2VsZWN0IHtcbiAgICByaWdodDogNTBweDtcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDM3MHB4KSB7XG4gIC5sYW5ndWFnZS1zZWxlY3Qge1xuICAgIHRvcDogMXB4O1xuICAgIHJpZ2h0OiA0MHB4O1xuICB9XG59XG4ubGFuZ3VhZ2Utc2VsZWN0LWxpc3Qge1xuICBkaXNwbGF5OiBibG9jaztcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xuICBwYWRkaW5nOiAwO1xuICBtYXJnaW46IDA7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgYm9yZGVyOiBub25lO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlM2U5ZWU7XG4gIGNvbG9yOiBncmF5O1xufVxuLmxhbmd1YWdlLXNlbGVjdC1saXN0OmFmdGVyIHtcbiAgY29udGVudDogXCJcIjtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHdpZHRoOiA4cHg7XG4gIGhlaWdodDogOHB4O1xuICBib3JkZXItd2lkdGg6IDJweCAycHggMCAwO1xuICBib3JkZXItc3R5bGU6IHNvbGlkO1xuICBib3JkZXItY29sb3I6IGdyYXk7XG4gIHRyYW5zZm9ybTogcm90YXRlKDEzNWRlZyk7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA5cHg7XG4gIHJpZ2h0OiAxMXB4O1xuICB0cmFuc2l0aW9uOiAwLjJzIGVhc2U7XG59XG4ubGFuZ3VhZ2Utc2VsZWN0LWxpc3Q6bm90KC5vcGVuZWQpOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2UzZTllZTtcbn1cbi5sYW5ndWFnZS1zZWxlY3QtbGlzdCBsaSB7XG4gIGRpc3BsYXk6IG5vbmU7XG4gIHBhZGRpbmc6IDVweCAxMHB4IDVweCAxMHB4O1xuICBtYXJnaW46IDA7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xuICBsaW5lLWhlaWdodDogMjBweDtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBjb2xvcjogZ3JheTtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiAxMDAwcHgpIHtcbiAgLmxhbmd1YWdlLXNlbGVjdC1saXN0IGxpIHtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gIH1cbn1cbi5sYW5ndWFnZS1zZWxlY3QtbGlzdCBsaTpob3ZlciB7XG4gIGNvbG9yOiAjODkyNzM0O1xuICB0cmFuc2l0aW9uOiAwLjRzIGVhc2U7XG59XG4ubGFuZ3VhZ2Utc2VsZWN0LWxpc3QgbGkgc3BhbiB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5sYW5ndWFnZS1zZWxlY3QtbGlzdCBsaTphZnRlciB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBjbGVhcjogYm90aDtcbn1cbi5sYW5ndWFnZS1zZWxlY3QtbGlzdCBsaS5hY3RpdmUge1xuICBwYWRkaW5nLXJpZ2h0OiAzMHB4O1xuICBkaXNwbGF5OiBibG9jaztcbn1cbi5sYW5ndWFnZS1zZWxlY3QtbGlzdC5vcGVuZWQ6YWZ0ZXIge1xuICB0cmFuc2Zvcm06IHJvdGF0ZSgtNDVkZWcpO1xuICB0b3A6IDEzcHg7XG59XG4ubGFuZ3VhZ2Utc2VsZWN0LWxpc3Qub3BlbmVkIGxpIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHRyYW5zaXRpb246IDAuNHMgZWFzZTtcbn1cbi5sYW5ndWFnZS1zZWxlY3QtbGlzdC5vcGVuZWQgbGk6aG92ZXIge1xuICBjb2xvcjogIzg5MjczNDtcbiAgdHJhbnNpdGlvbjogMC40cyBlYXNlO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4ubGFuZ3VhZ2Utc2VsZWN0LWxpc3Qub3BlbmVkIGxpICsgbGkge1xuICBib3JkZXItdG9wOiAxcHggc29saWQgI2RkZDtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbn1cbi5sYW5ndWFnZS1zZWxlY3QtbGlzdCBpbWcge1xuICB3aWR0aDogMjRweDtcbiAgaGVpZ2h0OiAyNHB4O1xufSIsIkBpbXBvcnQgXCIuLi8uLi8uLi8uLi9zY3NzL3ZhcnNcIjtcbkBpbXBvcnQgXCIuLi8uLi8uLi8uLi9zY3NzL21peGluc1wiO1xuXG4uaGVhZGVyIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB3aWR0aDogMTAwJTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICBoZWlnaHQ6IDcwcHg7XG4gIHBhZGRpbmc6IDVweCA3MHB4O1xuICBiYWNrZ3JvdW5kOiAjZTNlOWVlO1xuICBtYXJnaW4tdG9wOiAwO1xuICB6LWluZGV4OiA5OTk7XG4gIHRyYW5zaXRpb246IDAuMnMgZWFzZTtcblxuICAmLWFkbWluIHtcbiAgICBwYWRkaW5nOiAyMHB4ICFpbXBvcnRhbnQ7XG5cbiAgICBAaW5jbHVkZSBiKDc1MCkge1xuICAgICAgcGFkZGluZzogMTBweCAyMHB4ICFpbXBvcnRhbnQ7XG4gICAgfVxuICB9XG5cbiAgLy8gJi1idXkge1xuICAvLyAgIHBhZGRpbmc6IDE1cHggMDtcbiAgLy8gICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcblxuICAgIC8vIEBpbmNsdWRlIGIoMTQwMCkge1xuICAgIC8vICAgcGFkZGluZzogMTVweDtcbiAgICAvLyB9XG5cbiAgICAvLyBAaW5jbHVkZSBiKDc1MCkge1xuICAgIC8vICAgYmFja2dyb3VuZDogYmxhY2s7XG4gICAgLy8gfVxuXG4gICAgLy8gJi5oZWFkZXItc2Nyb2xsIHtcbiAgICAvLyAgIGJveC1zaGFkb3c6IG5vbmU7XG4gICAgLy8gICBiYWNrZ3JvdW5kOiBibGFjaztcbiAgICAvLyAgIHBhZGRpbmc6IDE1cHggMDtcblxuICAgIC8vICAgQGluY2x1ZGUgYigxNDAwKSB7XG4gICAgLy8gICAgIHBhZGRpbmc6IDE1cHg7XG4gICAgLy8gICB9XG5cbiAgICAvLyAgIEBpbmNsdWRlIGIoOTAwKSB7XG4gICAgLy8gICAgIHBhZGRpbmc6IDEwcHggMjBweDtcbiAgICAvLyAgIH1cblxuICAgIC8vICAgQGluY2x1ZGUgYig3NTApIHtcbiAgICAvLyAgICAgcGFkZGluZzogMTBweCAxMHB4O1xuICAgIC8vICAgfVxuICAgIC8vIH1cblxuICAgIC8vIC5oZWFkZXIge1xuICAgIC8vICAgJi1sb2dvLWJsb2NrIHtcbiAgICAvLyAgICAgaW1nIHtcbiAgICAvLyAgICAgICB3aWR0aDogYXV0bztcblxuICAgIC8vICAgICAgIEBpbmNsdWRlIGIoOTAwKSB7XG4gICAgLy8gICAgICAgICB3aWR0aDogMjAwcHg7XG4gICAgLy8gICAgICAgfVxuXG4gICAgLy8gICAgICAgQGluY2x1ZGUgYigzNzApIHtcbiAgICAvLyAgICAgICAgIHdpZHRoOiAxNTBweDtcbiAgICAvLyAgICAgICB9XG4gICAgLy8gICAgIH1cbiAgICAvLyAgIH1cbiAgICAvLyB9XG5cbiAgICAvLyAuaGVhZGVyLW1lbnUtbGluayB7XG4gICAgLy8gICBjb2xvcjogd2hpdGU7XG4gICAgLy8gfVxuICAvLyB9XG5cbiAgJi1oaWRlIHtcbiAgICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XG4gIH1cblxuICAuY29udGFpbmVyIHtcbiAgICBAaW5jbHVkZSBiKDEzNjYpIHtcbiAgICAgIHBhZGRpbmc6IDBweDtcbiAgICB9XG4gIH1cblxuICAmLXNjcm9sbCB7XG4gICAgbWFyZ2luLXRvcDogMCAhaW1wb3J0YW50O1xuICAgIHBhZGRpbmc6IDBweCAyMHB4O1xuICAgIGhlaWdodDogYXV0bztcbiAgICBib3gtc2hhZG93OiAwcHggMnB4IDhweCAtM3B4ICMwMDAwMDA1MjtcblxuICAgIC5oZWFkZXItbWVudS1saW5rIHtcbiAgICAgIEBpbmNsdWRlIGJiKDkwMCwgNzUwKSB7XG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBAaW5jbHVkZSBiKDkwMCkge1xuICAgIHBhZGRpbmc6IDEwcHggMjBweDtcbiAgfVxuXG4gIEBpbmNsdWRlIGIoNzUwKSB7XG4gICAgLy8gYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgbWFyZ2luLXRvcDogMCAhaW1wb3J0YW50O1xuICAgIHBhZGRpbmc6IDEwcHggMTBweDtcbiAgICBoZWlnaHQ6IGF1dG87XG4gIH1cblxuICAmLXdyYXAge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcblxuICAgIEBpbmNsdWRlIGIoNzUwKSB7XG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIH1cbiAgfVxuXG4gICYtbG9nby1ibG9jayB7XG4gICAgZmxleC1iYXNpczogMzAwcHg7XG5cbiAgICBAaW5jbHVkZSBiKDkwMCkge1xuICAgICAgZmxleC1iYXNpczogMjAwcHg7XG4gICAgfVxuXG4gICAgQGluY2x1ZGUgYig3NTApIHtcbiAgICAgIGZsZXgtYmFzaXM6IGF1dG87XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICB9XG5cbiAgICBpbWcge1xuICAgICAgd2lkdGg6IDIwMHB4O1xuXG4gICAgICBAaW5jbHVkZSBiKDkwMCkge1xuICAgICAgICB3aWR0aDogMjAwcHg7XG4gICAgICB9XG5cbiAgICAgIEBpbmNsdWRlIGIoMzcwKSB7XG4gICAgICAgIHdpZHRoOiAxNTBweDtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAmLW1lbnUge1xuICAgICYtYmxvY2sge1xuICAgICAgZmxleC1iYXNpczogMTAwJTtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgdHJhbnNpdGlvbjogMC40cyBlYXNlO1xuICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgICAgIHBhZGRpbmctcmlnaHQ6IDgwcHg7XG5cbiAgICAgIEBpbmNsdWRlIGIoNzUwKSB7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgbWF4LWhlaWdodDogMHB4O1xuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICBwYWRkaW5nLXJpZ2h0OiAwcHg7XG4gICAgICB9XG5cbiAgICAgICYtYWRtaW4ge1xuICAgICAgICBmbGV4LWJhc2lzOiBhdXRvO1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IDEwMHB4O1xuXG4gICAgICAgIEBpbmNsdWRlIGIoNzUwKSB7XG4gICAgICAgICAgbWFyZ2luLXJpZ2h0OiAwO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgJi1saW5rIHtcbiAgICAgIGNvbG9yOiBibGFjaztcbiAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgIHRyYW5zaXRpb246IDAuMXMgZWFzZTtcbiAgICAgIG1hcmdpbjogMnB4IDE1cHg7XG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICBsaW5lLWhlaWdodDogMTdweDtcbiAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcblxuICAgICAgQGluY2x1ZGUgYigxMDAwKSB7XG4gICAgICAgIG1hcmdpbjogMnB4IDEwcHg7XG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgIH1cblxuICAgICAgQGluY2x1ZGUgYig3NTApIHtcbiAgICAgICAgbWFyZ2luOiA3cHggMTBweDtcbiAgICAgICAgY29sb3I6ICRibGFjaztcbiAgICAgIH1cblxuICAgICAgJjpob3ZlciB7XG4gICAgICAgIGNvbG9yOiAkYnJvd24tcmVkICFpbXBvcnRhbnQ7XG4gICAgICB9XG4gICAgfVxuXG4gICAgJi10b2dnbGUtYmxvY2sge1xuICAgICAgZGlzcGxheTogbm9uZTtcblxuICAgICAgbGFiZWwge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXG4gICAgICAgIC5saW5lLXRvZ2dsZSB7XG4gICAgICAgICAgaGVpZ2h0OiAycHg7XG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IGdyYXk7XG4gICAgICAgICAgd2lkdGg6IDMwcHg7XG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogNXB4O1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlucHV0IHtcbiAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgIH1cblxuICAgICAgQGluY2x1ZGUgYig3NTApIHtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIGZsb2F0OiByaWdodDtcbiAgICAgICAgbWFyZ2luLXRvcDogNXB4O1xuICAgICAgfVxuXG4gICAgICBAaW5jbHVkZSBiKDM3MCkge1xuICAgICAgICBtYXJnaW4tdG9wOiAzcHg7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbi5tZW51LW9wZW4ge1xuICBtYXgtaGVpZ2h0OiAxNjBweCAhaW1wb3J0YW50O1xufVxuXG4ubGFuZ3VhZ2Utc2VsZWN0IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogNXB4O1xuICB0b3A6IDE1cHg7XG4gIHotaW5kZXg6IDI7XG5cbiAgQGluY2x1ZGUgYigxMDAwKSB7XG4gICAgcmlnaHQ6IDEwcHg7XG4gIH1cblxuICBAaW5jbHVkZSBiKDkwMCkge1xuICAgIHRvcDogNnB4O1xuICB9XG5cbiAgJi1hZG1pbiB7XG4gICAgdG9wOiAtNHB4O1xuXG4gICAgQGluY2x1ZGUgYig3NTApIHtcbiAgICAgIHRvcDogMDtcbiAgICB9XG4gIH1cbiAgQGluY2x1ZGUgYig5MDApIHtcbiAgICByaWdodDogMHB4O1xuICB9XG5cbiAgQGluY2x1ZGUgYig3NTApIHtcbiAgICByaWdodDogNTBweDtcbiAgfVxuXG4gIEBpbmNsdWRlIGIoMzcwKSB7XG4gICAgdG9wOiAxcHg7XG4gICAgcmlnaHQ6IDQwcHg7XG4gIH1cblxuICAmLWxpc3Qge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcbiAgICBwYWRkaW5nOiAwO1xuICAgIG1hcmdpbjogMDtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTNlOWVlO1xuICAgIGNvbG9yOiBncmF5O1xuXG4gICAgJjphZnRlciB7XG4gICAgICBjb250ZW50OiBcIlwiO1xuICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICB3aWR0aDogOHB4O1xuICAgICAgaGVpZ2h0OiA4cHg7XG4gICAgICBib3JkZXItd2lkdGg6IDJweCAycHggMCAwO1xuICAgICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcbiAgICAgIGJvcmRlci1jb2xvcjogZ3JheTtcbiAgICAgIHRyYW5zZm9ybTogcm90YXRlKDEzNWRlZyk7XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICB0b3A6IDlweDtcbiAgICAgIHJpZ2h0OiAxMXB4O1xuICAgICAgdHJhbnNpdGlvbjogMC4ycyBlYXNlO1xuICAgIH1cblxuICAgICY6bm90KC5vcGVuZWQpIHtcbiAgICAgICY6aG92ZXIge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTNlOWVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxpIHtcbiAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICBwYWRkaW5nOiA1cHggMTBweCA1cHggMTBweDtcbiAgICAgIG1hcmdpbjogMDtcbiAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xuICAgICAgbGluZS1oZWlnaHQ6IDIwcHg7XG4gICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICBmb250LXdlaWdodDogbm9ybWFsO1xuICAgICAgY29sb3I6IGdyYXk7XG5cbiAgICAgIEBpbmNsdWRlIGIoMTAwMCkge1xuICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICB9XG5cbiAgICAgICY6aG92ZXIge1xuICAgICAgICBjb2xvcjogJGJyb3duLXJlZDtcbiAgICAgICAgdHJhbnNpdGlvbjogMC40cyBlYXNlO1xuICAgICAgfVxuXG4gICAgICBzcGFuIHtcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgfVxuXG4gICAgICAmOmFmdGVyIHtcbiAgICAgICAgY29udGVudDogXCJcIjtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIGNsZWFyOiBib3RoO1xuICAgICAgfVxuXG4gICAgICAmLmFjdGl2ZSB7XG4gICAgICAgIHBhZGRpbmctcmlnaHQ6IDMwcHg7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgfVxuICAgIH1cblxuICAgICYub3BlbmVkIHtcbiAgICAgICY6YWZ0ZXIge1xuICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtNDVkZWcpO1xuICAgICAgICB0b3A6IDEzcHg7XG4gICAgICB9XG5cbiAgICAgIGxpIHtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIHRyYW5zaXRpb246IDAuNHMgZWFzZTtcblxuICAgICAgICAmOmhvdmVyIHtcbiAgICAgICAgICBjb2xvcjogJGJyb3duLXJlZDtcbiAgICAgICAgICB0cmFuc2l0aW9uOiAwLjRzIGVhc2U7XG4gICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICB9XG5cbiAgICAgICAgKyBsaSB7XG4gICAgICAgICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNkZGQ7XG4gICAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGltZyB7XG4gICAgICB3aWR0aDogMjRweDtcbiAgICAgIGhlaWdodDogMjRweDtcbiAgICB9XG4gIH1cbn1cbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HeaderNewComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-header-new',
                templateUrl: './header-new.component.html',
                styleUrls: ['./header-new.component.scss'],
                host: { '(document:click)': 'onClick($event)' },
            }]
    }], function () { return [{ type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }, { type: src_app_service_user_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/pages/index-new/index-new.component.ts":
/*!********************************************************!*\
  !*** ./src/app/pages/index-new/index-new.component.ts ***!
  \********************************************************/
/*! exports provided: IndexNewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IndexNewComponent", function() { return IndexNewComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! swiper */ "./node_modules/swiper/js/swiper.esm.bundle.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");






function IndexNewComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "h2", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "p", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const slide_r1 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("background-image", "url(assets/img/slider/" + slide_r1[ctx_r0.lang].image + ")", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefaultStyleSanitizer"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("background-image", "url(assets/img/slider/" + slide_r1[ctx_r0.lang].image_mob + ")", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefaultStyleSanitizer"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", slide_r1[ctx_r0.lang].title, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", slide_r1[ctx_r0.lang].text, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", "/assets/downloads/pdf/" + slide_r1[ctx_r0.lang].file);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", slide_r1[ctx_r0.lang].button, " >");
} }
class IndexNewComponent {
    constructor(translate) {
        this.translate = translate;
        this.lang = 'eng';
        this.slider = [
            {
                eng: {
                    title: 'Ducatus Coin',
                    text: 'Fueled by the revolutionary spirit that created digital money, DUC presents an alternative form of financial exchange - one that is inclusive, unique and offers boundless possibilities.',
                    button: 'Download Whitepaper',
                    image: 'slide-1.png',
                    image_mob: 'slide-1-mob.png',
                    file: 'ducatus-coin-white-paper.pdf'
                },
                ita: {
                    title: 'Ducatus Coin',
                    text: 'Alimentato dallo spirito rivoluzionario che ha creato il denaro digitale, DUC presenta una forma alternativa di scambio finanziario, inclusiva, unica e che offre possibilità illimitate.',
                    button: 'Scarica il white paper',
                    image: 'slide-1.png',
                    image_mob: 'slide-1-mob.png',
                    file: 'ducatus-coin-white-paper.pdf'
                },
                deu: {
                    title: 'Ducatus-Münze',
                    text: 'Angetrieben von dem revolutionären Geist, der digitales Geld geschaffen hat, präsentiert DUC eine alternative Form des Finanzaustauschs - eine, die inklusiv, einzigartig ist und grenzenlose Möglichkeiten bietet.  ',
                    button: 'Whitepaper herunterladen',
                    image: 'slide-1.png',
                    image_mob: 'slide-1-mob.png',
                    file: 'ducatus-coin-white-paper.pdf'
                },
                vie: {
                    title: 'Đồng xu Ducatus',
                    text: 'Được thúc đẩy bởi tinh thần cách mạng đã tạo ra tiền kỹ thuật số, DUC giới thiệu một hình thức trao đổi tài chính thay thế - một hình thức trao đổi bao gồm, độc đáo và cung cấp khả năng vô hạn',
                    button: 'Tải xuống Whitepaper',
                    image: 'slide-1.png',
                    image_mob: 'slide-1-mob.png',
                    file: 'ducatus-coin-white-paper.pdf'
                },
            },
            {
                eng: {
                    title: 'Cryptocurrency for everyday living',
                    text: 'From buying coffee to purchasing a new home, you can now enjoy the practical freedom of cashless. borderless and secure everyday transactions.',
                    button: 'Download Whitepaper',
                    image: 'slide-2.png',
                    image_mob: 'slide-2-mob.png',
                    file: 'ducatus-coin-white-paper.pdf'
                },
                ita: {
                    title: 'Criptovaluta per la vita di tutti i giorni',
                    text: 'Dall\'acquisto del caffè all\'acquisto di una nuova casa, ora puoi godere della pratica libertà del senza contanti. transazioni quotidiane senza confini e sicure.',
                    button: 'Scarica il white paper',
                    image: 'slide-2.png',
                    image_mob: 'slide-2-mob.png',
                    file: 'ducatus-coin-white-paper.pdf'
                },
                deu: {
                    title: 'Kryptowährung für den Alltag',
                    text: 'Vom Kaffeekauf bis zum Kauf eines neuen Hauses können Sie jetzt die praktische Freiheit des bargeldlosen Geldes genießen. grenzenlose und sichere alltägliche Transaktionen.',
                    button: 'Whitepaper herunterladen',
                    image: 'slide-2.png',
                    image_mob: 'slide-2-mob.png',
                    file: 'ducatus-coin-white-paper.pdf'
                },
                vie: {
                    title: 'Tiền điện tử cho cuộc sống hàng ngày',
                    text: 'Từ việc mua cà phê đến mua một ngôi nhà mới, giờ đây bạn có thể tận hưởng sự tự do thiết thực mà không cần tiền mặt. giao dịch hàng ngày không biên giới và an toàn.',
                    button: 'Tải xuống Whitepaper',
                    image: 'slide-2.png',
                    image_mob: 'slide-2-mob.png',
                    file: 'ducatus-coin-white-paper.pdf'
                },
            },
            {
                eng: {
                    title: 'Championing the cashless economy',
                    text: 'With Distribution, Convertibility, and Usability (DUC) at its core, Ducatus Coin possesses traits that are instrumental in building a solid cashless economy for the future.',
                    button: 'Download Whitepaper',
                    image: 'slide-3.png',
                    image_mob: 'slide-3-mob.png',
                    file: 'ducatus-coin-white-paper.pdf'
                },
                ita: {
                    title: 'Difendere l\'economia senza contanti',
                    text: 'Con Distribution, Convertibility, and Usability (DUC) al centro, Ducatus Coin possiede caratteristiche che sono fondamentali per costruire una solida economia senza contanti per il futuro.',
                    button: 'Scarica il white paper',
                    image: 'slide-3.png',
                    image_mob: 'slide-3-mob.png',
                    file: 'ducatus-coin-white-paper.pdf'
                },
                deu: {
                    title: 'Für die bargeldlose Wirtschaft eintreten',
                    text: 'Mit Distribution, Convertibility und Usability (DUC) im Mittelpunkt verfügt Ducatus Coin über Eigenschaften, die für den Aufbau einer soliden bargeldlosen Wirtschaft für die Zukunft von entscheidender Bedeutung sind.',
                    button: 'Whitepaper herunterladen',
                    image: 'slide-3.png',
                    image_mob: 'slide-3-mob.png',
                    file: 'ducatus-coin-white-paper.pdf'
                },
                vie: {
                    title: 'Thúc đẩy nền kinh tế không tiền mặt',
                    text: 'Với cốt lõi là Phân phối, Khả năng chuyển đổi và Khả năng sử dụng (DUC), Ducatus Coin sở hữu những đặc điểm đóng vai trò quan trọng trong việc xây dựng một nền kinh tế không dùng tiền mặt vững chắc cho tương lai.',
                    button: 'Tải xuống Whitepaper',
                    image: 'slide-3.png',
                    image_mob: 'slide-3-mob.png',
                    file: 'ducatus-coin-white-paper.pdf'
                }
            },
        ];
    }
    ngOnInit() {
        const defaultLng = (navigator.language || navigator['browserLanguage']).split('-')[0];
        const langToSet = window['jQuery']['cookie']('lng') || (['deu', 'eng', 'vie', 'ita'].includes(defaultLng) ? defaultLng : 'eng');
        this.lang = langToSet;
        this.translate.onLangChange.subscribe((event) => {
            this.lang = event.lang;
        });
        setTimeout(() => {
            this.mySwiper = new swiper__WEBPACK_IMPORTED_MODULE_1__["default"]('.swiper-container', {
                loop: true,
                pagination: {
                    el: '.swiper-pagination',
                    clickable: true,
                },
            });
        }, 1000);
    }
    ngOnDestroy() {
        this.mySwiper = undefined;
    }
}
IndexNewComponent.ɵfac = function IndexNewComponent_Factory(t) { return new (t || IndexNewComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"])); };
IndexNewComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: IndexNewComponent, selectors: [["app-index-new"]], decls: 72, vars: 67, consts: [[1, "section-header", "section-header-new"], [1, "section-header-container"], [1, "swiper-pagination"], [1, "section-header-slider"], [1, "swiper-container"], [1, "swiper-wrapper"], ["class", "swiper-slide", 4, "ngFor", "ngForOf"], [1, "section-financial-evolution"], [1, "container"], ["src", "assets/img/sections/financial-img.svg", "alt", "Financial Evolution"], [1, "h3-title-section", 3, "innerHTML"], [1, "span-subtitle-section", 3, "innerHTML"], [1, "p-text-section", 3, "innerHTML"], ["routerLink", "/about", 1, "ductus-btn-gradient", 3, "innerHTML"], [1, "section-community-new"], [1, "section-community-icons"], [1, "icon", "icon__cash-community", 3, "innerHTML"], [1, "icon", "icon__arrow-community", 3, "innerHTML"], [1, "section-maintains-market-leading"], [1, "section-maintains-market-leading-icons"], [1, "icon", "icon__gov-new"], [1, "section-maintains-market-leading-title", 3, "innerHTML"], [1, "section-maintains-market-leading-text", 3, "innerHTML"], [1, "icon", "icon__users-new"], [1, "icon", "icon__hands-new"], [1, "icon", "icon__rocket-new", "icon-f"], [1, "icon", "icon__stonks-new", "icon-f"], [1, "icon", "icon__web-new", "icon-f"], [1, "icon", "icon__duc-coin-new", "icon-f"], [1, "section-usability-crypto"], ["src", "assets/img/sections/usability-img-section.svg", "alt", "Usability with the Ducatus Crypto-Economy"], [1, "swiper-slide"], [1, "section-header-wrap", "section-header-wrap-desctop"], [1, "section-header-wrap", "section-header-wrap-mobile"], [1, "container-slider"], [1, "slider-item"], [1, "h2__slider-title", 3, "innerHTML"], [1, "p__slider-item", 3, "innerHTML"], ["target", "_blank", 1, "button", 3, "routerLink"]], template: function IndexNewComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, IndexNewComponent_div_6_Template, 9, 8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "section", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "img", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "h3", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](11, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](13, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "p", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](15, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](17, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "section", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "h3", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](21, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](23, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "span", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](26, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "span", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](28, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "section", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "h3", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](32, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "span", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](36, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](38, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "span", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](41, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](42, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](43, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](45, "span", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](46, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](47, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](48, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](49, "h3", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](50, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](53, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](54, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](56, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](57, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](59, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](60, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](62, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](63, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "section", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](66, "h3", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](67, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](68, "img", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](70, "p", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](71, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.slider);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](11, 23, "PAGE.NEWMAIN.SECTION.ONE.TITLE"), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](13, 25, "PAGE.NEWMAIN.SECTION.ONE.SUBTITLE"), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](15, 27, "PAGE.NEWMAIN.SECTION.ONE.TEXT"), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](17, 29, "PAGE.NEWMAIN.SECTION.ONE.BUTTON"), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](21, 31, "PAGE.NEWMAIN.SECTION.TWO.TITLE"), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](23, 33, "PAGE.NEWMAIN.SECTION.TWO.SUBTITLE"), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](26, 35, "PAGE.NEWMAIN.SECTION.TWO.TEXT_1"), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](28, 37, "PAGE.NEWMAIN.SECTION.TWO.TEXT_2"), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](32, 39, "PAGE.NEWMAIN.SECTION.THREE.TITLE"), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](36, 41, "PAGE.NEWMAIN.SECTION.THREE.ICONS.TITLE_1"), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](38, 43, "PAGE.NEWMAIN.SECTION.THREE.ICONS.TEXT_1"), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](41, 45, "PAGE.NEWMAIN.SECTION.THREE.ICONS.TITLE_2"), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](43, 47, "PAGE.NEWMAIN.SECTION.THREE.ICONS.TEXT_2"), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](46, 49, "PAGE.NEWMAIN.SECTION.THREE.ICONS.TITLE_3"), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](48, 51, "PAGE.NEWMAIN.SECTION.THREE.ICONS.TEXT_3"), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](50, 53, "PAGE.NEWMAIN.SECTION.THREE.TITLE_2"), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](54, 55, "PAGE.NEWMAIN.SECTION.THREE.ICONS.TEXT_4"), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](57, 57, "PAGE.NEWMAIN.SECTION.THREE.ICONS.TEXT_5"), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](60, 59, "PAGE.NEWMAIN.SECTION.THREE.ICONS.TEXT_6"), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](63, 61, "PAGE.NEWMAIN.SECTION.THREE.ICONS.TEXT_7"), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](67, 63, "PAGE.NEWMAIN.SECTION.FOUR.TITLE"), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](71, 65, "PAGE.NEWMAIN.SECTION.FOUR.TEXT"), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLink"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLinkWithHref"]], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslatePipe"]], styles: ["@import url(\"https://fonts.googleapis.com/css?family=Montserrat:100,100i,200,200i,300,300i,400,400i,500,500i,600,600i,700,700i,800,800i,900,900i&display=swap\");\n.clearfix[_ngcontent-%COMP%]:after {\n  content: \"\";\n  display: table;\n  clear: both;\n}\n.centered[_ngcontent-%COMP%] {\n  display: table;\n  width: 100%;\n  height: 100%;\n}\n.centered[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\n  display: table-cell;\n  text-align: center;\n  vertical-align: middle;\n}\n\n.section-financial-evolution[_ngcontent-%COMP%] {\n  background-color: #EAEBED;\n}\n.section-financial-evolution[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%] {\n  max-width: 820px;\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  padding-top: 50px;\n  padding-bottom: 50px;\n}\n.section-financial-evolution[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  margin-bottom: 15px;\n  max-width: 100%;\n}\n.section-financial-evolution[_ngcontent-%COMP%]   .h3-title-section[_ngcontent-%COMP%] {\n  margin-top: 15px;\n  margin-bottom: 15px;\n}\n.section-financial-evolution[_ngcontent-%COMP%]   .span-subtitle-section[_ngcontent-%COMP%] {\n  margin-top: 15px;\n  margin-bottom: 25px;\n}\n.section-financial-evolution[_ngcontent-%COMP%]   .p-text-section[_ngcontent-%COMP%] {\n  margin-bottom: 25px;\n  margin-top: 25px;\n}\n.section-financial-evolution[_ngcontent-%COMP%]   .ductus-btn-gradient[_ngcontent-%COMP%] {\n  margin-top: 25px;\n  margin-bottom: 25px;\n  background: radial-gradient(44.96% 391.37% at 49.64% 50%, #D8B04B 2.67%, #8C763C 100%);\n  box-sizing: border-box;\n  box-shadow: 0px 0px 29.9565px rgba(255, 223, 87, 0.5), inset 0px 6.91304px 25.3478px #FFDF34, inset 0px -6.91304px 9.21739px rgba(255, 250, 215, 0.81);\n  border-radius: 76.0435px;\n  height: 80px;\n  max-width: 340px;\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border: 4.6087px solid #BAA35D;\n  font-weight: 600;\n  font-size: 21px;\n  line-height: 26px;\n  color: #FFFFFF;\n  cursor: pointer;\n  transition: 0.4s ease;\n}\n.section-financial-evolution[_ngcontent-%COMP%]   .ductus-btn-gradient[_ngcontent-%COMP%]:hover {\n  transition: 0.4s ease;\n  transform: scale(0.98);\n}\n.section-financial-evolution[_ngcontent-%COMP%]   .ductus-btn-gradient[_ngcontent-%COMP%]:active, .section-financial-evolution[_ngcontent-%COMP%]   .ductus-btn-gradient[_ngcontent-%COMP%]:focus {\n  transition: 0.4s ease;\n  transform: scale(0.96);\n}\n.section-usability-crypto[_ngcontent-%COMP%] {\n  background-color: #ffffff;\n  padding-top: 100px;\n  padding-bottom: 100px;\n}\n.section-usability-crypto[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%] {\n  max-width: 820px;\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n.section-usability-crypto[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  margin: 25px auto;\n  max-width: 100%;\n  display: block;\n}\n.section-usability-crypto[_ngcontent-%COMP%]   .h3-title-section[_ngcontent-%COMP%] {\n  margin-top: 15px;\n  margin-bottom: 15px;\n  display: inline-block;\n}\n.section-usability-crypto[_ngcontent-%COMP%]   .p-text-section[_ngcontent-%COMP%] {\n  margin-bottom: 25px;\n  margin-top: 25px;\n  display: inline-block;\n}\n.section-community-new[_ngcontent-%COMP%] {\n  background-image: url('communities-section.png');\n  background-repeat: no-repeat;\n  background-color: #EAEBED;\n  background-position: center;\n  background-size: cover;\n  padding-bottom: 34.5%;\n}\n.section-community-new[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  max-width: 950px;\n  padding-top: 150px;\n}\n.section-community-new[_ngcontent-%COMP%]   .h3-title-section[_ngcontent-%COMP%] {\n  margin-top: 15px;\n  margin-bottom: 15px;\n  color: white;\n}\n.section-community-new[_ngcontent-%COMP%]   .span-subtitle-section[_ngcontent-%COMP%] {\n  margin-top: 15px;\n  margin-bottom: 25px;\n  font-weight: normal;\n  color: white;\n}\n.section-community-new[_ngcontent-%COMP%]   .section-community-icons[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(2, minmax(320px, 400px));\n  justify-content: space-between;\n  margin-top: 30px;\n}\n@media (max-width: 750px) {\n  .section-community-new[_ngcontent-%COMP%]   .section-community-icons[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n    grid-gap: 30px;\n  }\n}\n.section-community-new[_ngcontent-%COMP%]   .section-community-icons[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\n  display: flex;\n  color: white;\n  font-weight: 500;\n  font-size: 17px;\n  line-height: 29px;\n}\n.section-community-new[_ngcontent-%COMP%]   .section-community-icons[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%]:before {\n  min-width: 110px;\n  min-height: 110px;\n  margin-right: 35px;\n}\n.section-maintains-market-leading[_ngcontent-%COMP%] {\n  background-color: #EAEBED;\n}\n.section-maintains-market-leading[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  padding-top: 100px;\n  padding-bottom: 100px;\n  max-width: 1000px;\n}\n.section-maintains-market-leading-icons[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: space-between;\n  margin-top: 10px;\n  margin-bottom: 100px;\n}\n.section-maintains-market-leading-icons[_ngcontent-%COMP%]   .icon-f[_ngcontent-%COMP%] {\n  width: 180px;\n}\n@media (max-width: 850px) {\n  .section-maintains-market-leading-icons[_ngcontent-%COMP%]   .icon-f[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\n@media (max-width: 850px) {\n  .section-maintains-market-leading-icons[_ngcontent-%COMP%] {\n    display: grid;\n    grid-template-columns: repeat(2, 1fr);\n    grid-gap: 20px;\n    justify-content: center;\n  }\n}\n@media (max-width: 450px) {\n  .section-maintains-market-leading-icons[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n.section-maintains-market-leading[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  margin: 5px;\n  max-width: 250px;\n}\n@media (max-width: 850px) {\n  .section-maintains-market-leading[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\n    max-width: 100%;\n  }\n}\n.section-maintains-market-leading-title[_ngcontent-%COMP%] {\n  margin-top: 20px;\n  font-weight: bold;\n  font-size: 22px;\n  line-height: 25px;\n  color: #862632;\n}\n.section-maintains-market-leading-text[_ngcontent-%COMP%] {\n  margin-top: 15px;\n  display: block;\n  font-weight: 500;\n  font-size: 15px;\n  line-height: 25px;\n  color: #5C5A57;\n}\n.section-header-new[_ngcontent-%COMP%]   .slider-item[_ngcontent-%COMP%] {\n  max-width: 550px;\n}\n.section-header-new[_ngcontent-%COMP%]   .h2__slider-title[_ngcontent-%COMP%] {\n  font-weight: bold;\n  font-size: 44px;\n  line-height: 54px;\n  color: #FFFFFF;\n  text-shadow: 0px 2px 4px rgba(0, 0, 0, 0.5);\n}\n.section-header-new[_ngcontent-%COMP%]   .p__slider-item[_ngcontent-%COMP%] {\n  font-weight: bold;\n  font-size: 20px;\n  line-height: 24px;\n  color: #FFFFFF;\n  text-shadow: 0px 2px 4px rgba(0, 0, 0, 0.5);\n}\n.section-header-new[_ngcontent-%COMP%]   .button[_ngcontent-%COMP%] {\n  background: linear-gradient(0deg, #8C3444, #8C3444);\n  border: 4.6087px solid #882434;\n  box-sizing: border-box;\n  box-shadow: 0px 0px 29.9565px rgba(255, 64, 94, 0.5);\n  border-radius: 76.0435px;\n  font-weight: 600;\n  font-size: 21px;\n  line-height: 26px;\n  max-width: 380px;\n  color: #FFFFFF;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9nbGViL3Byb2plY3RzL2R1Y2F0dXMtc2l0ZS9zcmMvc2Nzcy9fdmFycy5zY3NzIiwiL1VzZXJzL2dsZWIvcHJvamVjdHMvZHVjYXR1cy1zaXRlL3NyYy9zY3NzL19taXhpbnMuc2NzcyIsInNyYy9hcHAvcGFnZXMvaW5kZXgtbmV3L2luZGV4LW5ldy5jb21wb25lbnQuc2NzcyIsIi9Vc2Vycy9nbGViL3Byb2plY3RzL2R1Y2F0dXMtc2l0ZS9zcmMvYXBwL3BhZ2VzL2luZGV4LW5ldy9pbmRleC1uZXcuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBSVEsK0pBQUE7QUMyQlI7RUFDQyxXQUFBO0VBQ0EsY0FBQTtFQUNBLFdBQUE7QUM3QkQ7QURnQ0E7RUFDQyxjQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUM3QkQ7QUQrQkM7RUFDQyxtQkFBQTtFQUNBLGtCQUFBO0VBQ0Esc0JBQUE7QUM3QkY7QUR5TUE7OztHQUFBO0FFdE5BO0VBQ0UseUJBQUE7QURvQkY7QUNsQkU7RUFDRSxnQkFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxvQkFBQTtBRG9CSjtBQ2pCRTtFQUNFLG1CQUFBO0VBQ0EsZUFBQTtBRG1CSjtBQ2hCRTtFQUNFLGdCQUFBO0VBQ0EsbUJBQUE7QURrQko7QUNmRTtFQUNFLGdCQUFBO0VBQ0EsbUJBQUE7QURpQko7QUNkRTtFQUNFLG1CQUFBO0VBQ0EsZ0JBQUE7QURnQko7QUNiRTtFQUNFLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxzRkFBQTtFQUNBLHNCQUFBO0VBQ0Esc0pBQUE7RUFDQSx3QkFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLDhCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLHFCQUFBO0FEZUo7QUNiSTtFQUNFLHFCQUFBO0VBQ0Esc0JBQUE7QURlTjtBQ1pJO0VBRUUscUJBQUE7RUFDQSxzQkFBQTtBRGFOO0FDUEE7RUFDRSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EscUJBQUE7QURVRjtBQ1JFO0VBQ0UsZ0JBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBRFVKO0FDUEU7RUFDRSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0FEU0o7QUNORTtFQUNFLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxxQkFBQTtBRFFKO0FDTEU7RUFDRSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EscUJBQUE7QURPSjtBQ0hBO0VBRUUsZ0RBQUE7RUFDQSw0QkFBQTtFQUNBLHlCQUFBO0VBQ0EsMkJBQUE7RUFDQSxzQkFBQTtFQUNBLHFCQUFBO0FES0Y7QUNIRTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBREtKO0FDRkU7RUFDRSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtBRElKO0FDREU7RUFDRSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0FER0o7QUNBRTtFQUNFLGFBQUE7RUFDQSxzREFBQTtFQUNBLDhCQUFBO0VBQ0EsZ0JBQUE7QURFSjtBRGlCRTtFRXZCQTtJQU9JLDBCQUFBO0lBQ0EsY0FBQTtFREdKO0FBQ0Y7QUNESTtFQUNFLGFBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7QURHTjtBQ0RNO0VBQ0UsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FER1I7QUNHQTtFQUNFLHlCQUFBO0FEQUY7QUNFRTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0VBQ0Esa0JBQUE7RUFDQSxxQkFBQTtFQUNBLGlCQUFBO0FEQUo7QUNHRTtFQUNFLGFBQUE7RUFDQSxlQUFBO0VBQ0EsOEJBQUE7RUFDQSxnQkFBQTtFQUNBLG9CQUFBO0FEREo7QUNHSTtFQUNFLFlBQUE7QURETjtBRHZCRTtFRXVCRTtJQUlJLFdBQUE7RURBTjtBQUNGO0FENUJFO0VFZ0JBO0lBZ0JJLGFBQUE7SUFDQSxxQ0FBQTtJQUNBLGNBQUE7SUFDQSx1QkFBQTtFREFKO0FBQ0Y7QURwQ0U7RUVnQkE7SUF1QkksMEJBQUE7RURDSjtBQUNGO0FDRUU7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7QURBSjtBRC9DRTtFRTJDQTtJQU9JLGVBQUE7RURDSjtBQUNGO0FDRUU7RUFDRSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtBREFKO0FDR0U7RUFDRSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7QURESjtBQ09FO0VBQ0UsZ0JBQUE7QURKSjtBQ09FO0VBQ0UsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0VBQ0EsMkNBQUE7QURMSjtBQ1FFO0VBQ0UsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0VBQ0EsMkNBQUE7QUROSjtBQ1NFO0VBQ0UsbURBQUE7RUFDQSw4QkFBQTtFQUNBLHNCQUFBO0VBQ0Esb0RBQUE7RUFDQSx3QkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0FEUEoiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9pbmRleC1uZXcvaW5kZXgtbmV3LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBtYWluIHZhcmlhYmxlc1xuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9TW9udHNlcnJhdDoxMDAsMTAwaSwyMDAsMjAwaSwzMDAsMzAwaSw0MDAsNDAwaSw1MDAsNTAwaSw2MDAsNjAwaSw3MDAsNzAwaSw4MDAsODAwaSw5MDAsOTAwaSZkaXNwbGF5PXN3YXAnKTtcblxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBhZGRpdGlvbmFsIHZhcmlhYmxlc1xuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cblxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBjb2xvcnNcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG4kYmxhY2s6ICMwMDA7XG4kZ3JheTogIzgwODA4MDtcbiR3aGl0ZTogI2ZmZjtcbiRibHVlOiAjMDBGO1xuJHB1cnBsZTogIzhBNEQ3NjtcbiRwaW5rOiAjRkE3QzkxO1xuJGJyb3duOiAjNzU3NzYzO1xuJGJlaWdlLWxpZ2h0OiAjRDBEMUNEO1xuJGJlaWdlLWxpZ2h0ZXItMTogI0VGRjBFQjtcbiRiZWlnZS1saWdodGVyLTI6ICNGNEY0RjQ7XG5cbiRicm93bi1yZWQ6ICM4OTI3MzQ7XG4kZ29sZC15ZWxsb3c6ICNFOEMyMkM7XG4kZGFyay1ncmV5OiAjMjMyNDFmO1xuJGdyZXk6ICM0ZDRjNGQ7XG4kZ29sZDogI0QzQzE5ODtcbiRnb2xkLTI6ICNGMEVBRTM7XG4iLCIvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIG1haW4gbWl4aW5zXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuQG1peGluIGZvbnQtZmFjZSgkZm9udC1mYW1pbHksICRmaWxlLXBhdGgsICR3ZWlnaHQ6IG5vcm1hbCwgJHN0eWxlOiBub3JtYWwsICRhc3NldC1waXBlbGluZTogZmFsc2UpIHtcblx0QGZvbnQtZmFjZSB7XG5cdFx0Zm9udC1mYW1pbHk6ICRmb250LWZhbWlseTtcblx0XHRmb250LXdlaWdodDogJHdlaWdodDtcblx0XHRmb250LXN0eWxlOiAkc3R5bGU7XG5cblx0XHRAaWYgJGFzc2V0LXBpcGVsaW5lPT10cnVlIHtcblx0XHRcdHNyYzogZm9udC11cmwoJyN7JGZpbGUtcGF0aH0uZW90Jyk7XG5cdFx0XHRzcmM6IGZvbnQtdXJsKCcjeyRmaWxlLXBhdGh9LmVvdD8jaWVmaXgnKSBmb3JtYXQoJ2VtYmVkZGVkLW9wZW50eXBlJyksXG5cdFx0XHRmb250LXVybCgnI3skZmlsZS1wYXRofS53b2ZmJykgZm9ybWF0KCd3b2ZmJyksXG5cdFx0XHRmb250LXVybCgnI3skZmlsZS1wYXRofS50dGYnKSBmb3JtYXQoJ3RydWV0eXBlJyk7XG5cdFx0fVxuXG5cdFx0QGVsc2Uge1xuXHRcdFx0c3JjOiB1cmwoJyN7JGZpbGUtcGF0aH0uZW90Jyk7XG5cdFx0XHRzcmM6IHVybCgnI3skZmlsZS1wYXRofS5lb3Q/I2llZml4JykgZm9ybWF0KCdlbWJlZGRlZC1vcGVudHlwZScpLFxuXHRcdFx0dXJsKCcjeyRmaWxlLXBhdGh9LndvZmYnKSBmb3JtYXQoJ3dvZmYnKSxcblx0XHRcdHVybCgnI3skZmlsZS1wYXRofS50dGYnKSBmb3JtYXQoJ3RydWV0eXBlJyk7XG5cdFx0fVxuXHR9XG59XG5cbkBtaXhpbiBub3RleHQge1xuXHRvdmVyZmxvdzogaGlkZGVuO1xuXHR0ZXh0LWluZGVudDogLTk5OTlweDtcbn1cblxuLmNsZWFyZml4OmFmdGVyIHtcblx0Y29udGVudDogXCJcIjtcblx0ZGlzcGxheTogdGFibGU7XG5cdGNsZWFyOiBib3RoO1xufVxuXG4uY2VudGVyZWQge1xuXHRkaXNwbGF5OiB0YWJsZTtcblx0d2lkdGg6IDEwMCU7XG5cdGhlaWdodDogMTAwJTtcblxuXHQ+KiB7XG5cdFx0ZGlzcGxheTogdGFibGUtY2VsbDtcblx0XHR0ZXh0LWFsaWduOiBjZW50ZXI7XG5cdFx0dmVydGljYWwtYWxpZ246IG1pZGRsZTtcblx0fVxufVxuXG5AbWl4aW4gcGxhY2Vob2xkZXJDb2xvcigkaW5wdXQtdGV4dC1jb2xvcikge1xuXHQmOjotd2Via2l0LWlucHV0LXBsYWNlaG9sZGVyIHtcblx0XHRjb2xvcjogJGlucHV0LXRleHQtY29sb3I7XG5cdH1cblxuXHQmOi1tb3otcGxhY2Vob2xkZXIge1xuXHRcdGNvbG9yOiAkaW5wdXQtdGV4dC1jb2xvcjtcblx0XHRvcGFjaXR5OiAxO1xuXHR9XG5cblx0Jjo6LW1vei1wbGFjZWhvbGRlciB7XG5cdFx0Y29sb3I6ICRpbnB1dC10ZXh0LWNvbG9yO1xuXHRcdG9wYWNpdHk6IDE7XG5cdH1cblxuXHQmOi1tcy1pbnB1dC1wbGFjZWhvbGRlciB7XG5cdFx0Y29sb3I6ICRpbnB1dC10ZXh0LWNvbG9yO1xuXHR9XG5cblx0Jjo6cGxhY2Vob2xkZXIge1xuXHRcdGNvbG9yOiAkaW5wdXQtdGV4dC1jb2xvcjtcblx0XHRvcGFjaXR5OiAxO1xuXHR9XG5cblx0Jjpmb2N1czotbW96LXBsYWNlaG9sZGVyIHtcblx0XHRjb2xvcjogdHJhbnNwYXJlbnQ7XG5cdFx0b3BhY2l0eTogMTtcblx0fVxuXG5cdCY6Zm9jdXM6Oi1tb3otcGxhY2Vob2xkZXIge1xuXHRcdGNvbG9yOiB0cmFuc3BhcmVudDtcblx0XHRvcGFjaXR5OiAxO1xuXHR9XG5cblx0Jjpmb2N1czo6LXdlYmtpdC1pbnB1dC1wbGFjZWhvbGRlciB7XG5cdFx0Y29sb3I6IHRyYW5zcGFyZW50O1xuXHR9XG5cblx0Jjpmb2N1czotbXMtaW5wdXQtcGxhY2Vob2xkZXIge1xuXHRcdGNvbG9yOiB0cmFuc3BhcmVudDtcblx0fVxuXG5cdCY6Zm9jdXM6OnBsYWNlaG9sZGVyIHtcblx0XHRjb2xvcjogdHJhbnNwYXJlbnQ7XG5cdH1cbn1cblxuQG1peGluIGNsZWFyZml4IHtcblx0JjphZnRlciB7XG5cdFx0Y29udGVudDogXCIgXCI7XG5cdFx0ZGlzcGxheTogYmxvY2s7XG5cdFx0Y2xlYXI6IGJvdGg7XG5cdH1cbn1cblxuLy8gY2xlYXIgc2VsZWN0IHdpdGhvdXQgZGVmYXVsdCBidXR0b25cbkBtaXhpbiBjbGVhclNlbGVjdCB7XG5cdC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcblx0LW1vei1hcHBlYXJhbmNlOiBub25lO1xuXHRhcHBlYXJhbmNlOiBub25lO1xuXHQtd2Via2l0LWJvcmRlci1yYWRpdXM6IDA7XG5cdC1tb3otYm9yZGVyLXJhZGl1czogMDtcblx0Ym9yZGVyLXJhZGl1czogMDtcbn1cblxuLy8gZWxlbWVudHMgZ2V0IGFwcGVuZGVkIHdpdGggXCJfX1wiIGFuZCB0aGUgJG5hbWVcbkBtaXhpbiBlKCRuYW1lKSB7XG5cdEBhdC1yb290ICN7Jn1fI3skbmFtZX0ge1xuXHRcdEBjb250ZW50O1xuXHR9XG59XG5cbi8vIG1vZGlmaWVycyBnZXQgYXBwZW5kZWQgd2l0aCBcIi0tXCIgYW5kIHRoZSAkbmFtZVxuQG1peGluIG0oJG5hbWUpIHtcblx0QGF0LXJvb3QgI3smfS0tI3skbmFtZX0ge1xuXHRcdEBjb250ZW50O1xuXHR9XG59XG5cbi8vIGJyZWFrcG9pbnRzXG5AbWl4aW4gYigkcG9pbnQpIHtcblx0QGlmICRwb2ludD09ZGVza3RvcCB7XG5cdFx0QG1lZGlhIChtYXgtd2lkdGg6IDEzNjZweCkgYW5kIChtaW4td2lkdGg6MTAyNHB4KSB7XG5cdFx0XHRAY29udGVudCA7XG5cdFx0fVxuXHR9XG5cblx0QGVsc2UgaWYgJHBvaW50PT10YWJsZXQge1xuXHRcdEBtZWRpYSAobWF4LXdpZHRoOiAxMDAwcHgpIHtcblx0XHRcdEBjb250ZW50IDtcblx0XHR9XG5cdH1cblxuXHRAZWxzZSBpZiAkcG9pbnQ9PW1vYmlsZSB7XG5cdFx0QG1lZGlhIChtYXgtd2lkdGg6IDc2N3B4KSB7XG5cdFx0XHRAY29udGVudCA7XG5cdFx0fVxuXHR9XG5cblx0QGVsc2UgaWYgJHBvaW50PT1tb2JpbGUzeCB7XG5cblx0XHRAbWVkaWEgb25seSBzY3JlZW4gYW5kICgtd2Via2l0LW1pbi1kZXZpY2UtcGl4ZWwtcmF0aW86IDMpLFxuXHRcdG9ubHkgc2NyZWVuIGFuZCAobWluLXJlc29sdXRpb246IDNkcHB4KSxcblx0XHRvbmx5IHNjcmVlbiBhbmQgKG1pbi1yZXNvbHV0aW9uOiAzNTBkcGkpIHtcblx0XHRcdEBjb250ZW50IDtcblx0XHR9XG5cdH1cblxuXHRAZWxzZSB7XG5cdFx0QG1lZGlhIChtYXgtd2lkdGg6ICRwb2ludCArICdweCcpIHtcblx0XHRcdEBjb250ZW50IDtcblx0XHR9XG5cdH1cbn1cblxuLy8gYnJlYWtwb2ludHNcbkBtaXhpbiBiYigkcG9pbnRNYXgsICRwb2ludE1pbikge1xuXHRAbWVkaWEgKG1heC13aWR0aDogJHBvaW50TWF4ICsgJ3B4JykgYW5kIChtaW4td2lkdGg6ICRwb2ludE1pbiArICdweCcpIHtcblx0XHRAY29udGVudCA7XG5cdH1cbn1cblxuQG1peGluIGllKCkge1xuXG5cdEBtZWRpYSBzY3JlZW4gYW5kICgtbXMtaGlnaC1jb250cmFzdDogYWN0aXZlKSxcblx0KC1tcy1oaWdoLWNvbnRyYXN0OiBub25lKSB7XG5cdFx0QGNvbnRlbnQgO1xuXHR9XG59XG5cbkBtaXhpbiBiZWZvcmUtaW1nKCRkaXNwbGF5LCAkd2lkdGgsICRoZWlnaHQsICRwb3NpdGlvbikge1xuXHRAYXQtcm9vdCAjeyZ9OmJlZm9yZSB7XG5cdFx0Y29udGVudDogJyc7XG5cdFx0ZGlzcGxheTogJGRpc3BsYXk7XG5cblx0XHRAaWYgJHBvc2l0aW9uPT1hIHtcblx0XHRcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcblx0XHR9XG5cblx0XHRAaWYgJHBvc2l0aW9uPT1yIHtcblx0XHRcdHBvc2l0aW9uOiByZWxhdGl2ZTtcblx0XHR9XG5cblx0XHR3aWR0aDogJHdpZHRoO1xuXHRcdGhlaWdodDogJGhlaWdodDtcblx0XHRAY29udGVudDtcblx0fVxufVxuXG5AbWl4aW4gYWZ0ZXItaW1nKCRkaXNwbGF5LCAkd2lkdGgsICRoZWlnaHQsICRwb3NpdGlvbikge1xuXHRAYXQtcm9vdCAjeyZ9OmFmdGVyIHtcblx0XHRjb250ZW50OiAnJztcblx0XHRkaXNwbGF5OiAkZGlzcGxheTtcblxuXHRcdEBpZiAkcG9zaXRpb249PWEge1xuXHRcdFx0cG9zaXRpb246IGFic29sdXRlO1xuXHRcdH1cblxuXHRcdEBpZiAkcG9zaXRpb249PXIge1xuXHRcdFx0cG9zaXRpb246IHJlbGF0aXZlO1xuXHRcdH1cblxuXHRcdHdpZHRoOiAkd2lkdGg7XG5cdFx0aGVpZ2h0OiAkaGVpZ2h0O1xuXHRcdEBjb250ZW50O1xuXHR9XG59XG5cbi8qIHJlbSBmb250IHNpemUgd2l0aCBmYWxsYmFjayB8IHVzYWdlOlxuXHRwIHtcblx0XHRAaW5jbHVkZSBmb250LXNpemUoMTRweClcblx0fSovXG5cbkBmdW5jdGlvbiBjYWxjdWxhdGVSZW0oJHNpemUpIHtcblx0JHJlbVNpemU6ICRzaXplIC8gMTZweDtcblx0QHJldHVybiAkcmVtU2l6ZSAqIDFyZW07XG59XG5cbkBtaXhpbiBmb250LXNpemUoJHNpemUpIHtcblx0Zm9udC1zaXplOiAkc2l6ZTtcblx0Zm9udC1zaXplOiBjYWxjdWxhdGVSZW0oJHNpemUpO1xufVxuXG5AbWl4aW4gdGV4dEN1dCgkY29sLCAkaGVpZ2h0KSB7XG5cdGRpc3BsYXk6IC13ZWJraXQtYm94O1xuXHQtd2Via2l0LWxpbmUtY2xhbXA6ICRjb2w7XG5cdC13ZWJraXQtYm94LW9yaWVudDogdmVydGljYWw7XG5cdG92ZXJmbG93OiBoaWRkZW47XG5cdG1heC1oZWlnaHQ6ICRoZWlnaHQ7XG59XG5cbi8vIGJ1dHRvbnNcblxuQG1peGluIGJ0bi1ncmFkaWVudCgkY1RleHQsICRjSG92ZXIsICRkaXJlY3Rpb24sICRjRmlyc3QsICRjU2Vjb25zLCAkY1RoaXJkLCAkaG92ZXIpIHtcblx0Y29sb3I6ICRjVGV4dDtcblx0dHJhbnNpdGlvbjogMC41cztcblx0YmFja2dyb3VuZC1zaXplOiAyMDAlIGF1dG87XG5cdGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgkZGlyZWN0aW9uLCAkY0ZpcnN0IDAlLCAkY1NlY29ucyA1MSUsICRjVGhpcmQgMTAwJSk7XG5cblx0Jjpob3ZlciB7XG5cdFx0dGV4dC1kZWNvcmF0aW9uOiBub25lO1xuXHRcdGJhY2tncm91bmQtcG9zaXRpb246ICRob3Zlcjtcblx0XHRjb2xvcjogJGNIb3Zlcjtcblx0XHRib3gtc2hhZG93OiAwcHggMjBweCAzMHB4IC0xNXB4ICRjVGhpcmQ7XG5cdH1cbn1cblxuQG1peGluIGdyYWRpZW50KCR0b3AsICRib3R0b20pIHtcblx0YmFja2dyb3VuZDogJHRvcDtcblx0YmFja2dyb3VuZDogLW1vei1saW5lYXItZ3JhZGllbnQodG9wLCAkdG9wIDAlLCAkYm90dG9tIDEwMCUpO1xuXHRiYWNrZ3JvdW5kOiAtd2Via2l0LWdyYWRpZW50KGxpbmVhciwgbGVmdCB0b3AsIGxlZnQgYm90dG9tLCBjb2xvci1zdG9wKDAlLCAkdG9wKSwgY29sb3Itc3RvcCgxMDAlLCAkYm90dG9tKSk7XG5cdGJhY2tncm91bmQ6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KHRvcCwgJHRvcCAwJSwgJGJvdHRvbSAxMDAlKTtcblx0YmFja2dyb3VuZDogLW8tbGluZWFyLWdyYWRpZW50KHRvcCwgJHRvcCAwJSwgJGJvdHRvbSAxMDAlKTtcblx0YmFja2dyb3VuZDogLW1zLWxpbmVhci1ncmFkaWVudCh0b3AsICR0b3AgMCUsICRib3R0b20gMTAwJSk7XG5cdGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sICR0b3AgMCUsICRib3R0b20gMTAwJSk7XG5cdGZpbHRlcjogcHJvZ2lkOkRYSW1hZ2VUcmFuc2Zvcm0uTWljcm9zb2Z0LmdyYWRpZW50KHN0YXJ0Q29sb3JzdHI9JyN7JHRvcH0nLCBlbmRDb2xvcnN0cj0nI3skYm90dG9tfSAnLCBHcmFkaWVudFR5cGU9MCk7XG59IiwiQGltcG9ydCB1cmwoXCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9TW9udHNlcnJhdDoxMDAsMTAwaSwyMDAsMjAwaSwzMDAsMzAwaSw0MDAsNDAwaSw1MDAsNTAwaSw2MDAsNjAwaSw3MDAsNzAwaSw4MDAsODAwaSw5MDAsOTAwaSZkaXNwbGF5PXN3YXBcIik7XG4uY2xlYXJmaXg6YWZ0ZXIge1xuICBjb250ZW50OiBcIlwiO1xuICBkaXNwbGF5OiB0YWJsZTtcbiAgY2xlYXI6IGJvdGg7XG59XG5cbi5jZW50ZXJlZCB7XG4gIGRpc3BsYXk6IHRhYmxlO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuLmNlbnRlcmVkID4gKiB7XG4gIGRpc3BsYXk6IHRhYmxlLWNlbGw7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbn1cblxuLyogcmVtIGZvbnQgc2l6ZSB3aXRoIGZhbGxiYWNrIHwgdXNhZ2U6XG5cdHAge1xuXHRcdEBpbmNsdWRlIGZvbnQtc2l6ZSgxNHB4KVxuXHR9Ki9cbi5zZWN0aW9uLWZpbmFuY2lhbC1ldm9sdXRpb24ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRUFFQkVEO1xufVxuLnNlY3Rpb24tZmluYW5jaWFsLWV2b2x1dGlvbiAuY29udGFpbmVyIHtcbiAgbWF4LXdpZHRoOiA4MjBweDtcbiAgd2lkdGg6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwYWRkaW5nLXRvcDogNTBweDtcbiAgcGFkZGluZy1ib3R0b206IDUwcHg7XG59XG4uc2VjdGlvbi1maW5hbmNpYWwtZXZvbHV0aW9uIGltZyB7XG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XG4gIG1heC13aWR0aDogMTAwJTtcbn1cbi5zZWN0aW9uLWZpbmFuY2lhbC1ldm9sdXRpb24gLmgzLXRpdGxlLXNlY3Rpb24ge1xuICBtYXJnaW4tdG9wOiAxNXB4O1xuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xufVxuLnNlY3Rpb24tZmluYW5jaWFsLWV2b2x1dGlvbiAuc3Bhbi1zdWJ0aXRsZS1zZWN0aW9uIHtcbiAgbWFyZ2luLXRvcDogMTVweDtcbiAgbWFyZ2luLWJvdHRvbTogMjVweDtcbn1cbi5zZWN0aW9uLWZpbmFuY2lhbC1ldm9sdXRpb24gLnAtdGV4dC1zZWN0aW9uIHtcbiAgbWFyZ2luLWJvdHRvbTogMjVweDtcbiAgbWFyZ2luLXRvcDogMjVweDtcbn1cbi5zZWN0aW9uLWZpbmFuY2lhbC1ldm9sdXRpb24gLmR1Y3R1cy1idG4tZ3JhZGllbnQge1xuICBtYXJnaW4tdG9wOiAyNXB4O1xuICBtYXJnaW4tYm90dG9tOiAyNXB4O1xuICBiYWNrZ3JvdW5kOiByYWRpYWwtZ3JhZGllbnQoNDQuOTYlIDM5MS4zNyUgYXQgNDkuNjQlIDUwJSwgI0Q4QjA0QiAyLjY3JSwgIzhDNzYzQyAxMDAlKTtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgYm94LXNoYWRvdzogMHB4IDBweCAyOS45NTY1cHggcmdiYSgyNTUsIDIyMywgODcsIDAuNSksIGluc2V0IDBweCA2LjkxMzA0cHggMjUuMzQ3OHB4ICNGRkRGMzQsIGluc2V0IDBweCAtNi45MTMwNHB4IDkuMjE3MzlweCByZ2JhKDI1NSwgMjUwLCAyMTUsIDAuODEpO1xuICBib3JkZXItcmFkaXVzOiA3Ni4wNDM1cHg7XG4gIGhlaWdodDogODBweDtcbiAgbWF4LXdpZHRoOiAzNDBweDtcbiAgd2lkdGg6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBib3JkZXI6IDQuNjA4N3B4IHNvbGlkICNCQUEzNUQ7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGZvbnQtc2l6ZTogMjFweDtcbiAgbGluZS1oZWlnaHQ6IDI2cHg7XG4gIGNvbG9yOiAjRkZGRkZGO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHRyYW5zaXRpb246IDAuNHMgZWFzZTtcbn1cbi5zZWN0aW9uLWZpbmFuY2lhbC1ldm9sdXRpb24gLmR1Y3R1cy1idG4tZ3JhZGllbnQ6aG92ZXIge1xuICB0cmFuc2l0aW9uOiAwLjRzIGVhc2U7XG4gIHRyYW5zZm9ybTogc2NhbGUoMC45OCk7XG59XG4uc2VjdGlvbi1maW5hbmNpYWwtZXZvbHV0aW9uIC5kdWN0dXMtYnRuLWdyYWRpZW50OmFjdGl2ZSwgLnNlY3Rpb24tZmluYW5jaWFsLWV2b2x1dGlvbiAuZHVjdHVzLWJ0bi1ncmFkaWVudDpmb2N1cyB7XG4gIHRyYW5zaXRpb246IDAuNHMgZWFzZTtcbiAgdHJhbnNmb3JtOiBzY2FsZSgwLjk2KTtcbn1cblxuLnNlY3Rpb24tdXNhYmlsaXR5LWNyeXB0byB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XG4gIHBhZGRpbmctdG9wOiAxMDBweDtcbiAgcGFkZGluZy1ib3R0b206IDEwMHB4O1xufVxuLnNlY3Rpb24tdXNhYmlsaXR5LWNyeXB0byAuY29udGFpbmVyIHtcbiAgbWF4LXdpZHRoOiA4MjBweDtcbiAgd2lkdGg6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLnNlY3Rpb24tdXNhYmlsaXR5LWNyeXB0byBpbWcge1xuICBtYXJnaW46IDI1cHggYXV0bztcbiAgbWF4LXdpZHRoOiAxMDAlO1xuICBkaXNwbGF5OiBibG9jaztcbn1cbi5zZWN0aW9uLXVzYWJpbGl0eS1jcnlwdG8gLmgzLXRpdGxlLXNlY3Rpb24ge1xuICBtYXJnaW4tdG9wOiAxNXB4O1xuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG59XG4uc2VjdGlvbi11c2FiaWxpdHktY3J5cHRvIC5wLXRleHQtc2VjdGlvbiB7XG4gIG1hcmdpbi1ib3R0b206IDI1cHg7XG4gIG1hcmdpbi10b3A6IDI1cHg7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbn1cblxuLnNlY3Rpb24tY29tbXVuaXR5LW5ldyB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uLy4uL2Fzc2V0cy9pbWcvc2VjdGlvbnMvY29tbXVuaXRpZXMtc2VjdGlvbi5wbmdcIik7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtY29sb3I6ICNFQUVCRUQ7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgcGFkZGluZy1ib3R0b206IDM0LjUlO1xufVxuLnNlY3Rpb24tY29tbXVuaXR5LW5ldyAuY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIG1heC13aWR0aDogOTUwcHg7XG4gIHBhZGRpbmctdG9wOiAxNTBweDtcbn1cbi5zZWN0aW9uLWNvbW11bml0eS1uZXcgLmgzLXRpdGxlLXNlY3Rpb24ge1xuICBtYXJnaW4tdG9wOiAxNXB4O1xuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xuICBjb2xvcjogd2hpdGU7XG59XG4uc2VjdGlvbi1jb21tdW5pdHktbmV3IC5zcGFuLXN1YnRpdGxlLXNlY3Rpb24ge1xuICBtYXJnaW4tdG9wOiAxNXB4O1xuICBtYXJnaW4tYm90dG9tOiAyNXB4O1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBjb2xvcjogd2hpdGU7XG59XG4uc2VjdGlvbi1jb21tdW5pdHktbmV3IC5zZWN0aW9uLWNvbW11bml0eS1pY29ucyB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsIG1pbm1heCgzMjBweCwgNDAwcHgpKTtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBtYXJnaW4tdG9wOiAzMHB4O1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDc1MHB4KSB7XG4gIC5zZWN0aW9uLWNvbW11bml0eS1uZXcgLnNlY3Rpb24tY29tbXVuaXR5LWljb25zIHtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcbiAgICBncmlkLWdhcDogMzBweDtcbiAgfVxufVxuLnNlY3Rpb24tY29tbXVuaXR5LW5ldyAuc2VjdGlvbi1jb21tdW5pdHktaWNvbnMgLmljb24ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGZvbnQtc2l6ZTogMTdweDtcbiAgbGluZS1oZWlnaHQ6IDI5cHg7XG59XG4uc2VjdGlvbi1jb21tdW5pdHktbmV3IC5zZWN0aW9uLWNvbW11bml0eS1pY29ucyAuaWNvbjpiZWZvcmUge1xuICBtaW4td2lkdGg6IDExMHB4O1xuICBtaW4taGVpZ2h0OiAxMTBweDtcbiAgbWFyZ2luLXJpZ2h0OiAzNXB4O1xufVxuXG4uc2VjdGlvbi1tYWludGFpbnMtbWFya2V0LWxlYWRpbmcge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRUFFQkVEO1xufVxuLnNlY3Rpb24tbWFpbnRhaW5zLW1hcmtldC1sZWFkaW5nIC5jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgcGFkZGluZy10b3A6IDEwMHB4O1xuICBwYWRkaW5nLWJvdHRvbTogMTAwcHg7XG4gIG1heC13aWR0aDogMTAwMHB4O1xufVxuLnNlY3Rpb24tbWFpbnRhaW5zLW1hcmtldC1sZWFkaW5nLWljb25zIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC13cmFwOiB3cmFwO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIG1hcmdpbi10b3A6IDEwcHg7XG4gIG1hcmdpbi1ib3R0b206IDEwMHB4O1xufVxuLnNlY3Rpb24tbWFpbnRhaW5zLW1hcmtldC1sZWFkaW5nLWljb25zIC5pY29uLWYge1xuICB3aWR0aDogMTgwcHg7XG59XG5AbWVkaWEgKG1heC13aWR0aDogODUwcHgpIHtcbiAgLnNlY3Rpb24tbWFpbnRhaW5zLW1hcmtldC1sZWFkaW5nLWljb25zIC5pY29uLWYge1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogODUwcHgpIHtcbiAgLnNlY3Rpb24tbWFpbnRhaW5zLW1hcmtldC1sZWFkaW5nLWljb25zIHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsIDFmcik7XG4gICAgZ3JpZC1nYXA6IDIwcHg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA0NTBweCkge1xuICAuc2VjdGlvbi1tYWludGFpbnMtbWFya2V0LWxlYWRpbmctaWNvbnMge1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xuICB9XG59XG4uc2VjdGlvbi1tYWludGFpbnMtbWFya2V0LWxlYWRpbmcgLmljb24ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBtYXJnaW46IDVweDtcbiAgbWF4LXdpZHRoOiAyNTBweDtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA4NTBweCkge1xuICAuc2VjdGlvbi1tYWludGFpbnMtbWFya2V0LWxlYWRpbmcgLmljb24ge1xuICAgIG1heC13aWR0aDogMTAwJTtcbiAgfVxufVxuLnNlY3Rpb24tbWFpbnRhaW5zLW1hcmtldC1sZWFkaW5nLXRpdGxlIHtcbiAgbWFyZ2luLXRvcDogMjBweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtc2l6ZTogMjJweDtcbiAgbGluZS1oZWlnaHQ6IDI1cHg7XG4gIGNvbG9yOiAjODYyNjMyO1xufVxuLnNlY3Rpb24tbWFpbnRhaW5zLW1hcmtldC1sZWFkaW5nLXRleHQge1xuICBtYXJnaW4tdG9wOiAxNXB4O1xuICBkaXNwbGF5OiBibG9jaztcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgZm9udC1zaXplOiAxNXB4O1xuICBsaW5lLWhlaWdodDogMjVweDtcbiAgY29sb3I6ICM1QzVBNTc7XG59XG5cbi5zZWN0aW9uLWhlYWRlci1uZXcgLnNsaWRlci1pdGVtIHtcbiAgbWF4LXdpZHRoOiA1NTBweDtcbn1cbi5zZWN0aW9uLWhlYWRlci1uZXcgLmgyX19zbGlkZXItdGl0bGUge1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1zaXplOiA0NHB4O1xuICBsaW5lLWhlaWdodDogNTRweDtcbiAgY29sb3I6ICNGRkZGRkY7XG4gIHRleHQtc2hhZG93OiAwcHggMnB4IDRweCByZ2JhKDAsIDAsIDAsIDAuNSk7XG59XG4uc2VjdGlvbi1oZWFkZXItbmV3IC5wX19zbGlkZXItaXRlbSB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LXNpemU6IDIwcHg7XG4gIGxpbmUtaGVpZ2h0OiAyNHB4O1xuICBjb2xvcjogI0ZGRkZGRjtcbiAgdGV4dC1zaGFkb3c6IDBweCAycHggNHB4IHJnYmEoMCwgMCwgMCwgMC41KTtcbn1cbi5zZWN0aW9uLWhlYWRlci1uZXcgLmJ1dHRvbiB7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgwZGVnLCAjOEMzNDQ0LCAjOEMzNDQ0KTtcbiAgYm9yZGVyOiA0LjYwODdweCBzb2xpZCAjODgyNDM0O1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBib3gtc2hhZG93OiAwcHggMHB4IDI5Ljk1NjVweCByZ2JhKDI1NSwgNjQsIDk0LCAwLjUpO1xuICBib3JkZXItcmFkaXVzOiA3Ni4wNDM1cHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGZvbnQtc2l6ZTogMjFweDtcbiAgbGluZS1oZWlnaHQ6IDI2cHg7XG4gIG1heC13aWR0aDogMzgwcHg7XG4gIGNvbG9yOiAjRkZGRkZGO1xufSIsIkBpbXBvcnQgXCIuLi8uLi8uLi9zY3NzL3ZhcnNcIjtcbkBpbXBvcnQgXCIuLi8uLi8uLi9zY3NzL21peGluc1wiO1xuXG4uc2VjdGlvbi1maW5hbmNpYWwtZXZvbHV0aW9uIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0VBRUJFRDtcblxuICAuY29udGFpbmVyIHtcbiAgICBtYXgtd2lkdGg6IDgyMHB4O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIHBhZGRpbmctdG9wOiA1MHB4O1xuICAgIHBhZGRpbmctYm90dG9tOiA1MHB4O1xuICB9XG5cbiAgaW1nIHtcbiAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xuICAgIG1heC13aWR0aDogMTAwJTtcbiAgfVxuXG4gIC5oMy10aXRsZS1zZWN0aW9uIHtcbiAgICBtYXJnaW4tdG9wOiAxNXB4O1xuICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XG4gIH1cblxuICAuc3Bhbi1zdWJ0aXRsZS1zZWN0aW9uIHtcbiAgICBtYXJnaW4tdG9wOiAxNXB4O1xuICAgIG1hcmdpbi1ib3R0b206IDI1cHg7XG4gIH1cblxuICAucC10ZXh0LXNlY3Rpb24ge1xuICAgIG1hcmdpbi1ib3R0b206IDI1cHg7XG4gICAgbWFyZ2luLXRvcDogMjVweDtcbiAgfVxuXG4gIC5kdWN0dXMtYnRuLWdyYWRpZW50IHtcbiAgICBtYXJnaW4tdG9wOiAyNXB4O1xuICAgIG1hcmdpbi1ib3R0b206IDI1cHg7XG4gICAgYmFja2dyb3VuZDogcmFkaWFsLWdyYWRpZW50KDQ0Ljk2JSAzOTEuMzclIGF0IDQ5LjY0JSA1MCUsICNEOEIwNEIgMi42NyUsICM4Qzc2M0MgMTAwJSk7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICBib3gtc2hhZG93OiAwcHggMHB4IDI5Ljk1NjVweCByZ2JhKDI1NSwgMjIzLCA4NywgMC41KSwgaW5zZXQgMHB4IDYuOTEzMDRweCAyNS4zNDc4cHggI0ZGREYzNCwgaW5zZXQgMHB4IC02LjkxMzA0cHggOS4yMTczOXB4IHJnYmEoMjU1LCAyNTAsIDIxNSwgMC44MSk7XG4gICAgYm9yZGVyLXJhZGl1czogNzYuMDQzNXB4O1xuICAgIGhlaWdodDogODBweDtcbiAgICBtYXgtd2lkdGg6IDM0MHB4O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBib3JkZXI6IDQuNjA4N3B4IHNvbGlkICNCQUEzNUQ7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICBmb250LXNpemU6IDIxcHg7XG4gICAgbGluZS1oZWlnaHQ6IDI2cHg7XG4gICAgY29sb3I6ICNGRkZGRkY7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIHRyYW5zaXRpb246IDAuNHMgZWFzZTtcblxuICAgICY6aG92ZXIge1xuICAgICAgdHJhbnNpdGlvbjogMC40cyBlYXNlO1xuICAgICAgdHJhbnNmb3JtOiBzY2FsZSgwLjk4KTtcbiAgICB9XG5cbiAgICAmOmFjdGl2ZSxcbiAgICAmOmZvY3VzIHtcbiAgICAgIHRyYW5zaXRpb246IDAuNHMgZWFzZTtcbiAgICAgIHRyYW5zZm9ybTogc2NhbGUoMC45Nik7XG4gICAgfVxuICB9XG59XG5cblxuLnNlY3Rpb24tdXNhYmlsaXR5LWNyeXB0byB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XG4gIHBhZGRpbmctdG9wOiAxMDBweDtcbiAgcGFkZGluZy1ib3R0b206IDEwMHB4O1xuXG4gIC5jb250YWluZXIge1xuICAgIG1heC13aWR0aDogODIwcHg7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIH1cblxuICBpbWcge1xuICAgIG1hcmdpbjogMjVweCBhdXRvO1xuICAgIG1heC13aWR0aDogMTAwJTtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgfVxuXG4gIC5oMy10aXRsZS1zZWN0aW9uIHtcbiAgICBtYXJnaW4tdG9wOiAxNXB4O1xuICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB9XG5cbiAgLnAtdGV4dC1zZWN0aW9uIHtcbiAgICBtYXJnaW4tYm90dG9tOiAyNXB4O1xuICAgIG1hcmdpbi10b3A6IDI1cHg7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB9XG59XG5cbi5zZWN0aW9uLWNvbW11bml0eS1uZXcge1xuICAvLyBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJ2Fzc2V0cy9pbWcvc2VjdGlvbnMvY29tbXVuaXRpZXMtc2VjdGlvbi5wbmcnKTtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vLi4vYXNzZXRzL2ltZy9zZWN0aW9ucy9jb21tdW5pdGllcy1zZWN0aW9uLnBuZ1wiKTtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0VBRUJFRDtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBwYWRkaW5nLWJvdHRvbTogMzQuNSU7XG5cbiAgLmNvbnRhaW5lciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIG1heC13aWR0aDogOTUwcHg7XG4gICAgcGFkZGluZy10b3A6IDE1MHB4O1xuICB9XG5cbiAgLmgzLXRpdGxlLXNlY3Rpb24ge1xuICAgIG1hcmdpbi10b3A6IDE1cHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMTVweDtcbiAgICBjb2xvcjogd2hpdGU7XG4gIH1cblxuICAuc3Bhbi1zdWJ0aXRsZS1zZWN0aW9uIHtcbiAgICBtYXJnaW4tdG9wOiAxNXB4O1xuICAgIG1hcmdpbi1ib3R0b206IDI1cHg7XG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgICBjb2xvcjogd2hpdGU7XG4gIH1cblxuICAuc2VjdGlvbi1jb21tdW5pdHktaWNvbnMge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMixtaW5tYXgoMzIwcHgsIDQwMHB4KSk7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIG1hcmdpbi10b3A6IDMwcHg7XG5cbiAgICBAaW5jbHVkZSBiKDc1MCkge1xuICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XG4gICAgICBncmlkLWdhcDogMzBweDtcbiAgICB9XG5cbiAgICAuaWNvbntcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBjb2xvcjogd2hpdGU7XG4gICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgZm9udC1zaXplOiAxN3B4O1xuICAgICAgbGluZS1oZWlnaHQ6IDI5cHg7XG5cbiAgICAgICY6YmVmb3JlIHtcbiAgICAgICAgbWluLXdpZHRoOiAxMTBweDtcbiAgICAgICAgbWluLWhlaWdodDogMTEwcHg7XG4gICAgICAgIG1hcmdpbi1yaWdodDogMzVweDtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuLnNlY3Rpb24tbWFpbnRhaW5zLW1hcmtldC1sZWFkaW5nIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0VBRUJFRDtcblxuICAuY29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgcGFkZGluZy10b3A6IDEwMHB4O1xuICAgIHBhZGRpbmctYm90dG9tOiAxMDBweDtcbiAgICBtYXgtd2lkdGg6IDEwMDBweDtcbiAgfVxuXG4gICYtaWNvbnMge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC13cmFwOiB3cmFwO1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDEwMHB4O1xuXG4gICAgLmljb24tZiB7XG4gICAgICB3aWR0aDogMTgwcHg7XG5cbiAgICAgIEBpbmNsdWRlIGIoODUwKSB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgfVxuICAgIH1cblxuICAgIEBpbmNsdWRlIGIoODUwKSB7XG4gICAgICBkaXNwbGF5OiBncmlkO1xuICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwgMWZyKTtcbiAgICAgIGdyaWQtZ2FwOiAyMHB4O1xuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgfVxuXG4gICAgQGluY2x1ZGUgYig0NTApIHtcbiAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xuICAgIH1cbiAgfVxuXG4gIC5pY29uICB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIG1hcmdpbjogNXB4O1xuICAgIG1heC13aWR0aDogMjUwcHg7XG5cbiAgICBAaW5jbHVkZSBiKDg1MCkge1xuICAgICAgbWF4LXdpZHRoOiAxMDAlO1xuICAgIH1cbiAgfVxuXG4gICYtdGl0bGUgIHtcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGZvbnQtc2l6ZTogMjJweDtcbiAgICBsaW5lLWhlaWdodDogMjVweDtcbiAgICBjb2xvcjogIzg2MjYzMjtcbiAgfVxuXG4gICYtdGV4dCB7XG4gICAgbWFyZ2luLXRvcDogMTVweDtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBmb250LXdlaWdodDogNTAwO1xuICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICBsaW5lLWhlaWdodDogMjVweDtcbiAgICBjb2xvcjogIzVDNUE1NztcbiAgfVxufVxuXG4uc2VjdGlvbi1oZWFkZXItbmV3IHtcblxuICAuc2xpZGVyLWl0ZW0ge1xuICAgIG1heC13aWR0aDogNTUwcHg7XG4gIH1cblxuICAuaDJfX3NsaWRlci10aXRsZSB7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgZm9udC1zaXplOiA0NHB4O1xuICAgIGxpbmUtaGVpZ2h0OiA1NHB4O1xuICAgIGNvbG9yOiAjRkZGRkZGO1xuICAgIHRleHQtc2hhZG93OiAwcHggMnB4IDRweCByZ2JhKDAsIDAsIDAsIDAuNSk7XG4gIH1cblxuICAucF9fc2xpZGVyLWl0ZW0ge1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICBsaW5lLWhlaWdodDogMjRweDtcbiAgICBjb2xvcjogI0ZGRkZGRjtcbiAgICB0ZXh0LXNoYWRvdzogMHB4IDJweCA0cHggcmdiYSgwLCAwLCAwLCAwLjUpO1xuICB9XG5cbiAgLmJ1dHRvbiB7XG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDBkZWcsICM4QzM0NDQsICM4QzM0NDQpO1xuICAgIGJvcmRlcjogNC42MDg3cHggc29saWQgIzg4MjQzNDtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIGJveC1zaGFkb3c6IDBweCAwcHggMjkuOTU2NXB4IHJnYmEoMjU1LCA2NCwgOTQsIDAuNSk7XG4gICAgYm9yZGVyLXJhZGl1czogNzYuMDQzNXB4O1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgZm9udC1zaXplOiAyMXB4O1xuICAgIGxpbmUtaGVpZ2h0OiAyNnB4O1xuICAgIG1heC13aWR0aDogMzgwcHg7XG4gICAgY29sb3I6ICNGRkZGRkY7XG4gIH1cbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](IndexNewComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-index-new',
                templateUrl: './index-new.component.html',
                styleUrls: ['./index-new.component.scss']
            }]
    }], function () { return [{ type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/pages/index/footer/footer.component.ts":
/*!********************************************************!*\
  !*** ./src/app/pages/index/footer/footer.component.ts ***!
  \********************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var src_app_params__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/params */ "./src/app/params.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");







function FooterComponent_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "section", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](9, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](11, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "a", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "a", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "a", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](21, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](23, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "footer", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "a", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "a", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "a", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "a", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "a", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](37, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "a", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](40, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "a", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](43, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "a", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](46, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](49, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "a", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](51, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](53, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "a", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](55, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](57, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "a", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](59, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](61, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](63, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "a", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](65, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](67, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "a", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](69, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](71, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "a", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](73, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](74);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](75, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](77, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "a", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](79);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](80, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "a", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](82);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](83, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "a", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](85, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](86);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](87, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "span", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](90, "\u00A9 2020 Ducatus | ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "a", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](92);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](93, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](94, " | ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "a", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](96);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](97, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](98, " | ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "a", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](100);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](101, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](9, 30, "APPS.TITLE"), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](11, 32, "APPS.SUBTITLE"), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](21, 34, "APPS.TEXT_1"), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](23, 36, "APPS.TEXT_2"), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-title", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](37, 38, "FOOTER.MENU.SECTION.ONE.TITLE"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](40, 40, "FOOTER.MENU.SECTION.ONE.LINK_1"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](43, 42, "FOOTER.MENU.SECTION.ONE.LINK_2"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](46, 44, "FOOTER.MENU.SECTION.ONE.LINK_3"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-title", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](49, 46, "FOOTER.MENU.SECTION.TWO.TITLE"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-unactive", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](51, 48, "FOOTER.MENU.SECTION.SOON"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](53, 50, "FOOTER.MENU.SECTION.TWO.LINK_1"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-unactive", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](55, 52, "FOOTER.MENU.SECTION.SOON"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](57, 54, "FOOTER.MENU.SECTION.TWO.LINK_2"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-unactive", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](59, 56, "FOOTER.MENU.SECTION.SOON"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](61, 58, "FOOTER.MENU.SECTION.TWO.LINK_3"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-title", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](63, 60, "FOOTER.MENU.SECTION.THREE.TITLE"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-unactive", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](65, 62, "FOOTER.MENU.SECTION.SOON"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](67, 64, "FOOTER.MENU.SECTION.THREE.LINK_1"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-unactive", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](69, 66, "FOOTER.MENU.SECTION.SOON"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](71, 68, "FOOTER.MENU.SECTION.THREE.LINK_2"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-unactive", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](73, 70, "FOOTER.MENU.SECTION.SOON"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](75, 72, "FOOTER.MENU.SECTION.THREE.LINK_3"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-title", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](77, 74, "FOOTER.MENU.SECTION.FOUR.TITLE"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](80, 76, "FOOTER.MENU.SECTION.FOUR.LINK_1"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](83, 78, "FOOTER.MENU.SECTION.FOUR.LINK_2"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-unactive", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](85, 80, "FOOTER.MENU.SECTION.SOON"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](87, 82, "FOOTER.MENU.SECTION.FOUR.LINK_3"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](93, 84, "FOOTER.MENU.LEGAL"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](97, 86, "FOOTER.MENU.LEGAL_DISCLAIMER"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](101, 88, "FOOTER.MENU.TERMS"));
} }
function FooterComponent_section_1_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "span", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FooterComponent_section_1_Template_span_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r2.privacyCookie = false; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](6, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FooterComponent_section_1_Template_span_click_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r4.privacyCookieSet(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](9, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 3, "PRIVACY.TEXT"), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](6, 5, "PRIVACY.BUTTON_DECLINE"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](9, 7, "PRIVACY.BUTTON_ACCEPT"));
} }
class FooterComponent {
    constructor(router) {
        this.router = router;
        this.privacyCookie = true;
        this.hideFooter = false;
        this.router.events.subscribe((event) => {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationStart"]) {
                // Show loading indicator
            }
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationEnd"]) {
                this.hideFooter = !src_app_params__WEBPACK_IMPORTED_MODULE_2__["hideFooterInRoutes"].includes(event.url);
            }
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationError"]) {
                // console.warn(event.error);
            }
        });
    }
    privacyCookieSet() {
        window['jQuery']['cookie']('privacyCookie', true);
        this.privacyCookie = false;
    }
    ngOnInit() {
        if (window['jQuery']['cookie']('privacyCookie')) {
            this.privacyCookie = false;
        }
        const bottomMenu = document.getElementsByClassName('footer-menu');
        // tslint:disable-next-line: prefer-for-of
        for (let i = 0; i < bottomMenu.length; i++) {
            bottomMenu[i].addEventListener('click', function () {
                if ($(this).hasClass('footer-menu')) {
                    if ($(this).parent().hasClass('footer-menu-same') && !$(this).parent().hasClass('footer-menu-same-open')) {
                        $(this).parent().addClass('footer-menu-same-open');
                        return;
                    }
                    else if ($(this).parent().hasClass('footer-menu-same') && $(this).parent().hasClass('footer-menu-same-open')) {
                        $(this).parent().removeClass('footer-menu-same-open');
                        return;
                    }
                    if ($(this).hasClass('footer-menu-open')) {
                        $(this).removeClass('footer-menu-open');
                    }
                    else {
                        $(this).addClass('footer-menu-open');
                    }
                }
            });
        }
    }
}
FooterComponent.ɵfac = function FooterComponent_Factory(t) { return new (t || FooterComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"])); };
FooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FooterComponent, selectors: [["app-footer"]], decls: 2, vars: 2, consts: [[4, "ngIf"], ["class", "section-cookie", 4, "ngIf"], [1, "section-app"], [1, "section-app-wrap"], [1, "container"], [1, "section-app-block", "section-app-block-fill"], [1, "section-app-block-wrap"], [1, "section-text"], [1, "section-app-line"], [1, "section-app-title", "section-app-title-left", 3, "innerHTML"], [1, "section-app-text", 3, "innerHTML"], [1, "section-app-list"], ["href", "https://wallet.ducatus.io/", "target", "_blank", 1, "download_ducatus"], ["href", "https://play.google.com/store/apps/details?id=io.ducatus.walnew", "target", "_blank", 1, "download_googleplay"], ["href", "https://apps.apple.com/us/app/ducatus-wallet-2-0-1/id1489722627?ign-mpt=uo%3D2", "target", "_blank", 1, "download_appstore"], [1, "section-app-block"], [1, "section-app-title", 3, "innerHTML"], [1, "footer"], [1, "section-footer"], [1, "footer-left"], [1, "footer-logo"], [1, "footer-social"], ["href", "https://www.facebook.com/WeAreDucatus/", "target", "_blank", 1, "icon", "icon__facebook"], ["href", "https://twitter.com/DucatusGlobal", "target", "_blank", 1, "icon", "icon__twitter"], ["href", "https://instagram.com/ducatusglobal", "target", "_blank", 1, "icon", "icon__instagram"], ["href", "https://www.linkedin.com/company/ducatus-global", "target", "_blank", 1, "icon", "icon__linkedin"], ["href", "https://www.youtube.com/channel/UCBjE5LLJQyMq6crQholohTQ", "target", "_blank", 1, "icon", "icon__youtube"], [1, "footer-right"], [1, "footer-menu"], ["routerLink", "/about", 1, "footer-menu-link"], ["href", "https://www.ducatus.com", 1, "footer-menu-link"], ["routerLink", "/contact", 1, "footer-menu-link"], [1, "footer-menu-same"], ["target", "_blank", 1, "footer-menu-link", "footer-menu-link-disable"], ["href", "https://property.ducatus.com", "target", "_blank", 1, "footer-menu-link"], ["href", "https://travel.ducatus.com", "target", "_blank", 1, "footer-menu-link"], ["href", "https://ducatus.net", "target", "_blank", 1, "footer-menu-link"], ["href", "https://staydmob.com/", "target", "_blank", 1, "footer-menu-link"], ["href", "https://merchants.ducatus.com", "target", "_blank", 1, "footer-menu-link"], [1, "section-copyright"], [1, "p__copyrights"], ["routerLink", "/legal"], ["routerLink", "/legal-disclaimer"], ["href", "assets/downloads/pdf/Wallet_Terms_Conditions.pdf", "target", "_blank"], [1, "section-cookie"], [3, "innerHTML"], [1, "section-cookie-buttons"], [1, "section-cookie-buttons-item", 3, "click"], ["id", "accept_cookie", 1, "section-cookie-buttons-item", 3, "click"]], template: function FooterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, FooterComponent_ng_container_0_Template, 102, 90, "ng-container", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, FooterComponent_section_1_Template, 10, 9, "section", 1);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.hideFooter);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.privacyCookie);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"]], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslatePipe"]], styles: ["@import url(\"https://fonts.googleapis.com/css?family=Montserrat:100,100i,200,200i,300,300i,400,400i,500,500i,600,600i,700,700i,800,800i,900,900i&display=swap\");\n.clearfix[_ngcontent-%COMP%]:after {\n  content: \"\";\n  display: table;\n  clear: both;\n}\n.centered[_ngcontent-%COMP%] {\n  display: table;\n  width: 100%;\n  height: 100%;\n}\n.centered[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\n  display: table-cell;\n  text-align: center;\n  vertical-align: middle;\n}\n\n.footer[_ngcontent-%COMP%] {\n  background-color: #F4F4F4;\n  padding-top: 30px;\n  padding-bottom: 30px;\n  overflow: hidden;\n}\n@media (max-width: 750px) {\n  .footer[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%] {\n    padding: 0;\n  }\n}\n.footer[_ngcontent-%COMP%]   .section-copyright[_ngcontent-%COMP%] {\n  padding-left: 20px;\n}\n.footer[_ngcontent-%COMP%]   .section-copyright[_ngcontent-%COMP%]   .p__copyrights[_ngcontent-%COMP%] {\n  font-style: 12px;\n  color: #737778;\n  font-weight: normal;\n}\n.footer[_ngcontent-%COMP%]   .section-copyright[_ngcontent-%COMP%]   .p__copyrights[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  transition: 0.4s ease;\n  color: #737778;\n  text-decoration: none;\n}\n.footer[_ngcontent-%COMP%]   .section-copyright[_ngcontent-%COMP%]   .p__copyrights[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  text-decoration: underline;\n  color: #892734;\n}\n.footer[_ngcontent-%COMP%]   .section-footer[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: minmax(170px, 320px) 1fr;\n  margin-bottom: 30px;\n}\n@media (max-width: 850px) {\n  .footer[_ngcontent-%COMP%]   .section-footer[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n    margin-bottom: 30px;\n    grid-gap: 30px;\n  }\n}\n.footer-left[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n.footer-logo[_ngcontent-%COMP%] {\n  height: 80px;\n  min-width: 130px;\n  width: 100%;\n  margin-bottom: 10px;\n}\n.footer-logo[_ngcontent-%COMP%]:before {\n  content: \"\";\n  background-image: url('logo-footer.png');\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: contain;\n  height: 80px;\n  width: 120px;\n  display: block;\n  margin: 0 auto;\n}\n.footer-social[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.footer-social[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\n  transition: 0.4s ease;\n  width: 20px;\n  height: 20px;\n  margin: 5px;\n}\n.footer-social[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%]:hover {\n  opacity: 0.4;\n}\n.footer-social[_ngcontent-%COMP%]   .icon__youtube[_ngcontent-%COMP%] {\n  width: 30px;\n}\n.footer-right[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n}\n@media (max-width: 750px) {\n  .footer-right[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n}\n.footer-menu[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  padding: 0px 10px;\n  max-width: 250px;\n  min-width: 170px;\n  width: 100%;\n  transition: 0.4s ease;\n}\n@media (max-width: 850px) {\n  .footer-menu[_ngcontent-%COMP%] {\n    max-width: 210px;\n    min-width: 170px;\n  }\n}\n@media (max-width: 750px) {\n  .footer-menu[_ngcontent-%COMP%] {\n    max-width: 100%;\n    min-width: 100%;\n    width: 100%;\n    border-top: 2px solid #E1E1E1;\n    padding: 0;\n    max-height: 50px;\n    min-height: 50px;\n    overflow: hidden;\n    position: relative;\n    background-color: #ececec;\n  }\n}\n.footer-menu[_ngcontent-%COMP%]:before {\n  content: attr(data-title);\n  color: #892734;\n  font-size: 16px;\n  font-weight: bold;\n  margin-bottom: 25px;\n  width: 100%;\n  z-index: 9;\n}\n@media (max-width: 750px) {\n  .footer-menu[_ngcontent-%COMP%]:before {\n    width: 100%;\n    margin-bottom: 0;\n    max-height: 50px;\n    height: 100%;\n    display: flex;\n    align-items: center;\n    padding-left: 20px;\n    font-weight: bold;\n    color: #656C75;\n    text-transform: uppercase;\n    position: absolute;\n    background-color: #ececec;\n    top: 0;\n  }\n}\n@media (max-width: 750px) {\n  .footer-menu-open[_ngcontent-%COMP%] {\n    max-height: 100%;\n    height: 100%;\n    padding-top: 60px;\n    padding-bottom: 10px;\n  }\n  .footer-menu-open[_ngcontent-%COMP%]:before {\n    box-shadow: 0px 3px 8px -4px #00000091;\n  }\n}\n.footer-menu-link[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: #737778;\n  font-weight: normal;\n  margin: 6px 0px;\n  text-decoration: none;\n  transition: 0.4s ease;\n  position: relative;\n}\n.footer-menu-link-disable[_ngcontent-%COMP%] {\n  color: #737778;\n  cursor: default;\n}\n@media (max-width: 750px) {\n  .footer-menu-link-disable[_ngcontent-%COMP%]::after {\n    content: attr(data-unactive);\n    display: inline;\n    position: relative;\n    z-index: 8;\n    font-size: 12px;\n    background-color: #892734;\n    color: #fff;\n    padding: 2px 8px;\n    border-radius: 5px;\n    margin-left: 15px;\n  }\n}\n.footer-menu-link-disable[_ngcontent-%COMP%]:hover {\n  cursor: default;\n  color: #737778 !important;\n}\n.footer-menu-link-disable[_ngcontent-%COMP%]:hover:before {\n  content: attr(data-unactive);\n  display: block;\n  position: absolute;\n  z-index: 999;\n  bottom: -30px;\n  font-size: 12px;\n  left: 30px;\n  background-color: #892734;\n  color: #fff;\n  padding: 5px 10px;\n  border-radius: 5px;\n}\n@media (max-width: 750px) {\n  .footer-menu-link-disable[_ngcontent-%COMP%]:hover:before {\n    display: none;\n  }\n}\n.footer-menu-link[_ngcontent-%COMP%]:hover {\n  color: #892734;\n}\n@media (max-width: 750px) {\n  .footer-menu-link[_ngcontent-%COMP%] {\n    padding-left: 20px;\n  }\n}\n.footer-menu-same[_ngcontent-%COMP%] {\n  display: flex;\n  max-width: 500px;\n  width: 100%;\n}\n@media (max-width: 750px) {\n  .footer-menu-same[_ngcontent-%COMP%] {\n    max-width: 100%;\n    max-height: 50px;\n    overflow: hidden;\n    background-color: #ececec;\n    display: block;\n    overflow: hidden;\n  }\n}\n@media (max-width: 750px) {\n  .footer-menu-same-open[_ngcontent-%COMP%] {\n    max-height: 100%;\n    flex-direction: column;\n    padding-bottom: 10px;\n  }\n  .footer-menu-same-open[_ngcontent-%COMP%]   .footer-menu[_ngcontent-%COMP%] {\n    border: none;\n    padding-top: 0px;\n    padding-bottom: 0px;\n    max-height: 100% !important;\n  }\n  .footer-menu-same-open[_ngcontent-%COMP%]   .footer-menu[_ngcontent-%COMP%]:nth-child(1) {\n    border-top: 2px solid #E1E1E1;\n    padding-top: 60px;\n  }\n}\n@media (max-width: 750px) and (max-width: 750px) {\n  .footer-menu-same-open[_ngcontent-%COMP%]   .footer-menu[_ngcontent-%COMP%]:nth-child(1):before {\n    display: flex;\n    box-shadow: 0px 3px 8px -4px #00000091;\n  }\n}\n@media (max-width: 750px) and (max-width: 750px) {\n  .footer-menu-same-open[_ngcontent-%COMP%]   .footer-menu[_ngcontent-%COMP%]:before {\n    display: none;\n  }\n}\n.footer-menu-same[_ngcontent-%COMP%]   .footer-menu[_ngcontent-%COMP%] {\n  border: none;\n}\n@media (max-width: 750px) {\n  .footer-menu-same[_ngcontent-%COMP%]   .footer-menu[_ngcontent-%COMP%]:nth-child(1) {\n    border-top: 2px solid #E1E1E1;\n  }\n}\n@media (max-width: 750px) {\n  .footer-menu-same[_ngcontent-%COMP%]   .footer-menu[_ngcontent-%COMP%]:nth-child(1):before {\n    display: flex;\n  }\n}\n@media (max-width: 750px) {\n  .footer-menu-same[_ngcontent-%COMP%]   .footer-menu[_ngcontent-%COMP%]:before {\n    display: none;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9nbGViL3Byb2plY3RzL2R1Y2F0dXMtc2l0ZS9zcmMvc2Nzcy9fdmFycy5zY3NzIiwiL1VzZXJzL2dsZWIvcHJvamVjdHMvZHVjYXR1cy1zaXRlL3NyYy9zY3NzL19taXhpbnMuc2NzcyIsInNyYy9hcHAvcGFnZXMvaW5kZXgvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuc2NzcyIsIi9Vc2Vycy9nbGViL3Byb2plY3RzL2R1Y2F0dXMtc2l0ZS9zcmMvYXBwL3BhZ2VzL2luZGV4L2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBSVEsK0pBQUE7QUMyQlI7RUFDQyxXQUFBO0VBQ0EsY0FBQTtFQUNBLFdBQUE7QUM3QkQ7QURnQ0E7RUFDQyxjQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUM3QkQ7QUQrQkM7RUFDQyxtQkFBQTtFQUNBLGtCQUFBO0VBQ0Esc0JBQUE7QUM3QkY7QUR5TUE7OztHQUFBO0FFdE5BO0VBQ0kseUJBQUE7RUFDQSxpQkFBQTtFQUNBLG9CQUFBO0VBQ0EsZ0JBQUE7QURvQko7QURtSUU7RUVySkU7SUFFUSxVQUFBO0VEb0JWO0FBQ0Y7QUNqQkk7RUFDSSxrQkFBQTtBRG1CUjtBQ2pCUTtFQUNJLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLG1CQUFBO0FEbUJaO0FDakJZO0VBQ0kscUJBQUE7RUFDQSxjQUFBO0VBQ0EscUJBQUE7QURtQmhCO0FDakJnQjtFQUNJLDBCQUFBO0VBQ0EsY0hKUjtBRXVCWjtBQ2JJO0VBQ0ksYUFBQTtFQUNBLCtDQUFBO0VBQ0EsbUJBQUE7QURlUjtBRHdHRTtFRTFIRTtJQU1RLDBCQUFBO0lBQ0EsbUJBQUE7SUFDQSxjQUFBO0VEZ0JWO0FBQ0Y7QUNiSTtFQUNJLGFBQUE7RUFDQSxzQkFBQTtBRGVSO0FDWkk7RUFDSSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7QURjUjtBQ1pRO0VBQ0ksV0FBQTtFQUNBLHdDQUFBO0VBQ0EsMkJBQUE7RUFDQSw0QkFBQTtFQUNBLHdCQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0VBQ0EsY0FBQTtBRGNaO0FDVkk7RUFDSSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBRFlSO0FDVlE7RUFDSSxxQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtBRFlaO0FDVlk7RUFDSSxZQUFBO0FEWWhCO0FDVFk7RUFDSSxXQUFBO0FEV2hCO0FDTkk7RUFDSSxhQUFBO0VBQ0EsOEJBQUE7QURRUjtBRHVERTtFRWpFRTtJQUtRLHNCQUFBO0VEU1Y7QUFDRjtBQ05JO0VBQ0ksYUFBQTtFQUNBLHNCQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLHFCQUFBO0FEUVI7QUR5Q0U7RUV4REU7SUFVUSxnQkFBQTtJQUNBLGdCQUFBO0VEU1Y7QUFDRjtBRG1DRTtFRXhERTtJQWVRLGVBQUE7SUFDQSxlQUFBO0lBQ0EsV0FBQTtJQUNBLDZCQUFBO0lBQ0EsVUFBQTtJQUNBLGdCQUFBO0lBQ0EsZ0JBQUE7SUFDQSxnQkFBQTtJQUNBLGtCQUFBO0lBQ0EseUJBQUE7RURVVjtBQUNGO0FDUlE7RUFDSSx5QkFBQTtFQUNBLGNIekdBO0VHMEdBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLFVBQUE7QURVWjtBRFlFO0VFN0JNO0lBVVEsV0FBQTtJQUNBLGdCQUFBO0lBQ0EsZ0JBQUE7SUFDQSxZQUFBO0lBQ0EsYUFBQTtJQUNBLG1CQUFBO0lBQ0Esa0JBQUE7SUFDQSxpQkFBQTtJQUNBLGNBQUE7SUFDQSx5QkFBQTtJQUNBLGtCQUFBO0lBQ0EseUJBQUE7SUFDQSxNQUFBO0VEV2Q7QUFDRjtBRExFO0VFSE07SUFFUSxnQkFBQTtJQUNBLFlBQUE7SUFDQSxpQkFBQTtJQUNBLG9CQUFBO0VEVWQ7RUNSYztJQUNJLHNDQUFBO0VEVWxCO0FBQ0Y7QUNOUTtFQUNJLGVBQUE7RUFDQSxjQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EscUJBQUE7RUFDQSxxQkFBQTtFQUNBLGtCQUFBO0FEUVo7QUNOWTtFQUNJLGNBQUE7RUFDQSxlQUFBO0FEUWhCO0FEN0JFO0VFdUJjO0lBRVEsNEJBQUE7SUFDQSxlQUFBO0lBQ0Esa0JBQUE7SUFDQSxVQUFBO0lBQ0EsZUFBQTtJQUNBLHlCQUFBO0lBQ0EsV0FBQTtJQUNBLGdCQUFBO0lBQ0Esa0JBQUE7SUFDQSxpQkFBQTtFRFF0QjtBQUNGO0FDTGdCO0VBQ0ksZUFBQTtFQUNBLHlCQUFBO0FET3BCO0FDTG9CO0VBQ0ksNEJBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGVBQUE7RUFDQSxVQUFBO0VBQ0EseUJBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBRE94QjtBRDVERTtFRTBDa0I7SUFjUSxhQUFBO0VEUTFCO0FBQ0Y7QUNIWTtFQUNJLGNIbk1KO0FFd01aO0FEcEVFO0VFVU07SUF5RFEsa0JBQUE7RURLZDtBQUNGO0FDRlE7RUFDSSxhQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0FESVo7QUQ5RUU7RUV1RU07SUFNUSxlQUFBO0lBQ0EsZ0JBQUE7SUFDQSxnQkFBQTtJQUNBLHlCQUFBO0lBQ0EsY0FBQTtJQUNBLGdCQUFBO0VES2Q7QUFDRjtBRHhGRTtFRXFGVTtJQUVRLGdCQUFBO0lBQ0Esc0JBQUE7SUFDQSxvQkFBQTtFREtsQjtFQ0hrQjtJQUNJLFlBQUE7SUFDQSxnQkFBQTtJQUNBLG1CQUFBO0lBQ0EsMkJBQUE7RURLdEI7RUNIc0I7SUFDSSw2QkFBQTtJQUNBLGlCQUFBO0VESzFCO0FBQ0Y7QUR6R0U7RUVxRzBCO0lBRVEsYUFBQTtJQUNBLHNDQUFBO0VETWxDO0FBQ0Y7QUQvR0U7RUU2R3NCO0lBRVEsYUFBQTtFREk5QjtBQUNGO0FDRVk7RUFDSSxZQUFBO0FEQWhCO0FEdkhFO0VFeUhjO0lBRVEsNkJBQUE7RURBdEI7QUFDRjtBRDVIRTtFRThIa0I7SUFFUSxhQUFBO0VEQTFCO0FBQ0Y7QURqSUU7RUVxSWM7SUFFUSxhQUFBO0VERnRCO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9pbmRleC9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBtYWluIHZhcmlhYmxlc1xuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9TW9udHNlcnJhdDoxMDAsMTAwaSwyMDAsMjAwaSwzMDAsMzAwaSw0MDAsNDAwaSw1MDAsNTAwaSw2MDAsNjAwaSw3MDAsNzAwaSw4MDAsODAwaSw5MDAsOTAwaSZkaXNwbGF5PXN3YXAnKTtcblxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBhZGRpdGlvbmFsIHZhcmlhYmxlc1xuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cblxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBjb2xvcnNcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG4kYmxhY2s6ICMwMDA7XG4kZ3JheTogIzgwODA4MDtcbiR3aGl0ZTogI2ZmZjtcbiRibHVlOiAjMDBGO1xuJHB1cnBsZTogIzhBNEQ3NjtcbiRwaW5rOiAjRkE3QzkxO1xuJGJyb3duOiAjNzU3NzYzO1xuJGJlaWdlLWxpZ2h0OiAjRDBEMUNEO1xuJGJlaWdlLWxpZ2h0ZXItMTogI0VGRjBFQjtcbiRiZWlnZS1saWdodGVyLTI6ICNGNEY0RjQ7XG5cbiRicm93bi1yZWQ6ICM4OTI3MzQ7XG4kZ29sZC15ZWxsb3c6ICNFOEMyMkM7XG4kZGFyay1ncmV5OiAjMjMyNDFmO1xuJGdyZXk6ICM0ZDRjNGQ7XG4kZ29sZDogI0QzQzE5ODtcbiRnb2xkLTI6ICNGMEVBRTM7XG4iLCIvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIG1haW4gbWl4aW5zXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuQG1peGluIGZvbnQtZmFjZSgkZm9udC1mYW1pbHksICRmaWxlLXBhdGgsICR3ZWlnaHQ6IG5vcm1hbCwgJHN0eWxlOiBub3JtYWwsICRhc3NldC1waXBlbGluZTogZmFsc2UpIHtcblx0QGZvbnQtZmFjZSB7XG5cdFx0Zm9udC1mYW1pbHk6ICRmb250LWZhbWlseTtcblx0XHRmb250LXdlaWdodDogJHdlaWdodDtcblx0XHRmb250LXN0eWxlOiAkc3R5bGU7XG5cblx0XHRAaWYgJGFzc2V0LXBpcGVsaW5lPT10cnVlIHtcblx0XHRcdHNyYzogZm9udC11cmwoJyN7JGZpbGUtcGF0aH0uZW90Jyk7XG5cdFx0XHRzcmM6IGZvbnQtdXJsKCcjeyRmaWxlLXBhdGh9LmVvdD8jaWVmaXgnKSBmb3JtYXQoJ2VtYmVkZGVkLW9wZW50eXBlJyksXG5cdFx0XHRmb250LXVybCgnI3skZmlsZS1wYXRofS53b2ZmJykgZm9ybWF0KCd3b2ZmJyksXG5cdFx0XHRmb250LXVybCgnI3skZmlsZS1wYXRofS50dGYnKSBmb3JtYXQoJ3RydWV0eXBlJyk7XG5cdFx0fVxuXG5cdFx0QGVsc2Uge1xuXHRcdFx0c3JjOiB1cmwoJyN7JGZpbGUtcGF0aH0uZW90Jyk7XG5cdFx0XHRzcmM6IHVybCgnI3skZmlsZS1wYXRofS5lb3Q/I2llZml4JykgZm9ybWF0KCdlbWJlZGRlZC1vcGVudHlwZScpLFxuXHRcdFx0dXJsKCcjeyRmaWxlLXBhdGh9LndvZmYnKSBmb3JtYXQoJ3dvZmYnKSxcblx0XHRcdHVybCgnI3skZmlsZS1wYXRofS50dGYnKSBmb3JtYXQoJ3RydWV0eXBlJyk7XG5cdFx0fVxuXHR9XG59XG5cbkBtaXhpbiBub3RleHQge1xuXHRvdmVyZmxvdzogaGlkZGVuO1xuXHR0ZXh0LWluZGVudDogLTk5OTlweDtcbn1cblxuLmNsZWFyZml4OmFmdGVyIHtcblx0Y29udGVudDogXCJcIjtcblx0ZGlzcGxheTogdGFibGU7XG5cdGNsZWFyOiBib3RoO1xufVxuXG4uY2VudGVyZWQge1xuXHRkaXNwbGF5OiB0YWJsZTtcblx0d2lkdGg6IDEwMCU7XG5cdGhlaWdodDogMTAwJTtcblxuXHQ+KiB7XG5cdFx0ZGlzcGxheTogdGFibGUtY2VsbDtcblx0XHR0ZXh0LWFsaWduOiBjZW50ZXI7XG5cdFx0dmVydGljYWwtYWxpZ246IG1pZGRsZTtcblx0fVxufVxuXG5AbWl4aW4gcGxhY2Vob2xkZXJDb2xvcigkaW5wdXQtdGV4dC1jb2xvcikge1xuXHQmOjotd2Via2l0LWlucHV0LXBsYWNlaG9sZGVyIHtcblx0XHRjb2xvcjogJGlucHV0LXRleHQtY29sb3I7XG5cdH1cblxuXHQmOi1tb3otcGxhY2Vob2xkZXIge1xuXHRcdGNvbG9yOiAkaW5wdXQtdGV4dC1jb2xvcjtcblx0XHRvcGFjaXR5OiAxO1xuXHR9XG5cblx0Jjo6LW1vei1wbGFjZWhvbGRlciB7XG5cdFx0Y29sb3I6ICRpbnB1dC10ZXh0LWNvbG9yO1xuXHRcdG9wYWNpdHk6IDE7XG5cdH1cblxuXHQmOi1tcy1pbnB1dC1wbGFjZWhvbGRlciB7XG5cdFx0Y29sb3I6ICRpbnB1dC10ZXh0LWNvbG9yO1xuXHR9XG5cblx0Jjo6cGxhY2Vob2xkZXIge1xuXHRcdGNvbG9yOiAkaW5wdXQtdGV4dC1jb2xvcjtcblx0XHRvcGFjaXR5OiAxO1xuXHR9XG5cblx0Jjpmb2N1czotbW96LXBsYWNlaG9sZGVyIHtcblx0XHRjb2xvcjogdHJhbnNwYXJlbnQ7XG5cdFx0b3BhY2l0eTogMTtcblx0fVxuXG5cdCY6Zm9jdXM6Oi1tb3otcGxhY2Vob2xkZXIge1xuXHRcdGNvbG9yOiB0cmFuc3BhcmVudDtcblx0XHRvcGFjaXR5OiAxO1xuXHR9XG5cblx0Jjpmb2N1czo6LXdlYmtpdC1pbnB1dC1wbGFjZWhvbGRlciB7XG5cdFx0Y29sb3I6IHRyYW5zcGFyZW50O1xuXHR9XG5cblx0Jjpmb2N1czotbXMtaW5wdXQtcGxhY2Vob2xkZXIge1xuXHRcdGNvbG9yOiB0cmFuc3BhcmVudDtcblx0fVxuXG5cdCY6Zm9jdXM6OnBsYWNlaG9sZGVyIHtcblx0XHRjb2xvcjogdHJhbnNwYXJlbnQ7XG5cdH1cbn1cblxuQG1peGluIGNsZWFyZml4IHtcblx0JjphZnRlciB7XG5cdFx0Y29udGVudDogXCIgXCI7XG5cdFx0ZGlzcGxheTogYmxvY2s7XG5cdFx0Y2xlYXI6IGJvdGg7XG5cdH1cbn1cblxuLy8gY2xlYXIgc2VsZWN0IHdpdGhvdXQgZGVmYXVsdCBidXR0b25cbkBtaXhpbiBjbGVhclNlbGVjdCB7XG5cdC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcblx0LW1vei1hcHBlYXJhbmNlOiBub25lO1xuXHRhcHBlYXJhbmNlOiBub25lO1xuXHQtd2Via2l0LWJvcmRlci1yYWRpdXM6IDA7XG5cdC1tb3otYm9yZGVyLXJhZGl1czogMDtcblx0Ym9yZGVyLXJhZGl1czogMDtcbn1cblxuLy8gZWxlbWVudHMgZ2V0IGFwcGVuZGVkIHdpdGggXCJfX1wiIGFuZCB0aGUgJG5hbWVcbkBtaXhpbiBlKCRuYW1lKSB7XG5cdEBhdC1yb290ICN7Jn1fI3skbmFtZX0ge1xuXHRcdEBjb250ZW50O1xuXHR9XG59XG5cbi8vIG1vZGlmaWVycyBnZXQgYXBwZW5kZWQgd2l0aCBcIi0tXCIgYW5kIHRoZSAkbmFtZVxuQG1peGluIG0oJG5hbWUpIHtcblx0QGF0LXJvb3QgI3smfS0tI3skbmFtZX0ge1xuXHRcdEBjb250ZW50O1xuXHR9XG59XG5cbi8vIGJyZWFrcG9pbnRzXG5AbWl4aW4gYigkcG9pbnQpIHtcblx0QGlmICRwb2ludD09ZGVza3RvcCB7XG5cdFx0QG1lZGlhIChtYXgtd2lkdGg6IDEzNjZweCkgYW5kIChtaW4td2lkdGg6MTAyNHB4KSB7XG5cdFx0XHRAY29udGVudCA7XG5cdFx0fVxuXHR9XG5cblx0QGVsc2UgaWYgJHBvaW50PT10YWJsZXQge1xuXHRcdEBtZWRpYSAobWF4LXdpZHRoOiAxMDAwcHgpIHtcblx0XHRcdEBjb250ZW50IDtcblx0XHR9XG5cdH1cblxuXHRAZWxzZSBpZiAkcG9pbnQ9PW1vYmlsZSB7XG5cdFx0QG1lZGlhIChtYXgtd2lkdGg6IDc2N3B4KSB7XG5cdFx0XHRAY29udGVudCA7XG5cdFx0fVxuXHR9XG5cblx0QGVsc2UgaWYgJHBvaW50PT1tb2JpbGUzeCB7XG5cblx0XHRAbWVkaWEgb25seSBzY3JlZW4gYW5kICgtd2Via2l0LW1pbi1kZXZpY2UtcGl4ZWwtcmF0aW86IDMpLFxuXHRcdG9ubHkgc2NyZWVuIGFuZCAobWluLXJlc29sdXRpb246IDNkcHB4KSxcblx0XHRvbmx5IHNjcmVlbiBhbmQgKG1pbi1yZXNvbHV0aW9uOiAzNTBkcGkpIHtcblx0XHRcdEBjb250ZW50IDtcblx0XHR9XG5cdH1cblxuXHRAZWxzZSB7XG5cdFx0QG1lZGlhIChtYXgtd2lkdGg6ICRwb2ludCArICdweCcpIHtcblx0XHRcdEBjb250ZW50IDtcblx0XHR9XG5cdH1cbn1cblxuLy8gYnJlYWtwb2ludHNcbkBtaXhpbiBiYigkcG9pbnRNYXgsICRwb2ludE1pbikge1xuXHRAbWVkaWEgKG1heC13aWR0aDogJHBvaW50TWF4ICsgJ3B4JykgYW5kIChtaW4td2lkdGg6ICRwb2ludE1pbiArICdweCcpIHtcblx0XHRAY29udGVudCA7XG5cdH1cbn1cblxuQG1peGluIGllKCkge1xuXG5cdEBtZWRpYSBzY3JlZW4gYW5kICgtbXMtaGlnaC1jb250cmFzdDogYWN0aXZlKSxcblx0KC1tcy1oaWdoLWNvbnRyYXN0OiBub25lKSB7XG5cdFx0QGNvbnRlbnQgO1xuXHR9XG59XG5cbkBtaXhpbiBiZWZvcmUtaW1nKCRkaXNwbGF5LCAkd2lkdGgsICRoZWlnaHQsICRwb3NpdGlvbikge1xuXHRAYXQtcm9vdCAjeyZ9OmJlZm9yZSB7XG5cdFx0Y29udGVudDogJyc7XG5cdFx0ZGlzcGxheTogJGRpc3BsYXk7XG5cblx0XHRAaWYgJHBvc2l0aW9uPT1hIHtcblx0XHRcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcblx0XHR9XG5cblx0XHRAaWYgJHBvc2l0aW9uPT1yIHtcblx0XHRcdHBvc2l0aW9uOiByZWxhdGl2ZTtcblx0XHR9XG5cblx0XHR3aWR0aDogJHdpZHRoO1xuXHRcdGhlaWdodDogJGhlaWdodDtcblx0XHRAY29udGVudDtcblx0fVxufVxuXG5AbWl4aW4gYWZ0ZXItaW1nKCRkaXNwbGF5LCAkd2lkdGgsICRoZWlnaHQsICRwb3NpdGlvbikge1xuXHRAYXQtcm9vdCAjeyZ9OmFmdGVyIHtcblx0XHRjb250ZW50OiAnJztcblx0XHRkaXNwbGF5OiAkZGlzcGxheTtcblxuXHRcdEBpZiAkcG9zaXRpb249PWEge1xuXHRcdFx0cG9zaXRpb246IGFic29sdXRlO1xuXHRcdH1cblxuXHRcdEBpZiAkcG9zaXRpb249PXIge1xuXHRcdFx0cG9zaXRpb246IHJlbGF0aXZlO1xuXHRcdH1cblxuXHRcdHdpZHRoOiAkd2lkdGg7XG5cdFx0aGVpZ2h0OiAkaGVpZ2h0O1xuXHRcdEBjb250ZW50O1xuXHR9XG59XG5cbi8qIHJlbSBmb250IHNpemUgd2l0aCBmYWxsYmFjayB8IHVzYWdlOlxuXHRwIHtcblx0XHRAaW5jbHVkZSBmb250LXNpemUoMTRweClcblx0fSovXG5cbkBmdW5jdGlvbiBjYWxjdWxhdGVSZW0oJHNpemUpIHtcblx0JHJlbVNpemU6ICRzaXplIC8gMTZweDtcblx0QHJldHVybiAkcmVtU2l6ZSAqIDFyZW07XG59XG5cbkBtaXhpbiBmb250LXNpemUoJHNpemUpIHtcblx0Zm9udC1zaXplOiAkc2l6ZTtcblx0Zm9udC1zaXplOiBjYWxjdWxhdGVSZW0oJHNpemUpO1xufVxuXG5AbWl4aW4gdGV4dEN1dCgkY29sLCAkaGVpZ2h0KSB7XG5cdGRpc3BsYXk6IC13ZWJraXQtYm94O1xuXHQtd2Via2l0LWxpbmUtY2xhbXA6ICRjb2w7XG5cdC13ZWJraXQtYm94LW9yaWVudDogdmVydGljYWw7XG5cdG92ZXJmbG93OiBoaWRkZW47XG5cdG1heC1oZWlnaHQ6ICRoZWlnaHQ7XG59XG5cbi8vIGJ1dHRvbnNcblxuQG1peGluIGJ0bi1ncmFkaWVudCgkY1RleHQsICRjSG92ZXIsICRkaXJlY3Rpb24sICRjRmlyc3QsICRjU2Vjb25zLCAkY1RoaXJkLCAkaG92ZXIpIHtcblx0Y29sb3I6ICRjVGV4dDtcblx0dHJhbnNpdGlvbjogMC41cztcblx0YmFja2dyb3VuZC1zaXplOiAyMDAlIGF1dG87XG5cdGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgkZGlyZWN0aW9uLCAkY0ZpcnN0IDAlLCAkY1NlY29ucyA1MSUsICRjVGhpcmQgMTAwJSk7XG5cblx0Jjpob3ZlciB7XG5cdFx0dGV4dC1kZWNvcmF0aW9uOiBub25lO1xuXHRcdGJhY2tncm91bmQtcG9zaXRpb246ICRob3Zlcjtcblx0XHRjb2xvcjogJGNIb3Zlcjtcblx0XHRib3gtc2hhZG93OiAwcHggMjBweCAzMHB4IC0xNXB4ICRjVGhpcmQ7XG5cdH1cbn1cblxuQG1peGluIGdyYWRpZW50KCR0b3AsICRib3R0b20pIHtcblx0YmFja2dyb3VuZDogJHRvcDtcblx0YmFja2dyb3VuZDogLW1vei1saW5lYXItZ3JhZGllbnQodG9wLCAkdG9wIDAlLCAkYm90dG9tIDEwMCUpO1xuXHRiYWNrZ3JvdW5kOiAtd2Via2l0LWdyYWRpZW50KGxpbmVhciwgbGVmdCB0b3AsIGxlZnQgYm90dG9tLCBjb2xvci1zdG9wKDAlLCAkdG9wKSwgY29sb3Itc3RvcCgxMDAlLCAkYm90dG9tKSk7XG5cdGJhY2tncm91bmQ6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KHRvcCwgJHRvcCAwJSwgJGJvdHRvbSAxMDAlKTtcblx0YmFja2dyb3VuZDogLW8tbGluZWFyLWdyYWRpZW50KHRvcCwgJHRvcCAwJSwgJGJvdHRvbSAxMDAlKTtcblx0YmFja2dyb3VuZDogLW1zLWxpbmVhci1ncmFkaWVudCh0b3AsICR0b3AgMCUsICRib3R0b20gMTAwJSk7XG5cdGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sICR0b3AgMCUsICRib3R0b20gMTAwJSk7XG5cdGZpbHRlcjogcHJvZ2lkOkRYSW1hZ2VUcmFuc2Zvcm0uTWljcm9zb2Z0LmdyYWRpZW50KHN0YXJ0Q29sb3JzdHI9JyN7JHRvcH0nLCBlbmRDb2xvcnN0cj0nI3skYm90dG9tfSAnLCBHcmFkaWVudFR5cGU9MCk7XG59IiwiQGltcG9ydCB1cmwoXCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9TW9udHNlcnJhdDoxMDAsMTAwaSwyMDAsMjAwaSwzMDAsMzAwaSw0MDAsNDAwaSw1MDAsNTAwaSw2MDAsNjAwaSw3MDAsNzAwaSw4MDAsODAwaSw5MDAsOTAwaSZkaXNwbGF5PXN3YXBcIik7XG4uY2xlYXJmaXg6YWZ0ZXIge1xuICBjb250ZW50OiBcIlwiO1xuICBkaXNwbGF5OiB0YWJsZTtcbiAgY2xlYXI6IGJvdGg7XG59XG5cbi5jZW50ZXJlZCB7XG4gIGRpc3BsYXk6IHRhYmxlO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuLmNlbnRlcmVkID4gKiB7XG4gIGRpc3BsYXk6IHRhYmxlLWNlbGw7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbn1cblxuLyogcmVtIGZvbnQgc2l6ZSB3aXRoIGZhbGxiYWNrIHwgdXNhZ2U6XG5cdHAge1xuXHRcdEBpbmNsdWRlIGZvbnQtc2l6ZSgxNHB4KVxuXHR9Ki9cbi5mb290ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjRGNEY0O1xuICBwYWRkaW5nLXRvcDogMzBweDtcbiAgcGFkZGluZy1ib3R0b206IDMwcHg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5AbWVkaWEgKG1heC13aWR0aDogNzUwcHgpIHtcbiAgLmZvb3RlciAuY29udGFpbmVyIHtcbiAgICBwYWRkaW5nOiAwO1xuICB9XG59XG4uZm9vdGVyIC5zZWN0aW9uLWNvcHlyaWdodCB7XG4gIHBhZGRpbmctbGVmdDogMjBweDtcbn1cbi5mb290ZXIgLnNlY3Rpb24tY29weXJpZ2h0IC5wX19jb3B5cmlnaHRzIHtcbiAgZm9udC1zdHlsZTogMTJweDtcbiAgY29sb3I6ICM3Mzc3Nzg7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG59XG4uZm9vdGVyIC5zZWN0aW9uLWNvcHlyaWdodCAucF9fY29weXJpZ2h0cyBhIHtcbiAgdHJhbnNpdGlvbjogMC40cyBlYXNlO1xuICBjb2xvcjogIzczNzc3ODtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuLmZvb3RlciAuc2VjdGlvbi1jb3B5cmlnaHQgLnBfX2NvcHlyaWdodHMgYTpob3ZlciB7XG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xuICBjb2xvcjogIzg5MjczNDtcbn1cbi5mb290ZXIgLnNlY3Rpb24tZm9vdGVyIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBtaW5tYXgoMTcwcHgsIDMyMHB4KSAxZnI7XG4gIG1hcmdpbi1ib3R0b206IDMwcHg7XG59XG5AbWVkaWEgKG1heC13aWR0aDogODUwcHgpIHtcbiAgLmZvb3RlciAuc2VjdGlvbi1mb290ZXIge1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xuICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XG4gICAgZ3JpZC1nYXA6IDMwcHg7XG4gIH1cbn1cbi5mb290ZXItbGVmdCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG4uZm9vdGVyLWxvZ28ge1xuICBoZWlnaHQ6IDgwcHg7XG4gIG1pbi13aWR0aDogMTMwcHg7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xufVxuLmZvb3Rlci1sb2dvOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uLy4uLy4uL2Fzc2V0cy9pbWcvaWNvbnMvbG9nby1mb290ZXIucG5nXCIpO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcbiAgaGVpZ2h0OiA4MHB4O1xuICB3aWR0aDogMTIwcHg7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXJnaW46IDAgYXV0bztcbn1cbi5mb290ZXItc29jaWFsIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4uZm9vdGVyLXNvY2lhbCAuaWNvbiB7XG4gIHRyYW5zaXRpb246IDAuNHMgZWFzZTtcbiAgd2lkdGg6IDIwcHg7XG4gIGhlaWdodDogMjBweDtcbiAgbWFyZ2luOiA1cHg7XG59XG4uZm9vdGVyLXNvY2lhbCAuaWNvbjpob3ZlciB7XG4gIG9wYWNpdHk6IDAuNDtcbn1cbi5mb290ZXItc29jaWFsIC5pY29uX195b3V0dWJlIHtcbiAgd2lkdGg6IDMwcHg7XG59XG4uZm9vdGVyLXJpZ2h0IHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDc1MHB4KSB7XG4gIC5mb290ZXItcmlnaHQge1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIH1cbn1cbi5mb290ZXItbWVudSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIHBhZGRpbmc6IDBweCAxMHB4O1xuICBtYXgtd2lkdGg6IDI1MHB4O1xuICBtaW4td2lkdGg6IDE3MHB4O1xuICB3aWR0aDogMTAwJTtcbiAgdHJhbnNpdGlvbjogMC40cyBlYXNlO1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDg1MHB4KSB7XG4gIC5mb290ZXItbWVudSB7XG4gICAgbWF4LXdpZHRoOiAyMTBweDtcbiAgICBtaW4td2lkdGg6IDE3MHB4O1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogNzUwcHgpIHtcbiAgLmZvb3Rlci1tZW51IHtcbiAgICBtYXgtd2lkdGg6IDEwMCU7XG4gICAgbWluLXdpZHRoOiAxMDAlO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGJvcmRlci10b3A6IDJweCBzb2xpZCAjRTFFMUUxO1xuICAgIHBhZGRpbmc6IDA7XG4gICAgbWF4LWhlaWdodDogNTBweDtcbiAgICBtaW4taGVpZ2h0OiA1MHB4O1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNlY2VjZWM7XG4gIH1cbn1cbi5mb290ZXItbWVudTpiZWZvcmUge1xuICBjb250ZW50OiBhdHRyKGRhdGEtdGl0bGUpO1xuICBjb2xvcjogIzg5MjczNDtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgbWFyZ2luLWJvdHRvbTogMjVweDtcbiAgd2lkdGg6IDEwMCU7XG4gIHotaW5kZXg6IDk7XG59XG5AbWVkaWEgKG1heC13aWR0aDogNzUwcHgpIHtcbiAgLmZvb3Rlci1tZW51OmJlZm9yZSB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWFyZ2luLWJvdHRvbTogMDtcbiAgICBtYXgtaGVpZ2h0OiA1MHB4O1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgcGFkZGluZy1sZWZ0OiAyMHB4O1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGNvbG9yOiAjNjU2Qzc1O1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNlY2VjZWM7XG4gICAgdG9wOiAwO1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogNzUwcHgpIHtcbiAgLmZvb3Rlci1tZW51LW9wZW4ge1xuICAgIG1heC1oZWlnaHQ6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHBhZGRpbmctdG9wOiA2MHB4O1xuICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xuICB9XG4gIC5mb290ZXItbWVudS1vcGVuOmJlZm9yZSB7XG4gICAgYm94LXNoYWRvdzogMHB4IDNweCA4cHggLTRweCAjMDAwMDAwOTE7XG4gIH1cbn1cbi5mb290ZXItbWVudS1saW5rIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBjb2xvcjogIzczNzc3ODtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgbWFyZ2luOiA2cHggMHB4O1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIHRyYW5zaXRpb246IDAuNHMgZWFzZTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLmZvb3Rlci1tZW51LWxpbmstZGlzYWJsZSB7XG4gIGNvbG9yOiAjNzM3Nzc4O1xuICBjdXJzb3I6IGRlZmF1bHQ7XG59XG5AbWVkaWEgKG1heC13aWR0aDogNzUwcHgpIHtcbiAgLmZvb3Rlci1tZW51LWxpbmstZGlzYWJsZTo6YWZ0ZXIge1xuICAgIGNvbnRlbnQ6IGF0dHIoZGF0YS11bmFjdGl2ZSk7XG4gICAgZGlzcGxheTogaW5saW5lO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB6LWluZGV4OiA4O1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjODkyNzM0O1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIHBhZGRpbmc6IDJweCA4cHg7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIG1hcmdpbi1sZWZ0OiAxNXB4O1xuICB9XG59XG4uZm9vdGVyLW1lbnUtbGluay1kaXNhYmxlOmhvdmVyIHtcbiAgY3Vyc29yOiBkZWZhdWx0O1xuICBjb2xvcjogIzczNzc3OCAhaW1wb3J0YW50O1xufVxuLmZvb3Rlci1tZW51LWxpbmstZGlzYWJsZTpob3ZlcjpiZWZvcmUge1xuICBjb250ZW50OiBhdHRyKGRhdGEtdW5hY3RpdmUpO1xuICBkaXNwbGF5OiBibG9jaztcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB6LWluZGV4OiA5OTk7XG4gIGJvdHRvbTogLTMwcHg7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgbGVmdDogMzBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzg5MjczNDtcbiAgY29sb3I6ICNmZmY7XG4gIHBhZGRpbmc6IDVweCAxMHB4O1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG59XG5AbWVkaWEgKG1heC13aWR0aDogNzUwcHgpIHtcbiAgLmZvb3Rlci1tZW51LWxpbmstZGlzYWJsZTpob3ZlcjpiZWZvcmUge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbn1cbi5mb290ZXItbWVudS1saW5rOmhvdmVyIHtcbiAgY29sb3I6ICM4OTI3MzQ7XG59XG5AbWVkaWEgKG1heC13aWR0aDogNzUwcHgpIHtcbiAgLmZvb3Rlci1tZW51LWxpbmsge1xuICAgIHBhZGRpbmctbGVmdDogMjBweDtcbiAgfVxufVxuLmZvb3Rlci1tZW51LXNhbWUge1xuICBkaXNwbGF5OiBmbGV4O1xuICBtYXgtd2lkdGg6IDUwMHB4O1xuICB3aWR0aDogMTAwJTtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA3NTBweCkge1xuICAuZm9vdGVyLW1lbnUtc2FtZSB7XG4gICAgbWF4LXdpZHRoOiAxMDAlO1xuICAgIG1heC1oZWlnaHQ6IDUwcHg7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWNlY2VjO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA3NTBweCkge1xuICAuZm9vdGVyLW1lbnUtc2FtZS1vcGVuIHtcbiAgICBtYXgtaGVpZ2h0OiAxMDAlO1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgcGFkZGluZy1ib3R0b206IDEwcHg7XG4gIH1cbiAgLmZvb3Rlci1tZW51LXNhbWUtb3BlbiAuZm9vdGVyLW1lbnUge1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBwYWRkaW5nLXRvcDogMHB4O1xuICAgIHBhZGRpbmctYm90dG9tOiAwcHg7XG4gICAgbWF4LWhlaWdodDogMTAwJSAhaW1wb3J0YW50O1xuICB9XG4gIC5mb290ZXItbWVudS1zYW1lLW9wZW4gLmZvb3Rlci1tZW51Om50aC1jaGlsZCgxKSB7XG4gICAgYm9yZGVyLXRvcDogMnB4IHNvbGlkICNFMUUxRTE7XG4gICAgcGFkZGluZy10b3A6IDYwcHg7XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA3NTBweCkgYW5kIChtYXgtd2lkdGg6IDc1MHB4KSB7XG4gIC5mb290ZXItbWVudS1zYW1lLW9wZW4gLmZvb3Rlci1tZW51Om50aC1jaGlsZCgxKTpiZWZvcmUge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYm94LXNoYWRvdzogMHB4IDNweCA4cHggLTRweCAjMDAwMDAwOTE7XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA3NTBweCkgYW5kIChtYXgtd2lkdGg6IDc1MHB4KSB7XG4gIC5mb290ZXItbWVudS1zYW1lLW9wZW4gLmZvb3Rlci1tZW51OmJlZm9yZSB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxufVxuLmZvb3Rlci1tZW51LXNhbWUgLmZvb3Rlci1tZW51IHtcbiAgYm9yZGVyOiBub25lO1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDc1MHB4KSB7XG4gIC5mb290ZXItbWVudS1zYW1lIC5mb290ZXItbWVudTpudGgtY2hpbGQoMSkge1xuICAgIGJvcmRlci10b3A6IDJweCBzb2xpZCAjRTFFMUUxO1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogNzUwcHgpIHtcbiAgLmZvb3Rlci1tZW51LXNhbWUgLmZvb3Rlci1tZW51Om50aC1jaGlsZCgxKTpiZWZvcmUge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA3NTBweCkge1xuICAuZm9vdGVyLW1lbnUtc2FtZSAuZm9vdGVyLW1lbnU6YmVmb3JlIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG59IiwiQGltcG9ydCBcIi4uLy4uLy4uLy4uL3Njc3MvdmFyc1wiO1xuQGltcG9ydCBcIi4uLy4uLy4uLy4uL3Njc3MvbWl4aW5zXCI7XG5cbi5mb290ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNGNEY0RjQ7XG4gICAgcGFkZGluZy10b3A6IDMwcHg7XG4gICAgcGFkZGluZy1ib3R0b206IDMwcHg7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcblxuICAgIC5jb250YWluZXIge1xuICAgICAgICBAaW5jbHVkZSBiKDc1MCkge1xuICAgICAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC5zZWN0aW9uLWNvcHlyaWdodCB7XG4gICAgICAgIHBhZGRpbmctbGVmdDogMjBweDtcblxuICAgICAgICAucF9fY29weXJpZ2h0cyB7XG4gICAgICAgICAgICBmb250LXN0eWxlOiAxMnB4O1xuICAgICAgICAgICAgY29sb3I6ICM3Mzc3Nzg7XG4gICAgICAgICAgICBmb250LXdlaWdodDogbm9ybWFsO1xuXG4gICAgICAgICAgICBhIHtcbiAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiAwLjRzIGVhc2U7XG4gICAgICAgICAgICAgICAgY29sb3I6ICM3Mzc3Nzg7XG4gICAgICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuXG4gICAgICAgICAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xuICAgICAgICAgICAgICAgICAgICBjb2xvcjogJGJyb3duLXJlZDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAuc2VjdGlvbi1mb290ZXIge1xuICAgICAgICBkaXNwbGF5OiBncmlkO1xuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IG1pbm1heCgxNzBweCwgMzIwcHgpIDFmcjtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMzBweDtcblxuICAgICAgICBAaW5jbHVkZSBiKDg1MCkge1xuICAgICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xuICAgICAgICAgICAgZ3JpZC1nYXA6IDMwcHg7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAmLWxlZnQge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIH1cblxuICAgICYtbG9nbyB7XG4gICAgICAgIGhlaWdodDogODBweDtcbiAgICAgICAgbWluLXdpZHRoOiAxMzBweDtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG5cbiAgICAgICAgJjpiZWZvcmUge1xuICAgICAgICAgICAgY29udGVudDogJyc7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uLy4uLy4uLy4uL2Fzc2V0cy9pbWcvaWNvbnMvbG9nby1mb290ZXIucG5nJyk7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgICAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xuICAgICAgICAgICAgaGVpZ2h0OiA4MHB4O1xuICAgICAgICAgICAgd2lkdGg6IDEyMHB4O1xuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICBtYXJnaW46IDAgYXV0bztcbiAgICAgICAgfVxuICAgIH1cblxuICAgICYtc29jaWFsIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cbiAgICAgICAgLmljb24ge1xuICAgICAgICAgICAgdHJhbnNpdGlvbjogMC40cyBlYXNlO1xuICAgICAgICAgICAgd2lkdGg6IDIwcHg7XG4gICAgICAgICAgICBoZWlnaHQ6IDIwcHg7XG4gICAgICAgICAgICBtYXJnaW46IDVweDtcblxuICAgICAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgICAgICAgb3BhY2l0eTogMC40O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAmX195b3V0dWJlIHtcbiAgICAgICAgICAgICAgICB3aWR0aDogMzBweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgICYtcmlnaHQge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG5cbiAgICAgICAgQGluY2x1ZGUgYig3NTApIHtcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAmLW1lbnUge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICBwYWRkaW5nOiAwcHggMTBweDtcbiAgICAgICAgbWF4LXdpZHRoOiAyNTBweDtcbiAgICAgICAgbWluLXdpZHRoOiAxNzBweDtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIHRyYW5zaXRpb246IDAuNHMgZWFzZTtcblxuICAgICAgICBAaW5jbHVkZSBiKDg1MCkge1xuICAgICAgICAgICAgbWF4LXdpZHRoOiAyMTBweDtcbiAgICAgICAgICAgIG1pbi13aWR0aDogMTcwcHg7XG4gICAgICAgIH1cblxuICAgICAgICBAaW5jbHVkZSBiKDc1MCkge1xuICAgICAgICAgICAgbWF4LXdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgbWluLXdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICBib3JkZXItdG9wOiAycHggc29saWQgI0UxRTFFMTtcbiAgICAgICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgICAgICBtYXgtaGVpZ2h0OiA1MHB4O1xuICAgICAgICAgICAgbWluLWhlaWdodDogNTBweDtcbiAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWNlY2VjO1xuICAgICAgICB9XG5cbiAgICAgICAgJjpiZWZvcmUge1xuICAgICAgICAgICAgY29udGVudDogYXR0cihkYXRhLXRpdGxlKTtcbiAgICAgICAgICAgIGNvbG9yOiAkYnJvd24tcmVkO1xuICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAyNXB4O1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICB6LWluZGV4OiA5O1xuXG4gICAgICAgICAgICBAaW5jbHVkZSBiKDc1MCkge1xuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDA7XG4gICAgICAgICAgICAgICAgbWF4LWhlaWdodDogNTBweDtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMjBweDtcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgICAgICAgICBjb2xvcjogIzY1NkM3NTtcbiAgICAgICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWNlY2VjO1xuICAgICAgICAgICAgICAgIHRvcDogMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgICYtb3BlbiB7XG4gICAgICAgICAgICBAaW5jbHVkZSBiKDc1MCkge1xuICAgICAgICAgICAgICAgIG1heC1oZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgICAgICAgIHBhZGRpbmctdG9wOiA2MHB4O1xuICAgICAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xuXG4gICAgICAgICAgICAgICAgJjpiZWZvcmUge1xuICAgICAgICAgICAgICAgICAgICBib3gtc2hhZG93OiAwcHggM3B4IDhweCAtNHB4ICMwMDAwMDA5MTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAmLWxpbmsge1xuICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICAgICAgY29sb3I6ICM3Mzc3Nzg7XG4gICAgICAgICAgICBmb250LXdlaWdodDogbm9ybWFsO1xuICAgICAgICAgICAgbWFyZ2luOiA2cHggMHB4O1xuICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICAgICAgdHJhbnNpdGlvbjogMC40cyBlYXNlO1xuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuXG4gICAgICAgICAgICAmLWRpc2FibGUge1xuICAgICAgICAgICAgICAgIGNvbG9yOiAjNzM3Nzc4O1xuICAgICAgICAgICAgICAgIGN1cnNvcjogZGVmYXVsdDtcblxuICAgICAgICAgICAgICAgICY6OmFmdGVyIHtcbiAgICAgICAgICAgICAgICAgICAgQGluY2x1ZGUgYig3NTApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6IGF0dHIoZGF0YS11bmFjdGl2ZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmU7XG4gICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICAgICAgICAgICAgICB6LWluZGV4OiA4O1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzg5MjczNDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMnB4IDhweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAxNXB4O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgICAgICAgICAgIGN1cnNvcjogZGVmYXVsdDtcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICM3Mzc3NzggIWltcG9ydGFudDtcblxuICAgICAgICAgICAgICAgICAgICAmOmJlZm9yZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50OiBhdHRyKGRhdGEtdW5hY3RpdmUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgICAgICAgICAgICB6LWluZGV4OiA5OTk7XG4gICAgICAgICAgICAgICAgICAgICAgICBib3R0b206IC0zMHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgbGVmdDogMzBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICM4OTI3MzQ7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDVweCAxMHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBAaW5jbHVkZSBiKDc1MCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICY6aG92ZXIge1xuICAgICAgICAgICAgICAgIGNvbG9yOiAkYnJvd24tcmVkO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBAaW5jbHVkZSBiKDc1MCkge1xuICAgICAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMjBweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgICYtc2FtZSB7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgbWF4LXdpZHRoOiA1MDBweDtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuXG4gICAgICAgICAgICBAaW5jbHVkZSBiKDc1MCkge1xuICAgICAgICAgICAgICAgIG1heC13aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgICBtYXgtaGVpZ2h0OiA1MHB4O1xuICAgICAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2VjZWNlYztcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAmLW9wZW4ge1xuICAgICAgICAgICAgICAgIEBpbmNsdWRlIGIoNzUwKSB7XG4gICAgICAgICAgICAgICAgICAgIG1heC1oZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xuXG4gICAgICAgICAgICAgICAgICAgIC5mb290ZXItbWVudSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXI6IG5vbmU7XG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLXRvcDogMHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1heC1oZWlnaHQ6IDEwMCUgIWltcG9ydGFudDtcblxuICAgICAgICAgICAgICAgICAgICAgICAgJjpudGgtY2hpbGQoMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci10b3A6IDJweCBzb2xpZCAjRTFFMUUxO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmctdG9wOiA2MHB4O1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJjpiZWZvcmUge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBAaW5jbHVkZSBiKDc1MCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJveC1zaGFkb3c6IDBweCAzcHggOHB4IC00cHggIzAwMDAwMDkxO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAmOmJlZm9yZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgQGluY2x1ZGUgYig3NTApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5mb290ZXItbWVudSB7XG4gICAgICAgICAgICAgICAgYm9yZGVyOiBub25lO1xuXG4gICAgICAgICAgICAgICAgJjpudGgtY2hpbGQoMSkge1xuICAgICAgICAgICAgICAgICAgICBAaW5jbHVkZSBiKDc1MCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXRvcDogMnB4IHNvbGlkICNFMUUxRTE7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAmOmJlZm9yZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBAaW5jbHVkZSBiKDc1MCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAmOmJlZm9yZSB7XG4gICAgICAgICAgICAgICAgICAgIEBpbmNsdWRlIGIoNzUwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FooterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-footer',
                templateUrl: './footer.component.html',
                styleUrls: ['./footer.component.scss']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/pages/index/header/header.component.ts":
/*!********************************************************!*\
  !*** ./src/app/pages/index/header/header.component.ts ***!
  \********************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var src_app_params__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/params */ "./src/app/params.ts");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
/* harmony import */ var src_app_service_user_user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/service/user/user.service */ "./src/app/service/user/user.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");









function HeaderComponent_div_1_a_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function HeaderComponent_div_1_a_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "a", 17);
} }
const _c0 = function (a0) { return { "menu-open": a0 }; };
function HeaderComponent_div_1_div_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](6, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](9, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](12, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](15, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](16, _c0, ctx_r3.openMenu === true));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 6, "HEADER.MENU.HOME"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](6, 8, "HEADER.MENU.ABOUT"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](9, 10, "HEADER.MENU.BUY"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](12, 12, "HEADER.MENU.DUCATUSX"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](15, 14, "HEADER.MENU.CONTACT"));
} }
const _c1 = function (a0, a1) { return { "menu-open": a0, "header-menu-block-admin": a1 }; };
function HeaderComponent_div_1_div_12_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Balance");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Convertor");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Voucher");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_div_1_div_12_Template_a_click_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r6.logout(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Logout");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](1, _c1, ctx_r4.openMenu === true, !ctx_r4.adminHeader));
} }
const _c2 = function (a0) { return { active: a0 }; };
function HeaderComponent_div_1_li_15_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_div_1_li_15_Template_li_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10); const lng_r8 = ctx.$implicit; const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r9.setLanguage(lng_r8["lng"]); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const lng_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c2, lng_r8["active"]));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](lng_r8["title"]);
} }
const _c3 = function (a0) { return { "open-menu": a0 }; };
const _c4 = function (a0) { return { "language-select-admin": a0 }; };
const _c5 = function (a0) { return { opened: a0 }; };
function HeaderComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, HeaderComponent_div_1_a_3_Template, 2, 0, "a", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, HeaderComponent_div_1_a_4_Template, 1, 0, "a", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "label", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_div_1_Template_label_click_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r11.openMenu = !ctx_r11.openMenu; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "input", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, HeaderComponent_div_1_div_11_Template, 16, 18, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, HeaderComponent_div_1_div_12_Template, 9, 4, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "ul", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_div_1_Template_ul_click_14_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12); const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r13.toggleLanguage(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, HeaderComponent_div_1_li_15_Template, 3, 4, "li", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.adminHeader);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r0.adminHeader);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](8, _c3, ctx_r0.openMenu));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.adminHeader);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r0.adminHeader);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](10, _c4, !ctx_r0.adminHeader));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](12, _c5, ctx_r0.openedLngList));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.languagesList);
} }
const _c6 = function (a0, a1) { return { "header-hide": a0, "header-admin": a1 }; };
class HeaderComponent {
    constructor(translate, router, userService) {
        this.translate = translate;
        this.router = router;
        this.userService = userService;
        this.openedLngList = false;
        this.openMenu = false;
        this.hideHeader = false;
        this.adminHeader = false;
        this.router.events.subscribe((event) => {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationStart"]) {
                // Show loading indicator
            }
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationEnd"]) {
                this.hideHeader = !src_app_params__WEBPACK_IMPORTED_MODULE_2__["hideHeaderInRoutes"].includes(event.url);
                this.adminHeader = !src_app_params__WEBPACK_IMPORTED_MODULE_2__["adminHeaderInRoutes"].includes(event.url);
            }
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationError"]) {
                // console.warn(event.error);
            }
        });
        this.translator = translate;
        this.languagesList = [
            {
                lng: 'eng',
                title: 'Eng',
                active: true,
            },
            {
                lng: 'ita',
                title: 'Ita',
                active: false,
            },
            {
                lng: 'vie',
                title: 'Vie',
                active: false,
            },
            {
                lng: 'deu',
                title: 'Deu',
                active: false,
            },
        ];
        translate.onLangChange.subscribe((event) => {
            this.setActiveLanguage(event);
        });
        this.setActiveLanguage({
            lang: translate.currentLang,
        });
    }
    onClick($event) {
        if (jquery__WEBPACK_IMPORTED_MODULE_3__($event.target).closest('.header-menu-toggle-block').length === 0) {
            if (jquery__WEBPACK_IMPORTED_MODULE_3__($event.target).closest('.select-coin-list-item').length === 0) {
                this.openMenu = false;
            }
        }
        if (jquery__WEBPACK_IMPORTED_MODULE_3__($event.target).closest('.language-select').length === 0) {
            this.openedLngList = false;
        }
    }
    setActiveLanguage(event) {
        if (this.currLanguage) {
            this.languagesList.map((lang) => {
                if (lang['lng'] === this.currLanguage) {
                    lang['active'] = true;
                }
                else {
                    lang['active'] = false;
                }
            });
        }
        this.currLanguage = event.lang;
        window['jQuery']['cookie']('lng', this.currLanguage);
        this.languagesList.map((lang) => {
            if (lang['lng'] === this.currLanguage) {
                lang['active'] = true;
            }
            else {
                lang['active'] = false;
            }
        });
        this.languagesList.sort((a, b) => {
            return b.active ? 1 : -1;
        });
    }
    toggleLanguage() {
        this.openedLngList = !this.openedLngList;
    }
    setLanguage(lng) {
        this.translator.use(lng);
    }
    ngOnInit() {
        // scroll menu
        const scrollPosY = window.pageYOffset | document.body.scrollTop;
        const navBar = document.getElementsByClassName('header')[0];
        if (navBar) {
            if (scrollPosY > 100) {
                navBar.classList.add('header-scroll');
            }
            else if (scrollPosY <= 100) {
                navBar.classList.remove('header-scroll');
            }
        }
        window.onscroll = function changeNav() {
            let scrollPosY = window.pageYOffset | document.body.scrollTop;
            let navBar = document.getElementsByClassName('header')[0];
            if (navBar) {
                if (scrollPosY > 100) {
                    navBar.classList.add('header-scroll');
                }
                else if (scrollPosY <= 100) {
                    navBar.classList.remove('header-scroll');
                }
            }
        };
    }
    logout() {
        this.userService.logout().then(() => {
            this.router.navigate(['/admin/login']);
        });
    }
}
HeaderComponent.ɵfac = function HeaderComponent_Factory(t) { return new (t || HeaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_service_user_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"])); };
HeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HeaderComponent, selectors: [["app-header"]], hostBindings: function HeaderComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_click_HostBindingHandler($event) { return ctx.onClick($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveDocument"]);
    } }, decls: 2, vars: 5, consts: [[1, "header", 3, "ngClass"], ["class", "container", 4, "ngIf"], [1, "container"], [1, "header-wrap"], [1, "header-logo-block"], ["routerLink", "/", "class", "header-logo", 4, "ngIf"], ["class", "header-logo", 4, "ngIf"], [1, "header-menu-toggle-block"], ["for", "header-menu-toggle", 1, "header-menu-toggle", 3, "ngClass", "click"], [1, "line-toggle"], ["type", "checkbox", "id", "header-menu-toggle", "role", "button", 1, "header-menu-toggle-ch"], ["class", "header-menu-block", 3, "ngClass", 4, "ngIf"], [1, "language-select", 3, "ngClass"], [1, "language-select-list", 3, "ngClass", "click"], [3, "ngClass", "click", 4, "ngFor", "ngForOf"], ["routerLink", "/", 1, "header-logo"], ["src", "/assets/img/ducatus-logo-first.png", "alt", "Ducatus logo"], [1, "header-logo"], [1, "header-menu-block", 3, "ngClass"], ["routerLink", "/", 1, "header-menu-link"], ["routerLink", "/about", 1, "header-menu-link"], ["routerLink", "/buy", 1, "header-menu-link"], ["routerLink", "/ducatusx", 1, "header-menu-link"], ["routerLink", "/contact", 1, "header-menu-link"], [1, "header-menu-link"], ["routerLink", "/admin/voucher", 1, "header-menu-link"], [1, "header-menu-link", 3, "click"], [3, "ngClass", "click"]], template: function HeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, HeaderComponent_div_1_Template, 16, 14, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](2, _c6, !ctx.hideHeader, !ctx.adminHeader));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.hideHeader);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"]], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslatePipe"]], styles: ["@import url(\"https://fonts.googleapis.com/css?family=Montserrat:100,100i,200,200i,300,300i,400,400i,500,500i,600,600i,700,700i,800,800i,900,900i&display=swap\");\n.clearfix[_ngcontent-%COMP%]:after {\n  content: \"\";\n  display: table;\n  clear: both;\n}\n.centered[_ngcontent-%COMP%] {\n  display: table;\n  width: 100%;\n  height: 100%;\n}\n.centered[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\n  display: table-cell;\n  text-align: center;\n  vertical-align: middle;\n}\n\n.header[_ngcontent-%COMP%] {\n  position: fixed;\n  width: 100%;\n  top: 0;\n  left: 0;\n  height: 70px;\n  padding: 5px 70px;\n  margin-top: 40px;\n  z-index: 999;\n  transition: 0.2s ease;\n}\n.header-admin[_ngcontent-%COMP%] {\n  padding: 20px !important;\n}\n@media (max-width: 750px) {\n  .header-admin[_ngcontent-%COMP%] {\n    padding: 10px 20px !important;\n  }\n}\n.header-hide[_ngcontent-%COMP%] {\n  display: none !important;\n}\n@media (max-width: 1366px) {\n  .header[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%] {\n    padding: 0px;\n  }\n}\n.header-scroll[_ngcontent-%COMP%] {\n  background-color: white;\n  margin-top: 0 !important;\n  padding: 0px 20px;\n  height: auto;\n  box-shadow: 0px 2px 8px -3px #00000052;\n}\n.header-scroll[_ngcontent-%COMP%]   .header-menu-link[_ngcontent-%COMP%] {\n  color: #892734;\n}\n@media (max-width: 900px) and (min-width: 750px) {\n  .header-scroll[_ngcontent-%COMP%]   .header-menu-link[_ngcontent-%COMP%] {\n    font-size: 14px;\n  }\n}\n@media (max-width: 900px) {\n  .header[_ngcontent-%COMP%] {\n    padding: 5px 20px;\n    margin-top: 20px;\n  }\n}\n@media (max-width: 750px) {\n  .header[_ngcontent-%COMP%] {\n    background-color: white;\n    margin-top: 0 !important;\n    padding: 5px 10px;\n    height: auto;\n  }\n}\n.header-wrap[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  position: relative;\n}\n@media (max-width: 750px) {\n  .header-wrap[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n}\n.header-logo-block[_ngcontent-%COMP%] {\n  flex-basis: 300px;\n}\n@media (max-width: 900px) {\n  .header-logo-block[_ngcontent-%COMP%] {\n    flex-basis: 200px;\n  }\n}\n@media (max-width: 750px) {\n  .header-logo-block[_ngcontent-%COMP%] {\n    flex-basis: auto;\n    align-items: center;\n    display: flex;\n    justify-content: space-between;\n  }\n}\n.header-logo-block[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 230px;\n}\n@media (max-width: 900px) {\n  .header-logo-block[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 200px;\n  }\n}\n@media (max-width: 370px) {\n  .header-logo-block[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 150px;\n  }\n}\n.header-menu-block[_ngcontent-%COMP%] {\n  flex-basis: 100%;\n  display: flex;\n  align-items: center;\n  text-align: center;\n  transition: 0.4s ease;\n  justify-content: flex-end;\n  padding-right: 80px;\n}\n@media (max-width: 750px) {\n  .header-menu-block[_ngcontent-%COMP%] {\n    align-items: flex-end;\n    flex-direction: column;\n    max-height: 0px;\n    overflow: hidden;\n    padding-right: 0px;\n  }\n}\n.header-menu-block-admin[_ngcontent-%COMP%] {\n  flex-basis: auto;\n  margin-right: 100px;\n}\n@media (max-width: 750px) {\n  .header-menu-block-admin[_ngcontent-%COMP%] {\n    margin-right: 0;\n  }\n}\n.header-menu-link[_ngcontent-%COMP%] {\n  color: #fff;\n  text-decoration: none;\n  text-transform: uppercase;\n  transition: 0.4s ease;\n  margin: 2px 15px;\n  font-weight: bold;\n  cursor: pointer;\n}\n@media (max-width: 1000px) {\n  .header-menu-link[_ngcontent-%COMP%] {\n    margin: 2px 10px;\n    font-size: 14px;\n  }\n}\n@media (max-width: 750px) {\n  .header-menu-link[_ngcontent-%COMP%] {\n    margin: 7px 10px;\n    color: #000;\n  }\n}\n.header-menu-link[_ngcontent-%COMP%]:hover {\n  color: #D3C198;\n}\n.header-menu-toggle-block[_ngcontent-%COMP%] {\n  display: none;\n}\n.header-menu-toggle-block[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n.header-menu-toggle-block[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]   .line-toggle[_ngcontent-%COMP%] {\n  height: 2px;\n  border-radius: 5px;\n  background-color: #892734;\n  width: 30px;\n  margin-bottom: 5px;\n}\n.header-menu-toggle-block[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  display: none;\n}\n@media (max-width: 750px) {\n  .header-menu-toggle-block[_ngcontent-%COMP%] {\n    display: block;\n    float: right;\n    margin-top: 5px;\n  }\n}\n@media (max-width: 370px) {\n  .header-menu-toggle-block[_ngcontent-%COMP%] {\n    margin-top: 3px;\n  }\n}\n.menu-open[_ngcontent-%COMP%] {\n  max-height: 160px !important;\n}\n.language-select[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 0;\n  top: 18px;\n  z-index: 2;\n}\n@media (max-width: 900px) {\n  .language-select[_ngcontent-%COMP%] {\n    top: 15px;\n  }\n}\n.language-select-admin[_ngcontent-%COMP%] {\n  top: -4px;\n}\n@media (max-width: 750px) {\n  .language-select-admin[_ngcontent-%COMP%] {\n    top: 0;\n  }\n}\n@media (max-width: 900px) {\n  .language-select[_ngcontent-%COMP%] {\n    right: 0px;\n  }\n}\n@media (max-width: 750px) {\n  .language-select[_ngcontent-%COMP%] {\n    right: 50px;\n  }\n}\n@media (max-width: 370px) {\n  .language-select[_ngcontent-%COMP%] {\n    top: 5px;\n    right: 40px;\n  }\n}\n.language-select-list[_ngcontent-%COMP%] {\n  display: block;\n  list-style-type: none;\n  padding: 0;\n  margin: 0;\n  border-radius: 5px;\n  border: 1px solid #ddd;\n  position: relative;\n  background-color: #fff;\n}\n.language-select-list[_ngcontent-%COMP%]:after {\n  content: \"\";\n  display: block;\n  width: 8px;\n  height: 8px;\n  border-width: 2px 2px 0 0;\n  border-style: solid;\n  border-color: #821617;\n  transform: rotate(135deg);\n  position: absolute;\n  top: 9px;\n  right: 11px;\n  transition: 0.2s ease;\n}\n.language-select-list[_ngcontent-%COMP%]:not(.opened):hover {\n  background-color: #f0f0f0;\n}\n.language-select-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  display: none;\n  padding: 5px 10px 5px 10px;\n  margin: 0;\n  text-align: right;\n  line-height: 20px;\n  font-size: 12px;\n  font-weight: bolder;\n  color: #821617;\n}\n.language-select-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n.language-select-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:after {\n  content: \"\";\n  display: block;\n  clear: both;\n}\n.language-select-list[_ngcontent-%COMP%]   li.active[_ngcontent-%COMP%] {\n  padding-right: 30px;\n  display: block;\n}\n.language-select-list.opened[_ngcontent-%COMP%]:after {\n  transform: rotate(-45deg);\n  top: 13px;\n}\n.language-select-list.opened[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  display: block;\n}\n.language-select-list.opened[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]    + li[_ngcontent-%COMP%] {\n  border-top: 1px solid #ddd;\n  text-align: left;\n}\n.language-select-list[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 24px;\n  height: 24px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9nbGViL3Byb2plY3RzL2R1Y2F0dXMtc2l0ZS9zcmMvc2Nzcy9fdmFycy5zY3NzIiwiL1VzZXJzL2dsZWIvcHJvamVjdHMvZHVjYXR1cy1zaXRlL3NyYy9zY3NzL19taXhpbnMuc2NzcyIsInNyYy9hcHAvcGFnZXMvaW5kZXgvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuc2NzcyIsIi9Vc2Vycy9nbGViL3Byb2plY3RzL2R1Y2F0dXMtc2l0ZS9zcmMvYXBwL3BhZ2VzL2luZGV4L2hlYWRlci9oZWFkZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBSVEsK0pBQUE7QUMyQlI7RUFDQyxXQUFBO0VBQ0EsY0FBQTtFQUNBLFdBQUE7QUM3QkQ7QURnQ0E7RUFDQyxjQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUM3QkQ7QUQrQkM7RUFDQyxtQkFBQTtFQUNBLGtCQUFBO0VBQ0Esc0JBQUE7QUM3QkY7QUR5TUE7OztHQUFBO0FFdE5BO0VBQ0ksZUFBQTtFQUNBLFdBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLHFCQUFBO0FEb0JKO0FDbEJJO0VBQ0ksd0JBQUE7QURvQlI7QUQySEU7RUVoSkU7SUFJUSw2QkFBQTtFRHFCVjtBQUNGO0FDbEJJO0VBQ0ksd0JBQUE7QURvQlI7QURtSEU7RUVwSUU7SUFFUSxZQUFBO0VEbUJWO0FBQ0Y7QUNoQkk7RUFDSSx1QkFBQTtFQUNBLHdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0VBQ0Esc0NBQUE7QURrQlI7QUNoQlE7RUFDSSxjSGRBO0FFZ0NaO0FENEdDO0VFL0hPO0lBSVEsZUFBQTtFRG1CZDtBQUNGO0FEK0ZFO0VFM0pGO0lBOENRLGlCQUFBO0lBQ0EsZ0JBQUE7RURrQk47QUFDRjtBRHlGRTtFRTNKRjtJQW1EUSx1QkFBQTtJQUNBLHdCQUFBO0lBQ0EsaUJBQUE7SUFDQSxZQUFBO0VEbUJOO0FBQ0Y7QUNqQkk7RUFDSSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxrQkFBQTtBRG1CUjtBRDRFRTtFRWxHRTtJQU1RLHNCQUFBO0VEb0JWO0FBQ0Y7QUNqQkk7RUFDSSxpQkFBQTtBRG1CUjtBRG9FRTtFRXhGRTtJQUlRLGlCQUFBO0VEb0JWO0FBQ0Y7QUQrREU7RUV4RkU7SUFRUSxnQkFBQTtJQUNBLG1CQUFBO0lBQ0EsYUFBQTtJQUNBLDhCQUFBO0VEcUJWO0FBQ0Y7QUNuQlE7RUFDSSxZQUFBO0FEcUJaO0FEb0RFO0VFMUVNO0lBSVEsWUFBQTtFRHNCZDtBQUNGO0FEK0NFO0VFMUVNO0lBUVEsWUFBQTtFRHVCZDtBQUNGO0FDakJRO0VBQ0ksZ0JBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLHFCQUFBO0VBQ0EseUJBQUE7RUFDQSxtQkFBQTtBRG1CWjtBRGlDRTtFRTNETTtJQVVRLHFCQUFBO0lBQ0Esc0JBQUE7SUFDQSxlQUFBO0lBQ0EsZ0JBQUE7SUFDQSxrQkFBQTtFRG9CZDtBQUNGO0FDbEJZO0VBQ0ksZ0JBQUE7RUFDQSxtQkFBQTtBRG9CaEI7QURvQkU7RUUxQ1U7SUFLUSxlQUFBO0VEcUJsQjtBQUNGO0FDakJRO0VBQ0ksV0g5R0o7RUcrR0kscUJBQUE7RUFDQSx5QkFBQTtFQUNBLHFCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7QURtQlo7QURNRTtFRWhDTTtJQVVZLGdCQUFBO0lBQ0EsZUFBQTtFRG9CbEI7QUFDRjtBREFFO0VFaENNO0lBZVEsZ0JBQUE7SUFDQSxXSC9IUjtFRW9KTjtBQUNGO0FDbkJZO0VBQ0ksY0hwSFQ7QUV5SVA7QUNqQlE7RUFDSSxhQUFBO0FEbUJaO0FDakJZO0VBQ0ksYUFBQTtFQUNBLHNCQUFBO0FEbUJoQjtBQ2pCZ0I7RUFDSSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSx5Qkh0SVI7RUd1SVEsV0FBQTtFQUNBLGtCQUFBO0FEbUJwQjtBQ2ZZO0VBQ0ksYUFBQTtBRGlCaEI7QUQxQkU7RUVSTTtJQXFCUSxjQUFBO0lBQ0EsWUFBQTtJQUNBLGVBQUE7RURpQmQ7QUFDRjtBRGpDRTtFRVJNO0lBMkJRLGVBQUE7RURrQmQ7QUFDRjtBQ1pBO0VBQ0ksNEJBQUE7QURlSjtBQ1pBO0VBQ0ksa0JBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7QURlSjtBRGpERTtFRThCRjtJQU9RLFNBQUE7RURnQk47QUFDRjtBQ2RJO0VBQ0ksU0FBQTtBRGdCUjtBRHpERTtFRXdDRTtJQUlRLE1BQUE7RURpQlY7QUFDRjtBRDlERTtFRThCRjtJQXVCUSxVQUFBO0VEYU47QUFDRjtBRG5FRTtFRThCRjtJQTJCUSxXQUFBO0VEY047QUFDRjtBRHhFRTtFRThCRjtJQStCUSxRQUFBO0lBQ0EsV0FBQTtFRGVOO0FBQ0Y7QUNiSTtFQUNJLGNBQUE7RUFDQSxxQkFBQTtFQUNBLFVBQUE7RUFDQSxTQUFBO0VBQ0Esa0JBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0Esc0JBQUE7QURlUjtBQ2JRO0VBQ0ksV0FBQTtFQUNBLGNBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxxQkFBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0EsV0FBQTtFQUNBLHFCQUFBO0FEZVo7QUNYWTtFQUNJLHlCQUFBO0FEYWhCO0FDVFE7RUFDSSxhQUFBO0VBQ0EsMEJBQUE7RUFDQSxTQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7QURXWjtBQ1RZO0VBQ0ksZUFBQTtBRFdoQjtBQ1JZO0VBQ0ksV0FBQTtFQUNBLGNBQUE7RUFDQSxXQUFBO0FEVWhCO0FDUFk7RUFDSSxtQkFBQTtFQUNBLGNBQUE7QURTaEI7QUNKWTtFQUNJLHlCQUFBO0VBQ0EsU0FBQTtBRE1oQjtBQ0hZO0VBQ0ksY0FBQTtBREtoQjtBQ0hnQjtFQUNJLDBCQUFBO0VBQ0EsZ0JBQUE7QURLcEI7QUNBUTtFQUNJLFdBQUE7RUFDQSxZQUFBO0FERVoiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9pbmRleC9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBtYWluIHZhcmlhYmxlc1xuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9TW9udHNlcnJhdDoxMDAsMTAwaSwyMDAsMjAwaSwzMDAsMzAwaSw0MDAsNDAwaSw1MDAsNTAwaSw2MDAsNjAwaSw3MDAsNzAwaSw4MDAsODAwaSw5MDAsOTAwaSZkaXNwbGF5PXN3YXAnKTtcblxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBhZGRpdGlvbmFsIHZhcmlhYmxlc1xuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cblxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBjb2xvcnNcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG4kYmxhY2s6ICMwMDA7XG4kZ3JheTogIzgwODA4MDtcbiR3aGl0ZTogI2ZmZjtcbiRibHVlOiAjMDBGO1xuJHB1cnBsZTogIzhBNEQ3NjtcbiRwaW5rOiAjRkE3QzkxO1xuJGJyb3duOiAjNzU3NzYzO1xuJGJlaWdlLWxpZ2h0OiAjRDBEMUNEO1xuJGJlaWdlLWxpZ2h0ZXItMTogI0VGRjBFQjtcbiRiZWlnZS1saWdodGVyLTI6ICNGNEY0RjQ7XG5cbiRicm93bi1yZWQ6ICM4OTI3MzQ7XG4kZ29sZC15ZWxsb3c6ICNFOEMyMkM7XG4kZGFyay1ncmV5OiAjMjMyNDFmO1xuJGdyZXk6ICM0ZDRjNGQ7XG4kZ29sZDogI0QzQzE5ODtcbiRnb2xkLTI6ICNGMEVBRTM7XG4iLCIvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIG1haW4gbWl4aW5zXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuQG1peGluIGZvbnQtZmFjZSgkZm9udC1mYW1pbHksICRmaWxlLXBhdGgsICR3ZWlnaHQ6IG5vcm1hbCwgJHN0eWxlOiBub3JtYWwsICRhc3NldC1waXBlbGluZTogZmFsc2UpIHtcblx0QGZvbnQtZmFjZSB7XG5cdFx0Zm9udC1mYW1pbHk6ICRmb250LWZhbWlseTtcblx0XHRmb250LXdlaWdodDogJHdlaWdodDtcblx0XHRmb250LXN0eWxlOiAkc3R5bGU7XG5cblx0XHRAaWYgJGFzc2V0LXBpcGVsaW5lPT10cnVlIHtcblx0XHRcdHNyYzogZm9udC11cmwoJyN7JGZpbGUtcGF0aH0uZW90Jyk7XG5cdFx0XHRzcmM6IGZvbnQtdXJsKCcjeyRmaWxlLXBhdGh9LmVvdD8jaWVmaXgnKSBmb3JtYXQoJ2VtYmVkZGVkLW9wZW50eXBlJyksXG5cdFx0XHRmb250LXVybCgnI3skZmlsZS1wYXRofS53b2ZmJykgZm9ybWF0KCd3b2ZmJyksXG5cdFx0XHRmb250LXVybCgnI3skZmlsZS1wYXRofS50dGYnKSBmb3JtYXQoJ3RydWV0eXBlJyk7XG5cdFx0fVxuXG5cdFx0QGVsc2Uge1xuXHRcdFx0c3JjOiB1cmwoJyN7JGZpbGUtcGF0aH0uZW90Jyk7XG5cdFx0XHRzcmM6IHVybCgnI3skZmlsZS1wYXRofS5lb3Q/I2llZml4JykgZm9ybWF0KCdlbWJlZGRlZC1vcGVudHlwZScpLFxuXHRcdFx0dXJsKCcjeyRmaWxlLXBhdGh9LndvZmYnKSBmb3JtYXQoJ3dvZmYnKSxcblx0XHRcdHVybCgnI3skZmlsZS1wYXRofS50dGYnKSBmb3JtYXQoJ3RydWV0eXBlJyk7XG5cdFx0fVxuXHR9XG59XG5cbkBtaXhpbiBub3RleHQge1xuXHRvdmVyZmxvdzogaGlkZGVuO1xuXHR0ZXh0LWluZGVudDogLTk5OTlweDtcbn1cblxuLmNsZWFyZml4OmFmdGVyIHtcblx0Y29udGVudDogXCJcIjtcblx0ZGlzcGxheTogdGFibGU7XG5cdGNsZWFyOiBib3RoO1xufVxuXG4uY2VudGVyZWQge1xuXHRkaXNwbGF5OiB0YWJsZTtcblx0d2lkdGg6IDEwMCU7XG5cdGhlaWdodDogMTAwJTtcblxuXHQ+KiB7XG5cdFx0ZGlzcGxheTogdGFibGUtY2VsbDtcblx0XHR0ZXh0LWFsaWduOiBjZW50ZXI7XG5cdFx0dmVydGljYWwtYWxpZ246IG1pZGRsZTtcblx0fVxufVxuXG5AbWl4aW4gcGxhY2Vob2xkZXJDb2xvcigkaW5wdXQtdGV4dC1jb2xvcikge1xuXHQmOjotd2Via2l0LWlucHV0LXBsYWNlaG9sZGVyIHtcblx0XHRjb2xvcjogJGlucHV0LXRleHQtY29sb3I7XG5cdH1cblxuXHQmOi1tb3otcGxhY2Vob2xkZXIge1xuXHRcdGNvbG9yOiAkaW5wdXQtdGV4dC1jb2xvcjtcblx0XHRvcGFjaXR5OiAxO1xuXHR9XG5cblx0Jjo6LW1vei1wbGFjZWhvbGRlciB7XG5cdFx0Y29sb3I6ICRpbnB1dC10ZXh0LWNvbG9yO1xuXHRcdG9wYWNpdHk6IDE7XG5cdH1cblxuXHQmOi1tcy1pbnB1dC1wbGFjZWhvbGRlciB7XG5cdFx0Y29sb3I6ICRpbnB1dC10ZXh0LWNvbG9yO1xuXHR9XG5cblx0Jjo6cGxhY2Vob2xkZXIge1xuXHRcdGNvbG9yOiAkaW5wdXQtdGV4dC1jb2xvcjtcblx0XHRvcGFjaXR5OiAxO1xuXHR9XG5cblx0Jjpmb2N1czotbW96LXBsYWNlaG9sZGVyIHtcblx0XHRjb2xvcjogdHJhbnNwYXJlbnQ7XG5cdFx0b3BhY2l0eTogMTtcblx0fVxuXG5cdCY6Zm9jdXM6Oi1tb3otcGxhY2Vob2xkZXIge1xuXHRcdGNvbG9yOiB0cmFuc3BhcmVudDtcblx0XHRvcGFjaXR5OiAxO1xuXHR9XG5cblx0Jjpmb2N1czo6LXdlYmtpdC1pbnB1dC1wbGFjZWhvbGRlciB7XG5cdFx0Y29sb3I6IHRyYW5zcGFyZW50O1xuXHR9XG5cblx0Jjpmb2N1czotbXMtaW5wdXQtcGxhY2Vob2xkZXIge1xuXHRcdGNvbG9yOiB0cmFuc3BhcmVudDtcblx0fVxuXG5cdCY6Zm9jdXM6OnBsYWNlaG9sZGVyIHtcblx0XHRjb2xvcjogdHJhbnNwYXJlbnQ7XG5cdH1cbn1cblxuQG1peGluIGNsZWFyZml4IHtcblx0JjphZnRlciB7XG5cdFx0Y29udGVudDogXCIgXCI7XG5cdFx0ZGlzcGxheTogYmxvY2s7XG5cdFx0Y2xlYXI6IGJvdGg7XG5cdH1cbn1cblxuLy8gY2xlYXIgc2VsZWN0IHdpdGhvdXQgZGVmYXVsdCBidXR0b25cbkBtaXhpbiBjbGVhclNlbGVjdCB7XG5cdC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcblx0LW1vei1hcHBlYXJhbmNlOiBub25lO1xuXHRhcHBlYXJhbmNlOiBub25lO1xuXHQtd2Via2l0LWJvcmRlci1yYWRpdXM6IDA7XG5cdC1tb3otYm9yZGVyLXJhZGl1czogMDtcblx0Ym9yZGVyLXJhZGl1czogMDtcbn1cblxuLy8gZWxlbWVudHMgZ2V0IGFwcGVuZGVkIHdpdGggXCJfX1wiIGFuZCB0aGUgJG5hbWVcbkBtaXhpbiBlKCRuYW1lKSB7XG5cdEBhdC1yb290ICN7Jn1fI3skbmFtZX0ge1xuXHRcdEBjb250ZW50O1xuXHR9XG59XG5cbi8vIG1vZGlmaWVycyBnZXQgYXBwZW5kZWQgd2l0aCBcIi0tXCIgYW5kIHRoZSAkbmFtZVxuQG1peGluIG0oJG5hbWUpIHtcblx0QGF0LXJvb3QgI3smfS0tI3skbmFtZX0ge1xuXHRcdEBjb250ZW50O1xuXHR9XG59XG5cbi8vIGJyZWFrcG9pbnRzXG5AbWl4aW4gYigkcG9pbnQpIHtcblx0QGlmICRwb2ludD09ZGVza3RvcCB7XG5cdFx0QG1lZGlhIChtYXgtd2lkdGg6IDEzNjZweCkgYW5kIChtaW4td2lkdGg6MTAyNHB4KSB7XG5cdFx0XHRAY29udGVudCA7XG5cdFx0fVxuXHR9XG5cblx0QGVsc2UgaWYgJHBvaW50PT10YWJsZXQge1xuXHRcdEBtZWRpYSAobWF4LXdpZHRoOiAxMDAwcHgpIHtcblx0XHRcdEBjb250ZW50IDtcblx0XHR9XG5cdH1cblxuXHRAZWxzZSBpZiAkcG9pbnQ9PW1vYmlsZSB7XG5cdFx0QG1lZGlhIChtYXgtd2lkdGg6IDc2N3B4KSB7XG5cdFx0XHRAY29udGVudCA7XG5cdFx0fVxuXHR9XG5cblx0QGVsc2UgaWYgJHBvaW50PT1tb2JpbGUzeCB7XG5cblx0XHRAbWVkaWEgb25seSBzY3JlZW4gYW5kICgtd2Via2l0LW1pbi1kZXZpY2UtcGl4ZWwtcmF0aW86IDMpLFxuXHRcdG9ubHkgc2NyZWVuIGFuZCAobWluLXJlc29sdXRpb246IDNkcHB4KSxcblx0XHRvbmx5IHNjcmVlbiBhbmQgKG1pbi1yZXNvbHV0aW9uOiAzNTBkcGkpIHtcblx0XHRcdEBjb250ZW50IDtcblx0XHR9XG5cdH1cblxuXHRAZWxzZSB7XG5cdFx0QG1lZGlhIChtYXgtd2lkdGg6ICRwb2ludCArICdweCcpIHtcblx0XHRcdEBjb250ZW50IDtcblx0XHR9XG5cdH1cbn1cblxuLy8gYnJlYWtwb2ludHNcbkBtaXhpbiBiYigkcG9pbnRNYXgsICRwb2ludE1pbikge1xuXHRAbWVkaWEgKG1heC13aWR0aDogJHBvaW50TWF4ICsgJ3B4JykgYW5kIChtaW4td2lkdGg6ICRwb2ludE1pbiArICdweCcpIHtcblx0XHRAY29udGVudCA7XG5cdH1cbn1cblxuQG1peGluIGllKCkge1xuXG5cdEBtZWRpYSBzY3JlZW4gYW5kICgtbXMtaGlnaC1jb250cmFzdDogYWN0aXZlKSxcblx0KC1tcy1oaWdoLWNvbnRyYXN0OiBub25lKSB7XG5cdFx0QGNvbnRlbnQgO1xuXHR9XG59XG5cbkBtaXhpbiBiZWZvcmUtaW1nKCRkaXNwbGF5LCAkd2lkdGgsICRoZWlnaHQsICRwb3NpdGlvbikge1xuXHRAYXQtcm9vdCAjeyZ9OmJlZm9yZSB7XG5cdFx0Y29udGVudDogJyc7XG5cdFx0ZGlzcGxheTogJGRpc3BsYXk7XG5cblx0XHRAaWYgJHBvc2l0aW9uPT1hIHtcblx0XHRcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcblx0XHR9XG5cblx0XHRAaWYgJHBvc2l0aW9uPT1yIHtcblx0XHRcdHBvc2l0aW9uOiByZWxhdGl2ZTtcblx0XHR9XG5cblx0XHR3aWR0aDogJHdpZHRoO1xuXHRcdGhlaWdodDogJGhlaWdodDtcblx0XHRAY29udGVudDtcblx0fVxufVxuXG5AbWl4aW4gYWZ0ZXItaW1nKCRkaXNwbGF5LCAkd2lkdGgsICRoZWlnaHQsICRwb3NpdGlvbikge1xuXHRAYXQtcm9vdCAjeyZ9OmFmdGVyIHtcblx0XHRjb250ZW50OiAnJztcblx0XHRkaXNwbGF5OiAkZGlzcGxheTtcblxuXHRcdEBpZiAkcG9zaXRpb249PWEge1xuXHRcdFx0cG9zaXRpb246IGFic29sdXRlO1xuXHRcdH1cblxuXHRcdEBpZiAkcG9zaXRpb249PXIge1xuXHRcdFx0cG9zaXRpb246IHJlbGF0aXZlO1xuXHRcdH1cblxuXHRcdHdpZHRoOiAkd2lkdGg7XG5cdFx0aGVpZ2h0OiAkaGVpZ2h0O1xuXHRcdEBjb250ZW50O1xuXHR9XG59XG5cbi8qIHJlbSBmb250IHNpemUgd2l0aCBmYWxsYmFjayB8IHVzYWdlOlxuXHRwIHtcblx0XHRAaW5jbHVkZSBmb250LXNpemUoMTRweClcblx0fSovXG5cbkBmdW5jdGlvbiBjYWxjdWxhdGVSZW0oJHNpemUpIHtcblx0JHJlbVNpemU6ICRzaXplIC8gMTZweDtcblx0QHJldHVybiAkcmVtU2l6ZSAqIDFyZW07XG59XG5cbkBtaXhpbiBmb250LXNpemUoJHNpemUpIHtcblx0Zm9udC1zaXplOiAkc2l6ZTtcblx0Zm9udC1zaXplOiBjYWxjdWxhdGVSZW0oJHNpemUpO1xufVxuXG5AbWl4aW4gdGV4dEN1dCgkY29sLCAkaGVpZ2h0KSB7XG5cdGRpc3BsYXk6IC13ZWJraXQtYm94O1xuXHQtd2Via2l0LWxpbmUtY2xhbXA6ICRjb2w7XG5cdC13ZWJraXQtYm94LW9yaWVudDogdmVydGljYWw7XG5cdG92ZXJmbG93OiBoaWRkZW47XG5cdG1heC1oZWlnaHQ6ICRoZWlnaHQ7XG59XG5cbi8vIGJ1dHRvbnNcblxuQG1peGluIGJ0bi1ncmFkaWVudCgkY1RleHQsICRjSG92ZXIsICRkaXJlY3Rpb24sICRjRmlyc3QsICRjU2Vjb25zLCAkY1RoaXJkLCAkaG92ZXIpIHtcblx0Y29sb3I6ICRjVGV4dDtcblx0dHJhbnNpdGlvbjogMC41cztcblx0YmFja2dyb3VuZC1zaXplOiAyMDAlIGF1dG87XG5cdGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgkZGlyZWN0aW9uLCAkY0ZpcnN0IDAlLCAkY1NlY29ucyA1MSUsICRjVGhpcmQgMTAwJSk7XG5cblx0Jjpob3ZlciB7XG5cdFx0dGV4dC1kZWNvcmF0aW9uOiBub25lO1xuXHRcdGJhY2tncm91bmQtcG9zaXRpb246ICRob3Zlcjtcblx0XHRjb2xvcjogJGNIb3Zlcjtcblx0XHRib3gtc2hhZG93OiAwcHggMjBweCAzMHB4IC0xNXB4ICRjVGhpcmQ7XG5cdH1cbn1cblxuQG1peGluIGdyYWRpZW50KCR0b3AsICRib3R0b20pIHtcblx0YmFja2dyb3VuZDogJHRvcDtcblx0YmFja2dyb3VuZDogLW1vei1saW5lYXItZ3JhZGllbnQodG9wLCAkdG9wIDAlLCAkYm90dG9tIDEwMCUpO1xuXHRiYWNrZ3JvdW5kOiAtd2Via2l0LWdyYWRpZW50KGxpbmVhciwgbGVmdCB0b3AsIGxlZnQgYm90dG9tLCBjb2xvci1zdG9wKDAlLCAkdG9wKSwgY29sb3Itc3RvcCgxMDAlLCAkYm90dG9tKSk7XG5cdGJhY2tncm91bmQ6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KHRvcCwgJHRvcCAwJSwgJGJvdHRvbSAxMDAlKTtcblx0YmFja2dyb3VuZDogLW8tbGluZWFyLWdyYWRpZW50KHRvcCwgJHRvcCAwJSwgJGJvdHRvbSAxMDAlKTtcblx0YmFja2dyb3VuZDogLW1zLWxpbmVhci1ncmFkaWVudCh0b3AsICR0b3AgMCUsICRib3R0b20gMTAwJSk7XG5cdGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sICR0b3AgMCUsICRib3R0b20gMTAwJSk7XG5cdGZpbHRlcjogcHJvZ2lkOkRYSW1hZ2VUcmFuc2Zvcm0uTWljcm9zb2Z0LmdyYWRpZW50KHN0YXJ0Q29sb3JzdHI9JyN7JHRvcH0nLCBlbmRDb2xvcnN0cj0nI3skYm90dG9tfSAnLCBHcmFkaWVudFR5cGU9MCk7XG59IiwiQGltcG9ydCB1cmwoXCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9TW9udHNlcnJhdDoxMDAsMTAwaSwyMDAsMjAwaSwzMDAsMzAwaSw0MDAsNDAwaSw1MDAsNTAwaSw2MDAsNjAwaSw3MDAsNzAwaSw4MDAsODAwaSw5MDAsOTAwaSZkaXNwbGF5PXN3YXBcIik7XG4uY2xlYXJmaXg6YWZ0ZXIge1xuICBjb250ZW50OiBcIlwiO1xuICBkaXNwbGF5OiB0YWJsZTtcbiAgY2xlYXI6IGJvdGg7XG59XG5cbi5jZW50ZXJlZCB7XG4gIGRpc3BsYXk6IHRhYmxlO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuLmNlbnRlcmVkID4gKiB7XG4gIGRpc3BsYXk6IHRhYmxlLWNlbGw7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbn1cblxuLyogcmVtIGZvbnQgc2l6ZSB3aXRoIGZhbGxiYWNrIHwgdXNhZ2U6XG5cdHAge1xuXHRcdEBpbmNsdWRlIGZvbnQtc2l6ZSgxNHB4KVxuXHR9Ki9cbi5oZWFkZXIge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHdpZHRoOiAxMDAlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIGhlaWdodDogNzBweDtcbiAgcGFkZGluZzogNXB4IDcwcHg7XG4gIG1hcmdpbi10b3A6IDQwcHg7XG4gIHotaW5kZXg6IDk5OTtcbiAgdHJhbnNpdGlvbjogMC4ycyBlYXNlO1xufVxuLmhlYWRlci1hZG1pbiB7XG4gIHBhZGRpbmc6IDIwcHggIWltcG9ydGFudDtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA3NTBweCkge1xuICAuaGVhZGVyLWFkbWluIHtcbiAgICBwYWRkaW5nOiAxMHB4IDIwcHggIWltcG9ydGFudDtcbiAgfVxufVxuLmhlYWRlci1oaWRlIHtcbiAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDEzNjZweCkge1xuICAuaGVhZGVyIC5jb250YWluZXIge1xuICAgIHBhZGRpbmc6IDBweDtcbiAgfVxufVxuLmhlYWRlci1zY3JvbGwge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgbWFyZ2luLXRvcDogMCAhaW1wb3J0YW50O1xuICBwYWRkaW5nOiAwcHggMjBweDtcbiAgaGVpZ2h0OiBhdXRvO1xuICBib3gtc2hhZG93OiAwcHggMnB4IDhweCAtM3B4ICMwMDAwMDA1Mjtcbn1cbi5oZWFkZXItc2Nyb2xsIC5oZWFkZXItbWVudS1saW5rIHtcbiAgY29sb3I6ICM4OTI3MzQ7XG59XG5AbWVkaWEgKG1heC13aWR0aDogOTAwcHgpIGFuZCAobWluLXdpZHRoOiA3NTBweCkge1xuICAuaGVhZGVyLXNjcm9sbCAuaGVhZGVyLW1lbnUtbGluayB7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogOTAwcHgpIHtcbiAgLmhlYWRlciB7XG4gICAgcGFkZGluZzogNXB4IDIwcHg7XG4gICAgbWFyZ2luLXRvcDogMjBweDtcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDc1MHB4KSB7XG4gIC5oZWFkZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgIG1hcmdpbi10b3A6IDAgIWltcG9ydGFudDtcbiAgICBwYWRkaW5nOiA1cHggMTBweDtcbiAgICBoZWlnaHQ6IGF1dG87XG4gIH1cbn1cbi5oZWFkZXItd3JhcCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDc1MHB4KSB7XG4gIC5oZWFkZXItd3JhcCB7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgfVxufVxuLmhlYWRlci1sb2dvLWJsb2NrIHtcbiAgZmxleC1iYXNpczogMzAwcHg7XG59XG5AbWVkaWEgKG1heC13aWR0aDogOTAwcHgpIHtcbiAgLmhlYWRlci1sb2dvLWJsb2NrIHtcbiAgICBmbGV4LWJhc2lzOiAyMDBweDtcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDc1MHB4KSB7XG4gIC5oZWFkZXItbG9nby1ibG9jayB7XG4gICAgZmxleC1iYXNpczogYXV0bztcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICB9XG59XG4uaGVhZGVyLWxvZ28tYmxvY2sgaW1nIHtcbiAgd2lkdGg6IDIzMHB4O1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDkwMHB4KSB7XG4gIC5oZWFkZXItbG9nby1ibG9jayBpbWcge1xuICAgIHdpZHRoOiAyMDBweDtcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDM3MHB4KSB7XG4gIC5oZWFkZXItbG9nby1ibG9jayBpbWcge1xuICAgIHdpZHRoOiAxNTBweDtcbiAgfVxufVxuLmhlYWRlci1tZW51LWJsb2NrIHtcbiAgZmxleC1iYXNpczogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB0cmFuc2l0aW9uOiAwLjRzIGVhc2U7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gIHBhZGRpbmctcmlnaHQ6IDgwcHg7XG59XG5AbWVkaWEgKG1heC13aWR0aDogNzUwcHgpIHtcbiAgLmhlYWRlci1tZW51LWJsb2NrIHtcbiAgICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBtYXgtaGVpZ2h0OiAwcHg7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICBwYWRkaW5nLXJpZ2h0OiAwcHg7XG4gIH1cbn1cbi5oZWFkZXItbWVudS1ibG9jay1hZG1pbiB7XG4gIGZsZXgtYmFzaXM6IGF1dG87XG4gIG1hcmdpbi1yaWdodDogMTAwcHg7XG59XG5AbWVkaWEgKG1heC13aWR0aDogNzUwcHgpIHtcbiAgLmhlYWRlci1tZW51LWJsb2NrLWFkbWluIHtcbiAgICBtYXJnaW4tcmlnaHQ6IDA7XG4gIH1cbn1cbi5oZWFkZXItbWVudS1saW5rIHtcbiAgY29sb3I6ICNmZmY7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgdHJhbnNpdGlvbjogMC40cyBlYXNlO1xuICBtYXJnaW46IDJweCAxNXB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDEwMDBweCkge1xuICAuaGVhZGVyLW1lbnUtbGluayB7XG4gICAgbWFyZ2luOiAycHggMTBweDtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA3NTBweCkge1xuICAuaGVhZGVyLW1lbnUtbGluayB7XG4gICAgbWFyZ2luOiA3cHggMTBweDtcbiAgICBjb2xvcjogIzAwMDtcbiAgfVxufVxuLmhlYWRlci1tZW51LWxpbms6aG92ZXIge1xuICBjb2xvcjogI0QzQzE5ODtcbn1cbi5oZWFkZXItbWVudS10b2dnbGUtYmxvY2sge1xuICBkaXNwbGF5OiBub25lO1xufVxuLmhlYWRlci1tZW51LXRvZ2dsZS1ibG9jayBsYWJlbCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG4uaGVhZGVyLW1lbnUtdG9nZ2xlLWJsb2NrIGxhYmVsIC5saW5lLXRvZ2dsZSB7XG4gIGhlaWdodDogMnB4O1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICM4OTI3MzQ7XG4gIHdpZHRoOiAzMHB4O1xuICBtYXJnaW4tYm90dG9tOiA1cHg7XG59XG4uaGVhZGVyLW1lbnUtdG9nZ2xlLWJsb2NrIGlucHV0IHtcbiAgZGlzcGxheTogbm9uZTtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA3NTBweCkge1xuICAuaGVhZGVyLW1lbnUtdG9nZ2xlLWJsb2NrIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBmbG9hdDogcmlnaHQ7XG4gICAgbWFyZ2luLXRvcDogNXB4O1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogMzcwcHgpIHtcbiAgLmhlYWRlci1tZW51LXRvZ2dsZS1ibG9jayB7XG4gICAgbWFyZ2luLXRvcDogM3B4O1xuICB9XG59XG5cbi5tZW51LW9wZW4ge1xuICBtYXgtaGVpZ2h0OiAxNjBweCAhaW1wb3J0YW50O1xufVxuXG4ubGFuZ3VhZ2Utc2VsZWN0IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMDtcbiAgdG9wOiAxOHB4O1xuICB6LWluZGV4OiAyO1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDkwMHB4KSB7XG4gIC5sYW5ndWFnZS1zZWxlY3Qge1xuICAgIHRvcDogMTVweDtcbiAgfVxufVxuLmxhbmd1YWdlLXNlbGVjdC1hZG1pbiB7XG4gIHRvcDogLTRweDtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA3NTBweCkge1xuICAubGFuZ3VhZ2Utc2VsZWN0LWFkbWluIHtcbiAgICB0b3A6IDA7XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA5MDBweCkge1xuICAubGFuZ3VhZ2Utc2VsZWN0IHtcbiAgICByaWdodDogMHB4O1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogNzUwcHgpIHtcbiAgLmxhbmd1YWdlLXNlbGVjdCB7XG4gICAgcmlnaHQ6IDUwcHg7XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiAzNzBweCkge1xuICAubGFuZ3VhZ2Utc2VsZWN0IHtcbiAgICB0b3A6IDVweDtcbiAgICByaWdodDogNDBweDtcbiAgfVxufVxuLmxhbmd1YWdlLXNlbGVjdC1saXN0IHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcbiAgcGFkZGluZzogMDtcbiAgbWFyZ2luOiAwO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNkZGQ7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbn1cbi5sYW5ndWFnZS1zZWxlY3QtbGlzdDphZnRlciB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB3aWR0aDogOHB4O1xuICBoZWlnaHQ6IDhweDtcbiAgYm9yZGVyLXdpZHRoOiAycHggMnB4IDAgMDtcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcbiAgYm9yZGVyLWNvbG9yOiAjODIxNjE3O1xuICB0cmFuc2Zvcm06IHJvdGF0ZSgxMzVkZWcpO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogOXB4O1xuICByaWdodDogMTFweDtcbiAgdHJhbnNpdGlvbjogMC4ycyBlYXNlO1xufVxuLmxhbmd1YWdlLXNlbGVjdC1saXN0Om5vdCgub3BlbmVkKTpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmMGYwZjA7XG59XG4ubGFuZ3VhZ2Utc2VsZWN0LWxpc3QgbGkge1xuICBkaXNwbGF5OiBub25lO1xuICBwYWRkaW5nOiA1cHggMTBweCA1cHggMTBweDtcbiAgbWFyZ2luOiAwO1xuICB0ZXh0LWFsaWduOiByaWdodDtcbiAgbGluZS1oZWlnaHQ6IDIwcHg7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcbiAgY29sb3I6ICM4MjE2MTc7XG59XG4ubGFuZ3VhZ2Utc2VsZWN0LWxpc3QgbGkgc3BhbiB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5sYW5ndWFnZS1zZWxlY3QtbGlzdCBsaTphZnRlciB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBjbGVhcjogYm90aDtcbn1cbi5sYW5ndWFnZS1zZWxlY3QtbGlzdCBsaS5hY3RpdmUge1xuICBwYWRkaW5nLXJpZ2h0OiAzMHB4O1xuICBkaXNwbGF5OiBibG9jaztcbn1cbi5sYW5ndWFnZS1zZWxlY3QtbGlzdC5vcGVuZWQ6YWZ0ZXIge1xuICB0cmFuc2Zvcm06IHJvdGF0ZSgtNDVkZWcpO1xuICB0b3A6IDEzcHg7XG59XG4ubGFuZ3VhZ2Utc2VsZWN0LWxpc3Qub3BlbmVkIGxpIHtcbiAgZGlzcGxheTogYmxvY2s7XG59XG4ubGFuZ3VhZ2Utc2VsZWN0LWxpc3Qub3BlbmVkIGxpICsgbGkge1xuICBib3JkZXItdG9wOiAxcHggc29saWQgI2RkZDtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbn1cbi5sYW5ndWFnZS1zZWxlY3QtbGlzdCBpbWcge1xuICB3aWR0aDogMjRweDtcbiAgaGVpZ2h0OiAyNHB4O1xufSIsIkBpbXBvcnQgXCIuLi8uLi8uLi8uLi9zY3NzL3ZhcnNcIjtcbkBpbXBvcnQgXCIuLi8uLi8uLi8uLi9zY3NzL21peGluc1wiO1xuXG4uaGVhZGVyIHtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgdG9wOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgaGVpZ2h0OiA3MHB4O1xuICAgIHBhZGRpbmc6IDVweCA3MHB4O1xuICAgIG1hcmdpbi10b3A6IDQwcHg7XG4gICAgei1pbmRleDogOTk5O1xuICAgIHRyYW5zaXRpb246IDAuMnMgZWFzZTtcblxuICAgICYtYWRtaW4ge1xuICAgICAgICBwYWRkaW5nOiAyMHB4ICFpbXBvcnRhbnQ7XG5cbiAgICAgICAgQGluY2x1ZGUgYig3NTApIHtcbiAgICAgICAgICAgIHBhZGRpbmc6IDEwcHggMjBweCAhaW1wb3J0YW50O1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgJi1oaWRlIHtcbiAgICAgICAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xuICAgIH1cblxuICAgIC5jb250YWluZXIge1xuICAgICAgICBAaW5jbHVkZSBiKDEzNjYpIHtcbiAgICAgICAgICAgIHBhZGRpbmc6IDBweDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgICYtc2Nyb2xsIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgICAgIG1hcmdpbi10b3A6IDAgIWltcG9ydGFudDtcbiAgICAgICAgcGFkZGluZzogMHB4IDIwcHg7XG4gICAgICAgIGhlaWdodDogYXV0bztcbiAgICAgICAgYm94LXNoYWRvdzogMHB4IDJweCA4cHggLTNweCAjMDAwMDAwNTI7XG5cbiAgICAgICAgLmhlYWRlci1tZW51LWxpbmsge1xuICAgICAgICAgICAgY29sb3I6ICRicm93bi1yZWQ7XG5cbiAgICAgICAgICAgIEBpbmNsdWRlIGJiKDkwMCwgNzUwKSB7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgQGluY2x1ZGUgYig5MDApIHtcbiAgICAgICAgcGFkZGluZzogNXB4IDIwcHg7XG4gICAgICAgIG1hcmdpbi10b3A6IDIwcHg7XG4gICAgfVxuXG4gICAgQGluY2x1ZGUgYig3NTApIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgICAgIG1hcmdpbi10b3A6IDAgIWltcG9ydGFudDtcbiAgICAgICAgcGFkZGluZzogNXB4IDEwcHg7XG4gICAgICAgIGhlaWdodDogYXV0bztcbiAgICB9XG5cbiAgICAmLXdyYXAge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcblxuICAgICAgICBAaW5jbHVkZSBiKDc1MCkge1xuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgfVxuICAgIH1cblxuICAgICYtbG9nby1ibG9jayB7XG4gICAgICAgIGZsZXgtYmFzaXM6IDMwMHB4O1xuXG4gICAgICAgIEBpbmNsdWRlIGIoOTAwKSB7XG4gICAgICAgICAgICBmbGV4LWJhc2lzOiAyMDBweDtcbiAgICAgICAgfVxuXG4gICAgICAgIEBpbmNsdWRlIGIoNzUwKSB7XG4gICAgICAgICAgICBmbGV4LWJhc2lzOiBhdXRvO1xuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICAgIH1cblxuICAgICAgICBpbWcge1xuICAgICAgICAgICAgd2lkdGg6IDIzMHB4O1xuXG4gICAgICAgICAgICBAaW5jbHVkZSBiKDkwMCkge1xuICAgICAgICAgICAgICAgIHdpZHRoOiAyMDBweDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgQGluY2x1ZGUgYigzNzApIHtcbiAgICAgICAgICAgICAgICB3aWR0aDogMTUwcHg7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAmLW1lbnUge1xuXG4gICAgICAgICYtYmxvY2sge1xuICAgICAgICAgICAgZmxleC1iYXNpczogMTAwJTtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgdHJhbnNpdGlvbjogMC40cyBlYXNlO1xuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IDgwcHg7XG5cbiAgICAgICAgICAgIEBpbmNsdWRlIGIoNzUwKSB7XG4gICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xuICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgICAgICAgbWF4LWhlaWdodDogMHB4O1xuICAgICAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgICAgICAgICAgcGFkZGluZy1yaWdodDogMHB4O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAmLWFkbWluIHtcbiAgICAgICAgICAgICAgICBmbGV4LWJhc2lzOiBhdXRvO1xuICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMTAwcHg7XG5cbiAgICAgICAgICAgICAgICBAaW5jbHVkZSBiKDc1MCkge1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDA7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgJi1saW5rIHtcbiAgICAgICAgICAgIGNvbG9yOiAkd2hpdGU7XG4gICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICAgICAgICAgdHJhbnNpdGlvbjogMC40cyBlYXNlO1xuICAgICAgICAgICAgbWFyZ2luOiAycHggMTVweDtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuXG4gICAgICAgICAgICBAaW5jbHVkZSBiKDEwMDApIHtcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAycHggMTBweDtcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBAaW5jbHVkZSBiKDc1MCkge1xuICAgICAgICAgICAgICAgIG1hcmdpbjogN3B4IDEwcHg7XG4gICAgICAgICAgICAgICAgY29sb3I6ICRibGFjaztcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgICAgICAgY29sb3I6ICRnb2xkO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgJi10b2dnbGUtYmxvY2sge1xuICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcblxuICAgICAgICAgICAgbGFiZWwge1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblxuICAgICAgICAgICAgICAgIC5saW5lLXRvZ2dsZSB7XG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMnB4O1xuICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRicm93bi1yZWQ7XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAzMHB4O1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiA1cHg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpbnB1dCB7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgQGluY2x1ZGUgYig3NTApIHtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgICAgICBmbG9hdDogcmlnaHQ7XG4gICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogNXB4O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBAaW5jbHVkZSBiKDM3MCkge1xuICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDNweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgfVxufVxuXG4ubWVudS1vcGVuIHtcbiAgICBtYXgtaGVpZ2h0OiAxNjBweCAhaW1wb3J0YW50O1xufVxuXG4ubGFuZ3VhZ2Utc2VsZWN0IHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgcmlnaHQ6IDA7XG4gICAgdG9wOiAxOHB4O1xuICAgIHotaW5kZXg6IDI7XG5cbiAgICBAaW5jbHVkZSBiKDkwMCkge1xuICAgICAgICB0b3A6IDE1cHg7XG4gICAgfVxuXG4gICAgJi1hZG1pbiB7XG4gICAgICAgIHRvcDogLTRweDtcblxuICAgICAgICBAaW5jbHVkZSBiKDc1MCkge1xuICAgICAgICAgICAgdG9wOiAwO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8gQGluY2x1ZGUgYigxMjQwKSB7XG4gICAgLy8gICAgIHJpZ2h0OiAtNTBweDtcbiAgICAvLyB9XG5cbiAgICBAaW5jbHVkZSBiKDkwMCkge1xuICAgICAgICByaWdodDogMHB4O1xuICAgIH1cblxuICAgIEBpbmNsdWRlIGIoNzUwKSB7XG4gICAgICAgIHJpZ2h0OiA1MHB4O1xuICAgIH1cblxuICAgIEBpbmNsdWRlIGIoMzcwKSB7XG4gICAgICAgIHRvcDogNXB4O1xuICAgICAgICByaWdodDogNDBweDtcbiAgICB9XG5cbiAgICAmLWxpc3Qge1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xuICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2RkZDtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuXG4gICAgICAgICY6YWZ0ZXIge1xuICAgICAgICAgICAgY29udGVudDogJyc7XG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgIHdpZHRoOiA4cHg7XG4gICAgICAgICAgICBoZWlnaHQ6IDhweDtcbiAgICAgICAgICAgIGJvcmRlci13aWR0aDogMnB4IDJweCAwIDA7XG4gICAgICAgICAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xuICAgICAgICAgICAgYm9yZGVyLWNvbG9yOiAjODIxNjE3O1xuICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMTM1ZGVnKTtcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgIHRvcDogOXB4O1xuICAgICAgICAgICAgcmlnaHQ6IDExcHg7XG4gICAgICAgICAgICB0cmFuc2l0aW9uOiAwLjJzIGVhc2U7XG4gICAgICAgIH1cblxuICAgICAgICAmOm5vdCgub3BlbmVkKSB7XG4gICAgICAgICAgICAmOmhvdmVyIHtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjBmMGYwO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgbGkge1xuICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgICAgICAgIHBhZGRpbmc6IDVweCAxMHB4IDVweCAxMHB4O1xuICAgICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMjBweDtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkZXI7XG4gICAgICAgICAgICBjb2xvcjogIzgyMTYxNztcblxuICAgICAgICAgICAgc3BhbiB7XG4gICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAmOmFmdGVyIHtcbiAgICAgICAgICAgICAgICBjb250ZW50OiAnJztcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgICAgICBjbGVhcjogYm90aDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgJi5hY3RpdmUge1xuICAgICAgICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IDMwcHg7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAmLm9wZW5lZCB7XG4gICAgICAgICAgICAmOmFmdGVyIHtcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtNDVkZWcpO1xuICAgICAgICAgICAgICAgIHRvcDogMTNweDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgbGkge1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuXG4gICAgICAgICAgICAgICAgK2xpIHtcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNkZGQ7XG4gICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaW1nIHtcbiAgICAgICAgICAgIHdpZHRoOiAyNHB4O1xuICAgICAgICAgICAgaGVpZ2h0OiAyNHB4O1xuICAgICAgICB9XG4gICAgfVxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HeaderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-header',
                templateUrl: './header.component.html',
                styleUrls: ['./header.component.scss'],
                host: { '(document:click)': 'onClick($event)' },
            }]
    }], function () { return [{ type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }, { type: src_app_service_user_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/pages/index/index.component.ts":
/*!************************************************!*\
  !*** ./src/app/pages/index/index.component.ts ***!
  \************************************************/
/*! exports provided: IndexComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IndexComponent", function() { return IndexComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! swiper */ "./node_modules/swiper/js/swiper.esm.bundle.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");






function IndexComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "h2", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "p", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const slide_r1 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("background-image", "url(assets/img/" + slide_r1[ctx_r0.lang].image + ")", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefaultStyleSanitizer"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("background-image", "url(assets/img/" + slide_r1[ctx_r0.lang].image_mob + ")", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefaultStyleSanitizer"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", slide_r1[ctx_r0.lang].title, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", slide_r1[ctx_r0.lang].text, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", "assets/downloads/pdf/" + slide_r1[ctx_r0.lang].file);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](slide_r1[ctx_r0.lang].button);
} }
class IndexComponent {
    constructor(translate) {
        this.translate = translate;
        this.lang = 'eng';
        this.slider = [
            {
                eng: {
                    title: 'Ducatus Coin',
                    text: 'Inspired by the ancient Roman trading coin and fuelled by the revolutionary spirit that created digital money, Ducatus Coin presents an alternative form of financial exchange – one that is inclusive, unique and offers boundless possibilities.',
                    button: 'Download Whitepaper',
                    image: 'slide-1.png',
                    image_mob: 'slide-1-mob.png',
                    file: 'ducatus-coin-white-paper.pdf'
                },
                ita: {
                    title: 'Ducatus Coin',
                    text: 'Ispirato all\'antica moneta di scambio romana e alimentato dallo spirito rivoluzionario che ha creato la moneta digitale, Ducatus Coin presenta una forma alternativa di scambio finanziario - inclusiva, unica e che offre possibilità illimitate.',
                    button: 'Scarica il white paper',
                    image: 'slide-1.png',
                    image_mob: 'slide-1-mob.png',
                    file: 'ducatus-coin-white-paper.pdf'
                },
                deu: {
                    title: 'Ducatus Coin',
                    text: 'Inspiriert von der antiken römischen Handelsmünze und angetrieben vom revolutionären Geist, der digitales Geld geschaffen hat, bietet Ducatus Coin eine alternative Form des Finanzaustauschs - eine, die inklusiv, einzigartig und grenzenlos möglich ist.',
                    button: 'Whitepaper herunterladen',
                    image: 'slide-1.png',
                    image_mob: 'slide-1-mob.png',
                    file: 'ducatus-coin-white-paper.pdf'
                },
                vie: {
                    title: 'Ducatus Coin',
                    text: 'Lấy cảm hứng từ đồng tiền giao dịch La Mã cổ đại và được thúc đẩy bởi tinh thần cách mạng đã tạo ra tiền kỹ thuật số, Ducatus Coin đưa ra một hình thức giao dịch tài chính thay thế - một hình thức bao quát, độc đáo và mang đến khả năng vô biên.',
                    button: 'Tải xuống Whitepaper',
                    image: 'slide-1.png',
                    image_mob: 'slide-1-mob.png',
                    file: 'ducatus-coin-white-paper.pdf'
                },
            },
            {
                eng: {
                    title: 'Cryptocurrency for everyday living',
                    text: 'Enjoy the freedom of cashless, borderless and secure everyday transactions, from buying your morning coffee to purchasing your dream home, now all possible with Ducatus Coin.',
                    button: 'Download Whitepaper',
                    image: 'slide-2.png',
                    image_mob: 'slide-2-mob.png',
                    file: 'ducatus-coin-white-paper.pdf'
                },
                ita: {
                    title: 'Criptovaluta per la vita di tutti i giorni',
                    text: 'Goditi la libertà di transazioni quotidiane senza contanti, senza confini e sicure, dall\'acquisto del caffè del mattino all\'acquisto della casa dei tuoi sogni, ora tutto possibile con Ducatus Coin.',
                    button: 'Scarica il white paper',
                    image: 'slide-2.png',
                    image_mob: 'slide-2-mob.png',
                    file: 'ducatus-coin-white-paper.pdf'
                },
                deu: {
                    title: 'Kryptowährung für das tägliche Leben',
                    text: 'Genießen Sie die Freiheit bargeldloser, grenzenloser und sicherer Transaktionen im Alltag, vom Kauf Ihres Morgenkaffees bis zum Kauf Ihres Traumhauses, all das jetzt möglich mit Ducatus Coin.',
                    button: 'Whitepaper herunterladen',
                    image: 'slide-2.png',
                    image_mob: 'slide-2-mob.png',
                    file: 'ducatus-coin-white-paper.pdf'
                },
                vie: {
                    title: 'Tiền mã hoá cho cuộc sống hàng ngày',
                    text: 'Tận hưởng sự tự do của các giao dịch hàng ngày không tiền mặt, không biên giới và an toàn, từ mua cà phê buổi sáng đến mua ngôi nhà mơ ước của bạn, giờ đây tất cả đều có thể với Ducatus Coin.',
                    button: 'Tải xuống Whitepaper',
                    image: 'slide-2.png',
                    image_mob: 'slide-2-mob.png',
                    file: 'ducatus-coin-white-paper.pdf'
                },
            },
            {
                eng: {
                    title: 'Championing the crypto-economy',
                    text: 'With Distribution, Convertibility and Usability (DUC) at its core, Ducatus Coin encourages the practical use and application of cryptocurrency in real life. These traits are instrumental in helping build a solid crypto-economy for the future.',
                    button: 'Download Whitepaper',
                    image: 'slide-3.jpg',
                    image_mob: 'slide-3-mob.png',
                    file: 'ducatus-coin-white-paper.pdf'
                },
                ita: {
                    title: 'Sostenere l\'economia digitale',
                    text: 'Con la distribuzione, la convertibilità e l\'usabilità (DUC) al centro, Ducatus Coin incoraggia l\'uso pratico e l\'applicazione della criptovaluta nella vita quotidiana.  Questi tratti sono fondamentali per aiutare a costruire una solida criptoeconomia per il futuro.',
                    button: 'Scarica il white paper',
                    image: 'slide-3.jpg',
                    image_mob: 'slide-3-mob.png',
                    file: 'ducatus-coin-white-paper.pdf'
                },
                deu: {
                    title: 'Verfechter der digitalen Wirtschaft',
                    text: 'Mit Distribution, Convertibility and Usability (DUC) im Mittelpunkt fördert Ducatus Coin die praktische Verwendung und Anwendung von Kryptowährung im realen Leben. Diese Eigenschaften tragen maßgeblich zum Aufbau einer soliden Kryptoökonomie für die Zukunft bei.',
                    button: 'Whitepaper herunterladen',
                    image: 'slide-3.jpg',
                    image_mob: 'slide-3-mob.png',
                    file: 'ducatus-coin-white-paper.pdf'
                },
                vie: {
                    title: 'Ủng hộ nền kinh tế kỹ thuật số',
                    text: 'Với việc phân phối, khả năng chuyển đổi và khả năng sử dụng (DUC) là cốt lõi, Ducatus Coin khuyến khích sử dụng thực tế và ứng dụng tiền mã hoá trong cuộc sống thực. Những đặc điểm này là công cụ giúp xây dựng nền kinh tế tiền mã hoá vững chắc cho tương lai.',
                    button: 'Tải xuống Whitepaper',
                    image: 'slide-3.jpg',
                    image_mob: 'slide-3-mob.png',
                    file: 'ducatus-coin-white-paper.pdf'
                }
            },
        ];
    }
    ngOnInit() {
        const defaultLng = (navigator.language || navigator['browserLanguage']).split('-')[0];
        const langToSet = window['jQuery']['cookie']('lng') || (['deu', 'eng', 'vie', 'ita'].includes(defaultLng) ? defaultLng : 'eng');
        this.lang = langToSet;
        this.translate.onLangChange.subscribe((event) => {
            this.lang = event.lang;
        });
        setTimeout(() => {
            this.mySwiper = new swiper__WEBPACK_IMPORTED_MODULE_1__["default"]('.swiper-container', {
                loop: true,
                pagination: {
                    el: '.swiper-pagination',
                    clickable: true,
                },
            });
        }, 1000);
    }
    ngOnDestroy() {
        this.mySwiper = undefined;
    }
}
IndexComponent.ɵfac = function IndexComponent_Factory(t) { return new (t || IndexComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"])); };
IndexComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: IndexComponent, selectors: [["app-index"]], decls: 99, vars: 73, consts: [[1, "section-header"], [1, "section-header-container"], [1, "swiper-pagination"], [1, "section-header-slider"], [1, "swiper-container"], [1, "swiper-wrapper"], ["class", "swiper-slide", 4, "ngFor", "ngForOf"], [1, "section-financial"], [1, "container"], [1, "section-financial-info"], [1, "h2__title", 3, "innerHTML"], [1, "span__subtitle", 3, "innerHTML"], [1, "span__line"], [1, "section-financial-info-blocks"], [1, "section-financial-info-block"], [1, "p__text", 3, "innerHTML"], ["routerLink", "/about", 1, "button", "button__brown-red"], [1, "section-ducatus"], [1, "section-ducatus-blocks"], [1, "section-ducatus-block"], [1, "ducatus-coin"], [1, "p__ducatus-coin", 3, "innerHTML"], [1, "span__title", 3, "innerHTML"], [1, "section-ducatus-blocks-text"], [1, "section-ducatus-block-left"], [1, "p__section-ducatus-coin", "icon", "icon__money", 3, "innerHTML"], [1, "section-ducatus-block-right"], [1, "p__section-ducatus-coin", "icon", "icon__arrow", 3, "innerHTML"], [1, "section-ducatus-maintains"], [1, "section-ducatus-maintains-block"], [1, "span__title", "span__title-left", 3, "innerHTML"], [1, "section-ducatus-maintains-blocks"], [1, "section-ducatus-maintains-block-item"], [1, "icon", "icon__house"], [1, "section-ducatus-maintains-block-item-text"], [1, "span__maintains-item", 3, "innerHTML"], [1, "p__section-ducatus", 3, "innerHTML"], [1, "icon", "icon__people"], [1, "icon", "icon__hands"], [1, "p__section-ducatus", "icon", "icon__rocket", 3, "innerHTML"], [1, "p__section-ducatus", "icon", "icon__up", 3, "innerHTML"], [1, "p__section-ducatus", "icon", "icon__web", 3, "innerHTML"], [1, "p__section-ducatus", "icon", "icon__coin", 3, "innerHTML"], [1, "section-usability"], [1, "section-usability-wrap"], [1, "section-usability-info"], [1, "section-usability-info-blocks"], [1, "section-usability-info-block"], [1, "swiper-slide"], [1, "section-header-wrap", "section-header-wrap-desctop"], [1, "section-header-wrap", "section-header-wrap-mobile"], [1, "container-slider"], [1, "slider-item"], [1, "h2__slider-title", 3, "innerHTML"], [1, "p__slider-item", 3, "innerHTML"], ["target", "_blank", 1, "button", "button__transparent-white", 3, "routerLink"]], template: function IndexComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, IndexComponent_div_6_Template, 9, 8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "section", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "h2", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](11, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](13, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "p", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](18, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "p", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](21, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "a", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](24, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "section", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "span", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "p", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](32, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](35, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "p", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](39, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "p", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](42, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "section", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](46, "span", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](47, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](50, "span", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](52, "span", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](53, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](54, "p", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](55, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](57, "span", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](59, "span", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](60, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](61, "p", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](62, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](64, "span", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](66, "span", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](67, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](68, "p", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](69, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](71, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](72, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](75, "p", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](76, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](78, "p", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](79, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](81, "p", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](82, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](84, "p", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](85, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "section", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "div", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "div", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](90, "h2", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](91, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](92, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](93, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](94, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "div", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "div", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](97, "p", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](98, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.slider);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](11, 25, "PAGE.MAIN.FINANCIAL.TITLE"), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](13, 27, "PAGE.MAIN.FINANCIAL.SUBTITLE"), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](18, 29, "PAGE.MAIN.FINANCIAL.TEXT_1"), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](21, 31, "PAGE.MAIN.FINANCIAL.TEXT_2"), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](24, 33, "PAGE.MAIN.FINANCIAL.BUTTON"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](32, 35, "PAGE.MAIN.SECTION_1.TITLE_1"), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](35, 37, "PAGE.MAIN.SECTION_1.TITLE_2"), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](39, 39, "PAGE.MAIN.SECTION_1.TEXT_1"), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](42, 41, "PAGE.MAIN.SECTION_1.TEXT_2"), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](47, 43, "PAGE.MAIN.SECTION_2.LEFT.TITLE"), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](53, 45, "PAGE.MAIN.SECTION_2.LEFT.SUBTITLE_1"), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](55, 47, "PAGE.MAIN.SECTION_2.LEFT.TEXT_1"), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](60, 49, "PAGE.MAIN.SECTION_2.LEFT.SUBTITLE_2"), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](62, 51, "PAGE.MAIN.SECTION_2.LEFT.TEXT_2"), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](67, 53, "PAGE.MAIN.SECTION_2.LEFT.SUBTITLE_3"), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](69, 55, "PAGE.MAIN.SECTION_2.LEFT.TEXT_3"), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](72, 57, "PAGE.MAIN.SECTION_2.RIGHT.TITLE"), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](76, 59, "PAGE.MAIN.SECTION_2.RIGHT.TEXT_1"), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](79, 61, "PAGE.MAIN.SECTION_2.RIGHT.TEXT_2"), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](82, 63, "PAGE.MAIN.SECTION_2.RIGHT.TEXT_3"), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](85, 65, "PAGE.MAIN.SECTION_2.RIGHT.TEXT_4"), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](91, 67, "PAGE.MAIN.USABILITY.TITLE"), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](93, 69, "PAGE.MAIN.USABILITY.SUBTITLE"), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](98, 71, "PAGE.MAIN.USABILITY.TEXT"), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLinkWithHref"]], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslatePipe"]], styles: ["@import url(\"https://fonts.googleapis.com/css?family=Montserrat:100,100i,200,200i,300,300i,400,400i,500,500i,600,600i,700,700i,800,800i,900,900i&display=swap\");\n.clearfix[_ngcontent-%COMP%]:after {\n  content: \"\";\n  display: table;\n  clear: both;\n}\n.centered[_ngcontent-%COMP%] {\n  display: table;\n  width: 100%;\n  height: 100%;\n}\n.centered[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\n  display: table-cell;\n  text-align: center;\n  vertical-align: middle;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9nbGViL3Byb2plY3RzL2R1Y2F0dXMtc2l0ZS9zcmMvc2Nzcy9fdmFycy5zY3NzIiwiL1VzZXJzL2dsZWIvcHJvamVjdHMvZHVjYXR1cy1zaXRlL3NyYy9zY3NzL19taXhpbnMuc2NzcyIsInNyYy9hcHAvcGFnZXMvaW5kZXgvaW5kZXguY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBSVEsK0pBQUE7QUMyQlI7RUFDQyxXQUFBO0VBQ0EsY0FBQTtFQUNBLFdBQUE7QUM3QkQ7QURnQ0E7RUFDQyxjQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUM3QkQ7QUQrQkM7RUFDQyxtQkFBQTtFQUNBLGtCQUFBO0VBQ0Esc0JBQUE7QUM3QkY7QUR5TUE7OztHQUFBIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvaW5kZXgvaW5kZXguY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIG1haW4gdmFyaWFibGVzXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1Nb250c2VycmF0OjEwMCwxMDBpLDIwMCwyMDBpLDMwMCwzMDBpLDQwMCw0MDBpLDUwMCw1MDBpLDYwMCw2MDBpLDcwMCw3MDBpLDgwMCw4MDBpLDkwMCw5MDBpJmRpc3BsYXk9c3dhcCcpO1xuXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIGFkZGl0aW9uYWwgdmFyaWFibGVzXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIGNvbG9yc1xuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbiRibGFjazogIzAwMDtcbiRncmF5OiAjODA4MDgwO1xuJHdoaXRlOiAjZmZmO1xuJGJsdWU6ICMwMEY7XG4kcHVycGxlOiAjOEE0RDc2O1xuJHBpbms6ICNGQTdDOTE7XG4kYnJvd246ICM3NTc3NjM7XG4kYmVpZ2UtbGlnaHQ6ICNEMEQxQ0Q7XG4kYmVpZ2UtbGlnaHRlci0xOiAjRUZGMEVCO1xuJGJlaWdlLWxpZ2h0ZXItMjogI0Y0RjRGNDtcblxuJGJyb3duLXJlZDogIzg5MjczNDtcbiRnb2xkLXllbGxvdzogI0U4QzIyQztcbiRkYXJrLWdyZXk6ICMyMzI0MWY7XG4kZ3JleTogIzRkNGM0ZDtcbiRnb2xkOiAjRDNDMTk4O1xuJGdvbGQtMjogI0YwRUFFMztcbiIsIi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gbWFpbiBtaXhpbnNcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG5AbWl4aW4gZm9udC1mYWNlKCRmb250LWZhbWlseSwgJGZpbGUtcGF0aCwgJHdlaWdodDogbm9ybWFsLCAkc3R5bGU6IG5vcm1hbCwgJGFzc2V0LXBpcGVsaW5lOiBmYWxzZSkge1xuXHRAZm9udC1mYWNlIHtcblx0XHRmb250LWZhbWlseTogJGZvbnQtZmFtaWx5O1xuXHRcdGZvbnQtd2VpZ2h0OiAkd2VpZ2h0O1xuXHRcdGZvbnQtc3R5bGU6ICRzdHlsZTtcblxuXHRcdEBpZiAkYXNzZXQtcGlwZWxpbmU9PXRydWUge1xuXHRcdFx0c3JjOiBmb250LXVybCgnI3skZmlsZS1wYXRofS5lb3QnKTtcblx0XHRcdHNyYzogZm9udC11cmwoJyN7JGZpbGUtcGF0aH0uZW90PyNpZWZpeCcpIGZvcm1hdCgnZW1iZWRkZWQtb3BlbnR5cGUnKSxcblx0XHRcdGZvbnQtdXJsKCcjeyRmaWxlLXBhdGh9LndvZmYnKSBmb3JtYXQoJ3dvZmYnKSxcblx0XHRcdGZvbnQtdXJsKCcjeyRmaWxlLXBhdGh9LnR0ZicpIGZvcm1hdCgndHJ1ZXR5cGUnKTtcblx0XHR9XG5cblx0XHRAZWxzZSB7XG5cdFx0XHRzcmM6IHVybCgnI3skZmlsZS1wYXRofS5lb3QnKTtcblx0XHRcdHNyYzogdXJsKCcjeyRmaWxlLXBhdGh9LmVvdD8jaWVmaXgnKSBmb3JtYXQoJ2VtYmVkZGVkLW9wZW50eXBlJyksXG5cdFx0XHR1cmwoJyN7JGZpbGUtcGF0aH0ud29mZicpIGZvcm1hdCgnd29mZicpLFxuXHRcdFx0dXJsKCcjeyRmaWxlLXBhdGh9LnR0ZicpIGZvcm1hdCgndHJ1ZXR5cGUnKTtcblx0XHR9XG5cdH1cbn1cblxuQG1peGluIG5vdGV4dCB7XG5cdG92ZXJmbG93OiBoaWRkZW47XG5cdHRleHQtaW5kZW50OiAtOTk5OXB4O1xufVxuXG4uY2xlYXJmaXg6YWZ0ZXIge1xuXHRjb250ZW50OiBcIlwiO1xuXHRkaXNwbGF5OiB0YWJsZTtcblx0Y2xlYXI6IGJvdGg7XG59XG5cbi5jZW50ZXJlZCB7XG5cdGRpc3BsYXk6IHRhYmxlO1xuXHR3aWR0aDogMTAwJTtcblx0aGVpZ2h0OiAxMDAlO1xuXG5cdD4qIHtcblx0XHRkaXNwbGF5OiB0YWJsZS1jZWxsO1xuXHRcdHRleHQtYWxpZ246IGNlbnRlcjtcblx0XHR2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuXHR9XG59XG5cbkBtaXhpbiBwbGFjZWhvbGRlckNvbG9yKCRpbnB1dC10ZXh0LWNvbG9yKSB7XG5cdCY6Oi13ZWJraXQtaW5wdXQtcGxhY2Vob2xkZXIge1xuXHRcdGNvbG9yOiAkaW5wdXQtdGV4dC1jb2xvcjtcblx0fVxuXG5cdCY6LW1vei1wbGFjZWhvbGRlciB7XG5cdFx0Y29sb3I6ICRpbnB1dC10ZXh0LWNvbG9yO1xuXHRcdG9wYWNpdHk6IDE7XG5cdH1cblxuXHQmOjotbW96LXBsYWNlaG9sZGVyIHtcblx0XHRjb2xvcjogJGlucHV0LXRleHQtY29sb3I7XG5cdFx0b3BhY2l0eTogMTtcblx0fVxuXG5cdCY6LW1zLWlucHV0LXBsYWNlaG9sZGVyIHtcblx0XHRjb2xvcjogJGlucHV0LXRleHQtY29sb3I7XG5cdH1cblxuXHQmOjpwbGFjZWhvbGRlciB7XG5cdFx0Y29sb3I6ICRpbnB1dC10ZXh0LWNvbG9yO1xuXHRcdG9wYWNpdHk6IDE7XG5cdH1cblxuXHQmOmZvY3VzOi1tb3otcGxhY2Vob2xkZXIge1xuXHRcdGNvbG9yOiB0cmFuc3BhcmVudDtcblx0XHRvcGFjaXR5OiAxO1xuXHR9XG5cblx0Jjpmb2N1czo6LW1vei1wbGFjZWhvbGRlciB7XG5cdFx0Y29sb3I6IHRyYW5zcGFyZW50O1xuXHRcdG9wYWNpdHk6IDE7XG5cdH1cblxuXHQmOmZvY3VzOjotd2Via2l0LWlucHV0LXBsYWNlaG9sZGVyIHtcblx0XHRjb2xvcjogdHJhbnNwYXJlbnQ7XG5cdH1cblxuXHQmOmZvY3VzOi1tcy1pbnB1dC1wbGFjZWhvbGRlciB7XG5cdFx0Y29sb3I6IHRyYW5zcGFyZW50O1xuXHR9XG5cblx0Jjpmb2N1czo6cGxhY2Vob2xkZXIge1xuXHRcdGNvbG9yOiB0cmFuc3BhcmVudDtcblx0fVxufVxuXG5AbWl4aW4gY2xlYXJmaXgge1xuXHQmOmFmdGVyIHtcblx0XHRjb250ZW50OiBcIiBcIjtcblx0XHRkaXNwbGF5OiBibG9jaztcblx0XHRjbGVhcjogYm90aDtcblx0fVxufVxuXG4vLyBjbGVhciBzZWxlY3Qgd2l0aG91dCBkZWZhdWx0IGJ1dHRvblxuQG1peGluIGNsZWFyU2VsZWN0IHtcblx0LXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xuXHQtbW96LWFwcGVhcmFuY2U6IG5vbmU7XG5cdGFwcGVhcmFuY2U6IG5vbmU7XG5cdC13ZWJraXQtYm9yZGVyLXJhZGl1czogMDtcblx0LW1vei1ib3JkZXItcmFkaXVzOiAwO1xuXHRib3JkZXItcmFkaXVzOiAwO1xufVxuXG4vLyBlbGVtZW50cyBnZXQgYXBwZW5kZWQgd2l0aCBcIl9fXCIgYW5kIHRoZSAkbmFtZVxuQG1peGluIGUoJG5hbWUpIHtcblx0QGF0LXJvb3QgI3smfV8jeyRuYW1lfSB7XG5cdFx0QGNvbnRlbnQ7XG5cdH1cbn1cblxuLy8gbW9kaWZpZXJzIGdldCBhcHBlbmRlZCB3aXRoIFwiLS1cIiBhbmQgdGhlICRuYW1lXG5AbWl4aW4gbSgkbmFtZSkge1xuXHRAYXQtcm9vdCAjeyZ9LS0jeyRuYW1lfSB7XG5cdFx0QGNvbnRlbnQ7XG5cdH1cbn1cblxuLy8gYnJlYWtwb2ludHNcbkBtaXhpbiBiKCRwb2ludCkge1xuXHRAaWYgJHBvaW50PT1kZXNrdG9wIHtcblx0XHRAbWVkaWEgKG1heC13aWR0aDogMTM2NnB4KSBhbmQgKG1pbi13aWR0aDoxMDI0cHgpIHtcblx0XHRcdEBjb250ZW50IDtcblx0XHR9XG5cdH1cblxuXHRAZWxzZSBpZiAkcG9pbnQ9PXRhYmxldCB7XG5cdFx0QG1lZGlhIChtYXgtd2lkdGg6IDEwMDBweCkge1xuXHRcdFx0QGNvbnRlbnQgO1xuXHRcdH1cblx0fVxuXG5cdEBlbHNlIGlmICRwb2ludD09bW9iaWxlIHtcblx0XHRAbWVkaWEgKG1heC13aWR0aDogNzY3cHgpIHtcblx0XHRcdEBjb250ZW50IDtcblx0XHR9XG5cdH1cblxuXHRAZWxzZSBpZiAkcG9pbnQ9PW1vYmlsZTN4IHtcblxuXHRcdEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKC13ZWJraXQtbWluLWRldmljZS1waXhlbC1yYXRpbzogMyksXG5cdFx0b25seSBzY3JlZW4gYW5kIChtaW4tcmVzb2x1dGlvbjogM2RwcHgpLFxuXHRcdG9ubHkgc2NyZWVuIGFuZCAobWluLXJlc29sdXRpb246IDM1MGRwaSkge1xuXHRcdFx0QGNvbnRlbnQgO1xuXHRcdH1cblx0fVxuXG5cdEBlbHNlIHtcblx0XHRAbWVkaWEgKG1heC13aWR0aDogJHBvaW50ICsgJ3B4Jykge1xuXHRcdFx0QGNvbnRlbnQgO1xuXHRcdH1cblx0fVxufVxuXG4vLyBicmVha3BvaW50c1xuQG1peGluIGJiKCRwb2ludE1heCwgJHBvaW50TWluKSB7XG5cdEBtZWRpYSAobWF4LXdpZHRoOiAkcG9pbnRNYXggKyAncHgnKSBhbmQgKG1pbi13aWR0aDogJHBvaW50TWluICsgJ3B4Jykge1xuXHRcdEBjb250ZW50IDtcblx0fVxufVxuXG5AbWl4aW4gaWUoKSB7XG5cblx0QG1lZGlhIHNjcmVlbiBhbmQgKC1tcy1oaWdoLWNvbnRyYXN0OiBhY3RpdmUpLFxuXHQoLW1zLWhpZ2gtY29udHJhc3Q6IG5vbmUpIHtcblx0XHRAY29udGVudCA7XG5cdH1cbn1cblxuQG1peGluIGJlZm9yZS1pbWcoJGRpc3BsYXksICR3aWR0aCwgJGhlaWdodCwgJHBvc2l0aW9uKSB7XG5cdEBhdC1yb290ICN7Jn06YmVmb3JlIHtcblx0XHRjb250ZW50OiAnJztcblx0XHRkaXNwbGF5OiAkZGlzcGxheTtcblxuXHRcdEBpZiAkcG9zaXRpb249PWEge1xuXHRcdFx0cG9zaXRpb246IGFic29sdXRlO1xuXHRcdH1cblxuXHRcdEBpZiAkcG9zaXRpb249PXIge1xuXHRcdFx0cG9zaXRpb246IHJlbGF0aXZlO1xuXHRcdH1cblxuXHRcdHdpZHRoOiAkd2lkdGg7XG5cdFx0aGVpZ2h0OiAkaGVpZ2h0O1xuXHRcdEBjb250ZW50O1xuXHR9XG59XG5cbkBtaXhpbiBhZnRlci1pbWcoJGRpc3BsYXksICR3aWR0aCwgJGhlaWdodCwgJHBvc2l0aW9uKSB7XG5cdEBhdC1yb290ICN7Jn06YWZ0ZXIge1xuXHRcdGNvbnRlbnQ6ICcnO1xuXHRcdGRpc3BsYXk6ICRkaXNwbGF5O1xuXG5cdFx0QGlmICRwb3NpdGlvbj09YSB7XG5cdFx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XG5cdFx0fVxuXG5cdFx0QGlmICRwb3NpdGlvbj09ciB7XG5cdFx0XHRwb3NpdGlvbjogcmVsYXRpdmU7XG5cdFx0fVxuXG5cdFx0d2lkdGg6ICR3aWR0aDtcblx0XHRoZWlnaHQ6ICRoZWlnaHQ7XG5cdFx0QGNvbnRlbnQ7XG5cdH1cbn1cblxuLyogcmVtIGZvbnQgc2l6ZSB3aXRoIGZhbGxiYWNrIHwgdXNhZ2U6XG5cdHAge1xuXHRcdEBpbmNsdWRlIGZvbnQtc2l6ZSgxNHB4KVxuXHR9Ki9cblxuQGZ1bmN0aW9uIGNhbGN1bGF0ZVJlbSgkc2l6ZSkge1xuXHQkcmVtU2l6ZTogJHNpemUgLyAxNnB4O1xuXHRAcmV0dXJuICRyZW1TaXplICogMXJlbTtcbn1cblxuQG1peGluIGZvbnQtc2l6ZSgkc2l6ZSkge1xuXHRmb250LXNpemU6ICRzaXplO1xuXHRmb250LXNpemU6IGNhbGN1bGF0ZVJlbSgkc2l6ZSk7XG59XG5cbkBtaXhpbiB0ZXh0Q3V0KCRjb2wsICRoZWlnaHQpIHtcblx0ZGlzcGxheTogLXdlYmtpdC1ib3g7XG5cdC13ZWJraXQtbGluZS1jbGFtcDogJGNvbDtcblx0LXdlYmtpdC1ib3gtb3JpZW50OiB2ZXJ0aWNhbDtcblx0b3ZlcmZsb3c6IGhpZGRlbjtcblx0bWF4LWhlaWdodDogJGhlaWdodDtcbn1cblxuLy8gYnV0dG9uc1xuXG5AbWl4aW4gYnRuLWdyYWRpZW50KCRjVGV4dCwgJGNIb3ZlciwgJGRpcmVjdGlvbiwgJGNGaXJzdCwgJGNTZWNvbnMsICRjVGhpcmQsICRob3Zlcikge1xuXHRjb2xvcjogJGNUZXh0O1xuXHR0cmFuc2l0aW9uOiAwLjVzO1xuXHRiYWNrZ3JvdW5kLXNpemU6IDIwMCUgYXV0bztcblx0YmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KCRkaXJlY3Rpb24sICRjRmlyc3QgMCUsICRjU2Vjb25zIDUxJSwgJGNUaGlyZCAxMDAlKTtcblxuXHQmOmhvdmVyIHtcblx0XHR0ZXh0LWRlY29yYXRpb246IG5vbmU7XG5cdFx0YmFja2dyb3VuZC1wb3NpdGlvbjogJGhvdmVyO1xuXHRcdGNvbG9yOiAkY0hvdmVyO1xuXHRcdGJveC1zaGFkb3c6IDBweCAyMHB4IDMwcHggLTE1cHggJGNUaGlyZDtcblx0fVxufVxuXG5AbWl4aW4gZ3JhZGllbnQoJHRvcCwgJGJvdHRvbSkge1xuXHRiYWNrZ3JvdW5kOiAkdG9wO1xuXHRiYWNrZ3JvdW5kOiAtbW96LWxpbmVhci1ncmFkaWVudCh0b3AsICR0b3AgMCUsICRib3R0b20gMTAwJSk7XG5cdGJhY2tncm91bmQ6IC13ZWJraXQtZ3JhZGllbnQobGluZWFyLCBsZWZ0IHRvcCwgbGVmdCBib3R0b20sIGNvbG9yLXN0b3AoMCUsICR0b3ApLCBjb2xvci1zdG9wKDEwMCUsICRib3R0b20pKTtcblx0YmFja2dyb3VuZDogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQodG9wLCAkdG9wIDAlLCAkYm90dG9tIDEwMCUpO1xuXHRiYWNrZ3JvdW5kOiAtby1saW5lYXItZ3JhZGllbnQodG9wLCAkdG9wIDAlLCAkYm90dG9tIDEwMCUpO1xuXHRiYWNrZ3JvdW5kOiAtbXMtbGluZWFyLWdyYWRpZW50KHRvcCwgJHRvcCAwJSwgJGJvdHRvbSAxMDAlKTtcblx0YmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgJHRvcCAwJSwgJGJvdHRvbSAxMDAlKTtcblx0ZmlsdGVyOiBwcm9naWQ6RFhJbWFnZVRyYW5zZm9ybS5NaWNyb3NvZnQuZ3JhZGllbnQoc3RhcnRDb2xvcnN0cj0nI3skdG9wfScsIGVuZENvbG9yc3RyPScjeyRib3R0b219ICcsIEdyYWRpZW50VHlwZT0wKTtcbn0iLCJAaW1wb3J0IHVybChcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1Nb250c2VycmF0OjEwMCwxMDBpLDIwMCwyMDBpLDMwMCwzMDBpLDQwMCw0MDBpLDUwMCw1MDBpLDYwMCw2MDBpLDcwMCw3MDBpLDgwMCw4MDBpLDkwMCw5MDBpJmRpc3BsYXk9c3dhcFwiKTtcbi5jbGVhcmZpeDphZnRlciB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIGRpc3BsYXk6IHRhYmxlO1xuICBjbGVhcjogYm90aDtcbn1cblxuLmNlbnRlcmVkIHtcbiAgZGlzcGxheTogdGFibGU7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG59XG4uY2VudGVyZWQgPiAqIHtcbiAgZGlzcGxheTogdGFibGUtY2VsbDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xufVxuXG4vKiByZW0gZm9udCBzaXplIHdpdGggZmFsbGJhY2sgfCB1c2FnZTpcblx0cCB7XG5cdFx0QGluY2x1ZGUgZm9udC1zaXplKDE0cHgpXG5cdH0qLyJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](IndexComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-index',
                templateUrl: './index.component.html',
                styleUrls: ['./index.component.scss']
            }]
    }], function () { return [{ type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/pages/legal-disclaimer/legal-disclaimer.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/pages/legal-disclaimer/legal-disclaimer.component.ts ***!
  \**********************************************************************/
/*! exports provided: LegalDisclaimerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LegalDisclaimerComponent", function() { return LegalDisclaimerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");



class LegalDisclaimerComponent {
    constructor() { }
    ngOnInit() {
    }
}
LegalDisclaimerComponent.ɵfac = function LegalDisclaimerComponent_Factory(t) { return new (t || LegalDisclaimerComponent)(); };
LegalDisclaimerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LegalDisclaimerComponent, selectors: [["app-legal-disclaimer"]], decls: 16, vars: 9, consts: [[1, "section-header-page", 2, "background-image", "url(/assets/img/sections/privacy-policy-bg.png)"], [1, "container"], [1, "h1__title-page", 3, "innerHTML"], [1, "section-infoblock"], [1, "section-infoblock-one-third"], [1, "section-infoblock-block"], [1, "p__text-section", 3, "innerHTML"], [1, "mb-130"]], template: function LegalDisclaimerComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "h1", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "section", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](10, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "p", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](14, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "section", 7);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 3, "PAGE.LEGAL_DISCLAIMER.TITLE"), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](10, 5, "PAGE.LEGAL_DISCLAIMER.DISCLAIMER"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](14, 7, "PAGE.LEGAL_DISCLAIMER.TEXT"), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
    } }, pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslatePipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2xlZ2FsLWRpc2NsYWltZXIvbGVnYWwtZGlzY2xhaW1lci5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LegalDisclaimerComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-legal-disclaimer',
                templateUrl: './legal-disclaimer.component.html',
                styleUrls: ['./legal-disclaimer.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/pages/legal/legal.component.ts":
/*!************************************************!*\
  !*** ./src/app/pages/legal/legal.component.ts ***!
  \************************************************/
/*! exports provided: LegalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LegalComponent", function() { return LegalComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");



class LegalComponent {
    constructor() { }
    ngOnInit() {
    }
}
LegalComponent.ɵfac = function LegalComponent_Factory(t) { return new (t || LegalComponent)(); };
LegalComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LegalComponent, selectors: [["app-legal"]], decls: 52, vars: 45, consts: [[1, "section-header-page", 2, "background-image", "url(/assets/img/sections/terms-and-conditions-bg.png)"], [1, "container"], [1, "h1__title-page", 3, "innerHTML"], [1, "section-infoblock"], [1, "section-infoblock-one-third"], [1, "section-infoblock-block"], [1, "h2__title-section", 3, "innerHTML"], [1, "span__line-section"], [1, "p__text-section"], [1, "info-gray"], [1, "h2__title-section"], ["type", "a", 1, "ol-a-type", 3, "innerHTML"], [1, "p__text-section", 3, "innerHTML"], [1, "span__title-text", 3, "innerHTML"], [1, "mb-130"]], template: function LegalComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "h1", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "section", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](10, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](15, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "p", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "i", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](20, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](23, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "ol", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](25, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](28, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "p", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](30, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](34, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "p", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](37, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](41, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](42, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](43, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](44, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](45, "p", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](46, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](47, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](48, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](49, "p", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](50, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](51, "section", 14);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 15, "PAGE.LEGAL.TITLE"), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](10, 17, "PAGE.LEGAL.DISCLAIMER"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](15, 19, "PAGE.LEGAL.SECTION.ONE.TITLE"), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](20, 21, "PAGE.LEGAL.SECTION.ONE.TEXT"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](23, 23, "PAGE.LEGAL.SECTION.ONE.SUBTITLE_1"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](25, 25, "PAGE.LEGAL.SECTION.ONE.TEXT_1"), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](28, 27, "PAGE.LEGAL.SECTION.ONE.SUBTITLE_2"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](30, 29, "PAGE.LEGAL.SECTION.ONE.TEXT_2"), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](34, 31, "PAGE.LEGAL.SECTION.TWO.TITLE"), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](37, 33, "PAGE.LEGAL.SECTION.TWO.TEXT"), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](41, 35, "PAGE.LEGAL.SECTION.THREE.TITLE"), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](44, 37, "PAGE.LEGAL.SECTION.THREE.SUBTITLE_1"), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](46, 39, "PAGE.LEGAL.SECTION.THREE.TEXT_1"), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](48, 41, "PAGE.LEGAL.SECTION.THREE.SUBTITLE_2"), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](50, 43, "PAGE.LEGAL.SECTION.THREE.TEXT_2"), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
    } }, pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslatePipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2xlZ2FsL2xlZ2FsLmNvbXBvbmVudC5jc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LegalComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-legal',
                templateUrl: './legal.component.html',
                styleUrls: ['./legal.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/pages/login/login.component.ts":
/*!************************************************!*\
  !*** ./src/app/pages/login/login.component.ts ***!
  \************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_service_user_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/service/user/user.service */ "./src/app/service/user/user.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var ng_recaptcha__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-recaptcha */ "./node_modules/ng-recaptcha/__ivy_ngcc__/fesm2015/ng-recaptcha.js");







function LoginComponent_div_2_span_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Login");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
const _c0 = function (a0) { return { "icon icon__loading": a0 }; };
function LoginComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "form", 4, 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("submit", function LoginComponent_div_2_Template_form_submit_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r5.sendLoginForm(_r2); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "label", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "input", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function LoginComponent_div_2_Template_input_ngModelChange_5_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r7.login = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "label", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Password");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "input", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function LoginComponent_div_2_Template_input_ngModelChange_8_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r8.password = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, LoginComponent_div_2_span_10_Template, 2, 0, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "re-captcha", 12, 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function LoginComponent_div_2_Template_re_captcha_ngModelChange_11_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r9.formModel.captcha = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r0.login);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r0.password);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](6, _c0, ctx_r0.formIsProgress))("disabled", _r2.invalid);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r0.formIsProgress);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r0.formModel.captcha);
} }
function LoginComponent_div_3_span_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Logout");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function LoginComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Hello, you are logged in");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Vouchers");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "or");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LoginComponent_div_3_Template_span_click_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r11.logout(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, LoginComponent_div_3_span_8_Template, 2, 0, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c0, ctx_r1.logoutIsProgress));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r1.logoutIsProgress);
} }
class LoginComponent {
    constructor(userService, router) {
        this.userService = userService;
        this.router = router;
        this.login = null;
        this.password = null;
        this.ServerErrors = {};
        this.formModel = {};
        this.userService.getCurrentUser(true, false).subscribe((user) => {
            this.hasUser = !user.is_ghost || false;
        });
    }
    ngOnInit() {
        if (!this.hasUser) {
            this.router.navigate(['/admin/voucher']);
        }
    }
    sendLoginForm(form) {
        if (form.invalid) {
            return;
        }
        this.formIsProgress = true;
        this.userService
            .authenticate(form.value)
            .then((response) => {
            if (response.key) {
                this.router.navigate(['/admin/voucher']);
            }
        }, (error) => {
            switch (error.status) {
                case 403:
                    switch (error.error.detail) {
                        case '1019':
                            break;
                        case '1020':
                            this.ServerErrors = {
                                totp: ['Invalid code'],
                            };
                            break;
                    }
                    break;
                case 400:
                    this.ServerErrors = error.error;
                    break;
            }
        })
            .finally(() => {
            this.formIsProgress = false;
        });
    }
    logout() {
        this.logoutIsProgress = true;
        this.userService.logout().then(() => {
            this.hasUser = false;
        }).finally(() => {
            this.logoutIsProgress = false;
            this.hasUser = false;
        });
    }
}
LoginComponent.ɵfac = function LoginComponent_Factory(t) { return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_service_user_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
LoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LoginComponent, selectors: [["app-login"]], decls: 4, vars: 2, consts: [["id", "login", 1, "login"], [1, "login-logo"], ["class", "login-container", 4, "ngIf"], [1, "login-container"], ["novalidate", "", 1, "login-form", 3, "submit"], ["loginForm", "ngForm"], ["for", "username", 1, "label"], ["name", "username", "type", "text", "minlength", "3", "id", "username", "required", "", "placeholder", "Username", 1, "input", 3, "ngModel", "ngModelChange"], ["for", "password", 1, "label"], ["name", "password", "type", "password", "minlength", "3", "id", "password", "required", "", "placeholder", "Password", 1, "input", 3, "ngModel", "ngModelChange"], ["type", "submit", 1, "ducatus-btn", "ducatus-btn-brown", 3, "ngClass", "disabled"], [4, "ngIf"], ["name", "captcha", "required", "", "siteKey", "6Ldw2sAZAAAAAAvBdORnt1ydyDzUR1S3y2QRojqu", 3, "ngModel", "ngModelChange"], ["captchaControl", "ngModel"], [1, "login-text", "login-text-title", "login-text-spacer"], ["routerLink", "/admin/voucher", 1, "ducatus-btn", "ducatus-btn-gold"], [1, "login-text", "login-text-spacer"], [1, "ducatus-btn", "ducatus-btn-brown", 3, "ngClass", "click"]], template: function LoginComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "span", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, LoginComponent_div_2_Template, 13, 8, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, LoginComponent_div_3_Template, 9, 4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.hasUser);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.hasUser);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["MinLengthValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgClass"], ng_recaptcha__WEBPACK_IMPORTED_MODULE_5__["RecaptchaComponent"], ng_recaptcha__WEBPACK_IMPORTED_MODULE_5__["RecaptchaValueAccessorDirective"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLink"]], styles: ["@import url(\"https://fonts.googleapis.com/css?family=Montserrat:100,100i,200,200i,300,300i,400,400i,500,500i,600,600i,700,700i,800,800i,900,900i&display=swap\");\n.clearfix[_ngcontent-%COMP%]:after {\n  content: \"\";\n  display: table;\n  clear: both;\n}\n.centered[_ngcontent-%COMP%] {\n  display: table;\n  width: 100%;\n  height: 100%;\n}\n.centered[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\n  display: table-cell;\n  text-align: center;\n  vertical-align: middle;\n}\n\nsection.login[_ngcontent-%COMP%] {\n  display: flex;\n  height: 100vh;\n  justify-content: center;\n  align-items: center;\n  background-color: #F8F5EF;\n  flex-direction: column;\n}\n@media (max-width: 650px) {\n  section.login[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n}\nsection.login[_ngcontent-%COMP%]   .login[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 100%;\n  height: 100%;\n}\nsection.login[_ngcontent-%COMP%]   .login-text[_ngcontent-%COMP%] {\n  font-weight: 400;\n  color: black;\n  opacity: 0.5;\n  letter-spacing: 1px;\n}\nsection.login[_ngcontent-%COMP%]   .login-text-title[_ngcontent-%COMP%] {\n  opacity: 1;\n  font-weight: 500;\n  margin-bottom: 40px !important;\n}\nsection.login[_ngcontent-%COMP%]   .login-text-spacer[_ngcontent-%COMP%] {\n  display: block;\n  text-align: center;\n  margin: 15px auto;\n}\nsection.login[_ngcontent-%COMP%]   .login-logo[_ngcontent-%COMP%] {\n  display: block;\n  margin: 0 auto;\n  width: 200px;\n  height: 130px;\n  background-image: url('ducatus-login-logo.svg');\n  background-repeat: no-repeat;\n  background-size: contain;\n  margin-bottom: 30px;\n}\nsection.login[_ngcontent-%COMP%]   .login-container[_ngcontent-%COMP%] {\n  max-width: 390px;\n  width: 100%;\n  padding: 45px;\n  margin: 0 auto;\n  background-color: #fff;\n  border-radius: 10px;\n  box-shadow: 0px 0px 15px -5px #0000004f;\n}\nsection.login[_ngcontent-%COMP%]   .login-container[_ngcontent-%COMP%]   .buttons-switch[_ngcontent-%COMP%] {\n  display: flex;\n  width: 100%;\n  margin-bottom: 30px;\n}\nsection.login[_ngcontent-%COMP%]   .login-container[_ngcontent-%COMP%]   .buttons-switch[_ngcontent-%COMP%]   .active[_ngcontent-%COMP%] {\n  color: #892734;\n  font-weight: 600;\n  cursor: default;\n}\nsection.login[_ngcontent-%COMP%]   .login-container[_ngcontent-%COMP%]   .buttons-switch[_ngcontent-%COMP%]   .active[_ngcontent-%COMP%]:after {\n  background-color: #892734;\n}\nsection.login[_ngcontent-%COMP%]   .login-container[_ngcontent-%COMP%]   .buttons-switch-item[_ngcontent-%COMP%] {\n  display: flex;\n  width: 50%;\n  flex-direction: column;\n  font-weight: 300;\n  color: black;\n  cursor: pointer;\n}\nsection.login[_ngcontent-%COMP%]   .login-container[_ngcontent-%COMP%]   .buttons-switch-item[_ngcontent-%COMP%]:after {\n  content: \"\";\n  height: 3px;\n  width: 100%;\n  background-color: #F4EFE8;\n  margin-top: 12px;\n}\nsection.login[_ngcontent-%COMP%]   .login-form[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr;\n  grid-gap: 17px;\n  justify-content: center;\n  align-items: center;\n}\nsection.login[_ngcontent-%COMP%]   .login-form[_ngcontent-%COMP%]   .label[_ngcontent-%COMP%] {\n  font-size: 14px;\n  line-height: 17px;\n  color: #404040;\n  font-weight: 300;\n  margin-bottom: -7px;\n}\nsection.login[_ngcontent-%COMP%]   .login-form[_ngcontent-%COMP%]   input.ng-touched.ng-invalid[_ngcontent-%COMP%] {\n  border: solid #892734 1px;\n}\nsection.login[_ngcontent-%COMP%]   .login-form[_ngcontent-%COMP%]   .input[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 5px;\n  border-radius: 5px;\n  font-size: 14px;\n  margin-bottom: 15px;\n  background: #FBF9F6;\n  border: 1px solid #E0E0E0;\n  color: black;\n  border-radius: 5px;\n  outline: none;\n  padding: 20px 10px;\n  font-weight: 400;\n  font-family: \"Montserrat\";\n  letter-spacing: 1px;\n}\nsection.login[_ngcontent-%COMP%]   .login-form[_ngcontent-%COMP%]   .ducatus-btn[_ngcontent-%COMP%] {\n  border-radius: 33px;\n  text-transform: uppercase;\n  font-size: 14px;\n  font-weight: 500;\n  max-width: 200px;\n  margin: 0 auto;\n  letter-spacing: 1px;\n}\nsection.login[_ngcontent-%COMP%]   .login-form[_ngcontent-%COMP%]   .icon__loading[_ngcontent-%COMP%] {\n  min-width: 50px;\n  transition: 0.4s ease;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9nbGViL3Byb2plY3RzL2R1Y2F0dXMtc2l0ZS9zcmMvc2Nzcy9fdmFycy5zY3NzIiwiL1VzZXJzL2dsZWIvcHJvamVjdHMvZHVjYXR1cy1zaXRlL3NyYy9zY3NzL19taXhpbnMuc2NzcyIsInNyYy9hcHAvcGFnZXMvbG9naW4vbG9naW4uY29tcG9uZW50LnNjc3MiLCIvVXNlcnMvZ2xlYi9wcm9qZWN0cy9kdWNhdHVzLXNpdGUvc3JjL2FwcC9wYWdlcy9sb2dpbi9sb2dpbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFJUSwrSkFBQTtBQzJCUjtFQUNDLFdBQUE7RUFDQSxjQUFBO0VBQ0EsV0FBQTtBQzdCRDtBRGdDQTtFQUNDLGNBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQzdCRDtBRCtCQztFQUNDLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxzQkFBQTtBQzdCRjtBRHlNQTs7O0dBQUE7QUV0TkE7RUFDRSxhQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkFBQTtFQUNBLHNCQUFBO0FEb0JGO0FEaUlFO0VFM0pGO0lBU0ksc0JBQUE7RURxQkY7QUFDRjtBQ25CRTtFQUNFLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QURxQko7QUNuQkk7RUFDRSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7QURxQk47QUNuQk07RUFDRSxVQUFBO0VBQ0EsZ0JBQUE7RUFDQSw4QkFBQTtBRHFCUjtBQ2xCTTtFQUNFLGNBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0FEb0JSO0FDaEJJO0VBQ0UsY0FBQTtFQUNBLGNBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLCtDQUFBO0VBQ0EsNEJBQUE7RUFDQSx3QkFBQTtFQUNBLG1CQUFBO0FEa0JOO0FDZkk7RUFDRSxnQkFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0VBQ0EsY0FBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSx1Q0FBQTtBRGlCTjtBQ2ZNO0VBQ0UsYUFBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtBRGlCUjtBQ2ZRO0VBQ0UsY0h6Q0U7RUcwQ0YsZ0JBQUE7RUFDQSxlQUFBO0FEaUJWO0FDZlU7RUFDRSx5Qkg5Q0E7QUUrRFo7QUNiUTtFQUNFLGFBQUE7RUFDQSxVQUFBO0VBQ0Esc0JBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0FEZVY7QUNiVTtFQUNFLFdBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLHlCQUFBO0VBQ0EsZ0JBQUE7QURlWjtBQ1RJO0VBQ0UsYUFBQTtFQUNBLDBCQUFBO0VBQ0EsY0FBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QURXTjtBQ1RNO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QURXUjtBQ1JNO0VBQ0UseUJBQUE7QURVUjtBQ1BNO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7QURTUjtBQ05NO0VBQ0UsbUJBQUE7RUFDQSx5QkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLG1CQUFBO0FEUVI7QUNMTTtFQUNFLGVBQUE7RUFDQSxxQkFBQTtBRE9SIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvbG9naW4vbG9naW4uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIG1haW4gdmFyaWFibGVzXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1Nb250c2VycmF0OjEwMCwxMDBpLDIwMCwyMDBpLDMwMCwzMDBpLDQwMCw0MDBpLDUwMCw1MDBpLDYwMCw2MDBpLDcwMCw3MDBpLDgwMCw4MDBpLDkwMCw5MDBpJmRpc3BsYXk9c3dhcCcpO1xuXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIGFkZGl0aW9uYWwgdmFyaWFibGVzXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIGNvbG9yc1xuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbiRibGFjazogIzAwMDtcbiRncmF5OiAjODA4MDgwO1xuJHdoaXRlOiAjZmZmO1xuJGJsdWU6ICMwMEY7XG4kcHVycGxlOiAjOEE0RDc2O1xuJHBpbms6ICNGQTdDOTE7XG4kYnJvd246ICM3NTc3NjM7XG4kYmVpZ2UtbGlnaHQ6ICNEMEQxQ0Q7XG4kYmVpZ2UtbGlnaHRlci0xOiAjRUZGMEVCO1xuJGJlaWdlLWxpZ2h0ZXItMjogI0Y0RjRGNDtcblxuJGJyb3duLXJlZDogIzg5MjczNDtcbiRnb2xkLXllbGxvdzogI0U4QzIyQztcbiRkYXJrLWdyZXk6ICMyMzI0MWY7XG4kZ3JleTogIzRkNGM0ZDtcbiRnb2xkOiAjRDNDMTk4O1xuJGdvbGQtMjogI0YwRUFFMztcbiIsIi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gbWFpbiBtaXhpbnNcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG5AbWl4aW4gZm9udC1mYWNlKCRmb250LWZhbWlseSwgJGZpbGUtcGF0aCwgJHdlaWdodDogbm9ybWFsLCAkc3R5bGU6IG5vcm1hbCwgJGFzc2V0LXBpcGVsaW5lOiBmYWxzZSkge1xuXHRAZm9udC1mYWNlIHtcblx0XHRmb250LWZhbWlseTogJGZvbnQtZmFtaWx5O1xuXHRcdGZvbnQtd2VpZ2h0OiAkd2VpZ2h0O1xuXHRcdGZvbnQtc3R5bGU6ICRzdHlsZTtcblxuXHRcdEBpZiAkYXNzZXQtcGlwZWxpbmU9PXRydWUge1xuXHRcdFx0c3JjOiBmb250LXVybCgnI3skZmlsZS1wYXRofS5lb3QnKTtcblx0XHRcdHNyYzogZm9udC11cmwoJyN7JGZpbGUtcGF0aH0uZW90PyNpZWZpeCcpIGZvcm1hdCgnZW1iZWRkZWQtb3BlbnR5cGUnKSxcblx0XHRcdGZvbnQtdXJsKCcjeyRmaWxlLXBhdGh9LndvZmYnKSBmb3JtYXQoJ3dvZmYnKSxcblx0XHRcdGZvbnQtdXJsKCcjeyRmaWxlLXBhdGh9LnR0ZicpIGZvcm1hdCgndHJ1ZXR5cGUnKTtcblx0XHR9XG5cblx0XHRAZWxzZSB7XG5cdFx0XHRzcmM6IHVybCgnI3skZmlsZS1wYXRofS5lb3QnKTtcblx0XHRcdHNyYzogdXJsKCcjeyRmaWxlLXBhdGh9LmVvdD8jaWVmaXgnKSBmb3JtYXQoJ2VtYmVkZGVkLW9wZW50eXBlJyksXG5cdFx0XHR1cmwoJyN7JGZpbGUtcGF0aH0ud29mZicpIGZvcm1hdCgnd29mZicpLFxuXHRcdFx0dXJsKCcjeyRmaWxlLXBhdGh9LnR0ZicpIGZvcm1hdCgndHJ1ZXR5cGUnKTtcblx0XHR9XG5cdH1cbn1cblxuQG1peGluIG5vdGV4dCB7XG5cdG92ZXJmbG93OiBoaWRkZW47XG5cdHRleHQtaW5kZW50OiAtOTk5OXB4O1xufVxuXG4uY2xlYXJmaXg6YWZ0ZXIge1xuXHRjb250ZW50OiBcIlwiO1xuXHRkaXNwbGF5OiB0YWJsZTtcblx0Y2xlYXI6IGJvdGg7XG59XG5cbi5jZW50ZXJlZCB7XG5cdGRpc3BsYXk6IHRhYmxlO1xuXHR3aWR0aDogMTAwJTtcblx0aGVpZ2h0OiAxMDAlO1xuXG5cdD4qIHtcblx0XHRkaXNwbGF5OiB0YWJsZS1jZWxsO1xuXHRcdHRleHQtYWxpZ246IGNlbnRlcjtcblx0XHR2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuXHR9XG59XG5cbkBtaXhpbiBwbGFjZWhvbGRlckNvbG9yKCRpbnB1dC10ZXh0LWNvbG9yKSB7XG5cdCY6Oi13ZWJraXQtaW5wdXQtcGxhY2Vob2xkZXIge1xuXHRcdGNvbG9yOiAkaW5wdXQtdGV4dC1jb2xvcjtcblx0fVxuXG5cdCY6LW1vei1wbGFjZWhvbGRlciB7XG5cdFx0Y29sb3I6ICRpbnB1dC10ZXh0LWNvbG9yO1xuXHRcdG9wYWNpdHk6IDE7XG5cdH1cblxuXHQmOjotbW96LXBsYWNlaG9sZGVyIHtcblx0XHRjb2xvcjogJGlucHV0LXRleHQtY29sb3I7XG5cdFx0b3BhY2l0eTogMTtcblx0fVxuXG5cdCY6LW1zLWlucHV0LXBsYWNlaG9sZGVyIHtcblx0XHRjb2xvcjogJGlucHV0LXRleHQtY29sb3I7XG5cdH1cblxuXHQmOjpwbGFjZWhvbGRlciB7XG5cdFx0Y29sb3I6ICRpbnB1dC10ZXh0LWNvbG9yO1xuXHRcdG9wYWNpdHk6IDE7XG5cdH1cblxuXHQmOmZvY3VzOi1tb3otcGxhY2Vob2xkZXIge1xuXHRcdGNvbG9yOiB0cmFuc3BhcmVudDtcblx0XHRvcGFjaXR5OiAxO1xuXHR9XG5cblx0Jjpmb2N1czo6LW1vei1wbGFjZWhvbGRlciB7XG5cdFx0Y29sb3I6IHRyYW5zcGFyZW50O1xuXHRcdG9wYWNpdHk6IDE7XG5cdH1cblxuXHQmOmZvY3VzOjotd2Via2l0LWlucHV0LXBsYWNlaG9sZGVyIHtcblx0XHRjb2xvcjogdHJhbnNwYXJlbnQ7XG5cdH1cblxuXHQmOmZvY3VzOi1tcy1pbnB1dC1wbGFjZWhvbGRlciB7XG5cdFx0Y29sb3I6IHRyYW5zcGFyZW50O1xuXHR9XG5cblx0Jjpmb2N1czo6cGxhY2Vob2xkZXIge1xuXHRcdGNvbG9yOiB0cmFuc3BhcmVudDtcblx0fVxufVxuXG5AbWl4aW4gY2xlYXJmaXgge1xuXHQmOmFmdGVyIHtcblx0XHRjb250ZW50OiBcIiBcIjtcblx0XHRkaXNwbGF5OiBibG9jaztcblx0XHRjbGVhcjogYm90aDtcblx0fVxufVxuXG4vLyBjbGVhciBzZWxlY3Qgd2l0aG91dCBkZWZhdWx0IGJ1dHRvblxuQG1peGluIGNsZWFyU2VsZWN0IHtcblx0LXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xuXHQtbW96LWFwcGVhcmFuY2U6IG5vbmU7XG5cdGFwcGVhcmFuY2U6IG5vbmU7XG5cdC13ZWJraXQtYm9yZGVyLXJhZGl1czogMDtcblx0LW1vei1ib3JkZXItcmFkaXVzOiAwO1xuXHRib3JkZXItcmFkaXVzOiAwO1xufVxuXG4vLyBlbGVtZW50cyBnZXQgYXBwZW5kZWQgd2l0aCBcIl9fXCIgYW5kIHRoZSAkbmFtZVxuQG1peGluIGUoJG5hbWUpIHtcblx0QGF0LXJvb3QgI3smfV8jeyRuYW1lfSB7XG5cdFx0QGNvbnRlbnQ7XG5cdH1cbn1cblxuLy8gbW9kaWZpZXJzIGdldCBhcHBlbmRlZCB3aXRoIFwiLS1cIiBhbmQgdGhlICRuYW1lXG5AbWl4aW4gbSgkbmFtZSkge1xuXHRAYXQtcm9vdCAjeyZ9LS0jeyRuYW1lfSB7XG5cdFx0QGNvbnRlbnQ7XG5cdH1cbn1cblxuLy8gYnJlYWtwb2ludHNcbkBtaXhpbiBiKCRwb2ludCkge1xuXHRAaWYgJHBvaW50PT1kZXNrdG9wIHtcblx0XHRAbWVkaWEgKG1heC13aWR0aDogMTM2NnB4KSBhbmQgKG1pbi13aWR0aDoxMDI0cHgpIHtcblx0XHRcdEBjb250ZW50IDtcblx0XHR9XG5cdH1cblxuXHRAZWxzZSBpZiAkcG9pbnQ9PXRhYmxldCB7XG5cdFx0QG1lZGlhIChtYXgtd2lkdGg6IDEwMDBweCkge1xuXHRcdFx0QGNvbnRlbnQgO1xuXHRcdH1cblx0fVxuXG5cdEBlbHNlIGlmICRwb2ludD09bW9iaWxlIHtcblx0XHRAbWVkaWEgKG1heC13aWR0aDogNzY3cHgpIHtcblx0XHRcdEBjb250ZW50IDtcblx0XHR9XG5cdH1cblxuXHRAZWxzZSBpZiAkcG9pbnQ9PW1vYmlsZTN4IHtcblxuXHRcdEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKC13ZWJraXQtbWluLWRldmljZS1waXhlbC1yYXRpbzogMyksXG5cdFx0b25seSBzY3JlZW4gYW5kIChtaW4tcmVzb2x1dGlvbjogM2RwcHgpLFxuXHRcdG9ubHkgc2NyZWVuIGFuZCAobWluLXJlc29sdXRpb246IDM1MGRwaSkge1xuXHRcdFx0QGNvbnRlbnQgO1xuXHRcdH1cblx0fVxuXG5cdEBlbHNlIHtcblx0XHRAbWVkaWEgKG1heC13aWR0aDogJHBvaW50ICsgJ3B4Jykge1xuXHRcdFx0QGNvbnRlbnQgO1xuXHRcdH1cblx0fVxufVxuXG4vLyBicmVha3BvaW50c1xuQG1peGluIGJiKCRwb2ludE1heCwgJHBvaW50TWluKSB7XG5cdEBtZWRpYSAobWF4LXdpZHRoOiAkcG9pbnRNYXggKyAncHgnKSBhbmQgKG1pbi13aWR0aDogJHBvaW50TWluICsgJ3B4Jykge1xuXHRcdEBjb250ZW50IDtcblx0fVxufVxuXG5AbWl4aW4gaWUoKSB7XG5cblx0QG1lZGlhIHNjcmVlbiBhbmQgKC1tcy1oaWdoLWNvbnRyYXN0OiBhY3RpdmUpLFxuXHQoLW1zLWhpZ2gtY29udHJhc3Q6IG5vbmUpIHtcblx0XHRAY29udGVudCA7XG5cdH1cbn1cblxuQG1peGluIGJlZm9yZS1pbWcoJGRpc3BsYXksICR3aWR0aCwgJGhlaWdodCwgJHBvc2l0aW9uKSB7XG5cdEBhdC1yb290ICN7Jn06YmVmb3JlIHtcblx0XHRjb250ZW50OiAnJztcblx0XHRkaXNwbGF5OiAkZGlzcGxheTtcblxuXHRcdEBpZiAkcG9zaXRpb249PWEge1xuXHRcdFx0cG9zaXRpb246IGFic29sdXRlO1xuXHRcdH1cblxuXHRcdEBpZiAkcG9zaXRpb249PXIge1xuXHRcdFx0cG9zaXRpb246IHJlbGF0aXZlO1xuXHRcdH1cblxuXHRcdHdpZHRoOiAkd2lkdGg7XG5cdFx0aGVpZ2h0OiAkaGVpZ2h0O1xuXHRcdEBjb250ZW50O1xuXHR9XG59XG5cbkBtaXhpbiBhZnRlci1pbWcoJGRpc3BsYXksICR3aWR0aCwgJGhlaWdodCwgJHBvc2l0aW9uKSB7XG5cdEBhdC1yb290ICN7Jn06YWZ0ZXIge1xuXHRcdGNvbnRlbnQ6ICcnO1xuXHRcdGRpc3BsYXk6ICRkaXNwbGF5O1xuXG5cdFx0QGlmICRwb3NpdGlvbj09YSB7XG5cdFx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XG5cdFx0fVxuXG5cdFx0QGlmICRwb3NpdGlvbj09ciB7XG5cdFx0XHRwb3NpdGlvbjogcmVsYXRpdmU7XG5cdFx0fVxuXG5cdFx0d2lkdGg6ICR3aWR0aDtcblx0XHRoZWlnaHQ6ICRoZWlnaHQ7XG5cdFx0QGNvbnRlbnQ7XG5cdH1cbn1cblxuLyogcmVtIGZvbnQgc2l6ZSB3aXRoIGZhbGxiYWNrIHwgdXNhZ2U6XG5cdHAge1xuXHRcdEBpbmNsdWRlIGZvbnQtc2l6ZSgxNHB4KVxuXHR9Ki9cblxuQGZ1bmN0aW9uIGNhbGN1bGF0ZVJlbSgkc2l6ZSkge1xuXHQkcmVtU2l6ZTogJHNpemUgLyAxNnB4O1xuXHRAcmV0dXJuICRyZW1TaXplICogMXJlbTtcbn1cblxuQG1peGluIGZvbnQtc2l6ZSgkc2l6ZSkge1xuXHRmb250LXNpemU6ICRzaXplO1xuXHRmb250LXNpemU6IGNhbGN1bGF0ZVJlbSgkc2l6ZSk7XG59XG5cbkBtaXhpbiB0ZXh0Q3V0KCRjb2wsICRoZWlnaHQpIHtcblx0ZGlzcGxheTogLXdlYmtpdC1ib3g7XG5cdC13ZWJraXQtbGluZS1jbGFtcDogJGNvbDtcblx0LXdlYmtpdC1ib3gtb3JpZW50OiB2ZXJ0aWNhbDtcblx0b3ZlcmZsb3c6IGhpZGRlbjtcblx0bWF4LWhlaWdodDogJGhlaWdodDtcbn1cblxuLy8gYnV0dG9uc1xuXG5AbWl4aW4gYnRuLWdyYWRpZW50KCRjVGV4dCwgJGNIb3ZlciwgJGRpcmVjdGlvbiwgJGNGaXJzdCwgJGNTZWNvbnMsICRjVGhpcmQsICRob3Zlcikge1xuXHRjb2xvcjogJGNUZXh0O1xuXHR0cmFuc2l0aW9uOiAwLjVzO1xuXHRiYWNrZ3JvdW5kLXNpemU6IDIwMCUgYXV0bztcblx0YmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KCRkaXJlY3Rpb24sICRjRmlyc3QgMCUsICRjU2Vjb25zIDUxJSwgJGNUaGlyZCAxMDAlKTtcblxuXHQmOmhvdmVyIHtcblx0XHR0ZXh0LWRlY29yYXRpb246IG5vbmU7XG5cdFx0YmFja2dyb3VuZC1wb3NpdGlvbjogJGhvdmVyO1xuXHRcdGNvbG9yOiAkY0hvdmVyO1xuXHRcdGJveC1zaGFkb3c6IDBweCAyMHB4IDMwcHggLTE1cHggJGNUaGlyZDtcblx0fVxufVxuXG5AbWl4aW4gZ3JhZGllbnQoJHRvcCwgJGJvdHRvbSkge1xuXHRiYWNrZ3JvdW5kOiAkdG9wO1xuXHRiYWNrZ3JvdW5kOiAtbW96LWxpbmVhci1ncmFkaWVudCh0b3AsICR0b3AgMCUsICRib3R0b20gMTAwJSk7XG5cdGJhY2tncm91bmQ6IC13ZWJraXQtZ3JhZGllbnQobGluZWFyLCBsZWZ0IHRvcCwgbGVmdCBib3R0b20sIGNvbG9yLXN0b3AoMCUsICR0b3ApLCBjb2xvci1zdG9wKDEwMCUsICRib3R0b20pKTtcblx0YmFja2dyb3VuZDogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQodG9wLCAkdG9wIDAlLCAkYm90dG9tIDEwMCUpO1xuXHRiYWNrZ3JvdW5kOiAtby1saW5lYXItZ3JhZGllbnQodG9wLCAkdG9wIDAlLCAkYm90dG9tIDEwMCUpO1xuXHRiYWNrZ3JvdW5kOiAtbXMtbGluZWFyLWdyYWRpZW50KHRvcCwgJHRvcCAwJSwgJGJvdHRvbSAxMDAlKTtcblx0YmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgJHRvcCAwJSwgJGJvdHRvbSAxMDAlKTtcblx0ZmlsdGVyOiBwcm9naWQ6RFhJbWFnZVRyYW5zZm9ybS5NaWNyb3NvZnQuZ3JhZGllbnQoc3RhcnRDb2xvcnN0cj0nI3skdG9wfScsIGVuZENvbG9yc3RyPScjeyRib3R0b219ICcsIEdyYWRpZW50VHlwZT0wKTtcbn0iLCJAaW1wb3J0IHVybChcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1Nb250c2VycmF0OjEwMCwxMDBpLDIwMCwyMDBpLDMwMCwzMDBpLDQwMCw0MDBpLDUwMCw1MDBpLDYwMCw2MDBpLDcwMCw3MDBpLDgwMCw4MDBpLDkwMCw5MDBpJmRpc3BsYXk9c3dhcFwiKTtcbi5jbGVhcmZpeDphZnRlciB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIGRpc3BsYXk6IHRhYmxlO1xuICBjbGVhcjogYm90aDtcbn1cblxuLmNlbnRlcmVkIHtcbiAgZGlzcGxheTogdGFibGU7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG59XG4uY2VudGVyZWQgPiAqIHtcbiAgZGlzcGxheTogdGFibGUtY2VsbDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xufVxuXG4vKiByZW0gZm9udCBzaXplIHdpdGggZmFsbGJhY2sgfCB1c2FnZTpcblx0cCB7XG5cdFx0QGluY2x1ZGUgZm9udC1zaXplKDE0cHgpXG5cdH0qL1xuc2VjdGlvbi5sb2dpbiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGhlaWdodDogMTAwdmg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjhGNUVGO1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDY1MHB4KSB7XG4gIHNlY3Rpb24ubG9naW4ge1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIH1cbn1cbnNlY3Rpb24ubG9naW4gLmxvZ2luIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG59XG5zZWN0aW9uLmxvZ2luIC5sb2dpbi10ZXh0IHtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgY29sb3I6IGJsYWNrO1xuICBvcGFjaXR5OiAwLjU7XG4gIGxldHRlci1zcGFjaW5nOiAxcHg7XG59XG5zZWN0aW9uLmxvZ2luIC5sb2dpbi10ZXh0LXRpdGxlIHtcbiAgb3BhY2l0eTogMTtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgbWFyZ2luLWJvdHRvbTogNDBweCAhaW1wb3J0YW50O1xufVxuc2VjdGlvbi5sb2dpbiAubG9naW4tdGV4dC1zcGFjZXIge1xuICBkaXNwbGF5OiBibG9jaztcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW46IDE1cHggYXV0bztcbn1cbnNlY3Rpb24ubG9naW4gLmxvZ2luLWxvZ28ge1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luOiAwIGF1dG87XG4gIHdpZHRoOiAyMDBweDtcbiAgaGVpZ2h0OiAxMzBweDtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vLi4vYXNzZXRzL2ltZy9sb2dpbi9kdWNhdHVzLWxvZ2luLWxvZ28uc3ZnXCIpO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XG4gIG1hcmdpbi1ib3R0b206IDMwcHg7XG59XG5zZWN0aW9uLmxvZ2luIC5sb2dpbi1jb250YWluZXIge1xuICBtYXgtd2lkdGg6IDM5MHB4O1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZzogNDVweDtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIGJveC1zaGFkb3c6IDBweCAwcHggMTVweCAtNXB4ICMwMDAwMDA0Zjtcbn1cbnNlY3Rpb24ubG9naW4gLmxvZ2luLWNvbnRhaW5lciAuYnV0dG9ucy1zd2l0Y2gge1xuICBkaXNwbGF5OiBmbGV4O1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luLWJvdHRvbTogMzBweDtcbn1cbnNlY3Rpb24ubG9naW4gLmxvZ2luLWNvbnRhaW5lciAuYnV0dG9ucy1zd2l0Y2ggLmFjdGl2ZSB7XG4gIGNvbG9yOiAjODkyNzM0O1xuICBmb250LXdlaWdodDogNjAwO1xuICBjdXJzb3I6IGRlZmF1bHQ7XG59XG5zZWN0aW9uLmxvZ2luIC5sb2dpbi1jb250YWluZXIgLmJ1dHRvbnMtc3dpdGNoIC5hY3RpdmU6YWZ0ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjODkyNzM0O1xufVxuc2VjdGlvbi5sb2dpbiAubG9naW4tY29udGFpbmVyIC5idXR0b25zLXN3aXRjaC1pdGVtIHtcbiAgZGlzcGxheTogZmxleDtcbiAgd2lkdGg6IDUwJTtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgY29sb3I6IGJsYWNrO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5zZWN0aW9uLmxvZ2luIC5sb2dpbi1jb250YWluZXIgLmJ1dHRvbnMtc3dpdGNoLWl0ZW06YWZ0ZXIge1xuICBjb250ZW50OiBcIlwiO1xuICBoZWlnaHQ6IDNweDtcbiAgd2lkdGg6IDEwMCU7XG4gIGJhY2tncm91bmQtY29sb3I6ICNGNEVGRTg7XG4gIG1hcmdpbi10b3A6IDEycHg7XG59XG5zZWN0aW9uLmxvZ2luIC5sb2dpbi1mb3JtIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XG4gIGdyaWQtZ2FwOiAxN3B4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbnNlY3Rpb24ubG9naW4gLmxvZ2luLWZvcm0gLmxhYmVsIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBsaW5lLWhlaWdodDogMTdweDtcbiAgY29sb3I6ICM0MDQwNDA7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIG1hcmdpbi1ib3R0b206IC03cHg7XG59XG5zZWN0aW9uLmxvZ2luIC5sb2dpbi1mb3JtIGlucHV0Lm5nLXRvdWNoZWQubmctaW52YWxpZCB7XG4gIGJvcmRlcjogc29saWQgIzg5MjczNCAxcHg7XG59XG5zZWN0aW9uLmxvZ2luIC5sb2dpbi1mb3JtIC5pbnB1dCB7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nOiA1cHg7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xuICBiYWNrZ3JvdW5kOiAjRkJGOUY2O1xuICBib3JkZXI6IDFweCBzb2xpZCAjRTBFMEUwO1xuICBjb2xvcjogYmxhY2s7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgb3V0bGluZTogbm9uZTtcbiAgcGFkZGluZzogMjBweCAxMHB4O1xuICBmb250LXdlaWdodDogNDAwO1xuICBmb250LWZhbWlseTogXCJNb250c2VycmF0XCI7XG4gIGxldHRlci1zcGFjaW5nOiAxcHg7XG59XG5zZWN0aW9uLmxvZ2luIC5sb2dpbi1mb3JtIC5kdWNhdHVzLWJ0biB7XG4gIGJvcmRlci1yYWRpdXM6IDMzcHg7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgbWF4LXdpZHRoOiAyMDBweDtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIGxldHRlci1zcGFjaW5nOiAxcHg7XG59XG5zZWN0aW9uLmxvZ2luIC5sb2dpbi1mb3JtIC5pY29uX19sb2FkaW5nIHtcbiAgbWluLXdpZHRoOiA1MHB4O1xuICB0cmFuc2l0aW9uOiAwLjRzIGVhc2U7XG59IiwiQGltcG9ydCBcIi4uLy4uLy4uL3Njc3MvdmFyc1wiO1xuQGltcG9ydCBcIi4uLy4uLy4uL3Njc3MvbWl4aW5zXCI7XG5cbnNlY3Rpb24ubG9naW4ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBoZWlnaHQ6IDEwMHZoO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0Y4RjVFRjtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblxuICBAaW5jbHVkZSBiKDY1MCkge1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIH1cblxuICAubG9naW4ge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG5cbiAgICAmLXRleHQge1xuICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICAgIGNvbG9yOiBibGFjaztcbiAgICAgIG9wYWNpdHk6IDAuNTtcbiAgICAgIGxldHRlci1zcGFjaW5nOiAxcHg7XG5cbiAgICAgICYtdGl0bGUge1xuICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgICBtYXJnaW4tYm90dG9tOiA0MHB4ICFpbXBvcnRhbnQ7XG4gICAgICB9XG5cbiAgICAgICYtc3BhY2VyIHtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgbWFyZ2luOiAxNXB4IGF1dG87XG4gICAgICB9XG4gICAgfVxuXG4gICAgJi1sb2dvICB7XG4gICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgIG1hcmdpbjogMCBhdXRvO1xuICAgICAgd2lkdGg6IDIwMHB4O1xuICAgICAgaGVpZ2h0OiAxMzBweDtcbiAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vLi4vLi4vYXNzZXRzL2ltZy9sb2dpbi9kdWNhdHVzLWxvZ2luLWxvZ28uc3ZnJyk7XG4gICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgICAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xuICAgICAgbWFyZ2luLWJvdHRvbTogMzBweDtcbiAgICB9XG5cbiAgICAmLWNvbnRhaW5lciB7XG4gICAgICBtYXgtd2lkdGg6IDM5MHB4O1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICBwYWRkaW5nOiA0NXB4O1xuICAgICAgbWFyZ2luOiAwIGF1dG87XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICAgIGJveC1zaGFkb3c6IDBweCAwcHggMTVweCAtNXB4ICMwMDAwMDA0ZjtcblxuICAgICAgLmJ1dHRvbnMtc3dpdGNoIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XG5cbiAgICAgICAgLmFjdGl2ZSB7XG4gICAgICAgICAgY29sb3I6ICRicm93bi1yZWQ7XG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgICBjdXJzb3I6IGRlZmF1bHQ7XG5cbiAgICAgICAgICAmOmFmdGVyIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRicm93bi1yZWQ7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgJi1pdGVtIHtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIHdpZHRoOiA1MCU7XG4gICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICBmb250LXdlaWdodDogMzAwO1xuICAgICAgICAgIGNvbG9yOiBibGFjaztcbiAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG5cbiAgICAgICAgICAmOmFmdGVyIHtcbiAgICAgICAgICAgIGNvbnRlbnQ6ICcnO1xuICAgICAgICAgICAgaGVpZ2h0OiAzcHg7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNGNEVGRTg7XG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAxMnB4O1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgICYtZm9ybSB7XG4gICAgICBkaXNwbGF5OiBncmlkO1xuICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XG4gICAgICBncmlkLWdhcDogMTdweDtcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcblxuICAgICAgLmxhYmVsIHtcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICBsaW5lLWhlaWdodDogMTdweDtcbiAgICAgICAgY29sb3I6ICM0MDQwNDA7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiAzMDA7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IC03cHg7XG4gICAgICB9XG5cbiAgICAgIGlucHV0Lm5nLXRvdWNoZWQubmctaW52YWxpZCB7XG4gICAgICAgIGJvcmRlcjogc29saWQgJGJyb3duLXJlZCAxcHg7XG4gICAgICB9XG5cbiAgICAgIC5pbnB1dCB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBwYWRkaW5nOiA1cHg7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xuICAgICAgICBiYWNrZ3JvdW5kOiAjRkJGOUY2O1xuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjRTBFMEUwO1xuICAgICAgICBjb2xvcjogYmxhY2s7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICAgICAgb3V0bGluZTogbm9uZTtcbiAgICAgICAgcGFkZGluZzogMjBweCAxMHB4O1xuICAgICAgICBmb250LXdlaWdodDogNDAwO1xuICAgICAgICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnO1xuICAgICAgICBsZXR0ZXItc3BhY2luZzogMXB4O1xuICAgICAgfVxuXG4gICAgICAuZHVjYXR1cy1idG4ge1xuICAgICAgICBib3JkZXItcmFkaXVzOiAzM3B4O1xuICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICAgIG1heC13aWR0aDogMjAwcHg7XG4gICAgICAgIG1hcmdpbjogMCBhdXRvO1xuICAgICAgICBsZXR0ZXItc3BhY2luZzogMXB4O1xuICAgICAgfVxuXG4gICAgICAuaWNvbl9fbG9hZGluZyB7XG4gICAgICAgIG1pbi13aWR0aDogNTBweDtcbiAgICAgICAgdHJhbnNpdGlvbjogMC40cyBlYXNlO1xuICAgICAgfVxuICAgIH1cbiAgfVxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoginComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-login',
                templateUrl: './login.component.html',
                styleUrls: ['./login.component.scss']
            }]
    }], function () { return [{ type: src_app_service_user_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/pages/rate/rate.component.ts":
/*!**********************************************!*\
  !*** ./src/app/pages/rate/rate.component.ts ***!
  \**********************************************/
/*! exports provided: RateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RateComponent", function() { return RateComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var bignumber_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! bignumber.js */ "./node_modules/bignumber.js/bignumber.js");
/* harmony import */ var bignumber_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(bignumber_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _service_rate_rate_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../service/rate/rate.service */ "./src/app/service/rate/rate.service.ts");






class RateComponent {
    constructor(formBuilder, rateService) {
        this.formBuilder = formBuilder;
        this.rateService = rateService;
        this.rateService
            .getRates()
            .then((res) => {
            this.rateGroup = this.formBuilder.group({
                duc: [res.DUC.USD, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required])],
                ducx: [res.DUCX.USD, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required])],
            });
            this.ratio = new bignumber_js__WEBPACK_IMPORTED_MODULE_2__["BigNumber"](res.DUCX.USD).dividedBy(res.DUC.USD).toString();
        })
            .catch((res) => console.log(res, 'get rates'));
    }
    changeAmount(currency) {
        if (currency === 'duc') {
            this.rateGroup.value.ducx = new bignumber_js__WEBPACK_IMPORTED_MODULE_2__["BigNumber"](this.rateGroup.value.duc).multipliedBy(this.ratio).toString();
        }
        else {
            this.rateGroup.value.duc = new bignumber_js__WEBPACK_IMPORTED_MODULE_2__["BigNumber"](this.rateGroup.value.ducx).dividedBy(this.ratio).toString();
        }
    }
    setRates() {
        this.rateService
            .changeRates({
            DUC: +this.rateGroup.value.duc,
            DUCX: +this.rateGroup.value.ducx,
        })
            .then((res) => console.log(res, 'changeRates'))
            .catch((res) => console.log(res, 'changeRates'));
    }
}
RateComponent.ɵfac = function RateComponent_Factory(t) { return new (t || RateComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_service_rate_rate_service__WEBPACK_IMPORTED_MODULE_3__["RateService"])); };
RateComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: RateComponent, selectors: [["app-rate"]], decls: 19, vars: 4, consts: [[1, "section-header-page", 2, "background-image", "url(/assets/img/sections/vaucher-bg.png)"], [1, "container"], [1, "h1__title-page"], [1, "app", "rate"], [1, "rate__form", 3, "formGroup", "ngSubmit"], [1, "rate__form-wrapper"], [1, "rate__form-box"], [1, "rate__form-label"], ["type", "number", "formControlName", "duc", 1, "rate__form-input", 3, "value", "ngModelChange"], ["src", "/assets/img/rate/arrow.svg", "alt", "arrow", 1, "rate__form-arrow"], ["type", "number", "formControlName", "ducx", 1, "rate__form-input", 3, "value", "ngModelChange"], [1, "rate__form-btn", "ducatus-btn", 3, "disabled"]], template: function RateComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "DUC/DUCX Price");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "section", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "form", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function RateComponent_Template_form_ngSubmit_6_listener() { return ctx.setRates(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "label", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "DUC price");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function RateComponent_Template_input_ngModelChange_11_listener() { return ctx.changeAmount("duc"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "img", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "label", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "DUCX price");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function RateComponent_Template_input_ngModelChange_16_listener() { return ctx.changeAmount("ducx"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Apply");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.rateGroup);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx.rateGroup.value.duc);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx.rateGroup.value.ducx);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx.rateGroup.value.duc || !ctx.rateGroup.value.ducx);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NumberValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"]], styles: ["@import url(\"https://fonts.googleapis.com/css?family=Montserrat:100,100i,200,200i,300,300i,400,400i,500,500i,600,600i,700,700i,800,800i,900,900i&display=swap\");\n.clearfix[_ngcontent-%COMP%]:after {\n  content: \"\";\n  display: table;\n  clear: both;\n}\n.centered[_ngcontent-%COMP%] {\n  display: table;\n  width: 100%;\n  height: 100%;\n}\n.centered[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\n  display: table-cell;\n  text-align: center;\n  vertical-align: middle;\n}\n\n.rate[_ngcontent-%COMP%] {\n  padding-top: 60px;\n}\n@media (max-width: 767px) {\n  .rate[_ngcontent-%COMP%] {\n    padding: 40px 15px;\n  }\n}\n.rate__form-wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n@media (max-width: 1024px) {\n  .rate__form-wrapper[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n}\n.rate__form-arrow[_ngcontent-%COMP%] {\n  width: 20px;\n  height: 22px;\n  margin: 0 10px -29px;\n}\n@media (max-width: 1024px) {\n  .rate__form-arrow[_ngcontent-%COMP%] {\n    opacity: 0;\n    margin: 5px 0;\n  }\n}\n.rate__form-label[_ngcontent-%COMP%] {\n  font-size: 14px;\n  line-height: 17px;\n  margin-bottom: 10px;\n}\n.rate__form-btn[_ngcontent-%COMP%] {\n  background: #892734;\n  border-radius: 33px;\n  margin: 35px auto 0;\n}\n@media (max-width: 1024px) {\n  .rate__form-box[_ngcontent-%COMP%]    + .rate__form-box[_ngcontent-%COMP%] {\n    margin-top: 15px;\n  }\n}\n@media (max-width: 767px) {\n  .rate__form-box[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\n.rate__form-input[_ngcontent-%COMP%] {\n  background: #fbf9f6;\n  border: 1px solid #e0e0e0;\n  border-radius: 4px;\n  padding: 20px 15px;\n  width: 400px;\n  font-weight: bold;\n  font-size: 26px;\n  line-height: 32px;\n}\n@media (max-width: 767px) {\n  .rate__form-input[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\n.rate__form-input[_ngcontent-%COMP%]:hover, .rate__form-input[_ngcontent-%COMP%]:focus {\n  outline: none;\n}\n.rate__form-input[_ngcontent-%COMP%]::-webkit-outer-spin-button, .rate__form-input[_ngcontent-%COMP%]::-webkit-inner-spin-button {\n  -webkit-appearance: none;\n  margin: 0;\n}\n.rate__form-input[type=number][_ngcontent-%COMP%] {\n  -moz-appearance: textfield;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9nbGViL3Byb2plY3RzL2R1Y2F0dXMtc2l0ZS9zcmMvc2Nzcy9fdmFycy5zY3NzIiwiL1VzZXJzL2dsZWIvcHJvamVjdHMvZHVjYXR1cy1zaXRlL3NyYy9zY3NzL19taXhpbnMuc2NzcyIsInNyYy9hcHAvcGFnZXMvcmF0ZS9yYXRlLmNvbXBvbmVudC5zY3NzIiwiL1VzZXJzL2dsZWIvcHJvamVjdHMvZHVjYXR1cy1zaXRlL3NyYy9hcHAvcGFnZXMvcmF0ZS9yYXRlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUlRLCtKQUFBO0FDMkJSO0VBQ0MsV0FBQTtFQUNBLGNBQUE7RUFDQSxXQUFBO0FDN0JEO0FEZ0NBO0VBQ0MsY0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FDN0JEO0FEK0JDO0VBQ0MsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLHNCQUFBO0FDN0JGO0FEeU1BOzs7R0FBQTtBRXROQTtFQUNFLGlCQUFBO0FEb0JGO0FEdUhFO0VFNUlGO0lBR0ksa0JBQUE7RURzQkY7QUFDRjtBQ3BCSTtFQUNFLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FEc0JOO0FENEhFO0VFckpFO0lBS0ksc0JBQUE7RUR3Qk47QUFDRjtBQ3RCSTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0Esb0JBQUE7QUR3Qk47QURrSEU7RUU3SUU7SUFLSSxVQUFBO0lBQ0EsYUFBQTtFRDBCTjtBQUNGO0FDeEJJO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7QUQwQk47QUN4Qkk7RUFDRSxtQkhOTTtFR09OLG1CQUFBO0VBQ0EsbUJBQUE7QUQwQk47QURrR0U7RUV6SEk7SUFFSSxnQkFBQTtFRHlCUjtBQUNGO0FEOEVFO0VFM0dFO0lBT0ksV0FBQTtFRDBCTjtBQUNGO0FDeEJJO0VBQ0UsbUJBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7QUQwQk47QUQrREU7RUVqR0U7SUFVSSxXQUFBO0VENEJOO0FBQ0Y7QUMzQk07RUFFRSxhQUFBO0FENEJSO0FDMUJNO0VBRUUsd0JBQUE7RUFDQSxTQUFBO0FEMkJSO0FDeEJNO0VBQ0UsMEJBQUE7QUQwQlIiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9yYXRlL3JhdGUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIG1haW4gdmFyaWFibGVzXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1Nb250c2VycmF0OjEwMCwxMDBpLDIwMCwyMDBpLDMwMCwzMDBpLDQwMCw0MDBpLDUwMCw1MDBpLDYwMCw2MDBpLDcwMCw3MDBpLDgwMCw4MDBpLDkwMCw5MDBpJmRpc3BsYXk9c3dhcCcpO1xuXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIGFkZGl0aW9uYWwgdmFyaWFibGVzXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIGNvbG9yc1xuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbiRibGFjazogIzAwMDtcbiRncmF5OiAjODA4MDgwO1xuJHdoaXRlOiAjZmZmO1xuJGJsdWU6ICMwMEY7XG4kcHVycGxlOiAjOEE0RDc2O1xuJHBpbms6ICNGQTdDOTE7XG4kYnJvd246ICM3NTc3NjM7XG4kYmVpZ2UtbGlnaHQ6ICNEMEQxQ0Q7XG4kYmVpZ2UtbGlnaHRlci0xOiAjRUZGMEVCO1xuJGJlaWdlLWxpZ2h0ZXItMjogI0Y0RjRGNDtcblxuJGJyb3duLXJlZDogIzg5MjczNDtcbiRnb2xkLXllbGxvdzogI0U4QzIyQztcbiRkYXJrLWdyZXk6ICMyMzI0MWY7XG4kZ3JleTogIzRkNGM0ZDtcbiRnb2xkOiAjRDNDMTk4O1xuJGdvbGQtMjogI0YwRUFFMztcbiIsIi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gbWFpbiBtaXhpbnNcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG5AbWl4aW4gZm9udC1mYWNlKCRmb250LWZhbWlseSwgJGZpbGUtcGF0aCwgJHdlaWdodDogbm9ybWFsLCAkc3R5bGU6IG5vcm1hbCwgJGFzc2V0LXBpcGVsaW5lOiBmYWxzZSkge1xuXHRAZm9udC1mYWNlIHtcblx0XHRmb250LWZhbWlseTogJGZvbnQtZmFtaWx5O1xuXHRcdGZvbnQtd2VpZ2h0OiAkd2VpZ2h0O1xuXHRcdGZvbnQtc3R5bGU6ICRzdHlsZTtcblxuXHRcdEBpZiAkYXNzZXQtcGlwZWxpbmU9PXRydWUge1xuXHRcdFx0c3JjOiBmb250LXVybCgnI3skZmlsZS1wYXRofS5lb3QnKTtcblx0XHRcdHNyYzogZm9udC11cmwoJyN7JGZpbGUtcGF0aH0uZW90PyNpZWZpeCcpIGZvcm1hdCgnZW1iZWRkZWQtb3BlbnR5cGUnKSxcblx0XHRcdGZvbnQtdXJsKCcjeyRmaWxlLXBhdGh9LndvZmYnKSBmb3JtYXQoJ3dvZmYnKSxcblx0XHRcdGZvbnQtdXJsKCcjeyRmaWxlLXBhdGh9LnR0ZicpIGZvcm1hdCgndHJ1ZXR5cGUnKTtcblx0XHR9XG5cblx0XHRAZWxzZSB7XG5cdFx0XHRzcmM6IHVybCgnI3skZmlsZS1wYXRofS5lb3QnKTtcblx0XHRcdHNyYzogdXJsKCcjeyRmaWxlLXBhdGh9LmVvdD8jaWVmaXgnKSBmb3JtYXQoJ2VtYmVkZGVkLW9wZW50eXBlJyksXG5cdFx0XHR1cmwoJyN7JGZpbGUtcGF0aH0ud29mZicpIGZvcm1hdCgnd29mZicpLFxuXHRcdFx0dXJsKCcjeyRmaWxlLXBhdGh9LnR0ZicpIGZvcm1hdCgndHJ1ZXR5cGUnKTtcblx0XHR9XG5cdH1cbn1cblxuQG1peGluIG5vdGV4dCB7XG5cdG92ZXJmbG93OiBoaWRkZW47XG5cdHRleHQtaW5kZW50OiAtOTk5OXB4O1xufVxuXG4uY2xlYXJmaXg6YWZ0ZXIge1xuXHRjb250ZW50OiBcIlwiO1xuXHRkaXNwbGF5OiB0YWJsZTtcblx0Y2xlYXI6IGJvdGg7XG59XG5cbi5jZW50ZXJlZCB7XG5cdGRpc3BsYXk6IHRhYmxlO1xuXHR3aWR0aDogMTAwJTtcblx0aGVpZ2h0OiAxMDAlO1xuXG5cdD4qIHtcblx0XHRkaXNwbGF5OiB0YWJsZS1jZWxsO1xuXHRcdHRleHQtYWxpZ246IGNlbnRlcjtcblx0XHR2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuXHR9XG59XG5cbkBtaXhpbiBwbGFjZWhvbGRlckNvbG9yKCRpbnB1dC10ZXh0LWNvbG9yKSB7XG5cdCY6Oi13ZWJraXQtaW5wdXQtcGxhY2Vob2xkZXIge1xuXHRcdGNvbG9yOiAkaW5wdXQtdGV4dC1jb2xvcjtcblx0fVxuXG5cdCY6LW1vei1wbGFjZWhvbGRlciB7XG5cdFx0Y29sb3I6ICRpbnB1dC10ZXh0LWNvbG9yO1xuXHRcdG9wYWNpdHk6IDE7XG5cdH1cblxuXHQmOjotbW96LXBsYWNlaG9sZGVyIHtcblx0XHRjb2xvcjogJGlucHV0LXRleHQtY29sb3I7XG5cdFx0b3BhY2l0eTogMTtcblx0fVxuXG5cdCY6LW1zLWlucHV0LXBsYWNlaG9sZGVyIHtcblx0XHRjb2xvcjogJGlucHV0LXRleHQtY29sb3I7XG5cdH1cblxuXHQmOjpwbGFjZWhvbGRlciB7XG5cdFx0Y29sb3I6ICRpbnB1dC10ZXh0LWNvbG9yO1xuXHRcdG9wYWNpdHk6IDE7XG5cdH1cblxuXHQmOmZvY3VzOi1tb3otcGxhY2Vob2xkZXIge1xuXHRcdGNvbG9yOiB0cmFuc3BhcmVudDtcblx0XHRvcGFjaXR5OiAxO1xuXHR9XG5cblx0Jjpmb2N1czo6LW1vei1wbGFjZWhvbGRlciB7XG5cdFx0Y29sb3I6IHRyYW5zcGFyZW50O1xuXHRcdG9wYWNpdHk6IDE7XG5cdH1cblxuXHQmOmZvY3VzOjotd2Via2l0LWlucHV0LXBsYWNlaG9sZGVyIHtcblx0XHRjb2xvcjogdHJhbnNwYXJlbnQ7XG5cdH1cblxuXHQmOmZvY3VzOi1tcy1pbnB1dC1wbGFjZWhvbGRlciB7XG5cdFx0Y29sb3I6IHRyYW5zcGFyZW50O1xuXHR9XG5cblx0Jjpmb2N1czo6cGxhY2Vob2xkZXIge1xuXHRcdGNvbG9yOiB0cmFuc3BhcmVudDtcblx0fVxufVxuXG5AbWl4aW4gY2xlYXJmaXgge1xuXHQmOmFmdGVyIHtcblx0XHRjb250ZW50OiBcIiBcIjtcblx0XHRkaXNwbGF5OiBibG9jaztcblx0XHRjbGVhcjogYm90aDtcblx0fVxufVxuXG4vLyBjbGVhciBzZWxlY3Qgd2l0aG91dCBkZWZhdWx0IGJ1dHRvblxuQG1peGluIGNsZWFyU2VsZWN0IHtcblx0LXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xuXHQtbW96LWFwcGVhcmFuY2U6IG5vbmU7XG5cdGFwcGVhcmFuY2U6IG5vbmU7XG5cdC13ZWJraXQtYm9yZGVyLXJhZGl1czogMDtcblx0LW1vei1ib3JkZXItcmFkaXVzOiAwO1xuXHRib3JkZXItcmFkaXVzOiAwO1xufVxuXG4vLyBlbGVtZW50cyBnZXQgYXBwZW5kZWQgd2l0aCBcIl9fXCIgYW5kIHRoZSAkbmFtZVxuQG1peGluIGUoJG5hbWUpIHtcblx0QGF0LXJvb3QgI3smfV8jeyRuYW1lfSB7XG5cdFx0QGNvbnRlbnQ7XG5cdH1cbn1cblxuLy8gbW9kaWZpZXJzIGdldCBhcHBlbmRlZCB3aXRoIFwiLS1cIiBhbmQgdGhlICRuYW1lXG5AbWl4aW4gbSgkbmFtZSkge1xuXHRAYXQtcm9vdCAjeyZ9LS0jeyRuYW1lfSB7XG5cdFx0QGNvbnRlbnQ7XG5cdH1cbn1cblxuLy8gYnJlYWtwb2ludHNcbkBtaXhpbiBiKCRwb2ludCkge1xuXHRAaWYgJHBvaW50PT1kZXNrdG9wIHtcblx0XHRAbWVkaWEgKG1heC13aWR0aDogMTM2NnB4KSBhbmQgKG1pbi13aWR0aDoxMDI0cHgpIHtcblx0XHRcdEBjb250ZW50IDtcblx0XHR9XG5cdH1cblxuXHRAZWxzZSBpZiAkcG9pbnQ9PXRhYmxldCB7XG5cdFx0QG1lZGlhIChtYXgtd2lkdGg6IDEwMDBweCkge1xuXHRcdFx0QGNvbnRlbnQgO1xuXHRcdH1cblx0fVxuXG5cdEBlbHNlIGlmICRwb2ludD09bW9iaWxlIHtcblx0XHRAbWVkaWEgKG1heC13aWR0aDogNzY3cHgpIHtcblx0XHRcdEBjb250ZW50IDtcblx0XHR9XG5cdH1cblxuXHRAZWxzZSBpZiAkcG9pbnQ9PW1vYmlsZTN4IHtcblxuXHRcdEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKC13ZWJraXQtbWluLWRldmljZS1waXhlbC1yYXRpbzogMyksXG5cdFx0b25seSBzY3JlZW4gYW5kIChtaW4tcmVzb2x1dGlvbjogM2RwcHgpLFxuXHRcdG9ubHkgc2NyZWVuIGFuZCAobWluLXJlc29sdXRpb246IDM1MGRwaSkge1xuXHRcdFx0QGNvbnRlbnQgO1xuXHRcdH1cblx0fVxuXG5cdEBlbHNlIHtcblx0XHRAbWVkaWEgKG1heC13aWR0aDogJHBvaW50ICsgJ3B4Jykge1xuXHRcdFx0QGNvbnRlbnQgO1xuXHRcdH1cblx0fVxufVxuXG4vLyBicmVha3BvaW50c1xuQG1peGluIGJiKCRwb2ludE1heCwgJHBvaW50TWluKSB7XG5cdEBtZWRpYSAobWF4LXdpZHRoOiAkcG9pbnRNYXggKyAncHgnKSBhbmQgKG1pbi13aWR0aDogJHBvaW50TWluICsgJ3B4Jykge1xuXHRcdEBjb250ZW50IDtcblx0fVxufVxuXG5AbWl4aW4gaWUoKSB7XG5cblx0QG1lZGlhIHNjcmVlbiBhbmQgKC1tcy1oaWdoLWNvbnRyYXN0OiBhY3RpdmUpLFxuXHQoLW1zLWhpZ2gtY29udHJhc3Q6IG5vbmUpIHtcblx0XHRAY29udGVudCA7XG5cdH1cbn1cblxuQG1peGluIGJlZm9yZS1pbWcoJGRpc3BsYXksICR3aWR0aCwgJGhlaWdodCwgJHBvc2l0aW9uKSB7XG5cdEBhdC1yb290ICN7Jn06YmVmb3JlIHtcblx0XHRjb250ZW50OiAnJztcblx0XHRkaXNwbGF5OiAkZGlzcGxheTtcblxuXHRcdEBpZiAkcG9zaXRpb249PWEge1xuXHRcdFx0cG9zaXRpb246IGFic29sdXRlO1xuXHRcdH1cblxuXHRcdEBpZiAkcG9zaXRpb249PXIge1xuXHRcdFx0cG9zaXRpb246IHJlbGF0aXZlO1xuXHRcdH1cblxuXHRcdHdpZHRoOiAkd2lkdGg7XG5cdFx0aGVpZ2h0OiAkaGVpZ2h0O1xuXHRcdEBjb250ZW50O1xuXHR9XG59XG5cbkBtaXhpbiBhZnRlci1pbWcoJGRpc3BsYXksICR3aWR0aCwgJGhlaWdodCwgJHBvc2l0aW9uKSB7XG5cdEBhdC1yb290ICN7Jn06YWZ0ZXIge1xuXHRcdGNvbnRlbnQ6ICcnO1xuXHRcdGRpc3BsYXk6ICRkaXNwbGF5O1xuXG5cdFx0QGlmICRwb3NpdGlvbj09YSB7XG5cdFx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XG5cdFx0fVxuXG5cdFx0QGlmICRwb3NpdGlvbj09ciB7XG5cdFx0XHRwb3NpdGlvbjogcmVsYXRpdmU7XG5cdFx0fVxuXG5cdFx0d2lkdGg6ICR3aWR0aDtcblx0XHRoZWlnaHQ6ICRoZWlnaHQ7XG5cdFx0QGNvbnRlbnQ7XG5cdH1cbn1cblxuLyogcmVtIGZvbnQgc2l6ZSB3aXRoIGZhbGxiYWNrIHwgdXNhZ2U6XG5cdHAge1xuXHRcdEBpbmNsdWRlIGZvbnQtc2l6ZSgxNHB4KVxuXHR9Ki9cblxuQGZ1bmN0aW9uIGNhbGN1bGF0ZVJlbSgkc2l6ZSkge1xuXHQkcmVtU2l6ZTogJHNpemUgLyAxNnB4O1xuXHRAcmV0dXJuICRyZW1TaXplICogMXJlbTtcbn1cblxuQG1peGluIGZvbnQtc2l6ZSgkc2l6ZSkge1xuXHRmb250LXNpemU6ICRzaXplO1xuXHRmb250LXNpemU6IGNhbGN1bGF0ZVJlbSgkc2l6ZSk7XG59XG5cbkBtaXhpbiB0ZXh0Q3V0KCRjb2wsICRoZWlnaHQpIHtcblx0ZGlzcGxheTogLXdlYmtpdC1ib3g7XG5cdC13ZWJraXQtbGluZS1jbGFtcDogJGNvbDtcblx0LXdlYmtpdC1ib3gtb3JpZW50OiB2ZXJ0aWNhbDtcblx0b3ZlcmZsb3c6IGhpZGRlbjtcblx0bWF4LWhlaWdodDogJGhlaWdodDtcbn1cblxuLy8gYnV0dG9uc1xuXG5AbWl4aW4gYnRuLWdyYWRpZW50KCRjVGV4dCwgJGNIb3ZlciwgJGRpcmVjdGlvbiwgJGNGaXJzdCwgJGNTZWNvbnMsICRjVGhpcmQsICRob3Zlcikge1xuXHRjb2xvcjogJGNUZXh0O1xuXHR0cmFuc2l0aW9uOiAwLjVzO1xuXHRiYWNrZ3JvdW5kLXNpemU6IDIwMCUgYXV0bztcblx0YmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KCRkaXJlY3Rpb24sICRjRmlyc3QgMCUsICRjU2Vjb25zIDUxJSwgJGNUaGlyZCAxMDAlKTtcblxuXHQmOmhvdmVyIHtcblx0XHR0ZXh0LWRlY29yYXRpb246IG5vbmU7XG5cdFx0YmFja2dyb3VuZC1wb3NpdGlvbjogJGhvdmVyO1xuXHRcdGNvbG9yOiAkY0hvdmVyO1xuXHRcdGJveC1zaGFkb3c6IDBweCAyMHB4IDMwcHggLTE1cHggJGNUaGlyZDtcblx0fVxufVxuXG5AbWl4aW4gZ3JhZGllbnQoJHRvcCwgJGJvdHRvbSkge1xuXHRiYWNrZ3JvdW5kOiAkdG9wO1xuXHRiYWNrZ3JvdW5kOiAtbW96LWxpbmVhci1ncmFkaWVudCh0b3AsICR0b3AgMCUsICRib3R0b20gMTAwJSk7XG5cdGJhY2tncm91bmQ6IC13ZWJraXQtZ3JhZGllbnQobGluZWFyLCBsZWZ0IHRvcCwgbGVmdCBib3R0b20sIGNvbG9yLXN0b3AoMCUsICR0b3ApLCBjb2xvci1zdG9wKDEwMCUsICRib3R0b20pKTtcblx0YmFja2dyb3VuZDogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQodG9wLCAkdG9wIDAlLCAkYm90dG9tIDEwMCUpO1xuXHRiYWNrZ3JvdW5kOiAtby1saW5lYXItZ3JhZGllbnQodG9wLCAkdG9wIDAlLCAkYm90dG9tIDEwMCUpO1xuXHRiYWNrZ3JvdW5kOiAtbXMtbGluZWFyLWdyYWRpZW50KHRvcCwgJHRvcCAwJSwgJGJvdHRvbSAxMDAlKTtcblx0YmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgJHRvcCAwJSwgJGJvdHRvbSAxMDAlKTtcblx0ZmlsdGVyOiBwcm9naWQ6RFhJbWFnZVRyYW5zZm9ybS5NaWNyb3NvZnQuZ3JhZGllbnQoc3RhcnRDb2xvcnN0cj0nI3skdG9wfScsIGVuZENvbG9yc3RyPScjeyRib3R0b219ICcsIEdyYWRpZW50VHlwZT0wKTtcbn0iLCJAaW1wb3J0IHVybChcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1Nb250c2VycmF0OjEwMCwxMDBpLDIwMCwyMDBpLDMwMCwzMDBpLDQwMCw0MDBpLDUwMCw1MDBpLDYwMCw2MDBpLDcwMCw3MDBpLDgwMCw4MDBpLDkwMCw5MDBpJmRpc3BsYXk9c3dhcFwiKTtcbi5jbGVhcmZpeDphZnRlciB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIGRpc3BsYXk6IHRhYmxlO1xuICBjbGVhcjogYm90aDtcbn1cblxuLmNlbnRlcmVkIHtcbiAgZGlzcGxheTogdGFibGU7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG59XG4uY2VudGVyZWQgPiAqIHtcbiAgZGlzcGxheTogdGFibGUtY2VsbDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xufVxuXG4vKiByZW0gZm9udCBzaXplIHdpdGggZmFsbGJhY2sgfCB1c2FnZTpcblx0cCB7XG5cdFx0QGluY2x1ZGUgZm9udC1zaXplKDE0cHgpXG5cdH0qL1xuLnJhdGUge1xuICBwYWRkaW5nLXRvcDogNjBweDtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA3NjdweCkge1xuICAucmF0ZSB7XG4gICAgcGFkZGluZzogNDBweCAxNXB4O1xuICB9XG59XG4ucmF0ZV9fZm9ybS13cmFwcGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5AbWVkaWEgKG1heC13aWR0aDogMTAyNHB4KSB7XG4gIC5yYXRlX19mb3JtLXdyYXBwZXIge1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIH1cbn1cbi5yYXRlX19mb3JtLWFycm93IHtcbiAgd2lkdGg6IDIwcHg7XG4gIGhlaWdodDogMjJweDtcbiAgbWFyZ2luOiAwIDEwcHggLTI5cHg7XG59XG5AbWVkaWEgKG1heC13aWR0aDogMTAyNHB4KSB7XG4gIC5yYXRlX19mb3JtLWFycm93IHtcbiAgICBvcGFjaXR5OiAwO1xuICAgIG1hcmdpbjogNXB4IDA7XG4gIH1cbn1cbi5yYXRlX19mb3JtLWxhYmVsIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBsaW5lLWhlaWdodDogMTdweDtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbn1cbi5yYXRlX19mb3JtLWJ0biB7XG4gIGJhY2tncm91bmQ6ICM4OTI3MzQ7XG4gIGJvcmRlci1yYWRpdXM6IDMzcHg7XG4gIG1hcmdpbjogMzVweCBhdXRvIDA7XG59XG5AbWVkaWEgKG1heC13aWR0aDogMTAyNHB4KSB7XG4gIC5yYXRlX19mb3JtLWJveCArIC5yYXRlX19mb3JtLWJveCB7XG4gICAgbWFyZ2luLXRvcDogMTVweDtcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDc2N3B4KSB7XG4gIC5yYXRlX19mb3JtLWJveCB7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbn1cbi5yYXRlX19mb3JtLWlucHV0IHtcbiAgYmFja2dyb3VuZDogI2ZiZjlmNjtcbiAgYm9yZGVyOiAxcHggc29saWQgI2UwZTBlMDtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBwYWRkaW5nOiAyMHB4IDE1cHg7XG4gIHdpZHRoOiA0MDBweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtc2l6ZTogMjZweDtcbiAgbGluZS1oZWlnaHQ6IDMycHg7XG59XG5AbWVkaWEgKG1heC13aWR0aDogNzY3cHgpIHtcbiAgLnJhdGVfX2Zvcm0taW5wdXQge1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG59XG4ucmF0ZV9fZm9ybS1pbnB1dDpob3ZlciwgLnJhdGVfX2Zvcm0taW5wdXQ6Zm9jdXMge1xuICBvdXRsaW5lOiBub25lO1xufVxuLnJhdGVfX2Zvcm0taW5wdXQ6Oi13ZWJraXQtb3V0ZXItc3Bpbi1idXR0b24sIC5yYXRlX19mb3JtLWlucHV0Ojotd2Via2l0LWlubmVyLXNwaW4tYnV0dG9uIHtcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xuICBtYXJnaW46IDA7XG59XG4ucmF0ZV9fZm9ybS1pbnB1dFt0eXBlPW51bWJlcl0ge1xuICAtbW96LWFwcGVhcmFuY2U6IHRleHRmaWVsZDtcbn0iLCJAaW1wb3J0ICcuLi8uLi8uLi9zY3NzL3ZhcnMnO1xuQGltcG9ydCAnLi4vLi4vLi4vc2Nzcy9taXhpbnMnO1xuXG4ucmF0ZSB7XG4gIHBhZGRpbmctdG9wOiA2MHB4O1xuICBAaW5jbHVkZSBiKG1vYmlsZSkge1xuICAgIHBhZGRpbmc6IDQwcHggMTVweDtcbiAgfVxuICAmX19mb3JtIHtcbiAgICAmLXdyYXBwZXIge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIEBpbmNsdWRlIGIoMTAyNCkge1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgfVxuICAgIH1cbiAgICAmLWFycm93IHtcbiAgICAgIHdpZHRoOiAyMHB4O1xuICAgICAgaGVpZ2h0OiAyMnB4O1xuICAgICAgbWFyZ2luOiAwIDEwcHggLTI5cHg7XG4gICAgICBAaW5jbHVkZSBiKDEwMjQpIHtcbiAgICAgICAgb3BhY2l0eTogMDtcbiAgICAgICAgbWFyZ2luOiA1cHggMDtcbiAgICAgIH1cbiAgICB9XG4gICAgJi1sYWJlbCB7XG4gICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICBsaW5lLWhlaWdodDogMTdweDtcbiAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgfVxuICAgICYtYnRuIHtcbiAgICAgIGJhY2tncm91bmQ6ICRicm93bi1yZWQ7XG4gICAgICBib3JkZXItcmFkaXVzOiAzM3B4O1xuICAgICAgbWFyZ2luOiAzNXB4IGF1dG8gMDtcbiAgICB9XG4gICAgJi1ib3gge1xuICAgICAgJiArICYge1xuICAgICAgICBAaW5jbHVkZSBiKDEwMjQpIHtcbiAgICAgICAgICBtYXJnaW4tdG9wOiAxNXB4O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBAaW5jbHVkZSBiKG1vYmlsZSkge1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgIH1cbiAgICB9XG4gICAgJi1pbnB1dCB7XG4gICAgICBiYWNrZ3JvdW5kOiAjZmJmOWY2O1xuICAgICAgYm9yZGVyOiAxcHggc29saWQgI2UwZTBlMDtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICAgIHBhZGRpbmc6IDIwcHggMTVweDtcbiAgICAgIHdpZHRoOiA0MDBweDtcbiAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgZm9udC1zaXplOiAyNnB4O1xuICAgICAgbGluZS1oZWlnaHQ6IDMycHg7XG4gICAgICBAaW5jbHVkZSBiKG1vYmlsZSkge1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgIH1cbiAgICAgICY6aG92ZXIsXG4gICAgICAmOmZvY3VzIHtcbiAgICAgICAgb3V0bGluZTogbm9uZTtcbiAgICAgIH1cbiAgICAgICY6Oi13ZWJraXQtb3V0ZXItc3Bpbi1idXR0b24sXG4gICAgICAmOjotd2Via2l0LWlubmVyLXNwaW4tYnV0dG9uIHtcbiAgICAgICAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xuICAgICAgICBtYXJnaW46IDA7XG4gICAgICB9XG5cbiAgICAgICZbdHlwZT0nbnVtYmVyJ10ge1xuICAgICAgICAtbW96LWFwcGVhcmFuY2U6IHRleHRmaWVsZDtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RateComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-rate',
                templateUrl: './rate.component.html',
                styleUrls: ['./rate.component.scss'],
            }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }, { type: _service_rate_rate_service__WEBPACK_IMPORTED_MODULE_3__["RateService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/pages/voucher/voucher.component.ts":
/*!****************************************************!*\
  !*** ./src/app/pages/voucher/voucher.component.ts ***!
  \****************************************************/
/*! exports provided: VoucherComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VoucherComponent", function() { return VoucherComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var ngx_papaparse__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-papaparse */ "./node_modules/ngx-papaparse/__ivy_ngcc__/fesm2015/ngx-papaparse.js");
/* harmony import */ var src_app_service_voucher_voucher_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/service/voucher/voucher.service */ "./src/app/service/voucher/voucher.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");







function VoucherComponent_span_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Importing CSV");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function VoucherComponent_tr_60_span_11_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function VoucherComponent_tr_60_span_11_Template_span_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10); const item_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r8.openInfoModal("Voucher code", item_r4.voucher_code); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "(?)");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function VoucherComponent_tr_60_span_20_Template(rf, ctx) { if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function VoucherComponent_tr_60_span_20_Template_span_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13); const item_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r11.openInfoModal("Usd amount", item_r4.usd_amount + " $"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "(?)");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function VoucherComponent_tr_60_td_34_span_3_Template(rf, ctx) { if (rf & 1) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function VoucherComponent_tr_60_td_34_span_3_Template_span_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r17); const item_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit; const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r15.acceptTableProgress(item_r4.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "ok");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function VoucherComponent_tr_60_td_34_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, VoucherComponent_tr_60_td_34_span_3_Template, 2, 0, "span", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r4.progressText || "in progress, please wait...");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r4.isProgressBtn || false);
} }
const _c0 = function (a0) { return { "table-line-blocked": a0 }; };
const _c1 = function (a0) { return { "page-table-active-yes": a0 }; };
const _c2 = function (a0) { return { "page-table-text-accent": a0 }; };
function VoucherComponent_tr_60_Template(rf, ctx) { if (rf & 1) {
    const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](8, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "td", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "span", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, VoucherComponent_tr_60_span_11_Template, 2, 0, "span", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "td", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "span", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "span", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function VoucherComponent_tr_60_Template_span_click_15_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r20); const item_r4 = ctx.$implicit; const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r19.openInfoModal("Activation code", item_r4.activation_code); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "(?)");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "td", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "span", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, VoucherComponent_tr_60_span_20_Template, 2, 0, "span", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "span", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "td", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "label", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "input", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function VoucherComponent_tr_60_Template_input_change_27_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r20); const item_r4 = ctx.$implicit; const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r21.changeActive(item_r4.id, item_r4.is_active); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "span", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "span", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "td", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](33, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](34, VoucherComponent_tr_60_td_34_Template, 4, 2, "td", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](28, _c0, item_r4.isProgress || false));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r4.id || "null");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](5, 19, item_r4.publish_date, "dd.LL.y") || "error", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](8, 22, item_r4.publish_date, "shortTime") || "error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("title", item_r4.voucher_code);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r4.voucher_code.length > 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r4.voucher_code || "error", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("title", item_r4.activation_code);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r4.activation_code || "error", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("title", item_r4.usd_amount);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r4.usd_amount.toString().length > 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r4.usd_amount || "0", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("title", item_r4.lock_days);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r4.lock_days || "0", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("checked", item_r4.is_active || false);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](30, _c1, item_r4.is_used));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](32, _c2, item_r4.activation_date || false));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](33, 25, item_r4.activation_date, "dd.LL.y" || false), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r4.isProgress || false);
} }
function VoucherComponent_ng_container_61_div_9_span_2_Template(rf, ctx) { if (rf & 1) {
    const _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function VoucherComponent_ng_container_61_div_9_span_2_Template_span_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r26); const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r25.acceptPopupProgress(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "ok");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function VoucherComponent_ng_container_61_div_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "span", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, VoucherComponent_ng_container_61_div_9_span_2_Template, 2, 0, "span", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", ctx_r22.popupInProgressText, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r22.popupInProgressBtn);
} }
function VoucherComponent_ng_container_61_Template(rf, ctx) { if (rf & 1) {
    const _r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "New Voucher");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function VoucherComponent_ng_container_61_Template_span_click_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r28); const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r27.close(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "X");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, VoucherComponent_ng_container_61_div_9_Template, 3, 2, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "form", 51, 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "label", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Voucher code");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "input", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function VoucherComponent_ng_container_61_Template_input_ngModelChange_16_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r28); const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r29.voucherCode = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "span", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "label", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Amount");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "input", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function VoucherComponent_ng_container_61_Template_input_ngModelChange_23_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r28); const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r30.usdAmount = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "span", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "$");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "label", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Freeze time");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "input", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function VoucherComponent_ng_container_61_Template_input_ngModelChange_30_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r28); const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r31.lockDays = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "span", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "DAYS");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "label", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Activate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "label", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "input", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function VoucherComponent_ng_container_61_Template_input_ngModelChange_38_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r28); const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r32.isActive = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "span", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "button", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function VoucherComponent_ng_container_61_Template_button_click_40_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r28); const ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r33.addVoucher(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "ADD");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](11);
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.pupopInProgress);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r2.voucherCode);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r2.usdAmount);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r2.lockDays);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r2.isActive)("checked", false);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", _r23.invalid);
} }
function VoucherComponent_ng_container_62_Template(rf, ctx) { if (rf & 1) {
    const _r35 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function VoucherComponent_ng_container_62_Template_span_click_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r35); const ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r34.closeInfoModal(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "X");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r3.infoModalTitle);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("title", ctx_r3.infoModalText);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r3.infoModalText);
} }
const _c3 = function (a0) { return { "icon icon__loading": a0 }; };
const _c4 = function (a0, a1) { return { "icon icon__refresh": a0, "icon icon__loading": a1 }; };
const _c5 = function (a0, a1) { return { "icon__sort-down": a0, "icon__sort-up": a1 }; };
class VoucherComponent {
    constructor(papa, voucherService) {
        this.papa = papa;
        this.voucherService = voucherService;
        this.updateVouchersTable = false;
        this.changeSort = true;
        this.sortData = {
            id: true,
            publish_date: false,
            publish_date_time: false,
            voucher_code: false,
            activation_code: false,
            usd_amount: false,
            is_active: false,
            is_used: false,
            lock_days: false,
            activation_date: false
        };
        this.popupAdd = false;
        this.pupopInProgress = false;
        this.popupInProgressBtn = false;
        this.popupInProgressText = 'in progress, please wait...';
        this.popupModal = false;
        this.loadingCSV = false;
        this.activationCode = null;
        this.voucherCode = null;
        this.lockDays = null;
        this.usdAmount = null;
        this.isActive = false;
        this.vouchers = [];
    }
    ngOnInit() {
        this.updateVouchers();
    }
    updateVouchers() {
        this.updateVouchersTable = true;
        this.voucherService.getVouchers()
            .then((res) => {
            this.vouchers = res;
            this.changeSort = false;
            this.sortVouchers('id');
        })
            .catch((err) => { console.log(err); })
            .finally(() => this.updateVouchersTable = false);
    }
    changeActive(id, activeStatus) {
        let errorState = false;
        let errorText = '';
        const voucherFind = this.vouchers.filter(item => {
            if (item.id === id) {
                item.isProgress = true;
                item.is_active = !item.is_active;
                return item;
            }
        });
        const voucher = {
            usd_amount: voucherFind[0].usd_amount,
            voucher_code: voucherFind[0].voucher_code,
            is_active: voucherFind[0].is_active
        };
        this.voucherService.setVoucher(id, voucher).then((res) => {
            this.acceptTableProgress(id);
        }).catch((err) => {
            console.log(err);
            errorText = err.status + ': ' + err.statusText + ', ' + 'something went wrong, try again';
            errorState = true;
        }).finally(() => {
            this.vouchers.filter((item) => {
                if (item.id === id) {
                    if (errorState) {
                        item.is_active = activeStatus;
                        item.isProgressBtn = true;
                        item.progressText = errorText;
                    }
                }
            });
        });
    }
    acceptTableProgress(id) {
        this.vouchers.filter(item => {
            if (item.id === id) {
                item.isProgress = item.isProgressBtn = false;
                item.progressText = 'in progress, please wait...';
                return item;
            }
        });
    }
    addVoucher() {
        const voucher = {
            voucher_code: this.voucherCode,
            usd_amount: this.usdAmount,
            is_active: this.isActive,
            lock_days: Number(this.lockDays)
        };
        this.popupInProgressText = 'in progress, please wait...';
        this.pupopInProgress = true;
        this.voucherService.sendVoucher(voucher).then((res) => {
            this.pupopInProgress = false;
            this.close();
            this.vouchers.push(res);
        }).catch(err => {
            console.log('add voucher error: ', err);
            this.popupInProgressBtn = true;
            this.popupInProgressText = err.status + ': ' + err.statusText + '<br><br>' + 'something went wrong, try again';
        });
    }
    acceptPopupProgress() {
        this.pupopInProgress = this.popupInProgressBtn = false;
    }
    close() {
        this.popupAdd = this.isActive = this.pupopInProgress = false;
        this.activationCode = this.voucherCode = this.lockDays = this.usdAmount = null;
    }
    openInfoModal(title, info) {
        this.infoModalTitle = title ? title : 'Voucher';
        this.infoModalText = info ? info : 'oops we lost text :(';
        this.popupModal = true;
    }
    closeInfoModal() {
        this.popupModal = false;
        this.infoModalText = '';
        this.infoModalTitle = 'Voucher';
    }
    parseCsvFile($event) {
        this.loadingCSV = true;
        const file = $event.srcElement.files[0];
        this.papa.parse(file, {
            header: true,
            dynamicTyping: true,
            skipEmptyLines: 'greedy',
            worker: true,
            chunk: (chunk) => {
                this.jsonCSV = chunk.data;
            },
            complete: () => {
                this.addVouchers(this.jsonCSV);
            },
        });
    }
    addVouchers(vouchers) {
        vouchers.map(item => {
            item.voucher_code = item.voucher_code.toString();
            item.usd_amount = item.usd_amount.toString();
        });
        this.voucherService.sendVoucher(vouchers).then((res) => {
            this.updateVouchers();
            this.loadingCSV = false;
        }).catch(err => {
            console.log('add vouchers error: ', err);
            this.loadingCSV = false;
        });
    }
    sortVouchers(type, tdate) {
        this.sortData[type] && this.changeSort ? this.changeSort = false : this.changeSort = true;
        Object.keys(this.sortData).forEach(v => this.sortData[v] = v === type);
        this.vouchers.sort((vouchers1, vouchers2) => {
            let sortVoucher1;
            let sortVoucher2;
            if (tdate) {
                sortVoucher1 = tdate === 'date' ? new Date(vouchers1[type]).getDate() : new Date(vouchers1[type]).getTime();
                sortVoucher2 = tdate === 'date' ? new Date(vouchers2[type]).getDate() : new Date(vouchers2[type]).getTime();
            }
            else {
                sortVoucher1 = vouchers1[type];
                sortVoucher2 = vouchers2[type];
            }
            if (this.changeSort) {
                return sortVoucher1 > sortVoucher2 ? 1 : -1;
            }
            else {
                return sortVoucher1 < sortVoucher2 ? 1 : -1;
            }
        });
    }
}
VoucherComponent.ɵfac = function VoucherComponent_Factory(t) { return new (t || VoucherComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_papaparse__WEBPACK_IMPORTED_MODULE_1__["Papa"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_service_voucher_voucher_service__WEBPACK_IMPORTED_MODULE_2__["VoucherService"])); };
VoucherComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: VoucherComponent, selectors: [["app-voucher"]], decls: 63, vars: 55, consts: [[1, "section-header-page", 2, "background-image", "url(/assets/img/sections/vaucher-bg.png)"], [1, "container"], [1, "app", "voucher"], [1, "content-block"], [1, "page-text-title", 3, "innerHTML"], [1, "page-btn-block"], [1, "ducatus-btn", "ducatus-btn-brown", "icon", "icon__plus", 3, "click"], ["for", "file", 1, "ducatus-btn", "ducatus-btn-gold", 3, "ngClass"], [4, "ngIf"], ["type", "file", "id", "file", "accept", ".csv", 1, "ducatus-inputs-file", 3, "disabled", "change"], [1, "ducatus-btn", "ducatus-btn-brown", "table-refresh", 3, "ngClass", "click"], [1, "page-table-wrap"], [1, "page-table"], [1, "page-table-head"], [2, "min-width", "70px", "width", "90px", "padding-left", "28px", "padding-right", "5px", 3, "click"], [1, "text-center", "table-sort", "icon", 3, "ngClass"], [2, "min-width", "130px", "width", "130px", 3, "click"], [1, "table-sort", "icon", 3, "ngClass"], [2, "min-width", "115px", "width", "115px", 3, "click"], [2, "min-width", "120px", 3, "click"], [2, "min-width", "100px", 3, "click"], [2, "min-width", "60px", 3, "click"], [2, "min-width", "30px", 3, "click"], [2, "min-width", "80px", "width", "80px", 3, "click"], [1, "page-table-body"], [3, "ngClass", 4, "ngFor", "ngForOf"], [3, "ngClass"], [1, "text-center"], [1, "page-table-text-accent"], [1, "voucher-voucher-code"], [1, "page-table-w", 3, "title"], ["class", "voucher-show-info", 3, "click", 4, "ngIf"], [1, "voucher-activation-code"], [1, "voucher-show-info", 3, "click"], [1, "voucher-ducatus-amount"], [1, "ducatus-inputs-switch"], ["type", "checkbox", 3, "checked", "change"], [1, "ducatus-inputs-switch-slider"], [1, "page-table-active", 3, "ngClass"], ["class", "page-table-blocked", 4, "ngIf"], [1, "page-table-blocked"], [1, "page-table-blocked-text"], ["class", "ducatus-btn ducatus-btn-brown page-table-blocked-btn", 3, "click", 4, "ngIf"], [1, "ducatus-btn", "ducatus-btn-brown", "page-table-blocked-btn", 3, "click"], [1, "popup-voucher"], [1, "popup-container"], [1, "popup-header"], [1, "popup-header-text"], [1, "popup-close", 3, "click"], [1, "popup-body"], ["class", "popup-blocked", 4, "ngIf"], ["novalidate", "", 1, "popup-form"], ["voucherAddForm", "ngForm"], ["for", "voucher_code"], [1, "popup-form-input"], ["type", "text", "name", "voucher_code", "required", "", "placeholder", "Enter voucher code", "id", "voucher_code", 1, "ducatus-inputs-input", 3, "ngModel", "ngModelChange"], [1, "icon"], [1, "popup-form-group"], [1, "popup-form-group-item"], ["for", "usd_amount"], ["type", "text", "placeholder", "Amount", "minlength", "1", "name", "usd_amount", "required", "", "id", "usd_amount", "oninput", "this.value = this.value.replace(/[^0-9](^\\,)/g, '').replace(/(\\..*)\\./g, '$1');", 1, "ducatus-inputs-input", 3, "ngModel", "ngModelChange"], [1, "popup-form-text-label"], ["for", "freezeVoucher"], ["type", "text", "placeholder", "Freeze", "minlength", "1", "name", "lock_days", "id", "lock_days", "oninput", "this.value = this.value.replace(/[^0-9](^\\,)/g, '').replace(/(\\..*)\\./g, '$1');", 1, "ducatus-inputs-input", 3, "ngModel", "ngModelChange"], ["for", "is_active", 1, "popup-label"], ["type", "checkbox", "name", "is_active", "id", "is_active", 3, "ngModel", "checked", "ngModelChange"], ["type", "submit", 1, "ducatus-btn", "ducatus-btn-brown", 3, "disabled", "click"], [1, "popup-blocked"], [1, "popup-blocked-text", 3, "innerHTML"], ["class", "ducatus-btn ducatus-btn-brown", 3, "click", 4, "ngIf"], [1, "ducatus-btn", "ducatus-btn-brown", 3, "click"], [1, "popup-container", "popup-container-modal"], [1, "popup-body-text", 3, "title"]], template: function VoucherComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "section", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](6, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Voucher");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function VoucherComponent_Template_span_click_9_listener() { return ctx.popupAdd = true; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "New Voucher");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, VoucherComponent_span_12_Template, 2, 0, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function VoucherComponent_Template_input_change_13_listener($event) { return ctx.parseCsvFile($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function VoucherComponent_Template_span_click_14_listener() { return ctx.updateVouchers(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "table", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "thead", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "th", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function VoucherComponent_Template_th_click_19_listener() { return ctx.sortVouchers("id"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "span", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, " \u2116 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "th", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function VoucherComponent_Template_th_click_22_listener() { return ctx.sortVouchers("publish_date", "date"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "span", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, " Voucher");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, " Add Date ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "th", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function VoucherComponent_Template_th_click_27_listener() { return ctx.sortVouchers("publish_date_time", "time"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "span", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, " Voucher ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, " Add Time ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "th", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function VoucherComponent_Template_th_click_32_listener() { return ctx.sortVouchers("voucher_code"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "span", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, " Voucher Code ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "th", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function VoucherComponent_Template_th_click_35_listener() { return ctx.sortVouchers("activation_code"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "span", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, " Activation Code ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "th", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function VoucherComponent_Template_th_click_38_listener() { return ctx.sortVouchers("usd_amount"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "span", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, " Amount $ ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "th", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function VoucherComponent_Template_th_click_41_listener() { return ctx.sortVouchers("lock_days"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "span", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, " Freeze ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](44, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, " Days ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "th", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function VoucherComponent_Template_th_click_46_listener() { return ctx.sortVouchers("is_active"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "span", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, " Active ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "th", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function VoucherComponent_Template_th_click_49_listener() { return ctx.sortVouchers("is_used"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "span", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, " Used");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](52, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "Unused ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "th", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function VoucherComponent_Template_th_click_54_listener() { return ctx.sortVouchers("activation_date", "date"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "span", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, " Activated ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](57, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, " Date ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "tbody", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](60, VoucherComponent_tr_60_Template, 35, 34, "tr", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](61, VoucherComponent_ng_container_61_Template, 42, 7, "ng-container", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](62, VoucherComponent_ng_container_62_Template, 11, 3, "ng-container", 8);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](6, 18, "PAGE.VAUCHER.TITLE"), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](20, _c3, ctx.loadingCSV));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.loadingCSV);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.loadingCSV);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](22, _c4, !ctx.updateVouchersTable, ctx.updateVouchersTable));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](25, _c5, ctx.sortData["id"] && ctx.changeSort, ctx.sortData["id"] && !ctx.changeSort));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](28, _c5, ctx.sortData["publish_date"] && ctx.changeSort, ctx.sortData["publish_date"] && !ctx.changeSort));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](31, _c5, ctx.sortData["publish_date_time"] && ctx.changeSort, ctx.sortData["publish_date_time"] && !ctx.changeSort));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](34, _c5, ctx.sortData["voucher_code"] && ctx.changeSort, ctx.sortData["voucher_code"] && !ctx.changeSort));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](37, _c5, ctx.sortData["activation_code"] && ctx.changeSort, ctx.sortData["activation_code"] && !ctx.changeSort));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](40, _c5, ctx.sortData["usd_amount"] && ctx.changeSort, ctx.sortData["usd_amount"] && !ctx.changeSort));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](43, _c5, ctx.sortData["lock_days"] && ctx.changeSort, ctx.sortData["lock_days"] && !ctx.changeSort));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](46, _c5, ctx.sortData["is_active"] && ctx.changeSort, ctx.sortData["is_active"] && !ctx.changeSort));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](49, _c5, ctx.sortData["is_used"] && ctx.changeSort, ctx.sortData["is_used"] && !ctx.changeSort));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](52, _c5, ctx.sortData["activation_date"] && ctx.changeSort, ctx.sortData["activation_date"] && !ctx.changeSort));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.vouchers);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.popupAdd);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.popupModal);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["MinLengthValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["CheckboxControlValueAccessor"]], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslatePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["DatePipe"]], styles: ["@import url(\"https://fonts.googleapis.com/css?family=Montserrat:100,100i,200,200i,300,300i,400,400i,500,500i,600,600i,700,700i,800,800i,900,900i&display=swap\");\n.clearfix[_ngcontent-%COMP%]:after {\n  content: \"\";\n  display: table;\n  clear: both;\n}\n.centered[_ngcontent-%COMP%] {\n  display: table;\n  width: 100%;\n  height: 100%;\n}\n.centered[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\n  display: table-cell;\n  text-align: center;\n  vertical-align: middle;\n}\n\nsection.voucher[_ngcontent-%COMP%] {\n  background: none;\n  padding-top: 50px;\n}\n@media (max-width: 600px) {\n  section.voucher[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%] {\n    padding: 0 10px;\n  }\n}\nsection.voucher[_ngcontent-%COMP%]   .text-center[_ngcontent-%COMP%] {\n  text-align: center !important;\n}\nsection.voucher[_ngcontent-%COMP%]   .content-block[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n}\n@media (max-width: 650px) {\n  section.voucher[_ngcontent-%COMP%]   .content-block[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n}\nsection.voucher[_ngcontent-%COMP%]   .page-text-title[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  font-size: 30px;\n  font-weight: bold;\n  color: #414B53;\n}\n@media (max-width: 650px) {\n  section.voucher[_ngcontent-%COMP%]   .page-text-title[_ngcontent-%COMP%] {\n    margin-bottom: 20px;\n  }\n}\nsection.voucher[_ngcontent-%COMP%]   .page-text-title[_ngcontent-%COMP%]:after {\n  content: \"\";\n  height: 2px;\n  width: 90px;\n  background-color: #892734;\n  margin-top: 20px;\n}\nsection.voucher[_ngcontent-%COMP%]   .page-btn-block[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(3, -webkit-max-content);\n  grid-template-columns: repeat(3, max-content);\n  grid-gap: 20px;\n  align-items: center;\n}\n@media (max-width: 550px) {\n  section.voucher[_ngcontent-%COMP%]   .page-btn-block[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\nsection.voucher[_ngcontent-%COMP%]   .page-btn-block[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\nsection.voucher[_ngcontent-%COMP%]   .page-btn-block[_ngcontent-%COMP%]   .table-refresh[_ngcontent-%COMP%] {\n  min-width: 50px;\n}\nsection.voucher[_ngcontent-%COMP%]   .page-btn-block[_ngcontent-%COMP%]   .table-refresh.icon__loading[_ngcontent-%COMP%] {\n  border-radius: 50%;\n  width: 50px;\n}\n@media (max-width: 550px) {\n  section.voucher[_ngcontent-%COMP%]   .page-btn-block[_ngcontent-%COMP%]   .table-refresh.icon__loading[_ngcontent-%COMP%] {\n    min-width: 200px;\n    width: 100%;\n    border-radius: 5px;\n  }\n}\nsection.voucher[_ngcontent-%COMP%]   .page-btn-block[_ngcontent-%COMP%]   .icon__update[_ngcontent-%COMP%] {\n  min-width: 40px;\n  width: 55px;\n  opacity: 1;\n}\n@media (max-width: 550px) {\n  section.voucher[_ngcontent-%COMP%]   .page-btn-block[_ngcontent-%COMP%]   .icon__update[_ngcontent-%COMP%] {\n    min-width: 200px;\n    width: 100%;\n  }\n}\nsection.voucher[_ngcontent-%COMP%]   .page-btn-block[_ngcontent-%COMP%]   .icon__loading[_ngcontent-%COMP%] {\n  min-width: 40px;\n  width: 55px;\n  opacity: 0.9;\n}\n@media (max-width: 550px) {\n  section.voucher[_ngcontent-%COMP%]   .page-btn-block[_ngcontent-%COMP%]   .icon__loading[_ngcontent-%COMP%] {\n    min-width: 200px;\n    width: 100%;\n  }\n}\nsection.voucher[_ngcontent-%COMP%]   .page-table[_ngcontent-%COMP%] {\n  margin-top: 50px;\n  width: 100%;\n  border-collapse: collapse;\n}\n@media (max-width: 450px) {\n  section.voucher[_ngcontent-%COMP%]   .page-table[_ngcontent-%COMP%] {\n    margin-top: 30px;\n  }\n}\nsection.voucher[_ngcontent-%COMP%]   .page-table-blocked[_ngcontent-%COMP%] {\n  position: absolute;\n  width: calc(100% - 29px);\n  z-index: 9;\n  background-color: #fcf9f6e6;\n  height: 67px;\n  left: 15px;\n  text-align: center;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border: 1px solid #E2E2E2 !important;\n}\nsection.voucher[_ngcontent-%COMP%]   .page-table-blocked-text[_ngcontent-%COMP%] {\n  color: #892734;\n  text-align: center;\n  font-size: 15px;\n  letter-spacing: 2px;\n  font-weight: 600;\n}\nsection.voucher[_ngcontent-%COMP%]   .page-table-blocked-btn[_ngcontent-%COMP%] {\n  min-width: 70px;\n  min-height: 40px;\n  border-radius: 20px;\n  margin-left: 20px;\n}\nsection.voucher[_ngcontent-%COMP%]   .page-table-wrap[_ngcontent-%COMP%] {\n  width: 100%;\n}\n@media (max-width: 1100px) {\n  section.voucher[_ngcontent-%COMP%]   .page-table-wrap[_ngcontent-%COMP%] {\n    overflow-x: scroll;\n  }\n}\nsection.voucher[_ngcontent-%COMP%]   .page-table-w[_ngcontent-%COMP%] {\n  display: block;\n  white-space: nowrap;\n  overflow: hidden !important;\n  text-overflow: ellipsis;\n}\nsection.voucher[_ngcontent-%COMP%]   .page-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%], section.voucher[_ngcontent-%COMP%]   .page-table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%], section.voucher[_ngcontent-%COMP%]   .page-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  border: none;\n}\nsection.voucher[_ngcontent-%COMP%]   .page-table[_ngcontent-%COMP%]   .voucher-show-info[_ngcontent-%COMP%] {\n  cursor: pointer;\n  font-size: 10px;\n  display: inline-block;\n  line-height: 1;\n  position: absolute;\n  top: 15px;\n  right: 5px;\n  color: #5C5A57;\n  transition: 0.4s ease;\n}\nsection.voucher[_ngcontent-%COMP%]   .page-table[_ngcontent-%COMP%]   .voucher-show-info[_ngcontent-%COMP%]:hover {\n  color: #892734;\n  transition: 0.4s ease;\n}\nsection.voucher[_ngcontent-%COMP%]   .page-table[_ngcontent-%COMP%]   .voucher-activation-code[_ngcontent-%COMP%] {\n  max-width: 270px;\n  position: relative;\n}\nsection.voucher[_ngcontent-%COMP%]   .page-table[_ngcontent-%COMP%]   .voucher-voucher-code[_ngcontent-%COMP%] {\n  max-width: 200px;\n  position: relative;\n}\nsection.voucher[_ngcontent-%COMP%]   .page-table[_ngcontent-%COMP%]   .voucher-ducatus-amount[_ngcontent-%COMP%] {\n  max-width: 100px;\n  position: relative;\n}\nsection.voucher[_ngcontent-%COMP%]   .page-table-head[_ngcontent-%COMP%] {\n  background-color: #F9F7F1;\n}\nsection.voucher[_ngcontent-%COMP%]   .page-table-head[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  color: #892734;\n  font-weight: bold;\n  font-size: 16px;\n  padding: 15px 10px;\n  text-align: left;\n  border-bottom: 1px solid #E2E2E2;\n  position: relative;\n}\nsection.voucher[_ngcontent-%COMP%]   .page-table-head[_ngcontent-%COMP%]   .table-sort[_ngcontent-%COMP%] {\n  cursor: pointer;\n  position: relative;\n  display: grid;\n  grid-template-columns: -webkit-max-content 14px;\n  grid-template-columns: max-content 14px;\n  align-items: center;\n  grid-gap: 5px;\n}\nsection.voucher[_ngcontent-%COMP%]   .page-table-head[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%]:before {\n  z-index: 1;\n  grid-row: 1;\n  grid-column: 2;\n}\nsection.voucher[_ngcontent-%COMP%]   .page-table-text-accent[_ngcontent-%COMP%] {\n  color: #892734;\n}\nsection.voucher[_ngcontent-%COMP%]   .page-table-active[_ngcontent-%COMP%] {\n  display: flex;\n  width: 100%;\n  height: 18px;\n  background-repeat: no-repeat;\n  background-size: contain;\n  background-image: url('no.svg');\n  background-position: center;\n}\nsection.voucher[_ngcontent-%COMP%]   .page-table-active-yes[_ngcontent-%COMP%] {\n  background-image: url('yes.svg');\n}\nsection.voucher[_ngcontent-%COMP%]   .page-table-body[_ngcontent-%COMP%] {\n  font-size: 16px;\n  line-height: 25px;\n  font-weight: 300;\n  color: #5C5A57;\n}\nsection.voucher[_ngcontent-%COMP%]   .page-table-body[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 20px 10px;\n  border-bottom: 1px solid #E2E2E2;\n}\nsection.voucher[_ngcontent-%COMP%]   .page-table-body[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:nth-child(1) {\n  border-left: 1px solid #E2E2E2;\n}\nsection.voucher[_ngcontent-%COMP%]   .page-table-body[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:nth-last-child(1) {\n  border-right: 1px solid #E2E2E2;\n}\nsection.voucher[_ngcontent-%COMP%]   .page-table-body[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover   td[_ngcontent-%COMP%] {\n  background-color: #f7f7f7;\n}\nsection.voucher[_ngcontent-%COMP%]   .page-table-body[_ngcontent-%COMP%]   .table-line-blocked[_ngcontent-%COMP%]:hover   td[_ngcontent-%COMP%] {\n  background-color: #fcf9f6e6 !important;\n}\n.popup-voucher[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background-color: rgba(0, 0, 0, 0.233);\n  z-index: 999;\n}\n.popup-container[_ngcontent-%COMP%] {\n  border-radius: 10px;\n  background-color: #FFFFFF;\n  max-width: 490px;\n  width: 100%;\n  box-shadow: 0px 4px 25px rgba(0, 0, 0, 0.15);\n  position: relative;\n  overflow: hidden;\n}\n.popup-container-modal[_ngcontent-%COMP%] {\n  max-width: -webkit-max-content;\n  max-width: -moz-max-content;\n  max-width: max-content;\n  min-width: 300px;\n}\n.popup-blocked[_ngcontent-%COMP%] {\n  background-color: #fcf9f6db;\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  z-index: 999;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n  top: 0;\n  left: 0;\n}\n.popup-blocked-text[_ngcontent-%COMP%] {\n  color: #892734;\n  text-align: center;\n  font-size: 15px;\n  letter-spacing: 2px;\n  font-weight: 600;\n  line-height: 0.9;\n  margin-bottom: 25px;\n}\n.popup-close[_ngcontent-%COMP%] {\n  position: absolute;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  color: #AB8B8B;\n  background-color: #fff;\n  width: 30px;\n  height: 30px;\n  right: 15px;\n  top: 15px;\n  border-radius: 50%;\n  cursor: pointer;\n  transition: 0.4s ease;\n}\n.popup-close[_ngcontent-%COMP%]:hover {\n  transition: 0.4s ease;\n  box-shadow: 0px 4px 25px rgba(0, 0, 0, 0.15);\n}\n.popup-label[_ngcontent-%COMP%] {\n  margin-right: 20px;\n  width: -webkit-max-content !important;\n  width: -moz-max-content !important;\n  width: max-content !important;\n}\n.popup-header[_ngcontent-%COMP%] {\n  position: relative;\n  background: #E9DCCA;\n  border-radius: 8px 8px 0 0;\n  padding: 20px 45px;\n}\n@media (max-width: 600px) {\n  .popup-header[_ngcontent-%COMP%] {\n    padding: 20px 20px;\n  }\n}\n.popup-header-text[_ngcontent-%COMP%] {\n  font-weight: bold;\n  font-size: 16px;\n  color: #892734;\n}\n.popup-body[_ngcontent-%COMP%] {\n  padding: 30px 45px;\n  word-break: break-all;\n  position: relative;\n  overflow: hidden;\n}\n@media (max-width: 600px) {\n  .popup-body[_ngcontent-%COMP%] {\n    padding: 20px 20px;\n  }\n}\n.popup-body-text[_ngcontent-%COMP%] {\n  color: #414b537c;\n  letter-spacing: 1px;\n  font-size: 14px;\n}\n.popup-form[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n.popup-form[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  padding-right: 0;\n}\n.popup-form-text-label[_ngcontent-%COMP%] {\n  background-color: #FBF9F6;\n  height: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border-top: 1px solid #CFB778;\n  border-right: 1px solid #CFB778;\n  border-bottom: 1px solid #CFB778;\n  color: #414b537c;\n  font-size: 16px;\n  width: 60px;\n  transition: 0.4s ease;\n  border-radius: 0 12px 12px 0;\n}\n.popup-form-input[_ngcontent-%COMP%] {\n  position: relative;\n  display: grid;\n  grid-template-columns: 1fr -webkit-max-content;\n  grid-template-columns: 1fr max-content;\n  justify-content: center;\n  align-items: center;\n  margin-bottom: 30px;\n}\n.popup-form-input[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\n  height: 100%;\n  background-color: #FBF9F6;\n  border-top: 1px solid #CFB778;\n  border-right: 1px solid #CFB778;\n  border-bottom: 1px solid #CFB778;\n  border-left: none;\n  border-radius: 0 12px 12px 0;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 40px;\n}\n.popup-form-input[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%]:before {\n  transition: 0.4s ease;\n  opacity: 0.3;\n}\n.popup-form-input[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%]:hover {\n  cursor: pointer;\n}\n.popup-form-input[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%]:hover:before {\n  transition: 0.4s ease;\n  opacity: 1;\n}\n.popup-form[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], .popup-form[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.popup-form[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  display: inline-block;\n  margin-bottom: 10px;\n  color: #414B53;\n  font-size: 16px;\n  font-weight: 400;\n}\n.popup-form[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  border-radius: 12px 0 0 12px;\n  transition: 0.4s ease;\n  font-weight: bold;\n  padding-left: 20px;\n}\n.popup-form[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus    ~ .popup-form-text-label[_ngcontent-%COMP%] {\n  transition: 0.4s ease;\n  color: black;\n}\n.popup-form[_ngcontent-%COMP%]   .ducatus-inputs-switch[_ngcontent-%COMP%] {\n  width: 44px;\n}\n.popup-form[_ngcontent-%COMP%]   .ducatus-btn[_ngcontent-%COMP%] {\n  max-width: 200px;\n}\n.popup-form-group[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  grid-gap: 20px;\n  margin-bottom: 30px;\n}\n.popup-form-group[_ngcontent-%COMP%]   .popup-form-input[_ngcontent-%COMP%] {\n  margin-bottom: 0;\n}\n.popup[_ngcontent-%COMP%]   input.ng-touched.ng-invalid[_ngcontent-%COMP%] {\n  border-top: solid #892734 1px;\n  border-left: solid #892734 1px;\n  border-bottom: solid #892734 1px;\n}\n.popup[_ngcontent-%COMP%]   input.ng-touched.ng-invalid[_ngcontent-%COMP%]    ~ .icon[_ngcontent-%COMP%], .popup[_ngcontent-%COMP%]   input.ng-touched.ng-invalid[_ngcontent-%COMP%]    ~ .popup-form-text-label[_ngcontent-%COMP%] {\n  border-top: solid #892734 1px;\n  border-right: solid #892734 1px;\n  border-bottom: solid #892734 1px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9nbGViL3Byb2plY3RzL2R1Y2F0dXMtc2l0ZS9zcmMvc2Nzcy9fdmFycy5zY3NzIiwiL1VzZXJzL2dsZWIvcHJvamVjdHMvZHVjYXR1cy1zaXRlL3NyYy9zY3NzL19taXhpbnMuc2NzcyIsInNyYy9hcHAvcGFnZXMvdm91Y2hlci92b3VjaGVyLmNvbXBvbmVudC5zY3NzIiwiL1VzZXJzL2dsZWIvcHJvamVjdHMvZHVjYXR1cy1zaXRlL3NyYy9hcHAvcGFnZXMvdm91Y2hlci92b3VjaGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUlRLCtKQUFBO0FDMkJSO0VBQ0MsV0FBQTtFQUNBLGNBQUE7RUFDQSxXQUFBO0FDN0JEO0FEZ0NBO0VBQ0MsY0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FDN0JEO0FEK0JDO0VBQ0MsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLHNCQUFBO0FDN0JGO0FEeU1BOzs7R0FBQTtBRXROQTtFQUNFLGdCQUFBO0VBQ0EsaUJBQUE7QURvQkY7QURxSUU7RUV2SkE7SUFFSSxlQUFBO0VEb0JKO0FBQ0Y7QUNqQkU7RUFDRSw2QkFBQTtBRG1CSjtBQ2ZJO0VBQ0UsYUFBQTtFQUNBLDhCQUFBO0FEaUJOO0FEeUhFO0VFNUlFO0lBS0ksc0JBQUE7RURrQk47QUFDRjtBQ1pNO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtBRGNSO0FENkdFO0VFaElJO0lBUUksbUJBQUE7RURlUjtBQUNGO0FDYlE7RUFDRSxXQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSx5QkhuQkU7RUdvQkYsZ0JBQUE7QURlVjtBQ1RNO0VBQ0UsYUFBQTtFQUNBLHFEQUFBO0VBQUEsNkNBQUE7RUFDQSxjQUFBO0VBQ0EsbUJBQUE7QURXUjtBRDJGRTtFRTFHSTtJQU9JLDBCQUFBO0VEWVI7QUFDRjtBQ1ZRO0VBQ0UsZUFBQTtBRFlWO0FDVFE7RUFDRSxlQUFBO0FEV1Y7QUNSUTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtBRFVWO0FENEVFO0VFeEZNO0lBS0ksZ0JBQUE7SUFDQSxXQUFBO0lBQ0Esa0JBQUE7RURXVjtBQUNGO0FDUlE7RUFDRSxlQUFBO0VBQ0EsV0FBQTtFQUNBLFVBQUE7QURVVjtBRGdFRTtFRTdFTTtJQU1JLGdCQUFBO0lBQ0EsV0FBQTtFRFdWO0FBQ0Y7QUNSUTtFQUNFLGVBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBRFVWO0FEcURFO0VFbEVNO0lBTUksZ0JBQUE7SUFDQSxXQUFBO0VEV1Y7QUFDRjtBQ05JO0VBQ0UsZ0JBQUE7RUFDQSxXQUFBO0VBQ0EseUJBQUE7QURRTjtBRDBDRTtFRXJERTtJQU1JLGdCQUFBO0VEU047QUFDRjtBQ1BNO0VBQ0Usa0JBQUE7RUFDQSx3QkFBQTtFQUNBLFVBQUE7RUFDQSwyQkFBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLG9DQUFBO0FEU1I7QUNQUTtFQUNFLGNIdEdFO0VHdUdGLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7QURTVjtBQ05RO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtBRFFWO0FDSk07RUFDRSxXQUFBO0FETVI7QURRRTtFRWZJO0lBSUksa0JBQUE7RURPUjtBQUNGO0FDSk07RUFDRSxjQUFBO0VBQ0EsbUJBQUE7RUFDQSwyQkFBQTtFQUNBLHVCQUFBO0FETVI7QUNITTtFQUNFLFlBQUE7QURLUjtBQ0RRO0VBQ0UsZUFBQTtFQUNBLGVBQUE7RUFDQSxxQkFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0VBQ0EsY0FBQTtFQUNBLHFCQUFBO0FER1Y7QUNEVTtFQUNFLGNIckpBO0VHc0pBLHFCQUFBO0FER1o7QUNDUTtFQUNFLGdCQUFBO0VBQ0Esa0JBQUE7QURDVjtBQ0VRO0VBQ0UsZ0JBQUE7RUFDQSxrQkFBQTtBREFWO0FDR1E7RUFDRSxnQkFBQTtFQUNBLGtCQUFBO0FERFY7QUNLTTtFQUNFLHlCQUFBO0FESFI7QUNLUTtFQUNFLGNIOUtFO0VHK0tGLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQ0FBQTtFQUNBLGtCQUFBO0FESFY7QUNNUTtFQUNFLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSwrQ0FBQTtFQUFBLHVDQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0FESlY7QUNTVTtFQUNFLFVBQUE7RUFJQSxXQUFBO0VBQ0EsY0FBQTtBRFZaO0FDd0JRO0VBQ0UsY0h2TkU7QUVpTVo7QUMwQk07RUFDRSxhQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSw0QkFBQTtFQUNBLHdCQUFBO0VBQ0EsK0JBQUE7RUFDQSwyQkFBQTtBRHhCUjtBQzBCUTtFQUNFLGdDQUFBO0FEeEJWO0FDNEJNO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0FEMUJSO0FDNkJVO0VBQ0Usa0JBQUE7RUFDQSxnQ0FBQTtBRDNCWjtBQzZCWTtFQUNFLDhCQUFBO0FEM0JkO0FDOEJZO0VBQ0UsK0JBQUE7QUQ1QmQ7QUNpQ1k7RUFDRSx5QkFBQTtBRC9CZDtBQ3NDWTtFQUNFLHNDQUFBO0FEcENkO0FDK0NFO0VBQ0UsZUFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLHNDQUFBO0VBQ0EsWUFBQTtBRDVDSjtBQytDRTtFQUNFLG1CQUFBO0VBQ0EseUJBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7RUFDQSw0Q0FBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7QUQ3Q0o7QUMrQ0k7RUFDRSw4QkFBQTtFQUFBLDJCQUFBO0VBQUEsc0JBQUE7RUFDQSxnQkFBQTtBRDdDTjtBQ2lERTtFQUNFLDJCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLHNCQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7QUQvQ0o7QUNpREk7RUFDRSxjSDVUTTtFRzZUTixrQkFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtBRC9DTjtBQ21ERTtFQUNFLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0VBQ0Esc0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxTQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EscUJBQUE7QURqREo7QUNtREk7RUFDRSxxQkFBQTtFQUNBLDRDQUFBO0FEakROO0FDcURFO0VBQ0Usa0JBQUE7RUFDQSxxQ0FBQTtFQUFBLGtDQUFBO0VBQUEsNkJBQUE7QURuREo7QUNzREU7RUFDRSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsMEJBQUE7RUFDQSxrQkFBQTtBRHBESjtBRDVLRTtFRTROQTtJQU9JLGtCQUFBO0VEbkRKO0FBQ0Y7QUNxREk7RUFDRSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxjSDdXTTtBRTBUWjtBQ3VERTtFQUNFLGtCQUFBO0VBQ0EscUJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FEckRKO0FENUxFO0VFNk9BO0lBT0ksa0JBQUE7RURwREo7QUFDRjtBQ3NESTtFQUNFLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0FEcEROO0FDd0RFO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0FEdERKO0FDd0RJO0VBQ0UsZ0JBQUE7QUR0RE47QUMwRE07RUFDRSx5QkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLDZCQUFBO0VBQ0EsK0JBQUE7RUFDQSxnQ0FBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7RUFDQSxxQkFBQTtFQUNBLDRCQUFBO0FEeERSO0FDNERJO0VBQ0Usa0JBQUE7RUFDQSxhQUFBO0VBQ0EsOENBQUE7RUFBQSxzQ0FBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtBRDFETjtBQzRETTtFQUNFLFlBQUE7RUFDQSx5QkFBQTtFQUNBLDZCQUFBO0VBQ0EsK0JBQUE7RUFDQSxnQ0FBQTtFQUNBLGlCQUFBO0VBQ0EsNEJBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7QUQxRFI7QUM0RFE7RUFDRSxxQkFBQTtFQUNBLFlBQUE7QUQxRFY7QUM2RFE7RUFDRSxlQUFBO0FEM0RWO0FDNkRVO0VBQ0UscUJBQUE7RUFDQSxVQUFBO0FEM0RaO0FDaUVJOztFQUVFLFdBQUE7QUQvRE47QUNrRUk7RUFDRSxxQkFBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBRGhFTjtBQ21FSTtFQUNFLDRCQUFBO0VBQ0EscUJBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FEakVOO0FDb0VRO0VBQ0UscUJBQUE7RUFDQSxZQUFBO0FEbEVWO0FDd0VNO0VBQ0UsV0FBQTtBRHRFUjtBQ3lFTTtFQUNFLGdCQUFBO0FEdkVSO0FDMkVJO0VBQ0UsYUFBQTtFQUNBLHFDQUFBO0VBQ0EsY0FBQTtFQUNBLG1CQUFBO0FEekVOO0FDMkVNO0VBQ0UsZ0JBQUE7QUR6RVI7QUM4RUU7RUFDRSw2QkFBQTtFQUNBLDhCQUFBO0VBQ0EsZ0NBQUE7QUQ1RUo7QUM4RUk7O0VBRUUsNkJBQUE7RUFDQSwrQkFBQTtFQUNBLGdDQUFBO0FENUVOIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvdm91Y2hlci92b3VjaGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBtYWluIHZhcmlhYmxlc1xuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9TW9udHNlcnJhdDoxMDAsMTAwaSwyMDAsMjAwaSwzMDAsMzAwaSw0MDAsNDAwaSw1MDAsNTAwaSw2MDAsNjAwaSw3MDAsNzAwaSw4MDAsODAwaSw5MDAsOTAwaSZkaXNwbGF5PXN3YXAnKTtcblxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBhZGRpdGlvbmFsIHZhcmlhYmxlc1xuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cblxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBjb2xvcnNcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG4kYmxhY2s6ICMwMDA7XG4kZ3JheTogIzgwODA4MDtcbiR3aGl0ZTogI2ZmZjtcbiRibHVlOiAjMDBGO1xuJHB1cnBsZTogIzhBNEQ3NjtcbiRwaW5rOiAjRkE3QzkxO1xuJGJyb3duOiAjNzU3NzYzO1xuJGJlaWdlLWxpZ2h0OiAjRDBEMUNEO1xuJGJlaWdlLWxpZ2h0ZXItMTogI0VGRjBFQjtcbiRiZWlnZS1saWdodGVyLTI6ICNGNEY0RjQ7XG5cbiRicm93bi1yZWQ6ICM4OTI3MzQ7XG4kZ29sZC15ZWxsb3c6ICNFOEMyMkM7XG4kZGFyay1ncmV5OiAjMjMyNDFmO1xuJGdyZXk6ICM0ZDRjNGQ7XG4kZ29sZDogI0QzQzE5ODtcbiRnb2xkLTI6ICNGMEVBRTM7XG4iLCIvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIG1haW4gbWl4aW5zXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuQG1peGluIGZvbnQtZmFjZSgkZm9udC1mYW1pbHksICRmaWxlLXBhdGgsICR3ZWlnaHQ6IG5vcm1hbCwgJHN0eWxlOiBub3JtYWwsICRhc3NldC1waXBlbGluZTogZmFsc2UpIHtcblx0QGZvbnQtZmFjZSB7XG5cdFx0Zm9udC1mYW1pbHk6ICRmb250LWZhbWlseTtcblx0XHRmb250LXdlaWdodDogJHdlaWdodDtcblx0XHRmb250LXN0eWxlOiAkc3R5bGU7XG5cblx0XHRAaWYgJGFzc2V0LXBpcGVsaW5lPT10cnVlIHtcblx0XHRcdHNyYzogZm9udC11cmwoJyN7JGZpbGUtcGF0aH0uZW90Jyk7XG5cdFx0XHRzcmM6IGZvbnQtdXJsKCcjeyRmaWxlLXBhdGh9LmVvdD8jaWVmaXgnKSBmb3JtYXQoJ2VtYmVkZGVkLW9wZW50eXBlJyksXG5cdFx0XHRmb250LXVybCgnI3skZmlsZS1wYXRofS53b2ZmJykgZm9ybWF0KCd3b2ZmJyksXG5cdFx0XHRmb250LXVybCgnI3skZmlsZS1wYXRofS50dGYnKSBmb3JtYXQoJ3RydWV0eXBlJyk7XG5cdFx0fVxuXG5cdFx0QGVsc2Uge1xuXHRcdFx0c3JjOiB1cmwoJyN7JGZpbGUtcGF0aH0uZW90Jyk7XG5cdFx0XHRzcmM6IHVybCgnI3skZmlsZS1wYXRofS5lb3Q/I2llZml4JykgZm9ybWF0KCdlbWJlZGRlZC1vcGVudHlwZScpLFxuXHRcdFx0dXJsKCcjeyRmaWxlLXBhdGh9LndvZmYnKSBmb3JtYXQoJ3dvZmYnKSxcblx0XHRcdHVybCgnI3skZmlsZS1wYXRofS50dGYnKSBmb3JtYXQoJ3RydWV0eXBlJyk7XG5cdFx0fVxuXHR9XG59XG5cbkBtaXhpbiBub3RleHQge1xuXHRvdmVyZmxvdzogaGlkZGVuO1xuXHR0ZXh0LWluZGVudDogLTk5OTlweDtcbn1cblxuLmNsZWFyZml4OmFmdGVyIHtcblx0Y29udGVudDogXCJcIjtcblx0ZGlzcGxheTogdGFibGU7XG5cdGNsZWFyOiBib3RoO1xufVxuXG4uY2VudGVyZWQge1xuXHRkaXNwbGF5OiB0YWJsZTtcblx0d2lkdGg6IDEwMCU7XG5cdGhlaWdodDogMTAwJTtcblxuXHQ+KiB7XG5cdFx0ZGlzcGxheTogdGFibGUtY2VsbDtcblx0XHR0ZXh0LWFsaWduOiBjZW50ZXI7XG5cdFx0dmVydGljYWwtYWxpZ246IG1pZGRsZTtcblx0fVxufVxuXG5AbWl4aW4gcGxhY2Vob2xkZXJDb2xvcigkaW5wdXQtdGV4dC1jb2xvcikge1xuXHQmOjotd2Via2l0LWlucHV0LXBsYWNlaG9sZGVyIHtcblx0XHRjb2xvcjogJGlucHV0LXRleHQtY29sb3I7XG5cdH1cblxuXHQmOi1tb3otcGxhY2Vob2xkZXIge1xuXHRcdGNvbG9yOiAkaW5wdXQtdGV4dC1jb2xvcjtcblx0XHRvcGFjaXR5OiAxO1xuXHR9XG5cblx0Jjo6LW1vei1wbGFjZWhvbGRlciB7XG5cdFx0Y29sb3I6ICRpbnB1dC10ZXh0LWNvbG9yO1xuXHRcdG9wYWNpdHk6IDE7XG5cdH1cblxuXHQmOi1tcy1pbnB1dC1wbGFjZWhvbGRlciB7XG5cdFx0Y29sb3I6ICRpbnB1dC10ZXh0LWNvbG9yO1xuXHR9XG5cblx0Jjo6cGxhY2Vob2xkZXIge1xuXHRcdGNvbG9yOiAkaW5wdXQtdGV4dC1jb2xvcjtcblx0XHRvcGFjaXR5OiAxO1xuXHR9XG5cblx0Jjpmb2N1czotbW96LXBsYWNlaG9sZGVyIHtcblx0XHRjb2xvcjogdHJhbnNwYXJlbnQ7XG5cdFx0b3BhY2l0eTogMTtcblx0fVxuXG5cdCY6Zm9jdXM6Oi1tb3otcGxhY2Vob2xkZXIge1xuXHRcdGNvbG9yOiB0cmFuc3BhcmVudDtcblx0XHRvcGFjaXR5OiAxO1xuXHR9XG5cblx0Jjpmb2N1czo6LXdlYmtpdC1pbnB1dC1wbGFjZWhvbGRlciB7XG5cdFx0Y29sb3I6IHRyYW5zcGFyZW50O1xuXHR9XG5cblx0Jjpmb2N1czotbXMtaW5wdXQtcGxhY2Vob2xkZXIge1xuXHRcdGNvbG9yOiB0cmFuc3BhcmVudDtcblx0fVxuXG5cdCY6Zm9jdXM6OnBsYWNlaG9sZGVyIHtcblx0XHRjb2xvcjogdHJhbnNwYXJlbnQ7XG5cdH1cbn1cblxuQG1peGluIGNsZWFyZml4IHtcblx0JjphZnRlciB7XG5cdFx0Y29udGVudDogXCIgXCI7XG5cdFx0ZGlzcGxheTogYmxvY2s7XG5cdFx0Y2xlYXI6IGJvdGg7XG5cdH1cbn1cblxuLy8gY2xlYXIgc2VsZWN0IHdpdGhvdXQgZGVmYXVsdCBidXR0b25cbkBtaXhpbiBjbGVhclNlbGVjdCB7XG5cdC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcblx0LW1vei1hcHBlYXJhbmNlOiBub25lO1xuXHRhcHBlYXJhbmNlOiBub25lO1xuXHQtd2Via2l0LWJvcmRlci1yYWRpdXM6IDA7XG5cdC1tb3otYm9yZGVyLXJhZGl1czogMDtcblx0Ym9yZGVyLXJhZGl1czogMDtcbn1cblxuLy8gZWxlbWVudHMgZ2V0IGFwcGVuZGVkIHdpdGggXCJfX1wiIGFuZCB0aGUgJG5hbWVcbkBtaXhpbiBlKCRuYW1lKSB7XG5cdEBhdC1yb290ICN7Jn1fI3skbmFtZX0ge1xuXHRcdEBjb250ZW50O1xuXHR9XG59XG5cbi8vIG1vZGlmaWVycyBnZXQgYXBwZW5kZWQgd2l0aCBcIi0tXCIgYW5kIHRoZSAkbmFtZVxuQG1peGluIG0oJG5hbWUpIHtcblx0QGF0LXJvb3QgI3smfS0tI3skbmFtZX0ge1xuXHRcdEBjb250ZW50O1xuXHR9XG59XG5cbi8vIGJyZWFrcG9pbnRzXG5AbWl4aW4gYigkcG9pbnQpIHtcblx0QGlmICRwb2ludD09ZGVza3RvcCB7XG5cdFx0QG1lZGlhIChtYXgtd2lkdGg6IDEzNjZweCkgYW5kIChtaW4td2lkdGg6MTAyNHB4KSB7XG5cdFx0XHRAY29udGVudCA7XG5cdFx0fVxuXHR9XG5cblx0QGVsc2UgaWYgJHBvaW50PT10YWJsZXQge1xuXHRcdEBtZWRpYSAobWF4LXdpZHRoOiAxMDAwcHgpIHtcblx0XHRcdEBjb250ZW50IDtcblx0XHR9XG5cdH1cblxuXHRAZWxzZSBpZiAkcG9pbnQ9PW1vYmlsZSB7XG5cdFx0QG1lZGlhIChtYXgtd2lkdGg6IDc2N3B4KSB7XG5cdFx0XHRAY29udGVudCA7XG5cdFx0fVxuXHR9XG5cblx0QGVsc2UgaWYgJHBvaW50PT1tb2JpbGUzeCB7XG5cblx0XHRAbWVkaWEgb25seSBzY3JlZW4gYW5kICgtd2Via2l0LW1pbi1kZXZpY2UtcGl4ZWwtcmF0aW86IDMpLFxuXHRcdG9ubHkgc2NyZWVuIGFuZCAobWluLXJlc29sdXRpb246IDNkcHB4KSxcblx0XHRvbmx5IHNjcmVlbiBhbmQgKG1pbi1yZXNvbHV0aW9uOiAzNTBkcGkpIHtcblx0XHRcdEBjb250ZW50IDtcblx0XHR9XG5cdH1cblxuXHRAZWxzZSB7XG5cdFx0QG1lZGlhIChtYXgtd2lkdGg6ICRwb2ludCArICdweCcpIHtcblx0XHRcdEBjb250ZW50IDtcblx0XHR9XG5cdH1cbn1cblxuLy8gYnJlYWtwb2ludHNcbkBtaXhpbiBiYigkcG9pbnRNYXgsICRwb2ludE1pbikge1xuXHRAbWVkaWEgKG1heC13aWR0aDogJHBvaW50TWF4ICsgJ3B4JykgYW5kIChtaW4td2lkdGg6ICRwb2ludE1pbiArICdweCcpIHtcblx0XHRAY29udGVudCA7XG5cdH1cbn1cblxuQG1peGluIGllKCkge1xuXG5cdEBtZWRpYSBzY3JlZW4gYW5kICgtbXMtaGlnaC1jb250cmFzdDogYWN0aXZlKSxcblx0KC1tcy1oaWdoLWNvbnRyYXN0OiBub25lKSB7XG5cdFx0QGNvbnRlbnQgO1xuXHR9XG59XG5cbkBtaXhpbiBiZWZvcmUtaW1nKCRkaXNwbGF5LCAkd2lkdGgsICRoZWlnaHQsICRwb3NpdGlvbikge1xuXHRAYXQtcm9vdCAjeyZ9OmJlZm9yZSB7XG5cdFx0Y29udGVudDogJyc7XG5cdFx0ZGlzcGxheTogJGRpc3BsYXk7XG5cblx0XHRAaWYgJHBvc2l0aW9uPT1hIHtcblx0XHRcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcblx0XHR9XG5cblx0XHRAaWYgJHBvc2l0aW9uPT1yIHtcblx0XHRcdHBvc2l0aW9uOiByZWxhdGl2ZTtcblx0XHR9XG5cblx0XHR3aWR0aDogJHdpZHRoO1xuXHRcdGhlaWdodDogJGhlaWdodDtcblx0XHRAY29udGVudDtcblx0fVxufVxuXG5AbWl4aW4gYWZ0ZXItaW1nKCRkaXNwbGF5LCAkd2lkdGgsICRoZWlnaHQsICRwb3NpdGlvbikge1xuXHRAYXQtcm9vdCAjeyZ9OmFmdGVyIHtcblx0XHRjb250ZW50OiAnJztcblx0XHRkaXNwbGF5OiAkZGlzcGxheTtcblxuXHRcdEBpZiAkcG9zaXRpb249PWEge1xuXHRcdFx0cG9zaXRpb246IGFic29sdXRlO1xuXHRcdH1cblxuXHRcdEBpZiAkcG9zaXRpb249PXIge1xuXHRcdFx0cG9zaXRpb246IHJlbGF0aXZlO1xuXHRcdH1cblxuXHRcdHdpZHRoOiAkd2lkdGg7XG5cdFx0aGVpZ2h0OiAkaGVpZ2h0O1xuXHRcdEBjb250ZW50O1xuXHR9XG59XG5cbi8qIHJlbSBmb250IHNpemUgd2l0aCBmYWxsYmFjayB8IHVzYWdlOlxuXHRwIHtcblx0XHRAaW5jbHVkZSBmb250LXNpemUoMTRweClcblx0fSovXG5cbkBmdW5jdGlvbiBjYWxjdWxhdGVSZW0oJHNpemUpIHtcblx0JHJlbVNpemU6ICRzaXplIC8gMTZweDtcblx0QHJldHVybiAkcmVtU2l6ZSAqIDFyZW07XG59XG5cbkBtaXhpbiBmb250LXNpemUoJHNpemUpIHtcblx0Zm9udC1zaXplOiAkc2l6ZTtcblx0Zm9udC1zaXplOiBjYWxjdWxhdGVSZW0oJHNpemUpO1xufVxuXG5AbWl4aW4gdGV4dEN1dCgkY29sLCAkaGVpZ2h0KSB7XG5cdGRpc3BsYXk6IC13ZWJraXQtYm94O1xuXHQtd2Via2l0LWxpbmUtY2xhbXA6ICRjb2w7XG5cdC13ZWJraXQtYm94LW9yaWVudDogdmVydGljYWw7XG5cdG92ZXJmbG93OiBoaWRkZW47XG5cdG1heC1oZWlnaHQ6ICRoZWlnaHQ7XG59XG5cbi8vIGJ1dHRvbnNcblxuQG1peGluIGJ0bi1ncmFkaWVudCgkY1RleHQsICRjSG92ZXIsICRkaXJlY3Rpb24sICRjRmlyc3QsICRjU2Vjb25zLCAkY1RoaXJkLCAkaG92ZXIpIHtcblx0Y29sb3I6ICRjVGV4dDtcblx0dHJhbnNpdGlvbjogMC41cztcblx0YmFja2dyb3VuZC1zaXplOiAyMDAlIGF1dG87XG5cdGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgkZGlyZWN0aW9uLCAkY0ZpcnN0IDAlLCAkY1NlY29ucyA1MSUsICRjVGhpcmQgMTAwJSk7XG5cblx0Jjpob3ZlciB7XG5cdFx0dGV4dC1kZWNvcmF0aW9uOiBub25lO1xuXHRcdGJhY2tncm91bmQtcG9zaXRpb246ICRob3Zlcjtcblx0XHRjb2xvcjogJGNIb3Zlcjtcblx0XHRib3gtc2hhZG93OiAwcHggMjBweCAzMHB4IC0xNXB4ICRjVGhpcmQ7XG5cdH1cbn1cblxuQG1peGluIGdyYWRpZW50KCR0b3AsICRib3R0b20pIHtcblx0YmFja2dyb3VuZDogJHRvcDtcblx0YmFja2dyb3VuZDogLW1vei1saW5lYXItZ3JhZGllbnQodG9wLCAkdG9wIDAlLCAkYm90dG9tIDEwMCUpO1xuXHRiYWNrZ3JvdW5kOiAtd2Via2l0LWdyYWRpZW50KGxpbmVhciwgbGVmdCB0b3AsIGxlZnQgYm90dG9tLCBjb2xvci1zdG9wKDAlLCAkdG9wKSwgY29sb3Itc3RvcCgxMDAlLCAkYm90dG9tKSk7XG5cdGJhY2tncm91bmQ6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KHRvcCwgJHRvcCAwJSwgJGJvdHRvbSAxMDAlKTtcblx0YmFja2dyb3VuZDogLW8tbGluZWFyLWdyYWRpZW50KHRvcCwgJHRvcCAwJSwgJGJvdHRvbSAxMDAlKTtcblx0YmFja2dyb3VuZDogLW1zLWxpbmVhci1ncmFkaWVudCh0b3AsICR0b3AgMCUsICRib3R0b20gMTAwJSk7XG5cdGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sICR0b3AgMCUsICRib3R0b20gMTAwJSk7XG5cdGZpbHRlcjogcHJvZ2lkOkRYSW1hZ2VUcmFuc2Zvcm0uTWljcm9zb2Z0LmdyYWRpZW50KHN0YXJ0Q29sb3JzdHI9JyN7JHRvcH0nLCBlbmRDb2xvcnN0cj0nI3skYm90dG9tfSAnLCBHcmFkaWVudFR5cGU9MCk7XG59IiwiQGltcG9ydCB1cmwoXCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9TW9udHNlcnJhdDoxMDAsMTAwaSwyMDAsMjAwaSwzMDAsMzAwaSw0MDAsNDAwaSw1MDAsNTAwaSw2MDAsNjAwaSw3MDAsNzAwaSw4MDAsODAwaSw5MDAsOTAwaSZkaXNwbGF5PXN3YXBcIik7XG4uY2xlYXJmaXg6YWZ0ZXIge1xuICBjb250ZW50OiBcIlwiO1xuICBkaXNwbGF5OiB0YWJsZTtcbiAgY2xlYXI6IGJvdGg7XG59XG5cbi5jZW50ZXJlZCB7XG4gIGRpc3BsYXk6IHRhYmxlO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuLmNlbnRlcmVkID4gKiB7XG4gIGRpc3BsYXk6IHRhYmxlLWNlbGw7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbn1cblxuLyogcmVtIGZvbnQgc2l6ZSB3aXRoIGZhbGxiYWNrIHwgdXNhZ2U6XG5cdHAge1xuXHRcdEBpbmNsdWRlIGZvbnQtc2l6ZSgxNHB4KVxuXHR9Ki9cbnNlY3Rpb24udm91Y2hlciB7XG4gIGJhY2tncm91bmQ6IG5vbmU7XG4gIHBhZGRpbmctdG9wOiA1MHB4O1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDYwMHB4KSB7XG4gIHNlY3Rpb24udm91Y2hlciAuY29udGFpbmVyIHtcbiAgICBwYWRkaW5nOiAwIDEwcHg7XG4gIH1cbn1cbnNlY3Rpb24udm91Y2hlciAudGV4dC1jZW50ZXIge1xuICB0ZXh0LWFsaWduOiBjZW50ZXIgIWltcG9ydGFudDtcbn1cbnNlY3Rpb24udm91Y2hlciAuY29udGVudC1ibG9jayB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA2NTBweCkge1xuICBzZWN0aW9uLnZvdWNoZXIgLmNvbnRlbnQtYmxvY2sge1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIH1cbn1cbnNlY3Rpb24udm91Y2hlciAucGFnZS10ZXh0LXRpdGxlIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZm9udC1zaXplOiAzMHB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgY29sb3I6ICM0MTRCNTM7XG59XG5AbWVkaWEgKG1heC13aWR0aDogNjUwcHgpIHtcbiAgc2VjdGlvbi52b3VjaGVyIC5wYWdlLXRleHQtdGl0bGUge1xuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gIH1cbn1cbnNlY3Rpb24udm91Y2hlciAucGFnZS10ZXh0LXRpdGxlOmFmdGVyIHtcbiAgY29udGVudDogXCJcIjtcbiAgaGVpZ2h0OiAycHg7XG4gIHdpZHRoOiA5MHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjODkyNzM0O1xuICBtYXJnaW4tdG9wOiAyMHB4O1xufVxuc2VjdGlvbi52b3VjaGVyIC5wYWdlLWJ0bi1ibG9jayB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDMsIG1heC1jb250ZW50KTtcbiAgZ3JpZC1nYXA6IDIwcHg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5AbWVkaWEgKG1heC13aWR0aDogNTUwcHgpIHtcbiAgc2VjdGlvbi52b3VjaGVyIC5wYWdlLWJ0bi1ibG9jayB7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XG4gIH1cbn1cbnNlY3Rpb24udm91Y2hlciAucGFnZS1idG4tYmxvY2sgc3BhbiB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbnNlY3Rpb24udm91Y2hlciAucGFnZS1idG4tYmxvY2sgLnRhYmxlLXJlZnJlc2gge1xuICBtaW4td2lkdGg6IDUwcHg7XG59XG5zZWN0aW9uLnZvdWNoZXIgLnBhZ2UtYnRuLWJsb2NrIC50YWJsZS1yZWZyZXNoLmljb25fX2xvYWRpbmcge1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIHdpZHRoOiA1MHB4O1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDU1MHB4KSB7XG4gIHNlY3Rpb24udm91Y2hlciAucGFnZS1idG4tYmxvY2sgLnRhYmxlLXJlZnJlc2guaWNvbl9fbG9hZGluZyB7XG4gICAgbWluLXdpZHRoOiAyMDBweDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIH1cbn1cbnNlY3Rpb24udm91Y2hlciAucGFnZS1idG4tYmxvY2sgLmljb25fX3VwZGF0ZSB7XG4gIG1pbi13aWR0aDogNDBweDtcbiAgd2lkdGg6IDU1cHg7XG4gIG9wYWNpdHk6IDE7XG59XG5AbWVkaWEgKG1heC13aWR0aDogNTUwcHgpIHtcbiAgc2VjdGlvbi52b3VjaGVyIC5wYWdlLWJ0bi1ibG9jayAuaWNvbl9fdXBkYXRlIHtcbiAgICBtaW4td2lkdGg6IDIwMHB4O1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG59XG5zZWN0aW9uLnZvdWNoZXIgLnBhZ2UtYnRuLWJsb2NrIC5pY29uX19sb2FkaW5nIHtcbiAgbWluLXdpZHRoOiA0MHB4O1xuICB3aWR0aDogNTVweDtcbiAgb3BhY2l0eTogMC45O1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDU1MHB4KSB7XG4gIHNlY3Rpb24udm91Y2hlciAucGFnZS1idG4tYmxvY2sgLmljb25fX2xvYWRpbmcge1xuICAgIG1pbi13aWR0aDogMjAwcHg7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbn1cbnNlY3Rpb24udm91Y2hlciAucGFnZS10YWJsZSB7XG4gIG1hcmdpbi10b3A6IDUwcHg7XG4gIHdpZHRoOiAxMDAlO1xuICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDQ1MHB4KSB7XG4gIHNlY3Rpb24udm91Y2hlciAucGFnZS10YWJsZSB7XG4gICAgbWFyZ2luLXRvcDogMzBweDtcbiAgfVxufVxuc2VjdGlvbi52b3VjaGVyIC5wYWdlLXRhYmxlLWJsb2NrZWQge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiBjYWxjKDEwMCUgLSAyOXB4KTtcbiAgei1pbmRleDogOTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZjZjlmNmU2O1xuICBoZWlnaHQ6IDY3cHg7XG4gIGxlZnQ6IDE1cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNFMkUyRTIgIWltcG9ydGFudDtcbn1cbnNlY3Rpb24udm91Y2hlciAucGFnZS10YWJsZS1ibG9ja2VkLXRleHQge1xuICBjb2xvcjogIzg5MjczNDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXNpemU6IDE1cHg7XG4gIGxldHRlci1zcGFjaW5nOiAycHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG5zZWN0aW9uLnZvdWNoZXIgLnBhZ2UtdGFibGUtYmxvY2tlZC1idG4ge1xuICBtaW4td2lkdGg6IDcwcHg7XG4gIG1pbi1oZWlnaHQ6IDQwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gIG1hcmdpbi1sZWZ0OiAyMHB4O1xufVxuc2VjdGlvbi52b3VjaGVyIC5wYWdlLXRhYmxlLXdyYXAge1xuICB3aWR0aDogMTAwJTtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiAxMTAwcHgpIHtcbiAgc2VjdGlvbi52b3VjaGVyIC5wYWdlLXRhYmxlLXdyYXAge1xuICAgIG92ZXJmbG93LXg6IHNjcm9sbDtcbiAgfVxufVxuc2VjdGlvbi52b3VjaGVyIC5wYWdlLXRhYmxlLXcge1xuICBkaXNwbGF5OiBibG9jaztcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgb3ZlcmZsb3c6IGhpZGRlbiAhaW1wb3J0YW50O1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbn1cbnNlY3Rpb24udm91Y2hlciAucGFnZS10YWJsZSB0ZCwgc2VjdGlvbi52b3VjaGVyIC5wYWdlLXRhYmxlIHRyLCBzZWN0aW9uLnZvdWNoZXIgLnBhZ2UtdGFibGUgdGgge1xuICBib3JkZXI6IG5vbmU7XG59XG5zZWN0aW9uLnZvdWNoZXIgLnBhZ2UtdGFibGUgLnZvdWNoZXItc2hvdy1pbmZvIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBmb250LXNpemU6IDEwcHg7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgbGluZS1oZWlnaHQ6IDE7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAxNXB4O1xuICByaWdodDogNXB4O1xuICBjb2xvcjogIzVDNUE1NztcbiAgdHJhbnNpdGlvbjogMC40cyBlYXNlO1xufVxuc2VjdGlvbi52b3VjaGVyIC5wYWdlLXRhYmxlIC52b3VjaGVyLXNob3ctaW5mbzpob3ZlciB7XG4gIGNvbG9yOiAjODkyNzM0O1xuICB0cmFuc2l0aW9uOiAwLjRzIGVhc2U7XG59XG5zZWN0aW9uLnZvdWNoZXIgLnBhZ2UtdGFibGUgLnZvdWNoZXItYWN0aXZhdGlvbi1jb2RlIHtcbiAgbWF4LXdpZHRoOiAyNzBweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuc2VjdGlvbi52b3VjaGVyIC5wYWdlLXRhYmxlIC52b3VjaGVyLXZvdWNoZXItY29kZSB7XG4gIG1heC13aWR0aDogMjAwcHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbnNlY3Rpb24udm91Y2hlciAucGFnZS10YWJsZSAudm91Y2hlci1kdWNhdHVzLWFtb3VudCB7XG4gIG1heC13aWR0aDogMTAwcHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbnNlY3Rpb24udm91Y2hlciAucGFnZS10YWJsZS1oZWFkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0Y5RjdGMTtcbn1cbnNlY3Rpb24udm91Y2hlciAucGFnZS10YWJsZS1oZWFkIHRoIHtcbiAgY29sb3I6ICM4OTI3MzQ7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LXNpemU6IDE2cHg7XG4gIHBhZGRpbmc6IDE1cHggMTBweDtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNFMkUyRTI7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbnNlY3Rpb24udm91Y2hlciAucGFnZS10YWJsZS1oZWFkIC50YWJsZS1zb3J0IHtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogbWF4LWNvbnRlbnQgMTRweDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ3JpZC1nYXA6IDVweDtcbn1cbnNlY3Rpb24udm91Y2hlciAucGFnZS10YWJsZS1oZWFkIC5pY29uOmJlZm9yZSB7XG4gIHotaW5kZXg6IDE7XG4gIGdyaWQtcm93OiAxO1xuICBncmlkLWNvbHVtbjogMjtcbn1cbnNlY3Rpb24udm91Y2hlciAucGFnZS10YWJsZS10ZXh0LWFjY2VudCB7XG4gIGNvbG9yOiAjODkyNzM0O1xufVxuc2VjdGlvbi52b3VjaGVyIC5wYWdlLXRhYmxlLWFjdGl2ZSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDE4cHg7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vLi4vYXNzZXRzL2ltZy9pY29ucy9uby5zdmdcIik7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbn1cbnNlY3Rpb24udm91Y2hlciAucGFnZS10YWJsZS1hY3RpdmUteWVzIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vLi4vYXNzZXRzL2ltZy9pY29ucy95ZXMuc3ZnXCIpO1xufVxuc2VjdGlvbi52b3VjaGVyIC5wYWdlLXRhYmxlLWJvZHkge1xuICBmb250LXNpemU6IDE2cHg7XG4gIGxpbmUtaGVpZ2h0OiAyNXB4O1xuICBmb250LXdlaWdodDogMzAwO1xuICBjb2xvcjogIzVDNUE1Nztcbn1cbnNlY3Rpb24udm91Y2hlciAucGFnZS10YWJsZS1ib2R5IHRyIHRkIHtcbiAgcGFkZGluZzogMjBweCAxMHB4O1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI0UyRTJFMjtcbn1cbnNlY3Rpb24udm91Y2hlciAucGFnZS10YWJsZS1ib2R5IHRyIHRkOm50aC1jaGlsZCgxKSB7XG4gIGJvcmRlci1sZWZ0OiAxcHggc29saWQgI0UyRTJFMjtcbn1cbnNlY3Rpb24udm91Y2hlciAucGFnZS10YWJsZS1ib2R5IHRyIHRkOm50aC1sYXN0LWNoaWxkKDEpIHtcbiAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgI0UyRTJFMjtcbn1cbnNlY3Rpb24udm91Y2hlciAucGFnZS10YWJsZS1ib2R5IHRyOmhvdmVyIHRkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y3ZjdmNztcbn1cbnNlY3Rpb24udm91Y2hlciAucGFnZS10YWJsZS1ib2R5IC50YWJsZS1saW5lLWJsb2NrZWQ6aG92ZXIgdGQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmNmOWY2ZTYgIWltcG9ydGFudDtcbn1cblxuLnBvcHVwLXZvdWNoZXIge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4yMzMpO1xuICB6LWluZGV4OiA5OTk7XG59XG4ucG9wdXAtY29udGFpbmVyIHtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0ZGRkZGRjtcbiAgbWF4LXdpZHRoOiA0OTBweDtcbiAgd2lkdGg6IDEwMCU7XG4gIGJveC1zaGFkb3c6IDBweCA0cHggMjVweCByZ2JhKDAsIDAsIDAsIDAuMTUpO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG4ucG9wdXAtY29udGFpbmVyLW1vZGFsIHtcbiAgbWF4LXdpZHRoOiBtYXgtY29udGVudDtcbiAgbWluLXdpZHRoOiAzMDBweDtcbn1cbi5wb3B1cC1ibG9ja2VkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZjZjlmNmRiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHotaW5kZXg6IDk5OTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbn1cbi5wb3B1cC1ibG9ja2VkLXRleHQge1xuICBjb2xvcjogIzg5MjczNDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXNpemU6IDE1cHg7XG4gIGxldHRlci1zcGFjaW5nOiAycHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGxpbmUtaGVpZ2h0OiAwLjk7XG4gIG1hcmdpbi1ib3R0b206IDI1cHg7XG59XG4ucG9wdXAtY2xvc2Uge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBjb2xvcjogI0FCOEI4QjtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgd2lkdGg6IDMwcHg7XG4gIGhlaWdodDogMzBweDtcbiAgcmlnaHQ6IDE1cHg7XG4gIHRvcDogMTVweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHRyYW5zaXRpb246IDAuNHMgZWFzZTtcbn1cbi5wb3B1cC1jbG9zZTpob3ZlciB7XG4gIHRyYW5zaXRpb246IDAuNHMgZWFzZTtcbiAgYm94LXNoYWRvdzogMHB4IDRweCAyNXB4IHJnYmEoMCwgMCwgMCwgMC4xNSk7XG59XG4ucG9wdXAtbGFiZWwge1xuICBtYXJnaW4tcmlnaHQ6IDIwcHg7XG4gIHdpZHRoOiBtYXgtY29udGVudCAhaW1wb3J0YW50O1xufVxuLnBvcHVwLWhlYWRlciB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgYmFja2dyb3VuZDogI0U5RENDQTtcbiAgYm9yZGVyLXJhZGl1czogOHB4IDhweCAwIDA7XG4gIHBhZGRpbmc6IDIwcHggNDVweDtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA2MDBweCkge1xuICAucG9wdXAtaGVhZGVyIHtcbiAgICBwYWRkaW5nOiAyMHB4IDIwcHg7XG4gIH1cbn1cbi5wb3B1cC1oZWFkZXItdGV4dCB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LXNpemU6IDE2cHg7XG4gIGNvbG9yOiAjODkyNzM0O1xufVxuLnBvcHVwLWJvZHkge1xuICBwYWRkaW5nOiAzMHB4IDQ1cHg7XG4gIHdvcmQtYnJlYWs6IGJyZWFrLWFsbDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDYwMHB4KSB7XG4gIC5wb3B1cC1ib2R5IHtcbiAgICBwYWRkaW5nOiAyMHB4IDIwcHg7XG4gIH1cbn1cbi5wb3B1cC1ib2R5LXRleHQge1xuICBjb2xvcjogIzQxNGI1MzdjO1xuICBsZXR0ZXItc3BhY2luZzogMXB4O1xuICBmb250LXNpemU6IDE0cHg7XG59XG4ucG9wdXAtZm9ybSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG4ucG9wdXAtZm9ybSBpbnB1dCB7XG4gIHBhZGRpbmctcmlnaHQ6IDA7XG59XG4ucG9wdXAtZm9ybS10ZXh0LWxhYmVsIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0ZCRjlGNjtcbiAgaGVpZ2h0OiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNDRkI3Nzg7XG4gIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICNDRkI3Nzg7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjQ0ZCNzc4O1xuICBjb2xvcjogIzQxNGI1MzdjO1xuICBmb250LXNpemU6IDE2cHg7XG4gIHdpZHRoOiA2MHB4O1xuICB0cmFuc2l0aW9uOiAwLjRzIGVhc2U7XG4gIGJvcmRlci1yYWRpdXM6IDAgMTJweCAxMnB4IDA7XG59XG4ucG9wdXAtZm9ybS1pbnB1dCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgbWF4LWNvbnRlbnQ7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBtYXJnaW4tYm90dG9tOiAzMHB4O1xufVxuLnBvcHVwLWZvcm0taW5wdXQgLmljb24ge1xuICBoZWlnaHQ6IDEwMCU7XG4gIGJhY2tncm91bmQtY29sb3I6ICNGQkY5RjY7XG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAjQ0ZCNzc4O1xuICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjQ0ZCNzc4O1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI0NGQjc3ODtcbiAgYm9yZGVyLWxlZnQ6IG5vbmU7XG4gIGJvcmRlci1yYWRpdXM6IDAgMTJweCAxMnB4IDA7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB3aWR0aDogNDBweDtcbn1cbi5wb3B1cC1mb3JtLWlucHV0IC5pY29uOmJlZm9yZSB7XG4gIHRyYW5zaXRpb246IDAuNHMgZWFzZTtcbiAgb3BhY2l0eTogMC4zO1xufVxuLnBvcHVwLWZvcm0taW5wdXQgLmljb246aG92ZXIge1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4ucG9wdXAtZm9ybS1pbnB1dCAuaWNvbjpob3ZlcjpiZWZvcmUge1xuICB0cmFuc2l0aW9uOiAwLjRzIGVhc2U7XG4gIG9wYWNpdHk6IDE7XG59XG4ucG9wdXAtZm9ybSBpbnB1dCxcbi5wb3B1cC1mb3JtIGxhYmVsIHtcbiAgd2lkdGg6IDEwMCU7XG59XG4ucG9wdXAtZm9ybSBsYWJlbCB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgY29sb3I6ICM0MTRCNTM7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbn1cbi5wb3B1cC1mb3JtIGlucHV0IHtcbiAgYm9yZGVyLXJhZGl1czogMTJweCAwIDAgMTJweDtcbiAgdHJhbnNpdGlvbjogMC40cyBlYXNlO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgcGFkZGluZy1sZWZ0OiAyMHB4O1xufVxuLnBvcHVwLWZvcm0gaW5wdXQ6Zm9jdXMgfiAucG9wdXAtZm9ybS10ZXh0LWxhYmVsIHtcbiAgdHJhbnNpdGlvbjogMC40cyBlYXNlO1xuICBjb2xvcjogYmxhY2s7XG59XG4ucG9wdXAtZm9ybSAuZHVjYXR1cy1pbnB1dHMtc3dpdGNoIHtcbiAgd2lkdGg6IDQ0cHg7XG59XG4ucG9wdXAtZm9ybSAuZHVjYXR1cy1idG4ge1xuICBtYXgtd2lkdGg6IDIwMHB4O1xufVxuLnBvcHVwLWZvcm0tZ3JvdXAge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLCAxZnIpO1xuICBncmlkLWdhcDogMjBweDtcbiAgbWFyZ2luLWJvdHRvbTogMzBweDtcbn1cbi5wb3B1cC1mb3JtLWdyb3VwIC5wb3B1cC1mb3JtLWlucHV0IHtcbiAgbWFyZ2luLWJvdHRvbTogMDtcbn1cbi5wb3B1cCBpbnB1dC5uZy10b3VjaGVkLm5nLWludmFsaWQge1xuICBib3JkZXItdG9wOiBzb2xpZCAjODkyNzM0IDFweDtcbiAgYm9yZGVyLWxlZnQ6IHNvbGlkICM4OTI3MzQgMXB4O1xuICBib3JkZXItYm90dG9tOiBzb2xpZCAjODkyNzM0IDFweDtcbn1cbi5wb3B1cCBpbnB1dC5uZy10b3VjaGVkLm5nLWludmFsaWQgfiAuaWNvbixcbi5wb3B1cCBpbnB1dC5uZy10b3VjaGVkLm5nLWludmFsaWQgfiAucG9wdXAtZm9ybS10ZXh0LWxhYmVsIHtcbiAgYm9yZGVyLXRvcDogc29saWQgIzg5MjczNCAxcHg7XG4gIGJvcmRlci1yaWdodDogc29saWQgIzg5MjczNCAxcHg7XG4gIGJvcmRlci1ib3R0b206IHNvbGlkICM4OTI3MzQgMXB4O1xufSIsIkBpbXBvcnQgXCIuLi8uLi8uLi9zY3NzL3ZhcnNcIjtcbkBpbXBvcnQgXCIuLi8uLi8uLi9zY3NzL21peGluc1wiO1xuXG5zZWN0aW9uLnZvdWNoZXIge1xuICBiYWNrZ3JvdW5kOiBub25lO1xuICBwYWRkaW5nLXRvcDogNTBweDtcblxuICAuY29udGFpbmVyIHtcbiAgICBAaW5jbHVkZSBiKDYwMCkge1xuICAgICAgcGFkZGluZzogMCAxMHB4O1xuICAgIH1cbiAgfVxuXG4gIC50ZXh0LWNlbnRlciB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyICFpbXBvcnRhbnQ7XG4gIH1cblxuICAuY29udGVudCB7XG4gICAgJi1ibG9jayB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuXG4gICAgICBAaW5jbHVkZSBiKDY1MCkge1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC5wYWdlIHtcbiAgICAmLXRleHQge1xuICAgICAgJi10aXRsZSB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgIGZvbnQtc2l6ZTogMzBweDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgIGNvbG9yOiAjNDE0QjUzO1xuXG4gICAgICAgIEBpbmNsdWRlIGIoNjUwKSB7XG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgICAgICAgfVxuXG4gICAgICAgICY6YWZ0ZXIge1xuICAgICAgICAgIGNvbnRlbnQ6ICcnO1xuICAgICAgICAgIGhlaWdodDogMnB4O1xuICAgICAgICAgIHdpZHRoOiA5MHB4O1xuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRicm93bi1yZWQ7XG4gICAgICAgICAgbWFyZ2luLXRvcDogMjBweDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgICYtYnRuIHtcbiAgICAgICYtYmxvY2sge1xuICAgICAgICBkaXNwbGF5OiBncmlkO1xuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgzLCBtYXgtY29udGVudCk7XG4gICAgICAgIGdyaWQtZ2FwOiAyMHB4O1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuXG4gICAgICAgIEBpbmNsdWRlIGIoNTUwKSB7XG4gICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XG4gICAgICAgIH1cblxuICAgICAgICBzcGFuIHtcbiAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgIH1cblxuICAgICAgICAudGFibGUtcmVmcmVzaCB7XG4gICAgICAgICAgbWluLXdpZHRoOiA1MHB4O1xuICAgICAgICB9XG5cbiAgICAgICAgLnRhYmxlLXJlZnJlc2guaWNvbl9fbG9hZGluZyB7XG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgICAgIHdpZHRoOiA1MHB4O1xuXG4gICAgICAgICAgQGluY2x1ZGUgYig1NTApIHtcbiAgICAgICAgICAgIG1pbi13aWR0aDogMjAwcHg7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAuaWNvbl9fdXBkYXRlIHtcbiAgICAgICAgICBtaW4td2lkdGg6IDQwcHg7XG4gICAgICAgICAgd2lkdGg6IDU1cHg7XG4gICAgICAgICAgb3BhY2l0eTogMTtcblxuICAgICAgICAgIEBpbmNsdWRlIGIoNTUwKSB7XG4gICAgICAgICAgICBtaW4td2lkdGg6IDIwMHB4O1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLmljb25fX2xvYWRpbmcge1xuICAgICAgICAgIG1pbi13aWR0aDogNDBweDtcbiAgICAgICAgICB3aWR0aDogNTVweDtcbiAgICAgICAgICBvcGFjaXR5OiAwLjk7XG5cbiAgICAgICAgICBAaW5jbHVkZSBiKDU1MCkge1xuICAgICAgICAgICAgbWluLXdpZHRoOiAyMDBweDtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgICYtdGFibGUge1xuICAgICAgbWFyZ2luLXRvcDogNTBweDtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcblxuICAgICAgQGluY2x1ZGUgYig0NTApIHtcbiAgICAgICAgbWFyZ2luLXRvcDogMzBweDtcbiAgICAgIH1cblxuICAgICAgJi1ibG9ja2VkIHtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICB3aWR0aDogY2FsYygxMDAlIC0gMjlweCk7XG4gICAgICAgIHotaW5kZXg6IDk7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmY2Y5ZjZlNjtcbiAgICAgICAgaGVpZ2h0OiA2N3B4O1xuICAgICAgICBsZWZ0OiAxNXB4O1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjRTJFMkUyICFpbXBvcnRhbnQ7XG5cbiAgICAgICAgJi10ZXh0IHtcbiAgICAgICAgICBjb2xvcjogJGJyb3duLXJlZDtcbiAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgZm9udC1zaXplOiAxNXB4O1xuICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAycHg7XG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgfVxuXG4gICAgICAgICYtYnRuIHtcbiAgICAgICAgICBtaW4td2lkdGg6IDcwcHg7XG4gICAgICAgICAgbWluLWhlaWdodDogNDBweDtcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICAgICAgICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgICYtd3JhcCB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuXG4gICAgICAgIEBpbmNsdWRlIGIoMTEwMCkge1xuICAgICAgICAgIG92ZXJmbG93LXg6IHNjcm9sbDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAmLXcge1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbiAhaW1wb3J0YW50O1xuICAgICAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgICAgIH1cblxuICAgICAgdGQsIHRyLCB0aCB7XG4gICAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgIH1cblxuICAgICAgLnZvdWNoZXIge1xuICAgICAgICAmLXNob3ctaW5mbyB7XG4gICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgIGZvbnQtc2l6ZTogMTBweDtcbiAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgICAgbGluZS1oZWlnaHQ6IDE7XG4gICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgIHRvcDogMTVweDtcbiAgICAgICAgICByaWdodDogNXB4O1xuICAgICAgICAgIGNvbG9yOiAjNUM1QTU3O1xuICAgICAgICAgIHRyYW5zaXRpb246IDAuNHMgZWFzZTtcblxuICAgICAgICAgICY6aG92ZXIge1xuICAgICAgICAgICAgY29sb3I6ICRicm93bi1yZWQ7XG4gICAgICAgICAgICB0cmFuc2l0aW9uOiAwLjRzIGVhc2U7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgJi1hY3RpdmF0aW9uLWNvZGUge1xuICAgICAgICAgIG1heC13aWR0aDogMjcwcHg7XG4gICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICB9XG5cbiAgICAgICAgJi12b3VjaGVyLWNvZGUge1xuICAgICAgICAgIG1heC13aWR0aDogMjAwcHg7XG4gICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICB9XG5cbiAgICAgICAgJi1kdWNhdHVzLWFtb3VudCB7XG4gICAgICAgICAgbWF4LXdpZHRoOiAxMDBweDtcbiAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgJi1oZWFkIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI0Y5RjdGMTtcblxuICAgICAgICB0aCB7XG4gICAgICAgICAgY29sb3I6ICRicm93bi1yZWQ7XG4gICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICAgIHBhZGRpbmc6IDE1cHggMTBweDtcbiAgICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjRTJFMkUyO1xuICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIC50YWJsZS1zb3J0IHtcbiAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBtYXgtY29udGVudCAxNHB4O1xuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgZ3JpZC1nYXA6IDVweDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5pY29uIHtcblxuICAgICAgICAgICY6YmVmb3JlIHtcbiAgICAgICAgICAgIHotaW5kZXg6IDE7XG4gICAgICAgICAgICAvLyBwb3NpdGlvbjogcmVsYXRpdmUgIWltcG9ydGFudDtcbiAgICAgICAgICAgIC8vIHJpZ2h0OiAxNXB4O1xuICAgICAgICAgICAgLy8gYm90dG9tOiAxOXB4O1xuICAgICAgICAgICAgZ3JpZC1yb3c6IDE7XG4gICAgICAgICAgICBncmlkLWNvbHVtbjogMjtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAmX19zb3J0LWRvd24sXG4gICAgICAgICAgJl9fc29ydC11cCB7XG4gICAgICAgICAgICAvLyBkaXNwbGF5OiBncmlkO1xuICAgICAgICAgICAgLy8gZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBtYXgtY29udGVudCAxNXB4O1xuICAgICAgICAgICAgLy8gZ3JpZC1nYXA6IDVweDtcbiAgICAgICAgICAgIC8vIGFsaWduLWl0ZW1zOiBlbmQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgJi10ZXh0IHtcbiAgICAgICAgJi1hY2NlbnQge1xuICAgICAgICAgIGNvbG9yOiAkYnJvd24tcmVkO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgICYtYWN0aXZlIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGhlaWdodDogMThweDtcbiAgICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xuICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi8uLi9hc3NldHMvaW1nL2ljb25zL25vLnN2Z1wiKTtcbiAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuXG4gICAgICAgICYteWVzIHtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi8uLi9hc3NldHMvaW1nL2ljb25zL3llcy5zdmdcIik7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgJi1ib2R5IHtcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICBsaW5lLWhlaWdodDogMjVweDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgICAgICAgY29sb3I6ICM1QzVBNTc7XG5cbiAgICAgICAgdHIge1xuICAgICAgICAgIHRkIHtcbiAgICAgICAgICAgIHBhZGRpbmc6IDIwcHggMTBweDtcbiAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjRTJFMkUyO1xuXG4gICAgICAgICAgICAmOm50aC1jaGlsZCgxKSB7XG4gICAgICAgICAgICAgIGJvcmRlci1sZWZ0OiAxcHggc29saWQgI0UyRTJFMjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgJjpudGgtbGFzdC1jaGlsZCgxKSB7XG4gICAgICAgICAgICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICNFMkUyRTI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgICB0ZCB7XG4gICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmN2Y3Zjc7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLnRhYmxlLWxpbmUtYmxvY2tlZCB7XG4gICAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgICB0ZCB7XG4gICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmY2Y5ZjZlNiAhaW1wb3J0YW50O1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICB9XG59XG5cbi5wb3B1cCB7XG4gICYtdm91Y2hlciB7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIHRvcDogMDtcbiAgICBsZWZ0OiAwO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjIzMyk7XG4gICAgei1pbmRleDogOTk5O1xuICB9XG5cbiAgJi1jb250YWluZXIge1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0ZGRkZGRjtcbiAgICBtYXgtd2lkdGg6IDQ5MHB4O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGJveC1zaGFkb3c6IDBweCA0cHggMjVweCByZ2JhKDAsIDAsIDAsIDAuMTUpO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuXG4gICAgJi1tb2RhbCB7XG4gICAgICBtYXgtd2lkdGg6IG1heC1jb250ZW50O1xuICAgICAgbWluLXdpZHRoOiAzMDBweDtcbiAgICB9XG4gIH1cblxuICAmLWJsb2NrZWQge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmY2Y5ZjZkYjtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHotaW5kZXg6IDk5OTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICB0b3A6IDA7XG4gICAgbGVmdDogMDtcblxuICAgICYtdGV4dCB7XG4gICAgICBjb2xvcjogJGJyb3duLXJlZDtcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICAgIGxldHRlci1zcGFjaW5nOiAycHg7XG4gICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgbGluZS1oZWlnaHQ6IDAuOTtcbiAgICAgIG1hcmdpbi1ib3R0b206IDI1cHg7XG4gICAgfVxuICB9XG5cbiAgJi1jbG9zZSB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBjb2xvcjogI0FCOEI4QjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAgIHdpZHRoOiAzMHB4O1xuICAgIGhlaWdodDogMzBweDtcbiAgICByaWdodDogMTVweDtcbiAgICB0b3A6IDE1cHg7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICB0cmFuc2l0aW9uOiAwLjRzIGVhc2U7XG5cbiAgICAmOmhvdmVyIHtcbiAgICAgIHRyYW5zaXRpb246IDAuNHMgZWFzZTtcbiAgICAgIGJveC1zaGFkb3c6IDBweCA0cHggMjVweCByZ2JhKDAsIDAsIDAsIDAuMTUpO1xuICAgIH1cbiAgfVxuXG4gICYtbGFiZWwge1xuICAgIG1hcmdpbi1yaWdodDogMjBweDtcbiAgICB3aWR0aDogbWF4LWNvbnRlbnQgIWltcG9ydGFudDtcbiAgfVxuXG4gICYtaGVhZGVyIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgYmFja2dyb3VuZDogI0U5RENDQTtcbiAgICBib3JkZXItcmFkaXVzOiA4cHggOHB4IDAgMDtcbiAgICBwYWRkaW5nOiAyMHB4IDQ1cHg7XG5cbiAgICBAaW5jbHVkZSBiKDYwMCkge1xuICAgICAgcGFkZGluZzogMjBweCAyMHB4O1xuICAgIH1cblxuICAgICYtdGV4dCB7XG4gICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgIGNvbG9yOiAkYnJvd24tcmVkO1xuICAgIH1cbiAgfVxuXG4gICYtYm9keSB7XG4gICAgcGFkZGluZzogMzBweCA0NXB4O1xuICAgIHdvcmQtYnJlYWs6IGJyZWFrLWFsbDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcblxuICAgIEBpbmNsdWRlIGIoNjAwKSB7XG4gICAgICBwYWRkaW5nOiAyMHB4IDIwcHg7XG4gICAgfVxuXG4gICAgJi10ZXh0IHtcbiAgICAgIGNvbG9yOiAjNDE0YjUzN2M7XG4gICAgICBsZXR0ZXItc3BhY2luZzogMXB4O1xuICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgIH1cbiAgfVxuXG4gICYtZm9ybSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXG4gICAgaW5wdXQge1xuICAgICAgcGFkZGluZy1yaWdodDogMDtcbiAgICB9XG5cbiAgICAmLXRleHQge1xuICAgICAgJi1sYWJlbCAge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkJGOUY2O1xuICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICBib3JkZXItdG9wOiAxcHggc29saWQgI0NGQjc3ODtcbiAgICAgICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgI0NGQjc3ODtcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNDRkI3Nzg7XG4gICAgICAgIGNvbG9yOiAjNDE0YjUzN2M7XG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgd2lkdGg6IDYwcHg7XG4gICAgICAgIHRyYW5zaXRpb246IDAuNHMgZWFzZTtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMCAxMnB4IDEycHggMDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAmLWlucHV0IHtcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciBtYXgtY29udGVudDtcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XG5cbiAgICAgIC5pY29uIHtcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkJGOUY2O1xuICAgICAgICBib3JkZXItdG9wOiAxcHggc29saWQgI0NGQjc3ODtcbiAgICAgICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgI0NGQjc3ODtcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNDRkI3Nzg7XG4gICAgICAgIGJvcmRlci1sZWZ0OiBub25lO1xuICAgICAgICBib3JkZXItcmFkaXVzOiAwIDEycHggMTJweCAwO1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgd2lkdGg6IDQwcHg7XG5cbiAgICAgICAgJjpiZWZvcmUge1xuICAgICAgICAgIHRyYW5zaXRpb246IDAuNHMgZWFzZTtcbiAgICAgICAgICBvcGFjaXR5OiAwLjM7XG4gICAgICAgIH1cblxuICAgICAgICAmOmhvdmVyIHtcbiAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG5cbiAgICAgICAgICAmOmJlZm9yZSB7XG4gICAgICAgICAgICB0cmFuc2l0aW9uOiAwLjRzIGVhc2U7XG4gICAgICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGlucHV0LFxuICAgIGxhYmVsIHtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgIH1cblxuICAgIGxhYmVsIHtcbiAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgICBjb2xvcjogIzQxNEI1MztcbiAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgfVxuXG4gICAgaW5wdXQge1xuICAgICAgYm9yZGVyLXJhZGl1czogMTJweCAwIDAgMTJweDtcbiAgICAgIHRyYW5zaXRpb246IDAuNHMgZWFzZTtcbiAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgcGFkZGluZy1sZWZ0OiAyMHB4O1xuXG4gICAgICAmOmZvY3VzIHtcbiAgICAgICAgfi5wb3B1cC1mb3JtLXRleHQtbGFiZWwge1xuICAgICAgICAgIHRyYW5zaXRpb246IDAuNHMgZWFzZTtcbiAgICAgICAgICBjb2xvcjogYmxhY2s7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICAuZHVjYXR1cyB7XG4gICAgICAmLWlucHV0cy1zd2l0Y2gge1xuICAgICAgICB3aWR0aDogNDRweDtcbiAgICAgIH1cblxuICAgICAgJi1idG4ge1xuICAgICAgICBtYXgtd2lkdGg6IDIwMHB4O1xuICAgICAgfVxuICAgIH1cblxuICAgICYtZ3JvdXAge1xuICAgICAgZGlzcGxheTogZ3JpZDtcbiAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsIDFmcik7XG4gICAgICBncmlkLWdhcDogMjBweDtcbiAgICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XG5cbiAgICAgIC5wb3B1cC1mb3JtLWlucHV0IHtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMDtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBpbnB1dC5uZy10b3VjaGVkLm5nLWludmFsaWQge1xuICAgIGJvcmRlci10b3A6IHNvbGlkICRicm93bi1yZWQgMXB4O1xuICAgIGJvcmRlci1sZWZ0OiBzb2xpZCAkYnJvd24tcmVkIDFweDtcbiAgICBib3JkZXItYm90dG9tOiBzb2xpZCAkYnJvd24tcmVkIDFweDtcblxuICAgIH4uaWNvbixcbiAgICB+LnBvcHVwLWZvcm0tdGV4dC1sYWJlbCB7XG4gICAgICBib3JkZXItdG9wOiBzb2xpZCAkYnJvd24tcmVkIDFweDtcbiAgICAgIGJvcmRlci1yaWdodDogc29saWQgJGJyb3duLXJlZCAxcHg7XG4gICAgICBib3JkZXItYm90dG9tOiBzb2xpZCAkYnJvd24tcmVkIDFweDtcbiAgICB9XG4gIH1cbn1cblxuLy8gaW5wdXQubmctdG91Y2hlZC5uZy12YWxpZCB7Ym9yZGVyOnNvbGlkIGdyZWVuIDJweDt9Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](VoucherComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-voucher',
                templateUrl: './voucher.component.html',
                styleUrls: ['./voucher.component.scss']
            }]
    }], function () { return [{ type: ngx_papaparse__WEBPACK_IMPORTED_MODULE_1__["Papa"] }, { type: src_app_service_voucher_voucher_service__WEBPACK_IMPORTED_MODULE_2__["VoucherService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/params.ts":
/*!***************************!*\
  !*** ./src/app/params.ts ***!
  \***************************/
/*! exports provided: hideHeaderInRoutes, hideFooterInRoutes, adminHeaderInRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hideHeaderInRoutes", function() { return hideHeaderInRoutes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hideFooterInRoutes", function() { return hideFooterInRoutes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "adminHeaderInRoutes", function() { return adminHeaderInRoutes; });
const hideHeaderInRoutes = ['/admin/login', '/admin'];
const hideFooterInRoutes = ['/admin/login', '/admin'];
const adminHeaderInRoutes = ['/admin/voucher'];


/***/ }),

/***/ "./src/app/pipe/filter.pipe.ts":
/*!*************************************!*\
  !*** ./src/app/pipe/filter.pipe.ts ***!
  \*************************************/
/*! exports provided: FilterPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilterPipe", function() { return FilterPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class FilterPipe {
    transform(items, search) {
        const fullFind = items.find(item => item.tx_hash === search);
        return fullFind ?
            [fullFind]
            : search ?
                items.filter(item => item.tx_hash.indexOf(search) !== -1)
                : items;
    }
}
FilterPipe.ɵfac = function FilterPipe_Factory(t) { return new (t || FilterPipe)(); };
FilterPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "filter", type: FilterPipe, pure: false });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FilterPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{
                name: 'filter',
                pure: false
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/pipe/safeUrl.pipe.ts":
/*!**************************************!*\
  !*** ./src/app/pipe/safeUrl.pipe.ts ***!
  \**************************************/
/*! exports provided: SafePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SafePipe", function() { return SafePipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");



class SafePipe {
    constructor(sanitizer) {
        this.sanitizer = sanitizer;
    }
    transform(url) {
        return this.sanitizer.bypassSecurityTrustResourceUrl(url);
    }
}
SafePipe.ɵfac = function SafePipe_Factory(t) { return new (t || SafePipe)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["DomSanitizer"])); };
SafePipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "safe", type: SafePipe, pure: true });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SafePipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{ name: 'safe' }]
    }], function () { return [{ type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["DomSanitizer"] }]; }, null); })();


/***/ }),

/***/ "./src/app/resolvers/index.ts":
/*!************************************!*\
  !*** ./src/app/resolvers/index.ts ***!
  \************************************/
/*! exports provided: UserResolver */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserResolver", function() { return UserResolver; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _service_user_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service/user/user.service */ "./src/app/service/user/user.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");





class UserResolver {
    constructor(userService, router) {
        this.userService = userService;
        this.router = router;
    }
    continue(observer) {
        observer.next();
        observer.complete();
    }
    resolve() {
        return new rxjs__WEBPACK_IMPORTED_MODULE_1__["Observable"]((observer) => {
            const subscription = this.userService.getCurrentUser(true, true).subscribe((user) => {
                !user.is_ghost ? this.continue(observer) : this.router.navigate(['/admin/login']);
                subscription.unsubscribe();
            });
            return {
                unsubscribe() { }
            };
        });
    }
}
UserResolver.ɵfac = function UserResolver_Factory(t) { return new (t || UserResolver)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_service_user_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"])); };
UserResolver.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: UserResolver, factory: UserResolver.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UserResolver, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _service_user_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/route-animation.ts":
/*!************************************!*\
  !*** ./src/app/route-animation.ts ***!
  \************************************/
/*! exports provided: slider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "slider", function() { return slider; });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/__ivy_ngcc__/fesm2015/animations.js");

const slider = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('routeAnimations', [
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('* => isLeft', slideTo('left')),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('* => isRight', slideTo('right')),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('isRight => *', slideTo('left')),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('isLeft => *', slideTo('right'))
]);
function slideTo(direction) {
    const optional = { optional: true };
    return [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter, :leave', [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
                position: 'absolute',
                top: 0,
                [direction]: 0,
                width: '100%'
            })
        ], optional),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter', [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ [direction]: '-100%' })
        ]),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["group"])([
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':leave', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('600ms ease', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ [direction]: '100%' }))
            ], optional),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('600ms ease', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ [direction]: '0%' }))
            ])
        ]),
    ];
}


/***/ }),

/***/ "./src/app/service/buy/buy.service.ts":
/*!********************************************!*\
  !*** ./src/app/service/buy/buy.service.ts ***!
  \********************************************/
/*! exports provided: BuyService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BuyService", function() { return BuyService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _http_http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../http/http.service */ "./src/app/service/http/http.service.ts");



class BuyService {
    constructor(httpService) {
        this.httpService = httpService;
    }
    getRates() {
        return this.httpService.get(`rates/`).toPromise();
    }
    getLottery() {
        return this.httpService.get(`lotteries/`).toPromise();
    }
    getLotteryInfo() {
        const id = 7;
        return this.httpService.get(`lotteries/${id}/`).toPromise();
    }
    getLotteryPlayers(loteryId, page) {
        return this.httpService
            .get(`lotteries_players/?lottery_id=${loteryId}&page=${page}`)
            .toPromise();
    }
    getValidateDucatusAddress(address) {
        return this.httpService
            .post(`validate_ducatus_address/`, { address })
            .toPromise();
    }
    getCardLink(amount, currency, email) {
        return this.httpService
            .post(`add_charge/`, { amount, currency, email })
            .toPromise();
    }
    getExchange(to_address, to_currency, email) {
        return this.httpService
            .post(`exchange/`, {
            email,
            to_address,
            to_currency
        })
            .toPromise();
    }
}
BuyService.ɵfac = function BuyService_Factory(t) { return new (t || BuyService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_http_http_service__WEBPACK_IMPORTED_MODULE_1__["HttpService"])); };
BuyService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: BuyService, factory: BuyService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BuyService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{ providedIn: 'root' }]
    }], function () { return [{ type: _http_http_service__WEBPACK_IMPORTED_MODULE_1__["HttpService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/service/gold-lottery/gold-lottery.service.ts":
/*!**************************************************************!*\
  !*** ./src/app/service/gold-lottery/gold-lottery.service.ts ***!
  \**************************************************************/
/*! exports provided: GoldLotteryService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GoldLotteryService", function() { return GoldLotteryService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _http_http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../http/http.service */ "./src/app/service/http/http.service.ts");



class GoldLotteryService {
    constructor(httpService) {
        this.httpService = httpService;
    }
    codeRegistrate(addressDuc, addressDucx, code) {
        return this.httpService.post(`coin/`, { ducatus_address: addressDuc, ducatusx_address: addressDucx, secret_code: code }, 'api/v2/').toPromise();
    }
    codeCheck(pubCode) {
        return this.httpService.get(`coin/`, { public_code: pubCode }, 'api/v2/').toPromise();
    }
    getValidateDucatusAddress(ducAddress) {
        return this.httpService.post(`validate_ducatus_address/`, { address: ducAddress }).toPromise();
    }
}
GoldLotteryService.ɵfac = function GoldLotteryService_Factory(t) { return new (t || GoldLotteryService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_http_http_service__WEBPACK_IMPORTED_MODULE_1__["HttpService"])); };
GoldLotteryService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: GoldLotteryService, factory: GoldLotteryService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GoldLotteryService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{ providedIn: 'root' }]
    }], function () { return [{ type: _http_http_service__WEBPACK_IMPORTED_MODULE_1__["HttpService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/service/gtag/google-analytics.service.ts":
/*!**********************************************************!*\
  !*** ./src/app/service/gtag/google-analytics.service.ts ***!
  \**********************************************************/
/*! exports provided: GoogleAnalyticsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GoogleAnalyticsService", function() { return GoogleAnalyticsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class GoogleAnalyticsService {
    eventEmitter(eventName, eventCategory, eventAction, eventLabel = null, eventValue = null) {
        gtag('event', eventName, {
            eventCategory,
            eventLabel,
            eventAction,
            eventValue
        });
    }
}
GoogleAnalyticsService.ɵfac = function GoogleAnalyticsService_Factory(t) { return new (t || GoogleAnalyticsService)(); };
GoogleAnalyticsService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: GoogleAnalyticsService, factory: GoogleAnalyticsService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GoogleAnalyticsService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/service/http/http.service.ts":
/*!**********************************************!*\
  !*** ./src/app/service/http/http.service.ts ***!
  \**********************************************/
/*! exports provided: SERVER_REST_URL, HttpService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SERVER_REST_URL", function() { return SERVER_REST_URL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpService", function() { return HttpService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");



const SERVER_REST_URL = '/api/v1/';
class HttpService {
    constructor(http) {
        this.http = http;
    }
    get(url, data, path) {
        data = data || {};
        data['_'] = new Date().getTime();
        return this.http
            .get((path || SERVER_REST_URL) + (url || ''), {
            params: data,
            headers: {
                'Cache-Control': 'no-cache, no-store, must-revalidate, post-check=0, pre-check=0',
                Pragma: 'no-cache',
                Expires: '0'
            }
        });
    }
    patch(url, data, path) {
        return this.http
            .request('patch', (path || SERVER_REST_URL) + (url || ''), {
            body: data
        });
    }
    post(url, data, path) {
        return this.http
            .post((path || SERVER_REST_URL) + (url || ''), data);
    }
    put(url, data, path) {
        return this.http
            .put((path || SERVER_REST_URL) + (url || ''), data);
    }
    customDelete(url, options) {
        return this.http
            .request('delete', SERVER_REST_URL + (url || ''), options);
    }
    delete(url, params) {
        return this.http
            .delete(SERVER_REST_URL + (url || ''), params);
    }
}
HttpService.ɵfac = function HttpService_Factory(t) { return new (t || HttpService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
HttpService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: HttpService, factory: HttpService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HttpService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./src/app/service/rate/rate.service.ts":
/*!**********************************************!*\
  !*** ./src/app/service/rate/rate.service.ts ***!
  \**********************************************/
/*! exports provided: RateService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RateService", function() { return RateService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _http_http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../http/http.service */ "./src/app/service/http/http.service.ts");




class RateService {
    constructor(http, httpService) {
        this.http = http;
        this.httpService = httpService;
    }
    getRates() {
        return this.http.get(`https://ducexpl.rocknblock.io/api/v1/rates/`).toPromise();
    }
    changeRates(data) {
        return this.httpService.post('change_duc_rate', data, 'api/v3/').toPromise();
    }
}
RateService.ɵfac = function RateService_Factory(t) { return new (t || RateService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_http_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"])); };
RateService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: RateService, factory: RateService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RateService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{ providedIn: 'root' }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }, { type: _http_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/service/send/send.service.ts":
/*!**********************************************!*\
  !*** ./src/app/service/send/send.service.ts ***!
  \**********************************************/
/*! exports provided: SendService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SendService", function() { return SendService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _http_http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../http/http.service */ "./src/app/service/http/http.service.ts");



class SendService {
    constructor(httpService) {
        this.httpService = httpService;
    }
    sendContactMessage(data) {
        return this.httpService.post(`send_ducatus_feedback/`, data).toPromise();
    }
}
SendService.ɵfac = function SendService_Factory(t) { return new (t || SendService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_http_http_service__WEBPACK_IMPORTED_MODULE_1__["HttpService"])); };
SendService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: SendService, factory: SendService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SendService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{ providedIn: 'root' }]
    }], function () { return [{ type: _http_http_service__WEBPACK_IMPORTED_MODULE_1__["HttpService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/service/user/user.constant.ts":
/*!***********************************************!*\
  !*** ./src/app/service/user/user.constant.ts ***!
  \***********************************************/
/*! exports provided: DEFAULT_USER */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DEFAULT_USER", function() { return DEFAULT_USER; });
const DEFAULT_USER = {
    username: '',
    contracts: 0,
    is_ghost: true,
    use_totp: false,
    id: 0,
    is_social: false,
    lang: 'en',
};


/***/ }),

/***/ "./src/app/service/user/user.service.api.ts":
/*!**************************************************!*\
  !*** ./src/app/service/user/user.service.api.ts ***!
  \**************************************************/
/*! exports provided: URLS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "URLS", function() { return URLS; });
const URLS = {
    HOSTS: {
        PATH: '/api/v3/',
        AUTH_PATH: '/api/v3/rest-auth/',
    },
    REGISTRATION: 'registration/',
    PROFILE: 'user/',
    LOGIN: 'login/',
    LOGOUT: 'logout/',
    PASSWORD_RESET: 'password/reset/',
    PASSWORD_CHANGE: 'password/change/'
};


/***/ }),

/***/ "./src/app/service/user/user.service.ts":
/*!**********************************************!*\
  !*** ./src/app/service/user/user.service.ts ***!
  \**********************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _user_service_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./user.service.api */ "./src/app/service/user/user.service.api.ts");
/* harmony import */ var _user_constant__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./user.constant */ "./src/app/service/user/user.constant.ts");
/* harmony import */ var _http_http_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../http/http.service */ "./src/app/service/http/http.service.ts");






class UserService {
    constructor(httpService) {
        this.httpService = httpService;
        this.userObserves = [];
    }
    callSubscribers() {
        this.userObserves.forEach((userObserve) => {
            userObserve.next(this.userModel);
            this.userModel.isLogout = undefined;
        });
    }
    updateUser(afterLogout) {
        if (this.updateProgress) {
            return;
        }
        this.updateProgress = true;
        return this.getProfile()
            .then((result) => {
            this.userModel = result;
            this.updateProgress = false;
        }, (error) => {
            this.userModel = _user_constant__WEBPACK_IMPORTED_MODULE_3__["DEFAULT_USER"];
            this.userModel.isLogout = afterLogout;
            this.updateProgress = false;
        })
            .finally(() => {
            this.callSubscribers();
        });
    }
    getCurrentUser(withRequest, checkNow) {
        return new rxjs__WEBPACK_IMPORTED_MODULE_1__["Observable"]((observer) => {
            this.userObserves.push(observer);
            if (withRequest) {
                this.updateUser();
            }
            if (checkNow && !this.updateProgress) {
                setTimeout(() => {
                    observer.next(this.userModel);
                });
            }
            const th = this;
            return {
                unsubscribe() {
                    th.userObserves = th.userObserves.filter((subscriber) => {
                        return subscriber !== observer;
                    });
                },
            };
        });
    }
    getProfile() {
        return this.httpService.get(_user_service_api__WEBPACK_IMPORTED_MODULE_2__["URLS"].PROFILE, null, _user_service_api__WEBPACK_IMPORTED_MODULE_2__["URLS"].HOSTS.AUTH_PATH).toPromise();
    }
    authenticate(data) {
        data.username = data.username ? data.username.toLowerCase() : data.username;
        return new Promise((resolve, reject) => {
            this.httpService
                .post(_user_service_api__WEBPACK_IMPORTED_MODULE_2__["URLS"].LOGIN, data, _user_service_api__WEBPACK_IMPORTED_MODULE_2__["URLS"].HOSTS.AUTH_PATH)
                .toPromise()
                .then((response) => {
                this.updateUser();
                resolve(response);
            }, reject);
        });
    }
    logout() {
        return this.httpService
            .get(_user_service_api__WEBPACK_IMPORTED_MODULE_2__["URLS"].LOGOUT, {}, _user_service_api__WEBPACK_IMPORTED_MODULE_2__["URLS"].HOSTS.AUTH_PATH)
            .toPromise()
            .then(() => {
            this.userModel = _user_constant__WEBPACK_IMPORTED_MODULE_3__["DEFAULT_USER"];
            this.updateUser(true);
        });
    }
}
UserService.ɵfac = function UserService_Factory(t) { return new (t || UserService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_http_http_service__WEBPACK_IMPORTED_MODULE_4__["HttpService"])); };
UserService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: UserService, factory: UserService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UserService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root',
            }]
    }], function () { return [{ type: _http_http_service__WEBPACK_IMPORTED_MODULE_4__["HttpService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/service/voucher/voucher.service.ts":
/*!****************************************************!*\
  !*** ./src/app/service/voucher/voucher.service.ts ***!
  \****************************************************/
/*! exports provided: VoucherService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VoucherService", function() { return VoucherService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _http_http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../http/http.service */ "./src/app/service/http/http.service.ts");



class VoucherService {
    constructor(httpService) {
        this.httpService = httpService;
    }
    getVouchers() {
        return this.httpService.get(`vouchers/`, null, 'api/v3/').toPromise();
    }
    sendVouchers(data) {
        return this.httpService.post('vouchers/', data, 'api/v3/').toPromise();
    }
    sendVoucher(data) {
        return this.httpService.post('vouchers/', data, 'api/v3/').toPromise();
    }
    getVoucher(id) {
        return this.httpService.get(`vouchers/${id}/ `, null, 'api/v3/').toPromise();
    }
    setVoucher(id, data) {
        return this.httpService.put(`vouchers/${id}/`, data, 'api/v3/').toPromise();
    }
    updateVoucher(id, voucher) {
        return this.httpService.get(`vouchers/${id}/ `, {
            data: voucher
        }, 'api/v3/').toPromise();
    }
    deleteVoucher(id) {
        return this.httpService.get(`vouchers/${id}/`, null, 'api/v3/').toPromise();
    }
}
VoucherService.ɵfac = function VoucherService_Factory(t) { return new (t || VoucherService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_http_http_service__WEBPACK_IMPORTED_MODULE_1__["HttpService"])); };
VoucherService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: VoucherService, factory: VoucherService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](VoucherService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{ providedIn: 'root' }]
    }], function () { return [{ type: _http_http_service__WEBPACK_IMPORTED_MODULE_1__["HttpService"] }]; }, null); })();


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/gleb/projects/ducatus-site/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map