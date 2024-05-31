import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit {

  level3Attempts: number = 0;
  level3time: number = 0;
  level2Attempts: number = 0;
  level2time: number = 0;
  level1part1Attempts: number = 0;
  level1part1time: number = 0;
  level1Attempts: number = 0;
  level1time: number = 0;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.level1Attempts = +params['level1Attempts'] || 0;
      this.level1time = +params['level1time'] || 0;
      this.level1part1Attempts = +params['level1part1Attempts'] || 0;
      this.level1part1time = +params['level1part1time'] || 0;
      this.level2Attempts = +params['level2Attempts'] || 0;
      this.level2time = +params['level2time'] || 0;
      this.level3Attempts = +params['level3Attempts'] || 0;
      this.level3time = +params['level3time'] || 0;
    });
  }

  get L1Attempts(): number {
    return this.level1Attempts + this.level1part1Attempts;
  }

  get L1time(): number {
    return this.level1time + this.level1part1time;
  }

  get totalAttempts(): number {
    return this.L1Attempts + this.level2Attempts + this.level3Attempts;
  }

  get totalTime(): number {
    return this.L1time + this.level2time + this.level3time;
  }
}
