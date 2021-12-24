import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MesPlaylistsComponent } from './mes-playlists.component';

describe('MesPlaylistsComponent', () => {
  let component: MesPlaylistsComponent;
  let fixture: ComponentFixture<MesPlaylistsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MesPlaylistsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MesPlaylistsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
