import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Level1Part1Component } from './level1-part1.component';

describe('Level1Part1Component', () => {
  let component: Level1Part1Component;
  let fixture: ComponentFixture<Level1Part1Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Level1Part1Component]
    });
    fixture = TestBed.createComponent(Level1Part1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
