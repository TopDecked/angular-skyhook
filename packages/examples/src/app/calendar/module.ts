import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { SkyhookDndModule } from '@topdecked/angular-skyhook-core';
import { SkyhookMultiBackendModule } from '@topdecked/angular-skyhook-multi-backend';

import { UtilityModule } from '../utility.module';
import { CalendarComponent } from './components/calendar.component';
import { CalendarContainerComponent } from './components/container.component';
import { CalendarDayComponent } from './components/day.component';
import { CalendarEventComponent } from './components/event.component';
import * as fromCalendar from './store/calendar.reducer';
import { CalendarService } from './store/service';

@NgModule({
    declarations: [
        CalendarContainerComponent,
        CalendarComponent,
        CalendarDayComponent,
        CalendarEventComponent,
    ],
    imports: [
        CommonModule,
        UtilityModule,
        SkyhookDndModule,
        SkyhookMultiBackendModule,
        ReactiveFormsModule,
        StoreModule,
        RouterModule.forChild([
            { path: "", component: CalendarContainerComponent }
        ]),
        StoreModule.forFeature('calendar', fromCalendar.reducer),
    ],
    providers: [ CalendarService ]
})
export class CalendarModule { }
