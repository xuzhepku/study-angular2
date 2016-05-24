import { Component } from '@angular/core'
import { CourseService } from './course.service'
import { AutoGrowDirective } from './auto-grow.directive'

@Component({
    selector: 'courses',//css selector
    template: `
            <h2>Course</h2>
            {{ title }}
            <input type='text' autoGrow />
            <ul>
                <li *ngFor="let course of courses">
                {{ course }}
                </li>
            </ul>
        `,
    providers: [CourseService],//dependency injection
    directives: [AutoGrowDirective]
})
export class CoursesComponent {
    // title: string = "The title of the courses page";
    title = "The ttle of the courses pages";//data type infer, dynamic binding
    courses: string[];
    constructor(courseSevice: CourseService) {
        this.courses = courseSevice.getCourses();
    }
}