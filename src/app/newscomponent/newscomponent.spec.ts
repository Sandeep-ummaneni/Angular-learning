import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Newscomponent } from './newscomponent';

describe('Newscomponent', () => {
  let component: Newscomponent;
  let fixture: ComponentFixture<Newscomponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Newscomponent],
    }).compileComponents();

    fixture = TestBed.createComponent(Newscomponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
