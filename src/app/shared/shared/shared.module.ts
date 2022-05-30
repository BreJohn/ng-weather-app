import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatOptionModule } from '@angular/material/core';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { HttpClientModule } from '@angular/common/http';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    BrowserAnimationsModule,    
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,

    //MAT MODULES
    MatFormFieldModule,
    MatOptionModule,    
    MatAutocompleteModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule
  ],
  exports: [
    CommonModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,

    //MAT MODULES
    MatFormFieldModule,
    MatOptionModule,    
    MatAutocompleteModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule
  ]
})
export class SharedModule { }
