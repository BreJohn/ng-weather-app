import { NgModule } from '@angular/core';
import { CitiesSelectComponent } from './components/cities-select/cities-select.component';
import { SharedModule } from 'src/app/shared/shared/shared.module';



@NgModule({
  declarations: [
    CitiesSelectComponent
  ],
  imports: [
    SharedModule
  ],exports: [
    CitiesSelectComponent
  ]
})
export class CitiesModule { }
