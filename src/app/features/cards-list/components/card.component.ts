import { Component, Input } from "@angular/core";
import { NgClass,  NgIf } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';

const MODULES = [MatIconModule, NgClass, NgIf]

export interface CardItem {
  date: string;
  open: number;
  high: number;
  close: number;
  low: number;
  closeDiff: number;
}

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [...MODULES],
  template: `
    <div *ngIf="item as data" class="card">
      <span>{{ item.date }}</span>
      <section class="grid-price">
        <div>
          <span>Open :</span> <strong>R$ {{ item.open }} </strong>
        </div>

        <div>
          <span>Hight :</span> <strong>R$ {{ item.high  }} </strong>
        </div>

        <div>
          <span>Close :</span> <strong>R$ {{ item.close  }} </strong>
        </div>

        <div>
          <span>Low :</span> <strong>R$ {{ item.low  }} </strong>
        </div>

        <div>
          <span>close diff (%):</span>
          <strong
            [ngClass]="{
              'positive': +item.closeDiff > 0,
              'negative': +item.closeDiff <= 0
            }"
          >
            {{ item.closeDiff }}% <mat-icon>{{ +item.closeDiff > 0 ? 'keyboard_arrow_up' : 'keyboard_arrow_down' }}</mat-icon>
          </strong>
        </div>
      </section>
    </div>
  `,
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  @Input() item!: CardItem
}
