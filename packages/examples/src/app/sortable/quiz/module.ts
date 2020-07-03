import { UtilityModule } from 'app/utility.module';

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { SkyhookDndModule } from '@topdecked/angular-skyhook-core';
import { SkyhookMultiBackendModule } from '@topdecked/angular-skyhook-multi-backend';
import { SkyhookSortableModule } from '@topdecked/angular-skyhook-sortable';

import { ContainerComponent } from './container.component';
import { ListComponent } from './list.component';
import { MathFormComponent } from './math-form.component';
import { PrintoutComponent } from './printout.component';
import { SectionComponent } from './section.component';

@NgModule({
    declarations: [
        ContainerComponent,
        ListComponent,
        MathFormComponent,
        PrintoutComponent,
        SectionComponent,
    ],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        UtilityModule,
        SkyhookDndModule,
        SkyhookMultiBackendModule,
        SkyhookSortableModule,
        RouterModule.forChild([
            { path: "", component: ContainerComponent }
        ])
    ]
})
export class QuizModule { }
