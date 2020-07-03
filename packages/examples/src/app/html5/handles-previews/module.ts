import { UtilityModule } from 'app/utility.module';

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SkyhookDndModule } from '@topdecked/angular-skyhook-core';
import { SkyhookMultiBackendModule } from '@topdecked/angular-skyhook-multi-backend';

import { ContainerComponent } from './container.component';
import { CustomPreview } from './custom-preview.component';
import { Handle } from './handle.component';

@NgModule({
    declarations: [
        CustomPreview,
        Handle,
        ContainerComponent
    ],
    imports: [
        CommonModule,
        UtilityModule,
        SkyhookDndModule,
        SkyhookMultiBackendModule,
        RouterModule.forChild([{ path: "", component: ContainerComponent }]),
    ],
})
export class HandlesPreviewsModule {
}
