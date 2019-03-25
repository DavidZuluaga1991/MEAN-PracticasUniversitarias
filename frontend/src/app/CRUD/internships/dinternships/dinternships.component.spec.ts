import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DinternshipsComponent } from './dinternships.component';

describe('DinternshipsComponent', () => {
  let component: DinternshipsComponent;
  let fixture: ComponentFixture<DinternshipsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DinternshipsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DinternshipsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
