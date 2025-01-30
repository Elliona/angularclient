import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeriesDeleteComponent } from './series-delete.component';

describe('SeriesDeleteComponent', () => {
  let component: SeriesDeleteComponent;
  let fixture: ComponentFixture<SeriesDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SeriesDeleteComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SeriesDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
