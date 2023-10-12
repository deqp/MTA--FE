import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToolOneComponent } from './tool-one.component';

describe('ToolOneComponent', () => {
  let component: ToolOneComponent;
  let fixture: ComponentFixture<ToolOneComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ToolOneComponent]
    });
    fixture = TestBed.createComponent(ToolOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
