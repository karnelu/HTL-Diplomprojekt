import { HttpClient } from '@angular/common/http';
import { Observable , of} from 'rxjs';
import { Injectable } from '@angular/core';
import { BUSINESSPARTNERS } from './mock-business-partners';
import { BusinessPartner } from './business-partner';


@Injectable({
  providedIn: 'root'
})
export class BusinessPartnerService {

  baseURL = 'http://localhost:8080/business-partner/'

  constructor(private http: HttpClient) { }

  getBusinessPartners(): Observable<BusinessPartner[]> {
    return this.http.get<BusinessPartner[]>(this.baseURL + 'getLastUsed');
  }

  getBusinessPartner(id: number): Observable<BusinessPartner> {
    return this.http.get<BusinessPartner>(this.baseURL + ':id/detail')
  }

  onUpload(selectedFile: File) {
    const formData = new FormData();
    formData.append('image', selectedFile, selectedFile.name);
    this.http.post(this.baseURL + 'id/upload', formData).subscribe(res => {
      console.log(res);
    });
  }
}
