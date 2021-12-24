import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AfficherPlaylistComponent } from './afficher-playlist.component';

describe('AfficherPlaylistComponent', () => {
  let component: AfficherPlaylistComponent;
  let fixture: ComponentFixture<AfficherPlaylistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AfficherPlaylistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AfficherPlaylistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
