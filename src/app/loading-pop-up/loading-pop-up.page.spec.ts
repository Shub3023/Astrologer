import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LoadingPopUpPage } from './loading-pop-up.page';

describe('LoadingPopUpPage', () => {
  let component: LoadingPopUpPage;
  let fixture: ComponentFixture<LoadingPopUpPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(LoadingPopUpPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
