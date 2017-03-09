import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DiplomaItemComponent } from './diploma-item.component';

describe('DiplomaItemComponent', () => {
  let component: DiplomaItemComponent;
  let fixture: ComponentFixture<DiplomaItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DiplomaItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiplomaItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
