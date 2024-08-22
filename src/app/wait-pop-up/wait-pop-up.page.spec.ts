import { ComponentFixture, TestBed } from '@angular/core/testing';
import { WaitPopUpPage } from './wait-pop-up.page';

describe('WaitPopUpPage', () => {
  let component: WaitPopUpPage;
  let fixture: ComponentFixture<WaitPopUpPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(WaitPopUpPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
