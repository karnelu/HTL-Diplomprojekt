
import { Component, OnInit, Input, Output, ViewEncapsulation, ChangeDetectionStrategy } from '@angular/core';
import { animate, transition, trigger, keyframes } from '@angular/animations';
/* import {Hero } from './hero';
import { HEROES } from './mock-heroes';
 */
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})



export class DashboardComponent implements OnInit {

  items = Array.from({length: 20}).map((_, i) => `Item #${i}`);


  clicked(){
    console.log('I have been clicked');
  }

  constructor() { }
  ngOnInit() {
  }

}
