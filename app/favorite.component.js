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
var FavoriteComponent = (function () {
    function FavoriteComponent() {
        this.isFavorite = false; //括号中加string是别名
        // alias: favoriteChange for this output
        this.change = new core_1.EventEmitter(); //event publisher, output公开此变量
    }
    FavoriteComponent.prototype.onClick = function () {
        this.isFavorite = !this.isFavorite;
        // producer
        this.change.emit({ newValue: this.isFavorite }); //raise event, pass parameter
    };
    __decorate([
        core_1.Input('is-favorite'), 
        __metadata('design:type', Object)
    ], FavoriteComponent.prototype, "isFavorite", void 0);
    __decorate([
        //括号中加string是别名
        core_1.Output('favoriteChange'), 
        __metadata('design:type', Object)
    ], FavoriteComponent.prototype, "change", void 0);
    FavoriteComponent = __decorate([
        core_1.Component({
            selector: 'favorite',
            templateUrl: 'app/favorite.template.html',
        }), 
        __metadata('design:paramtypes', [])
    ], FavoriteComponent);
    return FavoriteComponent;
}());
exports.FavoriteComponent = FavoriteComponent;
//  inputs: ['isFavorite:is-favorite']  可以在@component里面加
//  outputs: ['change:favouriteChange']
//  可以用annotation和inputs两种方式来写，annotation推荐，因为在代码中好找，不会产生magic array问题。但要注意定义的annotation放在最前面，好找。
//  总之，为了方便。 
//# sourceMappingURL=favorite.component.js.map