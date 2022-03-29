import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Inbox', url: '/folder/Inbox', icon: 'mail' },
    { title: "madlib", url: '/folder/madlib/madlib', icon:'newspaper'},
    { title: "test Average Hw1_10", url: '/folder/hw1_10/hw1-prob10', icon:'paper'},
    { title: "mpg hw1_9", url: '/folder/hw1_9/h1prob9', icon:'paper'},
    { title: "city hw1_12", url: '/folder/hw1_12/hw1prob12', icon:'paper'}
  ];
  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  constructor() {}
}
