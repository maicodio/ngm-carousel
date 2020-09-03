(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "../../dist/ngm-carousel/__ivy_ngcc__/fesm2015/ngm-carousel.js":
/*!***************************************************************************************!*\
  !*** D:/angular/ngm-carousel/dist/ngm-carousel/__ivy_ngcc__/fesm2015/ngm-carousel.js ***!
  \***************************************************************************************/
/*! exports provided: NgmCarouselComponent, NgmCarouselModule, NgmCarouselService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgmCarouselComponent", function() { return NgmCarouselComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgmCarouselModule", function() { return NgmCarouselModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgmCarouselService", function() { return NgmCarouselService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/animations */ "../../node_modules/@angular/animations/__ivy_ngcc__/fesm2015/animations.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser/animations */ "../../node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");







const _c0 = ["container"];
function NgmCarouselComponent_div_4_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
} }
const _c1 = function (a0) { return { item: a0 }; };
function NgmCarouselComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NgmCarouselComponent_div_4_ng_container_1_Template, 1, 0, "ng-container", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const slide_r4 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r2.slideTemplate)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c1, slide_r4.item));
} }
function NgmCarouselComponent_button_6_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NgmCarouselComponent_button_6_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const item_r6 = ctx.$implicit; const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r7.selectSlide(item_r6.dix); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("active", item_r6.selected);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r6.dix + 1);
} }
const _c2 = function (a0) { return { slideLeft: a0 }; };
const _c3 = function (a0, a1) { return { value: a0, params: a1 }; };
class NgmCarouselService {
    constructor() { }
}
NgmCarouselService.ɵfac = function NgmCarouselService_Factory(t) { return new (t || NgmCarouselService)(); };
NgmCarouselService.ɵprov = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"])({ factory: function NgmCarouselService_Factory() { return new NgmCarouselService(); }, token: NgmCarouselService, providedIn: "root" });
NgmCarouselService.ctorParameters = () => [];
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgmCarouselService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();

class NgmCarouselComponent {
    constructor() {
        this.showButtons = true;
        this.mainClassName = '';
        this.buttonsClassName = '';
        this.slideChanging = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.slideChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.slide2Position = { pos: -87, state: 'slide2' };
        this.slide3Position = { pos: -177.5, state: 'slide3' };
        this.slide4Position = { pos: -270, state: 'slide4' };
        this.isDown = false;
        this.startX = 0;
        this.lastDelta = 0;
        this.originalLeft = this.slide3Position.pos;
        this.currentLeft = this.slide3Position.pos;
        this.animatedSlideState = 'reset3';
        this.slides = [null, null, null, null, null];
        this.buttons = [];
        this.buttonSearch = -1;
    }
    ngOnInit() {
        this.processDataSource(0);
    }
    processDataSource(centerIx) {
        console.log(centerIx);
        const ds = (this.dataSource ? this.dataSource : []).slice();
        if (centerIx >= ds.length) {
            centerIx = 0;
        }
        if (centerIx < 0) {
            centerIx = ds.length - 1;
        }
        this.slideChanged.emit(this.dataSource[centerIx]);
        if (ds.length === 0) {
            this.slides = [1, 2, 3, 4, 5].map(x => ({ item: null, dix: -1 }));
            return;
        }
        this.buttons = this.dataSource.map((v, i) => ({
            selected: i === centerIx,
            dix: i
        }));
        if (ds.length === 1) {
            this.slides = [1, 2, 3, 4, 5].map(x => ({ item: ds[0], dix: 0 }));
            return;
        }
        if (ds.length === 2) {
            const anotherIx = centerIx === 0 ? 1 : 0;
            this.slides[0] = { item: ds[centerIx], dix: centerIx };
            this.slides[1] = { item: ds[anotherIx], dix: anotherIx };
            this.slides[2] = { item: ds[centerIx], dix: centerIx };
            this.slides[3] = { item: ds[anotherIx], dix: anotherIx };
            this.slides[4] = { item: ds[centerIx], dix: centerIx };
            return;
        }
        if (ds.length >= 3) {
            let minusMinusIx = centerIx - 2;
            let minusIx = centerIx - 1;
            let plusIx = centerIx + 1;
            let plusPlusIx = centerIx + 2;
            if (minusIx < 0) {
                minusIx = ds.length - 1;
                minusMinusIx = ds.length - 2;
            }
            if (minusMinusIx < 0) {
                minusMinusIx = ds.length - 1;
            }
            if (plusIx >= ds.length) {
                plusIx = 0;
                plusPlusIx = 1;
            }
            if (plusPlusIx >= ds.length) {
                plusPlusIx = 0;
            }
            this.slides[0] = { item: ds[minusMinusIx], dix: minusMinusIx };
            this.slides[1] = { item: ds[minusIx], dix: minusIx };
            this.slides[2] = { item: ds[centerIx], dix: centerIx };
            this.slides[3] = { item: ds[plusIx], dix: plusIx };
            this.slides[4] = { item: ds[plusPlusIx], dix: plusPlusIx };
        }
    }
    slider_mousedown(event) {
        this.slider_start(event.pageX);
    }
    slider_mouseleave(event) {
        this.slider_end();
    }
    slider_mouseup(event) {
        this.slider_end();
    }
    slider_mousemove(event) {
        this.slider_move(event.pageX);
    }
    slider_touchstart(event) {
        this.slider_start(event.touches[0].screenX);
    }
    slider_touchend(event) {
        this.slider_end();
    }
    slider_touchmove(event) {
        this.slider_move(event.touches[0].screenX);
    }
    slider_start(pageX) {
        this.isDown = true;
        this.startX = pageX;
        this.lastDelta = 0;
        this.animatedSlideState = 'normal';
    }
    slider_end() {
        if (!this.isDown) {
            return;
        }
        if (this.lastDelta > 0) {
            this.slideChanging.emit(this.getDataSourceItem(this.slides[2].dix - 1));
        }
        else {
            this.slideChanging.emit(this.getDataSourceItem(this.slides[2].dix + 1));
        }
        this.isDown = false;
        this.originalLeft = this.currentLeft;
        this.slider_animate_start();
    }
    getDataSourceItem(dix) {
        if (dix < 0) {
            dix = 0;
        }
        if (dix >= this.dataSource.length) {
            dix = this.dataSource.length - 1;
        }
        return this.dataSource[dix];
    }
    slider_move(pageX) {
        if (!this.isDown) {
            return;
        }
        this.lastDelta = pageX - this.startX;
        const percent = (this.lastDelta / this.container.element.nativeElement.offsetWidth) * 100;
        this.currentLeft = Math.round(this.originalLeft + percent);
    }
    slider_animate_start() {
        if (this.lastDelta === 0) {
            this.lastDelta = (this.startX < (this.container.element.nativeElement.offsetWidth / 2)) ? 1 : -1;
        }
        if (this.lastDelta > 0) {
            this.animatedSlideState = this.slide2Position.state;
        }
        else {
            this.animatedSlideState = this.slide4Position.state;
        }
    }
    slider_animate_end() {
        console.log('END: ' + this.animatedSlideState);
        if (this.buttonSearch >= 0 && this.animatedSlideState === 'reset3') {
            if (this.buttonSearch === this.slides[2].dix) {
                this.buttonSearch = -1;
            }
            else if (this.buttonSearch > this.slides[2].dix) {
                this.animatedSlideState = 'fast4';
            }
            else {
                this.animatedSlideState = 'fast2';
            }
            return;
        }
        if (this.animatedSlideState === 'reset3' || this.animatedSlideState === 'normal') {
            return;
        }
        if (this.buttonSearch < 0) {
            if (this.lastDelta > 0) {
                this.processDataSource(this.slides[2].dix - 1);
            }
            else {
                this.processDataSource(this.slides[2].dix + 1);
            }
        }
        else {
            if (this.buttonSearch > this.slides[2].dix) {
                this.processDataSource(this.slides[2].dix + 1);
            }
            else {
                this.processDataSource(this.slides[2].dix - 1);
            }
        }
        this.currentLeft = this.slide3Position.pos;
        this.originalLeft = this.currentLeft;
        this.animatedSlideState = 'reset3';
    }
    selectSlide(dix) {
        if (dix === this.slides[2].dix) {
            return;
        }
        this.slideChanging.emit(this.dataSource[dix]);
        this.buttonSearch = dix;
        if (this.buttonSearch > this.slides[2].dix) {
            this.animatedSlideState = 'fast4';
        }
        else {
            this.animatedSlideState = 'fast2';
        }
    }
}
NgmCarouselComponent.ɵfac = function NgmCarouselComponent_Factory(t) { return new (t || NgmCarouselComponent)(); };
NgmCarouselComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NgmCarouselComponent, selectors: [["ngm-carousel"]], viewQuery: function NgmCarouselComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstaticViewQuery"](_c0, true, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"]);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.container = _t.first);
    } }, inputs: { showButtons: "showButtons", mainClassName: "mainClassName", buttonsClassName: "buttonsClassName", dataSource: "dataSource", slideTemplate: "slideTemplate" }, outputs: { slideChanging: "slideChanging", slideChanged: "slideChanged" }, decls: 7, vars: 10, consts: [[1, "carousel-slider", 3, "ngClass", "mousedown", "mouseleave", "mouseup", "mousemove", "touchstart", "touchend", "touchmove"], ["slider", ""], [1, "carousel-container"], ["container", ""], ["class", "slide", 4, "ngFor", "ngForOf"], [1, "slider-button-container", 3, "ngClass"], [3, "active", "click", 4, "ngFor", "ngForOf"], [1, "slide"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], [3, "click"]], template: function NgmCarouselComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mousedown", function NgmCarouselComponent_Template_div_mousedown_0_listener($event) { return ctx.slider_mousedown($event); })("mouseleave", function NgmCarouselComponent_Template_div_mouseleave_0_listener($event) { return ctx.slider_mouseleave($event); })("mouseup", function NgmCarouselComponent_Template_div_mouseup_0_listener($event) { return ctx.slider_mouseup($event); })("mousemove", function NgmCarouselComponent_Template_div_mousemove_0_listener($event) { return ctx.slider_mousemove($event); })("touchstart", function NgmCarouselComponent_Template_div_touchstart_0_listener($event) { return ctx.slider_touchstart($event); })("touchend", function NgmCarouselComponent_Template_div_touchend_0_listener($event) { return ctx.slider_touchend($event); })("touchmove", function NgmCarouselComponent_Template_div_touchmove_0_listener($event) { return ctx.slider_touchmove($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("@slideTransition.done", function NgmCarouselComponent_Template_div_animation_slideTransition_done_2_listener() { return ctx.slider_animate_end(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, NgmCarouselComponent_div_4_Template, 2, 4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, NgmCarouselComponent_button_6_Template, 2, 3, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.mainClassName);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@slideTransition", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](7, _c3, ctx.animatedSlideState, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](5, _c2, ctx.currentLeft)));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.slides);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.buttonsClassName);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.buttons);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgTemplateOutlet"]], styles: [".carousel-slider[_ngcontent-%COMP%]{-moz-user-select:none;-ms-user-select:none;-webkit-tap-highlight-color:rgba(0,0,0,0);-webkit-user-drag:none;-webkit-user-select:none;overflow:hidden;touch-action:pan-y;user-select:none}.carousel-container[_ngcontent-%COMP%]{display:flex;height:100%;position:relative}.slide[_ngcontent-%COMP%]{flex:0 0 91%;max-width:91%}"], data: { animation: [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('slideTransition', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('normal', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ transform: 'translate3d({{slideLeft}}%, 0, 0)' }), { params: { slideLeft: 0 } }),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('slide2', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ transform: 'translate3d(-87%, 0, 0)' })),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('slide3', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ transform: 'translate3d(-177.5%, 0, 0)' })),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('slide4', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ transform: 'translate3d(-268.5%, 0, 0)' })),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('reset3', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ transform: 'translate3d(-177.5%, 0, 0)' })),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('fast2', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ transform: 'translate3d(-87%, 0, 0)' })),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('fast4', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ transform: 'translate3d(-270%, 0, 0)' })),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('normal=>slide2', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('0.6s ease-out')),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('normal=>slide3', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('0.6s ease-out')),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('normal=>slide4', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('0.6s ease-out')),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('*=>fast2', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('0.1s')),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('*=>fast4', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('0.1s')),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('*=>reset3', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('0s')),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('*=>normal', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('0s'))
            ])
        ] } });
NgmCarouselComponent.ctorParameters = () => [];
NgmCarouselComponent.propDecorators = {
    container: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"], args: ['container', { static: true, read: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"] },] }],
    dataSource: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    showButtons: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    mainClassName: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    buttonsClassName: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    slideTemplate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    slideChanging: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    slideChanged: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }]
};
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgmCarouselComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'ngm-carousel',
                template: "<div #slider class=\"carousel-slider\" \n  [ngClass]=\"mainClassName\"\n  (mousedown)=\"slider_mousedown($event)\"\n  (mouseleave)=\"slider_mouseleave($event)\"\n  (mouseup)=\"slider_mouseup($event)\"\n  (mousemove)=\"slider_mousemove($event)\"\n  (touchstart)=\"slider_touchstart($event)\"  \n  (touchend)=\"slider_touchend($event)\"\n  (touchmove)=\"slider_touchmove($event)\">\n  <div #container \n    [@slideTransition]=\"{ value: animatedSlideState, params: {slideLeft: currentLeft} }\" \n    (@slideTransition.done)=\"slider_animate_end()\" \n    class=\"carousel-container\">\n      <div class=\"slide\" *ngFor=\"let slide of slides\">\n        <ng-container *ngTemplateOutlet=\"slideTemplate, context: { item: slide.item }\"></ng-container>\n      </div>\n  </div>\n</div>\n<div class=\"slider-button-container\" [ngClass]=\"buttonsClassName\">\n  <button [class.active]=\"item.selected\" *ngFor=\"let item of buttons\" (click)=\"selectSlide(item.dix)\">{{item.dix+1}}</button>\n</div>\n",
                // encapsulation: ViewEncapsulation.None,
                animations: [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('slideTransition', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('normal', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ transform: 'translate3d({{slideLeft}}%, 0, 0)' }), { params: { slideLeft: 0 } }),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('slide2', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ transform: 'translate3d(-87%, 0, 0)' })),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('slide3', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ transform: 'translate3d(-177.5%, 0, 0)' })),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('slide4', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ transform: 'translate3d(-268.5%, 0, 0)' })),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('reset3', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ transform: 'translate3d(-177.5%, 0, 0)' })),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('fast2', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ transform: 'translate3d(-87%, 0, 0)' })),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('fast4', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ transform: 'translate3d(-270%, 0, 0)' })),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('normal=>slide2', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('0.6s ease-out')),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('normal=>slide3', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('0.6s ease-out')),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('normal=>slide4', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('0.6s ease-out')),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('*=>fast2', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('0.1s')),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('*=>fast4', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('0.1s')),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('*=>reset3', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('0s')),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('*=>normal', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('0s'))
                    ])
                ],
                styles: [".carousel-slider{-moz-user-select:none;-ms-user-select:none;-webkit-tap-highlight-color:rgba(0,0,0,0);-webkit-user-drag:none;-webkit-user-select:none;overflow:hidden;touch-action:pan-y;user-select:none}.carousel-container{display:flex;height:100%;position:relative}.slide{flex:0 0 91%;max-width:91%}"]
            }]
    }], function () { return []; }, { showButtons: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], mainClassName: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], buttonsClassName: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], slideChanging: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], slideChanged: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], container: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['container', { static: true, read: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"] }]
        }], dataSource: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], slideTemplate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();

class NgmCarouselModule {
}
NgmCarouselModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: NgmCarouselModule });
NgmCarouselModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function NgmCarouselModule_Factory(t) { return new (t || NgmCarouselModule)(); }, imports: [[
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](NgmCarouselModule, { declarations: function () { return [NgmCarouselComponent]; }, imports: function () { return [_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"]]; }, exports: function () { return [NgmCarouselComponent]; } }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgmCarouselModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [NgmCarouselComponent],
                imports: [
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"]
                ],
                exports: [NgmCarouselComponent]
            }]
    }], null, null); })();

/*
 * Public API Surface of ngm-carousel
 */

/**
 * Generated bundle index. Do not edit.
 */



//# sourceMappingURL=ngm-carousel.js.map

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!************************************************************************************************!*\
  !*** D:/angular/ngm-carousel/node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>Teste 0 itens:</p>\n<ngm-carousel [dataSource]=\"[]\" [slideTemplate]=\"slideTemplate0\">\n    <ng-template #slideTemplate0 let-oferta=\"item\">\n      <div class=\"slide-template\">\n        <p *ngIf=\"oferta\">{{oferta.teste}}</p>\n        <p *ngIf=\"!oferta\">NULL</p>\n      </div>\n    </ng-template>\n</ngm-carousel>\n\n<p>Teste 1 itens:</p>\n<ngm-carousel [dataSource]=\"[{ teste: 'Slide 1' }]\" [slideTemplate]=\"slideTemplate1\">\n    <ng-template #slideTemplate1 let-oferta=\"item\">\n      <div class=\"slide-template\">\n        <p>{{oferta.teste}}</p>\n      </div>\n    </ng-template>\n</ngm-carousel>\n\n\n<p>Teste 2 itens:</p>\n<ngm-carousel [dataSource]=\"[{ teste: 'Slide 1' }, { teste: 'Slide 2' }]\" [slideTemplate]=\"slideTemplate2\">\n    <ng-template #slideTemplate2 let-oferta=\"item\">\n      <div class=\"slide-template\">\n        <p>{{oferta.teste}}</p>\n      </div>\n    </ng-template>\n</ngm-carousel>\n\n<p>Teste 3 itens:</p>\n<ngm-carousel [dataSource]=\"[{ teste: 'Slide 1' }, { teste: 'Slide 2' }, { teste: 'Slide 3' }]\" [slideTemplate]=\"slideTemplate3\">\n    <ng-template #slideTemplate3 let-oferta=\"item\">\n      <div class=\"slide-template\">\n        <p>{{oferta.teste}}</p>\n      </div>\n    </ng-template>\n</ngm-carousel>\n\n\n<p>Teste 4 itens:</p>\n<ngm-carousel [dataSource]=\"[{ teste: 'Slide 1' }, { teste: 'Slide 2' }, { teste: 'Slide 3' }, { teste: 'Slide 4' }]\" [slideTemplate]=\"slideTemplate4\">\n    <ng-template #slideTemplate4 let-oferta=\"item\">\n      <div class=\"slide-template\">\n        <p>{{oferta.teste}}</p>\n      </div>\n    </ng-template>\n</ngm-carousel>\n\n<p>Teste 5 itens:</p>\n<ngm-carousel [dataSource]=\"[{ teste: 'Slide 1' }, { teste: 'Slide 2' }, { teste: 'Slide 3' }, { teste: 'Slide 4' }, { teste: 'Slide 5' }]\" [slideTemplate]=\"slideTemplate5\">\n    <ng-template #slideTemplate5 let-oferta=\"item\">\n      <div class=\"slide-template\">\n        <p>{{oferta.teste}}</p>\n      </div>\n    </ng-template>\n</ngm-carousel>\n\n<p>Teste 6 itens:</p>\n<ngm-carousel mainClassName=\"teste6Carrousel\" buttonsClassName=\"teste6CarrouselButtons\" [dataSource]=\"[{ teste: 'Slide 1', color:'#FF8888' }, { teste: 'Slide 2', color:'#88FF88' }, { teste: 'Slide 3', color:'#8888FF' }, { teste: 'Slide 4', color:'#FFAAAA' }, { teste: 'Slide 5', color:'#AAFFAA' }, { teste: 'Slide 6', color:'#AAAAFF' }]\" [slideTemplate]=\"slideTemplate6\">\n    <ng-template #slideTemplate6 let-oferta=\"item\">\n        <div  class=\"slide-template\"\n         [style.background-color]=\"oferta.color\"\n         [style.width.%]=\"100\"\n         >{{oferta.teste}}\n        </div>\n    </ng-template>\n</ngm-carousel>\n\n<p>Teste Images:</p>\n<ngm-carousel mainClassName=\"teste6Carrousel\" buttonsClassName=\"teste6CarrouselButtons\" [dataSource]=\"[\n'https://images.unsplash.com/photo-1571771019784-3ff35f4f4277?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=800&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ',\n'https://images.unsplash.com/photo-1581836499506-4a660b39478a?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=800&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ',\n'https://images.unsplash.com/photo-1566522650166-bd8b3e3a2b4b?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=800&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ',\n'https://images.unsplash.com/flagged/photo-1564918031455-72f4e35ba7a6?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=800&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ',\n'https://images.unsplash.com/photo-1579130781921-76e18892b57b?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=800&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ'\n]\" [slideTemplate]=\"slideTemplate7\">\n    <ng-template #slideTemplate7 let-imgurl=\"item\">\n       <img class=\"slide-image\" [src]=\"imgurl\" />\n    </ng-template>\n</ngm-carousel>\n");

/***/ }),

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



const routes = [];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".slider-button-container {\n  width: 100%;\n  text-align: center;\n}\n\n.teste6CarrouselButtons {\n  width: 100%;\n  text-align: right;\n}\n\n.slide-template {\n  pointer-events: none;\n  width: 100%;\n  min-height: 100px;\n  border: 1px solid black;\n}\n\n.slide-image {\n  pointer-events: none;\n  width: 100%;\n  height: auto;\n  max-height: 500px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3RzL3NhbXBsZXMvc3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxXQUFBO0VBQ0Esa0JBQUE7QUFDSjs7QUFFQTtFQUNJLFdBQUE7RUFDQSxpQkFBQTtBQUNKOztBQUVBO0VBQ0ksb0JBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSx1QkFBQTtBQUNKOztBQUVBO0VBQ0ksb0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0FBQ0oiLCJmaWxlIjoicHJvamVjdHMvc2FtcGxlcy9zcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zbGlkZXItYnV0dG9uLWNvbnRhaW5lciB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLnRlc3RlNkNhcnJvdXNlbEJ1dHRvbnMge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcclxufVxyXG5cclxuLnNsaWRlLXRlbXBsYXRlIHtcclxuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBtaW4taGVpZ2h0OiAxMDBweDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xyXG59XHJcblxyXG4uc2xpZGUtaW1hZ2Uge1xyXG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogYXV0bztcclxuICAgIG1heC1oZWlnaHQ6IDUwMHB4O1xyXG59Il19 */");

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let AppComponent = class AppComponent {
    constructor() {
        this.title = 'samples';
    }
};
AppComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./app.component.html */ "../../node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")).default]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "../../node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser/animations */ "../../node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
/* harmony import */ var ngm_carousel__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngm-carousel */ "../../dist/ngm-carousel/__ivy_ngcc__/fesm2015/ngm-carousel.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");







let AppModule = class AppModule {
};
AppModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
            ngm_carousel__WEBPACK_IMPORTED_MODULE_4__["NgmCarouselComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"]
        ],
        providers: [],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
    })
], AppModule);



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "../../node_modules/@angular/platform-browser-dynamic/__ivy_ngcc__/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\angular\ngm-carousel\projects\samples\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map