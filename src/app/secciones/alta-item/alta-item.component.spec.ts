import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AltaItemComponent } from './alta-item.component';

describe('AltaItemComponent', () => {
  let component: AltaItemComponent;
  let fixture: ComponentFixture<AltaItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AltaItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AltaItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
