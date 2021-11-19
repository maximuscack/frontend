import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalidadBuscarComponent } from './modalidad-buscar.component';

describe('ModalidadBuscarComponent', () => {
  let component: ModalidadBuscarComponent;
  let fixture: ComponentFixture<ModalidadBuscarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalidadBuscarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalidadBuscarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
