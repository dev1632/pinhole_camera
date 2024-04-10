import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Level1Part2Component } from './level1-part2.component';

describe('Level1Part2Component', () => {
  let component: Level1Part2Component;
  let fixture: ComponentFixture<Level1Part2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Level1Part2Component]
    });
    fixture = TestBed.createComponent(Level1Part2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
