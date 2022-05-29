import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { cities } from 'src/app/shared/data/cities';

@Component({
  selector: 'app-cities-select',
  templateUrl: './cities-select.component.html',
  styleUrls: ['./cities-select.component.scss']
})
export class CitiesSelectComponent implements OnInit {
  cities = [...cities];
  constructor() { }
  citiesSelectControl = new FormControl();
  ngOnInit(): void {
  }

}
