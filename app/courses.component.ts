import {Component} from '@angular/core'

@Component({
    selector: 'courses',//css selector
    template: `
            <h2>Course</h2>
            {{ title }}
            <ul>
                <li *ngFor="#course of courses">
                {{ course }}
                </li>
            </ul>
        `
})
export class CoursesComponent {
    // title: string = "The title of the courses page";
    title = "The ttle of the courses pages";//data type infer, dynamic binding
    courses = ["Course1", "Course2", "course3"];
}