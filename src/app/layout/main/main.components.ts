import { ChangeDetectionStrategy, Component } from "@angular/core";
import { FormComponent } from "../../features/form/view/form/form.components";
import { CardListComponent } from "../../features/cards-list/view/card-list/card-list.components";

const COMPONENTS = [ FormComponent, CardListComponent ]

@Component({
  selector: 'app-main',
  imports: [...COMPONENTS, ],
  template: `
    <div class="container">
      <app-form />

      <app-card-list />
    </div>
  `,
  styleUrl: './main.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MainComponent {}
