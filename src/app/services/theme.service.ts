import { Injectable, signal, effect } from '@angular/core';

export type Theme = 'light' | 'dark' | 'auto';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private readonly storageKey = 'app-theme';
  
  // Signal para el tema actual
  public readonly theme = signal<Theme>(this.getInitialTheme());

  constructor() {
    // Efecto que se ejecuta cuando cambia el tema
    effect(() => {
      const currentTheme = this.theme();
      this.applyTheme(currentTheme);
      this.saveTheme(currentTheme);
    });
  }

  /**
   * Cambia el tema de la aplicación
   */
  setTheme(theme: Theme): void {
    this.theme.set(theme);
  }

  /**
   * Obtiene el tema inicial desde localStorage o usa el del sistema
   */
  private getInitialTheme(): Theme {
    if (typeof window === 'undefined') {
      return 'light';
    }

    const stored = localStorage.getItem(this.storageKey) as Theme;
    if (stored && ['light', 'dark', 'auto'].includes(stored)) {
      return stored;
    }

    return 'auto';
  }

  /**
   * Aplica el tema al document
   */
  private applyTheme(theme: Theme): void {
    if (typeof document === 'undefined') {
      return;
    }

    const body = document.body;
    
    // Remover clases de tema existentes
    body.classList.remove('light-theme', 'dark-theme');
    
    if (theme === 'light') {
      body.style.colorScheme = 'light';
      body.classList.add('light-theme');
    } else if (theme === 'dark') {
      body.style.colorScheme = 'dark';
      body.classList.add('dark-theme');
    } else {
      // auto - usa las preferencias del sistema
      body.style.colorScheme = 'light dark';
      
      // Detectar preferencia del sistema
      if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        body.classList.add('dark-theme');
      } else {
        body.classList.add('light-theme');
      }
    }
  }

  /**
   * Guarda el tema en localStorage
   */
  private saveTheme(theme: Theme): void {
    if (typeof localStorage === 'undefined') {
      return;
    }
    localStorage.setItem(this.storageKey, theme);
  }

  /**
   * Obtiene si el tema actual es oscuro
   */
  isDark(): boolean {
    const currentTheme = this.theme();
    
    if (currentTheme === 'dark') {
      return true;
    }
    
    if (currentTheme === 'auto' && typeof window !== 'undefined') {
      return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
    
    return false;
  }

  /**
   * Alterna entre modo claro y oscuro
   */
  toggle(): void {
    const current = this.theme();
    if (current === 'light') {
      this.setTheme('dark');
    } else if (current === 'dark') {
      this.setTheme('auto');
    } else {
      this.setTheme('light');
    }
  }
}