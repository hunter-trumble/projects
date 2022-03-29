import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hw1prob12',
  templateUrl: './hw1prob12.page.html',
  styleUrls: ['./hw1prob12.page.scss'],
})
export class Hw1prob12Page implements OnInit {
  city:string
  upper
  lower
  length 
  character

  constructor() {
    this.city = prompt('please insert city name')
    this.upper=this.city.toUpperCase()
    this.lower=this.city.toLowerCase()
    this.length=this.city.length
    this.character=this.city.charAt(0)
   }

  ngOnInit() {
  }

}
