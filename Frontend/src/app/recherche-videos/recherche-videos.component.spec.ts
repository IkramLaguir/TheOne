import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RechercheVideosComponent } from './recherche-videos.component';

describe('RechercheVideosComponent', () => {
  let component: RechercheVideosComponent;
  let fixture: ComponentFixture<RechercheVideosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RechercheVideosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RechercheVideosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
