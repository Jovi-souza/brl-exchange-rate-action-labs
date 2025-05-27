import { Component, Input } from "@angular/core";
import { NgClass, NgIf } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';

const MODULES = [NgClass, NgIf, MatIconModule]

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [...MODULES],
  template: `
    <button
      type="submit"
      [ngClass]="variant"
      [disabled]="disabled"
      class="app-button"
    >
      {{ label }}

      <mat-icon *ngIf="icon">{{ icon }}</mat-icon>
    </button>
  `,
  styleUrls: ['./button.component.css']
})
export class ButtonComponent {
  @Input() label: string = 'Button';
  @Input() icon?: string;
  @Input() disabled?: boolean;
  @Input() variant: 'text' | 'icon' = 'text';
}
