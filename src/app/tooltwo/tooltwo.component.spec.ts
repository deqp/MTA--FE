import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TooltwoComponent } from './tooltwo.component';

describe('TooltwoComponent', () => {
  let component: TooltwoComponent;
  let fixture: ComponentFixture<TooltwoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TooltwoComponent]
    });
    fixture = TestBed.createComponent(TooltwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
