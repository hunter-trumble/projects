import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hw1-prob10',
  templateUrl: './hw1-prob10.page.html',
  styleUrls: ['./hw1-prob10.page.scss'],
})
export class Hw1Prob10Page implements OnInit {
  average 
  constructor() { }

  ngOnInit() {
    let score = Number(prompt('please insert test score one'))
    let score2 = Number(prompt('please insert test score two'))
    let score3 = Number(prompt('please insert test score three'))
  
  this.average = ((score + score2 + score3) / 3)
  }

}
