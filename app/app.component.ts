import {Component} from 'angular2/core';
import {NavbarComponent} from './shared/navbar.component';
@Component({
    selector: 'my-app',
    templateUrl: './app/app.component.html',
    directives: [NavbarComponent]
})
export class AppComponent { }