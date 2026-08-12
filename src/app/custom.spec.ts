import { Component } from '@angular/core';
import { TestBed } from '@angular/core/testing';

import { Custom } from './custom';

@Component({
  imports: [Custom],
  template: '<div appCustom>Hover target</div>'
})
class HostComponent {}

describe('Custom', () => {
  it('should create an instance', () => {
    const fixture = TestBed.configureTestingModule({
      imports: [HostComponent]
    }).createComponent(HostComponent);

    fixture.detectChanges();

    expect(fixture.componentInstance).toBeTruthy();
  });
});
