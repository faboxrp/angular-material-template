import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { ThemeService, Theme } from '../../services/theme.service';

@Component({
  selector: 'app-theme-toggle',
  template: `
    <button 
      mat-icon-button 
      [matTooltip]="getTooltip()"
      (click)="toggleTheme()"
      class="theme-toggle">
      <mat-icon>{{ getIcon() }}</mat-icon>
    </button>
  `,
  styleUrls: ['./theme-toggle.component.css'],
  imports: [MatButtonModule, MatIconModule, MatTooltipModule]
})
export class ThemeToggleComponent {
  private themeService = inject(ThemeService);

  toggleTheme(): void {
    this.themeService.toggle();
  }

  getIcon(): string {
    const theme = this.themeService.theme();
    switch (theme) {
      case 'light':
        return 'light_mode';
      case 'dark':
        return 'dark_mode';
      case 'auto':
        return 'brightness_auto';
      default:
        return 'brightness_auto';
    }
  }

  getTooltip(): string {
    const theme = this.themeService.theme();
    switch (theme) {
      case 'light':
        return 'Modo claro (click para modo oscuro)';
      case 'dark':
        return 'Modo oscuro (click para automático)';
      case 'auto':
        return 'Modo automático (click para modo claro)';
      default:
        return 'Cambiar tema';
    }
  }

  get currentTheme(): Theme {
    return this.themeService.theme();
  }
}