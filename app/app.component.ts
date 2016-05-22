import {Component} from '@angular/core';
import {CoursesComponent} from './courses.component';//without ts extension

@Component({
    selector: 'my-app',
    template: '<h1>Angular 2 App</h1><courses></courses>',
    directives: [CoursesComponent]
})
export class AppComponent { }
