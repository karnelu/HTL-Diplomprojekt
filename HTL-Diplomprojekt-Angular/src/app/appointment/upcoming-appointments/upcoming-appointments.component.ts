import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-upcoming-appointments',
  templateUrl: './upcoming-appointments.component.html',
  styleUrls: ['./upcoming-appointments.component.css']
})
export class UpcomingAppointmentsComponent implements OnInit {



  items = Array.from({length: 5}).map((_, i) => `Item #${i}`);

  constructor() { }

  ngOnInit() {
  }

}
