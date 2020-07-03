import { UtilityModule } from 'app/utility.module';

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SkyhookDndModule } from '@topdecked/angular-skyhook-core';
import { SkyhookMultiBackendModule } from '@topdecked/angular-skyhook-multi-backend';

import { BlueOrYellowComponent } from './blue-or-yellow.component';
import { ContainerComponent } from './container.component';
import { TargetBox } from './target.component';

@NgModule({
    declarations: [
        ContainerComponent,
        TargetBox,
        BlueOrYellowComponent
    ],
    imports: [
        CommonModule,
        UtilityModule,
        SkyhookDndModule,
        SkyhookMultiBackendModule,
        RouterModule.forChild([{ path: "", component: ContainerComponent }]),
    ],
})
export class NestedSourcesModule {
}
