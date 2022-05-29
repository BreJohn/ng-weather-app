import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatOptionModule } from '@angular/material/core';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { HttpClientModule } from '@angular/common/http';

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
    MatInputModule
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
    MatInputModule
  ]
})
export class SharedModule { }
