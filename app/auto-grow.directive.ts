import { Directive, ElementRef, Renderer } from '@angular/core';

@Directive({
    selector: '[autoGrow]',
    host: {
        '(focus)': 'onFocus()',//注意()，否则根本进不来
        '(blur)': 'onBlur()'
    }
})

export class AutoGrowDirective {
    //在参数中加入private，意味着在当前class中加入private variable
    constructor(private el: ElementRef, private renderer: Renderer) {

    }
    onFocus() {
        this.renderer.setElementStyle(this.el.nativeElement, 'width', '200');
    }
    onBlur() {
        this.renderer.setElementStyle(this.el.nativeElement, 'width', '120');
    }
}