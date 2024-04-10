import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Level2Part1Component } from './level2-part1.component';

describe('Level2Part1Component', () => {
  let component: Level2Part1Component;
  let fixture: ComponentFixture<Level2Part1Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Level2Part1Component]
    });
    fixture = TestBed.createComponent(Level2Part1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
