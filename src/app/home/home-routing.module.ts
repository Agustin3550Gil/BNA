import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';
import { Part1Component } from '../Stepper/part1/part1.component';
import { Part2Component } from '../Stepper/part2/part2.component';
import { Part3Component } from '../Stepper/part3/part3.component';

const routes: Routes = [
  {
    path: '',
    component: HomePage,
  },
  {
    path: 'part1',
    component: Part1Component,
  },
  // {
  //   path: 'part2',
  //   component: Part2Component,
  // },
  // {
  //   path: 'part3',
  //   component: Part3Component,
  // },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule {}
