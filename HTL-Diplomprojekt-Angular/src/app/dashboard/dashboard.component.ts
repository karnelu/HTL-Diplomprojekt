
import { Component, OnInit, Input, Output, ViewEncapsulation, ChangeDetectionStrategy } from '@angular/core';
import { GeschaeftspartnerService } from '../geschaeftspartner.service';
import { animate, transition, trigger, keyframes } from '@angular/animations';
import { GP } from '../GP';
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

<<<<<<< HEAD
  geschaeftspartner: GP[] = [];

  constructor(private geschaeftspartnerService: GeschaeftspartnerService) { }
=======
  items = Array.from({length: 20}).map((_, i) => `Item #${i}`);


  clicked(){
    console.log('I have been clicked');
  }
>>>>>>> c8797ab59b252d7f43119fa80b263c203e63a93e

  ngOnInit() {
    this.getGP();
  }

<<<<<<< HEAD
  getGP(): void {
    this.geschaeftspartnerService.getGP().subscribe(geschaeftspartner => this.geschaeftspartner = geschaeftspartner);
  }


=======
>>>>>>> c8797ab59b252d7f43119fa80b263c203e63a93e
}
