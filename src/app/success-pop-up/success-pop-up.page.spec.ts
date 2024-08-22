import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SuccessPopUpPage } from './success-pop-up.page';

describe('SuccessPopUpPage', () => {
  let component: SuccessPopUpPage;
  let fixture: ComponentFixture<SuccessPopUpPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(SuccessPopUpPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
