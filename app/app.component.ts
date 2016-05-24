import { Component } from '@angular/core';
@Component({
    selector: 'my-app',
    template: `<div>
        <i class="fa fa-5x" 
            [class.fa-star] = "isActive" 
            [class.fa-star-o] = "!isActive" 
            (click)="onClick($event)">
        </i>
       </div>`,
})
export class AppComponent { 
    isActive = false;
    onClick(){
        this.isActive = !this.isActive;
    }
}
// [class.glyphicon-star-empty] = "!isActive"