import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedComponent } from './components/shared/shared.component';
import { MainModule } from '../main/main.module';

@NgModule({
  declarations: [SharedComponent],
  imports: [CommonModule, MainModule],
})
export class SharedModule {}
