import { HttpClient, HttpHeaders, HttpEventType } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Injectable } from '@angular/core';
import { BusinessPartner } from './business-partner';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BusinessPartnerService {

  baseURL = 'http://localhost:8080/business-partner/';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) { }

  getBusinessPartners(): Observable<BusinessPartner[]> {
    /*  return of(BUSINESSPARTNERS); */
    return this.http.get<BusinessPartner[]>(this.baseURL + 'getLastUsed');
  }

  getBusinessPartner(id: number): Observable<BusinessPartner> {
    return this.http.get<BusinessPartner>(this.baseURL + id + '/detail');
    /* return of(BUSINESSPARTNERS.find(businessPartner => businessPartner.bpID === id)); */

  }

  /** Post: update the vehicle on the server */
  updateBusinessPartner(businessPartner: BusinessPartner): Observable<any> {
    return this.http.post(this.baseURL + 'update', businessPartner, this.httpOptions).pipe(
      catchError(this.handleError<BusinessPartner[]>('updateBusinessPartner', [])));
  }

  onUpload(selectedFile: File, id: number) {
    const formData = new FormData();
    formData.append('image', selectedFile, selectedFile.name);
    this.http.post(this.baseURL + `${id}/upload`, formData, {
      reportProgress: true,
      observe: 'events',
    })
      .subscribe(res => {
       /*  if (event.type === HttpEventType.UploadProgress) {
          console.log('Upload Progress' + Math.round(event.loaded / event.total) * 100 + '%');
        } else if (event.type === HttpEventType.Response) {
          console.log(event);
        } */
        console.log(res);

      });

  }

  handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }


}
