import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PesoADolarComponent } from './PesoADolar.component';

describe('DolaresComponent', () => {
  let component: PesoADolarComponent;
  let fixture: ComponentFixture<PesoADolarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PesoADolarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PesoADolarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
