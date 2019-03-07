import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomPipe } from '../pipes/custom.pipe';
import { FilterPipe } from '../pipes/filter.pipe';
import { DropdownDirective } from '../directives/dropdown.directive';

@NgModule({
  declarations: [DropdownDirective, CustomPipe, FilterPipe],
  exports: [DropdownDirective, CustomPipe, FilterPipe],
  imports: [CommonModule]
})
export class SharedModule {}
