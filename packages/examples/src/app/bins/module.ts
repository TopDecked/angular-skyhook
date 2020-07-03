import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SkyhookDndModule } from '@topdecked/angular-skyhook-core';
import { SkyhookMultiBackendModule } from '@topdecked/angular-skyhook-multi-backend';

import { UtilityModule } from '../utility.module';
import { Bin } from './bin.component';
import { ContainerComponent } from './container.component';
import { TrashPile } from './trash-pile.component';
import { Trash } from './trash.component';

@NgModule({
    declarations: [Bin, TrashPile, Trash, ContainerComponent],
    imports: [
        CommonModule,
        SkyhookDndModule,
        SkyhookMultiBackendModule,
        RouterModule.forChild([{ path: "", component: ContainerComponent }]),
        UtilityModule
    ]
})
export class BinsModule {}
