import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import { HomeComponent } from './home/home.component';
import { Level1Component } from './level1/level1.component';
import { Level2Component } from './level2/level2.component';
import { Level3Component } from './level3/level3.component';
import { AiBoardComponent } from './level3/ai-board/ai-board.component';
import { CellComponent } from './level3/cell/cell.component';
import { Level1Part1Component } from './level1-part1/level1-part1.component';
import { Level1Part2Component } from './level1-part2/level1-part2.component';
import { Level2Part1Component } from './level2-part1/level2-part1.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    Level1Component,
    Level2Component,
    Level3Component,
    AiBoardComponent,
    CellComponent,
    Level1Part1Component,
    Level1Part2Component,
    Level2Part1Component,
    
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule, MatFormFieldModule, MatInputModule, MatSliderModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
