import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LevelDataService {
  private _level1Attempts: number = 0;
  private _level1Time: number = 0;
  private _level1part1Attempts: number = 0;
  private _level1part1Time: number = 0;
  private _level2Attempts: number = 0;
  private _level2Time: number = 0;
  private _level3Attempts: number = 0;
  private _level3Time: number = 0;
  

  set level1Attempts(attempts: number) {
    this._level1Attempts = attempts;
  }

  get level1Attempts(): number {
    return this._level1Attempts;
  }

  set level1Time(time: number) {
    this._level1Time = time;
  }

  get level1Time(): number {
    return this._level1Time;
  }





  set level1part1Attempts(attempts: number) {
    this._level1part1Attempts = attempts;
  }

  get level1part1Attempts(): number {
    return this._level1part1Attempts;
  }

  set level1part1Time(time: number) {
    this._level1part1Time = time;
  }

  get level1part1Time(): number {
    return this._level1part1Time;
  }





  set level2Attempts(attempts: number) {
    this._level2Attempts = attempts;
  }

  get level2Attempts(): number {
    return this._level2Attempts;
  }

  set level2Time(time: number) {
    this._level2Time = time;
  }

  get level2Time(): number {
    return this._level2Time;
  }






  set level3Attempts(attempts: number) {
    this._level3Attempts = attempts;
  }

  get level3Attempts(): number {
    return this._level3Attempts;
  }

  set level3Time(time: number) {
    this._level3Time = time;
  }

  get level3Time(): number {
    return this._level3Time;
  }

  




}