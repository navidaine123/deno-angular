import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatchPasswordDirective } from './directives/match-password.directive';



@NgModule({
  declarations: [MatchPasswordDirective],
  imports: [
    CommonModule
  ],
  exports: [MatchPasswordDirective]
})
export class SharedModule { }
