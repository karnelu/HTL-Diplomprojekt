import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-termine',
  templateUrl: './termine.component.html',
  styleUrls: ['./termine.component.css']
})
export class TermineComponent implements OnInit {
  test = 'left';
  constructor() { }

  ngOnInit() {
  }

  onSwipe() {
    console.log(this.test);
  }

}
