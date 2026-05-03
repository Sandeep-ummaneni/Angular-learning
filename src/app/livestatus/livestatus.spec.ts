import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Livestatus } from './livestatus';

describe('Livestatus', () => {
  let component: Livestatus;
  let fixture: ComponentFixture<Livestatus>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Livestatus],
    }).compileComponents();

    fixture = TestBed.createComponent(Livestatus);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
