import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DuserComponent } from './duser.component';

describe('DuserComponent', () => {
  let component: DuserComponent;
  let fixture: ComponentFixture<DuserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DuserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DuserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
