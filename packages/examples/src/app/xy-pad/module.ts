import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { SkyhookDndModule } from '@topdecked/angular-skyhook-core';

import { UtilityModule } from '../utility.module';
import { BoxDragPreviewComponent } from './box-drag-preview/box-drag-preview.component';
import { ContainerComponent } from './container.component';
import { CrosshairsComponent } from './crosshairs.component';
import { CubeComponent } from './cube.component';
import { CustomDragLayerComponent } from './custom-drag-layer/custom-drag-layer.component';
import { DragContainerComponent } from './drag-container/drag-container.component';
import { DraggableBoxComponent } from './draggable-box/draggable-box.component';
import { SpotComponent } from './spot.component';

@NgModule({
    declarations: [
        ContainerComponent,
        CustomDragLayerComponent,
        DraggableBoxComponent,
        DragContainerComponent,
        BoxDragPreviewComponent,
        SpotComponent,
        CrosshairsComponent,
        CubeComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        SkyhookDndModule,
        RouterModule.forChild([{ path: '', component: ContainerComponent }]),
        UtilityModule
    ]
})
export class XyPadModule {}
