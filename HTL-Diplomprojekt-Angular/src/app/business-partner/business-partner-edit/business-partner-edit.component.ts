import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BusinessPartnerService } from '../business-partner.service';






@Component({
  selector: 'app-business-partner-edit',
  templateUrl: './business-partner-edit.component.html',
  styleUrls: ['./business-partner-edit.component.css']
})
export class BusinessPartnerEditComponent implements OnInit {



  constructor(private businessPartnerService: BusinessPartnerService) { }

  ngOnInit() {
  }

  onFileSelected(event) {
    this.businessPartnerService.onUpload(<File>event.target.files[0]);
  }


}

