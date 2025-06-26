import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { JobBoardComponent } from './job-board.component';

@NgModule({
  imports: [
    JobBoardComponent,
    RouterModule.forChild([
      { path: '', component: JobBoardComponent }
    ])
  ]
})
export class JobBoardModule {} 