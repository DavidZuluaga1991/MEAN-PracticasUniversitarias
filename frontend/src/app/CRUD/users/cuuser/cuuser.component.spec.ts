import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CuuserComponent } from './cuuser.component';

describe('CuuserComponent', () => {
  let component: CuuserComponent;
  let fixture: ComponentFixture<CuuserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CuuserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CuuserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
