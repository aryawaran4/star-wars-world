import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PeopleDetailsComponent } from './people-details.component';
import { BackgroundStarComponent } from '../../shared/ui/background-star/background-star.component';
import { SpinnerComponent } from '../../shared/ui/spinner/spinner.component';



@NgModule({
  declarations: [
    PeopleDetailsComponent
  ],
  imports: [
    CommonModule,
    BackgroundStarComponent,
    SpinnerComponent
  ]
})
export class PeopleDetailsModule { }
