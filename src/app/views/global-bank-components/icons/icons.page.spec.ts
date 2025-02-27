import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IconsPage } from './icons.page';

describe('IconsPage', () => {
  let component: IconsPage;
  let fixture: ComponentFixture<IconsPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(IconsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
