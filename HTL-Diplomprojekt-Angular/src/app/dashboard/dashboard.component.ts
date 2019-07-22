
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

  geschaeftspartner: GP[] = [];

  constructor(private geschaeftspartnerService: GeschaeftspartnerService) { }

  ngOnInit() {
    this.getGP();
  }

  getGP(): void {
    this.geschaeftspartnerService.getGP().subscribe(geschaeftspartner => this.geschaeftspartner = geschaeftspartner);
  }


}
