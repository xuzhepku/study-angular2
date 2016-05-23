import { Component } from '@angular/core'
import { AuthorService } from './author.service';

@Component({
    selector: 'authors',//css selector
    template: `
            <h2>Authors</h2>
            {{ title }}
            <ul>
                <li *ngFor="#author of authors">
                {{ author }}
                </li>
            </ul>
            `,
    providers: [AuthorService]//dependency injection
})
export class AuthorsComponent {
    // title: string = "The title of the courses page";
    title = "The ttle of the courses pages";//data type infer, dynamic binding
    authors: string[];
    constructor(authorService: AuthorService) {
        this.authors = authorService.getAuthors();
    }
}