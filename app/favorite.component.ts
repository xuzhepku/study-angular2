import { Component, Input, EventEmitter, Output } from '@angular/core'

@Component({
    selector: 'favorite',
    templateUrl: 'app/favorite.template.html',//will cause extra http request to download the template
    // outputs: ['change:favoriteChange']
})

export class FavoriteComponent {
    @Input('is-favorite') isFavorite = false; //括号中加string是别名
    // alias: favoriteChange for this output
    @Output('favoriteChange') change = new EventEmitter();    //event publisher, output公开此变量

    onClick() {
        this.isFavorite = !this.isFavorite;
        // producer
        this.change.emit({ newValue: this.isFavorite });    //raise event, pass parameter
    }
}
//  inputs: ['isFavorite:is-favorite']  可以在@component里面加
//  outputs: ['change:favouriteChange']
//  可以用annotation和inputs两种方式来写，annotation推荐，因为在代码中好找，不会产生magic array问题。但要注意定义的annotation放在最前面，好找。
//  总之，为了方便。