import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PageHeaderModule } from '../../shared';

import { BsComponentRoutingModule } from './bs-component-routing.module';
import { BsComponentComponent } from './bs-component.component';

@NgModule({
    imports: [CommonModule, BsComponentRoutingModule, FormsModule, ReactiveFormsModule, NgbModule, PageHeaderModule],
    declarations: [
        BsComponentComponent
        
    ]
})
export class BsComponentModule {}
