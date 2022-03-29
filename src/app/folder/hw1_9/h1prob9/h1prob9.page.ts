import { Component, OnInit } from '@angular/core';
import { $ } from 'protractor';

@Component({
  selector: 'app-h1prob9',
  templateUrl: './h1prob9.page.html',
  styleUrls: ['./h1prob9.page.scss'],
})
export class H1prob9Page implements OnInit {
mpg
  constructor() { }

  ngOnInit() {
    let gallons = Number(prompt('please insert gallons used '))
    let miles = Number(prompt('please insert miles driven'))
    this.mpg = (miles)/(gallons)
  }
 
}
