import { filter, map } from 'rxjs/operators';

import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';
import { SkyhookDndService } from '@topdecked/angular-skyhook-core';

import { snapToGrid } from './snapToGrid';

interface Offset { x: number, y: number };

@Component({
  selector: 'app-custom-drag-layer',
  template: `
  <ng-container *ngIf="(collect$|async) as c">
    <div *ngIf="c.isDragging" [ngStyle]="forStyle$|async">
      <ng-container [ngSwitch]="(c.itemType)">

        <ng-container *ngSwitchCase="'BOX'">
          <app-box-drag-preview [title]="c.item.title"></app-box-drag-preview>
        </ng-container>

      </ng-container>
    </div>
  </ng-container>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
  styles: [`
    :host {
      display: block;
      position: fixed;
      pointer-events: none;
      z-index: 100;
      left: 0;
      top: 0;
      width: 100%; height: 100%;
    }
    `]
})
export class CustomDragLayerComponent implements OnInit, OnDestroy {

  dragLayer = this.dnd.dragLayer();

  collect$ = this.dragLayer.listen(monitor => ({
    item: monitor.getItem(),
    itemType: monitor.getItemType(),
    isDragging: monitor.isDragging(),
    initialOffset: monitor.getInitialSourceClientOffset(),
    currentOffset: monitor.getSourceClientOffset(),
  }));

  forStyle$ = this.collect$.pipe(
    filter(x => x.isDragging),
    map(x => this.getItemStyles(x)),
  );

  constructor(private dnd: SkyhookDndService) { }

  ngOnInit() {
  }

  ngOnDestroy() {
    this.dragLayer.unsubscribe();
  }

  snapToGrid = false;

  getItemStyles({ initialOffset, currentOffset }) {
    if (!initialOffset || !currentOffset) {
      return {
        display: 'none',
      };
    }

    let { x, y } = currentOffset;

    if (this.snapToGrid) {
      x -= initialOffset.x;
      y -= initialOffset.y;
      [x, y] = snapToGrid(x, y);
      x += initialOffset.x;
      y += initialOffset.y;
    }

    const transform = `translate(${x}px, ${y}px)`;
    return {
      transform,
      WebkitTransform: transform,
    };
  }

}
