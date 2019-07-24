import { Observable , of} from 'rxjs';
import { Injectable } from '@angular/core';
import { BUSINESSPARTNERS } from './mock-business-partners';
import { BusinessPartner } from './business-partner';

@Injectable({
  providedIn: 'root'
})
export class BusinessPartnerService {

  constructor() { }

  getBusinessPartners(): Observable<BusinessPartner[]> {
    return of(BUSINESSPARTNERS);
  }

  getBusinessPartner(id: number): Observable<BusinessPartner> {
    return of(BUSINESSPARTNERS.find(businessPartner => businessPartner.id === id));
  }
}
