import { Component } from "@angular/core";
import { MatDividerModule } from '@angular/material/divider';

const MODULES = [MatDividerModule]

@Component({
  selector: 'header-component',
  standalone: true,
  imports: [MODULES],
  template: `
    <header class="container">
      <img src="action-labs.svg" alt="Logo" />

      <mat-divider class="divider"></mat-divider>

      <h1 class="title">BRL Exchange Rate</h1>
    </header>
  `,
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {}
