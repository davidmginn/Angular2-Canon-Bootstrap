import {Component} from 'angular2/core';
import {NavbarDropdownComponent} from './navbar.dropdown.component';
@Component({
    selector: 'navbar',
    templateUrl: '/app/shared/navbar.component.html',
    directives: [NavbarDropdownComponent]
})

export class NavbarComponent{
    
}