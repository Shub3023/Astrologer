import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MediaIconPopUpPage } from './media-icon-pop-up.page';

describe('MediaIconPopUpPage', () => {
  let component: MediaIconPopUpPage;
  let fixture: ComponentFixture<MediaIconPopUpPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(MediaIconPopUpPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
