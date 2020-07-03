import { UtilityModule } from 'app/utility.module';

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { SkyhookDndModule } from '@topdecked/angular-skyhook-core';
import { SkyhookMultiBackendModule } from '@topdecked/angular-skyhook-multi-backend';
import { SkyhookSortableModule } from '@topdecked/angular-skyhook-sortable';

import { AddCardComponent } from './add-card.component';
import { ContainerComponent } from './container.component';
import { KanbanExternalComponent } from './external.component';
import { KanbanBoardComponent } from './kanban-board/kanban-board.component';
import { KanbanCardComponent } from './kanban-card/kanban-card.component';
import { KanbanListComponent } from './kanban-list/kanban-list.component';
import { SortableSpecService } from './specs';
import { reducer } from './store';
import { TrashCanComponent } from './trash-can.component';

@NgModule({
    declarations: [
        ContainerComponent,
        KanbanBoardComponent,
        KanbanListComponent,
        KanbanCardComponent,
        AddCardComponent,
        TrashCanComponent,
        KanbanExternalComponent,
    ],
    imports: [
        CommonModule,
        UtilityModule,
        SkyhookDndModule,
        SkyhookMultiBackendModule,
        SkyhookSortableModule,
        ReactiveFormsModule,
        StoreModule,
        StoreModule.forFeature('kanban', reducer),
        RouterModule.forChild([
            { path: "", component: ContainerComponent }
        ])
    ],
    providers: [
        SortableSpecService
    ]
})
export class KanbanModule { }
