import { HttpClient, HttpHeaders, HttpEventType } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Injectable } from '@angular/core';
import { BusinessPartner } from './business-partner';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BusinessPartnerService {

  private businessPartnerURL = 'http://localhost:8080/business-partner/';
  private searchBusinessPartnerURL = 'http://localhost:8080/business-partner/search?type=brand&q=';
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) { }

  getBusinessPartners(): Observable<BusinessPartner[]> {
    /*  return of(BUSINESSPARTNERS); */
    return this.http.get<BusinessPartner[]>(this.businessPartnerURL + 'getLastUsed');
  }

  getBusinessPartner(id: number): Observable<BusinessPartner> {
    return this.http.get<BusinessPartner>(this.businessPartnerURL + id + '/detail');
    /* return of(BUSINESSPARTNERS.find(businessPartner => businessPartner.bpID === id)); */

  }

  /** Post: update the vehicle on the server */
  updateBusinessPartner(businessPartner: BusinessPartner): Observable<any> {
    return this.http.post(this.businessPartnerURL + 'update', businessPartner, this.httpOptions).pipe(
      catchError(this.handleError<BusinessPartner[]>('updateBusinessPartner', [])));
  }

  onUpload(selectedFile: File, id: number) {
    const formData = new FormData();
    formData.append('image', selectedFile, selectedFile.name);
    this.http.post(this.businessPartnerURL + `${id}/upload`, formData, {
      reportProgress: true,
      observe: 'events',
    })
      .subscribe(res => {
        console.log(res);

      });

  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      console.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  searchBusinessPartner(query: string): Observable<BusinessPartner[]> {
    if (!query.trim()) {
      // if not search term, return empty vehicles array.
      return of([]);
    }
    return this.http.get<BusinessPartner[]>(this.searchBusinessPartnerURL + query).pipe(
      catchError(this.handleError)
    );
  }


}
