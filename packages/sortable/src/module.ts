import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SkyhookDndModule } from '@topdecked/angular-skyhook-core';

import { SkyhookSortableExternal } from './directives/external.directive';
import { SkyhookSortableList } from './directives/list.component';
import { SkyhookSortableRenderer } from './directives/render.directive';
import { SkyhookSortable } from './directives/sortable.directive';
import { SkyhookSortableTemplate } from './directives/template.directive';

/** @ignore */
const EXPORTS = [
    SkyhookSortable,
    SkyhookSortableList,
    SkyhookSortableTemplate,
    SkyhookSortableRenderer,
    SkyhookSortableExternal,
];

@NgModule({
    declarations: EXPORTS,
    exports: EXPORTS,
    imports: [CommonModule, SkyhookDndModule]
})
export class SkyhookSortableModule {}
