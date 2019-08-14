import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SellerprodComponent } from './sellerprod.component';

describe('SellerprodComponent', () => {
  let component: SellerprodComponent;
  let fixture: ComponentFixture<SellerprodComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SellerprodComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SellerprodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
