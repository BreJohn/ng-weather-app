import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CitiesModule } from './features/cities/cities.module';
import { SharedModule } from './shared/shared/shared.module';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { cityWeatherReducer } from './core/store/reducers/city-weather.reducer';
import { StoreModule } from '@ngrx/store';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CitiesModule,
    NoopAnimationsModule,
    SharedModule,
    StoreModule.forRoot(cityWeatherReducer),

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
