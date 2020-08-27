import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NgbAlertModule, NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';
import { StatModule } from '../../shared';
import { ChatComponent, NotificationComponent, TimelineComponent } from './components';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { ChartsModule as Ng2Charts } from 'ng2-charts';




@NgModule({
    imports: [CommonModule, NgbCarouselModule, NgbAlertModule, DashboardRoutingModule, StatModule,Ng2Charts],
    declarations: [DashboardComponent, TimelineComponent, NotificationComponent, ChatComponent]
})
export class DashboardModule {}
