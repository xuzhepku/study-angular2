import { Component } from '@angular/core';
import { CoursesComponent } from './courses.component';//without ts extension, start searching from current folder.
import { AuthorsComponent } from './authors.component';
@Component({
    selector: 'my-app',
    template: '<h1>Angular 2 App</h1><courses></courses><authors></authors>',
    directives: [CoursesComponent, AuthorsComponent],
})
export class AppComponent { }
