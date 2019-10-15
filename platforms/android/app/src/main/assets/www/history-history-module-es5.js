(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["history-history-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/history/history.page.html":
/*!*********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/history/history.page.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title>My read history</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <ion-list>\n    <ion-list-header>Today</ion-list-header>\n\n    <ion-item *ngFor=\"let new of newLegends\">\n      <ion-avatar slot=\"start\">\n        <ion-icon name=\"bookmarks\"></ion-icon>\n      </ion-avatar>\n\n      <ion-label>\n        <h2>{{ new.name }}</h2>\n        <h3>{{ new.country }}</h3>\n        <p>{{ new.description }}</p>\n      </ion-label>\n    </ion-item>\n  </ion-list>\n\n  <ion-list>\n    <ion-list-header>All history</ion-list-header>\n\n    <ion-item *ngFor=\"let recommended of recommendedLegends\">\n      <ion-avatar slot=\"start\">\n        <ion-icon name=\"bookmarks\"></ion-icon>\n      </ion-avatar>\n\n      <ion-label>\n        <h2>{{ recommended.name }}</h2>\n        <h3>{{ recommended.country }}</h3>\n        <p>{{ recommended.description }}</p>\n      </ion-label>\n    </ion-item>\n  </ion-list>\n  \n</ion-content>\n"

/***/ }),

/***/ "./src/app/history/history.module.ts":
/*!*******************************************!*\
  !*** ./src/app/history/history.module.ts ***!
  \*******************************************/
/*! exports provided: HistoryPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HistoryPageModule", function() { return HistoryPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _history_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./history.page */ "./src/app/history/history.page.ts");







var HistoryPageModule = /** @class */ (function () {
    function HistoryPageModule() {
    }
    HistoryPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
            imports: [
                _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([{ path: '', component: _history_page__WEBPACK_IMPORTED_MODULE_6__["History"] }])
            ],
            declarations: [_history_page__WEBPACK_IMPORTED_MODULE_6__["History"]]
        })
    ], HistoryPageModule);
    return HistoryPageModule;
}());



/***/ }),

/***/ "./src/app/history/history.page.scss":
/*!*******************************************!*\
  !*** ./src/app/history/history.page.scss ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".welcome-card img {\n  max-height: 35vh;\n  overflow: hidden;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9lZGdhcm1lamlhL0RvY3VtZW50cy9MZWdlbmRhcnkvc3JjL2FwcC9oaXN0b3J5L2hpc3RvcnkucGFnZS5zY3NzIiwic3JjL2FwcC9oaXN0b3J5L2hpc3RvcnkucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0JBQUE7RUFDQSxnQkFBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvaGlzdG9yeS9oaXN0b3J5LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi53ZWxjb21lLWNhcmQgaW1nIHtcbiAgbWF4LWhlaWdodDogMzV2aDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cbiIsIi53ZWxjb21lLWNhcmQgaW1nIHtcbiAgbWF4LWhlaWdodDogMzV2aDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/history/history.page.ts":
/*!*****************************************!*\
  !*** ./src/app/history/history.page.ts ***!
  \*****************************************/
/*! exports provided: History */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "History", function() { return History; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var History = /** @class */ (function () {
    function History() {
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
    History = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-history',
            template: __webpack_require__(/*! raw-loader!./history.page.html */ "./node_modules/raw-loader/index.js!./src/app/history/history.page.html"),
            styles: [__webpack_require__(/*! ./history.page.scss */ "./src/app/history/history.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], History);
    return History;
}());



/***/ })

}]);
//# sourceMappingURL=history-history-module-es5.js.map