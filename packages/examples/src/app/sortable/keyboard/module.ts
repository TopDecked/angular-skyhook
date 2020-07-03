import { HotkeyModule } from 'angular2-hotkeys';
import { UtilityModule } from 'app/utility.module';

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { SkyhookDndModule } from '@topdecked/angular-skyhook-core';
import { SkyhookMultiBackendModule } from '@topdecked/angular-skyhook-multi-backend';
import { SkyhookSortableModule } from '@topdecked/angular-skyhook-sortable';

import { ContainerComponent } from './container.component';
import { SimpleComponent } from './simple.component';
import { reducer } from './store/reducer';
import { SummaryComponent } from './summary.component';

@NgModule({
    declarations: [
        ContainerComponent,
        SimpleComponent,
        SummaryComponent,
    ],
    imports: [
        CommonModule,
        UtilityModule,
        SkyhookDndModule,
        SkyhookMultiBackendModule,
        SkyhookSortableModule,
        StoreModule.forFeature('simple-ngrx', reducer),
        RouterModule.forChild([
            { path: "", component: ContainerComponent }
        ]),
        HotkeyModule,
    ]
})
export class KeyboardModule { }
