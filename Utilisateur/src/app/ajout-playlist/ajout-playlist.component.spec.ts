import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjoutPlaylistComponent } from './ajout-playlist.component';

describe('AjoutPlaylistComponent', () => {
  let component: AjoutPlaylistComponent;
  let fixture: ComponentFixture<AjoutPlaylistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjoutPlaylistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AjoutPlaylistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
