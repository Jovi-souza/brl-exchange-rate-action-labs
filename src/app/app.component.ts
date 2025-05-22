import { Component } from '@angular/core';
import { MainComponent } from './layout/main/main.components';
import { HeaderComponent } from "./components/Header/header.components";

const COMPONENTS = [ MainComponent, HeaderComponent ];

@Component({
  selector: 'app-root',
  imports: [...COMPONENTS],
  template: `
    <div class="container">
      <header-component />

      <app-main />
    </div>
  `,
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'brl-exchange-rate-action-labs';
}
