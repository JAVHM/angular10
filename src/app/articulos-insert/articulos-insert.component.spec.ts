import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticulosInsertComponent } from './articulos-insert.component';

describe('ArticulosInsertComponent', () => {
  let component: ArticulosInsertComponent;
  let fixture: ComponentFixture<ArticulosInsertComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArticulosInsertComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticulosInsertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
