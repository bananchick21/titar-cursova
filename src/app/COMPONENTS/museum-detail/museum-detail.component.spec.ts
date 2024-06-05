import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MuseumDetailComponent } from './museum-detail.component';

describe('NewsDetailComponent', () => {
  let component: MuseumDetailComponent;
  let fixture: ComponentFixture<MuseumDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MuseumDetailComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MuseumDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
