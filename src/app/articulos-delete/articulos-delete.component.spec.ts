import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticulosDeleteComponent } from './articulos-delete.component';

describe('ArticulosDeleteComponent', () => {
  let component: ArticulosDeleteComponent;
  let fixture: ComponentFixture<ArticulosDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArticulosDeleteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticulosDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
