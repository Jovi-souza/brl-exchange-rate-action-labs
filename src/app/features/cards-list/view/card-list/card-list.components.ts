import { ChangeDetectionStrategy, Component } from "@angular/core";
import { MatDividerModule } from '@angular/material/divider';
import { ButtonComponent } from "../../../../components/Button/button.components";

const MODULES = [ MatDividerModule ]
const COMPONENTS = [ ButtonComponent ]

@Component({
  selector: 'app-card-list',
  imports: [...COMPONENTS, MODULES],
  template: `
    <section>
      <mat-divider class="header-divider"></mat-divider>

      <div class="exchange-rate">
        <div>
          <h2>Exchange rate now</h2>
          <p>09/03/2022 - 15h09</p>
        </div>
        <span>USD/BRL</span>
      </div>

      <div class="price">
        <p>R$ 5,00</p>
      </div>

      <div>
        <app-button
          label="LAST 30 DAYS"
          icon="add"
          variant="icon">
        </app-button>
        <!-- icones: "add e remove" -->


        <div class="cards-container">
          <div class="card">
            <span>09/03/2022</span>
            <section class="grid-price">
              <div>
                <span>Open :</span> <strong class="">R$ 5.0666</strong>
              </div>

              <div>
                <span>Hight :</span> <strong class="">R$ 5.0666</strong>
              </div>

              <div>
                <span>Close :</span> <strong class="">R$ 5.0666</strong>
              </div>

              <div>
                <span>Low :</span> <strong class="">R$ 5.0666</strong>
              </div>

              <div>
                <span>close diff (%):</span>
                <strong>-1.15%</strong>
              </div>
            </section>
          </div>

          <div class="card">
            <span>09/03/2022</span>
            <section class="grid-price">
              <div>
                <span>Open :</span> <strong class="">R$ 5.0666</strong>
              </div>

              <div>
                <span>Hight :</span> <strong class="">R$ 5.0666</strong>
              </div>

              <div>
                <span>Close :</span> <strong class="">R$ 5.0666</strong>
              </div>

              <div>
                <span>Low :</span> <strong class="">R$ 5.0666</strong>
              </div>

              <div>
                <span>close diff (%):</span>
                <strong>-1.15%</strong>
              </div>
            </section>
          </div>

          <div class="card">
            <span>09/03/2022</span>
            <section class="grid-price">
              <div>
                <span>Open :</span> <strong class="">R$ 5.0666</strong>
              </div>

              <div>
                <span>Hight :</span> <strong class="">R$ 5.0666</strong>
              </div>

              <div>
                <span>Close :</span> <strong class="">R$ 5.0666</strong>
              </div>

              <div>
                <span>Low :</span> <strong class="">R$ 5.0666</strong>
              </div>

              <div>
                <span>close diff (%):</span>
                <strong>-1.15%</strong>
              </div>
            </section>
          </div>
        </div>

        <mat-divider class="resume-divider"></mat-divider>
      </div>
    </section>
  `,
  styleUrl: './card-list.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardListComponent {}
