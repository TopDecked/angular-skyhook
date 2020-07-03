import { Component } from '@angular/core';
import { DraggedItem } from '@topdecked/angular-skyhook-sortable';

import { ItemTypes } from '../item-types';
import { Card, SortableSpecService } from '../specs';

@Component({
    selector: "kanban-board",
    templateUrl: "./kanban-board.component.html",
    styleUrls: ["./kanban-board.component.scss"]
})
export class KanbanBoardComponent {
    ItemTypes = ItemTypes;

    constructor(public specs: SortableSpecService) { }

    addCard(listId: number, title: string) {
        // this.store.dispatch(new AddCard(listId, title));
    }

    removeCard(ev: DraggedItem<Card>) {
        // this.store.dispatch(new RemoveCard(ev));
    }

}
