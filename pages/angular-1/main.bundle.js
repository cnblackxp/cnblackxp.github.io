webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__servers_servers_component__ = __webpack_require__("./src/app/servers/servers.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__single_server_single_server_component__ = __webpack_require__("./src/app/single-server/single-server.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__home_home_component__ = __webpack_require__("./src/app/home/home.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var routes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_4__home_home_component__["a" /* HomeComponent */], pathMatch: 'full' },
    { path: 'servers', component: __WEBPACK_IMPORTED_MODULE_2__servers_servers_component__["a" /* ServersComponent */] },
    { path: 'servers/:id/:connected', component: __WEBPACK_IMPORTED_MODULE_3__single_server_single_server_component__["a" /* SingleServerComponent */] },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forRoot(routes)
            ],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = ".whiteText{\r\n    color: white;\r\n}"

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<app-navbar></app-navbar>\n\n<div class=\"container\">\n    <router-outlet></router-outlet>\n    <!-- <app-servers></app-servers> -->\n\n    <!-- ASSIGNMENT 1 -->\n    <!-- ASSIGNMENT 1 -->\n    <!-- ASSIGNMENT 1 -->\n    <!-- <input type=\"text\" [(ngModel)]='username' class='form-control' >\n    <p>username is {{username}}</p>\n    <button [disabled]='isEmpty()' (click)='reset()' class='btn btn-primary' >Reset</button> -->\n\n\n\n    <!-- ASSIGNMENT 2 -->\n    <!-- ASSIGNMENT 2 -->\n    <!-- ASSIGNMENT 2 -->\n    <!-- \n    <hr>\n    <button (click)='add()' class='btn btn-success'>Count</button>\n    <p *ngIf='showSecret'>SECRET</p>\n    <ul>\n        <li *ngFor='let i of counter' [ngStyle]='{backgroundColor: i > 4 ? \"green\" : \"white\"}' [ngClass]='{whiteText: i > 4}'>{{i}}</li>\n    </ul> -->\n\n\n    <!-- ASSIGNMENT 3 -->\n    <!-- ASSIGNMENT 3 -->\n    <!-- ASSIGNMENT 3 -->\n    <!-- <div *ngFor='let time of gameTimer' >\n        <app-even *ngIf='time % 2 === 0' [val]='time'></app-even>\n        <app-odd *ngIf='time % 2 !== 0' [val]='time'></app-odd>\n    </div>\n    <app-game-control (gameTimerEvent)='onGameTimer($event)' (onClear)='onClear()'></app-game-control> -->\n    \n</div>"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        //Assignment 1
        this.username = '';
        //Assignment 2
        this.showSecret = false;
        this.counter = [];
        this.count = 0;
        //Assignment 3
        this.gameTimer = [];
    }
    AppComponent.prototype.isEmpty = function () {
        return this.username.trim() === '';
    };
    AppComponent.prototype.reset = function () {
        this.username = '';
    };
    AppComponent.prototype.add = function () {
        this.showSecret = !this.showSecret;
        this.counter.push(this.count++);
    };
    AppComponent.prototype.onGameTimer = function (evt) {
        this.gameTimer.push(evt);
    };
    AppComponent.prototype.onClear = function () {
        this.gameTimer = [];
    };
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__server_server_component__ = __webpack_require__("./src/app/server/server.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__servers_servers_component__ = __webpack_require__("./src/app/servers/servers.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__game_control_game_control_component__ = __webpack_require__("./src/app/game-control/game-control.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__odd_odd_component__ = __webpack_require__("./src/app/odd/odd.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__even_even_component__ = __webpack_require__("./src/app/even/even.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__directive_highlight_highlight_directive__ = __webpack_require__("./src/app/directive/highlight/highlight.directive.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__directive_better_highlight_directive__ = __webpack_require__("./src/app/directive/better-highlight.directive.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__navbar_navbar_component__ = __webpack_require__("./src/app/navbar/navbar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__app_routing_module__ = __webpack_require__("./src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__services_log_service__ = __webpack_require__("./src/app/services/log.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__single_server_single_server_component__ = __webpack_require__("./src/app/single-server/single-server.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__services_servers_service__ = __webpack_require__("./src/app/services/servers.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__home_home_component__ = __webpack_require__("./src/app/home/home.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_4__server_server_component__["a" /* ServerComponent */],
                __WEBPACK_IMPORTED_MODULE_5__servers_servers_component__["a" /* ServersComponent */],
                __WEBPACK_IMPORTED_MODULE_6__game_control_game_control_component__["a" /* GameControlComponent */],
                __WEBPACK_IMPORTED_MODULE_7__odd_odd_component__["a" /* OddComponent */],
                __WEBPACK_IMPORTED_MODULE_8__even_even_component__["a" /* EvenComponent */],
                __WEBPACK_IMPORTED_MODULE_9__directive_highlight_highlight_directive__["a" /* HighlightDirective */],
                __WEBPACK_IMPORTED_MODULE_10__directive_better_highlight_directive__["a" /* BetterHighlightDirective */],
                __WEBPACK_IMPORTED_MODULE_11__navbar_navbar_component__["a" /* NavbarComponent */],
                __WEBPACK_IMPORTED_MODULE_14__single_server_single_server_component__["a" /* SingleServerComponent */],
                __WEBPACK_IMPORTED_MODULE_16__home_home_component__["a" /* HomeComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_12__app_routing_module__["a" /* AppRoutingModule */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_13__services_log_service__["a" /* LogService */],
                __WEBPACK_IMPORTED_MODULE_15__services_servers_service__["a" /* ServersService */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/directive/better-highlight.directive.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BetterHighlightDirective; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var BetterHighlightDirective = /** @class */ (function () {
    function BetterHighlightDirective(elRef, renderer) {
        this.elRef = elRef;
        this.renderer = renderer;
        this.defaultColor = {
            bgcolor: 'yellow',
            color: 'black'
        };
        this.highlightColor = {
            bgcolor: 'blue',
            color: 'white'
        };
    }
    BetterHighlightDirective.prototype.ngOnInit = function () {
        var _this = this;
        // this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'yellow');
        this.backgroundColor = this.defaultColor.bgcolor;
        this.color = this.defaultColor.color;
        setInterval(function () {
            if (_this.backgroundColor == _this.defaultColor.bgcolor) {
                _this.backgroundColor = _this.highlightColor.bgcolor;
                _this.color = _this.highlightColor.color;
            }
            else {
                _this.backgroundColor = _this.defaultColor.bgcolor;
                _this.color = _this.defaultColor.color;
            }
        }, 1500);
    };
    BetterHighlightDirective.prototype.onMouseEnter = function (e) {
        // this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'blue');
        // this.renderer.setStyle(this.elRef.nativeElement, 'color', 'white');
        this.backgroundColor = this.highlightColor.bgcolor;
        this.color = this.highlightColor.color;
    };
    BetterHighlightDirective.prototype.onMouseLeave = function (e) {
        // this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'yellow');
        // this.renderer.setStyle(this.elRef.nativeElement, 'color', 'black');
        this.backgroundColor = this.defaultColor.bgcolor;
        this.color = this.defaultColor.color;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Object)
    ], BetterHighlightDirective.prototype, "defaultColor", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])('appBetterHighlight'),
        __metadata("design:type", Object)
    ], BetterHighlightDirective.prototype, "highlightColor", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* HostBinding */])('style.backgroundColor'),
        __metadata("design:type", String)
    ], BetterHighlightDirective.prototype, "backgroundColor", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* HostBinding */])('style.color'),
        __metadata("design:type", String)
    ], BetterHighlightDirective.prototype, "color", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["y" /* HostListener */])('mouseenter'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Event]),
        __metadata("design:returntype", void 0)
    ], BetterHighlightDirective.prototype, "onMouseEnter", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["y" /* HostListener */])('mouseleave'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Event]),
        __metadata("design:returntype", void 0)
    ], BetterHighlightDirective.prototype, "onMouseLeave", null);
    BetterHighlightDirective = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["s" /* Directive */])({
            selector: '[appBetterHighlight]'
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["W" /* Renderer2 */]])
    ], BetterHighlightDirective);
    return BetterHighlightDirective;
}());



/***/ }),

/***/ "./src/app/directive/highlight/highlight.directive.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HighlightDirective; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HighlightDirective = /** @class */ (function () {
    function HighlightDirective(elementRef) {
        this.elementRef = elementRef;
    }
    HighlightDirective.prototype.ngOnInit = function () {
        this.elementRef.nativeElement.style.backgroundColor = 'yellow';
    };
    HighlightDirective = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["s" /* Directive */])({
            selector: '[appHighlight]'
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */]])
    ], HighlightDirective);
    return HighlightDirective;
}());



/***/ }),

/***/ "./src/app/even/even.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/even/even.component.html":
/***/ (function(module, exports) {

module.exports = "<p class=\"bg-success\">\n  {{val}}\n</p>\n"

/***/ }),

/***/ "./src/app/even/even.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EvenComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var EvenComponent = /** @class */ (function () {
    function EvenComponent() {
    }
    EvenComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Object)
    ], EvenComponent.prototype, "val", void 0);
    EvenComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-even',
            template: __webpack_require__("./src/app/even/even.component.html"),
            styles: [__webpack_require__("./src/app/even/even.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], EvenComponent);
    return EvenComponent;
}());



/***/ }),

/***/ "./src/app/game-control/game-control.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/game-control/game-control.component.html":
/***/ (function(module, exports) {

module.exports = "<button class='btn btn-success' (click)=\"start()\" >Start</button>\n<button class='btn btn-danger' (click)=\"stop()\" >Stop</button>\n<button class='btn btn-warning' (click)=\"clear()\" >Clear</button>"

/***/ }),

/***/ "./src/app/game-control/game-control.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GameControlComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var GameControlComponent = /** @class */ (function () {
    function GameControlComponent() {
        this.num = 0;
        this.gameTimerEvent = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
        this.onClear = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
    }
    GameControlComponent.prototype.ngOnInit = function () {
    };
    GameControlComponent.prototype.start = function () {
        var _this = this;
        this._interval = setInterval(function () {
            _this.gameTimerEvent.emit(_this.num++);
        }, 1000);
    };
    GameControlComponent.prototype.stop = function () {
        clearInterval(this._interval);
    };
    GameControlComponent.prototype.clear = function () {
        this.num = 0;
        this.stop();
        this.onClear.emit();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* Output */])(),
        __metadata("design:type", Object)
    ], GameControlComponent.prototype, "gameTimerEvent", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* Output */])(),
        __metadata("design:type", Object)
    ], GameControlComponent.prototype, "onClear", void 0);
    GameControlComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-game-control',
            template: __webpack_require__("./src/app/game-control/game-control.component.html"),
            styles: [__webpack_require__("./src/app/game-control/game-control.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], GameControlComponent);
    return GameControlComponent;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<h1>Welcome to server manager</h1>\n<p>an angular powered application helping you simulate a virtual server\n   enviorment sending data from one server to the next setting end points</p>\n"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-home',
            template: __webpack_require__("./src/app/home/home.component.html"),
            styles: [__webpack_require__("./src/app/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/navbar/navbar.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/navbar/navbar.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-inverse\">\n  <div class=\"container-fluid\">\n    <div class=\"navbar-header\">\n      <button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\" data-target=\"#navbar\" aria-expanded=\"false\" aria-controls=\"navbar\">\n        <span class=\"sr-only\">Toggle navigation</span>\n        <span class=\"icon-bar\"></span>\n        <span class=\"icon-bar\"></span>\n        <span class=\"icon-bar\"></span>\n      </button>\n      <a class=\"navbar-brand\" href=\"#\">Server Manager</a>\n    </div>\n    <div id=\"navbar\" class=\"navbar-collapse collapse\">\n      <ul class=\"nav navbar-nav\">\n        <li [routerLinkActive]='\"active\"' [routerLinkActiveOptions]='{exact: true}'><a routerLink='/' href='#'>Home</a></li>\n        <li [routerLinkActive]='\"active\"'><a href='#' routerLink='/servers' >Servers</a></li>\n        <!-- <li><a href=\"#\">Contact</a></li> -->\n        <!-- <li class=\"dropdown\">\n          <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\" role=\"button\" aria-haspopup=\"true\" aria-expanded=\"false\">Dropdown <span class=\"caret\"></span></a>\n          <ul class=\"dropdown-menu\">\n            <li><a href=\"#\">Action</a></li>\n            <li><a href=\"#\">Another action</a></li>\n            <li><a href=\"#\">Something else here</a></li>\n            <li role=\"separator\" class=\"divider\"></li>\n            <li class=\"dropdown-header\">Nav header</li>\n            <li><a href=\"#\">Separated link</a></li>\n            <li><a href=\"#\">One more separated link</a></li>\n          </ul>\n        </li> -->\n      </ul>\n      <ul class=\"nav navbar-nav navbar-right\">\n        <li class=\"active\"><a href=\"./\">Default <span class=\"sr-only\">(current)</span></a></li>\n        <!-- <li><a href=\"../navbar-static-top/\">Static top</a></li>\n        <li><a href=\"../navbar-fixed-top/\">Fixed top</a></li> -->\n      </ul>\n    </div><!--/.nav-collapse -->\n  </div><!--/.container-fluid -->\n</nav>"

/***/ }),

/***/ "./src/app/navbar/navbar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NavbarComponent = /** @class */ (function () {
    function NavbarComponent() {
    }
    NavbarComponent.prototype.ngOnInit = function () {
    };
    NavbarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-navbar',
            template: __webpack_require__("./src/app/navbar/navbar.component.html"),
            styles: [__webpack_require__("./src/app/navbar/navbar.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/app/odd/odd.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/odd/odd.component.html":
/***/ (function(module, exports) {

module.exports = "<p class=\"bg-primary\">\n  {{val}}\n</p>"

/***/ }),

/***/ "./src/app/odd/odd.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OddComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var OddComponent = /** @class */ (function () {
    function OddComponent() {
    }
    OddComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Object)
    ], OddComponent.prototype, "val", void 0);
    OddComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-odd',
            template: __webpack_require__("./src/app/odd/odd.component.html"),
            styles: [__webpack_require__("./src/app/odd/odd.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], OddComponent);
    return OddComponent;
}());



/***/ }),

/***/ "./src/app/server/server.component.html":
/***/ (function(module, exports) {

module.exports = "<div> \r\n    <ng-content></ng-content> - \r\n    <input type=\"checkbox\" name='{{serverId}}' [(ngModel)]='connected' (click)='updateServerInfo()'>\r\n    Server {{serverId}} started \r\n    <span [ngClass]='{\"bg-success\": connected, \"bg-danger\": !connected}'>{{connected ? \"Connected\": \"Disconnected\"}}</span>\r\n    {{status}}\r\n    <a *ngIf='connected' href=\"\" routerLink=\"/servers/{{serverId}}/{{connected}}\">Open Server</a>\r\n</div>"

/***/ }),

/***/ "./src/app/server/server.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ServerComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_timer__ = __webpack_require__("./src/app/utils/timer.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ServerComponent = /** @class */ (function () {
    function ServerComponent() {
        this.serverId = 10;
        this.connected = false;
        this.serverInfo = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
        this.onRemove = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
        this.status = '';
    }
    ServerComponent.prototype.ngOnInit = function () {
        var _this = this;
        // setTimeout(() => {
        //     this.serverInfo.emit({serverId: this.serverId, connected: this.connected});
        // }, 1000 * Math.floor(Math.random() * 10));
        if (!this.connected)
            Object(__WEBPACK_IMPORTED_MODULE_1__utils_timer__["a" /* Timer */])(4000, 1000, function (time) {
                if (_this.connected) {
                    _this.status = '';
                    return true;
                }
                // console.log(`${this.serverId}`);
                _this.status = "This will be removed in " + time / 1000;
            }, function () {
                if (!_this.connected)
                    _this.onRemove.emit();
            });
    };
    ServerComponent.prototype.updateServerInfo = function () {
        var _this = this;
        setTimeout(function () {
            console.log(_this.connected);
            _this.serverInfo.emit({ serverId: _this.serverId, connected: _this.connected });
        }, 2);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Object)
    ], ServerComponent.prototype, "serverId", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Object)
    ], ServerComponent.prototype, "connected", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* Output */])(),
        __metadata("design:type", Object)
    ], ServerComponent.prototype, "serverInfo", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* Output */])(),
        __metadata("design:type", Object)
    ], ServerComponent.prototype, "onRemove", void 0);
    ServerComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-server',
            template: __webpack_require__("./src/app/server/server.component.html"),
        }),
        __metadata("design:paramtypes", [])
    ], ServerComponent);
    return ServerComponent;
}());



/***/ }),

/***/ "./src/app/servers/servers.component.css":
/***/ (function(module, exports) {

module.exports = ".servers {\r\n    height: 150px;\r\n    overflow-x: hidden;\r\n    overflow-y: auto;\r\n}"

/***/ }),

/***/ "./src/app/servers/servers.component.html":
/***/ (function(module, exports) {

module.exports = "<h1 class=\"page-header\">Servers</h1>\n<input type=\"number\" placeholder=\"id\" class=\"form-control\" [(ngModel)]='serverId' (keyup.enter)='addConnectedServer()'>\n\n<button class=\"btn btn-primary\" (click)='addServer()' [disabled]='!isEmpty()'>Add Server</button>\n<button class=\"btn btn-primary\" (click)='addConnectedServer()' [disabled]='!isEmpty()' #btn>Add Connected Server</button>\n\n<p *ngIf='servers.length > 4 else noServer' \n  [appBetterHighlight]='{color: \"white\", bgcolor: \"black\"}'\n  [defaultColor]='{color: \"green\", bgcolor: \"orange\"}'>New Servers Added {{servers[servers.length - 1].id}}</p>\n<ng-template #noServer>\n  <p>No Servers added</p>\n</ng-template>\n<div class=\"servers\">\n  <app-server \n    *ngFor='let server of servers; let i = index' \n    [serverId]='server.id' \n    [connected]='server.connected' \n    (serverInfo)='updateServerInfo($event)'\n    (onRemove)='removeServer(i)'>\n    {{i}}\n  </app-server>  \n</div>\n<hr>\n<div class=\"servers\">\n  <div *ngFor='let log of logs'>{{log}}</div>\n</div>\n\n<button class='btn btn-success' (click)='navigateHome()'>Home</button>\n<button class='btn btn-danger' (click)='navigateToError()'>Error</button>"

/***/ }),

/***/ "./src/app/servers/servers.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ServersComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_log_service__ = __webpack_require__("./src/app/services/log.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_servers_service__ = __webpack_require__("./src/app/services/servers.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ServersComponent = /** @class */ (function () {
    function ServersComponent(logService, router, route, serversService) {
        this.logService = logService;
        this.router = router;
        this.route = route;
        this.serversService = serversService;
        this.logs = ['Application started....', '4 Servers initalized'];
        this.servers = [
            {
                id: 10,
                connected: true,
            },
            {
                id: 20,
                connected: false,
            },
            {
                id: 40,
                connected: false,
            },
            {
                id: 42,
                connected: true,
            },
        ];
    }
    ServersComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.logs = this.logService.logs;
        this.servers = this.serversService.servers;
        setTimeout(function () {
            _this.btn.nativeElement.classList.toggle('btn-primary');
            _this.btn.nativeElement.classList.toggle('btn-danger');
        }, 2000);
        // console.log(this.btn);
    };
    ServersComponent.prototype.addConnectedServer = function () {
        // if (this.servers.some(el => el.id === this.serverId))
        //   return alert('id already exists')
        // this.servers.push({
        //   id: this.serverId,
        //   connected: true
        // });
        this.serversService.addServer(this.serverId, true);
        this.serverId = '';
    };
    ServersComponent.prototype.addServer = function () {
        // if (this.servers.some(el => el.id === this.serverId))
        //   return alert('id already exists')
        // this.servers.push({
        //   id: this.serverId,
        //   connected: false
        // });
        this.serversService.addServer(this.serverId, false);
        this.serverId = '';
    };
    ServersComponent.prototype.removeServer = function (i) {
        this.serversService.removeServer(i);
        // this.servers.splice(i, 1);
    };
    ServersComponent.prototype.isEmpty = function () {
        return this.serverId && this.serverId !== '';
    };
    ServersComponent.prototype.updateServerInfo = function (event) {
        this.serversService.setServer(event.serverId, event.connected);
        this.logService.log("Server " + event.serverId + " => " + (event.connected ? 'Connected' : 'Disconnected'));
        //this.logs.push(`Server ${event.serverId} => ${event.connected ? 'Connected' : 'Disconnected'}`)
    };
    ServersComponent.prototype.navigateHome = function () {
        //absolute route
        this.router.navigate(['/']);
    };
    ServersComponent.prototype.navigateToError = function () {
        //relative route
        this.router.navigate(['/test'], { relativeTo: this.route });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])('btn'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */])
    ], ServersComponent.prototype, "btn", void 0);
    ServersComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-servers',
            template: __webpack_require__("./src/app/servers/servers.component.html"),
            styles: [__webpack_require__("./src/app/servers/servers.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_log_service__["a" /* LogService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_3__services_servers_service__["a" /* ServersService */]])
    ], ServersComponent);
    return ServersComponent;
}());



/***/ }),

/***/ "./src/app/services/log.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LogService; });
var LogService = /** @class */ (function () {
    function LogService() {
        this.logs = ['Application started....', '4 Servers initalized'];
    }
    LogService.prototype.log = function (mssg) {
        this.logs.push(mssg);
    };
    return LogService;
}());



/***/ }),

/***/ "./src/app/services/servers.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ServersService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__log_service__ = __webpack_require__("./src/app/services/log.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// import { ServerInfo } from "../server/server.component";
var ServersService = /** @class */ (function () {
    function ServersService(logService) {
        this.logService = logService;
        this.servers = [
            {
                id: 10,
                connected: true,
            },
            {
                id: 20,
                connected: false,
            },
            {
                id: 40,
                connected: false,
            },
            {
                id: 42,
                connected: true,
            },
        ];
    }
    ServersService.prototype.addServer = function (id, connected) {
        if (this.servers.some(function (el) { return el.id === id; }))
            return alert('id already exists');
        this.servers.push({ id: id, connected: connected });
        this.logService.log("server " + id + " has been created => " + (connected ? 'Connected' : 'Disconnected'));
    };
    ServersService.prototype.setServer = function (id, connected) {
        console.log(this.servers.find(function (el) { return el.id === id; }));
        this.servers.find(function (el) { return el.id === id; }).connected = connected;
    };
    ServersService.prototype.removeServer = function (i) {
        this.servers.splice(i, 1);
    };
    ServersService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__log_service__["a" /* LogService */]])
    ], ServersService);
    return ServersService;
}());



/***/ }),

/***/ "./src/app/single-server/single-server.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/single-server/single-server.component.html":
/***/ (function(module, exports) {

module.exports = "<button class='btn btn-success' (click)='routeBack()'>Back</button>\n<div class=\"row\">\n  <div class=\"col-sm-6\">\n    <label for=\"\">Server Id</label>\n    <input type=\"number\" class=\"form-control\" value=\"{{serverId}}\">\n    <p>this is the current server id</p>\n  </div>\n  <div class=\"col-sm-6\">\n    <label for=\"\">Server Status</label>\n    <input type=\"text\" class=\"form-control\" value=\"{{connected ? 'Connected' : 'Disconnected'}}\" disabled>\n    <p>this is the current server status</p>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/single-server/single-server.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SingleServerComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SingleServerComponent = /** @class */ (function () {
    function SingleServerComponent(router, route) {
        this.router = router;
        this.route = route;
        this.serverId = 10;
        this.connected = false;
    }
    SingleServerComponent.prototype.ngOnInit = function () {
        var _this = this;
        //inita
        this.serverId = this.route.snapshot.params["id"];
        this.connected = this.route.snapshot.params["connected"];
        this.route.params.subscribe(function (params) {
            _this.serverId = params["id"];
            _this.connected = params["connected"];
        });
    };
    SingleServerComponent.prototype.routeBack = function () {
        this.router.navigate(['/servers']);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Object)
    ], SingleServerComponent.prototype, "serverId", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Object)
    ], SingleServerComponent.prototype, "connected", void 0);
    SingleServerComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-single-server',
            template: __webpack_require__("./src/app/single-server/single-server.component.html"),
            styles: [__webpack_require__("./src/app/single-server/single-server.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]])
    ], SingleServerComponent);
    return SingleServerComponent;
}());



/***/ }),

/***/ "./src/app/utils/timer.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = Timer;
function Timer(time, interval, cb, cbEnd) {
    var _time = 0;
    var _interval = setInterval(function () {
        var val = cb(time - _time);
        if (val)
            clearInterval(_interval);
        _time += interval;
        // console.log(_time, interval);
        if (_time > time) {
            cbEnd();
            clearInterval(_interval);
        }
    }, interval);
}


/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map