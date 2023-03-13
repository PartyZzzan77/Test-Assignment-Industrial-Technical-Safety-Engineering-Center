import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SharedComponent } from 'src/app/shared/components/shared/shared.component';

const routes: Routes = [
  {
    path: '',
    component: SharedComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
