import {Component} from '@angular/core'
import {FavoriteComponent} from './favorite.component'

//(favoriteChange) define consumer here.
@Component({
    selector: 'my-app',
    template: `
         <favorite [is-favorite]="post.isFavorite" (favoriteChange)="onFavoriteChange($event)"></favorite>
    `,
    directives: [FavoriteComponent]//一定要写啊，坑啊！！！对于component的引用
})
export class AppComponent {
    post = {
        title: "Title",
        isFavorite: true
    }

    onFavoriteChange($event:any) {
        console.log($event);
    }
}
//  <favorite [isFavorite]="post.isFavorite"></favorite>    第一种写法
//  <favorite [is-favorite]="post.isFavorite"></favorite>   别名的写法
