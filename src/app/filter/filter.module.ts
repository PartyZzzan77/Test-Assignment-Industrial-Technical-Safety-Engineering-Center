import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GenreSelectComponent } from 'src/app/filter/components/genre-select/genre-select.component';
import { SearchComponent } from 'src/app/filter/components/search/search.component';
import { FilterListComponent } from 'src/app/filter/components/filter-list/filter-list.component';
import { AngularMaterialModule } from '../angular-material/angular-material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [GenreSelectComponent, SearchComponent, FilterListComponent],
  imports: [
    CommonModule,
    AngularMaterialModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  exports: [FilterListComponent],
})
export class FilterModule {}
