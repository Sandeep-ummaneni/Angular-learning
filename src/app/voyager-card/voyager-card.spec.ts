import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VoyagerCard } from './voyager-card';

describe('VoyagerCard', () => {
  let component: VoyagerCard;
  let fixture: ComponentFixture<VoyagerCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VoyagerCard],
    }).compileComponents();

    fixture = TestBed.createComponent(VoyagerCard);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
