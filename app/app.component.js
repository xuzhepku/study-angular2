"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var favorite_component_1 = require('./favorite.component');
//(favoriteChange) define consumer here.
var AppComponent = (function () {
    function AppComponent() {
        this.post = {
            title: "Title",
            isFavorite: true
        };
    }
    AppComponent.prototype.onFavoriteChange = function ($event) {
        console.log($event);
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            template: "\n         <favorite [is-favorite]=\"post.isFavorite\" (favoriteChange)=\"onFavoriteChange($event)\"></favorite>\n    ",
            directives: [favorite_component_1.FavoriteComponent] //一定要写啊，坑啊！！！对于component的引用
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//  <favorite [isFavorite]="post.isFavorite"></favorite>    第一种写法
//  <favorite [is-favorite]="post.isFavorite"></favorite>   别名的写法
//# sourceMappingURL=app.component.js.map