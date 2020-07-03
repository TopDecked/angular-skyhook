import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SkyhookDndModule } from '@topdecked/angular-skyhook-core';

import { UtilityModule } from '../utility.module';
import { Box } from './box.component';
import { Container } from './container.component';
import { Folder } from './folder.component';
import { Target } from './target.component';
import { TreeService } from './tree.service';

@NgModule({
    declarations: [
        Container,
        Target,
        Box,
        Folder
    ],
    imports: [
        CommonModule,
        SkyhookDndModule,
        RouterModule.forChild([{ path: '', component: Container }]),
        UtilityModule
    ],
    providers: [
        TreeService
    ]
})
export class DrilldownModule { }

