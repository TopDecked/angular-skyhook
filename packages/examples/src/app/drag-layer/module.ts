import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SkyhookDndModule } from '@topdecked/angular-skyhook-core';

import { UtilityModule } from '../utility.module';
import { BoxDragPreviewComponent } from './box-drag-preview/box-drag-preview.component';
import { BoxComponent } from './box.component';
import { ContainerComponent } from './container.component';
import { CustomDragLayerComponent } from './custom-drag-layer/custom-drag-layer.component';
import { DragContainerComponent } from './drag-container/drag-container.component';
import { DraggableBoxComponent } from './draggable-box/draggable-box.component';

@NgModule({
    declarations: [
        ContainerComponent,
        CustomDragLayerComponent,
        DraggableBoxComponent,
        DragContainerComponent,
        BoxDragPreviewComponent,
        BoxComponent
    ],
    imports: [
        CommonModule,
        SkyhookDndModule,
        RouterModule.forChild([{ path: '', component: ContainerComponent }]),
        UtilityModule
    ],
})
export class DragLayerModule { }
