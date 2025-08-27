import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentNavigationComponent } from './component-navigation.component';

describe('ComponentNavigationComponent', () => {
  let component: ComponentNavigationComponent;
  let fixture: ComponentFixture<ComponentNavigationComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ComponentNavigationComponent],
      imports: [
        MatButtonModule,
        MatIconModule,
        MatListModule,
        MatSidenavModule,
        MatToolbarModule,
      ]
    });
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponentNavigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
