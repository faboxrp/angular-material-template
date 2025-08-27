import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ComponentDragNdropComponent } from './component-drag-ndrop.component';

describe('ComponentDragNdropComponent', () => {
  let component: ComponentDragNdropComponent;
  let fixture: ComponentFixture<ComponentDragNdropComponent>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponentDragNdropComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
