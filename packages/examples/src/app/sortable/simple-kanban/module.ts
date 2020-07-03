import { UtilityModule } from 'app/utility.module';

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { SkyhookDndModule } from '@topdecked/angular-skyhook-core';
import { SkyhookMultiBackendModule } from '@topdecked/angular-skyhook-multi-backend';
import { SkyhookSortableModule } from '@topdecked/angular-skyhook-sortable';

import { ContainerComponent } from './container.component';
import { KanbanBoardComponent } from './kanban-board/kanban-board.component';
import { KanbanCardComponent } from './kanban-card/kanban-card.component';
import { KanbanListComponent } from './kanban-list/kanban-list.component';
import { SortableSpecService } from './specs';

@NgModule({
    declarations: [
        ContainerComponent,
        KanbanBoardComponent,
        KanbanListComponent,
        KanbanCardComponent,
    ],
    imports: [
        CommonModule,
        UtilityModule,
        SkyhookDndModule,
        SkyhookMultiBackendModule,
        SkyhookSortableModule,
        ReactiveFormsModule,
        RouterModule.forChild([
            { path: "", component: ContainerComponent }
        ])
    ],
    providers: [
        SortableSpecService
    ]
})
export class KanbanModule { }
