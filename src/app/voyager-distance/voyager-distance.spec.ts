import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VoyagerDistance } from './voyager-distance';

describe('VoyagerDistance', () => {
  let component: VoyagerDistance;
  let fixture: ComponentFixture<VoyagerDistance>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VoyagerDistance],
    }).compileComponents();

    fixture = TestBed.createComponent(VoyagerDistance);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
