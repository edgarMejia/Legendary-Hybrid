(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tab1-tab1-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/tab1/tab1.page.html":
/*!***************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/tab1/tab1.page.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title>Legendary 🧝🏻‍♀️</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <ion-list>\n    <ion-list-header>New & updated legends</ion-list-header>\n\n    <ion-item *ngFor=\"let new of newLegends\">\n      <ion-avatar slot=\"start\">\n        <ion-icon name=\"bookmarks\"></ion-icon>\n      </ion-avatar>\n\n      <ion-label>\n        <h2>{{ new.name }}</h2>\n        <h3>{{ new.country }}</h3>\n        <p>{{ new.description }}</p>\n      </ion-label>\n    </ion-item>\n  </ion-list>\n\n  <ion-list>\n    <ion-list-header>Recommended for you</ion-list-header>\n\n    <ion-item *ngFor=\"let recommended of recommendedLegends\">\n      <ion-avatar slot=\"start\">\n        <ion-icon name=\"bookmarks\"></ion-icon>\n      </ion-avatar>\n\n      <ion-label>\n        <h2>{{ recommended.name }}</h2>\n        <h3>{{ recommended.country }}</h3>\n        <p>{{ recommended.description }}</p>\n      </ion-label>\n    </ion-item>\n  </ion-list>\n\n  <ion-list>\n    <ion-list-header>Most populars</ion-list-header>\n\n    <ion-item *ngFor=\"let top of topLegends\">\n      <ion-avatar slot=\"start\">\n        <ion-icon name=\"bookmarks\"></ion-icon>\n      </ion-avatar>\n      \n      <ion-label>\n        <h2>{{ top.name }}</h2>\n        <h3>{{ top.country }}</h3>\n        <p>{{ top.description }}</p>\n      </ion-label>\n    </ion-item>\n  </ion-list>\n\n\n    <!-- <ion-list lines=\"none\">\n      <ion-list-header>\n        <ion-label>Resources</ion-label>\n      </ion-list-header>\n      <ion-item href=\"https://ionicframework.com/docs/\">\n        <ion-icon slot=\"start\" color=\"medium\" name=\"book\"></ion-icon>\n        <ion-label>Ionic Documentation</ion-label>\n      </ion-item>\n      <ion-item href=\"https://ionicframework.com/docs/building/scaffolding\">\n        <ion-icon slot=\"start\" color=\"medium\" name=\"build\"></ion-icon>\n        <ion-label>Scaffold Out Your App</ion-label>\n      </ion-item>\n      <ion-item href=\"https://ionicframework.com/docs/layout/structure\">\n        <ion-icon slot=\"start\" color=\"medium\" name=\"grid\"></ion-icon>\n        <ion-label>Change Your App Layout</ion-label>\n      </ion-item>\n      <ion-item href=\"https://ionicframework.com/docs/theming/basics\">\n        <ion-icon slot=\"start\" color=\"medium\" name=\"color-fill\"></ion-icon>\n        <ion-label>Theme Your App</ion-label>\n      </ion-item>\n    </ion-list> -->\n\n    <ion-fab vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\">\n      <ion-fab-button>\n        <ion-icon name=\"bookmark\"></ion-icon>\n      </ion-fab-button>\n    </ion-fab>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/tab1/tab1.module.ts":
/*!*************************************!*\
  !*** ./src/app/tab1/tab1.module.ts ***!
  \*************************************/
/*! exports provided: Tab1PageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab1PageModule", function() { return Tab1PageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _tab1_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tab1.page */ "./src/app/tab1/tab1.page.ts");







let Tab1PageModule = class Tab1PageModule {
};
Tab1PageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
        imports: [
            _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([{ path: '', component: _tab1_page__WEBPACK_IMPORTED_MODULE_6__["Tab1Page"] }])
        ],
        declarations: [_tab1_page__WEBPACK_IMPORTED_MODULE_6__["Tab1Page"]]
    })
], Tab1PageModule);



/***/ }),

/***/ "./src/app/tab1/tab1.page.scss":
/*!*************************************!*\
  !*** ./src/app/tab1/tab1.page.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".welcome-card img {\n  max-height: 35vh;\n  overflow: hidden;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9lZGdhcm1lamlhL0RvY3VtZW50cy9MZWdlbmRhcnkvc3JjL2FwcC90YWIxL3RhYjEucGFnZS5zY3NzIiwic3JjL2FwcC90YWIxL3RhYjEucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0JBQUE7RUFDQSxnQkFBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvdGFiMS90YWIxLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi53ZWxjb21lLWNhcmQgaW1nIHtcbiAgbWF4LWhlaWdodDogMzV2aDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cbiIsIi53ZWxjb21lLWNhcmQgaW1nIHtcbiAgbWF4LWhlaWdodDogMzV2aDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/tab1/tab1.page.ts":
/*!***********************************!*\
  !*** ./src/app/tab1/tab1.page.ts ***!
  \***********************************/
/*! exports provided: Tab1Page */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab1Page", function() { return Tab1Page; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let Tab1Page = class Tab1Page {
    constructor() {
        this.newLegends = [
            {
                id: 1,
                name: "El justo juez de la noche",
                description: "La leyenda nace en El Salvador, especificamente en el departamento de ...",
                country: "El Salvador",
                reads: 13632,
                createdAt: new Date(),
                updatedAt: null
            },
            {
                id: 2,
                name: "Las poquianchis",
                description: "En la ciudad de Queretaro allá por el año ...",
                country: "Mexico",
                reads: 5830,
                createdAt: new Date(),
                updatedAt: null
            },
            {
                id: 3,
                name: "El Cadejo",
                description: "La leyenda nace en El Salvador, especificamente en el departamento de ...",
                country: "El Salvador",
                reads: 13632,
                createdAt: new Date(),
                updatedAt: null
            },
            {
                id: 4,
                name: "Los duendes",
                description: "des des des ...",
                country: "Guatemala",
                reads: 13632,
                createdAt: new Date(),
                updatedAt: null
            }
        ];
        this.recommendedLegends = [
            {
                id: 1,
                name: "Historias de rios",
                description: "des des des ...",
                country: "Honduras",
                reads: 13632,
                createdAt: new Date(),
                updatedAt: null
            },
            {
                id: 2,
                name: "Las cantareras",
                description: "des des des ...",
                country: "El Salvador",
                reads: 13632,
                createdAt: new Date(),
                updatedAt: null
            },
            {
                id: 3,
                name: "La mano peluda",
                description: "des des des ...",
                country: "Mexico",
                reads: 13632,
                createdAt: new Date(),
                updatedAt: null
            }
        ];
        this.topLegends = [
            {
                id: 1,
                name: "El Cipitio",
                description: "des des des ...",
                country: "El Salvador",
                reads: 13632,
                createdAt: new Date(),
                updatedAt: null
            },
            {
                id: 2,
                name: "La cihunaba",
                description: "des des des ...",
                country: "El Salvador",
                reads: 13632,
                createdAt: new Date(),
                updatedAt: null
            },
            {
                id: 3,
                name: "El chupacabras",
                description: "des des des ...",
                country: "Puerto Rico",
                reads: 13632,
                createdAt: new Date(),
                updatedAt: null
            }
        ];
    }
};
Tab1Page = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-tab1',
        template: __webpack_require__(/*! raw-loader!./tab1.page.html */ "./node_modules/raw-loader/index.js!./src/app/tab1/tab1.page.html"),
        styles: [__webpack_require__(/*! ./tab1.page.scss */ "./src/app/tab1/tab1.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], Tab1Page);



/***/ })

}]);
//# sourceMappingURL=tab1-tab1-module-es2015.js.map