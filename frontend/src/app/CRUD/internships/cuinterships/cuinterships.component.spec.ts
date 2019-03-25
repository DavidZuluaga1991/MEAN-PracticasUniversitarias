import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CuintershipsComponent } from './cuinterships.component';

describe('CuintershipsComponent', () => {
  let component: CuintershipsComponent;
  let fixture: ComponentFixture<CuintershipsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CuintershipsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CuintershipsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
