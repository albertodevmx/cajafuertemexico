import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EsclusasItemComponent } from './esclusas-item.component';

describe('EsclusasItemComponent', () => {
  let component: EsclusasItemComponent;
  let fixture: ComponentFixture<EsclusasItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EsclusasItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EsclusasItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
