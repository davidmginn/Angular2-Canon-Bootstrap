System.register(['angular2/core', './navbar.dropdown.component'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, navbar_dropdown_component_1;
    var NavbarComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (navbar_dropdown_component_1_1) {
                navbar_dropdown_component_1 = navbar_dropdown_component_1_1;
            }],
        execute: function() {
            NavbarComponent = (function () {
                function NavbarComponent() {
                }
                NavbarComponent = __decorate([
                    core_1.Component({
                        selector: 'navbar',
                        templateUrl: '/app/shared/navbar.component.html',
                        directives: [navbar_dropdown_component_1.NavbarDropdownComponent]
                    }), 
                    __metadata('design:paramtypes', [])
                ], NavbarComponent);
                return NavbarComponent;
            })();
            exports_1("NavbarComponent", NavbarComponent);
        }
    }
});
//# sourceMappingURL=navbar.component.js.map