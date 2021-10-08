import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PruebacComponent } from './pruebac.component';

describe('PruebacComponent', () => {
  let component: PruebacComponent;
  let fixture: ComponentFixture<PruebacComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PruebacComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PruebacComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
