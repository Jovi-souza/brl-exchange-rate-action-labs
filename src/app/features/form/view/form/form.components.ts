import { ChangeDetectionStrategy, Component } from "@angular/core";
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ButtonComponent } from "../../../../components/Button/button.components";

const COMPONENTS = [ MatFormFieldModule, MatInputModule, ButtonComponent ]

@Component({
  selector: 'app-form',
  imports: [...COMPONENTS],
  template: `
    <form class="form-container">
      <mat-form-field [appearance]="'fill'">
        <mat-label>Enter the currency code</mat-label>
        <input matInput placeholder="currency">
      </mat-form-field>

      <app-button
        label="Exchange result"
        variant="text">
      </app-button>
    </form>
  `,
  styleUrl: './form.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormComponent {}
