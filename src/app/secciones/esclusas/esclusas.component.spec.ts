import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EsclusasComponent } from './esclusas.component';

describe('EsclusasComponent', () => {
  let component: EsclusasComponent;
  let fixture: ComponentFixture<EsclusasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EsclusasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EsclusasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
