import { ChangeDetectionStrategy, Component, computed, effect, Injectable } from "@angular/core";
import { NgIf, NgFor } from '@angular/common';

import { ExchangeApiService } from "../../../../services/getCurrentExchangeRate";
import { ExchangeDailyApiService } from "../../../../services/getDailyExchangeRate";

import { ButtonComponent } from "../../../../components/Button/button.components";
import { CardComponent } from "../../components/card.component";
import { MatDividerModule } from '@angular/material/divider';

import { formatDate } from "../../../../utils/formatDate";

const MODULES = [ MatDividerModule, NgIf, NgFor ]
const COMPONENTS = [ ButtonComponent, CardComponent ]
@Injectable({
  providedIn: 'root',
})
@Component({
  selector: 'app-card-list',
  imports: [...COMPONENTS, MODULES],
  template: `
    <section>
      <mat-divider *ngIf="exchangeRate()?.exchangeRate" class="header-divider"></mat-divider>

      <div *ngIf="exchangeRate()?.exchangeRate" class="exchange-rate">
        <div>
          <h2>Exchange rate now</h2>
          <p>{{ exchangeRate()?.updatedate }}</p>
        </div>
        <span>{{ exchangeRate()?.toSymbol }}/BRL</span>
      </div>

      <div *ngIf="exchangeRate()?.exchangeRate" class="price">
        <p>R$ {{ exchangeRate()?.exchangeRate }}</p>
      </div>

      <div *ngIf="exchangeRate()?.exchangeRate">
        <app-button
          label="LAST 30 DAYS"
          [icon]="showCards ? 'remove' : 'add'"
          variant="icon"
          (click)="toggleDailyExchange()"
          [disabled]="false"
        >
        </app-button>

        <div *ngIf="showCards" class="cards-container">
          <app-card *ngFor="let item of dailyData()" [item]="item"></app-card>
        </div>

        <mat-divider class="resume-divider"></mat-divider>
      </div>
    </section>
  `,
  styleUrl: './card-list.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardListComponent {
  showCards = false

  exchangeRate = computed(() => this.current.data());

  dailyData = computed(() => {
    const data = this.daily.data();
    if (!data || !data.data) return [];

    const dailyArray = data.data;

    return dailyArray.map((item: any, index: number) => {
      const previous = dailyArray[index - 1];
      const close = item.close;

      const closeDiff = previous
        ? ((close - previous.close) / previous.close) * 100
        : 0;

      return {
        date: formatDate(item.date, false),
        open: item.open.toFixed(2),
        high: item.high.toFixed(2),
        close: item.close.toFixed(2),
        low: item.low.toFixed(2),
        closeDiff: Number(closeDiff.toFixed(2))
      };
    });
  });

  constructor(
    public current: ExchangeApiService,
    public daily: ExchangeDailyApiService
  ) {
    this.exchangeRate = computed(() => {
      const rate = this.current.data();

      if (!rate) return;

      return {
        updatedate: formatDate(rate.lastUpdatedAt, true),
        exchangeRate: rate?.exchangeRate?.toFixed(2),
        toSymbol: rate?.toSymbol?.toUpperCase(),
      };
    });

    effect(() => {
      const rate = this.exchangeRate();
      if (rate) {
        this.resetDailyData();
      }
    });
  }

  fetchDailyExchangeRate() {
    const toSymbol = this.exchangeRate()?.toSymbol;
    if (toSymbol) {
      this.daily.fetchDailyExchangeRate(toSymbol)
      this.showCards = true
    }
  }

  resetDailyData() {
    this.daily.reset();
  }

  toggleDailyExchange() {
    this.showCards = !this.showCards;
    if(this.showCards) {
      this.fetchDailyExchangeRate();
    }
  }
}
