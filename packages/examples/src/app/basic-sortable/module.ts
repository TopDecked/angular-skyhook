

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SkyhookDndModule } from '@topdecked/angular-skyhook-core';
import { SkyhookMultiBackendModule } from '@topdecked/angular-skyhook-multi-backend';

import { UtilityModule } from '../utility.module';
import { BasicSortableComponent } from './basic-sortable.component';
import { CardComponent, CardInnerDirective } from './card.component';
import { ContainerComponent } from './container.component';

@NgModule({
  declarations: [
      ContainerComponent,
      CardComponent,
      CardInnerDirective,
      BasicSortableComponent
  ],
  imports: [
    CommonModule,
    SkyhookDndModule,
    SkyhookMultiBackendModule,
    RouterModule.forChild([{ path: '', component: ContainerComponent }]),
    UtilityModule
  ],
})
export class BasicSortableModule { }
