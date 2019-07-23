import { Injectable } from '@angular/core';
import { GESCHAEFTSPARTNER_List } from './mock-GPlist';
import { GP } from './GP';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GeschaeftspartnerService {

  constructor() { }

  getGPlist(): Observable<GP[]> {
    return of(GESCHAEFTSPARTNER_List);
  }

  getGP(id: number): Observable<GP> {
    return of(GESCHAEFTSPARTNER_List.find(GP => GP.id === id));
  }
}
