import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-qr-scanner',
  templateUrl: './qr-scanner.component.html',
  styleUrls: ['./qr-scanner.component.css']
})
export class QrScannerComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  scanSuccessHandler(string: String){
    console.log(string);
    this.router.navigateByUrl(''+string);
  }

}
