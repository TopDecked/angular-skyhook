import { UtilityModule } from 'app/utility.module';

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SkyhookDndModule } from '@topdecked/angular-skyhook-core';

import { BoardSquareComponent } from './board-square.component';
import { BoardComponent } from './board.component';
import { ContainerComponent } from './container.component';
import { GameService } from './game.service';
import { KnightComponent } from './knight.component';
import { SquareComponent } from './square.component';

@NgModule({
    declarations: [
        KnightComponent, SquareComponent, BoardComponent, ContainerComponent, BoardSquareComponent
    ],
    imports: [
        CommonModule,
        SkyhookDndModule,
        RouterModule.forChild([{ path: '', component: ContainerComponent }]),
        UtilityModule,
    ],
    providers: [
        GameService
    ]
})
export class ChessboardModule { }
