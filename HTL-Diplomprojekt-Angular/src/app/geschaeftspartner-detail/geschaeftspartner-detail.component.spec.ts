import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GeschaeftspartnerDetailComponent } from './geschaeftspartner-detail.component';

describe('GeschaeftspartnerDetailComponent', () => {
  let component: GeschaeftspartnerDetailComponent;
  let fixture: ComponentFixture<GeschaeftspartnerDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GeschaeftspartnerDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GeschaeftspartnerDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
