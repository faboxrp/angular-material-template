import { Component, inject } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { AsyncPipe } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { ComponentDashboardComponent } from '../component-dashboard/component-dashboard.component';
import { ComponentTreeComponent } from '../component-tree/component-tree.component';
import { ComponentDragNdropComponent } from '../component-drag-ndrop/component-drag-ndrop.component';
import { ThemeToggleComponent } from '../components/theme-toggle/theme-toggle.component';

@Component({
  selector: 'app-component-navigation',
  templateUrl: './component-navigation.component.html',
  styleUrl: './component-navigation.component.css',
  imports: [
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    AsyncPipe,
    ComponentDashboardComponent,
    ComponentTreeComponent,
    ComponentDragNdropComponent,
    ThemeToggleComponent,
  ],
})
export class ComponentNavigationComponent {
  private breakpointObserver = inject(BreakpointObserver);

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map((result) => result.matches),
    shareReplay()
  );
}
