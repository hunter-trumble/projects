import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-madlib',
  templateUrl: './madlib.page.html',
  styleUrls: ['./madlib.page.scss'],
})
export class MadlibPage implements OnInit {
    story 
  constructor() { }

  ngOnInit() {
    let container = prompt('Please enter a container')
    let adjective = prompt('Please enter a adjective')
    let adjective2 = prompt('Please enter a adjective')
    let noun = prompt('Please enter a noun')
    let animal = prompt('Please enter a animal')
    let vegetable = prompt('Please enter a vegetable')
    let vegetable2 = prompt('Please enter a vegetable')
    let color = prompt('Please enter a color')
    let adjective3 = prompt('Please enter a adjective')
      this.story = `Make sure your lunch ${container} is filled with ntritious ${adjective} food. Do not go to the ${adjective2} food stand across the street from school. The hambutgers they serve are fried in ${noun} and are made of ${vegetable} or vegetable it's much healthier! Drink ${color} milk instead of ${adjective3} colas.`
  }

}
