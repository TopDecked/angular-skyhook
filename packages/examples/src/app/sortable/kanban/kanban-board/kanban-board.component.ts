import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { DraggedItem } from '@topdecked/angular-skyhook-sortable';

import { Card } from '../card';
import { ItemTypes } from '../item-types';
import { SortableSpecService } from '../specs';
import { AddCard, RemoveCard } from '../store';

@Component({
    selector: "kanban-board",
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: "./kanban-board.component.html",
    styleUrls: ["./kanban-board.component.scss"]
})
export class KanbanBoardComponent {
    ItemTypes = ItemTypes;

    constructor(
        private store: Store<{}>,
        public specs: SortableSpecService
    ) { }

    addCard(listId: number, title: string) {
        this.store.dispatch(new AddCard(listId, title));
    }

    removeCard(ev: DraggedItem<Card>) {
        this.store.dispatch(new RemoveCard(ev));
    }

}
