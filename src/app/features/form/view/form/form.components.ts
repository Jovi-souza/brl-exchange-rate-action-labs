import { ChangeDetectionStrategy, Component } from "@angular/core";
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from "@angular/forms";

import { ButtonComponent } from "../../../../components/Button/button.components";

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

import { ExchangeApiService } from "../../../../services/getCurrentExchangeRate";

const MODULES = [MatFormFieldModule, MatInputModule, ReactiveFormsModule]
const COMPONENTS = [ButtonComponent]

@Component({
  selector: 'app-form',
  imports: [...MODULES, ...COMPONENTS],
  template: `
    <form [formGroup]="form" (ngSubmit)="handleExchange()" class="form-container">
      <mat-form-field appearance="fill">
        <mat-label>Enter the currency code</mat-label>
        <input
          matInput
          placeholder="currency"
          formControlName="currencyCode"
        />
      </mat-form-field>

      <app-button
        label="Exchange result"
        variant="text"
        [disabled]="form.get('currencyCode')?.invalid || form.get('currencyCode')?.value === ''"
        (click)="handleExchange()"
      ></app-button>
    </form>
  `,
  styleUrl: './form.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormComponent {
  form: FormGroup;

  constructor(
    private fb: FormBuilder,
    public api: ExchangeApiService
  ) {
    this.form = this.fb.group({
      currencyCode: ['', Validators.required],
    });
  }

  handleExchange() {
    const currency = this.form.get('currencyCode')?.value.trim().toUpperCase();
    if (!currency) return;

    this.api.fetchExchangeRate(currency)
    .catch(err => {
       console.log("🚀 ~ handleExchange ~ err:", err)
    });
  }
}
