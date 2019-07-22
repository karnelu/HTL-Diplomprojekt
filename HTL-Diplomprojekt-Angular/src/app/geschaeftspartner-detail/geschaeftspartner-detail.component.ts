import { GeschaeftspartnerService } from './../geschaeftspartner.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GP } from '../GP';

@Component({
  selector: 'app-geschaeftspartner-detail',
  templateUrl: './geschaeftspartner-detail.component.html',
  styleUrls: ['./geschaeftspartner-detail.component.css']
})
export class GeschaeftspartnerDetailComponent implements OnInit {

  gp: GP;

  constructor(
    private route: ActivatedRoute,
    private geschaeftspartnerService: GeschaeftspartnerService
  ) { }

  ngOnInit(): void {
    this.getOneGP();
  }

  getOneGP(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.geschaeftspartnerService.getOneGP(id)
      .subscribe(gp => this.gp = gp);
  }

}
