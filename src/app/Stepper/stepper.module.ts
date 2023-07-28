import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Part1Component } from './part1/part1.component';
import { Part2Component } from './part2/part2.component';
import { Part3Component } from './part3/part3.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    Part1Component,
    Part2Component,
    Part3Component,
  ],
  imports: [
    CommonModule,
    FormsModule,
  ],
  exports: [
    Part1Component,
    Part2Component,
    Part3Component,
  ]
})
export class StepperModule { }
