import { UtilityModule } from 'app/utility.module';

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SkyhookDndModule } from '@topdecked/angular-skyhook-core';
import { SkyhookMultiBackendModule } from '@topdecked/angular-skyhook-multi-backend';

import { Box } from './box.component';
import { ContainerComponent } from './container.component';
import { Dustbin } from './dustbin.component';

@NgModule({
    declarations: [
        ContainerComponent,
        Box,
        Dustbin,
    ],
    imports: [
        CommonModule,
        UtilityModule,
        SkyhookDndModule,
        SkyhookMultiBackendModule,
        RouterModule.forChild([{ path: "", component: ContainerComponent }]),
    ],
})
export class NestedTargetsModule {
}
