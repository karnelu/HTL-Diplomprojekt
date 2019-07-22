import { Injectable } from '@angular/core';
import { GESCHAEFTSPARTNER } from './mock-GP';
import { GP } from './GP';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GeschaeftspartnerService {

  constructor() { }

  getGP(): Observable<GP[]> {
    return of(GESCHAEFTSPARTNER);
  }

  getOneGP(id: number): Observable<GP> {
    return of(GESCHAEFTSPARTNER.find(GP => GP.id === id));
  }
}
