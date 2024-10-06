import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PeopleDetailsComponent } from './people-details.component';
import { BackgroundStarComponent } from '../../shared/ui/background-star/background-star.component';



@NgModule({
  declarations: [
    PeopleDetailsComponent
  ],
  imports: [
    CommonModule,
    BackgroundStarComponent
  ]
})
export class PeopleDetailsModule { }
