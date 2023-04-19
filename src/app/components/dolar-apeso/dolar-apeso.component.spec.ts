import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DolarAPesoComponent } from './dolar-apeso.component';

describe('DolarAPesoComponent', () => {
  let component: DolarAPesoComponent;
  let fixture: ComponentFixture<DolarAPesoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DolarAPesoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DolarAPesoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
