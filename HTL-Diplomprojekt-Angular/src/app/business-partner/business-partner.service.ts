import { HttpClient } from '@angular/common/http';
import { Observable , of} from 'rxjs';
import { Injectable } from '@angular/core';
import { BUSINESSPARTNERS } from './mock-business-partners';
import { BusinessPartner } from './business-partner';


@Injectable({
  providedIn: 'root'
})
export class BusinessPartnerService {

  constructor(private http: HttpClient) { }

  getBusinessPartners(): Observable<BusinessPartner[]> {
    return of(BUSINESSPARTNERS);
  }

  getBusinessPartner(id: number): Observable<BusinessPartner> {
    return of(BUSINESSPARTNERS.find(businessPartner => businessPartner.id === id));
  }

  onUpload(selectedFile: File) {
    const formData = new FormData();
    formData.append('image', selectedFile, selectedFile.name);
    this.http.post('http://localhost:8080/business-partner/id/upload', formData).subscribe(res => {
      console.log(res);
    });
  }
}
