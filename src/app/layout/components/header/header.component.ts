import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
    public pushRightClass: string;

    constructor(private translate: TranslateService, public router: Router) {
        
    }

    ngOnInit() {
    }


    changeLang(language: string) {
        this.translate.use(language);
    }
}
