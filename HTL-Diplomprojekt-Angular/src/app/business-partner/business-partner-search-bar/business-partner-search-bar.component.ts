import { BusinessPartner } from 'src/app/business-partner/business-partner';
import { BusinessPartnerService } from './../business-partner.service';
import { Component, OnInit, ViewChild, ChangeDetectorRef } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';
import { MatPaginator, MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-business-partner-search-bar',
  templateUrl: './business-partner-search-bar.component.html',
  styleUrls: ['./business-partner-search-bar.component.css']
})
export class BusinessPartnerSearchBarComponent implements OnInit {

  private businessPartnerSearchTerms = new Subject<string>();

  @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;
  businessPartners$: Observable<any>;
  dataSource: MatTableDataSource<BusinessPartner> = new MatTableDataSource<BusinessPartner>();

  constructor(
    private businessPartnerService: BusinessPartnerService,
    private changeDetectorRef: ChangeDetectorRef
  ) { }

  ngOnInit() {
    this.changeDetectorRef.detectChanges();
    this.dataSource.paginator = this.paginator;
    this.businessPartners$ = this.dataSource.connect();

    this.businessPartnerSearchTerms.pipe(
      // wait 300ms after each keystroke before considering the term
      debounceTime(300),

      // ignore new term if same as previous term
      distinctUntilChanged(),

      // switch to new search observable each time the term changes
      switchMap((term: string) => this.businessPartnerService.searchBusinessPartner(term)))
      .subscribe(businessPartners => this.dataSource.data = businessPartners);
  }

  ngOnDestroy() {
    if (this.dataSource) {
      this.dataSource.disconnect();
    }
  }

  searchBusinessPartner(term: string): void {
    this.businessPartnerSearchTerms.next(term);
  }

}
