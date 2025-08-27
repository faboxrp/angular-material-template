import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { ComponentNavigationComponent } from './component-navigation/component-navigation.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MatSlideToggleModule, ComponentNavigationComponent],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('angular-material-template');
}
